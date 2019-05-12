import React from 'react';
import { Route, Switch } from 'react-router';
import { Link } from 'react-router-dom';

import Items from 'features/Items';

const routes = () => (
  <div>
    <nav>
      <Link to="/">Home</Link>
      <Link to="/items">Items</Link>
    </nav>
    <Switch>
      <Route exact path="/items" component={Items} />
    </Switch>
  </div>
);

export default routes;
