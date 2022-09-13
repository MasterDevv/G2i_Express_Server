"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: ()=>_default
});
const _express = require("express");
const _acronymsController = _interopRequireDefault(require("../controllers/acronyms.controller"));
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
let AcronymsRoute = class AcronymsRoute {
    initializeRoutes() {}
    constructor(){
        this.path = '/acronym';
        this.router = (0, _express.Router)();
        this.acronymsController = new _acronymsController.default();
        this.initializeRoutes();
    }
};
const _default = AcronymsRoute;

//# sourceMappingURL=acronym.route.js.map