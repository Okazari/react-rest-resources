import React, { Component } from 'react';
import ResourceDisplay from './ResourceDisplay/index.js';
import ResourceUpdater from './ResourceUpdater/index.js';
class App extends Component {
  render() {
    return (
      <div className="App">
        <ResourceDisplay resourceId="1" />
        <ResourceDisplay resourceId="1" />
        <ResourceDisplay resourceId="1" />
        <ResourceDisplay resourceId="1" />
        <ResourceDisplay resourceId="1" />
        <ResourceDisplay resourceId="1" />
        <ResourceDisplay resourceId="1" />
        <ResourceDisplay resourceId="1" />
        <ResourceDisplay resourceId="1" />
        <ResourceDisplay resourceId="1" />
        
        <ResourceUpdater resourceId="1" />
      </div>
    );
  }
}

export default App;
