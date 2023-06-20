import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MainPageComponent } from './pages/main-page/main-page.component';

const routes: Routes = [
  {
    path: 'by-characters',
    component: MainPageComponent,
    // children: [{ path: 'by/:id', component: ByIdComponent }],
  },
  {
    path: 'by-characters/:id',
    component: MainPageComponent,
  },
  {
    path: '**',
    redirectTo: 'by-characters',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ShowRoutingModule {}
