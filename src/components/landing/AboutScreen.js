import React from 'react'
import { NavBar } from './NavBar'

export const AboutScreen = () => {
    return (
        <div>
            <NavBar titulo="About Us" />
            <div>
                <div>
                    <img 
                        src="./assets/vets/DocKelvin.png" 
                        className="vetscreen__first-vet" 
                        alt="abandoned-pets"/>
                    <div>
                        <p>Mario Cuberos</p>
                        <p>Desarrollador Web - Voluntario Poli Santa Marta 2019</p>
                    </div>

                    <img 
                        src="./assets/vets/DocKelvin.png" 
                        className="vetscreen__first-vet" 
                        alt="abandoned-pets"/>
                    <div>
                        <p>Mario Cuberos</p>
                        <p>Desarrollador Web - Voluntario Poli Santa Marta 2019</p>
                    </div>
                    
                </div>
                <h6 className="vetscreen__initial-text">Nota Aclaratoria</h6>
                <p>Esta página web fue realizada sin animo de lucro por motivación del desarrollador Mario Cuberos. Ninguna de las fundaciones, veterinarias, o grupos de ayuda animal participaron en la planeación, ejecución y/o despliegue de esta página ni pagaron dinero por la realización de la misma.</p>
            </div>
        </div>
    )
}
