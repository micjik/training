import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Home1Component } from './home1.component';
import { Home2Component } from './home2.component';
import { Home3Component } from './home3.component';
import { Home4Component } from './home4.component';
import { Home5Component } from './home5/home5.component';

@NgModule({
  declarations: [
    AppComponent,
    Home1Component,
    Home2Component,
    Home3Component,
    Home4Component,
    Home5Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
