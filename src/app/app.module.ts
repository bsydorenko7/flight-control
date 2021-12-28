import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CheckingTicketComponent } from './checking-ticket/checking-ticket.component';

@NgModule({
  declarations: [
    AppComponent,
    CheckingTicketComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
