import React from 'react'
import { Button, Card, Modal } from 'antd'

import './index.less'

export default class Modals extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isVisible1: false,
            isVisible2: false,
            isVisible3: false,
            isVisible4: false,
        }
    }
    handModal = (type) => {
        this.setState({
            [type]: true
        })
    }

    handMessage = (type) => {
        const _this = this
        Modal[type]({
            title:"确认？",
            content:"背完英语了吗？写完代码了吗？还bb不？",
            onOk () {
                // _this.handMessage("warning")
            },
            onCancel() {
                _this.handMessage("warning")
            }
        })
    }

    render() {
        return (
            <div className="card-box">
                <Card title="基础弹框">
                    <Button onClick={() => this.handModal("isVisible1")}>Open</Button>
                    <Button onClick={() => this.handModal("isVisible2")}>自定义弹框</Button>
                    <Button onClick={() => this.handModal("isVisible3")}>顶部20px</Button>
                    <Button onClick={() => this.handModal("isVisible4")}>垂直居中</Button>
                </Card>
                <Card title="提示弹框">
                    <Button onClick={() => this.handMessage("info")}>info</Button>
                    <Button onClick={() => this.handMessage("success")}>success</Button>
                    <Button onClick={() => this.handMessage("error")}>error</Button>
                    <Button onClick={() => this.handMessage("warning")}>warning</Button>
                    <Button onClick={() => this.handMessage("confirm")}>confirm</Button>
                </Card>
                <Modal
                    title="基础弹框"
                    visible={this.state.isVisible1}
                    onCancel={() => {
                        this.setState({
                            isVisible1: false
                        })
                    }}
                    onOk={() => {
                        console.log("ok")
                        this.setState({
                            isVisible1: false
                        })
                        // this.handMessage("warning")
                    }}>
                    <p>Reat弹框</p>
                </Modal>
                <Modal
                    title="自定义弹框"
                    visible={this.state.isVisible2}
                    onCancel={() => {
                        this.setState({
                            isVisible2: false
                        })
                    }}
                    onOk={() => {
                        console.log("ok")
                        this.setState({
                            isVisible2: false
                        })
                    }}>
                    <p>antd弹框</p>
                </Modal>
                <Modal
                    style={{top:"20px"}}
                    title="顶部20px"
                    visible={this.state.isVisible3}
                    onCancel={() => {
                        this.setState({
                            isVisible3: false
                        })
                    }}
                    onOk={() => {
                        console.log("ok")
                        this.setState({
                            isVisible3: false
                        })
                    }}>
                    <p>Reat弹框</p>
                </Modal>
                <Modal
                    wrapClassName="modal_center"
                    title="垂直居中"
                    visible={this.state.isVisible4}
                    onCancel={() => {
                        this.setState({
                            isVisible4: false
                        })
                    }}
                    onOk={() => {
                        console.log("ok")
                        this.setState({
                            isVisible4: false
                        })
                    }}>
                    <p>Reat弹框</p>
                </Modal>
            </div>
        )
    }
}