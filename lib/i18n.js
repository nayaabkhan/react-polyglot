'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _nodePolyglot = require('node-polyglot');

var _nodePolyglot2 = _interopRequireDefault(_nodePolyglot);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// Provider root component

var I18n = function (_Component) {
  _inherits(I18n, _Component);

  function I18n(props) {
    _classCallCheck(this, I18n);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(I18n).call(this, props));

    _this._polyglot = new _nodePolyglot2.default({
      locale: props.locale,
      phrases: props.messages
    });
    return _this;
  }

  _createClass(I18n, [{
    key: 'getChildContext',
    value: function getChildContext() {
      return { t: this._polyglot.t.bind(this._polyglot) };
    }
  }, {
    key: 'render',
    value: function render() {
      var children = this.props.children;
      return _react2.default.Children.only(children);
    }
  }]);

  return I18n;
}(_react.Component);

exports.default = I18n;


I18n.propTypes = {
  locale: _react2.default.PropTypes.string.isRequired,
  messages: _react2.default.PropTypes.object.isRequired,
  children: _react2.default.PropTypes.element.isRequired
};

I18n.childContextTypes = {
  t: _react2.default.PropTypes.func.isRequired
};