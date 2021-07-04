import React from 'react';
import Hello from './components/Hello';
import Timer from './components/Timer';

const user = {
  name: 'Taehwan',
  age: 18,
};
function App() {
  return (
    <div>
      <Timer />
    </div>
  );
}

export default App;
