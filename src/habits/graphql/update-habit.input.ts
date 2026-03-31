import { InputType, Field, Int, PartialType } from '@nestjs/graphql';
import { CreateHabitInput } from './create-habit.input';

@InputType()
export class UpdateHabitInput extends PartialType(CreateHabitInput) {
    @Field(() => Int)
    id: number;
}