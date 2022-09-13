"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: ()=>_default
});
const _httpException = require("../exceptions/HttpException");
const _acronymModel = _interopRequireDefault(require("../models/acronymModel"));
const _util = require("../utils/util");
const _fs = _interopRequireDefault(require("fs"));
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
function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        if (enumerableOnly) {
            symbols = symbols.filter(function(sym) {
                return Object.getOwnPropertyDescriptor(object, sym).enumerable;
            });
        }
        keys.push.apply(keys, symbols);
    }
    return keys;
}
function _objectSpreadProps(target, source) {
    source = source != null ? source : {};
    if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
        ownKeys(Object(source)).forEach(function(key) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
    }
    return target;
}
let AcronymService = class AcronymService {
    async getAcronyms() {
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
        const acronymsData = [];
        this.acronyms.forEach((item)=>{
            const newItem = {};
            newItem[item.acronym] = item.definition;
            acronymsData.push(newItem);
        });
        _fs.default.writeFileSync('src/db/acronym.json', JSON.stringify(acronymsData));
        return addData;
    }
    async updateAcronym(acronymId, acronymData) {
        if ((0, _util.isEmpty)(acronymData)) throw new _httpException.HttpException(400, 'acronymData is empty');
        console.log('id is ', acronymId.toString());
        const findAcronym = this.acronyms.find((acronym)=>acronym.acronym === acronymId);
        if (!findAcronym) {
            throw new _httpException.HttpException(409, `This acronym ${acronymData.acronym} does not exist`);
        }
        const updateData = _objectSpread({}, acronymData);
        const acronymsData = this.acronyms.map((acronym)=>{
            if (acronym.acronym === acronymId) acronym = _objectSpreadProps(_objectSpread({}, acronym), {
                definition: acronymData.definition
            });
            const newItem = {};
            newItem[acronym.acronym] = acronym.definition;
            return newItem;
        });
        _fs.default.writeFileSync('src/db/acronym.json', JSON.stringify(acronymsData));
        return updateData;
    }
    async deleteAcronym(acronymId) {
        if ((0, _util.isEmpty)(acronymId)) throw new _httpException.HttpException(400, 'acronymId is empty');
        const findAcronym = this.acronyms.find((acronym)=>acronym.acronym === acronymId);
        if (!findAcronym) {
            throw new _httpException.HttpException(409, `This acronym ${acronymId} does not exist`);
        }
        const acronymsData = this.acronyms.filter((acronym)=>acronym.acronym !== acronymId);
        const acronymsNewData = acronymsData.map((acronym)=>{
            const newItem = {};
            newItem[acronym.acronym] = acronym.definition;
            return newItem;
        });
        _fs.default.writeFileSync('src/db/acronym.json', JSON.stringify(acronymsNewData));
        return acronymsData;
    }
    constructor(){
        this.acronyms = _acronymModel.default;
    }
};
const _default = AcronymService;

//# sourceMappingURL=AcronymService.js.map