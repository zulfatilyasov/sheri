'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

var _reactRouter2 = _interopRequireDefault(_reactRouter);

var _materialUi = require('material-ui');

var _topNavTopNav = require('../top-nav/top-nav');

var _topNavTopNav2 = _interopRequireDefault(_topNavTopNav);

var _sideMenuSideMenu = require('../side-menu/side-menu');

var _sideMenuSideMenu2 = _interopRequireDefault(_sideMenuSideMenu);

var _normalizeCss = require('normalize.css');

var _normalizeCss2 = _interopRequireDefault(_normalizeCss);

var getWidth = function getWidth() {
  return Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
};

var Master = _react2['default'].createClass({
  displayName: 'Master',

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
    return _react2['default'].createElement(
      _materialUi.AppCanvas,
      null,
      _react2['default'].createElement(
        'div',
        { className: pusherClass },
        _react2['default'].createElement(_topNavTopNav2['default'], { onLock: this.props.onLock,
          onChat: this.props.onChat,
          profileImageUrl: this.props.profileImageUrl,
          logo: this.props.logo,
          controls: this.props.controls,
          onProfileClick: this.props.onProfileClick,
          userFirstName: this.props.user.firstName,
          userLastName: this.props.user.lastName,
          onMenuIconClick: this.handleMenuIconClick }),
        _react2['default'].createElement(_sideMenuSideMenu2['default'], {
          menuItems: this.props.menuItems,
          onMenuChange: this.props.onMenuChange,
          ref: 'sidemenu' }),
        _react2['default'].createElement(
          'div',
          { className: 'content' },
          this.props.children
        )
      )
    );
  }
});

exports['default'] = Master;
module.exports = exports['default'];