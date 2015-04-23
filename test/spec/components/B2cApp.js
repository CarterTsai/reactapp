'use strict';

describe('B2cApp', function () {
  var React = require('react/addons');
  var B2cApp, component;

  beforeEach(function () {
    var container = document.createElement('div');
    container.id = 'content';
    document.body.appendChild(container);

    B2cApp = require('components/B2cApp.js');
    component = React.createElement(B2cApp);
  });

  it('should create a new instance of B2cApp', function () {
    expect(component).toBeDefined();
  });
});
