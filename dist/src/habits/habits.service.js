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
exports.HabitsService = void 0;
const common_1 = require("@nestjs/common");
const event_emitter_1 = require("@nestjs/event-emitter");
const prisma_service_1 = require("../prisma.service");
let HabitsService = class HabitsService {
    prisma;
    eventEmitter;
    constructor(prisma, eventEmitter) {
        this.prisma = prisma;
        this.eventEmitter = eventEmitter;
    }
    async create(createHabitDto) {
        const data = {
            title: createHabitDto.title,
            description: createHabitDto.description,
            userId: Number(createHabitDto.userId),
            categoryId: createHabitDto.categoryId ? Number(createHabitDto.categoryId) : null,
        };
        const habit = await this.prisma.habit.create({
            data,
        });
        this.eventEmitter.emit('habit.created', habit);
        return habit;
    }
    async findAll() {
        return this.prisma.habit.findMany({
            include: {
                user: true,
                category: true,
            },
        });
    }
    async findOne(id) {
        return this.prisma.habit.findUnique({
            where: { id: id },
            include: {
                user: true,
                category: true,
                logs: true,
            },
        });
    }
    async update(id, updateHabitDto) {
        return this.prisma.habit.update({
            where: { id },
            data: updateHabitDto,
        });
    }
    async remove(id) {
        return this.prisma.habit.delete({
            where: { id },
        });
    }
};
exports.HabitsService = HabitsService;
exports.HabitsService = HabitsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService,
        event_emitter_1.EventEmitter2])
], HabitsService);
//# sourceMappingURL=habits.service.js.map