"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jotai_1 = require("jotai");
const Activity_1 = require("../model/Activity");
const activityAtom = (0, jotai_1.atom)(Activity_1.EMPTY_ACTIVITY);
exports.default = activityAtom;
//# sourceMappingURL=activity.js.map