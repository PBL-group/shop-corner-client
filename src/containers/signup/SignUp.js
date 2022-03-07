import React, { Component } from 'react'
import FormInput from '../../components/input/FormInput';
import Button from '../../components/button/Button'
import { auth, createUserProfileDocument } from '../../firebase/firebase'
import { createUserWithEmailAndPassword } from 'firebase/auth';

class SignUp extends Component {
    constructor() {
        super();

        this.state = {
            displayName: '',
            email: '',
            password: '',
            confirmPassword: '',
        }
    }

    handleSubmit = async event => {
        event.preventDefault();
        const { displayName, email, password, confirmPassword } = this.state;

        if(password !== confirmPassword) {
            alert('Password doesn\'t match');
            return;
        }

        try {
            const { user } = await createUserWithEmailAndPassword(auth, email, password);
            await createUserProfileDocument(user, {displayName})

            this.setState({
                displayName: '',
                email: '',
                password: '',
                confirmPassword: '',
            })
        } catch (error) {
            console.log(error);
        }
    }

    handleChange = event => {
        const { name, value } = event.target;

        this.setState({[name]: value})
    }

    render() {
        const { displayName, email, password, confirmPassword } = this.state;

        return (
            <div className='flex flex-col w-96'>
                <h2 className='my-2'>I don't have an Account</h2>
                <span>Sign up with your email and password</span>

                <form className='sign-up-form' onSubmit={this.handleSubmit}>
                    <FormInput 
                        type='text'
                        name='displayName'
                        value={displayName}
                        onChange={this.handleChange}
                        label='Display Name'
                        required
                    />  
                    <FormInput 
                        type='email'
                        name='email'
                        value={email}
                        onChange={this.handleChange}
                        label='Email'
                        required
                    />  
                    <FormInput 
                        type='password'
                        name='password'
                        value={password}
                        onChange={this.handleChange}
                        label='Password'
                        required
                    />  
                    <FormInput 
                        type='password'
                        name='confirmPassword'
                        value={confirmPassword}
                        onChange={this.handleChange}
                        label='Confirm Password'
                    />  
                    <Button type='submit'>Sign Up</Button>
                </form>
            </div>
        )
    }
}

export default SignUp
