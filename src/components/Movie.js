import React, {useState,useEffect}from 'react'
import {Link} from 'react-router-dom'

const Movie = ({match})=>{
    const [movie, setMovie ] = useState([])
    useEffect(() =>{
            fetch(`${process.env.REACT_APP_TMDB}${match.params.id}?api_key=${process.env.REACT_APP_API_KEY}&language=es`)
            .then((datamovie)=>datamovie.json())
            .then((datamovie)=>{
                setMovie(datamovie);
            })
    },[])

    return(
        <div className="container align-items-center d-md-flex justify-content-evently h-100 titulo">
            <img src={`${process.env.REACT_APP_IMG_TMDB}${movie.backdrop_path}`} className="animate__animated animate__backInLeft img-fluid border" alt="..."></img>
            <div className="text-light ">
                <div className="display-3">{movie.title}</div>
                <p>{movie.overview}</p>
            </div>
            <div>
            <Link to={`/movies`} className="btn btn-block btn-outline-info rounded-0" tooltip="Atrás"> {'<'} </Link>
            </div>
            </div>
            )
    
}

export default Movie