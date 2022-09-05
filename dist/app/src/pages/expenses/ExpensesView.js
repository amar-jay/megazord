"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const native_1 = require("@react-navigation/native");
const jotai_1 = require("jotai");
const react_1 = __importDefault(require("react"));
const react_native_elements_1 = require("react-native-elements");
const ExpenseDetails_1 = __importDefault(require("../../components/expenses/ExpenseDetails"));
const ExpensesFilterIndex_1 = require("../../enums/ExpensesFilterIndex");
const Pages_1 = require("../../enums/Pages");
const Expenses_1 = __importDefault(require("../../state/Expenses"));
const ExpensesView = ({ index }) => {
    const [expenses] = (0, jotai_1.useAtom)(Expenses_1.default);
    const { navigate } = (0, native_1.useNavigation)();
    const selectedExpenses = () => {
        if (index === ExpensesFilterIndex_1.ExpensesFilterIndex.NO) {
            return expenses.all;
        }
        else if (index === ExpensesFilterIndex_1.ExpensesFilterIndex.CURRENT_USER) {
            return expenses.currentUser;
        }
        else {
            return expenses.otherUser;
        }
    };
    return (<>
      {selectedExpenses().map((expense, i) => (<react_native_elements_1.ListItem key={i} bottomDivider onPress={() => navigate(Pages_1.Pages.EXPENSE_DETAILS, {
                expense: expense,
            })}>
          <ExpenseDetails_1.default expense={expense}/>
        </react_native_elements_1.ListItem>))}
    </>);
};
exports.default = ExpensesView;
//# sourceMappingURL=ExpensesView.js.map