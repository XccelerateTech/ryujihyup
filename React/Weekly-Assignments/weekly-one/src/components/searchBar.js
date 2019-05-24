import React from 'react';
import { InputGroup, InputGroupAddon, InputGroupText, Input, Button } from 'reactstrap';

export default class SearchBar extends React.Component {

    render(){
    return (
      <div>
        <InputGroup style={searchBarStyle} >
          <InputGroupAddon addonType="prepend">@</InputGroupAddon>
          <Input placeholder="Search" value={this.props.value} onChange={this.props.onChangeValue}/>
          <Button onClick={this.props.onSubmitValue}>Search</Button>
        </InputGroup>
        </div>
    )}
  }

const searchBarStyle = {
    width: '50%',
}