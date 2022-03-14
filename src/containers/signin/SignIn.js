import React, { useEffect, useState } from 'react'
import axios from 'axios'
import FormInput from '../../components/input/FormInput';
import Button from '../../components/button/Button';
import { auth, googleAuthProvider } from '../../firebase/firebase.config';
import { signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import { connect } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';
import { selectCurrentUser } from '../../redux/user/user.selectors';
import { setCurrentUser } from '../../redux/user/user.actions';

const signinUser = async ( authtoken ) => await axios.post(`${process.env.REACT_APP_API}/signin`, {}, {
    headers: {
        authtoken
    }
})

function SignIn({ currentUser, setCurrentUser }) {
    const signInWithGoogle = () => signInWithPopup(auth, googleAuthProvider);

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("")

    const navigate = useNavigate()

    const handleSubmit = async event => {
        event.preventDefault();

        try {
            const { user } = await signInWithEmailAndPassword(auth, email, password)
            
            signinUser((await user.getIdTokenResult()).token)
            setEmail("")
            setPassword("")
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(()=> {
        if(currentUser) {
            navigate('/')
        }

        return function cleanup() {
            setCurrentUser(currentUser)
        };
    }, [setCurrentUser, navigate, currentUser])
        
    return (
        <div className='flex flex-col'>
            <h2 className='my-2'>I already have an Account</h2>
            <span>Sign in with your email and password</span>

            <form onSubmit={handleSubmit}>
                <FormInput name='email' type='email' value={email} required onChange={event => setEmail(event.target.value)} label='Email' />
                <FormInput name='password' type='password' value={password} required onChange={event=> setPassword(event.target.value)} label='Password' />

                <div className='flex justify-between'>
                    <Button type="submit" >Sign In</Button>
                    <Button onClick={signInWithGoogle} type='submit' isGoogleSignIn >Sign in With google</Button>
                </div>
            </form>
        </div>
    )
}

const mapDispatchToProps = dispatch => ({
    setCurrentUser: user => dispatch(setCurrentUser(user))
})

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser
})

export default connect(mapStateToProps, mapDispatchToProps)(SignIn)


