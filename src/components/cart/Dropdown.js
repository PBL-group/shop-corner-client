import React from 'react'
import Button from '../button/Button'
import { useNavigate } from 'react-router-dom'
import DropdownItem from './Item'
import { connect } from 'react-redux'
import { toggleCartHidden } from '../../redux/cart/cart.actions'
import { selectCartItems } from '../../redux/cart/cart.selectors'
import { createStructuredSelector } from 'reselect'

const Dropdown = ({cartItems, dispatch}) => {

    const navigate = useNavigate();

    return (
        <div className='absolute w-72 h-96 flex flex-col p-2.5 border bg-white top-[4.25rem] right-0 z-10'>
            <div className='h-80 flex flex-col overflow-scroll overflow-x-hidden'>
                {
                    cartItems.length ?
                    cartItems.map( Item => 
                        (<DropdownItem key={Item.id} item={Item}/>)
                    ) :
                    <span className='empty-message'>Your cart is empty</span>
                }
            </div>
            <Button customStyles="my-auto font-body text-sm" 
                onClick={()=> { 
                    navigate('checkout')
                    dispatch(toggleCartHidden)
                }}>
                Go to Checkout
            </Button>
        </div>
    )
}

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems
 })

export default connect(mapStateToProps)(Dropdown)
