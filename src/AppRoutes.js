import React from 'react'
import './App.css'

import 'bootstrap/dist/css/bootstrap.min.css'
import {Route, Switch, Redirect} from 'react-router-dom'
import Home from './Pages/Home'
import Development from './Pages/Development'
import Contacts from './Pages/Contacts'
import Geography from './Pages/Geography'
import History from './Pages/History'
import Works from './Pages/Works'

export const AppRoutes = () => {
    return (
        <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/development" component={Development}/>
            <Route path="/works" component={Works}/>
            <Route path="/history" component={History}/>
            <Route path="/geography" component={Geography}/>
            <Route path="/contacts" component={Contacts}/>
        </Switch>
    )
}
