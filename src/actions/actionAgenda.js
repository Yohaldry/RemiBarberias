import { typesAgenda } from "../types/types";
import { db } from "../firebase/firebaseConfig";
import { addDoc,collection,getDocs} from "@firebase/firestore";

export const registrarAgendasA = ( nombre,telefono,email,destino,hora,fecha,servicio,profesional,precio) =>{
    return(dispatch)=>{
        const newAgenda = {
            nombre,
            telefono,
            email,
            destino,
            hora,
            fecha,
            servicio,
            profesional,
            precio
        }
        addDoc(collection(db,"agendas"), newAgenda)
        .then(res => {
            dispatch(registrarAgendaS (newAgenda))
        })
        .catch(error =>{
            console.log(error)
        })
    }
}
export const registrarAgendaS = (agenda) => {
    return{
        type: typesAgenda.registarAgn,
        payload:agenda
    }
}

export const listAgendaA = () =>{
    return async(dispatch)=>{
      const datos = await getDocs(collection(db,"agendas"))
      const dtAgenda = []
      datos.forEach((doc) => {
        dtAgenda.push({ 
              ...doc.data()
          })
      })
      dispatch(listAgendaS(dtAgenda))
    }
}
export const listAgendaS = (agenda) => {
    return{
        type:typesAgenda.listAgn,
        payload:agenda
    }
}