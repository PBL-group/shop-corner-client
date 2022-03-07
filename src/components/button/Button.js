import React from 'react'

const Button = ({children, inverted, customStyles, isGoogleSignIn, ...otherProps}) => (
    <button className={`
        ${inverted ? 'bg-white text-black border hover:bg-black hover:text-white hover:border-0' 
                   : 'bg-black text-white border-0 hover:bg-white hover:text-black hover:border'} 
        min-w-[10rem] w-auto h-[3.125rem] leading-[3.125rem] hover:-m-[1px] px-9 text-sm uppercase flex justify-center ${customStyles}
        ${isGoogleSignIn ? 'bg-[#4285f4] text-white hover:border-0 hover:bg-[#357ae8]' : ''} `} 
        {...otherProps}
    >   
        {children}
    </button>
)

export default Button;