import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import AppBar from 'material-ui/AppBar'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'
class UserDetails extends Component {

    // Continue
    continue = e => {
        e.preventDefault()

        // call the next step function in the user form
        this.props.nextStep()
    }
    render() { 
        const {values, handleChange} = this.props;
        return (
            <MuiThemeProvider>
                <>
                   <AppBar title="Enter user details "/> 
                   <h2> Step 1 </h2>
                   <TextField 
                   hintText="Enter your first name"
                   floatingLabelText="First name"
                //    Passing first name to handle change as an input
                   onChange={handleChange('firstName')}
                   defaultValue={values.firstName}
                
                   />
                   <br />
                   <TextField 
                   hintText="Enter your last name"
                   floatingLabelText="last name"
                //    Passing first name to handle change as an input
                   onChange={handleChange('lastName')}
                   defaultValue={values.lastName}
                
                   />
                   <br />
                   <TextField 
                   hintText="Enter your email "
                   floatingLabelText="email"
                //    Passing first name to handle change as an input
                   onChange={handleChange('email')}
                   defaultValue={values.email}
                
                   />
                   <br/>
                   <RaisedButton 
                   label="Continue"
                   primary={true}
                   style={styles.button}

                   // handle click
                   onClick={this.continue}
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
export default UserDetails;