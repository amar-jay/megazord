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
const UsersConfiguration_1 = require("../../config/UsersConfiguration");
const ExpensesFilterIndex_1 = require("../../enums/ExpensesFilterIndex");
const User_1 = __importDefault(require("../../state/User"));
const colors_1 = require("../../themes/colors");
const ExpensesActionsFilter = ({ visible, setVisible, index, setIndex, }) => {
    const [username] = (0, jotai_1.useAtom)(User_1.default);
    const description = (<react_native_elements_1.ListItem key={0} containerStyle={styles.black}>
      <react_native_elements_1.ListItem.Content style={styles.center}>
        <react_native_elements_1.Text style={styles.white}>Filter expenses</react_native_elements_1.Text>
      </react_native_elements_1.ListItem.Content>
    </react_native_elements_1.ListItem>);
    const updateIndex = (selectedIndex) => setIndex(selectedIndex);
    const No = () => (<react_native_elements_1.Text onPress={() => {
            setIndex(ExpensesFilterIndex_1.ExpensesFilterIndex.NO);
        }}>
      No
    </react_native_elements_1.Text>);
    const OtherUser = () => (<react_native_elements_1.Text onPress={() => {
            setIndex(ExpensesFilterIndex_1.ExpensesFilterIndex.OTHER_USER);
        }}>
      {username !== UsersConfiguration_1.FIRST_USER ? UsersConfiguration_1.FIRST_USER : UsersConfiguration_1.SECOND_USER}
    </react_native_elements_1.Text>);
    const CurrentUser = () => (<react_native_elements_1.Text onPress={() => {
            setIndex(ExpensesFilterIndex_1.ExpensesFilterIndex.CURRENT_USER);
        }}>
      Me
    </react_native_elements_1.Text>);
    const filter = (<react_native_elements_1.ListItem key={1} containerStyle={styles.black}>
      <react_native_elements_1.ListItem.Content style={styles.center}>
        <react_native_elements_1.ButtonGroup buttonStyle={styles.lightGrey} selectedButtonStyle={styles.blue} buttons={[
            {
                element: () => <No />,
            },
            {
                element: () => <OtherUser />,
            },
            {
                element: () => <CurrentUser />,
            },
        ]} onPress={updateIndex.bind(this)} selectedIndex={index}/>
      </react_native_elements_1.ListItem.Content>
    </react_native_elements_1.ListItem>);
    const back = (<react_native_elements_1.ListItem key={2} onPress={() => setVisible(false)} containerStyle={styles.red}>
      <react_native_elements_1.ListItem.Content style={styles.center}>
        <react_native_elements_1.ListItem.Title style={styles.white}>Back</react_native_elements_1.ListItem.Title>
      </react_native_elements_1.ListItem.Content>
    </react_native_elements_1.ListItem>);
    const actions = [description, filter, back];
    return <react_native_elements_1.BottomSheet isVisible={visible}>{actions}</react_native_elements_1.BottomSheet>;
};
const styles = react_native_1.StyleSheet.create({
    lightGrey: {
        backgroundColor: colors_1.lightGrey,
    },
    blue: {
        backgroundColor: colors_1.blue,
    },
    red: {
        backgroundColor: colors_1.red,
    },
    center: {
        alignItems: 'center',
    },
    white: {
        color: colors_1.white,
    },
    black: {
        backgroundColor: colors_1.black,
    },
});
exports.default = (0, react_1.memo)(ExpensesActionsFilter);
//# sourceMappingURL=ExpensesActionsFilter.js.map