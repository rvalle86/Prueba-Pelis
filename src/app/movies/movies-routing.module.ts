import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { MoviesTableComponent } from './components/movies-table/movies-table.component';
import { ByGeneralPageComponent } from './pages/by-general-page/by-general-page.component';
import { ByIdComponent } from './pages/by-id/by-id.component';
import { ByCastComponent } from './pages/by-cast/by-cast.component';
import { ByReviewsComponent } from './pages/by-reviews/by-reviews.component';

const routes: Routes = [
  {
    path: 'by-general',
    component: ByGeneralPageComponent,
    // children: [{ path: 'by/:id', component: ByIdComponent }],
  },
  {
    path: 'by/:id',
    component: ByIdComponent,
  },
  {
    path: 'by/:id/reviews',
    component: ByReviewsComponent,
  },
  // {
  //   path: 'by/cast:id',
  //   component: ByCastComponent,
  // },
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
