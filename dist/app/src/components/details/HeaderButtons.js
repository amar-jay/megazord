"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const EditHeaderButtons_1 = __importDefault(require("../buttons/EditHeaderButtons"));
const HeaderButtons = ({ editable, handleBack, handleEdit, }) => editable ? (<></>) : (<EditHeaderButtons_1.default handleBackButton={handleBack} handleEditButton={handleEdit}/>);
exports.default = HeaderButtons;
//# sourceMappingURL=HeaderButtons.js.map