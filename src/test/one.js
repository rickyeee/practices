console.log('one init');
const two = require('./two');
// exports = module.exports = {};
console.log('one exports');
function start() {
    console.log('one start');
    two.start();
}
function load() {
    console.log('one load');
}
module.exports.start = start;
module.exports.load = load;