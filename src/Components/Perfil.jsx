import React from 'react'
import { useSelector} from "react-redux";


const Perfil = () => { 
    const {name,email,image } = useSelector((store) => store.login); 

    return (
        <div className="About_Perfil">
            <h1>Perfil</h1>
        <div className="About_perfilFoto">
            <img src={image} alt="" />
         <div className="Caracteristicas_Perfil">
                 <h1>{name}</h1>
                 <h2>{email}</h2> 
                 <h3>Direccion: Carrera 57a #5b-18</h3>
           </div>
        
        </div>
        <hr />
        </div>
    )
}

export default Perfil
