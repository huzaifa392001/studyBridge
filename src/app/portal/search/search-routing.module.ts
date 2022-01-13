import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchComponent } from './search.component';
import { searchResolver } from './search.resolver';

const routes: Routes = [
    {
        path: '',
        component: SearchComponent,
        resolve: {
            searchresolver: searchResolver
        }
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class SearchRoutingModule { }
