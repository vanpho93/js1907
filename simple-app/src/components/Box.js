import React, { Component } from 'react';

export default class Box extends Component {
    state = { value: 1 }

    increase = () => {
        // this.setState({ value: this.state.value + 1 });
        // this.setState({ value: this.state.value + 1 });
        this.setState(prevState => ({ value: prevState.value + 1 }));
        this.setState(prevState => ({ value: prevState.value + 1 }));
    }

    render() {
        return (
            <div>
                <p>{this.state.value}</p>
                <button onClick={this.increase}>Increase</button>
            </div>
        );
    }
}
