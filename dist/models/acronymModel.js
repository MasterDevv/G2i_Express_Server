"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: ()=>_default
});
const _fs = _interopRequireDefault(require("fs"));
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
const rawdata = _fs.default.readFileSync('src/db/acronym.json');
const acronyms = JSON.parse(rawdata.toString());
const acronymModel = acronyms.map((acronym)=>({
        acronym: Object.keys(acronym)[0],
        definition: acronym[Object.keys(acronym)[0]]
    }));
const _default = acronymModel;

//# sourceMappingURL=acronymModel.js.map