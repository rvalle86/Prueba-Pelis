import { Component, OnInit } from '@angular/core';
import { ShowService } from '../../services/show.service';
import {
  Character,
  CharactersResponse,
  Info,
} from '../../interfaces/characters.interface';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs';

@Component({
  selector: 'show-main-page',
  templateUrl: './main-page.component.html',
  styles: [],
})
export class MainPageComponent implements OnInit {
  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private ShowService: ShowService
  ) {}

  public characters: Character[] = [];
  public info: Info = {} as Info;
  public page: number = 0;
  public initialValue: string = '';
  public hide: boolean = false;
  public error: string = '';

  ngOnInit(): void {
    this.searchCharacterByPage();
  }
  // searchCharacters(): void {
  //   this.ShowService.searchCharacters().subscribe((data) => {
  //     this.characters = data.results;
  //     console.log(this.characters);
  //   });
  // }

  searchCharacterByPage(): void {
    this.activatedRoute.params
      .pipe(switchMap(({ id }) => this.ShowService.searchCharacters(id)))
      .subscribe((character) => {
        if (!character) return this.router.navigateByUrl('');

        // this.info = character.info;

        this.page = character.info.pages;

        return (this.characters = character.results);
      });
  }

  searchByName(term: string): void {
    this.ShowService.searchCharactersByName(term).subscribe(
      (characters) => {
        this.characters = characters.results;
      },
      ({ error }) => {
        this.error = error;
      }
    );
  }

  // searchByMovie(): void {
  //   this.activatedRoute.params
  //     .pipe(switchMap(({ id }) => this.MoviesService.searchMovieByCode(id)))
  //     .subscribe(
  //       (movie) => {
  //         if (!movie) return this.router.navigateByUrl('');

  //         return (this.movie = movie);
  //       },
  //       (error) => {
  //         console.log(error);
  //       }
  //     );
  // }
}
