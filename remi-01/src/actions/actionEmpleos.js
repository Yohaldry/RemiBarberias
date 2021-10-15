import { typesEmpleo } from "../types/types";
import { db } from "../firebase/firebaseConfig";
import { addDoc,collection,deleteDoc,doc,getDocs,query,where} from "@firebase/firestore";
import Swal from 'sweetalert2'

export const registrarEmpleosA = ( barberia, nombre,experiencia,sueldo,contrato) =>{
    return(dispatch)=>{
        const newEmpleo = {
            barberia,
             nombre,
             experiencia,
             sueldo,
             contrato
        }
        addDoc(collection(db,"empleos"), newEmpleo)
        .then(res => {
            dispatch(registrarEmpleoS (newEmpleo))
        })
        .catch(error =>{
            console.log(error)
        })
    }
}
export const registrarEmpleoS = (empleo) => {
    return{
        type: typesEmpleo.registrar,
        payload:empleo
    }
}

export const listProducA = () =>{
    return async(dispatch)=>{
      const datos = await getDocs(collection(db,"empleos"))
      const dtEmpleos = []
      datos.forEach((doc) => {
          dtEmpleos.push({ 
              ...doc.data()
          })
      })
      dispatch(listProducSincrono(dtEmpleos))
    }
}
export const listProducSincrono = (empleo) => {
    return{
        type:typesEmpleo.listEmpleo,
        payload:empleo
    }
}