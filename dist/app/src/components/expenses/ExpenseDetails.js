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
const isEmpty_1 = __importDefault(require("lodash/isEmpty"));
const react_1 = __importStar(require("react"));
const react_native_1 = require("react-native");
const react_native_elements_1 = require("react-native-elements");
const User_1 = __importDefault(require("../../state/User"));
const colors_1 = require("../../themes/colors");
const icons_1 = require("../../themes/icons");
const size_1 = require("../../themes/size");
const amountFormatter_1 = require("../../utils/amountFormatter");
const categoryConstants_1 = require("../../utils/categoryConstants");
const ExpenseDetails = ({ expense }) => {
    const [username] = (0, jotai_1.useAtom)(User_1.default);
    return (<>
      <react_native_elements_1.ListItem.Content>
        <react_native_elements_1.ListItem.Title>
          {expense.expenseName}
          <react_native_elements_1.Badge badgeStyle={[
            styles.badge,
            {
                backgroundColor: (0, isEmpty_1.default)(categoryConstants_1.categories.filter(c => c.label === (expense === null || expense === void 0 ? void 0 : expense.category)))
                    ? categoryConstants_1.noCategory.color
                    : categoryConstants_1.categories.filter(c => c.label === (expense === null || expense === void 0 ? void 0 : expense.category))[0]
                        .color,
            },
        ]} value={(expense === null || expense === void 0 ? void 0 : expense.category) || categoryConstants_1.noCategory.label}/>
        </react_native_elements_1.ListItem.Title>
        <react_native_elements_1.ListItem.Subtitle>
          <react_native_elements_1.Icon name="user" type="font-awesome-5" size={icons_1.iSmall} color={username === expense.user ? colors_1.green : colors_1.black}/>
          <react_native_elements_1.Text style={styles.darkGreen}>
            {username === expense.user ? 'Me' : expense.user}
          </react_native_elements_1.Text>
        </react_native_elements_1.ListItem.Subtitle>
      </react_native_elements_1.ListItem.Content>
      <react_native_elements_1.ListItem.Content right>
        <react_native_elements_1.ListItem.Title style={styles.blue}>
          {(0, amountFormatter_1.formatAmount)(Number(expense.amount))} {expense.currency}
        </react_native_elements_1.ListItem.Title>
        <react_native_elements_1.ListItem.Subtitle style={styles.italic}>
          {expense.startDate}
        </react_native_elements_1.ListItem.Subtitle>
      </react_native_elements_1.ListItem.Content>
    </>);
};
const styles = react_native_1.StyleSheet.create({
    darkGreen: {
        color: colors_1.darkGreen,
    },
    blue: {
        color: colors_1.blue,
    },
    italic: {
        fontStyle: 'italic',
    },
    badge: {
        marginLeft: size_1.sSmall,
    },
});
exports.default = (0, react_1.memo)(ExpenseDetails);
//# sourceMappingURL=ExpenseDetails.js.map