import React from 'react';
import WeatherLocation from './components/WeatherLocation'
import ReactDOM from 'react-dom';

class App extends React.Component {
  render() {
    return (
      <div className="App">
      <WeatherLocation></WeatherLocation>
      </div>
    )
  }
}

ReactDOM.render(<App/>, document.getElementById('root'));
