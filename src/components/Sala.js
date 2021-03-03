import React, {useState,useEffect}from 'react'
import Fila from './Fila'


const Sala = ({match})=>{
    const [sala,setSala] = useState([])
    const [filas, setFilas] = useState([])
    

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
        })  



    },[])



    return(
        <div key={sala._id}  className="container align-items-center d-flex justify-content-center h-100">
            <div>
                <div className="display-4 text-light">{sala.nombre}</div>
                <div className="text-light pantalla">Pantalla</div>
                <div >
                   {filas.map((val)=>{
                        return(
                            
                                <Fila key={val} fila={val} sala={sala._id} className="p-2"></Fila>
                           
                        )
                    })
                    } 
                </div>
            </div>
            </div>
    )
}

export default Sala