import React from 'react';
import {Button} from 'reactstrap'
import Timers from './Timer';

export default class Page extends React.Component {
    constructor(props){
        super(props)
        this.state={
            timers: 0
        }
    }
   

    addTimer=()=>{
        console.log('Adding')
       this.setState({
           timers: this.state.timers + 1
       })
    }

    render(){
        let array = []
        for(let i=0; i<this.state.timers; i ++){
            array.push(<Timers key={i} />)
          
        }
        return (
            <div>
                <Button onClick={this.addTimer}>Timers</Button>
                {array}
            </div>
        )
    }
}