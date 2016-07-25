'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

var _reactRouter2 = _interopRequireDefault(_reactRouter);

var _Drawer = require('material-ui/Drawer');

var _Drawer2 = _interopRequireDefault(_Drawer);

var _AppCanvas = require('material-ui/AppCanvas');

var _AppCanvas2 = _interopRequireDefault(_AppCanvas);

var _topNav = require('../top-nav/top-nav');

var _topNav2 = _interopRequireDefault(_topNav);

var _sideMenu = require('../side-menu/side-menu');

var _sideMenu2 = _interopRequireDefault(_sideMenu);

var _normalize = require('normalize.css');

var _normalize2 = _interopRequireDefault(_normalize);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var getWidth = function getWidth() {
  return Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
};

var Master = _react2.default.createClass({
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
    return _react2.default.createElement(
      _AppCanvas2.default,
      null,
      _react2.default.createElement(
        'div',
        { className: pusherClass },
        _react2.default.createElement(_topNav2.default, { onLock: this.props.onLock,
          onChat: this.props.onChat,
          onNotifcationsClick: this.props.onNotifcationsClick,
          newNotificationCount: this.props.newNotificationCount,
          profileImageUrl: this.props.profileImageUrl,
          logo: this.props.logo,
          controls: this.props.controls,
          onProfileClick: this.props.onProfileClick,
          userFirstName: this.props.user.firstName,
          userLastName: this.props.user.lastName,
          onMenuIconClick: this.handleMenuIconClick }),
        _react2.default.createElement(_sideMenu2.default, {
          menuItems: this.props.menuItems,
          onMenuChange: this.props.onMenuChange,
          ref: 'sidemenu' }),
        _react2.default.createElement(
          'div',
          { className: 'content' },
          this.props.children
        )
      )
    );
  }
});

exports.default = Master;
module.exports = exports['default'];