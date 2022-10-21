import Card from '../components/Card'
import { CardsWrapper } from '../components/Card/CardStyles'
import { Muestra } from '../typings'
import CsvDownload from 'react-json-to-csv'

interface Props {
  posts: [Muestra]
}

// json object
/* const data = [
  { name: 'John', age: 30, city: 'New York' },
  { name: 'Peter', age: 40, city: 'Boston' },
  { name: 'Clark', age: 25, city: 'Los Angeles' },
] */

const Home = ({posts}: Props) => {
  //console.log(posts)
  return (
    <>
    <CsvDownload 
      data={posts}
      filename="muestra.csv"  
      style={{
          margin: '1rem', 
          background: '#11afe3', 
          padding: '1rem', 
          borderRadius: '5px', 
          fontSize: '1.5rem', 
          color: '#fff', 
          textDecoration: 'none'
      }}
    >
      Descargar CSV
    </CsvDownload>
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