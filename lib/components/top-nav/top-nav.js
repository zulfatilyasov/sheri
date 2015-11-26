'use strict';

var React = require('react');
var MenuButton = require('../menu-button/menu-button');
var mui = require('material-ui'),
    Avatar = mui.Avatar,
    IconButton = mui.IconButton;

var TopNav = React.createClass({
  displayName: 'TopNav',

  render: function render() {
    this.userName = this.props.userFirstName + ' ' + this.props.userLastName;
    this.userAbbr = this.props.userFirstName.substr(0, 1) + '' + this.props.userLastName.substr(0, 1);

    var style = {
      padding: '13px'
    };

    var iconStyle = {
      iconHoverColor: '#212121',
      fontSize: '24px',
      color: '#bdbdbd'
    };

    var iconButtonStyle = {
      padding: 0
    };

    return React.createElement(
      'nav',
      { className: 'fixed-nav-bar' },
      React.createElement(MenuButton, { onClick: this.props.onMenuIconClick }),
      this.props.logo ? this.props.logo : '',
      React.createElement(
        'div',
        { className: 'exit' },
        React.createElement(IconButton, { style: style,
          onClick: this.props.onLock,
          iconStyle: iconStyle,
          iconClassName: 'icon icon-lock',
          tooltip: 'Log out' })
      ),
      React.createElement(
        'div',
        { className: 'chat' },
        React.createElement(IconButton, { style: style,
          onClick: this.props.onChat,
          iconStyle: iconStyle,
          iconClassName: 'icon icon-comment' })
      ),
      React.createElement(
        IconButton,
        { style: iconButtonStyle,
          onClick: this.props.onProfileClick,
          className: 'avatar',
          tooltip: this.userName },
        React.createElement(
          Avatar,
          null,
          this.userAbbr
        )
      ),
      this.props.controls ? React.createElement(
        'div',
        { className: 'controls' },
        this.props.controls
      ) : ''
    );
  }
});

module.exports = TopNav;