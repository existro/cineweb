import React, {useState,useEffect}from 'react'
import Card from './Card'

const Galery = (props)=>{

  const [sala,setSala] = useState([])
    useEffect(() =>{
        fetch(`${process.env.REACT_APP_URL_API}sala`)
        .then((datasala)=>datasala.json())
        .then((datasala)=>{
            setSala(datasala);
        })
    },[])
  return (
    <div className="d-flex flex-row flex-wrap justify-content-center">
      {
        sala.map((element)=>{
                return(
                    <Card key={element._id}
                    title={element.nombre}
                    idmovie = {element.idmovie}
                    idsala={element._id}
                    ></Card>
                )
            })
          }
    </div>
  )
}
export default Galery
