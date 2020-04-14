import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import AppBar from 'material-ui/AppBar'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'
class PersonalDetails extends Component {

    // Continue
    continue = e => {
        e.preventDefault()

        // call the next step function in the user form
        this.props.nextStep()
    }
    back = e => {
        e.preventDefault()

        // call the next step function in the user form
        this.props.prevStep()
    }
    render() { 
        const {values, handleChange} = this.props;
        return (
            <MuiThemeProvider>
                <>
                   <AppBar title="Personal details "/> 
                   <TextField 
                   hintText="Enter your occupation"
                   floatingLabelText="occupation"
                //    Passing first name to handle change as an input
                   onChange={handleChange('occupation')}
                   defaultValue={values.occupation}
                
                   />
                   <br />
                   <TextField 
                   hintText="Enter your city"
                   floatingLabelText="city"
                //    Passing first name to handle change as an input
                   onChange={handleChange('city')}
                   defaultValue={values.city}
                
                   />
                   <br />
                   <TextField 
                   hintText="Enter your bio "
                   floatingLabelText="bio"
                //    Passing first name to handle change as an input
                   onChange={handleChange('bio')}
                   defaultValue={values.bio}
                
                   />
                   <br/>
                   <RaisedButton 
                   label="Continue"
                   primary={true}
                   style={styles.button}

                   // handle click
                   onClick={this.continue}
                   />
                   <br/>
                   <RaisedButton 
                   label="Back"
                   primary={false}
                   style={styles.button}

                   // handle click
                   onClick={this.back}
                   />
                </>
            </MuiThemeProvider>
        );
    }
}
 
const styles = {
    button:{
        margin:15
    }
}
export default PersonalDetails;