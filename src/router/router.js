import React, { Fragment } from 'react';
import { Route, Switch } from 'react-router-dom';

import { Home, About, Posts } from './lazy';

const Routes = () => {
  return (
    <Fragment>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route path="/posts" component={Posts} />
      </Switch>
    </Fragment>
  );
}

export default Routes;