import React from 'react'
import Button from '../button/Button'

const DropdownItem = ({imageUrl, price, name, quantity}) => (
    <div className='w-full flex h-20 py-2'>
        <img src={imageUrl} alt="w-2/6" />
        <div className='w-4/6 flex flex-col align-start justify-center py-2.5 px-5'>
            <span className="text-md">{name}</span>
            <span className="text-sm">{quantity} X ${price}</span>
        </div>
    </div>
)

const item = {
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRwGR6wcWMLImAsHW-4cLT-hhtPeRARsbgNCOjaZ11-G3t780WTAYL26VZDv56zgTcvK0&usqp=CAU",
    price: 25, 
    name: "Student Backpack",
    quantity: 24
}

const Dropdown = ({history}) => (
    <div className='absolute w-72 h-96 flex flex-col p-2.5 border bg-white top-20 right-0 z-10'>
        <div className='h-80 flex flex-col overflow-scroll overflow-x-hidden'>
            <DropdownItem Item={item} />
        </div>
        <Button customStyles="mt-auto" onClick={()=> { history.push('/checkout') }}>
            Go to Checkout
        </Button>
    </div>
)

export default Dropdown
