import React from 'react'

export default class Info extends React.Component {
    constructor(props) {
        super(props);
        // console.log(this.props.match.params.id)
    }
    render() {
        return (
            <div>
                Info
                {this.props.match.params.id}
            </div>
        )
    }
}