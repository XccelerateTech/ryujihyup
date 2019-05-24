import {Link} from 'react-router-dom';
import * as React from 'react';

export default class NavBar extends React.Component {
    render() {
        return(
            <div>
                <Link to='/'>Home</Link>
                <Link to='/shoppingList'>Shopping List</Link>
                <Link to='/leaderBoard'>Leader Board</Link>
                <Link to='/questioner'>Questioner</Link>
                <Link to='/aboutUs'>About us</Link>
                <Link to='/timer'>Clock Timer</Link>
            </div>
        )
    }
}