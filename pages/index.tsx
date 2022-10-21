import Card from '../components/Card'
import { CardsWrapper } from '../components/Card/CardStyles'
import { Muestra } from '../typings'
import CsvDownload from 'react-json-to-csv'

interface Props {
  posts: [Muestra]
}

const Home = ({posts}: Props) => {
  console.log(posts)
  return (
    <>
    <CsvDownload data={posts} filename="muestra.csv" />
    <CardsWrapper>
    {posts.map((post,key) => (
      <Card {...post} key={key}/>
      ))} 
    </CardsWrapper>
    </>
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
        },
    }
}