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
var ElementHelper_1 = __webpack_require__(5);

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
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

Object.defineProperty(exports, "__esModule", { value: true });
var Component_1 = __webpack_require__(1);
var Logger_1 = __webpack_require__(3);
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
/* 5 */
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
var Logger_1 = __webpack_require__(3);
var Component_1 = __webpack_require__(1);
var ComponentFactory_1 = __webpack_require__(4);
var ElementHelper_1 = __webpack_require__(5);
var State_1 = __webpack_require__(0);

var HorizontalLayoutComponent = function (_Composite_1$Composit) {
    _inherits(HorizontalLayoutComponent, _Composite_1$Composit);

    function HorizontalLayoutComponent(logger, animator) {
        _classCallCheck(this, HorizontalLayoutComponent);

        var _this = _possibleConstructorReturn(this, (HorizontalLayoutComponent.__proto__ || Object.getPrototypeOf(HorizontalLayoutComponent)).call(this, logger, animator));

        _this.resetChildren();
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
            this.resetChildren();
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
    }, {
        key: "resetChildren",
        value: function resetChildren() {
            this.fixedChildren = new Array();
            this.perctChildren = new Array();
            this.fluidChildren = new Array();
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
var Logger_1 = __webpack_require__(3);
var Component_1 = __webpack_require__(1);
var ComponentFactory_1 = __webpack_require__(4);
var ElementHelper_1 = __webpack_require__(5);
var State_1 = __webpack_require__(0);

var VerticalLayoutComponent = function (_Composite_1$Composit) {
    _inherits(VerticalLayoutComponent, _Composite_1$Composit);

    function VerticalLayoutComponent(logger, animator) {
        _classCallCheck(this, VerticalLayoutComponent);

        var _this = _possibleConstructorReturn(this, (VerticalLayoutComponent.__proto__ || Object.getPrototypeOf(VerticalLayoutComponent)).call(this, logger, animator));

        _this.resetChildren();
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
            this.resetChildren();
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
    }, {
        key: "resetChildren",
        value: function resetChildren() {
            this.fixedChildren = new Array();
            this.perctChildren = new Array();
            this.fluidChildren = new Array();
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
__export(__webpack_require__(4));
__export(__webpack_require__(1));
__export(__webpack_require__(2));
__export(__webpack_require__(6));
__export(__webpack_require__(3));

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCA5YTY5NGY4NDlhZTFlYjZkNWUyMSIsIndlYnBhY2s6Ly8vLi9zcmMvc3RhdGUvU3RhdGUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudC9Db21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudC9Db21wb3NpdGUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWwvTG9nZ2VyLnRzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnQvQ29tcG9uZW50RmFjdG9yeS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbC9FbGVtZW50SGVscGVyLnRzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnQvRHJhd2VyQ29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnQvRHJhZ2dhYmxlQ29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnQvSG9yaXpvbnRhbExheW91dENvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50L092ZXJsYXlDb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudC9WZXJ0aWNhbExheW91dENvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50L1dpbmRvd0NvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvb3V0a2l0LnRzIiwid2VicGFjazovLy8uL34vb3V0a2l0LWFuaW1hdG9yL2Rpc3Qvb3V0a2l0LWFuaW1hdG9yLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsTztBQ1ZBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7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O0FBRUE7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsbUVBQW1FO0FBQ25FO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBOztBQUVBLE9BQU87QUFDUDtBQUNBLENBQUM7QUFDRCwyQ0FBMkMsY0FBYztBQUN6RCwyQyIsImZpbGUiOiJkaXN0L291dGtpdC5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFtdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcIm91dGtpdFwiXSA9IGZhY3RvcnkoKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJvdXRraXRcIl0gPSBmYWN0b3J5KCk7XG59KSh0aGlzLCBmdW5jdGlvbigpIHtcbnJldHVybiBcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gaWRlbnRpdHkgZnVuY3Rpb24gZm9yIGNhbGxpbmcgaGFybW9ueSBpbXBvcnRzIHdpdGggdGhlIGNvcnJlY3QgY29udGV4dFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5pID0gZnVuY3Rpb24odmFsdWUpIHsgcmV0dXJuIHZhbHVlOyB9O1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAxMik7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgOWE2OTRmODQ5YWUxZWI2ZDVlMjEiLCJleHBvcnQgY2xhc3MgU3RhdGUge1xyXG4gICAgLy8gcG9zc2libHkgcmVmYWN0b3IgdGhlc2UgY2xhc3NlcyBpbnRvIGFuIGFycmF5IG9mIGNsYXNzZXMgdGhhdCBhcmUgbWFuYWdlZFxyXG4gICAgLy8gdmlhIG1ldGhvZHMgaW4gdGhpcyBjbGFzc1xyXG4gICAgb2tDbGFzc05hbWU/OiBzdHJpbmc7XHJcbiAgICBzdGF0ZUNsYXNzTmFtZT86IHN0cmluZztcclxuICAgIHN0eWxlPzoge1xyXG4gICAgICAgIGhlaWdodD86IHN0cmluZztcclxuICAgICAgICB3aWR0aD86IHN0cmluZztcclxuICAgICAgICBvdmVyZmxvdz86IHN0cmluZztcclxuICAgICAgICBmbG9hdD86IHN0cmluZztcclxuICAgICAgICBwb3NpdGlvbj86IHN0cmluZztcclxuICAgICAgICB6SW5kZXg/OiBzdHJpbmc7XHJcbiAgICAgICAgdG9wPzogc3RyaW5nO1xyXG4gICAgICAgIGJvdHRvbT86IHN0cmluZztcclxuICAgICAgICBsZWZ0Pzogc3RyaW5nO1xyXG4gICAgICAgIHJpZ2h0Pzogc3RyaW5nO1xyXG4gICAgICAgIGRpc3BsYXk/OiBzdHJpbmc7XHJcbiAgICAgICAgYmFja2dyb3VuZENvbG9yPzogc3RyaW5nO1xyXG4gICAgICAgIG9wYWNpdHk/OiBzdHJpbmc7XHJcbiAgICAgICAgbWFyZ2luVG9wPzogc3RyaW5nO1xyXG4gICAgICAgIG1hcmdpbkJvdHRvbT86IHN0cmluZztcclxuICAgICAgICBtYXJnaW5MZWZ0Pzogc3RyaW5nO1xyXG4gICAgICAgIG1hcmdpblJpZ2h0Pzogc3RyaW5nO1xyXG4gICAgICAgIHBhZGRpbmdUb3A/OiBzdHJpbmc7XHJcbiAgICAgICAgcGFkZGluZ0JvdHRvbT86IHN0cmluZztcclxuICAgICAgICBwYWRkaW5nTGVmdD86IHN0cmluZztcclxuICAgICAgICBwYWRkaW5nUmlnaHQ/OiBzdHJpbmc7XHJcbiAgICB9XHJcbiAgICBzdGF0aWMgcmVhZG9ubHkgYW5pbWF0ZWRQcm9wczogQXJyYXk8c3RyaW5nPiA9IFtcclxuICAgICAgICAnc3R5bGUuaGVpZ2h0JywgXHJcbiAgICAgICAgJ3N0eWxlLndpZHRoJywgXHJcbiAgICAgICAgJ3N0eWxlLnRvcCcsIFxyXG4gICAgICAgICdzdHlsZS5ib3R0b20nLCBcclxuICAgICAgICAnc3R5bGUubGVmdCcsIFxyXG4gICAgICAgICdzdHlsZS5yaWdodCcsIFxyXG4gICAgICAgICdzdHlsZS5vcGFjaXR5JywgXHJcbiAgICAgICAgJ3N0eWxlLnpJbmRleCcsXHJcbiAgICAgICAgJ3N0cmluZy5tYXJnaW5Ub3AnLFxyXG4gICAgICAgICdzdHJpbmcubWFyZ2luQm90dG9tJyxcclxuICAgICAgICAnc3RyaW5nLm1hcmdpbkxlZnQnLFxyXG4gICAgICAgICdzdHJpbmcubWFyZ2luUmlnaHQnLCBcclxuICAgICAgICAnc3RyaW5nLnBhZGRpbmdUb3AnLFxyXG4gICAgICAgICdzdHJpbmcucGFkZGluZ0JvdHRvbScsXHJcbiAgICAgICAgJ3N0cmluZy5wYWRkaW5nTGVmdCcsXHJcbiAgICAgICAgJ3N0cmluZy5wYWRkaW5nUmlnaHQnLFxyXG4gICAgICAgIF07XHJcbiAgICBcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHRoaXMub2tDbGFzc05hbWUgPSAnJztcclxuICAgICAgICB0aGlzLnN0YXRlQ2xhc3NOYW1lID0gJyc7XHJcbiAgICAgICAgdGhpcy5zdHlsZSA9IHt9O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICBzdGF0aWMgYW5pbWF0ZWQodHlwZTogc3RyaW5nKSB7XHJcbiAgICAgICAgdmFyIGluZGV4ID0gdGhpcy5hbmltYXRlZFByb3BzLmluZGV4T2YodHlwZSk7XHJcbiAgICAgICAgcmV0dXJuIGluZGV4ID49IDA7XHJcbiAgICB9IFxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9zdGF0ZS9TdGF0ZS50cyIsImltcG9ydCB7IElBbmltYXRvciB9IGZyb20gJ291dGtpdC1hbmltYXRvcic7XHJcbmltcG9ydCB7IElMb2dnZXIgfSBmcm9tIFwiLi4vdXRpbC9Mb2dnZXJcIjtcclxuaW1wb3J0IHsgU3RhdGUgfSBmcm9tIFwiLi4vc3RhdGUvU3RhdGVcIjtcclxuaW1wb3J0IEVsZW1lbnRIZWxwZXIgZnJvbSBcIi4uL3V0aWwvRWxlbWVudEhlbHBlclwiO1xyXG5cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSUNvbXBvbmVudCB7XHJcbiAgICByZWxheShtZXNzYWdlOiBzdHJpbmcpOiBQcm9taXNlPGFueT47XHJcbiAgICByZWdpc3RlckV2ZW50KG5hbWU6IHN0cmluZywgZnVuYz86IEZ1bmN0aW9uKTogdGhpcztcclxuICAgIHNldEVsZW1lbnQoZWxlbWVudDogSFRNTEVsZW1lbnQpOiB0aGlzO1xyXG4gICAgZ2V0RWxlbWVudCgpOiBIVE1MRWxlbWVudDtcclxuICAgIGdldEFuaW1hdG9yKCk6IElBbmltYXRvcjtcclxuICAgIGFkZENoaWxkKGNvbXBvbmVudDogSUNvbXBvbmVudCk6IHRoaXM7XHJcbiAgICByZW1vdmVDaGlsZChjb21wb25lbnQ6IElDb21wb25lbnQpOiB0aGlzO1xyXG4gICAgZ2V0Q2hpbGQoKTogSUNvbXBvbmVudDtcclxuICAgIGdldFJvb3QoKTogSUNvbXBvbmVudDtcclxuICAgIHNldFBhcmVudChwYXJlbnQ6IElDb21wb25lbnQpOiB0aGlzO1xyXG4gICAgcmVuZGVyKG5ld1N0YXRlOiBTdGF0ZSk6IFByb21pc2U8YW55PjtcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIENvbXBvbmVudCBpbXBsZW1lbnRzIElDb21wb25lbnQge1xyXG5cclxuICAgIHByaXZhdGUgX2VsZW1lbnQ6IEhUTUxFbGVtZW50O1xyXG4gICAgcHJpdmF0ZSBfY2hpbGQ6IElDb21wb25lbnQ7XHJcbiAgICBwcml2YXRlIF9wYXJlbnQ6IElDb21wb25lbnQ7XHJcblxyXG4gICAgcHJvdGVjdGVkIF9sb2dnZXI6IElMb2dnZXI7XHJcbiAgICBwcm90ZWN0ZWQgX2FuaW1hdG9yOiBJQW5pbWF0b3I7XHJcbiAgICBwcm90ZWN0ZWQgX2V2ZW50czogeyBbaWQ6IHN0cmluZ106IEZ1bmN0aW9uIH07XHJcbiAgICBwcm90ZWN0ZWQgX3N0YXRlOiBTdGF0ZTtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihsb2dnZXI6IElMb2dnZXIsIGFuaW1hdG9yPzogSUFuaW1hdG9yKSB7XHJcbiAgICAgICAgdGhpcy5fZXZlbnRzID0ge307XHJcbiAgICAgICAgdGhpcy5fbG9nZ2VyID0gbG9nZ2VyO1xyXG4gICAgICAgIHRoaXMuX2FuaW1hdG9yID0gYW5pbWF0b3I7XHJcbiAgICAgICAgdGhpcy5fc3RhdGUgPSBudWxsO1xyXG4gICAgICAgIGlmICh0eXBlb2YgdGhpcy5fYW5pbWF0b3IgIT09ICd1bmRlZmluZWQnICYmIFxyXG4gICAgICAgICAgICB0aGlzLl9hbmltYXRvciAhPT0gbnVsbCAmJlxyXG4gICAgICAgICAgICB0eXBlb2YgdGhpcy5fYW5pbWF0b3Iuc2V0U3RlcCAhPT0gJ3VuZGVmaW5lZCcgJiZcclxuICAgICAgICAgICAgdHlwZW9mIHRoaXMuX2FuaW1hdG9yLnNldFN0ZXAgPT09ICdmdW5jdGlvbicpIHtcclxuICAgICAgICAgICAgdGhpcy5fYW5pbWF0b3Iuc2V0U3RlcCh0aGlzLnN0ZXApO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBnZXRFbGVtZW50KCk6IEhUTUxFbGVtZW50IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZWxlbWVudDtcclxuICAgIH1cclxuXHJcbiAgICBzZXRFbGVtZW50KGVsZW1lbnQ6IEhUTUxFbGVtZW50KTogdGhpcyB7XHJcbiAgICAgICAgdGhpcy5fZWxlbWVudCA9IGVsZW1lbnQ7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0QW5pbWF0b3IoKTogSUFuaW1hdG9yIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fYW5pbWF0b3I7XHJcbiAgICB9XHJcblxyXG4gICAgYWRkQ2hpbGQoY29tcG9uZW50OiBJQ29tcG9uZW50KTogdGhpcyB7XHJcbiAgICAgICAgdGhpcy5fY2hpbGQgPSBjb21wb25lbnQ7XHJcbiAgICAgICAgY29tcG9uZW50LnNldFBhcmVudCh0aGlzKTtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuXHJcbiAgICByZW1vdmVDaGlsZChjb21wb25lbnQ6IElDb21wb25lbnQpOiB0aGlzIHtcclxuICAgICAgICB0aGlzLl9jaGlsZCA9IG51bGw7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0Q2hpbGQoKTogSUNvbXBvbmVudCB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2NoaWxkO1xyXG4gICAgfVxyXG5cclxuICAgIHNldFBhcmVudChwYXJlbnQ6IElDb21wb25lbnQpIHtcclxuICAgICAgICB0aGlzLl9wYXJlbnQgPSBwYXJlbnQ7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0Um9vdCgpOiBJQ29tcG9uZW50IHtcclxuICAgICAgICBpZiAodGhpcy5fcGFyZW50ICYmIHR5cGVvZiB0aGlzLl9wYXJlbnRbJ2dldFJvb3QnXSA9PT0gJ2Z1bmN0aW9uJykge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fcGFyZW50LmdldFJvb3QoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0U3RhdGUoKTogU3RhdGUge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9zdGF0ZTtcclxuICAgIH1cclxuXHJcbiAgICBzZXRTdGF0ZShzdGF0ZTogU3RhdGUpOiB0aGlzIHtcclxuICAgICAgICB0aGlzLl9zdGF0ZSA9IHN0YXRlO1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG5cclxuICAgIHJlZ2lzdGVyRXZlbnQobmFtZTogc3RyaW5nLCBmdW5jPzogRnVuY3Rpb24pOiB0aGlzIHtcclxuICAgICAgICB0aGlzLl9ldmVudHNbbmFtZV0gPSBmdW5jO1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbGF5KG1lc3NhZ2U6IHN0cmluZyk6IFByb21pc2U8YW55PiB7XHJcbiAgICAgICAgbGV0IHByb21pc2VzID0gW11cclxuICAgICAgICBpZiAodHlwZW9mIHRoaXMuX2V2ZW50c1ttZXNzYWdlXSA9PT0gJ2Z1bmN0aW9uJylcclxuICAgICAgICAgICAgcHJvbWlzZXMucHVzaCh0aGlzLl9ldmVudHNbbWVzc2FnZV0oKSk7XHJcblxyXG4gICAgICAgIGxldCBjaGlsZCA9IHRoaXMuZ2V0Q2hpbGQoKTtcclxuICAgICAgICBpZiAodHlwZW9mIGNoaWxkID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgY2hpbGRbJ3JlbGF5J10gPT09ICdmdW5jdGlvbicpXHJcbiAgICAgICAgICAgIHByb21pc2VzLnB1c2godGhpcy5nZXRDaGlsZCgpLnJlbGF5KG1lc3NhZ2UpKTtcclxuICAgICAgICByZXR1cm4gUHJvbWlzZS5hbGwocHJvbWlzZXMpO1xyXG4gICAgfVxyXG5cclxuICAgIG1lcmdlKG5ld1N0YXRlLCBvbGRTdGF0ZSkge1xyXG4gICAgICAgIGxldCBzdGF0ZSA9IG5ldyBTdGF0ZSgpO1xyXG4gICAgICAgIHN0YXRlID0gT2JqZWN0LmFzc2lnbihzdGF0ZSwgb2xkU3RhdGUsIG5ld1N0YXRlKTtcclxuICAgICAgICBzdGF0ZS5zdHlsZSA9IE9iamVjdC5hc3NpZ24oe30sIG9sZFN0YXRlLnN0eWxlLCBuZXdTdGF0ZS5zdHlsZSk7XHJcbiAgICAgICAgcmV0dXJuIHN0YXRlO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogRHJhdyB0aGUgY3VycmVudCBzdGF0ZSBvbnRvIHRoZSBlbGVtZW50LCBvbmx5IGNoYW5naW5nIHRoZSBpdGVtcyB0aGF0IGhhdmVcclxuICAgICAqIGNoYW5nZWQgc2luY2UgdGhlIGxhc3QgZHJhdy5cclxuICAgICAqIEByZXR1cm5zIHtQcm9taXNlPFN0YXRlPn1cclxuICAgICAqIEBtZW1iZXJvZiBDb21wb25lbnRcclxuICAgICAqL1xyXG4gICAgcmVuZGVyKG5ld1N0YXRlOiBTdGF0ZSk6IFByb21pc2U8U3RhdGU+IHtcclxuICAgICAgICBsZXQgb2xkU3RhdGUgPSB0aGlzLl9zdGF0ZTtcclxuICAgICAgICBsZXQgaXNJbml0aWFsID0gZmFsc2U7XHJcbiAgICAgICAgaWYgKCF0aGlzLl9zdGF0ZSkge1xyXG4gICAgICAgICAgICBvbGRTdGF0ZSA9IG5ldyBTdGF0ZSgpO1xyXG4gICAgICAgICAgICBpc0luaXRpYWwgPSB0cnVlO1xyXG4gICAgICAgICAgICB0aGlzLl9lbGVtZW50LnN0eWxlLmNzc1RleHQgPSBudWxsOyAvLyBjbGVhciBpbmxpbmUgc3RseWxlc1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIG5ld1N0YXRlID0gdGhpcy5tZXJnZShuZXdTdGF0ZSwgb2xkU3RhdGUpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgICAgICAgaWYgKCF0aGlzLl9lbGVtZW50KSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9sb2dnZXIuZXJyb3IoYEVsZW1lbnQgaXMgdW5kZWZpbmVkLiAgVXNlIHNldEVsZW1lbnQoKSBiZWZvcmUgY2FsbGluZyByZW5kZXIoKS5gKVxyXG4gICAgICAgICAgICAgICAgcmVqZWN0KG9sZFN0YXRlKTtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKG5ld1N0YXRlLnN0YXRlQ2xhc3NOYW1lICYmIG5ld1N0YXRlLnN0YXRlQ2xhc3NOYW1lICE9IG9sZFN0YXRlLnN0YXRlQ2xhc3NOYW1lKSB7XHJcbiAgICAgICAgICAgICAgICBFbGVtZW50SGVscGVyLmNoYW5nZUNsYXNzKHRoaXMuX2VsZW1lbnQsIG5ld1N0YXRlLnN0YXRlQ2xhc3NOYW1lLCBvbGRTdGF0ZS5zdGF0ZUNsYXNzTmFtZSk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmIChuZXdTdGF0ZS5va0NsYXNzTmFtZSAmJiBuZXdTdGF0ZS5va0NsYXNzTmFtZSAhPSBvbGRTdGF0ZS5va0NsYXNzTmFtZSkge1xyXG4gICAgICAgICAgICAgICAgRWxlbWVudEhlbHBlci5jaGFuZ2VDbGFzcyh0aGlzLl9lbGVtZW50LCBuZXdTdGF0ZS5va0NsYXNzTmFtZSwgb2xkU3RhdGUub2tDbGFzc05hbWUpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAvLyBMb29wIHRocm91Z2ggbm9uIGFuaW1hdGFibGUgcHJvcGVydGllcyBvbiBzdHlsZSBhbmQgc2V0IHRoZW1cclxuICAgICAgICAgICAgZm9yIChsZXQgbmFtZSBpbiBuZXdTdGF0ZS5zdHlsZSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuX2FuaW1hdG9yICYmIChTdGF0ZS5hbmltYXRlZCgnc3R5bGUuJyArIG5hbWUpICYmIG5ld1N0YXRlLnN0eWxlW25hbWVdICE9PSBudWxsKSAmJiAhaXNJbml0aWFsKVxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xyXG5cclxuICAgICAgICAgICAgICAgIGxldCBucyA9IG5ld1N0YXRlLnN0eWxlW25hbWVdO1xyXG4gICAgICAgICAgICAgICAgbGV0IG9zID0gb2xkU3RhdGUuc3R5bGVbbmFtZV07XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKG5zID09PSBvcylcclxuICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcclxuXHJcbiAgICAgICAgICAgICAgICB0aGlzLl9lbGVtZW50LnN0eWxlW25hbWVdID0gbnM7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC8vIEluaXRpYWwgc3RhdGVcclxuICAgICAgICAgICAgaWYgKGlzSW5pdGlhbCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fbG9nZ2VyLmxvZyhgW0luaXRpYWwgU3RhdGVdWyMke3RoaXMuX2VsZW1lbnQuaWR9XTogICR7SlNPTi5zdHJpbmdpZnkobmV3U3RhdGUpfSBdYCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9zdGF0ZSA9IG5ld1N0YXRlO1xyXG4gICAgICAgICAgICAgICAgcmVzb2x2ZShuZXdTdGF0ZSk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC8vIFN0YXJ0IHRoZSBhbmltYXRvciB0byBhbmltYXRlIGFueSBhbmltYXRhYmxlIHByb3BlcnRpZXNcclxuICAgICAgICAgICAgaWYgKHRoaXMuX2FuaW1hdG9yKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgbjogbnVtYmVyID0gRGF0ZS5ub3coKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLl9hbmltYXRvci5hbmltYXRlKG4sIG5ld1N0YXRlLCBvbGRTdGF0ZSlcclxuICAgICAgICAgICAgICAgICAgICAudGhlbigoZmluaXNoZWQpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGZpbmlzaGVkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9sb2dnZXIubG9nKGBbVXBkYXRlZCBTdGF0ZV1bIyR7dGhpcy5fZWxlbWVudC5pZH1dOiAgJHtKU09OLnN0cmluZ2lmeShuZXdTdGF0ZSl9IF1gKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX3N0YXRlID0gbmV3U3RhdGU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlKG5ld1N0YXRlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8vIE5vIGFuaW1hdG9yLCBzbyBqdXN0IHJlc29sdmVcclxuICAgICAgICAgICAgdGhpcy5fc3RhdGUgPSBuZXdTdGF0ZTtcclxuICAgICAgICAgICAgcmVzb2x2ZShuZXdTdGF0ZSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0ZXAgPSAoZGVsdGE6IG51bWJlciwgYXJnczogYW55W10pID0+IHtcclxuICAgICAgICAvLyBMb29wIHRocm91Z2ggdmFsdWVzIGFuZCBtYWtlIGxpdmUgY2hhbmdlcyB0byBlbGVtZW50XHJcbiAgICAgICAgdmFyIG5ld1N0YXRlID0gYXJnc1swXTtcclxuICAgICAgICB2YXIgb2xkU3RhdGUgPSBhcmdzWzFdO1xyXG4gICAgICAgIGZvciAobGV0IG5hbWUgaW4gbmV3U3RhdGUuc3R5bGUpIHtcclxuICAgICAgICAgICAgaWYgKCFTdGF0ZS5hbmltYXRlZCgnc3R5bGUuJyArIG5hbWUpKVxyXG4gICAgICAgICAgICAgICAgY29udGludWU7XHJcblxyXG4gICAgICAgICAgICBsZXQgbnMgPSBuZXdTdGF0ZS5zdHlsZVtuYW1lXTtcclxuICAgICAgICAgICAgbGV0IG9zID0gb2xkU3RhdGUuc3R5bGVbbmFtZV07XHJcblxyXG4gICAgICAgICAgICBpZiAobnMgPT09IG9zKVxyXG4gICAgICAgICAgICAgICAgY29udGludWU7XHJcblxyXG4gICAgICAgICAgICBsZXQgbnN2ID0gcGFyc2VGbG9hdChucyk7XHJcbiAgICAgICAgICAgIGxldCBvc3YgPSBwYXJzZUZsb2F0KG9zKTtcclxuXHJcbiAgICAgICAgICAgIGlmIChpc0Zpbml0ZShuc3YpICYmIGlzRmluaXRlKG9zdikpIHtcclxuICAgICAgICAgICAgICAgIGxldCB2YWx1ZSA9IChuc3YgLSBvc3YpICogZGVsdGEgKyBvc3YgKyAnJztcclxuICAgICAgICAgICAgICAgIGlmICgoIWlzRmluaXRlKG5zKSAmJiBucy5tYXRjaCgvcHgkLykpIHx8ICghaXNGaW5pdGUob3MpICYmIG9zLm1hdGNoKC9weCQvKSkpIFxyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlID0gYCR7dmFsdWV9cHhgO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fZWxlbWVudC5zdHlsZVtuYW1lXSA9IHZhbHVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tcG9uZW50L0NvbXBvbmVudC50cyIsImltcG9ydCB7IENvbXBvbmVudCwgSUNvbXBvbmVudCB9IGZyb20gXCIuL0NvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBJTG9nZ2VyIH0gZnJvbSBcIi4uL3V0aWwvTG9nZ2VyXCI7XHJcbmltcG9ydCB7IElBbmltYXRvciB9IGZyb20gJ291dGtpdC1hbmltYXRvcic7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIElDb21wb3NpdGUgZXh0ZW5kcyBJQ29tcG9uZW50IHtcclxuICAgIGdldENoaWxkcmVuKCk6IEFycmF5PElDb21wb25lbnQ+XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBDb21wb3NpdGUgZXh0ZW5kcyBDb21wb25lbnQgaW1wbGVtZW50cyBJQ29tcG9zaXRlIHtcclxuXHJcbiAgICBwcml2YXRlIF9saXN0OiBBcnJheTxJQ29tcG9uZW50PjtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihsb2dnZXI/OiBJTG9nZ2VyLCBhbmltYXRvcj86IElBbmltYXRvcikge1xyXG4gICAgICAgIHN1cGVyKGxvZ2dlciwgYW5pbWF0b3IpO1xyXG4gICAgICAgIHRoaXMuX2xpc3QgPSBbXTtcclxuICAgIH1cclxuXHJcbiAgICBhZGRDaGlsZChjb21wb25lbnQ6IElDb21wb25lbnQpOiB0aGlzIHtcclxuICAgICAgICB0aGlzLl9saXN0LnB1c2goY29tcG9uZW50KTtcclxuICAgICAgICBjb21wb25lbnQuc2V0UGFyZW50KHRoaXMpO1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbW92ZUNoaWxkKGNvbXBvbmVudDogSUNvbXBvbmVudCk6IHRoaXMge1xyXG4gICAgICAgIGxldCBpbmRleCA9IHRoaXMuX2xpc3QuaW5kZXhPZihjb21wb25lbnQpO1xyXG4gICAgICAgIHRoaXMuX2xpc3Quc3BsaWNlKGluZGV4LCAxKTtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuXHJcbiAgICBnZXRDaGlsZCgpOiBJQ29tcG9uZW50IHtcclxuICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxuXHJcbiAgICBnZXRDaGlsZHJlbigpOiBJQ29tcG9uZW50W10ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9saXN0O1xyXG4gICAgfVxyXG5cclxuICAgIHJlbGF5KG1lc3NhZ2U6IHN0cmluZyk6IFByb21pc2U8YW55PiB7XHJcbiAgICAgICAgdmFyIHByb21pc2VzID0gW107XHJcbiAgICAgICAgaWYgKHR5cGVvZiB0aGlzLl9ldmVudHNbbWVzc2FnZV0gPT09ICdmdW5jdGlvbicpXHJcbiAgICAgICAgICAgIHByb21pc2VzLnB1c2godGhpcy5fZXZlbnRzW21lc3NhZ2VdKCkpO1xyXG5cclxuICAgICAgICBmb3IgKGxldCBjaGlsZCBvZiB0aGlzLl9saXN0KSB7XHJcbiAgICAgICAgICAgIGlmICh0eXBlb2YgY2hpbGQgPT09ICdvYmplY3QnICYmIHR5cGVvZiBjaGlsZFsncmVsYXknXSA9PT0gJ2Z1bmN0aW9uJylcclxuICAgICAgICAgICAgICAgIHByb21pc2VzLnB1c2goY2hpbGQucmVsYXkobWVzc2FnZSkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gUHJvbWlzZS5hbGwocHJvbWlzZXMpO1xyXG4gICAgfVxyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbXBvbmVudC9Db21wb3NpdGUudHMiLCJleHBvcnQgaW50ZXJmYWNlIElMb2dnZXIge1xyXG4gICAgbG9nKG1lc3NhZ2U6c3RyaW5nKTtcclxuICAgIHdhcm4obWVzc2FnZTpzdHJpbmcpO1xyXG4gICAgaW5mbyhtZXNzYWdlOnN0cmluZyk7XHJcbiAgICBlcnJvcihtZXNzYWdlOnN0cmluZyk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIExvZ2dlciBpbXBsZW1lbnRzIElMb2dnZXIge1xyXG4gICAgcHJpdmF0ZSBfZGVidWc6IGJvb2xlYW47XHJcbiAgICBwcml2YXRlIF9jID0ge1xyXG4gICAgICAgIHdhcm46IChtOiBzdHJpbmcpID0+IHt9LFxyXG4gICAgICAgIGVycm9yOiAobTogc3RyaW5nKSA9PiB7fSxcclxuICAgICAgICBpbmZvOiAobTogc3RyaW5nKSA9PiB7fSxcclxuICAgICAgICBsb2c6IChtOiBzdHJpbmcpID0+IHt9XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKGRlYnVnOiBib29sZWFuID0gZmFsc2UpIHtcclxuICAgICAgICBpZiAodHlwZW9mIHdpbmRvd1snY29uc29sZSddID09PSAnb2JqZWN0JyAmJiBkZWJ1ZylcclxuICAgICAgICAgICAgdGhpcy5fYyA9IHdpbmRvdy5jb25zb2xlO1xyXG4gICAgICAgIHRoaXMuX2RlYnVnID0gZGVidWc7XHJcbiAgICB9XHJcblxyXG4gICAgbG9nKG1lc3NhZ2U6IHN0cmluZykge1xyXG4gICAgICAgIGlmICh0aGlzLl9kZWJ1ZyAmJiB0eXBlb2YgdGhpcy5fYy5sb2cgPT09ICdmdW5jdGlvbicpXHJcbiAgICAgICAgICAgIHRoaXMuX2MubG9nKG1lc3NhZ2UpO1xyXG4gICAgfVxyXG5cclxuICAgIHdhcm4obWVzc2FnZTogc3RyaW5nKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuX2RlYnVnICYmIHR5cGVvZiB0aGlzLl9jLndhcm4gPT09ICdmdW5jdGlvbicpXHJcbiAgICAgICAgICAgIHRoaXMuX2Mud2FybihtZXNzYWdlKTtcclxuICAgIH1cclxuXHJcbiAgICBpbmZvKG1lc3NhZ2U6IHN0cmluZykge1xyXG4gICAgICAgIGlmICh0aGlzLl9kZWJ1ZyAmJiB0eXBlb2YgdGhpcy5fYy5pbmZvID09PSAnZnVuY3Rpb24nKVxyXG4gICAgICAgICAgICB0aGlzLl9jLmluZm8obWVzc2FnZSk7XHJcbiAgICB9XHJcblxyXG4gICAgZXJyb3IobWVzc2FnZTogc3RyaW5nKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuX2RlYnVnICYmIHR5cGVvZiB0aGlzLl9jLmVycm9yID09PSAnZnVuY3Rpb24nKVxyXG4gICAgICAgICAgICB0aGlzLl9jLmVycm9yKG1lc3NhZ2UpO1xyXG4gICAgfVxyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3V0aWwvTG9nZ2VyLnRzIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBJQ29tcG9uZW50IH0gZnJvbSBcIi4vQ29tcG9uZW50XCI7XHJcbmltcG9ydCBMb2dnZXIgZnJvbSBcIi4uL3V0aWwvTG9nZ2VyXCI7XHJcbmltcG9ydCB7IE91dGtpdEFuaW1hdG9yIH0gZnJvbSAnb3V0a2l0LWFuaW1hdG9yJztcclxuaW1wb3J0IHsgRHJhd2VyQ29tcG9uZW50IH0gZnJvbSBcIi4vRHJhd2VyQ29tcG9uZW50XCI7XHJcbmltcG9ydCB7IE92ZXJsYXlDb21wb25lbnQgfSBmcm9tIFwiLi9PdmVybGF5Q29tcG9uZW50XCI7XHJcbmltcG9ydCB7IFdpbmRvd0NvbXBvbmVudCB9IGZyb20gXCIuL1dpbmRvd0NvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBEcmFnZ2FibGVDb21wb25lbnQgfSBmcm9tIFwiLi9EcmFnZ2FibGVDb21wb25lbnRcIjtcclxuaW1wb3J0IHsgSG9yaXpvbnRhbExheW91dENvbXBvbmVudCB9IGZyb20gXCIuL0hvcml6b250YWxMYXlvdXRDb21wb25lbnRcIjtcclxuaW1wb3J0IHsgVmVydGljYWxMYXlvdXRDb21wb25lbnQgfSBmcm9tIFwiLi9WZXJ0aWNhbExheW91dENvbXBvbmVudFwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIENvbXBvbmVudEZhY3Rvcnkge1xyXG5cclxuICAgIGNvbXBvbmVudChlbGVtZW50OiBzdHJpbmcpOiBJQ29tcG9uZW50IHtcclxuICAgICAgICBsZXQgY29tcG9uZW50ID0gbmV3IENvbXBvbmVudChuZXcgTG9nZ2VyKCksIG5ldyBPdXRraXRBbmltYXRvcigpKVxyXG4gICAgICAgIGNvbXBvbmVudC5zZXRFbGVtZW50KHRoaXMuZ2V0RWxlbWVudChlbGVtZW50KSk7XHJcbiAgICAgICAgcmV0dXJuIGNvbXBvbmVudDtcclxuICAgIH1cclxuXHJcbiAgICBkcmF3ZXIoZWxlbWVudDogc3RyaW5nKTogSUNvbXBvbmVudCB7XHJcbiAgICAgICAgbGV0IGNvbXBvbmVudCA9IG5ldyBEcmF3ZXJDb21wb25lbnQobmV3IExvZ2dlcigpLCBuZXcgT3V0a2l0QW5pbWF0b3IoKSk7XHJcbiAgICAgICAgbGV0IGVsID0gdGhpcy5nZXRFbGVtZW50KGVsZW1lbnQpO1xyXG4gICAgICAgIGNvbXBvbmVudC5zZXRFbGVtZW50KGVsKTtcclxuICAgICAgICBjb21wb25lbnQuaW5pdCgpO1xyXG4gICAgICAgIHJldHVybiBjb21wb25lbnQ7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gQHRvZG8gZmlndXJlIG91dCBob3cgdG8gaW5zZXJ0IG9wdGlvbnMgaW50byB0aGUgZmFjdG9yeSBtZXRob2RzIHZpYSBvcHRpb25zIG9iamVjdFxyXG4gICAgb3ZlcmxheShlbGVtZW50OiBzdHJpbmcpOiBJQ29tcG9uZW50IHtcclxuICAgICAgICBsZXQgY29tcG9uZW50ID0gbmV3IE92ZXJsYXlDb21wb25lbnQobmV3IExvZ2dlcigpLCBuZXcgT3V0a2l0QW5pbWF0b3IoKSlcclxuICAgICAgICBjb21wb25lbnQuc2V0RWxlbWVudCh0aGlzLmdldEVsZW1lbnQoZWxlbWVudCkpO1xyXG4gICAgICAgIGNvbXBvbmVudC5pbml0KCk7XHJcbiAgICAgICAgcmV0dXJuIGNvbXBvbmVudDtcclxuICAgIH1cclxuXHJcbiAgICB3aW5kb3coZWxlbWVudDogc3RyaW5nKTogSUNvbXBvbmVudCB7XHJcbiAgICAgICAgbGV0IGNvbXBvbmVudCA9IG5ldyBXaW5kb3dDb21wb25lbnQobmV3IExvZ2dlcigpLCBuZXcgT3V0a2l0QW5pbWF0b3IoKSlcclxuICAgICAgICBjb21wb25lbnQuc2V0RWxlbWVudCh0aGlzLmdldEVsZW1lbnQoZWxlbWVudCkpO1xyXG4gICAgICAgIGNvbXBvbmVudC5pbml0KCk7XHJcbiAgICAgICAgcmV0dXJuIGNvbXBvbmVudDtcclxuICAgIH1cclxuXHJcbiAgICBkcmFnZ2FibGUoZWxlbWVudDogc3RyaW5nKTogSUNvbXBvbmVudCB7XHJcbiAgICAgICAgbGV0IGNvbXBvbmVudCA9IG5ldyBEcmFnZ2FibGVDb21wb25lbnQobmV3IExvZ2dlcigpLCBuZXcgT3V0a2l0QW5pbWF0b3IoKSlcclxuICAgICAgICBjb21wb25lbnQuc2V0RWxlbWVudCh0aGlzLmdldEVsZW1lbnQoZWxlbWVudCkpO1xyXG4gICAgICAgIGNvbXBvbmVudC5pbml0KCk7XHJcbiAgICAgICAgcmV0dXJuIGNvbXBvbmVudDtcclxuICAgIH1cclxuXHJcbiAgICBobGF5b3V0KGVsZW1lbnQ6IHN0cmluZyk6IElDb21wb25lbnQge1xyXG4gICAgICAgIGxldCBjb21wb25lbnQgPSBuZXcgSG9yaXpvbnRhbExheW91dENvbXBvbmVudChuZXcgTG9nZ2VyKCkpXHJcbiAgICAgICAgY29tcG9uZW50LnNldEVsZW1lbnQodGhpcy5nZXRFbGVtZW50KGVsZW1lbnQpKTtcclxuICAgICAgICBjb21wb25lbnQuaW5pdCgpO1xyXG4gICAgICAgIHJldHVybiBjb21wb25lbnQ7XHJcbiAgICB9XHJcblxyXG4gICAgdmxheW91dChlbGVtZW50OiBzdHJpbmcpOiBJQ29tcG9uZW50IHtcclxuICAgICAgICBsZXQgY29tcG9uZW50ID0gbmV3IFZlcnRpY2FsTGF5b3V0Q29tcG9uZW50KG5ldyBMb2dnZXIoKSlcclxuICAgICAgICBjb21wb25lbnQuc2V0RWxlbWVudCh0aGlzLmdldEVsZW1lbnQoZWxlbWVudCkpO1xyXG4gICAgICAgIGNvbXBvbmVudC5pbml0KCk7XHJcbiAgICAgICAgcmV0dXJuIGNvbXBvbmVudDtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGdldEVsZW1lbnQocXVlcnk6IHN0cmluZyk6IEhUTUxFbGVtZW50IHtcclxuICAgICAgICByZXR1cm4gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChxdWVyeSlbMF0gYXMgSFRNTEVsZW1lbnQ7XHJcbiAgICB9XHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tcG9uZW50L0NvbXBvbmVudEZhY3RvcnkudHMiLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBFbGVtZW50SGVscGVyIHtcclxuXHJcbiAgICAvKipcclxuICAgICAqIENoYW5nZXMgYW4gZWxlbWVudHMgY2xhc3MgYnkgYWRkaW5nIHRoZSBcImFkZENsYXNzXCIgc3RyaW5nIGFuZC9vclxyXG4gICAgICogcmVtb3ZpbmcgdGhlIFwicmVtb3ZlQ2xhc3NcIiBzdHJpbmdcclxuICAgICAqIFxyXG4gICAgICogQHN0YXRpY1xyXG4gICAgICogQHBhcmFtIHtIVE1MRWxlbWVudH0gZWxlbWVudCBcclxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBuZXdDbGFzcyBcclxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBvbGRDbGFzcyBcclxuICAgICAqIEBtZW1iZXJvZiBFbGVtZW50S2l0XHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgY2hhbmdlQ2xhc3MoZWxlbWVudDogSFRNTEVsZW1lbnQsIGFkZENsYXNzPzogc3RyaW5nLCByZW1vdmVDbGFzcz86IHN0cmluZyk6IHZvaWQge1xyXG4gICAgICAgIGxldCBjbGFzc0xpc3QgPSBlbGVtZW50LmNsYXNzTmFtZS5zcGxpdCgnICcpO1xyXG4gICAgICAgIC8vIFJlbW92ZSBvbGRDbGFzc1xyXG4gICAgICAgIGlmKHJlbW92ZUNsYXNzKSB7XHJcbiAgICAgICAgICAgIGxldCBvbGRJbmRleCA9IGNsYXNzTGlzdC5pbmRleE9mKHJlbW92ZUNsYXNzKTtcclxuICAgICAgICAgICAgaWYob2xkSW5kZXggPj0gMCkge1xyXG4gICAgICAgICAgICAgICAgY2xhc3NMaXN0LnNwbGljZShvbGRJbmRleCwgMSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gQWRkIG5ld0NsYXNzXHJcbiAgICAgICAgaWYoYWRkQ2xhc3MpIHtcclxuICAgICAgICAgICAgbGV0IG5ld0luZGV4ID0gY2xhc3NMaXN0LmluZGV4T2YoYWRkQ2xhc3MpO1xyXG4gICAgICAgICAgICBpZihuZXdJbmRleCA8IDApIHtcclxuICAgICAgICAgICAgICAgIGNsYXNzTGlzdC5wdXNoKGFkZENsYXNzKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbGVtZW50LmNsYXNzTmFtZSA9IGNsYXNzTGlzdC5qb2luKCcgJyk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBzZXRHdWlkSWQoZWxlbWVudDogSFRNTEVsZW1lbnQpIHtcclxuICAgICAgICB2YXIgdW5pcXVlSWQgPSAnb2stZ3VpZC0nICsgTWF0aC5yYW5kb20oKS50b1N0cmluZygzNikuc3Vic3RyaW5nKDIpICsgKG5ldyBEYXRlKCkpLmdldFRpbWUoKS50b1N0cmluZygzNik7XHJcbiAgICAgICAgZWxlbWVudC5pZCA9IHVuaXF1ZUlkO1xyXG4gICAgfVxyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3V0aWwvRWxlbWVudEhlbHBlci50cyIsImltcG9ydCB7IFN0YXRlIH0gZnJvbSAnLi4vc3RhdGUvU3RhdGUnO1xyXG5pbXBvcnQgeyBJTG9nZ2VyIH0gZnJvbSBcIi4uL3V0aWwvTG9nZ2VyXCI7XHJcbmltcG9ydCB7IElBbmltYXRvciB9IGZyb20gJ291dGtpdC1hbmltYXRvcic7XHJcbmltcG9ydCB7IENvbXBvc2l0ZSB9IGZyb20gXCIuL0NvbXBvc2l0ZVwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIERyYXdlckNvbXBvbmVudCBleHRlbmRzIENvbXBvc2l0ZSB7XHJcblxyXG4gICAgcHJpdmF0ZSBfZG9jazogc3RyaW5nO1xyXG4gICAgcHJpdmF0ZSBfbWF4U2l6ZTogbnVtYmVyO1xyXG4gICAgcHJpdmF0ZSBfbWluU2l6ZTogbnVtYmVyO1xyXG4gICAgcHJpdmF0ZSBfaXNPcGVuOiBib29sZWFuO1xyXG4gICAgcHJpdmF0ZSBfZG9ja1Bvc2l0aW9uczogc3RyaW5nW10gPSBbJ2xlZnQnLCAncmlnaHQnLCAndG9wJywgJ2JvdHRvbSddO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKGxvZ2dlcjogSUxvZ2dlciwgYW5pbWF0b3I/OiBJQW5pbWF0b3IpIHtcclxuICAgICAgICBzdXBlcihsb2dnZXIsIGFuaW1hdG9yKTtcclxuXHJcbiAgICAgICAgLy8gU2V0dXAgZGVmYXVsdHNcclxuICAgICAgICB0aGlzLl9kb2NrID0gJ2xlZnQnO1xyXG4gICAgICAgIHRoaXMuX21pblNpemUgPSAwO1xyXG4gICAgICAgIHRoaXMuX21heFNpemUgPSAyODA7XHJcbiAgICAgICAgdGhpcy5faXNPcGVuID0gZmFsc2U7XHJcblxyXG4gICAgICAgIC8vIFJlbGF5IGV2ZW50c1xyXG4gICAgICAgIHRoaXMucmVnaXN0ZXJFdmVudCgnb24nLCAoKSA9PiB7IHJldHVybiB0aGlzLm9uKCkgfSk7XHJcbiAgICAgICAgdGhpcy5yZWdpc3RlckV2ZW50KCdvZmYnLCAoKSA9PiB7IHJldHVybiB0aGlzLm9mZigpIH0pO1xyXG4gICAgICAgIHRoaXMucmVnaXN0ZXJFdmVudCgndG9nZ2xlJywgKCkgPT4geyByZXR1cm4gdGhpcy50b2dnbGUoKSB9KTtcclxuICAgICAgICB0aGlzLnJlZ2lzdGVyRXZlbnQoJ2luaXQnLCAoKSA9PiB7IHJldHVybiB0aGlzLmluaXQoKSB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIENoYW5nZSB0aGUgZG9jayBwb3NpdGlvbiBvZiB0aGUgZHJhd2VyLiAgQ2FsbGluZyB0aGlzIGZ1bmN0aW9uIHJlc2V0cyB0aGVcclxuICAgICAqIHN0YXRlIGFuZCByZXBvc2l0aW9ucyB0aGUgZHJhd2VyIGluc3RhbnRseS5cclxuICAgICAqIFxyXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGRvY2sgXHJcbiAgICAgKiBAcmV0dXJucyB7dGhpc30gXHJcbiAgICAgKiBAbWVtYmVyb2YgRHJhd2VyQ29tcG9uZW50XHJcbiAgICAgKi9cclxuICAgIGRvY2soZG9jazogc3RyaW5nKTogUHJvbWlzZTxTdGF0ZT4ge1xyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLl9kb2NrUG9zaXRpb25zLmluZGV4T2YoZG9jaykgPCAwKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9sb2dnZXIuZXJyb3IoYFwiJHtkb2NrfVwiIGlzIG5vdCBhIHZhbGlkIGRvY2sgcG9zaXRpb24uICBWYWxpZCBwb3NpdGlvbnMgYXJlICR7dGhpcy5fZG9ja1Bvc2l0aW9ucy5qb2luKCcsICcpfWApO1xyXG4gICAgICAgICAgICAgICAgcmVqZWN0KCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMucmVsYXkoJ29mZicpLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fZG9jayA9IGRvY2s7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9zdGF0ZSA9IG51bGw7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5pbml0KCk7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICBtaW5TaXplKG46IG51bWJlcik6IHRoaXMge1xyXG4gICAgICAgIGlmIChuIDwgMCkge1xyXG4gICAgICAgICAgICB0aGlzLl9sb2dnZXIuZXJyb3IoYG1pblNpemUgbnVtYmVyIG11c3QgYmUgZ3JlYXRlciB0aGFuIG9yIGVxdWFsIHRvIHplcm8uYCk7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLl9taW5TaXplID0gbjtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuXHJcbiAgICBtYXhTaXplKG46IG51bWJlcik6IHRoaXMge1xyXG4gICAgICAgIGlmIChuIDwgMCkge1xyXG4gICAgICAgICAgICB0aGlzLl9sb2dnZXIuZXJyb3IoYG1heFNpemUgbnVtYmVyIG11c3QgYmUgZ3JlYXRlciB0aGFuIG9yIGVxdWFsIHRvIHplcm8uYCk7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLl9tYXhTaXplID0gbjtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFNldHMgdGhlIGluaXRpYWwgc3RhdGVcclxuICAgICAqIEByZXR1cm5zIHtQcm9taXNlPFN0YXRlPn0gXHJcbiAgICAgKi9cclxuICAgIGluaXQoKTogUHJvbWlzZTxTdGF0ZT4ge1xyXG4gICAgICAgIGxldCBzdGF0ZSA9IG5ldyBTdGF0ZSgpO1xyXG4gICAgICAgIHN0YXRlLm9rQ2xhc3NOYW1lID0gJ29rLWRyYXdlcic7XHJcbiAgICAgICAgc3RhdGUuc3R5bGUucG9zaXRpb24gPSAnZml4ZWQnO1xyXG4gICAgICAgIHN0YXRlLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xyXG4gICAgICAgIHN0YXRlLnN0eWxlLnpJbmRleCA9ICcxMDAwMCdcclxuXHJcbiAgICAgICAgaWYgKHRoaXMuaXNMZWZ0KCkpIHtcclxuICAgICAgICAgICAgc3RhdGUuc3R5bGUud2lkdGggPSBgJHt0aGlzLl9tYXhTaXplfXB4YDtcclxuICAgICAgICAgICAgc3RhdGUuc3R5bGUuaGVpZ2h0ID0gYCR7dGhpcy5nZXRFbGVtZW50KCkucGFyZW50RWxlbWVudC5vZmZzZXRIZWlnaHR9cHhgO1xyXG4gICAgICAgICAgICBzdGF0ZS5zdHlsZS5sZWZ0ID0gYC0ke3RoaXMuX21heFNpemV9cHhgO1xyXG4gICAgICAgICAgICBzdGF0ZS5zdHlsZS50b3AgPSAnMCc7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLmlzUmlnaHQoKSkge1xyXG4gICAgICAgICAgICBzdGF0ZS5zdHlsZS53aWR0aCA9IGAke3RoaXMuX21heFNpemV9cHhgO1xyXG4gICAgICAgICAgICBzdGF0ZS5zdHlsZS5oZWlnaHQgPSBgJHt0aGlzLmdldEVsZW1lbnQoKS5wYXJlbnRFbGVtZW50Lm9mZnNldEhlaWdodH1weGA7XHJcbiAgICAgICAgICAgIHN0YXRlLnN0eWxlLnJpZ2h0ID0gYC0ke3RoaXMuX21heFNpemV9cHhgO1xyXG4gICAgICAgICAgICBzdGF0ZS5zdHlsZS50b3AgPSAnMCc7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLmlzVG9wKCkpIHtcclxuICAgICAgICAgICAgc3RhdGUuc3R5bGUud2lkdGggPSBgJHt0aGlzLmdldEVsZW1lbnQoKS5wYXJlbnRFbGVtZW50Lm9mZnNldFdpZHRofXB4YDtcclxuICAgICAgICAgICAgc3RhdGUuc3R5bGUuaGVpZ2h0ID0gYCR7dGhpcy5fbWF4U2l6ZX1weGA7XHJcbiAgICAgICAgICAgIHN0YXRlLnN0eWxlLnRvcCA9IGAtJHt0aGlzLl9tYXhTaXplfXB4YDtcclxuICAgICAgICAgICAgc3RhdGUuc3R5bGUubGVmdCA9ICcwJztcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMuaXNCb3R0b20oKSkge1xyXG4gICAgICAgICAgICBzdGF0ZS5zdHlsZS53aWR0aCA9IGAke3RoaXMuZ2V0RWxlbWVudCgpLnBhcmVudEVsZW1lbnQub2Zmc2V0V2lkdGh9cHhgO1xyXG4gICAgICAgICAgICBzdGF0ZS5zdHlsZS5oZWlnaHQgPSBgJHt0aGlzLl9tYXhTaXplfXB4YDtcclxuICAgICAgICAgICAgc3RhdGUuc3R5bGUuYm90dG9tID0gYC0ke3RoaXMuX21heFNpemV9cHhgO1xyXG4gICAgICAgICAgICBzdGF0ZS5zdHlsZS5sZWZ0ID0gJzAnO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdGhpcy5yZW5kZXIoc3RhdGUpO1xyXG4gICAgfVxyXG5cclxuICAgIHRvZ2dsZSgpOiBQcm9taXNlPFN0YXRlPiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2lzT3BlbiA/IHRoaXMub2ZmKCkgOiB0aGlzLm9uKCk7XHJcbiAgICB9XHJcblxyXG4gICAgb24oKTogUHJvbWlzZTxTdGF0ZT4ge1xyXG4gICAgICAgIGlmICh0aGlzLl9pc09wZW4pXHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgICAgICAgICAgICByZXNvbHZlKHRoaXMuX3N0YXRlKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy5faXNPcGVuID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgbGV0IHN0YXRlID0gbmV3IFN0YXRlKCk7XHJcbiAgICAgICAgaWYgKHRoaXMuaXNMZWZ0KCkpIHtcclxuICAgICAgICAgICAgc3RhdGUuc3R5bGUubGVmdCA9ICcwJztcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMuaXNSaWdodCgpKSB7XHJcbiAgICAgICAgICAgIHN0YXRlLnN0eWxlLnJpZ2h0ID0gJzAnO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5pc1RvcCgpKSB7XHJcbiAgICAgICAgICAgIHN0YXRlLnN0eWxlLnRvcCA9ICcwJztcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMuaXNCb3R0b20oKSkge1xyXG4gICAgICAgICAgICBzdGF0ZS5zdHlsZS5ib3R0b20gPSAnMCdcclxuICAgICAgICB9XHJcbiAgICAgICAgc3RhdGUuc3RhdGVDbGFzc05hbWUgPSAnb2stb24nO1xyXG5cclxuICAgICAgICByZXR1cm4gdGhpcy5yZW5kZXIoc3RhdGUpO1xyXG4gICAgfVxyXG5cclxuICAgIG9mZigpOiBQcm9taXNlPFN0YXRlPiB7XHJcbiAgICAgICAgaWYgKCF0aGlzLl9pc09wZW4pXHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgICAgICAgICAgICByZXNvbHZlKHRoaXMuX3N0YXRlKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy5faXNPcGVuID0gZmFsc2U7XHJcblxyXG4gICAgICAgIGxldCBzdGF0ZSA9IG5ldyBTdGF0ZSgpO1xyXG4gICAgICAgIGlmICh0aGlzLmlzTGVmdCgpKSB7XHJcbiAgICAgICAgICAgIHN0YXRlLnN0eWxlLmxlZnQgPSBgLSR7dGhpcy5fbWF4U2l6ZX1weGA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLmlzUmlnaHQoKSkge1xyXG4gICAgICAgICAgICBzdGF0ZS5zdHlsZS5yaWdodCA9IGAtJHt0aGlzLl9tYXhTaXplfXB4YDtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMuaXNUb3AoKSkge1xyXG4gICAgICAgICAgICBzdGF0ZS5zdHlsZS50b3AgPSBgLSR7dGhpcy5fbWF4U2l6ZX1weGA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLmlzQm90dG9tKCkpIHtcclxuICAgICAgICAgICAgc3RhdGUuc3R5bGUuYm90dG9tID0gYC0ke3RoaXMuX21heFNpemV9cHhgO1xyXG4gICAgICAgIH1cclxuICAgICAgICBzdGF0ZS5zdGF0ZUNsYXNzTmFtZSA9ICdvay1vZmYnO1xyXG5cclxuICAgICAgICByZXR1cm4gdGhpcy5yZW5kZXIoc3RhdGUpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgaXNMZWZ0KCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9kb2NrID09PSAnbGVmdCc7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBpc1JpZ2h0KCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9kb2NrID09PSAncmlnaHQnO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgaXNUb3AoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2RvY2sgPT09ICd0b3AnO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgaXNCb3R0b20oKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2RvY2sgPT09ICdib3R0b20nO1xyXG4gICAgfVxyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbXBvbmVudC9EcmF3ZXJDb21wb25lbnQudHMiLCJpbXBvcnQgeyBDb21wb3NpdGUgfSBmcm9tIFwiLi9Db21wb3NpdGVcIjtcclxuaW1wb3J0IHsgSUxvZ2dlciB9IGZyb20gXCIuLi91dGlsL0xvZ2dlclwiO1xyXG5pbXBvcnQgeyBJQW5pbWF0b3IgfSBmcm9tICdvdXRraXQtYW5pbWF0b3InO1xyXG5pbXBvcnQgeyBTdGF0ZSB9IGZyb20gXCIuLi9zdGF0ZS9TdGF0ZVwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIERyYWdnYWJsZUNvbXBvbmVudCBleHRlbmRzIENvbXBvc2l0ZSB7XHJcblxyXG4gICAgcHJpdmF0ZSBfZHJhZ1Jvb3Q6IGJvb2xlYW47XHJcbiAgICBwcml2YXRlIF94OiBudW1iZXI7XHJcbiAgICBwcml2YXRlIF95OiBudW1iZXI7XHJcbiAgICBwcml2YXRlIF90b3A6IG51bWJlcjtcclxuICAgIHByaXZhdGUgX2xlZnQ6IG51bWJlcjtcclxuICAgIHByaXZhdGUgX3BhcmVudFRvcDogbnVtYmVyO1xyXG4gICAgcHJpdmF0ZSBfcGFyZW50TGVmdDogbnVtYmVyO1xyXG4gICAgcHJpdmF0ZSBfZGlmZlg6IG51bWJlcjtcclxuICAgIHByaXZhdGUgX2RpZmZZOiBudW1iZXI7XHJcblxyXG4gICAgY29uc3RydWN0b3IobG9nZ2VyOiBJTG9nZ2VyLCBhbmltYXRvcj86IElBbmltYXRvcikge1xyXG4gICAgICAgIHN1cGVyKGxvZ2dlciwgYW5pbWF0b3IpO1xyXG5cclxuICAgICAgICAvLyBTZXR1cCBkZWZhdWx0c1xyXG4gICAgICAgIHRoaXMuX2RyYWdSb290ID0gZmFsc2U7XHJcblxyXG4gICAgICAgIC8vIFJlbGF5IGV2ZW50c1xyXG4gICAgICAgIHRoaXMucmVnaXN0ZXJFdmVudCgnaW5pdCcsICgpID0+IHsgcmV0dXJuIHRoaXMuaW5pdCgpIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGRyYWdSb290KGZsYWc6IGJvb2xlYW4pOiB0aGlzIHtcclxuICAgICAgICB0aGlzLl9kcmFnUm9vdCA9IGZsYWc7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgaW5pdCgpOiBQcm9taXNlPFN0YXRlPiB7XHJcbiAgICAgICAgbGV0IHN0YXRlID0gbmV3IFN0YXRlKCk7XHJcbiAgICAgICAgc3RhdGUub2tDbGFzc05hbWUgPSAnb2stZHJhZ2dhYmxlJztcclxuXHJcbiAgICAgICAgdGhpcy5nZXRFbGVtZW50KCkuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgdGhpcy5zdGFydERyYWcpO1xyXG4gICAgICAgIHRoaXMuZ2V0RWxlbWVudCgpLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIGRvY3VtZW50Lm9ubW91c2Vtb3ZlID0gKCkgPT4ge307XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMucmVuZGVyKHN0YXRlKTtcclxuICAgIH1cclxuXHJcbiAgICBzdGFydERyYWcgPSAoZXZlbnQ6IE1vdXNlRXZlbnQpID0+IHtcclxuICAgICAgICBsZXQgZGUgPSB0aGlzLmdldEVsZW1lbnQoKTtcclxuICAgICAgICBpZiAodGhpcy5fZHJhZ1Jvb3QpIHtcclxuICAgICAgICAgICAgZGUgPSB0aGlzLmdldFJvb3QoKS5nZXRFbGVtZW50KCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCBwYXJlbnQgPSBkZS5wYXJlbnRFbGVtZW50O1xyXG5cclxuICAgICAgICBsZXQgeCA9IGV2ZW50LmNsaWVudFgsXHJcbiAgICAgICAgICAgIHkgPSBldmVudC5jbGllbnRZLFxyXG4gICAgICAgICAgICB0b3AgPSBkZS5vZmZzZXRUb3AsXHJcbiAgICAgICAgICAgIGxlZnQgPSBkZS5vZmZzZXRMZWZ0LFxyXG4gICAgICAgICAgICBkZVdpZHRoID0gZGUub2Zmc2V0V2lkdGgsXHJcbiAgICAgICAgICAgIGRlSGVpZ2h0ID0gZGUub2Zmc2V0SGVpZ2h0LFxyXG4gICAgICAgICAgICBwYXJlbnRUb3AgPSBwYXJlbnQub2Zmc2V0VG9wLFxyXG4gICAgICAgICAgICBwYXJlbnRMZWZ0ID0gcGFyZW50Lm9mZnNldExlZnQsXHJcbiAgICAgICAgICAgIHBhcmVudFdpZHRoID0gcGFyZW50Lm9mZnNldFdpZHRoLFxyXG4gICAgICAgICAgICBwYXJlbnRIZWlnaHQgPXBhcmVudC5vZmZzZXRIZWlnaHQsXHJcbiAgICAgICAgICAgIGRpZmZYID0geCAtIGxlZnQsXHJcbiAgICAgICAgICAgIGRpZmZZID0geSAtIHRvcDtcclxuXHJcbiAgICAgICAgZG9jdW1lbnQub25tb3VzZW1vdmUgPSAoZXZlbnQ6IE1vdXNlRXZlbnQpID0+IHtcclxuICAgICAgICAgICAgbGV0IHggPSBldmVudC5jbGllbnRYLFxyXG4gICAgICAgICAgICAgICAgeSA9IGV2ZW50LmNsaWVudFksXHJcbiAgICAgICAgICAgICAgICBhWCA9IHggLSBkaWZmWCxcclxuICAgICAgICAgICAgICAgIGFZID0geSAtIGRpZmZZO1xyXG4gICAgICAgICAgICBpZiAoYVggPCAwKSBhWCA9IDA7XHJcbiAgICAgICAgICAgIGlmIChhWSA8IDApIGFZID0gMDtcclxuICAgICAgICAgICAgaWYgKGFYICsgZGVXaWR0aCA+IHBhcmVudFdpZHRoKSBhWCA9IHBhcmVudFdpZHRoIC0gZGVXaWR0aDtcclxuICAgICAgICAgICAgaWYgKGFZICsgZGVIZWlnaHQgPiBwYXJlbnRIZWlnaHQpIGFZID0gcGFyZW50SGVpZ2h0IC0gZGVIZWlnaHQ7XHJcblxyXG4gICAgICAgICAgICB0aGlzLm1vdmUoZGUsIGFYLCBhWSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIG1vdmUoZWxlbWVudDogSFRNTEVsZW1lbnQsIHg6IG51bWJlciwgeTogbnVtYmVyKSB7IFxyXG4gICAgICAgIGVsZW1lbnQuc3R5bGUubGVmdCA9IGAke3h9cHhgO1xyXG4gICAgICAgIGVsZW1lbnQuc3R5bGUudG9wID0gYCR7eX1weGA7XHJcbiAgICB9XHJcblxyXG4gICAgc3RvcERyYWcoKSB7IH1cclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21wb25lbnQvRHJhZ2dhYmxlQ29tcG9uZW50LnRzIiwiaW1wb3J0IHsgQ29tcG9zaXRlIH0gZnJvbSBcIi4vQ29tcG9zaXRlXCI7XHJcbmltcG9ydCB7IElMb2dnZXIgfSBmcm9tIFwiLi4vdXRpbC9Mb2dnZXJcIjtcclxuaW1wb3J0IExvZ2dlciBmcm9tIFwiLi4vdXRpbC9Mb2dnZXJcIjtcclxuaW1wb3J0IHsgSUFuaW1hdG9yIH0gZnJvbSAnb3V0a2l0LWFuaW1hdG9yJztcclxuaW1wb3J0IHsgSUNvbXBvbmVudCwgQ29tcG9uZW50IH0gZnJvbSBcIi4vQ29tcG9uZW50XCI7XHJcbmltcG9ydCB7IENvbXBvbmVudEZhY3RvcnkgfSBmcm9tIFwiLi9Db21wb25lbnRGYWN0b3J5XCI7XHJcbmltcG9ydCBFbGVtZW50SGVscGVyIGZyb20gXCIuLi91dGlsL0VsZW1lbnRIZWxwZXJcIjtcclxuaW1wb3J0IHsgU3RhdGUgfSBmcm9tIFwiLi4vc3RhdGUvU3RhdGVcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBIb3Jpem9udGFsTGF5b3V0Q29tcG9uZW50IGV4dGVuZHMgQ29tcG9zaXRlIHtcclxuXHJcbiAgICBwcml2YXRlIGZpeGVkQ2hpbGRyZW46IEFycmF5PElDb21wb25lbnQ+O1xyXG4gICAgcHJpdmF0ZSBwZXJjdENoaWxkcmVuOiBBcnJheTxJQ29tcG9uZW50PjtcclxuICAgIHByaXZhdGUgZmx1aWRDaGlsZHJlbjogQXJyYXk8SUNvbXBvbmVudD47XHJcblxyXG4gICAgY29uc3RydWN0b3IobG9nZ2VyOiBJTG9nZ2VyLCBhbmltYXRvcj86IElBbmltYXRvcikge1xyXG4gICAgICAgIHN1cGVyKGxvZ2dlciwgYW5pbWF0b3IpO1xyXG4gICAgICAgIHRoaXMucmVzZXRDaGlsZHJlbigpO1xyXG4gICAgICAgIHRoaXMucmVnaXN0ZXJFdmVudCgnaW5pdCcsICgpID0+IHsgcmV0dXJuIHRoaXMuaW5pdCgpIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogRm9yIGVhY2ggY2hpbGQgZWxlbWVudCBpbiBlbGVtZW50cywgc2V0IHVwIGEgbmV3IENvbXBvbmVudCBmaWd1cmUgXHJcbiAgICAgKiBvdXQgaWYgaXQgaGFzIGEgd2lkdGggc2V0IGFzIGEgcGl4ZWwgdmFsdWUgKGZpeGVkIGNoaWxkKSwgYSAxMDAlXHJcbiAgICAgKiB2YWx1ZSAoZmx1aWQgY2hpbGQpLCBvciBhIHZhbHVlIHNldCB0byBhIHNwZWNpZmljIHBlcmNlbnRhZ2UgXHJcbiAgICAgKiAocGVyY2VudGFnZSBjaGlsZClcclxuICAgICAqIFxyXG4gICAgICogQHJldHVybnMgXHJcbiAgICAgKiBAbWVtYmVyb2YgSG9yaXpvbnRhbExheW91dENvbXBvbmVudFxyXG4gICAgICovXHJcbiAgICBpbml0KCkge1xyXG4gICAgICAgIGxldCBlbCA9IHRoaXMuZ2V0RWxlbWVudCgpO1xyXG4gICAgICAgIGxldCBmYWN0b3J5ID0gbmV3IENvbXBvbmVudEZhY3RvcnkoKTtcclxuICAgICAgICB0aGlzLnJlc2V0Q2hpbGRyZW4oKTtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGVsLmNoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGxldCBjaGlsZCA9IGVsLmNoaWxkcmVuW2ldIGFzIEhUTUxFbGVtZW50O1xyXG4gICAgICAgICAgICBpZiAoIWNoaWxkLmlkKVxyXG4gICAgICAgICAgICAgICAgRWxlbWVudEhlbHBlci5zZXRHdWlkSWQoY2hpbGQpO1xyXG4gICAgICAgICAgICBsZXQgY2hpbGRDb21wb25lbnQgPSBuZXcgQ29tcG9uZW50KG5ldyBMb2dnZXIoKSk7XHJcbiAgICAgICAgICAgIGNoaWxkQ29tcG9uZW50LnNldEVsZW1lbnQoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoY2hpbGQuaWQpKTtcclxuICAgICAgICAgICAgbGV0IHNpemUgPSBjaGlsZC5nZXRBdHRyaWJ1dGUoJ2RhdGEtc2l6ZScpIHx8ICcxMDAlJztcclxuICAgICAgICAgICAgaWYgKHNpemUgPT09ICcxMDAlJykge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5mbHVpZENoaWxkcmVuLnB1c2goY2hpbGRDb21wb25lbnQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2UgaWYgKHNpemUubWF0Y2goL15bXFxkXSslJC8pKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnBlcmN0Q2hpbGRyZW4ucHVzaChjaGlsZENvbXBvbmVudCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmZpeGVkQ2hpbGRyZW4ucHVzaChjaGlsZENvbXBvbmVudCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY2hpbGRDb21wb25lbnQucmVuZGVyKHsgc3R5bGU6IHsgaGVpZ2h0OiAnMTAwJScsIHdpZHRoOiBzaXplLCBmbG9hdDogJ2xlZnQnIH0gfSlcclxuICAgICAgICAgICAgdGhpcy5hZGRDaGlsZChjaGlsZENvbXBvbmVudCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigncmVzaXplJywgdGhpcy5yZXNpemUuYmluZCh0aGlzKSk7XHJcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHRoaXMucmVzaXplLmJpbmQodGhpcykpO1xyXG5cclxuICAgICAgICBsZXQgc3RhdGUgPSBuZXcgU3RhdGUoKTtcclxuICAgICAgICBzdGF0ZS5zdHlsZS5oZWlnaHQgPSB0aGlzLmdldEVsZW1lbnQoKS5wYXJlbnRFbGVtZW50Lm9mZnNldEhlaWdodCArICdweCc7XHJcbiAgICAgICAgc3RhdGUuc3R5bGUud2lkdGggPSB0aGlzLmdldEVsZW1lbnQoKS5wYXJlbnRFbGVtZW50Lm9mZnNldFdpZHRoICsgJ3B4JztcclxuICAgICAgICBzdGF0ZS5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xyXG4gICAgICAgIHJldHVybiB0aGlzLnJlbmRlcihzdGF0ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVzaXplKCkge1xyXG4gICAgICAgIGxldCBzdGF0ZSA9IG5ldyBTdGF0ZSgpO1xyXG4gICAgICAgIHN0YXRlLnN0eWxlLmhlaWdodCA9IHRoaXMuZ2V0RWxlbWVudCgpLnBhcmVudEVsZW1lbnQub2Zmc2V0SGVpZ2h0ICsgJ3B4JztcclxuICAgICAgICBzdGF0ZS5zdHlsZS53aWR0aCA9IHRoaXMuZ2V0RWxlbWVudCgpLnBhcmVudEVsZW1lbnQub2Zmc2V0V2lkdGggKyAncHgnO1xyXG4gICAgICAgIHJldHVybiB0aGlzLnJlbmRlcihzdGF0ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKG5ld1N0YXRlOiBTdGF0ZSkge1xyXG4gICAgICAgIGxldCBwcm9taXNlcyA9IFtdO1xyXG4gICAgICAgIHByb21pc2VzLnB1c2goc3VwZXIucmVuZGVyKG5ld1N0YXRlKSk7XHJcblxyXG4gICAgICAgIHZhciB0b3RhbFdpZHRoID0gdGhpcy5nZXRFbGVtZW50KCkub2Zmc2V0V2lkdGg7XHJcbiAgICAgICAgdmFyIGZsdWlkV2lkdGggPSB0b3RhbFdpZHRoO1xyXG4gICAgICAgIHZhciB0b3RhbEhlaWdodCA9IHRoaXMuZ2V0RWxlbWVudCgpLm9mZnNldEhlaWdodDtcclxuXHJcbiAgICAgICAgLy8gRHJhdyB0aGUgZml4ZWQgY2hpbGRyZW5cclxuICAgICAgICBmb3IgKGxldCBlbCBvZiB0aGlzLmZpeGVkQ2hpbGRyZW4pIHtcclxuICAgICAgICAgICAgZmx1aWRXaWR0aCAtPSBlbC5nZXRFbGVtZW50KCkub2Zmc2V0V2lkdGg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIERyYXcgdGhlIHBlcmNlbnRhZ2UgY2hpbGRyZW5cclxuICAgICAgICBmb3IgKGxldCBlbCBvZiB0aGlzLnBlcmN0Q2hpbGRyZW4pIHtcclxuICAgICAgICAgICAgbGV0IHdpZHRoID0gKHBhcnNlRmxvYXQoZWwuZ2V0RWxlbWVudCgpLmdldEF0dHJpYnV0ZSgnZGF0YS1zaXplJykpIC8gMTAwICogZmx1aWRXaWR0aCk7XHJcbiAgICAgICAgICAgIGZsdWlkV2lkdGggLT0gd2lkdGg7XHJcbiAgICAgICAgICAgIGVsLnJlbmRlcih7IHN0eWxlOiB7IHdpZHRoOiB3aWR0aCArICdweCcgfSB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gRHJhdyB0aGUgZmx1aWQgY2hpbGRyZW5cclxuICAgICAgICBmb3IgKGxldCBlbCBvZiB0aGlzLmZsdWlkQ2hpbGRyZW4pIHtcclxuICAgICAgICAgICAgdmFyIHdpZHRoID0gZmx1aWRXaWR0aCAvIHRoaXMuZmx1aWRDaGlsZHJlbi5sZW5ndGg7XHJcbiAgICAgICAgICAgIHByb21pc2VzLnB1c2goZWwucmVuZGVyKHsgc3R5bGU6IHsgd2lkdGg6IHdpZHRoICsgJ3B4JyB9IH0pKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIFByb21pc2UuYWxsKHByb21pc2VzKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFNldHMgdGhlIGNoaWRyZW4gYXJyYXlzIHRvIG5ldyBhcnJheXMuXHJcbiAgICAgKiBAcHJpdmF0ZVxyXG4gICAgICogQG1lbWJlcm9mIEhvcml6b250YWxMYXlvdXRDb21wb25lbnRcclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSByZXNldENoaWxkcmVuKCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuZml4ZWRDaGlsZHJlbiA9IG5ldyBBcnJheTxJQ29tcG9uZW50PigpO1xyXG4gICAgICAgIHRoaXMucGVyY3RDaGlsZHJlbiA9IG5ldyBBcnJheTxJQ29tcG9uZW50PigpO1xyXG4gICAgICAgIHRoaXMuZmx1aWRDaGlsZHJlbiA9IG5ldyBBcnJheTxJQ29tcG9uZW50PigpO1xyXG4gICAgfVxyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbXBvbmVudC9Ib3Jpem9udGFsTGF5b3V0Q29tcG9uZW50LnRzIiwiaW1wb3J0IHsgU3RhdGUgfSBmcm9tIFwiLi4vc3RhdGUvU3RhdGVcIjtcclxuaW1wb3J0IHsgSUxvZ2dlciB9IGZyb20gXCIuLi91dGlsL0xvZ2dlclwiO1xyXG5pbXBvcnQgeyBJQW5pbWF0b3IgfSBmcm9tICdvdXRraXQtYW5pbWF0b3InO1xyXG5pbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tIFwiLi9Db21wb25lbnRcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBPdmVybGF5Q29tcG9uZW50IGV4dGVuZHMgQ29tcG9uZW50IHtcclxuXHJcbiAgICBwcml2YXRlIF9jb2xvcjogc3RyaW5nO1xyXG4gICAgcHJpdmF0ZSBfb3BhY2l0eTogbnVtYmVyO1xyXG4gICAgcHJpdmF0ZSBfaXNPbjogYm9vbGVhbjtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihsb2dnZXI6IElMb2dnZXIsIGFuaW1hdG9yPzogSUFuaW1hdG9yKSB7XHJcbiAgICAgICAgc3VwZXIobG9nZ2VyLCBhbmltYXRvcik7XHJcblxyXG4gICAgICAgIC8vIFNldHVwIGRlZmF1bHRzXHJcbiAgICAgICAgdGhpcy5fb3BhY2l0eSA9IC44O1xyXG4gICAgICAgIHRoaXMuX2NvbG9yID0gJyMwMDAwMDAnO1xyXG4gICAgICAgIHRoaXMuX2lzT24gPSBmYWxzZTtcclxuXHJcbiAgICAgICAgLy8gUmVsYXkgZXZlbnRzXHJcbiAgICAgICAgdGhpcy5yZWdpc3RlckV2ZW50KCdvbicsICgpID0+IHsgcmV0dXJuIHRoaXMub24oKSB9KTtcclxuICAgICAgICB0aGlzLnJlZ2lzdGVyRXZlbnQoJ29mZicsICgpID0+IHsgcmV0dXJuIHRoaXMub2ZmKCkgfSk7XHJcbiAgICAgICAgdGhpcy5yZWdpc3RlckV2ZW50KCd0b2dnbGUnLCAoKSA9PiB7IHJldHVybiB0aGlzLnRvZ2dsZSgpIH0pO1xyXG4gICAgICAgIHRoaXMucmVnaXN0ZXJFdmVudCgnaW5pdCcsICgpID0+IHsgcmV0dXJuIHRoaXMuaW5pdCgpIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIG9wYWNpdHkobjogbnVtYmVyKTogdGhpcyB7XHJcbiAgICAgICAgaWYgKG4gPCAwKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2xvZ2dlci5lcnJvcihgT3BhY2l0eSBtdXN0IGJlIGdyZWF0ZXIgdGhhbiBvciBlcXVhbCB0byB6ZXJvLmApO1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcztcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKG4gPiAxKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2xvZ2dlci5lcnJvcihgT3BhY2l0eSBtdXN0IGJlIGxlc3MgdGhhbiBvciBlcXVhbCB0byBvbmUuYCk7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLl9vcGFjaXR5ID0gbjtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuXHJcbiAgICBjb2xvcihjOiBzdHJpbmcpOiB0aGlzIHtcclxuICAgICAgICB0aGlzLl9jb2xvciA9IGM7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBTZXRzIHRoZSBpbml0aWFsIHN0YXRlXHJcbiAgICAgKiBAcmV0dXJucyB7UHJvbWlzZTxTdGF0ZT59IFxyXG4gICAgICovXHJcbiAgICBpbml0KCk6IFByb21pc2U8U3RhdGU+IHtcclxuICAgICAgICBsZXQgc3RhdGUgPSBuZXcgU3RhdGUoKTtcclxuICAgICAgICBzdGF0ZS5va0NsYXNzTmFtZSA9ICdvay1vdmVybGF5JztcclxuICAgICAgICBzdGF0ZS5zdHlsZS5oZWlnaHQgPSBcIjEwMCVcIjtcclxuICAgICAgICBzdGF0ZS5zdHlsZS53aWR0aCA9IFwiMTAwJVwiO1xyXG4gICAgICAgIHN0YXRlLnN0eWxlLnBvc2l0aW9uID0gXCJmaXhlZFwiO1xyXG4gICAgICAgIHN0YXRlLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IHRoaXMuX2NvbG9yO1xyXG4gICAgICAgIHN0YXRlLnN0eWxlLm9wYWNpdHkgPSAnMCc7XHJcbiAgICAgICAgc3RhdGUuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgICAgICBzdGF0ZS5zdHlsZS50b3AgPSAnMCc7XHJcbiAgICAgICAgc3RhdGUuc3R5bGUubGVmdCA9ICcwJztcclxuXHJcbiAgICAgICAgaWYgKHRoaXMuZ2V0RWxlbWVudCgpKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZ2V0RWxlbWVudCgpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5jbGlja0V2ZW50KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzLnJlbmRlcihzdGF0ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgdG9nZ2xlKCk6IFByb21pc2U8U3RhdGU+IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5faXNPbiA/IHRoaXMub2ZmKCkgOiB0aGlzLm9uKCk7XHJcbiAgICB9XHJcblxyXG4gICAgb24oKTogUHJvbWlzZTxTdGF0ZT4ge1xyXG4gICAgICAgIGlmICh0aGlzLl9pc09uKVxyXG4gICAgICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmVzb2x2ZSh0aGlzLl9zdGF0ZSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMuX2lzT24gPSB0cnVlO1xyXG5cclxuICAgICAgICByZXR1cm4gdGhpcy5yZW5kZXIodGhpcy5vblN0YXRlKCkpO1xyXG4gICAgfVxyXG5cclxuICAgIG9mZigpOiBQcm9taXNlPFN0YXRlPiB7XHJcbiAgICAgICAgaWYgKCF0aGlzLl9pc09uKVxyXG4gICAgICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmVzb2x2ZSh0aGlzLl9zdGF0ZSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMuX2lzT24gPSBmYWxzZTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXMucmVuZGVyKHRoaXMub2ZmU3RhdGUoKSlcclxuICAgICAgICAgICAgLnRoZW4oKHJlc3VsdCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMucmVuZGVyKHRoaXMuaGlkZGVuU3RhdGUoKSk7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgb25TdGF0ZSgpOiBTdGF0ZSB7XHJcbiAgICAgICAgbGV0IHN0YXRlID0gbmV3IFN0YXRlKCk7XHJcbiAgICAgICAgc3RhdGUuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XHJcbiAgICAgICAgc3RhdGUuc3R5bGUub3BhY2l0eSA9IHRoaXMuX29wYWNpdHkudG9TdHJpbmcoKTtcclxuICAgICAgICByZXR1cm4gc3RhdGU7XHJcbiAgICB9XHJcblxyXG4gICAgb2ZmU3RhdGUoKTogU3RhdGUge1xyXG4gICAgICAgIGxldCBzdGF0ZSA9IG5ldyBTdGF0ZSgpO1xyXG4gICAgICAgIHN0YXRlLnN0eWxlLm9wYWNpdHkgPSAnMCc7XHJcbiAgICAgICAgcmV0dXJuIHN0YXRlO1xyXG4gICAgfVxyXG5cclxuICAgIGhpZGRlblN0YXRlKCk6IFN0YXRlIHtcclxuICAgICAgICBsZXQgc3RhdGUgPSBuZXcgU3RhdGUoKTtcclxuICAgICAgICBzdGF0ZS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgICAgIHJldHVybiBzdGF0ZTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGNsaWNrRXZlbnQgPSAoKSA9PiB7XHJcbiAgICAgICAgdGhpcy5nZXRSb290KCkucmVsYXkoJ29mZicpO1xyXG4gICAgfVxyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbXBvbmVudC9PdmVybGF5Q29tcG9uZW50LnRzIiwiaW1wb3J0IHsgQ29tcG9zaXRlIH0gZnJvbSBcIi4vQ29tcG9zaXRlXCI7XHJcbmltcG9ydCB7IElMb2dnZXIgfSBmcm9tIFwiLi4vdXRpbC9Mb2dnZXJcIjtcclxuaW1wb3J0IExvZ2dlciBmcm9tIFwiLi4vdXRpbC9Mb2dnZXJcIjtcclxuaW1wb3J0IHsgSUFuaW1hdG9yIH0gZnJvbSAnb3V0a2l0LWFuaW1hdG9yJztcclxuaW1wb3J0IHsgSUNvbXBvbmVudCwgQ29tcG9uZW50IH0gZnJvbSBcIi4vQ29tcG9uZW50XCI7XHJcbmltcG9ydCB7IENvbXBvbmVudEZhY3RvcnkgfSBmcm9tIFwiLi9Db21wb25lbnRGYWN0b3J5XCI7XHJcbmltcG9ydCBFbGVtZW50SGVscGVyIGZyb20gXCIuLi91dGlsL0VsZW1lbnRIZWxwZXJcIjtcclxuaW1wb3J0IHsgU3RhdGUgfSBmcm9tIFwiLi4vc3RhdGUvU3RhdGVcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBWZXJ0aWNhbExheW91dENvbXBvbmVudCBleHRlbmRzIENvbXBvc2l0ZSB7XHJcblxyXG4gICAgcHJpdmF0ZSBmaXhlZENoaWxkcmVuOiBBcnJheTxJQ29tcG9uZW50PjtcclxuICAgIHByaXZhdGUgcGVyY3RDaGlsZHJlbjogQXJyYXk8SUNvbXBvbmVudD47XHJcbiAgICBwcml2YXRlIGZsdWlkQ2hpbGRyZW46IEFycmF5PElDb21wb25lbnQ+O1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKGxvZ2dlcjogSUxvZ2dlciwgYW5pbWF0b3I/OiBJQW5pbWF0b3IpIHtcclxuICAgICAgICBzdXBlcihsb2dnZXIsIGFuaW1hdG9yKTtcclxuICAgICAgICB0aGlzLnJlc2V0Q2hpbGRyZW4oKTtcclxuICAgICAgICB0aGlzLnJlZ2lzdGVyRXZlbnQoJ2luaXQnLCAoKSA9PiB7IHJldHVybiB0aGlzLmluaXQoKSB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEluaXRpYWxpemUgdGhlIFZlcnRpY2FsIExheW91dFxyXG4gICAgICogRm9yIGVhY2ggY2hpbGQgZWxlbWVudCBpbiBlbGVtZW50cywgc2V0IHVwIGEgbmV3IENvbXBvbmVudCBmaWd1cmUgXHJcbiAgICAgKiBvdXQgaWYgaXQgaGFzIGEgaGVpZ2h0IHNldCBhcyBhIHBpeGVsIHZhbHVlIChmaXhlZCBjaGlsZCksIGEgMTAwJVxyXG4gICAgICogdmFsdWUgKGZsdWlkIGNoaWxkKSwgb3IgYSB2YWx1ZSBzZXQgdG8gYSBzcGVjaWZpYyBwZXJjZW50YWdlIFxyXG4gICAgICogKHBlcmNlbnRhZ2UgY2hpbGQpXHJcbiAgICAgKiBcclxuICAgICAqIEByZXR1cm5zIFxyXG4gICAgICogQG1lbWJlcm9mIFZlcnRpY2FsTGF5b3V0Q29tcG9uZW50XHJcbiAgICAgKi9cclxuICAgIGluaXQoKSB7XHJcbiAgICAgICAgbGV0IGVsID0gdGhpcy5nZXRFbGVtZW50KCk7XHJcbiAgICAgICAgbGV0IGZhY3RvcnkgPSBuZXcgQ29tcG9uZW50RmFjdG9yeSgpO1xyXG5cclxuICAgICAgICB0aGlzLnJlc2V0Q2hpbGRyZW4oKTtcclxuICAgICAgICBcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGVsLmNoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGxldCBjaGlsZCA9IGVsLmNoaWxkcmVuW2ldIGFzIEhUTUxFbGVtZW50O1xyXG4gICAgICAgICAgICBpZiAoIWNoaWxkLmlkKVxyXG4gICAgICAgICAgICAgICAgRWxlbWVudEhlbHBlci5zZXRHdWlkSWQoY2hpbGQpO1xyXG4gICAgICAgICAgICBsZXQgY2hpbGRDb21wb25lbnQgPSBuZXcgQ29tcG9uZW50KG5ldyBMb2dnZXIoKSk7XHJcbiAgICAgICAgICAgIGNoaWxkQ29tcG9uZW50LnNldEVsZW1lbnQoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoY2hpbGQuaWQpKTtcclxuICAgICAgICAgICAgbGV0IHNpemUgPSBjaGlsZC5nZXRBdHRyaWJ1dGUoJ2RhdGEtc2l6ZScpIHx8ICcxMDAlJztcclxuICAgICAgICAgICAgaWYgKHNpemUgPT09ICcxMDAlJykge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5mbHVpZENoaWxkcmVuLnB1c2goY2hpbGRDb21wb25lbnQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2UgaWYgKHNpemUubWF0Y2goL15bXFxkXSslJC8pKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnBlcmN0Q2hpbGRyZW4ucHVzaChjaGlsZENvbXBvbmVudCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmZpeGVkQ2hpbGRyZW4ucHVzaChjaGlsZENvbXBvbmVudCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY2hpbGRDb21wb25lbnQucmVuZGVyKHsgc3R5bGU6IHsgd2lkdGg6ICcxMDAlJywgaGVpZ2h0OiBzaXplLCBvdmVyZmxvdzogJ2hpZGRlbicsIGZsb2F0OiAnbGVmdCcgfSB9KVxyXG4gICAgICAgICAgICB0aGlzLmFkZENoaWxkKGNoaWxkQ29tcG9uZW50KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdyZXNpemUnLCB0aGlzLnJlc2l6ZS5iaW5kKHRoaXMpKTtcclxuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgdGhpcy5yZXNpemUuYmluZCh0aGlzKSk7XHJcblxyXG4gICAgICAgIGxldCBzdGF0ZSA9IG5ldyBTdGF0ZSgpO1xyXG4gICAgICAgIHN0YXRlLnN0eWxlLmhlaWdodCA9IHRoaXMuZ2V0RWxlbWVudCgpLnBhcmVudEVsZW1lbnQub2Zmc2V0SGVpZ2h0ICsgJ3B4JztcclxuICAgICAgICBzdGF0ZS5zdHlsZS53aWR0aCA9IHRoaXMuZ2V0RWxlbWVudCgpLnBhcmVudEVsZW1lbnQub2Zmc2V0V2lkdGggKyAncHgnO1xyXG4gICAgICAgIHN0YXRlLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XHJcbiAgICAgICAgc3RhdGUuc3R5bGUub3ZlcmZsb3cgPSBcImhpZGRlblwiO1xyXG4gICAgICAgIHN0YXRlLnN0eWxlLmZsb2F0ID0gXCJsZWZ0XCJcclxuICAgICAgICByZXR1cm4gdGhpcy5yZW5kZXIoc3RhdGUpO1xyXG4gICAgfVxyXG5cclxuICAgIHJlc2l6ZSgpIHtcclxuICAgICAgICBsZXQgc3RhdGUgPSBuZXcgU3RhdGUoKTtcclxuICAgICAgICBzdGF0ZS5zdHlsZS5oZWlnaHQgPSB0aGlzLmdldEVsZW1lbnQoKS5wYXJlbnRFbGVtZW50Lm9mZnNldEhlaWdodCArICdweCc7XHJcbiAgICAgICAgY29uc29sZS5sb2coZG9jdW1lbnQuYm9keS5vZmZzZXRIZWlnaHQpXHJcbiAgICAgICAgc3RhdGUuc3R5bGUud2lkdGggPSB0aGlzLmdldEVsZW1lbnQoKS5wYXJlbnRFbGVtZW50Lm9mZnNldFdpZHRoICsgJ3B4JztcclxuICAgICAgICByZXR1cm4gdGhpcy5yZW5kZXIoc3RhdGUpO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcihuZXdTdGF0ZTogU3RhdGUpIHtcclxuICAgICAgICBsZXQgcHJvbWlzZXMgPSBbXTtcclxuICAgICAgICBwcm9taXNlcy5wdXNoKHN1cGVyLnJlbmRlcihuZXdTdGF0ZSkpO1xyXG5cclxuICAgICAgICB2YXIgdG90YWxIZWlnaHQgPSB0aGlzLmdldEVsZW1lbnQoKS5vZmZzZXRIZWlnaHQ7XHJcbiAgICAgICAgdmFyIGZsdWlkSGVpZ2h0ID0gdG90YWxIZWlnaHQ7XHJcbiAgICAgICAgdmFyIHRvdGFsV2lkdGggPSB0aGlzLmdldEVsZW1lbnQoKS5vZmZzZXRXaWR0aDtcclxuXHJcbiAgICAgICAgLy8gRHJhdyB0aGUgZml4ZWQgY2hpbGRyZW5cclxuICAgICAgICBmb3IgKGxldCBlbCBvZiB0aGlzLmZpeGVkQ2hpbGRyZW4pIHtcclxuICAgICAgICAgICAgZmx1aWRIZWlnaHQgLT0gZWwuZ2V0RWxlbWVudCgpLm9mZnNldEhlaWdodDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gRHJhdyB0aGUgcGVyY2VudGFnZSBjaGlsZHJlblxyXG4gICAgICAgIGZvciAobGV0IGVsIG9mIHRoaXMucGVyY3RDaGlsZHJlbikge1xyXG4gICAgICAgICAgICBsZXQgaGVpZ2h0ID0gKHBhcnNlRmxvYXQoZWwuZ2V0RWxlbWVudCgpLmdldEF0dHJpYnV0ZSgnZGF0YS1zaXplJykpIC8gMTAwICogZmx1aWRIZWlnaHQpO1xyXG4gICAgICAgICAgICBmbHVpZEhlaWdodCAtPSBoZWlnaHQ7XHJcbiAgICAgICAgICAgIGVsLnJlbmRlcih7IHN0eWxlOiB7IGhlaWdodDogaGVpZ2h0ICsgJ3B4JyB9IH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBEcmF3IHRoZSBmbHVpZCBjaGlsZHJlblxyXG4gICAgICAgIGZvciAobGV0IGVsIG9mIHRoaXMuZmx1aWRDaGlsZHJlbikge1xyXG4gICAgICAgICAgICB2YXIgaGVpZ2h0ID0gZmx1aWRIZWlnaHQgLyB0aGlzLmZsdWlkQ2hpbGRyZW4ubGVuZ3RoO1xyXG4gICAgICAgICAgICBwcm9taXNlcy5wdXNoKGVsLnJlbmRlcih7IHN0eWxlOiB7IGhlaWdodDogaGVpZ2h0ICsgJ3B4JyB9IH0pKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIFByb21pc2UuYWxsKHByb21pc2VzKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFNldHMgdGhlIGNoaWRyZW4gYXJyYXlzIHRvIG5ldyBhcnJheXMuXHJcbiAgICAgKiBAcHJpdmF0ZVxyXG4gICAgICogQG1lbWJlcm9mIEhvcml6b250YWxMYXlvdXRDb21wb25lbnRcclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSByZXNldENoaWxkcmVuKCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuZml4ZWRDaGlsZHJlbiA9IG5ldyBBcnJheTxJQ29tcG9uZW50PigpO1xyXG4gICAgICAgIHRoaXMucGVyY3RDaGlsZHJlbiA9IG5ldyBBcnJheTxJQ29tcG9uZW50PigpO1xyXG4gICAgICAgIHRoaXMuZmx1aWRDaGlsZHJlbiA9IG5ldyBBcnJheTxJQ29tcG9uZW50PigpO1xyXG4gICAgfVxyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbXBvbmVudC9WZXJ0aWNhbExheW91dENvbXBvbmVudC50cyIsImltcG9ydCB7IFN0YXRlIH0gZnJvbSAnLi4vc3RhdGUvU3RhdGUnO1xyXG5pbXBvcnQgeyBJTG9nZ2VyIH0gZnJvbSBcIi4uL3V0aWwvTG9nZ2VyXCI7XHJcbmltcG9ydCB7IElBbmltYXRvciB9IGZyb20gJ291dGtpdC1hbmltYXRvcic7XHJcbmltcG9ydCB7IENvbXBvc2l0ZSB9IGZyb20gXCIuL0NvbXBvc2l0ZVwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIFdpbmRvd0NvbXBvbmVudCBleHRlbmRzIENvbXBvc2l0ZSB7XHJcblxyXG4gICAgcHJpdmF0ZSBfd2lkdGg6IG51bWJlcjtcclxuICAgIHByaXZhdGUgX2hlaWdodDogbnVtYmVyO1xyXG4gICAgcHJpdmF0ZSBfdG9wOiBudW1iZXI7XHJcbiAgICBwcml2YXRlIF9sZWZ0OiBudW1iZXI7XHJcbiAgICBwcml2YXRlIF9pc09wZW46IGJvb2xlYW47XHJcblxyXG4gICAgY29uc3RydWN0b3IobG9nZ2VyOiBJTG9nZ2VyLCBhbmltYXRvcj86IElBbmltYXRvcikge1xyXG4gICAgICAgIHN1cGVyKGxvZ2dlciwgYW5pbWF0b3IpO1xyXG5cclxuICAgICAgICAvLyBTZXR1cCBkZWZhdWx0c1xyXG4gICAgICAgIHRoaXMuX3dpZHRoID0gMDtcclxuICAgICAgICB0aGlzLl9oZWlnaHQgPSAwO1xyXG4gICAgICAgIHRoaXMuX3RvcCA9IDA7XHJcbiAgICAgICAgdGhpcy5fbGVmdCA9IDA7XHJcbiAgICAgICAgdGhpcy5faXNPcGVuID0gZmFsc2U7XHJcblxyXG4gICAgICAgIC8vIFJlbGF5IGV2ZW50c1xyXG4gICAgICAgIHRoaXMucmVnaXN0ZXJFdmVudCgnb24nLCAoKSA9PiB7IHJldHVybiB0aGlzLm9uKCkgfSk7XHJcbiAgICAgICAgdGhpcy5yZWdpc3RlckV2ZW50KCdvZmYnLCAoKSA9PiB7IHJldHVybiB0aGlzLm9mZigpIH0pO1xyXG4gICAgICAgIHRoaXMucmVnaXN0ZXJFdmVudCgndG9nZ2xlJywgKCkgPT4geyByZXR1cm4gdGhpcy50b2dnbGUoKSB9KTtcclxuICAgICAgICB0aGlzLnJlZ2lzdGVyRXZlbnQoJ2luaXQnLCAoKSA9PiB7IHJldHVybiB0aGlzLmluaXQoKSB9KTtcclxuICAgIH1cclxuXHJcbiAgICB3aWR0aChuOiBudW1iZXIpOiB0aGlzIHtcclxuICAgICAgICBpZiAobiA8IDApIHtcclxuICAgICAgICAgICAgdGhpcy5fbG9nZ2VyLmVycm9yKGBXaWR0aCBtdXN0IGJlIGdyZWF0ZXIgdGhhbiBvciBlcXVhbCB0byB6ZXJvLmApO1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcztcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5fd2lkdGggPSBuO1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG5cclxuICAgIGhlaWdodChuOiBudW1iZXIpOiB0aGlzIHtcclxuICAgICAgICBpZiAobiA8IDApIHtcclxuICAgICAgICAgICAgdGhpcy5fbG9nZ2VyLmVycm9yKGBIZWlnaHQgbXVzdCBiZSBncmVhdGVyIHRoYW4gb3IgZXF1YWwgdG8gemVyby5gKTtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuX2hlaWdodCA9IG47XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgdG9wKG46IG51bWJlcik6IHRoaXMge1xyXG4gICAgICAgIHRoaXMuX3RvcCA9IG47XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgbGVmdChuOiBudW1iZXIpOiB0aGlzIHtcclxuICAgICAgICB0aGlzLl9sZWZ0ID0gbjtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFNldHMgdGhlIGluaXRpYWwgc3RhdGVcclxuICAgICAqIEByZXR1cm5zIHtQcm9taXNlPFN0YXRlPn0gXHJcbiAgICAgKi9cclxuICAgIGluaXQoKTogUHJvbWlzZTxTdGF0ZT4ge1xyXG4gICAgICAgIGxldCBzdGF0ZSA9IG5ldyBTdGF0ZSgpO1xyXG4gICAgICAgIHN0YXRlLm9rQ2xhc3NOYW1lID0gJ29rLXdpbmRvdydcclxuICAgICAgICBzdGF0ZS5zdHlsZS5wb3NpdGlvbiA9ICdhYnNvbHV0ZSc7XHJcbiAgICAgICAgc3RhdGUuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgICAgICBzdGF0ZS5zdHlsZS56SW5kZXggPSAnOTk5OSdcclxuICAgICAgICBzdGF0ZS5zdHlsZS53aWR0aCA9IGAke3RoaXMuZ2V0RWxlbWVudCgpLnBhcmVudEVsZW1lbnQub2Zmc2V0V2lkdGggLyAyfXB4YDtcclxuICAgICAgICBzdGF0ZS5zdHlsZS5oZWlnaHQgPSBgJHt0aGlzLmdldEVsZW1lbnQoKS5wYXJlbnRFbGVtZW50Lm9mZnNldEhlaWdodCAvIDJ9cHhgO1xyXG4gICAgICAgIHN0YXRlLnN0eWxlLmxlZnQgPSBgJHt0aGlzLl9sZWZ0fXB4YDtcclxuICAgICAgICBzdGF0ZS5zdHlsZS50b3AgPSBgJHt0aGlzLl90b3B9cHhgO1xyXG4gICAgICAgIHJldHVybiB0aGlzLnJlbmRlcihzdGF0ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgdG9nZ2xlKCk6IFByb21pc2U8U3RhdGU+IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5faXNPcGVuID8gdGhpcy5vZmYoKSA6IHRoaXMub24oKTtcclxuICAgIH1cclxuXHJcbiAgICBvbigpOiBQcm9taXNlPFN0YXRlPiB7XHJcbiAgICAgICAgaWYgKHRoaXMuX2lzT3BlbilcclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgICAgICAgICAgIHJlc29sdmUodGhpcy5fc3RhdGUpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB0aGlzLl9pc09wZW4gPSB0cnVlO1xyXG5cclxuICAgICAgICBsZXQgc3RhdGUgPSBuZXcgU3RhdGUoKTtcclxuICAgICAgICBzdGF0ZS5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcclxuICAgICAgICByZXR1cm4gdGhpcy5yZW5kZXIoc3RhdGUpO1xyXG4gICAgfVxyXG5cclxuICAgIG9mZigpOiBQcm9taXNlPFN0YXRlPiB7XHJcbiAgICAgICAgaWYgKCF0aGlzLl9pc09wZW4pXHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgICAgICAgICAgICByZXNvbHZlKHRoaXMuX3N0YXRlKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy5faXNPcGVuID0gZmFsc2U7XHJcblxyXG4gICAgICAgIGxldCBzdGF0ZSA9IG5ldyBTdGF0ZSgpO1xyXG4gICAgICAgIHN0YXRlLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMucmVuZGVyKHN0YXRlKTtcclxuICAgIH1cclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21wb25lbnQvV2luZG93Q29tcG9uZW50LnRzIiwiZXhwb3J0ICogZnJvbSAnLi9zdGF0ZS9TdGF0ZSc7XHJcbmV4cG9ydCAqIGZyb20gJy4vY29tcG9uZW50L0NvbXBvbmVudEZhY3RvcnknO1xyXG5leHBvcnQgKiBmcm9tICcuL2NvbXBvbmVudC9Db21wb25lbnQnO1xyXG5leHBvcnQgKiBmcm9tICcuL2NvbXBvbmVudC9Db21wb3NpdGUnO1xyXG5leHBvcnQgKiBmcm9tICcuL2NvbXBvbmVudC9EcmF3ZXJDb21wb25lbnQnO1xyXG5leHBvcnQgKiBmcm9tICcuL3V0aWwvTG9nZ2VyJztcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvb3V0a2l0LnRzIiwiLyohIE91dGtpdCBBbmltYXRvciB2MS4wLjMgLSBDb3B5cmlnaHQgMjAxNyBKYW1lcyBFaGx5IC0gTUlUIExpY2Vuc2UgKi9cbihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFtdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcIm9rLWFuaW1hdG9yXCJdID0gZmFjdG9yeSgpO1xuXHRlbHNlXG5cdFx0cm9vdFtcIm9rLWFuaW1hdG9yXCJdID0gZmFjdG9yeSgpO1xufSkodGhpcywgZnVuY3Rpb24oKSB7XG5yZXR1cm4gLyoqKioqKi8gKGZ1bmN0aW9uKG1vZHVsZXMpIHsgLy8gd2VicGFja0Jvb3RzdHJhcFxuLyoqKioqKi8gXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4vKioqKioqLyBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuLyoqKioqKi8gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG4vKioqKioqL1xuLyoqKioqKi8gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuLyoqKioqKi8gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4vKioqKioqLyBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbi8qKioqKiovIFx0XHR9XG4vKioqKioqLyBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbi8qKioqKiovIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4vKioqKioqLyBcdFx0XHRpOiBtb2R1bGVJZCxcbi8qKioqKiovIFx0XHRcdGw6IGZhbHNlLFxuLyoqKioqKi8gXHRcdFx0ZXhwb3J0czoge31cbi8qKioqKiovIFx0XHR9O1xuLyoqKioqKi9cbi8qKioqKiovIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbi8qKioqKiovIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbi8qKioqKiovXG4vKioqKioqLyBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuLyoqKioqKi8gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcbi8qKioqKiovXG4vKioqKioqLyBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbi8qKioqKiovIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4vKioqKioqLyBcdH1cbi8qKioqKiovXG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuLyoqKioqKi8gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbi8qKioqKiovIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcbi8qKioqKiovXG4vKioqKioqLyBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuLyoqKioqKi8gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbi8qKioqKiovIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4vKioqKioqLyBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuLyoqKioqKi8gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuLyoqKioqKi8gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuLyoqKioqKi8gXHRcdFx0XHRnZXQ6IGdldHRlclxuLyoqKioqKi8gXHRcdFx0fSk7XG4vKioqKioqLyBcdFx0fVxuLyoqKioqKi8gXHR9O1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbi8qKioqKiovIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4vKioqKioqLyBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4vKioqKioqLyBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuLyoqKioqKi8gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbi8qKioqKiovIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4vKioqKioqLyBcdFx0cmV0dXJuIGdldHRlcjtcbi8qKioqKiovIFx0fTtcbi8qKioqKiovXG4vKioqKioqLyBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuLyoqKioqKi8gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuLyoqKioqKi8gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vKioqKioqLyBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDEpO1xuLyoqKioqKi8gfSlcbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKioqKioqLyAoW1xuLyogMCAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cInVzZSBzdHJpY3RcIjtcblxuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG52YXIgQW5pbWF0b3JUcmFuc2l0aW9uO1xuKGZ1bmN0aW9uIChBbmltYXRvclRyYW5zaXRpb24pIHtcbiAgICBBbmltYXRvclRyYW5zaXRpb25bQW5pbWF0b3JUcmFuc2l0aW9uW1wiTGluZWFyXCJdID0gMF0gPSBcIkxpbmVhclwiO1xuICAgIEFuaW1hdG9yVHJhbnNpdGlvbltBbmltYXRvclRyYW5zaXRpb25bXCJFYXNlSW5cIl0gPSAxXSA9IFwiRWFzZUluXCI7XG4gICAgQW5pbWF0b3JUcmFuc2l0aW9uW0FuaW1hdG9yVHJhbnNpdGlvbltcIkVhc2VPdXRcIl0gPSAyXSA9IFwiRWFzZU91dFwiO1xuICAgIEFuaW1hdG9yVHJhbnNpdGlvbltBbmltYXRvclRyYW5zaXRpb25bXCJFYXNlSW5PdXRcIl0gPSAzXSA9IFwiRWFzZUluT3V0XCI7XG4gICAgQW5pbWF0b3JUcmFuc2l0aW9uW0FuaW1hdG9yVHJhbnNpdGlvbltcIlB1bGxJblwiXSA9IDRdID0gXCJQdWxsSW5cIjtcbiAgICBBbmltYXRvclRyYW5zaXRpb25bQW5pbWF0b3JUcmFuc2l0aW9uW1wiUHVzaE91dFwiXSA9IDVdID0gXCJQdXNoT3V0XCI7XG4gICAgQW5pbWF0b3JUcmFuc2l0aW9uW0FuaW1hdG9yVHJhbnNpdGlvbltcIlB1c2hQdWxsXCJdID0gNl0gPSBcIlB1c2hQdWxsXCI7XG59KShBbmltYXRvclRyYW5zaXRpb24gPSBleHBvcnRzLkFuaW1hdG9yVHJhbnNpdGlvbiB8fCAoZXhwb3J0cy5BbmltYXRvclRyYW5zaXRpb24gPSB7fSkpO1xuXG4vKioqLyB9KSxcbi8qIDEgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXCJ1c2Ugc3RyaWN0XCI7XG5cblxudmFyIF9jcmVhdGVDbGFzcyA9IGZ1bmN0aW9uICgpIHsgZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTsgfSB9IHJldHVybiBmdW5jdGlvbiAoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyByZXR1cm4gQ29uc3RydWN0b3I7IH07IH0oKTtcblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuZnVuY3Rpb24gX19leHBvcnQobSkge1xuICAgIGZvciAodmFyIHAgaW4gbSkge1xuICAgICAgICBpZiAoIWV4cG9ydHMuaGFzT3duUHJvcGVydHkocCkpIGV4cG9ydHNbcF0gPSBtW3BdO1xuICAgIH1cbn1cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbnZhciBjb21tb25fMSA9IF9fd2VicGFja19yZXF1aXJlX18oMCk7XG5cbnZhciBPdXRraXRBbmltYXRvciA9IGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBPdXRraXRBbmltYXRvcigpIHtcbiAgICAgICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIE91dGtpdEFuaW1hdG9yKTtcblxuICAgICAgICB0aGlzLmVhc2VPdXQgPSB0aGlzLm1ha2VFYXNlT3V0KHRoaXMuZWFzZUluKTtcbiAgICAgICAgdGhpcy5lYXNlSW5PdXQgPSB0aGlzLm1ha2VFYXNlSW5PdXQodGhpcy5lYXNlSW4pO1xuICAgICAgICB0aGlzLnB1c2hPdXQgPSB0aGlzLm1ha2VFYXNlT3V0KHRoaXMucHVsbEluKTtcbiAgICAgICAgdGhpcy5wdXNoUHVsbCA9IHRoaXMubWFrZUVhc2VJbk91dCh0aGlzLnB1bGxJbik7XG4gICAgICAgIHRoaXMuX2R1cmF0aW9uID0gMjAwO1xuICAgICAgICB0aGlzLl9zdGVwID0gZnVuY3Rpb24gKCkge307XG4gICAgICAgIHRoaXMuX3JhdGUgPSAxNjtcbiAgICAgICAgdGhpcy5fdHJhbnNpdGlvbiA9IHRoaXMubGluZWFyO1xuICAgIH1cblxuICAgIF9jcmVhdGVDbGFzcyhPdXRraXRBbmltYXRvciwgW3tcbiAgICAgICAga2V5OiBcInNldFN0ZXBcIixcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIHNldFN0ZXAoc3RlcCkge1xuICAgICAgICAgICAgdGhpcy5fc3RlcCA9IHN0ZXA7XG4gICAgICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgICAgfVxuICAgIH0sIHtcbiAgICAgICAga2V5OiBcInNldER1cmF0aW9uXCIsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBzZXREdXJhdGlvbihkdXJhdGlvbikge1xuICAgICAgICAgICAgdGhpcy5fZHVyYXRpb24gPSBkdXJhdGlvbjtcbiAgICAgICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgICB9XG4gICAgfSwge1xuICAgICAgICBrZXk6IFwic2V0UmF0ZVwiLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gc2V0UmF0ZShyYXRlKSB7XG4gICAgICAgICAgICB0aGlzLl9yYXRlID0gcmF0ZTtcbiAgICAgICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgICB9XG4gICAgfSwge1xuICAgICAgICBrZXk6IFwic2V0VHJhbnNpdGlvblwiLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gc2V0VHJhbnNpdGlvbih0cmFuc2l0aW9uKSB7XG4gICAgICAgICAgICBzd2l0Y2ggKHRyYW5zaXRpb24pIHtcbiAgICAgICAgICAgICAgICBjYXNlIGNvbW1vbl8xLkFuaW1hdG9yVHJhbnNpdGlvbi5FYXNlSW46XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX3RyYW5zaXRpb24gPSB0aGlzLmVhc2VJbjtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSBjb21tb25fMS5BbmltYXRvclRyYW5zaXRpb24uRWFzZU91dDpcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fdHJhbnNpdGlvbiA9IHRoaXMuZWFzZU91dDtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSBjb21tb25fMS5BbmltYXRvclRyYW5zaXRpb24uRWFzZUluT3V0OlxuICAgICAgICAgICAgICAgICAgICB0aGlzLl90cmFuc2l0aW9uID0gdGhpcy5lYXNlSW5PdXQ7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgY29tbW9uXzEuQW5pbWF0b3JUcmFuc2l0aW9uLlB1bGxJbjpcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fdHJhbnNpdGlvbiA9IHRoaXMucHVsbEluO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIGNvbW1vbl8xLkFuaW1hdG9yVHJhbnNpdGlvbi5QdXNoT3V0OlxuICAgICAgICAgICAgICAgICAgICB0aGlzLl90cmFuc2l0aW9uID0gdGhpcy5wdXNoT3V0O1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIGNvbW1vbl8xLkFuaW1hdG9yVHJhbnNpdGlvbi5QdXNoUHVsbDpcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fdHJhbnNpdGlvbiA9IHRoaXMucHVzaFB1bGw7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX3RyYW5zaXRpb24gPSB0aGlzLmxpbmVhcjtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgICAgfVxuICAgIH0sIHtcbiAgICAgICAga2V5OiBcImFuaW1hdGVcIixcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGFuaW1hdGUoc3RhcnQpIHtcbiAgICAgICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG5cbiAgICAgICAgICAgIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gQXJyYXkoX2xlbiA+IDEgPyBfbGVuIC0gMSA6IDApLCBfa2V5ID0gMTsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgICAgICAgICAgICAgIGFyZ3NbX2tleSAtIDFdID0gYXJndW1lbnRzW19rZXldO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUpIHtcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIHdpbmRvd1sncmVxdWVzdEFuaW1hdGlvbkZyYW1lJ10gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIF9zdGFydCA9IHBlcmZvcm1hbmNlLm5vdygpO1xuICAgICAgICAgICAgICAgICAgICB2YXIgcmFmQW5pbWF0ZSA9IGZ1bmN0aW9uIHJhZkFuaW1hdGUodGltZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHByb2dyZXNzID0gKHRpbWUgLSBfc3RhcnQpIC8gX3RoaXMuX2R1cmF0aW9uO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHByb2dyZXNzID4gMSkgcHJvZ3Jlc3MgPSAxO1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGRlbHRhID0gX3RoaXMuX3RyYW5zaXRpb24ocHJvZ3Jlc3MpO1xuICAgICAgICAgICAgICAgICAgICAgICAgX3RoaXMuX3N0ZXAoZGVsdGEsIGFyZ3MpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHByb2dyZXNzIDwgMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZShyYWZBbmltYXRlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZSh0cnVlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHJhZkFuaW1hdGUpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIF90aGlzLl9pbnRlcnZhbCA9IHdpbmRvdy5zZXRJbnRlcnZhbChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgZGVsdGFUaW1lID0gRGF0ZS5ub3coKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciB0aW1lUGFzc2VkID0gZGVsdGFUaW1lIC0gc3RhcnQ7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgcHJvZ3Jlc3MgPSB0aW1lUGFzc2VkIC8gX3RoaXMuX2R1cmF0aW9uO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHByb2dyZXNzID4gMSkgcHJvZ3Jlc3MgPSAxO1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGRlbHRhID0gX3RoaXMuX3RyYW5zaXRpb24ocHJvZ3Jlc3MpO1xuICAgICAgICAgICAgICAgICAgICAgICAgX3RoaXMuX3N0ZXAoZGVsdGEsIGFyZ3MpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHByb2dyZXNzID09IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGVhckludGVydmFsKF90aGlzLl9pbnRlcnZhbCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZSh0cnVlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSwgX3RoaXMuX3JhdGUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfSwge1xuICAgICAgICBrZXk6IFwibGluZWFyXCIsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBsaW5lYXIocHJvZ3Jlc3MpIHtcbiAgICAgICAgICAgIHJldHVybiBwcm9ncmVzcztcbiAgICAgICAgfVxuICAgIH0sIHtcbiAgICAgICAga2V5OiBcImVhc2VJblwiLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gZWFzZUluKHByb2dyZXNzKSB7XG4gICAgICAgICAgICByZXR1cm4gTWF0aC5wb3cocHJvZ3Jlc3MsIDUpO1xuICAgICAgICB9XG4gICAgfSwge1xuICAgICAgICBrZXk6IFwicHVsbEluXCIsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBwdWxsSW4ocHJvZ3Jlc3MpIHtcbiAgICAgICAgICAgIHZhciB4ID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiAyO1xuXG4gICAgICAgICAgICByZXR1cm4gTWF0aC5wb3cocHJvZ3Jlc3MsIDIpICogKCh4ICsgMSkgKiBwcm9ncmVzcyAtIHgpO1xuICAgICAgICB9XG4gICAgfSwge1xuICAgICAgICBrZXk6IFwibWFrZUVhc2VPdXRcIixcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIG1ha2VFYXNlT3V0KHRpbWluZykge1xuICAgICAgICAgICAgcmV0dXJuIGZ1bmN0aW9uIChwcm9ncmVzcykge1xuICAgICAgICAgICAgICAgIHJldHVybiAxIC0gdGltaW5nKDEgLSBwcm9ncmVzcyk7XG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgfSwge1xuICAgICAgICBrZXk6IFwibWFrZUVhc2VJbk91dFwiLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gbWFrZUVhc2VJbk91dCh0aW1pbmcpIHtcbiAgICAgICAgICAgIHJldHVybiBmdW5jdGlvbiAocHJvZ3Jlc3MpIHtcbiAgICAgICAgICAgICAgICBpZiAocHJvZ3Jlc3MgPCAuNSkgcmV0dXJuIHRpbWluZygyICogcHJvZ3Jlc3MpIC8gMjtlbHNlIHJldHVybiAoMiAtIHRpbWluZygyICogKDEgLSBwcm9ncmVzcykpKSAvIDI7XG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgfV0pO1xuXG4gICAgcmV0dXJuIE91dGtpdEFuaW1hdG9yO1xufSgpO1xuXG5leHBvcnRzLk91dGtpdEFuaW1hdG9yID0gT3V0a2l0QW5pbWF0b3I7XG5fX2V4cG9ydChfX3dlYnBhY2tfcmVxdWlyZV9fKDApKTtcblxuLyoqKi8gfSlcbi8qKioqKiovIF0pO1xufSk7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJbmRsWW5CaFkyczZMeTh2ZDJWaWNHRmpheTkxYm1sMlpYSnpZV3hOYjJSMWJHVkVaV1pwYm1sMGFXOXVJaXdpZDJWaWNHRmphem92THk5M1pXSndZV05yTDJKdmIzUnpkSEpoY0NCaVpHWmlZMkV6TUdVelpXTm1NelEwT0RNMFpTSXNJbmRsWW5CaFkyczZMeTh2TGk5emNtTXZZMjl0Ylc5dUxuUnpJaXdpZDJWaWNHRmphem92THk4dUwzTnlZeTlwYm1SbGVDNTBjeUpkTENKdVlXMWxjeUk2VzEwc0ltMWhjSEJwYm1keklqb2lPMEZCUVVFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFc1EwRkJRenRCUVVORUxFODdRVU5XUVR0QlFVTkJPenRCUVVWQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHM3UVVGRlFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN1FVRkRRVHM3TzBGQlIwRTdRVUZEUVRzN1FVRkZRVHRCUVVOQk96dEJRVVZCTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEVzWVVGQlN6dEJRVU5NTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHRCUVVOQk8wRkJRMEVzYlVOQlFUSkNMREJDUVVFd1FpeEZRVUZGTzBGQlEzWkVMSGxEUVVGcFF5eGxRVUZsTzBGQlEyaEVPMEZCUTBFN1FVRkRRVHM3UVVGRlFUdEJRVU5CTERoRVFVRnpSQ3dyUkVGQkswUTdPMEZCUlhKSU8wRkJRMEU3TzBGQlJVRTdRVUZEUVRzN096czdPenM3T3pzN1FVTnlSRUVzU1VGUlF6dEJRVkpFTEZkQlFUaENPMEZCUXpGQ0xESkVRVUZOTzBGQlEwNHNNa1JCUVUwN1FVRkRUaXcwUkVGQlR6dEJRVU5RTERoRVFVRlRPMEZCUTFRc01rUkJRVTA3UVVGRFRpdzBSRUZCVHp0QlFVTlFMRFpFUVVOS08wRkJRVU1zUjBGU05rSXNjVUpCUVd4Q0xGRkJRV3RDTEhWQ1FVRnNRaXhSUVVGclFpeHhRa0ZSTjBJc1N6czdPenM3T3pzN096czdPenM3T3pzN096dEJRMmhDUkN4dFEwRmhRVHM3TzBGQlUwazdPenRCUVc5SlVTeGhRVUZQTEZWQlFVOHNTMEZCV1N4WlFVRkxMRXRCUVZNN1FVRkZlRU1zWVVGQlV5eFpRVUZQTEV0QlFXTXNZMEZCU3l4TFFVRlRPMEZCVFRWRExHRkJRVThzVlVGQlR5eExRVUZaTEZsQlFVc3NTMEZCVXp0QlFVVjRReXhoUVVGUkxGZEJRVThzUzBGQll5eGpRVUZMTEV0QlFWTTdRVUUzU1RORExHRkJRVlVzV1VGQlR6dEJRVU5xUWl4aFFVRk5MRkZCUVVjc1dVRkJVU3hEUVVGRk8wRkJRMjVDTEdGQlFVMHNVVUZCVFR0QlFVTmFMR0ZCUVZrc1kwRkJUeXhMUVVNelFqdEJRVk5QT3pzN08yZERRVUZsTzBGQlEyUXNhVUpCUVUwc1VVRkJVVHRCUVVOYUxHMUNRVU5XTzBGQlUxYzdPenR2UTBGQmFVSTdRVUZEY0VJc2FVSkJRVlVzV1VGQldUdEJRVU53UWl4dFFrRkRWanRCUVZOUE96czdaME5CUVdFN1FVRkRXaXhwUWtGQlRTeFJRVUZSTzBGQlExb3NiVUpCUTFZN1FVRlRZVHM3TzNORFFVRXJRanRCUVVOcVF5eHZRa0ZCWXp0QlFVTnFRaXh4UWtGQlN5eFRRVUZyUWl4dFFrRkJUenRCUVVOMFFpeDVRa0ZCV1N4alFVRlBMRXRCUVZFN1FVRkRla0k3UVVGRFZpeHhRa0ZCU3l4VFFVRnJRaXh0UWtGQlVUdEJRVU4yUWl4NVFrRkJXU3hqUVVGUExFdEJRVk03UVVGRE1VSTdRVUZEVml4eFFrRkJTeXhUUVVGclFpeHRRa0ZCVlR0QlFVTjZRaXg1UWtGQldTeGpRVUZQTEV0QlFWYzdRVUZETlVJN1FVRkRWaXh4UWtGQlN5eFRRVUZyUWl4dFFrRkJUenRCUVVOMFFpeDVRa0ZCV1N4alFVRlBMRXRCUVZFN1FVRkRla0k3UVVGRFZpeHhRa0ZCU3l4VFFVRnJRaXh0UWtGQlVUdEJRVU4yUWl4NVFrRkJXU3hqUVVGUExFdEJRVk03UVVGRE1VSTdRVUZEVml4eFFrRkJTeXhUUVVGclFpeHRRa0ZCVXp0QlFVTjRRaXg1UWtGQldTeGpRVUZQTEV0QlFWVTdRVUZETTBJN1FVRkRWanRCUVVOUkxIbENRVUZaTEdOQlFVOHNTMEZCVVR0QlFVVjBRenM3UVVGRFN5eHRRa0ZEVmp0QlFWRlBPenM3WjBOQlFXbENPenM3TzBGQlFXTTdPenRCUVVNMVFpeDFRa0ZCV1N4UlFVRkRMRlZCUVZFN1FVRkRjRUlzYjBKQlFVTXNUMEZCWVN4UFFVRjVRaXcyUWtGQlowSXNXVUZCUlR0QlFVTjRSQ3gzUWtGQlV5eFRRVUZqTEZsQlFVODdRVUZET1VJc2QwSkJRV2RDTEdGQlFVY3NiMEpCUVVzN1FVRkRjRUlzTkVKQlFWa3NWMEZCUnl4RFFVRkxMRTlCUVZNc1ZVRkJUeXhOUVVGWE8wRkJRelZETERSQ1FVRlRMRmRCUVVzc1IwRkJVeXhYUVVGTE8wRkJSeTlDTERSQ1FVRlRMRkZCUVU4c1RVRkJXU3haUVVGVk8wRkJSV3hETERoQ1FVRk5MRTFCUVUwc1QwRkJVVHRCUVVWeVFpdzBRa0ZCVXl4WFFVRkxMRWRCUVVVN1FVRkRUU3hyUkVGRGVrSTdRVUZCVFN3clFrRkJSVHRCUVVOSExHOURRVU5ZTzBGQlEwbzdRVUZCUXp0QlFVTnZRaXd3UTBGRGVrSTdRVUZCVFN4MVFrRkJSVHRCUVVOQkxEQkNRVUZWTEcxQ1FVRnhRaXhaUVVGRE8wRkJRMmhETERSQ1FVRmhMRmxCUVU4c1MwRkJUenRCUVVNelFpdzBRa0ZCWXl4aFFVRlpMRmxCUVZNN1FVRkRia01zTkVKQlFWa3NWMEZCWVN4aFFVRlBMRTFCUVZjN1FVRkZlRU1zTkVKQlFWTXNWMEZCU3l4SFFVRlRMRmRCUVVrN1FVRkZPVUlzTkVKQlFWTXNVVUZCVHl4TlFVRlpMRmxCUVZjN1FVRkZia01zT0VKQlFVMHNUVUZCVFN4UFFVRlJPMEZCUlhKQ0xEUkNRVUZUTEZsQlFVMHNSMEZCUlR0QlFVTklMREJEUVVGTExFMUJRVms3UVVGRGRrSXNiME5CUTFnN1FVRkRTanRCUVVGRExIRkNRV1p6UWl4RlFXVm9RaXhOUVVOWU8wRkJRMG83UVVGRFNpeGhRWFJEVnp0QlFYZERSenM3T3l0Q1FVRnBRanRCUVVOeVFpeHRRa0ZEVmp0QlFVVmpPenM3SzBKQlFXbENPMEZCUTNKQ0xHMUNRVUZMTEV0QlFVa3NTVUZCVXl4VlFVTTFRanRCUVUxak96czdLMEpCUVdsQ08yZENRVUZGTEhkRlFVRmhPenRCUVVOd1F5eHRRa0ZCU3l4TFFVRkpMRWxCUVZNc1ZVRkJUeXhOUVVGRExFTkJRVVVzU1VGQlN5eExRVUZYTEZkQlEzUkVPMEZCVFcxQ096czdiME5CUVdsQ08wRkJRekZDTEcxQ1FVRkRMRlZCUVRCQ08wRkJRM1pDTEhWQ1FVRkZMRWxCUVZNc1QwRkJSU3hKUVVOMlFqdEJRVU5LTzBGQlJYRkNPenM3YzBOQlFVODdRVUZEYkVJc2JVSkJRVU1zVlVGQmEwSTdRVUZEYkVJc2IwSkJRVk1zVjBGQlRTeEpRVU5TTEU5QlFVOHNUMEZCUlN4SlFVRlpMRmxCUXpOQ0xFOUJRMDBzVDBGQlF5eERRVUZGTEVsQlFWTXNUMEZCU3l4TFFVRkZMRWxCUVdNc1kwRkRMME03UVVGRFNqdEJRVU5JT3pzN096czdRVUYyUzBRc2VVSkJkVXRETzBGQlJVUXNOa0pCUVhsQ0xFa2lMQ0ptYVd4bElqb2laR2x6ZEM5dmRYUnJhWFF0WVc1cGJXRjBiM0l1YW5NaUxDSnpiM1Z5WTJWelEyOXVkR1Z1ZENJNld5SW9ablZ1WTNScGIyNGdkMlZpY0dGamExVnVhWFpsY25OaGJFMXZaSFZzWlVSbFptbHVhWFJwYjI0b2NtOXZkQ3dnWm1GamRHOXllU2tnZTF4dVhIUnBaaWgwZVhCbGIyWWdaWGh3YjNKMGN5QTlQVDBnSjI5aWFtVmpkQ2NnSmlZZ2RIbHdaVzltSUcxdlpIVnNaU0E5UFQwZ0oyOWlhbVZqZENjcFhHNWNkRngwYlc5a2RXeGxMbVY0Y0c5eWRITWdQU0JtWVdOMGIzSjVLQ2s3WEc1Y2RHVnNjMlVnYVdZb2RIbHdaVzltSUdSbFptbHVaU0E5UFQwZ0oyWjFibU4wYVc5dUp5QW1KaUJrWldacGJtVXVZVzFrS1Z4dVhIUmNkR1JsWm1sdVpTaGJYU3dnWm1GamRHOXllU2s3WEc1Y2RHVnNjMlVnYVdZb2RIbHdaVzltSUdWNGNHOXlkSE1nUFQwOUlDZHZZbXBsWTNRbktWeHVYSFJjZEdWNGNHOXlkSE5iWENKdmF5MWhibWx0WVhSdmNsd2lYU0E5SUdaaFkzUnZjbmtvS1R0Y2JseDBaV3h6WlZ4dVhIUmNkSEp2YjNSYlhDSnZheTFoYm1sdFlYUnZjbHdpWFNBOUlHWmhZM1J2Y25rb0tUdGNibjBwS0hSb2FYTXNJR1oxYm1OMGFXOXVLQ2tnZTF4dWNtVjBkWEp1SUZ4dVhHNWNiaTh2SUZkRlFsQkJRMHNnUms5UFZFVlNJQzh2WEc0dkx5QjNaV0p3WVdOckwzVnVhWFpsY25OaGJFMXZaSFZzWlVSbFptbHVhWFJwYjI0aUxDSWdYSFF2THlCVWFHVWdiVzlrZFd4bElHTmhZMmhsWEc0Z1hIUjJZWElnYVc1emRHRnNiR1ZrVFc5a2RXeGxjeUE5SUh0OU8xeHVYRzRnWEhRdkx5QlVhR1VnY21WeGRXbHlaU0JtZFc1amRHbHZibHh1SUZ4MFpuVnVZM1JwYjI0Z1gxOTNaV0p3WVdOclgzSmxjWFZwY21WZlh5aHRiMlIxYkdWSlpDa2dlMXh1WEc0Z1hIUmNkQzh2SUVOb1pXTnJJR2xtSUcxdlpIVnNaU0JwY3lCcGJpQmpZV05vWlZ4dUlGeDBYSFJwWmlocGJuTjBZV3hzWldSTmIyUjFiR1Z6VzIxdlpIVnNaVWxrWFNrZ2UxeHVJRngwWEhSY2RISmxkSFZ5YmlCcGJuTjBZV3hzWldSTmIyUjFiR1Z6VzIxdlpIVnNaVWxrWFM1bGVIQnZjblJ6TzF4dUlGeDBYSFI5WEc0Z1hIUmNkQzh2SUVOeVpXRjBaU0JoSUc1bGR5QnRiMlIxYkdVZ0tHRnVaQ0J3ZFhRZ2FYUWdhVzUwYnlCMGFHVWdZMkZqYUdVcFhHNGdYSFJjZEhaaGNpQnRiMlIxYkdVZ1BTQnBibk4wWVd4c1pXUk5iMlIxYkdWelcyMXZaSFZzWlVsa1hTQTlJSHRjYmlCY2RGeDBYSFJwT2lCdGIyUjFiR1ZKWkN4Y2JpQmNkRngwWEhSc09pQm1ZV3h6WlN4Y2JpQmNkRngwWEhSbGVIQnZjblJ6T2lCN2ZWeHVJRngwWEhSOU8xeHVYRzRnWEhSY2RDOHZJRVY0WldOMWRHVWdkR2hsSUcxdlpIVnNaU0JtZFc1amRHbHZibHh1SUZ4MFhIUnRiMlIxYkdWelcyMXZaSFZzWlVsa1hTNWpZV3hzS0cxdlpIVnNaUzVsZUhCdmNuUnpMQ0J0YjJSMWJHVXNJRzF2WkhWc1pTNWxlSEJ2Y25SekxDQmZYM2RsWW5CaFkydGZjbVZ4ZFdseVpWOWZLVHRjYmx4dUlGeDBYSFF2THlCR2JHRm5JSFJvWlNCdGIyUjFiR1VnWVhNZ2JHOWhaR1ZrWEc0Z1hIUmNkRzF2WkhWc1pTNXNJRDBnZEhKMVpUdGNibHh1SUZ4MFhIUXZMeUJTWlhSMWNtNGdkR2hsSUdWNGNHOXlkSE1nYjJZZ2RHaGxJRzF2WkhWc1pWeHVJRngwWEhSeVpYUjFjbTRnYlc5a2RXeGxMbVY0Y0c5eWRITTdYRzRnWEhSOVhHNWNibHh1SUZ4MEx5OGdaWGh3YjNObElIUm9aU0J0YjJSMWJHVnpJRzlpYW1WamRDQW9YMTkzWldKd1lXTnJYMjF2WkhWc1pYTmZYeWxjYmlCY2RGOWZkMlZpY0dGamExOXlaWEYxYVhKbFgxOHViU0E5SUcxdlpIVnNaWE03WEc1Y2JpQmNkQzh2SUdWNGNHOXpaU0IwYUdVZ2JXOWtkV3hsSUdOaFkyaGxYRzRnWEhSZlgzZGxZbkJoWTJ0ZmNtVnhkV2x5WlY5ZkxtTWdQU0JwYm5OMFlXeHNaV1JOYjJSMWJHVnpPMXh1WEc0Z1hIUXZMeUJrWldacGJtVWdaMlYwZEdWeUlHWjFibU4wYVc5dUlHWnZjaUJvWVhKdGIyNTVJR1Y0Y0c5eWRITmNiaUJjZEY5ZmQyVmljR0ZqYTE5eVpYRjFhWEpsWDE4dVpDQTlJR1oxYm1OMGFXOXVLR1Y0Y0c5eWRITXNJRzVoYldVc0lHZGxkSFJsY2lrZ2UxeHVJRngwWEhScFppZ2hYMTkzWldKd1lXTnJYM0psY1hWcGNtVmZYeTV2S0dWNGNHOXlkSE1zSUc1aGJXVXBLU0I3WEc0Z1hIUmNkRngwVDJKcVpXTjBMbVJsWm1sdVpWQnliM0JsY25SNUtHVjRjRzl5ZEhNc0lHNWhiV1VzSUh0Y2JpQmNkRngwWEhSY2RHTnZibVpwWjNWeVlXSnNaVG9nWm1Gc2MyVXNYRzRnWEhSY2RGeDBYSFJsYm5WdFpYSmhZbXhsT2lCMGNuVmxMRnh1SUZ4MFhIUmNkRngwWjJWME9pQm5aWFIwWlhKY2JpQmNkRngwWEhSOUtUdGNiaUJjZEZ4MGZWeHVJRngwZlR0Y2JseHVJRngwTHk4Z1oyVjBSR1ZtWVhWc2RFVjRjRzl5ZENCbWRXNWpkR2x2YmlCbWIzSWdZMjl0Y0dGMGFXSnBiR2wwZVNCM2FYUm9JRzV2Ymkxb1lYSnRiMjU1SUcxdlpIVnNaWE5jYmlCY2RGOWZkMlZpY0dGamExOXlaWEYxYVhKbFgxOHViaUE5SUdaMWJtTjBhVzl1S0cxdlpIVnNaU2tnZTF4dUlGeDBYSFIyWVhJZ1oyVjBkR1Z5SUQwZ2JXOWtkV3hsSUNZbUlHMXZaSFZzWlM1ZlgyVnpUVzlrZFd4bElEOWNiaUJjZEZ4MFhIUm1kVzVqZEdsdmJpQm5aWFJFWldaaGRXeDBLQ2tnZXlCeVpYUjFjbTRnYlc5a2RXeGxXeWRrWldaaGRXeDBKMTA3SUgwZ09seHVJRngwWEhSY2RHWjFibU4wYVc5dUlHZGxkRTF2WkhWc1pVVjRjRzl5ZEhNb0tTQjdJSEpsZEhWeWJpQnRiMlIxYkdVN0lIMDdYRzRnWEhSY2RGOWZkMlZpY0dGamExOXlaWEYxYVhKbFgxOHVaQ2huWlhSMFpYSXNJQ2RoSnl3Z1oyVjBkR1Z5S1R0Y2JpQmNkRngwY21WMGRYSnVJR2RsZEhSbGNqdGNiaUJjZEgwN1hHNWNiaUJjZEM4dklFOWlhbVZqZEM1d2NtOTBiM1I1Y0dVdWFHRnpUM2R1VUhKdmNHVnlkSGt1WTJGc2JGeHVJRngwWDE5M1pXSndZV05yWDNKbGNYVnBjbVZmWHk1dklEMGdablZ1WTNScGIyNG9iMkpxWldOMExDQndjbTl3WlhKMGVTa2dleUJ5WlhSMWNtNGdUMkpxWldOMExuQnliM1J2ZEhsd1pTNW9ZWE5QZDI1UWNtOXdaWEowZVM1allXeHNLRzlpYW1WamRDd2djSEp2Y0dWeWRIa3BPeUI5TzF4dVhHNGdYSFF2THlCZlgzZGxZbkJoWTJ0ZmNIVmliR2xqWDNCaGRHaGZYMXh1SUZ4MFgxOTNaV0p3WVdOclgzSmxjWFZwY21WZlh5NXdJRDBnWENKY0lqdGNibHh1SUZ4MEx5OGdURzloWkNCbGJuUnllU0J0YjJSMWJHVWdZVzVrSUhKbGRIVnliaUJsZUhCdmNuUnpYRzRnWEhSeVpYUjFjbTRnWDE5M1pXSndZV05yWDNKbGNYVnBjbVZmWHloZlgzZGxZbkJoWTJ0ZmNtVnhkV2x5WlY5ZkxuTWdQU0F4S1R0Y2JseHVYRzVjYmk4dklGZEZRbEJCUTBzZ1JrOVBWRVZTSUM4dlhHNHZMeUIzWldKd1lXTnJMMkp2YjNSemRISmhjQ0JpWkdaaVkyRXpNR1V6WldObU16UTBPRE0wWlNJc0ltVjRjRzl5ZENCcGJuUmxjbVpoWTJVZ1NVRnVhVzFoZEc5eUlIdGNjbHh1SUNBZ0lHRnVhVzFoZEdVb2MzUmhjblEvT2lCdWRXMWlaWElzSUM0dUxtRnlaM01nT2lCaGJubGJYU2s2SUZCeWIyMXBjMlU4WW05dmJHVmhiajQ3WEhKY2JpQWdJQ0J6WlhSVGRHVndLSE4wWlhBNklFWjFibU4wYVc5dUtUb2dkR2hwY3p0Y2NseHVJQ0FnSUhObGRFUjFjbUYwYVc5dUtHUjFjbUYwYVc5dU9pQnVkVzFpWlhJcE9pQjBhR2x6TzF4eVhHNGdJQ0FnYzJWMFVtRjBaU2h5WVhSbE9pQnVkVzFpWlhJcE9pQjBhR2x6TzF4eVhHNGdJQ0FnYzJWMFZISmhibk5wZEdsdmJpaDBjbUZ1YzJsMGFXOXVPaUJCYm1sdFlYUnZjbFJ5WVc1emFYUnBiMjRwTzF4eVhHNTlYSEpjYmx4eVhHNWxlSEJ2Y25RZ1pXNTFiU0JCYm1sdFlYUnZjbFJ5WVc1emFYUnBiMjRnZTF4eVhHNGdJQ0FnVEdsdVpXRnlMRnh5WEc0Z0lDQWdSV0Z6WlVsdUxGeHlYRzRnSUNBZ1JXRnpaVTkxZEN4Y2NseHVJQ0FnSUVWaGMyVkpiazkxZEN4Y2NseHVJQ0FnSUZCMWJHeEpiaXhjY2x4dUlDQWdJRkIxYzJoUGRYUXNYSEpjYmlBZ0lDQlFkWE5vVUhWc2JGeHlYRzU5WEhKY2JseHVYRzVjYmk4dklGZEZRbEJCUTBzZ1JrOVBWRVZTSUM4dlhHNHZMeUF1TDNOeVl5OWpiMjF0YjI0dWRITWlMQ0pwYlhCdmNuUWdleUJKUVc1cGJXRjBiM0lzSUVGdWFXMWhkRzl5VkhKaGJuTnBkR2x2YmlCOUlHWnliMjBnWENJdUwyTnZiVzF2Ymx3aU8xeHlYRzVjY2x4dUx5b3FYSEpjYmlBcUlFOTFkR3RwZENCQmJtbHRZWFJ2Y2x4eVhHNGdLaUJCSUhOcGJYQnNaU0JoYm1sdFlYUnZjaUJqYkdGemN5QjBhR0YwSUdoaGN5QjBhVzFwYm1jZ1puVnVZM1JwYjI1ekxpQWdTR1ZoZG1sc2VTQnBibk53YVhKbFpDQmllU0IwYUdVZ1hISmNiaUFxSUdwaGRtRnpZM0pwY0hRZ1kyeGhjM01nWVhRZ2FIUjBjRG92TDJwaGRtRnpZM0pwY0hRdWFXNW1ieTlxY3kxaGJtbHRZWFJwYjI0dUlDQkpaaUJoZG1GcGJHRmliR1VnYVhRZ2QybHNiRnh5WEc0Z0tpQjFjMlVnY21WeGRXVnpkRUZ1YVcxaGRHbHZia1p5WVcxbElHOXlJR2wwSUhkcGJHd2dabUZzYkNCaVlXTnJJSFJ2SUhObGRFbHVkR1Z5ZG1Gc0xpQkJibWx0WVhSbFhISmNiaUFxSUhKbGRIVnlibk1nWVNCd2NtOXRhWE5sSUhOdklIUm9ZWFFnZVc5MUlHTmhiaUJ6ZEdGamF5QmhibWx0WVhScGIyNXpMbHh5WEc0Z0tpQmNjbHh1SUNvZ1FHVjRjRzl5ZEZ4eVhHNGdLaUJBWTJ4aGMzTWdUM1YwYTJsMFFXNXBiV0YwYjNKY2NseHVJQ29nUUdsdGNHeGxiV1Z1ZEhNZ2UwbEJibWx0WVhSdmNuMWNjbHh1SUNvdlhISmNibVY0Y0c5eWRDQmpiR0Z6Y3lCUGRYUnJhWFJCYm1sdFlYUnZjaUJwYlhCc1pXMWxiblJ6SUVsQmJtbHRZWFJ2Y2lCN1hISmNibHh5WEc0Z0lDQWdjSFZpYkdsaklITjBZWEowT2lCdWRXMWlaWEk3WEhKY2JpQWdJQ0J3Y21sMllYUmxJRjlrZFhKaGRHbHZiam9nYm5WdFltVnlPMXh5WEc0Z0lDQWdjSEpwZG1GMFpTQmZjM1JsY0RvZ1JuVnVZM1JwYjI0N1hISmNiaUFnSUNCd2NtbDJZWFJsSUY5cGJuUmxjblpoYkRvZ2JuVnRZbVZ5TzF4eVhHNGdJQ0FnY0hKcGRtRjBaU0JmY21GMFpUb2diblZ0WW1WeU8xeHlYRzRnSUNBZ2NISnBkbUYwWlNCZmRISmhibk5wZEdsdmJqb2dSblZ1WTNScGIyNDdYSEpjYmx4eVhHNGdJQ0FnY0hWaWJHbGpJR052Ym5OMGNuVmpkRzl5S0NrZ2UxeHlYRzRnSUNBZ0lDQWdJSFJvYVhNdVgyUjFjbUYwYVc5dUlEMGdNakF3TzF4eVhHNGdJQ0FnSUNBZ0lIUm9hWE11WDNOMFpYQWdQU0FvS1NBOVBpQjdJSDA3WEhKY2JpQWdJQ0FnSUNBZ2RHaHBjeTVmY21GMFpTQTlJREUyTzF4eVhHNGdJQ0FnSUNBZ0lIUm9hWE11WDNSeVlXNXphWFJwYjI0Z1BTQjBhR2x6TG14cGJtVmhjanRjY2x4dUlDQWdJSDFjY2x4dVhISmNiaUFnSUNBdktpcGNjbHh1SUNBZ0lDQXFJRk5sZEhNZ2RHaGxJSE4wWlhBZ1puVnVZM1JwYjI0Z1kyRnNiR1ZrSUdKNUlHRnVhVzFoZEdVZ1lYUWdaV0ZqYUNCcGJuUmxjblpoYkZ4eVhHNGdJQ0FnSUNvZ1hISmNiaUFnSUNBZ0tpQkFjR0Z5WVcwZ2MzUmxjQ0JHZFc1amRHbHZiaUIwYUdGMElIUmhhMlZ6SUdFZ1pHVnNkR0VnWVc1a0lHRnlaM05jY2x4dUlDQWdJQ0FxSUVCeVpYUjFjbTV6SUh0MGFHbHpmU0JjY2x4dUlDQWdJQ0FxSUVCdFpXMWlaWEp2WmlCUGRYUnJhWFJCYm1sdFlYUnZjbHh5WEc0Z0lDQWdJQ292WEhKY2JpQWdJQ0J6WlhSVGRHVndLSE4wWlhBNklFWjFibU4wYVc5dUtUb2dkR2hwY3lCN1hISmNiaUFnSUNBZ0lDQWdkR2hwY3k1ZmMzUmxjQ0E5SUhOMFpYQTdYSEpjYmlBZ0lDQWdJQ0FnY21WMGRYSnVJSFJvYVhNN1hISmNiaUFnSUNCOVhISmNibHh5WEc0Z0lDQWdMeW9xWEhKY2JpQWdJQ0FnS2lCVFpYUnpJSFJvWlNCMGIzUmhiQ0JrZFhKaGRHbHZiaUJ2WmlCMGFHVWdZVzVwYldGMGFXOXVYSEpjYmlBZ0lDQWdLaUJjY2x4dUlDQWdJQ0FxSUVCd1lYSmhiU0I3Ym5WdFltVnlmU0JrZFhKaGRHbHZiaUJ0YVd4c2FYTmxZMjl1WkhNZ2IyWWdjM0JzWlc1a2FXUWdZVzVwYldGMGFXOXVJQ2hrWldaaGRXeDBPaUF5TURCdGN5bGNjbHh1SUNBZ0lDQXFJRUJ5WlhSMWNtNXpJSHQwYUdsemZTQmNjbHh1SUNBZ0lDQXFJRUJ0WlcxaVpYSnZaaUJQZFhScmFYUkJibWx0WVhSdmNseHlYRzRnSUNBZ0lDb3ZYSEpjYmlBZ0lDQnpaWFJFZFhKaGRHbHZiaWhrZFhKaGRHbHZiam9nYm5WdFltVnlLVG9nZEdocGN5QjdYSEpjYmlBZ0lDQWdJQ0FnZEdocGN5NWZaSFZ5WVhScGIyNGdQU0JrZFhKaGRHbHZianRjY2x4dUlDQWdJQ0FnSUNCeVpYUjFjbTRnZEdocGN6dGNjbHh1SUNBZ0lIMWNjbHh1WEhKY2JpQWdJQ0F2S2lwY2NseHVJQ0FnSUNBcUlGTmxkQ0IwYUdVZ2FXNTBaWEoyWVd3Z2NtRjBaU0J2WmlCMGFHVWdZVzVwYldGMGFXOXVYSEpjYmlBZ0lDQWdLaUJjY2x4dUlDQWdJQ0FxSUVCd1lYSmhiU0I3Ym5WdFltVnlmU0J5WVhSbElHbHVkR1Z5ZG1Gc0lISmhkR1VnYVc0Z2JXbHNiR2x6WldOdmJtUnpJQ2hrWldaaGRXeDBPaUF4Tm0xektWeHlYRzRnSUNBZ0lDb2dRSEpsZEhWeWJuTWdlM1JvYVhOOUlGeHlYRzRnSUNBZ0lDb2dRRzFsYldKbGNtOW1JRTkxZEd0cGRFRnVhVzFoZEc5eVhISmNiaUFnSUNBZ0tpOWNjbHh1SUNBZ0lITmxkRkpoZEdVb2NtRjBaVG9nYm5WdFltVnlLVG9nZEdocGN5QjdYSEpjYmlBZ0lDQWdJQ0FnZEdocGN5NWZjbUYwWlNBOUlISmhkR1U3WEhKY2JpQWdJQ0FnSUNBZ2NtVjBkWEp1SUhSb2FYTTdYSEpjYmlBZ0lDQjlYSEpjYmx4eVhHNGdJQ0FnTHlvcVhISmNiaUFnSUNBZ0tpQlRaWFJ6SUhSb1pTQjBhVzFwYm1jZ1puVnVZM1JwYjI0Z2RYTmxaQ0JpZVNCMGFHVWdZVzVwYldGMFpTQm1kVzVqZEdsdmJpQW9aR1ZtWVhWc2REb2dUR2x1WldGeUtWeHlYRzRnSUNBZ0lDb2dYSEpjYmlBZ0lDQWdLaUJBY0dGeVlXMGdlMEZ1YVcxaGRHOXlWSEpoYm5OcGRHbHZibjBnZEhKaGJuTnBkR2x2YmlCVWFXMXBibWNnWm5WdVkzUnBiMjVjY2x4dUlDQWdJQ0FxSUVCeVpYUjFjbTV6SUh0MGFHbHpmU0JjY2x4dUlDQWdJQ0FxSUVCdFpXMWlaWEp2WmlCUGRYUnJhWFJCYm1sdFlYUnZjbHh5WEc0Z0lDQWdJQ292WEhKY2JpQWdJQ0J6WlhSVWNtRnVjMmwwYVc5dUtIUnlZVzV6YVhScGIyNDZJRUZ1YVcxaGRHOXlWSEpoYm5OcGRHbHZiaWs2SUhSb2FYTWdlMXh5WEc0Z0lDQWdJQ0FnSUhOM2FYUmphQ0FvZEhKaGJuTnBkR2x2YmlrZ2UxeHlYRzRnSUNBZ0lDQWdJQ0FnSUNCallYTmxJRUZ1YVcxaGRHOXlWSEpoYm5OcGRHbHZiaTVGWVhObFNXNDZYSEpjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0IwYUdsekxsOTBjbUZ1YzJsMGFXOXVJRDBnZEdocGN5NWxZWE5sU1c0N1hISmNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQmljbVZoYXp0Y2NseHVJQ0FnSUNBZ0lDQWdJQ0FnWTJGelpTQkJibWx0WVhSdmNsUnlZVzV6YVhScGIyNHVSV0Z6WlU5MWREcGNjbHh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJSFJvYVhNdVgzUnlZVzV6YVhScGIyNGdQU0IwYUdsekxtVmhjMlZQZFhRN1hISmNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQmljbVZoYXp0Y2NseHVJQ0FnSUNBZ0lDQWdJQ0FnWTJGelpTQkJibWx0WVhSdmNsUnlZVzV6YVhScGIyNHVSV0Z6WlVsdVQzVjBPbHh5WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnZEdocGN5NWZkSEpoYm5OcGRHbHZiaUE5SUhSb2FYTXVaV0Z6WlVsdVQzVjBPMXh5WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnWW5KbFlXczdYSEpjYmlBZ0lDQWdJQ0FnSUNBZ0lHTmhjMlVnUVc1cGJXRjBiM0pVY21GdWMybDBhVzl1TGxCMWJHeEpianBjY2x4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUhSb2FYTXVYM1J5WVc1emFYUnBiMjRnUFNCMGFHbHpMbkIxYkd4SmJqdGNjbHh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJR0p5WldGck8xeHlYRzRnSUNBZ0lDQWdJQ0FnSUNCallYTmxJRUZ1YVcxaGRHOXlWSEpoYm5OcGRHbHZiaTVRZFhOb1QzVjBPbHh5WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnZEdocGN5NWZkSEpoYm5OcGRHbHZiaUE5SUhSb2FYTXVjSFZ6YUU5MWREdGNjbHh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJR0p5WldGck8xeHlYRzRnSUNBZ0lDQWdJQ0FnSUNCallYTmxJRUZ1YVcxaGRHOXlWSEpoYm5OcGRHbHZiaTVRZFhOb1VIVnNiRHBjY2x4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUhSb2FYTXVYM1J5WVc1emFYUnBiMjRnUFNCMGFHbHpMbkIxYzJoUWRXeHNPMXh5WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnWW5KbFlXczdYSEpjYmlBZ0lDQWdJQ0FnSUNBZ0lHUmxabUYxYkhRNlhISmNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQjBhR2x6TGw5MGNtRnVjMmwwYVc5dUlEMGdkR2hwY3k1c2FXNWxZWEk3WEhKY2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCaWNtVmhhenRjY2x4dUlDQWdJQ0FnSUNCOVhISmNiaUFnSUNBZ0lDQWdjbVYwZFhKdUlIUm9hWE03WEhKY2JpQWdJQ0I5WEhKY2JseHlYRzRnSUNBZ0x5b3FYSEpjYmlBZ0lDQWdLaUJCYm1sdFlYUmxjeUIwYUdVZ0ozTjBaWEFuSUdaMWJtTjBhVzl1SUc5MlpYSWdKMlIxY21GMGFXOXVKeUJoZENCcGJuUmxjblpoYkNBbmNtRjBaU2N1SUZ4eVhHNGdJQ0FnSUNvZ1UzUmxjQ0JwY3lCallXeHNaV1FnZDJsMGFDQmtaV3gwWVNCMGFXMWxJR0Z1WkNCaGJua2dZWEpuZFcxbGJuUnpJSFJvWVhRZ2VXOTFJSEJoYzNNZ2RHOGdkR2hsSUZ4eVhHNGdJQ0FnSUNvZ1lXNXBiV0YwWlNCbWRXNWpkR2x2Ymk1Y2NseHVJQ0FnSUNBcUlFQndZWEpoYlNCemRHRnlkQ0JoSUdSaGRHVWdLRzFoYVc1c2VTQjFjMlZrSUdadmNpQjBaWE4wYVc1bktWeHlYRzRnSUNBZ0lDb3ZYSEpjYmlBZ0lDQmhibWx0WVhSbEtITjBZWEowUHpvZ2JuVnRZbVZ5TENBdUxpNWhjbWR6T2lCaGJubGJYU2s2SUZCeWIyMXBjMlU4WW05dmJHVmhiajRnZTF4eVhHNGdJQ0FnSUNBZ0lISmxkSFZ5YmlCdVpYY2dVSEp2YldselpTZ29jbVZ6YjJ4MlpTa2dQVDRnZTF4eVhHNGdJQ0FnSUNBZ0lDQWdJQ0JwWmlBb2RIbHdaVzltSUhkcGJtUnZkMXNuY21WeGRXVnpkRUZ1YVcxaGRHbHZia1p5WVcxbEoxMGdQVDA5SUNkbWRXNWpkR2x2YmljcElIdGNjbHh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJR3hsZENCemRHRnlkQ0E5SUhCbGNtWnZjbTFoYm1ObExtNXZkeWdwTzF4eVhHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ1kyOXVjM1FnY21GbVFXNXBiV0YwWlNBOUlDaDBhVzFsS1NBOVBpQjdYSEpjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2JHVjBJSEJ5YjJkeVpYTnpJRDBnS0hScGJXVWdMU0J6ZEdGeWRDa2dMeUIwYUdsekxsOWtkWEpoZEdsdmJqdGNjbHh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCcFppQW9jSEp2WjNKbGMzTWdQaUF4S1NCd2NtOW5jbVZ6Y3lBOUlERTdYSEpjYmx4eVhHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQzh2SUdOaGJHTjFiR0YwWlNCMGFHVWdZM1Z5Y21WdWRDQmhibWx0WVhScGIyNGdjM1JoZEdWY2NseHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0JzWlhRZ1pHVnNkR0VnUFNCMGFHbHpMbDkwY21GdWMybDBhVzl1S0hCeWIyZHlaWE56S1Z4eVhHNWNjbHh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCMGFHbHpMbDl6ZEdWd0tHUmxiSFJoTENCaGNtZHpLVHRjY2x4dVhISmNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnYVdZZ0tIQnliMmR5WlhOeklEd2dNU2tnZTF4eVhHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCeVpYRjFaWE4wUVc1cGJXRjBhVzl1Um5KaGJXVW9jbUZtUVc1cGJXRjBaU2s3WEhKY2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdmU0JsYkhObElIdGNjbHh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdjbVZ6YjJ4MlpTaDBjblZsS1R0Y2NseHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0I5WEhKY2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCOVhISmNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQnlaWEYxWlhOMFFXNXBiV0YwYVc5dVJuSmhiV1VvY21GbVFXNXBiV0YwWlNrN1hISmNiaUFnSUNBZ0lDQWdJQ0FnSUgwZ1pXeHpaU0I3WEhKY2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCMGFHbHpMbDlwYm5SbGNuWmhiQ0E5SUhkcGJtUnZkeTV6WlhSSmJuUmxjblpoYkNnb0tTQTlQaUI3WEhKY2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdiR1YwSUdSbGJIUmhWR2x0WlNBOUlFUmhkR1V1Ym05M0tDazdYSEpjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2JHVjBJSFJwYldWUVlYTnpaV1FnUFNCa1pXeDBZVlJwYldVZ0xTQnpkR0Z5ZER0Y2NseHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0JzWlhRZ2NISnZaM0psYzNNZ1BTQjBhVzFsVUdGemMyVmtJQzhnZEdocGN5NWZaSFZ5WVhScGIyNDdYSEpjYmx4eVhHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJR2xtSUNod2NtOW5jbVZ6Y3lBK0lERXBJSEJ5YjJkeVpYTnpJRDBnTVZ4eVhHNWNjbHh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCMllYSWdaR1ZzZEdFZ1BTQjBhR2x6TGw5MGNtRnVjMmwwYVc5dUtIQnliMmR5WlhOektUdGNjbHh1WEhKY2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdkR2hwY3k1ZmMzUmxjQ2hrWld4MFlTd2dZWEpuY3lrN1hISmNibHh5WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lHbG1JQ2h3Y205bmNtVnpjeUE5UFNBeEtTQjdYSEpjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJR05zWldGeVNXNTBaWEoyWVd3b2RHaHBjeTVmYVc1MFpYSjJZV3dwTzF4eVhHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCeVpYTnZiSFpsS0hSeWRXVXBPMXh5WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lIMWNjbHh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJSDBzSUhSb2FYTXVYM0poZEdVcFhISmNiaUFnSUNBZ0lDQWdJQ0FnSUgxY2NseHVJQ0FnSUNBZ0lDQjlLVnh5WEc0Z0lDQWdmVnh5WEc1Y2NseHVJQ0FnSUhCeWFYWmhkR1VnYkdsdVpXRnlLSEJ5YjJkeVpYTnpPaUJ1ZFcxaVpYSXBJSHRjY2x4dUlDQWdJQ0FnSUNCeVpYUjFjbTRnY0hKdlozSmxjM003WEhKY2JpQWdJQ0I5WEhKY2JseHlYRzRnSUNBZ2NISnBkbUYwWlNCbFlYTmxTVzRvY0hKdlozSmxjM002SUc1MWJXSmxjaWtnZTF4eVhHNGdJQ0FnSUNBZ0lISmxkSFZ5YmlCTllYUm9MbkJ2ZHlod2NtOW5jbVZ6Y3l3Z05TazdYSEpjYmlBZ0lDQjlYSEpjYmx4eVhHNGdJQ0FnY0hKcGRtRjBaU0JsWVhObFQzVjBJRDBnZEdocGN5NXRZV3RsUldGelpVOTFkQ2gwYUdsekxtVmhjMlZKYmlrN1hISmNibHh5WEc0Z0lDQWdjSEpwZG1GMFpTQmxZWE5sU1c1UGRYUWdQU0IwYUdsekxtMWhhMlZGWVhObFNXNVBkWFFvZEdocGN5NWxZWE5sU1c0cE8xeHlYRzVjY2x4dUlDQWdJSEJ5YVhaaGRHVWdjSFZzYkVsdUtIQnliMmR5WlhOek9pQnVkVzFpWlhJc0lIZzZJRzUxYldKbGNpQTlJRElwSUh0Y2NseHVJQ0FnSUNBZ0lDQnlaWFIxY200Z1RXRjBhQzV3YjNjb2NISnZaM0psYzNNc0lESXBJQ29nS0NoNElDc2dNU2tnS2lCd2NtOW5jbVZ6Y3lBdElIZ3BYSEpjYmlBZ0lDQjlYSEpjYmx4eVhHNGdJQ0FnY0hKcGRtRjBaU0J3ZFhOb1QzVjBJRDBnZEdocGN5NXRZV3RsUldGelpVOTFkQ2gwYUdsekxuQjFiR3hKYmlrN1hISmNibHh5WEc0Z0lDQWdjSEpwZG1GMFpTQndkWE5vVUhWc2JDQTlJSFJvYVhNdWJXRnJaVVZoYzJWSmJrOTFkQ2gwYUdsekxuQjFiR3hKYmlrN1hISmNibHh5WEc0Z0lDQWdjSEpwZG1GMFpTQnRZV3RsUldGelpVOTFkQ2gwYVcxcGJtYzZJRVoxYm1OMGFXOXVLU0I3WEhKY2JpQWdJQ0FnSUNBZ2NtVjBkWEp1SUdaMWJtTjBhVzl1SUNod2NtOW5jbVZ6Y3pvZ2JuVnRZbVZ5S1NCN1hISmNiaUFnSUNBZ0lDQWdJQ0FnSUhKbGRIVnliaUF4SUMwZ2RHbHRhVzVuS0RFZ0xTQndjbTluY21WemN5azdYSEpjYmlBZ0lDQWdJQ0FnZlZ4eVhHNGdJQ0FnZlZ4eVhHNWNjbHh1SUNBZ0lIQnlhWFpoZEdVZ2JXRnJaVVZoYzJWSmJrOTFkQ2gwYVcxcGJtY3BJSHRjY2x4dUlDQWdJQ0FnSUNCeVpYUjFjbTRnWm5WdVkzUnBiMjRnS0hCeWIyZHlaWE56S1NCN1hISmNiaUFnSUNBZ0lDQWdJQ0FnSUdsbUlDaHdjbTluY21WemN5QThJQzQxS1Z4eVhHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2NtVjBkWEp1SUhScGJXbHVaeWd5SUNvZ2NISnZaM0psYzNNcElDOGdNanRjY2x4dUlDQWdJQ0FnSUNBZ0lDQWdaV3h6WlZ4eVhHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2NtVjBkWEp1SUNneUlDMGdkR2x0YVc1bktESWdLaUFvTVNBdElIQnliMmR5WlhOektTa3BJQzhnTWp0Y2NseHVJQ0FnSUNBZ0lDQjlYSEpjYmlBZ0lDQjlYSEpjYm4xY2NseHVYSEpjYm1WNGNHOXlkQ0FxSUdaeWIyMGdKeTR2WTI5dGJXOXVKenRjYmx4dVhHNHZMeUJYUlVKUVFVTkxJRVpQVDFSRlVpQXZMMXh1THk4Z0xpOXpjbU12YVc1a1pYZ3VkSE1pWFN3aWMyOTFjbU5sVW05dmRDSTZJaUo5XG4vLyMgc291cmNlTWFwcGluZ1VSTD1vdXRraXQtYW5pbWF0b3IuanMubWFwXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L291dGtpdC1hbmltYXRvci9kaXN0L291dGtpdC1hbmltYXRvci5qc1xuLy8gbW9kdWxlIGlkID0gMTNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sInNvdXJjZVJvb3QiOiIifQ==