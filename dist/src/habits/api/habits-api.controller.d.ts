import { HabitsService } from '../habits.service';
import { CreateHabitDto } from '../dto/create-habit.dto';
import { UpdateHabitDto } from '../dto/update-habit.dto';
export declare class HabitsApiController {
    private readonly habitsService;
    constructor(habitsService: HabitsService);
    create(createHabitDto: CreateHabitDto): Promise<{
        description: string | null;
        title: string;
        userId: number;
        categoryId: number | null;
        id: number;
        createdAt: Date;
        updatedAt: Date;
    }>;
    findAll(page?: string, limit?: string): Promise<{
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
    findOne(id: string): Promise<({
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
    update(id: string, updateHabitDto: UpdateHabitDto): Promise<{
        description: string | null;
        title: string;
        userId: number;
        categoryId: number | null;
        id: number;
        createdAt: Date;
        updatedAt: Date;
    }>;
    remove(id: string): Promise<{
        description: string | null;
        title: string;
        userId: number;
        categoryId: number | null;
        id: number;
        createdAt: Date;
        updatedAt: Date;
    }>;
}
