export const increment = () => ({ type: 'INCREMENT'});
export const decrement = () => ({ type: 'DECREMENT'});

let initialState = {
    number: 0
}

export default function counter(state = initialState, action){
    switch(action.type){
        case 'INCREMENT':
            return { number: state.number + 1}
        case 'DECREMENT':
            return { number: state.number - 1}
        default:
            return state
    }
}
