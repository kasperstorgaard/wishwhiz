var React = require('react');

var Home = React.createClass({

  render: function() {
    return (
      <section id="mainstage">
        <div className="container">
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
      </section>
    );
  }

});

module.exports = Home;
