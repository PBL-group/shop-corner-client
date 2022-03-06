import React from 'react'

const Hero = () => {
  return (
    <div>Hero</div>
  )
}

export default Hero


/* 

import React from 'react'
import Button from '../button/Button'
import { useNavigate } from 'react-router-dom'
import { connect } from 'react-redux';
import { addItem } from '../../redux/cart/cart.actions';

const Card = ({item, addItem}) => {
    const {name, images, price, id} = item;
    const navigate = useNavigate();

    return (
        <div className='group relative h-[22rem] w-fit-content min-w-[18rem] flex flex-col border rounded-xl align-center collection-item px-4'>
            <div className='w-full h-[95%]' onClick={()=> { navigate(`product/${id}`)}}>
                <div className='w-full h-[95%] bg-contain bg-no-repeat mb-[] bg-center image group-hover:opacity-80 mb-1'
                        style={{backgroundImage: `url(${images[0].url})`}} 
                />     
                <div className='w-full font-sans flex justify-between text-md h-8'>
                    <span>{name}</span>
                    <span>${price}</span>
                </div>
            </div>
    
            <Button customStyles="self-center absolute hidden top-64 group-hover:flex group-hover:opacity-90 group-hover:w-11/12"  
                    inverted
                    onClick={()=> addItem(item)}
            >
                Add to Cart
            </Button>
        </div>
    )
}

const mapDispatchToProps = dispatch => ({
    addItem: item=> dispatch(addItem(item))
})

export  default connect(null, mapDispatchToProps)(Card)


*/