import { EventEmitter2 } from '@nestjs/event-emitter';
import { PrismaService } from '../prisma.service';
import { CreateHabitDto } from './dto/create-habit.dto';
import { UpdateHabitDto } from './dto/update-habit.dto';
export declare class HabitsService {
    private prisma;
    private eventEmitter;
    constructor(prisma: PrismaService, eventEmitter: EventEmitter2);
    create(createHabitDto: CreateHabitDto): Promise<{
        title: string;
        description: string | null;
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
        title: string;
        description: string | null;
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
        title: string;
        description: string | null;
        userId: number;
        categoryId: number | null;
        id: number;
        createdAt: Date;
        updatedAt: Date;
    }) | null>;
    update(id: number, updateHabitDto: UpdateHabitDto): Promise<{
        title: string;
        description: string | null;
        userId: number;
        categoryId: number | null;
        id: number;
        createdAt: Date;
        updatedAt: Date;
    }>;
    remove(id: number): Promise<{
        title: string;
        description: string | null;
        userId: number;
        categoryId: number | null;
        id: number;
        createdAt: Date;
        updatedAt: Date;
    }>;
}
