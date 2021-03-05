import Galery from './Galery'
import { Link } from 'react-router-dom';

const Movies = ()=>{
    
    return(
        <div>
        <div className="container-fluid align-items-center flex-column justify-content-center d-flex ">
            
                <div className="display-4 text-light titulo">Cartelera</div>
                <Galery className="card-group d-flex justify-content-center "></Galery> 
                
                
            </div>
            <Link className="btn btn-outline-info rounded-0" to={`./`}>Inicio</Link>
            </div>
            )
    
}

export default Movies