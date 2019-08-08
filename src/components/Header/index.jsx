import React from 'react'
import { Row,Col } from 'antd'
import './index.less'
import Util from '../../util/util'

export default class Header extends React.Component {
    constructor(props) {
        super(props);
        // 不要在这里调用 this.setState()
        this.state = { username: "随心。"};
        setInterval(() => {
            let sysTime =Util.formateDate(new Date().getTime());
            this.setState({
                time:sysTime
            })
        },1000)
    }
    render() {
        return(
            <div className="header">
                <Row>
                    <Col span={24} className="header-top">
                        <a href="###">退出</a>
                        <span className="header-welcome">欢迎，{ this.state.username }</span> 
                    </Col>
                </Row>
                <Row className="header-information">
                    <Col span={4} className="header-title">首页</Col>
                    <Col span={20} className="information-content">
                        <span>{ this.state.time }</span>
                        <span className="information-weather">晴转多云</span>
                    </Col>
                </Row>
            </div>
        );
    }
}