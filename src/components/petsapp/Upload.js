import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import v from 'validator';
import { useForm } from '../../hooks/useForm';
import { removeUploadError, setUploadError } from '../actions/error';
import { addNewUpload, startUploading } from '../actions/uploads';


export const Upload = ( { setScreenActive } ) => {

    const refUploadPhoto = useRef(null);
    const dispatch = useDispatch();

    const handleUploadPhoto = (e) =>{

        refUploadPhoto.current.click();

    }

    const [image, setImage] = useState("./assets/imgs/uploadFile.jpg")

    const handleUploadPhotoChange = async(e) =>{

        const file = e.target.files;

        if(file){

            const urlImage = await dispatch( startUploading(file) );

            setImage(urlImage);
            
        }
    }

    useEffect(() => {

        const e = {
            target:{
                type: "file",
                name: "uploadImage",
                value: image
            } 
        };
        
        handleInputChange(e);

    }, [image]);

    const initialForm = {
        petName: '',
        animal: '',
        sex: '',
        age: "",
        ageId: 'year',
        vaccinated: false,
        sterilized: false,
        location: '',
        uploadImage: image,
        telf: '',
        link: '',
        likes: [""],
        hearts: [""],
        viewed: [""]

    };
    
    const [ formValues, handleInputChange] = useForm( initialForm );

    const { petName, animal, sex, age, location, telf, link } = formValues;

    const { msgUploadError } = useSelector( state => state.app );

    const handleSubmit = (e) =>{
        e.preventDefault();

        if( valida(petName, animal, sex, age, location, telf, link) ){
            dispatch(addNewUpload( formValues ));

            setScreenActive("principal");
        }      

    }

    const valida = ( petName, animal, sex, age, location, telf, link ) =>{

        if( v.isEmpty(petName) || v.isEmpty(animal) || v.isEmpty(sex) || v.isEmpty(age) || v.isEmpty(location) || v.isEmpty(telf) || v.isEmpty(link)){
            dispatch( setUploadError( 'Falta completar campos' ) );
            return false;
        } else if( v.escape(petName).includes(";") || v.escape(location).includes(";") || v.escape(telf).includes(";") || v.escape(link).includes(";") ){
            dispatch( setUploadError( 'Campos contienen caracteres no admitidos' ) );
            return false;
        }

        dispatch( removeUploadError());
        return true;
    }



    return (
        <form 
            className="upload__container text-white"
            onSubmit={ handleSubmit }>
            <div className="flex-row-nowrap upload__container-name-animal">
                <div className="flex-col">
                    <label 
                        htmlFor="pet-name"
                        className="upload__container-name d-block mt-2">Nombre de la Mascota</label>
                    <input 
                        id="pet-name"
                        name="petName"
                        type="text"
                        className="input upload__input d-block upload__container-name t-align-c"
                        minLength="1"
                        maxLength="15"
                        autoComplete="off"
                        value={ petName }
                        placeholder="Ej: Toby, Max..."
                        onChange={ handleInputChange }
                        required
                        />
                </div>
                <div className="flex-col">
                <p className="upload__text-sex mt-2">Animal:</p> 
                    <div className="flex-row-nowrap">             
                        <div className="flex-col me-3">

                            <input 
                                type="radio"
                                className="d-block form-check-input"
                                name="animal"
                                onChange={ handleInputChange }
                                value="perro"
                                />

                            <label className="d-block"> Perro</label>

                        </div>
                        
                        <div className="flex-col">
                            <input 
                                type="radio" 
                                className="d-block form-check-input"
                                name="animal"
                                onChange={ handleInputChange } 
                                value="gato" />
                            <label className="d-block"> Gato</label>
                        </div>
                    </div>
                </div>
            </div>

            <div className="upload__container-sex-age mt-3">
                
                <div className="upload__container-sex me-3">
                    <p className="upload__text-sex">Sexo:</p> 
                    <div className="flex-row-nowrap">             
                        <div className="flex-col me-3">

                            <input 
                                type="radio"
                                className="d-block form-check-input"
                                name="sex"
                                onChange={ handleInputChange }
                                value="Macho" />

                            <label className="d-block"> Macho</label>

                        </div>
                        
                        <div className="flex-col">
                            <input 
                                type="radio" 
                                className="d-block form-check-input"
                                name="sex"
                                onChange={ handleInputChange }
                                value="Hembra" />
                            <label className="hembra"> Hembra</label>
                        </div>
                    </div>
                </div>
                <div className="upload__container-age" >
                    <label htmlFor="age-input" className="upload__text-sex d-block">Edad</label>
                    <div className="flex-row-nowrap">          
                        <input 
                            type="number"
                            id="age-input"
                            name="age"
                            value={ age }
                            placeholder="1"
                            onChange={ handleInputChange }
                            className="input upload__input me-2 t-align-c"
                            autoComplete="off"
                            required
                            />
                        <select 
                            id="select-year" 
                            name="ageId"
                            onChange={ handleInputChange }
                            className="input upload__input">
                            <option value="year" defaultValue="year"
                            >Años</option>
                            <option value="month" >Meses</option>
                        </select>                
                    </div>
                </div>
            </div>
            <div className="d-block mt-3">

                <input 
                        type="checkbox" 
                        id="vacunado"
                        name="vaccinated"
                        value="vacunado"
                        onChange={ handleInputChange }
                        className="form-check-input"/> 

                <label className="ms-2 me-4"> 
                    Vacunado/a  
                </label>

                <input 
                        type="checkbox" 
                        id="esterilizado"
                        name="sterilized"
                        value="esterilizado"
                        onChange={ handleInputChange }
                        className="form-check-input"
                        /> 
                <label className="ms-2">                    
                    Esterilizado/a
                </label>
            </div>

            <label className="m-top-3 d-block">Ubicación</label>
            <textarea 
                id="textarea-add-info" 
                className="input upload__input d-block p-2 ps-3 t-align-c"
                name="location"
                minLength="5"
                maxLength="30"
                autoComplete="off"
                value={ location }
                onChange={ handleInputChange }
                placeholder="Ej: Nueva Galicia, Santa Marta"
                required
                ></textarea>
            
            
            <input 
                id="photo" 
                type="file"
                onChange={ handleUploadPhotoChange }
                style={{display: 'none'}}
                ref={ refUploadPhoto }
                required/>

            <div className="flex-row-nowrap upload__container-photo-contact mt-2">
                <div>
                    <label htmlFor="photo" className="m-top-3 d-block">Elige una foto</label>
                    <div 
                        className="upload__image"
                        onClick={ handleUploadPhoto }>

                            <img className="upload__uploaded-image" src={ image } alt="to-upload" />
                        
                    </div>

                </div>
                
                <div className="ms-3">
                    <label 
                        htmlFor="contact-info"
                        className="d-block mt-3">Info de Contacto</label>
                    <input 
                        id="contact-telf"
                        name="telf"
                        value={ telf }
                        type="text"
                        minLength="5"
                        maxLength="15"
                        onChange={ handleInputChange }
                        className="input upload__input d-block t-align-c"
                        autoComplete="off"
                        placeholder="Ej: 315-448-6666"
                        required
                        />
                    <input 
                        id="contact-link"
                        name="link"
                        value={ link }
                        type="text"
                        minLength="5"
                        maxLength="200"
                        onChange={ handleInputChange }
                        className="input upload__input d-block t-align-c"
                        autoComplete="off"
                        placeholder="Link Facebook"
                        />
                </div>
            </div>

            <button 
                type="submit" 
                className="btn-upload d-block mt-3"
                >Publicar
            </button>

            {
                msgUploadError !== null
                &&
                <span>{ msgUploadError }</span>
            }           

        </form>
    )
}
