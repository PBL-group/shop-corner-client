import React from 'react'
import { Link } from 'react-router-dom'
import Button from '../button/Button'
import { FaFacebookSquare, FaInstagram, FaPinterest, FaTelegram, FaTumblr, FaTwitter, FaYoutube } from "react-icons/fa";

const Footer = () => (
    <footer className='bg-neutral-100'> 
        <div className='flex justify-center'>
            <div className='container' >
                <div className='flex flex-col p-8 md:align-center md:flex-row md:gap-4'>
                    <div className='w-full md:mb-4 md:w-1/2' >
                        <small>Newsletter</small>
                        <p className='pt-4 font-sans text-md'>Exclusives, sale previews, and discounts off your first full-price transaction await you at ShopCorner! What's not to like about that?</p>
                    </div>
                    <form className='w-full md:w-1/2'>
                        <div className='inline-block sm:flex sm:gap-2'>
                            <input className='flex-1 h-[3.125rem] px-4 placeholder:font-sans' type='email' placeholder='Put your Email'></input>
                            <Button >Submit</Button>
                        </div>
                        <div className='border-b border-black pt-4 inline-block'>
                            <Link to="#">
                                <small className='uppercase'>view our Privacy Policy</small>
                            </Link>
                        </div>
                    </form>
                </div>

                <div className='border-t p-8'>
                    <div className='flex flex-wrap justify-center font-body uppercase text-sm'>
                        <div className='flex justify-center flex-wrap'>
                            <ul className='mx-8 md:mx-16'>
                                <h3 className='text-sm font-bold py-2 underline'>About Us</h3>
                                <li className='px-2'><Link to='#'>About Us</Link></li>
                                <li className='px-2'><Link to='#'>careers</Link></li>
                                <li className='px-2'><Link to='#'>Testimonials</Link></li>
                                <li className='px-2'><Link to='#'>Blog</Link></li>
                            </ul>
                            <ul className='mx-8 md:mx-16'>
                                <h3 className='text-sm font-bold py-2 underline'>Help</h3>
                                <li className='px-2'><Link to='#'>About Us</Link></li>
                                <li className='px-2'><Link to='#'>careers</Link></li>
                                <li className='px-2'><Link to='#'>Testimonials</Link></li>
                                <li className='px-2'><Link to='#'>Blog</Link></li>
                            </ul>
                        </div>
                        <div className='flex justify-center flex-wrap'>
                            <ul className='mx-8 md:mx-16'>
                                <h3 className='text-sm font-bold py-2 underline'>Explore</h3>
                                <li className='px-2'><Link to='#'>About Us</Link></li>
                                <li className='px-2'><Link to='#'>careers</Link></li>
                                <li className='px-2'><Link to='#'>Testimonials</Link></li>
                                <li className='px-2'><Link to='#'>Blog</Link></li>
                            </ul>
                            <ul className='mx-8 md:mx-16'>
                                <h3 className='text-sm font-bold py-2 underline'>Shop with Us</h3>
                                <li className='px-2'><Link to='#'>About Us</Link></li>
                                <li className='px-2'><Link to='#'>careers</Link></li>
                                <li className='px-2'><Link to='#'>Testimonials</Link></li>
                                <li className='px-2'><Link to='#'>Blog</Link></li>
                            </ul>
                        </div>
                    </div>
                    <div className='flex justify-center border-t mt-6'>
                        <div className='p-8 flex flex-col lg:flex-row lg:justify-between w-full'>
                            <form className='flex flex-1 flex-col sm:flex-row sm:justify-center sm:align-center'>
                                <label className='self-center p-4' for='region'>Choose your Region</label>
                                <select className='w-10/12 h-[3rem] md:w-80' name='region'>
                                    <option value="addis-ababa">Addis Ababa</option>
                                    <option value="adama">Adama</option>
                                    <option value="hawassa">Hawassa</option>
                                    <option value="mekelle">Mekelle</option>
                                    <option value="ambo">Ambo</option>
                                </select>
                            </form>
                            <ul className='py-4 text-2xl flex flex-wrap gap-8 justify-center'>
                                <li><FaFacebookSquare /></li>
                                <li><FaTwitter /></li>
                                <li><FaInstagram /></li>
                                <li><FaYoutube /></li>
                                <li><FaPinterest /></li>
                                <li><FaTumblr /></li>
                                <li><FaTelegram /></li>
                            </ul>
                        </div>                     
                    </div>
                </div>
            </div>
        </div>
        
        <div className=' font-body uppercase p-4 bg-neutral-200 flex justify-center'>
            <div className='container flex flex-col md:flex-row justify-between'>
                <div className='order-2 md:order-1'>&copy; <small>{new Date().getFullYear()} ShopCorner Ltd. All Rights Reserved</small></div>
                <ul className='flex flex-col sm:flex-row sm:justify-between md:gap-8 order-1 md:order-2'>
                    <li><Link to='#'><small>Sitemap</small></Link></li>
                    <li><Link to='#'><small>Cookies</small></Link></li>
                    <li><Link to='#'><small>Policy</small></Link></li>
                    <li><Link to='#'><small>Terms and Conditions</small></Link></li>
                </ul>
            </div>
        </div>
    </footer>
)


export default Footer