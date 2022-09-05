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
const ActivityStatus_1 = require("../../enums/ActivityStatus");
const Pages_1 = require("../../enums/Pages");
const Activity_1 = __importDefault(require("../../state/Activity"));
const colors_1 = require("../../themes/colors");
const ActivityDetailsActions = ({ visible, setVisible, }) => {
    const [activity] = (0, jotai_1.useAtom)(Activity_1.default);
    const { navigate } = (0, native_1.useNavigation)();
    const addExpense = (<react_native_elements_1.ListItem key={0} onPress={() => {
            setVisible(false);
            navigate(Pages_1.Pages.ADD_EXPENSE);
        }} containerStyle={styles.lightGrey}>
      <react_native_elements_1.ListItem.Content style={styles.center}>
        <react_native_elements_1.ListItem.Title>Add expense</react_native_elements_1.ListItem.Title>
      </react_native_elements_1.ListItem.Content>
    </react_native_elements_1.ListItem>);
    const activityDetails = (<react_native_elements_1.ListItem key={1} onPress={() => {
            setVisible(false);
            navigate(Pages_1.Pages.ACTIVITY_DETAILS);
        }} containerStyle={styles.lightGrey}>
      <react_native_elements_1.ListItem.Content style={styles.center}>
        <react_native_elements_1.ListItem.Title>Go to activity details</react_native_elements_1.ListItem.Title>
      </react_native_elements_1.ListItem.Content>
    </react_native_elements_1.ListItem>);
    const back = (<react_native_elements_1.ListItem key={2} onPress={() => setVisible(false)} containerStyle={styles.red}>
      <react_native_elements_1.ListItem.Content style={styles.center}>
        <react_native_elements_1.ListItem.Title style={styles.white}>Back</react_native_elements_1.ListItem.Title>
      </react_native_elements_1.ListItem.Content>
    </react_native_elements_1.ListItem>);
    const actions = [addExpense, activityDetails, back];
    const activityClosedActions = [activityDetails, back];
    return (<>
      <react_native_elements_1.BottomSheet isVisible={visible}>
        {activity.activityStatus === ActivityStatus_1.ActivityStatus.DONE
            ? activityClosedActions
            : actions}
      </react_native_elements_1.BottomSheet>
    </>);
};
const styles = react_native_1.StyleSheet.create({
    red: {
        backgroundColor: colors_1.red,
    },
    center: {
        alignItems: 'center',
    },
    white: {
        color: colors_1.white,
    },
    lightGrey: {
        backgroundColor: colors_1.lightGrey,
    },
});
exports.default = (0, react_1.memo)(ActivityDetailsActions);
//# sourceMappingURL=ActivityDetailsActions.js.map