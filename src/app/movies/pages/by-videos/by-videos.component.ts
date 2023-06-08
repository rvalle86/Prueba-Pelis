import { Component, OnInit } from '@angular/core';
import { Video } from '../../interfaces/movie-videos.interface';
import { ActivatedRoute, Router } from '@angular/router';
import { MoviesService } from '../../services/movies.service';
import { switchMap } from 'rxjs';

@Component({
  selector: 'app-by-videos',
  templateUrl: './by-videos.component.html',
  styles: [
    `
      div > youtube-player > iframe {
        display: block;
        width: 50vh;
      }
    `,
  ],
})
export class ByVideosComponent implements OnInit {
  public videos: Video[] = [];
  apiLoaded = false;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private MoviesService: MoviesService
  ) {}

  ngOnInit(): void {
    this.searchByVideo();

    // if (!this.apiLoaded) {
    //   const tag = document.createElement('script');
    //   tag.src = 'https://www.youtube.com/iframe_api';
    //   document.body.appendChild(tag);
    //   this.apiLoaded = true;
    // }
  }

  searchByVideo(): void {
    this.activatedRoute.params
      .pipe(switchMap(({ id }) => this.MoviesService.searchVideosByCode(id)))
      .subscribe((video) => {
        if (!video) return this.router.navigateByUrl('');

        return (this.videos = video.results);
      });
  }
}
