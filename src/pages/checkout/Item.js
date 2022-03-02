import React from 'react'

const CheckoutItem = (item) => {
    const {imageUrl, name, price, quantity} =item
    return (
        <div className="w-full flex min-h-full border p-4 text-md align-center">
            <div className="w-2/5 pr-4">
                <img src={imageUrl} className='w-full h-full' alt="item" />
            </div>
            <span className="w-2/5">{name}</span>
            <span className="w-2/5 flex">
                <div className="pointer">&#10094;</div> 
                <span className="flex align-center mx-3">{quantity}</span>
                <div className="pointer">&#10095;</div>
            </span>
            <span className="w-2/5">{price}</span>
            <div className="pointer pl-3" >&#10005;</div>
        </div>
    )
}


export default CheckoutItem