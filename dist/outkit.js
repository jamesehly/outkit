/*! Outkit v0.2.6 - Copyright 2017 James Ehly - MIT License */
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
/******/ 	return __webpack_require__(__webpack_require__.s = 12);
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

State.animatedProps = ['style.height', 'style.width', 'style.top', 'style.bottom', 'style.left', 'style.right', 'style.opacity', 'style.zIndex', 'string.marginTop', 'string.marginBottom', 'string.marginLeft', 'string.marginRight', 'string.paddingTop', 'string.paddingBottom', 'string.paddingLeft', 'string.paddingRight'];
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
var outkit_animator_1 = __webpack_require__(13);
var DrawerComponent_1 = __webpack_require__(6);
var OverlayComponent_1 = __webpack_require__(9);
var WindowComponent_1 = __webpack_require__(11);
var DraggableComponent_1 = __webpack_require__(7);
var HorizontalLayoutComponent_1 = __webpack_require__(8);
var VerticalLayoutComponent_1 = __webpack_require__(10);

var ComponentFactory = function () {
    function ComponentFactory() {
        _classCallCheck(this, ComponentFactory);
    }

    _createClass(ComponentFactory, [{
        key: "component",
        value: function component(element) {
            var component = new Component_1.Component(new Logger_1.default(), new outkit_animator_1.OutkitAnimator());
            component.setElement(this.getElement(element));
            return component;
        }
    }, {
        key: "drawer",
        value: function drawer(element) {
            var component = new DrawerComponent_1.DrawerComponent(new Logger_1.default(), new outkit_animator_1.OutkitAnimator());
            var el = this.getElement(element);
            component.setElement(el);
            component.init();
            return component;
        }
    }, {
        key: "overlay",
        value: function overlay(element) {
            var component = new OverlayComponent_1.OverlayComponent(new Logger_1.default(), new outkit_animator_1.OutkitAnimator());
            component.setElement(this.getElement(element));
            component.init();
            return component;
        }
    }, {
        key: "window",
        value: function window(element) {
            var component = new WindowComponent_1.WindowComponent(new Logger_1.default(), new outkit_animator_1.OutkitAnimator());
            component.setElement(this.getElement(element));
            component.init();
            return component;
        }
    }, {
        key: "draggable",
        value: function draggable(element) {
            var component = new DraggableComponent_1.DraggableComponent(new Logger_1.default(), new outkit_animator_1.OutkitAnimator());
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
/* 8 */
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
/* 9 */
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
/* 11 */
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
/* 12 */
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

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

/*! Outkit Animator v1.0.3 - Copyright 2017 James Ehly - MIT License */
(function webpackUniversalModuleDefinition(root, factory) {
	if(true)
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["ok-animator"] = factory();
	else
		root["ok-animator"] = factory();
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
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


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

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function __export(m) {
    for (var p in m) {
        if (!exports.hasOwnProperty(p)) exports[p] = m[p];
    }
}
Object.defineProperty(exports, "__esModule", { value: true });
var common_1 = __webpack_require__(0);

var OutkitAnimator = function () {
    function OutkitAnimator() {
        _classCallCheck(this, OutkitAnimator);

        this.easeOut = this.makeEaseOut(this.easeIn);
        this.easeInOut = this.makeEaseInOut(this.easeIn);
        this.pushOut = this.makeEaseOut(this.pullIn);
        this.pushPull = this.makeEaseInOut(this.pullIn);
        this._duration = 200;
        this._step = function () {};
        this._rate = 16;
        this._transition = this.linear;
    }

    _createClass(OutkitAnimator, [{
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
                case common_1.AnimatorTransition.EaseIn:
                    this._transition = this.easeIn;
                    break;
                case common_1.AnimatorTransition.EaseOut:
                    this._transition = this.easeOut;
                    break;
                case common_1.AnimatorTransition.EaseInOut:
                    this._transition = this.easeInOut;
                    break;
                case common_1.AnimatorTransition.PullIn:
                    this._transition = this.pullIn;
                    break;
                case common_1.AnimatorTransition.PushOut:
                    this._transition = this.pushOut;
                    break;
                case common_1.AnimatorTransition.PushPull:
                    this._transition = this.pushPull;
                    break;
                default:
                    this._transition = this.linear;
                    break;
            }
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

    return OutkitAnimator;
}();

exports.OutkitAnimator = OutkitAnimator;
__export(__webpack_require__(0));

/***/ })
/******/ ]);
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCBiZGZiY2EzMGUzZWNmMzQ0ODM0ZSIsIndlYnBhY2s6Ly8vLi9zcmMvY29tbW9uLnRzIiwid2VicGFjazovLy8uL3NyYy9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87QUNWQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7QUNyREEsSUFRQztBQVJELFdBQThCO0FBQzFCLDJEQUFNO0FBQ04sMkRBQU07QUFDTiw0REFBTztBQUNQLDhEQUFTO0FBQ1QsMkRBQU07QUFDTiw0REFBTztBQUNQLDZEQUNKO0FBQUMsR0FSNkIscUJBQWxCLFFBQWtCLHVCQUFsQixRQUFrQixxQkFRN0IsSzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2hCRCxtQ0FhQTs7O0FBU0k7OztBQW9JUSxhQUFPLFVBQU8sS0FBWSxZQUFLLEtBQVM7QUFFeEMsYUFBUyxZQUFPLEtBQWMsY0FBSyxLQUFTO0FBTTVDLGFBQU8sVUFBTyxLQUFZLFlBQUssS0FBUztBQUV4QyxhQUFRLFdBQU8sS0FBYyxjQUFLLEtBQVM7QUE3STNDLGFBQVUsWUFBTztBQUNqQixhQUFNLFFBQUcsWUFBUSxDQUFFO0FBQ25CLGFBQU0sUUFBTTtBQUNaLGFBQVksY0FBTyxLQUMzQjtBQVNPOzs7O2dDQUFlO0FBQ2QsaUJBQU0sUUFBUTtBQUNaLG1CQUNWO0FBU1c7OztvQ0FBaUI7QUFDcEIsaUJBQVUsWUFBWTtBQUNwQixtQkFDVjtBQVNPOzs7Z0NBQWE7QUFDWixpQkFBTSxRQUFRO0FBQ1osbUJBQ1Y7QUFTYTs7O3NDQUErQjtBQUNqQyxvQkFBYztBQUNqQixxQkFBSyxTQUFrQixtQkFBTztBQUN0Qix5QkFBWSxjQUFPLEtBQVE7QUFDekI7QUFDVixxQkFBSyxTQUFrQixtQkFBUTtBQUN2Qix5QkFBWSxjQUFPLEtBQVM7QUFDMUI7QUFDVixxQkFBSyxTQUFrQixtQkFBVTtBQUN6Qix5QkFBWSxjQUFPLEtBQVc7QUFDNUI7QUFDVixxQkFBSyxTQUFrQixtQkFBTztBQUN0Qix5QkFBWSxjQUFPLEtBQVE7QUFDekI7QUFDVixxQkFBSyxTQUFrQixtQkFBUTtBQUN2Qix5QkFBWSxjQUFPLEtBQVM7QUFDMUI7QUFDVixxQkFBSyxTQUFrQixtQkFBUztBQUN4Qix5QkFBWSxjQUFPLEtBQVU7QUFDM0I7QUFDVjtBQUNRLHlCQUFZLGNBQU8sS0FBUTtBQUV0Qzs7QUFDSyxtQkFDVjtBQVFPOzs7Z0NBQWlCOzs7O0FBQWM7OztBQUM1Qix1QkFBWSxRQUFDLFVBQVE7QUFDcEIsb0JBQUMsT0FBYSxPQUF5Qiw2QkFBZ0IsWUFBRTtBQUN4RCx3QkFBUyxTQUFjLFlBQU87QUFDOUIsd0JBQWdCLGFBQUcsb0JBQUs7QUFDcEIsNEJBQVksV0FBRyxDQUFLLE9BQVMsVUFBTyxNQUFXO0FBQzVDLDRCQUFTLFdBQUssR0FBUyxXQUFLO0FBRy9CLDRCQUFTLFFBQU8sTUFBWSxZQUFVO0FBRWxDLDhCQUFNLE1BQU0sT0FBUTtBQUVyQiw0QkFBUyxXQUFLLEdBQUU7QUFDTSxrREFDekI7QUFBTSwrQkFBRTtBQUNHLG9DQUNYO0FBQ0o7QUFBQztBQUNvQiwwQ0FDekI7QUFBTSx1QkFBRTtBQUNBLDBCQUFVLG1CQUFxQixZQUFDO0FBQ2hDLDRCQUFhLFlBQU8sS0FBTztBQUMzQiw0QkFBYyxhQUFZLFlBQVM7QUFDbkMsNEJBQVksV0FBYSxhQUFPLE1BQVc7QUFFeEMsNEJBQVMsV0FBSyxHQUFTLFdBQUk7QUFFOUIsNEJBQVMsUUFBTyxNQUFZLFlBQVc7QUFFbkMsOEJBQU0sTUFBTSxPQUFRO0FBRXJCLDRCQUFTLFlBQU0sR0FBRTtBQUNILDBDQUFLLE1BQVk7QUFDdkIsb0NBQ1g7QUFDSjtBQUFDLHFCQWZzQixFQWVoQixNQUNYO0FBQ0o7QUFDSixhQXRDVztBQXdDRzs7OytCQUFpQjtBQUNyQixtQkFDVjtBQUVjOzs7K0JBQWlCO0FBQ3JCLG1CQUFLLEtBQUksSUFBUyxVQUM1QjtBQU1jOzs7K0JBQWlCO2dCQUFFLHdFQUFhOztBQUNwQyxtQkFBSyxLQUFJLElBQVMsVUFBTyxNQUFDLENBQUUsSUFBSyxLQUFXLFdBQ3REO0FBTW1COzs7b0NBQWlCO0FBQzFCLG1CQUFDLFVBQTBCO0FBQ3ZCLHVCQUFFLElBQVMsT0FBRSxJQUN2QjtBQUNKO0FBRXFCOzs7c0NBQU87QUFDbEIsbUJBQUMsVUFBa0I7QUFDbEIsb0JBQVMsV0FBTSxJQUNSLE9BQU8sT0FBRSxJQUFZLFlBQzNCLE9BQ00sT0FBQyxDQUFFLElBQVMsT0FBSyxLQUFFLElBQWMsY0FDL0M7QUFDSjtBQUNIOzs7Ozs7QUF2S0QseUJBdUtDO0FBRUQsNkJBQXlCLEkiLCJmaWxlIjoiZGlzdC9vdXRraXQtYW5pbWF0b3IuanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShbXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJvay1hbmltYXRvclwiXSA9IGZhY3RvcnkoKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJvay1hbmltYXRvclwiXSA9IGZhY3RvcnkoKTtcbn0pKHRoaXMsIGZ1bmN0aW9uKCkge1xucmV0dXJuIFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24iLCIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAxKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCBiZGZiY2EzMGUzZWNmMzQ0ODM0ZSIsImV4cG9ydCBpbnRlcmZhY2UgSUFuaW1hdG9yIHtcclxuICAgIGFuaW1hdGUoc3RhcnQ/OiBudW1iZXIsIC4uLmFyZ3MgOiBhbnlbXSk6IFByb21pc2U8Ym9vbGVhbj47XHJcbiAgICBzZXRTdGVwKHN0ZXA6IEZ1bmN0aW9uKTogdGhpcztcclxuICAgIHNldER1cmF0aW9uKGR1cmF0aW9uOiBudW1iZXIpOiB0aGlzO1xyXG4gICAgc2V0UmF0ZShyYXRlOiBudW1iZXIpOiB0aGlzO1xyXG4gICAgc2V0VHJhbnNpdGlvbih0cmFuc2l0aW9uOiBBbmltYXRvclRyYW5zaXRpb24pO1xyXG59XHJcblxyXG5leHBvcnQgZW51bSBBbmltYXRvclRyYW5zaXRpb24ge1xyXG4gICAgTGluZWFyLFxyXG4gICAgRWFzZUluLFxyXG4gICAgRWFzZU91dCxcclxuICAgIEVhc2VJbk91dCxcclxuICAgIFB1bGxJbixcclxuICAgIFB1c2hPdXQsXHJcbiAgICBQdXNoUHVsbFxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21tb24udHMiLCJpbXBvcnQgeyBJQW5pbWF0b3IsIEFuaW1hdG9yVHJhbnNpdGlvbiB9IGZyb20gXCIuL2NvbW1vblwiO1xyXG5cclxuLyoqXHJcbiAqIE91dGtpdCBBbmltYXRvclxyXG4gKiBBIHNpbXBsZSBhbmltYXRvciBjbGFzcyB0aGF0IGhhcyB0aW1pbmcgZnVuY3Rpb25zLiAgSGVhdmlseSBpbnNwaXJlZCBieSB0aGUgXHJcbiAqIGphdmFzY3JpcHQgY2xhc3MgYXQgaHR0cDovL2phdmFzY3JpcHQuaW5mby9qcy1hbmltYXRpb24uICBJZiBhdmFpbGFibGUgaXQgd2lsbFxyXG4gKiB1c2UgcmVxdWVzdEFuaW1hdGlvbkZyYW1lIG9yIGl0IHdpbGwgZmFsbCBiYWNrIHRvIHNldEludGVydmFsLiBBbmltYXRlXHJcbiAqIHJldHVybnMgYSBwcm9taXNlIHNvIHRoYXQgeW91IGNhbiBzdGFjayBhbmltYXRpb25zLlxyXG4gKiBcclxuICogQGV4cG9ydFxyXG4gKiBAY2xhc3MgT3V0a2l0QW5pbWF0b3JcclxuICogQGltcGxlbWVudHMge0lBbmltYXRvcn1cclxuICovXHJcbmV4cG9ydCBjbGFzcyBPdXRraXRBbmltYXRvciBpbXBsZW1lbnRzIElBbmltYXRvciB7XHJcblxyXG4gICAgcHVibGljIHN0YXJ0OiBudW1iZXI7XHJcbiAgICBwcml2YXRlIF9kdXJhdGlvbjogbnVtYmVyO1xyXG4gICAgcHJpdmF0ZSBfc3RlcDogRnVuY3Rpb247XHJcbiAgICBwcml2YXRlIF9pbnRlcnZhbDogbnVtYmVyO1xyXG4gICAgcHJpdmF0ZSBfcmF0ZTogbnVtYmVyO1xyXG4gICAgcHJpdmF0ZSBfdHJhbnNpdGlvbjogRnVuY3Rpb247XHJcblxyXG4gICAgcHVibGljIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHRoaXMuX2R1cmF0aW9uID0gMjAwO1xyXG4gICAgICAgIHRoaXMuX3N0ZXAgPSAoKSA9PiB7IH07XHJcbiAgICAgICAgdGhpcy5fcmF0ZSA9IDE2O1xyXG4gICAgICAgIHRoaXMuX3RyYW5zaXRpb24gPSB0aGlzLmxpbmVhcjtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFNldHMgdGhlIHN0ZXAgZnVuY3Rpb24gY2FsbGVkIGJ5IGFuaW1hdGUgYXQgZWFjaCBpbnRlcnZhbFxyXG4gICAgICogXHJcbiAgICAgKiBAcGFyYW0gc3RlcCBGdW5jdGlvbiB0aGF0IHRha2VzIGEgZGVsdGEgYW5kIGFyZ3NcclxuICAgICAqIEByZXR1cm5zIHt0aGlzfSBcclxuICAgICAqIEBtZW1iZXJvZiBPdXRraXRBbmltYXRvclxyXG4gICAgICovXHJcbiAgICBzZXRTdGVwKHN0ZXA6IEZ1bmN0aW9uKTogdGhpcyB7XHJcbiAgICAgICAgdGhpcy5fc3RlcCA9IHN0ZXA7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBTZXRzIHRoZSB0b3RhbCBkdXJhdGlvbiBvZiB0aGUgYW5pbWF0aW9uXHJcbiAgICAgKiBcclxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBkdXJhdGlvbiBtaWxsaXNlY29uZHMgb2Ygc3BsZW5kaWQgYW5pbWF0aW9uIChkZWZhdWx0OiAyMDBtcylcclxuICAgICAqIEByZXR1cm5zIHt0aGlzfSBcclxuICAgICAqIEBtZW1iZXJvZiBPdXRraXRBbmltYXRvclxyXG4gICAgICovXHJcbiAgICBzZXREdXJhdGlvbihkdXJhdGlvbjogbnVtYmVyKTogdGhpcyB7XHJcbiAgICAgICAgdGhpcy5fZHVyYXRpb24gPSBkdXJhdGlvbjtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFNldCB0aGUgaW50ZXJ2YWwgcmF0ZSBvZiB0aGUgYW5pbWF0aW9uXHJcbiAgICAgKiBcclxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSByYXRlIGludGVydmFsIHJhdGUgaW4gbWlsbGlzZWNvbmRzIChkZWZhdWx0OiAxNm1zKVxyXG4gICAgICogQHJldHVybnMge3RoaXN9IFxyXG4gICAgICogQG1lbWJlcm9mIE91dGtpdEFuaW1hdG9yXHJcbiAgICAgKi9cclxuICAgIHNldFJhdGUocmF0ZTogbnVtYmVyKTogdGhpcyB7XHJcbiAgICAgICAgdGhpcy5fcmF0ZSA9IHJhdGU7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBTZXRzIHRoZSB0aW1pbmcgZnVuY3Rpb24gdXNlZCBieSB0aGUgYW5pbWF0ZSBmdW5jdGlvbiAoZGVmYXVsdDogTGluZWFyKVxyXG4gICAgICogXHJcbiAgICAgKiBAcGFyYW0ge0FuaW1hdG9yVHJhbnNpdGlvbn0gdHJhbnNpdGlvbiBUaW1pbmcgZnVuY3Rpb25cclxuICAgICAqIEByZXR1cm5zIHt0aGlzfSBcclxuICAgICAqIEBtZW1iZXJvZiBPdXRraXRBbmltYXRvclxyXG4gICAgICovXHJcbiAgICBzZXRUcmFuc2l0aW9uKHRyYW5zaXRpb246IEFuaW1hdG9yVHJhbnNpdGlvbik6IHRoaXMge1xyXG4gICAgICAgIHN3aXRjaCAodHJhbnNpdGlvbikge1xyXG4gICAgICAgICAgICBjYXNlIEFuaW1hdG9yVHJhbnNpdGlvbi5FYXNlSW46XHJcbiAgICAgICAgICAgICAgICB0aGlzLl90cmFuc2l0aW9uID0gdGhpcy5lYXNlSW47XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBBbmltYXRvclRyYW5zaXRpb24uRWFzZU91dDpcclxuICAgICAgICAgICAgICAgIHRoaXMuX3RyYW5zaXRpb24gPSB0aGlzLmVhc2VPdXQ7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBBbmltYXRvclRyYW5zaXRpb24uRWFzZUluT3V0OlxyXG4gICAgICAgICAgICAgICAgdGhpcy5fdHJhbnNpdGlvbiA9IHRoaXMuZWFzZUluT3V0O1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgQW5pbWF0b3JUcmFuc2l0aW9uLlB1bGxJbjpcclxuICAgICAgICAgICAgICAgIHRoaXMuX3RyYW5zaXRpb24gPSB0aGlzLnB1bGxJbjtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIEFuaW1hdG9yVHJhbnNpdGlvbi5QdXNoT3V0OlxyXG4gICAgICAgICAgICAgICAgdGhpcy5fdHJhbnNpdGlvbiA9IHRoaXMucHVzaE91dDtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIEFuaW1hdG9yVHJhbnNpdGlvbi5QdXNoUHVsbDpcclxuICAgICAgICAgICAgICAgIHRoaXMuX3RyYW5zaXRpb24gPSB0aGlzLnB1c2hQdWxsO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICB0aGlzLl90cmFuc2l0aW9uID0gdGhpcy5saW5lYXI7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBBbmltYXRlcyB0aGUgJ3N0ZXAnIGZ1bmN0aW9uIG92ZXIgJ2R1cmF0aW9uJyBhdCBpbnRlcnZhbCAncmF0ZScuIFxyXG4gICAgICogU3RlcCBpcyBjYWxsZWQgd2l0aCBkZWx0YSB0aW1lIGFuZCBhbnkgYXJndW1lbnRzIHRoYXQgeW91IHBhc3MgdG8gdGhlIFxyXG4gICAgICogYW5pbWF0ZSBmdW5jdGlvbi5cclxuICAgICAqIEBwYXJhbSBzdGFydCBhIGRhdGUgKG1haW5seSB1c2VkIGZvciB0ZXN0aW5nKVxyXG4gICAgICovXHJcbiAgICBhbmltYXRlKHN0YXJ0PzogbnVtYmVyLCAuLi5hcmdzOiBhbnlbXSk6IFByb21pc2U8Ym9vbGVhbj4ge1xyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xyXG4gICAgICAgICAgICBpZiAodHlwZW9mIHdpbmRvd1sncmVxdWVzdEFuaW1hdGlvbkZyYW1lJ10gPT09ICdmdW5jdGlvbicpIHtcclxuICAgICAgICAgICAgICAgIGxldCBzdGFydCA9IHBlcmZvcm1hbmNlLm5vdygpO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgcmFmQW5pbWF0ZSA9ICh0aW1lKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHByb2dyZXNzID0gKHRpbWUgLSBzdGFydCkgLyB0aGlzLl9kdXJhdGlvbjtcclxuICAgICAgICAgICAgICAgICAgICBpZiAocHJvZ3Jlc3MgPiAxKSBwcm9ncmVzcyA9IDE7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC8vIGNhbGN1bGF0ZSB0aGUgY3VycmVudCBhbmltYXRpb24gc3RhdGVcclxuICAgICAgICAgICAgICAgICAgICBsZXQgZGVsdGEgPSB0aGlzLl90cmFuc2l0aW9uKHByb2dyZXNzKVxyXG5cclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9zdGVwKGRlbHRhLCBhcmdzKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHByb2dyZXNzIDwgMSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUocmFmQW5pbWF0ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZSh0cnVlKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUocmFmQW5pbWF0ZSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9pbnRlcnZhbCA9IHdpbmRvdy5zZXRJbnRlcnZhbCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGRlbHRhVGltZSA9IERhdGUubm93KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHRpbWVQYXNzZWQgPSBkZWx0YVRpbWUgLSBzdGFydDtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgcHJvZ3Jlc3MgPSB0aW1lUGFzc2VkIC8gdGhpcy5fZHVyYXRpb247XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChwcm9ncmVzcyA+IDEpIHByb2dyZXNzID0gMVxyXG5cclxuICAgICAgICAgICAgICAgICAgICB2YXIgZGVsdGEgPSB0aGlzLl90cmFuc2l0aW9uKHByb2dyZXNzKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fc3RlcChkZWx0YSwgYXJncyk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChwcm9ncmVzcyA9PSAxKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwodGhpcy5faW50ZXJ2YWwpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHRydWUpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0sIHRoaXMuX3JhdGUpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgbGluZWFyKHByb2dyZXNzOiBudW1iZXIpIHtcclxuICAgICAgICByZXR1cm4gcHJvZ3Jlc3M7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBlYXNlSW4ocHJvZ3Jlc3M6IG51bWJlcikge1xyXG4gICAgICAgIHJldHVybiBNYXRoLnBvdyhwcm9ncmVzcywgNSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBlYXNlT3V0ID0gdGhpcy5tYWtlRWFzZU91dCh0aGlzLmVhc2VJbik7XHJcblxyXG4gICAgcHJpdmF0ZSBlYXNlSW5PdXQgPSB0aGlzLm1ha2VFYXNlSW5PdXQodGhpcy5lYXNlSW4pO1xyXG5cclxuICAgIHByaXZhdGUgcHVsbEluKHByb2dyZXNzOiBudW1iZXIsIHg6IG51bWJlciA9IDIpIHtcclxuICAgICAgICByZXR1cm4gTWF0aC5wb3cocHJvZ3Jlc3MsIDIpICogKCh4ICsgMSkgKiBwcm9ncmVzcyAtIHgpXHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBwdXNoT3V0ID0gdGhpcy5tYWtlRWFzZU91dCh0aGlzLnB1bGxJbik7XHJcblxyXG4gICAgcHJpdmF0ZSBwdXNoUHVsbCA9IHRoaXMubWFrZUVhc2VJbk91dCh0aGlzLnB1bGxJbik7XHJcblxyXG4gICAgcHJpdmF0ZSBtYWtlRWFzZU91dCh0aW1pbmc6IEZ1bmN0aW9uKSB7XHJcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uIChwcm9ncmVzczogbnVtYmVyKSB7XHJcbiAgICAgICAgICAgIHJldHVybiAxIC0gdGltaW5nKDEgLSBwcm9ncmVzcyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgbWFrZUVhc2VJbk91dCh0aW1pbmcpIHtcclxuICAgICAgICByZXR1cm4gZnVuY3Rpb24gKHByb2dyZXNzKSB7XHJcbiAgICAgICAgICAgIGlmIChwcm9ncmVzcyA8IC41KVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRpbWluZygyICogcHJvZ3Jlc3MpIC8gMjtcclxuICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuICgyIC0gdGltaW5nKDIgKiAoMSAtIHByb2dyZXNzKSkpIC8gMjtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCAqIGZyb20gJy4vY29tbW9uJztcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvaW5kZXgudHMiXSwic291cmNlUm9vdCI6IiJ9
//# sourceMappingURL=outkit-animator.js.map

/***/ })
/******/ ]);
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCA0ZjE1YzIxMzU2NDU0NjhiZDNlZiIsIndlYnBhY2s6Ly8vLi9zcmMvc3RhdGUvU3RhdGUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudC9Db21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudC9Db21wb3NpdGUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudC9Db21wb25lbnRGYWN0b3J5LnRzIiwid2VicGFjazovLy8uL3NyYy91dGlsL0VsZW1lbnRIZWxwZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWwvTG9nZ2VyLnRzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnQvRHJhd2VyQ29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnQvRHJhZ2dhYmxlQ29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnQvSG9yaXpvbnRhbExheW91dENvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50L092ZXJsYXlDb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudC9WZXJ0aWNhbExheW91dENvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50L1dpbmRvd0NvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvb3V0a2l0LnRzIiwid2VicGFjazovLy8uL34vb3V0a2l0LWFuaW1hdG9yL2Rpc3Qvb3V0a2l0LWFuaW1hdG9yLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsTztBQ1ZBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7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bUU7QUFDbkU7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQSxDQUFDOztBQUVEO0FBQ0E7O0FBRUEsT0FBTztBQUNQO0FBQ0EsQ0FBQztBQUNELDJDQUEyQyxjQUFjO0FBQ3pELDJDIiwiZmlsZSI6ImRpc3Qvb3V0a2l0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoW10sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wib3V0a2l0XCJdID0gZmFjdG9yeSgpO1xuXHRlbHNlXG5cdFx0cm9vdFtcIm91dGtpdFwiXSA9IGZhY3RvcnkoKTtcbn0pKHRoaXMsIGZ1bmN0aW9uKCkge1xucmV0dXJuIFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24iLCIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBpZGVudGl0eSBmdW5jdGlvbiBmb3IgY2FsbGluZyBoYXJtb255IGltcG9ydHMgd2l0aCB0aGUgY29ycmVjdCBjb250ZXh0XG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmkgPSBmdW5jdGlvbih2YWx1ZSkgeyByZXR1cm4gdmFsdWU7IH07XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDEyKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCA0ZjE1YzIxMzU2NDU0NjhiZDNlZiIsImV4cG9ydCBjbGFzcyBTdGF0ZSB7XHJcbiAgICAvLyBwb3NzaWJseSByZWZhY3RvciB0aGVzZSBjbGFzc2VzIGludG8gYW4gYXJyYXkgb2YgY2xhc3NlcyB0aGF0IGFyZSBtYW5hZ2VkXHJcbiAgICAvLyB2aWEgbWV0aG9kcyBpbiB0aGlzIGNsYXNzXHJcbiAgICBva0NsYXNzTmFtZT86IHN0cmluZztcclxuICAgIHN0YXRlQ2xhc3NOYW1lPzogc3RyaW5nO1xyXG4gICAgc3R5bGU/OiB7XHJcbiAgICAgICAgaGVpZ2h0Pzogc3RyaW5nO1xyXG4gICAgICAgIHdpZHRoPzogc3RyaW5nO1xyXG4gICAgICAgIG92ZXJmbG93Pzogc3RyaW5nO1xyXG4gICAgICAgIGZsb2F0Pzogc3RyaW5nO1xyXG4gICAgICAgIHBvc2l0aW9uPzogc3RyaW5nO1xyXG4gICAgICAgIHpJbmRleD86IHN0cmluZztcclxuICAgICAgICB0b3A/OiBzdHJpbmc7XHJcbiAgICAgICAgYm90dG9tPzogc3RyaW5nO1xyXG4gICAgICAgIGxlZnQ/OiBzdHJpbmc7XHJcbiAgICAgICAgcmlnaHQ/OiBzdHJpbmc7XHJcbiAgICAgICAgZGlzcGxheT86IHN0cmluZztcclxuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I/OiBzdHJpbmc7XHJcbiAgICAgICAgb3BhY2l0eT86IHN0cmluZztcclxuICAgICAgICBtYXJnaW5Ub3A/OiBzdHJpbmc7XHJcbiAgICAgICAgbWFyZ2luQm90dG9tPzogc3RyaW5nO1xyXG4gICAgICAgIG1hcmdpbkxlZnQ/OiBzdHJpbmc7XHJcbiAgICAgICAgbWFyZ2luUmlnaHQ/OiBzdHJpbmc7XHJcbiAgICAgICAgcGFkZGluZ1RvcD86IHN0cmluZztcclxuICAgICAgICBwYWRkaW5nQm90dG9tPzogc3RyaW5nO1xyXG4gICAgICAgIHBhZGRpbmdMZWZ0Pzogc3RyaW5nO1xyXG4gICAgICAgIHBhZGRpbmdSaWdodD86IHN0cmluZztcclxuICAgIH1cclxuICAgIHN0YXRpYyByZWFkb25seSBhbmltYXRlZFByb3BzOiBBcnJheTxzdHJpbmc+ID0gW1xyXG4gICAgICAgICdzdHlsZS5oZWlnaHQnLCBcclxuICAgICAgICAnc3R5bGUud2lkdGgnLCBcclxuICAgICAgICAnc3R5bGUudG9wJywgXHJcbiAgICAgICAgJ3N0eWxlLmJvdHRvbScsIFxyXG4gICAgICAgICdzdHlsZS5sZWZ0JywgXHJcbiAgICAgICAgJ3N0eWxlLnJpZ2h0JywgXHJcbiAgICAgICAgJ3N0eWxlLm9wYWNpdHknLCBcclxuICAgICAgICAnc3R5bGUuekluZGV4JyxcclxuICAgICAgICAnc3RyaW5nLm1hcmdpblRvcCcsXHJcbiAgICAgICAgJ3N0cmluZy5tYXJnaW5Cb3R0b20nLFxyXG4gICAgICAgICdzdHJpbmcubWFyZ2luTGVmdCcsXHJcbiAgICAgICAgJ3N0cmluZy5tYXJnaW5SaWdodCcsIFxyXG4gICAgICAgICdzdHJpbmcucGFkZGluZ1RvcCcsXHJcbiAgICAgICAgJ3N0cmluZy5wYWRkaW5nQm90dG9tJyxcclxuICAgICAgICAnc3RyaW5nLnBhZGRpbmdMZWZ0JyxcclxuICAgICAgICAnc3RyaW5nLnBhZGRpbmdSaWdodCcsXHJcbiAgICAgICAgXTtcclxuICAgIFxyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgdGhpcy5va0NsYXNzTmFtZSA9ICcnO1xyXG4gICAgICAgIHRoaXMuc3RhdGVDbGFzc05hbWUgPSAnJztcclxuICAgICAgICB0aGlzLnN0eWxlID0ge307XHJcbiAgICAgICAgfVxyXG5cclxuICAgIHN0YXRpYyBhbmltYXRlZCh0eXBlOiBzdHJpbmcpIHtcclxuICAgICAgICB2YXIgaW5kZXggPSB0aGlzLmFuaW1hdGVkUHJvcHMuaW5kZXhPZih0eXBlKTtcclxuICAgICAgICByZXR1cm4gaW5kZXggPj0gMDtcclxuICAgIH0gXHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3N0YXRlL1N0YXRlLnRzIiwiaW1wb3J0IHsgSUFuaW1hdG9yIH0gZnJvbSAnb3V0a2l0LWFuaW1hdG9yJztcclxuaW1wb3J0IHsgSUxvZ2dlciB9IGZyb20gXCIuLi91dGlsL0xvZ2dlclwiO1xyXG5pbXBvcnQgeyBTdGF0ZSB9IGZyb20gXCIuLi9zdGF0ZS9TdGF0ZVwiO1xyXG5pbXBvcnQgRWxlbWVudEhlbHBlciBmcm9tIFwiLi4vdXRpbC9FbGVtZW50SGVscGVyXCI7XHJcblxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBJQ29tcG9uZW50IHtcclxuICAgIHJlbGF5KG1lc3NhZ2U6IHN0cmluZyk6IFByb21pc2U8YW55PjtcclxuICAgIHJlZ2lzdGVyRXZlbnQobmFtZTogc3RyaW5nLCBmdW5jPzogRnVuY3Rpb24pOiB0aGlzO1xyXG4gICAgc2V0RWxlbWVudChlbGVtZW50OiBIVE1MRWxlbWVudCk6IHRoaXM7XHJcbiAgICBnZXRFbGVtZW50KCk6IEhUTUxFbGVtZW50O1xyXG4gICAgZ2V0QW5pbWF0b3IoKTogSUFuaW1hdG9yO1xyXG4gICAgYWRkQ2hpbGQoY29tcG9uZW50OiBJQ29tcG9uZW50KTogdGhpcztcclxuICAgIHJlbW92ZUNoaWxkKGNvbXBvbmVudDogSUNvbXBvbmVudCk6IHRoaXM7XHJcbiAgICBnZXRDaGlsZCgpOiBJQ29tcG9uZW50O1xyXG4gICAgZ2V0Um9vdCgpOiBJQ29tcG9uZW50O1xyXG4gICAgc2V0UGFyZW50KHBhcmVudDogSUNvbXBvbmVudCk6IHRoaXM7XHJcbiAgICByZW5kZXIobmV3U3RhdGU6IFN0YXRlKTogUHJvbWlzZTxhbnk+O1xyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgQ29tcG9uZW50IGltcGxlbWVudHMgSUNvbXBvbmVudCB7XHJcblxyXG4gICAgcHJpdmF0ZSBfZWxlbWVudDogSFRNTEVsZW1lbnQ7XHJcbiAgICBwcml2YXRlIF9jaGlsZDogSUNvbXBvbmVudDtcclxuICAgIHByaXZhdGUgX3BhcmVudDogSUNvbXBvbmVudDtcclxuXHJcbiAgICBwcm90ZWN0ZWQgX2xvZ2dlcjogSUxvZ2dlcjtcclxuICAgIHByb3RlY3RlZCBfYW5pbWF0b3I6IElBbmltYXRvcjtcclxuICAgIHByb3RlY3RlZCBfZXZlbnRzOiB7IFtpZDogc3RyaW5nXTogRnVuY3Rpb24gfTtcclxuICAgIHByb3RlY3RlZCBfc3RhdGU6IFN0YXRlO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKGxvZ2dlcjogSUxvZ2dlciwgYW5pbWF0b3I/OiBJQW5pbWF0b3IpIHtcclxuICAgICAgICB0aGlzLl9ldmVudHMgPSB7fTtcclxuICAgICAgICB0aGlzLl9sb2dnZXIgPSBsb2dnZXI7XHJcbiAgICAgICAgdGhpcy5fYW5pbWF0b3IgPSBhbmltYXRvcjtcclxuICAgICAgICB0aGlzLl9zdGF0ZSA9IG51bGw7XHJcbiAgICAgICAgaWYgKHR5cGVvZiB0aGlzLl9hbmltYXRvciAhPT0gJ3VuZGVmaW5lZCcgJiYgXHJcbiAgICAgICAgICAgIHRoaXMuX2FuaW1hdG9yICE9PSBudWxsICYmXHJcbiAgICAgICAgICAgIHR5cGVvZiB0aGlzLl9hbmltYXRvci5zZXRTdGVwICE9PSAndW5kZWZpbmVkJyAmJlxyXG4gICAgICAgICAgICB0eXBlb2YgdGhpcy5fYW5pbWF0b3Iuc2V0U3RlcCA9PT0gJ2Z1bmN0aW9uJykge1xyXG4gICAgICAgICAgICB0aGlzLl9hbmltYXRvci5zZXRTdGVwKHRoaXMuc3RlcCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGdldEVsZW1lbnQoKTogSFRNTEVsZW1lbnQge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9lbGVtZW50O1xyXG4gICAgfVxyXG5cclxuICAgIHNldEVsZW1lbnQoZWxlbWVudDogSFRNTEVsZW1lbnQpOiB0aGlzIHtcclxuICAgICAgICB0aGlzLl9lbGVtZW50ID0gZWxlbWVudDtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuXHJcbiAgICBnZXRBbmltYXRvcigpOiBJQW5pbWF0b3Ige1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9hbmltYXRvcjtcclxuICAgIH1cclxuXHJcbiAgICBhZGRDaGlsZChjb21wb25lbnQ6IElDb21wb25lbnQpOiB0aGlzIHtcclxuICAgICAgICB0aGlzLl9jaGlsZCA9IGNvbXBvbmVudDtcclxuICAgICAgICBjb21wb25lbnQuc2V0UGFyZW50KHRoaXMpO1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbW92ZUNoaWxkKGNvbXBvbmVudDogSUNvbXBvbmVudCk6IHRoaXMge1xyXG4gICAgICAgIHRoaXMuX2NoaWxkID0gbnVsbDtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuXHJcbiAgICBnZXRDaGlsZCgpOiBJQ29tcG9uZW50IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fY2hpbGQ7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0UGFyZW50KHBhcmVudDogSUNvbXBvbmVudCkge1xyXG4gICAgICAgIHRoaXMuX3BhcmVudCA9IHBhcmVudDtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuXHJcbiAgICBnZXRSb290KCk6IElDb21wb25lbnQge1xyXG4gICAgICAgIGlmICh0aGlzLl9wYXJlbnQgJiYgdHlwZW9mIHRoaXMuX3BhcmVudFsnZ2V0Um9vdCddID09PSAnZnVuY3Rpb24nKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9wYXJlbnQuZ2V0Um9vdCgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuXHJcbiAgICBnZXRTdGF0ZSgpOiBTdGF0ZSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3N0YXRlO1xyXG4gICAgfVxyXG5cclxuICAgIHNldFN0YXRlKHN0YXRlOiBTdGF0ZSk6IHRoaXMge1xyXG4gICAgICAgIHRoaXMuX3N0YXRlID0gc3RhdGU7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgcmVnaXN0ZXJFdmVudChuYW1lOiBzdHJpbmcsIGZ1bmM/OiBGdW5jdGlvbik6IHRoaXMge1xyXG4gICAgICAgIHRoaXMuX2V2ZW50c1tuYW1lXSA9IGZ1bmM7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgcmVsYXkobWVzc2FnZTogc3RyaW5nKTogUHJvbWlzZTxhbnk+IHtcclxuICAgICAgICBsZXQgcHJvbWlzZXMgPSBbXVxyXG4gICAgICAgIGlmICh0eXBlb2YgdGhpcy5fZXZlbnRzW21lc3NhZ2VdID09PSAnZnVuY3Rpb24nKVxyXG4gICAgICAgICAgICBwcm9taXNlcy5wdXNoKHRoaXMuX2V2ZW50c1ttZXNzYWdlXSgpKTtcclxuXHJcbiAgICAgICAgbGV0IGNoaWxkID0gdGhpcy5nZXRDaGlsZCgpO1xyXG4gICAgICAgIGlmICh0eXBlb2YgY2hpbGQgPT09ICdvYmplY3QnICYmIHR5cGVvZiBjaGlsZFsncmVsYXknXSA9PT0gJ2Z1bmN0aW9uJylcclxuICAgICAgICAgICAgcHJvbWlzZXMucHVzaCh0aGlzLmdldENoaWxkKCkucmVsYXkobWVzc2FnZSkpO1xyXG4gICAgICAgIHJldHVybiBQcm9taXNlLmFsbChwcm9taXNlcyk7XHJcbiAgICB9XHJcblxyXG4gICAgbWVyZ2UobmV3U3RhdGUsIG9sZFN0YXRlKSB7XHJcbiAgICAgICAgbGV0IHN0YXRlID0gbmV3IFN0YXRlKCk7XHJcbiAgICAgICAgc3RhdGUgPSBPYmplY3QuYXNzaWduKHN0YXRlLCBvbGRTdGF0ZSwgbmV3U3RhdGUpO1xyXG4gICAgICAgIHN0YXRlLnN0eWxlID0gT2JqZWN0LmFzc2lnbih7fSwgb2xkU3RhdGUuc3R5bGUsIG5ld1N0YXRlLnN0eWxlKTtcclxuICAgICAgICByZXR1cm4gc3RhdGU7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBEcmF3IHRoZSBjdXJyZW50IHN0YXRlIG9udG8gdGhlIGVsZW1lbnQsIG9ubHkgY2hhbmdpbmcgdGhlIGl0ZW1zIHRoYXQgaGF2ZVxyXG4gICAgICogY2hhbmdlZCBzaW5jZSB0aGUgbGFzdCBkcmF3LlxyXG4gICAgICogQHJldHVybnMge1Byb21pc2U8U3RhdGU+fVxyXG4gICAgICogQG1lbWJlcm9mIENvbXBvbmVudFxyXG4gICAgICovXHJcbiAgICByZW5kZXIobmV3U3RhdGU6IFN0YXRlKTogUHJvbWlzZTxTdGF0ZT4ge1xyXG4gICAgICAgIGxldCBvbGRTdGF0ZSA9IHRoaXMuX3N0YXRlO1xyXG4gICAgICAgIGxldCBpc0luaXRpYWwgPSBmYWxzZTtcclxuICAgICAgICBpZiAoIXRoaXMuX3N0YXRlKSB7XHJcbiAgICAgICAgICAgIG9sZFN0YXRlID0gbmV3IFN0YXRlKCk7XHJcbiAgICAgICAgICAgIGlzSW5pdGlhbCA9IHRydWU7XHJcbiAgICAgICAgICAgIHRoaXMuX2VsZW1lbnQuc3R5bGUuY3NzVGV4dCA9IG51bGw7IC8vIGNsZWFyIGlubGluZSBzdGx5bGVzXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgbmV3U3RhdGUgPSB0aGlzLm1lcmdlKG5ld1N0YXRlLCBvbGRTdGF0ZSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoIXRoaXMuX2VsZW1lbnQpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuX2xvZ2dlci5lcnJvcihgRWxlbWVudCBpcyB1bmRlZmluZWQuICBVc2Ugc2V0RWxlbWVudCgpIGJlZm9yZSBjYWxsaW5nIHJlbmRlcigpLmApXHJcbiAgICAgICAgICAgICAgICByZWplY3Qob2xkU3RhdGUpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAobmV3U3RhdGUuc3RhdGVDbGFzc05hbWUgJiYgbmV3U3RhdGUuc3RhdGVDbGFzc05hbWUgIT0gb2xkU3RhdGUuc3RhdGVDbGFzc05hbWUpIHtcclxuICAgICAgICAgICAgICAgIEVsZW1lbnRIZWxwZXIuY2hhbmdlQ2xhc3ModGhpcy5fZWxlbWVudCwgbmV3U3RhdGUuc3RhdGVDbGFzc05hbWUsIG9sZFN0YXRlLnN0YXRlQ2xhc3NOYW1lKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKG5ld1N0YXRlLm9rQ2xhc3NOYW1lICYmIG5ld1N0YXRlLm9rQ2xhc3NOYW1lICE9IG9sZFN0YXRlLm9rQ2xhc3NOYW1lKSB7XHJcbiAgICAgICAgICAgICAgICBFbGVtZW50SGVscGVyLmNoYW5nZUNsYXNzKHRoaXMuX2VsZW1lbnQsIG5ld1N0YXRlLm9rQ2xhc3NOYW1lLCBvbGRTdGF0ZS5va0NsYXNzTmFtZSk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC8vIExvb3AgdGhyb3VnaCBub24gYW5pbWF0YWJsZSBwcm9wZXJ0aWVzIG9uIHN0eWxlIGFuZCBzZXQgdGhlbVxyXG4gICAgICAgICAgICBmb3IgKGxldCBuYW1lIGluIG5ld1N0YXRlLnN0eWxlKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5fYW5pbWF0b3IgJiYgKFN0YXRlLmFuaW1hdGVkKCdzdHlsZS4nICsgbmFtZSkgJiYgbmV3U3RhdGUuc3R5bGVbbmFtZV0gIT09IG51bGwpICYmICFpc0luaXRpYWwpXHJcbiAgICAgICAgICAgICAgICAgICAgY29udGludWU7XHJcblxyXG4gICAgICAgICAgICAgICAgbGV0IG5zID0gbmV3U3RhdGUuc3R5bGVbbmFtZV07XHJcbiAgICAgICAgICAgICAgICBsZXQgb3MgPSBvbGRTdGF0ZS5zdHlsZVtuYW1lXTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAobnMgPT09IG9zKVxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xyXG5cclxuICAgICAgICAgICAgICAgIHRoaXMuX2VsZW1lbnQuc3R5bGVbbmFtZV0gPSBucztcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLy8gSW5pdGlhbCBzdGF0ZVxyXG4gICAgICAgICAgICBpZiAoaXNJbml0aWFsKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9sb2dnZXIubG9nKGBbSW5pdGlhbCBTdGF0ZV1bIyR7dGhpcy5fZWxlbWVudC5pZH1dOiAgJHtKU09OLnN0cmluZ2lmeShuZXdTdGF0ZSl9IF1gKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuX3N0YXRlID0gbmV3U3RhdGU7XHJcbiAgICAgICAgICAgICAgICByZXNvbHZlKG5ld1N0YXRlKTtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLy8gU3RhcnQgdGhlIGFuaW1hdG9yIHRvIGFuaW1hdGUgYW55IGFuaW1hdGFibGUgcHJvcGVydGllc1xyXG4gICAgICAgICAgICBpZiAodGhpcy5fYW5pbWF0b3IpIHtcclxuICAgICAgICAgICAgICAgIGxldCBuOiBudW1iZXIgPSBEYXRlLm5vdygpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2FuaW1hdG9yLmFuaW1hdGUobiwgbmV3U3RhdGUsIG9sZFN0YXRlKVxyXG4gICAgICAgICAgICAgICAgICAgIC50aGVuKChmaW5pc2hlZCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZmluaXNoZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX2xvZ2dlci5sb2coYFtVcGRhdGVkIFN0YXRlXVsjJHt0aGlzLl9lbGVtZW50LmlkfV06ICAke0pTT04uc3RyaW5naWZ5KG5ld1N0YXRlKX0gXWApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fc3RhdGUgPSBuZXdTdGF0ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUobmV3U3RhdGUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLy8gTm8gYW5pbWF0b3IsIHNvIGp1c3QgcmVzb2x2ZVxyXG4gICAgICAgICAgICB0aGlzLl9zdGF0ZSA9IG5ld1N0YXRlO1xyXG4gICAgICAgICAgICByZXNvbHZlKG5ld1N0YXRlKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RlcCA9IChkZWx0YTogbnVtYmVyLCBhcmdzOiBhbnlbXSkgPT4ge1xyXG4gICAgICAgIC8vIExvb3AgdGhyb3VnaCB2YWx1ZXMgYW5kIG1ha2UgbGl2ZSBjaGFuZ2VzIHRvIGVsZW1lbnRcclxuICAgICAgICB2YXIgbmV3U3RhdGUgPSBhcmdzWzBdO1xyXG4gICAgICAgIHZhciBvbGRTdGF0ZSA9IGFyZ3NbMV07XHJcbiAgICAgICAgZm9yIChsZXQgbmFtZSBpbiBuZXdTdGF0ZS5zdHlsZSkge1xyXG4gICAgICAgICAgICBpZiAoIVN0YXRlLmFuaW1hdGVkKCdzdHlsZS4nICsgbmFtZSkpXHJcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcclxuXHJcbiAgICAgICAgICAgIGxldCBucyA9IG5ld1N0YXRlLnN0eWxlW25hbWVdO1xyXG4gICAgICAgICAgICBsZXQgb3MgPSBvbGRTdGF0ZS5zdHlsZVtuYW1lXTtcclxuXHJcbiAgICAgICAgICAgIGlmIChucyA9PT0gb3MpXHJcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcclxuXHJcbiAgICAgICAgICAgIGxldCBuc3YgPSBwYXJzZUZsb2F0KG5zKTtcclxuICAgICAgICAgICAgbGV0IG9zdiA9IHBhcnNlRmxvYXQob3MpO1xyXG5cclxuICAgICAgICAgICAgaWYgKGlzRmluaXRlKG5zdikgJiYgaXNGaW5pdGUob3N2KSkge1xyXG4gICAgICAgICAgICAgICAgbGV0IHZhbHVlID0gKG5zdiAtIG9zdikgKiBkZWx0YSArIG9zdiArICcnO1xyXG4gICAgICAgICAgICAgICAgaWYgKCghaXNGaW5pdGUobnMpICYmIG5zLm1hdGNoKC9weCQvKSkgfHwgKCFpc0Zpbml0ZShvcykgJiYgb3MubWF0Y2goL3B4JC8pKSkgXHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWUgPSBgJHt2YWx1ZX1weGA7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9lbGVtZW50LnN0eWxlW25hbWVdID0gdmFsdWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21wb25lbnQvQ29tcG9uZW50LnRzIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBJQ29tcG9uZW50IH0gZnJvbSBcIi4vQ29tcG9uZW50XCI7XHJcbmltcG9ydCB7IElMb2dnZXIgfSBmcm9tIFwiLi4vdXRpbC9Mb2dnZXJcIjtcclxuaW1wb3J0IHsgSUFuaW1hdG9yIH0gZnJvbSAnb3V0a2l0LWFuaW1hdG9yJztcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSUNvbXBvc2l0ZSBleHRlbmRzIElDb21wb25lbnQge1xyXG4gICAgZ2V0Q2hpbGRyZW4oKTogQXJyYXk8SUNvbXBvbmVudD5cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIENvbXBvc2l0ZSBleHRlbmRzIENvbXBvbmVudCBpbXBsZW1lbnRzIElDb21wb3NpdGUge1xyXG5cclxuICAgIHByaXZhdGUgX2xpc3Q6IEFycmF5PElDb21wb25lbnQ+O1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKGxvZ2dlcj86IElMb2dnZXIsIGFuaW1hdG9yPzogSUFuaW1hdG9yKSB7XHJcbiAgICAgICAgc3VwZXIobG9nZ2VyLCBhbmltYXRvcik7XHJcbiAgICAgICAgdGhpcy5fbGlzdCA9IFtdO1xyXG4gICAgfVxyXG5cclxuICAgIGFkZENoaWxkKGNvbXBvbmVudDogSUNvbXBvbmVudCk6IHRoaXMge1xyXG4gICAgICAgIHRoaXMuX2xpc3QucHVzaChjb21wb25lbnQpO1xyXG4gICAgICAgIGNvbXBvbmVudC5zZXRQYXJlbnQodGhpcyk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgcmVtb3ZlQ2hpbGQoY29tcG9uZW50OiBJQ29tcG9uZW50KTogdGhpcyB7XHJcbiAgICAgICAgbGV0IGluZGV4ID0gdGhpcy5fbGlzdC5pbmRleE9mKGNvbXBvbmVudCk7XHJcbiAgICAgICAgdGhpcy5fbGlzdC5zcGxpY2UoaW5kZXgsIDEpO1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG5cclxuICAgIGdldENoaWxkKCk6IElDb21wb25lbnQge1xyXG4gICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG5cclxuICAgIGdldENoaWxkcmVuKCk6IElDb21wb25lbnRbXSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2xpc3Q7XHJcbiAgICB9XHJcblxyXG4gICAgcmVsYXkobWVzc2FnZTogc3RyaW5nKTogUHJvbWlzZTxhbnk+IHtcclxuICAgICAgICB2YXIgcHJvbWlzZXMgPSBbXTtcclxuICAgICAgICBpZiAodHlwZW9mIHRoaXMuX2V2ZW50c1ttZXNzYWdlXSA9PT0gJ2Z1bmN0aW9uJylcclxuICAgICAgICAgICAgcHJvbWlzZXMucHVzaCh0aGlzLl9ldmVudHNbbWVzc2FnZV0oKSk7XHJcblxyXG4gICAgICAgIGZvciAobGV0IGNoaWxkIG9mIHRoaXMuX2xpc3QpIHtcclxuICAgICAgICAgICAgaWYgKHR5cGVvZiBjaGlsZCA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIGNoaWxkWydyZWxheSddID09PSAnZnVuY3Rpb24nKVxyXG4gICAgICAgICAgICAgICAgcHJvbWlzZXMucHVzaChjaGlsZC5yZWxheShtZXNzYWdlKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBQcm9taXNlLmFsbChwcm9taXNlcyk7XHJcbiAgICB9XHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tcG9uZW50L0NvbXBvc2l0ZS50cyIsImltcG9ydCB7IENvbXBvbmVudCwgSUNvbXBvbmVudCB9IGZyb20gXCIuL0NvbXBvbmVudFwiO1xyXG5pbXBvcnQgTG9nZ2VyIGZyb20gXCIuLi91dGlsL0xvZ2dlclwiO1xyXG5pbXBvcnQgeyBPdXRraXRBbmltYXRvciB9IGZyb20gJ291dGtpdC1hbmltYXRvcic7XHJcbmltcG9ydCB7IERyYXdlckNvbXBvbmVudCB9IGZyb20gXCIuL0RyYXdlckNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBPdmVybGF5Q29tcG9uZW50IH0gZnJvbSBcIi4vT3ZlcmxheUNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBXaW5kb3dDb21wb25lbnQgfSBmcm9tIFwiLi9XaW5kb3dDb21wb25lbnRcIjtcclxuaW1wb3J0IHsgRHJhZ2dhYmxlQ29tcG9uZW50IH0gZnJvbSBcIi4vRHJhZ2dhYmxlQ29tcG9uZW50XCI7XHJcbmltcG9ydCB7IEhvcml6b250YWxMYXlvdXRDb21wb25lbnQgfSBmcm9tIFwiLi9Ib3Jpem9udGFsTGF5b3V0Q29tcG9uZW50XCI7XHJcbmltcG9ydCB7IFZlcnRpY2FsTGF5b3V0Q29tcG9uZW50IH0gZnJvbSBcIi4vVmVydGljYWxMYXlvdXRDb21wb25lbnRcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBDb21wb25lbnRGYWN0b3J5IHtcclxuXHJcbiAgICBjb21wb25lbnQoZWxlbWVudDogc3RyaW5nKTogSUNvbXBvbmVudCB7XHJcbiAgICAgICAgbGV0IGNvbXBvbmVudCA9IG5ldyBDb21wb25lbnQobmV3IExvZ2dlcigpLCBuZXcgT3V0a2l0QW5pbWF0b3IoKSlcclxuICAgICAgICBjb21wb25lbnQuc2V0RWxlbWVudCh0aGlzLmdldEVsZW1lbnQoZWxlbWVudCkpO1xyXG4gICAgICAgIHJldHVybiBjb21wb25lbnQ7XHJcbiAgICB9XHJcblxyXG4gICAgZHJhd2VyKGVsZW1lbnQ6IHN0cmluZyk6IElDb21wb25lbnQge1xyXG4gICAgICAgIGxldCBjb21wb25lbnQgPSBuZXcgRHJhd2VyQ29tcG9uZW50KG5ldyBMb2dnZXIoKSwgbmV3IE91dGtpdEFuaW1hdG9yKCkpO1xyXG4gICAgICAgIGxldCBlbCA9IHRoaXMuZ2V0RWxlbWVudChlbGVtZW50KTtcclxuICAgICAgICBjb21wb25lbnQuc2V0RWxlbWVudChlbCk7XHJcbiAgICAgICAgY29tcG9uZW50LmluaXQoKTtcclxuICAgICAgICByZXR1cm4gY29tcG9uZW50O1xyXG4gICAgfVxyXG5cclxuICAgIC8vIEB0b2RvIGZpZ3VyZSBvdXQgaG93IHRvIGluc2VydCBvcHRpb25zIGludG8gdGhlIGZhY3RvcnkgbWV0aG9kcyB2aWEgb3B0aW9ucyBvYmplY3RcclxuICAgIG92ZXJsYXkoZWxlbWVudDogc3RyaW5nKTogSUNvbXBvbmVudCB7XHJcbiAgICAgICAgbGV0IGNvbXBvbmVudCA9IG5ldyBPdmVybGF5Q29tcG9uZW50KG5ldyBMb2dnZXIoKSwgbmV3IE91dGtpdEFuaW1hdG9yKCkpXHJcbiAgICAgICAgY29tcG9uZW50LnNldEVsZW1lbnQodGhpcy5nZXRFbGVtZW50KGVsZW1lbnQpKTtcclxuICAgICAgICBjb21wb25lbnQuaW5pdCgpO1xyXG4gICAgICAgIHJldHVybiBjb21wb25lbnQ7XHJcbiAgICB9XHJcblxyXG4gICAgd2luZG93KGVsZW1lbnQ6IHN0cmluZyk6IElDb21wb25lbnQge1xyXG4gICAgICAgIGxldCBjb21wb25lbnQgPSBuZXcgV2luZG93Q29tcG9uZW50KG5ldyBMb2dnZXIoKSwgbmV3IE91dGtpdEFuaW1hdG9yKCkpXHJcbiAgICAgICAgY29tcG9uZW50LnNldEVsZW1lbnQodGhpcy5nZXRFbGVtZW50KGVsZW1lbnQpKTtcclxuICAgICAgICBjb21wb25lbnQuaW5pdCgpO1xyXG4gICAgICAgIHJldHVybiBjb21wb25lbnQ7XHJcbiAgICB9XHJcblxyXG4gICAgZHJhZ2dhYmxlKGVsZW1lbnQ6IHN0cmluZyk6IElDb21wb25lbnQge1xyXG4gICAgICAgIGxldCBjb21wb25lbnQgPSBuZXcgRHJhZ2dhYmxlQ29tcG9uZW50KG5ldyBMb2dnZXIoKSwgbmV3IE91dGtpdEFuaW1hdG9yKCkpXHJcbiAgICAgICAgY29tcG9uZW50LnNldEVsZW1lbnQodGhpcy5nZXRFbGVtZW50KGVsZW1lbnQpKTtcclxuICAgICAgICBjb21wb25lbnQuaW5pdCgpO1xyXG4gICAgICAgIHJldHVybiBjb21wb25lbnQ7XHJcbiAgICB9XHJcblxyXG4gICAgaGxheW91dChlbGVtZW50OiBzdHJpbmcpOiBJQ29tcG9uZW50IHtcclxuICAgICAgICBsZXQgY29tcG9uZW50ID0gbmV3IEhvcml6b250YWxMYXlvdXRDb21wb25lbnQobmV3IExvZ2dlcigpKVxyXG4gICAgICAgIGNvbXBvbmVudC5zZXRFbGVtZW50KHRoaXMuZ2V0RWxlbWVudChlbGVtZW50KSk7XHJcbiAgICAgICAgY29tcG9uZW50LmluaXQoKTtcclxuICAgICAgICByZXR1cm4gY29tcG9uZW50O1xyXG4gICAgfVxyXG5cclxuICAgIHZsYXlvdXQoZWxlbWVudDogc3RyaW5nKTogSUNvbXBvbmVudCB7XHJcbiAgICAgICAgbGV0IGNvbXBvbmVudCA9IG5ldyBWZXJ0aWNhbExheW91dENvbXBvbmVudChuZXcgTG9nZ2VyKCkpXHJcbiAgICAgICAgY29tcG9uZW50LnNldEVsZW1lbnQodGhpcy5nZXRFbGVtZW50KGVsZW1lbnQpKTtcclxuICAgICAgICBjb21wb25lbnQuaW5pdCgpO1xyXG4gICAgICAgIHJldHVybiBjb21wb25lbnQ7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBnZXRFbGVtZW50KHF1ZXJ5OiBzdHJpbmcpOiBIVE1MRWxlbWVudCB7XHJcbiAgICAgICAgcmV0dXJuIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwocXVlcnkpWzBdIGFzIEhUTUxFbGVtZW50O1xyXG4gICAgfVxyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbXBvbmVudC9Db21wb25lbnRGYWN0b3J5LnRzIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgRWxlbWVudEhlbHBlciB7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBDaGFuZ2VzIGFuIGVsZW1lbnRzIGNsYXNzIGJ5IGFkZGluZyB0aGUgXCJhZGRDbGFzc1wiIHN0cmluZyBhbmQvb3JcclxuICAgICAqIHJlbW92aW5nIHRoZSBcInJlbW92ZUNsYXNzXCIgc3RyaW5nXHJcbiAgICAgKiBcclxuICAgICAqIEBzdGF0aWNcclxuICAgICAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGVsZW1lbnQgXHJcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gbmV3Q2xhc3MgXHJcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gb2xkQ2xhc3MgXHJcbiAgICAgKiBAbWVtYmVyb2YgRWxlbWVudEtpdFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc3RhdGljIGNoYW5nZUNsYXNzKGVsZW1lbnQ6IEhUTUxFbGVtZW50LCBhZGRDbGFzcz86IHN0cmluZywgcmVtb3ZlQ2xhc3M/OiBzdHJpbmcpOiB2b2lkIHtcclxuICAgICAgICBsZXQgY2xhc3NMaXN0ID0gZWxlbWVudC5jbGFzc05hbWUuc3BsaXQoJyAnKTtcclxuICAgICAgICAvLyBSZW1vdmUgb2xkQ2xhc3NcclxuICAgICAgICBpZihyZW1vdmVDbGFzcykge1xyXG4gICAgICAgICAgICBsZXQgb2xkSW5kZXggPSBjbGFzc0xpc3QuaW5kZXhPZihyZW1vdmVDbGFzcyk7XHJcbiAgICAgICAgICAgIGlmKG9sZEluZGV4ID49IDApIHtcclxuICAgICAgICAgICAgICAgIGNsYXNzTGlzdC5zcGxpY2Uob2xkSW5kZXgsIDEpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIEFkZCBuZXdDbGFzc1xyXG4gICAgICAgIGlmKGFkZENsYXNzKSB7XHJcbiAgICAgICAgICAgIGxldCBuZXdJbmRleCA9IGNsYXNzTGlzdC5pbmRleE9mKGFkZENsYXNzKTtcclxuICAgICAgICAgICAgaWYobmV3SW5kZXggPCAwKSB7XHJcbiAgICAgICAgICAgICAgICBjbGFzc0xpc3QucHVzaChhZGRDbGFzcyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgZWxlbWVudC5jbGFzc05hbWUgPSBjbGFzc0xpc3Quam9pbignICcpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgc2V0R3VpZElkKGVsZW1lbnQ6IEhUTUxFbGVtZW50KSB7XHJcbiAgICAgICAgdmFyIHVuaXF1ZUlkID0gJ29rLWd1aWQtJyArIE1hdGgucmFuZG9tKCkudG9TdHJpbmcoMzYpLnN1YnN0cmluZygyKSArIChuZXcgRGF0ZSgpKS5nZXRUaW1lKCkudG9TdHJpbmcoMzYpO1xyXG4gICAgICAgIGVsZW1lbnQuaWQgPSB1bmlxdWVJZDtcclxuICAgIH1cclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy91dGlsL0VsZW1lbnRIZWxwZXIudHMiLCJleHBvcnQgaW50ZXJmYWNlIElMb2dnZXIge1xyXG4gICAgbG9nKG1lc3NhZ2U6c3RyaW5nKTtcclxuICAgIHdhcm4obWVzc2FnZTpzdHJpbmcpO1xyXG4gICAgaW5mbyhtZXNzYWdlOnN0cmluZyk7XHJcbiAgICBlcnJvcihtZXNzYWdlOnN0cmluZyk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIExvZ2dlciBpbXBsZW1lbnRzIElMb2dnZXIge1xyXG4gICAgcHJpdmF0ZSBfZGVidWc6IGJvb2xlYW47XHJcbiAgICBwcml2YXRlIF9jID0ge1xyXG4gICAgICAgIHdhcm46IChtOiBzdHJpbmcpID0+IHt9LFxyXG4gICAgICAgIGVycm9yOiAobTogc3RyaW5nKSA9PiB7fSxcclxuICAgICAgICBpbmZvOiAobTogc3RyaW5nKSA9PiB7fSxcclxuICAgICAgICBsb2c6IChtOiBzdHJpbmcpID0+IHt9XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKGRlYnVnOiBib29sZWFuID0gZmFsc2UpIHtcclxuICAgICAgICBpZiAodHlwZW9mIHdpbmRvd1snY29uc29sZSddID09PSAnb2JqZWN0JyAmJiBkZWJ1ZylcclxuICAgICAgICAgICAgdGhpcy5fYyA9IHdpbmRvdy5jb25zb2xlO1xyXG4gICAgICAgIHRoaXMuX2RlYnVnID0gZGVidWc7XHJcbiAgICB9XHJcblxyXG4gICAgbG9nKG1lc3NhZ2U6IHN0cmluZykge1xyXG4gICAgICAgIGlmICh0aGlzLl9kZWJ1ZyAmJiB0eXBlb2YgdGhpcy5fYy5sb2cgPT09ICdmdW5jdGlvbicpXHJcbiAgICAgICAgICAgIHRoaXMuX2MubG9nKG1lc3NhZ2UpO1xyXG4gICAgfVxyXG5cclxuICAgIHdhcm4obWVzc2FnZTogc3RyaW5nKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuX2RlYnVnICYmIHR5cGVvZiB0aGlzLl9jLndhcm4gPT09ICdmdW5jdGlvbicpXHJcbiAgICAgICAgICAgIHRoaXMuX2Mud2FybihtZXNzYWdlKTtcclxuICAgIH1cclxuXHJcbiAgICBpbmZvKG1lc3NhZ2U6IHN0cmluZykge1xyXG4gICAgICAgIGlmICh0aGlzLl9kZWJ1ZyAmJiB0eXBlb2YgdGhpcy5fYy5pbmZvID09PSAnZnVuY3Rpb24nKVxyXG4gICAgICAgICAgICB0aGlzLl9jLmluZm8obWVzc2FnZSk7XHJcbiAgICB9XHJcblxyXG4gICAgZXJyb3IobWVzc2FnZTogc3RyaW5nKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuX2RlYnVnICYmIHR5cGVvZiB0aGlzLl9jLmVycm9yID09PSAnZnVuY3Rpb24nKVxyXG4gICAgICAgICAgICB0aGlzLl9jLmVycm9yKG1lc3NhZ2UpO1xyXG4gICAgfVxyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3V0aWwvTG9nZ2VyLnRzIiwiaW1wb3J0IHsgU3RhdGUgfSBmcm9tICcuLi9zdGF0ZS9TdGF0ZSc7XHJcbmltcG9ydCB7IElMb2dnZXIgfSBmcm9tIFwiLi4vdXRpbC9Mb2dnZXJcIjtcclxuaW1wb3J0IHsgSUFuaW1hdG9yIH0gZnJvbSAnb3V0a2l0LWFuaW1hdG9yJztcclxuaW1wb3J0IHsgQ29tcG9zaXRlIH0gZnJvbSBcIi4vQ29tcG9zaXRlXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgRHJhd2VyQ29tcG9uZW50IGV4dGVuZHMgQ29tcG9zaXRlIHtcclxuXHJcbiAgICBwcml2YXRlIF9kb2NrOiBzdHJpbmc7XHJcbiAgICBwcml2YXRlIF9tYXhTaXplOiBudW1iZXI7XHJcbiAgICBwcml2YXRlIF9taW5TaXplOiBudW1iZXI7XHJcbiAgICBwcml2YXRlIF9pc09wZW46IGJvb2xlYW47XHJcbiAgICBwcml2YXRlIF9kb2NrUG9zaXRpb25zOiBzdHJpbmdbXSA9IFsnbGVmdCcsICdyaWdodCcsICd0b3AnLCAnYm90dG9tJ107XHJcblxyXG4gICAgY29uc3RydWN0b3IobG9nZ2VyOiBJTG9nZ2VyLCBhbmltYXRvcj86IElBbmltYXRvcikge1xyXG4gICAgICAgIHN1cGVyKGxvZ2dlciwgYW5pbWF0b3IpO1xyXG5cclxuICAgICAgICAvLyBTZXR1cCBkZWZhdWx0c1xyXG4gICAgICAgIHRoaXMuX2RvY2sgPSAnbGVmdCc7XHJcbiAgICAgICAgdGhpcy5fbWluU2l6ZSA9IDA7XHJcbiAgICAgICAgdGhpcy5fbWF4U2l6ZSA9IDI4MDtcclxuICAgICAgICB0aGlzLl9pc09wZW4gPSBmYWxzZTtcclxuXHJcbiAgICAgICAgLy8gUmVsYXkgZXZlbnRzXHJcbiAgICAgICAgdGhpcy5yZWdpc3RlckV2ZW50KCdvbicsICgpID0+IHsgcmV0dXJuIHRoaXMub24oKSB9KTtcclxuICAgICAgICB0aGlzLnJlZ2lzdGVyRXZlbnQoJ29mZicsICgpID0+IHsgcmV0dXJuIHRoaXMub2ZmKCkgfSk7XHJcbiAgICAgICAgdGhpcy5yZWdpc3RlckV2ZW50KCd0b2dnbGUnLCAoKSA9PiB7IHJldHVybiB0aGlzLnRvZ2dsZSgpIH0pO1xyXG4gICAgICAgIHRoaXMucmVnaXN0ZXJFdmVudCgnaW5pdCcsICgpID0+IHsgcmV0dXJuIHRoaXMuaW5pdCgpIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQ2hhbmdlIHRoZSBkb2NrIHBvc2l0aW9uIG9mIHRoZSBkcmF3ZXIuICBDYWxsaW5nIHRoaXMgZnVuY3Rpb24gcmVzZXRzIHRoZVxyXG4gICAgICogc3RhdGUgYW5kIHJlcG9zaXRpb25zIHRoZSBkcmF3ZXIgaW5zdGFudGx5LlxyXG4gICAgICogXHJcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gZG9jayBcclxuICAgICAqIEByZXR1cm5zIHt0aGlzfSBcclxuICAgICAqIEBtZW1iZXJvZiBEcmF3ZXJDb21wb25lbnRcclxuICAgICAqL1xyXG4gICAgZG9jayhkb2NrOiBzdHJpbmcpOiBQcm9taXNlPFN0YXRlPiB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuX2RvY2tQb3NpdGlvbnMuaW5kZXhPZihkb2NrKSA8IDApIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuX2xvZ2dlci5lcnJvcihgXCIke2RvY2t9XCIgaXMgbm90IGEgdmFsaWQgZG9jayBwb3NpdGlvbi4gIFZhbGlkIHBvc2l0aW9ucyBhcmUgJHt0aGlzLl9kb2NrUG9zaXRpb25zLmpvaW4oJywgJyl9YCk7XHJcbiAgICAgICAgICAgICAgICByZWplY3QoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5yZWxheSgnb2ZmJykudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9kb2NrID0gZG9jaztcclxuICAgICAgICAgICAgICAgIHRoaXMuX3N0YXRlID0gbnVsbDtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmluaXQoKTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIG1pblNpemUobjogbnVtYmVyKTogdGhpcyB7XHJcbiAgICAgICAgaWYgKG4gPCAwKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2xvZ2dlci5lcnJvcihgbWluU2l6ZSBudW1iZXIgbXVzdCBiZSBncmVhdGVyIHRoYW4gb3IgZXF1YWwgdG8gemVyby5gKTtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuX21pblNpemUgPSBuO1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG5cclxuICAgIG1heFNpemUobjogbnVtYmVyKTogdGhpcyB7XHJcbiAgICAgICAgaWYgKG4gPCAwKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2xvZ2dlci5lcnJvcihgbWF4U2l6ZSBudW1iZXIgbXVzdCBiZSBncmVhdGVyIHRoYW4gb3IgZXF1YWwgdG8gemVyby5gKTtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuX21heFNpemUgPSBuO1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogU2V0cyB0aGUgaW5pdGlhbCBzdGF0ZVxyXG4gICAgICogQHJldHVybnMge1Byb21pc2U8U3RhdGU+fSBcclxuICAgICAqL1xyXG4gICAgaW5pdCgpOiBQcm9taXNlPFN0YXRlPiB7XHJcbiAgICAgICAgbGV0IHN0YXRlID0gbmV3IFN0YXRlKCk7XHJcbiAgICAgICAgc3RhdGUub2tDbGFzc05hbWUgPSAnb2stZHJhd2VyJztcclxuICAgICAgICBzdGF0ZS5zdHlsZS5wb3NpdGlvbiA9ICdmaXhlZCc7XHJcbiAgICAgICAgc3RhdGUuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XHJcbiAgICAgICAgc3RhdGUuc3R5bGUuekluZGV4ID0gJzEwMDAwJ1xyXG5cclxuICAgICAgICBpZiAodGhpcy5pc0xlZnQoKSkge1xyXG4gICAgICAgICAgICBzdGF0ZS5zdHlsZS53aWR0aCA9IGAke3RoaXMuX21heFNpemV9cHhgO1xyXG4gICAgICAgICAgICBzdGF0ZS5zdHlsZS5oZWlnaHQgPSBgJHt0aGlzLmdldEVsZW1lbnQoKS5wYXJlbnRFbGVtZW50Lm9mZnNldEhlaWdodH1weGA7XHJcbiAgICAgICAgICAgIHN0YXRlLnN0eWxlLmxlZnQgPSBgLSR7dGhpcy5fbWF4U2l6ZX1weGA7XHJcbiAgICAgICAgICAgIHN0YXRlLnN0eWxlLnRvcCA9ICcwJztcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMuaXNSaWdodCgpKSB7XHJcbiAgICAgICAgICAgIHN0YXRlLnN0eWxlLndpZHRoID0gYCR7dGhpcy5fbWF4U2l6ZX1weGA7XHJcbiAgICAgICAgICAgIHN0YXRlLnN0eWxlLmhlaWdodCA9IGAke3RoaXMuZ2V0RWxlbWVudCgpLnBhcmVudEVsZW1lbnQub2Zmc2V0SGVpZ2h0fXB4YDtcclxuICAgICAgICAgICAgc3RhdGUuc3R5bGUucmlnaHQgPSBgLSR7dGhpcy5fbWF4U2l6ZX1weGA7XHJcbiAgICAgICAgICAgIHN0YXRlLnN0eWxlLnRvcCA9ICcwJztcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMuaXNUb3AoKSkge1xyXG4gICAgICAgICAgICBzdGF0ZS5zdHlsZS53aWR0aCA9IGAke3RoaXMuZ2V0RWxlbWVudCgpLnBhcmVudEVsZW1lbnQub2Zmc2V0V2lkdGh9cHhgO1xyXG4gICAgICAgICAgICBzdGF0ZS5zdHlsZS5oZWlnaHQgPSBgJHt0aGlzLl9tYXhTaXplfXB4YDtcclxuICAgICAgICAgICAgc3RhdGUuc3R5bGUudG9wID0gYC0ke3RoaXMuX21heFNpemV9cHhgO1xyXG4gICAgICAgICAgICBzdGF0ZS5zdHlsZS5sZWZ0ID0gJzAnO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5pc0JvdHRvbSgpKSB7XHJcbiAgICAgICAgICAgIHN0YXRlLnN0eWxlLndpZHRoID0gYCR7dGhpcy5nZXRFbGVtZW50KCkucGFyZW50RWxlbWVudC5vZmZzZXRXaWR0aH1weGA7XHJcbiAgICAgICAgICAgIHN0YXRlLnN0eWxlLmhlaWdodCA9IGAke3RoaXMuX21heFNpemV9cHhgO1xyXG4gICAgICAgICAgICBzdGF0ZS5zdHlsZS5ib3R0b20gPSBgLSR7dGhpcy5fbWF4U2l6ZX1weGA7XHJcbiAgICAgICAgICAgIHN0YXRlLnN0eWxlLmxlZnQgPSAnMCc7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0aGlzLnJlbmRlcihzdGF0ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgdG9nZ2xlKCk6IFByb21pc2U8U3RhdGU+IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5faXNPcGVuID8gdGhpcy5vZmYoKSA6IHRoaXMub24oKTtcclxuICAgIH1cclxuXHJcbiAgICBvbigpOiBQcm9taXNlPFN0YXRlPiB7XHJcbiAgICAgICAgaWYgKHRoaXMuX2lzT3BlbilcclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgICAgICAgICAgIHJlc29sdmUodGhpcy5fc3RhdGUpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB0aGlzLl9pc09wZW4gPSB0cnVlO1xyXG5cclxuICAgICAgICBsZXQgc3RhdGUgPSBuZXcgU3RhdGUoKTtcclxuICAgICAgICBpZiAodGhpcy5pc0xlZnQoKSkge1xyXG4gICAgICAgICAgICBzdGF0ZS5zdHlsZS5sZWZ0ID0gJzAnO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5pc1JpZ2h0KCkpIHtcclxuICAgICAgICAgICAgc3RhdGUuc3R5bGUucmlnaHQgPSAnMCc7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLmlzVG9wKCkpIHtcclxuICAgICAgICAgICAgc3RhdGUuc3R5bGUudG9wID0gJzAnO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5pc0JvdHRvbSgpKSB7XHJcbiAgICAgICAgICAgIHN0YXRlLnN0eWxlLmJvdHRvbSA9ICcwJ1xyXG4gICAgICAgIH1cclxuICAgICAgICBzdGF0ZS5zdGF0ZUNsYXNzTmFtZSA9ICdvay1vbic7XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzLnJlbmRlcihzdGF0ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgb2ZmKCk6IFByb21pc2U8U3RhdGU+IHtcclxuICAgICAgICBpZiAoIXRoaXMuX2lzT3BlbilcclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgICAgICAgICAgIHJlc29sdmUodGhpcy5fc3RhdGUpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB0aGlzLl9pc09wZW4gPSBmYWxzZTtcclxuXHJcbiAgICAgICAgbGV0IHN0YXRlID0gbmV3IFN0YXRlKCk7XHJcbiAgICAgICAgaWYgKHRoaXMuaXNMZWZ0KCkpIHtcclxuICAgICAgICAgICAgc3RhdGUuc3R5bGUubGVmdCA9IGAtJHt0aGlzLl9tYXhTaXplfXB4YDtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMuaXNSaWdodCgpKSB7XHJcbiAgICAgICAgICAgIHN0YXRlLnN0eWxlLnJpZ2h0ID0gYC0ke3RoaXMuX21heFNpemV9cHhgO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5pc1RvcCgpKSB7XHJcbiAgICAgICAgICAgIHN0YXRlLnN0eWxlLnRvcCA9IGAtJHt0aGlzLl9tYXhTaXplfXB4YDtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMuaXNCb3R0b20oKSkge1xyXG4gICAgICAgICAgICBzdGF0ZS5zdHlsZS5ib3R0b20gPSBgLSR7dGhpcy5fbWF4U2l6ZX1weGA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHN0YXRlLnN0YXRlQ2xhc3NOYW1lID0gJ29rLW9mZic7XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzLnJlbmRlcihzdGF0ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBpc0xlZnQoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2RvY2sgPT09ICdsZWZ0JztcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGlzUmlnaHQoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2RvY2sgPT09ICdyaWdodCc7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBpc1RvcCgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZG9jayA9PT0gJ3RvcCc7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBpc0JvdHRvbSgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZG9jayA9PT0gJ2JvdHRvbSc7XHJcbiAgICB9XHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tcG9uZW50L0RyYXdlckNvbXBvbmVudC50cyIsImltcG9ydCB7IENvbXBvc2l0ZSB9IGZyb20gXCIuL0NvbXBvc2l0ZVwiO1xyXG5pbXBvcnQgeyBJTG9nZ2VyIH0gZnJvbSBcIi4uL3V0aWwvTG9nZ2VyXCI7XHJcbmltcG9ydCB7IElBbmltYXRvciB9IGZyb20gJ291dGtpdC1hbmltYXRvcic7XHJcbmltcG9ydCB7IFN0YXRlIH0gZnJvbSBcIi4uL3N0YXRlL1N0YXRlXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgRHJhZ2dhYmxlQ29tcG9uZW50IGV4dGVuZHMgQ29tcG9zaXRlIHtcclxuXHJcbiAgICBwcml2YXRlIF9kcmFnUm9vdDogYm9vbGVhbjtcclxuICAgIHByaXZhdGUgX3g6IG51bWJlcjtcclxuICAgIHByaXZhdGUgX3k6IG51bWJlcjtcclxuICAgIHByaXZhdGUgX3RvcDogbnVtYmVyO1xyXG4gICAgcHJpdmF0ZSBfbGVmdDogbnVtYmVyO1xyXG4gICAgcHJpdmF0ZSBfcGFyZW50VG9wOiBudW1iZXI7XHJcbiAgICBwcml2YXRlIF9wYXJlbnRMZWZ0OiBudW1iZXI7XHJcbiAgICBwcml2YXRlIF9kaWZmWDogbnVtYmVyO1xyXG4gICAgcHJpdmF0ZSBfZGlmZlk6IG51bWJlcjtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihsb2dnZXI6IElMb2dnZXIsIGFuaW1hdG9yPzogSUFuaW1hdG9yKSB7XHJcbiAgICAgICAgc3VwZXIobG9nZ2VyLCBhbmltYXRvcik7XHJcblxyXG4gICAgICAgIC8vIFNldHVwIGRlZmF1bHRzXHJcbiAgICAgICAgdGhpcy5fZHJhZ1Jvb3QgPSBmYWxzZTtcclxuXHJcbiAgICAgICAgLy8gUmVsYXkgZXZlbnRzXHJcbiAgICAgICAgdGhpcy5yZWdpc3RlckV2ZW50KCdpbml0JywgKCkgPT4geyByZXR1cm4gdGhpcy5pbml0KCkgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgZHJhZ1Jvb3QoZmxhZzogYm9vbGVhbik6IHRoaXMge1xyXG4gICAgICAgIHRoaXMuX2RyYWdSb290ID0gZmxhZztcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuXHJcbiAgICBpbml0KCk6IFByb21pc2U8U3RhdGU+IHtcclxuICAgICAgICBsZXQgc3RhdGUgPSBuZXcgU3RhdGUoKTtcclxuICAgICAgICBzdGF0ZS5va0NsYXNzTmFtZSA9ICdvay1kcmFnZ2FibGUnO1xyXG5cclxuICAgICAgICB0aGlzLmdldEVsZW1lbnQoKS5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCB0aGlzLnN0YXJ0RHJhZyk7XHJcbiAgICAgICAgdGhpcy5nZXRFbGVtZW50KCkuYWRkRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsICgpID0+IHtcclxuICAgICAgICAgICAgZG9jdW1lbnQub25tb3VzZW1vdmUgPSAoKSA9PiB7fTtcclxuICAgICAgICB9KTtcclxuICAgICAgICByZXR1cm4gdGhpcy5yZW5kZXIoc3RhdGUpO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXJ0RHJhZyA9IChldmVudDogTW91c2VFdmVudCkgPT4ge1xyXG4gICAgICAgIGxldCBkZSA9IHRoaXMuZ2V0RWxlbWVudCgpO1xyXG4gICAgICAgIGlmICh0aGlzLl9kcmFnUm9vdCkge1xyXG4gICAgICAgICAgICBkZSA9IHRoaXMuZ2V0Um9vdCgpLmdldEVsZW1lbnQoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IHBhcmVudCA9IGRlLnBhcmVudEVsZW1lbnQ7XHJcblxyXG4gICAgICAgIGxldCB4ID0gZXZlbnQuY2xpZW50WCxcclxuICAgICAgICAgICAgeSA9IGV2ZW50LmNsaWVudFksXHJcbiAgICAgICAgICAgIHRvcCA9IGRlLm9mZnNldFRvcCxcclxuICAgICAgICAgICAgbGVmdCA9IGRlLm9mZnNldExlZnQsXHJcbiAgICAgICAgICAgIGRlV2lkdGggPSBkZS5vZmZzZXRXaWR0aCxcclxuICAgICAgICAgICAgZGVIZWlnaHQgPSBkZS5vZmZzZXRIZWlnaHQsXHJcbiAgICAgICAgICAgIHBhcmVudFRvcCA9IHBhcmVudC5vZmZzZXRUb3AsXHJcbiAgICAgICAgICAgIHBhcmVudExlZnQgPSBwYXJlbnQub2Zmc2V0TGVmdCxcclxuICAgICAgICAgICAgcGFyZW50V2lkdGggPSBwYXJlbnQub2Zmc2V0V2lkdGgsXHJcbiAgICAgICAgICAgIHBhcmVudEhlaWdodCA9cGFyZW50Lm9mZnNldEhlaWdodCxcclxuICAgICAgICAgICAgZGlmZlggPSB4IC0gbGVmdCxcclxuICAgICAgICAgICAgZGlmZlkgPSB5IC0gdG9wO1xyXG5cclxuICAgICAgICBkb2N1bWVudC5vbm1vdXNlbW92ZSA9IChldmVudDogTW91c2VFdmVudCkgPT4ge1xyXG4gICAgICAgICAgICBsZXQgeCA9IGV2ZW50LmNsaWVudFgsXHJcbiAgICAgICAgICAgICAgICB5ID0gZXZlbnQuY2xpZW50WSxcclxuICAgICAgICAgICAgICAgIGFYID0geCAtIGRpZmZYLFxyXG4gICAgICAgICAgICAgICAgYVkgPSB5IC0gZGlmZlk7XHJcbiAgICAgICAgICAgIGlmIChhWCA8IDApIGFYID0gMDtcclxuICAgICAgICAgICAgaWYgKGFZIDwgMCkgYVkgPSAwO1xyXG4gICAgICAgICAgICBpZiAoYVggKyBkZVdpZHRoID4gcGFyZW50V2lkdGgpIGFYID0gcGFyZW50V2lkdGggLSBkZVdpZHRoO1xyXG4gICAgICAgICAgICBpZiAoYVkgKyBkZUhlaWdodCA+IHBhcmVudEhlaWdodCkgYVkgPSBwYXJlbnRIZWlnaHQgLSBkZUhlaWdodDtcclxuXHJcbiAgICAgICAgICAgIHRoaXMubW92ZShkZSwgYVgsIGFZKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgbW92ZShlbGVtZW50OiBIVE1MRWxlbWVudCwgeDogbnVtYmVyLCB5OiBudW1iZXIpIHsgXHJcbiAgICAgICAgZWxlbWVudC5zdHlsZS5sZWZ0ID0gYCR7eH1weGA7XHJcbiAgICAgICAgZWxlbWVudC5zdHlsZS50b3AgPSBgJHt5fXB4YDtcclxuICAgIH1cclxuXHJcbiAgICBzdG9wRHJhZygpIHsgfVxyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbXBvbmVudC9EcmFnZ2FibGVDb21wb25lbnQudHMiLCJpbXBvcnQgeyBDb21wb3NpdGUgfSBmcm9tIFwiLi9Db21wb3NpdGVcIjtcclxuaW1wb3J0IHsgSUxvZ2dlciB9IGZyb20gXCIuLi91dGlsL0xvZ2dlclwiO1xyXG5pbXBvcnQgTG9nZ2VyIGZyb20gXCIuLi91dGlsL0xvZ2dlclwiO1xyXG5pbXBvcnQgeyBJQW5pbWF0b3IgfSBmcm9tICdvdXRraXQtYW5pbWF0b3InO1xyXG5pbXBvcnQgeyBJQ29tcG9uZW50LCBDb21wb25lbnQgfSBmcm9tIFwiLi9Db21wb25lbnRcIjtcclxuaW1wb3J0IHsgQ29tcG9uZW50RmFjdG9yeSB9IGZyb20gXCIuL0NvbXBvbmVudEZhY3RvcnlcIjtcclxuaW1wb3J0IEVsZW1lbnRIZWxwZXIgZnJvbSBcIi4uL3V0aWwvRWxlbWVudEhlbHBlclwiO1xyXG5pbXBvcnQgeyBTdGF0ZSB9IGZyb20gXCIuLi9zdGF0ZS9TdGF0ZVwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIEhvcml6b250YWxMYXlvdXRDb21wb25lbnQgZXh0ZW5kcyBDb21wb3NpdGUge1xyXG5cclxuICAgIHByaXZhdGUgZml4ZWRDaGlsZHJlbjogQXJyYXk8SUNvbXBvbmVudD47XHJcbiAgICBwcml2YXRlIHBlcmN0Q2hpbGRyZW46IEFycmF5PElDb21wb25lbnQ+O1xyXG4gICAgcHJpdmF0ZSBmbHVpZENoaWxkcmVuOiBBcnJheTxJQ29tcG9uZW50PjtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihsb2dnZXI6IElMb2dnZXIsIGFuaW1hdG9yPzogSUFuaW1hdG9yKSB7XHJcbiAgICAgICAgc3VwZXIobG9nZ2VyLCBhbmltYXRvcik7XHJcblxyXG4gICAgICAgIHRoaXMuZml4ZWRDaGlsZHJlbiA9IG5ldyBBcnJheTxJQ29tcG9uZW50PigpO1xyXG4gICAgICAgIHRoaXMucGVyY3RDaGlsZHJlbiA9IG5ldyBBcnJheTxJQ29tcG9uZW50PigpO1xyXG4gICAgICAgIHRoaXMuZmx1aWRDaGlsZHJlbiA9IG5ldyBBcnJheTxJQ29tcG9uZW50PigpO1xyXG5cclxuICAgICAgICB0aGlzLnJlZ2lzdGVyRXZlbnQoJ2luaXQnLCAoKSA9PiB7IHJldHVybiB0aGlzLmluaXQoKSB9KTtcclxuICAgIH1cclxuXHJcbiAgICBpbml0KCkge1xyXG4gICAgICAgIC8vIEZvciBlYWNoIGNoaWxkIGVsZW1lbnQgaW4gZWxlbWVudHMsIHNldCB1cCBhIG5ldyBDb21wb25lbnQgZmlndXJlIFxyXG4gICAgICAgIC8vIG91dCBpZiBpdCBoYXMgYSB3aWR0aCBzZXQgYXMgYSBwaXhlbCB2YWx1ZSAoZml4ZWQgY2hpbGQpLCBhIDEwMCVcclxuICAgICAgICAvLyB2YWx1ZSAoZmx1aWQgY2hpbGQpLCBvciBhIHZhbHVlIHNldCB0byBhIHNwZWNpZmljIHBlcmNlbnRhZ2UgXHJcbiAgICAgICAgLy8gKHBlcmNlbnRhZ2UgY2hpbGQpXHJcbiAgICAgICAgbGV0IGVsID0gdGhpcy5nZXRFbGVtZW50KCk7XHJcbiAgICAgICAgbGV0IGZhY3RvcnkgPSBuZXcgQ29tcG9uZW50RmFjdG9yeSgpO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZWwuY2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgbGV0IGNoaWxkID0gZWwuY2hpbGRyZW5baV0gYXMgSFRNTEVsZW1lbnQ7XHJcbiAgICAgICAgICAgIGlmICghY2hpbGQuaWQpXHJcbiAgICAgICAgICAgICAgICBFbGVtZW50SGVscGVyLnNldEd1aWRJZChjaGlsZCk7XHJcbiAgICAgICAgICAgIGxldCBjaGlsZENvbXBvbmVudCA9IG5ldyBDb21wb25lbnQobmV3IExvZ2dlcigpKTtcclxuICAgICAgICAgICAgY2hpbGRDb21wb25lbnQuc2V0RWxlbWVudChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChjaGlsZC5pZCkpO1xyXG4gICAgICAgICAgICBsZXQgc2l6ZSA9IGNoaWxkLmdldEF0dHJpYnV0ZSgnZGF0YS1zaXplJykgfHwgJzEwMCUnO1xyXG4gICAgICAgICAgICBpZiAoc2l6ZSA9PT0gJzEwMCUnKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmZsdWlkQ2hpbGRyZW4ucHVzaChjaGlsZENvbXBvbmVudCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSBpZiAoc2l6ZS5tYXRjaCgvXltcXGRdKyUkLykpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMucGVyY3RDaGlsZHJlbi5wdXNoKGNoaWxkQ29tcG9uZW50KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZml4ZWRDaGlsZHJlbi5wdXNoKGNoaWxkQ29tcG9uZW50KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjaGlsZENvbXBvbmVudC5yZW5kZXIoeyBzdHlsZTogeyBoZWlnaHQ6ICcxMDAlJywgd2lkdGg6IHNpemUsIGZsb2F0OiAnbGVmdCcgfSB9KVxyXG4gICAgICAgICAgICB0aGlzLmFkZENoaWxkKGNoaWxkQ29tcG9uZW50KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdyZXNpemUnLCB0aGlzLnJlc2l6ZS5iaW5kKHRoaXMpKTtcclxuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgdGhpcy5yZXNpemUuYmluZCh0aGlzKSk7XHJcblxyXG4gICAgICAgIGxldCBzdGF0ZSA9IG5ldyBTdGF0ZSgpO1xyXG4gICAgICAgIHN0YXRlLnN0eWxlLmhlaWdodCA9IHRoaXMuZ2V0RWxlbWVudCgpLnBhcmVudEVsZW1lbnQub2Zmc2V0SGVpZ2h0ICsgJ3B4JztcclxuICAgICAgICBzdGF0ZS5zdHlsZS53aWR0aCA9IHRoaXMuZ2V0RWxlbWVudCgpLnBhcmVudEVsZW1lbnQub2Zmc2V0V2lkdGggKyAncHgnO1xyXG4gICAgICAgIHN0YXRlLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMucmVuZGVyKHN0YXRlKTtcclxuICAgIH1cclxuXHJcbiAgICByZXNpemUoKSB7XHJcbiAgICAgICAgbGV0IHN0YXRlID0gbmV3IFN0YXRlKCk7XHJcbiAgICAgICAgc3RhdGUuc3R5bGUuaGVpZ2h0ID0gdGhpcy5nZXRFbGVtZW50KCkucGFyZW50RWxlbWVudC5vZmZzZXRIZWlnaHQgKyAncHgnO1xyXG4gICAgICAgIHN0YXRlLnN0eWxlLndpZHRoID0gdGhpcy5nZXRFbGVtZW50KCkucGFyZW50RWxlbWVudC5vZmZzZXRXaWR0aCArICdweCc7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMucmVuZGVyKHN0YXRlKTtcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIobmV3U3RhdGU6IFN0YXRlKSB7XHJcbiAgICAgICAgbGV0IHByb21pc2VzID0gW107XHJcbiAgICAgICAgcHJvbWlzZXMucHVzaChzdXBlci5yZW5kZXIobmV3U3RhdGUpKTtcclxuXHJcbiAgICAgICAgdmFyIHRvdGFsV2lkdGggPSB0aGlzLmdldEVsZW1lbnQoKS5vZmZzZXRXaWR0aDtcclxuICAgICAgICB2YXIgZmx1aWRXaWR0aCA9IHRvdGFsV2lkdGg7XHJcbiAgICAgICAgdmFyIHRvdGFsSGVpZ2h0ID0gdGhpcy5nZXRFbGVtZW50KCkub2Zmc2V0SGVpZ2h0O1xyXG5cclxuICAgICAgICAvLyBEcmF3IHRoZSBmaXhlZCBjaGlsZHJlblxyXG4gICAgICAgIGZvciAobGV0IGVsIG9mIHRoaXMuZml4ZWRDaGlsZHJlbikge1xyXG4gICAgICAgICAgICBmbHVpZFdpZHRoIC09IGVsLmdldEVsZW1lbnQoKS5vZmZzZXRXaWR0aDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gRHJhdyB0aGUgcGVyY2VudGFnZSBjaGlsZHJlblxyXG4gICAgICAgIGZvciAobGV0IGVsIG9mIHRoaXMucGVyY3RDaGlsZHJlbikge1xyXG4gICAgICAgICAgICBsZXQgd2lkdGggPSAocGFyc2VGbG9hdChlbC5nZXRFbGVtZW50KCkuZ2V0QXR0cmlidXRlKCdkYXRhLXNpemUnKSkgLyAxMDAgKiBmbHVpZFdpZHRoKTtcclxuICAgICAgICAgICAgZmx1aWRXaWR0aCAtPSB3aWR0aDtcclxuICAgICAgICAgICAgZWwucmVuZGVyKHsgc3R5bGU6IHsgd2lkdGg6IHdpZHRoICsgJ3B4JyB9IH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBEcmF3IHRoZSBmbHVpZCBjaGlsZHJlblxyXG4gICAgICAgIGZvciAobGV0IGVsIG9mIHRoaXMuZmx1aWRDaGlsZHJlbikge1xyXG4gICAgICAgICAgICB2YXIgd2lkdGggPSBmbHVpZFdpZHRoIC8gdGhpcy5mbHVpZENoaWxkcmVuLmxlbmd0aDtcclxuICAgICAgICAgICAgcHJvbWlzZXMucHVzaChlbC5yZW5kZXIoeyBzdHlsZTogeyB3aWR0aDogd2lkdGggKyAncHgnIH0gfSkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gUHJvbWlzZS5hbGwocHJvbWlzZXMpO1xyXG4gICAgfVxyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbXBvbmVudC9Ib3Jpem9udGFsTGF5b3V0Q29tcG9uZW50LnRzIiwiaW1wb3J0IHsgU3RhdGUgfSBmcm9tIFwiLi4vc3RhdGUvU3RhdGVcIjtcclxuaW1wb3J0IHsgSUxvZ2dlciB9IGZyb20gXCIuLi91dGlsL0xvZ2dlclwiO1xyXG5pbXBvcnQgeyBJQW5pbWF0b3IgfSBmcm9tICdvdXRraXQtYW5pbWF0b3InO1xyXG5pbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tIFwiLi9Db21wb25lbnRcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBPdmVybGF5Q29tcG9uZW50IGV4dGVuZHMgQ29tcG9uZW50IHtcclxuXHJcbiAgICBwcml2YXRlIF9jb2xvcjogc3RyaW5nO1xyXG4gICAgcHJpdmF0ZSBfb3BhY2l0eTogbnVtYmVyO1xyXG4gICAgcHJpdmF0ZSBfaXNPbjogYm9vbGVhbjtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihsb2dnZXI6IElMb2dnZXIsIGFuaW1hdG9yPzogSUFuaW1hdG9yKSB7XHJcbiAgICAgICAgc3VwZXIobG9nZ2VyLCBhbmltYXRvcik7XHJcblxyXG4gICAgICAgIC8vIFNldHVwIGRlZmF1bHRzXHJcbiAgICAgICAgdGhpcy5fb3BhY2l0eSA9IC44O1xyXG4gICAgICAgIHRoaXMuX2NvbG9yID0gJyMwMDAwMDAnO1xyXG4gICAgICAgIHRoaXMuX2lzT24gPSBmYWxzZTtcclxuXHJcbiAgICAgICAgLy8gUmVsYXkgZXZlbnRzXHJcbiAgICAgICAgdGhpcy5yZWdpc3RlckV2ZW50KCdvbicsICgpID0+IHsgcmV0dXJuIHRoaXMub24oKSB9KTtcclxuICAgICAgICB0aGlzLnJlZ2lzdGVyRXZlbnQoJ29mZicsICgpID0+IHsgcmV0dXJuIHRoaXMub2ZmKCkgfSk7XHJcbiAgICAgICAgdGhpcy5yZWdpc3RlckV2ZW50KCd0b2dnbGUnLCAoKSA9PiB7IHJldHVybiB0aGlzLnRvZ2dsZSgpIH0pO1xyXG4gICAgICAgIHRoaXMucmVnaXN0ZXJFdmVudCgnaW5pdCcsICgpID0+IHsgcmV0dXJuIHRoaXMuaW5pdCgpIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIG9wYWNpdHkobjogbnVtYmVyKTogdGhpcyB7XHJcbiAgICAgICAgaWYgKG4gPCAwKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2xvZ2dlci5lcnJvcihgT3BhY2l0eSBtdXN0IGJlIGdyZWF0ZXIgdGhhbiBvciBlcXVhbCB0byB6ZXJvLmApO1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcztcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKG4gPiAxKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2xvZ2dlci5lcnJvcihgT3BhY2l0eSBtdXN0IGJlIGxlc3MgdGhhbiBvciBlcXVhbCB0byBvbmUuYCk7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLl9vcGFjaXR5ID0gbjtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuXHJcbiAgICBjb2xvcihjOiBzdHJpbmcpOiB0aGlzIHtcclxuICAgICAgICB0aGlzLl9jb2xvciA9IGM7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBTZXRzIHRoZSBpbml0aWFsIHN0YXRlXHJcbiAgICAgKiBAcmV0dXJucyB7UHJvbWlzZTxTdGF0ZT59IFxyXG4gICAgICovXHJcbiAgICBpbml0KCk6IFByb21pc2U8U3RhdGU+IHtcclxuICAgICAgICBsZXQgc3RhdGUgPSBuZXcgU3RhdGUoKTtcclxuICAgICAgICBzdGF0ZS5va0NsYXNzTmFtZSA9ICdvay1vdmVybGF5JztcclxuICAgICAgICBzdGF0ZS5zdHlsZS5oZWlnaHQgPSBcIjEwMCVcIjtcclxuICAgICAgICBzdGF0ZS5zdHlsZS53aWR0aCA9IFwiMTAwJVwiO1xyXG4gICAgICAgIHN0YXRlLnN0eWxlLnBvc2l0aW9uID0gXCJmaXhlZFwiO1xyXG4gICAgICAgIHN0YXRlLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IHRoaXMuX2NvbG9yO1xyXG4gICAgICAgIHN0YXRlLnN0eWxlLm9wYWNpdHkgPSAnMCc7XHJcbiAgICAgICAgc3RhdGUuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgICAgICBzdGF0ZS5zdHlsZS50b3AgPSAnMCc7XHJcbiAgICAgICAgc3RhdGUuc3R5bGUubGVmdCA9ICcwJztcclxuXHJcbiAgICAgICAgaWYgKHRoaXMuZ2V0RWxlbWVudCgpKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZ2V0RWxlbWVudCgpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5jbGlja0V2ZW50KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzLnJlbmRlcihzdGF0ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgdG9nZ2xlKCk6IFByb21pc2U8U3RhdGU+IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5faXNPbiA/IHRoaXMub2ZmKCkgOiB0aGlzLm9uKCk7XHJcbiAgICB9XHJcblxyXG4gICAgb24oKTogUHJvbWlzZTxTdGF0ZT4ge1xyXG4gICAgICAgIGlmICh0aGlzLl9pc09uKVxyXG4gICAgICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmVzb2x2ZSh0aGlzLl9zdGF0ZSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMuX2lzT24gPSB0cnVlO1xyXG5cclxuICAgICAgICByZXR1cm4gdGhpcy5yZW5kZXIodGhpcy5vblN0YXRlKCkpO1xyXG4gICAgfVxyXG5cclxuICAgIG9mZigpOiBQcm9taXNlPFN0YXRlPiB7XHJcbiAgICAgICAgaWYgKCF0aGlzLl9pc09uKVxyXG4gICAgICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmVzb2x2ZSh0aGlzLl9zdGF0ZSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMuX2lzT24gPSBmYWxzZTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXMucmVuZGVyKHRoaXMub2ZmU3RhdGUoKSlcclxuICAgICAgICAgICAgLnRoZW4oKHJlc3VsdCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMucmVuZGVyKHRoaXMuaGlkZGVuU3RhdGUoKSk7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgb25TdGF0ZSgpOiBTdGF0ZSB7XHJcbiAgICAgICAgbGV0IHN0YXRlID0gbmV3IFN0YXRlKCk7XHJcbiAgICAgICAgc3RhdGUuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XHJcbiAgICAgICAgc3RhdGUuc3R5bGUub3BhY2l0eSA9IHRoaXMuX29wYWNpdHkudG9TdHJpbmcoKTtcclxuICAgICAgICByZXR1cm4gc3RhdGU7XHJcbiAgICB9XHJcblxyXG4gICAgb2ZmU3RhdGUoKTogU3RhdGUge1xyXG4gICAgICAgIGxldCBzdGF0ZSA9IG5ldyBTdGF0ZSgpO1xyXG4gICAgICAgIHN0YXRlLnN0eWxlLm9wYWNpdHkgPSAnMCc7XHJcbiAgICAgICAgcmV0dXJuIHN0YXRlO1xyXG4gICAgfVxyXG5cclxuICAgIGhpZGRlblN0YXRlKCk6IFN0YXRlIHtcclxuICAgICAgICBsZXQgc3RhdGUgPSBuZXcgU3RhdGUoKTtcclxuICAgICAgICBzdGF0ZS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgICAgIHJldHVybiBzdGF0ZTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGNsaWNrRXZlbnQgPSAoKSA9PiB7XHJcbiAgICAgICAgdGhpcy5nZXRSb290KCkucmVsYXkoJ29mZicpO1xyXG4gICAgfVxyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbXBvbmVudC9PdmVybGF5Q29tcG9uZW50LnRzIiwiaW1wb3J0IHsgQ29tcG9zaXRlIH0gZnJvbSBcIi4vQ29tcG9zaXRlXCI7XHJcbmltcG9ydCB7IElMb2dnZXIgfSBmcm9tIFwiLi4vdXRpbC9Mb2dnZXJcIjtcclxuaW1wb3J0IExvZ2dlciBmcm9tIFwiLi4vdXRpbC9Mb2dnZXJcIjtcclxuaW1wb3J0IHsgSUFuaW1hdG9yIH0gZnJvbSAnb3V0a2l0LWFuaW1hdG9yJztcclxuaW1wb3J0IHsgSUNvbXBvbmVudCwgQ29tcG9uZW50IH0gZnJvbSBcIi4vQ29tcG9uZW50XCI7XHJcbmltcG9ydCB7IENvbXBvbmVudEZhY3RvcnkgfSBmcm9tIFwiLi9Db21wb25lbnRGYWN0b3J5XCI7XHJcbmltcG9ydCBFbGVtZW50SGVscGVyIGZyb20gXCIuLi91dGlsL0VsZW1lbnRIZWxwZXJcIjtcclxuaW1wb3J0IHsgU3RhdGUgfSBmcm9tIFwiLi4vc3RhdGUvU3RhdGVcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBWZXJ0aWNhbExheW91dENvbXBvbmVudCBleHRlbmRzIENvbXBvc2l0ZSB7XHJcblxyXG4gICAgcHJpdmF0ZSBmaXhlZENoaWxkcmVuOiBBcnJheTxJQ29tcG9uZW50PjtcclxuICAgIHByaXZhdGUgcGVyY3RDaGlsZHJlbjogQXJyYXk8SUNvbXBvbmVudD47XHJcbiAgICBwcml2YXRlIGZsdWlkQ2hpbGRyZW46IEFycmF5PElDb21wb25lbnQ+O1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKGxvZ2dlcjogSUxvZ2dlciwgYW5pbWF0b3I/OiBJQW5pbWF0b3IpIHtcclxuICAgICAgICBzdXBlcihsb2dnZXIsIGFuaW1hdG9yKTtcclxuXHJcbiAgICAgICAgdGhpcy5maXhlZENoaWxkcmVuID0gbmV3IEFycmF5PElDb21wb25lbnQ+KCk7XHJcbiAgICAgICAgdGhpcy5wZXJjdENoaWxkcmVuID0gbmV3IEFycmF5PElDb21wb25lbnQ+KCk7XHJcbiAgICAgICAgdGhpcy5mbHVpZENoaWxkcmVuID0gbmV3IEFycmF5PElDb21wb25lbnQ+KCk7XHJcblxyXG4gICAgICAgIHRoaXMucmVnaXN0ZXJFdmVudCgnaW5pdCcsICgpID0+IHsgcmV0dXJuIHRoaXMuaW5pdCgpIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogSW5pdGlhbGl6ZSB0aGUgVmVydGljYWwgTGF5b3V0XHJcbiAgICAgKiBGb3IgZWFjaCBjaGlsZCBlbGVtZW50IGluIGVsZW1lbnRzLCBzZXQgdXAgYSBuZXcgQ29tcG9uZW50IGZpZ3VyZSBcclxuICAgICAqIG91dCBpZiBpdCBoYXMgYSBoZWlnaHQgc2V0IGFzIGEgcGl4ZWwgdmFsdWUgKGZpeGVkIGNoaWxkKSwgYSAxMDAlXHJcbiAgICAgKiB2YWx1ZSAoZmx1aWQgY2hpbGQpLCBvciBhIHZhbHVlIHNldCB0byBhIHNwZWNpZmljIHBlcmNlbnRhZ2UgXHJcbiAgICAgKiAocGVyY2VudGFnZSBjaGlsZClcclxuICAgICAqIFxyXG4gICAgICogQHJldHVybnMgXHJcbiAgICAgKiBAbWVtYmVyb2YgVmVydGljYWxMYXlvdXRDb21wb25lbnRcclxuICAgICAqL1xyXG4gICAgaW5pdCgpIHtcclxuICAgICAgICBsZXQgZWwgPSB0aGlzLmdldEVsZW1lbnQoKTtcclxuICAgICAgICBsZXQgZmFjdG9yeSA9IG5ldyBDb21wb25lbnRGYWN0b3J5KCk7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBlbC5jaGlsZHJlbi5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBsZXQgY2hpbGQgPSBlbC5jaGlsZHJlbltpXSBhcyBIVE1MRWxlbWVudDtcclxuICAgICAgICAgICAgaWYgKCFjaGlsZC5pZClcclxuICAgICAgICAgICAgICAgIEVsZW1lbnRIZWxwZXIuc2V0R3VpZElkKGNoaWxkKTtcclxuICAgICAgICAgICAgbGV0IGNoaWxkQ29tcG9uZW50ID0gbmV3IENvbXBvbmVudChuZXcgTG9nZ2VyKCkpO1xyXG4gICAgICAgICAgICBjaGlsZENvbXBvbmVudC5zZXRFbGVtZW50KGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGNoaWxkLmlkKSk7XHJcbiAgICAgICAgICAgIGxldCBzaXplID0gY2hpbGQuZ2V0QXR0cmlidXRlKCdkYXRhLXNpemUnKSB8fCAnMTAwJSc7XHJcbiAgICAgICAgICAgIGlmIChzaXplID09PSAnMTAwJScpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZmx1aWRDaGlsZHJlbi5wdXNoKGNoaWxkQ29tcG9uZW50KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIGlmIChzaXplLm1hdGNoKC9eW1xcZF0rJSQvKSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5wZXJjdENoaWxkcmVuLnB1c2goY2hpbGRDb21wb25lbnQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5maXhlZENoaWxkcmVuLnB1c2goY2hpbGRDb21wb25lbnQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNoaWxkQ29tcG9uZW50LnJlbmRlcih7IHN0eWxlOiB7IHdpZHRoOiAnMTAwJScsIGhlaWdodDogc2l6ZSwgb3ZlcmZsb3c6ICdoaWRkZW4nLCBmbG9hdDogJ2xlZnQnIH0gfSlcclxuICAgICAgICAgICAgdGhpcy5hZGRDaGlsZChjaGlsZENvbXBvbmVudCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigncmVzaXplJywgdGhpcy5yZXNpemUuYmluZCh0aGlzKSk7XHJcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHRoaXMucmVzaXplLmJpbmQodGhpcykpO1xyXG5cclxuICAgICAgICBsZXQgc3RhdGUgPSBuZXcgU3RhdGUoKTtcclxuICAgICAgICBzdGF0ZS5zdHlsZS5oZWlnaHQgPSB0aGlzLmdldEVsZW1lbnQoKS5wYXJlbnRFbGVtZW50Lm9mZnNldEhlaWdodCArICdweCc7XHJcbiAgICAgICAgc3RhdGUuc3R5bGUud2lkdGggPSB0aGlzLmdldEVsZW1lbnQoKS5wYXJlbnRFbGVtZW50Lm9mZnNldFdpZHRoICsgJ3B4JztcclxuICAgICAgICBzdGF0ZS5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xyXG4gICAgICAgIHN0YXRlLnN0eWxlLm92ZXJmbG93ID0gXCJoaWRkZW5cIjtcclxuICAgICAgICBzdGF0ZS5zdHlsZS5mbG9hdCA9IFwibGVmdFwiXHJcbiAgICAgICAgcmV0dXJuIHRoaXMucmVuZGVyKHN0YXRlKTtcclxuICAgIH1cclxuXHJcbiAgICByZXNpemUoKSB7XHJcbiAgICAgICAgbGV0IHN0YXRlID0gbmV3IFN0YXRlKCk7XHJcbiAgICAgICAgc3RhdGUuc3R5bGUuaGVpZ2h0ID0gdGhpcy5nZXRFbGVtZW50KCkucGFyZW50RWxlbWVudC5vZmZzZXRIZWlnaHQgKyAncHgnO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGRvY3VtZW50LmJvZHkub2Zmc2V0SGVpZ2h0KVxyXG4gICAgICAgIHN0YXRlLnN0eWxlLndpZHRoID0gdGhpcy5nZXRFbGVtZW50KCkucGFyZW50RWxlbWVudC5vZmZzZXRXaWR0aCArICdweCc7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMucmVuZGVyKHN0YXRlKTtcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIobmV3U3RhdGU6IFN0YXRlKSB7XHJcbiAgICAgICAgbGV0IHByb21pc2VzID0gW107XHJcbiAgICAgICAgcHJvbWlzZXMucHVzaChzdXBlci5yZW5kZXIobmV3U3RhdGUpKTtcclxuXHJcbiAgICAgICAgdmFyIHRvdGFsSGVpZ2h0ID0gdGhpcy5nZXRFbGVtZW50KCkub2Zmc2V0SGVpZ2h0O1xyXG4gICAgICAgIHZhciBmbHVpZEhlaWdodCA9IHRvdGFsSGVpZ2h0O1xyXG4gICAgICAgIHZhciB0b3RhbFdpZHRoID0gdGhpcy5nZXRFbGVtZW50KCkub2Zmc2V0V2lkdGg7XHJcblxyXG4gICAgICAgIC8vIERyYXcgdGhlIGZpeGVkIGNoaWxkcmVuXHJcbiAgICAgICAgZm9yIChsZXQgZWwgb2YgdGhpcy5maXhlZENoaWxkcmVuKSB7XHJcbiAgICAgICAgICAgIGZsdWlkSGVpZ2h0IC09IGVsLmdldEVsZW1lbnQoKS5vZmZzZXRIZWlnaHQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIERyYXcgdGhlIHBlcmNlbnRhZ2UgY2hpbGRyZW5cclxuICAgICAgICBmb3IgKGxldCBlbCBvZiB0aGlzLnBlcmN0Q2hpbGRyZW4pIHtcclxuICAgICAgICAgICAgbGV0IGhlaWdodCA9IChwYXJzZUZsb2F0KGVsLmdldEVsZW1lbnQoKS5nZXRBdHRyaWJ1dGUoJ2RhdGEtc2l6ZScpKSAvIDEwMCAqIGZsdWlkSGVpZ2h0KTtcclxuICAgICAgICAgICAgZmx1aWRIZWlnaHQgLT0gaGVpZ2h0O1xyXG4gICAgICAgICAgICBlbC5yZW5kZXIoeyBzdHlsZTogeyBoZWlnaHQ6IGhlaWdodCArICdweCcgfSB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gRHJhdyB0aGUgZmx1aWQgY2hpbGRyZW5cclxuICAgICAgICBmb3IgKGxldCBlbCBvZiB0aGlzLmZsdWlkQ2hpbGRyZW4pIHtcclxuICAgICAgICAgICAgdmFyIGhlaWdodCA9IGZsdWlkSGVpZ2h0IC8gdGhpcy5mbHVpZENoaWxkcmVuLmxlbmd0aDtcclxuICAgICAgICAgICAgcHJvbWlzZXMucHVzaChlbC5yZW5kZXIoeyBzdHlsZTogeyBoZWlnaHQ6IGhlaWdodCArICdweCcgfSB9KSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBQcm9taXNlLmFsbChwcm9taXNlcyk7XHJcbiAgICB9XHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tcG9uZW50L1ZlcnRpY2FsTGF5b3V0Q29tcG9uZW50LnRzIiwiaW1wb3J0IHsgU3RhdGUgfSBmcm9tICcuLi9zdGF0ZS9TdGF0ZSc7XHJcbmltcG9ydCB7IElMb2dnZXIgfSBmcm9tIFwiLi4vdXRpbC9Mb2dnZXJcIjtcclxuaW1wb3J0IHsgSUFuaW1hdG9yIH0gZnJvbSAnb3V0a2l0LWFuaW1hdG9yJztcclxuaW1wb3J0IHsgQ29tcG9zaXRlIH0gZnJvbSBcIi4vQ29tcG9zaXRlXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgV2luZG93Q29tcG9uZW50IGV4dGVuZHMgQ29tcG9zaXRlIHtcclxuXHJcbiAgICBwcml2YXRlIF93aWR0aDogbnVtYmVyO1xyXG4gICAgcHJpdmF0ZSBfaGVpZ2h0OiBudW1iZXI7XHJcbiAgICBwcml2YXRlIF90b3A6IG51bWJlcjtcclxuICAgIHByaXZhdGUgX2xlZnQ6IG51bWJlcjtcclxuICAgIHByaXZhdGUgX2lzT3BlbjogYm9vbGVhbjtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihsb2dnZXI6IElMb2dnZXIsIGFuaW1hdG9yPzogSUFuaW1hdG9yKSB7XHJcbiAgICAgICAgc3VwZXIobG9nZ2VyLCBhbmltYXRvcik7XHJcblxyXG4gICAgICAgIC8vIFNldHVwIGRlZmF1bHRzXHJcbiAgICAgICAgdGhpcy5fd2lkdGggPSAwO1xyXG4gICAgICAgIHRoaXMuX2hlaWdodCA9IDA7XHJcbiAgICAgICAgdGhpcy5fdG9wID0gMDtcclxuICAgICAgICB0aGlzLl9sZWZ0ID0gMDtcclxuICAgICAgICB0aGlzLl9pc09wZW4gPSBmYWxzZTtcclxuXHJcbiAgICAgICAgLy8gUmVsYXkgZXZlbnRzXHJcbiAgICAgICAgdGhpcy5yZWdpc3RlckV2ZW50KCdvbicsICgpID0+IHsgcmV0dXJuIHRoaXMub24oKSB9KTtcclxuICAgICAgICB0aGlzLnJlZ2lzdGVyRXZlbnQoJ29mZicsICgpID0+IHsgcmV0dXJuIHRoaXMub2ZmKCkgfSk7XHJcbiAgICAgICAgdGhpcy5yZWdpc3RlckV2ZW50KCd0b2dnbGUnLCAoKSA9PiB7IHJldHVybiB0aGlzLnRvZ2dsZSgpIH0pO1xyXG4gICAgICAgIHRoaXMucmVnaXN0ZXJFdmVudCgnaW5pdCcsICgpID0+IHsgcmV0dXJuIHRoaXMuaW5pdCgpIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHdpZHRoKG46IG51bWJlcik6IHRoaXMge1xyXG4gICAgICAgIGlmIChuIDwgMCkge1xyXG4gICAgICAgICAgICB0aGlzLl9sb2dnZXIuZXJyb3IoYFdpZHRoIG11c3QgYmUgZ3JlYXRlciB0aGFuIG9yIGVxdWFsIHRvIHplcm8uYCk7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLl93aWR0aCA9IG47XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgaGVpZ2h0KG46IG51bWJlcik6IHRoaXMge1xyXG4gICAgICAgIGlmIChuIDwgMCkge1xyXG4gICAgICAgICAgICB0aGlzLl9sb2dnZXIuZXJyb3IoYEhlaWdodCBtdXN0IGJlIGdyZWF0ZXIgdGhhbiBvciBlcXVhbCB0byB6ZXJvLmApO1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcztcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5faGVpZ2h0ID0gbjtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuXHJcbiAgICB0b3AobjogbnVtYmVyKTogdGhpcyB7XHJcbiAgICAgICAgdGhpcy5fdG9wID0gbjtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuXHJcbiAgICBsZWZ0KG46IG51bWJlcik6IHRoaXMge1xyXG4gICAgICAgIHRoaXMuX2xlZnQgPSBuO1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogU2V0cyB0aGUgaW5pdGlhbCBzdGF0ZVxyXG4gICAgICogQHJldHVybnMge1Byb21pc2U8U3RhdGU+fSBcclxuICAgICAqL1xyXG4gICAgaW5pdCgpOiBQcm9taXNlPFN0YXRlPiB7XHJcbiAgICAgICAgbGV0IHN0YXRlID0gbmV3IFN0YXRlKCk7XHJcbiAgICAgICAgc3RhdGUub2tDbGFzc05hbWUgPSAnb2std2luZG93J1xyXG4gICAgICAgIHN0YXRlLnN0eWxlLnBvc2l0aW9uID0gJ2Fic29sdXRlJztcclxuICAgICAgICBzdGF0ZS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgICAgIHN0YXRlLnN0eWxlLnpJbmRleCA9ICc5OTk5J1xyXG4gICAgICAgIHN0YXRlLnN0eWxlLndpZHRoID0gYCR7dGhpcy5nZXRFbGVtZW50KCkucGFyZW50RWxlbWVudC5vZmZzZXRXaWR0aCAvIDJ9cHhgO1xyXG4gICAgICAgIHN0YXRlLnN0eWxlLmhlaWdodCA9IGAke3RoaXMuZ2V0RWxlbWVudCgpLnBhcmVudEVsZW1lbnQub2Zmc2V0SGVpZ2h0IC8gMn1weGA7XHJcbiAgICAgICAgc3RhdGUuc3R5bGUubGVmdCA9IGAke3RoaXMuX2xlZnR9cHhgO1xyXG4gICAgICAgIHN0YXRlLnN0eWxlLnRvcCA9IGAke3RoaXMuX3RvcH1weGA7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMucmVuZGVyKHN0YXRlKTtcclxuICAgIH1cclxuXHJcbiAgICB0b2dnbGUoKTogUHJvbWlzZTxTdGF0ZT4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9pc09wZW4gPyB0aGlzLm9mZigpIDogdGhpcy5vbigpO1xyXG4gICAgfVxyXG5cclxuICAgIG9uKCk6IFByb21pc2U8U3RhdGU+IHtcclxuICAgICAgICBpZiAodGhpcy5faXNPcGVuKVxyXG4gICAgICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmVzb2x2ZSh0aGlzLl9zdGF0ZSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMuX2lzT3BlbiA9IHRydWU7XHJcblxyXG4gICAgICAgIGxldCBzdGF0ZSA9IG5ldyBTdGF0ZSgpO1xyXG4gICAgICAgIHN0YXRlLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xyXG4gICAgICAgIHJldHVybiB0aGlzLnJlbmRlcihzdGF0ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgb2ZmKCk6IFByb21pc2U8U3RhdGU+IHtcclxuICAgICAgICBpZiAoIXRoaXMuX2lzT3BlbilcclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgICAgICAgICAgIHJlc29sdmUodGhpcy5fc3RhdGUpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB0aGlzLl9pc09wZW4gPSBmYWxzZTtcclxuXHJcbiAgICAgICAgbGV0IHN0YXRlID0gbmV3IFN0YXRlKCk7XHJcbiAgICAgICAgc3RhdGUuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgICAgICByZXR1cm4gdGhpcy5yZW5kZXIoc3RhdGUpO1xyXG4gICAgfVxyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbXBvbmVudC9XaW5kb3dDb21wb25lbnQudHMiLCJleHBvcnQgKiBmcm9tICcuL3N0YXRlL1N0YXRlJztcclxuZXhwb3J0ICogZnJvbSAnLi9jb21wb25lbnQvQ29tcG9uZW50RmFjdG9yeSc7XHJcbmV4cG9ydCAqIGZyb20gJy4vY29tcG9uZW50L0NvbXBvbmVudCc7XHJcbmV4cG9ydCAqIGZyb20gJy4vY29tcG9uZW50L0NvbXBvc2l0ZSc7XHJcbmV4cG9ydCAqIGZyb20gJy4vY29tcG9uZW50L0RyYXdlckNvbXBvbmVudCc7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL291dGtpdC50cyIsIi8qISBPdXRraXQgQW5pbWF0b3IgdjEuMC4zIC0gQ29weXJpZ2h0IDIwMTcgSmFtZXMgRWhseSAtIE1JVCBMaWNlbnNlICovXG4oZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShbXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJvay1hbmltYXRvclwiXSA9IGZhY3RvcnkoKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJvay1hbmltYXRvclwiXSA9IGZhY3RvcnkoKTtcbn0pKHRoaXMsIGZ1bmN0aW9uKCkge1xucmV0dXJuIC8qKioqKiovIChmdW5jdGlvbihtb2R1bGVzKSB7IC8vIHdlYnBhY2tCb290c3RyYXBcbi8qKioqKiovIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuLyoqKioqKi8gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbi8qKioqKiovIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuLyoqKioqKi9cbi8qKioqKiovIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbi8qKioqKiovIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuLyoqKioqKi8gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4vKioqKioqLyBcdFx0fVxuLyoqKioqKi8gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4vKioqKioqLyBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuLyoqKioqKi8gXHRcdFx0aTogbW9kdWxlSWQsXG4vKioqKioqLyBcdFx0XHRsOiBmYWxzZSxcbi8qKioqKiovIFx0XHRcdGV4cG9ydHM6IHt9XG4vKioqKioqLyBcdFx0fTtcbi8qKioqKiovXG4vKioqKioqLyBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4vKioqKioqLyBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4vKioqKioqL1xuLyoqKioqKi8gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbi8qKioqKiovIFx0XHRtb2R1bGUubCA9IHRydWU7XG4vKioqKioqL1xuLyoqKioqKi8gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4vKioqKioqLyBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuLyoqKioqKi8gXHR9XG4vKioqKioqL1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbi8qKioqKiovIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcbi8qKioqKiovXG4vKioqKioqLyBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4vKioqKioqLyBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbi8qKioqKiovIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4vKioqKioqLyBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuLyoqKioqKi8gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbi8qKioqKiovIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbi8qKioqKiovIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbi8qKioqKiovIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbi8qKioqKiovIFx0XHRcdH0pO1xuLyoqKioqKi8gXHRcdH1cbi8qKioqKiovIFx0fTtcbi8qKioqKiovXG4vKioqKioqLyBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4vKioqKioqLyBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuLyoqKioqKi8gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuLyoqKioqKi8gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbi8qKioqKiovIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4vKioqKioqLyBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuLyoqKioqKi8gXHRcdHJldHVybiBnZXR0ZXI7XG4vKioqKioqLyBcdH07XG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbi8qKioqKiovIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbi8qKioqKiovIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcbi8qKioqKiovXG4vKioqKioqLyBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLyoqKioqKi8gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAxKTtcbi8qKioqKiovIH0pXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyoqKioqKi8gKFtcbi8qIDAgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXCJ1c2Ugc3RyaWN0XCI7XG5cblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xudmFyIEFuaW1hdG9yVHJhbnNpdGlvbjtcbihmdW5jdGlvbiAoQW5pbWF0b3JUcmFuc2l0aW9uKSB7XG4gICAgQW5pbWF0b3JUcmFuc2l0aW9uW0FuaW1hdG9yVHJhbnNpdGlvbltcIkxpbmVhclwiXSA9IDBdID0gXCJMaW5lYXJcIjtcbiAgICBBbmltYXRvclRyYW5zaXRpb25bQW5pbWF0b3JUcmFuc2l0aW9uW1wiRWFzZUluXCJdID0gMV0gPSBcIkVhc2VJblwiO1xuICAgIEFuaW1hdG9yVHJhbnNpdGlvbltBbmltYXRvclRyYW5zaXRpb25bXCJFYXNlT3V0XCJdID0gMl0gPSBcIkVhc2VPdXRcIjtcbiAgICBBbmltYXRvclRyYW5zaXRpb25bQW5pbWF0b3JUcmFuc2l0aW9uW1wiRWFzZUluT3V0XCJdID0gM10gPSBcIkVhc2VJbk91dFwiO1xuICAgIEFuaW1hdG9yVHJhbnNpdGlvbltBbmltYXRvclRyYW5zaXRpb25bXCJQdWxsSW5cIl0gPSA0XSA9IFwiUHVsbEluXCI7XG4gICAgQW5pbWF0b3JUcmFuc2l0aW9uW0FuaW1hdG9yVHJhbnNpdGlvbltcIlB1c2hPdXRcIl0gPSA1XSA9IFwiUHVzaE91dFwiO1xuICAgIEFuaW1hdG9yVHJhbnNpdGlvbltBbmltYXRvclRyYW5zaXRpb25bXCJQdXNoUHVsbFwiXSA9IDZdID0gXCJQdXNoUHVsbFwiO1xufSkoQW5pbWF0b3JUcmFuc2l0aW9uID0gZXhwb3J0cy5BbmltYXRvclRyYW5zaXRpb24gfHwgKGV4cG9ydHMuQW5pbWF0b3JUcmFuc2l0aW9uID0ge30pKTtcblxuLyoqKi8gfSksXG4vKiAxICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblwidXNlIHN0cmljdFwiO1xuXG5cbnZhciBfY3JlYXRlQ2xhc3MgPSBmdW5jdGlvbiAoKSB7IGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfSByZXR1cm4gZnVuY3Rpb24gKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9OyB9KCk7XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbmZ1bmN0aW9uIF9fZXhwb3J0KG0pIHtcbiAgICBmb3IgKHZhciBwIGluIG0pIHtcbiAgICAgICAgaWYgKCFleHBvcnRzLmhhc093blByb3BlcnR5KHApKSBleHBvcnRzW3BdID0gbVtwXTtcbiAgICB9XG59XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG52YXIgY29tbW9uXzEgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDApO1xuXG52YXIgT3V0a2l0QW5pbWF0b3IgPSBmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gT3V0a2l0QW5pbWF0b3IoKSB7XG4gICAgICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBPdXRraXRBbmltYXRvcik7XG5cbiAgICAgICAgdGhpcy5lYXNlT3V0ID0gdGhpcy5tYWtlRWFzZU91dCh0aGlzLmVhc2VJbik7XG4gICAgICAgIHRoaXMuZWFzZUluT3V0ID0gdGhpcy5tYWtlRWFzZUluT3V0KHRoaXMuZWFzZUluKTtcbiAgICAgICAgdGhpcy5wdXNoT3V0ID0gdGhpcy5tYWtlRWFzZU91dCh0aGlzLnB1bGxJbik7XG4gICAgICAgIHRoaXMucHVzaFB1bGwgPSB0aGlzLm1ha2VFYXNlSW5PdXQodGhpcy5wdWxsSW4pO1xuICAgICAgICB0aGlzLl9kdXJhdGlvbiA9IDIwMDtcbiAgICAgICAgdGhpcy5fc3RlcCA9IGZ1bmN0aW9uICgpIHt9O1xuICAgICAgICB0aGlzLl9yYXRlID0gMTY7XG4gICAgICAgIHRoaXMuX3RyYW5zaXRpb24gPSB0aGlzLmxpbmVhcjtcbiAgICB9XG5cbiAgICBfY3JlYXRlQ2xhc3MoT3V0a2l0QW5pbWF0b3IsIFt7XG4gICAgICAgIGtleTogXCJzZXRTdGVwXCIsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBzZXRTdGVwKHN0ZXApIHtcbiAgICAgICAgICAgIHRoaXMuX3N0ZXAgPSBzdGVwO1xuICAgICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgIH1cbiAgICB9LCB7XG4gICAgICAgIGtleTogXCJzZXREdXJhdGlvblwiLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gc2V0RHVyYXRpb24oZHVyYXRpb24pIHtcbiAgICAgICAgICAgIHRoaXMuX2R1cmF0aW9uID0gZHVyYXRpb247XG4gICAgICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgICAgfVxuICAgIH0sIHtcbiAgICAgICAga2V5OiBcInNldFJhdGVcIixcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIHNldFJhdGUocmF0ZSkge1xuICAgICAgICAgICAgdGhpcy5fcmF0ZSA9IHJhdGU7XG4gICAgICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgICAgfVxuICAgIH0sIHtcbiAgICAgICAga2V5OiBcInNldFRyYW5zaXRpb25cIixcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIHNldFRyYW5zaXRpb24odHJhbnNpdGlvbikge1xuICAgICAgICAgICAgc3dpdGNoICh0cmFuc2l0aW9uKSB7XG4gICAgICAgICAgICAgICAgY2FzZSBjb21tb25fMS5BbmltYXRvclRyYW5zaXRpb24uRWFzZUluOlxuICAgICAgICAgICAgICAgICAgICB0aGlzLl90cmFuc2l0aW9uID0gdGhpcy5lYXNlSW47XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgY29tbW9uXzEuQW5pbWF0b3JUcmFuc2l0aW9uLkVhc2VPdXQ6XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX3RyYW5zaXRpb24gPSB0aGlzLmVhc2VPdXQ7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgY29tbW9uXzEuQW5pbWF0b3JUcmFuc2l0aW9uLkVhc2VJbk91dDpcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fdHJhbnNpdGlvbiA9IHRoaXMuZWFzZUluT3V0O1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIGNvbW1vbl8xLkFuaW1hdG9yVHJhbnNpdGlvbi5QdWxsSW46XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX3RyYW5zaXRpb24gPSB0aGlzLnB1bGxJbjtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSBjb21tb25fMS5BbmltYXRvclRyYW5zaXRpb24uUHVzaE91dDpcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fdHJhbnNpdGlvbiA9IHRoaXMucHVzaE91dDtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSBjb21tb25fMS5BbmltYXRvclRyYW5zaXRpb24uUHVzaFB1bGw6XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX3RyYW5zaXRpb24gPSB0aGlzLnB1c2hQdWxsO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgICB0aGlzLl90cmFuc2l0aW9uID0gdGhpcy5saW5lYXI7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgIH1cbiAgICB9LCB7XG4gICAgICAgIGtleTogXCJhbmltYXRlXCIsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBhbmltYXRlKHN0YXJ0KSB7XG4gICAgICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuXG4gICAgICAgICAgICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IEFycmF5KF9sZW4gPiAxID8gX2xlbiAtIDEgOiAwKSwgX2tleSA9IDE7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICAgICAgICAgICAgICBhcmdzW19rZXkgLSAxXSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlKSB7XG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiB3aW5kb3dbJ3JlcXVlc3RBbmltYXRpb25GcmFtZSddID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBfc3RhcnQgPSBwZXJmb3JtYW5jZS5ub3coKTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHJhZkFuaW1hdGUgPSBmdW5jdGlvbiByYWZBbmltYXRlKHRpbWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBwcm9ncmVzcyA9ICh0aW1lIC0gX3N0YXJ0KSAvIF90aGlzLl9kdXJhdGlvbjtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChwcm9ncmVzcyA+IDEpIHByb2dyZXNzID0gMTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBkZWx0YSA9IF90aGlzLl90cmFuc2l0aW9uKHByb2dyZXNzKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIF90aGlzLl9zdGVwKGRlbHRhLCBhcmdzKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChwcm9ncmVzcyA8IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUocmFmQW5pbWF0ZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUodHJ1ZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZShyYWZBbmltYXRlKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBfdGhpcy5faW50ZXJ2YWwgPSB3aW5kb3cuc2V0SW50ZXJ2YWwoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGRlbHRhVGltZSA9IERhdGUubm93KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgdGltZVBhc3NlZCA9IGRlbHRhVGltZSAtIHN0YXJ0O1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHByb2dyZXNzID0gdGltZVBhc3NlZCAvIF90aGlzLl9kdXJhdGlvbjtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChwcm9ncmVzcyA+IDEpIHByb2dyZXNzID0gMTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBkZWx0YSA9IF90aGlzLl90cmFuc2l0aW9uKHByb2dyZXNzKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIF90aGlzLl9zdGVwKGRlbHRhLCBhcmdzKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChwcm9ncmVzcyA9PSAxKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xlYXJJbnRlcnZhbChfdGhpcy5faW50ZXJ2YWwpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUodHJ1ZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0sIF90aGlzLl9yYXRlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH0sIHtcbiAgICAgICAga2V5OiBcImxpbmVhclwiLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gbGluZWFyKHByb2dyZXNzKSB7XG4gICAgICAgICAgICByZXR1cm4gcHJvZ3Jlc3M7XG4gICAgICAgIH1cbiAgICB9LCB7XG4gICAgICAgIGtleTogXCJlYXNlSW5cIixcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGVhc2VJbihwcm9ncmVzcykge1xuICAgICAgICAgICAgcmV0dXJuIE1hdGgucG93KHByb2dyZXNzLCA1KTtcbiAgICAgICAgfVxuICAgIH0sIHtcbiAgICAgICAga2V5OiBcInB1bGxJblwiLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gcHVsbEluKHByb2dyZXNzKSB7XG4gICAgICAgICAgICB2YXIgeCA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDogMjtcblxuICAgICAgICAgICAgcmV0dXJuIE1hdGgucG93KHByb2dyZXNzLCAyKSAqICgoeCArIDEpICogcHJvZ3Jlc3MgLSB4KTtcbiAgICAgICAgfVxuICAgIH0sIHtcbiAgICAgICAga2V5OiBcIm1ha2VFYXNlT3V0XCIsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBtYWtlRWFzZU91dCh0aW1pbmcpIHtcbiAgICAgICAgICAgIHJldHVybiBmdW5jdGlvbiAocHJvZ3Jlc3MpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gMSAtIHRpbWluZygxIC0gcHJvZ3Jlc3MpO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgIH0sIHtcbiAgICAgICAga2V5OiBcIm1ha2VFYXNlSW5PdXRcIixcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIG1ha2VFYXNlSW5PdXQodGltaW5nKSB7XG4gICAgICAgICAgICByZXR1cm4gZnVuY3Rpb24gKHByb2dyZXNzKSB7XG4gICAgICAgICAgICAgICAgaWYgKHByb2dyZXNzIDwgLjUpIHJldHVybiB0aW1pbmcoMiAqIHByb2dyZXNzKSAvIDI7ZWxzZSByZXR1cm4gKDIgLSB0aW1pbmcoMiAqICgxIC0gcHJvZ3Jlc3MpKSkgLyAyO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgIH1dKTtcblxuICAgIHJldHVybiBPdXRraXRBbmltYXRvcjtcbn0oKTtcblxuZXhwb3J0cy5PdXRraXRBbmltYXRvciA9IE91dGtpdEFuaW1hdG9yO1xuX19leHBvcnQoX193ZWJwYWNrX3JlcXVpcmVfXygwKSk7XG5cbi8qKiovIH0pXG4vKioqKioqLyBdKTtcbn0pO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSW5kbFluQmhZMnM2THk4dmQyVmljR0ZqYXk5MWJtbDJaWEp6WVd4TmIyUjFiR1ZFWldacGJtbDBhVzl1SWl3aWQyVmljR0ZqYXpvdkx5OTNaV0p3WVdOckwySnZiM1J6ZEhKaGNDQmlaR1ppWTJFek1HVXpaV05tTXpRME9ETTBaU0lzSW5kbFluQmhZMnM2THk4dkxpOXpjbU12WTI5dGJXOXVMblJ6SWl3aWQyVmljR0ZqYXpvdkx5OHVMM055WXk5cGJtUmxlQzUwY3lKZExDSnVZVzFsY3lJNlcxMHNJbTFoY0hCcGJtZHpJam9pTzBGQlFVRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRXNRMEZCUXp0QlFVTkVMRTg3UVVOV1FUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVRzN1FVRkZRVHRCUVVOQk96dEJRVVZCTzBGQlEwRTdRVUZEUVRzN08wRkJSMEU3UVVGRFFUczdRVUZGUVR0QlFVTkJPenRCUVVWQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFc1lVRkJTenRCUVVOTU8wRkJRMEU3TzBGQlJVRTdRVUZEUVR0QlFVTkJPMEZCUTBFc2JVTkJRVEpDTERCQ1FVRXdRaXhGUVVGRk8wRkJRM1pFTEhsRFFVRnBReXhsUVVGbE8wRkJRMmhFTzBGQlEwRTdRVUZEUVRzN1FVRkZRVHRCUVVOQkxEaEVRVUZ6UkN3clJFRkJLMFE3TzBGQlJYSklPMEZCUTBFN08wRkJSVUU3UVVGRFFUczdPenM3T3pzN096czdRVU55UkVFc1NVRlJRenRCUVZKRUxGZEJRVGhDTzBGQlF6RkNMREpFUVVGTk8wRkJRMDRzTWtSQlFVMDdRVUZEVGl3MFJFRkJUenRCUVVOUUxEaEVRVUZUTzBGQlExUXNNa1JCUVUwN1FVRkRUaXcwUkVGQlR6dEJRVU5RTERaRVFVTktPMEZCUVVNc1IwRlNOa0lzY1VKQlFXeENMRkZCUVd0Q0xIVkNRVUZzUWl4UlFVRnJRaXh4UWtGUk4wSXNTenM3T3pzN096czdPenM3T3pzN096czdPenRCUTJoQ1JDeHRRMEZoUVRzN08wRkJVMGs3T3p0QlFXOUpVU3hoUVVGUExGVkJRVThzUzBGQldTeFpRVUZMTEV0QlFWTTdRVUZGZUVNc1lVRkJVeXhaUVVGUExFdEJRV01zWTBGQlN5eExRVUZUTzBGQlRUVkRMR0ZCUVU4c1ZVRkJUeXhMUVVGWkxGbEJRVXNzUzBGQlV6dEJRVVY0UXl4aFFVRlJMRmRCUVU4c1MwRkJZeXhqUVVGTExFdEJRVk03UVVFM1NUTkRMR0ZCUVZVc1dVRkJUenRCUVVOcVFpeGhRVUZOTEZGQlFVY3NXVUZCVVN4RFFVRkZPMEZCUTI1Q0xHRkJRVTBzVVVGQlRUdEJRVU5hTEdGQlFWa3NZMEZCVHl4TFFVTXpRanRCUVZOUE96czdPMmREUVVGbE8wRkJRMlFzYVVKQlFVMHNVVUZCVVR0QlFVTmFMRzFDUVVOV08wRkJVMWM3T3p0dlEwRkJhVUk3UVVGRGNFSXNhVUpCUVZVc1dVRkJXVHRCUVVOd1FpeHRRa0ZEVmp0QlFWTlBPenM3WjBOQlFXRTdRVUZEV2l4cFFrRkJUU3hSUVVGUk8wRkJRMW9zYlVKQlExWTdRVUZUWVRzN08zTkRRVUVyUWp0QlFVTnFReXh2UWtGQll6dEJRVU5xUWl4eFFrRkJTeXhUUVVGclFpeHRRa0ZCVHp0QlFVTjBRaXg1UWtGQldTeGpRVUZQTEV0QlFWRTdRVUZEZWtJN1FVRkRWaXh4UWtGQlN5eFRRVUZyUWl4dFFrRkJVVHRCUVVOMlFpeDVRa0ZCV1N4alFVRlBMRXRCUVZNN1FVRkRNVUk3UVVGRFZpeHhRa0ZCU3l4VFFVRnJRaXh0UWtGQlZUdEJRVU42UWl4NVFrRkJXU3hqUVVGUExFdEJRVmM3UVVGRE5VSTdRVUZEVml4eFFrRkJTeXhUUVVGclFpeHRRa0ZCVHp0QlFVTjBRaXg1UWtGQldTeGpRVUZQTEV0QlFWRTdRVUZEZWtJN1FVRkRWaXh4UWtGQlN5eFRRVUZyUWl4dFFrRkJVVHRCUVVOMlFpeDVRa0ZCV1N4alFVRlBMRXRCUVZNN1FVRkRNVUk3UVVGRFZpeHhRa0ZCU3l4VFFVRnJRaXh0UWtGQlV6dEJRVU40UWl4NVFrRkJXU3hqUVVGUExFdEJRVlU3UVVGRE0wSTdRVUZEVmp0QlFVTlJMSGxDUVVGWkxHTkJRVThzUzBGQlVUdEJRVVYwUXpzN1FVRkRTeXh0UWtGRFZqdEJRVkZQT3pzN1owTkJRV2xDT3pzN08wRkJRV003T3p0QlFVTTFRaXgxUWtGQldTeFJRVUZETEZWQlFWRTdRVUZEY0VJc2IwSkJRVU1zVDBGQllTeFBRVUY1UWl3MlFrRkJaMElzV1VGQlJUdEJRVU40UkN4M1FrRkJVeXhUUVVGakxGbEJRVTg3UVVGRE9VSXNkMEpCUVdkQ0xHRkJRVWNzYjBKQlFVczdRVUZEY0VJc05FSkJRVmtzVjBGQlJ5eERRVUZMTEU5QlFWTXNWVUZCVHl4TlFVRlhPMEZCUXpWRExEUkNRVUZUTEZkQlFVc3NSMEZCVXl4WFFVRkxPMEZCUnk5Q0xEUkNRVUZUTEZGQlFVOHNUVUZCV1N4WlFVRlZPMEZCUld4RExEaENRVUZOTEUxQlFVMHNUMEZCVVR0QlFVVnlRaXcwUWtGQlV5eFhRVUZMTEVkQlFVVTdRVUZEVFN4clJFRkRla0k3UVVGQlRTd3JRa0ZCUlR0QlFVTkhMRzlEUVVOWU8wRkJRMG83UVVGQlF6dEJRVU52UWl3d1EwRkRla0k3UVVGQlRTeDFRa0ZCUlR0QlFVTkJMREJDUVVGVkxHMUNRVUZ4UWl4WlFVRkRPMEZCUTJoRExEUkNRVUZoTEZsQlFVOHNTMEZCVHp0QlFVTXpRaXcwUWtGQll5eGhRVUZaTEZsQlFWTTdRVUZEYmtNc05FSkJRVmtzVjBGQllTeGhRVUZQTEUxQlFWYzdRVUZGZUVNc05FSkJRVk1zVjBGQlN5eEhRVUZUTEZkQlFVazdRVUZGT1VJc05FSkJRVk1zVVVGQlR5eE5RVUZaTEZsQlFWYzdRVUZGYmtNc09FSkJRVTBzVFVGQlRTeFBRVUZSTzBGQlJYSkNMRFJDUVVGVExGbEJRVTBzUjBGQlJUdEJRVU5JTERCRFFVRkxMRTFCUVZrN1FVRkRka0lzYjBOQlExZzdRVUZEU2p0QlFVRkRMSEZDUVdaelFpeEZRV1ZvUWl4TlFVTllPMEZCUTBvN1FVRkRTaXhoUVhSRFZ6dEJRWGREUnpzN095dENRVUZwUWp0QlFVTnlRaXh0UWtGRFZqdEJRVVZqT3pzN0swSkJRV2xDTzBGQlEzSkNMRzFDUVVGTExFdEJRVWtzU1VGQlV5eFZRVU0xUWp0QlFVMWpPenM3SzBKQlFXbENPMmRDUVVGRkxIZEZRVUZoT3p0QlFVTndReXh0UWtGQlN5eExRVUZKTEVsQlFWTXNWVUZCVHl4TlFVRkRMRU5CUVVVc1NVRkJTeXhMUVVGWExGZEJRM1JFTzBGQlRXMUNPenM3YjBOQlFXbENPMEZCUXpGQ0xHMUNRVUZETEZWQlFUQkNPMEZCUTNaQ0xIVkNRVUZGTEVsQlFWTXNUMEZCUlN4SlFVTjJRanRCUVVOS08wRkJSWEZDT3pzN2MwTkJRVTg3UVVGRGJFSXNiVUpCUVVNc1ZVRkJhMEk3UVVGRGJFSXNiMEpCUVZNc1YwRkJUU3hKUVVOU0xFOUJRVThzVDBGQlJTeEpRVUZaTEZsQlF6TkNMRTlCUTAwc1QwRkJReXhEUVVGRkxFbEJRVk1zVDBGQlN5eExRVUZGTEVsQlFXTXNZMEZETDBNN1FVRkRTanRCUVVOSU96czdPenM3UVVGMlMwUXNlVUpCZFV0RE8wRkJSVVFzTmtKQlFYbENMRWtpTENKbWFXeGxJam9pWkdsemRDOXZkWFJyYVhRdFlXNXBiV0YwYjNJdWFuTWlMQ0p6YjNWeVkyVnpRMjl1ZEdWdWRDSTZXeUlvWm5WdVkzUnBiMjRnZDJWaWNHRmphMVZ1YVhabGNuTmhiRTF2WkhWc1pVUmxabWx1YVhScGIyNG9jbTl2ZEN3Z1ptRmpkRzl5ZVNrZ2UxeHVYSFJwWmloMGVYQmxiMllnWlhod2IzSjBjeUE5UFQwZ0oyOWlhbVZqZENjZ0ppWWdkSGx3Wlc5bUlHMXZaSFZzWlNBOVBUMGdKMjlpYW1WamRDY3BYRzVjZEZ4MGJXOWtkV3hsTG1WNGNHOXlkSE1nUFNCbVlXTjBiM0o1S0NrN1hHNWNkR1ZzYzJVZ2FXWW9kSGx3Wlc5bUlHUmxabWx1WlNBOVBUMGdKMloxYm1OMGFXOXVKeUFtSmlCa1pXWnBibVV1WVcxa0tWeHVYSFJjZEdSbFptbHVaU2hiWFN3Z1ptRmpkRzl5ZVNrN1hHNWNkR1ZzYzJVZ2FXWW9kSGx3Wlc5bUlHVjRjRzl5ZEhNZ1BUMDlJQ2R2WW1wbFkzUW5LVnh1WEhSY2RHVjRjRzl5ZEhOYlhDSnZheTFoYm1sdFlYUnZjbHdpWFNBOUlHWmhZM1J2Y25rb0tUdGNibHgwWld4elpWeHVYSFJjZEhKdmIzUmJYQ0p2YXkxaGJtbHRZWFJ2Y2x3aVhTQTlJR1poWTNSdmNua29LVHRjYm4wcEtIUm9hWE1zSUdaMWJtTjBhVzl1S0NrZ2UxeHVjbVYwZFhKdUlGeHVYRzVjYmk4dklGZEZRbEJCUTBzZ1JrOVBWRVZTSUM4dlhHNHZMeUIzWldKd1lXTnJMM1Z1YVhabGNuTmhiRTF2WkhWc1pVUmxabWx1YVhScGIyNGlMQ0lnWEhRdkx5QlVhR1VnYlc5a2RXeGxJR05oWTJobFhHNGdYSFIyWVhJZ2FXNXpkR0ZzYkdWa1RXOWtkV3hsY3lBOUlIdDlPMXh1WEc0Z1hIUXZMeUJVYUdVZ2NtVnhkV2x5WlNCbWRXNWpkR2x2Ymx4dUlGeDBablZ1WTNScGIyNGdYMTkzWldKd1lXTnJYM0psY1hWcGNtVmZYeWh0YjJSMWJHVkpaQ2tnZTF4dVhHNGdYSFJjZEM4dklFTm9aV05ySUdsbUlHMXZaSFZzWlNCcGN5QnBiaUJqWVdOb1pWeHVJRngwWEhScFppaHBibk4wWVd4c1pXUk5iMlIxYkdWelcyMXZaSFZzWlVsa1hTa2dlMXh1SUZ4MFhIUmNkSEpsZEhWeWJpQnBibk4wWVd4c1pXUk5iMlIxYkdWelcyMXZaSFZzWlVsa1hTNWxlSEJ2Y25Sek8xeHVJRngwWEhSOVhHNGdYSFJjZEM4dklFTnlaV0YwWlNCaElHNWxkeUJ0YjJSMWJHVWdLR0Z1WkNCd2RYUWdhWFFnYVc1MGJ5QjBhR1VnWTJGamFHVXBYRzRnWEhSY2RIWmhjaUJ0YjJSMWJHVWdQU0JwYm5OMFlXeHNaV1JOYjJSMWJHVnpXMjF2WkhWc1pVbGtYU0E5SUh0Y2JpQmNkRngwWEhScE9pQnRiMlIxYkdWSlpDeGNiaUJjZEZ4MFhIUnNPaUJtWVd4elpTeGNiaUJjZEZ4MFhIUmxlSEJ2Y25Sek9pQjdmVnh1SUZ4MFhIUjlPMXh1WEc0Z1hIUmNkQzh2SUVWNFpXTjFkR1VnZEdobElHMXZaSFZzWlNCbWRXNWpkR2x2Ymx4dUlGeDBYSFJ0YjJSMWJHVnpXMjF2WkhWc1pVbGtYUzVqWVd4c0tHMXZaSFZzWlM1bGVIQnZjblJ6TENCdGIyUjFiR1VzSUcxdlpIVnNaUzVsZUhCdmNuUnpMQ0JmWDNkbFluQmhZMnRmY21WeGRXbHlaVjlmS1R0Y2JseHVJRngwWEhRdkx5QkdiR0ZuSUhSb1pTQnRiMlIxYkdVZ1lYTWdiRzloWkdWa1hHNGdYSFJjZEcxdlpIVnNaUzVzSUQwZ2RISjFaVHRjYmx4dUlGeDBYSFF2THlCU1pYUjFjbTRnZEdobElHVjRjRzl5ZEhNZ2IyWWdkR2hsSUcxdlpIVnNaVnh1SUZ4MFhIUnlaWFIxY200Z2JXOWtkV3hsTG1WNGNHOXlkSE03WEc0Z1hIUjlYRzVjYmx4dUlGeDBMeThnWlhod2IzTmxJSFJvWlNCdGIyUjFiR1Z6SUc5aWFtVmpkQ0FvWDE5M1pXSndZV05yWDIxdlpIVnNaWE5mWHlsY2JpQmNkRjlmZDJWaWNHRmphMTl5WlhGMWFYSmxYMTh1YlNBOUlHMXZaSFZzWlhNN1hHNWNiaUJjZEM4dklHVjRjRzl6WlNCMGFHVWdiVzlrZFd4bElHTmhZMmhsWEc0Z1hIUmZYM2RsWW5CaFkydGZjbVZ4ZFdseVpWOWZMbU1nUFNCcGJuTjBZV3hzWldSTmIyUjFiR1Z6TzF4dVhHNGdYSFF2THlCa1pXWnBibVVnWjJWMGRHVnlJR1oxYm1OMGFXOXVJR1p2Y2lCb1lYSnRiMjU1SUdWNGNHOXlkSE5jYmlCY2RGOWZkMlZpY0dGamExOXlaWEYxYVhKbFgxOHVaQ0E5SUdaMWJtTjBhVzl1S0dWNGNHOXlkSE1zSUc1aGJXVXNJR2RsZEhSbGNpa2dlMXh1SUZ4MFhIUnBaaWdoWDE5M1pXSndZV05yWDNKbGNYVnBjbVZmWHk1dktHVjRjRzl5ZEhNc0lHNWhiV1VwS1NCN1hHNGdYSFJjZEZ4MFQySnFaV04wTG1SbFptbHVaVkJ5YjNCbGNuUjVLR1Y0Y0c5eWRITXNJRzVoYldVc0lIdGNiaUJjZEZ4MFhIUmNkR052Ym1acFozVnlZV0pzWlRvZ1ptRnNjMlVzWEc0Z1hIUmNkRngwWEhSbGJuVnRaWEpoWW14bE9pQjBjblZsTEZ4dUlGeDBYSFJjZEZ4MFoyVjBPaUJuWlhSMFpYSmNiaUJjZEZ4MFhIUjlLVHRjYmlCY2RGeDBmVnh1SUZ4MGZUdGNibHh1SUZ4MEx5OGdaMlYwUkdWbVlYVnNkRVY0Y0c5eWRDQm1kVzVqZEdsdmJpQm1iM0lnWTI5dGNHRjBhV0pwYkdsMGVTQjNhWFJvSUc1dmJpMW9ZWEp0YjI1NUlHMXZaSFZzWlhOY2JpQmNkRjlmZDJWaWNHRmphMTl5WlhGMWFYSmxYMTh1YmlBOUlHWjFibU4wYVc5dUtHMXZaSFZzWlNrZ2UxeHVJRngwWEhSMllYSWdaMlYwZEdWeUlEMGdiVzlrZFd4bElDWW1JRzF2WkhWc1pTNWZYMlZ6VFc5a2RXeGxJRDljYmlCY2RGeDBYSFJtZFc1amRHbHZiaUJuWlhSRVpXWmhkV3gwS0NrZ2V5QnlaWFIxY200Z2JXOWtkV3hsV3lka1pXWmhkV3gwSjEwN0lIMGdPbHh1SUZ4MFhIUmNkR1oxYm1OMGFXOXVJR2RsZEUxdlpIVnNaVVY0Y0c5eWRITW9LU0I3SUhKbGRIVnliaUJ0YjJSMWJHVTdJSDA3WEc0Z1hIUmNkRjlmZDJWaWNHRmphMTl5WlhGMWFYSmxYMTh1WkNoblpYUjBaWElzSUNkaEp5d2daMlYwZEdWeUtUdGNiaUJjZEZ4MGNtVjBkWEp1SUdkbGRIUmxjanRjYmlCY2RIMDdYRzVjYmlCY2RDOHZJRTlpYW1WamRDNXdjbTkwYjNSNWNHVXVhR0Z6VDNkdVVISnZjR1Z5ZEhrdVkyRnNiRnh1SUZ4MFgxOTNaV0p3WVdOclgzSmxjWFZwY21WZlh5NXZJRDBnWm5WdVkzUnBiMjRvYjJKcVpXTjBMQ0J3Y205d1pYSjBlU2tnZXlCeVpYUjFjbTRnVDJKcVpXTjBMbkJ5YjNSdmRIbHdaUzVvWVhOUGQyNVFjbTl3WlhKMGVTNWpZV3hzS0c5aWFtVmpkQ3dnY0hKdmNHVnlkSGtwT3lCOU8xeHVYRzRnWEhRdkx5QmZYM2RsWW5CaFkydGZjSFZpYkdsalgzQmhkR2hmWDF4dUlGeDBYMTkzWldKd1lXTnJYM0psY1hWcGNtVmZYeTV3SUQwZ1hDSmNJanRjYmx4dUlGeDBMeThnVEc5aFpDQmxiblJ5ZVNCdGIyUjFiR1VnWVc1a0lISmxkSFZ5YmlCbGVIQnZjblJ6WEc0Z1hIUnlaWFIxY200Z1gxOTNaV0p3WVdOclgzSmxjWFZwY21WZlh5aGZYM2RsWW5CaFkydGZjbVZ4ZFdseVpWOWZMbk1nUFNBeEtUdGNibHh1WEc1Y2JpOHZJRmRGUWxCQlEwc2dSazlQVkVWU0lDOHZYRzR2THlCM1pXSndZV05yTDJKdmIzUnpkSEpoY0NCaVpHWmlZMkV6TUdVelpXTm1NelEwT0RNMFpTSXNJbVY0Y0c5eWRDQnBiblJsY21aaFkyVWdTVUZ1YVcxaGRHOXlJSHRjY2x4dUlDQWdJR0Z1YVcxaGRHVW9jM1JoY25RL09pQnVkVzFpWlhJc0lDNHVMbUZ5WjNNZ09pQmhibmxiWFNrNklGQnliMjFwYzJVOFltOXZiR1ZoYmo0N1hISmNiaUFnSUNCelpYUlRkR1Z3S0hOMFpYQTZJRVoxYm1OMGFXOXVLVG9nZEdocGN6dGNjbHh1SUNBZ0lITmxkRVIxY21GMGFXOXVLR1IxY21GMGFXOXVPaUJ1ZFcxaVpYSXBPaUIwYUdsek8xeHlYRzRnSUNBZ2MyVjBVbUYwWlNoeVlYUmxPaUJ1ZFcxaVpYSXBPaUIwYUdsek8xeHlYRzRnSUNBZ2MyVjBWSEpoYm5OcGRHbHZiaWgwY21GdWMybDBhVzl1T2lCQmJtbHRZWFJ2Y2xSeVlXNXphWFJwYjI0cE8xeHlYRzU5WEhKY2JseHlYRzVsZUhCdmNuUWdaVzUxYlNCQmJtbHRZWFJ2Y2xSeVlXNXphWFJwYjI0Z2UxeHlYRzRnSUNBZ1RHbHVaV0Z5TEZ4eVhHNGdJQ0FnUldGelpVbHVMRnh5WEc0Z0lDQWdSV0Z6WlU5MWRDeGNjbHh1SUNBZ0lFVmhjMlZKYms5MWRDeGNjbHh1SUNBZ0lGQjFiR3hKYml4Y2NseHVJQ0FnSUZCMWMyaFBkWFFzWEhKY2JpQWdJQ0JRZFhOb1VIVnNiRnh5WEc1OVhISmNibHh1WEc1Y2JpOHZJRmRGUWxCQlEwc2dSazlQVkVWU0lDOHZYRzR2THlBdUwzTnlZeTlqYjIxdGIyNHVkSE1pTENKcGJYQnZjblFnZXlCSlFXNXBiV0YwYjNJc0lFRnVhVzFoZEc5eVZISmhibk5wZEdsdmJpQjlJR1p5YjIwZ1hDSXVMMk52YlcxdmJsd2lPMXh5WEc1Y2NseHVMeW9xWEhKY2JpQXFJRTkxZEd0cGRDQkJibWx0WVhSdmNseHlYRzRnS2lCQklITnBiWEJzWlNCaGJtbHRZWFJ2Y2lCamJHRnpjeUIwYUdGMElHaGhjeUIwYVcxcGJtY2dablZ1WTNScGIyNXpMaUFnU0dWaGRtbHNlU0JwYm5Od2FYSmxaQ0JpZVNCMGFHVWdYSEpjYmlBcUlHcGhkbUZ6WTNKcGNIUWdZMnhoYzNNZ1lYUWdhSFIwY0RvdkwycGhkbUZ6WTNKcGNIUXVhVzVtYnk5cWN5MWhibWx0WVhScGIyNHVJQ0JKWmlCaGRtRnBiR0ZpYkdVZ2FYUWdkMmxzYkZ4eVhHNGdLaUIxYzJVZ2NtVnhkV1Z6ZEVGdWFXMWhkR2x2YmtaeVlXMWxJRzl5SUdsMElIZHBiR3dnWm1Gc2JDQmlZV05ySUhSdklITmxkRWx1ZEdWeWRtRnNMaUJCYm1sdFlYUmxYSEpjYmlBcUlISmxkSFZ5Ym5NZ1lTQndjbTl0YVhObElITnZJSFJvWVhRZ2VXOTFJR05oYmlCemRHRmpheUJoYm1sdFlYUnBiMjV6TGx4eVhHNGdLaUJjY2x4dUlDb2dRR1Y0Y0c5eWRGeHlYRzRnS2lCQVkyeGhjM01nVDNWMGEybDBRVzVwYldGMGIzSmNjbHh1SUNvZ1FHbHRjR3hsYldWdWRITWdlMGxCYm1sdFlYUnZjbjFjY2x4dUlDb3ZYSEpjYm1WNGNHOXlkQ0JqYkdGemN5QlBkWFJyYVhSQmJtbHRZWFJ2Y2lCcGJYQnNaVzFsYm5SeklFbEJibWx0WVhSdmNpQjdYSEpjYmx4eVhHNGdJQ0FnY0hWaWJHbGpJSE4wWVhKME9pQnVkVzFpWlhJN1hISmNiaUFnSUNCd2NtbDJZWFJsSUY5a2RYSmhkR2x2YmpvZ2JuVnRZbVZ5TzF4eVhHNGdJQ0FnY0hKcGRtRjBaU0JmYzNSbGNEb2dSblZ1WTNScGIyNDdYSEpjYmlBZ0lDQndjbWwyWVhSbElGOXBiblJsY25aaGJEb2diblZ0WW1WeU8xeHlYRzRnSUNBZ2NISnBkbUYwWlNCZmNtRjBaVG9nYm5WdFltVnlPMXh5WEc0Z0lDQWdjSEpwZG1GMFpTQmZkSEpoYm5OcGRHbHZiam9nUm5WdVkzUnBiMjQ3WEhKY2JseHlYRzRnSUNBZ2NIVmliR2xqSUdOdmJuTjBjblZqZEc5eUtDa2dlMXh5WEc0Z0lDQWdJQ0FnSUhSb2FYTXVYMlIxY21GMGFXOXVJRDBnTWpBd08xeHlYRzRnSUNBZ0lDQWdJSFJvYVhNdVgzTjBaWEFnUFNBb0tTQTlQaUI3SUgwN1hISmNiaUFnSUNBZ0lDQWdkR2hwY3k1ZmNtRjBaU0E5SURFMk8xeHlYRzRnSUNBZ0lDQWdJSFJvYVhNdVgzUnlZVzV6YVhScGIyNGdQU0IwYUdsekxteHBibVZoY2p0Y2NseHVJQ0FnSUgxY2NseHVYSEpjYmlBZ0lDQXZLaXBjY2x4dUlDQWdJQ0FxSUZObGRITWdkR2hsSUhOMFpYQWdablZ1WTNScGIyNGdZMkZzYkdWa0lHSjVJR0Z1YVcxaGRHVWdZWFFnWldGamFDQnBiblJsY25aaGJGeHlYRzRnSUNBZ0lDb2dYSEpjYmlBZ0lDQWdLaUJBY0dGeVlXMGdjM1JsY0NCR2RXNWpkR2x2YmlCMGFHRjBJSFJoYTJWeklHRWdaR1ZzZEdFZ1lXNWtJR0Z5WjNOY2NseHVJQ0FnSUNBcUlFQnlaWFIxY201eklIdDBhR2x6ZlNCY2NseHVJQ0FnSUNBcUlFQnRaVzFpWlhKdlppQlBkWFJyYVhSQmJtbHRZWFJ2Y2x4eVhHNGdJQ0FnSUNvdlhISmNiaUFnSUNCelpYUlRkR1Z3S0hOMFpYQTZJRVoxYm1OMGFXOXVLVG9nZEdocGN5QjdYSEpjYmlBZ0lDQWdJQ0FnZEdocGN5NWZjM1JsY0NBOUlITjBaWEE3WEhKY2JpQWdJQ0FnSUNBZ2NtVjBkWEp1SUhSb2FYTTdYSEpjYmlBZ0lDQjlYSEpjYmx4eVhHNGdJQ0FnTHlvcVhISmNiaUFnSUNBZ0tpQlRaWFJ6SUhSb1pTQjBiM1JoYkNCa2RYSmhkR2x2YmlCdlppQjBhR1VnWVc1cGJXRjBhVzl1WEhKY2JpQWdJQ0FnS2lCY2NseHVJQ0FnSUNBcUlFQndZWEpoYlNCN2JuVnRZbVZ5ZlNCa2RYSmhkR2x2YmlCdGFXeHNhWE5sWTI5dVpITWdiMllnYzNCc1pXNWthV1FnWVc1cGJXRjBhVzl1SUNoa1pXWmhkV3gwT2lBeU1EQnRjeWxjY2x4dUlDQWdJQ0FxSUVCeVpYUjFjbTV6SUh0MGFHbHpmU0JjY2x4dUlDQWdJQ0FxSUVCdFpXMWlaWEp2WmlCUGRYUnJhWFJCYm1sdFlYUnZjbHh5WEc0Z0lDQWdJQ292WEhKY2JpQWdJQ0J6WlhSRWRYSmhkR2x2Ymloa2RYSmhkR2x2YmpvZ2JuVnRZbVZ5S1RvZ2RHaHBjeUI3WEhKY2JpQWdJQ0FnSUNBZ2RHaHBjeTVmWkhWeVlYUnBiMjRnUFNCa2RYSmhkR2x2Ymp0Y2NseHVJQ0FnSUNBZ0lDQnlaWFIxY200Z2RHaHBjenRjY2x4dUlDQWdJSDFjY2x4dVhISmNiaUFnSUNBdktpcGNjbHh1SUNBZ0lDQXFJRk5sZENCMGFHVWdhVzUwWlhKMllXd2djbUYwWlNCdlppQjBhR1VnWVc1cGJXRjBhVzl1WEhKY2JpQWdJQ0FnS2lCY2NseHVJQ0FnSUNBcUlFQndZWEpoYlNCN2JuVnRZbVZ5ZlNCeVlYUmxJR2x1ZEdWeWRtRnNJSEpoZEdVZ2FXNGdiV2xzYkdselpXTnZibVJ6SUNoa1pXWmhkV3gwT2lBeE5tMXpLVnh5WEc0Z0lDQWdJQ29nUUhKbGRIVnlibk1nZTNSb2FYTjlJRnh5WEc0Z0lDQWdJQ29nUUcxbGJXSmxjbTltSUU5MWRHdHBkRUZ1YVcxaGRHOXlYSEpjYmlBZ0lDQWdLaTljY2x4dUlDQWdJSE5sZEZKaGRHVW9jbUYwWlRvZ2JuVnRZbVZ5S1RvZ2RHaHBjeUI3WEhKY2JpQWdJQ0FnSUNBZ2RHaHBjeTVmY21GMFpTQTlJSEpoZEdVN1hISmNiaUFnSUNBZ0lDQWdjbVYwZFhKdUlIUm9hWE03WEhKY2JpQWdJQ0I5WEhKY2JseHlYRzRnSUNBZ0x5b3FYSEpjYmlBZ0lDQWdLaUJUWlhSeklIUm9aU0IwYVcxcGJtY2dablZ1WTNScGIyNGdkWE5sWkNCaWVTQjBhR1VnWVc1cGJXRjBaU0JtZFc1amRHbHZiaUFvWkdWbVlYVnNkRG9nVEdsdVpXRnlLVnh5WEc0Z0lDQWdJQ29nWEhKY2JpQWdJQ0FnS2lCQWNHRnlZVzBnZTBGdWFXMWhkRzl5VkhKaGJuTnBkR2x2Ym4wZ2RISmhibk5wZEdsdmJpQlVhVzFwYm1jZ1puVnVZM1JwYjI1Y2NseHVJQ0FnSUNBcUlFQnlaWFIxY201eklIdDBhR2x6ZlNCY2NseHVJQ0FnSUNBcUlFQnRaVzFpWlhKdlppQlBkWFJyYVhSQmJtbHRZWFJ2Y2x4eVhHNGdJQ0FnSUNvdlhISmNiaUFnSUNCelpYUlVjbUZ1YzJsMGFXOXVLSFJ5WVc1emFYUnBiMjQ2SUVGdWFXMWhkRzl5VkhKaGJuTnBkR2x2YmlrNklIUm9hWE1nZTF4eVhHNGdJQ0FnSUNBZ0lITjNhWFJqYUNBb2RISmhibk5wZEdsdmJpa2dlMXh5WEc0Z0lDQWdJQ0FnSUNBZ0lDQmpZWE5sSUVGdWFXMWhkRzl5VkhKaGJuTnBkR2x2Ymk1RllYTmxTVzQ2WEhKY2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCMGFHbHpMbDkwY21GdWMybDBhVzl1SUQwZ2RHaHBjeTVsWVhObFNXNDdYSEpjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0JpY21WaGF6dGNjbHh1SUNBZ0lDQWdJQ0FnSUNBZ1kyRnpaU0JCYm1sdFlYUnZjbFJ5WVc1emFYUnBiMjR1UldGelpVOTFkRHBjY2x4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUhSb2FYTXVYM1J5WVc1emFYUnBiMjRnUFNCMGFHbHpMbVZoYzJWUGRYUTdYSEpjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0JpY21WaGF6dGNjbHh1SUNBZ0lDQWdJQ0FnSUNBZ1kyRnpaU0JCYm1sdFlYUnZjbFJ5WVc1emFYUnBiMjR1UldGelpVbHVUM1YwT2x4eVhHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2RHaHBjeTVmZEhKaGJuTnBkR2x2YmlBOUlIUm9hWE11WldGelpVbHVUM1YwTzF4eVhHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ1luSmxZV3M3WEhKY2JpQWdJQ0FnSUNBZ0lDQWdJR05oYzJVZ1FXNXBiV0YwYjNKVWNtRnVjMmwwYVc5dUxsQjFiR3hKYmpwY2NseHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lIUm9hWE11WDNSeVlXNXphWFJwYjI0Z1BTQjBhR2x6TG5CMWJHeEpianRjY2x4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUdKeVpXRnJPMXh5WEc0Z0lDQWdJQ0FnSUNBZ0lDQmpZWE5sSUVGdWFXMWhkRzl5VkhKaGJuTnBkR2x2Ymk1UWRYTm9UM1YwT2x4eVhHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2RHaHBjeTVmZEhKaGJuTnBkR2x2YmlBOUlIUm9hWE11Y0hWemFFOTFkRHRjY2x4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUdKeVpXRnJPMXh5WEc0Z0lDQWdJQ0FnSUNBZ0lDQmpZWE5sSUVGdWFXMWhkRzl5VkhKaGJuTnBkR2x2Ymk1UWRYTm9VSFZzYkRwY2NseHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lIUm9hWE11WDNSeVlXNXphWFJwYjI0Z1BTQjBhR2x6TG5CMWMyaFFkV3hzTzF4eVhHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ1luSmxZV3M3WEhKY2JpQWdJQ0FnSUNBZ0lDQWdJR1JsWm1GMWJIUTZYSEpjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0IwYUdsekxsOTBjbUZ1YzJsMGFXOXVJRDBnZEdocGN5NXNhVzVsWVhJN1hISmNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQmljbVZoYXp0Y2NseHVJQ0FnSUNBZ0lDQjlYSEpjYmlBZ0lDQWdJQ0FnY21WMGRYSnVJSFJvYVhNN1hISmNiaUFnSUNCOVhISmNibHh5WEc0Z0lDQWdMeW9xWEhKY2JpQWdJQ0FnS2lCQmJtbHRZWFJsY3lCMGFHVWdKM04wWlhBbklHWjFibU4wYVc5dUlHOTJaWElnSjJSMWNtRjBhVzl1SnlCaGRDQnBiblJsY25aaGJDQW5jbUYwWlNjdUlGeHlYRzRnSUNBZ0lDb2dVM1JsY0NCcGN5QmpZV3hzWldRZ2QybDBhQ0JrWld4MFlTQjBhVzFsSUdGdVpDQmhibmtnWVhKbmRXMWxiblJ6SUhSb1lYUWdlVzkxSUhCaGMzTWdkRzhnZEdobElGeHlYRzRnSUNBZ0lDb2dZVzVwYldGMFpTQm1kVzVqZEdsdmJpNWNjbHh1SUNBZ0lDQXFJRUJ3WVhKaGJTQnpkR0Z5ZENCaElHUmhkR1VnS0cxaGFXNXNlU0IxYzJWa0lHWnZjaUIwWlhOMGFXNW5LVnh5WEc0Z0lDQWdJQ292WEhKY2JpQWdJQ0JoYm1sdFlYUmxLSE4wWVhKMFB6b2diblZ0WW1WeUxDQXVMaTVoY21kek9pQmhibmxiWFNrNklGQnliMjFwYzJVOFltOXZiR1ZoYmo0Z2UxeHlYRzRnSUNBZ0lDQWdJSEpsZEhWeWJpQnVaWGNnVUhKdmJXbHpaU2dvY21WemIyeDJaU2tnUFQ0Z2UxeHlYRzRnSUNBZ0lDQWdJQ0FnSUNCcFppQW9kSGx3Wlc5bUlIZHBibVJ2ZDFzbmNtVnhkV1Z6ZEVGdWFXMWhkR2x2YmtaeVlXMWxKMTBnUFQwOUlDZG1kVzVqZEdsdmJpY3BJSHRjY2x4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUd4bGRDQnpkR0Z5ZENBOUlIQmxjbVp2Y20xaGJtTmxMbTV2ZHlncE8xeHlYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdZMjl1YzNRZ2NtRm1RVzVwYldGMFpTQTlJQ2gwYVcxbEtTQTlQaUI3WEhKY2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdiR1YwSUhCeWIyZHlaWE56SUQwZ0tIUnBiV1VnTFNCemRHRnlkQ2tnTHlCMGFHbHpMbDlrZFhKaGRHbHZianRjY2x4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQnBaaUFvY0hKdlozSmxjM01nUGlBeEtTQndjbTluY21WemN5QTlJREU3WEhKY2JseHlYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUM4dklHTmhiR04xYkdGMFpTQjBhR1VnWTNWeWNtVnVkQ0JoYm1sdFlYUnBiMjRnYzNSaGRHVmNjbHh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCc1pYUWdaR1ZzZEdFZ1BTQjBhR2x6TGw5MGNtRnVjMmwwYVc5dUtIQnliMmR5WlhOektWeHlYRzVjY2x4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQjBhR2x6TGw5emRHVndLR1JsYkhSaExDQmhjbWR6S1R0Y2NseHVYSEpjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2FXWWdLSEJ5YjJkeVpYTnpJRHdnTVNrZ2UxeHlYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQnlaWEYxWlhOMFFXNXBiV0YwYVc5dVJuSmhiV1VvY21GbVFXNXBiV0YwWlNrN1hISmNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnZlNCbGJITmxJSHRjY2x4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnY21WemIyeDJaU2gwY25WbEtUdGNjbHh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCOVhISmNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQjlYSEpjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0J5WlhGMVpYTjBRVzVwYldGMGFXOXVSbkpoYldVb2NtRm1RVzVwYldGMFpTazdYSEpjYmlBZ0lDQWdJQ0FnSUNBZ0lIMGdaV3h6WlNCN1hISmNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQjBhR2x6TGw5cGJuUmxjblpoYkNBOUlIZHBibVJ2ZHk1elpYUkpiblJsY25aaGJDZ29LU0E5UGlCN1hISmNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnYkdWMElHUmxiSFJoVkdsdFpTQTlJRVJoZEdVdWJtOTNLQ2s3WEhKY2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdiR1YwSUhScGJXVlFZWE56WldRZ1BTQmtaV3gwWVZScGJXVWdMU0J6ZEdGeWREdGNjbHh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCc1pYUWdjSEp2WjNKbGMzTWdQU0IwYVcxbFVHRnpjMlZrSUM4Z2RHaHBjeTVmWkhWeVlYUnBiMjQ3WEhKY2JseHlYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUdsbUlDaHdjbTluY21WemN5QStJREVwSUhCeWIyZHlaWE56SUQwZ01WeHlYRzVjY2x4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQjJZWElnWkdWc2RHRWdQU0IwYUdsekxsOTBjbUZ1YzJsMGFXOXVLSEJ5YjJkeVpYTnpLVHRjY2x4dVhISmNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnZEdocGN5NWZjM1JsY0Noa1pXeDBZU3dnWVhKbmN5azdYSEpjYmx4eVhHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJR2xtSUNod2NtOW5jbVZ6Y3lBOVBTQXhLU0I3WEhKY2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUdOc1pXRnlTVzUwWlhKMllXd29kR2hwY3k1ZmFXNTBaWEoyWVd3cE8xeHlYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQnlaWE52YkhabEtIUnlkV1VwTzF4eVhHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJSDFjY2x4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUgwc0lIUm9hWE11WDNKaGRHVXBYSEpjYmlBZ0lDQWdJQ0FnSUNBZ0lIMWNjbHh1SUNBZ0lDQWdJQ0I5S1Z4eVhHNGdJQ0FnZlZ4eVhHNWNjbHh1SUNBZ0lIQnlhWFpoZEdVZ2JHbHVaV0Z5S0hCeWIyZHlaWE56T2lCdWRXMWlaWElwSUh0Y2NseHVJQ0FnSUNBZ0lDQnlaWFIxY200Z2NISnZaM0psYzNNN1hISmNiaUFnSUNCOVhISmNibHh5WEc0Z0lDQWdjSEpwZG1GMFpTQmxZWE5sU1c0b2NISnZaM0psYzNNNklHNTFiV0psY2lrZ2UxeHlYRzRnSUNBZ0lDQWdJSEpsZEhWeWJpQk5ZWFJvTG5CdmR5aHdjbTluY21WemN5d2dOU2s3WEhKY2JpQWdJQ0I5WEhKY2JseHlYRzRnSUNBZ2NISnBkbUYwWlNCbFlYTmxUM1YwSUQwZ2RHaHBjeTV0WVd0bFJXRnpaVTkxZENoMGFHbHpMbVZoYzJWSmJpazdYSEpjYmx4eVhHNGdJQ0FnY0hKcGRtRjBaU0JsWVhObFNXNVBkWFFnUFNCMGFHbHpMbTFoYTJWRllYTmxTVzVQZFhRb2RHaHBjeTVsWVhObFNXNHBPMXh5WEc1Y2NseHVJQ0FnSUhCeWFYWmhkR1VnY0hWc2JFbHVLSEJ5YjJkeVpYTnpPaUJ1ZFcxaVpYSXNJSGc2SUc1MWJXSmxjaUE5SURJcElIdGNjbHh1SUNBZ0lDQWdJQ0J5WlhSMWNtNGdUV0YwYUM1d2IzY29jSEp2WjNKbGMzTXNJRElwSUNvZ0tDaDRJQ3NnTVNrZ0tpQndjbTluY21WemN5QXRJSGdwWEhKY2JpQWdJQ0I5WEhKY2JseHlYRzRnSUNBZ2NISnBkbUYwWlNCd2RYTm9UM1YwSUQwZ2RHaHBjeTV0WVd0bFJXRnpaVTkxZENoMGFHbHpMbkIxYkd4SmJpazdYSEpjYmx4eVhHNGdJQ0FnY0hKcGRtRjBaU0J3ZFhOb1VIVnNiQ0E5SUhSb2FYTXViV0ZyWlVWaGMyVkpiazkxZENoMGFHbHpMbkIxYkd4SmJpazdYSEpjYmx4eVhHNGdJQ0FnY0hKcGRtRjBaU0J0WVd0bFJXRnpaVTkxZENoMGFXMXBibWM2SUVaMWJtTjBhVzl1S1NCN1hISmNiaUFnSUNBZ0lDQWdjbVYwZFhKdUlHWjFibU4wYVc5dUlDaHdjbTluY21WemN6b2diblZ0WW1WeUtTQjdYSEpjYmlBZ0lDQWdJQ0FnSUNBZ0lISmxkSFZ5YmlBeElDMGdkR2x0YVc1bktERWdMU0J3Y205bmNtVnpjeWs3WEhKY2JpQWdJQ0FnSUNBZ2ZWeHlYRzRnSUNBZ2ZWeHlYRzVjY2x4dUlDQWdJSEJ5YVhaaGRHVWdiV0ZyWlVWaGMyVkpiazkxZENoMGFXMXBibWNwSUh0Y2NseHVJQ0FnSUNBZ0lDQnlaWFIxY200Z1puVnVZM1JwYjI0Z0tIQnliMmR5WlhOektTQjdYSEpjYmlBZ0lDQWdJQ0FnSUNBZ0lHbG1JQ2h3Y205bmNtVnpjeUE4SUM0MUtWeHlYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdjbVYwZFhKdUlIUnBiV2x1WnlneUlDb2djSEp2WjNKbGMzTXBJQzhnTWp0Y2NseHVJQ0FnSUNBZ0lDQWdJQ0FnWld4elpWeHlYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdjbVYwZFhKdUlDZ3lJQzBnZEdsdGFXNW5LRElnS2lBb01TQXRJSEJ5YjJkeVpYTnpLU2twSUM4Z01qdGNjbHh1SUNBZ0lDQWdJQ0I5WEhKY2JpQWdJQ0I5WEhKY2JuMWNjbHh1WEhKY2JtVjRjRzl5ZENBcUlHWnliMjBnSnk0dlkyOXRiVzl1Snp0Y2JseHVYRzR2THlCWFJVSlFRVU5MSUVaUFQxUkZVaUF2TDF4dUx5OGdMaTl6Y21NdmFXNWtaWGd1ZEhNaVhTd2ljMjkxY21ObFVtOXZkQ0k2SWlKOVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9b3V0a2l0LWFuaW1hdG9yLmpzLm1hcFxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9vdXRraXQtYW5pbWF0b3IvZGlzdC9vdXRraXQtYW5pbWF0b3IuanNcbi8vIG1vZHVsZSBpZCA9IDEzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJzb3VyY2VSb290IjoiIn0=
//# sourceMappingURL=outkit.js.map