"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.categories = exports.noCategory = void 0;
const colors_1 = require("../themes/colors");
exports.noCategory = {
    label: 'No category',
    color: colors_1.lightGrey,
};
exports.categories = [
    {
        label: 'Food',
        color: colors_1.red,
    },
    {
        label: 'Home',
        color: colors_1.blue,
    },
    {
        label: 'Tech',
        color: colors_1.green,
    },
    {
        label: 'Other',
        color: colors_1.black,
    },
];
//# sourceMappingURL=categoryConstants.js.map