import React, {Fragment, useState} from 'react'
import { useDispatch } from "react-redux";
import { startLogout } from "../actions/actionLogin";
import ListUser from '../Components/ListUser'
import MenuCompleto from './MenuCompleto';


const NavBar = () => {
    const dispatch = useDispatch();
    const handleLogout = () => {
      dispatch(startLogout());
    };


        const [menu, setMenu] = useState(false)

    return (
    <Fragment>
        <div className="container_inicio">
            <div className="headerPrincipal">

                <h2 onClick={() => {setMenu(true)}} className="MenuDesplegables"><i class="fas fa-bars"></i></h2>
                <h1>R E M I</h1>
 
                <input type="search" placeholder="Buscar"/>
                <button className="BotonBuscar"><i class="fas fa-search"></i></button>
                <div className="logout">
                <button onClick={handleLogout}>Logout</button>
                    </div>
            </div>

            <div className="Imagen_bienvenida">
                   <a id="solicitar" href="#Profesionales"><i class="fas fa-arrow-down"></i> Solicitar Servicios</a>
                    { 
                        menu ?(
                            <div>
                                <h1 onClick={() => {setMenu(false)}} className="Pull">X</h1>
                                    <MenuCompleto />

                                    )
                            </div>
                        ):(
                            <div></div>
                        )
                    }
                    <a href="https://api.whatsapp.com/send?phone=573223908903&text=Hola,%20vengo%20de%20la%20pagina%20REMI%20y%20me%20interesan%20sus%20servicios" className="BotonWhatsApp"><i class="fab fa-whatsapp"></i></a>
            </div>
        <ListUser/>   
           
     
        </div>
    </Fragment>
    )
}

export default NavBar
