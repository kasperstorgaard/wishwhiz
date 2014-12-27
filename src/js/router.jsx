var React = require('react');

var RouteConstants = require('./constants/route-constants');
var App = require('./elements/app.js');
var Router = require('react-router');

var Home = require('./pages/home.js');
var NotFound = require('./pages/not-found.js');
var LoginRegister = require('./pages/login-register.js');

var Route = Router.Route, DefaultRoute = Router.DefaultRoute, NotFoundRoute = Router.NotFoundRoute;

var routes = (
  <Route handler={App} path="/">
    <DefaultRoute handler={Home} />
    <Route name={RouteConstants.LOGIN} path="/login" handler={LoginRegister} />
    <NotFoundRoute handler={NotFound} />
  </Route>
);

Router.run(routes, function (Handler) {
  React.render(<Handler/>, document.getElementById('main'));
});
