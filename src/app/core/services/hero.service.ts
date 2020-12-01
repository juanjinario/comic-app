import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from '../../../environments/environment';

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
    this.heroId = '1011136'; //  Air Walker id
    this.publicKey = environment.publicKey;
    this.md5 = environment.md5;
    this.ts = environment.ts;
  }

  getComics(): Observable<unknown> {
    return this.http
      .get(
        this.generateFullUrl(`${this.baseUrl}/characters/${this.heroId}/comics`)
      )
      .pipe(map((data: any) => data.data.results));
  }

  generateFullUrl(petition: string): string {
    return `${petition}?ts=${this.ts}&apikey=${this.publicKey}&hash=${
      this.md5
    }`;
  }
}
