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
const react_native_date_picker_1 = __importDefault(require("react-native-date-picker"));
const react_native_elements_1 = require("react-native-elements");
const colors_1 = require("../../themes/colors");
const icons_1 = require("../../themes/icons");
const size_1 = require("../../themes/size");
const dateFormatter_1 = require("../../utils/dateFormatter");
const CancelButton_1 = __importDefault(require("../buttons/CancelButton"));
const ValidateButton_1 = __importDefault(require("../buttons/ValidateButton"));
const CustomDatePicker = ({ date, onChange, }) => {
    const defaultDate = (0, dateFormatter_1.toUTC)(new Date(date));
    const [value, setValue] = (0, react_1.useState)(defaultDate);
    const [datePicker, setDatePicker] = (0, react_1.useState)(false);
    return (<>
      {datePicker ? (<react_native_1.View style={styles.center}>
          <react_native_date_picker_1.default date={value} mode="date" androidVariant="nativeAndroid" textColor={colors_1.blue} onDateChange={selectedDate => setValue((0, dateFormatter_1.toUTC)(selectedDate))}/>
          <react_native_1.View style={styles.datePickerButtons}>
            <CancelButton_1.default onPress={() => {
                setValue(defaultDate);
                setDatePicker(false);
            }}/>
            <ValidateButton_1.default onPress={() => {
                onChange((0, dateFormatter_1.to_YYYY_MM_DD)(value));
                setDatePicker(false);
            }} color={colors_1.blue}/>
          </react_native_1.View>
        </react_native_1.View>) : (<react_native_1.View style={styles.container}>
          <react_native_elements_1.Icon reverse name="calendar" type="font-awesome-5" size={icons_1.iSmall} color={colors_1.blue} onPress={() => setDatePicker(true)}/>
          <react_native_elements_1.Text style={styles.bold}>{(0, dateFormatter_1.to_YYYY_MM_DD)(value)}</react_native_elements_1.Text>
        </react_native_1.View>)}
    </>);
};
const styles = react_native_1.StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        margin: size_1.sNormal,
    },
    bold: {
        fontWeight: 'bold',
    },
    center: {
        alignItems: 'center',
    },
    datePickerButtons: {
        marginTop: size_1.sSmall,
        flexDirection: 'row',
    },
});
exports.default = CustomDatePicker;
//# sourceMappingURL=CustomDatePicker.js.map