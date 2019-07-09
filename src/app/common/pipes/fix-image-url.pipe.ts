import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'fixImageUrl',
})
export class FixImageUrlPipe implements PipeTransform {

  transform(imageName: any, ...args: any[]): any {
    return `http://funding-backend.webtraining.fun/img/projects/${imageName}`;
  }

}
