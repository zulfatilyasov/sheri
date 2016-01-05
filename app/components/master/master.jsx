import React from 'react'
import Router from 'react-router'
import { LeftNav, AppCanvas } from 'material-ui';
import TopNav from '../top-nav/top-nav'
import SideMenu from '../side-menu/side-menu'
import normalizeCss from 'normalize.css'
import State from 'react-router'

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

export default Master;