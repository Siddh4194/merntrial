import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [result,setResult] = useState('');
  function fetchInfo() {
    fetch(`${process.env.REACT_APP_API_URL}/test`,{
      method: 'GET',
      headers: {'Content-Type': 'application/json'},
    })
    .then(response => response.json())
    .then(data => setResult(data))
  }
  return (
    <div>
      <button onClick={fetchInfo}>
         fetch
      </button>
      <div>result:{result}</div>
    </div>
  );
}

export default App;
