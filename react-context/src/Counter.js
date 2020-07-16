import React, { useContext } from 'react'
import { CounterContext } from './CounterProvider'

function Counter(){
    const { state, dispatch } = useContext(CounterContext);
    return (
        <div style={{ "text-align": "center"}}>
            <h2>React Version</h2>
            <h1>{state.count}</h1>
            <button onClick={() => dispatch({type: 'INCREMENT'})}>+</button>
            <button onClick={() => dispatch({type: 'DECREMENT'})}>-</button>
        </div>
    )
}

export default Counter;