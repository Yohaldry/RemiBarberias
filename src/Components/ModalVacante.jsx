import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { useForm } from "../hooks/useForm";
import { registrarEmpleosA} from "../actions/actionEmpleos";



import {Button, Modal, ModalHeader, ModalBody, ModalFooter, FormGroup, Input, Label} from 'reactstrap';


const ModalVacante = () =>{
  const dispatch = useDispatch();

  const [openModal, setOpenModal] = useState(false);

  const [values, handleInputChange, reset] = useForm({
    establecimiento: "",
    nombre: "",
    experiencia: "",
    sueldo: "",
    contrato: "",
    contacto: "",
    descripcion: ""
  });

  let {  establecimiento, nombre,experiencia,sueldo,contrato,contacto,descripcion } = values;
  const handleRegistro = (e) => {
    e.preventDefault();
    dispatch(registrarEmpleosA(establecimiento,nombre,experiencia,sueldo,contrato,contacto,descripcion)
    );
    reset();
  };
  return(
    <div>
      <div className="principal">
        <div className="secundario">
      <button className="PublicVacante" onClick={()=>setOpenModal(true)}>Publicar Vacante</button>
       </div>
      </div>
      <Modal isOpen={openModal}>
        <ModalBody>

          <form onSubmit={handleRegistro}>
        <div className="containerModal">
        <h1 className="VacanteTitle">Registro De Vacante Disponible</h1>
          <FormGroup>
                     <input type="text" id="CamposVacante" name="establecimiento" placeholder="Nombre del Establecimiento" value={establecimiento}
                    onChange={handleInputChange}  /> 
          </FormGroup>
          <FormGroup>
                     <input type="text" id="CamposVacante" name="nombre" placeholder="Nombre de la profesión" value={nombre}
                    onChange={handleInputChange}  /> 
          </FormGroup>
          <FormGroup>
                     <input type="text" id="CamposVacante" name="experiencia" placeholder="Experiencia Requerida" value={experiencia}
                    onChange={handleInputChange}  /> 
          </FormGroup>
          <FormGroup>
                     <input type="text" id="CamposVacante" name="sueldo" placeholder="Sueldo" value={sueldo}
                    onChange={handleInputChange}  /> 
          </FormGroup>
          <FormGroup>
                    <input type="text" id="CamposVacante" name="contrato" placeholder="Contrato" value={contrato}
                    onChange={handleInputChange} /> 
          </FormGroup>
          <FormGroup>
                     <input type="number" id="CamposVacante" name="contacto" placeholder="Contacto"  value={contacto}
                    onChange={handleInputChange} /> 
          
          </FormGroup>
          <FormGroup>
                     <textarea type="text" id="CamposVacante" name="descripcion" placeholder="Descripción de la Vacante" value={descripcion}
                    onChange={handleInputChange}  />  
          
          </FormGroup>
          <FormGroup>
            <button type="submit" className="publicarVacante" >Publicar</button>
            <button className="CancelarVacante" onClick={()=>setOpenModal(false)}>Cancelar</button>
          </FormGroup>
          </div>
          </form>
        </ModalBody>

      </Modal>
    </div>
  )
}

export default ModalVacante