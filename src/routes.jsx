import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Homepage from './pages/Homepage';
import About from './pages/About';
import Me from './pages/Me';
import Quotes from './pages/Quotes';

export default () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Homepage} />
      <Route path="/about" component={About} />
      <Route path="/me" component={Me} />
      <Route path="/quotes" component={Quotes} />
    </Switch>
  </BrowserRouter>
);
