"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.detailsStyle = void 0;
const react_native_1 = require("react-native");
const colors_1 = require("../../themes/colors");
const size_1 = require("../../themes/size");
exports.detailsStyle = react_native_1.StyleSheet.create({
    backButton: {
        margin: size_1.sMedium,
        marginBottom: 0,
    },
    details: {
        marginTop: size_1.sMedium,
        flex: 1,
        margin: size_1.sMedium,
    },
    subDetails: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        margin: size_1.sMedium,
    },
    center: {
        alignItems: 'center',
        marginBottom: size_1.sNormal,
    },
    blue: {
        color: colors_1.blue,
    },
});
//# sourceMappingURL=styles.js.map