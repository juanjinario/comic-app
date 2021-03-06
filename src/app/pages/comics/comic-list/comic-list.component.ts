import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { IComic } from 'src/app/core/models/index';
import { HeroService } from 'src/app/core/services/index';
import { slideUpChilds } from '../../../shared/animation';

@Component({
  selector: 'app-comic-list',
  templateUrl: './comic-list.component.html',
  styleUrls: ['./comic-list.component.scss'],
  animations: [slideUpChilds],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ComicListComponent implements OnInit {

  $comicsList: Observable<IComic[]>;

  constructor(private heroService: HeroService, private router: Router) {
    this.getComics();
  }

  ngOnInit(): void {
  }

  getComics(): void {
    // Prueba de modificar la data que devuelve un observable
    this.$comicsList = this.heroService.getComics().pipe(
      tap(data => data = data.map(item => {
        item.title = item.title.toLocaleLowerCase();
        return item
      }))
    );
  }

  onDetailClick({ comicId }): void {
    this.router.navigate([`/comics/${comicId}`]);
  }

}
