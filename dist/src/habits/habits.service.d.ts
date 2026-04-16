import { EventEmitter2 } from '@nestjs/event-emitter';
import { PrismaService } from '../prisma.service';
import { CreateHabitDto } from './dto/create-habit.dto';
import { UpdateHabitDto } from './dto/update-habit.dto';
export declare class HabitsService {
    private prisma;
    private eventEmitter;
    constructor(prisma: PrismaService, eventEmitter: EventEmitter2);
    create(createHabitDto: CreateHabitDto): Promise<{
        description: string | null;
        title: string;
        userId: number;
        categoryId: number | null;
        id: number;
        createdAt: Date;
        updatedAt: Date;
    }>;
    findAll(): Promise<({
        user: {
            id: number;
            createdAt: Date;
            updatedAt: Date;
            name: string | null;
            email: string;
        };
        category: {
            description: string | null;
            id: number;
            createdAt: Date;
            name: string;
        } | null;
    } & {
        description: string | null;
        title: string;
        userId: number;
        categoryId: number | null;
        id: number;
        createdAt: Date;
        updatedAt: Date;
    })[]>;
    findOne(id: number): Promise<({
        user: {
            id: number;
            createdAt: Date;
            updatedAt: Date;
            name: string | null;
            email: string;
        };
        category: {
            description: string | null;
            id: number;
            createdAt: Date;
            name: string;
        } | null;
        logs: {
            id: number;
            createdAt: Date;
            habitId: number;
            date: Date;
            completed: boolean;
            notes: string | null;
        }[];
    } & {
        description: string | null;
        title: string;
        userId: number;
        categoryId: number | null;
        id: number;
        createdAt: Date;
        updatedAt: Date;
    }) | null>;
    update(id: number, updateHabitDto: UpdateHabitDto): Promise<{
        description: string | null;
        title: string;
        userId: number;
        categoryId: number | null;
        id: number;
        createdAt: Date;
        updatedAt: Date;
    }>;
    remove(id: number): Promise<{
        description: string | null;
        title: string;
        userId: number;
        categoryId: number | null;
        id: number;
        createdAt: Date;
        updatedAt: Date;
    }>;
    findAllPaginated(page?: number, limit?: number): Promise<{
        data: ({
            user: {
                id: number;
                createdAt: Date;
                updatedAt: Date;
                name: string | null;
                email: string;
            };
            category: {
                description: string | null;
                id: number;
                createdAt: Date;
                name: string;
            } | null;
        } & {
            description: string | null;
            title: string;
            userId: number;
            categoryId: number | null;
            id: number;
            createdAt: Date;
            updatedAt: Date;
        })[];
        pagination: {
            page: number;
            limit: number;
            total: number;
            totalPages: number;
            next: string | null;
            prev: string | null;
        };
    }>;
}
