import {createStore, combineReducers, applyMiddleware, compose} from 'redux'
import thunk from 'redux-thunk';
import { loginReducer } from '../reducers/loginReducer';
import { registerReducer } from '../reducers/registerReducer';
import {userReducer} from '../reducers/userReducer';
import { productosReducer } from '../reducers/productosReducer';
import {empleosReducer} from '../reducers/empleosReducer'

const composeEnhancers = (typeof window !== 'undefined' && 
window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const reducers = combineReducers({
    login: loginReducer,
    register: registerReducer,
    user: userReducer,
    productos: productosReducer,
    empleos: empleosReducer
})

export const store = createStore(
    reducers,
    composeEnhancers( 
        applyMiddleware(thunk))
   
)  