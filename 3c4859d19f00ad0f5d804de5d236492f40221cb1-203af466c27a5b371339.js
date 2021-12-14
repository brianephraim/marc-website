(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[1],{

/***/ "4YbZ":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("q1tI");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _modules_useMergeRefs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("CSmu");
/* harmony import */ var _modules_usePressEvents__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("8FfZ");
/* harmony import */ var _StyleSheet__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("ckSu");
/* harmony import */ var _View__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("jzUF");


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








function TouchableOpacity(props, forwardedRef) {
  var accessible = props.accessible,
      activeOpacity = props.activeOpacity,
      delayPressIn = props.delayPressIn,
      delayPressOut = props.delayPressOut,
      delayLongPress = props.delayLongPress,
      disabled = props.disabled,
      focusable = props.focusable,
      onLongPress = props.onLongPress,
      onPress = props.onPress,
      onPressIn = props.onPressIn,
      onPressOut = props.onPressOut,
      rejectResponderTermination = props.rejectResponderTermination,
      style = props.style,
      rest = _objectWithoutPropertiesLoose(props, ["accessible", "activeOpacity", "delayPressIn", "delayPressOut", "delayLongPress", "disabled", "focusable", "onLongPress", "onPress", "onPressIn", "onPressOut", "rejectResponderTermination", "style"]);

  var hostRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);
  var setRef = Object(_modules_useMergeRefs__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(forwardedRef, hostRef);

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('0s'),
      duration = _useState[0],
      setDuration = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null),
      opacityOverride = _useState2[0],
      setOpacityOverride = _useState2[1];

  var setOpacityTo = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function (value, duration) {
    setOpacityOverride(value);
    setDuration(duration ? duration / 1000 + "s" : '0s');
  }, [setOpacityOverride, setDuration]);
  var setOpacityActive = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function (duration) {
    setOpacityTo(activeOpacity !== null && activeOpacity !== void 0 ? activeOpacity : 0.2, duration);
  }, [activeOpacity, setOpacityTo]);
  var setOpacityInactive = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function (duration) {
    setOpacityTo(null, duration);
  }, [setOpacityTo]);
  var pressConfig = Object(react__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(function () {
    return {
      cancelable: !rejectResponderTermination,
      disabled: disabled,
      delayLongPress: delayLongPress,
      delayPressStart: delayPressIn,
      delayPressEnd: delayPressOut,
      onLongPress: onLongPress,
      onPress: onPress,
      onPressStart: function onPressStart(event) {
        var isGrant = event.dispatchConfig != null ? event.dispatchConfig.registrationName === 'onResponderGrant' : event.type === 'keydown';
        setOpacityActive(isGrant ? 0 : 150);

        if (onPressIn != null) {
          onPressIn(event);
        }
      },
      onPressEnd: function onPressEnd(event) {
        setOpacityInactive(250);

        if (onPressOut != null) {
          onPressOut(event);
        }
      }
    };
  }, [delayLongPress, delayPressIn, delayPressOut, disabled, onLongPress, onPress, onPressIn, onPressOut, rejectResponderTermination, setOpacityActive, setOpacityInactive]);
  var pressEventHandlers = Object(_modules_usePressEvents__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(hostRef, pressConfig);
  return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_View__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"], _extends({}, rest, pressEventHandlers, {
    accessibilityState: _objectSpread({
      disabled: disabled
    }, props.accessibilityState),
    accessible: accessible !== false,
    focusable: focusable !== false && onPress !== undefined,
    ref: setRef,
    style: [styles.root, !disabled && styles.actionable, style, opacityOverride != null && {
      opacity: opacityOverride
    }, {
      transitionDuration: duration
    }]
  }));
}

var styles = _StyleSheet__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"].create({
  root: {
    transitionProperty: 'opacity',
    transitionDuration: '0.15s',
    userSelect: 'none'
  },
  actionable: {
    cursor: 'pointer',
    touchAction: 'manipulation'
  }
});
var MemoedTouchableOpacity = react__WEBPACK_IMPORTED_MODULE_0__["memo"](react__WEBPACK_IMPORTED_MODULE_0__["forwardRef"](TouchableOpacity));
MemoedTouchableOpacity.displayName = 'TouchableOpacity';
/* harmony default export */ __webpack_exports__["a"] = (MemoedTouchableOpacity);

/***/ }),

/***/ "65Fb":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var fbjs_lib_invariant__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("2NuI");
/* harmony import */ var fbjs_lib_invariant__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(fbjs_lib_invariant__WEBPACK_IMPORTED_MODULE_0__);




var EventSubscriptionVendor = function () {
  function EventSubscriptionVendor() {
    this._subscriptionsForType = {};
    this._currentSubscription = null;
  }

  var _proto = EventSubscriptionVendor.prototype;

  _proto.addSubscription = function addSubscription(eventType, subscription) {
    fbjs_lib_invariant__WEBPACK_IMPORTED_MODULE_0___default()(subscription.subscriber === this, 'The subscriber of the subscription is incorrectly set.');

    if (!this._subscriptionsForType[eventType]) {
      this._subscriptionsForType[eventType] = [];
    }

    var key = this._subscriptionsForType[eventType].length;

    this._subscriptionsForType[eventType].push(subscription);

    subscription.eventType = eventType;
    subscription.key = key;
    return subscription;
  };

  _proto.removeAllSubscriptions = function removeAllSubscriptions(eventType) {
    if (eventType === undefined) {
      this._subscriptionsForType = {};
    } else {
      delete this._subscriptionsForType[eventType];
    }
  };

  _proto.removeSubscription = function removeSubscription(subscription) {
    var eventType = subscription.eventType;
    var key = subscription.key;
    var subscriptionsForType = this._subscriptionsForType[eventType];

    if (subscriptionsForType) {
      delete subscriptionsForType[key];
    }
  };

  _proto.getSubscriptionsForType = function getSubscriptionsForType(eventType) {
    return this._subscriptionsForType[eventType];
  };

  return EventSubscriptionVendor;
}();

/* harmony default export */ __webpack_exports__["a"] = (EventSubscriptionVendor);

/***/ }),

/***/ "8FfZ":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* binding */ usePressEvents; });

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.math.hypot.js
var es_math_hypot = __webpack_require__("QFcT");

// CONCATENATED MODULE: ./node_modules/react-native-web/dist/modules/usePressEvents/PressResponder.js



var DELAY = 'DELAY';
var ERROR = 'ERROR';
var LONG_PRESS_DETECTED = 'LONG_PRESS_DETECTED';
var NOT_RESPONDER = 'NOT_RESPONDER';
var RESPONDER_ACTIVE_LONG_PRESS_START = 'RESPONDER_ACTIVE_LONG_PRESS_START';
var RESPONDER_ACTIVE_PRESS_START = 'RESPONDER_ACTIVE_PRESS_START';
var RESPONDER_INACTIVE_PRESS_START = 'RESPONDER_INACTIVE_PRESS_START';
var RESPONDER_GRANT = 'RESPONDER_GRANT';
var RESPONDER_RELEASE = 'RESPONDER_RELEASE';
var RESPONDER_TERMINATED = 'RESPONDER_TERMINATED';
var Transitions = Object.freeze({
  NOT_RESPONDER: {
    DELAY: ERROR,
    RESPONDER_GRANT: RESPONDER_INACTIVE_PRESS_START,
    RESPONDER_RELEASE: ERROR,
    RESPONDER_TERMINATED: ERROR,
    LONG_PRESS_DETECTED: ERROR
  },
  RESPONDER_INACTIVE_PRESS_START: {
    DELAY: RESPONDER_ACTIVE_PRESS_START,
    RESPONDER_GRANT: ERROR,
    RESPONDER_RELEASE: NOT_RESPONDER,
    RESPONDER_TERMINATED: NOT_RESPONDER,
    LONG_PRESS_DETECTED: ERROR
  },
  RESPONDER_ACTIVE_PRESS_START: {
    DELAY: ERROR,
    RESPONDER_GRANT: ERROR,
    RESPONDER_RELEASE: NOT_RESPONDER,
    RESPONDER_TERMINATED: NOT_RESPONDER,
    LONG_PRESS_DETECTED: RESPONDER_ACTIVE_LONG_PRESS_START
  },
  RESPONDER_ACTIVE_LONG_PRESS_START: {
    DELAY: ERROR,
    RESPONDER_GRANT: ERROR,
    RESPONDER_RELEASE: NOT_RESPONDER,
    RESPONDER_TERMINATED: NOT_RESPONDER,
    LONG_PRESS_DETECTED: RESPONDER_ACTIVE_LONG_PRESS_START
  },
  ERROR: {
    DELAY: NOT_RESPONDER,
    RESPONDER_GRANT: RESPONDER_INACTIVE_PRESS_START,
    RESPONDER_RELEASE: NOT_RESPONDER,
    RESPONDER_TERMINATED: NOT_RESPONDER,
    LONG_PRESS_DETECTED: NOT_RESPONDER
  }
});

var isActiveSignal = function isActiveSignal(signal) {
  return signal === RESPONDER_ACTIVE_PRESS_START || signal === RESPONDER_ACTIVE_LONG_PRESS_START;
};

var isButtonRole = function isButtonRole(element) {
  return element.getAttribute('role') === 'button';
};

var isPressStartSignal = function isPressStartSignal(signal) {
  return signal === RESPONDER_INACTIVE_PRESS_START || signal === RESPONDER_ACTIVE_PRESS_START || signal === RESPONDER_ACTIVE_LONG_PRESS_START;
};

var isTerminalSignal = function isTerminalSignal(signal) {
  return signal === RESPONDER_TERMINATED || signal === RESPONDER_RELEASE;
};

var isValidKeyPress = function isValidKeyPress(event) {
  var key = event.key;
  var target = event.currentTarget;
  var role = target.getAttribute('role');
  var isSpacebar = key === ' ' || key === 'Spacebar';
  return !event.repeat && (key === 'Enter' || isSpacebar && (role === 'button' || role === 'menuitem'));
};

var DEFAULT_LONG_PRESS_DELAY_MS = 450;
var DEFAULT_PRESS_DELAY_MS = 50;

var PressResponder = function () {
  function PressResponder(config) {
    this._eventHandlers = null;
    this._isPointerTouch = false;
    this._longPressDelayTimeout = null;
    this._longPressDispatched = false;
    this._pressDelayTimeout = null;
    this._pressOutDelayTimeout = null;
    this._touchState = NOT_RESPONDER;
    this.configure(config);
  }

  var _proto = PressResponder.prototype;

  _proto.configure = function configure(config) {
    this._config = config;
  };

  _proto.reset = function reset() {
    this._cancelLongPressDelayTimeout();

    this._cancelPressDelayTimeout();

    this._cancelPressOutDelayTimeout();
  };

  _proto.getEventHandlers = function getEventHandlers() {
    if (this._eventHandlers == null) {
      this._eventHandlers = this._createEventHandlers();
    }

    return this._eventHandlers;
  };

  _proto._createEventHandlers = function _createEventHandlers() {
    var _this = this;

    var start = function start(event, shouldDelay) {
      event.persist();

      _this._cancelPressOutDelayTimeout();

      _this._longPressDispatched = false;
      _this._responder = event.currentTarget;
      _this._selectionTerminated = false;
      _this._touchState = NOT_RESPONDER;
      _this._isPointerTouch = event.nativeEvent.type === 'touchstart';

      _this._receiveSignal(RESPONDER_GRANT, event);

      var delayPressStart = normalizeDelay(_this._config.delayPressStart, 0, DEFAULT_PRESS_DELAY_MS);

      if (shouldDelay !== false && delayPressStart > 0) {
        _this._pressDelayTimeout = setTimeout(function () {
          _this._receiveSignal(DELAY, event);
        }, delayPressStart);
      } else {
        _this._receiveSignal(DELAY, event);
      }

      var delayLongPress = normalizeDelay(_this._config.delayLongPress, 10, DEFAULT_LONG_PRESS_DELAY_MS);
      _this._longPressDelayTimeout = setTimeout(function () {
        _this._handleLongPress(event);
      }, delayLongPress + delayPressStart);
    };

    var end = function end(event) {
      _this._receiveSignal(RESPONDER_RELEASE, event);
    };

    var keyupHandler = function keyupHandler(event) {
      if (_this._touchState !== NOT_RESPONDER) {
        end(event);
        document.removeEventListener('keyup', keyupHandler);
      }
    };

    return {
      onStartShouldSetResponder: function onStartShouldSetResponder(event) {
        var disabled = _this._config.disabled;

        if (disabled && isButtonRole(event.currentTarget)) {
          event.stopPropagation();
        }

        if (disabled == null) {
          return true;
        }

        return !disabled;
      },
      onKeyDown: function onKeyDown(event) {
        if (isValidKeyPress(event)) {
          if (_this._touchState === NOT_RESPONDER) {
            start(event, false);
            document.addEventListener('keyup', keyupHandler);
          }

          event.stopPropagation();
        }
      },
      onResponderGrant: function onResponderGrant(event) {
        return start(event);
      },
      onResponderMove: function onResponderMove(event) {
        if (_this._config.onPressMove != null) {
          _this._config.onPressMove(event);
        }

        var touch = getTouchFromResponderEvent(event);

        if (_this._touchActivatePosition != null) {
          var deltaX = _this._touchActivatePosition.pageX - touch.pageX;
          var deltaY = _this._touchActivatePosition.pageY - touch.pageY;

          if (Math.hypot(deltaX, deltaY) > 10) {
            _this._cancelLongPressDelayTimeout();
          }
        }
      },
      onResponderRelease: function onResponderRelease(event) {
        return end(event);
      },
      onResponderTerminate: function onResponderTerminate(event) {
        if (event.nativeEvent.type === 'selectionchange') {
          _this._selectionTerminated = true;
        }

        _this._receiveSignal(RESPONDER_TERMINATED, event);
      },
      onResponderTerminationRequest: function onResponderTerminationRequest(event) {
        var _this$_config = _this._config,
            cancelable = _this$_config.cancelable,
            disabled = _this$_config.disabled,
            onLongPress = _this$_config.onLongPress;

        if (!disabled && onLongPress != null && _this._isPointerTouch && event.nativeEvent.type === 'contextmenu') {
          return false;
        }

        if (cancelable == null) {
          return true;
        }

        return cancelable;
      },
      onClick: function onClick(event) {
        var _this$_config2 = _this._config,
            disabled = _this$_config2.disabled,
            onPress = _this$_config2.onPress;

        if (!disabled) {
          event.stopPropagation();

          if (_this._longPressDispatched || _this._selectionTerminated) {
            event.preventDefault();
          } else if (onPress != null && event.ctrlKey === false && event.altKey === false) {
            onPress(event);
          }
        } else {
          if (isButtonRole(event.currentTarget)) {
            event.stopPropagation();
          }
        }
      },
      onContextMenu: function onContextMenu(event) {
        var _this$_config3 = _this._config,
            disabled = _this$_config3.disabled,
            onLongPress = _this$_config3.onLongPress;

        if (!disabled) {
          if (onLongPress != null && _this._isPointerTouch && !event.defaultPrevented) {
            event.preventDefault();
            event.stopPropagation();
          }
        } else {
          if (isButtonRole(event.currentTarget)) {
            event.stopPropagation();
          }
        }
      }
    };
  };

  _proto._receiveSignal = function _receiveSignal(signal, event) {
    var prevState = this._touchState;
    var nextState = null;

    if (Transitions[prevState] != null) {
      nextState = Transitions[prevState][signal];
    }

    if (this._responder == null && signal === RESPONDER_RELEASE) {
      return;
    }

    if (nextState == null || nextState === ERROR) {
      console.error("PressResponder: Invalid signal " + signal + " for state " + prevState + " on responder");
    } else if (prevState !== nextState) {
      this._performTransitionSideEffects(prevState, nextState, signal, event);

      this._touchState = nextState;
    }
  };

  _proto._performTransitionSideEffects = function _performTransitionSideEffects(prevState, nextState, signal, event) {
    if (isTerminalSignal(signal)) {
      this._isPointerTouch = false;
      this._touchActivatePosition = null;

      this._cancelLongPressDelayTimeout();
    }

    if (isPressStartSignal(prevState) && signal === LONG_PRESS_DETECTED) {
      var onLongPress = this._config.onLongPress;

      if (onLongPress != null && event.nativeEvent.key == null) {
        onLongPress(event);
        this._longPressDispatched = true;
      }
    }

    var isPrevActive = isActiveSignal(prevState);
    var isNextActive = isActiveSignal(nextState);

    if (!isPrevActive && isNextActive) {
      this._activate(event);
    } else if (isPrevActive && !isNextActive) {
      this._deactivate(event);
    }

    if (isPressStartSignal(prevState) && signal === RESPONDER_RELEASE) {
      var _this$_config4 = this._config,
          _onLongPress = _this$_config4.onLongPress,
          onPress = _this$_config4.onPress;

      if (onPress != null) {
        var isPressCanceledByLongPress = _onLongPress != null && prevState === RESPONDER_ACTIVE_LONG_PRESS_START;

        if (!isPressCanceledByLongPress) {
          if (!isNextActive && !isPrevActive) {
            this._activate(event);

            this._deactivate(event);
          }
        }
      }
    }

    this._cancelPressDelayTimeout();
  };

  _proto._activate = function _activate(event) {
    var _this$_config5 = this._config,
        onPressChange = _this$_config5.onPressChange,
        onPressStart = _this$_config5.onPressStart;
    var touch = getTouchFromResponderEvent(event);
    this._touchActivatePosition = {
      pageX: touch.pageX,
      pageY: touch.pageY
    };

    if (onPressStart != null) {
      onPressStart(event);
    }

    if (onPressChange != null) {
      onPressChange(true);
    }
  };

  _proto._deactivate = function _deactivate(event) {
    var _this$_config6 = this._config,
        onPressChange = _this$_config6.onPressChange,
        onPressEnd = _this$_config6.onPressEnd;

    function end() {
      if (onPressEnd != null) {
        onPressEnd(event);
      }

      if (onPressChange != null) {
        onPressChange(false);
      }
    }

    var delayPressEnd = normalizeDelay(this._config.delayPressEnd);

    if (delayPressEnd > 0) {
      this._pressOutDelayTimeout = setTimeout(function () {
        end();
      }, delayPressEnd);
    } else {
      end();
    }
  };

  _proto._handleLongPress = function _handleLongPress(event) {
    if (this._touchState === RESPONDER_ACTIVE_PRESS_START || this._touchState === RESPONDER_ACTIVE_LONG_PRESS_START) {
      this._receiveSignal(LONG_PRESS_DETECTED, event);
    }
  };

  _proto._cancelLongPressDelayTimeout = function _cancelLongPressDelayTimeout() {
    if (this._longPressDelayTimeout != null) {
      clearTimeout(this._longPressDelayTimeout);
      this._longPressDelayTimeout = null;
    }
  };

  _proto._cancelPressDelayTimeout = function _cancelPressDelayTimeout() {
    if (this._pressDelayTimeout != null) {
      clearTimeout(this._pressDelayTimeout);
      this._pressDelayTimeout = null;
    }
  };

  _proto._cancelPressOutDelayTimeout = function _cancelPressOutDelayTimeout() {
    if (this._pressOutDelayTimeout != null) {
      clearTimeout(this._pressOutDelayTimeout);
      this._pressOutDelayTimeout = null;
    }
  };

  return PressResponder;
}();



function normalizeDelay(delay, min, fallback) {
  if (min === void 0) {
    min = 0;
  }

  if (fallback === void 0) {
    fallback = 0;
  }

  return Math.max(min, delay !== null && delay !== void 0 ? delay : fallback);
}

function getTouchFromResponderEvent(event) {
  var _event$nativeEvent = event.nativeEvent,
      changedTouches = _event$nativeEvent.changedTouches,
      touches = _event$nativeEvent.touches;

  if (touches != null && touches.length > 0) {
    return touches[0];
  }

  if (changedTouches != null && changedTouches.length > 0) {
    return changedTouches[0];
  }

  return event.nativeEvent;
}
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__("q1tI");

// CONCATENATED MODULE: ./node_modules/react-native-web/dist/modules/usePressEvents/index.js




function usePressEvents(hostRef, config) {
  var pressResponderRef = Object(react["useRef"])(null);

  if (pressResponderRef.current == null) {
    pressResponderRef.current = new PressResponder(config);
  }

  var pressResponder = pressResponderRef.current;
  Object(react["useEffect"])(function () {
    pressResponder.configure(config);
  }, [config, pressResponder]);
  Object(react["useEffect"])(function () {
    return function () {
      pressResponder.reset();
    };
  }, [pressResponder]);
  Object(react["useDebugValue"])(config);
  return pressResponder.getEventHandlers();
}

/***/ }),

/***/ "C7Rh":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Dimensions; });
/* harmony import */ var fbjs_lib_ExecutionEnvironment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("xLLm");
/* harmony import */ var fbjs_lib_ExecutionEnvironment__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(fbjs_lib_ExecutionEnvironment__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var fbjs_lib_invariant__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("2NuI");
/* harmony import */ var fbjs_lib_invariant__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(fbjs_lib_invariant__WEBPACK_IMPORTED_MODULE_1__);


var win = fbjs_lib_ExecutionEnvironment__WEBPACK_IMPORTED_MODULE_0__["canUseDOM"] ? window : {
  devicePixelRatio: undefined,
  innerHeight: undefined,
  innerWidth: undefined,
  screen: {
    height: undefined,
    width: undefined
  }
};
var dimensions = {};
var listeners = {};

var Dimensions = function () {
  function Dimensions() {}

  Dimensions.get = function get(dimension) {
    fbjs_lib_invariant__WEBPACK_IMPORTED_MODULE_1___default()(dimensions[dimension], "No dimension set for key " + dimension);
    return dimensions[dimension];
  };

  Dimensions.set = function set(initialDimensions) {
    if (initialDimensions) {
      if (fbjs_lib_ExecutionEnvironment__WEBPACK_IMPORTED_MODULE_0__["canUseDOM"]) {
        fbjs_lib_invariant__WEBPACK_IMPORTED_MODULE_1___default()(false, 'Dimensions cannot be set in the browser');
      } else {
        dimensions.screen = initialDimensions.screen;
        dimensions.window = initialDimensions.window;
      }
    }
  };

  Dimensions._update = function _update() {
    dimensions.window = {
      fontScale: 1,
      height: win.innerHeight,
      scale: win.devicePixelRatio || 1,
      width: win.innerWidth
    };
    dimensions.screen = {
      fontScale: 1,
      height: win.screen.height,
      scale: win.devicePixelRatio || 1,
      width: win.screen.width
    };

    if (Array.isArray(listeners['change'])) {
      listeners['change'].forEach(function (handler) {
        return handler(dimensions);
      });
    }
  };

  Dimensions.addEventListener = function addEventListener(type, handler) {
    listeners[type] = listeners[type] || [];
    listeners[type].push(handler);
  };

  Dimensions.removeEventListener = function removeEventListener(type, handler) {
    if (Array.isArray(listeners[type])) {
      listeners[type] = listeners[type].filter(function (_handler) {
        return _handler !== handler;
      });
    }
  };

  return Dimensions;
}();



Dimensions._update();

if (fbjs_lib_ExecutionEnvironment__WEBPACK_IMPORTED_MODULE_0__["canUseDOM"]) {
  window.addEventListener('resize', Dimensions._update, false);
}

/***/ }),

/***/ "HxgP":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _vendor_react_native_NativeEventEmitter_RCTDeviceEventEmitter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("qTQs");

/* harmony default export */ __webpack_exports__["a"] = (_vendor_react_native_NativeEventEmitter_RCTDeviceEventEmitter__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"]);

/***/ }),

/***/ "IIls":
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
/* harmony import */ var _TextAncestorContext__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("Q3tu");











var forwardPropsList = {
  accessibilityLabel: true,
  accessibilityLiveRegion: true,
  accessibilityRole: true,
  accessibilityState: true,
  accessibilityValue: true,
  accessible: true,
  children: true,
  classList: true,
  dir: true,
  importantForAccessibility: true,
  lang: true,
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

var Text = Object(react__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(function (props, forwardedRef) {
  var dir = props.dir,
      numberOfLines = props.numberOfLines,
      onClick = props.onClick,
      onLayout = props.onLayout,
      onPress = props.onPress,
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
      onStartShouldSetResponderCapture = props.onStartShouldSetResponderCapture,
      selectable = props.selectable;
  var hasTextAncestor = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_TextAncestorContext__WEBPACK_IMPORTED_MODULE_9__[/* default */ "a"]);
  var hostRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);
  var classList = [classes.text, hasTextAncestor === true && classes.textHasAncestor, numberOfLines === 1 && classes.textOneLine, numberOfLines != null && numberOfLines > 1 && classes.textMultiLine];
  var style = [props.style, numberOfLines != null && numberOfLines > 1 && {
    WebkitLineClamp: numberOfLines
  }, selectable === true && styles.selectable, selectable === false && styles.notSelectable, onPress && styles.pressable];
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

  function handleClick(e) {
    if (onClick != null) {
      onClick(e);
    }

    if (onClick == null && onPress != null) {
      e.stopPropagation();
      onPress(e);
    }
  }

  var component = hasTextAncestor ? 'span' : 'div';
  var supportedProps = pickProps(props);
  supportedProps.classList = classList;
  supportedProps.dir = dir;

  if (!hasTextAncestor) {
    supportedProps.dir = dir != null ? dir : 'auto';
  }

  supportedProps.onClick = handleClick;
  supportedProps.style = style;
  var platformMethodsRef = Object(_modules_usePlatformMethods__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])(supportedProps);
  var setRef = Object(_modules_useMergeRefs__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(hostRef, platformMethodsRef, forwardedRef);
  supportedProps.ref = setRef;
  var element = Object(_createElement__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(component, supportedProps);
  return hasTextAncestor ? element : react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_TextAncestorContext__WEBPACK_IMPORTED_MODULE_9__[/* default */ "a"].Provider, {
    value: true
  }, element);
});
Text.displayName = 'Text';
var classes = _StyleSheet_css__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"].create({
  text: {
    border: '0 solid black',
    boxSizing: 'border-box',
    color: 'black',
    display: 'inline',
    font: '14px System',
    margin: 0,
    padding: 0,
    whiteSpace: 'pre-wrap',
    wordWrap: 'break-word'
  },
  textHasAncestor: {
    color: 'inherit',
    font: 'inherit',
    whiteSpace: 'inherit'
  },
  textOneLine: {
    maxWidth: '100%',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap'
  },
  textMultiLine: {
    display: '-webkit-box',
    maxWidth: '100%',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    WebkitBoxOrient: 'vertical'
  }
});
var styles = _StyleSheet__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"].create({
  notSelectable: {
    userSelect: 'none'
  },
  selectable: {
    userSelect: 'text'
  },
  pressable: {
    cursor: 'pointer'
  }
});
/* harmony default export */ __webpack_exports__["a"] = (Text);

/***/ }),

/***/ "QFcT":
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__("I+eb");

var $hypot = Math.hypot;
var abs = Math.abs;
var sqrt = Math.sqrt;

// Chrome 77 bug
// https://bugs.chromium.org/p/v8/issues/detail?id=9546
var BUGGY = !!$hypot && $hypot(Infinity, NaN) !== Infinity;

// `Math.hypot` method
// https://tc39.es/ecma262/#sec-math.hypot
$({ target: 'Math', stat: true, forced: BUGGY }, {
  hypot: function hypot(value1, value2) { // eslint-disable-line no-unused-vars
    var sum = 0;
    var i = 0;
    var aLen = arguments.length;
    var larg = 0;
    var arg, div;
    while (i < aLen) {
      arg = abs(arguments[i++]);
      if (larg < arg) {
        div = larg / arg;
        sum = sum * div * div + 1;
        larg = arg;
      } else if (arg > 0) {
        div = arg / larg;
        sum += div * div;
      } else sum += arg;
    }
    return larg === Infinity ? Infinity : larg * sqrt(sum);
  }
});


/***/ }),

/***/ "XwJz":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var Platform = {
  OS: 'web',
  select: function select(obj) {
    return 'web' in obj ? obj.web : obj.default;
  },

  get isTesting() {
    if (({}).NODE_DEV === 'test') {
      return true;
    }

    return false;
  }

};
/* harmony default export */ __webpack_exports__["a"] = (Platform);

/***/ }),

/***/ "qTQs":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _emitter_EventEmitter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("u7Mw");
/* harmony import */ var _emitter_EventSubscriptionVendor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("65Fb");


function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  subClass.__proto__ = superClass;
}




var __DEV__ = "production" !== 'production';

function checkNativeEventModule(eventType) {
  if (eventType) {
    if (eventType.lastIndexOf('statusBar', 0) === 0) {
      throw new Error('`' + eventType + '` event should be registered via the StatusBarIOS module');
    }

    if (eventType.lastIndexOf('keyboard', 0) === 0) {
      throw new Error('`' + eventType + '` event should be registered via the Keyboard module');
    }

    if (eventType === 'appStateDidChange' || eventType === 'memoryWarning') {
      throw new Error('`' + eventType + '` event should be registered via the AppState module');
    }
  }
}

var RCTDeviceEventEmitter = function (_EventEmitter) {
  _inheritsLoose(RCTDeviceEventEmitter, _EventEmitter);

  function RCTDeviceEventEmitter() {
    var _this;

    var sharedSubscriber = new _emitter_EventSubscriptionVendor__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"]();
    _this = _EventEmitter.call(this, sharedSubscriber) || this;
    _this.sharedSubscriber = sharedSubscriber;
    return _this;
  }

  var _proto = RCTDeviceEventEmitter.prototype;

  _proto.addListener = function addListener(eventType, listener, context) {
    if (__DEV__) {
      checkNativeEventModule(eventType);
    }

    return _EventEmitter.prototype.addListener.call(this, eventType, listener, context);
  };

  _proto.removeAllListeners = function removeAllListeners(eventType) {
    if (__DEV__) {
      checkNativeEventModule(eventType);
    }

    _EventEmitter.prototype.removeAllListeners.call(this, eventType);
  };

  _proto.removeSubscription = function removeSubscription(subscription) {
    if (subscription.emitter !== this) {
      subscription.emitter.removeSubscription(subscription);
    } else {
      _EventEmitter.prototype.removeSubscription.call(this, subscription);
    }
  };

  return RCTDeviceEventEmitter;
}(_emitter_EventEmitter__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"]);

/* harmony default export */ __webpack_exports__["a"] = (new RCTDeviceEventEmitter());

/***/ }),

/***/ "qadT":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PixelRatio; });
/* harmony import */ var _Dimensions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("C7Rh");


var PixelRatio = function () {
  function PixelRatio() {}

  PixelRatio.get = function get() {
    return _Dimensions__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].get('window').scale;
  };

  PixelRatio.getFontScale = function getFontScale() {
    return _Dimensions__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].get('window').fontScale || PixelRatio.get();
  };

  PixelRatio.getPixelSizeForLayoutSize = function getPixelSizeForLayoutSize(layoutSize) {
    return Math.round(layoutSize * PixelRatio.get());
  };

  PixelRatio.roundToNearestPixel = function roundToNearestPixel(layoutSize) {
    var ratio = PixelRatio.get();
    return Math.round(layoutSize * ratio) / ratio;
  };

  return PixelRatio;
}();



/***/ }),

/***/ "t4TM":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("i8i4");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_0__);


var findNodeHandle = function findNodeHandle(component) {
  var node;

  try {
    node = Object(react_dom__WEBPACK_IMPORTED_MODULE_0__["findDOMNode"])(component);
  } catch (e) {}

  return node;
};

/* harmony default export */ __webpack_exports__["a"] = (findNodeHandle);

/***/ }),

/***/ "tbnB":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export registerAsset */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getAssetByID; });
var assets = [];
function registerAsset(asset) {
  return assets.push(asset);
}
function getAssetByID(assetId) {
  return assets[assetId - 1];
}

/***/ }),

/***/ "u7Mw":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/react-native-web/dist/vendor/react-native/emitter/EventSubscription.js


var EventSubscription = function () {
  function EventSubscription(subscriber) {
    this.subscriber = subscriber;
  }

  var _proto = EventSubscription.prototype;

  _proto.remove = function remove() {
    this.subscriber.removeSubscription(this);
  };

  return EventSubscription;
}();

/* harmony default export */ var emitter_EventSubscription = (EventSubscription);
// CONCATENATED MODULE: ./node_modules/react-native-web/dist/vendor/react-native/emitter/EmitterSubscription.js


function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  subClass.__proto__ = superClass;
}



var EmitterSubscription = function (_EventSubscription) {
  _inheritsLoose(EmitterSubscription, _EventSubscription);

  function EmitterSubscription(emitter, subscriber, listener, context) {
    var _this;

    _this = _EventSubscription.call(this, subscriber) || this;
    _this.emitter = emitter;
    _this.listener = listener;
    _this.context = context;
    return _this;
  }

  var _proto = EmitterSubscription.prototype;

  _proto.remove = function remove() {
    this.emitter.removeSubscription(this);
  };

  return EmitterSubscription;
}(emitter_EventSubscription);

/* harmony default export */ var emitter_EmitterSubscription = (EmitterSubscription);
// EXTERNAL MODULE: ./node_modules/react-native-web/dist/vendor/react-native/emitter/EventSubscriptionVendor.js
var EventSubscriptionVendor = __webpack_require__("65Fb");

// EXTERNAL MODULE: ./node_modules/fbjs/lib/invariant.js
var invariant = __webpack_require__("2NuI");
var invariant_default = /*#__PURE__*/__webpack_require__.n(invariant);

// CONCATENATED MODULE: ./node_modules/react-native-web/dist/vendor/react-native/emitter/EventEmitter.js






var sparseFilterPredicate = function sparseFilterPredicate() {
  return true;
};

var EventEmitter_EventEmitter = function () {
  function EventEmitter(subscriber) {
    this._subscriber = subscriber || new EventSubscriptionVendor["a" /* default */]();
  }

  var _proto = EventEmitter.prototype;

  _proto.addListener = function addListener(eventType, listener, context) {
    return this._subscriber.addSubscription(eventType, new emitter_EmitterSubscription(this, this._subscriber, listener, context));
  };

  _proto.once = function once(eventType, listener, context) {
    var _this = this;

    return this.addListener(eventType, function () {
      _this.removeCurrentListener();

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      listener.apply(context, args);
    });
  };

  _proto.removeAllListeners = function removeAllListeners(eventType) {
    this._subscriber.removeAllSubscriptions(eventType);
  };

  _proto.removeCurrentListener = function removeCurrentListener() {
    invariant_default()(!!this._currentSubscription, 'Not in an emitting cycle; there is no current subscription');
    this.removeSubscription(this._currentSubscription);
  };

  _proto.removeSubscription = function removeSubscription(subscription) {
    invariant_default()(subscription.emitter === this, 'Subscription does not belong to this emitter.');

    this._subscriber.removeSubscription(subscription);
  };

  _proto.listeners = function listeners(eventType) {
    var subscriptions = this._subscriber.getSubscriptionsForType(eventType);

    return subscriptions ? subscriptions.filter(sparseFilterPredicate).map(function (subscription) {
      return subscription.listener;
    }) : [];
  };

  _proto.emit = function emit(eventType) {
    var subscriptions = this._subscriber.getSubscriptionsForType(eventType);

    if (subscriptions) {
      for (var i = 0, l = subscriptions.length; i < l; i++) {
        var subscription = subscriptions[i];

        if (subscription && subscription.listener) {
          this._currentSubscription = subscription;
          subscription.listener.apply(subscription.context, Array.prototype.slice.call(arguments, 1));
        }
      }

      this._currentSubscription = null;
    }
  };

  _proto.removeListener = function removeListener(eventType, listener) {
    var subscriptions = this._subscriber.getSubscriptionsForType(eventType);

    if (subscriptions) {
      for (var i = 0, l = subscriptions.length; i < l; i++) {
        var subscription = subscriptions[i];

        if (subscription && subscription.listener === listener) {
          subscription.remove();
        }
      }
    }
  };

  return EventEmitter;
}();

/* harmony default export */ var emitter_EventEmitter = __webpack_exports__["a"] = (EventEmitter_EventEmitter);

/***/ }),

/***/ "uXPr":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.reduce.js
var es_array_reduce = __webpack_require__("E9XD");

// EXTERNAL MODULE: ./node_modules/react-native-web/dist/exports/createElement/index.js
var createElement = __webpack_require__("osi3");

// EXTERNAL MODULE: ./node_modules/react-native-web/dist/exports/StyleSheet/css.js
var css = __webpack_require__("lxpi");

// EXTERNAL MODULE: ./node_modules/react-native-web/dist/modules/AssetRegistry/index.js
var AssetRegistry = __webpack_require__("tbnB");

// EXTERNAL MODULE: ./node_modules/react-native-web/dist/exports/StyleSheet/resolveShadowValue.js
var resolveShadowValue = __webpack_require__("cqcS");

// CONCATENATED MODULE: ./node_modules/react-native-web/dist/modules/ImageLoader/index.js
var dataUriPattern = /^data:/;
var ImageUriCache = function () {
  function ImageUriCache() {}

  ImageUriCache.has = function has(uri) {
    var entries = ImageUriCache._entries;
    var isDataUri = dataUriPattern.test(uri);
    return isDataUri || Boolean(entries[uri]);
  };

  ImageUriCache.add = function add(uri) {
    var entries = ImageUriCache._entries;
    var lastUsedTimestamp = Date.now();

    if (entries[uri]) {
      entries[uri].lastUsedTimestamp = lastUsedTimestamp;
      entries[uri].refCount += 1;
    } else {
      entries[uri] = {
        lastUsedTimestamp: lastUsedTimestamp,
        refCount: 1
      };
    }
  };

  ImageUriCache.remove = function remove(uri) {
    var entries = ImageUriCache._entries;

    if (entries[uri]) {
      entries[uri].refCount -= 1;
    }

    ImageUriCache._cleanUpIfNeeded();
  };

  ImageUriCache._cleanUpIfNeeded = function _cleanUpIfNeeded() {
    var entries = ImageUriCache._entries;
    var imageUris = Object.keys(entries);

    if (imageUris.length + 1 > ImageUriCache._maximumEntries) {
      var leastRecentlyUsedKey;
      var leastRecentlyUsedEntry;
      imageUris.forEach(function (uri) {
        var entry = entries[uri];

        if ((!leastRecentlyUsedEntry || entry.lastUsedTimestamp < leastRecentlyUsedEntry.lastUsedTimestamp) && entry.refCount === 0) {
          leastRecentlyUsedKey = uri;
          leastRecentlyUsedEntry = entry;
        }
      });

      if (leastRecentlyUsedKey) {
        delete entries[leastRecentlyUsedKey];
      }
    }
  };

  return ImageUriCache;
}();
ImageUriCache._maximumEntries = 256;
ImageUriCache._entries = {};
var ImageLoader_id = 0;
var requests = {};
var ImageLoader = {
  abort: function abort(requestId) {
    var image = requests["" + requestId];

    if (image) {
      image.onerror = null;
      image.onload = null;
      image = null;
      delete requests["" + requestId];
    }
  },
  getSize: function getSize(uri, success, failure) {
    var complete = false;
    var interval = setInterval(callback, 16);
    var requestId = ImageLoader.load(uri, callback, errorCallback);

    function callback() {
      var image = requests["" + requestId];

      if (image) {
        var naturalHeight = image.naturalHeight,
            naturalWidth = image.naturalWidth;

        if (naturalHeight && naturalWidth) {
          success(naturalWidth, naturalHeight);
          complete = true;
        }
      }

      if (complete) {
        ImageLoader.abort(requestId);
        clearInterval(interval);
      }
    }

    function errorCallback() {
      if (typeof failure === 'function') {
        failure();
      }

      ImageLoader.abort(requestId);
      clearInterval(interval);
    }
  },
  has: function has(uri) {
    return ImageUriCache.has(uri);
  },
  load: function load(uri, onLoad, onError) {
    ImageLoader_id += 1;
    var image = new window.Image();
    image.onerror = onError;

    image.onload = function (e) {
      var onDecode = function onDecode() {
        return onLoad({
          nativeEvent: e
        });
      };

      if (typeof image.decode === 'function') {
        image.decode().then(onDecode, onDecode);
      } else {
        setTimeout(onDecode, 0);
      }
    };

    image.src = uri;
    requests["" + ImageLoader_id] = image;
    return ImageLoader_id;
  },
  prefetch: function prefetch(uri) {
    return new Promise(function (resolve, reject) {
      ImageLoader.load(uri, function () {
        ImageUriCache.add(uri);
        ImageUriCache.remove(uri);
        resolve();
      }, reject);
    });
  },
  queryCache: function queryCache(uris) {
    var result = {};
    uris.forEach(function (u) {
      if (ImageUriCache.has(u)) {
        result[u] = 'disk/memory';
      }
    });
    return Promise.resolve(result);
  }
};
/* harmony default export */ var modules_ImageLoader = (ImageLoader);
// EXTERNAL MODULE: ./node_modules/react-native-web/dist/exports/PixelRatio/index.js
var PixelRatio = __webpack_require__("qadT");

// EXTERNAL MODULE: ./node_modules/react-native-web/dist/exports/StyleSheet/index.js + 1 modules
var StyleSheet = __webpack_require__("ckSu");

// EXTERNAL MODULE: ./node_modules/react-native-web/dist/exports/Text/TextAncestorContext.js
var TextAncestorContext = __webpack_require__("Q3tu");

// EXTERNAL MODULE: ./node_modules/react-native-web/dist/exports/View/index.js
var View = __webpack_require__("jzUF");

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__("q1tI");
var react_default = /*#__PURE__*/__webpack_require__.n(react);

// CONCATENATED MODULE: ./node_modules/react-native-web/dist/exports/Image/index.js


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











var ERRORED = 'ERRORED';
var LOADED = 'LOADED';
var LOADING = 'LOADING';
var IDLE = 'IDLE';
var _filterId = 0;
var svgDataUriPattern = /^(data:image\/svg\+xml;utf8,)(.*)/;

function createTintColorSVG(tintColor, id) {
  return tintColor && id != null ? react_default.a.createElement("svg", {
    style: {
      position: 'absolute',
      height: 0,
      visibility: 'hidden',
      width: 0
    }
  }, react_default.a.createElement("defs", null, react_default.a.createElement("filter", {
    id: "tint-" + id,
    suppressHydrationWarning: true
  }, react_default.a.createElement("feFlood", {
    floodColor: "" + tintColor,
    key: tintColor
  }), react_default.a.createElement("feComposite", {
    in2: "SourceAlpha",
    operator: "atop"
  })))) : null;
}

function getFlatStyle(style, blurRadius, filterId) {
  var flatStyle = _objectSpread({}, StyleSheet["a" /* default */].flatten(style));

  var filter = flatStyle.filter,
      resizeMode = flatStyle.resizeMode,
      shadowOffset = flatStyle.shadowOffset,
      tintColor = flatStyle.tintColor;
  var filters = [];
  var _filter = null;

  if (filter) {
    filters.push(filter);
  }

  if (blurRadius) {
    filters.push("blur(" + blurRadius + "px)");
  }

  if (shadowOffset) {
    var shadowString = Object(resolveShadowValue["a" /* default */])(flatStyle);

    if (shadowString) {
      filters.push("drop-shadow(" + shadowString + ")");
    }
  }

  if (tintColor && filterId != null) {
    filters.push("url(#tint-" + filterId + ")");
  }

  if (filters.length > 0) {
    _filter = filters.join(' ');
  }

  delete flatStyle.blurRadius;
  delete flatStyle.shadowColor;
  delete flatStyle.shadowOpacity;
  delete flatStyle.shadowOffset;
  delete flatStyle.shadowRadius;
  delete flatStyle.tintColor;
  delete flatStyle.overlayColor;
  delete flatStyle.resizeMode;
  return [flatStyle, resizeMode, _filter, tintColor];
}

function resolveAssetDimensions(source) {
  if (typeof source === 'number') {
    var _getAssetByID = Object(AssetRegistry["a" /* getAssetByID */])(source),
        height = _getAssetByID.height,
        width = _getAssetByID.width;

    return {
      height: height,
      width: width
    };
  } else if (source != null && !Array.isArray(source) && typeof source === 'object') {
    var _height = source.height,
        _width = source.width;
    return {
      height: _height,
      width: _width
    };
  }
}

function resolveAssetUri(source) {
  var uri = null;

  if (typeof source === 'number') {
    var asset = Object(AssetRegistry["a" /* getAssetByID */])(source);
    var scale = asset.scales[0];

    if (asset.scales.length > 1) {
      var preferredScale = PixelRatio["a" /* default */].get();
      scale = asset.scales.reduce(function (prev, curr) {
        return Math.abs(curr - preferredScale) < Math.abs(prev - preferredScale) ? curr : prev;
      });
    }

    var scaleSuffix = scale !== 1 ? "@" + scale + "x" : '';
    uri = asset ? asset.httpServerLocation + "/" + asset.name + scaleSuffix + "." + asset.type : '';
  } else if (typeof source === 'string') {
    uri = source;
  } else if (source && typeof source.uri === 'string') {
    uri = source.uri;
  }

  if (uri) {
    var match = uri.match(svgDataUriPattern);

    if (match) {
      var prefix = match[1],
          svg = match[2];
      var encodedSvg = encodeURIComponent(svg);
      return "" + prefix + encodedSvg;
    }
  }

  return uri;
}

var Image = Object(react["forwardRef"])(function (props, ref) {
  var accessibilityLabel = props.accessibilityLabel,
      blurRadius = props.blurRadius,
      defaultSource = props.defaultSource,
      draggable = props.draggable,
      onError = props.onError,
      onLayout = props.onLayout,
      onLoad = props.onLoad,
      onLoadEnd = props.onLoadEnd,
      onLoadStart = props.onLoadStart,
      pointerEvents = props.pointerEvents,
      source = props.source,
      style = props.style,
      rest = _objectWithoutPropertiesLoose(props, ["accessibilityLabel", "blurRadius", "defaultSource", "draggable", "onError", "onLayout", "onLoad", "onLoadEnd", "onLoadStart", "pointerEvents", "source", "style"]);

  if (false) {}

  var _useState = Object(react["useState"])(function () {
    var uri = resolveAssetUri(source);

    if (uri != null) {
      var isLoaded = modules_ImageLoader.has(uri);

      if (isLoaded) {
        return LOADED;
      }
    }

    return IDLE;
  }),
      state = _useState[0],
      updateState = _useState[1];

  var _useState2 = Object(react["useState"])({}),
      layout = _useState2[0],
      updateLayout = _useState2[1];

  var hasTextAncestor = Object(react["useContext"])(TextAncestorContext["a" /* default */]);
  var hiddenImageRef = Object(react["useRef"])(null);
  var filterRef = Object(react["useRef"])(_filterId++);
  var requestRef = Object(react["useRef"])(null);
  var shouldDisplaySource = state === LOADED || state === LOADING && defaultSource == null;

  var _getFlatStyle = getFlatStyle(style, blurRadius, filterRef.current),
      flatStyle = _getFlatStyle[0],
      _resizeMode = _getFlatStyle[1],
      filter = _getFlatStyle[2],
      tintColor = _getFlatStyle[3];

  var resizeMode = props.resizeMode || _resizeMode || 'cover';
  var selectedSource = shouldDisplaySource ? source : defaultSource;
  var displayImageUri = resolveAssetUri(selectedSource);
  var imageSizeStyle = resolveAssetDimensions(selectedSource);
  var backgroundImage = displayImageUri ? "url(\"" + displayImageUri + "\")" : null;
  var backgroundSize = getBackgroundSize();
  var hiddenImage = displayImageUri ? Object(createElement["a" /* default */])('img', {
    alt: accessibilityLabel || '',
    classList: [classes.accessibilityImage],
    draggable: draggable || false,
    ref: hiddenImageRef,
    src: displayImageUri
  }) : null;

  function getBackgroundSize() {
    if (hiddenImageRef.current != null && (resizeMode === 'center' || resizeMode === 'repeat')) {
      var _hiddenImageRef$curre = hiddenImageRef.current,
          naturalHeight = _hiddenImageRef$curre.naturalHeight,
          naturalWidth = _hiddenImageRef$curre.naturalWidth;
      var height = layout.height,
          width = layout.width;

      if (naturalHeight && naturalWidth && height && width) {
        var scaleFactor = Math.min(1, width / naturalWidth, height / naturalHeight);
        var x = Math.ceil(scaleFactor * naturalWidth);
        var y = Math.ceil(scaleFactor * naturalHeight);
        return x + "px " + y + "px";
      }
    }
  }

  function handleLayout(e) {
    if (resizeMode === 'center' || resizeMode === 'repeat' || onLayout) {
      var _layout = e.nativeEvent.layout;
      onLayout && onLayout(e);
      updateLayout(_layout);
    }
  }

  var uri = resolveAssetUri(source);
  Object(react["useEffect"])(function () {
    abortPendingRequest();

    if (uri != null) {
      updateState(LOADING);

      if (onLoadStart) {
        onLoadStart();
      }

      requestRef.current = modules_ImageLoader.load(uri, function load(e) {
        updateState(LOADED);

        if (onLoad) {
          onLoad(e);
        }

        if (onLoadEnd) {
          onLoadEnd();
        }
      }, function error() {
        updateState(ERRORED);

        if (onError) {
          onError({
            nativeEvent: {
              error: "Failed to load resource " + uri + " (404)"
            }
          });
        }

        if (onLoadEnd) {
          onLoadEnd();
        }
      });
    }

    function abortPendingRequest() {
      if (requestRef.current != null) {
        modules_ImageLoader.abort(requestRef.current);
        requestRef.current = null;
      }
    }

    return abortPendingRequest;
  }, [uri, requestRef, updateState, onError, onLoad, onLoadEnd, onLoadStart]);
  return react_default.a.createElement(View["a" /* default */], _extends({}, rest, {
    accessibilityLabel: accessibilityLabel,
    onLayout: handleLayout,
    pointerEvents: pointerEvents,
    ref: ref,
    style: [styles.root, hasTextAncestor && styles.inline, imageSizeStyle, flatStyle]
  }), react_default.a.createElement(View["a" /* default */], {
    style: [styles.image, resizeModeStyles[resizeMode], {
      backgroundImage: backgroundImage,
      filter: filter
    }, backgroundSize != null && {
      backgroundSize: backgroundSize
    }],
    suppressHydrationWarning: true
  }), hiddenImage, createTintColorSVG(tintColor, filterRef.current));
});
Image.displayName = 'Image';

Image.getSize = function (uri, success, failure) {
  modules_ImageLoader.getSize(uri, success, failure);
};

Image.prefetch = function (uri) {
  return modules_ImageLoader.prefetch(uri);
};

Image.queryCache = function (uris) {
  return modules_ImageLoader.queryCache(uris);
};

var classes = css["a" /* default */].create({
  accessibilityImage: _objectSpread({}, StyleSheet["a" /* default */].absoluteFillObject, {
    height: '100%',
    opacity: 0,
    width: '100%',
    zIndex: -1
  })
});
var styles = StyleSheet["a" /* default */].create({
  root: {
    flexBasis: 'auto',
    overflow: 'hidden',
    zIndex: 0
  },
  inline: {
    display: 'inline-flex'
  },
  image: _objectSpread({}, StyleSheet["a" /* default */].absoluteFillObject, {
    backgroundColor: 'transparent',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    height: '100%',
    width: '100%',
    zIndex: -1
  })
});
var resizeModeStyles = StyleSheet["a" /* default */].create({
  center: {
    backgroundSize: 'auto'
  },
  contain: {
    backgroundSize: 'contain'
  },
  cover: {
    backgroundSize: 'cover'
  },
  none: {
    backgroundPosition: '0 0',
    backgroundSize: 'auto'
  },
  repeat: {
    backgroundPosition: '0 0',
    backgroundRepeat: 'repeat',
    backgroundSize: 'auto'
  },
  stretch: {
    backgroundSize: '100% 100%'
  }
});
/* harmony default export */ var exports_Image = __webpack_exports__["a"] = (Image);

/***/ }),

/***/ "utb+":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _UIManager__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("56YO");

var NativeModules = {
  UIManager: _UIManager__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"]
};
/* harmony default export */ __webpack_exports__["a"] = (NativeModules);

/***/ })

}]);
//# sourceMappingURL=3c4859d19f00ad0f5d804de5d236492f40221cb1-203af466c27a5b371339.js.map