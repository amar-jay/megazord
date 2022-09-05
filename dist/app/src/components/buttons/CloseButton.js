"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_native_1 = require("react-native");
const react_native_elements_1 = require("react-native-elements");
const colors_1 = require("../../themes/colors");
const size_1 = require("../../themes/size");
const CloseButton = ({ onPress }) => {
    return <react_native_elements_1.Button title="Pay" onPress={onPress} buttonStyle={styles.blue}/>;
};
const styles = react_native_1.StyleSheet.create({
    blue: {
        margin: size_1.sMedium,
        paddingLeft: size_1.sMedium,
        paddingRight: size_1.sMedium,
        backgroundColor: colors_1.blue,
    },
});
exports.default = CloseButton;
//# sourceMappingURL=CloseButton.js.map