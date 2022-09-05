"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoggedOut = exports.LoggedIn = void 0;
const react_1 = __importDefault(require("react"));
const Header_1 = require("./Header");
exports.default = {
    title: "Example/Header",
    component: Header_1.Header,
    parameters: {
        layout: "fullscreen",
    },
};
const Template = (args) => <Header_1.Header {...args}/>;
exports.LoggedIn = Template.bind({});
exports.LoggedIn.args = {
    user: {
        name: "Jane Doe",
    },
};
exports.LoggedOut = Template.bind({});
exports.LoggedOut.args = {};
//# sourceMappingURL=Header.stories.js.map