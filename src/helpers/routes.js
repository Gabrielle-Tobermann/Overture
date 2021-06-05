import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from '../components/Home';
import BowView from '../views/BowView';
import FinancialReportsView from '../views/FinancialReportsView';
import InstrumentView from '../views/InstrumentView';
import OrderView from '../views/OrderView';

export default function Routes() {
  return (
    <div>
      <Switch>
        <Route exact path='/'
        component={Home}
        />
        <Route exact path='/instrument-inventory'
        component={InstrumentView}
        />
        <Route exact path='/bow-inventory'
        component={BowView}
        />
        <Route exact path='/orders'
        component={OrderView}
        />
        <Route exact path='/financial-reports'
        component={FinancialReportsView}
        />
      </Switch>
    </div>
  );
}
