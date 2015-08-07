'use strict';

var React = require('react');
var Router = require('react-router');
var mui = require('material-ui');
var MenuItem = mui.MenuItem;
var LeftNav = mui.LeftNav;
var AppCanvas = mui.AppCanvas;
var TopNav = require('../top-nav/top-nav');
var SideMenu = require('../side-menu/side-menu');
var DefaultTheme = require('../../themes/default');
var ThemeManager = new mui.Styles.ThemeManager();
var RouteHandler = Router.RouteHandler;
var normalizeCss = require('normalize.css');
var ReactCSSTransitionGroup = React.addons.CSSTransitionGroup;

var getWidth = function getWidth() {
  return Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
};

var Base = React.createClass({
  displayName: 'Base',

  childContextTypes: {
    muiTheme: React.PropTypes.object
  },
  getInitialState: function getInitialState() {
    return {
      menuClosed: getWidth() < 1366
    };
  },
  getChildContext: function getChildContext() {
    return {
      muiTheme: ThemeManager.getCurrentTheme()
    };
  },
  componentWillMount: function componentWillMount() {
    return ThemeManager.setTheme(DefaultTheme);
  },
  handleMenuIconClick: function handleMenuIconClick() {
    this.refs.sidemenu.toggle();
    return this.setState({
      menuClosed: !this.state.menuClosed
    });
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
          logo: this.props.logo,
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
          React.createElement(
            ReactCSSTransitionGroup,
            { transitionName: 'fade' },
            React.createElement(RouteHandler, null)
          )
        )
      )
    );
  }
});

module.exports = Base;