
import React from 'react';
import { Component } from 'react';

export default class SingUp extends Component {

    render() {
        return(
            <div>
                <div className="singup singup-padding">
                    <h2>
                        Start handler notification for free with our restFULL API
                    </h2>
                    <p>
                        Sing up now or scroll down for more details
                    </p>
                </div>

                <form className="form-inline text-center">
                    <div className="form-group singup-form">
                        <input type="text" className="form-control" placeholder="Username"></input>
                    </div>
                    <div className="form-group singup-form">
                        <input type="email" className="form-control"  placeholder="Email"></input>
                    </div>
                    <div className="form-group singup-form">
                        <input type="password" className="form-control"  placeholder="Password"></input>
                    </div>
                    <button type="submit" className="btn btn-success singup-form">Sing Up</button>
                </form>
            </div>
        )
    }
}