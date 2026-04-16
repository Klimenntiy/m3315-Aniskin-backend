import { Controller, Get, Post, Body, Patch, Param, Delete, Render, Query } from "@nestjs/common";
import { HabitsService } from './habits.service';
import { CreateHabitDto } from './dto/create-habit.dto';
import { UpdateHabitDto } from './dto/update-habit.dto';

@Controller('habits')
export class HabitsController {
    constructor(private readonly habitsService: HabitsService) {}

    @Post()
    create(@Body() createHabitDto: CreateHabitDto) {
        return this.habitsService.create(createHabitDto);
    }

    @Get()
    findAll() {
        return this.habitsService.findAll();
    }

    @Get('new')
    @Render('habits/new')
    async createForm(@Query('auth') auth: string) {
        return {
            title: 'Новая привычка',
            page: 'habits-new',
            session: {
                isLoggedIn: auth === 'true',
                username: auth === 'true' ? 'Иван Петров' : null,
            },
        };
    }

    @Get(':id')
    @Render('habits/show')
    async findOne(@Param('id') id: string) {
        const numericId = +id;
        if (isNaN(numericId)) {
            throw new Error(`Invalid id format: ${id}`);
        }
        const habit = await this.habitsService.findOne(numericId);
        if (!habit) {
            throw new Error(`Habit with id ${id} not found`);
        }
        return {
            title: habit.title,
            habit: habit,
            session: {
                isLoggedIn: false,
            },
        };
    }

    @Patch(':id')
    update(@Param('id') id: string, @Body() updateHabitDto: UpdateHabitDto) {
        return this.habitsService.update(+id, updateHabitDto);
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
        return this.habitsService.remove(+id);
    }

    @Get(':id/edit')
    @Render('habits/edit')
    async editForm(@Param('id') id: string, @Query('auth') auth: string) {
        const numericId = +id;
        if (isNaN(numericId)) {
            throw new Error(`Invalid id format: ${id}`);
        }
        const habit = await this.habitsService.findOne(numericId);
        if (!habit) {
            throw new Error(`Habit with id ${id} not found`);
        }
        return {
            title: 'Редактировать привычку',
            habit: habit,
            session: {
                isLoggedIn: auth === 'true',
                username: auth === 'true' ? 'Иван Петров' : null,
            },
        };
    }
}