import React, {useState,useEffect}from 'react'
import Asiento from './Asiento'

const Fila = (props) => {
    const [asientos, setAsientos] = useState([])
    const [asientosr, setasientosr] = useState([])
    const asientoSelected = props.handleSelected
    useEffect(() => {
        
        fetch(`${process.env.REACT_APP_URL_API}asiento?idsala=${props.sala}&fila=${props.fila}`)
        .then((dataasie)=>dataasie.json())
        .then((dataasie) =>{
            setAsientos(dataasie)
        })
        fetch(`${process.env.REACT_APP_URL_API}ticket?idfuncion=${props.funcion}&fecha=${props.fecha}`)
        .then((dataasier)=>dataasier.json())
        .then((dataasier) =>{
            setasientosr(dataasier)
        })




    },[props.funcion])

    return (
        <div className="d-flex flex-row justify-content-center fila">
       {asientos.map((asiento)=>{
           let reservado = false;
           asientosr.map((asientr)=>{
                    if(asiento._id === asientr.idasiento && props.fecha === asientr.fecha){
                        reservado= true;

                    }

           })
           return(
            <div>
            <Asiento asientoSelected={asientoSelected} reserv={reservado} sele={false}  key={asiento._id} id={asiento._id} fila={asiento.fila} numero={asiento.numero}></Asiento>
            </div>
         )
        })
        }
    </div>
    )
}

export default Fila