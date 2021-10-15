import React, {useEffect} from 'react';
import { useDispatch } from 'react-redux';
import { Link } from "react-router-dom";
import { useForm } from '../hooks/useForm';
import { fileUpload } from '../helpers/FileUpload';
import {registerProductos} from '../actions/actionProducts'
import {listProducA} from '../actions/actionProducts'
import ListProducts  from '../Components/listProducts'


const AddProducto = ({history}) => {

    const dispatch = useDispatch();

    const [values, handleInputChange, reset] = useForm({
        nombreProduc: '',
        nombre: '',
        imagen1: '',
        imagen2: '',
        imagen3: '',
        descripcion: '',
        precio: ''
    })

    let { nombreProduc,nombre,imagen1,imagen2,imagen3,descripcion,precio } = values;


    const handleRegistro = e => {
        e.preventDefault();
        dispatch(registerProductos(nombreProduc,nombre,imagen1,imagen2,imagen3,descripcion,precio));
        reset();
    }

    const handlePictureClick = () => {
         document.querySelector('#fileSelector').click();
    }

    const handleFileChanged = (e) => {
        const file = e.target.files[0];
        fileUpload(file)
        .then(response => {
            imagen1 = response
            imagen2 = response
            imagen3 = response

            console.log(response);
        })
        .catch(error => {
            console.log(error.message);
        })
    }

    useEffect(() => {
        dispatch(listProducA())
    }, [dispatch])

    return (
        <div>
            <ListProducts/>
        </div>
    )
}

export default AddProducto
