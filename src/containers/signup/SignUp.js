import React, { useState, useEffect } from 'react'
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth'
import { connect } from 'react-redux';
import { auth } from '../../firebase/firebase.config'
import FormInput from '../../components/input/FormInput';
import Button from '../../components/button/Button'
import { useNavigate } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';
import { selectCurrentUser } from '../../redux/user/user.selectors';
import { toast } from 'react-toastify';

function SignUp ({currentUser}) {
    const navigate = useNavigate()

    const[userName, setUserName] = useState("");
    const[email, setEmail] = useState("");
    const[password, setPassword] = useState("");
    const[confirmPassword, setConfirmPassword] = useState("");

    const handleSubmit = async event => {
        if(password !== confirmPassword) {
            toast.error('Passwords doesn\'t match');
            return;
        }

        try {
            event.preventDefault();
            const { user } = await createUserWithEmailAndPassword(auth, email, password);
            updateProfile(user, {
                displayName: userName
            })
            setUserName("")
            setEmail("")
            setPassword("")
            setConfirmPassword("")
        } catch (error) { 
            console.log(error);
        }
    }

    useEffect(()=> {
        if(currentUser) {
            navigate('/')
        }

    }, [currentUser, navigate])

    return (
        <div className='flex flex-col w-96'>
            <h2 className='my-2'>I don't have an Account</h2>
            <span>Sign up with your email and password</span>

            <form className='sign-up-form' onSubmit={handleSubmit}>
                <FormInput 
                    type='text'
                    name='userName'
                    value={userName}
                    onChange={
                        event => setUserName(event.target.value)
                    }
                    label='Display Name'
                    required
                />  
                <FormInput 
                    type='email'
                    name='email'
                    value={email}
                    onChange={
                        event => setEmail(event.target.value)
                    }
                    label='Email'
                    required
                />  
                <FormInput 
                    type='password'
                    name='password'
                    value={password}
                    onChange={
                        event => setPassword(event.target.value)
                    }
                    label='Password'
                    required
                />  
                <FormInput 
                    type='password'
                    name='confirmPassword'
                    value={confirmPassword}
                    onChange={
                        event => setConfirmPassword(event.target.value)
                    }
                    label='Confirm Password'
                />  
                <Button type='submit'>Sign Up</Button>
            </form>
        </div>
    )
}

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser
})

export default  connect(mapStateToProps)(SignUp)
