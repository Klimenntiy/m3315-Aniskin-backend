import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { HabitsModule } from './habits/habits.module';
import { EventsModule } from './events/events.module';

@Module({
    imports: [HabitsModule, EventsModule],
    controllers: [AppController],
    providers: [],
})
export class AppModule {}