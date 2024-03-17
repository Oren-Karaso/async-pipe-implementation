import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';

export type User = { id: number, name: string, age: number };

@Injectable({
    providedIn: 'root'
})
export class DataService {
    private users: User[] = [
        { id: 1, name: 'John', age: 30 },
        { id: 2, name: 'Alice', age: 25 },
        { id: 3, name: 'Bob', age: 35 },
        { id: 4, name: 'Emily', age: 28 },
        { id: 5, name: 'David', age: 32 },
        { id: 6, name: 'Sarah', age: 27 },
        { id: 7, name: 'Mark', age: 29 },
        { id: 8, name: 'Lisa', age: 26 },
        { id: 9, name: 'Tom', age: 34 },
        { id: 10, name: 'Jerry', age: 31 }
    ];

    getData(): Observable<User[]> {
        // Simulate an asynchronous operation with delay
        return of(this.users).pipe(delay(1000));
    }
}
