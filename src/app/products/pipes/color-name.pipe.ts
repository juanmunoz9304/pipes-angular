import { Pipe, PipeTransform } from '@angular/core';
import { Color } from '../interfaces/hero.interface';

@Pipe({
  name: 'colorName'
})
export class ColorNamePipe implements PipeTransform {

  transform(value: Color): string {
    return Color[value];
  }

}
