import React from 'react'
import { Row,Col } from 'antd'
import Headers from './components/Header'
import Footers from './components/Footer'
import NavLeft from './components/NavLeft'

import './style/common.less'

export default class Admin extends React.Component{
    
    render() {
        return (
            <Row>
                <Col span={4} className="nav-left">
                    <NavLeft/>
                </Col>
                <Col span={20}>
                    <Headers/>
                    <Row>content</Row>
                    <Footers/>
                </Col>
            </Row>
        )
    }
}