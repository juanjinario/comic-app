import { IImgFormat } from './imgFormat';

export interface IComic {
  description: string;
  id: string;
  images: IImgFormat[];
  title: string;
  thumbnail: IImgFormat;
}
