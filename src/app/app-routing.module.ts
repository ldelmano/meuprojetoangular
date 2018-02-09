import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { ListComponent } from './ranking/list/list.component';

const AppRoutes: Routes = [
    { 
        path: '',
        redirectTo: 'ranking',
        pathMatch: 'full'
    },
    {
        path: 'ranking',
        loadChildren: 'app/ranking/ranking.module#RankingModule'
    }
];

@NgModule({
    imports: [RouterModule.forRoot(AppRoutes)],
    exports: [RouterModule]
})

export class AppRoutingModule {

}