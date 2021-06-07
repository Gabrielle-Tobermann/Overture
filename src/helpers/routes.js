import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import Home from '../components/Home';
import BowView from '../views/BowView';
import FinancialReportsView from '../views/FinancialReportsView';
import InstrumentView from '../views/InstrumentView';
import OrderView from '../views/OrderView';

const PrivateRoute = ({ component: Component, user, ...rest }) => {
  const routeChecker = (remainder) => (user
    ? (<Component {...remainder} user={user} />)
    : (<Redirect to={{ pathname: '/', state: { from: remainder.location } }} />));

  return <Route {...rest} render={(props) => routeChecker(props)} />;
};

PrivateRoute.propTypes = {
  component: PropTypes.func,
  user: PropTypes.any,
  admin: PropTypes.any
};

function Routes({ user }) {
  return (
    <div>
      <Switch>
        <Route exact path='/'
        component={Home}
        user={user}
        />
        <PrivateRoute exact path='/instrument-inventory'
        component={InstrumentView}
        user={user}
        />
        <PrivateRoute exact path='/bow-inventory'
        component={BowView}
        user={user}
        />
        <PrivateRoute exact path='/orders'
        component={OrderView}
        user={user}
        />
        <PrivateRoute exact path='/financial-reports'
        component={FinancialReportsView}
        user={user}
        />
      </Switch>
    </div>
  );
}

Routes.propTypes = {
  user: PropTypes.any,
  admin: PropTypes.any
};

export default Routes;
