
import React, {useState,useEffect}from 'react'

const Asiento = (props) => {
    
    const [selected,setSelected] =  useState(props.sele)
    const select = props.asientoSelected;
    const cambiar = ()=>{if(!props.reserv)
        {
         select(props.id, setSelected, selected,props.fila,props.numero)
        }
    }
    return (
        <div onClick={cambiar} className={props.reserv? 'text-light asiento reserv': selected? 'text-light asiento selected': 'text-light asiento'}>
            <a>{props.fila}{props.numero}</a>
        </div>
    )
}
export default Asiento