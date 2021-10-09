import {typesUser} from '../types/types'
import { db } from "../firebase/firebaseConfig";
import { collection,getDocs} from "@firebase/firestore";

export const listarUserAsincronico = () => {
    return async(dispatch)=>{
        const listarU = await getDocs(collection(db,"Datos"))
        const list = []
        listarU.forEach((doc)=>{
            list.push({
                ...doc.data()
            })
        })
    dispatch(listAsincrona(list))
    }
}
export const listAsincrona = (Datos) =>{
    return{
        type:typesUser.listar,
        payload:Datos
    }
}