import { IsString, IsNotEmpty, IsInt, IsOptional, Min, MaxLength } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateHabitDto {
    @ApiProperty({ example: 'Утренняя зарядка', description: 'Название привычки' })
    @IsString()
    @IsNotEmpty({ message: 'Название обязательно' })
    @MaxLength(100, { message: 'Название не должно превышать 100 символов' })
    title: string;

    @ApiProperty({ required: false, example: '10 минут упражнений', description: 'Описание привычки' })
    @IsString()
    @IsOptional()
    @MaxLength(500, { message: 'Описание не должно превышать 500 символов' })
    description?: string;

    @ApiProperty({ example: 1, description: 'ID пользователя' })
    @IsInt()
    @Min(1, { message: 'userId должен быть положительным числом' })
    userId: number;

    @ApiProperty({ required: false, example: 1, description: 'ID категории' })
    @IsInt()
    @IsOptional()
    @Min(1, { message: 'categoryId должен быть положительным числом' })
    categoryId?: number;
}