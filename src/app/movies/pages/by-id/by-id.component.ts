import { Component, OnInit } from '@angular/core';
import { Movie } from '../../interfaces/movies';
import { MoviesService } from '../../services/movies.service';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs';
import { ImagesResponse } from '../../interfaces/movie-images.interface';
import { MovieResponse } from '../../interfaces/by-id.interface';

@Component({
  selector: 'app-by-id',
  templateUrl: './by-id.component.html',
  styles: [],
})
export class ByIdComponent implements OnInit {
  public movies: Movie[] = [];
  public movie: MovieResponse = {} as MovieResponse;
  public img: ImagesResponse = {} as ImagesResponse;
  display = false;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private MoviesService: MoviesService
  ) {}
  ngOnInit(): void {
    this.searchMovie();
    this.searchByMovie();
  }

  searchMovie(): void {
    this.activatedRoute.params
      .pipe(switchMap(({ id }) => this.MoviesService.searchImagesByCode(id)))
      .subscribe((img) => {
        if (!img) return this.router.navigateByUrl('');

        return (this.img = img);
      });
  }

  searchByMovie(): void {
    this.activatedRoute.params
      .pipe(switchMap(({ id }) => this.MoviesService.searchMovieByCode(id)))
      .subscribe((movie) => {
        if (!movie) return this.router.navigateByUrl('');

        return (this.movie = movie);
      });
  }

  onPress() {
    //this.display = true;

    //To toggle the component
    this.display = !this.display;
  }
}
