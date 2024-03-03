
import { useState } from 'react';
import './App.css';
import Input from './components/Input';
import Output from './components/Output';

function App() {
  const [input, setInput] = useState('')

  const handleFunction = (value) => {
    setInput(value)
  }

  return (
    <div className="App">
      <Input func={handleFunction} input={input} />
      <Output input={input} />
    </div>
  );
}

export default App;
