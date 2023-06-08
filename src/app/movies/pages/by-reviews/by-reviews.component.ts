import { Component, OnInit } from '@angular/core';
import { Review } from '../../interfaces/movie-reviews.interface';
import { MoviesService } from '../../services/movies.service';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs';
import { MovieResponse } from '../../interfaces/by-id.interface';

@Component({
  selector: 'app-by-reviews',
  templateUrl: './by-reviews.component.html',
  styleUrls: ['./by-reviews.component.css'],
})
export class ByReviewsComponent implements OnInit {
  public reviews: Review[] = [];
  public movie: MovieResponse = {} as MovieResponse;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private MoviesService: MoviesService
  ) {}
  ngOnInit(): void {
    this.searchByReview();
    this.searchByMovie();
  }

  searchByReview(): void {
    this.activatedRoute.params
      .pipe(switchMap(({ id }) => this.MoviesService.searchReviewByCode(id)))
      .subscribe((review) => {
        if (!review) return this.router.navigateByUrl('');

        return (this.reviews = review.results);
      });
  }

  searchByMovie(): void {
    this.activatedRoute.params
      .pipe(switchMap(({ id }) => this.MoviesService.searchMovieByCode(id)))
      .subscribe((movie) => {
        if (!movie) return this.router.navigateByUrl('');
        console.log(this.movie);

        return (this.movie = movie);
      });
  }
}
