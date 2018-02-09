import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RankingComponent } from './ranking.component';
import { ListComponent } from './list/list.component';
import { RankingRoutingModule } from './ranking-routing.module';
import { SharedModule } from '../shared/shared.module';
import { RegisterComponent } from './register/register.component';

@NgModule({
  imports: [
    CommonModule,
    RankingRoutingModule,
    SharedModule
  ],
  declarations: [RankingComponent, ListComponent, RegisterComponent]
})
export class RankingModule { }
