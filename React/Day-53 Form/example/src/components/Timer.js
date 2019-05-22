import React from 'react';

export default class Timers extends React.Component {
    timerID;
    constructor(props) {
        super(props);
        this.state = {time: 0 };
    }

    componentDidMount(){
        this.timerID = setInterval(()=> this.tick(), 1000);
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    tick(){
        this.setState({
            time: this.state.time + 1
        });
    }

    render(){
        return (
            <div>
                <h2>{this.state.time}</h2>
            </div>
        )
    }
}