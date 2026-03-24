import { HabitsService } from './habits.service';
import { CreateHabitDto } from './dto/create-habit.dto';
import { UpdateHabitDto } from './dto/update-habit.dto';
export declare class HabitsController {
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
    createForm(auth: string): Promise<{
        title: string;
        page: string;
        session: {
            isLoggedIn: boolean;
            username: string | null;
        };
    }>;
    findOne(id: string): Promise<{
        title: string;
        habit: {
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
        };
        session: {
            isLoggedIn: boolean;
        };
    }>;
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
    editForm(id: string, auth: string): Promise<{
        title: string;
        habit: {
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
        };
        session: {
            isLoggedIn: boolean;
            username: string | null;
        };
    }>;
}
