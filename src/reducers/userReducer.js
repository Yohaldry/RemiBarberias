import {typesUser} from '../types/types'

const initialState = {
    users: []
}

export const userReducer = (state = initialState, action) => {
    switch(action.type) {
        case typesUser.regisUser:
            return{
                users:[action.payload]
            }
        case typesUser.listar:
            return{
                users:[...action.payload]
            }
       
        default:
        return state;
    }
}