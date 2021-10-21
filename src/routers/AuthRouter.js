import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import AppEntrada from '../Containers/AppEntrada';
import  Registro  from '../Components/Registro';
import Login from '../Components/Login'


export const AuthRouter = () => {
    return (
        <div className="auth__main">
            <div className="auth__box-container">
                <Switch>
                    <Route 
                        exact
                        path="/auth/login"
                        component={ AppEntrada }
                    />
 
                    <Route 
                        exact
                        path="/auth/registro"
                        component={ Registro }
                    />
                    <Route 
                    exacth
                    pacth="/auth/inicioSesion"
                    component={ Login}
                    />

                    <Redirect to="/auth/login" />

                </Switch>
            </div>

        </div>
    )
}