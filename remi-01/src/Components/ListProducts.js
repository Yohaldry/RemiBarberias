import { useSelector, useDispatch } from "react-redux";
import {eliminarAsincrono} from '../actions/actionProducts'
import React,{useState} from "react";

function searchTerm(term){
  return function(pro){
    return pro.nombreProduct.toLowerCase().includes(term)
  }
  }

const ListProducts = () => {
  const dispatch = useDispatch()
  const [term,setTerm] = useState("")

  const { productos } = useSelector((store) => store.productos);
  console.log(productos);
  return (
      <div>
          {/* <h1>Lista de productos</h1> */}
      <div className="produc">
      <input type="search" id="BuscarProducts" placeholder="Buscar"  onChange={e=>setTerm(e.target.value)} />

      {productos ? (
        productos.filter(searchTerm(term)).map((pro, index) => (
          <div className="card-pro" key={index}>
 
            <h1>{pro.nombreProduct}</h1>
            <img width="100px" src={pro.imagen} alt="im" />
            <h2>Vendedor: {pro.nombre}</h2>
            
            <h3>$: {pro.precio}</h3>
            <p>Descripcion {pro.descripcion}</p>

            {/* <td onClick={()=>dispatch(editarAsincrono)}><button className="editar">Editar</button></td> */}
            <button onClick={()=>dispatch(eliminarAsincrono(pro.nombre))} className="eliminarProducto">Eliminar</button>
           <button className="ContactarProducto"><i class="fab fa-whatsapp"></i>  Contactar al Cliente</button>
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
