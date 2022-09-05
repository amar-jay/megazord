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
const ActivityApi_1 = require("../../api/ActivityApi");
const CancelButton_1 = __importDefault(require("../../components/buttons/CancelButton"));
const ValidateButton_1 = __importDefault(require("../../components/buttons/ValidateButton"));
const NameInput_1 = __importDefault(require("../../components/input/NameInput"));
const Error_1 = __importDefault(require("../../components/status/Error"));
const Loading_1 = __importDefault(require("../../components/status/Loading"));
const Pages_1 = require("../../enums/Pages");
const Status_1 = require("../../enums/Status");
const Activity_1 = __importDefault(require("../../state/Activity"));
const colors_1 = require("../../themes/colors");
const size_1 = require("../../themes/size");
const AddActivityPage = () => {
    const [name, setName] = (0, react_1.useState)('');
    const [status, setStatus] = (0, react_1.useState)(Status_1.Status.IDLE);
    const [editable, setEditable] = (0, react_1.useState)(false);
    const [, setActivity] = (0, jotai_1.useAtom)(Activity_1.default);
    const { popToTop, navigate } = (0, native_1.useNavigation)();
    const createActivity = () => {
        setStatus(Status_1.Status.IN_PROGRESS);
        ActivityApi_1.ACTIVITY_API.create(name)
            .then(activity => {
            setStatus(Status_1.Status.SUCCESS);
            setActivity(activity);
            navigate(Pages_1.Pages.EXPENSES);
        })
            .catch(() => setStatus(Status_1.Status.ERROR));
    };
    const reset = () => {
        react_native_1.Keyboard.dismiss();
        setName('');
        setEditable(false);
    };
    const endUpdate = () => {
        react_native_1.Keyboard.dismiss();
        setEditable(false);
    };
    const render = () => {
        if (status === Status_1.Status.IN_PROGRESS) {
            return <Loading_1.default />;
        }
        else if (status === Status_1.Status.ERROR) {
            return <Error_1.default text="An error occurred while fetching activities"/>;
        }
        else {
            return (<>
          <react_native_1.View style={styles.activityInput}>
            <NameInput_1.default text={name} onChangeText={setName} onTouchStart={() => setEditable(true)}/>
          </react_native_1.View>
          <react_native_1.View>
            {editable ? (<react_native_1.View style={styles.buttonsContainer}>
                <CancelButton_1.default onPress={reset}/>
                <ValidateButton_1.default onPress={endUpdate} disabled={name === ''} color={colors_1.blue}/>
              </react_native_1.View>) : (<react_native_1.View style={styles.buttonsContainer}>
                <CancelButton_1.default onPress={() => {
                        popToTop();
                    }}/>
                <ValidateButton_1.default onPress={createActivity} disabled={name === ''}/>
              </react_native_1.View>)}
          </react_native_1.View>
        </>);
        }
    };
    return render();
};
const styles = react_native_1.StyleSheet.create({
    activityInput: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        margin: size_1.sMedium,
    },
    buttonsContainer: {
        margin: size_1.sMedium,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
});
exports.default = AddActivityPage;
//# sourceMappingURL=AddActivityPage.js.map