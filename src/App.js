import React from 'react';
import Hello from './components/Hello';

const user = {
  name: 'Taehwan',
  age: 18,
};
function App() {
  return (
    <div>
      <Hello user={user} />
    </div>
  );
}

export default App;
