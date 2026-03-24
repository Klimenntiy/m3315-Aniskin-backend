import { config } from 'dotenv';
config();

import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { NestExpressApplication } from '@nestjs/platform-express';
import { join } from 'path';
import methodOverride from 'method-override';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { HttpExceptionFilter } from "./common/filters/http-exception.filter";

async function bootstrap() {
    const app = await NestFactory.create<NestExpressApplication>(AppModule);

    app.useGlobalFilters(new HttpExceptionFilter());

    const swaggerConfig = new DocumentBuilder()
        .setTitle('HabitTracker API')
        .setDescription('API для управления привычками')
        .setVersion('1.0')
        .addTag('habits', 'Работа с привычками')
        .build();
    const document = SwaggerModule.createDocument(app, swaggerConfig);
    SwaggerModule.setup('api-docs', app, document);

    app.use(methodOverride('_method'));

    app.useStaticAssets(join(__dirname, '..', 'public'));
    app.useStaticAssets(join(process.cwd(), 'public'));

    app.setBaseViewsDir(join(process.cwd(), 'views'));

    app.setViewEngine('ejs');

    const port = process.env.PORT || 3000;
    await app.listen(port);
    console.log(`Application is running on: http://localhost:${port}`);
    console.log(`Swagger: http://localhost:${port}/api-docs`);
}
bootstrap();