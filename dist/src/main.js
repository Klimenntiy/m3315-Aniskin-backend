"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = require("dotenv");
(0, dotenv_1.config)();
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const path_1 = require("path");
const method_override_1 = __importDefault(require("method-override"));
const swagger_1 = require("@nestjs/swagger");
const http_exception_filter_1 = require("./common/filters/http-exception.filter");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.useGlobalFilters(new http_exception_filter_1.HttpExceptionFilter());
    const swaggerConfig = new swagger_1.DocumentBuilder()
        .setTitle('HabitTracker API')
        .setDescription('API для управления привычками')
        .setVersion('1.0')
        .addTag('habits', 'Работа с привычками')
        .build();
    const document = swagger_1.SwaggerModule.createDocument(app, swaggerConfig);
    swagger_1.SwaggerModule.setup('api-docs', app, document);
    app.use((0, method_override_1.default)('_method'));
    app.useStaticAssets((0, path_1.join)(__dirname, '..', 'public'));
    app.useStaticAssets((0, path_1.join)(process.cwd(), 'public'));
    app.setBaseViewsDir((0, path_1.join)(process.cwd(), 'views'));
    app.setViewEngine('ejs');
    const port = process.env.PORT || 3000;
    await app.listen(port);
    console.log(`Application is running on: http://localhost:${port}`);
    console.log(`Swagger: http://localhost:${port}/api-docs`);
}
bootstrap();
//# sourceMappingURL=main.js.map