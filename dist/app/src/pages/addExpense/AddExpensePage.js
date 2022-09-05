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
const picker_1 = require("@react-native-picker/picker");
const native_1 = require("@react-navigation/native");
const jotai_1 = require("jotai");
const react_1 = __importStar(require("react"));
const react_native_1 = require("react-native");
const ExpenseApi_1 = require("../../api/ExpenseApi");
const CancelButton_1 = __importDefault(require("../../components/buttons/CancelButton"));
const ValidateButton_1 = __importDefault(require("../../components/buttons/ValidateButton"));
const CustomDatePicker_1 = __importDefault(require("../../components/datePicker/CustomDatePicker"));
const AmountInput_1 = __importDefault(require("../../components/input/AmountInput"));
const NameInput_1 = __importDefault(require("../../components/input/NameInput"));
const Error_1 = __importDefault(require("../../components/status/Error"));
const Loading_1 = __importDefault(require("../../components/status/Loading"));
const Status_1 = require("../../enums/Status");
const Activity_1 = __importDefault(require("../../state/Activity"));
const colors_1 = require("../../themes/colors");
const size_1 = require("../../themes/size");
const categoryConstants_1 = require("../../utils/categoryConstants");
const dateFormatter_1 = require("../../utils/dateFormatter");
const regexConstants_1 = require("../../utils/regexConstants");
const AddExpensePage = () => {
    const [name, setName] = (0, react_1.useState)('');
    const [amount, setAmount] = (0, react_1.useState)('');
    const [status, setStatus] = (0, react_1.useState)(Status_1.Status.IDLE);
    const defaultCategory = 'Other';
    const [category, setCategory] = (0, react_1.useState)(defaultCategory);
    const initialDate = (0, dateFormatter_1.to_YYYY_MM_DD)((0, dateFormatter_1.toUTC)(new Date()));
    const [date, setDate] = (0, react_1.useState)(initialDate);
    const [editable, setEditable] = (0, react_1.useState)(false);
    const [activity] = (0, jotai_1.useAtom)(Activity_1.default);
    const { goBack } = (0, native_1.useNavigation)();
    const createExpense = () => {
        setStatus(Status_1.Status.IN_PROGRESS);
        if (name !== '' && amount !== '') {
            ExpenseApi_1.EXPENSE_API.create(name, amount, activity.id, date, category)
                .then(() => {
                setStatus(Status_1.Status.SUCCESS);
                goBack();
            })
                .catch(() => setStatus(Status_1.Status.ERROR));
        }
        else {
            setStatus(Status_1.Status.IDLE);
        }
    };
    const reset = () => {
        react_native_1.Keyboard.dismiss();
        setName('');
        setAmount('');
        setEditable(false);
    };
    const endUpdate = () => {
        react_native_1.Keyboard.dismiss();
        setEditable(false);
    };
    const disableButtons = name === '' || !regexConstants_1.AMOUNT_REGEX.test(amount);
    const CategoryPicker = () => {
        return (<picker_1.Picker enabled={editable} selectedValue={category} onValueChange={item => setCategory(item)} mode="dropdown" style={styles.picker}>
        {categoryConstants_1.categories.map(c => {
                <picker_1.Picker.Item label={c.label} value={c.label} color={c.color}/>;
            })}
      </picker_1.Picker>);
    };
    return (<>
      {status === Status_1.Status.IN_PROGRESS && <Loading_1.default />}
      {status === Status_1.Status.ERROR && (<Error_1.default text="An error occurred while adding expense"/>)}
      {status === Status_1.Status.IDLE && (<>
          <react_native_1.ScrollView style={styles.container}>
            <NameInput_1.default text={name} onChangeText={setName} onTouchStart={() => setEditable(true)}/>
            <AmountInput_1.default amount={amount} onChangeAmount={setAmount} onTouchStart={() => setEditable(true)}/>
            <CategoryPicker />
            <CustomDatePicker_1.default date={date} onChange={setDate}/>
          </react_native_1.ScrollView>
          {editable ? (<react_native_1.View style={styles.buttonsContainer}>
              <CancelButton_1.default onPress={reset}/>
              <ValidateButton_1.default onPress={endUpdate} disabled={disableButtons} color={colors_1.blue}/>
            </react_native_1.View>) : (<react_native_1.View style={styles.buttonsContainer}>
              <CancelButton_1.default onPress={goBack}/>
              <ValidateButton_1.default onPress={createExpense} disabled={disableButtons}/>
            </react_native_1.View>)}
        </>)}
    </>);
};
const styles = react_native_1.StyleSheet.create({
    container: {
        flex: 1,
        margin: size_1.sMedium,
    },
    title: {
        margin: size_1.sMedium,
        marginBottom: size_1.sNormal,
    },
    picker: {
        marginBottom: size_1.sSmall,
        marginTop: size_1.sSmall,
    },
    buttonsContainer: {
        margin: size_1.sMedium,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
});
exports.default = AddExpensePage;
//# sourceMappingURL=AddExpensePage.js.map