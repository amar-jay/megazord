"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_native_elements_1 = require("react-native-elements");
const colors_1 = require("../../themes/colors");
const icons_1 = require("../../themes/icons");
const ValidateButton = ({ onPress, disabled, color, }) => {
    return (<react_native_elements_1.Icon reverse name="check" type="font-awesome-5" onPress={onPress} size={icons_1.iSmall} color={color ? color : colors_1.green} disabled={disabled}/>);
};
exports.default = ValidateButton;
//# sourceMappingURL=ValidateButton.js.map