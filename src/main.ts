var A = require('./test');
let isDone: boolean = true;
// 类型断言  尖括号语法 编写者编译前就已经知道了结构
let someValue1: any = "this is a string";
let strLength1: number = (<string>someValue1).length;

// 类型断言 as 语法
let someValue: any = ["this is a string"];
let strLength: number = (someValue as string).length;

interface Person {
	firstName?: string;
	lastName?: string;
}

function func(person: Person = {}): void {
	console.log(person.firstName + person.lastName);
	return;
	// return person.firstName + person.lastName;
}
func({}); // pass null可以pass
// func(1); // error
// func([]); // error
// console.log(A.a, '2121e1');
// enum
enum Color {Red, Green, Blue}
let c = Color[0];
console.log(typeof c)

// 函数类型
interface SearchFunc {
  (source: string, subString: string): boolean;
}
// 这样定义后，我们可以像使用其它接口一样使用这个函数类型的接口。 下例展示了如何创建一个函数类型的变量，并将一个同类型的函数赋值给这个变量。

let mySearch: SearchFunc = function (source: string, subString: string) {
  let result = source.search(subString);
  return result > -1;
}
console.log(mySearch('', ''))

// implements
interface ClockInterface {
	currentTime: Date;
	setTime(d: Date);
}
// ClockInterface.currentTime = new Date();
let as = <ClockInterface>{}; // 这是个断言
as.currentTime = new Date();
console.log(as.currentTime, 'as.currentTime')

class Clock implements ClockInterface {
	currentTime: Date;
	setTime(d: Date): Clock {
			this.currentTime = d;
			return this;
	}
	constructor(h: number, m: number) { }
}

console.log(new Clock(12, 12).setTime(new Date()).currentTime);

// 泛型类
class GenericNumber<T> {
	zeroValue: T;
	add: (x: T, y: T) => string;
	decrease(x: number, y: string) {}
}

let myGenericNumber = new GenericNumber<number>();
myGenericNumber.zeroValue = 0;
myGenericNumber.add = function(x, y) { return x + y + ''; };
myGenericNumber.decrease = function(x: number, y: string) { return x + y; };