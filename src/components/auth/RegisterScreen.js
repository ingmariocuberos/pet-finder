import React from 'react';
import {
    Link
  } from "react-router-dom";

export const RegisterScreen = () => {
    return (
        <div className="auth__login-container">
            <Link to="./" className="auth__go-before"><i className="fas fa-times"></i></Link>
            <img 
                src="./assets/svgs/cute-cat2.svg" 
                className="auth__cat-logo" 
                alt="cute-dog"/>
            <h1 className="auth__title">Deja tu Huella</h1>
            <label className="auth__label-register" htmlFor="nombre">Nombre</label>
            <input 
                className="input d-block auth__input" 
                id="nombre"
                type="text"
                autoComplete="off"/>
            <label className="auth__label-register" htmlFor="email">Email</label>
            <input 
                className="input d-block auth__input" 
                id="email"
                type="email"
                autoComplete="off"/>   
            <label className="auth__label-register" htmlFor="password">Password</label>
            <input 
                className="input d-block auth__input" 
                id="password"
                type="password"
                autoComplete="off"/>             
            <label className="auth__label-register" htmlFor="password2">Confirm password</label>
            <input 
                className="input d-block auth__input"
                id="password2" 
                type="password"
                autoComplete="off"/>
            <button 
                type="submit" 
                className="button d-block auth__btn-register"
                >
                Registrate
            </button>
            <p className="d-block mt-2">¿Ya estás registrado? <Link to="./login" className="link">Inicia sesión</Link></p>
        </div>
    )
}
