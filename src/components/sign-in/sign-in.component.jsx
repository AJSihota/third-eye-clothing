import React, { Component } from 'react'
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import './sign-in.styles.scss';
import { signInWithGoogle } from '../../firebase/firebase.utils';


class SignIn extends Component {

    constructor(props) {
        super(props);
        
        this.state = {
            email: '',
            password: ''
        }

        this.handleChange = this.handleChange.bind(this);

    }

    handleSubmit(e) {
        e.preventDefault();
        this.setState({email: '', password: ''})
    }

    handleChange(e) {
        e.preventDefault();

        const {name, value} = e.target;

        this.setState({[e.target.name]: e.target.value }, () => {console.log(this.state.email)});
    }


    render() {
        return (
            <div className="sign-in">
                <h2>I already have an account</h2>
                <span>Sign In with your email and pass:</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput type="email" name="email" value={this.state.email} required handleChange={this.handleChange} label="Email"/>
                    <FormInput type="password" label="Password" name="password" value={this.state.password} required handleChange={this.handleChange} />
                
                <CustomButton type="submit"  > Sign In </CustomButton> <br/>
                <CustomButton type="submit" onClick={signInWithGoogle} > {' '} Sign In With Google{' '} </CustomButton>
                </form>
            </div>
        )
    }
}

export default SignIn;
