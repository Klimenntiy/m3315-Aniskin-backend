import { UserType } from "../../users/graphql/user.type";
export declare class HabitType {
    id: number;
    title: string;
    description?: string;
    userId: number;
    categoryId?: number;
    user?: UserType;
    createdAt: Date;
    updatedAt: Date;
}
