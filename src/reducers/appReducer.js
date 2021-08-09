import { types } from "../types/types";

const initialState = {
    currentCard: "",
    heartUp: false,
    initialStatus: false,
    msgUploadError: null
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
        
        case types.initialStatus:
            return {
                ...state,
                initialStatus: action.payload
            };

        case types.setUploadError:
            return {
                ...state,
                msgUploadError: action.payload
            };

        case types.removeUploadError:
            return {
                ...state,
                msgUploadError: null
            };
    
        default:
            return state;
    }
}