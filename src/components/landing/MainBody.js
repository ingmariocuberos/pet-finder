import React from 'react';
import {
    Link
  } from "react-router-dom";

export const MainBody = () => {
    return (
        <div className="landing__main-body">
            <h1 className="landing__title">Compañeros </h1>
            <h1 className="landing__title"> de Vida</h1>
            <Link 
                type="button"
                to="./register"
                className="btn-register">Registrate</Link>
            <Link 
                type="button"
                to="./login"
                className="btn-login">Inicia Sesión</Link>

            <img 
                src="./assets/svgs/cute-dog1.svg" 
                className="landing__dog-img" 
                alt="cute-dog"/>
            <img 
                src="./assets/svgs/cute-cat1.svg" 
                className="landing__cat-img" 
                alt="cute-cat"/>
            
        </div>
    )
}
