import React from 'react'
import {Link} from 'react-router-dom'

export default class link extends React.Component {
    constructor(props) {
        super(props);
        console.log(this.props.children)
    }
    render() {
        return (
            <div>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/page1">page1</Link>
                    </li>
                    <li>
                        <Link to="/page2">page2</Link>
                    </li>
                    <li>
                        <Link to="/page3">page3</Link>
                    </li>
                </ul>
                {this.props.children}
            </div>
        )
    }
}