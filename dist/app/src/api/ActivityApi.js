"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ACTIVITY_API = exports.ActivityApi = void 0;
const aws_amplify_1 = require("aws-amplify");
const API_NAME = "Whatever whatever";
class ActivityApi {
    constructor() { }
    async create(name) {
        const user = await aws_amplify_1.Auth.currentAuthenticatedUser();
        const apiName = API_NAME;
        const path = '/activities';
        const myInit = {
            headers: {
                Authorization: `Bearer ${(await aws_amplify_1.Auth.currentSession())
                    .getIdToken()
                    .getJwtToken()}`,
            },
            body: {
                activityName: name,
                createdBy: user.getUsername(),
            },
        };
        console.debug('Adding new activity...');
        return await aws_amplify_1.API.post(apiName, path, myInit);
    }
    async getByUser() {
        const user = await aws_amplify_1.Auth.currentAuthenticatedUser();
        const apiName = API_NAME;
        const path = `/activities?username=${user.getUsername()}`;
        const myInit = {
            headers: {
                Authorization: `Bearer ${(await aws_amplify_1.Auth.currentSession())
                    .getIdToken()
                    .getJwtToken()}`,
            },
        };
        console.debug(`Retrieving activities from username '${user.getUsername()}'...`);
        return await aws_amplify_1.API.get(apiName, path, myInit);
    }
    async getById(id) {
        const apiName = API_NAME;
        const path = `/activities/${id}`;
        const myInit = {
            headers: {
                Authorization: `Bearer ${(await aws_amplify_1.Auth.currentSession())
                    .getIdToken()
                    .getJwtToken()}`,
            },
        };
        console.debug(`Retrieving activity '${id}'...`);
        return await aws_amplify_1.API.get(apiName, path, myInit);
    }
    async deleteExpense(id, expenseId) {
        const apiName = API_NAME;
        const path = `/activities/${id}/expenses/${expenseId}`;
        const myInit = {
            headers: {
                Authorization: `Bearer ${(await aws_amplify_1.Auth.currentSession())
                    .getIdToken()
                    .getJwtToken()}`,
            },
        };
        console.debug(`Deleting expense '${expenseId}' from activity '${id}'...`);
        return await aws_amplify_1.API.del(apiName, path, myInit);
    }
    async update(id, name, date) {
        const apiName = API_NAME;
        const path = `/activities/${id}`;
        const myInit = {
            headers: {
                Authorization: `Bearer ${(await aws_amplify_1.Auth.currentSession())
                    .getIdToken()
                    .getJwtToken()}`,
            },
            body: {
                activityName: name,
                date: date,
            },
        };
        console.debug(`Updating activity '${id}'...`);
        return await aws_amplify_1.API.put(apiName, path, myInit);
    }
    async delete(id) {
        const apiName = API_NAME;
        const path = `/activities/${id}`;
        const myInit = {
            headers: {
                Authorization: `Bearer ${(await aws_amplify_1.Auth.currentSession())
                    .getIdToken()
                    .getJwtToken()}`,
            },
            body: {
                id: id,
            },
        };
        console.debug(`Deleting activity '${id}'...`);
        return await aws_amplify_1.API.del(apiName, path, myInit);
    }
    async close(id) {
        const apiName = API_NAME;
        const path = `/activities/${id}`;
        const myInit = {
            headers: {
                Authorization: `Bearer ${(await aws_amplify_1.Auth.currentSession())
                    .getIdToken()
                    .getJwtToken()}`,
            },
            body: {
                id: id,
            },
        };
        console.debug(`Closing activity '${id}'...`);
        return await aws_amplify_1.API.patch(apiName, path, myInit);
    }
}
exports.ActivityApi = ActivityApi;
exports.ACTIVITY_API = new ActivityApi();
//# sourceMappingURL=ActivityApi.js.map