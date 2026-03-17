import { MessageEvent } from '@nestjs/common';
import { EventsService } from './events.service';
import { Observable } from 'rxjs';
export declare class EventsController {
    private eventsService;
    constructor(eventsService: EventsService);
    habitEvents(): Observable<MessageEvent>;
}
