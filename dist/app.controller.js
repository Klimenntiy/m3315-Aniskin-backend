"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppController = void 0;
const common_1 = require("@nestjs/common");
let AppController = class AppController {
    getIndexPage(auth) {
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
    getAddHabitPage(auth) {
        return {
            title: 'Добавить привычку',
            session: {
                isLoggedIn: auth === 'true',
                username: auth === 'true' ? 'Иван Петров' : null,
            },
        };
    }
    getProgressPage(auth) {
        return {
            title: 'Прогресс',
            session: {
                isLoggedIn: auth === 'true',
                username: auth === 'true' ? 'Иван Петров' : null,
            },
        };
    }
    getContactsPage(auth) {
        return {
            title: 'Контакты',
            session: {
                isLoggedIn: auth === 'true',
                username: auth === 'true' ? 'Иван Петров' : null,
            },
        };
    }
    getCommentsPage(auth) {
        return {
            title: 'Комментарии',
            session: {
                isLoggedIn: auth === 'true',
                username: auth === 'true' ? 'Иван Петров' : null,
            },
        };
    }
    getFinancePage(auth) {
        return {
            title: 'Финансы',
            session: {
                isLoggedIn: auth === 'true',
                username: auth === 'true' ? 'Иван Петров' : null,
            },
        };
    }
    getSchedulePage(auth) {
        return {
            title: 'Расписание',
            session: {
                isLoggedIn: auth === 'true',
                username: auth === 'true' ? 'Иван Петров' : null,
            },
        };
    }
    getTableConstructorPage(auth) {
        return {
            title: 'Конструктор таблиц',
            session: {
                isLoggedIn: auth === 'true',
                username: auth === 'true' ? 'Иван Петров' : null,
            },
        };
    }
    getGalleryPage(auth) {
        return {
            title: 'Галерея',
            session: {
                isLoggedIn: auth === 'true',
                username: auth === 'true' ? 'Иван Петров' : null,
            },
        };
    }
};
exports.AppController = AppController;
__decorate([
    (0, common_1.Get)(),
    (0, common_1.Render)('index'),
    __param(0, (0, common_1.Query)('auth')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], AppController.prototype, "getIndexPage", null);
__decorate([
    (0, common_1.Get)('add-habit'),
    (0, common_1.Render)('add-habit'),
    __param(0, (0, common_1.Query)('auth')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], AppController.prototype, "getAddHabitPage", null);
__decorate([
    (0, common_1.Get)('progress'),
    (0, common_1.Render)('progress'),
    __param(0, (0, common_1.Query)('auth')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], AppController.prototype, "getProgressPage", null);
__decorate([
    (0, common_1.Get)('contacts'),
    (0, common_1.Render)('contacts'),
    __param(0, (0, common_1.Query)('auth')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], AppController.prototype, "getContactsPage", null);
__decorate([
    (0, common_1.Get)('comments'),
    (0, common_1.Render)('comments'),
    __param(0, (0, common_1.Query)('auth')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], AppController.prototype, "getCommentsPage", null);
__decorate([
    (0, common_1.Get)('finance'),
    (0, common_1.Render)('finance'),
    __param(0, (0, common_1.Query)('auth')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], AppController.prototype, "getFinancePage", null);
__decorate([
    (0, common_1.Get)('schedule'),
    (0, common_1.Render)('schedule'),
    __param(0, (0, common_1.Query)('auth')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], AppController.prototype, "getSchedulePage", null);
__decorate([
    (0, common_1.Get)('table-constructor'),
    (0, common_1.Render)('table-constructor'),
    __param(0, (0, common_1.Query)('auth')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], AppController.prototype, "getTableConstructorPage", null);
__decorate([
    (0, common_1.Get)('gallery'),
    (0, common_1.Render)('gallery'),
    __param(0, (0, common_1.Query)('auth')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], AppController.prototype, "getGalleryPage", null);
exports.AppController = AppController = __decorate([
    (0, common_1.Controller)()
], AppController);
//# sourceMappingURL=app.controller.js.map