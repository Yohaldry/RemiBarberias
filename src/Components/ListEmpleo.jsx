import { useSelector, useDispatch } from "react-redux";
import {Button, Modal, ModalHeader, ModalBody, ModalFooter, FormGroup, Input, Label} from 'reactstrap';
import React,{useState} from "react";

function searchTermD(data){
  return function(pro){
    return pro.nombre.toLowerCase().includes(data)
    || pro.sueldo.includes(data)
  }
  }
const ListEmpleo = () => {
    const dispatch = useDispatch()

    const [data,setData] = useState("")
    const [isOpenModal, setIsOpenModal] = useState(false);

    const { empleo } = useSelector((store) => store.empleos);
    console.log(empleo);
    return (
        <div className="vacantesTotal">
            <input id="BuscarVacante" type="search" placeholder="Buscar"  onChange={e=>setData(e.target.value)} />
             {empleo ? (
        empleo.filter(searchTermD(data)).map((emp, index) => (
          <div className="card-pro" key={index}>
              <p>Establecimiento</p>
            <h2>{emp.establecimiento}</h2><br></br>

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
        <p>Los Datos No Estan Disponibles</p>
        
      )}
       
            
        </div>
    )
}

export default ListEmpleo
