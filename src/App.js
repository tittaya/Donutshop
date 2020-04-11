import React from 'react';
import './App.css';
import Menu from './pages/Menu';
import Welcome from './pages/Welcome';
import Login from './pages/Login';
import Register from './pages/Register';
import OrderSuccess from './pages/OrderSuccess';
import About from './pages/About';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
  return (
    <Router>
      <div>
        <Switch> 
          <Route path="/" exact component={Welcome} />
          <Route path="/about" component={About} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route path="/menu" component={Menu} />
          <Route path="/ordersuccess" component={OrderSuccess} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;