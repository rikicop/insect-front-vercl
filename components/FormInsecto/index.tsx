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

const FormInsecto = (props:any) => {
    const [v, setV] = useState<undefined | any >([])
    let hello = Array.from(v).map((file:any) => file.name )
    console.log("Hello: ", hello)

    const {register, handleSubmit, formState:{errors}} = useForm<IFormInput>()
    /* Supuestamente el async/await no es necesario si uso then */
    /* Verifica cuando termines */
    const onSubmit: SubmitHandler<IFormInput> = async(data) => { 
       
       const formData = new FormData()
       formData.append('name', data.name)
       formData.append('image', data.image[0]);
        await fetch('https://insectos-api-vercel.vercel.app/insect',{
        method: 'POST',
        body: formData,
       }) .then((response) => response.json())
            .then((result) => {
                console.log('Success:', result);
            })
            .catch((error) => {
                console.error('Error:', error);
            });
     }
  return (
    <Body>
        <div className='container'>
            <div className='title'>Imserte Muestra</div>
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
                        <label htmlFor="file-upload" className="custom-file-upload">
                          <FaUpload /> Subir Imagen 
                          <p style={{color:"darkturquoise" , fontWeight: 'bold'}}>{hello[0]?.toUpperCase()}</p>
                        </label>
                        <input 
                            {...register("image",{required:true} )} 
                            id="file-upload" 
                            type="file" 
                            name="image"  
                            style={{display:"none" }}
                            onChange={(e:any)=>{setV(e.target.files)}}
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