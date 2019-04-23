export class Ingredient {
  public name: string;
  public amount: number;

  constructor(name: string, amount: number) {
    this.name = name;
    this.amount = amount;
  }
}

// instead of doing all the above we can simply add accessor "public" as:
// export class Ingredient{
//     constructor(public name:string, public amount:string){}
// }

// and this will work the same as above
