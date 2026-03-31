import { HabitType } from "./habit.type";
export declare class PaginationInfo {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
    next: string;
    prev: string;
}
export declare class HabitsPaginatedType {
    data: HabitType[];
    pagination: PaginationInfo;
}
