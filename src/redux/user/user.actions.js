import { userActionTypes } from "./user.types"

export const setCurrentUser = user => ({
    type: userActionTypes.SET_CURRENT_USER,
    payload: user
})

export const setUserIdToken = token => ({
    type: userActionTypes.SET_USER_ID_TOKEN,
    payload: token
})