import React, {useState,useEffect}from 'react'
import '../styles/Card.css'
import {Link} from 'react-router-dom'

const Card = (props) => {
    const [movie, setMovie ] = useState([])
    useEffect(() =>{
            fetch(`${process.env.REACT_APP_TMDB}${props.idmovie}?api_key=${process.env.REACT_APP_API_KEY}&language=es`)
            .then((datamovie)=>datamovie.json())
            .then((datamovie)=>{
                setMovie(datamovie);
            })
    },[])
    return (
            <div className="text-center card bg-dark animate__animated animate__backInLeft">
                <img src={`${process.env.REACT_APP_IMG_TMDB}${movie.poster_path}`} className="card-img-top img-fluid" alt="..."></img>
                <div className="card-body text-light">
                    <h6 className="card-title">{movie.title}</h6>
                    <p className="card-text text-secondary h-7">{movie.tagline ? movie.tagline: movie.title}</p>
                </div>
                <div>
                    
                    <Link to={`/sala/${movie.id}`} className="btn btn-block btn-outline-info rounded-0" >{props.title}</Link>
                </div>
            </div>)
}
export default Card
