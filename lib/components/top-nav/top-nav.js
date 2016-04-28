'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _menuButton = require('../menu-button/menu-button');

var _menuButton2 = _interopRequireDefault(_menuButton);

var _avatar = require('material-ui/lib/avatar');

var _avatar2 = _interopRequireDefault(_avatar);

var _badge = require('material-ui/lib/badge');

var _badge2 = _interopRequireDefault(_badge);

var _iconButton = require('material-ui/lib/icon-button');

var _iconButton2 = _interopRequireDefault(_iconButton);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TopNav = _react2.default.createClass({
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

    return _react2.default.createElement(
      'nav',
      { className: 'fixed-nav-bar' },
      _react2.default.createElement(_menuButton2.default, { onClick: this.props.onMenuIconClick }),
      this.props.logo ? this.props.logo : null,
      _react2.default.createElement(
        'div',
        { className: 'exit' },
        _react2.default.createElement(_iconButton2.default, { style: style,
          onClick: this.props.onLock,
          iconStyle: iconStyle,
          iconClassName: 'icon icon-lock',
          tooltip: 'Log out' })
      ),
      _react2.default.createElement(
        _iconButton2.default,
        { style: iconButtonStyle,
          onClick: this.props.onProfileClick,
          className: 'avatar',
          tooltip: this.userName },
        _react2.default.createElement(_avatar2.default, { src: this.props.profileImageUrl })
      ),
      _react2.default.createElement(
        'div',
        { className: 'chat' },
        _react2.default.createElement(_iconButton2.default, { style: style,
          onClick: this.props.onChat,
          iconStyle: iconStyle,
          iconClassName: 'icon icon-comment' })
      ),
      _react2.default.createElement(
        'div',
        { className: 'bell' },
        this.props.newNotificationCount ? _react2.default.createElement(
          'div',
          { className: 'badge' },
          this.props.newNotificationCount
        ) : null,
        _react2.default.createElement(_iconButton2.default, { style: style,
          onClick: this.props.onNotifcationsClick,
          iconStyle: iconStyle,
          iconClassName: 'icon icon-notifications' })
      ),
      this.props.controls ? _react2.default.createElement(
        'div',
        { className: 'controls' },
        this.props.controls
      ) : null
    );
  }
});

exports.default = TopNav;
module.exports = exports['default'];