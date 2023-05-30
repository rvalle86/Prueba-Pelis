import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { MoviesTableComponent } from './components/movies-table/movies-table.component';
import { ByGeneralPageComponent } from './pages/by-general-page/by-general-page.component';
import { ByIdComponent } from './pages/by-id/by-id.component';

const routes: Routes = [
  {
    path: 'by-general',
    component: ByGeneralPageComponent,
  },
  {
    path: 'by/:id',
    component: ByIdComponent,
  },
  {
    path: '**',
    redirectTo: 'by-general',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MoviesRoutingModule {}
