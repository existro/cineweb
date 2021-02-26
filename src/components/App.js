import React from 'react'
import {BrowserRouter, Route} from 'react-router-dom'
import Cartelera from '../pages/Cartelera'
import '../styles/App.css'

const App = ()=>{
    return (
        <BrowserRouter>
            <div className="App">
                <Route path="/" component={Cartelera}></Route>
            </div>
        </BrowserRouter>
    )
}

export default App