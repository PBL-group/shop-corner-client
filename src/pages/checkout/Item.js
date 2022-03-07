import React from 'react'
import { connect } from "react-redux";
import { clearItemFromCart, addItem, removeItem} from '../../redux/cart/cart.actions'

const CheckoutItem = ({cartItem, clearItem, addItem, removeItem}) => {

    const {name, images, price, quantity} = cartItem
    
    return (
        <div className="w-full flex min-h-full border-b py-4 text-md align-center justify-center">
            <div className="w-2/5 pr-4">
                <img src={images[0].url} className='w-full h-full' alt="item" />
            </div>
            <div className='flex justify-center w-2/5'>
                <span >{name}</span>
            </div>
            
            <div className="w-2/5 flex justify-center">
                <div 
                    className="cursor-pointer"
                    onClick={() => removeItem(cartItem)}
                >
                    &#10094;
                </div> 
                <span className="flex align-center mx-3">{quantity}</span>
                <div 
                    className="cursor-pointer"
                    onClick={() => addItem(cartItem)}
                >
                    &#10095;
                </div>
            </div>
            <div className="w-2/5 flex justify-center" >
                <span >{price}</span>
            </div>
            
            <div 
                className="cursor-pointer px-3 flex justify-center" 
                onClick={()=> clearItem(cartItem)}
            >
                &#10005;
            </div>
        </div>
    )
}


const mapDispatchToProps = dispatch => ({
    clearItem: item => dispatch(clearItemFromCart(item)),
    addItem: item => dispatch(addItem(item)),
    removeItem: item => dispatch(removeItem(item))
})

export default connect(null, mapDispatchToProps)(CheckoutItem)