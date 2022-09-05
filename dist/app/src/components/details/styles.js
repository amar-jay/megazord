"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.detailsStyle = void 0;
const react_native_1 = require("react-native");
const size_1 = require("../../themes/size");
exports.detailsStyle = react_native_1.StyleSheet.create({
    buttonsContainer: {
        margin: size_1.sMedium,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    center: {
        alignItems: 'center',
        marginBottom: size_1.sNormal,
    },
    rowCenter: {
        flexDirection: 'row',
        alignItems: 'center',
    },
});
//# sourceMappingURL=styles.js.map