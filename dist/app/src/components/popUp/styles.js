"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.popUpStyles = void 0;
const react_native_1 = require("react-native");
const colors_1 = require("../../themes/colors");
const size_1 = require("../../themes/size");
exports.popUpStyles = react_native_1.StyleSheet.create({
    text: {
        margin: size_1.sSmall,
        textAlign: 'center',
    },
    red: {
        textAlign: 'center',
        color: colors_1.red,
    },
    divider: {
        marginTop: size_1.sNormal,
        marginBottom: size_1.sNormal,
        margin: size_1.sSmall,
        backgroundColor: colors_1.blue,
        height: 1,
    },
    buttonsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    lightGrey: {
        backgroundColor: colors_1.lightGrey,
    },
});
//# sourceMappingURL=styles.js.map