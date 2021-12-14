(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[7],{

/***/ "+ZDr":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var _interopRequireDefault=__webpack_require__("TqRt");exports.__esModule=true;exports.withPrefix=withPrefix;exports.withAssetPrefix=withAssetPrefix;exports.navigateTo=exports.replace=exports.push=exports.navigate=exports.default=void 0;var _objectWithoutPropertiesLoose2=_interopRequireDefault(__webpack_require__("8OQS"));var _assertThisInitialized2=_interopRequireDefault(__webpack_require__("PJYZ"));var _inheritsLoose2=_interopRequireDefault(__webpack_require__("VbXa"));var _extends2=_interopRequireDefault(__webpack_require__("pVnL"));var _propTypes=_interopRequireDefault(__webpack_require__("17x9"));var _react=_interopRequireDefault(__webpack_require__("q1tI"));var _router=__webpack_require__("YwZP");var _utils=__webpack_require__("LYrO");var _parsePath=__webpack_require__("cu4x");exports.parsePath=_parsePath.parsePath;var isAbsolutePath=function isAbsolutePath(path){return path===null||path===void 0?void 0:path.startsWith("/");};function withPrefix(path,prefix){var _ref,_prefix;if(prefix===void 0){prefix=getGlobalBasePrefix();}if(!isLocalLink(path)){return path;}if(path.startsWith("./")||path.startsWith("../")){return path;}var base=(_ref=(_prefix=prefix)!==null&&_prefix!==void 0?_prefix:getGlobalPathPrefix())!==null&&_ref!==void 0?_ref:"/";return""+((base===null||base===void 0?void 0:base.endsWith("/"))?base.slice(0,-1):base)+(path.startsWith("/")?path:"/"+path);}var getGlobalPathPrefix=function getGlobalPathPrefix(){return  false?undefined:"";};var getGlobalBasePrefix=function getGlobalBasePrefix(){return  false?undefined:"";};var isLocalLink=function isLocalLink(path){return path&&!path.startsWith("http://")&&!path.startsWith("https://")&&!path.startsWith("//");};function withAssetPrefix(path){return withPrefix(path,getGlobalPathPrefix());}function absolutify(path,current){if(isAbsolutePath(path)){return path;}return(0,_utils.resolve)(path,current);}var rewriteLinkPath=function rewriteLinkPath(path,relativeTo){if(typeof path==="number"){return path;}if(!isLocalLink(path)){return path;}return isAbsolutePath(path)?withPrefix(path):absolutify(path,relativeTo);};var NavLinkPropTypes={activeClassName:_propTypes.default.string,activeStyle:_propTypes.default.object,partiallyActive:_propTypes.default.bool};var createIntersectionObserver=function createIntersectionObserver(el,cb){var io=new window.IntersectionObserver(function(entries){entries.forEach(function(entry){if(el===entry.target){if(entry.isIntersecting||entry.intersectionRatio>0){io.unobserve(el);io.disconnect();cb();}}});});io.observe(el);return{instance:io,el:el};};function GatsbyLinkLocationWrapper(props){return _react.default.createElement(_router.Location,null,function(_ref2){var location=_ref2.location;return _react.default.createElement(GatsbyLink,(0,_extends2.default)({},props,{_location:location}));});}var GatsbyLink=function(_React$Component){(0,_inheritsLoose2.default)(GatsbyLink,_React$Component);function GatsbyLink(props){var _this;_this=_React$Component.call(this,props)||this;_this.defaultGetProps=function(_ref3){var isPartiallyCurrent=_ref3.isPartiallyCurrent,isCurrent=_ref3.isCurrent;if(_this.props.partiallyActive?isPartiallyCurrent:isCurrent){return{className:[_this.props.className,_this.props.activeClassName].filter(Boolean).join(" "),style:(0,_extends2.default)({},_this.props.style,_this.props.activeStyle)};}return null;};var IOSupported=false;if(typeof window!=="undefined"&&window.IntersectionObserver){IOSupported=true;}_this.state={IOSupported:IOSupported};_this.handleRef=_this.handleRef.bind((0,_assertThisInitialized2.default)(_this));return _this;}var _proto=GatsbyLink.prototype;_proto._prefetch=function _prefetch(){var currentPath=window.location.pathname;if(this.props._location&&this.props._location.pathname){currentPath=this.props._location.pathname;}var rewrittenPath=rewriteLinkPath(this.props.to,currentPath);var newPathName=(0,_parsePath.parsePath)(rewrittenPath).pathname;if(currentPath!==newPathName){___loader.enqueue(newPathName);}};_proto.componentDidUpdate=function componentDidUpdate(prevProps,prevState){if(this.props.to!==prevProps.to&&!this.state.IOSupported){this._prefetch();}};_proto.componentDidMount=function componentDidMount(){if(!this.state.IOSupported){this._prefetch();}};_proto.componentWillUnmount=function componentWillUnmount(){if(!this.io){return;}var _this$io=this.io,instance=_this$io.instance,el=_this$io.el;instance.unobserve(el);instance.disconnect();};_proto.handleRef=function handleRef(ref){var _this2=this;if(this.props.innerRef&&this.props.innerRef.hasOwnProperty("current")){this.props.innerRef.current=ref;}else if(this.props.innerRef){this.props.innerRef(ref);}if(this.state.IOSupported&&ref){this.io=createIntersectionObserver(ref,function(){_this2._prefetch();});}};_proto.render=function render(){var _this3=this;var _this$props=this.props,to=_this$props.to,_this$props$getProps=_this$props.getProps,getProps=_this$props$getProps===void 0?this.defaultGetProps:_this$props$getProps,_onClick=_this$props.onClick,_onMouseEnter=_this$props.onMouseEnter,$activeClassName=_this$props.activeClassName,$activeStyle=_this$props.activeStyle,$innerRef=_this$props.innerRef,partiallyActive=_this$props.partiallyActive,state=_this$props.state,replace=_this$props.replace,_location=_this$props._location,rest=(0,_objectWithoutPropertiesLoose2.default)(_this$props,["to","getProps","onClick","onMouseEnter","activeClassName","activeStyle","innerRef","partiallyActive","state","replace","_location"]);if(false){}var prefixedTo=rewriteLinkPath(to,_location.pathname);if(!isLocalLink(prefixedTo)){return _react.default.createElement("a",(0,_extends2.default)({href:prefixedTo},rest));}return _react.default.createElement(_router.Link,(0,_extends2.default)({to:prefixedTo,state:state,getProps:getProps,innerRef:this.handleRef,onMouseEnter:function onMouseEnter(e){if(_onMouseEnter){_onMouseEnter(e);}___loader.hovering((0,_parsePath.parsePath)(prefixedTo).pathname);},onClick:function onClick(e){if(_onClick){_onClick(e);}if(e.button===0&&!_this3.props.target&&!e.defaultPrevented&&!e.metaKey&&!e.altKey&&!e.ctrlKey&&!e.shiftKey){e.preventDefault();var shouldReplace=replace;var isCurrent=encodeURI(prefixedTo)===_location.pathname;if(typeof replace!=="boolean"&&isCurrent){shouldReplace=true;}window.___navigate(prefixedTo,{state:state,replace:shouldReplace});}return true;}},rest));};return GatsbyLink;}(_react.default.Component);GatsbyLink.propTypes=(0,_extends2.default)({},NavLinkPropTypes,{onClick:_propTypes.default.func,to:_propTypes.default.string.isRequired,replace:_propTypes.default.bool,state:_propTypes.default.object});var showDeprecationWarning=function showDeprecationWarning(functionName,altFunctionName,version){return console.warn("The \""+functionName+"\" method is now deprecated and will be removed in Gatsby v"+version+". Please use \""+altFunctionName+"\" instead.");};var _default=_react.default.forwardRef(function(props,ref){return _react.default.createElement(GatsbyLinkLocationWrapper,(0,_extends2.default)({innerRef:ref},props));});exports.default=_default;var navigate=function navigate(to,options){window.___navigate(rewriteLinkPath(to,window.location.pathname),options);};exports.navigate=navigate;var push=function push(to){showDeprecationWarning("push","navigate",3);window.___push(rewriteLinkPath(to,window.location.pathname));};exports.push=push;var replace=function replace(to){showDeprecationWarning("replace","navigate",3);window.___replace(rewriteLinkPath(to,window.location.pathname));};exports.replace=replace;var navigateTo=function navigateTo(to){showDeprecationWarning("navigateTo","navigate",3);return push(to);};exports.navigateTo=navigateTo;

/***/ }),

/***/ "+mtM":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var normalize_css_color__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("FJcI");
/* harmony import */ var normalize_css_color__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(normalize_css_color__WEBPACK_IMPORTED_MODULE_0__);


var processColor = function processColor(color) {
  if (color === undefined || color === null) {
    return color;
  }

  var int32Color = normalize_css_color__WEBPACK_IMPORTED_MODULE_0___default()(color);

  if (int32Color === undefined || int32Color === null) {
    return undefined;
  }

  int32Color = (int32Color << 24 | int32Color >>> 8) >>> 0;
  return int32Color;
};

/* harmony default export */ __webpack_exports__["a"] = (processColor);

/***/ }),

/***/ "/CgH":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = createPrefixer;

var _prefixProperty = __webpack_require__("buI2");

var _prefixProperty2 = _interopRequireDefault(_prefixProperty);

var _prefixValue = __webpack_require__("zCBb");

var _prefixValue2 = _interopRequireDefault(_prefixValue);

var _addNewValuesOnly = __webpack_require__("169X");

var _addNewValuesOnly2 = _interopRequireDefault(_addNewValuesOnly);

var _isObject = __webpack_require__("W2jg");

var _isObject2 = _interopRequireDefault(_isObject);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

function createPrefixer(_ref) {
  var prefixMap = _ref.prefixMap,
      plugins = _ref.plugins;
  return function prefix(style) {
    for (var property in style) {
      var value = style[property]; // handle nested objects

      if ((0, _isObject2.default)(value)) {
        style[property] = prefix(value); // handle array values
      } else if (Array.isArray(value)) {
        var combinedValue = [];

        for (var i = 0, len = value.length; i < len; ++i) {
          var processedValue = (0, _prefixValue2.default)(plugins, property, value[i], style, prefixMap);
          (0, _addNewValuesOnly2.default)(combinedValue, processedValue || value[i]);
        } // only modify the value if it was touched
        // by any plugin to prevent unnecessary mutations


        if (combinedValue.length > 0) {
          style[property] = combinedValue;
        }
      } else {
        var _processedValue = (0, _prefixValue2.default)(plugins, property, value, style, prefixMap); // only modify the value if it was touched
        // by any plugin to prevent unnecessary mutations


        if (_processedValue) {
          style[property] = _processedValue;
        }

        style = (0, _prefixProperty2.default)(prefixMap, property, style);
      }
    }

    return style;
  };
}

/***/ }),

/***/ "/GqU":
/***/ (function(module, exports, __webpack_require__) {

// toObject with fallback for non-array-like ES3 strings
var IndexedObject = __webpack_require__("RK3t");
var requireObjectCoercible = __webpack_require__("HYAF");

module.exports = function (it) {
  return IndexedObject(requireObjectCoercible(it));
};


/***/ }),

/***/ "/hTd":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.SessionStorage = void 0;
var STATE_KEY_PREFIX = "@@scroll|";
var GATSBY_ROUTER_SCROLL_STATE = "___GATSBY_REACT_ROUTER_SCROLL";

var SessionStorage = /*#__PURE__*/function () {
  function SessionStorage() {}

  var _proto = SessionStorage.prototype;

  _proto.read = function read(location, key) {
    var stateKey = this.getStateKey(location, key);

    try {
      var value = window.sessionStorage.getItem(stateKey);
      return value ? JSON.parse(value) : 0;
    } catch (e) {
      if (false) {}

      if (window && window[GATSBY_ROUTER_SCROLL_STATE] && window[GATSBY_ROUTER_SCROLL_STATE][stateKey]) {
        return window[GATSBY_ROUTER_SCROLL_STATE][stateKey];
      }

      return 0;
    }
  };

  _proto.save = function save(location, key, value) {
    var stateKey = this.getStateKey(location, key);
    var storedValue = JSON.stringify(value);

    try {
      window.sessionStorage.setItem(stateKey, storedValue);
    } catch (e) {
      if (window && window[GATSBY_ROUTER_SCROLL_STATE]) {
        window[GATSBY_ROUTER_SCROLL_STATE][stateKey] = JSON.parse(storedValue);
      } else {
        window[GATSBY_ROUTER_SCROLL_STATE] = {};
        window[GATSBY_ROUTER_SCROLL_STATE][stateKey] = JSON.parse(storedValue);
      }

      if (false) {}
    }
  };

  _proto.getStateKey = function getStateKey(location, key) {
    var stateKeyBase = "" + STATE_KEY_PREFIX + location.pathname;
    return key === null || typeof key === "undefined" ? stateKeyBase : stateKeyBase + "|" + key;
  };

  return SessionStorage;
}();

exports.SessionStorage = SessionStorage;

/***/ }),

/***/ "0BK2":
/***/ (function(module, exports) {

module.exports = {};


/***/ }),

/***/ "0Dky":
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (error) {
    return true;
  }
};


/***/ }),

/***/ "0GbY":
/***/ (function(module, exports, __webpack_require__) {

var path = __webpack_require__("Qo9l");
var global = __webpack_require__("2oRo");

var aFunction = function (variable) {
  return typeof variable == 'function' ? variable : undefined;
};

module.exports = function (namespace, method) {
  return arguments.length < 2 ? aFunction(path[namespace]) || aFunction(global[namespace])
    : path[namespace] && path[namespace][method] || global[namespace] && global[namespace][method];
};


/***/ }),

/***/ "0eef":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var nativePropertyIsEnumerable = {}.propertyIsEnumerable;
var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;

// Nashorn ~ JDK8 bug
var NASHORN_BUG = getOwnPropertyDescriptor && !nativePropertyIsEnumerable.call({ 1: 2 }, 1);

// `Object.prototype.propertyIsEnumerable` method implementation
// https://tc39.es/ecma262/#sec-object.prototype.propertyisenumerable
exports.f = NASHORN_BUG ? function propertyIsEnumerable(V) {
  var descriptor = getOwnPropertyDescriptor(this, V);
  return !!descriptor && descriptor.enumerable;
} : nativePropertyIsEnumerable;


/***/ }),

/***/ "169X":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = addNewValuesOnly;

function addIfNew(list, value) {
  if (list.indexOf(value) === -1) {
    list.push(value);
  }
}

function addNewValuesOnly(list, values) {
  if (Array.isArray(values)) {
    for (var i = 0, len = values.length; i < len; ++i) {
      addIfNew(list, values[i]);
    }
  } else {
    addIfNew(list, values);
  }
}

/***/ }),

/***/ "17SF":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var _interopRequireDefault=__webpack_require__("TqRt");var _interopRequireWildcard2=_interopRequireDefault(__webpack_require__("284h"));var routes=/(confirmation|invite|recovery|email_change)_token=([^&]+)/;var errorRoute=/error=access_denied&error_description=403/;var accessTokenRoute=/access_token=/;exports.onInitialClientRender=function(_,_ref){var _ref$enableIdentityWi=_ref.enableIdentityWidget,enableIdentityWidget=_ref$enableIdentityWi===void 0?true:_ref$enableIdentityWi,_ref$publicPath=_ref.publicPath,publicPath=_ref$publicPath===void 0?"admin":_ref$publicPath;var hash=(document.location.hash||"").replace(/^#\/?/,"");if(enableIdentityWidget&&(routes.test(hash)||errorRoute.test(hash)||accessTokenRoute.test(hash))){Promise.resolve().then(function(){return(0,_interopRequireWildcard2.default)(__webpack_require__("lI74"));}).then(function(_ref2){var netlifyIdentityWidget=_ref2.default;netlifyIdentityWidget.on("init",function(user){if(!user){netlifyIdentityWidget.on("login",function(){document.location.href=""+"/"+publicPath+"/";});}});netlifyIdentityWidget.init();});}};

/***/ }),

/***/ "1Y/n":
/***/ (function(module, exports, __webpack_require__) {

var aFunction = __webpack_require__("HAuM");
var toObject = __webpack_require__("ewvW");
var IndexedObject = __webpack_require__("RK3t");
var toLength = __webpack_require__("UMSQ");

// `Array.prototype.{ reduce, reduceRight }` methods implementation
var createMethod = function (IS_RIGHT) {
  return function (that, callbackfn, argumentsLength, memo) {
    aFunction(callbackfn);
    var O = toObject(that);
    var self = IndexedObject(O);
    var length = toLength(O.length);
    var index = IS_RIGHT ? length - 1 : 0;
    var i = IS_RIGHT ? -1 : 1;
    if (argumentsLength < 2) while (true) {
      if (index in self) {
        memo = self[index];
        index += i;
        break;
      }
      index += i;
      if (IS_RIGHT ? index < 0 : length <= index) {
        throw TypeError('Reduce of empty array with no initial value');
      }
    }
    for (;IS_RIGHT ? index >= 0 : length > index; index += i) if (index in self) {
      memo = callbackfn(memo, self[index], index, O);
    }
    return memo;
  };
};

module.exports = {
  // `Array.prototype.reduce` method
  // https://tc39.es/ecma262/#sec-array.prototype.reduce
  left: createMethod(false),
  // `Array.prototype.reduceRight` method
  // https://tc39.es/ecma262/#sec-array.prototype.reduceright
  right: createMethod(true)
};


/***/ }),

/***/ "284h":
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__("cDf5");

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function _getRequireWildcardCache() {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
    return {
      "default": obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj["default"] = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

module.exports = _interopRequireWildcard;

/***/ }),

/***/ "2NuI":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */


var validateFormat =  false ? undefined : function (format) {
  if (format === undefined) {
    throw new Error('invariant(...): Second argument must be a string.');
  }
};
/**
 * Use invariant() to assert state which your program assumes to be true.
 *
 * Provide sprintf-style format (only %s is supported) and arguments to provide
 * information about what broke and what you were expecting.
 *
 * The invariant message will be stripped in production, but the invariant will
 * remain to ensure logic does not differ in production.
 */

function invariant(condition, format) {
  for (var _len = arguments.length, args = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
    args[_key - 2] = arguments[_key];
  }

  validateFormat(format);

  if (!condition) {
    var error;

    if (format === undefined) {
      error = new Error('Minified exception occurred; use the non-minified dev environment ' + 'for the full error message and additional helpful warnings.');
    } else {
      var argIndex = 0;
      error = new Error(format.replace(/%s/g, function () {
        return String(args[argIndex++]);
      }));
      error.name = 'Invariant Violation';
    }

    error.framesToPop = 1; // Skip invariant's own stack frame.

    throw error;
  }
}

module.exports = invariant;

/***/ }),

/***/ "2Tnd":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray = function () {
  function sliceIterator(arr, i) {
    var _arr = [];
    var _n = true;
    var _d = false;
    var _e = undefined;

    try {
      for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
        _arr.push(_s.value);

        if (i && _arr.length === i) break;
      }
    } catch (err) {
      _d = true;
      _e = err;
    } finally {
      try {
        if (!_n && _i["return"]) _i["return"]();
      } finally {
        if (_d) throw _e;
      }
    }

    return _arr;
  }

  return function (arr, i) {
    if (Array.isArray(arr)) {
      return arr;
    } else if (Symbol.iterator in Object(arr)) {
      return sliceIterator(arr, i);
    } else {
      throw new TypeError("Invalid attempt to destructure non-iterable instance");
    }
  };
}();

exports.default = grid;

function isSimplePositionValue(value) {
  return typeof value === 'number' && !isNaN(value);
}

function isComplexSpanValue(value) {
  return typeof value === 'string' && value.includes('/');
}

var alignmentValues = ['center', 'end', 'start', 'stretch'];
var displayValues = {
  'inline-grid': ['-ms-inline-grid', 'inline-grid'],
  grid: ['-ms-grid', 'grid']
};
var propertyConverters = {
  alignSelf: function alignSelf(value, style) {
    if (alignmentValues.indexOf(value) > -1) {
      style.msGridRowAlign = value;
    }
  },
  gridColumn: function gridColumn(value, style) {
    if (isSimplePositionValue(value)) {
      style.msGridColumn = value;
    } else if (isComplexSpanValue(value)) {
      var _value$split = value.split('/'),
          _value$split2 = _slicedToArray(_value$split, 2),
          start = _value$split2[0],
          end = _value$split2[1];

      propertyConverters.gridColumnStart(+start, style);

      var _end$split = end.split(/ ?span /),
          _end$split2 = _slicedToArray(_end$split, 2),
          maybeSpan = _end$split2[0],
          maybeNumber = _end$split2[1];

      if (maybeSpan === '') {
        propertyConverters.gridColumnEnd(+start + +maybeNumber, style);
      } else {
        propertyConverters.gridColumnEnd(+end, style);
      }
    } else {
      propertyConverters.gridColumnStart(value, style);
    }
  },
  gridColumnEnd: function gridColumnEnd(value, style) {
    var msGridColumn = style.msGridColumn;

    if (isSimplePositionValue(value) && isSimplePositionValue(msGridColumn)) {
      style.msGridColumnSpan = value - msGridColumn;
    }
  },
  gridColumnStart: function gridColumnStart(value, style) {
    if (isSimplePositionValue(value)) {
      style.msGridColumn = value;
    }
  },
  gridRow: function gridRow(value, style) {
    if (isSimplePositionValue(value)) {
      style.msGridRow = value;
    } else if (isComplexSpanValue(value)) {
      var _value$split3 = value.split('/'),
          _value$split4 = _slicedToArray(_value$split3, 2),
          start = _value$split4[0],
          end = _value$split4[1];

      propertyConverters.gridRowStart(+start, style);

      var _end$split3 = end.split(/ ?span /),
          _end$split4 = _slicedToArray(_end$split3, 2),
          maybeSpan = _end$split4[0],
          maybeNumber = _end$split4[1];

      if (maybeSpan === '') {
        propertyConverters.gridRowEnd(+start + +maybeNumber, style);
      } else {
        propertyConverters.gridRowEnd(+end, style);
      }
    } else {
      propertyConverters.gridRowStart(value, style);
    }
  },
  gridRowEnd: function gridRowEnd(value, style) {
    var msGridRow = style.msGridRow;

    if (isSimplePositionValue(value) && isSimplePositionValue(msGridRow)) {
      style.msGridRowSpan = value - msGridRow;
    }
  },
  gridRowStart: function gridRowStart(value, style) {
    if (isSimplePositionValue(value)) {
      style.msGridRow = value;
    }
  },
  gridTemplateColumns: function gridTemplateColumns(value, style) {
    style.msGridColumns = value;
  },
  gridTemplateRows: function gridTemplateRows(value, style) {
    style.msGridRows = value;
  },
  justifySelf: function justifySelf(value, style) {
    if (alignmentValues.indexOf(value) > -1) {
      style.msGridColumnAlign = value;
    }
  }
};

function grid(property, value, style) {
  if (property === 'display' && value in displayValues) {
    return displayValues[value];
  }

  if (property in propertyConverters) {
    var propertyConverter = propertyConverters[property];
    propertyConverter(value, style);
  }
}

/***/ }),

/***/ "2oRo":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var check = function (it) {
  return it && it.Math == Math && it;
};

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
module.exports =
  // eslint-disable-next-line no-undef
  check(typeof globalThis == 'object' && globalThis) ||
  check(typeof window == 'object' && window) ||
  check(typeof self == 'object' && self) ||
  check(typeof global == 'object' && global) ||
  // eslint-disable-next-line no-new-func
  (function () { return this; })() || Function('return this')();

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("eKGF")))

/***/ }),

/***/ "30RF":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "d", function() { return /* binding */ setMatchPaths; });
__webpack_require__.d(__webpack_exports__, "a", function() { return /* binding */ find_path_findMatchPath; });
__webpack_require__.d(__webpack_exports__, "c", function() { return /* binding */ find_path_grabMatchParams; });
__webpack_require__.d(__webpack_exports__, "b", function() { return /* binding */ findPath; });

// UNUSED EXPORTS: cleanPath

// EXTERNAL MODULE: ./node_modules/@reach/router/es/lib/utils.js
var utils = __webpack_require__("LYrO");

// EXTERNAL MODULE: ./.cache/strip-prefix.js
var strip_prefix = __webpack_require__("cSJ8");

// CONCATENATED MODULE: ./.cache/normalize-page-path.js
/* harmony default export */ var normalize_page_path = (function(path){if(path===undefined){return path;}if(path==="/"){return"/";}if(path.charAt(path.length-1)==="/"){return path.slice(0,-1);}return path;});
// CONCATENATED MODULE: ./.cache/find-path.js
var pathCache=new Map();var matchPaths=[];var find_path_trimPathname=function trimPathname(rawPathname){var pathname=decodeURIComponent(rawPathname);var trimmedPathname=Object(strip_prefix["a" /* default */])(pathname,"").split("#")[0].split("?")[0];return trimmedPathname;};function absolutify(path){if(path.startsWith("/")||path.startsWith("https://")||path.startsWith("http://")){return path;}return new URL(path,window.location.href+(window.location.href.endsWith("/")?"":"/")).pathname;}var setMatchPaths=function setMatchPaths(value){matchPaths=value;};var find_path_findMatchPath=function findMatchPath(rawPathname){var trimmedPathname=find_path_cleanPath(rawPathname);var pickPaths=matchPaths.map(function(_ref){var path=_ref.path,matchPath=_ref.matchPath;return{path:matchPath,originalPath:path};});var path=Object(utils["pick"])(pickPaths,trimmedPathname);if(path){return normalize_page_path(path.route.originalPath);}return null;};var find_path_grabMatchParams=function grabMatchParams(rawPathname){var trimmedPathname=find_path_cleanPath(rawPathname);var pickPaths=matchPaths.map(function(_ref2){var path=_ref2.path,matchPath=_ref2.matchPath;return{path:matchPath,originalPath:path};});var path=Object(utils["pick"])(pickPaths,trimmedPathname);if(path){return path.params;}return{};};var findPath=function findPath(rawPathname){var trimmedPathname=find_path_trimPathname(absolutify(rawPathname));if(pathCache.has(trimmedPathname)){return pathCache.get(trimmedPathname);}var foundPath=find_path_findMatchPath(trimmedPathname);if(!foundPath){foundPath=find_path_cleanPath(rawPathname);}pathCache.set(trimmedPathname,foundPath);return foundPath;};var find_path_cleanPath=function cleanPath(rawPathname){var trimmedPathname=find_path_trimPathname(absolutify(rawPathname));var foundPath=trimmedPathname;if(foundPath==="/index.html"){foundPath="/";}foundPath=normalize_page_path(foundPath);return foundPath;};

/***/ }),

/***/ "3uz+":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.useScrollRestoration = useScrollRestoration;

var _scrollHandler = __webpack_require__("Enzk");

var _react = __webpack_require__("q1tI");

var _router = __webpack_require__("YwZP");

function useScrollRestoration(identifier) {
  var location = (0, _router.useLocation)();
  var state = (0, _react.useContext)(_scrollHandler.ScrollContext);
  var ref = (0, _react.useRef)();
  (0, _react.useLayoutEffect)(function () {
    if (ref.current) {
      var position = state.read(location, identifier);
      ref.current.scrollTo(0, position || 0);
    }
  }, []);
  return {
    ref: ref,
    onScroll: function onScroll() {
      if (ref.current) {
        state.save(location, identifier, ref.current.scrollTop);
      }
    }
  };
}

/***/ }),

/***/ "3vXJ":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = flex;
var values = {
  flex: ['-webkit-box', '-moz-box', '-ms-flexbox', '-webkit-flex', 'flex'],
  'inline-flex': ['-webkit-inline-box', '-moz-inline-box', '-ms-inline-flexbox', '-webkit-inline-flex', 'inline-flex']
};

function flex(property, value) {
  if (property === 'display' && values.hasOwnProperty(value)) {
    return values[value];
  }
}

/***/ }),

/***/ "56YO":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/react-native-web/dist/modules/getBoundingClientRect/index.js
var getBoundingClientRect = __webpack_require__("Q/JM");

// EXTERNAL MODULE: ./node_modules/react-native-web/dist/modules/unitlessNumbers/index.js
var unitlessNumbers = __webpack_require__("ou6r");

// CONCATENATED MODULE: ./node_modules/react-native-web/dist/modules/setValueForStyles/dangerousStyleValue.js


function dangerousStyleValue(name, value, isCustomProperty) {
  var isEmpty = value == null || typeof value === 'boolean' || value === '';

  if (isEmpty) {
    return '';
  }

  if (!isCustomProperty && typeof value === 'number' && value !== 0 && !(unitlessNumbers["a" /* default */].hasOwnProperty(name) && unitlessNumbers["a" /* default */][name])) {
    return value + 'px';
  }

  return ('' + value).trim();
}

/* harmony default export */ var setValueForStyles_dangerousStyleValue = (dangerousStyleValue);
// CONCATENATED MODULE: ./node_modules/react-native-web/dist/modules/setValueForStyles/index.js


function setValueForStyles(node, styles) {
  var style = node.style;

  for (var styleName in styles) {
    if (!styles.hasOwnProperty(styleName)) {
      continue;
    }

    var isCustomProperty = styleName.indexOf('--') === 0;
    var styleValue = setValueForStyles_dangerousStyleValue(styleName, styles[styleName], isCustomProperty);

    if (styleName === 'float') {
      styleName = 'cssFloat';
    }

    if (isCustomProperty) {
      style.setProperty(styleName, styleValue);
    } else {
      style[styleName] = styleValue;
    }
  }
}

/* harmony default export */ var modules_setValueForStyles = (setValueForStyles);
// CONCATENATED MODULE: ./node_modules/react-native-web/dist/exports/UIManager/index.js



var UIManager_getRect = function getRect(node) {
  var _getBoundingClientRec = Object(getBoundingClientRect["a" /* default */])(node),
      x = _getBoundingClientRec.x,
      y = _getBoundingClientRec.y,
      top = _getBoundingClientRec.top,
      left = _getBoundingClientRec.left;

  var width = node.offsetWidth;
  var height = node.offsetHeight;
  return {
    x: x,
    y: y,
    width: width,
    height: height,
    top: top,
    left: left
  };
};

var _measureLayout = function measureLayout(node, relativeToNativeNode, callback) {
  var relativeNode = relativeToNativeNode || node && node.parentNode;

  if (node && relativeNode) {
    setTimeout(function () {
      var relativeRect = Object(getBoundingClientRect["a" /* default */])(relativeNode);

      var _getRect = UIManager_getRect(node),
          height = _getRect.height,
          left = _getRect.left,
          top = _getRect.top,
          width = _getRect.width;

      var x = left - relativeRect.left;
      var y = top - relativeRect.top;
      callback(x, y, width, height, left, top);
    }, 0);
  }
};

var focusableElements = {
  A: true,
  INPUT: true,
  SELECT: true,
  TEXTAREA: true
};
var UIManager = {
  blur: function blur(node) {
    try {
      node.blur();
    } catch (err) {}
  },
  focus: function focus(node) {
    try {
      var name = node.nodeName;

      if (node.getAttribute('tabIndex') == null && focusableElements[name] == null) {
        node.setAttribute('tabIndex', '-1');
      }

      node.focus();
    } catch (err) {}
  },
  measure: function measure(node, callback) {
    _measureLayout(node, null, callback);
  },
  measureInWindow: function measureInWindow(node, callback) {
    if (node) {
      setTimeout(function () {
        var _getRect2 = UIManager_getRect(node),
            height = _getRect2.height,
            left = _getRect2.left,
            top = _getRect2.top,
            width = _getRect2.width;

        callback(left, top, width, height);
      }, 0);
    }
  },
  measureLayout: function measureLayout(node, relativeToNativeNode, onFail, onSuccess) {
    _measureLayout(node, relativeToNativeNode, onSuccess);
  },
  updateView: function updateView(node, props) {
    for (var prop in props) {
      if (!Object.prototype.hasOwnProperty.call(props, prop)) {
        continue;
      }

      var value = props[prop];

      switch (prop) {
        case 'style':
          {
            modules_setValueForStyles(node, value);
            break;
          }

        case 'class':
        case 'className':
          {
            node.setAttribute('class', value);
            break;
          }

        case 'text':
        case 'value':
          node.value = value;
          break;

        default:
          node.setAttribute(prop, value);
      }
    }
  },
  configureNextLayoutAnimation: function configureNextLayoutAnimation(config, onAnimationDidEnd) {
    onAnimationDidEnd();
  },
  setLayoutAnimationEnabledExperimental: function setLayoutAnimationEnabledExperimental() {}
};
/* harmony default export */ var exports_UIManager = __webpack_exports__["a"] = (UIManager);

/***/ }),

/***/ "5Bvt":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return pick; });
function pick(obj, list) {
  var nextObj = {};

  for (var key in obj) {
    if (obj.hasOwnProperty(key)) {
      if (list[key] === true || key.indexOf('aria-') === 0) {
        nextObj[key] = obj[key];
      }
    }
  }

  return nextObj;
}

/***/ }),

/***/ "5yr3":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/mitt/dist/mitt.es.js
//      
// An event handler can take an optional event argument
// and should not return a value
                                          
                                                               

// An array of all currently registered event handlers for a type
                                            
                                                            
// A map of event types and their corresponding event handlers.
                        
                                 
                                   
  

/** Mitt: Tiny (~200b) functional event emitter / pubsub.
 *  @name mitt
 *  @returns {Mitt}
 */
function mitt(all                 ) {
	all = all || Object.create(null);

	return {
		/**
		 * Register an event handler for the given type.
		 *
		 * @param  {String} type	Type of event to listen for, or `"*"` for all events
		 * @param  {Function} handler Function to call in response to given event
		 * @memberOf mitt
		 */
		on: function on(type        , handler              ) {
			(all[type] || (all[type] = [])).push(handler);
		},

		/**
		 * Remove an event handler for the given type.
		 *
		 * @param  {String} type	Type of event to unregister `handler` from, or `"*"`
		 * @param  {Function} handler Handler function to remove
		 * @memberOf mitt
		 */
		off: function off(type        , handler              ) {
			if (all[type]) {
				all[type].splice(all[type].indexOf(handler) >>> 0, 1);
			}
		},

		/**
		 * Invoke all handlers for the given type.
		 * If present, `"*"` handlers are invoked after type-matched handlers.
		 *
		 * @param {String} type  The event type to invoke
		 * @param {Any} [evt]  Any value (object is recommended and powerful), passed to each handler
		 * @memberOf mitt
		 */
		emit: function emit(type        , evt     ) {
			(all[type] || []).slice().map(function (handler) { handler(evt); });
			(all['*'] || []).slice().map(function (handler) { handler(type, evt); });
		}
	};
}

/* harmony default export */ var mitt_es = (mitt);
//# sourceMappingURL=mitt.es.js.map

// CONCATENATED MODULE: ./.cache/emitter.js
var emitter=mitt_es();/* harmony default export */ var _cache_emitter = __webpack_exports__["a"] = (emitter);

/***/ }),

/***/ "6JNq":
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__("UTVS");
var ownKeys = __webpack_require__("Vu81");
var getOwnPropertyDescriptorModule = __webpack_require__("Bs8V");
var definePropertyModule = __webpack_require__("m/L8");

module.exports = function (target, source) {
  var keys = ownKeys(source);
  var defineProperty = definePropertyModule.f;
  var getOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f;
  for (var i = 0; i < keys.length; i++) {
    var key = keys[i];
    if (!has(target, key)) defineProperty(target, key, getOwnPropertyDescriptor(source, key));
  }
};


/***/ }),

/***/ "7H9r":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var CSS_UNIT_RE = /^[+-]?\d*(?:\.\d+)?(?:[Ee][+-]?\d+)?(%|\w*)/;

var getUnit = function getUnit(str) {
  return str.match(CSS_UNIT_RE)[1];
};

var isNumeric = function isNumeric(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
};

var multiplyStyleLengthValue = function multiplyStyleLengthValue(value, multiple) {
  if (typeof value === 'string') {
    var number = parseFloat(value) * multiple;
    var unit = getUnit(value);
    return "" + number + unit;
  } else if (isNumeric(value)) {
    return value * multiple;
  }
};

/* harmony default export */ __webpack_exports__["a"] = (multiplyStyleLengthValue);

/***/ }),

/***/ "7W2i":
/***/ (function(module, exports, __webpack_require__) {

var setPrototypeOf = __webpack_require__("SksO");

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) setPrototypeOf(subClass, superClass);
}

module.exports = _inherits;

/***/ }),

/***/ "7hJ6":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.useScrollRestoration = exports.ScrollContainer = exports.ScrollContext = void 0;

var _scrollHandler = __webpack_require__("Enzk");

exports.ScrollContext = _scrollHandler.ScrollHandler;

var _scrollContainer = __webpack_require__("hd9s");

exports.ScrollContainer = _scrollContainer.ScrollContainer;

var _useScrollRestoration = __webpack_require__("3uz+");

exports.useScrollRestoration = _useScrollRestoration.useScrollRestoration;

/***/ }),

/***/ "7ljp":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MDXContext", function() { return MDXContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MDXProvider", function() { return MDXProvider; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mdx", function() { return createElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useMDXComponents", function() { return useMDXComponents; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "withMDXComponents", function() { return withMDXComponents; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("q1tI");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

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

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
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

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};

  var target = _objectWithoutPropertiesLoose(source, excluded);

  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

var isFunction = function isFunction(obj) {
  return typeof obj === 'function';
};

var MDXContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createContext({});

var withMDXComponents = function withMDXComponents(Component) {
  return function (props) {
    var allComponents = useMDXComponents(props.components);
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Component, _extends({}, props, {
      components: allComponents
    }));
  };
};

var useMDXComponents = function useMDXComponents(components) {
  var contextComponents = react__WEBPACK_IMPORTED_MODULE_0___default.a.useContext(MDXContext);
  var allComponents = contextComponents;

  if (components) {
    allComponents = isFunction(components) ? components(contextComponents) : _objectSpread2(_objectSpread2({}, contextComponents), components);
  }

  return allComponents;
};

var MDXProvider = function MDXProvider(props) {
  var allComponents = useMDXComponents(props.components);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(MDXContext.Provider, {
    value: allComponents
  }, props.children);
};

var TYPE_PROP_NAME = 'mdxType';
var DEFAULTS = {
  inlineCode: 'code',
  wrapper: function wrapper(_ref) {
    var children = _ref.children;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, {}, children);
  }
};
var MDXCreateElement = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.forwardRef(function (props, ref) {
  var propComponents = props.components,
      mdxType = props.mdxType,
      originalType = props.originalType,
      parentName = props.parentName,
      etc = _objectWithoutProperties(props, ["components", "mdxType", "originalType", "parentName"]);

  var components = useMDXComponents(propComponents);
  var type = mdxType;
  var Component = components["".concat(parentName, ".").concat(type)] || components[type] || DEFAULTS[type] || originalType;

  if (propComponents) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Component, _objectSpread2(_objectSpread2({
      ref: ref
    }, etc), {}, {
      components: propComponents
    }));
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Component, _objectSpread2({
    ref: ref
  }, etc));
});
MDXCreateElement.displayName = 'MDXCreateElement';

function createElement(type, props) {
  var args = arguments;
  var mdxType = props && props.mdxType;

  if (typeof type === 'string' || mdxType) {
    var argsLength = args.length;
    var createElementArgArray = new Array(argsLength);
    createElementArgArray[0] = MDXCreateElement;
    var newProps = {};

    for (var key in props) {
      if (hasOwnProperty.call(props, key)) {
        newProps[key] = props[key];
      }
    }

    newProps.originalType = type;
    newProps[TYPE_PROP_NAME] = typeof type === 'string' ? type : mdxType;
    createElementArgArray[1] = newProps;

    for (var i = 2; i < argsLength; i++) {
      createElementArgArray[i] = args[i];
    }

    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement.apply(null, createElementArgArray);
  }

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement.apply(null, args);
}



/***/ }),

/***/ "7oM+":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = position;

function position(property, value) {
  if (property === 'position' && value === 'sticky') {
    return ['-webkit-sticky', 'sticky'];
  }
}

/***/ }),

/***/ "8OQS":
/***/ (function(module, exports) {

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

module.exports = _objectWithoutPropertiesLoose;

/***/ }),

/***/ "8oxB":
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {}; // cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
  throw new Error('setTimeout has not been defined');
}

function defaultClearTimeout() {
  throw new Error('clearTimeout has not been defined');
}

(function () {
  try {
    if (typeof setTimeout === 'function') {
      cachedSetTimeout = setTimeout;
    } else {
      cachedSetTimeout = defaultSetTimout;
    }
  } catch (e) {
    cachedSetTimeout = defaultSetTimout;
  }

  try {
    if (typeof clearTimeout === 'function') {
      cachedClearTimeout = clearTimeout;
    } else {
      cachedClearTimeout = defaultClearTimeout;
    }
  } catch (e) {
    cachedClearTimeout = defaultClearTimeout;
  }
})();

function runTimeout(fun) {
  if (cachedSetTimeout === setTimeout) {
    //normal enviroments in sane situations
    return setTimeout(fun, 0);
  } // if setTimeout wasn't available but was latter defined


  if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
    cachedSetTimeout = setTimeout;
    return setTimeout(fun, 0);
  }

  try {
    // when when somebody has screwed with setTimeout but no I.E. maddness
    return cachedSetTimeout(fun, 0);
  } catch (e) {
    try {
      // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
      return cachedSetTimeout.call(null, fun, 0);
    } catch (e) {
      // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
      return cachedSetTimeout.call(this, fun, 0);
    }
  }
}

function runClearTimeout(marker) {
  if (cachedClearTimeout === clearTimeout) {
    //normal enviroments in sane situations
    return clearTimeout(marker);
  } // if clearTimeout wasn't available but was latter defined


  if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
    cachedClearTimeout = clearTimeout;
    return clearTimeout(marker);
  }

  try {
    // when when somebody has screwed with setTimeout but no I.E. maddness
    return cachedClearTimeout(marker);
  } catch (e) {
    try {
      // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
      return cachedClearTimeout.call(null, marker);
    } catch (e) {
      // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
      // Some versions of I.E. have different rules for clearTimeout vs setTimeout
      return cachedClearTimeout.call(this, marker);
    }
  }
}

var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
  if (!draining || !currentQueue) {
    return;
  }

  draining = false;

  if (currentQueue.length) {
    queue = currentQueue.concat(queue);
  } else {
    queueIndex = -1;
  }

  if (queue.length) {
    drainQueue();
  }
}

function drainQueue() {
  if (draining) {
    return;
  }

  var timeout = runTimeout(cleanUpNextTick);
  draining = true;
  var len = queue.length;

  while (len) {
    currentQueue = queue;
    queue = [];

    while (++queueIndex < len) {
      if (currentQueue) {
        currentQueue[queueIndex].run();
      }
    }

    queueIndex = -1;
    len = queue.length;
  }

  currentQueue = null;
  draining = false;
  runClearTimeout(timeout);
}

process.nextTick = function (fun) {
  var args = new Array(arguments.length - 1);

  if (arguments.length > 1) {
    for (var i = 1; i < arguments.length; i++) {
      args[i - 1] = arguments[i];
    }
  }

  queue.push(new Item(fun, args));

  if (queue.length === 1 && !draining) {
    runTimeout(drainQueue);
  }
}; // v8 likes predictible objects


function Item(fun, array) {
  this.fun = fun;
  this.array = array;
}

Item.prototype.run = function () {
  this.fun.apply(null, this.array);
};

process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues

process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) {
  return [];
};

process.binding = function (name) {
  throw new Error('process.binding is not supported');
};

process.cwd = function () {
  return '/';
};

process.chdir = function (dir) {
  throw new Error('process.chdir is not supported');
};

process.umask = function () {
  return 0;
};

/***/ }),

/***/ "93I0":
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__("VpIT");
var uid = __webpack_require__("kOOl");

var keys = shared('keys');

module.exports = function (key) {
  return keys[key] || (keys[key] = uid(key));
};


/***/ }),

/***/ "94VI":
/***/ (function(module, exports) {

exports.polyfill=function(Component){return Component;};

/***/ }),

/***/ "9Xx/":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return globalHistory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return navigate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return createHistory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return createMemorySource; });
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var getLocation = function getLocation(source) {
  var _source$location = source.location,
      search = _source$location.search,
      hash = _source$location.hash,
      href = _source$location.href,
      origin = _source$location.origin,
      protocol = _source$location.protocol,
      host = _source$location.host,
      hostname = _source$location.hostname,
      port = _source$location.port;
  var pathname = source.location.pathname;


  if (!pathname && href && canUseDOM) {
    var url = new URL(href);
    pathname = url.pathname;
  }

  return {
    pathname: encodeURI(decodeURI(pathname)),
    search: search,
    hash: hash,
    href: href,
    origin: origin,
    protocol: protocol,
    host: host,
    hostname: hostname,
    port: port,
    state: source.history.state,
    key: source.history.state && source.history.state.key || "initial"
  };
};

var createHistory = function createHistory(source, options) {
  var listeners = [];
  var location = getLocation(source);
  var transitioning = false;
  var resolveTransition = function resolveTransition() {};

  return {
    get location() {
      return location;
    },

    get transitioning() {
      return transitioning;
    },

    _onTransitionComplete: function _onTransitionComplete() {
      transitioning = false;
      resolveTransition();
    },
    listen: function listen(listener) {
      listeners.push(listener);

      var popstateListener = function popstateListener() {
        location = getLocation(source);
        listener({ location: location, action: "POP" });
      };

      source.addEventListener("popstate", popstateListener);

      return function () {
        source.removeEventListener("popstate", popstateListener);
        listeners = listeners.filter(function (fn) {
          return fn !== listener;
        });
      };
    },
    navigate: function navigate(to) {
      var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
          state = _ref.state,
          _ref$replace = _ref.replace,
          replace = _ref$replace === undefined ? false : _ref$replace;

      if (typeof to === "number") {
        source.history.go(to);
      } else {
        state = _extends({}, state, { key: Date.now() + "" });
        // try...catch iOS Safari limits to 100 pushState calls
        try {
          if (transitioning || replace) {
            source.history.replaceState(state, null, to);
          } else {
            source.history.pushState(state, null, to);
          }
        } catch (e) {
          source.location[replace ? "replace" : "assign"](to);
        }
      }

      location = getLocation(source);
      transitioning = true;
      var transition = new Promise(function (res) {
        return resolveTransition = res;
      });
      listeners.forEach(function (listener) {
        return listener({ location: location, action: "PUSH" });
      });
      return transition;
    }
  };
};

////////////////////////////////////////////////////////////////////////////////
// Stores history entries in memory for testing or other platforms like Native
var createMemorySource = function createMemorySource() {
  var initialPath = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "/";

  var searchIndex = initialPath.indexOf("?");
  var initialLocation = {
    pathname: searchIndex > -1 ? initialPath.substr(0, searchIndex) : initialPath,
    search: searchIndex > -1 ? initialPath.substr(searchIndex) : ""
  };
  var index = 0;
  var stack = [initialLocation];
  var states = [null];

  return {
    get location() {
      return stack[index];
    },
    addEventListener: function addEventListener(name, fn) {},
    removeEventListener: function removeEventListener(name, fn) {},

    history: {
      get entries() {
        return stack;
      },
      get index() {
        return index;
      },
      get state() {
        return states[index];
      },
      pushState: function pushState(state, _, uri) {
        var _uri$split = uri.split("?"),
            pathname = _uri$split[0],
            _uri$split$ = _uri$split[1],
            search = _uri$split$ === undefined ? "" : _uri$split$;

        index++;
        stack.push({ pathname: pathname, search: search.length ? "?" + search : search });
        states.push(state);
      },
      replaceState: function replaceState(state, _, uri) {
        var _uri$split2 = uri.split("?"),
            pathname = _uri$split2[0],
            _uri$split2$ = _uri$split2[1],
            search = _uri$split2$ === undefined ? "" : _uri$split2$;

        stack[index] = { pathname: pathname, search: search };
        states[index] = state;
      },
      go: function go(to) {
        var newIndex = index + to;

        if (newIndex < 0 || newIndex > states.length - 1) {
          return;
        }

        index = newIndex;
      }
    }
  };
};

////////////////////////////////////////////////////////////////////////////////
// global history - uses window.history as the source if available, otherwise a
// memory history
var canUseDOM = !!(typeof window !== "undefined" && window.document && window.document.createElement);
var getSource = function getSource() {
  return canUseDOM ? window : createMemorySource();
};

var globalHistory = createHistory(getSource());
var navigate = globalHistory.navigate;

////////////////////////////////////////////////////////////////////////////////



/***/ }),

/***/ "9hXx":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
exports.__esModule=true;exports.default=void 0;var _default=function _default(pathname,localizedManifests){var defaultFilename="manifest.webmanifest";if(!Array.isArray(localizedManifests)){return defaultFilename;}var localizedManifest=localizedManifests.find(function(app){return pathname.startsWith(app.start_url);});if(!localizedManifest){return defaultFilename;}return"manifest_"+localizedManifest.lang+".webmanifest";};exports.default=_default;

/***/ }),

/***/ "A6cL":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return normalizeValueWithProperty; });
/* harmony import */ var _modules_unitlessNumbers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("ou6r");
/* harmony import */ var _modules_normalizeColor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("cdkR");


var colorProps = {
  backgroundColor: true,
  borderColor: true,
  borderTopColor: true,
  borderRightColor: true,
  borderBottomColor: true,
  borderLeftColor: true,
  color: true,
  shadowColor: true,
  textDecorationColor: true,
  textShadowColor: true
};
function normalizeValueWithProperty(value, property) {
  var returnValue = value;

  if ((property == null || !_modules_unitlessNumbers__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"][property]) && typeof value === 'number') {
    returnValue = value + "px";
  } else if (property != null && colorProps[property]) {
    returnValue = Object(_modules_normalizeColor__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(value);
  }

  return returnValue;
}

/***/ }),

/***/ "AQSi":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "BfwJ":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useMDXScope", function() { return useMDXScope; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MDXScopeProvider", function() { return MDXScopeProvider; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("q1tI");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var GatsbyMDXScopeContext=Object(react__WEBPACK_IMPORTED_MODULE_0__["createContext"])({});var useMDXScope=function useMDXScope(scope){var contextScope=Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(GatsbyMDXScopeContext);return scope||contextScope;};var MDXScopeProvider=function MDXScopeProvider(_ref){var __mdxScope=_ref.__mdxScope,children=_ref.children;return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(GatsbyMDXScopeContext.Provider,{value:__mdxScope},children);};

/***/ }),

/***/ "Bnag":
/***/ (function(module, exports) {

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

module.exports = _nonIterableSpread;

/***/ }),

/***/ "Bs8V":
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__("g6v/");
var propertyIsEnumerableModule = __webpack_require__("0eef");
var createPropertyDescriptor = __webpack_require__("XGwC");
var toIndexedObject = __webpack_require__("/GqU");
var toPrimitive = __webpack_require__("wE6v");
var has = __webpack_require__("UTVS");
var IE8_DOM_DEFINE = __webpack_require__("DPsx");

var nativeGetOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;

// `Object.getOwnPropertyDescriptor` method
// https://tc39.es/ecma262/#sec-object.getownpropertydescriptor
exports.f = DESCRIPTORS ? nativeGetOwnPropertyDescriptor : function getOwnPropertyDescriptor(O, P) {
  O = toIndexedObject(O);
  P = toPrimitive(P, true);
  if (IE8_DOM_DEFINE) try {
    return nativeGetOwnPropertyDescriptor(O, P);
  } catch (error) { /* empty */ }
  if (has(O, P)) return createPropertyDescriptor(!propertyIsEnumerableModule.f.call(O, P), O[P]);
};


/***/ }),

/***/ "CSmu":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return useMergeRefs; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("q1tI");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mergeRefs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("VKdU");


function useMergeRefs() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  return react__WEBPACK_IMPORTED_MODULE_0__["useMemo"](function () {
    return _mergeRefs__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].apply(void 0, args);
  }, [].concat(args));
}

/***/ }),

/***/ "DPsx":
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__("g6v/");
var fails = __webpack_require__("0Dky");
var createElement = __webpack_require__("zBJ4");

// Thank's IE8 for his funny defineProperty
module.exports = !DESCRIPTORS && !fails(function () {
  return Object.defineProperty(createElement('div'), 'a', {
    get: function () { return 7; }
  }).a != 7;
});


/***/ }),

/***/ "DZbo":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("i8i4");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_0__);


/* harmony default export */ __webpack_exports__["a"] = (react_dom__WEBPACK_IMPORTED_MODULE_0__["render"]);

/***/ }),

/***/ "E9XD":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__("I+eb");
var $reduce = __webpack_require__("1Y/n").left;
var arrayMethodIsStrict = __webpack_require__("pkCn");
var arrayMethodUsesToLength = __webpack_require__("rkAj");
var CHROME_VERSION = __webpack_require__("LQDL");
var IS_NODE = __webpack_require__("YF1G");

var STRICT_METHOD = arrayMethodIsStrict('reduce');
var USES_TO_LENGTH = arrayMethodUsesToLength('reduce', { 1: 0 });
// Chrome 80-82 has a critical bug
// https://bugs.chromium.org/p/chromium/issues/detail?id=1049982
var CHROME_BUG = !IS_NODE && CHROME_VERSION > 79 && CHROME_VERSION < 83;

// `Array.prototype.reduce` method
// https://tc39.es/ecma262/#sec-array.prototype.reduce
$({ target: 'Array', proto: true, forced: !STRICT_METHOD || !USES_TO_LENGTH || CHROME_BUG }, {
  reduce: function reduce(callbackfn /* , initialValue */) {
    return $reduce(this, callbackfn, arguments.length, arguments.length > 1 ? arguments[1] : undefined);
  }
});


/***/ }),

/***/ "EbDI":
/***/ (function(module, exports) {

function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter);
}

module.exports = _iterableToArray;

/***/ }),

/***/ "Enzk":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__("284h");

var _interopRequireDefault = __webpack_require__("TqRt");

exports.__esModule = true;
exports.ScrollHandler = exports.ScrollContext = void 0;

var _assertThisInitialized2 = _interopRequireDefault(__webpack_require__("PJYZ"));

var _inheritsLoose2 = _interopRequireDefault(__webpack_require__("VbXa"));

var React = _interopRequireWildcard(__webpack_require__("q1tI"));

var _propTypes = _interopRequireDefault(__webpack_require__("17x9"));

var _sessionStorage = __webpack_require__("/hTd");

var ScrollContext = /*#__PURE__*/React.createContext(new _sessionStorage.SessionStorage());
exports.ScrollContext = ScrollContext;
ScrollContext.displayName = "GatsbyScrollContext";

var ScrollHandler = /*#__PURE__*/function (_React$Component) {
  (0, _inheritsLoose2.default)(ScrollHandler, _React$Component);

  function ScrollHandler() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this;
    _this._stateStorage = new _sessionStorage.SessionStorage();

    _this.scrollListener = function () {
      var key = _this.props.location.key;

      if (key) {
        _this._stateStorage.save(_this.props.location, key, window.scrollY);
      }
    };

    _this.windowScroll = function (position, prevProps) {
      if (_this.shouldUpdateScroll(prevProps, _this.props)) {
        window.scrollTo(0, position);
      }
    };

    _this.scrollToHash = function (hash, prevProps) {
      var node = document.getElementById(hash.substring(1));

      if (node && _this.shouldUpdateScroll(prevProps, _this.props)) {
        node.scrollIntoView();
      }
    };

    _this.shouldUpdateScroll = function (prevRouterProps, routerProps) {
      var shouldUpdateScroll = _this.props.shouldUpdateScroll;

      if (!shouldUpdateScroll) {
        return true;
      } // Hack to allow accessing this._stateStorage.


      return shouldUpdateScroll.call((0, _assertThisInitialized2.default)(_this), prevRouterProps, routerProps);
    };

    return _this;
  }

  var _proto = ScrollHandler.prototype;

  _proto.componentDidMount = function componentDidMount() {
    window.addEventListener("scroll", this.scrollListener);
    var scrollPosition;
    var _this$props$location = this.props.location,
        key = _this$props$location.key,
        hash = _this$props$location.hash;

    if (key) {
      scrollPosition = this._stateStorage.read(this.props.location, key);
    }

    if (scrollPosition) {
      this.windowScroll(scrollPosition, undefined);
    } else if (hash) {
      this.scrollToHash(decodeURI(hash), undefined);
    }
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    window.removeEventListener("scroll", this.scrollListener);
  };

  _proto.componentDidUpdate = function componentDidUpdate(prevProps) {
    var _this$props$location2 = this.props.location,
        hash = _this$props$location2.hash,
        key = _this$props$location2.key;
    var scrollPosition;

    if (key) {
      scrollPosition = this._stateStorage.read(this.props.location, key);
    }
    /**  There are two pieces of state: the browser url and
     * history state which keeps track of scroll position
     * Native behaviour prescribes that we ought to restore scroll position
     * when a user navigates back in their browser (this is the `POP` action)
     * Currently, reach router has a bug that prevents this at https://github.com/reach/router/issues/228
     * So we _always_ stick to the url as a source of truth — if the url
     * contains a hash, we scroll to it
     */


    if (hash) {
      this.scrollToHash(decodeURI(hash), prevProps);
    } else {
      this.windowScroll(scrollPosition, prevProps);
    }
  };

  _proto.render = function render() {
    return /*#__PURE__*/React.createElement(ScrollContext.Provider, {
      value: this._stateStorage
    }, this.props.children);
  };

  return ScrollHandler;
}(React.Component);

exports.ScrollHandler = ScrollHandler;
ScrollHandler.propTypes = {
  shouldUpdateScroll: _propTypes.default.func,
  children: _propTypes.default.element.isRequired,
  location: _propTypes.default.object.isRequired
};

/***/ }),

/***/ "FJcI":
/***/ (function(module, exports) {

/*
 * Copyright (c) 2015-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 */
function normalizeColor(color) {
  var match;

  if (typeof color === 'number') {
    if (color >>> 0 === color && color >= 0 && color <= 0xffffffff) {
      return color;
    }

    return null;
  } // Ordered based on occurrences on Facebook codebase


  if (match = matchers.hex6.exec(color)) {
    return parseInt(match[1] + 'ff', 16) >>> 0;
  }

  if (names.hasOwnProperty(color)) {
    return names[color];
  }

  if (match = matchers.rgb.exec(color)) {
    return (parse255(match[1]) << 24 | // r
    parse255(match[2]) << 16 | // g
    parse255(match[3]) << 8 | // b
    0x000000ff // a
    ) >>> 0;
  }

  if (match = matchers.rgba.exec(color)) {
    return (parse255(match[1]) << 24 | // r
    parse255(match[2]) << 16 | // g
    parse255(match[3]) << 8 | // b
    parse1(match[4]) // a
    ) >>> 0;
  }

  if (match = matchers.hex3.exec(color)) {
    return parseInt(match[1] + match[1] + // r
    match[2] + match[2] + // g
    match[3] + match[3] + // b
    'ff', // a
    16) >>> 0;
  } // https://drafts.csswg.org/css-color-4/#hex-notation


  if (match = matchers.hex8.exec(color)) {
    return parseInt(match[1], 16) >>> 0;
  }

  if (match = matchers.hex4.exec(color)) {
    return parseInt(match[1] + match[1] + // r
    match[2] + match[2] + // g
    match[3] + match[3] + // b
    match[4] + match[4], // a
    16) >>> 0;
  }

  if (match = matchers.hsl.exec(color)) {
    return (hslToRgb(parse360(match[1]), // h
    parsePercentage(match[2]), // s
    parsePercentage(match[3]) // l
    ) | 0x000000ff // a
    ) >>> 0;
  }

  if (match = matchers.hsla.exec(color)) {
    return (hslToRgb(parse360(match[1]), // h
    parsePercentage(match[2]), // s
    parsePercentage(match[3]) // l
    ) | parse1(match[4]) // a
    ) >>> 0;
  }

  return null;
}

function hue2rgb(p, q, t) {
  if (t < 0) {
    t += 1;
  }

  if (t > 1) {
    t -= 1;
  }

  if (t < 1 / 6) {
    return p + (q - p) * 6 * t;
  }

  if (t < 1 / 2) {
    return q;
  }

  if (t < 2 / 3) {
    return p + (q - p) * (2 / 3 - t) * 6;
  }

  return p;
}

function hslToRgb(h, s, l) {
  var q = l < 0.5 ? l * (1 + s) : l + s - l * s;
  var p = 2 * l - q;
  var r = hue2rgb(p, q, h + 1 / 3);
  var g = hue2rgb(p, q, h);
  var b = hue2rgb(p, q, h - 1 / 3);
  return Math.round(r * 255) << 24 | Math.round(g * 255) << 16 | Math.round(b * 255) << 8;
} // var INTEGER = '[-+]?\\d+';


var NUMBER = '[-+]?\\d*\\.?\\d+';
var PERCENTAGE = NUMBER + '%';

function toArray(arrayLike) {
  return Array.prototype.slice.call(arrayLike, 0);
}

function call() {
  return '\\(\\s*(' + toArray(arguments).join(')\\s*,\\s*(') + ')\\s*\\)';
}

var matchers = {
  rgb: new RegExp('rgb' + call(NUMBER, NUMBER, NUMBER)),
  rgba: new RegExp('rgba' + call(NUMBER, NUMBER, NUMBER, NUMBER)),
  hsl: new RegExp('hsl' + call(NUMBER, PERCENTAGE, PERCENTAGE)),
  hsla: new RegExp('hsla' + call(NUMBER, PERCENTAGE, PERCENTAGE, NUMBER)),
  hex3: /^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
  hex4: /^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
  hex6: /^#([0-9a-fA-F]{6})$/,
  hex8: /^#([0-9a-fA-F]{8})$/
};

function parse255(str) {
  var int = parseInt(str, 10);

  if (int < 0) {
    return 0;
  }

  if (int > 255) {
    return 255;
  }

  return int;
}

function parse360(str) {
  var int = parseFloat(str);
  return (int % 360 + 360) % 360 / 360;
}

function parse1(str) {
  var num = parseFloat(str);

  if (num < 0) {
    return 0;
  }

  if (num > 1) {
    return 255;
  }

  return Math.round(num * 255);
}

function parsePercentage(str) {
  // parseFloat conveniently ignores the final %
  var int = parseFloat(str, 10);

  if (int < 0) {
    return 0;
  }

  if (int > 100) {
    return 1;
  }

  return int / 100;
}

var names = {
  transparent: 0x00000000,
  // http://www.w3.org/TR/css3-color/#svg-color
  aliceblue: 0xf0f8ffff,
  antiquewhite: 0xfaebd7ff,
  aqua: 0x00ffffff,
  aquamarine: 0x7fffd4ff,
  azure: 0xf0ffffff,
  beige: 0xf5f5dcff,
  bisque: 0xffe4c4ff,
  black: 0x000000ff,
  blanchedalmond: 0xffebcdff,
  blue: 0x0000ffff,
  blueviolet: 0x8a2be2ff,
  brown: 0xa52a2aff,
  burlywood: 0xdeb887ff,
  burntsienna: 0xea7e5dff,
  cadetblue: 0x5f9ea0ff,
  chartreuse: 0x7fff00ff,
  chocolate: 0xd2691eff,
  coral: 0xff7f50ff,
  cornflowerblue: 0x6495edff,
  cornsilk: 0xfff8dcff,
  crimson: 0xdc143cff,
  cyan: 0x00ffffff,
  darkblue: 0x00008bff,
  darkcyan: 0x008b8bff,
  darkgoldenrod: 0xb8860bff,
  darkgray: 0xa9a9a9ff,
  darkgreen: 0x006400ff,
  darkgrey: 0xa9a9a9ff,
  darkkhaki: 0xbdb76bff,
  darkmagenta: 0x8b008bff,
  darkolivegreen: 0x556b2fff,
  darkorange: 0xff8c00ff,
  darkorchid: 0x9932ccff,
  darkred: 0x8b0000ff,
  darksalmon: 0xe9967aff,
  darkseagreen: 0x8fbc8fff,
  darkslateblue: 0x483d8bff,
  darkslategray: 0x2f4f4fff,
  darkslategrey: 0x2f4f4fff,
  darkturquoise: 0x00ced1ff,
  darkviolet: 0x9400d3ff,
  deeppink: 0xff1493ff,
  deepskyblue: 0x00bfffff,
  dimgray: 0x696969ff,
  dimgrey: 0x696969ff,
  dodgerblue: 0x1e90ffff,
  firebrick: 0xb22222ff,
  floralwhite: 0xfffaf0ff,
  forestgreen: 0x228b22ff,
  fuchsia: 0xff00ffff,
  gainsboro: 0xdcdcdcff,
  ghostwhite: 0xf8f8ffff,
  gold: 0xffd700ff,
  goldenrod: 0xdaa520ff,
  gray: 0x808080ff,
  green: 0x008000ff,
  greenyellow: 0xadff2fff,
  grey: 0x808080ff,
  honeydew: 0xf0fff0ff,
  hotpink: 0xff69b4ff,
  indianred: 0xcd5c5cff,
  indigo: 0x4b0082ff,
  ivory: 0xfffff0ff,
  khaki: 0xf0e68cff,
  lavender: 0xe6e6faff,
  lavenderblush: 0xfff0f5ff,
  lawngreen: 0x7cfc00ff,
  lemonchiffon: 0xfffacdff,
  lightblue: 0xadd8e6ff,
  lightcoral: 0xf08080ff,
  lightcyan: 0xe0ffffff,
  lightgoldenrodyellow: 0xfafad2ff,
  lightgray: 0xd3d3d3ff,
  lightgreen: 0x90ee90ff,
  lightgrey: 0xd3d3d3ff,
  lightpink: 0xffb6c1ff,
  lightsalmon: 0xffa07aff,
  lightseagreen: 0x20b2aaff,
  lightskyblue: 0x87cefaff,
  lightslategray: 0x778899ff,
  lightslategrey: 0x778899ff,
  lightsteelblue: 0xb0c4deff,
  lightyellow: 0xffffe0ff,
  lime: 0x00ff00ff,
  limegreen: 0x32cd32ff,
  linen: 0xfaf0e6ff,
  magenta: 0xff00ffff,
  maroon: 0x800000ff,
  mediumaquamarine: 0x66cdaaff,
  mediumblue: 0x0000cdff,
  mediumorchid: 0xba55d3ff,
  mediumpurple: 0x9370dbff,
  mediumseagreen: 0x3cb371ff,
  mediumslateblue: 0x7b68eeff,
  mediumspringgreen: 0x00fa9aff,
  mediumturquoise: 0x48d1ccff,
  mediumvioletred: 0xc71585ff,
  midnightblue: 0x191970ff,
  mintcream: 0xf5fffaff,
  mistyrose: 0xffe4e1ff,
  moccasin: 0xffe4b5ff,
  navajowhite: 0xffdeadff,
  navy: 0x000080ff,
  oldlace: 0xfdf5e6ff,
  olive: 0x808000ff,
  olivedrab: 0x6b8e23ff,
  orange: 0xffa500ff,
  orangered: 0xff4500ff,
  orchid: 0xda70d6ff,
  palegoldenrod: 0xeee8aaff,
  palegreen: 0x98fb98ff,
  paleturquoise: 0xafeeeeff,
  palevioletred: 0xdb7093ff,
  papayawhip: 0xffefd5ff,
  peachpuff: 0xffdab9ff,
  peru: 0xcd853fff,
  pink: 0xffc0cbff,
  plum: 0xdda0ddff,
  powderblue: 0xb0e0e6ff,
  purple: 0x800080ff,
  rebeccapurple: 0x663399ff,
  red: 0xff0000ff,
  rosybrown: 0xbc8f8fff,
  royalblue: 0x4169e1ff,
  saddlebrown: 0x8b4513ff,
  salmon: 0xfa8072ff,
  sandybrown: 0xf4a460ff,
  seagreen: 0x2e8b57ff,
  seashell: 0xfff5eeff,
  sienna: 0xa0522dff,
  silver: 0xc0c0c0ff,
  skyblue: 0x87ceebff,
  slateblue: 0x6a5acdff,
  slategray: 0x708090ff,
  slategrey: 0x708090ff,
  snow: 0xfffafaff,
  springgreen: 0x00ff7fff,
  steelblue: 0x4682b4ff,
  tan: 0xd2b48cff,
  teal: 0x008080ff,
  thistle: 0xd8bfd8ff,
  tomato: 0xff6347ff,
  turquoise: 0x40e0d0ff,
  violet: 0xee82eeff,
  wheat: 0xf5deb3ff,
  white: 0xffffffff,
  whitesmoke: 0xf5f5f5ff,
  yellow: 0xffff00ff,
  yellowgreen: 0x9acd32ff
};

function rgba(colorInt) {
  var r = Math.round((colorInt & 0xff000000) >>> 24);
  var g = Math.round((colorInt & 0x00ff0000) >>> 16);
  var b = Math.round((colorInt & 0x0000ff00) >>> 8);
  var a = ((colorInt & 0x000000ff) >>> 0) / 255;
  return {
    r: r,
    g: g,
    b: b,
    a: a
  };
}

;
normalizeColor.rgba = rgba;
module.exports = normalizeColor;

/***/ }),

/***/ "GddB":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var typeface_montserrat__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("tb+u");
/* harmony import */ var typeface_montserrat__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(typeface_montserrat__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var typeface_merriweather__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("GevN");
/* harmony import */ var typeface_merriweather__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(typeface_merriweather__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _src_global_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("AQSi");
/* harmony import */ var _src_global_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_src_global_css__WEBPACK_IMPORTED_MODULE_2__);


/***/ }),

/***/ "GevN":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "HAuM":
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') {
    throw TypeError(String(it) + ' is not a function');
  } return it;
};


/***/ }),

/***/ "HSq1":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* binding */ useResponderEvents; });

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__("q1tI");

// EXTERNAL MODULE: ./node_modules/fbjs/lib/ExecutionEnvironment.js
var ExecutionEnvironment = __webpack_require__("xLLm");

// EXTERNAL MODULE: ./node_modules/react-native-web/dist/modules/getBoundingClientRect/index.js
var getBoundingClientRect = __webpack_require__("Q/JM");

// CONCATENATED MODULE: ./node_modules/react-native-web/dist/modules/useResponderEvents/ResponderEventTypes.js
var BLUR = 'blur';
var CONTEXT_MENU = 'contextmenu';
var FOCUS_OUT = 'focusout';
var MOUSE_DOWN = 'mousedown';
var MOUSE_MOVE = 'mousemove';
var MOUSE_UP = 'mouseup';
var MOUSE_CANCEL = 'dragstart';
var TOUCH_START = 'touchstart';
var TOUCH_MOVE = 'touchmove';
var TOUCH_END = 'touchend';
var TOUCH_CANCEL = 'touchcancel';
var SCROLL = 'scroll';
var SELECT = 'select';
var SELECTION_CHANGE = 'selectionchange';
function isStartish(eventType) {
  return eventType === TOUCH_START || eventType === MOUSE_DOWN;
}
function isMoveish(eventType) {
  return eventType === TOUCH_MOVE || eventType === MOUSE_MOVE;
}
function isEndish(eventType) {
  return eventType === TOUCH_END || eventType === MOUSE_UP || isCancelish(eventType);
}
function isCancelish(eventType) {
  return eventType === TOUCH_CANCEL || eventType === MOUSE_CANCEL;
}
function isScroll(eventType) {
  return eventType === SCROLL;
}
function isSelectionChange(eventType) {
  return eventType === SELECT || eventType === SELECTION_CHANGE;
}
// CONCATENATED MODULE: ./node_modules/react-native-web/dist/modules/useResponderEvents/ResponderTouchHistoryStore.js


var __DEV__ = "production" !== 'production';

var MAX_TOUCH_BANK = 20;
var touchBank = [];
var touchHistory = {
  touchBank: touchBank,
  numberActiveTouches: 0,
  indexOfSingleActiveTouch: -1,
  mostRecentTimeStamp: 0
};

function timestampForTouch(touch) {
  return touch.timeStamp || touch.timestamp;
}

function createTouchRecord(touch) {
  return {
    touchActive: true,
    startPageX: touch.pageX,
    startPageY: touch.pageY,
    startTimeStamp: timestampForTouch(touch),
    currentPageX: touch.pageX,
    currentPageY: touch.pageY,
    currentTimeStamp: timestampForTouch(touch),
    previousPageX: touch.pageX,
    previousPageY: touch.pageY,
    previousTimeStamp: timestampForTouch(touch)
  };
}

function resetTouchRecord(touchRecord, touch) {
  touchRecord.touchActive = true;
  touchRecord.startPageX = touch.pageX;
  touchRecord.startPageY = touch.pageY;
  touchRecord.startTimeStamp = timestampForTouch(touch);
  touchRecord.currentPageX = touch.pageX;
  touchRecord.currentPageY = touch.pageY;
  touchRecord.currentTimeStamp = timestampForTouch(touch);
  touchRecord.previousPageX = touch.pageX;
  touchRecord.previousPageY = touch.pageY;
  touchRecord.previousTimeStamp = timestampForTouch(touch);
}

function getTouchIdentifier(_ref) {
  var identifier = _ref.identifier;

  if (identifier == null) {
    console.error('Touch object is missing identifier.');
  }

  if (__DEV__) {
    if (identifier > MAX_TOUCH_BANK) {
      console.error('Touch identifier %s is greater than maximum supported %s which causes ' + 'performance issues backfilling array locations for all of the indices.', identifier, MAX_TOUCH_BANK);
    }
  }

  return identifier;
}

function recordTouchStart(touch) {
  var identifier = getTouchIdentifier(touch);
  var touchRecord = touchBank[identifier];

  if (touchRecord) {
    resetTouchRecord(touchRecord, touch);
  } else {
    touchBank[identifier] = createTouchRecord(touch);
  }

  touchHistory.mostRecentTimeStamp = timestampForTouch(touch);
}

function recordTouchMove(touch) {
  var touchRecord = touchBank[getTouchIdentifier(touch)];

  if (touchRecord) {
    touchRecord.touchActive = true;
    touchRecord.previousPageX = touchRecord.currentPageX;
    touchRecord.previousPageY = touchRecord.currentPageY;
    touchRecord.previousTimeStamp = touchRecord.currentTimeStamp;
    touchRecord.currentPageX = touch.pageX;
    touchRecord.currentPageY = touch.pageY;
    touchRecord.currentTimeStamp = timestampForTouch(touch);
    touchHistory.mostRecentTimeStamp = timestampForTouch(touch);
  } else {
    console.warn('Cannot record touch move without a touch start.\n', "Touch Move: " + printTouch(touch) + "\n", "Touch Bank: " + printTouchBank());
  }
}

function recordTouchEnd(touch) {
  var touchRecord = touchBank[getTouchIdentifier(touch)];

  if (touchRecord) {
    touchRecord.touchActive = false;
    touchRecord.previousPageX = touchRecord.currentPageX;
    touchRecord.previousPageY = touchRecord.currentPageY;
    touchRecord.previousTimeStamp = touchRecord.currentTimeStamp;
    touchRecord.currentPageX = touch.pageX;
    touchRecord.currentPageY = touch.pageY;
    touchRecord.currentTimeStamp = timestampForTouch(touch);
    touchHistory.mostRecentTimeStamp = timestampForTouch(touch);
  } else {
    console.warn('Cannot record touch end without a touch start.\n', "Touch End: " + printTouch(touch) + "\n", "Touch Bank: " + printTouchBank());
  }
}

function printTouch(touch) {
  return JSON.stringify({
    identifier: touch.identifier,
    pageX: touch.pageX,
    pageY: touch.pageY,
    timestamp: timestampForTouch(touch)
  });
}

function printTouchBank() {
  var printed = JSON.stringify(touchBank.slice(0, MAX_TOUCH_BANK));

  if (touchBank.length > MAX_TOUCH_BANK) {
    printed += ' (original size: ' + touchBank.length + ')';
  }

  return printed;
}

var ResponderTouchHistoryStore = {
  recordTouchTrack: function recordTouchTrack(topLevelType, nativeEvent) {
    if (isMoveish(topLevelType)) {
      nativeEvent.changedTouches.forEach(recordTouchMove);
    } else if (isStartish(topLevelType)) {
      nativeEvent.changedTouches.forEach(recordTouchStart);
      touchHistory.numberActiveTouches = nativeEvent.touches.length;

      if (touchHistory.numberActiveTouches === 1) {
        touchHistory.indexOfSingleActiveTouch = nativeEvent.touches[0].identifier;
      }
    } else if (isEndish(topLevelType)) {
      nativeEvent.changedTouches.forEach(recordTouchEnd);
      touchHistory.numberActiveTouches = nativeEvent.touches.length;

      if (touchHistory.numberActiveTouches === 1) {
        for (var i = 0; i < touchBank.length; i++) {
          var touchTrackToCheck = touchBank[i];

          if (touchTrackToCheck != null && touchTrackToCheck.touchActive) {
            touchHistory.indexOfSingleActiveTouch = i;
            break;
          }
        }

        if (__DEV__) {
          var activeRecord = touchBank[touchHistory.indexOfSingleActiveTouch];

          if (!(activeRecord != null && activeRecord.touchActive)) {
            console.error('Cannot find single active touch.');
          }
        }
      }
    }
  },
  touchHistory: touchHistory
};
/* harmony default export */ var useResponderEvents_ResponderTouchHistoryStore = (ResponderTouchHistoryStore);
// CONCATENATED MODULE: ./node_modules/react-native-web/dist/modules/useResponderEvents/createResponderEvent.js



var emptyFunction = function emptyFunction() {};

var emptyObject = {};
var emptyArray = [];

function normalizeIdentifier(identifier) {
  return identifier > 20 ? identifier % 20 : identifier;
}

function createResponderEvent(domEvent) {
  var rect;
  var propagationWasStopped = false;
  var changedTouches;
  var touches;
  var domEventChangedTouches = domEvent.changedTouches;
  var domEventType = domEvent.type;
  var metaKey = domEvent.metaKey === true;
  var shiftKey = domEvent.shiftKey === true;
  var force = domEventChangedTouches && domEventChangedTouches[0].force || 0;
  var identifier = normalizeIdentifier(domEventChangedTouches && domEventChangedTouches[0].identifier || 0);
  var clientX = domEventChangedTouches && domEventChangedTouches[0].clientX || domEvent.clientX;
  var clientY = domEventChangedTouches && domEventChangedTouches[0].clientY || domEvent.clientY;
  var pageX = domEventChangedTouches && domEventChangedTouches[0].pageX || domEvent.pageX;
  var pageY = domEventChangedTouches && domEventChangedTouches[0].pageY || domEvent.pageY;
  var preventDefault = typeof domEvent.preventDefault === 'function' ? domEvent.preventDefault.bind(domEvent) : emptyFunction;
  var timestamp = domEvent.timeStamp;

  function normalizeTouches(touches) {
    return Array.prototype.slice.call(touches).map(function (touch) {
      return {
        force: touch.force,
        identifier: normalizeIdentifier(touch.identifier),

        get locationX() {
          return locationX(touch.clientX);
        },

        get locationY() {
          return locationY(touch.clientY);
        },

        pageX: touch.pageX,
        pageY: touch.pageY,
        target: touch.target,
        timestamp: timestamp
      };
    });
  }

  if (domEventChangedTouches != null) {
    changedTouches = normalizeTouches(domEventChangedTouches);
    touches = normalizeTouches(domEvent.touches);
  } else {
    var emulatedTouches = [{
      force: force,
      identifier: identifier,

      get locationX() {
        return locationX(clientX);
      },

      get locationY() {
        return locationY(clientY);
      },

      pageX: pageX,
      pageY: pageY,
      target: domEvent.target,
      timestamp: timestamp
    }];
    changedTouches = emulatedTouches;
    touches = domEventType === 'mouseup' || domEventType === 'dragstart' ? emptyArray : emulatedTouches;
  }

  var responderEvent = {
    bubbles: true,
    cancelable: true,
    currentTarget: null,
    defaultPrevented: domEvent.defaultPrevented,
    dispatchConfig: emptyObject,
    eventPhase: domEvent.eventPhase,
    isDefaultPrevented: function isDefaultPrevented() {
      return domEvent.defaultPrevented;
    },
    isPropagationStopped: function isPropagationStopped() {
      return propagationWasStopped;
    },
    isTrusted: domEvent.isTrusted,
    nativeEvent: {
      altKey: false,
      ctrlKey: false,
      metaKey: metaKey,
      shiftKey: shiftKey,
      changedTouches: changedTouches,
      force: force,
      identifier: identifier,

      get locationX() {
        return locationX(clientX);
      },

      get locationY() {
        return locationY(clientY);
      },

      pageX: pageX,
      pageY: pageY,
      target: domEvent.target,
      timestamp: timestamp,
      touches: touches,
      type: domEventType
    },
    persist: emptyFunction,
    preventDefault: preventDefault,
    stopPropagation: function stopPropagation() {
      propagationWasStopped = true;
    },
    target: domEvent.target,
    timeStamp: timestamp,
    touchHistory: useResponderEvents_ResponderTouchHistoryStore.touchHistory
  };

  function locationX(x) {
    rect = rect || Object(getBoundingClientRect["a" /* default */])(responderEvent.currentTarget);

    if (rect) {
      return x - rect.left;
    }
  }

  function locationY(y) {
    rect = rect || Object(getBoundingClientRect["a" /* default */])(responderEvent.currentTarget);

    if (rect) {
      return y - rect.top;
    }
  }

  return responderEvent;
}
// CONCATENATED MODULE: ./node_modules/react-native-web/dist/modules/isSelectionValid/index.js
function isSelectionValid() {
  var selection = window.getSelection();
  var string = selection.toString();
  var anchorNode = selection.anchorNode;
  var focusNode = selection.focusNode;
  var isTextNode = anchorNode && anchorNode.nodeType === window.Node.TEXT_NODE || focusNode && focusNode.nodeType === window.Node.TEXT_NODE;
  return string.length >= 1 && string !== '\n' && isTextNode;
}
// CONCATENATED MODULE: ./node_modules/react-native-web/dist/modules/useResponderEvents/utils.js

var keyName = '__reactResponderId';

function getEventPath(domEvent) {
  if (domEvent.type === 'selectionchange') {
    var target = window.getSelection().anchorNode;
    return composedPathFallback(target);
  } else {
    var path = domEvent.composedPath != null ? domEvent.composedPath() : composedPathFallback(domEvent.target);
    return path;
  }
}

function composedPathFallback(target) {
  var path = [];

  while (target != null && target !== document.body) {
    path.push(target);
    target = target.parentNode;
  }

  return path;
}

function getResponderId(node) {
  if (node != null) {
    return node[keyName];
  }

  return null;
}

function setResponderId(node, id) {
  if (node != null) {
    node[keyName] = id;
  }
}
function getResponderPaths(domEvent) {
  var idPath = [];
  var nodePath = [];
  var eventPath = getEventPath(domEvent);

  for (var i = 0; i < eventPath.length; i++) {
    var node = eventPath[i];
    var id = getResponderId(node);

    if (id != null) {
      idPath.push(id);
      nodePath.push(node);
    }
  }

  return {
    idPath: idPath,
    nodePath: nodePath
  };
}
function getLowestCommonAncestor(pathA, pathB) {
  var pathALength = pathA.length;
  var pathBLength = pathB.length;

  if (pathALength === 0 || pathBLength === 0 || pathA[pathALength - 1] !== pathB[pathBLength - 1]) {
    return null;
  }

  var itemA = pathA[0];
  var indexA = 0;
  var itemB = pathB[0];
  var indexB = 0;

  if (pathALength - pathBLength > 0) {
    indexA = pathALength - pathBLength;
    itemA = pathA[indexA];
    pathALength = pathBLength;
  }

  if (pathBLength - pathALength > 0) {
    indexB = pathBLength - pathALength;
    itemB = pathB[indexB];
    pathBLength = pathALength;
  }

  var depth = pathALength;

  while (depth--) {
    if (itemA === itemB) {
      return itemA;
    }

    itemA = pathA[indexA++];
    itemB = pathB[indexB++];
  }

  return null;
}
function hasTargetTouches(target, touches) {
  if (!touches || touches.length === 0) {
    return false;
  }

  for (var i = 0; i < touches.length; i++) {
    var node = touches[i].target;

    if (node != null) {
      if (target.contains(node)) {
        return true;
      }
    }
  }

  return false;
}
function hasValidSelection(domEvent) {
  if (domEvent.type === 'selectionchange') {
    return isSelectionValid();
  }

  return domEvent.type === 'select';
}
function isPrimaryPointerDown(domEvent) {
  var altKey = domEvent.altKey,
      button = domEvent.button,
      buttons = domEvent.buttons,
      ctrlKey = domEvent.ctrlKey,
      type = domEvent.type;
  var isTouch = type === 'touchstart' || type === 'touchmove';
  var isPrimaryMouseDown = type === 'mousedown' && (button === 0 || buttons === 1);
  var isPrimaryMouseMove = type === 'mousemove' && buttons === 1;
  var noModifiers = altKey === false && ctrlKey === false;

  if (isTouch || isPrimaryMouseDown && noModifiers || isPrimaryMouseMove && noModifiers) {
    return true;
  }

  return false;
}
// CONCATENATED MODULE: ./node_modules/react-native-web/dist/modules/useResponderEvents/ResponderSystem.js





var ResponderSystem_emptyObject = {};
var startRegistration = ['onStartShouldSetResponderCapture', 'onStartShouldSetResponder', {
  bubbles: true
}];
var moveRegistration = ['onMoveShouldSetResponderCapture', 'onMoveShouldSetResponder', {
  bubbles: true
}];
var scrollRegistration = ['onScrollShouldSetResponderCapture', 'onScrollShouldSetResponder', {
  bubbles: false
}];
var shouldSetResponderEvents = {
  touchstart: startRegistration,
  mousedown: startRegistration,
  touchmove: moveRegistration,
  mousemove: moveRegistration,
  scroll: scrollRegistration
};
var emptyResponder = {
  id: null,
  idPath: null,
  node: null
};
var responderListenersMap = new Map();
var isEmulatingMouseEvents = false;
var trackedTouchCount = 0;
var currentResponder = {
  id: null,
  node: null,
  idPath: null
};

function changeCurrentResponder(responder) {
  currentResponder = responder;
}

function getResponderConfig(id) {
  var config = responderListenersMap.get(id);
  return config != null ? config : ResponderSystem_emptyObject;
}

function eventListener(domEvent) {
  var eventType = domEvent.type;
  var eventTarget = domEvent.target;

  if (eventType === 'touchstart') {
    isEmulatingMouseEvents = true;
  }

  if (eventType === 'touchmove' || trackedTouchCount > 1) {
    isEmulatingMouseEvents = false;
  }

  if (eventType === 'mousedown' && isEmulatingMouseEvents || eventType === 'mousemove' && isEmulatingMouseEvents || eventType === 'mousemove' && trackedTouchCount < 1) {
    return;
  }

  if (isEmulatingMouseEvents && eventType === 'mouseup') {
    if (trackedTouchCount === 0) {
      isEmulatingMouseEvents = false;
    }

    return;
  }

  var isStartEvent = isStartish(eventType) && isPrimaryPointerDown(domEvent);
  var isMoveEvent = isMoveish(eventType);
  var isEndEvent = isEndish(eventType);
  var isScrollEvent = isScroll(eventType);
  var isSelectionChangeEvent = isSelectionChange(eventType);
  var responderEvent = createResponderEvent(domEvent);

  if (isStartEvent || isMoveEvent || isEndEvent) {
    if (domEvent.touches) {
      trackedTouchCount = domEvent.touches.length;
    } else {
      if (isStartEvent) {
        trackedTouchCount = 1;
      } else if (isEndEvent) {
        trackedTouchCount = 0;
      }
    }

    useResponderEvents_ResponderTouchHistoryStore.recordTouchTrack(eventType, responderEvent.nativeEvent);
  }

  var eventPaths = getResponderPaths(domEvent);
  var wasNegotiated = false;
  var wantsResponder;

  if (isStartEvent || isMoveEvent || isScrollEvent && trackedTouchCount > 0) {
    var currentResponderIdPath = currentResponder.idPath;
    var eventIdPath = eventPaths.idPath;

    if (currentResponderIdPath != null && eventIdPath != null) {
      var lowestCommonAncestor = getLowestCommonAncestor(currentResponderIdPath, eventIdPath);

      if (lowestCommonAncestor != null) {
        var indexOfLowestCommonAncestor = eventIdPath.indexOf(lowestCommonAncestor);
        var index = indexOfLowestCommonAncestor + (lowestCommonAncestor === currentResponder.id ? 1 : 0);
        eventPaths = {
          idPath: eventIdPath.slice(index),
          nodePath: eventPaths.nodePath.slice(index)
        };
      } else {
        eventPaths = null;
      }
    }

    if (eventPaths != null) {
      wantsResponder = findWantsResponder(eventPaths, domEvent, responderEvent);

      if (wantsResponder != null) {
        attemptTransfer(responderEvent, wantsResponder);
        wasNegotiated = true;
      }
    }
  }

  if (currentResponder.id != null && currentResponder.node != null) {
    var _currentResponder = currentResponder,
        id = _currentResponder.id,
        node = _currentResponder.node;

    var _getResponderConfig = getResponderConfig(id),
        onResponderStart = _getResponderConfig.onResponderStart,
        onResponderMove = _getResponderConfig.onResponderMove,
        onResponderEnd = _getResponderConfig.onResponderEnd,
        onResponderRelease = _getResponderConfig.onResponderRelease,
        onResponderTerminate = _getResponderConfig.onResponderTerminate,
        onResponderTerminationRequest = _getResponderConfig.onResponderTerminationRequest;

    responderEvent.bubbles = false;
    responderEvent.cancelable = false;
    responderEvent.currentTarget = node;

    if (isStartEvent) {
      if (onResponderStart != null) {
        responderEvent.dispatchConfig.registrationName = 'onResponderStart';
        onResponderStart(responderEvent);
      }
    } else if (isMoveEvent) {
      if (onResponderMove != null) {
        responderEvent.dispatchConfig.registrationName = 'onResponderMove';
        onResponderMove(responderEvent);
      }
    } else {
      var isTerminateEvent = isCancelish(eventType) || eventType === 'contextmenu' || eventType === 'blur' && eventTarget === window || eventType === 'blur' && eventTarget.contains(node) && domEvent.relatedTarget !== node || isScrollEvent && trackedTouchCount === 0 || isScrollEvent && eventTarget.contains(node) && eventTarget !== node || isSelectionChangeEvent && hasValidSelection(domEvent);
      var isReleaseEvent = isEndEvent && !isTerminateEvent && !hasTargetTouches(node, domEvent.touches);

      if (isEndEvent) {
        if (onResponderEnd != null) {
          responderEvent.dispatchConfig.registrationName = 'onResponderEnd';
          onResponderEnd(responderEvent);
        }
      }

      if (isReleaseEvent) {
        if (onResponderRelease != null) {
          responderEvent.dispatchConfig.registrationName = 'onResponderRelease';
          onResponderRelease(responderEvent);
        }

        changeCurrentResponder(emptyResponder);
      }

      if (isTerminateEvent) {
        var shouldTerminate = true;

        if (eventType === 'contextmenu' || eventType === 'scroll' || eventType === 'selectionchange') {
          if (wasNegotiated) {
            shouldTerminate = false;
          } else if (onResponderTerminationRequest != null) {
            responderEvent.dispatchConfig.registrationName = 'onResponderTerminationRequest';

            if (onResponderTerminationRequest(responderEvent) === false) {
              shouldTerminate = false;
            }
          }
        }

        if (shouldTerminate) {
          if (onResponderTerminate != null) {
            responderEvent.dispatchConfig.registrationName = 'onResponderTerminate';
            onResponderTerminate(responderEvent);
          }

          changeCurrentResponder(emptyResponder);
          isEmulatingMouseEvents = false;
          trackedTouchCount = 0;
        }
      }
    }
  }
}

function findWantsResponder(eventPaths, domEvent, responderEvent) {
  var shouldSetCallbacks = shouldSetResponderEvents[domEvent.type];

  if (shouldSetCallbacks != null) {
    var idPath = eventPaths.idPath,
        nodePath = eventPaths.nodePath;
    var shouldSetCallbackCaptureName = shouldSetCallbacks[0];
    var shouldSetCallbackBubbleName = shouldSetCallbacks[1];
    var bubbles = shouldSetCallbacks[2].bubbles;

    var check = function check(id, node, callbackName) {
      var config = getResponderConfig(id);
      var shouldSetCallback = config[callbackName];

      if (shouldSetCallback != null) {
        responderEvent.currentTarget = node;

        if (shouldSetCallback(responderEvent) === true) {
          var prunedIdPath = idPath.slice(idPath.indexOf(id));
          return {
            id: id,
            node: node,
            idPath: prunedIdPath
          };
        }
      }
    };

    for (var i = idPath.length - 1; i >= 0; i--) {
      var id = idPath[i];
      var node = nodePath[i];
      var result = check(id, node, shouldSetCallbackCaptureName);

      if (result != null) {
        return result;
      }

      if (responderEvent.isPropagationStopped() === true) {
        return;
      }
    }

    if (bubbles) {
      for (var _i = 0; _i < idPath.length; _i++) {
        var _id = idPath[_i];
        var _node = nodePath[_i];

        var _result = check(_id, _node, shouldSetCallbackBubbleName);

        if (_result != null) {
          return _result;
        }

        if (responderEvent.isPropagationStopped() === true) {
          return;
        }
      }
    } else {
      var _id2 = idPath[0];
      var _node2 = nodePath[0];
      var target = domEvent.target;

      if (target === _node2) {
        return check(_id2, _node2, shouldSetCallbackBubbleName);
      }
    }
  }
}

function attemptTransfer(responderEvent, wantsResponder) {
  var _currentResponder2 = currentResponder,
      currentId = _currentResponder2.id,
      currentNode = _currentResponder2.node;
  var id = wantsResponder.id,
      node = wantsResponder.node;

  var _getResponderConfig2 = getResponderConfig(id),
      onResponderGrant = _getResponderConfig2.onResponderGrant,
      onResponderReject = _getResponderConfig2.onResponderReject;

  responderEvent.bubbles = false;
  responderEvent.cancelable = false;
  responderEvent.currentTarget = node;

  if (currentId == null) {
    if (onResponderGrant != null) {
      responderEvent.currentTarget = node;
      responderEvent.dispatchConfig.registrationName = 'onResponderGrant';
      onResponderGrant(responderEvent);
    }

    changeCurrentResponder(wantsResponder);
  } else {
    var _getResponderConfig3 = getResponderConfig(currentId),
        onResponderTerminate = _getResponderConfig3.onResponderTerminate,
        onResponderTerminationRequest = _getResponderConfig3.onResponderTerminationRequest;

    var allowTransfer = true;

    if (onResponderTerminationRequest != null) {
      responderEvent.currentTarget = currentNode;
      responderEvent.dispatchConfig.registrationName = 'onResponderTerminationRequest';

      if (onResponderTerminationRequest(responderEvent) === false) {
        allowTransfer = false;
      }
    }

    if (allowTransfer) {
      if (onResponderTerminate != null) {
        responderEvent.currentTarget = currentNode;
        responderEvent.dispatchConfig.registrationName = 'onResponderTerminate';
        onResponderTerminate(responderEvent);
      }

      if (onResponderGrant != null) {
        responderEvent.currentTarget = node;
        responderEvent.dispatchConfig.registrationName = 'onResponderGrant';
        onResponderGrant(responderEvent);
      }

      changeCurrentResponder(wantsResponder);
    } else {
      if (onResponderReject != null) {
        responderEvent.currentTarget = node;
        responderEvent.dispatchConfig.registrationName = 'onResponderReject';
        onResponderReject(responderEvent);
      }
    }
  }
}

var documentEventsCapturePhase = ['blur', 'scroll'];
var documentEventsBubblePhase = ['mousedown', 'mousemove', 'mouseup', 'dragstart', 'touchstart', 'touchmove', 'touchend', 'touchcancel', 'contextmenu', 'select', 'selectionchange'];
function attachListeners() {
  if (ExecutionEnvironment["canUseDOM"] && window.__reactResponderSystemActive == null) {
    window.addEventListener('blur', eventListener);
    documentEventsBubblePhase.forEach(function (eventType) {
      document.addEventListener(eventType, eventListener);
    });
    documentEventsCapturePhase.forEach(function (eventType) {
      document.addEventListener(eventType, eventListener, true);
    });
    window.__reactResponderSystemActive = true;
  }
}
function addNode(id, node, config) {
  setResponderId(node, id);
  responderListenersMap.set(id, config);
}
function removeNode(id) {
  if (currentResponder.id === id) {
    terminateResponder();
  }

  if (responderListenersMap.has(id)) {
    responderListenersMap.delete(id);
  }
}
function terminateResponder() {
  var _currentResponder3 = currentResponder,
      id = _currentResponder3.id,
      node = _currentResponder3.node;

  if (id != null && node != null) {
    var _getResponderConfig4 = getResponderConfig(id),
        onResponderTerminate = _getResponderConfig4.onResponderTerminate;

    if (onResponderTerminate != null) {
      var event = createResponderEvent({});
      event.currentTarget = node;
      onResponderTerminate(event);
    }

    changeCurrentResponder(emptyResponder);
  }

  isEmulatingMouseEvents = false;
  trackedTouchCount = 0;
}
function getResponderNode() {
  return currentResponder.node;
}
// CONCATENATED MODULE: ./node_modules/react-native-web/dist/modules/useResponderEvents/index.js


var useResponderEvents_emptyObject = {};
var idCounter = 0;

function useStable(getInitialValue) {
  var ref = react["useRef"](null);

  if (ref.current == null) {
    ref.current = getInitialValue();
  }

  return ref.current;
}

function useResponderEvents(hostRef, config) {
  if (config === void 0) {
    config = useResponderEvents_emptyObject;
  }

  var id = useStable(function () {
    return idCounter++;
  });
  var isAttachedRef = react["useRef"](false);
  react["useEffect"](function () {
    attachListeners();
    return function () {
      removeNode(id);
    };
  }, [id]);
  react["useEffect"](function () {
    var _config = config,
        onMoveShouldSetResponder = _config.onMoveShouldSetResponder,
        onMoveShouldSetResponderCapture = _config.onMoveShouldSetResponderCapture,
        onScrollShouldSetResponder = _config.onScrollShouldSetResponder,
        onScrollShouldSetResponderCapture = _config.onScrollShouldSetResponderCapture,
        onSelectionChangeShouldSetResponder = _config.onSelectionChangeShouldSetResponder,
        onSelectionChangeShouldSetResponderCapture = _config.onSelectionChangeShouldSetResponderCapture,
        onStartShouldSetResponder = _config.onStartShouldSetResponder,
        onStartShouldSetResponderCapture = _config.onStartShouldSetResponderCapture;
    var requiresResponderSystem = onMoveShouldSetResponder != null || onMoveShouldSetResponderCapture != null || onScrollShouldSetResponder != null || onScrollShouldSetResponderCapture != null || onSelectionChangeShouldSetResponder != null || onSelectionChangeShouldSetResponderCapture != null || onStartShouldSetResponder != null || onStartShouldSetResponderCapture != null;
    var node = hostRef.current;

    if (requiresResponderSystem) {
      addNode(id, node, config);
      isAttachedRef.current = true;
    } else if (isAttachedRef.current) {
      removeNode(id);
      isAttachedRef.current = false;
    }
  }, [config, hostRef, id]);
  react["useDebugValue"]({
    isResponder: hostRef.current === getResponderNode()
  });
  react["useDebugValue"](config);
}

/***/ }),

/***/ "HYAF":
/***/ (function(module, exports) {

// `RequireObjectCoercible` abstract operation
// https://tc39.es/ecma262/#sec-requireobjectcoercible
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on " + it);
  return it;
};


/***/ }),

/***/ "HiWe":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = capitalizeString;

function capitalizeString(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

/***/ }),

/***/ "I+eb":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("2oRo");
var getOwnPropertyDescriptor = __webpack_require__("Bs8V").f;
var createNonEnumerableProperty = __webpack_require__("kRJp");
var redefine = __webpack_require__("busE");
var setGlobal = __webpack_require__("zk60");
var copyConstructorProperties = __webpack_require__("6JNq");
var isForced = __webpack_require__("lMq5");

/*
  options.target      - name of the target object
  options.global      - target is the global object
  options.stat        - export as static methods of target
  options.proto       - export as prototype methods of target
  options.real        - real prototype method for the `pure` version
  options.forced      - export even if the native feature is available
  options.bind        - bind methods to the target, required for the `pure` version
  options.wrap        - wrap constructors to preventing global pollution, required for the `pure` version
  options.unsafe      - use the simple assignment of property instead of delete + defineProperty
  options.sham        - add a flag to not completely full polyfills
  options.enumerable  - export as enumerable property
  options.noTargetGet - prevent calling a getter on target
*/
module.exports = function (options, source) {
  var TARGET = options.target;
  var GLOBAL = options.global;
  var STATIC = options.stat;
  var FORCED, target, key, targetProperty, sourceProperty, descriptor;
  if (GLOBAL) {
    target = global;
  } else if (STATIC) {
    target = global[TARGET] || setGlobal(TARGET, {});
  } else {
    target = (global[TARGET] || {}).prototype;
  }
  if (target) for (key in source) {
    sourceProperty = source[key];
    if (options.noTargetGet) {
      descriptor = getOwnPropertyDescriptor(target, key);
      targetProperty = descriptor && descriptor.value;
    } else targetProperty = target[key];
    FORCED = isForced(GLOBAL ? key : TARGET + (STATIC ? '.' : '#') + key, options.forced);
    // contained in target
    if (!FORCED && targetProperty !== undefined) {
      if (typeof sourceProperty === typeof targetProperty) continue;
      copyConstructorProperties(sourceProperty, targetProperty);
    }
    // add a flag to not completely full polyfills
    if (options.sham || (targetProperty && targetProperty.sham)) {
      createNonEnumerableProperty(sourceProperty, 'sham', true);
    }
    // extend global
    redefine(target, key, sourceProperty, options);
  }
};


/***/ }),

/***/ "I8vh":
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__("ppGB");

var max = Math.max;
var min = Math.min;

// Helper for a popular repeating case of the spec:
// Let integer be ? ToInteger(index).
// If integer < 0, let result be max((length + integer), 0); else let result be min(integer, length).
module.exports = function (index, length) {
  var integer = toInteger(index);
  return integer < 0 ? max(integer + length, 0) : min(integer, length);
};


/***/ }),

/***/ "IOVJ":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("J4zp");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("lSNA");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("lwsE");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("W8MJ");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("7W2i");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("a1gu");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("Nsbk");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("q1tI");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("17x9");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _loader__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("emEt");
/* harmony import */ var _api_runner_browser__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("xtsi");
/* harmony import */ var _api_runner_browser__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_api_runner_browser__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _find_path__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("30RF");
function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);if(enumerableOnly)symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable;});keys.push.apply(keys,symbols);}return keys;}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=arguments[i]!=null?arguments[i]:{};if(i%2){ownKeys(Object(source),true).forEach(function(key){_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(target,key,source[key]);});}else if(Object.getOwnPropertyDescriptors){Object.defineProperties(target,Object.getOwnPropertyDescriptors(source));}else{ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key));});}}return target;}function _createSuper(Derived){var hasNativeReflectConstruct=_isNativeReflectConstruct();return function _createSuperInternal(){var Super=_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6___default()(Derived),result;if(hasNativeReflectConstruct){var NewTarget=_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6___default()(this).constructor;result=Reflect.construct(Super,arguments,NewTarget);}else{result=Super.apply(this,arguments);}return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5___default()(this,result);};}function _isNativeReflectConstruct(){if(typeof Reflect==="undefined"||!Reflect.construct)return false;if(Reflect.construct.sham)return false;if(typeof Proxy==="function")return true;try{Date.prototype.toString.call(Reflect.construct(Date,[],function(){}));return true;}catch(e){return false;}}var PageRenderer=function(_React$Component){_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default()(PageRenderer,_React$Component);var _super=_createSuper(PageRenderer);function PageRenderer(){_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default()(this,PageRenderer);return _super.apply(this,arguments);}_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3___default()(PageRenderer,[{key:"render",value:function render(){var props=_objectSpread(_objectSpread({},this.props),{},{params:_objectSpread(_objectSpread({},Object(_find_path__WEBPACK_IMPORTED_MODULE_11__[/* grabMatchParams */ "c"])(this.props.location.pathname)),this.props.pageResources.json.pageContext.__params),pathContext:this.props.pageContext});var _apiRunner=Object(_api_runner_browser__WEBPACK_IMPORTED_MODULE_10__["apiRunner"])("replaceComponentRenderer",{props:this.props,loader:_loader__WEBPACK_IMPORTED_MODULE_9__["publicLoader"]}),_apiRunner2=_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_apiRunner,1),replacementElement=_apiRunner2[0];var pageElement=replacementElement||Object(react__WEBPACK_IMPORTED_MODULE_7__["createElement"])(this.props.pageResources.component,_objectSpread(_objectSpread({},props),{},{key:this.props.path||this.props.pageResources.page.path}));var wrappedPage=Object(_api_runner_browser__WEBPACK_IMPORTED_MODULE_10__["apiRunner"])("wrapPageElement",{element:pageElement,props:props},pageElement,function(_ref){var result=_ref.result;return{element:result,props:props};}).pop();return wrappedPage;}}]);return PageRenderer;}(react__WEBPACK_IMPORTED_MODULE_7___default.a.Component);PageRenderer.propTypes={location:prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.object.isRequired,pageResources:prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.object.isRequired,data:prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.object,pageContext:prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.object.isRequired};/* harmony default export */ __webpack_exports__["a"] = (PageRenderer);

/***/ }),

/***/ "Ijbi":
/***/ (function(module, exports, __webpack_require__) {

var arrayLikeToArray = __webpack_require__("WkPL");

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return arrayLikeToArray(arr);
}

module.exports = _arrayWithoutHoles;

/***/ }),

/***/ "Iu5r":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _ReactNativePropRegistry__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("XFth");
/* harmony import */ var fbjs_lib_invariant__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("2NuI");
/* harmony import */ var fbjs_lib_invariant__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(fbjs_lib_invariant__WEBPACK_IMPORTED_MODULE_1__);



function getStyle(style) {
  if (typeof style === 'number') {
    return _ReactNativePropRegistry__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].getByID(style);
  }

  return style;
}

function flattenStyle(style) {
  if (!style) {
    return undefined;
  }

  if (false) {}

  if (!Array.isArray(style)) {
    return getStyle(style);
  }

  var result = {};

  for (var i = 0, styleLength = style.length; i < styleLength; ++i) {
    var computedStyle = flattenStyle(style[i]);

    if (computedStyle) {
      for (var key in computedStyle) {
        var value = computedStyle[key];
        result[key] = value;
      }
    }
  }

  return result;
}

/* harmony default export */ __webpack_exports__["a"] = (flattenStyle);

/***/ }),

/***/ "IybW":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/react-native-web/dist/modules/AccessibilityUtil/buttonLikeRoles.js
var buttonLikeRoles = {
  button: true,
  menuitem: true
};
/* harmony default export */ var AccessibilityUtil_buttonLikeRoles = (buttonLikeRoles);
// CONCATENATED MODULE: ./node_modules/react-native-web/dist/modules/AccessibilityUtil/isDisabled.js
var isDisabled = function isDisabled(props) {
  return props.disabled || Array.isArray(props.accessibilityStates) && props.accessibilityStates.indexOf('disabled') > -1;
};

/* harmony default export */ var AccessibilityUtil_isDisabled = (isDisabled);
// CONCATENATED MODULE: ./node_modules/react-native-web/dist/modules/AccessibilityUtil/propsToAriaRole.js
var accessibilityRoleToWebRole = {
  adjustable: 'slider',
  button: 'button',
  header: 'heading',
  image: 'img',
  imagebutton: null,
  keyboardkey: null,
  label: null,
  link: 'link',
  none: 'presentation',
  search: 'search',
  summary: 'region',
  text: null
};

var propsToAriaRole = function propsToAriaRole(_ref) {
  var accessibilityRole = _ref.accessibilityRole;

  if (accessibilityRole) {
    var inferredRole = accessibilityRoleToWebRole[accessibilityRole];

    if (inferredRole !== null) {
      return inferredRole || accessibilityRole;
    }
  }
};

/* harmony default export */ var AccessibilityUtil_propsToAriaRole = (propsToAriaRole);
// CONCATENATED MODULE: ./node_modules/react-native-web/dist/modules/AccessibilityUtil/propsToAccessibilityComponent.js

var roleComponents = {
  article: 'article',
  banner: 'header',
  complementary: 'aside',
  contentinfo: 'footer',
  form: 'form',
  link: 'a',
  list: 'ul',
  listitem: 'li',
  main: 'main',
  navigation: 'nav',
  region: 'section'
};
var emptyObject = {};

var propsToAccessibilityComponent_propsToAccessibilityComponent = function propsToAccessibilityComponent(props) {
  if (props === void 0) {
    props = emptyObject;
  }

  if (props.accessibilityRole === 'label') {
    return 'label';
  }

  var role = AccessibilityUtil_propsToAriaRole(props);

  if (role) {
    if (role === 'heading') {
      var level = props['aria-level'];

      if (level != null) {
        return "h" + level;
      }

      return 'h1';
    }

    return roleComponents[role];
  }
};

/* harmony default export */ var AccessibilityUtil_propsToAccessibilityComponent = (propsToAccessibilityComponent_propsToAccessibilityComponent);
// CONCATENATED MODULE: ./node_modules/react-native-web/dist/modules/AccessibilityUtil/index.js




var AccessibilityUtil = {
  buttonLikeRoles: AccessibilityUtil_buttonLikeRoles,
  isDisabled: AccessibilityUtil_isDisabled,
  propsToAccessibilityComponent: AccessibilityUtil_propsToAccessibilityComponent,
  propsToAriaRole: AccessibilityUtil_propsToAriaRole
};
/* harmony default export */ var modules_AccessibilityUtil = __webpack_exports__["a"] = (AccessibilityUtil);

/***/ }),

/***/ "J4zp":
/***/ (function(module, exports, __webpack_require__) {

var arrayWithHoles = __webpack_require__("wTVA");

var iterableToArrayLimit = __webpack_require__("m0LI");

var unsupportedIterableToArray = __webpack_require__("ZhPi");

var nonIterableRest = __webpack_require__("wkBT");

function _slicedToArray(arr, i) {
  return arrayWithHoles(arr) || iterableToArrayLimit(arr, i) || unsupportedIterableToArray(arr, i) || nonIterableRest();
}

module.exports = _slicedToArray;

/***/ }),

/***/ "JBy8":
/***/ (function(module, exports, __webpack_require__) {

var internalObjectKeys = __webpack_require__("yoRg");
var enumBugKeys = __webpack_require__("eDl+");

var hiddenKeys = enumBugKeys.concat('length', 'prototype');

// `Object.getOwnPropertyNames` method
// https://tc39.es/ecma262/#sec-object.getownpropertynames
exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return internalObjectKeys(O, hiddenKeys);
};


/***/ }),

/***/ "JTKy":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("q1tI");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony default export */ __webpack_exports__["default"] = ({React:react__WEBPACK_IMPORTED_MODULE_0__});

/***/ }),

/***/ "JeVI":
/***/ (function(module) {

module.exports = JSON.parse("[]");

/***/ }),

/***/ "LQDL":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("2oRo");
var userAgent = __webpack_require__("NC/Y");

var process = global.process;
var versions = process && process.versions;
var v8 = versions && versions.v8;
var match, version;

if (v8) {
  match = v8.split('.');
  version = match[0] + match[1];
} else if (userAgent) {
  match = userAgent.match(/Edge\/(\d+)/);
  if (!match || match[1] >= 74) {
    match = userAgent.match(/Chrome\/(\d+)/);
    if (match) version = match[1];
  }
}

module.exports = version && +version;


/***/ }),

/***/ "LYrO":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "startsWith", function() { return startsWith; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pick", function() { return pick; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "match", function() { return match; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resolve", function() { return resolve; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "insertParams", function() { return insertParams; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "validateRedirect", function() { return validateRedirect; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "shallowCompare", function() { return shallowCompare; });
/* harmony import */ var invariant__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("QLaP");
/* harmony import */ var invariant__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(invariant__WEBPACK_IMPORTED_MODULE_0__);


////////////////////////////////////////////////////////////////////////////////
// startsWith(string, search) - Check if `string` starts with `search`
var startsWith = function startsWith(string, search) {
  return string.substr(0, search.length) === search;
};

////////////////////////////////////////////////////////////////////////////////
// pick(routes, uri)
//
// Ranks and picks the best route to match. Each segment gets the highest
// amount of points, then the type of segment gets an additional amount of
// points where
//
//     static > dynamic > splat > root
//
// This way we don't have to worry about the order of our routes, let the
// computers do it.
//
// A route looks like this
//
//     { path, default, value }
//
// And a returned match looks like:
//
//     { route, params, uri }
//
// I know, I should use TypeScript not comments for these types.
var pick = function pick(routes, uri) {
  var match = void 0;
  var default_ = void 0;

  var _uri$split = uri.split("?"),
      uriPathname = _uri$split[0];

  var uriSegments = segmentize(uriPathname);
  var isRootUri = uriSegments[0] === "";
  var ranked = rankRoutes(routes);

  for (var i = 0, l = ranked.length; i < l; i++) {
    var missed = false;
    var route = ranked[i].route;

    if (route.default) {
      default_ = {
        route: route,
        params: {},
        uri: uri
      };
      continue;
    }

    var routeSegments = segmentize(route.path);
    var params = {};
    var max = Math.max(uriSegments.length, routeSegments.length);
    var index = 0;

    for (; index < max; index++) {
      var routeSegment = routeSegments[index];
      var uriSegment = uriSegments[index];

      if (isSplat(routeSegment)) {
        // Hit a splat, just grab the rest, and return a match
        // uri:   /files/documents/work
        // route: /files/*
        var param = routeSegment.slice(1) || "*";
        params[param] = uriSegments.slice(index).map(decodeURIComponent).join("/");
        break;
      }

      if (uriSegment === undefined) {
        // URI is shorter than the route, no match
        // uri:   /users
        // route: /users/:userId
        missed = true;
        break;
      }

      var dynamicMatch = paramRe.exec(routeSegment);

      if (dynamicMatch && !isRootUri) {
        var matchIsNotReserved = reservedNames.indexOf(dynamicMatch[1]) === -1;
        !matchIsNotReserved ?  false ? undefined : invariant__WEBPACK_IMPORTED_MODULE_0___default()(false) : void 0;
        var value = decodeURIComponent(uriSegment);
        params[dynamicMatch[1]] = value;
      } else if (routeSegment !== uriSegment) {
        // Current segments don't match, not dynamic, not splat, so no match
        // uri:   /users/123/settings
        // route: /users/:id/profile
        missed = true;
        break;
      }
    }

    if (!missed) {
      match = {
        route: route,
        params: params,
        uri: "/" + uriSegments.slice(0, index).join("/")
      };
      break;
    }
  }

  return match || default_ || null;
};

////////////////////////////////////////////////////////////////////////////////
// match(path, uri) - Matches just one path to a uri, also lol
var match = function match(path, uri) {
  return pick([{ path: path }], uri);
};

////////////////////////////////////////////////////////////////////////////////
// resolve(to, basepath)
//
// Resolves URIs as though every path is a directory, no files.  Relative URIs
// in the browser can feel awkward because not only can you be "in a directory"
// you can be "at a file", too. For example
//
//     browserSpecResolve('foo', '/bar/') => /bar/foo
//     browserSpecResolve('foo', '/bar') => /foo
//
// But on the command line of a file system, it's not as complicated, you can't
// `cd` from a file, only directories.  This way, links have to know less about
// their current path. To go deeper you can do this:
//
//     <Link to="deeper"/>
//     // instead of
//     <Link to=`{${props.uri}/deeper}`/>
//
// Just like `cd`, if you want to go deeper from the command line, you do this:
//
//     cd deeper
//     # not
//     cd $(pwd)/deeper
//
// By treating every path as a directory, linking to relative paths should
// require less contextual information and (fingers crossed) be more intuitive.
var resolve = function resolve(to, base) {
  // /foo/bar, /baz/qux => /foo/bar
  if (startsWith(to, "/")) {
    return to;
  }

  var _to$split = to.split("?"),
      toPathname = _to$split[0],
      toQuery = _to$split[1];

  var _base$split = base.split("?"),
      basePathname = _base$split[0];

  var toSegments = segmentize(toPathname);
  var baseSegments = segmentize(basePathname);

  // ?a=b, /users?b=c => /users?a=b
  if (toSegments[0] === "") {
    return addQuery(basePathname, toQuery);
  }

  // profile, /users/789 => /users/789/profile
  if (!startsWith(toSegments[0], ".")) {
    var pathname = baseSegments.concat(toSegments).join("/");
    return addQuery((basePathname === "/" ? "" : "/") + pathname, toQuery);
  }

  // ./         /users/123  =>  /users/123
  // ../        /users/123  =>  /users
  // ../..      /users/123  =>  /
  // ../../one  /a/b/c/d    =>  /a/b/one
  // .././one   /a/b/c/d    =>  /a/b/c/one
  var allSegments = baseSegments.concat(toSegments);
  var segments = [];
  for (var i = 0, l = allSegments.length; i < l; i++) {
    var segment = allSegments[i];
    if (segment === "..") segments.pop();else if (segment !== ".") segments.push(segment);
  }

  return addQuery("/" + segments.join("/"), toQuery);
};

////////////////////////////////////////////////////////////////////////////////
// insertParams(path, params)

var insertParams = function insertParams(path, params) {
  var _path$split = path.split("?"),
      pathBase = _path$split[0],
      _path$split$ = _path$split[1],
      query = _path$split$ === undefined ? "" : _path$split$;

  var segments = segmentize(pathBase);
  var constructedPath = "/" + segments.map(function (segment) {
    var match = paramRe.exec(segment);
    return match ? params[match[1]] : segment;
  }).join("/");
  var _params$location = params.location;
  _params$location = _params$location === undefined ? {} : _params$location;
  var _params$location$sear = _params$location.search,
      search = _params$location$sear === undefined ? "" : _params$location$sear;

  var searchSplit = search.split("?")[1] || "";
  constructedPath = addQuery(constructedPath, query, searchSplit);
  return constructedPath;
};

var validateRedirect = function validateRedirect(from, to) {
  var filter = function filter(segment) {
    return isDynamic(segment);
  };
  var fromString = segmentize(from).filter(filter).sort().join("/");
  var toString = segmentize(to).filter(filter).sort().join("/");
  return fromString === toString;
};

////////////////////////////////////////////////////////////////////////////////
// Junk
var paramRe = /^:(.+)/;

var SEGMENT_POINTS = 4;
var STATIC_POINTS = 3;
var DYNAMIC_POINTS = 2;
var SPLAT_PENALTY = 1;
var ROOT_POINTS = 1;

var isRootSegment = function isRootSegment(segment) {
  return segment === "";
};
var isDynamic = function isDynamic(segment) {
  return paramRe.test(segment);
};
var isSplat = function isSplat(segment) {
  return segment && segment[0] === "*";
};

var rankRoute = function rankRoute(route, index) {
  var score = route.default ? 0 : segmentize(route.path).reduce(function (score, segment) {
    score += SEGMENT_POINTS;
    if (isRootSegment(segment)) score += ROOT_POINTS;else if (isDynamic(segment)) score += DYNAMIC_POINTS;else if (isSplat(segment)) score -= SEGMENT_POINTS + SPLAT_PENALTY;else score += STATIC_POINTS;
    return score;
  }, 0);
  return { route: route, score: score, index: index };
};

var rankRoutes = function rankRoutes(routes) {
  return routes.map(rankRoute).sort(function (a, b) {
    return a.score < b.score ? 1 : a.score > b.score ? -1 : a.index - b.index;
  });
};

var segmentize = function segmentize(uri) {
  return uri
  // strip starting/ending slashes
  .replace(/(^\/+|\/+$)/g, "").split("/");
};

var addQuery = function addQuery(pathname) {
  for (var _len = arguments.length, query = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    query[_key - 1] = arguments[_key];
  }

  query = query.filter(function (q) {
    return q && q.length > 0;
  });
  return pathname + (query && query.length > 0 ? "?" + query.join("&") : "");
};

var reservedNames = ["uri", "path"];

/**
 * Shallow compares two objects.
 * @param {Object} obj1 The first object to compare.
 * @param {Object} obj2 The second object to compare.
 */
var shallowCompare = function shallowCompare(obj1, obj2) {
  var obj1Keys = Object.keys(obj1);
  return obj1Keys.length === Object.keys(obj2).length && obj1Keys.every(function (key) {
    return obj2.hasOwnProperty(key) && obj1[key] === obj2[key];
  });
};

////////////////////////////////////////////////////////////////////////////////


/***/ }),

/***/ "LeKB":
/***/ (function(module, exports, __webpack_require__) {

module.exports=[{plugin:__webpack_require__("17SF"),options:{"plugins":[]}},{plugin:__webpack_require__("e/UW"),options:{"plugins":[]}},{plugin:__webpack_require__("fzq8"),options:{"plugins":[]}},{plugin:__webpack_require__("flL/"),options:{"plugins":[{"resolve":"/Users/brianephraim/Sites/marc-website/node_modules/gatsby-remark-images","id":"28c42f28-53d0-5cae-aad5-aee248175898","name":"gatsby-remark-images","version":"3.10.0","pluginOptions":{"plugins":[],"maxWidth":650,"linkImagesToOriginal":true,"showCaptions":false,"markdownCaptions":false,"sizeByPixelDensity":false,"backgroundColor":"white","quality":50,"withWebp":false,"tracedSVG":false,"loading":"lazy","disableBgImageOnAlpha":false,"disableBgImage":false},"nodeAPIs":["pluginOptionsSchema"],"browserAPIs":["onRouteUpdate"],"ssrAPIs":[]}],"extensions":[".mdx",".md"],"gatsbyRemarkPlugins":[{"resolve":"gatsby-remark-images","options":{"maxWidth":590}},{"resolve":"gatsby-remark-responsive-iframe","options":{"wrapperStyle":"margin-bottom: 1.0725rem"}},{"resolve":"gatsby-remark-vscode"},{"resolve":"gatsby-remark-copy-linked-files"},{"resolve":"gatsby-remark-smartypants"}],"defaultLayouts":{},"lessBabel":false,"remarkPlugins":[],"rehypePlugins":[],"mediaTypes":["text/markdown","text/x-markdown"],"root":"/Users/brianephraim/Sites/marc-website"}},{plugin:__webpack_require__("q9nr"),options:{"plugins":[],"maxWidth":650,"linkImagesToOriginal":true,"showCaptions":false,"markdownCaptions":false,"sizeByPixelDensity":false,"backgroundColor":"white","quality":50,"withWebp":false,"tracedSVG":false,"loading":"lazy","disableBgImageOnAlpha":false,"disableBgImage":false}},{plugin:__webpack_require__("pWkz"),options:{"plugins":[],"head":false,"anonymize":false,"respectDNT":false,"exclude":[],"pageTransitionDelay":0}},{plugin:__webpack_require__("npZl"),options:{"plugins":[],"name":"Gatsby Starter Blog","short_name":"GatsbyJS","start_url":"/","background_color":"#ffffff","theme_color":"#663399","display":"minimal-ui","icon":"static/lifecast-book.png","legacy":true,"theme_color_in_head":true,"cache_busting_mode":"query","crossOrigin":"anonymous","include_favicon":true,"cacheDigest":"3c02657d8298af1a6cdc554943482f7d"}},{plugin:__webpack_require__("GddB"),options:{"plugins":[]}}];

/***/ }),

/***/ "MAmL":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* eslint-disable no-var, prefer-template */
var uppercasePattern = /[A-Z]/g;
var msPattern = /^ms-/;
var cache = {};

function toHyphenLower(match) {
  return '-' + match.toLowerCase();
}

function hyphenateStyleName(name) {
  if (cache.hasOwnProperty(name)) {
    return cache[name];
  }

  var hName = name.replace(uppercasePattern, toHyphenLower);
  return cache[name] = msPattern.test(hName) ? '-' + hName : hName;
}

/* harmony default export */ __webpack_exports__["default"] = (hyphenateStyleName);

/***/ }),

/***/ "MMVs":
/***/ (function(module, exports, __webpack_require__) {

/*!
 * domready (c) Dustin Diaz 2014 - License MIT
 * ie10 fix - Mikael Kristiansson 2019
 */
!(function(name, definition) {
  if (true) module.exports = definition();
  else {}
})("domready", function() {
  var ie10 = false;
  if (navigator.appVersion.indexOf("MSIE 10") !== -1) {
    ie10 = true;
  }

  var fns = [],
    listener,
    doc = typeof document === "object" && document,
    hack = ie10
      ? doc.documentElement.doScroll("left")
      : doc.documentElement.doScroll,
    domContentLoaded = "DOMContentLoaded",
    loaded =
      doc && (hack ? /^loaded|^c/ : /^loaded|^i|^c/).test(doc.readyState);

  if (!loaded && doc)
    doc.addEventListener(
      domContentLoaded,
      (listener = function() {
        doc.removeEventListener(domContentLoaded, listener);
        loaded = 1;
        while ((listener = fns.shift())) listener();
      })
    );

  return function(fn) {
    loaded ? setTimeout(fn, 0) : fns.push(fn);
  };
});


/***/ }),

/***/ "MX5s":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = transition;

var _hyphenateProperty = __webpack_require__("Rz+p");

var _hyphenateProperty2 = _interopRequireDefault(_hyphenateProperty);

var _isPrefixedValue = __webpack_require__("sUt/");

var _isPrefixedValue2 = _interopRequireDefault(_isPrefixedValue);

var _capitalizeString = __webpack_require__("HiWe");

var _capitalizeString2 = _interopRequireDefault(_capitalizeString);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

var properties = {
  transition: true,
  transitionProperty: true,
  WebkitTransition: true,
  WebkitTransitionProperty: true,
  MozTransition: true,
  MozTransitionProperty: true
};
var prefixMapping = {
  Webkit: '-webkit-',
  Moz: '-moz-',
  ms: '-ms-'
};

function prefixValue(value, propertyPrefixMap) {
  if ((0, _isPrefixedValue2.default)(value)) {
    return value;
  } // only split multi values, not cubic beziers


  var multipleValues = value.split(/,(?![^()]*(?:\([^()]*\))?\))/g);

  for (var i = 0, len = multipleValues.length; i < len; ++i) {
    var singleValue = multipleValues[i];
    var values = [singleValue];

    for (var property in propertyPrefixMap) {
      var dashCaseProperty = (0, _hyphenateProperty2.default)(property);

      if (singleValue.indexOf(dashCaseProperty) > -1 && dashCaseProperty !== 'order') {
        var prefixes = propertyPrefixMap[property];

        for (var j = 0, pLen = prefixes.length; j < pLen; ++j) {
          // join all prefixes and create a new value
          values.unshift(singleValue.replace(dashCaseProperty, prefixMapping[prefixes[j]] + dashCaseProperty));
        }
      }
    }

    multipleValues[i] = values.join(',');
  }

  return multipleValues.join(',');
}

function transition(property, value, style, propertyPrefixMap) {
  // also check for already prefixed transitions
  if (typeof value === 'string' && properties.hasOwnProperty(property)) {
    var outputValue = prefixValue(value, propertyPrefixMap); // if the property is already prefixed

    var webkitOutput = outputValue.split(/,(?![^()]*(?:\([^()]*\))?\))/g).filter(function (val) {
      return !/-moz-|-ms-/.test(val);
    }).join(',');

    if (property.indexOf('Webkit') > -1) {
      return webkitOutput;
    }

    var mozOutput = outputValue.split(/,(?![^()]*(?:\([^()]*\))?\))/g).filter(function (val) {
      return !/-webkit-|-ms-/.test(val);
    }).join(',');

    if (property.indexOf('Moz') > -1) {
      return mozOutput;
    }

    style['Webkit' + (0, _capitalizeString2.default)(property)] = webkitOutput;
    style['Moz' + (0, _capitalizeString2.default)(property)] = mozOutput;
    return outputValue;
  }
}

/***/ }),

/***/ "NC/Y":
/***/ (function(module, exports, __webpack_require__) {

var getBuiltIn = __webpack_require__("0GbY");

module.exports = getBuiltIn('navigator', 'userAgent') || '';


/***/ }),

/***/ "NRdY":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("i8i4");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["a"] = (react_dom__WEBPACK_IMPORTED_MODULE_0__["unmountComponentAtNode"]);

/***/ }),

/***/ "NSX3":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _api_runner_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("xtsi");
/* harmony import */ var _api_runner_browser__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_api_runner_browser__WEBPACK_IMPORTED_MODULE_0__);
if(window.location.protocol!=="https:"&&window.location.hostname!=="localhost"){console.error("Service workers can only be used over HTTPS, or on localhost for development");}else if("serviceWorker"in navigator){navigator.serviceWorker.register(""+"/sw.js").then(function(reg){reg.addEventListener("updatefound",function(){Object(_api_runner_browser__WEBPACK_IMPORTED_MODULE_0__["apiRunner"])("onServiceWorkerUpdateFound",{serviceWorker:reg});var installingWorker=reg.installing;console.log("installingWorker",installingWorker);installingWorker.addEventListener("statechange",function(){switch(installingWorker.state){case"installed":if(navigator.serviceWorker.controller){window.___swUpdated=true;Object(_api_runner_browser__WEBPACK_IMPORTED_MODULE_0__["apiRunner"])("onServiceWorkerUpdateReady",{serviceWorker:reg});if(window.___failedResources){console.log("resources failed, SW updated - reloading");window.location.reload();}}else{console.log("Content is now available offline!");Object(_api_runner_browser__WEBPACK_IMPORTED_MODULE_0__["apiRunner"])("onServiceWorkerInstalled",{serviceWorker:reg});}break;case"redundant":console.error("The installing service worker became redundant.");Object(_api_runner_browser__WEBPACK_IMPORTED_MODULE_0__["apiRunner"])("onServiceWorkerRedundant",{serviceWorker:reg});break;case"activated":Object(_api_runner_browser__WEBPACK_IMPORTED_MODULE_0__["apiRunner"])("onServiceWorkerActive",{serviceWorker:reg});break;}});});}).catch(function(e){console.error("Error during service worker registration:",e);});}

/***/ }),

/***/ "NsGk":
/***/ (function(module, exports, __webpack_require__) {

var preferDefault=function preferDefault(m){return m&&m.default||m;};exports.components={"component---cache-caches-gatsby-plugin-offline-app-shell-js":function componentCacheCachesGatsbyPluginOfflineAppShellJs(){return __webpack_require__.e(/* import() */ 16).then(__webpack_require__.t.bind(null, "zXQ9", 7));},"component---src-pages-404-js":function componentSrcPages404Js(){return Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(3), __webpack_require__.e(4), __webpack_require__.e(17)]).then(__webpack_require__.bind(null, "w2l6"));},"component---src-pages-about-js":function componentSrcPagesAboutJs(){return Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(1), __webpack_require__.e(2), __webpack_require__.e(3), __webpack_require__.e(4), __webpack_require__.e(18)]).then(__webpack_require__.bind(null, "3XHS"));},"component---src-pages-blog-js":function componentSrcPagesBlogJs(){return Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(1), __webpack_require__.e(2), __webpack_require__.e(3), __webpack_require__.e(13)]).then(__webpack_require__.bind(null, "vx99"));},"component---src-pages-books-js":function componentSrcPagesBooksJs(){return Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(1), __webpack_require__.e(2), __webpack_require__.e(19)]).then(__webpack_require__.bind(null, "ZsSW"));},"component---src-pages-contact-js":function componentSrcPagesContactJs(){return Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(1), __webpack_require__.e(2), __webpack_require__.e(14)]).then(__webpack_require__.bind(null, "Cuy+"));},"component---src-pages-home-js":function componentSrcPagesHomeJs(){return Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(1), __webpack_require__.e(2), __webpack_require__.e(3), __webpack_require__.e(4), __webpack_require__.e(20)]).then(__webpack_require__.bind(null, "gHPf"));},"component---src-pages-index-js":function componentSrcPagesIndexJs(){return Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(1), __webpack_require__.e(2), __webpack_require__.e(3), __webpack_require__.e(4), __webpack_require__.e(15)]).then(__webpack_require__.bind(null, "RXBc"));},"component---src-pages-index-marc-js":function componentSrcPagesIndexMarcJs(){return Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(3), __webpack_require__.e(4), __webpack_require__.e(21)]).then(__webpack_require__.bind(null, "tLPA"));},"component---src-pages-lifecast-js":function componentSrcPagesLifecastJs(){return Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(1), __webpack_require__.e(2), __webpack_require__.e(22)]).then(__webpack_require__.bind(null, "Oaqn"));},"component---src-pages-merch-js":function componentSrcPagesMerchJs(){return Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(1), __webpack_require__.e(2), __webpack_require__.e(23)]).then(__webpack_require__.bind(null, "HpH4"));},"component---src-pages-newsletter-js":function componentSrcPagesNewsletterJs(){return Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(1), __webpack_require__.e(2), __webpack_require__.e(24)]).then(__webpack_require__.bind(null, "KoSn"));},"component---src-pages-press-js":function componentSrcPagesPressJs(){return Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(1), __webpack_require__.e(2), __webpack_require__.e(25)]).then(__webpack_require__.bind(null, "8b04"));},"component---src-pages-react-native-web-js":function componentSrcPagesReactNativeWebJs(){return Promise.all(/* import() */[__webpack_require__.e(1), __webpack_require__.e(3), __webpack_require__.e(11)]).then(__webpack_require__.bind(null, "bd8T"));},"component---src-templates-blog-post-js":function componentSrcTemplatesBlogPostJs(){return Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(1), __webpack_require__.e(2), __webpack_require__.e(3), __webpack_require__.e(4), __webpack_require__.e(12)]).then(__webpack_require__.bind(null, "yZlL"));}};

/***/ }),

/***/ "Nsbk":
/***/ (function(module, exports) {

function _getPrototypeOf(o) {
  module.exports = _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

module.exports = _getPrototypeOf;

/***/ }),

/***/ "PJYZ":
/***/ (function(module, exports) {

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

module.exports = _assertThisInitialized;

/***/ }),

/***/ "Q/JM":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var getBoundingClientRect = function getBoundingClientRect(node) {
  if (node != null) {
    var isElement = node.nodeType === 1;

    if (isElement && typeof node.getBoundingClientRect === 'function') {
      return node.getBoundingClientRect();
    }
  }
};

/* harmony default export */ __webpack_exports__["a"] = (getBoundingClientRect);

/***/ }),

/***/ "Q3tu":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("q1tI");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

var TextAncestorContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["createContext"])(false);
/* harmony default export */ __webpack_exports__["a"] = (TextAncestorContext);

/***/ }),

/***/ "QLaP":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



/**
 * Use invariant() to assert state which your program assumes to be true.
 *
 * Provide sprintf-style format (only %s is supported) and arguments
 * to provide information about what broke and what you were
 * expecting.
 *
 * The invariant message will be stripped in production, but the invariant
 * will remain to ensure logic does not differ in production.
 */

var invariant = function(condition, format, a, b, c, d, e, f) {
  if (false) {}

  if (!condition) {
    var error;
    if (format === undefined) {
      error = new Error(
        'Minified exception occurred; use the non-minified dev environment ' +
        'for the full error message and additional helpful warnings.'
      );
    } else {
      var args = [a, b, c, d, e, f];
      var argIndex = 0;
      error = new Error(
        format.replace(/%s/g, function() { return args[argIndex++]; })
      );
      error.name = 'Invariant Violation';
    }

    error.framesToPop = 1; // we don't care about invariant's own frame
    throw error;
  }
};

module.exports = invariant;


/***/ }),

/***/ "Qo9l":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("2oRo");

module.exports = global;


/***/ }),

/***/ "RIqP":
/***/ (function(module, exports, __webpack_require__) {

var arrayWithoutHoles = __webpack_require__("Ijbi");

var iterableToArray = __webpack_require__("EbDI");

var unsupportedIterableToArray = __webpack_require__("ZhPi");

var nonIterableSpread = __webpack_require__("Bnag");

function _toConsumableArray(arr) {
  return arrayWithoutHoles(arr) || iterableToArray(arr) || unsupportedIterableToArray(arr) || nonIterableSpread();
}

module.exports = _toConsumableArray;

/***/ }),

/***/ "RK3t":
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__("0Dky");
var classof = __webpack_require__("xrYK");

var split = ''.split;

// fallback for non-array-like ES3 and non-enumerable old V8 strings
module.exports = fails(function () {
  // throws an error in rhino, see https://github.com/mozilla/rhino/issues/346
  // eslint-disable-next-line no-prototype-builtins
  return !Object('z').propertyIsEnumerable(0);
}) ? function (it) {
  return classof(it) == 'String' ? split.call(it, '') : Object(it);
} : Object;


/***/ }),

/***/ "Rz+p":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = hyphenateProperty;

var _hyphenateStyleName = __webpack_require__("MAmL");

var _hyphenateStyleName2 = _interopRequireDefault(_hyphenateStyleName);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

function hyphenateProperty(property) {
  return (0, _hyphenateStyleName2.default)(property);
}

module.exports = exports['default'];

/***/ }),

/***/ "S+yN":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var fbjs_lib_ExecutionEnvironment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("xLLm");
/* harmony import */ var fbjs_lib_ExecutionEnvironment__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(fbjs_lib_ExecutionEnvironment__WEBPACK_IMPORTED_MODULE_0__);

var doLeftAndRightSwapInRTL = true;
var isPreferredLanguageRTL = false;
var isRTLAllowed = true;
var isRTLForced = false;

var isRTL = function isRTL() {
  if (isRTLForced) {
    return true;
  }

  return isRTLAllowed && isPreferredLanguageRTL;
};

var onDirectionChange = function onDirectionChange() {
  if (fbjs_lib_ExecutionEnvironment__WEBPACK_IMPORTED_MODULE_0___default.a.canUseDOM) {
    if (document.documentElement && document.documentElement.setAttribute) {
      document.documentElement.setAttribute('dir', isRTL() ? 'rtl' : 'ltr');
    }
  }
};

var I18nManager = {
  allowRTL: function allowRTL(bool) {
    isRTLAllowed = bool;
    onDirectionChange();
  },
  forceRTL: function forceRTL(bool) {
    isRTLForced = bool;
    onDirectionChange();
  },
  setPreferredLanguageRTL: function setPreferredLanguageRTL(bool) {
    isPreferredLanguageRTL = bool;
    onDirectionChange();
  },
  swapLeftAndRightInRTL: function swapLeftAndRightInRTL(bool) {
    doLeftAndRightSwapInRTL = bool;
  },

  get doLeftAndRightSwapInRTL() {
    return doLeftAndRightSwapInRTL;
  },

  get isRTL() {
    return isRTL();
  }

};
/* harmony default export */ __webpack_exports__["a"] = (I18nManager);

/***/ }),

/***/ "Sc0N":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = gradient;

var _isPrefixedValue = __webpack_require__("sUt/");

var _isPrefixedValue2 = _interopRequireDefault(_isPrefixedValue);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

var prefixes = ['-webkit-', '-moz-', ''];
var values = /linear-gradient|radial-gradient|repeating-linear-gradient|repeating-radial-gradient/gi;

function gradient(property, value) {
  if (typeof value === 'string' && !(0, _isPrefixedValue2.default)(value) && values.test(value)) {
    return prefixes.map(function (prefix) {
      return value.replace(values, function (grad) {
        return prefix + grad;
      });
    });
  }
}

/***/ }),

/***/ "SksO":
/***/ (function(module, exports) {

function _setPrototypeOf(o, p) {
  module.exports = _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

module.exports = _setPrototypeOf;

/***/ }),

/***/ "TWQb":
/***/ (function(module, exports, __webpack_require__) {

var toIndexedObject = __webpack_require__("/GqU");
var toLength = __webpack_require__("UMSQ");
var toAbsoluteIndex = __webpack_require__("I8vh");

// `Array.prototype.{ indexOf, includes }` methods implementation
var createMethod = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIndexedObject($this);
    var length = toLength(O.length);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) {
      if ((IS_INCLUDES || index in O) && O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};

module.exports = {
  // `Array.prototype.includes` method
  // https://tc39.es/ecma262/#sec-array.prototype.includes
  includes: createMethod(true),
  // `Array.prototype.indexOf` method
  // https://tc39.es/ecma262/#sec-array.prototype.indexof
  indexOf: createMethod(false)
};


/***/ }),

/***/ "TgPG":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.reduce.js
var es_array_reduce = __webpack_require__("E9XD");

// EXTERNAL MODULE: ./node_modules/fbjs/lib/ExecutionEnvironment.js
var ExecutionEnvironment = __webpack_require__("xLLm");

// CONCATENATED MODULE: ./node_modules/react-native-web/dist/exports/StyleSheet/createCSSStyleSheet.js

function createCSSStyleSheet(id) {
  if (ExecutionEnvironment["canUseDOM"]) {
    var element = document.getElementById(id);

    if (element != null) {
      return element.sheet;
    } else {
      var _element = document.createElement('style');

      _element.setAttribute('id', id);

      var head = document.head;

      if (head) {
        head.insertBefore(_element, head.firstChild);
      }

      return _element.sheet;
    }
  } else {
    return null;
  }
}
// EXTERNAL MODULE: ./node_modules/react-native-web/dist/exports/StyleSheet/normalizeValueWithProperty.js
var normalizeValueWithProperty = __webpack_require__("A6cL");

// EXTERNAL MODULE: ./node_modules/react-native-web/dist/exports/StyleSheet/resolveShadowValue.js
var resolveShadowValue = __webpack_require__("cqcS");

// CONCATENATED MODULE: ./node_modules/react-native-web/dist/exports/StyleSheet/createCompileableStyle.js
function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}



var defaultOffset = {
  height: 0,
  width: 0
};

function boxShadowReducer(resolvedStyle, style) {
  var boxShadow = style.boxShadow;
  var shadow = Object(resolveShadowValue["a" /* default */])(style);

  if (shadow != null) {
    resolvedStyle.boxShadow = boxShadow ? boxShadow + ", " + shadow : shadow;
  }
}

function textShadowReducer(resolvedStyle, style) {
  var textShadowColor = style.textShadowColor,
      textShadowOffset = style.textShadowOffset,
      textShadowRadius = style.textShadowRadius;

  var _ref = textShadowOffset || defaultOffset,
      height = _ref.height,
      width = _ref.width;

  var radius = textShadowRadius || 0;
  var offsetX = Object(normalizeValueWithProperty["a" /* default */])(width);
  var offsetY = Object(normalizeValueWithProperty["a" /* default */])(height);
  var blurRadius = Object(normalizeValueWithProperty["a" /* default */])(radius);
  var color = Object(normalizeValueWithProperty["a" /* default */])(textShadowColor, 'textShadowColor');

  if (color && (height !== 0 || width !== 0 || radius !== 0) && offsetX != null && offsetY != null && blurRadius != null) {
    resolvedStyle.textShadow = offsetX + " " + offsetY + " " + blurRadius + " " + color;
  }
}

var createCompileableStyle = function createCompileableStyle(styles) {
  var shadowColor = styles.shadowColor,
      shadowOffset = styles.shadowOffset,
      shadowOpacity = styles.shadowOpacity,
      shadowRadius = styles.shadowRadius,
      textShadowColor = styles.textShadowColor,
      textShadowOffset = styles.textShadowOffset,
      textShadowRadius = styles.textShadowRadius,
      nextStyles = _objectWithoutPropertiesLoose(styles, ["shadowColor", "shadowOffset", "shadowOpacity", "shadowRadius", "textShadowColor", "textShadowOffset", "textShadowRadius"]);

  if (shadowColor != null || shadowOffset != null || shadowOpacity != null || shadowRadius != null) {
    boxShadowReducer(nextStyles, styles);
  }

  if (textShadowColor != null || textShadowOffset != null || textShadowRadius != null) {
    textShadowReducer(nextStyles, styles);
  }

  return nextStyles;
};

/* harmony default export */ var StyleSheet_createCompileableStyle = (createCompileableStyle);
// CONCATENATED MODULE: ./node_modules/react-native-web/dist/exports/StyleSheet/createOrderedCSSStyleSheet.js
var slice = Array.prototype.slice;
function createOrderedCSSStyleSheet(sheet) {
  var groups = {};
  var selectors = {};

  if (sheet != null) {
    var group;
    slice.call(sheet.cssRules).forEach(function (cssRule, i) {
      var cssText = cssRule.cssText;

      if (cssText.indexOf('stylesheet-group') > -1) {
        group = decodeGroupRule(cssRule);
        groups[group] = {
          start: i,
          rules: [cssText]
        };
      } else {
        var selectorText = getSelectorText(cssText);

        if (selectorText != null) {
          selectors[selectorText] = true;
          groups[group].rules.push(cssText);
        }
      }
    });
  }

  function sheetInsert(sheet, group, text) {
    var orderedGroups = getOrderedGroups(groups);
    var groupIndex = orderedGroups.indexOf(group);
    var nextGroupIndex = groupIndex + 1;
    var nextGroup = orderedGroups[nextGroupIndex];
    var position = nextGroup != null && groups[nextGroup].start != null ? groups[nextGroup].start : sheet.cssRules.length;
    var isInserted = insertRuleAt(sheet, text, position);

    if (isInserted) {
      if (groups[group].start == null) {
        groups[group].start = position;
      }

      for (var i = nextGroupIndex; i < orderedGroups.length; i += 1) {
        var groupNumber = orderedGroups[i];
        var previousStart = groups[groupNumber].start;
        groups[groupNumber].start = previousStart + 1;
      }
    }

    return isInserted;
  }

  var OrderedCSSStyleSheet = {
    getTextContent: function getTextContent() {
      return getOrderedGroups(groups).map(function (group) {
        var rules = groups[group].rules;
        return rules.join('\n');
      }).join('\n');
    },
    insert: function insert(cssText, groupValue) {
      var group = Number(groupValue);

      if (groups[group] == null) {
        var markerRule = encodeGroupRule(group);
        groups[group] = {
          start: null,
          rules: [markerRule]
        };

        if (sheet != null) {
          sheetInsert(sheet, group, markerRule);
        }
      }

      var selectorText = getSelectorText(cssText);

      if (selectorText != null && selectors[selectorText] == null) {
        selectors[selectorText] = true;
        groups[group].rules.push(cssText);

        if (sheet != null) {
          var isInserted = sheetInsert(sheet, group, cssText);

          if (!isInserted) {
            groups[group].rules.pop();
          }
        }
      }
    }
  };
  return OrderedCSSStyleSheet;
}

function encodeGroupRule(group) {
  return "[stylesheet-group=\"" + group + "\"]{}";
}

function decodeGroupRule(cssRule) {
  return Number(cssRule.selectorText.split(/["']/)[1]);
}

function getOrderedGroups(obj) {
  return Object.keys(obj).map(Number).sort(function (a, b) {
    return a > b ? 1 : -1;
  });
}

var pattern = /\s*([,])\s*/g;

function getSelectorText(cssText) {
  var selector = cssText.split('{')[0].trim();
  return selector !== '' ? selector.replace(pattern, '$1') : null;
}

function insertRuleAt(root, cssText, position) {
  try {
    root.insertRule(cssText, position);
    return true;
  } catch (e) {
    return false;
  }
}
// CONCATENATED MODULE: ./node_modules/react-native-web/dist/modules/flattenArray/index.js
function flattenArray(array) {
  function flattenDown(array, result) {
    for (var i = 0; i < array.length; i++) {
      var value = array[i];

      if (Array.isArray(value)) {
        flattenDown(value, result);
      } else if (value != null && value !== false) {
        result.push(value);
      }
    }

    return result;
  }

  return flattenDown(array, []);
}

/* harmony default export */ var modules_flattenArray = (flattenArray);
// EXTERNAL MODULE: ./node_modules/react-native-web/dist/exports/StyleSheet/flattenStyle.js
var flattenStyle = __webpack_require__("Iu5r");

// EXTERNAL MODULE: ./node_modules/react-native-web/dist/exports/I18nManager/index.js
var I18nManager = __webpack_require__("S+yN");

// EXTERNAL MODULE: ./node_modules/react-native-web/dist/modules/multiplyStyleLengthValue/index.js
var multiplyStyleLengthValue = __webpack_require__("7H9r");

// CONCATENATED MODULE: ./node_modules/react-native-web/dist/exports/StyleSheet/i18nStyle.js


var emptyObject = {};
var borderTopLeftRadius = 'borderTopLeftRadius';
var borderTopRightRadius = 'borderTopRightRadius';
var borderBottomLeftRadius = 'borderBottomLeftRadius';
var borderBottomRightRadius = 'borderBottomRightRadius';
var borderLeftColor = 'borderLeftColor';
var borderLeftStyle = 'borderLeftStyle';
var borderLeftWidth = 'borderLeftWidth';
var borderRightColor = 'borderRightColor';
var borderRightStyle = 'borderRightStyle';
var borderRightWidth = 'borderRightWidth';
var right = 'right';
var marginLeft = 'marginLeft';
var marginRight = 'marginRight';
var paddingLeft = 'paddingLeft';
var paddingRight = 'paddingRight';
var left = 'left';
var PROPERTIES_FLIP = {
  borderTopLeftRadius: borderTopRightRadius,
  borderTopRightRadius: borderTopLeftRadius,
  borderBottomLeftRadius: borderBottomRightRadius,
  borderBottomRightRadius: borderBottomLeftRadius,
  borderLeftColor: borderRightColor,
  borderLeftStyle: borderRightStyle,
  borderLeftWidth: borderRightWidth,
  borderRightColor: borderLeftColor,
  borderRightStyle: borderLeftStyle,
  borderRightWidth: borderLeftWidth,
  left: right,
  marginLeft: marginRight,
  marginRight: marginLeft,
  paddingLeft: paddingRight,
  paddingRight: paddingLeft,
  right: left
};
var PROPERTIES_I18N = {
  borderTopStartRadius: borderTopLeftRadius,
  borderTopEndRadius: borderTopRightRadius,
  borderBottomStartRadius: borderBottomLeftRadius,
  borderBottomEndRadius: borderBottomRightRadius,
  borderStartColor: borderLeftColor,
  borderStartStyle: borderLeftStyle,
  borderStartWidth: borderLeftWidth,
  borderEndColor: borderRightColor,
  borderEndStyle: borderRightStyle,
  borderEndWidth: borderRightWidth,
  end: right,
  marginStart: marginLeft,
  marginEnd: marginRight,
  paddingStart: paddingLeft,
  paddingEnd: paddingRight,
  start: left
};
var PROPERTIES_VALUE = {
  clear: true,
  float: true,
  textAlign: true
};

var i18nStyle_additiveInverse = function additiveInverse(value) {
  return Object(multiplyStyleLengthValue["a" /* default */])(value, -1);
};

var i18nStyle_i18nStyle = function i18nStyle(originalStyle) {
  var doLeftAndRightSwapInRTL = I18nManager["a" /* default */].doLeftAndRightSwapInRTL,
      isRTL = I18nManager["a" /* default */].isRTL;
  var style = originalStyle || emptyObject;
  var frozenProps = {};
  var nextStyle = {};

  for (var originalProp in style) {
    if (!Object.prototype.hasOwnProperty.call(style, originalProp)) {
      continue;
    }

    var originalValue = style[originalProp];
    var prop = originalProp;
    var value = originalValue;

    if (PROPERTIES_I18N.hasOwnProperty(originalProp)) {
      var convertedProp = PROPERTIES_I18N[originalProp];
      prop = isRTL ? PROPERTIES_FLIP[convertedProp] : convertedProp;
    } else if (isRTL && doLeftAndRightSwapInRTL && PROPERTIES_FLIP[originalProp]) {
      prop = PROPERTIES_FLIP[originalProp];
    }

    if (PROPERTIES_VALUE.hasOwnProperty(originalProp)) {
      if (originalValue === 'start') {
        value = isRTL ? 'right' : 'left';
      } else if (originalValue === 'end') {
        value = isRTL ? 'left' : 'right';
      } else if (isRTL && doLeftAndRightSwapInRTL) {
        if (originalValue === 'left') {
          value = 'right';
        } else if (originalValue === 'right') {
          value = 'left';
        }
      }
    }

    if (prop === 'transitionProperty') {
      if (PROPERTIES_I18N.hasOwnProperty(value)) {
        var convertedValue = PROPERTIES_I18N[originalValue];
        value = isRTL ? PROPERTIES_FLIP[convertedValue] : convertedValue;
      } else if (isRTL && doLeftAndRightSwapInRTL && PROPERTIES_FLIP[originalValue]) {
        value = PROPERTIES_FLIP[originalValue];
      }
    }

    if (isRTL && prop === 'textShadowOffset') {
      nextStyle[prop] = value;
      nextStyle[prop].width = i18nStyle_additiveInverse(value.width);
    } else if (!frozenProps[prop]) {
      nextStyle[prop] = value;
    }

    if (PROPERTIES_I18N[originalProp]) {
      frozenProps[prop] = true;
    }
  }

  return nextStyle;
};

/* harmony default export */ var StyleSheet_i18nStyle = (i18nStyle_i18nStyle);
// EXTERNAL MODULE: ./node_modules/react-native-web/dist/exports/StyleSheet/createReactDOMStyle.js
var createReactDOMStyle = __webpack_require__("kNQG");

// CONCATENATED MODULE: ./node_modules/react-native-web/dist/vendor/hash/index.js
function murmurhash2_32_gc(str, seed) {
  var l = str.length,
      h = seed ^ l,
      i = 0,
      k;

  while (l >= 4) {
    k = str.charCodeAt(i) & 0xff | (str.charCodeAt(++i) & 0xff) << 8 | (str.charCodeAt(++i) & 0xff) << 16 | (str.charCodeAt(++i) & 0xff) << 24;
    k = (k & 0xffff) * 0x5bd1e995 + (((k >>> 16) * 0x5bd1e995 & 0xffff) << 16);
    k ^= k >>> 24;
    k = (k & 0xffff) * 0x5bd1e995 + (((k >>> 16) * 0x5bd1e995 & 0xffff) << 16);
    h = (h & 0xffff) * 0x5bd1e995 + (((h >>> 16) * 0x5bd1e995 & 0xffff) << 16) ^ k;
    l -= 4;
    ++i;
  }

  switch (l) {
    case 3:
      h ^= (str.charCodeAt(i + 2) & 0xff) << 16;

    case 2:
      h ^= (str.charCodeAt(i + 1) & 0xff) << 8;

    case 1:
      h ^= str.charCodeAt(i) & 0xff;
      h = (h & 0xffff) * 0x5bd1e995 + (((h >>> 16) * 0x5bd1e995 & 0xffff) << 16);
  }

  h ^= h >>> 13;
  h = (h & 0xffff) * 0x5bd1e995 + (((h >>> 16) * 0x5bd1e995 & 0xffff) << 16);
  h ^= h >>> 15;
  return h >>> 0;
}

var hash = function hash(str) {
  return murmurhash2_32_gc(str, 1).toString(36);
};

/* harmony default export */ var vendor_hash = (hash);
// EXTERNAL MODULE: ./node_modules/hyphenate-style-name/index.js
var hyphenate_style_name = __webpack_require__("MAmL");

// EXTERNAL MODULE: ./node_modules/react-native-web/dist/modules/prefixStyles/index.js + 1 modules
var prefixStyles = __webpack_require__("hFhQ");

// CONCATENATED MODULE: ./node_modules/react-native-web/dist/exports/StyleSheet/compile.js


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
        _defineProperty(target, key, source[key]);
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

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function compile_objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}






var compile_cache = {
  get: function get(property, value) {
    if (compile_cache[property] != null && compile_cache[property].hasOwnProperty(value) && compile_cache[property][value] != null) {
      return compile_cache[property][value];
    }
  },
  set: function set(property, value, object) {
    if (compile_cache[property] == null) {
      compile_cache[property] = {};
    }

    return compile_cache[property][value] = object;
  }
};
function atomic(style) {
  return Object.keys(style).sort().reduce(function (acc, property) {
    var value = style[property];

    if (value != null) {
      var valueString = stringifyValueWithProperty(value, property);
      var cachedResult = compile_cache.get(property, valueString);

      if (cachedResult != null) {
        var identifier = cachedResult.identifier;
        acc[identifier] = cachedResult;
      } else {
        var _identifier = createIdentifier('r', property, value);

        var rules = createAtomicRules(_identifier, property, value);

        var _cachedResult = compile_cache.set(property, valueString, {
          property: property,
          value: stringifyValueWithProperty(value, property),
          identifier: _identifier,
          rules: rules
        });

        acc[_identifier] = _cachedResult;
      }
    }

    return acc;
  }, {});
}
function classic(style, name) {
  var _ref;

  var identifier = createIdentifier('css', name, style);

  var animationKeyframes = style.animationKeyframes,
      rest = compile_objectWithoutPropertiesLoose(style, ["animationKeyframes"]);

  var rules = [];
  var selector = "." + identifier;
  var animationName;

  if (animationKeyframes != null) {
    var _processKeyframesValu = processKeyframesValue(animationKeyframes),
        animationNames = _processKeyframesValu.animationNames,
        keyframesRules = _processKeyframesValu.rules;

    animationName = animationNames.join(',');
    rules.push.apply(rules, keyframesRules);
  }

  var block = createDeclarationBlock(_objectSpread({}, rest, {
    animationName: animationName
  }));
  rules.push("" + selector + block);
  return _ref = {}, _ref[identifier] = {
    identifier: identifier,
    rules: rules
  }, _ref;
}
function inline(style) {
  return Object(prefixStyles["b" /* prefixInlineStyles */])(Object(createReactDOMStyle["a" /* default */])(style));
}
function stringifyValueWithProperty(value, property) {
  var normalizedValue = Object(normalizeValueWithProperty["a" /* default */])(value, property);
  return typeof normalizedValue !== 'string' ? JSON.stringify(normalizedValue || '') : normalizedValue;
}

function createAtomicRules(identifier, property, value) {
  var rules = [];
  var selector = "." + identifier;

  switch (property) {
    case 'animationKeyframes':
      {
        var _processKeyframesValu2 = processKeyframesValue(value),
            animationNames = _processKeyframesValu2.animationNames,
            keyframesRules = _processKeyframesValu2.rules;

        var block = createDeclarationBlock({
          animationName: animationNames.join(',')
        });
        rules.push.apply(rules, ["" + selector + block].concat(keyframesRules));
        break;
      }

    case 'placeholderTextColor':
      {
        var _block = createDeclarationBlock({
          color: value,
          opacity: 1
        });

        rules.push(selector + "::-webkit-input-placeholder" + _block, selector + "::-moz-placeholder" + _block, selector + ":-ms-input-placeholder" + _block, selector + "::placeholder" + _block);
        break;
      }

    case 'pointerEvents':
      {
        var _createDeclarationBlo3;

        var finalValue = value;

        if (value === 'auto' || value === 'box-only') {
          finalValue = 'auto!important';

          if (value === 'box-only') {
            var _createDeclarationBlo;

            var _block3 = createDeclarationBlock((_createDeclarationBlo = {}, _createDeclarationBlo[property] = 'none', _createDeclarationBlo));

            rules.push(selector + ">*" + _block3);
          }
        } else if (value === 'none' || value === 'box-none') {
          finalValue = 'none!important';

          if (value === 'box-none') {
            var _createDeclarationBlo2;

            var _block4 = createDeclarationBlock((_createDeclarationBlo2 = {}, _createDeclarationBlo2[property] = 'auto', _createDeclarationBlo2));

            rules.push(selector + ">*" + _block4);
          }
        }

        var _block2 = createDeclarationBlock((_createDeclarationBlo3 = {}, _createDeclarationBlo3[property] = finalValue, _createDeclarationBlo3));

        rules.push("" + selector + _block2);
        break;
      }

    case 'scrollbarWidth':
      {
        var _createDeclarationBlo4;

        if (value === 'none') {
          rules.push(selector + "::-webkit-scrollbar{display:none}");
        }

        var _block5 = createDeclarationBlock((_createDeclarationBlo4 = {}, _createDeclarationBlo4[property] = value, _createDeclarationBlo4));

        rules.push("" + selector + _block5);
        break;
      }

    default:
      {
        var _createDeclarationBlo5;

        var _block6 = createDeclarationBlock((_createDeclarationBlo5 = {}, _createDeclarationBlo5[property] = value, _createDeclarationBlo5));

        rules.push("" + selector + _block6);
        break;
      }
  }

  return rules;
}

function createDeclarationBlock(style) {
  var domStyle = Object(prefixStyles["a" /* default */])(Object(createReactDOMStyle["a" /* default */])(style));
  var declarationsString = Object.keys(domStyle).map(function (property) {
    var value = domStyle[property];
    var prop = Object(hyphenate_style_name["default"])(property);

    if (Array.isArray(value)) {
      return value.map(function (v) {
        return prop + ":" + v;
      }).join(';');
    } else {
      return prop + ":" + value;
    }
  }).sort().join(';');
  return "{" + declarationsString + ";}";
}

function createIdentifier(prefix, name, value) {
  var hashedString = vendor_hash(name + stringifyValueWithProperty(value, name));
  return  false ? undefined : prefix + "-" + hashedString;
}

function createKeyframes(keyframes) {
  var prefixes = ['-webkit-', ''];
  var identifier = createIdentifier('r', 'animation', keyframes);
  var steps = '{' + Object.keys(keyframes).map(function (stepName) {
    var rule = keyframes[stepName];
    var block = createDeclarationBlock(rule);
    return "" + stepName + block;
  }).join('') + '}';
  var rules = prefixes.map(function (prefix) {
    return "@" + prefix + "keyframes " + identifier + steps;
  });
  return {
    identifier: identifier,
    rules: rules
  };
}

function processKeyframesValue(keyframesValue) {
  if (typeof keyframesValue === 'number') {
    throw new Error("Invalid CSS keyframes type: " + typeof keyframesValue);
  }

  var animationNames = [];
  var rules = [];
  var value = Array.isArray(keyframesValue) ? keyframesValue : [keyframesValue];
  value.forEach(function (keyframes) {
    if (typeof keyframes === 'string') {
      animationNames.push(keyframes);
    } else {
      var _createKeyframes = createKeyframes(keyframes),
          identifier = _createKeyframes.identifier,
          keyframesRules = _createKeyframes.rules;

      animationNames.push(identifier);
      rules.push.apply(rules, keyframesRules);
    }
  });
  return {
    animationNames: animationNames,
    rules: rules
  };
}
// CONCATENATED MODULE: ./node_modules/react-native-web/dist/exports/StyleSheet/initialRules.js
var resets = ['html{-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%;-webkit-tap-highlight-color:rgba(0,0,0,0);}', 'body{margin:0;}', 'button::-moz-focus-inner,input::-moz-focus-inner{border:0;padding:0;}', 'input::-webkit-inner-spin-button,input::-webkit-outer-spin-button,' + 'input::-webkit-search-cancel-button,input::-webkit-search-decoration,' + 'input::-webkit-search-results-button,input::-webkit-search-results-decoration{display:none;}'];
/* harmony default export */ var initialRules = (resets);
// CONCATENATED MODULE: ./node_modules/react-native-web/dist/exports/StyleSheet/modality.js

var focusVisibleAttributeName = 'data-focusvisible-polyfill';
var modality_rule = ":focus:not([" + focusVisibleAttributeName + "]){outline: none;}";

var modality_modality = function modality(insertRule) {
  insertRule(modality_rule);

  if (!ExecutionEnvironment["canUseDOM"]) {
    return;
  }

  var hadKeyboardEvent = true;
  var hadFocusVisibleRecently = false;
  var hadFocusVisibleRecentlyTimeout = null;
  var inputTypesWhitelist = {
    text: true,
    search: true,
    url: true,
    tel: true,
    email: true,
    password: true,
    number: true,
    date: true,
    month: true,
    week: true,
    time: true,
    datetime: true,
    'datetime-local': true
  };

  function isValidFocusTarget(el) {
    if (el && el !== document && el.nodeName !== 'HTML' && el.nodeName !== 'BODY' && 'classList' in el && 'contains' in el.classList) {
      return true;
    }

    return false;
  }

  function focusTriggersKeyboardModality(el) {
    var type = el.type;
    var tagName = el.tagName;
    var isReadOnly = el.readOnly;

    if (tagName === 'INPUT' && inputTypesWhitelist[type] && !isReadOnly) {
      return true;
    }

    if (tagName === 'TEXTAREA' && !isReadOnly) {
      return true;
    }

    if (el.isContentEditable) {
      return true;
    }

    return false;
  }

  function addFocusVisibleAttribute(el) {
    if (el.hasAttribute(focusVisibleAttributeName)) {
      return;
    }

    el.setAttribute(focusVisibleAttributeName, true);
  }

  function removeFocusVisibleAttribute(el) {
    el.removeAttribute(focusVisibleAttributeName);
  }

  function removeAllFocusVisibleAttributes() {
    var list = document.querySelectorAll("[" + focusVisibleAttributeName + "]");

    for (var i = 0; i < list.length; i += 1) {
      removeFocusVisibleAttribute(list[i]);
    }
  }

  function onKeyDown(e) {
    if (e.key !== 'Tab' && (e.metaKey || e.altKey || e.ctrlKey || e.shiftKey)) {
      return;
    }

    if (isValidFocusTarget(document.activeElement)) {
      addFocusVisibleAttribute(document.activeElement);
    }

    hadKeyboardEvent = true;
  }

  function onPointerDown(e) {
    if (hadKeyboardEvent === true) {
      removeAllFocusVisibleAttributes();
    }

    hadKeyboardEvent = false;
  }

  function onFocus(e) {
    if (!isValidFocusTarget(e.target)) {
      return;
    }

    if (hadKeyboardEvent || focusTriggersKeyboardModality(e.target)) {
      addFocusVisibleAttribute(e.target);
    }
  }

  function onBlur(e) {
    if (!isValidFocusTarget(e.target)) {
      return;
    }

    if (e.target.hasAttribute(focusVisibleAttributeName)) {
      hadFocusVisibleRecently = true;
      window.clearTimeout(hadFocusVisibleRecentlyTimeout);
      hadFocusVisibleRecentlyTimeout = window.setTimeout(function () {
        hadFocusVisibleRecently = false;
        window.clearTimeout(hadFocusVisibleRecentlyTimeout);
      }, 100);
      removeFocusVisibleAttribute(e.target);
    }
  }

  function onVisibilityChange(e) {
    if (document.visibilityState === 'hidden') {
      if (hadFocusVisibleRecently) {
        hadKeyboardEvent = true;
      }

      addInitialPointerMoveListeners();
    }
  }

  function addInitialPointerMoveListeners() {
    document.addEventListener('mousemove', onInitialPointerMove);
    document.addEventListener('mousedown', onInitialPointerMove);
    document.addEventListener('mouseup', onInitialPointerMove);
    document.addEventListener('pointermove', onInitialPointerMove);
    document.addEventListener('pointerdown', onInitialPointerMove);
    document.addEventListener('pointerup', onInitialPointerMove);
    document.addEventListener('touchmove', onInitialPointerMove);
    document.addEventListener('touchstart', onInitialPointerMove);
    document.addEventListener('touchend', onInitialPointerMove);
  }

  function removeInitialPointerMoveListeners() {
    document.removeEventListener('mousemove', onInitialPointerMove);
    document.removeEventListener('mousedown', onInitialPointerMove);
    document.removeEventListener('mouseup', onInitialPointerMove);
    document.removeEventListener('pointermove', onInitialPointerMove);
    document.removeEventListener('pointerdown', onInitialPointerMove);
    document.removeEventListener('pointerup', onInitialPointerMove);
    document.removeEventListener('touchmove', onInitialPointerMove);
    document.removeEventListener('touchstart', onInitialPointerMove);
    document.removeEventListener('touchend', onInitialPointerMove);
  }

  function onInitialPointerMove(e) {
    if (e.target.nodeName === 'HTML') {
      return;
    }

    hadKeyboardEvent = false;
    removeInitialPointerMoveListeners();
  }

  document.addEventListener('keydown', onKeyDown, true);
  document.addEventListener('mousedown', onPointerDown, true);
  document.addEventListener('pointerdown', onPointerDown, true);
  document.addEventListener('touchstart', onPointerDown, true);
  document.addEventListener('focus', onFocus, true);
  document.addEventListener('blur', onBlur, true);
  document.addEventListener('visibilitychange', onVisibilityChange, true);
  addInitialPointerMoveListeners();
};

/* harmony default export */ var StyleSheet_modality = (modality_modality);
// EXTERNAL MODULE: ./node_modules/react-native-web/dist/exports/StyleSheet/constants.js
var constants = __webpack_require__("yBWl");

// CONCATENATED MODULE: ./node_modules/react-native-web/dist/exports/StyleSheet/createStyleResolver.js













function createStyleResolver() {
  var inserted, sheet, cache;
  var resolved = {
    css: {},
    ltr: {},
    rtl: {},
    rtlNoSwap: {}
  };

  var init = function init() {
    inserted = {
      css: {},
      ltr: {},
      rtl: {},
      rtlNoSwap: {}
    };
    sheet = createOrderedCSSStyleSheet(createCSSStyleSheet(constants["b" /* STYLE_ELEMENT_ID */]));
    cache = {};
    StyleSheet_modality(function (rule) {
      return sheet.insert(rule, constants["c" /* STYLE_GROUPS */].modality);
    });
    initialRules.forEach(function (rule) {
      sheet.insert(rule, constants["c" /* STYLE_GROUPS */].reset);
    });
  };

  init();

  function addToCache(className, prop, value) {
    if (!cache[prop]) {
      cache[prop] = {};
    }

    cache[prop][value] = className;
  }

  function getClassName(prop, value) {
    var val = stringifyValueWithProperty(value, prop);
    return cache[prop] && cache[prop].hasOwnProperty(val) && cache[prop][val];
  }

  function _injectRegisteredStyle(id) {
    var doLeftAndRightSwapInRTL = I18nManager["a" /* default */].doLeftAndRightSwapInRTL,
        isRTL = I18nManager["a" /* default */].isRTL;
    var dir = isRTL ? doLeftAndRightSwapInRTL ? 'rtl' : 'rtlNoSwap' : 'ltr';

    if (!inserted[dir][id]) {
      var style = StyleSheet_createCompileableStyle(StyleSheet_i18nStyle(Object(flattenStyle["a" /* default */])(id)));
      var results = atomic(style);
      Object.keys(results).forEach(function (key) {
        var _results$key = results[key],
            identifier = _results$key.identifier,
            property = _results$key.property,
            rules = _results$key.rules,
            value = _results$key.value;
        addToCache(identifier, property, value);
        rules.forEach(function (rule) {
          var group = constants["c" /* STYLE_GROUPS */].custom[property] || constants["c" /* STYLE_GROUPS */].atomic;
          sheet.insert(rule, group);
        });
      });
      inserted[dir][id] = true;
    }
  }

  function resolve(style, classList) {
    var nextClassList = [];
    var props = {};

    if (!style && !classList) {
      return props;
    }

    if (Array.isArray(classList)) {
      modules_flattenArray(classList).forEach(function (identifier) {
        if (identifier) {
          if (inserted.css[identifier] == null && resolved.css[identifier] != null) {
            var item = resolved.css[identifier];
            item.rules.forEach(function (rule) {
              sheet.insert(rule, item.group);
            });
            inserted.css[identifier] = true;
          }

          nextClassList.push(identifier);
        }
      });
    }

    if (typeof style === 'number') {
      _injectRegisteredStyle(style);

      var key = createCacheKey(style);
      props = _resolveStyle(style, key);
    } else if (!Array.isArray(style)) {
      props = _resolveStyle(style);
    } else {
      var flatArray = modules_flattenArray(style);
      var isArrayOfNumbers = true;
      var cacheKey = '';

      for (var i = 0; i < flatArray.length; i++) {
        var id = flatArray[i];

        if (typeof id !== 'number') {
          isArrayOfNumbers = false;
        } else {
          if (isArrayOfNumbers) {
            cacheKey += id + '-';
          }

          _injectRegisteredStyle(id);
        }
      }

      var _key = isArrayOfNumbers ? createCacheKey(cacheKey) : null;

      props = _resolveStyle(flatArray, _key);
    }

    nextClassList.push.apply(nextClassList, props.classList);
    var finalProps = {
      className: classListToString(nextClassList),
      classList: nextClassList
    };

    if (props.style) {
      finalProps.style = props.style;
    }

    return finalProps;
  }

  function _resolveStyle(style, key) {
    var doLeftAndRightSwapInRTL = I18nManager["a" /* default */].doLeftAndRightSwapInRTL,
        isRTL = I18nManager["a" /* default */].isRTL;
    var dir = isRTL ? doLeftAndRightSwapInRTL ? 'rtl' : 'rtlNoSwap' : 'ltr';

    if (key != null && resolved[dir][key] != null) {
      return resolved[dir][key];
    }

    var flatStyle = Object(flattenStyle["a" /* default */])(style);
    var localizedStyle = StyleSheet_createCompileableStyle(StyleSheet_i18nStyle(flatStyle));
    var props = Object.keys(localizedStyle).sort().reduce(function (props, styleProp) {
      var value = localizedStyle[styleProp];

      if (value != null) {
        var className = getClassName(styleProp, value);

        if (className) {
          props.classList.push(className);
        } else {
          if (styleProp === 'animationKeyframes' || styleProp === 'placeholderTextColor' || styleProp === 'pointerEvents' || styleProp === 'scrollbarWidth') {
            var _atomic;

            var a = atomic((_atomic = {}, _atomic[styleProp] = value, _atomic));
            Object.keys(a).forEach(function (key) {
              var _a$key = a[key],
                  identifier = _a$key.identifier,
                  rules = _a$key.rules;
              props.classList.push(identifier);
              rules.forEach(function (rule) {
                sheet.insert(rule, constants["c" /* STYLE_GROUPS */].atomic);
              });
            });
          } else {
            if (!props.style) {
              props.style = {};
            }

            props.style[styleProp] = value;
          }
        }
      }

      return props;
    }, {
      classList: []
    });

    if (props.style) {
      props.style = inline(props.style);
    }

    if (key != null) {
      resolved[dir][key] = props;
    }

    return props;
  }

  return {
    getStyleSheet: function getStyleSheet() {
      var textContent = sheet.getTextContent();

      if (!ExecutionEnvironment["canUseDOM"]) {
        init();
      }

      return {
        id: constants["b" /* STYLE_ELEMENT_ID */],
        textContent: textContent
      };
    },
    createCSS: function createCSS(rules, group) {
      var result = {};
      Object.keys(rules).forEach(function (name) {
        var style = rules[name];
        var compiled = classic(style, name);
        Object.keys(compiled).forEach(function (key) {
          var _compiled$key = compiled[key],
              identifier = _compiled$key.identifier,
              rules = _compiled$key.rules;
          resolved.css[identifier] = {
            group: group || constants["c" /* STYLE_GROUPS */].classic,
            rules: rules
          };
          result[name] = identifier;
        });
      });
      return result;
    },
    resolve: resolve,
    sheet: sheet
  };
}

var createCacheKey = function createCacheKey(id) {
  var prefix = 'rn';
  return prefix + "-" + id;
};

var classListToString = function classListToString(list) {
  return list.join(' ').trim();
};
// CONCATENATED MODULE: ./node_modules/react-native-web/dist/exports/StyleSheet/styleResolver.js

var styleResolver = createStyleResolver();
/* harmony default export */ var StyleSheet_styleResolver = __webpack_exports__["a"] = (styleResolver);

/***/ }),

/***/ "TqRt":
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "UMSQ":
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__("ppGB");

var min = Math.min;

// `ToLength` abstract operation
// https://tc39.es/ecma262/#sec-tolength
module.exports = function (argument) {
  return argument > 0 ? min(toInteger(argument), 0x1FFFFFFFFFFFFF) : 0; // 2 ** 53 - 1 == 9007199254740991
};


/***/ }),

/***/ "UTVS":
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;

module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


/***/ }),

/***/ "UxWs":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/extends.js
var helpers_extends = __webpack_require__("pVnL");
var extends_default = /*#__PURE__*/__webpack_require__.n(helpers_extends);

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

// EXTERNAL MODULE: ./.cache/api-runner-browser.js
var api_runner_browser = __webpack_require__("xtsi");

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__("q1tI");
var react_default = /*#__PURE__*/__webpack_require__.n(react);

// EXTERNAL MODULE: ./node_modules/react-dom/index.js
var react_dom = __webpack_require__("i8i4");
var react_dom_default = /*#__PURE__*/__webpack_require__.n(react_dom);

// EXTERNAL MODULE: ./node_modules/@reach/router/es/index.js
var es = __webpack_require__("YwZP");

// EXTERNAL MODULE: ./node_modules/gatsby-react-router-scroll/index.js
var gatsby_react_router_scroll = __webpack_require__("7hJ6");

// EXTERNAL MODULE: ./node_modules/@mikaelkristiansson/domready/ready.js
var ready = __webpack_require__("MMVs");
var ready_default = /*#__PURE__*/__webpack_require__.n(ready);

// EXTERNAL MODULE: ./.cache/gatsby-browser-entry.js
var gatsby_browser_entry = __webpack_require__("Wbzz");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.reduce.js
var es_array_reduce = __webpack_require__("E9XD");

// EXTERNAL MODULE: ./.cache/loader.js + 1 modules
var loader = __webpack_require__("emEt");

// EXTERNAL MODULE: ./.cache/redirects.json
var redirects = __webpack_require__("YLt+");

// EXTERNAL MODULE: ./.cache/emitter.js + 1 modules
var emitter = __webpack_require__("5yr3");

// CONCATENATED MODULE: ./.cache/route-announcer-props.js
var RouteAnnouncerProps={id:"gatsby-announcer",style:{position:"absolute",top:0,width:1,height:1,padding:0,overflow:"hidden",clip:"rect(0, 0, 0, 0)",whiteSpace:"nowrap",border:0},"aria-live":"assertive","aria-atomic":"true"};
// EXTERNAL MODULE: ./node_modules/@reach/router/es/lib/history.js
var lib_history = __webpack_require__("9Xx/");

// EXTERNAL MODULE: ./node_modules/gatsby-link/index.js
var gatsby_link = __webpack_require__("+ZDr");

// CONCATENATED MODULE: ./.cache/navigation.js
function _createSuper(Derived){var hasNativeReflectConstruct=_isNativeReflectConstruct();return function _createSuperInternal(){var Super=getPrototypeOf_default()(Derived),result;if(hasNativeReflectConstruct){var NewTarget=getPrototypeOf_default()(this).constructor;result=Reflect.construct(Super,arguments,NewTarget);}else{result=Super.apply(this,arguments);}return possibleConstructorReturn_default()(this,result);};}function _isNativeReflectConstruct(){if(typeof Reflect==="undefined"||!Reflect.construct)return false;if(Reflect.construct.sham)return false;if(typeof Proxy==="function")return true;try{Date.prototype.toString.call(Reflect.construct(Date,[],function(){}));return true;}catch(e){return false;}}var redirectMap=redirects.reduce(function(map,redirect){map[redirect.fromPath]=redirect;return map;},{});function maybeRedirect(pathname){var redirect=redirectMap[pathname];if(redirect!=null){if(false){}window.___replace(redirect.toPath);return true;}else{return false;}}var navigation_onPreRouteUpdate=function onPreRouteUpdate(location,prevLocation){if(!maybeRedirect(location.pathname)){Object(api_runner_browser["apiRunner"])("onPreRouteUpdate",{location:location,prevLocation:prevLocation});}};var navigation_onRouteUpdate=function onRouteUpdate(location,prevLocation){if(!maybeRedirect(location.pathname)){Object(api_runner_browser["apiRunner"])("onRouteUpdate",{location:location,prevLocation:prevLocation});if(false){}}};var navigation_navigate=function navigate(to){var options=arguments.length>1&&arguments[1]!==undefined?arguments[1]:{};if(typeof to==="number"){lib_history["c" /* globalHistory */].navigate(to);return;}var _parsePath=Object(gatsby_link["parsePath"])(to),pathname=_parsePath.pathname;var redirect=redirectMap[pathname];if(redirect){to=redirect.toPath;pathname=Object(gatsby_link["parsePath"])(to).pathname;}if(window.___swUpdated){window.location=pathname;return;}var timeoutId=setTimeout(function(){emitter["a" /* default */].emit("onDelayedLoadPageResources",{pathname:pathname});Object(api_runner_browser["apiRunner"])("onRouteUpdateDelayed",{location:window.location});},1000);loader["default"].loadPage(pathname).then(function(pageResources){if(!pageResources||pageResources.status===loader["PageResourceStatus"].Error){window.history.replaceState({},"",location.href);window.location=pathname;clearTimeout(timeoutId);return;}if( true&&pageResources){if(pageResources.page.webpackCompilationHash!==window.___webpackCompilationHash){if("serviceWorker"in navigator&&navigator.serviceWorker.controller!==null&&navigator.serviceWorker.controller.state==="activated"){navigator.serviceWorker.controller.postMessage({gatsbyApi:"clearPathResources"});}window.location=pathname;}}Object(es["navigate"])(to,options);clearTimeout(timeoutId);});};function shouldUpdateScroll(prevRouterProps,_ref){var _this=this;var location=_ref.location;var pathname=location.pathname,hash=location.hash;var results=Object(api_runner_browser["apiRunner"])("shouldUpdateScroll",{prevRouterProps:prevRouterProps,pathname:pathname,routerProps:{location:location},getSavedScrollPosition:function getSavedScrollPosition(args){return[0,_this._stateStorage.read(args,args.key)];}});if(results.length>0){return results[results.length-1];}if(prevRouterProps){var oldPathname=prevRouterProps.location.pathname;if(oldPathname===pathname){return hash?decodeURI(hash.slice(1)):[0,0];}}return true;}function init(){lib_history["c" /* globalHistory */].listen(function(args){args.location.action=args.action;});window.___push=function(to){return navigation_navigate(to,{replace:false});};window.___replace=function(to){return navigation_navigate(to,{replace:true});};window.___navigate=function(to,options){return navigation_navigate(to,options);};maybeRedirect(window.location.pathname);}var navigation_RouteAnnouncer=function(_React$Component){inherits_default()(RouteAnnouncer,_React$Component);var _super=_createSuper(RouteAnnouncer);function RouteAnnouncer(props){var _this2;classCallCheck_default()(this,RouteAnnouncer);_this2=_super.call(this,props);_this2.announcementRef=react_default.a.createRef();return _this2;}createClass_default()(RouteAnnouncer,[{key:"componentDidUpdate",value:function componentDidUpdate(prevProps,nextProps){var _this3=this;requestAnimationFrame(function(){var pageName="new page at "+_this3.props.location.pathname;if(document.title){pageName=document.title;}var pageHeadings=document.querySelectorAll("#gatsby-focus-wrapper h1");if(pageHeadings&&pageHeadings.length){pageName=pageHeadings[0].textContent;}var newAnnouncement="Navigated to "+pageName;if(_this3.announcementRef.current){var oldAnnouncement=_this3.announcementRef.current.innerText;if(oldAnnouncement!==newAnnouncement){_this3.announcementRef.current.innerText=newAnnouncement;}}});}},{key:"render",value:function render(){return react_default.a.createElement("div",extends_default()({},RouteAnnouncerProps,{ref:this.announcementRef}));}}]);return RouteAnnouncer;}(react_default.a.Component);var compareLocationProps=function compareLocationProps(prevLocation,nextLocation){var _prevLocation$state,_nextLocation$state;if(prevLocation.href!==nextLocation.href){return true;}if((prevLocation==null?void 0:(_prevLocation$state=prevLocation.state)==null?void 0:_prevLocation$state.key)!==(nextLocation==null?void 0:(_nextLocation$state=nextLocation.state)==null?void 0:_nextLocation$state.key)){return true;}return false;};var navigation_RouteUpdates=function(_React$Component2){inherits_default()(RouteUpdates,_React$Component2);var _super2=_createSuper(RouteUpdates);function RouteUpdates(props){var _this4;classCallCheck_default()(this,RouteUpdates);_this4=_super2.call(this,props);navigation_onPreRouteUpdate(props.location,null);return _this4;}createClass_default()(RouteUpdates,[{key:"componentDidMount",value:function componentDidMount(){navigation_onRouteUpdate(this.props.location,null);}},{key:"shouldComponentUpdate",value:function shouldComponentUpdate(prevProps){if(compareLocationProps(prevProps.location,this.props.location)){navigation_onPreRouteUpdate(this.props.location,prevProps.location);return true;}return false;}},{key:"componentDidUpdate",value:function componentDidUpdate(prevProps){if(compareLocationProps(prevProps.location,this.props.location)){navigation_onRouteUpdate(this.props.location,prevProps.location);}}},{key:"render",value:function render(){return react_default.a.createElement(react_default.a.Fragment,null,this.props.children,react_default.a.createElement(navigation_RouteAnnouncer,{location:location}));}}]);return RouteUpdates;}(react_default.a.Component);
// EXTERNAL MODULE: ./.cache/page-renderer.js
var page_renderer = __webpack_require__("IOVJ");

// EXTERNAL MODULE: ./.cache/_this_is_virtual_fs_path_/$virtual/async-requires.js
var async_requires = __webpack_require__("NsGk");
var async_requires_default = /*#__PURE__*/__webpack_require__.n(async_requires);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/defineProperty.js
var defineProperty = __webpack_require__("lSNA");
var defineProperty_default = /*#__PURE__*/__webpack_require__.n(defineProperty);

// CONCATENATED MODULE: ./node_modules/shallow-compare/es/index.js
// Pulled from react-compat
// https://github.com/developit/preact-compat/blob/7c5de00e7c85e2ffd011bf3af02899b63f699d3a/src/index.js#L349
function shallowDiffers(a, b) {
  for (var i in a) {
    if (!(i in b)) return true;
  }for (var _i in b) {
    if (a[_i] !== b[_i]) return true;
  }return false;
}

/* harmony default export */ var shallow_compare_es = (function (instance, nextProps, nextState) {
  return shallowDiffers(instance.props, nextProps) || shallowDiffers(instance.state, nextState);
});
// CONCATENATED MODULE: ./.cache/ensure-resources.js
function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);if(enumerableOnly)symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable;});keys.push.apply(keys,symbols);}return keys;}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=arguments[i]!=null?arguments[i]:{};if(i%2){ownKeys(Object(source),true).forEach(function(key){defineProperty_default()(target,key,source[key]);});}else if(Object.getOwnPropertyDescriptors){Object.defineProperties(target,Object.getOwnPropertyDescriptors(source));}else{ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key));});}}return target;}function ensure_resources_createSuper(Derived){var hasNativeReflectConstruct=ensure_resources_isNativeReflectConstruct();return function _createSuperInternal(){var Super=getPrototypeOf_default()(Derived),result;if(hasNativeReflectConstruct){var NewTarget=getPrototypeOf_default()(this).constructor;result=Reflect.construct(Super,arguments,NewTarget);}else{result=Super.apply(this,arguments);}return possibleConstructorReturn_default()(this,result);};}function ensure_resources_isNativeReflectConstruct(){if(typeof Reflect==="undefined"||!Reflect.construct)return false;if(Reflect.construct.sham)return false;if(typeof Proxy==="function")return true;try{Date.prototype.toString.call(Reflect.construct(Date,[],function(){}));return true;}catch(e){return false;}}var ensure_resources_EnsureResources=function(_React$Component){inherits_default()(EnsureResources,_React$Component);var _super=ensure_resources_createSuper(EnsureResources);function EnsureResources(props){var _this;classCallCheck_default()(this,EnsureResources);_this=_super.call(this);var location=props.location,pageResources=props.pageResources;_this.state={location:_objectSpread({},location),pageResources:pageResources||loader["default"].loadPageSync(location.pathname)};return _this;}createClass_default()(EnsureResources,[{key:"loadResources",value:function loadResources(rawPath){var _this2=this;loader["default"].loadPage(rawPath).then(function(pageResources){if(pageResources&&pageResources.status!==loader["PageResourceStatus"].Error){_this2.setState({location:_objectSpread({},window.location),pageResources:pageResources});}else{window.history.replaceState({},"",location.href);window.location=rawPath;}});}},{key:"shouldComponentUpdate",value:function shouldComponentUpdate(nextProps,nextState){if(!nextState.pageResources){this.loadResources(nextProps.location.pathname);return false;}if(false){}if(this.state.pageResources!==nextState.pageResources){return true;}if(this.state.pageResources.component!==nextState.pageResources.component){return true;}if(this.state.pageResources.json!==nextState.pageResources.json){return true;}if(this.state.location.key!==nextState.location.key&&nextState.pageResources.page&&(nextState.pageResources.page.matchPath||nextState.pageResources.page.path)){return true;}return shallow_compare_es(this,nextProps,nextState);}},{key:"render",value:function render(){if(false){}return this.props.children(this.state);}}],[{key:"getDerivedStateFromProps",value:function getDerivedStateFromProps(_ref,prevState){var location=_ref.location;if(prevState.location.href!==location.href){var pageResources=loader["default"].loadPageSync(location.pathname);return{pageResources:pageResources,location:_objectSpread({},location)};}return{location:_objectSpread({},location)};}}]);return EnsureResources;}(react_default.a.Component);/* harmony default export */ var ensure_resources = (ensure_resources_EnsureResources);
// EXTERNAL MODULE: ./.cache/strip-prefix.js
var strip_prefix = __webpack_require__("cSJ8");

// EXTERNAL MODULE: ./.cache/_this_is_virtual_fs_path_/$virtual/match-paths.json
var match_paths = __webpack_require__("JeVI");

// CONCATENATED MODULE: ./.cache/production-app.js
function production_app_createSuper(Derived){var hasNativeReflectConstruct=production_app_isNativeReflectConstruct();return function _createSuperInternal(){var Super=getPrototypeOf_default()(Derived),result;if(hasNativeReflectConstruct){var NewTarget=getPrototypeOf_default()(this).constructor;result=Reflect.construct(Super,arguments,NewTarget);}else{result=Super.apply(this,arguments);}return possibleConstructorReturn_default()(this,result);};}function production_app_isNativeReflectConstruct(){if(typeof Reflect==="undefined"||!Reflect.construct)return false;if(Reflect.construct.sham)return false;if(typeof Proxy==="function")return true;try{Date.prototype.toString.call(Reflect.construct(Date,[],function(){}));return true;}catch(e){return false;}}var production_app_loader=new loader["ProdLoader"](async_requires_default.a,match_paths);Object(loader["setLoader"])(production_app_loader);production_app_loader.setApiRunner(api_runner_browser["apiRunner"]);window.asyncRequires=async_requires_default.a;window.___emitter=emitter["a" /* default */];window.___loader=loader["publicLoader"];init();Object(api_runner_browser["apiRunnerAsync"])("onClientEntry").then(function(){if(Object(api_runner_browser["apiRunner"])("registerServiceWorker").length>0){__webpack_require__("NSX3");}var RouteHandler=function RouteHandler(props){return react_default.a.createElement(es["BaseContext"].Provider,{value:{baseuri:"/",basepath:"/"}},react_default.a.createElement(page_renderer["a" /* default */],props));};var DataContext=react_default.a.createContext({});var GatsbyRoot=function(_React$Component){inherits_default()(GatsbyRoot,_React$Component);var _super=production_app_createSuper(GatsbyRoot);function GatsbyRoot(){classCallCheck_default()(this,GatsbyRoot);return _super.apply(this,arguments);}createClass_default()(GatsbyRoot,[{key:"render",value:function render(){var children=this.props.children;return react_default.a.createElement(es["Location"],null,function(_ref){var location=_ref.location;return react_default.a.createElement(ensure_resources,{location:location},function(_ref2){var pageResources=_ref2.pageResources,location=_ref2.location;var staticQueryResults=Object(loader["getStaticQueryResults"])();return react_default.a.createElement(gatsby_browser_entry["StaticQueryContext"].Provider,{value:staticQueryResults},react_default.a.createElement(DataContext.Provider,{value:{pageResources:pageResources,location:location}},children));});});}}]);return GatsbyRoot;}(react_default.a.Component);var LocationHandler=function(_React$Component2){inherits_default()(LocationHandler,_React$Component2);var _super2=production_app_createSuper(LocationHandler);function LocationHandler(){classCallCheck_default()(this,LocationHandler);return _super2.apply(this,arguments);}createClass_default()(LocationHandler,[{key:"render",value:function render(){var _this=this;return react_default.a.createElement(DataContext.Consumer,null,function(_ref3){var pageResources=_ref3.pageResources,location=_ref3.location;return react_default.a.createElement(navigation_RouteUpdates,{location:location},react_default.a.createElement(gatsby_react_router_scroll["ScrollContext"],{location:location,shouldUpdateScroll:shouldUpdateScroll},react_default.a.createElement(es["Router"],{basepath:"",location:location,id:"gatsby-focus-wrapper"},react_default.a.createElement(RouteHandler,extends_default()({path:pageResources.page.path==="/404.html"?Object(strip_prefix["a" /* default */])(location.pathname,""):encodeURI(pageResources.page.matchPath||pageResources.page.path)},_this.props,{location:location,pageResources:pageResources},pageResources.json)))));});}}]);return LocationHandler;}(react_default.a.Component);var _window=window,pagePath=_window.pagePath,browserLoc=_window.location;if(pagePath&&""+pagePath!==browserLoc.pathname&&!(production_app_loader.findMatchPath(Object(strip_prefix["a" /* default */])(browserLoc.pathname,""))||pagePath==="/404.html"||pagePath.match(/^\/404\/?$/)||pagePath.match(/^\/offline-plugin-app-shell-fallback\/?$/))){Object(es["navigate"])(""+pagePath+browserLoc.search+browserLoc.hash,{replace:true});}loader["publicLoader"].loadPage(browserLoc.pathname).then(function(page){if(!page||page.status===loader["PageResourceStatus"].Error){throw new Error("page resources for "+browserLoc.pathname+" not found. Not rendering React");}window.___webpackCompilationHash=page.page.webpackCompilationHash;var SiteRoot=Object(api_runner_browser["apiRunner"])("wrapRootElement",{element:react_default.a.createElement(LocationHandler,null)},react_default.a.createElement(LocationHandler,null),function(_ref4){var result=_ref4.result;return{element:result};}).pop();var App=function App(){return react_default.a.createElement(GatsbyRoot,null,SiteRoot);};var renderer=Object(api_runner_browser["apiRunner"])("replaceHydrateFunction",undefined,react_dom_default.a.hydrate)[0];ready_default()(function(){renderer(react_default.a.createElement(App,null),typeof window!=="undefined"?document.getElementById("___gatsby"):void 0,function(){Object(api_runner_browser["apiRunner"])("onInitialClientRender");});});});});

/***/ }),

/***/ "VKdU":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return mergeRefs; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("q1tI");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

function mergeRefs() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  return function forwardRef(node) {
    args.forEach(function (ref) {
      if (ref == null) {
        return;
      }

      if (typeof ref === 'function') {
        ref(node);
        return;
      }

      if (typeof ref === 'object') {
        ref.current = node;
        return;
      }

      console.error("mergeRefs cannot handle Refs of type boolean, number or string, received ref " + String(ref));
    });
  };
}

/***/ }),

/***/ "VbXa":
/***/ (function(module, exports) {

function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  subClass.__proto__ = superClass;
}

module.exports = _inheritsLoose;

/***/ }),

/***/ "VcUl":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = crossFade;

var _isPrefixedValue = __webpack_require__("sUt/");

var _isPrefixedValue2 = _interopRequireDefault(_isPrefixedValue);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
} // http://caniuse.com/#search=cross-fade


var prefixes = ['-webkit-', ''];

function crossFade(property, value) {
  if (typeof value === 'string' && !(0, _isPrefixedValue2.default)(value) && value.indexOf('cross-fade(') > -1) {
    return prefixes.map(function (prefix) {
      return value.replace(/cross-fade\(/g, prefix + 'cross-fade(');
    });
  }
}

/***/ }),

/***/ "VpIT":
/***/ (function(module, exports, __webpack_require__) {

var IS_PURE = __webpack_require__("xDBR");
var store = __webpack_require__("xs3f");

(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: '3.8.3',
  mode: IS_PURE ? 'pure' : 'global',
  copyright: '© 2021 Denis Pushkarev (zloirock.ru)'
});


/***/ }),

/***/ "Vu81":
/***/ (function(module, exports, __webpack_require__) {

var getBuiltIn = __webpack_require__("0GbY");
var getOwnPropertyNamesModule = __webpack_require__("JBy8");
var getOwnPropertySymbolsModule = __webpack_require__("dBg+");
var anObject = __webpack_require__("glrk");

// all object keys, includes non-enumerable and symbols
module.exports = getBuiltIn('Reflect', 'ownKeys') || function ownKeys(it) {
  var keys = getOwnPropertyNamesModule.f(anObject(it));
  var getOwnPropertySymbols = getOwnPropertySymbolsModule.f;
  return getOwnPropertySymbols ? keys.concat(getOwnPropertySymbols(it)) : keys;
};


/***/ }),

/***/ "W2jg":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isObject;

function isObject(value) {
  return value instanceof Object && !Array.isArray(value);
}

/***/ }),

/***/ "W8MJ":
/***/ (function(module, exports) {

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

module.exports = _createClass;

/***/ }),

/***/ "Wbzz":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "graphql", function() { return graphql; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StaticQueryContext", function() { return StaticQueryContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StaticQuery", function() { return StaticQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useStaticQuery", function() { return useStaticQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "prefetchPathname", function() { return prefetchPathname; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("q1tI");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var gatsby_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("+ZDr");
/* harmony import */ var gatsby_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(gatsby_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony reexport (default from non-harmony) */ __webpack_require__.d(__webpack_exports__, "Link", function() { return gatsby_link__WEBPACK_IMPORTED_MODULE_1___default.a; });
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "withAssetPrefix", function() { return gatsby_link__WEBPACK_IMPORTED_MODULE_1__["withAssetPrefix"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "withPrefix", function() { return gatsby_link__WEBPACK_IMPORTED_MODULE_1__["withPrefix"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "parsePath", function() { return gatsby_link__WEBPACK_IMPORTED_MODULE_1__["parsePath"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "navigate", function() { return gatsby_link__WEBPACK_IMPORTED_MODULE_1__["navigate"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "push", function() { return gatsby_link__WEBPACK_IMPORTED_MODULE_1__["push"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "replace", function() { return gatsby_link__WEBPACK_IMPORTED_MODULE_1__["replace"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "navigateTo", function() { return gatsby_link__WEBPACK_IMPORTED_MODULE_1__["navigateTo"]; });

/* harmony import */ var gatsby_react_router_scroll__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("7hJ6");
/* harmony import */ var gatsby_react_router_scroll__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(gatsby_react_router_scroll__WEBPACK_IMPORTED_MODULE_2__);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useScrollRestoration", function() { return gatsby_react_router_scroll__WEBPACK_IMPORTED_MODULE_2__["useScrollRestoration"]; });

/* harmony import */ var _public_page_renderer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("lw3w");
/* harmony import */ var _public_page_renderer__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_public_page_renderer__WEBPACK_IMPORTED_MODULE_3__);
/* harmony reexport (default from non-harmony) */ __webpack_require__.d(__webpack_exports__, "PageRenderer", function() { return _public_page_renderer__WEBPACK_IMPORTED_MODULE_3___default.a; });
/* harmony import */ var _loader__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("emEt");
var prefetchPathname=_loader__WEBPACK_IMPORTED_MODULE_4__["default"].enqueue;var StaticQueryContext=react__WEBPACK_IMPORTED_MODULE_0___default.a.createContext({});function StaticQueryDataRenderer(_ref){var staticQueryData=_ref.staticQueryData,data=_ref.data,query=_ref.query,render=_ref.render;var finalData=data?data.data:staticQueryData[query]&&staticQueryData[query].data;return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment,null,finalData&&render(finalData),!finalData&&react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",null,"Loading (StaticQuery)"));}var StaticQuery=function StaticQuery(props){var data=props.data,query=props.query,render=props.render,children=props.children;return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StaticQueryContext.Consumer,null,function(staticQueryData){return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StaticQueryDataRenderer,{data:data,query:query,render:render||children,staticQueryData:staticQueryData});});};var useStaticQuery=function useStaticQuery(query){var _context$query;if(typeof react__WEBPACK_IMPORTED_MODULE_0___default.a.useContext!=="function"&&"production"==="development"){throw new Error("You're likely using a version of React that doesn't support Hooks\n"+"Please update React and ReactDOM to 16.8.0 or later to use the useStaticQuery hook.");}var context=react__WEBPACK_IMPORTED_MODULE_0___default.a.useContext(StaticQueryContext);if(isNaN(Number(query))){throw new Error("useStaticQuery was called with a string but expects to be called using `graphql`. Try this:\n\nimport { useStaticQuery, graphql } from 'gatsby';\n\nuseStaticQuery(graphql`"+query+"`);\n");}if((_context$query=context[query])!=null&&_context$query.data){return context[query].data;}else{throw new Error("The result of this StaticQuery could not be fetched.\n\n"+"This is likely a bug in Gatsby and if refreshing the page does not fix it, "+"please open an issue in https://github.com/gatsbyjs/gatsby/issues");}};function graphql(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls "+"are supposed to only be evaluated at compile time, and then compiled away. "+"Unfortunately, something went wrong and the query was left in the compiled code.\n\n"+"Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.");}

/***/ }),

/***/ "WkPL":
/***/ (function(module, exports) {

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}

module.exports = _arrayLikeToArray;

/***/ }),

/***/ "XFth":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReactNativePropRegistry; });
var emptyObject = {};
var objects = {};
var prefix = 'r';
var uniqueID = 1;

var createKey = function createKey(id) {
  return prefix + "-" + id;
};

var ReactNativePropRegistry = function () {
  function ReactNativePropRegistry() {}

  ReactNativePropRegistry.register = function register(object) {
    var id = uniqueID++;

    if (false) {}

    var key = createKey(id);
    objects[key] = object;
    return id;
  };

  ReactNativePropRegistry.getByID = function getByID(id) {
    if (!id) {
      return emptyObject;
    }

    var key = createKey(id);
    var object = objects[key];

    if (!object) {
      console.warn('Invalid style with id `' + id + '`. Skipping ...');
      return emptyObject;
    }

    return object;
  };

  return ReactNativePropRegistry;
}();



/***/ }),

/***/ "XGwC":
/***/ (function(module, exports) {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),

/***/ "YF1G":
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__("xrYK");
var global = __webpack_require__("2oRo");

module.exports = classof(global.process) == 'process';


/***/ }),

/***/ "YLt+":
/***/ (function(module) {

module.exports = JSON.parse("[]");

/***/ }),

/***/ "YVoz":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = Object.assign;

/***/ }),

/***/ "Yl5I":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var fbjs_lib_ExecutionEnvironment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("xLLm");
/* harmony import */ var fbjs_lib_ExecutionEnvironment__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(fbjs_lib_ExecutionEnvironment__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("q1tI");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


var useLayoutEffectImpl = fbjs_lib_ExecutionEnvironment__WEBPACK_IMPORTED_MODULE_0__["canUseDOM"] ? react__WEBPACK_IMPORTED_MODULE_1__["useLayoutEffect"] : react__WEBPACK_IMPORTED_MODULE_1__["useEffect"];
/* harmony default export */ __webpack_exports__["a"] = (useLayoutEffectImpl);

/***/ }),

/***/ "YwZP":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Link", function() { return Link; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Location", function() { return Location; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocationProvider", function() { return LocationProvider; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Match", function() { return Match; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Redirect", function() { return Redirect; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Router", function() { return Router; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServerLocation", function() { return ServerLocation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isRedirect", function() { return isRedirect; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "redirectTo", function() { return redirectTo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useLocation", function() { return useLocation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useNavigate", function() { return useNavigate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useParams", function() { return useParams; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useMatch", function() { return useMatch; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaseContext", function() { return BaseContext; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("q1tI");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("17x9");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var invariant__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("QLaP");
/* harmony import */ var invariant__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(invariant__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var create_react_context__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("nqlD");
/* harmony import */ var create_react_context__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(create_react_context__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_lifecycles_compat__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("94VI");
/* harmony import */ var react_lifecycles_compat__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_lifecycles_compat__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _lib_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("LYrO");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "matchPath", function() { return _lib_utils__WEBPACK_IMPORTED_MODULE_5__["match"]; });

/* harmony import */ var _lib_history__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("9Xx/");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createHistory", function() { return _lib_history__WEBPACK_IMPORTED_MODULE_6__["a"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createMemorySource", function() { return _lib_history__WEBPACK_IMPORTED_MODULE_6__["b"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "navigate", function() { return _lib_history__WEBPACK_IMPORTED_MODULE_6__["d"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "globalHistory", function() { return _lib_history__WEBPACK_IMPORTED_MODULE_6__["c"]; });

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/* eslint-disable jsx-a11y/anchor-has-content */








////////////////////////////////////////////////////////////////////////////////

var createNamedContext = function createNamedContext(name, defaultValue) {
  var Ctx = create_react_context__WEBPACK_IMPORTED_MODULE_3___default()(defaultValue);
  Ctx.displayName = name;
  return Ctx;
};

////////////////////////////////////////////////////////////////////////////////
// Location Context/Provider
var LocationContext = createNamedContext("Location");

// sets up a listener if there isn't one already so apps don't need to be
// wrapped in some top level provider
var Location = function Location(_ref) {
  var children = _ref.children;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
    LocationContext.Consumer,
    null,
    function (context) {
      return context ? children(context) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
        LocationProvider,
        null,
        children
      );
    }
  );
};

var LocationProvider = function (_React$Component) {
  _inherits(LocationProvider, _React$Component);

  function LocationProvider() {
    var _temp, _this, _ret;

    _classCallCheck(this, LocationProvider);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.state = {
      context: _this.getContext(),
      refs: { unlisten: null }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  LocationProvider.prototype.getContext = function getContext() {
    var _props$history = this.props.history,
        navigate = _props$history.navigate,
        location = _props$history.location;

    return { navigate: navigate, location: location };
  };

  LocationProvider.prototype.componentDidCatch = function componentDidCatch(error, info) {
    if (isRedirect(error)) {
      var _navigate = this.props.history.navigate;

      _navigate(error.uri, { replace: true });
    } else {
      throw error;
    }
  };

  LocationProvider.prototype.componentDidUpdate = function componentDidUpdate(prevProps, prevState) {
    if (prevState.context.location !== this.state.context.location) {
      this.props.history._onTransitionComplete();
    }
  };

  LocationProvider.prototype.componentDidMount = function componentDidMount() {
    var _this2 = this;

    var refs = this.state.refs,
        history = this.props.history;

    history._onTransitionComplete();
    refs.unlisten = history.listen(function () {
      Promise.resolve().then(function () {
        // TODO: replace rAF with react deferred update API when it's ready https://github.com/facebook/react/issues/13306
        requestAnimationFrame(function () {
          if (!_this2.unmounted) {
            _this2.setState(function () {
              return { context: _this2.getContext() };
            });
          }
        });
      });
    });
  };

  LocationProvider.prototype.componentWillUnmount = function componentWillUnmount() {
    var refs = this.state.refs;

    this.unmounted = true;
    refs.unlisten();
  };

  LocationProvider.prototype.render = function render() {
    var context = this.state.context,
        children = this.props.children;

    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
      LocationContext.Provider,
      { value: context },
      typeof children === "function" ? children(context) : children || null
    );
  };

  return LocationProvider;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

////////////////////////////////////////////////////////////////////////////////


LocationProvider.defaultProps = {
  history: _lib_history__WEBPACK_IMPORTED_MODULE_6__[/* globalHistory */ "c"]
};
 false ? undefined : void 0;
var ServerLocation = function ServerLocation(_ref2) {
  var url = _ref2.url,
      children = _ref2.children;

  var searchIndex = url.indexOf("?");
  var searchExists = searchIndex > -1;
  var pathname = void 0;
  var search = "";
  var hash = "";

  if (searchExists) {
    pathname = url.substring(0, searchIndex);
    search = url.substring(searchIndex);
  } else {
    pathname = url;
  }

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
    LocationContext.Provider,
    {
      value: {
        location: {
          pathname: pathname,
          search: search,
          hash: hash
        },
        navigate: function navigate() {
          throw new Error("You can't call navigate on the server.");
        }
      }
    },
    children
  );
};
////////////////////////////////////////////////////////////////////////////////
// Sets baseuri and basepath for nested routers and links
var BaseContext = createNamedContext("Base", { baseuri: "/", basepath: "/" });

////////////////////////////////////////////////////////////////////////////////
// The main event, welcome to the show everybody.
var Router = function Router(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
    BaseContext.Consumer,
    null,
    function (baseContext) {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
        Location,
        null,
        function (locationContext) {
          return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(RouterImpl, _extends({}, baseContext, locationContext, props));
        }
      );
    }
  );
};

var RouterImpl = function (_React$PureComponent) {
  _inherits(RouterImpl, _React$PureComponent);

  function RouterImpl() {
    _classCallCheck(this, RouterImpl);

    return _possibleConstructorReturn(this, _React$PureComponent.apply(this, arguments));
  }

  RouterImpl.prototype.render = function render() {
    var _props = this.props,
        location = _props.location,
        _navigate2 = _props.navigate,
        basepath = _props.basepath,
        primary = _props.primary,
        children = _props.children,
        baseuri = _props.baseuri,
        _props$component = _props.component,
        component = _props$component === undefined ? "div" : _props$component,
        domProps = _objectWithoutProperties(_props, ["location", "navigate", "basepath", "primary", "children", "baseuri", "component"]);

    var routes = react__WEBPACK_IMPORTED_MODULE_0___default.a.Children.toArray(children).reduce(function (array, child) {
      var routes = createRoute(basepath)(child);
      return array.concat(routes);
    }, []);
    var pathname = location.pathname;


    var match = Object(_lib_utils__WEBPACK_IMPORTED_MODULE_5__["pick"])(routes, pathname);

    if (match) {
      var params = match.params,
          uri = match.uri,
          route = match.route,
          element = match.route.value;

      // remove the /* from the end for child routes relative paths

      basepath = route.default ? basepath : route.path.replace(/\*$/, "");

      var props = _extends({}, params, {
        uri: uri,
        location: location,
        navigate: function navigate(to, options) {
          return _navigate2(Object(_lib_utils__WEBPACK_IMPORTED_MODULE_5__["resolve"])(to, uri), options);
        }
      });

      var clone = react__WEBPACK_IMPORTED_MODULE_0___default.a.cloneElement(element, props, element.props.children ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
        Router,
        { location: location, primary: primary },
        element.props.children
      ) : undefined);

      // using 'div' for < 16.3 support
      var FocusWrapper = primary ? FocusHandler : component;
      // don't pass any props to 'div'
      var wrapperProps = primary ? _extends({ uri: uri, location: location, component: component }, domProps) : domProps;

      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
        BaseContext.Provider,
        { value: { baseuri: uri, basepath: basepath } },
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
          FocusWrapper,
          wrapperProps,
          clone
        )
      );
    } else {
      // Not sure if we want this, would require index routes at every level
      // warning(
      //   false,
      //   `<Router basepath="${basepath}">\n\nNothing matched:\n\t${
      //     location.pathname
      //   }\n\nPaths checked: \n\t${routes
      //     .map(route => route.path)
      //     .join(
      //       "\n\t"
      //     )}\n\nTo get rid of this warning, add a default NotFound component as child of Router:
      //   \n\tlet NotFound = () => <div>Not Found!</div>
      //   \n\t<Router>\n\t  <NotFound default/>\n\t  {/* ... */}\n\t</Router>`
      // );
      return null;
    }
  };

  return RouterImpl;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.PureComponent);

RouterImpl.defaultProps = {
  primary: true
};


var FocusContext = createNamedContext("Focus");

var FocusHandler = function FocusHandler(_ref3) {
  var uri = _ref3.uri,
      location = _ref3.location,
      component = _ref3.component,
      domProps = _objectWithoutProperties(_ref3, ["uri", "location", "component"]);

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
    FocusContext.Consumer,
    null,
    function (requestFocus) {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(FocusHandlerImpl, _extends({}, domProps, {
        component: component,
        requestFocus: requestFocus,
        uri: uri,
        location: location
      }));
    }
  );
};

// don't focus on initial render
var initialRender = true;
var focusHandlerCount = 0;

var FocusHandlerImpl = function (_React$Component2) {
  _inherits(FocusHandlerImpl, _React$Component2);

  function FocusHandlerImpl() {
    var _temp2, _this4, _ret2;

    _classCallCheck(this, FocusHandlerImpl);

    for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }

    return _ret2 = (_temp2 = (_this4 = _possibleConstructorReturn(this, _React$Component2.call.apply(_React$Component2, [this].concat(args))), _this4), _this4.state = {}, _this4.requestFocus = function (node) {
      if (!_this4.state.shouldFocus && node) {
        node.focus();
      }
    }, _temp2), _possibleConstructorReturn(_this4, _ret2);
  }

  FocusHandlerImpl.getDerivedStateFromProps = function getDerivedStateFromProps(nextProps, prevState) {
    var initial = prevState.uri == null;
    if (initial) {
      return _extends({
        shouldFocus: true
      }, nextProps);
    } else {
      var myURIChanged = nextProps.uri !== prevState.uri;
      var navigatedUpToMe = prevState.location.pathname !== nextProps.location.pathname && nextProps.location.pathname === nextProps.uri;
      return _extends({
        shouldFocus: myURIChanged || navigatedUpToMe
      }, nextProps);
    }
  };

  FocusHandlerImpl.prototype.componentDidMount = function componentDidMount() {
    focusHandlerCount++;
    this.focus();
  };

  FocusHandlerImpl.prototype.componentWillUnmount = function componentWillUnmount() {
    focusHandlerCount--;
    if (focusHandlerCount === 0) {
      initialRender = true;
    }
  };

  FocusHandlerImpl.prototype.componentDidUpdate = function componentDidUpdate(prevProps, prevState) {
    if (prevProps.location !== this.props.location && this.state.shouldFocus) {
      this.focus();
    }
  };

  FocusHandlerImpl.prototype.focus = function focus() {
    if (false) {}

    var requestFocus = this.props.requestFocus;


    if (requestFocus) {
      requestFocus(this.node);
    } else {
      if (initialRender) {
        initialRender = false;
      } else if (this.node) {
        // React polyfills [autofocus] and it fires earlier than cDM,
        // so we were stealing focus away, this line prevents that.
        if (!this.node.contains(document.activeElement)) {
          this.node.focus();
        }
      }
    }
  };

  FocusHandlerImpl.prototype.render = function render() {
    var _this5 = this;

    var _props2 = this.props,
        children = _props2.children,
        style = _props2.style,
        requestFocus = _props2.requestFocus,
        _props2$component = _props2.component,
        Comp = _props2$component === undefined ? "div" : _props2$component,
        uri = _props2.uri,
        location = _props2.location,
        domProps = _objectWithoutProperties(_props2, ["children", "style", "requestFocus", "component", "uri", "location"]);

    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
      Comp,
      _extends({
        style: _extends({ outline: "none" }, style),
        tabIndex: "-1",
        ref: function ref(n) {
          return _this5.node = n;
        }
      }, domProps),
      react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
        FocusContext.Provider,
        { value: this.requestFocus },
        this.props.children
      )
    );
  };

  return FocusHandlerImpl;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

Object(react_lifecycles_compat__WEBPACK_IMPORTED_MODULE_4__["polyfill"])(FocusHandlerImpl);

var k = function k() {};

////////////////////////////////////////////////////////////////////////////////
var forwardRef = react__WEBPACK_IMPORTED_MODULE_0___default.a.forwardRef;

if (typeof forwardRef === "undefined") {
  forwardRef = function forwardRef(C) {
    return C;
  };
}

var Link = forwardRef(function (_ref4, ref) {
  var innerRef = _ref4.innerRef,
      props = _objectWithoutProperties(_ref4, ["innerRef"]);

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
    BaseContext.Consumer,
    null,
    function (_ref5) {
      var basepath = _ref5.basepath,
          baseuri = _ref5.baseuri;
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
        Location,
        null,
        function (_ref6) {
          var location = _ref6.location,
              navigate = _ref6.navigate;

          var to = props.to,
              state = props.state,
              replace = props.replace,
              _props$getProps = props.getProps,
              getProps = _props$getProps === undefined ? k : _props$getProps,
              anchorProps = _objectWithoutProperties(props, ["to", "state", "replace", "getProps"]);

          var href = Object(_lib_utils__WEBPACK_IMPORTED_MODULE_5__["resolve"])(to, baseuri);
          var encodedHref = encodeURI(href);
          var isCurrent = location.pathname === encodedHref;
          var isPartiallyCurrent = Object(_lib_utils__WEBPACK_IMPORTED_MODULE_5__["startsWith"])(location.pathname, encodedHref);

          return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", _extends({
            ref: ref || innerRef,
            "aria-current": isCurrent ? "page" : undefined
          }, anchorProps, getProps({ isCurrent: isCurrent, isPartiallyCurrent: isPartiallyCurrent, href: href, location: location }), {
            href: href,
            onClick: function onClick(event) {
              if (anchorProps.onClick) anchorProps.onClick(event);
              if (shouldNavigate(event)) {
                event.preventDefault();
                var shouldReplace = replace;
                if (typeof replace !== "boolean" && isCurrent) {
                  var _location$state = _extends({}, location.state),
                      key = _location$state.key,
                      restState = _objectWithoutProperties(_location$state, ["key"]);

                  shouldReplace = Object(_lib_utils__WEBPACK_IMPORTED_MODULE_5__["shallowCompare"])(_extends({}, state), restState);
                }
                navigate(href, {
                  state: state,
                  replace: shouldReplace
                });
              }
            }
          }));
        }
      );
    }
  );
});

Link.displayName = "Link";

 false ? undefined : void 0;

////////////////////////////////////////////////////////////////////////////////
function RedirectRequest(uri) {
  this.uri = uri;
}

var isRedirect = function isRedirect(o) {
  return o instanceof RedirectRequest;
};

var redirectTo = function redirectTo(to) {
  throw new RedirectRequest(to);
};

var RedirectImpl = function (_React$Component3) {
  _inherits(RedirectImpl, _React$Component3);

  function RedirectImpl() {
    _classCallCheck(this, RedirectImpl);

    return _possibleConstructorReturn(this, _React$Component3.apply(this, arguments));
  }

  // Support React < 16 with this hook
  RedirectImpl.prototype.componentDidMount = function componentDidMount() {
    var _props3 = this.props,
        navigate = _props3.navigate,
        to = _props3.to,
        from = _props3.from,
        _props3$replace = _props3.replace,
        replace = _props3$replace === undefined ? true : _props3$replace,
        state = _props3.state,
        noThrow = _props3.noThrow,
        baseuri = _props3.baseuri,
        props = _objectWithoutProperties(_props3, ["navigate", "to", "from", "replace", "state", "noThrow", "baseuri"]);

    Promise.resolve().then(function () {
      var resolvedTo = Object(_lib_utils__WEBPACK_IMPORTED_MODULE_5__["resolve"])(to, baseuri);
      navigate(Object(_lib_utils__WEBPACK_IMPORTED_MODULE_5__["insertParams"])(resolvedTo, props), { replace: replace, state: state });
    });
  };

  RedirectImpl.prototype.render = function render() {
    var _props4 = this.props,
        navigate = _props4.navigate,
        to = _props4.to,
        from = _props4.from,
        replace = _props4.replace,
        state = _props4.state,
        noThrow = _props4.noThrow,
        baseuri = _props4.baseuri,
        props = _objectWithoutProperties(_props4, ["navigate", "to", "from", "replace", "state", "noThrow", "baseuri"]);

    var resolvedTo = Object(_lib_utils__WEBPACK_IMPORTED_MODULE_5__["resolve"])(to, baseuri);
    if (!noThrow) redirectTo(Object(_lib_utils__WEBPACK_IMPORTED_MODULE_5__["insertParams"])(resolvedTo, props));
    return null;
  };

  return RedirectImpl;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

var Redirect = function Redirect(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
    BaseContext.Consumer,
    null,
    function (_ref7) {
      var baseuri = _ref7.baseuri;
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
        Location,
        null,
        function (locationContext) {
          return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(RedirectImpl, _extends({}, locationContext, { baseuri: baseuri }, props));
        }
      );
    }
  );
};

 false ? undefined : void 0;

////////////////////////////////////////////////////////////////////////////////
var Match = function Match(_ref8) {
  var path = _ref8.path,
      children = _ref8.children;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
    BaseContext.Consumer,
    null,
    function (_ref9) {
      var baseuri = _ref9.baseuri;
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
        Location,
        null,
        function (_ref10) {
          var navigate = _ref10.navigate,
              location = _ref10.location;

          var resolvedPath = Object(_lib_utils__WEBPACK_IMPORTED_MODULE_5__["resolve"])(path, baseuri);
          var result = Object(_lib_utils__WEBPACK_IMPORTED_MODULE_5__["match"])(resolvedPath, location.pathname);
          return children({
            navigate: navigate,
            location: location,
            match: result ? _extends({}, result.params, {
              uri: result.uri,
              path: path
            }) : null
          });
        }
      );
    }
  );
};

////////////////////////////////////////////////////////////////////////////////
// Hooks

var useLocation = function useLocation() {
  var context = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(LocationContext);

  if (!context) {
    throw new Error("useLocation hook was used but a LocationContext.Provider was not found in the parent tree. Make sure this is used in a component that is a child of Router");
  }

  return context.location;
};

var useNavigate = function useNavigate() {
  var context = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(LocationContext);

  if (!context) {
    throw new Error("useNavigate hook was used but a LocationContext.Provider was not found in the parent tree. Make sure this is used in a component that is a child of Router");
  }

  return context.navigate;
};

var useParams = function useParams() {
  var context = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(BaseContext);

  if (!context) {
    throw new Error("useParams hook was used but a LocationContext.Provider was not found in the parent tree. Make sure this is used in a component that is a child of Router");
  }

  var location = useLocation();

  var results = Object(_lib_utils__WEBPACK_IMPORTED_MODULE_5__["match"])(context.basepath, location.pathname);

  return results ? results.params : null;
};

var useMatch = function useMatch(path) {
  if (!path) {
    throw new Error("useMatch(path: string) requires an argument of a string to match against");
  }
  var context = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(BaseContext);

  if (!context) {
    throw new Error("useMatch hook was used but a LocationContext.Provider was not found in the parent tree. Make sure this is used in a component that is a child of Router");
  }

  var location = useLocation();

  var resolvedPath = Object(_lib_utils__WEBPACK_IMPORTED_MODULE_5__["resolve"])(path, context.baseuri);
  var result = Object(_lib_utils__WEBPACK_IMPORTED_MODULE_5__["match"])(resolvedPath, location.pathname);
  return result ? _extends({}, result.params, {
    uri: result.uri,
    path: path
  }) : null;
};

////////////////////////////////////////////////////////////////////////////////
// Junk
var stripSlashes = function stripSlashes(str) {
  return str.replace(/(^\/+|\/+$)/g, "");
};

var createRoute = function createRoute(basepath) {
  return function (element) {
    if (!element) {
      return null;
    }

    if (element.type === react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment && element.props.children) {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.Children.map(element.props.children, createRoute(basepath));
    }
    !(element.props.path || element.props.default || element.type === Redirect) ?  false ? undefined : invariant__WEBPACK_IMPORTED_MODULE_2___default()(false) : void 0;

    !!(element.type === Redirect && (!element.props.from || !element.props.to)) ?  false ? undefined : invariant__WEBPACK_IMPORTED_MODULE_2___default()(false) : void 0;

    !!(element.type === Redirect && !Object(_lib_utils__WEBPACK_IMPORTED_MODULE_5__["validateRedirect"])(element.props.from, element.props.to)) ?  false ? undefined : invariant__WEBPACK_IMPORTED_MODULE_2___default()(false) : void 0;

    if (element.props.default) {
      return { value: element, default: true };
    }

    var elementPath = element.type === Redirect ? element.props.from : element.props.path;

    var path = elementPath === "/" ? basepath : stripSlashes(basepath) + "/" + stripSlashes(elementPath);

    return {
      value: element,
      default: element.props.default,
      path: element.props.children ? stripSlashes(path) + "/*" : path
    };
  };
};

var shouldNavigate = function shouldNavigate(event) {
  return !event.defaultPrevented && event.button === 0 && !(event.metaKey || event.altKey || event.ctrlKey || event.shiftKey);
};

////////////////////////////////////////////////////////////////////////


/***/ }),

/***/ "ZhPi":
/***/ (function(module, exports, __webpack_require__) {

var arrayLikeToArray = __webpack_require__("WkPL");

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return arrayLikeToArray(o, minLen);
}

module.exports = _unsupportedIterableToArray;

/***/ }),

/***/ "ZiLf":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = sizing;
var prefixes = ['-webkit-', '-moz-', ''];
var properties = {
  maxHeight: true,
  maxWidth: true,
  width: true,
  height: true,
  columnWidth: true,
  minWidth: true,
  minHeight: true
};
var values = {
  'min-content': true,
  'max-content': true,
  'fill-available': true,
  'fit-content': true,
  'contain-floats': true
};

function sizing(property, value) {
  if (properties.hasOwnProperty(property) && values.hasOwnProperty(value)) {
    return prefixes.map(function (prefix) {
      return prefix + value;
    });
  }
}

/***/ }),

/***/ "a1gu":
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__("cDf5");

var assertThisInitialized = __webpack_require__("PJYZ");

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return assertThisInitialized(self);
}

module.exports = _possibleConstructorReturn;

/***/ }),

/***/ "aS6o":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = filter;

var _isPrefixedValue = __webpack_require__("sUt/");

var _isPrefixedValue2 = _interopRequireDefault(_isPrefixedValue);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
} // http://caniuse.com/#feat=css-filter-function


var prefixes = ['-webkit-', ''];

function filter(property, value) {
  if (typeof value === 'string' && !(0, _isPrefixedValue2.default)(value) && value.indexOf('filter(') > -1) {
    return prefixes.map(function (prefix) {
      return value.replace(/filter\(/g, prefix + 'filter(');
    });
  }
}

/***/ }),

/***/ "afO8":
/***/ (function(module, exports, __webpack_require__) {

var NATIVE_WEAK_MAP = __webpack_require__("f5p1");
var global = __webpack_require__("2oRo");
var isObject = __webpack_require__("hh1v");
var createNonEnumerableProperty = __webpack_require__("kRJp");
var objectHas = __webpack_require__("UTVS");
var shared = __webpack_require__("xs3f");
var sharedKey = __webpack_require__("93I0");
var hiddenKeys = __webpack_require__("0BK2");

var WeakMap = global.WeakMap;
var set, get, has;

var enforce = function (it) {
  return has(it) ? get(it) : set(it, {});
};

var getterFor = function (TYPE) {
  return function (it) {
    var state;
    if (!isObject(it) || (state = get(it)).type !== TYPE) {
      throw TypeError('Incompatible receiver, ' + TYPE + ' required');
    } return state;
  };
};

if (NATIVE_WEAK_MAP) {
  var store = shared.state || (shared.state = new WeakMap());
  var wmget = store.get;
  var wmhas = store.has;
  var wmset = store.set;
  set = function (it, metadata) {
    metadata.facade = it;
    wmset.call(store, it, metadata);
    return metadata;
  };
  get = function (it) {
    return wmget.call(store, it) || {};
  };
  has = function (it) {
    return wmhas.call(store, it);
  };
} else {
  var STATE = sharedKey('state');
  hiddenKeys[STATE] = true;
  set = function (it, metadata) {
    metadata.facade = it;
    createNonEnumerableProperty(it, STATE, metadata);
    return metadata;
  };
  get = function (it) {
    return objectHas(it, STATE) ? it[STATE] : {};
  };
  has = function (it) {
    return objectHas(it, STATE);
  };
}

module.exports = {
  set: set,
  get: get,
  has: has,
  enforce: enforce,
  getterFor: getterFor
};


/***/ }),

/***/ "buI2":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = prefixProperty;

var _capitalizeString = __webpack_require__("HiWe");

var _capitalizeString2 = _interopRequireDefault(_capitalizeString);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

function prefixProperty(prefixProperties, property, style) {
  if (prefixProperties.hasOwnProperty(property)) {
    var newStyle = {};
    var requiredPrefixes = prefixProperties[property];
    var capitalizedProperty = (0, _capitalizeString2.default)(property);
    var keys = Object.keys(style);

    for (var i = 0; i < keys.length; i++) {
      var styleProperty = keys[i];

      if (styleProperty === property) {
        for (var j = 0; j < requiredPrefixes.length; j++) {
          newStyle[requiredPrefixes[j] + capitalizedProperty] = style[property];
        }
      }

      newStyle[styleProperty] = style[styleProperty];
    }

    return newStyle;
  }

  return style;
}

/***/ }),

/***/ "busE":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("2oRo");
var createNonEnumerableProperty = __webpack_require__("kRJp");
var has = __webpack_require__("UTVS");
var setGlobal = __webpack_require__("zk60");
var inspectSource = __webpack_require__("iSVu");
var InternalStateModule = __webpack_require__("afO8");

var getInternalState = InternalStateModule.get;
var enforceInternalState = InternalStateModule.enforce;
var TEMPLATE = String(String).split('String');

(module.exports = function (O, key, value, options) {
  var unsafe = options ? !!options.unsafe : false;
  var simple = options ? !!options.enumerable : false;
  var noTargetGet = options ? !!options.noTargetGet : false;
  var state;
  if (typeof value == 'function') {
    if (typeof key == 'string' && !has(value, 'name')) {
      createNonEnumerableProperty(value, 'name', key);
    }
    state = enforceInternalState(value);
    if (!state.source) {
      state.source = TEMPLATE.join(typeof key == 'string' ? key : '');
    }
  }
  if (O === global) {
    if (simple) O[key] = value;
    else setGlobal(key, value);
    return;
  } else if (!unsafe) {
    delete O[key];
  } else if (!noTargetGet && O[key]) {
    simple = true;
  }
  if (simple) O[key] = value;
  else createNonEnumerableProperty(O, key, value);
// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
})(Function.prototype, 'toString', function toString() {
  return typeof this == 'function' && getInternalState(this).source || inspectSource(this);
});


/***/ }),

/***/ "cDf5":
/***/ (function(module, exports) {

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "cSJ8":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return stripPrefix; });
function stripPrefix(str){var prefix=arguments.length>1&&arguments[1]!==undefined?arguments[1]:"";if(!prefix){return str;}if(str===prefix){return"/";}if(str.startsWith(prefix+"/")){return str.slice(prefix.length);}return str;}

/***/ }),

/***/ "cdkR":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/react-native-web/dist/modules/isWebColor/index.js
var isWebColor = function isWebColor(color) {
  return color === 'currentcolor' || color === 'currentColor' || color === 'inherit' || color.indexOf('var(') === 0;
};

/* harmony default export */ var modules_isWebColor = (isWebColor);
// EXTERNAL MODULE: ./node_modules/react-native-web/dist/exports/processColor/index.js
var processColor = __webpack_require__("+mtM");

// CONCATENATED MODULE: ./node_modules/react-native-web/dist/modules/normalizeColor/index.js



var normalizeColor_normalizeColor = function normalizeColor(color, opacity) {
  if (opacity === void 0) {
    opacity = 1;
  }

  if (color == null) return;

  if (typeof color === 'string' && modules_isWebColor(color)) {
    return color;
  }

  var colorInt = Object(processColor["a" /* default */])(color);

  if (colorInt != null) {
    var r = colorInt >> 16 & 255;
    var g = colorInt >> 8 & 255;
    var b = colorInt & 255;
    var a = (colorInt >> 24 & 255) / 255;
    var alpha = (a * opacity).toFixed(2);
    return "rgba(" + r + "," + g + "," + b + "," + alpha + ")";
  }
};

/* harmony default export */ var modules_normalizeColor = __webpack_exports__["a"] = (normalizeColor_normalizeColor);

/***/ }),

/***/ "ckSu":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/fbjs/lib/ExecutionEnvironment.js
var ExecutionEnvironment = __webpack_require__("xLLm");

// EXTERNAL MODULE: ./node_modules/react-native-web/dist/exports/StyleSheet/ReactNativePropRegistry.js
var ReactNativePropRegistry = __webpack_require__("XFth");

// EXTERNAL MODULE: ./node_modules/react-native-web/dist/exports/StyleSheet/flattenStyle.js
var flattenStyle = __webpack_require__("Iu5r");

// CONCATENATED MODULE: ./node_modules/react-native-web/dist/exports/StyleSheet/StyleSheet.js


var absoluteFillObject = {
  position: 'absolute',
  left: 0,
  right: 0,
  top: 0,
  bottom: 0
};
var absoluteFill = ReactNativePropRegistry["a" /* default */].register(absoluteFillObject);
var StyleSheet = {
  absoluteFill: absoluteFill,
  absoluteFillObject: absoluteFillObject,
  compose: function compose(style1, style2) {
    if (false) { var readableStyles, len; }

    if (style1 && style2) {
      return [style1, style2];
    } else {
      return style1 || style2;
    }
  },
  create: function create(styles) {
    var result = {};
    Object.keys(styles).forEach(function (key) {
      if (false) { var interopValidate, validate; }

      var id = styles[key] && ReactNativePropRegistry["a" /* default */].register(styles[key]);
      result[key] = id;
    });
    return result;
  },
  flatten: flattenStyle["a" /* default */],
  hairlineWidth: 1
};
/* harmony default export */ var StyleSheet_StyleSheet = (StyleSheet);
// CONCATENATED MODULE: ./node_modules/react-native-web/dist/exports/StyleSheet/index.js



if (ExecutionEnvironment["canUseDOM"] && window.__REACT_DEVTOOLS_GLOBAL_HOOK__) {
  window.__REACT_DEVTOOLS_GLOBAL_HOOK__.resolveRNStyle = StyleSheet_StyleSheet.flatten;
}

/* harmony default export */ var exports_StyleSheet = __webpack_exports__["a"] = (StyleSheet_StyleSheet);

/***/ }),

/***/ "cqcS":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _modules_normalizeColor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cdkR");
/* harmony import */ var _normalizeValueWithProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("A6cL");


var defaultOffset = {
  height: 0,
  width: 0
};

var resolveShadowValue = function resolveShadowValue(style) {
  var shadowColor = style.shadowColor,
      shadowOffset = style.shadowOffset,
      shadowOpacity = style.shadowOpacity,
      shadowRadius = style.shadowRadius;

  var _ref = shadowOffset || defaultOffset,
      height = _ref.height,
      width = _ref.width;

  var offsetX = Object(_normalizeValueWithProperty__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(width);
  var offsetY = Object(_normalizeValueWithProperty__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(height);
  var blurRadius = Object(_normalizeValueWithProperty__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(shadowRadius || 0);
  var color = Object(_modules_normalizeColor__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(shadowColor || 'black', shadowOpacity);

  if (color != null && offsetX != null && offsetY != null && blurRadius != null) {
    return offsetX + " " + offsetY + " " + blurRadius + " " + color;
  }
};

/* harmony default export */ __webpack_exports__["a"] = (resolveShadowValue);

/***/ }),

/***/ "cu4x":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
exports.__esModule=true;exports.parsePath=parsePath;function parsePath(path){var pathname=path||"/";var search="";var hash="";var hashIndex=pathname.indexOf("#");if(hashIndex!==-1){hash=pathname.substr(hashIndex);pathname=pathname.substr(0,hashIndex);}var searchIndex=pathname.indexOf("?");if(searchIndex!==-1){search=pathname.substr(searchIndex);pathname=pathname.substr(0,searchIndex);}return{pathname:pathname,search:search==="?"?"":search,hash:hash==="#"?"":hash};}

/***/ }),

/***/ "dBg+":
/***/ (function(module, exports) {

exports.f = Object.getOwnPropertySymbols;


/***/ }),

/***/ "e/UW":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
exports.registerServiceWorker=function(){return true;};var whiteListLinkRels=/^(stylesheet|preload)$/;var prefetchedPathnames=[];exports.onServiceWorkerActive=function(_ref){var getResourceURLsForPathname=_ref.getResourceURLsForPathname,serviceWorker=_ref.serviceWorker;if(window.___swUpdated){serviceWorker.active.postMessage({gatsbyApi:"clearPathResources"});return;}var nodes=document.querySelectorAll("\n    head > script[src],\n    head > link[href],\n    head > style[data-href]\n  ");var headerResources=[].slice.call(nodes).filter(function(node){return node.tagName!=="LINK"||whiteListLinkRels.test(node.getAttribute("rel"));}).map(function(node){return node.src||node.href||node.getAttribute("data-href");});var prefetchedResources=[];prefetchedPathnames.forEach(function(path){var resources=getResourceURLsForPathname(path);prefetchedResources.push.apply(prefetchedResources,resources);serviceWorker.active.postMessage({gatsbyApi:"setPathResources",path:path,resources:resources});});var resources=[].concat(headerResources,prefetchedResources);resources.forEach(function(resource){var link=document.createElement("link");link.rel="prefetch";link.href=resource;link.onload=link.remove;link.onerror=link.remove;document.head.appendChild(link);});};function setPathResources(path,getResourceURLsForPathname){if(window.___swUpdated)return;if("serviceWorker"in navigator){var _navigator=navigator,serviceWorker=_navigator.serviceWorker;if(serviceWorker.controller===null){prefetchedPathnames.push(path);}else{var resources=getResourceURLsForPathname(path);serviceWorker.controller.postMessage({gatsbyApi:"setPathResources",path:path,resources:resources});}}}exports.onRouteUpdate=function(_ref2){var location=_ref2.location,getResourceURLsForPathname=_ref2.getResourceURLsForPathname;var pathname=location.pathname.replace("","");setPathResources(pathname,getResourceURLsForPathname);if("serviceWorker"in navigator&&navigator.serviceWorker.controller!==null){navigator.serviceWorker.controller.postMessage({gatsbyApi:"enableOfflineShell"});}};exports.onPostPrefetchPathname=function(_ref3){var pathname=_ref3.pathname,getResourceURLsForPathname=_ref3.getResourceURLsForPathname;setPathResources(pathname,getResourceURLsForPathname);};

/***/ }),

/***/ "eDl+":
/***/ (function(module, exports) {

// IE8- don't enum bug keys
module.exports = [
  'constructor',
  'hasOwnProperty',
  'isPrototypeOf',
  'propertyIsEnumerable',
  'toLocaleString',
  'toString',
  'valueOf'
];


/***/ }),

/***/ "eKGF":
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ "ebBd":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _AccessibilityUtil__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("IybW");
/* harmony import */ var _exports_StyleSheet_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("lxpi");
/* harmony import */ var _exports_StyleSheet__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("ckSu");
/* harmony import */ var _exports_StyleSheet_styleResolver__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("TgPG");
/* harmony import */ var _exports_StyleSheet_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("yBWl");
function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}






var emptyObject = {};
var hasOwnProperty = Object.prototype.hasOwnProperty;
var classes = _exports_StyleSheet_css__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].create({
  reset: {
    backgroundColor: 'transparent',
    color: 'inherit',
    font: 'inherit',
    listStyle: 'none',
    margin: 0,
    textAlign: 'inherit',
    textDecoration: 'none'
  },
  cursor: {
    cursor: 'pointer'
  }
}, _exports_StyleSheet_constants__WEBPACK_IMPORTED_MODULE_4__[/* STYLE_GROUPS */ "c"].classicReset);
var pointerEventsStyles = _exports_StyleSheet__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"].create({
  auto: {
    pointerEvents: 'auto'
  },
  'box-none': {
    pointerEvents: 'box-none'
  },
  'box-only': {
    pointerEvents: 'box-only'
  },
  none: {
    pointerEvents: 'none'
  }
});

var createDOMProps = function createDOMProps(component, props) {
  if (!props) {
    props = emptyObject;
  }

  var _props = props,
      accessibilityLabel = _props.accessibilityLabel,
      accessibilityLiveRegion = _props.accessibilityLiveRegion,
      accessibilityState = _props.accessibilityState,
      accessibilityValue = _props.accessibilityValue,
      accessible = _props.accessible,
      classList = _props.classList,
      dataSet = _props.dataSet,
      providedDisabled = _props.disabled,
      importantForAccessibility = _props.importantForAccessibility,
      nativeID = _props.nativeID,
      pointerEvents = _props.pointerEvents,
      providedStyle = _props.style,
      testID = _props.testID,
      accessibilityRole = _props.accessibilityRole,
      domProps = _objectWithoutPropertiesLoose(_props, ["accessibilityLabel", "accessibilityLiveRegion", "accessibilityState", "accessibilityValue", "accessible", "classList", "dataSet", "disabled", "importantForAccessibility", "nativeID", "pointerEvents", "style", "testID", "accessibilityRole"]);

  var disabled = accessibilityState != null && accessibilityState.disabled === true || providedDisabled;
  var role = _AccessibilityUtil__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].propsToAriaRole(props);
  var isNativeInteractiveElement = role === 'link' || component === 'a' || component === 'button' || component === 'input' || component === 'select' || component === 'textarea' || domProps.contentEditable != null;

  if (dataSet != null) {
    for (var prop in dataSet) {
      if (hasOwnProperty.call(dataSet, prop)) {
        var value = dataSet[prop];

        if (value != null) {
          domProps["data-" + prop] = value;
        }
      }
    }
  }

  if (accessibilityLabel != null) {
    domProps['aria-label'] = accessibilityLabel;
  }

  if (accessibilityLiveRegion != null) {
    domProps['aria-live'] = accessibilityLiveRegion === 'none' ? 'off' : accessibilityLiveRegion;
  }

  if (role != null) {
    domProps.role = role;
  }

  if (accessibilityState != null) {
    for (var _prop in accessibilityState) {
      var _value = accessibilityState[_prop];

      if (_value != null) {
        if (_prop === 'disabled' || _prop === 'hidden') {
          if (_value === true) {
            domProps["aria-" + _prop] = _value;
            domProps[_prop] = _value;
          }
        } else {
          domProps["aria-" + _prop] = _value;
        }
      }
    }
  }

  if (accessibilityValue != null) {
    for (var _prop2 in accessibilityValue) {
      var _value2 = accessibilityValue[_prop2];

      if (_value2 != null) {
        domProps["aria-value" + _prop2] = _value2;
      }
    }
  }

  if (importantForAccessibility === 'no-hide-descendants') {
    domProps['aria-hidden'] = true;
  }

  if (disabled === true) {
    domProps['aria-disabled'] = true;
    domProps.disabled = true;
  }

  var focusable = !disabled && importantForAccessibility !== 'no' && importantForAccessibility !== 'no-hide-descendants';

  if (isNativeInteractiveElement) {
    if (accessible === false || !focusable) {
      domProps.tabIndex = '-1';
    } else {
      domProps['data-focusable'] = true;
    }
  } else if (role === 'button' || role === 'menuitem' || role === 'textbox') {
    if (accessible !== false && focusable) {
      domProps['data-focusable'] = true;
      domProps.tabIndex = '0';
    }
  } else {
    if (accessible === true && focusable) {
      domProps['data-focusable'] = true;
      domProps.tabIndex = '0';
    }
  }

  var reactNativeStyle = _exports_StyleSheet__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"].compose(pointerEvents && pointerEventsStyles[pointerEvents], providedStyle);
  var needsCursor = (role === 'button' || role === 'link') && !disabled;
  var needsReset = component === 'a' || component === 'button' || component === 'li' || component === 'ul' || role === 'heading';
  var finalClassList = [needsReset && classes.reset, needsCursor && classes.cursor, classList];

  var _styleResolver$resolv = _exports_StyleSheet_styleResolver__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"].resolve(reactNativeStyle, finalClassList),
      className = _styleResolver$resolv.className,
      style = _styleResolver$resolv.style;

  if (className != null && className !== '') {
    domProps.className = className;
  }

  if (style) {
    domProps.style = style;
  }

  if (nativeID != null) {
    domProps.id = nativeID;
  }

  if (component === 'a' && domProps.target === '_blank') {
    domProps.rel = (domProps.rel || '') + " noopener noreferrer";
  }

  if (testID != null) {
    domProps['data-testid'] = testID;
  }

  if (isNativeInteractiveElement || role === 'button' || role === 'menuitem' || accessible === true && focusable) {
    var onClick = domProps.onClick;

    if (onClick != null) {
      if (disabled) {
        domProps.onClick = function (e) {
          e.stopPropagation();
        };
      } else if (!isNativeInteractiveElement) {
        var onKeyDown = domProps.onKeyDown;

        domProps.onKeyDown = function (e) {
          var key = e.key,
              repeat = e.repeat;
          var isSpacebarKey = key === ' ' || key === 'Spacebar';
          var isButtonRole = role === 'button' || role === 'menuitem';

          if (onKeyDown != null) {
            onKeyDown(e);
          }

          if (!repeat && key === 'Enter') {
            onClick(e);
          } else if (isSpacebarKey && isButtonRole) {
            if (!repeat) {
              onClick(e);
            }

            e.preventDefault();
          }
        };
      }
    }
  }

  return domProps;
};

/* harmony default export */ __webpack_exports__["a"] = (createDOMProps);

/***/ }),

/***/ "emEt":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "PageResourceStatus", function() { return /* binding */ PageResourceStatus; });
__webpack_require__.d(__webpack_exports__, "BaseLoader", function() { return /* binding */ loader_BaseLoader; });
__webpack_require__.d(__webpack_exports__, "ProdLoader", function() { return /* binding */ loader_ProdLoader; });
__webpack_require__.d(__webpack_exports__, "setLoader", function() { return /* binding */ setLoader; });
__webpack_require__.d(__webpack_exports__, "publicLoader", function() { return /* binding */ publicLoader; });
__webpack_require__.d(__webpack_exports__, "getStaticQueryResults", function() { return /* binding */ getStaticQueryResults; });

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/get.js
var get = __webpack_require__("iWIM");
var get_default = /*#__PURE__*/__webpack_require__.n(get);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/inherits.js
var inherits = __webpack_require__("7W2i");
var inherits_default = /*#__PURE__*/__webpack_require__.n(inherits);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js
var possibleConstructorReturn = __webpack_require__("a1gu");
var possibleConstructorReturn_default = /*#__PURE__*/__webpack_require__.n(possibleConstructorReturn);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/getPrototypeOf.js
var getPrototypeOf = __webpack_require__("Nsbk");
var getPrototypeOf_default = /*#__PURE__*/__webpack_require__.n(getPrototypeOf);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/toConsumableArray.js
var toConsumableArray = __webpack_require__("RIqP");
var toConsumableArray_default = /*#__PURE__*/__webpack_require__.n(toConsumableArray);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/defineProperty.js
var defineProperty = __webpack_require__("lSNA");
var defineProperty_default = /*#__PURE__*/__webpack_require__.n(defineProperty);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/slicedToArray.js
var slicedToArray = __webpack_require__("J4zp");
var slicedToArray_default = /*#__PURE__*/__webpack_require__.n(slicedToArray);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/extends.js
var helpers_extends = __webpack_require__("pVnL");
var extends_default = /*#__PURE__*/__webpack_require__.n(helpers_extends);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/classCallCheck.js
var classCallCheck = __webpack_require__("lwsE");
var classCallCheck_default = /*#__PURE__*/__webpack_require__.n(classCallCheck);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/createClass.js
var createClass = __webpack_require__("W8MJ");
var createClass_default = /*#__PURE__*/__webpack_require__.n(createClass);

// CONCATENATED MODULE: ./.cache/prefetch.js
var support=function support(feature){if(typeof document==="undefined"){return false;}var fakeLink=document.createElement("link");try{if(fakeLink.relList&&typeof fakeLink.relList.supports==="function"){return fakeLink.relList.supports(feature);}}catch(err){return false;}return false;};var linkPrefetchStrategy=function linkPrefetchStrategy(url,options){return new Promise(function(resolve,reject){if(typeof document==="undefined"){reject();return;}var link=document.createElement("link");link.setAttribute("rel","prefetch");link.setAttribute("href",url);Object.keys(options).forEach(function(key){link.setAttribute(key,options[key]);});link.onload=resolve;link.onerror=reject;var parentElement=document.getElementsByTagName("head")[0]||document.getElementsByName("script")[0].parentNode;parentElement.appendChild(link);});};var xhrPrefetchStrategy=function xhrPrefetchStrategy(url){return new Promise(function(resolve,reject){var req=new XMLHttpRequest();req.open("GET",url,true);req.onload=function(){if(req.status===200){resolve();}else{reject();}};req.send(null);});};var supportedPrefetchStrategy=support("prefetch")?linkPrefetchStrategy:xhrPrefetchStrategy;var preFetched={};var prefetch_prefetch=function prefetch(url,options){return new Promise(function(resolve){if(preFetched[url]){resolve();return;}supportedPrefetchStrategy(url,options).then(function(){resolve();preFetched[url]=true;}).catch(function(){});});};/* harmony default export */ var _cache_prefetch = (prefetch_prefetch);
// EXTERNAL MODULE: ./.cache/emitter.js + 1 modules
var emitter = __webpack_require__("5yr3");

// EXTERNAL MODULE: ./.cache/find-path.js + 1 modules
var find_path = __webpack_require__("30RF");

// CONCATENATED MODULE: ./.cache/loader.js
function _createSuper(Derived){var hasNativeReflectConstruct=_isNativeReflectConstruct();return function _createSuperInternal(){var Super=getPrototypeOf_default()(Derived),result;if(hasNativeReflectConstruct){var NewTarget=getPrototypeOf_default()(this).constructor;result=Reflect.construct(Super,arguments,NewTarget);}else{result=Super.apply(this,arguments);}return possibleConstructorReturn_default()(this,result);};}function _isNativeReflectConstruct(){if(typeof Reflect==="undefined"||!Reflect.construct)return false;if(Reflect.construct.sham)return false;if(typeof Proxy==="function")return true;try{Date.prototype.toString.call(Reflect.construct(Date,[],function(){}));return true;}catch(e){return false;}}function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);if(enumerableOnly)symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable;});keys.push.apply(keys,symbols);}return keys;}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=arguments[i]!=null?arguments[i]:{};if(i%2){ownKeys(Object(source),true).forEach(function(key){defineProperty_default()(target,key,source[key]);});}else if(Object.getOwnPropertyDescriptors){Object.defineProperties(target,Object.getOwnPropertyDescriptors(source));}else{ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key));});}}return target;}var PageResourceStatus={Error:"error",Success:"success"};var preferDefault=function preferDefault(m){return m&&m.default||m;};var stripSurroundingSlashes=function stripSurroundingSlashes(s){s=s[0]==="/"?s.slice(1):s;s=s.endsWith("/")?s.slice(0,-1):s;return s;};var createPageDataUrl=function createPageDataUrl(path){var fixedPath=path==="/"?"index":stripSurroundingSlashes(path);return ""+"/page-data/"+fixedPath+"/page-data.json";};function doFetch(url){var method=arguments.length>1&&arguments[1]!==undefined?arguments[1]:"GET";return new Promise(function(resolve,reject){var req=new XMLHttpRequest();req.open(method,url,true);req.onreadystatechange=function(){if(req.readyState==4){resolve(req);}};req.send(null);});}var doesConnectionSupportPrefetch=function doesConnectionSupportPrefetch(){if("connection"in navigator&&typeof navigator.connection!=="undefined"){if((navigator.connection.effectiveType||"").includes("2g")){return false;}if(navigator.connection.saveData){return false;}}return true;};var toPageResources=function toPageResources(pageData){var component=arguments.length>1&&arguments[1]!==undefined?arguments[1]:null;var page={componentChunkName:pageData.componentChunkName,path:pageData.path,webpackCompilationHash:pageData.webpackCompilationHash,matchPath:pageData.matchPath,staticQueryHashes:pageData.staticQueryHashes};return{component:component,json:pageData.result,page:page};};var loader_BaseLoader=function(){function BaseLoader(loadComponent,matchPaths){classCallCheck_default()(this,BaseLoader);this.inFlightNetworkRequests=new Map();this.pageDb=new Map();this.inFlightDb=new Map();this.staticQueryDb={};this.pageDataDb=new Map();this.prefetchTriggered=new Set();this.prefetchCompleted=new Set();this.loadComponent=loadComponent;Object(find_path["d" /* setMatchPaths */])(matchPaths);}createClass_default()(BaseLoader,[{key:"memoizedGet",value:function memoizedGet(url){var _this=this;var inFlightPromise=this.inFlightNetworkRequests.get(url);if(!inFlightPromise){inFlightPromise=doFetch(url,"GET");this.inFlightNetworkRequests.set(url,inFlightPromise);}return inFlightPromise.then(function(response){_this.inFlightNetworkRequests.delete(url);return response;}).catch(function(err){_this.inFlightNetworkRequests.delete(url);throw err;});}},{key:"setApiRunner",value:function setApiRunner(apiRunner){this.apiRunner=apiRunner;this.prefetchDisabled=apiRunner("disableCorePrefetching").some(function(a){return a;});}},{key:"fetchPageDataJson",value:function fetchPageDataJson(loadObj){var _this2=this;var pagePath=loadObj.pagePath,_loadObj$retries=loadObj.retries,retries=_loadObj$retries===void 0?0:_loadObj$retries;var url=createPageDataUrl(pagePath);return this.memoizedGet(url).then(function(req){var status=req.status,responseText=req.responseText;if(status===200){try{var jsonPayload=JSON.parse(responseText);if(jsonPayload.path===undefined){throw new Error("not a valid pageData response");}return extends_default()(loadObj,{status:PageResourceStatus.Success,payload:jsonPayload});}catch(err){}}if(status===404||status===200){if(pagePath==="/404.html"){return extends_default()(loadObj,{status:PageResourceStatus.Error});}return _this2.fetchPageDataJson(extends_default()(loadObj,{pagePath:"/404.html",notFound:true}));}if(status===500){return extends_default()(loadObj,{status:PageResourceStatus.Error});}if(retries<3){return _this2.fetchPageDataJson(extends_default()(loadObj,{retries:retries+1}));}return extends_default()(loadObj,{status:PageResourceStatus.Error});});}},{key:"loadPageDataJson",value:function loadPageDataJson(rawPath){var _this3=this;var pagePath=Object(find_path["b" /* findPath */])(rawPath);if(this.pageDataDb.has(pagePath)){var pageData=this.pageDataDb.get(pagePath);if(true){return Promise.resolve(pageData);}}return this.fetchPageDataJson({pagePath:pagePath}).then(function(pageData){_this3.pageDataDb.set(pagePath,pageData);return pageData;});}},{key:"findMatchPath",value:function findMatchPath(rawPath){return Object(find_path["a" /* findMatchPath */])(rawPath);}},{key:"loadPage",value:function loadPage(rawPath){var _this4=this;var pagePath=Object(find_path["b" /* findPath */])(rawPath);if(this.pageDb.has(pagePath)){var page=this.pageDb.get(pagePath);if(true){return Promise.resolve(page.payload);}}if(this.inFlightDb.has(pagePath)){return this.inFlightDb.get(pagePath);}var inFlightPromise=Promise.all([this.loadAppData(),this.loadPageDataJson(pagePath)]).then(function(allData){var result=allData[1];if(result.status===PageResourceStatus.Error){return{status:PageResourceStatus.Error};}var pageData=result.payload;var _pageData=pageData,componentChunkName=_pageData.componentChunkName,_pageData$staticQuery=_pageData.staticQueryHashes,staticQueryHashes=_pageData$staticQuery===void 0?[]:_pageData$staticQuery;var finalResult={};var componentChunkPromise=_this4.loadComponent(componentChunkName).then(function(component){finalResult.createdAt=new Date();var pageResources;if(!component){finalResult.status=PageResourceStatus.Error;}else{finalResult.status=PageResourceStatus.Success;if(result.notFound===true){finalResult.notFound=true;}pageData=extends_default()(pageData,{webpackCompilationHash:allData[0]?allData[0].webpackCompilationHash:""});pageResources=toPageResources(pageData,component);}return pageResources;});var staticQueryBatchPromise=Promise.all(staticQueryHashes.map(function(staticQueryHash){if(_this4.staticQueryDb[staticQueryHash]){var jsonPayload=_this4.staticQueryDb[staticQueryHash];return{staticQueryHash:staticQueryHash,jsonPayload:jsonPayload};}return _this4.memoizedGet(""+"/page-data/sq/d/"+staticQueryHash+".json").then(function(req){var jsonPayload=JSON.parse(req.responseText);return{staticQueryHash:staticQueryHash,jsonPayload:jsonPayload};});})).then(function(staticQueryResults){var staticQueryResultsMap={};staticQueryResults.forEach(function(_ref){var staticQueryHash=_ref.staticQueryHash,jsonPayload=_ref.jsonPayload;staticQueryResultsMap[staticQueryHash]=jsonPayload;_this4.staticQueryDb[staticQueryHash]=jsonPayload;});return staticQueryResultsMap;});return Promise.all([componentChunkPromise,staticQueryBatchPromise]).then(function(_ref2){var _ref3=slicedToArray_default()(_ref2,2),pageResources=_ref3[0],staticQueryResults=_ref3[1];var payload;if(pageResources){payload=_objectSpread(_objectSpread({},pageResources),{},{staticQueryResults:staticQueryResults});finalResult.payload=payload;emitter["a" /* default */].emit("onPostLoadPageResources",{page:payload,pageResources:payload});}_this4.pageDb.set(pagePath,finalResult);return payload;});});inFlightPromise.then(function(response){_this4.inFlightDb.delete(pagePath);}).catch(function(error){_this4.inFlightDb.delete(pagePath);throw error;});this.inFlightDb.set(pagePath,inFlightPromise);return inFlightPromise;}},{key:"loadPageSync",value:function loadPageSync(rawPath){var pagePath=Object(find_path["b" /* findPath */])(rawPath);if(this.pageDb.has(pagePath)){var pageData=this.pageDb.get(pagePath).payload;return pageData;}return undefined;}},{key:"shouldPrefetch",value:function shouldPrefetch(pagePath){if(!doesConnectionSupportPrefetch()){return false;}if(this.pageDb.has(pagePath)){return false;}return true;}},{key:"prefetch",value:function prefetch(pagePath){var _this5=this;if(!this.shouldPrefetch(pagePath)){return false;}if(!this.prefetchTriggered.has(pagePath)){this.apiRunner("onPrefetchPathname",{pathname:pagePath});this.prefetchTriggered.add(pagePath);}if(this.prefetchDisabled){return false;}var realPath=Object(find_path["b" /* findPath */])(pagePath);this.doPrefetch(realPath).then(function(){if(!_this5.prefetchCompleted.has(pagePath)){_this5.apiRunner("onPostPrefetchPathname",{pathname:pagePath});_this5.prefetchCompleted.add(pagePath);}});return true;}},{key:"doPrefetch",value:function doPrefetch(pagePath){var _this6=this;var pageDataUrl=createPageDataUrl(pagePath);return _cache_prefetch(pageDataUrl,{crossOrigin:"anonymous",as:"fetch"}).then(function(){return _this6.loadPageDataJson(pagePath);});}},{key:"hovering",value:function hovering(rawPath){this.loadPage(rawPath);}},{key:"getResourceURLsForPathname",value:function getResourceURLsForPathname(rawPath){var pagePath=Object(find_path["b" /* findPath */])(rawPath);var page=this.pageDataDb.get(pagePath);if(page){var pageResources=toPageResources(page.payload);return[].concat(toConsumableArray_default()(createComponentUrls(pageResources.page.componentChunkName)),[createPageDataUrl(pagePath)]);}else{return null;}}},{key:"isPageNotFound",value:function isPageNotFound(rawPath){var pagePath=Object(find_path["b" /* findPath */])(rawPath);var page=this.pageDb.get(pagePath);return!page||page.notFound;}},{key:"loadAppData",value:function loadAppData(){var _this7=this;var retries=arguments.length>0&&arguments[0]!==undefined?arguments[0]:0;return this.memoizedGet(""+"/page-data/app-data.json").then(function(req){var status=req.status,responseText=req.responseText;var appData;if(status!==200&&retries<3){return _this7.loadAppData(retries+1);}if(status===200){try{var jsonPayload=JSON.parse(responseText);if(jsonPayload.webpackCompilationHash===undefined){throw new Error("not a valid app-data response");}appData=jsonPayload;}catch(err){}}return appData;});}}]);return BaseLoader;}();var createComponentUrls=function createComponentUrls(componentChunkName){return(window.___chunkMapping[componentChunkName]||[]).map(function(chunk){return ""+chunk;});};var loader_ProdLoader=function(_BaseLoader){inherits_default()(ProdLoader,_BaseLoader);var _super=_createSuper(ProdLoader);function ProdLoader(asyncRequires,matchPaths){classCallCheck_default()(this,ProdLoader);var loadComponent=function loadComponent(chunkName){return asyncRequires.components[chunkName]?asyncRequires.components[chunkName]().then(preferDefault).catch(function(){return null;}):Promise.resolve();};return _super.call(this,loadComponent,matchPaths);}createClass_default()(ProdLoader,[{key:"doPrefetch",value:function doPrefetch(pagePath){return get_default()(getPrototypeOf_default()(ProdLoader.prototype),"doPrefetch",this).call(this,pagePath).then(function(result){if(result.status!==PageResourceStatus.Success){return Promise.resolve();}var pageData=result.payload;var chunkName=pageData.componentChunkName;var componentUrls=createComponentUrls(chunkName);return Promise.all(componentUrls.map(_cache_prefetch)).then(function(){return pageData;});});}},{key:"loadPageDataJson",value:function loadPageDataJson(rawPath){return get_default()(getPrototypeOf_default()(ProdLoader.prototype),"loadPageDataJson",this).call(this,rawPath).then(function(data){if(data.notFound){return doFetch(rawPath,"HEAD").then(function(req){if(req.status===200){return{status:PageResourceStatus.Error};}return data;});}return data;});}}]);return ProdLoader;}(loader_BaseLoader);var instance;var setLoader=function setLoader(_loader){instance=_loader;};var publicLoader={getResourcesForPathname:function getResourcesForPathname(rawPath){console.warn("Warning: getResourcesForPathname is deprecated. Use loadPage instead");return instance.i.loadPage(rawPath);},getResourcesForPathnameSync:function getResourcesForPathnameSync(rawPath){console.warn("Warning: getResourcesForPathnameSync is deprecated. Use loadPageSync instead");return instance.i.loadPageSync(rawPath);},enqueue:function enqueue(rawPath){return instance.prefetch(rawPath);},getResourceURLsForPathname:function getResourceURLsForPathname(rawPath){return instance.getResourceURLsForPathname(rawPath);},loadPage:function loadPage(rawPath){return instance.loadPage(rawPath);},loadPageSync:function loadPageSync(rawPath){return instance.loadPageSync(rawPath);},prefetch:function prefetch(rawPath){return instance.prefetch(rawPath);},isPageNotFound:function isPageNotFound(rawPath){return instance.isPageNotFound(rawPath);},hovering:function hovering(rawPath){return instance.hovering(rawPath);},loadAppData:function loadAppData(){return instance.loadAppData();}};/* harmony default export */ var loader = __webpack_exports__["default"] = (publicLoader);function getStaticQueryResults(){if(instance){return instance.staticQueryDb;}else{return{};}}

/***/ }),

/***/ "ewvW":
/***/ (function(module, exports, __webpack_require__) {

var requireObjectCoercible = __webpack_require__("HYAF");

// `ToObject` abstract operation
// https://tc39.es/ecma262/#sec-toobject
module.exports = function (argument) {
  return Object(requireObjectCoercible(argument));
};


/***/ }),

/***/ "f5p1":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("2oRo");
var inspectSource = __webpack_require__("iSVu");

var WeakMap = global.WeakMap;

module.exports = typeof WeakMap === 'function' && /native code/.test(inspectSource(WeakMap));


/***/ }),

/***/ "flL/":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "wrapRootElement", function() { return /* binding */ wrapRootElement; });

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.reduce.js
var es_array_reduce = __webpack_require__("E9XD");

// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/defineProperty.js
function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}
// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/arrayWithHoles.js
function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}
// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/iterableToArrayLimit.js
function _iterableToArrayLimit(arr, i) {
  if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}
// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}
// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/nonIterableRest.js
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/slicedToArray.js




function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__("q1tI");
var react_default = /*#__PURE__*/__webpack_require__.n(react);

// EXTERNAL MODULE: ./node_modules/@mdx-js/react/dist/esm.js
var esm = __webpack_require__("7ljp");

// EXTERNAL MODULE: ./node_modules/gatsby-plugin-mdx/context.js
var context = __webpack_require__("BfwJ");

// EXTERNAL MODULE: ./node_modules/gatsby-plugin-mdx/loaders/mdx-components.js
var mdx_components = __webpack_require__("gXpC");

// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/extends.js
function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}
// CONCATENATED MODULE: ./node_modules/gatsby-plugin-mdx/loaders/mdx-scopes.js
var scope_0=__webpack_require__("JTKy").default;/* harmony default export */ var mdx_scopes = (_extends({},scope_0));
// CONCATENATED MODULE: ./node_modules/gatsby-plugin-mdx/wrap-root-element.js
function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);if(enumerableOnly)symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable;});keys.push.apply(keys,symbols);}return keys;}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=arguments[i]!=null?arguments[i]:{};if(i%2){ownKeys(Object(source),true).forEach(function(key){_defineProperty(target,key,source[key]);});}else if(Object.getOwnPropertyDescriptors){Object.defineProperties(target,Object.getOwnPropertyDescriptors(source));}else{ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key));});}}return target;}var componentsAndGuards={};var wrap_root_element_componentFromGuards=function componentFromGuards(arr){return function GatsbyMDXComponentFinder(props){var _arr$find=arr.find(function(_ref){var guard=_ref.guard;return guard?guard(props):true;}),Component=_arr$find.Component;return react_default.a.createElement(Component,props);};};mdx_components["plugins"].forEach(function(_ref2){var _ref2$guards=_ref2.guards,guards=_ref2$guards===void 0?{}:_ref2$guards,components=_ref2.components;Object.entries(components).forEach(function(_ref3){var _ref4=_slicedToArray(_ref3,2),componentName=_ref4[0],Component=_ref4[1];if(componentsAndGuards[componentName]){componentsAndGuards.push({guard:guards[componentName],Component:Component});}else{componentsAndGuards[componentName]=[{guard:guards[componentName],Component:Component}];}});});var wrap_root_element_components=Object.entries(componentsAndGuards).map(function(_ref5){var _ref6=_slicedToArray(_ref5,2),name=_ref6[0],arr=_ref6[1];return _defineProperty({},name,wrap_root_element_componentFromGuards(arr.concat({guard:undefined,Component:name})));}).reduce(function(acc,obj){return _objectSpread(_objectSpread({},acc),obj);},{});var MDXConsumer=Object(esm["withMDXComponents"])(function(_ref8){var componentsFromContext=_ref8.components,children=_ref8.children;return react_default.a.createElement(context["MDXScopeProvider"],{__mdxScope:mdx_scopes},react_default.a.createElement(esm["MDXProvider"],{components:_objectSpread(_objectSpread({},componentsFromContext),wrap_root_element_components)},children));});var wrap_root_element_WrapRootElement=function WrapRootElement(_ref9){var element=_ref9.element;return react_default.a.createElement(MDXConsumer,null,element);};/* harmony default export */ var wrap_root_element = (wrap_root_element_WrapRootElement);
// CONCATENATED MODULE: ./node_modules/gatsby-plugin-mdx/gatsby-browser.js
var wrapRootElement=wrap_root_element;

/***/ }),

/***/ "fzq8":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var _interopRequireDefault=__webpack_require__("TqRt");var _AppRegistry=_interopRequireDefault(__webpack_require__("yKOc"));function replaceHydrateFunction(){return function(element,rootTag,callback){var RootComponent=function RootComponent(){return element;};_AppRegistry.default.registerComponent('main',function(){return RootComponent;});_AppRegistry.default.runApplication('main',{initialProps:{},rootTag:rootTag,callback:callback});};}exports.replaceHydrateFunction=replaceHydrateFunction;

/***/ }),

/***/ "g6v/":
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__("0Dky");

// Detect IE8's incomplete defineProperty implementation
module.exports = !fails(function () {
  return Object.defineProperty({}, 1, { get: function () { return 7; } })[1] != 7;
});


/***/ }),

/***/ "gR6W":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return useElementLayout; });
/* harmony import */ var fbjs_lib_ExecutionEnvironment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("xLLm");
/* harmony import */ var fbjs_lib_ExecutionEnvironment__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(fbjs_lib_ExecutionEnvironment__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _useLayoutEffect__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("Yl5I");
/* harmony import */ var _exports_UIManager__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("56YO");



var DOM_LAYOUT_HANDLER_NAME = '__reactLayoutHandler';
var didWarn = !fbjs_lib_ExecutionEnvironment__WEBPACK_IMPORTED_MODULE_0__["canUseDOM"];
var resizeObserver = null;

function getResizeObserver() {
  if (fbjs_lib_ExecutionEnvironment__WEBPACK_IMPORTED_MODULE_0__["canUseDOM"] && typeof window.ResizeObserver !== 'undefined') {
    if (resizeObserver == null) {
      resizeObserver = new window.ResizeObserver(function (entries) {
        entries.forEach(function (entry) {
          var node = entry.target;
          var onLayout = node[DOM_LAYOUT_HANDLER_NAME];

          if (typeof onLayout === 'function') {
            _exports_UIManager__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"].measure(node, function (x, y, width, height, left, top) {
              var event = {
                nativeEvent: {
                  layout: {
                    x: x,
                    y: y,
                    width: width,
                    height: height,
                    left: left,
                    top: top
                  }
                },
                timeStamp: Date.now()
              };
              Object.defineProperty(event.nativeEvent, 'target', {
                enumerable: true,
                get: function get() {
                  return entry.target;
                }
              });
              onLayout(event);
            });
          }
        });
      });
    }
  } else if (!didWarn) {
    if (false) {}
  }

  return resizeObserver;
}

function useElementLayout(ref, onLayout) {
  var observer = getResizeObserver();
  Object(_useLayoutEffect__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(function () {
    var node = ref.current;

    if (node != null) {
      node[DOM_LAYOUT_HANDLER_NAME] = onLayout;
    }
  }, [ref, onLayout]);
  Object(_useLayoutEffect__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(function () {
    var node = ref.current;

    if (node != null && observer != null) {
      if (typeof node[DOM_LAYOUT_HANDLER_NAME] === 'function') {
        observer.observe(node);
      } else {
        observer.unobserve(node);
      }
    }

    return function () {
      if (node != null && observer != null) {
        observer.unobserve(node);
      }
    };
  }, [ref, observer]);
}

/***/ }),

/***/ "gWRB":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return useStable; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("q1tI");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

var UNINITIALIZED = typeof Symbol === 'function' && typeof Symbol() === 'symbol' ? Symbol() : Object.freeze({});
function useStable(getInitialValue) {
  var ref = react__WEBPACK_IMPORTED_MODULE_0__["useRef"](UNINITIALIZED);

  if (ref.current === UNINITIALIZED) {
    ref.current = getInitialValue();
  }

  return ref.current;
}

/***/ }),

/***/ "gXpC":
/***/ (function(module, exports) {

module.exports={plugins:[]};

/***/ }),

/***/ "glrk":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("hh1v");

module.exports = function (it) {
  if (!isObject(it)) {
    throw TypeError(String(it) + ' is not an object');
  } return it;
};


/***/ }),

/***/ "hFhQ":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "b", function() { return /* binding */ prefixInlineStyles; });

// EXTERNAL MODULE: ./node_modules/inline-style-prefixer/lib/createPrefixer.js
var createPrefixer = __webpack_require__("/CgH");
var createPrefixer_default = /*#__PURE__*/__webpack_require__.n(createPrefixer);

// EXTERNAL MODULE: ./node_modules/inline-style-prefixer/lib/plugins/backgroundClip.js
var backgroundClip = __webpack_require__("wEkZ");
var backgroundClip_default = /*#__PURE__*/__webpack_require__.n(backgroundClip);

// EXTERNAL MODULE: ./node_modules/inline-style-prefixer/lib/plugins/crossFade.js
var crossFade = __webpack_require__("VcUl");
var crossFade_default = /*#__PURE__*/__webpack_require__.n(crossFade);

// EXTERNAL MODULE: ./node_modules/inline-style-prefixer/lib/plugins/cursor.js
var cursor = __webpack_require__("k8dj");
var cursor_default = /*#__PURE__*/__webpack_require__.n(cursor);

// EXTERNAL MODULE: ./node_modules/inline-style-prefixer/lib/plugins/filter.js
var filter = __webpack_require__("aS6o");
var filter_default = /*#__PURE__*/__webpack_require__.n(filter);

// EXTERNAL MODULE: ./node_modules/inline-style-prefixer/lib/plugins/flex.js
var flex = __webpack_require__("3vXJ");
var flex_default = /*#__PURE__*/__webpack_require__.n(flex);

// EXTERNAL MODULE: ./node_modules/inline-style-prefixer/lib/plugins/flexboxIE.js
var flexboxIE = __webpack_require__("ycuu");
var flexboxIE_default = /*#__PURE__*/__webpack_require__.n(flexboxIE);

// EXTERNAL MODULE: ./node_modules/inline-style-prefixer/lib/plugins/flexboxOld.js
var flexboxOld = __webpack_require__("qhOH");
var flexboxOld_default = /*#__PURE__*/__webpack_require__.n(flexboxOld);

// EXTERNAL MODULE: ./node_modules/inline-style-prefixer/lib/plugins/gradient.js
var gradient = __webpack_require__("Sc0N");
var gradient_default = /*#__PURE__*/__webpack_require__.n(gradient);

// EXTERNAL MODULE: ./node_modules/inline-style-prefixer/lib/plugins/grid.js
var grid = __webpack_require__("2Tnd");
var grid_default = /*#__PURE__*/__webpack_require__.n(grid);

// EXTERNAL MODULE: ./node_modules/inline-style-prefixer/lib/plugins/imageSet.js
var imageSet = __webpack_require__("siI/");
var imageSet_default = /*#__PURE__*/__webpack_require__.n(imageSet);

// EXTERNAL MODULE: ./node_modules/inline-style-prefixer/lib/plugins/logical.js
var logical = __webpack_require__("xUnz");
var logical_default = /*#__PURE__*/__webpack_require__.n(logical);

// EXTERNAL MODULE: ./node_modules/inline-style-prefixer/lib/plugins/position.js
var position = __webpack_require__("7oM+");
var position_default = /*#__PURE__*/__webpack_require__.n(position);

// EXTERNAL MODULE: ./node_modules/inline-style-prefixer/lib/plugins/sizing.js
var sizing = __webpack_require__("ZiLf");
var sizing_default = /*#__PURE__*/__webpack_require__.n(sizing);

// EXTERNAL MODULE: ./node_modules/inline-style-prefixer/lib/plugins/transition.js
var transition = __webpack_require__("MX5s");
var transition_default = /*#__PURE__*/__webpack_require__.n(transition);

// CONCATENATED MODULE: ./node_modules/react-native-web/dist/modules/prefixStyles/static.js














var w = ['Webkit'];
var m = ['Moz'];
var ms = ['ms'];
var wm = ['Webkit', 'Moz'];
var wms = ['Webkit', 'ms'];
var wmms = ['Webkit', 'Moz', 'ms'];
/* harmony default export */ var prefixStyles_static = ({
  plugins: [backgroundClip_default.a, crossFade_default.a, cursor_default.a, filter_default.a, flex_default.a, flexboxIE_default.a, flexboxOld_default.a, gradient_default.a, grid_default.a, imageSet_default.a, logical_default.a, position_default.a, sizing_default.a, transition_default.a],
  prefixMap: {
    animation: w,
    animationDelay: w,
    animationDirection: w,
    animationFillMode: w,
    animationDuration: w,
    animationIterationCount: w,
    animationName: w,
    animationPlayState: w,
    animationTimingFunction: w,
    appearance: wm,
    userSelect: wmms,
    textEmphasisPosition: w,
    textEmphasis: w,
    textEmphasisStyle: w,
    textEmphasisColor: w,
    boxDecorationBreak: w,
    clipPath: w,
    maskImage: w,
    maskMode: w,
    maskRepeat: w,
    maskPosition: w,
    maskClip: w,
    maskOrigin: w,
    maskSize: w,
    maskComposite: w,
    mask: w,
    maskBorderSource: w,
    maskBorderMode: w,
    maskBorderSlice: w,
    maskBorderWidth: w,
    maskBorderOutset: w,
    maskBorderRepeat: w,
    maskBorder: w,
    maskType: w,
    textDecorationStyle: w,
    textDecorationSkip: w,
    textDecorationLine: w,
    textDecorationColor: w,
    filter: w,
    fontFeatureSettings: w,
    breakAfter: wmms,
    breakBefore: wmms,
    breakInside: wmms,
    columnCount: wm,
    columnFill: wm,
    columnGap: wm,
    columnRule: wm,
    columnRuleColor: wm,
    columnRuleStyle: wm,
    columnRuleWidth: wm,
    columns: wm,
    columnSpan: wm,
    columnWidth: wm,
    writingMode: wms,
    flex: wms,
    flexBasis: w,
    flexDirection: wms,
    flexGrow: w,
    flexFlow: wms,
    flexShrink: w,
    flexWrap: wms,
    alignContent: w,
    alignItems: w,
    alignSelf: w,
    justifyContent: w,
    order: w,
    transform: w,
    transformOrigin: w,
    transformOriginX: w,
    transformOriginY: w,
    backfaceVisibility: w,
    perspective: w,
    perspectiveOrigin: w,
    transformStyle: w,
    transformOriginZ: w,
    backdropFilter: w,
    fontKerning: w,
    scrollSnapType: wms,
    scrollSnapPointsX: wms,
    scrollSnapPointsY: wms,
    scrollSnapDestination: wms,
    scrollSnapCoordinate: wms,
    shapeImageThreshold: w,
    shapeImageMargin: w,
    shapeImageOutside: w,
    hyphens: wmms,
    flowInto: wms,
    flowFrom: wms,
    regionFragment: wms,
    textOrientation: w,
    textAlignLast: m,
    tabSize: m,
    wrapFlow: ms,
    wrapThrough: ms,
    wrapMargin: ms,
    touchAction: ms,
    textSizeAdjust: ['ms', 'Webkit'],
    borderImage: w,
    borderImageOutset: w,
    borderImageRepeat: w,
    borderImageSlice: w,
    borderImageSource: w,
    borderImageWidth: w,
    transitionDelay: w,
    transitionDuration: w,
    transitionProperty: w,
    transitionTimingFunction: w
  }
});
// CONCATENATED MODULE: ./node_modules/react-native-web/dist/modules/prefixStyles/index.js


var prefixAll = createPrefixer_default()(prefixStyles_static);
/* harmony default export */ var prefixStyles = __webpack_exports__["a"] = (prefixAll);
var prefixInlineStyles = function prefixInlineStyles(style) {
  var prefixedStyles = prefixAll(style);
  Object.keys(prefixedStyles).forEach(function (prop) {
    var value = prefixedStyles[prop];

    if (Array.isArray(value)) {
      prefixedStyles[prop] = value[value.length - 1];
    }
  });
  return prefixedStyles;
};

/***/ }),

/***/ "hd9s":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__("284h");

var _interopRequireDefault = __webpack_require__("TqRt");

exports.__esModule = true;
exports.ScrollContainer = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__("pVnL"));

var _inheritsLoose2 = _interopRequireDefault(__webpack_require__("VbXa"));

var React = _interopRequireWildcard(__webpack_require__("q1tI"));

var _reactDom = _interopRequireDefault(__webpack_require__("i8i4"));

var _propTypes = _interopRequireDefault(__webpack_require__("17x9"));

var _scrollHandler = __webpack_require__("Enzk");

var _router = __webpack_require__("YwZP");

// TODO: In Gatsby v3, this file should be removed.
// We are deprecating this in V2 in favor of useScrollRestoration
var propTypes = {
  scrollKey: _propTypes.default.string.isRequired,
  shouldUpdateScroll: _propTypes.default.func,
  children: _propTypes.default.element.isRequired
};
var hasNotWarnedDeprecation = true;

var ScrollContainerImplementation = /*#__PURE__*/function (_React$Component) {
  (0, _inheritsLoose2.default)(ScrollContainerImplementation, _React$Component);

  function ScrollContainerImplementation(props) {
    var _this;

    _this = _React$Component.call(this, props) || this;

    if (false) {}

    return _this;
  }

  var _proto = ScrollContainerImplementation.prototype;

  _proto.componentDidMount = function componentDidMount() {
    var _this2 = this;

    // eslint-disable-next-line react/no-find-dom-node
    var node = _reactDom.default.findDOMNode(this);

    var _this$props = this.props,
        location = _this$props.location,
        scrollKey = _this$props.scrollKey;
    if (!node) return;
    node.addEventListener("scroll", function () {
      _this2.props.context.save(location, scrollKey, node.scrollTop);
    });
    var position = this.props.context.read(location, scrollKey);
    node.scrollTo(0, position || 0);
  };

  _proto.render = function render() {
    return this.props.children;
  };

  return ScrollContainerImplementation;
}(React.Component);

var ScrollContainer = function ScrollContainer(props) {
  return /*#__PURE__*/React.createElement(_router.Location, null, function (_ref) {
    var location = _ref.location;
    return /*#__PURE__*/React.createElement(_scrollHandler.ScrollContext.Consumer, null, function (context) {
      return /*#__PURE__*/React.createElement(ScrollContainerImplementation, (0, _extends2.default)({}, props, {
        context: context,
        location: location
      }));
    });
  });
};

exports.ScrollContainer = ScrollContainer;
ScrollContainer.propTypes = propTypes;

/***/ }),

/***/ "hh1v":
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),

/***/ "iSVu":
/***/ (function(module, exports, __webpack_require__) {

var store = __webpack_require__("xs3f");

var functionToString = Function.toString;

// this helper broken in `3.4.1-3.4.4`, so we can't use `shared` helper
if (typeof store.inspectSource != 'function') {
  store.inspectSource = function (it) {
    return functionToString.call(it);
  };
}

module.exports = store.inspectSource;


/***/ }),

/***/ "iWIM":
/***/ (function(module, exports, __webpack_require__) {

var superPropBase = __webpack_require__("n3AX");

function _get(target, property, receiver) {
  if (typeof Reflect !== "undefined" && Reflect.get) {
    module.exports = _get = Reflect.get;
  } else {
    module.exports = _get = function _get(target, property, receiver) {
      var base = superPropBase(target, property);
      if (!base) return;
      var desc = Object.getOwnPropertyDescriptor(base, property);

      if (desc.get) {
        return desc.get.call(receiver);
      }

      return desc.value;
    };
  }

  return _get(target, property, receiver || target);
}

module.exports = _get;

/***/ }),

/***/ "jzUF":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("q1tI");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _createElement__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("osi3");
/* harmony import */ var _StyleSheet_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("lxpi");
/* harmony import */ var _modules_pick__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("5Bvt");
/* harmony import */ var _modules_useElementLayout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("gR6W");
/* harmony import */ var _modules_useMergeRefs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("CSmu");
/* harmony import */ var _modules_usePlatformMethods__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("tkvJ");
/* harmony import */ var _modules_useResponderEvents__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("HSq1");
/* harmony import */ var _StyleSheet__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("ckSu");
/* harmony import */ var _Text_TextAncestorContext__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("Q3tu");











var forwardPropsList = {
  accessibilityLabel: true,
  accessibilityLiveRegion: true,
  accessibilityRole: true,
  accessibilityState: true,
  accessibilityValue: true,
  accessible: true,
  children: true,
  classList: true,
  disabled: true,
  importantForAccessibility: true,
  nativeID: true,
  onBlur: true,
  onClick: true,
  onClickCapture: true,
  onContextMenu: true,
  onFocus: true,
  onKeyDown: true,
  onKeyUp: true,
  onTouchCancel: true,
  onTouchCancelCapture: true,
  onTouchEnd: true,
  onTouchEndCapture: true,
  onTouchMove: true,
  onTouchMoveCapture: true,
  onTouchStart: true,
  onTouchStartCapture: true,
  pointerEvents: true,
  ref: true,
  style: true,
  testID: true,
  dataSet: true,
  onMouseDown: true,
  onMouseEnter: true,
  onMouseLeave: true,
  onMouseMove: true,
  onMouseOver: true,
  onMouseOut: true,
  onMouseUp: true,
  onScroll: true,
  onWheel: true,
  href: true,
  rel: true,
  target: true
};

var pickProps = function pickProps(props) {
  return Object(_modules_pick__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(props, forwardPropsList);
};

var View = Object(react__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(function (props, forwardedRef) {
  var onLayout = props.onLayout,
      onMoveShouldSetResponder = props.onMoveShouldSetResponder,
      onMoveShouldSetResponderCapture = props.onMoveShouldSetResponderCapture,
      onResponderEnd = props.onResponderEnd,
      onResponderGrant = props.onResponderGrant,
      onResponderMove = props.onResponderMove,
      onResponderReject = props.onResponderReject,
      onResponderRelease = props.onResponderRelease,
      onResponderStart = props.onResponderStart,
      onResponderTerminate = props.onResponderTerminate,
      onResponderTerminationRequest = props.onResponderTerminationRequest,
      onScrollShouldSetResponder = props.onScrollShouldSetResponder,
      onScrollShouldSetResponderCapture = props.onScrollShouldSetResponderCapture,
      onSelectionChangeShouldSetResponder = props.onSelectionChangeShouldSetResponder,
      onSelectionChangeShouldSetResponderCapture = props.onSelectionChangeShouldSetResponderCapture,
      onStartShouldSetResponder = props.onStartShouldSetResponder,
      onStartShouldSetResponderCapture = props.onStartShouldSetResponderCapture;

  if (false) {}

  var hasTextAncestor = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_Text_TextAncestorContext__WEBPACK_IMPORTED_MODULE_9__[/* default */ "a"]);
  var hostRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);
  Object(_modules_useElementLayout__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(hostRef, onLayout);
  Object(_modules_useResponderEvents__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"])(hostRef, {
    onMoveShouldSetResponder: onMoveShouldSetResponder,
    onMoveShouldSetResponderCapture: onMoveShouldSetResponderCapture,
    onResponderEnd: onResponderEnd,
    onResponderGrant: onResponderGrant,
    onResponderMove: onResponderMove,
    onResponderReject: onResponderReject,
    onResponderRelease: onResponderRelease,
    onResponderStart: onResponderStart,
    onResponderTerminate: onResponderTerminate,
    onResponderTerminationRequest: onResponderTerminationRequest,
    onScrollShouldSetResponder: onScrollShouldSetResponder,
    onScrollShouldSetResponderCapture: onScrollShouldSetResponderCapture,
    onSelectionChangeShouldSetResponder: onSelectionChangeShouldSetResponder,
    onSelectionChangeShouldSetResponderCapture: onSelectionChangeShouldSetResponderCapture,
    onStartShouldSetResponder: onStartShouldSetResponder,
    onStartShouldSetResponderCapture: onStartShouldSetResponderCapture
  });
  var style = _StyleSheet__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"].compose(hasTextAncestor && styles.inline, props.style);
  var supportedProps = pickProps(props);
  supportedProps.classList = classList;
  supportedProps.style = style;
  var platformMethodsRef = Object(_modules_usePlatformMethods__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])(supportedProps);
  var setRef = Object(_modules_useMergeRefs__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(hostRef, platformMethodsRef, forwardedRef);
  supportedProps.ref = setRef;
  return Object(_createElement__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])('div', supportedProps);
});
View.displayName = 'View';
var classes = _StyleSheet_css__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"].create({
  view: {
    alignItems: 'stretch',
    border: '0 solid black',
    boxSizing: 'border-box',
    display: 'flex',
    flexBasis: 'auto',
    flexDirection: 'column',
    flexShrink: 0,
    margin: 0,
    minHeight: 0,
    minWidth: 0,
    padding: 0,
    position: 'relative',
    zIndex: 0
  }
});
var classList = [classes.view];
var styles = _StyleSheet__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"].create({
  inline: {
    display: 'inline-flex'
  }
});
/* harmony default export */ __webpack_exports__["a"] = (View);

/***/ }),

/***/ "k8dj":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = cursor;
var prefixes = ['-webkit-', '-moz-', ''];
var values = {
  'zoom-in': true,
  'zoom-out': true,
  grab: true,
  grabbing: true
};

function cursor(property, value) {
  if (property === 'cursor' && values.hasOwnProperty(value)) {
    return prefixes.map(function (prefix) {
      return prefix + value;
    });
  }
}

/***/ }),

/***/ "kNQG":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var fbjs_lib_ExecutionEnvironment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("xLLm");
/* harmony import */ var fbjs_lib_ExecutionEnvironment__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(fbjs_lib_ExecutionEnvironment__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("yBWl");
/* harmony import */ var _normalizeValueWithProperty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("A6cL");



var emptyObject = {};
var supportsCSS3TextDecoration = !fbjs_lib_ExecutionEnvironment__WEBPACK_IMPORTED_MODULE_0__["canUseDOM"] || window.CSS != null && window.CSS.supports != null && (window.CSS.supports('text-decoration-line', 'none') || window.CSS.supports('-webkit-text-decoration-line', 'none'));

var mapTransform = function mapTransform(transform) {
  var type = Object.keys(transform)[0];
  var value = transform[type];

  if (type === 'matrix' || type === 'matrix3d') {
    return type + "(" + value.join(',') + ")";
  } else {
    var normalizedValue = Object(_normalizeValueWithProperty__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(value, type);
    return type + "(" + normalizedValue + ")";
  }
};

var resolveTransform = function resolveTransform(resolvedStyle, style) {
  var transform = style.transform;

  if (Array.isArray(style.transform)) {
    transform = style.transform.map(mapTransform).join(' ');
  }

  resolvedStyle.transform = transform;
};

var createReactDOMStyle = function createReactDOMStyle(style) {
  if (!style) {
    return emptyObject;
  }

  var resolvedStyle = {};
  Object.keys(style).sort().forEach(function (prop) {
    var value = Object(_normalizeValueWithProperty__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(style[prop], prop);

    if (value == null) {
      return;
    }

    switch (prop) {
      case 'aspectRatio':
      case 'elevation':
      case 'overlayColor':
      case 'resizeMode':
      case 'tintColor':
        {
          break;
        }

      case 'backgroundClip':
        {
          if (value === 'text') {
            resolvedStyle.backgroundClip = value;
            resolvedStyle.WebkitBackgroundClip = value;
          }

          break;
        }

      case 'flex':
        {
          if (value === -1) {
            resolvedStyle.flexGrow = 0;
            resolvedStyle.flexShrink = 1;
            resolvedStyle.flexBasis = 'auto';
          } else {
            resolvedStyle.flex = value;
          }

          break;
        }

      case 'font':
        {
          resolvedStyle[prop] = value.replace('System', _constants__WEBPACK_IMPORTED_MODULE_1__[/* SYSTEM_FONT_STACK */ "e"]);
          break;
        }

      case 'fontFamily':
        {
          if (value.indexOf('System') > -1) {
            var stack = value.split(/,\s*/);
            stack[stack.indexOf('System')] = _constants__WEBPACK_IMPORTED_MODULE_1__[/* SYSTEM_FONT_STACK */ "e"];
            resolvedStyle[prop] = stack.join(',');
          } else if (value === 'monospace') {
            resolvedStyle[prop] = _constants__WEBPACK_IMPORTED_MODULE_1__[/* MONOSPACE_FONT_STACK */ "a"];
          } else {
            resolvedStyle[prop] = value;
          }

          break;
        }

      case 'fontVariant':
        {
          if (Array.isArray(value) && value.length > 0) {
            resolvedStyle.fontVariant = value.join(' ');
          }

          break;
        }

      case 'textAlignVertical':
        {
          resolvedStyle.verticalAlign = value === 'center' ? 'middle' : value;
          break;
        }

      case 'textDecorationLine':
        {
          if (!supportsCSS3TextDecoration) {
            resolvedStyle.textDecoration = value;
          } else {
            resolvedStyle.textDecorationLine = value;
          }

          break;
        }

      case 'transform':
      case 'transformMatrix':
        {
          resolveTransform(resolvedStyle, style);
          break;
        }

      case 'writingDirection':
        {
          resolvedStyle.direction = value;
          break;
        }

      default:
        {
          var longFormProperties = _constants__WEBPACK_IMPORTED_MODULE_1__[/* STYLE_SHORT_FORM_EXPANSIONS */ "d"][prop];

          if (longFormProperties) {
            longFormProperties.forEach(function (longForm, i) {
              if (typeof style[longForm] === 'undefined') {
                resolvedStyle[longForm] = value;
              }
            });
          } else {
            resolvedStyle[prop] = Array.isArray(value) ? value.join(',') : value;
          }
        }
    }
  });
  return resolvedStyle;
};

/* harmony default export */ __webpack_exports__["a"] = (createReactDOMStyle);

/***/ }),

/***/ "kOOl":
/***/ (function(module, exports) {

var id = 0;
var postfix = Math.random();

module.exports = function (key) {
  return 'Symbol(' + String(key === undefined ? '' : key) + ')_' + (++id + postfix).toString(36);
};


/***/ }),

/***/ "kRJp":
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__("g6v/");
var definePropertyModule = __webpack_require__("m/L8");
var createPropertyDescriptor = __webpack_require__("XGwC");

module.exports = DESCRIPTORS ? function (object, key, value) {
  return definePropertyModule.f(object, key, createPropertyDescriptor(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),

/***/ "lMq5":
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__("0Dky");

var replacement = /#|\.prototype\./;

var isForced = function (feature, detection) {
  var value = data[normalize(feature)];
  return value == POLYFILL ? true
    : value == NATIVE ? false
    : typeof detection == 'function' ? fails(detection)
    : !!detection;
};

var normalize = isForced.normalize = function (string) {
  return String(string).replace(replacement, '.').toLowerCase();
};

var data = isForced.data = {};
var NATIVE = isForced.NATIVE = 'N';
var POLYFILL = isForced.POLYFILL = 'P';

module.exports = isForced;


/***/ }),

/***/ "lSNA":
/***/ (function(module, exports) {

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

module.exports = _defineProperty;

/***/ }),

/***/ "lw3w":
/***/ (function(module, exports, __webpack_require__) {

var preferDefault=function preferDefault(m){return m&&m.default||m;};if(false){}else if(true){module.exports=preferDefault(__webpack_require__("rzlk"));}else{}

/***/ }),

/***/ "lwsE":
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

module.exports = _classCallCheck;

/***/ }),

/***/ "lxpi":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _styleResolver__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("TgPG");

var css = {
  create: function create(rules, group) {
    return _styleResolver__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].createCSS(rules, group);
  }
};
/* harmony default export */ __webpack_exports__["a"] = (css);

/***/ }),

/***/ "m/L8":
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__("g6v/");
var IE8_DOM_DEFINE = __webpack_require__("DPsx");
var anObject = __webpack_require__("glrk");
var toPrimitive = __webpack_require__("wE6v");

var nativeDefineProperty = Object.defineProperty;

// `Object.defineProperty` method
// https://tc39.es/ecma262/#sec-object.defineproperty
exports.f = DESCRIPTORS ? nativeDefineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return nativeDefineProperty(O, P, Attributes);
  } catch (error) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),

/***/ "m0LI":
/***/ (function(module, exports) {

function _iterableToArrayLimit(arr, i) {
  if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

module.exports = _iterableToArrayLimit;

/***/ }),

/***/ "n3AX":
/***/ (function(module, exports, __webpack_require__) {

var getPrototypeOf = __webpack_require__("Nsbk");

function _superPropBase(object, property) {
  while (!Object.prototype.hasOwnProperty.call(object, property)) {
    object = getPrototypeOf(object);
    if (object === null) break;
  }

  return object;
}

module.exports = _superPropBase;

/***/ }),

/***/ "npZl":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var _interopRequireDefault=__webpack_require__("TqRt");var _gatsby=__webpack_require__("Wbzz");var _getManifestPathname=_interopRequireDefault(__webpack_require__("9hXx"));if(undefined){exports.onRouteUpdate=function(_ref,pluginOptions){var location=_ref.location;var localize=pluginOptions.localize;var manifestFilename=(0,_getManifestPathname.default)(location.pathname,localize);var manifestEl=document.head.querySelector("link[rel=\"manifest\"]");if(manifestEl){manifestEl.setAttribute("href",(0,_gatsby.withPrefix)(manifestFilename));}};}

/***/ }),

/***/ "nqlD":
/***/ (function(module, exports, __webpack_require__) {

var _require=__webpack_require__("q1tI"),createContext=_require.createContext;module.exports=createContext;module.exports.default=createContext;

/***/ }),

/***/ "nwwn":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
exports.DEFAULT_OPTIONS={maxWidth:650,wrapperStyle:"",backgroundColor:"white",linkImagesToOriginal:true,showCaptions:false,markdownCaptions:false,withWebp:false,withAvif:false,tracedSVG:false,loading:"lazy",disableBgImageOnAlpha:false,disableBgImage:false};exports.EMPTY_ALT="GATSBY_EMPTY_ALT";exports.imageClass="gatsby-resp-image-image";exports.imageWrapperClass="gatsby-resp-image-wrapper";exports.imageBackgroundClass="gatsby-resp-image-background-image";

/***/ }),

/***/ "osi3":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _modules_AccessibilityUtil__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("IybW");
/* harmony import */ var _modules_createDOMProps__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("ebBd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("q1tI");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);




var createElement = function createElement(component, props) {
  var accessibilityComponent;

  if (component && component.constructor === String) {
    accessibilityComponent = _modules_AccessibilityUtil__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].propsToAccessibilityComponent(props);
  }

  var Component = accessibilityComponent || component;
  var domProps = Object(_modules_createDOMProps__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(Component, props);

  for (var _len = arguments.length, children = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
    children[_key - 2] = arguments[_key];
  }

  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement.apply(react__WEBPACK_IMPORTED_MODULE_2___default.a, [Component, domProps].concat(children));
};

/* harmony default export */ __webpack_exports__["a"] = (createElement);

/***/ }),

/***/ "ou6r":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var unitlessNumbers = {
  animationIterationCount: true,
  borderImageOutset: true,
  borderImageSlice: true,
  borderImageWidth: true,
  boxFlex: true,
  boxFlexGroup: true,
  boxOrdinalGroup: true,
  columnCount: true,
  flex: true,
  flexGrow: true,
  flexOrder: true,
  flexPositive: true,
  flexShrink: true,
  flexNegative: true,
  fontWeight: true,
  gridRow: true,
  gridRowEnd: true,
  gridRowGap: true,
  gridRowStart: true,
  gridColumn: true,
  gridColumnEnd: true,
  gridColumnGap: true,
  gridColumnStart: true,
  lineClamp: true,
  opacity: true,
  order: true,
  orphans: true,
  tabSize: true,
  widows: true,
  zIndex: true,
  zoom: true,
  fillOpacity: true,
  floodOpacity: true,
  stopOpacity: true,
  strokeDasharray: true,
  strokeDashoffset: true,
  strokeMiterlimit: true,
  strokeOpacity: true,
  strokeWidth: true,
  scale: true,
  scaleX: true,
  scaleY: true,
  scaleZ: true,
  shadowOpacity: true
};
var prefixes = ['ms', 'Moz', 'O', 'Webkit'];

var prefixKey = function prefixKey(prefix, key) {
  return prefix + key.charAt(0).toUpperCase() + key.substring(1);
};

Object.keys(unitlessNumbers).forEach(function (prop) {
  prefixes.forEach(function (prefix) {
    unitlessNumbers[prefixKey(prefix, prop)] = unitlessNumbers[prop];
  });
});
/* harmony default export */ __webpack_exports__["a"] = (unitlessNumbers);

/***/ }),

/***/ "pVnL":
/***/ (function(module, exports) {

function _extends() {
  module.exports = _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

module.exports = _extends;

/***/ }),

/***/ "pWkz":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
exports.__esModule=true;exports.onRouteUpdate=void 0;var onRouteUpdate=function onRouteUpdate(_ref,pluginOptions){var location=_ref.location;if(pluginOptions===void 0){pluginOptions={};}if( false||typeof ga!=="function"){return null;}var pathIsExcluded=location&&typeof window.excludeGAPaths!=="undefined"&&window.excludeGAPaths.some(function(rx){return rx.test(location.pathname);});if(pathIsExcluded)return null;var sendPageView=function sendPageView(){var pagePath=location?location.pathname+location.search+location.hash:undefined;window.ga("set","page",pagePath);window.ga("send","pageview");};var delay=Math.max(32,pluginOptions.pageTransitionDelay||0);setTimeout(sendPageView,delay);return null;};exports.onRouteUpdate=onRouteUpdate;

/***/ }),

/***/ "pkCn":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var fails = __webpack_require__("0Dky");

module.exports = function (METHOD_NAME, argument) {
  var method = [][METHOD_NAME];
  return !!method && fails(function () {
    // eslint-disable-next-line no-useless-call,no-throw-literal
    method.call(null, argument || function () { throw 1; }, 1);
  });
};


/***/ }),

/***/ "ppGB":
/***/ (function(module, exports) {

var ceil = Math.ceil;
var floor = Math.floor;

// `ToInteger` abstract operation
// https://tc39.es/ecma262/#sec-tointeger
module.exports = function (argument) {
  return isNaN(argument = +argument) ? 0 : (argument > 0 ? floor : ceil)(argument);
};


/***/ }),

/***/ "q9nr":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var _extends=__webpack_require__("pVnL");var _require=__webpack_require__("nwwn"),DEFAULT_OPTIONS=_require.DEFAULT_OPTIONS,imageClass=_require.imageClass,imageBackgroundClass=_require.imageBackgroundClass,imageWrapperClass=_require.imageWrapperClass;exports.onRouteUpdate=function(apiCallbackContext,pluginOptions){var options=_extends({},DEFAULT_OPTIONS,pluginOptions);var imageWrappers=document.querySelectorAll("."+imageWrapperClass);var _loop=function _loop(i){var imageWrapper=imageWrappers[i];var backgroundElement=imageWrapper.querySelector("."+imageBackgroundClass);var imageElement=imageWrapper.querySelector("."+imageClass);var onImageLoad=function onImageLoad(){backgroundElement.style.transition="opacity 0.5s 0.5s";imageElement.style.transition="opacity 0.5s";onImageComplete();};var onImageComplete=function onImageComplete(){backgroundElement.style.opacity=0;imageElement.style.opacity=1;imageElement.style.color="inherit";imageElement.style.boxShadow="inset 0px 0px 0px 400px "+options.backgroundColor;imageElement.removeEventListener("load",onImageLoad);imageElement.removeEventListener("error",onImageComplete);};imageElement.style.opacity=0;imageElement.addEventListener("load",onImageLoad);imageElement.addEventListener("error",onImageComplete);if(imageElement.complete){onImageComplete();}};for(var i=0;i<imageWrappers.length;i++){_loop(i);}};

/***/ }),

/***/ "qhOH":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = flexboxOld;
var alternativeValues = {
  'space-around': 'justify',
  'space-between': 'justify',
  'flex-start': 'start',
  'flex-end': 'end',
  'wrap-reverse': 'multiple',
  wrap: 'multiple'
};
var alternativeProps = {
  alignItems: 'WebkitBoxAlign',
  justifyContent: 'WebkitBoxPack',
  flexWrap: 'WebkitBoxLines',
  flexGrow: 'WebkitBoxFlex'
};

function flexboxOld(property, value, style) {
  if (property === 'flexDirection' && typeof value === 'string') {
    if (value.indexOf('column') > -1) {
      style.WebkitBoxOrient = 'vertical';
    } else {
      style.WebkitBoxOrient = 'horizontal';
    }

    if (value.indexOf('reverse') > -1) {
      style.WebkitBoxDirection = 'reverse';
    } else {
      style.WebkitBoxDirection = 'normal';
    }
  }

  if (alternativeProps.hasOwnProperty(property)) {
    style[alternativeProps[property]] = alternativeValues[value] || value;
  }
}

/***/ }),

/***/ "rkAj":
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__("g6v/");
var fails = __webpack_require__("0Dky");
var has = __webpack_require__("UTVS");

var defineProperty = Object.defineProperty;
var cache = {};

var thrower = function (it) { throw it; };

module.exports = function (METHOD_NAME, options) {
  if (has(cache, METHOD_NAME)) return cache[METHOD_NAME];
  if (!options) options = {};
  var method = [][METHOD_NAME];
  var ACCESSORS = has(options, 'ACCESSORS') ? options.ACCESSORS : false;
  var argument0 = has(options, 0) ? options[0] : thrower;
  var argument1 = has(options, 1) ? options[1] : undefined;

  return cache[METHOD_NAME] = !!method && !fails(function () {
    if (ACCESSORS && !DESCRIPTORS) return true;
    var O = { length: -1 };

    if (ACCESSORS) defineProperty(O, 1, { enumerable: true, get: thrower });
    else O[1] = 1;

    method.call(O, argument0, argument1);
  });
};


/***/ }),

/***/ "rzlk":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("lSNA");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("q1tI");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _loader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("emEt");
/* harmony import */ var _page_renderer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("IOVJ");
function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);if(enumerableOnly)symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable;});keys.push.apply(keys,symbols);}return keys;}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=arguments[i]!=null?arguments[i]:{};if(i%2){ownKeys(Object(source),true).forEach(function(key){_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(target,key,source[key]);});}else if(Object.getOwnPropertyDescriptors){Object.defineProperties(target,Object.getOwnPropertyDescriptors(source));}else{ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key));});}}return target;}var ProdPageRenderer=function ProdPageRenderer(_ref){var location=_ref.location;var pageResources=_loader__WEBPACK_IMPORTED_MODULE_2__["default"].loadPageSync(location.pathname);if(!pageResources){return null;}return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_page_renderer__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"],_objectSpread({location:location,pageResources:pageResources},pageResources.json));};/* harmony default export */ __webpack_exports__["default"] = (ProdPageRenderer);

/***/ }),

/***/ "sUt/":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isPrefixedValue;
var regex = /-webkit-|-moz-|-ms-/;

function isPrefixedValue(value) {
  return typeof value === 'string' && regex.test(value);
}

module.exports = exports['default'];

/***/ }),

/***/ "siI/":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = imageSet;

var _isPrefixedValue = __webpack_require__("sUt/");

var _isPrefixedValue2 = _interopRequireDefault(_isPrefixedValue);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
} // http://caniuse.com/#feat=css-image-set


var prefixes = ['-webkit-', ''];

function imageSet(property, value) {
  if (typeof value === 'string' && !(0, _isPrefixedValue2.default)(value) && value.indexOf('image-set(') > -1) {
    return prefixes.map(function (prefix) {
      return value.replace(/image-set\(/g, prefix + 'image-set(');
    });
  }
}

/***/ }),

/***/ "tb+u":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "tkvJ":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return usePlatformMethods; });
/* harmony import */ var _exports_UIManager__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("56YO");
/* harmony import */ var _createDOMProps__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("ebBd");
/* harmony import */ var _useStable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("gWRB");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("q1tI");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
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
        _defineProperty(target, key, source[key]);
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

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}





var emptyObject = {};

function setNativeProps(node, nativeProps, classList, pointerEvents, style, previousStyleRef) {
  if (node != null && nativeProps) {
    var domProps = Object(_createDOMProps__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(null, _objectSpread({
      pointerEvents: pointerEvents
    }, nativeProps, {
      classList: [classList, nativeProps.className],
      style: [style, nativeProps.style]
    }));
    var nextDomStyle = domProps.style;

    if (previousStyleRef.current != null) {
      if (domProps.style == null) {
        domProps.style = {};
      }

      for (var styleName in previousStyleRef.current) {
        if (domProps.style[styleName] == null) {
          domProps.style[styleName] = '';
        }
      }
    }

    previousStyleRef.current = nextDomStyle;
    _exports_UIManager__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].updateView(node, domProps);
  }
}

function usePlatformMethods(_ref) {
  var classList = _ref.classList,
      pointerEvents = _ref.pointerEvents,
      style = _ref.style;
  var previousStyleRef = Object(react__WEBPACK_IMPORTED_MODULE_3__["useRef"])(null);
  var setNativePropsArgsRef = Object(react__WEBPACK_IMPORTED_MODULE_3__["useRef"])(null);
  setNativePropsArgsRef.current = {
    classList: classList,
    pointerEvents: pointerEvents,
    style: style
  };
  var ref = Object(_useStable__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(function () {
    return function (hostNode) {
      if (hostNode != null) {
        hostNode.measure = function (callback) {
          return _exports_UIManager__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].measure(hostNode, callback);
        };

        hostNode.measureLayout = function (relativeToNode, success, failure) {
          return _exports_UIManager__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].measureLayout(hostNode, relativeToNode, failure, success);
        };

        hostNode.measureInWindow = function (callback) {
          return _exports_UIManager__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].measureInWindow(hostNode, callback);
        };

        hostNode.setNativeProps = function (nativeProps) {
          var _ref2 = setNativePropsArgsRef.current || emptyObject,
              classList = _ref2.classList,
              style = _ref2.style,
              pointerEvents = _ref2.pointerEvents;

          setNativeProps(hostNode, nativeProps, classList, pointerEvents, style, previousStyleRef);
        };
      }
    };
  });
  return ref;
}

/***/ }),

/***/ "wE6v":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("hh1v");

// `ToPrimitive` abstract operation
// https://tc39.es/ecma262/#sec-toprimitive
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (input, PREFERRED_STRING) {
  if (!isObject(input)) return input;
  var fn, val;
  if (PREFERRED_STRING && typeof (fn = input.toString) == 'function' && !isObject(val = fn.call(input))) return val;
  if (typeof (fn = input.valueOf) == 'function' && !isObject(val = fn.call(input))) return val;
  if (!PREFERRED_STRING && typeof (fn = input.toString) == 'function' && !isObject(val = fn.call(input))) return val;
  throw TypeError("Can't convert object to primitive value");
};


/***/ }),

/***/ "wEkZ":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = backgroundClip; // https://developer.mozilla.org/en-US/docs/Web/CSS/background-clip#Browser_compatibility

function backgroundClip(property, value) {
  if (typeof value === 'string' && value === 'text') {
    return ['-webkit-text', 'text'];
  }
}

/***/ }),

/***/ "wTVA":
/***/ (function(module, exports) {

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

module.exports = _arrayWithHoles;

/***/ }),

/***/ "wkBT":
/***/ (function(module, exports) {

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

module.exports = _nonIterableRest;

/***/ }),

/***/ "xDBR":
/***/ (function(module, exports) {

module.exports = false;


/***/ }),

/***/ "xLLm":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */


var canUseDOM = !!(typeof window !== 'undefined' && window.document && window.document.createElement);
/**
 * Simple, lightweight module assisting with the detection and context of
 * Worker. Helps avoid circular dependencies and allows code to reason about
 * whether or not they are in a Worker, even if they never include the main
 * `ReactWorker` dependency.
 */

var ExecutionEnvironment = {
  canUseDOM: canUseDOM,
  canUseWorkers: typeof Worker !== 'undefined',
  canUseEventListeners: canUseDOM && !!(window.addEventListener || window.attachEvent),
  canUseViewport: canUseDOM && !!window.screen,
  isInWorker: !canUseDOM // For now, this is true - might change in the future.

};
module.exports = ExecutionEnvironment;

/***/ }),

/***/ "xUnz":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = logical;
var alternativeProps = {
  marginBlockStart: ['WebkitMarginBefore'],
  marginBlockEnd: ['WebkitMarginAfter'],
  marginInlineStart: ['WebkitMarginStart', 'MozMarginStart'],
  marginInlineEnd: ['WebkitMarginEnd', 'MozMarginEnd'],
  paddingBlockStart: ['WebkitPaddingBefore'],
  paddingBlockEnd: ['WebkitPaddingAfter'],
  paddingInlineStart: ['WebkitPaddingStart', 'MozPaddingStart'],
  paddingInlineEnd: ['WebkitPaddingEnd', 'MozPaddingEnd'],
  borderBlockStart: ['WebkitBorderBefore'],
  borderBlockStartColor: ['WebkitBorderBeforeColor'],
  borderBlockStartStyle: ['WebkitBorderBeforeStyle'],
  borderBlockStartWidth: ['WebkitBorderBeforeWidth'],
  borderBlockEnd: ['WebkitBorderAfter'],
  borderBlockEndColor: ['WebkitBorderAfterColor'],
  borderBlockEndStyle: ['WebkitBorderAfterStyle'],
  borderBlockEndWidth: ['WebkitBorderAfterWidth'],
  borderInlineStart: ['WebkitBorderStart', 'MozBorderStart'],
  borderInlineStartColor: ['WebkitBorderStartColor', 'MozBorderStartColor'],
  borderInlineStartStyle: ['WebkitBorderStartStyle', 'MozBorderStartStyle'],
  borderInlineStartWidth: ['WebkitBorderStartWidth', 'MozBorderStartWidth'],
  borderInlineEnd: ['WebkitBorderEnd', 'MozBorderEnd'],
  borderInlineEndColor: ['WebkitBorderEndColor', 'MozBorderEndColor'],
  borderInlineEndStyle: ['WebkitBorderEndStyle', 'MozBorderEndStyle'],
  borderInlineEndWidth: ['WebkitBorderEndWidth', 'MozBorderEndWidth']
};

function logical(property, value, style) {
  if (Object.prototype.hasOwnProperty.call(alternativeProps, property)) {
    var alternativePropList = alternativeProps[property];

    for (var i = 0, len = alternativePropList.length; i < len; ++i) {
      style[alternativePropList[i]] = value;
    }
  }
}

/***/ }),

/***/ "xrYK":
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),

/***/ "xs3f":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("2oRo");
var setGlobal = __webpack_require__("zk60");

var SHARED = '__core-js_shared__';
var store = global[SHARED] || setGlobal(SHARED, {});

module.exports = store;


/***/ }),

/***/ "xtsi":
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("E9XD");var plugins=__webpack_require__("LeKB");var _require$publicLoader=__webpack_require__("emEt").publicLoader,getResourcesForPathname=_require$publicLoader.getResourcesForPathname,getResourcesForPathnameSync=_require$publicLoader.getResourcesForPathnameSync,getResourceURLsForPathname=_require$publicLoader.getResourceURLsForPathname,loadPage=_require$publicLoader.loadPage,loadPageSync=_require$publicLoader.loadPageSync;exports.apiRunner=function(api){var args=arguments.length>1&&arguments[1]!==undefined?arguments[1]:{};var defaultReturn=arguments.length>2?arguments[2]:undefined;var argTransform=arguments.length>3?arguments[3]:undefined;if(undefined){if(window.___apiHandler){window.___apiHandler(api);}else if(window.___resolvedAPIs){window.___resolvedAPIs.push(api);}else{window.___resolvedAPIs=[api];}}var results=plugins.map(function(plugin){if(!plugin.plugin[api]){return undefined;}args.getResourcesForPathnameSync=getResourcesForPathnameSync;args.getResourcesForPathname=getResourcesForPathname;args.getResourceURLsForPathname=getResourceURLsForPathname;args.loadPage=loadPage;args.loadPageSync=loadPageSync;var result=plugin.plugin[api](args,plugin.options);if(result&&argTransform){args=argTransform({args:args,result:result,plugin:plugin});}return result;});results=results.filter(function(result){return typeof result!=="undefined";});if(results.length>0){return results;}else if(defaultReturn){return[defaultReturn];}else{return[];}};exports.apiRunnerAsync=function(api,args,defaultReturn){return plugins.reduce(function(previous,next){return next.plugin[api]?previous.then(function(){return next.plugin[api](args,next.options);}):previous;},Promise.resolve());};

/***/ }),

/***/ "yBWl":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return STYLE_ELEMENT_ID; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return STYLE_GROUPS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return STYLE_SHORT_FORM_EXPANSIONS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MONOSPACE_FONT_STACK; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return SYSTEM_FONT_STACK; });
var STYLE_ELEMENT_ID = 'react-native-stylesheet';
var STYLE_GROUPS = {
  reset: 0,
  modality: 0.1,
  classicReset: 0.5,
  classic: 1,
  atomic: 2.2,
  custom: {
    borderColor: 2,
    borderRadius: 2,
    borderStyle: 2,
    borderWidth: 2,
    display: 2,
    flex: 2,
    margin: 2,
    overflow: 2,
    overscrollBehavior: 2,
    padding: 2,
    marginHorizontal: 2.1,
    marginVertical: 2.1,
    paddingHorizontal: 2.1,
    paddingVertical: 2.1
  }
};
var STYLE_SHORT_FORM_EXPANSIONS = {
  borderColor: ['borderTopColor', 'borderRightColor', 'borderBottomColor', 'borderLeftColor'],
  borderRadius: ['borderTopLeftRadius', 'borderTopRightRadius', 'borderBottomRightRadius', 'borderBottomLeftRadius'],
  borderStyle: ['borderTopStyle', 'borderRightStyle', 'borderBottomStyle', 'borderLeftStyle'],
  borderWidth: ['borderTopWidth', 'borderRightWidth', 'borderBottomWidth', 'borderLeftWidth'],
  margin: ['marginTop', 'marginRight', 'marginBottom', 'marginLeft'],
  marginHorizontal: ['marginRight', 'marginLeft'],
  marginVertical: ['marginTop', 'marginBottom'],
  overflow: ['overflowX', 'overflowY'],
  overscrollBehavior: ['overscrollBehaviorX', 'overscrollBehaviorY'],
  padding: ['paddingTop', 'paddingRight', 'paddingBottom', 'paddingLeft'],
  paddingHorizontal: ['paddingRight', 'paddingLeft'],
  paddingVertical: ['paddingTop', 'paddingBottom']
};
var MONOSPACE_FONT_STACK = 'monospace,monospace';
var SYSTEM_FONT_STACK = '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Helvetica,Arial,sans-serif';

/***/ }),

/***/ "yKOc":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "default", function() { return /* binding */ AppRegistry_AppRegistry; });

// EXTERNAL MODULE: ./node_modules/fbjs/lib/invariant.js
var invariant = __webpack_require__("2NuI");
var invariant_default = /*#__PURE__*/__webpack_require__.n(invariant);

// EXTERNAL MODULE: ./node_modules/react-native-web/dist/exports/unmountComponentAtNode/index.js
var unmountComponentAtNode = __webpack_require__("NRdY");

// EXTERNAL MODULE: ./node_modules/react-native-web/dist/exports/StyleSheet/index.js + 1 modules
var StyleSheet = __webpack_require__("ckSu");

// EXTERNAL MODULE: ./node_modules/react-native-web/dist/exports/View/index.js
var View = __webpack_require__("jzUF");

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__("q1tI");
var react_default = /*#__PURE__*/__webpack_require__.n(react);

// CONCATENATED MODULE: ./node_modules/react-native-web/dist/exports/AppRegistry/AppContainer.js



var RootTagContext = Object(react["createContext"])(null);
function AppContainer(props) {
  var children = props.children,
      WrapperComponent = props.WrapperComponent;
  var innerView = react_default.a.createElement(View["a" /* default */], {
    children: children,
    key: 1,
    pointerEvents: "box-none",
    style: styles.appContainer
  });

  if (WrapperComponent) {
    innerView = react_default.a.createElement(WrapperComponent, null, innerView);
  }

  return react_default.a.createElement(RootTagContext.Provider, {
    value: props.rootTag
  }, react_default.a.createElement(View["a" /* default */], {
    pointerEvents: "box-none",
    style: styles.appContainer
  }, innerView));
}
var styles = StyleSheet["a" /* default */].create({
  appContainer: {
    flex: 1
  }
});
// EXTERNAL MODULE: ./node_modules/react-dom/index.js
var react_dom = __webpack_require__("i8i4");

// EXTERNAL MODULE: ./node_modules/react-native-web/dist/exports/render/index.js
var render = __webpack_require__("DZbo");

// EXTERNAL MODULE: ./node_modules/react-native-web/dist/exports/StyleSheet/styleResolver.js + 10 modules
var styleResolver = __webpack_require__("TgPG");

// CONCATENATED MODULE: ./node_modules/react-native-web/dist/exports/AppRegistry/renderApplication.js
function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}






function renderApplication(RootComponent, WrapperComponent, callback, options) {
  var shouldHydrate = options.hydrate,
      initialProps = options.initialProps,
      rootTag = options.rootTag;
  var renderFn = shouldHydrate ? react_dom["hydrate"] : render["a" /* default */];
  invariant_default()(rootTag, 'Expect to have a valid rootTag, instead got ', rootTag);
  renderFn(react_default.a.createElement(AppContainer, {
    rootTag: rootTag,
    WrapperComponent: WrapperComponent
  }, react_default.a.createElement(RootComponent, initialProps)), rootTag, callback);
}
function renderApplication_getApplication(RootComponent, initialProps, WrapperComponent) {
  var element = react_default.a.createElement(AppContainer, {
    rootTag: {},
    WrapperComponent: WrapperComponent
  }, react_default.a.createElement(RootComponent, initialProps));

  var getStyleElement = function getStyleElement(props) {
    var sheet = styleResolver["a" /* default */].getStyleSheet();
    return react_default.a.createElement("style", _extends({}, props, {
      dangerouslySetInnerHTML: {
        __html: sheet.textContent
      },
      id: sheet.id
    }));
  };

  return {
    element: element,
    getStyleElement: getStyleElement
  };
}
// CONCATENATED MODULE: ./node_modules/react-native-web/dist/exports/AppRegistry/index.js
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
        _defineProperty(target, key, source[key]);
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

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}




var emptyObject = {};
var runnables = {};

var componentProviderInstrumentationHook = function componentProviderInstrumentationHook(component) {
  return component();
};

var wrapperComponentProvider;

var AppRegistry_AppRegistry = function () {
  function AppRegistry() {}

  AppRegistry.getAppKeys = function getAppKeys() {
    return Object.keys(runnables);
  };

  AppRegistry.getApplication = function getApplication(appKey, appParameters) {
    invariant_default()(runnables[appKey] && runnables[appKey].getApplication, "Application " + appKey + " has not been registered. " + 'This is either due to an import error during initialization or failure to call AppRegistry.registerComponent.');
    return runnables[appKey].getApplication(appParameters);
  };

  AppRegistry.registerComponent = function registerComponent(appKey, componentProvider) {
    runnables[appKey] = {
      getApplication: function getApplication(appParameters) {
        return renderApplication_getApplication(componentProviderInstrumentationHook(componentProvider), appParameters ? appParameters.initialProps : emptyObject, wrapperComponentProvider && wrapperComponentProvider(appParameters));
      },
      run: function run(appParameters) {
        return renderApplication(componentProviderInstrumentationHook(componentProvider), wrapperComponentProvider && wrapperComponentProvider(appParameters), appParameters.callback, {
          hydrate: appParameters.hydrate || false,
          initialProps: appParameters.initialProps || emptyObject,
          rootTag: appParameters.rootTag
        });
      }
    };
    return appKey;
  };

  AppRegistry.registerConfig = function registerConfig(config) {
    config.forEach(function (_ref) {
      var appKey = _ref.appKey,
          component = _ref.component,
          run = _ref.run;

      if (run) {
        AppRegistry.registerRunnable(appKey, run);
      } else {
        invariant_default()(component, 'No component provider passed in');
        AppRegistry.registerComponent(appKey, component);
      }
    });
  };

  AppRegistry.registerRunnable = function registerRunnable(appKey, run) {
    runnables[appKey] = {
      run: run
    };
    return appKey;
  };

  AppRegistry.runApplication = function runApplication(appKey, appParameters) {
    var isDevelopment =  false && false;

    if (isDevelopment) {
      var params = _objectSpread({}, appParameters);

      params.rootTag = "#" + params.rootTag.id;
      console.log("Running application \"" + appKey + "\" with appParams:\n", params, "\nDevelopment-level warnings: " + (isDevelopment ? 'ON' : 'OFF') + "." + ("\nPerformance optimizations: " + (isDevelopment ? 'OFF' : 'ON') + "."));
    }

    invariant_default()(runnables[appKey] && runnables[appKey].run, "Application \"" + appKey + "\" has not been registered. " + 'This is either due to an import error during initialization or failure to call AppRegistry.registerComponent.');
    runnables[appKey].run(appParameters);
  };

  AppRegistry.setComponentProviderInstrumentationHook = function setComponentProviderInstrumentationHook(hook) {
    componentProviderInstrumentationHook = hook;
  };

  AppRegistry.setWrapperComponentProvider = function setWrapperComponentProvider(provider) {
    wrapperComponentProvider = provider;
  };

  AppRegistry.unmountApplicationComponentAtRootTag = function unmountApplicationComponentAtRootTag(rootTag) {
    Object(unmountComponentAtNode["a" /* default */])(rootTag);
  };

  return AppRegistry;
}();



/***/ }),

/***/ "ycuu":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = flexboxIE;
var alternativeValues = {
  'space-around': 'distribute',
  'space-between': 'justify',
  'flex-start': 'start',
  'flex-end': 'end'
};
var alternativeProps = {
  alignContent: 'msFlexLinePack',
  alignSelf: 'msFlexItemAlign',
  alignItems: 'msFlexAlign',
  justifyContent: 'msFlexPack',
  order: 'msFlexOrder',
  flexGrow: 'msFlexPositive',
  flexShrink: 'msFlexNegative',
  flexBasis: 'msFlexPreferredSize' // Full expanded syntax is flex-grow | flex-shrink | flex-basis.

};
var flexShorthandMappings = {
  auto: '1 1 auto',
  inherit: 'inherit',
  initial: '0 1 auto',
  none: '0 0 auto',
  unset: 'unset'
};
var isUnitlessNumber = /^\d+(\.\d+)?$/;

function flexboxIE(property, value, style) {
  if (Object.prototype.hasOwnProperty.call(alternativeProps, property)) {
    style[alternativeProps[property]] = alternativeValues[value] || value;
  }

  if (property === 'flex') {
    // For certain values we can do straight mappings based on the spec
    // for the expansions.
    if (Object.prototype.hasOwnProperty.call(flexShorthandMappings, value)) {
      style.msFlex = flexShorthandMappings[value];
      return;
    } // Here we have no direct mapping, so we favor looking for a
    // unitless positive number as that will be the most common use-case.


    if (isUnitlessNumber.test(value)) {
      style.msFlex = value + ' 1 0%';
      return;
    } // The next thing we can look for is if there are multiple values.


    var flexValues = value.split(/\s/); // If we only have a single value that wasn't a positive unitless
    // or a pre-mapped value, then we can assume it is a unit value.

    switch (flexValues.length) {
      case 1:
        style.msFlex = '1 1 ' + value;
        return;

      case 2:
        // If we have 2 units, then we expect that the first will
        // always be a unitless number and represents flex-grow.
        // The second unit will represent flex-shrink for a unitless
        // value, or flex-basis otherwise.
        if (isUnitlessNumber.test(flexValues[1])) {
          style.msFlex = flexValues[0] + ' ' + flexValues[1] + ' 0%';
        } else {
          style.msFlex = flexValues[0] + ' 1 ' + flexValues[1];
        }

        return;

      default:
        style.msFlex = value;
    }
  }
}

/***/ }),

/***/ "yoRg":
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__("UTVS");
var toIndexedObject = __webpack_require__("/GqU");
var indexOf = __webpack_require__("TWQb").indexOf;
var hiddenKeys = __webpack_require__("0BK2");

module.exports = function (object, names) {
  var O = toIndexedObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) !has(hiddenKeys, key) && has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (has(O, key = names[i++])) {
    ~indexOf(result, key) || result.push(key);
  }
  return result;
};


/***/ }),

/***/ "zBJ4":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("2oRo");
var isObject = __webpack_require__("hh1v");

var document = global.document;
// typeof document.createElement is 'object' in old IE
var EXISTS = isObject(document) && isObject(document.createElement);

module.exports = function (it) {
  return EXISTS ? document.createElement(it) : {};
};


/***/ }),

/***/ "zCBb":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = prefixValue;

function prefixValue(plugins, property, value, style, metaData) {
  for (var i = 0, len = plugins.length; i < len; ++i) {
    var processedValue = plugins[i](property, value, style, metaData); // we can stop processing if a value is returned
    // as all plugin criteria are unique

    if (processedValue) {
      return processedValue;
    }
  }
}

/***/ }),

/***/ "zk60":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("2oRo");
var createNonEnumerableProperty = __webpack_require__("kRJp");

module.exports = function (key, value) {
  try {
    createNonEnumerableProperty(global, key, value);
  } catch (error) {
    global[key] = value;
  } return value;
};


/***/ })

},[["UxWs",5,8,10,6]]]);
//# sourceMappingURL=app-aacea3ebf4bb73c999a5.js.map