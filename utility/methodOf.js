import invokePath from '../internal/invokePath';
import rest from '../function/rest';

/**
 * The opposite of `_.method`; this method creates a function that invokes
 * the method at a given path of `object`. Any additional arguments are
 * provided to the invoked method.
 *
 * @static
 * @memberOf _
 * @category Utility
 * @param {Object} object The object to query.
 * @param {...*} [args] The arguments to invoke the method with.
 * @returns {Function} Returns the new function.
 * @example
 *
 * var array = _.times(3, _.constant),
 *     object = { 'a': array, 'b': array, 'c': array };
 *
 * _.map(['a[2]', 'c[0]'], _.methodOf(object));
 * // => [2, 0]
 *
 * _.map([['a', '2'], ['c', '0']], _.methodOf(object));
 * // => [2, 0]
 */
var methodOf = rest(function(object, args) {
  return function(path) {
    return invokePath(object, path, args);
  };
});

export default methodOf;
