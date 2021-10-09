import {typesUser} from '../types/types'
import {db} from '../firebase/firebaseConfig'
import {getDocs,collection} from '@firebase/firestore'

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