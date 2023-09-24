import { CallHandler, ExecutionContext, Injectable, NestInterceptor } from '@nestjs/common';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class MainInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    return next.handle().pipe(
      map(data => {
        if (Array.isArray(data)) {
          // If it's an array, remove the "_id" property from each item
          return data.map(item => {
            if (item._id) {
              delete item._id;
            }
            return item;
          });
        } else if (data && typeof data === 'object' && data.hasOwnProperty('_id')) {
          // If it's an object with an "_id" property, remove the "_id" property
          delete data._id;
        }

        return data;
      }),
    );
  }
}
