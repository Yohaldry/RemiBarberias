import React from 'react';
import {Button, Modal, ModalHeader, ModalBody, ModalFooter, FormGroup, Input, Label} from 'reactstrap';


class ModalVacante extends React.Component{

   addtask = async (values) => {
    console.log(values)
// await db.collection('productos').doc().set(values);
// console.log('Nueva tarea Agregada')
}
    
    handleChange = (e) =>{
        console.log(e.target.value)
    }


    inicialStateValues = {
      tituloVacante: '',
      nombreBarberia: '',
      whatsapp: '',
      descripcion: ''
  }

   handleSubmit = e => {
    e.preventDefault()
    
    this.addtask(this.values)
}

   values = (this.inicialStateValues)

  state={
    abierto: false,
  }

  abrirModal=()=>{
    this.setState({abierto: !this.state.abierto});
  }

  render(){

    const modalStyles={
      position: "absolute",
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)'
    }
    return(
      <>
      <div className="principal">
        <div className="secundario">
      <Button className="PublicVacante" onClick={this.abrirModal}>Publicar Vacante</Button>

         </div>
      </div>

      <Modal isOpen={this.state.abierto} style={modalStyles}>
        <ModalHeader>
          Iniciar Sesión
        </ModalHeader>
        <ModalBody>

          <form onSubmit={this.handleSubmit}>
        <div className="containerModal">
        <h1 className="VacanteTitle">Vacante Disponible</h1>
          <FormGroup>
                     <Input type="text" id="CamposVacante" name="tituloVacante" placeholder="Titulo de la Vacante" onChange={this.handleChange} /> 
          </FormGroup>
          <FormGroup>
                     <Input type="text" id="CamposVacante" name="nombreBarberia" placeholder="Nombre de la Barberia" onChange={this.handleChange}/> 
          </FormGroup>
          <FormGroup>
                     <Input type="number" id="CamposVacante" name="whatsapp" placeholder="WhatsApp" onChange={this.handleChange}/> 
                     <textarea name="" id="DescripcionVacante" name="descripcion" cols="52" rows="10" placeholder="Descripcion de la Vacante" onChange={this.handleChange}></textarea>
          
          </FormGroup>
          <FormGroup>
            <button type="submit" className="publicarVacante" >Pubicar</button>
            <button className="CancelarVacante" onClick={this.abrirModal}>Cancelar</button>
          </FormGroup>
          </div>
          </form>
        </ModalBody>

      </Modal>
     
      </>
    )
  }
}

export default ModalVacante;