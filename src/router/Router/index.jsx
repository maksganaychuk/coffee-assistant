import React from 'react';
import { BrowserRouter, Redirect, Switch, Route } from 'react-router-dom';
import { routes } from '@constants';
import { Coffee } from '@pages';
import { ScrollToTop } from '@atoms';

const Router = () => (
  <BrowserRouter>
    <ScrollToTop />
    <Switch>
      <Route exact path={routes.coffee}>
        <Coffee />
      </Route>
      <Redirect to={routes.coffee} />
    </Switch>
  </BrowserRouter>
);

export default Router;
