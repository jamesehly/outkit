/*! Outkit v0.2.0 - Copyright 2017 James Ehly - MIT License */
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
/******/ 	return __webpack_require__(__webpack_require__.s = 13);
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
var StandardAnimator_1 = __webpack_require__(7);
var DrawerComponent_1 = __webpack_require__(6);
var OverlayComponent_1 = __webpack_require__(10);
var WindowComponent_1 = __webpack_require__(12);
var DraggableComponent_1 = __webpack_require__(8);
var HorizontalLayoutComponent_1 = __webpack_require__(9);
var VerticalLayoutComponent_1 = __webpack_require__(11);

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
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

Object.defineProperty(exports, "__esModule", { value: true });

var StandardAnimator = function () {
    function StandardAnimator() {
        _classCallCheck(this, StandardAnimator);

        this._duration = 200;
        this._step = function () {};
        this._rate = 16;
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
        key: "animate",
        value: function animate(start) {
            var _this = this;

            for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
                args[_key - 1] = arguments[_key];
            }

            return new Promise(function (resolve) {
                _this._interval = window.setInterval(function () {
                    var deltaTime = Date.now();
                    var timePassed = deltaTime - start;
                    var progress = timePassed / _this._duration;
                    if (progress > 1) progress = 1;
                    var delta = progress;
                    _this._step(delta, args);
                    if (progress == 1) {
                        clearInterval(_this._interval);
                        resolve(true);
                    }
                }, _this._rate);
            });
        }
    }]);

    return StandardAnimator;
}();

exports.default = StandardAnimator;

/***/ }),
/* 8 */
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
/* 9 */
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
/* 10 */
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
/* 11 */
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
/* 12 */
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
/* 13 */
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
__export(__webpack_require__(6));

/***/ })
/******/ ]);
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCAyMzQ5YzU2YmFhMTYwOGY5OWIyZCIsIndlYnBhY2s6Ly8vLi9zcmMvc3RhdGUvU3RhdGUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudC9Db21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudC9Db21wb3NpdGUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudC9Db21wb25lbnRGYWN0b3J5LnRzIiwid2VicGFjazovLy8uL3NyYy91dGlsL0VsZW1lbnRIZWxwZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWwvTG9nZ2VyLnRzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnQvRHJhd2VyQ29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL3NyYy9hbmltYXRvci9TdGFuZGFyZEFuaW1hdG9yLnRzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnQvRHJhZ2dhYmxlQ29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnQvSG9yaXpvbnRhbExheW91dENvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50L092ZXJsYXlDb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudC9WZXJ0aWNhbExheW91dENvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50L1dpbmRvd0NvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvb3V0a2l0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsTztBQ1ZBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNB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QUFHLElBQUksUUFBUTtBQUNuQixrQkFBWSxjQUFjO0FBQzFCLGtCQUFNLE1BQVMsV0FBYztBQUM3QixrQkFBTSxNQUFRLFVBQVU7QUFDeEIsa0JBQU0sTUFBTyxTQUFTO0FBQ3RCLGtCQUFNLE1BQVMsUUFBTyxLQUFhLGFBQWMsY0FBWSxjQUFTO0FBQ3RFLGtCQUFNLE1BQVUsU0FBTyxLQUFhLGFBQWMsY0FBYSxlQUFTO0FBQ3hFLGtCQUFNLE1BQVEsT0FBTyxLQUFXO0FBQ2hDLGtCQUFNLE1BQU8sTUFBTyxLQUFVO0FBQzdCLG1CQUFLLEtBQU8sT0FDdEI7QUFFTTs7OztBQUNJLG1CQUFLLEtBQVEsVUFBTyxLQUFNLFFBQU8sS0FDM0M7QUFFRTs7Ozs7O0FBQ0ssZ0JBQUssS0FBUyxvQkFDSyxRQUFDLFVBQVEsU0FBUTtBQUN4Qix3QkFBSyxPQUNoQjtBQUFHLGFBRkksQ0FBRDtBQUdOLGlCQUFRLFVBQVE7QUFFcEIsZ0JBQVMsUUFBRyxJQUFJLFFBQVE7QUFDbkIsa0JBQU0sTUFBUSxVQUFXO0FBQ3hCLG1CQUFLLEtBQU8sT0FDdEI7QUFFRzs7Ozs7O0FBQ0ksZ0JBQUMsQ0FBSyxLQUFTLG9CQUNJLFFBQUMsVUFBUSxTQUFRO0FBQ3hCLHdCQUFLLE9BQ2hCO0FBQUcsYUFGSSxDQUFEO0FBR04saUJBQVEsVUFBUztBQUVyQixnQkFBUyxRQUFHLElBQUksUUFBUTtBQUNuQixrQkFBTSxNQUFRLFVBQVU7QUFDdkIsbUJBQUssS0FBTyxPQUN0QjtBQUNIOzs7O0VBakdvQyxZQUFTOztBQUE5QywwQkFpR0MsZ0I7Ozs7Ozs7Ozs7Ozs7OztBQ3RHRCw2QkFBOEI7QUFDOUIsNkJBQTZDO0FBQzdDLDZCQUFzQztBQUN0Qyw2QkFBc0M7QUFDdEMsNkJBQTRDLEkiLCJmaWxlIjoiZGlzdC9vdXRraXQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShbXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJvdXRraXRcIl0gPSBmYWN0b3J5KCk7XG5cdGVsc2Vcblx0XHRyb290W1wib3V0a2l0XCJdID0gZmFjdG9yeSgpO1xufSkodGhpcywgZnVuY3Rpb24oKSB7XG5yZXR1cm4gXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGlkZW50aXR5IGZ1bmN0aW9uIGZvciBjYWxsaW5nIGhhcm1vbnkgaW1wb3J0cyB3aXRoIHRoZSBjb3JyZWN0IGNvbnRleHRcbiBcdF9fd2VicGFja19yZXF1aXJlX18uaSA9IGZ1bmN0aW9uKHZhbHVlKSB7IHJldHVybiB2YWx1ZTsgfTtcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMTMpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIDIzNDljNTZiYWExNjA4Zjk5YjJkIiwiZXhwb3J0IGNsYXNzIFN0YXRlIHtcclxuICAgIC8vIHBvc3NpYmx5IHJlZmFjdG9yIHRoZXNlIGNsYXNzZXMgaW50byBhbiBhcnJheSBvZiBjbGFzc2VzIHRoYXQgYXJlIG1hbmFnZWRcclxuICAgIC8vIHZpYSBtZXRob2RzIGluIHRoaXMgY2xhc3NcclxuICAgIG9rQ2xhc3NOYW1lPzogc3RyaW5nO1xyXG4gICAgc3RhdGVDbGFzc05hbWU/OiBzdHJpbmc7XHJcbiAgICBzdHlsZT86IHtcclxuICAgICAgICBoZWlnaHQ/OiBzdHJpbmc7XHJcbiAgICAgICAgd2lkdGg/OiBzdHJpbmc7XHJcbiAgICAgICAgb3ZlcmZsb3c/OiBzdHJpbmc7XHJcbiAgICAgICAgZmxvYXQ/OiBzdHJpbmc7XHJcbiAgICAgICAgcG9zaXRpb24/OiBzdHJpbmc7XHJcbiAgICAgICAgekluZGV4Pzogc3RyaW5nO1xyXG4gICAgICAgIHRvcD86IHN0cmluZztcclxuICAgICAgICBib3R0b20/OiBzdHJpbmc7XHJcbiAgICAgICAgbGVmdD86IHN0cmluZztcclxuICAgICAgICByaWdodD86IHN0cmluZztcclxuICAgICAgICBkaXNwbGF5Pzogc3RyaW5nO1xyXG4gICAgICAgIGJhY2tncm91bmRDb2xvcj86IHN0cmluZztcclxuICAgICAgICBvcGFjaXR5Pzogc3RyaW5nO1xyXG4gICAgfVxyXG4gICAgc3RhdGljIHJlYWRvbmx5IGFuaW1hdGVkUHJvcHM6IEFycmF5PHN0cmluZz4gPSBbXHJcbiAgICAgICAgJ3N0eWxlLmhlaWdodCcsIFxyXG4gICAgICAgICdzdHlsZS53aWR0aCcsIFxyXG4gICAgICAgICdzdHlsZS50b3AnLCBcclxuICAgICAgICAnc3R5bGUuYm90dG9tJywgXHJcbiAgICAgICAgJ3N0eWxlLmxlZnQnLCBcclxuICAgICAgICAnc3R5bGUucmlnaHQnLCBcclxuICAgICAgICAnc3R5bGUub3BhY2l0eScsIFxyXG4gICAgICAgICdzdHlsZS56SW5kZXgnXHJcbiAgICAgICAgXTtcclxuICAgIFxyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgdGhpcy5va0NsYXNzTmFtZSA9ICcnO1xyXG4gICAgICAgIHRoaXMuc3RhdGVDbGFzc05hbWUgPSAnJztcclxuICAgICAgICB0aGlzLnN0eWxlID0ge307XHJcbiAgICAgICAgfVxyXG5cclxuICAgIHN0YXRpYyBhbmltYXRlZCh0eXBlOiBzdHJpbmcpIHtcclxuICAgICAgICB2YXIgaW5kZXggPSB0aGlzLmFuaW1hdGVkUHJvcHMuaW5kZXhPZih0eXBlKTtcclxuICAgICAgICByZXR1cm4gaW5kZXggPj0gMDtcclxuICAgIH0gXHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3N0YXRlL1N0YXRlLnRzIiwiaW1wb3J0IHsgSUxvZ2dlciB9IGZyb20gXCIuLi91dGlsL0xvZ2dlclwiO1xyXG5pbXBvcnQgeyBJQW5pbWF0b3IgfSBmcm9tIFwiLi4vYW5pbWF0b3IvQW5pbWF0b3JzXCI7XHJcbmltcG9ydCB7IFN0YXRlIH0gZnJvbSBcIi4uL3N0YXRlL1N0YXRlXCI7XHJcbmltcG9ydCBFbGVtZW50SGVscGVyIGZyb20gXCIuLi91dGlsL0VsZW1lbnRIZWxwZXJcIjtcclxuXHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIElDb21wb25lbnQge1xyXG4gICAgcmVsYXkobWVzc2FnZTogc3RyaW5nKTogUHJvbWlzZTxhbnk+O1xyXG4gICAgcmVnaXN0ZXJFdmVudChuYW1lOiBzdHJpbmcsIGZ1bmM/OiBGdW5jdGlvbik6IHRoaXM7XHJcbiAgICBzZXRFbGVtZW50KGVsZW1lbnQ6IEhUTUxFbGVtZW50KTogdGhpcztcclxuICAgIGdldEVsZW1lbnQoKTogSFRNTEVsZW1lbnQ7XHJcbiAgICBnZXRBbmltYXRvcigpOiBJQW5pbWF0b3I7XHJcbiAgICBhZGRDaGlsZChjb21wb25lbnQ6IElDb21wb25lbnQpOiB0aGlzO1xyXG4gICAgcmVtb3ZlQ2hpbGQoY29tcG9uZW50OiBJQ29tcG9uZW50KTogdGhpcztcclxuICAgIGdldENoaWxkKCk6IElDb21wb25lbnQ7XHJcbiAgICBnZXRSb290KCk6IElDb21wb25lbnQ7XHJcbiAgICBzZXRQYXJlbnQocGFyZW50OiBJQ29tcG9uZW50KTogdGhpcztcclxuICAgIHJlbmRlcihuZXdTdGF0ZTogU3RhdGUpOiBQcm9taXNlPGFueT47XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBDb21wb25lbnQgaW1wbGVtZW50cyBJQ29tcG9uZW50IHtcclxuXHJcbiAgICBwcml2YXRlIF9lbGVtZW50OiBIVE1MRWxlbWVudDtcclxuICAgIHByaXZhdGUgX2NoaWxkOiBJQ29tcG9uZW50O1xyXG4gICAgcHJpdmF0ZSBfcGFyZW50OiBJQ29tcG9uZW50O1xyXG5cclxuICAgIHByb3RlY3RlZCBfbG9nZ2VyOiBJTG9nZ2VyO1xyXG4gICAgcHJvdGVjdGVkIF9hbmltYXRvcjogSUFuaW1hdG9yO1xyXG4gICAgcHJvdGVjdGVkIF9ldmVudHM6IHsgW2lkOiBzdHJpbmddOiBGdW5jdGlvbiB9O1xyXG4gICAgcHJvdGVjdGVkIF9zdGF0ZTogU3RhdGU7XHJcblxyXG4gICAgY29uc3RydWN0b3IobG9nZ2VyOiBJTG9nZ2VyLCBhbmltYXRvcj86IElBbmltYXRvcikge1xyXG4gICAgICAgIHRoaXMuX2V2ZW50cyA9IHt9O1xyXG4gICAgICAgIHRoaXMuX2xvZ2dlciA9IGxvZ2dlcjtcclxuICAgICAgICB0aGlzLl9hbmltYXRvciA9IGFuaW1hdG9yO1xyXG4gICAgICAgIHRoaXMuX3N0YXRlID0gbnVsbDtcclxuICAgICAgICBpZiAodHlwZW9mIHRoaXMuX2FuaW1hdG9yICE9PSAndW5kZWZpbmVkJyAmJiBcclxuICAgICAgICAgICAgdGhpcy5fYW5pbWF0b3IgIT09IG51bGwgJiZcclxuICAgICAgICAgICAgdHlwZW9mIHRoaXMuX2FuaW1hdG9yLnNldFN0ZXAgIT09ICd1bmRlZmluZWQnICYmXHJcbiAgICAgICAgICAgIHR5cGVvZiB0aGlzLl9hbmltYXRvci5zZXRTdGVwID09PSAnZnVuY3Rpb24nKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2FuaW1hdG9yLnNldFN0ZXAodGhpcy5zdGVwKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0RWxlbWVudCgpOiBIVE1MRWxlbWVudCB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2VsZW1lbnQ7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0RWxlbWVudChlbGVtZW50OiBIVE1MRWxlbWVudCk6IHRoaXMge1xyXG4gICAgICAgIHRoaXMuX2VsZW1lbnQgPSBlbGVtZW50O1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG5cclxuICAgIGdldEFuaW1hdG9yKCk6IElBbmltYXRvciB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2FuaW1hdG9yO1xyXG4gICAgfVxyXG5cclxuICAgIGFkZENoaWxkKGNvbXBvbmVudDogSUNvbXBvbmVudCk6IHRoaXMge1xyXG4gICAgICAgIHRoaXMuX2NoaWxkID0gY29tcG9uZW50O1xyXG4gICAgICAgIGNvbXBvbmVudC5zZXRQYXJlbnQodGhpcyk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgcmVtb3ZlQ2hpbGQoY29tcG9uZW50OiBJQ29tcG9uZW50KTogdGhpcyB7XHJcbiAgICAgICAgdGhpcy5fY2hpbGQgPSBudWxsO1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG5cclxuICAgIGdldENoaWxkKCk6IElDb21wb25lbnQge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9jaGlsZDtcclxuICAgIH1cclxuXHJcbiAgICBzZXRQYXJlbnQocGFyZW50OiBJQ29tcG9uZW50KSB7XHJcbiAgICAgICAgdGhpcy5fcGFyZW50ID0gcGFyZW50O1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG5cclxuICAgIGdldFJvb3QoKTogSUNvbXBvbmVudCB7XHJcbiAgICAgICAgaWYgKHRoaXMuX3BhcmVudCAmJiB0eXBlb2YgdGhpcy5fcGFyZW50WydnZXRSb290J10gPT09ICdmdW5jdGlvbicpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3BhcmVudC5nZXRSb290KCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG5cclxuICAgIGdldFN0YXRlKCk6IFN0YXRlIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fc3RhdGU7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0U3RhdGUoc3RhdGU6IFN0YXRlKTogdGhpcyB7XHJcbiAgICAgICAgdGhpcy5fc3RhdGUgPSBzdGF0ZTtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuXHJcbiAgICByZWdpc3RlckV2ZW50KG5hbWU6IHN0cmluZywgZnVuYz86IEZ1bmN0aW9uKTogdGhpcyB7XHJcbiAgICAgICAgdGhpcy5fZXZlbnRzW25hbWVdID0gZnVuYztcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuXHJcbiAgICByZWxheShtZXNzYWdlOiBzdHJpbmcpOiBQcm9taXNlPGFueT4ge1xyXG4gICAgICAgIGxldCBwcm9taXNlcyA9IFtdXHJcbiAgICAgICAgaWYgKHR5cGVvZiB0aGlzLl9ldmVudHNbbWVzc2FnZV0gPT09ICdmdW5jdGlvbicpXHJcbiAgICAgICAgICAgIHByb21pc2VzLnB1c2godGhpcy5fZXZlbnRzW21lc3NhZ2VdKCkpO1xyXG5cclxuICAgICAgICBsZXQgY2hpbGQgPSB0aGlzLmdldENoaWxkKCk7XHJcbiAgICAgICAgaWYgKHR5cGVvZiBjaGlsZCA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIGNoaWxkWydyZWxheSddID09PSAnZnVuY3Rpb24nKVxyXG4gICAgICAgICAgICBwcm9taXNlcy5wdXNoKHRoaXMuZ2V0Q2hpbGQoKS5yZWxheShtZXNzYWdlKSk7XHJcbiAgICAgICAgcmV0dXJuIFByb21pc2UuYWxsKHByb21pc2VzKTtcclxuICAgIH1cclxuXHJcbiAgICBtZXJnZShuZXdTdGF0ZSwgb2xkU3RhdGUpIHtcclxuICAgICAgICBsZXQgc3RhdGUgPSBuZXcgU3RhdGUoKTtcclxuICAgICAgICBzdGF0ZSA9IE9iamVjdC5hc3NpZ24oc3RhdGUsIG9sZFN0YXRlLCBuZXdTdGF0ZSk7XHJcbiAgICAgICAgc3RhdGUuc3R5bGUgPSBPYmplY3QuYXNzaWduKHt9LCBvbGRTdGF0ZS5zdHlsZSwgbmV3U3RhdGUuc3R5bGUpO1xyXG4gICAgICAgIHJldHVybiBzdGF0ZTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIERyYXcgdGhlIGN1cnJlbnQgc3RhdGUgb250byB0aGUgZWxlbWVudCwgb25seSBjaGFuZ2luZyB0aGUgaXRlbXMgdGhhdCBoYXZlXHJcbiAgICAgKiBjaGFuZ2VkIHNpbmNlIHRoZSBsYXN0IGRyYXcuXHJcbiAgICAgKiBAcmV0dXJucyB7UHJvbWlzZTxTdGF0ZT59XHJcbiAgICAgKiBAbWVtYmVyb2YgQ29tcG9uZW50XHJcbiAgICAgKi9cclxuICAgIHJlbmRlcihuZXdTdGF0ZTogU3RhdGUpOiBQcm9taXNlPFN0YXRlPiB7XHJcbiAgICAgICAgbGV0IG9sZFN0YXRlID0gdGhpcy5fc3RhdGU7XHJcbiAgICAgICAgbGV0IGlzSW5pdGlhbCA9IGZhbHNlO1xyXG4gICAgICAgIGlmICghdGhpcy5fc3RhdGUpIHtcclxuICAgICAgICAgICAgb2xkU3RhdGUgPSBuZXcgU3RhdGUoKTtcclxuICAgICAgICAgICAgaXNJbml0aWFsID0gdHJ1ZTtcclxuICAgICAgICAgICAgdGhpcy5fZWxlbWVudC5zdHlsZS5jc3NUZXh0ID0gbnVsbDsgLy8gY2xlYXIgaW5saW5lIHN0bHlsZXNcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBuZXdTdGF0ZSA9IHRoaXMubWVyZ2UobmV3U3RhdGUsIG9sZFN0YXRlKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgICAgICAgIGlmICghdGhpcy5fZWxlbWVudCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fbG9nZ2VyLmVycm9yKGBFbGVtZW50IGlzIHVuZGVmaW5lZC4gIFVzZSBzZXRFbGVtZW50KCkgYmVmb3JlIGNhbGxpbmcgcmVuZGVyKCkuYClcclxuICAgICAgICAgICAgICAgIHJlamVjdChvbGRTdGF0ZSk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmIChuZXdTdGF0ZS5zdGF0ZUNsYXNzTmFtZSAmJiBuZXdTdGF0ZS5zdGF0ZUNsYXNzTmFtZSAhPSBvbGRTdGF0ZS5zdGF0ZUNsYXNzTmFtZSkge1xyXG4gICAgICAgICAgICAgICAgRWxlbWVudEhlbHBlci5jaGFuZ2VDbGFzcyh0aGlzLl9lbGVtZW50LCBuZXdTdGF0ZS5zdGF0ZUNsYXNzTmFtZSwgb2xkU3RhdGUuc3RhdGVDbGFzc05hbWUpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAobmV3U3RhdGUub2tDbGFzc05hbWUgJiYgbmV3U3RhdGUub2tDbGFzc05hbWUgIT0gb2xkU3RhdGUub2tDbGFzc05hbWUpIHtcclxuICAgICAgICAgICAgICAgIEVsZW1lbnRIZWxwZXIuY2hhbmdlQ2xhc3ModGhpcy5fZWxlbWVudCwgbmV3U3RhdGUub2tDbGFzc05hbWUsIG9sZFN0YXRlLm9rQ2xhc3NOYW1lKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLy8gTG9vcCB0aHJvdWdoIG5vbiBhbmltYXRhYmxlIHByb3BlcnRpZXMgb24gc3R5bGUgYW5kIHNldCB0aGVtXHJcbiAgICAgICAgICAgIGZvciAobGV0IG5hbWUgaW4gbmV3U3RhdGUuc3R5bGUpIHtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLl9hbmltYXRvciAmJiAoU3RhdGUuYW5pbWF0ZWQoJ3N0eWxlLicgKyBuYW1lKSAmJiBuZXdTdGF0ZS5zdHlsZVtuYW1lXSAhPT0gbnVsbCkgJiYgIWlzSW5pdGlhbClcclxuICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcclxuXHJcbiAgICAgICAgICAgICAgICBsZXQgbnMgPSBuZXdTdGF0ZS5zdHlsZVtuYW1lXTtcclxuICAgICAgICAgICAgICAgIGxldCBvcyA9IG9sZFN0YXRlLnN0eWxlW25hbWVdO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmIChucyA9PT0gb3MpXHJcbiAgICAgICAgICAgICAgICAgICAgY29udGludWU7XHJcblxyXG4gICAgICAgICAgICAgICAgdGhpcy5fZWxlbWVudC5zdHlsZVtuYW1lXSA9IG5zO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAvLyBJbml0aWFsIHN0YXRlXHJcbiAgICAgICAgICAgIGlmIChpc0luaXRpYWwpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuX2xvZ2dlci5sb2coYFtJbml0aWFsIFN0YXRlXVsjJHt0aGlzLl9lbGVtZW50LmlkfV06ICAke0pTT04uc3RyaW5naWZ5KG5ld1N0YXRlKX0gXWApO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fc3RhdGUgPSBuZXdTdGF0ZTtcclxuICAgICAgICAgICAgICAgIHJlc29sdmUobmV3U3RhdGUpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAvLyBTdGFydCB0aGUgYW5pbWF0b3IgdG8gYW5pbWF0ZSBhbnkgYW5pbWF0YWJsZSBwcm9wZXJ0aWVzXHJcbiAgICAgICAgICAgIGlmICh0aGlzLl9hbmltYXRvcikge1xyXG4gICAgICAgICAgICAgICAgbGV0IG46IG51bWJlciA9IERhdGUubm93KCk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5fYW5pbWF0b3IuYW5pbWF0ZShuLCBuZXdTdGF0ZSwgb2xkU3RhdGUpXHJcbiAgICAgICAgICAgICAgICAgICAgLnRoZW4oKGZpbmlzaGVkKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChmaW5pc2hlZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fbG9nZ2VyLmxvZyhgW1VwZGF0ZWQgU3RhdGVdWyMke3RoaXMuX2VsZW1lbnQuaWR9XTogICR7SlNPTi5zdHJpbmdpZnkobmV3U3RhdGUpfSBdYCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9zdGF0ZSA9IG5ld1N0YXRlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShuZXdTdGF0ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvLyBObyBhbmltYXRvciwgc28ganVzdCByZXNvbHZlXHJcbiAgICAgICAgICAgIHRoaXMuX3N0YXRlID0gbmV3U3RhdGU7XHJcbiAgICAgICAgICAgIHJlc29sdmUobmV3U3RhdGUpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdGVwID0gKGRlbHRhOiBudW1iZXIsIGFyZ3M6IGFueVtdKSA9PiB7XHJcbiAgICAgICAgLy8gTG9vcCB0aHJvdWdoIHZhbHVlcyBhbmQgbWFrZSBsaXZlIGNoYW5nZXMgdG8gZWxlbWVudFxyXG4gICAgICAgIHZhciBuZXdTdGF0ZSA9IGFyZ3NbMF07XHJcbiAgICAgICAgdmFyIG9sZFN0YXRlID0gYXJnc1sxXTtcclxuICAgICAgICBmb3IgKGxldCBuYW1lIGluIG5ld1N0YXRlLnN0eWxlKSB7XHJcbiAgICAgICAgICAgIGlmICghU3RhdGUuYW5pbWF0ZWQoJ3N0eWxlLicgKyBuYW1lKSlcclxuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xyXG5cclxuICAgICAgICAgICAgbGV0IG5zID0gbmV3U3RhdGUuc3R5bGVbbmFtZV07XHJcbiAgICAgICAgICAgIGxldCBvcyA9IG9sZFN0YXRlLnN0eWxlW25hbWVdO1xyXG5cclxuICAgICAgICAgICAgaWYgKG5zID09PSBvcylcclxuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xyXG5cclxuICAgICAgICAgICAgbGV0IG5zdiA9IHBhcnNlRmxvYXQobnMpO1xyXG4gICAgICAgICAgICBsZXQgb3N2ID0gcGFyc2VGbG9hdChvcyk7XHJcblxyXG4gICAgICAgICAgICBpZiAoaXNGaW5pdGUobnN2KSAmJiBpc0Zpbml0ZShvc3YpKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgdmFsdWUgPSAobnN2IC0gb3N2KSAqIGRlbHRhICsgb3N2ICsgJyc7XHJcbiAgICAgICAgICAgICAgICBpZiAoKCFpc0Zpbml0ZShucykgJiYgbnMubWF0Y2goL3B4JC8pKSB8fCAoIWlzRmluaXRlKG9zKSAmJiBvcy5tYXRjaCgvcHgkLykpKSBcclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZSA9IGAke3ZhbHVlfXB4YDtcclxuICAgICAgICAgICAgICAgIHRoaXMuX2VsZW1lbnQuc3R5bGVbbmFtZV0gPSB2YWx1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbXBvbmVudC9Db21wb25lbnQudHMiLCJpbXBvcnQgeyBDb21wb25lbnQsIElDb21wb25lbnQgfSBmcm9tIFwiLi9Db21wb25lbnRcIjtcclxuaW1wb3J0IHsgSUxvZ2dlciB9IGZyb20gXCIuLi91dGlsL0xvZ2dlclwiO1xyXG5pbXBvcnQgeyBJQW5pbWF0b3IgfSBmcm9tIFwiLi4vYW5pbWF0b3IvQW5pbWF0b3JzXCI7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIElDb21wb3NpdGUgZXh0ZW5kcyBJQ29tcG9uZW50IHtcclxuICAgIGdldENoaWxkcmVuKCk6IEFycmF5PElDb21wb25lbnQ+XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBDb21wb3NpdGUgZXh0ZW5kcyBDb21wb25lbnQgaW1wbGVtZW50cyBJQ29tcG9zaXRlIHtcclxuXHJcbiAgICBwcml2YXRlIF9saXN0OiBBcnJheTxJQ29tcG9uZW50PjtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihsb2dnZXI/OiBJTG9nZ2VyLCBhbmltYXRvcj86IElBbmltYXRvcikge1xyXG4gICAgICAgIHN1cGVyKGxvZ2dlciwgYW5pbWF0b3IpO1xyXG4gICAgICAgIHRoaXMuX2xpc3QgPSBbXTtcclxuICAgIH1cclxuXHJcbiAgICBhZGRDaGlsZChjb21wb25lbnQ6IElDb21wb25lbnQpOiB0aGlzIHtcclxuICAgICAgICB0aGlzLl9saXN0LnB1c2goY29tcG9uZW50KTtcclxuICAgICAgICBjb21wb25lbnQuc2V0UGFyZW50KHRoaXMpO1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbW92ZUNoaWxkKGNvbXBvbmVudDogSUNvbXBvbmVudCk6IHRoaXMge1xyXG4gICAgICAgIGxldCBpbmRleCA9IHRoaXMuX2xpc3QuaW5kZXhPZihjb21wb25lbnQpO1xyXG4gICAgICAgIHRoaXMuX2xpc3Quc3BsaWNlKGluZGV4LCAxKTtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuXHJcbiAgICBnZXRDaGlsZCgpOiBJQ29tcG9uZW50IHtcclxuICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxuXHJcbiAgICBnZXRDaGlsZHJlbigpOiBJQ29tcG9uZW50W10ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9saXN0O1xyXG4gICAgfVxyXG5cclxuICAgIHJlbGF5KG1lc3NhZ2U6IHN0cmluZyk6IFByb21pc2U8YW55PiB7XHJcbiAgICAgICAgdmFyIHByb21pc2VzID0gW107XHJcbiAgICAgICAgaWYgKHR5cGVvZiB0aGlzLl9ldmVudHNbbWVzc2FnZV0gPT09ICdmdW5jdGlvbicpXHJcbiAgICAgICAgICAgIHByb21pc2VzLnB1c2godGhpcy5fZXZlbnRzW21lc3NhZ2VdKCkpO1xyXG5cclxuICAgICAgICBmb3IgKGxldCBjaGlsZCBvZiB0aGlzLl9saXN0KSB7XHJcbiAgICAgICAgICAgIGlmICh0eXBlb2YgY2hpbGQgPT09ICdvYmplY3QnICYmIHR5cGVvZiBjaGlsZFsncmVsYXknXSA9PT0gJ2Z1bmN0aW9uJylcclxuICAgICAgICAgICAgICAgIHByb21pc2VzLnB1c2goY2hpbGQucmVsYXkobWVzc2FnZSkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gUHJvbWlzZS5hbGwocHJvbWlzZXMpO1xyXG4gICAgfVxyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbXBvbmVudC9Db21wb3NpdGUudHMiLCJpbXBvcnQgeyBDb21wb25lbnQsIElDb21wb25lbnQgfSBmcm9tIFwiLi9Db21wb25lbnRcIjtcclxuaW1wb3J0IExvZ2dlciBmcm9tIFwiLi4vdXRpbC9Mb2dnZXJcIjtcclxuaW1wb3J0IFN0YW5kYXJkQW5pbWF0b3IgZnJvbSBcIi4uL2FuaW1hdG9yL1N0YW5kYXJkQW5pbWF0b3JcIjtcclxuaW1wb3J0IHsgRHJhd2VyQ29tcG9uZW50IH0gZnJvbSBcIi4vRHJhd2VyQ29tcG9uZW50XCI7XHJcbmltcG9ydCB7IE92ZXJsYXlDb21wb25lbnQgfSBmcm9tIFwiLi9PdmVybGF5Q29tcG9uZW50XCI7XHJcbmltcG9ydCB7IFdpbmRvd0NvbXBvbmVudCB9IGZyb20gXCIuL1dpbmRvd0NvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBEcmFnZ2FibGVDb21wb25lbnQgfSBmcm9tIFwiLi9EcmFnZ2FibGVDb21wb25lbnRcIjtcclxuaW1wb3J0IHsgSG9yaXpvbnRhbExheW91dENvbXBvbmVudCB9IGZyb20gXCIuL0hvcml6b250YWxMYXlvdXRDb21wb25lbnRcIjtcclxuaW1wb3J0IHsgVmVydGljYWxMYXlvdXRDb21wb25lbnQgfSBmcm9tIFwiLi9WZXJ0aWNhbExheW91dENvbXBvbmVudFwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIENvbXBvbmVudEZhY3Rvcnkge1xyXG5cclxuICAgIGNvbXBvbmVudChlbGVtZW50OiBzdHJpbmcpOiBJQ29tcG9uZW50IHtcclxuICAgICAgICBsZXQgY29tcG9uZW50ID0gbmV3IENvbXBvbmVudChuZXcgTG9nZ2VyKCksIG5ldyBTdGFuZGFyZEFuaW1hdG9yKCkpXHJcbiAgICAgICAgY29tcG9uZW50LnNldEVsZW1lbnQodGhpcy5nZXRFbGVtZW50KGVsZW1lbnQpKTtcclxuICAgICAgICByZXR1cm4gY29tcG9uZW50O1xyXG4gICAgfVxyXG5cclxuICAgIGRyYXdlcihlbGVtZW50OiBzdHJpbmcpOiBJQ29tcG9uZW50IHtcclxuICAgICAgICBsZXQgY29tcG9uZW50ID0gbmV3IERyYXdlckNvbXBvbmVudChuZXcgTG9nZ2VyKCksIG5ldyBTdGFuZGFyZEFuaW1hdG9yKCkpO1xyXG4gICAgICAgIGxldCBlbCA9IHRoaXMuZ2V0RWxlbWVudChlbGVtZW50KTtcclxuICAgICAgICBjb21wb25lbnQuc2V0RWxlbWVudChlbCk7XHJcbiAgICAgICAgY29tcG9uZW50LmluaXQoKTtcclxuICAgICAgICByZXR1cm4gY29tcG9uZW50O1xyXG4gICAgfVxyXG5cclxuICAgIG92ZXJsYXkoZWxlbWVudDogc3RyaW5nKTogSUNvbXBvbmVudCB7XHJcbiAgICAgICAgbGV0IGNvbXBvbmVudCA9IG5ldyBPdmVybGF5Q29tcG9uZW50KG5ldyBMb2dnZXIoKSwgbmV3IFN0YW5kYXJkQW5pbWF0b3IoKSlcclxuICAgICAgICBjb21wb25lbnQuc2V0RWxlbWVudCh0aGlzLmdldEVsZW1lbnQoZWxlbWVudCkpO1xyXG4gICAgICAgIGNvbXBvbmVudC5pbml0KCk7XHJcbiAgICAgICAgcmV0dXJuIGNvbXBvbmVudDtcclxuICAgIH1cclxuXHJcbiAgICB3aW5kb3coZWxlbWVudDogc3RyaW5nKTogSUNvbXBvbmVudCB7XHJcbiAgICAgICAgbGV0IGNvbXBvbmVudCA9IG5ldyBXaW5kb3dDb21wb25lbnQobmV3IExvZ2dlcigpLCBuZXcgU3RhbmRhcmRBbmltYXRvcigpKVxyXG4gICAgICAgIGNvbXBvbmVudC5zZXRFbGVtZW50KHRoaXMuZ2V0RWxlbWVudChlbGVtZW50KSk7XHJcbiAgICAgICAgY29tcG9uZW50LmluaXQoKTtcclxuICAgICAgICByZXR1cm4gY29tcG9uZW50O1xyXG4gICAgfVxyXG5cclxuICAgIGRyYWdnYWJsZShlbGVtZW50OiBzdHJpbmcpOiBJQ29tcG9uZW50IHtcclxuICAgICAgICBsZXQgY29tcG9uZW50ID0gbmV3IERyYWdnYWJsZUNvbXBvbmVudChuZXcgTG9nZ2VyKCksIG5ldyBTdGFuZGFyZEFuaW1hdG9yKCkpXHJcbiAgICAgICAgY29tcG9uZW50LnNldEVsZW1lbnQodGhpcy5nZXRFbGVtZW50KGVsZW1lbnQpKTtcclxuICAgICAgICBjb21wb25lbnQuaW5pdCgpO1xyXG4gICAgICAgIHJldHVybiBjb21wb25lbnQ7XHJcbiAgICB9XHJcblxyXG4gICAgaGxheW91dChlbGVtZW50OiBzdHJpbmcpOiBJQ29tcG9uZW50IHtcclxuICAgICAgICBsZXQgY29tcG9uZW50ID0gbmV3IEhvcml6b250YWxMYXlvdXRDb21wb25lbnQobmV3IExvZ2dlcigpKVxyXG4gICAgICAgIGNvbXBvbmVudC5zZXRFbGVtZW50KHRoaXMuZ2V0RWxlbWVudChlbGVtZW50KSk7XHJcbiAgICAgICAgY29tcG9uZW50LmluaXQoKTtcclxuICAgICAgICByZXR1cm4gY29tcG9uZW50O1xyXG4gICAgfVxyXG5cclxuICAgIHZsYXlvdXQoZWxlbWVudDogc3RyaW5nKTogSUNvbXBvbmVudCB7XHJcbiAgICAgICAgbGV0IGNvbXBvbmVudCA9IG5ldyBWZXJ0aWNhbExheW91dENvbXBvbmVudChuZXcgTG9nZ2VyKCkpXHJcbiAgICAgICAgY29tcG9uZW50LnNldEVsZW1lbnQodGhpcy5nZXRFbGVtZW50KGVsZW1lbnQpKTtcclxuICAgICAgICBjb21wb25lbnQuaW5pdCgpO1xyXG4gICAgICAgIHJldHVybiBjb21wb25lbnQ7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBnZXRFbGVtZW50KHF1ZXJ5OiBzdHJpbmcpOiBIVE1MRWxlbWVudCB7XHJcbiAgICAgICAgcmV0dXJuIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwocXVlcnkpWzBdIGFzIEhUTUxFbGVtZW50O1xyXG4gICAgfVxyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbXBvbmVudC9Db21wb25lbnRGYWN0b3J5LnRzIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgRWxlbWVudEhlbHBlciB7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBDaGFuZ2VzIGFuIGVsZW1lbnRzIGNsYXNzIGJ5IGFkZGluZyB0aGUgXCJhZGRDbGFzc1wiIHN0cmluZyBhbmQvb3JcclxuICAgICAqIHJlbW92aW5nIHRoZSBcInJlbW92ZUNsYXNzXCIgc3RyaW5nXHJcbiAgICAgKiBcclxuICAgICAqIEBzdGF0aWNcclxuICAgICAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGVsZW1lbnQgXHJcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gbmV3Q2xhc3MgXHJcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gb2xkQ2xhc3MgXHJcbiAgICAgKiBAbWVtYmVyb2YgRWxlbWVudEtpdFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc3RhdGljIGNoYW5nZUNsYXNzKGVsZW1lbnQ6IEhUTUxFbGVtZW50LCBhZGRDbGFzcz86IHN0cmluZywgcmVtb3ZlQ2xhc3M/OiBzdHJpbmcpOiB2b2lkIHtcclxuICAgICAgICBsZXQgY2xhc3NMaXN0ID0gZWxlbWVudC5jbGFzc05hbWUuc3BsaXQoJyAnKTtcclxuICAgICAgICAvLyBSZW1vdmUgb2xkQ2xhc3NcclxuICAgICAgICBpZihyZW1vdmVDbGFzcykge1xyXG4gICAgICAgICAgICBsZXQgb2xkSW5kZXggPSBjbGFzc0xpc3QuaW5kZXhPZihyZW1vdmVDbGFzcyk7XHJcbiAgICAgICAgICAgIGlmKG9sZEluZGV4ID49IDApIHtcclxuICAgICAgICAgICAgICAgIGNsYXNzTGlzdC5zcGxpY2Uob2xkSW5kZXgsIDEpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIEFkZCBuZXdDbGFzc1xyXG4gICAgICAgIGlmKGFkZENsYXNzKSB7XHJcbiAgICAgICAgICAgIGxldCBuZXdJbmRleCA9IGNsYXNzTGlzdC5pbmRleE9mKGFkZENsYXNzKTtcclxuICAgICAgICAgICAgaWYobmV3SW5kZXggPCAwKSB7XHJcbiAgICAgICAgICAgICAgICBjbGFzc0xpc3QucHVzaChhZGRDbGFzcyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgZWxlbWVudC5jbGFzc05hbWUgPSBjbGFzc0xpc3Quam9pbignICcpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgc2V0R3VpZElkKGVsZW1lbnQ6IEhUTUxFbGVtZW50KSB7XHJcbiAgICAgICAgdmFyIHVuaXF1ZUlkID0gJ29rLWd1aWQtJyArIE1hdGgucmFuZG9tKCkudG9TdHJpbmcoMzYpLnN1YnN0cmluZygyKSArIChuZXcgRGF0ZSgpKS5nZXRUaW1lKCkudG9TdHJpbmcoMzYpO1xyXG4gICAgICAgIGVsZW1lbnQuaWQgPSB1bmlxdWVJZDtcclxuICAgIH1cclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy91dGlsL0VsZW1lbnRIZWxwZXIudHMiLCJleHBvcnQgaW50ZXJmYWNlIElMb2dnZXIge1xyXG4gICAgbG9nKG1lc3NhZ2U6c3RyaW5nKTtcclxuICAgIHdhcm4obWVzc2FnZTpzdHJpbmcpO1xyXG4gICAgaW5mbyhtZXNzYWdlOnN0cmluZyk7XHJcbiAgICBlcnJvcihtZXNzYWdlOnN0cmluZyk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIExvZ2dlciBpbXBsZW1lbnRzIElMb2dnZXIge1xyXG4gICAgcHJpdmF0ZSBfZGVidWc6IGJvb2xlYW47XHJcbiAgICBwcml2YXRlIF9jID0ge1xyXG4gICAgICAgIHdhcm46IChtOiBzdHJpbmcpID0+IHt9LFxyXG4gICAgICAgIGVycm9yOiAobTogc3RyaW5nKSA9PiB7fSxcclxuICAgICAgICBpbmZvOiAobTogc3RyaW5nKSA9PiB7fSxcclxuICAgICAgICBsb2c6IChtOiBzdHJpbmcpID0+IHt9XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKGRlYnVnOiBib29sZWFuID0gZmFsc2UpIHtcclxuICAgICAgICBpZiAodHlwZW9mIHdpbmRvd1snY29uc29sZSddID09PSAnb2JqZWN0JyAmJiBkZWJ1ZylcclxuICAgICAgICAgICAgdGhpcy5fYyA9IHdpbmRvdy5jb25zb2xlO1xyXG4gICAgICAgIHRoaXMuX2RlYnVnID0gZGVidWc7XHJcbiAgICB9XHJcblxyXG4gICAgbG9nKG1lc3NhZ2U6IHN0cmluZykge1xyXG4gICAgICAgIGlmICh0aGlzLl9kZWJ1ZyAmJiB0eXBlb2YgdGhpcy5fYy5sb2cgPT09ICdmdW5jdGlvbicpXHJcbiAgICAgICAgICAgIHRoaXMuX2MubG9nKG1lc3NhZ2UpO1xyXG4gICAgfVxyXG5cclxuICAgIHdhcm4obWVzc2FnZTogc3RyaW5nKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuX2RlYnVnICYmIHR5cGVvZiB0aGlzLl9jLndhcm4gPT09ICdmdW5jdGlvbicpXHJcbiAgICAgICAgICAgIHRoaXMuX2Mud2FybihtZXNzYWdlKTtcclxuICAgIH1cclxuXHJcbiAgICBpbmZvKG1lc3NhZ2U6IHN0cmluZykge1xyXG4gICAgICAgIGlmICh0aGlzLl9kZWJ1ZyAmJiB0eXBlb2YgdGhpcy5fYy5pbmZvID09PSAnZnVuY3Rpb24nKVxyXG4gICAgICAgICAgICB0aGlzLl9jLmluZm8obWVzc2FnZSk7XHJcbiAgICB9XHJcblxyXG4gICAgZXJyb3IobWVzc2FnZTogc3RyaW5nKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuX2RlYnVnICYmIHR5cGVvZiB0aGlzLl9jLmVycm9yID09PSAnZnVuY3Rpb24nKVxyXG4gICAgICAgICAgICB0aGlzLl9jLmVycm9yKG1lc3NhZ2UpO1xyXG4gICAgfVxyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3V0aWwvTG9nZ2VyLnRzIiwiaW1wb3J0IHsgU3RhdGUgfSBmcm9tICcuLi9zdGF0ZS9TdGF0ZSc7XHJcbmltcG9ydCB7IElMb2dnZXIgfSBmcm9tIFwiLi4vdXRpbC9Mb2dnZXJcIjtcclxuaW1wb3J0IHsgSUFuaW1hdG9yIH0gZnJvbSBcIi4uL2FuaW1hdG9yL0FuaW1hdG9yc1wiO1xyXG5pbXBvcnQgeyBDb21wb3NpdGUgfSBmcm9tIFwiLi9Db21wb3NpdGVcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBEcmF3ZXJDb21wb25lbnQgZXh0ZW5kcyBDb21wb3NpdGUge1xyXG5cclxuICAgIHByaXZhdGUgX2RvY2s6IHN0cmluZztcclxuICAgIHByaXZhdGUgX21heFNpemU6IG51bWJlcjtcclxuICAgIHByaXZhdGUgX21pblNpemU6IG51bWJlcjtcclxuICAgIHByaXZhdGUgX2lzT3BlbjogYm9vbGVhbjtcclxuICAgIHByaXZhdGUgX2RvY2tQb3NpdGlvbnM6IHN0cmluZ1tdID0gWydsZWZ0JywgJ3JpZ2h0JywgJ3RvcCcsICdib3R0b20nXTtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihsb2dnZXI6IElMb2dnZXIsIGFuaW1hdG9yPzogSUFuaW1hdG9yKSB7XHJcbiAgICAgICAgc3VwZXIobG9nZ2VyLCBhbmltYXRvcik7XHJcblxyXG4gICAgICAgIC8vIFNldHVwIGRlZmF1bHRzXHJcbiAgICAgICAgdGhpcy5fZG9jayA9ICdsZWZ0JztcclxuICAgICAgICB0aGlzLl9taW5TaXplID0gMDtcclxuICAgICAgICB0aGlzLl9tYXhTaXplID0gMjgwO1xyXG4gICAgICAgIHRoaXMuX2lzT3BlbiA9IGZhbHNlO1xyXG5cclxuICAgICAgICAvLyBSZWxheSBldmVudHNcclxuICAgICAgICB0aGlzLnJlZ2lzdGVyRXZlbnQoJ29uJywgKCkgPT4geyByZXR1cm4gdGhpcy5vbigpIH0pO1xyXG4gICAgICAgIHRoaXMucmVnaXN0ZXJFdmVudCgnb2ZmJywgKCkgPT4geyByZXR1cm4gdGhpcy5vZmYoKSB9KTtcclxuICAgICAgICB0aGlzLnJlZ2lzdGVyRXZlbnQoJ3RvZ2dsZScsICgpID0+IHsgcmV0dXJuIHRoaXMudG9nZ2xlKCkgfSk7XHJcbiAgICAgICAgdGhpcy5yZWdpc3RlckV2ZW50KCdpbml0JywgKCkgPT4geyByZXR1cm4gdGhpcy5pbml0KCkgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBDaGFuZ2UgdGhlIGRvY2sgcG9zaXRpb24gb2YgdGhlIGRyYXdlci4gIENhbGxpbmcgdGhpcyBmdW5jdGlvbiByZXNldHMgdGhlXHJcbiAgICAgKiBzdGF0ZSBhbmQgcmVwb3NpdGlvbnMgdGhlIGRyYXdlciBpbnN0YW50bHkuXHJcbiAgICAgKiBcclxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBkb2NrIFxyXG4gICAgICogQHJldHVybnMge3RoaXN9IFxyXG4gICAgICogQG1lbWJlcm9mIERyYXdlckNvbXBvbmVudFxyXG4gICAgICovXHJcbiAgICBkb2NrKGRvY2s6IHN0cmluZyk6IFByb21pc2U8U3RhdGU+IHtcclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5fZG9ja1Bvc2l0aW9ucy5pbmRleE9mKGRvY2spIDwgMCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fbG9nZ2VyLmVycm9yKGBcIiR7ZG9ja31cIiBpcyBub3QgYSB2YWxpZCBkb2NrIHBvc2l0aW9uLiAgVmFsaWQgcG9zaXRpb25zIGFyZSAke3RoaXMuX2RvY2tQb3NpdGlvbnMuam9pbignLCAnKX1gKTtcclxuICAgICAgICAgICAgICAgIHJlamVjdCgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnJlbGF5KCdvZmYnKS50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuX2RvY2sgPSBkb2NrO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fc3RhdGUgPSBudWxsO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuaW5pdCgpO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgbWluU2l6ZShuOiBudW1iZXIpOiB0aGlzIHtcclxuICAgICAgICBpZiAobiA8IDApIHtcclxuICAgICAgICAgICAgdGhpcy5fbG9nZ2VyLmVycm9yKGBtaW5TaXplIG51bWJlciBtdXN0IGJlIGdyZWF0ZXIgdGhhbiBvciBlcXVhbCB0byB6ZXJvLmApO1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcztcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5fbWluU2l6ZSA9IG47XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgbWF4U2l6ZShuOiBudW1iZXIpOiB0aGlzIHtcclxuICAgICAgICBpZiAobiA8IDApIHtcclxuICAgICAgICAgICAgdGhpcy5fbG9nZ2VyLmVycm9yKGBtYXhTaXplIG51bWJlciBtdXN0IGJlIGdyZWF0ZXIgdGhhbiBvciBlcXVhbCB0byB6ZXJvLmApO1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcztcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5fbWF4U2l6ZSA9IG47XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBTZXRzIHRoZSBpbml0aWFsIHN0YXRlXHJcbiAgICAgKiBAcmV0dXJucyB7UHJvbWlzZTxTdGF0ZT59IFxyXG4gICAgICovXHJcbiAgICBpbml0KCk6IFByb21pc2U8U3RhdGU+IHtcclxuICAgICAgICBsZXQgc3RhdGUgPSBuZXcgU3RhdGUoKTtcclxuICAgICAgICBzdGF0ZS5va0NsYXNzTmFtZSA9ICdvay1kcmF3ZXInO1xyXG4gICAgICAgIHN0YXRlLnN0eWxlLnBvc2l0aW9uID0gJ2ZpeGVkJztcclxuICAgICAgICBzdGF0ZS5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcclxuICAgICAgICBzdGF0ZS5zdHlsZS56SW5kZXggPSAnMTAwMDAnXHJcblxyXG4gICAgICAgIGlmICh0aGlzLmlzTGVmdCgpKSB7XHJcbiAgICAgICAgICAgIHN0YXRlLnN0eWxlLndpZHRoID0gYCR7dGhpcy5fbWF4U2l6ZX1weGA7XHJcbiAgICAgICAgICAgIHN0YXRlLnN0eWxlLmhlaWdodCA9IGAke3RoaXMuZ2V0RWxlbWVudCgpLnBhcmVudEVsZW1lbnQub2Zmc2V0SGVpZ2h0fXB4YDtcclxuICAgICAgICAgICAgc3RhdGUuc3R5bGUubGVmdCA9IGAtJHt0aGlzLl9tYXhTaXplfXB4YDtcclxuICAgICAgICAgICAgc3RhdGUuc3R5bGUudG9wID0gJzAnO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5pc1JpZ2h0KCkpIHtcclxuICAgICAgICAgICAgc3RhdGUuc3R5bGUud2lkdGggPSBgJHt0aGlzLl9tYXhTaXplfXB4YDtcclxuICAgICAgICAgICAgc3RhdGUuc3R5bGUuaGVpZ2h0ID0gYCR7dGhpcy5nZXRFbGVtZW50KCkucGFyZW50RWxlbWVudC5vZmZzZXRIZWlnaHR9cHhgO1xyXG4gICAgICAgICAgICBzdGF0ZS5zdHlsZS5yaWdodCA9IGAtJHt0aGlzLl9tYXhTaXplfXB4YDtcclxuICAgICAgICAgICAgc3RhdGUuc3R5bGUudG9wID0gJzAnO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5pc1RvcCgpKSB7XHJcbiAgICAgICAgICAgIHN0YXRlLnN0eWxlLndpZHRoID0gYCR7dGhpcy5nZXRFbGVtZW50KCkucGFyZW50RWxlbWVudC5vZmZzZXRXaWR0aH1weGA7XHJcbiAgICAgICAgICAgIHN0YXRlLnN0eWxlLmhlaWdodCA9IGAke3RoaXMuX21heFNpemV9cHhgO1xyXG4gICAgICAgICAgICBzdGF0ZS5zdHlsZS50b3AgPSBgLSR7dGhpcy5fbWF4U2l6ZX1weGA7XHJcbiAgICAgICAgICAgIHN0YXRlLnN0eWxlLmxlZnQgPSAnMCc7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLmlzQm90dG9tKCkpIHtcclxuICAgICAgICAgICAgc3RhdGUuc3R5bGUud2lkdGggPSBgJHt0aGlzLmdldEVsZW1lbnQoKS5wYXJlbnRFbGVtZW50Lm9mZnNldFdpZHRofXB4YDtcclxuICAgICAgICAgICAgc3RhdGUuc3R5bGUuaGVpZ2h0ID0gYCR7dGhpcy5fbWF4U2l6ZX1weGA7XHJcbiAgICAgICAgICAgIHN0YXRlLnN0eWxlLmJvdHRvbSA9IGAtJHt0aGlzLl9tYXhTaXplfXB4YDtcclxuICAgICAgICAgICAgc3RhdGUuc3R5bGUubGVmdCA9ICcwJztcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRoaXMucmVuZGVyKHN0YXRlKTtcclxuICAgIH1cclxuXHJcbiAgICB0b2dnbGUoKTogUHJvbWlzZTxTdGF0ZT4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9pc09wZW4gPyB0aGlzLm9mZigpIDogdGhpcy5vbigpO1xyXG4gICAgfVxyXG5cclxuICAgIG9uKCk6IFByb21pc2U8U3RhdGU+IHtcclxuICAgICAgICBpZiAodGhpcy5faXNPcGVuKVxyXG4gICAgICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmVzb2x2ZSh0aGlzLl9zdGF0ZSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMuX2lzT3BlbiA9IHRydWU7XHJcblxyXG4gICAgICAgIGxldCBzdGF0ZSA9IG5ldyBTdGF0ZSgpO1xyXG4gICAgICAgIGlmICh0aGlzLmlzTGVmdCgpKSB7XHJcbiAgICAgICAgICAgIHN0YXRlLnN0eWxlLmxlZnQgPSAnMCc7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLmlzUmlnaHQoKSkge1xyXG4gICAgICAgICAgICBzdGF0ZS5zdHlsZS5yaWdodCA9ICcwJztcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMuaXNUb3AoKSkge1xyXG4gICAgICAgICAgICBzdGF0ZS5zdHlsZS50b3AgPSAnMCc7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLmlzQm90dG9tKCkpIHtcclxuICAgICAgICAgICAgc3RhdGUuc3R5bGUuYm90dG9tID0gJzAnXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHN0YXRlLnN0YXRlQ2xhc3NOYW1lID0gJ29rLW9uJztcclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXMucmVuZGVyKHN0YXRlKTtcclxuICAgIH1cclxuXHJcbiAgICBvZmYoKTogUHJvbWlzZTxTdGF0ZT4ge1xyXG4gICAgICAgIGlmICghdGhpcy5faXNPcGVuKVxyXG4gICAgICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmVzb2x2ZSh0aGlzLl9zdGF0ZSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMuX2lzT3BlbiA9IGZhbHNlO1xyXG5cclxuICAgICAgICBsZXQgc3RhdGUgPSBuZXcgU3RhdGUoKTtcclxuICAgICAgICBpZiAodGhpcy5pc0xlZnQoKSkge1xyXG4gICAgICAgICAgICBzdGF0ZS5zdHlsZS5sZWZ0ID0gYC0ke3RoaXMuX21heFNpemV9cHhgO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5pc1JpZ2h0KCkpIHtcclxuICAgICAgICAgICAgc3RhdGUuc3R5bGUucmlnaHQgPSBgLSR7dGhpcy5fbWF4U2l6ZX1weGA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLmlzVG9wKCkpIHtcclxuICAgICAgICAgICAgc3RhdGUuc3R5bGUudG9wID0gYC0ke3RoaXMuX21heFNpemV9cHhgO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5pc0JvdHRvbSgpKSB7XHJcbiAgICAgICAgICAgIHN0YXRlLnN0eWxlLmJvdHRvbSA9IGAtJHt0aGlzLl9tYXhTaXplfXB4YDtcclxuICAgICAgICB9XHJcbiAgICAgICAgc3RhdGUuc3RhdGVDbGFzc05hbWUgPSAnb2stb2ZmJztcclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXMucmVuZGVyKHN0YXRlKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGlzTGVmdCgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZG9jayA9PT0gJ2xlZnQnO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgaXNSaWdodCgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZG9jayA9PT0gJ3JpZ2h0JztcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGlzVG9wKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9kb2NrID09PSAndG9wJztcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGlzQm90dG9tKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9kb2NrID09PSAnYm90dG9tJztcclxuICAgIH1cclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21wb25lbnQvRHJhd2VyQ29tcG9uZW50LnRzIiwiaW1wb3J0IHsgSUFuaW1hdG9yIH0gZnJvbSAnLi9BbmltYXRvcnMnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU3RhbmRhcmRBbmltYXRvciBpbXBsZW1lbnRzIElBbmltYXRvciB7XHJcblxyXG4gICAgcHVibGljIHN0YXJ0OiBudW1iZXI7XHJcbiAgICBwcml2YXRlIF9kdXJhdGlvbjogbnVtYmVyO1xyXG4gICAgcHJpdmF0ZSBfc3RlcDogRnVuY3Rpb247XHJcbiAgICBwcml2YXRlIF9pbnRlcnZhbDogbnVtYmVyO1xyXG4gICAgcHJpdmF0ZSBfcmF0ZTogbnVtYmVyO1xyXG5cclxuICAgIHB1YmxpYyBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLl9kdXJhdGlvbiA9IDIwMDtcclxuICAgICAgICB0aGlzLl9zdGVwID0gKCkgPT4geyB9O1xyXG4gICAgICAgIHRoaXMuX3JhdGUgPSAxNjtcclxuICAgIH1cclxuXHJcbiAgICBzZXRTdGVwKHN0ZXA6IEZ1bmN0aW9uKTogdGhpcyB7XHJcbiAgICAgICAgdGhpcy5fc3RlcCA9IHN0ZXA7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0RHVyYXRpb24oZHVyYXRpb246IG51bWJlcik6IHRoaXMge1xyXG4gICAgICAgIHRoaXMuX2R1cmF0aW9uID0gZHVyYXRpb247XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0UmF0ZShyYXRlOiBudW1iZXIpOiB0aGlzIHtcclxuICAgICAgICB0aGlzLl9yYXRlID0gcmF0ZTtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEFuaW1hdGUgY2FsbGluZyBhIHN0ZXAgZnVuY3Rpb24gb3ZlciBkdXJhdGlvbi4gU3RlcCBpcyBjYWxsZWQgd2l0aCBkZWx0YVxyXG4gICAgICogdGltZSBzbyB0aGF0IGFuaW1hdGlvbnMgY29tcGxldGUgd2l0aGluIHRoZSBkdXJhdGlvbi5cclxuICAgICAqIEBwYXJhbSBzdGFydCBkYXRlXHJcbiAgICAgKi9cclxuICAgIGFuaW1hdGUoc3RhcnQ/OiBudW1iZXIsIC4uLmFyZ3MgOiBhbnlbXSk6IFByb21pc2U8Ym9vbGVhbj4ge1xyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLl9pbnRlcnZhbCA9IHdpbmRvdy5zZXRJbnRlcnZhbCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBsZXQgZGVsdGFUaW1lID0gRGF0ZS5ub3coKTtcclxuICAgICAgICAgICAgICAgIGxldCB0aW1lUGFzc2VkID0gZGVsdGFUaW1lIC0gc3RhcnQ7XHJcbiAgICAgICAgICAgICAgICBsZXQgcHJvZ3Jlc3MgPSB0aW1lUGFzc2VkIC8gdGhpcy5fZHVyYXRpb247XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKHByb2dyZXNzID4gMSkgcHJvZ3Jlc3MgPSAxXHJcblxyXG4gICAgICAgICAgICAgICAgdmFyIGRlbHRhID0gcHJvZ3Jlc3M7XHJcblxyXG4gICAgICAgICAgICAgICAgdGhpcy5fc3RlcChkZWx0YSwgYXJncyk7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKHByb2dyZXNzID09IDEpIHtcclxuICAgICAgICAgICAgICAgICAgICBjbGVhckludGVydmFsKHRoaXMuX2ludGVydmFsKTtcclxuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHRydWUpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LCB0aGlzLl9yYXRlKVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvYW5pbWF0b3IvU3RhbmRhcmRBbmltYXRvci50cyIsImltcG9ydCB7IENvbXBvc2l0ZSB9IGZyb20gXCIuL0NvbXBvc2l0ZVwiO1xyXG5pbXBvcnQgeyBJTG9nZ2VyIH0gZnJvbSBcIi4uL3V0aWwvTG9nZ2VyXCI7XHJcbmltcG9ydCB7IElBbmltYXRvciB9IGZyb20gXCIuLi9hbmltYXRvci9BbmltYXRvcnNcIjtcclxuaW1wb3J0IHsgU3RhdGUgfSBmcm9tIFwiLi4vc3RhdGUvU3RhdGVcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBEcmFnZ2FibGVDb21wb25lbnQgZXh0ZW5kcyBDb21wb3NpdGUge1xyXG5cclxuICAgIHByaXZhdGUgX2RyYWdSb290OiBib29sZWFuO1xyXG4gICAgcHJpdmF0ZSBfeDogbnVtYmVyO1xyXG4gICAgcHJpdmF0ZSBfeTogbnVtYmVyO1xyXG4gICAgcHJpdmF0ZSBfdG9wOiBudW1iZXI7XHJcbiAgICBwcml2YXRlIF9sZWZ0OiBudW1iZXI7XHJcbiAgICBwcml2YXRlIF9wYXJlbnRUb3A6IG51bWJlcjtcclxuICAgIHByaXZhdGUgX3BhcmVudExlZnQ6IG51bWJlcjtcclxuICAgIHByaXZhdGUgX2RpZmZYOiBudW1iZXI7XHJcbiAgICBwcml2YXRlIF9kaWZmWTogbnVtYmVyO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKGxvZ2dlcjogSUxvZ2dlciwgYW5pbWF0b3I/OiBJQW5pbWF0b3IpIHtcclxuICAgICAgICBzdXBlcihsb2dnZXIsIGFuaW1hdG9yKTtcclxuXHJcbiAgICAgICAgLy8gU2V0dXAgZGVmYXVsdHNcclxuICAgICAgICB0aGlzLl9kcmFnUm9vdCA9IGZhbHNlO1xyXG5cclxuICAgICAgICAvLyBSZWxheSBldmVudHNcclxuICAgICAgICB0aGlzLnJlZ2lzdGVyRXZlbnQoJ2luaXQnLCAoKSA9PiB7IHJldHVybiB0aGlzLmluaXQoKSB9KTtcclxuICAgIH1cclxuXHJcbiAgICBkcmFnUm9vdChmbGFnOiBib29sZWFuKTogdGhpcyB7XHJcbiAgICAgICAgdGhpcy5fZHJhZ1Jvb3QgPSBmbGFnO1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG5cclxuICAgIGluaXQoKTogUHJvbWlzZTxTdGF0ZT4ge1xyXG4gICAgICAgIGxldCBzdGF0ZSA9IG5ldyBTdGF0ZSgpO1xyXG4gICAgICAgIHN0YXRlLm9rQ2xhc3NOYW1lID0gJ29rLWRyYWdnYWJsZSc7XHJcblxyXG4gICAgICAgIHRoaXMuZ2V0RWxlbWVudCgpLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIHRoaXMuc3RhcnREcmFnKTtcclxuICAgICAgICB0aGlzLmdldEVsZW1lbnQoKS5hZGRFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgKCkgPT4ge1xyXG4gICAgICAgICAgICBkb2N1bWVudC5vbm1vdXNlbW92ZSA9ICgpID0+IHt9O1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHJldHVybiB0aGlzLnJlbmRlcihzdGF0ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhcnREcmFnID0gKGV2ZW50OiBNb3VzZUV2ZW50KSA9PiB7XHJcbiAgICAgICAgbGV0IGRlID0gdGhpcy5nZXRFbGVtZW50KCk7XHJcbiAgICAgICAgaWYgKHRoaXMuX2RyYWdSb290KSB7XHJcbiAgICAgICAgICAgIGRlID0gdGhpcy5nZXRSb290KCkuZ2V0RWxlbWVudCgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQgcGFyZW50ID0gZGUucGFyZW50RWxlbWVudDtcclxuXHJcbiAgICAgICAgbGV0IHggPSBldmVudC5jbGllbnRYLFxyXG4gICAgICAgICAgICB5ID0gZXZlbnQuY2xpZW50WSxcclxuICAgICAgICAgICAgdG9wID0gZGUub2Zmc2V0VG9wLFxyXG4gICAgICAgICAgICBsZWZ0ID0gZGUub2Zmc2V0TGVmdCxcclxuICAgICAgICAgICAgZGVXaWR0aCA9IGRlLm9mZnNldFdpZHRoLFxyXG4gICAgICAgICAgICBkZUhlaWdodCA9IGRlLm9mZnNldEhlaWdodCxcclxuICAgICAgICAgICAgcGFyZW50VG9wID0gcGFyZW50Lm9mZnNldFRvcCxcclxuICAgICAgICAgICAgcGFyZW50TGVmdCA9IHBhcmVudC5vZmZzZXRMZWZ0LFxyXG4gICAgICAgICAgICBwYXJlbnRXaWR0aCA9IHBhcmVudC5vZmZzZXRXaWR0aCxcclxuICAgICAgICAgICAgcGFyZW50SGVpZ2h0ID1wYXJlbnQub2Zmc2V0SGVpZ2h0LFxyXG4gICAgICAgICAgICBkaWZmWCA9IHggLSBsZWZ0LFxyXG4gICAgICAgICAgICBkaWZmWSA9IHkgLSB0b3A7XHJcblxyXG4gICAgICAgIGRvY3VtZW50Lm9ubW91c2Vtb3ZlID0gKGV2ZW50OiBNb3VzZUV2ZW50KSA9PiB7XHJcbiAgICAgICAgICAgIGxldCB4ID0gZXZlbnQuY2xpZW50WCxcclxuICAgICAgICAgICAgICAgIHkgPSBldmVudC5jbGllbnRZLFxyXG4gICAgICAgICAgICAgICAgYVggPSB4IC0gZGlmZlgsXHJcbiAgICAgICAgICAgICAgICBhWSA9IHkgLSBkaWZmWTtcclxuICAgICAgICAgICAgaWYgKGFYIDwgMCkgYVggPSAwO1xyXG4gICAgICAgICAgICBpZiAoYVkgPCAwKSBhWSA9IDA7XHJcbiAgICAgICAgICAgIGlmIChhWCArIGRlV2lkdGggPiBwYXJlbnRXaWR0aCkgYVggPSBwYXJlbnRXaWR0aCAtIGRlV2lkdGg7XHJcbiAgICAgICAgICAgIGlmIChhWSArIGRlSGVpZ2h0ID4gcGFyZW50SGVpZ2h0KSBhWSA9IHBhcmVudEhlaWdodCAtIGRlSGVpZ2h0O1xyXG5cclxuICAgICAgICAgICAgdGhpcy5tb3ZlKGRlLCBhWCwgYVkpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBtb3ZlKGVsZW1lbnQ6IEhUTUxFbGVtZW50LCB4OiBudW1iZXIsIHk6IG51bWJlcikgeyBcclxuICAgICAgICBlbGVtZW50LnN0eWxlLmxlZnQgPSBgJHt4fXB4YDtcclxuICAgICAgICBlbGVtZW50LnN0eWxlLnRvcCA9IGAke3l9cHhgO1xyXG4gICAgfVxyXG5cclxuICAgIHN0b3BEcmFnKCkgeyB9XHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tcG9uZW50L0RyYWdnYWJsZUNvbXBvbmVudC50cyIsImltcG9ydCB7IENvbXBvc2l0ZSB9IGZyb20gXCIuL0NvbXBvc2l0ZVwiO1xyXG5pbXBvcnQgeyBJTG9nZ2VyIH0gZnJvbSBcIi4uL3V0aWwvTG9nZ2VyXCI7XHJcbmltcG9ydCBMb2dnZXIgZnJvbSBcIi4uL3V0aWwvTG9nZ2VyXCI7XHJcbmltcG9ydCB7IElBbmltYXRvciB9IGZyb20gXCIuLi9hbmltYXRvci9BbmltYXRvcnNcIjtcclxuaW1wb3J0IHsgSUNvbXBvbmVudCwgQ29tcG9uZW50IH0gZnJvbSBcIi4vQ29tcG9uZW50XCI7XHJcbmltcG9ydCB7IENvbXBvbmVudEZhY3RvcnkgfSBmcm9tIFwiLi9Db21wb25lbnRGYWN0b3J5XCI7XHJcbmltcG9ydCBFbGVtZW50SGVscGVyIGZyb20gXCIuLi91dGlsL0VsZW1lbnRIZWxwZXJcIjtcclxuaW1wb3J0IHsgU3RhdGUgfSBmcm9tIFwiLi4vc3RhdGUvU3RhdGVcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBIb3Jpem9udGFsTGF5b3V0Q29tcG9uZW50IGV4dGVuZHMgQ29tcG9zaXRlIHtcclxuXHJcbiAgICBwcml2YXRlIGZpeGVkQ2hpbGRyZW46IEFycmF5PElDb21wb25lbnQ+O1xyXG4gICAgcHJpdmF0ZSBwZXJjdENoaWxkcmVuOiBBcnJheTxJQ29tcG9uZW50PjtcclxuICAgIHByaXZhdGUgZmx1aWRDaGlsZHJlbjogQXJyYXk8SUNvbXBvbmVudD47XHJcblxyXG4gICAgY29uc3RydWN0b3IobG9nZ2VyOiBJTG9nZ2VyLCBhbmltYXRvcj86IElBbmltYXRvcikge1xyXG4gICAgICAgIHN1cGVyKGxvZ2dlciwgYW5pbWF0b3IpO1xyXG5cclxuICAgICAgICB0aGlzLmZpeGVkQ2hpbGRyZW4gPSBuZXcgQXJyYXk8SUNvbXBvbmVudD4oKTtcclxuICAgICAgICB0aGlzLnBlcmN0Q2hpbGRyZW4gPSBuZXcgQXJyYXk8SUNvbXBvbmVudD4oKTtcclxuICAgICAgICB0aGlzLmZsdWlkQ2hpbGRyZW4gPSBuZXcgQXJyYXk8SUNvbXBvbmVudD4oKTtcclxuXHJcbiAgICAgICAgdGhpcy5yZWdpc3RlckV2ZW50KCdpbml0JywgKCkgPT4geyByZXR1cm4gdGhpcy5pbml0KCkgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgaW5pdCgpIHtcclxuICAgICAgICAvLyBGb3IgZWFjaCBjaGlsZCBlbGVtZW50IGluIGVsZW1lbnRzLCBzZXQgdXAgYSBuZXcgQ29tcG9uZW50IGZpZ3VyZSBcclxuICAgICAgICAvLyBvdXQgaWYgaXQgaGFzIGEgd2lkdGggc2V0IGFzIGEgcGl4ZWwgdmFsdWUgKGZpeGVkIGNoaWxkKSwgYSAxMDAlXHJcbiAgICAgICAgLy8gdmFsdWUgKGZsdWlkIGNoaWxkKSwgb3IgYSB2YWx1ZSBzZXQgdG8gYSBzcGVjaWZpYyBwZXJjZW50YWdlIFxyXG4gICAgICAgIC8vIChwZXJjZW50YWdlIGNoaWxkKVxyXG4gICAgICAgIGxldCBlbCA9IHRoaXMuZ2V0RWxlbWVudCgpO1xyXG4gICAgICAgIGxldCBmYWN0b3J5ID0gbmV3IENvbXBvbmVudEZhY3RvcnkoKTtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGVsLmNoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGxldCBjaGlsZCA9IGVsLmNoaWxkcmVuW2ldIGFzIEhUTUxFbGVtZW50O1xyXG4gICAgICAgICAgICBpZiAoIWNoaWxkLmlkKVxyXG4gICAgICAgICAgICAgICAgRWxlbWVudEhlbHBlci5zZXRHdWlkSWQoY2hpbGQpO1xyXG4gICAgICAgICAgICBsZXQgY2hpbGRDb21wb25lbnQgPSBuZXcgQ29tcG9uZW50KG5ldyBMb2dnZXIoKSk7XHJcbiAgICAgICAgICAgIGNoaWxkQ29tcG9uZW50LnNldEVsZW1lbnQoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoY2hpbGQuaWQpKTtcclxuICAgICAgICAgICAgbGV0IHNpemUgPSBjaGlsZC5nZXRBdHRyaWJ1dGUoJ2RhdGEtc2l6ZScpIHx8ICcxMDAlJztcclxuICAgICAgICAgICAgaWYgKHNpemUgPT09ICcxMDAlJykge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5mbHVpZENoaWxkcmVuLnB1c2goY2hpbGRDb21wb25lbnQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2UgaWYgKHNpemUubWF0Y2goL15bXFxkXSslJC8pKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnBlcmN0Q2hpbGRyZW4ucHVzaChjaGlsZENvbXBvbmVudCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmZpeGVkQ2hpbGRyZW4ucHVzaChjaGlsZENvbXBvbmVudCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY2hpbGRDb21wb25lbnQucmVuZGVyKHsgc3R5bGU6IHsgaGVpZ2h0OiAnMTAwJScsIHdpZHRoOiBzaXplLCBmbG9hdDogJ2xlZnQnIH0gfSlcclxuICAgICAgICAgICAgdGhpcy5hZGRDaGlsZChjaGlsZENvbXBvbmVudCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigncmVzaXplJywgdGhpcy5yZXNpemUuYmluZCh0aGlzKSk7XHJcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHRoaXMucmVzaXplLmJpbmQodGhpcykpO1xyXG5cclxuICAgICAgICBsZXQgc3RhdGUgPSBuZXcgU3RhdGUoKTtcclxuICAgICAgICBzdGF0ZS5zdHlsZS5oZWlnaHQgPSB0aGlzLmdldEVsZW1lbnQoKS5wYXJlbnRFbGVtZW50Lm9mZnNldEhlaWdodCArICdweCc7XHJcbiAgICAgICAgc3RhdGUuc3R5bGUud2lkdGggPSB0aGlzLmdldEVsZW1lbnQoKS5wYXJlbnRFbGVtZW50Lm9mZnNldFdpZHRoICsgJ3B4JztcclxuICAgICAgICBzdGF0ZS5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xyXG4gICAgICAgIHJldHVybiB0aGlzLnJlbmRlcihzdGF0ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVzaXplKCkge1xyXG4gICAgICAgIGxldCBzdGF0ZSA9IG5ldyBTdGF0ZSgpO1xyXG4gICAgICAgIHN0YXRlLnN0eWxlLmhlaWdodCA9IHRoaXMuZ2V0RWxlbWVudCgpLnBhcmVudEVsZW1lbnQub2Zmc2V0SGVpZ2h0ICsgJ3B4JztcclxuICAgICAgICBzdGF0ZS5zdHlsZS53aWR0aCA9IHRoaXMuZ2V0RWxlbWVudCgpLnBhcmVudEVsZW1lbnQub2Zmc2V0V2lkdGggKyAncHgnO1xyXG4gICAgICAgIHJldHVybiB0aGlzLnJlbmRlcihzdGF0ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKG5ld1N0YXRlOiBTdGF0ZSkge1xyXG4gICAgICAgIGxldCBwcm9taXNlcyA9IFtdO1xyXG4gICAgICAgIHByb21pc2VzLnB1c2goc3VwZXIucmVuZGVyKG5ld1N0YXRlKSk7XHJcblxyXG4gICAgICAgIHZhciB0b3RhbFdpZHRoID0gdGhpcy5nZXRFbGVtZW50KCkub2Zmc2V0V2lkdGg7XHJcbiAgICAgICAgdmFyIGZsdWlkV2lkdGggPSB0b3RhbFdpZHRoO1xyXG4gICAgICAgIHZhciB0b3RhbEhlaWdodCA9IHRoaXMuZ2V0RWxlbWVudCgpLm9mZnNldEhlaWdodDtcclxuXHJcbiAgICAgICAgLy8gRHJhdyB0aGUgZml4ZWQgY2hpbGRyZW5cclxuICAgICAgICBmb3IgKGxldCBlbCBvZiB0aGlzLmZpeGVkQ2hpbGRyZW4pIHtcclxuICAgICAgICAgICAgZmx1aWRXaWR0aCAtPSBlbC5nZXRFbGVtZW50KCkub2Zmc2V0V2lkdGg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIERyYXcgdGhlIHBlcmNlbnRhZ2UgY2hpbGRyZW5cclxuICAgICAgICBmb3IgKGxldCBlbCBvZiB0aGlzLnBlcmN0Q2hpbGRyZW4pIHtcclxuICAgICAgICAgICAgbGV0IHdpZHRoID0gKHBhcnNlRmxvYXQoZWwuZ2V0RWxlbWVudCgpLmdldEF0dHJpYnV0ZSgnZGF0YS1zaXplJykpIC8gMTAwICogZmx1aWRXaWR0aCk7XHJcbiAgICAgICAgICAgIGZsdWlkV2lkdGggLT0gd2lkdGg7XHJcbiAgICAgICAgICAgIGVsLnJlbmRlcih7IHN0eWxlOiB7IHdpZHRoOiB3aWR0aCArICdweCcgfSB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gRHJhdyB0aGUgZmx1aWQgY2hpbGRyZW5cclxuICAgICAgICBmb3IgKGxldCBlbCBvZiB0aGlzLmZsdWlkQ2hpbGRyZW4pIHtcclxuICAgICAgICAgICAgdmFyIHdpZHRoID0gZmx1aWRXaWR0aCAvIHRoaXMuZmx1aWRDaGlsZHJlbi5sZW5ndGg7XHJcbiAgICAgICAgICAgIHByb21pc2VzLnB1c2goZWwucmVuZGVyKHsgc3R5bGU6IHsgd2lkdGg6IHdpZHRoICsgJ3B4JyB9IH0pKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIFByb21pc2UuYWxsKHByb21pc2VzKTtcclxuICAgIH1cclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21wb25lbnQvSG9yaXpvbnRhbExheW91dENvbXBvbmVudC50cyIsImltcG9ydCB7IFN0YXRlIH0gZnJvbSBcIi4uL3N0YXRlL1N0YXRlXCI7XHJcbmltcG9ydCB7IElMb2dnZXIgfSBmcm9tIFwiLi4vdXRpbC9Mb2dnZXJcIjtcclxuaW1wb3J0IHsgSUFuaW1hdG9yIH0gZnJvbSBcIi4uL2FuaW1hdG9yL0FuaW1hdG9yc1wiO1xyXG5pbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tIFwiLi9Db21wb25lbnRcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBPdmVybGF5Q29tcG9uZW50IGV4dGVuZHMgQ29tcG9uZW50IHtcclxuXHJcbiAgICBwcml2YXRlIF9jb2xvcjogc3RyaW5nO1xyXG4gICAgcHJpdmF0ZSBfb3BhY2l0eTogbnVtYmVyO1xyXG4gICAgcHJpdmF0ZSBfaXNPbjogYm9vbGVhbjtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihsb2dnZXI6IElMb2dnZXIsIGFuaW1hdG9yPzogSUFuaW1hdG9yKSB7XHJcbiAgICAgICAgc3VwZXIobG9nZ2VyLCBhbmltYXRvcik7XHJcblxyXG4gICAgICAgIC8vIFNldHVwIGRlZmF1bHRzXHJcbiAgICAgICAgdGhpcy5fb3BhY2l0eSA9IC44O1xyXG4gICAgICAgIHRoaXMuX2NvbG9yID0gJyMwMDAwMDAnO1xyXG4gICAgICAgIHRoaXMuX2lzT24gPSBmYWxzZTtcclxuXHJcbiAgICAgICAgLy8gUmVsYXkgZXZlbnRzXHJcbiAgICAgICAgdGhpcy5yZWdpc3RlckV2ZW50KCdvbicsICgpID0+IHsgcmV0dXJuIHRoaXMub24oKSB9KTtcclxuICAgICAgICB0aGlzLnJlZ2lzdGVyRXZlbnQoJ29mZicsICgpID0+IHsgcmV0dXJuIHRoaXMub2ZmKCkgfSk7XHJcbiAgICAgICAgdGhpcy5yZWdpc3RlckV2ZW50KCd0b2dnbGUnLCAoKSA9PiB7IHJldHVybiB0aGlzLnRvZ2dsZSgpIH0pO1xyXG4gICAgICAgIHRoaXMucmVnaXN0ZXJFdmVudCgnaW5pdCcsICgpID0+IHsgcmV0dXJuIHRoaXMuaW5pdCgpIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIG9wYWNpdHkobjogbnVtYmVyKTogdGhpcyB7XHJcbiAgICAgICAgaWYgKG4gPCAwKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2xvZ2dlci5lcnJvcihgT3BhY2l0eSBtdXN0IGJlIGdyZWF0ZXIgdGhhbiBvciBlcXVhbCB0byB6ZXJvLmApO1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcztcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKG4gPiAxKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2xvZ2dlci5lcnJvcihgT3BhY2l0eSBtdXN0IGJlIGxlc3MgdGhhbiBvciBlcXVhbCB0byBvbmUuYCk7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLl9vcGFjaXR5ID0gbjtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuXHJcbiAgICBjb2xvcihjOiBzdHJpbmcpOiB0aGlzIHtcclxuICAgICAgICB0aGlzLl9jb2xvciA9IGM7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBTZXRzIHRoZSBpbml0aWFsIHN0YXRlXHJcbiAgICAgKiBAcmV0dXJucyB7UHJvbWlzZTxTdGF0ZT59IFxyXG4gICAgICovXHJcbiAgICBpbml0KCk6IFByb21pc2U8U3RhdGU+IHtcclxuICAgICAgICBsZXQgc3RhdGUgPSBuZXcgU3RhdGUoKTtcclxuICAgICAgICBzdGF0ZS5va0NsYXNzTmFtZSA9ICdvay1vdmVybGF5JztcclxuICAgICAgICBzdGF0ZS5zdHlsZS5oZWlnaHQgPSBcIjEwMCVcIjtcclxuICAgICAgICBzdGF0ZS5zdHlsZS53aWR0aCA9IFwiMTAwJVwiO1xyXG4gICAgICAgIHN0YXRlLnN0eWxlLnBvc2l0aW9uID0gXCJmaXhlZFwiO1xyXG4gICAgICAgIHN0YXRlLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IHRoaXMuX2NvbG9yO1xyXG4gICAgICAgIHN0YXRlLnN0eWxlLm9wYWNpdHkgPSAnMCc7XHJcbiAgICAgICAgc3RhdGUuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgICAgICBzdGF0ZS5zdHlsZS50b3AgPSAnMCc7XHJcbiAgICAgICAgc3RhdGUuc3R5bGUubGVmdCA9ICcwJztcclxuXHJcbiAgICAgICAgaWYgKHRoaXMuZ2V0RWxlbWVudCgpKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZ2V0RWxlbWVudCgpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5jbGlja0V2ZW50KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzLnJlbmRlcihzdGF0ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgdG9nZ2xlKCk6IFByb21pc2U8U3RhdGU+IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5faXNPbiA/IHRoaXMub2ZmKCkgOiB0aGlzLm9uKCk7XHJcbiAgICB9XHJcblxyXG4gICAgb24oKTogUHJvbWlzZTxTdGF0ZT4ge1xyXG4gICAgICAgIGlmICh0aGlzLl9pc09uKVxyXG4gICAgICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmVzb2x2ZSh0aGlzLl9zdGF0ZSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMuX2lzT24gPSB0cnVlO1xyXG5cclxuICAgICAgICByZXR1cm4gdGhpcy5yZW5kZXIodGhpcy5vblN0YXRlKCkpO1xyXG4gICAgfVxyXG5cclxuICAgIG9mZigpOiBQcm9taXNlPFN0YXRlPiB7XHJcbiAgICAgICAgaWYgKCF0aGlzLl9pc09uKVxyXG4gICAgICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmVzb2x2ZSh0aGlzLl9zdGF0ZSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMuX2lzT24gPSBmYWxzZTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXMucmVuZGVyKHRoaXMub2ZmU3RhdGUoKSlcclxuICAgICAgICAgICAgLnRoZW4oKHJlc3VsdCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMucmVuZGVyKHRoaXMuaGlkZGVuU3RhdGUoKSk7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgb25TdGF0ZSgpOiBTdGF0ZSB7XHJcbiAgICAgICAgbGV0IHN0YXRlID0gbmV3IFN0YXRlKCk7XHJcbiAgICAgICAgc3RhdGUuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XHJcbiAgICAgICAgc3RhdGUuc3R5bGUub3BhY2l0eSA9IHRoaXMuX29wYWNpdHkudG9TdHJpbmcoKTtcclxuICAgICAgICByZXR1cm4gc3RhdGU7XHJcbiAgICB9XHJcblxyXG4gICAgb2ZmU3RhdGUoKTogU3RhdGUge1xyXG4gICAgICAgIGxldCBzdGF0ZSA9IG5ldyBTdGF0ZSgpO1xyXG4gICAgICAgIHN0YXRlLnN0eWxlLm9wYWNpdHkgPSAnMCc7XHJcbiAgICAgICAgcmV0dXJuIHN0YXRlO1xyXG4gICAgfVxyXG5cclxuICAgIGhpZGRlblN0YXRlKCk6IFN0YXRlIHtcclxuICAgICAgICBsZXQgc3RhdGUgPSBuZXcgU3RhdGUoKTtcclxuICAgICAgICBzdGF0ZS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgICAgIHJldHVybiBzdGF0ZTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGNsaWNrRXZlbnQgPSAoKSA9PiB7XHJcbiAgICAgICAgdGhpcy5nZXRSb290KCkucmVsYXkoJ29mZicpO1xyXG4gICAgfVxyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbXBvbmVudC9PdmVybGF5Q29tcG9uZW50LnRzIiwiaW1wb3J0IHsgQ29tcG9zaXRlIH0gZnJvbSBcIi4vQ29tcG9zaXRlXCI7XHJcbmltcG9ydCB7IElMb2dnZXIgfSBmcm9tIFwiLi4vdXRpbC9Mb2dnZXJcIjtcclxuaW1wb3J0IExvZ2dlciBmcm9tIFwiLi4vdXRpbC9Mb2dnZXJcIjtcclxuaW1wb3J0IHsgSUFuaW1hdG9yIH0gZnJvbSBcIi4uL2FuaW1hdG9yL0FuaW1hdG9yc1wiO1xyXG5pbXBvcnQgeyBJQ29tcG9uZW50LCBDb21wb25lbnQgfSBmcm9tIFwiLi9Db21wb25lbnRcIjtcclxuaW1wb3J0IHsgQ29tcG9uZW50RmFjdG9yeSB9IGZyb20gXCIuL0NvbXBvbmVudEZhY3RvcnlcIjtcclxuaW1wb3J0IEVsZW1lbnRIZWxwZXIgZnJvbSBcIi4uL3V0aWwvRWxlbWVudEhlbHBlclwiO1xyXG5pbXBvcnQgeyBTdGF0ZSB9IGZyb20gXCIuLi9zdGF0ZS9TdGF0ZVwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIFZlcnRpY2FsTGF5b3V0Q29tcG9uZW50IGV4dGVuZHMgQ29tcG9zaXRlIHtcclxuXHJcbiAgICBwcml2YXRlIGZpeGVkQ2hpbGRyZW46IEFycmF5PElDb21wb25lbnQ+O1xyXG4gICAgcHJpdmF0ZSBwZXJjdENoaWxkcmVuOiBBcnJheTxJQ29tcG9uZW50PjtcclxuICAgIHByaXZhdGUgZmx1aWRDaGlsZHJlbjogQXJyYXk8SUNvbXBvbmVudD47XHJcblxyXG4gICAgY29uc3RydWN0b3IobG9nZ2VyOiBJTG9nZ2VyLCBhbmltYXRvcj86IElBbmltYXRvcikge1xyXG4gICAgICAgIHN1cGVyKGxvZ2dlciwgYW5pbWF0b3IpO1xyXG5cclxuICAgICAgICB0aGlzLmZpeGVkQ2hpbGRyZW4gPSBuZXcgQXJyYXk8SUNvbXBvbmVudD4oKTtcclxuICAgICAgICB0aGlzLnBlcmN0Q2hpbGRyZW4gPSBuZXcgQXJyYXk8SUNvbXBvbmVudD4oKTtcclxuICAgICAgICB0aGlzLmZsdWlkQ2hpbGRyZW4gPSBuZXcgQXJyYXk8SUNvbXBvbmVudD4oKTtcclxuXHJcbiAgICAgICAgdGhpcy5yZWdpc3RlckV2ZW50KCdpbml0JywgKCkgPT4geyByZXR1cm4gdGhpcy5pbml0KCkgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBJbml0aWFsaXplIHRoZSBWZXJ0aWNhbCBMYXlvdXRcclxuICAgICAqIEZvciBlYWNoIGNoaWxkIGVsZW1lbnQgaW4gZWxlbWVudHMsIHNldCB1cCBhIG5ldyBDb21wb25lbnQgZmlndXJlIFxyXG4gICAgICogb3V0IGlmIGl0IGhhcyBhIGhlaWdodCBzZXQgYXMgYSBwaXhlbCB2YWx1ZSAoZml4ZWQgY2hpbGQpLCBhIDEwMCVcclxuICAgICAqIHZhbHVlIChmbHVpZCBjaGlsZCksIG9yIGEgdmFsdWUgc2V0IHRvIGEgc3BlY2lmaWMgcGVyY2VudGFnZSBcclxuICAgICAqIChwZXJjZW50YWdlIGNoaWxkKVxyXG4gICAgICogXHJcbiAgICAgKiBAcmV0dXJucyBcclxuICAgICAqIEBtZW1iZXJvZiBWZXJ0aWNhbExheW91dENvbXBvbmVudFxyXG4gICAgICovXHJcbiAgICBpbml0KCkge1xyXG4gICAgICAgIGxldCBlbCA9IHRoaXMuZ2V0RWxlbWVudCgpO1xyXG4gICAgICAgIGxldCBmYWN0b3J5ID0gbmV3IENvbXBvbmVudEZhY3RvcnkoKTtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGVsLmNoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGxldCBjaGlsZCA9IGVsLmNoaWxkcmVuW2ldIGFzIEhUTUxFbGVtZW50O1xyXG4gICAgICAgICAgICBpZiAoIWNoaWxkLmlkKVxyXG4gICAgICAgICAgICAgICAgRWxlbWVudEhlbHBlci5zZXRHdWlkSWQoY2hpbGQpO1xyXG4gICAgICAgICAgICBsZXQgY2hpbGRDb21wb25lbnQgPSBuZXcgQ29tcG9uZW50KG5ldyBMb2dnZXIoKSk7XHJcbiAgICAgICAgICAgIGNoaWxkQ29tcG9uZW50LnNldEVsZW1lbnQoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoY2hpbGQuaWQpKTtcclxuICAgICAgICAgICAgbGV0IHNpemUgPSBjaGlsZC5nZXRBdHRyaWJ1dGUoJ2RhdGEtc2l6ZScpIHx8ICcxMDAlJztcclxuICAgICAgICAgICAgaWYgKHNpemUgPT09ICcxMDAlJykge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5mbHVpZENoaWxkcmVuLnB1c2goY2hpbGRDb21wb25lbnQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2UgaWYgKHNpemUubWF0Y2goL15bXFxkXSslJC8pKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnBlcmN0Q2hpbGRyZW4ucHVzaChjaGlsZENvbXBvbmVudCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmZpeGVkQ2hpbGRyZW4ucHVzaChjaGlsZENvbXBvbmVudCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY2hpbGRDb21wb25lbnQucmVuZGVyKHsgc3R5bGU6IHsgd2lkdGg6ICcxMDAlJywgaGVpZ2h0OiBzaXplLCBvdmVyZmxvdzogJ2hpZGRlbicsIGZsb2F0OiAnbGVmdCcgfSB9KVxyXG4gICAgICAgICAgICB0aGlzLmFkZENoaWxkKGNoaWxkQ29tcG9uZW50KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdyZXNpemUnLCB0aGlzLnJlc2l6ZS5iaW5kKHRoaXMpKTtcclxuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgdGhpcy5yZXNpemUuYmluZCh0aGlzKSk7XHJcblxyXG4gICAgICAgIGxldCBzdGF0ZSA9IG5ldyBTdGF0ZSgpO1xyXG4gICAgICAgIHN0YXRlLnN0eWxlLmhlaWdodCA9IHRoaXMuZ2V0RWxlbWVudCgpLnBhcmVudEVsZW1lbnQub2Zmc2V0SGVpZ2h0ICsgJ3B4JztcclxuICAgICAgICBzdGF0ZS5zdHlsZS53aWR0aCA9IHRoaXMuZ2V0RWxlbWVudCgpLnBhcmVudEVsZW1lbnQub2Zmc2V0V2lkdGggKyAncHgnO1xyXG4gICAgICAgIHN0YXRlLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XHJcbiAgICAgICAgc3RhdGUuc3R5bGUub3ZlcmZsb3cgPSBcImhpZGRlblwiO1xyXG4gICAgICAgIHN0YXRlLnN0eWxlLmZsb2F0ID0gXCJsZWZ0XCJcclxuICAgICAgICByZXR1cm4gdGhpcy5yZW5kZXIoc3RhdGUpO1xyXG4gICAgfVxyXG5cclxuICAgIHJlc2l6ZSgpIHtcclxuICAgICAgICBsZXQgc3RhdGUgPSBuZXcgU3RhdGUoKTtcclxuICAgICAgICBzdGF0ZS5zdHlsZS5oZWlnaHQgPSB0aGlzLmdldEVsZW1lbnQoKS5wYXJlbnRFbGVtZW50Lm9mZnNldEhlaWdodCArICdweCc7XHJcbiAgICAgICAgY29uc29sZS5sb2coZG9jdW1lbnQuYm9keS5vZmZzZXRIZWlnaHQpXHJcbiAgICAgICAgc3RhdGUuc3R5bGUud2lkdGggPSB0aGlzLmdldEVsZW1lbnQoKS5wYXJlbnRFbGVtZW50Lm9mZnNldFdpZHRoICsgJ3B4JztcclxuICAgICAgICByZXR1cm4gdGhpcy5yZW5kZXIoc3RhdGUpO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcihuZXdTdGF0ZTogU3RhdGUpIHtcclxuICAgICAgICBsZXQgcHJvbWlzZXMgPSBbXTtcclxuICAgICAgICBwcm9taXNlcy5wdXNoKHN1cGVyLnJlbmRlcihuZXdTdGF0ZSkpO1xyXG5cclxuICAgICAgICB2YXIgdG90YWxIZWlnaHQgPSB0aGlzLmdldEVsZW1lbnQoKS5vZmZzZXRIZWlnaHQ7XHJcbiAgICAgICAgdmFyIGZsdWlkSGVpZ2h0ID0gdG90YWxIZWlnaHQ7XHJcbiAgICAgICAgdmFyIHRvdGFsV2lkdGggPSB0aGlzLmdldEVsZW1lbnQoKS5vZmZzZXRXaWR0aDtcclxuXHJcbiAgICAgICAgLy8gRHJhdyB0aGUgZml4ZWQgY2hpbGRyZW5cclxuICAgICAgICBmb3IgKGxldCBlbCBvZiB0aGlzLmZpeGVkQ2hpbGRyZW4pIHtcclxuICAgICAgICAgICAgZmx1aWRIZWlnaHQgLT0gZWwuZ2V0RWxlbWVudCgpLm9mZnNldEhlaWdodDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gRHJhdyB0aGUgcGVyY2VudGFnZSBjaGlsZHJlblxyXG4gICAgICAgIGZvciAobGV0IGVsIG9mIHRoaXMucGVyY3RDaGlsZHJlbikge1xyXG4gICAgICAgICAgICBsZXQgaGVpZ2h0ID0gKHBhcnNlRmxvYXQoZWwuZ2V0RWxlbWVudCgpLmdldEF0dHJpYnV0ZSgnZGF0YS1zaXplJykpIC8gMTAwICogZmx1aWRIZWlnaHQpO1xyXG4gICAgICAgICAgICBmbHVpZEhlaWdodCAtPSBoZWlnaHQ7XHJcbiAgICAgICAgICAgIGVsLnJlbmRlcih7IHN0eWxlOiB7IGhlaWdodDogaGVpZ2h0ICsgJ3B4JyB9IH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBEcmF3IHRoZSBmbHVpZCBjaGlsZHJlblxyXG4gICAgICAgIGZvciAobGV0IGVsIG9mIHRoaXMuZmx1aWRDaGlsZHJlbikge1xyXG4gICAgICAgICAgICB2YXIgaGVpZ2h0ID0gZmx1aWRIZWlnaHQgLyB0aGlzLmZsdWlkQ2hpbGRyZW4ubGVuZ3RoO1xyXG4gICAgICAgICAgICBwcm9taXNlcy5wdXNoKGVsLnJlbmRlcih7IHN0eWxlOiB7IGhlaWdodDogaGVpZ2h0ICsgJ3B4JyB9IH0pKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIFByb21pc2UuYWxsKHByb21pc2VzKTtcclxuICAgIH1cclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21wb25lbnQvVmVydGljYWxMYXlvdXRDb21wb25lbnQudHMiLCJpbXBvcnQgeyBTdGF0ZSB9IGZyb20gJy4uL3N0YXRlL1N0YXRlJztcclxuaW1wb3J0IHsgSUxvZ2dlciB9IGZyb20gXCIuLi91dGlsL0xvZ2dlclwiO1xyXG5pbXBvcnQgeyBJQW5pbWF0b3IgfSBmcm9tIFwiLi4vYW5pbWF0b3IvQW5pbWF0b3JzXCI7XHJcbmltcG9ydCB7IENvbXBvc2l0ZSB9IGZyb20gXCIuL0NvbXBvc2l0ZVwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIFdpbmRvd0NvbXBvbmVudCBleHRlbmRzIENvbXBvc2l0ZSB7XHJcblxyXG4gICAgcHJpdmF0ZSBfd2lkdGg6IG51bWJlcjtcclxuICAgIHByaXZhdGUgX2hlaWdodDogbnVtYmVyO1xyXG4gICAgcHJpdmF0ZSBfdG9wOiBudW1iZXI7XHJcbiAgICBwcml2YXRlIF9sZWZ0OiBudW1iZXI7XHJcbiAgICBwcml2YXRlIF9pc09wZW46IGJvb2xlYW47XHJcblxyXG4gICAgY29uc3RydWN0b3IobG9nZ2VyOiBJTG9nZ2VyLCBhbmltYXRvcj86IElBbmltYXRvcikge1xyXG4gICAgICAgIHN1cGVyKGxvZ2dlciwgYW5pbWF0b3IpO1xyXG5cclxuICAgICAgICAvLyBTZXR1cCBkZWZhdWx0c1xyXG4gICAgICAgIHRoaXMuX3dpZHRoID0gMDtcclxuICAgICAgICB0aGlzLl9oZWlnaHQgPSAwO1xyXG4gICAgICAgIHRoaXMuX3RvcCA9IDA7XHJcbiAgICAgICAgdGhpcy5fbGVmdCA9IDA7XHJcbiAgICAgICAgdGhpcy5faXNPcGVuID0gZmFsc2U7XHJcblxyXG4gICAgICAgIC8vIFJlbGF5IGV2ZW50c1xyXG4gICAgICAgIHRoaXMucmVnaXN0ZXJFdmVudCgnb24nLCAoKSA9PiB7IHJldHVybiB0aGlzLm9uKCkgfSk7XHJcbiAgICAgICAgdGhpcy5yZWdpc3RlckV2ZW50KCdvZmYnLCAoKSA9PiB7IHJldHVybiB0aGlzLm9mZigpIH0pO1xyXG4gICAgICAgIHRoaXMucmVnaXN0ZXJFdmVudCgndG9nZ2xlJywgKCkgPT4geyByZXR1cm4gdGhpcy50b2dnbGUoKSB9KTtcclxuICAgICAgICB0aGlzLnJlZ2lzdGVyRXZlbnQoJ2luaXQnLCAoKSA9PiB7IHJldHVybiB0aGlzLmluaXQoKSB9KTtcclxuICAgIH1cclxuXHJcbiAgICB3aWR0aChuOiBudW1iZXIpOiB0aGlzIHtcclxuICAgICAgICBpZiAobiA8IDApIHtcclxuICAgICAgICAgICAgdGhpcy5fbG9nZ2VyLmVycm9yKGBXaWR0aCBtdXN0IGJlIGdyZWF0ZXIgdGhhbiBvciBlcXVhbCB0byB6ZXJvLmApO1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcztcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5fd2lkdGggPSBuO1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG5cclxuICAgIGhlaWdodChuOiBudW1iZXIpOiB0aGlzIHtcclxuICAgICAgICBpZiAobiA8IDApIHtcclxuICAgICAgICAgICAgdGhpcy5fbG9nZ2VyLmVycm9yKGBIZWlnaHQgbXVzdCBiZSBncmVhdGVyIHRoYW4gb3IgZXF1YWwgdG8gemVyby5gKTtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuX2hlaWdodCA9IG47XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgdG9wKG46IG51bWJlcik6IHRoaXMge1xyXG4gICAgICAgIHRoaXMuX3RvcCA9IG47XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgbGVmdChuOiBudW1iZXIpOiB0aGlzIHtcclxuICAgICAgICB0aGlzLl9sZWZ0ID0gbjtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFNldHMgdGhlIGluaXRpYWwgc3RhdGVcclxuICAgICAqIEByZXR1cm5zIHtQcm9taXNlPFN0YXRlPn0gXHJcbiAgICAgKi9cclxuICAgIGluaXQoKTogUHJvbWlzZTxTdGF0ZT4ge1xyXG4gICAgICAgIGxldCBzdGF0ZSA9IG5ldyBTdGF0ZSgpO1xyXG4gICAgICAgIHN0YXRlLm9rQ2xhc3NOYW1lID0gJ29rLXdpbmRvdydcclxuICAgICAgICBzdGF0ZS5zdHlsZS5wb3NpdGlvbiA9ICdhYnNvbHV0ZSc7XHJcbiAgICAgICAgc3RhdGUuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgICAgICBzdGF0ZS5zdHlsZS56SW5kZXggPSAnOTk5OSdcclxuICAgICAgICBzdGF0ZS5zdHlsZS53aWR0aCA9IGAke3RoaXMuZ2V0RWxlbWVudCgpLnBhcmVudEVsZW1lbnQub2Zmc2V0V2lkdGggLyAyfXB4YDtcclxuICAgICAgICBzdGF0ZS5zdHlsZS5oZWlnaHQgPSBgJHt0aGlzLmdldEVsZW1lbnQoKS5wYXJlbnRFbGVtZW50Lm9mZnNldEhlaWdodCAvIDJ9cHhgO1xyXG4gICAgICAgIHN0YXRlLnN0eWxlLmxlZnQgPSBgJHt0aGlzLl9sZWZ0fXB4YDtcclxuICAgICAgICBzdGF0ZS5zdHlsZS50b3AgPSBgJHt0aGlzLl90b3B9cHhgO1xyXG4gICAgICAgIHJldHVybiB0aGlzLnJlbmRlcihzdGF0ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgdG9nZ2xlKCk6IFByb21pc2U8U3RhdGU+IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5faXNPcGVuID8gdGhpcy5vZmYoKSA6IHRoaXMub24oKTtcclxuICAgIH1cclxuXHJcbiAgICBvbigpOiBQcm9taXNlPFN0YXRlPiB7XHJcbiAgICAgICAgaWYgKHRoaXMuX2lzT3BlbilcclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgICAgICAgICAgIHJlc29sdmUodGhpcy5fc3RhdGUpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB0aGlzLl9pc09wZW4gPSB0cnVlO1xyXG5cclxuICAgICAgICBsZXQgc3RhdGUgPSBuZXcgU3RhdGUoKTtcclxuICAgICAgICBzdGF0ZS5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcclxuICAgICAgICByZXR1cm4gdGhpcy5yZW5kZXIoc3RhdGUpO1xyXG4gICAgfVxyXG5cclxuICAgIG9mZigpOiBQcm9taXNlPFN0YXRlPiB7XHJcbiAgICAgICAgaWYgKCF0aGlzLl9pc09wZW4pXHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgICAgICAgICAgICByZXNvbHZlKHRoaXMuX3N0YXRlKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy5faXNPcGVuID0gZmFsc2U7XHJcblxyXG4gICAgICAgIGxldCBzdGF0ZSA9IG5ldyBTdGF0ZSgpO1xyXG4gICAgICAgIHN0YXRlLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMucmVuZGVyKHN0YXRlKTtcclxuICAgIH1cclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21wb25lbnQvV2luZG93Q29tcG9uZW50LnRzIiwiZXhwb3J0ICogZnJvbSAnLi9zdGF0ZS9TdGF0ZSc7XHJcbmV4cG9ydCAqIGZyb20gJy4vY29tcG9uZW50L0NvbXBvbmVudEZhY3RvcnknO1xyXG5leHBvcnQgKiBmcm9tICcuL2NvbXBvbmVudC9Db21wb25lbnQnO1xyXG5leHBvcnQgKiBmcm9tICcuL2NvbXBvbmVudC9Db21wb3NpdGUnO1xyXG5leHBvcnQgKiBmcm9tICcuL2NvbXBvbmVudC9EcmF3ZXJDb21wb25lbnQnO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9vdXRraXQudHMiXSwic291cmNlUm9vdCI6IiJ9
//# sourceMappingURL=outkit.js.map