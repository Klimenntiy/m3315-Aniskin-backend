import { Injectable } from '@nestjs/common';
import { EventEmitter2 } from '@nestjs/event-emitter';
import { Observable, Subject } from 'rxjs';

@Injectable()
export class EventsService {
    private habitCreatedSubject = new Subject<any>();

    constructor(private eventEmitter: EventEmitter2) {
        this.eventEmitter.on('habit.created', (habit) => {
            console.log('Event received in service:', habit);
            this.habitCreatedSubject.next(habit);
        });
    }

    getHabitCreatedStream(): Observable<any> {
        console.log('Client subscribed to stream');
        return this.habitCreatedSubject.asObservable();
    }
}