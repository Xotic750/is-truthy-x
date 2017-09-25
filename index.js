/**
 * @file Test if a given value is truthy.
 * @version 1.0.0
 * @author Xotic750 <Xotic750@gmail.com>
 * @copyright  Xotic750
 * @license {@link <https://opensource.org/licenses/MIT> MIT}
 * @module is-truthy-x
 */

'use strict';

var toBoolean = require('to-boolean-x');

/**
 * This method tests if a given value is truthy.
 *
 * @param {*} value - The value to test.
 * @returns {boolean} `true` if the value is truthy: otherwise `false`.
 * @example
 * var isTruthy = require('is-truthy-x');
 *
 * isTruthy(); // false
 * isTruthy(0); // false
 * isTruthy(''); // false
 * isTruthy(false); // false
 * isTruthy(null); // false
 *
 * isTruthy(true); // true
 * isTruthy([]); // true
 * isTruthy(1); // true
 * isTruthy(function () {}); // true
 */
module.exports = function isTruthy(value) {
  return toBoolean(value);
};
