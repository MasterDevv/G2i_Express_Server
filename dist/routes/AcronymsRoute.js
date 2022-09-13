"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const express_1 = require("express");
const AcronymsController_1 = tslib_1.__importDefault(require("../controllers/AcronymsController"));
const acronyms_dto_1 = require("../dtos/acronyms.dto");
const validationMiddleware_1 = tslib_1.__importDefault(require("../middlewares/validationMiddleware"));
const authMiddleware_1 = tslib_1.__importDefault(require("../middlewares/authMiddleware"));
class AcronymsRoute {
    constructor() {
        this.path = '/acronym';
        this.router = (0, express_1.Router)();
        this.acronymsController = new AcronymsController_1.default();
        this.initializeRoutes();
    }
    initializeRoutes() {
        this.router.get(`${this.path}`, this.acronymsController.getAcronyms);
        this.router.post(`${this.path}`, (0, validationMiddleware_1.default)(acronyms_dto_1.CreateAcronymDto, 'body'), this.acronymsController.addAcoronym);
        this.router.put(`${this.path}/:id(\\d+)`, (0, validationMiddleware_1.default)(acronyms_dto_1.CreateAcronymDto, 'body', true), authMiddleware_1.default, this.acronymsController.updateAcronym);
        this.router.delete(`${this.path}/:id(\\d+)`, authMiddleware_1.default, this.acronymsController.deleteAcronym);
    }
}
exports.default = AcronymsRoute;
//# sourceMappingURL=AcronymsRoute.js.map