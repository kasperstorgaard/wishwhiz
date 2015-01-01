var React = require('react');

var RouteConstants = require('./constants/route-constants');
var App = require('./elements/app');
var Router = require('react-router');

var Home = require('./pages/home');
var NotFound = require('./pages/not-found');
var LoginRegister = require('./pages/login-register');
var User = require('./pages/user');

var Route = Router.Route, DefaultRoute = Router.DefaultRoute, NotFoundRoute = Router.NotFoundRoute;

var routes = (
  <Route handler={App} path="/">
    <DefaultRoute handler={Home} />
    <Route name={RouteConstants.LOGIN} path="/login" handler={LoginRegister} />
    <Route name={RouteConstants.USER} path="/user" handler={User} />
    <NotFoundRoute handler={NotFound} />
  </Route>
);

Router.run(routes, function (Handler) {
  React.render(<Handler/>, document.getElementById('main'));
});
