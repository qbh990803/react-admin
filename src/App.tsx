import React from 'react';
import { HashRouter, Route, Switch, Redirect } from 'react-router-dom';
import Home from 'pages/home';
import Detail from 'pages/detail';

function App() {
  return (
    <div className="App">
      <HashRouter>
        <Switch>
          <Route path="/home" component={Home} />
          <Route path="/detail" component={Detail} />
          <Route exact path="/" component={Home} />
          <Redirect to="/home" />
        </Switch>
      </HashRouter>
    </div>
  );
}

export default App;
