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
const aws_amplify_1 = require("aws-amplify");
const react_1 = __importStar(require("react"));
const LogoutButton_1 = __importDefault(require("../buttons/LogoutButton"));
const SignOutPopUp_1 = __importDefault(require("../popUp/SignOutPopUp"));
const LogoutHeaderComponent = () => {
    const [visible, setVisible] = (0, react_1.useState)(false);
    async function signOut() {
        await aws_amplify_1.Auth.signOut();
    }
    return (<>
      <LogoutButton_1.default onPress={() => setVisible(true)}/>
      <SignOutPopUp_1.default isVisible={visible} onBackdropPress={() => setVisible(false)} handleCancel={() => setVisible(false)} handleValidate={signOut}/>
    </>);
};
exports.default = (0, react_1.memo)(LogoutHeaderComponent);
//# sourceMappingURL=LogoutHeaderComponent.js.map