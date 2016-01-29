'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _menuButtonMenuButton = require('../menu-button/menu-button');

var _menuButtonMenuButton2 = _interopRequireDefault(_menuButtonMenuButton);

var _materialUiLibAvatar = require('material-ui/lib/avatar');

var _materialUiLibAvatar2 = _interopRequireDefault(_materialUiLibAvatar);

var _materialUiLibBadge = require('material-ui/lib/badge');

var _materialUiLibBadge2 = _interopRequireDefault(_materialUiLibBadge);

var _materialUiLibIconButton = require('material-ui/lib/icon-button');

var _materialUiLibIconButton2 = _interopRequireDefault(_materialUiLibIconButton);

var TopNav = _react2['default'].createClass({
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

    return _react2['default'].createElement(
      'nav',
      { className: 'fixed-nav-bar' },
      _react2['default'].createElement(_menuButtonMenuButton2['default'], { onClick: this.props.onMenuIconClick }),
      this.props.logo ? this.props.logo : '',
      _react2['default'].createElement(
        'div',
        { className: 'exit' },
        _react2['default'].createElement(_materialUiLibIconButton2['default'], { style: style,
          onClick: this.props.onLock,
          iconStyle: iconStyle,
          iconClassName: 'icon icon-lock',
          tooltip: 'Log out' })
      ),
      _react2['default'].createElement(
        _materialUiLibIconButton2['default'],
        { style: iconButtonStyle,
          onClick: this.props.onProfileClick,
          className: 'avatar',
          tooltip: this.userName },
        _react2['default'].createElement(_materialUiLibAvatar2['default'], { src: this.props.profileImageUrl })
      ),
      _react2['default'].createElement(
        'div',
        { className: 'chat' },
        _react2['default'].createElement(_materialUiLibIconButton2['default'], { style: style,
          onClick: this.props.onChat,
          iconStyle: iconStyle,
          iconClassName: 'icon icon-comment' })
      ),
      _react2['default'].createElement(
        'div',
        { className: 'notifications' },
        this.props.newNotificationCount ? _react2['default'].createElement(
          'div',
          { className: 'badge' },
          this.props.newNotificationCount
        ) : '',
        _react2['default'].createElement(_materialUiLibIconButton2['default'], { style: style,
          onClick: this.props.onNotifcationsClick,
          iconStyle: iconStyle,
          iconClassName: 'icon icon-notifications' })
      ),
      this.props.controls ? _react2['default'].createElement(
        'div',
        { className: 'controls' },
        this.props.controls
      ) : ''
    );
  }
});

exports['default'] = TopNav;
module.exports = exports['default'];