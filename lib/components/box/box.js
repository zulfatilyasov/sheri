'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _materialUiLibPaper = require('material-ui/lib/paper');

var _materialUiLibPaper2 = _interopRequireDefault(_materialUiLibPaper);

var _materialUiLibMixinsStylePropable = require('material-ui/lib/mixins/style-propable');

var _materialUiLibMixinsStylePropable2 = _interopRequireDefault(_materialUiLibMixinsStylePropable);

var Box = _react2['default'].createClass({
  displayName: 'Box',

  mixins: [_materialUiLibMixinsStylePropable2['default']],

  render: function render() {
    var boxStyle = this.mergeStyles({ padding: 24 }, this.props.style);

    return _react2['default'].createElement(
      _materialUiLibPaper2['default'],
      { className: this.props.className, zDepth: 1 },
      _react2['default'].createElement(
        'div',
        { className: 'box' },
        this.props.title ? _react2['default'].createElement(
          'div',
          { className: 'title' },
          this.props.title
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