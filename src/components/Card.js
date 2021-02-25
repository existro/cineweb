import React, {useState,useEffect}from 'react'

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
            <div className="card" style={{width: 250 }}>
                <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} style={{height: 400 }} className="card-img-top" alt=""></img>
                <div className="card-body">
                    <h5 className="card-title">{movie.title}</h5>
                    <p className="card-text">{movie.tagline}</p>
                </div>
                <div>
                    <a href="/detalle" className="btn btn-primary">{props.title}</a>
                </div>
            </div>)
}
export default Card
