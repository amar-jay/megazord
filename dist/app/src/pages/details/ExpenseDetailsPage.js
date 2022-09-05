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
const react_native_1 = require("react-native");
const react_native_elements_1 = require("react-native-elements");
const ActivityApi_1 = require("../../api/ActivityApi");
const ExpenseApi_1 = require("../../api/ExpenseApi");
const BackButton_1 = __importDefault(require("../../components/buttons/BackButton"));
const ActionButtons_1 = __importDefault(require("../../components/details/ActionButtons"));
const Amount_1 = __importDefault(require("../../components/details/Amount"));
const Calendar_1 = __importDefault(require("../../components/details/Calendar"));
const HeaderButtons_1 = __importDefault(require("../../components/details/HeaderButtons"));
const User_1 = __importDefault(require("../../components/details/User"));
const AmountInput_1 = __importDefault(require("../../components/input/AmountInput"));
const NameInput_1 = __importDefault(require("../../components/input/NameInput"));
const ActivityStatus_1 = require("../../enums/ActivityStatus");
const Activity_1 = __importDefault(require("../../state/Activity"));
const User_2 = __importDefault(require("../../state/User"));
const amountFormatter_1 = require("../../utils/amountFormatter");
const dateFormatter_1 = require("../../utils/dateFormatter");
const regexConstants_1 = require("../../utils/regexConstants");
const styles_1 = require("./styles");
const ExpenseDetailsPage = () => {
    const [username] = (0, jotai_1.useAtom)(User_2.default);
    const [activity] = (0, jotai_1.useAtom)(Activity_1.default);
    const { params } = (0, native_1.useRoute)();
    const [defaultExpense] = (0, react_1.useState)(params.expense);
    const expense = params.expense;
    const [name, setName] = (0, react_1.useState)(expense.expenseName);
    const [date, setDate] = (0, react_1.useState)((0, dateFormatter_1.formatDate)(expense.startDate));
    const [amount, setAmount] = (0, react_1.useState)((0, amountFormatter_1.formatAmount)(Number(expense.amount)));
    const [editable, setEditable] = (0, react_1.useState)(false);
    const { goBack } = (0, native_1.useNavigation)();
    const del = () => {
        ActivityApi_1.ACTIVITY_API.deleteExpense(activity.id, expense.id).then(() => goBack());
    };
    const update = () => {
        const updatedExpense = {
            id: expense.id,
            user: expense.user,
            amount: amount,
            currency: expense.currency,
            startDate: date,
            expenseName: name,
        };
        ExpenseApi_1.EXPENSE_API.update(updatedExpense).then(() => goBack());
    };
    const Name = () => (<>
      <react_native_elements_1.Text h4>{name}</react_native_elements_1.Text>
      <react_native_elements_1.Text style={styles_1.detailsStyle.blue}>From {activity.activityName}</react_native_elements_1.Text>
    </>);
    const reset = () => {
        setName(defaultExpense.expenseName);
        setAmount(defaultExpense.amount);
        setDate((0, dateFormatter_1.formatDate)(defaultExpense.startDate));
        setEditable(false);
    };
    const endUpdate = () => {
        setEditable(false);
    };
    return (<>
      {activity.activityStatus === ActivityStatus_1.ActivityStatus.IN_PROGRESS ? (<HeaderButtons_1.default editable={editable} handleBack={goBack} handleEdit={() => setEditable(true)}/>) : (<react_native_1.View style={styles_1.detailsStyle.backButton}>
          <BackButton_1.default onPress={goBack}/>
        </react_native_1.View>)}
      <react_native_1.ScrollView style={styles_1.detailsStyle.details}>
        <react_native_1.View style={styles_1.detailsStyle.center}>
          {editable ? (<NameInput_1.default text={name} onChangeText={setName}/>) : (<Name />)}
        </react_native_1.View>
        {editable ? (<AmountInput_1.default amount={amount} onChangeAmount={setAmount}/>) : (<react_native_1.View style={styles_1.detailsStyle.subDetails}>
            <User_1.default username={username} activity={activity}/>
            <Amount_1.default amount={amount} currency={expense.currency}/>
          </react_native_1.View>)}
        <Calendar_1.default editable={editable} date={date} onChange={setDate}/>
      </react_native_1.ScrollView>
      {activity.activityStatus === ActivityStatus_1.ActivityStatus.IN_PROGRESS && (<>
          <ActionButtons_1.default editable={editable} handleCancel={reset} handleValidate={endUpdate} disabledValidate={name === '' || !regexConstants_1.AMOUNT_REGEX.test(amount)} handleDelete={del} handleUpdate={update} disabledUpdate={name === defaultExpense.expenseName &&
                amount === defaultExpense.amount &&
                (0, dateFormatter_1.formatDate)(date) === (0, dateFormatter_1.formatDate)(defaultExpense.startDate)}/>
        </>)}
    </>);
};
exports.default = ExpenseDetailsPage;
//# sourceMappingURL=ExpenseDetailsPage.js.map