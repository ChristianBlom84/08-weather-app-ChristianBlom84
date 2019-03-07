import React, { Component } from 'react';
import './App.css';
import ApiDarkSky from './api/ApiDarkSky';

class App extends Component {
  render() {
    return (
      <div>
        <h1>Weather app testing</h1>
        <ApiDarkSky location="test" />
      </div>
    );
  }
}

export default App;