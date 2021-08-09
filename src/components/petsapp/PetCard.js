import React from 'react'
import { manipulatingAge } from '../../helpers/manipulatingTraslate';
import { useDispatch } from "react-redux";
import { erasePet } from '../actions/app';


export const PetCard = ({ pet, option }) => {

    const dispatch = useDispatch();

    const { id, petName,  age, ageId, telf, uploadImage } = pet;

    const handleErase = () =>{

        dispatch( erasePet(id, option));

    }
    return (
        <div className="petcard__container-card">
            <div className="petcard__image-container">
                <img className="petcard__image" src={ uploadImage } alt="pet" />
            </div>
            <div className="petcard__container-text">          
                <span className="petcard__item-text">{ petName }</span>
                <span className="petcard__item-text">{ manipulatingAge( age, ageId) }</span>
                {
                    option === "hearts"
                    &&
                    <span className="petcard__item-text">Telf: { telf }</span>
                }
                
            </div>
            <button
                className="petcard__eraser-button"
                onClick={ handleErase }
                disabled={ option === "pets" ? false : true }>
                    { option === "pets" ? "Elimina" : option === "likes" ? <i className="fas fa-thumbs-up petcard__ico-thumbsup"></i> : <i className="fas fa-heartbeat petcard__icon-heart"></i> }
            </button>
            
            
        </div>
    )
}
