import React from 'react'
import { Link } from 'react-router-dom'
import { MdTurnedInNot, MdPersonOutline } from "react-icons/md";
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux'
import { selectCartHidden } from '../../redux/cart/cart.selectors'
import { selectCurrentUser } from '../../redux/user/user.selectors';
import { toggleCartHidden } from '../../redux/cart/cart.actions'

import Logo from '../../assets/images/brands/NavLogo.svg'
import Searchbar from '../searchbar/Searchbar';
import Cart from '../cart/Cart';
import Dropdown from '../cart/Dropdown';
import { signOut } from 'firebase/auth';
import { auth } from '../../firebase/firebase.config';

const Navbar = ({hidden, toggleCartHidden, currentUser}) => {

    return (
    <>
        <div className='hidden lg:w-full lg:flex bg-neutral-200 justify-center font-sans'>
            <div className='container flex justify-between'>
                <Link to='/home'><small className='text-xs'>Get Best offers for anything you need</small></Link>
                <Link to='/home'><small className='text-xs'>Connect With different brands</small></Link>
                <Link to='/home'><small className='text-xs'>Expand your Business online</small></Link>
                <Link to='/home'><small className='text-xs'>Partner and collaborate with different people</small></Link>
            </div>  
        </div>
        <header className='z-50 font-neue text-lg sticky top-0 bg-slate-50'>
            <div className=' w-full py-1.5 px-8 flex justify-center'>
                <nav className='container'>
                    <div className='flex justify-between'>
                        <div className='flex align-center order-2'><Link className='' to='/'> <img width='172px' height='auto' src={Logo} alt="" /> </Link></div>
                        <ul className='hidden lg:flex order-1 w-2/5'>
                            <li className='py-4 px-2'><Link to='shop'>Shop</Link></li>
                            <li className='py-4 px-2'><Link to='collections'>Collections</Link></li>
                            <li className='py-4 px-2'><Link to='seller'>sellers</Link></li>
                        </ul>
                        <ul className='flex order-3 w-full justify-end flex-1 lg:flex-none lg:w-2/5'>
                            <li className='py-4 px-2 w-1/2 hidden sm:inline'>
                                <Searchbar />
                            </li>
                            <li className='py-4 px-2'>
                                {
                                    currentUser ?  
                                    <Link className='text-2xl' to=''>
                                        <MdPersonOutline 
                                            onClick={
                                                async () => {
                                                    await signOut(auth);
                                                }
                                            } 
                                        />
                                    </Link> : 
                                    <Link to='auth'>
                                        <button className='border px-4 text-md rounded-sm' >Sign In</button>
                                    </Link>
                                }
                            </li>
                            <li className='py-4 px-2'>
                                <Link className='text-2xl' to=''>
                                    <MdTurnedInNot />
                                </Link>
                            </li>
                            <li className='py-4 px-2' onMouseEnter={toggleCartHidden} onMouseLeave={toggleCartHidden} >
                                <div className='text-2xl' to=''>
                                    <Cart />
                                </div>
                                {
                                    hidden ? null : <Dropdown />
                                }
                            </li>
                        </ul>
                    </div>

                </nav>
            </div>
        </header>
    </>
)
}

const mapStateToProps = createStructuredSelector({
    hidden: selectCartHidden,
    currentUser: selectCurrentUser
})

const mapDispatchToProps = dispatch => ({
    toggleCartHidden: () => dispatch(toggleCartHidden()),
})

export default connect(mapStateToProps, mapDispatchToProps)(Navbar)