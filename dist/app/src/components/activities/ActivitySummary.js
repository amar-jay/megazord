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
const react_native_elements_1 = require("react-native-elements");
const ActivitySummary = ({ activity }) => {
    return (<>
      <react_native_elements_1.ListItem.Content>
        <react_native_elements_1.ListItem.Title>{activity.activityName}</react_native_elements_1.ListItem.Title>
        <react_native_elements_1.ListItem.Subtitle>{activity.startDate}</react_native_elements_1.ListItem.Subtitle>
      </react_native_elements_1.ListItem.Content>
    </>);
};
exports.default = (0, react_1.memo)(ActivitySummary);
//# sourceMappingURL=ActivitySummary.js.map