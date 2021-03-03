import React from 'react'
import {BrowserRouter, Route,Switch} from 'react-router-dom'
import Movies from './Movies'
import Movie from './Movie'
import Home from '../components/Home'
import Sala from '../components/Sala'
import '../styles/App.css'

const App = ()=>{
    return (
        <BrowserRouter basename="/cineilu">
            <div className="App container-fluid">
                <Switch>
                    <Route path="/" exact component={Home}></Route>
                    <Route path="/movies" exact component={Movies}></Route>
                    <Route path="/movie/:id" component={Movie}></Route>
                    <Route path="/sala/:id" component={Sala}></Route>
                </Switch>
            </div>
        </BrowserRouter>
    )
}

export default App