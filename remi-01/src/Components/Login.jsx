import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "../hooks/useForm";
import { useDispatch } from "react-redux";
import {loginEmailPassword, loginGoogle, loginFacebook} from '../actions/actionLogin';
import HeaderInicio from '../Components/HeaderInicio'

function Login() {
  const dispatch = useDispatch();

  const [values, handleInputChange, reset] = useForm({
    email: "",
    password: "",
  });

  const { email, password } = values;

  const handleLogin = (e) => {
    e.preventDefault();
    dispatch(loginEmailPassword(email, password));
  };

  const handleGoogle = () => {
    dispatch(loginGoogle());
  };
  const handleFacebook = () => {
    dispatch(loginFacebook());
  };

  return (
      <div>
    <div className="container">
    <h1 className="tit">Iniciar Sesión</h1>
    <img className="logo-remi" src="https://res.cloudinary.com/dtkirmtfq/image/upload/v1632818447/Remi/Imagen3_p5ft9s.png" alt="remi"/>
    <form onSubmit={handleLogin}>
      <div className="container-email">
        <input
          type="email"
          placeholder="Email"
          name="email"
          className="input-email"
          value={email}
          onChange={handleInputChange}
        />
     

        <input
          type="password"
          placeholder="Password"
          className="input-email"
          name="password"
          value={password}
          onChange={handleInputChange}
        />
   </div>
      <button  className="button-enviar" type="submit">
        Enviar
      </button>

        <p className="ti-redes">Inicia Sesión con tus redes</p>
        <div className="redes-sociales">
            <div className="google">
                 <img onClick={handleGoogle} class="google-icon" src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="google" />
                 <img onClick={handleFacebook} className="google-icon" src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Facebook_icon.svg/1200px-Facebook_icon.svg.png" alt="facebook" />
            </div>
        </div>

        <p className="parrafo">Al continuar, aceptas las Condiciones de uso y el Aviso de privacidad de REMI.</p>

    </form>
    <p className="p-registro">¿Eres nuevo en REMI?</p>
      <Link id="regis" className="regis" to="/auth/login">Crea tu cuenta en REMI</Link>
    </div>
    </div>
    
  );
}

export default Login;
