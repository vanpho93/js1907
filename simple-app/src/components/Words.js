import React, { Component } from 'react';
import Word from './Word';
export default class Words extends Component {
    state = {
        words: [
            { _id: 'a', en: 'One', vn: 'Mot', isMemorized: true },
            { _id: 'b', en: 'Two', vn: 'Hai', isMemorized: false },
            { _id: 'c', en: 'Three', vn: 'Ba', isMemorized: false },
            { _id: 'd', en: 'Four', vn: 'Bon', isMemorized: true },
            { _id: 'e', en: 'Five', vn: 'Nam', isMemorized: true }
        ]
    }
    render() {
        return (
            <div>
                {this.state.words.map(word => <Word word={word} key={word._id} />)}
            </div>
        );
    }
}
