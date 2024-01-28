import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ReactPaginate from 'react-paginate';

const Filmat = () => {
  const [movies, setMovies] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [pageCount, setPageCount] = useState(0);

  useEffect(() => {
    const fetchData = async (pageNum) => {
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/discover/movie?api_key=3e52e2f5350ae60de5e2fc58e818d2a0&page=${pageNum + 1}`
        );
        setMovies(response.data.results);
        setPageCount(response.data.total_pages);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData(currentPage);
  }, [currentPage]);

  const handlePageClick = (data) => {
    setCurrentPage(data.selected);
  };

  return (
    <div>
      <h2 className='mt-3'>Filmat</h2>
      <div className="row">
        {movies.map(m => (
          
          <div className="col-3">
            <div key={m.id} className="card mb-4" style={{height: "280px"}}>
              <img className="card-img-top" src={m.backdrop_path === null ? 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Image_not_available.png/800px-Image_not_available.png' : `https://image.tmdb.org/t/p/w185/${m.backdrop_path}`} alt={m.title}/>
              <div className="card-body">
                <h5 class="card-title">{m.title}</h5>
                <p class="card-text">
                  <i class="bi bi-calendar-check"></i> {m.release_date}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <ReactPaginate
        pageCount={pageCount}
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        marginPagesDisplayed={2}
        containerClassName={'pagination'}
        activeClassName={'active'}
      />
    </div>
  );
};

export default Filmat;
