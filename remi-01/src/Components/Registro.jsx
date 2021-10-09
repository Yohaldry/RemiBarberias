import { useForm } from '../hooks/useForm';
import {registroEmailPasswordNombre} from '../actions/actionRegister';
import {useDispatch} from 'react-redux'
import Swal from 'sweetalert2'


const Registro = () => {

    const dispatch = useDispatch();

    const [formValues, handleInputChange] = useForm({
        nombre: '',
        email: '',
        pass1: '',
        pass2: ''
    });
 
    const { nombre, email, pass1, pass2 } = formValues;

    const handleRegistro = (e) => {
        e.preventDefault();
        dispatch(registroEmailPasswordNombre(email,pass1,nombre))
        
        
        Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Usuario Guardado',
            showConfirmButton: false,
            timer: 60500,
            footer: '<a style="font-size:40px; background-color: black; border-radius: 30px; width: 300px; text-align: center;" href="">Iniciar Sesion</a>'
          })
    }



    return (
    <form id="registro-form" onSubmit={handleRegistro}>
        <div className="container_Registro">
            <img className="User" src="https://res.cloudinary.com/dtkirmtfq/image/upload/v1632817110/Remi/Imagen6_bnc1ph.png" alt="" />
            <div className="Form_Registro">
                    <h1>Registro</h1>
                    <input
                     value={nombre} 
                     name="nombre"
                     onChange={handleInputChange}
                    type="text" placeholder="Nombre" />
 
                    <input
                     value={email}
                     name="email" 
                     onChange={handleInputChange}
                    type="text" placeholder="Correo Electronico" />

                    <input
                    value={pass1}
                    name="pass1"
                    onChange={handleInputChange}
                    type="password" placeholder="Contraseña" />

                    <input
                    value={pass2}
                    name="pass2"
                    onChange={handleInputChange}
                    type="password" placeholder="Confirmar Contraseña" />
                    <button type="submit">Listo</button>
            </div>
        </div>
        </form>
    )
}

export default Registro
