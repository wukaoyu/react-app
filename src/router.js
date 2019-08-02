import React from 'react'
import { HashRouter, Switch, Route } from 'react-router-dom'
import App from './App'
import Admin from './admin'
import Login from './pages/Login/login'

export default class Router extends React.Component {
    render() {
        return (
            <HashRouter>
                <App>
                    <Route path='/admin' component={Admin}></Route>
                    <Route path='/login' component={Login}></Route>
                </App>
            </HashRouter>
        )
    }
}