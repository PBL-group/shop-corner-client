import React from 'react'
import CheckoutItem from './Item'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { selectCartItems, selectCartTotal } from '../../redux/cart/cart.selectors'

const Checkout = ({cartItems, total}) => (
    <div className='w-[60%] min-h-[90vh] flex flex-col align-center mx-auto mt-12 mb-0'>
        <div className='w-full py-3 flex justify-between border-b'>
            <div className='flex justify-center capitalize w-2/5 last:w-1/12'>
                <span>Product</span>
            </div>
            <div className='flex justify-center capitalize w-2/5 last:w-1/12'>
                <span>Description</span>
            </div>
            <div className='flex justify-center capitalize w-2/5 last:w-1/12'>
                <span>Quantity</span>
            </div>
            <div className='flex justify-center capitalize w-2/5 last:w-1/12'>
                <span>Price</span>
            </div>
            <div className='flex justify-center capitalize w-2/5 last:w-1/12'>
                <span>Remove</span>
            </div>
        </div>
        
        {
            cartItems.map(cartItem => (
                <CheckoutItem key={cartItem.id} cartItem={cartItem} />
            ))
        }

        <div className='mt-16 ml-auto text-lg'>
            <span>Total: ${total}</span>
        </div>
    </div>
)

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
    total: selectCartTotal
})

export default connect(mapStateToProps)(Checkout)