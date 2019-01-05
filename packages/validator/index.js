/**
 * Checks if given value is null or undefined or whitespace string
 * @param {string?} value 
 */
exports.isNullOrWhitespace = (value) => value === undefined || value === null || !value.trim();
