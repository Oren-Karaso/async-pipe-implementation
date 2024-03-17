import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MyAsyncPipe } from './pipes/async-pipe';
import { UsersComponent } from './src/app/components/users/users.component';

@NgModule({
  declarations: [
    AppComponent,
    MyAsyncPipe,
    UsersComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
