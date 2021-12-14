(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[11],{

/***/ "+6XX":
/***/ (function(module, exports, __webpack_require__) {

var assocIndexOf = __webpack_require__("y1pI");

/**
 * Checks if a list cache value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf ListCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function listCacheHas(key) {
  return assocIndexOf(this.__data__, key) > -1;
}

module.exports = listCacheHas;


/***/ }),

/***/ "+K+b":
/***/ (function(module, exports, __webpack_require__) {

var Uint8Array = __webpack_require__("JHRd");

/**
 * Creates a clone of `arrayBuffer`.
 *
 * @private
 * @param {ArrayBuffer} arrayBuffer The array buffer to clone.
 * @returns {ArrayBuffer} Returns the cloned array buffer.
 */
function cloneArrayBuffer(arrayBuffer) {
  var result = new arrayBuffer.constructor(arrayBuffer.byteLength);
  new Uint8Array(result).set(new Uint8Array(arrayBuffer));
  return result;
}

module.exports = cloneArrayBuffer;


/***/ }),

/***/ "+iFO":
/***/ (function(module, exports, __webpack_require__) {

var baseCreate = __webpack_require__("dTAl"),
    getPrototype = __webpack_require__("LcsW"),
    isPrototype = __webpack_require__("6sVZ");

/**
 * Initializes an object clone.
 *
 * @private
 * @param {Object} object The object to clone.
 * @returns {Object} Returns the initialized clone.
 */
function initCloneObject(object) {
  return (typeof object.constructor == 'function' && !isPrototype(object))
    ? baseCreate(getPrototype(object))
    : {};
}

module.exports = initCloneObject;


/***/ }),

/***/ "/9aa":
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__("NykK"),
    isObjectLike = __webpack_require__("ExA7");

/** `Object#toString` result references. */
var symbolTag = '[object Symbol]';

/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */
function isSymbol(value) {
  return typeof value == 'symbol' ||
    (isObjectLike(value) && baseGetTag(value) == symbolTag);
}

module.exports = isSymbol;


/***/ }),

/***/ "03A+":
/***/ (function(module, exports, __webpack_require__) {

var baseIsArguments = __webpack_require__("JTzB"),
    isObjectLike = __webpack_require__("ExA7");

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/** Built-in value references. */
var propertyIsEnumerable = objectProto.propertyIsEnumerable;

/**
 * Checks if `value` is likely an `arguments` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 *  else `false`.
 * @example
 *
 * _.isArguments(function() { return arguments; }());
 * // => true
 *
 * _.isArguments([1, 2, 3]);
 * // => false
 */
var isArguments = baseIsArguments(function() { return arguments; }()) ? baseIsArguments : function(value) {
  return isObjectLike(value) && hasOwnProperty.call(value, 'callee') &&
    !propertyIsEnumerable.call(value, 'callee');
};

module.exports = isArguments;


/***/ }),

/***/ "0Cz8":
/***/ (function(module, exports, __webpack_require__) {

var ListCache = __webpack_require__("Xi7e"),
    Map = __webpack_require__("ebwN"),
    MapCache = __webpack_require__("e4Nc");

/** Used as the size to enable large array optimizations. */
var LARGE_ARRAY_SIZE = 200;

/**
 * Sets the stack `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Stack
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the stack cache instance.
 */
function stackSet(key, value) {
  var data = this.__data__;
  if (data instanceof ListCache) {
    var pairs = data.__data__;
    if (!Map || (pairs.length < LARGE_ARRAY_SIZE - 1)) {
      pairs.push([key, value]);
      this.size = ++data.size;
      return this;
    }
    data = this.__data__ = new MapCache(pairs);
  }
  data.set(key, value);
  this.size = data.size;
  return this;
}

module.exports = stackSet;


/***/ }),

/***/ "0ycA":
/***/ (function(module, exports) {

/**
 * This method returns a new empty array.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {Array} Returns the new empty array.
 * @example
 *
 * var arrays = _.times(2, _.stubArray);
 *
 * console.log(arrays);
 * // => [[], []]
 *
 * console.log(arrays[0] === arrays[1]);
 * // => false
 */
function stubArray() {
  return [];
}

module.exports = stubArray;


/***/ }),

/***/ "1+5i":
/***/ (function(module, exports, __webpack_require__) {

var baseIsSet = __webpack_require__("w/wX"),
    baseUnary = __webpack_require__("sEf8"),
    nodeUtil = __webpack_require__("mdPL");

/* Node.js helper references. */
var nodeIsSet = nodeUtil && nodeUtil.isSet;

/**
 * Checks if `value` is classified as a `Set` object.
 *
 * @static
 * @memberOf _
 * @since 4.3.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a set, else `false`.
 * @example
 *
 * _.isSet(new Set);
 * // => true
 *
 * _.isSet(new WeakSet);
 * // => false
 */
var isSet = nodeIsSet ? baseUnary(nodeIsSet) : baseIsSet;

module.exports = isSet;


/***/ }),

/***/ "2gN3":
/***/ (function(module, exports, __webpack_require__) {

var root = __webpack_require__("Kz5y");

/** Used to detect overreaching core-js shims. */
var coreJsData = root['__core-js_shared__'];

module.exports = coreJsData;


/***/ }),

/***/ "3Fdi":
/***/ (function(module, exports) {

/** Used for built-in method references. */
var funcProto = Function.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/**
 * Converts `func` to its source code.
 *
 * @private
 * @param {Function} func The function to convert.
 * @returns {string} Returns the source code.
 */
function toSource(func) {
  if (func != null) {
    try {
      return funcToString.call(func);
    } catch (e) {}
    try {
      return (func + '');
    } catch (e) {}
  }
  return '';
}

module.exports = toSource;


/***/ }),

/***/ "44Ds":
/***/ (function(module, exports, __webpack_require__) {

var MapCache = __webpack_require__("e4Nc");

/** Error message constants. */
var FUNC_ERROR_TEXT = 'Expected a function';

/**
 * Creates a function that memoizes the result of `func`. If `resolver` is
 * provided, it determines the cache key for storing the result based on the
 * arguments provided to the memoized function. By default, the first argument
 * provided to the memoized function is used as the map cache key. The `func`
 * is invoked with the `this` binding of the memoized function.
 *
 * **Note:** The cache is exposed as the `cache` property on the memoized
 * function. Its creation may be customized by replacing the `_.memoize.Cache`
 * constructor with one whose instances implement the
 * [`Map`](http://ecma-international.org/ecma-262/7.0/#sec-properties-of-the-map-prototype-object)
 * method interface of `clear`, `delete`, `get`, `has`, and `set`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to have its output memoized.
 * @param {Function} [resolver] The function to resolve the cache key.
 * @returns {Function} Returns the new memoized function.
 * @example
 *
 * var object = { 'a': 1, 'b': 2 };
 * var other = { 'c': 3, 'd': 4 };
 *
 * var values = _.memoize(_.values);
 * values(object);
 * // => [1, 2]
 *
 * values(other);
 * // => [3, 4]
 *
 * object.a = 2;
 * values(object);
 * // => [1, 2]
 *
 * // Modify the result cache.
 * values.cache.set(object, ['a', 'b']);
 * values(object);
 * // => ['a', 'b']
 *
 * // Replace `_.memoize.Cache`.
 * _.memoize.Cache = WeakMap;
 */
function memoize(func, resolver) {
  if (typeof func != 'function' || (resolver != null && typeof resolver != 'function')) {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  var memoized = function() {
    var args = arguments,
        key = resolver ? resolver.apply(this, args) : args[0],
        cache = memoized.cache;

    if (cache.has(key)) {
      return cache.get(key);
    }
    var result = func.apply(this, args);
    memoized.cache = cache.set(key, result) || cache;
    return result;
  };
  memoized.cache = new (memoize.Cache || MapCache);
  return memoized;
}

// Expose `MapCache`.
memoize.Cache = MapCache;

module.exports = memoize;


/***/ }),

/***/ "4Oe1":
/***/ (function(module, exports, __webpack_require__) {

var isPlainObject = __webpack_require__("YO3V");

/**
 * Used by `_.omit` to customize its `_.cloneDeep` use to only clone plain
 * objects.
 *
 * @private
 * @param {*} value The value to inspect.
 * @param {string} key The key of the property to inspect.
 * @returns {*} Returns the uncloned value or `undefined` to defer cloning to `_.cloneDeep`.
 */
function customOmitClone(value) {
  return isPlainObject(value) ? undefined : value;
}

module.exports = customOmitClone;


/***/ }),

/***/ "4kuk":
/***/ (function(module, exports, __webpack_require__) {

var hashClear = __webpack_require__("SfRM"),
    hashDelete = __webpack_require__("Hvzi"),
    hashGet = __webpack_require__("u8Dt"),
    hashHas = __webpack_require__("ekgI"),
    hashSet = __webpack_require__("JSQU");

/**
 * Creates a hash object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Hash(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `Hash`.
Hash.prototype.clear = hashClear;
Hash.prototype['delete'] = hashDelete;
Hash.prototype.get = hashGet;
Hash.prototype.has = hashHas;
Hash.prototype.set = hashSet;

module.exports = Hash;


/***/ }),

/***/ "4uTw":
/***/ (function(module, exports, __webpack_require__) {

var isArray = __webpack_require__("Z0cm"),
    isKey = __webpack_require__("9ggG"),
    stringToPath = __webpack_require__("GNiM"),
    toString = __webpack_require__("dt0z");

/**
 * Casts `value` to a path array if it's not one.
 *
 * @private
 * @param {*} value The value to inspect.
 * @param {Object} [object] The object to query keys on.
 * @returns {Array} Returns the cast property path array.
 */
function castPath(value, object) {
  if (isArray(value)) {
    return value;
  }
  return isKey(value, object) ? [value] : stringToPath(toString(value));
}

module.exports = castPath;


/***/ }),

/***/ "5Tg0":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {var root = __webpack_require__("Kz5y");

/** Detect free variable `exports`. */
var freeExports =  true && exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/** Built-in value references. */
var Buffer = moduleExports ? root.Buffer : undefined,
    allocUnsafe = Buffer ? Buffer.allocUnsafe : undefined;

/**
 * Creates a clone of  `buffer`.
 *
 * @private
 * @param {Buffer} buffer The buffer to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Buffer} Returns the cloned buffer.
 */
function cloneBuffer(buffer, isDeep) {
  if (isDeep) {
    return buffer.slice();
  }
  var length = buffer.length,
      result = allocUnsafe ? allocUnsafe(length) : new buffer.constructor(length);

  buffer.copy(result);
  return result;
}

module.exports = cloneBuffer;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("wYlg")(module)))

/***/ }),

/***/ "6sVZ":
/***/ (function(module, exports) {

/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Checks if `value` is likely a prototype object.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
 */
function isPrototype(value) {
  var Ctor = value && value.constructor,
      proto = (typeof Ctor == 'function' && Ctor.prototype) || objectProto;

  return value === proto;
}

module.exports = isPrototype;


/***/ }),

/***/ "77Zs":
/***/ (function(module, exports, __webpack_require__) {

var ListCache = __webpack_require__("Xi7e");

/**
 * Removes all key-value entries from the stack.
 *
 * @private
 * @name clear
 * @memberOf Stack
 */
function stackClear() {
  this.__data__ = new ListCache;
  this.size = 0;
}

module.exports = stackClear;


/***/ }),

/***/ "7GkX":
/***/ (function(module, exports, __webpack_require__) {

var arrayLikeKeys = __webpack_require__("b80T"),
    baseKeys = __webpack_require__("A90E"),
    isArrayLike = __webpack_require__("MMmD");

/**
 * Creates an array of the own enumerable property names of `object`.
 *
 * **Note:** Non-object values are coerced to objects. See the
 * [ES spec](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
 * for more details.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.keys(new Foo);
 * // => ['a', 'b'] (iteration order is not guaranteed)
 *
 * _.keys('hi');
 * // => ['0', '1']
 */
function keys(object) {
  return isArrayLike(object) ? arrayLikeKeys(object) : baseKeys(object);
}

module.exports = keys;


/***/ }),

/***/ "7Ix3":
/***/ (function(module, exports) {

/**
 * This function is like
 * [`Object.keys`](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
 * except that it includes inherited enumerable properties.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function nativeKeysIn(object) {
  var result = [];
  if (object != null) {
    for (var key in Object(object)) {
      result.push(key);
    }
  }
  return result;
}

module.exports = nativeKeysIn;


/***/ }),

/***/ "7ueG":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__("I+eb");
var $trimStart = __webpack_require__("WKiH").start;
var forcedStringTrimMethod = __webpack_require__("yNLB");

var FORCED = forcedStringTrimMethod('trimStart');

var trimStart = FORCED ? function trimStart() {
  return $trimStart(this);
} : ''.trimStart;

// `String.prototype.{ trimStart, trimLeft }` methods
// https://tc39.es/ecma262/#sec-string.prototype.trimstart
// https://tc39.es/ecma262/#String.prototype.trimleft
$({ target: 'String', proto: true, forced: FORCED }, {
  trimStart: trimStart,
  trimLeft: trimStart
});


/***/ }),

/***/ "88Gu":
/***/ (function(module, exports) {

/** Used to detect hot functions by number of calls within a span of milliseconds. */
var HOT_COUNT = 800,
    HOT_SPAN = 16;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeNow = Date.now;

/**
 * Creates a function that'll short out and invoke `identity` instead
 * of `func` when it's called `HOT_COUNT` or more times in `HOT_SPAN`
 * milliseconds.
 *
 * @private
 * @param {Function} func The function to restrict.
 * @returns {Function} Returns the new shortable function.
 */
function shortOut(func) {
  var count = 0,
      lastCalled = 0;

  return function() {
    var stamp = nativeNow(),
        remaining = HOT_SPAN - (stamp - lastCalled);

    lastCalled = stamp;
    if (remaining > 0) {
      if (++count >= HOT_COUNT) {
        return arguments[0];
      }
    } else {
      count = 0;
    }
    return func.apply(undefined, arguments);
  };
}

module.exports = shortOut;


/***/ }),

/***/ "9Nap":
/***/ (function(module, exports, __webpack_require__) {

var isSymbol = __webpack_require__("/9aa");

/** Used as references for various `Number` constants. */
var INFINITY = 1 / 0;

/**
 * Converts `value` to a string key if it's not a string or symbol.
 *
 * @private
 * @param {*} value The value to inspect.
 * @returns {string|symbol} Returns the key.
 */
function toKey(value) {
  if (typeof value == 'string' || isSymbol(value)) {
    return value;
  }
  var result = (value + '');
  return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
}

module.exports = toKey;


/***/ }),

/***/ "9ggG":
/***/ (function(module, exports, __webpack_require__) {

var isArray = __webpack_require__("Z0cm"),
    isSymbol = __webpack_require__("/9aa");

/** Used to match property names within property paths. */
var reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
    reIsPlainProp = /^\w*$/;

/**
 * Checks if `value` is a property name and not a property path.
 *
 * @private
 * @param {*} value The value to check.
 * @param {Object} [object] The object to query keys on.
 * @returns {boolean} Returns `true` if `value` is a property name, else `false`.
 */
function isKey(value, object) {
  if (isArray(value)) {
    return false;
  }
  var type = typeof value;
  if (type == 'number' || type == 'symbol' || type == 'boolean' ||
      value == null || isSymbol(value)) {
    return true;
  }
  return reIsPlainProp.test(value) || !reIsDeepProp.test(value) ||
    (object != null && value in Object(object));
}

module.exports = isKey;


/***/ }),

/***/ "A90E":
/***/ (function(module, exports, __webpack_require__) {

var isPrototype = __webpack_require__("6sVZ"),
    nativeKeys = __webpack_require__("V6Ve");

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * The base implementation of `_.keys` which doesn't treat sparse arrays as dense.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function baseKeys(object) {
  if (!isPrototype(object)) {
    return nativeKeys(object);
  }
  var result = [];
  for (var key in Object(object)) {
    if (hasOwnProperty.call(object, key) && key != 'constructor') {
      result.push(key);
    }
  }
  return result;
}

module.exports = baseKeys;


/***/ }),

/***/ "AP2z":
/***/ (function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__("nmnc");

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/** Built-in value references. */
var symToStringTag = Symbol ? Symbol.toStringTag : undefined;

/**
 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the raw `toStringTag`.
 */
function getRawTag(value) {
  var isOwn = hasOwnProperty.call(value, symToStringTag),
      tag = value[symToStringTag];

  try {
    value[symToStringTag] = undefined;
    var unmasked = true;
  } catch (e) {}

  var result = nativeObjectToString.call(value);
  if (unmasked) {
    if (isOwn) {
      value[symToStringTag] = tag;
    } else {
      delete value[symToStringTag];
    }
  }
  return result;
}

module.exports = getRawTag;


/***/ }),

/***/ "B8du":
/***/ (function(module, exports) {

/**
 * This method returns `false`.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {boolean} Returns `false`.
 * @example
 *
 * _.times(2, _.stubFalse);
 * // => [false, false]
 */
function stubFalse() {
  return false;
}

module.exports = stubFalse;


/***/ }),

/***/ "BiGR":
/***/ (function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__("nmnc"),
    isArguments = __webpack_require__("03A+"),
    isArray = __webpack_require__("Z0cm");

/** Built-in value references. */
var spreadableSymbol = Symbol ? Symbol.isConcatSpreadable : undefined;

/**
 * Checks if `value` is a flattenable `arguments` object or array.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is flattenable, else `false`.
 */
function isFlattenable(value) {
  return isArray(value) || isArguments(value) ||
    !!(spreadableSymbol && value && value[spreadableSymbol]);
}

module.exports = isFlattenable;


/***/ }),

/***/ "CH3K":
/***/ (function(module, exports) {

/**
 * Appends the elements of `values` to `array`.
 *
 * @private
 * @param {Array} array The array to modify.
 * @param {Array} values The values to append.
 * @returns {Array} Returns `array`.
 */
function arrayPush(array, values) {
  var index = -1,
      length = values.length,
      offset = array.length;

  while (++index < length) {
    array[offset + index] = values[index];
  }
  return array;
}

module.exports = arrayPush;


/***/ }),

/***/ "Cwc5":
/***/ (function(module, exports, __webpack_require__) {

var baseIsNative = __webpack_require__("NKxu"),
    getValue = __webpack_require__("Npjl");

/**
 * Gets the native function at `key` of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the method to get.
 * @returns {*} Returns the function if it's native, else `undefined`.
 */
function getNative(object, key) {
  var value = getValue(object, key);
  return baseIsNative(value) ? value : undefined;
}

module.exports = getNative;


/***/ }),

/***/ "DSRE":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {var root = __webpack_require__("Kz5y"),
    stubFalse = __webpack_require__("B8du");

/** Detect free variable `exports`. */
var freeExports =  true && exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/** Built-in value references. */
var Buffer = moduleExports ? root.Buffer : undefined;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeIsBuffer = Buffer ? Buffer.isBuffer : undefined;

/**
 * Checks if `value` is a buffer.
 *
 * @static
 * @memberOf _
 * @since 4.3.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a buffer, else `false`.
 * @example
 *
 * _.isBuffer(new Buffer(2));
 * // => true
 *
 * _.isBuffer(new Uint8Array(2));
 * // => false
 */
var isBuffer = nativeIsBuffer || stubFalse;

module.exports = isBuffer;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("wYlg")(module)))

/***/ }),

/***/ "Dw+G":
/***/ (function(module, exports, __webpack_require__) {

var copyObject = __webpack_require__("juv8"),
    keysIn = __webpack_require__("mTTR");

/**
 * The base implementation of `_.assignIn` without support for multiple sources
 * or `customizer` functions.
 *
 * @private
 * @param {Object} object The destination object.
 * @param {Object} source The source object.
 * @returns {Object} Returns `object`.
 */
function baseAssignIn(object, source) {
  return object && copyObject(source, keysIn(source), object);
}

module.exports = baseAssignIn;


/***/ }),

/***/ "E2jh":
/***/ (function(module, exports, __webpack_require__) {

var coreJsData = __webpack_require__("2gN3");

/** Used to detect methods masquerading as native. */
var maskSrcKey = (function() {
  var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || '');
  return uid ? ('Symbol(src)_1.' + uid) : '';
}());

/**
 * Checks if `func` has its source masked.
 *
 * @private
 * @param {Function} func The function to check.
 * @returns {boolean} Returns `true` if `func` is masked, else `false`.
 */
function isMasked(func) {
  return !!maskSrcKey && (maskSrcKey in func);
}

module.exports = isMasked;


/***/ }),

/***/ "EEGq":
/***/ (function(module, exports, __webpack_require__) {

var copyObject = __webpack_require__("juv8"),
    getSymbolsIn = __webpack_require__("oCl/");

/**
 * Copies own and inherited symbols of `source` to `object`.
 *
 * @private
 * @param {Object} source The object to copy symbols from.
 * @param {Object} [object={}] The object to copy symbols to.
 * @returns {Object} Returns `object`.
 */
function copySymbolsIn(source, object) {
  return copyObject(source, getSymbolsIn(source), object);
}

module.exports = copySymbolsIn;


/***/ }),

/***/ "EpBk":
/***/ (function(module, exports) {

/**
 * Checks if `value` is suitable for use as unique object key.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
 */
function isKeyable(value) {
  var type = typeof value;
  return (type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean')
    ? (value !== '__proto__')
    : (value === null);
}

module.exports = isKeyable;


/***/ }),

/***/ "ExA7":
/***/ (function(module, exports) {

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return value != null && typeof value == 'object';
}

module.exports = isObjectLike;


/***/ }),

/***/ "G6z8":
/***/ (function(module, exports, __webpack_require__) {

var baseGetAllKeys = __webpack_require__("fR/l"),
    getSymbolsIn = __webpack_require__("oCl/"),
    keysIn = __webpack_require__("mTTR");

/**
 * Creates an array of own and inherited enumerable property names and
 * symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names and symbols.
 */
function getAllKeysIn(object) {
  return baseGetAllKeys(object, keysIn, getSymbolsIn);
}

module.exports = getAllKeysIn;


/***/ }),

/***/ "GBY4":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {

__webpack_require__("7ueG");

var required = __webpack_require__("RA0T"),
    qs = __webpack_require__("nFlj"),
    slashes = /^[A-Za-z][A-Za-z0-9+-.]*:\/\//,
    protocolre = /^([a-z][a-z0-9.+-]*:)?(\/\/)?([\S\s]*)/i,
    whitespace = "[\\x09\\x0A\\x0B\\x0C\\x0D\\x20\\xA0\\u1680\\u180E\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200A\\u202F\\u205F\\u3000\\u2028\\u2029\\uFEFF]",
    left = new RegExp('^' + whitespace + '+');
/**
 * Trim a given string.
 *
 * @param {String} str String to trim.
 * @public
 */


function trimLeft(str) {
  return (str ? str : '').toString().replace(left, '');
}
/**
 * These are the parse rules for the URL parser, it informs the parser
 * about:
 *
 * 0. The char it Needs to parse, if it's a string it should be done using
 *    indexOf, RegExp using exec and NaN means set as current value.
 * 1. The property we should set when parsing this value.
 * 2. Indication if it's backwards or forward parsing, when set as number it's
 *    the value of extra chars that should be split off.
 * 3. Inherit from location if non existing in the parser.
 * 4. `toLowerCase` the resulting value.
 */


var rules = [['#', 'hash'], // Extract from the back.
['?', 'query'], // Extract from the back.
function sanitize(address) {
  // Sanitize what is left of the address
  return address.replace('\\', '/');
}, ['/', 'pathname'], // Extract from the back.
['@', 'auth', 1], // Extract from the front.
[NaN, 'host', undefined, 1, 1], // Set left over value.
[/:(\d+)$/, 'port', undefined, 1], // RegExp the back.
[NaN, 'hostname', undefined, 1, 1] // Set left over.
];
/**
 * These properties should not be copied or inherited from. This is only needed
 * for all non blob URL's as a blob URL does not include a hash, only the
 * origin.
 *
 * @type {Object}
 * @private
 */

var ignore = {
  hash: 1,
  query: 1
};
/**
 * The location object differs when your code is loaded through a normal page,
 * Worker or through a worker using a blob. And with the blobble begins the
 * trouble as the location object will contain the URL of the blob, not the
 * location of the page where our code is loaded in. The actual origin is
 * encoded in the `pathname` so we can thankfully generate a good "default"
 * location from it so we can generate proper relative URL's again.
 *
 * @param {Object|String} loc Optional default location object.
 * @returns {Object} lolcation object.
 * @public
 */

function lolcation(loc) {
  var globalVar;
  if (typeof window !== 'undefined') globalVar = window;else if (typeof global !== 'undefined') globalVar = global;else if (typeof self !== 'undefined') globalVar = self;else globalVar = {};
  var location = globalVar.location || {};
  loc = loc || location;
  var finaldestination = {},
      type = typeof loc,
      key;

  if ('blob:' === loc.protocol) {
    finaldestination = new Url(unescape(loc.pathname), {});
  } else if ('string' === type) {
    finaldestination = new Url(loc, {});

    for (key in ignore) {
      delete finaldestination[key];
    }
  } else if ('object' === type) {
    for (key in loc) {
      if (key in ignore) continue;
      finaldestination[key] = loc[key];
    }

    if (finaldestination.slashes === undefined) {
      finaldestination.slashes = slashes.test(loc.href);
    }
  }

  return finaldestination;
}
/**
 * @typedef ProtocolExtract
 * @type Object
 * @property {String} protocol Protocol matched in the URL, in lowercase.
 * @property {Boolean} slashes `true` if protocol is followed by "//", else `false`.
 * @property {String} rest Rest of the URL that is not part of the protocol.
 */

/**
 * Extract protocol information from a URL with/without double slash ("//").
 *
 * @param {String} address URL we want to extract from.
 * @return {ProtocolExtract} Extracted information.
 * @private
 */


function extractProtocol(address) {
  address = trimLeft(address);
  var match = protocolre.exec(address);
  return {
    protocol: match[1] ? match[1].toLowerCase() : '',
    slashes: !!match[2],
    rest: match[3]
  };
}
/**
 * Resolve a relative URL pathname against a base URL pathname.
 *
 * @param {String} relative Pathname of the relative URL.
 * @param {String} base Pathname of the base URL.
 * @return {String} Resolved pathname.
 * @private
 */


function resolve(relative, base) {
  if (relative === '') return base;
  var path = (base || '/').split('/').slice(0, -1).concat(relative.split('/')),
      i = path.length,
      last = path[i - 1],
      unshift = false,
      up = 0;

  while (i--) {
    if (path[i] === '.') {
      path.splice(i, 1);
    } else if (path[i] === '..') {
      path.splice(i, 1);
      up++;
    } else if (up) {
      if (i === 0) unshift = true;
      path.splice(i, 1);
      up--;
    }
  }

  if (unshift) path.unshift('');
  if (last === '.' || last === '..') path.push('');
  return path.join('/');
}
/**
 * The actual URL instance. Instead of returning an object we've opted-in to
 * create an actual constructor as it's much more memory efficient and
 * faster and it pleases my OCD.
 *
 * It is worth noting that we should not use `URL` as class name to prevent
 * clashes with the global URL instance that got introduced in browsers.
 *
 * @constructor
 * @param {String} address URL we want to parse.
 * @param {Object|String} [location] Location defaults for relative paths.
 * @param {Boolean|Function} [parser] Parser for the query string.
 * @private
 */


function Url(address, location, parser) {
  address = trimLeft(address);

  if (!(this instanceof Url)) {
    return new Url(address, location, parser);
  }

  var relative,
      extracted,
      parse,
      instruction,
      index,
      key,
      instructions = rules.slice(),
      type = typeof location,
      url = this,
      i = 0; //
  // The following if statements allows this module two have compatibility with
  // 2 different API:
  //
  // 1. Node.js's `url.parse` api which accepts a URL, boolean as arguments
  //    where the boolean indicates that the query string should also be parsed.
  //
  // 2. The `URL` interface of the browser which accepts a URL, object as
  //    arguments. The supplied object will be used as default values / fall-back
  //    for relative paths.
  //

  if ('object' !== type && 'string' !== type) {
    parser = location;
    location = null;
  }

  if (parser && 'function' !== typeof parser) parser = qs.parse;
  location = lolcation(location); //
  // Extract protocol information before running the instructions.
  //

  extracted = extractProtocol(address || '');
  relative = !extracted.protocol && !extracted.slashes;
  url.slashes = extracted.slashes || relative && location.slashes;
  url.protocol = extracted.protocol || location.protocol || '';
  address = extracted.rest; //
  // When the authority component is absent the URL starts with a path
  // component.
  //

  if (!extracted.slashes) instructions[3] = [/(.*)/, 'pathname'];

  for (; i < instructions.length; i++) {
    instruction = instructions[i];

    if (typeof instruction === 'function') {
      address = instruction(address);
      continue;
    }

    parse = instruction[0];
    key = instruction[1];

    if (parse !== parse) {
      url[key] = address;
    } else if ('string' === typeof parse) {
      if (~(index = address.indexOf(parse))) {
        if ('number' === typeof instruction[2]) {
          url[key] = address.slice(0, index);
          address = address.slice(index + instruction[2]);
        } else {
          url[key] = address.slice(index);
          address = address.slice(0, index);
        }
      }
    } else if (index = parse.exec(address)) {
      url[key] = index[1];
      address = address.slice(0, index.index);
    }

    url[key] = url[key] || (relative && instruction[3] ? location[key] || '' : ''); //
    // Hostname, host and protocol should be lowercased so they can be used to
    // create a proper `origin`.
    //

    if (instruction[4]) url[key] = url[key].toLowerCase();
  } //
  // Also parse the supplied query string in to an object. If we're supplied
  // with a custom parser as function use that instead of the default build-in
  // parser.
  //


  if (parser) url.query = parser(url.query); //
  // If the URL is relative, resolve the pathname against the base URL.
  //

  if (relative && location.slashes && url.pathname.charAt(0) !== '/' && (url.pathname !== '' || location.pathname !== '')) {
    url.pathname = resolve(url.pathname, location.pathname);
  } //
  // We should not add port numbers if they are already the default port number
  // for a given protocol. As the host also contains the port number we're going
  // override it with the hostname which contains no port number.
  //


  if (!required(url.port, url.protocol)) {
    url.host = url.hostname;
    url.port = '';
  } //
  // Parse down the `auth` for the username and password.
  //


  url.username = url.password = '';

  if (url.auth) {
    instruction = url.auth.split(':');
    url.username = instruction[0] || '';
    url.password = instruction[1] || '';
  }

  url.origin = url.protocol && url.host && url.protocol !== 'file:' ? url.protocol + '//' + url.host : 'null'; //
  // The href is just the compiled result.
  //

  url.href = url.toString();
}
/**
 * This is convenience method for changing properties in the URL instance to
 * insure that they all propagate correctly.
 *
 * @param {String} part          Property we need to adjust.
 * @param {Mixed} value          The newly assigned value.
 * @param {Boolean|Function} fn  When setting the query, it will be the function
 *                               used to parse the query.
 *                               When setting the protocol, double slash will be
 *                               removed from the final url if it is true.
 * @returns {URL} URL instance for chaining.
 * @public
 */


function set(part, value, fn) {
  var url = this;

  switch (part) {
    case 'query':
      if ('string' === typeof value && value.length) {
        value = (fn || qs.parse)(value);
      }

      url[part] = value;
      break;

    case 'port':
      url[part] = value;

      if (!required(value, url.protocol)) {
        url.host = url.hostname;
        url[part] = '';
      } else if (value) {
        url.host = url.hostname + ':' + value;
      }

      break;

    case 'hostname':
      url[part] = value;
      if (url.port) value += ':' + url.port;
      url.host = value;
      break;

    case 'host':
      url[part] = value;

      if (/:\d+$/.test(value)) {
        value = value.split(':');
        url.port = value.pop();
        url.hostname = value.join(':');
      } else {
        url.hostname = value;
        url.port = '';
      }

      break;

    case 'protocol':
      url.protocol = value.toLowerCase();
      url.slashes = !fn;
      break;

    case 'pathname':
    case 'hash':
      if (value) {
        var char = part === 'pathname' ? '/' : '#';
        url[part] = value.charAt(0) !== char ? char + value : value;
      } else {
        url[part] = value;
      }

      break;

    default:
      url[part] = value;
  }

  for (var i = 0; i < rules.length; i++) {
    var ins = rules[i];
    if (ins[4]) url[ins[1]] = url[ins[1]].toLowerCase();
  }

  url.origin = url.protocol && url.host && url.protocol !== 'file:' ? url.protocol + '//' + url.host : 'null';
  url.href = url.toString();
  return url;
}
/**
 * Transform the properties back in to a valid and full URL string.
 *
 * @param {Function} stringify Optional query stringify function.
 * @returns {String} Compiled version of the URL.
 * @public
 */


function toString(stringify) {
  if (!stringify || 'function' !== typeof stringify) stringify = qs.stringify;
  var query,
      url = this,
      protocol = url.protocol;
  if (protocol && protocol.charAt(protocol.length - 1) !== ':') protocol += ':';
  var result = protocol + (url.slashes ? '//' : '');

  if (url.username) {
    result += url.username;
    if (url.password) result += ':' + url.password;
    result += '@';
  }

  result += url.host + url.pathname;
  query = 'object' === typeof url.query ? stringify(url.query) : url.query;
  if (query) result += '?' !== query.charAt(0) ? '?' + query : query;
  if (url.hash) result += url.hash;
  return result;
}

Url.prototype = {
  set: set,
  toString: toString
}; //
// Expose the URL parser and some additional properties that might be useful for
// others or testing.
//

Url.extractProtocol = extractProtocol;
Url.location = lolcation;
Url.trimLeft = trimLeft;
Url.qs = qs;
module.exports = Url;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("eKGF")))

/***/ }),

/***/ "GNiM":
/***/ (function(module, exports, __webpack_require__) {

var memoizeCapped = __webpack_require__("I01J");

/** Used to match property names within property paths. */
var rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;

/** Used to match backslashes in property paths. */
var reEscapeChar = /\\(\\)?/g;

/**
 * Converts `string` to a property path array.
 *
 * @private
 * @param {string} string The string to convert.
 * @returns {Array} Returns the property path array.
 */
var stringToPath = memoizeCapped(function(string) {
  var result = [];
  if (string.charCodeAt(0) === 46 /* . */) {
    result.push('');
  }
  string.replace(rePropName, function(match, number, quote, subString) {
    result.push(quote ? subString.replace(reEscapeChar, '$1') : (number || match));
  });
  return result;
});

module.exports = stringToPath;


/***/ }),

/***/ "Gi0A":
/***/ (function(module, exports, __webpack_require__) {

var getTag = __webpack_require__("QqLw"),
    isObjectLike = __webpack_require__("ExA7");

/** `Object#toString` result references. */
var mapTag = '[object Map]';

/**
 * The base implementation of `_.isMap` without Node.js optimizations.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a map, else `false`.
 */
function baseIsMap(value) {
  return isObjectLike(value) && getTag(value) == mapTag;
}

module.exports = baseIsMap;


/***/ }),

/***/ "GoyQ":
/***/ (function(module, exports) {

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return value != null && (type == 'object' || type == 'function');
}

module.exports = isObject;


/***/ }),

/***/ "H8j4":
/***/ (function(module, exports, __webpack_require__) {

var getMapData = __webpack_require__("QkVE");

/**
 * Sets the map `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf MapCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the map cache instance.
 */
function mapCacheSet(key, value) {
  var data = getMapData(this, key),
      size = data.size;

  data.set(key, value);
  this.size += data.size == size ? 0 : 1;
  return this;
}

module.exports = mapCacheSet;


/***/ }),

/***/ "HOxn":
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__("Cwc5"),
    root = __webpack_require__("Kz5y");

/* Built-in method references that are verified to be native. */
var Promise = getNative(root, 'Promise');

module.exports = Promise;


/***/ }),

/***/ "Hvzi":
/***/ (function(module, exports) {

/**
 * Removes `key` and its value from the hash.
 *
 * @private
 * @name delete
 * @memberOf Hash
 * @param {Object} hash The hash to modify.
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function hashDelete(key) {
  var result = this.has(key) && delete this.__data__[key];
  this.size -= result ? 1 : 0;
  return result;
}

module.exports = hashDelete;


/***/ }),

/***/ "I01J":
/***/ (function(module, exports, __webpack_require__) {

var memoize = __webpack_require__("44Ds");

/** Used as the maximum memoize cache size. */
var MAX_MEMOIZE_SIZE = 500;

/**
 * A specialized version of `_.memoize` which clears the memoized function's
 * cache when it exceeds `MAX_MEMOIZE_SIZE`.
 *
 * @private
 * @param {Function} func The function to have its output memoized.
 * @returns {Function} Returns the new memoized function.
 */
function memoizeCapped(func) {
  var result = memoize(func, function(key) {
    if (cache.size === MAX_MEMOIZE_SIZE) {
      cache.clear();
    }
    return key;
  });

  var cache = result.cache;
  return result;
}

module.exports = memoizeCapped;


/***/ }),

/***/ "Ioao":
/***/ (function(module, exports, __webpack_require__) {

var apply = __webpack_require__("heNW");

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMax = Math.max;

/**
 * A specialized version of `baseRest` which transforms the rest array.
 *
 * @private
 * @param {Function} func The function to apply a rest parameter to.
 * @param {number} [start=func.length-1] The start position of the rest parameter.
 * @param {Function} transform The rest array transform.
 * @returns {Function} Returns the new function.
 */
function overRest(func, start, transform) {
  start = nativeMax(start === undefined ? (func.length - 1) : start, 0);
  return function() {
    var args = arguments,
        index = -1,
        length = nativeMax(args.length - start, 0),
        array = Array(length);

    while (++index < length) {
      array[index] = args[start + index];
    }
    index = -1;
    var otherArgs = Array(start + 1);
    while (++index < start) {
      otherArgs[index] = args[index];
    }
    otherArgs[start] = transform(array);
    return apply(func, this, otherArgs);
  };
}

module.exports = overRest;


/***/ }),

/***/ "JHRd":
/***/ (function(module, exports, __webpack_require__) {

var root = __webpack_require__("Kz5y");

/** Built-in value references. */
var Uint8Array = root.Uint8Array;

module.exports = Uint8Array;


/***/ }),

/***/ "JHgL":
/***/ (function(module, exports, __webpack_require__) {

var getMapData = __webpack_require__("QkVE");

/**
 * Gets the map value for `key`.
 *
 * @private
 * @name get
 * @memberOf MapCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function mapCacheGet(key) {
  return getMapData(this, key).get(key);
}

module.exports = mapCacheGet;


/***/ }),

/***/ "JSQU":
/***/ (function(module, exports, __webpack_require__) {

var nativeCreate = __webpack_require__("YESw");

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/**
 * Sets the hash `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Hash
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the hash instance.
 */
function hashSet(key, value) {
  var data = this.__data__;
  this.size += this.has(key) ? 0 : 1;
  data[key] = (nativeCreate && value === undefined) ? HASH_UNDEFINED : value;
  return this;
}

module.exports = hashSet;


/***/ }),

/***/ "JTzB":
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__("NykK"),
    isObjectLike = __webpack_require__("ExA7");

/** `Object#toString` result references. */
var argsTag = '[object Arguments]';

/**
 * The base implementation of `_.isArguments`.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 */
function baseIsArguments(value) {
  return isObjectLike(value) && baseGetTag(value) == argsTag;
}

module.exports = baseIsArguments;


/***/ }),

/***/ "KMkd":
/***/ (function(module, exports) {

/**
 * Removes all key-value entries from the list cache.
 *
 * @private
 * @name clear
 * @memberOf ListCache
 */
function listCacheClear() {
  this.__data__ = [];
  this.size = 0;
}

module.exports = listCacheClear;


/***/ }),

/***/ "KfNM":
/***/ (function(module, exports) {

/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/**
 * Converts `value` to a string using `Object.prototype.toString`.
 *
 * @private
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 */
function objectToString(value) {
  return nativeObjectToString.call(value);
}

module.exports = objectToString;


/***/ }),

/***/ "KxBF":
/***/ (function(module, exports) {

/**
 * The base implementation of `_.slice` without an iteratee call guard.
 *
 * @private
 * @param {Array} array The array to slice.
 * @param {number} [start=0] The start position.
 * @param {number} [end=array.length] The end position.
 * @returns {Array} Returns the slice of `array`.
 */
function baseSlice(array, start, end) {
  var index = -1,
      length = array.length;

  if (start < 0) {
    start = -start > length ? 0 : (length + start);
  }
  end = end > length ? length : end;
  if (end < 0) {
    end += length;
  }
  length = start > end ? 0 : ((end - start) >>> 0);
  start >>>= 0;

  var result = Array(length);
  while (++index < length) {
    result[index] = array[index + start];
  }
  return result;
}

module.exports = baseSlice;


/***/ }),

/***/ "Kz5y":
/***/ (function(module, exports, __webpack_require__) {

var freeGlobal = __webpack_require__("WFqU");

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

module.exports = root;


/***/ }),

/***/ "L8xA":
/***/ (function(module, exports) {

/**
 * Removes `key` and its value from the stack.
 *
 * @private
 * @name delete
 * @memberOf Stack
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function stackDelete(key) {
  var data = this.__data__,
      result = data['delete'](key);

  this.size = data.size;
  return result;
}

module.exports = stackDelete;


/***/ }),

/***/ "LXxW":
/***/ (function(module, exports) {

/**
 * A specialized version of `_.filter` for arrays without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} predicate The function invoked per iteration.
 * @returns {Array} Returns the new filtered array.
 */
function arrayFilter(array, predicate) {
  var index = -1,
      length = array == null ? 0 : array.length,
      resIndex = 0,
      result = [];

  while (++index < length) {
    var value = array[index];
    if (predicate(value, index, array)) {
      result[resIndex++] = value;
    }
  }
  return result;
}

module.exports = arrayFilter;


/***/ }),

/***/ "LcsW":
/***/ (function(module, exports, __webpack_require__) {

var overArg = __webpack_require__("kekF");

/** Built-in value references. */
var getPrototype = overArg(Object.getPrototypeOf, Object);

module.exports = getPrototype;


/***/ }),

/***/ "MMmD":
/***/ (function(module, exports, __webpack_require__) {

var isFunction = __webpack_require__("lSCD"),
    isLength = __webpack_require__("shjB");

/**
 * Checks if `value` is array-like. A value is considered array-like if it's
 * not a function and has a `value.length` that's an integer greater than or
 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
 * @example
 *
 * _.isArrayLike([1, 2, 3]);
 * // => true
 *
 * _.isArrayLike(document.body.children);
 * // => true
 *
 * _.isArrayLike('abc');
 * // => true
 *
 * _.isArrayLike(_.noop);
 * // => false
 */
function isArrayLike(value) {
  return value != null && isLength(value.length) && !isFunction(value);
}

module.exports = isArrayLike;


/***/ }),

/***/ "MrPd":
/***/ (function(module, exports, __webpack_require__) {

var baseAssignValue = __webpack_require__("hypo"),
    eq = __webpack_require__("ljhN");

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Assigns `value` to `key` of `object` if the existing value is not equivalent
 * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * for equality comparisons.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */
function assignValue(object, key, value) {
  var objValue = object[key];
  if (!(hasOwnProperty.call(object, key) && eq(objValue, value)) ||
      (value === undefined && !(key in object))) {
    baseAssignValue(object, key, value);
  }
}

module.exports = assignValue;


/***/ }),

/***/ "MvSz":
/***/ (function(module, exports, __webpack_require__) {

var arrayFilter = __webpack_require__("LXxW"),
    stubArray = __webpack_require__("0ycA");

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Built-in value references. */
var propertyIsEnumerable = objectProto.propertyIsEnumerable;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeGetSymbols = Object.getOwnPropertySymbols;

/**
 * Creates an array of the own enumerable symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of symbols.
 */
var getSymbols = !nativeGetSymbols ? stubArray : function(object) {
  if (object == null) {
    return [];
  }
  object = Object(object);
  return arrayFilter(nativeGetSymbols(object), function(symbol) {
    return propertyIsEnumerable.call(object, symbol);
  });
};

module.exports = getSymbols;


/***/ }),

/***/ "NKxu":
/***/ (function(module, exports, __webpack_require__) {

var isFunction = __webpack_require__("lSCD"),
    isMasked = __webpack_require__("E2jh"),
    isObject = __webpack_require__("GoyQ"),
    toSource = __webpack_require__("3Fdi");

/**
 * Used to match `RegExp`
 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
 */
var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;

/** Used to detect host constructors (Safari). */
var reIsHostCtor = /^\[object .+?Constructor\]$/;

/** Used for built-in method references. */
var funcProto = Function.prototype,
    objectProto = Object.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/** Used to detect if a method is native. */
var reIsNative = RegExp('^' +
  funcToString.call(hasOwnProperty).replace(reRegExpChar, '\\$&')
  .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
);

/**
 * The base implementation of `_.isNative` without bad shim checks.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a native function,
 *  else `false`.
 */
function baseIsNative(value) {
  if (!isObject(value) || isMasked(value)) {
    return false;
  }
  var pattern = isFunction(value) ? reIsNative : reIsHostCtor;
  return pattern.test(toSource(value));
}

module.exports = baseIsNative;


/***/ }),

/***/ "Npjl":
/***/ (function(module, exports) {

/**
 * Gets the value at `key` of `object`.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {string} key The key of the property to get.
 * @returns {*} Returns the property value.
 */
function getValue(object, key) {
  return object == null ? undefined : object[key];
}

module.exports = getValue;


/***/ }),

/***/ "NykK":
/***/ (function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__("nmnc"),
    getRawTag = __webpack_require__("AP2z"),
    objectToString = __webpack_require__("KfNM");

/** `Object#toString` result references. */
var nullTag = '[object Null]',
    undefinedTag = '[object Undefined]';

/** Built-in value references. */
var symToStringTag = Symbol ? Symbol.toStringTag : undefined;

/**
 * The base implementation of `getTag` without fallbacks for buggy environments.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
function baseGetTag(value) {
  if (value == null) {
    return value === undefined ? undefinedTag : nullTag;
  }
  return (symToStringTag && symToStringTag in Object(value))
    ? getRawTag(value)
    : objectToString(value);
}

module.exports = baseGetTag;


/***/ }),

/***/ "O0oS":
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__("Cwc5");

var defineProperty = (function() {
  try {
    var func = getNative(Object, 'defineProperty');
    func({}, '', {});
    return func;
  } catch (e) {}
}());

module.exports = defineProperty;


/***/ }),

/***/ "OBhP":
/***/ (function(module, exports, __webpack_require__) {

var Stack = __webpack_require__("fmRc"),
    arrayEach = __webpack_require__("gFfm"),
    assignValue = __webpack_require__("MrPd"),
    baseAssign = __webpack_require__("WwFo"),
    baseAssignIn = __webpack_require__("Dw+G"),
    cloneBuffer = __webpack_require__("5Tg0"),
    copyArray = __webpack_require__("Q1l4"),
    copySymbols = __webpack_require__("VOtZ"),
    copySymbolsIn = __webpack_require__("EEGq"),
    getAllKeys = __webpack_require__("qZTm"),
    getAllKeysIn = __webpack_require__("G6z8"),
    getTag = __webpack_require__("QqLw"),
    initCloneArray = __webpack_require__("yHx3"),
    initCloneByTag = __webpack_require__("wrZu"),
    initCloneObject = __webpack_require__("+iFO"),
    isArray = __webpack_require__("Z0cm"),
    isBuffer = __webpack_require__("DSRE"),
    isMap = __webpack_require__("zEVN"),
    isObject = __webpack_require__("GoyQ"),
    isSet = __webpack_require__("1+5i"),
    keys = __webpack_require__("7GkX"),
    keysIn = __webpack_require__("mTTR");

/** Used to compose bitmasks for cloning. */
var CLONE_DEEP_FLAG = 1,
    CLONE_FLAT_FLAG = 2,
    CLONE_SYMBOLS_FLAG = 4;

/** `Object#toString` result references. */
var argsTag = '[object Arguments]',
    arrayTag = '[object Array]',
    boolTag = '[object Boolean]',
    dateTag = '[object Date]',
    errorTag = '[object Error]',
    funcTag = '[object Function]',
    genTag = '[object GeneratorFunction]',
    mapTag = '[object Map]',
    numberTag = '[object Number]',
    objectTag = '[object Object]',
    regexpTag = '[object RegExp]',
    setTag = '[object Set]',
    stringTag = '[object String]',
    symbolTag = '[object Symbol]',
    weakMapTag = '[object WeakMap]';

var arrayBufferTag = '[object ArrayBuffer]',
    dataViewTag = '[object DataView]',
    float32Tag = '[object Float32Array]',
    float64Tag = '[object Float64Array]',
    int8Tag = '[object Int8Array]',
    int16Tag = '[object Int16Array]',
    int32Tag = '[object Int32Array]',
    uint8Tag = '[object Uint8Array]',
    uint8ClampedTag = '[object Uint8ClampedArray]',
    uint16Tag = '[object Uint16Array]',
    uint32Tag = '[object Uint32Array]';

/** Used to identify `toStringTag` values supported by `_.clone`. */
var cloneableTags = {};
cloneableTags[argsTag] = cloneableTags[arrayTag] =
cloneableTags[arrayBufferTag] = cloneableTags[dataViewTag] =
cloneableTags[boolTag] = cloneableTags[dateTag] =
cloneableTags[float32Tag] = cloneableTags[float64Tag] =
cloneableTags[int8Tag] = cloneableTags[int16Tag] =
cloneableTags[int32Tag] = cloneableTags[mapTag] =
cloneableTags[numberTag] = cloneableTags[objectTag] =
cloneableTags[regexpTag] = cloneableTags[setTag] =
cloneableTags[stringTag] = cloneableTags[symbolTag] =
cloneableTags[uint8Tag] = cloneableTags[uint8ClampedTag] =
cloneableTags[uint16Tag] = cloneableTags[uint32Tag] = true;
cloneableTags[errorTag] = cloneableTags[funcTag] =
cloneableTags[weakMapTag] = false;

/**
 * The base implementation of `_.clone` and `_.cloneDeep` which tracks
 * traversed objects.
 *
 * @private
 * @param {*} value The value to clone.
 * @param {boolean} bitmask The bitmask flags.
 *  1 - Deep clone
 *  2 - Flatten inherited properties
 *  4 - Clone symbols
 * @param {Function} [customizer] The function to customize cloning.
 * @param {string} [key] The key of `value`.
 * @param {Object} [object] The parent object of `value`.
 * @param {Object} [stack] Tracks traversed objects and their clone counterparts.
 * @returns {*} Returns the cloned value.
 */
function baseClone(value, bitmask, customizer, key, object, stack) {
  var result,
      isDeep = bitmask & CLONE_DEEP_FLAG,
      isFlat = bitmask & CLONE_FLAT_FLAG,
      isFull = bitmask & CLONE_SYMBOLS_FLAG;

  if (customizer) {
    result = object ? customizer(value, key, object, stack) : customizer(value);
  }
  if (result !== undefined) {
    return result;
  }
  if (!isObject(value)) {
    return value;
  }
  var isArr = isArray(value);
  if (isArr) {
    result = initCloneArray(value);
    if (!isDeep) {
      return copyArray(value, result);
    }
  } else {
    var tag = getTag(value),
        isFunc = tag == funcTag || tag == genTag;

    if (isBuffer(value)) {
      return cloneBuffer(value, isDeep);
    }
    if (tag == objectTag || tag == argsTag || (isFunc && !object)) {
      result = (isFlat || isFunc) ? {} : initCloneObject(value);
      if (!isDeep) {
        return isFlat
          ? copySymbolsIn(value, baseAssignIn(result, value))
          : copySymbols(value, baseAssign(result, value));
      }
    } else {
      if (!cloneableTags[tag]) {
        return object ? value : {};
      }
      result = initCloneByTag(value, tag, isDeep);
    }
  }
  // Check for circular references and return its corresponding clone.
  stack || (stack = new Stack);
  var stacked = stack.get(value);
  if (stacked) {
    return stacked;
  }
  stack.set(value, result);

  if (isSet(value)) {
    value.forEach(function(subValue) {
      result.add(baseClone(subValue, bitmask, customizer, subValue, value, stack));
    });
  } else if (isMap(value)) {
    value.forEach(function(subValue, key) {
      result.set(key, baseClone(subValue, bitmask, customizer, key, value, stack));
    });
  }

  var keysFunc = isFull
    ? (isFlat ? getAllKeysIn : getAllKeys)
    : (isFlat ? keysIn : keys);

  var props = isArr ? undefined : keysFunc(value);
  arrayEach(props || value, function(subValue, key) {
    if (props) {
      key = subValue;
      subValue = value[key];
    }
    // Recursively populate clone (susceptible to call stack limits).
    assignValue(result, key, baseClone(subValue, bitmask, customizer, key, value, stack));
  });
  return result;
}

module.exports = baseClone;


/***/ }),

/***/ "Of+w":
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__("Cwc5"),
    root = __webpack_require__("Kz5y");

/* Built-in method references that are verified to be native. */
var WeakMap = getNative(root, 'WeakMap');

module.exports = WeakMap;


/***/ }),

/***/ "Puqe":
/***/ (function(module, exports, __webpack_require__) {

var arrayMap = __webpack_require__("eUgh"),
    baseClone = __webpack_require__("OBhP"),
    baseUnset = __webpack_require__("S7Xf"),
    castPath = __webpack_require__("4uTw"),
    copyObject = __webpack_require__("juv8"),
    customOmitClone = __webpack_require__("4Oe1"),
    flatRest = __webpack_require__("xs/l"),
    getAllKeysIn = __webpack_require__("G6z8");

/** Used to compose bitmasks for cloning. */
var CLONE_DEEP_FLAG = 1,
    CLONE_FLAT_FLAG = 2,
    CLONE_SYMBOLS_FLAG = 4;

/**
 * The opposite of `_.pick`; this method creates an object composed of the
 * own and inherited enumerable property paths of `object` that are not omitted.
 *
 * **Note:** This method is considerably slower than `_.pick`.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Object
 * @param {Object} object The source object.
 * @param {...(string|string[])} [paths] The property paths to omit.
 * @returns {Object} Returns the new object.
 * @example
 *
 * var object = { 'a': 1, 'b': '2', 'c': 3 };
 *
 * _.omit(object, ['a', 'c']);
 * // => { 'b': '2' }
 */
var omit = flatRest(function(object, paths) {
  var result = {};
  if (object == null) {
    return result;
  }
  var isDeep = false;
  paths = arrayMap(paths, function(path) {
    path = castPath(path, object);
    isDeep || (isDeep = path.length > 1);
    return path;
  });
  copyObject(object, getAllKeysIn(object), result);
  if (isDeep) {
    result = baseClone(result, CLONE_DEEP_FLAG | CLONE_FLAT_FLAG | CLONE_SYMBOLS_FLAG, customOmitClone);
  }
  var length = paths.length;
  while (length--) {
    baseUnset(result, paths[length]);
  }
  return result;
});

module.exports = omit;


/***/ }),

/***/ "Q1l4":
/***/ (function(module, exports) {

/**
 * Copies the values of `source` to `array`.
 *
 * @private
 * @param {Array} source The array to copy values from.
 * @param {Array} [array=[]] The array to copy values to.
 * @returns {Array} Returns `array`.
 */
function copyArray(source, array) {
  var index = -1,
      length = source.length;

  array || (array = Array(length));
  while (++index < length) {
    array[index] = source[index];
  }
  return array;
}

module.exports = copyArray;


/***/ }),

/***/ "QcOe":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("GoyQ"),
    isPrototype = __webpack_require__("6sVZ"),
    nativeKeysIn = __webpack_require__("7Ix3");

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * The base implementation of `_.keysIn` which doesn't treat sparse arrays as dense.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function baseKeysIn(object) {
  if (!isObject(object)) {
    return nativeKeysIn(object);
  }
  var isProto = isPrototype(object),
      result = [];

  for (var key in object) {
    if (!(key == 'constructor' && (isProto || !hasOwnProperty.call(object, key)))) {
      result.push(key);
    }
  }
  return result;
}

module.exports = baseKeysIn;


/***/ }),

/***/ "QkVE":
/***/ (function(module, exports, __webpack_require__) {

var isKeyable = __webpack_require__("EpBk");

/**
 * Gets the data for `map`.
 *
 * @private
 * @param {Object} map The map to query.
 * @param {string} key The reference key.
 * @returns {*} Returns the map data.
 */
function getMapData(map, key) {
  var data = map.__data__;
  return isKeyable(key)
    ? data[typeof key == 'string' ? 'string' : 'hash']
    : data.map;
}

module.exports = getMapData;


/***/ }),

/***/ "QqLw":
/***/ (function(module, exports, __webpack_require__) {

var DataView = __webpack_require__("tadb"),
    Map = __webpack_require__("ebwN"),
    Promise = __webpack_require__("HOxn"),
    Set = __webpack_require__("yGk4"),
    WeakMap = __webpack_require__("Of+w"),
    baseGetTag = __webpack_require__("NykK"),
    toSource = __webpack_require__("3Fdi");

/** `Object#toString` result references. */
var mapTag = '[object Map]',
    objectTag = '[object Object]',
    promiseTag = '[object Promise]',
    setTag = '[object Set]',
    weakMapTag = '[object WeakMap]';

var dataViewTag = '[object DataView]';

/** Used to detect maps, sets, and weakmaps. */
var dataViewCtorString = toSource(DataView),
    mapCtorString = toSource(Map),
    promiseCtorString = toSource(Promise),
    setCtorString = toSource(Set),
    weakMapCtorString = toSource(WeakMap);

/**
 * Gets the `toStringTag` of `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
var getTag = baseGetTag;

// Fallback for data views, maps, sets, and weak maps in IE 11 and promises in Node.js < 6.
if ((DataView && getTag(new DataView(new ArrayBuffer(1))) != dataViewTag) ||
    (Map && getTag(new Map) != mapTag) ||
    (Promise && getTag(Promise.resolve()) != promiseTag) ||
    (Set && getTag(new Set) != setTag) ||
    (WeakMap && getTag(new WeakMap) != weakMapTag)) {
  getTag = function(value) {
    var result = baseGetTag(value),
        Ctor = result == objectTag ? value.constructor : undefined,
        ctorString = Ctor ? toSource(Ctor) : '';

    if (ctorString) {
      switch (ctorString) {
        case dataViewCtorString: return dataViewTag;
        case mapCtorString: return mapTag;
        case promiseCtorString: return promiseTag;
        case setCtorString: return setTag;
        case weakMapCtorString: return weakMapTag;
      }
    }
    return result;
  };
}

module.exports = getTag;


/***/ }),

/***/ "RA0T":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * Check if we're required to add a port number.
 *
 * @see https://url.spec.whatwg.org/#default-port
 * @param {Number|String} port Port number we need to check
 * @param {String} protocol Protocol we need to check against.
 * @returns {Boolean} Is it a default port for the given protocol
 * @api private
 */

module.exports = function required(port, protocol) {
  protocol = protocol.split(':')[0];
  port = +port;
  if (!port) return false;

  switch (protocol) {
    case 'http':
    case 'ws':
      return port !== 80;

    case 'https':
    case 'wss':
      return port !== 443;

    case 'ftp':
      return port !== 21;

    case 'gopher':
      return port !== 70;

    case 'file':
      return false;
  }

  return port !== 0;
};

/***/ }),

/***/ "RBan":
/***/ (function(module, exports) {

/**
 * Gets the last element of `array`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Array
 * @param {Array} array The array to query.
 * @returns {*} Returns the last element of `array`.
 * @example
 *
 * _.last([1, 2, 3]);
 * // => 3
 */
function last(array) {
  var length = array == null ? 0 : array.length;
  return length ? array[length - 1] : undefined;
}

module.exports = last;


/***/ }),

/***/ "S7Xf":
/***/ (function(module, exports, __webpack_require__) {

var castPath = __webpack_require__("4uTw"),
    last = __webpack_require__("RBan"),
    parent = __webpack_require__("gpbi"),
    toKey = __webpack_require__("9Nap");

/**
 * The base implementation of `_.unset`.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {Array|string} path The property path to unset.
 * @returns {boolean} Returns `true` if the property is deleted, else `false`.
 */
function baseUnset(object, path) {
  path = castPath(path, object);
  object = parent(object, path);
  return object == null || delete object[toKey(last(path))];
}

module.exports = baseUnset;


/***/ }),

/***/ "SfRM":
/***/ (function(module, exports, __webpack_require__) {

var nativeCreate = __webpack_require__("YESw");

/**
 * Removes all key-value entries from the hash.
 *
 * @private
 * @name clear
 * @memberOf Hash
 */
function hashClear() {
  this.__data__ = nativeCreate ? nativeCreate(null) : {};
  this.size = 0;
}

module.exports = hashClear;


/***/ }),

/***/ "TYy9":
/***/ (function(module, exports, __webpack_require__) {

var baseFlatten = __webpack_require__("XGnz");

/**
 * Flattens `array` a single level deep.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Array
 * @param {Array} array The array to flatten.
 * @returns {Array} Returns the new flattened array.
 * @example
 *
 * _.flatten([1, [2, [3, [4]], 5]]);
 * // => [1, 2, [3, [4]], 5]
 */
function flatten(array) {
  var length = array == null ? 0 : array.length;
  return length ? baseFlatten(array, 1) : [];
}

module.exports = flatten;


/***/ }),

/***/ "UNi/":
/***/ (function(module, exports) {

/**
 * The base implementation of `_.times` without support for iteratee shorthands
 * or max array length checks.
 *
 * @private
 * @param {number} n The number of times to invoke `iteratee`.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the array of results.
 */
function baseTimes(n, iteratee) {
  var index = -1,
      result = Array(n);

  while (++index < n) {
    result[index] = iteratee(index);
  }
  return result;
}

module.exports = baseTimes;


/***/ }),

/***/ "V6Ve":
/***/ (function(module, exports, __webpack_require__) {

var overArg = __webpack_require__("kekF");

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeKeys = overArg(Object.keys, Object);

module.exports = nativeKeys;


/***/ }),

/***/ "VOtZ":
/***/ (function(module, exports, __webpack_require__) {

var copyObject = __webpack_require__("juv8"),
    getSymbols = __webpack_require__("MvSz");

/**
 * Copies own symbols of `source` to `object`.
 *
 * @private
 * @param {Object} source The object to copy symbols from.
 * @param {Object} [object={}] The object to copy symbols to.
 * @returns {Object} Returns `object`.
 */
function copySymbols(source, object) {
  return copyObject(source, getSymbols(source), object);
}

module.exports = copySymbols;


/***/ }),

/***/ "VaNO":
/***/ (function(module, exports) {

/**
 * Checks if a stack value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Stack
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function stackHas(key) {
  return this.__data__.has(key);
}

module.exports = stackHas;


/***/ }),

/***/ "WFqU":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

module.exports = freeGlobal;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("eKGF")))

/***/ }),

/***/ "WJkJ":
/***/ (function(module, exports) {

// a string of all valid unicode whitespaces
// eslint-disable-next-line max-len
module.exports = '\u0009\u000A\u000B\u000C\u000D\u0020\u00A0\u1680\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF';


/***/ }),

/***/ "WKiH":
/***/ (function(module, exports, __webpack_require__) {

var requireObjectCoercible = __webpack_require__("HYAF");
var whitespaces = __webpack_require__("WJkJ");

var whitespace = '[' + whitespaces + ']';
var ltrim = RegExp('^' + whitespace + whitespace + '*');
var rtrim = RegExp(whitespace + whitespace + '*$');

// `String.prototype.{ trim, trimStart, trimEnd, trimLeft, trimRight }` methods implementation
var createMethod = function (TYPE) {
  return function ($this) {
    var string = String(requireObjectCoercible($this));
    if (TYPE & 1) string = string.replace(ltrim, '');
    if (TYPE & 2) string = string.replace(rtrim, '');
    return string;
  };
};

module.exports = {
  // `String.prototype.{ trimLeft, trimStart }` methods
  // https://tc39.es/ecma262/#sec-string.prototype.trimstart
  start: createMethod(1),
  // `String.prototype.{ trimRight, trimEnd }` methods
  // https://tc39.es/ecma262/#sec-string.prototype.trimend
  end: createMethod(2),
  // `String.prototype.trim` method
  // https://tc39.es/ecma262/#sec-string.prototype.trim
  trim: createMethod(3)
};


/***/ }),

/***/ "WwFo":
/***/ (function(module, exports, __webpack_require__) {

var copyObject = __webpack_require__("juv8"),
    keys = __webpack_require__("7GkX");

/**
 * The base implementation of `_.assign` without support for multiple sources
 * or `customizer` functions.
 *
 * @private
 * @param {Object} object The destination object.
 * @param {Object} source The source object.
 * @returns {Object} Returns `object`.
 */
function baseAssign(object, source) {
  return object && copyObject(source, keys(source), object);
}

module.exports = baseAssign;


/***/ }),

/***/ "X0lI":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function nullthrows(x, message) {
  if (x != null) {
    return x;
  }

  var error = new Error(message !== undefined ? message : 'Got unexpected ' + x);
  error.framesToPop = 1; // Skip nullthrows's own stack frame.

  throw error;
}

module.exports = nullthrows;
module.exports.default = nullthrows;
Object.defineProperty(module.exports, '__esModule', {
  value: true
});

/***/ }),

/***/ "XGnz":
/***/ (function(module, exports, __webpack_require__) {

var arrayPush = __webpack_require__("CH3K"),
    isFlattenable = __webpack_require__("BiGR");

/**
 * The base implementation of `_.flatten` with support for restricting flattening.
 *
 * @private
 * @param {Array} array The array to flatten.
 * @param {number} depth The maximum recursion depth.
 * @param {boolean} [predicate=isFlattenable] The function invoked per iteration.
 * @param {boolean} [isStrict] Restrict to values that pass `predicate` checks.
 * @param {Array} [result=[]] The initial result value.
 * @returns {Array} Returns the new flattened array.
 */
function baseFlatten(array, depth, predicate, isStrict, result) {
  var index = -1,
      length = array.length;

  predicate || (predicate = isFlattenable);
  result || (result = []);

  while (++index < length) {
    var value = array[index];
    if (depth > 0 && predicate(value)) {
      if (depth > 1) {
        // Recursively flatten arrays (susceptible to call stack limits).
        baseFlatten(value, depth - 1, predicate, isStrict, result);
      } else {
        arrayPush(result, value);
      }
    } else if (!isStrict) {
      result[result.length] = value;
    }
  }
  return result;
}

module.exports = baseFlatten;


/***/ }),

/***/ "XYm9":
/***/ (function(module, exports, __webpack_require__) {

var cloneArrayBuffer = __webpack_require__("+K+b");

/**
 * Creates a clone of `dataView`.
 *
 * @private
 * @param {Object} dataView The data view to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the cloned data view.
 */
function cloneDataView(dataView, isDeep) {
  var buffer = isDeep ? cloneArrayBuffer(dataView.buffer) : dataView.buffer;
  return new dataView.constructor(buffer, dataView.byteOffset, dataView.byteLength);
}

module.exports = cloneDataView;


/***/ }),

/***/ "Xi7e":
/***/ (function(module, exports, __webpack_require__) {

var listCacheClear = __webpack_require__("KMkd"),
    listCacheDelete = __webpack_require__("adU4"),
    listCacheGet = __webpack_require__("tMB7"),
    listCacheHas = __webpack_require__("+6XX"),
    listCacheSet = __webpack_require__("Z8oC");

/**
 * Creates an list cache object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function ListCache(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `ListCache`.
ListCache.prototype.clear = listCacheClear;
ListCache.prototype['delete'] = listCacheDelete;
ListCache.prototype.get = listCacheGet;
ListCache.prototype.has = listCacheHas;
ListCache.prototype.set = listCacheSet;

module.exports = ListCache;


/***/ }),

/***/ "YESw":
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__("Cwc5");

/* Built-in method references that are verified to be native. */
var nativeCreate = getNative(Object, 'create');

module.exports = nativeCreate;


/***/ }),

/***/ "YO3V":
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__("NykK"),
    getPrototype = __webpack_require__("LcsW"),
    isObjectLike = __webpack_require__("ExA7");

/** `Object#toString` result references. */
var objectTag = '[object Object]';

/** Used for built-in method references. */
var funcProto = Function.prototype,
    objectProto = Object.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/** Used to infer the `Object` constructor. */
var objectCtorString = funcToString.call(Object);

/**
 * Checks if `value` is a plain object, that is, an object created by the
 * `Object` constructor or one with a `[[Prototype]]` of `null`.
 *
 * @static
 * @memberOf _
 * @since 0.8.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a plain object, else `false`.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 * }
 *
 * _.isPlainObject(new Foo);
 * // => false
 *
 * _.isPlainObject([1, 2, 3]);
 * // => false
 *
 * _.isPlainObject({ 'x': 0, 'y': 0 });
 * // => true
 *
 * _.isPlainObject(Object.create(null));
 * // => true
 */
function isPlainObject(value) {
  if (!isObjectLike(value) || baseGetTag(value) != objectTag) {
    return false;
  }
  var proto = getPrototype(value);
  if (proto === null) {
    return true;
  }
  var Ctor = hasOwnProperty.call(proto, 'constructor') && proto.constructor;
  return typeof Ctor == 'function' && Ctor instanceof Ctor &&
    funcToString.call(Ctor) == objectCtorString;
}

module.exports = isPlainObject;


/***/ }),

/***/ "Z0cm":
/***/ (function(module, exports) {

/**
 * Checks if `value` is classified as an `Array` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
 * @example
 *
 * _.isArray([1, 2, 3]);
 * // => true
 *
 * _.isArray(document.body.children);
 * // => false
 *
 * _.isArray('abc');
 * // => false
 *
 * _.isArray(_.noop);
 * // => false
 */
var isArray = Array.isArray;

module.exports = isArray;


/***/ }),

/***/ "Z8oC":
/***/ (function(module, exports, __webpack_require__) {

var assocIndexOf = __webpack_require__("y1pI");

/**
 * Sets the list cache `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf ListCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the list cache instance.
 */
function listCacheSet(key, value) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    ++this.size;
    data.push([key, value]);
  } else {
    data[index][1] = value;
  }
  return this;
}

module.exports = listCacheSet;


/***/ }),

/***/ "ZWtO":
/***/ (function(module, exports, __webpack_require__) {

var castPath = __webpack_require__("4uTw"),
    toKey = __webpack_require__("9Nap");

/**
 * The base implementation of `_.get` without support for default values.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Array|string} path The path of the property to get.
 * @returns {*} Returns the resolved value.
 */
function baseGet(object, path) {
  path = castPath(path, object);

  var index = 0,
      length = path.length;

  while (object != null && index < length) {
    object = object[toKey(path[index++])];
  }
  return (index && index == length) ? object : undefined;
}

module.exports = baseGet;


/***/ }),

/***/ "adU4":
/***/ (function(module, exports, __webpack_require__) {

var assocIndexOf = __webpack_require__("y1pI");

/** Used for built-in method references. */
var arrayProto = Array.prototype;

/** Built-in value references. */
var splice = arrayProto.splice;

/**
 * Removes `key` and its value from the list cache.
 *
 * @private
 * @name delete
 * @memberOf ListCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function listCacheDelete(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    return false;
  }
  var lastIndex = data.length - 1;
  if (index == lastIndex) {
    data.pop();
  } else {
    splice.call(data, index, 1);
  }
  --this.size;
  return true;
}

module.exports = listCacheDelete;


/***/ }),

/***/ "b2z7":
/***/ (function(module, exports) {

/** Used to match `RegExp` flags from their coerced string values. */
var reFlags = /\w*$/;

/**
 * Creates a clone of `regexp`.
 *
 * @private
 * @param {Object} regexp The regexp to clone.
 * @returns {Object} Returns the cloned regexp.
 */
function cloneRegExp(regexp) {
  var result = new regexp.constructor(regexp.source, reFlags.exec(regexp));
  result.lastIndex = regexp.lastIndex;
  return result;
}

module.exports = cloneRegExp;


/***/ }),

/***/ "b48C":
/***/ (function(module, exports) {

function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}

module.exports = _isNativeReflectConstruct;

/***/ }),

/***/ "b80T":
/***/ (function(module, exports, __webpack_require__) {

var baseTimes = __webpack_require__("UNi/"),
    isArguments = __webpack_require__("03A+"),
    isArray = __webpack_require__("Z0cm"),
    isBuffer = __webpack_require__("DSRE"),
    isIndex = __webpack_require__("wJg7"),
    isTypedArray = __webpack_require__("c6wG");

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Creates an array of the enumerable property names of the array-like `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @param {boolean} inherited Specify returning inherited property names.
 * @returns {Array} Returns the array of property names.
 */
function arrayLikeKeys(value, inherited) {
  var isArr = isArray(value),
      isArg = !isArr && isArguments(value),
      isBuff = !isArr && !isArg && isBuffer(value),
      isType = !isArr && !isArg && !isBuff && isTypedArray(value),
      skipIndexes = isArr || isArg || isBuff || isType,
      result = skipIndexes ? baseTimes(value.length, String) : [],
      length = result.length;

  for (var key in value) {
    if ((inherited || hasOwnProperty.call(value, key)) &&
        !(skipIndexes && (
           // Safari 9 has enumerable `arguments.length` in strict mode.
           key == 'length' ||
           // Node.js 0.10 has enumerable non-index properties on buffers.
           (isBuff && (key == 'offset' || key == 'parent')) ||
           // PhantomJS 2 has enumerable non-index properties on typed arrays.
           (isType && (key == 'buffer' || key == 'byteLength' || key == 'byteOffset')) ||
           // Skip index properties.
           isIndex(key, length)
        ))) {
      result.push(key);
    }
  }
  return result;
}

module.exports = arrayLikeKeys;


/***/ }),

/***/ "bd8T":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__("q1tI");
var react_default = /*#__PURE__*/__webpack_require__.n(react);

// EXTERNAL MODULE: ./node_modules/gatsby-link/index.js
var gatsby_link = __webpack_require__("+ZDr");
var gatsby_link_default = /*#__PURE__*/__webpack_require__.n(gatsby_link);

// EXTERNAL MODULE: ./node_modules/react-native-web/dist/exports/StyleSheet/index.js + 1 modules
var StyleSheet = __webpack_require__("ckSu");

// EXTERNAL MODULE: ./node_modules/react-native-web/dist/exports/TouchableOpacity/index.js
var TouchableOpacity = __webpack_require__("4YbZ");

// EXTERNAL MODULE: ./node_modules/react-native-web/dist/exports/Text/index.js
var Text = __webpack_require__("IIls");

// EXTERNAL MODULE: ./node_modules/react-native-web/dist/exports/View/index.js
var View = __webpack_require__("jzUF");

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/extends.js
var helpers_extends = __webpack_require__("pVnL");
var extends_default = /*#__PURE__*/__webpack_require__.n(helpers_extends);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/toConsumableArray.js
var toConsumableArray = __webpack_require__("RIqP");
var toConsumableArray_default = /*#__PURE__*/__webpack_require__.n(toConsumableArray);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/defineProperty.js
var defineProperty = __webpack_require__("lSNA");
var defineProperty_default = /*#__PURE__*/__webpack_require__.n(defineProperty);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/regenerator/index.js
var regenerator = __webpack_require__("o0o1");
var regenerator_default = /*#__PURE__*/__webpack_require__.n(regenerator);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/classCallCheck.js
var classCallCheck = __webpack_require__("lwsE");
var classCallCheck_default = /*#__PURE__*/__webpack_require__.n(classCallCheck);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/createClass.js
var createClass = __webpack_require__("W8MJ");
var createClass_default = /*#__PURE__*/__webpack_require__.n(createClass);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/inherits.js
var inherits = __webpack_require__("7W2i");
var inherits_default = /*#__PURE__*/__webpack_require__.n(inherits);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js
var possibleConstructorReturn = __webpack_require__("a1gu");
var possibleConstructorReturn_default = /*#__PURE__*/__webpack_require__.n(possibleConstructorReturn);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/getPrototypeOf.js
var getPrototypeOf = __webpack_require__("Nsbk");
var getPrototypeOf_default = /*#__PURE__*/__webpack_require__.n(getPrototypeOf);

// EXTERNAL MODULE: ./node_modules/lodash/omit.js
var omit = __webpack_require__("Puqe");
var omit_default = /*#__PURE__*/__webpack_require__.n(omit);

// EXTERNAL MODULE: ./node_modules/nullthrows/nullthrows.js
var nullthrows = __webpack_require__("X0lI");
var nullthrows_default = /*#__PURE__*/__webpack_require__.n(nullthrows);

// EXTERNAL MODULE: ./node_modules/react-native-web/dist/exports/findNodeHandle/index.js
var findNodeHandle = __webpack_require__("t4TM");

// EXTERNAL MODULE: ./node_modules/react-native-web/dist/exports/Image/index.js + 1 modules
var Image = __webpack_require__("uXPr");

// EXTERNAL MODULE: ./node_modules/@unimodules/react-native-adapter/build/Platform.js + 1 modules
var Platform = __webpack_require__("taVN");

// EXTERNAL MODULE: ./node_modules/expo-asset/build/Asset.js + 4 modules
var Asset = __webpack_require__("hb5u");

// EXTERNAL MODULE: ./node_modules/react-native-web/dist/exports/DeviceEventEmitter/index.js
var DeviceEventEmitter = __webpack_require__("HxgP");

// EXTERNAL MODULE: ./node_modules/react-native-web/dist/vendor/react-native/emitter/EventEmitter.js + 2 modules
var EventEmitter = __webpack_require__("u7Mw");

// CONCATENATED MODULE: ./node_modules/@unimodules/react-native-adapter/build/SyntheticPlatformEmitter.js





var SyntheticPlatformEmitter_SyntheticPlatformEmitter = function () {
  function SyntheticPlatformEmitter() {
    classCallCheck_default()(this, SyntheticPlatformEmitter);

    this._emitter = new EventEmitter["a" /* default */](DeviceEventEmitter["a" /* default */].sharedSubscriber);
  }

  createClass_default()(SyntheticPlatformEmitter, [{
    key: "emit",
    value: function emit(eventName, props) {
      this._emitter.emit(eventName, props);
    }
  }]);

  return SyntheticPlatformEmitter;
}();

/* harmony default export */ var build_SyntheticPlatformEmitter = (new SyntheticPlatformEmitter_SyntheticPlatformEmitter());
// CONCATENATED MODULE: ./node_modules/expo-av/build/ExponentAV.web.js



function getStatusFromMedia(media) {
  if (!media) {
    return {
      isLoaded: false,
      error: undefined
    };
  }

  var isPlaying = !!(media.currentTime > 0 && !media.paused && !media.ended && media.readyState > 2);
  var status = {
    isLoaded: true,
    uri: media.src,
    progressUpdateIntervalMillis: 100,
    durationMillis: media.duration * 1000,
    positionMillis: media.currentTime * 1000,
    shouldPlay: media.autoplay,
    isPlaying: isPlaying,
    isBuffering: false,
    rate: media.playbackRate,
    shouldCorrectPitch: false,
    volume: media.volume,
    isMuted: media.muted,
    isLooping: media.loop,
    didJustFinish: media.ended
  };
  return status;
}

function setStatusForMedia(media, status) {
  if (status.positionMillis !== undefined) {
    media.currentTime = status.positionMillis / 1000;
  }

  if (status.shouldPlay !== undefined) {
    if (status.shouldPlay) {
      media.play();
    } else {
      media.pause();
    }
  }

  if (status.rate !== undefined) {
    media.playbackRate = status.rate;
  }

  if (status.volume !== undefined) {
    media.volume = status.volume;
  }

  if (status.isMuted !== undefined) {
    media.muted = status.isMuted;
  }

  if (status.isLooping !== undefined) {
    media.loop = status.isLooping;
  }

  return getStatusFromMedia(media);
}

/* harmony default export */ var ExponentAV_web = ({
  get name() {
    return 'ExponentAV';
  },

  getStatusForVideo: function getStatusForVideo(element) {
    return regenerator_default.a.async(function getStatusForVideo$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            return _context.abrupt("return", getStatusFromMedia(element));

          case 1:
          case "end":
            return _context.stop();
        }
      }
    }, null, null, null, Promise);
  },
  loadForVideo: function loadForVideo(element, nativeSource, fullInitialStatus) {
    return regenerator_default.a.async(function loadForVideo$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            return _context2.abrupt("return", getStatusFromMedia(element));

          case 1:
          case "end":
            return _context2.stop();
        }
      }
    }, null, null, null, Promise);
  },
  unloadForVideo: function unloadForVideo(element) {
    return regenerator_default.a.async(function unloadForVideo$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            return _context3.abrupt("return", getStatusFromMedia(element));

          case 1:
          case "end":
            return _context3.stop();
        }
      }
    }, null, null, null, Promise);
  },
  setStatusForVideo: function setStatusForVideo(element, status) {
    return regenerator_default.a.async(function setStatusForVideo$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            return _context4.abrupt("return", setStatusForMedia(element, status));

          case 1:
          case "end":
            return _context4.stop();
        }
      }
    }, null, null, null, Promise);
  },
  replayVideo: function replayVideo(element, status) {
    return regenerator_default.a.async(function replayVideo$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            return _context5.abrupt("return", setStatusForMedia(element, status));

          case 1:
          case "end":
            return _context5.stop();
        }
      }
    }, null, null, null, Promise);
  },
  setAudioMode: function setAudioMode() {
    return regenerator_default.a.async(function setAudioMode$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
          case "end":
            return _context6.stop();
        }
      }
    }, null, null, null, Promise);
  },
  setAudioIsEnabled: function setAudioIsEnabled() {
    return regenerator_default.a.async(function setAudioIsEnabled$(_context7) {
      while (1) {
        switch (_context7.prev = _context7.next) {
          case 0:
          case "end":
            return _context7.stop();
        }
      }
    }, null, null, null, Promise);
  },
  getStatusForSound: function getStatusForSound(element) {
    return regenerator_default.a.async(function getStatusForSound$(_context8) {
      while (1) {
        switch (_context8.prev = _context8.next) {
          case 0:
            return _context8.abrupt("return", getStatusFromMedia(element));

          case 1:
          case "end":
            return _context8.stop();
        }
      }
    }, null, null, null, Promise);
  },
  loadForSound: function loadForSound(nativeSource, fullInitialStatus) {
    var source, media, status;
    return regenerator_default.a.async(function loadForSound$(_context9) {
      while (1) {
        switch (_context9.prev = _context9.next) {
          case 0:
            source = typeof nativeSource === 'string' ? nativeSource : nativeSource.uri;
            media = new Audio(source);

            media.ontimeupdate = function () {
              build_SyntheticPlatformEmitter.emit('didUpdatePlaybackStatus', {
                key: media,
                status: getStatusFromMedia(media)
              });
            };

            media.onerror = function () {
              build_SyntheticPlatformEmitter.emit('ExponentAV.onError', {
                key: media,
                error: media.error.message
              });
            };

            status = setStatusForMedia(media, fullInitialStatus);
            return _context9.abrupt("return", [media, status]);

          case 6:
          case "end":
            return _context9.stop();
        }
      }
    }, null, null, null, Promise);
  },
  unloadForSound: function unloadForSound(element) {
    return regenerator_default.a.async(function unloadForSound$(_context10) {
      while (1) {
        switch (_context10.prev = _context10.next) {
          case 0:
            element.pause();
            element.removeAttribute('src');
            element.load();
            return _context10.abrupt("return", getStatusFromMedia(element));

          case 4:
          case "end":
            return _context10.stop();
        }
      }
    }, null, null, null, Promise);
  },
  setStatusForSound: function setStatusForSound(element, status) {
    return regenerator_default.a.async(function setStatusForSound$(_context11) {
      while (1) {
        switch (_context11.prev = _context11.next) {
          case 0:
            return _context11.abrupt("return", setStatusForMedia(element, status));

          case 1:
          case "end":
            return _context11.stop();
        }
      }
    }, null, null, null, Promise);
  },
  replaySound: function replaySound(element, status) {
    return regenerator_default.a.async(function replaySound$(_context12) {
      while (1) {
        switch (_context12.prev = _context12.next) {
          case 0:
            return _context12.abrupt("return", setStatusForMedia(element, status));

          case 1:
          case "end":
            return _context12.stop();
        }
      }
    }, null, null, null, Promise);
  },
  getAudioRecordingStatus: function getAudioRecordingStatus() {
    return regenerator_default.a.async(function getAudioRecordingStatus$(_context13) {
      while (1) {
        switch (_context13.prev = _context13.next) {
          case 0:
          case "end":
            return _context13.stop();
        }
      }
    }, null, null, null, Promise);
  },
  prepareAudioRecorder: function prepareAudioRecorder() {
    return regenerator_default.a.async(function prepareAudioRecorder$(_context14) {
      while (1) {
        switch (_context14.prev = _context14.next) {
          case 0:
          case "end":
            return _context14.stop();
        }
      }
    }, null, null, null, Promise);
  },
  startAudioRecording: function startAudioRecording() {
    return regenerator_default.a.async(function startAudioRecording$(_context15) {
      while (1) {
        switch (_context15.prev = _context15.next) {
          case 0:
          case "end":
            return _context15.stop();
        }
      }
    }, null, null, null, Promise);
  },
  pauseAudioRecording: function pauseAudioRecording() {
    return regenerator_default.a.async(function pauseAudioRecording$(_context16) {
      while (1) {
        switch (_context16.prev = _context16.next) {
          case 0:
          case "end":
            return _context16.stop();
        }
      }
    }, null, null, null, Promise);
  },
  stopAudioRecording: function stopAudioRecording() {
    return regenerator_default.a.async(function stopAudioRecording$(_context17) {
      while (1) {
        switch (_context17.prev = _context17.next) {
          case 0:
          case "end":
            return _context17.stop();
        }
      }
    }, null, null, null, Promise);
  },
  unloadAudioRecorder: function unloadAudioRecorder() {
    return regenerator_default.a.async(function unloadAudioRecorder$(_context18) {
      while (1) {
        switch (_context18.prev = _context18.next) {
          case 0:
          case "end":
            return _context18.stop();
        }
      }
    }, null, null, null, Promise);
  }
});
// CONCATENATED MODULE: ./node_modules/expo-av/build/AV.js



function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        defineProperty_default()(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}




var AV_PitchCorrectionQuality;

(function (PitchCorrectionQuality) {
  PitchCorrectionQuality[PitchCorrectionQuality["Low"] = ExponentAV_web && ExponentAV_web.Qualities && ExponentAV_web.Qualities.Low] = "Low";
  PitchCorrectionQuality[PitchCorrectionQuality["Medium"] = ExponentAV_web && ExponentAV_web.Qualities && ExponentAV_web.Qualities.Medium] = "Medium";
  PitchCorrectionQuality[PitchCorrectionQuality["High"] = ExponentAV_web && ExponentAV_web.Qualities && ExponentAV_web.Qualities.High] = "High";
})(AV_PitchCorrectionQuality || (AV_PitchCorrectionQuality = {}));

var _DEFAULT_PROGRESS_UPDATE_INTERVAL_MILLIS = 500;
var _DEFAULT_INITIAL_PLAYBACK_STATUS = {
  positionMillis: 0,
  progressUpdateIntervalMillis: _DEFAULT_PROGRESS_UPDATE_INTERVAL_MILLIS,
  shouldPlay: false,
  rate: 1.0,
  shouldCorrectPitch: false,
  volume: 1.0,
  isMuted: false,
  isLooping: false
};
function getNativeSourceFromSource(source) {
  var uri = null;
  var overridingExtension = null;
  var headers;

  if (typeof source === 'string' && Platform["a" /* default */].OS === 'web') {
    return {
      uri: source,
      overridingExtension: overridingExtension,
      headers: headers
    };
  }

  var asset = _getAssetFromPlaybackSource(source);

  if (asset != null) {
    uri = asset.localUri || asset.uri;
  } else if (source != null && typeof source !== 'number' && 'uri' in source && typeof source.uri === 'string') {
    uri = source.uri;
  }

  if (uri == null) {
    return null;
  }

  if (source != null && typeof source !== 'number' && 'overrideFileExtensionAndroid' in source && typeof source.overrideFileExtensionAndroid === 'string') {
    overridingExtension = source.overrideFileExtensionAndroid;
  }

  if (source != null && typeof source !== 'number' && 'headers' in source && typeof source.headers === 'object') {
    headers = source.headers;
  }

  return {
    uri: uri,
    overridingExtension: overridingExtension,
    headers: headers
  };
}

function _getAssetFromPlaybackSource(source) {
  if (source == null) {
    return null;
  }

  var asset = null;

  if (typeof source === 'number') {
    asset = Asset["a" /* Asset */].fromModule(source);
  } else if (source instanceof Asset["a" /* Asset */]) {
    asset = source;
  }

  return asset;
}

function assertStatusValuesInBounds(status) {
  if (typeof status.rate === 'number' && (status.rate < 0 || status.rate > 32)) {
    throw new RangeError('Rate value must be between 0.0 and 32.0');
  }

  if (typeof status.volume === 'number' && (status.volume < 0 || status.volume > 1)) {
    throw new RangeError('Volume value must be between 0.0 and 1.0');
  }
}
function getNativeSourceAndFullInitialStatusForLoadAsync(source, initialStatus, downloadFirst) {
  var fullInitialStatus, asset, nativeSource;
  return regenerator_default.a.async(function getNativeSourceAndFullInitialStatusForLoadAsync$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          fullInitialStatus = initialStatus == null ? _DEFAULT_INITIAL_PLAYBACK_STATUS : _objectSpread(_objectSpread({}, _DEFAULT_INITIAL_PLAYBACK_STATUS), initialStatus);
          assertStatusValuesInBounds(fullInitialStatus);

          if (!(typeof source === 'string' && Platform["a" /* default */].OS === 'web')) {
            _context.next = 4;
            break;
          }

          return _context.abrupt("return", {
            nativeSource: {
              uri: source,
              overridingExtension: null
            },
            fullInitialStatus: fullInitialStatus
          });

        case 4:
          asset = _getAssetFromPlaybackSource(source);

          if (!(downloadFirst && asset)) {
            _context.next = 8;
            break;
          }

          _context.next = 8;
          return regenerator_default.a.awrap(asset.downloadAsync());

        case 8:
          nativeSource = getNativeSourceFromSource(source);

          if (!(nativeSource === null)) {
            _context.next = 11;
            break;
          }

          throw new Error("Cannot load an AV asset from a null playback source");

        case 11:
          return _context.abrupt("return", {
            nativeSource: nativeSource,
            fullInitialStatus: fullInitialStatus
          });

        case 12:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, null, Promise);
}
function getUnloadedStatus() {
  var error = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
  return _objectSpread({
    isLoaded: false
  }, error ? {
    error: error
  } : null);
}
var PlaybackMixin = {
  playAsync: function playAsync() {
    return regenerator_default.a.async(function playAsync$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            return _context2.abrupt("return", this.setStatusAsync({
              shouldPlay: true
            }));

          case 1:
          case "end":
            return _context2.stop();
        }
      }
    }, null, this, null, Promise);
  },
  playFromPositionAsync: function playFromPositionAsync(positionMillis) {
    var tolerances,
        _args3 = arguments;
    return regenerator_default.a.async(function playFromPositionAsync$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            tolerances = _args3.length > 1 && _args3[1] !== undefined ? _args3[1] : {};
            return _context3.abrupt("return", this.setStatusAsync({
              positionMillis: positionMillis,
              shouldPlay: true,
              seekMillisToleranceAfter: tolerances.toleranceMillisAfter,
              seekMillisToleranceBefore: tolerances.toleranceMillisBefore
            }));

          case 2:
          case "end":
            return _context3.stop();
        }
      }
    }, null, this, null, Promise);
  },
  pauseAsync: function pauseAsync() {
    return regenerator_default.a.async(function pauseAsync$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            return _context4.abrupt("return", this.setStatusAsync({
              shouldPlay: false
            }));

          case 1:
          case "end":
            return _context4.stop();
        }
      }
    }, null, this, null, Promise);
  },
  stopAsync: function stopAsync() {
    return regenerator_default.a.async(function stopAsync$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            return _context5.abrupt("return", this.setStatusAsync({
              positionMillis: 0,
              shouldPlay: false
            }));

          case 1:
          case "end":
            return _context5.stop();
        }
      }
    }, null, this, null, Promise);
  },
  setPositionAsync: function setPositionAsync(positionMillis) {
    var tolerances,
        _args6 = arguments;
    return regenerator_default.a.async(function setPositionAsync$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            tolerances = _args6.length > 1 && _args6[1] !== undefined ? _args6[1] : {};
            return _context6.abrupt("return", this.setStatusAsync({
              positionMillis: positionMillis,
              seekMillisToleranceAfter: tolerances.toleranceMillisAfter,
              seekMillisToleranceBefore: tolerances.toleranceMillisBefore
            }));

          case 2:
          case "end":
            return _context6.stop();
        }
      }
    }, null, this, null, Promise);
  },
  setRateAsync: function setRateAsync(rate) {
    var shouldCorrectPitch,
        pitchCorrectionQuality,
        _args7 = arguments;
    return regenerator_default.a.async(function setRateAsync$(_context7) {
      while (1) {
        switch (_context7.prev = _context7.next) {
          case 0:
            shouldCorrectPitch = _args7.length > 1 && _args7[1] !== undefined ? _args7[1] : false;
            pitchCorrectionQuality = _args7.length > 2 && _args7[2] !== undefined ? _args7[2] : AV_PitchCorrectionQuality.Low;
            return _context7.abrupt("return", this.setStatusAsync({
              rate: rate,
              shouldCorrectPitch: shouldCorrectPitch,
              pitchCorrectionQuality: pitchCorrectionQuality
            }));

          case 3:
          case "end":
            return _context7.stop();
        }
      }
    }, null, this, null, Promise);
  },
  setVolumeAsync: function setVolumeAsync(volume) {
    return regenerator_default.a.async(function setVolumeAsync$(_context8) {
      while (1) {
        switch (_context8.prev = _context8.next) {
          case 0:
            return _context8.abrupt("return", this.setStatusAsync({
              volume: volume
            }));

          case 1:
          case "end":
            return _context8.stop();
        }
      }
    }, null, this, null, Promise);
  },
  setIsMutedAsync: function setIsMutedAsync(isMuted) {
    return regenerator_default.a.async(function setIsMutedAsync$(_context9) {
      while (1) {
        switch (_context9.prev = _context9.next) {
          case 0:
            return _context9.abrupt("return", this.setStatusAsync({
              isMuted: isMuted
            }));

          case 1:
          case "end":
            return _context9.stop();
        }
      }
    }, null, this, null, Promise);
  },
  setIsLoopingAsync: function setIsLoopingAsync(isLooping) {
    return regenerator_default.a.async(function setIsLoopingAsync$(_context10) {
      while (1) {
        switch (_context10.prev = _context10.next) {
          case 0:
            return _context10.abrupt("return", this.setStatusAsync({
              isLooping: isLooping
            }));

          case 1:
          case "end":
            return _context10.stop();
        }
      }
    }, null, this, null, Promise);
  },
  setProgressUpdateIntervalAsync: function setProgressUpdateIntervalAsync(progressUpdateIntervalMillis) {
    return regenerator_default.a.async(function setProgressUpdateIntervalAsync$(_context11) {
      while (1) {
        switch (_context11.prev = _context11.next) {
          case 0:
            return _context11.abrupt("return", this.setStatusAsync({
              progressUpdateIntervalMillis: progressUpdateIntervalMillis
            }));

          case 1:
          case "end":
            return _context11.stop();
        }
      }
    }, null, this, null, Promise);
  }
};
// CONCATENATED MODULE: ./node_modules/expo-av/build/ExpoVideoManager.web.js


/* harmony default export */ var ExpoVideoManager_web = ({
  get name() {
    return 'ExpoVideoManager';
  },

  get ScaleNone() {
    return 'none';
  },

  get ScaleToFill() {
    return 'fill';
  },

  get ScaleAspectFit() {
    return 'contain';
  },

  get ScaleAspectFill() {
    return 'cover';
  },

  setFullscreen: function setFullscreen(element, isFullScreenEnabled) {
    return regenerator_default.a.async(function setFullscreen$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            if (!isFullScreenEnabled) {
              _context.next = 5;
              break;
            }

            _context.next = 3;
            return regenerator_default.a.awrap(element.requestFullscreen());

          case 3:
            _context.next = 7;
            break;

          case 5:
            _context.next = 7;
            return regenerator_default.a.awrap(document.exitFullscreen());

          case 7:
            return _context.abrupt("return", ExponentAV_web.getStatusForVideo(element));

          case 8:
          case "end":
            return _context.stop();
        }
      }
    }, null, null, null, Promise);
  }
});
// EXTERNAL MODULE: ./node_modules/react-native-web/dist/exports/createElement/index.js
var createElement = __webpack_require__("osi3");

// CONCATENATED MODULE: ./node_modules/expo-av/build/ExponentVideo.web.js








function _createSuper(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct();

  return function _createSuperInternal() {
    var Super = getPrototypeOf_default()(Derived),
        result;

    if (hasNativeReflectConstruct) {
      var NewTarget = getPrototypeOf_default()(this).constructor;

      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }

    return possibleConstructorReturn_default()(this, result);
  };
}

function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}

function ExponentVideo_web_ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function ExponentVideo_web_objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ExponentVideo_web_ownKeys(Object(source), true).forEach(function (key) {
        defineProperty_default()(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ExponentVideo_web_ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}




var FULLSCREEN_UPDATE_PLAYER_WILL_PRESENT = 0;
var FULLSCREEN_UPDATE_PLAYER_DID_PRESENT = 1;
var FULLSCREEN_UPDATE_PLAYER_WILL_DISMISS = 2;
var FULLSCREEN_UPDATE_PLAYER_DID_DISMISS = 3;
var IOS_FULLSCREEN_UPDATE_PLAYER_WILL_PRESENT = FULLSCREEN_UPDATE_PLAYER_WILL_PRESENT;
var IOS_FULLSCREEN_UPDATE_PLAYER_DID_PRESENT = FULLSCREEN_UPDATE_PLAYER_DID_PRESENT;
var IOS_FULLSCREEN_UPDATE_PLAYER_WILL_DISMISS = FULLSCREEN_UPDATE_PLAYER_WILL_DISMISS;
var IOS_FULLSCREEN_UPDATE_PLAYER_DID_DISMISS = FULLSCREEN_UPDATE_PLAYER_DID_DISMISS;
var ExponentVideo_web_Video = react["forwardRef"](function (props, ref) {
  return Object(createElement["a" /* default */])('video', ExponentVideo_web_objectSpread(ExponentVideo_web_objectSpread({}, props), {}, {
    ref: ref
  }));
});

var ExponentVideo_web_ExponentVideo = function (_React$Component) {
  inherits_default()(ExponentVideo, _React$Component);

  var _super = _createSuper(ExponentVideo);

  function ExponentVideo() {
    var _this;

    classCallCheck_default()(this, ExponentVideo);

    _this = _super.apply(this, arguments);

    _this.onFullscreenChange = function (event) {
      if (!_this.props.onFullscreenUpdate) return;

      if (event.target === _this._video) {
        if (document.fullscreenElement) {
          _this.props.onFullscreenUpdate({
            nativeEvent: {
              fullscreenUpdate: FULLSCREEN_UPDATE_PLAYER_DID_PRESENT
            }
          });
        } else {
          _this.props.onFullscreenUpdate({
            nativeEvent: {
              fullscreenUpdate: FULLSCREEN_UPDATE_PLAYER_DID_DISMISS
            }
          });
        }
      }
    };

    _this.onStatusUpdate = function _callee() {
      var nativeEvent;
      return regenerator_default.a.async(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              if (_this.props.onStatusUpdate) {
                _context.next = 2;
                break;
              }

              return _context.abrupt("return");

            case 2:
              _context.next = 4;
              return regenerator_default.a.awrap(ExponentAV_web.getStatusForVideo(_this._video));

            case 4:
              nativeEvent = _context.sent;

              _this.props.onStatusUpdate({
                nativeEvent: nativeEvent
              });

            case 6:
            case "end":
              return _context.stop();
          }
        }
      }, null, null, null, Promise);
    };

    _this.onLoadStart = function () {
      if (!_this.props.onLoadStart) {
        return;
      }

      _this.props.onLoadStart();

      _this.onStatusUpdate();
    };

    _this.onLoadedData = function (event) {
      if (!_this.props.onLoad) {
        return;
      }

      _this.props.onLoad(event);

      _this.onStatusUpdate();
    };

    _this.onError = function (event) {
      if (!_this.props.onError) {
        return;
      }

      _this.props.onError(event);

      _this.onStatusUpdate();
    };

    _this.onProgress = function () {
      _this.onStatusUpdate();
    };

    _this.onSeeking = function () {
      _this.onStatusUpdate();
    };

    _this.onEnded = function () {
      _this.onStatusUpdate();
    };

    _this.onLoadedMetadata = function () {
      _this.onStatusUpdate();
    };

    _this.onCanPlay = function (event) {
      if (!_this.props.onReadyForDisplay) {
        return;
      }

      _this.props.onReadyForDisplay(event);

      _this.onStatusUpdate();
    };

    _this.onStalled = function () {
      _this.onStatusUpdate();
    };

    _this.onRef = function (ref) {
      _this._video = ref;

      _this.onStatusUpdate();
    };

    return _this;
  }

  createClass_default()(ExponentVideo, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var isIE11 = !!window['MSStream'];
      document.addEventListener(isIE11 ? 'MSFullscreenChange' : 'fullscreenchange', this.onFullscreenChange);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      var isIE11 = !!window['MSStream'];
      document.addEventListener(isIE11 ? 'MSFullscreenChange' : 'fullscreenchange', this.onFullscreenChange);
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          source = _this$props.source,
          _this$props$status = _this$props.status,
          status = _this$props$status === void 0 ? {} : _this$props$status,
          objectFit = _this$props.resizeMode,
          useNativeControls = _this$props.useNativeControls,
          style = _this$props.style;
      var customStyle = {
        position: undefined,
        objectFit: objectFit,
        overflow: 'hidden'
      };
      return react["createElement"](ExponentVideo_web_Video, {
        ref: this.onRef,
        onLoadStart: this.onLoadStart,
        onLoadedData: this.onLoadedData,
        onError: this.onError,
        onTimeUpdate: this.onProgress,
        onSeeking: this.onSeeking,
        onEnded: this.onEnded,
        onLoadedMetadata: this.onLoadedMetadata,
        onCanPlay: this.onCanPlay,
        onStalled: this.onStalled,
        src: (source || {
          uri: undefined
        }).uri,
        muted: status.isMuted,
        loop: status.isLooping,
        autoPlay: status.shouldPlay,
        controls: useNativeControls,
        style: [style, customStyle]
      });
    }
  }]);

  return ExponentVideo;
}(react["Component"]);


// CONCATENATED MODULE: ./node_modules/expo-av/build/Video.types.js
var ResizeMode;

(function (ResizeMode) {
  ResizeMode["CONTAIN"] = "contain";
  ResizeMode["COVER"] = "cover";
  ResizeMode["STRETCH"] = "stretch";
})(ResizeMode || (ResizeMode = {}));
// CONCATENATED MODULE: ./node_modules/expo-av/build/Video.js










function Video_ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function Video_objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      Video_ownKeys(Object(source), true).forEach(function (key) {
        defineProperty_default()(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      Video_ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

function Video_createSuper(Derived) {
  var hasNativeReflectConstruct = Video_isNativeReflectConstruct();

  return function _createSuperInternal() {
    var Super = getPrototypeOf_default()(Derived),
        result;

    if (hasNativeReflectConstruct) {
      var NewTarget = getPrototypeOf_default()(this).constructor;

      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }

    return possibleConstructorReturn_default()(this, result);
  };
}

function Video_isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}














var Video_FULLSCREEN_UPDATE_PLAYER_WILL_PRESENT = 0;
var Video_FULLSCREEN_UPDATE_PLAYER_DID_PRESENT = 1;
var Video_FULLSCREEN_UPDATE_PLAYER_WILL_DISMISS = 2;
var Video_FULLSCREEN_UPDATE_PLAYER_DID_DISMISS = 3;
var Video_IOS_FULLSCREEN_UPDATE_PLAYER_WILL_PRESENT = Video_FULLSCREEN_UPDATE_PLAYER_WILL_PRESENT;
var Video_IOS_FULLSCREEN_UPDATE_PLAYER_DID_PRESENT = Video_FULLSCREEN_UPDATE_PLAYER_DID_PRESENT;
var Video_IOS_FULLSCREEN_UPDATE_PLAYER_WILL_DISMISS = Video_FULLSCREEN_UPDATE_PLAYER_WILL_DISMISS;
var Video_IOS_FULLSCREEN_UPDATE_PLAYER_DID_DISMISS = Video_FULLSCREEN_UPDATE_PLAYER_DID_DISMISS;

var _STYLES = StyleSheet["a" /* default */].create({
  base: {
    overflow: 'hidden'
  },
  poster: {
    position: 'absolute',
    left: 0,
    top: 0,
    right: 0,
    bottom: 0,
    resizeMode: 'contain'
  },
  video: {
    position: 'absolute',
    left: 0,
    top: 0,
    right: 0,
    bottom: 0
  }
});

var ExpoVideoManagerConstants = ExpoVideoManager_web;
var ExpoVideoViewManager = ExpoVideoManager_web;

var Video_Video = function (_React$Component) {
  inherits_default()(Video, _React$Component);

  var _super = Video_createSuper(Video);

  function Video(props) {
    var _this;

    classCallCheck_default()(this, Video);

    _this = _super.call(this, props);
    _this._nativeRef = react["createRef"]();
    _this._onPlaybackStatusUpdate = null;

    _this._handleNewStatus = function (status) {
      if (_this.state.showPoster && status.isLoaded && (status.isPlaying || status.positionMillis !== 0)) {
        _this.setState({
          showPoster: false
        });
      }

      if (_this.props.onPlaybackStatusUpdate) {
        _this.props.onPlaybackStatusUpdate(status);
      }

      if (_this._onPlaybackStatusUpdate) {
        _this._onPlaybackStatusUpdate(status);
      }
    };

    _this._performOperationAndHandleStatusAsync = function _callee(operation) {
      var video, handle, status;
      return regenerator_default.a.async(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              video = _this._nativeRef.current;

              if (video) {
                _context.next = 3;
                break;
              }

              throw new Error("Cannot complete operation because the Video component has not yet loaded");

            case 3:
              handle = Object(findNodeHandle["a" /* default */])(_this._nativeRef.current);
              _context.next = 6;
              return regenerator_default.a.awrap(operation(handle));

            case 6:
              status = _context.sent;

              _this._handleNewStatus(status);

              return _context.abrupt("return", status);

            case 9:
            case "end":
              return _context.stop();
          }
        }
      }, null, null, null, Promise);
    };

    _this._setFullscreen = function _callee2(value) {
      return regenerator_default.a.async(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              return _context2.abrupt("return", _this._performOperationAndHandleStatusAsync(function (tag) {
                return ExpoVideoViewManager.setFullscreen(tag, value);
              }));

            case 1:
            case "end":
              return _context2.stop();
          }
        }
      }, null, null, null, Promise);
    };

    _this.presentFullscreenPlayer = function _callee3() {
      return regenerator_default.a.async(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              return _context3.abrupt("return", _this._setFullscreen(true));

            case 1:
            case "end":
              return _context3.stop();
          }
        }
      }, null, null, null, Promise);
    };

    _this.presentIOSFullscreenPlayer = function () {
      console.warn("You're using `presentIOSFullscreenPlayer`. Please migrate your code to use `presentFullscreenPlayer` instead.");
      return _this.presentFullscreenPlayer();
    };

    _this.presentFullscreenPlayerAsync = function _callee4() {
      return regenerator_default.a.async(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              _context4.next = 2;
              return regenerator_default.a.awrap(_this.presentFullscreenPlayer());

            case 2:
              return _context4.abrupt("return", _context4.sent);

            case 3:
            case "end":
              return _context4.stop();
          }
        }
      }, null, null, null, Promise);
    };

    _this.dismissFullscreenPlayer = function _callee5() {
      return regenerator_default.a.async(function _callee5$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              return _context5.abrupt("return", _this._setFullscreen(false));

            case 1:
            case "end":
              return _context5.stop();
          }
        }
      }, null, null, null, Promise);
    };

    _this.dismissIOSFullscreenPlayer = function () {
      console.warn("You're using `dismissIOSFullscreenPlayer`. Please migrate your code to use `dismissFullscreenPlayer` instead.");

      _this.dismissFullscreenPlayer();
    };

    _this.getStatusAsync = function _callee6() {
      return regenerator_default.a.async(function _callee6$(_context6) {
        while (1) {
          switch (_context6.prev = _context6.next) {
            case 0:
              return _context6.abrupt("return", _this._performOperationAndHandleStatusAsync(function (tag) {
                return ExponentAV_web.getStatusForVideo(tag);
              }));

            case 1:
            case "end":
              return _context6.stop();
          }
        }
      }, null, null, null, Promise);
    };

    _this.loadAsync = function _callee7(source) {
      var initialStatus,
          downloadFirst,
          _await$getNativeSourc,
          nativeSource,
          fullInitialStatus,
          _args7 = arguments;

      return regenerator_default.a.async(function _callee7$(_context7) {
        while (1) {
          switch (_context7.prev = _context7.next) {
            case 0:
              initialStatus = _args7.length > 1 && _args7[1] !== undefined ? _args7[1] : {};
              downloadFirst = _args7.length > 2 && _args7[2] !== undefined ? _args7[2] : true;
              _context7.next = 4;
              return regenerator_default.a.awrap(getNativeSourceAndFullInitialStatusForLoadAsync(source, initialStatus, downloadFirst));

            case 4:
              _await$getNativeSourc = _context7.sent;
              nativeSource = _await$getNativeSourc.nativeSource;
              fullInitialStatus = _await$getNativeSourc.fullInitialStatus;
              return _context7.abrupt("return", _this._performOperationAndHandleStatusAsync(function (tag) {
                return ExponentAV_web.loadForVideo(tag, nativeSource, fullInitialStatus);
              }));

            case 8:
            case "end":
              return _context7.stop();
          }
        }
      }, null, null, null, Promise);
    };

    _this.unloadAsync = function _callee8() {
      return regenerator_default.a.async(function _callee8$(_context8) {
        while (1) {
          switch (_context8.prev = _context8.next) {
            case 0:
              return _context8.abrupt("return", _this._performOperationAndHandleStatusAsync(function (tag) {
                return ExponentAV_web.unloadForVideo(tag);
              }));

            case 1:
            case "end":
              return _context8.stop();
          }
        }
      }, null, null, null, Promise);
    };

    _this.setStatusAsync = function _callee9(status) {
      return regenerator_default.a.async(function _callee9$(_context9) {
        while (1) {
          switch (_context9.prev = _context9.next) {
            case 0:
              assertStatusValuesInBounds(status);
              return _context9.abrupt("return", _this._performOperationAndHandleStatusAsync(function (tag) {
                return ExponentAV_web.setStatusForVideo(tag, status);
              }));

            case 2:
            case "end":
              return _context9.stop();
          }
        }
      }, null, null, null, Promise);
    };

    _this.replayAsync = function _callee10() {
      var status,
          _args10 = arguments;
      return regenerator_default.a.async(function _callee10$(_context10) {
        while (1) {
          switch (_context10.prev = _context10.next) {
            case 0:
              status = _args10.length > 0 && _args10[0] !== undefined ? _args10[0] : {};

              if (!(status.positionMillis && status.positionMillis !== 0)) {
                _context10.next = 3;
                break;
              }

              throw new Error('Requested position after replay has to be 0.');

            case 3:
              return _context10.abrupt("return", _this._performOperationAndHandleStatusAsync(function (tag) {
                return ExponentAV_web.replayVideo(tag, Video_objectSpread(Video_objectSpread({}, status), {}, {
                  positionMillis: 0,
                  shouldPlay: true
                }));
              }));

            case 4:
            case "end":
              return _context10.stop();
          }
        }
      }, null, null, null, Promise);
    };

    _this._nativeOnPlaybackStatusUpdate = function (event) {
      _this._handleNewStatus(event.nativeEvent);
    };

    _this._nativeOnLoadStart = function () {
      if (_this.props.onLoadStart) {
        _this.props.onLoadStart();
      }
    };

    _this._nativeOnLoad = function (event) {
      if (_this.props.onLoad) {
        _this.props.onLoad(event.nativeEvent);
      }

      _this._handleNewStatus(event.nativeEvent);
    };

    _this._nativeOnError = function (event) {
      var error = event.nativeEvent.error;

      if (_this.props.onError) {
        _this.props.onError(error);
      }

      _this._handleNewStatus(getUnloadedStatus(error));
    };

    _this._nativeOnReadyForDisplay = function (event) {
      if (_this.props.onReadyForDisplay) {
        _this.props.onReadyForDisplay(event.nativeEvent);
      }
    };

    _this._nativeOnFullscreenUpdate = function (event) {
      if (_this.props.onIOSFullscreenUpdate && _this.props.onFullscreenUpdate) {
        console.warn("You've supplied both `onIOSFullscreenUpdate` and `onFullscreenUpdate`. You're going to receive updates on both the callbacks.");
      } else if (_this.props.onIOSFullscreenUpdate) {
        console.warn("You're using `onIOSFullscreenUpdate`. Please migrate your code to use `onFullscreenUpdate` instead.");
      }

      if (_this.props.onIOSFullscreenUpdate) {
        _this.props.onIOSFullscreenUpdate(event.nativeEvent);
      }

      if (_this.props.onFullscreenUpdate) {
        _this.props.onFullscreenUpdate(event.nativeEvent);
      }
    };

    _this._renderPoster = function () {
      return _this.props.usePoster && _this.state.showPoster ? react["createElement"](Image["a" /* default */], {
        style: [_STYLES.poster, _this.props.posterStyle],
        source: _this.props.posterSource
      }) : null;
    };

    _this.state = {
      showPoster: !!props.usePoster
    };
    return _this;
  }

  createClass_default()(Video, [{
    key: "setNativeProps",
    value: function setNativeProps(nativeProps) {
      var nativeVideo = nullthrows_default()(this._nativeRef.current);
      nativeVideo.setNativeProps(nativeProps);
    }
  }, {
    key: "setOnPlaybackStatusUpdate",
    value: function setOnPlaybackStatusUpdate(onPlaybackStatusUpdate) {
      this._onPlaybackStatusUpdate = onPlaybackStatusUpdate;
      this.getStatusAsync();
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var source = getNativeSourceFromSource(this.props.source) || undefined;
      var nativeResizeMode = ExpoVideoManagerConstants.ScaleNone;

      if (this.props.resizeMode) {
        var resizeMode = this.props.resizeMode;

        if (resizeMode === ResizeMode.STRETCH) {
          nativeResizeMode = ExpoVideoManagerConstants.ScaleToFill;
        } else if (resizeMode === ResizeMode.CONTAIN) {
          nativeResizeMode = ExpoVideoManagerConstants.ScaleAspectFit;
        } else if (resizeMode === ResizeMode.COVER) {
          nativeResizeMode = ExpoVideoManagerConstants.ScaleAspectFill;
        }
      }

      var status = Video_objectSpread({}, this.props.status);

      ['progressUpdateIntervalMillis', 'positionMillis', 'shouldPlay', 'rate', 'shouldCorrectPitch', 'volume', 'isMuted', 'isLooping'].forEach(function (prop) {
        if (prop in _this2.props) {
          status[prop] = _this2.props[prop];
        }
      });

      var nativeProps = Video_objectSpread(Video_objectSpread({}, omit_default.a.apply(void 0, [this.props, 'source', 'onPlaybackStatusUpdate', 'usePoster', 'posterSource', 'posterStyle'].concat(toConsumableArray_default()(Object.keys(status))))), {}, {
        style: StyleSheet["a" /* default */].flatten([_STYLES.base, this.props.style]),
        source: source,
        resizeMode: nativeResizeMode,
        status: status,
        onStatusUpdate: this._nativeOnPlaybackStatusUpdate,
        onLoadStart: this._nativeOnLoadStart,
        onLoad: this._nativeOnLoad,
        onError: this._nativeOnError,
        onReadyForDisplay: this._nativeOnReadyForDisplay,
        onFullscreenUpdate: this._nativeOnFullscreenUpdate
      });

      return react["createElement"](View["a" /* default */], {
        style: nativeProps.style,
        pointerEvents: "box-none"
      }, react["createElement"](ExponentVideo_web_ExponentVideo, extends_default()({
        ref: this._nativeRef
      }, nativeProps, {
        style: _STYLES.video
      })), this._renderPoster());
    }
  }]);

  return Video;
}(react["Component"]);


Video_Video.RESIZE_MODE_CONTAIN = ResizeMode.CONTAIN;
Video_Video.RESIZE_MODE_COVER = ResizeMode.COVER;
Video_Video.RESIZE_MODE_STRETCH = ResizeMode.STRETCH;
Video_Video.IOS_FULLSCREEN_UPDATE_PLAYER_WILL_PRESENT = Video_IOS_FULLSCREEN_UPDATE_PLAYER_WILL_PRESENT;
Video_Video.IOS_FULLSCREEN_UPDATE_PLAYER_DID_PRESENT = Video_IOS_FULLSCREEN_UPDATE_PLAYER_DID_PRESENT;
Video_Video.IOS_FULLSCREEN_UPDATE_PLAYER_WILL_DISMISS = Video_IOS_FULLSCREEN_UPDATE_PLAYER_WILL_DISMISS;
Video_Video.IOS_FULLSCREEN_UPDATE_PLAYER_DID_DISMISS = Video_IOS_FULLSCREEN_UPDATE_PLAYER_DID_DISMISS;
Video_Video.FULLSCREEN_UPDATE_PLAYER_WILL_PRESENT = Video_FULLSCREEN_UPDATE_PLAYER_WILL_PRESENT;
Video_Video.FULLSCREEN_UPDATE_PLAYER_DID_PRESENT = Video_FULLSCREEN_UPDATE_PLAYER_DID_PRESENT;
Video_Video.FULLSCREEN_UPDATE_PLAYER_WILL_DISMISS = Video_FULLSCREEN_UPDATE_PLAYER_WILL_DISMISS;
Video_Video.FULLSCREEN_UPDATE_PLAYER_DID_DISMISS = Video_FULLSCREEN_UPDATE_PLAYER_DID_DISMISS;

extends_default()(Video_Video.prototype, PlaybackMixin);
// CONCATENATED MODULE: ./src/pages/react-native-web.js
var styles=StyleSheet["a" /* default */].create({box:{padding:10,margin:10,borderWidth:1,borderColor:'black'},text:{fontWeight:'bold',color:'red'},button:{marginVertical:40,paddingVertical:20,paddingHorizontal:10,borderWidth:1,borderColor:'black',backgroundColor:'lightgrey',alignItems:'center'},buttonText:{fontWeight:'bold',color:'black'}});var react_native_web_RNWPage=function RNWPage(){return react_default.a.createElement(View["a" /* default */],{style:styles.box},react_default.a.createElement(Text["a" /* default */],{style:styles.text},"Hi this is React-Native-Web rendered by Gatsby"),react_default.a.createElement(TouchableOpacity["a" /* default */],{style:styles.button,onPress:function onPress(){return alert('it works');}},react_default.a.createElement(Text["a" /* default */],{style:styles.buttonText},"Button")),react_default.a.createElement(gatsby_link_default.a,{to:"/"},"Go to home"),react_default.a.createElement(Video_Video,{source:{uri:'https://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4'},rate:1.0,isMuted:true,resizeMode:"cover",shouldPlay:true,isLooping:true,style:{width:500,marginTop:30}}));};/* harmony default export */ var react_native_web = __webpack_exports__["default"] = (react_native_web_RNWPage);

/***/ }),

/***/ "c/8Z":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* binding */ AssetSourceResolver_web_AssetSourceResolver; });

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/classCallCheck.js
var classCallCheck = __webpack_require__("lwsE");
var classCallCheck_default = /*#__PURE__*/__webpack_require__.n(classCallCheck);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/createClass.js
var createClass = __webpack_require__("W8MJ");
var createClass_default = /*#__PURE__*/__webpack_require__.n(createClass);

// EXTERNAL MODULE: ./node_modules/@unimodules/react-native-adapter/build/Platform.js + 1 modules
var Platform = __webpack_require__("taVN");

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/inherits.js
var inherits = __webpack_require__("7W2i");
var inherits_default = /*#__PURE__*/__webpack_require__.n(inherits);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js
var possibleConstructorReturn = __webpack_require__("a1gu");
var possibleConstructorReturn_default = /*#__PURE__*/__webpack_require__.n(possibleConstructorReturn);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/getPrototypeOf.js
var getPrototypeOf = __webpack_require__("Nsbk");
var getPrototypeOf_default = /*#__PURE__*/__webpack_require__.n(getPrototypeOf);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/wrapNativeSuper.js
var wrapNativeSuper = __webpack_require__("oShl");
var wrapNativeSuper_default = /*#__PURE__*/__webpack_require__.n(wrapNativeSuper);

// CONCATENATED MODULE: ./node_modules/@unimodules/react-native-adapter/build/errors/CodedError.js






function _createSuper(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct();

  return function _createSuperInternal() {
    var Super = getPrototypeOf_default()(Derived),
        result;

    if (hasNativeReflectConstruct) {
      var NewTarget = getPrototypeOf_default()(this).constructor;

      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }

    return possibleConstructorReturn_default()(this, result);
  };
}

function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}

var CodedError_CodedError = function (_Error) {
  inherits_default()(CodedError, _Error);

  var _super = _createSuper(CodedError);

  function CodedError(code, message) {
    var _this;

    classCallCheck_default()(this, CodedError);

    _this = _super.call(this, message);
    _this.code = code;
    return _this;
  }

  return CodedError;
}(wrapNativeSuper_default()(Error));
// CONCATENATED MODULE: ./node_modules/@unimodules/react-native-adapter/build/errors/UnavailabilityError.js





function UnavailabilityError_createSuper(Derived) {
  var hasNativeReflectConstruct = UnavailabilityError_isNativeReflectConstruct();

  return function _createSuperInternal() {
    var Super = getPrototypeOf_default()(Derived),
        result;

    if (hasNativeReflectConstruct) {
      var NewTarget = getPrototypeOf_default()(this).constructor;

      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }

    return possibleConstructorReturn_default()(this, result);
  };
}

function UnavailabilityError_isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}



var UnavailabilityError_UnavailabilityError = function (_CodedError) {
  inherits_default()(UnavailabilityError, _CodedError);

  var _super = UnavailabilityError_createSuper(UnavailabilityError);

  function UnavailabilityError(moduleName, propertyName) {
    classCallCheck_default()(this, UnavailabilityError);

    return _super.call(this, 'ERR_UNAVAILABLE', "The method or property " + moduleName + "." + propertyName + " is not available on " + Platform["a" /* default */].OS + ", are you sure you've linked all the native dependencies properly?");
  }

  return UnavailabilityError;
}(CodedError_CodedError);
// EXTERNAL MODULE: ./node_modules/invariant/browser.js
var browser = __webpack_require__("QLaP");
var browser_default = /*#__PURE__*/__webpack_require__.n(browser);

// EXTERNAL MODULE: ./node_modules/react-native-web/dist/exports/Dimensions/index.js
var Dimensions = __webpack_require__("C7Rh");

// CONCATENATED MODULE: ./node_modules/expo-asset/build/AssetSourceResolver.web.js






function getBasePath(_ref) {
  var httpServerLocation = _ref.httpServerLocation;

  if (httpServerLocation[0] === '/') {
    return httpServerLocation.substr(1);
  }

  return httpServerLocation;
}

function getScale() {
  return Dimensions["a" /* default */].get('window').scale;
}

function getScaledAssetPath(asset) {
  var scale = AssetSourceResolver_web_AssetSourceResolver.pickScale(asset.scales, getScale());
  var scaleSuffix = scale === 1 ? '' : '@' + scale + 'x';
  var assetDir = getBasePath(asset);
  return assetDir + '/' + asset.name + scaleSuffix + '.' + asset.type;
}

var AssetSourceResolver_web_AssetSourceResolver = function () {
  function AssetSourceResolver(serverUrl, jsbundleUrl, asset) {
    classCallCheck_default()(this, AssetSourceResolver);

    this.serverUrl = serverUrl;
    this.jsbundleUrl = jsbundleUrl;
    this.asset = asset;
  }

  createClass_default()(AssetSourceResolver, [{
    key: "isLoadedFromServer",
    value: function isLoadedFromServer() {
      return !!this.serverUrl;
    }
  }, {
    key: "isLoadedFromFileSystem",
    value: function isLoadedFromFileSystem() {
      return !!(this.jsbundleUrl && this.jsbundleUrl.startsWith('file://'));
    }
  }, {
    key: "defaultAsset",
    value: function defaultAsset() {
      if (this.isLoadedFromServer()) {
        return this.assetServerURL();
      }

      return this.scaledAssetURLNearBundle();
    }
  }, {
    key: "assetServerURL",
    value: function assetServerURL() {
      browser_default()(!!this.serverUrl, 'need server to load from');
      return this.fromSource(this.serverUrl + getScaledAssetPath(this.asset) + '?platform=' + Platform["a" /* default */].OS + '&hash=' + this.asset.hash);
    }
  }, {
    key: "scaledAssetPath",
    value: function scaledAssetPath() {
      return this.fromSource(getScaledAssetPath(this.asset));
    }
  }, {
    key: "scaledAssetURLNearBundle",
    value: function scaledAssetURLNearBundle() {
      var path = this.jsbundleUrl || 'file://';
      return this.fromSource(path + getScaledAssetPath(this.asset));
    }
  }, {
    key: "resourceIdentifierWithoutScale",
    value: function resourceIdentifierWithoutScale() {
      throw new UnavailabilityError_UnavailabilityError('react-native', 'resourceIdentifierWithoutScale()');
    }
  }, {
    key: "drawableFolderInBundle",
    value: function drawableFolderInBundle() {
      throw new UnavailabilityError_UnavailabilityError('react-native', 'drawableFolderInBundle()');
    }
  }, {
    key: "fromSource",
    value: function fromSource(source) {
      return {
        __packager_asset: true,
        width: this.asset.width,
        height: this.asset.height,
        uri: source,
        scale: AssetSourceResolver.pickScale(this.asset.scales, getScale())
      };
    }
  }], [{
    key: "pickScale",
    value: function pickScale(scales, deviceScale) {
      for (var i = 0; i < scales.length; i++) {
        if (scales[i] >= deviceScale) {
          return scales[i];
        }
      }

      return scales[scales.length - 1] || 1;
    }
  }]);

  return AssetSourceResolver;
}();



/***/ }),

/***/ "c6wG":
/***/ (function(module, exports, __webpack_require__) {

var baseIsTypedArray = __webpack_require__("dD9F"),
    baseUnary = __webpack_require__("sEf8"),
    nodeUtil = __webpack_require__("mdPL");

/* Node.js helper references. */
var nodeIsTypedArray = nodeUtil && nodeUtil.isTypedArray;

/**
 * Checks if `value` is classified as a typed array.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 * @example
 *
 * _.isTypedArray(new Uint8Array);
 * // => true
 *
 * _.isTypedArray([]);
 * // => false
 */
var isTypedArray = nodeIsTypedArray ? baseUnary(nodeIsTypedArray) : baseIsTypedArray;

module.exports = isTypedArray;


/***/ }),

/***/ "cvCv":
/***/ (function(module, exports) {

/**
 * Creates a function that returns `value`.
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Util
 * @param {*} value The value to return from the new function.
 * @returns {Function} Returns the new constant function.
 * @example
 *
 * var objects = _.times(2, _.constant({ 'a': 1 }));
 *
 * console.log(objects);
 * // => [{ 'a': 1 }, { 'a': 1 }]
 *
 * console.log(objects[0] === objects[1]);
 * // => true
 */
function constant(value) {
  return function() {
    return value;
  };
}

module.exports = constant;


/***/ }),

/***/ "dD9F":
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__("NykK"),
    isLength = __webpack_require__("shjB"),
    isObjectLike = __webpack_require__("ExA7");

/** `Object#toString` result references. */
var argsTag = '[object Arguments]',
    arrayTag = '[object Array]',
    boolTag = '[object Boolean]',
    dateTag = '[object Date]',
    errorTag = '[object Error]',
    funcTag = '[object Function]',
    mapTag = '[object Map]',
    numberTag = '[object Number]',
    objectTag = '[object Object]',
    regexpTag = '[object RegExp]',
    setTag = '[object Set]',
    stringTag = '[object String]',
    weakMapTag = '[object WeakMap]';

var arrayBufferTag = '[object ArrayBuffer]',
    dataViewTag = '[object DataView]',
    float32Tag = '[object Float32Array]',
    float64Tag = '[object Float64Array]',
    int8Tag = '[object Int8Array]',
    int16Tag = '[object Int16Array]',
    int32Tag = '[object Int32Array]',
    uint8Tag = '[object Uint8Array]',
    uint8ClampedTag = '[object Uint8ClampedArray]',
    uint16Tag = '[object Uint16Array]',
    uint32Tag = '[object Uint32Array]';

/** Used to identify `toStringTag` values of typed arrays. */
var typedArrayTags = {};
typedArrayTags[float32Tag] = typedArrayTags[float64Tag] =
typedArrayTags[int8Tag] = typedArrayTags[int16Tag] =
typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] =
typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] =
typedArrayTags[uint32Tag] = true;
typedArrayTags[argsTag] = typedArrayTags[arrayTag] =
typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] =
typedArrayTags[dataViewTag] = typedArrayTags[dateTag] =
typedArrayTags[errorTag] = typedArrayTags[funcTag] =
typedArrayTags[mapTag] = typedArrayTags[numberTag] =
typedArrayTags[objectTag] = typedArrayTags[regexpTag] =
typedArrayTags[setTag] = typedArrayTags[stringTag] =
typedArrayTags[weakMapTag] = false;

/**
 * The base implementation of `_.isTypedArray` without Node.js optimizations.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 */
function baseIsTypedArray(value) {
  return isObjectLike(value) &&
    isLength(value.length) && !!typedArrayTags[baseGetTag(value)];
}

module.exports = baseIsTypedArray;


/***/ }),

/***/ "dTAl":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("GoyQ");

/** Built-in value references. */
var objectCreate = Object.create;

/**
 * The base implementation of `_.create` without support for assigning
 * properties to the created object.
 *
 * @private
 * @param {Object} proto The object to inherit from.
 * @returns {Object} Returns the new object.
 */
var baseCreate = (function() {
  function object() {}
  return function(proto) {
    if (!isObject(proto)) {
      return {};
    }
    if (objectCreate) {
      return objectCreate(proto);
    }
    object.prototype = proto;
    var result = new object;
    object.prototype = undefined;
    return result;
  };
}());

module.exports = baseCreate;


/***/ }),

/***/ "dt0z":
/***/ (function(module, exports, __webpack_require__) {

var baseToString = __webpack_require__("zoYe");

/**
 * Converts `value` to a string. An empty string is returned for `null`
 * and `undefined` values. The sign of `-0` is preserved.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 * @example
 *
 * _.toString(null);
 * // => ''
 *
 * _.toString(-0);
 * // => '-0'
 *
 * _.toString([1, 2, 3]);
 * // => '1,2,3'
 */
function toString(value) {
  return value == null ? '' : baseToString(value);
}

module.exports = toString;


/***/ }),

/***/ "e4Nc":
/***/ (function(module, exports, __webpack_require__) {

var mapCacheClear = __webpack_require__("fGT3"),
    mapCacheDelete = __webpack_require__("k+1r"),
    mapCacheGet = __webpack_require__("JHgL"),
    mapCacheHas = __webpack_require__("pSRY"),
    mapCacheSet = __webpack_require__("H8j4");

/**
 * Creates a map cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function MapCache(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `MapCache`.
MapCache.prototype.clear = mapCacheClear;
MapCache.prototype['delete'] = mapCacheDelete;
MapCache.prototype.get = mapCacheGet;
MapCache.prototype.has = mapCacheHas;
MapCache.prototype.set = mapCacheSet;

module.exports = MapCache;


/***/ }),

/***/ "eTa0":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export IS_MANAGED_ENV */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IS_ENV_WITH_UPDATES_ENABLED; });
/* unused harmony export IS_ENV_WITHOUT_UPDATES_ENABLED */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return manifestBaseUrl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return downloadAsync; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return getManifest; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("o0o1");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);

var IS_MANAGED_ENV = false;
var IS_ENV_WITH_UPDATES_ENABLED = false;
var IS_ENV_WITHOUT_UPDATES_ENABLED = false;
var manifestBaseUrl = null;
function downloadAsync(uri, hash, type, name) {
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function downloadAsync$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          return _context.abrupt("return", uri);

        case 1:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, null, Promise);
}
function getManifest() {
  return {};
}

/***/ }),

/***/ "eUgh":
/***/ (function(module, exports) {

/**
 * A specialized version of `_.map` for arrays without support for iteratee
 * shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the new mapped array.
 */
function arrayMap(array, iteratee) {
  var index = -1,
      length = array == null ? 0 : array.length,
      result = Array(length);

  while (++index < length) {
    result[index] = iteratee(array[index], index, array);
  }
  return result;
}

module.exports = arrayMap;


/***/ }),

/***/ "ebwN":
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__("Cwc5"),
    root = __webpack_require__("Kz5y");

/* Built-in method references that are verified to be native. */
var Map = getNative(root, 'Map');

module.exports = Map;


/***/ }),

/***/ "ekgI":
/***/ (function(module, exports, __webpack_require__) {

var nativeCreate = __webpack_require__("YESw");

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Checks if a hash value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Hash
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function hashHas(key) {
  var data = this.__data__;
  return nativeCreate ? (data[key] !== undefined) : hasOwnProperty.call(data, key);
}

module.exports = hashHas;


/***/ }),

/***/ "f5+H":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export setCustomSourceTransformer */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return resolveAssetSource; });
/* unused harmony export pickScale */
/* harmony import */ var react_native_web_dist_exports_NativeModules__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("utb+");
/* harmony import */ var _AssetRegistry__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("tbnB");
/* harmony import */ var _AssetSourceResolver__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("c/8Z");




var _customSourceTransformer;

var _serverURL;

var _scriptURL;

var _sourceCodeScriptURL;

function getSourceCodeScriptURL() {
  if (_sourceCodeScriptURL) {
    return _sourceCodeScriptURL;
  }

  var sourceCode = nativeExtensions && nativeExtensions.SourceCode;

  if (!sourceCode) {
    sourceCode = react_native_web_dist_exports_NativeModules__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"] && react_native_web_dist_exports_NativeModules__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].SourceCode;
  }

  _sourceCodeScriptURL = sourceCode.scriptURL;
  return _sourceCodeScriptURL;
}

function getDevServerURL() {
  if (_serverURL === undefined) {
    var sourceCodeScriptURL = getSourceCodeScriptURL();
    var match = sourceCodeScriptURL && sourceCodeScriptURL.match(/^https?:\/\/.*?\//);

    if (match) {
      _serverURL = match[0];
    } else {
      _serverURL = null;
    }
  }

  return _serverURL;
}

function _coerceLocalScriptURL(scriptURL) {
  if (scriptURL) {
    if (scriptURL.startsWith('assets://')) {
      return null;
    }

    scriptURL = scriptURL.substring(0, scriptURL.lastIndexOf('/') + 1);

    if (!scriptURL.includes('://')) {
      scriptURL = 'file://' + scriptURL;
    }
  }

  return null;
}

function getScriptURL() {
  if (_scriptURL === undefined) {
    _scriptURL = _coerceLocalScriptURL(getSourceCodeScriptURL());
  }

  return _scriptURL;
}

function setCustomSourceTransformer(transformer) {
  _customSourceTransformer = transformer;
}
function resolveAssetSource(source) {
  if (typeof source === 'object') {
    return source;
  }

  var asset = Object(_AssetRegistry__WEBPACK_IMPORTED_MODULE_1__[/* getAssetByID */ "a"])(source);

  if (!asset) {
    return undefined;
  }

  var resolver = new _AssetSourceResolver__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"](getDevServerURL(), getScriptURL(), asset);

  if (_customSourceTransformer) {
    return _customSourceTransformer(resolver);
  }

  return resolver.defaultAsset();
}
Object.defineProperty(resolveAssetSource, 'setCustomSourceTransformer', {
  get: function get() {
    return setCustomSourceTransformer;
  }
});
var pickScale = _AssetSourceResolver__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"].pickScale;


/***/ }),

/***/ "fGT3":
/***/ (function(module, exports, __webpack_require__) {

var Hash = __webpack_require__("4kuk"),
    ListCache = __webpack_require__("Xi7e"),
    Map = __webpack_require__("ebwN");

/**
 * Removes all key-value entries from the map.
 *
 * @private
 * @name clear
 * @memberOf MapCache
 */
function mapCacheClear() {
  this.size = 0;
  this.__data__ = {
    'hash': new Hash,
    'map': new (Map || ListCache),
    'string': new Hash
  };
}

module.exports = mapCacheClear;


/***/ }),

/***/ "fR/l":
/***/ (function(module, exports, __webpack_require__) {

var arrayPush = __webpack_require__("CH3K"),
    isArray = __webpack_require__("Z0cm");

/**
 * The base implementation of `getAllKeys` and `getAllKeysIn` which uses
 * `keysFunc` and `symbolsFunc` to get the enumerable property names and
 * symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Function} keysFunc The function to get the keys of `object`.
 * @param {Function} symbolsFunc The function to get the symbols of `object`.
 * @returns {Array} Returns the array of property names and symbols.
 */
function baseGetAllKeys(object, keysFunc, symbolsFunc) {
  var result = keysFunc(object);
  return isArray(object) ? result : arrayPush(result, symbolsFunc(object));
}

module.exports = baseGetAllKeys;


/***/ }),

/***/ "fmRc":
/***/ (function(module, exports, __webpack_require__) {

var ListCache = __webpack_require__("Xi7e"),
    stackClear = __webpack_require__("77Zs"),
    stackDelete = __webpack_require__("L8xA"),
    stackGet = __webpack_require__("gCq4"),
    stackHas = __webpack_require__("VaNO"),
    stackSet = __webpack_require__("0Cz8");

/**
 * Creates a stack cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Stack(entries) {
  var data = this.__data__ = new ListCache(entries);
  this.size = data.size;
}

// Add methods to `Stack`.
Stack.prototype.clear = stackClear;
Stack.prototype['delete'] = stackDelete;
Stack.prototype.get = stackGet;
Stack.prototype.has = stackHas;
Stack.prototype.set = stackSet;

module.exports = Stack;


/***/ }),

/***/ "gCq4":
/***/ (function(module, exports) {

/**
 * Gets the stack value for `key`.
 *
 * @private
 * @name get
 * @memberOf Stack
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function stackGet(key) {
  return this.__data__.get(key);
}

module.exports = stackGet;


/***/ }),

/***/ "gFfm":
/***/ (function(module, exports) {

/**
 * A specialized version of `_.forEach` for arrays without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns `array`.
 */
function arrayEach(array, iteratee) {
  var index = -1,
      length = array == null ? 0 : array.length;

  while (++index < length) {
    if (iteratee(array[index], index, array) === false) {
      break;
    }
  }
  return array;
}

module.exports = arrayEach;


/***/ }),

/***/ "gpbi":
/***/ (function(module, exports, __webpack_require__) {

var baseGet = __webpack_require__("ZWtO"),
    baseSlice = __webpack_require__("KxBF");

/**
 * Gets the parent value at `path` of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Array} path The path to get the parent value of.
 * @returns {*} Returns the parent value.
 */
function parent(object, path) {
  return path.length < 2 ? object : baseGet(object, baseSlice(path, 0, -1));
}

module.exports = parent;


/***/ }),

/***/ "gt71":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

function assertPath(path) {
  if (typeof path !== 'string') {
    throw new TypeError('Path must be a string. Received ' + JSON.stringify(path));
  }
}

function normalizeStringPosix(path, allowAboveRoot) {
  var res = '';
  var lastSegmentLength = 0;
  var lastSlash = -1;
  var dots = 0;
  var code;

  for (var i = 0; i <= path.length; ++i) {
    if (i < path.length) code = path.charCodeAt(i);else if (code === 47) break;else code = 47;

    if (code === 47) {
      if (lastSlash === i - 1 || dots === 1) {} else if (lastSlash !== i - 1 && dots === 2) {
        if (res.length < 2 || lastSegmentLength !== 2 || res.charCodeAt(res.length - 1) !== 46 || res.charCodeAt(res.length - 2) !== 46) {
          if (res.length > 2) {
            var lastSlashIndex = res.lastIndexOf('/');

            if (lastSlashIndex !== res.length - 1) {
              if (lastSlashIndex === -1) {
                res = '';
                lastSegmentLength = 0;
              } else {
                res = res.slice(0, lastSlashIndex);
                lastSegmentLength = res.length - 1 - res.lastIndexOf('/');
              }

              lastSlash = i;
              dots = 0;
              continue;
            }
          } else if (res.length === 2 || res.length === 1) {
            res = '';
            lastSegmentLength = 0;
            lastSlash = i;
            dots = 0;
            continue;
          }
        }

        if (allowAboveRoot) {
          if (res.length > 0) res += '/..';else res = '..';
          lastSegmentLength = 2;
        }
      } else {
        if (res.length > 0) res += '/' + path.slice(lastSlash + 1, i);else res = path.slice(lastSlash + 1, i);
        lastSegmentLength = i - lastSlash - 1;
      }

      lastSlash = i;
      dots = 0;
    } else if (code === 46 && dots !== -1) {
      ++dots;
    } else {
      dots = -1;
    }
  }

  return res;
}

function _format(sep, pathObject) {
  var dir = pathObject.dir || pathObject.root;
  var base = pathObject.base || (pathObject.name || '') + (pathObject.ext || '');

  if (!dir) {
    return base;
  }

  if (dir === pathObject.root) {
    return dir + base;
  }

  return dir + sep + base;
}

var posix = {
  resolve: function resolve() {
    var resolvedPath = '';
    var resolvedAbsolute = false;
    var cwd;

    for (var i = arguments.length - 1; i >= -1 && !resolvedAbsolute; i--) {
      var path;
      if (i >= 0) path = arguments[i];else {
        if (cwd === undefined) cwd = process.cwd();
        path = cwd;
      }
      assertPath(path);

      if (path.length === 0) {
        continue;
      }

      resolvedPath = path + '/' + resolvedPath;
      resolvedAbsolute = path.charCodeAt(0) === 47;
    }

    resolvedPath = normalizeStringPosix(resolvedPath, !resolvedAbsolute);

    if (resolvedAbsolute) {
      if (resolvedPath.length > 0) return '/' + resolvedPath;else return '/';
    } else if (resolvedPath.length > 0) {
      return resolvedPath;
    } else {
      return '.';
    }
  },
  normalize: function normalize(path) {
    assertPath(path);
    if (path.length === 0) return '.';
    var isAbsolute = path.charCodeAt(0) === 47;
    var trailingSeparator = path.charCodeAt(path.length - 1) === 47;
    path = normalizeStringPosix(path, !isAbsolute);
    if (path.length === 0 && !isAbsolute) path = '.';
    if (path.length > 0 && trailingSeparator) path += '/';
    if (isAbsolute) return '/' + path;
    return path;
  },
  isAbsolute: function isAbsolute(path) {
    assertPath(path);
    return path.length > 0 && path.charCodeAt(0) === 47;
  },
  join: function join() {
    if (arguments.length === 0) return '.';
    var joined;

    for (var i = 0; i < arguments.length; ++i) {
      var arg = arguments[i];
      assertPath(arg);

      if (arg.length > 0) {
        if (joined === undefined) joined = arg;else joined += '/' + arg;
      }
    }

    if (joined === undefined) return '.';
    return posix.normalize(joined);
  },
  relative: function relative(from, to) {
    assertPath(from);
    assertPath(to);
    if (from === to) return '';
    from = posix.resolve(from);
    to = posix.resolve(to);
    if (from === to) return '';
    var fromStart = 1;

    for (; fromStart < from.length; ++fromStart) {
      if (from.charCodeAt(fromStart) !== 47) break;
    }

    var fromEnd = from.length;
    var fromLen = fromEnd - fromStart;
    var toStart = 1;

    for (; toStart < to.length; ++toStart) {
      if (to.charCodeAt(toStart) !== 47) break;
    }

    var toEnd = to.length;
    var toLen = toEnd - toStart;
    var length = fromLen < toLen ? fromLen : toLen;
    var lastCommonSep = -1;
    var i = 0;

    for (; i <= length; ++i) {
      if (i === length) {
        if (toLen > length) {
          if (to.charCodeAt(toStart + i) === 47) {
            return to.slice(toStart + i + 1);
          } else if (i === 0) {
            return to.slice(toStart + i);
          }
        } else if (fromLen > length) {
          if (from.charCodeAt(fromStart + i) === 47) {
            lastCommonSep = i;
          } else if (i === 0) {
            lastCommonSep = 0;
          }
        }

        break;
      }

      var fromCode = from.charCodeAt(fromStart + i);
      var toCode = to.charCodeAt(toStart + i);
      if (fromCode !== toCode) break;else if (fromCode === 47) lastCommonSep = i;
    }

    var out = '';

    for (i = fromStart + lastCommonSep + 1; i <= fromEnd; ++i) {
      if (i === fromEnd || from.charCodeAt(i) === 47) {
        if (out.length === 0) out += '..';else out += '/..';
      }
    }

    if (out.length > 0) return out + to.slice(toStart + lastCommonSep);else {
      toStart += lastCommonSep;
      if (to.charCodeAt(toStart) === 47) ++toStart;
      return to.slice(toStart);
    }
  },
  _makeLong: function _makeLong(path) {
    return path;
  },
  dirname: function dirname(path) {
    assertPath(path);
    if (path.length === 0) return '.';
    var code = path.charCodeAt(0);
    var hasRoot = code === 47;
    var end = -1;
    var matchedSlash = true;

    for (var i = path.length - 1; i >= 1; --i) {
      code = path.charCodeAt(i);

      if (code === 47) {
        if (!matchedSlash) {
          end = i;
          break;
        }
      } else {
        matchedSlash = false;
      }
    }

    if (end === -1) return hasRoot ? '/' : '.';
    if (hasRoot && end === 1) return '//';
    return path.slice(0, end);
  },
  basename: function basename(path, ext) {
    if (ext !== undefined && typeof ext !== 'string') throw new TypeError('"ext" argument must be a string');
    assertPath(path);
    var start = 0;
    var end = -1;
    var matchedSlash = true;
    var i;

    if (ext !== undefined && ext.length > 0 && ext.length <= path.length) {
      if (ext.length === path.length && ext === path) return '';
      var extIdx = ext.length - 1;
      var firstNonSlashEnd = -1;

      for (i = path.length - 1; i >= 0; --i) {
        var code = path.charCodeAt(i);

        if (code === 47) {
          if (!matchedSlash) {
            start = i + 1;
            break;
          }
        } else {
          if (firstNonSlashEnd === -1) {
            matchedSlash = false;
            firstNonSlashEnd = i + 1;
          }

          if (extIdx >= 0) {
            if (code === ext.charCodeAt(extIdx)) {
              if (--extIdx === -1) {
                end = i;
              }
            } else {
              extIdx = -1;
              end = firstNonSlashEnd;
            }
          }
        }
      }

      if (start === end) end = firstNonSlashEnd;else if (end === -1) end = path.length;
      return path.slice(start, end);
    } else {
      for (i = path.length - 1; i >= 0; --i) {
        if (path.charCodeAt(i) === 47) {
          if (!matchedSlash) {
            start = i + 1;
            break;
          }
        } else if (end === -1) {
          matchedSlash = false;
          end = i + 1;
        }
      }

      if (end === -1) return '';
      return path.slice(start, end);
    }
  },
  extname: function extname(path) {
    assertPath(path);
    var startDot = -1;
    var startPart = 0;
    var end = -1;
    var matchedSlash = true;
    var preDotState = 0;

    for (var i = path.length - 1; i >= 0; --i) {
      var code = path.charCodeAt(i);

      if (code === 47) {
        if (!matchedSlash) {
          startPart = i + 1;
          break;
        }

        continue;
      }

      if (end === -1) {
        matchedSlash = false;
        end = i + 1;
      }

      if (code === 46) {
        if (startDot === -1) startDot = i;else if (preDotState !== 1) preDotState = 1;
      } else if (startDot !== -1) {
        preDotState = -1;
      }
    }

    if (startDot === -1 || end === -1 || preDotState === 0 || preDotState === 1 && startDot === end - 1 && startDot === startPart + 1) {
      return '';
    }

    return path.slice(startDot, end);
  },
  format: function format(pathObject) {
    if (pathObject === null || typeof pathObject !== 'object') {
      throw new TypeError('The "pathObject" argument must be of type Object. Received type ' + typeof pathObject);
    }

    return _format('/', pathObject);
  },
  parse: function parse(path) {
    assertPath(path);
    var ret = {
      root: '',
      dir: '',
      base: '',
      ext: '',
      name: ''
    };
    if (path.length === 0) return ret;
    var code = path.charCodeAt(0);
    var isAbsolute = code === 47;
    var start;

    if (isAbsolute) {
      ret.root = '/';
      start = 1;
    } else {
      start = 0;
    }

    var startDot = -1;
    var startPart = 0;
    var end = -1;
    var matchedSlash = true;
    var i = path.length - 1;
    var preDotState = 0;

    for (; i >= start; --i) {
      code = path.charCodeAt(i);

      if (code === 47) {
        if (!matchedSlash) {
          startPart = i + 1;
          break;
        }

        continue;
      }

      if (end === -1) {
        matchedSlash = false;
        end = i + 1;
      }

      if (code === 46) {
        if (startDot === -1) startDot = i;else if (preDotState !== 1) preDotState = 1;
      } else if (startDot !== -1) {
        preDotState = -1;
      }
    }

    if (startDot === -1 || end === -1 || preDotState === 0 || preDotState === 1 && startDot === end - 1 && startDot === startPart + 1) {
      if (end !== -1) {
        if (startPart === 0 && isAbsolute) ret.base = ret.name = path.slice(1, end);else ret.base = ret.name = path.slice(startPart, end);
      }
    } else {
      if (startPart === 0 && isAbsolute) {
        ret.name = path.slice(1, startDot);
        ret.base = path.slice(1, end);
      } else {
        ret.name = path.slice(startPart, startDot);
        ret.base = path.slice(startPart, end);
      }

      ret.ext = path.slice(startDot, end);
    }

    if (startPart > 0) ret.dir = path.slice(0, startPart - 1);else if (isAbsolute) ret.dir = '/';
    return ret;
  },
  sep: '/',
  delimiter: ':',
  win32: null,
  posix: null
};
posix.posix = posix;
module.exports = posix;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("8oxB")))

/***/ }),

/***/ "hb5u":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* binding */ Asset_Asset; });

// EXTERNAL MODULE: ./node_modules/@babel/runtime/regenerator/index.js
var regenerator = __webpack_require__("o0o1");
var regenerator_default = /*#__PURE__*/__webpack_require__.n(regenerator);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/classCallCheck.js
var classCallCheck = __webpack_require__("lwsE");
var classCallCheck_default = /*#__PURE__*/__webpack_require__.n(classCallCheck);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/createClass.js
var createClass = __webpack_require__("W8MJ");
var createClass_default = /*#__PURE__*/__webpack_require__.n(createClass);

// EXTERNAL MODULE: ./node_modules/@unimodules/react-native-adapter/build/Platform.js + 1 modules
var Platform = __webpack_require__("taVN");

// EXTERNAL MODULE: ./node_modules/react-native-web/dist/modules/AssetRegistry/index.js
var AssetRegistry = __webpack_require__("tbnB");

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/defineProperty.js
var defineProperty = __webpack_require__("lSNA");
var defineProperty_default = /*#__PURE__*/__webpack_require__.n(defineProperty);

// EXTERNAL MODULE: ./node_modules/expo-asset/node_modules/path-browserify/index.js
var path_browserify = __webpack_require__("gt71");
var path_browserify_default = /*#__PURE__*/__webpack_require__.n(path_browserify);

// EXTERNAL MODULE: ./node_modules/react-native-web/dist/exports/PixelRatio/index.js
var PixelRatio = __webpack_require__("qadT");

// EXTERNAL MODULE: ./node_modules/url-parse/index.js
var url_parse = __webpack_require__("GBY4");
var url_parse_default = /*#__PURE__*/__webpack_require__.n(url_parse);

// EXTERNAL MODULE: ./node_modules/expo-asset/build/AssetSourceResolver.web.js + 2 modules
var AssetSourceResolver_web = __webpack_require__("c/8Z");

// EXTERNAL MODULE: ./node_modules/expo-asset/build/PlatformUtils.web.js
var PlatformUtils_web = __webpack_require__("eTa0");

// CONCATENATED MODULE: ./node_modules/expo-asset/build/AssetSources.js


function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        defineProperty_default()(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}







var assetMapOverride = Object(PlatformUtils_web["c" /* getManifest */])().assetMapOverride;
function selectAssetSource(meta) {
  if (assetMapOverride && assetMapOverride.hasOwnProperty(meta.hash)) {
    meta = _objectSpread(_objectSpread({}, meta), assetMapOverride[meta.hash]);
  }

  var scale = AssetSourceResolver_web["a" /* default */].pickScale(meta.scales, PixelRatio["a" /* default */].get());
  var index = meta.scales.findIndex(function (s) {
    return s === scale;
  });
  var hash = meta.fileHashes ? meta.fileHashes[index] || meta.fileHashes[0] : meta.hash;
  var uri = meta.fileUris ? meta.fileUris[index] || meta.fileUris[0] : meta.uri;

  if (uri) {
    return {
      uri: resolveUri(uri),
      hash: hash
    };
  }

  var assetUrlOverride = Object(PlatformUtils_web["c" /* getManifest */])().assetUrlOverride;

  if (assetUrlOverride) {
    var _uri = path_browserify_default.a.join(assetUrlOverride, hash);

    return {
      uri: resolveUri(_uri),
      hash: hash
    };
  }

  var fileScale = scale === 1 ? '' : "@" + scale + "x";
  var fileExtension = meta.type ? "." + encodeURIComponent(meta.type) : '';
  var suffix = "/" + encodeURIComponent(meta.name) + fileScale + fileExtension + "?platform=" + encodeURIComponent(Platform["a" /* default */].OS) + "&hash=" + encodeURIComponent(meta.hash);

  if (/^https?:\/\//.test(meta.httpServerLocation)) {
    var _uri2 = meta.httpServerLocation + suffix;

    return {
      uri: _uri2,
      hash: hash
    };
  }

  if (Object(PlatformUtils_web["c" /* getManifest */])().developer) {
    var baseUrl = new url_parse_default.a(Object(PlatformUtils_web["c" /* getManifest */])().bundleUrl);
    baseUrl.set('pathname', meta.httpServerLocation + suffix);
    return {
      uri: baseUrl.href,
      hash: hash
    };
  }

  return {
    uri: "https://d1wp6m56sqw74a.cloudfront.net/~assets/" + encodeURIComponent(hash),
    hash: hash
  };
}
function resolveUri(uri) {
  if (!PlatformUtils_web["d" /* manifestBaseUrl */]) {
    return uri;
  }

  var _URL = new url_parse_default.a(uri),
      protocol = _URL.protocol;

  if (protocol !== '') {
    return uri;
  }

  var baseUrl = new url_parse_default.a(PlatformUtils_web["d" /* manifestBaseUrl */]);
  var resolvedPath = uri.startsWith('/') ? uri : path_browserify_default.a.join(baseUrl.pathname, uri);
  baseUrl.set('pathname', resolvedPath);
  return baseUrl.href;
}
// CONCATENATED MODULE: ./node_modules/expo-asset/build/AssetUris.js

function getFilename(url) {
  var _URL = new url_parse_default.a(url, {}),
      pathname = _URL.pathname;

  return pathname.substring(pathname.lastIndexOf('/') + 1);
}
function getFileExtension(url) {
  var filename = getFilename(url);
  var dotIndex = filename.lastIndexOf('.');
  return dotIndex > 0 ? filename.substring(dotIndex) : '';
}
function getManifestBaseUrl(manifestUrl) {
  var urlObject = new url_parse_default.a(manifestUrl, {});

  if (urlObject.protocol === 'exp:') {
    urlObject.set('protocol', 'http:');
  } else if (urlObject.protocol === 'exps:') {
    urlObject.set('protocol', 'https:');
  }

  var directory = urlObject.pathname.substring(0, urlObject.pathname.lastIndexOf('/') + 1);
  urlObject.set('pathname', directory);
  urlObject.set('query', '');
  urlObject.set('hash', '');
  return urlObject.href;
}
// CONCATENATED MODULE: ./node_modules/expo-asset/build/EmbeddedAssets.web.js
function getEmbeddedAssetUri(hash, type) {
  return null;
}
// CONCATENATED MODULE: ./node_modules/expo-asset/build/ImageAssets.js

function isImageType(type) {
  return /^(jpeg|jpg|gif|png|bmp|webp|heic)$/i.test(type);
}
function getImageInfoAsync(url) {
  return new Promise(function (resolve, reject) {
    var img = new Image();
    img.onerror = reject;

    img.onload = function () {
      resolve({
        name: getFilename(url),
        width: img.naturalWidth,
        height: img.naturalHeight
      });
    };

    img.src = url;
  });
}
// EXTERNAL MODULE: ./node_modules/expo-asset/build/resolveAssetSource.web.js
var resolveAssetSource_web = __webpack_require__("f5+H");

// CONCATENATED MODULE: ./node_modules/expo-asset/build/Asset.js











var Asset_Asset = function () {
  function Asset(_ref) {
    var name = _ref.name,
        type = _ref.type,
        _ref$hash = _ref.hash,
        hash = _ref$hash === void 0 ? null : _ref$hash,
        uri = _ref.uri,
        width = _ref.width,
        height = _ref.height;

    classCallCheck_default()(this, Asset);

    this.hash = null;
    this.localUri = null;
    this.width = null;
    this.height = null;
    this.downloading = false;
    this.downloaded = false;
    this._downloadCallbacks = [];
    this.name = name;
    this.type = type;
    this.hash = hash;
    this.uri = uri;

    if (typeof width === 'number') {
      this.width = width;
    }

    if (typeof height === 'number') {
      this.height = height;
    }

    if (hash) {
      this.localUri = getEmbeddedAssetUri(hash, type);

      if (this.localUri) {
        this.downloaded = true;
      }
    }

    if (Platform["a" /* default */].OS === 'web') {
      if (!name) {
        this.name = getFilename(uri);
      }

      if (!type) {
        this.type = getFileExtension(uri);
      }
    }
  }

  createClass_default()(Asset, [{
    key: "downloadAsync",
    value: function downloadAsync() {
      var _this = this;

      var _await$ImageAssets$ge, width, height, name;

      return regenerator_default.a.async(function downloadAsync$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              if (!this.downloaded) {
                _context.next = 2;
                break;
              }

              return _context.abrupt("return", this);

            case 2:
              if (!this.downloading) {
                _context.next = 6;
                break;
              }

              _context.next = 5;
              return regenerator_default.a.awrap(new Promise(function (resolve, reject) {
                _this._downloadCallbacks.push({
                  resolve: resolve,
                  reject: reject
                });
              }));

            case 5:
              return _context.abrupt("return", this);

            case 6:
              this.downloading = true;
              _context.prev = 7;

              if (!(Platform["a" /* default */].OS === 'web')) {
                _context.next = 22;
                break;
              }

              if (!isImageType(this.type)) {
                _context.next = 21;
                break;
              }

              _context.next = 12;
              return regenerator_default.a.awrap(getImageInfoAsync(this.uri));

            case 12:
              _await$ImageAssets$ge = _context.sent;
              width = _await$ImageAssets$ge.width;
              height = _await$ImageAssets$ge.height;
              name = _await$ImageAssets$ge.name;
              this.width = width;
              this.height = height;
              this.name = name;
              _context.next = 22;
              break;

            case 21:
              this.name = getFilename(this.uri);

            case 22:
              _context.next = 24;
              return regenerator_default.a.awrap(Object(PlatformUtils_web["b" /* downloadAsync */])(this.uri, this.hash, this.type, this.name));

            case 24:
              this.localUri = _context.sent;
              this.downloaded = true;

              this._downloadCallbacks.forEach(function (_ref2) {
                var resolve = _ref2.resolve;
                return resolve();
              });

              _context.next = 33;
              break;

            case 29:
              _context.prev = 29;
              _context.t0 = _context["catch"](7);

              this._downloadCallbacks.forEach(function (_ref3) {
                var reject = _ref3.reject;
                return reject(_context.t0);
              });

              throw _context.t0;

            case 33:
              _context.prev = 33;
              this.downloading = false;
              this._downloadCallbacks = [];
              return _context.finish(33);

            case 37:
              return _context.abrupt("return", this);

            case 38:
            case "end":
              return _context.stop();
          }
        }
      }, null, this, [[7, 29, 33, 37]], Promise);
    }
  }], [{
    key: "loadAsync",
    value: function loadAsync(moduleId) {
      var moduleIds = Array.isArray(moduleId) ? moduleId : [moduleId];
      return Promise.all(moduleIds.map(function (moduleId) {
        return Asset.fromModule(moduleId).downloadAsync();
      }));
    }
  }, {
    key: "fromModule",
    value: function fromModule(virtualAssetModule) {
      if (typeof virtualAssetModule === 'string') {
        return Asset.fromURI(virtualAssetModule);
      }

      var meta = Object(AssetRegistry["a" /* getAssetByID */])(virtualAssetModule);

      if (!meta) {
        throw new Error("Module \"" + virtualAssetModule + "\" is missing from the asset registry");
      }

      if (!PlatformUtils_web["a" /* IS_ENV_WITH_UPDATES_ENABLED */]) {
        var _resolveAssetSource = Object(resolveAssetSource_web["a" /* default */])(virtualAssetModule),
            uri = _resolveAssetSource.uri;

        var asset = new Asset({
          name: meta.name,
          type: meta.type,
          hash: meta.hash,
          uri: uri,
          width: meta.width,
          height: meta.height
        });

        if (Platform["a" /* default */].OS === 'android' && !uri.includes(':') && (meta.width || meta.height)) {
          asset.localUri = asset.uri;
          asset.downloaded = true;
        }

        Asset.byHash[meta.hash] = asset;
        return asset;
      }

      return Asset.fromMetadata(meta);
    }
  }, {
    key: "fromMetadata",
    value: function fromMetadata(meta) {
      var metaHash = meta.hash;

      if (Asset.byHash[metaHash]) {
        return Asset.byHash[metaHash];
      }

      var _AssetSources$selectA = selectAssetSource(meta),
          uri = _AssetSources$selectA.uri,
          hash = _AssetSources$selectA.hash;

      var asset = new Asset({
        name: meta.name,
        type: meta.type,
        hash: hash,
        uri: uri,
        width: meta.width,
        height: meta.height
      });
      Asset.byHash[metaHash] = asset;
      return asset;
    }
  }, {
    key: "fromURI",
    value: function fromURI(uri) {
      if (Asset.byUri[uri]) {
        return Asset.byUri[uri];
      }

      var type = '';

      if (uri.indexOf(';base64') > -1) {
        type = uri.split(';')[0].split('/')[1];
      } else {
        var extension = getFileExtension(uri);
        type = extension.startsWith('.') ? extension.substring(1) : extension;
      }

      var asset = new Asset({
        name: '',
        type: type,
        hash: null,
        uri: uri
      });
      Asset.byUri[uri] = asset;
      return asset;
    }
  }]);

  return Asset;
}();
Asset_Asset.byHash = {};
Asset_Asset.byUri = {};

/***/ }),

/***/ "heNW":
/***/ (function(module, exports) {

/**
 * A faster alternative to `Function#apply`, this function invokes `func`
 * with the `this` binding of `thisArg` and the arguments of `args`.
 *
 * @private
 * @param {Function} func The function to invoke.
 * @param {*} thisArg The `this` binding of `func`.
 * @param {Array} args The arguments to invoke `func` with.
 * @returns {*} Returns the result of `func`.
 */
function apply(func, thisArg, args) {
  switch (args.length) {
    case 0: return func.call(thisArg);
    case 1: return func.call(thisArg, args[0]);
    case 2: return func.call(thisArg, args[0], args[1]);
    case 3: return func.call(thisArg, args[0], args[1], args[2]);
  }
  return func.apply(thisArg, args);
}

module.exports = apply;


/***/ }),

/***/ "hypo":
/***/ (function(module, exports, __webpack_require__) {

var defineProperty = __webpack_require__("O0oS");

/**
 * The base implementation of `assignValue` and `assignMergeValue` without
 * value checks.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */
function baseAssignValue(object, key, value) {
  if (key == '__proto__' && defineProperty) {
    defineProperty(object, key, {
      'configurable': true,
      'enumerable': true,
      'value': value,
      'writable': true
    });
  } else {
    object[key] = value;
  }
}

module.exports = baseAssignValue;


/***/ }),

/***/ "juv8":
/***/ (function(module, exports, __webpack_require__) {

var assignValue = __webpack_require__("MrPd"),
    baseAssignValue = __webpack_require__("hypo");

/**
 * Copies properties of `source` to `object`.
 *
 * @private
 * @param {Object} source The object to copy properties from.
 * @param {Array} props The property identifiers to copy.
 * @param {Object} [object={}] The object to copy properties to.
 * @param {Function} [customizer] The function to customize copied values.
 * @returns {Object} Returns `object`.
 */
function copyObject(source, props, object, customizer) {
  var isNew = !object;
  object || (object = {});

  var index = -1,
      length = props.length;

  while (++index < length) {
    var key = props[index];

    var newValue = customizer
      ? customizer(object[key], source[key], key, object, source)
      : undefined;

    if (newValue === undefined) {
      newValue = source[key];
    }
    if (isNew) {
      baseAssignValue(object, key, newValue);
    } else {
      assignValue(object, key, newValue);
    }
  }
  return object;
}

module.exports = copyObject;


/***/ }),

/***/ "k+1r":
/***/ (function(module, exports, __webpack_require__) {

var getMapData = __webpack_require__("QkVE");

/**
 * Removes `key` and its value from the map.
 *
 * @private
 * @name delete
 * @memberOf MapCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function mapCacheDelete(key) {
  var result = getMapData(this, key)['delete'](key);
  this.size -= result ? 1 : 0;
  return result;
}

module.exports = mapCacheDelete;


/***/ }),

/***/ "kekF":
/***/ (function(module, exports) {

/**
 * Creates a unary function that invokes `func` with its argument transformed.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {Function} transform The argument transform.
 * @returns {Function} Returns the new function.
 */
function overArg(func, transform) {
  return function(arg) {
    return func(transform(arg));
  };
}

module.exports = overArg;


/***/ }),

/***/ "lSCD":
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__("NykK"),
    isObject = __webpack_require__("GoyQ");

/** `Object#toString` result references. */
var asyncTag = '[object AsyncFunction]',
    funcTag = '[object Function]',
    genTag = '[object GeneratorFunction]',
    proxyTag = '[object Proxy]';

/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 */
function isFunction(value) {
  if (!isObject(value)) {
    return false;
  }
  // The use of `Object#toString` avoids issues with the `typeof` operator
  // in Safari 9 which returns 'object' for typed arrays and other constructors.
  var tag = baseGetTag(value);
  return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
}

module.exports = isFunction;


/***/ }),

/***/ "ljhN":
/***/ (function(module, exports) {

/**
 * Performs a
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * comparison between two values to determine if they are equivalent.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'a': 1 };
 * var other = { 'a': 1 };
 *
 * _.eq(object, object);
 * // => true
 *
 * _.eq(object, other);
 * // => false
 *
 * _.eq('a', 'a');
 * // => true
 *
 * _.eq('a', Object('a'));
 * // => false
 *
 * _.eq(NaN, NaN);
 * // => true
 */
function eq(value, other) {
  return value === other || (value !== value && other !== other);
}

module.exports = eq;


/***/ }),

/***/ "ls82":
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var runtime = (function (exports) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  function define(obj, key, value) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
    return obj[key];
  }
  try {
    // IE 8 has a broken Object.defineProperty that only works on DOM objects.
    define({}, "");
  } catch (err) {
    define = function(obj, key, value) {
      return obj[key] = value;
    };
  }

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  exports.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  IteratorPrototype[iteratorSymbol] = function () {
    return this;
  };

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
  GeneratorFunctionPrototype.constructor = GeneratorFunction;
  GeneratorFunction.displayName = define(
    GeneratorFunctionPrototype,
    toStringTagSymbol,
    "GeneratorFunction"
  );

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      define(prototype, method, function(arg) {
        return this._invoke(method, arg);
      });
    });
  }

  exports.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  exports.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      define(genFun, toStringTagSymbol, "GeneratorFunction");
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  exports.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator, PromiseImpl) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return PromiseImpl.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return PromiseImpl.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration.
          result.value = unwrapped;
          resolve(result);
        }, function(error) {
          // If a rejected Promise was yielded, throw the rejection back
          // into the async generator function so it can be handled there.
          return invoke("throw", error, resolve, reject);
        });
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new PromiseImpl(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  AsyncIterator.prototype[asyncIteratorSymbol] = function () {
    return this;
  };
  exports.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  exports.async = function(innerFn, outerFn, self, tryLocsList, PromiseImpl) {
    if (PromiseImpl === void 0) PromiseImpl = Promise;

    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList),
      PromiseImpl
    );

    return exports.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        // Note: ["return"] must be used for ES3 parsing compatibility.
        if (delegate.iterator["return"]) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (! info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  define(Gp, toStringTagSymbol, "Generator");

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  Gp[iteratorSymbol] = function() {
    return this;
  };

  Gp.toString = function() {
    return "[object Generator]";
  };

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  exports.keys = function(object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  exports.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !! caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  };

  // Regardless of whether this script is executing as a CommonJS module
  // or not, return the runtime object so that we can declare the variable
  // regeneratorRuntime in the outer scope, which allows this module to be
  // injected easily by `bin/regenerator --include-runtime script.js`.
  return exports;

}(
  // If this script is executing as a CommonJS module, use module.exports
  // as the regeneratorRuntime namespace. Otherwise create a new empty
  // object. Either way, the resulting object will be used to initialize
  // the regeneratorRuntime variable at the top of this file.
   true ? module.exports : undefined
));

try {
  regeneratorRuntime = runtime;
} catch (accidentalStrictMode) {
  // This module should not be running in strict mode, so the above
  // assignment should always work unless something is misconfigured. Just
  // in case runtime.js accidentally runs in strict mode, we can escape
  // strict mode using a global Function call. This could conceivably fail
  // if a Content Security Policy forbids using Function, but in that case
  // the proper solution is to fix the accidental strict mode problem. If
  // you've misconfigured your bundler to force strict mode and applied a
  // CSP to forbid Function, and you're not willing to fix either of those
  // problems, please detail your unique predicament in a GitHub issue.
  Function("r", "regeneratorRuntime = r")(runtime);
}


/***/ }),

/***/ "mTTR":
/***/ (function(module, exports, __webpack_require__) {

var arrayLikeKeys = __webpack_require__("b80T"),
    baseKeysIn = __webpack_require__("QcOe"),
    isArrayLike = __webpack_require__("MMmD");

/**
 * Creates an array of the own and inherited enumerable property names of `object`.
 *
 * **Note:** Non-object values are coerced to objects.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.keysIn(new Foo);
 * // => ['a', 'b', 'c'] (iteration order is not guaranteed)
 */
function keysIn(object) {
  return isArrayLike(object) ? arrayLikeKeys(object, true) : baseKeysIn(object);
}

module.exports = keysIn;


/***/ }),

/***/ "mdPL":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {var freeGlobal = __webpack_require__("WFqU");

/** Detect free variable `exports`. */
var freeExports =  true && exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/** Detect free variable `process` from Node.js. */
var freeProcess = moduleExports && freeGlobal.process;

/** Used to access faster Node.js helpers. */
var nodeUtil = (function() {
  try {
    // Use `util.types` for Node.js 10+.
    var types = freeModule && freeModule.require && freeModule.require('util').types;

    if (types) {
      return types;
    }

    // Legacy `process.binding('util')` for Node.js < 10.
    return freeProcess && freeProcess.binding && freeProcess.binding('util');
  } catch (e) {}
}());

module.exports = nodeUtil;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("wYlg")(module)))

/***/ }),

/***/ "nFlj":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var has = Object.prototype.hasOwnProperty,
    undef;
/**
 * Decode a URI encoded string.
 *
 * @param {String} input The URI encoded string.
 * @returns {String|Null} The decoded string.
 * @api private
 */

function decode(input) {
  try {
    return decodeURIComponent(input.replace(/\+/g, ' '));
  } catch (e) {
    return null;
  }
}
/**
 * Attempts to encode a given input.
 *
 * @param {String} input The string that needs to be encoded.
 * @returns {String|Null} The encoded string.
 * @api private
 */


function encode(input) {
  try {
    return encodeURIComponent(input);
  } catch (e) {
    return null;
  }
}
/**
 * Simple query string parser.
 *
 * @param {String} query The query string that needs to be parsed.
 * @returns {Object}
 * @api public
 */


function querystring(query) {
  var parser = /([^=?#&]+)=?([^&]*)/g,
      result = {},
      part;

  while (part = parser.exec(query)) {
    var key = decode(part[1]),
        value = decode(part[2]); //
    // Prevent overriding of existing properties. This ensures that build-in
    // methods like `toString` or __proto__ are not overriden by malicious
    // querystrings.
    //
    // In the case if failed decoding, we want to omit the key/value pairs
    // from the result.
    //

    if (key === null || value === null || key in result) continue;
    result[key] = value;
  }

  return result;
}
/**
 * Transform a query string to an object.
 *
 * @param {Object} obj Object that should be transformed.
 * @param {String} prefix Optional prefix.
 * @returns {String}
 * @api public
 */


function querystringify(obj, prefix) {
  prefix = prefix || '';
  var pairs = [],
      value,
      key; //
  // Optionally prefix with a '?' if needed
  //

  if ('string' !== typeof prefix) prefix = '?';

  for (key in obj) {
    if (has.call(obj, key)) {
      value = obj[key]; //
      // Edge cases where we actually want to encode the value to an empty
      // string instead of the stringified value.
      //

      if (!value && (value === null || value === undef || isNaN(value))) {
        value = '';
      }

      key = encode(key);
      value = encode(value); //
      // If we failed to encode the strings, we should bail out as we don't
      // want to add invalid strings to the query.
      //

      if (key === null || value === null) continue;
      pairs.push(key + '=' + value);
    }
  }

  return pairs.length ? prefix + pairs.join('&') : '';
} //
// Expose the module.
//


exports.stringify = querystringify;
exports.parse = querystring;

/***/ }),

/***/ "nmnc":
/***/ (function(module, exports, __webpack_require__) {

var root = __webpack_require__("Kz5y");

/** Built-in value references. */
var Symbol = root.Symbol;

module.exports = Symbol;


/***/ }),

/***/ "o0o1":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("ls82");


/***/ }),

/***/ "oCl/":
/***/ (function(module, exports, __webpack_require__) {

var arrayPush = __webpack_require__("CH3K"),
    getPrototype = __webpack_require__("LcsW"),
    getSymbols = __webpack_require__("MvSz"),
    stubArray = __webpack_require__("0ycA");

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeGetSymbols = Object.getOwnPropertySymbols;

/**
 * Creates an array of the own and inherited enumerable symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of symbols.
 */
var getSymbolsIn = !nativeGetSymbols ? stubArray : function(object) {
  var result = [];
  while (object) {
    arrayPush(result, getSymbols(object));
    object = getPrototype(object);
  }
  return result;
};

module.exports = getSymbolsIn;


/***/ }),

/***/ "oShl":
/***/ (function(module, exports, __webpack_require__) {

var getPrototypeOf = __webpack_require__("Nsbk");

var setPrototypeOf = __webpack_require__("SksO");

var isNativeFunction = __webpack_require__("xfeJ");

var construct = __webpack_require__("sXyB");

function _wrapNativeSuper(Class) {
  var _cache = typeof Map === "function" ? new Map() : undefined;

  module.exports = _wrapNativeSuper = function _wrapNativeSuper(Class) {
    if (Class === null || !isNativeFunction(Class)) return Class;

    if (typeof Class !== "function") {
      throw new TypeError("Super expression must either be null or a function");
    }

    if (typeof _cache !== "undefined") {
      if (_cache.has(Class)) return _cache.get(Class);

      _cache.set(Class, Wrapper);
    }

    function Wrapper() {
      return construct(Class, arguments, getPrototypeOf(this).constructor);
    }

    Wrapper.prototype = Object.create(Class.prototype, {
      constructor: {
        value: Wrapper,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
    return setPrototypeOf(Wrapper, Class);
  };

  return _wrapNativeSuper(Class);
}

module.exports = _wrapNativeSuper;

/***/ }),

/***/ "otv/":
/***/ (function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__("nmnc");

/** Used to convert symbols to primitives and strings. */
var symbolProto = Symbol ? Symbol.prototype : undefined,
    symbolValueOf = symbolProto ? symbolProto.valueOf : undefined;

/**
 * Creates a clone of the `symbol` object.
 *
 * @private
 * @param {Object} symbol The symbol object to clone.
 * @returns {Object} Returns the cloned symbol object.
 */
function cloneSymbol(symbol) {
  return symbolValueOf ? Object(symbolValueOf.call(symbol)) : {};
}

module.exports = cloneSymbol;


/***/ }),

/***/ "pFRH":
/***/ (function(module, exports, __webpack_require__) {

var constant = __webpack_require__("cvCv"),
    defineProperty = __webpack_require__("O0oS"),
    identity = __webpack_require__("zZ0H");

/**
 * The base implementation of `setToString` without support for hot loop shorting.
 *
 * @private
 * @param {Function} func The function to modify.
 * @param {Function} string The `toString` result.
 * @returns {Function} Returns `func`.
 */
var baseSetToString = !defineProperty ? identity : function(func, string) {
  return defineProperty(func, 'toString', {
    'configurable': true,
    'enumerable': false,
    'value': constant(string),
    'writable': true
  });
};

module.exports = baseSetToString;


/***/ }),

/***/ "pSRY":
/***/ (function(module, exports, __webpack_require__) {

var getMapData = __webpack_require__("QkVE");

/**
 * Checks if a map value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf MapCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function mapCacheHas(key) {
  return getMapData(this, key).has(key);
}

module.exports = mapCacheHas;


/***/ }),

/***/ "qZTm":
/***/ (function(module, exports, __webpack_require__) {

var baseGetAllKeys = __webpack_require__("fR/l"),
    getSymbols = __webpack_require__("MvSz"),
    keys = __webpack_require__("7GkX");

/**
 * Creates an array of own enumerable property names and symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names and symbols.
 */
function getAllKeys(object) {
  return baseGetAllKeys(object, keys, getSymbols);
}

module.exports = getAllKeys;


/***/ }),

/***/ "sEf8":
/***/ (function(module, exports) {

/**
 * The base implementation of `_.unary` without support for storing metadata.
 *
 * @private
 * @param {Function} func The function to cap arguments for.
 * @returns {Function} Returns the new capped function.
 */
function baseUnary(func) {
  return function(value) {
    return func(value);
  };
}

module.exports = baseUnary;


/***/ }),

/***/ "sXyB":
/***/ (function(module, exports, __webpack_require__) {

var setPrototypeOf = __webpack_require__("SksO");

var isNativeReflectConstruct = __webpack_require__("b48C");

function _construct(Parent, args, Class) {
  if (isNativeReflectConstruct()) {
    module.exports = _construct = Reflect.construct;
  } else {
    module.exports = _construct = function _construct(Parent, args, Class) {
      var a = [null];
      a.push.apply(a, args);
      var Constructor = Function.bind.apply(Parent, a);
      var instance = new Constructor();
      if (Class) setPrototypeOf(instance, Class.prototype);
      return instance;
    };
  }

  return _construct.apply(null, arguments);
}

module.exports = _construct;

/***/ }),

/***/ "shjB":
/***/ (function(module, exports) {

/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER = 9007199254740991;

/**
 * Checks if `value` is a valid array-like length.
 *
 * **Note:** This method is loosely based on
 * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
 * @example
 *
 * _.isLength(3);
 * // => true
 *
 * _.isLength(Number.MIN_VALUE);
 * // => false
 *
 * _.isLength(Infinity);
 * // => false
 *
 * _.isLength('3');
 * // => false
 */
function isLength(value) {
  return typeof value == 'number' &&
    value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
}

module.exports = isLength;


/***/ }),

/***/ "tMB7":
/***/ (function(module, exports, __webpack_require__) {

var assocIndexOf = __webpack_require__("y1pI");

/**
 * Gets the list cache value for `key`.
 *
 * @private
 * @name get
 * @memberOf ListCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function listCacheGet(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  return index < 0 ? undefined : data[index][1];
}

module.exports = listCacheGet;


/***/ }),

/***/ "taVN":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/react-native-web/dist/exports/Platform/index.js
var Platform = __webpack_require__("XwJz");

// CONCATENATED MODULE: ./node_modules/@unimodules/react-native-adapter/build/environment/browser.web.js
var _window$document;

var isDOMAvailable = typeof window !== 'undefined' && !!((_window$document = window.document) == null ? void 0 : _window$document.createElement);
// CONCATENATED MODULE: ./node_modules/@unimodules/react-native-adapter/build/Platform.js


var Platform_Platform = {
  OS: Platform["a" /* default */].OS,
  select: Platform["a" /* default */].select,
  isDOMAvailable: isDOMAvailable
};
/* harmony default export */ var build_Platform = __webpack_exports__["a"] = (Platform_Platform);

/***/ }),

/***/ "tadb":
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__("Cwc5"),
    root = __webpack_require__("Kz5y");

/* Built-in method references that are verified to be native. */
var DataView = getNative(root, 'DataView');

module.exports = DataView;


/***/ }),

/***/ "u8Dt":
/***/ (function(module, exports, __webpack_require__) {

var nativeCreate = __webpack_require__("YESw");

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Gets the hash value for `key`.
 *
 * @private
 * @name get
 * @memberOf Hash
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function hashGet(key) {
  var data = this.__data__;
  if (nativeCreate) {
    var result = data[key];
    return result === HASH_UNDEFINED ? undefined : result;
  }
  return hasOwnProperty.call(data, key) ? data[key] : undefined;
}

module.exports = hashGet;


/***/ }),

/***/ "w/wX":
/***/ (function(module, exports, __webpack_require__) {

var getTag = __webpack_require__("QqLw"),
    isObjectLike = __webpack_require__("ExA7");

/** `Object#toString` result references. */
var setTag = '[object Set]';

/**
 * The base implementation of `_.isSet` without Node.js optimizations.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a set, else `false`.
 */
function baseIsSet(value) {
  return isObjectLike(value) && getTag(value) == setTag;
}

module.exports = baseIsSet;


/***/ }),

/***/ "wJg7":
/***/ (function(module, exports) {

/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER = 9007199254740991;

/** Used to detect unsigned integer values. */
var reIsUint = /^(?:0|[1-9]\d*)$/;

/**
 * Checks if `value` is a valid array-like index.
 *
 * @private
 * @param {*} value The value to check.
 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
 */
function isIndex(value, length) {
  var type = typeof value;
  length = length == null ? MAX_SAFE_INTEGER : length;

  return !!length &&
    (type == 'number' ||
      (type != 'symbol' && reIsUint.test(value))) &&
        (value > -1 && value % 1 == 0 && value < length);
}

module.exports = isIndex;


/***/ }),

/***/ "wclG":
/***/ (function(module, exports, __webpack_require__) {

var baseSetToString = __webpack_require__("pFRH"),
    shortOut = __webpack_require__("88Gu");

/**
 * Sets the `toString` method of `func` to return `string`.
 *
 * @private
 * @param {Function} func The function to modify.
 * @param {Function} string The `toString` result.
 * @returns {Function} Returns `func`.
 */
var setToString = shortOut(baseSetToString);

module.exports = setToString;


/***/ }),

/***/ "wrZu":
/***/ (function(module, exports, __webpack_require__) {

var cloneArrayBuffer = __webpack_require__("+K+b"),
    cloneDataView = __webpack_require__("XYm9"),
    cloneRegExp = __webpack_require__("b2z7"),
    cloneSymbol = __webpack_require__("otv/"),
    cloneTypedArray = __webpack_require__("yP5f");

/** `Object#toString` result references. */
var boolTag = '[object Boolean]',
    dateTag = '[object Date]',
    mapTag = '[object Map]',
    numberTag = '[object Number]',
    regexpTag = '[object RegExp]',
    setTag = '[object Set]',
    stringTag = '[object String]',
    symbolTag = '[object Symbol]';

var arrayBufferTag = '[object ArrayBuffer]',
    dataViewTag = '[object DataView]',
    float32Tag = '[object Float32Array]',
    float64Tag = '[object Float64Array]',
    int8Tag = '[object Int8Array]',
    int16Tag = '[object Int16Array]',
    int32Tag = '[object Int32Array]',
    uint8Tag = '[object Uint8Array]',
    uint8ClampedTag = '[object Uint8ClampedArray]',
    uint16Tag = '[object Uint16Array]',
    uint32Tag = '[object Uint32Array]';

/**
 * Initializes an object clone based on its `toStringTag`.
 *
 * **Note:** This function only supports cloning values with tags of
 * `Boolean`, `Date`, `Error`, `Map`, `Number`, `RegExp`, `Set`, or `String`.
 *
 * @private
 * @param {Object} object The object to clone.
 * @param {string} tag The `toStringTag` of the object to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the initialized clone.
 */
function initCloneByTag(object, tag, isDeep) {
  var Ctor = object.constructor;
  switch (tag) {
    case arrayBufferTag:
      return cloneArrayBuffer(object);

    case boolTag:
    case dateTag:
      return new Ctor(+object);

    case dataViewTag:
      return cloneDataView(object, isDeep);

    case float32Tag: case float64Tag:
    case int8Tag: case int16Tag: case int32Tag:
    case uint8Tag: case uint8ClampedTag: case uint16Tag: case uint32Tag:
      return cloneTypedArray(object, isDeep);

    case mapTag:
      return new Ctor;

    case numberTag:
    case stringTag:
      return new Ctor(object);

    case regexpTag:
      return cloneRegExp(object);

    case setTag:
      return new Ctor;

    case symbolTag:
      return cloneSymbol(object);
  }
}

module.exports = initCloneByTag;


/***/ }),

/***/ "xfeJ":
/***/ (function(module, exports) {

function _isNativeFunction(fn) {
  return Function.toString.call(fn).indexOf("[native code]") !== -1;
}

module.exports = _isNativeFunction;

/***/ }),

/***/ "xs/l":
/***/ (function(module, exports, __webpack_require__) {

var flatten = __webpack_require__("TYy9"),
    overRest = __webpack_require__("Ioao"),
    setToString = __webpack_require__("wclG");

/**
 * A specialized version of `baseRest` which flattens the rest array.
 *
 * @private
 * @param {Function} func The function to apply a rest parameter to.
 * @returns {Function} Returns the new function.
 */
function flatRest(func) {
  return setToString(overRest(func, undefined, flatten), func + '');
}

module.exports = flatRest;


/***/ }),

/***/ "y1pI":
/***/ (function(module, exports, __webpack_require__) {

var eq = __webpack_require__("ljhN");

/**
 * Gets the index at which the `key` is found in `array` of key-value pairs.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} key The key to search for.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function assocIndexOf(array, key) {
  var length = array.length;
  while (length--) {
    if (eq(array[length][0], key)) {
      return length;
    }
  }
  return -1;
}

module.exports = assocIndexOf;


/***/ }),

/***/ "yGk4":
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__("Cwc5"),
    root = __webpack_require__("Kz5y");

/* Built-in method references that are verified to be native. */
var Set = getNative(root, 'Set');

module.exports = Set;


/***/ }),

/***/ "yHx3":
/***/ (function(module, exports) {

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Initializes an array clone.
 *
 * @private
 * @param {Array} array The array to clone.
 * @returns {Array} Returns the initialized clone.
 */
function initCloneArray(array) {
  var length = array.length,
      result = new array.constructor(length);

  // Add properties assigned by `RegExp#exec`.
  if (length && typeof array[0] == 'string' && hasOwnProperty.call(array, 'index')) {
    result.index = array.index;
    result.input = array.input;
  }
  return result;
}

module.exports = initCloneArray;


/***/ }),

/***/ "yNLB":
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__("0Dky");
var whitespaces = __webpack_require__("WJkJ");

var non = '\u200B\u0085\u180E';

// check that a method works with the correct list
// of whitespaces and has a correct name
module.exports = function (METHOD_NAME) {
  return fails(function () {
    return !!whitespaces[METHOD_NAME]() || non[METHOD_NAME]() != non || whitespaces[METHOD_NAME].name !== METHOD_NAME;
  });
};


/***/ }),

/***/ "yP5f":
/***/ (function(module, exports, __webpack_require__) {

var cloneArrayBuffer = __webpack_require__("+K+b");

/**
 * Creates a clone of `typedArray`.
 *
 * @private
 * @param {Object} typedArray The typed array to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the cloned typed array.
 */
function cloneTypedArray(typedArray, isDeep) {
  var buffer = isDeep ? cloneArrayBuffer(typedArray.buffer) : typedArray.buffer;
  return new typedArray.constructor(buffer, typedArray.byteOffset, typedArray.length);
}

module.exports = cloneTypedArray;


/***/ }),

/***/ "zEVN":
/***/ (function(module, exports, __webpack_require__) {

var baseIsMap = __webpack_require__("Gi0A"),
    baseUnary = __webpack_require__("sEf8"),
    nodeUtil = __webpack_require__("mdPL");

/* Node.js helper references. */
var nodeIsMap = nodeUtil && nodeUtil.isMap;

/**
 * Checks if `value` is classified as a `Map` object.
 *
 * @static
 * @memberOf _
 * @since 4.3.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a map, else `false`.
 * @example
 *
 * _.isMap(new Map);
 * // => true
 *
 * _.isMap(new WeakMap);
 * // => false
 */
var isMap = nodeIsMap ? baseUnary(nodeIsMap) : baseIsMap;

module.exports = isMap;


/***/ }),

/***/ "zZ0H":
/***/ (function(module, exports) {

/**
 * This method returns the first argument it receives.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Util
 * @param {*} value Any value.
 * @returns {*} Returns `value`.
 * @example
 *
 * var object = { 'a': 1 };
 *
 * console.log(_.identity(object) === object);
 * // => true
 */
function identity(value) {
  return value;
}

module.exports = identity;


/***/ }),

/***/ "zoYe":
/***/ (function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__("nmnc"),
    arrayMap = __webpack_require__("eUgh"),
    isArray = __webpack_require__("Z0cm"),
    isSymbol = __webpack_require__("/9aa");

/** Used as references for various `Number` constants. */
var INFINITY = 1 / 0;

/** Used to convert symbols to primitives and strings. */
var symbolProto = Symbol ? Symbol.prototype : undefined,
    symbolToString = symbolProto ? symbolProto.toString : undefined;

/**
 * The base implementation of `_.toString` which doesn't convert nullish
 * values to empty strings.
 *
 * @private
 * @param {*} value The value to process.
 * @returns {string} Returns the string.
 */
function baseToString(value) {
  // Exit early for strings to avoid a performance hit in some environments.
  if (typeof value == 'string') {
    return value;
  }
  if (isArray(value)) {
    // Recursively convert values (susceptible to call stack limits).
    return arrayMap(value, baseToString) + '';
  }
  if (isSymbol(value)) {
    return symbolToString ? symbolToString.call(value) : '';
  }
  var result = (value + '');
  return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
}

module.exports = baseToString;


/***/ })

}]);
//# sourceMappingURL=11-c641f23eabcecdd70c9e.js.map