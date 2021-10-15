import { useSelector, useDispatch } from "react-redux";
import { listUserAsin } from "../actions/actionUser";
import React, { useEffect,useState } from "react";

function searchTermUser(user){
  return function(pro){
    return pro.nombre.toLowerCase().includes(user)
  }
  }
const ListUser = () => {

  const [user,setUser] = useState("")
  const dispatch = useDispatch();

  const { users } = useSelector((store) => store.user);
  console.log(users);

  useEffect(() => {
    dispatch(listUserAsin());
  }, [dispatch]);

  
  return (
    <div>
      <input id="BuscarUser" type="search" placeholder="Buscar"  onChange={e=>setUser(e.target.value)} />
      <div id="Profesionales">

        //{" "}
        <img
          className="Borde_Blue"
          src="https://res.cloudinary.com/dtkirmtfq/image/upload/v1633667552/Remi/Imagen2_hyh48d.png"
          alt=""
        />
        // <h2 className="Red">La mayor red de profesionales de belleza</h2>
        //{" "}
        <div className="ContenidoPrincipal">
          {users.filter(searchTermUser(user)).map((us, index) => (
            <div className="BarberiasYBarberos" key={index}>
              <img src={us.imagen} alt="img" />
              <h5>{us.nombre}</h5>
              <hr/>
              <ul>
                <li>{us.estado}</li>
                <li>Experiencia  {us.experiencia}  Años</li>
                <li>{us.direccion}</li>
              </ul>
            </div>
          ))} 
        </div>
      </div>
    </div>
  );
};

export default ListUser;
