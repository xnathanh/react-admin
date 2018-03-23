import React from 'react';
import ErrorBoundary from 'component/ErrorBoundary';
import { Switch, Route, Redirect } from 'react-router-dom';
import Category from './container/Category';
import Commodity from './container/Commodity';

const CommodityWithErrorBoundary = props => (
  <ErrorBoundary redirectTo="/error/breakdown">
    <Commodity {...props} />
  </ErrorBoundary>
);
export default class Product extends React.Component {
  render() {
    const { match } = this.props;
    return (
      <Switch>
        <Route path={`${match.url}/category`} exact component={Category} />
        <Route
          path={`${match.url}/commodity`}
          component={CommodityWithErrorBoundary}
        />
        <Redirect to="/error/404" />
      </Switch>
    );
  }
}
