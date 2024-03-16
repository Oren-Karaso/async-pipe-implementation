import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';

export type User = { id: number, name: string, age: number };

@Injectable({
    providedIn: 'root'
})
export class DataService {
    private data: User[] = [
        { id: 1, name: 'John', age: 30 },
        { id: 2, name: 'Alice', age: 25 },
        { id: 3, name: 'Bob', age: 35 },
        { id: 4, name: 'Emily', age: 28 }
    ];

    getData(): Observable<User[]> {
        // Simulate an asynchronous operation with delay
        return of(this.data).pipe(delay(1000));
    }
}
