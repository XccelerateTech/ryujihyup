import * as React from 'react';

export default class Links extends React.Component {
    render (){
        return (
            <div style={linkBox}>
                URL: {this.props.url} Title: {this.props.title} Tags: {this.props.tags}
            </div>
        )
    }
}

const linkBox = {
    border: "1px solid",
    margin: 10
}