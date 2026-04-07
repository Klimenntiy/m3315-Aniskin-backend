import { HabitsService } from './habits.service';
import { CreateHabitInput } from './graphql/create-habit.input';
import { UpdateHabitInput } from './graphql/update-habit.input';
export declare class HabitsResolver {
    private habitsService;
    constructor(habitsService: HabitsService);
    habits(): Promise<({
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
    habit(id: number): Promise<({
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
    habitsPaginated(page: number, limit: number): Promise<{
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
    createHabit(input: CreateHabitInput): Promise<{
        description: string | null;
        title: string;
        userId: number;
        categoryId: number | null;
        id: number;
        createdAt: Date;
        updatedAt: Date;
    }>;
    updateHabit(input: UpdateHabitInput): Promise<{
        description: string | null;
        title: string;
        userId: number;
        categoryId: number | null;
        id: number;
        createdAt: Date;
        updatedAt: Date;
    }>;
    deleteHabit(id: number): Promise<{
        description: string | null;
        title: string;
        userId: number;
        categoryId: number | null;
        id: number;
        createdAt: Date;
        updatedAt: Date;
    }>;
}
