import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useForm } from "../hooks/useForm";
import { fileUpload } from '../helpers/FileUpload';
import { registerProductos } from "../actions/actionProducts";
import { listProducA } from "../actions/actionProducts";
import ListProducts from "./ListProducts";

const HeaderProductos = ({history}) => {
  const dispatch = useDispatch();

  const [add, setAdd] = useState(false);
  const [values, handleInputChange, reset] = useForm({
    nombreProduct: "",
    nombre: "",
    imagen: "",
    descripcion: "",
    precio: "",
    telefono: ""
  });

  let {
    nombreProduct,
    nombre,
    imagen,
    descripcion,
    precio,
    telefono
  } = values;
  const handleRegistro = (e) => {
    e.preventDefault();
    dispatch(
      registerProductos(
        nombreProduct,
        nombre,
        imagen,
        descripcion,
        precio,
        telefono
      )
    );
    reset();
  };
  const handlePictureClick = () => {
    document.querySelector('#fileSelector').click();
}

const handleFileChanged = (e) => {
   const file = e.target.files[0];
   fileUpload(file)
   .then(response => {
       imagen = response
       console.log(response);
   })
   .catch(error => {
       console.log(error.message);
   })
}

  useEffect(() => {
    dispatch(listProducA());
  }, [dispatch]);

  return (
    <div className="ProductosLinea">
      <div className="headerPrincipal">
        <Link to="/" className="MenuDesplegables">
          <i class="fas fa-angle-left"></i>
        </Link>
        <h1>Productos Disponibles</h1>
      </div>

      <div>
        <div className="PanelCRUD">
          <h1>Panel de Busqueda</h1>

          
          <br />
          <button
            onClick={() => {
              setAdd(true);
            }}
          >
            <i class="fas fa-plus"></i> Nuevo Producto
          </button>
          {add ? (
            <div className="AddForm">
              <form onSubmit={handleRegistro}>
                <button
                  onClick={() => {
                    setAdd(false);
                  }}
                >
                  Cerrar
                </button>

                <button type="submit" className="guardarProducto">
                  Guardar
                </button>

                <h1>Agregar Producto</h1>
                <input
                  type="text"
                  name="nombreProduct"
                  placeholder="Nombre del producto"
                  value={nombreProduct}
                  onChange={handleInputChange}
                />
                <input
                  type="text"
                  name="nombre"
                  placeholder="Tu Nombre"
                  value={nombre}
                  onChange={handleInputChange}
                />
                <input
                  id="fileSelector"
                  type="file"
                  name="file"
                  style={{ display: 'none' }}
                  onChange={handleFileChanged}
                  placeholder="Imagen #1"
                />
                  
               
                <input
                  type="text"
                  name="descripcion"
                  placeholder="Descripcion"
                  value={descripcion}
                  maxLength="50"
                  onChange={handleInputChange}
                  maxlength="50"
                  minlength="5"
                />
                <input
                  type="number" 
                  name="precio"
                  placeholder="Precio"
                  value={precio}
                  onChange={handleInputChange}
                />
                <input
                  type="number" 
                  name="telefono"
                  placeholder="Numero de telefono"
                  value={telefono}
                  onChange={handleInputChange}
                />
                <button id="SubirFoto"
                           onClick={handlePictureClick} type="button"><i class="fas fa-images"></i>  Subir Imagen</button>
              </form>
            </div>
          ) : (
            <div className="Vendedor">
              <img
                src="https://res.cloudinary.com/dtkirmtfq/image/upload/v1633905735/Remi/Imagen3_rwizwi.png"
                alt=""
              />
            </div>
          )}
        </div>
        <ListProducts />
      </div>
    </div>
  );
};

export default HeaderProductos;
