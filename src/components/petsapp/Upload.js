import React, { useEffect, useRef, useState } from 'react';
import { useDispatch } from "react-redux";
import { useForm } from '../../hooks/useForm';
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

    // pet-finder

    const initialForm = {
        petName: '',
        animal: '',
        sex: '',
        age: 0,
        ageId: 'year',
        vaccinated: false,
        sterilized: false,
        location: '',
        uploadImage: image,
        telf: '',
        link: ''

    };
    
    const [ formValues, handleInputChange, reset ] = useForm( initialForm );

    const { petName, animal, sex, age, ageId, vaccinated, location, uploadImage, telf, link } = formValues;

    const handleSubmit = (e) =>{
        e.preventDefault();

        dispatch(addNewUpload( formValues ));

        setScreenActive("principal");

    }



    return (
        <form 
            className="upload__container text-white"
            onSubmit={ handleSubmit }>
            <div className="flex-row-nowrap upload__container-name-animal">
                <div className="flex-col">
                    <label 
                        htmlFor="pet-name"
                        className="d-block mt-2">Nombre de la Mascota</label>
                    <input 
                        id="pet-name"
                        name="petName"
                        type="text"
                        className="input upload__input d-block"
                        minLength="1"
                        maxLength="10"
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
                            type="text"
                            id="age-input"
                            name="age"
                            value={ age }
                            onChange={ handleInputChange }
                            className="input upload__input me-2"
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
                className="input upload__input d-block p-2 ps-3"
                name="location"
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
                ref={ refUploadPhoto }/>

            <div className="flex-row-nowrap mt-2">
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
                        onChange={ handleInputChange }
                        className="input upload__input d-block"
                        autoComplete="off"
                        placeholder="Ej: 315-448-6666"
                        />
                    <input 
                        id="contact-link"
                        name="link"
                        value={ link }
                        type="text"
                        onChange={ handleInputChange }
                        className="input upload__input d-block"
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

        </form>
    )
}
