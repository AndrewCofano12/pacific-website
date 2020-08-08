import React, { Component } from "react";
import "./LockScreen.css";
import history from 'history';
import $ from 'jquery';
import Squiggles from '../icons/squiggles-v2.svg';

export default class LockScreen extends Component {
    value = '';

    constructor(props) {
        super(props)
        this.state = {
            passwordInput: '',
            showAlert: false,
            value: ''
        }
        this.handleChange = this.handleChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }
    

      componentDidMount() {
      }


      handleSubmit(event) {
          console.log("yesss")
        event.preventDefault();
        console.log(event.target.value);
        const data = event.target.value
        let hardcodedCred = {
            password: 'deepinbopz'
        }

        if (this.state.passwordInput == hardcodedCred.password) {
            //combination is good. Log them in.
            //this token can be anything. You can use random.org to generate a random string;
            const token = '456abcdef';
            sessionStorage.setItem('auth-token', token);
            //go to www.website.com/todo
            // history.push('/');
            window.location.reload(true);

        } else {
            //bad combination
            this.setState({showAlert: true});
        }   


      }
      handleChange(event) {
        this.setState({value: event.target.value});
      }

    handlePasswordChange(e)  {
        console.log("typing");
        this.setState({passwordInput: e.target.value});
    }
    componentWillUnmount() {
        var input = document.querySelector("input");
        input.removeEventListener('keypress', null);
    }


    render() {
        return (
            <div className="lock-page">
                <div className="lock-wrapper">
                    <div className="lock-trademarked">
                        <img id="lock-logo" src={Squiggles} alt="squiggles"/>
                    </div>
                </div>                
                {/* <InputGroup>

                    <FormControl type="text" placeholder="Normal text" />
                </InputGroup> */}
 <form className="lock-form-group" onSubmit={this.handleSubmit}>
                    <input
                    type="password"
                    className="lock-form-control"
                    id="password"
                    input={this.state.passwordInput}
                    onChange={this.handlePasswordChange}
                    
                />
                                    </form>

                {/* {this.state.showAlert ? (<div className="fade-in">please try again.</div>) : null} */}

                <div className="lock-info">evolution is here.</div>
            </div>

        )
    }
        

}