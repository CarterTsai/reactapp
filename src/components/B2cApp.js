'use strict';

var React = require('react/addons');
var ReactTransitionGroup = React.addons.TransitionGroup;
var Router = require('react-router');
var { Route, RouteHandler, Link } = Router;

// CSS
require('normalize.css');
require('../styles/main.css');

var imageURL = require('../images/yeoman.png');

var B2cApp = React.createClass({
    contextTypes: {
        router: React.PropTypes.func
    },
    render: function() {
        return (
          <div className='main'>
          <ul>
            <li><Link to="page1">page1</Link></li>
            <li><Link to="page2">page2</Link></li>
          </ul>
            <ReactTransitionGroup transitionName="fade">
                <RouteHandler key={name}/>
            </ReactTransitionGroup>
          </div>
        );
    }
});

module.exports = B2cApp;
