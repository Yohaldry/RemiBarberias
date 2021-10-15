import { useSelector, useDispatch } from "react-redux";
import {eliminarAsincrono} from '../actions/actionProducts'
import {Link} from 'react-router-dom'
import React from "react";
const ListEmpleo = () => {
    const dispatch = useDispatch()

    const { empleo } = useSelector((store) => store.empleos);
    console.log(empleo);
    return (
        <div className="card-Empleo">
             {empleo ? (
        empleo.map((emp, index) => (
          <div className="card-pro" key={index}>
              <p>Establecimiento</p>
            <h2 className="NombreBarberEmpleo">{emp.barberia}</h2><br></br>

            <p>Profesión</p>
            <h3>{emp.nombre}</h3><br></br>

            <p>Experiencia</p>
            <p>{emp.experiencia}</p><br></br>

            <p>Sueldo</p>
            <p> {emp.sueldo}</p><br></br>

            <p>Contrato</p>
            <p>{emp.contrato}</p><br></br>

            <p>Contacto</p>
            <p>{emp.contacto}</p><br></br>
            
            <p>Descripción</p>
            <p>{emp.descripcion}</p>
            </div>
        ))
      ) : (
        <p className="BuscandoEmpleos">Los Datos No Estan Disponibles</p>
        
      )}
            
        </div>
    )
}

export default ListEmpleo
