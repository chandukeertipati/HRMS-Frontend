import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'makeBold'
})
export class MakeBoldPipe implements PipeTransform {
  transform(value: string): string {
    if (!value) return value;

    // Wrap the input text in <strong> tags
    return `<strong>${value}</strong>`;
  }
}