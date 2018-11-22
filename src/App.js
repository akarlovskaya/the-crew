import React, { Component } from 'react';

import CrewBoard from './containers/CrewBoard';
import styles from './App.module.scss';

class App extends Component {
  render() {
    return (
      <div className={styles.App}>
        <CrewBoard />
      </div>
    );
  }
}

export default App;