import React, { useState } from 'react'
import FormInput from '../../components/input/FormInput';
import Button from '../../components/button/Button'

function SignUp () {

    const[displayName, setDisplayName] = useState("");
    const[email, setEmail] = useState("");
    const[password, setPassword] = useState("");
    const[confirmPassword, setConfirmPassword] = useState("");

    const handleSubmit = async event => {
        event.preventDefault();

        if(password !== confirmPassword) {
            alert('Password doesn\'t match');
            return;
        }

        try {
            // const { user } = await createUserWithEmailAndPassword(auth, email, password);
            // await createUserProfileDocument(user, {displayName})

            setDisplayName(null)
            setEmail(null)
            setPassword(null)
            setConfirmPassword(null)
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div className='flex flex-col w-96'>
            <h2 className='my-2'>I don't have an Account</h2>
            <span>Sign up with your email and password</span>

            <form className='sign-up-form' onSubmit={handleSubmit}>
                <FormInput 
                    type='text'
                    name='displayName'
                    value={displayName}
                    onChange={event => setDisplayName(event.target.value)}
                    label='Display Name'
                    required
                />  
                <FormInput 
                    type='email'
                    name='email'
                    value={email}
                    onChange={event => setEmail(event.target.value)}
                    label='Email'
                    required
                />  
                <FormInput 
                    type='password'
                    name='password'
                    value={password}
                    onChange={event => setPassword(event.target.value)}
                    label='Password'
                    required
                />  
                <FormInput 
                    type='password'
                    name='confirmPassword'
                    value={confirmPassword}
                    onChange={event => setConfirmPassword(event.target.value)}
                    label='Confirm Password'
                />  
                <Button type='submit'>Sign Up</Button>
            </form>
        </div>
    )
}


export default SignUp
