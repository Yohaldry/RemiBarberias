import React, {useState, useEffect} from 'react'
// import axios from 'axios'

const Contenido = () => {

    const [datos, setDatos] = useState([])
console.log(datos)
    useEffect(() => {
        obtener()
    }, [])
    

    const obtener = async () => {

       let url = 'https://api-demoday.herokuapp.com/datos'

      fetch(url)
      .then(response =>  response.json())
      .then(data => setDatos(data))
    }


    return (

        <div id="Profesionales">
            <img className="Borde_Blue" src="https://res.cloudinary.com/dtkirmtfq/image/upload/v1633667552/Remi/Imagen2_hyh48d.png" alt="" />
        <h2 className="Red">La mayor red de profesionales de belleza</h2>
       <div className="ContenidoPrincipal">
    

            {
                datos.map(pak => (
                    
             

            <div  className="BarberiasYBarberos"> 
                <img src={pak.fotoperfil} alt="" />
                <h5>{pak.nombre}</h5>
                 
                <ul>
                    <li>{pak.experiencia} Años de experiencia </li>
                    <li>{pak.estado}</li>
 
                </ul> 
                <hr />
            </div>


                ))
        }

        </div>
        </div>
    )
}

export default Contenido
