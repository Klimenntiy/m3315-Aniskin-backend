import { config } from 'dotenv';
config();

import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { NestExpressApplication } from '@nestjs/platform-express';
import { join } from 'path';
import methodOverride from 'method-override';

async function bootstrap() {
    const app = await NestFactory.create<NestExpressApplication>(AppModule);

    app.use(methodOverride('_method'))

    app.useStaticAssets(join(__dirname, '..', 'public'));
    app.useStaticAssets(join(process.cwd(), 'public'));

    app.setBaseViewsDir(join(process.cwd(), 'views'));

    app.setViewEngine('ejs');

    const port = process.env.PORT || 3000;
    await app.listen(port);
    console.log(`Application is running on: http://localhost:${port}`);
}
bootstrap();