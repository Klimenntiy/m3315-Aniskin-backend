import { Controller, Get, Query, Render } from '@nestjs/common';
import { HabitsService } from './habits/habits.service';

@Controller()
export class AppController {
    constructor(private readonly habitsService: HabitsService) {}

    @Get()
    @Render('index')
    async getIndexPage(@Query('auth') auth: string) {
        const features = [
            {
                title: 'Планирование',
                description: 'Создавайте расписание привычек на каждый день',
            },
            {
                title: 'Отслеживание',
                description: 'Наблюдайте за своим прогрессом в реальном времени',
            },
            { title: 'Мотивация', description: 'Получайте награды за достижения' },
        ];

        return {
            title: 'Главная',
            features: features,
            session: {
                isLoggedIn: auth === 'true',
                username: auth === 'true' ? 'Иван Петров' : null,
            },
        };
    }

    @Get('add-habit')
    @Render('add-habit')
    getAddHabitPage(@Query('auth') auth: string) {
        return {
            title: 'Добавить привычку',
            session: {
                isLoggedIn: auth === 'true',
                username: auth === 'true' ? 'Иван Петров' : null,
            },
        };
    }

    @Get('progress')
    @Render('progress')
    getProgressPage(@Query('auth') auth: string) {
        return {
            title: 'Прогресс',
            session: {
                isLoggedIn: auth === 'true',
                username: auth === 'true' ? 'Иван Петров' : null,
            },
        };
    }

    @Get('contacts')
    @Render('contacts')
    getContactsPage(@Query('auth') auth: string) {
        return {
            title: 'Контакты',
            session: {
                isLoggedIn: auth === 'true',
                username: auth === 'true' ? 'Иван Петров' : null,
            },
        };
    }

    @Get('comments')
    @Render('comments')
    getCommentsPage(@Query('auth') auth: string) {
        return {
            title: 'Комментарии',
            session: {
                isLoggedIn: auth === 'true',
                username: auth === 'true' ? 'Иван Петров' : null,
            },
        };
    }

    @Get('finance')
    @Render('finance')
    getFinancePage(@Query('auth') auth: string) {
        return {
            title: 'Финансы',
            session: {
                isLoggedIn: auth === 'true',
                username: auth === 'true' ? 'Иван Петров' : null,
            },
        };
    }

    @Get('schedule')
    @Render('schedule')
    getSchedulePage(@Query('auth') auth: string) {
        return {
            title: 'Расписание',
            session: {
                isLoggedIn: auth === 'true',
                username: auth === 'true' ? 'Иван Петров' : null,
            },
        };
    }

    @Get('table-constructor')
    @Render('table-constructor')
    getTableConstructorPage(@Query('auth') auth: string) {
        return {
            title: 'Конструктор таблиц',
            session: {
                isLoggedIn: auth === 'true',
                username: auth === 'true' ? 'Иван Петров' : null,
            },
        };
    }

    @Get('gallery')
    @Render('gallery')
    getGalleryPage(@Query('auth') auth: string) {
        return {
            title: 'Галерея',
            session: {
                isLoggedIn: auth === 'true',
                username: auth === 'true' ? 'Иван Петров' : null,
            },
        };
    }

    @Get('habits')
    @Render('habits/index')
    async getHabitsPage(@Query('auth') auth: string) {
        const habits = await this.habitsService.findAll();
        return {
            title: 'Мои привычки',
            habits: habits,
            session: {
                isLoggedIn: auth === 'true',
                username: auth === 'true' ? 'Иван Петров' : null,
            },
        };
    }
}