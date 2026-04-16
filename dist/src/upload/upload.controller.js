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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UploadController = void 0;
const common_1 = require("@nestjs/common");
const platform_express_1 = require("@nestjs/platform-express");
const s3_service_1 = require("../s3/s3.service");
let UploadController = class UploadController {
    s3Service;
    constructor(s3Service) {
        this.s3Service = s3Service;
    }
    async uploadHabitImage(file, habitId) {
        if (!file) {
            return { success: false, message: 'Файл не загружен' };
        }
        const key = `habits/${habitId}/${Date.now()}-${file.originalname}`;
        const imageUrl = await this.s3Service.uploadFile(file, key);
        return {
            success: true,
            url: imageUrl,
            key: key,
        };
    }
};
exports.UploadController = UploadController;
__decorate([
    (0, common_1.Post)('habit-image'),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('file')),
    __param(0, (0, common_1.UploadedFile)()),
    __param(1, (0, common_1.Body)('habitId', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Number]),
    __metadata("design:returntype", Promise)
], UploadController.prototype, "uploadHabitImage", null);
exports.UploadController = UploadController = __decorate([
    (0, common_1.Controller)('upload'),
    __metadata("design:paramtypes", [s3_service_1.S3Service])
], UploadController);
//# sourceMappingURL=upload.controller.js.map