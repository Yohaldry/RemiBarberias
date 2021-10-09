import { useSelector, useDispatch } from "react-redux";
import { listUserAsin } from "../actions/actionUser";
import React, { useEffect } from "react";


const ListUser = () => {

  const dispatch = useDispatch();

  const { users } = useSelector((store) => store.user);
  console.log(users);

  useEffect(() => {
    dispatch(listUserAsin());
  }, [dispatch]);

  
  return (
    <div>
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
          {users.map((us, index) => (
            <div className="BarberiasYBarberos" key={index}>
              <img src={us.imagen} alt="img" />
              <h5>{us.nombre}</h5>
              <ul>
                <li>{us.estado}</li>
                <li>{us.experiencia}</li>
                <li>{us.empleo}</li>
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ListUser;
