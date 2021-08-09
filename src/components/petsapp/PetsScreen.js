import React, { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from "react-redux";
import moment from "moment";
import { manipulatingAge } from "../../helpers/manipulatingTraslate";
import { changeModalStatus, heartUpAction } from '../actions/app';

export const PetsScreen = ( { pet } ) => {

    const dispatch = useDispatch();
    const { heartVar, modal } = useSelector( state => state.app );

    useEffect(() => {        
        dispatch(heartUpAction( false ));
        dispatch(changeModalStatus( false ));
    }, []);

    const { petName, age, ageId, date, location, sex, sterilized, vaccinated, uploadImage, telf, link } = pet;

    const refContainer = useRef(null);
    const refPetInformation = useRef(null);

    useEffect(() => {
        if( heartVar ){
            if(!modal){
                dispatch( changeModalStatus(true));
                handleMoreInformation();
            }  
        }

    }, [heartVar])

    useEffect(() => {
        if(modal){
            refPetInformation.current.style.height = "80vh";
            refPetInformation.current.style.backgroundColor = "#FFFFFFD9";
            refPetInformation.current.style.borderRadius = "30px 30px 30px 30px";

        } else if(!modal){
            refPetInformation.current.style.height = "12vh";
            refPetInformation.current.style.backgroundColor = "#FFFFFF99";
            refPetInformation.current.style.borderRadius = "0px 0px 30px 30px";
        }
    }, [modal])
    
    const handleMoreInformation = () =>{

        if(!modal){
            dispatch( changeModalStatus(true));

        } else if(modal){
            dispatch( changeModalStatus(false));
        }

    };
    
    return (
        <>
            <div>
                <div 
                    className="pets__pet-card"
                    ref={ refContainer }>
                    
                    <img className="pets__pet-image" src={ uploadImage } alt="pets-available" />

                    <div 
                        className="pets__information"
                        ref={ refPetInformation }
                        onClick={ handleMoreInformation }
                    >

                        <div className="information-item flex-row-nowrap">
                            <span className="information-item pets__each-info">{petName + ", "} { manipulatingAge(age, ageId) }</span>
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

                        {
                            modal
                            &&
                            <div className="pets__container-more-information mt-4 p-2">                        
                                <p>Sexo: { sex }</p>
                                <p>Ubicación: { location }</p>                   
                                <p>Esterilizado: { sterilized ? "Si" : "No"}</p>
                                <p>Vacunado: { vaccinated ? "Si" : "No"}</p>
                                <p>Publicado: { moment(moment(date).format("YYYYMMDD"), "YYYYMMDD").fromNow()  }</p>
                                {
                                    heartVar
                                    &&
                                    <div className="pets__container-telf">
                                        <h3>Teléfono: { telf } </h3>
                                        <a href={link} target="_blank" rel="noreferrer"><u> Enlace </u></a>
                                    </div>
                                }
                                
                                
                            </div>
                        }

                    </div>
                    
                </div>
            </div>
        </>
    )
}
