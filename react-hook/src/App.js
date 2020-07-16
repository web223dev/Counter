import React, { useState } from 'react'

function App() {
  const [count, setCount] = useState(0);
  return (
    <div style={{ "text-align": "center"}}>
      <h2>React Version</h2>
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>+</button>
      <button onClick={() => setCount(count - 1)}>-</button>
    </div>
  )
}

export default App
