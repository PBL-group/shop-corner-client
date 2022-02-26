import React, { Component } from 'react'
import FormInput from '../../components/input/FormInput';
import Button from '../../components/button/Button'
import './sign-in.scss'

export default class SignIn extends Component {
    constructor() {
        super();

        this.state = {
            email: '',
            password: ''
        }
    }

    handleSubmit = async event => {
        event.preventDefault();
        const { email, password } = this.state;

        // try {
        //     await signInWithEmailAndPassword(auth, email, password)

        //     this.setState({email: '', password: ''})
        // } catch (error) {
        //     console.log(error)
        // }
    }

    handleChange = event => {
        const { value, name } = event.target;

        this.setState({ [name]: value})
    }

    render() {
        const { email, password } = this.state;
        
        return (
            <div className='sign-in'>
                <h2>I already have an Account</h2>
                <span>Sign in with your email and password</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput name='email' type='email' value={email} required onChange={this.handleChange} label='email' />
                    <FormInput name='password' type='password' value={password} required onChange={this.handleChange} label='password' />

                    <div className='buttons'>
                        <Button type="submit" >Sign In</Button>
                        <Button onClick={() => alert("You Clicked the button")} type='submit' >Sign in With google</Button>
                    </div>
                </form>
            </div>
        )
    }
}

