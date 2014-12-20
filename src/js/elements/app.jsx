var React = require('react');
var AddUser = require('./user/add-user.js');
var UsersList = require('./user/users-list.js');
var Header = require('./shared/header.js');

var APP = React.createClass({
  render: function() {
    return (
      <div>
        <Header />
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
