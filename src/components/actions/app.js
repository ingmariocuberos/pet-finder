import Swal from 'sweetalert2';
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

export const initialCharge = (initialStatus) =>(
    {
        type: types.initialStatus,
        payload: initialStatus
    }
);

export const eraseViewed = ( )=>{
    return (dispatch, getState)=>{

        const database=[];
        
        db.collection('animales').get().then(snapshot => {
            snapshot.forEach( snapChild =>{
                database.push({
                    id: snapChild.id,
                    ...snapChild.data()
                })                
            })

            const { uid } = getState().auth;

            const datum = database.map(async(item)=>{
                
                if(item.viewed.includes(uid)){
                    item.viewed.splice(item.viewed.indexOf(uid), 1);
                    db.collection('animales').doc(item.id).update({ viewed: item.viewed });
                }
                return item.viewed.includes(uid) ? item : undefined;
            });

            setTimeout(() => {

                window.location.replace('');
                
            }, 2000);

            

        })

    }
}

export const thumbingUp = ( type ) =>{
    return (dispatch, getState)=>{
        if(getState().auth.movementConfig.actualCard !== undefined){

            const { id: cardId} = getState().auth.movementConfig.actualCard;
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

    }
}

export const erasePet = ( id, option ) =>{
    return (dispatch, getState)=>{

        if(option === "pets"){

            db.collection('animales').doc(id).delete()
            .then(()=> Swal.fire('Borrado!', 'Tu publicación ha sido borrada!','success'))
            .catch( e => Swal.fire('Error!', `${e}!`,'error'));

        } else if(option === "likes" || option === "hearts"){

            db.collection('animales').get().then(snapshot => {
                snapshot.forEach( snapChild =>{
                    database.push({
                        id: snapChild.id,
                        ...snapChild.data()
                    })                
                })
    
                const { uid } = getState().auth;
    
                const datum = database.map(async(item)=>{
                    
                    if(item[option].includes(uid)){
                        item[option].splice(item[option].indexOf(uid), 1);
                        if(option === "likes"){
                            db.collection('animales').doc(item.id).update({ likes: item.likes });
                        } else {
                            db.collection('animales').doc(item.id).update({ hearts: item.hearts });
                        }
                        
                    }
                    return item[option].includes(uid) ? item : undefined;
                });      
    
            })
        }

        const { movementConfig } = getState().auth;

            const database=[];

            db.collection('animales').get().then(snapshot => {
                snapshot.forEach( snapChild =>{
                    database.push({
                        id: snapChild.id,
                        ...snapChild.data()
                    })                
                })        

                dispatch( movementSettings({
                    ...movementConfig,
                    fullData: database,
                }));
            })

    }
}

export const rechargeDatabase = ( ) =>{
    return (dispatch, getState)=>{        

        const { movementConfig } = getState().auth;

            const database=[];

            db.collection('animales').get().then(snapshot => {
                snapshot.forEach( snapChild =>{
                    database.push({
                        id: snapChild.id,
                        ...snapChild.data()
                    })                
                })        

                dispatch( movementSettings({
                    ...movementConfig,
                    fullData: database,
                }));
            })

    }
}



