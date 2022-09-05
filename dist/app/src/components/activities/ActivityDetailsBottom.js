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
const jotai_1 = require("jotai");
const react_1 = __importStar(require("react"));
const react_native_1 = require("react-native");
const react_native_elements_1 = require("react-native-elements");
const Expenses_1 = __importDefault(require("../../state/Expenses"));
const colors_1 = require("../../themes/colors");
const size_1 = require("../../themes/size");
const amountFormatter_1 = require("../../utils/amountFormatter");
const ActionButton_1 = __importDefault(require("../buttons/ActionButton"));
const ExpensesActionsFilter_1 = __importDefault(require("../expenses/ExpensesActionsFilter"));
const ActivityDetailsActions_1 = __importDefault(require("./ActivityDetailsActions"));
const ActivityDetailsBottom = ({ expensesIndex, setExpensesIndex, }) => {
    const [actionsVisible, setActionsVisible] = (0, react_1.useState)(false);
    const [filterVisible, setFilterVisible] = (0, react_1.useState)(false);
    const [expenses] = (0, jotai_1.useAtom)(Expenses_1.default);
    const TotalUserExpense = () => {
        let userTotal = 0;
        expenses.currentUser.map(expense => (userTotal += Number(expense.amount)));
        return (<react_native_1.View style={styles.totalCurrentUser}>
        <react_native_elements_1.Text>My total</react_native_elements_1.Text>
        <react_native_elements_1.Text>{(0, amountFormatter_1.formatAmount)(userTotal)}</react_native_elements_1.Text>
      </react_native_1.View>);
    };
    const TotalExpense = () => {
        let total = 0;
        expenses.all.map(expense => (total += Number(expense.amount)));
        return (<react_native_1.View style={styles.total}>
        <react_native_elements_1.Text>Total</react_native_elements_1.Text>
        <react_native_elements_1.Text>{(0, amountFormatter_1.formatAmount)(total)}</react_native_elements_1.Text>
      </react_native_1.View>);
    };
    const Actions = () => (<ActionButton_1.default onPress={() => setActionsVisible(true)} onLongPress={() => setFilterVisible(true)}/>);
    return (<>
      <react_native_elements_1.Header containerStyle={styles.container} leftComponent={<TotalUserExpense />} centerComponent={<Actions />} rightComponent={<TotalExpense />}/>
      <ActivityDetailsActions_1.default visible={actionsVisible} setVisible={setActionsVisible}/>
      <ExpensesActionsFilter_1.default visible={filterVisible} setVisible={setFilterVisible} index={expensesIndex} setIndex={setExpensesIndex}/>
    </>);
};
const styles = react_native_1.StyleSheet.create({
    container: {
        backgroundColor: colors_1.lightGrey,
        paddingTop: size_1.sSmall,
        paddingBottom: size_1.sMedium,
    },
    totalCurrentUser: {
        paddingLeft: size_1.sSmall,
        alignItems: 'flex-start',
    },
    total: {
        paddingRight: size_1.sSmall,
        alignItems: 'flex-end',
    },
});
exports.default = ActivityDetailsBottom;
//# sourceMappingURL=ActivityDetailsBottom.js.map