import { Component } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'shared-sidebar',
  templateUrl: './sidebar.component.html',
  styles: [],
})
export class SidebarComponent {
  constructor(private _location: Location) {}

  backClicked() {
    this._location.back();
  }
}
