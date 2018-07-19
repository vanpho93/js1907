import React, { Component } from 'react';

export default class Box extends Component {
    state = { value: 1 }
    render() {
        return (
            <div>
                <p>{this.state.value}</p>
                <button>Increase</button>
            </div>
        );
    }
}
