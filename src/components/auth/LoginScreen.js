import React from 'react';
import {
    Link
  } from "react-router-dom";

export const LoginScreen = () => {
    return (
        <div className="auth__login-container">
            <Link to="./" className="auth__go-before"><i className="fas fa-times"></i></Link>
            <img 
                src="./assets/svgs/cute-cat2.svg" 
                className="auth__cat-logo" 
                alt="cute-dog"/>
            <h1 className="auth__title">Deja tu Huella</h1>
            <p className="d-block">¿No tienes una cuenta? <Link to="./register" className="link">Registrate</Link></p>
            <label className="auth__label" htmlFor="email">Email</label>
            <input 
                className="input d-block auth__input" 
                id="email"
                type="email"/>            
            <label className="auth__label" htmlFor="password">Password</label>
            <input 
                className="input d-block auth__input"
                id="password" 
                type="password"/>
            <button 
                type="submit" 
                className="button d-block auth__btn-login"
                >
                Iniciar Sesión
            </button>
            <span className="d-block mt-3">o ingresa con:</span>
            <div className="d-block mt-2">
                    <div 
                        className="google-btn"
                        // onClick={ handleGoogleLogin }
                    >
                        <div className="google-icon-wrapper">
                            <img className="google-icon" src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="google button" />
                        </div>
                        <p className="btn-text">
                            <b>Sign in with google</b>
                        </p>
                    </div>
                </div>
        </div>
    )
}
