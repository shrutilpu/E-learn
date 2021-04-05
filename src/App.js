import React from 'react';
import './App.css';
import Login from './Components/Login/Login';
import Dashboard from './Components/Dashboard/Dashboard';
import {Route,Switch,Link} from 'react-router-dom';

function App() {
  return (
    <div className="App">
     <Switch>
       <Route path='/dashboard'><Dashboard/></Route>
     <Route path="/"><Login/></Route>
     </Switch>
      
    </div>
  );
}
export default App;
