import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comics',
  templateUrl: './comics.component.html',
  styleUrls: ['./comics.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ComicsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
