/*! Outkit v1.0.2 - Copyright 2017 James Ehly - MIT License */
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
var outkit_animator_1 = __webpack_require__(11);
var Logger_1 = __webpack_require__(10);
var State_1 = __webpack_require__(0);
var ElementHelper_1 = __webpack_require__(2);

var Component = function () {
    function Component(element) {
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
        this._logger = new Logger_1.default();
        this._animator = new outkit_animator_1.OutkitAnimator();
        this._children = new Array();
        var el = ElementHelper_1.default.queryElement(element);
        if (!el) {
            this._logger.error("Element \"" + element + "\" could not be found.  Ensure your query string is a valid css selector.");
            return;
        }
        this.setElement(el);
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
        key: "setAnimator",
        value: function setAnimator(animator) {
            this._animator = animator;
            return this;
        }
    }, {
        key: "addChild",
        value: function addChild(component) {
            this._children.push(component);
            component.setParent(this);
            return this;
        }
    }, {
        key: "removeChild",
        value: function removeChild(component) {
            var index = this._children.indexOf(component);
            this._children.splice(index, 1);
            return this;
        }
    }, {
        key: "getChildren",
        value: function getChildren() {
            return this._children;
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
            var _iteratorNormalCompletion = true;
            var _didIteratorError = false;
            var _iteratorError = undefined;

            try {
                for (var _iterator = this._children[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
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
                _this2.changeClassName(newState.stateClassName, oldState.stateClassName);
                _this2.changeClassName(newState.okClassName, oldState.okClassName);
                _this2.setStaticProperties(newState, oldState, isInitial);
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
    }, {
        key: "isAnimatedStyle",
        value: function isAnimatedStyle(name) {
            return State_1.State.animated('style.' + name);
        }
    }, {
        key: "changeClassName",
        value: function changeClassName(newClass, oldClass) {
            if (newClass && newClass != oldClass) {
                ElementHelper_1.default.changeClass(this._element, newClass, oldClass);
            }
        }
    }, {
        key: "setStaticProperties",
        value: function setStaticProperties(newState, oldState, isInitial) {
            for (var name in newState.style) {
                if (this._animator && this.isAnimatedStyle(name) && newState.style[name] !== null && !isInitial) continue;
                var ns = newState.style[name];
                var os = oldState.style[name];
                if (ns === os) continue;
                if (State_1.State.animated('style.' + name) && !ns.match(/%|px$/)) ns = ns + 'px';
                this._element.style[name] = ns;
            }
        }
    }]);

    return Component;
}();

exports.Component = Component;

/***/ }),
/* 2 */
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
    }, {
        key: "queryElement",
        value: function queryElement(query) {
            return document.querySelectorAll(query)[0];
        }
    }]);

    return ElementHelper;
}();

exports.default = ElementHelper;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

Object.defineProperty(exports, "__esModule", { value: true });
var Component_1 = __webpack_require__(1);
var State_1 = __webpack_require__(0);

var Draggable = function (_Component_1$Componen) {
    _inherits(Draggable, _Component_1$Componen);

    function Draggable(element) {
        _classCallCheck(this, Draggable);

        var _this = _possibleConstructorReturn(this, (Draggable.__proto__ || Object.getPrototypeOf(Draggable)).call(this, element));

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

    _createClass(Draggable, [{
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

    return Draggable;
}(Component_1.Component);

exports.default = Draggable;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

Object.defineProperty(exports, "__esModule", { value: true });
var State_1 = __webpack_require__(0);
var Component_1 = __webpack_require__(1);

var Drawer = function (_Component_1$Componen) {
    _inherits(Drawer, _Component_1$Componen);

    function Drawer(element, options) {
        _classCallCheck(this, Drawer);

        var _this = _possibleConstructorReturn(this, (Drawer.__proto__ || Object.getPrototypeOf(Drawer)).call(this, element));

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

    _createClass(Drawer, [{
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

    return Drawer;
}(Component_1.Component);

exports.default = Drawer;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

Object.defineProperty(exports, "__esModule", { value: true });
var Component_1 = __webpack_require__(1);
var ElementHelper_1 = __webpack_require__(2);
var State_1 = __webpack_require__(0);

var HorizontalLayout = function (_Component_1$Componen) {
    _inherits(HorizontalLayout, _Component_1$Componen);

    function HorizontalLayout(element) {
        _classCallCheck(this, HorizontalLayout);

        var _this = _possibleConstructorReturn(this, (HorizontalLayout.__proto__ || Object.getPrototypeOf(HorizontalLayout)).call(this, element));

        _this.resetChildren();
        _this.registerEvent('init', function () {
            return _this.init();
        });
        _this.setAnimator(null);
        return _this;
    }

    _createClass(HorizontalLayout, [{
        key: "init",
        value: function init() {
            var el = this.getElement();
            this.resetChildren();
            for (var i = 0; i < el.children.length; i++) {
                var child = el.children[i];
                if (!child.id) ElementHelper_1.default.setGuidId(child);
                var childComponent = new Component_1.Component("#" + child.id);
                childComponent.setAnimator(null);
                var size = child.getAttribute('data-size') || '100%';
                if (size === '100%') {
                    this.fluidChildren.push(childComponent);
                } else if (size.match(/^[\d]+%$/)) {
                    this.perctChildren.push(childComponent);
                } else {
                    this.fixedChildren.push(childComponent);
                }
                childComponent.render({ style: { height: '100%', width: size, overflow: 'hidden', float: 'left' } });
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
            state.style.width = this.getElement().parentElement.offsetWidth + 'px';
            return this.render(state);
        }
    }, {
        key: "render",
        value: function render(newState) {
            var promises = [];
            promises.push(_get(HorizontalLayout.prototype.__proto__ || Object.getPrototypeOf(HorizontalLayout.prototype), "render", this).call(this, newState));
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

    return HorizontalLayout;
}(Component_1.Component);

exports.default = HorizontalLayout;

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
var Component_1 = __webpack_require__(1);

var Overlay = function (_Component_1$Componen) {
    _inherits(Overlay, _Component_1$Componen);

    function Overlay(element) {
        _classCallCheck(this, Overlay);

        var _this = _possibleConstructorReturn(this, (Overlay.__proto__ || Object.getPrototypeOf(Overlay)).call(this, element));

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

    _createClass(Overlay, [{
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

    return Overlay;
}(Component_1.Component);

exports.default = Overlay;

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

Object.defineProperty(exports, "__esModule", { value: true });
var Component_1 = __webpack_require__(1);
var ElementHelper_1 = __webpack_require__(2);
var State_1 = __webpack_require__(0);

var VerticalLayout = function (_Component_1$Componen) {
    _inherits(VerticalLayout, _Component_1$Componen);

    function VerticalLayout(element) {
        _classCallCheck(this, VerticalLayout);

        var _this = _possibleConstructorReturn(this, (VerticalLayout.__proto__ || Object.getPrototypeOf(VerticalLayout)).call(this, element));

        _this.resetChildren();
        _this.registerEvent('init', function () {
            return _this.init();
        });
        _this.setAnimator(null);
        return _this;
    }

    _createClass(VerticalLayout, [{
        key: "init",
        value: function init() {
            var el = this.getElement();
            this.resetChildren();
            for (var i = 0; i < el.children.length; i++) {
                var child = el.children[i];
                if (!child.id) ElementHelper_1.default.setGuidId(child);
                var childComponent = new Component_1.Component('#' + child.id);
                childComponent.setAnimator(null);
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
            promises.push(_get(VerticalLayout.prototype.__proto__ || Object.getPrototypeOf(VerticalLayout.prototype), "render", this).call(this, newState));
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

    return VerticalLayout;
}(Component_1.Component);

exports.default = VerticalLayout;

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
var Component_1 = __webpack_require__(1);
var WindowPlacement;
(function (WindowPlacement) {
    WindowPlacement[WindowPlacement["TopLeft"] = 0] = "TopLeft";
    WindowPlacement[WindowPlacement["Top"] = 1] = "Top";
    WindowPlacement[WindowPlacement["TopRight"] = 2] = "TopRight";
    WindowPlacement[WindowPlacement["Left"] = 3] = "Left";
    WindowPlacement[WindowPlacement["Center"] = 4] = "Center";
    WindowPlacement[WindowPlacement["Right"] = 5] = "Right";
    WindowPlacement[WindowPlacement["BottomRight"] = 6] = "BottomRight";
    WindowPlacement[WindowPlacement["Bottom"] = 7] = "Bottom";
    WindowPlacement[WindowPlacement["BottomLeft"] = 8] = "BottomLeft";
})(WindowPlacement = exports.WindowPlacement || (exports.WindowPlacement = {}));

var Window = function (_Component_1$Componen) {
    _inherits(Window, _Component_1$Componen);

    function Window(element, options) {
        _classCallCheck(this, Window);

        var _this = _possibleConstructorReturn(this, (Window.__proto__ || Object.getPrototypeOf(Window)).call(this, element));

        _this._width = options.width || 100;
        _this._height = options.height || 100;
        _this._top = options.top || 0;
        _this._left = options.left || 0;
        _this._placement = WindowPlacement.Center;
        _this._isOpen = false;
        _this._placementMargin = 32;
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

    _createClass(Window, [{
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
            state.style.width = this._width + "px";
            state.style.height = this._height + "px";
            state.style.opacity = '0';
            var left = '0';
            var top = '0';
            var windowWidth = window.innerWidth;
            var windowHeight = window.innerHeight;
            var margin = this._placementMargin;
            var right = windowWidth - this._width - margin;
            var center = windowWidth / 2 - this._width / 2;
            var middle = windowHeight / 2 - this._height / 2;
            var bottom = windowHeight - this._height - margin;
            if (this._placement) {
                switch (+this._placement) {
                    case WindowPlacement.TopLeft:
                        left = margin + "px";
                        top = margin + "px";
                        break;
                    case WindowPlacement.Top:
                        left = center + "px";
                        top = margin + "px";
                        break;
                    case WindowPlacement.TopRight:
                        left = right + "px";
                        top = margin + "px";
                        break;
                    case WindowPlacement.Left:
                        left = margin + "px";
                        top = middle + "px";
                        break;
                    case WindowPlacement.Center:
                        left = center + "px";
                        top = middle + "px";
                        break;
                    case WindowPlacement.Right:
                        left = right + "px";
                        top = middle + "px";
                        break;
                    case WindowPlacement.BottomLeft:
                        left = margin + "px";
                        top = bottom + "px";
                        break;
                    case WindowPlacement.Bottom:
                        left = center + "px";
                        top = bottom + "px";
                        break;
                    case WindowPlacement.BottomRight:
                        left = right + "px";
                        top = bottom + "px";
                        break;
                    default:
                        left = center + "px";
                        top = middle + "px";
                        break;
                }
            } else {
                left = this._left + "px";
                top = this._top + "px";
            }
            state.style.left = left;
            state.style.top = top;
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
            state.style.opacity = '1';
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
            state.style.opacity = '0';
            return this.render(state).then(function (result) {
                var state = new State_1.State();
                state.style.display = 'none';
                return _this3.render(state);
            });
        }
    }]);

    return Window;
}(Component_1.Component);

exports.default = Window;

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
__export(__webpack_require__(1));
var Drawer_1 = __webpack_require__(4);
exports.Drawer = Drawer_1.default;
var VerticalLayout_1 = __webpack_require__(7);
exports.VerticalLayout = VerticalLayout_1.default;
var HorizontalLayout_1 = __webpack_require__(5);
exports.HorizontalLayout = HorizontalLayout_1.default;
var Window_1 = __webpack_require__(8);
exports.Window = Window_1.default;
var Overlay_1 = __webpack_require__(6);
exports.Overlay = Overlay_1.default;
var Draggable_1 = __webpack_require__(3);
exports.Draggable = Draggable_1.default;

/***/ }),
/* 10 */
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
/* 11 */
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCBhMjAzNjMxYjEzMzQyNGU0MDU0NiIsIndlYnBhY2s6Ly8vLi9zcmMvc3RhdGUvU3RhdGUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvQ29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL3NyYy91dGlsL0VsZW1lbnRIZWxwZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvRHJhZ2dhYmxlLnRzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0RyYXdlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9Ib3Jpem9udGFsTGF5b3V0LnRzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL092ZXJsYXkudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvVmVydGljYWxMYXlvdXQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvV2luZG93LnRzIiwid2VicGFjazovLy8uL3NyYy9vdXRraXQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWwvTG9nZ2VyLnRzIiwid2VicGFjazovLy8uL34vb3V0a2l0LWFuaW1hdG9yL2Rpc3Qvb3V0a2l0LWFuaW1hdG9yLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsTztBQ1ZBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxtREFBMkMsY0FBYzs7QUFFekQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FB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LCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShbXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJvdXRraXRcIl0gPSBmYWN0b3J5KCk7XG5cdGVsc2Vcblx0XHRyb290W1wib3V0a2l0XCJdID0gZmFjdG9yeSgpO1xufSkodGhpcywgZnVuY3Rpb24oKSB7XG5yZXR1cm4gXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGlkZW50aXR5IGZ1bmN0aW9uIGZvciBjYWxsaW5nIGhhcm1vbnkgaW1wb3J0cyB3aXRoIHRoZSBjb3JyZWN0IGNvbnRleHRcbiBcdF9fd2VicGFja19yZXF1aXJlX18uaSA9IGZ1bmN0aW9uKHZhbHVlKSB7IHJldHVybiB2YWx1ZTsgfTtcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gOSk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgYTIwMzYzMWIxMzM0MjRlNDA1NDYiLCJleHBvcnQgY2xhc3MgU3RhdGUge1xyXG4gICAgLy8gcG9zc2libHkgcmVmYWN0b3IgdGhlc2UgY2xhc3NlcyBpbnRvIGFuIGFycmF5IG9mIGNsYXNzZXMgdGhhdCBhcmUgbWFuYWdlZFxyXG4gICAgLy8gdmlhIG1ldGhvZHMgaW4gdGhpcyBjbGFzc1xyXG4gICAgb2tDbGFzc05hbWU/OiBzdHJpbmc7XHJcbiAgICBzdGF0ZUNsYXNzTmFtZT86IHN0cmluZztcclxuICAgIHN0eWxlPzoge1xyXG4gICAgICAgIGhlaWdodD86IHN0cmluZztcclxuICAgICAgICB3aWR0aD86IHN0cmluZztcclxuICAgICAgICBvdmVyZmxvdz86IHN0cmluZztcclxuICAgICAgICBmbG9hdD86IHN0cmluZztcclxuICAgICAgICBwb3NpdGlvbj86IHN0cmluZztcclxuICAgICAgICB6SW5kZXg/OiBzdHJpbmc7XHJcbiAgICAgICAgdG9wPzogc3RyaW5nO1xyXG4gICAgICAgIGJvdHRvbT86IHN0cmluZztcclxuICAgICAgICBsZWZ0Pzogc3RyaW5nO1xyXG4gICAgICAgIHJpZ2h0Pzogc3RyaW5nO1xyXG4gICAgICAgIGRpc3BsYXk/OiBzdHJpbmc7XHJcbiAgICAgICAgYmFja2dyb3VuZENvbG9yPzogc3RyaW5nO1xyXG4gICAgICAgIG9wYWNpdHk/OiBzdHJpbmc7XHJcbiAgICAgICAgbWFyZ2luVG9wPzogc3RyaW5nO1xyXG4gICAgICAgIG1hcmdpbkJvdHRvbT86IHN0cmluZztcclxuICAgICAgICBtYXJnaW5MZWZ0Pzogc3RyaW5nO1xyXG4gICAgICAgIG1hcmdpblJpZ2h0Pzogc3RyaW5nO1xyXG4gICAgICAgIHBhZGRpbmdUb3A/OiBzdHJpbmc7XHJcbiAgICAgICAgcGFkZGluZ0JvdHRvbT86IHN0cmluZztcclxuICAgICAgICBwYWRkaW5nTGVmdD86IHN0cmluZztcclxuICAgICAgICBwYWRkaW5nUmlnaHQ/OiBzdHJpbmc7XHJcbiAgICB9XHJcbiAgICBzdGF0aWMgcmVhZG9ubHkgYW5pbWF0ZWRQcm9wczogQXJyYXk8c3RyaW5nPiA9IFtcclxuICAgICAgICAnc3R5bGUuaGVpZ2h0JywgXHJcbiAgICAgICAgJ3N0eWxlLndpZHRoJywgXHJcbiAgICAgICAgJ3N0eWxlLnRvcCcsIFxyXG4gICAgICAgICdzdHlsZS5ib3R0b20nLCBcclxuICAgICAgICAnc3R5bGUubGVmdCcsIFxyXG4gICAgICAgICdzdHlsZS5yaWdodCcsIFxyXG4gICAgICAgICdzdHlsZS5vcGFjaXR5JywgXHJcbiAgICAgICAgJ3N0eWxlLnpJbmRleCcsXHJcbiAgICAgICAgJ3N0cmluZy5tYXJnaW5Ub3AnLFxyXG4gICAgICAgICdzdHJpbmcubWFyZ2luQm90dG9tJyxcclxuICAgICAgICAnc3RyaW5nLm1hcmdpbkxlZnQnLFxyXG4gICAgICAgICdzdHJpbmcubWFyZ2luUmlnaHQnLCBcclxuICAgICAgICAnc3RyaW5nLnBhZGRpbmdUb3AnLFxyXG4gICAgICAgICdzdHJpbmcucGFkZGluZ0JvdHRvbScsXHJcbiAgICAgICAgJ3N0cmluZy5wYWRkaW5nTGVmdCcsXHJcbiAgICAgICAgJ3N0cmluZy5wYWRkaW5nUmlnaHQnLFxyXG4gICAgICAgIF07XHJcbiAgICBcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHRoaXMub2tDbGFzc05hbWUgPSAnJztcclxuICAgICAgICB0aGlzLnN0YXRlQ2xhc3NOYW1lID0gJyc7XHJcbiAgICAgICAgdGhpcy5zdHlsZSA9IHt9O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICBzdGF0aWMgYW5pbWF0ZWQodHlwZTogc3RyaW5nKSB7XHJcbiAgICAgICAgdmFyIGluZGV4ID0gdGhpcy5hbmltYXRlZFByb3BzLmluZGV4T2YodHlwZSk7XHJcbiAgICAgICAgcmV0dXJuIGluZGV4ID49IDA7XHJcbiAgICB9IFxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9zdGF0ZS9TdGF0ZS50cyIsImltcG9ydCB7IElBbmltYXRvciwgT3V0a2l0QW5pbWF0b3IgfSBmcm9tICdvdXRraXQtYW5pbWF0b3InO1xyXG5pbXBvcnQgTG9nZ2VyLCB7IElMb2dnZXIgfSBmcm9tIFwiLi4vdXRpbC9Mb2dnZXJcIjtcclxuaW1wb3J0IHsgU3RhdGUgfSBmcm9tIFwiLi4vc3RhdGUvU3RhdGVcIjtcclxuaW1wb3J0IEVsZW1lbnRIZWxwZXIgZnJvbSBcIi4uL3V0aWwvRWxlbWVudEhlbHBlclwiO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBJQ29tcG9uZW50IHtcclxuICAgIHJlbGF5KG1lc3NhZ2U6IHN0cmluZyk6IFByb21pc2U8YW55PjtcclxuICAgIHJlZ2lzdGVyRXZlbnQobmFtZTogc3RyaW5nLCBmdW5jPzogRnVuY3Rpb24pOiB0aGlzO1xyXG4gICAgc2V0RWxlbWVudChlbGVtZW50OiBIVE1MRWxlbWVudCk6IHRoaXM7XHJcbiAgICBnZXRFbGVtZW50KCk6IEhUTUxFbGVtZW50O1xyXG4gICAgZ2V0QW5pbWF0b3IoKTogSUFuaW1hdG9yO1xyXG4gICAgc2V0QW5pbWF0b3IoYW5pbWF0b3I6IElBbmltYXRvcik6IHRoaXM7XHJcbiAgICBhZGRDaGlsZChjb21wb25lbnQ6IElDb21wb25lbnQpOiB0aGlzO1xyXG4gICAgcmVtb3ZlQ2hpbGQoY29tcG9uZW50OiBJQ29tcG9uZW50KTogdGhpcztcclxuICAgIGdldENoaWxkcmVuKCk6IEFycmF5PElDb21wb25lbnQ+O1xyXG4gICAgZ2V0Um9vdCgpOiBJQ29tcG9uZW50O1xyXG4gICAgc2V0UGFyZW50KHBhcmVudDogSUNvbXBvbmVudCk6IHRoaXM7XHJcbiAgICByZW5kZXIobmV3U3RhdGU6IFN0YXRlKTogUHJvbWlzZTxhbnk+O1xyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgQ29tcG9uZW50IGltcGxlbWVudHMgSUNvbXBvbmVudCB7XHJcblxyXG4gICAgcHJpdmF0ZSBfcGFyZW50OiBJQ29tcG9uZW50O1xyXG4gICAgcHJpdmF0ZSBfY2hpbGRyZW46IEFycmF5PElDb21wb25lbnQ+O1xyXG5cclxuICAgIHByb3RlY3RlZCBfZWxlbWVudDogSFRNTEVsZW1lbnQ7XHJcbiAgICBwcm90ZWN0ZWQgX2xvZ2dlcjogSUxvZ2dlcjtcclxuICAgIHByb3RlY3RlZCBfYW5pbWF0b3I6IElBbmltYXRvcjtcclxuICAgIHByb3RlY3RlZCBfZXZlbnRzOiB7IFtpZDogc3RyaW5nXTogRnVuY3Rpb24gfTtcclxuICAgIHByb3RlY3RlZCBfc3RhdGU6IFN0YXRlO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKGVsZW1lbnQ6IHN0cmluZykge1xyXG4gICAgICAgIHRoaXMuX2V2ZW50cyA9IHt9O1xyXG4gICAgICAgIHRoaXMuX2xvZ2dlciA9IG5ldyBMb2dnZXIoKTtcclxuICAgICAgICB0aGlzLl9hbmltYXRvciA9IG5ldyBPdXRraXRBbmltYXRvcigpO1xyXG4gICAgICAgIHRoaXMuX2NoaWxkcmVuID0gbmV3IEFycmF5PElDb21wb25lbnQ+KCk7XHJcbiAgICAgICAgY29uc3QgZWwgPSBFbGVtZW50SGVscGVyLnF1ZXJ5RWxlbWVudChlbGVtZW50KTtcclxuICAgICAgICBpZiAoIWVsKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2xvZ2dlci5lcnJvcihgRWxlbWVudCBcIiR7ZWxlbWVudH1cIiBjb3VsZCBub3QgYmUgZm91bmQuICBFbnN1cmUgeW91ciBxdWVyeSBzdHJpbmcgaXMgYSB2YWxpZCBjc3Mgc2VsZWN0b3IuYCk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5zZXRFbGVtZW50KGVsKTtcclxuICAgICAgICB0aGlzLl9zdGF0ZSA9IG51bGw7XHJcbiAgICAgICAgaWYgKHR5cGVvZiB0aGlzLl9hbmltYXRvciAhPT0gJ3VuZGVmaW5lZCcgJiZcclxuICAgICAgICAgICAgdGhpcy5fYW5pbWF0b3IgIT09IG51bGwgJiZcclxuICAgICAgICAgICAgdHlwZW9mIHRoaXMuX2FuaW1hdG9yLnNldFN0ZXAgIT09ICd1bmRlZmluZWQnICYmXHJcbiAgICAgICAgICAgIHR5cGVvZiB0aGlzLl9hbmltYXRvci5zZXRTdGVwID09PSAnZnVuY3Rpb24nKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2FuaW1hdG9yLnNldFN0ZXAodGhpcy5zdGVwKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0RWxlbWVudCgpOiBIVE1MRWxlbWVudCB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2VsZW1lbnQ7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0RWxlbWVudChlbGVtZW50OiBIVE1MRWxlbWVudCk6IHRoaXMge1xyXG4gICAgICAgIHRoaXMuX2VsZW1lbnQgPSBlbGVtZW50O1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG5cclxuICAgIGdldEFuaW1hdG9yKCk6IElBbmltYXRvciB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2FuaW1hdG9yO1xyXG4gICAgfVxyXG5cclxuICAgIHNldEFuaW1hdG9yKGFuaW1hdG9yOiBJQW5pbWF0b3IpOiB0aGlzIHtcclxuICAgICAgICB0aGlzLl9hbmltYXRvciA9IGFuaW1hdG9yO1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG5cclxuICAgIGFkZENoaWxkKGNvbXBvbmVudDogSUNvbXBvbmVudCk6IHRoaXMge1xyXG4gICAgICAgIHRoaXMuX2NoaWxkcmVuLnB1c2goY29tcG9uZW50KTtcclxuICAgICAgICBjb21wb25lbnQuc2V0UGFyZW50KHRoaXMpO1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbW92ZUNoaWxkKGNvbXBvbmVudDogSUNvbXBvbmVudCk6IHRoaXMge1xyXG4gICAgICAgIGxldCBpbmRleCA9IHRoaXMuX2NoaWxkcmVuLmluZGV4T2YoY29tcG9uZW50KTtcclxuICAgICAgICB0aGlzLl9jaGlsZHJlbi5zcGxpY2UoaW5kZXgsIDEpO1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG5cclxuICAgIGdldENoaWxkcmVuKCk6IElDb21wb25lbnRbXSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2NoaWxkcmVuO1xyXG4gICAgfVxyXG5cclxuICAgIHNldFBhcmVudChwYXJlbnQ6IElDb21wb25lbnQpIHtcclxuICAgICAgICB0aGlzLl9wYXJlbnQgPSBwYXJlbnQ7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0Um9vdCgpOiBJQ29tcG9uZW50IHtcclxuICAgICAgICBpZiAodGhpcy5fcGFyZW50ICYmIHR5cGVvZiB0aGlzLl9wYXJlbnRbJ2dldFJvb3QnXSA9PT0gJ2Z1bmN0aW9uJykge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fcGFyZW50LmdldFJvb3QoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0U3RhdGUoKTogU3RhdGUge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9zdGF0ZTtcclxuICAgIH1cclxuXHJcbiAgICBzZXRTdGF0ZShzdGF0ZTogU3RhdGUpOiB0aGlzIHtcclxuICAgICAgICB0aGlzLl9zdGF0ZSA9IHN0YXRlO1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG5cclxuICAgIHJlZ2lzdGVyRXZlbnQobmFtZTogc3RyaW5nLCBmdW5jPzogRnVuY3Rpb24pOiB0aGlzIHtcclxuICAgICAgICB0aGlzLl9ldmVudHNbbmFtZV0gPSBmdW5jO1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbGF5KG1lc3NhZ2U6IHN0cmluZyk6IFByb21pc2U8YW55PiB7XHJcbiAgICAgICAgdmFyIHByb21pc2VzID0gW107XHJcbiAgICAgICAgaWYgKHR5cGVvZiB0aGlzLl9ldmVudHNbbWVzc2FnZV0gPT09ICdmdW5jdGlvbicpXHJcbiAgICAgICAgICAgIHByb21pc2VzLnB1c2godGhpcy5fZXZlbnRzW21lc3NhZ2VdKCkpO1xyXG5cclxuICAgICAgICBmb3IgKGxldCBjaGlsZCBvZiB0aGlzLl9jaGlsZHJlbikge1xyXG4gICAgICAgICAgICBpZiAodHlwZW9mIGNoaWxkID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgY2hpbGRbJ3JlbGF5J10gPT09ICdmdW5jdGlvbicpXHJcbiAgICAgICAgICAgICAgICBwcm9taXNlcy5wdXNoKGNoaWxkLnJlbGF5KG1lc3NhZ2UpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIFByb21pc2UuYWxsKHByb21pc2VzKTtcclxuICAgIH1cclxuXHJcbiAgICBtZXJnZShuZXdTdGF0ZSwgb2xkU3RhdGUpIHtcclxuICAgICAgICBsZXQgc3RhdGUgPSBuZXcgU3RhdGUoKTtcclxuICAgICAgICBzdGF0ZSA9IE9iamVjdC5hc3NpZ24oc3RhdGUsIG9sZFN0YXRlLCBuZXdTdGF0ZSk7XHJcbiAgICAgICAgc3RhdGUuc3R5bGUgPSBPYmplY3QuYXNzaWduKHt9LCBvbGRTdGF0ZS5zdHlsZSwgbmV3U3RhdGUuc3R5bGUpO1xyXG4gICAgICAgIHJldHVybiBzdGF0ZTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIERyYXcgdGhlIGN1cnJlbnQgc3RhdGUgb250byB0aGUgZWxlbWVudCwgb25seSBjaGFuZ2luZyB0aGUgaXRlbXMgdGhhdCBoYXZlXHJcbiAgICAgKiBjaGFuZ2VkIHNpbmNlIHRoZSBsYXN0IGRyYXcuXHJcbiAgICAgKiBAcmV0dXJucyB7UHJvbWlzZTxTdGF0ZT59XHJcbiAgICAgKiBAbWVtYmVyb2YgQ29tcG9uZW50XHJcbiAgICAgKi9cclxuICAgIHJlbmRlcihuZXdTdGF0ZTogU3RhdGUpOiBQcm9taXNlPFN0YXRlPiB7XHJcbiAgICAgICAgbGV0IG9sZFN0YXRlID0gdGhpcy5fc3RhdGU7XHJcbiAgICAgICAgbGV0IGlzSW5pdGlhbCA9IGZhbHNlO1xyXG4gICAgICAgIGlmICghdGhpcy5fc3RhdGUpIHtcclxuICAgICAgICAgICAgb2xkU3RhdGUgPSBuZXcgU3RhdGUoKTtcclxuICAgICAgICAgICAgaXNJbml0aWFsID0gdHJ1ZTtcclxuICAgICAgICAgICAgdGhpcy5fZWxlbWVudC5zdHlsZS5jc3NUZXh0ID0gbnVsbDsgLy8gY2xlYXIgaW5saW5lIHN0bHlsZXNcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBuZXdTdGF0ZSA9IHRoaXMubWVyZ2UobmV3U3RhdGUsIG9sZFN0YXRlKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgICAgICAgIGlmICghdGhpcy5fZWxlbWVudCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fbG9nZ2VyLmVycm9yKGBFbGVtZW50IGlzIHVuZGVmaW5lZC4gIFVzZSBzZXRFbGVtZW50KCkgYmVmb3JlIGNhbGxpbmcgcmVuZGVyKCkuYClcclxuICAgICAgICAgICAgICAgIHJlamVjdChvbGRTdGF0ZSk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHRoaXMuY2hhbmdlQ2xhc3NOYW1lKG5ld1N0YXRlLnN0YXRlQ2xhc3NOYW1lLCBvbGRTdGF0ZS5zdGF0ZUNsYXNzTmFtZSk7XHJcbiAgICAgICAgICAgIHRoaXMuY2hhbmdlQ2xhc3NOYW1lKG5ld1N0YXRlLm9rQ2xhc3NOYW1lLCBvbGRTdGF0ZS5va0NsYXNzTmFtZSk7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGljUHJvcGVydGllcyhuZXdTdGF0ZSwgb2xkU3RhdGUsIGlzSW5pdGlhbCk7XHJcblxyXG4gICAgICAgICAgICAvLyBFeGl0IGhlcmUgaWYgd2UgYXJlIGluIHRoZSBpbml0YWwgc3RhdGVcclxuICAgICAgICAgICAgaWYgKGlzSW5pdGlhbCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fbG9nZ2VyLmxvZyhgW0luaXRpYWwgU3RhdGVdWyMke3RoaXMuX2VsZW1lbnQuaWR9XTogICR7SlNPTi5zdHJpbmdpZnkobmV3U3RhdGUpfSBdYCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9zdGF0ZSA9IG5ld1N0YXRlO1xyXG4gICAgICAgICAgICAgICAgcmVzb2x2ZShuZXdTdGF0ZSk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC8vIFN0YXJ0IHRoZSBhbmltYXRvciB0byBhbmltYXRlIGFueSBhbmltYXRhYmxlIHByb3BlcnRpZXNcclxuICAgICAgICAgICAgaWYgKHRoaXMuX2FuaW1hdG9yKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgbjogbnVtYmVyID0gRGF0ZS5ub3coKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLl9hbmltYXRvci5hbmltYXRlKG4sIG5ld1N0YXRlLCBvbGRTdGF0ZSlcclxuICAgICAgICAgICAgICAgICAgICAudGhlbigoZmluaXNoZWQpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGZpbmlzaGVkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9sb2dnZXIubG9nKGBbVXBkYXRlZCBTdGF0ZV1bIyR7dGhpcy5fZWxlbWVudC5pZH1dOiAgJHtKU09OLnN0cmluZ2lmeShuZXdTdGF0ZSl9IF1gKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX3N0YXRlID0gbmV3U3RhdGU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlKG5ld1N0YXRlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8vIE5vIGFuaW1hdG9yLCBzbyBqdXN0IHJlc29sdmVcclxuICAgICAgICAgICAgdGhpcy5fc3RhdGUgPSBuZXdTdGF0ZTtcclxuICAgICAgICAgICAgcmVzb2x2ZShuZXdTdGF0ZSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBSZXR1cm5zIHRydWUgaWYgbmFtZSBpcyBhIHN0eWxlIHRoYXQgY2FuIGJlIGFuaW1hdGVkXHJcbiAgICAgKiBAcGFyYW0gbmFtZSBzdHlsZSBuYW1lXHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgaXNBbmltYXRlZFN0eWxlKG5hbWU6IHN0cmluZyk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiBTdGF0ZS5hbmltYXRlZCgnc3R5bGUuJyArIG5hbWUpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogU2V0cyB0aGUgbmV3IGNsYXNzIG5hbWUgaWYgaXQgaXMgZGlmZmVyZW50IGZyb20gdGhlIG9sZCBjbGFzcyBuYW1lXHJcbiAgICAgKiBAcGFyYW0gbmV3Q2xhc3Mgc3RyaW5nXHJcbiAgICAgKiBAcGFyYW0gb2xkQ2xhc3Mgc3RyaW5nXHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgY2hhbmdlQ2xhc3NOYW1lKG5ld0NsYXNzOiBzdHJpbmcsIG9sZENsYXNzOiBzdHJpbmcpOiB2b2lkIHtcclxuICAgICAgICBpZiAobmV3Q2xhc3MgJiYgbmV3Q2xhc3MgIT0gb2xkQ2xhc3MpIHtcclxuICAgICAgICAgICAgRWxlbWVudEhlbHBlci5jaGFuZ2VDbGFzcyh0aGlzLl9lbGVtZW50LCBuZXdDbGFzcywgb2xkQ2xhc3MpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFNldHMgdGhlIHN0YXRpYyBwcm9wZXJ0aWVzIG9mIHRoZSBlbGVtZW50LiBTdGF0aWMgcHJvcGVydGllcyBhcmU6XHJcbiAgICAgKiAxLiBBbGwgcHJvcGVydGllcyBpZiBhbiBhbmltYXRvciBpc24ndCBwcmVzZW50XHJcbiAgICAgKiAyLiBTdHlsZXMgdGhhdCBhcmUgbm90IGFuaW1hdGVkXHJcbiAgICAgKiAzLiBBbGwgcHJvcGVydGllcyBpZiB0aGlzIGlzIHRoZSBpbml0aWFsIHNldHVwXHJcbiAgICAgKiBAcGFyYW0gbmV3U3RhdGUgU3RhdGVcclxuICAgICAqIEBwYXJhbSBvbGRTdGF0ZSBTdGF0ZSAgXHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgc2V0U3RhdGljUHJvcGVydGllcyhuZXdTdGF0ZTogU3RhdGUsIG9sZFN0YXRlOiBTdGF0ZSwgaXNJbml0aWFsOiBib29sZWFuKTogdm9pZCB7XHJcbiAgICAgICAgLy8gTG9vcCB0aHJvdWdoIG5vbiBhbmltYXRhYmxlIHByb3BlcnRpZXMgb24gc3R5bGUgYW5kIHNldCB0aGVtXHJcbiAgICAgICAgZm9yIChsZXQgbmFtZSBpbiBuZXdTdGF0ZS5zdHlsZSkge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5fYW5pbWF0b3IgJiYgKHRoaXMuaXNBbmltYXRlZFN0eWxlKG5hbWUpICYmIG5ld1N0YXRlLnN0eWxlW25hbWVdICE9PSBudWxsKSAmJiAhaXNJbml0aWFsKVxyXG4gICAgICAgICAgICAgICAgY29udGludWU7IFxyXG5cclxuICAgICAgICAgICAgbGV0IG5zID0gbmV3U3RhdGUuc3R5bGVbbmFtZV07XHJcbiAgICAgICAgICAgIGxldCBvcyA9IG9sZFN0YXRlLnN0eWxlW25hbWVdO1xyXG5cclxuICAgICAgICAgICAgaWYgKG5zID09PSBvcylcclxuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xyXG5cclxuICAgICAgICAgICAgaWYgKFN0YXRlLmFuaW1hdGVkKCdzdHlsZS4nICsgbmFtZSkgJiYgIW5zLm1hdGNoKC8lfHB4JC8pKVxyXG4gICAgICAgICAgICAgICAgbnMgPSBucyArICdweCc7XHJcblxyXG4gICAgICAgICAgICB0aGlzLl9lbGVtZW50LnN0eWxlW25hbWVdID0gbnM7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdGVwID0gKGRlbHRhOiBudW1iZXIsIGFyZ3M6IGFueVtdKSA9PiB7XHJcbiAgICAgICAgLy8gTG9vcCB0aHJvdWdoIHZhbHVlcyBhbmQgbWFrZSBsaXZlIGNoYW5nZXMgdG8gZWxlbWVudFxyXG4gICAgICAgIHZhciBuZXdTdGF0ZSA9IGFyZ3NbMF07XHJcbiAgICAgICAgdmFyIG9sZFN0YXRlID0gYXJnc1sxXTtcclxuICAgICAgICBmb3IgKGxldCBuYW1lIGluIG5ld1N0YXRlLnN0eWxlKSB7XHJcbiAgICAgICAgICAgIGlmICghU3RhdGUuYW5pbWF0ZWQoJ3N0eWxlLicgKyBuYW1lKSlcclxuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xyXG5cclxuICAgICAgICAgICAgbGV0IG5zID0gbmV3U3RhdGUuc3R5bGVbbmFtZV07XHJcbiAgICAgICAgICAgIGxldCBvcyA9IG9sZFN0YXRlLnN0eWxlW25hbWVdO1xyXG5cclxuICAgICAgICAgICAgaWYgKG5zID09PSBvcylcclxuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xyXG5cclxuICAgICAgICAgICAgbGV0IG5zdiA9IHBhcnNlRmxvYXQobnMpO1xyXG4gICAgICAgICAgICBsZXQgb3N2ID0gcGFyc2VGbG9hdChvcyk7XHJcblxyXG4gICAgICAgICAgICBpZiAoaXNGaW5pdGUobnN2KSAmJiBpc0Zpbml0ZShvc3YpKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgdmFsdWUgPSAobnN2IC0gb3N2KSAqIGRlbHRhICsgb3N2ICsgJyc7XHJcbiAgICAgICAgICAgICAgICBpZiAoKCFpc0Zpbml0ZShucykgJiYgbnMubWF0Y2goL3B4JC8pKSB8fCAoIWlzRmluaXRlKG9zKSAmJiBvcy5tYXRjaCgvcHgkLykpKVxyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlID0gYCR7dmFsdWV9cHhgO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fZWxlbWVudC5zdHlsZVtuYW1lXSA9IHZhbHVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21wb25lbnRzL0NvbXBvbmVudC50cyIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIEVsZW1lbnRIZWxwZXIge1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQ2hhbmdlcyBhbiBlbGVtZW50cyBjbGFzcyBieSBhZGRpbmcgdGhlIFwiYWRkQ2xhc3NcIiBzdHJpbmcgYW5kL29yXHJcbiAgICAgKiByZW1vdmluZyB0aGUgXCJyZW1vdmVDbGFzc1wiIHN0cmluZ1xyXG4gICAgICogXHJcbiAgICAgKiBAc3RhdGljXHJcbiAgICAgKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBlbGVtZW50IFxyXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IG5ld0NsYXNzIFxyXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IG9sZENsYXNzIFxyXG4gICAgICogQG1lbWJlcm9mIEVsZW1lbnRLaXRcclxuICAgICAqL1xyXG4gICAgcHVibGljIHN0YXRpYyBjaGFuZ2VDbGFzcyhlbGVtZW50OiBIVE1MRWxlbWVudCwgYWRkQ2xhc3M/OiBzdHJpbmcsIHJlbW92ZUNsYXNzPzogc3RyaW5nKTogdm9pZCB7XHJcbiAgICAgICAgbGV0IGNsYXNzTGlzdCA9IGVsZW1lbnQuY2xhc3NOYW1lLnNwbGl0KCcgJyk7XHJcbiAgICAgICAgLy8gUmVtb3ZlIG9sZENsYXNzXHJcbiAgICAgICAgaWYocmVtb3ZlQ2xhc3MpIHtcclxuICAgICAgICAgICAgbGV0IG9sZEluZGV4ID0gY2xhc3NMaXN0LmluZGV4T2YocmVtb3ZlQ2xhc3MpO1xyXG4gICAgICAgICAgICBpZihvbGRJbmRleCA+PSAwKSB7XHJcbiAgICAgICAgICAgICAgICBjbGFzc0xpc3Quc3BsaWNlKG9sZEluZGV4LCAxKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBBZGQgbmV3Q2xhc3NcclxuICAgICAgICBpZihhZGRDbGFzcykge1xyXG4gICAgICAgICAgICBsZXQgbmV3SW5kZXggPSBjbGFzc0xpc3QuaW5kZXhPZihhZGRDbGFzcyk7XHJcbiAgICAgICAgICAgIGlmKG5ld0luZGV4IDwgMCkge1xyXG4gICAgICAgICAgICAgICAgY2xhc3NMaXN0LnB1c2goYWRkQ2xhc3MpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsZW1lbnQuY2xhc3NOYW1lID0gY2xhc3NMaXN0LmpvaW4oJyAnKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIHNldEd1aWRJZChlbGVtZW50OiBIVE1MRWxlbWVudCkge1xyXG4gICAgICAgIHZhciB1bmlxdWVJZCA9ICdvay1ndWlkLScgKyBNYXRoLnJhbmRvbSgpLnRvU3RyaW5nKDM2KS5zdWJzdHJpbmcoMikgKyAobmV3IERhdGUoKSkuZ2V0VGltZSgpLnRvU3RyaW5nKDM2KTtcclxuICAgICAgICBlbGVtZW50LmlkID0gdW5pcXVlSWQ7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBSZXR1cm5zIHRoZSBmaXJzdCBIVE1MIEVsZW1lbnQgbWF0Y2hlZCBieSBxdWVyeVxyXG4gICAgICogQHBhcmFtIHF1ZXJ5IHNlbGVjdG9yIHF1ZXJ5XHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgcXVlcnlFbGVtZW50KHF1ZXJ5OiBzdHJpbmcpOiBIVE1MRWxlbWVudCB7XHJcbiAgICAgICAgcmV0dXJuIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwocXVlcnkpWzBdIGFzIEhUTUxFbGVtZW50O1xyXG4gICAgfVxyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3V0aWwvRWxlbWVudEhlbHBlci50cyIsImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gXCIuL0NvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBJQW5pbWF0b3IgfSBmcm9tICdvdXRraXQtYW5pbWF0b3InO1xyXG5pbXBvcnQgeyBTdGF0ZSB9IGZyb20gXCIuLi9zdGF0ZS9TdGF0ZVwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRHJhZ2dhYmxlIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuXHJcbiAgICBwcml2YXRlIF9kcmFnUm9vdDogYm9vbGVhbjtcclxuICAgIHByaXZhdGUgX3g6IG51bWJlcjtcclxuICAgIHByaXZhdGUgX3k6IG51bWJlcjtcclxuICAgIHByaXZhdGUgX3RvcDogbnVtYmVyO1xyXG4gICAgcHJpdmF0ZSBfbGVmdDogbnVtYmVyO1xyXG4gICAgcHJpdmF0ZSBfcGFyZW50VG9wOiBudW1iZXI7XHJcbiAgICBwcml2YXRlIF9wYXJlbnRMZWZ0OiBudW1iZXI7XHJcbiAgICBwcml2YXRlIF9kaWZmWDogbnVtYmVyO1xyXG4gICAgcHJpdmF0ZSBfZGlmZlk6IG51bWJlcjtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihlbGVtZW50OiBzdHJpbmcpIHtcclxuICAgICAgICBzdXBlcihlbGVtZW50KTtcclxuXHJcbiAgICAgICAgLy8gU2V0dXAgZGVmYXVsdHNcclxuICAgICAgICB0aGlzLl9kcmFnUm9vdCA9IGZhbHNlO1xyXG5cclxuICAgICAgICAvLyBSZWxheSBldmVudHNcclxuICAgICAgICB0aGlzLnJlZ2lzdGVyRXZlbnQoJ2luaXQnLCAoKSA9PiB7IHJldHVybiB0aGlzLmluaXQoKSB9KTtcclxuICAgIH1cclxuXHJcbiAgICBkcmFnUm9vdChmbGFnOiBib29sZWFuKTogdGhpcyB7XHJcbiAgICAgICAgdGhpcy5fZHJhZ1Jvb3QgPSBmbGFnO1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG5cclxuICAgIGluaXQoKTogUHJvbWlzZTxTdGF0ZT4ge1xyXG4gICAgICAgIGxldCBzdGF0ZSA9IG5ldyBTdGF0ZSgpO1xyXG4gICAgICAgIHN0YXRlLm9rQ2xhc3NOYW1lID0gJ29rLWRyYWdnYWJsZSc7XHJcblxyXG4gICAgICAgIHRoaXMuZ2V0RWxlbWVudCgpLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIHRoaXMuc3RhcnREcmFnKTtcclxuICAgICAgICB0aGlzLmdldEVsZW1lbnQoKS5hZGRFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgKCkgPT4ge1xyXG4gICAgICAgICAgICBkb2N1bWVudC5vbm1vdXNlbW92ZSA9ICgpID0+IHt9O1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHJldHVybiB0aGlzLnJlbmRlcihzdGF0ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhcnREcmFnID0gKGV2ZW50OiBNb3VzZUV2ZW50KSA9PiB7XHJcbiAgICAgICAgbGV0IGRlID0gdGhpcy5nZXRFbGVtZW50KCk7XHJcbiAgICAgICAgaWYgKHRoaXMuX2RyYWdSb290KSB7XHJcbiAgICAgICAgICAgIGRlID0gdGhpcy5nZXRSb290KCkuZ2V0RWxlbWVudCgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQgcGFyZW50ID0gZGUucGFyZW50RWxlbWVudDtcclxuXHJcbiAgICAgICAgbGV0IHggPSBldmVudC5jbGllbnRYLFxyXG4gICAgICAgICAgICB5ID0gZXZlbnQuY2xpZW50WSxcclxuICAgICAgICAgICAgdG9wID0gZGUub2Zmc2V0VG9wLFxyXG4gICAgICAgICAgICBsZWZ0ID0gZGUub2Zmc2V0TGVmdCxcclxuICAgICAgICAgICAgZGVXaWR0aCA9IGRlLm9mZnNldFdpZHRoLFxyXG4gICAgICAgICAgICBkZUhlaWdodCA9IGRlLm9mZnNldEhlaWdodCxcclxuICAgICAgICAgICAgcGFyZW50VG9wID0gcGFyZW50Lm9mZnNldFRvcCxcclxuICAgICAgICAgICAgcGFyZW50TGVmdCA9IHBhcmVudC5vZmZzZXRMZWZ0LFxyXG4gICAgICAgICAgICBwYXJlbnRXaWR0aCA9IHBhcmVudC5vZmZzZXRXaWR0aCxcclxuICAgICAgICAgICAgcGFyZW50SGVpZ2h0ID1wYXJlbnQub2Zmc2V0SGVpZ2h0LFxyXG4gICAgICAgICAgICBkaWZmWCA9IHggLSBsZWZ0LFxyXG4gICAgICAgICAgICBkaWZmWSA9IHkgLSB0b3A7XHJcblxyXG4gICAgICAgIGRvY3VtZW50Lm9ubW91c2Vtb3ZlID0gKGV2ZW50OiBNb3VzZUV2ZW50KSA9PiB7XHJcbiAgICAgICAgICAgIGxldCB4ID0gZXZlbnQuY2xpZW50WCxcclxuICAgICAgICAgICAgICAgIHkgPSBldmVudC5jbGllbnRZLFxyXG4gICAgICAgICAgICAgICAgYVggPSB4IC0gZGlmZlgsXHJcbiAgICAgICAgICAgICAgICBhWSA9IHkgLSBkaWZmWTtcclxuICAgICAgICAgICAgaWYgKGFYIDwgMCkgYVggPSAwO1xyXG4gICAgICAgICAgICBpZiAoYVkgPCAwKSBhWSA9IDA7XHJcbiAgICAgICAgICAgIGlmIChhWCArIGRlV2lkdGggPiBwYXJlbnRXaWR0aCkgYVggPSBwYXJlbnRXaWR0aCAtIGRlV2lkdGg7XHJcbiAgICAgICAgICAgIGlmIChhWSArIGRlSGVpZ2h0ID4gcGFyZW50SGVpZ2h0KSBhWSA9IHBhcmVudEhlaWdodCAtIGRlSGVpZ2h0O1xyXG5cclxuICAgICAgICAgICAgdGhpcy5tb3ZlKGRlLCBhWCwgYVkpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBtb3ZlKGVsZW1lbnQ6IEhUTUxFbGVtZW50LCB4OiBudW1iZXIsIHk6IG51bWJlcikgeyBcclxuICAgICAgICBlbGVtZW50LnN0eWxlLmxlZnQgPSBgJHt4fXB4YDtcclxuICAgICAgICBlbGVtZW50LnN0eWxlLnRvcCA9IGAke3l9cHhgO1xyXG4gICAgfVxyXG5cclxuICAgIHN0b3BEcmFnKCkgeyB9XHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tcG9uZW50cy9EcmFnZ2FibGUudHMiLCJpbXBvcnQgeyBTdGF0ZSB9IGZyb20gJy4uL3N0YXRlL1N0YXRlJztcclxuaW1wb3J0IHsgSUFuaW1hdG9yIH0gZnJvbSAnb3V0a2l0LWFuaW1hdG9yJztcclxuaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSBcIi4vQ29tcG9uZW50XCI7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIERyYXdlck9wdGlvbnMge1xyXG4gICAgZG9jaz86IHN0cmluZyxcclxuICAgIG1pblNpemU/OiBudW1iZXIsXHJcbiAgICBtYXhTaXplPzogbnVtYmVyLFxyXG4gICAgaXNPcGVuPzogYm9vbGVhblxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEcmF3ZXIgZXh0ZW5kcyBDb21wb25lbnQge1xyXG5cclxuICAgIHByaXZhdGUgX2RvY2s6IHN0cmluZztcclxuICAgIHByaXZhdGUgX21heFNpemU6IG51bWJlcjtcclxuICAgIHByaXZhdGUgX21pblNpemU6IG51bWJlcjtcclxuICAgIHByaXZhdGUgX2lzT3BlbjogYm9vbGVhbjtcclxuICAgIHByaXZhdGUgX2RvY2tQb3NpdGlvbnM6IHN0cmluZ1tdID0gWydsZWZ0JywgJ3JpZ2h0JywgJ3RvcCcsICdib3R0b20nXTtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihlbGVtZW50OiBzdHJpbmcsIG9wdGlvbnM/OiBEcmF3ZXJPcHRpb25zKSB7XHJcbiAgICAgICAgc3VwZXIoZWxlbWVudCk7XHJcblxyXG4gICAgICAgIC8vIFNldHVwIGRlZmF1bHRzXHJcbiAgICAgICAgdGhpcy5fZG9jayA9ICdsZWZ0JztcclxuICAgICAgICB0aGlzLl9taW5TaXplID0gMDtcclxuICAgICAgICB0aGlzLl9tYXhTaXplID0gMjgwO1xyXG4gICAgICAgIHRoaXMuX2lzT3BlbiA9IGZhbHNlO1xyXG5cclxuICAgICAgICAvLyBSZWxheSBldmVudHNcclxuICAgICAgICB0aGlzLnJlZ2lzdGVyRXZlbnQoJ29uJywgKCkgPT4geyByZXR1cm4gdGhpcy5vbigpIH0pO1xyXG4gICAgICAgIHRoaXMucmVnaXN0ZXJFdmVudCgnb2ZmJywgKCkgPT4geyByZXR1cm4gdGhpcy5vZmYoKSB9KTtcclxuICAgICAgICB0aGlzLnJlZ2lzdGVyRXZlbnQoJ3RvZ2dsZScsICgpID0+IHsgcmV0dXJuIHRoaXMudG9nZ2xlKCkgfSk7XHJcbiAgICAgICAgdGhpcy5yZWdpc3RlckV2ZW50KCdpbml0JywgKCkgPT4geyByZXR1cm4gdGhpcy5pbml0KCkgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBDaGFuZ2UgdGhlIGRvY2sgcG9zaXRpb24gb2YgdGhlIGRyYXdlci4gIENhbGxpbmcgdGhpcyBmdW5jdGlvbiByZXNldHMgdGhlXHJcbiAgICAgKiBzdGF0ZSBhbmQgcmVwb3NpdGlvbnMgdGhlIGRyYXdlciBpbnN0YW50bHkuXHJcbiAgICAgKiBcclxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBkb2NrIFxyXG4gICAgICogQHJldHVybnMge3RoaXN9IFxyXG4gICAgICogQG1lbWJlcm9mIERyYXdlckNvbXBvbmVudFxyXG4gICAgICovXHJcbiAgICBkb2NrKGRvY2s6IHN0cmluZyk6IFByb21pc2U8U3RhdGU+IHtcclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5fZG9ja1Bvc2l0aW9ucy5pbmRleE9mKGRvY2spIDwgMCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fbG9nZ2VyLmVycm9yKGBcIiR7ZG9ja31cIiBpcyBub3QgYSB2YWxpZCBkb2NrIHBvc2l0aW9uLiAgVmFsaWQgcG9zaXRpb25zIGFyZSAke3RoaXMuX2RvY2tQb3NpdGlvbnMuam9pbignLCAnKX1gKTtcclxuICAgICAgICAgICAgICAgIHJlamVjdCgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnJlbGF5KCdvZmYnKS50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuX2RvY2sgPSBkb2NrO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fc3RhdGUgPSBudWxsO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuaW5pdCgpO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgbWluU2l6ZShuOiBudW1iZXIpOiB0aGlzIHtcclxuICAgICAgICBpZiAobiA8IDApIHtcclxuICAgICAgICAgICAgdGhpcy5fbG9nZ2VyLmVycm9yKGBtaW5TaXplIG51bWJlciBtdXN0IGJlIGdyZWF0ZXIgdGhhbiBvciBlcXVhbCB0byB6ZXJvLmApO1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcztcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5fbWluU2l6ZSA9IG47XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgbWF4U2l6ZShuOiBudW1iZXIpOiB0aGlzIHtcclxuICAgICAgICBpZiAobiA8IDApIHtcclxuICAgICAgICAgICAgdGhpcy5fbG9nZ2VyLmVycm9yKGBtYXhTaXplIG51bWJlciBtdXN0IGJlIGdyZWF0ZXIgdGhhbiBvciBlcXVhbCB0byB6ZXJvLmApO1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcztcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5fbWF4U2l6ZSA9IG47XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBTZXRzIHRoZSBpbml0aWFsIHN0YXRlXHJcbiAgICAgKiBAcmV0dXJucyB7UHJvbWlzZTxTdGF0ZT59IFxyXG4gICAgICovXHJcbiAgICBpbml0KCk6IFByb21pc2U8U3RhdGU+IHtcclxuICAgICAgICBsZXQgc3RhdGUgPSBuZXcgU3RhdGUoKTtcclxuICAgICAgICBzdGF0ZS5va0NsYXNzTmFtZSA9ICdvay1kcmF3ZXInO1xyXG4gICAgICAgIHN0YXRlLnN0eWxlLnBvc2l0aW9uID0gJ2ZpeGVkJztcclxuICAgICAgICBzdGF0ZS5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcclxuICAgICAgICBzdGF0ZS5zdHlsZS56SW5kZXggPSAnMTAwMDAnXHJcblxyXG4gICAgICAgIGlmICh0aGlzLmlzTGVmdCgpKSB7XHJcbiAgICAgICAgICAgIHN0YXRlLnN0eWxlLndpZHRoID0gYCR7dGhpcy5fbWF4U2l6ZX1weGA7XHJcbiAgICAgICAgICAgIHN0YXRlLnN0eWxlLmhlaWdodCA9IGAke3RoaXMuZ2V0RWxlbWVudCgpLnBhcmVudEVsZW1lbnQub2Zmc2V0SGVpZ2h0fXB4YDtcclxuICAgICAgICAgICAgc3RhdGUuc3R5bGUubGVmdCA9IGAtJHt0aGlzLl9tYXhTaXplfXB4YDtcclxuICAgICAgICAgICAgc3RhdGUuc3R5bGUudG9wID0gJzAnO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5pc1JpZ2h0KCkpIHtcclxuICAgICAgICAgICAgc3RhdGUuc3R5bGUud2lkdGggPSBgJHt0aGlzLl9tYXhTaXplfXB4YDtcclxuICAgICAgICAgICAgc3RhdGUuc3R5bGUuaGVpZ2h0ID0gYCR7dGhpcy5nZXRFbGVtZW50KCkucGFyZW50RWxlbWVudC5vZmZzZXRIZWlnaHR9cHhgO1xyXG4gICAgICAgICAgICBzdGF0ZS5zdHlsZS5yaWdodCA9IGAtJHt0aGlzLl9tYXhTaXplfXB4YDtcclxuICAgICAgICAgICAgc3RhdGUuc3R5bGUudG9wID0gJzAnO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5pc1RvcCgpKSB7XHJcbiAgICAgICAgICAgIHN0YXRlLnN0eWxlLndpZHRoID0gYCR7dGhpcy5nZXRFbGVtZW50KCkucGFyZW50RWxlbWVudC5vZmZzZXRXaWR0aH1weGA7XHJcbiAgICAgICAgICAgIHN0YXRlLnN0eWxlLmhlaWdodCA9IGAke3RoaXMuX21heFNpemV9cHhgO1xyXG4gICAgICAgICAgICBzdGF0ZS5zdHlsZS50b3AgPSBgLSR7dGhpcy5fbWF4U2l6ZX1weGA7XHJcbiAgICAgICAgICAgIHN0YXRlLnN0eWxlLmxlZnQgPSAnMCc7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLmlzQm90dG9tKCkpIHtcclxuICAgICAgICAgICAgc3RhdGUuc3R5bGUud2lkdGggPSBgJHt0aGlzLmdldEVsZW1lbnQoKS5wYXJlbnRFbGVtZW50Lm9mZnNldFdpZHRofXB4YDtcclxuICAgICAgICAgICAgc3RhdGUuc3R5bGUuaGVpZ2h0ID0gYCR7dGhpcy5fbWF4U2l6ZX1weGA7XHJcbiAgICAgICAgICAgIHN0YXRlLnN0eWxlLmJvdHRvbSA9IGAtJHt0aGlzLl9tYXhTaXplfXB4YDtcclxuICAgICAgICAgICAgc3RhdGUuc3R5bGUubGVmdCA9ICcwJztcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRoaXMucmVuZGVyKHN0YXRlKTtcclxuICAgIH1cclxuXHJcbiAgICB0b2dnbGUoKTogUHJvbWlzZTxTdGF0ZT4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9pc09wZW4gPyB0aGlzLm9mZigpIDogdGhpcy5vbigpO1xyXG4gICAgfVxyXG5cclxuICAgIG9uKCk6IFByb21pc2U8U3RhdGU+IHtcclxuICAgICAgICBpZiAodGhpcy5faXNPcGVuKVxyXG4gICAgICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmVzb2x2ZSh0aGlzLl9zdGF0ZSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMuX2lzT3BlbiA9IHRydWU7XHJcblxyXG4gICAgICAgIGxldCBzdGF0ZSA9IG5ldyBTdGF0ZSgpO1xyXG4gICAgICAgIGlmICh0aGlzLmlzTGVmdCgpKSB7XHJcbiAgICAgICAgICAgIHN0YXRlLnN0eWxlLmxlZnQgPSAnMCc7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLmlzUmlnaHQoKSkge1xyXG4gICAgICAgICAgICBzdGF0ZS5zdHlsZS5yaWdodCA9ICcwJztcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMuaXNUb3AoKSkge1xyXG4gICAgICAgICAgICBzdGF0ZS5zdHlsZS50b3AgPSAnMCc7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLmlzQm90dG9tKCkpIHtcclxuICAgICAgICAgICAgc3RhdGUuc3R5bGUuYm90dG9tID0gJzAnXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHN0YXRlLnN0YXRlQ2xhc3NOYW1lID0gJ29rLW9uJztcclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXMucmVuZGVyKHN0YXRlKTtcclxuICAgIH1cclxuXHJcbiAgICBvZmYoKTogUHJvbWlzZTxTdGF0ZT4ge1xyXG4gICAgICAgIGlmICghdGhpcy5faXNPcGVuKVxyXG4gICAgICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmVzb2x2ZSh0aGlzLl9zdGF0ZSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMuX2lzT3BlbiA9IGZhbHNlO1xyXG5cclxuICAgICAgICBsZXQgc3RhdGUgPSBuZXcgU3RhdGUoKTtcclxuICAgICAgICBpZiAodGhpcy5pc0xlZnQoKSkge1xyXG4gICAgICAgICAgICBzdGF0ZS5zdHlsZS5sZWZ0ID0gYC0ke3RoaXMuX21heFNpemV9cHhgO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5pc1JpZ2h0KCkpIHtcclxuICAgICAgICAgICAgc3RhdGUuc3R5bGUucmlnaHQgPSBgLSR7dGhpcy5fbWF4U2l6ZX1weGA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLmlzVG9wKCkpIHtcclxuICAgICAgICAgICAgc3RhdGUuc3R5bGUudG9wID0gYC0ke3RoaXMuX21heFNpemV9cHhgO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5pc0JvdHRvbSgpKSB7XHJcbiAgICAgICAgICAgIHN0YXRlLnN0eWxlLmJvdHRvbSA9IGAtJHt0aGlzLl9tYXhTaXplfXB4YDtcclxuICAgICAgICB9XHJcbiAgICAgICAgc3RhdGUuc3RhdGVDbGFzc05hbWUgPSAnb2stb2ZmJztcclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXMucmVuZGVyKHN0YXRlKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGlzTGVmdCgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZG9jayA9PT0gJ2xlZnQnO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgaXNSaWdodCgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZG9jayA9PT0gJ3JpZ2h0JztcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGlzVG9wKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9kb2NrID09PSAndG9wJztcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGlzQm90dG9tKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9kb2NrID09PSAnYm90dG9tJztcclxuICAgIH1cclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21wb25lbnRzL0RyYXdlci50cyIsImltcG9ydCB7IElBbmltYXRvciB9IGZyb20gJ291dGtpdC1hbmltYXRvcic7XHJcbmltcG9ydCB7IElDb21wb25lbnQsIENvbXBvbmVudCB9IGZyb20gXCIuL0NvbXBvbmVudFwiO1xyXG5pbXBvcnQgRWxlbWVudEhlbHBlciBmcm9tIFwiLi4vdXRpbC9FbGVtZW50SGVscGVyXCI7XHJcbmltcG9ydCB7IFN0YXRlIH0gZnJvbSBcIi4uL3N0YXRlL1N0YXRlXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBIb3Jpem9udGFsTGF5b3V0IGV4dGVuZHMgQ29tcG9uZW50IHtcclxuXHJcbiAgICBwcml2YXRlIGZpeGVkQ2hpbGRyZW46IEFycmF5PElDb21wb25lbnQ+O1xyXG4gICAgcHJpdmF0ZSBwZXJjdENoaWxkcmVuOiBBcnJheTxJQ29tcG9uZW50PjtcclxuICAgIHByaXZhdGUgZmx1aWRDaGlsZHJlbjogQXJyYXk8SUNvbXBvbmVudD47XHJcblxyXG4gICAgY29uc3RydWN0b3IoZWxlbWVudDogc3RyaW5nKSB7XHJcbiAgICAgICAgc3VwZXIoZWxlbWVudCk7XHJcbiAgICAgICAgdGhpcy5yZXNldENoaWxkcmVuKCk7XHJcbiAgICAgICAgdGhpcy5yZWdpc3RlckV2ZW50KCdpbml0JywgKCkgPT4geyByZXR1cm4gdGhpcy5pbml0KCkgfSk7XHJcbiAgICAgICAgdGhpcy5zZXRBbmltYXRvcihudWxsKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEZvciBlYWNoIGNoaWxkIGVsZW1lbnQgaW4gZWxlbWVudHMsIHNldCB1cCBhIG5ldyBDb21wb25lbnQgZmlndXJlIFxyXG4gICAgICogb3V0IGlmIGl0IGhhcyBhIHdpZHRoIHNldCBhcyBhIHBpeGVsIHZhbHVlIChmaXhlZCBjaGlsZCksIGEgMTAwJVxyXG4gICAgICogdmFsdWUgKGZsdWlkIGNoaWxkKSwgb3IgYSB2YWx1ZSBzZXQgdG8gYSBzcGVjaWZpYyBwZXJjZW50YWdlIFxyXG4gICAgICogKHBlcmNlbnRhZ2UgY2hpbGQpXHJcbiAgICAgKiBcclxuICAgICAqIEByZXR1cm5zIFxyXG4gICAgICogQG1lbWJlcm9mIEhvcml6b250YWxMYXlvdXRDb21wb25lbnRcclxuICAgICAqL1xyXG4gICAgaW5pdCgpIHtcclxuICAgICAgICBsZXQgZWwgPSB0aGlzLmdldEVsZW1lbnQoKTtcclxuICAgICAgICB0aGlzLnJlc2V0Q2hpbGRyZW4oKTtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGVsLmNoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGxldCBjaGlsZCA9IGVsLmNoaWxkcmVuW2ldIGFzIEhUTUxFbGVtZW50O1xyXG4gICAgICAgICAgICBpZiAoIWNoaWxkLmlkKVxyXG4gICAgICAgICAgICAgICAgRWxlbWVudEhlbHBlci5zZXRHdWlkSWQoY2hpbGQpO1xyXG4gICAgICAgICAgICBsZXQgY2hpbGRDb21wb25lbnQgPSBuZXcgQ29tcG9uZW50KFwiI1wiICsgY2hpbGQuaWQpO1xyXG4gICAgICAgICAgICBjaGlsZENvbXBvbmVudC5zZXRBbmltYXRvcihudWxsKTtcclxuICAgICAgICAgICAgbGV0IHNpemUgPSBjaGlsZC5nZXRBdHRyaWJ1dGUoJ2RhdGEtc2l6ZScpIHx8ICcxMDAlJztcclxuICAgICAgICAgICAgaWYgKHNpemUgPT09ICcxMDAlJykge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5mbHVpZENoaWxkcmVuLnB1c2goY2hpbGRDb21wb25lbnQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2UgaWYgKHNpemUubWF0Y2goL15bXFxkXSslJC8pKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnBlcmN0Q2hpbGRyZW4ucHVzaChjaGlsZENvbXBvbmVudCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmZpeGVkQ2hpbGRyZW4ucHVzaChjaGlsZENvbXBvbmVudCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY2hpbGRDb21wb25lbnQucmVuZGVyKHsgc3R5bGU6IHsgaGVpZ2h0OiAnMTAwJScsIHdpZHRoOiBzaXplLCBvdmVyZmxvdzogJ2hpZGRlbicsIGZsb2F0OiAnbGVmdCcgfSB9KVxyXG4gICAgICAgICAgICB0aGlzLmFkZENoaWxkKGNoaWxkQ29tcG9uZW50KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdyZXNpemUnLCB0aGlzLnJlc2l6ZS5iaW5kKHRoaXMpKTtcclxuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgdGhpcy5yZXNpemUuYmluZCh0aGlzKSk7XHJcblxyXG4gICAgICAgIGxldCBzdGF0ZSA9IG5ldyBTdGF0ZSgpO1xyXG4gICAgICAgIHN0YXRlLnN0eWxlLmhlaWdodCA9IHRoaXMuZ2V0RWxlbWVudCgpLnBhcmVudEVsZW1lbnQub2Zmc2V0SGVpZ2h0ICsgJ3B4JztcclxuICAgICAgICBzdGF0ZS5zdHlsZS53aWR0aCA9IHRoaXMuZ2V0RWxlbWVudCgpLnBhcmVudEVsZW1lbnQub2Zmc2V0V2lkdGggKyAncHgnO1xyXG4gICAgICAgIHN0YXRlLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XHJcbiAgICAgICAgc3RhdGUuc3R5bGUub3ZlcmZsb3cgPSBcImhpZGRlblwiO1xyXG4gICAgICAgIHN0YXRlLnN0eWxlLmZsb2F0ID0gXCJsZWZ0XCJcclxuICAgICAgICByZXR1cm4gdGhpcy5yZW5kZXIoc3RhdGUpO1xyXG4gICAgfVxyXG5cclxuICAgIHJlc2l6ZSgpIHtcclxuICAgICAgICBsZXQgc3RhdGUgPSBuZXcgU3RhdGUoKTtcclxuICAgICAgICBzdGF0ZS5zdHlsZS5oZWlnaHQgPSB0aGlzLmdldEVsZW1lbnQoKS5wYXJlbnRFbGVtZW50Lm9mZnNldEhlaWdodCArICdweCc7XHJcbiAgICAgICAgc3RhdGUuc3R5bGUud2lkdGggPSB0aGlzLmdldEVsZW1lbnQoKS5wYXJlbnRFbGVtZW50Lm9mZnNldFdpZHRoICsgJ3B4JztcclxuICAgICAgICByZXR1cm4gdGhpcy5yZW5kZXIoc3RhdGUpO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcihuZXdTdGF0ZTogU3RhdGUpOiBQcm9taXNlPGFueT4ge1xyXG4gICAgICAgIGxldCBwcm9taXNlcyA9IFtdO1xyXG4gICAgICAgIHByb21pc2VzLnB1c2goc3VwZXIucmVuZGVyKG5ld1N0YXRlKSk7XHJcblxyXG4gICAgICAgIHZhciB0b3RhbFdpZHRoID0gdGhpcy5nZXRFbGVtZW50KCkub2Zmc2V0V2lkdGg7XHJcbiAgICAgICAgdmFyIGZsdWlkV2lkdGggPSB0b3RhbFdpZHRoO1xyXG4gICAgICAgIHZhciB0b3RhbEhlaWdodCA9IHRoaXMuZ2V0RWxlbWVudCgpLm9mZnNldEhlaWdodDtcclxuXHJcbiAgICAgICAgLy8gRHJhdyB0aGUgZml4ZWQgY2hpbGRyZW5cclxuICAgICAgICBmb3IgKGxldCBlbCBvZiB0aGlzLmZpeGVkQ2hpbGRyZW4pIHtcclxuICAgICAgICAgICAgZmx1aWRXaWR0aCAtPSBlbC5nZXRFbGVtZW50KCkub2Zmc2V0V2lkdGg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIERyYXcgdGhlIHBlcmNlbnRhZ2UgY2hpbGRyZW5cclxuICAgICAgICBmb3IgKGxldCBlbCBvZiB0aGlzLnBlcmN0Q2hpbGRyZW4pIHtcclxuICAgICAgICAgICAgbGV0IHdpZHRoID0gKHBhcnNlRmxvYXQoZWwuZ2V0RWxlbWVudCgpLmdldEF0dHJpYnV0ZSgnZGF0YS1zaXplJykpIC8gMTAwICogZmx1aWRXaWR0aCk7XHJcbiAgICAgICAgICAgIGZsdWlkV2lkdGggLT0gd2lkdGg7XHJcbiAgICAgICAgICAgIGVsLnJlbmRlcih7IHN0eWxlOiB7IHdpZHRoOiB3aWR0aCArICdweCcgfSB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gRHJhdyB0aGUgZmx1aWQgY2hpbGRyZW5cclxuICAgICAgICBmb3IgKGxldCBlbCBvZiB0aGlzLmZsdWlkQ2hpbGRyZW4pIHtcclxuICAgICAgICAgICAgdmFyIHdpZHRoID0gZmx1aWRXaWR0aCAvIHRoaXMuZmx1aWRDaGlsZHJlbi5sZW5ndGg7XHJcbiAgICAgICAgICAgIHByb21pc2VzLnB1c2goZWwucmVuZGVyKHsgc3R5bGU6IHsgd2lkdGg6IHdpZHRoICsgJ3B4JyB9IH0pKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIFByb21pc2UuYWxsKHByb21pc2VzKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFNldHMgdGhlIGNoaWRyZW4gYXJyYXlzIHRvIG5ldyBhcnJheXMuXHJcbiAgICAgKiBAcHJpdmF0ZVxyXG4gICAgICogQG1lbWJlcm9mIEhvcml6b250YWxMYXlvdXRDb21wb25lbnRcclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSByZXNldENoaWxkcmVuKCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuZml4ZWRDaGlsZHJlbiA9IG5ldyBBcnJheTxJQ29tcG9uZW50PigpO1xyXG4gICAgICAgIHRoaXMucGVyY3RDaGlsZHJlbiA9IG5ldyBBcnJheTxJQ29tcG9uZW50PigpO1xyXG4gICAgICAgIHRoaXMuZmx1aWRDaGlsZHJlbiA9IG5ldyBBcnJheTxJQ29tcG9uZW50PigpO1xyXG4gICAgfVxyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbXBvbmVudHMvSG9yaXpvbnRhbExheW91dC50cyIsImltcG9ydCB7IFN0YXRlIH0gZnJvbSBcIi4uL3N0YXRlL1N0YXRlXCI7XHJcbmltcG9ydCB7IElBbmltYXRvciB9IGZyb20gJ291dGtpdC1hbmltYXRvcic7XHJcbmltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gXCIuL0NvbXBvbmVudFwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgT3ZlcmxheSBleHRlbmRzIENvbXBvbmVudCB7XHJcblxyXG4gICAgcHJpdmF0ZSBfY29sb3I6IHN0cmluZztcclxuICAgIHByaXZhdGUgX29wYWNpdHk6IG51bWJlcjtcclxuICAgIHByaXZhdGUgX2lzT246IGJvb2xlYW47XHJcblxyXG4gICAgY29uc3RydWN0b3IoZWxlbWVudDogc3RyaW5nKSB7XHJcbiAgICAgICAgc3VwZXIoZWxlbWVudCk7XHJcblxyXG4gICAgICAgIC8vIFNldHVwIGRlZmF1bHRzXHJcbiAgICAgICAgdGhpcy5fb3BhY2l0eSA9IC44O1xyXG4gICAgICAgIHRoaXMuX2NvbG9yID0gJyMwMDAwMDAnO1xyXG4gICAgICAgIHRoaXMuX2lzT24gPSBmYWxzZTtcclxuXHJcbiAgICAgICAgLy8gUmVsYXkgZXZlbnRzXHJcbiAgICAgICAgdGhpcy5yZWdpc3RlckV2ZW50KCdvbicsICgpID0+IHsgcmV0dXJuIHRoaXMub24oKSB9KTtcclxuICAgICAgICB0aGlzLnJlZ2lzdGVyRXZlbnQoJ29mZicsICgpID0+IHsgcmV0dXJuIHRoaXMub2ZmKCkgfSk7XHJcbiAgICAgICAgdGhpcy5yZWdpc3RlckV2ZW50KCd0b2dnbGUnLCAoKSA9PiB7IHJldHVybiB0aGlzLnRvZ2dsZSgpIH0pO1xyXG4gICAgICAgIHRoaXMucmVnaXN0ZXJFdmVudCgnaW5pdCcsICgpID0+IHsgcmV0dXJuIHRoaXMuaW5pdCgpIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIG9wYWNpdHkobjogbnVtYmVyKTogdGhpcyB7XHJcbiAgICAgICAgaWYgKG4gPCAwKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2xvZ2dlci5lcnJvcihgT3BhY2l0eSBtdXN0IGJlIGdyZWF0ZXIgdGhhbiBvciBlcXVhbCB0byB6ZXJvLmApO1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcztcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKG4gPiAxKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2xvZ2dlci5lcnJvcihgT3BhY2l0eSBtdXN0IGJlIGxlc3MgdGhhbiBvciBlcXVhbCB0byBvbmUuYCk7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLl9vcGFjaXR5ID0gbjtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuXHJcbiAgICBjb2xvcihjOiBzdHJpbmcpOiB0aGlzIHtcclxuICAgICAgICB0aGlzLl9jb2xvciA9IGM7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBTZXRzIHRoZSBpbml0aWFsIHN0YXRlXHJcbiAgICAgKiBAcmV0dXJucyB7UHJvbWlzZTxTdGF0ZT59IFxyXG4gICAgICovXHJcbiAgICBpbml0KCk6IFByb21pc2U8U3RhdGU+IHtcclxuICAgICAgICBsZXQgc3RhdGUgPSBuZXcgU3RhdGUoKTtcclxuICAgICAgICBzdGF0ZS5va0NsYXNzTmFtZSA9ICdvay1vdmVybGF5JztcclxuICAgICAgICBzdGF0ZS5zdHlsZS5oZWlnaHQgPSBcIjEwMCVcIjtcclxuICAgICAgICBzdGF0ZS5zdHlsZS53aWR0aCA9IFwiMTAwJVwiO1xyXG4gICAgICAgIHN0YXRlLnN0eWxlLnBvc2l0aW9uID0gXCJmaXhlZFwiO1xyXG4gICAgICAgIHN0YXRlLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IHRoaXMuX2NvbG9yO1xyXG4gICAgICAgIHN0YXRlLnN0eWxlLm9wYWNpdHkgPSAnMCc7XHJcbiAgICAgICAgc3RhdGUuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgICAgICBzdGF0ZS5zdHlsZS50b3AgPSAnMCc7XHJcbiAgICAgICAgc3RhdGUuc3R5bGUubGVmdCA9ICcwJztcclxuXHJcbiAgICAgICAgaWYgKHRoaXMuZ2V0RWxlbWVudCgpKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZ2V0RWxlbWVudCgpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5jbGlja0V2ZW50KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzLnJlbmRlcihzdGF0ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgdG9nZ2xlKCk6IFByb21pc2U8U3RhdGU+IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5faXNPbiA/IHRoaXMub2ZmKCkgOiB0aGlzLm9uKCk7XHJcbiAgICB9XHJcblxyXG4gICAgb24oKTogUHJvbWlzZTxTdGF0ZT4ge1xyXG4gICAgICAgIGlmICh0aGlzLl9pc09uKVxyXG4gICAgICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmVzb2x2ZSh0aGlzLl9zdGF0ZSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMuX2lzT24gPSB0cnVlO1xyXG5cclxuICAgICAgICByZXR1cm4gdGhpcy5yZW5kZXIodGhpcy5vblN0YXRlKCkpO1xyXG4gICAgfVxyXG5cclxuICAgIG9mZigpOiBQcm9taXNlPFN0YXRlPiB7XHJcbiAgICAgICAgaWYgKCF0aGlzLl9pc09uKVxyXG4gICAgICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmVzb2x2ZSh0aGlzLl9zdGF0ZSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMuX2lzT24gPSBmYWxzZTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXMucmVuZGVyKHRoaXMub2ZmU3RhdGUoKSlcclxuICAgICAgICAgICAgLnRoZW4oKHJlc3VsdCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMucmVuZGVyKHRoaXMuaGlkZGVuU3RhdGUoKSk7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgb25TdGF0ZSgpOiBTdGF0ZSB7XHJcbiAgICAgICAgbGV0IHN0YXRlID0gbmV3IFN0YXRlKCk7XHJcbiAgICAgICAgc3RhdGUuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XHJcbiAgICAgICAgc3RhdGUuc3R5bGUub3BhY2l0eSA9IHRoaXMuX29wYWNpdHkudG9TdHJpbmcoKTtcclxuICAgICAgICByZXR1cm4gc3RhdGU7XHJcbiAgICB9XHJcblxyXG4gICAgb2ZmU3RhdGUoKTogU3RhdGUge1xyXG4gICAgICAgIGxldCBzdGF0ZSA9IG5ldyBTdGF0ZSgpO1xyXG4gICAgICAgIHN0YXRlLnN0eWxlLm9wYWNpdHkgPSAnMCc7XHJcbiAgICAgICAgcmV0dXJuIHN0YXRlO1xyXG4gICAgfVxyXG5cclxuICAgIGhpZGRlblN0YXRlKCk6IFN0YXRlIHtcclxuICAgICAgICBsZXQgc3RhdGUgPSBuZXcgU3RhdGUoKTtcclxuICAgICAgICBzdGF0ZS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgICAgIHJldHVybiBzdGF0ZTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGNsaWNrRXZlbnQgPSAoKSA9PiB7XHJcbiAgICAgICAgdGhpcy5nZXRSb290KCkucmVsYXkoJ29mZicpO1xyXG4gICAgfVxyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbXBvbmVudHMvT3ZlcmxheS50cyIsImltcG9ydCB7IElBbmltYXRvciB9IGZyb20gJ291dGtpdC1hbmltYXRvcic7XHJcbmltcG9ydCB7IElDb21wb25lbnQsIENvbXBvbmVudCB9IGZyb20gXCIuL0NvbXBvbmVudFwiO1xyXG5pbXBvcnQgRWxlbWVudEhlbHBlciBmcm9tIFwiLi4vdXRpbC9FbGVtZW50SGVscGVyXCI7XHJcbmltcG9ydCB7IFN0YXRlIH0gZnJvbSBcIi4uL3N0YXRlL1N0YXRlXCI7XHJcblxyXG4vLyBAdG9kbyBhZGQgYSByZWFkeSBjbGFzcyBvciBzb21ldGhpbmcgc28gdGhhdCBzY3JvbGxiYXJzIGRvbid0IHJlbmRlciBiZWZvcmUgdGhlIGxheW91dCBpcyBkcmF3biBmb3IgdGhlIGZpcnN0IHRpbWVcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFZlcnRpY2FsTGF5b3V0IGV4dGVuZHMgQ29tcG9uZW50IHtcclxuXHJcbiAgICBwcml2YXRlIGZpeGVkQ2hpbGRyZW46IEFycmF5PElDb21wb25lbnQ+O1xyXG4gICAgcHJpdmF0ZSBwZXJjdENoaWxkcmVuOiBBcnJheTxJQ29tcG9uZW50PjtcclxuICAgIHByaXZhdGUgZmx1aWRDaGlsZHJlbjogQXJyYXk8SUNvbXBvbmVudD47XHJcblxyXG4gICAgY29uc3RydWN0b3IoZWxlbWVudDogc3RyaW5nKSB7XHJcbiAgICAgICAgc3VwZXIoZWxlbWVudCk7XHJcbiAgICAgICAgdGhpcy5yZXNldENoaWxkcmVuKCk7XHJcbiAgICAgICAgdGhpcy5yZWdpc3RlckV2ZW50KCdpbml0JywgKCkgPT4geyByZXR1cm4gdGhpcy5pbml0KCkgfSk7XHJcbiAgICAgICAgdGhpcy5zZXRBbmltYXRvcihudWxsKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEluaXRpYWxpemUgdGhlIFZlcnRpY2FsIExheW91dFxyXG4gICAgICogRm9yIGVhY2ggY2hpbGQgZWxlbWVudCBpbiBlbGVtZW50cywgc2V0IHVwIGEgbmV3IENvbXBvbmVudCBmaWd1cmUgXHJcbiAgICAgKiBvdXQgaWYgaXQgaGFzIGEgaGVpZ2h0IHNldCBhcyBhIHBpeGVsIHZhbHVlIChmaXhlZCBjaGlsZCksIGEgMTAwJVxyXG4gICAgICogdmFsdWUgKGZsdWlkIGNoaWxkKSwgb3IgYSB2YWx1ZSBzZXQgdG8gYSBzcGVjaWZpYyBwZXJjZW50YWdlIFxyXG4gICAgICogKHBlcmNlbnRhZ2UgY2hpbGQpXHJcbiAgICAgKiBcclxuICAgICAqIEByZXR1cm5zIFxyXG4gICAgICogQG1lbWJlcm9mIFZlcnRpY2FsTGF5b3V0Q29tcG9uZW50XHJcbiAgICAgKi9cclxuICAgIGluaXQoKSB7XHJcbiAgICAgICAgbGV0IGVsID0gdGhpcy5nZXRFbGVtZW50KCk7XHJcbiAgICAgICAgdGhpcy5yZXNldENoaWxkcmVuKCk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBlbC5jaGlsZHJlbi5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBsZXQgY2hpbGQgPSBlbC5jaGlsZHJlbltpXSBhcyBIVE1MRWxlbWVudDtcclxuICAgICAgICAgICAgaWYgKCFjaGlsZC5pZClcclxuICAgICAgICAgICAgICAgIEVsZW1lbnRIZWxwZXIuc2V0R3VpZElkKGNoaWxkKTtcclxuICAgICAgICAgICAgbGV0IGNoaWxkQ29tcG9uZW50ID0gbmV3IENvbXBvbmVudCgnIycgKyBjaGlsZC5pZCk7XHJcbiAgICAgICAgICAgIGNoaWxkQ29tcG9uZW50LnNldEFuaW1hdG9yKG51bGwpO1xyXG4gICAgICAgICAgICBsZXQgc2l6ZSA9IGNoaWxkLmdldEF0dHJpYnV0ZSgnZGF0YS1zaXplJykgfHwgJzEwMCUnO1xyXG4gICAgICAgICAgICBpZiAoc2l6ZSA9PT0gJzEwMCUnKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmZsdWlkQ2hpbGRyZW4ucHVzaChjaGlsZENvbXBvbmVudCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSBpZiAoc2l6ZS5tYXRjaCgvXltcXGRdKyUkLykpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMucGVyY3RDaGlsZHJlbi5wdXNoKGNoaWxkQ29tcG9uZW50KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZml4ZWRDaGlsZHJlbi5wdXNoKGNoaWxkQ29tcG9uZW50KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjaGlsZENvbXBvbmVudC5yZW5kZXIoeyBzdHlsZTogeyB3aWR0aDogJzEwMCUnLCBoZWlnaHQ6IHNpemUsIG92ZXJmbG93OiAnaGlkZGVuJywgZmxvYXQ6ICdsZWZ0JyB9IH0pXHJcbiAgICAgICAgICAgIHRoaXMuYWRkQ2hpbGQoY2hpbGRDb21wb25lbnQpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHRoaXMucmVzaXplLmJpbmQodGhpcykpO1xyXG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCB0aGlzLnJlc2l6ZS5iaW5kKHRoaXMpKTtcclxuXHJcbiAgICAgICAgbGV0IHN0YXRlID0gbmV3IFN0YXRlKCk7XHJcbiAgICAgICAgc3RhdGUuc3R5bGUuaGVpZ2h0ID0gdGhpcy5nZXRFbGVtZW50KCkucGFyZW50RWxlbWVudC5vZmZzZXRIZWlnaHQgKyAncHgnO1xyXG4gICAgICAgIHN0YXRlLnN0eWxlLndpZHRoID0gdGhpcy5nZXRFbGVtZW50KCkucGFyZW50RWxlbWVudC5vZmZzZXRXaWR0aCArICdweCc7XHJcbiAgICAgICAgc3RhdGUuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcclxuICAgICAgICBzdGF0ZS5zdHlsZS5vdmVyZmxvdyA9IFwiaGlkZGVuXCI7XHJcbiAgICAgICAgc3RhdGUuc3R5bGUuZmxvYXQgPSBcImxlZnRcIlxyXG4gICAgICAgIHJldHVybiB0aGlzLnJlbmRlcihzdGF0ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVzaXplKCkge1xyXG4gICAgICAgIGxldCBzdGF0ZSA9IG5ldyBTdGF0ZSgpO1xyXG4gICAgICAgIHN0YXRlLnN0eWxlLmhlaWdodCA9IHRoaXMuZ2V0RWxlbWVudCgpLnBhcmVudEVsZW1lbnQub2Zmc2V0SGVpZ2h0ICsgJ3B4JztcclxuICAgICAgICBjb25zb2xlLmxvZyhkb2N1bWVudC5ib2R5Lm9mZnNldEhlaWdodClcclxuICAgICAgICBzdGF0ZS5zdHlsZS53aWR0aCA9IHRoaXMuZ2V0RWxlbWVudCgpLnBhcmVudEVsZW1lbnQub2Zmc2V0V2lkdGggKyAncHgnO1xyXG4gICAgICAgIHJldHVybiB0aGlzLnJlbmRlcihzdGF0ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKG5ld1N0YXRlOiBTdGF0ZSk6IFByb21pc2U8YW55PiB7XHJcbiAgICAgICAgbGV0IHByb21pc2VzID0gW107XHJcbiAgICAgICAgcHJvbWlzZXMucHVzaChzdXBlci5yZW5kZXIobmV3U3RhdGUpKTtcclxuXHJcbiAgICAgICAgdmFyIHRvdGFsSGVpZ2h0ID0gdGhpcy5nZXRFbGVtZW50KCkub2Zmc2V0SGVpZ2h0O1xyXG4gICAgICAgIHZhciBmbHVpZEhlaWdodCA9IHRvdGFsSGVpZ2h0O1xyXG4gICAgICAgIHZhciB0b3RhbFdpZHRoID0gdGhpcy5nZXRFbGVtZW50KCkub2Zmc2V0V2lkdGg7XHJcblxyXG4gICAgICAgIC8vIERyYXcgdGhlIGZpeGVkIGNoaWxkcmVuXHJcbiAgICAgICAgZm9yIChsZXQgZWwgb2YgdGhpcy5maXhlZENoaWxkcmVuKSB7XHJcbiAgICAgICAgICAgIGZsdWlkSGVpZ2h0IC09IGVsLmdldEVsZW1lbnQoKS5vZmZzZXRIZWlnaHQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIERyYXcgdGhlIHBlcmNlbnRhZ2UgY2hpbGRyZW5cclxuICAgICAgICBmb3IgKGxldCBlbCBvZiB0aGlzLnBlcmN0Q2hpbGRyZW4pIHtcclxuICAgICAgICAgICAgbGV0IGhlaWdodCA9IChwYXJzZUZsb2F0KGVsLmdldEVsZW1lbnQoKS5nZXRBdHRyaWJ1dGUoJ2RhdGEtc2l6ZScpKSAvIDEwMCAqIGZsdWlkSGVpZ2h0KTtcclxuICAgICAgICAgICAgZmx1aWRIZWlnaHQgLT0gaGVpZ2h0O1xyXG4gICAgICAgICAgICBlbC5yZW5kZXIoeyBzdHlsZTogeyBoZWlnaHQ6IGhlaWdodCArICdweCcgfSB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gRHJhdyB0aGUgZmx1aWQgY2hpbGRyZW5cclxuICAgICAgICBmb3IgKGxldCBlbCBvZiB0aGlzLmZsdWlkQ2hpbGRyZW4pIHtcclxuICAgICAgICAgICAgdmFyIGhlaWdodCA9IGZsdWlkSGVpZ2h0IC8gdGhpcy5mbHVpZENoaWxkcmVuLmxlbmd0aDtcclxuICAgICAgICAgICAgcHJvbWlzZXMucHVzaChlbC5yZW5kZXIoeyBzdHlsZTogeyBoZWlnaHQ6IGhlaWdodCArICdweCcgfSB9KSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBQcm9taXNlLmFsbChwcm9taXNlcyk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBTZXRzIHRoZSBjaGlkcmVuIGFycmF5cyB0byBuZXcgYXJyYXlzLlxyXG4gICAgICogQHByaXZhdGVcclxuICAgICAqIEBtZW1iZXJvZiBIb3Jpem9udGFsTGF5b3V0Q29tcG9uZW50XHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgcmVzZXRDaGlsZHJlbigpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLmZpeGVkQ2hpbGRyZW4gPSBuZXcgQXJyYXk8SUNvbXBvbmVudD4oKTtcclxuICAgICAgICB0aGlzLnBlcmN0Q2hpbGRyZW4gPSBuZXcgQXJyYXk8SUNvbXBvbmVudD4oKTtcclxuICAgICAgICB0aGlzLmZsdWlkQ2hpbGRyZW4gPSBuZXcgQXJyYXk8SUNvbXBvbmVudD4oKTtcclxuICAgIH1cclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21wb25lbnRzL1ZlcnRpY2FsTGF5b3V0LnRzIiwiaW1wb3J0IHsgU3RhdGUgfSBmcm9tICcuLi9zdGF0ZS9TdGF0ZSc7XHJcbmltcG9ydCB7IElBbmltYXRvciB9IGZyb20gJ291dGtpdC1hbmltYXRvcic7XHJcbmltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gXCIuL0NvbXBvbmVudFwiO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBXaW5kb3dPcHRpb25zIHtcclxuICAgIHdpZHRoPzogbnVtYmVyLFxyXG4gICAgaGVpZ2h0PzogbnVtYmVyLFxyXG4gICAgdG9wPzogbnVtYmVyLFxyXG4gICAgbGVmdD86IG51bWJlcixcclxuICAgIHBsYWNlbWVudD86IFdpbmRvd1BsYWNlbWVudCxcclxuICAgIHBsYWNlbWVudE1hcmdpbj86IG51bWJlclxyXG59XHJcblxyXG5leHBvcnQgZW51bSBXaW5kb3dQbGFjZW1lbnQge1xyXG4gICAgVG9wTGVmdCxcclxuICAgIFRvcCxcclxuICAgIFRvcFJpZ2h0LFxyXG4gICAgTGVmdCxcclxuICAgIENlbnRlcixcclxuICAgIFJpZ2h0LFxyXG4gICAgQm90dG9tUmlnaHQsXHJcbiAgICBCb3R0b20sXHJcbiAgICBCb3R0b21MZWZ0XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFdpbmRvdyBleHRlbmRzIENvbXBvbmVudCB7XHJcblxyXG4gICAgcHJpdmF0ZSBfd2lkdGg6IG51bWJlcjtcclxuICAgIHByaXZhdGUgX2hlaWdodDogbnVtYmVyO1xyXG4gICAgcHJpdmF0ZSBfdG9wOiBudW1iZXI7XHJcbiAgICBwcml2YXRlIF9sZWZ0OiBudW1iZXI7XHJcbiAgICBwcml2YXRlIF9wbGFjZW1lbnQ6IFdpbmRvd1BsYWNlbWVudDtcclxuICAgIHByaXZhdGUgX3BsYWNlbWVudE1hcmdpbjogbnVtYmVyO1xyXG4gICAgcHJpdmF0ZSBfaXNPcGVuOiBib29sZWFuO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKGVsZW1lbnQ6IHN0cmluZywgb3B0aW9ucz86IFdpbmRvd09wdGlvbnMpIHtcclxuICAgICAgICBzdXBlcihlbGVtZW50KTtcclxuXHJcbiAgICAgICAgLy8gU2V0dXAgZGVmYXVsdHNcclxuICAgICAgICB0aGlzLl93aWR0aCA9IG9wdGlvbnMud2lkdGggfHwgMTAwO1xyXG4gICAgICAgIHRoaXMuX2hlaWdodCA9IG9wdGlvbnMuaGVpZ2h0IHx8IDEwMDtcclxuICAgICAgICB0aGlzLl90b3AgPSBvcHRpb25zLnRvcCB8fCAwO1xyXG4gICAgICAgIHRoaXMuX2xlZnQgPSBvcHRpb25zLmxlZnQgfHwgMDtcclxuICAgICAgICB0aGlzLl9wbGFjZW1lbnQgPSBXaW5kb3dQbGFjZW1lbnQuQ2VudGVyXHJcbiAgICAgICAgdGhpcy5faXNPcGVuID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5fcGxhY2VtZW50TWFyZ2luID0gMzI7XHJcblxyXG4gICAgICAgIC8vIFJlbGF5IGV2ZW50c1xyXG4gICAgICAgIHRoaXMucmVnaXN0ZXJFdmVudCgnb24nLCAoKSA9PiB7IHJldHVybiB0aGlzLm9uKCkgfSk7XHJcbiAgICAgICAgdGhpcy5yZWdpc3RlckV2ZW50KCdvZmYnLCAoKSA9PiB7IHJldHVybiB0aGlzLm9mZigpIH0pO1xyXG4gICAgICAgIHRoaXMucmVnaXN0ZXJFdmVudCgndG9nZ2xlJywgKCkgPT4geyByZXR1cm4gdGhpcy50b2dnbGUoKSB9KTtcclxuICAgICAgICB0aGlzLnJlZ2lzdGVyRXZlbnQoJ2luaXQnLCAoKSA9PiB7IHJldHVybiB0aGlzLmluaXQoKSB9KTtcclxuICAgIH1cclxuXHJcbiAgICB3aWR0aChuOiBudW1iZXIpOiB0aGlzIHtcclxuICAgICAgICBpZiAobiA8IDApIHtcclxuICAgICAgICAgICAgdGhpcy5fbG9nZ2VyLmVycm9yKGBXaWR0aCBtdXN0IGJlIGdyZWF0ZXIgdGhhbiBvciBlcXVhbCB0byB6ZXJvLmApO1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcztcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5fd2lkdGggPSBuO1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG5cclxuICAgIGhlaWdodChuOiBudW1iZXIpOiB0aGlzIHtcclxuICAgICAgICBpZiAobiA8IDApIHtcclxuICAgICAgICAgICAgdGhpcy5fbG9nZ2VyLmVycm9yKGBIZWlnaHQgbXVzdCBiZSBncmVhdGVyIHRoYW4gb3IgZXF1YWwgdG8gemVyby5gKTtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuX2hlaWdodCA9IG47XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgdG9wKG46IG51bWJlcik6IHRoaXMge1xyXG4gICAgICAgIHRoaXMuX3RvcCA9IG47XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgbGVmdChuOiBudW1iZXIpOiB0aGlzIHtcclxuICAgICAgICB0aGlzLl9sZWZ0ID0gbjtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFNldHMgdGhlIGluaXRpYWwgc3RhdGVcclxuICAgICAqIEByZXR1cm5zIHtQcm9taXNlPFN0YXRlPn0gXHJcbiAgICAgKi9cclxuICAgIGluaXQoKTogUHJvbWlzZTxTdGF0ZT4ge1xyXG4gICAgICAgIGxldCBzdGF0ZSA9IG5ldyBTdGF0ZSgpO1xyXG4gICAgICAgIHN0YXRlLm9rQ2xhc3NOYW1lID0gJ29rLXdpbmRvdydcclxuICAgICAgICBzdGF0ZS5zdHlsZS5wb3NpdGlvbiA9ICdhYnNvbHV0ZSc7XHJcbiAgICAgICAgc3RhdGUuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgICAgICBzdGF0ZS5zdHlsZS56SW5kZXggPSAnOTk5OSdcclxuICAgICAgICBzdGF0ZS5zdHlsZS53aWR0aCA9IGAke3RoaXMuX3dpZHRofXB4YDtcclxuICAgICAgICBzdGF0ZS5zdHlsZS5oZWlnaHQgPSBgJHt0aGlzLl9oZWlnaHR9cHhgO1xyXG4gICAgICAgIHN0YXRlLnN0eWxlLm9wYWNpdHkgPSAnMCc7XHJcbiAgICAgICAgbGV0IGxlZnQgPSAnMCc7XHJcbiAgICAgICAgbGV0IHRvcCA9ICcwJztcclxuICAgICAgICBsZXQgd2luZG93V2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aDtcclxuICAgICAgICBsZXQgd2luZG93SGVpZ2h0ID0gd2luZG93LmlubmVySGVpZ2h0O1xyXG4gICAgICAgIGxldCBtYXJnaW4gPSB0aGlzLl9wbGFjZW1lbnRNYXJnaW47XHJcbiAgICAgICAgbGV0IHJpZ2h0ID0gd2luZG93V2lkdGggLSB0aGlzLl93aWR0aCAtIG1hcmdpbjtcclxuICAgICAgICBsZXQgY2VudGVyID0gd2luZG93V2lkdGggLyAyIC0gdGhpcy5fd2lkdGggLyAyO1xyXG4gICAgICAgIGxldCBtaWRkbGUgPSB3aW5kb3dIZWlnaHQgLyAyIC0gdGhpcy5faGVpZ2h0IC8gMjtcclxuICAgICAgICBsZXQgYm90dG9tID0gd2luZG93SGVpZ2h0IC0gdGhpcy5faGVpZ2h0IC0gbWFyZ2luO1xyXG4gICAgICAgIGlmICh0aGlzLl9wbGFjZW1lbnQpIHtcclxuICAgICAgICAgICAgc3dpdGNoICgrdGhpcy5fcGxhY2VtZW50KSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlIFdpbmRvd1BsYWNlbWVudC5Ub3BMZWZ0OlxyXG4gICAgICAgICAgICAgICAgICAgIGxlZnQgPSBgJHttYXJnaW59cHhgO1xyXG4gICAgICAgICAgICAgICAgICAgIHRvcCA9IGAke21hcmdpbn1weGA7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICAgICAgY2FzZSBXaW5kb3dQbGFjZW1lbnQuVG9wOlxyXG4gICAgICAgICAgICAgICAgICAgIGxlZnQgPSBgJHtjZW50ZXJ9cHhgO1xyXG4gICAgICAgICAgICAgICAgICAgIHRvcCA9IGAke21hcmdpbn1weGA7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICAgICAgY2FzZSBXaW5kb3dQbGFjZW1lbnQuVG9wUmlnaHQ6XHJcbiAgICAgICAgICAgICAgICAgICAgbGVmdCA9IGAke3JpZ2h0fXB4YDtcclxuICAgICAgICAgICAgICAgICAgICB0b3AgPSBgJHttYXJnaW59cHhgO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgICAgIGNhc2UgV2luZG93UGxhY2VtZW50LkxlZnQ6XHJcbiAgICAgICAgICAgICAgICAgICAgbGVmdCA9IGAke21hcmdpbn1weGA7XHJcbiAgICAgICAgICAgICAgICAgICAgdG9wID0gYCR7bWlkZGxlfXB4YDtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgICAgICBjYXNlIFdpbmRvd1BsYWNlbWVudC5DZW50ZXI6XHJcbiAgICAgICAgICAgICAgICAgICAgbGVmdCA9IGAke2NlbnRlcn1weGA7XHJcbiAgICAgICAgICAgICAgICAgICAgdG9wID0gYCR7bWlkZGxlfXB4YDtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgICAgICBjYXNlIFdpbmRvd1BsYWNlbWVudC5SaWdodDpcclxuICAgICAgICAgICAgICAgICAgICBsZWZ0ID0gYCR7cmlnaHR9cHhgO1xyXG4gICAgICAgICAgICAgICAgICAgIHRvcCA9IGAke21pZGRsZX1weGA7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICAgICAgY2FzZSBXaW5kb3dQbGFjZW1lbnQuQm90dG9tTGVmdDpcclxuICAgICAgICAgICAgICAgICAgICBsZWZ0ID0gYCR7bWFyZ2lufXB4YDtcclxuICAgICAgICAgICAgICAgICAgICB0b3AgPSBgJHtib3R0b219cHhgO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgICAgIGNhc2UgV2luZG93UGxhY2VtZW50LkJvdHRvbTpcclxuICAgICAgICAgICAgICAgICAgICBsZWZ0ID0gYCR7Y2VudGVyfXB4YDtcclxuICAgICAgICAgICAgICAgICAgICB0b3AgPSBgJHtib3R0b219cHhgO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgICAgIGNhc2UgV2luZG93UGxhY2VtZW50LkJvdHRvbVJpZ2h0OlxyXG4gICAgICAgICAgICAgICAgICAgIGxlZnQgPSBgJHtyaWdodH1weGA7XHJcbiAgICAgICAgICAgICAgICAgICAgdG9wID0gYCR7Ym90dG9tfXB4YDtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgIGxlZnQgPSBgJHtjZW50ZXJ9cHhgO1xyXG4gICAgICAgICAgICAgICAgICAgIHRvcCA9IGAke21pZGRsZX1weGA7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIGxlZnQgPSBgJHt0aGlzLl9sZWZ0fXB4YDtcclxuICAgICAgICAgICAgdG9wID0gYCR7dGhpcy5fdG9wfXB4YDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHN0YXRlLnN0eWxlLmxlZnQgPSBsZWZ0O1xyXG4gICAgICAgIHN0YXRlLnN0eWxlLnRvcCA9IHRvcDtcclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXMucmVuZGVyKHN0YXRlKTtcclxuICAgIH1cclxuXHJcbiAgICB0b2dnbGUoKTogUHJvbWlzZTxTdGF0ZT4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9pc09wZW4gPyB0aGlzLm9mZigpIDogdGhpcy5vbigpO1xyXG4gICAgfVxyXG5cclxuICAgIG9uKCk6IFByb21pc2U8U3RhdGU+IHtcclxuICAgICAgICBpZiAodGhpcy5faXNPcGVuKVxyXG4gICAgICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmVzb2x2ZSh0aGlzLl9zdGF0ZSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMuX2lzT3BlbiA9IHRydWU7XHJcblxyXG4gICAgICAgIGxldCBzdGF0ZSA9IG5ldyBTdGF0ZSgpO1xyXG4gICAgICAgIHN0YXRlLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xyXG4gICAgICAgIHN0YXRlLnN0eWxlLm9wYWNpdHkgPSAnMSc7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMucmVuZGVyKHN0YXRlKTtcclxuICAgIH1cclxuXHJcbiAgICBvZmYoKTogUHJvbWlzZTxTdGF0ZT4ge1xyXG4gICAgICAgIGlmICghdGhpcy5faXNPcGVuKVxyXG4gICAgICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmVzb2x2ZSh0aGlzLl9zdGF0ZSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMuX2lzT3BlbiA9IGZhbHNlO1xyXG5cclxuICAgICAgICBsZXQgc3RhdGUgPSBuZXcgU3RhdGUoKTtcclxuICAgICAgICBzdGF0ZS5zdHlsZS5vcGFjaXR5ID0gJzAnO1xyXG5cclxuICAgICAgICByZXR1cm4gdGhpcy5yZW5kZXIoc3RhdGUpXHJcbiAgICAgICAgICAgIC50aGVuKChyZXN1bHQpID0+IHtcclxuICAgICAgICAgICAgICAgIGxldCBzdGF0ZSA9IG5ldyBTdGF0ZSgpO1xyXG4gICAgICAgICAgICAgICAgc3RhdGUuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnJlbmRlcihzdGF0ZSk7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICB9XHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tcG9uZW50cy9XaW5kb3cudHMiLCJleHBvcnQgKiBmcm9tICcuL3N0YXRlL1N0YXRlJztcclxuZXhwb3J0ICogZnJvbSAnLi9jb21wb25lbnRzL0NvbXBvbmVudCc7XHJcbmV4cG9ydCB7IGRlZmF1bHQgYXMgRHJhd2VyIH0gZnJvbSAnLi9jb21wb25lbnRzL0RyYXdlcic7XHJcbmV4cG9ydCB7IGRlZmF1bHQgYXMgVmVydGljYWxMYXlvdXQgfSBmcm9tICcuL2NvbXBvbmVudHMvVmVydGljYWxMYXlvdXQnO1xyXG5leHBvcnQgeyBkZWZhdWx0IGFzIEhvcml6b250YWxMYXlvdXQgfSBmcm9tICcuL2NvbXBvbmVudHMvSG9yaXpvbnRhbExheW91dCc7XHJcbmV4cG9ydCB7IGRlZmF1bHQgYXMgV2luZG93IH0gZnJvbSAnLi9jb21wb25lbnRzL1dpbmRvdyc7XHJcbmV4cG9ydCB7IGRlZmF1bHQgYXMgT3ZlcmxheSB9IGZyb20gJy4vY29tcG9uZW50cy9PdmVybGF5JztcclxuZXhwb3J0IHsgZGVmYXVsdCBhcyBEcmFnZ2FibGUgfSBmcm9tICcuL2NvbXBvbmVudHMvRHJhZ2dhYmxlJztcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvb3V0a2l0LnRzIiwiZXhwb3J0IGludGVyZmFjZSBJTG9nZ2VyIHtcclxuICAgIGxvZyhtZXNzYWdlOnN0cmluZyk7XHJcbiAgICB3YXJuKG1lc3NhZ2U6c3RyaW5nKTtcclxuICAgIGluZm8obWVzc2FnZTpzdHJpbmcpO1xyXG4gICAgZXJyb3IobWVzc2FnZTpzdHJpbmcpO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBMb2dnZXIgaW1wbGVtZW50cyBJTG9nZ2VyIHtcclxuICAgIHByaXZhdGUgX2RlYnVnOiBib29sZWFuO1xyXG4gICAgcHJpdmF0ZSBfYyA9IHtcclxuICAgICAgICB3YXJuOiAobTogc3RyaW5nKSA9PiB7fSxcclxuICAgICAgICBlcnJvcjogKG06IHN0cmluZykgPT4ge30sXHJcbiAgICAgICAgaW5mbzogKG06IHN0cmluZykgPT4ge30sXHJcbiAgICAgICAgbG9nOiAobTogc3RyaW5nKSA9PiB7fVxyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihkZWJ1ZzogYm9vbGVhbiA9IGZhbHNlKSB7XHJcbiAgICAgICAgaWYgKHR5cGVvZiB3aW5kb3dbJ2NvbnNvbGUnXSA9PT0gJ29iamVjdCcgJiYgZGVidWcpXHJcbiAgICAgICAgICAgIHRoaXMuX2MgPSB3aW5kb3cuY29uc29sZTtcclxuICAgICAgICB0aGlzLl9kZWJ1ZyA9IGRlYnVnO1xyXG4gICAgfVxyXG5cclxuICAgIGxvZyhtZXNzYWdlOiBzdHJpbmcpIHtcclxuICAgICAgICBpZiAodGhpcy5fZGVidWcgJiYgdHlwZW9mIHRoaXMuX2MubG9nID09PSAnZnVuY3Rpb24nKVxyXG4gICAgICAgICAgICB0aGlzLl9jLmxvZyhtZXNzYWdlKTtcclxuICAgIH1cclxuXHJcbiAgICB3YXJuKG1lc3NhZ2U6IHN0cmluZykge1xyXG4gICAgICAgIGlmICh0aGlzLl9kZWJ1ZyAmJiB0eXBlb2YgdGhpcy5fYy53YXJuID09PSAnZnVuY3Rpb24nKVxyXG4gICAgICAgICAgICB0aGlzLl9jLndhcm4obWVzc2FnZSk7XHJcbiAgICB9XHJcblxyXG4gICAgaW5mbyhtZXNzYWdlOiBzdHJpbmcpIHtcclxuICAgICAgICBpZiAodGhpcy5fZGVidWcgJiYgdHlwZW9mIHRoaXMuX2MuaW5mbyA9PT0gJ2Z1bmN0aW9uJylcclxuICAgICAgICAgICAgdGhpcy5fYy5pbmZvKG1lc3NhZ2UpO1xyXG4gICAgfVxyXG5cclxuICAgIGVycm9yKG1lc3NhZ2U6IHN0cmluZykge1xyXG4gICAgICAgIGlmICh0aGlzLl9kZWJ1ZyAmJiB0eXBlb2YgdGhpcy5fYy5lcnJvciA9PT0gJ2Z1bmN0aW9uJylcclxuICAgICAgICAgICAgdGhpcy5fYy5lcnJvcihtZXNzYWdlKTtcclxuICAgIH1cclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy91dGlsL0xvZ2dlci50cyIsIi8qISBPdXRraXQgQW5pbWF0b3IgdjEuMC4zIC0gQ29weXJpZ2h0IDIwMTcgSmFtZXMgRWhseSAtIE1JVCBMaWNlbnNlICovXG4oZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShbXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJvay1hbmltYXRvclwiXSA9IGZhY3RvcnkoKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJvay1hbmltYXRvclwiXSA9IGZhY3RvcnkoKTtcbn0pKHRoaXMsIGZ1bmN0aW9uKCkge1xucmV0dXJuIC8qKioqKiovIChmdW5jdGlvbihtb2R1bGVzKSB7IC8vIHdlYnBhY2tCb290c3RyYXBcbi8qKioqKiovIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuLyoqKioqKi8gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbi8qKioqKiovIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuLyoqKioqKi9cbi8qKioqKiovIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbi8qKioqKiovIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuLyoqKioqKi8gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4vKioqKioqLyBcdFx0fVxuLyoqKioqKi8gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4vKioqKioqLyBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuLyoqKioqKi8gXHRcdFx0aTogbW9kdWxlSWQsXG4vKioqKioqLyBcdFx0XHRsOiBmYWxzZSxcbi8qKioqKiovIFx0XHRcdGV4cG9ydHM6IHt9XG4vKioqKioqLyBcdFx0fTtcbi8qKioqKiovXG4vKioqKioqLyBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4vKioqKioqLyBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4vKioqKioqL1xuLyoqKioqKi8gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbi8qKioqKiovIFx0XHRtb2R1bGUubCA9IHRydWU7XG4vKioqKioqL1xuLyoqKioqKi8gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4vKioqKioqLyBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuLyoqKioqKi8gXHR9XG4vKioqKioqL1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbi8qKioqKiovIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcbi8qKioqKiovXG4vKioqKioqLyBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4vKioqKioqLyBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbi8qKioqKiovIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4vKioqKioqLyBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuLyoqKioqKi8gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbi8qKioqKiovIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbi8qKioqKiovIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbi8qKioqKiovIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbi8qKioqKiovIFx0XHRcdH0pO1xuLyoqKioqKi8gXHRcdH1cbi8qKioqKiovIFx0fTtcbi8qKioqKiovXG4vKioqKioqLyBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4vKioqKioqLyBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuLyoqKioqKi8gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuLyoqKioqKi8gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbi8qKioqKiovIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4vKioqKioqLyBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuLyoqKioqKi8gXHRcdHJldHVybiBnZXR0ZXI7XG4vKioqKioqLyBcdH07XG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbi8qKioqKiovIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbi8qKioqKiovIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcbi8qKioqKiovXG4vKioqKioqLyBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLyoqKioqKi8gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAxKTtcbi8qKioqKiovIH0pXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyoqKioqKi8gKFtcbi8qIDAgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXCJ1c2Ugc3RyaWN0XCI7XG5cblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xudmFyIEFuaW1hdG9yVHJhbnNpdGlvbjtcbihmdW5jdGlvbiAoQW5pbWF0b3JUcmFuc2l0aW9uKSB7XG4gICAgQW5pbWF0b3JUcmFuc2l0aW9uW0FuaW1hdG9yVHJhbnNpdGlvbltcIkxpbmVhclwiXSA9IDBdID0gXCJMaW5lYXJcIjtcbiAgICBBbmltYXRvclRyYW5zaXRpb25bQW5pbWF0b3JUcmFuc2l0aW9uW1wiRWFzZUluXCJdID0gMV0gPSBcIkVhc2VJblwiO1xuICAgIEFuaW1hdG9yVHJhbnNpdGlvbltBbmltYXRvclRyYW5zaXRpb25bXCJFYXNlT3V0XCJdID0gMl0gPSBcIkVhc2VPdXRcIjtcbiAgICBBbmltYXRvclRyYW5zaXRpb25bQW5pbWF0b3JUcmFuc2l0aW9uW1wiRWFzZUluT3V0XCJdID0gM10gPSBcIkVhc2VJbk91dFwiO1xuICAgIEFuaW1hdG9yVHJhbnNpdGlvbltBbmltYXRvclRyYW5zaXRpb25bXCJQdWxsSW5cIl0gPSA0XSA9IFwiUHVsbEluXCI7XG4gICAgQW5pbWF0b3JUcmFuc2l0aW9uW0FuaW1hdG9yVHJhbnNpdGlvbltcIlB1c2hPdXRcIl0gPSA1XSA9IFwiUHVzaE91dFwiO1xuICAgIEFuaW1hdG9yVHJhbnNpdGlvbltBbmltYXRvclRyYW5zaXRpb25bXCJQdXNoUHVsbFwiXSA9IDZdID0gXCJQdXNoUHVsbFwiO1xufSkoQW5pbWF0b3JUcmFuc2l0aW9uID0gZXhwb3J0cy5BbmltYXRvclRyYW5zaXRpb24gfHwgKGV4cG9ydHMuQW5pbWF0b3JUcmFuc2l0aW9uID0ge30pKTtcblxuLyoqKi8gfSksXG4vKiAxICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblwidXNlIHN0cmljdFwiO1xuXG5cbnZhciBfY3JlYXRlQ2xhc3MgPSBmdW5jdGlvbiAoKSB7IGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfSByZXR1cm4gZnVuY3Rpb24gKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9OyB9KCk7XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbmZ1bmN0aW9uIF9fZXhwb3J0KG0pIHtcbiAgICBmb3IgKHZhciBwIGluIG0pIHtcbiAgICAgICAgaWYgKCFleHBvcnRzLmhhc093blByb3BlcnR5KHApKSBleHBvcnRzW3BdID0gbVtwXTtcbiAgICB9XG59XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG52YXIgY29tbW9uXzEgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDApO1xuXG52YXIgT3V0a2l0QW5pbWF0b3IgPSBmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gT3V0a2l0QW5pbWF0b3IoKSB7XG4gICAgICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBPdXRraXRBbmltYXRvcik7XG5cbiAgICAgICAgdGhpcy5lYXNlT3V0ID0gdGhpcy5tYWtlRWFzZU91dCh0aGlzLmVhc2VJbik7XG4gICAgICAgIHRoaXMuZWFzZUluT3V0ID0gdGhpcy5tYWtlRWFzZUluT3V0KHRoaXMuZWFzZUluKTtcbiAgICAgICAgdGhpcy5wdXNoT3V0ID0gdGhpcy5tYWtlRWFzZU91dCh0aGlzLnB1bGxJbik7XG4gICAgICAgIHRoaXMucHVzaFB1bGwgPSB0aGlzLm1ha2VFYXNlSW5PdXQodGhpcy5wdWxsSW4pO1xuICAgICAgICB0aGlzLl9kdXJhdGlvbiA9IDIwMDtcbiAgICAgICAgdGhpcy5fc3RlcCA9IGZ1bmN0aW9uICgpIHt9O1xuICAgICAgICB0aGlzLl9yYXRlID0gMTY7XG4gICAgICAgIHRoaXMuX3RyYW5zaXRpb24gPSB0aGlzLmxpbmVhcjtcbiAgICB9XG5cbiAgICBfY3JlYXRlQ2xhc3MoT3V0a2l0QW5pbWF0b3IsIFt7XG4gICAgICAgIGtleTogXCJzZXRTdGVwXCIsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBzZXRTdGVwKHN0ZXApIHtcbiAgICAgICAgICAgIHRoaXMuX3N0ZXAgPSBzdGVwO1xuICAgICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgIH1cbiAgICB9LCB7XG4gICAgICAgIGtleTogXCJzZXREdXJhdGlvblwiLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gc2V0RHVyYXRpb24oZHVyYXRpb24pIHtcbiAgICAgICAgICAgIHRoaXMuX2R1cmF0aW9uID0gZHVyYXRpb247XG4gICAgICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgICAgfVxuICAgIH0sIHtcbiAgICAgICAga2V5OiBcInNldFJhdGVcIixcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIHNldFJhdGUocmF0ZSkge1xuICAgICAgICAgICAgdGhpcy5fcmF0ZSA9IHJhdGU7XG4gICAgICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgICAgfVxuICAgIH0sIHtcbiAgICAgICAga2V5OiBcInNldFRyYW5zaXRpb25cIixcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIHNldFRyYW5zaXRpb24odHJhbnNpdGlvbikge1xuICAgICAgICAgICAgc3dpdGNoICh0cmFuc2l0aW9uKSB7XG4gICAgICAgICAgICAgICAgY2FzZSBjb21tb25fMS5BbmltYXRvclRyYW5zaXRpb24uRWFzZUluOlxuICAgICAgICAgICAgICAgICAgICB0aGlzLl90cmFuc2l0aW9uID0gdGhpcy5lYXNlSW47XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgY29tbW9uXzEuQW5pbWF0b3JUcmFuc2l0aW9uLkVhc2VPdXQ6XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX3RyYW5zaXRpb24gPSB0aGlzLmVhc2VPdXQ7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgY29tbW9uXzEuQW5pbWF0b3JUcmFuc2l0aW9uLkVhc2VJbk91dDpcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fdHJhbnNpdGlvbiA9IHRoaXMuZWFzZUluT3V0O1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIGNvbW1vbl8xLkFuaW1hdG9yVHJhbnNpdGlvbi5QdWxsSW46XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX3RyYW5zaXRpb24gPSB0aGlzLnB1bGxJbjtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSBjb21tb25fMS5BbmltYXRvclRyYW5zaXRpb24uUHVzaE91dDpcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fdHJhbnNpdGlvbiA9IHRoaXMucHVzaE91dDtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSBjb21tb25fMS5BbmltYXRvclRyYW5zaXRpb24uUHVzaFB1bGw6XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX3RyYW5zaXRpb24gPSB0aGlzLnB1c2hQdWxsO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgICB0aGlzLl90cmFuc2l0aW9uID0gdGhpcy5saW5lYXI7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgIH1cbiAgICB9LCB7XG4gICAgICAgIGtleTogXCJhbmltYXRlXCIsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBhbmltYXRlKHN0YXJ0KSB7XG4gICAgICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuXG4gICAgICAgICAgICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IEFycmF5KF9sZW4gPiAxID8gX2xlbiAtIDEgOiAwKSwgX2tleSA9IDE7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICAgICAgICAgICAgICBhcmdzW19rZXkgLSAxXSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlKSB7XG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiB3aW5kb3dbJ3JlcXVlc3RBbmltYXRpb25GcmFtZSddID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBfc3RhcnQgPSBwZXJmb3JtYW5jZS5ub3coKTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHJhZkFuaW1hdGUgPSBmdW5jdGlvbiByYWZBbmltYXRlKHRpbWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBwcm9ncmVzcyA9ICh0aW1lIC0gX3N0YXJ0KSAvIF90aGlzLl9kdXJhdGlvbjtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChwcm9ncmVzcyA+IDEpIHByb2dyZXNzID0gMTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBkZWx0YSA9IF90aGlzLl90cmFuc2l0aW9uKHByb2dyZXNzKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIF90aGlzLl9zdGVwKGRlbHRhLCBhcmdzKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChwcm9ncmVzcyA8IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUocmFmQW5pbWF0ZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUodHJ1ZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZShyYWZBbmltYXRlKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBfdGhpcy5faW50ZXJ2YWwgPSB3aW5kb3cuc2V0SW50ZXJ2YWwoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGRlbHRhVGltZSA9IERhdGUubm93KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgdGltZVBhc3NlZCA9IGRlbHRhVGltZSAtIHN0YXJ0O1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHByb2dyZXNzID0gdGltZVBhc3NlZCAvIF90aGlzLl9kdXJhdGlvbjtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChwcm9ncmVzcyA+IDEpIHByb2dyZXNzID0gMTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBkZWx0YSA9IF90aGlzLl90cmFuc2l0aW9uKHByb2dyZXNzKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIF90aGlzLl9zdGVwKGRlbHRhLCBhcmdzKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChwcm9ncmVzcyA9PSAxKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xlYXJJbnRlcnZhbChfdGhpcy5faW50ZXJ2YWwpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUodHJ1ZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0sIF90aGlzLl9yYXRlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH0sIHtcbiAgICAgICAga2V5OiBcImxpbmVhclwiLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gbGluZWFyKHByb2dyZXNzKSB7XG4gICAgICAgICAgICByZXR1cm4gcHJvZ3Jlc3M7XG4gICAgICAgIH1cbiAgICB9LCB7XG4gICAgICAgIGtleTogXCJlYXNlSW5cIixcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGVhc2VJbihwcm9ncmVzcykge1xuICAgICAgICAgICAgcmV0dXJuIE1hdGgucG93KHByb2dyZXNzLCA1KTtcbiAgICAgICAgfVxuICAgIH0sIHtcbiAgICAgICAga2V5OiBcInB1bGxJblwiLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gcHVsbEluKHByb2dyZXNzKSB7XG4gICAgICAgICAgICB2YXIgeCA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDogMjtcblxuICAgICAgICAgICAgcmV0dXJuIE1hdGgucG93KHByb2dyZXNzLCAyKSAqICgoeCArIDEpICogcHJvZ3Jlc3MgLSB4KTtcbiAgICAgICAgfVxuICAgIH0sIHtcbiAgICAgICAga2V5OiBcIm1ha2VFYXNlT3V0XCIsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBtYWtlRWFzZU91dCh0aW1pbmcpIHtcbiAgICAgICAgICAgIHJldHVybiBmdW5jdGlvbiAocHJvZ3Jlc3MpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gMSAtIHRpbWluZygxIC0gcHJvZ3Jlc3MpO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgIH0sIHtcbiAgICAgICAga2V5OiBcIm1ha2VFYXNlSW5PdXRcIixcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIG1ha2VFYXNlSW5PdXQodGltaW5nKSB7XG4gICAgICAgICAgICByZXR1cm4gZnVuY3Rpb24gKHByb2dyZXNzKSB7XG4gICAgICAgICAgICAgICAgaWYgKHByb2dyZXNzIDwgLjUpIHJldHVybiB0aW1pbmcoMiAqIHByb2dyZXNzKSAvIDI7ZWxzZSByZXR1cm4gKDIgLSB0aW1pbmcoMiAqICgxIC0gcHJvZ3Jlc3MpKSkgLyAyO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgIH1dKTtcblxuICAgIHJldHVybiBPdXRraXRBbmltYXRvcjtcbn0oKTtcblxuZXhwb3J0cy5PdXRraXRBbmltYXRvciA9IE91dGtpdEFuaW1hdG9yO1xuX19leHBvcnQoX193ZWJwYWNrX3JlcXVpcmVfXygwKSk7XG5cbi8qKiovIH0pXG4vKioqKioqLyBdKTtcbn0pO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSW5kbFluQmhZMnM2THk4dmQyVmljR0ZqYXk5MWJtbDJaWEp6WVd4TmIyUjFiR1ZFWldacGJtbDBhVzl1SWl3aWQyVmljR0ZqYXpvdkx5OTNaV0p3WVdOckwySnZiM1J6ZEhKaGNDQmlaR1ppWTJFek1HVXpaV05tTXpRME9ETTBaU0lzSW5kbFluQmhZMnM2THk4dkxpOXpjbU12WTI5dGJXOXVMblJ6SWl3aWQyVmljR0ZqYXpvdkx5OHVMM055WXk5cGJtUmxlQzUwY3lKZExDSnVZVzFsY3lJNlcxMHNJbTFoY0hCcGJtZHpJam9pTzBGQlFVRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRXNRMEZCUXp0QlFVTkVMRTg3UVVOV1FUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVRzN1FVRkZRVHRCUVVOQk96dEJRVVZCTzBGQlEwRTdRVUZEUVRzN08wRkJSMEU3UVVGRFFUczdRVUZGUVR0QlFVTkJPenRCUVVWQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFc1lVRkJTenRCUVVOTU8wRkJRMEU3TzBGQlJVRTdRVUZEUVR0QlFVTkJPMEZCUTBFc2JVTkJRVEpDTERCQ1FVRXdRaXhGUVVGRk8wRkJRM1pFTEhsRFFVRnBReXhsUVVGbE8wRkJRMmhFTzBGQlEwRTdRVUZEUVRzN1FVRkZRVHRCUVVOQkxEaEVRVUZ6UkN3clJFRkJLMFE3TzBGQlJYSklPMEZCUTBFN08wRkJSVUU3UVVGRFFUczdPenM3T3pzN096czdRVU55UkVFc1NVRlJRenRCUVZKRUxGZEJRVGhDTzBGQlF6RkNMREpFUVVGTk8wRkJRMDRzTWtSQlFVMDdRVUZEVGl3MFJFRkJUenRCUVVOUUxEaEVRVUZUTzBGQlExUXNNa1JCUVUwN1FVRkRUaXcwUkVGQlR6dEJRVU5RTERaRVFVTktPMEZCUVVNc1IwRlNOa0lzY1VKQlFXeENMRkZCUVd0Q0xIVkNRVUZzUWl4UlFVRnJRaXh4UWtGUk4wSXNTenM3T3pzN096czdPenM3T3pzN096czdPenRCUTJoQ1JDeHRRMEZoUVRzN08wRkJVMGs3T3p0QlFXOUpVU3hoUVVGUExGVkJRVThzUzBGQldTeFpRVUZMTEV0QlFWTTdRVUZGZUVNc1lVRkJVeXhaUVVGUExFdEJRV01zWTBGQlN5eExRVUZUTzBGQlRUVkRMR0ZCUVU4c1ZVRkJUeXhMUVVGWkxGbEJRVXNzUzBGQlV6dEJRVVY0UXl4aFFVRlJMRmRCUVU4c1MwRkJZeXhqUVVGTExFdEJRVk03UVVFM1NUTkRMR0ZCUVZVc1dVRkJUenRCUVVOcVFpeGhRVUZOTEZGQlFVY3NXVUZCVVN4RFFVRkZPMEZCUTI1Q0xHRkJRVTBzVVVGQlRUdEJRVU5hTEdGQlFWa3NZMEZCVHl4TFFVTXpRanRCUVZOUE96czdPMmREUVVGbE8wRkJRMlFzYVVKQlFVMHNVVUZCVVR0QlFVTmFMRzFDUVVOV08wRkJVMWM3T3p0dlEwRkJhVUk3UVVGRGNFSXNhVUpCUVZVc1dVRkJXVHRCUVVOd1FpeHRRa0ZEVmp0QlFWTlBPenM3WjBOQlFXRTdRVUZEV2l4cFFrRkJUU3hSUVVGUk8wRkJRMW9zYlVKQlExWTdRVUZUWVRzN08zTkRRVUVyUWp0QlFVTnFReXh2UWtGQll6dEJRVU5xUWl4eFFrRkJTeXhUUVVGclFpeHRRa0ZCVHp0QlFVTjBRaXg1UWtGQldTeGpRVUZQTEV0QlFWRTdRVUZEZWtJN1FVRkRWaXh4UWtGQlN5eFRRVUZyUWl4dFFrRkJVVHRCUVVOMlFpeDVRa0ZCV1N4alFVRlBMRXRCUVZNN1FVRkRNVUk3UVVGRFZpeHhRa0ZCU3l4VFFVRnJRaXh0UWtGQlZUdEJRVU42UWl4NVFrRkJXU3hqUVVGUExFdEJRVmM3UVVGRE5VSTdRVUZEVml4eFFrRkJTeXhUUVVGclFpeHRRa0ZCVHp0QlFVTjBRaXg1UWtGQldTeGpRVUZQTEV0QlFWRTdRVUZEZWtJN1FVRkRWaXh4UWtGQlN5eFRRVUZyUWl4dFFrRkJVVHRCUVVOMlFpeDVRa0ZCV1N4alFVRlBMRXRCUVZNN1FVRkRNVUk3UVVGRFZpeHhRa0ZCU3l4VFFVRnJRaXh0UWtGQlV6dEJRVU40UWl4NVFrRkJXU3hqUVVGUExFdEJRVlU3UVVGRE0wSTdRVUZEVmp0QlFVTlJMSGxDUVVGWkxHTkJRVThzUzBGQlVUdEJRVVYwUXpzN1FVRkRTeXh0UWtGRFZqdEJRVkZQT3pzN1owTkJRV2xDT3pzN08wRkJRV003T3p0QlFVTTFRaXgxUWtGQldTeFJRVUZETEZWQlFWRTdRVUZEY0VJc2IwSkJRVU1zVDBGQllTeFBRVUY1UWl3MlFrRkJaMElzV1VGQlJUdEJRVU40UkN4M1FrRkJVeXhUUVVGakxGbEJRVTg3UVVGRE9VSXNkMEpCUVdkQ0xHRkJRVWNzYjBKQlFVczdRVUZEY0VJc05FSkJRVmtzVjBGQlJ5eERRVUZMTEU5QlFWTXNWVUZCVHl4TlFVRlhPMEZCUXpWRExEUkNRVUZUTEZkQlFVc3NSMEZCVXl4WFFVRkxPMEZCUnk5Q0xEUkNRVUZUTEZGQlFVOHNUVUZCV1N4WlFVRlZPMEZCUld4RExEaENRVUZOTEUxQlFVMHNUMEZCVVR0QlFVVnlRaXcwUWtGQlV5eFhRVUZMTEVkQlFVVTdRVUZEVFN4clJFRkRla0k3UVVGQlRTd3JRa0ZCUlR0QlFVTkhMRzlEUVVOWU8wRkJRMG83UVVGQlF6dEJRVU52UWl3d1EwRkRla0k3UVVGQlRTeDFRa0ZCUlR0QlFVTkJMREJDUVVGVkxHMUNRVUZ4UWl4WlFVRkRPMEZCUTJoRExEUkNRVUZoTEZsQlFVOHNTMEZCVHp0QlFVTXpRaXcwUWtGQll5eGhRVUZaTEZsQlFWTTdRVUZEYmtNc05FSkJRVmtzVjBGQllTeGhRVUZQTEUxQlFWYzdRVUZGZUVNc05FSkJRVk1zVjBGQlN5eEhRVUZUTEZkQlFVazdRVUZGT1VJc05FSkJRVk1zVVVGQlR5eE5RVUZaTEZsQlFWYzdRVUZGYmtNc09FSkJRVTBzVFVGQlRTeFBRVUZSTzBGQlJYSkNMRFJDUVVGVExGbEJRVTBzUjBGQlJUdEJRVU5JTERCRFFVRkxMRTFCUVZrN1FVRkRka0lzYjBOQlExZzdRVUZEU2p0QlFVRkRMSEZDUVdaelFpeEZRV1ZvUWl4TlFVTllPMEZCUTBvN1FVRkRTaXhoUVhSRFZ6dEJRWGREUnpzN095dENRVUZwUWp0QlFVTnlRaXh0UWtGRFZqdEJRVVZqT3pzN0swSkJRV2xDTzBGQlEzSkNMRzFDUVVGTExFdEJRVWtzU1VGQlV5eFZRVU0xUWp0QlFVMWpPenM3SzBKQlFXbENPMmRDUVVGRkxIZEZRVUZoT3p0QlFVTndReXh0UWtGQlN5eExRVUZKTEVsQlFWTXNWVUZCVHl4TlFVRkRMRU5CUVVVc1NVRkJTeXhMUVVGWExGZEJRM1JFTzBGQlRXMUNPenM3YjBOQlFXbENPMEZCUXpGQ0xHMUNRVUZETEZWQlFUQkNPMEZCUTNaQ0xIVkNRVUZGTEVsQlFWTXNUMEZCUlN4SlFVTjJRanRCUVVOS08wRkJSWEZDT3pzN2MwTkJRVTg3UVVGRGJFSXNiVUpCUVVNc1ZVRkJhMEk3UVVGRGJFSXNiMEpCUVZNc1YwRkJUU3hKUVVOU0xFOUJRVThzVDBGQlJTeEpRVUZaTEZsQlF6TkNMRTlCUTAwc1QwRkJReXhEUVVGRkxFbEJRVk1zVDBGQlN5eExRVUZGTEVsQlFXTXNZMEZETDBNN1FVRkRTanRCUVVOSU96czdPenM3UVVGMlMwUXNlVUpCZFV0RE8wRkJSVVFzTmtKQlFYbENMRWtpTENKbWFXeGxJam9pWkdsemRDOXZkWFJyYVhRdFlXNXBiV0YwYjNJdWFuTWlMQ0p6YjNWeVkyVnpRMjl1ZEdWdWRDSTZXeUlvWm5WdVkzUnBiMjRnZDJWaWNHRmphMVZ1YVhabGNuTmhiRTF2WkhWc1pVUmxabWx1YVhScGIyNG9jbTl2ZEN3Z1ptRmpkRzl5ZVNrZ2UxeHVYSFJwWmloMGVYQmxiMllnWlhod2IzSjBjeUE5UFQwZ0oyOWlhbVZqZENjZ0ppWWdkSGx3Wlc5bUlHMXZaSFZzWlNBOVBUMGdKMjlpYW1WamRDY3BYRzVjZEZ4MGJXOWtkV3hsTG1WNGNHOXlkSE1nUFNCbVlXTjBiM0o1S0NrN1hHNWNkR1ZzYzJVZ2FXWW9kSGx3Wlc5bUlHUmxabWx1WlNBOVBUMGdKMloxYm1OMGFXOXVKeUFtSmlCa1pXWnBibVV1WVcxa0tWeHVYSFJjZEdSbFptbHVaU2hiWFN3Z1ptRmpkRzl5ZVNrN1hHNWNkR1ZzYzJVZ2FXWW9kSGx3Wlc5bUlHVjRjRzl5ZEhNZ1BUMDlJQ2R2WW1wbFkzUW5LVnh1WEhSY2RHVjRjRzl5ZEhOYlhDSnZheTFoYm1sdFlYUnZjbHdpWFNBOUlHWmhZM1J2Y25rb0tUdGNibHgwWld4elpWeHVYSFJjZEhKdmIzUmJYQ0p2YXkxaGJtbHRZWFJ2Y2x3aVhTQTlJR1poWTNSdmNua29LVHRjYm4wcEtIUm9hWE1zSUdaMWJtTjBhVzl1S0NrZ2UxeHVjbVYwZFhKdUlGeHVYRzVjYmk4dklGZEZRbEJCUTBzZ1JrOVBWRVZTSUM4dlhHNHZMeUIzWldKd1lXTnJMM1Z1YVhabGNuTmhiRTF2WkhWc1pVUmxabWx1YVhScGIyNGlMQ0lnWEhRdkx5QlVhR1VnYlc5a2RXeGxJR05oWTJobFhHNGdYSFIyWVhJZ2FXNXpkR0ZzYkdWa1RXOWtkV3hsY3lBOUlIdDlPMXh1WEc0Z1hIUXZMeUJVYUdVZ2NtVnhkV2x5WlNCbWRXNWpkR2x2Ymx4dUlGeDBablZ1WTNScGIyNGdYMTkzWldKd1lXTnJYM0psY1hWcGNtVmZYeWh0YjJSMWJHVkpaQ2tnZTF4dVhHNGdYSFJjZEM4dklFTm9aV05ySUdsbUlHMXZaSFZzWlNCcGN5QnBiaUJqWVdOb1pWeHVJRngwWEhScFppaHBibk4wWVd4c1pXUk5iMlIxYkdWelcyMXZaSFZzWlVsa1hTa2dlMXh1SUZ4MFhIUmNkSEpsZEhWeWJpQnBibk4wWVd4c1pXUk5iMlIxYkdWelcyMXZaSFZzWlVsa1hTNWxlSEJ2Y25Sek8xeHVJRngwWEhSOVhHNGdYSFJjZEM4dklFTnlaV0YwWlNCaElHNWxkeUJ0YjJSMWJHVWdLR0Z1WkNCd2RYUWdhWFFnYVc1MGJ5QjBhR1VnWTJGamFHVXBYRzRnWEhSY2RIWmhjaUJ0YjJSMWJHVWdQU0JwYm5OMFlXeHNaV1JOYjJSMWJHVnpXMjF2WkhWc1pVbGtYU0E5SUh0Y2JpQmNkRngwWEhScE9pQnRiMlIxYkdWSlpDeGNiaUJjZEZ4MFhIUnNPaUJtWVd4elpTeGNiaUJjZEZ4MFhIUmxlSEJ2Y25Sek9pQjdmVnh1SUZ4MFhIUjlPMXh1WEc0Z1hIUmNkQzh2SUVWNFpXTjFkR1VnZEdobElHMXZaSFZzWlNCbWRXNWpkR2x2Ymx4dUlGeDBYSFJ0YjJSMWJHVnpXMjF2WkhWc1pVbGtYUzVqWVd4c0tHMXZaSFZzWlM1bGVIQnZjblJ6TENCdGIyUjFiR1VzSUcxdlpIVnNaUzVsZUhCdmNuUnpMQ0JmWDNkbFluQmhZMnRmY21WeGRXbHlaVjlmS1R0Y2JseHVJRngwWEhRdkx5QkdiR0ZuSUhSb1pTQnRiMlIxYkdVZ1lYTWdiRzloWkdWa1hHNGdYSFJjZEcxdlpIVnNaUzVzSUQwZ2RISjFaVHRjYmx4dUlGeDBYSFF2THlCU1pYUjFjbTRnZEdobElHVjRjRzl5ZEhNZ2IyWWdkR2hsSUcxdlpIVnNaVnh1SUZ4MFhIUnlaWFIxY200Z2JXOWtkV3hsTG1WNGNHOXlkSE03WEc0Z1hIUjlYRzVjYmx4dUlGeDBMeThnWlhod2IzTmxJSFJvWlNCdGIyUjFiR1Z6SUc5aWFtVmpkQ0FvWDE5M1pXSndZV05yWDIxdlpIVnNaWE5mWHlsY2JpQmNkRjlmZDJWaWNHRmphMTl5WlhGMWFYSmxYMTh1YlNBOUlHMXZaSFZzWlhNN1hHNWNiaUJjZEM4dklHVjRjRzl6WlNCMGFHVWdiVzlrZFd4bElHTmhZMmhsWEc0Z1hIUmZYM2RsWW5CaFkydGZjbVZ4ZFdseVpWOWZMbU1nUFNCcGJuTjBZV3hzWldSTmIyUjFiR1Z6TzF4dVhHNGdYSFF2THlCa1pXWnBibVVnWjJWMGRHVnlJR1oxYm1OMGFXOXVJR1p2Y2lCb1lYSnRiMjU1SUdWNGNHOXlkSE5jYmlCY2RGOWZkMlZpY0dGamExOXlaWEYxYVhKbFgxOHVaQ0E5SUdaMWJtTjBhVzl1S0dWNGNHOXlkSE1zSUc1aGJXVXNJR2RsZEhSbGNpa2dlMXh1SUZ4MFhIUnBaaWdoWDE5M1pXSndZV05yWDNKbGNYVnBjbVZmWHk1dktHVjRjRzl5ZEhNc0lHNWhiV1VwS1NCN1hHNGdYSFJjZEZ4MFQySnFaV04wTG1SbFptbHVaVkJ5YjNCbGNuUjVLR1Y0Y0c5eWRITXNJRzVoYldVc0lIdGNiaUJjZEZ4MFhIUmNkR052Ym1acFozVnlZV0pzWlRvZ1ptRnNjMlVzWEc0Z1hIUmNkRngwWEhSbGJuVnRaWEpoWW14bE9pQjBjblZsTEZ4dUlGeDBYSFJjZEZ4MFoyVjBPaUJuWlhSMFpYSmNiaUJjZEZ4MFhIUjlLVHRjYmlCY2RGeDBmVnh1SUZ4MGZUdGNibHh1SUZ4MEx5OGdaMlYwUkdWbVlYVnNkRVY0Y0c5eWRDQm1kVzVqZEdsdmJpQm1iM0lnWTI5dGNHRjBhV0pwYkdsMGVTQjNhWFJvSUc1dmJpMW9ZWEp0YjI1NUlHMXZaSFZzWlhOY2JpQmNkRjlmZDJWaWNHRmphMTl5WlhGMWFYSmxYMTh1YmlBOUlHWjFibU4wYVc5dUtHMXZaSFZzWlNrZ2UxeHVJRngwWEhSMllYSWdaMlYwZEdWeUlEMGdiVzlrZFd4bElDWW1JRzF2WkhWc1pTNWZYMlZ6VFc5a2RXeGxJRDljYmlCY2RGeDBYSFJtZFc1amRHbHZiaUJuWlhSRVpXWmhkV3gwS0NrZ2V5QnlaWFIxY200Z2JXOWtkV3hsV3lka1pXWmhkV3gwSjEwN0lIMGdPbHh1SUZ4MFhIUmNkR1oxYm1OMGFXOXVJR2RsZEUxdlpIVnNaVVY0Y0c5eWRITW9LU0I3SUhKbGRIVnliaUJ0YjJSMWJHVTdJSDA3WEc0Z1hIUmNkRjlmZDJWaWNHRmphMTl5WlhGMWFYSmxYMTh1WkNoblpYUjBaWElzSUNkaEp5d2daMlYwZEdWeUtUdGNiaUJjZEZ4MGNtVjBkWEp1SUdkbGRIUmxjanRjYmlCY2RIMDdYRzVjYmlCY2RDOHZJRTlpYW1WamRDNXdjbTkwYjNSNWNHVXVhR0Z6VDNkdVVISnZjR1Z5ZEhrdVkyRnNiRnh1SUZ4MFgxOTNaV0p3WVdOclgzSmxjWFZwY21WZlh5NXZJRDBnWm5WdVkzUnBiMjRvYjJKcVpXTjBMQ0J3Y205d1pYSjBlU2tnZXlCeVpYUjFjbTRnVDJKcVpXTjBMbkJ5YjNSdmRIbHdaUzVvWVhOUGQyNVFjbTl3WlhKMGVTNWpZV3hzS0c5aWFtVmpkQ3dnY0hKdmNHVnlkSGtwT3lCOU8xeHVYRzRnWEhRdkx5QmZYM2RsWW5CaFkydGZjSFZpYkdsalgzQmhkR2hmWDF4dUlGeDBYMTkzWldKd1lXTnJYM0psY1hWcGNtVmZYeTV3SUQwZ1hDSmNJanRjYmx4dUlGeDBMeThnVEc5aFpDQmxiblJ5ZVNCdGIyUjFiR1VnWVc1a0lISmxkSFZ5YmlCbGVIQnZjblJ6WEc0Z1hIUnlaWFIxY200Z1gxOTNaV0p3WVdOclgzSmxjWFZwY21WZlh5aGZYM2RsWW5CaFkydGZjbVZ4ZFdseVpWOWZMbk1nUFNBeEtUdGNibHh1WEc1Y2JpOHZJRmRGUWxCQlEwc2dSazlQVkVWU0lDOHZYRzR2THlCM1pXSndZV05yTDJKdmIzUnpkSEpoY0NCaVpHWmlZMkV6TUdVelpXTm1NelEwT0RNMFpTSXNJbVY0Y0c5eWRDQnBiblJsY21aaFkyVWdTVUZ1YVcxaGRHOXlJSHRjY2x4dUlDQWdJR0Z1YVcxaGRHVW9jM1JoY25RL09pQnVkVzFpWlhJc0lDNHVMbUZ5WjNNZ09pQmhibmxiWFNrNklGQnliMjFwYzJVOFltOXZiR1ZoYmo0N1hISmNiaUFnSUNCelpYUlRkR1Z3S0hOMFpYQTZJRVoxYm1OMGFXOXVLVG9nZEdocGN6dGNjbHh1SUNBZ0lITmxkRVIxY21GMGFXOXVLR1IxY21GMGFXOXVPaUJ1ZFcxaVpYSXBPaUIwYUdsek8xeHlYRzRnSUNBZ2MyVjBVbUYwWlNoeVlYUmxPaUJ1ZFcxaVpYSXBPaUIwYUdsek8xeHlYRzRnSUNBZ2MyVjBWSEpoYm5OcGRHbHZiaWgwY21GdWMybDBhVzl1T2lCQmJtbHRZWFJ2Y2xSeVlXNXphWFJwYjI0cE8xeHlYRzU5WEhKY2JseHlYRzVsZUhCdmNuUWdaVzUxYlNCQmJtbHRZWFJ2Y2xSeVlXNXphWFJwYjI0Z2UxeHlYRzRnSUNBZ1RHbHVaV0Z5TEZ4eVhHNGdJQ0FnUldGelpVbHVMRnh5WEc0Z0lDQWdSV0Z6WlU5MWRDeGNjbHh1SUNBZ0lFVmhjMlZKYms5MWRDeGNjbHh1SUNBZ0lGQjFiR3hKYml4Y2NseHVJQ0FnSUZCMWMyaFBkWFFzWEhKY2JpQWdJQ0JRZFhOb1VIVnNiRnh5WEc1OVhISmNibHh1WEc1Y2JpOHZJRmRGUWxCQlEwc2dSazlQVkVWU0lDOHZYRzR2THlBdUwzTnlZeTlqYjIxdGIyNHVkSE1pTENKcGJYQnZjblFnZXlCSlFXNXBiV0YwYjNJc0lFRnVhVzFoZEc5eVZISmhibk5wZEdsdmJpQjlJR1p5YjIwZ1hDSXVMMk52YlcxdmJsd2lPMXh5WEc1Y2NseHVMeW9xWEhKY2JpQXFJRTkxZEd0cGRDQkJibWx0WVhSdmNseHlYRzRnS2lCQklITnBiWEJzWlNCaGJtbHRZWFJ2Y2lCamJHRnpjeUIwYUdGMElHaGhjeUIwYVcxcGJtY2dablZ1WTNScGIyNXpMaUFnU0dWaGRtbHNlU0JwYm5Od2FYSmxaQ0JpZVNCMGFHVWdYSEpjYmlBcUlHcGhkbUZ6WTNKcGNIUWdZMnhoYzNNZ1lYUWdhSFIwY0RvdkwycGhkbUZ6WTNKcGNIUXVhVzVtYnk5cWN5MWhibWx0WVhScGIyNHVJQ0JKWmlCaGRtRnBiR0ZpYkdVZ2FYUWdkMmxzYkZ4eVhHNGdLaUIxYzJVZ2NtVnhkV1Z6ZEVGdWFXMWhkR2x2YmtaeVlXMWxJRzl5SUdsMElIZHBiR3dnWm1Gc2JDQmlZV05ySUhSdklITmxkRWx1ZEdWeWRtRnNMaUJCYm1sdFlYUmxYSEpjYmlBcUlISmxkSFZ5Ym5NZ1lTQndjbTl0YVhObElITnZJSFJvWVhRZ2VXOTFJR05oYmlCemRHRmpheUJoYm1sdFlYUnBiMjV6TGx4eVhHNGdLaUJjY2x4dUlDb2dRR1Y0Y0c5eWRGeHlYRzRnS2lCQVkyeGhjM01nVDNWMGEybDBRVzVwYldGMGIzSmNjbHh1SUNvZ1FHbHRjR3hsYldWdWRITWdlMGxCYm1sdFlYUnZjbjFjY2x4dUlDb3ZYSEpjYm1WNGNHOXlkQ0JqYkdGemN5QlBkWFJyYVhSQmJtbHRZWFJ2Y2lCcGJYQnNaVzFsYm5SeklFbEJibWx0WVhSdmNpQjdYSEpjYmx4eVhHNGdJQ0FnY0hWaWJHbGpJSE4wWVhKME9pQnVkVzFpWlhJN1hISmNiaUFnSUNCd2NtbDJZWFJsSUY5a2RYSmhkR2x2YmpvZ2JuVnRZbVZ5TzF4eVhHNGdJQ0FnY0hKcGRtRjBaU0JmYzNSbGNEb2dSblZ1WTNScGIyNDdYSEpjYmlBZ0lDQndjbWwyWVhSbElGOXBiblJsY25aaGJEb2diblZ0WW1WeU8xeHlYRzRnSUNBZ2NISnBkbUYwWlNCZmNtRjBaVG9nYm5WdFltVnlPMXh5WEc0Z0lDQWdjSEpwZG1GMFpTQmZkSEpoYm5OcGRHbHZiam9nUm5WdVkzUnBiMjQ3WEhKY2JseHlYRzRnSUNBZ2NIVmliR2xqSUdOdmJuTjBjblZqZEc5eUtDa2dlMXh5WEc0Z0lDQWdJQ0FnSUhSb2FYTXVYMlIxY21GMGFXOXVJRDBnTWpBd08xeHlYRzRnSUNBZ0lDQWdJSFJvYVhNdVgzTjBaWEFnUFNBb0tTQTlQaUI3SUgwN1hISmNiaUFnSUNBZ0lDQWdkR2hwY3k1ZmNtRjBaU0E5SURFMk8xeHlYRzRnSUNBZ0lDQWdJSFJvYVhNdVgzUnlZVzV6YVhScGIyNGdQU0IwYUdsekxteHBibVZoY2p0Y2NseHVJQ0FnSUgxY2NseHVYSEpjYmlBZ0lDQXZLaXBjY2x4dUlDQWdJQ0FxSUZObGRITWdkR2hsSUhOMFpYQWdablZ1WTNScGIyNGdZMkZzYkdWa0lHSjVJR0Z1YVcxaGRHVWdZWFFnWldGamFDQnBiblJsY25aaGJGeHlYRzRnSUNBZ0lDb2dYSEpjYmlBZ0lDQWdLaUJBY0dGeVlXMGdjM1JsY0NCR2RXNWpkR2x2YmlCMGFHRjBJSFJoYTJWeklHRWdaR1ZzZEdFZ1lXNWtJR0Z5WjNOY2NseHVJQ0FnSUNBcUlFQnlaWFIxY201eklIdDBhR2x6ZlNCY2NseHVJQ0FnSUNBcUlFQnRaVzFpWlhKdlppQlBkWFJyYVhSQmJtbHRZWFJ2Y2x4eVhHNGdJQ0FnSUNvdlhISmNiaUFnSUNCelpYUlRkR1Z3S0hOMFpYQTZJRVoxYm1OMGFXOXVLVG9nZEdocGN5QjdYSEpjYmlBZ0lDQWdJQ0FnZEdocGN5NWZjM1JsY0NBOUlITjBaWEE3WEhKY2JpQWdJQ0FnSUNBZ2NtVjBkWEp1SUhSb2FYTTdYSEpjYmlBZ0lDQjlYSEpjYmx4eVhHNGdJQ0FnTHlvcVhISmNiaUFnSUNBZ0tpQlRaWFJ6SUhSb1pTQjBiM1JoYkNCa2RYSmhkR2x2YmlCdlppQjBhR1VnWVc1cGJXRjBhVzl1WEhKY2JpQWdJQ0FnS2lCY2NseHVJQ0FnSUNBcUlFQndZWEpoYlNCN2JuVnRZbVZ5ZlNCa2RYSmhkR2x2YmlCdGFXeHNhWE5sWTI5dVpITWdiMllnYzNCc1pXNWthV1FnWVc1cGJXRjBhVzl1SUNoa1pXWmhkV3gwT2lBeU1EQnRjeWxjY2x4dUlDQWdJQ0FxSUVCeVpYUjFjbTV6SUh0MGFHbHpmU0JjY2x4dUlDQWdJQ0FxSUVCdFpXMWlaWEp2WmlCUGRYUnJhWFJCYm1sdFlYUnZjbHh5WEc0Z0lDQWdJQ292WEhKY2JpQWdJQ0J6WlhSRWRYSmhkR2x2Ymloa2RYSmhkR2x2YmpvZ2JuVnRZbVZ5S1RvZ2RHaHBjeUI3WEhKY2JpQWdJQ0FnSUNBZ2RHaHBjeTVmWkhWeVlYUnBiMjRnUFNCa2RYSmhkR2x2Ymp0Y2NseHVJQ0FnSUNBZ0lDQnlaWFIxY200Z2RHaHBjenRjY2x4dUlDQWdJSDFjY2x4dVhISmNiaUFnSUNBdktpcGNjbHh1SUNBZ0lDQXFJRk5sZENCMGFHVWdhVzUwWlhKMllXd2djbUYwWlNCdlppQjBhR1VnWVc1cGJXRjBhVzl1WEhKY2JpQWdJQ0FnS2lCY2NseHVJQ0FnSUNBcUlFQndZWEpoYlNCN2JuVnRZbVZ5ZlNCeVlYUmxJR2x1ZEdWeWRtRnNJSEpoZEdVZ2FXNGdiV2xzYkdselpXTnZibVJ6SUNoa1pXWmhkV3gwT2lBeE5tMXpLVnh5WEc0Z0lDQWdJQ29nUUhKbGRIVnlibk1nZTNSb2FYTjlJRnh5WEc0Z0lDQWdJQ29nUUcxbGJXSmxjbTltSUU5MWRHdHBkRUZ1YVcxaGRHOXlYSEpjYmlBZ0lDQWdLaTljY2x4dUlDQWdJSE5sZEZKaGRHVW9jbUYwWlRvZ2JuVnRZbVZ5S1RvZ2RHaHBjeUI3WEhKY2JpQWdJQ0FnSUNBZ2RHaHBjeTVmY21GMFpTQTlJSEpoZEdVN1hISmNiaUFnSUNBZ0lDQWdjbVYwZFhKdUlIUm9hWE03WEhKY2JpQWdJQ0I5WEhKY2JseHlYRzRnSUNBZ0x5b3FYSEpjYmlBZ0lDQWdLaUJUWlhSeklIUm9aU0IwYVcxcGJtY2dablZ1WTNScGIyNGdkWE5sWkNCaWVTQjBhR1VnWVc1cGJXRjBaU0JtZFc1amRHbHZiaUFvWkdWbVlYVnNkRG9nVEdsdVpXRnlLVnh5WEc0Z0lDQWdJQ29nWEhKY2JpQWdJQ0FnS2lCQWNHRnlZVzBnZTBGdWFXMWhkRzl5VkhKaGJuTnBkR2x2Ym4wZ2RISmhibk5wZEdsdmJpQlVhVzFwYm1jZ1puVnVZM1JwYjI1Y2NseHVJQ0FnSUNBcUlFQnlaWFIxY201eklIdDBhR2x6ZlNCY2NseHVJQ0FnSUNBcUlFQnRaVzFpWlhKdlppQlBkWFJyYVhSQmJtbHRZWFJ2Y2x4eVhHNGdJQ0FnSUNvdlhISmNiaUFnSUNCelpYUlVjbUZ1YzJsMGFXOXVLSFJ5WVc1emFYUnBiMjQ2SUVGdWFXMWhkRzl5VkhKaGJuTnBkR2x2YmlrNklIUm9hWE1nZTF4eVhHNGdJQ0FnSUNBZ0lITjNhWFJqYUNBb2RISmhibk5wZEdsdmJpa2dlMXh5WEc0Z0lDQWdJQ0FnSUNBZ0lDQmpZWE5sSUVGdWFXMWhkRzl5VkhKaGJuTnBkR2x2Ymk1RllYTmxTVzQ2WEhKY2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCMGFHbHpMbDkwY21GdWMybDBhVzl1SUQwZ2RHaHBjeTVsWVhObFNXNDdYSEpjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0JpY21WaGF6dGNjbHh1SUNBZ0lDQWdJQ0FnSUNBZ1kyRnpaU0JCYm1sdFlYUnZjbFJ5WVc1emFYUnBiMjR1UldGelpVOTFkRHBjY2x4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUhSb2FYTXVYM1J5WVc1emFYUnBiMjRnUFNCMGFHbHpMbVZoYzJWUGRYUTdYSEpjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0JpY21WaGF6dGNjbHh1SUNBZ0lDQWdJQ0FnSUNBZ1kyRnpaU0JCYm1sdFlYUnZjbFJ5WVc1emFYUnBiMjR1UldGelpVbHVUM1YwT2x4eVhHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2RHaHBjeTVmZEhKaGJuTnBkR2x2YmlBOUlIUm9hWE11WldGelpVbHVUM1YwTzF4eVhHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ1luSmxZV3M3WEhKY2JpQWdJQ0FnSUNBZ0lDQWdJR05oYzJVZ1FXNXBiV0YwYjNKVWNtRnVjMmwwYVc5dUxsQjFiR3hKYmpwY2NseHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lIUm9hWE11WDNSeVlXNXphWFJwYjI0Z1BTQjBhR2x6TG5CMWJHeEpianRjY2x4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUdKeVpXRnJPMXh5WEc0Z0lDQWdJQ0FnSUNBZ0lDQmpZWE5sSUVGdWFXMWhkRzl5VkhKaGJuTnBkR2x2Ymk1UWRYTm9UM1YwT2x4eVhHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2RHaHBjeTVmZEhKaGJuTnBkR2x2YmlBOUlIUm9hWE11Y0hWemFFOTFkRHRjY2x4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUdKeVpXRnJPMXh5WEc0Z0lDQWdJQ0FnSUNBZ0lDQmpZWE5sSUVGdWFXMWhkRzl5VkhKaGJuTnBkR2x2Ymk1UWRYTm9VSFZzYkRwY2NseHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lIUm9hWE11WDNSeVlXNXphWFJwYjI0Z1BTQjBhR2x6TG5CMWMyaFFkV3hzTzF4eVhHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ1luSmxZV3M3WEhKY2JpQWdJQ0FnSUNBZ0lDQWdJR1JsWm1GMWJIUTZYSEpjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0IwYUdsekxsOTBjbUZ1YzJsMGFXOXVJRDBnZEdocGN5NXNhVzVsWVhJN1hISmNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQmljbVZoYXp0Y2NseHVJQ0FnSUNBZ0lDQjlYSEpjYmlBZ0lDQWdJQ0FnY21WMGRYSnVJSFJvYVhNN1hISmNiaUFnSUNCOVhISmNibHh5WEc0Z0lDQWdMeW9xWEhKY2JpQWdJQ0FnS2lCQmJtbHRZWFJsY3lCMGFHVWdKM04wWlhBbklHWjFibU4wYVc5dUlHOTJaWElnSjJSMWNtRjBhVzl1SnlCaGRDQnBiblJsY25aaGJDQW5jbUYwWlNjdUlGeHlYRzRnSUNBZ0lDb2dVM1JsY0NCcGN5QmpZV3hzWldRZ2QybDBhQ0JrWld4MFlTQjBhVzFsSUdGdVpDQmhibmtnWVhKbmRXMWxiblJ6SUhSb1lYUWdlVzkxSUhCaGMzTWdkRzhnZEdobElGeHlYRzRnSUNBZ0lDb2dZVzVwYldGMFpTQm1kVzVqZEdsdmJpNWNjbHh1SUNBZ0lDQXFJRUJ3WVhKaGJTQnpkR0Z5ZENCaElHUmhkR1VnS0cxaGFXNXNlU0IxYzJWa0lHWnZjaUIwWlhOMGFXNW5LVnh5WEc0Z0lDQWdJQ292WEhKY2JpQWdJQ0JoYm1sdFlYUmxLSE4wWVhKMFB6b2diblZ0WW1WeUxDQXVMaTVoY21kek9pQmhibmxiWFNrNklGQnliMjFwYzJVOFltOXZiR1ZoYmo0Z2UxeHlYRzRnSUNBZ0lDQWdJSEpsZEhWeWJpQnVaWGNnVUhKdmJXbHpaU2dvY21WemIyeDJaU2tnUFQ0Z2UxeHlYRzRnSUNBZ0lDQWdJQ0FnSUNCcFppQW9kSGx3Wlc5bUlIZHBibVJ2ZDFzbmNtVnhkV1Z6ZEVGdWFXMWhkR2x2YmtaeVlXMWxKMTBnUFQwOUlDZG1kVzVqZEdsdmJpY3BJSHRjY2x4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUd4bGRDQnpkR0Z5ZENBOUlIQmxjbVp2Y20xaGJtTmxMbTV2ZHlncE8xeHlYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdZMjl1YzNRZ2NtRm1RVzVwYldGMFpTQTlJQ2gwYVcxbEtTQTlQaUI3WEhKY2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdiR1YwSUhCeWIyZHlaWE56SUQwZ0tIUnBiV1VnTFNCemRHRnlkQ2tnTHlCMGFHbHpMbDlrZFhKaGRHbHZianRjY2x4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQnBaaUFvY0hKdlozSmxjM01nUGlBeEtTQndjbTluY21WemN5QTlJREU3WEhKY2JseHlYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUM4dklHTmhiR04xYkdGMFpTQjBhR1VnWTNWeWNtVnVkQ0JoYm1sdFlYUnBiMjRnYzNSaGRHVmNjbHh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCc1pYUWdaR1ZzZEdFZ1BTQjBhR2x6TGw5MGNtRnVjMmwwYVc5dUtIQnliMmR5WlhOektWeHlYRzVjY2x4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQjBhR2x6TGw5emRHVndLR1JsYkhSaExDQmhjbWR6S1R0Y2NseHVYSEpjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2FXWWdLSEJ5YjJkeVpYTnpJRHdnTVNrZ2UxeHlYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQnlaWEYxWlhOMFFXNXBiV0YwYVc5dVJuSmhiV1VvY21GbVFXNXBiV0YwWlNrN1hISmNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnZlNCbGJITmxJSHRjY2x4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnY21WemIyeDJaU2gwY25WbEtUdGNjbHh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCOVhISmNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQjlYSEpjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0J5WlhGMVpYTjBRVzVwYldGMGFXOXVSbkpoYldVb2NtRm1RVzVwYldGMFpTazdYSEpjYmlBZ0lDQWdJQ0FnSUNBZ0lIMGdaV3h6WlNCN1hISmNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQjBhR2x6TGw5cGJuUmxjblpoYkNBOUlIZHBibVJ2ZHk1elpYUkpiblJsY25aaGJDZ29LU0E5UGlCN1hISmNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnYkdWMElHUmxiSFJoVkdsdFpTQTlJRVJoZEdVdWJtOTNLQ2s3WEhKY2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdiR1YwSUhScGJXVlFZWE56WldRZ1BTQmtaV3gwWVZScGJXVWdMU0J6ZEdGeWREdGNjbHh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCc1pYUWdjSEp2WjNKbGMzTWdQU0IwYVcxbFVHRnpjMlZrSUM4Z2RHaHBjeTVmWkhWeVlYUnBiMjQ3WEhKY2JseHlYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUdsbUlDaHdjbTluY21WemN5QStJREVwSUhCeWIyZHlaWE56SUQwZ01WeHlYRzVjY2x4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQjJZWElnWkdWc2RHRWdQU0IwYUdsekxsOTBjbUZ1YzJsMGFXOXVLSEJ5YjJkeVpYTnpLVHRjY2x4dVhISmNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnZEdocGN5NWZjM1JsY0Noa1pXeDBZU3dnWVhKbmN5azdYSEpjYmx4eVhHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJR2xtSUNod2NtOW5jbVZ6Y3lBOVBTQXhLU0I3WEhKY2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUdOc1pXRnlTVzUwWlhKMllXd29kR2hwY3k1ZmFXNTBaWEoyWVd3cE8xeHlYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQnlaWE52YkhabEtIUnlkV1VwTzF4eVhHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJSDFjY2x4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUgwc0lIUm9hWE11WDNKaGRHVXBYSEpjYmlBZ0lDQWdJQ0FnSUNBZ0lIMWNjbHh1SUNBZ0lDQWdJQ0I5S1Z4eVhHNGdJQ0FnZlZ4eVhHNWNjbHh1SUNBZ0lIQnlhWFpoZEdVZ2JHbHVaV0Z5S0hCeWIyZHlaWE56T2lCdWRXMWlaWElwSUh0Y2NseHVJQ0FnSUNBZ0lDQnlaWFIxY200Z2NISnZaM0psYzNNN1hISmNiaUFnSUNCOVhISmNibHh5WEc0Z0lDQWdjSEpwZG1GMFpTQmxZWE5sU1c0b2NISnZaM0psYzNNNklHNTFiV0psY2lrZ2UxeHlYRzRnSUNBZ0lDQWdJSEpsZEhWeWJpQk5ZWFJvTG5CdmR5aHdjbTluY21WemN5d2dOU2s3WEhKY2JpQWdJQ0I5WEhKY2JseHlYRzRnSUNBZ2NISnBkbUYwWlNCbFlYTmxUM1YwSUQwZ2RHaHBjeTV0WVd0bFJXRnpaVTkxZENoMGFHbHpMbVZoYzJWSmJpazdYSEpjYmx4eVhHNGdJQ0FnY0hKcGRtRjBaU0JsWVhObFNXNVBkWFFnUFNCMGFHbHpMbTFoYTJWRllYTmxTVzVQZFhRb2RHaHBjeTVsWVhObFNXNHBPMXh5WEc1Y2NseHVJQ0FnSUhCeWFYWmhkR1VnY0hWc2JFbHVLSEJ5YjJkeVpYTnpPaUJ1ZFcxaVpYSXNJSGc2SUc1MWJXSmxjaUE5SURJcElIdGNjbHh1SUNBZ0lDQWdJQ0J5WlhSMWNtNGdUV0YwYUM1d2IzY29jSEp2WjNKbGMzTXNJRElwSUNvZ0tDaDRJQ3NnTVNrZ0tpQndjbTluY21WemN5QXRJSGdwWEhKY2JpQWdJQ0I5WEhKY2JseHlYRzRnSUNBZ2NISnBkbUYwWlNCd2RYTm9UM1YwSUQwZ2RHaHBjeTV0WVd0bFJXRnpaVTkxZENoMGFHbHpMbkIxYkd4SmJpazdYSEpjYmx4eVhHNGdJQ0FnY0hKcGRtRjBaU0J3ZFhOb1VIVnNiQ0E5SUhSb2FYTXViV0ZyWlVWaGMyVkpiazkxZENoMGFHbHpMbkIxYkd4SmJpazdYSEpjYmx4eVhHNGdJQ0FnY0hKcGRtRjBaU0J0WVd0bFJXRnpaVTkxZENoMGFXMXBibWM2SUVaMWJtTjBhVzl1S1NCN1hISmNiaUFnSUNBZ0lDQWdjbVYwZFhKdUlHWjFibU4wYVc5dUlDaHdjbTluY21WemN6b2diblZ0WW1WeUtTQjdYSEpjYmlBZ0lDQWdJQ0FnSUNBZ0lISmxkSFZ5YmlBeElDMGdkR2x0YVc1bktERWdMU0J3Y205bmNtVnpjeWs3WEhKY2JpQWdJQ0FnSUNBZ2ZWeHlYRzRnSUNBZ2ZWeHlYRzVjY2x4dUlDQWdJSEJ5YVhaaGRHVWdiV0ZyWlVWaGMyVkpiazkxZENoMGFXMXBibWNwSUh0Y2NseHVJQ0FnSUNBZ0lDQnlaWFIxY200Z1puVnVZM1JwYjI0Z0tIQnliMmR5WlhOektTQjdYSEpjYmlBZ0lDQWdJQ0FnSUNBZ0lHbG1JQ2h3Y205bmNtVnpjeUE4SUM0MUtWeHlYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdjbVYwZFhKdUlIUnBiV2x1WnlneUlDb2djSEp2WjNKbGMzTXBJQzhnTWp0Y2NseHVJQ0FnSUNBZ0lDQWdJQ0FnWld4elpWeHlYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdjbVYwZFhKdUlDZ3lJQzBnZEdsdGFXNW5LRElnS2lBb01TQXRJSEJ5YjJkeVpYTnpLU2twSUM4Z01qdGNjbHh1SUNBZ0lDQWdJQ0I5WEhKY2JpQWdJQ0I5WEhKY2JuMWNjbHh1WEhKY2JtVjRjRzl5ZENBcUlHWnliMjBnSnk0dlkyOXRiVzl1Snp0Y2JseHVYRzR2THlCWFJVSlFRVU5MSUVaUFQxUkZVaUF2TDF4dUx5OGdMaTl6Y21NdmFXNWtaWGd1ZEhNaVhTd2ljMjkxY21ObFVtOXZkQ0k2SWlKOVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9b3V0a2l0LWFuaW1hdG9yLmpzLm1hcFxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9vdXRraXQtYW5pbWF0b3IvZGlzdC9vdXRraXQtYW5pbWF0b3IuanNcbi8vIG1vZHVsZSBpZCA9IDExXG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJzb3VyY2VSb290IjoiIn0=