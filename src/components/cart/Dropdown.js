import React from 'react'
import Button from '../button/Button'
import { useNavigate } from 'react-router-dom'
import DropdownItem from './Item'

const item = {
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRwGR6wcWMLImAsHW-4cLT-hhtPeRARsbgNCOjaZ11-G3t780WTAYL26VZDv56zgTcvK0&usqp=CAU",
    price: 25, 
    name: "Student Backpack",
    quantity: 24
}

const Dropdown = () => {

    const navigate = useNavigate();

    return (
        <div className='absolute w-72 h-96 flex flex-col p-2.5 border bg-white top-[4.25rem] right-0 z-10'>
            <div className='h-80 flex flex-col overflow-scroll overflow-x-hidden'>
                {
                    item ?
                    <DropdownItem item={item} />  :
                    <span className='empty-message'>Your cart is empty</span>
                }

            </div>
            <Button customStyles="my-auto font-body text-sm" onClick={()=> { navigate('checkout')}}>
                Go to Checkout
            </Button>
        </div>
    )
}

export default Dropdown
