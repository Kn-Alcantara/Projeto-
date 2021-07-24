import React from 'react';
import {
    BrowserRouter,
    Switch,
    Route
} from 'react-router-dom';

import {Home }from './pages/Home'
import {Movie} from './pages/Movie'
import {Search} from './pages/Search'

const Routes = () => {
 return (
  <BrowserRouter>
  <Switch>
      <Route exact path="/"  component={ Home } />
      <Route exact path="/Movie" component={ Movie } />
      <Route exact path="/Search" component={ Search } />
      <Route  path="*" >
        <h1>404. That’s an error.</h1>
      </Route>
  </Switch>
</BrowserRouter>
 );
};
export {Routes}