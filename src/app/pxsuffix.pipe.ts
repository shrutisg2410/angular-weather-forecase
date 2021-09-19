import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'pxsuffix' })
export class pxsuffix implements PipeTransform {
  transform(input: number): string {
    //string type
    return input + '\xB0C';
  }
}
