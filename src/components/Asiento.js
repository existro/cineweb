
import React, {useState,useEffect}from 'react'
const Asiento = (props) => {
    const [selected,setSelected] =  useState(false)


    return (
        <div onClick={()=>{setSelected(!selected)}} className={selected? `text-light asiento selected`: `text-light asiento`}>
            <a>{props.fila}{props.numero}</a>
        </div>
    )
}
export default Asiento