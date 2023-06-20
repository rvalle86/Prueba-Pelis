import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { ShowRoutingModule } from './show-routing.module';
import { SharedModule } from '../shared/shared.module';
import { IterablePipe } from './pipes/iterable.pipe';
import { SearchBoxComponent } from './components/search-box/search-box.component';

@NgModule({
  declarations: [MainPageComponent, IterablePipe, SearchBoxComponent],
  imports: [CommonModule, ShowRoutingModule, SharedModule],
})
export class ShowModule {}
