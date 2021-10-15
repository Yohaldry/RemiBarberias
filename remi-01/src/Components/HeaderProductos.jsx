import React,{useState} from 'react'
import { Link } from "react-router-dom";
import { db } from '../firebase/firebaseConfig';
import ListProducts from './ListProducts';

const HeaderProductos = () => {

    const addtask = async (values) => {
            console.log(values)
        // await db.collection('productos').doc().set(values);
        // console.log('Nueva tarea Agregada')
    }

    const [add, setAdd] = useState(false)

    const inicialStateValues = {
        nombreProducto: '',
        nombreUsuario: '',
        img1: '',
        img2: '',
        img3: '',
        descripcion: '',
        precio: ''
    }

    const [values, setValues] = useState(inicialStateValues)

    const handleSubmit = e => {
        e.preventDefault()
        addtask(values)
    }

    const handleInputChange = e => {
            // console.log(e.target.value)
            const {name, value} = e.target
            setValues({...values, [name]: value})

    }

    return (
        <div className="ProductosLinea">
             <div className="headerPrincipal">

                <Link to="/" className="MenuDesplegables"><i class="fas fa-angle-left"></i></Link>
                <h1>Productos Disponibles</h1>

               
            </div>

            <div className="panelesProductos">

                 <div className="PanelCRUD">
                     <h1>Panel de Busqueda</h1>

                     <input type="search" placeholder="Buscar"/>
                        <p>Buscar por nombre del producto</p><br/>
                     <button onClick={() => {
                         setAdd(true)}}><i class="fas fa-plus"></i>  Nuevo Producto</button>
                    {
                        add ? (
                            <div className="AddForm">
                     <form onSubmit={handleSubmit}>
                                <button onClick={() => {
                         setAdd(false)}}>Cerrar</button>

                         <button type="submit" className="guardarProducto">Guardar</button>
                                  
                                  
                         <h1>Agregar Producto</h1>
                             <input type="text" name="nombreProducto" placeholder="Nombre del producto" onChange={handleInputChange}/>
                             <input type="text" name="nombreUsuario" placeholder="Tu Nombre" onChange={handleInputChange}/>
                             <input type="text" name="img1" placeholder="Imagen #1" onChange={handleInputChange}/>
                             <input type="text" name="img2" placeholder="Imagen #2" onChange={handleInputChange}/>
                             <input type="text" name="img3" placeholder="Imagen #3" onChange={handleInputChange}/>
                             <input type="text" name="descripcion" placeholder="Descripcion" onChange={handleInputChange}/>
                             <input type="text" name="precio" placeholder="Precio" onChange={handleInputChange}/>
                    </form>
                            </div>
                            
                        ):(
                            <div className="Vendedor">
                                <img src="https://res.cloudinary.com/dtkirmtfq/image/upload/v1633905735/Remi/Imagen3_rwizwi.png" alt="" />
                            </div>
                        )

                    }
                       

                 </div>
                        <ListProducts/>
            </div>
           
        </div>
    )
}

export default HeaderProductos
