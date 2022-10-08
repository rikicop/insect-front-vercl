import Card from '../components/Card'
import { CardsWrapper } from '../components/Card/CardStyles'
import { Muestra } from '../typings'

interface Props {
  posts: [Muestra]
}

const Home = ({posts}: Props) => {
  return (
    <CardsWrapper>
    {posts.map((post) => (
      <Card {...post} />
      ))} 
    </CardsWrapper>
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