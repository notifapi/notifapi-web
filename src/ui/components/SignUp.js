
import React, { Component, PropTypes } from 'react';
import { Field } from 'redux-form';

const renderField = ({ input, label, type, meta: { touched, error } }) => (
    <div className={`form-group singup-form ${touched && error ? 'has-error' : ''}`}>
        <input className="form-control" {...input} placeholder={label} type={type} title={error}/>
    </div>
)

const SignUpBanner = () => {
    return (
        <div className="signup signup-padding">
            <h2>
                Start handler notifications for free with our RESTful API
            </h2>
            <p>
                Sign up now or read down for more details
            </p>
        </div>
    )
}

const SignUpForm = (props) => {
    return (
        <form className="form-inline text-center" onSubmit={props.handleSubmit(props.signUpUser)}>
            <Field name="username" type="text" component={renderField} label="Username"/>
            <Field name="email" type="text" component={renderField} label="Email"/>
            <Field name="password" type="password" component={renderField} label="Password"/>

            <button type="submit" className="btn btn-success signup-form" disabled={props.invalid}>Sign Up</button>
        </form>
    )
}

export default class SignUp extends Component {
    static contextTypes = {
        router: PropTypes.object
    };

    componentWillReceiveProps(nextProps) {
        if(nextProps.user) {
            this.context.router.push('/confirm');
        }
    }

    render() {
        const { handleSubmit, invalid } = this.props;

        return(
            <div>
                <SignUpBanner />
                <SignUpForm
                    handleSubmit={handleSubmit}
                    invalid={invalid}
                    signUpUser={this.props.signUpUser.bind(this)}/>
            </div>
        )
    }
}