"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: ()=>_default
});
const _acronymService = _interopRequireDefault(require("../services/AcronymService"));
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
let AcronymsController = class AcronymsController {
    constructor(){
        this.acronymService = new _acronymService.default();
        this.getAcronyms = async (req, res, next)=>{
            try {
                const findAllAcronymsData = await this.acronymService.getAcronyms();
                res.status(200).json({
                    data: findAllAcronymsData,
                    message: 'findAll'
                });
            } catch (error) {
                next(error);
            }
        };
        this.addAcoronym = async (req, res, next)=>{
            try {
                const addData = req.body;
                const addAcronymData = await this.acronymService.addAcronym(addData);
                res.status(201).json({
                    data: addAcronymData,
                    message: 'added'
                });
            } catch (error) {
                next(error);
            }
        };
        this.updateAcronym = async (req, res, next)=>{
            try {
                const updateData = req.body;
                const acronymId = req.params.id.toString();
                const updateAcronymData = await this.acronymService.updateAcronym(acronymId, updateData);
                res.status(200).json({
                    data: updateAcronymData,
                    message: 'updated'
                });
            } catch (error) {
                next(error);
            }
        };
        this.deleteAcronym = async (req, res, next)=>{
            try {
                const acronymId = req.params.id.toString();
                const deleteUserData = await this.acronymService.deleteAcronym(acronymId);
                res.status(200).json({
                    data: deleteUserData,
                    message: 'deleted'
                });
            } catch (error) {
                next(error);
            }
        };
    }
};
const _default = AcronymsController;

//# sourceMappingURL=AcronymsController.js.map