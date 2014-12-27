var React = require('react');

var Home = React.createClass({displayName: "Home",

  render: function() {
    return (
      React.createElement("section", {id: "mainstage"}, 
        React.createElement("div", {className: "row"}, 
          React.createElement("div", {className: "col-lg-12"}, 
            React.createElement("div", {className: "jumbotron"}, 
              React.createElement("h1", null, "Jumbotron"), 
              React.createElement("p", null, "This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information."), 
              React.createElement("p", null, React.createElement("a", {className: "btn btn-primary btn-lg"}, "Learn more"))
            )
          )
        )
      )
    );
  }

});

module.exports = Home;
