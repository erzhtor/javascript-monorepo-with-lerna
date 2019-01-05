const CYAN = '\x1b[36m';
const RED = '\x1b[31m';
const YELLOW = '\x1b[33m';

const log = (color, ...args) => console.log(color + '%s', ...args);

exports.info = (...args) => log(CYAN, ...args);
exports.warn = (...args) => log(YELLOW, ...args);
exports.error = (...args) => log(RED, ...args);
