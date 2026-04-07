import { Injectable, NestInterceptor, ExecutionContext, CallHandler } from '@nestjs/common';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable()
export class LoggingInterceptor implements NestInterceptor {
    intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
        const request = context.switchToHttp().getRequest();
        const { method, url } = request;

        const now = Date.now();

        return next.handle().pipe(
            tap(() => {
                const responseTime = Date.now() - now;

                console.log(`[${method}] ${url} took ${responseTime}ms`);

                const response = context.switchToHttp().getResponse();
                response.setHeader('X-Response-Time', `${responseTime}ms`);
            }),
        );
    }
}