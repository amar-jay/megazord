"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getDateNow = exports.toUTC = exports.formatDate = exports.to_YYYY_MM_DD = void 0;
const to_YYYY_MM_DD = (date) => {
    return (0, exports.formatDate)(new Date(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate()).toISOString());
};
exports.to_YYYY_MM_DD = to_YYYY_MM_DD;
const formatDate = (date) => {
    return date.split('T')[0].trim();
};
exports.formatDate = formatDate;
const toUTC = (date) => {
    return new Date(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate());
};
exports.toUTC = toUTC;
const getDateNow = () => {
    const now = new Date();
    return new Date(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate());
};
exports.getDateNow = getDateNow;
//# sourceMappingURL=dateFormatter.js.map