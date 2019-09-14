import React from 'react'
import { Card, notification, Button  } from 'antd'

export default class notifica extends React.Component{
    openNotification = (type, pos = 'topRight') => {
        notification.config({
            placement:pos
        })
        notification[type]({
            message: 'React学习ing',
            description: "这是antdesign"
        })
    } 
    render() {
        return (
            <div className="card-box">
                <Card title="通知提醒框">
                    <Button type="primary" onClick={() => this.openNotification('success')}>
                        success 提醒
                    </Button> 
                    <Button type="primary" onClick={() => this.openNotification('info')}>
                        info 提醒
                    </Button> 
                    <Button type="primary" onClick={() => this.openNotification('warning')}>
                        warning 提醒
                    </Button> 
                    <Button type="primary" onClick={() => this.openNotification('error')}>
                        error 提醒
                    </Button> 
                </Card>
                <Card title="改变位置">
                    <Button type="primary" onClick={() => this.openNotification('success', 'topLeft')}>
                        success 提醒 左上
                    </Button> 
                    <Button type="primary" onClick={() => this.openNotification('info', 'bottomLeft')}>
                        info 提醒 左下
                    </Button> 
                    <Button type="primary" onClick={() => this.openNotification('warning', 'topRight')}>
                        warning 提醒 右上
                    </Button> 
                    <Button type="primary" onClick={() => this.openNotification('error', 'bottomRight')}>
                        error 提醒 右下
                    </Button> 
                </Card>
            </div>
        )
    }
}