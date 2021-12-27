import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PortalComponent } from './portal.component';

const routes: Routes = [
    {
        path: '',
        component: PortalComponent,
        children: [
            {
                path: '',
                loadChildren: () => import('./home/home.module').then(m => m.HomeModule)
            },
            {
                path: 'search',
                loadChildren: () => import('./search/search.module').then(m => m.SearchModule)
            },
            {
                path: 'university/:id',
                loadChildren: () => import('./university-details/university-details.module').then(m => m.UniversityDetailsModule)
            },
            {
                path: 'university-id',
                loadChildren: () => import('./apply-university/apply-university.module').then(m => m.ApplyUniversityModule)
            },
            {
                path: '',
                redirectTo: '',
                pathMatch: 'full'
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PortalRoutingModule { }
