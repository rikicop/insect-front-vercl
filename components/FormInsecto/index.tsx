import React, { useEffect, useState } from 'react'
import { Body } from './CIStyles'
import {useForm, SubmitHandler} from 'react-hook-form'
//import { Muestra } from '../../typings'
import {FaUpload} from 'react-icons/fa'

interface IFormInput{
    name: string;
    coords: string;
    image : string | any;

}

const FormInsecto = () => {
    const [lat, setLat] = React.useState(0);
    const [lon, setLon] = React.useState(0);
    const [submited, setSubmited] = React.useState(false);
    useEffect(() => {
    navigator.geolocation.getCurrentPosition(function(position) {
            setLat(position.coords.latitude);
            setLon(position.coords.longitude);
          });
    }, []); 
    
    const {register, handleSubmit, formState:{errors}} = useForm<IFormInput>()
 
    const onSubmit: SubmitHandler<IFormInput> = async(data) => { 
       
       const formData = new FormData()
       formData.append('name', data.name)
       formData.append('coords', data.coords)
       formData.append('image', data.image[0]);
        await fetch('https://insectos-api-vercel.vercel.app/insect',{
        method: 'POST',
        body: formData,
       }) .then((response) => response.json())
            .then((result) => {
                console.log('Exitoso:', result);
                setSubmited(true);
            })
            .catch((error) => {
                console.error('Error:', error);
                setSubmited(false);
            });
     }
  
  return (
    <Body>
        <div className='container'>
            <div className='title'>Registro de Muestra</div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="user-details">

                    <div className="input-box">
                        <span className="details">Nombre</span>
                        <input {...register("name",{required:true} )} type="text" placeholder='Nombre'/>
                    </div>
                    <div className="input-box">
                        <span className="details">Coordenadas</span>
                        <input 
                            {...register("coords",{required:true} )} 
                            type="text" 
                            style={{ fontSize: '11px', fontWeight: 'bold' }}
                            value={` ${lat}  ${lon}`}
                        />
                    </div>
                    <div className="input-box-file">
                        <span className="details">Foto</span> 
                         <label htmlFor="file-upload" className="custom-file-upload" style={{display:"inline-flex"}}>
                            <FaUpload/> Subir Imagen 
                         </label>
                         <div style={{ marginTop:"-25px" , color: "black"}}>
                            <input id="file-upload" type="file" {...register("image", {required:true})}  /* onChange={(e:any) => setV(e.target.files)} */ />
                         </div>
                            
                            
                    </div>
                </div>
                <div className="button">
                    <input type="submit" name="" value="Register" />
                </div>
                <div>
                    {errors.name && (
                    <span>El Campo Nombre es requerido</span>
                    )}
                    {errors.coords && (
                    <span>El Campo Coordenadas es requerido</span>
                    )}
                    {errors.image && (
                    <span>
                        El Campo Imagen es Requerido
                    </span>
                    )}
                </div>
            </form>
            {submited ? (
                <div>
                    <h1>Registro Exitoso</h1>
                </div>
            ) : (
                <div>
                    <h1>Registro Fallido</h1>
                </div>
            )}
        </div>
    </Body>
  )
}

export default FormInsecto