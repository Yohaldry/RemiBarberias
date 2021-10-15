import React, {useEffect} from 'react'
import {listProducA} from '../actions/actionEmpleos'
import { useDispatch } from "react-redux";
import { Link } from 'react-router-dom'
import ListEmpleo from '../Components/ListEmpleo'

const EmpleoLateral = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(listProducA());
      }, [dispatch]);
    return (
        <div>
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
        <div class="container-empleo">
        <ListEmpleo/>
        </div>
        </div>
    )
}

export default EmpleoLateral
