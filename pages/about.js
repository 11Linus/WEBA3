import Link from 'next/link';
import { Card } from "react-bootstrap";
import MovieDetails from '../components/MovieDetails';
import PageHeader from '../components/PageHeader';

/*export async function getStaticProps() {
    const res = await fetch('https://sore-red-hatchling-shoe.cyclic.app/api/movies/573a1390f29313caabcd4135');
    const data = await res.json();
  
    return { props: { movie: data } };
  }
*/
/*
export function getStaticProps() {
    return new Promise((resolve,reject)=>{
      fetch('https://sore-red-hatchling-shoe.cyclic.app/api/movies/573a1390f29313caabcd4135').then(res=>res.json()).then(data=>{
        resolve({ props: { movie: data } })
      })
    })
  }
  */
  export async function getStaticProps() {
    const res = await fetch('https://sore-red-hatchling-shoe.cyclic.app/api/movies/573a1390f29313caabcd4135');
    const data = await res.json();
  
    return { props: { movie: data } };
  }
  

  export default function About(props) {
    return (
      <>
            <PageHeader text="About the Developer - Kin Lok Chan"/>
            <Card> 
                <Card.Body>
                    I am Kin Lok Chan, a student from Seneca College, now studying computer programming. This is the assignment 3 for WEb422.
                    <Link href="/movies/Dark City" passHref><a>Movie: Dark City</a></Link>

                </Card.Body>
                <MovieDetails movie={props.movie} />	
            </Card> 
            
      </>
    );
  }