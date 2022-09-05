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
const CustomInput_1 = __importDefault(require("./CustomInput"));
const NameInput = ({ text, onChangeText, onTouchStart, }) => {
    const [error, setError] = (0, react_1.useState)('');
    const handleText = () => {
        text === '' ? setError('Name') : setError('');
    };
    return (<CustomInput_1.default leftIcon={{ type: 'font-awesome-5', name: 'heading' }} placeholder="Name" defaultValue={text} onChangeText={onChangeText} onBlur={handleText} onTouchStart={onTouchStart} errorMessage={error}/>);
};
exports.default = NameInput;
//# sourceMappingURL=NameInput.js.map