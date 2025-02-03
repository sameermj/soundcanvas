import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from './pages/HomePage';
import MusicEditor from './pages/MusicEditor';
import UserProfile from './pages/UserProfile';
import './styles/App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/editor" component={MusicEditor} />
          <Route path="/profile" component={UserProfile} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;