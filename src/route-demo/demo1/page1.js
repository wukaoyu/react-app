import React from 'react'
import { Link } from 'react-router-dom'

export default class Page1 extends React.Component {
    render() {
        return (
            <div>
                page1
                <Link to="/page1/123">嵌套路由</Link>
                {this.props.children}
            </div>
        )
    }
}