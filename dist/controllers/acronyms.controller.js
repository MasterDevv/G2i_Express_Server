"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: ()=>_default
});
const _acronymsService = _interopRequireDefault(require("../services/acronyms.service"));
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
let AcronymsController = class AcronymsController {
    constructor(){
        this.acronymService = new _acronymsService.default();
    }
};
const _default = AcronymsController;

//# sourceMappingURL=acronyms.controller.js.map