import React, { Component } from "react";
import UserDetails from "./UserDetails";
import PersonalDetails from "./PersonalDetails";
import Confirm from "./Confirm";

export class Userform extends Component {
  state = {
    step: 1,
    firstName: "",
    lastName: "",
    email: "",
    occupation: "",
    city: "",
    bio: "",
  };

  // Proceed to next step
  nextStep = () => {
    const { step } = this.state; // pull step from state
    this.setState({
      step: step + 1,
    });
  };
  // Go back
  prevStep = () => {
    const { step } = this.state; // pull step from state
    this.setState({
      step: step - 1,
    });
  };

  // handle fields
  handleChange = (input) => (e) => {
    // take whaterver the input and set it to whatever the value is
    this.setState({ [input]: e.target.value });
  };
  render() {
    const { step } = this.state;
    const { firstName, lastName, email, occupation, bio } = this.state;
    const values = { firstName, lastName, email, occupation, bio };

    switch (step) {
      case 1:
        return (
          <UserDetails
            nextStep={this.nextStep}
            values={values}
            handleChange={this.handleChange}
          />
        );
      case 2:
        return <PersonalDetails 
        nextStep={this.nextStep}
        prevStep={this.prevStep}
            values={values}
            handleChange={this.handleChange}
        />
      case 3:
        return <Confirm 
        nextStep={this.nextStep}
        prevStep={this.prevStep}
            values={values}
           
        />;
      case 4:
        return <h1> Success </h1>;
    }
  }
}

export default Userform;
