<a
  href="https://travis-ci.org/Xotic750/is-truthy-x"
  title="Travis status">
<img
  src="https://travis-ci.org/Xotic750/is-truthy-x.svg?branch=master"
  alt="Travis status" height="18">
</a>
<a
  href="https://david-dm.org/Xotic750/is-truthy-x"
  title="Dependency status">
<img src="https://david-dm.org/Xotic750/is-truthy-x/status.svg"
  alt="Dependency status" height="18"/>
</a>
<a
  href="https://david-dm.org/Xotic750/is-truthy-x?type=dev"
  title="devDependency status">
<img src="https://david-dm.org/Xotic750/is-truthy-x/dev-status.svg"
  alt="devDependency status" height="18"/>
</a>
<a
  href="https://badge.fury.io/js/is-truthy-x"
  title="npm version">
<img src="https://badge.fury.io/js/is-truthy-x.svg"
  alt="npm version" height="18">
</a>
<a
  href="https://www.jsdelivr.com/package/npm/is-truthy-x"
  title="jsDelivr hits">
<img src="https://data.jsdelivr.com/v1/package/npm/is-truthy-x/badge?style=rounded"
  alt="jsDelivr hits" height="18">
</a>
<a
  href="https://bettercodehub.com/results/Xotic750/is-truthy-x"
  title="bettercodehub score">
<img src="https://bettercodehub.com/edge/badge/Xotic750/is-truthy-x?branch=master"
  alt="bettercodehub score" height="18">
</a>
<a
  href="https://coveralls.io/github/Xotic750/is-truthy-x?branch=master"
  title="Coverage Status">
<img src="https://coveralls.io/repos/github/Xotic750/is-truthy-x/badge.svg?branch=master"
  alt="Coverage Status" height="18">
</a>

<a name="module_is-truthy-x"></a>

## is-truthy-x

Test if a given value is truthy.

<a name="exp_module_is-truthy-x--module.exports"></a>

### `module.exports` ⇒ <code>boolean</code> ⏏

This method tests if a given value is truthy.

**Kind**: Exported member  
**Returns**: <code>boolean</code> - `true` if the value is truthy: otherwise `false`.

| Param | Type            | Description        |
| ----- | --------------- | ------------------ |
| value | <code>\*</code> | The value to test. |

**Example**

```js
import isTruthy from 'is-truthy-x';

console.log(isTruthy()); // false
console.log(isTruthy(0)); // false
console.log(isTruthy('')); // false
console.log(isTruthy(false)); // false
console.log(isTruthy(null)); // false

console.log(isTruthy(true)); // true
console.log(isTruthy([])); // true
console.log(isTruthy(1)); // true
console.log(isTruthy(function() {})); // true
```
