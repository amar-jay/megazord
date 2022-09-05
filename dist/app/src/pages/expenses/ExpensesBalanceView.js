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
const CloseButton_1 = __importDefault(require("../../components/buttons/CloseButton"));
const ClosePopUp_1 = __importDefault(require("../../components/popUp/ClosePopUp"));
const UsersConfiguration_1 = require("../../config/UsersConfiguration");
const ActivityStatus_1 = require("../../enums/ActivityStatus");
const Activity_1 = __importDefault(require("../../state/Activity"));
const Expenses_1 = __importDefault(require("../../state/Expenses"));
const User_1 = __importDefault(require("../../state/User"));
const colors_1 = require("../../themes/colors");
const icons_1 = require("../../themes/icons");
const size_1 = require("../../themes/size");
const amountFormatter_1 = require("../../utils/amountFormatter");
const ExpensesBalanceView = () => {
    const [username] = (0, jotai_1.useAtom)(User_1.default);
    const [expenses] = (0, jotai_1.useAtom)(Expenses_1.default);
    const [activity] = (0, jotai_1.useAtom)(Activity_1.default);
    const [closePopUp, setClosePopUp] = (0, react_1.useState)(false);
    const { popToTop } = (0, native_1.useNavigation)();
    const users = (0, UsersConfiguration_1.getUsers)();
    const sumAmounts = (userExpenses) => userExpenses.length > 0
        ? userExpenses
            .map(expense => expense.amount)
            .reduce((sum, current) => (sum += current))
        : 0;
    async function close() {
        ActivityApi_1.ACTIVITY_API.close(activity.id).then(() => popToTop());
    }
    const render = () => {
        const currentUserAmount = sumAmounts(expenses.currentUser);
        const otherUserAmount = sumAmounts(expenses.otherUser);
        const currentUser = 'Me';
        const otherUser = users.filter(user => user !== username)[0];
        let debtOwner = currentUser;
        let debtReceiver = otherUser;
        let ownerAmount = currentUserAmount;
        let receiverAmount = otherUserAmount;
        if (ownerAmount > receiverAmount) {
            debtOwner = otherUser;
            debtReceiver = currentUser;
            ownerAmount = otherUserAmount;
            receiverAmount = currentUserAmount;
        }
        if (ownerAmount === receiverAmount) {
            return (<react_native_1.View style={styles.container}>
          <react_native_elements_1.Text h4>Everything is fine !</react_native_elements_1.Text>
        </react_native_1.View>);
        }
        else {
            return (<react_native_1.View style={styles.container}>
          <react_native_elements_1.Text h4>
            {debtOwner} {'->'} {debtReceiver}
          </react_native_elements_1.Text>
          <react_native_1.View style={styles.center}>
            <react_native_elements_1.Icon name="money-bill" type="font-awesome-5" size={icons_1.iMedium} color={colors_1.dollar}/>
            <react_native_elements_1.Text h4>
              {(0, amountFormatter_1.formatAmount)((Number(receiverAmount) - Number(ownerAmount)) / 2)}{' '}
              CAD
            </react_native_elements_1.Text>
          </react_native_1.View>
          {activity.activityStatus === ActivityStatus_1.ActivityStatus.IN_PROGRESS && (<CloseButton_1.default onPress={() => setClosePopUp(true)}/>)}
          <ClosePopUp_1.default isVisible={closePopUp} onBackdropPress={() => setClosePopUp(false)} handleCancel={() => setClosePopUp(false)} handleValidate={() => {
                    close();
                    setClosePopUp(false);
                }}/>
        </react_native_1.View>);
        }
    };
    return render();
};
const styles = react_native_1.StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    center: {
        alignItems: 'center',
        marginTop: size_1.sNormal,
        marginBottom: size_1.sLarge,
    },
});
exports.default = ExpensesBalanceView;
//# sourceMappingURL=ExpensesBalanceView.js.map