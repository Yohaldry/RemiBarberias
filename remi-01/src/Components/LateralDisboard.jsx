import React, {Fragment, useState} from 'react'
import { Link } from 'react-router-dom'
import AgendasActivas from './AgendasActivas'
import ModalVacante from '../Components/ModalVacante'
import Perfil from './Perfil'

const LateralDisboard = () => {

    const [componente, setComponente] = useState(false)


    return (
        <Fragment>
        <div className="Abaut_Lateral">
            <h1>Work Zone</h1>
            <img src="https://res.cloudinary.com/dtkirmtfq/image/upload/v1632818447/Remi/Imagen3_p5ft9s.png" alt="" />
            <hr />
            <ul>
                <li onClick={() => {setComponente(false)}}>Agendas Activas</li>
                <li onClick={() => {setComponente(true)}}>Perfil</li>
                <ModalVacante />
                <Link to="/"><li>Salir</li></Link>
            </ul>
            
            
        </div>
        {
            componente ?(
                <div>
                    <Perfil />
                </div>
            ):(
                <div>
                    <AgendasActivas />
                </div>
            )
        }
</Fragment>
    )
}

export default LateralDisboard
