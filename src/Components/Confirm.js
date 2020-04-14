import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import AppBar from 'material-ui/AppBar'
import {List, ListItem} from 'material-ui/List'
import RaisedButton from 'material-ui/RaisedButton'
class Confirm extends Component {

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
        const {values:{firstName, lastName, email, occupation, city, bio}} = this.props;
        return (
            <MuiThemeProvider>
                <>
                   <AppBar title="Confirm info "/> 
                  
                  <List>
                      <ListItem 
                      primaryText="First name"
                      secondaryText={firstName}
                      />
                      <ListItem 
                      primaryText="last name"
                      secondaryText={lastName}
                      />
                      <ListItem 
                      primaryText="Email"
                      secondaryText={email}
                      />
                      <ListItem 
                      primaryText="occupation"
                      secondaryText={occupation}
                      />
                      <ListItem 
                      primaryText="city"
                      secondaryText={city}
                      />
                      <ListItem 
                      primaryText="bio "
                      secondaryText={bio}
                      />
                  </List>
                   <br/>
                   <RaisedButton 
                   label="Confirm & continue"
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
export default Confirm;