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
import Rights from './Pages/rights'

export const AppRoutes = () => {
    return (
        <Switch>
            <Route exact path="/SummerPractice" component={Home}/>
            <Route exact path="/SummerPractice/development" component={Development}/>
            <Route exact path="/SummerPractice/works" component={Works}/>
            <Route exact path="/SummerPractice/history" component={History}/>
            <Route exact path="/SummerPractice/geography" component={Geography}/>
            <Route exact path="/SummerPractice/contacts" component={Contacts}/>
            <Route exact path="/SummerPractice/rights" component={Rights}/>
            <Route
                path="*"
                render={({ location }) => {
                    return (
                        <Redirect
                            to={{
                                pathname: '/SummerPractice',
                                from: location,
                            }}
                        />
                    )
                }}
            />
        </Switch>
    )
}
