import React from 'react'
import { Card, notification, Button, message  } from 'antd'
import './index.less'
export default class messages extends React.Component{
    handMessage = (type) => {
        message[type]("又不看英语了？？")
    }
    render() {
        return (
            <div className="card-box">
                <Card title="message提醒">
                    <Button onClick={() => this.handMessage('info')}>messageInfo提醒</Button>
                    <Button onClick={() => this.handMessage('success')}>messageSuccess提醒</Button>
                    <Button onClick={() => this.handMessage('warning')}>messageWarning提醒</Button>
                    <Button onClick={() => this.handMessage('error')}>messageError提醒</Button>
                </Card>
                <Card title="message提醒">
                    <Button onClick={() => this.handMessage('info')}>messageInfo提醒</Button>
                    <Button onClick={() => this.handMessage('success')}>messageSuccess提醒</Button>
                    <Button onClick={() => this.handMessage('warning')}>messageWarning提醒</Button>
                    <Button onClick={() => this.handMessage('error')}>messageError提醒</Button>
                </Card>
            </div>
        )
    }
}