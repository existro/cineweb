import React, { useState, useEffect } from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { Link } from 'react-router-dom';

const Home = () => {
    const [movies, setMovies] = useState([])
    console.log(`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_API_KEY}&language=es`)

    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/movie/now_playing?api_key=${process.env.REACT_APP_API_KEY}&language=es`)
            .then((datamov) => datamov.json())
            .then((datamov) => {
                setMovies(datamov.results);
                console.log(datamov.results)
            })
    }, [])


    return (
        <div className="container-md align-items-center d-md-flex justify-content-evently flex-column">
            <div>
                <div className="display-3 text-light">Home</div>
            </div>
            <div className="container-sm">
                <Carousel className="carrousel">
                    {movies.map((movi) => {
                        return (
                            <div>
                                
                                <Link className="text-light h4" to={`./movie/${movi.id}`}>{movi.title}</Link>
                                
                                <img src={`${process.env.REACT_APP_IMG_TMDB}${movi.backdrop_path}`}/>
                                <div>{movi.title}</div>
                            </div>
                        )
                    })}
                </Carousel>

            </div>

            <Link className="btn btn-outline-info rounded-0" to={`./Movies`}>Cartelera</Link>


        </div>
    )

}

export default Home