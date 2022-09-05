"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.buildExpenses = exports.EMPTY_EXPENSES = void 0;
const jotai_1 = require("jotai");
exports.EMPTY_EXPENSES = {
    all: [],
    currentUser: [],
    otherUser: [],
};
const expensesAtom = (0, jotai_1.atom)(exports.EMPTY_EXPENSES);
exports.default = expensesAtom;
const buildExpenses = (expenses, username) => {
    return {
        all: expenses,
        currentUser: expenses.filter(expense => expense.user === username),
        otherUser: expenses.filter(expense => expense.user !== username),
    };
};
exports.buildExpenses = buildExpenses;
//# sourceMappingURL=Expenses.js.map