import { types } from "../../types/types";
import { db } from "../../firebase/firebase-config";

export const settingCardContainer = ( cardContainer ) =>(
    {
        type: types.setCardContainer,
        payload: cardContainer
    }
);

export const movementSettings = ( movementValues ) =>(
    {
        type: types.movementSettings,
        payload: movementValues
    }
);

export const selectingRefCard = ( refCard ) =>(
    {
        type: types.refCard,
        payload: refCard
    }
);

export const heartUpAction = ( heartStatus ) =>(
    {
        type: types.heartUp,
        payload: heartStatus
    }
);

export const changeModalStatus = ( modalStatus ) =>(
    {
        type: types.modalStatus,
        payload: modalStatus
    }
);

export const thumbingUp = ( type ) =>{
    return (dispatch, getState)=>{
        if(getState().auth.movementSettings.actualCard !== undefined){

            const { id: cardId} = getState().auth.movementSettings.actualCard;
            const { uid } = getState().auth;

            const database=[];

            db.collection('animales').get().then(snapshot => {
                snapshot.forEach( snapChild =>{
                    database.push({
                        id: snapChild.id,
                        ...snapChild.data()
                    })                
                })

                const datum = database.filter((item)=>( item.id === cardId && item));

                const objectLikes = [...datum[0][type], uid];

                if( type === "likes"){
                    if(!datum[0].likes.includes(uid)){
                        db.collection('animales').doc(cardId).update({ likes: objectLikes });
                    }
                } else if( type === "hearts"){
                    if(!datum[0].hearts.includes(uid)){
                        db.collection('animales').doc(cardId).update({ hearts: objectLikes });
                    }
                }

                if(!datum[0].viewed.includes(uid)){
                    db.collection('animales').doc(cardId).update({ viewed: objectLikes });
                }

            })
        }
        
        
        // db.doc('DcHhom5s03TCa8waNVBe').update({ activo:true });

        // console.log(cardId);
        // console.log(uid);

    }
}

