import React, { useReducer } from 'react'

const initialState = { count: 0 }
const CounterContext = React.createContext(initialState);

let reducer = (state, action) => {
    switch(action.type){
        case 'INCREMENT':
            return { ...state, count: state.count + 1}
        case 'DECREMENT':
            return { ...state, count: state.count - 1}
        default:
            return state;
    }
}

function CounterProvider(props){
    const [state, dispatch] = useReducer(reducer, initialState);
    return (
        <CounterContext.Provider value={{ state, dispatch }}>
            {props.children}
        </CounterContext.Provider>
    )
}

export { CounterContext, CounterProvider };
