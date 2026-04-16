import { Controller, Sse, MessageEvent } from '@nestjs/common';
import { EventsService } from './events.service';
import { Observable, map } from 'rxjs';

@Controller('events')
export class EventsController {
    constructor(private eventsService: EventsService) {}

    @Sse('habits')
    habitEvents(): Observable<MessageEvent> {
        console.log('Client connected to SSE endpoint');

        return this.eventsService.getHabitCreatedStream().pipe(
            map((habit) => ({
                data: {
                    message: 'Новая привычка создана!',
                    habit: {
                        id: habit.id,
                        title: habit.title,
                    },
                    time: new Date().toLocaleTimeString(),
                },
            })),
        );
    }
}