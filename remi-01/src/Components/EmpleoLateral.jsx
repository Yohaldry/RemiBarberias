import React from 'react'
import { Link } from 'react-router-dom'

const EmpleoLateral = () => {
    return (
        <div className="Abaut_Lateral">
            <h1>Vacantes Disponibles</h1>
            <img src="https://res.cloudinary.com/dtkirmtfq/image/upload/v1632818447/Remi/Imagen3_p5ft9s.png" alt="" />
            <hr />
            <ul>
                <input id="BuscarEmpleo" type="text" placeholder="Buscar"/>
                <a href="/"><li>Soporte</li></a>
                <Link to="/"><li>Salir</li></Link>
            </ul>

            
        </div>
    )
}

export default EmpleoLateral
