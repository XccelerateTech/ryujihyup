import RandomName from 'node-random-name';
import React from 'react';
import Counter2 from './Counter2'

class LeaderBoard extends React.Component {
    constructor(props){
        super(props)
        this.state={
            counters: [{name:RandomName({seed: Math.random()}), count:0}, {name:RandomName({seed: Math.random()}), count:2}],
        }
    }

    renderCounter(i, name, count){
        return( <Counter2 count = {count} name = {name} key={i}
            onClick={()=> this.handleClickPlus(i)}
            onMouseDown={()=> this.handleClickMinus(i)} />
        );
    }

    handleClickPlus(i){
        let newObj = {... this.state.counters[i], count: this.state.counters[i].count +1 }
        let newArray = [ ... this.state.counters];
        newArray[i] = newObj
        this.setState({
            counters: newArray
        })
    }

    handleClickMinus(i){
        let newObj = {... this.state.counters[i], count: this.state.counters[i].count -1 }
        let newArray = [ ... this.state.counters];
        newArray[i] = newObj
        this.setState({
            counters: newArray
        })
    }

    render(){
        return (
            <div>
                {this.state.counters.map((counter, index) => this.renderCounter(index, counter.name, counter.count))}
                <br/>
                <h1>LeaderBoard</h1>
            </div>
        )
    }

}

export default LeaderBoard;