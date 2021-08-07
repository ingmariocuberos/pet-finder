import React, { useEffect, useRef, useState } from 'react';
import { useDispatch } from "react-redux";
import { manipulatingAge } from "../../helpers/manipulatingTraslate";
import { selectingRefCard } from '../actions/app';

export const PetsScreen = ( pet ) => {

    const dispatch = useDispatch();

    const { petName, age, ageId, sex, sterilized, vaccinated, uploadImage } = pet.pet;

    const refContainer = useRef(null);

    const [modal, setModal] = useState(false);

    const handleMoreInformation = () =>{

        setModal( modal ? false : true );

    }
    
    return (
        <>
            <div>
                <div 
                    className="pets__pet-card"
                    ref={ refContainer }>
                    
                    <img className="pets__pet-image" src={ uploadImage } alt="pets-available" />

                    <div 
                        className="pets__information"
                        onClick={ handleMoreInformation }>

                        <div className="flex-row-nowrap">
                            <span className="pets__each-info">{petName + ", "} { manipulatingAge(age, ageId) }</span>
                        </div>

                        <div className="flex-row-nowrap">
                            {
                                sterilized
                                &&
                                <div className="pets__each-info pets__more-info me-3">
                                    <i className="far fa-check-square"></i> 
                                    Esterilizado
                                </div>

                            }

                            {
                                vaccinated
                                &&
                                <div className="pets__each-info pets__more-info">
                                    <i className="far fa-check-square"></i> 
                                    Vacunado
                                </div>

                            }
                            
                        </div>

                    </div>
                    
                </div>
            </div>
        </>
    )
}
