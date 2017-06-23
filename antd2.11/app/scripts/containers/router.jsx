import React from 'react';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { Redirect, Route, Switch } from 'react-router';
import { createBrowserHistory } from 'history';
import { ConnectedRouter, routerReducer, routerMiddleware } from 'react-router-redux';

import { Row } from 'antd';

import * as reducers from '../reducers';

import MainPage from './main-page';

const history = createBrowserHistory();

const store = createStore(
  combineReducers({
    ...reducers,
    router: routerReducer,
  }),
  applyMiddleware(
    thunk,
    routerMiddleware(history),
  ),
);


const RouterComponent = () => (
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <div className="content">
        <div className="content">
          <div className="page-wrapper">
            <Row className="app-body">
              <Switch>
                <Route path="/main-page" component={MainPage} />
                <Redirect from="/" to="/main-page" />
              </Switch>
            </Row>
          </div>
        </div>
      </div>
    </ConnectedRouter>
  </Provider>
);

export default RouterComponent;
