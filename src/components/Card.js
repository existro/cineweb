import React, {useState,useEffect}from 'react'
import '../styles/Card.css'

const Card = (props) => {
    const [movie, setMovie ] = useState([])
    useEffect(() =>{
            fetch(`https://api.themoviedb.org/3/movie/${props.idmovie}?api_key=d1a6b16ec2fb8265fede8d7bd34bbcb9&language=es`)
            .then((datamovie)=>datamovie.json())
            .then((datamovie)=>{
                setMovie(datamovie);
                console.log(datamovie);
            })
    },[])
    return (
            <div className="text-center card bg-dark animate__animated animate__backInLeft">
                <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} className="card-img-top"></img>
                <div className="card-body text-light">
                    <h6 className="card-title">{movie.title}</h6>
                    <p className="card-text text-secondary h-7">{movie.tagline ? movie.tagline: movie.title}</p>
                </div>
                <div>
                    <a href="/detalle" className="btn btn-block btn-outline-info rounded-0">{props.title}</a>
                </div>
            </div>)
}
export default Card
