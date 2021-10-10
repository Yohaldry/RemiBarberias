import React, {Fragment} from 'react'

import {Link} from 'react-router-dom'




import {Header} from '../Styles/Styles'

const HeaderInicio = () => {

return (
        <Fragment>
        <Header>
               <h1 className="REMI">REMI</h1>
                <ul className="About_Secciones">
                <Link id="link"  to="/auth/inicioSesion"><li >Iniciar Sesion</li></Link>
                <a  id="link" href="#registro-form"><li>Registrate</li></a>
                    <li>Inicio</li>
                    <li>Aliados</li>
                    <li>Cobertura</li>
                    <li>Empleo</li>
                </ul>
               
        </Header>
    </Fragment>

    )
}

export default HeaderInicio
