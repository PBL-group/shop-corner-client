import React from 'react'
import Button from '../button/Button'

const Card = ({ img, title, price }) => {
    return (
        <div className='group relative h-[22rem] w-64 flex flex-col align-center collection-item'>
            <div className='w-full h-[95%] bg-cover mb-[] bg-center image group-hover:opacity-80 mb-1'
                style={{backgroundImage: `url(${img})`}} 
            />
    
            <div className='w-full font-sans flex justify-between text-md h-8'>
                <span className='w-11/12'>{title}</span>
                <span className='w-1/12 mb-4'>{price}</span>
            </div>
    
            <Button customStyles="self-center absolute hidden top-64 group-hover:flex group-hover:opacity-90 group-hover:w-11/12"  
                    inverted
            >
                Add to Cart
            </Button>
        </div>
    )
}

export  default Card
