import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { WorkComponent } from './work/work.component';
import { EduComponent } from './edu/edu.component';

@NgModule({
  declarations: [
    AppComponent,
    WorkComponent,
    EduComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
