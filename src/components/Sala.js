import Galery from './Galery'

const Sala = (props)=>{
    
    return(
        <div className="container align-items-center d-md-flex justify-content-evently h-100">
            <div>
                <div className="display-3 text-light animate__animated animate__backInLeft">Cartelera</div>
                <Galery className="card-group"></Galery> 
            </div>
            </div>
            )
    
}

export default Sala