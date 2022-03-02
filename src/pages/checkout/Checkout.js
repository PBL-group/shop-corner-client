import React from 'react'
import CheckoutItem from './Item'

const item = {
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRwGR6wcWMLImAsHW-4cLT-hhtPeRARsbgNCOjaZ11-G3t780WTAYL26VZDv56zgTcvK0&usqp=CAU",
    price: 25, 
    name: "Student Backpack",
    quantity: 24
}

const Checkout = ({cartItems, total}) => (
    <div className='w-[55%] min-h-[90vh] flex flex-col align-center mx-auto mt-12 mb-0'>
        <div className='w-full py-3 flex justify-between border-b'>
            <div className='capitalize w-2/5 last:w-1/12'>
                <span>Product</span>
            </div>
            <div className='capitalize w-2/5 last:w-1/12'>
                <span>Description</span>
            </div>
            <div className='capitalize w-2/5 last:w-1/12'>
                <span>Quantity</span>
            </div>
            <div className='capitalize w-2/5 last:w-1/12'>
                <span>Price</span>
            </div>
            <div className='capitalize w-2/5 last:w-1/12'>
                <span>Remove</span>
            </div>
        </div>
        <CheckoutItem item={item} />
        <CheckoutItem item={item} />
        <div className='mt-16 ml-auto text-lg'>
            <span>Total: ${total}</span>
        </div>
    </div>
)

export default Checkout