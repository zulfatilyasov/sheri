var React = require('react');
var mui = require('material-ui');
var MenuItem = require('material-ui/lib/menus/menu-item');
var LeftNav = require('material-ui/lib/left-nav');
var ThemeManager = mui.Styles.ThemeManager;
var DefaultTheme = require('../../themes/default.js');

var debounce = function(func, wait, immediate) {
  var timeout;
  timeout = void 0;
  return function() {
    var args, callNow, context, later;
    context = this;
    args = arguments;
    later = function() {
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

var getWidth = function() {
  return Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
};

var threshold = 2560;

var SideMenu = React.createClass({
  getChildContext: function() {
    return {
      muiTheme: ThemeManager.getMuiTheme(DefaultTheme)
    };
  },

  childContextTypes: {
    muiTheme: React.PropTypes.object
  },

  getInitialState: function() {
    var isOpen = getWidth() > threshold;
    return {
      isOpen: isOpen,
      isDocked: isOpen
    };
  },
  checkMenuShouldOpen: function() {
    var w = getWidth();
    if (w <= threshold && this.state.isOpen) {
      this.setState({
        isDocked: false,
        isOpen: false
      });
      this.refs.menu.close();
    }
    if (w > threshold && !this.state.isOpen) {
      this.setState({
        isDocked: true,
        isOpen: true
      });
      this.refs.menu.open();
    }
  },
  componentDidMount: function() {
    window.onresize = debounce(this.checkMenuShouldOpen, 50);
    this.checkMenuShouldOpen();
  },
  toggle: function() {
    this.refs.menu.toggle();
    this.setState({
      isOpen: !this.state.isOpen
    });
  },
  render: function() {
    var leftNavStyles = {
      top: this.state.isDocked ? 57 : 0,
      width: 220,
      transitionProperty: 'transform',
      fontSize: '14px',
      boxShadow: 'none',
      borderRight: '1px solid',
      borderColor: '#ddd'
    };

    var menuItemStyle = {color: '#fff'};
    return (
      <LeftNav
        disableSwipeToOpen={true}
        onChange={this.props.onMenuChange}
        className="leftnav"
        style={leftNavStyles}
        menuItemStyle={menuItemStyle}
        ref="menu"
        docked={this.state.isDocked}>
          <For each="menuItem" of={this.props.menuItems}> 
            <MenuItem onClick={this.props.onMenuChange.bind(null, menuItem.route)}>{menuItem.text}</MenuItem>
          </For>
      </LeftNav>
    );
  }
});

module.exports = SideMenu;