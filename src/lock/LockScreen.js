import React, { Component } from "react";
import "./LockScreen.css";
import history from '../history';

export default class LockScreen extends Component {
    constructor(props) {
        super(props)
        this.state = {
            passwordInput : '',
            showAlert: false
        }
        this.handlePasswordChange = this.handlePasswordChange.bind(this);

      }
    


    handlePasswordChange = (e) => {
        this.setState({passwordInput: e.target.value});
    }

    handleLoginSubmit = (e) => {
        e.preventDefault();
        let hardcodedCred = {
            password: 'deepinbopz'
        }

        if (this.state.passwordInput == hardcodedCred.password) {
            //combination is good. Log them in.
            //this token can be anything. You can use random.org to generate a random string;
            const token = '123456abcdef';
            sessionStorage.setItem('auth-token', token);
            //go to www.website.com/todo
            history.push('/');
        } else {
            //bad combination
            this.setState({showAlert: true});
        }   
    }


    render() {
        return (
            <div>
                <div class="lock-wrapper">
                    <div class="lock-trademarked">
                        <img id="lock-logo" src="squiggles-v2.svg" alt="squiggles"/>
                    </div>
                </div>                
                
                <div className="lock-form-group">
                    <input
                    type="password"
                    autoComplete="new-password"
                    className="form-control"
                    id="exampleInputPassword1"
                    placeholder="password"
                    value={this.state.passwordInput}
                    onChange={this.handlePasswordChange}
                /></div>
                    
                {this.state.showAlert ? (<div className="fade-in">please try again.</div>) : null}

                <div class="lock-info">evolution is here.</div>
            </div>

        )
    }
        

}