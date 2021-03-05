import React, {useState,useEffect}from 'react'


const Pedido = (props)=>{
    const [tickets, settickets] = useState([])
    const [rtickets,setrtickets] = useState([])
    const [total, setTotal] = useState(0)
    const [nombre, setnombre] = useState()
    const [fechav, setfechav] = useState()
    const [numero, setnumero] = useState()
    
    useEffect(() =>{
        settickets(props.location.asientos)
        if(tickets.length>0)
        {
        let tot = tickets.reduce((a,b)=>
           a.precio + b.precio
        )
        setTotal(tot);
        }
    },[])




   const handleSubmit = e =>{
       e.preventDefault();
        tickets.map((tic)=>{
            console.log(`${process.env.REACT_APP_URL_API}tickets`)
            console.log(JSON.stringify(tic))
            fetch(`${process.env.REACT_APP_URL_API}ticket`,{
                method:'POST',
                headers:{
                    'Content-Type': 'application/json'
                },
                body:JSON.stringify(tic)
            })
            .then((res)=>res.json())
            .then((res)=>{
                rtickets.push(res)
                setrtickets(rtickets)
                
            })
            .catch(err=>{alert(err.message)})
        })
        alert('¡Su pago se realizó con éxito!')
        props.history.push('./Movies')
        

    }

return (
    <div className="container align-items-center d-flex justify-content-center">
            <div>
                <div className="display-4 text-light titulo">Confirmar pedido</div>
                
                <div className="d-flex flex-row justify-content-center fila flex-wrap">
                <div className="p-0">
                    </div>
                </div>
                
                
                <div className="mb-3" >
  <div className="row g-0">
    <div className="col-md-4">
      <div className ="ccard">
          <div className="numerot">{numero? numero : "0000000000000000"}</div>
          <div className="nombret">{nombre? nombre : "nombre nombre apellido apellido"}</div>
          <div className="fechavt">{fechav? fechav : "00/00"}</div>
      </div>
    </div>
    <div className="col-md-8">
      <div className="card-body">
        <h5 className="card-title">Pago</h5>
        <input className="form-control m-2"></input>
        <input className="form-control m-2"></input>
        <div className="text-light h3">Total: Q.{total}</div>
      </div>
    </div>
  </div>
</div>


                <button type="submit" className="btn btn-info" onClick={handleSubmit}>Aceptar</button>
            </div>
    </div>
    
    
)
}



export default Pedido;