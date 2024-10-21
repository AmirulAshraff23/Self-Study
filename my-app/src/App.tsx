import React from 'react';
import logo from './logo.svg';
import './styles/style.css';
import ToDo_Main from './components/ToDo_Main';

function App() {
  return (
    <div>
      <div id='greetings_container'>

        <h1>Hello Geeks!</h1>
        <h2>This is the 1st of the series</h2>
        <p>Start typing here</p>

      </div>



      <ToDo_Main />


    </div>
  );
}

export default App;
