import React, { useEffect, useState } from 'react';
import { useSelector} from 'react-redux';
import { PetCard } from './PetCard';

export const Profile = () => {

    const { uid, name } = useSelector( state => state.auth );

    const { fullData } = useSelector( state => state.app.data );

    const [option, setOption] = useState("pets");

    const [newDataFiltered, setNewDataFiltered] = useState([]);

    useEffect(() => {
        
        setNewDataFiltered(fullData.filter(pet=> pet.uid === uid ));

    }, [fullData]);

    const handleMyPets = (e) =>{
        const { value: classValue} = e.target.classList;

        if(classValue.includes("pets")){
            if(option !== "pets"){
                setNewDataFiltered(fullData.filter(pet=> pet.uid === uid ));
                setOption("pets");
            }            
        } else if(classValue.includes("likes")){
            if(option !== "likes"){
                setNewDataFiltered(fullData.filter(pet=> pet.likes.includes(uid) ));
                setOption("likes");
            }
        } else if(classValue.includes("hearts")){
            if(option !== "hearts"){
                setNewDataFiltered(fullData.filter(pet=> pet.hearts.includes(uid) ));
                setOption("hearts");
            }
        }
    }

    return (
        <>
            <div className="profile__modal-container">
                <span className="d-block mt-2"><i className="fas fa-user-circle"></i>{ "       " + name.split(" ")[0] }</span>
                <div className="flex-row-nowrap profile__options mt-2">
                    <div
                        className={option==="pets"? "pets profile__option selected":"pets profile__option"}
                        onClick={ handleMyPets }>
                        My pets
                    </div>
                    <div
                        className={ option==="likes"? "likes profile__option selected":"likes profile__option"}
                        onClick={ handleMyPets }>
                        Likes
                    </div>
                    <div
                        className={ option==="hearts"? "hearts profile__option selected":"hearts profile__option"}
                        onClick={ handleMyPets }>
                        Hearts
                    </div>
                    
                </div>
                <div className="profile__container-cards mt-3">

                    
                    {
                        newDataFiltered.length > 0
                        ?
                        newDataFiltered.map((pet)=>(
                            <PetCard
                            key={ pet.id }
                            pet={ pet }
                            option={option}
                            />
                            )
                        )
                        :
                        <h3>No tienes {option}</h3>
                    }
                </div>
            </div>

            
        </>
    )
}
