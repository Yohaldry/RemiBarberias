import { useSelector, useDispatch } from "react-redux";
import {eliminarAsincrono} from '../actions/actionProducts'
import {Link} from 'react-router-dom'
import React from "react";

const ListProducts = () => {
  const dispatch = useDispatch()

  const { productos } = useSelector((store) => store.productos);
  console.log(productos);
  return (
      <div>
          <h1>Lista de productos</h1>
    <div className="produc">

      {productos ? (
        productos.map((pro, index) => (
          <div className="card-pro" key={index}>

            <h2>{pro.nombre}</h2>
            <h2>{pro.nombreProduct}</h2>
            <img width="100px" src={pro.imagen1} alt="im" />
            <img src={pro.imagen2} alt="im" />
            <img src={pro.imagen3} alt="im" />
            <h3>{pro.precio}</h3>
            <h3> {pro.descripcion}</h3>

            {/* <td onClick={()=>dispatch(editarAsincrono)}><button className="editar">Editar</button></td> */}
            <button onClick={()=>dispatch(eliminarAsincrono(pro.nombre))} className="eliminar">Eliminar</button>
            </div>
        ))
      ) : (
        <p>Los Datos No Estan Disponibles</p>
        
      )}
    </div>
    </div>
  );
};

export default ListProducts;
