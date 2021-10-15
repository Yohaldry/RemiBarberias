import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { useForm } from "../hooks/useForm";
import { fileUpload } from "../helpers/FileUpload";
import { registerProductos } from "../actions/actionProducts";
import { listProducA } from "../actions/actionProducts";
import ListProducts from "../Components/ListProducts";

const AddProducto = ({ history }) => {
  const dispatch = useDispatch();

  const [add, setAdd] = useState(false);

  const [values, handleInputChange, reset] = useForm({
    nombreProduct: "",
    nombre: "",
    imagen1: "",
    imagen2: "",
    imagen3: "",
    descripcion: "",
    precio: "",
  });

  let { nombreProduct, nombre, imagen1, imagen2, imagen3, descripcion, precio } =
    values;

  const handleRegistro = (e) => {
    e.preventDefault();
    dispatch(
      registerProductos(
        nombreProduct,
        nombre,
        imagen1,
        imagen2,
        imagen3,
        descripcion,
        precio
      )
    );
    reset();
  };

  const handlePictureClick = () => {
    document.querySelector("#fileSelector").click();
  };
//   const handlePictureClick2 = () => {
//     document.querySelector("#fileSelector").click();
//   };
//   const handlePictureClick3 = () => {
//     document.querySelector("#fileSelector").click();
//   };

  const handleFileChanged = (e) => {
    const file = e.target.files[0];
    fileUpload(file)
      .then((response,resp,resp1) => {
        imagen1 = response;
        // imagen2 = resp;
        // imagen3 = resp1;

        console.log(response,resp,resp1);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  useEffect(() => {
    dispatch(listProducA());
  }, [dispatch]);

  return (
    <div>
      <div className="ProductosLinea">
        <div className="headerPrincipal">
          <Link to="/" className="MenuDesplegables">
            <i class="fas fa-angle-left"></i>
          </Link>
          <h1>R E M I</h1>
        </div>

        <div className="panelesProductos">
          <div className="PanelCRUD">
            <h1>Panel de Busqueda</h1>

            <input type="search" placeholder="Buscar" />
            <p>Buscar por nombre del producto</p>
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
                    placeholder="Imagen #1"
                    style={{ display: 'none' }}
                    onChange={handleFileChanged}
                  />
                   <button
                           onClick={handlePictureClick} type="button">Imagen1</button>
                  {/* <input
                     id="fileSelector"
                     type="file"
                     name="file"
                    placeholder="Imagen #2"
                    style={{ display: 'none' }}
                    onChange={handleFileChanged} 
                  />
                   <button
                           onClick={handlePictureClick2} type="button">Imagen2</button>
                  <input
                    id="fileSelector"
                    type="file"
                    name="file"
                    placeholder="Imagen #3"
                    style={{ display: 'none' }}
                    onChange={handleFileChanged}
                  />
                  <button
                           onClick={handlePictureClick3} type="button">Imagen3</button> */}
                  <input
                    type="text"
                    name="descripcion"
                    placeholder="Descripcion"
                    value={descripcion}
                    onChange={handleInputChange} 
                  />
                  <input
                    type="number"
                    name="precio"
                    placeholder="Precio"
                    value={precio}
                    onChange={handleInputChange} 
                  />
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
        </div>
      </div>
      <ListProducts />
    </div>
  );
};

export default AddProducto;
