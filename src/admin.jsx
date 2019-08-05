import React from 'react'
import { Row,Col } from 'antd'
import Headers from './components/Header'
import Footers from './components/Footer'
import NavLeft from './components/NavLeft'
import ScrollView from 'react-custom-scrollbars'

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
                                {this.props.children}
                            </ScrollView>
                        </div>
                    </Row>
                    <Footers/>
                </Col>
            </Row>
        )
    }
}