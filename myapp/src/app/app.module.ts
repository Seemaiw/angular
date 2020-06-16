import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InfiniteScrollingComponent } from './practice/infinite-scrolling/infinite-scrolling.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MaterialModule} from './practice/material/material.module';
import { MainComponent } from './practice/main/main.component';

@NgModule({
  declarations: [
    AppComponent,
    InfiniteScrollingComponent,
    MainComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        MaterialModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
