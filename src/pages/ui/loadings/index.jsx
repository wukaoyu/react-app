import React from 'react'
import { Card, Spin, Alert, Icon, Switch  } from 'antd'

import './index.less'

export default class loading extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            delayLoading:true
        }
    }

    toggle = () => {
        this.setState({
            delayLoading: !this.state.delayLoading
        })
    }

    render() {
        const antIcon = <Icon type="loading" style={{ fontSize: 24 }} spin />;
        const alertDemo = <Alert
                            message="Alert message title"
                            description="Further details about the context of this alert."
                            type="info"/>
        return (
            <div className="card-box">
                <Card title="Spain用法">
                    <Spin/>   
                </Card>
                <Card title="Spin  再alert中">
                    <Spin spinning = {true} tip="加载中...">
                        {alertDemo}
                    </Spin>
                </Card>
                <Card title="自定义loading动画">
                    <Spin indicator={antIcon} />
                </Card>
                <Card title="loading延时">
                    <Spin indicator={antIcon} tip="loading..." spinning={this.state.delayLoading}  delay={300}>
                        {alertDemo}
                    </Spin>
                    <div style={{ marginTop: 16 }}>
                        Loading state：
                        <Switch checked={this.state.delayLoading} onChange={this.toggle} />
                    </div>
                </Card>
            </div>
        )
    }
}