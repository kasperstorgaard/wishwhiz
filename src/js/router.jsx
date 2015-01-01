var React            = require('react');

var RouteConstants   = require('./constants/route-constants');
var Router           = require('react-router');

var Home             = require('./views/pages/home');
var NotFound         = require('./views/pages/not-found');
var LoginRegister    = require('./views/pages/login-register');
var User             = require('./views/pages/user');

var App              = require('./views/elements/app');
var Footer           = require('./views/elements/shared/footer');

var Route            = Router.Route,
    DefaultRoute     = Router.DefaultRoute,
    NotFoundRoute    = Router.NotFoundRoute,
    RouteHandler     = Router.RouteHandler;

window.React = React;

var routes = (
  <Route handler={App} path="/">
    <DefaultRoute handler={Home} />
    <Route name={RouteConstants.LOGIN} path="/login" handler={LoginRegister} />
    <Route name={RouteConstants.USER} path="/user" handler={User} />
    <NotFoundRoute handler={NotFound} />
  </Route>
);

Router.run(routes, function (Handler) {
  React.render(<Handler />, document.getElementById('main-container'));
  React.render(<Footer />, document.getElementById('footer-container'));
});
