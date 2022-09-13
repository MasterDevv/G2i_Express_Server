"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateAcronymDto = void 0;
const tslib_1 = require("tslib");
const class_validator_1 = require("class-validator");
class CreateAcronymDto {
}
tslib_1.__decorate([
    (0, class_validator_1.IsString)(),
    tslib_1.__metadata("design:type", String)
], CreateAcronymDto.prototype, "acronym", void 0);
tslib_1.__decorate([
    (0, class_validator_1.IsString)(),
    tslib_1.__metadata("design:type", String)
], CreateAcronymDto.prototype, "definition", void 0);
exports.CreateAcronymDto = CreateAcronymDto;
//# sourceMappingURL=acronyms.dto.js.map