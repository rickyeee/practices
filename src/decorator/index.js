const res = {
	b: 1,
	c: 2
};
@mixin({b: 2})
class A {
	constructor() {
		this.a = 1;
	}
}

function mixin(...source) {
	console.log(...source)
	return function(target) {
		Object.assign(target.prototype, ...source);
	}
}
console.log(new A().b);
export default res;
