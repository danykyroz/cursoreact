import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  render() {
    return (
      <div>
        <p>Hola Desde React and Symfony4 listen change components</p>
      </div>
    )
  }
}

ReactDOM.render(<App/>, document.getElementById('root'));
