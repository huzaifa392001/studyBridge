import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApplyUniversityComponent } from './apply-university.component';

const routes: Routes = [
    {
        path:'',
        component:ApplyUniversityComponent
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ApplyUniversityRoutingModule { }
