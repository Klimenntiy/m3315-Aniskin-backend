import { HabitsService } from './habits/habits.service';
export declare class AppController {
    private readonly habitsService;
    constructor(habitsService: HabitsService);
    getIndexPage(auth: string): Promise<{
        title: string;
        features: {
            title: string;
            description: string;
        }[];
        session: {
            isLoggedIn: boolean;
            username: string | null;
        };
    }>;
    getAddHabitPage(auth: string): {
        title: string;
        session: {
            isLoggedIn: boolean;
            username: string | null;
        };
    };
    getProgressPage(auth: string): {
        title: string;
        session: {
            isLoggedIn: boolean;
            username: string | null;
        };
    };
    getContactsPage(auth: string): {
        title: string;
        session: {
            isLoggedIn: boolean;
            username: string | null;
        };
    };
    getCommentsPage(auth: string): {
        title: string;
        session: {
            isLoggedIn: boolean;
            username: string | null;
        };
    };
    getFinancePage(auth: string): {
        title: string;
        session: {
            isLoggedIn: boolean;
            username: string | null;
        };
    };
    getSchedulePage(auth: string): {
        title: string;
        session: {
            isLoggedIn: boolean;
            username: string | null;
        };
    };
    getTableConstructorPage(auth: string): {
        title: string;
        session: {
            isLoggedIn: boolean;
            username: string | null;
        };
    };
    getGalleryPage(auth: string): {
        title: string;
        session: {
            isLoggedIn: boolean;
            username: string | null;
        };
    };
    getHabitsPage(auth: string): Promise<{
        title: string;
        habits: ({
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
        })[];
        session: {
            isLoggedIn: boolean;
            username: string | null;
        };
    }>;
}
