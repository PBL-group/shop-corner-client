import React, { useState } from 'react'
import FormInput from '../../components/input/FormInput';
import Button from '../../components/button/Button';

function SignIn() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("")

    const handleSubmit = async event => {
        event.preventDefault();

        try {
            // await signInWithEmailAndPassword(auth, email, password)

            setEmail(null)
            setPassword(null)
        } catch (error) {
            console.log(error)
        }
    }
        
    return (
        <div className='flex flex-col'>
            <h2 className='my-2'>I already have an Account</h2>
            <span>Sign in with your email and password</span>

            <form onSubmit={handleSubmit}>
                <FormInput name='email' type='email' value={email} required onChange={event => setEmail(event.target.value)} label='Email' />
                <FormInput name='password' type='password' value={password} required onChange={event=> setPassword(event.target.value)} label='Password' />

                <div className='flex justify-between'>
                    <Button type="submit" >Sign In</Button>
                    {/* for google sign in button there should be an onclick method that will be run 
                    which will have a functionality implemented with firebase */}
                    <Button type='submit' isGoogleSignIn >Sign in With google</Button>
                </div>
            </form>
        </div>
    )
}

export default SignIn

