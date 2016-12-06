
import React from 'react';
import { Component } from 'react';
import { Field } from 'redux-form';

const renderField = ({ input, label, type, meta: { touched, error } }) => (
    <div className={`form-group singup-form ${touched && error ? 'has-error' : ''}`}>
        <input className="form-control" {...input} placeholder={label} type={type} title={error}/>
    </div>
)

const SingUpBanner = () => {
    return (
        <div className="singup singup-padding">
            <h2>
                Start handler notifications for free with our RestFULL API
            </h2>
            <p>
                Sing up now or read down for more details
            </p>
        </div>
    )
}

const SingUpForm = (props) => {

    return (
        <form className="form-inline text-center" onSubmit={props.handleSubmit(props.signUpUser)}>
            <Field name="username" type="text" component={renderField} label="Username"/>
            <Field name="email" type="text" component={renderField} label="Email"/>
            <Field name="password" type="password" component={renderField} label="Password"/>

            <button type="submit" className="btn btn-success singup-form" disabled={props.invalid}>Sing Up</button>
        </form>
    )
}

export default class SingUp extends Component {

    render() {
        const { handleSubmit, invalid } = this.props;

        return(
            <div>
                <SingUpBanner />
                <SingUpForm
                    handleSubmit={handleSubmit}
                    invalid={invalid}
                    signUpUser={this.props.signUpUser.bind(this)}/>
            </div>
        )
    }
}