import React, {useState,useEffect}from 'react'
import Asiento from './Asiento'

const Fila = (props) => {
    const [asientos, setAsientos] = useState([])
    useEffect(() => {
        fetch(`${process.env.REACT_APP_URL_API}asiento?idsala=${props.sala}&fila=${props.fila}`)
        .then((dataasie)=>dataasie.json())
        .then((dataasie) =>{
            setAsientos(dataasie)
            console.log(dataasie)
        })

    },[])

    return (
        <div className="d-flex flex-row justify-content-center fila">
       {asientos.map((asiento)=>{
           return(
              <Asiento key={asiento._id} fila={asiento.fila} numero={asiento.numero}></Asiento>
           )
        })
        }
    </div>
    )
}

export default Fila