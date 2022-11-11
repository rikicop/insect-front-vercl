import React, { useEffect, useState } from 'react'
import { Body } from './CIStyles'
import {useForm, SubmitHandler} from 'react-hook-form'
import {FaUpload} from 'react-icons/fa'
import Link from 'next/link'

interface IFormInput{
    name: string;
    coords: string;
    image : string | any;

}
const FormInsecto = () => {
    const [location, setLocation] = useState({latitude: 0, longitude: 0})
    const [isSubmit, setIsSubmit] = useState(false)
   
    useEffect(()=> {
    navigator.geolocation.getCurrentPosition(function(position) {
        console.log("Latitude is :", position.coords.latitude);
        console.log("Longitude is :", position.coords.longitude);
        setLocation({latitude: position.coords.latitude, longitude: position.coords.longitude})
    });

    }, [])
  
    const {register, handleSubmit, formState:{errors, isSubmitting}} = useForm<IFormInput>()
    const onSubmit: SubmitHandler<IFormInput> = async(data) => { 
       
       const formData = new FormData()
       formData.append('name', data.name)
       formData.append('coords', String(location.latitude) + " " + String(location.longitude))
       formData.append('image', data.image[0]);
        await fetch('https://insectos-api-vercel.vercel.app/insect',{
        method: 'POST',
        body: formData,
       }) .then((response) => response.json())
            .then((result) => {
                console.log('Success:', result);
                setIsSubmit(true)

            })
            .catch((error) => {
                console.error('Error:', error);
                setIsSubmit(false)
            });
            //clear inputs
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
                        {location.latitude !== 0 && location.longitude !== 0 ? 
                            <input 
                                {...register("coords",{required:false} )} 
                                type="text" placeholder='Coordenadas' 
                                value={`${location.latitude} ${location.longitude}`}
                                
                            /> : 
                            <input 
                                {...register("coords",{required:false} )} 
                                type="text" placeholder='Coordenadas'
                            />
                        }
                        
                    </div>
                    <div className="input-box-file">
                        <span className="details">Foto</span> 
                         <label htmlFor="file-upload" className="custom-file-upload" style={{display:"inline-flex"}}>
                            <FaUpload/> Subir Imagen 
                         </label>
                         <div style={{ marginTop:"-25px" , color: "black"}}>
                            <input id="file-upload" type="file" {...register("image", {required:true})} />
                         </div>                 
                    </div>
                    {isSubmit ?  <div className="input-box" style={{width:"120px", marginRight: "15%"}}>    
                        <div className='link' style={{  border:"solid 1px" , borderRadius:"10px"}} >
                            <Link href="/"> 
                                <a>Ver Insectos</a>
                            </Link>
                        </div>
                    </div> : null}  
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
            {isSubmitting && <div><h4 style={{color:'green'}}>Enviando...</h4></div>}
            {isSubmit ? <div className='success'>Muestra Registrada Correctamente</div> : null}
        </div>
    </Body>
  )
}

export default FormInsecto