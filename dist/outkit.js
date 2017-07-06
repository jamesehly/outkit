/*! Outkit v0.1.0 - Copyright 2017 James Ehly - MIT License */
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
/******/ 	return __webpack_require__(__webpack_require__.s = 9);
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
var ElementHelper_1 = __webpack_require__(10);

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
                    if (!isFinite(ns) && ns.match(/px$/)) value = value + "px";
                    _this._element.style[name] = value;
                }
            }
        };
        this._events = {};
        this._logger = logger;
        this._animator = animator;
        this._state = null;
        if (this._animator !== null) {
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
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

Object.defineProperty(exports, "__esModule", { value: true });
var Component_1 = __webpack_require__(1);
var Logger_1 = __webpack_require__(11);
var StandardAnimator_1 = __webpack_require__(5);
var DrawerComponent_1 = __webpack_require__(3);
var OverlayComponent_1 = __webpack_require__(7);
var WindowComponent_1 = __webpack_require__(8);
var DraggableComponent_1 = __webpack_require__(6);

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
        key: "getElement",
        value: function getElement(query) {
            return document.querySelectorAll(query)[0];
        }
    }]);

    return ComponentFactory;
}();

exports.ComponentFactory = ComponentFactory;

/***/ }),
/* 5 */
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
/* 6 */
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
/* 7 */
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
/* 8 */
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
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function __export(m) {
    for (var p in m) {
        if (!exports.hasOwnProperty(p)) exports[p] = m[p];
    }
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(0));
__export(__webpack_require__(4));
__export(__webpack_require__(3));

/***/ }),
/* 10 */
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
    }]);

    return ElementHelper;
}();

exports.default = ElementHelper;

/***/ }),
/* 11 */
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

/***/ })
/******/ ]);
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCAwODMxNzk5NGMxNjU2YTY3ZDc2NiIsIndlYnBhY2s6Ly8vLi9zcmMvc3RhdGUvU3RhdGUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudC9Db21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudC9Db21wb3NpdGUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudC9EcmF3ZXJDb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudC9Db21wb25lbnRGYWN0b3J5LnRzIiwid2VicGFjazovLy8uL3NyYy9hbmltYXRvci9TdGFuZGFyZEFuaW1hdG9yLnRzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnQvRHJhZ2dhYmxlQ29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnQvT3ZlcmxheUNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50L1dpbmRvd0NvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvb3V0a2l0LnRzIiwid2VicGFjazovLy8uL3NyYy91dGlsL0VsZW1lbnRIZWxwZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWwvTG9nZ2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsTztBQ1ZBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxtREFBMkMsY0FBYzs7QUFFekQ7QUFDQTtBQUNBO0FB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LEtBQUcsR0FBSSxJQUNuQjtBQUVJOzs7NkJBQWdCO0FBQ2IsZ0JBQUssS0FBTyxVQUFJLE9BQVcsS0FBRyxHQUFLLFNBQWdCLFlBQzlDLEtBQUcsR0FBSyxLQUNwQjtBQUVJOzs7NkJBQWdCO0FBQ2IsZ0JBQUssS0FBTyxVQUFJLE9BQVcsS0FBRyxHQUFLLFNBQWdCLFlBQzlDLEtBQUcsR0FBSyxLQUNwQjtBQUVLOzs7OEJBQWdCO0FBQ2QsZ0JBQUssS0FBTyxVQUFJLE9BQVcsS0FBRyxHQUFNLFVBQWdCLFlBQy9DLEtBQUcsR0FBTSxNQUNyQjtBQUNIOzs7Ozs7QUFsQ0Qsa0JBa0NDLE8iLCJmaWxlIjoiZGlzdC9vdXRraXQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShbXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJvdXRraXRcIl0gPSBmYWN0b3J5KCk7XG5cdGVsc2Vcblx0XHRyb290W1wib3V0a2l0XCJdID0gZmFjdG9yeSgpO1xufSkodGhpcywgZnVuY3Rpb24oKSB7XG5yZXR1cm4gXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGlkZW50aXR5IGZ1bmN0aW9uIGZvciBjYWxsaW5nIGhhcm1vbnkgaW1wb3J0cyB3aXRoIHRoZSBjb3JyZWN0IGNvbnRleHRcbiBcdF9fd2VicGFja19yZXF1aXJlX18uaSA9IGZ1bmN0aW9uKHZhbHVlKSB7IHJldHVybiB2YWx1ZTsgfTtcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gOSk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgMDgzMTc5OTRjMTY1NmE2N2Q3NjYiLCJleHBvcnQgY2xhc3MgU3RhdGUge1xyXG4gICAgLy8gcG9zc2libHkgcmVmYWN0b3IgdGhlc2UgY2xhc3NlcyBpbnRvIGFuIGFycmF5IG9mIGNsYXNzZXMgdGhhdCBhcmUgbWFuYWdlZFxyXG4gICAgLy8gdmlhIG1ldGhvZHMgaW4gdGhpcyBjbGFzc1xyXG4gICAgb2tDbGFzc05hbWU6IHN0cmluZztcclxuICAgIHN0YXRlQ2xhc3NOYW1lOiBzdHJpbmc7XHJcbiAgICBzdHlsZToge1xyXG4gICAgICAgIGhlaWdodD86IHN0cmluZztcclxuICAgICAgICB3aWR0aD86IHN0cmluZztcclxuICAgICAgICBvdmVyZmxvdz86IHN0cmluZztcclxuICAgICAgICBmbG9hdD86IHN0cmluZztcclxuICAgICAgICBwb3NpdGlvbj86IHN0cmluZztcclxuICAgICAgICB6SW5kZXg/OiBzdHJpbmc7XHJcbiAgICAgICAgdG9wPzogc3RyaW5nO1xyXG4gICAgICAgIGJvdHRvbT86IHN0cmluZztcclxuICAgICAgICBsZWZ0Pzogc3RyaW5nO1xyXG4gICAgICAgIHJpZ2h0Pzogc3RyaW5nO1xyXG4gICAgICAgIGRpc3BsYXk/OiBzdHJpbmc7XHJcbiAgICAgICAgYmFja2dyb3VuZENvbG9yPzogc3RyaW5nO1xyXG4gICAgICAgIG9wYWNpdHk/OiBzdHJpbmc7XHJcbiAgICB9XHJcbiAgICBzdGF0aWMgcmVhZG9ubHkgYW5pbWF0ZWRQcm9wczogQXJyYXk8c3RyaW5nPiA9IFtcclxuICAgICAgICAnc3R5bGUuaGVpZ2h0JywgXHJcbiAgICAgICAgJ3N0eWxlLndpZHRoJywgXHJcbiAgICAgICAgJ3N0eWxlLnRvcCcsIFxyXG4gICAgICAgICdzdHlsZS5ib3R0b20nLCBcclxuICAgICAgICAnc3R5bGUubGVmdCcsIFxyXG4gICAgICAgICdzdHlsZS5yaWdodCcsIFxyXG4gICAgICAgICdzdHlsZS5vcGFjaXR5JywgXHJcbiAgICAgICAgJ3N0eWxlLnpJbmRleCdcclxuICAgICAgICBdO1xyXG4gICAgXHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLm9rQ2xhc3NOYW1lID0gJyc7XHJcbiAgICAgICAgdGhpcy5zdGF0ZUNsYXNzTmFtZSA9ICcnO1xyXG4gICAgICAgIHRoaXMuc3R5bGUgPSB7fTtcclxuICAgICAgICB9XHJcblxyXG4gICAgc3RhdGljIGFuaW1hdGVkKHR5cGU6IHN0cmluZykge1xyXG4gICAgICAgIHZhciBpbmRleCA9IHRoaXMuYW5pbWF0ZWRQcm9wcy5pbmRleE9mKHR5cGUpO1xyXG4gICAgICAgIHJldHVybiBpbmRleCA+PSAwO1xyXG4gICAgfSBcclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvc3RhdGUvU3RhdGUudHMiLCJpbXBvcnQgeyBJTG9nZ2VyIH0gZnJvbSBcIi4uL3V0aWwvTG9nZ2VyXCI7XHJcbmltcG9ydCB7IElBbmltYXRvciB9IGZyb20gXCIuLi9hbmltYXRvci9BbmltYXRvcnNcIjtcclxuaW1wb3J0IHsgU3RhdGUgfSBmcm9tIFwiLi4vc3RhdGUvU3RhdGVcIjtcclxuaW1wb3J0IEVsZW1lbnRIZWxwZXIgZnJvbSBcIi4uL3V0aWwvRWxlbWVudEhlbHBlclwiO1xyXG5cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSUNvbXBvbmVudCB7XHJcbiAgICByZWxheShtZXNzYWdlOiBzdHJpbmcpOiBQcm9taXNlPGFueT47XHJcbiAgICByZWdpc3RlckV2ZW50KG5hbWU6IHN0cmluZywgZnVuYz86IEZ1bmN0aW9uKTogdGhpcztcclxuICAgIHNldEVsZW1lbnQoZWxlbWVudDogSFRNTEVsZW1lbnQpOiB0aGlzO1xyXG4gICAgZ2V0RWxlbWVudCgpOiBIVE1MRWxlbWVudDtcclxuICAgIGFkZENoaWxkKGNvbXBvbmVudDogSUNvbXBvbmVudCk6IHRoaXM7XHJcbiAgICByZW1vdmVDaGlsZChjb21wb25lbnQ6IElDb21wb25lbnQpOiB0aGlzO1xyXG4gICAgZ2V0Q2hpbGQoKTogSUNvbXBvbmVudDtcclxuICAgIGdldFJvb3QoKTogSUNvbXBvbmVudDtcclxuICAgIHNldFBhcmVudChwYXJlbnQ6IElDb21wb25lbnQpOiB0aGlzO1xyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgQ29tcG9uZW50IGltcGxlbWVudHMgSUNvbXBvbmVudCB7XHJcblxyXG4gICAgcHJpdmF0ZSBfZWxlbWVudDogSFRNTEVsZW1lbnQ7XHJcbiAgICBwcml2YXRlIF9jaGlsZDogSUNvbXBvbmVudDtcclxuICAgIHByaXZhdGUgX3BhcmVudDogSUNvbXBvbmVudDtcclxuXHJcbiAgICBwcm90ZWN0ZWQgX2xvZ2dlcjogSUxvZ2dlcjtcclxuICAgIHByb3RlY3RlZCBfYW5pbWF0b3I6IElBbmltYXRvcjtcclxuICAgIHByb3RlY3RlZCBfZXZlbnRzOiB7IFtpZDogc3RyaW5nXTogRnVuY3Rpb24gfTtcclxuICAgIHByb3RlY3RlZCBfc3RhdGU6IFN0YXRlO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKGxvZ2dlcjogSUxvZ2dlciwgYW5pbWF0b3I/OiBJQW5pbWF0b3IpIHtcclxuICAgICAgICB0aGlzLl9ldmVudHMgPSB7fTtcclxuICAgICAgICB0aGlzLl9sb2dnZXIgPSBsb2dnZXI7XHJcbiAgICAgICAgdGhpcy5fYW5pbWF0b3IgPSBhbmltYXRvcjtcclxuICAgICAgICB0aGlzLl9zdGF0ZSA9IG51bGw7XHJcbiAgICAgICAgaWYgKHRoaXMuX2FuaW1hdG9yICE9PSBudWxsKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2FuaW1hdG9yLnNldFN0ZXAodGhpcy5zdGVwKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0RWxlbWVudCgpOiBIVE1MRWxlbWVudCB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2VsZW1lbnQ7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0RWxlbWVudChlbGVtZW50OiBIVE1MRWxlbWVudCk6IHRoaXMge1xyXG4gICAgICAgIHRoaXMuX2VsZW1lbnQgPSBlbGVtZW50O1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG5cclxuICAgIGFkZENoaWxkKGNvbXBvbmVudDogSUNvbXBvbmVudCk6IHRoaXMge1xyXG4gICAgICAgIHRoaXMuX2NoaWxkID0gY29tcG9uZW50O1xyXG4gICAgICAgIGNvbXBvbmVudC5zZXRQYXJlbnQodGhpcyk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgcmVtb3ZlQ2hpbGQoY29tcG9uZW50OiBJQ29tcG9uZW50KTogdGhpcyB7XHJcbiAgICAgICAgdGhpcy5fY2hpbGQgPSBudWxsO1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG5cclxuICAgIGdldENoaWxkKCk6IElDb21wb25lbnQge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9jaGlsZDtcclxuICAgIH1cclxuXHJcbiAgICBzZXRQYXJlbnQocGFyZW50OiBJQ29tcG9uZW50KSB7XHJcbiAgICAgICAgdGhpcy5fcGFyZW50ID0gcGFyZW50O1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG5cclxuICAgIGdldFJvb3QoKTogSUNvbXBvbmVudCB7XHJcbiAgICAgICAgaWYgKHRoaXMuX3BhcmVudCAmJiB0eXBlb2YgdGhpcy5fcGFyZW50WydnZXRSb290J10gPT09ICdmdW5jdGlvbicpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3BhcmVudC5nZXRSb290KCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG5cclxuICAgIGdldFN0YXRlKCk6IFN0YXRlIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fc3RhdGU7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0U3RhdGUoc3RhdGU6IFN0YXRlKTogdGhpcyB7XHJcbiAgICAgICAgdGhpcy5fc3RhdGUgPSBzdGF0ZTtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuXHJcbiAgICByZWdpc3RlckV2ZW50KG5hbWU6IHN0cmluZywgZnVuYz86IEZ1bmN0aW9uKTogdGhpcyB7XHJcbiAgICAgICAgdGhpcy5fZXZlbnRzW25hbWVdID0gZnVuYztcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuXHJcbiAgICByZWxheShtZXNzYWdlOiBzdHJpbmcpOiBQcm9taXNlPGFueT4ge1xyXG4gICAgICAgIGxldCBwcm9taXNlcyA9IFtdXHJcbiAgICAgICAgaWYgKHR5cGVvZiB0aGlzLl9ldmVudHNbbWVzc2FnZV0gPT09ICdmdW5jdGlvbicpXHJcbiAgICAgICAgICAgIHByb21pc2VzLnB1c2godGhpcy5fZXZlbnRzW21lc3NhZ2VdKCkpO1xyXG5cclxuICAgICAgICBsZXQgY2hpbGQgPSB0aGlzLmdldENoaWxkKCk7XHJcbiAgICAgICAgaWYgKHR5cGVvZiBjaGlsZCA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIGNoaWxkWydyZWxheSddID09PSAnZnVuY3Rpb24nKVxyXG4gICAgICAgICAgICBwcm9taXNlcy5wdXNoKHRoaXMuZ2V0Q2hpbGQoKS5yZWxheShtZXNzYWdlKSk7XHJcbiAgICAgICAgcmV0dXJuIFByb21pc2UuYWxsKHByb21pc2VzKTtcclxuICAgIH1cclxuXHJcbiAgICBtZXJnZShuZXdTdGF0ZSwgb2xkU3RhdGUpIHtcclxuICAgICAgICBsZXQgc3RhdGUgPSBuZXcgU3RhdGUoKTtcclxuICAgICAgICBzdGF0ZSA9IE9iamVjdC5hc3NpZ24oc3RhdGUsIG9sZFN0YXRlLCBuZXdTdGF0ZSk7XHJcbiAgICAgICAgc3RhdGUuc3R5bGUgPSBPYmplY3QuYXNzaWduKHt9LCBvbGRTdGF0ZS5zdHlsZSwgbmV3U3RhdGUuc3R5bGUpO1xyXG4gICAgICAgIHJldHVybiBzdGF0ZTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIERyYXcgdGhlIGN1cnJlbnQgc3RhdGUgb250byB0aGUgZWxlbWVudCwgb25seSBjaGFuZ2luZyB0aGUgaXRlbXMgdGhhdCBoYXZlXHJcbiAgICAgKiBjaGFuZ2VkIHNpbmNlIHRoZSBsYXN0IGRyYXcuXHJcbiAgICAgKiBAcmV0dXJucyB7UHJvbWlzZTxTdGF0ZT59XHJcbiAgICAgKiBAbWVtYmVyb2YgQ29tcG9uZW50XHJcbiAgICAgKi9cclxuICAgIHJlbmRlcihuZXdTdGF0ZTogU3RhdGUpOiBQcm9taXNlPFN0YXRlPiB7XHJcbiAgICAgICAgbGV0IG9sZFN0YXRlID0gdGhpcy5fc3RhdGU7XHJcbiAgICAgICAgbGV0IGlzSW5pdGlhbCA9IGZhbHNlO1xyXG4gICAgICAgIGlmICghdGhpcy5fc3RhdGUpIHtcclxuICAgICAgICAgICAgb2xkU3RhdGUgPSBuZXcgU3RhdGUoKTtcclxuICAgICAgICAgICAgaXNJbml0aWFsID0gdHJ1ZTtcclxuICAgICAgICAgICAgdGhpcy5fZWxlbWVudC5zdHlsZS5jc3NUZXh0ID0gbnVsbDsgLy8gY2xlYXIgaW5saW5lIHN0bHlsZXNcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBuZXdTdGF0ZSA9IHRoaXMubWVyZ2UobmV3U3RhdGUsIG9sZFN0YXRlKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgICAgICAgIGlmICghdGhpcy5fZWxlbWVudCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fbG9nZ2VyLmVycm9yKGBFbGVtZW50IGlzIHVuZGVmaW5lZC4gIFVzZSBzZXRFbGVtZW50KCkgYmVmb3JlIGNhbGxpbmcgcmVuZGVyKCkuYClcclxuICAgICAgICAgICAgICAgIHJlamVjdChvbGRTdGF0ZSk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmIChuZXdTdGF0ZS5zdGF0ZUNsYXNzTmFtZSAmJiBuZXdTdGF0ZS5zdGF0ZUNsYXNzTmFtZSAhPSBvbGRTdGF0ZS5zdGF0ZUNsYXNzTmFtZSkge1xyXG4gICAgICAgICAgICAgICAgRWxlbWVudEhlbHBlci5jaGFuZ2VDbGFzcyh0aGlzLl9lbGVtZW50LCBuZXdTdGF0ZS5zdGF0ZUNsYXNzTmFtZSwgb2xkU3RhdGUuc3RhdGVDbGFzc05hbWUpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAobmV3U3RhdGUub2tDbGFzc05hbWUgJiYgbmV3U3RhdGUub2tDbGFzc05hbWUgIT0gb2xkU3RhdGUub2tDbGFzc05hbWUpIHtcclxuICAgICAgICAgICAgICAgIEVsZW1lbnRIZWxwZXIuY2hhbmdlQ2xhc3ModGhpcy5fZWxlbWVudCwgbmV3U3RhdGUub2tDbGFzc05hbWUsIG9sZFN0YXRlLm9rQ2xhc3NOYW1lKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLy8gTG9vcCB0aHJvdWdoIG5vbiBhbmltYXRhYmxlIHByb3BlcnRpZXMgb24gc3R5bGUgYW5kIHNldCB0aGVtXHJcbiAgICAgICAgICAgIGZvciAobGV0IG5hbWUgaW4gbmV3U3RhdGUuc3R5bGUpIHtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLl9hbmltYXRvciAmJiAoU3RhdGUuYW5pbWF0ZWQoJ3N0eWxlLicgKyBuYW1lKSAmJiBuZXdTdGF0ZS5zdHlsZVtuYW1lXSAhPT0gbnVsbCkgJiYgIWlzSW5pdGlhbClcclxuICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcclxuXHJcbiAgICAgICAgICAgICAgICBsZXQgbnMgPSBuZXdTdGF0ZS5zdHlsZVtuYW1lXTtcclxuICAgICAgICAgICAgICAgIGxldCBvcyA9IG9sZFN0YXRlLnN0eWxlW25hbWVdO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmIChucyA9PT0gb3MpXHJcbiAgICAgICAgICAgICAgICAgICAgY29udGludWU7XHJcblxyXG4gICAgICAgICAgICAgICAgdGhpcy5fZWxlbWVudC5zdHlsZVtuYW1lXSA9IG5zO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAvLyBJbml0aWFsIHN0YXRlXHJcbiAgICAgICAgICAgIGlmIChpc0luaXRpYWwpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuX2xvZ2dlci5sb2coYFtJbml0aWFsIFN0YXRlXVsjJHt0aGlzLl9lbGVtZW50LmlkfV06ICAke0pTT04uc3RyaW5naWZ5KG5ld1N0YXRlKX0gXWApO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fc3RhdGUgPSBuZXdTdGF0ZTtcclxuICAgICAgICAgICAgICAgIHJlc29sdmUobmV3U3RhdGUpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAvLyBTdGFydCB0aGUgYW5pbWF0b3IgdG8gYW5pbWF0ZSBhbnkgYW5pbWF0YWJsZSBwcm9wZXJ0aWVzXHJcbiAgICAgICAgICAgIGlmICh0aGlzLl9hbmltYXRvcikge1xyXG4gICAgICAgICAgICAgICAgbGV0IG46IG51bWJlciA9IERhdGUubm93KCk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5fYW5pbWF0b3IuYW5pbWF0ZShuLCBuZXdTdGF0ZSwgb2xkU3RhdGUpXHJcbiAgICAgICAgICAgICAgICAgICAgLnRoZW4oKGZpbmlzaGVkKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChmaW5pc2hlZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fbG9nZ2VyLmxvZyhgW1VwZGF0ZWQgU3RhdGVdWyMke3RoaXMuX2VsZW1lbnQuaWR9XTogICR7SlNPTi5zdHJpbmdpZnkobmV3U3RhdGUpfSBdYCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9zdGF0ZSA9IG5ld1N0YXRlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShuZXdTdGF0ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvLyBObyBhbmltYXRvciwgc28ganVzdCByZXNvbHZlXHJcbiAgICAgICAgICAgIHRoaXMuX3N0YXRlID0gbmV3U3RhdGU7XHJcbiAgICAgICAgICAgIHJlc29sdmUobmV3U3RhdGUpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdGVwID0gKGRlbHRhOiBudW1iZXIsIGFyZ3M6IGFueVtdKSA9PiB7XHJcbiAgICAgICAgLy8gTG9vcCB0aHJvdWdoIHZhbHVlcyBhbmQgbWFrZSBsaXZlIGNoYW5nZXMgdG8gZWxlbWVudFxyXG4gICAgICAgIHZhciBuZXdTdGF0ZSA9IGFyZ3NbMF07XHJcbiAgICAgICAgdmFyIG9sZFN0YXRlID0gYXJnc1sxXTtcclxuICAgICAgICBmb3IgKGxldCBuYW1lIGluIG5ld1N0YXRlLnN0eWxlKSB7XHJcbiAgICAgICAgICAgIGlmICghU3RhdGUuYW5pbWF0ZWQoJ3N0eWxlLicgKyBuYW1lKSlcclxuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xyXG5cclxuICAgICAgICAgICAgbGV0IG5zID0gbmV3U3RhdGUuc3R5bGVbbmFtZV07XHJcbiAgICAgICAgICAgIGxldCBvcyA9IG9sZFN0YXRlLnN0eWxlW25hbWVdO1xyXG5cclxuICAgICAgICAgICAgaWYgKG5zID09PSBvcylcclxuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xyXG5cclxuICAgICAgICAgICAgbGV0IG5zdiA9IHBhcnNlRmxvYXQobnMpO1xyXG4gICAgICAgICAgICBsZXQgb3N2ID0gcGFyc2VGbG9hdChvcyk7XHJcblxyXG4gICAgICAgICAgICBpZiAoaXNGaW5pdGUobnN2KSAmJiBpc0Zpbml0ZShvc3YpKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgdmFsdWUgPSAobnN2IC0gb3N2KSAqIGRlbHRhICsgb3N2ICsgJyc7XHJcbiAgICAgICAgICAgICAgICBpZiAoIWlzRmluaXRlKG5zKSAmJiBucy5tYXRjaCgvcHgkLykpXHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWUgPSBgJHt2YWx1ZX1weGA7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9lbGVtZW50LnN0eWxlW25hbWVdID0gdmFsdWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21wb25lbnQvQ29tcG9uZW50LnRzIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBJQ29tcG9uZW50IH0gZnJvbSBcIi4vQ29tcG9uZW50XCI7XHJcbmltcG9ydCB7IElMb2dnZXIgfSBmcm9tIFwiLi4vdXRpbC9Mb2dnZXJcIjtcclxuaW1wb3J0IHsgSUFuaW1hdG9yIH0gZnJvbSBcIi4uL2FuaW1hdG9yL0FuaW1hdG9yc1wiO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBJQ29tcG9zaXRlIGV4dGVuZHMgSUNvbXBvbmVudCB7XHJcbiAgICBnZXRDaGlsZHJlbigpOiBBcnJheTxJQ29tcG9uZW50PlxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgQ29tcG9zaXRlIGV4dGVuZHMgQ29tcG9uZW50IGltcGxlbWVudHMgSUNvbXBvc2l0ZSB7XHJcblxyXG4gICAgcHJpdmF0ZSBfbGlzdDogQXJyYXk8SUNvbXBvbmVudD47XHJcblxyXG4gICAgY29uc3RydWN0b3IobG9nZ2VyPzogSUxvZ2dlciwgYW5pbWF0b3I/OiBJQW5pbWF0b3IpIHtcclxuICAgICAgICBzdXBlcihsb2dnZXIsIGFuaW1hdG9yKTtcclxuICAgICAgICB0aGlzLl9saXN0ID0gW107XHJcbiAgICB9XHJcblxyXG4gICAgYWRkQ2hpbGQoY29tcG9uZW50OiBJQ29tcG9uZW50KTogdGhpcyB7XHJcbiAgICAgICAgdGhpcy5fbGlzdC5wdXNoKGNvbXBvbmVudCk7XHJcbiAgICAgICAgY29tcG9uZW50LnNldFBhcmVudCh0aGlzKTtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuXHJcbiAgICByZW1vdmVDaGlsZChjb21wb25lbnQ6IElDb21wb25lbnQpOiB0aGlzIHtcclxuICAgICAgICBsZXQgaW5kZXggPSB0aGlzLl9saXN0LmluZGV4T2YoY29tcG9uZW50KTtcclxuICAgICAgICB0aGlzLl9saXN0LnNwbGljZShpbmRleCwgMSk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0Q2hpbGQoKTogSUNvbXBvbmVudCB7XHJcbiAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0Q2hpbGRyZW4oKTogSUNvbXBvbmVudFtdIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fbGlzdDtcclxuICAgIH1cclxuXHJcbiAgICByZWxheShtZXNzYWdlOiBzdHJpbmcpOiBQcm9taXNlPGFueT4ge1xyXG4gICAgICAgIHZhciBwcm9taXNlcyA9IFtdO1xyXG4gICAgICAgIGlmICh0eXBlb2YgdGhpcy5fZXZlbnRzW21lc3NhZ2VdID09PSAnZnVuY3Rpb24nKVxyXG4gICAgICAgICAgICBwcm9taXNlcy5wdXNoKHRoaXMuX2V2ZW50c1ttZXNzYWdlXSgpKTtcclxuXHJcbiAgICAgICAgZm9yIChsZXQgY2hpbGQgb2YgdGhpcy5fbGlzdCkge1xyXG4gICAgICAgICAgICBpZiAodHlwZW9mIGNoaWxkID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgY2hpbGRbJ3JlbGF5J10gPT09ICdmdW5jdGlvbicpXHJcbiAgICAgICAgICAgICAgICBwcm9taXNlcy5wdXNoKGNoaWxkLnJlbGF5KG1lc3NhZ2UpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIFByb21pc2UuYWxsKHByb21pc2VzKTtcclxuICAgIH1cclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21wb25lbnQvQ29tcG9zaXRlLnRzIiwiaW1wb3J0IHsgU3RhdGUgfSBmcm9tICcuLi9zdGF0ZS9TdGF0ZSc7XHJcbmltcG9ydCB7IElMb2dnZXIgfSBmcm9tIFwiLi4vdXRpbC9Mb2dnZXJcIjtcclxuaW1wb3J0IHsgSUFuaW1hdG9yIH0gZnJvbSBcIi4uL2FuaW1hdG9yL0FuaW1hdG9yc1wiO1xyXG5pbXBvcnQgeyBDb21wb3NpdGUgfSBmcm9tIFwiLi9Db21wb3NpdGVcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBEcmF3ZXJDb21wb25lbnQgZXh0ZW5kcyBDb21wb3NpdGUge1xyXG5cclxuICAgIHByaXZhdGUgX2RvY2s6IHN0cmluZztcclxuICAgIHByaXZhdGUgX21heFNpemU6IG51bWJlcjtcclxuICAgIHByaXZhdGUgX21pblNpemU6IG51bWJlcjtcclxuICAgIHByaXZhdGUgX2lzT3BlbjogYm9vbGVhbjtcclxuICAgIHByaXZhdGUgX2RvY2tQb3NpdGlvbnM6IHN0cmluZ1tdID0gWydsZWZ0JywgJ3JpZ2h0JywgJ3RvcCcsICdib3R0b20nXTtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihsb2dnZXI6IElMb2dnZXIsIGFuaW1hdG9yPzogSUFuaW1hdG9yKSB7XHJcbiAgICAgICAgc3VwZXIobG9nZ2VyLCBhbmltYXRvcik7XHJcblxyXG4gICAgICAgIC8vIFNldHVwIGRlZmF1bHRzXHJcbiAgICAgICAgdGhpcy5fZG9jayA9ICdsZWZ0JztcclxuICAgICAgICB0aGlzLl9taW5TaXplID0gMDtcclxuICAgICAgICB0aGlzLl9tYXhTaXplID0gMjgwO1xyXG4gICAgICAgIHRoaXMuX2lzT3BlbiA9IGZhbHNlO1xyXG5cclxuICAgICAgICAvLyBSZWxheSBldmVudHNcclxuICAgICAgICB0aGlzLnJlZ2lzdGVyRXZlbnQoJ29uJywgKCkgPT4geyByZXR1cm4gdGhpcy5vbigpIH0pO1xyXG4gICAgICAgIHRoaXMucmVnaXN0ZXJFdmVudCgnb2ZmJywgKCkgPT4geyByZXR1cm4gdGhpcy5vZmYoKSB9KTtcclxuICAgICAgICB0aGlzLnJlZ2lzdGVyRXZlbnQoJ3RvZ2dsZScsICgpID0+IHsgcmV0dXJuIHRoaXMudG9nZ2xlKCkgfSk7XHJcbiAgICAgICAgdGhpcy5yZWdpc3RlckV2ZW50KCdpbml0JywgKCkgPT4geyByZXR1cm4gdGhpcy5pbml0KCkgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBDaGFuZ2UgdGhlIGRvY2sgcG9zaXRpb24gb2YgdGhlIGRyYXdlci4gIENhbGxpbmcgdGhpcyBmdW5jdGlvbiByZXNldHMgdGhlXHJcbiAgICAgKiBzdGF0ZSBhbmQgcmVwb3NpdGlvbnMgdGhlIGRyYXdlciBpbnN0YW50bHkuXHJcbiAgICAgKiBcclxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBkb2NrIFxyXG4gICAgICogQHJldHVybnMge3RoaXN9IFxyXG4gICAgICogQG1lbWJlcm9mIERyYXdlckNvbXBvbmVudFxyXG4gICAgICovXHJcbiAgICBkb2NrKGRvY2s6IHN0cmluZyk6IFByb21pc2U8U3RhdGU+IHtcclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5fZG9ja1Bvc2l0aW9ucy5pbmRleE9mKGRvY2spIDwgMCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fbG9nZ2VyLmVycm9yKGBcIiR7ZG9ja31cIiBpcyBub3QgYSB2YWxpZCBkb2NrIHBvc2l0aW9uLiAgVmFsaWQgcG9zaXRpb25zIGFyZSAke3RoaXMuX2RvY2tQb3NpdGlvbnMuam9pbignLCAnKX1gKTtcclxuICAgICAgICAgICAgICAgIHJlamVjdCgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnJlbGF5KCdvZmYnKS50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuX2RvY2sgPSBkb2NrO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fc3RhdGUgPSBudWxsO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuaW5pdCgpO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgbWluU2l6ZShuOiBudW1iZXIpOiB0aGlzIHtcclxuICAgICAgICBpZiAobiA8IDApIHtcclxuICAgICAgICAgICAgdGhpcy5fbG9nZ2VyLmVycm9yKGBtaW5TaXplIG51bWJlciBtdXN0IGJlIGdyZWF0ZXIgdGhhbiBvciBlcXVhbCB0byB6ZXJvLmApO1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcztcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5fbWluU2l6ZSA9IG47XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgbWF4U2l6ZShuOiBudW1iZXIpOiB0aGlzIHtcclxuICAgICAgICBpZiAobiA8IDApIHtcclxuICAgICAgICAgICAgdGhpcy5fbG9nZ2VyLmVycm9yKGBtYXhTaXplIG51bWJlciBtdXN0IGJlIGdyZWF0ZXIgdGhhbiBvciBlcXVhbCB0byB6ZXJvLmApO1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcztcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5fbWF4U2l6ZSA9IG47XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBTZXRzIHRoZSBpbml0aWFsIHN0YXRlXHJcbiAgICAgKiBAcmV0dXJucyB7UHJvbWlzZTxTdGF0ZT59IFxyXG4gICAgICovXHJcbiAgICBpbml0KCk6IFByb21pc2U8U3RhdGU+IHtcclxuICAgICAgICBsZXQgc3RhdGUgPSBuZXcgU3RhdGUoKTtcclxuICAgICAgICBzdGF0ZS5va0NsYXNzTmFtZSA9ICdvay1kcmF3ZXInO1xyXG4gICAgICAgIHN0YXRlLnN0eWxlLnBvc2l0aW9uID0gJ2ZpeGVkJztcclxuICAgICAgICBzdGF0ZS5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcclxuICAgICAgICBzdGF0ZS5zdHlsZS56SW5kZXggPSAnMTAwMDAnXHJcblxyXG4gICAgICAgIGlmICh0aGlzLmlzTGVmdCgpKSB7XHJcbiAgICAgICAgICAgIHN0YXRlLnN0eWxlLndpZHRoID0gYCR7dGhpcy5fbWF4U2l6ZX1weGA7XHJcbiAgICAgICAgICAgIHN0YXRlLnN0eWxlLmhlaWdodCA9IGAke3RoaXMuZ2V0RWxlbWVudCgpLnBhcmVudEVsZW1lbnQub2Zmc2V0SGVpZ2h0fXB4YDtcclxuICAgICAgICAgICAgc3RhdGUuc3R5bGUubGVmdCA9IGAtJHt0aGlzLl9tYXhTaXplfXB4YDtcclxuICAgICAgICAgICAgc3RhdGUuc3R5bGUudG9wID0gJzAnO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5pc1JpZ2h0KCkpIHtcclxuICAgICAgICAgICAgc3RhdGUuc3R5bGUud2lkdGggPSBgJHt0aGlzLl9tYXhTaXplfXB4YDtcclxuICAgICAgICAgICAgc3RhdGUuc3R5bGUuaGVpZ2h0ID0gYCR7dGhpcy5nZXRFbGVtZW50KCkucGFyZW50RWxlbWVudC5vZmZzZXRIZWlnaHR9cHhgO1xyXG4gICAgICAgICAgICBzdGF0ZS5zdHlsZS5yaWdodCA9IGAtJHt0aGlzLl9tYXhTaXplfXB4YDtcclxuICAgICAgICAgICAgc3RhdGUuc3R5bGUudG9wID0gJzAnO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5pc1RvcCgpKSB7XHJcbiAgICAgICAgICAgIHN0YXRlLnN0eWxlLndpZHRoID0gYCR7dGhpcy5nZXRFbGVtZW50KCkucGFyZW50RWxlbWVudC5vZmZzZXRXaWR0aH1weGA7XHJcbiAgICAgICAgICAgIHN0YXRlLnN0eWxlLmhlaWdodCA9IGAke3RoaXMuX21heFNpemV9cHhgO1xyXG4gICAgICAgICAgICBzdGF0ZS5zdHlsZS50b3AgPSBgLSR7dGhpcy5fbWF4U2l6ZX1weGA7XHJcbiAgICAgICAgICAgIHN0YXRlLnN0eWxlLmxlZnQgPSAnMCc7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLmlzQm90dG9tKCkpIHtcclxuICAgICAgICAgICAgc3RhdGUuc3R5bGUud2lkdGggPSBgJHt0aGlzLmdldEVsZW1lbnQoKS5wYXJlbnRFbGVtZW50Lm9mZnNldFdpZHRofXB4YDtcclxuICAgICAgICAgICAgc3RhdGUuc3R5bGUuaGVpZ2h0ID0gYCR7dGhpcy5fbWF4U2l6ZX1weGA7XHJcbiAgICAgICAgICAgIHN0YXRlLnN0eWxlLmJvdHRvbSA9IGAtJHt0aGlzLl9tYXhTaXplfXB4YDtcclxuICAgICAgICAgICAgc3RhdGUuc3R5bGUubGVmdCA9ICcwJztcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRoaXMucmVuZGVyKHN0YXRlKTtcclxuICAgIH1cclxuXHJcbiAgICB0b2dnbGUoKTogUHJvbWlzZTxTdGF0ZT4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9pc09wZW4gPyB0aGlzLm9mZigpIDogdGhpcy5vbigpO1xyXG4gICAgfVxyXG5cclxuICAgIG9uKCk6IFByb21pc2U8U3RhdGU+IHtcclxuICAgICAgICBpZiAodGhpcy5faXNPcGVuKVxyXG4gICAgICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmVzb2x2ZSh0aGlzLl9zdGF0ZSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMuX2lzT3BlbiA9IHRydWU7XHJcblxyXG4gICAgICAgIGxldCBzdGF0ZSA9IG5ldyBTdGF0ZSgpO1xyXG4gICAgICAgIGlmICh0aGlzLmlzTGVmdCgpKSB7XHJcbiAgICAgICAgICAgIHN0YXRlLnN0eWxlLmxlZnQgPSAnMCc7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLmlzUmlnaHQoKSkge1xyXG4gICAgICAgICAgICBzdGF0ZS5zdHlsZS5yaWdodCA9ICcwJztcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMuaXNUb3AoKSkge1xyXG4gICAgICAgICAgICBzdGF0ZS5zdHlsZS50b3AgPSAnMCc7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLmlzQm90dG9tKCkpIHtcclxuICAgICAgICAgICAgc3RhdGUuc3R5bGUuYm90dG9tID0gJzAnXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHN0YXRlLnN0YXRlQ2xhc3NOYW1lID0gJ29rLW9uJztcclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXMucmVuZGVyKHN0YXRlKTtcclxuICAgIH1cclxuXHJcbiAgICBvZmYoKTogUHJvbWlzZTxTdGF0ZT4ge1xyXG4gICAgICAgIGlmICghdGhpcy5faXNPcGVuKVxyXG4gICAgICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmVzb2x2ZSh0aGlzLl9zdGF0ZSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMuX2lzT3BlbiA9IGZhbHNlO1xyXG5cclxuICAgICAgICBsZXQgc3RhdGUgPSBuZXcgU3RhdGUoKTtcclxuICAgICAgICBpZiAodGhpcy5pc0xlZnQoKSkge1xyXG4gICAgICAgICAgICBzdGF0ZS5zdHlsZS5sZWZ0ID0gYC0ke3RoaXMuX21heFNpemV9cHhgO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5pc1JpZ2h0KCkpIHtcclxuICAgICAgICAgICAgc3RhdGUuc3R5bGUucmlnaHQgPSBgLSR7dGhpcy5fbWF4U2l6ZX1weGA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLmlzVG9wKCkpIHtcclxuICAgICAgICAgICAgc3RhdGUuc3R5bGUudG9wID0gYC0ke3RoaXMuX21heFNpemV9cHhgO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5pc0JvdHRvbSgpKSB7XHJcbiAgICAgICAgICAgIHN0YXRlLnN0eWxlLmJvdHRvbSA9IGAtJHt0aGlzLl9tYXhTaXplfXB4YDtcclxuICAgICAgICB9XHJcbiAgICAgICAgc3RhdGUuc3RhdGVDbGFzc05hbWUgPSAnb2stb2ZmJztcclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXMucmVuZGVyKHN0YXRlKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGlzTGVmdCgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZG9jayA9PT0gJ2xlZnQnO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgaXNSaWdodCgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZG9jayA9PT0gJ3JpZ2h0JztcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGlzVG9wKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9kb2NrID09PSAndG9wJztcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGlzQm90dG9tKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9kb2NrID09PSAnYm90dG9tJztcclxuICAgIH1cclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21wb25lbnQvRHJhd2VyQ29tcG9uZW50LnRzIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBJQ29tcG9uZW50IH0gZnJvbSBcIi4vQ29tcG9uZW50XCI7XHJcbmltcG9ydCBMb2dnZXIgZnJvbSBcIi4uL3V0aWwvTG9nZ2VyXCI7XHJcbmltcG9ydCBTdGFuZGFyZEFuaW1hdG9yIGZyb20gXCIuLi9hbmltYXRvci9TdGFuZGFyZEFuaW1hdG9yXCI7XHJcbmltcG9ydCB7IERyYXdlckNvbXBvbmVudCB9IGZyb20gXCIuL0RyYXdlckNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBPdmVybGF5Q29tcG9uZW50IH0gZnJvbSBcIi4vT3ZlcmxheUNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBXaW5kb3dDb21wb25lbnQgfSBmcm9tIFwiLi9XaW5kb3dDb21wb25lbnRcIjtcclxuaW1wb3J0IHsgRHJhZ2dhYmxlQ29tcG9uZW50IH0gZnJvbSBcIi4vRHJhZ2dhYmxlQ29tcG9uZW50XCI7XHJcblxyXG5leHBvcnQgY2xhc3MgQ29tcG9uZW50RmFjdG9yeSB7XHJcblxyXG4gICAgY29tcG9uZW50KGVsZW1lbnQ6IHN0cmluZyk6IElDb21wb25lbnQge1xyXG4gICAgICAgIGxldCBjb21wb25lbnQgPSBuZXcgQ29tcG9uZW50KG5ldyBMb2dnZXIoKSwgbmV3IFN0YW5kYXJkQW5pbWF0b3IoKSlcclxuICAgICAgICBjb21wb25lbnQuc2V0RWxlbWVudCh0aGlzLmdldEVsZW1lbnQoZWxlbWVudCkpO1xyXG4gICAgICAgIHJldHVybiBjb21wb25lbnQ7XHJcbiAgICB9XHJcblxyXG4gICAgZHJhd2VyKGVsZW1lbnQ6IHN0cmluZyk6IElDb21wb25lbnQge1xyXG4gICAgICAgIGxldCBjb21wb25lbnQgPSBuZXcgRHJhd2VyQ29tcG9uZW50KG5ldyBMb2dnZXIoKSwgbmV3IFN0YW5kYXJkQW5pbWF0b3IoKSk7XHJcbiAgICAgICAgbGV0IGVsID0gdGhpcy5nZXRFbGVtZW50KGVsZW1lbnQpO1xyXG4gICAgICAgIGNvbXBvbmVudC5zZXRFbGVtZW50KGVsKTtcclxuICAgICAgICBjb21wb25lbnQuaW5pdCgpO1xyXG4gICAgICAgIHJldHVybiBjb21wb25lbnQ7XHJcbiAgICB9XHJcblxyXG4gICAgb3ZlcmxheShlbGVtZW50OiBzdHJpbmcpOiBJQ29tcG9uZW50IHtcclxuICAgICAgICBsZXQgY29tcG9uZW50ID0gbmV3IE92ZXJsYXlDb21wb25lbnQobmV3IExvZ2dlcigpLCBuZXcgU3RhbmRhcmRBbmltYXRvcigpKVxyXG4gICAgICAgIGNvbXBvbmVudC5zZXRFbGVtZW50KHRoaXMuZ2V0RWxlbWVudChlbGVtZW50KSk7XHJcbiAgICAgICAgY29tcG9uZW50LmluaXQoKTtcclxuICAgICAgICByZXR1cm4gY29tcG9uZW50O1xyXG4gICAgfVxyXG5cclxuICAgIHdpbmRvdyhlbGVtZW50OiBzdHJpbmcpOiBJQ29tcG9uZW50IHtcclxuICAgICAgICBsZXQgY29tcG9uZW50ID0gbmV3IFdpbmRvd0NvbXBvbmVudChuZXcgTG9nZ2VyKCksIG5ldyBTdGFuZGFyZEFuaW1hdG9yKCkpXHJcbiAgICAgICAgY29tcG9uZW50LnNldEVsZW1lbnQodGhpcy5nZXRFbGVtZW50KGVsZW1lbnQpKTtcclxuICAgICAgICBjb21wb25lbnQuaW5pdCgpO1xyXG4gICAgICAgIHJldHVybiBjb21wb25lbnQ7XHJcbiAgICB9XHJcblxyXG4gICAgZHJhZ2dhYmxlKGVsZW1lbnQ6IHN0cmluZyk6IElDb21wb25lbnQge1xyXG4gICAgICAgIGxldCBjb21wb25lbnQgPSBuZXcgRHJhZ2dhYmxlQ29tcG9uZW50KG5ldyBMb2dnZXIoKSwgbmV3IFN0YW5kYXJkQW5pbWF0b3IoKSlcclxuICAgICAgICBjb21wb25lbnQuc2V0RWxlbWVudCh0aGlzLmdldEVsZW1lbnQoZWxlbWVudCkpO1xyXG4gICAgICAgIGNvbXBvbmVudC5pbml0KCk7XHJcbiAgICAgICAgcmV0dXJuIGNvbXBvbmVudDtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGdldEVsZW1lbnQocXVlcnk6IHN0cmluZyk6IEhUTUxFbGVtZW50IHtcclxuICAgICAgICByZXR1cm4gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChxdWVyeSlbMF0gYXMgSFRNTEVsZW1lbnQ7XHJcbiAgICB9XHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tcG9uZW50L0NvbXBvbmVudEZhY3RvcnkudHMiLCJpbXBvcnQgeyBJQW5pbWF0b3IgfSBmcm9tICcuL0FuaW1hdG9ycyc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTdGFuZGFyZEFuaW1hdG9yIGltcGxlbWVudHMgSUFuaW1hdG9yIHtcclxuXHJcbiAgICBwdWJsaWMgc3RhcnQ6IG51bWJlcjtcclxuICAgIHByaXZhdGUgX2R1cmF0aW9uOiBudW1iZXI7XHJcbiAgICBwcml2YXRlIF9zdGVwOiBGdW5jdGlvbjtcclxuICAgIHByaXZhdGUgX2ludGVydmFsOiBudW1iZXI7XHJcbiAgICBwcml2YXRlIF9yYXRlOiBudW1iZXI7XHJcblxyXG4gICAgcHVibGljIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHRoaXMuX2R1cmF0aW9uID0gMjAwO1xyXG4gICAgICAgIHRoaXMuX3N0ZXAgPSAoKSA9PiB7IH07XHJcbiAgICAgICAgdGhpcy5fcmF0ZSA9IDE2O1xyXG4gICAgfVxyXG5cclxuICAgIHNldFN0ZXAoc3RlcDogRnVuY3Rpb24pOiB0aGlzIHtcclxuICAgICAgICB0aGlzLl9zdGVwID0gc3RlcDtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuXHJcbiAgICBzZXREdXJhdGlvbihkdXJhdGlvbjogbnVtYmVyKTogdGhpcyB7XHJcbiAgICAgICAgdGhpcy5fZHVyYXRpb24gPSBkdXJhdGlvbjtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuXHJcbiAgICBzZXRSYXRlKHJhdGU6IG51bWJlcik6IHRoaXMge1xyXG4gICAgICAgIHRoaXMuX3JhdGUgPSByYXRlO1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQW5pbWF0ZSBjYWxsaW5nIGEgc3RlcCBmdW5jdGlvbiBvdmVyIGR1cmF0aW9uLiBTdGVwIGlzIGNhbGxlZCB3aXRoIGRlbHRhXHJcbiAgICAgKiB0aW1lIHNvIHRoYXQgYW5pbWF0aW9ucyBjb21wbGV0ZSB3aXRoaW4gdGhlIGR1cmF0aW9uLlxyXG4gICAgICogQHBhcmFtIHN0YXJ0IGRhdGVcclxuICAgICAqL1xyXG4gICAgYW5pbWF0ZShzdGFydD86IG51bWJlciwgLi4uYXJncyA6IGFueVtdKTogUHJvbWlzZTxib29sZWFuPiB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuX2ludGVydmFsID0gd2luZG93LnNldEludGVydmFsKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIGxldCBkZWx0YVRpbWUgPSBEYXRlLm5vdygpO1xyXG4gICAgICAgICAgICAgICAgbGV0IHRpbWVQYXNzZWQgPSBkZWx0YVRpbWUgLSBzdGFydDtcclxuICAgICAgICAgICAgICAgIGxldCBwcm9ncmVzcyA9IHRpbWVQYXNzZWQgLyB0aGlzLl9kdXJhdGlvbjtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAocHJvZ3Jlc3MgPiAxKSBwcm9ncmVzcyA9IDFcclxuXHJcbiAgICAgICAgICAgICAgICB2YXIgZGVsdGEgPSBwcm9ncmVzcztcclxuXHJcbiAgICAgICAgICAgICAgICB0aGlzLl9zdGVwKGRlbHRhLCBhcmdzKTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAocHJvZ3Jlc3MgPT0gMSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwodGhpcy5faW50ZXJ2YWwpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUodHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sIHRoaXMuX3JhdGUpXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9hbmltYXRvci9TdGFuZGFyZEFuaW1hdG9yLnRzIiwiaW1wb3J0IHsgQ29tcG9zaXRlIH0gZnJvbSBcIi4vQ29tcG9zaXRlXCI7XHJcbmltcG9ydCB7IElMb2dnZXIgfSBmcm9tIFwiLi4vdXRpbC9Mb2dnZXJcIjtcclxuaW1wb3J0IHsgSUFuaW1hdG9yIH0gZnJvbSBcIi4uL2FuaW1hdG9yL0FuaW1hdG9yc1wiO1xyXG5pbXBvcnQgeyBTdGF0ZSB9IGZyb20gXCIuLi9zdGF0ZS9TdGF0ZVwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIERyYWdnYWJsZUNvbXBvbmVudCBleHRlbmRzIENvbXBvc2l0ZSB7XHJcblxyXG4gICAgcHJpdmF0ZSBfZHJhZ1Jvb3Q6IGJvb2xlYW47XHJcbiAgICBwcml2YXRlIF94OiBudW1iZXI7XHJcbiAgICBwcml2YXRlIF95OiBudW1iZXI7XHJcbiAgICBwcml2YXRlIF90b3A6IG51bWJlcjtcclxuICAgIHByaXZhdGUgX2xlZnQ6IG51bWJlcjtcclxuICAgIHByaXZhdGUgX3BhcmVudFRvcDogbnVtYmVyO1xyXG4gICAgcHJpdmF0ZSBfcGFyZW50TGVmdDogbnVtYmVyO1xyXG4gICAgcHJpdmF0ZSBfZGlmZlg6IG51bWJlcjtcclxuICAgIHByaXZhdGUgX2RpZmZZOiBudW1iZXI7XHJcblxyXG4gICAgY29uc3RydWN0b3IobG9nZ2VyOiBJTG9nZ2VyLCBhbmltYXRvcj86IElBbmltYXRvcikge1xyXG4gICAgICAgIHN1cGVyKGxvZ2dlciwgYW5pbWF0b3IpO1xyXG5cclxuICAgICAgICAvLyBTZXR1cCBkZWZhdWx0c1xyXG4gICAgICAgIHRoaXMuX2RyYWdSb290ID0gZmFsc2U7XHJcblxyXG4gICAgICAgIC8vIFJlbGF5IGV2ZW50c1xyXG4gICAgICAgIHRoaXMucmVnaXN0ZXJFdmVudCgnaW5pdCcsICgpID0+IHsgcmV0dXJuIHRoaXMuaW5pdCgpIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGRyYWdSb290KGZsYWc6IGJvb2xlYW4pOiB0aGlzIHtcclxuICAgICAgICB0aGlzLl9kcmFnUm9vdCA9IGZsYWc7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgaW5pdCgpOiBQcm9taXNlPFN0YXRlPiB7XHJcbiAgICAgICAgbGV0IHN0YXRlID0gbmV3IFN0YXRlKCk7XHJcbiAgICAgICAgc3RhdGUub2tDbGFzc05hbWUgPSAnb2stZHJhZ2dhYmxlJztcclxuXHJcbiAgICAgICAgdGhpcy5nZXRFbGVtZW50KCkuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgdGhpcy5zdGFydERyYWcpO1xyXG4gICAgICAgIHRoaXMuZ2V0RWxlbWVudCgpLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIGRvY3VtZW50Lm9ubW91c2Vtb3ZlID0gKCkgPT4ge307XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMucmVuZGVyKHN0YXRlKTtcclxuICAgIH1cclxuXHJcbiAgICBzdGFydERyYWcgPSAoZXZlbnQ6IE1vdXNlRXZlbnQpID0+IHtcclxuICAgICAgICBsZXQgZGUgPSB0aGlzLmdldEVsZW1lbnQoKTtcclxuICAgICAgICBpZiAodGhpcy5fZHJhZ1Jvb3QpIHtcclxuICAgICAgICAgICAgZGUgPSB0aGlzLmdldFJvb3QoKS5nZXRFbGVtZW50KCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCBwYXJlbnQgPSBkZS5wYXJlbnRFbGVtZW50O1xyXG5cclxuICAgICAgICBsZXQgeCA9IGV2ZW50LmNsaWVudFgsXHJcbiAgICAgICAgICAgIHkgPSBldmVudC5jbGllbnRZLFxyXG4gICAgICAgICAgICB0b3AgPSBkZS5vZmZzZXRUb3AsXHJcbiAgICAgICAgICAgIGxlZnQgPSBkZS5vZmZzZXRMZWZ0LFxyXG4gICAgICAgICAgICBkZVdpZHRoID0gZGUub2Zmc2V0V2lkdGgsXHJcbiAgICAgICAgICAgIGRlSGVpZ2h0ID0gZGUub2Zmc2V0SGVpZ2h0LFxyXG4gICAgICAgICAgICBwYXJlbnRUb3AgPSBwYXJlbnQub2Zmc2V0VG9wLFxyXG4gICAgICAgICAgICBwYXJlbnRMZWZ0ID0gcGFyZW50Lm9mZnNldExlZnQsXHJcbiAgICAgICAgICAgIHBhcmVudFdpZHRoID0gcGFyZW50Lm9mZnNldFdpZHRoLFxyXG4gICAgICAgICAgICBwYXJlbnRIZWlnaHQgPXBhcmVudC5vZmZzZXRIZWlnaHQsXHJcbiAgICAgICAgICAgIGRpZmZYID0geCAtIGxlZnQsXHJcbiAgICAgICAgICAgIGRpZmZZID0geSAtIHRvcDtcclxuXHJcbiAgICAgICAgZG9jdW1lbnQub25tb3VzZW1vdmUgPSAoZXZlbnQ6IE1vdXNlRXZlbnQpID0+IHtcclxuICAgICAgICAgICAgbGV0IHggPSBldmVudC5jbGllbnRYLFxyXG4gICAgICAgICAgICAgICAgeSA9IGV2ZW50LmNsaWVudFksXHJcbiAgICAgICAgICAgICAgICBhWCA9IHggLSBkaWZmWCxcclxuICAgICAgICAgICAgICAgIGFZID0geSAtIGRpZmZZO1xyXG4gICAgICAgICAgICBpZiAoYVggPCAwKSBhWCA9IDA7XHJcbiAgICAgICAgICAgIGlmIChhWSA8IDApIGFZID0gMDtcclxuICAgICAgICAgICAgaWYgKGFYICsgZGVXaWR0aCA+IHBhcmVudFdpZHRoKSBhWCA9IHBhcmVudFdpZHRoIC0gZGVXaWR0aDtcclxuICAgICAgICAgICAgaWYgKGFZICsgZGVIZWlnaHQgPiBwYXJlbnRIZWlnaHQpIGFZID0gcGFyZW50SGVpZ2h0IC0gZGVIZWlnaHQ7XHJcblxyXG4gICAgICAgICAgICB0aGlzLm1vdmUoZGUsIGFYLCBhWSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIG1vdmUoZWxlbWVudDogSFRNTEVsZW1lbnQsIHg6IG51bWJlciwgeTogbnVtYmVyKSB7IFxyXG4gICAgICAgIGVsZW1lbnQuc3R5bGUubGVmdCA9IGAke3h9cHhgO1xyXG4gICAgICAgIGVsZW1lbnQuc3R5bGUudG9wID0gYCR7eX1weGA7XHJcbiAgICB9XHJcblxyXG4gICAgc3RvcERyYWcoKSB7IH1cclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21wb25lbnQvRHJhZ2dhYmxlQ29tcG9uZW50LnRzIiwiaW1wb3J0IHsgU3RhdGUgfSBmcm9tIFwiLi4vc3RhdGUvU3RhdGVcIjtcclxuaW1wb3J0IHsgSUxvZ2dlciB9IGZyb20gXCIuLi91dGlsL0xvZ2dlclwiO1xyXG5pbXBvcnQgeyBJQW5pbWF0b3IgfSBmcm9tIFwiLi4vYW5pbWF0b3IvQW5pbWF0b3JzXCI7XHJcbmltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gXCIuL0NvbXBvbmVudFwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIE92ZXJsYXlDb21wb25lbnQgZXh0ZW5kcyBDb21wb25lbnQge1xyXG5cclxuICAgIHByaXZhdGUgX2NvbG9yOiBzdHJpbmc7XHJcbiAgICBwcml2YXRlIF9vcGFjaXR5OiBudW1iZXI7XHJcbiAgICBwcml2YXRlIF9pc09uOiBib29sZWFuO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKGxvZ2dlcjogSUxvZ2dlciwgYW5pbWF0b3I/OiBJQW5pbWF0b3IpIHtcclxuICAgICAgICBzdXBlcihsb2dnZXIsIGFuaW1hdG9yKTtcclxuXHJcbiAgICAgICAgLy8gU2V0dXAgZGVmYXVsdHNcclxuICAgICAgICB0aGlzLl9vcGFjaXR5ID0gLjg7XHJcbiAgICAgICAgdGhpcy5fY29sb3IgPSAnIzAwMDAwMCc7XHJcbiAgICAgICAgdGhpcy5faXNPbiA9IGZhbHNlO1xyXG5cclxuICAgICAgICAvLyBSZWxheSBldmVudHNcclxuICAgICAgICB0aGlzLnJlZ2lzdGVyRXZlbnQoJ29uJywgKCkgPT4geyByZXR1cm4gdGhpcy5vbigpIH0pO1xyXG4gICAgICAgIHRoaXMucmVnaXN0ZXJFdmVudCgnb2ZmJywgKCkgPT4geyByZXR1cm4gdGhpcy5vZmYoKSB9KTtcclxuICAgICAgICB0aGlzLnJlZ2lzdGVyRXZlbnQoJ3RvZ2dsZScsICgpID0+IHsgcmV0dXJuIHRoaXMudG9nZ2xlKCkgfSk7XHJcbiAgICAgICAgdGhpcy5yZWdpc3RlckV2ZW50KCdpbml0JywgKCkgPT4geyByZXR1cm4gdGhpcy5pbml0KCkgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgb3BhY2l0eShuOiBudW1iZXIpOiB0aGlzIHtcclxuICAgICAgICBpZiAobiA8IDApIHtcclxuICAgICAgICAgICAgdGhpcy5fbG9nZ2VyLmVycm9yKGBPcGFjaXR5IG11c3QgYmUgZ3JlYXRlciB0aGFuIG9yIGVxdWFsIHRvIHplcm8uYCk7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAobiA+IDEpIHtcclxuICAgICAgICAgICAgdGhpcy5fbG9nZ2VyLmVycm9yKGBPcGFjaXR5IG11c3QgYmUgbGVzcyB0aGFuIG9yIGVxdWFsIHRvIG9uZS5gKTtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuX29wYWNpdHkgPSBuO1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbG9yKGM6IHN0cmluZyk6IHRoaXMge1xyXG4gICAgICAgIHRoaXMuX2NvbG9yID0gYztcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFNldHMgdGhlIGluaXRpYWwgc3RhdGVcclxuICAgICAqIEByZXR1cm5zIHtQcm9taXNlPFN0YXRlPn0gXHJcbiAgICAgKi9cclxuICAgIGluaXQoKTogUHJvbWlzZTxTdGF0ZT4ge1xyXG4gICAgICAgIGxldCBzdGF0ZSA9IG5ldyBTdGF0ZSgpO1xyXG4gICAgICAgIHN0YXRlLm9rQ2xhc3NOYW1lID0gJ29rLW92ZXJsYXknO1xyXG4gICAgICAgIHN0YXRlLnN0eWxlLmhlaWdodCA9IFwiMTAwJVwiO1xyXG4gICAgICAgIHN0YXRlLnN0eWxlLndpZHRoID0gXCIxMDAlXCI7XHJcbiAgICAgICAgc3RhdGUuc3R5bGUucG9zaXRpb24gPSBcImZpeGVkXCI7XHJcbiAgICAgICAgc3RhdGUuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gdGhpcy5fY29sb3I7XHJcbiAgICAgICAgc3RhdGUuc3R5bGUub3BhY2l0eSA9ICcwJztcclxuICAgICAgICBzdGF0ZS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgICAgIHN0YXRlLnN0eWxlLnRvcCA9ICcwJztcclxuICAgICAgICBzdGF0ZS5zdHlsZS5sZWZ0ID0gJzAnO1xyXG5cclxuICAgICAgICBpZiAodGhpcy5nZXRFbGVtZW50KCkpIHtcclxuICAgICAgICAgICAgdGhpcy5nZXRFbGVtZW50KCkuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLmNsaWNrRXZlbnQpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXMucmVuZGVyKHN0YXRlKTtcclxuICAgIH1cclxuXHJcbiAgICB0b2dnbGUoKTogUHJvbWlzZTxTdGF0ZT4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9pc09uID8gdGhpcy5vZmYoKSA6IHRoaXMub24oKTtcclxuICAgIH1cclxuXHJcbiAgICBvbigpOiBQcm9taXNlPFN0YXRlPiB7XHJcbiAgICAgICAgaWYgKHRoaXMuX2lzT24pXHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgICAgICAgICAgICByZXNvbHZlKHRoaXMuX3N0YXRlKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy5faXNPbiA9IHRydWU7XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzLnJlbmRlcih0aGlzLm9uU3RhdGUoKSk7XHJcbiAgICB9XHJcblxyXG4gICAgb2ZmKCk6IFByb21pc2U8U3RhdGU+IHtcclxuICAgICAgICBpZiAoIXRoaXMuX2lzT24pXHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgICAgICAgICAgICByZXNvbHZlKHRoaXMuX3N0YXRlKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy5faXNPbiA9IGZhbHNlO1xyXG5cclxuICAgICAgICByZXR1cm4gdGhpcy5yZW5kZXIodGhpcy5vZmZTdGF0ZSgpKVxyXG4gICAgICAgICAgICAudGhlbigocmVzdWx0KSA9PiB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5yZW5kZXIodGhpcy5oaWRkZW5TdGF0ZSgpKTtcclxuICAgICAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICBvblN0YXRlKCk6IFN0YXRlIHtcclxuICAgICAgICBsZXQgc3RhdGUgPSBuZXcgU3RhdGUoKTtcclxuICAgICAgICBzdGF0ZS5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcclxuICAgICAgICBzdGF0ZS5zdHlsZS5vcGFjaXR5ID0gdGhpcy5fb3BhY2l0eS50b1N0cmluZygpO1xyXG4gICAgICAgIHJldHVybiBzdGF0ZTtcclxuICAgIH1cclxuXHJcbiAgICBvZmZTdGF0ZSgpOiBTdGF0ZSB7XHJcbiAgICAgICAgbGV0IHN0YXRlID0gbmV3IFN0YXRlKCk7XHJcbiAgICAgICAgc3RhdGUuc3R5bGUub3BhY2l0eSA9ICcwJztcclxuICAgICAgICByZXR1cm4gc3RhdGU7XHJcbiAgICB9XHJcblxyXG4gICAgaGlkZGVuU3RhdGUoKTogU3RhdGUge1xyXG4gICAgICAgIGxldCBzdGF0ZSA9IG5ldyBTdGF0ZSgpO1xyXG4gICAgICAgIHN0YXRlLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgICAgICAgcmV0dXJuIHN0YXRlO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgY2xpY2tFdmVudCA9ICgpID0+IHtcclxuICAgICAgICB0aGlzLmdldFJvb3QoKS5yZWxheSgnb2ZmJyk7XHJcbiAgICB9XHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tcG9uZW50L092ZXJsYXlDb21wb25lbnQudHMiLCJpbXBvcnQgeyBTdGF0ZSB9IGZyb20gJy4uL3N0YXRlL1N0YXRlJztcclxuaW1wb3J0IHsgSUxvZ2dlciB9IGZyb20gXCIuLi91dGlsL0xvZ2dlclwiO1xyXG5pbXBvcnQgeyBJQW5pbWF0b3IgfSBmcm9tIFwiLi4vYW5pbWF0b3IvQW5pbWF0b3JzXCI7XHJcbmltcG9ydCB7IENvbXBvc2l0ZSB9IGZyb20gXCIuL0NvbXBvc2l0ZVwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIFdpbmRvd0NvbXBvbmVudCBleHRlbmRzIENvbXBvc2l0ZSB7XHJcblxyXG4gICAgcHJpdmF0ZSBfd2lkdGg6IG51bWJlcjtcclxuICAgIHByaXZhdGUgX2hlaWdodDogbnVtYmVyO1xyXG4gICAgcHJpdmF0ZSBfdG9wOiBudW1iZXI7XHJcbiAgICBwcml2YXRlIF9sZWZ0OiBudW1iZXI7XHJcbiAgICBwcml2YXRlIF9pc09wZW46IGJvb2xlYW47XHJcblxyXG4gICAgY29uc3RydWN0b3IobG9nZ2VyOiBJTG9nZ2VyLCBhbmltYXRvcj86IElBbmltYXRvcikge1xyXG4gICAgICAgIHN1cGVyKGxvZ2dlciwgYW5pbWF0b3IpO1xyXG5cclxuICAgICAgICAvLyBTZXR1cCBkZWZhdWx0c1xyXG4gICAgICAgIHRoaXMuX3dpZHRoID0gMDtcclxuICAgICAgICB0aGlzLl9oZWlnaHQgPSAwO1xyXG4gICAgICAgIHRoaXMuX3RvcCA9IDA7XHJcbiAgICAgICAgdGhpcy5fbGVmdCA9IDA7XHJcbiAgICAgICAgdGhpcy5faXNPcGVuID0gZmFsc2U7XHJcblxyXG4gICAgICAgIC8vIFJlbGF5IGV2ZW50c1xyXG4gICAgICAgIHRoaXMucmVnaXN0ZXJFdmVudCgnb24nLCAoKSA9PiB7IHJldHVybiB0aGlzLm9uKCkgfSk7XHJcbiAgICAgICAgdGhpcy5yZWdpc3RlckV2ZW50KCdvZmYnLCAoKSA9PiB7IHJldHVybiB0aGlzLm9mZigpIH0pO1xyXG4gICAgICAgIHRoaXMucmVnaXN0ZXJFdmVudCgndG9nZ2xlJywgKCkgPT4geyByZXR1cm4gdGhpcy50b2dnbGUoKSB9KTtcclxuICAgICAgICB0aGlzLnJlZ2lzdGVyRXZlbnQoJ2luaXQnLCAoKSA9PiB7IHJldHVybiB0aGlzLmluaXQoKSB9KTtcclxuICAgIH1cclxuXHJcbiAgICB3aWR0aChuOiBudW1iZXIpOiB0aGlzIHtcclxuICAgICAgICBpZiAobiA8IDApIHtcclxuICAgICAgICAgICAgdGhpcy5fbG9nZ2VyLmVycm9yKGBXaWR0aCBtdXN0IGJlIGdyZWF0ZXIgdGhhbiBvciBlcXVhbCB0byB6ZXJvLmApO1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcztcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5fd2lkdGggPSBuO1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG5cclxuICAgIGhlaWdodChuOiBudW1iZXIpOiB0aGlzIHtcclxuICAgICAgICBpZiAobiA8IDApIHtcclxuICAgICAgICAgICAgdGhpcy5fbG9nZ2VyLmVycm9yKGBIZWlnaHQgbXVzdCBiZSBncmVhdGVyIHRoYW4gb3IgZXF1YWwgdG8gemVyby5gKTtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuX2hlaWdodCA9IG47XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgdG9wKG46IG51bWJlcik6IHRoaXMge1xyXG4gICAgICAgIHRoaXMuX3RvcCA9IG47XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgbGVmdChuOiBudW1iZXIpOiB0aGlzIHtcclxuICAgICAgICB0aGlzLl9sZWZ0ID0gbjtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFNldHMgdGhlIGluaXRpYWwgc3RhdGVcclxuICAgICAqIEByZXR1cm5zIHtQcm9taXNlPFN0YXRlPn0gXHJcbiAgICAgKi9cclxuICAgIGluaXQoKTogUHJvbWlzZTxTdGF0ZT4ge1xyXG4gICAgICAgIGxldCBzdGF0ZSA9IG5ldyBTdGF0ZSgpO1xyXG4gICAgICAgIHN0YXRlLm9rQ2xhc3NOYW1lID0gJ29rLXdpbmRvdydcclxuICAgICAgICBzdGF0ZS5zdHlsZS5wb3NpdGlvbiA9ICdhYnNvbHV0ZSc7XHJcbiAgICAgICAgc3RhdGUuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgICAgICBzdGF0ZS5zdHlsZS56SW5kZXggPSAnOTk5OSdcclxuICAgICAgICBzdGF0ZS5zdHlsZS53aWR0aCA9IGAke3RoaXMuZ2V0RWxlbWVudCgpLnBhcmVudEVsZW1lbnQub2Zmc2V0V2lkdGggLyAyfXB4YDtcclxuICAgICAgICBzdGF0ZS5zdHlsZS5oZWlnaHQgPSBgJHt0aGlzLmdldEVsZW1lbnQoKS5wYXJlbnRFbGVtZW50Lm9mZnNldEhlaWdodCAvIDJ9cHhgO1xyXG4gICAgICAgIHN0YXRlLnN0eWxlLmxlZnQgPSBgJHt0aGlzLl9sZWZ0fXB4YDtcclxuICAgICAgICBzdGF0ZS5zdHlsZS50b3AgPSBgJHt0aGlzLl90b3B9cHhgO1xyXG4gICAgICAgIHJldHVybiB0aGlzLnJlbmRlcihzdGF0ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgdG9nZ2xlKCk6IFByb21pc2U8U3RhdGU+IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5faXNPcGVuID8gdGhpcy5vZmYoKSA6IHRoaXMub24oKTtcclxuICAgIH1cclxuXHJcbiAgICBvbigpOiBQcm9taXNlPFN0YXRlPiB7XHJcbiAgICAgICAgaWYgKHRoaXMuX2lzT3BlbilcclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgICAgICAgICAgIHJlc29sdmUodGhpcy5fc3RhdGUpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB0aGlzLl9pc09wZW4gPSB0cnVlO1xyXG5cclxuICAgICAgICBsZXQgc3RhdGUgPSBuZXcgU3RhdGUoKTtcclxuICAgICAgICBzdGF0ZS5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcclxuICAgICAgICByZXR1cm4gdGhpcy5yZW5kZXIoc3RhdGUpO1xyXG4gICAgfVxyXG5cclxuICAgIG9mZigpOiBQcm9taXNlPFN0YXRlPiB7XHJcbiAgICAgICAgaWYgKCF0aGlzLl9pc09wZW4pXHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgICAgICAgICAgICByZXNvbHZlKHRoaXMuX3N0YXRlKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy5faXNPcGVuID0gZmFsc2U7XHJcblxyXG4gICAgICAgIGxldCBzdGF0ZSA9IG5ldyBTdGF0ZSgpO1xyXG4gICAgICAgIHN0YXRlLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMucmVuZGVyKHN0YXRlKTtcclxuICAgIH1cclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21wb25lbnQvV2luZG93Q29tcG9uZW50LnRzIiwiZXhwb3J0ICogZnJvbSAnLi9zdGF0ZS9TdGF0ZSc7XHJcbmV4cG9ydCAqIGZyb20gJy4vY29tcG9uZW50L0NvbXBvbmVudEZhY3RvcnknO1xyXG5leHBvcnQgKiBmcm9tICcuL2NvbXBvbmVudC9EcmF3ZXJDb21wb25lbnQnO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9vdXRraXQudHMiLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBFbGVtZW50SGVscGVyIHtcclxuXHJcbiAgICAvKipcclxuICAgICAqIENoYW5nZXMgYW4gZWxlbWVudHMgY2xhc3MgYnkgYWRkaW5nIHRoZSBcImFkZENsYXNzXCIgc3RyaW5nIGFuZC9vclxyXG4gICAgICogcmVtb3ZpbmcgdGhlIFwicmVtb3ZlQ2xhc3NcIiBzdHJpbmdcclxuICAgICAqIFxyXG4gICAgICogQHN0YXRpY1xyXG4gICAgICogQHBhcmFtIHtIVE1MRWxlbWVudH0gZWxlbWVudCBcclxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBuZXdDbGFzcyBcclxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBvbGRDbGFzcyBcclxuICAgICAqIEBtZW1iZXJvZiBFbGVtZW50S2l0XHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgY2hhbmdlQ2xhc3MoZWxlbWVudDogSFRNTEVsZW1lbnQsIGFkZENsYXNzPzogc3RyaW5nLCByZW1vdmVDbGFzcz86IHN0cmluZyk6IHZvaWQge1xyXG4gICAgICAgIGxldCBjbGFzc0xpc3QgPSBlbGVtZW50LmNsYXNzTmFtZS5zcGxpdCgnICcpO1xyXG4gICAgICAgIC8vIFJlbW92ZSBvbGRDbGFzc1xyXG4gICAgICAgIGlmKHJlbW92ZUNsYXNzKSB7XHJcbiAgICAgICAgICAgIGxldCBvbGRJbmRleCA9IGNsYXNzTGlzdC5pbmRleE9mKHJlbW92ZUNsYXNzKTtcclxuICAgICAgICAgICAgaWYob2xkSW5kZXggPj0gMCkge1xyXG4gICAgICAgICAgICAgICAgY2xhc3NMaXN0LnNwbGljZShvbGRJbmRleCwgMSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gQWRkIG5ld0NsYXNzXHJcbiAgICAgICAgaWYoYWRkQ2xhc3MpIHtcclxuICAgICAgICAgICAgbGV0IG5ld0luZGV4ID0gY2xhc3NMaXN0LmluZGV4T2YoYWRkQ2xhc3MpO1xyXG4gICAgICAgICAgICBpZihuZXdJbmRleCA8IDApIHtcclxuICAgICAgICAgICAgICAgIGNsYXNzTGlzdC5wdXNoKGFkZENsYXNzKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbGVtZW50LmNsYXNzTmFtZSA9IGNsYXNzTGlzdC5qb2luKCcgJyk7XHJcbiAgICB9XHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvdXRpbC9FbGVtZW50SGVscGVyLnRzIiwiZXhwb3J0IGludGVyZmFjZSBJTG9nZ2VyIHtcclxuICAgIGxvZyhtZXNzYWdlOnN0cmluZyk7XHJcbiAgICB3YXJuKG1lc3NhZ2U6c3RyaW5nKTtcclxuICAgIGluZm8obWVzc2FnZTpzdHJpbmcpO1xyXG4gICAgZXJyb3IobWVzc2FnZTpzdHJpbmcpO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBMb2dnZXIgaW1wbGVtZW50cyBJTG9nZ2VyIHtcclxuICAgIHByaXZhdGUgX2RlYnVnOiBib29sZWFuO1xyXG4gICAgcHJpdmF0ZSBfYyA9IHtcclxuICAgICAgICB3YXJuOiAobTogc3RyaW5nKSA9PiB7fSxcclxuICAgICAgICBlcnJvcjogKG06IHN0cmluZykgPT4ge30sXHJcbiAgICAgICAgaW5mbzogKG06IHN0cmluZykgPT4ge30sXHJcbiAgICAgICAgbG9nOiAobTogc3RyaW5nKSA9PiB7fVxyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihkZWJ1ZzogYm9vbGVhbiA9IGZhbHNlKSB7XHJcbiAgICAgICAgaWYgKHR5cGVvZiB3aW5kb3dbJ2NvbnNvbGUnXSA9PT0gJ29iamVjdCcgJiYgZGVidWcpXHJcbiAgICAgICAgICAgIHRoaXMuX2MgPSB3aW5kb3cuY29uc29sZTtcclxuICAgICAgICB0aGlzLl9kZWJ1ZyA9IGRlYnVnO1xyXG4gICAgfVxyXG5cclxuICAgIGxvZyhtZXNzYWdlOiBzdHJpbmcpIHtcclxuICAgICAgICBpZiAodGhpcy5fZGVidWcgJiYgdHlwZW9mIHRoaXMuX2MubG9nID09PSAnZnVuY3Rpb24nKVxyXG4gICAgICAgICAgICB0aGlzLl9jLmxvZyhtZXNzYWdlKTtcclxuICAgIH1cclxuXHJcbiAgICB3YXJuKG1lc3NhZ2U6IHN0cmluZykge1xyXG4gICAgICAgIGlmICh0aGlzLl9kZWJ1ZyAmJiB0eXBlb2YgdGhpcy5fYy53YXJuID09PSAnZnVuY3Rpb24nKVxyXG4gICAgICAgICAgICB0aGlzLl9jLndhcm4obWVzc2FnZSk7XHJcbiAgICB9XHJcblxyXG4gICAgaW5mbyhtZXNzYWdlOiBzdHJpbmcpIHtcclxuICAgICAgICBpZiAodGhpcy5fZGVidWcgJiYgdHlwZW9mIHRoaXMuX2MuaW5mbyA9PT0gJ2Z1bmN0aW9uJylcclxuICAgICAgICAgICAgdGhpcy5fYy5pbmZvKG1lc3NhZ2UpO1xyXG4gICAgfVxyXG5cclxuICAgIGVycm9yKG1lc3NhZ2U6IHN0cmluZykge1xyXG4gICAgICAgIGlmICh0aGlzLl9kZWJ1ZyAmJiB0eXBlb2YgdGhpcy5fYy5lcnJvciA9PT0gJ2Z1bmN0aW9uJylcclxuICAgICAgICAgICAgdGhpcy5fYy5lcnJvcihtZXNzYWdlKTtcclxuICAgIH1cclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy91dGlsL0xvZ2dlci50cyJdLCJzb3VyY2VSb290IjoiIn0=
//# sourceMappingURL=outkit.js.map