import React from 'react'
import {BrowserRouter, Route,Switch} from 'react-router-dom'
import Sala from './Sala'
import Saladetail from './Saladetail'
import Home from '../components/Home'

import '../styles/App.css'

const App = ()=>{
    return (
        <BrowserRouter basename="/cineilu">
            <div className="App">
                <Switch>
                    <Route path="/" exact component={Home}></Route>
                    <Route path="/sala" exact component={Sala}></Route>
                    <Route path="/sala/:id" component={Saladetail}></Route>
                </Switch>
            </div>
        </BrowserRouter>
    )
}

export default App