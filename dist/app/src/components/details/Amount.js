"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_native_1 = require("react-native");
const react_native_elements_1 = require("react-native-elements");
const colors_1 = require("../../themes/colors");
const icons_1 = require("../../themes/icons");
const styles_1 = require("./styles");
const Amount = ({ amount, currency }) => (<react_native_1.View style={(styles_1.detailsStyle.rowCenter, styles_1.detailsStyle.center)}>
    <react_native_elements_1.Icon name="money-bill" type="font-awesome-5" size={icons_1.iMedium} color={colors_1.dollar}/>
    <react_native_elements_1.Text>
      {amount} {currency}
    </react_native_elements_1.Text>
  </react_native_1.View>);
exports.default = Amount;
//# sourceMappingURL=Amount.js.map