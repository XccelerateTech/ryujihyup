import React from 'react';

export default class Counter2 extends React.Component {
    render() {
        return (
            <div>
                <h5>{(this.props.name === '')? 'Counter': this.props.name + `'s Counter`} : {this.props.count}</h5>
                <button onClick={this.props.onClick}>+</button>
                <button onClick={this.props.onMouseDown}>-</button>
            </div>
        );
    }
}