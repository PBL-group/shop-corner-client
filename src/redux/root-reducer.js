import { combineReducers } from 'redux'
import cartReducer from './cart/cart.reducer'
import shopReducer from './shop/shop.reducer'

const rootReducer = combineReducers({
    // user: userReducer,
    cart: cartReducer,
    // directory: directoryReducer,
    shop: shopReducer
})

export default rootReducer