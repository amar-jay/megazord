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
const ActivityDetailsTab = ({ index, setIndex }) => {
    const updateIndex = (selectedIndex) => setIndex(selectedIndex);
    return (<react_native_elements_1.ButtonGroup buttonStyle={styles.lightGrey} selectedButtonStyle={styles.blue} buttons={[
            { element: () => <react_native_elements_1.Text>Expenses</react_native_elements_1.Text> },
            { element: () => <react_native_elements_1.Text>Balance</react_native_elements_1.Text> },
        ]} onPress={updateIndex.bind(this)} selectedIndex={index}/>);
};
const styles = react_native_1.StyleSheet.create({
    lightGrey: {
        backgroundColor: colors_1.lightGrey,
    },
    blue: {
        backgroundColor: colors_1.blue,
    },
});
exports.default = (0, react_1.memo)(ActivityDetailsTab);
//# sourceMappingURL=ActivityDetailsTab.js.map