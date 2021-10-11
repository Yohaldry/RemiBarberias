import React from 'react'

const AddProducto = ({handleInputChange}) => {
    return (
        <div className="AddProductos">
                <h1>Agregar Producto</h1>
                <input type="text" placeholder="Nombre del producto" onChange={handleInputChange}/>
                <input type="text" placeholder="Tu Nombre"/>
                <input type="text" placeholder="Imagen #1"/>
                <input type="text" placeholder="Imagen #2"/>
                <input type="text" placeholder="Imagen #3"/>
                <input type="text" placeholder="Descripcion"/>
                <input type="text" placeholder="Precio"/>
        </div>
    )
}

export default AddProducto
