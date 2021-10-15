import {typesEmpleo} from '../types/types'


const initialState = {
    empleos: []
}

export const empleosReducer = (state = initialState, action) => {
    switch (action.type) {
        case typesEmpleo.registrar:
            return{
            empleo:[action.payload]
            }
        case typesEmpleo.listEmpleo:
            return{
            empleo:[...action.payload]
            }
    
        default:
           return state;
    }

}