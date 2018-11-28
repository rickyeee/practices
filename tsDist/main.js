var A = require('./test');
var isDone = true;
// 类型断言  尖括号语法 编写者编译前就已经知道了结构
var someValue1 = "this is a string";
var strLength1 = someValue1.length;
// 类型断言 as 语法
var someValue = ["this is a string"];
var strLength = someValue.length;
function func(person) {
    if (person === void 0) { person = {}; }
    console.log(person.firstName + person.lastName);
    return;
    // return person.firstName + person.lastName;
}
func({}); // pass null可以pass
// func(1); // error
// func([]); // error
// console.log(A.a, '2121e1');
// enum
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
var c = Color[0];
console.log(typeof c);
// 这样定义后，我们可以像使用其它接口一样使用这个函数类型的接口。 下例展示了如何创建一个函数类型的变量，并将一个同类型的函数赋值给这个变量。
var mySearch = function (source, subString) {
    var result = source.search(subString);
    return result > -1;
};
console.log(mySearch('', ''));
// ClockInterface.currentTime = new Date();
var as = {}; // 这是个断言
as.currentTime = new Date();
console.log(as.currentTime, 'as.currentTime');
var Clock = /** @class */ (function () {
    function Clock(h, m) {
    }
    Clock.prototype.setTime = function (d) {
        this.currentTime = d;
        return this;
    };
    return Clock;
}());
console.log(new Clock(12, 12).setTime(new Date()).currentTime);
// 泛型类
var GenericNumber = /** @class */ (function () {
    function GenericNumber() {
    }
    GenericNumber.prototype.decrease = function (x, y) { };
    return GenericNumber;
}());
var myGenericNumber = new GenericNumber();
myGenericNumber.zeroValue = 0;
myGenericNumber.add = function (x, y) { return x + y + ''; };
myGenericNumber.decrease = function (x, y) { return x + y; };
