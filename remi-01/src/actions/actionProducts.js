import { typesProduct } from "../types/types";
import { db } from "../firebase/firebaseConfig";
import { addDoc,collection,deleteDoc,doc,getDocs,query,where} from "@firebase/firestore";
import Swal from 'sweetalert2'


export const registerProductos = ( nombreProduct,nombre,imagen,descripcion,precio) =>{
    return(dispatch)=>{
        const newProduct = {
            nombreProduct,
            nombre,
            imagen,
            descripcion,
            precio
        }
        addDoc(collection(db,"productos"), newProduct)
        .then(res => {
            dispatch(registerProductosSincrono(newProduct))
        })
        .catch(error =>{
            console.log(error)
        })
    }
}
export const registerProductosSincrono = (productos) => {
    return{
        type: typesProduct.register,
        payload:productos
    }
}

export const listProducA = () =>{
    return async(dispatch)=>{
      const datos = await getDocs(collection(db,"productos"))
      const products = []
      datos.forEach((doc) => {
          products.push({ 
              ...doc.data()
          })
      })
      dispatch(listProducSincrono(products))
    }
}
export const listProducSincrono = (productos) => {
    return{
        type:typesProduct.list,
        payload:productos
    }
}



export const eliminarAsincrono = (nombreProduc) => {
    return async (dispatch) =>{
        const proData = collection(db,"productos");
        const q = query(proData,where("nombre","==",nombreProduc))

        const date = await getDocs(q);
        date.forEach((dt) => {
            deleteDoc(doc(db,"productos",dt.id))
        })
        dispatch(eliminarSincrono(nombreProduc));
        Swal.fire({
            position: 'top',
            icon: 'success',
            title: 'Los Datos Han Sido Borrados Correctamente',
            showConfirmButton: false,
            timer: 2000
          })

    }
}
export const eliminarSincrono = (nombre) =>{
    return{
        type:typesProduct.eliminar,
        payload:nombre
    }
}