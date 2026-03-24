import { Injectable } from '@nestjs/common';
import { EventEmitter2 } from '@nestjs/event-emitter';
import { PrismaService } from '../prisma.service';
import { CreateHabitDto } from './dto/create-habit.dto';
import { UpdateHabitDto } from './dto/update-habit.dto';

@Injectable()
export class HabitsService {
    constructor(
        private prisma: PrismaService,
        private eventEmitter: EventEmitter2,
    ) {}

    async create(createHabitDto: CreateHabitDto) {
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

    async findOne(id: number) {
        return this.prisma.habit.findUnique({
            where: { id: id },
            include: {
                user: true,
                category: true,
                logs: true,
            },
        });
    }

    async update(id: number, updateHabitDto: UpdateHabitDto) {
        return this.prisma.habit.update({
            where: { id },
            data: updateHabitDto,
        });
    }

    async remove(id: number) {
        return this.prisma.habit.delete({
            where: { id },
        });
    }

    async findAllPaginated(page: number = 1, limit: number = 10) {
        const skip = (page - 1) * limit;
        const [habits, total] = await Promise.all([
            this.prisma.habit.findMany({
                skip,
                take: limit,
                include: {
                    user: true,
                    category: true,
                },
                orderBy: { createdAt: 'desc' },
            }),
            this.prisma.habit.count(),
        ]);

        const totalPages = Math.ceil(total / limit);

        return {
            data: habits,
            pagination: {
                page,
                limit,
                total,
                totalPages,
                next: page < totalPages ? `/api/habits?page=${page + 1}&limit=${limit}` : null,
                prev: page > 1 ? `/api/habits?page=${page - 1}&limit=${limit}` : null,
            },
        };
    }
}