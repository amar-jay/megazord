"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_native_1 = require("react-native");
const react_native_elements_1 = require("react-native-elements");
const colors_1 = require("../../themes/colors");
const icons_1 = require("../../themes/icons");
const dateFormatter_1 = require("../../utils/dateFormatter");
const CustomDatePicker_1 = __importDefault(require("../datePicker/CustomDatePicker"));
const styles_1 = require("./styles");
const Calendar = ({ editable, date, onChange }) => editable ? (<react_native_1.View style={styles_1.detailsStyle.center}>
      <CustomDatePicker_1.default date={date} onChange={onChange}/>
    </react_native_1.View>) : (<react_native_1.View style={(styles_1.detailsStyle.rowCenter, styles_1.detailsStyle.center)}>
      <react_native_elements_1.Icon name="calendar" type="font-awesome-5" size={icons_1.iMedium} color={colors_1.black}/>
      <react_native_elements_1.Text>
        {(0, dateFormatter_1.to_YYYY_MM_DD)((0, dateFormatter_1.getDateNow)()) === (0, dateFormatter_1.formatDate)(date)
        ? 'Today'
        : (0, dateFormatter_1.formatDate)(date)}
      </react_native_elements_1.Text>
    </react_native_1.View>);
exports.default = Calendar;
//# sourceMappingURL=Calendar.js.map