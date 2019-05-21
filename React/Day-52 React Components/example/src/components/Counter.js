import * as React from 'react';
import {Button} from 'reactstrap'

export default class Counter extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            count: 0
        }
    }

    render(){
        return (
            <div>
                Counter : {this.state.count} <Button onClick={this.incrementCounter} color="primary">+</Button><Button  onClick={this.decrementCounter} color="danger">-</Button>
            </div>
        )
    }

    incrementCounter = () => {
        this.setState({
            count: this.state.count + 1
        })
    }
    
    decrementCounter = () => {
        this.setState({
            count: this.state.count - 1
        })
    }
}