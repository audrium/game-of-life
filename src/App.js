import React, { Component } from 'react';
import Title from './components/Title';
import Game from './components/Game';
import { Divider } from 'semantic-ui-react';

class App extends Component {

  render() {
    return (
      <div>
        <Title />
        <Divider />
        <Game />
      </div>
    );
  }
}

export default App;
