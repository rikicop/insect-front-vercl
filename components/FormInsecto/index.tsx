import React, { useState } from 'react'
import { Body } from './CIStyles'
import {useForm, SubmitHandler} from 'react-hook-form'
import { Muestra } from '../../typings'
import {FaUpload} from 'react-icons/fa'

interface IFormInput{
    name: string;
    image : string | any;

}

interface Props{
    muestra: Muestra;
}

const FormInsecto = () => {
    /* const [selectedFile, setSelectedFile] = useState();
    const [isSelected, setIsSelected] = useState(false);
    const changeHandler = (event:any) => {
        setSelectedFile(event.target.files[0]);
        setIsSelected(true);
    }; */
    const {register, handleSubmit, formState:{errors}} = useForm<IFormInput>()
    /* Supuestamente el async/await no es necesario si uso then */
    /* Verifica cuando termines */
    const onSubmit: SubmitHandler<IFormInput> = async(data) => { 
       
       await fetch('https://insectos-api-vercel.vercel.app/insect',{
        method: 'POST',
        body: JSON.stringify(data),
       }).then(() => { console.log(data) })
       .catch((err) => { console.log(err) })
     }
  return (
    <Body>
        <div className='container'>
            <div className='title'>Registro de Muestra</div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="user-details">

                {/*     <input {...register("_id")}
                        type="hidden"
                        name="_id"
                       
                    /> */}
                    <div className="input-box">
                        <span className="details">Nombre</span>
                        <input {...register("name",{required:true} )} type="text" placeholder='Nombre'/>
                    </div>
                    <div className="input-box-file">
                        <span className="details">Imagen</span> 
                        <label htmlFor="file-upload" className="custom-file-upload" >
                          <FaUpload /> Subir Imagen
                        </label>
                        <input 
                            {...register("image",{required:true} )} 
                            id="file-upload" 
                            type="file" 
                            name="image"  
                            style={{display:"none" }}
                        />
                        {/* <input 
                            {...register("image",{required:true} )} 
                            type="text" 
                            placeholder='Imagen' 
                            required
                        /> */}
                    </div>
                   {/*  <div className="input-box">
                        <span className="details">Coordenadas</span>
                        <input type="text" placeholder='Coordenadas' required/>
                    </div>           */}   
                </div>
                <div className="button">
                    <input type="submit" name="" value="Register" />
                </div>
                <div>
                    {errors.name && (
                    <span>El Campo Nombre es requerido</span>
                    )}
                    {errors.image && (
                    <span>
                        El Campo Imagen es Requerido
                    </span>
                    )}
                </div>
            </form>
        </div>
    </Body>
  )
}

export default FormInsecto