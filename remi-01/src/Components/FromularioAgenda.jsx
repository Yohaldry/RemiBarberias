import React from 'react'

const FromularioAgenda = () => {
    return (
        <div className="formularioAgenda">
            <h1>Igresa tus datos</h1>
                <input type="text" placeholder="Nombre"/>
                <input type="text" placeholder="Apellido"/>
                <input type="text" placeholder="Telefono"/>
                <label>Domicilio</label>
                <input type="checkbox" />
                <label>Ir al Establecimiento</label>
                <input type="checkbox" />
                <input type="text" placeholder="Hora"/>
                <input type="text" placeholder="fecha"/>
                <input type="text" placeholder="Servicio"/>
                <button>Agendar</button>
               
        </div>
    )
}

export default FromularioAgenda
