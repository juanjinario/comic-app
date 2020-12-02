import { ChangeDetectionStrategy, Component, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, Subject } from 'rxjs';
import { pluck, takeUntil } from 'rxjs/operators';
import { IComic } from 'src/app/core/models/index';
import { HeroService } from 'src/app/core/services/index';
import { fadeInOut } from '../../../shared/animation';

@Component({
  selector: 'app-comic-detail',
  templateUrl: './comic-detail.component.html',
  styleUrls: ['./comic-detail.component.scss'],
  animations: [fadeInOut],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ComicDetailComponent implements OnDestroy {
  comicId: string;
  $comicData: Observable<IComic>;
  private unsubscribe: Subject<void>;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private heroService: HeroService
  ) {
    this.unsubscribe = new Subject();
    this.getComicIdFromUri();
  }

  ngOnDestroy(): void {
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }

  getComicIdFromUri(): void {
    this.route.params
      .pipe(
        takeUntil(this.unsubscribe),
        pluck('id')
      )
      .subscribe(id => this.getComic(id));
  }

  getComic(id: string): void {
    this.$comicData = this.heroService.getComicById({ comicId: id });
  }
}
