"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const HttpException_1 = require("../exceptions/HttpException");
const acronymModel_1 = tslib_1.__importDefault(require("../models/acronymModel"));
const util_1 = require("../utils/util");
const fs_1 = tslib_1.__importDefault(require("fs"));
class AcronymService {
    constructor() {
        this.acronyms = acronymModel_1.default;
    }
    async getAcronyms() {
        const acronyms = this.acronyms;
        return acronyms;
    }
    async addAcronym(acronymData) {
        if ((0, util_1.isEmpty)(acronymData))
            throw new HttpException_1.HttpException(400, 'acronymData is empty');
        const findAcronym = this.acronyms.find(acronym => acronym.acronym === acronymData.acronym);
        if (findAcronym)
            throw new HttpException_1.HttpException(409, `This acronym ${acronymData.acronym} already exists`);
        const addData = Object.assign({}, acronymData);
        this.acronyms = [...this.acronyms, addData];
        const acronymsData = [];
        this.acronyms.forEach((item) => {
            const newItem = {};
            newItem[item.acronym] = item.definition;
            acronymsData.push(newItem);
        });
        fs_1.default.writeFileSync('src/db/acronym.json', JSON.stringify(acronymsData));
        return addData;
    }
    async updateAcronym(acronymId, acronymData) {
        if ((0, util_1.isEmpty)(acronymData))
            throw new HttpException_1.HttpException(400, 'acronymData is empty');
        console.log('id is ', acronymId.toString());
        const findAcronym = this.acronyms.find(acronym => acronym.acronym === acronymId);
        if (!findAcronym) {
            throw new HttpException_1.HttpException(409, `This acronym ${acronymData.acronym} does not exist`);
        }
        const updateData = Object.assign({}, acronymData);
        const acronymsData = this.acronyms.map((acronym) => {
            if (acronym.acronym === acronymId)
                acronym = Object.assign(Object.assign({}, acronym), { definition: acronymData.definition });
            const newItem = {};
            newItem[acronym.acronym] = acronym.definition;
            return newItem;
        });
        fs_1.default.writeFileSync('src/db/acronym.json', JSON.stringify(acronymsData));
        return updateData;
    }
    async deleteAcronym(acronymId) {
        if ((0, util_1.isEmpty)(acronymId))
            throw new HttpException_1.HttpException(400, 'acronymId is empty');
        const findAcronym = this.acronyms.find(acronym => acronym.acronym === acronymId);
        if (!findAcronym) {
            throw new HttpException_1.HttpException(409, `This acronym ${acronymId} does not exist`);
        }
        const acronymsData = this.acronyms.filter(acronym => acronym.acronym !== acronymId);
        const acronymsNewData = acronymsData.map((acronym) => {
            const newItem = {};
            newItem[acronym.acronym] = acronym.definition;
            return newItem;
        });
        fs_1.default.writeFileSync('src/db/acronym.json', JSON.stringify(acronymsNewData));
        return acronymsData;
    }
}
exports.default = AcronymService;
//# sourceMappingURL=AcronymService.js.map