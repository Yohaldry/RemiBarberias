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
    // console.log(empleo);
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
        <ModalBody>
        <div key={emp.uid} className="container-Modal">
          <div className="container-items">
          <h1 className="VacanteTitle">Vacante Disponible</h1>
          <p className="p-items">Establecimiento</p>
            <p className="item-list">{emp.establecimiento}</p>
            <p className="p-items">Profesión</p>
            <p className="item-list">{emp.nombre}</p>
            <p className="p-items">Experiencia</p>
            <p className="item-list">{emp.experiencia}</p>
            <p className="p-items">Sueldo</p>
            <p className="item-list"> {emp.sueldo}</p>

            <p className="p-items">Contrato</p>
            <p className="item-list">{emp.contrato}</p>

            <p className="p-items">Contacto</p>
            <p className="item-list">{emp.contacto}</p>
            
            <p className="p-items">Descripción</p>
            <p className="item-list">{emp.descripcion}</p>
            </div>
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
