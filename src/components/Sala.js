import React, {useState,useEffect}from 'react'
import Fila from './Fila'
import {Link} from 'react-router-dom'
import DatePicker from 'react-datepicker' 
import "react-datepicker/dist/react-datepicker.css";


const Sala = ({match})=>{
    const [sala,setSala] = useState([])
    const [filas, setFilas] = useState([])
    const [funcion, setfuncion] = useState([])
    const [func,setfunc] =useState()
    const [precio,setprecio] =useState(0)
    const [fecha, setFecha] = useState(new Date)
    const [asientos,setasientos] = useState([])
    const [movie,setmovie] = useState([])


    useEffect(() =>{

        fetch(`${process.env.REACT_APP_URL_API}funcion?idsala=${match.params.id}`)
        .then((datafunc)=>datafunc.json())
        .then((datafunc)=>{
            setfuncion(datafunc)
        })

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
            setmovie(datamovie);
        })


        })  

    },[func, fecha])



const handleSelected = (_idAsiento,select,val,_fila,_numero)=>{

    asientos.push({"idfuncion": func,"idasiento": _idAsiento,"fecha": fecha.toLocaleDateString(),"fila":_fila, "numero":_numero, "precio":precio})
    select(!val)
    setasientos(asientos)
}

const handlersetfunc=(_funcion,_precio)=>{
    setprecio(_precio);
    setfunc(_funcion);
}

    return(
        <div key={sala._id}  className="container align-items-center d-flex justify-content-center">
            <div>
                <div className="display-4 text-light titulo">{sala.nombre}</div>
                
                <div className="d-flex flex-row justify-content-center fila flex-wrap">
                <div className="p-0">
                    
                        <img src={`${process.env.REACT_APP_IMGSM_TMDB}${movie.poster_path}`} className="img-fluid border imgside" alt="..."></img>
                    
                    <div className="text-light">
                        {movie.title}
                    </div>
                </div>
                <div className="p-1">
                <div className="text-light pantalla">Pantalla</div>
                {func? <div></div>:<div class="d-flex align-items-center text-light">
  <strong>Seleccione una funcion...</strong>
  <div class="spinner-border ms-auto" role="status" aria-hidden="true"></div>
</div>} 
                   {filas.map((val)=>{
                       if(func)
                       {
                        return(
                            
                                <Fila  handleSelected={handleSelected}  key={val} fila={val} sala={sala._id} fecha={fecha.toLocaleDateString()} funcion={func} className="p-2"></Fila>
                           
                        )
                        }
                        return (<div></div>)
                       
                    })
                    } 
                    
                    
                </div>
                <div className="p-0 b-2">
                
                <div className="text-light border">
                    <div className="h5 border-bottom " >Funciones</div>
                    <DatePicker selected={fecha} onChange={date => setFecha(date) } className="form-control"/>
                    {
                        funcion.map((e)=>{
                                
                            return(
                                    <div value={e._id} id={e._id} onClick={(ev)=>{handlersetfunc(e._id,e.precio)}} className={func===e._id? 'selected':''}>{new Date(e.inicio).toLocaleTimeString() }</div>
                            )
                                
                        }) 
                    }
                   <div>
                    <Link to={{pathname:`/pedido`,asientos:asientos}} className="btn  btn-outline-info rounded-0 m-2">Siguiente</Link>
                    <Link to={`/movies`} className="btn  btn-outline-light rounded-0 m-2" >Cancelar</Link>
                    </div>     
                    
                    
                        
                    </div>
                </div>
                </div>
            </div>
            </div>
    )
}

export default Sala