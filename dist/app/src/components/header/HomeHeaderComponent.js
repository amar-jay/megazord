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
const native_1 = require("@react-navigation/native");
const jotai_1 = require("jotai");
const react_1 = __importStar(require("react"));
const Activity_1 = require("../../model/Activity");
const Activity_2 = __importDefault(require("../../state/Activity"));
const Expenses_1 = __importStar(require("../../state/Expenses"));
const HomeButton_1 = __importDefault(require("../buttons/HomeButton"));
const HomeHeaderComponent = () => {
    const [, setActivity] = (0, jotai_1.useAtom)(Activity_2.default);
    const [, setExpenses] = (0, jotai_1.useAtom)(Expenses_1.default);
    const { popToTop } = (0, native_1.useNavigation)();
    return (<HomeButton_1.default onPress={() => {
            popToTop();
            setExpenses(Expenses_1.EMPTY_EXPENSES);
            setActivity(Activity_1.EMPTY_ACTIVITY);
        }}/>);
};
exports.default = (0, react_1.memo)(HomeHeaderComponent);
//# sourceMappingURL=HomeHeaderComponent.js.map