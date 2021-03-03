import React, {useState,useEffect}from 'react'
import Fila from './Fila'
import {Link} from 'react-router-dom'


const Sala = ({match})=>{
    const [sala,setSala] = useState([])
    const [filas, setFilas] = useState([])
    const [movie, setMovie] = useState([])
    const [funcion, setfuncion] = useState([])

    useEffect(() =>{
        fetch(`${process.env.REACT_APP_URL_API}asiento?idsala=${match.params.id}`)
        .then((dataasien)=>dataasien.json())
        .then((dataasien)=>{
            let fil =  dataasien.map((e)=> {return e.fila})
            fil = fil.filter((val,ind)=>{
                return fil.indexOf(val)===ind
            })
            setFilas(fil)
             
        })
        fetch(`${process.env.REACT_APP_URL_API}sala/${match.params.id}`)
        .then((datasala)=>datasala.json())
        .then((datasala)=>{
            setSala(datasala);
            fetch(`${process.env.REACT_APP_TMDB}${datasala.idmovie}?api_key=${process.env.REACT_APP_API_KEY}&language=es`)
            .then((datamovie)=>datamovie.json())
            .then((datamovie)=>{
                setMovie(datamovie);
            })
        })  
        fetch(`${process.env.REACT_APP_URL_API}funcion?idsala=${match.params.id}`)
        .then((datafunc)=>datafunc.json())
        .then((datafunc)=>{
            setfuncion(datafunc)
            console.log(datafunc);
        })



    },[])



    return(
        <div key={sala._id}  className="container align-items-center d-flex justify-content-center">
            <div>
                <div className="display-4 text-light titulo">{sala.nombre}</div>
                
                <div className="d-flex flex-row justify-content-around fila flex-wrap">
                <div className="pr-4">
                    
                        <img src={`${process.env.REACT_APP_IMGSM_TMDB}${movie.poster_path}`} className="img-fluid border imgside" alt="..."></img>
                    
                    <div className="text-light">
                        {movie.title}
                    </div>
                </div>
                <div className="p-2">
                <div className="text-light pantalla">Pantalla</div>
                   {filas.map((val)=>{
                        return(
                            
                                <Fila key={val} fila={val} sala={sala._id} className="p-2"></Fila>
                           
                        )
                    })
                    } 
                    <div>
                        <select class=" m-2">
                            {funcion.map((e)=>{
                                return(
                                        <option id={e._id}>{new Date(e.inicio).toLocaleTimeString()}</option>
                                )
                            })
                            
                            }
                            </select>
                    </div>
                    <div>
                    <button className="btn  btn-outline-info rounded-0 m-2" >Continuar</button>
                    <Link to={`/movies`} className="btn  btn-outline-light rounded-0 m-2" >Cancelar</Link>
                    </div>
                </div>
                </div>
            </div>
            </div>
    )
}

export default Sala