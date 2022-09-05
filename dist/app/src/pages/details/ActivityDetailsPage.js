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
const BackButton_1 = __importDefault(require("../../components/buttons/BackButton"));
const ActionButtons_1 = __importDefault(require("../../components/details/ActionButtons"));
const Amount_1 = __importDefault(require("../../components/details/Amount"));
const Calendar_1 = __importDefault(require("../../components/details/Calendar"));
const HeaderButtons_1 = __importDefault(require("../../components/details/HeaderButtons"));
const User_1 = __importDefault(require("../../components/details/User"));
const NameInput_1 = __importDefault(require("../../components/input/NameInput"));
const ActivityStatus_1 = require("../../enums/ActivityStatus");
const Currency_1 = require("../../enums/Currency");
const Activity_1 = __importDefault(require("../../state/Activity"));
const Expenses_1 = __importDefault(require("../../state/Expenses"));
const User_2 = __importDefault(require("../../state/User"));
const amountFormatter_1 = require("../../utils/amountFormatter");
const dateFormatter_1 = require("../../utils/dateFormatter");
const styles_1 = require("./styles");
const ActivityDetailsPage = () => {
    const [editable, setEditable] = (0, react_1.useState)(false);
    const [username] = (0, jotai_1.useAtom)(User_2.default);
    const [activity] = (0, jotai_1.useAtom)(Activity_1.default);
    const [expenses] = (0, jotai_1.useAtom)(Expenses_1.default);
    const [name, setName] = (0, react_1.useState)(activity.activityName);
    const [date, setDate] = (0, react_1.useState)((0, dateFormatter_1.formatDate)(activity.startDate));
    const { goBack, popToTop } = (0, native_1.useNavigation)();
    async function update() {
        ActivityApi_1.ACTIVITY_API.update(activity.id, name, date).then(() => popToTop());
    }
    async function del() {
        ActivityApi_1.ACTIVITY_API.delete(activity.id).then(() => popToTop());
    }
    const reset = () => {
        setName(activity.activityName);
        setEditable(false);
    };
    const endUpdate = () => {
        setEditable(false);
    };
    const expenseTotal = () => {
        let total = 0;
        expenses.all.map(expense => (total += Number(expense.amount)));
        return (0, amountFormatter_1.formatAmount)(total);
    };
    const Name = () => <react_native_elements_1.Text h4>{name}</react_native_elements_1.Text>;
    return (<>
      {activity.activityStatus === ActivityStatus_1.ActivityStatus.IN_PROGRESS ? (<HeaderButtons_1.default editable={editable} handleBack={goBack} handleEdit={() => setEditable(true)}/>) : (<react_native_1.View style={styles_1.detailsStyle.backButton}>
          <BackButton_1.default onPress={goBack}/>
        </react_native_1.View>)}
      <react_native_1.ScrollView style={styles_1.detailsStyle.details}>
        <react_native_1.View style={styles_1.detailsStyle.center}>
          {editable ? (<NameInput_1.default text={name} onChangeText={setName}/>) : (<Name />)}
        </react_native_1.View>
        <react_native_1.View style={styles_1.detailsStyle.subDetails}>
          <User_1.default username={username} activity={activity}/>
          <Amount_1.default amount={expenseTotal()} currency={Currency_1.Currency.CANADA}/>
        </react_native_1.View>
        <Calendar_1.default editable={editable} date={date} onChange={setDate}/>
      </react_native_1.ScrollView>
      {activity.activityStatus === ActivityStatus_1.ActivityStatus.IN_PROGRESS && (<>
          <ActionButtons_1.default editable={editable} handleCancel={reset} handleValidate={endUpdate} disabledValidate={name === ''} handleDelete={del} handleUpdate={update} disabledUpdate={name === activity.activityName &&
                (0, dateFormatter_1.formatDate)(date) === (0, dateFormatter_1.formatDate)(activity.startDate)}/>
        </>)}
    </>);
};
exports.default = ActivityDetailsPage;
//# sourceMappingURL=ActivityDetailsPage.js.map