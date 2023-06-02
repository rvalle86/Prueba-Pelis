import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { catchError, Observable, of, map } from 'rxjs';
import { Movie, MoviesResponse } from '../interfaces/movies';
import { ImagesResponse } from '../interfaces/movie-images.interface';
import { MovieResponse } from '../interfaces/by-id.interface';
import { CastResponse } from '../interfaces/movie-cast.interface';

@Injectable({
  providedIn: 'root',
})
export class MoviesService {
  public movies: Movie[] = [];
  private apiKey: string = '22e5385a6b8e3d6119a1a7a8e00dc195';
  private apiUrl: string = 'https://api.themoviedb.org/3/movie';
  private lang: string = 'es-HN';

  constructor(private http: HttpClient) {}

  // private getMoviesRequest(url: string): Observable<Movie[]> {
  //   const params = new HttpParams().set('api_key', this.apiKey);

  //   return this.http.get<Movie[]>(url, { params }).pipe(
  //     catchError(() => of([]))
  //     // delay( 2000 ),
  //   );
  // }
  // getMovies(): void {
  //   const params = new HttpParams().set('api_key', this.apiKey);

  //   return this.http.get<Movie[]>(this.apiUrl, { params: params });
  // }

  searchImagesByCode(id: number): Observable<ImagesResponse> {
    const url = `${this.apiUrl}/${id}/images`;

    const params = new HttpParams().set('api_key', this.apiKey);

    return this.http.get<ImagesResponse>(url, { params: params });
  }

  searchMovieByCode(id: number): Observable<MovieResponse> {
    const url = `${this.apiUrl}/${id}`;

    const params = new HttpParams().set('api_key', this.apiKey);

    return this.http.get<MovieResponse>(url, { params: params });
  }

  searchCatByCode(id: number): Observable<CastResponse> {
    const url = `${this.apiUrl}/${id}/credits`;

    const params = new HttpParams().set('api_key', this.apiKey);

    return this.http.get<CastResponse>(url, { params: params });
  }

  searchMovies(): Observable<MoviesResponse> {
    const params = new HttpParams()
      .set('api_key', this.apiKey)
      .set('language', this.lang);

    const url = `${this.apiUrl}/popular`;

    return this.http.get<MoviesResponse>(url, { params: params });
  }
}
