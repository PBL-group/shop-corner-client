import React from 'react'

const DropdownItem = ({item:{imageUrl, price, name, quantity}}) => (
    <div className='w-full flex h-20 py-2'>
        <img src={imageUrl} className="w-2/6" alt='' />
        <div className='w-4/6 flex flex-col align-start justify-center py-2.5 px-5'>
            <span className="text-md">{name}</span>
            <span className="text-sm">{quantity} X ${price}</span>
        </div>
    </div>
)

export default DropdownItem