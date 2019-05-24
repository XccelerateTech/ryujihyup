import * as React from 'react';
import {Button} from 'reactstrap'

export default class Questioner extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            question : ''
        }
    }

    render(){
        return (
            <div>
                <Button onClick={this.changePara}>Change</Button>
                <p>{this.state.question}</p>
            </div>
        )
    }

    changePara = () => {
        let result = prompt("Type anything you want!");
        this.setState({
            question: result
        })
    }
}