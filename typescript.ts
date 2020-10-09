// boolean
let isCool: boolean = true;

// number
let age: number = 20;

// string
let eyeColor: string = 'brown';
let favQuote: string = `I'm not old, I'm only ${age}`;

// Array
let pets: string[] = ['cats', 'dogs', 'pigs'];
let pets2: Array<string> = ['lion', 'dragon', 'lizard'];

// Object
let wizard: object = {
  a: 'john',
};

// null and undefined
let meh: undefined = undefined;
let noo: null = null;

// Tuple
// A tuple is a collection which is ordered and unchangeable.
let basket: [string, number];
basket = ['basketball', 3];

// Enum
// In simple words, enums allow us to declare a set of named constants i.e. a collection of related values that can be numeric or string values.

enum Size {
  Small = 1,
  Medium = 2,
  Large = 3,
}

let sizeName: string = Size[2];
let sizeNum: number = Size.Small;
// console.log(sizeName);
// console.log(sizeNum);

// Any - !! Be careful while using it
// Any is just a way of saying this variabele can have any dataype
let whatever: any = 'hello';
whatever = 3;
whatever = basket;

// Void
// Function that doesn't return anything
let sing = (): void => {
  console.log('lalalal');
};

// never
//1. Function never returns
//2. A variable under some sort of type gaurd is never true
let error = (): never => {
  throw Error('oops');
};

// Interface
// Interface is way of declaring object with some type defined properties!
// If you have to use the object having arguments count, type, magic, you'll have to rewrite all of these. By declaring interface you can just use RobotArmy anywhere which will do the task. Hence, we are following DRY principal.
interface RobotArmy {
  count: number;
  type: string;
  magic: string;
}

let fightRobotArmy = (robots: RobotArmy) => {
  console.log('FIGHTTTT');
};

// Is equivalent to...

let fightRobotArmy2 = (robots: {
  count: number;
  type: string;
  magic?: string; // Type undefined or string '?'
}) => {
  console.log('FIGHTTTT');
};

// Type Assertion
// It is a way of saying that even if the dog object is empty, don't worry it will be used as CatArmy later in our code. Just asserting the type even if it is not there :)

//https://basarat.gitbook.io/typescript/type-system/type-assertion

interface CatArmy {
  count: number;
  type: string;
  magic: string;
}

let dog = {} as CatArmy;
dog.count;

// Function
//After arguments
let fightRobotArmy3 = (robots: RobotArmy): string => {
  console.log('FIGHTTTT');
  return 'anystring';
};

function fightRobotArmy4(robots: {
  count: number;
  type: string;
  magic?: string; // Type undefined or string '?'
}): number {
  return 4;
}

//Class
class Animal {
  private sing: string = 'lalalal'; //Can only be used in class (private)
  constructor(sound: string) {
    this.sing = sound;
  }

  greet() {
    return `Hello ${this.sing}`;
  }
}

let lion = new Animal('RAAWWWRRR');
lion.greet();

// Union
// Can be chained to any number of types using |
let confused: string | number = 'hey';

// Predefined
// If you do not define TypeScripy will automatically define it for you

let x = 4;
// x = 'string'; // Cannot be done because typescript has defined it as number for us.
