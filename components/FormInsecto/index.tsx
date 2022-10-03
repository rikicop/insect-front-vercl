import React, { useState } from 'react'
import { Body } from './CIStyles'
import {useForm, SubmitHandler} from 'react-hook-form'
import { Muestra } from '../../typings'
import {FaUpload} from 'react-icons/fa'

interface IFormInput{
    name: string;
    coords: string;
    image : string | any;

}

/* interface Props{
    muestra: Muestra;
} */

const FormInsecto = () => {
   /*  const [v, setV] = useState< any | undefined  >([])
    let imagen = Array.from(v).map((file:any) => file.name )
    if( imagen.length > 0){
        console.log("Imagen: ", imagen)
    }   */
    

 
    const {register, handleSubmit, formState:{errors}} = useForm<IFormInput>()
    /* Supuestamente el async/await no es necesario si uso then */
    /* Verifica cuando termines */
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
                console.log('Success:', result);
            })
            .catch((error) => {
                console.error('Error:', error);
            });
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
                    <div className="input-box">
                        <span className="details">Coordenadas</span>
                        <input {...register("coords",{required:true} )} type="text" placeholder='Coordenadas'/>
                    </div>
                    <div className="input-box-file">
                        <span className="details">Imagen</span> 
                         <label htmlFor="file-upload" className="custom-file-upload" style={{display:"inline-flex"}}>
                            <FaUpload/> Subir Imagen 
                             {/* <h4 style={{ color: "darkturquoise", fontWeight: 'bold' }}>{imagen[0]?.toUpperCase()}</h4>  */}
                         </label>
                         <div style={{ marginTop:"-25px" , color: "black"}}>
                            {/* 25/9/22 Puedes colocar color en white para que no se vea la letra */}
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
        </div>
    </Body>
  )
}

export default FormInsecto