import React from 'react'
import { HashRouter, Switch, Route } from 'react-router-dom'
import App from './App'
import Admin from './admin'
import Login from './pages/Login/login'
import Button from './pages/ui/button'
import Modals from './pages/ui/modals'
import Loadings from './pages/ui/loadings'
import Home from './pages/Home'
import NoMatch from './pages/noMatch'
export default class Router extends React.Component {
    render() {
        return (
            <HashRouter>
                <App>
                    <Switch>
                        <Route path='/admin' render={() => 
                            <Admin>
                                <Switch>
                                    <Route path='/admin/home' component={Home}></Route>
                                    <Route path='/admin/ui/buttons' component={Button}></Route>
                                    <Route path='/admin/ui/modals' component={Modals}></Route>
                                    <Route path='/admin/ui/loadings' component={Loadings}></Route>
                                    <Route component={NoMatch}/>
                                </Switch>
                            </Admin>
                        }></Route>
                        <Route path='/login' component={Login}/>
                        <Route component={NoMatch}/>
                    </Switch>
                </App>
            </HashRouter>
        )
    }
}