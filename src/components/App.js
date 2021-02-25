import React from 'react'
import {BrowserRouter, Route} from 'react-router-dom'
import Cartelera from '../pages/Cartelera'

const App = ()=>{
    return (
        <BrowserRouter>
            <Route path="/" component={Cartelera}></Route>
        </BrowserRouter>
    )
}

export default App