import { InputType, Field, Int } from '@nestjs/graphql';

@InputType()
export class CreateHabitInput {
    @Field()
    title: string;

    @Field({ nullable: true })
    description?: string;

    @Field(() => Int)
    userId: number;

    @Field(() => Int, { nullable: true })
    categoryId?: number;
}