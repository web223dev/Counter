import React from 'react';
import Counter from './Counter';
import { CounterProvider } from './CounterProvider';

function App() {
  return (
    <CounterProvider>
      <Counter />
    </CounterProvider>
  );
}

export default App;
