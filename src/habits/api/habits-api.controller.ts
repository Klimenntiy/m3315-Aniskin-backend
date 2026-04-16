import { Controller, Get, Post, Body, Patch, Param, Delete, UsePipes, ValidationPipe, Query } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse, ApiParam, ApiQuery, ApiBody } from '@nestjs/swagger';
import { HabitsService } from '../habits.service';
import { CreateHabitDto } from '../dto/create-habit.dto';
import { UpdateHabitDto } from '../dto/update-habit.dto';

@ApiTags('habits')
@Controller('api/habits')
export class HabitsApiController {
    constructor(private readonly habitsService: HabitsService) {}

    @Post()
    @ApiOperation({ summary: 'Создать новую привычку' })
    @ApiResponse({ status: 201, description: 'Привычка создана' })
    @ApiResponse({ status: 400, description: 'Неверные данные' })
    @ApiBody({ type: CreateHabitDto })
    @UsePipes(new ValidationPipe({ transform: true, whitelist: true }))
    create(@Body() createHabitDto: CreateHabitDto) {
        return this.habitsService.create(createHabitDto);
    }

    @Get()
    @ApiOperation({ summary: 'Получить список привычек' })
    @ApiResponse({ status: 200, description: 'Список привычек' })
    @ApiQuery({ name: 'page', required: false, type: Number, description: 'Номер страницы' })
    @ApiQuery({ name: 'limit', required: false, type: Number, description: 'Количество на странице' })
    async findAll(
        @Query('page') page?: string,
        @Query('limit') limit?: string,
    ) {
        const pageNum = page ? parseInt(page, 10) : 1;
        const limitNum = limit ? parseInt(limit, 10) : 10;
        return this.habitsService.findAllPaginated(pageNum, limitNum);
    }

    @Get(':id')
    @ApiOperation({ summary: 'Получить привычку по ID' })
    @ApiParam({ name: 'id', description: 'ID привычки' })
    @ApiResponse({ status: 200, description: 'Привычка найдена' })
    @ApiResponse({ status: 404, description: 'Привычка не найдена' })
    findOne(@Param('id') id: string) {
        const numericId = +id;
        if (isNaN(numericId)) {
            throw new Error(`Invalid id format: ${id}`);
        }
        return this.habitsService.findOne(numericId);
    }

    @Patch(':id')
    @ApiOperation({ summary: 'Обновить привычку' })
    @ApiParam({ name: 'id', description: 'ID привычки' })
    @ApiResponse({ status: 200, description: 'Привычка обновлена' })
    @ApiResponse({ status: 404, description: 'Привычка не найдена' })
    update(@Param('id') id: string, @Body() updateHabitDto: UpdateHabitDto) {
        const numericId = +id;
        if (isNaN(numericId)) {
            throw new Error(`Invalid id format: ${id}`);
        }
        return this.habitsService.update(numericId, updateHabitDto);
    }

    @Delete(':id')
    @ApiOperation({ summary: 'Удалить привычку' })
    @ApiParam({ name: 'id', description: 'ID привычки' })
    @ApiResponse({ status: 200, description: 'Привычка удалена' })
    @ApiResponse({ status: 404, description: 'Привычка не найдена' })
    remove(@Param('id') id: string) {
        const numericId = +id;
        if (isNaN(numericId)) {
            throw new Error(`Invalid id format: ${id}`);
        }
        return this.habitsService.remove(numericId);
    }
}