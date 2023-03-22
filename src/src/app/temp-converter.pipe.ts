import { Pipe, PipeTransform } from '@angular/core';

@Pipe({   //pipe decorator
  name: 'tempConverter'    //Name of the pipe
})
export class TempConverterPipe implements PipeTransform {

              
  // transform(value: unknown, ...args: unknown[]): unknown {
  //   return null;
  // }

  transform(data: number, strAction: string): number {
    
    let result = 0;
    
    if(strAction=="toCelcius"){
      result = (data-32) * (5/9);
    }
    else if(strAction=="toFarenheit"){
      result = data * 1.8 + 32;
    }

    return result;
  }

}
