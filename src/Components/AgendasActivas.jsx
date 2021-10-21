import React, {Fragment,useEffect} from 'react'
import { useSelector, useDispatch } from "react-redux";
import {  listAgendaA} from "../actions/actionAgenda";


const AgendasActivas = () => {

    const dispatch = useDispatch();
    const { agenda } = useSelector((store) => store.agendas);
  console.log(agenda);
  useEffect(() => {
    dispatch(listAgendaA());
  }, [dispatch]);

    return (
    <Fragment>

        
                     
           
                        <div className="About_AgendasActivas">

<table className="table">
 <thead className="linea1">
        <tr>
         <th scope="col">#</th>
         <th scope="col">Nombre</th>
         <th scope="col">Télefono</th>
         <th scope="col">Email</th>
         <th scope="col">Domi o Local</th>
         <th scope="col">Fecha Y Hora</th>
         <th scope="col">Servicio</th>
         <th scope="col">Profesional</th>
         <th scope="col">Total</th>
         </tr>
         
</thead>

<tbody>


{agenda ? (
        agenda.map((agn, index) => (
          <tr key={index}>
            <th scope="row">{index}</th>
            <td>{agn.nombre}</td>
            <td>{agn.telefono}</td>
            <td>{agn.email}</td>
            <td>{agn.destino}</td>
            <td>{agn.hora} {agn.fecha}</td>
            <td>{agn.servicio}</td>
            <td>{agn.profesional}</td>
            <td>{agn.precio}</td>

            </tr>
        ))
      ) : (
        <p>Los Datos No Estan Disponibles</p>
        
      )}
</tbody>
</table>
</div>


        
</Fragment>
    )
}

export default AgendasActivas
