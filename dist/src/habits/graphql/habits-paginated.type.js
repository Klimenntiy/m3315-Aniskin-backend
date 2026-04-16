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
exports.HabitsPaginatedType = exports.PaginationInfo = void 0;
const graphql_1 = require("@nestjs/graphql");
const habit_type_1 = require("./habit.type");
let PaginationInfo = class PaginationInfo {
    page;
    limit;
    total;
    totalPages;
    next;
    prev;
};
exports.PaginationInfo = PaginationInfo;
__decorate([
    (0, graphql_1.Field)(() => graphql_1.Int),
    __metadata("design:type", Number)
], PaginationInfo.prototype, "page", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_1.Int),
    __metadata("design:type", Number)
], PaginationInfo.prototype, "limit", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_1.Int),
    __metadata("design:type", Number)
], PaginationInfo.prototype, "total", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_1.Int),
    __metadata("design:type", Number)
], PaginationInfo.prototype, "totalPages", void 0);
__decorate([
    (0, graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], PaginationInfo.prototype, "next", void 0);
__decorate([
    (0, graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], PaginationInfo.prototype, "prev", void 0);
exports.PaginationInfo = PaginationInfo = __decorate([
    (0, graphql_1.ObjectType)()
], PaginationInfo);
let HabitsPaginatedType = class HabitsPaginatedType {
    data;
    pagination;
};
exports.HabitsPaginatedType = HabitsPaginatedType;
__decorate([
    (0, graphql_1.Field)(() => [habit_type_1.HabitType]),
    __metadata("design:type", Array)
], HabitsPaginatedType.prototype, "data", void 0);
__decorate([
    (0, graphql_1.Field)(() => PaginationInfo),
    __metadata("design:type", PaginationInfo)
], HabitsPaginatedType.prototype, "pagination", void 0);
exports.HabitsPaginatedType = HabitsPaginatedType = __decorate([
    (0, graphql_1.ObjectType)()
], HabitsPaginatedType);
//# sourceMappingURL=habits-paginated.type.js.map