import { createStore } from 'redux';
import { rootReducer } from './reducers';

//Without Reducers
// const rootReducer = state => {
//     return {
//         links: [
//             {
//                 title: "Google", url: "https://www.google.com"
//             },
//             {
//                 title: "Yahoo", url: "https://www.yahoo.com"
//             },
//         ]
//     }
// }

export const store = createStore(rootReducer);