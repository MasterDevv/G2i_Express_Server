"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
const _app = _interopRequireDefault(require("./app"));
const _indexRoute = _interopRequireDefault(require("./routes/IndexRoute"));
const _acronymsRoute = _interopRequireDefault(require("./routes/AcronymsRoute"));
const _validateEnv = _interopRequireDefault(require("./utils/validateEnv"));
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
(0, _validateEnv.default)();
const app = new _app.default([
    new _indexRoute.default(),
    new _acronymsRoute.default()
]);
app.listen();

//# sourceMappingURL=server.js.map