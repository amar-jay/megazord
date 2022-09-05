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
const core_1 = require("@react-navigation/core");
const jotai_1 = require("jotai");
const react_1 = __importStar(require("react"));
const react_native_1 = require("react-native");
const react_native_gesture_handler_1 = require("react-native-gesture-handler");
const ExpenseApi_1 = require("../../api/ExpenseApi");
const ActivityDetailsBottom_1 = __importDefault(require("../../components/activities/ActivityDetailsBottom"));
const ActivityDetailsTab_1 = __importDefault(require("../../components/activities/ActivityDetailsTab"));
const Error_1 = __importDefault(require("../../components/status/Error"));
const Loading_1 = __importDefault(require("../../components/status/Loading"));
const ExpensesFilterIndex_1 = require("../../enums/ExpensesFilterIndex");
const ExpensesTabIndex_1 = require("../../enums/ExpensesTabIndex");
const Status_1 = require("../../enums/Status");
const Activity_1 = __importDefault(require("../../state/Activity"));
const Expenses_1 = __importStar(require("../../state/Expenses"));
const User_1 = __importDefault(require("../../state/User"));
const dateFormatter_1 = require("../../utils/dateFormatter");
const ExpensesBalanceView_1 = __importDefault(require("./ExpensesBalanceView"));
const ExpensesView_1 = __importDefault(require("./ExpensesView"));
const ExpensesPage = () => {
    const [tabIndex, setTabIndex] = (0, react_1.useState)(ExpensesTabIndex_1.ExpensesTabIndex.LIST);
    const [status, setStatus] = (0, react_1.useState)(Status_1.Status.IDLE);
    const [refreshing, setRefreshing] = (0, react_1.useState)(false);
    const [expensesIndex, setExpensesIndex] = (0, react_1.useState)(ExpensesFilterIndex_1.ExpensesFilterIndex.NO);
    const [username] = (0, jotai_1.useAtom)(User_1.default);
    const [activity] = (0, jotai_1.useAtom)(Activity_1.default);
    const [, setExpenses] = (0, jotai_1.useAtom)(Expenses_1.default);
    const isFocused = (0, core_1.useIsFocused)();
    const onRefresh = () => {
        setRefreshing(true);
        fetchExpenses();
        setRefreshing(false);
    };
    const fetchExpenses = (0, react_1.useCallback)(() => {
        setStatus(Status_1.Status.IN_PROGRESS);
        ExpenseApi_1.EXPENSE_API.getByActivityId(activity.id)
            .then(fetchedExpenses => {
            fetchedExpenses.map(fetchedExpense => {
                fetchedExpense.startDate = (0, dateFormatter_1.formatDate)(fetchedExpense.startDate);
                return fetchedExpense;
            });
            setExpenses((0, Expenses_1.buildExpenses)(fetchedExpenses, username));
            setStatus(Status_1.Status.SUCCESS);
        })
            .catch(() => {
            setExpenses((0, Expenses_1.buildExpenses)([], ''));
            setStatus(Status_1.Status.ERROR);
        });
    }, [activity.id, setExpenses, username]);
    (0, react_1.useEffect)(() => {
        if (isFocused && activity.id !== '') {
            fetchExpenses();
        }
    }, [isFocused, fetchExpenses, activity.id]);
    return (<>
      {status === Status_1.Status.IN_PROGRESS && <Loading_1.default />}
      {status === Status_1.Status.ERROR && (<Error_1.default text="An error occurred while fetching expenses"/>)}
      {(status === Status_1.Status.SUCCESS || status === Status_1.Status.IDLE) && (<>
          <ActivityDetailsTab_1.default index={tabIndex} setIndex={setTabIndex}/>
          {tabIndex === ExpensesTabIndex_1.ExpensesTabIndex.LIST ? (<react_native_gesture_handler_1.ScrollView refreshControl={<react_native_1.RefreshControl refreshing={refreshing} onRefresh={onRefresh}/>}>
              <ExpensesView_1.default index={expensesIndex}/>
            </react_native_gesture_handler_1.ScrollView>) : (<ExpensesBalanceView_1.default />)}
          <ActivityDetailsBottom_1.default expensesIndex={expensesIndex} setExpensesIndex={setExpensesIndex}/>
        </>)}
    </>);
};
exports.default = ExpensesPage;
//# sourceMappingURL=ExpensesPage.js.map