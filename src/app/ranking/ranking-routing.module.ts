import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { RankingComponent } from './ranking.component';
import { ListComponent } from './list/list.component';
import { RegisterComponent } from './register/register.component';

const RankingRoutes: Routes = [
    {
        path: '',
        component: RankingComponent,
        children: [
            {
                path: '',
                component: ListComponent
            },
            {
              path: 'register',
              component: RegisterComponent
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(RankingRoutes)],
    exports: [RouterModule]
})

export class RankingRoutingModule {

}
