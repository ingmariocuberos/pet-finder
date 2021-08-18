import React from 'react'
import { NavBar } from './NavBar'

export const VetsScreen = () => {
    return (
        <div className="vetscreen__principal">
            <NavBar titulo="Veterinarias" />
            <h6 className="vetscreen__initial-text">Estas son las veterinarias a las que acuden los animalistas en Santa Marta, por precio, calidad y sentido de cuidado animal</h6>

            <div className="vetscreen__container-vets mt-4">

                <div className="vetscreen__container-first-vet">

                    <div className="vetscreen__first-vet-info">
                        <p>Dr. Kelvin García</p>
                        <p>Telf: (322)780-3095</p>
                        <p>Dir: Urb. San José de la U</p>
                    </div>

                    <img 
                            src="./assets/vets/DocKelvin.png" 
                            className="vetscreen__first-vet" 
                            alt="abandoned-pets"/> 
                </div>
                <div className="vetscreen__container-first-vet">

                    <img 
                            src="./assets/vets/gaia.png" 
                            className="vetscreen__first-vet" 
                            alt="abandoned-pets"/> 

                    <div className="vetscreen__first-vet-info">
                        <p>Gaia Animal Care</p>
                        <p>Telf: (310)606-8076</p>
                        <p>Dir: Brr. 13 de Julio</p>
                    </div>
                    
                </div>

                <div className="vetscreen__container-first-vet">

                    <div className="vetscreen__first-vet-info">
                        <p>San Rafael</p>
                        <p>Telf: (321)201-1763</p>
                        <p>Dir: Brr. El Jardín</p>
                    </div>

                    <img 
                            src="./assets/vets/sanrafael.png" 
                            className="vetscreen__first-vet" 
                            alt="abandoned-pets"/> 
                </div>
            </div>
            
        </div>
    )
}
