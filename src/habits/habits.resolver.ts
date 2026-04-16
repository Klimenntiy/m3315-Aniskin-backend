import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { HabitsService } from './habits.service';
import { HabitType } from './graphql/habit.type';
import { CreateHabitInput } from './graphql/create-habit.input';
import { UpdateHabitInput } from './graphql/update-habit.input';
import { HabitsPaginatedType } from './graphql/habits-paginated.type';

@Resolver(() => HabitType)
export class HabitsResolver {
    constructor(private habitsService: HabitsService) {}

    @Query(() => [HabitType])
    async habits() {
        return this.habitsService.findAll();
    }

    @Query(() => HabitType, { nullable: true })
    async habit(@Args('id', { type: () => Int }) id: number) {
        return this.habitsService.findOne(id);
    }

    @Query(() => HabitsPaginatedType)
    async habitsPaginated(
        @Args('page', { type: () => Int, defaultValue: 1 }) page: number,
        @Args('limit', { type: () => Int, defaultValue: 10 }) limit: number,
    ) {
        return this.habitsService.findAllPaginated(page, limit);
    }

    @Mutation(() => HabitType)
    async createHabit(@Args('input') input: CreateHabitInput) {
        return this.habitsService.create(input);
    }

    @Mutation(() => HabitType)
    async updateHabit(@Args('input') input: UpdateHabitInput) {
        return this.habitsService.update(input.id, input);
    }

    @Mutation(() => HabitType)
    async deleteHabit(@Args('id', { type: () => Int }) id: number) {
        return this.habitsService.remove(id);
    }
}