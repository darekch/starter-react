import React from 'react';
import { Route, Switch, Link } from 'react-router-dom';

import RoutesErrorBoundary from 'common/errors/boundaries/routes';
// import Items from 'features/Items/containers/ItemsList/ItemsList';
import ItemsContainers from 'features/Items';

const routes = () => (
  <div>
    <nav>
      <Link to="/">Home</Link>
      <Link to="/items">Items</Link>
    </nav>
    <Switch>
      <RoutesErrorBoundary>
        <Route exact path="/items" component={ItemsContainers.ItemsListContainer} />
      </RoutesErrorBoundary>
    </Switch>
  </div>
);

export default routes;
