export const ADD_LINK = "ADD_LINK";
export const CLEAR_LINKS = "CLEAR_LINKS";



//The case if we put function in actions file instead of dispatch in actual file using the code.
export function addLink(title, url) {
    return {
        type: ADD_LINK,
        link: {
            title: title,
            url: url
        }
    }
}

export function clearLink () {
    return {
        type:CLEAR_LINKS
    }
}