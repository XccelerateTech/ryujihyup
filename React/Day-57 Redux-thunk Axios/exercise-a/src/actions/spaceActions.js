import axios from 'axios';

export const LOAD_ASTRONAUT_SUCCESS = "LOAD_ASTRONAUT_SUCCESS";

export const LOAD_ASTRONAUT_FAILURE = "LOAD_ASTRONAUT_FAILURE";

export function loadAstronautSuccess(astronauts) {
    return {
        type: LOAD_ASTRONAUT_SUCCESS,
        astronauts: astronauts
        }
}
    
    export function loadAstronautFailure() {
        return {
            type: LOAD_ASTRONAUT_FAILURE
        }
}

export function loadAstronautThunk(){
    return dispatch => {
        return axios('http://api.open-notify.org/astros.json')
        .then(res => {
            let astronauts = res.data.people.map(human => ({
                craft: human.craft,
                name: human.name
            }))
            dispatch(loadAstronautSuccess(astronauts))
        })
        .catch(err => {
            dispatch(loadAstronautFailure())
        })
    }
}


// export function loadAstronaut(){
//     return dispatch => {
//         return axios('http://api.open-notify.org/astros.json')
//             .then(response => {
//                 let datas = response.data.data.children.map(link => ({
//                     title: link.data.title,
//                     url: link.data.url
//                 }))
//                 dispatch(loadLinkSuccess(links))
//             })
//             .catch(err => {
//                 dispatch(loadLinkFailure())
//             })
//     }
// }