import { useSelector, useDispatch } from "react-redux";
import {eliminarAsincrono} from '../actions/actionProducts'
import {Link} from 'react-router-dom'
import React from "react";
const ListEmpleo = () => {
    const dispatch = useDispatch()

    const { empleo } = useSelector((store) => store.empleos);
    console.log(empleo);
    return (
        <div>
             {empleo ? (
        empleo.map((emp, index) => (
          <div className="card-pro" key={index}>

            <h1>{emp.barberia}</h1>
            <h3>{emp.nombre}</h3>
            <p>{emp.experiencia}</p>
            <p> {emp.sueldo}</p>
            <p>{emp.contrato}</p>
            </div>
        ))
      ) : (
        <p>Los Datos No Estan Disponibles</p>
        
      )}
            
        </div>
    )
}

export default ListEmpleo
