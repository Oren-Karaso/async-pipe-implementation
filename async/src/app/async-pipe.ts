import { ChangeDetectorRef, OnDestroy, Pipe, PipeTransform } from "@angular/core";
import { Observable, Subject, from, isObservable } from "rxjs";
import { takeUntil } from "rxjs/operators";

@Pipe({ name: 'myAsync', pure: false }) // Marking an unpure so the pipe will be triggered on every change detection cycle
export class MyAsyncPipe implements PipeTransform, OnDestroy {

    private _currentValue?: any;
    private _destroy$ = new Subject<void>();

    constructor(private readonly _ref: ChangeDetectorRef) { }

    ngOnDestroy() {
        this._destroy$.next();
        this._destroy$.complete();
    }

    transform<T>(asyncDataSource$: Observable<T> | Promise<T>): T | undefined {
        const data$ = isObservable(asyncDataSource$) ? asyncDataSource$ : from(asyncDataSource$); // Converting to observable in case of a promise input
        data$.pipe(
            takeUntil(this._destroy$) // onDestroy will next the subject and complete the data$ stream
        ).subscribe({
            next: value => {
                this._currentValue = value;
                this._ref.markForCheck();
            },
            error: error => {
                console.error(error);
            }
        });
        return this._currentValue; // Correct type will be infered
    }
}
