"use strict";

var React = require('react');

var MenuButton = React.createClass({
  displayName: "MenuButton",

  render: function render() {
    return React.createElement(
      "div",
      { className: "menu-button", onClick: this.props.onClick },
      React.createElement("i", { className: "icon icon-menu" })
    );
  }
});

module.exports = MenuButton;