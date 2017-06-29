import React from 'react';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { Redirect, Route, Switch } from 'react-router';
import { createBrowserHistory } from 'history';
import { ConnectedRouter, routerReducer, routerMiddleware } from 'react-router-redux';

import { Col, Row } from 'antd';

import * as reducers from '../reducers';

import SelectPage from './select-page';
import CheckboxPage from './checkbox-page';
import TagPage from './tag-page';
import Header from '../components/header';
import NavBar from '../containers/nav-bar';

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
        <Header />
        <div className="page-wrapper">
          <Row className="app-body">
            <Col sm={4}>
              <NavBar />
            </Col>
            <Col sm={20}>
              <Switch>
                <Route path="/select-page" component={SelectPage} />
                <Route path="/checkbox-page" component={CheckboxPage} />
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
