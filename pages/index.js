import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import useSWR from 'swr';
import { useState, useEffect} from 'react';
import { Pagination } from 'react-bootstrap';
import { Accordion } from 'react-bootstrap';
import MovieDetails from '../components/MovieDetails';
import PageHeader from '../components/PageHeader';

export default function Home(props) {

  const [page, setPage] = useState(1);
  const [pageData, setPageData] = useState([]);
  const { data, error } = useSWR(`https://sore-red-hatchling-shoe.cyclic.app/api/movies?page={page}&perPage=10`);

  useEffect(() => {
    if (data) {
      setPageData(data);
    }
  }, [data]);

  function previous() {
    if(page > 1)
    setPage(page => page - 1);
  }

  function next() {
    setPage(page => page + 1);
  }
  
  return(
    <>
      <PageHeader text="Film Collection : Sorted by Date"/>
      <Accordion defaultActiveKey="0">
        {pageData.map((movie, index) => {
          return ( 
          <Accordion.Item eventKey={movie._id} key={index}>
            <Accordion.Header><strong>{movie.title}</strong>  ({movie.year}: Directed By {movie.directors.join(', ')})</Accordion.Header>
            <Accordion.Body>
              <MovieDetails movie = {movie}/>
            </Accordion.Body>
          </Accordion.Item> )
        })}
   
      </Accordion>
      
      <Pagination>
        <Pagination.Prev onClick={previous}/>
        <Pagination.Item>{page}</Pagination.Item>
        <Pagination.Next onClick={next}/>
      </Pagination>
      
    </>
  )
}
