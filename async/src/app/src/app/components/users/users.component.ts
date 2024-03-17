import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DataService, User } from 'src/app/services/data.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  _users$!: Observable<User[]>;
  constructor(private _data: DataService) { }

  ngOnInit(): void {
    this._users$ = this._data.getData();
  }
}
