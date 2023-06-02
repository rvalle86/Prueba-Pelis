import { Component, OnInit } from '@angular/core';
import { CastResponse } from '../../interfaces/movie-cast.interface';
import { ActivatedRoute, Router } from '@angular/router';
import { MoviesService } from '../../services/movies.service';
import { switchMap } from 'rxjs';

@Component({
  selector: 'app-by-cast',
  templateUrl: './by-cast.component.html',
  styles: [],
})
export class ByCastComponent implements OnInit {
  public cast: CastResponse = {} as CastResponse;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private MoviesService: MoviesService
  ) {}

  ngOnInit(): void {
    this.searchByCast();
  }

  searchByCast(): void {
    this.activatedRoute.params
      .pipe(switchMap(({ id }) => this.MoviesService.searchCatByCode(id)))
      .subscribe((cast) => {
        if (!cast) return this.router.navigateByUrl('');
        console.log(cast);

        return (this.cast = cast);
      });
  }
}
