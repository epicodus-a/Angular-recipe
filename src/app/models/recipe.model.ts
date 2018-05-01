export class Recipe{
  popular: boolean = true;

  constructor(public title: string, public ingredients: string, public directions:string, public hot: string ){

  }
}
