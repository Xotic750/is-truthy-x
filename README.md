<a href="https://travis-ci.org/Xotic750/is-truthy-x"
   title="Travis status">
<img
   src="https://travis-ci.org/Xotic750/is-truthy-x.svg?branch=master"
   alt="Travis status" height="18"/>
</a>
<a href="https://david-dm.org/Xotic750/is-truthy-x"
   title="Dependency status">
<img src="https://david-dm.org/Xotic750/is-truthy-x.svg"
   alt="Dependency status" height="18"/>
</a>
<a href="https://david-dm.org/Xotic750/is-truthy-x#info=devDependencies"
   title="devDependency status">
<img src="https://david-dm.org/Xotic750/is-truthy-x/dev-status.svg"
   alt="devDependency status" height="18"/>
</a>
<a href="https://badge.fury.io/js/is-truthy-x" title="npm version">
<img src="https://badge.fury.io/js/is-truthy-x.svg"
   alt="npm version" height="18"/>
</a>
<a name="module_is-truthy-x"></a>

## is-truthy-x
Test if a given value is truthy.

**Version**: 1.0.1  
**Author**: Xotic750 <Xotic750@gmail.com>  
**License**: [MIT](&lt;https://opensource.org/licenses/MIT&gt;)  
**Copyright**: Xotic750  
<a name="exp_module_is-truthy-x--module.exports"></a>

### `module.exports` ⇒ <code>boolean</code> ⏏
This method tests if a given value is truthy.

**Kind**: Exported member  
**Returns**: <code>boolean</code> - `true` if the value is truthy: otherwise `false`.  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>\*</code> | The value to test. |

**Example**  
```js
var isTruthy = require('is-truthy-x');

isTruthy(); // false
isTruthy(0); // false
isTruthy(''); // false
isTruthy(false); // false
isTruthy(null); // false

isTruthy(true); // true
isTruthy([]); // true
isTruthy(1); // true
isTruthy(function () {}); // true
```
