"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const native_1 = require("@react-navigation/native");
const stack_1 = require("@react-navigation/stack");
const aws_amplify_1 = require("aws-amplify");
const aws_amplify_react_native_1 = require("aws-amplify-react-native");
const jotai_1 = require("jotai");
const react_1 = __importDefault(require("react"));
require("react-native-gesture-handler");
const AppHeader_1 = __importDefault(require("./src/components/header/AppHeader"));
const AmplifyConfiguration_1 = require("./src/config/AmplifyConfiguration");
const Pages_1 = require("./src/enums/Pages");
const ActivitiesPage_1 = __importDefault(require("./src/pages/activities/ActivitiesPage"));
const ActivityDetailsPage_1 = __importDefault(require("./src/pages/details/ActivityDetailsPage"));
const AddActivityPage_1 = __importDefault(require("./src/pages/addActivity/AddActivityPage"));
const AddExpensePage_1 = __importDefault(require("./src/pages/addExpense/AddExpensePage"));
const ExpenseDetailsPage_1 = __importDefault(require("./src/pages/details/ExpenseDetailsPage"));
const ExpensesPage_1 = __importDefault(require("./src/pages/expenses/ExpensesPage"));
aws_amplify_1.Amplify.configure({
    Auth: {
        region: AmplifyConfiguration_1.REGION,
        userPoolId: AmplifyConfiguration_1.USER_POOL_ID,
        userPoolWebClientId: AmplifyConfiguration_1.USER_POOL_WEB_CLIENT_ID,
    },
    API: {
        endpoints: [
            {
                name: AmplifyConfiguration_1.API_NAME,
                endpoint: AmplifyConfiguration_1.ENDPOINT,
            },
        ],
    },
});
const Stack = (0, stack_1.createStackNavigator)();
const App = () => {
    return (<jotai_1.Provider>
      <native_1.NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name={Pages_1.Pages.ACTIVITIES} component={ActivitiesPage_1.default} options={{
            header: () => <AppHeader_1.default />,
        }}/>
          <Stack.Screen name={Pages_1.Pages.ADD_ACTIVITY} component={AddActivityPage_1.default} options={{
            header: () => <AppHeader_1.default />,
        }}/>
          <Stack.Screen name={Pages_1.Pages.ACTIVITY_DETAILS} component={ActivityDetailsPage_1.default} options={{
            header: () => <AppHeader_1.default />,
        }}/>
          <Stack.Screen name={Pages_1.Pages.ADD_EXPENSE} component={AddExpensePage_1.default} options={{
            header: () => <AppHeader_1.default />,
        }}/>
          <Stack.Screen name={Pages_1.Pages.EXPENSE_DETAILS} component={ExpenseDetailsPage_1.default} options={{
            header: () => <AppHeader_1.default />,
        }}/>
          <Stack.Screen name={Pages_1.Pages.EXPENSES} component={ExpensesPage_1.default} options={{
            header: () => <AppHeader_1.default />,
        }}/>
        </Stack.Navigator>
      </native_1.NavigationContainer>
    </jotai_1.Provider>);
};
exports.default = (0, aws_amplify_react_native_1.withAuthenticator)(App);
//# sourceMappingURL=App.js.map