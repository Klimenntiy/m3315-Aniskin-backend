import { Module } from '@nestjs/common';
import { HabitsService } from './habits.service';
import { HabitsController } from './habits.controller';
import { HabitsApiController } from './api/habits-api.controller';
import { HabitsResolver } from './habits.resolver';
import { PrismaModule } from '../prisma.module';

@Module({
    imports: [PrismaModule],
    controllers: [HabitsController, HabitsApiController],
    providers: [HabitsService, HabitsResolver],
    exports: [HabitsService],
})
export class HabitsModule {}