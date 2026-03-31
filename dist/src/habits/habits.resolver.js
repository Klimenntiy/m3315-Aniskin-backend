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
exports.HabitsResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const habits_service_1 = require("./habits.service");
const habit_type_1 = require("./graphql/habit.type");
const create_habit_input_1 = require("./graphql/create-habit.input");
const update_habit_input_1 = require("./graphql/update-habit.input");
const habits_paginated_type_1 = require("./graphql/habits-paginated.type");
let HabitsResolver = class HabitsResolver {
    habitsService;
    constructor(habitsService) {
        this.habitsService = habitsService;
    }
    async habits() {
        return this.habitsService.findAll();
    }
    async habit(id) {
        return this.habitsService.findOne(id);
    }
    async habitsPaginated(page, limit) {
        return this.habitsService.findAllPaginated(page, limit);
    }
    async createHabit(input) {
        return this.habitsService.create(input);
    }
    async updateHabit(input) {
        return this.habitsService.update(input.id, input);
    }
    async deleteHabit(id) {
        return this.habitsService.remove(id);
    }
};
exports.HabitsResolver = HabitsResolver;
__decorate([
    (0, graphql_1.Query)(() => [habit_type_1.HabitType]),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], HabitsResolver.prototype, "habits", null);
__decorate([
    (0, graphql_1.Query)(() => habit_type_1.HabitType, { nullable: true }),
    __param(0, (0, graphql_1.Args)('id', { type: () => graphql_1.Int })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], HabitsResolver.prototype, "habit", null);
__decorate([
    (0, graphql_1.Query)(() => habits_paginated_type_1.HabitsPaginatedType),
    __param(0, (0, graphql_1.Args)('page', { type: () => graphql_1.Int, defaultValue: 1 })),
    __param(1, (0, graphql_1.Args)('limit', { type: () => graphql_1.Int, defaultValue: 10 })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number]),
    __metadata("design:returntype", Promise)
], HabitsResolver.prototype, "habitsPaginated", null);
__decorate([
    (0, graphql_1.Mutation)(() => habit_type_1.HabitType),
    __param(0, (0, graphql_1.Args)('input')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_habit_input_1.CreateHabitInput]),
    __metadata("design:returntype", Promise)
], HabitsResolver.prototype, "createHabit", null);
__decorate([
    (0, graphql_1.Mutation)(() => habit_type_1.HabitType),
    __param(0, (0, graphql_1.Args)('input')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [update_habit_input_1.UpdateHabitInput]),
    __metadata("design:returntype", Promise)
], HabitsResolver.prototype, "updateHabit", null);
__decorate([
    (0, graphql_1.Mutation)(() => habit_type_1.HabitType),
    __param(0, (0, graphql_1.Args)('id', { type: () => graphql_1.Int })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], HabitsResolver.prototype, "deleteHabit", null);
exports.HabitsResolver = HabitsResolver = __decorate([
    (0, graphql_1.Resolver)(() => habit_type_1.HabitType),
    __metadata("design:paramtypes", [habits_service_1.HabitsService])
], HabitsResolver);
//# sourceMappingURL=habits.resolver.js.map