// boolean
var isCool = true;
// number
var age = 20;
// string
var eyeColor = 'brown';
var favQuote = "I'm not old, I'm only " + age;
// Array
var pets = ['cats', 'dogs', 'pigs'];
var pets2 = ['lion', 'dragon', 'lizard'];
// Object
var wizard = {
    a: 'john'
};
// null and undefined
var meh = undefined;
var noo = null;
// Tuple
// A tuple is a collection which is ordered and unchangeable.
var basket;
basket = ['basketball', 3];
// Enum
// In simple words, enums allow us to declare a set of named constants i.e. a collection of related values that can be numeric or string values.
var Size;
(function (Size) {
    Size[Size["Small"] = 1] = "Small";
    Size[Size["Medium"] = 2] = "Medium";
    Size[Size["Large"] = 3] = "Large";
})(Size || (Size = {}));
var sizeName = Size[2];
var sizeNum = Size.Small;
// console.log(sizeName);
// console.log(sizeNum);
// Any - !! Be careful while using it
// Any is just a way of saying this variabele can have any dataype
var whatever = 'hello';
whatever = 3;
whatever = basket;
// Void
// Function that doesn't return anything
var sing = function () {
    console.log('lalalal');
};
// never
//1. Function never returns
//2. A variable under some sort of type gaurd is never true
var error = function () {
    throw Error('oops');
};
var fightRobotArmy = function (robots) {
    console.log('FIGHTTTT');
};
// Is equivalent to...
var fightRobotArmy2 = function (robots) {
    console.log('FIGHTTTT');
};
var dog = {};
dog.count;
// Function
//After arguments
var fightRobotArmy3 = function (robots) {
    console.log('FIGHTTTT');
    return 'anystring';
};
function fightRobotArmy4(robots) {
    return 4;
}
//Class
var Animal = /** @class */ (function () {
    function Animal(sound) {
        this.sing = 'lalalal'; //Can only be used in class (private)
        this.sing = sound;
    }
    Animal.prototype.greet = function () {
        return "Hello " + this.sing;
    };
    return Animal;
}());
var lion = new Animal('RAAWWWRRR');
lion.greet();
// Union
// Can be chained to any number of types using |
var confused = 'hey';
// Predefined
// If you do not define TypeScripy will automatically define it for you
var x = 4;
// x = 'string'; // Cannot be done because typescript has defined it as number for us.
