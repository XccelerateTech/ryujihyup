import React from 'react'

const Hello = (props) => {
    return (
        <div> 
            <h1>Hello {props.children}, this is your welcome message</h1>
        </div>
    )
}

export default Hello;