import React, {useState,useEffect}from 'react'
import Galery from '../components/Galery'
import Card from '../components/Card'



const Cartelera = (props)=>{
    const [sala,setSala] = useState([])
    useEffect(() =>{
        fetch('https://cineapi.vercel.app/sala')
        .then((datasala)=>datasala.json())
        .then((datasala)=>{
            setSala(datasala);
        })
    },[])
    return(
            <div className="container-fluid">
                <div className="row justify-content-sm-center" >
                    <div className="col-auto">
                        <h1>Cine de Alexis</h1>
                    </div>
                </div>
                <div className="row">
                <Galery>
                    {
                        sala.map((element)=>{
                                return(
                                    <Card
                                    title={element.nombre}
                                    idmovie = {element.idmovie}
                                    ></Card>
                                )
                            })
                    }
                </Galery>
                </div>
            </div>
    )
    
}

export default Cartelera