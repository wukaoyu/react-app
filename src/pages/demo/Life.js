import React from 'react';
// import "./index.css"
import './index.less'
import { Button } from 'antd'
// import 'antd/dist/antd.css';


class Life extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        }
    }

    render() {
        return <div>
            <p>生命周期</p>
            <Button>antd的按钮</Button>
        </div>
    }
}

export default Life;