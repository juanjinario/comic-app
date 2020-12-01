import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { HeroService } from 'src/app/core/services/index';

@Component({
  selector: 'app-comic-list',
  templateUrl: './comic-list.component.html',
  styleUrls: ['./comic-list.component.scss']
})
export class ComicListComponent implements OnInit {

  $comicsList: Observable<any>;

  constructor(private heroService: HeroService, private router: Router) {
    this.getComics();
  }

  ngOnInit(): void {
  }

  getComics(): void {
    this.$comicsList = this.heroService.getComics();
  }

  onDetailClick({ comicId }): void {
    this.router.navigate([`/comics/${comicId}`]);
  }

}
