import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, retryWhen, delay, take, tap } from 'rxjs/operators';
import { IComic } from '../models/index';

@Injectable({
  providedIn: 'root'
})
export class HeroService {
  baseUrl: string;
  heroId: string;

  constructor(private http: HttpClient) {
    this.baseUrl = 'https://gateway.marvel.com:443/v1/public';
    this.heroId = '1009610'; //  Spiderman id
    // this.heroId = '1009368';  // Iron Man
  }

  getComics(): Observable<IComic[]> {
    return this.http
      .get(`${this.baseUrl}/characters/${this.heroId}/comics`)
      .pipe(
        map((data: any) => data.data.results),
        retryWhen(errors =>
          errors.pipe(
            delay(1500),
            tap(err => console.log('Reintentando...')),
            take(5)
          )
        )
      );
  }

  getComicById({ comicId }): Observable<IComic> {
    return this.http
      .get(`${this.baseUrl}/comics/${comicId}`)
      .pipe(map((data: any) => data.data.results[0]));
  }
}
