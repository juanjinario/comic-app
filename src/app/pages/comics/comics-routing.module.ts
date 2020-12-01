import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ComicsComponent } from './comics.component';
import { ComicListComponent } from './comic-list/comic-list.component';
import { ComicDetailComponent } from './comic-detail/comic-detail.component';

const routes: Routes = [
  {
    path: '',
    component: ComicsComponent,
    children: [
      {
        path: ':id',
        component: ComicDetailComponent,
      },
      {
        path: '',
        component: ComicListComponent,
        pathMatch: 'full'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ComicsRoutingModule { }
