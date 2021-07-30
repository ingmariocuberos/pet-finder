import React from 'react'

export const Upload = () => {
    return (
        <form className="upload__container">
            <h2 className="upload__publica">Publica!</h2>
            <label htmlFor="">Nombre de la Mascota</label>
            <input 
                type="text"
                />
            <p>
                Sexo:<br/>

                <label><input type="radio" name="empleoactual" value="tiempocompleto" /> Macho</label>

                <label><input type="radio" name="empleoactual" value="mediodia" /> Hembra</label>
            </p>
            <label htmlFor="">Edad</label>
            <div>                
                <input 
                    type="text"
                    />
                <select name="select">
                    <option defaultValue="year"
                    >Años</option>
                    <option value="month" >Meses</option>
                </select>                
            </div>
            <div>
                <label><input type="checkbox" id="cbox1" value="first_checkbox"/> Vacunado/a</label>

                <label><input type="checkbox" id="cbox1" value="first_checkbox" /> Esterilizado/a</label>
            </div>
            
            <label htmlFor="photo">Sube una foto</label>
            <input id="photo" type="file"/>
            

        </form>
    )
}
