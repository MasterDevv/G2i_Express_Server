"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const AcronymService_1 = tslib_1.__importDefault(require("../services/AcronymService"));
class AcronymsController {
    constructor() {
        this.acronymService = new AcronymService_1.default();
        this.getAcronyms = async (req, res, next) => {
            try {
                const findAllAcronymsData = await this.acronymService.getAcronyms();
                res.status(200).json({ data: findAllAcronymsData, message: 'findAll' });
            }
            catch (error) {
                next(error);
            }
        };
        this.addAcoronym = async (req, res, next) => {
            try {
                const addData = req.body;
                const addAcronymData = await this.acronymService.addAcronym(addData);
                res.status(201).json({ data: addAcronymData, message: 'added' });
            }
            catch (error) {
                next(error);
            }
        };
        this.updateAcronym = async (req, res, next) => {
            try {
                const updateData = req.body;
                const acronymId = req.params.id.toString();
                const updateAcronymData = await this.acronymService.updateAcronym(acronymId, updateData);
                res.status(200).json({ data: updateAcronymData, message: 'updated' });
            }
            catch (error) {
                next(error);
            }
        };
        this.deleteAcronym = async (req, res, next) => {
            try {
                const acronymId = req.params.id.toString();
                const deleteUserData = await this.acronymService.deleteAcronym(acronymId);
                res.status(200).json({ data: deleteUserData, message: 'deleted' });
            }
            catch (error) {
                next(error);
            }
        };
    }
}
exports.default = AcronymsController;
//# sourceMappingURL=AcronymsController.js.map