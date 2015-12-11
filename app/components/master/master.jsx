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

var getWidth = function () {
  return Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
};

var Master = React.createClass({
  mixins: [State],
  getInitialState: function () {
    return {
      menuClosed: getWidth() < 1366
    };
  },
  handleMenuIconClick: function () {
    this.refs.sidemenu.toggle();
    return this.setState({
      menuClosed: !this.state.menuClosed
    });
  },
  getHandlerKey: function () {
    var childDepth = 1;
    var childName = this.getRoutes()[childDepth].name;
    var id = this.getParams().id;
    return childName + id;
  },
  render: function () {
    var pusherClass = this.state.menuClosed ? 'pusher menu-closed' : 'pusher menu-open';
    return (
      <AppCanvas>
        <div className={pusherClass}>
          <TopNav onLock={this.props.onLock}
                  onChat={this.props.onChat}
                  profileImageUrl={this.props.profileImageUrl}
                  logo={this.props.logo}
                  controls={this.props.controls}
                  onProfileClick={this.props.onProfileClick}
                  userFirstName={this.props.user.firstName}
                  userLastName={this.props.user.lastName}
                  onMenuIconClick={this.handleMenuIconClick}/>

          <SideMenu
            menuItems={this.props.menuItems}
            onMenuChange={this.props.onMenuChange}
            ref="sidemenu"/>

          <div className="content">
            {this.props.children}
          </div>
        </div>
      </AppCanvas>
    );
  }
});

module.exports = Master;
