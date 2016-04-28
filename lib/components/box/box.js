'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _paper = require('material-ui/lib/paper');

var _paper2 = _interopRequireDefault(_paper);

var _stylePropable = require('material-ui/lib/mixins/style-propable');

var _stylePropable2 = _interopRequireDefault(_stylePropable);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Box = _react2.default.createClass({
  displayName: 'Box',

  mixins: [_stylePropable2.default],

  render: function render() {
    var boxStyle = this.mergeStyles({ padding: 24 }, this.props.style);

    return _react2.default.createElement(
      _paper2.default,
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
        )
      )
    );
  }
});

exports.default = Box;
module.exports = exports['default'];