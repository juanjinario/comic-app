import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RouterModule } from '@angular/router';


// Modules
import { MaterialModule } from './modules/material.module';

// Components
import { HeaderBarComponent } from './components/header-bar/header-bar.component';
import { ImgFullPath } from './pipes/img-full-path';

@NgModule({
  declarations: [HeaderBarComponent, ImgFullPath],
  imports: [
    CommonModule,
    RouterModule,
    MaterialModule,
    FlexLayoutModule
  ],
  exports: [
    MaterialModule,
    FlexLayoutModule,
    HeaderBarComponent,
    ImgFullPath
  ]
})
export class SharedModule { }
