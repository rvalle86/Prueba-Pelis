import { Component, OnInit } from '@angular/core';
import { Review } from '../../interfaces/movie-reviews.interface';
import { MoviesService } from '../../services/movies.service';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs';

@Component({
  selector: 'app-by-reviews',
  templateUrl: './by-reviews.component.html',
  styleUrls: ['./by-reviews.component.css'],
})
export class ByReviewsComponent implements OnInit {
  public reviews: Review[] = [];

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private MoviesService: MoviesService
  ) {}
  ngOnInit(): void {
    this.searchByrReview();
  }

  searchByrReview(): void {
    this.activatedRoute.params
      .pipe(switchMap(({ id }) => this.MoviesService.searchReviewByCode(id)))
      .subscribe((review) => {
        if (!review) return this.router.navigateByUrl('');

        return (this.reviews = review.results);
      });
  }
}
