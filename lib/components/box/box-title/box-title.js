'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _IconButton = require('material-ui/IconButton');

var _IconButton2 = _interopRequireDefault(_IconButton);

var _keyboardArrowLeft = require('material-ui/svg-icons/hardware/keyboard-arrow-left');

var _keyboardArrowLeft2 = _interopRequireDefault(_keyboardArrowLeft);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var BoxTitle = function (_React$Component) {
  _inherits(BoxTitle, _React$Component);

  function BoxTitle() {
    _classCallCheck(this, BoxTitle);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(BoxTitle).apply(this, arguments));
  }

  _createClass(BoxTitle, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: 'box-title' },
        !this.props.hideBackButton ? _react2.default.createElement(
          _IconButton2.default,
          {
            iconStyle: { fill: '#fff' },
            onClick: this.props.onGoBack || void 0,
            touch: true
          },
          _react2.default.createElement(_keyboardArrowLeft2.default, null)
        ) : null,
        _react2.default.createElement(
          'div',
          { className: (this.props.hideBackButton ? 'pad' : '') + ' title-text' },
          this.props.title
        ),
        this.props.actions ? _react2.default.createElement(
          'div',
          { className: 'title-actions' },
          this.props.actions
        ) : null
      );
    }
  }]);

  return BoxTitle;
}(_react2.default.Component);

exports.default = BoxTitle;
module.exports = exports['default'];