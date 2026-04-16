import { ObjectType, Field, Int } from '@nestjs/graphql';
import { UserType } from "../../users/graphql/user.type";

@ObjectType()
export class HabitType {
    @Field(() => Int)
    id: number;

    @Field()
    title: string;

    @Field({ nullable: true })
    description?: string;

    @Field(() => Int)
    userId: number;

    @Field(() => Int, { nullable: true })
    categoryId?: number;

    @Field(() => UserType, { nullable: true })
    user?: UserType;

    @Field()
    createdAt: Date;

    @Field()
    updatedAt: Date;
}