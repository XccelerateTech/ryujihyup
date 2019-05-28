import React from 'react';
import { InputGroup, InputGroupAddon, InputGroupText, Input, Button } from 'reactstrap';

export default class SearchBar extends React.Component {

    render(){
    return (
      <div style={center}>
        <InputGroup style={searchBarStyle} >
          <InputGroupAddon addonType="prepend">@</InputGroupAddon>
          <Input placeholder="Search from URL or Title" value={this.props.value} onChange={this.props.onChangeValue}/>
          <Button onClick={this.props.onSubmitValue}>Search</Button>
        </InputGroup>
        </div>
    )}
  }

const center = {
  margin: 'auto',
  width: '80%',
  padding: '10px'
}

const searchBarStyle = {
    width: '100%',
    margin: 10
}