import { Pipe, PipeTransform } from '@angular/core';
import { IImgFormat } from '../../core/models/index';

@Pipe({
  name: 'imgFullPath'
})
export class ImgFullPath implements PipeTransform {

  transform(img: IImgFormat, ...args: unknown[]): string {
    return `${img.path}.${img.extension}`;
  }

}
