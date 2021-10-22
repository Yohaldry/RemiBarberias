import React from "react";
import { useDispatch } from "react-redux";
import { useForm } from "../hooks/useForm";
import { registrarAgendasA} from "../actions/actionAgenda";

const FromularioAgenda = () => {
    const dispatch = useDispatch();

  const [values, handleInputChange, reset] = useForm({
    nombre:"",
    telefono:"",
    email:"",
    destino:"",
    hora:"",
    fecha:"",
    servicio:"",
    profesional:"",
    precio:""
  });

  let {  nombre,telefono,email,destino,hora,fecha,servicio,profesional,precio } = values;
  const handleRegistro = (e) => {
    e.preventDefault();
    dispatch(registrarAgendasA(nombre,telefono,email,destino,hora,fecha,servicio,profesional,precio)
    );
    reset();
  };
    return (
        <div className="formularioAgenda">
             <h1 className="ti-agenda">INGRESA TUS DATOS</h1>
             <form onSubmit={handleRegistro}>
             <label className="label-select">NOMBRE</label>
                <input type="text" name="nombre" placeholder="Nombre" value={nombre}
                    onChange={handleInputChange}/>
                 <label className="label-select">TÉLEFONO</label>
                <input type="number"  name="telefono" placeholder="Telefono" value={telefono}
                    onChange={handleInputChange}/>
                 <label className="label-select">EMAIL</label>
                <input type="email" name="email" placeholder="Email" value={email}
                    onChange={handleInputChange}/>
                <label className="label-select">SERVICIO</label>
                <select  name="destino" value={destino} onChange={handleInputChange}>
                    <option value="Domicilio">Domicilio</option>
                    <option value="Establecimiento">Establecimiento</option>
                </select> 
                <label className="label-select">FECHA</label>
                <input type="date" name="fecha" placeholder="Fecha" value={fecha}
                    onChange={handleInputChange}/>
                <label className="label-select">HORA</label>
                <input type="time" name="hora" placeholder="Hora" value={hora}
                    onChange={handleInputChange}/>
                     
                     <label className="label-select">TIPO DE SERVICIO</label>
                <select  name="servicio" placeholder="Servicio" value={servicio}
                    onChange={handleInputChange}>
                <option value="Corte Sencillo">Corte Sencillo</option>
                <option value="Corte y Barba">Corte y Barba</option>
                </select>
                <label className="label-select">SELECCIONA TU PROFESIONAL DE CONFIANZA</label>
                <select name="profesional" placeholder="Profesionales" value={profesional}
                    onChange={handleInputChange}>
                    <option value="Yohaldry">Yohaldry</option>
                    <option value="Erick">Erick</option>
                    <option value="David">David</option>
                </select>
                <button type="submit">Agendar</button>
            </form>
           
        </div>
    )
}

export default FromularioAgenda
