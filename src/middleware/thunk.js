// Build middleware here
export default (store) => (next) => (action) => {
    // Code goes here
    if(typeof action !== 'function') {
        return next(action);
    }

    return action(store.dispatch, store.getState);
}

// ES5 Example

// export default function (store) {
//     return function (next) {
//         return function (action) {
//             // Code goes here
//         }
//     }
// }