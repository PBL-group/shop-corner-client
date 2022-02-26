import React from 'react'
import './checkout.scss'

const Checkout = ({cartItems, total}) => (
    <div className='checkout-container'>
        <div className='checkout-header'>
            <div className='header-block'>
                <span>Product</span>
            </div>
            <div className='header-block'>
                <span>Description</span>
            </div>
            <div className='header-block'>
                <span>Quantity</span>
            </div>
            <div className='header-block'>
                <span>Price</span>
            </div>
            <div className='header-block'>
                <span>Remove</span>
            </div>
        </div>
        
        {
            cartItems.map(cartItem => (
                cartItem
                // <CheckoutItem key={cartItem.id} cartItem={cartItem} />
            ))
        }

        <div className='total'>
            <span>Total: ${total}</span>
        </div>
    </div>
)

export default Checkout