import React from 'react'
import { MdOutlineShoppingBasket } from 'react-icons/md'
import Dropdown from './Dropdown'

const Cart = ({ itemCount }) => {
    return (
        <div className='relative flex align-center justify-center'>
            <MdOutlineShoppingBasket className='w-6 h-6' />
            <span className='absolute text-xs font-bold bottom-3 left-4'>10</span>
            <Dropdown />
        </div>
    )
}

export default Cart
