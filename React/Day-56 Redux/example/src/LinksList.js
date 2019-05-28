import * as React from 'react';
import { connect } from 'react-redux';
import { ADD_LINK, CLEAR_LINKS, addLink, clearLink } from '../src/redux/actions';
import { dispatch } from 'rxjs/internal/observable/pairs';


const PureLinkList = props => {
    return (
        <div>
            <button onClick={props.addLink}>New Link</button>
            <button onClick={props.clearLink}>Clear Link</button>
            <h2>Links: </h2>
            {props.links.map((l, i) => (
                <div key={i}>
                    {l.title} - {l.url}
                </div>
            ))}
        </div>
    )
}

const mapStateToProps = state => {
    return {
        links: state.links
    }
}

const mapDispatchToProps = dispatch => {
    return {
        addLink: () =>
        // dispatch({
        //     type:ADD_LINK,
        //     link: {
        //         title: "Xccelerate",
        //         url: "https://www.xccelerate.co"
        //     }
        // }),
        dispatch(addLink('Xccelerate', "https://www.xccelerate.co")),
        clearLink: () =>
        dispatch(clearLink())
        // dispatch({
        //     type: CLEAR_LINKS
        // })
    }
}

export const LinksList = connect(mapStateToProps, mapDispatchToProps)(PureLinkList)