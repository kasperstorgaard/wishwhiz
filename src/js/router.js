var React = require('react');

var RouteConstants = require('./constants/route-constants');
var App = require('./elements/app.js');
var Router = require('react-router');

var Home = require('./pages/home.js');
var NotFound = require('./pages/not-found.js');
var LoginRegister = require('./pages/login-register.js');

var Route = Router.Route, DefaultRoute = Router.DefaultRoute, NotFoundRoute = Router.NotFoundRoute;

var routes = (
  React.createElement(Route, {handler: App, path: "/"}, 
    React.createElement(DefaultRoute, {handler: Home}), 
    React.createElement(Route, {name: RouteConstants.LOGIN, path: "/login", handler: LoginRegister}), 
    React.createElement(NotFoundRoute, {handler: NotFound})
  )
);

Router.run(routes, function (Handler) {
  React.render(React.createElement(Handler, null), document.getElementById('main'));
});
