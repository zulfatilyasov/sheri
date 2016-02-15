import React from 'react'
import MenuItem from 'material-ui/lib/menus/menu-item'
import LeftNav from 'material-ui/lib/left-nav'
import DefaultTheme from '../../themes/default.js'

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
    }
    if (w > threshold && !this.state.isOpen) {
      this.setState({
        isDocked: true,
        isOpen: true
      });
    }
  },
  componentDidMount: function() {
    window.onresize = debounce(this.checkMenuShouldOpen, 50);
    this.checkMenuShouldOpen();
  },
  toggle: function() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  },
  handleMenuItemClick: function(route) {
    this.props.onMenuChange(route);
    this.setState({
      isOpen: false
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
        open={this.state.isOpen}
        className="leftnav"
        onRequestChange={open => this.setState({isOpen: open})}
        style={leftNavStyles}
        menuItemStyle={menuItemStyle}
        docked={this.state.isDocked}>
          <For each="menuItem" of={this.props.menuItems}> 
            <MenuItem key={menuItem.route} onClick={this.handleMenuItemClick.bind(this, menuItem.route)}>{menuItem.text}</MenuItem>
          </For>
      </LeftNav>
    );
  }
});

export default SideMenu;