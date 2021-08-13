import React, { useState, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {  eraseViewed, settingData, initialCharge, settingCardContainer, thumbingUp } from '../actions/app';
import { PetsScreen } from './PetsScreen';

export const RulingCards = ({ data, movement, setMovement}) => {

    const dispatch = useDispatch();

    const { startPositionX, endPositionX, startPositionY, endPositionY} = movement;
    const [dataFiltered, setDataFiltered] = useState(null);
    const { uid } = useSelector( state => state.auth );
    const { data: dataItems } = useSelector( state => state.app );
    const { actionButtons } = useSelector( state => state.app );
    const [currentCard, setCurrentCard] = useState(0);

    const {next, like, heart} = actionButtons;

    useEffect(() => {
        if(data !== null){
            setDataFiltered(data.filter(pet=> !pet.viewed.includes(uid)));
            dispatch(initialCharge(true));
        } else {
            dispatch(initialCharge(false));
        }   
    }, [data]);

    useEffect(() => {

        if(dataFiltered !== null){

            dispatch( settingData({
                fullData: data,
                dataFiltered: dataFiltered,
                currentCard: dataFiltered[currentCard]
            }));
        }
        
    }, [dataFiltered]);

    useEffect(() => {
        if(dataFiltered !== null){
            dispatch( settingData({
                    ...dataItems,
                    currentCard: dataFiltered[currentCard]
                }));
        }
    }, [currentCard]);

    const handleTouchStart = (e) =>{

        setMovement({
            ...movement,
            startPositionX: e.targetTouches[0].clientX,
            startPositionY: e.targetTouches[0].clientY
        });

    }
    const handleTouchEnd = (e) =>{

        setMovement({
            ...movement,
            endPositionX: e.changedTouches[0].clientX,
            endPositionY: e.changedTouches[0].clientY
        });
    }

    useEffect(() => {

        

        if(dataFiltered !== null){

            const newMovement = startPositionX-endPositionX;
            const newMovementY = startPositionY-endPositionY;            
            const emptyCard = refCardContainer.current.children[0].classList.value.includes("empty");
            
            if(newMovement > 70 && !emptyCard){

                next.current.click();
                setCurrentCard(currentCard + 1);

            } else if(newMovement < -70 && !emptyCard){
                
                like.current.click();
                setCurrentCard(currentCard + 1);

            } else if(newMovementY > 70 && !emptyCard){
                
                heart.current.click();
            }

        }
            
    }, [endPositionX]);

    const refCardContainer = useRef(null);

    useEffect(() => {
        
        dispatch( settingCardContainer(refCardContainer));

    }, []);

    const handleEraseViewed = () =>{
        dispatch( eraseViewed() );
    }

    return (
        <div 
            className="petscreen__card-container" 
            ref={ refCardContainer }
            onTouchStart={ handleTouchStart }
            onTouchEnd={ handleTouchEnd }             
            >

            {
                dataFiltered !== null
                &&
                dataFiltered.map((pet)=>(
                    <PetsScreen 
                        key={ pet.id } 
                        pet={ pet }
                        />
                ))              
            }

            <div 
                className="pets__pet-card pets__empty-card"
                name="empty-card">

                <img className="pets__pet-image" src='./assets/Fotosperritos/finalPhoto.png' alt="last-card" />

                {
                    data===null
                    ?
                    <div className="pet__finish">
                        <span>Cargando...</span>
                        <span className="mt-3">Por favor, espera</span>
                    </div>
                    :
                    <div className="pet__finish">
                        <span>No hay más mascotas...</span>
                        <button 
                            className="auth__btn-login d-block mt-3"
                            onClick={ handleEraseViewed }>Pulsa aquí</button>
                        <span className="mt-3">Para ver de nuevo</span>
                    </div>
                }                    
                
            </div>

        </div>
    )
}
