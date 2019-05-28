import * as React from 'react';

export default class Links extends React.Component {
    render (){
        return (
            <div style={linkBox}>
                URL: <a href={this.props.url}>{this.props.url}</a> Title: {this.props.title} Tags: {this.props.tags}
            </div>
        //For URL, You must put http:// or https:// before the url.
        )
    }
}

const linkBox = {
    border: "1px solid",
    margin: 10
}