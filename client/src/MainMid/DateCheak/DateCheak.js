import React, { Component } from "react";
import DatePicker from "react-datepicker";
import moment from "moment";
import Select from "react-select";

import "react-datepicker/dist/react-datepicker.css";
import "react-select/dist/react-select.css";

import "./DateCheak.css";

export default class DateCheak extends Component {
  constructor() {
    super();
    this.state = {
      startDate: moment(),
      endDate: moment(),
    };
    this.handleChangeStart = this.handleChangeStart.bind(this);
    this.handleChangeEnd = this.handleChangeEnd.bind(this);

    this.options = [
      { value: "one", label: "One" },
      { value: "two", label: "Two" },
      { value: "three", label: "Three" },
      { value: "four", label: "Four" },
      { value: "five", label: "Five" },
    ];
  }
  handleChangeStart = (startDate) => {
    this.setState({ startDate });
  };

  handleChangeEnd = (endDate) => {
    this.setState({ endDate });
  };
  render() {
    return (
      <div className="dateCheak">
        <div className="price">
          {this.props.data}<span>&#8362;</span> <div className="pernigth">per nigth</div>{" "}
        </div>
      <div className="book">
        <div className="dateInput">
          <DatePicker
            selected={this.state.startDate}
            selectsStart
            startDate={this.state.startDate}
            endDate={this.state.endDate}
            onChange={this.handleChangeStart}
            />

          <DatePicker
            selected={this.state.endDate}
            selectsEnd
            startDate={this.state.startDate}
            endDate={this.state.endDate}
            onChange={this.handleChangeEnd}
            />
        </div>
        <div className="select-input">
          <Select
            name="select"
            value={this.options[0]}
            options={this.options}
            onChange={this.logChange}
            />
        </div>
        <button>Request to Book</button>
      </div>
    </div>
    );
  }
}
