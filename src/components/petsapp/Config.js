import React from 'react'

export const Config = () => {
    return (
        <div className="config__container">
            <div className="config__option d-block">
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
