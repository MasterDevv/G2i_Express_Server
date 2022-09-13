"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: ()=>_default
});
const _httpException = require("../exceptions/HttpException");
const authMiddleware = async (req, res, next)=>{
    try {
        const Authorization = req.cookies['Authorization'] || (req.header('Authorization') ? true : false);
        if (Authorization) {
            next();
        } else {
            next(new _httpException.HttpException(404, 'Authentication token missing'));
        }
    } catch (error) {
        next(new _httpException.HttpException(401, 'Wrong authentication token'));
    }
};
const _default = authMiddleware;

//# sourceMappingURL=authMiddleware.js.map