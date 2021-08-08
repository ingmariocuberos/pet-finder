import { types } from "../types/types";

const initialState = {
    currentCard: "",
    heartUp: false
}

export const appReducer = ( state = initialState , action) =>{

    switch (action.type) {
            
        case types.refCard:
            return {
                ...state,
                currentCard: action.payload
            };

        case types.thumbingUp:
            return {
                ...state
            };

        case types.heartUp:
            return {
                ...state,
                heartVar: action.payload
            };

        case types.modalStatus:
            return {
                ...state,
                modal: action.payload
            };
    
        default:
            return state;
    }
}