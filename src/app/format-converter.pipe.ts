import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatConverter'
})
export class FormatConverterPipe implements PipeTransform {

  result:number;
  transform(value: any, ...args: any[]): any {
    console.log("FormatConverterPipe -> transform -> value", value)
   this.result=+(value)/(1024^2)
    return `${this.result} GB`;
  }

}
