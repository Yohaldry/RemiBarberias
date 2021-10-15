import { useSelector, useDispatch } from "react-redux";
import {Button, Modal, ModalHeader, ModalBody, ModalFooter, FormGroup, Input, Label} from 'reactstrap';
import React,{useState} from "react";
const ListEmpleo = () => {
    const dispatch = useDispatch()
    const [isOpenModal, setIsOpenModal] = useState(false);

    const { empleo } = useSelector((store) => store.empleos);
    console.log(empleo);
    return (
        <div className="card-Empleo">
             {empleo ? (
        empleo.map((emp, index) => (
          <div className="card-pro" key={index}>
              <p>Establecimiento</p>
<<<<<<< HEAD
            <h2>{emp.establecimiento}</h2><br></br>
=======
            <h2 className="NombreBarberEmpleo">{emp.barberia}</h2><br></br>
>>>>>>> 579cab08fb2aa21249df6e706a168354e86378c2

            <p>Profesión</p>
            <h3>{emp.nombre}</h3><br></br>

            <p>Sueldo</p>
            <p> {emp.sueldo}</p><br></br>

            <button onClick={()=>setIsOpenModal(true)}>Ver más detalles</button>
       
            
          
            <Modal isOpen={isOpenModal}>
        <ModalHeader>
          iNFORMACIÓN SOBRE LA VACANTE
        </ModalHeader>
        <ModalBody>
          <div>
          <p>Establecimiento</p>
            <h2>{emp.establecimiento}</h2>
            <p>Profesión</p>
            <h3>{emp.nombre}</h3><br></br>
        <p>Experiencia</p>
            <p>{emp.experiencia}</p>
            <p>Sueldo</p>
            <p> {emp.sueldo}</p><br></br>

            <p>Contrato</p>
            <p>{emp.contrato}</p>

            <p>Contacto</p>
            <p>{emp.contacto}</p>
            
            <p>Descripción</p>
            <p>{emp.descripcion}</p>
            </div>
            
        </ModalBody>

      </Modal>
            </div>
        ))
      ) : (
        <p className="BuscandoEmpleos">Los Datos No Estan Disponibles</p>
        
      )}
       
            
        </div>
    )
}

export default ListEmpleo
