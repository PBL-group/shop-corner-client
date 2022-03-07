import React from 'react'
import SignIn from '../../containers/signin/SignIn'
import SignUp from '../../containers/signup/SignUp'

const Authentication = () => (
    <div className='flex flex-col md:flex-row md:justify-between md:my-8 md:mx-auto md:w-[53rem]'>
        <SignIn />
        <SignUp />
    </div>
)

export default Authentication
