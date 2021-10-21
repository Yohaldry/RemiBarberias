import {typesAgenda} from '../types/types'


const initialState = {
    agendas: []
}

export const agendaReducer = (state = initialState, action) => {
    switch (action.type) {
        case typesAgenda.registarAgn:
            return{
            agenda:[action.payload]
            }
        case typesAgenda.listAgn:
            return{
            agenda:[...action.payload]
            }
    
        default:
           return state;
    }

}