import React from 'react'; 
import { useDispatch } from "react-redux";
import { useForm } from "../hooks/useForm";
import { registrarUserA} from "../actions/actionUser";
import { fileUpload } from '../helpers/FileUpload';

 const RegistroEstablecimiento = () => {

    const dispatch = useDispatch();

    const [values, handleInputChange, reset] = useForm({
        imagen:"",
        nombre:"",
        estado:"",
        experiencia:"",
        direccion:"",
        servicios:"",
        descripcion:""
    });
  
    let {  imagen, nombre,estado,experiencia,direccion,servicios,descripcion } = values;
    const handleRegistro = (e) => {
      e.preventDefault();
      dispatch(registrarUserA(imagen, nombre,estado,experiencia,direccion,servicios,descripcion)
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
    return (
        <div>
            <form onSubmit={handleRegistro}>
                <h1>REGISTRATE</h1>
                <span>"Ya sea como independiente o establecimiento Fisico"</span>
                <input
                  id="fileSelector"
                  type="file"
                  name="file"
                  style={{ display: 'none' }}
                  onChange={handleFileChanged}
                  placeholder="Imagen"
                />
                  <button onClick={handlePictureClick} type="button"><i class="fas fa-images"></i> Imagen</button>
                <label>NOMBRE</label><br></br>
                <input type="text" name="nombre" placeholder="ingresa el nombre del establecimiento" value={nombre} onChange={handleInputChange} required/>
                <select name="estado" value={estado} onChange={handleInputChange} required>
                    <option value="Establecimiento Fisico">Establecimiento Fisico</option>
                    <option value="Barbero Independiente">Barbero Independiente</option>
                    <option value="Barbero Independiente">Barbera Independiente</option>
                </select>
                <input type="number" name="experiencia" placeholder="Años de Experiencia" value={experiencia} onChange={handleInputChange} required />
                <input type="text" name="direccion" placeholder="Dirección" value={direccion} onChange={handleInputChange} required />
                <input type="text"  name="servicios"placeholder="Servicios Ofrecidos" value={servicios} onChange={handleInputChange} required />
                <textarea type="text" name="descripcion" placeholder="Descripcion de servicios" value={descripcion} onChange={handleInputChange} required />
                <button type="submit">Registar</button>
                <button type="button" onClick={()=>reset()}>Cancelar</button>
            </form>
            
        </div>
    )
}

export default RegistroEstablecimiento
