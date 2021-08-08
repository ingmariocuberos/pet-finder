import Swal from 'sweetalert2';
import { fileUpload } from "../../helpers/fileUpload";
import { db } from "../../firebase/firebase-config";

export const startUploading = (file) =>{

    return async( dispatch, getState ) =>{
        // const { active: activeNote } = getState().notes;

        Swal.fire({
            title: 'Uploading...',
            text: 'Please wait...',
            allowOutsideClick: false,
            onBeforeOpen: () =>{
                Swal.showLoading();
            }
        });

        const fileUrl = await fileUpload(file);

        // activeNote.url = fileUrl;

        // dispatch( saveInFirestore( activeNote ))

        Swal.close();

        return fileUrl;
        

    }

}

export const addNewUpload = ( uploadData ) =>{
    return async(dispatch, getState) =>{
        
        const { uid, name } = getState().auth;
        
        const newName = name.split(" ")[0];
        
        const newUpload = {
            date: new Date().getTime(),
            uid: uid,
            displayName: newName,
            ...uploadData
        }

        const doc = await db.collection(`animales/`).add( newUpload );

        Swal.fire('Saved', "Publicación guardada con éxito", 'success');

        // dispatch( activeNote( doc.id, newNote ))
    }
}