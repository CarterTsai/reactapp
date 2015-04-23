'use strict';

var B2cApp = require('./B2cApp');
var React = require('react');
var Router = require('react-router');
var Route = Router.Route;

var React = require('react/addons');
var ReactTransitionGroup = React.addons.TransitionGroup;

var content = document.getElementById('content');

var page2 = React.createClass({
  render: function() {
    return (
      <div>
          <h1> Hello </h1>
      </div>
    );
  }
});

var page1 = React.createClass({
  render: function() {
    return (
      <div>
          <h1> Welcome </h1>
      </div>
    );
  }
});

var Routes = (
  <Route handler={B2cApp}>
    <Route name="page1" path="/" handler={page1}/>
    <Route name="page2" path="page2" handler={page2}/>
  </Route>
);

Router.run(Routes, function (Handler) {
  React.render(<Handler/>, content);
});
