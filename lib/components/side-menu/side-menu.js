'use strict';

var React = require('react');
var mui = require('material-ui');
var MenuItem = require('material-ui/lib/menus/menu-item');
var LeftNav = require('material-ui/lib/left-nav');
var ThemeManager = mui.Styles.ThemeManager;
var DefaultTheme = require('../../themes/default.js');

var debounce = function debounce(func, wait, immediate) {
  var timeout;
  timeout = void 0;
  return function () {
    var args, callNow, context, later;
    context = this;
    args = arguments;
    later = function () {
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

var SideMenu = React.createClass({
  displayName: 'SideMenu',

  getChildContext: function getChildContext() {
    return {
      muiTheme: ThemeManager.getMuiTheme(DefaultTheme)
    };
  },

  childContextTypes: {
    muiTheme: React.PropTypes.object
  },

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

    return React.createElement(
      LeftNav,
      {
        disableSwipeToOpen: true,
        open: this.state.isOpen,
        className: 'leftnav',
        onRequestChange: function (open) {
          return _this.setState({ isOpen: open });
        },
        style: leftNavStyles,
        menuItemStyle: menuItemStyle,
        docked: this.state.isDocked },
      this.props.menuItems.map(function (menuItem) {
        return React.createElement(
          MenuItem,
          { key: menuItem.route, onClick: this.handleMenuItemClick.bind(this, menuItem.route) },
          menuItem.text
        );
      }, this)
    );
  }
});

module.exports = SideMenu;