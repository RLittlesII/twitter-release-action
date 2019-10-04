"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const users = {
    4: { name: 'Mark' },
    5: { name: 'Paul' },
};
function request(url) {
    return new Promise((resolve, reject) => {
        const userID = parseInt(url.substr('/users/'.length), 10);
        process.nextTick(() => users[userID]
            ? resolve(users[userID])
            : reject({
                error: 'User with ' + userID + ' not found.',
            }));
    });
}
exports.default = request;
