"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const app_1 = tslib_1.__importDefault(require("./app"));
const IndexRoute_1 = tslib_1.__importDefault(require("./routes/IndexRoute"));
const AcronymsRoute_1 = tslib_1.__importDefault(require("./routes/AcronymsRoute"));
const validateEnv_1 = tslib_1.__importDefault(require("./utils/validateEnv"));
(0, validateEnv_1.default)();
const app = new app_1.default([new IndexRoute_1.default(), new AcronymsRoute_1.default()]);
app.listen();
//# sourceMappingURL=server.js.map