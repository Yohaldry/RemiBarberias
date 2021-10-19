import { useSelector, useDispatch } from "react-redux";
import {listarUserAsincronico } from "../actions/actionUsers";
import React, { useEffect } from "react";

const PintarUser = () => {
  const dispatch = useDispatch();

  const { user } = useSelector((store) => store.user);
  // console.log(user);
  useEffect(() => {
    dispatch(listarUserAsincronico());
  }, [dispatch]);

  return (
    <div className="pros">
      {user ? (
        user.map((pr, index) => ( 
          <div  key={index}>
            <div className="card">
            <img className="img-grande" src={pr.imagen} alt="im" />
            <p className="p-card">{pr.nombre}</p>
            <p className="precio-card">{pr.estado}</p>
            </div>
          </div>
        ))
      ) : (
        <p>Los Datos No Estan Disponibles</p>
      )}
    </div>
  );
};

export default PintarUser