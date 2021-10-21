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
           <a href="https://api.whatsapp.com/send?phone=<p>{pro.telefono}</p>&text=Hola,%20vengo%20de%20la%20pagina%20REMI%20y%20me%20interesan%20su%20Producto" className="ContactarProducto"><i class="fab fa-whatsapp"></i>  Contactar al Cliente</a>
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
