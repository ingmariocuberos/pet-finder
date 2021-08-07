import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { movementSettings } from '../actions/app';

export const Buttons = () => {

    const dispatch = useDispatch();

    const state = useSelector( state => state );

    console.log(state);

    const { cardContainer } = useSelector( state => state.auth );

    const movementConfig = useSelector( state => state.auth.movementSettings );

    const handleNext = () =>{

        const { actualCard, data, movement, setMovement, maximumValue, positiveMovement, divWeight } = movementConfig;
        const conditionTraslation = (positiveMovement) < maximumValue ? maximumValue : positiveMovement;

        cardContainer.style.transform = `translate(${ conditionTraslation }px, 0)`;

        setMovement({
            ...movement,
            traslatePosition: conditionTraslation
        });

        dispatch( movementSettings({
            ...movementConfig,
            actualCard: data[(-conditionTraslation/divWeight)],
            positiveMovement: conditionTraslation-divWeight
        }));

    }

    const handleAnimation = (e) =>{
        e.target.classList.add('animate');
        
    }

    const removeAnimation = (e)=>{
        e.target.classList.remove('animate');
    }

    return (
        <div className="buttons__button-container flex-row-nowrap">

            <button 
                className="buttons__btn"
                onClick={ handleNext }><i className="fas fa-arrow-alt-circle-left buttons__icon-next"></i></button>
            

            <button 
                className="buttons__btn"
                onClick={ handleAnimation }
                onAnimationEnd={ removeAnimation }><i className="fas fa-heartbeat buttons__icon-heart"></i></button>

            <button 
                className="buttons__btn"
                onClick={ handleAnimation }
                onAnimationEnd={ removeAnimation }><i className="fas fa-thumbs-up buttons__icon-thumbs-up"></i></button>
            
        </div>
    )
}
