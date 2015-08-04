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

var getWidth = function () {
  return Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
};

var Base = React.createClass({
  childContextTypes: {
    muiTheme: React.PropTypes.object
  },
  getInitialState: function () {
    return {
      menuClosed: getWidth() < 1366,
    };
  },
  getChildContext: function () {
    return {
      muiTheme: ThemeManager.getCurrentTheme()
    };
  },
  componentWillMount: function () {
    return ThemeManager.setTheme(DefaultTheme);
  },
  handleMenuIconClick: function () {
    this.refs.sidemenu.toggle();
    return this.setState({
      menuClosed: !this.state.menuClosed
    });
  },
  render: function () {
    var pusherClass = this.state.menuClosed ? 'pusher menu-closed' : 'pusher menu-open';
    return (
      <AppCanvas>
        <div className={pusherClass}>
          <TopNav onLock={this.props.onLock}
                  logo={this.props.logo}
                  onProfileClick={this.props.onProfileClick}
                  userFirstName={this.props.user.firstName}
                  userLastName={this.props.user.lastName}
                  onMenuIconClick={this.handleMenuIconClick}/>

          <SideMenu
            menuItems={this.props.menuItems}
            onMenuChange={this.props.onMenuChange}
            ref="sidemenu"/>

          <div className="content">
            <RouteHandler />
          </div>
        </div>
      </AppCanvas>
    );
  }
});

module.exports = Base;
