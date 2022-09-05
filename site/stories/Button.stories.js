"use strict";
exports.__esModule = true;
exports.Small = exports.Large = exports.Secondary = exports.Primary = void 0;
var react_1 = require("react");
var Button_1 = require("./Button");
// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
exports["default"] = {
    title: "Example/Button",
    component: Button_1.Button,
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {
        backgroundColor: { control: "color" }
    }
};
// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
var Template = function (args) { return <Button_1.Button {...args}/>; };
exports.Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
exports.Primary.args = {
    primary: true,
    label: "Button"
};
exports.Secondary = Template.bind({});
exports.Secondary.args = {
    label: "Button"
};
exports.Large = Template.bind({});
exports.Large.args = {
    size: "large",
    label: "Button"
};
exports.Small = Template.bind({});
exports.Small.args = {
    size: "small",
    label: "Button"
};
