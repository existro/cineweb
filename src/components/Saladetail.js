import React, {useState,useEffect}from 'react'
import {Link} from 'react-router-dom'

const Movie = ({match})=>{
    const [movie, setMovie ] = useState([])
    useEffect(() =>{
            fetch(`https://api.themoviedb.org/3/movie/${match.params.id}?api_key=d1a6b16ec2fb8265fede8d7bd34bbcb9&language=es`)
            .then((datamovie)=>datamovie.json())
            .then((datamovie)=>{
                setMovie(datamovie);
                console.log(datamovie);
            })
    },[])

    return(
        <div className="container align-items-center d-md-flex justify-content-evently h-100">
            <img src={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`} className="animate__animated animate__backInLeft img-fluid" alt="..."></img>
            <div className="text-light ">
                <div className="display-3">{movie.title}</div>
                <p>{movie.overview}</p>
            </div>
            <div>
            <Link to={`/sala`} className="btn btn-block btn-outline-info rounded-0" tooltip="Atrás"> {'<'} </Link>
            </div>
            </div>
            )
    
}

export default Movie