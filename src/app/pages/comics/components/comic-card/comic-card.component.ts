import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IComic } from 'src/app/core/models/index';

@Component({
  selector: 'app-comic-card',
  templateUrl: './comic-card.component.html',
  styleUrls: ['./comic-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ComicCardComponent implements OnInit {

  @Input() comicInfo: IComic;
  @Output() viewDetailClick: EventEmitter<any>;

  constructor() {
    this.viewDetailClick = new EventEmitter<any>();
  }

  ngOnInit(): void {
  }

  viewDetail(id): void {
    this.viewDetailClick.emit({ comicId: id });
  }

}
