var arrayReduce = require('./arrayReduce'),
    deburr = require('../string/deburr'),
    words = require('../string/words');

/**
 * Creates a function like `_.camelCase`.
 *
 * @private
 * @param {Function} callback The function to combine each word.
 * @returns {Function} Returns the new compounder function.
 */
function createCompounder(callback) {
  return function(string) {
    return arrayReduce(words(deburr(string)), callback, '');
  };
}

module.exports = createCompounder;
