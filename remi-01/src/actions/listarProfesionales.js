import { collection, addDoc, updateDoc, doc, deleteDoc } from 'firebase/firestore'
import { db } from '../firebase/firebaseConfig'
import { types } from '../types/types'
import Swal from 'sweetalert2'
import {loadProfesional} from '../helpers/loadProfesional '


export const TaksNew = (Profesionales) => {
    return async (dispatch, getSate) => { 
        const id = getSate().login.id
        console.log(id);
        const newCard = {
            nombre: Profesionales.nombre,
            estado:Profesionales.estado,
            empleado:Profesionales.empleado,
            experiencia:Profesionales.experiencia,
            fotoPerfil:Profesionales.fotoPerfil,
        }

        await addDoc(collection(db, `${id}/profesionales/data`), newCard);
        dispatch(addNewTaks(newCard))
    }
}

export const addNewTaks = (Profesionales) => ({
    type: types.taksAddNew,
    payload: {
        ...Profesionales
    }
})


//Listar
export const Listar = (uid) => {
    return async (dispatch) => {
        const cards = await loadProfesional(uid)
        dispatch(setTaks(cards))
    }
}

export const setTaks = (Profesionales) => {
    return {
        type: types.taksLoad,
        payload: Profesionales
    }
}

//Actualizar 
export const activeTaks = (id, Profesionales) => {
    return {
        type: types.taksActive,
        payload: {
            id,
            ...Profesionales
        }
    }
}

export const Edit = (Profesionales) => {
    return async (dispatch, getState) => {
        const id = getState().login.id;
        console.log(Profesionales)

        const EditCard = {
            nombre: Profesionales.nombre,
            estado:Profesionales.estado,
            empleado:Profesionales.empleado,
            experiencia:Profesionales.experiencia,
            fotoPerfil:Profesionales.fotoPerfil,
        }

        const cardFire = { ...EditCard }
        delete cardFire.id

        Swal.fire({
            title: 'Uploading...',
            text: 'Please wait ...',
            allowOutsideClick: false,
            onBeforeOpen: () => {
                Swal.showLoading()
            }
        })

        const docRef = await doc(db, `${id}/profesionales/data`, `${Profesionales.id}`);
        console.log(docRef)
        // Update the timestamp field with the value from the server
        const updateTimestamp = await updateDoc(docRef, {
            nombre: Profesionales.nombre,
            estado:Profesionales.estado,
            empleado:Profesionales.empleado,
            experiencia:Profesionales.experiencia,
            fotoPerfil:Profesionales.fotoPerfil,
        });

        Swal.fire('Saved', Profesionales.nombre, 'success');
        dispatch(Listar(id))
    }
}

export const Delete = (id) => {
    return async (dispatch, getState) => {

        const uid = getState().login.id;
        await deleteDoc(doc(db, `${uid}/profesionales/data`, `${id}`));


        dispatch(deleteTaks(id));
        Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Delete',
            showConfirmButton: false,
            timer: 1500
        })
        dispatch(Listar(uid))
    }
}

export const deleteTaks = (id) => ({
    type: types.taksDelete,
    payload: id
});