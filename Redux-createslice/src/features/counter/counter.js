import React from 'react';
import * as actionCreator from './counterSlice'
import { useSelector, useDispatch } from 'react-redux'

export function Counter(){
    const counter = useSelector(actionCreator.selectCount)
    const dispatch = useDispatch()
    return (
        <div style={{'text-align': 'center'}}>
            <h2>Redux-Use CreateSlice</h2>
            <h1>{counter}</h1>
            <button onClick={() => dispatch(actionCreator.increment())}>+</button>
            <button onClick={() => dispatch(actionCreator.decrement())}>-</button>
        </div>
    );
}