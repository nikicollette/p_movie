import './App.css';
import React from 'react'
//import { Route, IndexRoute } from 'react-router';
import movie_love from './movie_love_worse.mp4'



function App() {
  return (
    <div className="App">
      <header className="App-header">
        <text className = 'header'>
          Happy 22nd Birthday Toot Toot
        </text>
               <text className = 'header' style = {{color:'#CC5500', marginBottom: '30px'}}>
         I love you!
        </text>
          <video src = {movie_love} width="800" height="400" controls = "controls" autoPlay="true" />

      </header>
    </div>
  );
}

export default App;
