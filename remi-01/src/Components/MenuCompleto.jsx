import React from 'react'
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
                        <li>Inicio</li>
                        <li>Perfil</li>
                        <li>Servicios a Domicilio</li>
                        <li>Soy Aliado</li>
                        <li>Redes Sociales</li>
                        <li>Donaciones</li>
                        <li>Soporte</li>
                        <li onClick={handleLogout}>Cerrar Sesion</li>
                     </ul>    
            </div>  
    )
}

export default MenuCompleto
