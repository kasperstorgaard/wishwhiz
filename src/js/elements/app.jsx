var React = require('react');
var AddUser = require('./users/add-user.js');
var UsersList = require('./users/users-list.js');

var APP = React.createClass({
  render: function() {
    return (
      <div>
        <div className="navbar navbar-default navbar-fixed-top">
          <div className="container">
            <div className="navbar-header">
              <a href="../" className="navbar-brand">Wishwhiz</a>
            </div>
            <div className="navbar-collapse collapse">
              <ul className="nav navbar-nav">
                <li>
                  <a href="">action 1</a>
                </li>
                <li>
                  <a href="">action 2</a>
                </li>
                <li>
                  <a href="">action 3</a>
                </li>
              </ul>
              <ul className="nav navbar-nav navbar-right">
                <li>
                  <a href="">login</a>
                </li>
                <li>
                  <a href="">stuff</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="section" id="mainstage">
            <div className="row">
              <div className="col-lg-12">
                <div className="jumbotron">
                  <h1>Jumbotron</h1>
                  <p>This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
                  <p><a className="btn btn-primary btn-lg">Learn more</a></p>
                </div>
              </div>
            </div>
          </div>
          <AddUser />
          <hr />
          <UsersList />
        </div>
      </div>
    );
  }
});
module.exports = APP;
