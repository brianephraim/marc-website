(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[2],{

/***/ "+ReS":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _AnimatedValue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("E60X");
/* harmony import */ var _AnimatedWithChildren__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("90BO");
/* harmony import */ var fbjs_lib_invariant__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("2NuI");
/* harmony import */ var fbjs_lib_invariant__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(fbjs_lib_invariant__WEBPACK_IMPORTED_MODULE_2__);


function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  subClass.__proto__ = superClass;
}




var _uniqueId = 1;

var AnimatedValueXY = function (_AnimatedWithChildren) {
  _inheritsLoose(AnimatedValueXY, _AnimatedWithChildren);

  function AnimatedValueXY(valueIn) {
    var _this;

    _this = _AnimatedWithChildren.call(this) || this;
    var value = valueIn || {
      x: 0,
      y: 0
    };

    if (typeof value.x === 'number' && typeof value.y === 'number') {
      _this.x = new _AnimatedValue__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"](value.x);
      _this.y = new _AnimatedValue__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"](value.y);
    } else {
      fbjs_lib_invariant__WEBPACK_IMPORTED_MODULE_2___default()(value.x instanceof _AnimatedValue__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"] && value.y instanceof _AnimatedValue__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"], 'AnimatedValueXY must be initialized with an object of numbers or ' + 'AnimatedValues.');
      _this.x = value.x;
      _this.y = value.y;
    }

    _this._listeners = {};
    return _this;
  }

  var _proto = AnimatedValueXY.prototype;

  _proto.setValue = function setValue(value) {
    this.x.setValue(value.x);
    this.y.setValue(value.y);
  };

  _proto.setOffset = function setOffset(offset) {
    this.x.setOffset(offset.x);
    this.y.setOffset(offset.y);
  };

  _proto.flattenOffset = function flattenOffset() {
    this.x.flattenOffset();
    this.y.flattenOffset();
  };

  _proto.extractOffset = function extractOffset() {
    this.x.extractOffset();
    this.y.extractOffset();
  };

  _proto.__getValue = function __getValue() {
    return {
      x: this.x.__getValue(),
      y: this.y.__getValue()
    };
  };

  _proto.resetAnimation = function resetAnimation(callback) {
    this.x.resetAnimation();
    this.y.resetAnimation();
    callback && callback(this.__getValue());
  };

  _proto.stopAnimation = function stopAnimation(callback) {
    this.x.stopAnimation();
    this.y.stopAnimation();
    callback && callback(this.__getValue());
  };

  _proto.addListener = function addListener(callback) {
    var _this2 = this;

    var id = String(_uniqueId++);

    var jointCallback = function jointCallback(_ref) {
      var number = _ref.value;
      callback(_this2.__getValue());
    };

    this._listeners[id] = {
      x: this.x.addListener(jointCallback),
      y: this.y.addListener(jointCallback)
    };
    return id;
  };

  _proto.removeListener = function removeListener(id) {
    this.x.removeListener(this._listeners[id].x);
    this.y.removeListener(this._listeners[id].y);
    delete this._listeners[id];
  };

  _proto.removeAllListeners = function removeAllListeners() {
    this.x.removeAllListeners();
    this.y.removeAllListeners();
    this._listeners = {};
  };

  _proto.getLayout = function getLayout() {
    return {
      left: this.x,
      top: this.y
    };
  };

  _proto.getTranslateTransform = function getTranslateTransform() {
    return [{
      translateX: this.x
    }, {
      translateY: this.y
    }];
  };

  return AnimatedValueXY;
}(_AnimatedWithChildren__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"]);

/* harmony default export */ __webpack_exports__["a"] = (AnimatedValueXY);

/***/ }),

/***/ "+o9m":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @typechecks
 */


var ExecutionEnvironment = __webpack_require__("xLLm");

var performance;

if (ExecutionEnvironment.canUseDOM) {
  performance = window.performance || window.msPerformance || window.webkitPerformance;
}

module.exports = performance || {};

/***/ }),

/***/ "/IJh":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {/* harmony import */ var _Animation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("ARf8");
/* harmony import */ var _NativeAnimatedHelper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("HBEB");


function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  subClass.__proto__ = superClass;
}




var DecayAnimation = function (_Animation) {
  _inheritsLoose(DecayAnimation, _Animation);

  function DecayAnimation(config) {
    var _config$deceleration, _config$isInteraction, _config$iterations;

    var _this;

    _this = _Animation.call(this) || this;
    _this._deceleration = (_config$deceleration = config.deceleration) !== null && _config$deceleration !== void 0 ? _config$deceleration : 0.998;
    _this._velocity = config.velocity;
    _this._useNativeDriver = Object(_NativeAnimatedHelper__WEBPACK_IMPORTED_MODULE_1__[/* shouldUseNativeDriver */ "c"])(config);
    _this.__isInteraction = (_config$isInteraction = config.isInteraction) !== null && _config$isInteraction !== void 0 ? _config$isInteraction : !_this._useNativeDriver;
    _this.__iterations = (_config$iterations = config.iterations) !== null && _config$iterations !== void 0 ? _config$iterations : 1;
    return _this;
  }

  var _proto = DecayAnimation.prototype;

  _proto.__getNativeAnimationConfig = function __getNativeAnimationConfig() {
    return {
      type: 'decay',
      deceleration: this._deceleration,
      velocity: this._velocity,
      iterations: this.__iterations
    };
  };

  _proto.start = function start(fromValue, onUpdate, onEnd, previousAnimation, animatedValue) {
    this.__active = true;
    this._lastValue = fromValue;
    this._fromValue = fromValue;
    this._onUpdate = onUpdate;
    this.__onEnd = onEnd;
    this._startTime = Date.now();

    if (this._useNativeDriver) {
      this.__startNativeAnimation(animatedValue);
    } else {
      this._animationFrame = requestAnimationFrame(this.onUpdate.bind(this));
    }
  };

  _proto.onUpdate = function onUpdate() {
    var now = Date.now();
    var value = this._fromValue + this._velocity / (1 - this._deceleration) * (1 - Math.exp(-(1 - this._deceleration) * (now - this._startTime)));

    this._onUpdate(value);

    if (Math.abs(this._lastValue - value) < 0.1) {
      this.__debouncedOnEnd({
        finished: true
      });

      return;
    }

    this._lastValue = value;

    if (this.__active) {
      this._animationFrame = requestAnimationFrame(this.onUpdate.bind(this));
    }
  };

  _proto.stop = function stop() {
    _Animation.prototype.stop.call(this);

    this.__active = false;
    global.cancelAnimationFrame(this._animationFrame);

    this.__debouncedOnEnd({
      finished: false
    });
  };

  return DecayAnimation;
}(_Animation__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"]);

/* harmony default export */ __webpack_exports__["a"] = (DecayAnimation);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("eKGF")))

/***/ }),

/***/ "2mcs":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */


var emptyFunction = __webpack_require__("ohE5");
/**
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */


function printWarning(format) {
  for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    args[_key - 1] = arguments[_key];
  }

  var argIndex = 0;
  var message = 'Warning: ' + format.replace(/%s/g, function () {
    return args[argIndex++];
  });

  if (typeof console !== 'undefined') {
    console.error(message);
  }

  try {
    // --- Welcome to debugging React ---
    // This error was thrown as a convenience so that you can use this stack
    // to find the callsite that caused this warning to fire.
    throw new Error(message);
  } catch (x) {}
}

var warning =  false ? undefined : emptyFunction;
module.exports = warning;

/***/ }),

/***/ "3zYm":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _emitter_EventEmitter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("u7Mw");
/* harmony import */ var _RCTDeviceEventEmitter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("qTQs");
/* harmony import */ var fbjs_lib_invariant__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("2NuI");
/* harmony import */ var fbjs_lib_invariant__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(fbjs_lib_invariant__WEBPACK_IMPORTED_MODULE_2__);


function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  subClass.__proto__ = superClass;
}





var NativeEventEmitter = function (_EventEmitter) {
  _inheritsLoose(NativeEventEmitter, _EventEmitter);

  function NativeEventEmitter(nativeModule) {
    return _EventEmitter.call(this, _RCTDeviceEventEmitter__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].sharedSubscriber) || this;
  }

  var _proto = NativeEventEmitter.prototype;

  _proto.addListener = function addListener(eventType, listener, context) {
    if (this._nativeModule != null) {
      this._nativeModule.addListener(eventType);
    }

    return _EventEmitter.prototype.addListener.call(this, eventType, listener, context);
  };

  _proto.removeAllListeners = function removeAllListeners(eventType) {
    fbjs_lib_invariant__WEBPACK_IMPORTED_MODULE_2___default()(eventType, 'eventType argument is required.');
    var count = this.listeners(eventType).length;

    if (this._nativeModule != null) {
      this._nativeModule.removeListeners(count);
    }

    _EventEmitter.prototype.removeAllListeners.call(this, eventType);
  };

  _proto.removeSubscription = function removeSubscription(subscription) {
    if (this._nativeModule != null) {
      this._nativeModule.removeListeners(1);
    }

    _EventEmitter.prototype.removeSubscription.call(this, subscription);
  };

  return NativeEventEmitter;
}(_emitter_EventEmitter__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"]);

/* harmony default export */ __webpack_exports__["a"] = (NativeEventEmitter);

/***/ }),

/***/ "5zSb":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__("q1tI");
var react_default = /*#__PURE__*/__webpack_require__.n(react);

// EXTERNAL MODULE: ./node_modules/react-native-web/dist/exports/Text/index.js
var Text = __webpack_require__("IIls");

// EXTERNAL MODULE: ./node_modules/react-native-web/dist/exports/View/index.js
var View = __webpack_require__("jzUF");

// EXTERNAL MODULE: ./node_modules/react-helmet/es/Helmet.js
var Helmet = __webpack_require__("qhky");

// EXTERNAL MODULE: ./src/StyleSheet.js + 13 modules
var StyleSheet = __webpack_require__("D5zv");

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/slicedToArray.js
var slicedToArray = __webpack_require__("J4zp");
var slicedToArray_default = /*#__PURE__*/__webpack_require__.n(slicedToArray);

// EXTERNAL MODULE: ./node_modules/react-native-media-query/index.web.js + 4 modules
var index_web = __webpack_require__("nBU6");

// EXTERNAL MODULE: ./src/Image.js
var Image = __webpack_require__("eHYQ");

// EXTERNAL MODULE: ./src/gatsby-link/index.js
var gatsby_link = __webpack_require__("lnzl");

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/extends.js
var helpers_extends = __webpack_require__("pVnL");
var extends_default = /*#__PURE__*/__webpack_require__.n(helpers_extends);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/objectWithoutProperties.js
var objectWithoutProperties = __webpack_require__("QILm");
var objectWithoutProperties_default = /*#__PURE__*/__webpack_require__.n(objectWithoutProperties);

// EXTERNAL MODULE: ./node_modules/react-native-svg/lib/module/index.js
var lib_module = __webpack_require__("nc9g");
var module_default = /*#__PURE__*/__webpack_require__.n(lib_module);

// CONCATENATED MODULE: ./src/svgs/facebook.js
function SvgComponent(props){return react["createElement"](module_default.a,extends_default()({viewBox:"0 0 512 512",fillRule:"evenodd",clipRule:"evenodd",strokeLinejoin:"round",strokeMiterlimit:2},props),react["createElement"](lib_module["Path"],{d:"M374.244 285.825l14.105-91.961h-88.233v-59.677c0-25.159 12.325-49.682 51.845-49.682h40.116V6.214S355.67 0 320.864 0c-72.67 0-120.165 44.042-120.165 123.775v70.089h-80.777v91.961h80.777v222.31A320.565 320.565 0 00250.408 512c16.911 0 33.511-1.324 49.708-3.865v-222.31h74.128z",fillRule:"nonzero"}));}/* harmony default export */ var facebook = (SvgComponent);
// CONCATENATED MODULE: ./src/svgs/tumblr.js
function tumblr_SvgComponent(props){return react["createElement"](module_default.a,extends_default()({viewBox:"0 0 512 512",fillRule:"evenodd",clipRule:"evenodd",strokeLinejoin:"round",strokeMiterlimit:2},props),react["createElement"](lib_module["Path"],{d:"M315.422 512.003c-76.99 0-134.379-39.613-134.379-134.388V225.833h-69.985v-82.185C188.08 123.652 220.277 57.388 224.004.002h79.946v130.314h93.281v95.517H303.95v132.165c0 39.616 19.987 53.308 51.83 53.308h45.179v100.697h-85.537z",fillRule:"nonzero"}));}/* harmony default export */ var tumblr = (tumblr_SvgComponent);
// CONCATENATED MODULE: ./src/svgs/twitter.js
function twitter_SvgComponent(props){return react["createElement"](module_default.a,extends_default()({viewBox:"0 0 512 512",fillRule:"evenodd",clipRule:"evenodd",strokeLinejoin:"round",strokeMiterlimit:2},props),react["createElement"](lib_module["Path"],{d:"M161.014 464.013c193.208 0 298.885-160.071 298.885-298.885 0-4.546 0-9.072-.307-13.578A213.737 213.737 0 00512 97.176a209.705 209.705 0 01-60.334 16.527 105.426 105.426 0 0046.182-58.102 210.548 210.548 0 01-66.703 25.498 105.184 105.184 0 00-76.593-33.112c-57.682 0-105.145 47.464-105.145 105.144 0 8.002.914 15.979 2.722 23.773-84.418-4.231-163.18-44.161-216.494-109.752-27.724 47.726-13.379 109.576 32.522 140.226A104.258 104.258 0 0120.48 194.23v1.331c.014 49.814 35.447 93.111 84.275 102.974a104.898 104.898 0 01-47.431 1.802c13.727 42.685 53.311 72.108 98.14 72.95a210.83 210.83 0 01-130.458 45.056A213.688 213.688 0 010 416.827a297.42 297.42 0 00161.014 47.104",fillRule:"nonzero"}));}/* harmony default export */ var twitter = (twitter_SvgComponent);
// CONCATENATED MODULE: ./src/svgs/instagram.js
function instagram_SvgComponent(props){return react["createElement"](module_default.a,extends_default()({viewBox:"0 0 600 600",fillRule:"evenodd",clipRule:"evenodd",strokeLinejoin:"round",strokeMiterlimit:2},props),react["createElement"](lib_module["G"],{fillRule:"nonzero"},react["createElement"](lib_module["Path"],{d:"M300 44c-69.526 0-78.244.295-105.549 1.54-27.248 1.244-45.858 5.571-62.142 11.9-16.834 6.542-31.11 15.296-45.342 29.528-14.232 14.231-22.986 28.508-29.528 45.342-6.329 16.283-10.656 34.893-11.9 62.141C44.295 221.756 44 230.474 44 300c0 69.524.294 78.242 1.54 105.547 1.243 27.248 5.57 45.858 11.9 62.141 6.541 16.834 15.295 31.11 29.527 45.344 14.231 14.231 28.508 22.985 45.342 29.527 16.284 6.328 34.894 10.656 62.142 11.899 27.305 1.245 36.023 1.54 105.549 1.54 69.524 0 78.242-.295 105.547-1.54 27.248-1.243 45.858-5.571 62.141-11.899 16.834-6.542 31.11-15.296 45.344-29.527 14.231-14.233 22.985-28.51 29.527-45.344 6.328-16.283 10.656-34.893 11.899-62.14 1.245-27.306 1.54-36.024 1.54-105.548 0-69.526-.295-78.244-1.54-105.549-1.243-27.248-5.571-45.858-11.899-62.141-6.542-16.834-15.296-31.11-29.527-45.342-14.233-14.232-28.51-22.986-45.344-29.528-16.283-6.329-34.893-10.656-62.14-11.9C378.241 44.296 369.523 44 300 44zm0 46.127c68.354 0 76.45.26 103.445 1.492 24.96 1.139 38.514 5.31 47.535 8.814 11.95 4.644 20.477 10.192 29.435 19.15 8.959 8.958 14.506 17.487 19.15 29.435 3.506 9.02 7.676 22.576 8.815 47.535 1.231 26.995 1.492 35.092 1.492 103.447 0 68.354-.26 76.45-1.492 103.445-1.139 24.96-5.31 38.514-8.815 47.535-4.644 11.95-10.191 20.477-19.15 29.435-8.958 8.959-17.486 14.506-29.435 19.15-9.02 3.506-22.576 7.676-47.535 8.814-26.99 1.232-35.086 1.493-103.445 1.493-68.36 0-76.455-.26-103.447-1.493-24.96-1.138-38.514-5.308-47.535-8.814-11.95-4.644-20.477-10.191-29.436-19.15-8.958-8.958-14.506-17.486-19.149-29.435-3.506-9.02-7.676-22.576-8.815-47.535-1.232-26.994-1.492-35.091-1.492-103.445 0-68.355.26-76.452 1.492-103.447 1.139-24.96 5.31-38.514 8.815-47.535 4.643-11.948 10.191-20.477 19.15-29.435 8.958-8.958 17.486-14.506 29.435-19.15 9.02-3.505 22.576-7.675 47.535-8.814 26.995-1.232 35.092-1.492 103.447-1.492z"}),react["createElement"](lib_module["Path"],{d:"M300 385.332c-47.13 0-85.334-38.205-85.334-85.332 0-47.13 38.205-85.334 85.334-85.334 47.127 0 85.332 38.205 85.332 85.334 0 47.127-38.205 85.332-85.332 85.332zm0-216.792c-72.604 0-131.46 58.856-131.46 131.46 0 72.602 58.856 131.458 131.46 131.458 72.602 0 131.458-58.856 131.458-131.458 0-72.604-58.856-131.46-131.458-131.46zM467.372 163.346c0 16.967-13.754 30.72-30.72 30.72s-30.72-13.753-30.72-30.72c0-16.966 13.754-30.719 30.72-30.719s30.72 13.753 30.72 30.72z"})));}/* harmony default export */ var instagram = (instagram_SvgComponent);
// CONCATENATED MODULE: ./src/SocialButtons.js
var SocialButtons_styles=StyleSheet["b" /* default */].create({container:{flexDirection:'row',alignItems:'flex-end'},iconItem:{marginHorizontal:10}});var size='20';var config=[{Icon:facebook,props:{height:size,width:size,fill:StyleSheet["a" /* colors */].color2},url:'https://www.facebook.com/welcometolifecast'},{Icon:twitter,props:{height:size,width:size,fill:StyleSheet["a" /* colors */].color2},url:'https://twitter.com/marcopsal'},{Icon:instagram,props:{height:size,width:size,fill:StyleSheet["a" /* colors */].color2},url:'https://www.instagram.com/marcopsal'},{Icon:tumblr,props:{height:size,width:size,fill:StyleSheet["a" /* colors */].color2},url:'https://marcopsal.tumblr.com/'}];var socialIconsComponents=config.map(function(_ref){var Icon=_ref.Icon,props=_ref.props,url=_ref.url;return{key:url,Comp:function Comp(_ref2){var style=_ref2.style,rest=objectWithoutProperties_default()(_ref2,["style"]);return react_default.a.createElement(View["a" /* default */],{style:style},react_default.a.createElement("a",{href:url,target:"_blank",style:{display:'block'}},react_default.a.createElement(Icon,extends_default()({},props,rest))));}};});var _socialIconsComponent=slicedToArray_default()(socialIconsComponents,4),Facebook=_socialIconsComponent[0],Twitter=_socialIconsComponent[1],Instagram=_socialIconsComponent[2],Tumblr=_socialIconsComponent[3];var SocialButtons_SocialButtons=function SocialButtons(_ref3){var style=_ref3.style;return react_default.a.createElement(View["a" /* default */],{style:[SocialButtons_styles.container,style]},socialIconsComponents.map(function(_ref4){var Comp=_ref4.Comp,key=_ref4.key;return react_default.a.createElement(Comp,{key:key,style:SocialButtons_styles.iconItem});}));};/* harmony default export */ var src_SocialButtons = (SocialButtons_SocialButtons);
// CONCATENATED MODULE: ./src/HeaderBar.js
var logoHeight=50;var logoHeightSmaller=30;var mediaStyles={container:{flexDirection:'row',alignItems:'flex-end',justifyContent:'space-between',borderBottomWidth:3,borderBottomColor:StyleSheet["a" /* colors */].color3,backgroundColor:StyleSheet["a" /* colors */].color4,'@media (max-width: 500px)':{flexWrap:'wrap'}},navMain:{flexDirection:'row',alignItems:'flex-end',flexWrap:'wrap',flexShrink:1,marginLeft:30},linkCollection:{flexDirection:'row'},logoImg:{marginRight:30,width:1239/206*logoHeight,height:logoHeight,'@media (max-width: 800px)':{marginTop:8,marginBottom:3,width:1239/206*logoHeightSmaller,height:logoHeightSmaller}},socialButtons:{marginBottom:5,marginLeft:20,'@media (max-width: 800px)':{}}};var linkStyles=StyleSheet["b" /* default */].create({link:{color:StyleSheet["a" /* colors */].color2,fontFamily:'BodyFont',marginRight:20,marginBottom:8,fontSize:18,textDecorationLine:'none'},activeLink:{color:StyleSheet["a" /* colors */].color1}});var HeaderBar_LinkItem=function LinkItem(_ref){var to=_ref.to,children=_ref.children;return react_default.a.createElement(gatsby_link["a" /* default */],{component:Text["a" /* default */],style:linkStyles.link,activeStyle:linkStyles.activeLink,to:to},children);};var HeaderBar_HeaderBar=function HeaderBar(){var _useMediaQuery=Object(index_web["a" /* useMediaQuery */])(mediaStyles),_useMediaQuery2=slicedToArray_default()(_useMediaQuery,2),styleIds=_useMediaQuery2[0],styles=_useMediaQuery2[1];return react_default.a.createElement(View["a" /* default */],{style:styles.container,dataSet:{media:styleIds.container}},react_default.a.createElement(View["a" /* default */],{style:styles.navMain,dataSet:{media:styleIds.navMain}},react_default.a.createElement(Image["a" /* default */],{style:styles.logoImg,dataSet:{media:styleIds.logoImg},source:{uri:'/marc-logo.png'}}),react_default.a.createElement(View["a" /* default */],{style:styles.linkCollection,dataSet:{media:styleIds.linkCollection}},react_default.a.createElement(HeaderBar_LinkItem,{to:"/"},"Home"),react_default.a.createElement(HeaderBar_LinkItem,{to:"/lifecast"},"LIFECAST"),react_default.a.createElement(HeaderBar_LinkItem,{to:"/about"},"About Marc"))),react_default.a.createElement(src_SocialButtons,{style:styles.socialButtons,dataSet:{media:styleIds.socialButtons}}));};/* harmony default export */ var src_HeaderBar = (HeaderBar_HeaderBar);
// CONCATENATED MODULE: ./src/HtmlHead.js
var HtmlHead_HtmlHead=function HtmlHead(){var title='Marc Opsal - Author of LIFECAST';var url='https://marcopsal.com/';var description="BRAVE NEW WORLD  meets FEED  in this thrilling adventure that pits one man against a pleasure-obsessed society that threatens to take everything from him.";var image='https://marcopsal.com/lifecast-product.png';return react_default.a.createElement(Helmet["a" /* Helmet */],null,react_default.a.createElement("title",null,title),react_default.a.createElement("meta",{name:"title",content:title}),react_default.a.createElement("meta",{name:"description",content:description}),react_default.a.createElement("meta",{property:"og:type",content:"website"}),react_default.a.createElement("meta",{property:"og:url",content:url}),react_default.a.createElement("meta",{property:"og:title",content:title}),react_default.a.createElement("meta",{property:"og:description",content:description}),react_default.a.createElement("meta",{property:"og:image",content:image}),react_default.a.createElement("meta",{property:"twitter:card",content:"summary_large_image"}),react_default.a.createElement("meta",{property:"twitter:url",content:url}),react_default.a.createElement("meta",{property:"twitter:title",content:title}),react_default.a.createElement("meta",{property:"twitter:description",content:description}),react_default.a.createElement("meta",{property:"twitter:image",content:image}));};/* harmony default export */ var src_HtmlHead = (HtmlHead_HtmlHead);
// CONCATENATED MODULE: ./src/PageLayout.js
var PageLayout_styles=StyleSheet["b" /* default */].create({container:{backgroundColor:'$color6',flex:1,justifyContent:'space-between'},body:{alignItems:'center'},footer:{backgroundColor:'$color4',height:100,justifyContent:'flex-end',alignItems:'flex-end',borderTopWidth:3,borderTopColor:'$color3'},copyright:{margin:15,color:'$color5',fontFamily:'BodyFont',fontSize:11}});var PageLayout_PageLayout=function PageLayout(_ref){var children=_ref.children;return react_default.a.createElement(View["a" /* default */],{style:PageLayout_styles.container},react_default.a.createElement(src_HtmlHead,null),react_default.a.createElement(View["a" /* default */],{style:PageLayout_styles.notFooter},react_default.a.createElement(src_HeaderBar,null),react_default.a.createElement(View["a" /* default */],{style:PageLayout_styles.body},children)),react_default.a.createElement(View["a" /* default */],{style:PageLayout_styles.footer},react_default.a.createElement(Text["a" /* default */],{style:PageLayout_styles.copyright},"\xA92020 Marc Opsal")));};/* harmony default export */ var src_PageLayout = __webpack_exports__["a"] = (PageLayout_PageLayout);

/***/ }),

/***/ "6fKw":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
Copyright (c) 2014, Yahoo! Inc. All rights reserved.
Copyrights licensed under the New BSD License.
See the accompanying LICENSE file for terms.
*/


exports.match = matchQuery;
exports.parse = parseQuery; // -----------------------------------------------------------------------------

var RE_MEDIA_QUERY = /(?:(only|not)?\s*([^\s\(\)]+)(?:\s*and)?\s*)?(.+)?/i,
    RE_MQ_EXPRESSION = /\(\s*([^\s\:\)]+)\s*(?:\:\s*([^\s\)]+))?\s*\)/,
    RE_MQ_FEATURE = /^(?:(min|max)-)?(.+)/,
    RE_LENGTH_UNIT = /(em|rem|px|cm|mm|in|pt|pc)?$/,
    RE_RESOLUTION_UNIT = /(dpi|dpcm|dppx)?$/;

function matchQuery(mediaQuery, values) {
  return parseQuery(mediaQuery).some(function (query) {
    var inverse = query.inverse; // Either the parsed or specified `type` is "all", or the types must be
    // equal for a match.

    var typeMatch = query.type === 'all' || values.type === query.type; // Quit early when `type` doesn't match, but take "not" into account.

    if (typeMatch && inverse || !(typeMatch || inverse)) {
      return false;
    }

    var expressionsMatch = query.expressions.every(function (expression) {
      var feature = expression.feature,
          modifier = expression.modifier,
          expValue = expression.value,
          value = values[feature]; // Missing or falsy values don't match.

      if (!value) {
        return false;
      }

      switch (feature) {
        case 'orientation':
        case 'scan':
          return value.toLowerCase() === expValue.toLowerCase();

        case 'width':
        case 'height':
        case 'device-width':
        case 'device-height':
          expValue = toPx(expValue);
          value = toPx(value);
          break;

        case 'resolution':
          expValue = toDpi(expValue);
          value = toDpi(value);
          break;

        case 'aspect-ratio':
        case 'device-aspect-ratio':
        case
        /* Deprecated */
        'device-pixel-ratio':
          expValue = toDecimal(expValue);
          value = toDecimal(value);
          break;

        case 'grid':
        case 'color':
        case 'color-index':
        case 'monochrome':
          expValue = parseInt(expValue, 10) || 1;
          value = parseInt(value, 10) || 0;
          break;
      }

      switch (modifier) {
        case 'min':
          return value >= expValue;

        case 'max':
          return value <= expValue;

        default:
          return value === expValue;
      }
    });
    return expressionsMatch && !inverse || !expressionsMatch && inverse;
  });
}

function parseQuery(mediaQuery) {
  return mediaQuery.split(',').map(function (query) {
    query = query.trim();
    var captures = query.match(RE_MEDIA_QUERY),
        modifier = captures[1],
        type = captures[2],
        expressions = captures[3] || '',
        parsed = {};
    parsed.inverse = !!modifier && modifier.toLowerCase() === 'not';
    parsed.type = type ? type.toLowerCase() : 'all'; // Split expressions into a list.

    expressions = expressions.match(/\([^\)]+\)/g) || [];
    parsed.expressions = expressions.map(function (expression) {
      var captures = expression.match(RE_MQ_EXPRESSION),
          feature = captures[1].toLowerCase().match(RE_MQ_FEATURE);
      return {
        modifier: feature[1],
        feature: feature[2],
        value: captures[2]
      };
    });
    return parsed;
  });
} // -- Utilities ----------------------------------------------------------------


function toDecimal(ratio) {
  var decimal = Number(ratio),
      numbers;

  if (!decimal) {
    numbers = ratio.match(/^(\d+)\s*\/\s*(\d+)$/);
    decimal = numbers[1] / numbers[2];
  }

  return decimal;
}

function toDpi(resolution) {
  var value = parseFloat(resolution),
      units = String(resolution).match(RE_RESOLUTION_UNIT)[1];

  switch (units) {
    case 'dpcm':
      return value / 2.54;

    case 'dppx':
      return value * 96;

    default:
      return value;
  }
}

function toPx(length) {
  var value = parseFloat(length),
      units = String(length).match(RE_LENGTH_UNIT)[1];

  switch (units) {
    case 'em':
      return value * 16;

    case 'rem':
      return value * 16;

    case 'cm':
      return value * 96 / 2.54;

    case 'mm':
      return value * 96 / 2.54 / 10;

    case 'in':
      return value * 96;

    case 'pt':
      return value * 72;

    case 'pc':
      return value * 72 / 12;

    default:
      return value;
  }
}

/***/ }),

/***/ "72vt":
/***/ (function(module, exports, __webpack_require__) {

var _interopRequireDefault = __webpack_require__("TqRt");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _defineProperty2 = _interopRequireDefault(__webpack_require__("lSNA"));

var _reactNative = __webpack_require__("7RzF");

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
        (0, _defineProperty2.default)(target, key, source[key]);
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

var PRESS_RETENTION_OFFSET = {
  top: 20,
  left: 20,
  right: 20,
  bottom: 30
};
var Mixin = _reactNative.Touchable.Mixin;
var _touchableHandleStartShouldSetResponder = Mixin.touchableHandleStartShouldSetResponder,
    _touchableHandleResponderTerminationRequest = Mixin.touchableHandleResponderTerminationRequest,
    _touchableHandleResponderGrant = Mixin.touchableHandleResponderGrant,
    _touchableHandleResponderMove = Mixin.touchableHandleResponderMove,
    _touchableHandleResponderRelease = Mixin.touchableHandleResponderRelease,
    _touchableHandleResponderTerminate = Mixin.touchableHandleResponderTerminate,
    touchableGetInitialState = Mixin.touchableGetInitialState;

var SvgTouchableMixin = _objectSpread({}, Mixin, {
  touchableHandleStartShouldSetResponder: function touchableHandleStartShouldSetResponder(e) {
    var onStartShouldSetResponder = this.props.onStartShouldSetResponder;

    if (onStartShouldSetResponder) {
      return onStartShouldSetResponder(e);
    } else {
      return _touchableHandleStartShouldSetResponder.call(this, e);
    }
  },
  touchableHandleResponderTerminationRequest: function touchableHandleResponderTerminationRequest(e) {
    var onResponderTerminationRequest = this.props.onResponderTerminationRequest;

    if (onResponderTerminationRequest) {
      return onResponderTerminationRequest(e);
    } else {
      return _touchableHandleResponderTerminationRequest.call(this, e);
    }
  },
  touchableHandleResponderGrant: function touchableHandleResponderGrant(e) {
    var onResponderGrant = this.props.onResponderGrant;

    if (onResponderGrant) {
      return onResponderGrant(e);
    } else {
      return _touchableHandleResponderGrant.call(this, e);
    }
  },
  touchableHandleResponderMove: function touchableHandleResponderMove(e) {
    var onResponderMove = this.props.onResponderMove;

    if (onResponderMove) {
      return onResponderMove(e);
    } else {
      return _touchableHandleResponderMove.call(this, e);
    }
  },
  touchableHandleResponderRelease: function touchableHandleResponderRelease(e) {
    var onResponderRelease = this.props.onResponderRelease;

    if (onResponderRelease) {
      return onResponderRelease(e);
    } else {
      return _touchableHandleResponderRelease.call(this, e);
    }
  },
  touchableHandleResponderTerminate: function touchableHandleResponderTerminate(e) {
    var onResponderTerminate = this.props.onResponderTerminate;

    if (onResponderTerminate) {
      return onResponderTerminate(e);
    } else {
      return _touchableHandleResponderTerminate.call(this, e);
    }
  },
  touchableHandlePress: function touchableHandlePress(e) {
    var onPress = this.props.onPress;
    onPress && onPress(e);
  },
  touchableHandleActivePressIn: function touchableHandleActivePressIn(e) {
    var onPressIn = this.props.onPressIn;
    onPressIn && onPressIn(e);
  },
  touchableHandleActivePressOut: function touchableHandleActivePressOut(e) {
    var onPressOut = this.props.onPressOut;
    onPressOut && onPressOut(e);
  },
  touchableHandleLongPress: function touchableHandleLongPress(e) {
    var onLongPress = this.props.onLongPress;
    onLongPress && onLongPress(e);
  },
  touchableGetPressRectOffset: function touchableGetPressRectOffset() {
    var pressRetentionOffset = this.props.pressRetentionOffset;
    return pressRetentionOffset || PRESS_RETENTION_OFFSET;
  },
  touchableGetHitSlop: function touchableGetHitSlop() {
    var hitSlop = this.props.hitSlop;
    return hitSlop;
  },
  touchableGetHighlightDelayMS: function touchableGetHighlightDelayMS() {
    var delayPressIn = this.props.delayPressIn;
    return delayPressIn || 0;
  },
  touchableGetLongPressDelayMS: function touchableGetLongPressDelayMS() {
    var delayLongPress = this.props.delayLongPress;
    return delayLongPress === 0 ? 0 : delayLongPress || 500;
  },
  touchableGetPressOutDelayMS: function touchableGetPressOutDelayMS() {
    var delayPressOut = this.props.delayPressOut;
    return delayPressOut || 0;
  }
});

var touchKeys = Object.keys(SvgTouchableMixin);
var touchVals = touchKeys.map(function (key) {
  return SvgTouchableMixin[key];
});
var numTouchKeys = touchKeys.length;

var _default = function _default(target) {
  for (var i = 0; i < numTouchKeys; i++) {
    var key = touchKeys[i];
    var val = touchVals[i];

    if (typeof val === 'function') {
      target[key] = val.bind(target);
    } else {
      target[key] = val;
    }
  }

  target.state = touchableGetInitialState();
};

exports.default = _default;

/***/ }),

/***/ "7RzF":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "unstable_createElement", function() { return /* reexport */ createElement["a" /* default */]; });
__webpack_require__.d(__webpack_exports__, "findNodeHandle", function() { return /* reexport */ findNodeHandle["a" /* default */]; });
__webpack_require__.d(__webpack_exports__, "processColor", function() { return /* reexport */ processColor["a" /* default */]; });
__webpack_require__.d(__webpack_exports__, "render", function() { return /* reexport */ exports_render["a" /* default */]; });
__webpack_require__.d(__webpack_exports__, "unmountComponentAtNode", function() { return /* reexport */ unmountComponentAtNode["a" /* default */]; });
__webpack_require__.d(__webpack_exports__, "NativeModules", function() { return /* reexport */ NativeModules["a" /* default */]; });
__webpack_require__.d(__webpack_exports__, "AccessibilityInfo", function() { return /* reexport */ exports_AccessibilityInfo; });
__webpack_require__.d(__webpack_exports__, "Alert", function() { return /* reexport */ exports_Alert; });
__webpack_require__.d(__webpack_exports__, "Animated", function() { return /* reexport */ exports_Animated; });
__webpack_require__.d(__webpack_exports__, "Appearance", function() { return /* reexport */ exports_Appearance; });
__webpack_require__.d(__webpack_exports__, "AppRegistry", function() { return /* reexport */ AppRegistry["default"]; });
__webpack_require__.d(__webpack_exports__, "AppState", function() { return /* reexport */ AppState_AppState; });
__webpack_require__.d(__webpack_exports__, "BackHandler", function() { return /* reexport */ exports_BackHandler; });
__webpack_require__.d(__webpack_exports__, "Clipboard", function() { return /* reexport */ Clipboard; });
__webpack_require__.d(__webpack_exports__, "DeviceInfo", function() { return /* reexport */ exports_DeviceInfo; });
__webpack_require__.d(__webpack_exports__, "Dimensions", function() { return /* reexport */ Dimensions["a" /* default */]; });
__webpack_require__.d(__webpack_exports__, "Easing", function() { return /* reexport */ exports_Easing; });
__webpack_require__.d(__webpack_exports__, "I18nManager", function() { return /* reexport */ I18nManager["a" /* default */]; });
__webpack_require__.d(__webpack_exports__, "Keyboard", function() { return /* reexport */ exports_Keyboard; });
__webpack_require__.d(__webpack_exports__, "InteractionManager", function() { return /* reexport */ InteractionManager["a" /* default */]; });
__webpack_require__.d(__webpack_exports__, "LayoutAnimation", function() { return /* reexport */ exports_LayoutAnimation; });
__webpack_require__.d(__webpack_exports__, "Linking", function() { return /* reexport */ Linking["a" /* default */]; });
__webpack_require__.d(__webpack_exports__, "NativeEventEmitter", function() { return /* reexport */ exports_NativeEventEmitter; });
__webpack_require__.d(__webpack_exports__, "PanResponder", function() { return /* reexport */ exports_PanResponder; });
__webpack_require__.d(__webpack_exports__, "PixelRatio", function() { return /* reexport */ PixelRatio["a" /* default */]; });
__webpack_require__.d(__webpack_exports__, "Platform", function() { return /* reexport */ Platform["a" /* default */]; });
__webpack_require__.d(__webpack_exports__, "Share", function() { return /* reexport */ exports_Share; });
__webpack_require__.d(__webpack_exports__, "StyleSheet", function() { return /* reexport */ StyleSheet["a" /* default */]; });
__webpack_require__.d(__webpack_exports__, "UIManager", function() { return /* reexport */ UIManager["a" /* default */]; });
__webpack_require__.d(__webpack_exports__, "Vibration", function() { return /* reexport */ exports_Vibration; });
__webpack_require__.d(__webpack_exports__, "ActivityIndicator", function() { return /* reexport */ exports_ActivityIndicator; });
__webpack_require__.d(__webpack_exports__, "Button", function() { return /* reexport */ exports_Button; });
__webpack_require__.d(__webpack_exports__, "CheckBox", function() { return /* reexport */ exports_CheckBox; });
__webpack_require__.d(__webpack_exports__, "FlatList", function() { return /* reexport */ exports_FlatList; });
__webpack_require__.d(__webpack_exports__, "Image", function() { return /* reexport */ Image["a" /* default */]; });
__webpack_require__.d(__webpack_exports__, "ImageBackground", function() { return /* reexport */ exports_ImageBackground; });
__webpack_require__.d(__webpack_exports__, "KeyboardAvoidingView", function() { return /* reexport */ exports_KeyboardAvoidingView; });
__webpack_require__.d(__webpack_exports__, "Modal", function() { return /* reexport */ exports_Modal; });
__webpack_require__.d(__webpack_exports__, "Picker", function() { return /* reexport */ exports_Picker; });
__webpack_require__.d(__webpack_exports__, "Pressable", function() { return /* reexport */ exports_Pressable; });
__webpack_require__.d(__webpack_exports__, "ProgressBar", function() { return /* reexport */ exports_ProgressBar; });
__webpack_require__.d(__webpack_exports__, "RefreshControl", function() { return /* reexport */ exports_RefreshControl; });
__webpack_require__.d(__webpack_exports__, "SafeAreaView", function() { return /* reexport */ exports_SafeAreaView; });
__webpack_require__.d(__webpack_exports__, "ScrollView", function() { return /* reexport */ exports_ScrollView; });
__webpack_require__.d(__webpack_exports__, "SectionList", function() { return /* reexport */ exports_SectionList; });
__webpack_require__.d(__webpack_exports__, "StatusBar", function() { return /* reexport */ exports_StatusBar; });
__webpack_require__.d(__webpack_exports__, "Switch", function() { return /* reexport */ exports_Switch; });
__webpack_require__.d(__webpack_exports__, "Text", function() { return /* reexport */ Text["a" /* default */]; });
__webpack_require__.d(__webpack_exports__, "TextInput", function() { return /* reexport */ exports_TextInput; });
__webpack_require__.d(__webpack_exports__, "Touchable", function() { return /* reexport */ exports_Touchable; });
__webpack_require__.d(__webpack_exports__, "TouchableHighlight", function() { return /* reexport */ exports_TouchableHighlight; });
__webpack_require__.d(__webpack_exports__, "TouchableNativeFeedback", function() { return /* reexport */ TouchableNativeFeedback; });
__webpack_require__.d(__webpack_exports__, "TouchableOpacity", function() { return /* reexport */ TouchableOpacity["a" /* default */]; });
__webpack_require__.d(__webpack_exports__, "TouchableWithoutFeedback", function() { return /* reexport */ TouchableWithoutFeedback["a" /* default */]; });
__webpack_require__.d(__webpack_exports__, "View", function() { return /* reexport */ View["a" /* default */]; });
__webpack_require__.d(__webpack_exports__, "VirtualizedList", function() { return /* reexport */ exports_VirtualizedList; });
__webpack_require__.d(__webpack_exports__, "YellowBox", function() { return /* reexport */ exports_YellowBox; });
__webpack_require__.d(__webpack_exports__, "LogBox", function() { return /* reexport */ exports_LogBox; });
__webpack_require__.d(__webpack_exports__, "DrawerLayoutAndroid", function() { return /* reexport */ DrawerLayoutAndroid; });
__webpack_require__.d(__webpack_exports__, "InputAccessoryView", function() { return /* reexport */ InputAccessoryView; });
__webpack_require__.d(__webpack_exports__, "ToastAndroid", function() { return /* reexport */ ToastAndroid; });
__webpack_require__.d(__webpack_exports__, "PermissionsAndroid", function() { return /* reexport */ PermissionsAndroid; });
__webpack_require__.d(__webpack_exports__, "Settings", function() { return /* reexport */ Settings; });
__webpack_require__.d(__webpack_exports__, "Systrace", function() { return /* reexport */ Systrace; });
__webpack_require__.d(__webpack_exports__, "TVEventHandler", function() { return /* reexport */ TVEventHandler; });
__webpack_require__.d(__webpack_exports__, "DeviceEventEmitter", function() { return /* reexport */ DeviceEventEmitter["a" /* default */]; });
__webpack_require__.d(__webpack_exports__, "useColorScheme", function() { return /* reexport */ useColorScheme; });
__webpack_require__.d(__webpack_exports__, "useWindowDimensions", function() { return /* reexport */ useWindowDimensions; });

// EXTERNAL MODULE: ./node_modules/react-native-web/dist/exports/createElement/index.js
var createElement = __webpack_require__("osi3");

// EXTERNAL MODULE: ./node_modules/react-native-web/dist/exports/findNodeHandle/index.js
var findNodeHandle = __webpack_require__("t4TM");

// EXTERNAL MODULE: ./node_modules/react-native-web/dist/exports/processColor/index.js
var processColor = __webpack_require__("+mtM");

// EXTERNAL MODULE: ./node_modules/react-native-web/dist/exports/render/index.js
var exports_render = __webpack_require__("DZbo");

// EXTERNAL MODULE: ./node_modules/react-native-web/dist/exports/unmountComponentAtNode/index.js
var unmountComponentAtNode = __webpack_require__("NRdY");

// EXTERNAL MODULE: ./node_modules/react-native-web/dist/exports/NativeModules/index.js
var NativeModules = __webpack_require__("utb+");

// EXTERNAL MODULE: ./node_modules/fbjs/lib/ExecutionEnvironment.js
var ExecutionEnvironment = __webpack_require__("xLLm");

// CONCATENATED MODULE: ./node_modules/react-native-web/dist/exports/AccessibilityInfo/index.js


function isScreenReaderEnabled() {
  return new Promise(function (resolve, reject) {
    resolve(true);
  });
}

var prefersReducedMotionMedia = ExecutionEnvironment["canUseDOM"] && typeof window.matchMedia === 'function' ? window.matchMedia('(prefers-reduced-motion: reduce)') : null;

function isReduceMotionEnabled() {
  return new Promise(function (resolve, reject) {
    resolve(prefersReducedMotionMedia ? prefersReducedMotionMedia.matches : true);
  });
}

function addChangeListener(fn) {
  if (prefersReducedMotionMedia != null) {
    prefersReducedMotionMedia.addEventListener != null ? prefersReducedMotionMedia.addEventListener('change', fn) : prefersReducedMotionMedia.addListener(fn);
  }
}

function removeChangeListener(fn) {
  if (prefersReducedMotionMedia != null) {
    prefersReducedMotionMedia.removeEventListener != null ? prefersReducedMotionMedia.removeEventListener('change', fn) : prefersReducedMotionMedia.removeListener(fn);
  }
}

var handlers = {};
var AccessibilityInfo = {
  isScreenReaderEnabled: isScreenReaderEnabled,
  isReduceMotionEnabled: isReduceMotionEnabled,
  fetch: isScreenReaderEnabled,
  addEventListener: function addEventListener(eventName, handler) {
    if (eventName === 'reduceMotionChanged') {
      if (!prefersReducedMotionMedia) {
        return;
      }

      var listener = function listener(event) {
        handler(event.matches);
      };

      addChangeListener(listener);
      handlers[handler] = listener;
    }

    return {
      remove: function remove() {
        return AccessibilityInfo.removeEventListener(eventName, handler);
      }
    };
  },
  setAccessibilityFocus: function setAccessibilityFocus(reactTag) {},
  announceForAccessibility: function announceForAccessibility(announcement) {},
  removeEventListener: function removeEventListener(eventName, handler) {
    if (eventName === 'reduceMotionChanged') {
      var listener = handlers[handler];

      if (!listener || !prefersReducedMotionMedia) {
        return;
      }

      removeChangeListener(listener);
    }

    return;
  }
};
/* harmony default export */ var exports_AccessibilityInfo = (AccessibilityInfo);
// CONCATENATED MODULE: ./node_modules/react-native-web/dist/exports/Alert/index.js
var Alert = function () {
  function Alert() {}

  Alert.alert = function alert() {};

  return Alert;
}();

/* harmony default export */ var exports_Alert = (Alert);
// EXTERNAL MODULE: ./node_modules/react-native-web/dist/vendor/react-native/Animated/nodes/AnimatedValue.js
var AnimatedValue = __webpack_require__("E60X");

// EXTERNAL MODULE: ./node_modules/react-native-web/dist/vendor/react-native/Animated/NativeAnimatedHelper.js + 2 modules
var NativeAnimatedHelper = __webpack_require__("HBEB");

// EXTERNAL MODULE: ./node_modules/fbjs/lib/invariant.js
var invariant = __webpack_require__("2NuI");
var invariant_default = /*#__PURE__*/__webpack_require__.n(invariant);

// CONCATENATED MODULE: ./node_modules/react-native-web/dist/vendor/react-native/Animated/AnimatedEvent.js






var shouldUseNativeDriver = NativeAnimatedHelper["a" /* default */].shouldUseNativeDriver;

function attachNativeEvent(viewRef, eventName, argMapping) {
  var eventMappings = [];

  var traverse = function traverse(value, path) {
    if (value instanceof AnimatedValue["a" /* default */]) {
      value.__makeNative();

      eventMappings.push({
        nativeEventPath: path,
        animatedValueTag: value.__getNativeTag()
      });
    } else if (typeof value === 'object') {
      for (var _key in value) {
        traverse(value[_key], path.concat(_key));
      }
    }
  };

  invariant_default()(argMapping[0] && argMapping[0].nativeEvent, 'Native driven events only support animated values contained inside `nativeEvent`.');
  traverse(argMapping[0].nativeEvent, []);
  var viewTag = Object(findNodeHandle["a" /* default */])(viewRef);
  eventMappings.forEach(function (mapping) {
    NativeAnimatedHelper["a" /* default */].API.addAnimatedEventToView(viewTag, eventName, mapping);
  });
  return {
    detach: function detach() {
      eventMappings.forEach(function (mapping) {
        NativeAnimatedHelper["a" /* default */].API.removeAnimatedEventFromView(viewTag, eventName, mapping.animatedValueTag);
      });
    }
  };
}

var AnimatedEvent_AnimatedEvent = function () {
  function AnimatedEvent(argMapping, config) {
    if (config === void 0) {
      config = {};
    }

    this._listeners = [];
    this._argMapping = argMapping;

    if (config.listener) {
      this.__addListener(config.listener);
    }

    this._callListeners = this._callListeners.bind(this);
    this._attachedEvent = null;
    this.__isNative = shouldUseNativeDriver(config);

    if (false) {}
  }

  var _proto = AnimatedEvent.prototype;

  _proto.__addListener = function __addListener(callback) {
    this._listeners.push(callback);
  };

  _proto.__removeListener = function __removeListener(callback) {
    this._listeners = this._listeners.filter(function (listener) {
      return listener !== callback;
    });
  };

  _proto.__attach = function __attach(viewRef, eventName) {
    invariant_default()(this.__isNative, 'Only native driven events need to be attached.');
    this._attachedEvent = attachNativeEvent(viewRef, eventName, this._argMapping);
  };

  _proto.__detach = function __detach(viewTag, eventName) {
    invariant_default()(this.__isNative, 'Only native driven events need to be detached.');
    this._attachedEvent && this._attachedEvent.detach();
  };

  _proto.__getHandler = function __getHandler() {
    var _this = this;

    if (this.__isNative) {
      return this._callListeners;
    }

    return function () {
      for (var _len = arguments.length, args = new Array(_len), _key2 = 0; _key2 < _len; _key2++) {
        args[_key2] = arguments[_key2];
      }

      var traverse = function traverse(recMapping, recEvt, key) {
        if (typeof recEvt === 'number' && recMapping instanceof AnimatedValue["a" /* default */]) {
          recMapping.setValue(recEvt);
        } else if (typeof recMapping === 'object') {
          for (var mappingKey in recMapping) {
            traverse(recMapping[mappingKey], recEvt[mappingKey], mappingKey);
          }
        }
      };

      if (!_this.__isNative) {
        _this._argMapping.forEach(function (mapping, idx) {
          traverse(mapping, args[idx], 'arg' + idx);
        });
      }

      _this._callListeners.apply(_this, args);
    };
  };

  _proto._callListeners = function _callListeners() {
    for (var _len2 = arguments.length, args = new Array(_len2), _key3 = 0; _key3 < _len2; _key3++) {
      args[_key3] = arguments[_key3];
    }

    this._listeners.forEach(function (listener) {
      return listener.apply(void 0, args);
    });
  };

  _proto._validateMapping = function _validateMapping() {
    var traverse = function traverse(recMapping, recEvt, key) {
      if (typeof recEvt === 'number') {
        invariant_default()(recMapping instanceof AnimatedValue["a" /* default */], 'Bad mapping of type ' + typeof recMapping + ' for key ' + key + ', event value must map to AnimatedValue');
        return;
      }

      invariant_default()(typeof recMapping === 'object', 'Bad mapping of type ' + typeof recMapping + ' for key ' + key);
      invariant_default()(typeof recEvt === 'object', 'Bad event of type ' + typeof recEvt + ' for key ' + key);

      for (var mappingKey in recMapping) {
        traverse(recMapping[mappingKey], recEvt[mappingKey], mappingKey);
      }
    };
  };

  return AnimatedEvent;
}();


/* harmony default export */ var Animated_AnimatedEvent = ({
  AnimatedEvent: AnimatedEvent_AnimatedEvent,
  attachNativeEvent: attachNativeEvent
});
// EXTERNAL MODULE: ./node_modules/react-native-web/dist/vendor/react-native/Animated/nodes/AnimatedInterpolation.js
var AnimatedInterpolation = __webpack_require__("Al+L");

// EXTERNAL MODULE: ./node_modules/react-native-web/dist/vendor/react-native/Animated/nodes/AnimatedWithChildren.js
var AnimatedWithChildren = __webpack_require__("90BO");

// CONCATENATED MODULE: ./node_modules/react-native-web/dist/vendor/react-native/Animated/nodes/AnimatedAddition.js


function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  subClass.__proto__ = superClass;
}






var AnimatedAddition_AnimatedAddition = function (_AnimatedWithChildren) {
  _inheritsLoose(AnimatedAddition, _AnimatedWithChildren);

  function AnimatedAddition(a, b) {
    var _this;

    _this = _AnimatedWithChildren.call(this) || this;
    _this._a = typeof a === 'number' ? new AnimatedValue["a" /* default */](a) : a;
    _this._b = typeof b === 'number' ? new AnimatedValue["a" /* default */](b) : b;
    return _this;
  }

  var _proto = AnimatedAddition.prototype;

  _proto.__makeNative = function __makeNative() {
    this._a.__makeNative();

    this._b.__makeNative();

    _AnimatedWithChildren.prototype.__makeNative.call(this);
  };

  _proto.__getValue = function __getValue() {
    return this._a.__getValue() + this._b.__getValue();
  };

  _proto.interpolate = function interpolate(config) {
    return new AnimatedInterpolation["a" /* default */](this, config);
  };

  _proto.__attach = function __attach() {
    this._a.__addChild(this);

    this._b.__addChild(this);
  };

  _proto.__detach = function __detach() {
    this._a.__removeChild(this);

    this._b.__removeChild(this);

    _AnimatedWithChildren.prototype.__detach.call(this);
  };

  _proto.__getNativeConfig = function __getNativeConfig() {
    return {
      type: 'addition',
      input: [this._a.__getNativeTag(), this._b.__getNativeTag()]
    };
  };

  return AnimatedAddition;
}(AnimatedWithChildren["a" /* default */]);

/* harmony default export */ var nodes_AnimatedAddition = (AnimatedAddition_AnimatedAddition);
// CONCATENATED MODULE: ./node_modules/react-native-web/dist/vendor/react-native/Animated/nodes/AnimatedDiffClamp.js


function AnimatedDiffClamp_inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  subClass.__proto__ = superClass;
}





var AnimatedDiffClamp_AnimatedDiffClamp = function (_AnimatedWithChildren) {
  AnimatedDiffClamp_inheritsLoose(AnimatedDiffClamp, _AnimatedWithChildren);

  function AnimatedDiffClamp(a, min, max) {
    var _this;

    _this = _AnimatedWithChildren.call(this) || this;
    _this._a = a;
    _this._min = min;
    _this._max = max;
    _this._value = _this._lastValue = _this._a.__getValue();
    return _this;
  }

  var _proto = AnimatedDiffClamp.prototype;

  _proto.__makeNative = function __makeNative() {
    this._a.__makeNative();

    _AnimatedWithChildren.prototype.__makeNative.call(this);
  };

  _proto.interpolate = function interpolate(config) {
    return new AnimatedInterpolation["a" /* default */](this, config);
  };

  _proto.__getValue = function __getValue() {
    var value = this._a.__getValue();

    var diff = value - this._lastValue;
    this._lastValue = value;
    this._value = Math.min(Math.max(this._value + diff, this._min), this._max);
    return this._value;
  };

  _proto.__attach = function __attach() {
    this._a.__addChild(this);
  };

  _proto.__detach = function __detach() {
    this._a.__removeChild(this);

    _AnimatedWithChildren.prototype.__detach.call(this);
  };

  _proto.__getNativeConfig = function __getNativeConfig() {
    return {
      type: 'diffclamp',
      input: this._a.__getNativeTag(),
      min: this._min,
      max: this._max
    };
  };

  return AnimatedDiffClamp;
}(AnimatedWithChildren["a" /* default */]);

/* harmony default export */ var nodes_AnimatedDiffClamp = (AnimatedDiffClamp_AnimatedDiffClamp);
// CONCATENATED MODULE: ./node_modules/react-native-web/dist/vendor/react-native/Animated/nodes/AnimatedDivision.js


function AnimatedDivision_inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  subClass.__proto__ = superClass;
}






var AnimatedDivision_AnimatedDivision = function (_AnimatedWithChildren) {
  AnimatedDivision_inheritsLoose(AnimatedDivision, _AnimatedWithChildren);

  function AnimatedDivision(a, b) {
    var _this;

    _this = _AnimatedWithChildren.call(this) || this;
    _this._a = typeof a === 'number' ? new AnimatedValue["a" /* default */](a) : a;
    _this._b = typeof b === 'number' ? new AnimatedValue["a" /* default */](b) : b;
    return _this;
  }

  var _proto = AnimatedDivision.prototype;

  _proto.__makeNative = function __makeNative() {
    this._a.__makeNative();

    this._b.__makeNative();

    _AnimatedWithChildren.prototype.__makeNative.call(this);
  };

  _proto.__getValue = function __getValue() {
    var a = this._a.__getValue();

    var b = this._b.__getValue();

    if (b === 0) {
      console.error('Detected division by zero in AnimatedDivision');
    }

    return a / b;
  };

  _proto.interpolate = function interpolate(config) {
    return new AnimatedInterpolation["a" /* default */](this, config);
  };

  _proto.__attach = function __attach() {
    this._a.__addChild(this);

    this._b.__addChild(this);
  };

  _proto.__detach = function __detach() {
    this._a.__removeChild(this);

    this._b.__removeChild(this);

    _AnimatedWithChildren.prototype.__detach.call(this);
  };

  _proto.__getNativeConfig = function __getNativeConfig() {
    return {
      type: 'division',
      input: [this._a.__getNativeTag(), this._b.__getNativeTag()]
    };
  };

  return AnimatedDivision;
}(AnimatedWithChildren["a" /* default */]);

/* harmony default export */ var nodes_AnimatedDivision = (AnimatedDivision_AnimatedDivision);
// CONCATENATED MODULE: ./node_modules/react-native-web/dist/vendor/react-native/Animated/nodes/AnimatedModulo.js


function AnimatedModulo_inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  subClass.__proto__ = superClass;
}





var AnimatedModulo_AnimatedModulo = function (_AnimatedWithChildren) {
  AnimatedModulo_inheritsLoose(AnimatedModulo, _AnimatedWithChildren);

  function AnimatedModulo(a, modulus) {
    var _this;

    _this = _AnimatedWithChildren.call(this) || this;
    _this._a = a;
    _this._modulus = modulus;
    return _this;
  }

  var _proto = AnimatedModulo.prototype;

  _proto.__makeNative = function __makeNative() {
    this._a.__makeNative();

    _AnimatedWithChildren.prototype.__makeNative.call(this);
  };

  _proto.__getValue = function __getValue() {
    return (this._a.__getValue() % this._modulus + this._modulus) % this._modulus;
  };

  _proto.interpolate = function interpolate(config) {
    return new AnimatedInterpolation["a" /* default */](this, config);
  };

  _proto.__attach = function __attach() {
    this._a.__addChild(this);
  };

  _proto.__detach = function __detach() {
    this._a.__removeChild(this);

    _AnimatedWithChildren.prototype.__detach.call(this);
  };

  _proto.__getNativeConfig = function __getNativeConfig() {
    return {
      type: 'modulus',
      input: this._a.__getNativeTag(),
      modulus: this._modulus
    };
  };

  return AnimatedModulo;
}(AnimatedWithChildren["a" /* default */]);

/* harmony default export */ var nodes_AnimatedModulo = (AnimatedModulo_AnimatedModulo);
// CONCATENATED MODULE: ./node_modules/react-native-web/dist/vendor/react-native/Animated/nodes/AnimatedMultiplication.js


function AnimatedMultiplication_inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  subClass.__proto__ = superClass;
}






var AnimatedMultiplication_AnimatedMultiplication = function (_AnimatedWithChildren) {
  AnimatedMultiplication_inheritsLoose(AnimatedMultiplication, _AnimatedWithChildren);

  function AnimatedMultiplication(a, b) {
    var _this;

    _this = _AnimatedWithChildren.call(this) || this;
    _this._a = typeof a === 'number' ? new AnimatedValue["a" /* default */](a) : a;
    _this._b = typeof b === 'number' ? new AnimatedValue["a" /* default */](b) : b;
    return _this;
  }

  var _proto = AnimatedMultiplication.prototype;

  _proto.__makeNative = function __makeNative() {
    this._a.__makeNative();

    this._b.__makeNative();

    _AnimatedWithChildren.prototype.__makeNative.call(this);
  };

  _proto.__getValue = function __getValue() {
    return this._a.__getValue() * this._b.__getValue();
  };

  _proto.interpolate = function interpolate(config) {
    return new AnimatedInterpolation["a" /* default */](this, config);
  };

  _proto.__attach = function __attach() {
    this._a.__addChild(this);

    this._b.__addChild(this);
  };

  _proto.__detach = function __detach() {
    this._a.__removeChild(this);

    this._b.__removeChild(this);

    _AnimatedWithChildren.prototype.__detach.call(this);
  };

  _proto.__getNativeConfig = function __getNativeConfig() {
    return {
      type: 'multiplication',
      input: [this._a.__getNativeTag(), this._b.__getNativeTag()]
    };
  };

  return AnimatedMultiplication;
}(AnimatedWithChildren["a" /* default */]);

/* harmony default export */ var nodes_AnimatedMultiplication = (AnimatedMultiplication_AnimatedMultiplication);
// EXTERNAL MODULE: ./node_modules/react-native-web/dist/vendor/react-native/Animated/nodes/AnimatedNode.js
var AnimatedNode = __webpack_require__("N/9I");

// CONCATENATED MODULE: ./node_modules/react-native-web/dist/vendor/react-native/Animated/nodes/AnimatedTransform.js


function AnimatedTransform_inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  subClass.__proto__ = superClass;
}





var AnimatedTransform_AnimatedTransform = function (_AnimatedWithChildren) {
  AnimatedTransform_inheritsLoose(AnimatedTransform, _AnimatedWithChildren);

  function AnimatedTransform(transforms) {
    var _this;

    _this = _AnimatedWithChildren.call(this) || this;
    _this._transforms = transforms;
    return _this;
  }

  var _proto = AnimatedTransform.prototype;

  _proto.__makeNative = function __makeNative() {
    _AnimatedWithChildren.prototype.__makeNative.call(this);

    this._transforms.forEach(function (transform) {
      for (var key in transform) {
        var value = transform[key];

        if (value instanceof AnimatedNode["a" /* default */]) {
          value.__makeNative();
        }
      }
    });
  };

  _proto.__getValue = function __getValue() {
    return this._transforms.map(function (transform) {
      var result = {};

      for (var key in transform) {
        var value = transform[key];

        if (value instanceof AnimatedNode["a" /* default */]) {
          result[key] = value.__getValue();
        } else {
          result[key] = value;
        }
      }

      return result;
    });
  };

  _proto.__getAnimatedValue = function __getAnimatedValue() {
    return this._transforms.map(function (transform) {
      var result = {};

      for (var key in transform) {
        var value = transform[key];

        if (value instanceof AnimatedNode["a" /* default */]) {
          result[key] = value.__getAnimatedValue();
        } else {
          result[key] = value;
        }
      }

      return result;
    });
  };

  _proto.__attach = function __attach() {
    var _this2 = this;

    this._transforms.forEach(function (transform) {
      for (var key in transform) {
        var value = transform[key];

        if (value instanceof AnimatedNode["a" /* default */]) {
          value.__addChild(_this2);
        }
      }
    });
  };

  _proto.__detach = function __detach() {
    var _this3 = this;

    this._transforms.forEach(function (transform) {
      for (var key in transform) {
        var value = transform[key];

        if (value instanceof AnimatedNode["a" /* default */]) {
          value.__removeChild(_this3);
        }
      }
    });

    _AnimatedWithChildren.prototype.__detach.call(this);
  };

  _proto.__getNativeConfig = function __getNativeConfig() {
    var transConfigs = [];

    this._transforms.forEach(function (transform) {
      for (var key in transform) {
        var value = transform[key];

        if (value instanceof AnimatedNode["a" /* default */]) {
          transConfigs.push({
            type: 'animated',
            property: key,
            nodeTag: value.__getNativeTag()
          });
        } else {
          transConfigs.push({
            type: 'static',
            property: key,
            value: value
          });
        }
      }
    });

    NativeAnimatedHelper["a" /* default */].validateTransform(transConfigs);
    return {
      type: 'transform',
      transforms: transConfigs
    };
  };

  return AnimatedTransform;
}(AnimatedWithChildren["a" /* default */]);

/* harmony default export */ var nodes_AnimatedTransform = (AnimatedTransform_AnimatedTransform);
// EXTERNAL MODULE: ./node_modules/react-native-web/dist/exports/StyleSheet/index.js + 1 modules
var StyleSheet = __webpack_require__("ckSu");

// CONCATENATED MODULE: ./node_modules/react-native-web/dist/vendor/react-native/Animated/nodes/AnimatedStyle.js


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

function AnimatedStyle_inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  subClass.__proto__ = superClass;
}






var flattenStyle = StyleSheet["a" /* default */].flatten;

var AnimatedStyle_AnimatedStyle = function (_AnimatedWithChildren) {
  AnimatedStyle_inheritsLoose(AnimatedStyle, _AnimatedWithChildren);

  function AnimatedStyle(style) {
    var _this;

    _this = _AnimatedWithChildren.call(this) || this;
    style = flattenStyle(style) || {};

    if (style.transform) {
      style = _objectSpread({}, style, {
        transform: new nodes_AnimatedTransform(style.transform)
      });
    }

    _this._style = style;
    return _this;
  }

  var _proto = AnimatedStyle.prototype;

  _proto._walkStyleAndGetValues = function _walkStyleAndGetValues(style) {
    var updatedStyle = {};

    for (var key in style) {
      var value = style[key];

      if (value instanceof AnimatedNode["a" /* default */]) {
        if (!value.__isNative) {
          updatedStyle[key] = value.__getValue();
        }
      } else if (value && !Array.isArray(value) && typeof value === 'object') {
        updatedStyle[key] = this._walkStyleAndGetValues(value);
      } else {
        updatedStyle[key] = value;
      }
    }

    return updatedStyle;
  };

  _proto.__getValue = function __getValue() {
    return this._walkStyleAndGetValues(this._style);
  };

  _proto._walkStyleAndGetAnimatedValues = function _walkStyleAndGetAnimatedValues(style) {
    var updatedStyle = {};

    for (var key in style) {
      var value = style[key];

      if (value instanceof AnimatedNode["a" /* default */]) {
        updatedStyle[key] = value.__getAnimatedValue();
      } else if (value && !Array.isArray(value) && typeof value === 'object') {
        updatedStyle[key] = this._walkStyleAndGetAnimatedValues(value);
      }
    }

    return updatedStyle;
  };

  _proto.__getAnimatedValue = function __getAnimatedValue() {
    return this._walkStyleAndGetAnimatedValues(this._style);
  };

  _proto.__attach = function __attach() {
    for (var key in this._style) {
      var value = this._style[key];

      if (value instanceof AnimatedNode["a" /* default */]) {
        value.__addChild(this);
      }
    }
  };

  _proto.__detach = function __detach() {
    for (var key in this._style) {
      var value = this._style[key];

      if (value instanceof AnimatedNode["a" /* default */]) {
        value.__removeChild(this);
      }
    }

    _AnimatedWithChildren.prototype.__detach.call(this);
  };

  _proto.__makeNative = function __makeNative() {
    for (var key in this._style) {
      var value = this._style[key];

      if (value instanceof AnimatedNode["a" /* default */]) {
        value.__makeNative();
      }
    }

    _AnimatedWithChildren.prototype.__makeNative.call(this);
  };

  _proto.__getNativeConfig = function __getNativeConfig() {
    var styleConfig = {};

    for (var styleKey in this._style) {
      if (this._style[styleKey] instanceof AnimatedNode["a" /* default */]) {
        var style = this._style[styleKey];

        style.__makeNative();

        styleConfig[styleKey] = style.__getNativeTag();
      }
    }

    NativeAnimatedHelper["a" /* default */].validateStyles(styleConfig);
    return {
      type: 'style',
      style: styleConfig
    };
  };

  return AnimatedStyle;
}(AnimatedWithChildren["a" /* default */]);

/* harmony default export */ var nodes_AnimatedStyle = (AnimatedStyle_AnimatedStyle);
// CONCATENATED MODULE: ./node_modules/react-native-web/dist/vendor/react-native/Animated/nodes/AnimatedProps.js


function AnimatedProps_ownKeys(object, enumerableOnly) {
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

function AnimatedProps_objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      AnimatedProps_ownKeys(Object(source), true).forEach(function (key) {
        AnimatedProps_defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      AnimatedProps_ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

function AnimatedProps_defineProperty(obj, key, value) {
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

function AnimatedProps_inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  subClass.__proto__ = superClass;
}








var AnimatedProps_AnimatedProps = function (_AnimatedNode) {
  AnimatedProps_inheritsLoose(AnimatedProps, _AnimatedNode);

  function AnimatedProps(props, callback) {
    var _this;

    _this = _AnimatedNode.call(this) || this;

    if (props.style) {
      props = AnimatedProps_objectSpread({}, props, {
        style: new nodes_AnimatedStyle(props.style)
      });
    }

    _this._props = props;
    _this._callback = callback;

    _this.__attach();

    return _this;
  }

  var _proto = AnimatedProps.prototype;

  _proto.__getValue = function __getValue() {
    var props = {};

    for (var key in this._props) {
      var value = this._props[key];

      if (value instanceof AnimatedNode["a" /* default */]) {
        if (!value.__isNative || value instanceof nodes_AnimatedStyle) {
          props[key] = value.__getValue();
        }
      } else if (value instanceof AnimatedEvent_AnimatedEvent) {
        props[key] = value.__getHandler();
      } else {
        props[key] = value;
      }
    }

    return props;
  };

  _proto.__getAnimatedValue = function __getAnimatedValue() {
    var props = {};

    for (var key in this._props) {
      var value = this._props[key];

      if (value instanceof AnimatedNode["a" /* default */]) {
        props[key] = value.__getAnimatedValue();
      }
    }

    return props;
  };

  _proto.__attach = function __attach() {
    for (var key in this._props) {
      var value = this._props[key];

      if (value instanceof AnimatedNode["a" /* default */]) {
        value.__addChild(this);
      }
    }
  };

  _proto.__detach = function __detach() {
    if (this.__isNative && this._animatedView) {
      this.__disconnectAnimatedView();
    }

    for (var key in this._props) {
      var value = this._props[key];

      if (value instanceof AnimatedNode["a" /* default */]) {
        value.__removeChild(this);
      }
    }

    _AnimatedNode.prototype.__detach.call(this);
  };

  _proto.update = function update() {
    this._callback();
  };

  _proto.__makeNative = function __makeNative() {
    if (!this.__isNative) {
      this.__isNative = true;

      for (var key in this._props) {
        var value = this._props[key];

        if (value instanceof AnimatedNode["a" /* default */]) {
          value.__makeNative();
        }
      }

      if (this._animatedView) {
        this.__connectAnimatedView();
      }
    }
  };

  _proto.setNativeView = function setNativeView(animatedView) {
    if (this._animatedView === animatedView) {
      return;
    }

    this._animatedView = animatedView;

    if (this.__isNative) {
      this.__connectAnimatedView();
    }
  };

  _proto.__connectAnimatedView = function __connectAnimatedView() {
    invariant_default()(this.__isNative, 'Expected node to be marked as "native"');
    var nativeViewTag = Object(findNodeHandle["a" /* default */])(this._animatedView);
    invariant_default()(nativeViewTag != null, 'Unable to locate attached view in the native tree');
    NativeAnimatedHelper["a" /* default */].API.connectAnimatedNodeToView(this.__getNativeTag(), nativeViewTag);
  };

  _proto.__disconnectAnimatedView = function __disconnectAnimatedView() {
    invariant_default()(this.__isNative, 'Expected node to be marked as "native"');
    var nativeViewTag = Object(findNodeHandle["a" /* default */])(this._animatedView);
    invariant_default()(nativeViewTag != null, 'Unable to locate attached view in the native tree');
    NativeAnimatedHelper["a" /* default */].API.disconnectAnimatedNodeFromView(this.__getNativeTag(), nativeViewTag);
  };

  _proto.__getNativeConfig = function __getNativeConfig() {
    var propsConfig = {};

    for (var propKey in this._props) {
      var value = this._props[propKey];

      if (value instanceof AnimatedNode["a" /* default */]) {
        value.__makeNative();

        propsConfig[propKey] = value.__getNativeTag();
      }
    }

    return {
      type: 'props',
      props: propsConfig
    };
  };

  return AnimatedProps;
}(AnimatedNode["a" /* default */]);

/* harmony default export */ var nodes_AnimatedProps = (AnimatedProps_AnimatedProps);
// CONCATENATED MODULE: ./node_modules/react-native-web/dist/vendor/react-native/Animated/nodes/AnimatedSubtraction.js


function AnimatedSubtraction_inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  subClass.__proto__ = superClass;
}






var AnimatedSubtraction_AnimatedSubtraction = function (_AnimatedWithChildren) {
  AnimatedSubtraction_inheritsLoose(AnimatedSubtraction, _AnimatedWithChildren);

  function AnimatedSubtraction(a, b) {
    var _this;

    _this = _AnimatedWithChildren.call(this) || this;
    _this._a = typeof a === 'number' ? new AnimatedValue["a" /* default */](a) : a;
    _this._b = typeof b === 'number' ? new AnimatedValue["a" /* default */](b) : b;
    return _this;
  }

  var _proto = AnimatedSubtraction.prototype;

  _proto.__makeNative = function __makeNative() {
    this._a.__makeNative();

    this._b.__makeNative();

    _AnimatedWithChildren.prototype.__makeNative.call(this);
  };

  _proto.__getValue = function __getValue() {
    return this._a.__getValue() - this._b.__getValue();
  };

  _proto.interpolate = function interpolate(config) {
    return new AnimatedInterpolation["a" /* default */](this, config);
  };

  _proto.__attach = function __attach() {
    this._a.__addChild(this);

    this._b.__addChild(this);
  };

  _proto.__detach = function __detach() {
    this._a.__removeChild(this);

    this._b.__removeChild(this);

    _AnimatedWithChildren.prototype.__detach.call(this);
  };

  _proto.__getNativeConfig = function __getNativeConfig() {
    return {
      type: 'subtraction',
      input: [this._a.__getNativeTag(), this._b.__getNativeTag()]
    };
  };

  return AnimatedSubtraction;
}(AnimatedWithChildren["a" /* default */]);

/* harmony default export */ var nodes_AnimatedSubtraction = (AnimatedSubtraction_AnimatedSubtraction);
// CONCATENATED MODULE: ./node_modules/react-native-web/dist/vendor/react-native/Animated/nodes/AnimatedTracking.js


function AnimatedTracking_ownKeys(object, enumerableOnly) {
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

function AnimatedTracking_objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      AnimatedTracking_ownKeys(Object(source), true).forEach(function (key) {
        AnimatedTracking_defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      AnimatedTracking_ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

function AnimatedTracking_defineProperty(obj, key, value) {
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

function AnimatedTracking_inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  subClass.__proto__ = superClass;
}





var AnimatedTracking_AnimatedTracking = function (_AnimatedNode) {
  AnimatedTracking_inheritsLoose(AnimatedTracking, _AnimatedNode);

  function AnimatedTracking(value, parent, animationClass, animationConfig, callback) {
    var _this;

    _this = _AnimatedNode.call(this) || this;
    _this._value = value;
    _this._parent = parent;
    _this._animationClass = animationClass;
    _this._animationConfig = animationConfig;
    _this._useNativeDriver = Object(NativeAnimatedHelper["c" /* shouldUseNativeDriver */])(animationConfig);
    _this._callback = callback;

    _this.__attach();

    return _this;
  }

  var _proto = AnimatedTracking.prototype;

  _proto.__makeNative = function __makeNative() {
    this.__isNative = true;

    this._parent.__makeNative();

    _AnimatedNode.prototype.__makeNative.call(this);

    this._value.__makeNative();
  };

  _proto.__getValue = function __getValue() {
    return this._parent.__getValue();
  };

  _proto.__attach = function __attach() {
    this._parent.__addChild(this);

    if (this._useNativeDriver) {
      this.__makeNative();
    }
  };

  _proto.__detach = function __detach() {
    this._parent.__removeChild(this);

    _AnimatedNode.prototype.__detach.call(this);
  };

  _proto.update = function update() {
    this._value.animate(new this._animationClass(AnimatedTracking_objectSpread({}, this._animationConfig, {
      toValue: this._animationConfig.toValue.__getValue()
    })), this._callback);
  };

  _proto.__getNativeConfig = function __getNativeConfig() {
    var animation = new this._animationClass(AnimatedTracking_objectSpread({}, this._animationConfig, {
      toValue: undefined
    }));

    var animationConfig = animation.__getNativeAnimationConfig();

    return {
      type: 'tracking',
      animationId: Object(NativeAnimatedHelper["b" /* generateNewAnimationId */])(),
      animationConfig: animationConfig,
      toValue: this._parent.__getNativeTag(),
      value: this._value.__getNativeTag()
    };
  };

  return AnimatedTracking;
}(AnimatedNode["a" /* default */]);

/* harmony default export */ var nodes_AnimatedTracking = (AnimatedTracking_AnimatedTracking);
// EXTERNAL MODULE: ./node_modules/react-native-web/dist/vendor/react-native/Animated/nodes/AnimatedValueXY.js
var AnimatedValueXY = __webpack_require__("+ReS");

// EXTERNAL MODULE: ./node_modules/react-native-web/dist/vendor/react-native/Animated/animations/DecayAnimation.js
var DecayAnimation = __webpack_require__("/IJh");

// EXTERNAL MODULE: ./node_modules/react-native-web/dist/vendor/react-native/Animated/animations/SpringAnimation.js
var SpringAnimation = __webpack_require__("g7Tt");

// EXTERNAL MODULE: ./node_modules/react-native-web/dist/vendor/react-native/Animated/animations/TimingAnimation.js
var TimingAnimation = __webpack_require__("Rg59");

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__("q1tI");
var react_default = /*#__PURE__*/__webpack_require__.n(react);

// EXTERNAL MODULE: ./node_modules/react-native-web/dist/modules/mergeRefs/index.js
var mergeRefs = __webpack_require__("VKdU");

// CONCATENATED MODULE: ./node_modules/react-native-web/dist/vendor/react-native/Animated/createAnimatedComponent.js


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

function createAnimatedComponent_inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  subClass.__proto__ = superClass;
}







function createAnimatedComponent(Component, defaultProps) {
  invariant_default()(typeof Component !== 'function' || Component.prototype && Component.prototype.isReactComponent, '`createAnimatedComponent` does not support stateless functional components; ' + 'use a class component instead.');

  var AnimatedComponent = function (_React$Component) {
    createAnimatedComponent_inheritsLoose(AnimatedComponent, _React$Component);

    function AnimatedComponent(props) {
      var _this;

      _this = _React$Component.call(this, props) || this;
      _this._invokeAnimatedPropsCallbackOnMount = false;
      _this._eventDetachers = [];

      _this._animatedPropsCallback = function () {
        if (_this._component == null) {
          _this._invokeAnimatedPropsCallbackOnMount = true;
        } else if (AnimatedComponent.__skipSetNativeProps_FOR_TESTS_ONLY || typeof _this._component.setNativeProps !== 'function') {
          _this.forceUpdate();
        } else if (!_this._propsAnimated.__isNative) {
          _this._component.setNativeProps(_this._propsAnimated.__getAnimatedValue());
        } else {
          throw new Error('Attempting to run JS driven animation on animated ' + 'node that has been moved to "native" earlier by starting an ' + 'animation with `useNativeDriver: true`');
        }
      };

      _this._setComponentRef = Object(mergeRefs["a" /* default */])(_this.props.forwardedRef, function (ref) {
        _this._prevComponent = _this._component;
        _this._component = ref;

        if (ref != null && ref.getNode == null) {
          ref.getNode = function () {
            var _ref$constructor$name;

            console.warn('%s: Calling `getNode()` on the ref of an Animated component ' + 'is no longer necessary. You can now directly use the ref ' + 'instead. This method will be removed in a future release.', (_ref$constructor$name = ref.constructor.name) !== null && _ref$constructor$name !== void 0 ? _ref$constructor$name : '<<anonymous>>');
            return ref;
          };
        }
      });
      return _this;
    }

    var _proto = AnimatedComponent.prototype;

    _proto.componentWillUnmount = function componentWillUnmount() {
      this._propsAnimated && this._propsAnimated.__detach();

      this._detachNativeEvents();
    };

    _proto.UNSAFE_componentWillMount = function UNSAFE_componentWillMount() {
      this._attachProps(this.props);
    };

    _proto.componentDidMount = function componentDidMount() {
      if (this._invokeAnimatedPropsCallbackOnMount) {
        this._invokeAnimatedPropsCallbackOnMount = false;

        this._animatedPropsCallback();
      }

      this._propsAnimated.setNativeView(this._component);

      this._attachNativeEvents();
    };

    _proto._attachNativeEvents = function _attachNativeEvents() {
      var _this2 = this;

      var scrollableNode = this._component && this._component.getScrollableNode ? this._component.getScrollableNode() : this._component;

      var _loop = function _loop(key) {
        var prop = _this2.props[key];

        if (prop instanceof AnimatedEvent_AnimatedEvent && prop.__isNative) {
          prop.__attach(scrollableNode, key);

          _this2._eventDetachers.push(function () {
            return prop.__detach(scrollableNode, key);
          });
        }
      };

      for (var key in this.props) {
        _loop(key);
      }
    };

    _proto._detachNativeEvents = function _detachNativeEvents() {
      this._eventDetachers.forEach(function (remove) {
        return remove();
      });

      this._eventDetachers = [];
    };

    _proto._attachProps = function _attachProps(nextProps) {
      var oldPropsAnimated = this._propsAnimated;
      this._propsAnimated = new nodes_AnimatedProps(nextProps, this._animatedPropsCallback);
      oldPropsAnimated && oldPropsAnimated.__detach();
    };

    _proto.UNSAFE_componentWillReceiveProps = function UNSAFE_componentWillReceiveProps(newProps) {
      this._attachProps(newProps);
    };

    _proto.componentDidUpdate = function componentDidUpdate(prevProps) {
      if (this._component !== this._prevComponent) {
        this._propsAnimated.setNativeView(this._component);
      }

      if (this._component !== this._prevComponent || prevProps !== this.props) {
        this._detachNativeEvents();

        this._attachNativeEvents();
      }
    };

    _proto.render = function render() {
      var props = this._propsAnimated.__getValue();

      return react_default.a.createElement(Component, _extends({}, defaultProps, props, {
        ref: this._setComponentRef
      }));
    };

    return AnimatedComponent;
  }(react_default.a.Component);

  AnimatedComponent.__skipSetNativeProps_FOR_TESTS_ONLY = false;
  var propTypes = Component.propTypes;
  return react_default.a.forwardRef(function AnimatedComponentWrapper(props, ref) {
    return react_default.a.createElement(AnimatedComponent, _extends({}, props, ref == null ? null : {
      forwardedRef: ref
    }));
  });
}

/* harmony default export */ var Animated_createAnimatedComponent = (createAnimatedComponent);
// CONCATENATED MODULE: ./node_modules/react-native-web/dist/vendor/react-native/Animated/AnimatedImplementation.js


function AnimatedImplementation_ownKeys(object, enumerableOnly) {
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

function AnimatedImplementation_objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      AnimatedImplementation_ownKeys(Object(source), true).forEach(function (key) {
        AnimatedImplementation_defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      AnimatedImplementation_ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

function AnimatedImplementation_defineProperty(obj, key, value) {
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



















var AnimatedImplementation_add = function add(a, b) {
  return new nodes_AnimatedAddition(a, b);
};

var AnimatedImplementation_subtract = function subtract(a, b) {
  return new nodes_AnimatedSubtraction(a, b);
};

var AnimatedImplementation_divide = function divide(a, b) {
  return new nodes_AnimatedDivision(a, b);
};

var AnimatedImplementation_multiply = function multiply(a, b) {
  return new nodes_AnimatedMultiplication(a, b);
};

var AnimatedImplementation_modulo = function modulo(a, modulus) {
  return new nodes_AnimatedModulo(a, modulus);
};

var AnimatedImplementation_diffClamp = function diffClamp(a, min, max) {
  return new nodes_AnimatedDiffClamp(a, min, max);
};

var _combineCallbacks = function _combineCallbacks(callback, config) {
  if (callback && config.onComplete) {
    return function () {
      config.onComplete && config.onComplete.apply(config, arguments);
      callback && callback.apply(void 0, arguments);
    };
  } else {
    return callback || config.onComplete;
  }
};

var AnimatedImplementation_maybeVectorAnim = function maybeVectorAnim(value, config, anim) {
  if (value instanceof AnimatedValueXY["a" /* default */]) {
    var configX = AnimatedImplementation_objectSpread({}, config);

    var configY = AnimatedImplementation_objectSpread({}, config);

    for (var key in config) {
      var _config$key = config[key],
          x = _config$key.x,
          y = _config$key.y;

      if (x !== undefined && y !== undefined) {
        configX[key] = x;
        configY[key] = y;
      }
    }

    var aX = anim(value.x, configX);
    var aY = anim(value.y, configY);
    return parallel([aX, aY], {
      stopTogether: false
    });
  }

  return null;
};

var AnimatedImplementation_spring = function spring(value, config) {
  var _start = function start(animatedValue, configuration, callback) {
    callback = _combineCallbacks(callback, configuration);
    var singleValue = animatedValue;
    var singleConfig = configuration;
    singleValue.stopTracking();

    if (configuration.toValue instanceof AnimatedNode["a" /* default */]) {
      singleValue.track(new nodes_AnimatedTracking(singleValue, configuration.toValue, SpringAnimation["a" /* default */], singleConfig, callback));
    } else {
      singleValue.animate(new SpringAnimation["a" /* default */](singleConfig), callback);
    }
  };

  return AnimatedImplementation_maybeVectorAnim(value, config, spring) || {
    start: function start(callback) {
      _start(value, config, callback);
    },
    stop: function stop() {
      value.stopAnimation();
    },
    reset: function reset() {
      value.resetAnimation();
    },
    _startNativeLoop: function _startNativeLoop(iterations) {
      var singleConfig = AnimatedImplementation_objectSpread({}, config, {
        iterations: iterations
      });

      _start(value, singleConfig);
    },
    _isUsingNativeDriver: function _isUsingNativeDriver() {
      return config.useNativeDriver || false;
    }
  };
};

var AnimatedImplementation_timing = function timing(value, config) {
  var _start2 = function start(animatedValue, configuration, callback) {
    callback = _combineCallbacks(callback, configuration);
    var singleValue = animatedValue;
    var singleConfig = configuration;
    singleValue.stopTracking();

    if (configuration.toValue instanceof AnimatedNode["a" /* default */]) {
      singleValue.track(new nodes_AnimatedTracking(singleValue, configuration.toValue, TimingAnimation["a" /* default */], singleConfig, callback));
    } else {
      singleValue.animate(new TimingAnimation["a" /* default */](singleConfig), callback);
    }
  };

  return AnimatedImplementation_maybeVectorAnim(value, config, timing) || {
    start: function start(callback) {
      _start2(value, config, callback);
    },
    stop: function stop() {
      value.stopAnimation();
    },
    reset: function reset() {
      value.resetAnimation();
    },
    _startNativeLoop: function _startNativeLoop(iterations) {
      var singleConfig = AnimatedImplementation_objectSpread({}, config, {
        iterations: iterations
      });

      _start2(value, singleConfig);
    },
    _isUsingNativeDriver: function _isUsingNativeDriver() {
      return config.useNativeDriver || false;
    }
  };
};

var AnimatedImplementation_decay = function decay(value, config) {
  var _start3 = function start(animatedValue, configuration, callback) {
    callback = _combineCallbacks(callback, configuration);
    var singleValue = animatedValue;
    var singleConfig = configuration;
    singleValue.stopTracking();
    singleValue.animate(new DecayAnimation["a" /* default */](singleConfig), callback);
  };

  return AnimatedImplementation_maybeVectorAnim(value, config, decay) || {
    start: function start(callback) {
      _start3(value, config, callback);
    },
    stop: function stop() {
      value.stopAnimation();
    },
    reset: function reset() {
      value.resetAnimation();
    },
    _startNativeLoop: function _startNativeLoop(iterations) {
      var singleConfig = AnimatedImplementation_objectSpread({}, config, {
        iterations: iterations
      });

      _start3(value, singleConfig);
    },
    _isUsingNativeDriver: function _isUsingNativeDriver() {
      return config.useNativeDriver || false;
    }
  };
};

var sequence = function sequence(animations) {
  var current = 0;
  return {
    start: function start(callback) {
      var onComplete = function onComplete(result) {
        if (!result.finished) {
          callback && callback(result);
          return;
        }

        current++;

        if (current === animations.length) {
          callback && callback(result);
          return;
        }

        animations[current].start(onComplete);
      };

      if (animations.length === 0) {
        callback && callback({
          finished: true
        });
      } else {
        animations[current].start(onComplete);
      }
    },
    stop: function stop() {
      if (current < animations.length) {
        animations[current].stop();
      }
    },
    reset: function reset() {
      animations.forEach(function (animation, idx) {
        if (idx <= current) {
          animation.reset();
        }
      });
      current = 0;
    },
    _startNativeLoop: function _startNativeLoop() {
      throw new Error('Loops run using the native driver cannot contain Animated.sequence animations');
    },
    _isUsingNativeDriver: function _isUsingNativeDriver() {
      return false;
    }
  };
};

var parallel = function parallel(animations, config) {
  var doneCount = 0;
  var hasEnded = {};
  var stopTogether = !(config && config.stopTogether === false);
  var result = {
    start: function start(callback) {
      if (doneCount === animations.length) {
        callback && callback({
          finished: true
        });
        return;
      }

      animations.forEach(function (animation, idx) {
        var cb = function cb(endResult) {
          hasEnded[idx] = true;
          doneCount++;

          if (doneCount === animations.length) {
            doneCount = 0;
            callback && callback(endResult);
            return;
          }

          if (!endResult.finished && stopTogether) {
            result.stop();
          }
        };

        if (!animation) {
          cb({
            finished: true
          });
        } else {
          animation.start(cb);
        }
      });
    },
    stop: function stop() {
      animations.forEach(function (animation, idx) {
        !hasEnded[idx] && animation.stop();
        hasEnded[idx] = true;
      });
    },
    reset: function reset() {
      animations.forEach(function (animation, idx) {
        animation.reset();
        hasEnded[idx] = false;
        doneCount = 0;
      });
    },
    _startNativeLoop: function _startNativeLoop() {
      throw new Error('Loops run using the native driver cannot contain Animated.parallel animations');
    },
    _isUsingNativeDriver: function _isUsingNativeDriver() {
      return false;
    }
  };
  return result;
};

var AnimatedImplementation_delay = function delay(time) {
  return AnimatedImplementation_timing(new AnimatedValue["a" /* default */](0), {
    toValue: 0,
    delay: time,
    duration: 0
  });
};

var stagger = function stagger(time, animations) {
  return parallel(animations.map(function (animation, i) {
    return sequence([AnimatedImplementation_delay(time * i), animation]);
  }));
};

var loop = function loop(animation, _temp) {
  var _ref = _temp === void 0 ? {} : _temp,
      _ref$iterations = _ref.iterations,
      iterations = _ref$iterations === void 0 ? -1 : _ref$iterations,
      _ref$resetBeforeItera = _ref.resetBeforeIteration,
      resetBeforeIteration = _ref$resetBeforeItera === void 0 ? true : _ref$resetBeforeItera;

  var isFinished = false;
  var iterationsSoFar = 0;
  return {
    start: function start(callback) {
      var restart = function restart(result) {
        if (result === void 0) {
          result = {
            finished: true
          };
        }

        if (isFinished || iterationsSoFar === iterations || result.finished === false) {
          callback && callback(result);
        } else {
          iterationsSoFar++;
          resetBeforeIteration && animation.reset();
          animation.start(restart);
        }
      };

      if (!animation || iterations === 0) {
        callback && callback({
          finished: true
        });
      } else {
        if (animation._isUsingNativeDriver()) {
          animation._startNativeLoop(iterations);
        } else {
          restart();
        }
      }
    },
    stop: function stop() {
      isFinished = true;
      animation.stop();
    },
    reset: function reset() {
      iterationsSoFar = 0;
      isFinished = false;
      animation.reset();
    },
    _startNativeLoop: function _startNativeLoop() {
      throw new Error('Loops run using the native driver cannot contain Animated.loop animations');
    },
    _isUsingNativeDriver: function _isUsingNativeDriver() {
      return animation._isUsingNativeDriver();
    }
  };
};

function forkEvent(event, listener) {
  if (!event) {
    return listener;
  } else if (event instanceof AnimatedEvent_AnimatedEvent) {
    event.__addListener(listener);

    return event;
  } else {
    return function () {
      typeof event === 'function' && event.apply(void 0, arguments);
      listener.apply(void 0, arguments);
    };
  }
}

function unforkEvent(event, listener) {
  if (event && event instanceof AnimatedEvent_AnimatedEvent) {
    event.__removeListener(listener);
  }
}

var AnimatedImplementation_event = function event(argMapping, config) {
  var animatedEvent = new AnimatedEvent_AnimatedEvent(argMapping, config);

  if (animatedEvent.__isNative) {
    return animatedEvent;
  } else {
    return animatedEvent.__getHandler();
  }
};

var AnimatedImplementation = {
  Value: AnimatedValue["a" /* default */],
  ValueXY: AnimatedValueXY["a" /* default */],
  Interpolation: AnimatedInterpolation["a" /* default */],
  Node: AnimatedNode["a" /* default */],
  decay: AnimatedImplementation_decay,
  timing: AnimatedImplementation_timing,
  spring: AnimatedImplementation_spring,
  add: AnimatedImplementation_add,
  subtract: AnimatedImplementation_subtract,
  divide: AnimatedImplementation_divide,
  multiply: AnimatedImplementation_multiply,
  modulo: AnimatedImplementation_modulo,
  diffClamp: AnimatedImplementation_diffClamp,
  delay: AnimatedImplementation_delay,
  sequence: sequence,
  parallel: parallel,
  stagger: stagger,
  loop: loop,
  event: AnimatedImplementation_event,
  createAnimatedComponent: Animated_createAnimatedComponent,
  attachNativeEvent: attachNativeEvent,
  forkEvent: forkEvent,
  unforkEvent: unforkEvent,
  Event: AnimatedEvent_AnimatedEvent,
  __PropsOnlyForTests: nodes_AnimatedProps
};
/* harmony default export */ var Animated_AnimatedImplementation = (AnimatedImplementation);
// CONCATENATED MODULE: ./node_modules/react-native-web/dist/vendor/react-native/deepDiffer/index.js


var deepDiffer = function deepDiffer(one, two, maxDepth) {
  if (maxDepth === void 0) {
    maxDepth = -1;
  }

  if (maxDepth === 0) {
    return true;
  }

  if (one === two) {
    return false;
  }

  if (typeof one === 'function' && typeof two === 'function') {
    return false;
  }

  if (typeof one !== 'object' || one === null) {
    return one !== two;
  }

  if (typeof two !== 'object' || two === null) {
    return true;
  }

  if (one.constructor !== two.constructor) {
    return true;
  }

  if (Array.isArray(one)) {
    var len = one.length;

    if (two.length !== len) {
      return true;
    }

    for (var ii = 0; ii < len; ii++) {
      if (deepDiffer(one[ii], two[ii], maxDepth - 1)) {
        return true;
      }
    }
  } else {
    for (var key in one) {
      if (deepDiffer(one[key], two[key], maxDepth - 1)) {
        return true;
      }
    }

    for (var twoKey in two) {
      if (one[twoKey] === undefined && two[twoKey] !== undefined) {
        return true;
      }
    }
  }

  return false;
};

/* harmony default export */ var react_native_deepDiffer = (deepDiffer);
// EXTERNAL MODULE: ./node_modules/react-native-web/dist/exports/View/index.js
var View = __webpack_require__("jzUF");

// EXTERNAL MODULE: ./node_modules/react-native-web/dist/exports/InteractionManager/index.js + 1 modules
var InteractionManager = __webpack_require__("Qfxl");

// CONCATENATED MODULE: ./node_modules/react-native-web/dist/vendor/react-native/Batchinator/index.js




var Batchinator_Batchinator = function () {
  function Batchinator(callback, delayMS) {
    this._delay = delayMS;
    this._callback = callback;
  }

  var _proto = Batchinator.prototype;

  _proto.dispose = function dispose(options) {
    if (options === void 0) {
      options = {
        abort: false
      };
    }

    if (this._taskHandle) {
      this._taskHandle.cancel();

      if (!options.abort) {
        this._callback();
      }

      this._taskHandle = null;
    }
  };

  _proto.schedule = function schedule() {
    var _this = this;

    if (this._taskHandle) {
      return;
    }

    var timeoutHandle = setTimeout(function () {
      _this._taskHandle = InteractionManager["a" /* default */].runAfterInteractions(function () {
        _this._taskHandle = null;

        _this._callback();
      });
    }, this._delay);
    this._taskHandle = {
      cancel: function cancel() {
        return clearTimeout(timeoutHandle);
      }
    };
  };

  return Batchinator;
}();

/* harmony default export */ var react_native_Batchinator = (Batchinator_Batchinator);
// EXTERNAL MODULE: ./node_modules/fbjs/lib/performanceNow.js
var performanceNow = __webpack_require__("z0uF");
var performanceNow_default = /*#__PURE__*/__webpack_require__.n(performanceNow);

// EXTERNAL MODULE: ./node_modules/fbjs/lib/warning.js
var warning = __webpack_require__("2mcs");
var warning_default = /*#__PURE__*/__webpack_require__.n(warning);

// CONCATENATED MODULE: ./node_modules/react-native-web/dist/vendor/react-native/FillRateHelper/index.js


function FillRateHelper_ownKeys(object, enumerableOnly) {
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

function FillRateHelper_objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      FillRateHelper_ownKeys(Object(source), true).forEach(function (key) {
        FillRateHelper_defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      FillRateHelper_ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

function FillRateHelper_defineProperty(obj, key, value) {
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




var Info = function Info() {
  this.any_blank_count = 0;
  this.any_blank_ms = 0;
  this.any_blank_speed_sum = 0;
  this.mostly_blank_count = 0;
  this.mostly_blank_ms = 0;
  this.pixels_blank = 0;
  this.pixels_sampled = 0;
  this.pixels_scrolled = 0;
  this.total_time_spent = 0;
  this.sample_count = 0;
};

var DEBUG = false;
var _listeners = [];
var _minSampleCount = 10;

var _sampleRate = DEBUG ? 1 : null;

var FillRateHelper_FillRateHelper = function () {
  FillRateHelper.addListener = function addListener(callback) {
    warning_default()(_sampleRate !== null, 'Call `FillRateHelper.setSampleRate` before `addListener`.');

    _listeners.push(callback);

    return {
      remove: function remove() {
        _listeners = _listeners.filter(function (listener) {
          return callback !== listener;
        });
      }
    };
  };

  FillRateHelper.setSampleRate = function setSampleRate(sampleRate) {
    _sampleRate = sampleRate;
  };

  FillRateHelper.setMinSampleCount = function setMinSampleCount(minSampleCount) {
    _minSampleCount = minSampleCount;
  };

  function FillRateHelper(getFrameMetrics) {
    this._anyBlankStartTime = null;
    this._enabled = false;
    this._info = new Info();
    this._mostlyBlankStartTime = null;
    this._samplesStartTime = null;
    this._getFrameMetrics = getFrameMetrics;
    this._enabled = (_sampleRate || 0) > Math.random();

    this._resetData();
  }

  var _proto = FillRateHelper.prototype;

  _proto.activate = function activate() {
    if (this._enabled && this._samplesStartTime == null) {
      DEBUG && console.debug('FillRateHelper: activate');
      this._samplesStartTime = performanceNow_default()();
    }
  };

  _proto.deactivateAndFlush = function deactivateAndFlush() {
    if (!this._enabled) {
      return;
    }

    var start = this._samplesStartTime;

    if (start == null) {
      DEBUG && console.debug('FillRateHelper: bail on deactivate with no start time');
      return;
    }

    if (this._info.sample_count < _minSampleCount) {
      this._resetData();

      return;
    }

    var total_time_spent = performanceNow_default()() - start;

    var info = FillRateHelper_objectSpread({}, this._info, {
      total_time_spent: total_time_spent
    });

    if (DEBUG) {
      var derived = {
        avg_blankness: this._info.pixels_blank / this._info.pixels_sampled,
        avg_speed: this._info.pixels_scrolled / (total_time_spent / 1000),
        avg_speed_when_any_blank: this._info.any_blank_speed_sum / this._info.any_blank_count,
        any_blank_per_min: this._info.any_blank_count / (total_time_spent / 1000 / 60),
        any_blank_time_frac: this._info.any_blank_ms / total_time_spent,
        mostly_blank_per_min: this._info.mostly_blank_count / (total_time_spent / 1000 / 60),
        mostly_blank_time_frac: this._info.mostly_blank_ms / total_time_spent
      };

      for (var key in derived) {
        derived[key] = Math.round(1000 * derived[key]) / 1000;
      }

      console.debug('FillRateHelper deactivateAndFlush: ', {
        derived: derived,
        info: info
      });
    }

    _listeners.forEach(function (listener) {
      return listener(info);
    });

    this._resetData();
  };

  _proto.computeBlankness = function computeBlankness(props, state, scrollMetrics) {
    if (!this._enabled || props.getItemCount(props.data) === 0 || this._samplesStartTime == null) {
      return 0;
    }

    var dOffset = scrollMetrics.dOffset,
        offset = scrollMetrics.offset,
        velocity = scrollMetrics.velocity,
        visibleLength = scrollMetrics.visibleLength;
    this._info.sample_count++;
    this._info.pixels_sampled += Math.round(visibleLength);
    this._info.pixels_scrolled += Math.round(Math.abs(dOffset));
    var scrollSpeed = Math.round(Math.abs(velocity) * 1000);
    var now = performanceNow_default()();

    if (this._anyBlankStartTime != null) {
      this._info.any_blank_ms += now - this._anyBlankStartTime;
    }

    this._anyBlankStartTime = null;

    if (this._mostlyBlankStartTime != null) {
      this._info.mostly_blank_ms += now - this._mostlyBlankStartTime;
    }

    this._mostlyBlankStartTime = null;
    var blankTop = 0;
    var first = state.first;

    var firstFrame = this._getFrameMetrics(first);

    while (first <= state.last && (!firstFrame || !firstFrame.inLayout)) {
      firstFrame = this._getFrameMetrics(first);
      first++;
    }

    if (firstFrame && first > 0) {
      blankTop = Math.min(visibleLength, Math.max(0, firstFrame.offset - offset));
    }

    var blankBottom = 0;
    var last = state.last;

    var lastFrame = this._getFrameMetrics(last);

    while (last >= state.first && (!lastFrame || !lastFrame.inLayout)) {
      lastFrame = this._getFrameMetrics(last);
      last--;
    }

    if (lastFrame && last < props.getItemCount(props.data) - 1) {
      var bottomEdge = lastFrame.offset + lastFrame.length;
      blankBottom = Math.min(visibleLength, Math.max(0, offset + visibleLength - bottomEdge));
    }

    var pixels_blank = Math.round(blankTop + blankBottom);
    var blankness = pixels_blank / visibleLength;

    if (blankness > 0) {
      this._anyBlankStartTime = now;
      this._info.any_blank_speed_sum += scrollSpeed;
      this._info.any_blank_count++;
      this._info.pixels_blank += pixels_blank;

      if (blankness > 0.5) {
        this._mostlyBlankStartTime = now;
        this._info.mostly_blank_count++;
      }
    } else if (scrollSpeed < 0.01 || Math.abs(dOffset) < 1) {
      this.deactivateAndFlush();
    }

    return blankness;
  };

  _proto.enabled = function enabled() {
    return this._enabled;
  };

  _proto._resetData = function _resetData() {
    this._anyBlankStartTime = null;
    this._info = new Info();
    this._mostlyBlankStartTime = null;
    this._samplesStartTime = null;
  };

  return FillRateHelper;
}();

/* harmony default export */ var react_native_FillRateHelper = (FillRateHelper_FillRateHelper);
// EXTERNAL MODULE: ./node_modules/prop-types/index.js
var prop_types = __webpack_require__("17x9");
var prop_types_default = /*#__PURE__*/__webpack_require__.n(prop_types);

// CONCATENATED MODULE: ./node_modules/react-native-web/dist/exports/RefreshControl/index.js
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




function RefreshControl(props) {
  var colors = props.colors,
      enabled = props.enabled,
      onRefresh = props.onRefresh,
      progressBackgroundColor = props.progressBackgroundColor,
      progressViewOffset = props.progressViewOffset,
      refreshing = props.refreshing,
      size = props.size,
      tintColor = props.tintColor,
      title = props.title,
      titleColor = props.titleColor,
      rest = _objectWithoutPropertiesLoose(props, ["colors", "enabled", "onRefresh", "progressBackgroundColor", "progressViewOffset", "refreshing", "size", "tintColor", "title", "titleColor"]);

  return react_default.a.createElement(View["a" /* default */], rest);
}

/* harmony default export */ var exports_RefreshControl = (RefreshControl);
// EXTERNAL MODULE: ./node_modules/create-react-class/index.js
var create_react_class = __webpack_require__("fhzG");
var create_react_class_default = /*#__PURE__*/__webpack_require__.n(create_react_class);

// EXTERNAL MODULE: ./node_modules/react-native-web/dist/exports/UIManager/index.js + 2 modules
var UIManager = __webpack_require__("56YO");

// CONCATENATED MODULE: ./node_modules/react-native-web/dist/modules/TextInputState/index.js

var TextInputState = {
  _currentlyFocusedNode: null,
  currentlyFocusedField: function currentlyFocusedField() {
    if (document.activeElement !== this._currentlyFocusedNode) {
      this._currentlyFocusedNode = null;
    }

    return this._currentlyFocusedNode;
  },
  focusTextInput: function focusTextInput(textFieldNode) {
    if (textFieldNode !== null) {
      this._currentlyFocusedNode = textFieldNode;

      if (document.activeElement !== textFieldNode) {
        UIManager["a" /* default */].focus(textFieldNode);
      }
    }
  },
  blurTextInput: function blurTextInput(textFieldNode) {
    if (textFieldNode !== null) {
      this._currentlyFocusedNode = null;

      if (document.activeElement === textFieldNode) {
        UIManager["a" /* default */].blur(textFieldNode);
      }
    }
  }
};
/* harmony default export */ var modules_TextInputState = (TextInputState);
// CONCATENATED MODULE: ./node_modules/react-native-web/dist/modules/dismissKeyboard/index.js


var dismissKeyboard_dismissKeyboard = function dismissKeyboard() {
  modules_TextInputState.blurTextInput(modules_TextInputState.currentlyFocusedField());
};

/* harmony default export */ var modules_dismissKeyboard = (dismissKeyboard_dismissKeyboard);
// EXTERNAL MODULE: ./node_modules/react-native-web/dist/exports/Dimensions/index.js
var Dimensions = __webpack_require__("C7Rh");

// EXTERNAL MODULE: ./node_modules/react-native-web/dist/exports/Platform/index.js
var Platform = __webpack_require__("XwJz");

// CONCATENATED MODULE: ./node_modules/react-native-web/dist/modules/ScrollResponder/index.js







var emptyObject = {};
var IS_ANIMATING_TOUCH_START_THRESHOLD_MS = 16;
var ScrollResponderMixin = {
  scrollResponderMixinGetInitialState: function scrollResponderMixinGetInitialState() {
    return {
      isTouching: false,
      lastMomentumScrollBeginTime: 0,
      lastMomentumScrollEndTime: 0,
      observedScrollSinceBecomingResponder: false,
      becameResponderWhileAnimating: false
    };
  },
  scrollResponderHandleScrollShouldSetResponder: function scrollResponderHandleScrollShouldSetResponder() {
    return this.state.isTouching;
  },
  scrollResponderHandleStartShouldSetResponder: function scrollResponderHandleStartShouldSetResponder() {
    return false;
  },
  scrollResponderHandleStartShouldSetResponderCapture: function scrollResponderHandleStartShouldSetResponderCapture(e) {
    return this.scrollResponderIsAnimating();
  },
  scrollResponderHandleResponderReject: function scrollResponderHandleResponderReject() {
    warning_default()(false, "ScrollView doesn't take rejection well - scrolls anyway");
  },
  scrollResponderHandleTerminationRequest: function scrollResponderHandleTerminationRequest() {
    return !this.state.observedScrollSinceBecomingResponder;
  },
  scrollResponderHandleTouchEnd: function scrollResponderHandleTouchEnd(e) {
    var nativeEvent = e.nativeEvent;
    this.state.isTouching = nativeEvent.touches.length !== 0;
    this.props.onTouchEnd && this.props.onTouchEnd(e);
  },
  scrollResponderHandleResponderRelease: function scrollResponderHandleResponderRelease(e) {
    this.props.onResponderRelease && this.props.onResponderRelease(e);
    var currentlyFocusedTextInput = modules_TextInputState.currentlyFocusedField();

    if (!this.props.keyboardShouldPersistTaps && currentlyFocusedTextInput != null && e.target !== currentlyFocusedTextInput && !this.state.observedScrollSinceBecomingResponder && !this.state.becameResponderWhileAnimating) {
      this.props.onScrollResponderKeyboardDismissed && this.props.onScrollResponderKeyboardDismissed(e);
      modules_TextInputState.blurTextInput(currentlyFocusedTextInput);
    }
  },
  scrollResponderHandleScroll: function scrollResponderHandleScroll(e) {
    this.state.observedScrollSinceBecomingResponder = true;
    this.props.onScroll && this.props.onScroll(e);
  },
  scrollResponderHandleResponderGrant: function scrollResponderHandleResponderGrant(e) {
    this.state.observedScrollSinceBecomingResponder = false;
    this.props.onResponderGrant && this.props.onResponderGrant(e);
    this.state.becameResponderWhileAnimating = this.scrollResponderIsAnimating();
  },
  scrollResponderHandleScrollBeginDrag: function scrollResponderHandleScrollBeginDrag(e) {
    this.props.onScrollBeginDrag && this.props.onScrollBeginDrag(e);
  },
  scrollResponderHandleScrollEndDrag: function scrollResponderHandleScrollEndDrag(e) {
    this.props.onScrollEndDrag && this.props.onScrollEndDrag(e);
  },
  scrollResponderHandleMomentumScrollBegin: function scrollResponderHandleMomentumScrollBegin(e) {
    this.state.lastMomentumScrollBeginTime = Date.now();
    this.props.onMomentumScrollBegin && this.props.onMomentumScrollBegin(e);
  },
  scrollResponderHandleMomentumScrollEnd: function scrollResponderHandleMomentumScrollEnd(e) {
    this.state.lastMomentumScrollEndTime = Date.now();
    this.props.onMomentumScrollEnd && this.props.onMomentumScrollEnd(e);
  },
  scrollResponderHandleTouchStart: function scrollResponderHandleTouchStart(e) {
    this.state.isTouching = true;
    this.props.onTouchStart && this.props.onTouchStart(e);
  },
  scrollResponderHandleTouchMove: function scrollResponderHandleTouchMove(e) {
    this.props.onTouchMove && this.props.onTouchMove(e);
  },
  scrollResponderIsAnimating: function scrollResponderIsAnimating() {
    var now = Date.now();
    var timeSinceLastMomentumScrollEnd = now - this.state.lastMomentumScrollEndTime;
    var isAnimating = timeSinceLastMomentumScrollEnd < IS_ANIMATING_TOUCH_START_THRESHOLD_MS || this.state.lastMomentumScrollEndTime < this.state.lastMomentumScrollBeginTime;
    return isAnimating;
  },
  scrollResponderGetScrollableNode: function scrollResponderGetScrollableNode() {
    return this.getScrollableNode ? this.getScrollableNode() : Object(findNodeHandle["a" /* default */])(this);
  },
  scrollResponderScrollTo: function scrollResponderScrollTo(x, y, animated) {
    if (typeof x === 'number') {
      console.warn('`scrollResponderScrollTo(x, y, animated)` is deprecated. Use `scrollResponderScrollTo({x: 5, y: 5, animated: true})` instead.');
    } else {
      var _ref = x || emptyObject;

      x = _ref.x;
      y = _ref.y;
      animated = _ref.animated;
    }

    var node = this.scrollResponderGetScrollableNode();
    var left = x || 0;
    var top = y || 0;

    if (typeof node.scroll === 'function') {
      node.scroll({
        top: top,
        left: left,
        behavior: !animated ? 'auto' : 'smooth'
      });
    } else {
      node.scrollLeft = left;
      node.scrollTop = top;
    }
  },
  scrollResponderZoomTo: function scrollResponderZoomTo(rect, animated) {
    if (Platform["a" /* default */].OS !== 'ios') {
      invariant_default()('zoomToRect is not implemented');
    }
  },
  scrollResponderFlashScrollIndicators: function scrollResponderFlashScrollIndicators() {},
  scrollResponderScrollNativeHandleToKeyboard: function scrollResponderScrollNativeHandleToKeyboard(nodeHandle, additionalOffset, preventNegativeScrollOffset) {
    this.additionalScrollOffset = additionalOffset || 0;
    this.preventNegativeScrollOffset = !!preventNegativeScrollOffset;
    UIManager["a" /* default */].measureLayout(nodeHandle, Object(findNodeHandle["a" /* default */])(this.getInnerViewNode()), this.scrollResponderTextInputFocusError, this.scrollResponderInputMeasureAndScrollToKeyboard);
  },
  scrollResponderInputMeasureAndScrollToKeyboard: function scrollResponderInputMeasureAndScrollToKeyboard(left, top, width, height) {
    var keyboardScreenY = Dimensions["a" /* default */].get('window').height;

    if (this.keyboardWillOpenTo) {
      keyboardScreenY = this.keyboardWillOpenTo.endCoordinates.screenY;
    }

    var scrollOffsetY = top - keyboardScreenY + height + this.additionalScrollOffset;

    if (this.preventNegativeScrollOffset) {
      scrollOffsetY = Math.max(0, scrollOffsetY);
    }

    this.scrollResponderScrollTo({
      x: 0,
      y: scrollOffsetY,
      animated: true
    });
    this.additionalOffset = 0;
    this.preventNegativeScrollOffset = false;
  },
  scrollResponderTextInputFocusError: function scrollResponderTextInputFocusError(e) {
    console.error('Error measuring text field: ', e);
  },
  UNSAFE_componentWillMount: function UNSAFE_componentWillMount() {
    this.keyboardWillOpenTo = null;
    this.additionalScrollOffset = 0;
  },
  scrollResponderKeyboardWillShow: function scrollResponderKeyboardWillShow(e) {
    this.keyboardWillOpenTo = e;
    this.props.onKeyboardWillShow && this.props.onKeyboardWillShow(e);
  },
  scrollResponderKeyboardWillHide: function scrollResponderKeyboardWillHide(e) {
    this.keyboardWillOpenTo = null;
    this.props.onKeyboardWillHide && this.props.onKeyboardWillHide(e);
  },
  scrollResponderKeyboardDidShow: function scrollResponderKeyboardDidShow(e) {
    if (e) {
      this.keyboardWillOpenTo = e;
    }

    this.props.onKeyboardDidShow && this.props.onKeyboardDidShow(e);
  },
  scrollResponderKeyboardDidHide: function scrollResponderKeyboardDidHide(e) {
    this.keyboardWillOpenTo = null;
    this.props.onKeyboardDidHide && this.props.onKeyboardDidHide(e);
  }
};
var ScrollResponder = {
  Mixin: ScrollResponderMixin
};
/* harmony default export */ var modules_ScrollResponder = (ScrollResponder);
// EXTERNAL MODULE: ./node_modules/react-native-web/dist/modules/useMergeRefs/index.js
var useMergeRefs = __webpack_require__("CSmu");

// CONCATENATED MODULE: ./node_modules/react-native-web/dist/exports/ScrollView/ScrollViewBase.js






function normalizeScrollEvent(e) {
  return {
    nativeEvent: {
      contentOffset: {
        get x() {
          return e.target.scrollLeft;
        },

        get y() {
          return e.target.scrollTop;
        }

      },
      contentSize: {
        get height() {
          return e.target.scrollHeight;
        },

        get width() {
          return e.target.scrollWidth;
        }

      },
      layoutMeasurement: {
        get height() {
          return e.target.offsetHeight;
        },

        get width() {
          return e.target.offsetWidth;
        }

      }
    },
    timeStamp: Date.now()
  };
}

function shouldEmitScrollEvent(lastTick, eventThrottle) {
  var timeSinceLastTick = Date.now() - lastTick;
  return eventThrottle > 0 && timeSinceLastTick >= eventThrottle;
}

var ScrollViewBase = Object(react["forwardRef"])(function (props, forwardedRef) {
  var accessibilityLabel = props.accessibilityLabel,
      accessibilityRole = props.accessibilityRole,
      accessibilityState = props.accessibilityState,
      children = props.children,
      importantForAccessibility = props.importantForAccessibility,
      nativeID = props.nativeID,
      onLayout = props.onLayout,
      onScroll = props.onScroll,
      onTouchMove = props.onTouchMove,
      onWheel = props.onWheel,
      pointerEvents = props.pointerEvents,
      _props$scrollEnabled = props.scrollEnabled,
      scrollEnabled = _props$scrollEnabled === void 0 ? true : _props$scrollEnabled,
      _props$scrollEventThr = props.scrollEventThrottle,
      scrollEventThrottle = _props$scrollEventThr === void 0 ? 0 : _props$scrollEventThr,
      showsHorizontalScrollIndicator = props.showsHorizontalScrollIndicator,
      showsVerticalScrollIndicator = props.showsVerticalScrollIndicator,
      style = props.style,
      dataSet = props.dataSet,
      testID = props.testID;
  var scrollState = Object(react["useRef"])({
    isScrolling: false,
    scrollLastTick: 0
  });
  var scrollTimeout = Object(react["useRef"])(null);
  var scrollRef = Object(react["useRef"])(null);

  function createPreventableScrollHandler(handler) {
    return function (e) {
      if (scrollEnabled) {
        if (handler) {
          handler(e);
        }
      }
    };
  }

  function handleScroll(e) {
    e.stopPropagation();

    if (e.target === scrollRef.current) {
      e.persist();

      if (scrollTimeout.current != null) {
        clearTimeout(scrollTimeout.current);
      }

      scrollTimeout.current = setTimeout(function () {
        handleScrollEnd(e);
      }, 100);

      if (scrollState.current.isScrolling) {
        if (shouldEmitScrollEvent(scrollState.current.scrollLastTick, scrollEventThrottle)) {
          handleScrollTick(e);
        }
      } else {
        handleScrollStart(e);
      }
    }
  }

  function handleScrollStart(e) {
    scrollState.current.isScrolling = true;
    handleScrollTick(e);
  }

  function handleScrollTick(e) {
    scrollState.current.scrollLastTick = Date.now();

    if (onScroll) {
      onScroll(normalizeScrollEvent(e));
    }
  }

  function handleScrollEnd(e) {
    scrollState.current.isScrolling = false;

    if (onScroll) {
      onScroll(normalizeScrollEvent(e));
    }
  }

  var hideScrollbar = showsHorizontalScrollIndicator === false || showsVerticalScrollIndicator === false;
  return react["createElement"](View["a" /* default */], {
    accessibilityLabel: accessibilityLabel,
    accessibilityRole: accessibilityRole,
    accessibilityState: accessibilityState,
    children: children,
    dataSet: dataSet,
    importantForAccessibility: importantForAccessibility,
    nativeID: nativeID,
    onLayout: onLayout,
    onScroll: handleScroll,
    onTouchMove: createPreventableScrollHandler(onTouchMove),
    onWheel: createPreventableScrollHandler(onWheel),
    pointerEvents: pointerEvents,
    ref: Object(useMergeRefs["a" /* default */])(scrollRef, forwardedRef),
    style: [style, !scrollEnabled && styles.scrollDisabled, hideScrollbar && styles.hideScrollbar],
    testID: testID
  });
});
var styles = StyleSheet["a" /* default */].create({
  scrollDisabled: {
    overflowX: 'hidden',
    overflowY: 'hidden',
    touchAction: 'none'
  },
  hideScrollbar: {
    scrollbarWidth: 'none'
  }
});
/* harmony default export */ var ScrollView_ScrollViewBase = (ScrollViewBase);
// CONCATENATED MODULE: ./node_modules/react-native-web/dist/exports/ScrollView/index.js
function ScrollView_ownKeys(object, enumerableOnly) {
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

function ScrollView_objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ScrollView_ownKeys(Object(source), true).forEach(function (key) {
        ScrollView_defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ScrollView_ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

function ScrollView_defineProperty(obj, key, value) {
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

function ScrollView_extends() {
  ScrollView_extends = Object.assign || function (target) {
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

  return ScrollView_extends.apply(this, arguments);
}

function ScrollView_objectWithoutPropertiesLoose(source, excluded) {
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









var ScrollView_emptyObject = {};
var ScrollView = create_react_class_default()({
  displayName: "ScrollView",
  mixins: [modules_ScrollResponder.Mixin],
  getInitialState: function getInitialState() {
    return this.scrollResponderMixinGetInitialState();
  },
  flashScrollIndicators: function flashScrollIndicators() {
    this.scrollResponderFlashScrollIndicators();
  },
  setNativeProps: function setNativeProps(props) {
    if (this._scrollNodeRef) {
      this._scrollNodeRef.setNativeProps(props);
    }
  },
  getScrollResponder: function getScrollResponder() {
    return this;
  },
  getScrollableNode: function getScrollableNode() {
    return this._scrollNodeRef;
  },
  getInnerViewNode: function getInnerViewNode() {
    return this._innerViewRef;
  },
  scrollTo: function scrollTo(y, x, animated) {
    if (typeof y === 'number') {
      console.warn('`scrollTo(y, x, animated)` is deprecated. Use `scrollTo({x: 5, y: 5, animated: true})` instead.');
    } else {
      var _ref = y || ScrollView_emptyObject;

      x = _ref.x;
      y = _ref.y;
      animated = _ref.animated;
    }

    this.getScrollResponder().scrollResponderScrollTo({
      x: x || 0,
      y: y || 0,
      animated: animated !== false
    });
  },
  scrollToEnd: function scrollToEnd(options) {
    var animated = (options && options.animated) !== false;
    var horizontal = this.props.horizontal;
    var scrollResponder = this.getScrollResponder();
    var scrollResponderNode = scrollResponder.scrollResponderGetScrollableNode();
    var x = horizontal ? scrollResponderNode.scrollWidth : 0;
    var y = horizontal ? 0 : scrollResponderNode.scrollHeight;
    scrollResponder.scrollResponderScrollTo({
      x: x,
      y: y,
      animated: animated
    });
  },
  render: function render() {
    var _this$props = this.props,
        contentContainerStyle = _this$props.contentContainerStyle,
        horizontal = _this$props.horizontal,
        onContentSizeChange = _this$props.onContentSizeChange,
        refreshControl = _this$props.refreshControl,
        stickyHeaderIndices = _this$props.stickyHeaderIndices,
        pagingEnabled = _this$props.pagingEnabled,
        keyboardDismissMode = _this$props.keyboardDismissMode,
        onScroll = _this$props.onScroll,
        other = ScrollView_objectWithoutPropertiesLoose(_this$props, ["contentContainerStyle", "horizontal", "onContentSizeChange", "refreshControl", "stickyHeaderIndices", "pagingEnabled", "keyboardDismissMode", "onScroll"]);

    if (false) { var childLayoutProps, style; }

    var contentSizeChangeProps = {};

    if (onContentSizeChange) {
      contentSizeChangeProps = {
        onLayout: this._handleContentOnLayout
      };
    }

    var hasStickyHeaderIndices = !horizontal && Array.isArray(stickyHeaderIndices);
    var children = hasStickyHeaderIndices || pagingEnabled ? react_default.a.Children.map(this.props.children, function (child, i) {
      var isSticky = hasStickyHeaderIndices && stickyHeaderIndices.indexOf(i) > -1;

      if (child != null && (isSticky || pagingEnabled)) {
        return react_default.a.createElement(View["a" /* default */], {
          style: StyleSheet["a" /* default */].compose(isSticky && ScrollView_styles.stickyHeader, pagingEnabled && ScrollView_styles.pagingEnabledChild)
        }, child);
      } else {
        return child;
      }
    }) : this.props.children;
    var contentContainer = react_default.a.createElement(View["a" /* default */], ScrollView_extends({}, contentSizeChangeProps, {
      children: children,
      collapsable: false,
      ref: this._setInnerViewRef,
      style: StyleSheet["a" /* default */].compose(horizontal && ScrollView_styles.contentContainerHorizontal, contentContainerStyle)
    }));
    var baseStyle = horizontal ? ScrollView_styles.baseHorizontal : ScrollView_styles.baseVertical;
    var pagingEnabledStyle = horizontal ? ScrollView_styles.pagingEnabledHorizontal : ScrollView_styles.pagingEnabledVertical;

    var props = ScrollView_objectSpread({}, other, {
      style: [baseStyle, pagingEnabled && pagingEnabledStyle, this.props.style],
      onTouchStart: this.scrollResponderHandleTouchStart,
      onTouchMove: this.scrollResponderHandleTouchMove,
      onTouchEnd: this.scrollResponderHandleTouchEnd,
      onScrollBeginDrag: this.scrollResponderHandleScrollBeginDrag,
      onScrollEndDrag: this.scrollResponderHandleScrollEndDrag,
      onMomentumScrollBegin: this.scrollResponderHandleMomentumScrollBegin,
      onMomentumScrollEnd: this.scrollResponderHandleMomentumScrollEnd,
      onStartShouldSetResponder: this.scrollResponderHandleStartShouldSetResponder,
      onStartShouldSetResponderCapture: this.scrollResponderHandleStartShouldSetResponderCapture,
      onScrollShouldSetResponder: this.scrollResponderHandleScrollShouldSetResponder,
      onScroll: this._handleScroll,
      onResponderGrant: this.scrollResponderHandleResponderGrant,
      onResponderTerminationRequest: this.scrollResponderHandleTerminationRequest,
      onResponderTerminate: this.scrollResponderHandleTerminate,
      onResponderRelease: this.scrollResponderHandleResponderRelease,
      onResponderReject: this.scrollResponderHandleResponderReject
    });

    var ScrollViewClass = ScrollView_ScrollViewBase;
    invariant_default()(ScrollViewClass !== undefined, 'ScrollViewClass must not be undefined');

    if (refreshControl) {
      return react_default.a.cloneElement(refreshControl, {
        style: props.style
      }, react_default.a.createElement(ScrollViewClass, ScrollView_extends({}, props, {
        ref: this._setScrollNodeRef,
        style: baseStyle
      }), contentContainer));
    }

    return react_default.a.createElement(ScrollViewClass, ScrollView_extends({}, props, {
      ref: this._setScrollNodeRef
    }), contentContainer);
  },
  _handleContentOnLayout: function _handleContentOnLayout(e) {
    var _e$nativeEvent$layout = e.nativeEvent.layout,
        width = _e$nativeEvent$layout.width,
        height = _e$nativeEvent$layout.height;
    this.props.onContentSizeChange(width, height);
  },
  _handleScroll: function _handleScroll(e) {
    if (false) {}

    if (this.props.keyboardDismissMode === 'on-drag') {
      modules_dismissKeyboard();
    }

    this.scrollResponderHandleScroll(e);
  },
  _setInnerViewRef: function _setInnerViewRef(component) {
    this._innerViewRef = component;
  },
  _setScrollNodeRef: function _setScrollNodeRef(component) {
    this._scrollNodeRef = component;
  }
});
var commonStyle = {
  flexGrow: 1,
  flexShrink: 1,
  transform: [{
    translateZ: 0
  }],
  WebkitOverflowScrolling: 'touch'
};
var ScrollView_styles = StyleSheet["a" /* default */].create({
  baseVertical: ScrollView_objectSpread({}, commonStyle, {
    flexDirection: 'column',
    overflowX: 'hidden',
    overflowY: 'auto'
  }),
  baseHorizontal: ScrollView_objectSpread({}, commonStyle, {
    flexDirection: 'row',
    overflowX: 'auto',
    overflowY: 'hidden'
  }),
  contentContainerHorizontal: {
    flexDirection: 'row'
  },
  stickyHeader: {
    position: 'sticky',
    top: 0,
    zIndex: 10
  },
  pagingEnabledHorizontal: {
    scrollSnapType: 'x mandatory'
  },
  pagingEnabledVertical: {
    scrollSnapType: 'y mandatory'
  },
  pagingEnabledChild: {
    scrollSnapAlign: 'start'
  }
});
/* harmony default export */ var exports_ScrollView = (ScrollView);
// CONCATENATED MODULE: ./node_modules/react-native-web/dist/vendor/react-native/ViewabilityHelper/index.js


function ViewabilityHelper_ownKeys(object, enumerableOnly) {
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

function ViewabilityHelper_objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ViewabilityHelper_ownKeys(Object(source), true).forEach(function (key) {
        ViewabilityHelper_defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ViewabilityHelper_ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

function ViewabilityHelper_defineProperty(obj, key, value) {
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



var ViewabilityHelper_ViewabilityHelper = function () {
  function ViewabilityHelper(config) {
    if (config === void 0) {
      config = {
        viewAreaCoveragePercentThreshold: 0
      };
    }

    this._hasInteracted = false;
    this._timers = new Set();
    this._viewableIndices = [];
    this._viewableItems = new Map();
    this._config = config;
  }

  var _proto = ViewabilityHelper.prototype;

  _proto.dispose = function dispose() {
    this._timers.forEach(clearTimeout);
  };

  _proto.computeViewableItems = function computeViewableItems(itemCount, scrollOffset, viewportHeight, getFrameMetrics, renderRange) {
    var _this$_config = this._config,
        itemVisiblePercentThreshold = _this$_config.itemVisiblePercentThreshold,
        viewAreaCoveragePercentThreshold = _this$_config.viewAreaCoveragePercentThreshold;
    var viewAreaMode = viewAreaCoveragePercentThreshold != null;
    var viewablePercentThreshold = viewAreaMode ? viewAreaCoveragePercentThreshold : itemVisiblePercentThreshold;
    invariant_default()(viewablePercentThreshold != null && itemVisiblePercentThreshold != null !== (viewAreaCoveragePercentThreshold != null), 'Must set exactly one of itemVisiblePercentThreshold or viewAreaCoveragePercentThreshold');
    var viewableIndices = [];

    if (itemCount === 0) {
      return viewableIndices;
    }

    var firstVisible = -1;

    var _ref = renderRange || {
      first: 0,
      last: itemCount - 1
    },
        first = _ref.first,
        last = _ref.last;

    if (last >= itemCount) {
      console.warn('Invalid render range computing viewability ' + JSON.stringify({
        renderRange: renderRange,
        itemCount: itemCount
      }));
      return [];
    }

    for (var idx = first; idx <= last; idx++) {
      var metrics = getFrameMetrics(idx);

      if (!metrics) {
        continue;
      }

      var top = metrics.offset - scrollOffset;
      var bottom = top + metrics.length;

      if (top < viewportHeight && bottom > 0) {
        firstVisible = idx;

        if (_isViewable(viewAreaMode, viewablePercentThreshold, top, bottom, viewportHeight, metrics.length)) {
          viewableIndices.push(idx);
        }
      } else if (firstVisible >= 0) {
        break;
      }
    }

    return viewableIndices;
  };

  _proto.onUpdate = function onUpdate(itemCount, scrollOffset, viewportHeight, getFrameMetrics, createViewToken, onViewableItemsChanged, renderRange) {
    var _this = this;

    if (this._config.waitForInteraction && !this._hasInteracted || itemCount === 0 || !getFrameMetrics(0)) {
      return;
    }

    var viewableIndices = [];

    if (itemCount) {
      viewableIndices = this.computeViewableItems(itemCount, scrollOffset, viewportHeight, getFrameMetrics, renderRange);
    }

    if (this._viewableIndices.length === viewableIndices.length && this._viewableIndices.every(function (v, ii) {
      return v === viewableIndices[ii];
    })) {
      return;
    }

    this._viewableIndices = viewableIndices;

    if (this._config.minimumViewTime) {
      var handle = setTimeout(function () {
        _this._timers.delete(handle);

        _this._onUpdateSync(viewableIndices, onViewableItemsChanged, createViewToken);
      }, this._config.minimumViewTime);

      this._timers.add(handle);
    } else {
      this._onUpdateSync(viewableIndices, onViewableItemsChanged, createViewToken);
    }
  };

  _proto.resetViewableIndices = function resetViewableIndices() {
    this._viewableIndices = [];
  };

  _proto.recordInteraction = function recordInteraction() {
    this._hasInteracted = true;
  };

  _proto._onUpdateSync = function _onUpdateSync(viewableIndicesToCheck, onViewableItemsChanged, createViewToken) {
    var _this2 = this;

    viewableIndicesToCheck = viewableIndicesToCheck.filter(function (ii) {
      return _this2._viewableIndices.includes(ii);
    });
    var prevItems = this._viewableItems;
    var nextItems = new Map(viewableIndicesToCheck.map(function (ii) {
      var viewable = createViewToken(ii, true);
      return [viewable.key, viewable];
    }));
    var changed = [];

    for (var _iterator = nextItems, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator]();;) {
      var _ref2;

      if (_isArray) {
        if (_i >= _iterator.length) break;
        _ref2 = _iterator[_i++];
      } else {
        _i = _iterator.next();
        if (_i.done) break;
        _ref2 = _i.value;
      }

      var _ref4 = _ref2,
          key = _ref4[0],
          viewable = _ref4[1];

      if (!prevItems.has(key)) {
        changed.push(viewable);
      }
    }

    for (var _iterator2 = prevItems, _isArray2 = Array.isArray(_iterator2), _i2 = 0, _iterator2 = _isArray2 ? _iterator2 : _iterator2[Symbol.iterator]();;) {
      var _ref3;

      if (_isArray2) {
        if (_i2 >= _iterator2.length) break;
        _ref3 = _iterator2[_i2++];
      } else {
        _i2 = _iterator2.next();
        if (_i2.done) break;
        _ref3 = _i2.value;
      }

      var _ref5 = _ref3,
          _key = _ref5[0],
          _viewable = _ref5[1];

      if (!nextItems.has(_key)) {
        changed.push(ViewabilityHelper_objectSpread({}, _viewable, {
          isViewable: false
        }));
      }
    }

    if (changed.length > 0) {
      this._viewableItems = nextItems;
      onViewableItemsChanged({
        viewableItems: Array.from(nextItems.values()),
        changed: changed,
        viewabilityConfig: this._config
      });
    }
  };

  return ViewabilityHelper;
}();

function _isViewable(viewAreaMode, viewablePercentThreshold, top, bottom, viewportHeight, itemLength) {
  if (_isEntirelyVisible(top, bottom, viewportHeight)) {
    return true;
  } else {
    var pixels = _getPixelsVisible(top, bottom, viewportHeight);

    var percent = 100 * (viewAreaMode ? pixels / viewportHeight : pixels / itemLength);
    return percent >= viewablePercentThreshold;
  }
}

function _getPixelsVisible(top, bottom, viewportHeight) {
  var visibleHeight = Math.min(bottom, viewportHeight) - Math.max(top, 0);
  return Math.max(0, visibleHeight);
}

function _isEntirelyVisible(top, bottom, viewportHeight) {
  return top >= 0 && bottom <= viewportHeight && bottom > top;
}

/* harmony default export */ var react_native_ViewabilityHelper = (ViewabilityHelper_ViewabilityHelper);
// CONCATENATED MODULE: ./node_modules/react-native-web/dist/vendor/react-native/infoLog/index.js


function infoLog() {
  var _console;

  return (_console = console).log.apply(_console, arguments);
}

/* harmony default export */ var react_native_infoLog = (infoLog);
// CONCATENATED MODULE: ./node_modules/react-native-web/dist/vendor/react-native/VirtualizeUtils/index.js




function elementsThatOverlapOffsets(offsets, itemCount, getFrameMetrics) {
  var out = [];
  var outLength = 0;

  for (var ii = 0; ii < itemCount; ii++) {
    var frame = getFrameMetrics(ii);
    var trailingOffset = frame.offset + frame.length;

    for (var kk = 0; kk < offsets.length; kk++) {
      if (out[kk] == null && trailingOffset >= offsets[kk]) {
        out[kk] = ii;
        outLength++;

        if (kk === offsets.length - 1) {
          invariant_default()(outLength === offsets.length, 'bad offsets input, should be in increasing order: %s', JSON.stringify(offsets));
          return out;
        }
      }
    }
  }

  return out;
}

function newRangeCount(prev, next) {
  return next.last - next.first + 1 - Math.max(0, 1 + Math.min(next.last, prev.last) - Math.max(next.first, prev.first));
}

function computeWindowedRenderLimits(props, prev, getFrameMetricsApprox, scrollMetrics) {
  var data = props.data,
      getItemCount = props.getItemCount,
      maxToRenderPerBatch = props.maxToRenderPerBatch,
      windowSize = props.windowSize;
  var itemCount = getItemCount(data);

  if (itemCount === 0) {
    return prev;
  }

  var offset = scrollMetrics.offset,
      velocity = scrollMetrics.velocity,
      visibleLength = scrollMetrics.visibleLength;
  var visibleBegin = Math.max(0, offset);
  var visibleEnd = visibleBegin + visibleLength;
  var overscanLength = (windowSize - 1) * visibleLength;
  var leadFactor = 0.5;
  var fillPreference = velocity > 1 ? 'after' : velocity < -1 ? 'before' : 'none';
  var overscanBegin = Math.max(0, visibleBegin - (1 - leadFactor) * overscanLength);
  var overscanEnd = Math.max(0, visibleEnd + leadFactor * overscanLength);
  var lastItemOffset = getFrameMetricsApprox(itemCount - 1).offset;

  if (lastItemOffset < overscanBegin) {
    return {
      first: Math.max(0, itemCount - 1 - maxToRenderPerBatch),
      last: itemCount - 1
    };
  }

  var _elementsThatOverlapO = elementsThatOverlapOffsets([overscanBegin, visibleBegin, visibleEnd, overscanEnd], props.getItemCount(props.data), getFrameMetricsApprox),
      overscanFirst = _elementsThatOverlapO[0],
      first = _elementsThatOverlapO[1],
      last = _elementsThatOverlapO[2],
      overscanLast = _elementsThatOverlapO[3];

  overscanFirst = overscanFirst == null ? 0 : overscanFirst;
  first = first == null ? Math.max(0, overscanFirst) : first;
  overscanLast = overscanLast == null ? itemCount - 1 : overscanLast;
  last = last == null ? Math.min(overscanLast, first + maxToRenderPerBatch - 1) : last;
  var visible = {
    first: first,
    last: last
  };
  var newCellCount = newRangeCount(prev, visible);

  while (true) {
    if (first <= overscanFirst && last >= overscanLast) {
      break;
    }

    var maxNewCells = newCellCount >= maxToRenderPerBatch;
    var firstWillAddMore = first <= prev.first || first > prev.last;
    var firstShouldIncrement = first > overscanFirst && (!maxNewCells || !firstWillAddMore);
    var lastWillAddMore = last >= prev.last || last < prev.first;
    var lastShouldIncrement = last < overscanLast && (!maxNewCells || !lastWillAddMore);

    if (maxNewCells && !firstShouldIncrement && !lastShouldIncrement) {
      break;
    }

    if (firstShouldIncrement && !(fillPreference === 'after' && lastShouldIncrement && lastWillAddMore)) {
      if (firstWillAddMore) {
        newCellCount++;
      }

      first--;
    }

    if (lastShouldIncrement && !(fillPreference === 'before' && firstShouldIncrement && firstWillAddMore)) {
      if (lastWillAddMore) {
        newCellCount++;
      }

      last++;
    }
  }

  if (!(last >= first && first >= 0 && last < itemCount && first >= overscanFirst && last <= overscanLast && first <= visible.first && last >= visible.last)) {
    throw new Error('Bad window calculation ' + JSON.stringify({
      first: first,
      last: last,
      itemCount: itemCount,
      overscanFirst: overscanFirst,
      overscanLast: overscanLast,
      visible: visible
    }));
  }

  return {
    first: first,
    last: last
  };
}

var VirtualizeUtils = {
  computeWindowedRenderLimits: computeWindowedRenderLimits,
  elementsThatOverlapOffsets: elementsThatOverlapOffsets,
  newRangeCount: newRangeCount
};

/* harmony default export */ var react_native_VirtualizeUtils = (VirtualizeUtils);
// CONCATENATED MODULE: ./node_modules/react-native-web/dist/vendor/react-native/VirtualizedList/index.js


function VirtualizedList_extends() {
  VirtualizedList_extends = Object.assign || function (target) {
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

  return VirtualizedList_extends.apply(this, arguments);
}

function VirtualizedList_ownKeys(object, enumerableOnly) {
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

function VirtualizedList_objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      VirtualizedList_ownKeys(Object(source), true).forEach(function (key) {
        VirtualizedList_defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      VirtualizedList_ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

function VirtualizedList_defineProperty(obj, key, value) {
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

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function VirtualizedList_inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  subClass.__proto__ = superClass;
}












var VirtualizedList_flattenStyle = StyleSheet["a" /* default */].flatten;





var __DEV__ = "production" !== 'production';

var _usedIndexForKey = false;
var _keylessItemComponentName = '';

var VirtualizedList_VirtualizedList = function (_React$PureComponent) {
  VirtualizedList_inheritsLoose(VirtualizedList, _React$PureComponent);

  var _proto = VirtualizedList.prototype;

  _proto.scrollToEnd = function scrollToEnd(params) {
    var animated = params ? params.animated : true;
    var veryLast = this.props.getItemCount(this.props.data) - 1;

    var frame = this._getFrameMetricsApprox(veryLast);

    var offset = Math.max(0, frame.offset + frame.length + this._footerLength - this._scrollMetrics.visibleLength);

    this._scrollRef.scrollTo(this.props.horizontal ? {
      x: offset,
      animated: animated
    } : {
      y: offset,
      animated: animated
    });
  };

  _proto.scrollToIndex = function scrollToIndex(params) {
    var _this$props = this.props,
        data = _this$props.data,
        horizontal = _this$props.horizontal,
        getItemCount = _this$props.getItemCount,
        getItemLayout = _this$props.getItemLayout,
        onScrollToIndexFailed = _this$props.onScrollToIndexFailed;
    var animated = params.animated,
        index = params.index,
        viewOffset = params.viewOffset,
        viewPosition = params.viewPosition;
    invariant_default()(index >= 0 && index < getItemCount(data), "scrollToIndex out of range: " + index + " vs " + (getItemCount(data) - 1));

    if (!getItemLayout && index > this._highestMeasuredFrameIndex) {
      invariant_default()(!!onScrollToIndexFailed, 'scrollToIndex should be used in conjunction with getItemLayout or onScrollToIndexFailed, ' + 'otherwise there is no way to know the location of offscreen indices or handle failures.');
      onScrollToIndexFailed({
        averageItemLength: this._averageCellLength,
        highestMeasuredFrameIndex: this._highestMeasuredFrameIndex,
        index: index
      });
      return;
    }

    var frame = this._getFrameMetricsApprox(index);

    var offset = Math.max(0, frame.offset - (viewPosition || 0) * (this._scrollMetrics.visibleLength - frame.length)) - (viewOffset || 0);

    this._scrollRef.scrollTo(horizontal ? {
      x: offset,
      animated: animated
    } : {
      y: offset,
      animated: animated
    });
  };

  _proto.scrollToItem = function scrollToItem(params) {
    var item = params.item;
    var _this$props2 = this.props,
        data = _this$props2.data,
        getItem = _this$props2.getItem,
        getItemCount = _this$props2.getItemCount;
    var itemCount = getItemCount(data);

    for (var _index = 0; _index < itemCount; _index++) {
      if (getItem(data, _index) === item) {
        this.scrollToIndex(VirtualizedList_objectSpread({}, params, {
          index: _index
        }));
        break;
      }
    }
  };

  _proto.scrollToOffset = function scrollToOffset(params) {
    var animated = params.animated,
        offset = params.offset;

    this._scrollRef.scrollTo(this.props.horizontal ? {
      x: offset,
      animated: animated
    } : {
      y: offset,
      animated: animated
    });
  };

  _proto.recordInteraction = function recordInteraction() {
    this._nestedChildLists.forEach(function (childList) {
      childList.ref && childList.ref.recordInteraction();
    });

    this._viewabilityTuples.forEach(function (t) {
      t.viewabilityHelper.recordInteraction();
    });

    this._updateViewableItems(this.props.data);
  };

  _proto.flashScrollIndicators = function flashScrollIndicators() {
    this._scrollRef.flashScrollIndicators();
  };

  _proto.getScrollResponder = function getScrollResponder() {
    if (this._scrollRef && this._scrollRef.getScrollResponder) {
      return this._scrollRef.getScrollResponder();
    }
  };

  _proto.getScrollableNode = function getScrollableNode() {
    if (this._scrollRef && this._scrollRef.getScrollableNode) {
      return this._scrollRef.getScrollableNode();
    } else {
      return Object(findNodeHandle["a" /* default */])(this._scrollRef);
    }
  };

  _proto.getScrollRef = function getScrollRef() {
    if (this._scrollRef && this._scrollRef.getScrollRef) {
      return this._scrollRef.getScrollRef();
    } else {
      return this._scrollRef;
    }
  };

  _proto.setNativeProps = function setNativeProps(props) {
    if (this._scrollRef) {
      this._scrollRef.setNativeProps(props);
    }
  };

  _proto.getChildContext = function getChildContext() {
    return {
      virtualizedList: {
        getScrollMetrics: this._getScrollMetrics,
        horizontal: this.props.horizontal,
        getOutermostParentListRef: this._getOutermostParentListRef,
        getNestedChildState: this._getNestedChildState,
        registerAsNestedChild: this._registerAsNestedChild,
        unregisterAsNestedChild: this._unregisterAsNestedChild
      }
    };
  };

  _proto._getCellKey = function _getCellKey() {
    return this.context.virtualizedCell && this.context.virtualizedCell.cellKey || 'rootList';
  };

  _proto.hasMore = function hasMore() {
    return this._hasMore;
  };

  function VirtualizedList(_props, context) {
    var _this;

    _this = _React$PureComponent.call(this, _props, context) || this;

    _this._getScrollMetrics = function () {
      return _this._scrollMetrics;
    };

    _this._getOutermostParentListRef = function () {
      if (_this._isNestedWithSameOrientation()) {
        return _this.context.virtualizedList.getOutermostParentListRef();
      } else {
        return _assertThisInitialized(_this);
      }
    };

    _this._getNestedChildState = function (key) {
      var existingChildData = _this._nestedChildLists.get(key);

      return existingChildData && existingChildData.state;
    };

    _this._registerAsNestedChild = function (childList) {
      var childListsInCell = _this._cellKeysToChildListKeys.get(childList.cellKey) || new Set();
      childListsInCell.add(childList.key);

      _this._cellKeysToChildListKeys.set(childList.cellKey, childListsInCell);

      var existingChildData = _this._nestedChildLists.get(childList.key);

      if (existingChildData && existingChildData.ref !== null) {
        console.error('A VirtualizedList contains a cell which itself contains ' + 'more than one VirtualizedList of the same orientation as the parent ' + 'list. You must pass a unique listKey prop to each sibling list.');
      }

      _this._nestedChildLists.set(childList.key, {
        ref: childList.ref,
        state: null
      });

      if (_this._hasInteracted) {
        childList.ref.recordInteraction();
      }
    };

    _this._unregisterAsNestedChild = function (childList) {
      _this._nestedChildLists.set(childList.key, {
        ref: null,
        state: childList.state
      });
    };

    _this._onUpdateSeparators = function (keys, newProps) {
      keys.forEach(function (key) {
        var ref = key != null && _this._cellRefs[key];
        ref && ref.updateSeparatorProps(newProps);
      });
    };

    _this._averageCellLength = 0;
    _this._cellKeysToChildListKeys = new Map();
    _this._cellRefs = {};
    _this._frames = {};
    _this._footerLength = 0;
    _this._hasDataChangedSinceEndReached = true;
    _this._hasDoneInitialScroll = false;
    _this._hasInteracted = false;
    _this._hasMore = false;
    _this._hasWarned = {};
    _this._headerLength = 0;
    _this._hiPriInProgress = false;
    _this._highestMeasuredFrameIndex = 0;
    _this._indicesToKeys = new Map();
    _this._nestedChildLists = new Map();
    _this._offsetFromParentVirtualizedList = 0;
    _this._prevParentOffset = 0;
    _this._scrollMetrics = {
      contentLength: 0,
      dOffset: 0,
      dt: 10,
      offset: 0,
      timestamp: 0,
      velocity: 0,
      visibleLength: 0
    };
    _this._scrollRef = null;
    _this._sentEndForContentLength = 0;
    _this._totalCellLength = 0;
    _this._totalCellsMeasured = 0;
    _this._viewabilityTuples = [];

    _this._captureScrollRef = function (ref) {
      _this._scrollRef = ref;
    };

    _this._defaultRenderScrollComponent = function (props) {
      var onRefresh = props.onRefresh;

      if (_this._isNestedWithSameOrientation()) {
        return react["createElement"](View["a" /* default */], props);
      } else if (onRefresh) {
        invariant_default()(typeof props.refreshing === 'boolean', '`refreshing` prop must be set as a boolean in order to use `onRefresh`, but got `' + JSON.stringify(props.refreshing) + '`');
        return react["createElement"](exports_ScrollView, VirtualizedList_extends({}, props, {
          refreshControl: props.refreshControl == null ? react["createElement"](exports_RefreshControl, {
            refreshing: props.refreshing,
            onRefresh: onRefresh,
            progressViewOffset: props.progressViewOffset
          }) : props.refreshControl
        }));
      } else {
        return react["createElement"](exports_ScrollView, props);
      }
    };

    _this._onCellUnmount = function (cellKey) {
      var curr = _this._frames[cellKey];

      if (curr) {
        _this._frames[cellKey] = VirtualizedList_objectSpread({}, curr, {
          inLayout: false
        });
      }
    };

    _this._onLayout = function (e) {
      if (_this._isNestedWithSameOrientation()) {
        _this.measureLayoutRelativeToContainingList();
      } else {
        _this._scrollMetrics.visibleLength = _this._selectLength(e.nativeEvent.layout);
      }

      _this.props.onLayout && _this.props.onLayout(e);

      _this._scheduleCellsToRenderUpdate();

      _this._maybeCallOnEndReached();
    };

    _this._onLayoutEmpty = function (e) {
      _this.props.onLayout && _this.props.onLayout(e);
    };

    _this._onLayoutFooter = function (e) {
      _this._footerLength = _this._selectLength(e.nativeEvent.layout);
    };

    _this._onLayoutHeader = function (e) {
      _this._headerLength = _this._selectLength(e.nativeEvent.layout);
    };

    _this._onContentSizeChange = function (width, height) {
      if (width > 0 && height > 0 && _this.props.initialScrollIndex != null && _this.props.initialScrollIndex > 0 && !_this._hasDoneInitialScroll) {
        _this.scrollToIndex({
          animated: false,
          index: _this.props.initialScrollIndex
        });

        _this._hasDoneInitialScroll = true;
      }

      if (_this.props.onContentSizeChange) {
        _this.props.onContentSizeChange(width, height);
      }

      _this._scrollMetrics.contentLength = _this._selectLength({
        height: height,
        width: width
      });

      _this._scheduleCellsToRenderUpdate();

      _this._maybeCallOnEndReached();
    };

    _this._convertParentScrollMetrics = function (metrics) {
      var offset = metrics.offset - _this._offsetFromParentVirtualizedList;
      var visibleLength = metrics.visibleLength;
      var dOffset = offset - _this._scrollMetrics.offset;
      var contentLength = _this._scrollMetrics.contentLength;
      return {
        visibleLength: visibleLength,
        contentLength: contentLength,
        offset: offset,
        dOffset: dOffset
      };
    };

    _this._onScroll = function (e) {
      _this._nestedChildLists.forEach(function (childList) {
        childList.ref && childList.ref._onScroll(e);
      });

      if (_this.props.onScroll) {
        _this.props.onScroll(e);
      }

      var timestamp = e.timeStamp;

      var visibleLength = _this._selectLength(e.nativeEvent.layoutMeasurement);

      var contentLength = _this._selectLength(e.nativeEvent.contentSize);

      var offset = _this._selectOffset(e.nativeEvent.contentOffset);

      var dOffset = offset - _this._scrollMetrics.offset;

      if (_this._isNestedWithSameOrientation()) {
        if (_this._scrollMetrics.contentLength === 0) {
          return;
        }

        var _this$_convertParentS = _this._convertParentScrollMetrics({
          visibleLength: visibleLength,
          offset: offset
        });

        visibleLength = _this$_convertParentS.visibleLength;
        contentLength = _this$_convertParentS.contentLength;
        offset = _this$_convertParentS.offset;
        dOffset = _this$_convertParentS.dOffset;
      }

      var dt = _this._scrollMetrics.timestamp ? Math.max(1, timestamp - _this._scrollMetrics.timestamp) : 1;
      var velocity = dOffset / dt;

      if (dt > 500 && _this._scrollMetrics.dt > 500 && contentLength > 5 * visibleLength && !_this._hasWarned.perf) {
        react_native_infoLog('VirtualizedList: You have a large list that is slow to update - make sure your ' + 'renderItem function renders components that follow React performance best practices ' + 'like PureComponent, shouldComponentUpdate, etc.', {
          dt: dt,
          prevDt: _this._scrollMetrics.dt,
          contentLength: contentLength
        });
        _this._hasWarned.perf = true;
      }

      _this._scrollMetrics = {
        contentLength: contentLength,
        dt: dt,
        dOffset: dOffset,
        offset: offset,
        timestamp: timestamp,
        velocity: velocity,
        visibleLength: visibleLength
      };

      _this._updateViewableItems(_this.props.data);

      if (!_this.props) {
        return;
      }

      _this._maybeCallOnEndReached();

      if (velocity !== 0) {
        _this._fillRateHelper.activate();
      }

      _this._computeBlankness();

      _this._scheduleCellsToRenderUpdate();
    };

    _this._onScrollBeginDrag = function (e) {
      _this._nestedChildLists.forEach(function (childList) {
        childList.ref && childList.ref._onScrollBeginDrag(e);
      });

      _this._viewabilityTuples.forEach(function (tuple) {
        tuple.viewabilityHelper.recordInteraction();
      });

      _this._hasInteracted = true;
      _this.props.onScrollBeginDrag && _this.props.onScrollBeginDrag(e);
    };

    _this._onScrollEndDrag = function (e) {
      var velocity = e.nativeEvent.velocity;

      if (velocity) {
        _this._scrollMetrics.velocity = _this._selectOffset(velocity);
      }

      _this._computeBlankness();

      _this.props.onScrollEndDrag && _this.props.onScrollEndDrag(e);
    };

    _this._onMomentumScrollEnd = function (e) {
      _this._scrollMetrics.velocity = 0;

      _this._computeBlankness();

      _this.props.onMomentumScrollEnd && _this.props.onMomentumScrollEnd(e);
    };

    _this._updateCellsToRender = function () {
      var _this$props3 = _this.props,
          data = _this$props3.data,
          getItemCount = _this$props3.getItemCount,
          onEndReachedThreshold = _this$props3.onEndReachedThreshold;

      var isVirtualizationDisabled = _this._isVirtualizationDisabled();

      _this._updateViewableItems(data);

      if (!data) {
        return;
      }

      _this.setState(function (state) {
        var newState;

        if (!isVirtualizationDisabled) {
          if (_this._scrollMetrics.visibleLength) {
            if (!_this.props.initialScrollIndex || _this._scrollMetrics.offset) {
              newState = computeWindowedRenderLimits(_this.props, state, _this._getFrameMetricsApprox, _this._scrollMetrics);
            }
          }
        } else {
          var _this$_scrollMetrics = _this._scrollMetrics,
              contentLength = _this$_scrollMetrics.contentLength,
              offset = _this$_scrollMetrics.offset,
              visibleLength = _this$_scrollMetrics.visibleLength;
          var distanceFromEnd = contentLength - visibleLength - offset;
          var renderAhead = distanceFromEnd < onEndReachedThreshold * visibleLength ? _this.props.maxToRenderPerBatch : 0;
          newState = {
            first: 0,
            last: Math.min(state.last + renderAhead, getItemCount(data) - 1)
          };
        }

        if (newState && _this._nestedChildLists.size > 0) {
          var newFirst = newState.first;
          var newLast = newState.last;

          for (var ii = newFirst; ii <= newLast; ii++) {
            var cellKeyForIndex = _this._indicesToKeys.get(ii);

            var childListKeys = cellKeyForIndex && _this._cellKeysToChildListKeys.get(cellKeyForIndex);

            if (!childListKeys) {
              continue;
            }

            var someChildHasMore = false;

            for (var _iterator = childListKeys, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator]();;) {
              var _ref;

              if (_isArray) {
                if (_i >= _iterator.length) break;
                _ref = _iterator[_i++];
              } else {
                _i = _iterator.next();
                if (_i.done) break;
                _ref = _i.value;
              }

              var childKey = _ref;

              var childList = _this._nestedChildLists.get(childKey);

              if (childList && childList.ref && childList.ref.hasMore()) {
                someChildHasMore = true;
                break;
              }
            }

            if (someChildHasMore) {
              newState.last = ii;
              break;
            }
          }
        }

        return newState;
      });
    };

    _this._createViewToken = function (index, isViewable) {
      var _this$props4 = _this.props,
          data = _this$props4.data,
          getItem = _this$props4.getItem,
          keyExtractor = _this$props4.keyExtractor;
      var item = getItem(data, index);
      return {
        index: index,
        item: item,
        key: keyExtractor(item, index),
        isViewable: isViewable
      };
    };

    _this._getFrameMetricsApprox = function (index) {
      var frame = _this._getFrameMetrics(index);

      if (frame && frame.index === index) {
        return frame;
      } else {
        var getItemLayout = _this.props.getItemLayout;
        invariant_default()(!getItemLayout, 'Should not have to estimate frames when a measurement metrics function is provided');
        return {
          length: _this._averageCellLength,
          offset: _this._averageCellLength * index
        };
      }
    };

    _this._getFrameMetrics = function (index) {
      var _this$props5 = _this.props,
          data = _this$props5.data,
          getItem = _this$props5.getItem,
          getItemCount = _this$props5.getItemCount,
          getItemLayout = _this$props5.getItemLayout,
          keyExtractor = _this$props5.keyExtractor;
      invariant_default()(getItemCount(data) > index, 'Tried to get frame for out of range index ' + index);
      var item = getItem(data, index);

      var frame = item && _this._frames[keyExtractor(item, index)];

      if (!frame || frame.index !== index) {
        if (getItemLayout) {
          frame = getItemLayout(data, index);

          if (__DEV__) {
            var frameType = prop_types_default.a.shape({
              length: prop_types_default.a.number.isRequired,
              offset: prop_types_default.a.number.isRequired,
              index: prop_types_default.a.number.isRequired
            }).isRequired;
            prop_types_default.a.checkPropTypes({
              frame: frameType
            }, {
              frame: frame
            }, 'frame', 'VirtualizedList.getItemLayout');
          }
        }
      }

      return frame;
    };

    invariant_default()(!_props.onScroll || !_props.onScroll.__isNative, 'Components based on VirtualizedList must be wrapped with Animated.createAnimatedComponent ' + 'to support native onScroll events with useNativeDriver');
    invariant_default()(_props.windowSize > 0, 'VirtualizedList: The windowSize prop must be present and set to a value greater than 0.');
    _this._fillRateHelper = new react_native_FillRateHelper(_this._getFrameMetrics);
    _this._updateCellsToRenderBatcher = new react_native_Batchinator(_this._updateCellsToRender, _this.props.updateCellsBatchingPeriod);

    if (_this.props.viewabilityConfigCallbackPairs) {
      _this._viewabilityTuples = _this.props.viewabilityConfigCallbackPairs.map(function (pair) {
        return {
          viewabilityHelper: new react_native_ViewabilityHelper(pair.viewabilityConfig),
          onViewableItemsChanged: pair.onViewableItemsChanged
        };
      });
    } else if (_this.props.onViewableItemsChanged) {
      _this._viewabilityTuples.push({
        viewabilityHelper: new react_native_ViewabilityHelper(_this.props.viewabilityConfig),
        onViewableItemsChanged: _this.props.onViewableItemsChanged
      });
    }

    var initialState = {
      first: _this.props.initialScrollIndex || 0,
      last: Math.min(_this.props.getItemCount(_this.props.data), (_this.props.initialScrollIndex || 0) + _this.props.initialNumToRender) - 1
    };

    if (_this._isNestedWithSameOrientation()) {
      var storedState = _this.context.virtualizedList.getNestedChildState(_this.props.listKey || _this._getCellKey());

      if (storedState) {
        initialState = storedState;
        _this.state = storedState;
        _this._frames = storedState.frames;
      }
    }

    _this.state = initialState;
    return _this;
  }

  _proto.componentDidMount = function componentDidMount() {
    if (this._isNestedWithSameOrientation()) {
      this.context.virtualizedList.registerAsNestedChild({
        cellKey: this._getCellKey(),
        key: this.props.listKey || this._getCellKey(),
        ref: this
      });
    }
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    if (this._isNestedWithSameOrientation()) {
      this.context.virtualizedList.unregisterAsNestedChild({
        key: this.props.listKey || this._getCellKey(),
        state: {
          first: this.state.first,
          last: this.state.last,
          frames: this._frames
        }
      });
    }

    this._updateViewableItems(null);

    this._updateCellsToRenderBatcher.dispose({
      abort: true
    });

    this._viewabilityTuples.forEach(function (tuple) {
      tuple.viewabilityHelper.dispose();
    });

    this._fillRateHelper.deactivateAndFlush();
  };

  VirtualizedList.getDerivedStateFromProps = function getDerivedStateFromProps(newProps, prevState) {
    var data = newProps.data,
        getItemCount = newProps.getItemCount,
        maxToRenderPerBatch = newProps.maxToRenderPerBatch;
    return {
      first: Math.max(0, Math.min(prevState.first, getItemCount(data) - 1 - maxToRenderPerBatch)),
      last: Math.max(0, Math.min(prevState.last, getItemCount(data) - 1))
    };
  };

  _proto._pushCells = function _pushCells(cells, stickyHeaderIndices, stickyIndicesFromProps, first, last, inversionStyle) {
    var _this2 = this;

    var _this$props6 = this.props,
        CellRendererComponent = _this$props6.CellRendererComponent,
        ItemSeparatorComponent = _this$props6.ItemSeparatorComponent,
        data = _this$props6.data,
        getItem = _this$props6.getItem,
        getItemCount = _this$props6.getItemCount,
        horizontal = _this$props6.horizontal,
        keyExtractor = _this$props6.keyExtractor;
    var stickyOffset = this.props.ListHeaderComponent ? 1 : 0;
    var end = getItemCount(data) - 1;
    var prevCellKey;
    last = Math.min(end, last);

    var _loop = function _loop(ii) {
      var item = getItem(data, ii);
      var key = keyExtractor(item, ii);

      _this2._indicesToKeys.set(ii, key);

      if (stickyIndicesFromProps.has(ii + stickyOffset)) {
        stickyHeaderIndices.push(cells.length);
      }

      cells.push(react["createElement"](VirtualizedList_CellRenderer, {
        CellRendererComponent: CellRendererComponent,
        ItemSeparatorComponent: ii < end ? ItemSeparatorComponent : undefined,
        cellKey: key,
        fillRateHelper: _this2._fillRateHelper,
        horizontal: horizontal,
        index: ii,
        inversionStyle: inversionStyle,
        item: item,
        key: key,
        prevCellKey: prevCellKey,
        onUpdateSeparators: _this2._onUpdateSeparators,
        onLayout: function onLayout(e) {
          return _this2._onCellLayout(e, key, ii);
        },
        onUnmount: _this2._onCellUnmount,
        parentProps: _this2.props,
        ref: function ref(_ref2) {
          _this2._cellRefs[key] = _ref2;
        }
      }));
      prevCellKey = key;
    };

    for (var ii = first; ii <= last; ii++) {
      _loop(ii);
    }
  };

  _proto._isVirtualizationDisabled = function _isVirtualizationDisabled() {
    return this.props.disableVirtualization || false;
  };

  _proto._isNestedWithSameOrientation = function _isNestedWithSameOrientation() {
    var nestedContext = this.context.virtualizedList;
    return !!(nestedContext && !!nestedContext.horizontal === !!this.props.horizontal);
  };

  _proto.render = function render() {
    var _this3 = this;

    if (__DEV__) {
      var flatStyles = VirtualizedList_flattenStyle(this.props.contentContainerStyle);
      warning_default()(flatStyles == null || flatStyles.flexWrap !== 'wrap', '`flexWrap: `wrap`` is not supported with the `VirtualizedList` components.' + 'Consider using `numColumns` with `FlatList` instead.');
    }

    var _this$props7 = this.props,
        ListEmptyComponent = _this$props7.ListEmptyComponent,
        ListFooterComponent = _this$props7.ListFooterComponent,
        ListHeaderComponent = _this$props7.ListHeaderComponent;
    var _this$props8 = this.props,
        data = _this$props8.data,
        horizontal = _this$props8.horizontal;

    var isVirtualizationDisabled = this._isVirtualizationDisabled();

    var inversionStyle = this.props.inverted ? this.props.horizontal ? VirtualizedList_styles.horizontallyInverted : VirtualizedList_styles.verticallyInverted : null;
    var cells = [];
    var stickyIndicesFromProps = new Set(this.props.stickyHeaderIndices);
    var stickyHeaderIndices = [];

    if (ListHeaderComponent) {
      if (stickyIndicesFromProps.has(0)) {
        stickyHeaderIndices.push(0);
      }

      var element = react["isValidElement"](ListHeaderComponent) ? ListHeaderComponent : react["createElement"](ListHeaderComponent, null);
      cells.push(react["createElement"](VirtualizedCellWrapper, {
        cellKey: this._getCellKey() + '-header',
        key: "$header"
      }, react["createElement"](View["a" /* default */], {
        onLayout: this._onLayoutHeader,
        style: StyleSheet["a" /* default */].compose(inversionStyle, this.props.ListHeaderComponentStyle)
      }, element)));
    }

    var itemCount = this.props.getItemCount(data);

    if (itemCount > 0) {
      _usedIndexForKey = false;
      _keylessItemComponentName = '';
      var spacerKey = !horizontal ? 'height' : 'width';
      var lastInitialIndex = this.props.initialScrollIndex ? -1 : this.props.initialNumToRender - 1;
      var _this$state = this.state,
          first = _this$state.first,
          last = _this$state.last;

      this._pushCells(cells, stickyHeaderIndices, stickyIndicesFromProps, 0, lastInitialIndex, inversionStyle);

      var firstAfterInitial = Math.max(lastInitialIndex + 1, first);

      if (!isVirtualizationDisabled && first > lastInitialIndex + 1) {
        var insertedStickySpacer = false;

        if (stickyIndicesFromProps.size > 0) {
          var stickyOffset = ListHeaderComponent ? 1 : 0;

          for (var ii = firstAfterInitial - 1; ii > lastInitialIndex; ii--) {
            if (stickyIndicesFromProps.has(ii + stickyOffset)) {
              var _ref3, _ref4;

              var initBlock = this._getFrameMetricsApprox(lastInitialIndex);

              var stickyBlock = this._getFrameMetricsApprox(ii);

              var leadSpace = stickyBlock.offset - initBlock.offset - (this.props.initialScrollIndex ? 0 : initBlock.length);
              cells.push(react["createElement"](View["a" /* default */], {
                key: "$sticky_lead",
                style: (_ref3 = {}, _ref3[spacerKey] = leadSpace, _ref3)
              }));

              this._pushCells(cells, stickyHeaderIndices, stickyIndicesFromProps, ii, ii, inversionStyle);

              var trailSpace = this._getFrameMetricsApprox(first).offset - (stickyBlock.offset + stickyBlock.length);
              cells.push(react["createElement"](View["a" /* default */], {
                key: "$sticky_trail",
                style: (_ref4 = {}, _ref4[spacerKey] = trailSpace, _ref4)
              }));
              insertedStickySpacer = true;
              break;
            }
          }
        }

        if (!insertedStickySpacer) {
          var _ref5;

          var _initBlock = this._getFrameMetricsApprox(lastInitialIndex);

          var firstSpace = this._getFrameMetricsApprox(first).offset - (_initBlock.offset + _initBlock.length);

          cells.push(react["createElement"](View["a" /* default */], {
            key: "$lead_spacer",
            style: (_ref5 = {}, _ref5[spacerKey] = firstSpace, _ref5)
          }));
        }
      }

      this._pushCells(cells, stickyHeaderIndices, stickyIndicesFromProps, firstAfterInitial, last, inversionStyle);

      if (!this._hasWarned.keys && _usedIndexForKey) {
        console.warn('VirtualizedList: missing keys for items, make sure to specify a key or id property on each ' + 'item or provide a custom keyExtractor.', _keylessItemComponentName);
        this._hasWarned.keys = true;
      }

      if (!isVirtualizationDisabled && last < itemCount - 1) {
        var _ref6;

        var lastFrame = this._getFrameMetricsApprox(last);

        var end = this.props.getItemLayout ? itemCount - 1 : Math.min(itemCount - 1, this._highestMeasuredFrameIndex);

        var endFrame = this._getFrameMetricsApprox(end);

        var tailSpacerLength = endFrame.offset + endFrame.length - (lastFrame.offset + lastFrame.length);
        cells.push(react["createElement"](View["a" /* default */], {
          key: "$tail_spacer",
          style: (_ref6 = {}, _ref6[spacerKey] = tailSpacerLength, _ref6)
        }));
      }
    } else if (ListEmptyComponent) {
      var _element = react["isValidElement"](ListEmptyComponent) ? ListEmptyComponent : react["createElement"](ListEmptyComponent, null);

      cells.push(react["cloneElement"](_element, {
        key: '$empty',
        onLayout: function onLayout(event) {
          _this3._onLayoutEmpty(event);

          if (_element.props.onLayout) {
            _element.props.onLayout(event);
          }
        },
        style: StyleSheet["a" /* default */].compose(inversionStyle, _element.props.style)
      }));
    }

    if (ListFooterComponent) {
      var _element2 = react["isValidElement"](ListFooterComponent) ? ListFooterComponent : react["createElement"](ListFooterComponent, null);

      cells.push(react["createElement"](VirtualizedCellWrapper, {
        cellKey: this._getCellKey() + '-footer',
        key: "$footer"
      }, react["createElement"](View["a" /* default */], {
        onLayout: this._onLayoutFooter,
        style: StyleSheet["a" /* default */].compose(inversionStyle, this.props.ListFooterComponentStyle)
      }, _element2)));
    }

    var scrollProps = VirtualizedList_objectSpread({}, this.props, {
      onContentSizeChange: this._onContentSizeChange,
      onLayout: this._onLayout,
      onScroll: this._onScroll,
      onScrollBeginDrag: this._onScrollBeginDrag,
      onScrollEndDrag: this._onScrollEndDrag,
      onMomentumScrollEnd: this._onMomentumScrollEnd,
      scrollEventThrottle: this.props.scrollEventThrottle,
      invertStickyHeaders: this.props.invertStickyHeaders !== undefined ? this.props.invertStickyHeaders : this.props.inverted,
      stickyHeaderIndices: stickyHeaderIndices
    });

    if (inversionStyle) {
      scrollProps.style = [inversionStyle, this.props.style];
    }

    this._hasMore = this.state.last < this.props.getItemCount(this.props.data) - 1;
    var ret = react["cloneElement"]((this.props.renderScrollComponent || this._defaultRenderScrollComponent)(scrollProps), {
      ref: this._captureScrollRef
    }, cells);

    if (this.props.debug) {
      return react["createElement"](View["a" /* default */], {
        style: VirtualizedList_styles.debug
      }, ret, this._renderDebugOverlay());
    } else {
      return ret;
    }
  };

  _proto.componentDidUpdate = function componentDidUpdate(prevProps) {
    var _this$props9 = this.props,
        data = _this$props9.data,
        extraData = _this$props9.extraData;

    if (data !== prevProps.data || extraData !== prevProps.extraData) {
      this._hasDataChangedSinceEndReached = true;

      this._viewabilityTuples.forEach(function (tuple) {
        tuple.viewabilityHelper.resetViewableIndices();
      });
    }

    var hiPriInProgress = this._hiPriInProgress;

    this._scheduleCellsToRenderUpdate();

    if (hiPriInProgress) {
      this._hiPriInProgress = false;
    }
  };

  _proto._computeBlankness = function _computeBlankness() {
    this._fillRateHelper.computeBlankness(this.props, this.state, this._scrollMetrics);
  };

  _proto._onCellLayout = function _onCellLayout(e, cellKey, index) {
    var layout = e.nativeEvent.layout;
    var next = {
      offset: this._selectOffset(layout),
      length: this._selectLength(layout),
      index: index,
      inLayout: true
    };
    var curr = this._frames[cellKey];

    if (!curr || next.offset !== curr.offset || next.length !== curr.length || index !== curr.index) {
      this._totalCellLength += next.length - (curr ? curr.length : 0);
      this._totalCellsMeasured += curr ? 0 : 1;
      this._averageCellLength = this._totalCellLength / this._totalCellsMeasured;
      this._frames[cellKey] = next;
      this._highestMeasuredFrameIndex = Math.max(this._highestMeasuredFrameIndex, index);

      this._scheduleCellsToRenderUpdate();
    } else {
      this._frames[cellKey].inLayout = true;
    }

    var childListKeys = this._cellKeysToChildListKeys.get(cellKey);

    if (childListKeys) {
      for (var _iterator2 = childListKeys, _isArray2 = Array.isArray(_iterator2), _i2 = 0, _iterator2 = _isArray2 ? _iterator2 : _iterator2[Symbol.iterator]();;) {
        var _ref7;

        if (_isArray2) {
          if (_i2 >= _iterator2.length) break;
          _ref7 = _iterator2[_i2++];
        } else {
          _i2 = _iterator2.next();
          if (_i2.done) break;
          _ref7 = _i2.value;
        }

        var childKey = _ref7;

        var childList = this._nestedChildLists.get(childKey);

        childList && childList.ref && childList.ref.measureLayoutRelativeToContainingList();
      }
    }

    this._computeBlankness();

    this._updateViewableItems(this.props.data);
  };

  _proto.measureLayoutRelativeToContainingList = function measureLayoutRelativeToContainingList() {
    var _this4 = this;

    try {
      if (!this._scrollRef) {
        return;
      }

      this._scrollRef.measureLayout(this.context.virtualizedList.getOutermostParentListRef().getScrollRef().getNativeScrollRef(), function (x, y, width, height) {
        _this4._offsetFromParentVirtualizedList = _this4._selectOffset({
          x: x,
          y: y
        });
        _this4._scrollMetrics.contentLength = _this4._selectLength({
          width: width,
          height: height
        });

        var scrollMetrics = _this4._convertParentScrollMetrics(_this4.context.virtualizedList.getScrollMetrics());

        _this4._scrollMetrics.visibleLength = scrollMetrics.visibleLength;
        _this4._scrollMetrics.offset = scrollMetrics.offset;
      }, function (error) {
        console.warn("VirtualizedList: Encountered an error while measuring a list's" + ' offset from its containing VirtualizedList.');
      });
    } catch (error) {
      console.warn('measureLayoutRelativeToContainingList threw an error', error.stack);
    }
  };

  _proto._renderDebugOverlay = function _renderDebugOverlay() {
    var normalize = this._scrollMetrics.visibleLength / (this._scrollMetrics.contentLength || 1);
    var framesInLayout = [];
    var itemCount = this.props.getItemCount(this.props.data);

    for (var ii = 0; ii < itemCount; ii++) {
      var frame = this._getFrameMetricsApprox(ii);

      if (frame.inLayout) {
        framesInLayout.push(frame);
      }
    }

    var windowTop = this._getFrameMetricsApprox(this.state.first).offset;

    var frameLast = this._getFrameMetricsApprox(this.state.last);

    var windowLen = frameLast.offset + frameLast.length - windowTop;
    var visTop = this._scrollMetrics.offset;
    var visLen = this._scrollMetrics.visibleLength;
    return react["createElement"](View["a" /* default */], {
      style: [VirtualizedList_styles.debugOverlayBase, VirtualizedList_styles.debugOverlay]
    }, framesInLayout.map(function (f, ii) {
      return react["createElement"](View["a" /* default */], {
        key: 'f' + ii,
        style: [VirtualizedList_styles.debugOverlayBase, VirtualizedList_styles.debugOverlayFrame, {
          top: f.offset * normalize,
          height: f.length * normalize
        }]
      });
    }), react["createElement"](View["a" /* default */], {
      style: [VirtualizedList_styles.debugOverlayBase, VirtualizedList_styles.debugOverlayFrameLast, {
        top: windowTop * normalize,
        height: windowLen * normalize
      }]
    }), react["createElement"](View["a" /* default */], {
      style: [VirtualizedList_styles.debugOverlayBase, VirtualizedList_styles.debugOverlayFrameVis, {
        top: visTop * normalize,
        height: visLen * normalize
      }]
    }));
  };

  _proto._selectLength = function _selectLength(metrics) {
    return !this.props.horizontal ? metrics.height : metrics.width;
  };

  _proto._selectOffset = function _selectOffset(metrics) {
    return !this.props.horizontal ? metrics.y : metrics.x;
  };

  _proto._maybeCallOnEndReached = function _maybeCallOnEndReached() {
    var _this$props10 = this.props,
        data = _this$props10.data,
        getItemCount = _this$props10.getItemCount,
        onEndReached = _this$props10.onEndReached,
        onEndReachedThreshold = _this$props10.onEndReachedThreshold;
    var _this$_scrollMetrics2 = this._scrollMetrics,
        contentLength = _this$_scrollMetrics2.contentLength,
        visibleLength = _this$_scrollMetrics2.visibleLength,
        offset = _this$_scrollMetrics2.offset;
    var distanceFromEnd = contentLength - visibleLength - offset;

    if (onEndReached && this.state.last === getItemCount(data) - 1 && distanceFromEnd < onEndReachedThreshold * visibleLength && (this._hasDataChangedSinceEndReached || this._scrollMetrics.contentLength !== this._sentEndForContentLength)) {
      this._hasDataChangedSinceEndReached = false;
      this._sentEndForContentLength = this._scrollMetrics.contentLength;
      onEndReached({
        distanceFromEnd: distanceFromEnd
      });
    }
  };

  _proto._scheduleCellsToRenderUpdate = function _scheduleCellsToRenderUpdate() {
    var _this$state2 = this.state,
        first = _this$state2.first,
        last = _this$state2.last;
    var _this$_scrollMetrics3 = this._scrollMetrics,
        offset = _this$_scrollMetrics3.offset,
        visibleLength = _this$_scrollMetrics3.visibleLength,
        velocity = _this$_scrollMetrics3.velocity;
    var itemCount = this.props.getItemCount(this.props.data);
    var hiPri = false;
    var scrollingThreshold = this.props.onEndReachedThreshold * visibleLength / 2;

    if (first > 0) {
      var distTop = offset - this._getFrameMetricsApprox(first).offset;

      hiPri = hiPri || distTop < 0 || velocity < -2 && distTop < scrollingThreshold;
    }

    if (last < itemCount - 1) {
      var distBottom = this._getFrameMetricsApprox(last).offset - (offset + visibleLength);
      hiPri = hiPri || distBottom < 0 || velocity > 2 && distBottom < scrollingThreshold;
    }

    if (hiPri && (this._averageCellLength || this.props.getItemLayout) && !this._hiPriInProgress) {
      this._hiPriInProgress = true;

      this._updateCellsToRenderBatcher.dispose({
        abort: true
      });

      this._updateCellsToRender();

      return;
    } else {
      this._updateCellsToRenderBatcher.schedule();
    }
  };

  _proto._updateViewableItems = function _updateViewableItems(data) {
    var _this5 = this;

    var getItemCount = this.props.getItemCount;

    this._viewabilityTuples.forEach(function (tuple) {
      tuple.viewabilityHelper.onUpdate(getItemCount(data), _this5._scrollMetrics.offset, _this5._scrollMetrics.visibleLength, _this5._getFrameMetrics, _this5._createViewToken, tuple.onViewableItemsChanged, _this5.state);
    });
  };

  return VirtualizedList;
}(react["PureComponent"]);

VirtualizedList_VirtualizedList.defaultProps = {
  disableVirtualization: false,
  horizontal: false,
  initialNumToRender: 10,
  keyExtractor: function keyExtractor(item, index) {
    if (item.key != null) {
      return item.key;
    }

    if (item.id != null) {
      return item.id;
    }

    _usedIndexForKey = true;

    if (item.type && item.type.displayName) {
      _keylessItemComponentName = item.type.displayName;
    }

    return String(index);
  },
  maxToRenderPerBatch: 10,
  onEndReachedThreshold: 2,
  scrollEventThrottle: 50,
  updateCellsBatchingPeriod: 50,
  windowSize: 21
};
VirtualizedList_VirtualizedList.contextTypes = {
  virtualizedCell: prop_types_default.a.shape({
    cellKey: prop_types_default.a.string
  }),
  virtualizedList: prop_types_default.a.shape({
    getScrollMetrics: prop_types_default.a.func,
    horizontal: prop_types_default.a.bool,
    getOutermostParentListRef: prop_types_default.a.func,
    getNestedChildState: prop_types_default.a.func,
    registerAsNestedChild: prop_types_default.a.func,
    unregisterAsNestedChild: prop_types_default.a.func
  })
};
VirtualizedList_VirtualizedList.childContextTypes = {
  virtualizedList: prop_types_default.a.shape({
    getScrollMetrics: prop_types_default.a.func,
    horizontal: prop_types_default.a.bool,
    getOutermostParentListRef: prop_types_default.a.func,
    getNestedChildState: prop_types_default.a.func,
    registerAsNestedChild: prop_types_default.a.func,
    unregisterAsNestedChild: prop_types_default.a.func
  })
};

var VirtualizedList_CellRenderer = function (_React$Component) {
  VirtualizedList_inheritsLoose(CellRenderer, _React$Component);

  function CellRenderer() {
    var _this6;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this6 = _React$Component.call.apply(_React$Component, [this].concat(args)) || this;
    _this6.state = {
      separatorProps: {
        highlighted: false,
        leadingItem: _this6.props.item
      }
    };
    _this6._separators = {
      highlight: function highlight() {
        var _this6$props = _this6.props,
            cellKey = _this6$props.cellKey,
            prevCellKey = _this6$props.prevCellKey;

        _this6.props.onUpdateSeparators([cellKey, prevCellKey], {
          highlighted: true
        });
      },
      unhighlight: function unhighlight() {
        var _this6$props2 = _this6.props,
            cellKey = _this6$props2.cellKey,
            prevCellKey = _this6$props2.prevCellKey;

        _this6.props.onUpdateSeparators([cellKey, prevCellKey], {
          highlighted: false
        });
      },
      updateProps: function updateProps(select, newProps) {
        var _this6$props3 = _this6.props,
            cellKey = _this6$props3.cellKey,
            prevCellKey = _this6$props3.prevCellKey;

        _this6.props.onUpdateSeparators([select === 'leading' ? prevCellKey : cellKey], newProps);
      }
    };
    return _this6;
  }

  var _proto2 = CellRenderer.prototype;

  _proto2.getChildContext = function getChildContext() {
    return {
      virtualizedCell: {
        cellKey: this.props.cellKey
      }
    };
  };

  _proto2.updateSeparatorProps = function updateSeparatorProps(newProps) {
    this.setState(function (state) {
      return {
        separatorProps: VirtualizedList_objectSpread({}, state.separatorProps, {}, newProps)
      };
    });
  };

  _proto2.componentWillUnmount = function componentWillUnmount() {
    this.props.onUnmount(this.props.cellKey);
  };

  _proto2.render = function render() {
    var _this$props11 = this.props,
        CellRendererComponent = _this$props11.CellRendererComponent,
        ItemSeparatorComponent = _this$props11.ItemSeparatorComponent,
        fillRateHelper = _this$props11.fillRateHelper,
        horizontal = _this$props11.horizontal,
        item = _this$props11.item,
        index = _this$props11.index,
        inversionStyle = _this$props11.inversionStyle,
        parentProps = _this$props11.parentProps;
    var renderItem = parentProps.renderItem,
        getItemLayout = parentProps.getItemLayout;
    invariant_default()(renderItem, 'no renderItem!');
    var element = renderItem({
      item: item,
      index: index,
      separators: this._separators
    });
    var onLayout = getItemLayout && !parentProps.debug && !fillRateHelper.enabled() ? undefined : this.props.onLayout;
    var itemSeparator = ItemSeparatorComponent && react["createElement"](ItemSeparatorComponent, this.state.separatorProps);
    var cellStyle = inversionStyle ? horizontal ? [VirtualizedList_styles.rowReverse, inversionStyle] : [VirtualizedList_styles.columnReverse, inversionStyle] : horizontal ? [VirtualizedList_styles.row, inversionStyle] : inversionStyle;

    if (!CellRendererComponent) {
      return react["createElement"](View["a" /* default */], {
        style: cellStyle,
        onLayout: onLayout
      }, element, itemSeparator);
    }

    return react["createElement"](CellRendererComponent, VirtualizedList_extends({}, this.props, {
      style: cellStyle,
      onLayout: onLayout
    }), element, itemSeparator);
  };

  return CellRenderer;
}(react["Component"]);

VirtualizedList_CellRenderer.childContextTypes = {
  virtualizedCell: prop_types_default.a.shape({
    cellKey: prop_types_default.a.string
  })
};

var VirtualizedCellWrapper = function (_React$Component2) {
  VirtualizedList_inheritsLoose(VirtualizedCellWrapper, _React$Component2);

  function VirtualizedCellWrapper() {
    return _React$Component2.apply(this, arguments) || this;
  }

  var _proto3 = VirtualizedCellWrapper.prototype;

  _proto3.getChildContext = function getChildContext() {
    return {
      virtualizedCell: {
        cellKey: this.props.cellKey
      }
    };
  };

  _proto3.render = function render() {
    return this.props.children;
  };

  return VirtualizedCellWrapper;
}(react["Component"]);

VirtualizedCellWrapper.childContextTypes = {
  virtualizedCell: prop_types_default.a.shape({
    cellKey: prop_types_default.a.string
  })
};
var VirtualizedList_styles = StyleSheet["a" /* default */].create({
  verticallyInverted: {
    transform: [{
      scaleY: -1
    }]
  },
  horizontallyInverted: {
    transform: [{
      scaleX: -1
    }]
  },
  row: {
    flexDirection: 'row'
  },
  rowReverse: {
    flexDirection: 'row-reverse'
  },
  columnReverse: {
    flexDirection: 'column-reverse'
  },
  debug: {
    flex: 1
  },
  debugOverlayBase: {
    position: 'absolute',
    top: 0,
    right: 0
  },
  debugOverlay: {
    bottom: 0,
    width: 20,
    borderColor: 'blue',
    borderWidth: 1
  },
  debugOverlayFrame: {
    left: 0,
    backgroundColor: 'orange'
  },
  debugOverlayFrameLast: {
    left: 0,
    borderColor: 'green',
    borderWidth: 2
  },
  debugOverlayFrameVis: {
    left: 0,
    borderColor: 'red',
    borderWidth: 2
  }
});
/* harmony default export */ var react_native_VirtualizedList = (VirtualizedList_VirtualizedList);
// CONCATENATED MODULE: ./node_modules/react-native-web/dist/vendor/react-native/FlatList/index.js


function FlatList_extends() {
  FlatList_extends = Object.assign || function (target) {
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

  return FlatList_extends.apply(this, arguments);
}

function FlatList_inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  subClass.__proto__ = superClass;
}

function FlatList_ownKeys(object, enumerableOnly) {
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

function FlatList_objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      FlatList_ownKeys(Object(source), true).forEach(function (key) {
        FlatList_defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      FlatList_ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

function FlatList_defineProperty(obj, key, value) {
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








var FlatList_defaultProps = FlatList_objectSpread({}, react_native_VirtualizedList.defaultProps, {
  numColumns: 1,
  removeClippedSubviews: false
});

var FlatList_FlatList = function (_React$PureComponent) {
  FlatList_inheritsLoose(FlatList, _React$PureComponent);

  var _proto = FlatList.prototype;

  _proto.scrollToEnd = function scrollToEnd(params) {
    if (this._listRef) {
      this._listRef.scrollToEnd(params);
    }
  };

  _proto.scrollToIndex = function scrollToIndex(params) {
    if (this._listRef) {
      this._listRef.scrollToIndex(params);
    }
  };

  _proto.scrollToItem = function scrollToItem(params) {
    if (this._listRef) {
      this._listRef.scrollToItem(params);
    }
  };

  _proto.scrollToOffset = function scrollToOffset(params) {
    if (this._listRef) {
      this._listRef.scrollToOffset(params);
    }
  };

  _proto.recordInteraction = function recordInteraction() {
    if (this._listRef) {
      this._listRef.recordInteraction();
    }
  };

  _proto.flashScrollIndicators = function flashScrollIndicators() {
    if (this._listRef) {
      this._listRef.flashScrollIndicators();
    }
  };

  _proto.getScrollResponder = function getScrollResponder() {
    if (this._listRef) {
      return this._listRef.getScrollResponder();
    }
  };

  _proto.getNativeScrollRef = function getNativeScrollRef() {
    if (this._listRef) {
      return this._listRef.getScrollRef();
    }
  };

  _proto.getScrollableNode = function getScrollableNode() {
    if (this._listRef) {
      return this._listRef.getScrollableNode();
    }
  };

  _proto.setNativeProps = function setNativeProps(props) {
    if (this._listRef) {
      this._listRef.setNativeProps(props);
    }
  };

  function FlatList(props) {
    var _this;

    _this = _React$PureComponent.call(this, props) || this;
    _this._virtualizedListPairs = [];

    _this._captureRef = function (ref) {
      _this._listRef = ref;
    };

    _this._getItem = function (data, index) {
      var numColumns = _this.props.numColumns;

      if (numColumns > 1) {
        var ret = [];

        for (var kk = 0; kk < numColumns; kk++) {
          var _item = data[index * numColumns + kk];

          if (_item != null) {
            ret.push(_item);
          }
        }

        return ret;
      } else {
        return data[index];
      }
    };

    _this._getItemCount = function (data) {
      return data ? Math.ceil(data.length / _this.props.numColumns) : 0;
    };

    _this._keyExtractor = function (items, index) {
      var _this$props = _this.props,
          keyExtractor = _this$props.keyExtractor,
          numColumns = _this$props.numColumns;

      if (numColumns > 1) {
        invariant_default()(Array.isArray(items), 'FlatList: Encountered internal consistency error, expected each item to consist of an ' + 'array with 1-%s columns; instead, received a single item.', numColumns);
        return items.map(function (it, kk) {
          return keyExtractor(it, index * numColumns + kk);
        }).join(':');
      } else {
        return keyExtractor(items, index);
      }
    };

    _this._renderItem = function (info) {
      var _this$props2 = _this.props,
          renderItem = _this$props2.renderItem,
          numColumns = _this$props2.numColumns,
          columnWrapperStyle = _this$props2.columnWrapperStyle;

      if (numColumns > 1) {
        var _item2 = info.item,
            _index = info.index;
        invariant_default()(Array.isArray(_item2), 'Expected array of items with numColumns > 1');
        return react["createElement"](View["a" /* default */], {
          style: StyleSheet["a" /* default */].compose(FlatList_styles.row, columnWrapperStyle)
        }, _item2.map(function (it, kk) {
          var element = renderItem({
            item: it,
            index: _index * numColumns + kk,
            separators: info.separators
          });
          return element != null ? react["createElement"](react["Fragment"], {
            key: kk
          }, element) : null;
        }));
      } else {
        return renderItem(info);
      }
    };

    _this._checkProps(_this.props);

    if (_this.props.viewabilityConfigCallbackPairs) {
      _this._virtualizedListPairs = _this.props.viewabilityConfigCallbackPairs.map(function (pair) {
        return {
          viewabilityConfig: pair.viewabilityConfig,
          onViewableItemsChanged: _this._createOnViewableItemsChanged(pair.onViewableItemsChanged)
        };
      });
    } else if (_this.props.onViewableItemsChanged) {
      _this._virtualizedListPairs.push({
        viewabilityConfig: _this.props.viewabilityConfig,
        onViewableItemsChanged: _this._createOnViewableItemsChanged(_this.props.onViewableItemsChanged)
      });
    }

    return _this;
  }

  _proto.componentDidUpdate = function componentDidUpdate(prevProps) {
    invariant_default()(prevProps.numColumns === this.props.numColumns, 'Changing numColumns on the fly is not supported. Change the key prop on FlatList when ' + 'changing the number of columns to force a fresh render of the component.');
    invariant_default()(prevProps.onViewableItemsChanged === this.props.onViewableItemsChanged, 'Changing onViewableItemsChanged on the fly is not supported');
    invariant_default()(!react_native_deepDiffer(prevProps.viewabilityConfig, this.props.viewabilityConfig), 'Changing viewabilityConfig on the fly is not supported');
    invariant_default()(prevProps.viewabilityConfigCallbackPairs === this.props.viewabilityConfigCallbackPairs, 'Changing viewabilityConfigCallbackPairs on the fly is not supported');

    this._checkProps(this.props);
  };

  _proto._checkProps = function _checkProps(props) {
    var getItem = props.getItem,
        getItemCount = props.getItemCount,
        horizontal = props.horizontal,
        numColumns = props.numColumns,
        columnWrapperStyle = props.columnWrapperStyle,
        onViewableItemsChanged = props.onViewableItemsChanged,
        viewabilityConfigCallbackPairs = props.viewabilityConfigCallbackPairs;
    invariant_default()(!getItem && !getItemCount, 'FlatList does not support custom data formats.');

    if (numColumns > 1) {
      invariant_default()(!horizontal, 'numColumns does not support horizontal.');
    } else {
      invariant_default()(!columnWrapperStyle, 'columnWrapperStyle not supported for single column lists');
    }

    invariant_default()(!(onViewableItemsChanged && viewabilityConfigCallbackPairs), 'FlatList does not support setting both onViewableItemsChanged and ' + 'viewabilityConfigCallbackPairs.');
  };

  _proto._pushMultiColumnViewable = function _pushMultiColumnViewable(arr, v) {
    var _this$props3 = this.props,
        numColumns = _this$props3.numColumns,
        keyExtractor = _this$props3.keyExtractor;
    v.item.forEach(function (item, ii) {
      invariant_default()(v.index != null, 'Missing index!');
      var index = v.index * numColumns + ii;
      arr.push(FlatList_objectSpread({}, v, {
        item: item,
        key: keyExtractor(item, index),
        index: index
      }));
    });
  };

  _proto._createOnViewableItemsChanged = function _createOnViewableItemsChanged(onViewableItemsChanged) {
    var _this2 = this;

    return function (info) {
      var numColumns = _this2.props.numColumns;

      if (onViewableItemsChanged) {
        if (numColumns > 1) {
          var changed = [];
          var viewableItems = [];
          info.viewableItems.forEach(function (v) {
            return _this2._pushMultiColumnViewable(viewableItems, v);
          });
          info.changed.forEach(function (v) {
            return _this2._pushMultiColumnViewable(changed, v);
          });
          onViewableItemsChanged({
            viewableItems: viewableItems,
            changed: changed
          });
        } else {
          onViewableItemsChanged(info);
        }
      }
    };
  };

  _proto.render = function render() {
    return react["createElement"](react_native_VirtualizedList, FlatList_extends({}, this.props, {
      renderItem: this._renderItem,
      getItem: this._getItem,
      getItemCount: this._getItemCount,
      keyExtractor: this._keyExtractor,
      ref: this._captureRef,
      viewabilityConfigCallbackPairs: this._virtualizedListPairs
    }));
  };

  return FlatList;
}(react["PureComponent"]);

FlatList_FlatList.defaultProps = FlatList_defaultProps;
var FlatList_styles = StyleSheet["a" /* default */].create({
  row: {
    flexDirection: 'row'
  }
});
/* harmony default export */ var react_native_FlatList = (FlatList_FlatList);
// CONCATENATED MODULE: ./node_modules/react-native-web/dist/exports/FlatList/index.js

/* harmony default export */ var exports_FlatList = (react_native_FlatList);
// EXTERNAL MODULE: ./node_modules/react-native-web/dist/exports/Image/index.js + 1 modules
var Image = __webpack_require__("uXPr");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.reduce.js
var es_array_reduce = __webpack_require__("E9XD");

// CONCATENATED MODULE: ./node_modules/react-native-web/dist/vendor/react-native/VirtualizedSectionList/index.js




function VirtualizedSectionList_extends() {
  VirtualizedSectionList_extends = Object.assign || function (target) {
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

  return VirtualizedSectionList_extends.apply(this, arguments);
}

function VirtualizedSectionList_ownKeys(object, enumerableOnly) {
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

function VirtualizedSectionList_objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      VirtualizedSectionList_ownKeys(Object(source), true).forEach(function (key) {
        VirtualizedSectionList_defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      VirtualizedSectionList_ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

function VirtualizedSectionList_defineProperty(obj, key, value) {
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

function VirtualizedSectionList_assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function VirtualizedSectionList_inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  subClass.__proto__ = superClass;
}






var VirtualizedSectionList_VirtualizedSectionList = function (_React$PureComponent) {
  VirtualizedSectionList_inheritsLoose(VirtualizedSectionList, _React$PureComponent);

  var _proto = VirtualizedSectionList.prototype;

  _proto.scrollToLocation = function scrollToLocation(params) {
    var index = params.itemIndex;

    for (var i = 0; i < params.sectionIndex; i++) {
      index += this.props.getItemCount(this.props.sections[i].data) + 2;
    }

    var viewOffset = 0;

    if (params.itemIndex > 0 && this.props.stickySectionHeadersEnabled) {
      var frame = this._listRef._getFrameMetricsApprox(index - params.itemIndex);

      viewOffset = frame.length;
    }

    var toIndexParams = VirtualizedSectionList_objectSpread({}, params, {
      viewOffset: viewOffset,
      index: index
    });

    this._listRef.scrollToIndex(toIndexParams);
  };

  _proto.getListRef = function getListRef() {
    return this._listRef;
  };

  function VirtualizedSectionList(props, context) {
    var _this;

    _this = _React$PureComponent.call(this, props, context) || this;

    _this._keyExtractor = function (item, index) {
      var info = _this._subExtractor(index);

      return info && info.key || String(index);
    };

    _this._convertViewable = function (viewable) {
      invariant_default()(viewable.index != null, 'Received a broken ViewToken');

      var info = _this._subExtractor(viewable.index);

      if (!info) {
        return null;
      }

      var keyExtractor = info.section.keyExtractor || _this.props.keyExtractor;
      return VirtualizedSectionList_objectSpread({}, viewable, {
        index: info.index,
        key: keyExtractor(viewable.item, info.index),
        section: info.section
      });
    };

    _this._onViewableItemsChanged = function (_ref) {
      var viewableItems = _ref.viewableItems,
          changed = _ref.changed;

      if (_this.props.onViewableItemsChanged) {
        _this.props.onViewableItemsChanged({
          viewableItems: viewableItems.map(_this._convertViewable, VirtualizedSectionList_assertThisInitialized(_this)).filter(Boolean),
          changed: changed.map(_this._convertViewable, VirtualizedSectionList_assertThisInitialized(_this)).filter(Boolean)
        });
      }
    };

    _this._renderItem = function (_ref2) {
      var item = _ref2.item,
          index = _ref2.index;

      var info = _this._subExtractor(index);

      if (!info) {
        return null;
      }

      var infoIndex = info.index;

      if (infoIndex == null) {
        var section = info.section;

        if (info.header === true) {
          var renderSectionHeader = _this.props.renderSectionHeader;
          return renderSectionHeader ? renderSectionHeader({
            section: section
          }) : null;
        } else {
          var renderSectionFooter = _this.props.renderSectionFooter;
          return renderSectionFooter ? renderSectionFooter({
            section: section
          }) : null;
        }
      } else {
        var renderItem = info.section.renderItem || _this.props.renderItem;

        var SeparatorComponent = _this._getSeparatorComponent(index, info);

        invariant_default()(renderItem, 'no renderItem!');
        return react["createElement"](VirtualizedSectionList_ItemWithSeparator, {
          SeparatorComponent: SeparatorComponent,
          LeadingSeparatorComponent: infoIndex === 0 ? _this.props.SectionSeparatorComponent : undefined,
          cellKey: info.key,
          index: infoIndex,
          item: item,
          leadingItem: info.leadingItem,
          leadingSection: info.leadingSection,
          onUpdateSeparator: _this._onUpdateSeparator,
          prevCellKey: (_this._subExtractor(index - 1) || {}).key,
          ref: function ref(_ref3) {
            _this._cellRefs[info.key] = _ref3;
          },
          renderItem: renderItem,
          section: info.section,
          trailingItem: info.trailingItem,
          trailingSection: info.trailingSection
        });
      }
    };

    _this._onUpdateSeparator = function (key, newProps) {
      var ref = _this._cellRefs[key];
      ref && ref.updateSeparatorProps(newProps);
    };

    _this._cellRefs = {};

    _this._captureRef = function (ref) {
      _this._listRef = ref;
    };

    _this.state = _this._computeState(props);
    return _this;
  }

  _proto.UNSAFE_componentWillReceiveProps = function UNSAFE_componentWillReceiveProps(nextProps) {
    this.setState(this._computeState(nextProps));
  };

  _proto._computeState = function _computeState(props) {
    var offset = props.ListHeaderComponent ? 1 : 0;
    var stickyHeaderIndices = [];
    var itemCount = props.sections ? props.sections.reduce(function (v, section) {
      stickyHeaderIndices.push(v + offset);
      return v + props.getItemCount(section.data) + 2;
    }, 0) : 0;
    return {
      childProps: VirtualizedSectionList_objectSpread({}, props, {
        renderItem: this._renderItem,
        ItemSeparatorComponent: undefined,
        data: props.sections,
        getItemCount: function getItemCount() {
          return itemCount;
        },
        getItem: function getItem(sections, index) {
          return _getItem(props, sections, index);
        },
        keyExtractor: this._keyExtractor,
        onViewableItemsChanged: props.onViewableItemsChanged ? this._onViewableItemsChanged : undefined,
        stickyHeaderIndices: props.stickySectionHeadersEnabled ? stickyHeaderIndices : undefined
      })
    };
  };

  _proto.render = function render() {
    return react["createElement"](react_native_VirtualizedList, VirtualizedSectionList_extends({}, this.state.childProps, {
      ref: this._captureRef
    }));
  };

  _proto._subExtractor = function _subExtractor(index) {
    var itemIndex = index;
    var _this$props = this.props,
        getItem = _this$props.getItem,
        getItemCount = _this$props.getItemCount,
        keyExtractor = _this$props.keyExtractor,
        sections = _this$props.sections;

    for (var i = 0; i < sections.length; i++) {
      var section = sections[i];
      var sectionData = section.data;
      var key = section.key || String(i);
      itemIndex -= 1;

      if (itemIndex >= getItemCount(sectionData) + 1) {
        itemIndex -= getItemCount(sectionData) + 1;
      } else if (itemIndex === -1) {
        return {
          section: section,
          key: key + ':header',
          index: null,
          header: true,
          trailingSection: sections[i + 1]
        };
      } else if (itemIndex === getItemCount(sectionData)) {
        return {
          section: section,
          key: key + ':footer',
          index: null,
          header: false,
          trailingSection: sections[i + 1]
        };
      } else {
        var extractor = section.keyExtractor || keyExtractor;
        return {
          section: section,
          key: key + ':' + extractor(getItem(sectionData, itemIndex), itemIndex),
          index: itemIndex,
          leadingItem: getItem(sectionData, itemIndex - 1),
          leadingSection: sections[i - 1],
          trailingItem: getItem(sectionData, itemIndex + 1),
          trailingSection: sections[i + 1]
        };
      }
    }
  };

  _proto._getSeparatorComponent = function _getSeparatorComponent(index, info) {
    info = info || this._subExtractor(index);

    if (!info) {
      return null;
    }

    var ItemSeparatorComponent = info.section.ItemSeparatorComponent || this.props.ItemSeparatorComponent;
    var SectionSeparatorComponent = this.props.SectionSeparatorComponent;
    var isLastItemInList = index === this.state.childProps.getItemCount() - 1;
    var isLastItemInSection = info.index === this.props.getItemCount(info.section.data) - 1;

    if (SectionSeparatorComponent && isLastItemInSection) {
      return SectionSeparatorComponent;
    }

    if (ItemSeparatorComponent && !isLastItemInSection && !isLastItemInList) {
      return ItemSeparatorComponent;
    }

    return null;
  };

  return VirtualizedSectionList;
}(react["PureComponent"]);

VirtualizedSectionList_VirtualizedSectionList.defaultProps = VirtualizedSectionList_objectSpread({}, react_native_VirtualizedList.defaultProps, {
  data: []
});

var VirtualizedSectionList_ItemWithSeparator = function (_React$Component) {
  VirtualizedSectionList_inheritsLoose(ItemWithSeparator, _React$Component);

  function ItemWithSeparator() {
    var _this2;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this2 = _React$Component.call.apply(_React$Component, [this].concat(args)) || this;
    _this2.state = {
      separatorProps: {
        highlighted: false,
        leadingItem: _this2.props.item,
        leadingSection: _this2.props.leadingSection,
        section: _this2.props.section,
        trailingItem: _this2.props.trailingItem,
        trailingSection: _this2.props.trailingSection
      },
      leadingSeparatorProps: {
        highlighted: false,
        leadingItem: _this2.props.leadingItem,
        leadingSection: _this2.props.leadingSection,
        section: _this2.props.section,
        trailingItem: _this2.props.item,
        trailingSection: _this2.props.trailingSection
      }
    };
    _this2._separators = {
      highlight: function highlight() {
        ['leading', 'trailing'].forEach(function (s) {
          return _this2._separators.updateProps(s, {
            highlighted: true
          });
        });
      },
      unhighlight: function unhighlight() {
        ['leading', 'trailing'].forEach(function (s) {
          return _this2._separators.updateProps(s, {
            highlighted: false
          });
        });
      },
      updateProps: function updateProps(select, newProps) {
        var _this2$props = _this2.props,
            LeadingSeparatorComponent = _this2$props.LeadingSeparatorComponent,
            cellKey = _this2$props.cellKey,
            prevCellKey = _this2$props.prevCellKey;

        if (select === 'leading' && LeadingSeparatorComponent != null) {
          _this2.setState(function (state) {
            return {
              leadingSeparatorProps: VirtualizedSectionList_objectSpread({}, state.leadingSeparatorProps, {}, newProps)
            };
          });
        } else {
          _this2.props.onUpdateSeparator(select === 'leading' && prevCellKey || cellKey, newProps);
        }
      }
    };
    return _this2;
  }

  ItemWithSeparator.getDerivedStateFromProps = function getDerivedStateFromProps(props, prevState) {
    return {
      separatorProps: VirtualizedSectionList_objectSpread({}, prevState.separatorProps, {
        leadingItem: props.item,
        leadingSection: props.leadingSection,
        section: props.section,
        trailingItem: props.trailingItem,
        trailingSection: props.trailingSection
      }),
      leadingSeparatorProps: VirtualizedSectionList_objectSpread({}, prevState.leadingSeparatorProps, {
        leadingItem: props.leadingItem,
        leadingSection: props.leadingSection,
        section: props.section,
        trailingItem: props.item,
        trailingSection: props.trailingSection
      })
    };
  };

  var _proto2 = ItemWithSeparator.prototype;

  _proto2.updateSeparatorProps = function updateSeparatorProps(newProps) {
    this.setState(function (state) {
      return {
        separatorProps: VirtualizedSectionList_objectSpread({}, state.separatorProps, {}, newProps)
      };
    });
  };

  _proto2.render = function render() {
    var _this$props2 = this.props,
        LeadingSeparatorComponent = _this$props2.LeadingSeparatorComponent,
        SeparatorComponent = _this$props2.SeparatorComponent,
        item = _this$props2.item,
        index = _this$props2.index,
        section = _this$props2.section;
    var element = this.props.renderItem({
      item: item,
      index: index,
      section: section,
      separators: this._separators
    });
    var leadingSeparator = LeadingSeparatorComponent && react["createElement"](LeadingSeparatorComponent, this.state.leadingSeparatorProps);
    var separator = SeparatorComponent && react["createElement"](SeparatorComponent, this.state.separatorProps);
    return leadingSeparator || separator ? react["createElement"](View["a" /* default */], null, leadingSeparator, element, separator) : element;
  };

  return ItemWithSeparator;
}(react["Component"]);

function _getItem(props, sections, index) {
  if (!sections) {
    return null;
  }

  var itemIdx = index - 1;

  for (var i = 0; i < sections.length; i++) {
    var section = sections[i];
    var sectionData = section.data;
    var itemCount = props.getItemCount(sectionData);

    if (itemIdx === -1 || itemIdx === itemCount) {
      return section;
    } else if (itemIdx < itemCount) {
      return props.getItem(sectionData, itemIdx);
    } else {
      itemIdx -= itemCount + 2;
    }
  }

  return null;
}

/* harmony default export */ var react_native_VirtualizedSectionList = (VirtualizedSectionList_VirtualizedSectionList);
// CONCATENATED MODULE: ./node_modules/react-native-web/dist/vendor/react-native/SectionList/index.js


function SectionList_extends() {
  SectionList_extends = Object.assign || function (target) {
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

  return SectionList_extends.apply(this, arguments);
}

function SectionList_inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  subClass.__proto__ = superClass;
}

function SectionList_ownKeys(object, enumerableOnly) {
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

function SectionList_objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      SectionList_ownKeys(Object(source), true).forEach(function (key) {
        SectionList_defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      SectionList_ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

function SectionList_defineProperty(obj, key, value) {
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






var SectionList_defaultProps = SectionList_objectSpread({}, react_native_VirtualizedSectionList.defaultProps, {
  stickySectionHeadersEnabled: Platform["a" /* default */].OS === 'ios'
});

var SectionList_SectionList = function (_React$PureComponent) {
  SectionList_inheritsLoose(SectionList, _React$PureComponent);

  function SectionList() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _React$PureComponent.call.apply(_React$PureComponent, [this].concat(args)) || this;

    _this._captureRef = function (ref) {
      _this._wrapperListRef = ref;
    };

    return _this;
  }

  var _proto = SectionList.prototype;

  _proto.scrollToLocation = function scrollToLocation(params) {
    if (this._wrapperListRef != null) {
      this._wrapperListRef.scrollToLocation(params);
    }
  };

  _proto.recordInteraction = function recordInteraction() {
    var listRef = this._wrapperListRef && this._wrapperListRef.getListRef();

    listRef && listRef.recordInteraction();
  };

  _proto.flashScrollIndicators = function flashScrollIndicators() {
    var listRef = this._wrapperListRef && this._wrapperListRef.getListRef();

    listRef && listRef.flashScrollIndicators();
  };

  _proto.getScrollResponder = function getScrollResponder() {
    var listRef = this._wrapperListRef && this._wrapperListRef.getListRef();

    if (listRef) {
      return listRef.getScrollResponder();
    }
  };

  _proto.getScrollableNode = function getScrollableNode() {
    var listRef = this._wrapperListRef && this._wrapperListRef.getListRef();

    if (listRef) {
      return listRef.getScrollableNode();
    }
  };

  _proto.setNativeProps = function setNativeProps(props) {
    var listRef = this._wrapperListRef && this._wrapperListRef.getListRef();

    if (listRef) {
      listRef.setNativeProps(props);
    }
  };

  _proto.render = function render() {
    return react["createElement"](react_native_VirtualizedSectionList, SectionList_extends({}, this.props, {
      ref: this._captureRef,
      getItemCount: function getItemCount(items) {
        return items.length;
      },
      getItem: function getItem(items, index) {
        return items[index];
      }
    }));
  };

  return SectionList;
}(react["PureComponent"]);

SectionList_SectionList.defaultProps = SectionList_defaultProps;
/* harmony default export */ var react_native_SectionList = (SectionList_SectionList);
// CONCATENATED MODULE: ./node_modules/react-native-web/dist/exports/SectionList/index.js

/* harmony default export */ var exports_SectionList = (react_native_SectionList);
// EXTERNAL MODULE: ./node_modules/react-native-web/dist/exports/Text/index.js
var Text = __webpack_require__("IIls");

// CONCATENATED MODULE: ./node_modules/react-native-web/dist/exports/Animated/index.js
function Animated_ownKeys(object, enumerableOnly) {
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

function Animated_objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      Animated_ownKeys(Object(source), true).forEach(function (key) {
        Animated_defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      Animated_ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

function Animated_defineProperty(obj, key, value) {
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









var Animated = Animated_objectSpread({}, Animated_AnimatedImplementation, {
  FlatList: Animated_AnimatedImplementation.createAnimatedComponent(exports_FlatList, {
    scrollEventThrottle: 0.0001
  }),
  Image: Animated_AnimatedImplementation.createAnimatedComponent(Image["a" /* default */]),
  ScrollView: Animated_AnimatedImplementation.createAnimatedComponent(exports_ScrollView, {
    scrollEventThrottle: 0.0001
  }),
  SectionList: Animated_AnimatedImplementation.createAnimatedComponent(exports_SectionList, {
    scrollEventThrottle: 0.0001
  }),
  View: Animated_AnimatedImplementation.createAnimatedComponent(View["a" /* default */]),
  Text: Animated_AnimatedImplementation.createAnimatedComponent(Text["a" /* default */])
});

/* harmony default export */ var exports_Animated = (Animated);
// CONCATENATED MODULE: ./node_modules/react-native-web/dist/exports/Appearance/index.js


function getQuery() {
  return ExecutionEnvironment["canUseDOM"] && window.matchMedia != null ? window.matchMedia('(prefers-color-scheme: dark)') : null;
}

var query = getQuery();
var listenerMapping = new WeakMap();
var Appearance = {
  getColorScheme: function getColorScheme() {
    return query && query.matches ? 'dark' : 'light';
  },
  addChangeListener: function addChangeListener(listener) {
    var mappedListener = listenerMapping.get(listener);

    if (!mappedListener) {
      mappedListener = function mappedListener(_ref) {
        var matches = _ref.matches;
        listener({
          colorScheme: matches ? 'dark' : 'light'
        });
      };

      listenerMapping.set(listener, mappedListener);
    }

    if (query) {
      query.addListener(mappedListener);
    }
  },
  removeChangeListener: function removeChangeListener(listener) {
    var mappedListener = listenerMapping.get(listener);

    if (mappedListener) {
      if (query) {
        query.removeListener(mappedListener);
      }

      listenerMapping.delete(listener);
    }
  }
};
/* harmony default export */ var exports_Appearance = (Appearance);
// EXTERNAL MODULE: ./node_modules/react-native-web/dist/exports/AppRegistry/index.js + 2 modules
var AppRegistry = __webpack_require__("yKOc");

// EXTERNAL MODULE: ./node_modules/array-find-index/index.js
var array_find_index = __webpack_require__("841G");
var array_find_index_default = /*#__PURE__*/__webpack_require__.n(array_find_index);

// CONCATENATED MODULE: ./node_modules/react-native-web/dist/exports/AppState/index.js
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




var isPrefixed = ExecutionEnvironment["canUseDOM"] && !document.hasOwnProperty('hidden') && document.hasOwnProperty('webkitHidden');
var EVENT_TYPES = ['change', 'memoryWarning'];
var VISIBILITY_CHANGE_EVENT = isPrefixed ? 'webkitvisibilitychange' : 'visibilitychange';
var VISIBILITY_STATE_PROPERTY = isPrefixed ? 'webkitVisibilityState' : 'visibilityState';
var AppStates = {
  BACKGROUND: 'background',
  ACTIVE: 'active'
};
var listeners = [];

var AppState_AppState = function () {
  function AppState() {}

  AppState.addEventListener = function addEventListener(type, handler) {
    if (AppState.isAvailable) {
      invariant_default()(EVENT_TYPES.indexOf(type) !== -1, 'Trying to subscribe to unknown event: "%s"', type);

      if (type === 'change') {
        var callback = function callback() {
          return handler(AppState.currentState);
        };

        listeners.push([handler, callback]);
        document.addEventListener(VISIBILITY_CHANGE_EVENT, callback, false);
      }
    }
  };

  AppState.removeEventListener = function removeEventListener(type, handler) {
    if (AppState.isAvailable) {
      invariant_default()(EVENT_TYPES.indexOf(type) !== -1, 'Trying to remove listener for unknown event: "%s"', type);

      if (type === 'change') {
        var listenerIndex = array_find_index_default()(listeners, function (pair) {
          return pair[0] === handler;
        });
        invariant_default()(listenerIndex !== -1, 'Trying to remove AppState listener for unregistered handler');
        var callback = listeners[listenerIndex][1];
        document.removeEventListener(VISIBILITY_CHANGE_EVENT, callback, false);
        listeners.splice(listenerIndex, 1);
      }
    }
  };

  _createClass(AppState, null, [{
    key: "currentState",
    get: function get() {
      if (!AppState.isAvailable) {
        return AppStates.ACTIVE;
      }

      switch (document[VISIBILITY_STATE_PROPERTY]) {
        case 'hidden':
        case 'prerender':
        case 'unloaded':
          return AppStates.BACKGROUND;

        default:
          return AppStates.ACTIVE;
      }
    }
  }]);

  return AppState;
}();

AppState_AppState.isAvailable = ExecutionEnvironment["canUseDOM"] && document[VISIBILITY_STATE_PROPERTY];

// CONCATENATED MODULE: ./node_modules/react-native-web/dist/exports/BackHandler/index.js
function emptyFunction() {}

var BackHandler = {
  exitApp: emptyFunction,
  addEventListener: function addEventListener() {
    return {
      remove: emptyFunction
    };
  },
  removeEventListener: emptyFunction
};
/* harmony default export */ var exports_BackHandler = (BackHandler);
// CONCATENATED MODULE: ./node_modules/react-native-web/dist/exports/Clipboard/index.js
var clipboardAvailable;

var Clipboard = function () {
  function Clipboard() {}

  Clipboard.isAvailable = function isAvailable() {
    if (clipboardAvailable === undefined) {
      clipboardAvailable = typeof document.queryCommandSupported === 'function' && document.queryCommandSupported('copy');
    }

    return clipboardAvailable;
  };

  Clipboard.getString = function getString() {
    return Promise.resolve('');
  };

  Clipboard.setString = function setString(text) {
    var success = false;
    var body = document.body;

    if (body) {
      var node = document.createElement('span');
      node.textContent = text;
      node.style.opacity = '0';
      node.style.position = 'absolute';
      node.style.whiteSpace = 'pre-wrap';
      node.style.userSelect = 'auto';
      body.appendChild(node);
      var selection = window.getSelection();
      selection.removeAllRanges();
      var range = document.createRange();
      range.selectNodeContents(node);
      selection.addRange(range);

      try {
        document.execCommand('copy');
        success = true;
      } catch (e) {}

      selection.removeAllRanges();
      body.removeChild(node);
    }

    return success;
  };

  return Clipboard;
}();


// CONCATENATED MODULE: ./node_modules/react-native-web/dist/exports/DeviceInfo/index.js


var DeviceInfo = {
  Dimensions: {
    get windowPhysicalPixels() {
      var _Dimensions$get = Dimensions["a" /* default */].get('window'),
          width = _Dimensions$get.width,
          height = _Dimensions$get.height,
          fontScale = _Dimensions$get.fontScale,
          scale = _Dimensions$get.scale;

      return {
        width: width * scale,
        height: height * scale,
        scale: scale,
        fontScale: fontScale
      };
    },

    get screenPhysicalPixels() {
      var _Dimensions$get2 = Dimensions["a" /* default */].get('screen'),
          width = _Dimensions$get2.width,
          height = _Dimensions$get2.height,
          fontScale = _Dimensions$get2.fontScale,
          scale = _Dimensions$get2.scale;

      return {
        width: width * scale,
        height: height * scale,
        scale: scale,
        fontScale: fontScale
      };
    }

  },

  get locale() {
    if (ExecutionEnvironment["canUseDOM"]) {
      if (window.navigator.languages) {
        return window.navigator.languages[0];
      } else {
        return window.navigator.language;
      }
    }
  },

  get totalMemory() {
    return ExecutionEnvironment["canUseDOM"] ? window.navigator.deviceMemory : undefined;
  },

  get userAgent() {
    return ExecutionEnvironment["canUseDOM"] ? window.navigator.userAgent : '';
  }

};
/* harmony default export */ var exports_DeviceInfo = (DeviceInfo);
// EXTERNAL MODULE: ./node_modules/react-native-web/dist/vendor/react-native/Animated/Easing.js + 1 modules
var Easing = __webpack_require__("rHqE");

// CONCATENATED MODULE: ./node_modules/react-native-web/dist/exports/Easing/index.js

/* harmony default export */ var exports_Easing = (Easing["a" /* default */]);
// EXTERNAL MODULE: ./node_modules/react-native-web/dist/exports/I18nManager/index.js
var I18nManager = __webpack_require__("S+yN");

// CONCATENATED MODULE: ./node_modules/react-native-web/dist/exports/Keyboard/index.js

var Keyboard = {
  addListener: function addListener() {
    return {
      remove: function remove() {}
    };
  },
  dismiss: function dismiss() {
    modules_dismissKeyboard();
  },
  removeAllListeners: function removeAllListeners() {},
  removeListener: function removeListener() {}
};
/* harmony default export */ var exports_Keyboard = (Keyboard);
// CONCATENATED MODULE: ./node_modules/react-native-web/dist/vendor/react-native/LayoutAnimation/index.js





var LayoutAnimation_DEV_ = "production" !== 'production';

function configureNext(config, onAnimationDidEnd) {
  if (!Platform["a" /* default */].isTesting) {
    UIManager["a" /* default */].configureNextLayoutAnimation(config, onAnimationDidEnd !== null && onAnimationDidEnd !== void 0 ? onAnimationDidEnd : function () {}, function () {});
  }
}

function LayoutAnimation_create(duration, type, property) {
  return {
    duration: duration,
    create: {
      type: type,
      property: property
    },
    update: {
      type: type
    },
    delete: {
      type: type,
      property: property
    }
  };
}

var Presets = {
  easeInEaseOut: LayoutAnimation_create(300, 'easeInEaseOut', 'opacity'),
  linear: LayoutAnimation_create(500, 'linear', 'opacity'),
  spring: {
    duration: 700,
    create: {
      type: 'linear',
      property: 'opacity'
    },
    update: {
      type: 'spring',
      springDamping: 0.4
    },
    delete: {
      type: 'linear',
      property: 'opacity'
    }
  }
};
var LayoutAnimation = {
  configureNext: configureNext,
  create: LayoutAnimation_create,
  Types: Object.freeze({
    spring: 'spring',
    linear: 'linear',
    easeInEaseOut: 'easeInEaseOut',
    easeIn: 'easeIn',
    easeOut: 'easeOut',
    keyboard: 'keyboard'
  }),
  Properties: Object.freeze({
    opacity: 'opacity',
    scaleX: 'scaleX',
    scaleY: 'scaleY',
    scaleXY: 'scaleXY'
  }),
  checkConfig: function checkConfig() {
    console.error('LayoutAnimation.checkConfig(...) has been disabled.');
  },
  Presets: Presets,
  easeInEaseOut: configureNext.bind(null, Presets.easeInEaseOut),
  linear: configureNext.bind(null, Presets.linear),
  spring: configureNext.bind(null, Presets.spring)
};
/* harmony default export */ var react_native_LayoutAnimation = (LayoutAnimation);
// CONCATENATED MODULE: ./node_modules/react-native-web/dist/exports/LayoutAnimation/index.js

/* harmony default export */ var exports_LayoutAnimation = (react_native_LayoutAnimation);
// EXTERNAL MODULE: ./node_modules/react-native-web/dist/exports/Linking/index.js
var Linking = __webpack_require__("FgQQ");

// EXTERNAL MODULE: ./node_modules/react-native-web/dist/vendor/react-native/NativeEventEmitter/index.js
var NativeEventEmitter = __webpack_require__("3zYm");

// CONCATENATED MODULE: ./node_modules/react-native-web/dist/exports/NativeEventEmitter/index.js

/* harmony default export */ var exports_NativeEventEmitter = (NativeEventEmitter["a" /* default */]);
// CONCATENATED MODULE: ./node_modules/react-native-web/dist/vendor/react-native/TouchHistoryMath/index.js
var TouchHistoryMath = {
  centroidDimension: function centroidDimension(touchHistory, touchesChangedAfter, isXAxis, ofCurrent) {
    var touchBank = touchHistory.touchBank;
    var total = 0;
    var count = 0;
    var oneTouchData = touchHistory.numberActiveTouches === 1 ? touchHistory.touchBank[touchHistory.indexOfSingleActiveTouch] : null;

    if (oneTouchData !== null) {
      if (oneTouchData.touchActive && oneTouchData.currentTimeStamp > touchesChangedAfter) {
        total += ofCurrent && isXAxis ? oneTouchData.currentPageX : ofCurrent && !isXAxis ? oneTouchData.currentPageY : !ofCurrent && isXAxis ? oneTouchData.previousPageX : oneTouchData.previousPageY;
        count = 1;
      }
    } else {
      for (var i = 0; i < touchBank.length; i++) {
        var touchTrack = touchBank[i];

        if (touchTrack !== null && touchTrack !== undefined && touchTrack.touchActive && touchTrack.currentTimeStamp >= touchesChangedAfter) {
          var toAdd = void 0;

          if (ofCurrent && isXAxis) {
            toAdd = touchTrack.currentPageX;
          } else if (ofCurrent && !isXAxis) {
            toAdd = touchTrack.currentPageY;
          } else if (!ofCurrent && isXAxis) {
            toAdd = touchTrack.previousPageX;
          } else {
            toAdd = touchTrack.previousPageY;
          }

          total += toAdd;
          count++;
        }
      }
    }

    return count > 0 ? total / count : TouchHistoryMath.noCentroid;
  },
  currentCentroidXOfTouchesChangedAfter: function currentCentroidXOfTouchesChangedAfter(touchHistory, touchesChangedAfter) {
    return TouchHistoryMath.centroidDimension(touchHistory, touchesChangedAfter, true, true);
  },
  currentCentroidYOfTouchesChangedAfter: function currentCentroidYOfTouchesChangedAfter(touchHistory, touchesChangedAfter) {
    return TouchHistoryMath.centroidDimension(touchHistory, touchesChangedAfter, false, true);
  },
  previousCentroidXOfTouchesChangedAfter: function previousCentroidXOfTouchesChangedAfter(touchHistory, touchesChangedAfter) {
    return TouchHistoryMath.centroidDimension(touchHistory, touchesChangedAfter, true, false);
  },
  previousCentroidYOfTouchesChangedAfter: function previousCentroidYOfTouchesChangedAfter(touchHistory, touchesChangedAfter) {
    return TouchHistoryMath.centroidDimension(touchHistory, touchesChangedAfter, false, false);
  },
  currentCentroidX: function currentCentroidX(touchHistory) {
    return TouchHistoryMath.centroidDimension(touchHistory, 0, true, true);
  },
  currentCentroidY: function currentCentroidY(touchHistory) {
    return TouchHistoryMath.centroidDimension(touchHistory, 0, false, true);
  },
  noCentroid: -1
};
/* harmony default export */ var react_native_TouchHistoryMath = (TouchHistoryMath);
// CONCATENATED MODULE: ./node_modules/react-native-web/dist/vendor/react-native/PanResponder/index.js




var currentCentroidXOfTouchesChangedAfter = react_native_TouchHistoryMath.currentCentroidXOfTouchesChangedAfter;
var currentCentroidYOfTouchesChangedAfter = react_native_TouchHistoryMath.currentCentroidYOfTouchesChangedAfter;
var previousCentroidXOfTouchesChangedAfter = react_native_TouchHistoryMath.previousCentroidXOfTouchesChangedAfter;
var previousCentroidYOfTouchesChangedAfter = react_native_TouchHistoryMath.previousCentroidYOfTouchesChangedAfter;
var currentCentroidX = react_native_TouchHistoryMath.currentCentroidX;
var currentCentroidY = react_native_TouchHistoryMath.currentCentroidY;
var PanResponder = {
  _initializeGestureState: function _initializeGestureState(gestureState) {
    gestureState.moveX = 0;
    gestureState.moveY = 0;
    gestureState.x0 = 0;
    gestureState.y0 = 0;
    gestureState.dx = 0;
    gestureState.dy = 0;
    gestureState.vx = 0;
    gestureState.vy = 0;
    gestureState.numberActiveTouches = 0;
    gestureState._accountsForMovesUpTo = 0;
  },
  _updateGestureStateOnMove: function _updateGestureStateOnMove(gestureState, touchHistory) {
    gestureState.numberActiveTouches = touchHistory.numberActiveTouches;
    gestureState.moveX = currentCentroidXOfTouchesChangedAfter(touchHistory, gestureState._accountsForMovesUpTo);
    gestureState.moveY = currentCentroidYOfTouchesChangedAfter(touchHistory, gestureState._accountsForMovesUpTo);
    var movedAfter = gestureState._accountsForMovesUpTo;
    var prevX = previousCentroidXOfTouchesChangedAfter(touchHistory, movedAfter);
    var x = currentCentroidXOfTouchesChangedAfter(touchHistory, movedAfter);
    var prevY = previousCentroidYOfTouchesChangedAfter(touchHistory, movedAfter);
    var y = currentCentroidYOfTouchesChangedAfter(touchHistory, movedAfter);
    var nextDX = gestureState.dx + (x - prevX);
    var nextDY = gestureState.dy + (y - prevY);
    var dt = touchHistory.mostRecentTimeStamp - gestureState._accountsForMovesUpTo;
    gestureState.vx = (nextDX - gestureState.dx) / dt;
    gestureState.vy = (nextDY - gestureState.dy) / dt;
    gestureState.dx = nextDX;
    gestureState.dy = nextDY;
    gestureState._accountsForMovesUpTo = touchHistory.mostRecentTimeStamp;
  },
  create: function create(config) {
    var interactionState = {
      handle: null,
      shouldCancelClick: false,
      timeout: null
    };
    var gestureState = {
      stateID: Math.random(),
      moveX: 0,
      moveY: 0,
      x0: 0,
      y0: 0,
      dx: 0,
      dy: 0,
      vx: 0,
      vy: 0,
      numberActiveTouches: 0,
      _accountsForMovesUpTo: 0
    };
    var panHandlers = {
      onStartShouldSetResponder: function onStartShouldSetResponder(event) {
        return config.onStartShouldSetPanResponder == null ? false : config.onStartShouldSetPanResponder(event, gestureState);
      },
      onMoveShouldSetResponder: function onMoveShouldSetResponder(event) {
        return config.onMoveShouldSetPanResponder == null ? false : config.onMoveShouldSetPanResponder(event, gestureState);
      },
      onStartShouldSetResponderCapture: function onStartShouldSetResponderCapture(event) {
        if (event.nativeEvent.touches.length === 1) {
          PanResponder._initializeGestureState(gestureState);
        }

        gestureState.numberActiveTouches = event.touchHistory.numberActiveTouches;
        return config.onStartShouldSetPanResponderCapture != null ? config.onStartShouldSetPanResponderCapture(event, gestureState) : false;
      },
      onMoveShouldSetResponderCapture: function onMoveShouldSetResponderCapture(event) {
        var touchHistory = event.touchHistory;

        PanResponder._updateGestureStateOnMove(gestureState, touchHistory);

        return config.onMoveShouldSetPanResponderCapture ? config.onMoveShouldSetPanResponderCapture(event, gestureState) : false;
      },
      onResponderGrant: function onResponderGrant(event) {
        if (!interactionState.handle) {
          interactionState.handle = InteractionManager["a" /* default */].createInteractionHandle();
        }

        if (interactionState.timeout) {
          clearInteractionTimeout(interactionState);
        }

        interactionState.shouldCancelClick = true;
        gestureState.x0 = currentCentroidX(event.touchHistory);
        gestureState.y0 = currentCentroidY(event.touchHistory);
        gestureState.dx = 0;
        gestureState.dy = 0;

        if (config.onPanResponderGrant) {
          config.onPanResponderGrant(event, gestureState);
        }

        return config.onShouldBlockNativeResponder == null ? true : config.onShouldBlockNativeResponder(event, gestureState);
      },
      onResponderReject: function onResponderReject(event) {
        clearInteractionHandle(interactionState, config.onPanResponderReject, event, gestureState);
      },
      onResponderRelease: function onResponderRelease(event) {
        clearInteractionHandle(interactionState, config.onPanResponderRelease, event, gestureState);
        setInteractionTimeout(interactionState);

        PanResponder._initializeGestureState(gestureState);
      },
      onResponderStart: function onResponderStart(event) {
        var touchHistory = event.touchHistory;
        gestureState.numberActiveTouches = touchHistory.numberActiveTouches;

        if (config.onPanResponderStart) {
          config.onPanResponderStart(event, gestureState);
        }
      },
      onResponderMove: function onResponderMove(event) {
        var touchHistory = event.touchHistory;

        PanResponder._updateGestureStateOnMove(gestureState, touchHistory);

        if (config.onPanResponderMove) {
          config.onPanResponderMove(event, gestureState);
        }
      },
      onResponderEnd: function onResponderEnd(event) {
        var touchHistory = event.touchHistory;
        gestureState.numberActiveTouches = touchHistory.numberActiveTouches;
        clearInteractionHandle(interactionState, config.onPanResponderEnd, event, gestureState);
      },
      onResponderTerminate: function onResponderTerminate(event) {
        clearInteractionHandle(interactionState, config.onPanResponderTerminate, event, gestureState);
        setInteractionTimeout(interactionState);

        PanResponder._initializeGestureState(gestureState);
      },
      onResponderTerminationRequest: function onResponderTerminationRequest(event) {
        return config.onPanResponderTerminationRequest == null ? true : config.onPanResponderTerminationRequest(event, gestureState);
      },
      onClickCapture: function onClickCapture(event) {
        if (interactionState.shouldCancelClick === true) {
          event.stopPropagation();
          event.preventDefault();
        }
      }
    };
    return {
      panHandlers: panHandlers,
      getInteractionHandle: function getInteractionHandle() {
        return interactionState.handle;
      }
    };
  }
};

function clearInteractionHandle(interactionState, callback, event, gestureState) {
  if (interactionState.handle) {
    InteractionManager["a" /* default */].clearInteractionHandle(interactionState.handle);
    interactionState.handle = null;
  }

  if (callback) {
    callback(event, gestureState);
  }
}

function clearInteractionTimeout(interactionState) {
  clearTimeout(interactionState.timeout);
}

function setInteractionTimeout(interactionState) {
  interactionState.timeout = setTimeout(function () {
    interactionState.shouldCancelClick = false;
  }, 250);
}

/* harmony default export */ var react_native_PanResponder = (PanResponder);
// CONCATENATED MODULE: ./node_modules/react-native-web/dist/exports/PanResponder/index.js

/* harmony default export */ var exports_PanResponder = (react_native_PanResponder);
// EXTERNAL MODULE: ./node_modules/react-native-web/dist/exports/PixelRatio/index.js
var PixelRatio = __webpack_require__("qadT");

// CONCATENATED MODULE: ./node_modules/react-native-web/dist/exports/Share/index.js
function Share_defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function Share_createClass(Constructor, protoProps, staticProps) {
  if (protoProps) Share_defineProperties(Constructor.prototype, protoProps);
  if (staticProps) Share_defineProperties(Constructor, staticProps);
  return Constructor;
}



var Share_Share = function () {
  function Share() {}

  Share.share = function share(content, options) {
    if (options === void 0) {
      options = {};
    }

    invariant_default()(typeof content === 'object' && content !== null, 'Content to share must be a valid object');
    invariant_default()(typeof content.url === 'string' || typeof content.message === 'string', 'At least one of URL and message is required');
    invariant_default()(typeof options === 'object' && options !== null, 'Options must be a valid object');
    invariant_default()(!content.title || typeof content.title === 'string', 'Invalid title: title should be a string.');

    if (window.navigator.share !== undefined) {
      return window.navigator.share({
        title: content.title,
        text: content.message,
        url: content.url
      });
    } else {
      return Promise.reject(new Error('Share is not supported in this browser'));
    }
  };

  Share_createClass(Share, null, [{
    key: "sharedAction",
    get: function get() {
      return 'sharedAction';
    }
  }, {
    key: "dismissedAction",
    get: function get() {
      return 'dismissedAction';
    }
  }]);

  return Share;
}();

/* harmony default export */ var exports_Share = (Share_Share);
// CONCATENATED MODULE: ./node_modules/react-native-web/dist/exports/Vibration/index.js
var _vibrate = function vibrate(pattern) {
  if ('vibrate' in window.navigator) {
    window.navigator.vibrate(pattern);
  }
};

var Vibration = {
  cancel: function cancel() {
    _vibrate(0);
  },
  vibrate: function vibrate(pattern) {
    if (pattern === void 0) {
      pattern = 400;
    }

    _vibrate(pattern);
  }
};
/* harmony default export */ var exports_Vibration = (Vibration);
// CONCATENATED MODULE: ./node_modules/react-native-web/dist/exports/ActivityIndicator/index.js
function ActivityIndicator_extends() {
  ActivityIndicator_extends = Object.assign || function (target) {
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

  return ActivityIndicator_extends.apply(this, arguments);
}

function ActivityIndicator_objectWithoutPropertiesLoose(source, excluded) {
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




var accessibilityValue = {
  max: 1,
  min: 0
};

var ActivityIndicator_createSvgCircle = function createSvgCircle(style) {
  return react_default.a.createElement("circle", {
    cx: "16",
    cy: "16",
    fill: "none",
    r: "14",
    strokeWidth: "4",
    style: style
  });
};

var ActivityIndicator = Object(react["forwardRef"])(function (props, forwardedRef) {
  var _props$animating = props.animating,
      animating = _props$animating === void 0 ? true : _props$animating,
      _props$color = props.color,
      color = _props$color === void 0 ? '#1976D2' : _props$color,
      _props$hidesWhenStopp = props.hidesWhenStopped,
      hidesWhenStopped = _props$hidesWhenStopp === void 0 ? true : _props$hidesWhenStopp,
      _props$size = props.size,
      size = _props$size === void 0 ? 'small' : _props$size,
      style = props.style,
      other = ActivityIndicator_objectWithoutPropertiesLoose(props, ["animating", "color", "hidesWhenStopped", "size", "style"]);

  var svg = react_default.a.createElement("svg", {
    height: "100%",
    viewBox: "0 0 32 32",
    width: "100%"
  }, ActivityIndicator_createSvgCircle({
    stroke: color,
    opacity: 0.2
  }), ActivityIndicator_createSvgCircle({
    stroke: color,
    strokeDasharray: 80,
    strokeDashoffset: 60
  }));
  return react_default.a.createElement(View["a" /* default */], ActivityIndicator_extends({}, other, {
    accessibilityRole: "progressbar",
    accessibilityValue: accessibilityValue,
    ref: forwardedRef,
    style: [ActivityIndicator_styles.container, style]
  }), react_default.a.createElement(View["a" /* default */], {
    children: svg,
    style: [typeof size === 'number' ? {
      height: size,
      width: size
    } : indicatorSizes[size], ActivityIndicator_styles.animation, !animating && ActivityIndicator_styles.animationPause, !animating && hidesWhenStopped && ActivityIndicator_styles.hidesWhenStopped]
  }));
});
ActivityIndicator.displayName = 'ActivityIndicator';
var ActivityIndicator_styles = StyleSheet["a" /* default */].create({
  container: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  hidesWhenStopped: {
    visibility: 'hidden'
  },
  animation: {
    animationDuration: '0.75s',
    animationKeyframes: [{
      '0%': {
        transform: [{
          rotate: '0deg'
        }]
      },
      '100%': {
        transform: [{
          rotate: '360deg'
        }]
      }
    }],
    animationTimingFunction: 'linear',
    animationIterationCount: 'infinite'
  },
  animationPause: {
    animationPlayState: 'paused'
  }
});
var indicatorSizes = StyleSheet["a" /* default */].create({
  small: {
    width: 20,
    height: 20
  },
  large: {
    width: 36,
    height: 36
  }
});
/* harmony default export */ var exports_ActivityIndicator = (ActivityIndicator);
// EXTERNAL MODULE: ./node_modules/react-native-web/dist/exports/TouchableOpacity/index.js
var TouchableOpacity = __webpack_require__("4YbZ");

// CONCATENATED MODULE: ./node_modules/react-native-web/dist/exports/Button/index.js




var Button = react["forwardRef"](function (props, forwardedRef) {
  var accessibilityLabel = props.accessibilityLabel,
      color = props.color,
      disabled = props.disabled,
      onPress = props.onPress,
      testID = props.testID,
      title = props.title;
  return react["createElement"](TouchableOpacity["a" /* default */], {
    accessibilityLabel: accessibilityLabel,
    accessibilityRole: "button",
    disabled: disabled,
    onPress: onPress,
    ref: forwardedRef,
    style: [Button_styles.button, color && {
      backgroundColor: color
    }, disabled && Button_styles.buttonDisabled],
    testID: testID
  }, react["createElement"](Text["a" /* default */], {
    style: [Button_styles.text, disabled && Button_styles.textDisabled]
  }, title));
});
Button.displayName = 'Button';
var Button_styles = StyleSheet["a" /* default */].create({
  button: {
    backgroundColor: '#2196F3',
    borderRadius: 2
  },
  text: {
    color: '#fff',
    fontWeight: '500',
    padding: 8,
    textAlign: 'center',
    textTransform: 'uppercase'
  },
  buttonDisabled: {
    backgroundColor: '#dfdfdf'
  },
  textDisabled: {
    color: '#a1a1a1'
  }
});
/* harmony default export */ var exports_Button = (Button);
// CONCATENATED MODULE: ./node_modules/react-native-web/dist/exports/CheckBox/index.js
function CheckBox_ownKeys(object, enumerableOnly) {
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

function CheckBox_objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      CheckBox_ownKeys(Object(source), true).forEach(function (key) {
        CheckBox_defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      CheckBox_ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

function CheckBox_defineProperty(obj, key, value) {
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

function CheckBox_extends() {
  CheckBox_extends = Object.assign || function (target) {
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

  return CheckBox_extends.apply(this, arguments);
}

function CheckBox_objectWithoutPropertiesLoose(source, excluded) {
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






var CheckBox = Object(react["forwardRef"])(function (props, forwardedRef) {
  var color = props.color,
      disabled = props.disabled,
      onChange = props.onChange,
      onValueChange = props.onValueChange,
      style = props.style,
      value = props.value,
      other = CheckBox_objectWithoutPropertiesLoose(props, ["color", "disabled", "onChange", "onValueChange", "style", "value"]);

  function handleChange(event) {
    var value = event.nativeEvent.target.checked;
    event.nativeEvent.value = value;
    onChange && onChange(event);
    onValueChange && onValueChange(value);
  }

  var fakeControl = react["createElement"](View["a" /* default */], {
    style: [CheckBox_styles.fakeControl, value && CheckBox_styles.fakeControlChecked, value && color && {
      backgroundColor: color,
      borderColor: color
    }, disabled && CheckBox_styles.fakeControlDisabled, value && disabled && CheckBox_styles.fakeControlCheckedAndDisabled]
  });
  var nativeControl = Object(createElement["a" /* default */])('input', {
    checked: value,
    disabled: disabled,
    onChange: handleChange,
    ref: forwardedRef,
    style: [CheckBox_styles.nativeControl, CheckBox_styles.cursorInherit],
    type: 'checkbox'
  });
  return react["createElement"](View["a" /* default */], CheckBox_extends({}, other, {
    style: [CheckBox_styles.root, style, disabled && CheckBox_styles.cursorDefault]
  }), fakeControl, nativeControl);
});
CheckBox.displayName = 'CheckBox';
var CheckBox_styles = StyleSheet["a" /* default */].create({
  root: {
    cursor: 'pointer',
    height: 16,
    userSelect: 'none',
    width: 16
  },
  cursorDefault: {
    cursor: 'default'
  },
  cursorInherit: {
    cursor: 'inherit'
  },
  fakeControl: {
    alignItems: 'center',
    backgroundColor: '#fff',
    borderColor: '#657786',
    borderRadius: 2,
    borderStyle: 'solid',
    borderWidth: 2,
    height: '100%',
    justifyContent: 'center',
    width: '100%'
  },
  fakeControlChecked: {
    backgroundColor: '#009688',
    backgroundImage: 'url("data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+CjxzdmcKICAgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIgogICB4bWxuczpjYz0iaHR0cDovL2NyZWF0aXZlY29tbW9ucy5vcmcvbnMjIgogICB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiCiAgIHhtbG5zOnN2Zz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciCiAgIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIKICAgdmVyc2lvbj0iMS4xIgogICB2aWV3Qm94PSIwIDAgMSAxIgogICBwcmVzZXJ2ZUFzcGVjdFJhdGlvPSJ4TWluWU1pbiBtZWV0Ij4KICA8cGF0aAogICAgIGQ9Ik0gMC4wNDAzODA1OSwwLjYyNjc3NjcgMC4xNDY0NDY2MSwwLjUyMDcxMDY4IDAuNDI5Mjg5MzIsMC44MDM1NTMzOSAwLjMyMzIyMzMsMC45MDk2MTk0MSB6IE0gMC4yMTcxNTcyOSwwLjgwMzU1MzM5IDAuODUzNTUzMzksMC4xNjcxNTcyOSAwLjk1OTYxOTQxLDAuMjczMjIzMyAwLjMyMzIyMzMsMC45MDk2MTk0MSB6IgogICAgIGlkPSJyZWN0Mzc4MCIKICAgICBzdHlsZT0iZmlsbDojZmZmZmZmO2ZpbGwtb3BhY2l0eToxO3N0cm9rZTpub25lIiAvPgo8L3N2Zz4K")',
    backgroundRepeat: 'no-repeat',
    borderColor: '#009688'
  },
  fakeControlDisabled: {
    borderColor: '#CCD6DD'
  },
  fakeControlCheckedAndDisabled: {
    backgroundColor: '#AAB8C2',
    borderColor: '#AAB8C2'
  },
  nativeControl: CheckBox_objectSpread({}, StyleSheet["a" /* default */].absoluteFillObject, {
    height: '100%',
    margin: 0,
    opacity: 0,
    padding: 0,
    width: '100%'
  })
});
/* harmony default export */ var exports_CheckBox = (CheckBox);
// CONCATENATED MODULE: ./node_modules/react-native-web/dist/exports/ImageBackground/index.js
function ImageBackground_extends() {
  ImageBackground_extends = Object.assign || function (target) {
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

  return ImageBackground_extends.apply(this, arguments);
}

function ImageBackground_objectWithoutPropertiesLoose(source, excluded) {
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






var ImageBackground_emptyObject = {};
var ImageBackground = Object(react["forwardRef"])(function (props, forwardedRef) {
  var children = props.children,
      _props$style = props.style,
      style = _props$style === void 0 ? ImageBackground_emptyObject : _props$style,
      imageStyle = props.imageStyle,
      imageRef = props.imageRef,
      rest = ImageBackground_objectWithoutPropertiesLoose(props, ["children", "style", "imageStyle", "imageRef"]);

  var _StyleSheet$flatten = StyleSheet["a" /* default */].flatten(style),
      height = _StyleSheet$flatten.height,
      width = _StyleSheet$flatten.width;

  return react["createElement"](View["a" /* default */], {
    ref: forwardedRef,
    style: style
  }, react["createElement"](Image["a" /* default */], ImageBackground_extends({}, rest, {
    ref: imageRef,
    style: [StyleSheet["a" /* default */].absoluteFill, {
      width: width,
      height: height,
      zIndex: -1
    }, imageStyle]
  })), children);
});
ImageBackground.displayName = 'ImageBackground';
/* harmony default export */ var exports_ImageBackground = (ImageBackground);
// CONCATENATED MODULE: ./node_modules/react-native-web/dist/exports/KeyboardAvoidingView/index.js
function KeyboardAvoidingView_extends() {
  KeyboardAvoidingView_extends = Object.assign || function (target) {
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

  return KeyboardAvoidingView_extends.apply(this, arguments);
}

function KeyboardAvoidingView_objectWithoutPropertiesLoose(source, excluded) {
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

function KeyboardAvoidingView_inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  subClass.__proto__ = superClass;
}




var KeyboardAvoidingView_KeyboardAvoidingView = function (_React$Component) {
  KeyboardAvoidingView_inheritsLoose(KeyboardAvoidingView, _React$Component);

  function KeyboardAvoidingView() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this;
    _this.frame = null;

    _this.onLayout = function (event) {
      _this.frame = event.nativeEvent.layout;
    };

    return _this;
  }

  var _proto = KeyboardAvoidingView.prototype;

  _proto.relativeKeyboardHeight = function relativeKeyboardHeight(keyboardFrame) {
    var frame = this.frame;

    if (!frame || !keyboardFrame) {
      return 0;
    }

    var keyboardY = keyboardFrame.screenY - (this.props.keyboardVerticalOffset || 0);
    return Math.max(frame.y + frame.height - keyboardY, 0);
  };

  _proto.onKeyboardChange = function onKeyboardChange(event) {};

  _proto.render = function render() {
    var _this$props = this.props,
        behavior = _this$props.behavior,
        contentContainerStyle = _this$props.contentContainerStyle,
        keyboardVerticalOffset = _this$props.keyboardVerticalOffset,
        rest = KeyboardAvoidingView_objectWithoutPropertiesLoose(_this$props, ["behavior", "contentContainerStyle", "keyboardVerticalOffset"]);

    return react_default.a.createElement(View["a" /* default */], KeyboardAvoidingView_extends({
      onLayout: this.onLayout
    }, rest));
  };

  return KeyboardAvoidingView;
}(react_default.a.Component);

/* harmony default export */ var exports_KeyboardAvoidingView = (KeyboardAvoidingView_KeyboardAvoidingView);
// EXTERNAL MODULE: ./node_modules/react-dom/index.js
var react_dom = __webpack_require__("i8i4");
var react_dom_default = /*#__PURE__*/__webpack_require__.n(react_dom);

// CONCATENATED MODULE: ./node_modules/react-native-web/dist/exports/Modal/ModalPortal.js




function ModalPortal(props) {
  var children = props.children;
  var elementRef = Object(react["useRef"])(null);

  if (ExecutionEnvironment["canUseDOM"] && !elementRef.current) {
    var element = document.createElement('div');

    if (element && document.body) {
      document.body.appendChild(element);
      elementRef.current = element;
    }
  }

  Object(react["useEffect"])(function () {
    if (ExecutionEnvironment["canUseDOM"]) {
      return function () {
        if (document.body && elementRef.current) {
          document.body.removeChild(elementRef.current);
          elementRef.current = null;
        }
      };
    }
  }, []);
  return elementRef.current && ExecutionEnvironment["canUseDOM"] ? react_dom_default.a.createPortal(children, elementRef.current) : null;
}

/* harmony default export */ var Modal_ModalPortal = (ModalPortal);
// CONCATENATED MODULE: ./node_modules/react-native-web/dist/exports/Modal/ModalAnimation.js



var ANIMATION_DURATION = 300;

function getAnimationStyle(animationType, visible) {
  if (animationType === 'slide') {
    return visible ? animatedSlideInStyles : animatedSlideOutStyles;
  }

  if (animationType === 'fade') {
    return visible ? animatedFadeInStyles : animatedFadeOutStyles;
  }

  return visible ? ModalAnimation_styles.container : ModalAnimation_styles.hidden;
}

function ModalAnimation(props) {
  var animationType = props.animationType,
      children = props.children,
      onDismiss = props.onDismiss,
      onShow = props.onShow,
      visible = props.visible;

  var _useState = Object(react["useState"])(false),
      isRendering = _useState[0],
      setIsRendering = _useState[1];

  var wasVisible = Object(react["useRef"])(false);
  var isAnimated = animationType && animationType !== 'none';
  var animationEndCallback = Object(react["useCallback"])(function () {
    if (visible) {
      if (onShow) {
        onShow();
      }
    } else {
      setIsRendering(false);

      if (onDismiss) {
        onDismiss();
      }
    }
  }, [onDismiss, onShow, visible]);
  Object(react["useEffect"])(function () {
    if (visible) {
      setIsRendering(true);
    }

    if (visible !== wasVisible.current && !isAnimated) {
      animationEndCallback();
    }

    wasVisible.current = visible;
  }, [isAnimated, visible, animationEndCallback]);
  return isRendering || visible ? Object(createElement["a" /* default */])('div', {
    style: isRendering ? getAnimationStyle(animationType, visible) : ModalAnimation_styles.hidden,
    onAnimationEnd: animationEndCallback,
    children: children
  }) : null;
}

var ModalAnimation_styles = StyleSheet["a" /* default */].create({
  container: {
    position: 'fixed',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    zIndex: 9999
  },
  animatedIn: {
    animationDuration: ANIMATION_DURATION + "ms",
    animationTimingFunction: 'ease-in'
  },
  animatedOut: {
    pointerEvents: 'none',
    animationDuration: ANIMATION_DURATION + "ms",
    animationTimingFunction: 'ease-out'
  },
  fadeIn: {
    opacity: 1,
    animationKeyframes: {
      '0%': {
        opacity: 0
      },
      '100%': {
        opacity: 1
      }
    }
  },
  fadeOut: {
    opacity: 0,
    animationKeyframes: {
      '0%': {
        opacity: 1
      },
      '100%': {
        opacity: 0
      }
    }
  },
  slideIn: {
    transform: [{
      translateY: '0%'
    }],
    animationKeyframes: {
      '0%': {
        transform: [{
          translateY: '100%'
        }]
      },
      '100%': {
        transform: [{
          translateY: '0%'
        }]
      }
    }
  },
  slideOut: {
    transform: [{
      translateY: '100%'
    }],
    animationKeyframes: {
      '0%': {
        transform: [{
          translateY: '0%'
        }]
      },
      '100%': {
        transform: [{
          translateY: '100%'
        }]
      }
    }
  },
  hidden: {
    display: 'none'
  }
});
var animatedSlideInStyles = [ModalAnimation_styles.container, ModalAnimation_styles.animatedIn, ModalAnimation_styles.slideIn];
var animatedSlideOutStyles = [ModalAnimation_styles.container, ModalAnimation_styles.animatedOut, ModalAnimation_styles.slideOut];
var animatedFadeInStyles = [ModalAnimation_styles.container, ModalAnimation_styles.animatedIn, ModalAnimation_styles.fadeIn];
var animatedFadeOutStyles = [ModalAnimation_styles.container, ModalAnimation_styles.animatedOut, ModalAnimation_styles.fadeOut];
/* harmony default export */ var Modal_ModalAnimation = (ModalAnimation);
// CONCATENATED MODULE: ./node_modules/react-native-web/dist/exports/Modal/ModalContent.js




var ModalContent = Object(react["forwardRef"])(function (props, forwardedRef) {
  var active = props.active,
      children = props.children,
      onRequestClose = props.onRequestClose,
      transparent = props.transparent;
  Object(react["useEffect"])(function () {
    if (ExecutionEnvironment["canUseDOM"]) {
      var closeOnEscape = function closeOnEscape(e) {
        if (active && e.key === 'Escape') {
          e.stopPropagation();

          if (onRequestClose) {
            onRequestClose();
          }
        }
      };

      document.addEventListener('keyup', closeOnEscape, false);
      return function () {
        return document.removeEventListener('keyup', closeOnEscape, false);
      };
    }
  }, [active, onRequestClose]);
  var style = Object(react["useMemo"])(function () {
    return [ModalContent_styles.modal, transparent ? ModalContent_styles.modalTransparent : ModalContent_styles.modalOpaque];
  }, [transparent]);
  return react_default.a.createElement(View["a" /* default */], {
    accessibilityRole: active ? 'dialog' : null,
    "aria-modal": true,
    ref: forwardedRef,
    style: style
  }, react_default.a.createElement(View["a" /* default */], {
    style: ModalContent_styles.container
  }, children));
});
var ModalContent_styles = StyleSheet["a" /* default */].create({
  modal: {
    position: 'fixed',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  },
  modalTransparent: {
    backgroundColor: 'transparent'
  },
  modalOpaque: {
    backgroundColor: 'white'
  },
  container: {
    top: 0,
    flex: 1
  }
});
/* harmony default export */ var Modal_ModalContent = (ModalContent);
// CONCATENATED MODULE: ./node_modules/react-native-web/dist/exports/Modal/ModalFocusTrap.js







var ModalFocusTrap_FocusBracket = function FocusBracket() {
  return Object(createElement["a" /* default */])('div', {
    accessibilityRole: 'none',
    tabIndex: 0,
    style: ModalFocusTrap_styles.focusBracket
  });
};

function attemptFocus(element) {
  if (!ExecutionEnvironment["canUseDOM"]) {
    return false;
  }

  try {
    element.focus();
  } catch (e) {}

  return document.activeElement === element;
}

function focusFirstDescendant(element) {
  for (var i = 0; i < element.childNodes.length; i++) {
    var child = element.childNodes[i];

    if (attemptFocus(child) || focusFirstDescendant(child)) {
      return true;
    }
  }

  return false;
}

function focusLastDescendant(element) {
  for (var i = element.childNodes.length - 1; i >= 0; i--) {
    var child = element.childNodes[i];

    if (attemptFocus(child) || focusLastDescendant(child)) {
      return true;
    }
  }

  return false;
}

var ModalFocusTrap_ModalFocusTrap = function ModalFocusTrap(_ref) {
  var active = _ref.active,
      children = _ref.children;
  var trapElementRef = Object(react["useRef"])();
  var focusRef = Object(react["useRef"])({
    trapFocusInProgress: false,
    lastFocusedElement: null
  });
  Object(react["useEffect"])(function () {
    if (ExecutionEnvironment["canUseDOM"]) {
      var trapFocus = function trapFocus() {
        if (trapElementRef.current == null || focusRef.current.trapFocusInProgress || !active) {
          return;
        }

        try {
          focusRef.current.trapFocusInProgress = true;

          if (document.activeElement instanceof Node && !trapElementRef.current.contains(document.activeElement)) {
            var hasFocused = focusFirstDescendant(trapElementRef.current);

            if (focusRef.current.lastFocusedElement === document.activeElement) {
              hasFocused = focusLastDescendant(trapElementRef.current);
            }

            if (!hasFocused && trapElementRef.current != null && document.activeElement) {
              UIManager["a" /* default */].focus(trapElementRef.current);
            }
          }
        } finally {
          focusRef.current.trapFocusInProgress = false;
        }

        focusRef.current.lastFocusedElement = document.activeElement;
      };

      trapFocus();
      document.addEventListener('focus', trapFocus, true);
      return function () {
        return document.removeEventListener('focus', trapFocus, true);
      };
    }
  }, [active]);
  return react_default.a.createElement(react_default.a.Fragment, null, react_default.a.createElement(ModalFocusTrap_FocusBracket, null), react_default.a.createElement(View["a" /* default */], {
    ref: trapElementRef
  }, children), react_default.a.createElement(ModalFocusTrap_FocusBracket, null));
};

/* harmony default export */ var Modal_ModalFocusTrap = (ModalFocusTrap_ModalFocusTrap);
var ModalFocusTrap_styles = StyleSheet["a" /* default */].create({
  focusBracket: {
    outlineStyle: 'none'
  }
});
// CONCATENATED MODULE: ./node_modules/react-native-web/dist/exports/Modal/index.js





var uniqueModalIdentifier = 0;
var activeModalStack = [];
var activeModalListeners = {};

function notifyActiveModalListeners() {
  if (activeModalStack.length === 0) {
    return;
  }

  var activeModalId = activeModalStack[activeModalStack.length - 1];
  activeModalStack.forEach(function (modalId) {
    if (modalId in activeModalListeners) {
      activeModalListeners[modalId](modalId === activeModalId);
    }
  });
}

function removeActiveModal(modalId) {
  if (modalId in activeModalListeners) {
    activeModalListeners[modalId](false);
    delete activeModalListeners[modalId];
  }

  var index = activeModalStack.indexOf(modalId);

  if (index !== -1) {
    activeModalStack.splice(index, 1);
    notifyActiveModalListeners();
  }
}

function addActiveModal(modalId, listener) {
  removeActiveModal(modalId);
  activeModalStack.push(modalId);
  activeModalListeners[modalId] = listener;
  notifyActiveModalListeners();
}

var Modal = Object(react["forwardRef"])(function (props, forwardedRef) {
  var animationType = props.animationType,
      children = props.children,
      onDismiss = props.onDismiss,
      onRequestClose = props.onRequestClose,
      onShow = props.onShow,
      transparent = props.transparent,
      _props$visible = props.visible,
      visible = _props$visible === void 0 ? true : _props$visible;
  var modalId = Object(react["useMemo"])(function () {
    return uniqueModalIdentifier++;
  }, []);

  var _useState = Object(react["useState"])(false),
      isActive = _useState[0],
      setIsActive = _useState[1];

  var onDismissCallback = Object(react["useCallback"])(function () {
    removeActiveModal(modalId);

    if (onDismiss) {
      onDismiss();
    }
  }, [modalId, onDismiss]);
  var onShowCallback = Object(react["useCallback"])(function () {
    addActiveModal(modalId, setIsActive);

    if (onShow) {
      onShow();
    }
  }, [modalId, onShow]);
  Object(react["useEffect"])(function () {
    return function () {
      return removeActiveModal(modalId);
    };
  }, [modalId]);
  return react_default.a.createElement(Modal_ModalPortal, null, react_default.a.createElement(Modal_ModalAnimation, {
    animationType: animationType,
    onDismiss: onDismissCallback,
    onShow: onShowCallback,
    visible: visible
  }, react_default.a.createElement(Modal_ModalFocusTrap, {
    active: isActive
  }, react_default.a.createElement(Modal_ModalContent, {
    active: isActive,
    onRequestClose: onRequestClose,
    ref: forwardedRef,
    transparent: transparent
  }, children))));
});
/* harmony default export */ var exports_Modal = (Modal);
// EXTERNAL MODULE: ./node_modules/react-native-web/dist/modules/usePlatformMethods/index.js
var usePlatformMethods = __webpack_require__("tkvJ");

// CONCATENATED MODULE: ./node_modules/react-native-web/dist/exports/Picker/PickerItem.js

function PickerItem(props) {
  var color = props.color,
      label = props.label,
      testID = props.testID,
      value = props.value;
  var style = {
    color: color
  };
  return Object(createElement["a" /* default */])('option', {
    style: style,
    testID: testID,
    value: value
  }, label);
}
// CONCATENATED MODULE: ./node_modules/react-native-web/dist/exports/Picker/index.js
function Picker_ownKeys(object, enumerableOnly) {
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

function Picker_objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      Picker_ownKeys(Object(source), true).forEach(function (key) {
        Picker_defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      Picker_ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

function Picker_defineProperty(obj, key, value) {
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

function Picker_objectWithoutPropertiesLoose(source, excluded) {
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







var Picker = Object(react["forwardRef"])(function (props, forwardedRef) {
  var children = props.children,
      enabled = props.enabled,
      onValueChange = props.onValueChange,
      selectedValue = props.selectedValue,
      style = props.style,
      testID = props.testID,
      itemStyle = props.itemStyle,
      mode = props.mode,
      prompt = props.prompt,
      other = Picker_objectWithoutPropertiesLoose(props, ["children", "enabled", "onValueChange", "selectedValue", "style", "testID", "itemStyle", "mode", "prompt"]);

  var hostRef = Object(react["useRef"])(null);

  function handleChange(e) {
    var _e$target = e.target,
        selectedIndex = _e$target.selectedIndex,
        value = _e$target.value;

    if (onValueChange) {
      onValueChange(value, selectedIndex);
    }
  }

  var supportedProps = Picker_objectSpread({
    children: children,
    disabled: enabled === false ? true : undefined,
    onChange: handleChange,
    style: [Picker_styles.initial, style],
    testID: testID,
    value: selectedValue
  }, other);

  var platformMethodsRef = Object(usePlatformMethods["a" /* default */])(supportedProps);
  var setRef = Object(useMergeRefs["a" /* default */])(hostRef, platformMethodsRef, forwardedRef);
  supportedProps.ref = setRef;
  return Object(createElement["a" /* default */])('select', supportedProps);
});
Picker.Item = PickerItem;
var Picker_styles = StyleSheet["a" /* default */].create({
  initial: {
    fontFamily: 'System',
    fontSize: 'inherit',
    margin: 0
  }
});
/* harmony default export */ var exports_Picker = (Picker);
// CONCATENATED MODULE: ./node_modules/react-native-web/dist/modules/createEventHandle/index.js




var createEventHandle_emptyFunction = function emptyFunction() {};

function supportsPassiveEvents() {
  var supported = false;

  if (ExecutionEnvironment["canUseDOM"]) {
    try {
      var options = {};
      Object.defineProperty(options, 'passive', {
        get: function get() {
          supported = true;
          return false;
        }
      });
      window.addEventListener('test', null, options);
      window.removeEventListener('test', null, options);
    } catch (e) {}
  }

  return supported;
}

var canUsePassiveEvents = supportsPassiveEvents();

function getOptions(options) {
  if (options == null) {
    return false;
  }

  return canUsePassiveEvents ? options : Boolean(options.capture);
}

function isPropagationStopped() {
  return this.cancelBubble;
}

function isDefaultPrevented() {
  return this.defaultPrevented;
}

function normalizeEvent(event) {
  event.nativeEvent = event;
  event.persist = createEventHandle_emptyFunction;
  event.isDefaultPrevented = isDefaultPrevented;
  event.isPropagationStopped = isPropagationStopped;
  return event;
}

function createEventHandle(type, options) {
  var opts = getOptions(options);
  return function (target, listener) {
    if (target == null || typeof target.addEventListener !== 'function') {
      throw new Error('createEventHandle: called on an invalid target.');
    }

    var element = target;

    if (listener != null) {
      var compatListener = function compatListener(e) {
        return listener(normalizeEvent(e));
      };

      element.addEventListener(type, compatListener, opts);
      return function removeListener() {
        if (element != null) {
          element.removeEventListener(type, compatListener, opts);
        }
      };
    } else {
      return createEventHandle_emptyFunction;
    }
  };
}
// CONCATENATED MODULE: ./node_modules/react-native-web/dist/modules/modality/index.js



var supportsPointerEvent = function supportsPointerEvent() {
  return !!(typeof window !== 'undefined' && window.PointerEvent != null);
};

var activeModality = 'keyboard';
var modality = 'keyboard';
var previousModality;
var previousActiveModality;
var isEmulatingMouseEvents = false;
var modality_listeners = new Set();
var KEYBOARD = 'keyboard';
var MOUSE = 'mouse';
var TOUCH = 'touch';
var BLUR = 'blur';
var CONTEXTMENU = 'contextmenu';
var FOCUS = 'focus';
var KEYDOWN = 'keydown';
var MOUSEDOWN = 'mousedown';
var MOUSEMOVE = 'mousemove';
var MOUSEUP = 'mouseup';
var POINTERDOWN = 'pointerdown';
var POINTERMOVE = 'pointermove';
var SCROLL = 'scroll';
var SELECTIONCHANGE = 'selectionchange';
var TOUCHCANCEL = 'touchcancel';
var TOUCHMOVE = 'touchmove';
var TOUCHSTART = 'touchstart';
var VISIBILITYCHANGE = 'visibilitychange';
var bubbleOptions = {
  passive: true
};
var captureOptions = {
  capture: true,
  passive: true
};
var addBlurListener = createEventHandle(BLUR, bubbleOptions);
var addFocusListener = createEventHandle(FOCUS, bubbleOptions);
var addVisibilityChangeListener = createEventHandle(VISIBILITYCHANGE, captureOptions);
var addKeyDownListener = createEventHandle(KEYDOWN, captureOptions);
var addPointerDownListener = createEventHandle(POINTERDOWN, captureOptions);
var addPointerMoveListener = createEventHandle(POINTERMOVE, captureOptions);
var addContextMenuListener = createEventHandle(CONTEXTMENU, captureOptions);
var addMouseDownListener = createEventHandle(MOUSEDOWN, captureOptions);
var addMouseMoveListener = createEventHandle(MOUSEMOVE, captureOptions);
var addMouseUpListener = createEventHandle(MOUSEUP, captureOptions);
var addScrollListener = createEventHandle(SCROLL, captureOptions);
var addSelectiomChangeListener = createEventHandle(SELECTIONCHANGE, captureOptions);
var addTouchCancelListener = createEventHandle(TOUCHCANCEL, captureOptions);
var addTouchMoveListener = createEventHandle(TOUCHMOVE, captureOptions);
var addTouchStartListener = createEventHandle(TOUCHSTART, captureOptions);

function restoreModality() {
  if (previousModality != null || previousActiveModality != null) {
    if (previousModality != null) {
      modality = previousModality;
      previousModality = null;
    }

    if (previousActiveModality != null) {
      activeModality = previousActiveModality;
      previousActiveModality = null;
    }

    callListeners();
  }
}

function onBlurWindow() {
  previousModality = modality;
  previousActiveModality = activeModality;
  activeModality = KEYBOARD;
  modality = KEYBOARD;
  callListeners();
  isEmulatingMouseEvents = false;
}

function onFocusWindow() {
  restoreModality();
}

function onKeyDown(event) {
  if (event.metaKey || event.altKey || event.ctrlKey) {
    return;
  }

  if (modality !== KEYBOARD) {
    modality = KEYBOARD;
    activeModality = KEYBOARD;
    callListeners();
  }
}

function onVisibilityChange() {
  if (document.visibilityState !== 'hidden') {
    restoreModality();
  }
}

function onPointerish(event) {
  var eventType = event.type;

  if (supportsPointerEvent()) {
    if (eventType === POINTERDOWN) {
      if (activeModality !== event.pointerType) {
        modality = event.pointerType;
        activeModality = event.pointerType;
        callListeners();
      }

      return;
    }

    if (eventType === POINTERMOVE) {
      if (modality !== event.pointerType) {
        modality = event.pointerType;
        callListeners();
      }

      return;
    }
  } else {
    if (!isEmulatingMouseEvents) {
      if (eventType === MOUSEDOWN) {
        if (activeModality !== MOUSE) {
          modality = MOUSE;
          activeModality = MOUSE;
          callListeners();
        }
      }

      if (eventType === MOUSEMOVE) {
        if (modality !== MOUSE) {
          modality = MOUSE;
          callListeners();
        }
      }
    }

    if (eventType === TOUCHSTART) {
      isEmulatingMouseEvents = true;

      if (event.touches && event.touches.length > 1) {
        isEmulatingMouseEvents = false;
      }

      if (activeModality !== TOUCH) {
        modality = TOUCH;
        activeModality = TOUCH;
        callListeners();
      }

      return;
    }

    if (eventType === CONTEXTMENU || eventType === MOUSEUP || eventType === SELECTIONCHANGE || eventType === SCROLL || eventType === TOUCHCANCEL || eventType === TOUCHMOVE) {
      isEmulatingMouseEvents = false;
    }
  }
}

if (ExecutionEnvironment["canUseDOM"]) {
  addBlurListener(window, onBlurWindow);
  addFocusListener(window, onFocusWindow);
  addKeyDownListener(document, onKeyDown);
  addPointerDownListener(document, onPointerish);
  addPointerMoveListener(document, onPointerish);
  addVisibilityChangeListener(document, onVisibilityChange);
  addContextMenuListener(document, onPointerish);
  addMouseDownListener(document, onPointerish);
  addMouseMoveListener(document, onPointerish);
  addMouseUpListener(document, onPointerish);
  addTouchCancelListener(document, onPointerish);
  addTouchMoveListener(document, onPointerish);
  addTouchStartListener(document, onPointerish);
  addSelectiomChangeListener(document, onPointerish);
  addScrollListener(document, onPointerish);
}

function callListeners() {
  var value = {
    activeModality: activeModality,
    modality: modality
  };
  modality_listeners.forEach(function (listener) {
    listener(value);
  });
}

function getActiveModality() {
  return activeModality;
}
function getModality() {
  return modality;
}
function addModalityListener(listener) {
  modality_listeners.add(listener);
  return function () {
    modality_listeners.delete(listener);
  };
}
function testOnly_resetActiveModality() {
  isEmulatingMouseEvents = false;
  activeModality = KEYBOARD;
  modality = KEYBOARD;
}
// EXTERNAL MODULE: ./node_modules/react-native-web/dist/modules/useLayoutEffect/index.js
var useLayoutEffect = __webpack_require__("Yl5I");

// EXTERNAL MODULE: ./node_modules/react-native-web/dist/modules/useStable/index.js
var useStable = __webpack_require__("gWRB");

// CONCATENATED MODULE: ./node_modules/react-native-web/dist/modules/useEvent/index.js



function useEvent(event, options) {
  var targetListeners = Object(useStable["a" /* default */])(function () {
    return new Map();
  });
  var addListener = Object(useStable["a" /* default */])(function () {
    var addEventListener = createEventHandle(event, options);
    return function (target, callback) {
      var removeTargetListener = targetListeners.get(target);

      if (removeTargetListener != null) {
        removeTargetListener();
      }

      if (callback == null) {
        targetListeners.delete(target);
      }

      var removeEventListener = addEventListener(target, callback);
      targetListeners.set(target, removeEventListener);
      return removeEventListener;
    };
  });
  Object(useLayoutEffect["a" /* default */])(function () {
    return function () {
      if (addListener != null) {
        targetListeners.forEach(function (removeListener) {
          removeListener();
        });
        targetListeners.clear();
      }

      addListener = null;
    };
  }, [addListener]);
  return addListener;
}
// CONCATENATED MODULE: ./node_modules/react-native-web/dist/modules/useHover/index.js



var useHover_emptyObject = {};
var opts = {
  passive: true
};
var lockEventType = 'react-gui:hover:lock';
var unlockEventType = 'react-gui:hover:unlock';

var useHover_supportsPointerEvent = function supportsPointerEvent() {
  return !!(typeof window !== 'undefined' && window.PointerEvent != null);
};

function dispatchCustomEvent(target, type, payload) {
  var event = document.createEvent('CustomEvent');

  var _ref = payload || useHover_emptyObject,
      _ref$bubbles = _ref.bubbles,
      bubbles = _ref$bubbles === void 0 ? true : _ref$bubbles,
      _ref$cancelable = _ref.cancelable,
      cancelable = _ref$cancelable === void 0 ? true : _ref$cancelable,
      detail = _ref.detail;

  event.initCustomEvent(type, bubbles, cancelable, detail);
  target.dispatchEvent(event);
}

function getPointerType(event) {
  var pointerType = event.pointerType;
  return pointerType != null ? pointerType : getModality();
}

function useHover(targetRef, config) {
  var contain = config.contain,
      disabled = config.disabled,
      onHoverStart = config.onHoverStart,
      onHoverChange = config.onHoverChange,
      onHoverUpdate = config.onHoverUpdate,
      onHoverEnd = config.onHoverEnd;
  var canUsePE = useHover_supportsPointerEvent();
  var addMoveListener = useEvent(canUsePE ? 'pointermove' : 'mousemove', opts);
  var addEnterListener = useEvent(canUsePE ? 'pointerenter' : 'mouseenter', opts);
  var addLeaveListener = useEvent(canUsePE ? 'pointerleave' : 'mouseleave', opts);
  var addLockListener = useEvent(lockEventType, opts);
  var addUnlockListener = useEvent(unlockEventType, opts);
  Object(useLayoutEffect["a" /* default */])(function () {
    var target = targetRef.current;

    if (target !== null) {
      var hoverEnd = function hoverEnd(e) {
        if (onHoverEnd != null) {
          onHoverEnd(e);
        }

        if (onHoverChange != null) {
          onHoverChange(false);
        }

        addMoveListener(target, null);
        addLeaveListener(target, null);
      };

      var leaveListener = function leaveListener(e) {
        var target = targetRef.current;

        if (target != null && getPointerType(e) !== 'touch') {
          if (contain) {
            dispatchCustomEvent(target, unlockEventType);
          }

          hoverEnd(e);
        }
      };

      var moveListener = function moveListener(e) {
        if (getPointerType(e) !== 'touch') {
          if (onHoverUpdate != null) {
            if (e.x == null) {
              e.x = e.clientX;
            }

            if (e.y == null) {
              e.y = e.clientY;
            }

            onHoverUpdate(e);
          }
        }
      };

      var hoverStart = function hoverStart(e) {
        if (onHoverStart != null) {
          onHoverStart(e);
        }

        if (onHoverChange != null) {
          onHoverChange(true);
        }

        if (onHoverUpdate != null) {
          addMoveListener(target, !disabled ? moveListener : null);
        }

        addLeaveListener(target, !disabled ? leaveListener : null);
      };

      var enterListener = function enterListener(e) {
        var target = targetRef.current;

        if (target != null && getPointerType(e) !== 'touch') {
          if (contain) {
            dispatchCustomEvent(target, lockEventType);
          }

          hoverStart(e);

          var lockListener = function lockListener(lockEvent) {
            if (lockEvent.target !== target) {
              hoverEnd(e);
            }
          };

          var unlockListener = function unlockListener(lockEvent) {
            if (lockEvent.target !== target) {
              hoverStart(e);
            }
          };

          addLockListener(target, !disabled ? lockListener : null);
          addUnlockListener(target, !disabled ? unlockListener : null);
        }
      };

      addEnterListener(target, !disabled ? enterListener : null);
    }
  }, [addEnterListener, addMoveListener, addLeaveListener, addLockListener, addUnlockListener, contain, disabled, onHoverStart, onHoverChange, onHoverUpdate, onHoverEnd, targetRef]);
}
// EXTERNAL MODULE: ./node_modules/react-native-web/dist/modules/usePressEvents/index.js + 1 modules
var usePressEvents = __webpack_require__("8FfZ");

// CONCATENATED MODULE: ./node_modules/react-native-web/dist/exports/Pressable/index.js


function Pressable_extends() {
  Pressable_extends = Object.assign || function (target) {
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

  return Pressable_extends.apply(this, arguments);
}

function Pressable_ownKeys(object, enumerableOnly) {
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

function Pressable_objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      Pressable_ownKeys(Object(source), true).forEach(function (key) {
        Pressable_defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      Pressable_ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

function Pressable_defineProperty(obj, key, value) {
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

function Pressable_objectWithoutPropertiesLoose(source, excluded) {
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









function Pressable(props, forwardedRef) {
  var accessible = props.accessible,
      children = props.children,
      delayLongPress = props.delayLongPress,
      delayPressIn = props.delayPressIn,
      delayPressOut = props.delayPressOut,
      disabled = props.disabled,
      focusable = props.focusable,
      onBlur = props.onBlur,
      onFocus = props.onFocus,
      onLongPress = props.onLongPress,
      onPress = props.onPress,
      onPressMove = props.onPressMove,
      onPressIn = props.onPressIn,
      onPressOut = props.onPressOut,
      style = props.style,
      testOnly_pressed = props.testOnly_pressed,
      rest = Pressable_objectWithoutPropertiesLoose(props, ["accessible", "children", "delayLongPress", "delayPressIn", "delayPressOut", "disabled", "focusable", "onBlur", "onFocus", "onLongPress", "onPress", "onPressMove", "onPressIn", "onPressOut", "style", "testOnly_pressed"]);

  var _useForceableState = useForceableState(false),
      hovered = _useForceableState[0],
      setHovered = _useForceableState[1];

  var _useForceableState2 = useForceableState(false),
      focused = _useForceableState2[0],
      setFocused = _useForceableState2[1];

  var _useForceableState3 = useForceableState(testOnly_pressed === true),
      pressed = _useForceableState3[0],
      setPressed = _useForceableState3[1];

  var hostRef = Object(react["useRef"])(null);
  var setRef = Object(useMergeRefs["a" /* default */])(forwardedRef, hostRef);
  var pressConfig = Object(react["useMemo"])(function () {
    return {
      delayLongPress: delayLongPress,
      delayPressStart: delayPressIn,
      delayPressEnd: delayPressOut,
      disabled: disabled,
      onLongPress: onLongPress,
      onPress: onPress,
      onPressChange: setPressed,
      onPressStart: onPressIn,
      onPressMove: onPressMove,
      onPressEnd: onPressOut
    };
  }, [delayLongPress, delayPressIn, delayPressOut, disabled, onLongPress, onPress, onPressIn, onPressMove, onPressOut, setPressed]);
  var pressEventHandlers = Object(usePressEvents["a" /* default */])(hostRef, pressConfig);
  useHover(hostRef, {
    contain: true,
    disabled: disabled,
    onHoverChange: setHovered
  });

  var accessibilityState = Pressable_objectSpread({
    disabled: disabled
  }, props.accessibilityState);

  var interactionState = {
    hovered: hovered,
    focused: focused,
    pressed: pressed
  };

  function createFocusHandler(callback, value) {
    return function (event) {
      if (event.nativeEvent.target === hostRef.current) {
        setFocused(value);

        if (callback != null) {
          callback(event);
        }
      }
    };
  }

  return react["createElement"](View["a" /* default */], Pressable_extends({}, rest, pressEventHandlers, {
    accessibilityState: accessibilityState,
    accessible: accessible !== false,
    focusable: focusable !== false,
    onBlur: createFocusHandler(onBlur, false),
    onFocus: createFocusHandler(onFocus, true),
    ref: setRef,
    style: [!disabled && Pressable_styles.root, typeof style === 'function' ? style(interactionState) : style]
  }), typeof children === 'function' ? children(interactionState) : children);
}

function useForceableState(forced) {
  var _useState = Object(react["useState"])(false),
      bool = _useState[0],
      setBool = _useState[1];

  return [bool || forced, setBool];
}

var Pressable_styles = StyleSheet["a" /* default */].create({
  root: {
    cursor: 'pointer',
    touchAction: 'manipulation'
  }
});
var MemoedPressable = Object(react["memo"])(Object(react["forwardRef"])(Pressable));
MemoedPressable.displayName = 'Pressable';
/* harmony default export */ var exports_Pressable = (MemoedPressable);
// CONCATENATED MODULE: ./node_modules/react-native-web/dist/exports/ProgressBar/index.js
function ProgressBar_extends() {
  ProgressBar_extends = Object.assign || function (target) {
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

  return ProgressBar_extends.apply(this, arguments);
}

function ProgressBar_objectWithoutPropertiesLoose(source, excluded) {
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




var ProgressBar = Object(react["forwardRef"])(function (props, ref) {
  var _props$color = props.color,
      color = _props$color === void 0 ? '#1976D2' : _props$color,
      _props$indeterminate = props.indeterminate,
      indeterminate = _props$indeterminate === void 0 ? false : _props$indeterminate,
      _props$progress = props.progress,
      progress = _props$progress === void 0 ? 0 : _props$progress,
      _props$trackColor = props.trackColor,
      trackColor = _props$trackColor === void 0 ? 'transparent' : _props$trackColor,
      style = props.style,
      other = ProgressBar_objectWithoutPropertiesLoose(props, ["color", "indeterminate", "progress", "trackColor", "style"]);

  var percentageProgress = progress * 100;
  var progressRef = Object(react["useRef"])(null);
  Object(react["useEffect"])(function () {
    var width = indeterminate ? '25%' : percentageProgress + "%";

    if (progressRef.current != null) {
      progressRef.current.setNativeProps({
        style: {
          width: width
        }
      });
    }
  }, [indeterminate, percentageProgress, progressRef]);
  return react_default.a.createElement(View["a" /* default */], ProgressBar_extends({}, other, {
    accessibilityRole: "progressbar",
    accessibilityValue: {
      max: 100,
      min: 0,
      now: indeterminate ? null : percentageProgress
    },
    ref: ref,
    style: [ProgressBar_styles.track, style, {
      backgroundColor: trackColor
    }]
  }), react_default.a.createElement(View["a" /* default */], {
    ref: progressRef,
    style: [ProgressBar_styles.progress, indeterminate && ProgressBar_styles.animation, {
      backgroundColor: color
    }]
  }));
});
ProgressBar.displayName = 'ProgressBar';
var ProgressBar_styles = StyleSheet["a" /* default */].create({
  track: {
    height: 5,
    overflow: 'hidden',
    userSelect: 'none',
    zIndex: 0
  },
  progress: {
    height: '100%',
    zIndex: -1
  },
  animation: {
    animationDuration: '1s',
    animationKeyframes: [{
      '0%': {
        transform: [{
          translateX: '-100%'
        }]
      },
      '100%': {
        transform: [{
          translateX: '400%'
        }]
      }
    }],
    animationTimingFunction: 'linear',
    animationIterationCount: 'infinite'
  }
});
/* harmony default export */ var exports_ProgressBar = (ProgressBar);
// CONCATENATED MODULE: ./node_modules/react-native-web/dist/exports/SafeAreaView/index.js
function SafeAreaView_extends() {
  SafeAreaView_extends = Object.assign || function (target) {
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

  return SafeAreaView_extends.apply(this, arguments);
}

function SafeAreaView_objectWithoutPropertiesLoose(source, excluded) {
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






var cssFunction = function () {
  if (ExecutionEnvironment["canUseDOM"] && window.CSS && window.CSS.supports && window.CSS.supports('top: constant(safe-area-inset-top)')) {
    return 'constant';
  }

  return 'env';
}();

var SafeAreaView = Object(react["forwardRef"])(function (props, ref) {
  var style = props.style,
      rest = SafeAreaView_objectWithoutPropertiesLoose(props, ["style"]);

  return react_default.a.createElement(View["a" /* default */], SafeAreaView_extends({}, rest, {
    ref: ref,
    style: StyleSheet["a" /* default */].compose(SafeAreaView_styles.root, style)
  }));
});
SafeAreaView.displayName = 'SafeAreaView';
var SafeAreaView_styles = StyleSheet["a" /* default */].create({
  root: {
    paddingTop: cssFunction + "(safe-area-inset-top)",
    paddingRight: cssFunction + "(safe-area-inset-right)",
    paddingBottom: cssFunction + "(safe-area-inset-bottom)",
    paddingLeft: cssFunction + "(safe-area-inset-left)"
  }
});
/* harmony default export */ var exports_SafeAreaView = (SafeAreaView);
// CONCATENATED MODULE: ./node_modules/react-native-web/dist/exports/StatusBar/index.js
var StatusBar_emptyFunction = function emptyFunction() {};

function StatusBar() {
  return null;
}

StatusBar.setBackgroundColor = StatusBar_emptyFunction;
StatusBar.setBarStyle = StatusBar_emptyFunction;
StatusBar.setHidden = StatusBar_emptyFunction;
StatusBar.setNetworkActivityIndicatorVisible = StatusBar_emptyFunction;
StatusBar.setTranslucent = StatusBar_emptyFunction;
/* harmony default export */ var exports_StatusBar = (StatusBar);
// EXTERNAL MODULE: ./node_modules/react-native-web/dist/modules/multiplyStyleLengthValue/index.js
var multiplyStyleLengthValue = __webpack_require__("7H9r");

// CONCATENATED MODULE: ./node_modules/react-native-web/dist/exports/Switch/index.js
function Switch_ownKeys(object, enumerableOnly) {
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

function Switch_objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      Switch_ownKeys(Object(source), true).forEach(function (key) {
        Switch_defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      Switch_ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

function Switch_defineProperty(obj, key, value) {
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

function Switch_extends() {
  Switch_extends = Object.assign || function (target) {
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

  return Switch_extends.apply(this, arguments);
}

function Switch_objectWithoutPropertiesLoose(source, excluded) {
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







var Switch_emptyObject = {};
var thumbDefaultBoxShadow = '0px 1px 3px rgba(0,0,0,0.5)';
var thumbFocusedBoxShadow = thumbDefaultBoxShadow + ", 0 0 0 10px rgba(0,0,0,0.1)";
var Switch = Object(react["forwardRef"])(function (props, forwardedRef) {
  var accessibilityLabel = props.accessibilityLabel,
      _props$activeThumbCol = props.activeThumbColor,
      activeThumbColor = _props$activeThumbCol === void 0 ? '#009688' : _props$activeThumbCol,
      _props$activeTrackCol = props.activeTrackColor,
      activeTrackColor = _props$activeTrackCol === void 0 ? '#A3D3CF' : _props$activeTrackCol,
      _props$disabled = props.disabled,
      disabled = _props$disabled === void 0 ? false : _props$disabled,
      onValueChange = props.onValueChange,
      _props$style = props.style,
      style = _props$style === void 0 ? Switch_emptyObject : _props$style,
      _props$thumbColor = props.thumbColor,
      thumbColor = _props$thumbColor === void 0 ? '#FAFAFA' : _props$thumbColor,
      _props$trackColor = props.trackColor,
      trackColor = _props$trackColor === void 0 ? '#939393' : _props$trackColor,
      _props$value = props.value,
      value = _props$value === void 0 ? false : _props$value,
      other = Switch_objectWithoutPropertiesLoose(props, ["accessibilityLabel", "activeThumbColor", "activeTrackColor", "disabled", "onValueChange", "style", "thumbColor", "trackColor", "value"]);

  var thumbRef = Object(react["useRef"])(null);

  function handleChange(event) {
    if (onValueChange != null) {
      onValueChange(event.nativeEvent.target.checked);
    }
  }

  function handleFocusState(event) {
    var isFocused = event.nativeEvent.type === 'focus';
    var boxShadow = isFocused ? thumbFocusedBoxShadow : thumbDefaultBoxShadow;

    if (thumbRef.current != null) {
      thumbRef.current.style.boxShadow = boxShadow;
    }
  }

  var _StyleSheet$flatten = StyleSheet["a" /* default */].flatten(style),
      styleHeight = _StyleSheet$flatten.height,
      styleWidth = _StyleSheet$flatten.width;

  var height = styleHeight || 20;
  var minWidth = Object(multiplyStyleLengthValue["a" /* default */])(height, 2);
  var width = styleWidth > minWidth ? styleWidth : minWidth;
  var trackBorderRadius = Object(multiplyStyleLengthValue["a" /* default */])(height, 0.5);

  var trackCurrentColor = function () {
    if (value === true) {
      if (trackColor != null && typeof trackColor === 'object') {
        return trackColor.true;
      } else {
        return activeTrackColor;
      }
    } else {
      if (trackColor != null && typeof trackColor === 'object') {
        return trackColor.false;
      } else {
        return trackColor;
      }
    }
  }();

  var thumbCurrentColor = value ? activeThumbColor : thumbColor;
  var thumbHeight = height;
  var thumbWidth = thumbHeight;
  var rootStyle = [Switch_styles.root, style, disabled && Switch_styles.cursorDefault, {
    height: height,
    width: width
  }];
  var trackStyle = [Switch_styles.track, {
    backgroundColor: disabled ? '#D5D5D5' : trackCurrentColor,
    borderRadius: trackBorderRadius
  }];
  var thumbStyle = [Switch_styles.thumb, value && Switch_styles.thumbActive, {
    backgroundColor: disabled ? '#BDBDBD' : thumbCurrentColor,
    height: thumbHeight,
    marginStart: value ? Object(multiplyStyleLengthValue["a" /* default */])(thumbWidth, -1) : 0,
    width: thumbWidth
  }];
  var nativeControl = Object(createElement["a" /* default */])('input', {
    accessibilityLabel: accessibilityLabel,
    checked: value,
    disabled: disabled,
    onBlur: handleFocusState,
    onChange: handleChange,
    onFocus: handleFocusState,
    ref: forwardedRef,
    style: [Switch_styles.nativeControl, Switch_styles.cursorInherit],
    type: 'checkbox'
  });
  return react["createElement"](View["a" /* default */], Switch_extends({}, other, {
    style: rootStyle
  }), react["createElement"](View["a" /* default */], {
    style: trackStyle
  }), react["createElement"](View["a" /* default */], {
    ref: thumbRef,
    style: thumbStyle
  }), nativeControl);
});
Switch.displayName = 'Switch';
var Switch_styles = StyleSheet["a" /* default */].create({
  root: {
    cursor: 'pointer',
    userSelect: 'none'
  },
  cursorDefault: {
    cursor: 'default'
  },
  cursorInherit: {
    cursor: 'inherit'
  },
  track: Switch_objectSpread({}, StyleSheet["a" /* default */].absoluteFillObject, {
    height: '70%',
    margin: 'auto',
    transitionDuration: '0.1s',
    width: '100%'
  }),
  thumb: {
    alignSelf: 'flex-start',
    borderRadius: '100%',
    boxShadow: thumbDefaultBoxShadow,
    start: '0%',
    transform: [{
      translateZ: 0
    }],
    transitionDuration: '0.1s'
  },
  thumbActive: {
    start: '100%'
  },
  nativeControl: Switch_objectSpread({}, StyleSheet["a" /* default */].absoluteFillObject, {
    height: '100%',
    margin: 0,
    opacity: 0,
    padding: 0,
    width: '100%'
  })
});
/* harmony default export */ var exports_Switch = (Switch);
// EXTERNAL MODULE: ./node_modules/react-native-web/dist/exports/StyleSheet/css.js
var css = __webpack_require__("lxpi");

// EXTERNAL MODULE: ./node_modules/react-native-web/dist/modules/pick/index.js
var pick = __webpack_require__("5Bvt");

// EXTERNAL MODULE: ./node_modules/react-native-web/dist/modules/useElementLayout/index.js
var useElementLayout = __webpack_require__("gR6W");

// EXTERNAL MODULE: ./node_modules/react-native-web/dist/modules/useResponderEvents/index.js + 6 modules
var useResponderEvents = __webpack_require__("HSq1");

// CONCATENATED MODULE: ./node_modules/react-native-web/dist/exports/TextInput/index.js












var isSelectionStale = function isSelectionStale(node, selection) {
  var selectionEnd = node.selectionEnd,
      selectionStart = node.selectionStart;
  var start = selection.start,
      end = selection.end;
  return start !== selectionStart || end !== selectionEnd;
};

var setSelection = function setSelection(node, selection) {
  if (isSelectionStale(node, selection)) {
    var start = selection.start,
        end = selection.end;

    try {
      node.setSelectionRange(start, end || start);
    } catch (e) {}
  }
};

var forwardPropsList = {
  accessibilityLabel: true,
  accessibilityLiveRegion: true,
  accessibilityRole: true,
  accessibilityState: true,
  accessibilityValue: true,
  accessible: true,
  autoCapitalize: true,
  autoComplete: true,
  autoCorrect: true,
  autoFocus: true,
  children: true,
  classList: true,
  defaultValue: true,
  dir: true,
  disabled: true,
  importantForAccessibility: true,
  maxLength: true,
  nativeID: true,
  onBlur: true,
  onChange: true,
  onClick: true,
  onClickCapture: true,
  onContextMenu: true,
  onFocus: true,
  onScroll: true,
  onTouchCancel: true,
  onTouchCancelCapture: true,
  onTouchEnd: true,
  onTouchEndCapture: true,
  onTouchMove: true,
  onTouchMoveCapture: true,
  onTouchStart: true,
  onTouchStartCapture: true,
  placeholder: true,
  pointerEvents: true,
  readOnly: true,
  ref: true,
  rows: true,
  spellCheck: true,
  style: true,
  value: true,
  testID: true,
  type: true,
  dataSet: true,
  onMouseDown: true,
  onMouseEnter: true,
  onMouseLeave: true,
  onMouseMove: true,
  onMouseOver: true,
  onMouseOut: true,
  onMouseUp: true
};

var TextInput_pickProps = function pickProps(props) {
  return Object(pick["a" /* default */])(props, forwardPropsList);
};

function isEventComposing(nativeEvent) {
  return nativeEvent.isComposing || nativeEvent.keyCode === 229;
}

var TextInput = Object(react["forwardRef"])(function (props, forwardedRef) {
  var _props$autoCapitalize = props.autoCapitalize,
      autoCapitalize = _props$autoCapitalize === void 0 ? 'sentences' : _props$autoCapitalize,
      autoComplete = props.autoComplete,
      autoCompleteType = props.autoCompleteType,
      _props$autoCorrect = props.autoCorrect,
      autoCorrect = _props$autoCorrect === void 0 ? true : _props$autoCorrect,
      blurOnSubmit = props.blurOnSubmit,
      clearTextOnFocus = props.clearTextOnFocus,
      dir = props.dir,
      _props$editable = props.editable,
      editable = _props$editable === void 0 ? true : _props$editable,
      _props$keyboardType = props.keyboardType,
      keyboardType = _props$keyboardType === void 0 ? 'default' : _props$keyboardType,
      _props$multiline = props.multiline,
      multiline = _props$multiline === void 0 ? false : _props$multiline,
      _props$numberOfLines = props.numberOfLines,
      numberOfLines = _props$numberOfLines === void 0 ? 1 : _props$numberOfLines,
      onBlur = props.onBlur,
      onChange = props.onChange,
      onChangeText = props.onChangeText,
      onContentSizeChange = props.onContentSizeChange,
      onFocus = props.onFocus,
      onKeyPress = props.onKeyPress,
      onLayout = props.onLayout,
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
      onSelectionChange = props.onSelectionChange,
      onSelectionChangeShouldSetResponder = props.onSelectionChangeShouldSetResponder,
      onSelectionChangeShouldSetResponderCapture = props.onSelectionChangeShouldSetResponderCapture,
      onStartShouldSetResponder = props.onStartShouldSetResponder,
      onStartShouldSetResponderCapture = props.onStartShouldSetResponderCapture,
      onSubmitEditing = props.onSubmitEditing,
      placeholderTextColor = props.placeholderTextColor,
      returnKeyType = props.returnKeyType,
      _props$secureTextEntr = props.secureTextEntry,
      secureTextEntry = _props$secureTextEntr === void 0 ? false : _props$secureTextEntr,
      selection = props.selection,
      selectTextOnFocus = props.selectTextOnFocus,
      spellCheck = props.spellCheck;
  var type;
  var inputMode;

  switch (keyboardType) {
    case 'email-address':
      type = 'email';
      break;

    case 'number-pad':
    case 'numeric':
      inputMode = 'numeric';
      break;

    case 'decimal-pad':
      inputMode = 'decimal';
      break;

    case 'phone-pad':
      type = 'tel';
      break;

    case 'search':
    case 'web-search':
      type = 'search';
      break;

    case 'url':
      type = 'url';
      break;

    default:
      type = 'text';
  }

  if (secureTextEntry) {
    type = 'password';
  }

  var dimensions = Object(react["useRef"])({
    height: null,
    width: null
  });
  var hostRef = Object(react["useRef"])(null);
  var handleContentSizeChange = Object(react["useCallback"])(function () {
    var node = hostRef.current;

    if (multiline && onContentSizeChange && node != null) {
      var newHeight = node.scrollHeight;
      var newWidth = node.scrollWidth;

      if (newHeight !== dimensions.current.height || newWidth !== dimensions.current.width) {
        dimensions.current.height = newHeight;
        dimensions.current.width = newWidth;
        onContentSizeChange({
          nativeEvent: {
            contentSize: {
              height: dimensions.current.height,
              width: dimensions.current.width
            }
          }
        });
      }
    }
  }, [hostRef, multiline, onContentSizeChange]);
  var imperativeRef = Object(react["useMemo"])(function () {
    return function (hostNode) {
      if (hostNode != null) {
        hostNode.clear = function () {
          if (hostNode != null) {
            hostNode.value = '';
          }
        };

        hostNode.isFocused = function () {
          return hostNode != null && modules_TextInputState.currentlyFocusedField() === hostNode;
        };

        handleContentSizeChange();
      }
    };
  }, [handleContentSizeChange]);

  function handleBlur(e) {
    modules_TextInputState._currentlyFocusedNode = null;

    if (onBlur) {
      e.nativeEvent.text = e.target.value;
      onBlur(e);
    }
  }

  function handleChange(e) {
    var text = e.target.value;
    e.nativeEvent.text = text;
    handleContentSizeChange();

    if (onChange) {
      onChange(e);
    }

    if (onChangeText) {
      onChangeText(text);
    }
  }

  function handleFocus(e) {
    var node = hostRef.current;

    if (node != null) {
      modules_TextInputState._currentlyFocusedNode = node;

      if (onFocus) {
        e.nativeEvent.text = e.target.value;
        onFocus(e);
      }

      if (clearTextOnFocus) {
        node.value = '';
      }

      if (selectTextOnFocus) {
        setTimeout(function () {
          node.select();
        }, 0);
      }
    }
  }

  function handleKeyDown(e) {
    e.stopPropagation();
    var blurOnSubmitDefault = !multiline;
    var shouldBlurOnSubmit = blurOnSubmit == null ? blurOnSubmitDefault : blurOnSubmit;
    var nativeEvent = e.nativeEvent;
    var isComposing = isEventComposing(nativeEvent);

    if (onKeyPress) {
      onKeyPress(e);
    }

    if (e.key === 'Enter' && !e.shiftKey && !isComposing && !e.isDefaultPrevented()) {
      if ((blurOnSubmit || !multiline) && onSubmitEditing) {
        e.preventDefault();
        nativeEvent.text = e.target.value;
        onSubmitEditing(e);
      }

      if (shouldBlurOnSubmit && hostRef.current != null) {
        hostRef.current.blur();
      }
    }
  }

  function handleSelectionChange(e) {
    if (onSelectionChange) {
      try {
        var node = e.target;
        var selectionStart = node.selectionStart,
            selectionEnd = node.selectionEnd;
        e.nativeEvent.selection = {
          start: selectionStart,
          end: selectionEnd
        };
        e.nativeEvent.text = e.target.value;
        onSelectionChange(e);
      } catch (e) {}
    }
  }

  Object(useLayoutEffect["a" /* default */])(function () {
    var node = hostRef.current;

    if (node != null && selection != null) {
      setSelection(node, selection);
    }

    if (document.activeElement === node) {
      modules_TextInputState._currentlyFocusedNode = node;
    }
  }, [hostRef, selection]);
  var component = multiline ? 'textarea' : 'input';
  var classList = [classes.textinput];
  var style = StyleSheet["a" /* default */].compose(props.style, placeholderTextColor && {
    placeholderTextColor: placeholderTextColor
  });
  Object(useElementLayout["a" /* default */])(hostRef, onLayout);
  Object(useResponderEvents["a" /* default */])(hostRef, {
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
  var supportedProps = TextInput_pickProps(props);
  supportedProps.autoCapitalize = autoCapitalize;
  supportedProps.autoComplete = autoComplete || autoCompleteType || 'on';
  supportedProps.autoCorrect = autoCorrect ? 'on' : 'off';
  supportedProps.classList = classList;
  supportedProps.dir = dir !== undefined ? dir : 'auto';
  supportedProps.enterkeyhint = returnKeyType;
  supportedProps.onBlur = handleBlur;
  supportedProps.onChange = handleChange;
  supportedProps.onFocus = handleFocus;
  supportedProps.onKeyDown = handleKeyDown;
  supportedProps.onSelect = handleSelectionChange;
  supportedProps.readOnly = !editable;
  supportedProps.rows = multiline ? numberOfLines : undefined;
  supportedProps.spellCheck = spellCheck != null ? spellCheck : autoCorrect;
  supportedProps.style = style;
  supportedProps.type = multiline ? undefined : type;
  supportedProps.inputMode = inputMode;
  var platformMethodsRef = Object(usePlatformMethods["a" /* default */])(supportedProps);
  var setRef = Object(useMergeRefs["a" /* default */])(hostRef, platformMethodsRef, imperativeRef, forwardedRef);
  supportedProps.ref = setRef;
  return Object(createElement["a" /* default */])(component, supportedProps);
});
TextInput.displayName = 'TextInput';
TextInput.State = modules_TextInputState;
var classes = css["a" /* default */].create({
  textinput: {
    MozAppearance: 'textfield',
    WebkitAppearance: 'none',
    backgroundColor: 'transparent',
    border: '0 solid black',
    borderRadius: 0,
    boxSizing: 'border-box',
    font: '14px System',
    margin: 0,
    padding: 0,
    resize: 'none'
  }
});
/* harmony default export */ var exports_TextInput = (TextInput);
// EXTERNAL MODULE: ./node_modules/react-native-web/dist/modules/AccessibilityUtil/index.js + 4 modules
var AccessibilityUtil = __webpack_require__("IybW");

// CONCATENATED MODULE: ./node_modules/react-native-web/dist/vendor/react-native/PooledClass/index.js


var twoArgumentPooler = function twoArgumentPooler(a1, a2) {
  var Klass = this;

  if (Klass.instancePool.length) {
    var instance = Klass.instancePool.pop();
    Klass.call(instance, a1, a2);
    return instance;
  } else {
    return new Klass(a1, a2);
  }
};

var standardReleaser = function standardReleaser(instance) {
  var Klass = this;
  instance.destructor();

  if (Klass.instancePool.length < Klass.poolSize) {
    Klass.instancePool.push(instance);
  }
};

var DEFAULT_POOL_SIZE = 10;
var DEFAULT_POOLER = twoArgumentPooler;

var addPoolingTo = function addPoolingTo(CopyConstructor, pooler) {
  var NewKlass = CopyConstructor;
  NewKlass.instancePool = [];
  NewKlass.getPooled = pooler || DEFAULT_POOLER;

  if (!NewKlass.poolSize) {
    NewKlass.poolSize = DEFAULT_POOL_SIZE;
  }

  NewKlass.release = standardReleaser;
  return NewKlass;
};

var PooledClass = {
  addPoolingTo: addPoolingTo,
  twoArgumentPooler: twoArgumentPooler
};
/* harmony default export */ var react_native_PooledClass = (PooledClass);
// CONCATENATED MODULE: ./node_modules/react-native-web/dist/exports/Touchable/BoundingDimensions.js

var BoundingDimensions_twoArgumentPooler = react_native_PooledClass.twoArgumentPooler;

function BoundingDimensions(width, height) {
  this.width = width;
  this.height = height;
}

BoundingDimensions.prototype.destructor = function () {
  this.width = null;
  this.height = null;
};

BoundingDimensions.getPooledFromElement = function (element) {
  return BoundingDimensions.getPooled(element.offsetWidth, element.offsetHeight);
};

react_native_PooledClass.addPoolingTo(BoundingDimensions, BoundingDimensions_twoArgumentPooler);
/* harmony default export */ var Touchable_BoundingDimensions = (BoundingDimensions);
// EXTERNAL MODULE: ./node_modules/normalize-css-color/index.js
var normalize_css_color = __webpack_require__("FJcI");
var normalize_css_color_default = /*#__PURE__*/__webpack_require__.n(normalize_css_color);

// CONCATENATED MODULE: ./node_modules/react-native-web/dist/exports/Touchable/Position.js

var Position_twoArgumentPooler = react_native_PooledClass.twoArgumentPooler;

function Position(left, top) {
  this.left = left;
  this.top = top;
}

Position.prototype.destructor = function () {
  this.left = null;
  this.top = null;
};

react_native_PooledClass.addPoolingTo(Position, Position_twoArgumentPooler);
/* harmony default export */ var Touchable_Position = (Position);
// CONCATENATED MODULE: ./node_modules/react-native-web/dist/exports/Touchable/index.js


function Touchable_objectWithoutPropertiesLoose(source, excluded) {
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

function Touchable_ownKeys(object, enumerableOnly) {
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

function Touchable_objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      Touchable_ownKeys(Object(source), true).forEach(function (key) {
        Touchable_defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      Touchable_ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

function Touchable_defineProperty(obj, key, value) {
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










var extractSingleTouch = function extractSingleTouch(nativeEvent) {
  var touches = nativeEvent.touches;
  var changedTouches = nativeEvent.changedTouches;
  var hasTouches = touches && touches.length > 0;
  var hasChangedTouches = changedTouches && changedTouches.length > 0;
  return !hasTouches && hasChangedTouches ? changedTouches[0] : hasTouches ? touches[0] : nativeEvent;
};

var States = {
  NOT_RESPONDER: 'NOT_RESPONDER',
  RESPONDER_INACTIVE_PRESS_IN: 'RESPONDER_INACTIVE_PRESS_IN',
  RESPONDER_INACTIVE_PRESS_OUT: 'RESPONDER_INACTIVE_PRESS_OUT',
  RESPONDER_ACTIVE_PRESS_IN: 'RESPONDER_ACTIVE_PRESS_IN',
  RESPONDER_ACTIVE_PRESS_OUT: 'RESPONDER_ACTIVE_PRESS_OUT',
  RESPONDER_ACTIVE_LONG_PRESS_IN: 'RESPONDER_ACTIVE_LONG_PRESS_IN',
  RESPONDER_ACTIVE_LONG_PRESS_OUT: 'RESPONDER_ACTIVE_LONG_PRESS_OUT',
  ERROR: 'ERROR'
};
var baseStatesConditions = {
  NOT_RESPONDER: false,
  RESPONDER_INACTIVE_PRESS_IN: false,
  RESPONDER_INACTIVE_PRESS_OUT: false,
  RESPONDER_ACTIVE_PRESS_IN: false,
  RESPONDER_ACTIVE_PRESS_OUT: false,
  RESPONDER_ACTIVE_LONG_PRESS_IN: false,
  RESPONDER_ACTIVE_LONG_PRESS_OUT: false,
  ERROR: false
};

var IsActive = Touchable_objectSpread({}, baseStatesConditions, {
  RESPONDER_ACTIVE_PRESS_OUT: true,
  RESPONDER_ACTIVE_PRESS_IN: true
});

var IsPressingIn = Touchable_objectSpread({}, baseStatesConditions, {
  RESPONDER_INACTIVE_PRESS_IN: true,
  RESPONDER_ACTIVE_PRESS_IN: true,
  RESPONDER_ACTIVE_LONG_PRESS_IN: true
});

var IsLongPressingIn = Touchable_objectSpread({}, baseStatesConditions, {
  RESPONDER_ACTIVE_LONG_PRESS_IN: true
});

var Signals = {
  DELAY: 'DELAY',
  RESPONDER_GRANT: 'RESPONDER_GRANT',
  RESPONDER_RELEASE: 'RESPONDER_RELEASE',
  RESPONDER_TERMINATED: 'RESPONDER_TERMINATED',
  ENTER_PRESS_RECT: 'ENTER_PRESS_RECT',
  LEAVE_PRESS_RECT: 'LEAVE_PRESS_RECT',
  LONG_PRESS_DETECTED: 'LONG_PRESS_DETECTED'
};
var Transitions = {
  NOT_RESPONDER: {
    DELAY: States.ERROR,
    RESPONDER_GRANT: States.RESPONDER_INACTIVE_PRESS_IN,
    RESPONDER_RELEASE: States.ERROR,
    RESPONDER_TERMINATED: States.ERROR,
    ENTER_PRESS_RECT: States.ERROR,
    LEAVE_PRESS_RECT: States.ERROR,
    LONG_PRESS_DETECTED: States.ERROR
  },
  RESPONDER_INACTIVE_PRESS_IN: {
    DELAY: States.RESPONDER_ACTIVE_PRESS_IN,
    RESPONDER_GRANT: States.ERROR,
    RESPONDER_RELEASE: States.NOT_RESPONDER,
    RESPONDER_TERMINATED: States.NOT_RESPONDER,
    ENTER_PRESS_RECT: States.RESPONDER_INACTIVE_PRESS_IN,
    LEAVE_PRESS_RECT: States.RESPONDER_INACTIVE_PRESS_OUT,
    LONG_PRESS_DETECTED: States.ERROR
  },
  RESPONDER_INACTIVE_PRESS_OUT: {
    DELAY: States.RESPONDER_ACTIVE_PRESS_OUT,
    RESPONDER_GRANT: States.ERROR,
    RESPONDER_RELEASE: States.NOT_RESPONDER,
    RESPONDER_TERMINATED: States.NOT_RESPONDER,
    ENTER_PRESS_RECT: States.RESPONDER_INACTIVE_PRESS_IN,
    LEAVE_PRESS_RECT: States.RESPONDER_INACTIVE_PRESS_OUT,
    LONG_PRESS_DETECTED: States.ERROR
  },
  RESPONDER_ACTIVE_PRESS_IN: {
    DELAY: States.ERROR,
    RESPONDER_GRANT: States.ERROR,
    RESPONDER_RELEASE: States.NOT_RESPONDER,
    RESPONDER_TERMINATED: States.NOT_RESPONDER,
    ENTER_PRESS_RECT: States.RESPONDER_ACTIVE_PRESS_IN,
    LEAVE_PRESS_RECT: States.RESPONDER_ACTIVE_PRESS_OUT,
    LONG_PRESS_DETECTED: States.RESPONDER_ACTIVE_LONG_PRESS_IN
  },
  RESPONDER_ACTIVE_PRESS_OUT: {
    DELAY: States.ERROR,
    RESPONDER_GRANT: States.ERROR,
    RESPONDER_RELEASE: States.NOT_RESPONDER,
    RESPONDER_TERMINATED: States.NOT_RESPONDER,
    ENTER_PRESS_RECT: States.RESPONDER_ACTIVE_PRESS_IN,
    LEAVE_PRESS_RECT: States.RESPONDER_ACTIVE_PRESS_OUT,
    LONG_PRESS_DETECTED: States.ERROR
  },
  RESPONDER_ACTIVE_LONG_PRESS_IN: {
    DELAY: States.ERROR,
    RESPONDER_GRANT: States.ERROR,
    RESPONDER_RELEASE: States.NOT_RESPONDER,
    RESPONDER_TERMINATED: States.NOT_RESPONDER,
    ENTER_PRESS_RECT: States.RESPONDER_ACTIVE_LONG_PRESS_IN,
    LEAVE_PRESS_RECT: States.RESPONDER_ACTIVE_LONG_PRESS_OUT,
    LONG_PRESS_DETECTED: States.RESPONDER_ACTIVE_LONG_PRESS_IN
  },
  RESPONDER_ACTIVE_LONG_PRESS_OUT: {
    DELAY: States.ERROR,
    RESPONDER_GRANT: States.ERROR,
    RESPONDER_RELEASE: States.NOT_RESPONDER,
    RESPONDER_TERMINATED: States.NOT_RESPONDER,
    ENTER_PRESS_RECT: States.RESPONDER_ACTIVE_LONG_PRESS_IN,
    LEAVE_PRESS_RECT: States.RESPONDER_ACTIVE_LONG_PRESS_OUT,
    LONG_PRESS_DETECTED: States.ERROR
  },
  error: {
    DELAY: States.NOT_RESPONDER,
    RESPONDER_GRANT: States.RESPONDER_INACTIVE_PRESS_IN,
    RESPONDER_RELEASE: States.NOT_RESPONDER,
    RESPONDER_TERMINATED: States.NOT_RESPONDER,
    ENTER_PRESS_RECT: States.NOT_RESPONDER,
    LEAVE_PRESS_RECT: States.NOT_RESPONDER,
    LONG_PRESS_DETECTED: States.NOT_RESPONDER
  }
};
var HIGHLIGHT_DELAY_MS = 130;
var PRESS_EXPAND_PX = 20;
var LONG_PRESS_THRESHOLD = 500;
var LONG_PRESS_DELAY_MS = LONG_PRESS_THRESHOLD - HIGHLIGHT_DELAY_MS;
var LONG_PRESS_ALLOWED_MOVEMENT = 10;
var TouchableMixin = {
  componentDidMount: function componentDidMount() {
    var _this = this;

    this._touchableNode = Object(findNodeHandle["a" /* default */])(this);

    if (this._touchableNode && this._touchableNode.addEventListener) {
      this._touchableBlurListener = function (e) {
        if (_this._isTouchableKeyboardActive) {
          if (_this.state.touchable.touchState && _this.state.touchable.touchState !== States.NOT_RESPONDER) {
            _this.touchableHandleResponderTerminate({
              nativeEvent: e
            });
          }

          _this._isTouchableKeyboardActive = false;
        }
      };

      this._touchableNode.addEventListener('blur', this._touchableBlurListener);
    }
  },
  componentWillUnmount: function componentWillUnmount() {
    if (this._touchableNode && this._touchableNode.addEventListener) {
      this._touchableNode.removeEventListener('blur', this._touchableBlurListener);
    }

    this.touchableDelayTimeout && clearTimeout(this.touchableDelayTimeout);
    this.longPressDelayTimeout && clearTimeout(this.longPressDelayTimeout);
    this.pressOutDelayTimeout && clearTimeout(this.pressOutDelayTimeout);
  },
  touchableGetInitialState: function touchableGetInitialState() {
    return {
      touchable: {
        touchState: undefined,
        responderID: null
      }
    };
  },
  touchableHandleResponderTerminationRequest: function touchableHandleResponderTerminationRequest() {
    return !this.props.rejectResponderTermination;
  },
  touchableHandleStartShouldSetResponder: function touchableHandleStartShouldSetResponder() {
    return !this.props.disabled;
  },
  touchableLongPressCancelsPress: function touchableLongPressCancelsPress() {
    return true;
  },
  touchableHandleResponderGrant: function touchableHandleResponderGrant(e) {
    var dispatchID = e.currentTarget;
    e.persist();
    this.pressOutDelayTimeout && clearTimeout(this.pressOutDelayTimeout);
    this.pressOutDelayTimeout = null;
    this.state.touchable.touchState = States.NOT_RESPONDER;
    this.state.touchable.responderID = dispatchID;

    this._receiveSignal(Signals.RESPONDER_GRANT, e);

    var delayMS = this.touchableGetHighlightDelayMS !== undefined ? Math.max(this.touchableGetHighlightDelayMS(), 0) : HIGHLIGHT_DELAY_MS;
    delayMS = isNaN(delayMS) ? HIGHLIGHT_DELAY_MS : delayMS;

    if (delayMS !== 0) {
      this.touchableDelayTimeout = setTimeout(this._handleDelay.bind(this, e), delayMS);
    } else {
      this._handleDelay(e);
    }

    var longDelayMS = this.touchableGetLongPressDelayMS !== undefined ? Math.max(this.touchableGetLongPressDelayMS(), 10) : LONG_PRESS_DELAY_MS;
    longDelayMS = isNaN(longDelayMS) ? LONG_PRESS_DELAY_MS : longDelayMS;
    this.longPressDelayTimeout = setTimeout(this._handleLongDelay.bind(this, e), longDelayMS + delayMS);
  },
  touchableHandleResponderRelease: function touchableHandleResponderRelease(e) {
    this.pressInLocation = null;

    this._receiveSignal(Signals.RESPONDER_RELEASE, e);
  },
  touchableHandleResponderTerminate: function touchableHandleResponderTerminate(e) {
    this.pressInLocation = null;

    this._receiveSignal(Signals.RESPONDER_TERMINATED, e);
  },
  touchableHandleResponderMove: function touchableHandleResponderMove(e) {
    if (!this.state.touchable.positionOnActivate) {
      return;
    }

    var positionOnActivate = this.state.touchable.positionOnActivate;
    var dimensionsOnActivate = this.state.touchable.dimensionsOnActivate;
    var pressRectOffset = this.touchableGetPressRectOffset ? this.touchableGetPressRectOffset() : {
      left: PRESS_EXPAND_PX,
      right: PRESS_EXPAND_PX,
      top: PRESS_EXPAND_PX,
      bottom: PRESS_EXPAND_PX
    };
    var pressExpandLeft = pressRectOffset.left;
    var pressExpandTop = pressRectOffset.top;
    var pressExpandRight = pressRectOffset.right;
    var pressExpandBottom = pressRectOffset.bottom;
    var hitSlop = this.touchableGetHitSlop ? this.touchableGetHitSlop() : null;

    if (hitSlop) {
      pressExpandLeft += hitSlop.left || 0;
      pressExpandTop += hitSlop.top || 0;
      pressExpandRight += hitSlop.right || 0;
      pressExpandBottom += hitSlop.bottom || 0;
    }

    var touch = extractSingleTouch(e.nativeEvent);
    var pageX = touch && touch.pageX;
    var pageY = touch && touch.pageY;

    if (this.pressInLocation) {
      var movedDistance = this._getDistanceBetweenPoints(pageX, pageY, this.pressInLocation.pageX, this.pressInLocation.pageY);

      if (movedDistance > LONG_PRESS_ALLOWED_MOVEMENT) {
        this._cancelLongPressDelayTimeout();
      }
    }

    var isTouchWithinActive = pageX > positionOnActivate.left - pressExpandLeft && pageY > positionOnActivate.top - pressExpandTop && pageX < positionOnActivate.left + dimensionsOnActivate.width + pressExpandRight && pageY < positionOnActivate.top + dimensionsOnActivate.height + pressExpandBottom;

    if (isTouchWithinActive) {
      var prevState = this.state.touchable.touchState;

      this._receiveSignal(Signals.ENTER_PRESS_RECT, e);

      var curState = this.state.touchable.touchState;

      if (curState === States.RESPONDER_INACTIVE_PRESS_IN && prevState !== States.RESPONDER_INACTIVE_PRESS_IN) {
        this._cancelLongPressDelayTimeout();
      }
    } else {
      this._cancelLongPressDelayTimeout();

      this._receiveSignal(Signals.LEAVE_PRESS_RECT, e);
    }
  },
  touchableHandleFocus: function touchableHandleFocus(e) {
    this.props.onFocus && this.props.onFocus(e);
  },
  touchableHandleBlur: function touchableHandleBlur(e) {
    this.props.onBlur && this.props.onBlur(e);
  },
  _remeasureMetricsOnActivation: function _remeasureMetricsOnActivation() {
    var tag = this.state.touchable.responderID;

    if (tag == null) {
      return;
    }

    UIManager["a" /* default */].measure(tag, this._handleQueryLayout);
  },
  _handleQueryLayout: function _handleQueryLayout(l, t, w, h, globalX, globalY) {
    if (!l && !t && !w && !h && !globalX && !globalY) {
      return;
    }

    this.state.touchable.positionOnActivate && Touchable_Position.release(this.state.touchable.positionOnActivate);
    this.state.touchable.dimensionsOnActivate && Touchable_BoundingDimensions.release(this.state.touchable.dimensionsOnActivate);
    this.state.touchable.positionOnActivate = Touchable_Position.getPooled(globalX, globalY);
    this.state.touchable.dimensionsOnActivate = Touchable_BoundingDimensions.getPooled(w, h);
  },
  _handleDelay: function _handleDelay(e) {
    this.touchableDelayTimeout = null;

    this._receiveSignal(Signals.DELAY, e);
  },
  _handleLongDelay: function _handleLongDelay(e) {
    this.longPressDelayTimeout = null;
    var curState = this.state.touchable.touchState;

    if (curState !== States.RESPONDER_ACTIVE_PRESS_IN && curState !== States.RESPONDER_ACTIVE_LONG_PRESS_IN) {
      console.error('Attempted to transition from state `' + curState + '` to `' + States.RESPONDER_ACTIVE_LONG_PRESS_IN + '`, which is not supported. This is ' + 'most likely due to `Touchable.longPressDelayTimeout` not being cancelled.');
    } else {
      this._receiveSignal(Signals.LONG_PRESS_DETECTED, e);
    }
  },
  _receiveSignal: function _receiveSignal(signal, e) {
    var responderID = this.state.touchable.responderID;
    var curState = this.state.touchable.touchState;
    var nextState = Transitions[curState] && Transitions[curState][signal];

    if (!responderID && signal === Signals.RESPONDER_RELEASE) {
      return;
    }

    if (!nextState) {
      throw new Error('Unrecognized signal `' + signal + '` or state `' + curState + '` for Touchable responder `' + responderID + '`');
    }

    if (nextState === States.ERROR) {
      throw new Error('Touchable cannot transition from `' + curState + '` to `' + signal + '` for responder `' + responderID + '`');
    }

    if (curState !== nextState) {
      this._performSideEffectsForTransition(curState, nextState, signal, e);

      this.state.touchable.touchState = nextState;
    }
  },
  _cancelLongPressDelayTimeout: function _cancelLongPressDelayTimeout() {
    this.longPressDelayTimeout && clearTimeout(this.longPressDelayTimeout);
    this.longPressDelayTimeout = null;
  },
  _isHighlight: function _isHighlight(state) {
    return state === States.RESPONDER_ACTIVE_PRESS_IN || state === States.RESPONDER_ACTIVE_LONG_PRESS_IN;
  },
  _savePressInLocation: function _savePressInLocation(e) {
    var touch = extractSingleTouch(e.nativeEvent);
    var pageX = touch && touch.pageX;
    var pageY = touch && touch.pageY;
    var locationX = touch && touch.locationX;
    var locationY = touch && touch.locationY;
    this.pressInLocation = {
      pageX: pageX,
      pageY: pageY,
      locationX: locationX,
      locationY: locationY
    };
  },
  _getDistanceBetweenPoints: function _getDistanceBetweenPoints(aX, aY, bX, bY) {
    var deltaX = aX - bX;
    var deltaY = aY - bY;
    return Math.sqrt(deltaX * deltaX + deltaY * deltaY);
  },
  _performSideEffectsForTransition: function _performSideEffectsForTransition(curState, nextState, signal, e) {
    var curIsHighlight = this._isHighlight(curState);

    var newIsHighlight = this._isHighlight(nextState);

    var isFinalSignal = signal === Signals.RESPONDER_TERMINATED || signal === Signals.RESPONDER_RELEASE;

    if (isFinalSignal) {
      this._cancelLongPressDelayTimeout();
    }

    var isInitialTransition = curState === States.NOT_RESPONDER && nextState === States.RESPONDER_INACTIVE_PRESS_IN;
    var isActiveTransition = !IsActive[curState] && IsActive[nextState];

    if (isInitialTransition || isActiveTransition) {
      this._remeasureMetricsOnActivation();
    }

    if (IsPressingIn[curState] && signal === Signals.LONG_PRESS_DETECTED) {
      this.touchableHandleLongPress && this.touchableHandleLongPress(e);
    }

    if (newIsHighlight && !curIsHighlight) {
      this._startHighlight(e);
    } else if (!newIsHighlight && curIsHighlight) {
      this._endHighlight(e);
    }

    if (IsPressingIn[curState] && signal === Signals.RESPONDER_RELEASE) {
      var hasLongPressHandler = !!this.props.onLongPress;
      var pressIsLongButStillCallOnPress = IsLongPressingIn[curState] && (!hasLongPressHandler || !this.touchableLongPressCancelsPress());
      var shouldInvokePress = !IsLongPressingIn[curState] || pressIsLongButStillCallOnPress;

      if (shouldInvokePress && this.touchableHandlePress) {
        if (!newIsHighlight && !curIsHighlight) {
          this._startHighlight(e);

          this._endHighlight(e);
        }

        this.touchableHandlePress(e);
      }
    }

    this.touchableDelayTimeout && clearTimeout(this.touchableDelayTimeout);
    this.touchableDelayTimeout = null;
  },
  _playTouchSound: function _playTouchSound() {
    UIManager["a" /* default */].playTouchSound();
  },
  _startHighlight: function _startHighlight(e) {
    this._savePressInLocation(e);

    this.touchableHandleActivePressIn && this.touchableHandleActivePressIn(e);
  },
  _endHighlight: function _endHighlight(e) {
    var _this2 = this;

    if (this.touchableHandleActivePressOut) {
      if (this.touchableGetPressOutDelayMS && this.touchableGetPressOutDelayMS()) {
        this.pressOutDelayTimeout = setTimeout(function () {
          _this2.touchableHandleActivePressOut(e);
        }, this.touchableGetPressOutDelayMS());
      } else {
        this.touchableHandleActivePressOut(e);
      }
    }
  },
  touchableHandleKeyEvent: function touchableHandleKeyEvent(e) {
    var type = e.type,
        key = e.key;

    if (key === 'Enter' || key === ' ') {
      if (type === 'keydown') {
        if (!this._isTouchableKeyboardActive) {
          if (!this.state.touchable.touchState || this.state.touchable.touchState === States.NOT_RESPONDER) {
            this.touchableHandleResponderGrant(e);
            this._isTouchableKeyboardActive = true;
          }
        }
      } else if (type === 'keyup') {
        if (this._isTouchableKeyboardActive) {
          if (this.state.touchable.touchState && this.state.touchable.touchState !== States.NOT_RESPONDER) {
            this.touchableHandleResponderRelease(e);
            this._isTouchableKeyboardActive = false;
          }
        }
      }

      e.stopPropagation();

      if (!(key === 'Enter' && AccessibilityUtil["a" /* default */].propsToAriaRole(this.props) === 'link')) {
        e.preventDefault();
      }
    }
  },
  withoutDefaultFocusAndBlur: {}
};

var touchableHandleFocus = TouchableMixin.touchableHandleFocus,
    touchableHandleBlur = TouchableMixin.touchableHandleBlur,
    TouchableMixinWithoutDefaultFocusAndBlur = Touchable_objectWithoutPropertiesLoose(TouchableMixin, ["touchableHandleFocus", "touchableHandleBlur"]);

TouchableMixin.withoutDefaultFocusAndBlur = TouchableMixinWithoutDefaultFocusAndBlur;
var Touchable = {
  Mixin: TouchableMixin,
  TOUCH_TARGET_DEBUG: false,
  renderDebugView: function renderDebugView(_ref) {
    var color = _ref.color,
        hitSlop = _ref.hitSlop;

    if (!Touchable.TOUCH_TARGET_DEBUG) {
      return null;
    }

    if (false) {}

    var debugHitSlopStyle = {};
    hitSlop = hitSlop || {
      top: 0,
      bottom: 0,
      left: 0,
      right: 0
    };

    for (var key in hitSlop) {
      debugHitSlopStyle[key] = -hitSlop[key];
    }

    var normalizedColor = normalize_css_color_default()(color);

    if (typeof normalizedColor !== 'number') {
      return null;
    }

    var hexColor = '#' + ('00000000' + normalizedColor.toString(16)).substr(-8);
    return react_default.a.createElement(View["a" /* default */], {
      pointerEvents: "none",
      style: Touchable_objectSpread({
        position: 'absolute',
        borderColor: hexColor.slice(0, -2) + '55',
        borderWidth: 1,
        borderStyle: 'dashed',
        backgroundColor: hexColor.slice(0, -2) + '0F'
      }, debugHitSlopStyle)
    });
  }
};
/* harmony default export */ var exports_Touchable = (Touchable);
// CONCATENATED MODULE: ./node_modules/react-native-web/dist/exports/TouchableHighlight/index.js


function TouchableHighlight_extends() {
  TouchableHighlight_extends = Object.assign || function (target) {
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

  return TouchableHighlight_extends.apply(this, arguments);
}

function TouchableHighlight_ownKeys(object, enumerableOnly) {
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

function TouchableHighlight_objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      TouchableHighlight_ownKeys(Object(source), true).forEach(function (key) {
        TouchableHighlight_defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      TouchableHighlight_ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

function TouchableHighlight_defineProperty(obj, key, value) {
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

function TouchableHighlight_objectWithoutPropertiesLoose(source, excluded) {
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








function createExtraStyles(activeOpacity, underlayColor) {
  return {
    child: {
      opacity: activeOpacity !== null && activeOpacity !== void 0 ? activeOpacity : 0.85
    },
    underlay: {
      backgroundColor: underlayColor === undefined ? 'black' : underlayColor
    }
  };
}

function hasPressHandler(props) {
  return props.onPress != null || props.onPressIn != null || props.onPressOut != null || props.onLongPress != null;
}

function TouchableHighlight(props, forwardedRef) {
  var accessible = props.accessible,
      activeOpacity = props.activeOpacity,
      children = props.children,
      delayPressIn = props.delayPressIn,
      delayPressOut = props.delayPressOut,
      delayLongPress = props.delayLongPress,
      disabled = props.disabled,
      focusable = props.focusable,
      onHideUnderlay = props.onHideUnderlay,
      onLongPress = props.onLongPress,
      onPress = props.onPress,
      onPressIn = props.onPressIn,
      onPressOut = props.onPressOut,
      onShowUnderlay = props.onShowUnderlay,
      rejectResponderTermination = props.rejectResponderTermination,
      style = props.style,
      testOnly_pressed = props.testOnly_pressed,
      underlayColor = props.underlayColor,
      rest = TouchableHighlight_objectWithoutPropertiesLoose(props, ["accessible", "activeOpacity", "children", "delayPressIn", "delayPressOut", "delayLongPress", "disabled", "focusable", "onHideUnderlay", "onLongPress", "onPress", "onPressIn", "onPressOut", "onShowUnderlay", "rejectResponderTermination", "style", "testOnly_pressed", "underlayColor"]);

  var hostRef = Object(react["useRef"])(null);
  var setRef = Object(useMergeRefs["a" /* default */])(forwardedRef, hostRef);

  var _useState = Object(react["useState"])(testOnly_pressed === true ? createExtraStyles(activeOpacity, underlayColor) : null),
      extraStyles = _useState[0],
      setExtraStyles = _useState[1];

  var showUnderlay = Object(react["useCallback"])(function () {
    if (!hasPressHandler(props)) {
      return;
    }

    setExtraStyles(createExtraStyles(activeOpacity, underlayColor));

    if (onShowUnderlay != null) {
      onShowUnderlay();
    }
  }, [activeOpacity, onShowUnderlay, props, underlayColor]);
  var hideUnderlay = Object(react["useCallback"])(function () {
    if (testOnly_pressed === true) {
      return;
    }

    if (hasPressHandler(props)) {
      setExtraStyles(null);

      if (onHideUnderlay != null) {
        onHideUnderlay();
      }
    }
  }, [onHideUnderlay, props, testOnly_pressed]);
  var pressConfig = Object(react["useMemo"])(function () {
    return {
      cancelable: !rejectResponderTermination,
      disabled: disabled,
      delayLongPress: delayLongPress,
      delayPressStart: delayPressIn,
      delayPressEnd: delayPressOut,
      onLongPress: onLongPress,
      onPress: onPress,
      onPressStart: function onPressStart(event) {
        showUnderlay();

        if (onPressIn != null) {
          onPressIn(event);
        }
      },
      onPressEnd: function onPressEnd(event) {
        hideUnderlay();

        if (onPressOut != null) {
          onPressOut(event);
        }
      }
    };
  }, [delayLongPress, delayPressIn, delayPressOut, disabled, onLongPress, onPress, onPressIn, onPressOut, rejectResponderTermination, showUnderlay, hideUnderlay]);
  var pressEventHandlers = Object(usePressEvents["a" /* default */])(hostRef, pressConfig);
  var child = react["Children"].only(children);
  return react["createElement"](View["a" /* default */], TouchableHighlight_extends({}, rest, pressEventHandlers, {
    accessibilityState: TouchableHighlight_objectSpread({
      disabled: disabled
    }, props.accessibilityState),
    accessible: accessible !== false,
    focusable: focusable !== false && onPress !== undefined,
    ref: setRef,
    style: [TouchableHighlight_styles.root, style, !disabled && TouchableHighlight_styles.actionable, extraStyles && extraStyles.underlay]
  }), react["cloneElement"](child, {
    style: StyleSheet["a" /* default */].compose(child.props.style, extraStyles && extraStyles.child)
  }));
}

var TouchableHighlight_styles = StyleSheet["a" /* default */].create({
  root: {
    userSelect: 'none'
  },
  actionable: {
    cursor: 'pointer',
    touchAction: 'manipulation'
  }
});
var MemoedTouchableHighlight = react["memo"](react["forwardRef"](TouchableHighlight));
MemoedTouchableHighlight.displayName = 'TouchableHighlight';
/* harmony default export */ var exports_TouchableHighlight = (MemoedTouchableHighlight);
// CONCATENATED MODULE: ./node_modules/react-native-web/dist/modules/UnimplementedView/index.js
function UnimplementedView_inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  subClass.__proto__ = superClass;
}




var UnimplementedView_UnimplementedView = function (_React$Component) {
  UnimplementedView_inheritsLoose(UnimplementedView, _React$Component);

  function UnimplementedView() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = UnimplementedView.prototype;

  _proto.setNativeProps = function setNativeProps() {};

  _proto.render = function render() {
    return react_default.a.createElement(View["a" /* default */], {
      style: [unimplementedViewStyles, this.props.style]
    }, this.props.children);
  };

  return UnimplementedView;
}(react_default.a.Component);

var unimplementedViewStyles =  false ? undefined : {};
/* harmony default export */ var modules_UnimplementedView = (UnimplementedView_UnimplementedView);
// CONCATENATED MODULE: ./node_modules/react-native-web/dist/exports/TouchableNativeFeedback/index.js

/* harmony default export */ var TouchableNativeFeedback = (modules_UnimplementedView);
// EXTERNAL MODULE: ./node_modules/react-native-web/dist/exports/TouchableWithoutFeedback/index.js
var TouchableWithoutFeedback = __webpack_require__("Wi0u");

// CONCATENATED MODULE: ./node_modules/react-native-web/dist/exports/VirtualizedList/index.js

/* harmony default export */ var exports_VirtualizedList = (react_native_VirtualizedList);
// CONCATENATED MODULE: ./node_modules/react-native-web/dist/exports/YellowBox/index.js



function YellowBox(props) {
  return react_default.a.createElement(modules_UnimplementedView, props);
}

YellowBox.ignoreWarnings = function () {};

/* harmony default export */ var exports_YellowBox = (YellowBox);
// CONCATENATED MODULE: ./node_modules/react-native-web/dist/exports/LogBox/index.js
var LogBox = {
  ignoreLogs: function ignoreLogs() {},
  ignoreAllLogs: function ignoreAllLogs() {},
  uninstall: function uninstall() {},
  install: function install() {}
};
/* harmony default export */ var exports_LogBox = (LogBox);
// CONCATENATED MODULE: ./node_modules/react-native-web/dist/exports/DrawerLayoutAndroid/index.js

/* harmony default export */ var DrawerLayoutAndroid = (modules_UnimplementedView);
// CONCATENATED MODULE: ./node_modules/react-native-web/dist/exports/InputAccessoryView/index.js

/* harmony default export */ var InputAccessoryView = (modules_UnimplementedView);
// CONCATENATED MODULE: ./node_modules/react-native-web/dist/exports/ToastAndroid/index.js

/* harmony default export */ var ToastAndroid = (modules_UnimplementedView);
// CONCATENATED MODULE: ./node_modules/react-native-web/dist/exports/PermissionsAndroid/index.js
var promiseMock = function promiseMock() {
  return Promise.resolve(false);
};

/* harmony default export */ var PermissionsAndroid = ({
  PERMISSIONS: {},
  RESULTS: {},
  checkPermission: promiseMock,
  check: promiseMock,
  requestPermission: promiseMock,
  request: promiseMock,
  requestMultiple: promiseMock
});
// CONCATENATED MODULE: ./node_modules/react-native-web/dist/exports/Settings/index.js
/* harmony default export */ var Settings = ({});
// CONCATENATED MODULE: ./node_modules/react-native-web/dist/exports/Systrace/index.js
/* harmony default export */ var Systrace = ({});
// CONCATENATED MODULE: ./node_modules/react-native-web/dist/exports/TVEventHandler/index.js
/* harmony default export */ var TVEventHandler = ({});
// EXTERNAL MODULE: ./node_modules/react-native-web/dist/exports/DeviceEventEmitter/index.js
var DeviceEventEmitter = __webpack_require__("HxgP");

// CONCATENATED MODULE: ./node_modules/react-native-web/dist/exports/useColorScheme/index.js


function useColorScheme() {
  var _React$useState = react["useState"](exports_Appearance.getColorScheme()),
      colorScheme = _React$useState[0],
      setColorScheme = _React$useState[1];

  react["useEffect"](function () {
    function listener(appearance) {
      setColorScheme(appearance.colorScheme);
    }

    exports_Appearance.addChangeListener(listener);
    return function () {
      return exports_Appearance.removeChangeListener(listener);
    };
  });
  return colorScheme;
}
// CONCATENATED MODULE: ./node_modules/react-native-web/dist/exports/useWindowDimensions/index.js




function useWindowDimensions() {
  var _useState = Object(react["useState"])(function () {
    return Dimensions["a" /* default */].get('window');
  }),
      dims = _useState[0],
      setDims = _useState[1];

  Object(react["useEffect"])(function () {
    function handleChange(_ref) {
      var window = _ref.window;
      setDims(window);
    }

    Dimensions["a" /* default */].addEventListener('change', handleChange);
    setDims(Dimensions["a" /* default */].get('window'));
    return function () {
      Dimensions["a" /* default */].removeEventListener('change', handleChange);
    };
  }, []);
  return dims;
}
// CONCATENATED MODULE: ./node_modules/react-native-web/dist/index.js





































































/***/ }),

/***/ "841G":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (arr, predicate, ctx) {
  if (typeof Array.prototype.findIndex === 'function') {
    return arr.findIndex(predicate, ctx);
  }

  if (typeof predicate !== 'function') {
    throw new TypeError('predicate must be a function');
  }

  var list = Object(arr);
  var len = list.length;

  if (len === 0) {
    return -1;
  }

  for (var i = 0; i < len; i++) {
    if (predicate.call(ctx, list[i], i, list)) {
      return i;
    }
  }

  return -1;
};

/***/ }),

/***/ "90BO":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _AnimatedNode__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("N/9I");
/* harmony import */ var _NativeAnimatedHelper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("HBEB");


function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  subClass.__proto__ = superClass;
}




var AnimatedWithChildren = function (_AnimatedNode) {
  _inheritsLoose(AnimatedWithChildren, _AnimatedNode);

  function AnimatedWithChildren() {
    var _this;

    _this = _AnimatedNode.call(this) || this;
    _this._children = [];
    return _this;
  }

  var _proto = AnimatedWithChildren.prototype;

  _proto.__makeNative = function __makeNative() {
    if (!this.__isNative) {
      this.__isNative = true;

      for (var _iterator = this._children, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator]();;) {
        var _ref;

        if (_isArray) {
          if (_i >= _iterator.length) break;
          _ref = _iterator[_i++];
        } else {
          _i = _iterator.next();
          if (_i.done) break;
          _ref = _i.value;
        }

        var child = _ref;

        child.__makeNative();

        _NativeAnimatedHelper__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].API.connectAnimatedNodes(this.__getNativeTag(), child.__getNativeTag());
      }
    }

    _AnimatedNode.prototype.__makeNative.call(this);
  };

  _proto.__addChild = function __addChild(child) {
    if (this._children.length === 0) {
      this.__attach();
    }

    this._children.push(child);

    if (this.__isNative) {
      child.__makeNative();

      _NativeAnimatedHelper__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].API.connectAnimatedNodes(this.__getNativeTag(), child.__getNativeTag());
    }
  };

  _proto.__removeChild = function __removeChild(child) {
    var index = this._children.indexOf(child);

    if (index === -1) {
      console.warn("Trying to remove a child that doesn't exist");
      return;
    }

    if (this.__isNative && child.__isNative) {
      _NativeAnimatedHelper__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].API.disconnectAnimatedNodes(this.__getNativeTag(), child.__getNativeTag());
    }

    this._children.splice(index, 1);

    if (this._children.length === 0) {
      this.__detach();
    }
  };

  _proto.__getChildren = function __getChildren() {
    return this._children;
  };

  _proto.__callListeners = function __callListeners(value) {
    _AnimatedNode.prototype.__callListeners.call(this, value);

    if (!this.__isNative) {
      for (var _iterator2 = this._children, _isArray2 = Array.isArray(_iterator2), _i2 = 0, _iterator2 = _isArray2 ? _iterator2 : _iterator2[Symbol.iterator]();;) {
        var _ref2;

        if (_isArray2) {
          if (_i2 >= _iterator2.length) break;
          _ref2 = _iterator2[_i2++];
        } else {
          _i2 = _iterator2.next();
          if (_i2.done) break;
          _ref2 = _i2.value;
        }

        var child = _ref2;

        if (child.__getValue) {
          child.__callListeners(child.__getValue());
        }
      }
    }
  };

  return AnimatedWithChildren;
}(_AnimatedNode__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"]);

/* harmony default export */ __webpack_exports__["a"] = (AnimatedWithChildren);

/***/ }),

/***/ "9kyW":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function hash(str) {
  var hash = 5381,
      i = str.length;

  while (i) {
    hash = hash * 33 ^ str.charCodeAt(--i);
  }
  /* JavaScript does bitwise operations (like XOR, above) on 32-bit signed
   * integers. Since we want the results to be always positive, convert the
   * signed int to an unsigned by doing an unsigned bitshift. */


  return hash >>> 0;
}

module.exports = hash;

/***/ }),

/***/ "ARf8":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _NativeAnimatedHelper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("HBEB");




var Animation = function () {
  function Animation() {}

  var _proto = Animation.prototype;

  _proto.start = function start(fromValue, onUpdate, onEnd, previousAnimation, animatedValue) {};

  _proto.stop = function stop() {
    if (this.__nativeId) {
      _NativeAnimatedHelper__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].API.stopAnimation(this.__nativeId);
    }
  };

  _proto.__getNativeAnimationConfig = function __getNativeAnimationConfig() {
    throw new Error('This animation type cannot be offloaded to native');
  };

  _proto.__debouncedOnEnd = function __debouncedOnEnd(result) {
    var onEnd = this.__onEnd;
    this.__onEnd = null;
    onEnd && onEnd(result);
  };

  _proto.__startNativeAnimation = function __startNativeAnimation(animatedValue) {
    _NativeAnimatedHelper__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].API.enableQueue();

    animatedValue.__makeNative();

    _NativeAnimatedHelper__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].API.disableQueue();
    this.__nativeId = _NativeAnimatedHelper__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].generateNewAnimationId();
    _NativeAnimatedHelper__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].API.startAnimatingNode(this.__nativeId, animatedValue.__getNativeTag(), this.__getNativeAnimationConfig(), this.__debouncedOnEnd.bind(this));
  };

  return Animation;
}();

/* harmony default export */ __webpack_exports__["a"] = (Animation);

/***/ }),

/***/ "Al+L":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _AnimatedWithChildren__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("90BO");
/* harmony import */ var _NativeAnimatedHelper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("HBEB");
/* harmony import */ var fbjs_lib_invariant__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("2NuI");
/* harmony import */ var fbjs_lib_invariant__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(fbjs_lib_invariant__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var normalize_css_color__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("FJcI");
/* harmony import */ var normalize_css_color__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(normalize_css_color__WEBPACK_IMPORTED_MODULE_3__);


function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  subClass.__proto__ = superClass;
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







var linear = function linear(t) {
  return t;
};

function createInterpolation(config) {
  if (config.outputRange && typeof config.outputRange[0] === 'string') {
    return createInterpolationFromStringOutputRange(config);
  }

  var outputRange = config.outputRange;
  checkInfiniteRange('outputRange', outputRange);
  var inputRange = config.inputRange;
  checkInfiniteRange('inputRange', inputRange);
  checkValidInputRange(inputRange);
  fbjs_lib_invariant__WEBPACK_IMPORTED_MODULE_2___default()(inputRange.length === outputRange.length, 'inputRange (' + inputRange.length + ') and outputRange (' + outputRange.length + ') must have the same length');
  var easing = config.easing || linear;
  var extrapolateLeft = 'extend';

  if (config.extrapolateLeft !== undefined) {
    extrapolateLeft = config.extrapolateLeft;
  } else if (config.extrapolate !== undefined) {
    extrapolateLeft = config.extrapolate;
  }

  var extrapolateRight = 'extend';

  if (config.extrapolateRight !== undefined) {
    extrapolateRight = config.extrapolateRight;
  } else if (config.extrapolate !== undefined) {
    extrapolateRight = config.extrapolate;
  }

  return function (input) {
    fbjs_lib_invariant__WEBPACK_IMPORTED_MODULE_2___default()(typeof input === 'number', 'Cannot interpolation an input which is not a number');
    var range = findRange(input, inputRange);
    return interpolate(input, inputRange[range], inputRange[range + 1], outputRange[range], outputRange[range + 1], easing, extrapolateLeft, extrapolateRight);
  };
}

function interpolate(input, inputMin, inputMax, outputMin, outputMax, easing, extrapolateLeft, extrapolateRight) {
  var result = input;

  if (result < inputMin) {
    if (extrapolateLeft === 'identity') {
      return result;
    } else if (extrapolateLeft === 'clamp') {
      result = inputMin;
    } else if (extrapolateLeft === 'extend') {}
  }

  if (result > inputMax) {
    if (extrapolateRight === 'identity') {
      return result;
    } else if (extrapolateRight === 'clamp') {
      result = inputMax;
    } else if (extrapolateRight === 'extend') {}
  }

  if (outputMin === outputMax) {
    return outputMin;
  }

  if (inputMin === inputMax) {
    if (input <= inputMin) {
      return outputMin;
    }

    return outputMax;
  }

  if (inputMin === -Infinity) {
    result = -result;
  } else if (inputMax === Infinity) {
    result = result - inputMin;
  } else {
    result = (result - inputMin) / (inputMax - inputMin);
  }

  result = easing(result);

  if (outputMin === -Infinity) {
    result = -result;
  } else if (outputMax === Infinity) {
    result = result + outputMin;
  } else {
    result = result * (outputMax - outputMin) + outputMin;
  }

  return result;
}

function colorToRgba(input) {
  var int32Color = normalize_css_color__WEBPACK_IMPORTED_MODULE_3___default()(input);

  if (int32Color === null) {
    return input;
  }

  int32Color = int32Color || 0;
  var r = (int32Color & 0xff000000) >>> 24;
  var g = (int32Color & 0x00ff0000) >>> 16;
  var b = (int32Color & 0x0000ff00) >>> 8;
  var a = (int32Color & 0x000000ff) / 255;
  return "rgba(" + r + ", " + g + ", " + b + ", " + a + ")";
}

var stringShapeRegex = /[+-]?(?:\d+\.?\d*|\.\d+)(?:[eE][+-]?\d+)?/g;

function createInterpolationFromStringOutputRange(config) {
  var outputRange = config.outputRange;
  fbjs_lib_invariant__WEBPACK_IMPORTED_MODULE_2___default()(outputRange.length >= 2, 'Bad output range');
  outputRange = outputRange.map(colorToRgba);
  checkPattern(outputRange);
  var outputRanges = outputRange[0].match(stringShapeRegex).map(function () {
    return [];
  });
  outputRange.forEach(function (value) {
    value.match(stringShapeRegex).forEach(function (number, i) {
      outputRanges[i].push(+number);
    });
  });
  var interpolations = outputRange[0].match(stringShapeRegex).map(function (value, i) {
    return createInterpolation(_objectSpread({}, config, {
      outputRange: outputRanges[i]
    }));
  });
  var shouldRound = isRgbOrRgba(outputRange[0]);
  return function (input) {
    var i = 0;
    return outputRange[0].replace(stringShapeRegex, function () {
      var val = +interpolations[i++](input);

      if (shouldRound) {
        val = i < 4 ? Math.round(val) : Math.round(val * 1000) / 1000;
      }

      return String(val);
    });
  };
}

function isRgbOrRgba(range) {
  return typeof range === 'string' && range.startsWith('rgb');
}

function checkPattern(arr) {
  var pattern = arr[0].replace(stringShapeRegex, '');

  for (var i = 1; i < arr.length; ++i) {
    fbjs_lib_invariant__WEBPACK_IMPORTED_MODULE_2___default()(pattern === arr[i].replace(stringShapeRegex, ''), 'invalid pattern ' + arr[0] + ' and ' + arr[i]);
  }
}

function findRange(input, inputRange) {
  var i;

  for (i = 1; i < inputRange.length - 1; ++i) {
    if (inputRange[i] >= input) {
      break;
    }
  }

  return i - 1;
}

function checkValidInputRange(arr) {
  fbjs_lib_invariant__WEBPACK_IMPORTED_MODULE_2___default()(arr.length >= 2, 'inputRange must have at least 2 elements');

  for (var i = 1; i < arr.length; ++i) {
    fbjs_lib_invariant__WEBPACK_IMPORTED_MODULE_2___default()(arr[i] >= arr[i - 1], 'inputRange must be monotonically non-decreasing ' + arr);
  }
}

function checkInfiniteRange(name, arr) {
  fbjs_lib_invariant__WEBPACK_IMPORTED_MODULE_2___default()(arr.length >= 2, name + ' must have at least 2 elements');
  fbjs_lib_invariant__WEBPACK_IMPORTED_MODULE_2___default()(arr.length !== 2 || arr[0] !== -Infinity || arr[1] !== Infinity, name + 'cannot be ]-infinity;+infinity[ ' + arr);
}

var AnimatedInterpolation = function (_AnimatedWithChildren) {
  _inheritsLoose(AnimatedInterpolation, _AnimatedWithChildren);

  function AnimatedInterpolation(parent, config) {
    var _this;

    _this = _AnimatedWithChildren.call(this) || this;
    _this._parent = parent;
    _this._config = config;
    _this._interpolation = createInterpolation(config);
    return _this;
  }

  var _proto = AnimatedInterpolation.prototype;

  _proto.__makeNative = function __makeNative() {
    this._parent.__makeNative();

    _AnimatedWithChildren.prototype.__makeNative.call(this);
  };

  _proto.__getValue = function __getValue() {
    var parentValue = this._parent.__getValue();

    fbjs_lib_invariant__WEBPACK_IMPORTED_MODULE_2___default()(typeof parentValue === 'number', 'Cannot interpolate an input which is not a number.');
    return this._interpolation(parentValue);
  };

  _proto.interpolate = function interpolate(config) {
    return new AnimatedInterpolation(this, config);
  };

  _proto.__attach = function __attach() {
    this._parent.__addChild(this);
  };

  _proto.__detach = function __detach() {
    this._parent.__removeChild(this);

    _AnimatedWithChildren.prototype.__detach.call(this);
  };

  _proto.__transformDataType = function __transformDataType(range) {
    return range.map(_NativeAnimatedHelper__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].transformDataType);
  };

  _proto.__getNativeConfig = function __getNativeConfig() {
    if (false) {}

    return {
      inputRange: this._config.inputRange,
      outputRange: this.__transformDataType(this._config.outputRange),
      extrapolateLeft: this._config.extrapolateLeft || this._config.extrapolate || 'extend',
      extrapolateRight: this._config.extrapolateRight || this._config.extrapolate || 'extend',
      type: 'interpolation'
    };
  };

  return AnimatedInterpolation;
}(_AnimatedWithChildren__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"]);

AnimatedInterpolation.__createInterpolation = createInterpolation;
/* harmony default export */ __webpack_exports__["a"] = (AnimatedInterpolation);

/***/ }),

/***/ "D5zv":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* binding */ colors; });

// UNUSED EXPORTS: styleify

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.reduce.js
var es_array_reduce = __webpack_require__("E9XD");

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/defineProperty.js
var defineProperty = __webpack_require__("lSNA");
var defineProperty_default = /*#__PURE__*/__webpack_require__.n(defineProperty);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/classCallCheck.js
var classCallCheck = __webpack_require__("lwsE");
var classCallCheck_default = /*#__PURE__*/__webpack_require__.n(classCallCheck);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/createClass.js
var createClass = __webpack_require__("W8MJ");
var createClass_default = /*#__PURE__*/__webpack_require__.n(createClass);

// EXTERNAL MODULE: ./node_modules/react-native-web/dist/exports/StyleSheet/index.js + 1 modules
var StyleSheet = __webpack_require__("ckSu");

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/extends.js
var helpers_extends = __webpack_require__("pVnL");
var extends_default = /*#__PURE__*/__webpack_require__.n(helpers_extends);

// EXTERNAL MODULE: ./node_modules/object-resolve-path/object-resolve-path.js
var object_resolve_path = __webpack_require__("kBdY");
var object_resolve_path_default = /*#__PURE__*/__webpack_require__.n(object_resolve_path);

// CONCATENATED MODULE: ./node_modules/react-native-extended-stylesheet/src/replacers/vars.js



var PREFIX = '$';
/* harmony default export */ var replacers_vars = ({
  isVar: isVar,
  calc: calc,
  extract: extract,
  get: vars_get
});

function isVar(str) {
  return typeof str === 'string' && str.charAt(0) === PREFIX;
}

function calc(str, varsArr) {
  var realValue = vars_get(str, varsArr);

  if (realValue === undefined) {
    throw new Error("Unresolved variable: " + str);
  }

  return realValue;
}

function extract(obj) {
  return Object.keys(obj).reduce(function (res, key) {
    if (isVar(key)) {
      res = res || {};
      res[key] = obj[key];
    }

    return res;
  }, null);
}

function vars_get(name, varsArr) {
  if (!Array.isArray(varsArr)) {
    throw new Error('You should pass vars array to vars.get()');
  }

  var rootVar = name.match(/[^.[]*/)[0];
  var isSimpleVar = rootVar === name;

  for (var i = 0; i < varsArr.length; i++) {
    var vars = varsArr[i];

    if (!vars || vars[rootVar] === undefined) {
      continue;
    }

    if (isSimpleVar) {
      return vars[name];
    }

    try {
      return object_resolve_path_default()(defineProperty_default()({}, rootVar, vars[rootVar]), name);
    } catch (error) {
      return undefined;
    }
  }
}
// EXTERNAL MODULE: ./node_modules/react-native-web/dist/exports/Dimensions/index.js
var Dimensions = __webpack_require__("C7Rh");

// EXTERNAL MODULE: ./node_modules/react-native-web/dist/exports/Platform/index.js
var Platform = __webpack_require__("XwJz");

// EXTERNAL MODULE: ./node_modules/react-native-web/dist/exports/I18nManager/index.js
var I18nManager = __webpack_require__("S+yN");

// EXTERNAL MODULE: ./node_modules/css-mediaquery/index.js
var css_mediaquery = __webpack_require__("6fKw");
var css_mediaquery_default = /*#__PURE__*/__webpack_require__.n(css_mediaquery);

// CONCATENATED MODULE: ./node_modules/react-native-extended-stylesheet/src/utils.js

/* harmony default export */ var utils = ({
  excludeKeys: excludeKeys,
  isObject: isObject
});

function excludeKeys(obj, keys) {
  keys = Array.isArray(keys) ? keys : keys ? Object.keys(keys) : [];
  return Object.keys(obj).reduce(function (res, key) {
    if (keys.indexOf(key) === -1) {
      res[key] = obj[key];
    }

    return res;
  }, {});
}

function isObject(obj) {
  return typeof obj === 'object' && obj !== null;
}
// CONCATENATED MODULE: ./node_modules/react-native-extended-stylesheet/src/replacers/media-queries.js







var media_queries_PREFIX = '@media';
/* harmony default export */ var media_queries = ({
  isMediaQuery: isMediaQuery,
  process: process
});

function isMediaQuery(str) {
  return typeof str === 'string' && str.indexOf(media_queries_PREFIX) === 0;
}

function process(obj) {
  var mqKeys = [];
  var res = Object.keys(obj).reduce(function (res, key) {
    if (!isMediaQuery(key)) {
      res[key] = obj[key];
    } else {
      mqKeys.push(key);
    }

    return res;
  }, {});

  if (mqKeys.length) {
    var matchObject = getMatchObject();
    mqKeys.forEach(function (key) {
      var mqStr = key.replace(media_queries_PREFIX, '');
      var isMatch = css_mediaquery_default.a.match(mqStr, matchObject);

      if (isMatch) {
        merge(res, obj[key]);
      }
    });
  }

  return res;
}

function getMatchObject() {
  var win = Dimensions["a" /* default */].get('window');
  var isRTL = I18nManager["a" /* default */].isRTL;
  return {
    width: win.width,
    height: win.height,
    orientation: win.width > win.height ? 'landscape' : 'portrait',
    'aspect-ratio': win.width / win.height,
    type: Platform["a" /* default */].OS,
    direction: isRTL ? 'rtl' : 'ltr'
  };
}

function merge(obj, mqObj) {
  Object.keys(mqObj).forEach(function (key) {
    if (utils.isObject(obj[key]) && utils.isObject(mqObj[key])) {
      extends_default()(obj[key], mqObj[key]);
    } else {
      obj[key] = mqObj[key];
    }
  });
}
// CONCATENATED MODULE: ./node_modules/react-native-extended-stylesheet/src/replacers/rem.js
var SUFFIX = 'rem';
var DEFAULT_REM = 16;
/* harmony default export */ var rem = ({
  isRem: isRem,
  calc: rem_calc
});

function isRem(str) {
  return str.substr(-SUFFIX.length) === SUFFIX;
}

function rem_calc(str) {
  var rem = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : DEFAULT_REM;
  var koefStr = str.substr(0, str.length - SUFFIX.length);
  var koef = koefStr === '' ? 1 : parseFloat(koefStr);

  if (isNaN(koef)) {
    throw new Error('Invalid rem value: ' + str);
  }

  return rem * koef;
}
// CONCATENATED MODULE: ./node_modules/react-native-extended-stylesheet/src/replacers/percent.js


var _Dimensions$get = Dimensions["a" /* default */].get('window'),
    width = _Dimensions$get.width,
    height = _Dimensions$get.height;

var V_PROPS = ['height', 'top', 'bottom', 'vertical'];
var H_PROPS = ['width', 'left', 'right', 'horizontal'];
var percent_SUFFIX = '%';
var invalidPropMsg = ["Name of variable or property with percent value should contain ", "(" + V_PROPS.concat(H_PROPS).join() + ") to define base for percent calculation"].join('');
/* harmony default export */ var percent = ({
  isPercent: isPercent,
  calc: percent_calc
});

function isPercent(str) {
  return str.charAt(str.length - 1) === percent_SUFFIX;
}

function percent_calc(str, prop) {
  var percent = parseInt(str.substring(0, str.length - 1), 10);
  var base = isVertical(prop) ? height : width;
  return base * percent / 100;
}

function isVertical(prop) {
  prop = prop.toLowerCase();

  if (V_PROPS.some(function (p) {
    return prop.indexOf(p) >= 0;
  })) {
    return true;
  }

  if (H_PROPS.some(function (p) {
    return prop.indexOf(p) >= 0;
  })) {
    return false;
  }

  throw new Error(invalidPropMsg);
}
// CONCATENATED MODULE: ./node_modules/react-native-extended-stylesheet/src/replacers/operation.js
var operators = {
  '*': function _(v1, v2) {
    return v1 * v2;
  },
  '+': function _(v1, v2) {
    return v1 + v2;
  },
  '-': function _(v1, v2) {
    return v1 - v2;
  },
  '/': function _(v1, v2) {
    return v1 / v2;
  }
};
/* harmony default export */ var operation = ({
  isOperation: isOperation,
  exec: exec
});

function isOperation(str) {
  var opInfo = findOperator(str);

  if (opInfo) {
    opInfo.v1 = str.substr(0, opInfo.pos).trim();
    opInfo.v2 = str.substr(opInfo.pos + 1).trim();
    delete opInfo.pos;
    return opInfo;
  } else {
    return false;
  }
}

function exec(opInfo) {
  assertOperator(opInfo.operator);
  assertValue(opInfo.v1);
  assertValue(opInfo.v2);

  if (opInfo.operator === '/') {
    assertDivisor(opInfo.v2);
  }

  var fn = operators[opInfo.operator];
  return fn(opInfo.v1, opInfo.v2);
}

function findOperator(str) {
  for (var operator in operators) {
    var pos = str.indexOf(operator);

    if (pos >= 0) {
      return {
        operator: operator,
        pos: pos
      };
    }
  }
}

function assertOperator(operator) {
  if (!operators[operator]) {
    throw new Error('Unknown operator: ' + operator);
  }
}

function assertValue(value) {
  if (typeof value !== 'number') {
    throw new Error('Operation value should be number, you try: ' + String(value));
  }
}

function assertDivisor(divisor) {
  if (divisor === 0) {
    throw new Error('Operation divisor should not be zero');
  }
}
// CONCATENATED MODULE: ./node_modules/react-native-extended-stylesheet/src/replacers/scale.js
var SCALABLE_PROPS = ['width', 'height', 'margin', 'padding', 'fontsize', 'radius'];
/* harmony default export */ var scale = ({
  isScalable: isScalable,
  calc: scale_calc
});

function isScalable(value, prop) {
  return typeof value === 'number' && isScalableProp(prop);
}

function scale_calc(value, scaleFactor) {
  if (typeof value !== 'number') {
    throw new Error('Invalid value for scale: ' + value);
  }

  if (typeof scaleFactor !== 'number') {
    throw new Error('Invalid scaleFactor for scale: ' + scaleFactor);
  }

  return value * scaleFactor;
}

function isScalableProp(prop) {
  if (typeof prop !== 'string') {
    return false;
  }

  prop = prop.toLowerCase();
  return SCALABLE_PROPS.some(function (p) {
    return prop.indexOf(p) >= 0;
  });
}
// CONCATENATED MODULE: ./node_modules/react-native-extended-stylesheet/src/value.js








var value_Value = function () {
  function Value(value, prop) {
    var varsArr = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
    var options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};

    classCallCheck_default()(this, Value);

    this.value = value;
    this.outValue = null;
    this.prop = prop;
    this.varsArr = varsArr;
    this.stack = options.stack || [];
    this.isOperation = options.isOperation !== undefined ? options.isOperation : false;
  }

  createClass_default()(Value, [{
    key: "calc",
    value: function calc() {
      if (typeof this.value === 'function') {
        this.value = this.value();
      }

      if (typeof this.value === 'string') {
        this.calcString();
      } else {
        this.proxyValue();
      }

      if (this.isFinal()) {
        this.applyScale();
      }

      return this.outValue;
    }
  }, {
    key: "calcString",
    value: function calcString() {
      var actions = [this.tryCalcOperation, this.isOperation ? this.tryCalcPercent : null, this.tryCalcVar, this.tryCalcRem].filter(Boolean);
      var value = this.tryActions(actions, this.value);

      if (value !== null) {
        this.outValue = value;
      } else {
        this.proxyValue();
      }
    }
  }, {
    key: "tryActions",
    value: function tryActions(actions, str) {
      for (var i = 0; i < actions.length; i++) {
        var val = actions[i].call(this, str);

        if (val !== null) {
          return val;
        }
      }

      return null;
    }
  }, {
    key: "tryCalcOperation",
    value: function tryCalcOperation(str) {
      var opInfo = operation.isOperation(str);

      if (!opInfo) {
        return null;
      }

      this.isOperation = true;
      var operands = ['v1', 'v2'];

      for (var i = 0; i < operands.length; i++) {
        var operand = operands[i];
        var operandValue = this.calcOperandValue(opInfo[operand]);

        if (operandValue !== null) {
          opInfo[operand] = operandValue;
        } else {
          return null;
        }
      }

      return operation.exec(opInfo);
    }
  }, {
    key: "calcOperandValue",
    value: function calcOperandValue(str) {
      var actions = [this.tryCalcVar, this.tryCalcPercent, this.tryCalcRem, this.tryCalcFloat];
      return this.tryActions(actions, str);
    }
  }, {
    key: "tryCalcVar",
    value: function tryCalcVar(str) {
      if (replacers_vars.isVar(str)) {
        var val = replacers_vars.calc(str, this.varsArr);

        if (this.stack.indexOf(str) >= 0) {
          throw new Error('Cyclic reference: ' + this.stack.concat([str]).join(' -> '));
        }

        var options = {
          stack: this.stack.concat([str]),
          isOperation: this.isOperation
        };
        return new Value(val, str, this.varsArr, options).calc();
      } else {
        return null;
      }
    }
  }, {
    key: "tryCalcPercent",
    value: function tryCalcPercent(str) {
      if (percent.isPercent(str)) {
        return percent.calc(str, this.prop);
      }

      return null;
    }
  }, {
    key: "tryCalcRem",
    value: function tryCalcRem(str) {
      if (rem.isRem(str)) {
        var remValue = replacers_vars.get('$rem', this.varsArr);
        return rem.calc(str, remValue);
      } else {
        return null;
      }
    }
  }, {
    key: "tryCalcFloat",
    value: function tryCalcFloat(str) {
      var val = parseFloat(str);
      return !isNaN(val) ? val : null;
    }
  }, {
    key: "isFinal",
    value: function isFinal() {
      return !this.stack.length;
    }
  }, {
    key: "proxyValue",
    value: function proxyValue() {
      this.outValue = this.value;
    }
  }, {
    key: "applyScale",
    value: function applyScale() {
      if (replacers_vars.isVar(this.prop)) {
        return;
      }

      var scaleFactor = replacers_vars.get('$scale', this.varsArr) || 1;

      if (scaleFactor === 1) {
        return;
      }

      if (scale.isScalable(this.outValue, this.prop)) {
        this.outValue = scale.calc(this.outValue, scaleFactor);
      }
    }
  }]);

  return Value;
}();


// CONCATENATED MODULE: ./node_modules/react-native-extended-stylesheet/src/style.js








var style_default = function () {
  function _default(source) {
    var varsArr = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];

    classCallCheck_default()(this, _default);

    this.source = source;
    this.varsArr = varsArr;
    this.processedSource = null;
    this.extractedVars = null;
    this.extractedProps = null;
    this.calculatedVars = null;
    this.calculatedProps = null;
  }

  createClass_default()(_default, [{
    key: "calc",
    value: function calc() {
      this.processSource();
      this.calcVars();
      this.calcProps();
      this.tryOutline();
      return {
        calculatedVars: this.calculatedVars,
        calculatedProps: this.calculatedProps
      };
    }
  }, {
    key: "processSource",
    value: function processSource() {
      this.processedSource = media_queries.process(this.source);
    }
  }, {
    key: "calcVars",
    value: function calcVars() {
      this.extractedVars = replacers_vars.extract(this.processedSource);

      if (this.extractedVars) {
        var varsArrForVars = [this.extractedVars].concat(this.varsArr);
        this.calculatedVars = calcPlainObject(this.extractedVars, varsArrForVars);
        this.varsArr = [this.calculatedVars].concat(this.varsArr);
      }
    }
  }, {
    key: "calcProps",
    value: function calcProps() {
      this.extractedProps = utils.excludeKeys(this.processedSource, this.extractedVars);
      this.calculatedProps = calcPlainObject(this.extractedProps, this.varsArr);
    }
  }, {
    key: "tryOutline",
    value: function tryOutline() {
      var outline = replacers_vars.get('$outline', this.varsArr);

      if (outline) {
        this.calculatedProps.borderWidth = typeof outline === 'number' ? outline : 1;
        this.calculatedProps.borderColor = getRandomColor();
      }
    }
  }]);

  return _default;
}();



function calcPlainObject(obj, varsArr) {
  return Object.keys(obj).reduce(function (res, prop) {
    res[prop] = calcStyleValue(prop, obj[prop], varsArr);
    return res;
  }, {});
}

function calcStyleValue(prop, value, varsArr) {
  var isNestedValue = value && typeof value === 'object' && !Array.isArray(value);
  return isNestedValue ? calcPlainObject(value, varsArr) : new value_Value(value, prop, varsArr).calc();
}

function getRandomColor() {
  var colors = ['black', 'red', 'green', 'blue'];
  var index = Math.round(Math.random() * (colors.length - 1));
  return colors[index];
}
// CONCATENATED MODULE: ./node_modules/react-native-extended-stylesheet/src/sheet.js









var sheet_default = function () {
  function _default(source) {
    classCallCheck_default()(this, _default);

    this.source = source;
    this.result = {};
    this.cache = new Map();
    this.nativeSheet = {};
    this.globalVars = null;
    this.localVars = null;
    this.allVars = null;
    this.processedSource = null;
  }

  createClass_default()(_default, [{
    key: "calc",
    value: function calc(globalVars) {
      this.globalVars = globalVars;
      this.clearResult();

      if (this.hasCache()) {
        this.applyCache();
      } else {
        this.processMediaQueries();
        this.calcVars();
        this.calcStyles();
        this.calcNative();
        this.storeCache();
      }

      return this.getResult();
    }
  }, {
    key: "processMediaQueries",
    value: function processMediaQueries() {
      this.processedSource = media_queries.process(this.source);
    }
  }, {
    key: "calcVars",
    value: function calcVars() {
      var rawLocalVars = replacers_vars.extract(this.processedSource);

      if (rawLocalVars) {
        this.localVars = new style_default(rawLocalVars, [rawLocalVars, this.globalVars]).calc().calculatedVars;

        extends_default()(this.result, this.localVars);
      } else {
        this.localVars = null;
      }

      this.allVars = [this.localVars, this.globalVars].filter(Boolean);
    }
  }, {
    key: "calcStyles",
    value: function calcStyles() {
      var _this = this;

      var extractedStyles = utils.excludeKeys(this.processedSource, this.localVars);
      Object.keys(extractedStyles).forEach(function (key) {
        var styles = extractedStyles[key];

        if (typeof styles === 'function') {
          styles = styles();
        }

        if (styles && typeof styles === 'object') {
          _this.calcStyle(key, styles);
        } else {
          _this.result[key] = styles;
        }
      });
    }
  }, {
    key: "calcStyle",
    value: function calcStyle(key, styleProps) {
      var style = new style_default(styleProps, this.allVars);

      var _style$calc = style.calc(),
          calculatedProps = _style$calc.calculatedProps,
          calculatedVars = _style$calc.calculatedVars;

      var merged = extends_default()({}, calculatedVars, calculatedProps);

      if (key.charAt(0) === '_') {
        this.result[key] = merged;
      } else {
        this.result['_' + key] = merged;
        this.nativeSheet[key] = calculatedProps;
      }
    }
  }, {
    key: "calcNative",
    value: function calcNative() {
      if (Object.keys(this.nativeSheet).length) {
        var rnStyleSheet = StyleSheet["a" /* default */].create(this.nativeSheet);

        extends_default()(this.result, rnStyleSheet);
      }
    }
  }, {
    key: "getResult",
    value: function getResult() {
      return this.result;
    }
  }, {
    key: "clearResult",
    value: function clearResult() {
      var _this2 = this;

      Object.keys(this.result).forEach(function (key) {
        return delete _this2.result[key];
      });
    }
  }, {
    key: "hasCache",
    value: function hasCache() {
      var key = this.getCacheKey();
      return key && this.cache.has(key);
    }
  }, {
    key: "applyCache",
    value: function applyCache() {
      var cachedResult = this.cache.get(this.getCacheKey());

      extends_default()(this.result, cachedResult);
    }
  }, {
    key: "storeCache",
    value: function storeCache() {
      var key = this.getCacheKey();

      if (key) {
        this.cache.set(key, extends_default()({}, this.result));
      }
    }
  }, {
    key: "clearCache",
    value: function clearCache() {
      this.cache.clear();
    }
  }, {
    key: "getCacheKey",
    value: function getCacheKey() {
      return this.globalVars && this.globalVars.$theme;
    }
  }]);

  return _default;
}();


// CONCATENATED MODULE: ./node_modules/react-native-extended-stylesheet/src/child.js
/* harmony default export */ var child = (function (styles, styleName, index, count) {
  if (!isNumber(index) || !isNumber(count)) {
    return styles[styleName];
  }

  var result = [styles[styleName]];
  addStyle(result, styles, styleName + ':first-child', index === 0);
  addStyle(result, styles, styleName + ':nth-child-even', index < count && index % 2 === 0);
  addStyle(result, styles, styleName + ':nth-child-odd', index < count && index % 2 === 1);
  addStyle(result, styles, styleName + ':last-child', index === count - 1);
  return result.length > 1 ? result : result[0];
});

function addStyle(result, styles, styleName, condition) {
  if (styles[styleName] && condition) {
    result.push(styles[styleName]);
  }
}

function isNumber(value) {
  return typeof value === 'number';
}
// CONCATENATED MODULE: ./node_modules/react-native-extended-stylesheet/src/api.js









var BUILD_EVENT = 'build';

var api_EStyleSheet = function () {
  function EStyleSheet() {
    classCallCheck_default()(this, EStyleSheet);

    this.child = child;
    this.builded = false;
    this.sheets = [];
    this.globalVars = null;
    this.listeners = {};

    this._proxyToOriginal();
  }

  createClass_default()(EStyleSheet, [{
    key: "create",
    value: function create(obj) {
      var sheet = new sheet_default(obj);
      this.sheets.push(sheet);

      if (this.builded) {
        sheet.calc(this.globalVars);
      }

      return sheet.getResult();
    }
  }, {
    key: "build",
    value: function build(rawGlobalVars) {
      this.builded = true;

      this._calcGlobalVars(rawGlobalVars);

      this._calcSheets();

      this._callListeners(BUILD_EVENT);
    }
  }, {
    key: "value",
    value: function value(expr, prop) {
      var varsArr = this.globalVars ? [this.globalVars] : [];
      return new value_Value(expr, prop, varsArr).calc();
    }
  }, {
    key: "subscribe",
    value: function subscribe(event, listener) {
      this._assertSubscriptionParams(event, listener);

      this.listeners[BUILD_EVENT] = this.listeners[BUILD_EVENT] || [];
      this.listeners[BUILD_EVENT].push(listener);

      if (this.builded) {
        listener();
      }
    }
  }, {
    key: "unsubscribe",
    value: function unsubscribe(event, listener) {
      this._assertSubscriptionParams(event, listener);

      if (this.listeners[BUILD_EVENT]) {
        this.listeners[BUILD_EVENT] = this.listeners[BUILD_EVENT].filter(function (item) {
          return item !== listener;
        });
      }
    }
  }, {
    key: "clearCache",
    value: function clearCache() {
      this.sheets.forEach(function (sheet) {
        return sheet.clearCache();
      });
    }
  }, {
    key: "_calcGlobalVars",
    value: function _calcGlobalVars(rawGlobalVars) {
      if (rawGlobalVars) {
        this._checkGlobalVars(rawGlobalVars);

        rawGlobalVars.$theme = rawGlobalVars.$theme || 'default';
        this.globalVars = new style_default(rawGlobalVars, [rawGlobalVars]).calc().calculatedVars;
      }
    }
  }, {
    key: "_calcSheets",
    value: function _calcSheets() {
      var _this = this;

      this.sheets.forEach(function (sheet) {
        return sheet.calc(_this.globalVars);
      });
    }
  }, {
    key: "_callListeners",
    value: function _callListeners(event) {
      if (Array.isArray(this.listeners[event])) {
        this.listeners[event].forEach(function (listener) {
          return listener();
        });
      }
    }
  }, {
    key: "_proxyToOriginal",
    value: function _proxyToOriginal() {
      var _this2 = this;

      var props = ['setStyleAttributePreprocessor', 'hairlineWidth', 'absoluteFill', 'absoluteFillObject', 'flatten'];
      props.forEach(function (prop) {
        Object.defineProperty(_this2, prop, {
          get: function get() {
            return StyleSheet["a" /* default */][prop];
          },
          enumerable: true
        });
      });
    }
  }, {
    key: "_checkGlobalVars",
    value: function _checkGlobalVars(rawGlobalVars) {
      Object.keys(rawGlobalVars).forEach(function (key) {
        if (!replacers_vars.isVar(key) && !media_queries.isMediaQuery(key)) {
          throw new Error("EStyleSheet.build() params should contain global variables (start with $) " + ("or media queries (start with @media). Got '" + key + "'."));
        }
      });
    }
  }, {
    key: "_assertSubscriptionParams",
    value: function _assertSubscriptionParams(event, listener) {
      if (event !== BUILD_EVENT) {
        throw new Error("Only '" + BUILD_EVENT + "' event is currently supported.");
      }

      if (typeof listener !== 'function') {
        throw new Error('Listener should be a function.');
      }
    }
  }]);

  return EStyleSheet;
}();


// CONCATENATED MODULE: ./node_modules/react-native-extended-stylesheet/src/index.js

/* harmony default export */ var src = (new api_EStyleSheet());
// CONCATENATED MODULE: ./src/StyleSheet.js
function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);if(enumerableOnly)symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable;});keys.push.apply(keys,symbols);}return keys;}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=arguments[i]!=null?arguments[i]:{};if(i%2){ownKeys(Object(source),true).forEach(function(key){defineProperty_default()(target,key,source[key]);});}else if(Object.getOwnPropertyDescriptors){Object.defineProperties(target,Object.getOwnPropertyDescriptors(source));}else{ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key));});}}return target;}var colors={color1:'#FDDBC9',color2:'#50C7E6',color3:'#CC7DB3',color4:'#1A184F',color5:'#FFE58D',color6:'#0D1315'};var styleVariables=_objectSpread({},Object.keys(colors).reduce(function(accum,colorKey){var colorVal=colors[colorKey];accum["$"+colorKey]=colorVal;return accum;},{}));src.build(styleVariables);function styleify(someStyle){var toReturn=src.create({someStyle:someStyle}).someStyle;return toReturn;}console.log('EStyleSheet',src);/* harmony default export */ var src_StyleSheet = __webpack_exports__["b"] = (src);

/***/ }),

/***/ "E60X":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _AnimatedInterpolation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("Al+L");
/* harmony import */ var _AnimatedWithChildren__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("90BO");
/* harmony import */ var _exports_InteractionManager__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("Qfxl");
/* harmony import */ var _NativeAnimatedHelper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("HBEB");


function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  subClass.__proto__ = superClass;
}





var NativeAnimatedAPI = _NativeAnimatedHelper__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"].API;

function _flush(rootNode) {
  var animatedStyles = new Set();

  function findAnimatedStyles(node) {
    if (typeof node.update === 'function') {
      animatedStyles.add(node);
    } else {
      node.__getChildren().forEach(findAnimatedStyles);
    }
  }

  findAnimatedStyles(rootNode);
  animatedStyles.forEach(function (animatedStyle) {
    return animatedStyle.update();
  });
}

var AnimatedValue = function (_AnimatedWithChildren) {
  _inheritsLoose(AnimatedValue, _AnimatedWithChildren);

  function AnimatedValue(value) {
    var _this;

    _this = _AnimatedWithChildren.call(this) || this;
    _this._startingValue = _this._value = value;
    _this._offset = 0;
    _this._animation = null;
    return _this;
  }

  var _proto = AnimatedValue.prototype;

  _proto.__detach = function __detach() {
    this.stopAnimation();

    _AnimatedWithChildren.prototype.__detach.call(this);
  };

  _proto.__getValue = function __getValue() {
    return this._value + this._offset;
  };

  _proto.setValue = function setValue(value) {
    if (this._animation) {
      this._animation.stop();

      this._animation = null;
    }

    this._updateValue(value, !this.__isNative);

    if (this.__isNative) {
      NativeAnimatedAPI.setAnimatedNodeValue(this.__getNativeTag(), value);
    }
  };

  _proto.setOffset = function setOffset(offset) {
    this._offset = offset;

    if (this.__isNative) {
      NativeAnimatedAPI.setAnimatedNodeOffset(this.__getNativeTag(), offset);
    }
  };

  _proto.flattenOffset = function flattenOffset() {
    this._value += this._offset;
    this._offset = 0;

    if (this.__isNative) {
      NativeAnimatedAPI.flattenAnimatedNodeOffset(this.__getNativeTag());
    }
  };

  _proto.extractOffset = function extractOffset() {
    this._offset += this._value;
    this._value = 0;

    if (this.__isNative) {
      NativeAnimatedAPI.extractAnimatedNodeOffset(this.__getNativeTag());
    }
  };

  _proto.stopAnimation = function stopAnimation(callback) {
    this.stopTracking();
    this._animation && this._animation.stop();
    this._animation = null;
    callback && callback(this.__getValue());
  };

  _proto.resetAnimation = function resetAnimation(callback) {
    this.stopAnimation(callback);
    this._value = this._startingValue;
  };

  _proto._onAnimatedValueUpdateReceived = function _onAnimatedValueUpdateReceived(value) {
    this._updateValue(value, false);
  };

  _proto.interpolate = function interpolate(config) {
    return new _AnimatedInterpolation__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"](this, config);
  };

  _proto.animate = function animate(animation, callback) {
    var _this2 = this;

    var handle = null;

    if (animation.__isInteraction) {
      handle = _exports_InteractionManager__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"].createInteractionHandle();
    }

    var previousAnimation = this._animation;
    this._animation && this._animation.stop();
    this._animation = animation;
    animation.start(this._value, function (value) {
      _this2._updateValue(value, true);
    }, function (result) {
      _this2._animation = null;

      if (handle !== null) {
        _exports_InteractionManager__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"].clearInteractionHandle(handle);
      }

      callback && callback(result);
    }, previousAnimation, this);
  };

  _proto.stopTracking = function stopTracking() {
    this._tracking && this._tracking.__detach();
    this._tracking = null;
  };

  _proto.track = function track(tracking) {
    this.stopTracking();
    this._tracking = tracking;
  };

  _proto._updateValue = function _updateValue(value, flush) {
    this._value = value;

    if (flush) {
      _flush(this);
    }

    _AnimatedWithChildren.prototype.__callListeners.call(this, this.__getValue());
  };

  _proto.__getNativeConfig = function __getNativeConfig() {
    return {
      type: 'value',
      value: this._value,
      offset: this._offset
    };
  };

  return AnimatedValue;
}(_AnimatedWithChildren__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"]);

/* harmony default export */ __webpack_exports__["a"] = (AnimatedValue);

/***/ }),

/***/ "FgQQ":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var fbjs_lib_ExecutionEnvironment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("xLLm");
/* harmony import */ var fbjs_lib_ExecutionEnvironment__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(fbjs_lib_ExecutionEnvironment__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var fbjs_lib_invariant__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("2NuI");
/* harmony import */ var fbjs_lib_invariant__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(fbjs_lib_invariant__WEBPACK_IMPORTED_MODULE_1__);


var initialURL = fbjs_lib_ExecutionEnvironment__WEBPACK_IMPORTED_MODULE_0__["canUseDOM"] ? window.location.href : '';
var Linking = {
  addEventListener: function addEventListener() {},
  removeEventListener: function removeEventListener() {},
  canOpenURL: function canOpenURL() {
    return Promise.resolve(true);
  },
  getInitialURL: function getInitialURL() {
    return Promise.resolve(initialURL);
  },
  openURL: function openURL(url) {
    try {
      open(url);
      return Promise.resolve();
    } catch (e) {
      return Promise.reject(e);
    }
  },
  _validateURL: function _validateURL(url) {
    fbjs_lib_invariant__WEBPACK_IMPORTED_MODULE_1___default()(typeof url === 'string', 'Invalid URL: should be a string. Was: ' + url);
    fbjs_lib_invariant__WEBPACK_IMPORTED_MODULE_1___default()(url, 'Invalid URL: cannot be empty');
  }
};

var open = function open(url) {
  if (fbjs_lib_ExecutionEnvironment__WEBPACK_IMPORTED_MODULE_0__["canUseDOM"]) {
    window.location = new URL(url, window.location).toString();
  }
};

/* harmony default export */ __webpack_exports__["a"] = (Linking);

/***/ }),

/***/ "HBEB":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "b", function() { return /* binding */ generateNewAnimationId; });
__webpack_require__.d(__webpack_exports__, "c", function() { return /* binding */ shouldUseNativeDriver; });

// UNUSED EXPORTS: API, addWhitelistedStyleProp, addWhitelistedTransformProp, addWhitelistedInterpolationParam, validateStyles, validateTransform, validateInterpolation, generateNewNodeTag, assertNativeAnimatedModule, transformDataType

// EXTERNAL MODULE: ./node_modules/react-native-web/dist/vendor/react-native/NativeEventEmitter/index.js
var NativeEventEmitter = __webpack_require__("3zYm");

// EXTERNAL MODULE: ./node_modules/fbjs/lib/invariant.js
var invariant = __webpack_require__("2NuI");
var invariant_default = /*#__PURE__*/__webpack_require__.n(invariant);

// CONCATENATED MODULE: ./node_modules/react-native-web/dist/vendor/react-native/TurboModule/TurboModuleRegistry.js



function get(name) {
  return null;
}
function getEnforcing(name) {
  var module = get(name);
  invariant_default()(module != null, "TurboModuleRegistry.getEnforcing(...): '" + name + "' could not be found. " + 'Verify that a module by this name is registered in the native binary.');
  return module;
}
// CONCATENATED MODULE: ./node_modules/react-native-web/dist/vendor/react-native/Animated/NativeAnimatedModule.js



/* harmony default export */ var NativeAnimatedModule = (get('NativeAnimatedModule'));
// CONCATENATED MODULE: ./node_modules/react-native-web/dist/vendor/react-native/Animated/NativeAnimatedHelper.js





var __nativeAnimatedNodeTagCount = 1;
var __nativeAnimationIdCount = 1;
var nativeEventEmitter;
var queueConnections = false;
var queue = [];
var API = {
  enableQueue: function enableQueue() {
    queueConnections = true;
  },
  disableQueue: function disableQueue() {
    invariant_default()(NativeAnimatedModule, 'Native animated module is not available');
    queueConnections = false;

    for (var q = 0, l = queue.length; q < l; q++) {
      var args = queue[q];
      NativeAnimatedModule.connectAnimatedNodes(args[0], args[1]);
    }

    queue.length = 0;
  },
  createAnimatedNode: function createAnimatedNode(tag, config) {
    invariant_default()(NativeAnimatedModule, 'Native animated module is not available');
    NativeAnimatedModule.createAnimatedNode(tag, config);
  },
  startListeningToAnimatedNodeValue: function startListeningToAnimatedNodeValue(tag) {
    invariant_default()(NativeAnimatedModule, 'Native animated module is not available');
    NativeAnimatedModule.startListeningToAnimatedNodeValue(tag);
  },
  stopListeningToAnimatedNodeValue: function stopListeningToAnimatedNodeValue(tag) {
    invariant_default()(NativeAnimatedModule, 'Native animated module is not available');
    NativeAnimatedModule.stopListeningToAnimatedNodeValue(tag);
  },
  connectAnimatedNodes: function connectAnimatedNodes(parentTag, childTag) {
    invariant_default()(NativeAnimatedModule, 'Native animated module is not available');

    if (queueConnections) {
      queue.push([parentTag, childTag]);
      return;
    }

    NativeAnimatedModule.connectAnimatedNodes(parentTag, childTag);
  },
  disconnectAnimatedNodes: function disconnectAnimatedNodes(parentTag, childTag) {
    invariant_default()(NativeAnimatedModule, 'Native animated module is not available');
    NativeAnimatedModule.disconnectAnimatedNodes(parentTag, childTag);
  },
  startAnimatingNode: function startAnimatingNode(animationId, nodeTag, config, endCallback) {
    invariant_default()(NativeAnimatedModule, 'Native animated module is not available');
    NativeAnimatedModule.startAnimatingNode(animationId, nodeTag, config, endCallback);
  },
  stopAnimation: function stopAnimation(animationId) {
    invariant_default()(NativeAnimatedModule, 'Native animated module is not available');
    NativeAnimatedModule.stopAnimation(animationId);
  },
  setAnimatedNodeValue: function setAnimatedNodeValue(nodeTag, value) {
    invariant_default()(NativeAnimatedModule, 'Native animated module is not available');
    NativeAnimatedModule.setAnimatedNodeValue(nodeTag, value);
  },
  setAnimatedNodeOffset: function setAnimatedNodeOffset(nodeTag, offset) {
    invariant_default()(NativeAnimatedModule, 'Native animated module is not available');
    NativeAnimatedModule.setAnimatedNodeOffset(nodeTag, offset);
  },
  flattenAnimatedNodeOffset: function flattenAnimatedNodeOffset(nodeTag) {
    invariant_default()(NativeAnimatedModule, 'Native animated module is not available');
    NativeAnimatedModule.flattenAnimatedNodeOffset(nodeTag);
  },
  extractAnimatedNodeOffset: function extractAnimatedNodeOffset(nodeTag) {
    invariant_default()(NativeAnimatedModule, 'Native animated module is not available');
    NativeAnimatedModule.extractAnimatedNodeOffset(nodeTag);
  },
  connectAnimatedNodeToView: function connectAnimatedNodeToView(nodeTag, viewTag) {
    invariant_default()(NativeAnimatedModule, 'Native animated module is not available');
    NativeAnimatedModule.connectAnimatedNodeToView(nodeTag, viewTag);
  },
  disconnectAnimatedNodeFromView: function disconnectAnimatedNodeFromView(nodeTag, viewTag) {
    invariant_default()(NativeAnimatedModule, 'Native animated module is not available');
    NativeAnimatedModule.disconnectAnimatedNodeFromView(nodeTag, viewTag);
  },
  dropAnimatedNode: function dropAnimatedNode(tag) {
    invariant_default()(NativeAnimatedModule, 'Native animated module is not available');
    NativeAnimatedModule.dropAnimatedNode(tag);
  },
  addAnimatedEventToView: function addAnimatedEventToView(viewTag, eventName, eventMapping) {
    invariant_default()(NativeAnimatedModule, 'Native animated module is not available');
    NativeAnimatedModule.addAnimatedEventToView(viewTag, eventName, eventMapping);
  },
  removeAnimatedEventFromView: function removeAnimatedEventFromView(viewTag, eventName, animatedNodeTag) {
    invariant_default()(NativeAnimatedModule, 'Native animated module is not available');
    NativeAnimatedModule.removeAnimatedEventFromView(viewTag, eventName, animatedNodeTag);
  }
};
var STYLES_WHITELIST = {
  opacity: true,
  transform: true,
  borderRadius: true,
  borderBottomEndRadius: true,
  borderBottomLeftRadius: true,
  borderBottomRightRadius: true,
  borderBottomStartRadius: true,
  borderTopEndRadius: true,
  borderTopLeftRadius: true,
  borderTopRightRadius: true,
  borderTopStartRadius: true,
  elevation: true,
  shadowOpacity: true,
  shadowRadius: true,
  scaleX: true,
  scaleY: true,
  translateX: true,
  translateY: true
};
var TRANSFORM_WHITELIST = {
  translateX: true,
  translateY: true,
  scale: true,
  scaleX: true,
  scaleY: true,
  rotate: true,
  rotateX: true,
  rotateY: true,
  perspective: true
};
var SUPPORTED_INTERPOLATION_PARAMS = {
  inputRange: true,
  outputRange: true,
  extrapolate: true,
  extrapolateRight: true,
  extrapolateLeft: true
};

function addWhitelistedStyleProp(prop) {
  STYLES_WHITELIST[prop] = true;
}

function addWhitelistedTransformProp(prop) {
  TRANSFORM_WHITELIST[prop] = true;
}

function addWhitelistedInterpolationParam(param) {
  SUPPORTED_INTERPOLATION_PARAMS[param] = true;
}

function validateTransform(configs) {
  configs.forEach(function (config) {
    if (!TRANSFORM_WHITELIST.hasOwnProperty(config.property)) {
      throw new Error("Property '" + config.property + "' is not supported by native animated module");
    }
  });
}

function validateStyles(styles) {
  for (var _key in styles) {
    if (!STYLES_WHITELIST.hasOwnProperty(_key)) {
      throw new Error("Style property '" + _key + "' is not supported by native animated module");
    }
  }
}

function validateInterpolation(config) {
  for (var _key2 in config) {
    if (!SUPPORTED_INTERPOLATION_PARAMS.hasOwnProperty(_key2)) {
      throw new Error("Interpolation property '" + _key2 + "' is not supported by native animated module");
    }
  }
}

function generateNewNodeTag() {
  return __nativeAnimatedNodeTagCount++;
}

function generateNewAnimationId() {
  return __nativeAnimationIdCount++;
}

function assertNativeAnimatedModule() {
  invariant_default()(NativeAnimatedModule, 'Native animated module is not available');
}

function shouldUseNativeDriver(config) {
  if (config.useNativeDriver === true && !NativeAnimatedModule) {
    return false;
  }

  return config.useNativeDriver || false;
}

function transformDataType(value) {
  if (typeof value !== 'string') {
    return value;
  }

  if (/deg$/.test(value)) {
    var degrees = parseFloat(value) || 0;
    var radians = degrees * Math.PI / 180.0;
    return radians;
  } else {
    return value;
  }
}

var NativeAnimatedHelper = {
  API: API,
  addWhitelistedStyleProp: addWhitelistedStyleProp,
  addWhitelistedTransformProp: addWhitelistedTransformProp,
  addWhitelistedInterpolationParam: addWhitelistedInterpolationParam,
  validateStyles: validateStyles,
  validateTransform: validateTransform,
  validateInterpolation: validateInterpolation,
  generateNewNodeTag: generateNewNodeTag,
  generateNewAnimationId: generateNewAnimationId,
  assertNativeAnimatedModule: assertNativeAnimatedModule,
  shouldUseNativeDriver: shouldUseNativeDriver,
  transformDataType: transformDataType,

  get nativeEventEmitter() {
    if (!nativeEventEmitter) {
      nativeEventEmitter = new NativeEventEmitter["a" /* default */](NativeAnimatedModule);
    }

    return nativeEventEmitter;
  }

};

/* harmony default export */ var Animated_NativeAnimatedHelper = __webpack_exports__["a"] = (NativeAnimatedHelper);

/***/ }),

/***/ "N/9I":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _NativeAnimatedHelper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("HBEB");
/* harmony import */ var fbjs_lib_invariant__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("2NuI");
/* harmony import */ var fbjs_lib_invariant__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(fbjs_lib_invariant__WEBPACK_IMPORTED_MODULE_1__);




var NativeAnimatedAPI = _NativeAnimatedHelper__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].API;
var _uniqueId = 1;

var AnimatedNode = function () {
  var _proto = AnimatedNode.prototype;

  _proto.__attach = function __attach() {};

  _proto.__detach = function __detach() {
    if (this.__isNative && this.__nativeTag != null) {
      _NativeAnimatedHelper__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].API.dropAnimatedNode(this.__nativeTag);
      this.__nativeTag = undefined;
    }
  };

  _proto.__getValue = function __getValue() {};

  _proto.__getAnimatedValue = function __getAnimatedValue() {
    return this.__getValue();
  };

  _proto.__addChild = function __addChild(child) {};

  _proto.__removeChild = function __removeChild(child) {};

  _proto.__getChildren = function __getChildren() {
    return [];
  };

  function AnimatedNode() {
    this._listeners = {};
  }

  _proto.__makeNative = function __makeNative() {
    if (!this.__isNative) {
      throw new Error('This node cannot be made a "native" animated node');
    }

    if (this.hasListeners()) {
      this._startListeningToNativeValueUpdates();
    }
  };

  _proto.addListener = function addListener(callback) {
    var id = String(_uniqueId++);
    this._listeners[id] = callback;

    if (this.__isNative) {
      this._startListeningToNativeValueUpdates();
    }

    return id;
  };

  _proto.removeListener = function removeListener(id) {
    delete this._listeners[id];

    if (this.__isNative && !this.hasListeners()) {
      this._stopListeningForNativeValueUpdates();
    }
  };

  _proto.removeAllListeners = function removeAllListeners() {
    this._listeners = {};

    if (this.__isNative) {
      this._stopListeningForNativeValueUpdates();
    }
  };

  _proto.hasListeners = function hasListeners() {
    return !!Object.keys(this._listeners).length;
  };

  _proto._startListeningToNativeValueUpdates = function _startListeningToNativeValueUpdates() {
    var _this = this;

    if (this.__nativeAnimatedValueListener && !this.__shouldUpdateListenersForNewNativeTag) {
      return;
    }

    if (this.__shouldUpdateListenersForNewNativeTag) {
      this.__shouldUpdateListenersForNewNativeTag = false;

      this._stopListeningForNativeValueUpdates();
    }

    NativeAnimatedAPI.startListeningToAnimatedNodeValue(this.__getNativeTag());
    this.__nativeAnimatedValueListener = _NativeAnimatedHelper__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].nativeEventEmitter.addListener('onAnimatedValueUpdate', function (data) {
      if (data.tag !== _this.__getNativeTag()) {
        return;
      }

      _this._onAnimatedValueUpdateReceived(data.value);
    });
  };

  _proto._onAnimatedValueUpdateReceived = function _onAnimatedValueUpdateReceived(value) {
    this.__callListeners(value);
  };

  _proto.__callListeners = function __callListeners(value) {
    for (var _key in this._listeners) {
      this._listeners[_key]({
        value: value
      });
    }
  };

  _proto._stopListeningForNativeValueUpdates = function _stopListeningForNativeValueUpdates() {
    if (!this.__nativeAnimatedValueListener) {
      return;
    }

    this.__nativeAnimatedValueListener.remove();

    this.__nativeAnimatedValueListener = null;
    NativeAnimatedAPI.stopListeningToAnimatedNodeValue(this.__getNativeTag());
  };

  _proto.__getNativeTag = function __getNativeTag() {
    _NativeAnimatedHelper__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].assertNativeAnimatedModule();
    fbjs_lib_invariant__WEBPACK_IMPORTED_MODULE_1___default()(this.__isNative, 'Attempt to get native tag from node not marked as "native"');

    if (this.__nativeTag == null) {
      var nativeTag = _NativeAnimatedHelper__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].generateNewNodeTag();
      this.__nativeTag = nativeTag;
      _NativeAnimatedHelper__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].API.createAnimatedNode(nativeTag, this.__getNativeConfig());
      this.__shouldUpdateListenersForNewNativeTag = true;
    }

    return this.__nativeTag;
  };

  _proto.__getNativeConfig = function __getNativeConfig() {
    throw new Error('This JS animated node type cannot be used as native animated node');
  };

  _proto.toJSON = function toJSON() {
    return this.__getValue();
  };

  return AnimatedNode;
}();

/* harmony default export */ __webpack_exports__["a"] = (AnimatedNode);

/***/ }),

/***/ "QILm":
/***/ (function(module, exports, __webpack_require__) {

var objectWithoutPropertiesLoose = __webpack_require__("8OQS");

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};
  var target = objectWithoutPropertiesLoose(source, excluded);
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

module.exports = _objectWithoutProperties;

/***/ }),

/***/ "Qfxl":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/fbjs/lib/invariant.js
var invariant = __webpack_require__("2NuI");
var invariant_default = /*#__PURE__*/__webpack_require__.n(invariant);

// EXTERNAL MODULE: ./node_modules/fbjs/lib/ExecutionEnvironment.js
var ExecutionEnvironment = __webpack_require__("xLLm");

// CONCATENATED MODULE: ./node_modules/react-native-web/dist/modules/requestIdleCallback/index.js


var _requestIdleCallback = function _requestIdleCallback(cb, options) {
  return setTimeout(function () {
    var start = Date.now();
    cb({
      didTimeout: false,
      timeRemaining: function timeRemaining() {
        return Math.max(0, 50 - (Date.now() - start));
      }
    });
  }, 1);
};

var _cancelIdleCallback = function _cancelIdleCallback(id) {
  clearTimeout(id);
};

var isSupported = ExecutionEnvironment["canUseDOM"] && typeof window.requestIdleCallback !== 'undefined';
var requestIdleCallback = isSupported ? window.requestIdleCallback : _requestIdleCallback;
var cancelIdleCallback = isSupported ? window.cancelIdleCallback : _cancelIdleCallback;
/* harmony default export */ var modules_requestIdleCallback = (requestIdleCallback);

// CONCATENATED MODULE: ./node_modules/react-native-web/dist/exports/InteractionManager/index.js


var InteractionManager = {
  Events: {
    interactionStart: 'interactionStart',
    interactionComplete: 'interactionComplete'
  },
  runAfterInteractions: function runAfterInteractions(task) {
    var handle;
    var promise = new Promise(function (resolve) {
      handle = modules_requestIdleCallback(function () {
        if (task) {
          resolve(task());
        } else {
          resolve();
        }
      });
    });
    return {
      then: promise.then.bind(promise),
      done: promise.then.bind(promise),
      cancel: function cancel() {
        cancelIdleCallback(handle);
      }
    };
  },
  createInteractionHandle: function createInteractionHandle() {
    return 1;
  },
  clearInteractionHandle: function clearInteractionHandle(handle) {
    invariant_default()(!!handle, 'Must provide a handle to clear.');
  },
  addListener: function addListener() {}
};
/* harmony default export */ var exports_InteractionManager = __webpack_exports__["a"] = (InteractionManager);

/***/ }),

/***/ "QtD7":
/***/ (function(module, exports, __webpack_require__) {

var _interopRequireWildcard = __webpack_require__("284h");

var _interopRequireDefault = __webpack_require__("TqRt");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.Pattern = exports.Marker = exports.ForeignObject = exports.Mask = exports.Use = exports.TextPath = exports.TSpan = exports.Text = exports.Symbol = exports.Svg = exports.Stop = exports.Rect = exports.RadialGradient = exports.Polyline = exports.Polygon = exports.Path = exports.LinearGradient = exports.Line = exports.Image = exports.G = exports.Ellipse = exports.Defs = exports.ClipPath = exports.Circle = exports.WebShape = void 0;

var _createClass2 = _interopRequireDefault(__webpack_require__("W8MJ"));

var _classCallCheck2 = _interopRequireDefault(__webpack_require__("lwsE"));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__("a1gu"));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__("Nsbk"));

var _assertThisInitialized2 = _interopRequireDefault(__webpack_require__("PJYZ"));

var _inherits2 = _interopRequireDefault(__webpack_require__("7W2i"));

var _defineProperty2 = _interopRequireDefault(__webpack_require__("lSNA"));

var _objectWithoutProperties2 = _interopRequireDefault(__webpack_require__("QILm"));

var React = _interopRequireWildcard(__webpack_require__("q1tI"));

var _reactNative = __webpack_require__("7RzF");

var _SvgTouchableMixin = _interopRequireDefault(__webpack_require__("72vt"));

var _resolve = __webpack_require__("VOvL");

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
        (0, _defineProperty2.default)(target, key, source[key]);
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

var createElement = _reactNative.createElement || _reactNative.unstable_createElement;

var prepare = function prepare(self) {
  var props = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : self.props;
  var translate = props.translate,
      scale = props.scale,
      rotation = props.rotation,
      skewX = props.skewX,
      skewY = props.skewY,
      originX = props.originX,
      originY = props.originY,
      fontFamily = props.fontFamily,
      fontSize = props.fontSize,
      fontWeight = props.fontWeight,
      fontStyle = props.fontStyle,
      style = props.style,
      forwardedRef = props.forwardedRef,
      onPress = props.onPress,
      onPressIn = props.onPressIn,
      onPressOut = props.onPressOut,
      onLongPress = props.onLongPress,
      rest = (0, _objectWithoutProperties2.default)(props, ["translate", "scale", "rotation", "skewX", "skewY", "originX", "originY", "fontFamily", "fontSize", "fontWeight", "fontStyle", "style", "forwardedRef", "onPress", "onPressIn", "onPressOut", "onLongPress"]);
  var hasTouchableProperty = onPress || onPressIn || onPressOut || onLongPress;

  var clean = _objectSpread({}, hasTouchableProperty ? {
    onStartShouldSetResponder: self.touchableHandleStartShouldSetResponder,
    onResponderTerminationRequest: self.touchableHandleResponderTerminationRequest,
    onResponderGrant: self.touchableHandleResponderGrant,
    onResponderMove: self.touchableHandleResponderMove,
    onResponderRelease: self.touchableHandleResponderRelease,
    onResponderTerminate: self.touchableHandleResponderTerminate
  } : null, {}, rest);

  var transform = [];

  if (originX != null || originY != null) {
    transform.push("translate(".concat(originX || 0, ", ").concat(originY || 0, ")"));
  }

  if (translate != null) {
    transform.push("translate(".concat(translate, ")"));
  }

  if (scale != null) {
    transform.push("scale(".concat(scale, ")"));
  }

  if (rotation != null) {
    transform.push("rotate(".concat(rotation, ")"));
  }

  if (skewX != null) {
    transform.push("skewX(".concat(skewX, ")"));
  }

  if (skewY != null) {
    transform.push("skewY(".concat(skewY, ")"));
  }

  if (originX != null || originY != null) {
    transform.push("translate(".concat(-originX || 0, ", ").concat(-originY || 0, ")"));
  }

  if (transform.length) {
    clean.transform = transform.join(' ');
  }

  if (forwardedRef) {
    clean.ref = forwardedRef;
  }

  var styles = {};

  if (fontFamily != null) {
    styles.fontFamily = fontFamily;
  }

  if (fontSize != null) {
    styles.fontSize = fontSize;
  }

  if (fontWeight != null) {
    styles.fontWeight = fontWeight;
  }

  if (fontStyle != null) {
    styles.fontStyle = fontStyle;
  }

  clean.style = (0, _resolve.resolve)(style, styles);
  return clean;
};

var getBoundingClientRect = function getBoundingClientRect(node) {
  if (node) {
    var isElement = node.nodeType === 1;

    if (isElement && typeof node.getBoundingClientRect === 'function') {
      return node.getBoundingClientRect();
    }
  }
};

var measureLayout = function measureLayout(node, callback) {
  var relativeNode = node && node.parentNode;

  if (relativeNode) {
    setTimeout(function () {
      var relativeRect = getBoundingClientRect(relativeNode);

      var _getBoundingClientRec = getBoundingClientRect(node),
          height = _getBoundingClientRec.height,
          left = _getBoundingClientRec.left,
          top = _getBoundingClientRec.top,
          width = _getBoundingClientRec.width;

      var x = left - relativeRect.left;
      var y = top - relativeRect.top;
      callback(x, y, width, height, left, top);
    }, 0);
  }
};

function remeasure() {
  var tag = this.state.touchable.responderID;

  if (tag == null) {
    return;
  }

  measureLayout(tag, this._handleQueryLayout);
}

var WebShape = function (_React$Component) {
  (0, _inherits2.default)(WebShape, _React$Component);

  function WebShape(props, context) {
    var _this;

    (0, _classCallCheck2.default)(this, WebShape);
    _this = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(WebShape).call(this, props, context));
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "_remeasureMetricsOnActivation", void 0);
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "touchableHandleStartShouldSetResponder", void 0);
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "touchableHandleResponderMove", void 0);
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "touchableHandleResponderGrant", void 0);
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "touchableHandleResponderRelease", void 0);
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "touchableHandleResponderTerminate", void 0);
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "touchableHandleResponderTerminationRequest", void 0);
    (0, _SvgTouchableMixin.default)((0, _assertThisInitialized2.default)(_this));
    _this._remeasureMetricsOnActivation = remeasure.bind((0, _assertThisInitialized2.default)(_this));
    return _this;
  }

  return WebShape;
}(React.Component);

exports.WebShape = WebShape;

var Circle = function (_WebShape) {
  (0, _inherits2.default)(Circle, _WebShape);

  function Circle() {
    (0, _classCallCheck2.default)(this, Circle);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(Circle).apply(this, arguments));
  }

  (0, _createClass2.default)(Circle, [{
    key: "render",
    value: function render() {
      return createElement('circle', prepare(this));
    }
  }]);
  return Circle;
}(WebShape);

exports.Circle = Circle;

var ClipPath = function (_WebShape2) {
  (0, _inherits2.default)(ClipPath, _WebShape2);

  function ClipPath() {
    (0, _classCallCheck2.default)(this, ClipPath);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(ClipPath).apply(this, arguments));
  }

  (0, _createClass2.default)(ClipPath, [{
    key: "render",
    value: function render() {
      return createElement('clipPath', prepare(this));
    }
  }]);
  return ClipPath;
}(WebShape);

exports.ClipPath = ClipPath;

var Defs = function (_WebShape3) {
  (0, _inherits2.default)(Defs, _WebShape3);

  function Defs() {
    (0, _classCallCheck2.default)(this, Defs);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(Defs).apply(this, arguments));
  }

  (0, _createClass2.default)(Defs, [{
    key: "render",
    value: function render() {
      return createElement('defs', prepare(this));
    }
  }]);
  return Defs;
}(WebShape);

exports.Defs = Defs;

var Ellipse = function (_WebShape4) {
  (0, _inherits2.default)(Ellipse, _WebShape4);

  function Ellipse() {
    (0, _classCallCheck2.default)(this, Ellipse);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(Ellipse).apply(this, arguments));
  }

  (0, _createClass2.default)(Ellipse, [{
    key: "render",
    value: function render() {
      return createElement('ellipse', prepare(this));
    }
  }]);
  return Ellipse;
}(WebShape);

exports.Ellipse = Ellipse;

var G = function (_WebShape5) {
  (0, _inherits2.default)(G, _WebShape5);

  function G() {
    (0, _classCallCheck2.default)(this, G);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(G).apply(this, arguments));
  }

  (0, _createClass2.default)(G, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          x = _this$props.x,
          y = _this$props.y,
          rest = (0, _objectWithoutProperties2.default)(_this$props, ["x", "y"]);

      if ((x || y) && !rest.translate) {
        rest.translate = "".concat(x || 0, ", ").concat(y || 0);
      }

      return createElement('g', prepare(this, rest));
    }
  }]);
  return G;
}(WebShape);

exports.G = G;

var Image = function (_WebShape6) {
  (0, _inherits2.default)(Image, _WebShape6);

  function Image() {
    (0, _classCallCheck2.default)(this, Image);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(Image).apply(this, arguments));
  }

  (0, _createClass2.default)(Image, [{
    key: "render",
    value: function render() {
      return createElement('image', prepare(this));
    }
  }]);
  return Image;
}(WebShape);

exports.Image = Image;

var Line = function (_WebShape7) {
  (0, _inherits2.default)(Line, _WebShape7);

  function Line() {
    (0, _classCallCheck2.default)(this, Line);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(Line).apply(this, arguments));
  }

  (0, _createClass2.default)(Line, [{
    key: "render",
    value: function render() {
      return createElement('line', prepare(this));
    }
  }]);
  return Line;
}(WebShape);

exports.Line = Line;

var LinearGradient = function (_WebShape8) {
  (0, _inherits2.default)(LinearGradient, _WebShape8);

  function LinearGradient() {
    (0, _classCallCheck2.default)(this, LinearGradient);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(LinearGradient).apply(this, arguments));
  }

  (0, _createClass2.default)(LinearGradient, [{
    key: "render",
    value: function render() {
      return createElement('linearGradient', prepare(this));
    }
  }]);
  return LinearGradient;
}(WebShape);

exports.LinearGradient = LinearGradient;

var Path = function (_WebShape9) {
  (0, _inherits2.default)(Path, _WebShape9);

  function Path() {
    (0, _classCallCheck2.default)(this, Path);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(Path).apply(this, arguments));
  }

  (0, _createClass2.default)(Path, [{
    key: "render",
    value: function render() {
      return createElement('path', prepare(this));
    }
  }]);
  return Path;
}(WebShape);

exports.Path = Path;

var Polygon = function (_WebShape10) {
  (0, _inherits2.default)(Polygon, _WebShape10);

  function Polygon() {
    (0, _classCallCheck2.default)(this, Polygon);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(Polygon).apply(this, arguments));
  }

  (0, _createClass2.default)(Polygon, [{
    key: "render",
    value: function render() {
      return createElement('polygon', prepare(this));
    }
  }]);
  return Polygon;
}(WebShape);

exports.Polygon = Polygon;

var Polyline = function (_WebShape11) {
  (0, _inherits2.default)(Polyline, _WebShape11);

  function Polyline() {
    (0, _classCallCheck2.default)(this, Polyline);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(Polyline).apply(this, arguments));
  }

  (0, _createClass2.default)(Polyline, [{
    key: "render",
    value: function render() {
      return createElement('polyline', prepare(this));
    }
  }]);
  return Polyline;
}(WebShape);

exports.Polyline = Polyline;

var RadialGradient = function (_WebShape12) {
  (0, _inherits2.default)(RadialGradient, _WebShape12);

  function RadialGradient() {
    (0, _classCallCheck2.default)(this, RadialGradient);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(RadialGradient).apply(this, arguments));
  }

  (0, _createClass2.default)(RadialGradient, [{
    key: "render",
    value: function render() {
      return createElement('radialGradient', prepare(this));
    }
  }]);
  return RadialGradient;
}(WebShape);

exports.RadialGradient = RadialGradient;

var Rect = function (_WebShape13) {
  (0, _inherits2.default)(Rect, _WebShape13);

  function Rect() {
    (0, _classCallCheck2.default)(this, Rect);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(Rect).apply(this, arguments));
  }

  (0, _createClass2.default)(Rect, [{
    key: "render",
    value: function render() {
      return createElement('rect', prepare(this));
    }
  }]);
  return Rect;
}(WebShape);

exports.Rect = Rect;

var Stop = function (_WebShape14) {
  (0, _inherits2.default)(Stop, _WebShape14);

  function Stop() {
    (0, _classCallCheck2.default)(this, Stop);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(Stop).apply(this, arguments));
  }

  (0, _createClass2.default)(Stop, [{
    key: "render",
    value: function render() {
      return createElement('stop', prepare(this));
    }
  }]);
  return Stop;
}(WebShape);

exports.Stop = Stop;

var Svg = function (_WebShape15) {
  (0, _inherits2.default)(Svg, _WebShape15);

  function Svg() {
    (0, _classCallCheck2.default)(this, Svg);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(Svg).apply(this, arguments));
  }

  (0, _createClass2.default)(Svg, [{
    key: "render",
    value: function render() {
      return createElement('svg', prepare(this));
    }
  }]);
  return Svg;
}(WebShape);

exports.Svg = Svg;

var Symbol = function (_WebShape16) {
  (0, _inherits2.default)(Symbol, _WebShape16);

  function Symbol() {
    (0, _classCallCheck2.default)(this, Symbol);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(Symbol).apply(this, arguments));
  }

  (0, _createClass2.default)(Symbol, [{
    key: "render",
    value: function render() {
      return createElement('symbol', prepare(this));
    }
  }]);
  return Symbol;
}(WebShape);

exports.Symbol = Symbol;

var Text = function (_WebShape17) {
  (0, _inherits2.default)(Text, _WebShape17);

  function Text() {
    (0, _classCallCheck2.default)(this, Text);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(Text).apply(this, arguments));
  }

  (0, _createClass2.default)(Text, [{
    key: "render",
    value: function render() {
      return createElement('text', prepare(this));
    }
  }]);
  return Text;
}(WebShape);

exports.Text = Text;

var TSpan = function (_WebShape18) {
  (0, _inherits2.default)(TSpan, _WebShape18);

  function TSpan() {
    (0, _classCallCheck2.default)(this, TSpan);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(TSpan).apply(this, arguments));
  }

  (0, _createClass2.default)(TSpan, [{
    key: "render",
    value: function render() {
      return createElement('tspan', prepare(this));
    }
  }]);
  return TSpan;
}(WebShape);

exports.TSpan = TSpan;

var TextPath = function (_WebShape19) {
  (0, _inherits2.default)(TextPath, _WebShape19);

  function TextPath() {
    (0, _classCallCheck2.default)(this, TextPath);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(TextPath).apply(this, arguments));
  }

  (0, _createClass2.default)(TextPath, [{
    key: "render",
    value: function render() {
      return createElement('textPath', prepare(this));
    }
  }]);
  return TextPath;
}(WebShape);

exports.TextPath = TextPath;

var Use = function (_WebShape20) {
  (0, _inherits2.default)(Use, _WebShape20);

  function Use() {
    (0, _classCallCheck2.default)(this, Use);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(Use).apply(this, arguments));
  }

  (0, _createClass2.default)(Use, [{
    key: "render",
    value: function render() {
      return createElement('use', prepare(this));
    }
  }]);
  return Use;
}(WebShape);

exports.Use = Use;

var Mask = function (_WebShape21) {
  (0, _inherits2.default)(Mask, _WebShape21);

  function Mask() {
    (0, _classCallCheck2.default)(this, Mask);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(Mask).apply(this, arguments));
  }

  (0, _createClass2.default)(Mask, [{
    key: "render",
    value: function render() {
      return createElement('mask', prepare(this));
    }
  }]);
  return Mask;
}(WebShape);

exports.Mask = Mask;

var ForeignObject = function (_WebShape22) {
  (0, _inherits2.default)(ForeignObject, _WebShape22);

  function ForeignObject() {
    (0, _classCallCheck2.default)(this, ForeignObject);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(ForeignObject).apply(this, arguments));
  }

  (0, _createClass2.default)(ForeignObject, [{
    key: "render",
    value: function render() {
      return createElement('foreignObject', prepare(this));
    }
  }]);
  return ForeignObject;
}(WebShape);

exports.ForeignObject = ForeignObject;

var Marker = function (_WebShape23) {
  (0, _inherits2.default)(Marker, _WebShape23);

  function Marker() {
    (0, _classCallCheck2.default)(this, Marker);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(Marker).apply(this, arguments));
  }

  (0, _createClass2.default)(Marker, [{
    key: "render",
    value: function render() {
      return createElement('marker', prepare(this));
    }
  }]);
  return Marker;
}(WebShape);

exports.Marker = Marker;

var Pattern = function (_WebShape24) {
  (0, _inherits2.default)(Pattern, _WebShape24);

  function Pattern() {
    (0, _classCallCheck2.default)(this, Pattern);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(Pattern).apply(this, arguments));
  }

  (0, _createClass2.default)(Pattern, [{
    key: "render",
    value: function render() {
      return createElement('pattern', prepare(this));
    }
  }]);
  return Pattern;
}(WebShape);

exports.Pattern = Pattern;
var _default = Svg;
exports.default = _default;

/***/ }),

/***/ "RYSQ":
/***/ (function(module, exports) {

// gutted from https://github.com/Polymer/observe-js/blob/master/src/observe.js
function noop() {}

function detectEval() {
  // Don't test for eval if we're running in a Chrome App environment.
  // We check for APIs set that only exist in a Chrome App context.
  if (typeof chrome !== 'undefined' && chrome.app && chrome.app.runtime) {
    return false;
  } // Firefox OS Apps do not allow eval. This feature detection is very hacky
  // but even if some other platform adds support for this function this code
  // will continue to work.


  if (typeof navigator != 'undefined' && navigator.getDeviceStorage) {
    return false;
  }

  try {
    var f = new Function('', 'return true;');
    return f();
  } catch (ex) {
    return false;
  }
}

var hasEval = detectEval();

function isIndex(s) {
  return +s === s >>> 0 && s !== '';
}

function isObject(obj) {
  return obj === Object(obj);
}

var createObject = '__proto__' in {} ? function (obj) {
  return obj;
} : function (obj) {
  var proto = obj.__proto__;
  if (!proto) return obj;
  var newObject = Object.create(proto);
  Object.getOwnPropertyNames(obj).forEach(function (name) {
    Object.defineProperty(newObject, name, Object.getOwnPropertyDescriptor(obj, name));
  });
  return newObject;
};

function parsePath(path) {
  var keys = [];
  var index = -1;
  var c,
      newChar,
      key,
      type,
      transition,
      action,
      typeMap,
      mode = 'beforePath';
  var actions = {
    push: function push() {
      if (key === undefined) return;
      keys.push(key);
      key = undefined;
    },
    append: function append() {
      if (key === undefined) key = newChar;else key += newChar;
    }
  };

  function maybeUnescapeQuote() {
    if (index >= path.length) return;
    var nextChar = path[index + 1];

    if (mode == 'inSingleQuote' && nextChar == "'" || mode == 'inDoubleQuote' && nextChar == '"') {
      index++;
      newChar = nextChar;
      actions.append();
      return true;
    }
  }

  while (mode) {
    index++;
    c = path[index];
    if (c == '\\' && maybeUnescapeQuote(mode)) continue;
    type = getPathCharType(c);
    typeMap = pathStateMachine[mode];
    transition = typeMap[type] || typeMap['else'] || 'error';
    if (transition == 'error') return; // parse error

    mode = transition[0];
    action = actions[transition[1]] || noop;
    newChar = transition[2] === undefined ? c : transition[2];
    action();

    if (mode === 'afterPath') {
      return keys;
    }
  }

  return; // parse error
}

var identStart = '[\$_a-zA-Z]';
var identPart = '[\$_a-zA-Z0-9]';
var identRegExp = new RegExp('^' + identStart + '+' + identPart + '*' + '$');

function isIdent(s) {
  return identRegExp.test(s);
}

var constructorIsPrivate = {};

function Path(parts, privateToken) {
  if (privateToken !== constructorIsPrivate) throw Error('Use Path.get to retrieve path objects');

  for (var i = 0; i < parts.length; i++) {
    this.push(String(parts[i]));
  }

  if (hasEval && this.length) {
    this.getValueFrom = this.compiledGetValueFromFn();
  }
}

var pathCache = {};

function getPath(pathString) {
  if (pathString instanceof Path) return pathString;
  if (pathString == null || pathString.length == 0) pathString = '';

  if (typeof pathString != 'string') {
    if (isIndex(pathString.length)) {
      // Constructed with array-like (pre-parsed) keys
      return new Path(pathString, constructorIsPrivate);
    }

    pathString = String(pathString);
  }

  var path = pathCache[pathString];
  if (path) return path;
  var parts = parsePath(pathString);
  if (!parts) return invalidPath;
  var path = new Path(parts, constructorIsPrivate);
  pathCache[pathString] = path;
  return path;
}

Path.get = getPath;

function formatAccessor(key) {
  if (isIndex(key)) {
    return '[' + key + ']';
  } else {
    return '["' + key.replace(/"/g, '\\"') + '"]';
  }
}

Path.prototype = createObject({
  __proto__: [],
  valid: true,
  toString: function toString() {
    var pathString = '';

    for (var i = 0; i < this.length; i++) {
      var key = this[i];

      if (isIdent(key)) {
        pathString += i ? '.' + key : key;
      } else {
        pathString += formatAccessor(key);
      }
    }

    return pathString;
  },
  getValueFrom: function getValueFrom(obj, directObserver) {
    for (var i = 0; i < this.length; i++) {
      if (obj == null) return;
      obj = obj[this[i]];
    }

    return obj;
  },
  iterateObjects: function iterateObjects(obj, observe) {
    for (var i = 0; i < this.length; i++) {
      if (i) obj = obj[this[i - 1]];
      if (!isObject(obj)) return;
      observe(obj, this[i]);
    }
  },
  compiledGetValueFromFn: function compiledGetValueFromFn() {
    var str = '';
    var pathString = 'obj';
    str += 'if (obj != null';
    var i = 0;
    var key;

    for (; i < this.length - 1; i++) {
      key = this[i];
      pathString += isIdent(key) ? '.' + key : formatAccessor(key);
      str += ' &&\n     ' + pathString + ' != null';
    }

    str += ')\n';
    var key = this[i];
    pathString += isIdent(key) ? '.' + key : formatAccessor(key);
    str += '  return ' + pathString + ';\nelse\n  return undefined;';
    return new Function('obj', str);
  },
  setValueFrom: function setValueFrom(obj, value) {
    if (!this.length) return false;

    for (var i = 0; i < this.length - 1; i++) {
      if (!isObject(obj)) return false;
      obj = obj[this[i]];
    }

    if (!isObject(obj)) return false;
    obj[this[i]] = value;
    return true;
  }
});

function getPathCharType(char) {
  if (char === undefined) return 'eof';
  var code = char.charCodeAt(0);

  switch (code) {
    case 0x5B: // [

    case 0x5D: // ]

    case 0x2E: // .

    case 0x22: // "

    case 0x27: // '

    case 0x30:
      // 0
      return char;

    case 0x5F: // _

    case 0x24:
      // $
      return 'ident';

    case 0x20: // Space

    case 0x09: // Tab

    case 0x0A: // Newline

    case 0x0D: // Return

    case 0xA0: // No-break space

    case 0xFEFF: // Byte Order Mark

    case 0x2028: // Line Separator

    case 0x2029:
      // Paragraph Separator
      return 'ws';
  } // a-z, A-Z


  if (0x61 <= code && code <= 0x7A || 0x41 <= code && code <= 0x5A) return 'ident'; // 1-9

  if (0x31 <= code && code <= 0x39) return 'number';
  return 'else';
}

var pathStateMachine = {
  'beforePath': {
    'ws': ['beforePath'],
    'ident': ['inIdent', 'append'],
    '[': ['beforeElement'],
    'eof': ['afterPath']
  },
  'inPath': {
    'ws': ['inPath'],
    '.': ['beforeIdent'],
    '[': ['beforeElement'],
    'eof': ['afterPath']
  },
  'beforeIdent': {
    'ws': ['beforeIdent'],
    'ident': ['inIdent', 'append']
  },
  'inIdent': {
    'ident': ['inIdent', 'append'],
    '0': ['inIdent', 'append'],
    'number': ['inIdent', 'append'],
    'ws': ['inPath', 'push'],
    '.': ['beforeIdent', 'push'],
    '[': ['beforeElement', 'push'],
    'eof': ['afterPath', 'push']
  },
  'beforeElement': {
    'ws': ['beforeElement'],
    '0': ['afterZero', 'append'],
    'number': ['inIndex', 'append'],
    "'": ['inSingleQuote', 'append', ''],
    '"': ['inDoubleQuote', 'append', '']
  },
  'afterZero': {
    'ws': ['afterElement', 'push'],
    ']': ['inPath', 'push']
  },
  'inIndex': {
    '0': ['inIndex', 'append'],
    'number': ['inIndex', 'append'],
    'ws': ['afterElement'],
    ']': ['inPath', 'push']
  },
  'inSingleQuote': {
    "'": ['afterElement'],
    'eof': ['error'],
    'else': ['inSingleQuote', 'append']
  },
  'inDoubleQuote': {
    '"': ['afterElement'],
    'eof': ['error'],
    'else': ['inDoubleQuote', 'append']
  },
  'afterElement': {
    'ws': ['afterElement'],
    ']': ['inPath', 'push']
  }
};
var invalidPath = new Path('', constructorIsPrivate);
invalidPath.valid = false;

invalidPath.getValueFrom = invalidPath.setValueFrom = function () {};

module.exports = Path;

/***/ }),

/***/ "Rg59":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {/* harmony import */ var _Animation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("ARf8");
/* harmony import */ var _Easing__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("rHqE");
/* harmony import */ var _NativeAnimatedHelper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("HBEB");


function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  subClass.__proto__ = superClass;
}







var _easeInOut;

function easeInOut() {
  if (!_easeInOut) {
    _easeInOut = _Easing__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].inOut(_Easing__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].ease);
  }

  return _easeInOut;
}

var TimingAnimation = function (_Animation) {
  _inheritsLoose(TimingAnimation, _Animation);

  function TimingAnimation(config) {
    var _config$easing, _config$duration, _config$delay, _config$iterations, _config$isInteraction;

    var _this;

    _this = _Animation.call(this) || this;
    _this._toValue = config.toValue;
    _this._easing = (_config$easing = config.easing) !== null && _config$easing !== void 0 ? _config$easing : easeInOut();
    _this._duration = (_config$duration = config.duration) !== null && _config$duration !== void 0 ? _config$duration : 500;
    _this._delay = (_config$delay = config.delay) !== null && _config$delay !== void 0 ? _config$delay : 0;
    _this.__iterations = (_config$iterations = config.iterations) !== null && _config$iterations !== void 0 ? _config$iterations : 1;
    _this._useNativeDriver = Object(_NativeAnimatedHelper__WEBPACK_IMPORTED_MODULE_2__[/* shouldUseNativeDriver */ "c"])(config);
    _this.__isInteraction = (_config$isInteraction = config.isInteraction) !== null && _config$isInteraction !== void 0 ? _config$isInteraction : !_this._useNativeDriver;
    return _this;
  }

  var _proto = TimingAnimation.prototype;

  _proto.__getNativeAnimationConfig = function __getNativeAnimationConfig() {
    var frameDuration = 1000.0 / 60.0;
    var frames = [];

    for (var dt = 0.0; dt < this._duration; dt += frameDuration) {
      frames.push(this._easing(dt / this._duration));
    }

    frames.push(this._easing(1));
    return {
      type: 'frames',
      frames: frames,
      toValue: this._toValue,
      iterations: this.__iterations
    };
  };

  _proto.start = function start(fromValue, onUpdate, onEnd, previousAnimation, animatedValue) {
    var _this2 = this;

    this.__active = true;
    this._fromValue = fromValue;
    this._onUpdate = onUpdate;
    this.__onEnd = onEnd;

    var start = function start() {
      if (_this2._duration === 0 && !_this2._useNativeDriver) {
        _this2._onUpdate(_this2._toValue);

        _this2.__debouncedOnEnd({
          finished: true
        });
      } else {
        _this2._startTime = Date.now();

        if (_this2._useNativeDriver) {
          _this2.__startNativeAnimation(animatedValue);
        } else {
          _this2._animationFrame = requestAnimationFrame(_this2.onUpdate.bind(_this2));
        }
      }
    };

    if (this._delay) {
      this._timeout = setTimeout(start, this._delay);
    } else {
      start();
    }
  };

  _proto.onUpdate = function onUpdate() {
    var now = Date.now();

    if (now >= this._startTime + this._duration) {
      if (this._duration === 0) {
        this._onUpdate(this._toValue);
      } else {
        this._onUpdate(this._fromValue + this._easing(1) * (this._toValue - this._fromValue));
      }

      this.__debouncedOnEnd({
        finished: true
      });

      return;
    }

    this._onUpdate(this._fromValue + this._easing((now - this._startTime) / this._duration) * (this._toValue - this._fromValue));

    if (this.__active) {
      this._animationFrame = requestAnimationFrame(this.onUpdate.bind(this));
    }
  };

  _proto.stop = function stop() {
    _Animation.prototype.stop.call(this);

    this.__active = false;
    clearTimeout(this._timeout);
    global.cancelAnimationFrame(this._animationFrame);

    this.__debouncedOnEnd({
      finished: false
    });
  };

  return TimingAnimation;
}(_Animation__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"]);

/* harmony default export */ __webpack_exports__["a"] = (TimingAnimation);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("eKGF")))

/***/ }),

/***/ "RzDr":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export fromOrigamiTensionAndFriction */
/* unused harmony export fromBouncinessAndSpeed */


function stiffnessFromOrigamiValue(oValue) {
  return (oValue - 30) * 3.62 + 194;
}

function dampingFromOrigamiValue(oValue) {
  return (oValue - 8) * 3 + 25;
}

function fromOrigamiTensionAndFriction(tension, friction) {
  return {
    stiffness: stiffnessFromOrigamiValue(tension),
    damping: dampingFromOrigamiValue(friction)
  };
}

function fromBouncinessAndSpeed(bounciness, speed) {
  function normalize(value, startValue, endValue) {
    return (value - startValue) / (endValue - startValue);
  }

  function projectNormal(n, start, end) {
    return start + n * (end - start);
  }

  function linearInterpolation(t, start, end) {
    return t * end + (1 - t) * start;
  }

  function quadraticOutInterpolation(t, start, end) {
    return linearInterpolation(2 * t - t * t, start, end);
  }

  function b3Friction1(x) {
    return 0.0007 * Math.pow(x, 3) - 0.031 * Math.pow(x, 2) + 0.64 * x + 1.28;
  }

  function b3Friction2(x) {
    return 0.000044 * Math.pow(x, 3) - 0.006 * Math.pow(x, 2) + 0.36 * x + 2;
  }

  function b3Friction3(x) {
    return 0.00000045 * Math.pow(x, 3) - 0.000332 * Math.pow(x, 2) + 0.1078 * x + 5.84;
  }

  function b3Nobounce(tension) {
    if (tension <= 18) {
      return b3Friction1(tension);
    } else if (tension > 18 && tension <= 44) {
      return b3Friction2(tension);
    } else {
      return b3Friction3(tension);
    }
  }

  var b = normalize(bounciness / 1.7, 0, 20);
  b = projectNormal(b, 0, 0.8);
  var s = normalize(speed / 1.7, 0, 20);
  var bouncyTension = projectNormal(s, 0.5, 200);
  var bouncyFriction = quadraticOutInterpolation(b, b3Nobounce(bouncyTension), 0.01);
  return {
    stiffness: stiffnessFromOrigamiValue(bouncyTension),
    damping: dampingFromOrigamiValue(bouncyFriction)
  };
}


/* harmony default export */ __webpack_exports__["a"] = ({
  fromOrigamiTensionAndFriction: fromOrigamiTensionAndFriction,
  fromBouncinessAndSpeed: fromBouncinessAndSpeed
});

/***/ }),

/***/ "VOvL":
/***/ (function(module, exports, __webpack_require__) {

var _interopRequireDefault = __webpack_require__("TqRt");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.resolve = resolve;

var _extends2 = _interopRequireDefault(__webpack_require__("pVnL"));

var _toConsumableArray2 = _interopRequireDefault(__webpack_require__("RIqP"));

var _reactNative = __webpack_require__("7RzF");

function resolve(styleProp, cleanedProps) {
  if (styleProp) {
    return _reactNative.StyleSheet ? [styleProp, cleanedProps] : styleProp[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"] ? Object.assign.apply(Object, [{}].concat((0, _toConsumableArray2.default)(styleProp), [cleanedProps])) : (0, _extends2.default)({}, styleProp, cleanedProps);
  } else {
    return cleanedProps;
  }
}

/***/ }),

/***/ "Wi0u":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("pVnL");
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("q1tI");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _modules_pick__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("5Bvt");
/* harmony import */ var _modules_useMergeRefs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("CSmu");
/* harmony import */ var _modules_usePressEvents__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("8FfZ");




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






var forwardPropsList = {
  accessibilityLabel: true,
  accessibilityLiveRegion: true,
  accessibilityRole: true,
  accessibilityState: true,
  accessibilityValue: true,
  accessible: true,
  children: true,
  disabled: true,
  focusable: true,
  importantForAccessibility: true,
  nativeID: true,
  onBlur: true,
  onFocus: true,
  onLayout: true,
  testID: true
};

var pickProps = function pickProps(props) {
  return Object(_modules_pick__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(props, forwardPropsList);
};

function TouchableWithoutFeedback(props, forwardedRef) {
  var accessible = props.accessible,
      delayPressIn = props.delayPressIn,
      delayPressOut = props.delayPressOut,
      delayLongPress = props.delayLongPress,
      disabled = props.disabled,
      focusable = props.focusable,
      onLongPress = props.onLongPress,
      onPress = props.onPress,
      onPressIn = props.onPressIn,
      onPressOut = props.onPressOut,
      rejectResponderTermination = props.rejectResponderTermination;
  var hostRef = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])(null);
  var pressConfig = Object(react__WEBPACK_IMPORTED_MODULE_1__["useMemo"])(function () {
    return {
      cancelable: !rejectResponderTermination,
      disabled: disabled,
      delayLongPress: delayLongPress,
      delayPressStart: delayPressIn,
      delayPressEnd: delayPressOut,
      onLongPress: onLongPress,
      onPress: onPress,
      onPressStart: onPressIn,
      onPressEnd: onPressOut
    };
  }, [disabled, delayPressIn, delayPressOut, delayLongPress, onLongPress, onPress, onPressIn, onPressOut, rejectResponderTermination]);
  var pressEventHandlers = Object(_modules_usePressEvents__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(hostRef, pressConfig);
  var element = react__WEBPACK_IMPORTED_MODULE_1__["Children"].only(props.children);
  var children = [element.props.children];
  var supportedProps = pickProps(props);
  supportedProps.accessible = accessible !== false;
  supportedProps.accessibilityState = _objectSpread({
    disabled: disabled
  }, props.accessibilityState);
  supportedProps.focusable = focusable !== false && onPress !== undefined;
  supportedProps.ref = Object(_modules_useMergeRefs__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(forwardedRef, hostRef, element.ref);

  var elementProps = _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()(supportedProps, pressEventHandlers);

  return react__WEBPACK_IMPORTED_MODULE_1__["cloneElement"].apply(react__WEBPACK_IMPORTED_MODULE_1__, [element, elementProps].concat(children));
}

var MemoedTouchableWithoutFeedback = react__WEBPACK_IMPORTED_MODULE_1__["memo"](react__WEBPACK_IMPORTED_MODULE_1__["forwardRef"](TouchableWithoutFeedback));
MemoedTouchableWithoutFeedback.displayName = 'TouchableWithoutFeedback';
/* harmony default export */ __webpack_exports__["a"] = (MemoedTouchableWithoutFeedback);

/***/ }),

/***/ "eHYQ":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("pVnL");
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("lSNA");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("q1tI");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_native_web_dist_exports_Image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("uXPr");
/* harmony import */ var gatsby__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("Wbzz");
function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);if(enumerableOnly)symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable;});keys.push.apply(keys,symbols);}return keys;}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=arguments[i]!=null?arguments[i]:{};if(i%2){ownKeys(Object(source),true).forEach(function(key){_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(target,key,source[key]);});}else if(Object.getOwnPropertyDescriptors){Object.defineProperties(target,Object.getOwnPropertyDescriptors(source));}else{ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key));});}}return target;}var Image=function Image(props){var source=props.source;if(source&&source.uri){source=_objectSpread(_objectSpread({},source),{},{uri:Object(gatsby__WEBPACK_IMPORTED_MODULE_4__["withPrefix"])(source.uri)});}return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_native_web_dist_exports_Image__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"],_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({},props,{source:source}));};/* harmony default export */ __webpack_exports__["a"] = (Image);

/***/ }),

/***/ "fhzG":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */


var React = __webpack_require__("q1tI");

var factory = __webpack_require__("lT4e");

if (typeof React === 'undefined') {
  throw Error('create-react-class could not find the React object. If you are using script tags, ' + 'make sure that React is being loaded before create-react-class.');
} // Hack to grab NoopUpdateQueue from isomorphic React


var ReactNoopUpdateQueue = new React.Component().updater;
module.exports = factory(React.Component, React.isValidElement, ReactNoopUpdateQueue);

/***/ }),

/***/ "g7Tt":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {/* harmony import */ var _Animation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("ARf8");
/* harmony import */ var _SpringConfig__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("RzDr");
/* harmony import */ var fbjs_lib_invariant__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("2NuI");
/* harmony import */ var fbjs_lib_invariant__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(fbjs_lib_invariant__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _NativeAnimatedHelper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("HBEB");


function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  subClass.__proto__ = superClass;
}








var SpringAnimation = function (_Animation) {
  _inheritsLoose(SpringAnimation, _Animation);

  function SpringAnimation(config) {
    var _config$overshootClam, _config$restDisplacem, _config$restSpeedThre, _config$velocity, _config$velocity2, _config$delay, _config$isInteraction, _config$iterations;

    var _this;

    _this = _Animation.call(this) || this;
    _this._overshootClamping = (_config$overshootClam = config.overshootClamping) !== null && _config$overshootClam !== void 0 ? _config$overshootClam : false;
    _this._restDisplacementThreshold = (_config$restDisplacem = config.restDisplacementThreshold) !== null && _config$restDisplacem !== void 0 ? _config$restDisplacem : 0.001;
    _this._restSpeedThreshold = (_config$restSpeedThre = config.restSpeedThreshold) !== null && _config$restSpeedThre !== void 0 ? _config$restSpeedThre : 0.001;
    _this._initialVelocity = (_config$velocity = config.velocity) !== null && _config$velocity !== void 0 ? _config$velocity : 0;
    _this._lastVelocity = (_config$velocity2 = config.velocity) !== null && _config$velocity2 !== void 0 ? _config$velocity2 : 0;
    _this._toValue = config.toValue;
    _this._delay = (_config$delay = config.delay) !== null && _config$delay !== void 0 ? _config$delay : 0;
    _this._useNativeDriver = Object(_NativeAnimatedHelper__WEBPACK_IMPORTED_MODULE_3__[/* shouldUseNativeDriver */ "c"])(config);
    _this.__isInteraction = (_config$isInteraction = config.isInteraction) !== null && _config$isInteraction !== void 0 ? _config$isInteraction : !_this._useNativeDriver;
    _this.__iterations = (_config$iterations = config.iterations) !== null && _config$iterations !== void 0 ? _config$iterations : 1;

    if (config.stiffness !== undefined || config.damping !== undefined || config.mass !== undefined) {
      var _config$stiffness, _config$damping, _config$mass;

      fbjs_lib_invariant__WEBPACK_IMPORTED_MODULE_2___default()(config.bounciness === undefined && config.speed === undefined && config.tension === undefined && config.friction === undefined, 'You can define one of bounciness/speed, tension/friction, or stiffness/damping/mass, but not more than one');
      _this._stiffness = (_config$stiffness = config.stiffness) !== null && _config$stiffness !== void 0 ? _config$stiffness : 100;
      _this._damping = (_config$damping = config.damping) !== null && _config$damping !== void 0 ? _config$damping : 10;
      _this._mass = (_config$mass = config.mass) !== null && _config$mass !== void 0 ? _config$mass : 1;
    } else if (config.bounciness !== undefined || config.speed !== undefined) {
      var _config$bounciness, _config$speed;

      fbjs_lib_invariant__WEBPACK_IMPORTED_MODULE_2___default()(config.tension === undefined && config.friction === undefined && config.stiffness === undefined && config.damping === undefined && config.mass === undefined, 'You can define one of bounciness/speed, tension/friction, or stiffness/damping/mass, but not more than one');
      var springConfig = _SpringConfig__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].fromBouncinessAndSpeed((_config$bounciness = config.bounciness) !== null && _config$bounciness !== void 0 ? _config$bounciness : 8, (_config$speed = config.speed) !== null && _config$speed !== void 0 ? _config$speed : 12);
      _this._stiffness = springConfig.stiffness;
      _this._damping = springConfig.damping;
      _this._mass = 1;
    } else {
      var _config$tension, _config$friction;

      var _springConfig = _SpringConfig__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].fromOrigamiTensionAndFriction((_config$tension = config.tension) !== null && _config$tension !== void 0 ? _config$tension : 40, (_config$friction = config.friction) !== null && _config$friction !== void 0 ? _config$friction : 7);

      _this._stiffness = _springConfig.stiffness;
      _this._damping = _springConfig.damping;
      _this._mass = 1;
    }

    fbjs_lib_invariant__WEBPACK_IMPORTED_MODULE_2___default()(_this._stiffness > 0, 'Stiffness value must be greater than 0');
    fbjs_lib_invariant__WEBPACK_IMPORTED_MODULE_2___default()(_this._damping > 0, 'Damping value must be greater than 0');
    fbjs_lib_invariant__WEBPACK_IMPORTED_MODULE_2___default()(_this._mass > 0, 'Mass value must be greater than 0');
    return _this;
  }

  var _proto = SpringAnimation.prototype;

  _proto.__getNativeAnimationConfig = function __getNativeAnimationConfig() {
    var _this$_initialVelocit;

    return {
      type: 'spring',
      overshootClamping: this._overshootClamping,
      restDisplacementThreshold: this._restDisplacementThreshold,
      restSpeedThreshold: this._restSpeedThreshold,
      stiffness: this._stiffness,
      damping: this._damping,
      mass: this._mass,
      initialVelocity: (_this$_initialVelocit = this._initialVelocity) !== null && _this$_initialVelocit !== void 0 ? _this$_initialVelocit : this._lastVelocity,
      toValue: this._toValue,
      iterations: this.__iterations
    };
  };

  _proto.start = function start(fromValue, onUpdate, onEnd, previousAnimation, animatedValue) {
    var _this2 = this;

    this.__active = true;
    this._startPosition = fromValue;
    this._lastPosition = this._startPosition;
    this._onUpdate = onUpdate;
    this.__onEnd = onEnd;
    this._lastTime = Date.now();
    this._frameTime = 0.0;

    if (previousAnimation instanceof SpringAnimation) {
      var internalState = previousAnimation.getInternalState();
      this._lastPosition = internalState.lastPosition;
      this._lastVelocity = internalState.lastVelocity;
      this._initialVelocity = this._lastVelocity;
      this._lastTime = internalState.lastTime;
    }

    var start = function start() {
      if (_this2._useNativeDriver) {
        _this2.__startNativeAnimation(animatedValue);
      } else {
        _this2.onUpdate();
      }
    };

    if (this._delay) {
      this._timeout = setTimeout(start, this._delay);
    } else {
      start();
    }
  };

  _proto.getInternalState = function getInternalState() {
    return {
      lastPosition: this._lastPosition,
      lastVelocity: this._lastVelocity,
      lastTime: this._lastTime
    };
  };

  _proto.onUpdate = function onUpdate() {
    var MAX_STEPS = 64;
    var now = Date.now();

    if (now > this._lastTime + MAX_STEPS) {
      now = this._lastTime + MAX_STEPS;
    }

    var deltaTime = (now - this._lastTime) / 1000;
    this._frameTime += deltaTime;
    var c = this._damping;
    var m = this._mass;
    var k = this._stiffness;
    var v0 = -this._initialVelocity;
    var zeta = c / (2 * Math.sqrt(k * m));
    var omega0 = Math.sqrt(k / m);
    var omega1 = omega0 * Math.sqrt(1.0 - zeta * zeta);
    var x0 = this._toValue - this._startPosition;
    var position = 0.0;
    var velocity = 0.0;
    var t = this._frameTime;

    if (zeta < 1) {
      var envelope = Math.exp(-zeta * omega0 * t);
      position = this._toValue - envelope * ((v0 + zeta * omega0 * x0) / omega1 * Math.sin(omega1 * t) + x0 * Math.cos(omega1 * t));
      velocity = zeta * omega0 * envelope * (Math.sin(omega1 * t) * (v0 + zeta * omega0 * x0) / omega1 + x0 * Math.cos(omega1 * t)) - envelope * (Math.cos(omega1 * t) * (v0 + zeta * omega0 * x0) - omega1 * x0 * Math.sin(omega1 * t));
    } else {
      var _envelope = Math.exp(-omega0 * t);

      position = this._toValue - _envelope * (x0 + (v0 + omega0 * x0) * t);
      velocity = _envelope * (v0 * (t * omega0 - 1) + t * x0 * (omega0 * omega0));
    }

    this._lastTime = now;
    this._lastPosition = position;
    this._lastVelocity = velocity;

    this._onUpdate(position);

    if (!this.__active) {
      return;
    }

    var isOvershooting = false;

    if (this._overshootClamping && this._stiffness !== 0) {
      if (this._startPosition < this._toValue) {
        isOvershooting = position > this._toValue;
      } else {
        isOvershooting = position < this._toValue;
      }
    }

    var isVelocity = Math.abs(velocity) <= this._restSpeedThreshold;

    var isDisplacement = true;

    if (this._stiffness !== 0) {
      isDisplacement = Math.abs(this._toValue - position) <= this._restDisplacementThreshold;
    }

    if (isOvershooting || isVelocity && isDisplacement) {
      if (this._stiffness !== 0) {
        this._lastPosition = this._toValue;
        this._lastVelocity = 0;

        this._onUpdate(this._toValue);
      }

      this.__debouncedOnEnd({
        finished: true
      });

      return;
    }

    this._animationFrame = requestAnimationFrame(this.onUpdate.bind(this));
  };

  _proto.stop = function stop() {
    _Animation.prototype.stop.call(this);

    this.__active = false;
    clearTimeout(this._timeout);
    global.cancelAnimationFrame(this._animationFrame);

    this.__debouncedOnEnd({
      finished: false
    });
  };

  return SpringAnimation;
}(_Animation__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"]);

/* harmony default export */ __webpack_exports__["a"] = (SpringAnimation);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("eKGF")))

/***/ }),

/***/ "kBdY":
/***/ (function(module, exports, __webpack_require__) {

var Path = __webpack_require__("RYSQ");
/**
 *
 * @param {Object} o
 * @param {String} path
 * @returns {*}
 */


module.exports = function (o, path) {
  if (typeof path !== 'string') {
    throw new TypeError('path must be a string');
  }

  if (typeof o !== 'object') {
    throw new TypeError('object must be passed');
  }

  var pathObj = Path.get(path);

  if (!pathObj.valid) {
    throw new Error('path is not a valid object path');
  }

  return pathObj.getValueFrom(o);
};

/***/ }),

/***/ "lT4e":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */


var _assign = __webpack_require__("YVoz"); // -- Inlined from fbjs --


var emptyObject = {};

if (false) {}

var validateFormat = function validateFormat(format) {};

if (false) {}

function _invariant(condition, format, a, b, c, d, e, f) {
  validateFormat(format);

  if (!condition) {
    var error;

    if (format === undefined) {
      error = new Error('Minified exception occurred; use the non-minified dev environment ' + 'for the full error message and additional helpful warnings.');
    } else {
      var args = [a, b, c, d, e, f];
      var argIndex = 0;
      error = new Error(format.replace(/%s/g, function () {
        return args[argIndex++];
      }));
      error.name = 'Invariant Violation';
    }

    error.framesToPop = 1; // we don't care about invariant's own frame

    throw error;
  }
}

var warning = function warning() {};

if (false) { var printWarning; } // /-- Inlined from fbjs --


var MIXINS_KEY = 'mixins'; // Helper function to allow the creation of anonymous functions which do not
// have .name set to the name of the variable being assigned to.

function identity(fn) {
  return fn;
}

var ReactPropTypeLocationNames;

if (false) {} else {
  ReactPropTypeLocationNames = {};
}

function factory(ReactComponent, isValidElement, ReactNoopUpdateQueue) {
  /**
   * Policies that describe methods in `ReactClassInterface`.
   */
  var injectedMixins = [];
  /**
   * Composite components are higher-level components that compose other composite
   * or host components.
   *
   * To create a new type of `ReactClass`, pass a specification of
   * your new class to `React.createClass`. The only requirement of your class
   * specification is that you implement a `render` method.
   *
   *   var MyComponent = React.createClass({
   *     render: function() {
   *       return <div>Hello World</div>;
   *     }
   *   });
   *
   * The class specification supports a specific protocol of methods that have
   * special meaning (e.g. `render`). See `ReactClassInterface` for
   * more the comprehensive protocol. Any other properties and methods in the
   * class specification will be available on the prototype.
   *
   * @interface ReactClassInterface
   * @internal
   */

  var ReactClassInterface = {
    /**
     * An array of Mixin objects to include when defining your component.
     *
     * @type {array}
     * @optional
     */
    mixins: 'DEFINE_MANY',

    /**
     * An object containing properties and methods that should be defined on
     * the component's constructor instead of its prototype (static methods).
     *
     * @type {object}
     * @optional
     */
    statics: 'DEFINE_MANY',

    /**
     * Definition of prop types for this component.
     *
     * @type {object}
     * @optional
     */
    propTypes: 'DEFINE_MANY',

    /**
     * Definition of context types for this component.
     *
     * @type {object}
     * @optional
     */
    contextTypes: 'DEFINE_MANY',

    /**
     * Definition of context types this component sets for its children.
     *
     * @type {object}
     * @optional
     */
    childContextTypes: 'DEFINE_MANY',
    // ==== Definition methods ====

    /**
     * Invoked when the component is mounted. Values in the mapping will be set on
     * `this.props` if that prop is not specified (i.e. using an `in` check).
     *
     * This method is invoked before `getInitialState` and therefore cannot rely
     * on `this.state` or use `this.setState`.
     *
     * @return {object}
     * @optional
     */
    getDefaultProps: 'DEFINE_MANY_MERGED',

    /**
     * Invoked once before the component is mounted. The return value will be used
     * as the initial value of `this.state`.
     *
     *   getInitialState: function() {
     *     return {
     *       isOn: false,
     *       fooBaz: new BazFoo()
     *     }
     *   }
     *
     * @return {object}
     * @optional
     */
    getInitialState: 'DEFINE_MANY_MERGED',

    /**
     * @return {object}
     * @optional
     */
    getChildContext: 'DEFINE_MANY_MERGED',

    /**
     * Uses props from `this.props` and state from `this.state` to render the
     * structure of the component.
     *
     * No guarantees are made about when or how often this method is invoked, so
     * it must not have side effects.
     *
     *   render: function() {
     *     var name = this.props.name;
     *     return <div>Hello, {name}!</div>;
     *   }
     *
     * @return {ReactComponent}
     * @required
     */
    render: 'DEFINE_ONCE',
    // ==== Delegate methods ====

    /**
     * Invoked when the component is initially created and about to be mounted.
     * This may have side effects, but any external subscriptions or data created
     * by this method must be cleaned up in `componentWillUnmount`.
     *
     * @optional
     */
    componentWillMount: 'DEFINE_MANY',

    /**
     * Invoked when the component has been mounted and has a DOM representation.
     * However, there is no guarantee that the DOM node is in the document.
     *
     * Use this as an opportunity to operate on the DOM when the component has
     * been mounted (initialized and rendered) for the first time.
     *
     * @param {DOMElement} rootNode DOM element representing the component.
     * @optional
     */
    componentDidMount: 'DEFINE_MANY',

    /**
     * Invoked before the component receives new props.
     *
     * Use this as an opportunity to react to a prop transition by updating the
     * state using `this.setState`. Current props are accessed via `this.props`.
     *
     *   componentWillReceiveProps: function(nextProps, nextContext) {
     *     this.setState({
     *       likesIncreasing: nextProps.likeCount > this.props.likeCount
     *     });
     *   }
     *
     * NOTE: There is no equivalent `componentWillReceiveState`. An incoming prop
     * transition may cause a state change, but the opposite is not true. If you
     * need it, you are probably looking for `componentWillUpdate`.
     *
     * @param {object} nextProps
     * @optional
     */
    componentWillReceiveProps: 'DEFINE_MANY',

    /**
     * Invoked while deciding if the component should be updated as a result of
     * receiving new props, state and/or context.
     *
     * Use this as an opportunity to `return false` when you're certain that the
     * transition to the new props/state/context will not require a component
     * update.
     *
     *   shouldComponentUpdate: function(nextProps, nextState, nextContext) {
     *     return !equal(nextProps, this.props) ||
     *       !equal(nextState, this.state) ||
     *       !equal(nextContext, this.context);
     *   }
     *
     * @param {object} nextProps
     * @param {?object} nextState
     * @param {?object} nextContext
     * @return {boolean} True if the component should update.
     * @optional
     */
    shouldComponentUpdate: 'DEFINE_ONCE',

    /**
     * Invoked when the component is about to update due to a transition from
     * `this.props`, `this.state` and `this.context` to `nextProps`, `nextState`
     * and `nextContext`.
     *
     * Use this as an opportunity to perform preparation before an update occurs.
     *
     * NOTE: You **cannot** use `this.setState()` in this method.
     *
     * @param {object} nextProps
     * @param {?object} nextState
     * @param {?object} nextContext
     * @param {ReactReconcileTransaction} transaction
     * @optional
     */
    componentWillUpdate: 'DEFINE_MANY',

    /**
     * Invoked when the component's DOM representation has been updated.
     *
     * Use this as an opportunity to operate on the DOM when the component has
     * been updated.
     *
     * @param {object} prevProps
     * @param {?object} prevState
     * @param {?object} prevContext
     * @param {DOMElement} rootNode DOM element representing the component.
     * @optional
     */
    componentDidUpdate: 'DEFINE_MANY',

    /**
     * Invoked when the component is about to be removed from its parent and have
     * its DOM representation destroyed.
     *
     * Use this as an opportunity to deallocate any external resources.
     *
     * NOTE: There is no `componentDidUnmount` since your component will have been
     * destroyed by that point.
     *
     * @optional
     */
    componentWillUnmount: 'DEFINE_MANY',

    /**
     * Replacement for (deprecated) `componentWillMount`.
     *
     * @optional
     */
    UNSAFE_componentWillMount: 'DEFINE_MANY',

    /**
     * Replacement for (deprecated) `componentWillReceiveProps`.
     *
     * @optional
     */
    UNSAFE_componentWillReceiveProps: 'DEFINE_MANY',

    /**
     * Replacement for (deprecated) `componentWillUpdate`.
     *
     * @optional
     */
    UNSAFE_componentWillUpdate: 'DEFINE_MANY',
    // ==== Advanced methods ====

    /**
     * Updates the component's currently mounted DOM representation.
     *
     * By default, this implements React's rendering and reconciliation algorithm.
     * Sophisticated clients may wish to override this.
     *
     * @param {ReactReconcileTransaction} transaction
     * @internal
     * @overridable
     */
    updateComponent: 'OVERRIDE_BASE'
  };
  /**
   * Similar to ReactClassInterface but for static methods.
   */

  var ReactClassStaticInterface = {
    /**
     * This method is invoked after a component is instantiated and when it
     * receives new props. Return an object to update state in response to
     * prop changes. Return null to indicate no change to state.
     *
     * If an object is returned, its keys will be merged into the existing state.
     *
     * @return {object || null}
     * @optional
     */
    getDerivedStateFromProps: 'DEFINE_MANY_MERGED'
  };
  /**
   * Mapping from class specification keys to special processing functions.
   *
   * Although these are declared like instance properties in the specification
   * when defining classes using `React.createClass`, they are actually static
   * and are accessible on the constructor instead of the prototype. Despite
   * being static, they must be defined outside of the "statics" key under
   * which all other static methods are defined.
   */

  var RESERVED_SPEC_KEYS = {
    displayName: function displayName(Constructor, _displayName) {
      Constructor.displayName = _displayName;
    },
    mixins: function mixins(Constructor, _mixins) {
      if (_mixins) {
        for (var i = 0; i < _mixins.length; i++) {
          mixSpecIntoComponent(Constructor, _mixins[i]);
        }
      }
    },
    childContextTypes: function childContextTypes(Constructor, _childContextTypes) {
      if (false) {}

      Constructor.childContextTypes = _assign({}, Constructor.childContextTypes, _childContextTypes);
    },
    contextTypes: function contextTypes(Constructor, _contextTypes) {
      if (false) {}

      Constructor.contextTypes = _assign({}, Constructor.contextTypes, _contextTypes);
    },

    /**
     * Special case getDefaultProps which should move into statics but requires
     * automatic merging.
     */
    getDefaultProps: function getDefaultProps(Constructor, _getDefaultProps) {
      if (Constructor.getDefaultProps) {
        Constructor.getDefaultProps = createMergedResultFunction(Constructor.getDefaultProps, _getDefaultProps);
      } else {
        Constructor.getDefaultProps = _getDefaultProps;
      }
    },
    propTypes: function propTypes(Constructor, _propTypes) {
      if (false) {}

      Constructor.propTypes = _assign({}, Constructor.propTypes, _propTypes);
    },
    statics: function statics(Constructor, _statics) {
      mixStaticSpecIntoComponent(Constructor, _statics);
    },
    autobind: function autobind() {}
  };

  function validateTypeDef(Constructor, typeDef, location) {
    for (var propName in typeDef) {
      if (typeDef.hasOwnProperty(propName)) {
        // use a warning instead of an _invariant so components
        // don't show up in prod but only in __DEV__
        if (false) {}
      }
    }
  }

  function validateMethodOverride(isAlreadyDefined, name) {
    var specPolicy = ReactClassInterface.hasOwnProperty(name) ? ReactClassInterface[name] : null; // Disallow overriding of base class methods unless explicitly allowed.

    if (ReactClassMixin.hasOwnProperty(name)) {
      _invariant(specPolicy === 'OVERRIDE_BASE', 'ReactClassInterface: You are attempting to override ' + '`%s` from your class specification. Ensure that your method names ' + 'do not overlap with React methods.', name);
    } // Disallow defining methods more than once unless explicitly allowed.


    if (isAlreadyDefined) {
      _invariant(specPolicy === 'DEFINE_MANY' || specPolicy === 'DEFINE_MANY_MERGED', 'ReactClassInterface: You are attempting to define ' + '`%s` on your component more than once. This conflict may be due ' + 'to a mixin.', name);
    }
  }
  /**
   * Mixin helper which handles policy validation and reserved
   * specification keys when building React classes.
   */


  function mixSpecIntoComponent(Constructor, spec) {
    if (!spec) {
      if (false) { var isMixinValid, typeofSpec; }

      return;
    }

    _invariant(typeof spec !== 'function', "ReactClass: You're attempting to " + 'use a component class or function as a mixin. Instead, just use a ' + 'regular object.');

    _invariant(!isValidElement(spec), "ReactClass: You're attempting to " + 'use a component as a mixin. Instead, just use a regular object.');

    var proto = Constructor.prototype;
    var autoBindPairs = proto.__reactAutoBindPairs; // By handling mixins before any other properties, we ensure the same
    // chaining order is applied to methods with DEFINE_MANY policy, whether
    // mixins are listed before or after these methods in the spec.

    if (spec.hasOwnProperty(MIXINS_KEY)) {
      RESERVED_SPEC_KEYS.mixins(Constructor, spec.mixins);
    }

    for (var name in spec) {
      if (!spec.hasOwnProperty(name)) {
        continue;
      }

      if (name === MIXINS_KEY) {
        // We have already handled mixins in a special case above.
        continue;
      }

      var property = spec[name];
      var isAlreadyDefined = proto.hasOwnProperty(name);
      validateMethodOverride(isAlreadyDefined, name);

      if (RESERVED_SPEC_KEYS.hasOwnProperty(name)) {
        RESERVED_SPEC_KEYS[name](Constructor, property);
      } else {
        // Setup methods on prototype:
        // The following member methods should not be automatically bound:
        // 1. Expected ReactClass methods (in the "interface").
        // 2. Overridden methods (that were mixed in).
        var isReactClassMethod = ReactClassInterface.hasOwnProperty(name);
        var isFunction = typeof property === 'function';
        var shouldAutoBind = isFunction && !isReactClassMethod && !isAlreadyDefined && spec.autobind !== false;

        if (shouldAutoBind) {
          autoBindPairs.push(name, property);
          proto[name] = property;
        } else {
          if (isAlreadyDefined) {
            var specPolicy = ReactClassInterface[name]; // These cases should already be caught by validateMethodOverride.

            _invariant(isReactClassMethod && (specPolicy === 'DEFINE_MANY_MERGED' || specPolicy === 'DEFINE_MANY'), 'ReactClass: Unexpected spec policy %s for key %s ' + 'when mixing in component specs.', specPolicy, name); // For methods which are defined more than once, call the existing
            // methods before calling the new property, merging if appropriate.


            if (specPolicy === 'DEFINE_MANY_MERGED') {
              proto[name] = createMergedResultFunction(proto[name], property);
            } else if (specPolicy === 'DEFINE_MANY') {
              proto[name] = createChainedFunction(proto[name], property);
            }
          } else {
            proto[name] = property;

            if (false) {}
          }
        }
      }
    }
  }

  function mixStaticSpecIntoComponent(Constructor, statics) {
    if (!statics) {
      return;
    }

    for (var name in statics) {
      var property = statics[name];

      if (!statics.hasOwnProperty(name)) {
        continue;
      }

      var isReserved = (name in RESERVED_SPEC_KEYS);

      _invariant(!isReserved, 'ReactClass: You are attempting to define a reserved ' + 'property, `%s`, that shouldn\'t be on the "statics" key. Define it ' + 'as an instance property instead; it will still be accessible on the ' + 'constructor.', name);

      var isAlreadyDefined = (name in Constructor);

      if (isAlreadyDefined) {
        var specPolicy = ReactClassStaticInterface.hasOwnProperty(name) ? ReactClassStaticInterface[name] : null;

        _invariant(specPolicy === 'DEFINE_MANY_MERGED', 'ReactClass: You are attempting to define ' + '`%s` on your component more than once. This conflict may be ' + 'due to a mixin.', name);

        Constructor[name] = createMergedResultFunction(Constructor[name], property);
        return;
      }

      Constructor[name] = property;
    }
  }
  /**
   * Merge two objects, but throw if both contain the same key.
   *
   * @param {object} one The first object, which is mutated.
   * @param {object} two The second object
   * @return {object} one after it has been mutated to contain everything in two.
   */


  function mergeIntoWithNoDuplicateKeys(one, two) {
    _invariant(one && two && typeof one === 'object' && typeof two === 'object', 'mergeIntoWithNoDuplicateKeys(): Cannot merge non-objects.');

    for (var key in two) {
      if (two.hasOwnProperty(key)) {
        _invariant(one[key] === undefined, 'mergeIntoWithNoDuplicateKeys(): ' + 'Tried to merge two objects with the same key: `%s`. This conflict ' + 'may be due to a mixin; in particular, this may be caused by two ' + 'getInitialState() or getDefaultProps() methods returning objects ' + 'with clashing keys.', key);

        one[key] = two[key];
      }
    }

    return one;
  }
  /**
   * Creates a function that invokes two functions and merges their return values.
   *
   * @param {function} one Function to invoke first.
   * @param {function} two Function to invoke second.
   * @return {function} Function that invokes the two argument functions.
   * @private
   */


  function createMergedResultFunction(one, two) {
    return function mergedResult() {
      var a = one.apply(this, arguments);
      var b = two.apply(this, arguments);

      if (a == null) {
        return b;
      } else if (b == null) {
        return a;
      }

      var c = {};
      mergeIntoWithNoDuplicateKeys(c, a);
      mergeIntoWithNoDuplicateKeys(c, b);
      return c;
    };
  }
  /**
   * Creates a function that invokes two functions and ignores their return vales.
   *
   * @param {function} one Function to invoke first.
   * @param {function} two Function to invoke second.
   * @return {function} Function that invokes the two argument functions.
   * @private
   */


  function createChainedFunction(one, two) {
    return function chainedFunction() {
      one.apply(this, arguments);
      two.apply(this, arguments);
    };
  }
  /**
   * Binds a method to the component.
   *
   * @param {object} component Component whose method is going to be bound.
   * @param {function} method Method to be bound.
   * @return {function} The bound method.
   */


  function bindAutoBindMethod(component, method) {
    var boundMethod = method.bind(component);

    if (false) { var _bind, componentName; }

    return boundMethod;
  }
  /**
   * Binds all auto-bound methods in a component.
   *
   * @param {object} component Component whose method is going to be bound.
   */


  function bindAutoBindMethods(component) {
    var pairs = component.__reactAutoBindPairs;

    for (var i = 0; i < pairs.length; i += 2) {
      var autoBindKey = pairs[i];
      var method = pairs[i + 1];
      component[autoBindKey] = bindAutoBindMethod(component, method);
    }
  }

  var IsMountedPreMixin = {
    componentDidMount: function componentDidMount() {
      this.__isMounted = true;
    }
  };
  var IsMountedPostMixin = {
    componentWillUnmount: function componentWillUnmount() {
      this.__isMounted = false;
    }
  };
  /**
   * Add more to the ReactClass base class. These are all legacy features and
   * therefore not already part of the modern ReactComponent.
   */

  var ReactClassMixin = {
    /**
     * TODO: This will be deprecated because state should always keep a consistent
     * type signature and the only use case for this, is to avoid that.
     */
    replaceState: function replaceState(newState, callback) {
      this.updater.enqueueReplaceState(this, newState, callback);
    },

    /**
     * Checks whether or not this composite component is mounted.
     * @return {boolean} True if mounted, false otherwise.
     * @protected
     * @final
     */
    isMounted: function isMounted() {
      if (false) {}

      return !!this.__isMounted;
    }
  };

  var ReactClassComponent = function ReactClassComponent() {};

  _assign(ReactClassComponent.prototype, ReactComponent.prototype, ReactClassMixin);
  /**
   * Creates a composite component class given a class specification.
   * See https://facebook.github.io/react/docs/top-level-api.html#react.createclass
   *
   * @param {object} spec Class specification (which must define `render`).
   * @return {function} Component constructor function.
   * @public
   */


  function createClass(spec) {
    // To keep our warnings more understandable, we'll use a little hack here to
    // ensure that Constructor.name !== 'Constructor'. This makes sure we don't
    // unnecessarily identify a class without displayName as 'Constructor'.
    var Constructor = identity(function (props, context, updater) {
      // This constructor gets overridden by mocks. The argument is used
      // by mocks to assert on what gets mounted.
      if (false) {} // Wire up auto-binding


      if (this.__reactAutoBindPairs.length) {
        bindAutoBindMethods(this);
      }

      this.props = props;
      this.context = context;
      this.refs = emptyObject;
      this.updater = updater || ReactNoopUpdateQueue;
      this.state = null; // ReactClasses doesn't have constructors. Instead, they use the
      // getInitialState and componentWillMount methods for initialization.

      var initialState = this.getInitialState ? this.getInitialState() : null;

      if (false) {}

      _invariant(typeof initialState === 'object' && !Array.isArray(initialState), '%s.getInitialState(): must return an object or null', Constructor.displayName || 'ReactCompositeComponent');

      this.state = initialState;
    });
    Constructor.prototype = new ReactClassComponent();
    Constructor.prototype.constructor = Constructor;
    Constructor.prototype.__reactAutoBindPairs = [];
    injectedMixins.forEach(mixSpecIntoComponent.bind(null, Constructor));
    mixSpecIntoComponent(Constructor, IsMountedPreMixin);
    mixSpecIntoComponent(Constructor, spec);
    mixSpecIntoComponent(Constructor, IsMountedPostMixin); // Initialize the defaultProps property after all mixins have been merged.

    if (Constructor.getDefaultProps) {
      Constructor.defaultProps = Constructor.getDefaultProps();
    }

    if (false) {}

    _invariant(Constructor.prototype.render, 'createClass(...): Class specification must implement a `render` method.');

    if (false) {} // Reduce time spent doing lookups by setting these on the prototype.


    for (var methodName in ReactClassInterface) {
      if (!Constructor.prototype[methodName]) {
        Constructor.prototype[methodName] = null;
      }
    }

    return Constructor;
  }

  return createClass;
}

module.exports = factory;

/***/ }),

/***/ "lnzl":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("pVnL");
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("QILm");
/* harmony import */ var _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("q1tI");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var gatsby_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("+ZDr");
/* harmony import */ var gatsby_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(gatsby_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_native_web_dist_exports_StyleSheet_styleResolver__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("TgPG");
var GatsbyLink=function GatsbyLink(props){var style=props.style,activeStyle=props.activeStyle,activeClassName=props.activeClassName,rest=_babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1___default()(props,["style","activeStyle","activeClassName"]);var objForClassName={};if(typeof style!=='undefined'){var _ref=react_native_web_dist_exports_StyleSheet_styleResolver__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"].resolve(style)||{},className=_ref.className;objForClassName.className=className;}if(typeof activeStyle!=='undefined'){var _ref2=react_native_web_dist_exports_StyleSheet_styleResolver__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"].resolve(activeStyle)||{},_className=_ref2.className;objForClassName.activeClassName=_className;}return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(gatsby_link__WEBPACK_IMPORTED_MODULE_3___default.a,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({},objForClassName,rest));};/* harmony default export */ __webpack_exports__["a"] = (GatsbyLink);

/***/ }),

/***/ "nBU6":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* reexport */ useMediaQuery; });

// UNUSED EXPORTS: flush

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/defineProperty.js
var defineProperty = __webpack_require__("lSNA");
var defineProperty_default = /*#__PURE__*/__webpack_require__.n(defineProperty);

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__("q1tI");
var react_default = /*#__PURE__*/__webpack_require__.n(react);

// CONCATENATED MODULE: ./node_modules/react-native-media-query/inject.js

var rules = {};
var styleSheet;

if (typeof window !== 'undefined') {
  styleSheet = function () {
    var style = document.createElement('style');
    style.id = 'RNMQCSS';
    style.appendChild(document.createTextNode(''));
    document.head.appendChild(style);
    return style.sheet;
  }();
}

var setRule = function setRule(id, text) {
  if (!hasRule(id, text)) {
    var _rules$id;

    rules[id] = (rules == null ? void 0 : rules[id]) || {};
    rules[id].text = (((_rules$id = rules[id]) == null ? void 0 : _rules$id.text) || '') + text;

    if (styleSheet) {
      styleSheet.insertRule(text);
    }
  }
};
var hasRule = function hasRule(id, text) {
  var _rules$id$text;

  return !!rules[id] && !!((_rules$id$text = rules[id].text) != null && _rules$id$text.includes != null && _rules$id$text.includes(text));
};
var inject_flush = function flush() {
  return react_default.a.createElement('style', {
    id: 'rnmq',
    key: 'rnmq',
    dangerouslySetInnerHTML: {
      __html: Object.keys(rules).map(function (key) {
        return rules[key].text;
      }).join('\n')
    }
  });
};
// EXTERNAL MODULE: ./node_modules/react-native-web/dist/exports/StyleSheet/createReactDOMStyle.js
var createReactDOMStyle = __webpack_require__("kNQG");

// EXTERNAL MODULE: ./node_modules/react-native-web/dist/modules/prefixStyles/index.js + 1 modules
var prefixStyles = __webpack_require__("hFhQ");

// CONCATENATED MODULE: ./node_modules/react-native-media-query/utils/hyphenate-style-name.js
var uppercasePattern = /[A-Z]/g;
var msPattern = /^ms-/;
var cache = {};

var toHyphenLower = function toHyphenLower(match) {
  return '-' + match.toLowerCase();
};

var hyphenateStyleName = function hyphenateStyleName(name) {
  if (cache.hasOwnProperty(name)) {
    return cache[name];
  }

  var hName = name.replace(uppercasePattern, toHyphenLower);
  return cache[name] = msPattern.test(hName) ? '-' + hName : hName;
};

/* harmony default export */ var hyphenate_style_name = (hyphenateStyleName);
// CONCATENATED MODULE: ./node_modules/react-native-media-query/utils/create-declaration-block.js




var create_declaration_block_createDeclarationBlock = function createDeclarationBlock(style) {
  var domStyle = Object(prefixStyles["a" /* default */])(Object(createReactDOMStyle["a" /* default */])(style));
  var declarationsString = Object.keys(domStyle).map(function (property) {
    var value = domStyle[property];
    var prop = hyphenate_style_name(property);

    if (Array.isArray(value)) {
      return value.map(function (v) {
        return prop + ":" + v;
      }).join(';');
    } else {
      return prop + ":" + value + " !important";
    }
  }).sort().join(';');
  return "{" + declarationsString + ";}";
};

/* harmony default export */ var create_declaration_block = (create_declaration_block_createDeclarationBlock);
// EXTERNAL MODULE: ./node_modules/string-hash/index.js
var string_hash = __webpack_require__("9kyW");
var string_hash_default = /*#__PURE__*/__webpack_require__.n(string_hash);

// CONCATENATED MODULE: ./node_modules/react-native-media-query/useMediaQuery/index.web.js


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





var isMedia = function isMedia(str) {
  return str.indexOf('@media') === 0;
};

var isHover = function isHover(str) {
  return str.indexOf(':hover') === 0;
};

var index_web_createStyle = function createStyle(stylesWithQuery) {
  var ids = {};
  var cleanStyles = JSON.parse(JSON.stringify(stylesWithQuery));
  Object.keys(stylesWithQuery).map(function (key) {
    Object.keys(stylesWithQuery[key]).filter(function (k) {
      return isMedia(k) || isHover(k);
    }).map(function (query) {
      var css = create_declaration_block(stylesWithQuery[key][query]);
      var str;
      var hash = "rnmq-" + string_hash_default()("" + key + query + css);

      if (isMedia(query)) {
        str = query + " {[data-media~=\"" + hash + "\"] " + css + "}";
      }

      if (isHover(query)) {
        str = "[data-media~=\"" + hash + "\"]" + query + " " + css;
      }

      ids = _objectSpread(_objectSpread({}, ids), {}, defineProperty_default()({}, key, hash));
      setRule("" + hash, str);
      delete cleanStyles[key][query];
    });
  });
  return {
    ids: ids,
    cleanStyles: cleanStyles
  };
};

var useMediaQuery = function useMediaQuery(stylesWithQuery) {
  var _createStyle = index_web_createStyle(stylesWithQuery),
      ids = _createStyle.ids,
      cleanStyles = _createStyle.cleanStyles;

  return [ids, cleanStyles];
};
// CONCATENATED MODULE: ./node_modules/react-native-media-query/index.web.js



/***/ }),

/***/ "nc9g":
/***/ (function(module, exports, __webpack_require__) {

var _interopRequireWildcard = __webpack_require__("284h");

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _exportNames = {};
Object.defineProperty(exports, "default", {
  enumerable: true,
  get: function get() {
    return _ReactNativeSVG.default;
  }
});

var _ReactNativeSVG = _interopRequireWildcard(__webpack_require__("QtD7"));

Object.keys(_ReactNativeSVG).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _ReactNativeSVG[key];
    }
  });
});

/***/ }),

/***/ "ohE5":
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

function makeEmptyFunction(arg) {
  return function () {
    return arg;
  };
}
/**
 * This function accepts and discards inputs; it has no side effects. This is
 * primarily useful idiomatically for overridable function endpoints which
 * always need to be callable, since JS lacks a null-call idiom ala Cocoa.
 */


var emptyFunction = function emptyFunction() {};

emptyFunction.thatReturns = makeEmptyFunction;
emptyFunction.thatReturnsFalse = makeEmptyFunction(false);
emptyFunction.thatReturnsTrue = makeEmptyFunction(true);
emptyFunction.thatReturnsNull = makeEmptyFunction(null);

emptyFunction.thatReturnsThis = function () {
  return this;
};

emptyFunction.thatReturnsArgument = function (arg) {
  return arg;
};

module.exports = emptyFunction;

/***/ }),

/***/ "rHqE":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/react-native-web/dist/vendor/react-native/Animated/bezier.js


var NEWTON_ITERATIONS = 4;
var NEWTON_MIN_SLOPE = 0.001;
var SUBDIVISION_PRECISION = 0.0000001;
var SUBDIVISION_MAX_ITERATIONS = 10;
var kSplineTableSize = 11;
var kSampleStepSize = 1.0 / (kSplineTableSize - 1.0);
var float32ArraySupported = typeof Float32Array === 'function';

function A(aA1, aA2) {
  return 1.0 - 3.0 * aA2 + 3.0 * aA1;
}

function B(aA1, aA2) {
  return 3.0 * aA2 - 6.0 * aA1;
}

function C(aA1) {
  return 3.0 * aA1;
}

function calcBezier(aT, aA1, aA2) {
  return ((A(aA1, aA2) * aT + B(aA1, aA2)) * aT + C(aA1)) * aT;
}

function getSlope(aT, aA1, aA2) {
  return 3.0 * A(aA1, aA2) * aT * aT + 2.0 * B(aA1, aA2) * aT + C(aA1);
}

function binarySubdivide(aX, _aA, _aB, mX1, mX2) {
  var currentX,
      currentT,
      i = 0,
      aA = _aA,
      aB = _aB;

  do {
    currentT = aA + (aB - aA) / 2.0;
    currentX = calcBezier(currentT, mX1, mX2) - aX;

    if (currentX > 0.0) {
      aB = currentT;
    } else {
      aA = currentT;
    }
  } while (Math.abs(currentX) > SUBDIVISION_PRECISION && ++i < SUBDIVISION_MAX_ITERATIONS);

  return currentT;
}

function newtonRaphsonIterate(aX, _aGuessT, mX1, mX2) {
  var aGuessT = _aGuessT;

  for (var i = 0; i < NEWTON_ITERATIONS; ++i) {
    var currentSlope = getSlope(aGuessT, mX1, mX2);

    if (currentSlope === 0.0) {
      return aGuessT;
    }

    var currentX = calcBezier(aGuessT, mX1, mX2) - aX;
    aGuessT -= currentX / currentSlope;
  }

  return aGuessT;
}

function bezier_bezier(mX1, mY1, mX2, mY2) {
  if (!(mX1 >= 0 && mX1 <= 1 && mX2 >= 0 && mX2 <= 1)) {
    throw new Error('bezier x values must be in [0, 1] range');
  }

  var sampleValues = float32ArraySupported ? new Float32Array(kSplineTableSize) : new Array(kSplineTableSize);

  if (mX1 !== mY1 || mX2 !== mY2) {
    for (var i = 0; i < kSplineTableSize; ++i) {
      sampleValues[i] = calcBezier(i * kSampleStepSize, mX1, mX2);
    }
  }

  function getTForX(aX) {
    var intervalStart = 0.0;
    var currentSample = 1;
    var lastSample = kSplineTableSize - 1;

    for (; currentSample !== lastSample && sampleValues[currentSample] <= aX; ++currentSample) {
      intervalStart += kSampleStepSize;
    }

    --currentSample;
    var dist = (aX - sampleValues[currentSample]) / (sampleValues[currentSample + 1] - sampleValues[currentSample]);
    var guessForT = intervalStart + dist * kSampleStepSize;
    var initialSlope = getSlope(guessForT, mX1, mX2);

    if (initialSlope >= NEWTON_MIN_SLOPE) {
      return newtonRaphsonIterate(aX, guessForT, mX1, mX2);
    } else if (initialSlope === 0.0) {
      return guessForT;
    } else {
      return binarySubdivide(aX, intervalStart, intervalStart + kSampleStepSize, mX1, mX2);
    }
  }

  return function BezierEasing(x) {
    if (mX1 === mY1 && mX2 === mY2) {
      return x;
    }

    if (x === 0) {
      return 0;
    }

    if (x === 1) {
      return 1;
    }

    return calcBezier(getTForX(x), mY1, mY2);
  };
}
;
// CONCATENATED MODULE: ./node_modules/react-native-web/dist/vendor/react-native/Animated/Easing.js




var _ease;

var Easing_Easing = function () {
  function Easing() {}

  Easing.step0 = function step0(n) {
    return n > 0 ? 1 : 0;
  };

  Easing.step1 = function step1(n) {
    return n >= 1 ? 1 : 0;
  };

  Easing.linear = function linear(t) {
    return t;
  };

  Easing.ease = function ease(t) {
    if (!_ease) {
      _ease = Easing.bezier(0.42, 0, 1, 1);
    }

    return _ease(t);
  };

  Easing.quad = function quad(t) {
    return t * t;
  };

  Easing.cubic = function cubic(t) {
    return t * t * t;
  };

  Easing.poly = function poly(n) {
    return function (t) {
      return Math.pow(t, n);
    };
  };

  Easing.sin = function sin(t) {
    return 1 - Math.cos(t * Math.PI / 2);
  };

  Easing.circle = function circle(t) {
    return 1 - Math.sqrt(1 - t * t);
  };

  Easing.exp = function exp(t) {
    return Math.pow(2, 10 * (t - 1));
  };

  Easing.elastic = function elastic(bounciness) {
    if (bounciness === void 0) {
      bounciness = 1;
    }

    var p = bounciness * Math.PI;
    return function (t) {
      return 1 - Math.pow(Math.cos(t * Math.PI / 2), 3) * Math.cos(t * p);
    };
  };

  Easing.back = function back(s) {
    if (s === void 0) {
      s = 1.70158;
    }

    return function (t) {
      return t * t * ((s + 1) * t - s);
    };
  };

  Easing.bounce = function bounce(t) {
    if (t < 1 / 2.75) {
      return 7.5625 * t * t;
    }

    if (t < 2 / 2.75) {
      var _t = t - 1.5 / 2.75;

      return 7.5625 * _t * _t + 0.75;
    }

    if (t < 2.5 / 2.75) {
      var _t2 = t - 2.25 / 2.75;

      return 7.5625 * _t2 * _t2 + 0.9375;
    }

    var t2 = t - 2.625 / 2.75;
    return 7.5625 * t2 * t2 + 0.984375;
  };

  Easing.bezier = function bezier(x1, y1, x2, y2) {
    return bezier_bezier(x1, y1, x2, y2);
  };

  Easing.in = function _in(easing) {
    return easing;
  };

  Easing.out = function out(easing) {
    return function (t) {
      return 1 - easing(1 - t);
    };
  };

  Easing.inOut = function inOut(easing) {
    return function (t) {
      if (t < 0.5) {
        return easing(t * 2) / 2;
      }

      return 1 - easing((1 - t) * 2) / 2;
    };
  };

  return Easing;
}();

/* harmony default export */ var Animated_Easing = __webpack_exports__["a"] = (Easing_Easing);

/***/ }),

/***/ "z0uF":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @typechecks
 */

var performance = __webpack_require__("+o9m");

var performanceNow;
/**
 * Detect if we can use `window.performance.now()` and gracefully fallback to
 * `Date.now()` if it doesn't exist. We need to support Firefox < 15 for now
 * because of Facebook's testing infrastructure.
 */

if (performance.now) {
  performanceNow = function performanceNow() {
    return performance.now();
  };
} else {
  performanceNow = function performanceNow() {
    return Date.now();
  };
}

module.exports = performanceNow;

/***/ })

}]);
//# sourceMappingURL=750cd0e9940a54dd4a7a0dc6241a730a102d9ca1-33f829a5d1c1375289b1.js.map