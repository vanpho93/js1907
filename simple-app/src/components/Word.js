import React, { Component } from 'react';

export default class Word extends Component {
    render() {
        const { word } = this.props;
        return (
            <div>
                <h4>{word.en}</h4>
                <p>{word.vn}</p>
            </div>
        );
    }
}
