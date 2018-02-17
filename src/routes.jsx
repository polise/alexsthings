import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Homepage from './Homepage';
import About from './About';

export default () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Homepage} />
      <Route path="/about" component={About} />
    </Switch>
  </BrowserRouter>
);
