"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: ()=>_default
});
const _express = require("express");
const _acronymsController = _interopRequireDefault(require("../controllers/AcronymsController"));
const _acronymsDto = require("../dtos/acronyms.dto");
const _validationMiddleware = _interopRequireDefault(require("../middlewares/validationMiddleware"));
const _authMiddleware = _interopRequireDefault(require("../middlewares/authMiddleware"));
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
let AcronymsRoute = class AcronymsRoute {
    initializeRoutes() {
        this.router.get(`${this.path}`, this.acronymsController.getAcronyms);
        this.router.post(`${this.path}`, (0, _validationMiddleware.default)(_acronymsDto.CreateAcronymDto, 'body'), this.acronymsController.addAcoronym);
        this.router.put(`${this.path}/:id(\\d+)`, (0, _validationMiddleware.default)(_acronymsDto.CreateAcronymDto, 'body', true), _authMiddleware.default, this.acronymsController.updateAcronym);
        this.router.delete(`${this.path}/:id(\\d+)`, _authMiddleware.default, this.acronymsController.deleteAcronym);
    }
    constructor(){
        this.path = '/acronym';
        this.router = (0, _express.Router)();
        this.acronymsController = new _acronymsController.default();
        this.initializeRoutes();
    }
};
const _default = AcronymsRoute;

//# sourceMappingURL=AcronymsRoute.js.map