
import { useEffect, useState } from "react";
import Seo from "../components/Seo";
import styles from "../styles/Home.module.css";



const API_KEY = "09cd6d519eaa550f9712a7241ec0b2b4";


export default function Home() {
  const [movies, setMovies] = useState();

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`)
    .then((res) => {
      return res.json();
    })
    .then ((data) => {
      const { results } = data;
      // const results = data.results;
      console.log(results);
      setMovies(results); 
    })
  }, [])

  return (
    <>
      <Seo title="Home" />
      <div>Hello</div>
      {!movies && <h4>Loading...</h4>}
      {movies?.map(movie => (
        <div key={movie.id}>
          <img src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`} alt={movie.title} />
        </div>
      ))}
    </>
  );
}
