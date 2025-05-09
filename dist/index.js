"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _reactNative = require("react-native");
var _reactNativeMeasureme = _interopRequireDefault(require("react-native-measureme"));
var _util = require("../util");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
/*
* Draws fully customizable dashed lines vertically or horizontally
*
* @providesModule Dash
*/

const Dash = props => {
  const isRow = (0, _util.isStyleRow)(props.style);
  const length = isRow ? props.width : props.height;
  const n = Math.ceil(length / (props.dashGap + props.dashLength));
  const calculatedDashStyles = (0, _util.getDashStyle)(props);
  let dash = [];
  for (let i = 0; i < n; i++) {
    dash.push(/*#__PURE__*/_react.default.createElement(_reactNative.View, {
      key: i,
      style: [calculatedDashStyles, props.dashStyle]
    }));
  }
  return /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    onLayout: props.onLayout,
    style: [props.style, isRow ? styles.row : styles.column]
  }, dash);
};
const styles = _reactNative.StyleSheet.create({
  row: {
    flexDirection: 'row'
  },
  column: {
    flexDirection: 'column'
  }
});
Dash.propTypes = {
  style: _propTypes.default.object,
  dashGap: _propTypes.default.number.isRequired,
  dashLength: _propTypes.default.number.isRequired,
  dashThickness: _propTypes.default.number.isRequired,
  dashColor: _propTypes.default.string,
  dashStyle: _propTypes.default.object
};
Dash.defaultProps = {
  dashGap: 2,
  dashLength: 4,
  dashThickness: 2,
  dashColor: 'black'
};
var _default = exports.default = (0, _reactNativeMeasureme.default)(Dash);
