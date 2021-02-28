import React from 'react';

import Chat from './components/Chat/Chat';
import Join from './components/Join/Join';
import WaitRoom from './components/WaitRoom/WaitRoom';

import { BrowserRouter as Router, Route } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <Route path="/" exact component={Join} />
      <Route path="/chat" component={Chat} />
      <Route path="/WaitRoom" component={WaitRoom} />
    </Router>
  );
}

export default App;
