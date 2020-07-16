import React, { useReducer } from 'react'

function init(initialCount){
  return { count: initialCount };
}

function reducer(state, action){
  switch (action.type){
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 };
    case 'reset':
      return init(action.payload);
    default:
      throw new Error();
  }
}

function Counter({initialCount}){
  const [state, dispatch] = useReducer(reducer, initialCount, init)
  return (
    <div style={{ "text-align": "center"}}>
      <h2>React Version</h2>
      <h1>{state.count}</h1>
      <p>
        <button onClick={() => dispatch({ type: 'increment'})}>+</button>
        <button onClick={() => dispatch({ type: 'decrement'})}>-</button>
      </p>
      <p><button onClick={() => dispatch({ type: 'reset', payload: initialCount})}>reset</button></p>
    </div>
  )
}

export default Counter;