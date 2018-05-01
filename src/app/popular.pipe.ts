import {Pipe, PipeTransform} from '@angular/core';
import {Recipe} from './models/recipe.model';


@Pipe({
  name: 'completeness',
  pure: false

})

export class PopularPipe implements PipeTransform{
  transform(input: Recipe[]){
    let output: Recipe[] = [];
    for(let i = 0; i < input.length; i++){
      if(input[i].popular === true){
        output.push(input[i]);
      }
    }
    return output;
  }


}
