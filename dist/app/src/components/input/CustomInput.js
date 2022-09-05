"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_native_1 = require("react-native");
const react_native_elements_1 = require("react-native-elements");
const CustomInput = ({ placeholder, leftIcon, defaultValue, onChangeText, errorMessage, keyboardType, onBlur, onTouchStart, }) => {
    return (<react_native_elements_1.Input placeholder={placeholder} leftIcon={leftIcon} defaultValue={defaultValue} errorMessage={errorMessage} onChangeText={onChangeText} style={styles.alignRight} errorStyle={styles.alignRight} keyboardType={keyboardType} onBlur={onBlur} onTouchStart={onTouchStart}/>);
};
const styles = react_native_1.StyleSheet.create({
    alignRight: {
        textAlign: 'right',
    },
});
exports.default = CustomInput;
//# sourceMappingURL=CustomInput.js.map