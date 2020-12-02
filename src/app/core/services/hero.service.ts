import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { delay, map } from 'rxjs/operators';
import { environment } from '../../../environments/environment';
import { IComic } from '../models/index';

@Injectable({
  providedIn: 'root'
})
export class HeroService {
  baseUrl: string;
  heroId: string;
  publicKey: string;
  md5: string;
  ts: string;

  constructor(private http: HttpClient) {
    this.baseUrl = 'https://gateway.marvel.com:443/v1/public';
    this.heroId = '1009610'; //  Spiderman id
    // this.heroId = '1009368';  // Iron Man
    this.publicKey = environment.publicKey;
    this.md5 = environment.md5;
    this.ts = environment.ts;
  }

  getComics(): Observable<IComic[]> {
    return this.http
      .get(`${this.baseUrl}/characters/${this.heroId}/comics`)
      .pipe(map((data: any) => data.data.results));
  }

  getComicById({ comicId }): Observable<IComic> {
    return this.http
      .get(`${this.baseUrl}/comics/${comicId}`)
      .pipe(map((data: any) => data.data.results[0]));
  }
}
