import Image from 'next/image'
import React from 'react'
import { CardContainer, CardsWrapper } from './CardStyles'
import { Muestra } from '../../typings'
import Link from 'next/link'




const Card = ( data:Muestra ) => {
  return (
   
      <CardContainer>
        <div className='card_body'>
          <div className='card_img'>
            <Image
              src={data.profile_img} 
              layout='fill'
              placeholder='blur'
              blurDataURL="../../assets/loading-img.png"
              alt="grasshopper" 
              objectFit='cover'
            />  
          </div>
          <h2 className="card_title">{data.name}</h2>
          <p className="card_description">{data.coords}</p> 
          <Link href={`https://www.google.com/maps/place/${data.coords}`}>
            <a className="card_button">Ver en el Mapa</a>
          </Link>
        </div>
      </CardContainer>
    
  )
}

export default Card