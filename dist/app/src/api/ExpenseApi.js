"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EXPENSE_API = exports.ExpenseApi = void 0;
const aws_amplify_1 = require("aws-amplify");
const Currency_1 = require("../enums/Currency");
const amountFormatter_1 = require("../utils/amountFormatter");
const dateFormatter_1 = require("../utils/dateFormatter");
const API_NAME = "Whatever whatever";
class ExpenseApi {
    constructor() { }
    async create(name, amount, activityId, date, category) {
        const user = await aws_amplify_1.Auth.currentAuthenticatedUser();
        const apiName = API_NAME;
        const path = '/expenses';
        const myInit = {
            headers: {
                Authorization: `Bearer ${(await aws_amplify_1.Auth.currentSession())
                    .getIdToken()
                    .getJwtToken()}`,
            },
            body: {
                expenseName: name,
                amount: (0, amountFormatter_1.formatAmount)(Number(amount)),
                currency: Currency_1.Currency.CANADA,
                user: user.getUsername(),
                activityId: activityId,
                date: (0, dateFormatter_1.formatDate)(date),
                category: category,
            },
        };
        console.debug('Adding new expense...');
        return await aws_amplify_1.API.post(apiName, path, myInit);
    }
    async getByActivityId(activityId) {
        const apiName = API_NAME;
        const path = `/expenses?activityId=${activityId}`;
        const myInit = {
            headers: {
                Authorization: `Bearer ${(await aws_amplify_1.Auth.currentSession())
                    .getIdToken()
                    .getJwtToken()}`,
            },
        };
        console.debug(`Retrieving expenses for activity '${activityId}'...`);
        return await aws_amplify_1.API.get(apiName, path, myInit);
    }
    async update(expense) {
        const apiName = API_NAME;
        const path = `/expenses/${expense.id}`;
        const myInit = {
            headers: {
                Authorization: `Bearer ${(await aws_amplify_1.Auth.currentSession())
                    .getIdToken()
                    .getJwtToken()}`,
            },
            body: {
                expenseName: expense.expenseName,
                amount: (0, amountFormatter_1.formatAmount)(Number(expense.amount)),
                user: expense.user,
                startDate: expense.startDate,
                currency: expense.currency,
                category: expense.category,
            },
        };
        console.debug(`Updating expense '${expense.id}'...`);
        return await aws_amplify_1.API.put(apiName, path, myInit);
    }
}
exports.ExpenseApi = ExpenseApi;
exports.EXPENSE_API = new ExpenseApi();
//# sourceMappingURL=ExpenseApi.js.map