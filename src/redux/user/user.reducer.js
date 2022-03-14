import { userActionTypes } from './user.types'

const INITIAL_STATE = {
    currentUser: null,
    userIdToken: null,
}

const userReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case userActionTypes.SET_CURRENT_USER:
            return {
                ...state,
                currentUser: action.payload
            }

        case userActionTypes.SET_USER_ID_TOKEN:
            return {
                ...state,
                userIdToken: action.payload
            }

        default: return state;
    }
}

export default userReducer