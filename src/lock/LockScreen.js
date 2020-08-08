import React, { Component } from "react";
import "./LockScreen.css";
import history from '../history';
import $ from 'jquery';
import Squiggles from '../icons/squiggles-v2.svg'

export default class LockScreen extends Component {
    value = '';

    constructor(props) {
        super(props)
        this.state = {
            passwordInput: '',
            showAlert: false,
            value: ''
        }
        this.handleLoginSubmit = this.handleLoginSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
      }
    

      componentDidMount() {
        var input = document.querySelector("input");
        console.log($('#lock-form input'))
        input.addEventListener('keypress', function(event) {
            console.log("hello")
            if (event.which == 13) {
                event.preventDefault();
                this.handleLoginSubmit(event);

            }


        }.bind(this))
    //    input.keypress(function(event) {

    //         if (event.which == 13) {
    //             event.preventDefault();
    //             this.handleLoginSubmit(event);

    //         }

    //     })
      }


      handleChange(event) {
        this.setState({value: event.target.value});
      }

    handlePasswordChange(e)  {
        console.log("typing");
        this.setState({passwordInput: e.target.value});
    }

    handleLoginSubmit(e) {
        e.preventDefault();
        let hardcodedCred = {
            password: 'deepinbopz'
        }

        if (this.state.passwordInput == hardcodedCred.password) {
            //combination is good. Log them in.
            //this token can be anything. You can use random.org to generate a random string;
            const token = '13456abcdef';
            sessionStorage.setItem('auth-token', token);
            //go to www.website.com/todo
            history.push('/');
        } else {
            //bad combination
            this.setState({showAlert: true});
        }   
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
                
                <div className="lock-form-group">
                    <input
                    key={1}
                    type="password"
                    className="lock-form-control"
                    id="lock-form"
                    value={this.state.passwordInput}
                    onChange={(event)=> this.handlePasswordChange(event)}
                />
            </div>
                    
                {this.state.showAlert ? (<div className="fade-in">please try again.</div>) : null}

                <div className="lock-info">evolution is here.</div>
            </div>

        )
    }
        

}