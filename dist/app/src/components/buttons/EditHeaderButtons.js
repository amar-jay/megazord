"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_native_1 = require("react-native");
const size_1 = require("../../themes/size");
const BackButton_1 = __importDefault(require("./BackButton"));
const EditButton_1 = __importDefault(require("./EditButton"));
const EditHeaderButtons = ({ handleBackButton, handleEditButton, }) => (<react_native_1.View style={styles.container}>
    <BackButton_1.default onPress={handleBackButton}/>
    <EditButton_1.default onPress={handleEditButton}/>
  </react_native_1.View>);
const styles = react_native_1.StyleSheet.create({
    container: {
        margin: size_1.sMedium,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
});
exports.default = EditHeaderButtons;
//# sourceMappingURL=EditHeaderButtons.js.map