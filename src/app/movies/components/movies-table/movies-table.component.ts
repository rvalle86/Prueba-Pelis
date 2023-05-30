import { Component, Input } from '@angular/core';
import { Movie } from '../../interfaces/movies';

@Component({
  selector: 'movies-table',
  templateUrl: './movies-table.component.html',
  styles: [
    `
      img {
        width: 25px;
      }
    `,
  ],
})
export class MoviesTableComponent {
  // @Input()
  // public movies: Movie[] = [];
}
