import React from "react";
import './App.css';
import Input from './components/Input/Input'
import {
  BrowserRouter as Router,
  Route
} from "react-router-dom";
import Submissions from './components/Submissions/Submissions'
function App() {
 
  return (
    <div className="App">
    <Router>
    <Route exact path="/"  component={Input}>
    </Route>
    <Route path="/submissions" component={Submissions}>
    </Route>
    </Router>
    </div>
  );
}

export default App;
