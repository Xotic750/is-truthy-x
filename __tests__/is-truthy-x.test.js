import isTruthy from 'src/is-truthy-x';

const coercibleObject = {
  toString() {
    return 42;
  },
  valueOf() {
    return 3;
  },
};

const valueOfOnlyObject = {
  toString() {
    return {};
  },
  valueOf() {
    return 4;
  },
};

const toStringOnlyObject = {
  toString() {
    return 7;
  },
  valueOf() {
    return {};
  },
};

const objects = [{}, coercibleObject, toStringOnlyObject, valueOfOnlyObject];

const nullPrimitives = [undefined, null];
const falsies = [].concat(nullPrimitives, false, '', 0, -0, NaN);
const truthies = [].concat(true, 'foo', 42, objects);

describe('isTruthy', function() {
  it('is a function', function() {
    expect.assertions(1);
    expect(typeof isTruthy).toBe('function');
  });

  it('should return false for falsey values', function() {
    expect.assertions(1);
    const expected = falsies.map(function() {
      return false;
    });

    const actual = falsies.map(function(item) {
      return isTruthy(item);
    });

    expect(actual).toStrictEqual(expected);
  });

  it('should return true for truthy values', function() {
    expect.assertions(1);
    const expected = truthies.map(function() {
      return true;
    });

    const actual = truthies.map(function(item) {
      return isTruthy(item);
    });

    expect(actual).toStrictEqual(expected);
  });
});
