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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importStar(require("react"));
const react_native_1 = require("react-native");
const react_native_elements_1 = require("react-native-elements");
const colors_1 = require("../../themes/colors");
const size_1 = require("../../themes/size");
const HomeHeaderComponent_1 = __importDefault(require("./HomeHeaderComponent"));
const LogoutHeaderComponent_1 = __importDefault(require("./LogoutHeaderComponent"));
const AppHeader = () => {
    return (<react_native_elements_1.Header containerStyle={styles.container} leftComponent={<HomeHeaderComponent_1.default />} rightComponent={<LogoutHeaderComponent_1.default />}/>);
};
const styles = react_native_1.StyleSheet.create({
    container: {
        backgroundColor: colors_1.lightGrey,
        paddingLeft: size_1.sNormal,
        paddingRight: size_1.sNormal,
    },
});
exports.default = (0, react_1.memo)(AppHeader);
//# sourceMappingURL=AppHeader.js.map