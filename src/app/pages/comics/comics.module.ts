import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../../shared/shared.module';
import { ComicsRoutingModule } from './comics-routing.module';
import { ComicsComponent } from './comics.component';
import { ComicCardComponent } from './components/comic-card/comic-card.component';
import { ComicDetailComponent } from './comic-detail/comic-detail.component';
import { ComicListComponent } from './comic-list/comic-list.component';
import { CardListLoadingComponent } from './components/card-list-loading/card-list-loading.component';

@NgModule({
  declarations: [
    ComicsComponent,
    ComicCardComponent,
    ComicDetailComponent,
    ComicListComponent,
    CardListLoadingComponent
  ],
  imports: [CommonModule, ComicsRoutingModule, SharedModule]
})
export class ComicsModule {}
