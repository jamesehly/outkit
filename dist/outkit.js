/*! Outkit v0.2.5 - Copyright 2017 James Ehly - MIT License */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["outkit"] = factory();
	else
		root["outkit"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 14);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

Object.defineProperty(exports, "__esModule", { value: true });

var State = function () {
    function State() {
        _classCallCheck(this, State);

        this.okClassName = '';
        this.stateClassName = '';
        this.style = {};
    }

    _createClass(State, null, [{
        key: "animated",
        value: function animated(type) {
            var index = this.animatedProps.indexOf(type);
            return index >= 0;
        }
    }]);

    return State;
}();

State.animatedProps = ['style.height', 'style.width', 'style.top', 'style.bottom', 'style.left', 'style.right', 'style.opacity', 'style.zIndex'];
exports.State = State;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

Object.defineProperty(exports, "__esModule", { value: true });
var State_1 = __webpack_require__(0);
var ElementHelper_1 = __webpack_require__(4);

var Component = function () {
    function Component(logger, animator) {
        var _this = this;

        _classCallCheck(this, Component);

        this.step = function (delta, args) {
            var newState = args[0];
            var oldState = args[1];
            for (var name in newState.style) {
                if (!State_1.State.animated('style.' + name)) continue;
                var ns = newState.style[name];
                var os = oldState.style[name];
                if (ns === os) continue;
                var nsv = parseFloat(ns);
                var osv = parseFloat(os);
                if (isFinite(nsv) && isFinite(osv)) {
                    var value = (nsv - osv) * delta + osv + '';
                    if (!isFinite(ns) && ns.match(/px$/) || !isFinite(os) && os.match(/px$/)) value = value + "px";
                    _this._element.style[name] = value;
                }
            }
        };
        this._events = {};
        this._logger = logger;
        this._animator = animator;
        this._state = null;
        if (typeof this._animator !== 'undefined' && this._animator !== null && typeof this._animator.setStep !== 'undefined' && typeof this._animator.setStep === 'function') {
            this._animator.setStep(this.step);
        }
    }

    _createClass(Component, [{
        key: "getElement",
        value: function getElement() {
            return this._element;
        }
    }, {
        key: "setElement",
        value: function setElement(element) {
            this._element = element;
            return this;
        }
    }, {
        key: "getAnimator",
        value: function getAnimator() {
            return this._animator;
        }
    }, {
        key: "addChild",
        value: function addChild(component) {
            this._child = component;
            component.setParent(this);
            return this;
        }
    }, {
        key: "removeChild",
        value: function removeChild(component) {
            this._child = null;
            return this;
        }
    }, {
        key: "getChild",
        value: function getChild() {
            return this._child;
        }
    }, {
        key: "setParent",
        value: function setParent(parent) {
            this._parent = parent;
            return this;
        }
    }, {
        key: "getRoot",
        value: function getRoot() {
            if (this._parent && typeof this._parent['getRoot'] === 'function') {
                return this._parent.getRoot();
            }
            return this;
        }
    }, {
        key: "getState",
        value: function getState() {
            return this._state;
        }
    }, {
        key: "setState",
        value: function setState(state) {
            this._state = state;
            return this;
        }
    }, {
        key: "registerEvent",
        value: function registerEvent(name, func) {
            this._events[name] = func;
            return this;
        }
    }, {
        key: "relay",
        value: function relay(message) {
            var promises = [];
            if (typeof this._events[message] === 'function') promises.push(this._events[message]());
            var child = this.getChild();
            if ((typeof child === "undefined" ? "undefined" : _typeof(child)) === 'object' && typeof child['relay'] === 'function') promises.push(this.getChild().relay(message));
            return Promise.all(promises);
        }
    }, {
        key: "merge",
        value: function merge(newState, oldState) {
            var state = new State_1.State();
            state = Object.assign(state, oldState, newState);
            state.style = Object.assign({}, oldState.style, newState.style);
            return state;
        }
    }, {
        key: "render",
        value: function render(newState) {
            var _this2 = this;

            var oldState = this._state;
            var isInitial = false;
            if (!this._state) {
                oldState = new State_1.State();
                isInitial = true;
                this._element.style.cssText = null;
            } else {
                newState = this.merge(newState, oldState);
            }
            return new Promise(function (resolve, reject) {
                if (!_this2._element) {
                    _this2._logger.error("Element is undefined.  Use setElement() before calling render().");
                    reject(oldState);
                    return;
                }
                if (newState.stateClassName && newState.stateClassName != oldState.stateClassName) {
                    ElementHelper_1.default.changeClass(_this2._element, newState.stateClassName, oldState.stateClassName);
                }
                if (newState.okClassName && newState.okClassName != oldState.okClassName) {
                    ElementHelper_1.default.changeClass(_this2._element, newState.okClassName, oldState.okClassName);
                }
                for (var name in newState.style) {
                    if (_this2._animator && State_1.State.animated('style.' + name) && newState.style[name] !== null && !isInitial) continue;
                    var ns = newState.style[name];
                    var os = oldState.style[name];
                    if (ns === os) continue;
                    _this2._element.style[name] = ns;
                }
                if (isInitial) {
                    _this2._logger.log("[Initial State][#" + _this2._element.id + "]:  " + JSON.stringify(newState) + " ]");
                    _this2._state = newState;
                    resolve(newState);
                    return;
                }
                if (_this2._animator) {
                    var n = Date.now();
                    return _this2._animator.animate(n, newState, oldState).then(function (finished) {
                        if (finished) {
                            _this2._logger.log("[Updated State][#" + _this2._element.id + "]:  " + JSON.stringify(newState) + " ]");
                            _this2._state = newState;
                            resolve(newState);
                        }
                    });
                }
                _this2._state = newState;
                resolve(newState);
            });
        }
    }]);

    return Component;
}();

exports.Component = Component;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

Object.defineProperty(exports, "__esModule", { value: true });
var Component_1 = __webpack_require__(1);

var Composite = function (_Component_1$Componen) {
    _inherits(Composite, _Component_1$Componen);

    function Composite(logger, animator) {
        _classCallCheck(this, Composite);

        var _this = _possibleConstructorReturn(this, (Composite.__proto__ || Object.getPrototypeOf(Composite)).call(this, logger, animator));

        _this._list = [];
        return _this;
    }

    _createClass(Composite, [{
        key: "addChild",
        value: function addChild(component) {
            this._list.push(component);
            component.setParent(this);
            return this;
        }
    }, {
        key: "removeChild",
        value: function removeChild(component) {
            var index = this._list.indexOf(component);
            this._list.splice(index, 1);
            return this;
        }
    }, {
        key: "getChild",
        value: function getChild() {
            return null;
        }
    }, {
        key: "getChildren",
        value: function getChildren() {
            return this._list;
        }
    }, {
        key: "relay",
        value: function relay(message) {
            var promises = [];
            if (typeof this._events[message] === 'function') promises.push(this._events[message]());
            var _iteratorNormalCompletion = true;
            var _didIteratorError = false;
            var _iteratorError = undefined;

            try {
                for (var _iterator = this._list[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                    var child = _step.value;

                    if ((typeof child === "undefined" ? "undefined" : _typeof(child)) === 'object' && typeof child['relay'] === 'function') promises.push(child.relay(message));
                }
            } catch (err) {
                _didIteratorError = true;
                _iteratorError = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion && _iterator.return) {
                        _iterator.return();
                    }
                } finally {
                    if (_didIteratorError) {
                        throw _iteratorError;
                    }
                }
            }

            return Promise.all(promises);
        }
    }]);

    return Composite;
}(Component_1.Component);

exports.Composite = Composite;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

Object.defineProperty(exports, "__esModule", { value: true });
var Component_1 = __webpack_require__(1);
var Logger_1 = __webpack_require__(5);
var StandardAnimator_1 = __webpack_require__(8);
var DrawerComponent_1 = __webpack_require__(7);
var OverlayComponent_1 = __webpack_require__(11);
var WindowComponent_1 = __webpack_require__(13);
var DraggableComponent_1 = __webpack_require__(9);
var HorizontalLayoutComponent_1 = __webpack_require__(10);
var VerticalLayoutComponent_1 = __webpack_require__(12);

var ComponentFactory = function () {
    function ComponentFactory() {
        _classCallCheck(this, ComponentFactory);
    }

    _createClass(ComponentFactory, [{
        key: "component",
        value: function component(element) {
            var component = new Component_1.Component(new Logger_1.default(), new StandardAnimator_1.default());
            component.setElement(this.getElement(element));
            return component;
        }
    }, {
        key: "drawer",
        value: function drawer(element) {
            var component = new DrawerComponent_1.DrawerComponent(new Logger_1.default(), new StandardAnimator_1.default());
            var el = this.getElement(element);
            component.setElement(el);
            component.init();
            return component;
        }
    }, {
        key: "overlay",
        value: function overlay(element) {
            var component = new OverlayComponent_1.OverlayComponent(new Logger_1.default(), new StandardAnimator_1.default());
            component.setElement(this.getElement(element));
            component.init();
            return component;
        }
    }, {
        key: "window",
        value: function window(element) {
            var component = new WindowComponent_1.WindowComponent(new Logger_1.default(), new StandardAnimator_1.default());
            component.setElement(this.getElement(element));
            component.init();
            return component;
        }
    }, {
        key: "draggable",
        value: function draggable(element) {
            var component = new DraggableComponent_1.DraggableComponent(new Logger_1.default(), new StandardAnimator_1.default());
            component.setElement(this.getElement(element));
            component.init();
            return component;
        }
    }, {
        key: "hlayout",
        value: function hlayout(element) {
            var component = new HorizontalLayoutComponent_1.HorizontalLayoutComponent(new Logger_1.default());
            component.setElement(this.getElement(element));
            component.init();
            return component;
        }
    }, {
        key: "vlayout",
        value: function vlayout(element) {
            var component = new VerticalLayoutComponent_1.VerticalLayoutComponent(new Logger_1.default());
            component.setElement(this.getElement(element));
            component.init();
            return component;
        }
    }, {
        key: "getElement",
        value: function getElement(query) {
            return document.querySelectorAll(query)[0];
        }
    }]);

    return ComponentFactory;
}();

exports.ComponentFactory = ComponentFactory;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

Object.defineProperty(exports, "__esModule", { value: true });

var ElementHelper = function () {
    function ElementHelper() {
        _classCallCheck(this, ElementHelper);
    }

    _createClass(ElementHelper, null, [{
        key: "changeClass",
        value: function changeClass(element, addClass, removeClass) {
            var classList = element.className.split(' ');
            if (removeClass) {
                var oldIndex = classList.indexOf(removeClass);
                if (oldIndex >= 0) {
                    classList.splice(oldIndex, 1);
                }
            }
            if (addClass) {
                var newIndex = classList.indexOf(addClass);
                if (newIndex < 0) {
                    classList.push(addClass);
                }
            }
            element.className = classList.join(' ');
        }
    }, {
        key: "setGuidId",
        value: function setGuidId(element) {
            var uniqueId = 'ok-guid-' + Math.random().toString(36).substring(2) + new Date().getTime().toString(36);
            element.id = uniqueId;
        }
    }]);

    return ElementHelper;
}();

exports.default = ElementHelper;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

Object.defineProperty(exports, "__esModule", { value: true });

var Logger = function () {
    function Logger() {
        var debug = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

        _classCallCheck(this, Logger);

        this._c = {
            warn: function warn(m) {},
            error: function error(m) {},
            info: function info(m) {},
            log: function log(m) {}
        };
        if (_typeof(window['console']) === 'object' && debug) this._c = window.console;
        this._debug = debug;
    }

    _createClass(Logger, [{
        key: "log",
        value: function log(message) {
            if (this._debug && typeof this._c.log === 'function') this._c.log(message);
        }
    }, {
        key: "warn",
        value: function warn(message) {
            if (this._debug && typeof this._c.warn === 'function') this._c.warn(message);
        }
    }, {
        key: "info",
        value: function info(message) {
            if (this._debug && typeof this._c.info === 'function') this._c.info(message);
        }
    }, {
        key: "error",
        value: function error(message) {
            if (this._debug && typeof this._c.error === 'function') this._c.error(message);
        }
    }]);

    return Logger;
}();

exports.default = Logger;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function __export(m) {
    for (var p in m) {
        if (!exports.hasOwnProperty(p)) exports[p] = m[p];
    }
}
Object.defineProperty(exports, "__esModule", { value: true });
var AnimatorTransition;
(function (AnimatorTransition) {
    AnimatorTransition[AnimatorTransition["Linear"] = 0] = "Linear";
    AnimatorTransition[AnimatorTransition["EaseIn"] = 1] = "EaseIn";
    AnimatorTransition[AnimatorTransition["EaseOut"] = 2] = "EaseOut";
    AnimatorTransition[AnimatorTransition["EaseInOut"] = 3] = "EaseInOut";
    AnimatorTransition[AnimatorTransition["PullIn"] = 4] = "PullIn";
    AnimatorTransition[AnimatorTransition["PushOut"] = 5] = "PushOut";
    AnimatorTransition[AnimatorTransition["PushPull"] = 6] = "PushPull";
})(AnimatorTransition = exports.AnimatorTransition || (exports.AnimatorTransition = {}));
__export(__webpack_require__(8));

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

Object.defineProperty(exports, "__esModule", { value: true });
var State_1 = __webpack_require__(0);
var Composite_1 = __webpack_require__(2);

var DrawerComponent = function (_Composite_1$Composit) {
    _inherits(DrawerComponent, _Composite_1$Composit);

    function DrawerComponent(logger, animator) {
        _classCallCheck(this, DrawerComponent);

        var _this = _possibleConstructorReturn(this, (DrawerComponent.__proto__ || Object.getPrototypeOf(DrawerComponent)).call(this, logger, animator));

        _this._dockPositions = ['left', 'right', 'top', 'bottom'];
        _this._dock = 'left';
        _this._minSize = 0;
        _this._maxSize = 280;
        _this._isOpen = false;
        _this.registerEvent('on', function () {
            return _this.on();
        });
        _this.registerEvent('off', function () {
            return _this.off();
        });
        _this.registerEvent('toggle', function () {
            return _this.toggle();
        });
        _this.registerEvent('init', function () {
            return _this.init();
        });
        return _this;
    }

    _createClass(DrawerComponent, [{
        key: "dock",
        value: function dock(_dock) {
            var _this2 = this;

            return new Promise(function (resolve, reject) {
                if (_this2._dockPositions.indexOf(_dock) < 0) {
                    _this2._logger.error("\"" + _dock + "\" is not a valid dock position.  Valid positions are " + _this2._dockPositions.join(', '));
                    reject();
                }
                return _this2.relay('off').then(function () {
                    _this2._dock = _dock;
                    _this2._state = null;
                    return _this2.init();
                });
            });
        }
    }, {
        key: "minSize",
        value: function minSize(n) {
            if (n < 0) {
                this._logger.error("minSize number must be greater than or equal to zero.");
                return this;
            }
            this._minSize = n;
            return this;
        }
    }, {
        key: "maxSize",
        value: function maxSize(n) {
            if (n < 0) {
                this._logger.error("maxSize number must be greater than or equal to zero.");
                return this;
            }
            this._maxSize = n;
            return this;
        }
    }, {
        key: "init",
        value: function init() {
            var state = new State_1.State();
            state.okClassName = 'ok-drawer';
            state.style.position = 'fixed';
            state.style.display = 'block';
            state.style.zIndex = '10000';
            if (this.isLeft()) {
                state.style.width = this._maxSize + "px";
                state.style.height = this.getElement().parentElement.offsetHeight + "px";
                state.style.left = "-" + this._maxSize + "px";
                state.style.top = '0';
            }
            if (this.isRight()) {
                state.style.width = this._maxSize + "px";
                state.style.height = this.getElement().parentElement.offsetHeight + "px";
                state.style.right = "-" + this._maxSize + "px";
                state.style.top = '0';
            }
            if (this.isTop()) {
                state.style.width = this.getElement().parentElement.offsetWidth + "px";
                state.style.height = this._maxSize + "px";
                state.style.top = "-" + this._maxSize + "px";
                state.style.left = '0';
            }
            if (this.isBottom()) {
                state.style.width = this.getElement().parentElement.offsetWidth + "px";
                state.style.height = this._maxSize + "px";
                state.style.bottom = "-" + this._maxSize + "px";
                state.style.left = '0';
            }
            return this.render(state);
        }
    }, {
        key: "toggle",
        value: function toggle() {
            return this._isOpen ? this.off() : this.on();
        }
    }, {
        key: "on",
        value: function on() {
            var _this3 = this;

            if (this._isOpen) return new Promise(function (resolve, reject) {
                resolve(_this3._state);
            });
            this._isOpen = true;
            var state = new State_1.State();
            if (this.isLeft()) {
                state.style.left = '0';
            }
            if (this.isRight()) {
                state.style.right = '0';
            }
            if (this.isTop()) {
                state.style.top = '0';
            }
            if (this.isBottom()) {
                state.style.bottom = '0';
            }
            state.stateClassName = 'ok-on';
            return this.render(state);
        }
    }, {
        key: "off",
        value: function off() {
            var _this4 = this;

            if (!this._isOpen) return new Promise(function (resolve, reject) {
                resolve(_this4._state);
            });
            this._isOpen = false;
            var state = new State_1.State();
            if (this.isLeft()) {
                state.style.left = "-" + this._maxSize + "px";
            }
            if (this.isRight()) {
                state.style.right = "-" + this._maxSize + "px";
            }
            if (this.isTop()) {
                state.style.top = "-" + this._maxSize + "px";
            }
            if (this.isBottom()) {
                state.style.bottom = "-" + this._maxSize + "px";
            }
            state.stateClassName = 'ok-off';
            return this.render(state);
        }
    }, {
        key: "isLeft",
        value: function isLeft() {
            return this._dock === 'left';
        }
    }, {
        key: "isRight",
        value: function isRight() {
            return this._dock === 'right';
        }
    }, {
        key: "isTop",
        value: function isTop() {
            return this._dock === 'top';
        }
    }, {
        key: "isBottom",
        value: function isBottom() {
            return this._dock === 'bottom';
        }
    }]);

    return DrawerComponent;
}(Composite_1.Composite);

exports.DrawerComponent = DrawerComponent;

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

Object.defineProperty(exports, "__esModule", { value: true });
var Animators_1 = __webpack_require__(6);

var StandardAnimator = function () {
    function StandardAnimator() {
        _classCallCheck(this, StandardAnimator);

        this.easeOut = this.makeEaseOut(this.easeIn);
        this.easeInOut = this.makeEaseInOut(this.easeIn);
        this.pushOut = this.makeEaseOut(this.pullIn);
        this.pushPull = this.makeEaseInOut(this.pullIn);
        this._duration = 200;
        this._step = function () {};
        this._rate = 16;
        this._transition = this.linear;
    }

    _createClass(StandardAnimator, [{
        key: "setStep",
        value: function setStep(step) {
            this._step = step;
            return this;
        }
    }, {
        key: "setDuration",
        value: function setDuration(duration) {
            this._duration = duration;
            return this;
        }
    }, {
        key: "setRate",
        value: function setRate(rate) {
            this._rate = rate;
            return this;
        }
    }, {
        key: "setTransition",
        value: function setTransition(transition) {
            switch (transition) {
                case Animators_1.AnimatorTransition.EaseIn:
                    this._transition = this.easeIn;
                    break;
                case Animators_1.AnimatorTransition.EaseOut:
                    this._transition = this.easeOut;
                    break;
                case Animators_1.AnimatorTransition.EaseInOut:
                    this._transition = this.easeInOut;
                    break;
                case Animators_1.AnimatorTransition.PullIn:
                    this._transition = this.pullIn;
                    break;
                case Animators_1.AnimatorTransition.PushOut:
                    this._transition = this.pushOut;
                    break;
                case Animators_1.AnimatorTransition.PushPull:
                    this._transition = this.pushPull;
                    break;
                default:
                    this._transition = this.linear;
                    break;
            }
        }
    }, {
        key: "animate",
        value: function animate(start) {
            var _this = this;

            for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
                args[_key - 1] = arguments[_key];
            }

            return new Promise(function (resolve) {
                if (typeof window['requestAnimationFrame'] === 'function') {
                    var _start = performance.now();
                    var rafAnimate = function rafAnimate(time) {
                        var progress = (time - _start) / _this._duration;
                        if (progress > 1) progress = 1;
                        var delta = _this._transition(progress);
                        _this._step(delta, args);
                        if (progress < 1) {
                            requestAnimationFrame(rafAnimate);
                        } else {
                            resolve(true);
                        }
                    };
                    requestAnimationFrame(rafAnimate);
                } else {
                    _this._interval = window.setInterval(function () {
                        var deltaTime = Date.now();
                        var timePassed = deltaTime - start;
                        var progress = timePassed / _this._duration;
                        if (progress > 1) progress = 1;
                        var delta = _this._transition(progress);
                        _this._step(delta, args);
                        if (progress == 1) {
                            clearInterval(_this._interval);
                            resolve(true);
                        }
                    }, _this._rate);
                }
            });
        }
    }, {
        key: "linear",
        value: function linear(progress) {
            return progress;
        }
    }, {
        key: "easeIn",
        value: function easeIn(progress) {
            return Math.pow(progress, 5);
        }
    }, {
        key: "pullIn",
        value: function pullIn(progress) {
            var x = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 2;

            return Math.pow(progress, 2) * ((x + 1) * progress - x);
        }
    }, {
        key: "makeEaseOut",
        value: function makeEaseOut(timing) {
            return function (progress) {
                return 1 - timing(1 - progress);
            };
        }
    }, {
        key: "makeEaseInOut",
        value: function makeEaseInOut(timing) {
            return function (progress) {
                if (progress < .5) return timing(2 * progress) / 2;else return (2 - timing(2 * (1 - progress))) / 2;
            };
        }
    }]);

    return StandardAnimator;
}();

exports.default = StandardAnimator;

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

Object.defineProperty(exports, "__esModule", { value: true });
var Composite_1 = __webpack_require__(2);
var State_1 = __webpack_require__(0);

var DraggableComponent = function (_Composite_1$Composit) {
    _inherits(DraggableComponent, _Composite_1$Composit);

    function DraggableComponent(logger, animator) {
        _classCallCheck(this, DraggableComponent);

        var _this = _possibleConstructorReturn(this, (DraggableComponent.__proto__ || Object.getPrototypeOf(DraggableComponent)).call(this, logger, animator));

        _this.startDrag = function (event) {
            var de = _this.getElement();
            if (_this._dragRoot) {
                de = _this.getRoot().getElement();
            }
            var parent = de.parentElement;
            var x = event.clientX,
                y = event.clientY,
                top = de.offsetTop,
                left = de.offsetLeft,
                deWidth = de.offsetWidth,
                deHeight = de.offsetHeight,
                parentTop = parent.offsetTop,
                parentLeft = parent.offsetLeft,
                parentWidth = parent.offsetWidth,
                parentHeight = parent.offsetHeight,
                diffX = x - left,
                diffY = y - top;
            document.onmousemove = function (event) {
                var x = event.clientX,
                    y = event.clientY,
                    aX = x - diffX,
                    aY = y - diffY;
                if (aX < 0) aX = 0;
                if (aY < 0) aY = 0;
                if (aX + deWidth > parentWidth) aX = parentWidth - deWidth;
                if (aY + deHeight > parentHeight) aY = parentHeight - deHeight;
                _this.move(de, aX, aY);
            };
        };
        _this._dragRoot = false;
        _this.registerEvent('init', function () {
            return _this.init();
        });
        return _this;
    }

    _createClass(DraggableComponent, [{
        key: "dragRoot",
        value: function dragRoot(flag) {
            this._dragRoot = flag;
            return this;
        }
    }, {
        key: "init",
        value: function init() {
            var state = new State_1.State();
            state.okClassName = 'ok-draggable';
            this.getElement().addEventListener('mousedown', this.startDrag);
            this.getElement().addEventListener('mouseup', function () {
                document.onmousemove = function () {};
            });
            return this.render(state);
        }
    }, {
        key: "move",
        value: function move(element, x, y) {
            element.style.left = x + "px";
            element.style.top = y + "px";
        }
    }, {
        key: "stopDrag",
        value: function stopDrag() {}
    }]);

    return DraggableComponent;
}(Composite_1.Composite);

exports.DraggableComponent = DraggableComponent;

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

Object.defineProperty(exports, "__esModule", { value: true });
var Composite_1 = __webpack_require__(2);
var Logger_1 = __webpack_require__(5);
var Component_1 = __webpack_require__(1);
var ComponentFactory_1 = __webpack_require__(3);
var ElementHelper_1 = __webpack_require__(4);
var State_1 = __webpack_require__(0);

var HorizontalLayoutComponent = function (_Composite_1$Composit) {
    _inherits(HorizontalLayoutComponent, _Composite_1$Composit);

    function HorizontalLayoutComponent(logger, animator) {
        _classCallCheck(this, HorizontalLayoutComponent);

        var _this = _possibleConstructorReturn(this, (HorizontalLayoutComponent.__proto__ || Object.getPrototypeOf(HorizontalLayoutComponent)).call(this, logger, animator));

        _this.fixedChildren = new Array();
        _this.perctChildren = new Array();
        _this.fluidChildren = new Array();
        _this.registerEvent('init', function () {
            return _this.init();
        });
        return _this;
    }

    _createClass(HorizontalLayoutComponent, [{
        key: "init",
        value: function init() {
            var el = this.getElement();
            var factory = new ComponentFactory_1.ComponentFactory();
            for (var i = 0; i < el.children.length; i++) {
                var child = el.children[i];
                if (!child.id) ElementHelper_1.default.setGuidId(child);
                var childComponent = new Component_1.Component(new Logger_1.default());
                childComponent.setElement(document.getElementById(child.id));
                var size = child.getAttribute('data-size') || '100%';
                if (size === '100%') {
                    this.fluidChildren.push(childComponent);
                } else if (size.match(/^[\d]+%$/)) {
                    this.perctChildren.push(childComponent);
                } else {
                    this.fixedChildren.push(childComponent);
                }
                childComponent.render({ style: { height: '100%', width: size, float: 'left' } });
                this.addChild(childComponent);
            }
            window.removeEventListener('resize', this.resize.bind(this));
            window.addEventListener('resize', this.resize.bind(this));
            var state = new State_1.State();
            state.style.height = this.getElement().parentElement.offsetHeight + 'px';
            state.style.width = this.getElement().parentElement.offsetWidth + 'px';
            state.style.display = "block";
            return this.render(state);
        }
    }, {
        key: "resize",
        value: function resize() {
            var state = new State_1.State();
            state.style.height = this.getElement().parentElement.offsetHeight + 'px';
            state.style.width = this.getElement().parentElement.offsetWidth + 'px';
            return this.render(state);
        }
    }, {
        key: "render",
        value: function render(newState) {
            var promises = [];
            promises.push(_get(HorizontalLayoutComponent.prototype.__proto__ || Object.getPrototypeOf(HorizontalLayoutComponent.prototype), "render", this).call(this, newState));
            var totalWidth = this.getElement().offsetWidth;
            var fluidWidth = totalWidth;
            var totalHeight = this.getElement().offsetHeight;
            var _iteratorNormalCompletion = true;
            var _didIteratorError = false;
            var _iteratorError = undefined;

            try {
                for (var _iterator = this.fixedChildren[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                    var el = _step.value;

                    fluidWidth -= el.getElement().offsetWidth;
                }
            } catch (err) {
                _didIteratorError = true;
                _iteratorError = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion && _iterator.return) {
                        _iterator.return();
                    }
                } finally {
                    if (_didIteratorError) {
                        throw _iteratorError;
                    }
                }
            }

            var _iteratorNormalCompletion2 = true;
            var _didIteratorError2 = false;
            var _iteratorError2 = undefined;

            try {
                for (var _iterator2 = this.perctChildren[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
                    var _el = _step2.value;

                    var _width = parseFloat(_el.getElement().getAttribute('data-size')) / 100 * fluidWidth;
                    fluidWidth -= _width;
                    _el.render({ style: { width: _width + 'px' } });
                }
            } catch (err) {
                _didIteratorError2 = true;
                _iteratorError2 = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion2 && _iterator2.return) {
                        _iterator2.return();
                    }
                } finally {
                    if (_didIteratorError2) {
                        throw _iteratorError2;
                    }
                }
            }

            var _iteratorNormalCompletion3 = true;
            var _didIteratorError3 = false;
            var _iteratorError3 = undefined;

            try {
                for (var _iterator3 = this.fluidChildren[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
                    var _el2 = _step3.value;

                    var width = fluidWidth / this.fluidChildren.length;
                    promises.push(_el2.render({ style: { width: width + 'px' } }));
                }
            } catch (err) {
                _didIteratorError3 = true;
                _iteratorError3 = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion3 && _iterator3.return) {
                        _iterator3.return();
                    }
                } finally {
                    if (_didIteratorError3) {
                        throw _iteratorError3;
                    }
                }
            }

            return Promise.all(promises);
        }
    }]);

    return HorizontalLayoutComponent;
}(Composite_1.Composite);

exports.HorizontalLayoutComponent = HorizontalLayoutComponent;

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

Object.defineProperty(exports, "__esModule", { value: true });
var State_1 = __webpack_require__(0);
var Component_1 = __webpack_require__(1);

var OverlayComponent = function (_Component_1$Componen) {
    _inherits(OverlayComponent, _Component_1$Componen);

    function OverlayComponent(logger, animator) {
        _classCallCheck(this, OverlayComponent);

        var _this = _possibleConstructorReturn(this, (OverlayComponent.__proto__ || Object.getPrototypeOf(OverlayComponent)).call(this, logger, animator));

        _this.clickEvent = function () {
            _this.getRoot().relay('off');
        };
        _this._opacity = .8;
        _this._color = '#000000';
        _this._isOn = false;
        _this.registerEvent('on', function () {
            return _this.on();
        });
        _this.registerEvent('off', function () {
            return _this.off();
        });
        _this.registerEvent('toggle', function () {
            return _this.toggle();
        });
        _this.registerEvent('init', function () {
            return _this.init();
        });
        return _this;
    }

    _createClass(OverlayComponent, [{
        key: "opacity",
        value: function opacity(n) {
            if (n < 0) {
                this._logger.error("Opacity must be greater than or equal to zero.");
                return this;
            }
            if (n > 1) {
                this._logger.error("Opacity must be less than or equal to one.");
                return this;
            }
            this._opacity = n;
            return this;
        }
    }, {
        key: "color",
        value: function color(c) {
            this._color = c;
            return this;
        }
    }, {
        key: "init",
        value: function init() {
            var state = new State_1.State();
            state.okClassName = 'ok-overlay';
            state.style.height = "100%";
            state.style.width = "100%";
            state.style.position = "fixed";
            state.style.backgroundColor = this._color;
            state.style.opacity = '0';
            state.style.display = 'none';
            state.style.top = '0';
            state.style.left = '0';
            if (this.getElement()) {
                this.getElement().addEventListener('click', this.clickEvent);
            }
            return this.render(state);
        }
    }, {
        key: "toggle",
        value: function toggle() {
            return this._isOn ? this.off() : this.on();
        }
    }, {
        key: "on",
        value: function on() {
            var _this2 = this;

            if (this._isOn) return new Promise(function (resolve, reject) {
                resolve(_this2._state);
            });
            this._isOn = true;
            return this.render(this.onState());
        }
    }, {
        key: "off",
        value: function off() {
            var _this3 = this;

            if (!this._isOn) return new Promise(function (resolve, reject) {
                resolve(_this3._state);
            });
            this._isOn = false;
            return this.render(this.offState()).then(function (result) {
                return _this3.render(_this3.hiddenState());
            });
        }
    }, {
        key: "onState",
        value: function onState() {
            var state = new State_1.State();
            state.style.display = 'block';
            state.style.opacity = this._opacity.toString();
            return state;
        }
    }, {
        key: "offState",
        value: function offState() {
            var state = new State_1.State();
            state.style.opacity = '0';
            return state;
        }
    }, {
        key: "hiddenState",
        value: function hiddenState() {
            var state = new State_1.State();
            state.style.display = 'none';
            return state;
        }
    }]);

    return OverlayComponent;
}(Component_1.Component);

exports.OverlayComponent = OverlayComponent;

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

Object.defineProperty(exports, "__esModule", { value: true });
var Composite_1 = __webpack_require__(2);
var Logger_1 = __webpack_require__(5);
var Component_1 = __webpack_require__(1);
var ComponentFactory_1 = __webpack_require__(3);
var ElementHelper_1 = __webpack_require__(4);
var State_1 = __webpack_require__(0);

var VerticalLayoutComponent = function (_Composite_1$Composit) {
    _inherits(VerticalLayoutComponent, _Composite_1$Composit);

    function VerticalLayoutComponent(logger, animator) {
        _classCallCheck(this, VerticalLayoutComponent);

        var _this = _possibleConstructorReturn(this, (VerticalLayoutComponent.__proto__ || Object.getPrototypeOf(VerticalLayoutComponent)).call(this, logger, animator));

        _this.fixedChildren = new Array();
        _this.perctChildren = new Array();
        _this.fluidChildren = new Array();
        _this.registerEvent('init', function () {
            return _this.init();
        });
        return _this;
    }

    _createClass(VerticalLayoutComponent, [{
        key: "init",
        value: function init() {
            var el = this.getElement();
            var factory = new ComponentFactory_1.ComponentFactory();
            for (var i = 0; i < el.children.length; i++) {
                var child = el.children[i];
                if (!child.id) ElementHelper_1.default.setGuidId(child);
                var childComponent = new Component_1.Component(new Logger_1.default());
                childComponent.setElement(document.getElementById(child.id));
                var size = child.getAttribute('data-size') || '100%';
                if (size === '100%') {
                    this.fluidChildren.push(childComponent);
                } else if (size.match(/^[\d]+%$/)) {
                    this.perctChildren.push(childComponent);
                } else {
                    this.fixedChildren.push(childComponent);
                }
                childComponent.render({ style: { width: '100%', height: size, overflow: 'hidden', float: 'left' } });
                this.addChild(childComponent);
            }
            window.removeEventListener('resize', this.resize.bind(this));
            window.addEventListener('resize', this.resize.bind(this));
            var state = new State_1.State();
            state.style.height = this.getElement().parentElement.offsetHeight + 'px';
            state.style.width = this.getElement().parentElement.offsetWidth + 'px';
            state.style.display = "block";
            state.style.overflow = "hidden";
            state.style.float = "left";
            return this.render(state);
        }
    }, {
        key: "resize",
        value: function resize() {
            var state = new State_1.State();
            state.style.height = this.getElement().parentElement.offsetHeight + 'px';
            console.log(document.body.offsetHeight);
            state.style.width = this.getElement().parentElement.offsetWidth + 'px';
            return this.render(state);
        }
    }, {
        key: "render",
        value: function render(newState) {
            var promises = [];
            promises.push(_get(VerticalLayoutComponent.prototype.__proto__ || Object.getPrototypeOf(VerticalLayoutComponent.prototype), "render", this).call(this, newState));
            var totalHeight = this.getElement().offsetHeight;
            var fluidHeight = totalHeight;
            var totalWidth = this.getElement().offsetWidth;
            var _iteratorNormalCompletion = true;
            var _didIteratorError = false;
            var _iteratorError = undefined;

            try {
                for (var _iterator = this.fixedChildren[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                    var el = _step.value;

                    fluidHeight -= el.getElement().offsetHeight;
                }
            } catch (err) {
                _didIteratorError = true;
                _iteratorError = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion && _iterator.return) {
                        _iterator.return();
                    }
                } finally {
                    if (_didIteratorError) {
                        throw _iteratorError;
                    }
                }
            }

            var _iteratorNormalCompletion2 = true;
            var _didIteratorError2 = false;
            var _iteratorError2 = undefined;

            try {
                for (var _iterator2 = this.perctChildren[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
                    var _el = _step2.value;

                    var _height = parseFloat(_el.getElement().getAttribute('data-size')) / 100 * fluidHeight;
                    fluidHeight -= _height;
                    _el.render({ style: { height: _height + 'px' } });
                }
            } catch (err) {
                _didIteratorError2 = true;
                _iteratorError2 = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion2 && _iterator2.return) {
                        _iterator2.return();
                    }
                } finally {
                    if (_didIteratorError2) {
                        throw _iteratorError2;
                    }
                }
            }

            var _iteratorNormalCompletion3 = true;
            var _didIteratorError3 = false;
            var _iteratorError3 = undefined;

            try {
                for (var _iterator3 = this.fluidChildren[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
                    var _el2 = _step3.value;

                    var height = fluidHeight / this.fluidChildren.length;
                    promises.push(_el2.render({ style: { height: height + 'px' } }));
                }
            } catch (err) {
                _didIteratorError3 = true;
                _iteratorError3 = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion3 && _iterator3.return) {
                        _iterator3.return();
                    }
                } finally {
                    if (_didIteratorError3) {
                        throw _iteratorError3;
                    }
                }
            }

            return Promise.all(promises);
        }
    }]);

    return VerticalLayoutComponent;
}(Composite_1.Composite);

exports.VerticalLayoutComponent = VerticalLayoutComponent;

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

Object.defineProperty(exports, "__esModule", { value: true });
var State_1 = __webpack_require__(0);
var Composite_1 = __webpack_require__(2);

var WindowComponent = function (_Composite_1$Composit) {
    _inherits(WindowComponent, _Composite_1$Composit);

    function WindowComponent(logger, animator) {
        _classCallCheck(this, WindowComponent);

        var _this = _possibleConstructorReturn(this, (WindowComponent.__proto__ || Object.getPrototypeOf(WindowComponent)).call(this, logger, animator));

        _this._width = 0;
        _this._height = 0;
        _this._top = 0;
        _this._left = 0;
        _this._isOpen = false;
        _this.registerEvent('on', function () {
            return _this.on();
        });
        _this.registerEvent('off', function () {
            return _this.off();
        });
        _this.registerEvent('toggle', function () {
            return _this.toggle();
        });
        _this.registerEvent('init', function () {
            return _this.init();
        });
        return _this;
    }

    _createClass(WindowComponent, [{
        key: "width",
        value: function width(n) {
            if (n < 0) {
                this._logger.error("Width must be greater than or equal to zero.");
                return this;
            }
            this._width = n;
            return this;
        }
    }, {
        key: "height",
        value: function height(n) {
            if (n < 0) {
                this._logger.error("Height must be greater than or equal to zero.");
                return this;
            }
            this._height = n;
            return this;
        }
    }, {
        key: "top",
        value: function top(n) {
            this._top = n;
            return this;
        }
    }, {
        key: "left",
        value: function left(n) {
            this._left = n;
            return this;
        }
    }, {
        key: "init",
        value: function init() {
            var state = new State_1.State();
            state.okClassName = 'ok-window';
            state.style.position = 'absolute';
            state.style.display = 'none';
            state.style.zIndex = '9999';
            state.style.width = this.getElement().parentElement.offsetWidth / 2 + "px";
            state.style.height = this.getElement().parentElement.offsetHeight / 2 + "px";
            state.style.left = this._left + "px";
            state.style.top = this._top + "px";
            return this.render(state);
        }
    }, {
        key: "toggle",
        value: function toggle() {
            return this._isOpen ? this.off() : this.on();
        }
    }, {
        key: "on",
        value: function on() {
            var _this2 = this;

            if (this._isOpen) return new Promise(function (resolve, reject) {
                resolve(_this2._state);
            });
            this._isOpen = true;
            var state = new State_1.State();
            state.style.display = 'block';
            return this.render(state);
        }
    }, {
        key: "off",
        value: function off() {
            var _this3 = this;

            if (!this._isOpen) return new Promise(function (resolve, reject) {
                resolve(_this3._state);
            });
            this._isOpen = false;
            var state = new State_1.State();
            state.style.display = 'none';
            return this.render(state);
        }
    }]);

    return WindowComponent;
}(Composite_1.Composite);

exports.WindowComponent = WindowComponent;

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function __export(m) {
    for (var p in m) {
        if (!exports.hasOwnProperty(p)) exports[p] = m[p];
    }
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(0));
__export(__webpack_require__(3));
__export(__webpack_require__(1));
__export(__webpack_require__(2));
__export(__webpack_require__(7));
__export(__webpack_require__(6));

/***/ })
/******/ ]);
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCBmZjVjZWIzOTkzNTZmOWExYTlkOSIsIndlYnBhY2s6Ly8vLi9zcmMvc3RhdGUvU3RhdGUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudC9Db21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudC9Db21wb3NpdGUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudC9Db21wb25lbnRGYWN0b3J5LnRzIiwid2VicGFjazovLy8uL3NyYy91dGlsL0VsZW1lbnRIZWxwZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWwvTG9nZ2VyLnRzIiwid2VicGFjazovLy8uL3NyYy9hbmltYXRvci9BbmltYXRvcnMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudC9EcmF3ZXJDb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FuaW1hdG9yL1N0YW5kYXJkQW5pbWF0b3IudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudC9EcmFnZ2FibGVDb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudC9Ib3Jpem9udGFsTGF5b3V0Q29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnQvT3ZlcmxheUNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50L1ZlcnRpY2FsTGF5b3V0Q29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnQvV2luZG93Q29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL3NyYy9vdXRraXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxPO0FDVkE7QUFDQTs7QUFFQTtBQUNB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QUFNLE1BQVEsVUFBVztBQUN4QixtQkFBSyxLQUFPLE9BQ3RCO0FBRUc7Ozs7OztBQUNJLGdCQUFDLENBQUssS0FBUyxvQkFDSSxRQUFDLFVBQVEsU0FBUTtBQUN4Qix3QkFBSyxPQUNoQjtBQUFHLGFBRkksQ0FBRDtBQUdOLGlCQUFRLFVBQVM7QUFFckIsZ0JBQVMsUUFBRyxJQUFJLFFBQVE7QUFDbkIsa0JBQU0sTUFBUSxVQUFVO0FBQ3ZCLG1CQUFLLEtBQU8sT0FDdEI7QUFDSDs7OztFQWpHb0MsWUFBUzs7QUFBOUMsMEJBaUdDLGdCOzs7Ozs7Ozs7Ozs7Ozs7QUN0R0QsNkJBQThCO0FBQzlCLDZCQUE2QztBQUM3Qyw2QkFBc0M7QUFDdEMsNkJBQXNDO0FBQ3RDLDZCQUE0QztBQUM1Qyw2QkFBcUMsSSIsImZpbGUiOiJkaXN0L291dGtpdC5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFtdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcIm91dGtpdFwiXSA9IGZhY3RvcnkoKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJvdXRraXRcIl0gPSBmYWN0b3J5KCk7XG59KSh0aGlzLCBmdW5jdGlvbigpIHtcbnJldHVybiBcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gaWRlbnRpdHkgZnVuY3Rpb24gZm9yIGNhbGxpbmcgaGFybW9ueSBpbXBvcnRzIHdpdGggdGhlIGNvcnJlY3QgY29udGV4dFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5pID0gZnVuY3Rpb24odmFsdWUpIHsgcmV0dXJuIHZhbHVlOyB9O1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAxNCk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgZmY1Y2ViMzk5MzU2ZjlhMWE5ZDkiLCJleHBvcnQgY2xhc3MgU3RhdGUge1xyXG4gICAgLy8gcG9zc2libHkgcmVmYWN0b3IgdGhlc2UgY2xhc3NlcyBpbnRvIGFuIGFycmF5IG9mIGNsYXNzZXMgdGhhdCBhcmUgbWFuYWdlZFxyXG4gICAgLy8gdmlhIG1ldGhvZHMgaW4gdGhpcyBjbGFzc1xyXG4gICAgb2tDbGFzc05hbWU/OiBzdHJpbmc7XHJcbiAgICBzdGF0ZUNsYXNzTmFtZT86IHN0cmluZztcclxuICAgIHN0eWxlPzoge1xyXG4gICAgICAgIGhlaWdodD86IHN0cmluZztcclxuICAgICAgICB3aWR0aD86IHN0cmluZztcclxuICAgICAgICBvdmVyZmxvdz86IHN0cmluZztcclxuICAgICAgICBmbG9hdD86IHN0cmluZztcclxuICAgICAgICBwb3NpdGlvbj86IHN0cmluZztcclxuICAgICAgICB6SW5kZXg/OiBzdHJpbmc7XHJcbiAgICAgICAgdG9wPzogc3RyaW5nO1xyXG4gICAgICAgIGJvdHRvbT86IHN0cmluZztcclxuICAgICAgICBsZWZ0Pzogc3RyaW5nO1xyXG4gICAgICAgIHJpZ2h0Pzogc3RyaW5nO1xyXG4gICAgICAgIGRpc3BsYXk/OiBzdHJpbmc7XHJcbiAgICAgICAgYmFja2dyb3VuZENvbG9yPzogc3RyaW5nO1xyXG4gICAgICAgIG9wYWNpdHk/OiBzdHJpbmc7XHJcbiAgICB9XHJcbiAgICBzdGF0aWMgcmVhZG9ubHkgYW5pbWF0ZWRQcm9wczogQXJyYXk8c3RyaW5nPiA9IFtcclxuICAgICAgICAnc3R5bGUuaGVpZ2h0JywgXHJcbiAgICAgICAgJ3N0eWxlLndpZHRoJywgXHJcbiAgICAgICAgJ3N0eWxlLnRvcCcsIFxyXG4gICAgICAgICdzdHlsZS5ib3R0b20nLCBcclxuICAgICAgICAnc3R5bGUubGVmdCcsIFxyXG4gICAgICAgICdzdHlsZS5yaWdodCcsIFxyXG4gICAgICAgICdzdHlsZS5vcGFjaXR5JywgXHJcbiAgICAgICAgJ3N0eWxlLnpJbmRleCdcclxuICAgICAgICBdO1xyXG4gICAgXHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLm9rQ2xhc3NOYW1lID0gJyc7XHJcbiAgICAgICAgdGhpcy5zdGF0ZUNsYXNzTmFtZSA9ICcnO1xyXG4gICAgICAgIHRoaXMuc3R5bGUgPSB7fTtcclxuICAgICAgICB9XHJcblxyXG4gICAgc3RhdGljIGFuaW1hdGVkKHR5cGU6IHN0cmluZykge1xyXG4gICAgICAgIHZhciBpbmRleCA9IHRoaXMuYW5pbWF0ZWRQcm9wcy5pbmRleE9mKHR5cGUpO1xyXG4gICAgICAgIHJldHVybiBpbmRleCA+PSAwO1xyXG4gICAgfSBcclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvc3RhdGUvU3RhdGUudHMiLCJpbXBvcnQgeyBJTG9nZ2VyIH0gZnJvbSBcIi4uL3V0aWwvTG9nZ2VyXCI7XHJcbmltcG9ydCB7IElBbmltYXRvciB9IGZyb20gXCIuLi9hbmltYXRvci9BbmltYXRvcnNcIjtcclxuaW1wb3J0IHsgU3RhdGUgfSBmcm9tIFwiLi4vc3RhdGUvU3RhdGVcIjtcclxuaW1wb3J0IEVsZW1lbnRIZWxwZXIgZnJvbSBcIi4uL3V0aWwvRWxlbWVudEhlbHBlclwiO1xyXG5cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSUNvbXBvbmVudCB7XHJcbiAgICByZWxheShtZXNzYWdlOiBzdHJpbmcpOiBQcm9taXNlPGFueT47XHJcbiAgICByZWdpc3RlckV2ZW50KG5hbWU6IHN0cmluZywgZnVuYz86IEZ1bmN0aW9uKTogdGhpcztcclxuICAgIHNldEVsZW1lbnQoZWxlbWVudDogSFRNTEVsZW1lbnQpOiB0aGlzO1xyXG4gICAgZ2V0RWxlbWVudCgpOiBIVE1MRWxlbWVudDtcclxuICAgIGdldEFuaW1hdG9yKCk6IElBbmltYXRvcjtcclxuICAgIGFkZENoaWxkKGNvbXBvbmVudDogSUNvbXBvbmVudCk6IHRoaXM7XHJcbiAgICByZW1vdmVDaGlsZChjb21wb25lbnQ6IElDb21wb25lbnQpOiB0aGlzO1xyXG4gICAgZ2V0Q2hpbGQoKTogSUNvbXBvbmVudDtcclxuICAgIGdldFJvb3QoKTogSUNvbXBvbmVudDtcclxuICAgIHNldFBhcmVudChwYXJlbnQ6IElDb21wb25lbnQpOiB0aGlzO1xyXG4gICAgcmVuZGVyKG5ld1N0YXRlOiBTdGF0ZSk6IFByb21pc2U8YW55PjtcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIENvbXBvbmVudCBpbXBsZW1lbnRzIElDb21wb25lbnQge1xyXG5cclxuICAgIHByaXZhdGUgX2VsZW1lbnQ6IEhUTUxFbGVtZW50O1xyXG4gICAgcHJpdmF0ZSBfY2hpbGQ6IElDb21wb25lbnQ7XHJcbiAgICBwcml2YXRlIF9wYXJlbnQ6IElDb21wb25lbnQ7XHJcblxyXG4gICAgcHJvdGVjdGVkIF9sb2dnZXI6IElMb2dnZXI7XHJcbiAgICBwcm90ZWN0ZWQgX2FuaW1hdG9yOiBJQW5pbWF0b3I7XHJcbiAgICBwcm90ZWN0ZWQgX2V2ZW50czogeyBbaWQ6IHN0cmluZ106IEZ1bmN0aW9uIH07XHJcbiAgICBwcm90ZWN0ZWQgX3N0YXRlOiBTdGF0ZTtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihsb2dnZXI6IElMb2dnZXIsIGFuaW1hdG9yPzogSUFuaW1hdG9yKSB7XHJcbiAgICAgICAgdGhpcy5fZXZlbnRzID0ge307XHJcbiAgICAgICAgdGhpcy5fbG9nZ2VyID0gbG9nZ2VyO1xyXG4gICAgICAgIHRoaXMuX2FuaW1hdG9yID0gYW5pbWF0b3I7XHJcbiAgICAgICAgdGhpcy5fc3RhdGUgPSBudWxsO1xyXG4gICAgICAgIGlmICh0eXBlb2YgdGhpcy5fYW5pbWF0b3IgIT09ICd1bmRlZmluZWQnICYmIFxyXG4gICAgICAgICAgICB0aGlzLl9hbmltYXRvciAhPT0gbnVsbCAmJlxyXG4gICAgICAgICAgICB0eXBlb2YgdGhpcy5fYW5pbWF0b3Iuc2V0U3RlcCAhPT0gJ3VuZGVmaW5lZCcgJiZcclxuICAgICAgICAgICAgdHlwZW9mIHRoaXMuX2FuaW1hdG9yLnNldFN0ZXAgPT09ICdmdW5jdGlvbicpIHtcclxuICAgICAgICAgICAgdGhpcy5fYW5pbWF0b3Iuc2V0U3RlcCh0aGlzLnN0ZXApO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBnZXRFbGVtZW50KCk6IEhUTUxFbGVtZW50IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZWxlbWVudDtcclxuICAgIH1cclxuXHJcbiAgICBzZXRFbGVtZW50KGVsZW1lbnQ6IEhUTUxFbGVtZW50KTogdGhpcyB7XHJcbiAgICAgICAgdGhpcy5fZWxlbWVudCA9IGVsZW1lbnQ7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0QW5pbWF0b3IoKTogSUFuaW1hdG9yIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fYW5pbWF0b3I7XHJcbiAgICB9XHJcblxyXG4gICAgYWRkQ2hpbGQoY29tcG9uZW50OiBJQ29tcG9uZW50KTogdGhpcyB7XHJcbiAgICAgICAgdGhpcy5fY2hpbGQgPSBjb21wb25lbnQ7XHJcbiAgICAgICAgY29tcG9uZW50LnNldFBhcmVudCh0aGlzKTtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuXHJcbiAgICByZW1vdmVDaGlsZChjb21wb25lbnQ6IElDb21wb25lbnQpOiB0aGlzIHtcclxuICAgICAgICB0aGlzLl9jaGlsZCA9IG51bGw7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0Q2hpbGQoKTogSUNvbXBvbmVudCB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2NoaWxkO1xyXG4gICAgfVxyXG5cclxuICAgIHNldFBhcmVudChwYXJlbnQ6IElDb21wb25lbnQpIHtcclxuICAgICAgICB0aGlzLl9wYXJlbnQgPSBwYXJlbnQ7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0Um9vdCgpOiBJQ29tcG9uZW50IHtcclxuICAgICAgICBpZiAodGhpcy5fcGFyZW50ICYmIHR5cGVvZiB0aGlzLl9wYXJlbnRbJ2dldFJvb3QnXSA9PT0gJ2Z1bmN0aW9uJykge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fcGFyZW50LmdldFJvb3QoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0U3RhdGUoKTogU3RhdGUge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9zdGF0ZTtcclxuICAgIH1cclxuXHJcbiAgICBzZXRTdGF0ZShzdGF0ZTogU3RhdGUpOiB0aGlzIHtcclxuICAgICAgICB0aGlzLl9zdGF0ZSA9IHN0YXRlO1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG5cclxuICAgIHJlZ2lzdGVyRXZlbnQobmFtZTogc3RyaW5nLCBmdW5jPzogRnVuY3Rpb24pOiB0aGlzIHtcclxuICAgICAgICB0aGlzLl9ldmVudHNbbmFtZV0gPSBmdW5jO1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbGF5KG1lc3NhZ2U6IHN0cmluZyk6IFByb21pc2U8YW55PiB7XHJcbiAgICAgICAgbGV0IHByb21pc2VzID0gW11cclxuICAgICAgICBpZiAodHlwZW9mIHRoaXMuX2V2ZW50c1ttZXNzYWdlXSA9PT0gJ2Z1bmN0aW9uJylcclxuICAgICAgICAgICAgcHJvbWlzZXMucHVzaCh0aGlzLl9ldmVudHNbbWVzc2FnZV0oKSk7XHJcblxyXG4gICAgICAgIGxldCBjaGlsZCA9IHRoaXMuZ2V0Q2hpbGQoKTtcclxuICAgICAgICBpZiAodHlwZW9mIGNoaWxkID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgY2hpbGRbJ3JlbGF5J10gPT09ICdmdW5jdGlvbicpXHJcbiAgICAgICAgICAgIHByb21pc2VzLnB1c2godGhpcy5nZXRDaGlsZCgpLnJlbGF5KG1lc3NhZ2UpKTtcclxuICAgICAgICByZXR1cm4gUHJvbWlzZS5hbGwocHJvbWlzZXMpO1xyXG4gICAgfVxyXG5cclxuICAgIG1lcmdlKG5ld1N0YXRlLCBvbGRTdGF0ZSkge1xyXG4gICAgICAgIGxldCBzdGF0ZSA9IG5ldyBTdGF0ZSgpO1xyXG4gICAgICAgIHN0YXRlID0gT2JqZWN0LmFzc2lnbihzdGF0ZSwgb2xkU3RhdGUsIG5ld1N0YXRlKTtcclxuICAgICAgICBzdGF0ZS5zdHlsZSA9IE9iamVjdC5hc3NpZ24oe30sIG9sZFN0YXRlLnN0eWxlLCBuZXdTdGF0ZS5zdHlsZSk7XHJcbiAgICAgICAgcmV0dXJuIHN0YXRlO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogRHJhdyB0aGUgY3VycmVudCBzdGF0ZSBvbnRvIHRoZSBlbGVtZW50LCBvbmx5IGNoYW5naW5nIHRoZSBpdGVtcyB0aGF0IGhhdmVcclxuICAgICAqIGNoYW5nZWQgc2luY2UgdGhlIGxhc3QgZHJhdy5cclxuICAgICAqIEByZXR1cm5zIHtQcm9taXNlPFN0YXRlPn1cclxuICAgICAqIEBtZW1iZXJvZiBDb21wb25lbnRcclxuICAgICAqL1xyXG4gICAgcmVuZGVyKG5ld1N0YXRlOiBTdGF0ZSk6IFByb21pc2U8U3RhdGU+IHtcclxuICAgICAgICBsZXQgb2xkU3RhdGUgPSB0aGlzLl9zdGF0ZTtcclxuICAgICAgICBsZXQgaXNJbml0aWFsID0gZmFsc2U7XHJcbiAgICAgICAgaWYgKCF0aGlzLl9zdGF0ZSkge1xyXG4gICAgICAgICAgICBvbGRTdGF0ZSA9IG5ldyBTdGF0ZSgpO1xyXG4gICAgICAgICAgICBpc0luaXRpYWwgPSB0cnVlO1xyXG4gICAgICAgICAgICB0aGlzLl9lbGVtZW50LnN0eWxlLmNzc1RleHQgPSBudWxsOyAvLyBjbGVhciBpbmxpbmUgc3RseWxlc1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIG5ld1N0YXRlID0gdGhpcy5tZXJnZShuZXdTdGF0ZSwgb2xkU3RhdGUpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgICAgICAgaWYgKCF0aGlzLl9lbGVtZW50KSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9sb2dnZXIuZXJyb3IoYEVsZW1lbnQgaXMgdW5kZWZpbmVkLiAgVXNlIHNldEVsZW1lbnQoKSBiZWZvcmUgY2FsbGluZyByZW5kZXIoKS5gKVxyXG4gICAgICAgICAgICAgICAgcmVqZWN0KG9sZFN0YXRlKTtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKG5ld1N0YXRlLnN0YXRlQ2xhc3NOYW1lICYmIG5ld1N0YXRlLnN0YXRlQ2xhc3NOYW1lICE9IG9sZFN0YXRlLnN0YXRlQ2xhc3NOYW1lKSB7XHJcbiAgICAgICAgICAgICAgICBFbGVtZW50SGVscGVyLmNoYW5nZUNsYXNzKHRoaXMuX2VsZW1lbnQsIG5ld1N0YXRlLnN0YXRlQ2xhc3NOYW1lLCBvbGRTdGF0ZS5zdGF0ZUNsYXNzTmFtZSk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmIChuZXdTdGF0ZS5va0NsYXNzTmFtZSAmJiBuZXdTdGF0ZS5va0NsYXNzTmFtZSAhPSBvbGRTdGF0ZS5va0NsYXNzTmFtZSkge1xyXG4gICAgICAgICAgICAgICAgRWxlbWVudEhlbHBlci5jaGFuZ2VDbGFzcyh0aGlzLl9lbGVtZW50LCBuZXdTdGF0ZS5va0NsYXNzTmFtZSwgb2xkU3RhdGUub2tDbGFzc05hbWUpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAvLyBMb29wIHRocm91Z2ggbm9uIGFuaW1hdGFibGUgcHJvcGVydGllcyBvbiBzdHlsZSBhbmQgc2V0IHRoZW1cclxuICAgICAgICAgICAgZm9yIChsZXQgbmFtZSBpbiBuZXdTdGF0ZS5zdHlsZSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuX2FuaW1hdG9yICYmIChTdGF0ZS5hbmltYXRlZCgnc3R5bGUuJyArIG5hbWUpICYmIG5ld1N0YXRlLnN0eWxlW25hbWVdICE9PSBudWxsKSAmJiAhaXNJbml0aWFsKVxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xyXG5cclxuICAgICAgICAgICAgICAgIGxldCBucyA9IG5ld1N0YXRlLnN0eWxlW25hbWVdO1xyXG4gICAgICAgICAgICAgICAgbGV0IG9zID0gb2xkU3RhdGUuc3R5bGVbbmFtZV07XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKG5zID09PSBvcylcclxuICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcclxuXHJcbiAgICAgICAgICAgICAgICB0aGlzLl9lbGVtZW50LnN0eWxlW25hbWVdID0gbnM7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC8vIEluaXRpYWwgc3RhdGVcclxuICAgICAgICAgICAgaWYgKGlzSW5pdGlhbCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fbG9nZ2VyLmxvZyhgW0luaXRpYWwgU3RhdGVdWyMke3RoaXMuX2VsZW1lbnQuaWR9XTogICR7SlNPTi5zdHJpbmdpZnkobmV3U3RhdGUpfSBdYCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9zdGF0ZSA9IG5ld1N0YXRlO1xyXG4gICAgICAgICAgICAgICAgcmVzb2x2ZShuZXdTdGF0ZSk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC8vIFN0YXJ0IHRoZSBhbmltYXRvciB0byBhbmltYXRlIGFueSBhbmltYXRhYmxlIHByb3BlcnRpZXNcclxuICAgICAgICAgICAgaWYgKHRoaXMuX2FuaW1hdG9yKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgbjogbnVtYmVyID0gRGF0ZS5ub3coKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLl9hbmltYXRvci5hbmltYXRlKG4sIG5ld1N0YXRlLCBvbGRTdGF0ZSlcclxuICAgICAgICAgICAgICAgICAgICAudGhlbigoZmluaXNoZWQpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGZpbmlzaGVkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9sb2dnZXIubG9nKGBbVXBkYXRlZCBTdGF0ZV1bIyR7dGhpcy5fZWxlbWVudC5pZH1dOiAgJHtKU09OLnN0cmluZ2lmeShuZXdTdGF0ZSl9IF1gKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX3N0YXRlID0gbmV3U3RhdGU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlKG5ld1N0YXRlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8vIE5vIGFuaW1hdG9yLCBzbyBqdXN0IHJlc29sdmVcclxuICAgICAgICAgICAgdGhpcy5fc3RhdGUgPSBuZXdTdGF0ZTtcclxuICAgICAgICAgICAgcmVzb2x2ZShuZXdTdGF0ZSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0ZXAgPSAoZGVsdGE6IG51bWJlciwgYXJnczogYW55W10pID0+IHtcclxuICAgICAgICAvLyBMb29wIHRocm91Z2ggdmFsdWVzIGFuZCBtYWtlIGxpdmUgY2hhbmdlcyB0byBlbGVtZW50XHJcbiAgICAgICAgdmFyIG5ld1N0YXRlID0gYXJnc1swXTtcclxuICAgICAgICB2YXIgb2xkU3RhdGUgPSBhcmdzWzFdO1xyXG4gICAgICAgIGZvciAobGV0IG5hbWUgaW4gbmV3U3RhdGUuc3R5bGUpIHtcclxuICAgICAgICAgICAgaWYgKCFTdGF0ZS5hbmltYXRlZCgnc3R5bGUuJyArIG5hbWUpKVxyXG4gICAgICAgICAgICAgICAgY29udGludWU7XHJcblxyXG4gICAgICAgICAgICBsZXQgbnMgPSBuZXdTdGF0ZS5zdHlsZVtuYW1lXTtcclxuICAgICAgICAgICAgbGV0IG9zID0gb2xkU3RhdGUuc3R5bGVbbmFtZV07XHJcblxyXG4gICAgICAgICAgICBpZiAobnMgPT09IG9zKVxyXG4gICAgICAgICAgICAgICAgY29udGludWU7XHJcblxyXG4gICAgICAgICAgICBsZXQgbnN2ID0gcGFyc2VGbG9hdChucyk7XHJcbiAgICAgICAgICAgIGxldCBvc3YgPSBwYXJzZUZsb2F0KG9zKTtcclxuXHJcbiAgICAgICAgICAgIGlmIChpc0Zpbml0ZShuc3YpICYmIGlzRmluaXRlKG9zdikpIHtcclxuICAgICAgICAgICAgICAgIGxldCB2YWx1ZSA9IChuc3YgLSBvc3YpICogZGVsdGEgKyBvc3YgKyAnJztcclxuICAgICAgICAgICAgICAgIGlmICgoIWlzRmluaXRlKG5zKSAmJiBucy5tYXRjaCgvcHgkLykpIHx8ICghaXNGaW5pdGUob3MpICYmIG9zLm1hdGNoKC9weCQvKSkpIFxyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlID0gYCR7dmFsdWV9cHhgO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fZWxlbWVudC5zdHlsZVtuYW1lXSA9IHZhbHVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tcG9uZW50L0NvbXBvbmVudC50cyIsImltcG9ydCB7IENvbXBvbmVudCwgSUNvbXBvbmVudCB9IGZyb20gXCIuL0NvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBJTG9nZ2VyIH0gZnJvbSBcIi4uL3V0aWwvTG9nZ2VyXCI7XHJcbmltcG9ydCB7IElBbmltYXRvciB9IGZyb20gXCIuLi9hbmltYXRvci9BbmltYXRvcnNcIjtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSUNvbXBvc2l0ZSBleHRlbmRzIElDb21wb25lbnQge1xyXG4gICAgZ2V0Q2hpbGRyZW4oKTogQXJyYXk8SUNvbXBvbmVudD5cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIENvbXBvc2l0ZSBleHRlbmRzIENvbXBvbmVudCBpbXBsZW1lbnRzIElDb21wb3NpdGUge1xyXG5cclxuICAgIHByaXZhdGUgX2xpc3Q6IEFycmF5PElDb21wb25lbnQ+O1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKGxvZ2dlcj86IElMb2dnZXIsIGFuaW1hdG9yPzogSUFuaW1hdG9yKSB7XHJcbiAgICAgICAgc3VwZXIobG9nZ2VyLCBhbmltYXRvcik7XHJcbiAgICAgICAgdGhpcy5fbGlzdCA9IFtdO1xyXG4gICAgfVxyXG5cclxuICAgIGFkZENoaWxkKGNvbXBvbmVudDogSUNvbXBvbmVudCk6IHRoaXMge1xyXG4gICAgICAgIHRoaXMuX2xpc3QucHVzaChjb21wb25lbnQpO1xyXG4gICAgICAgIGNvbXBvbmVudC5zZXRQYXJlbnQodGhpcyk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgcmVtb3ZlQ2hpbGQoY29tcG9uZW50OiBJQ29tcG9uZW50KTogdGhpcyB7XHJcbiAgICAgICAgbGV0IGluZGV4ID0gdGhpcy5fbGlzdC5pbmRleE9mKGNvbXBvbmVudCk7XHJcbiAgICAgICAgdGhpcy5fbGlzdC5zcGxpY2UoaW5kZXgsIDEpO1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG5cclxuICAgIGdldENoaWxkKCk6IElDb21wb25lbnQge1xyXG4gICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG5cclxuICAgIGdldENoaWxkcmVuKCk6IElDb21wb25lbnRbXSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2xpc3Q7XHJcbiAgICB9XHJcblxyXG4gICAgcmVsYXkobWVzc2FnZTogc3RyaW5nKTogUHJvbWlzZTxhbnk+IHtcclxuICAgICAgICB2YXIgcHJvbWlzZXMgPSBbXTtcclxuICAgICAgICBpZiAodHlwZW9mIHRoaXMuX2V2ZW50c1ttZXNzYWdlXSA9PT0gJ2Z1bmN0aW9uJylcclxuICAgICAgICAgICAgcHJvbWlzZXMucHVzaCh0aGlzLl9ldmVudHNbbWVzc2FnZV0oKSk7XHJcblxyXG4gICAgICAgIGZvciAobGV0IGNoaWxkIG9mIHRoaXMuX2xpc3QpIHtcclxuICAgICAgICAgICAgaWYgKHR5cGVvZiBjaGlsZCA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIGNoaWxkWydyZWxheSddID09PSAnZnVuY3Rpb24nKVxyXG4gICAgICAgICAgICAgICAgcHJvbWlzZXMucHVzaChjaGlsZC5yZWxheShtZXNzYWdlKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBQcm9taXNlLmFsbChwcm9taXNlcyk7XHJcbiAgICB9XHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tcG9uZW50L0NvbXBvc2l0ZS50cyIsImltcG9ydCB7IENvbXBvbmVudCwgSUNvbXBvbmVudCB9IGZyb20gXCIuL0NvbXBvbmVudFwiO1xyXG5pbXBvcnQgTG9nZ2VyIGZyb20gXCIuLi91dGlsL0xvZ2dlclwiO1xyXG5pbXBvcnQgU3RhbmRhcmRBbmltYXRvciBmcm9tIFwiLi4vYW5pbWF0b3IvU3RhbmRhcmRBbmltYXRvclwiO1xyXG5pbXBvcnQgeyBEcmF3ZXJDb21wb25lbnQgfSBmcm9tIFwiLi9EcmF3ZXJDb21wb25lbnRcIjtcclxuaW1wb3J0IHsgT3ZlcmxheUNvbXBvbmVudCB9IGZyb20gXCIuL092ZXJsYXlDb21wb25lbnRcIjtcclxuaW1wb3J0IHsgV2luZG93Q29tcG9uZW50IH0gZnJvbSBcIi4vV2luZG93Q29tcG9uZW50XCI7XHJcbmltcG9ydCB7IERyYWdnYWJsZUNvbXBvbmVudCB9IGZyb20gXCIuL0RyYWdnYWJsZUNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBIb3Jpem9udGFsTGF5b3V0Q29tcG9uZW50IH0gZnJvbSBcIi4vSG9yaXpvbnRhbExheW91dENvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBWZXJ0aWNhbExheW91dENvbXBvbmVudCB9IGZyb20gXCIuL1ZlcnRpY2FsTGF5b3V0Q29tcG9uZW50XCI7XHJcblxyXG5leHBvcnQgY2xhc3MgQ29tcG9uZW50RmFjdG9yeSB7XHJcblxyXG4gICAgY29tcG9uZW50KGVsZW1lbnQ6IHN0cmluZyk6IElDb21wb25lbnQge1xyXG4gICAgICAgIGxldCBjb21wb25lbnQgPSBuZXcgQ29tcG9uZW50KG5ldyBMb2dnZXIoKSwgbmV3IFN0YW5kYXJkQW5pbWF0b3IoKSlcclxuICAgICAgICBjb21wb25lbnQuc2V0RWxlbWVudCh0aGlzLmdldEVsZW1lbnQoZWxlbWVudCkpO1xyXG4gICAgICAgIHJldHVybiBjb21wb25lbnQ7XHJcbiAgICB9XHJcblxyXG4gICAgZHJhd2VyKGVsZW1lbnQ6IHN0cmluZyk6IElDb21wb25lbnQge1xyXG4gICAgICAgIGxldCBjb21wb25lbnQgPSBuZXcgRHJhd2VyQ29tcG9uZW50KG5ldyBMb2dnZXIoKSwgbmV3IFN0YW5kYXJkQW5pbWF0b3IoKSk7XHJcbiAgICAgICAgbGV0IGVsID0gdGhpcy5nZXRFbGVtZW50KGVsZW1lbnQpO1xyXG4gICAgICAgIGNvbXBvbmVudC5zZXRFbGVtZW50KGVsKTtcclxuICAgICAgICBjb21wb25lbnQuaW5pdCgpO1xyXG4gICAgICAgIHJldHVybiBjb21wb25lbnQ7XHJcbiAgICB9XHJcblxyXG4gICAgb3ZlcmxheShlbGVtZW50OiBzdHJpbmcpOiBJQ29tcG9uZW50IHtcclxuICAgICAgICBsZXQgY29tcG9uZW50ID0gbmV3IE92ZXJsYXlDb21wb25lbnQobmV3IExvZ2dlcigpLCBuZXcgU3RhbmRhcmRBbmltYXRvcigpKVxyXG4gICAgICAgIGNvbXBvbmVudC5zZXRFbGVtZW50KHRoaXMuZ2V0RWxlbWVudChlbGVtZW50KSk7XHJcbiAgICAgICAgY29tcG9uZW50LmluaXQoKTtcclxuICAgICAgICByZXR1cm4gY29tcG9uZW50O1xyXG4gICAgfVxyXG5cclxuICAgIHdpbmRvdyhlbGVtZW50OiBzdHJpbmcpOiBJQ29tcG9uZW50IHtcclxuICAgICAgICBsZXQgY29tcG9uZW50ID0gbmV3IFdpbmRvd0NvbXBvbmVudChuZXcgTG9nZ2VyKCksIG5ldyBTdGFuZGFyZEFuaW1hdG9yKCkpXHJcbiAgICAgICAgY29tcG9uZW50LnNldEVsZW1lbnQodGhpcy5nZXRFbGVtZW50KGVsZW1lbnQpKTtcclxuICAgICAgICBjb21wb25lbnQuaW5pdCgpO1xyXG4gICAgICAgIHJldHVybiBjb21wb25lbnQ7XHJcbiAgICB9XHJcblxyXG4gICAgZHJhZ2dhYmxlKGVsZW1lbnQ6IHN0cmluZyk6IElDb21wb25lbnQge1xyXG4gICAgICAgIGxldCBjb21wb25lbnQgPSBuZXcgRHJhZ2dhYmxlQ29tcG9uZW50KG5ldyBMb2dnZXIoKSwgbmV3IFN0YW5kYXJkQW5pbWF0b3IoKSlcclxuICAgICAgICBjb21wb25lbnQuc2V0RWxlbWVudCh0aGlzLmdldEVsZW1lbnQoZWxlbWVudCkpO1xyXG4gICAgICAgIGNvbXBvbmVudC5pbml0KCk7XHJcbiAgICAgICAgcmV0dXJuIGNvbXBvbmVudDtcclxuICAgIH1cclxuXHJcbiAgICBobGF5b3V0KGVsZW1lbnQ6IHN0cmluZyk6IElDb21wb25lbnQge1xyXG4gICAgICAgIGxldCBjb21wb25lbnQgPSBuZXcgSG9yaXpvbnRhbExheW91dENvbXBvbmVudChuZXcgTG9nZ2VyKCkpXHJcbiAgICAgICAgY29tcG9uZW50LnNldEVsZW1lbnQodGhpcy5nZXRFbGVtZW50KGVsZW1lbnQpKTtcclxuICAgICAgICBjb21wb25lbnQuaW5pdCgpO1xyXG4gICAgICAgIHJldHVybiBjb21wb25lbnQ7XHJcbiAgICB9XHJcblxyXG4gICAgdmxheW91dChlbGVtZW50OiBzdHJpbmcpOiBJQ29tcG9uZW50IHtcclxuICAgICAgICBsZXQgY29tcG9uZW50ID0gbmV3IFZlcnRpY2FsTGF5b3V0Q29tcG9uZW50KG5ldyBMb2dnZXIoKSlcclxuICAgICAgICBjb21wb25lbnQuc2V0RWxlbWVudCh0aGlzLmdldEVsZW1lbnQoZWxlbWVudCkpO1xyXG4gICAgICAgIGNvbXBvbmVudC5pbml0KCk7XHJcbiAgICAgICAgcmV0dXJuIGNvbXBvbmVudDtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGdldEVsZW1lbnQocXVlcnk6IHN0cmluZyk6IEhUTUxFbGVtZW50IHtcclxuICAgICAgICByZXR1cm4gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChxdWVyeSlbMF0gYXMgSFRNTEVsZW1lbnQ7XHJcbiAgICB9XHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tcG9uZW50L0NvbXBvbmVudEZhY3RvcnkudHMiLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBFbGVtZW50SGVscGVyIHtcclxuXHJcbiAgICAvKipcclxuICAgICAqIENoYW5nZXMgYW4gZWxlbWVudHMgY2xhc3MgYnkgYWRkaW5nIHRoZSBcImFkZENsYXNzXCIgc3RyaW5nIGFuZC9vclxyXG4gICAgICogcmVtb3ZpbmcgdGhlIFwicmVtb3ZlQ2xhc3NcIiBzdHJpbmdcclxuICAgICAqIFxyXG4gICAgICogQHN0YXRpY1xyXG4gICAgICogQHBhcmFtIHtIVE1MRWxlbWVudH0gZWxlbWVudCBcclxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBuZXdDbGFzcyBcclxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBvbGRDbGFzcyBcclxuICAgICAqIEBtZW1iZXJvZiBFbGVtZW50S2l0XHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgY2hhbmdlQ2xhc3MoZWxlbWVudDogSFRNTEVsZW1lbnQsIGFkZENsYXNzPzogc3RyaW5nLCByZW1vdmVDbGFzcz86IHN0cmluZyk6IHZvaWQge1xyXG4gICAgICAgIGxldCBjbGFzc0xpc3QgPSBlbGVtZW50LmNsYXNzTmFtZS5zcGxpdCgnICcpO1xyXG4gICAgICAgIC8vIFJlbW92ZSBvbGRDbGFzc1xyXG4gICAgICAgIGlmKHJlbW92ZUNsYXNzKSB7XHJcbiAgICAgICAgICAgIGxldCBvbGRJbmRleCA9IGNsYXNzTGlzdC5pbmRleE9mKHJlbW92ZUNsYXNzKTtcclxuICAgICAgICAgICAgaWYob2xkSW5kZXggPj0gMCkge1xyXG4gICAgICAgICAgICAgICAgY2xhc3NMaXN0LnNwbGljZShvbGRJbmRleCwgMSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gQWRkIG5ld0NsYXNzXHJcbiAgICAgICAgaWYoYWRkQ2xhc3MpIHtcclxuICAgICAgICAgICAgbGV0IG5ld0luZGV4ID0gY2xhc3NMaXN0LmluZGV4T2YoYWRkQ2xhc3MpO1xyXG4gICAgICAgICAgICBpZihuZXdJbmRleCA8IDApIHtcclxuICAgICAgICAgICAgICAgIGNsYXNzTGlzdC5wdXNoKGFkZENsYXNzKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbGVtZW50LmNsYXNzTmFtZSA9IGNsYXNzTGlzdC5qb2luKCcgJyk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBzZXRHdWlkSWQoZWxlbWVudDogSFRNTEVsZW1lbnQpIHtcclxuICAgICAgICB2YXIgdW5pcXVlSWQgPSAnb2stZ3VpZC0nICsgTWF0aC5yYW5kb20oKS50b1N0cmluZygzNikuc3Vic3RyaW5nKDIpICsgKG5ldyBEYXRlKCkpLmdldFRpbWUoKS50b1N0cmluZygzNik7XHJcbiAgICAgICAgZWxlbWVudC5pZCA9IHVuaXF1ZUlkO1xyXG4gICAgfVxyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3V0aWwvRWxlbWVudEhlbHBlci50cyIsImV4cG9ydCBpbnRlcmZhY2UgSUxvZ2dlciB7XHJcbiAgICBsb2cobWVzc2FnZTpzdHJpbmcpO1xyXG4gICAgd2FybihtZXNzYWdlOnN0cmluZyk7XHJcbiAgICBpbmZvKG1lc3NhZ2U6c3RyaW5nKTtcclxuICAgIGVycm9yKG1lc3NhZ2U6c3RyaW5nKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTG9nZ2VyIGltcGxlbWVudHMgSUxvZ2dlciB7XHJcbiAgICBwcml2YXRlIF9kZWJ1ZzogYm9vbGVhbjtcclxuICAgIHByaXZhdGUgX2MgPSB7XHJcbiAgICAgICAgd2FybjogKG06IHN0cmluZykgPT4ge30sXHJcbiAgICAgICAgZXJyb3I6IChtOiBzdHJpbmcpID0+IHt9LFxyXG4gICAgICAgIGluZm86IChtOiBzdHJpbmcpID0+IHt9LFxyXG4gICAgICAgIGxvZzogKG06IHN0cmluZykgPT4ge31cclxuICAgIH07XHJcblxyXG4gICAgY29uc3RydWN0b3IoZGVidWc6IGJvb2xlYW4gPSBmYWxzZSkge1xyXG4gICAgICAgIGlmICh0eXBlb2Ygd2luZG93Wydjb25zb2xlJ10gPT09ICdvYmplY3QnICYmIGRlYnVnKVxyXG4gICAgICAgICAgICB0aGlzLl9jID0gd2luZG93LmNvbnNvbGU7XHJcbiAgICAgICAgdGhpcy5fZGVidWcgPSBkZWJ1ZztcclxuICAgIH1cclxuXHJcbiAgICBsb2cobWVzc2FnZTogc3RyaW5nKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuX2RlYnVnICYmIHR5cGVvZiB0aGlzLl9jLmxvZyA9PT0gJ2Z1bmN0aW9uJylcclxuICAgICAgICAgICAgdGhpcy5fYy5sb2cobWVzc2FnZSk7XHJcbiAgICB9XHJcblxyXG4gICAgd2FybihtZXNzYWdlOiBzdHJpbmcpIHtcclxuICAgICAgICBpZiAodGhpcy5fZGVidWcgJiYgdHlwZW9mIHRoaXMuX2Mud2FybiA9PT0gJ2Z1bmN0aW9uJylcclxuICAgICAgICAgICAgdGhpcy5fYy53YXJuKG1lc3NhZ2UpO1xyXG4gICAgfVxyXG5cclxuICAgIGluZm8obWVzc2FnZTogc3RyaW5nKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuX2RlYnVnICYmIHR5cGVvZiB0aGlzLl9jLmluZm8gPT09ICdmdW5jdGlvbicpXHJcbiAgICAgICAgICAgIHRoaXMuX2MuaW5mbyhtZXNzYWdlKTtcclxuICAgIH1cclxuXHJcbiAgICBlcnJvcihtZXNzYWdlOiBzdHJpbmcpIHtcclxuICAgICAgICBpZiAodGhpcy5fZGVidWcgJiYgdHlwZW9mIHRoaXMuX2MuZXJyb3IgPT09ICdmdW5jdGlvbicpXHJcbiAgICAgICAgICAgIHRoaXMuX2MuZXJyb3IobWVzc2FnZSk7XHJcbiAgICB9XHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvdXRpbC9Mb2dnZXIudHMiLCJleHBvcnQgaW50ZXJmYWNlIElBbmltYXRvciB7XHJcbiAgICBhbmltYXRlKHN0YXJ0PzogbnVtYmVyLCAuLi5hcmdzIDogYW55W10pOiBQcm9taXNlPGJvb2xlYW4+O1xyXG4gICAgc2V0U3RlcChzdGVwOiBGdW5jdGlvbik6IHRoaXM7XHJcbiAgICBzZXREdXJhdGlvbihkdXJhdGlvbjogbnVtYmVyKTogdGhpcztcclxuICAgIHNldFJhdGUocmF0ZTogbnVtYmVyKTogdGhpcztcclxuICAgIHNldFRyYW5zaXRpb24odHJhbnNpdGlvbjogQW5pbWF0b3JUcmFuc2l0aW9uKTtcclxufVxyXG5cclxuZXhwb3J0IGVudW0gQW5pbWF0b3JUcmFuc2l0aW9uIHtcclxuICAgIExpbmVhcixcclxuICAgIEVhc2VJbixcclxuICAgIEVhc2VPdXQsXHJcbiAgICBFYXNlSW5PdXQsXHJcbiAgICBQdWxsSW4sXHJcbiAgICBQdXNoT3V0LFxyXG4gICAgUHVzaFB1bGxcclxufVxyXG5cclxuZXhwb3J0ICogZnJvbSAnLi9TdGFuZGFyZEFuaW1hdG9yJztcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvYW5pbWF0b3IvQW5pbWF0b3JzLnRzIiwiaW1wb3J0IHsgU3RhdGUgfSBmcm9tICcuLi9zdGF0ZS9TdGF0ZSc7XHJcbmltcG9ydCB7IElMb2dnZXIgfSBmcm9tIFwiLi4vdXRpbC9Mb2dnZXJcIjtcclxuaW1wb3J0IHsgSUFuaW1hdG9yIH0gZnJvbSBcIi4uL2FuaW1hdG9yL0FuaW1hdG9yc1wiO1xyXG5pbXBvcnQgeyBDb21wb3NpdGUgfSBmcm9tIFwiLi9Db21wb3NpdGVcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBEcmF3ZXJDb21wb25lbnQgZXh0ZW5kcyBDb21wb3NpdGUge1xyXG5cclxuICAgIHByaXZhdGUgX2RvY2s6IHN0cmluZztcclxuICAgIHByaXZhdGUgX21heFNpemU6IG51bWJlcjtcclxuICAgIHByaXZhdGUgX21pblNpemU6IG51bWJlcjtcclxuICAgIHByaXZhdGUgX2lzT3BlbjogYm9vbGVhbjtcclxuICAgIHByaXZhdGUgX2RvY2tQb3NpdGlvbnM6IHN0cmluZ1tdID0gWydsZWZ0JywgJ3JpZ2h0JywgJ3RvcCcsICdib3R0b20nXTtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihsb2dnZXI6IElMb2dnZXIsIGFuaW1hdG9yPzogSUFuaW1hdG9yKSB7XHJcbiAgICAgICAgc3VwZXIobG9nZ2VyLCBhbmltYXRvcik7XHJcblxyXG4gICAgICAgIC8vIFNldHVwIGRlZmF1bHRzXHJcbiAgICAgICAgdGhpcy5fZG9jayA9ICdsZWZ0JztcclxuICAgICAgICB0aGlzLl9taW5TaXplID0gMDtcclxuICAgICAgICB0aGlzLl9tYXhTaXplID0gMjgwO1xyXG4gICAgICAgIHRoaXMuX2lzT3BlbiA9IGZhbHNlO1xyXG5cclxuICAgICAgICAvLyBSZWxheSBldmVudHNcclxuICAgICAgICB0aGlzLnJlZ2lzdGVyRXZlbnQoJ29uJywgKCkgPT4geyByZXR1cm4gdGhpcy5vbigpIH0pO1xyXG4gICAgICAgIHRoaXMucmVnaXN0ZXJFdmVudCgnb2ZmJywgKCkgPT4geyByZXR1cm4gdGhpcy5vZmYoKSB9KTtcclxuICAgICAgICB0aGlzLnJlZ2lzdGVyRXZlbnQoJ3RvZ2dsZScsICgpID0+IHsgcmV0dXJuIHRoaXMudG9nZ2xlKCkgfSk7XHJcbiAgICAgICAgdGhpcy5yZWdpc3RlckV2ZW50KCdpbml0JywgKCkgPT4geyByZXR1cm4gdGhpcy5pbml0KCkgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBDaGFuZ2UgdGhlIGRvY2sgcG9zaXRpb24gb2YgdGhlIGRyYXdlci4gIENhbGxpbmcgdGhpcyBmdW5jdGlvbiByZXNldHMgdGhlXHJcbiAgICAgKiBzdGF0ZSBhbmQgcmVwb3NpdGlvbnMgdGhlIGRyYXdlciBpbnN0YW50bHkuXHJcbiAgICAgKiBcclxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBkb2NrIFxyXG4gICAgICogQHJldHVybnMge3RoaXN9IFxyXG4gICAgICogQG1lbWJlcm9mIERyYXdlckNvbXBvbmVudFxyXG4gICAgICovXHJcbiAgICBkb2NrKGRvY2s6IHN0cmluZyk6IFByb21pc2U8U3RhdGU+IHtcclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5fZG9ja1Bvc2l0aW9ucy5pbmRleE9mKGRvY2spIDwgMCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fbG9nZ2VyLmVycm9yKGBcIiR7ZG9ja31cIiBpcyBub3QgYSB2YWxpZCBkb2NrIHBvc2l0aW9uLiAgVmFsaWQgcG9zaXRpb25zIGFyZSAke3RoaXMuX2RvY2tQb3NpdGlvbnMuam9pbignLCAnKX1gKTtcclxuICAgICAgICAgICAgICAgIHJlamVjdCgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnJlbGF5KCdvZmYnKS50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuX2RvY2sgPSBkb2NrO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fc3RhdGUgPSBudWxsO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuaW5pdCgpO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgbWluU2l6ZShuOiBudW1iZXIpOiB0aGlzIHtcclxuICAgICAgICBpZiAobiA8IDApIHtcclxuICAgICAgICAgICAgdGhpcy5fbG9nZ2VyLmVycm9yKGBtaW5TaXplIG51bWJlciBtdXN0IGJlIGdyZWF0ZXIgdGhhbiBvciBlcXVhbCB0byB6ZXJvLmApO1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcztcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5fbWluU2l6ZSA9IG47XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgbWF4U2l6ZShuOiBudW1iZXIpOiB0aGlzIHtcclxuICAgICAgICBpZiAobiA8IDApIHtcclxuICAgICAgICAgICAgdGhpcy5fbG9nZ2VyLmVycm9yKGBtYXhTaXplIG51bWJlciBtdXN0IGJlIGdyZWF0ZXIgdGhhbiBvciBlcXVhbCB0byB6ZXJvLmApO1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcztcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5fbWF4U2l6ZSA9IG47XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBTZXRzIHRoZSBpbml0aWFsIHN0YXRlXHJcbiAgICAgKiBAcmV0dXJucyB7UHJvbWlzZTxTdGF0ZT59IFxyXG4gICAgICovXHJcbiAgICBpbml0KCk6IFByb21pc2U8U3RhdGU+IHtcclxuICAgICAgICBsZXQgc3RhdGUgPSBuZXcgU3RhdGUoKTtcclxuICAgICAgICBzdGF0ZS5va0NsYXNzTmFtZSA9ICdvay1kcmF3ZXInO1xyXG4gICAgICAgIHN0YXRlLnN0eWxlLnBvc2l0aW9uID0gJ2ZpeGVkJztcclxuICAgICAgICBzdGF0ZS5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcclxuICAgICAgICBzdGF0ZS5zdHlsZS56SW5kZXggPSAnMTAwMDAnXHJcblxyXG4gICAgICAgIGlmICh0aGlzLmlzTGVmdCgpKSB7XHJcbiAgICAgICAgICAgIHN0YXRlLnN0eWxlLndpZHRoID0gYCR7dGhpcy5fbWF4U2l6ZX1weGA7XHJcbiAgICAgICAgICAgIHN0YXRlLnN0eWxlLmhlaWdodCA9IGAke3RoaXMuZ2V0RWxlbWVudCgpLnBhcmVudEVsZW1lbnQub2Zmc2V0SGVpZ2h0fXB4YDtcclxuICAgICAgICAgICAgc3RhdGUuc3R5bGUubGVmdCA9IGAtJHt0aGlzLl9tYXhTaXplfXB4YDtcclxuICAgICAgICAgICAgc3RhdGUuc3R5bGUudG9wID0gJzAnO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5pc1JpZ2h0KCkpIHtcclxuICAgICAgICAgICAgc3RhdGUuc3R5bGUud2lkdGggPSBgJHt0aGlzLl9tYXhTaXplfXB4YDtcclxuICAgICAgICAgICAgc3RhdGUuc3R5bGUuaGVpZ2h0ID0gYCR7dGhpcy5nZXRFbGVtZW50KCkucGFyZW50RWxlbWVudC5vZmZzZXRIZWlnaHR9cHhgO1xyXG4gICAgICAgICAgICBzdGF0ZS5zdHlsZS5yaWdodCA9IGAtJHt0aGlzLl9tYXhTaXplfXB4YDtcclxuICAgICAgICAgICAgc3RhdGUuc3R5bGUudG9wID0gJzAnO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5pc1RvcCgpKSB7XHJcbiAgICAgICAgICAgIHN0YXRlLnN0eWxlLndpZHRoID0gYCR7dGhpcy5nZXRFbGVtZW50KCkucGFyZW50RWxlbWVudC5vZmZzZXRXaWR0aH1weGA7XHJcbiAgICAgICAgICAgIHN0YXRlLnN0eWxlLmhlaWdodCA9IGAke3RoaXMuX21heFNpemV9cHhgO1xyXG4gICAgICAgICAgICBzdGF0ZS5zdHlsZS50b3AgPSBgLSR7dGhpcy5fbWF4U2l6ZX1weGA7XHJcbiAgICAgICAgICAgIHN0YXRlLnN0eWxlLmxlZnQgPSAnMCc7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLmlzQm90dG9tKCkpIHtcclxuICAgICAgICAgICAgc3RhdGUuc3R5bGUud2lkdGggPSBgJHt0aGlzLmdldEVsZW1lbnQoKS5wYXJlbnRFbGVtZW50Lm9mZnNldFdpZHRofXB4YDtcclxuICAgICAgICAgICAgc3RhdGUuc3R5bGUuaGVpZ2h0ID0gYCR7dGhpcy5fbWF4U2l6ZX1weGA7XHJcbiAgICAgICAgICAgIHN0YXRlLnN0eWxlLmJvdHRvbSA9IGAtJHt0aGlzLl9tYXhTaXplfXB4YDtcclxuICAgICAgICAgICAgc3RhdGUuc3R5bGUubGVmdCA9ICcwJztcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRoaXMucmVuZGVyKHN0YXRlKTtcclxuICAgIH1cclxuXHJcbiAgICB0b2dnbGUoKTogUHJvbWlzZTxTdGF0ZT4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9pc09wZW4gPyB0aGlzLm9mZigpIDogdGhpcy5vbigpO1xyXG4gICAgfVxyXG5cclxuICAgIG9uKCk6IFByb21pc2U8U3RhdGU+IHtcclxuICAgICAgICBpZiAodGhpcy5faXNPcGVuKVxyXG4gICAgICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmVzb2x2ZSh0aGlzLl9zdGF0ZSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMuX2lzT3BlbiA9IHRydWU7XHJcblxyXG4gICAgICAgIGxldCBzdGF0ZSA9IG5ldyBTdGF0ZSgpO1xyXG4gICAgICAgIGlmICh0aGlzLmlzTGVmdCgpKSB7XHJcbiAgICAgICAgICAgIHN0YXRlLnN0eWxlLmxlZnQgPSAnMCc7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLmlzUmlnaHQoKSkge1xyXG4gICAgICAgICAgICBzdGF0ZS5zdHlsZS5yaWdodCA9ICcwJztcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMuaXNUb3AoKSkge1xyXG4gICAgICAgICAgICBzdGF0ZS5zdHlsZS50b3AgPSAnMCc7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLmlzQm90dG9tKCkpIHtcclxuICAgICAgICAgICAgc3RhdGUuc3R5bGUuYm90dG9tID0gJzAnXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHN0YXRlLnN0YXRlQ2xhc3NOYW1lID0gJ29rLW9uJztcclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXMucmVuZGVyKHN0YXRlKTtcclxuICAgIH1cclxuXHJcbiAgICBvZmYoKTogUHJvbWlzZTxTdGF0ZT4ge1xyXG4gICAgICAgIGlmICghdGhpcy5faXNPcGVuKVxyXG4gICAgICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmVzb2x2ZSh0aGlzLl9zdGF0ZSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMuX2lzT3BlbiA9IGZhbHNlO1xyXG5cclxuICAgICAgICBsZXQgc3RhdGUgPSBuZXcgU3RhdGUoKTtcclxuICAgICAgICBpZiAodGhpcy5pc0xlZnQoKSkge1xyXG4gICAgICAgICAgICBzdGF0ZS5zdHlsZS5sZWZ0ID0gYC0ke3RoaXMuX21heFNpemV9cHhgO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5pc1JpZ2h0KCkpIHtcclxuICAgICAgICAgICAgc3RhdGUuc3R5bGUucmlnaHQgPSBgLSR7dGhpcy5fbWF4U2l6ZX1weGA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLmlzVG9wKCkpIHtcclxuICAgICAgICAgICAgc3RhdGUuc3R5bGUudG9wID0gYC0ke3RoaXMuX21heFNpemV9cHhgO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5pc0JvdHRvbSgpKSB7XHJcbiAgICAgICAgICAgIHN0YXRlLnN0eWxlLmJvdHRvbSA9IGAtJHt0aGlzLl9tYXhTaXplfXB4YDtcclxuICAgICAgICB9XHJcbiAgICAgICAgc3RhdGUuc3RhdGVDbGFzc05hbWUgPSAnb2stb2ZmJztcclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXMucmVuZGVyKHN0YXRlKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGlzTGVmdCgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZG9jayA9PT0gJ2xlZnQnO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgaXNSaWdodCgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZG9jayA9PT0gJ3JpZ2h0JztcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGlzVG9wKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9kb2NrID09PSAndG9wJztcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGlzQm90dG9tKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9kb2NrID09PSAnYm90dG9tJztcclxuICAgIH1cclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21wb25lbnQvRHJhd2VyQ29tcG9uZW50LnRzIiwiaW1wb3J0IHsgSUFuaW1hdG9yLCBBbmltYXRvclRyYW5zaXRpb24gfSBmcm9tICcuL0FuaW1hdG9ycyc7XHJcblxyXG4vKipcclxuICogT3V0a2l0J3MgQW5pbWF0b3IgQ2xhc3NcclxuICogXHJcbiAqIEBleHBvcnRcclxuICogQHBhY2thZ2UgT3V0a2l0XHJcbiAqIEBjbGFzcyBTdGFuZGFyZEFuaW1hdG9yXHJcbiAqIEBpbXBsZW1lbnRzIHtJQW5pbWF0b3J9XHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTdGFuZGFyZEFuaW1hdG9yIGltcGxlbWVudHMgSUFuaW1hdG9yIHtcclxuXHJcbiAgICBwdWJsaWMgc3RhcnQ6IG51bWJlcjtcclxuICAgIHByaXZhdGUgX2R1cmF0aW9uOiBudW1iZXI7XHJcbiAgICBwcml2YXRlIF9zdGVwOiBGdW5jdGlvbjtcclxuICAgIHByaXZhdGUgX2ludGVydmFsOiBudW1iZXI7XHJcbiAgICBwcml2YXRlIF9yYXRlOiBudW1iZXI7XHJcbiAgICBwcml2YXRlIF90cmFuc2l0aW9uOiBGdW5jdGlvbjtcclxuXHJcbiAgICBwdWJsaWMgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgdGhpcy5fZHVyYXRpb24gPSAyMDA7XHJcbiAgICAgICAgdGhpcy5fc3RlcCA9ICgpID0+IHsgfTtcclxuICAgICAgICB0aGlzLl9yYXRlID0gMTY7XHJcbiAgICAgICAgdGhpcy5fdHJhbnNpdGlvbiA9IHRoaXMubGluZWFyO1xyXG4gICAgfVxyXG5cclxuICAgIHNldFN0ZXAoc3RlcDogRnVuY3Rpb24pOiB0aGlzIHtcclxuICAgICAgICB0aGlzLl9zdGVwID0gc3RlcDtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuXHJcbiAgICBzZXREdXJhdGlvbihkdXJhdGlvbjogbnVtYmVyKTogdGhpcyB7XHJcbiAgICAgICAgdGhpcy5fZHVyYXRpb24gPSBkdXJhdGlvbjtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuXHJcbiAgICBzZXRSYXRlKHJhdGU6IG51bWJlcik6IHRoaXMge1xyXG4gICAgICAgIHRoaXMuX3JhdGUgPSByYXRlO1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG5cclxuICAgIHNldFRyYW5zaXRpb24odHJhbnNpdGlvbjogQW5pbWF0b3JUcmFuc2l0aW9uKSB7XHJcbiAgICAgICAgc3dpdGNoICh0cmFuc2l0aW9uKSB7XHJcbiAgICAgICAgICAgIGNhc2UgQW5pbWF0b3JUcmFuc2l0aW9uLkVhc2VJbjpcclxuICAgICAgICAgICAgICAgIHRoaXMuX3RyYW5zaXRpb24gPSB0aGlzLmVhc2VJbjtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIEFuaW1hdG9yVHJhbnNpdGlvbi5FYXNlT3V0OlxyXG4gICAgICAgICAgICAgICAgdGhpcy5fdHJhbnNpdGlvbiA9IHRoaXMuZWFzZU91dDtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIEFuaW1hdG9yVHJhbnNpdGlvbi5FYXNlSW5PdXQ6XHJcbiAgICAgICAgICAgICAgICB0aGlzLl90cmFuc2l0aW9uID0gdGhpcy5lYXNlSW5PdXQ7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBBbmltYXRvclRyYW5zaXRpb24uUHVsbEluOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5fdHJhbnNpdGlvbiA9IHRoaXMucHVsbEluO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgQW5pbWF0b3JUcmFuc2l0aW9uLlB1c2hPdXQ6XHJcbiAgICAgICAgICAgICAgICB0aGlzLl90cmFuc2l0aW9uID0gdGhpcy5wdXNoT3V0O1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIEFuaW1hdG9yVHJhbnNpdGlvbi5QdXNoUHVsbDpcclxuICAgICAgICAgICAgICAgIHRoaXMuX3RyYW5zaXRpb24gPSB0aGlzLnB1c2hQdWxsO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICB0aGlzLl90cmFuc2l0aW9uID0gdGhpcy5saW5lYXI7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBbmltYXRlIGNhbGxpbmcgYSBzdGVwIGZ1bmN0aW9uIG92ZXIgZHVyYXRpb24uIFN0ZXAgaXMgY2FsbGVkIHdpdGggZGVsdGFcclxuICAgICAqIHRpbWUgc28gdGhhdCBhbmltYXRpb25zIGNvbXBsZXRlIHdpdGhpbiB0aGUgZHVyYXRpb24uXHJcbiAgICAgKiBAcGFyYW0gc3RhcnQgZGF0ZVxyXG4gICAgICovXHJcbiAgICBhbmltYXRlKHN0YXJ0PzogbnVtYmVyLCAuLi5hcmdzOiBhbnlbXSk6IFByb21pc2U8Ym9vbGVhbj4ge1xyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xyXG4gICAgICAgICAgICBpZiAodHlwZW9mIHdpbmRvd1sncmVxdWVzdEFuaW1hdGlvbkZyYW1lJ10gPT09ICdmdW5jdGlvbicpIHtcclxuICAgICAgICAgICAgICAgIGxldCBzdGFydCA9IHBlcmZvcm1hbmNlLm5vdygpO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgcmFmQW5pbWF0ZSA9ICh0aW1lKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHByb2dyZXNzID0gKHRpbWUgLSBzdGFydCkgLyB0aGlzLl9kdXJhdGlvbjtcclxuICAgICAgICAgICAgICAgICAgICBpZiAocHJvZ3Jlc3MgPiAxKSBwcm9ncmVzcyA9IDE7XHJcbiBcclxuICAgICAgICAgICAgICAgICAgICAvLyBjYWxjdWxhdGUgdGhlIGN1cnJlbnQgYW5pbWF0aW9uIHN0YXRlXHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGRlbHRhID0gdGhpcy5fdHJhbnNpdGlvbihwcm9ncmVzcylcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fc3RlcChkZWx0YSwgYXJncyk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChwcm9ncmVzcyA8IDEpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHJhZkFuaW1hdGUpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUodHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSAgXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUocmFmQW5pbWF0ZSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9pbnRlcnZhbCA9IHdpbmRvdy5zZXRJbnRlcnZhbCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGRlbHRhVGltZSA9IERhdGUubm93KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHRpbWVQYXNzZWQgPSBkZWx0YVRpbWUgLSBzdGFydDtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgcHJvZ3Jlc3MgPSB0aW1lUGFzc2VkIC8gdGhpcy5fZHVyYXRpb247XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChwcm9ncmVzcyA+IDEpIHByb2dyZXNzID0gMVxyXG5cclxuICAgICAgICAgICAgICAgICAgICB2YXIgZGVsdGEgPSB0aGlzLl90cmFuc2l0aW9uKHByb2dyZXNzKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fc3RlcChkZWx0YSwgYXJncyk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChwcm9ncmVzcyA9PSAxKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwodGhpcy5faW50ZXJ2YWwpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHRydWUpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0sIHRoaXMuX3JhdGUpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgbGluZWFyKHByb2dyZXNzOiBudW1iZXIpIHtcclxuICAgICAgICByZXR1cm4gcHJvZ3Jlc3M7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBlYXNlSW4ocHJvZ3Jlc3M6IG51bWJlcikge1xyXG4gICAgICAgIHJldHVybiBNYXRoLnBvdyhwcm9ncmVzcywgNSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBlYXNlT3V0ID0gdGhpcy5tYWtlRWFzZU91dCh0aGlzLmVhc2VJbik7XHJcblxyXG4gICAgcHJpdmF0ZSBlYXNlSW5PdXQgPSB0aGlzLm1ha2VFYXNlSW5PdXQodGhpcy5lYXNlSW4pO1xyXG5cclxuICAgIHByaXZhdGUgcHVsbEluKHByb2dyZXNzOiBudW1iZXIsIHg6IG51bWJlciA9IDIpIHtcclxuICAgICAgICByZXR1cm4gTWF0aC5wb3cocHJvZ3Jlc3MsIDIpICogKCh4ICsgMSkgKiBwcm9ncmVzcyAtIHgpXHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBwdXNoT3V0ID0gdGhpcy5tYWtlRWFzZU91dCh0aGlzLnB1bGxJbik7XHJcblxyXG4gICAgcHJpdmF0ZSBwdXNoUHVsbCA9IHRoaXMubWFrZUVhc2VJbk91dCh0aGlzLnB1bGxJbik7XHJcblxyXG4gICAgcHJpdmF0ZSBtYWtlRWFzZU91dCh0aW1pbmc6IEZ1bmN0aW9uKSB7XHJcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uIChwcm9ncmVzczogbnVtYmVyKSB7XHJcbiAgICAgICAgICAgIHJldHVybiAxIC0gdGltaW5nKDEgLSBwcm9ncmVzcyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgbWFrZUVhc2VJbk91dCh0aW1pbmcpIHtcclxuICAgICAgICByZXR1cm4gZnVuY3Rpb24gKHByb2dyZXNzKSB7XHJcbiAgICAgICAgICAgIGlmIChwcm9ncmVzcyA8IC41KVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRpbWluZygyICogcHJvZ3Jlc3MpIC8gMjtcclxuICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuICgyIC0gdGltaW5nKDIgKiAoMSAtIHByb2dyZXNzKSkpIC8gMjtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0gXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2FuaW1hdG9yL1N0YW5kYXJkQW5pbWF0b3IudHMiLCJpbXBvcnQgeyBDb21wb3NpdGUgfSBmcm9tIFwiLi9Db21wb3NpdGVcIjtcclxuaW1wb3J0IHsgSUxvZ2dlciB9IGZyb20gXCIuLi91dGlsL0xvZ2dlclwiO1xyXG5pbXBvcnQgeyBJQW5pbWF0b3IgfSBmcm9tIFwiLi4vYW5pbWF0b3IvQW5pbWF0b3JzXCI7XHJcbmltcG9ydCB7IFN0YXRlIH0gZnJvbSBcIi4uL3N0YXRlL1N0YXRlXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgRHJhZ2dhYmxlQ29tcG9uZW50IGV4dGVuZHMgQ29tcG9zaXRlIHtcclxuXHJcbiAgICBwcml2YXRlIF9kcmFnUm9vdDogYm9vbGVhbjtcclxuICAgIHByaXZhdGUgX3g6IG51bWJlcjtcclxuICAgIHByaXZhdGUgX3k6IG51bWJlcjtcclxuICAgIHByaXZhdGUgX3RvcDogbnVtYmVyO1xyXG4gICAgcHJpdmF0ZSBfbGVmdDogbnVtYmVyO1xyXG4gICAgcHJpdmF0ZSBfcGFyZW50VG9wOiBudW1iZXI7XHJcbiAgICBwcml2YXRlIF9wYXJlbnRMZWZ0OiBudW1iZXI7XHJcbiAgICBwcml2YXRlIF9kaWZmWDogbnVtYmVyO1xyXG4gICAgcHJpdmF0ZSBfZGlmZlk6IG51bWJlcjtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihsb2dnZXI6IElMb2dnZXIsIGFuaW1hdG9yPzogSUFuaW1hdG9yKSB7XHJcbiAgICAgICAgc3VwZXIobG9nZ2VyLCBhbmltYXRvcik7XHJcblxyXG4gICAgICAgIC8vIFNldHVwIGRlZmF1bHRzXHJcbiAgICAgICAgdGhpcy5fZHJhZ1Jvb3QgPSBmYWxzZTtcclxuXHJcbiAgICAgICAgLy8gUmVsYXkgZXZlbnRzXHJcbiAgICAgICAgdGhpcy5yZWdpc3RlckV2ZW50KCdpbml0JywgKCkgPT4geyByZXR1cm4gdGhpcy5pbml0KCkgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgZHJhZ1Jvb3QoZmxhZzogYm9vbGVhbik6IHRoaXMge1xyXG4gICAgICAgIHRoaXMuX2RyYWdSb290ID0gZmxhZztcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuXHJcbiAgICBpbml0KCk6IFByb21pc2U8U3RhdGU+IHtcclxuICAgICAgICBsZXQgc3RhdGUgPSBuZXcgU3RhdGUoKTtcclxuICAgICAgICBzdGF0ZS5va0NsYXNzTmFtZSA9ICdvay1kcmFnZ2FibGUnO1xyXG5cclxuICAgICAgICB0aGlzLmdldEVsZW1lbnQoKS5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCB0aGlzLnN0YXJ0RHJhZyk7XHJcbiAgICAgICAgdGhpcy5nZXRFbGVtZW50KCkuYWRkRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsICgpID0+IHtcclxuICAgICAgICAgICAgZG9jdW1lbnQub25tb3VzZW1vdmUgPSAoKSA9PiB7fTtcclxuICAgICAgICB9KTtcclxuICAgICAgICByZXR1cm4gdGhpcy5yZW5kZXIoc3RhdGUpO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXJ0RHJhZyA9IChldmVudDogTW91c2VFdmVudCkgPT4ge1xyXG4gICAgICAgIGxldCBkZSA9IHRoaXMuZ2V0RWxlbWVudCgpO1xyXG4gICAgICAgIGlmICh0aGlzLl9kcmFnUm9vdCkge1xyXG4gICAgICAgICAgICBkZSA9IHRoaXMuZ2V0Um9vdCgpLmdldEVsZW1lbnQoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IHBhcmVudCA9IGRlLnBhcmVudEVsZW1lbnQ7XHJcblxyXG4gICAgICAgIGxldCB4ID0gZXZlbnQuY2xpZW50WCxcclxuICAgICAgICAgICAgeSA9IGV2ZW50LmNsaWVudFksXHJcbiAgICAgICAgICAgIHRvcCA9IGRlLm9mZnNldFRvcCxcclxuICAgICAgICAgICAgbGVmdCA9IGRlLm9mZnNldExlZnQsXHJcbiAgICAgICAgICAgIGRlV2lkdGggPSBkZS5vZmZzZXRXaWR0aCxcclxuICAgICAgICAgICAgZGVIZWlnaHQgPSBkZS5vZmZzZXRIZWlnaHQsXHJcbiAgICAgICAgICAgIHBhcmVudFRvcCA9IHBhcmVudC5vZmZzZXRUb3AsXHJcbiAgICAgICAgICAgIHBhcmVudExlZnQgPSBwYXJlbnQub2Zmc2V0TGVmdCxcclxuICAgICAgICAgICAgcGFyZW50V2lkdGggPSBwYXJlbnQub2Zmc2V0V2lkdGgsXHJcbiAgICAgICAgICAgIHBhcmVudEhlaWdodCA9cGFyZW50Lm9mZnNldEhlaWdodCxcclxuICAgICAgICAgICAgZGlmZlggPSB4IC0gbGVmdCxcclxuICAgICAgICAgICAgZGlmZlkgPSB5IC0gdG9wO1xyXG5cclxuICAgICAgICBkb2N1bWVudC5vbm1vdXNlbW92ZSA9IChldmVudDogTW91c2VFdmVudCkgPT4ge1xyXG4gICAgICAgICAgICBsZXQgeCA9IGV2ZW50LmNsaWVudFgsXHJcbiAgICAgICAgICAgICAgICB5ID0gZXZlbnQuY2xpZW50WSxcclxuICAgICAgICAgICAgICAgIGFYID0geCAtIGRpZmZYLFxyXG4gICAgICAgICAgICAgICAgYVkgPSB5IC0gZGlmZlk7XHJcbiAgICAgICAgICAgIGlmIChhWCA8IDApIGFYID0gMDtcclxuICAgICAgICAgICAgaWYgKGFZIDwgMCkgYVkgPSAwO1xyXG4gICAgICAgICAgICBpZiAoYVggKyBkZVdpZHRoID4gcGFyZW50V2lkdGgpIGFYID0gcGFyZW50V2lkdGggLSBkZVdpZHRoO1xyXG4gICAgICAgICAgICBpZiAoYVkgKyBkZUhlaWdodCA+IHBhcmVudEhlaWdodCkgYVkgPSBwYXJlbnRIZWlnaHQgLSBkZUhlaWdodDtcclxuXHJcbiAgICAgICAgICAgIHRoaXMubW92ZShkZSwgYVgsIGFZKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgbW92ZShlbGVtZW50OiBIVE1MRWxlbWVudCwgeDogbnVtYmVyLCB5OiBudW1iZXIpIHsgXHJcbiAgICAgICAgZWxlbWVudC5zdHlsZS5sZWZ0ID0gYCR7eH1weGA7XHJcbiAgICAgICAgZWxlbWVudC5zdHlsZS50b3AgPSBgJHt5fXB4YDtcclxuICAgIH1cclxuXHJcbiAgICBzdG9wRHJhZygpIHsgfVxyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbXBvbmVudC9EcmFnZ2FibGVDb21wb25lbnQudHMiLCJpbXBvcnQgeyBDb21wb3NpdGUgfSBmcm9tIFwiLi9Db21wb3NpdGVcIjtcclxuaW1wb3J0IHsgSUxvZ2dlciB9IGZyb20gXCIuLi91dGlsL0xvZ2dlclwiO1xyXG5pbXBvcnQgTG9nZ2VyIGZyb20gXCIuLi91dGlsL0xvZ2dlclwiO1xyXG5pbXBvcnQgeyBJQW5pbWF0b3IgfSBmcm9tIFwiLi4vYW5pbWF0b3IvQW5pbWF0b3JzXCI7XHJcbmltcG9ydCB7IElDb21wb25lbnQsIENvbXBvbmVudCB9IGZyb20gXCIuL0NvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBDb21wb25lbnRGYWN0b3J5IH0gZnJvbSBcIi4vQ29tcG9uZW50RmFjdG9yeVwiO1xyXG5pbXBvcnQgRWxlbWVudEhlbHBlciBmcm9tIFwiLi4vdXRpbC9FbGVtZW50SGVscGVyXCI7XHJcbmltcG9ydCB7IFN0YXRlIH0gZnJvbSBcIi4uL3N0YXRlL1N0YXRlXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgSG9yaXpvbnRhbExheW91dENvbXBvbmVudCBleHRlbmRzIENvbXBvc2l0ZSB7XHJcblxyXG4gICAgcHJpdmF0ZSBmaXhlZENoaWxkcmVuOiBBcnJheTxJQ29tcG9uZW50PjtcclxuICAgIHByaXZhdGUgcGVyY3RDaGlsZHJlbjogQXJyYXk8SUNvbXBvbmVudD47XHJcbiAgICBwcml2YXRlIGZsdWlkQ2hpbGRyZW46IEFycmF5PElDb21wb25lbnQ+O1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKGxvZ2dlcjogSUxvZ2dlciwgYW5pbWF0b3I/OiBJQW5pbWF0b3IpIHtcclxuICAgICAgICBzdXBlcihsb2dnZXIsIGFuaW1hdG9yKTtcclxuXHJcbiAgICAgICAgdGhpcy5maXhlZENoaWxkcmVuID0gbmV3IEFycmF5PElDb21wb25lbnQ+KCk7XHJcbiAgICAgICAgdGhpcy5wZXJjdENoaWxkcmVuID0gbmV3IEFycmF5PElDb21wb25lbnQ+KCk7XHJcbiAgICAgICAgdGhpcy5mbHVpZENoaWxkcmVuID0gbmV3IEFycmF5PElDb21wb25lbnQ+KCk7XHJcblxyXG4gICAgICAgIHRoaXMucmVnaXN0ZXJFdmVudCgnaW5pdCcsICgpID0+IHsgcmV0dXJuIHRoaXMuaW5pdCgpIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGluaXQoKSB7XHJcbiAgICAgICAgLy8gRm9yIGVhY2ggY2hpbGQgZWxlbWVudCBpbiBlbGVtZW50cywgc2V0IHVwIGEgbmV3IENvbXBvbmVudCBmaWd1cmUgXHJcbiAgICAgICAgLy8gb3V0IGlmIGl0IGhhcyBhIHdpZHRoIHNldCBhcyBhIHBpeGVsIHZhbHVlIChmaXhlZCBjaGlsZCksIGEgMTAwJVxyXG4gICAgICAgIC8vIHZhbHVlIChmbHVpZCBjaGlsZCksIG9yIGEgdmFsdWUgc2V0IHRvIGEgc3BlY2lmaWMgcGVyY2VudGFnZSBcclxuICAgICAgICAvLyAocGVyY2VudGFnZSBjaGlsZClcclxuICAgICAgICBsZXQgZWwgPSB0aGlzLmdldEVsZW1lbnQoKTtcclxuICAgICAgICBsZXQgZmFjdG9yeSA9IG5ldyBDb21wb25lbnRGYWN0b3J5KCk7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBlbC5jaGlsZHJlbi5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBsZXQgY2hpbGQgPSBlbC5jaGlsZHJlbltpXSBhcyBIVE1MRWxlbWVudDtcclxuICAgICAgICAgICAgaWYgKCFjaGlsZC5pZClcclxuICAgICAgICAgICAgICAgIEVsZW1lbnRIZWxwZXIuc2V0R3VpZElkKGNoaWxkKTtcclxuICAgICAgICAgICAgbGV0IGNoaWxkQ29tcG9uZW50ID0gbmV3IENvbXBvbmVudChuZXcgTG9nZ2VyKCkpO1xyXG4gICAgICAgICAgICBjaGlsZENvbXBvbmVudC5zZXRFbGVtZW50KGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGNoaWxkLmlkKSk7XHJcbiAgICAgICAgICAgIGxldCBzaXplID0gY2hpbGQuZ2V0QXR0cmlidXRlKCdkYXRhLXNpemUnKSB8fCAnMTAwJSc7XHJcbiAgICAgICAgICAgIGlmIChzaXplID09PSAnMTAwJScpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZmx1aWRDaGlsZHJlbi5wdXNoKGNoaWxkQ29tcG9uZW50KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIGlmIChzaXplLm1hdGNoKC9eW1xcZF0rJSQvKSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5wZXJjdENoaWxkcmVuLnB1c2goY2hpbGRDb21wb25lbnQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5maXhlZENoaWxkcmVuLnB1c2goY2hpbGRDb21wb25lbnQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNoaWxkQ29tcG9uZW50LnJlbmRlcih7IHN0eWxlOiB7IGhlaWdodDogJzEwMCUnLCB3aWR0aDogc2l6ZSwgZmxvYXQ6ICdsZWZ0JyB9IH0pXHJcbiAgICAgICAgICAgIHRoaXMuYWRkQ2hpbGQoY2hpbGRDb21wb25lbnQpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHRoaXMucmVzaXplLmJpbmQodGhpcykpO1xyXG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCB0aGlzLnJlc2l6ZS5iaW5kKHRoaXMpKTtcclxuXHJcbiAgICAgICAgbGV0IHN0YXRlID0gbmV3IFN0YXRlKCk7XHJcbiAgICAgICAgc3RhdGUuc3R5bGUuaGVpZ2h0ID0gdGhpcy5nZXRFbGVtZW50KCkucGFyZW50RWxlbWVudC5vZmZzZXRIZWlnaHQgKyAncHgnO1xyXG4gICAgICAgIHN0YXRlLnN0eWxlLndpZHRoID0gdGhpcy5nZXRFbGVtZW50KCkucGFyZW50RWxlbWVudC5vZmZzZXRXaWR0aCArICdweCc7XHJcbiAgICAgICAgc3RhdGUuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcclxuICAgICAgICByZXR1cm4gdGhpcy5yZW5kZXIoc3RhdGUpO1xyXG4gICAgfVxyXG5cclxuICAgIHJlc2l6ZSgpIHtcclxuICAgICAgICBsZXQgc3RhdGUgPSBuZXcgU3RhdGUoKTtcclxuICAgICAgICBzdGF0ZS5zdHlsZS5oZWlnaHQgPSB0aGlzLmdldEVsZW1lbnQoKS5wYXJlbnRFbGVtZW50Lm9mZnNldEhlaWdodCArICdweCc7XHJcbiAgICAgICAgc3RhdGUuc3R5bGUud2lkdGggPSB0aGlzLmdldEVsZW1lbnQoKS5wYXJlbnRFbGVtZW50Lm9mZnNldFdpZHRoICsgJ3B4JztcclxuICAgICAgICByZXR1cm4gdGhpcy5yZW5kZXIoc3RhdGUpO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcihuZXdTdGF0ZTogU3RhdGUpIHtcclxuICAgICAgICBsZXQgcHJvbWlzZXMgPSBbXTtcclxuICAgICAgICBwcm9taXNlcy5wdXNoKHN1cGVyLnJlbmRlcihuZXdTdGF0ZSkpO1xyXG5cclxuICAgICAgICB2YXIgdG90YWxXaWR0aCA9IHRoaXMuZ2V0RWxlbWVudCgpLm9mZnNldFdpZHRoO1xyXG4gICAgICAgIHZhciBmbHVpZFdpZHRoID0gdG90YWxXaWR0aDtcclxuICAgICAgICB2YXIgdG90YWxIZWlnaHQgPSB0aGlzLmdldEVsZW1lbnQoKS5vZmZzZXRIZWlnaHQ7XHJcblxyXG4gICAgICAgIC8vIERyYXcgdGhlIGZpeGVkIGNoaWxkcmVuXHJcbiAgICAgICAgZm9yIChsZXQgZWwgb2YgdGhpcy5maXhlZENoaWxkcmVuKSB7XHJcbiAgICAgICAgICAgIGZsdWlkV2lkdGggLT0gZWwuZ2V0RWxlbWVudCgpLm9mZnNldFdpZHRoO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBEcmF3IHRoZSBwZXJjZW50YWdlIGNoaWxkcmVuXHJcbiAgICAgICAgZm9yIChsZXQgZWwgb2YgdGhpcy5wZXJjdENoaWxkcmVuKSB7XHJcbiAgICAgICAgICAgIGxldCB3aWR0aCA9IChwYXJzZUZsb2F0KGVsLmdldEVsZW1lbnQoKS5nZXRBdHRyaWJ1dGUoJ2RhdGEtc2l6ZScpKSAvIDEwMCAqIGZsdWlkV2lkdGgpO1xyXG4gICAgICAgICAgICBmbHVpZFdpZHRoIC09IHdpZHRoO1xyXG4gICAgICAgICAgICBlbC5yZW5kZXIoeyBzdHlsZTogeyB3aWR0aDogd2lkdGggKyAncHgnIH0gfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIERyYXcgdGhlIGZsdWlkIGNoaWxkcmVuXHJcbiAgICAgICAgZm9yIChsZXQgZWwgb2YgdGhpcy5mbHVpZENoaWxkcmVuKSB7XHJcbiAgICAgICAgICAgIHZhciB3aWR0aCA9IGZsdWlkV2lkdGggLyB0aGlzLmZsdWlkQ2hpbGRyZW4ubGVuZ3RoO1xyXG4gICAgICAgICAgICBwcm9taXNlcy5wdXNoKGVsLnJlbmRlcih7IHN0eWxlOiB7IHdpZHRoOiB3aWR0aCArICdweCcgfSB9KSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBQcm9taXNlLmFsbChwcm9taXNlcyk7XHJcbiAgICB9XHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tcG9uZW50L0hvcml6b250YWxMYXlvdXRDb21wb25lbnQudHMiLCJpbXBvcnQgeyBTdGF0ZSB9IGZyb20gXCIuLi9zdGF0ZS9TdGF0ZVwiO1xyXG5pbXBvcnQgeyBJTG9nZ2VyIH0gZnJvbSBcIi4uL3V0aWwvTG9nZ2VyXCI7XHJcbmltcG9ydCB7IElBbmltYXRvciB9IGZyb20gXCIuLi9hbmltYXRvci9BbmltYXRvcnNcIjtcclxuaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSBcIi4vQ29tcG9uZW50XCI7XHJcblxyXG5leHBvcnQgY2xhc3MgT3ZlcmxheUNvbXBvbmVudCBleHRlbmRzIENvbXBvbmVudCB7XHJcblxyXG4gICAgcHJpdmF0ZSBfY29sb3I6IHN0cmluZztcclxuICAgIHByaXZhdGUgX29wYWNpdHk6IG51bWJlcjtcclxuICAgIHByaXZhdGUgX2lzT246IGJvb2xlYW47XHJcblxyXG4gICAgY29uc3RydWN0b3IobG9nZ2VyOiBJTG9nZ2VyLCBhbmltYXRvcj86IElBbmltYXRvcikge1xyXG4gICAgICAgIHN1cGVyKGxvZ2dlciwgYW5pbWF0b3IpO1xyXG5cclxuICAgICAgICAvLyBTZXR1cCBkZWZhdWx0c1xyXG4gICAgICAgIHRoaXMuX29wYWNpdHkgPSAuODtcclxuICAgICAgICB0aGlzLl9jb2xvciA9ICcjMDAwMDAwJztcclxuICAgICAgICB0aGlzLl9pc09uID0gZmFsc2U7XHJcblxyXG4gICAgICAgIC8vIFJlbGF5IGV2ZW50c1xyXG4gICAgICAgIHRoaXMucmVnaXN0ZXJFdmVudCgnb24nLCAoKSA9PiB7IHJldHVybiB0aGlzLm9uKCkgfSk7XHJcbiAgICAgICAgdGhpcy5yZWdpc3RlckV2ZW50KCdvZmYnLCAoKSA9PiB7IHJldHVybiB0aGlzLm9mZigpIH0pO1xyXG4gICAgICAgIHRoaXMucmVnaXN0ZXJFdmVudCgndG9nZ2xlJywgKCkgPT4geyByZXR1cm4gdGhpcy50b2dnbGUoKSB9KTtcclxuICAgICAgICB0aGlzLnJlZ2lzdGVyRXZlbnQoJ2luaXQnLCAoKSA9PiB7IHJldHVybiB0aGlzLmluaXQoKSB9KTtcclxuICAgIH1cclxuXHJcbiAgICBvcGFjaXR5KG46IG51bWJlcik6IHRoaXMge1xyXG4gICAgICAgIGlmIChuIDwgMCkge1xyXG4gICAgICAgICAgICB0aGlzLl9sb2dnZXIuZXJyb3IoYE9wYWNpdHkgbXVzdCBiZSBncmVhdGVyIHRoYW4gb3IgZXF1YWwgdG8gemVyby5gKTtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChuID4gMSkge1xyXG4gICAgICAgICAgICB0aGlzLl9sb2dnZXIuZXJyb3IoYE9wYWNpdHkgbXVzdCBiZSBsZXNzIHRoYW4gb3IgZXF1YWwgdG8gb25lLmApO1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcztcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5fb3BhY2l0eSA9IG47XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgY29sb3IoYzogc3RyaW5nKTogdGhpcyB7XHJcbiAgICAgICAgdGhpcy5fY29sb3IgPSBjO1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogU2V0cyB0aGUgaW5pdGlhbCBzdGF0ZVxyXG4gICAgICogQHJldHVybnMge1Byb21pc2U8U3RhdGU+fSBcclxuICAgICAqL1xyXG4gICAgaW5pdCgpOiBQcm9taXNlPFN0YXRlPiB7XHJcbiAgICAgICAgbGV0IHN0YXRlID0gbmV3IFN0YXRlKCk7XHJcbiAgICAgICAgc3RhdGUub2tDbGFzc05hbWUgPSAnb2stb3ZlcmxheSc7XHJcbiAgICAgICAgc3RhdGUuc3R5bGUuaGVpZ2h0ID0gXCIxMDAlXCI7XHJcbiAgICAgICAgc3RhdGUuc3R5bGUud2lkdGggPSBcIjEwMCVcIjtcclxuICAgICAgICBzdGF0ZS5zdHlsZS5wb3NpdGlvbiA9IFwiZml4ZWRcIjtcclxuICAgICAgICBzdGF0ZS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSB0aGlzLl9jb2xvcjtcclxuICAgICAgICBzdGF0ZS5zdHlsZS5vcGFjaXR5ID0gJzAnO1xyXG4gICAgICAgIHN0YXRlLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgICAgICAgc3RhdGUuc3R5bGUudG9wID0gJzAnO1xyXG4gICAgICAgIHN0YXRlLnN0eWxlLmxlZnQgPSAnMCc7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLmdldEVsZW1lbnQoKSkge1xyXG4gICAgICAgICAgICB0aGlzLmdldEVsZW1lbnQoKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuY2xpY2tFdmVudCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gdGhpcy5yZW5kZXIoc3RhdGUpO1xyXG4gICAgfVxyXG5cclxuICAgIHRvZ2dsZSgpOiBQcm9taXNlPFN0YXRlPiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2lzT24gPyB0aGlzLm9mZigpIDogdGhpcy5vbigpO1xyXG4gICAgfVxyXG5cclxuICAgIG9uKCk6IFByb21pc2U8U3RhdGU+IHtcclxuICAgICAgICBpZiAodGhpcy5faXNPbilcclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgICAgICAgICAgIHJlc29sdmUodGhpcy5fc3RhdGUpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB0aGlzLl9pc09uID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXMucmVuZGVyKHRoaXMub25TdGF0ZSgpKTtcclxuICAgIH1cclxuXHJcbiAgICBvZmYoKTogUHJvbWlzZTxTdGF0ZT4ge1xyXG4gICAgICAgIGlmICghdGhpcy5faXNPbilcclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgICAgICAgICAgIHJlc29sdmUodGhpcy5fc3RhdGUpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB0aGlzLl9pc09uID0gZmFsc2U7XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzLnJlbmRlcih0aGlzLm9mZlN0YXRlKCkpXHJcbiAgICAgICAgICAgIC50aGVuKChyZXN1bHQpID0+IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnJlbmRlcih0aGlzLmhpZGRlblN0YXRlKCkpO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIG9uU3RhdGUoKTogU3RhdGUge1xyXG4gICAgICAgIGxldCBzdGF0ZSA9IG5ldyBTdGF0ZSgpO1xyXG4gICAgICAgIHN0YXRlLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xyXG4gICAgICAgIHN0YXRlLnN0eWxlLm9wYWNpdHkgPSB0aGlzLl9vcGFjaXR5LnRvU3RyaW5nKCk7XHJcbiAgICAgICAgcmV0dXJuIHN0YXRlO1xyXG4gICAgfVxyXG5cclxuICAgIG9mZlN0YXRlKCk6IFN0YXRlIHtcclxuICAgICAgICBsZXQgc3RhdGUgPSBuZXcgU3RhdGUoKTtcclxuICAgICAgICBzdGF0ZS5zdHlsZS5vcGFjaXR5ID0gJzAnO1xyXG4gICAgICAgIHJldHVybiBzdGF0ZTtcclxuICAgIH1cclxuXHJcbiAgICBoaWRkZW5TdGF0ZSgpOiBTdGF0ZSB7XHJcbiAgICAgICAgbGV0IHN0YXRlID0gbmV3IFN0YXRlKCk7XHJcbiAgICAgICAgc3RhdGUuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgICAgICByZXR1cm4gc3RhdGU7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBjbGlja0V2ZW50ID0gKCkgPT4ge1xyXG4gICAgICAgIHRoaXMuZ2V0Um9vdCgpLnJlbGF5KCdvZmYnKTtcclxuICAgIH1cclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21wb25lbnQvT3ZlcmxheUNvbXBvbmVudC50cyIsImltcG9ydCB7IENvbXBvc2l0ZSB9IGZyb20gXCIuL0NvbXBvc2l0ZVwiO1xyXG5pbXBvcnQgeyBJTG9nZ2VyIH0gZnJvbSBcIi4uL3V0aWwvTG9nZ2VyXCI7XHJcbmltcG9ydCBMb2dnZXIgZnJvbSBcIi4uL3V0aWwvTG9nZ2VyXCI7XHJcbmltcG9ydCB7IElBbmltYXRvciB9IGZyb20gXCIuLi9hbmltYXRvci9BbmltYXRvcnNcIjtcclxuaW1wb3J0IHsgSUNvbXBvbmVudCwgQ29tcG9uZW50IH0gZnJvbSBcIi4vQ29tcG9uZW50XCI7XHJcbmltcG9ydCB7IENvbXBvbmVudEZhY3RvcnkgfSBmcm9tIFwiLi9Db21wb25lbnRGYWN0b3J5XCI7XHJcbmltcG9ydCBFbGVtZW50SGVscGVyIGZyb20gXCIuLi91dGlsL0VsZW1lbnRIZWxwZXJcIjtcclxuaW1wb3J0IHsgU3RhdGUgfSBmcm9tIFwiLi4vc3RhdGUvU3RhdGVcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBWZXJ0aWNhbExheW91dENvbXBvbmVudCBleHRlbmRzIENvbXBvc2l0ZSB7XHJcblxyXG4gICAgcHJpdmF0ZSBmaXhlZENoaWxkcmVuOiBBcnJheTxJQ29tcG9uZW50PjtcclxuICAgIHByaXZhdGUgcGVyY3RDaGlsZHJlbjogQXJyYXk8SUNvbXBvbmVudD47XHJcbiAgICBwcml2YXRlIGZsdWlkQ2hpbGRyZW46IEFycmF5PElDb21wb25lbnQ+O1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKGxvZ2dlcjogSUxvZ2dlciwgYW5pbWF0b3I/OiBJQW5pbWF0b3IpIHtcclxuICAgICAgICBzdXBlcihsb2dnZXIsIGFuaW1hdG9yKTtcclxuXHJcbiAgICAgICAgdGhpcy5maXhlZENoaWxkcmVuID0gbmV3IEFycmF5PElDb21wb25lbnQ+KCk7XHJcbiAgICAgICAgdGhpcy5wZXJjdENoaWxkcmVuID0gbmV3IEFycmF5PElDb21wb25lbnQ+KCk7XHJcbiAgICAgICAgdGhpcy5mbHVpZENoaWxkcmVuID0gbmV3IEFycmF5PElDb21wb25lbnQ+KCk7XHJcblxyXG4gICAgICAgIHRoaXMucmVnaXN0ZXJFdmVudCgnaW5pdCcsICgpID0+IHsgcmV0dXJuIHRoaXMuaW5pdCgpIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogSW5pdGlhbGl6ZSB0aGUgVmVydGljYWwgTGF5b3V0XHJcbiAgICAgKiBGb3IgZWFjaCBjaGlsZCBlbGVtZW50IGluIGVsZW1lbnRzLCBzZXQgdXAgYSBuZXcgQ29tcG9uZW50IGZpZ3VyZSBcclxuICAgICAqIG91dCBpZiBpdCBoYXMgYSBoZWlnaHQgc2V0IGFzIGEgcGl4ZWwgdmFsdWUgKGZpeGVkIGNoaWxkKSwgYSAxMDAlXHJcbiAgICAgKiB2YWx1ZSAoZmx1aWQgY2hpbGQpLCBvciBhIHZhbHVlIHNldCB0byBhIHNwZWNpZmljIHBlcmNlbnRhZ2UgXHJcbiAgICAgKiAocGVyY2VudGFnZSBjaGlsZClcclxuICAgICAqIFxyXG4gICAgICogQHJldHVybnMgXHJcbiAgICAgKiBAbWVtYmVyb2YgVmVydGljYWxMYXlvdXRDb21wb25lbnRcclxuICAgICAqL1xyXG4gICAgaW5pdCgpIHtcclxuICAgICAgICBsZXQgZWwgPSB0aGlzLmdldEVsZW1lbnQoKTtcclxuICAgICAgICBsZXQgZmFjdG9yeSA9IG5ldyBDb21wb25lbnRGYWN0b3J5KCk7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBlbC5jaGlsZHJlbi5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBsZXQgY2hpbGQgPSBlbC5jaGlsZHJlbltpXSBhcyBIVE1MRWxlbWVudDtcclxuICAgICAgICAgICAgaWYgKCFjaGlsZC5pZClcclxuICAgICAgICAgICAgICAgIEVsZW1lbnRIZWxwZXIuc2V0R3VpZElkKGNoaWxkKTtcclxuICAgICAgICAgICAgbGV0IGNoaWxkQ29tcG9uZW50ID0gbmV3IENvbXBvbmVudChuZXcgTG9nZ2VyKCkpO1xyXG4gICAgICAgICAgICBjaGlsZENvbXBvbmVudC5zZXRFbGVtZW50KGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGNoaWxkLmlkKSk7XHJcbiAgICAgICAgICAgIGxldCBzaXplID0gY2hpbGQuZ2V0QXR0cmlidXRlKCdkYXRhLXNpemUnKSB8fCAnMTAwJSc7XHJcbiAgICAgICAgICAgIGlmIChzaXplID09PSAnMTAwJScpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZmx1aWRDaGlsZHJlbi5wdXNoKGNoaWxkQ29tcG9uZW50KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIGlmIChzaXplLm1hdGNoKC9eW1xcZF0rJSQvKSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5wZXJjdENoaWxkcmVuLnB1c2goY2hpbGRDb21wb25lbnQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5maXhlZENoaWxkcmVuLnB1c2goY2hpbGRDb21wb25lbnQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNoaWxkQ29tcG9uZW50LnJlbmRlcih7IHN0eWxlOiB7IHdpZHRoOiAnMTAwJScsIGhlaWdodDogc2l6ZSwgb3ZlcmZsb3c6ICdoaWRkZW4nLCBmbG9hdDogJ2xlZnQnIH0gfSlcclxuICAgICAgICAgICAgdGhpcy5hZGRDaGlsZChjaGlsZENvbXBvbmVudCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigncmVzaXplJywgdGhpcy5yZXNpemUuYmluZCh0aGlzKSk7XHJcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHRoaXMucmVzaXplLmJpbmQodGhpcykpO1xyXG5cclxuICAgICAgICBsZXQgc3RhdGUgPSBuZXcgU3RhdGUoKTtcclxuICAgICAgICBzdGF0ZS5zdHlsZS5oZWlnaHQgPSB0aGlzLmdldEVsZW1lbnQoKS5wYXJlbnRFbGVtZW50Lm9mZnNldEhlaWdodCArICdweCc7XHJcbiAgICAgICAgc3RhdGUuc3R5bGUud2lkdGggPSB0aGlzLmdldEVsZW1lbnQoKS5wYXJlbnRFbGVtZW50Lm9mZnNldFdpZHRoICsgJ3B4JztcclxuICAgICAgICBzdGF0ZS5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xyXG4gICAgICAgIHN0YXRlLnN0eWxlLm92ZXJmbG93ID0gXCJoaWRkZW5cIjtcclxuICAgICAgICBzdGF0ZS5zdHlsZS5mbG9hdCA9IFwibGVmdFwiXHJcbiAgICAgICAgcmV0dXJuIHRoaXMucmVuZGVyKHN0YXRlKTtcclxuICAgIH1cclxuXHJcbiAgICByZXNpemUoKSB7XHJcbiAgICAgICAgbGV0IHN0YXRlID0gbmV3IFN0YXRlKCk7XHJcbiAgICAgICAgc3RhdGUuc3R5bGUuaGVpZ2h0ID0gdGhpcy5nZXRFbGVtZW50KCkucGFyZW50RWxlbWVudC5vZmZzZXRIZWlnaHQgKyAncHgnO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGRvY3VtZW50LmJvZHkub2Zmc2V0SGVpZ2h0KVxyXG4gICAgICAgIHN0YXRlLnN0eWxlLndpZHRoID0gdGhpcy5nZXRFbGVtZW50KCkucGFyZW50RWxlbWVudC5vZmZzZXRXaWR0aCArICdweCc7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMucmVuZGVyKHN0YXRlKTtcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIobmV3U3RhdGU6IFN0YXRlKSB7XHJcbiAgICAgICAgbGV0IHByb21pc2VzID0gW107XHJcbiAgICAgICAgcHJvbWlzZXMucHVzaChzdXBlci5yZW5kZXIobmV3U3RhdGUpKTtcclxuXHJcbiAgICAgICAgdmFyIHRvdGFsSGVpZ2h0ID0gdGhpcy5nZXRFbGVtZW50KCkub2Zmc2V0SGVpZ2h0O1xyXG4gICAgICAgIHZhciBmbHVpZEhlaWdodCA9IHRvdGFsSGVpZ2h0O1xyXG4gICAgICAgIHZhciB0b3RhbFdpZHRoID0gdGhpcy5nZXRFbGVtZW50KCkub2Zmc2V0V2lkdGg7XHJcblxyXG4gICAgICAgIC8vIERyYXcgdGhlIGZpeGVkIGNoaWxkcmVuXHJcbiAgICAgICAgZm9yIChsZXQgZWwgb2YgdGhpcy5maXhlZENoaWxkcmVuKSB7XHJcbiAgICAgICAgICAgIGZsdWlkSGVpZ2h0IC09IGVsLmdldEVsZW1lbnQoKS5vZmZzZXRIZWlnaHQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIERyYXcgdGhlIHBlcmNlbnRhZ2UgY2hpbGRyZW5cclxuICAgICAgICBmb3IgKGxldCBlbCBvZiB0aGlzLnBlcmN0Q2hpbGRyZW4pIHtcclxuICAgICAgICAgICAgbGV0IGhlaWdodCA9IChwYXJzZUZsb2F0KGVsLmdldEVsZW1lbnQoKS5nZXRBdHRyaWJ1dGUoJ2RhdGEtc2l6ZScpKSAvIDEwMCAqIGZsdWlkSGVpZ2h0KTtcclxuICAgICAgICAgICAgZmx1aWRIZWlnaHQgLT0gaGVpZ2h0O1xyXG4gICAgICAgICAgICBlbC5yZW5kZXIoeyBzdHlsZTogeyBoZWlnaHQ6IGhlaWdodCArICdweCcgfSB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gRHJhdyB0aGUgZmx1aWQgY2hpbGRyZW5cclxuICAgICAgICBmb3IgKGxldCBlbCBvZiB0aGlzLmZsdWlkQ2hpbGRyZW4pIHtcclxuICAgICAgICAgICAgdmFyIGhlaWdodCA9IGZsdWlkSGVpZ2h0IC8gdGhpcy5mbHVpZENoaWxkcmVuLmxlbmd0aDtcclxuICAgICAgICAgICAgcHJvbWlzZXMucHVzaChlbC5yZW5kZXIoeyBzdHlsZTogeyBoZWlnaHQ6IGhlaWdodCArICdweCcgfSB9KSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBQcm9taXNlLmFsbChwcm9taXNlcyk7XHJcbiAgICB9XHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tcG9uZW50L1ZlcnRpY2FsTGF5b3V0Q29tcG9uZW50LnRzIiwiaW1wb3J0IHsgU3RhdGUgfSBmcm9tICcuLi9zdGF0ZS9TdGF0ZSc7XHJcbmltcG9ydCB7IElMb2dnZXIgfSBmcm9tIFwiLi4vdXRpbC9Mb2dnZXJcIjtcclxuaW1wb3J0IHsgSUFuaW1hdG9yIH0gZnJvbSBcIi4uL2FuaW1hdG9yL0FuaW1hdG9yc1wiO1xyXG5pbXBvcnQgeyBDb21wb3NpdGUgfSBmcm9tIFwiLi9Db21wb3NpdGVcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBXaW5kb3dDb21wb25lbnQgZXh0ZW5kcyBDb21wb3NpdGUge1xyXG5cclxuICAgIHByaXZhdGUgX3dpZHRoOiBudW1iZXI7XHJcbiAgICBwcml2YXRlIF9oZWlnaHQ6IG51bWJlcjtcclxuICAgIHByaXZhdGUgX3RvcDogbnVtYmVyO1xyXG4gICAgcHJpdmF0ZSBfbGVmdDogbnVtYmVyO1xyXG4gICAgcHJpdmF0ZSBfaXNPcGVuOiBib29sZWFuO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKGxvZ2dlcjogSUxvZ2dlciwgYW5pbWF0b3I/OiBJQW5pbWF0b3IpIHtcclxuICAgICAgICBzdXBlcihsb2dnZXIsIGFuaW1hdG9yKTtcclxuXHJcbiAgICAgICAgLy8gU2V0dXAgZGVmYXVsdHNcclxuICAgICAgICB0aGlzLl93aWR0aCA9IDA7XHJcbiAgICAgICAgdGhpcy5faGVpZ2h0ID0gMDtcclxuICAgICAgICB0aGlzLl90b3AgPSAwO1xyXG4gICAgICAgIHRoaXMuX2xlZnQgPSAwO1xyXG4gICAgICAgIHRoaXMuX2lzT3BlbiA9IGZhbHNlO1xyXG5cclxuICAgICAgICAvLyBSZWxheSBldmVudHNcclxuICAgICAgICB0aGlzLnJlZ2lzdGVyRXZlbnQoJ29uJywgKCkgPT4geyByZXR1cm4gdGhpcy5vbigpIH0pO1xyXG4gICAgICAgIHRoaXMucmVnaXN0ZXJFdmVudCgnb2ZmJywgKCkgPT4geyByZXR1cm4gdGhpcy5vZmYoKSB9KTtcclxuICAgICAgICB0aGlzLnJlZ2lzdGVyRXZlbnQoJ3RvZ2dsZScsICgpID0+IHsgcmV0dXJuIHRoaXMudG9nZ2xlKCkgfSk7XHJcbiAgICAgICAgdGhpcy5yZWdpc3RlckV2ZW50KCdpbml0JywgKCkgPT4geyByZXR1cm4gdGhpcy5pbml0KCkgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgd2lkdGgobjogbnVtYmVyKTogdGhpcyB7XHJcbiAgICAgICAgaWYgKG4gPCAwKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2xvZ2dlci5lcnJvcihgV2lkdGggbXVzdCBiZSBncmVhdGVyIHRoYW4gb3IgZXF1YWwgdG8gemVyby5gKTtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuX3dpZHRoID0gbjtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuXHJcbiAgICBoZWlnaHQobjogbnVtYmVyKTogdGhpcyB7XHJcbiAgICAgICAgaWYgKG4gPCAwKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2xvZ2dlci5lcnJvcihgSGVpZ2h0IG11c3QgYmUgZ3JlYXRlciB0aGFuIG9yIGVxdWFsIHRvIHplcm8uYCk7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLl9oZWlnaHQgPSBuO1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG5cclxuICAgIHRvcChuOiBudW1iZXIpOiB0aGlzIHtcclxuICAgICAgICB0aGlzLl90b3AgPSBuO1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG5cclxuICAgIGxlZnQobjogbnVtYmVyKTogdGhpcyB7XHJcbiAgICAgICAgdGhpcy5fbGVmdCA9IG47XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBTZXRzIHRoZSBpbml0aWFsIHN0YXRlXHJcbiAgICAgKiBAcmV0dXJucyB7UHJvbWlzZTxTdGF0ZT59IFxyXG4gICAgICovXHJcbiAgICBpbml0KCk6IFByb21pc2U8U3RhdGU+IHtcclxuICAgICAgICBsZXQgc3RhdGUgPSBuZXcgU3RhdGUoKTtcclxuICAgICAgICBzdGF0ZS5va0NsYXNzTmFtZSA9ICdvay13aW5kb3cnXHJcbiAgICAgICAgc3RhdGUuc3R5bGUucG9zaXRpb24gPSAnYWJzb2x1dGUnO1xyXG4gICAgICAgIHN0YXRlLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgICAgICAgc3RhdGUuc3R5bGUuekluZGV4ID0gJzk5OTknXHJcbiAgICAgICAgc3RhdGUuc3R5bGUud2lkdGggPSBgJHt0aGlzLmdldEVsZW1lbnQoKS5wYXJlbnRFbGVtZW50Lm9mZnNldFdpZHRoIC8gMn1weGA7XHJcbiAgICAgICAgc3RhdGUuc3R5bGUuaGVpZ2h0ID0gYCR7dGhpcy5nZXRFbGVtZW50KCkucGFyZW50RWxlbWVudC5vZmZzZXRIZWlnaHQgLyAyfXB4YDtcclxuICAgICAgICBzdGF0ZS5zdHlsZS5sZWZ0ID0gYCR7dGhpcy5fbGVmdH1weGA7XHJcbiAgICAgICAgc3RhdGUuc3R5bGUudG9wID0gYCR7dGhpcy5fdG9wfXB4YDtcclxuICAgICAgICByZXR1cm4gdGhpcy5yZW5kZXIoc3RhdGUpO1xyXG4gICAgfVxyXG5cclxuICAgIHRvZ2dsZSgpOiBQcm9taXNlPFN0YXRlPiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2lzT3BlbiA/IHRoaXMub2ZmKCkgOiB0aGlzLm9uKCk7XHJcbiAgICB9XHJcblxyXG4gICAgb24oKTogUHJvbWlzZTxTdGF0ZT4ge1xyXG4gICAgICAgIGlmICh0aGlzLl9pc09wZW4pXHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgICAgICAgICAgICByZXNvbHZlKHRoaXMuX3N0YXRlKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy5faXNPcGVuID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgbGV0IHN0YXRlID0gbmV3IFN0YXRlKCk7XHJcbiAgICAgICAgc3RhdGUuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMucmVuZGVyKHN0YXRlKTtcclxuICAgIH1cclxuXHJcbiAgICBvZmYoKTogUHJvbWlzZTxTdGF0ZT4ge1xyXG4gICAgICAgIGlmICghdGhpcy5faXNPcGVuKVxyXG4gICAgICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmVzb2x2ZSh0aGlzLl9zdGF0ZSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMuX2lzT3BlbiA9IGZhbHNlO1xyXG5cclxuICAgICAgICBsZXQgc3RhdGUgPSBuZXcgU3RhdGUoKTtcclxuICAgICAgICBzdGF0ZS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgICAgIHJldHVybiB0aGlzLnJlbmRlcihzdGF0ZSk7XHJcbiAgICB9XHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tcG9uZW50L1dpbmRvd0NvbXBvbmVudC50cyIsImV4cG9ydCAqIGZyb20gJy4vc3RhdGUvU3RhdGUnO1xyXG5leHBvcnQgKiBmcm9tICcuL2NvbXBvbmVudC9Db21wb25lbnRGYWN0b3J5JztcclxuZXhwb3J0ICogZnJvbSAnLi9jb21wb25lbnQvQ29tcG9uZW50JztcclxuZXhwb3J0ICogZnJvbSAnLi9jb21wb25lbnQvQ29tcG9zaXRlJztcclxuZXhwb3J0ICogZnJvbSAnLi9jb21wb25lbnQvRHJhd2VyQ29tcG9uZW50JztcclxuZXhwb3J0ICogZnJvbSAnLi9hbmltYXRvci9BbmltYXRvcnMnO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9vdXRraXQudHMiXSwic291cmNlUm9vdCI6IiJ9
//# sourceMappingURL=outkit.js.map