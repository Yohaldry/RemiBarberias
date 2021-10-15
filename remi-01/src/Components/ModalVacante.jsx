import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { useForm } from "../hooks/useForm";
import { registrarEmpleosA} from "../actions/actionEmpleos";



import {Button, Modal, ModalHeader, ModalBody, ModalFooter, FormGroup, Input, Label} from 'reactstrap';


const ModalVacante = () =>{
  const dispatch = useDispatch();

  const [isModalOpen, setisModalOpen] = useState(false);

  const [values, handleInputChange, reset] = useForm({
    barberia: "",
    nombre: "",
    experiencia: "",
    sueldo: "",
    contrato: "",
  });

  let {  barberia,nombre,experiencia,sueldo,contrato } = values;
  const handleRegistro = (e) => {
    e.preventDefault();
    dispatch(registrarEmpleosA(barberia,nombre,experiencia,sueldo,contrato)
    );
    reset();
  };
  return(

    
    <div>

      
      <div className="principal">
        <div className="secundario">
      <Button className="PublicVacante">Publicar Vacante</Button>

         </div>
      </div>
    </div>
  )
}

export default ModalVacante