import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

import { Observable } from 'rxjs';
import { CharactersResponse } from '../interfaces/characters.interface';

@Injectable({ providedIn: 'root' })
export class ShowService {
  private apiUrl: string = 'https://rickandmortyapi.com/api';
  constructor(private http: HttpClient) {}

  searchCharacters(id: number): Observable<CharactersResponse> {
    const url = `${this.apiUrl}/character`;

    const params = new HttpParams().set('page', id);
    return this.http.get<CharactersResponse>(url, { params: params });
  }

  searchCharactersByName(name: string): Observable<CharactersResponse> {
    const url = `${this.apiUrl}/character`;

    const params = new HttpParams().set('name', name);
    return this.http.get<CharactersResponse>(url, { params: params });
  }

  // searchShowByPage(id: number): Observable<CharactersResponse> {
  //   const url = `${this.apiUrl}/character`;
  //   console.log('Hola: ' + id);
  //   const params = new HttpParams().set('page', id);

  //   return this.http.get<CharactersResponse>(url, { params: params });
  // }
}
