"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: ()=>_default
});
const _httpException = require("../exceptions/HttpException");
const _acronymsModel = _interopRequireDefault(require("../models/acronyms.model"));
const _util = require("../utils/util");
function _defineProperty(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else {
        obj[key] = value;
    }
    return obj;
}
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function _objectSpread(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i] != null ? arguments[i] : {};
        var ownKeys = Object.keys(source);
        if (typeof Object.getOwnPropertySymbols === 'function') {
            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
                return Object.getOwnPropertyDescriptor(source, sym).enumerable;
            }));
        }
        ownKeys.forEach(function(key) {
            _defineProperty(target, key, source[key]);
        });
    }
    return target;
}
let AcronymService = class AcronymService {
    async getAcronyms() {
        console.log('asdf is ', this.acronyms);
        const acronyms = this.acronyms;
        return acronyms;
    }
    async addAcronym(acronymData) {
        if ((0, _util.isEmpty)(acronymData)) throw new _httpException.HttpException(400, 'acronymData is empty');
        const findAcronym = this.acronyms.find((acronym)=>acronym.acronym === acronymData.acronym);
        if (findAcronym) throw new _httpException.HttpException(409, `This acronym ${acronymData.acronym} already exists`);
        const addData = _objectSpread({}, acronymData);
        this.acronyms = [
            ...this.acronyms,
            addData
        ];
        return addData;
    }
    constructor(){
        this.acronyms = _acronymsModel.default;
    }
};
const _default = AcronymService;

//# sourceMappingURL=acronyms.service.js.map