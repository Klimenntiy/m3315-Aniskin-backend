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
exports.HabitsApiController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const habits_service_1 = require("../habits.service");
const create_habit_dto_1 = require("../dto/create-habit.dto");
const update_habit_dto_1 = require("../dto/update-habit.dto");
let HabitsApiController = class HabitsApiController {
    habitsService;
    constructor(habitsService) {
        this.habitsService = habitsService;
    }
    create(createHabitDto) {
        return this.habitsService.create(createHabitDto);
    }
    async findAll(page, limit) {
        const pageNum = page ? parseInt(page, 10) : 1;
        const limitNum = limit ? parseInt(limit, 10) : 10;
        return this.habitsService.findAllPaginated(pageNum, limitNum);
    }
    findOne(id) {
        const numericId = +id;
        if (isNaN(numericId)) {
            throw new Error(`Invalid id format: ${id}`);
        }
        return this.habitsService.findOne(numericId);
    }
    update(id, updateHabitDto) {
        const numericId = +id;
        if (isNaN(numericId)) {
            throw new Error(`Invalid id format: ${id}`);
        }
        return this.habitsService.update(numericId, updateHabitDto);
    }
    remove(id) {
        const numericId = +id;
        if (isNaN(numericId)) {
            throw new Error(`Invalid id format: ${id}`);
        }
        return this.habitsService.remove(numericId);
    }
};
exports.HabitsApiController = HabitsApiController;
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiOperation)({ summary: 'Создать новую привычку' }),
    (0, swagger_1.ApiResponse)({ status: 201, description: 'Привычка создана' }),
    (0, swagger_1.ApiResponse)({ status: 400, description: 'Неверные данные' }),
    (0, swagger_1.ApiBody)({ type: create_habit_dto_1.CreateHabitDto }),
    (0, common_1.UsePipes)(new common_1.ValidationPipe({ transform: true, whitelist: true })),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_habit_dto_1.CreateHabitDto]),
    __metadata("design:returntype", void 0)
], HabitsApiController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({ summary: 'Получить список привычек' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Список привычек' }),
    (0, swagger_1.ApiQuery)({ name: 'page', required: false, type: Number, description: 'Номер страницы' }),
    (0, swagger_1.ApiQuery)({ name: 'limit', required: false, type: Number, description: 'Количество на странице' }),
    __param(0, (0, common_1.Query)('page')),
    __param(1, (0, common_1.Query)('limit')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Promise)
], HabitsApiController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Получить привычку по ID' }),
    (0, swagger_1.ApiParam)({ name: 'id', description: 'ID привычки' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Привычка найдена' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Привычка не найдена' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], HabitsApiController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Обновить привычку' }),
    (0, swagger_1.ApiParam)({ name: 'id', description: 'ID привычки' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Привычка обновлена' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Привычка не найдена' }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_habit_dto_1.UpdateHabitDto]),
    __metadata("design:returntype", void 0)
], HabitsApiController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Удалить привычку' }),
    (0, swagger_1.ApiParam)({ name: 'id', description: 'ID привычки' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Привычка удалена' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Привычка не найдена' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], HabitsApiController.prototype, "remove", null);
exports.HabitsApiController = HabitsApiController = __decorate([
    (0, swagger_1.ApiTags)('habits'),
    (0, common_1.Controller)('api/habits'),
    __metadata("design:paramtypes", [habits_service_1.HabitsService])
], HabitsApiController);
//# sourceMappingURL=habits-api.controller.js.map