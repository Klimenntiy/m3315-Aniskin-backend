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
exports.CreateHabitDto = void 0;
const class_validator_1 = require("class-validator");
const swagger_1 = require("@nestjs/swagger");
class CreateHabitDto {
    title;
    description;
    userId;
    categoryId;
}
exports.CreateHabitDto = CreateHabitDto;
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Утренняя зарядка', description: 'Название привычки' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)({ message: 'Название обязательно' }),
    (0, class_validator_1.MaxLength)(100, { message: 'Название не должно превышать 100 символов' }),
    __metadata("design:type", String)
], CreateHabitDto.prototype, "title", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: false, example: '10 минут упражнений', description: 'Описание привычки' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.MaxLength)(500, { message: 'Описание не должно превышать 500 символов' }),
    __metadata("design:type", String)
], CreateHabitDto.prototype, "description", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 1, description: 'ID пользователя' }),
    (0, class_validator_1.IsInt)(),
    (0, class_validator_1.Min)(1, { message: 'userId должен быть положительным числом' }),
    __metadata("design:type", Number)
], CreateHabitDto.prototype, "userId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: false, example: 1, description: 'ID категории' }),
    (0, class_validator_1.IsInt)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.Min)(1, { message: 'categoryId должен быть положительным числом' }),
    __metadata("design:type", Number)
], CreateHabitDto.prototype, "categoryId", void 0);
//# sourceMappingURL=create-habit.dto.js.map