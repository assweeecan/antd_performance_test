import React from 'react';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { Redirect, Route, Switch } from 'react-router';
import { createHashHistory } from 'history';
import { ConnectedRouter, routerReducer, routerMiddleware } from 'react-router-redux';

import { Col, Row } from 'antd';

import * as reducers from '../reducers';

import SelectPage from './select-page';
import SelectOptimizedPage from './select-optimized-page';
import CheckboxPage from './checkbox-page';
import CheckboxOptimizedPage from './checkbox-optimized-page';
import TagOptimizedPage from './tag-optimized-page';
import TagPage from './tag-page';
import Header from '../components/header';
import NavBar from '../containers/nav-bar';

const history = createHashHistory();

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

console.log(history);


const RouterComponent = () => (
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <div className="content">
        <Header />
        <div className="page-wrapper">
          <Row className="app-body">
            <Col sm={4}>
              <NavBar />
            </Col>
            <Col sm={20}>
              <Switch>
                <Route path="/checkbox-page" component={CheckboxPage} />
                <Route path="/checkbox-optimized-page" component={CheckboxOptimizedPage} />
                <Route path="/select-page" component={SelectPage} />
                <Route path="/select-optimized-page" component={SelectOptimizedPage} />
                <Route path="/tag-optimized-page" component={TagOptimizedPage} />
                <Route path="/tag-page" component={TagPage} />
              </Switch>
            </Col>
          </Row>
        </div>
      </div>
    </ConnectedRouter>
  </Provider>
);

export default RouterComponent;
