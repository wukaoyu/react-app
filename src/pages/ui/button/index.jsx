import React from 'react'
import { Button, Card } from 'antd'

import './index.less'

export default class Buttons extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loagdingFlag: true
        }
    }

    handIsLoading = () => {
        this.setState({
            loagdingFlag: !this.state.loagdingFlag
        })
    }

    render() {
        return (
            <div className="card-box">
                <Card title="基础按钮">
                    <Button type="primary">主按钮</Button>
                    <Button>普通按钮</Button>
                    <Button type="dashed">虚线按钮</Button>
                    <Button type="danger">删除按钮</Button>
                    <Button disabled>不可选按钮</Button>
                    <Button type="link">链接按钮</Button>
                </Card>
                <Card title="图形按钮">
                    <Button icon="plus">增加</Button>
                    <Button icon="edit">编辑</Button>
                    <Button icon="delete">删除</Button>
                    <Button icon="search" shape='circle'></Button>
                    <Button icon="search" type="primary">搜索</Button>
                    <Button icon="download" type="primary">下载 </Button>
                </Card>
                <Card title="Loading按钮">
                    <Button type="primary" loading={this.state.loagdingFlag}>确定</Button>
                    <Button type="primary" shape='circle' loading={this.state.loagdingFlag}></Button>
                    <Button loading={this.state.loagdingFlag}>点击加载</Button>
                    <Button type="primary" onClick={this.handIsLoading}>加载 </Button>
                </Card>
            </div>
        )
    }
}