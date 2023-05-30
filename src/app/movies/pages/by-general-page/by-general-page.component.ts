import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../../services/movies.service';
import { Movie } from '../../interfaces/movies';

@Component({
  selector: 'app-by-general-page',
  templateUrl: './by-general-page.component.html',
  styles: [
    `
      img {
        width: 25px;
      }
    `,
  ],
})
export class ByGeneralPageComponent implements OnInit {
  public movies: Movie[] = [];

  constructor(private moviesService: MoviesService) {}
  ngOnInit(): void {
    this.searchMovie();
  }

  searchMovie(): void {
    this.moviesService.searchMovies().subscribe((data) => {
      this.movies = data.results;
    });
  }
}
