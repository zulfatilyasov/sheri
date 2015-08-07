'use strict';

var React = require('react');

var _require = require('material-ui');

var FontIcon = _require.FontIcon;
var Paper = _require.Paper;
var IconButton = _require.IconButton;

var Box = React.createClass({
  displayName: 'Box',

  render: function render() {
    var boxMenu = '';
    if (this.props.showBoxMenu) {
      var iconStyle = {
        color: '#fff',
        fontSize: 20
      };

      var style = {
        padding: 11,
        height: 40,
        width: 40
      };

      boxMenu = React.createElement(
        'div',
        { className: 'tools' },
        React.createElement(IconButton, {
          iconStyle: iconStyle,
          style: style,
          onClick: this.props.onBoxMenuClick,
          iconClassName: 'icon-settings' })
      );
    }

    var boxStyle = {
      padding: this.props.contentPadding || 15,
      paddingBottom: this.props.contentPadding || 13
    };

    return React.createElement(
      Paper,
      { className: this.props.className, zDepth: 1 },
      React.createElement(
        'div',
        { className: 'box' },
        this.props.title ? React.createElement(
          'div',
          { className: 'title' },
          React.createElement(
            'div',
            { className: 'title-text' },
            this.props.titleIcon ? React.createElement(FontIcon, { className: "icon " + this.props.titleIcon }) : '',
            this.props.title
          ),
          boxMenu
        ) : '',
        React.createElement(
          'div',
          { style: boxStyle, className: 'box-body' },
          this.props.children
        )
      )
    );
  }
});

module.exports = Box;