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
const aws_amplify_1 = require("aws-amplify");
const jotai_1 = require("jotai");
const react_1 = __importStar(require("react"));
const react_native_1 = require("react-native");
const react_native_elements_1 = require("react-native-elements");
const react_native_gesture_handler_1 = require("react-native-gesture-handler");
const ActivityApi_1 = require("../../api/ActivityApi");
const ActivitySummary_1 = __importDefault(require("../../components/activities/ActivitySummary"));
const AddButton_1 = __importDefault(require("../../components/buttons/AddButton"));
const Error_1 = __importDefault(require("../../components/status/Error"));
const Loading_1 = __importDefault(require("../../components/status/Loading"));
const ActivityStatus_1 = require("../../enums/ActivityStatus");
const Pages_1 = require("../../enums/Pages");
const Status_1 = require("../../enums/Status");
const Activity_1 = __importDefault(require("../../state/Activity"));
const User_1 = __importDefault(require("../../state/User"));
const colors_1 = require("../../themes/colors");
const icons_1 = require("../../themes/icons");
const size_1 = require("../../themes/size");
const dateFormatter_1 = require("../../utils/dateFormatter");
const ActivitiesPage = () => {
    const [activities, setActivities] = (0, react_1.useState)([]);
    const [refreshing, setRefreshing] = (0, react_1.useState)(false);
    const [status, setStatus] = (0, react_1.useState)(Status_1.Status.IDLE);
    const [, setUsername] = (0, jotai_1.useAtom)(User_1.default);
    const [, setActivity] = (0, jotai_1.useAtom)(Activity_1.default);
    const { navigate } = (0, native_1.useNavigation)();
    const isFocused = (0, native_1.useIsFocused)();
    (0, react_1.useEffect)(() => {
        aws_amplify_1.Auth.currentAuthenticatedUser().then(response => setUsername(response.username));
    }, [setUsername]);
    (0, react_1.useEffect)(() => {
        if (isFocused) {
            getActivities();
        }
    }, [isFocused]);
    const onRefresh = (0, react_1.useCallback)(() => {
        setRefreshing(true);
        getActivities();
        setRefreshing(false);
    }, []);
    async function getActivities() {
        setStatus(Status_1.Status.IN_PROGRESS);
        ActivityApi_1.ACTIVITY_API.getByUser()
            .then(fetchedActivities => {
            fetchedActivities.map((activity) => {
                activity.startDate = (0, dateFormatter_1.formatDate)(activity.startDate);
                return activity;
            });
            setActivities(fetchedActivities);
            setStatus(Status_1.Status.SUCCESS);
        })
            .catch(() => {
            setStatus(Status_1.Status.ERROR);
        });
    }
    function renderActivities() {
        return activities.map((activity, i) => (<>
        <react_native_elements_1.ListItem key={i} onPress={() => {
                setActivity(activity);
                navigate(Pages_1.Pages.EXPENSES);
            }} onLongPress={() => {
                setActivity(activity);
                navigate(Pages_1.Pages.ACTIVITY_DETAILS);
            }}>
          <ActivitySummary_1.default activity={activity}/>
          {activity.activityStatus === ActivityStatus_1.ActivityStatus.DONE && (<react_native_elements_1.Icon name="check" type="font-awesome-5" size={icons_1.iSmall} color={colors_1.green}/>)}
        </react_native_elements_1.ListItem>
      </>));
    }
    return (<>
      {(status === Status_1.Status.IN_PROGRESS || status === Status_1.Status.IDLE) && <Loading_1.default />}
      {status === Status_1.Status.ERROR && (<Error_1.default text="An error occurred while fetching activities"/>)}
      {status === Status_1.Status.SUCCESS && (<>
          <react_native_gesture_handler_1.ScrollView refreshControl={<react_native_1.RefreshControl refreshing={refreshing} onRefresh={onRefresh}/>}>
            {renderActivities()}
          </react_native_gesture_handler_1.ScrollView>
          <react_native_1.View style={styles.buttonsContainer}>
            <AddButton_1.default onPress={() => navigate(Pages_1.Pages.ADD_ACTIVITY)}/>
          </react_native_1.View>
        </>)}
    </>);
};
const styles = react_native_1.StyleSheet.create({
    buttonsContainer: {
        margin: size_1.sMedium,
        flexDirection: 'row',
        justifyContent: 'center',
    },
});
exports.default = ActivitiesPage;
//# sourceMappingURL=ActivitiesPage.js.map