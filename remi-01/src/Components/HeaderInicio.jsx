import React, {Fragment} from 'react'
import {useForm } from '../hooks/useForm';
import {useDispatch} from 'react-redux';
import {loginEmailPassword, loginGoogle} from '../actions/actionLogin';




import {Header} from '../Styles/Styles'

const HeaderInicio = () => {


    
    const dispatch = useDispatch();

    const [ values, handleInputChange ] = useForm({
        email: '',
        password: ''
    })

    const {email,password} = values;

    const handleLogin = (e) => {
       e.preventDefault();
       dispatch(loginEmailPassword(email,password));
    } 

    const handleGoogle = () => {
         dispatch(loginGoogle());
    }

 
 
    return (
        <Fragment>
            <form id="Header-Login" onSubmit={handleLogin}>
        <Header>
               <h1 className="REMI">REMI</h1>
                <ul className="About_Secciones">
                    <li>Inicio</li>
                    <li>Aliados</li>
                    <li>Cobertura</li>
                    <li>Empleo</li>
                    <a href="#registro-form"><li>Registrate</li></a>
                </ul>
                <input
                 name="email"
                 value={email}
                 onChange={handleInputChange}
                className="CorreoConstraseña" type="email" placeholder="Correo" />
 
                <input
                name="password"
                value={password}
                onChange={handleInputChange}
                className="CorreoConstraseña" type="Password" placeholder="Constraseña" />

                <p className="olvide">Olvide mi contraseña</p>
                <button type="submit" className="botonEntrar">Entrar</button>
                <img onClick={handleGoogle} className="google-icon" src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="google button" />
        </Header>
        </form>
    </Fragment>

    )
}

export default HeaderInicio
