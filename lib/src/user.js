"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// user.js
const request_1 = __importDefault(require("./request"));
function getUserName(userID) {
    return request_1.default('/users/' + userID).then(user => user.name);
}
exports.getUserName = getUserName;
