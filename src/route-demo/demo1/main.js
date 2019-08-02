import React from 'react'
import { HashRouter, Route, Switch } from 'react-router-dom'
import home from './home'
import Page1 from './page1'
import page2 from './page2'
import page3 from './page3'
import Link from './link'
import Info from './info'
import NoMacth from './noMacth'

export default class Main extends React.Component {
    render() {
        return (
            <HashRouter>
                <Link>
                    <Switch>
                        <Route exact={true} path="/" component={home}></Route>
                        <Route path="/page1" render={() => 
                            <Page1>
                                <Route path='/page1/:id' component={Info}></Route>
                            </Page1>
                        }></Route>
                        <Route path="/page2" component={page2}></Route>
                        <Route path="/page3" component={page3}></Route>
                        <Route component={NoMacth}></Route>
                    </Switch>
                </Link>
            </HashRouter>
        )
    }
}