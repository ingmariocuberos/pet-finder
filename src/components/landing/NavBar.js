import React, { useState } from 'react';
import { useRef } from 'react';
import {
    Link
  } from "react-router-dom";

export const NavBar = ({ titulo }) => {

    const [modalIsActivate, setModalIsActivate] = useState(false)

    const refModal = useRef(null);
    const refMenuBars = useRef(null);

    const handleModal = () =>{
        if(!modalIsActivate){
            refModal.current.style.display = "flex";
            refMenuBars.current.style.backgroundColor = "#9b3db3";   
            setModalIsActivate(true);
            
        } else{
            refModal.current.style.display = "none";
            refMenuBars.current.style.backgroundColor = "transparent";           
            setModalIsActivate(false);
        }
    }

    return (
        <>
            <nav className="navbar navbar-expand-lg navbar__principal">
                <div className="container-fluid container-nav">
                    <Link className="navbar-brand navbar__title-page" to="./index"><i className="fas fa-paw navbar__logo"></i>{ titulo }</Link>
                    <button ref={ refMenuBars } className="navbar__button-bars" type="button"
                    onClick={ handleModal }>
                    <i className="fas fa-bars text-white menu-bars"></i>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavDropdown">
                    <div className="navbar__div-navbar">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                            <Link className="nav-link-pc mt-1 active" aria-current="page" to="./index">Home</Link>
                            </li>
                            <li className="nav-item">
                            <Link className="nav-link-pc mt-1" to="./vets">Veterinarias</Link>
                            </li>
                            <li className="nav-item">
                            <Link className="nav-link-pc mt-1" to="./about">Sobre nosotros</Link>
                            </li>
                        </ul>
                        <ul className="navbar-nav">
                            <li className="nav-item">
                            <Link className="nav-link-pc mt-1 active" aria-current="page" to="./register">Registro</Link>
                            </li>
                            <li className="nav-item">
                            <Link className="nav-link-pc mt-1" to="./login">Iniciar Sesión</Link>
                            </li>
                        </ul>
                    </div>
                    
                    </div>
                </div>
            </nav>
            <div 
                className="modal-options"
                ref={refModal}>
                <ul className="navbar-nav">
                    <li className="nav-item">
                    <Link className="nav-link active" aria-current="page" to="./index"><i className="fas fa-home"></i>&nbsp; Home</Link>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link" to="./vets"><i className="fas fa-hospital"></i>&nbsp; &nbsp;Veterinarias</Link>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link" to="./about"><i className="fas fa-users"></i> Sobre nosotros</Link>
                    </li>
                </ul>
                <br/>
                <ul className="navbar-nav">
                    <li className="nav-item">
                    <Link className="nav-link active" aria-current="page" to="./register"><i className="fas fa-user-circle"></i>  &nbsp;Registro</Link>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link" to="./login"><i className="fas fa-sign-in-alt"></i>&nbsp; Iniciar Sesión</Link>
                    </li>
                </ul>
                
            </div>
        </>
    )
}
