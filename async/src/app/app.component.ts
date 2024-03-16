import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DataService, User } from './services/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  _users$!: Observable<User[]>;
  constructor(private _data: DataService) { }

  ngOnInit(): void {
    this._users$ = this._data.getData();
  }
}
