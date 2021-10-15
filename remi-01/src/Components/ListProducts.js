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
          {/* <h1>Lista de productos</h1> */}
      <div className="produc">

      {productos ? (
        productos.map((pro, index) => (
          <div className="card-pro" key={index}>

            <h1>{pro.nombreProduct}</h1>
            <h2>Vendedor: {pro.nombre}</h2>
            <img width="100px" src={pro.imagen1} alt="im" />
            <h3>Precio: {pro.precio}</h3>
            <h3> Descripcion: {pro.descripcion}</h3>

            {/* <td onClick={()=>dispatch(editarAsincrono)}><button className="editar">Editar</button></td> */}
            <button className="ContactarAlVendedor"><i class="fab fa-whatsapp"></i> Contactar al vendedor</button>
            <button className="EliminarProducto" onClick={()=>dispatch(eliminarAsincrono(pro.nombre))} >Eliminar</button>
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
