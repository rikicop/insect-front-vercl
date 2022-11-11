import Card from '../components/Card'
import { CardsWrapper } from '../components/Card/CardStyles'
import { Muestra } from '../typings'
import CsvDownload from 'react-json-to-csv'
import { useRouter } from 'next/router'
import styled from 'styled-components'


interface Props {
  posts: [Muestra]
}

// json object
/* const data = [
  { name: 'John', age: 30, city: 'New York' },
  { name: 'Peter', age: 40, city: 'Boston' },
  { name: 'Clark', age: 25, city: 'Los Angeles' },
] */

const FormLinkButton = styled.div`
  display: flex;
  justify-content: center;
  button {
    background-color: #29c94e;
    border: 1px solid #000;
    border-radius: 5px;
    padding: 10px 20px;
    font-size: 1.2rem;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s ease-in-out;
    &:hover {
      background-color: #000;
      color: #fff;
    }
  }
`

const Home = ({posts}: Props) => {
  const router = useRouter()
  //console.log(posts)
  return (
    <>
    <CsvDownload 
      data={posts}
      filename="muestra.csv"  
      style={{
          margin: '1rem', 
          background: '#29c94e', 
          padding: '1rem', 
          borderRadius: '5px', 
          fontSize: '1.5rem', 
          color: '#000', 
          border: '1px solid #000',
          textDecoration: 'none'
      }}
    >
      Descargar CSV
    </CsvDownload>
    <FormLinkButton>
      <button onClick={() => router.push('/crearinsecto')}>Crear Insecto</button>
    </FormLinkButton>
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