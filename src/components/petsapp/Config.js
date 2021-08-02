import React from 'react';
import { useDispatch } from 'react-redux';
import { firebase } from "../../firebase/firebase-config";
import { logout } from '../actions/auth';

export const Config = () => {

    const dispatch = useDispatch();

    const handleLogout = () =>{

        firebase.auth().signOut();

        dispatch( logout() );
    }

    return (
        <div className="config__container">
            <div 
                className="config__option d-block"
                onClick={ handleLogout }>
                <i className="fas fa-times-circle config__icon d-block"></i>
                <h2 className="config__text">Cerrar Sesion</h2>
            </div>
            
            <div className="config__option d-block">
                <i className="fas fa-user-circle
                config__icon d-block"></i>
                <h2 className="config__text">Mi perfil</h2>
            </div>
        </div>
    )
}
