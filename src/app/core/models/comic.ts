import { IImgFormat } from './imgFormat';

interface IDate {
  date: string;
  type: string;
}

export interface IComic {
  description: string;
  id: string;
  images: IImgFormat[];
  title: string;
  thumbnail: IImgFormat;
  dates?: IDate[];
}
