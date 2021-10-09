import React from 'react'
import { Link } from "react-router-dom";

const MenuCompleto = () => {

    return ( 
            
            <div className="MenuCompleto">
                    <ul>
                        <li>Inicio</li>
                        <li>Perfil</li>
                        <li>Servicios a Domicilio</li>
                        <li><Link to="/perfil">Soy Aliado</Link></li>
                        <li>Redes Sociales</li>
                        <li>Donaciones</li>
                        <li>Soporte</li>
                     </ul>    
            </div>  
    )
}

export default MenuCompleto
