"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importStar(require("react"));
const react_native_1 = require("react-native");
const react_native_elements_1 = require("react-native-elements");
const colors_1 = require("../../themes/colors");
const icons_1 = require("../../themes/icons");
const size_1 = require("../../themes/size");
const Error = ({ text }) => (<react_native_1.View style={styles.container}>
    <react_native_elements_1.Icon name="exclamation-circle" type="font-awesome-5" size={icons_1.iLarge} color={colors_1.red}/>
    <react_native_elements_1.Text style={styles.center}>{text}</react_native_elements_1.Text>
  </react_native_1.View>);
const styles = react_native_1.StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    },
    center: {
        margin: size_1.sMedium,
        marginTop: size_1.sNormal,
        textAlign: 'center',
        color: colors_1.black,
    },
});
exports.default = (0, react_1.memo)(Error);
//# sourceMappingURL=Error.js.map