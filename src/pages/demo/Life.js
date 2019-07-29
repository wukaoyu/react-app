import React from 'react';

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
        </div>
    }
}

export default Life;