import React from 'react'
import { Muestra } from '../../typings'

interface Props {
  posts: [Muestra]
}

export default function Insects( {posts}: Props ) {
  console.log(posts)
    return (
        <div>
            Insects
        </div>
    )
}

export async function getServerSideProps () {
    const res = await fetch('https://insectos-api-vercel.vercel.app/insect')
    const posts = await res.json()
    if(!posts){
      return {
        notFound: true,
      }
    }
    return {
        props: {
          posts,
        }
    }
}
 

 

