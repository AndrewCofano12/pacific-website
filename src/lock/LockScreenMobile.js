import React, { Component } from "react";
import "./LockScreen.css";
import Squiggles from '../icons/squiggles-v2.svg';
import { Formik, Field, Form} from 'formik';

export default class LockScreenMobile extends Component {
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
        console.log(this.state.passwordInput)
        let hardcodedCred = {
            password: 'deepinbopz'
        }

        const token = '456abcdef';
        sessionStorage.setItem('auth-token', token);
        //go to www.website.com/todo
        // history.push('/');
        window.location.reload(true);


      }
      handleChange(event) {
        this.setState({value: event.target.value});
      }

    handlePasswordChange = (e) =>  {
        console.log(e);

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

                <form className="lock-form-group" onSubmit={this.handleSubmit}>
                    <input
                    type="password"
                    className="lock-form-control"
                    id="password"
                    autocomplete="off"
                    input={this.state.passwordInput}
                    onChange={(event) => this.handlePasswordChange(event)}
                    
                />
                                    </form>

                {/* {this.state.showAlert ? (<div className="fade-in">please try again.</div>) : null} */}

                <div className="lock-info">evolution is here.</div>
            </div>

        )
    }
        

}