import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dogAge'
})
export class DogAgePipe implements PipeTransform {

  transform(name: string, args: any): string {
    let toReturn = name.length;
    toReturn = Math.pow(toReturn, args.numIn);
    return toReturn.toString() + args.unit;
  }

}
