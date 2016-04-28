'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _menuItem = require('material-ui/lib/menus/menu-item');

var _menuItem2 = _interopRequireDefault(_menuItem);

var _leftNav = require('material-ui/lib/left-nav');

var _leftNav2 = _interopRequireDefault(_leftNav);

var _default = require('../../themes/default.js');

var _default2 = _interopRequireDefault(_default);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var debounce = function debounce(func, wait, immediate) {
  var timeout;
  timeout = void 0;
  return function () {
    var args, callNow, context, later;
    context = this;
    args = arguments;
    later = function later() {
      timeout = null;
      if (!immediate) {
        func.apply(context, args);
      }
    };
    callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) {
      func.apply(context, args);
    }
  };
};

var getWidth = function getWidth() {
  return Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
};

var threshold = 2560;

var SideMenu = _react2.default.createClass({
  displayName: 'SideMenu',


  getInitialState: function getInitialState() {
    var isOpen = getWidth() > threshold;
    return {
      isOpen: isOpen,
      isDocked: isOpen
    };
  },
  checkMenuShouldOpen: function checkMenuShouldOpen() {
    var w = getWidth();
    if (w <= threshold && this.state.isOpen) {
      this.setState({
        isDocked: false,
        isOpen: false
      });
    }
    if (w > threshold && !this.state.isOpen) {
      this.setState({
        isDocked: true,
        isOpen: true
      });
    }
  },
  componentDidMount: function componentDidMount() {
    window.onresize = debounce(this.checkMenuShouldOpen, 50);
    this.checkMenuShouldOpen();
  },
  toggle: function toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  },
  handleMenuItemClick: function handleMenuItemClick(route) {
    this.props.onMenuChange(route);
    this.setState({
      isOpen: false
    });
  },
  render: function render() {
    var _this = this;

    var leftNavStyles = {
      top: this.state.isDocked ? 57 : 0,
      width: 220,
      transitionProperty: 'transform',
      fontSize: '14px',
      boxShadow: 'none',
      borderRight: '1px solid',
      borderColor: '#ddd'
    };

    var menuItemStyle = { color: '#fff' };

    return _react2.default.createElement(
      _leftNav2.default,
      {
        disableSwipeToOpen: true,
        open: this.state.isOpen,
        className: 'leftnav',
        onRequestChange: function onRequestChange(open) {
          return _this.setState({ isOpen: open });
        },
        style: leftNavStyles,
        menuItemStyle: menuItemStyle,
        docked: this.state.isDocked },
      this.props.menuItems.map(function (menuItem) {
        return _react2.default.createElement(
          _menuItem2.default,
          { key: menuItem.route, onClick: this.handleMenuItemClick.bind(this, menuItem.route) },
          menuItem.text
        );
      }, this)
    );
  }
});

exports.default = SideMenu;
module.exports = exports['default'];