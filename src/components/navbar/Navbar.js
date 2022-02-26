import React from 'react'
import { Link } from 'react-router-dom'
 
const Navbar = () => (
    <header className='sticky'>
        <div className='w-full flex bg-red-400 py-0.5 px-8 '>
            <h1>Get Best offers for anything you need</h1>
        </div>
        <div className='w-full bg-green-400 py-1.5 px-8'>
            <nav>
                <div>
                    <div><Link className='py-4 px-2' to='/'>ShopCorner</Link></div>
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