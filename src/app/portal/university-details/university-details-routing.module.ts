import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UniversityDetailsComponent } from './university-details.component';
import { universityResolver } from './university.resolver';

const routes: Routes = [
    {
        path:'',
        component:UniversityDetailsComponent,
        resolve:{
            universityresolver:universityResolver
        }
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UniversityDetailsRoutingModule { }
