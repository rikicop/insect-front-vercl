import Image from 'next/image'
import React from 'react'
import { CardContainer, CardsWrapper } from './CardStyles'
import { Muestra } from '../../typings'




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
        </div>
      </CardContainer>
    
  )
}

export default Card