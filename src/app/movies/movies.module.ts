import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MoviesTableComponent } from './components/movies-table/movies-table.component';
import { MoviesRoutingModule } from './movies-routing.module';
import { SharedModule } from '../shared/shared.module';
import { ByGeneralPageComponent } from './pages/by-general-page/by-general-page.component';
import { ByIdComponent } from './pages/by-id/by-id.component';
import { ByCastComponent } from './pages/by-cast/by-cast.component';
import { ByReviewsComponent } from './pages/by-reviews/by-reviews.component';

@NgModule({
  declarations: [MoviesTableComponent, ByGeneralPageComponent, ByIdComponent, ByCastComponent, ByReviewsComponent],
  imports: [CommonModule, MoviesRoutingModule, SharedModule],
})
export class MoviesModule {}
