'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _box = require('../box');

var _box2 = _interopRequireDefault(_box);

var _boxTitle = require('../box-title/box-title');

var _boxTitle2 = _interopRequireDefault(_boxTitle);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TitledBox = function (_React$Component) {
  _inherits(TitledBox, _React$Component);

  function TitledBox(props, context) {
    _classCallCheck(this, TitledBox);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(TitledBox).call(this, props, context));

    _this.handleGoBack = function () {
      return _this.context.router && _this.context.router.goBack();
    };

    return _this;
  }

  _createClass(TitledBox, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _box2.default,
        {
          className: this.props.className,
          title: _react2.default.createElement(_boxTitle2.default, {
            title: this.props.title,
            style: this.props.titleStyle,
            hideBackButton: this.props.hideBackButton,
            actions: this.props.actions,
            onGoBack: this.props.onGoBack || this.handleGoBack
          }),
          style: this.props.style
        },
        this.props.children
      );
    }
  }]);

  return TitledBox;
}(_react2.default.Component);

TitledBox.contextTypes = {
  router: _react2.default.PropTypes.object.isRequired
};
exports.default = TitledBox;
module.exports = exports['default'];