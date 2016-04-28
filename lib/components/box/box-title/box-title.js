'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _materialUiLibIconButton = require('material-ui/lib/icon-button');

var _materialUiLibIconButton2 = _interopRequireDefault(_materialUiLibIconButton);

var _materialUiLibSvgIconsHardwareKeyboardBackspace = require('material-ui/lib/svg-icons/hardware/keyboard-backspace');

var _materialUiLibSvgIconsHardwareKeyboardBackspace2 = _interopRequireDefault(_materialUiLibSvgIconsHardwareKeyboardBackspace);

require('./box-title.styl');

var BoxTitle = (function (_React$Component) {
  _inherits(BoxTitle, _React$Component);

  function BoxTitle() {
    _classCallCheck(this, BoxTitle);

    _get(Object.getPrototypeOf(BoxTitle.prototype), 'constructor', this).apply(this, arguments);
  }

  _createClass(BoxTitle, [{
    key: 'render',
    value: function render() {
      return _react2['default'].createElement(
        'div',
        { className: 'box-title' },
        _react2['default'].createElement(
          _materialUiLibIconButton2['default'],
          {
            iconStyle: { fill: '#fff' },
            onClick: this.props.onGoBack || void 0,
            touch: true
          },
          _react2['default'].createElement(_materialUiLibSvgIconsHardwareKeyboardBackspace2['default'], null)
        ),
        _react2['default'].createElement(
          'div',
          { className: 'title-text' },
          this.props.title
        ),
        this.props.actions ? _react2['default'].createElement(
          'div',
          { className: 'title-actions' },
          this.props.actions
        ) : ''
      );
    }
  }]);

  return BoxTitle;
})(_react2['default'].Component);

exports['default'] = BoxTitle;
module.exports = exports['default'];