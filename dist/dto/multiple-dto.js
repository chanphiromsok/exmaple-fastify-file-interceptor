"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MultipleFileDto = void 0;
const swagger_1 = require("@nestjs/swagger");
class MultipleFileDto {
}
__decorate([
    swagger_1.ApiProperty({ type: "string", format: "binary" }),
    __metadata("design:type", Array)
], MultipleFileDto.prototype, "photo_url", void 0);
__decorate([
    swagger_1.ApiProperty({ example: "Rom" }),
    __metadata("design:type", String)
], MultipleFileDto.prototype, "username", void 0);
__decorate([
    swagger_1.ApiProperty({ example: "12345678" }),
    __metadata("design:type", String)
], MultipleFileDto.prototype, "password", void 0);
exports.MultipleFileDto = MultipleFileDto;
//# sourceMappingURL=multiple-dto.js.map