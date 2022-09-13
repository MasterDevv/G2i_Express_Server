"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const fs_1 = tslib_1.__importDefault(require("fs"));
const rawdata = fs_1.default.readFileSync('src/db/acronym.json');
const acronyms = JSON.parse(rawdata.toString());
const acronymModel = acronyms.map((acronym) => ({
    acronym: Object.keys(acronym)[0],
    definition: acronym[Object.keys(acronym)[0]],
}));
exports.default = acronymModel;
//# sourceMappingURL=acronymModel.js.map