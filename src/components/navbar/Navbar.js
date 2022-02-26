import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../../assets/images/brands/NavLogo.svg'
 
const Navbar = () => (
    <header className='sticky'>
        <div className='w-full flex bg-red-400 py-0.5 px-8 '>
            <h1>Get Best offers for anything you need</h1>
        </div>
        <div className='w-full bg-green-400 py-1.5 px-8'>
            <nav>
                <div className='flex'>
                    <div><Link className='px-8' to='/'> <img width='75px' height='75px' src={Logo} alt="" /> </Link></div>
                    <ul className='flex'>
                        <li><Link className='py-4 px-2' to='seller'>Seller</Link></li>
                        <li><Link className='py-4 px-2' to='checkout'>Checkout</Link></li>
                    </ul>
                </div>
                
            </nav>
        </div>
    </header>
)

export default Navbar