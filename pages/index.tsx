import type { NextPage } from 'next'
import { Muestra } from '../typings'

interface Props {
  posts: [Muestra]
}

const Home = ({posts}: Props) => {
  return (
    <div>
      {posts.map((post) => (
        <div key={post._id}>
          <h1>{post.name}</h1>
          <p>{post.profile_img}</p>
        </div>
      ))}
    </div>
  )
}

export default Home

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