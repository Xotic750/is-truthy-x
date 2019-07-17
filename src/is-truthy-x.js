import toBoolean from 'to-boolean-x';

/**
 * This method tests if a given value is truthy.
 *
 * @function isTruthy
 * @param {*} [value] - The value to test.
 * @returns {boolean} `true` if the value is truthy: otherwise `false`.
 */
const isTruthy = function isTruthy(value) {
  return toBoolean(value);
};

export default isTruthy;
