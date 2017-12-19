const JWT = require('jsonwebtoken');
const User = require('../models/users');
const {JWT_SECRET} = require('../configuration')


signToken = user => {
    return JWT.sign({
        iss: "airbnb",
        sub: user._id,
        iat: new Date().getTime(),
        exp: new Date().setDate(new Date().getDate() + 1), ///day ahead from now
    }, JWT_SECRET)

}
module.exports = {
    secret: async (req, res ,next) => {
    //   res.json({shit:'shit'})

    },

    signup: async (req, res) => {
        console.log("signup has been called")
        const { email, password } = req.value.body;
        const foundUser = await User.findOne({ email });
        if (foundUser) {
            return res.status(403).json({ error: 'email is already in use !!!' });
        }
        const newUser = new User(req.body);
        await newUser.save()

        const token = signToken(newUser);
        // console.log('token',token)
        //respond with jwt
        res.status(200).json({ token,  name: req.body.name.first,message: 'Created successfully' })


    },
    login: async (req, res, next) => {
        if (!req.body.email) {
            return res.status(200).json({ message: 'Email id is mandatory' });
        }

        if (!req.body.password) {
            return res.status(200).json({ message: 'Password id is mandatory' });
        }

        try {
            const token = signToken(req.user);
            // console.log(res.req.user)
            return res.status(200).json({ token, name: res.req.user.name.first });
        } catch (error) {}
    },

    getUsers: async (req, res) => {
        try {
            const users = await Users.find({}, '-__v');
            res.status(200).json(users);
        } catch (error) {
            res.send(error);
        }
    },

    getUser: async (req, res) => {
        try {
            const user = await Users.findById({ _id: req.params.userId }, '-__v');
            res.status(200).json(user);
        } catch (error) {
            res.send(error);
        }
    }



};
