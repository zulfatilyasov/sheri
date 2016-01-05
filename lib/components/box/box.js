'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _materialUi = require('material-ui');

var _materialUiLibMixinsStylePropable = require('material-ui/lib/mixins/style-propable');

var _materialUiLibMixinsStylePropable2 = _interopRequireDefault(_materialUiLibMixinsStylePropable);

var Box = _react2['default'].createClass({
  displayName: 'Box',

  mixins: [_materialUiLibMixinsStylePropable2['default']],

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

      boxMenu = _react2['default'].createElement(
        'div',
        { className: 'tools' },
        _react2['default'].createElement(_materialUi.IconButton, {
          iconStyle: iconStyle,
          style: style,
          onClick: this.props.onBoxMenuClick,
          iconClassName: 'icon-settings' })
      );
    }

    var boxControls = '';
    if (this.props.boxControls) {
      boxControls = _react2['default'].createElement(
        'div',
        { className: 'tools' },
        this.props.boxControls
      );
    }

    // var boxStyle = {
    //   padding: this.props.contentPadding || 24,
    //   paddingBottom: this.props.contentPadding || 24
    //   paddingBottom: this.props.paddingTop || 24
    // };

    var boxStyle = this.mergeAndPrefix({ padding: 24 }, this.props.style);

    return _react2['default'].createElement(
      _materialUi.Paper,
      { className: this.props.className, zDepth: 1 },
      _react2['default'].createElement(
        'div',
        { className: 'box' },
        this.props.title ? _react2['default'].createElement(
          'div',
          { className: 'title' },
          _react2['default'].createElement(
            'div',
            { className: 'title-text' },
            this.props.titleIcon ? _react2['default'].createElement(_materialUi.FontIcon, { className: "icon " + this.props.titleIcon }) : '',
            this.props.title
          ),
          boxMenu,
          boxControls
        ) : '',
        _react2['default'].createElement(
          'div',
          { style: boxStyle, className: 'box-body' },
          this.props.children
        )
      )
    );
  }
});

exports['default'] = Box;
module.exports = exports['default'];