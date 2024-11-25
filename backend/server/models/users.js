const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    imageUrl: String,
    name: {
        first: String,
        last: String
    },
    password: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    reviews: [
        {
            type: Schema.Types.ObjectId,
            ref: 'review'
        }
    ],
    locations: [
        {
            type: Schema.Types.ObjectId,
            ref: 'location'
        }
    ]
});

UserSchema.pre('save', async function(next) {
    try {
        const salt = await bcrypt.genSalt(10);
        this.password = await bcrypt.hash(this.password, salt);
        next();
    } catch (error) {
        next(error);
    }
});

UserSchema.methods.isValidPassword = async function(newPassword) {
    try {
        return await bcrypt.compare(newPassword, this.password);
    } catch (error) {
        throw new Error('Problem validating password', error);
    }
};

// const user = 

module.exports = mongoose.model('user', UserSchema);;
