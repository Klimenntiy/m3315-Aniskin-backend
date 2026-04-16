import { ObjectType, Field, Int } from '@nestjs/graphql';
import { HabitType } from "./habit.type";

@ObjectType()
export class PaginationInfo {
    @Field(() => Int)
    page: number;

    @Field(() => Int)
    limit: number;

    @Field(() => Int)
    total: number;

    @Field(() => Int)
    totalPages: number;

    @Field({ nullable: true })
    next: string;

    @Field({ nullable: true })
    prev: string;
}

@ObjectType()
export class HabitsPaginatedType {
    @Field(() => [HabitType])
    data: HabitType[];

    @Field(() => PaginationInfo)
    pagination: PaginationInfo;
}