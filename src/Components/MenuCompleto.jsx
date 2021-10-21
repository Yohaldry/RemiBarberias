import React from 'react'
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { startLogout } from "../actions/actionLogin";

const MenuCompleto = () => {

    const dispatch = useDispatch();
        const handleLogout = () => {
          dispatch(startLogout());
        };

    return ( 
             
            <div className="MenuCompleto">
                    <ul>
                        <a href="#Inicio">Inicio</a>
                        <li><Link to="/perfil">Soy Aliado</Link></li>
                        <li><Link to="/registroEstablecimiento">Registrar Establecimiento</Link></li>
                        <li><Link to="/empleo">Empleo Disponible</Link></li>
                        <li><Link to="/productos">Productos en Linea</Link></li>
                        <a href="#footerInicio">Redes Sociales</a>
                        <li>Donaciones</li>
                        <a href="https://api.whatsapp.com/send?phone=573223908903&text=Hola,%20vengo%20de%20la%20pagina%20REMI%20y%20me%20interesan%20sus%20servicios">Soporte</a>
                        <li onClick={handleLogout}>Cerrar Sesion</li>
                     </ul>    
            </div>  
    )
}

export default MenuCompleto
