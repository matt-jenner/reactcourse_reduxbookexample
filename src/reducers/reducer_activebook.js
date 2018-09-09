// State argument is NOT application state, only the state the reducer is responsible for 
// (so books in this instance)
export default (state = null, action) => {
    switch (action.type) {
        case 'BOOK_SELECTED':
            return action.payload;
        default:
            return state;
    }
}