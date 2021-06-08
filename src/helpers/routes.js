import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import Home from '../components/Home';
import BowView from '../views/BowView';
import FinancialReportsView from '../views/FinancialReportsView';
import InstrumentView from '../views/InstrumentView';
import OrderView from '../views/OrderView';

const PrivateRoute = ({
  component: Component, user, admin, ...rest
}) => {
  const routeChecker = (remainder) => (user || admin
    ? (<Component {...remainder} user={user} admin={admin}/>)
    : (<Redirect to={{ pathname: '/', state: { from: remainder.location } }} />));

  return <Route {...rest} render={(props) => routeChecker(props)} />;
};

PrivateRoute.propTypes = {
  component: PropTypes.func,
  user: PropTypes.any,
  admin: PropTypes.any
};

function Routes({
  user,
  admin,
  items,
  setItems
}) {
  return (
    <div>
      <Switch>
        <Route exact path='/'
        component={Home}
        user={user}
        admin={admin}
        />
        <PrivateRoute exact path='/instrument-inventory'
        component={() => <InstrumentView
          items={items}
          setItems={setItems}
          />
        }
        user={user}
        admin={admin}
        />
        <PrivateRoute exact path='/bow-inventory'
        component={() => <BowView
          items={items}
          setItems={setItems}
          />
        }
        user={user}
        admin={admin}
        />
        <PrivateRoute exact path='/orders'
        component={OrderView}
        user={user}
        admin={admin}
        />
        <PrivateRoute exact path='/financial-reports'
        component={FinancialReportsView}
        admin={admin}
        />
      </Switch>
    </div>
  );
}

Routes.propTypes = {
  user: PropTypes.any,
  admin: PropTypes.any,
  items: PropTypes.array,
  setItems: PropTypes.func
};

export default Routes;
