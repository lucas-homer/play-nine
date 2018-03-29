import React, { Component } from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/font-awesome/css/font-awesome.min.css';
import Game from './components/Game';


class App extends Component {
  render() {
    return (
      <div>
        <Game />
      </div>
    );
  }
}

export default App;
