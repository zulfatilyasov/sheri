'use strict';

var React = require('react');
var Router = require('react-router');
var mui = require('material-ui');
var MenuItem = mui.MenuItem;
var LeftNav = mui.LeftNav;
var AppCanvas = mui.AppCanvas;
var TopNav = require('../top-nav/top-nav');
var SideMenu = require('../side-menu/side-menu');
// var RouteHandler = Router.RouteHandler;
var normalizeCss = require('normalize.css');
var ReactCSSTransitionGroup = React.addons.CSSTransitionGroup;
var State = require('react-router').State;

var getWidth = function getWidth() {
  return Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
};

var Master = React.createClass({
  displayName: 'Master',

  mixins: [State],
  getInitialState: function getInitialState() {
    return {
      menuClosed: getWidth() < 1366
    };
  },
  handleMenuIconClick: function handleMenuIconClick() {
    this.refs.sidemenu.toggle();
    return this.setState({
      menuClosed: !this.state.menuClosed
    });
  },
  getHandlerKey: function getHandlerKey() {
    var childDepth = 1;
    var childName = this.getRoutes()[childDepth].name;
    var id = this.getParams().id;
    return childName + id;
  },
  render: function render() {
    var pusherClass = this.state.menuClosed ? 'pusher menu-closed' : 'pusher menu-open';
    return React.createElement(
      AppCanvas,
      null,
      React.createElement(
        'div',
        { className: pusherClass },
        React.createElement(TopNav, { onLock: this.props.onLock,
          onChat: this.props.onChat,
          logo: this.props.logo,
          controls: this.props.controls,
          onProfileClick: this.props.onProfileClick,
          userFirstName: this.props.user.firstName,
          userLastName: this.props.user.lastName,
          onMenuIconClick: this.handleMenuIconClick }),
        React.createElement(SideMenu, {
          menuItems: this.props.menuItems,
          onMenuChange: this.props.onMenuChange,
          ref: 'sidemenu' }),
        React.createElement(
          'div',
          { className: 'content' },
          this.props.children
        )
      )
    );
  }
});

module.exports = Master;