import {typesUser} from '../types/types'
import { db } from "../firebase/firebaseConfig";
import { addDoc,collection,getDocs} from "@firebase/firestore";

export const registrarUserA = ( imagen, nombre,estado,experiencia,direccion,servicios,descripcion) =>{
    return(dispatch)=>{
        const newUser = {
            imagen, 
            nombre,
            estado,
            experiencia,
            direccion,
            servicios,
            descripcion,

            
        }
        addDoc(collection(db,"Datos"), newUser)
        .then(res => {
            dispatch(registrarUserS (newUser))
        })
        .catch(error =>{
            console.log(error)
        })
    }
}
export const registrarUserS = (Datos) => {
    return{
        type: typesUser.regisUser,
        payload:Datos
    }
}


export const listUserAsin = () => {
    return async(dispatch) =>{
       const data = await getDocs(collection(db,"Datos"))
      const list = [];
       data.forEach((doc)=>{
           list.push({
               ...doc.data()
           })
        dispatch(listUser(list))

       })

    }
}
export const listUser = (Datos) => {
    return {
    type: typesUser.listar,
    payload: Datos
    }
}