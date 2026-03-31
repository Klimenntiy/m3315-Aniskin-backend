import { HabitsService } from './habits.service';
import { CreateHabitInput } from './graphql/create-habit.input';
import { UpdateHabitInput } from './graphql/update-habit.input';
export declare class HabitsResolver {
    private habitsService;
    constructor(habitsService: HabitsService);
    habits(): Promise<({
        user: {
            id: number;
            email: string;
            name: string | null;
            createdAt: Date;
            updatedAt: Date;
        };
        category: {
            id: number;
            name: string;
            createdAt: Date;
            description: string | null;
        } | null;
    } & {
        id: number;
        createdAt: Date;
        updatedAt: Date;
        title: string;
        description: string | null;
        userId: number;
        categoryId: number | null;
    })[]>;
    habit(id: number): Promise<({
        user: {
            id: number;
            email: string;
            name: string | null;
            createdAt: Date;
            updatedAt: Date;
        };
        category: {
            id: number;
            name: string;
            createdAt: Date;
            description: string | null;
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
        id: number;
        createdAt: Date;
        updatedAt: Date;
        title: string;
        description: string | null;
        userId: number;
        categoryId: number | null;
    }) | null>;
    habitsPaginated(page: number, limit: number): Promise<{
        data: ({
            user: {
                id: number;
                email: string;
                name: string | null;
                createdAt: Date;
                updatedAt: Date;
            };
            category: {
                id: number;
                name: string;
                createdAt: Date;
                description: string | null;
            } | null;
        } & {
            id: number;
            createdAt: Date;
            updatedAt: Date;
            title: string;
            description: string | null;
            userId: number;
            categoryId: number | null;
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
    createHabit(input: CreateHabitInput): Promise<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        title: string;
        description: string | null;
        userId: number;
        categoryId: number | null;
    }>;
    updateHabit(input: UpdateHabitInput): Promise<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        title: string;
        description: string | null;
        userId: number;
        categoryId: number | null;
    }>;
    deleteHabit(id: number): Promise<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        title: string;
        description: string | null;
        userId: number;
        categoryId: number | null;
    }>;
}
