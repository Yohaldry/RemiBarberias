import React, {Fragment} from 'react'

import {Link} from 'react-router-dom'




import {Header} from '../Styles/Styles'

const HeaderInicio = () => {

return (
        <Fragment>
        <Header>
               <h1 className="REMI">REMI</h1>
                <ul className="About_Secciones">
                    <li>Inicio</li>
                    <li>Aliados</li>
                    <li>Cobertura</li>
                    <li>Empleo</li>
                    <Link  id="link" to="/auth/registro"><li>Registrate</li></Link>
                    <Link id="link"  to="/auth/inicioSesion"><li >IniciarSesion</li></Link>
                </ul>
               
        </Header>
    </Fragment>

    )
}

export default HeaderInicio
