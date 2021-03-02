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
    <div className="container ">
      <div className="row">
      {
        sala.map((element)=>{
                return(
                  <div className="col-md-3">
                    <Card key={element._id}
                    title={element.nombre}
                    idmovie = {element.idmovie}
                    ></Card>
                    </div>
                )
            })
      }
      </div>
    </div>
  )
}
export default Galery
