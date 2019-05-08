console.log('two init');
const one = require('./one');
// exports = module.exports = {};

function start() {
    console.log('two start');
    one.load();
}

module.exports.start = start;