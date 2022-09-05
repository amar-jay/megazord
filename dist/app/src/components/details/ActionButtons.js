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
const react_native_1 = require("react-native");
const colors_1 = require("../../themes/colors");
const CancelButton_1 = __importDefault(require("../buttons/CancelButton"));
const DeleteButton_1 = __importDefault(require("../buttons/DeleteButton"));
const ValidateButton_1 = __importDefault(require("../buttons/ValidateButton"));
const DeletePopUp_1 = __importDefault(require("../popUp/DeletePopUp"));
const styles_1 = require("./styles");
const ActionButtons = ({ editable, handleCancel, handleValidate, disabledValidate, handleUpdate, disabledUpdate, handleDelete, }) => {
    const [visible, setVisible] = (0, react_1.useState)(false);
    const closePopUp = () => setVisible(false);
    const displayPopUp = () => setVisible(true);
    return editable ? (<react_native_1.View style={styles_1.detailsStyle.buttonsContainer}>
      <CancelButton_1.default onPress={handleCancel}/>
      <ValidateButton_1.default onPress={handleValidate} color={colors_1.blue} disabled={disabledValidate}/>
    </react_native_1.View>) : (<react_native_1.View style={styles_1.detailsStyle.buttonsContainer}>
      <DeleteButton_1.default onPress={displayPopUp}/>
      <ValidateButton_1.default onPress={handleUpdate} disabled={disabledUpdate}/>
      <DeletePopUp_1.default isVisible={visible} onBackdropPress={closePopUp} handleCancel={closePopUp} handleValidate={() => {
            handleDelete();
            closePopUp();
        }}/>
    </react_native_1.View>);
};
exports.default = ActionButtons;
//# sourceMappingURL=ActionButtons.js.map