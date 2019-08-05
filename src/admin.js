import React from 'react'
import { Row,Col } from 'antd'
import Headers from './components/Header'
import Footers from './components/Footer'
import NavLeft from './components/NavLeft'
import Home from './pages/Home/index.jsx'
import ScrollView from 'react-custom-scrollbars'
import { HashRouter, Route, Switch } from 'react-router-dom'

import './style/common.less'

export default class Admin extends React.Component{
    
    render() {
        return (
            <Row>
                <Col span={4} className="nav-left">
                    <NavLeft/>
                </Col>
                <Col span={20} className="cont-main">
                    <Headers/>
                    <Row className="cont-content">
                        <div className="content-scroll"> 
                            <ScrollView>
                                <Home/>
                            </ScrollView>
                        </div>
                    </Row>
                    <Footers/>
                </Col>
            </Row>
        )
    }
}