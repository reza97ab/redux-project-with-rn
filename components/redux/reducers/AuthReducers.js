import {WAITINGFORLOGIN, LOGINFAILED, LOGINSUCCESS} from '../actions/types';
const initalState = {
    loading : false,
    error : '',
    token : ''
}

const AuthReducers = (state = initalState, action) => {
    switch (action.type) {
        case WAITINGFORLOGIN:
            return {
                ...state,
                loading : true
            }
        case LOGINSUCCESS:
            return {
                ...state,
                token : action.payload.token,
                loading : false
            }

        case LOGINFAILED:
            return {
                ...state,
                error : 'Incorect username of password! Try again',
                loading : false
            }
    
        default:
            return state
    }
}

export {AuthReducers}