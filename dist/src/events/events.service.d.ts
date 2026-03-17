import { EventEmitter2 } from '@nestjs/event-emitter';
import { Observable } from 'rxjs';
export declare class EventsService {
    private eventEmitter;
    private habitCreatedSubject;
    constructor(eventEmitter: EventEmitter2);
    getHabitCreatedStream(): Observable<any>;
}
