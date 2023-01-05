import {WAITINGFORLOGIN, LOGINFAILED, LOGINSUCCESS} from './types';
const watting_for_login = (value) => {
    return (dispatch) => {
        dispatch({type : WAITINGFORLOGIN})
        if(value == null) {
            dispatch({type : LOGINFAILED})
        } else if(value != null) {
            dispatch({type : LOGINSUCCESS, payload : value})
        }
    }
}

export {
    watting_for_login
}