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
            <Route exact path="/development" component={Development}/>
            <Route exact path="/works" component={Works}/>
            <Route exact path="/history" component={History}/>
            <Route exact path="/geography" component={Geography}/>
            <Route exact path="/contacts" component={Contacts}/>
            <Route
                path="*"
                render={({ location }) => {
                    return (
                        <Redirect
                            to={{
                                pathname: '/',
                                from: location,
                            }}
                        />
                    )
                }}
            />
        </Switch>
    )
}