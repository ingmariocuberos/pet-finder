import React, { useState, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeModalStatus, heartUpAction, movementSettings, settingCardContainer } from '../actions/app';
import { PetsScreen } from './PetsScreen';

export const RulingCards = ({ data, movement, setMovement}) => {

    const dispatch = useDispatch();

    const { startPosition, endPosition, traslatePosition, divWeight} = movement;

    const [dataFiltered, setDataFiltered] = useState(null);

    const { uid } = useSelector( state => state.auth );

    useEffect(() => {
        if(data !== null){
            setDataFiltered(data.filter(pet=> !pet.viewed.includes(uid)));
        }        
    }, [data]);

    useEffect(() => {

        if(dataFiltered !== null){
            dispatch( movementSettings({
                actualCard: data[0],
                data: dataFiltered,
                movement: movement,
                setMovement: setMovement,
                divWeight: divWeight,
                maximumValue: (dataFiltered.length)*(-divWeight),
                positiveMovement: traslatePosition-divWeight
            }));
        }
        
    }, [dataFiltered]);

    const handleTouchStart = (e) =>{

        setMovement({
            ...movement,
            startPosition: e.targetTouches[0].clientX
        });

    }

    const handleTouchEnd = (e) =>{

        setMovement({
            ...movement,
            endPosition: e.changedTouches[0].clientX
        });
    }

    useEffect(() => {

        if(dataFiltered !== null){

            const newMovement = startPosition-endPosition;
            const maximumValue = (dataFiltered.length)*(-divWeight);
            const positiveMovement = traslatePosition-divWeight;
            const conditionTraslation = (positiveMovement) < maximumValue ? maximumValue : positiveMovement;
            // const negativeMovement = traslatePosition+divWeight;

            if(newMovement > 50){
                
                setMovement({
                    ...movement,
                    traslatePosition: conditionTraslation
                });

                refCardContainer.current.style.transform = `translate(${ conditionTraslation }px, 0)`;

                dispatch( heartUpAction( false ) );
                dispatch( changeModalStatus(false));

                // dispatch( movementSettings({
                //     ...movementConfig,
                //     actualCard: data[(-conditionTraslation/divWeight)],
                //     positiveMovement: (conditionTraslation)-divWeight
                // }));

            }

        }
            
    }, [endPosition]);

    const refCardContainer = useRef(null);

    useEffect(() => {
        
        dispatch( settingCardContainer(refCardContainer.current));

    }, []);

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

            <div className="pets__pet-card pets__empty-card">

                <img className="pets__pet-image" src='./assets/Fotosperritos/finalPhoto.png' alt="last-card" />

                {
                    data===null
                    ?
                    <h1>Cargando...</h1>
                    :
                    <h1>Finalizaste</h1>
                }                    
                
            </div>

        </div>
    )
}
