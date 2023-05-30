import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MoviesTableComponent } from './components/movies-table/movies-table.component';
import { MoviesRoutingModule } from './movies-routing.module';
import { SharedModule } from '../shared/shared.module';
import { ByGeneralPageComponent } from './pages/by-general-page/by-general-page.component';
import { ByIdComponent } from './pages/by-id/by-id.component';

@NgModule({
  declarations: [MoviesTableComponent, ByGeneralPageComponent, ByIdComponent],
  imports: [CommonModule, MoviesRoutingModule, SharedModule],
})
export class MoviesModule {}
