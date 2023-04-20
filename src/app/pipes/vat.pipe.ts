import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'vat'
})
export class VatPipe implements PipeTransform {

  transform(value: number, vat:number): number {
    return value+(value*vat/1000);
  }
}
