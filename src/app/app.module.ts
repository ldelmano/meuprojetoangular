import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { RankingModule } from './ranking/ranking.module';
import { RankingService } from './ranking/ranking.service';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    RankingModule
  ],
  providers: [RankingService],
  bootstrap: [AppComponent]
})
export class AppModule { }
