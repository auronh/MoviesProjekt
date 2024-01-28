import React, { useState, useEffect } from 'react'
import Slideshow from '../components/Slideshow';
import {slideshowImages} from "../data/slideshowImages"

function Home() {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
      fetch('https://api.themoviedb.org/3/discover/movie?api_key=3e52e2f5350ae60de5e2fc58e818d2a0')
        .then(response => response.json())
        .then(data => {
          setMovies(data.results.slice(0, 16));
        })
        .catch(error => console.error('Error fetching top movies:', error));
    }, []);

  return (
    <>
        <Slideshow slides={slideshowImages}/>
        <div className='row mt-5'>
        {
            movies && movies.map(m => <div key={m.id} className="col-3">
                <div className="card mb-4">
                <img src={`https://image.tmdb.org/t/p/w185/${m.backdrop_path}`} className="card-img-top" alt={"..."} />
                <div className="card-body">
                    <h5 className="card-title">{m.title}</h5>
                    <p className="card-text">
                        <i className="bi bi-calendar-check"></i> {m.release_date}
                        <br />
                        <i className="bi bi-star"></i> {m.vote_average}
                    </p>
                </div>
                </div>
            </div>)
        }
        </div>
    </>
    
  )
}
export default Home