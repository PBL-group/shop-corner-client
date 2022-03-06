import React from 'react'
import { MdOutlineShoppingBasket } from 'react-icons/md'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { selectCartItemsCount } from '../../redux/cart/cart.selectors'

const Cart = ({itemCount}) => (
    <div className='relative flex align-center justify-center'>
        <MdOutlineShoppingBasket className='w-6 h-6' />
        <span className='absolute text-xs font-bold bottom-3 left-4'>{itemCount}</span>
    </div>
)

const mapStateToProps = createStructuredSelector({
    itemCount: selectCartItemsCount
})

export default connect(mapStateToProps)(Cart)
