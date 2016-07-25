'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Paper = require('material-ui/Paper');

var _Paper2 = _interopRequireDefault(_Paper);

var _styles = require('material-ui/utils/styles');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Box = _react2.default.createClass({
  displayName: 'Box',

  render: function render() {
    var boxStyle = (0, _styles.mergeStyles)({ padding: 24 }, this.props.style);

    return _react2.default.createElement(
      _Paper2.default,
      { className: this.props.className, zDepth: 1 },
      _react2.default.createElement(
        'div',
        { className: 'box' },
        this.props.title ? _react2.default.createElement(
          'div',
          { className: 'title' },
          this.props.title
        ) : null,
        _react2.default.createElement(
          'div',
          { style: boxStyle, className: 'box-body' },
          this.props.children
        ),
        this.props.footer ? _react2.default.createElement(
          'div',
          { className: 'footer' },
          this.props.footer
        ) : null
      )
    );
  }
});

exports.default = Box;
module.exports = exports['default'];