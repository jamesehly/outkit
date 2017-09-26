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
/******/ 	return __webpack_require__(__webpack_require__.s = 11);
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
var outkit_animator_1 = __webpack_require__(13);
var Logger_1 = __webpack_require__(12);
var State_1 = __webpack_require__(0);
var ElementHelper_1 = __webpack_require__(4);

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

    function Composite(element) {
        _classCallCheck(this, Composite);

        var _this = _possibleConstructorReturn(this, (Composite.__proto__ || Object.getPrototypeOf(Composite)).call(this, element));

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
var Drawer_1 = __webpack_require__(6);
var Overlay_1 = __webpack_require__(8);
var Window_1 = __webpack_require__(10);
var Draggable_1 = __webpack_require__(5);
var HorizontalLayout_1 = __webpack_require__(7);
var VerticalLayout_1 = __webpack_require__(9);

var ComponentFactory = function () {
    function ComponentFactory() {
        _classCallCheck(this, ComponentFactory);
    }

    _createClass(ComponentFactory, [{
        key: "component",
        value: function component(element) {
            var component = new Component_1.Component(element);
            return component;
        }
    }, {
        key: "drawer",
        value: function drawer(element) {
            var component = new Drawer_1.default(element);
            component.init();
            return component;
        }
    }, {
        key: "overlay",
        value: function overlay(element) {
            var component = new Overlay_1.default(element);
            component.init();
            return component;
        }
    }, {
        key: "window",
        value: function window(element) {
            var component = new Window_1.default(element);
            component.init();
            return component;
        }
    }, {
        key: "draggable",
        value: function draggable(element) {
            var component = new Draggable_1.default(element);
            component.init();
            return component;
        }
    }, {
        key: "hlayout",
        value: function hlayout(element) {
            var component = new HorizontalLayout_1.default(element);
            component.setAnimator(null);
            component.init();
            return component;
        }
    }, {
        key: "vlayout",
        value: function vlayout(element) {
            var component = new VerticalLayout_1.default(element);
            component.setAnimator(null);
            component.init();
            return component;
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
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

Object.defineProperty(exports, "__esModule", { value: true });
var Composite_1 = __webpack_require__(2);
var State_1 = __webpack_require__(0);

var Draggable = function (_Composite_1$Composit) {
    _inherits(Draggable, _Composite_1$Composit);

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
}(Composite_1.Composite);

exports.default = Draggable;

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

var Drawer = function (_Composite_1$Composit) {
    _inherits(Drawer, _Composite_1$Composit);

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
}(Composite_1.Composite);

exports.default = Drawer;

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
var Composite_1 = __webpack_require__(2);
var Component_1 = __webpack_require__(1);
var ComponentFactory_1 = __webpack_require__(3);
var ElementHelper_1 = __webpack_require__(4);
var State_1 = __webpack_require__(0);

var HorizontalLayout = function (_Composite_1$Composit) {
    _inherits(HorizontalLayout, _Composite_1$Composit);

    function HorizontalLayout(element) {
        _classCallCheck(this, HorizontalLayout);

        var _this = _possibleConstructorReturn(this, (HorizontalLayout.__proto__ || Object.getPrototypeOf(HorizontalLayout)).call(this, element));

        _this.resetChildren();
        _this.registerEvent('init', function () {
            return _this.init();
        });
        return _this;
    }

    _createClass(HorizontalLayout, [{
        key: "init",
        value: function init() {
            var el = this.getElement();
            var factory = new ComponentFactory_1.ComponentFactory();
            this.resetChildren();
            for (var i = 0; i < el.children.length; i++) {
                var child = el.children[i];
                if (!child.id) ElementHelper_1.default.setGuidId(child);
                var childComponent = new Component_1.Component("#" + child.id);
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
}(Composite_1.Composite);

exports.default = HorizontalLayout;

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
var Component_1 = __webpack_require__(1);
var ComponentFactory_1 = __webpack_require__(3);
var ElementHelper_1 = __webpack_require__(4);
var State_1 = __webpack_require__(0);

var VerticalLayout = function (_Composite_1$Composit) {
    _inherits(VerticalLayout, _Composite_1$Composit);

    function VerticalLayout(element) {
        _classCallCheck(this, VerticalLayout);

        var _this = _possibleConstructorReturn(this, (VerticalLayout.__proto__ || Object.getPrototypeOf(VerticalLayout)).call(this, element));

        _this.resetChildren();
        _this.registerEvent('init', function () {
            return _this.init();
        });
        return _this;
    }

    _createClass(VerticalLayout, [{
        key: "init",
        value: function init() {
            var el = this.getElement();
            var factory = new ComponentFactory_1.ComponentFactory();
            this.resetChildren();
            for (var i = 0; i < el.children.length; i++) {
                var child = el.children[i];
                if (!child.id) ElementHelper_1.default.setGuidId(child);
                var childComponent = new Component_1.Component('#' + child.id);
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
}(Composite_1.Composite);

exports.default = VerticalLayout;

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
var Composite_1 = __webpack_require__(2);

var Window = function (_Composite_1$Composit) {
    _inherits(Window, _Composite_1$Composit);

    function Window(element, options) {
        _classCallCheck(this, Window);

        var _this = _possibleConstructorReturn(this, (Window.__proto__ || Object.getPrototypeOf(Window)).call(this, element));

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

    return Window;
}(Composite_1.Composite);

exports.default = Window;

/***/ }),
/* 11 */
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
__export(__webpack_require__(9));
__export(__webpack_require__(7));
__export(__webpack_require__(10));
__export(__webpack_require__(8));
__export(__webpack_require__(5));

/***/ }),
/* 12 */
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCBiMjI2NzMzNDkzOTljN2MyM2YyMyIsIndlYnBhY2s6Ly8vLi9zcmMvc3RhdGUvU3RhdGUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudC9Db21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudC9Db21wb3NpdGUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudC9Db21wb25lbnRGYWN0b3J5LnRzIiwid2VicGFjazovLy8uL3NyYy91dGlsL0VsZW1lbnRIZWxwZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudC9EcmFnZ2FibGUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudC9EcmF3ZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudC9Ib3Jpem9udGFsTGF5b3V0LnRzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnQvT3ZlcmxheS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50L1ZlcnRpY2FsTGF5b3V0LnRzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnQvV2luZG93LnRzIiwid2VicGFjazovLy8uL3NyYy9vdXRraXQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWwvTG9nZ2VyLnRzIiwid2VicGFjazovLy8uL34vb3V0a2l0LWFuaW1hdG9yL2Rpc3Qvb3V0a2l0LWFuaW1hdG9yLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsTztBQ1ZBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtB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QUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQSw4RkFBOEYsYUFBYTtBQUMzRztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQSxhQUFhO0FBQ2I7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLG1FQUFtRTtBQUNuRTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBLENBQUM7O0FBRUQ7QUFDQTs7QUFFQSxPQUFPO0FBQ1A7QUFDQSxDQUFDO0FBQ0QsMkNBQTJDLGNBQWM7QUFDekQsMkMiLCJmaWxlIjoiZGlzdC9vdXRraXQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShbXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJvdXRraXRcIl0gPSBmYWN0b3J5KCk7XG5cdGVsc2Vcblx0XHRyb290W1wib3V0a2l0XCJdID0gZmFjdG9yeSgpO1xufSkodGhpcywgZnVuY3Rpb24oKSB7XG5yZXR1cm4gXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGlkZW50aXR5IGZ1bmN0aW9uIGZvciBjYWxsaW5nIGhhcm1vbnkgaW1wb3J0cyB3aXRoIHRoZSBjb3JyZWN0IGNvbnRleHRcbiBcdF9fd2VicGFja19yZXF1aXJlX18uaSA9IGZ1bmN0aW9uKHZhbHVlKSB7IHJldHVybiB2YWx1ZTsgfTtcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMTEpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIGIyMjY3MzM0OTM5OWM3YzIzZjIzIiwiZXhwb3J0IGNsYXNzIFN0YXRlIHtcclxuICAgIC8vIHBvc3NpYmx5IHJlZmFjdG9yIHRoZXNlIGNsYXNzZXMgaW50byBhbiBhcnJheSBvZiBjbGFzc2VzIHRoYXQgYXJlIG1hbmFnZWRcclxuICAgIC8vIHZpYSBtZXRob2RzIGluIHRoaXMgY2xhc3NcclxuICAgIG9rQ2xhc3NOYW1lPzogc3RyaW5nO1xyXG4gICAgc3RhdGVDbGFzc05hbWU/OiBzdHJpbmc7XHJcbiAgICBzdHlsZT86IHtcclxuICAgICAgICBoZWlnaHQ/OiBzdHJpbmc7XHJcbiAgICAgICAgd2lkdGg/OiBzdHJpbmc7XHJcbiAgICAgICAgb3ZlcmZsb3c/OiBzdHJpbmc7XHJcbiAgICAgICAgZmxvYXQ/OiBzdHJpbmc7XHJcbiAgICAgICAgcG9zaXRpb24/OiBzdHJpbmc7XHJcbiAgICAgICAgekluZGV4Pzogc3RyaW5nO1xyXG4gICAgICAgIHRvcD86IHN0cmluZztcclxuICAgICAgICBib3R0b20/OiBzdHJpbmc7XHJcbiAgICAgICAgbGVmdD86IHN0cmluZztcclxuICAgICAgICByaWdodD86IHN0cmluZztcclxuICAgICAgICBkaXNwbGF5Pzogc3RyaW5nO1xyXG4gICAgICAgIGJhY2tncm91bmRDb2xvcj86IHN0cmluZztcclxuICAgICAgICBvcGFjaXR5Pzogc3RyaW5nO1xyXG4gICAgICAgIG1hcmdpblRvcD86IHN0cmluZztcclxuICAgICAgICBtYXJnaW5Cb3R0b20/OiBzdHJpbmc7XHJcbiAgICAgICAgbWFyZ2luTGVmdD86IHN0cmluZztcclxuICAgICAgICBtYXJnaW5SaWdodD86IHN0cmluZztcclxuICAgICAgICBwYWRkaW5nVG9wPzogc3RyaW5nO1xyXG4gICAgICAgIHBhZGRpbmdCb3R0b20/OiBzdHJpbmc7XHJcbiAgICAgICAgcGFkZGluZ0xlZnQ/OiBzdHJpbmc7XHJcbiAgICAgICAgcGFkZGluZ1JpZ2h0Pzogc3RyaW5nO1xyXG4gICAgfVxyXG4gICAgc3RhdGljIHJlYWRvbmx5IGFuaW1hdGVkUHJvcHM6IEFycmF5PHN0cmluZz4gPSBbXHJcbiAgICAgICAgJ3N0eWxlLmhlaWdodCcsIFxyXG4gICAgICAgICdzdHlsZS53aWR0aCcsIFxyXG4gICAgICAgICdzdHlsZS50b3AnLCBcclxuICAgICAgICAnc3R5bGUuYm90dG9tJywgXHJcbiAgICAgICAgJ3N0eWxlLmxlZnQnLCBcclxuICAgICAgICAnc3R5bGUucmlnaHQnLCBcclxuICAgICAgICAnc3R5bGUub3BhY2l0eScsIFxyXG4gICAgICAgICdzdHlsZS56SW5kZXgnLFxyXG4gICAgICAgICdzdHJpbmcubWFyZ2luVG9wJyxcclxuICAgICAgICAnc3RyaW5nLm1hcmdpbkJvdHRvbScsXHJcbiAgICAgICAgJ3N0cmluZy5tYXJnaW5MZWZ0JyxcclxuICAgICAgICAnc3RyaW5nLm1hcmdpblJpZ2h0JywgXHJcbiAgICAgICAgJ3N0cmluZy5wYWRkaW5nVG9wJyxcclxuICAgICAgICAnc3RyaW5nLnBhZGRpbmdCb3R0b20nLFxyXG4gICAgICAgICdzdHJpbmcucGFkZGluZ0xlZnQnLFxyXG4gICAgICAgICdzdHJpbmcucGFkZGluZ1JpZ2h0JyxcclxuICAgICAgICBdO1xyXG4gICAgXHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLm9rQ2xhc3NOYW1lID0gJyc7XHJcbiAgICAgICAgdGhpcy5zdGF0ZUNsYXNzTmFtZSA9ICcnO1xyXG4gICAgICAgIHRoaXMuc3R5bGUgPSB7fTtcclxuICAgICAgICB9XHJcblxyXG4gICAgc3RhdGljIGFuaW1hdGVkKHR5cGU6IHN0cmluZykge1xyXG4gICAgICAgIHZhciBpbmRleCA9IHRoaXMuYW5pbWF0ZWRQcm9wcy5pbmRleE9mKHR5cGUpO1xyXG4gICAgICAgIHJldHVybiBpbmRleCA+PSAwO1xyXG4gICAgfSBcclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvc3RhdGUvU3RhdGUudHMiLCJpbXBvcnQgeyBJQW5pbWF0b3IsIE91dGtpdEFuaW1hdG9yIH0gZnJvbSAnb3V0a2l0LWFuaW1hdG9yJztcclxuaW1wb3J0IExvZ2dlciwgeyBJTG9nZ2VyIH0gZnJvbSBcIi4uL3V0aWwvTG9nZ2VyXCI7XHJcbmltcG9ydCB7IFN0YXRlIH0gZnJvbSBcIi4uL3N0YXRlL1N0YXRlXCI7XHJcbmltcG9ydCBFbGVtZW50SGVscGVyIGZyb20gXCIuLi91dGlsL0VsZW1lbnRIZWxwZXJcIjtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSUNvbXBvbmVudCB7XHJcbiAgICByZWxheShtZXNzYWdlOiBzdHJpbmcpOiBQcm9taXNlPGFueT47XHJcbiAgICByZWdpc3RlckV2ZW50KG5hbWU6IHN0cmluZywgZnVuYz86IEZ1bmN0aW9uKTogdGhpcztcclxuICAgIHNldEVsZW1lbnQoZWxlbWVudDogSFRNTEVsZW1lbnQpOiB0aGlzO1xyXG4gICAgZ2V0RWxlbWVudCgpOiBIVE1MRWxlbWVudDtcclxuICAgIGdldEFuaW1hdG9yKCk6IElBbmltYXRvcjtcclxuICAgIHNldEFuaW1hdG9yKGFuaW1hdG9yOiBJQW5pbWF0b3IpOiB0aGlzO1xyXG4gICAgYWRkQ2hpbGQoY29tcG9uZW50OiBJQ29tcG9uZW50KTogdGhpcztcclxuICAgIHJlbW92ZUNoaWxkKGNvbXBvbmVudDogSUNvbXBvbmVudCk6IHRoaXM7XHJcbiAgICBnZXRDaGlsZCgpOiBJQ29tcG9uZW50O1xyXG4gICAgZ2V0Um9vdCgpOiBJQ29tcG9uZW50O1xyXG4gICAgc2V0UGFyZW50KHBhcmVudDogSUNvbXBvbmVudCk6IHRoaXM7XHJcbiAgICByZW5kZXIobmV3U3RhdGU6IFN0YXRlKTogUHJvbWlzZTxhbnk+O1xyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgQ29tcG9uZW50IGltcGxlbWVudHMgSUNvbXBvbmVudCB7XHJcblxyXG4gICAgcHJpdmF0ZSBfY2hpbGQ6IElDb21wb25lbnQ7XHJcbiAgICBwcml2YXRlIF9wYXJlbnQ6IElDb21wb25lbnQ7XHJcblxyXG4gICAgcHJvdGVjdGVkIF9lbGVtZW50OiBIVE1MRWxlbWVudDtcclxuICAgIHByb3RlY3RlZCBfbG9nZ2VyOiBJTG9nZ2VyO1xyXG4gICAgcHJvdGVjdGVkIF9hbmltYXRvcjogSUFuaW1hdG9yO1xyXG4gICAgcHJvdGVjdGVkIF9ldmVudHM6IHsgW2lkOiBzdHJpbmddOiBGdW5jdGlvbiB9O1xyXG4gICAgcHJvdGVjdGVkIF9zdGF0ZTogU3RhdGU7XHJcblxyXG4gICAgY29uc3RydWN0b3IoZWxlbWVudDogc3RyaW5nKSB7XHJcbiAgICAgICAgdGhpcy5fZXZlbnRzID0ge307XHJcbiAgICAgICAgdGhpcy5fbG9nZ2VyID0gbmV3IExvZ2dlcigpO1xyXG4gICAgICAgIHRoaXMuX2FuaW1hdG9yID0gbmV3IE91dGtpdEFuaW1hdG9yKCk7XHJcbiAgICAgICAgY29uc3QgZWwgPSBFbGVtZW50SGVscGVyLnF1ZXJ5RWxlbWVudChlbGVtZW50KTtcclxuICAgICAgICBpZiAoIWVsKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2xvZ2dlci5lcnJvcihgRWxlbWVudCBcIiR7ZWxlbWVudH1cIiBjb3VsZCBub3QgYmUgZm91bmQuICBFbnN1cmUgeW91ciBxdWVyeSBzdHJpbmcgaXMgYSB2YWxpZCBjc3Mgc2VsZWN0b3IuYCk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5zZXRFbGVtZW50KGVsKTtcclxuICAgICAgICB0aGlzLl9zdGF0ZSA9IG51bGw7XHJcbiAgICAgICAgaWYgKHR5cGVvZiB0aGlzLl9hbmltYXRvciAhPT0gJ3VuZGVmaW5lZCcgJiZcclxuICAgICAgICAgICAgdGhpcy5fYW5pbWF0b3IgIT09IG51bGwgJiZcclxuICAgICAgICAgICAgdHlwZW9mIHRoaXMuX2FuaW1hdG9yLnNldFN0ZXAgIT09ICd1bmRlZmluZWQnICYmXHJcbiAgICAgICAgICAgIHR5cGVvZiB0aGlzLl9hbmltYXRvci5zZXRTdGVwID09PSAnZnVuY3Rpb24nKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2FuaW1hdG9yLnNldFN0ZXAodGhpcy5zdGVwKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0RWxlbWVudCgpOiBIVE1MRWxlbWVudCB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2VsZW1lbnQ7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0RWxlbWVudChlbGVtZW50OiBIVE1MRWxlbWVudCk6IHRoaXMge1xyXG4gICAgICAgIHRoaXMuX2VsZW1lbnQgPSBlbGVtZW50O1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG5cclxuICAgIGdldEFuaW1hdG9yKCk6IElBbmltYXRvciB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2FuaW1hdG9yO1xyXG4gICAgfVxyXG5cclxuICAgIHNldEFuaW1hdG9yKGFuaW1hdG9yOiBJQW5pbWF0b3IpOiB0aGlzIHtcclxuICAgICAgICB0aGlzLl9hbmltYXRvciA9IGFuaW1hdG9yO1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG5cclxuICAgIGFkZENoaWxkKGNvbXBvbmVudDogSUNvbXBvbmVudCk6IHRoaXMge1xyXG4gICAgICAgIHRoaXMuX2NoaWxkID0gY29tcG9uZW50O1xyXG4gICAgICAgIGNvbXBvbmVudC5zZXRQYXJlbnQodGhpcyk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgcmVtb3ZlQ2hpbGQoY29tcG9uZW50OiBJQ29tcG9uZW50KTogdGhpcyB7XHJcbiAgICAgICAgdGhpcy5fY2hpbGQgPSBudWxsO1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG5cclxuICAgIGdldENoaWxkKCk6IElDb21wb25lbnQge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9jaGlsZDtcclxuICAgIH1cclxuXHJcbiAgICBzZXRQYXJlbnQocGFyZW50OiBJQ29tcG9uZW50KSB7XHJcbiAgICAgICAgdGhpcy5fcGFyZW50ID0gcGFyZW50O1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG5cclxuICAgIGdldFJvb3QoKTogSUNvbXBvbmVudCB7XHJcbiAgICAgICAgaWYgKHRoaXMuX3BhcmVudCAmJiB0eXBlb2YgdGhpcy5fcGFyZW50WydnZXRSb290J10gPT09ICdmdW5jdGlvbicpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3BhcmVudC5nZXRSb290KCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG5cclxuICAgIGdldFN0YXRlKCk6IFN0YXRlIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fc3RhdGU7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0U3RhdGUoc3RhdGU6IFN0YXRlKTogdGhpcyB7XHJcbiAgICAgICAgdGhpcy5fc3RhdGUgPSBzdGF0ZTtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuXHJcbiAgICByZWdpc3RlckV2ZW50KG5hbWU6IHN0cmluZywgZnVuYz86IEZ1bmN0aW9uKTogdGhpcyB7XHJcbiAgICAgICAgdGhpcy5fZXZlbnRzW25hbWVdID0gZnVuYztcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuXHJcbiAgICByZWxheShtZXNzYWdlOiBzdHJpbmcpOiBQcm9taXNlPGFueT4ge1xyXG4gICAgICAgIGxldCBwcm9taXNlcyA9IFtdXHJcbiAgICAgICAgaWYgKHR5cGVvZiB0aGlzLl9ldmVudHNbbWVzc2FnZV0gPT09ICdmdW5jdGlvbicpXHJcbiAgICAgICAgICAgIHByb21pc2VzLnB1c2godGhpcy5fZXZlbnRzW21lc3NhZ2VdKCkpO1xyXG5cclxuICAgICAgICBsZXQgY2hpbGQgPSB0aGlzLmdldENoaWxkKCk7XHJcbiAgICAgICAgaWYgKHR5cGVvZiBjaGlsZCA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIGNoaWxkWydyZWxheSddID09PSAnZnVuY3Rpb24nKVxyXG4gICAgICAgICAgICBwcm9taXNlcy5wdXNoKHRoaXMuZ2V0Q2hpbGQoKS5yZWxheShtZXNzYWdlKSk7XHJcbiAgICAgICAgcmV0dXJuIFByb21pc2UuYWxsKHByb21pc2VzKTtcclxuICAgIH1cclxuXHJcbiAgICBtZXJnZShuZXdTdGF0ZSwgb2xkU3RhdGUpIHtcclxuICAgICAgICBsZXQgc3RhdGUgPSBuZXcgU3RhdGUoKTtcclxuICAgICAgICBzdGF0ZSA9IE9iamVjdC5hc3NpZ24oc3RhdGUsIG9sZFN0YXRlLCBuZXdTdGF0ZSk7XHJcbiAgICAgICAgc3RhdGUuc3R5bGUgPSBPYmplY3QuYXNzaWduKHt9LCBvbGRTdGF0ZS5zdHlsZSwgbmV3U3RhdGUuc3R5bGUpO1xyXG4gICAgICAgIHJldHVybiBzdGF0ZTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIERyYXcgdGhlIGN1cnJlbnQgc3RhdGUgb250byB0aGUgZWxlbWVudCwgb25seSBjaGFuZ2luZyB0aGUgaXRlbXMgdGhhdCBoYXZlXHJcbiAgICAgKiBjaGFuZ2VkIHNpbmNlIHRoZSBsYXN0IGRyYXcuXHJcbiAgICAgKiBAcmV0dXJucyB7UHJvbWlzZTxTdGF0ZT59XHJcbiAgICAgKiBAbWVtYmVyb2YgQ29tcG9uZW50XHJcbiAgICAgKi9cclxuICAgIHJlbmRlcihuZXdTdGF0ZTogU3RhdGUpOiBQcm9taXNlPFN0YXRlPiB7XHJcbiAgICAgICAgbGV0IG9sZFN0YXRlID0gdGhpcy5fc3RhdGU7XHJcbiAgICAgICAgbGV0IGlzSW5pdGlhbCA9IGZhbHNlO1xyXG4gICAgICAgIGlmICghdGhpcy5fc3RhdGUpIHtcclxuICAgICAgICAgICAgb2xkU3RhdGUgPSBuZXcgU3RhdGUoKTtcclxuICAgICAgICAgICAgaXNJbml0aWFsID0gdHJ1ZTtcclxuICAgICAgICAgICAgdGhpcy5fZWxlbWVudC5zdHlsZS5jc3NUZXh0ID0gbnVsbDsgLy8gY2xlYXIgaW5saW5lIHN0bHlsZXNcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBuZXdTdGF0ZSA9IHRoaXMubWVyZ2UobmV3U3RhdGUsIG9sZFN0YXRlKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgICAgICAgIGlmICghdGhpcy5fZWxlbWVudCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fbG9nZ2VyLmVycm9yKGBFbGVtZW50IGlzIHVuZGVmaW5lZC4gIFVzZSBzZXRFbGVtZW50KCkgYmVmb3JlIGNhbGxpbmcgcmVuZGVyKCkuYClcclxuICAgICAgICAgICAgICAgIHJlamVjdChvbGRTdGF0ZSk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmIChuZXdTdGF0ZS5zdGF0ZUNsYXNzTmFtZSAmJiBuZXdTdGF0ZS5zdGF0ZUNsYXNzTmFtZSAhPSBvbGRTdGF0ZS5zdGF0ZUNsYXNzTmFtZSkge1xyXG4gICAgICAgICAgICAgICAgRWxlbWVudEhlbHBlci5jaGFuZ2VDbGFzcyh0aGlzLl9lbGVtZW50LCBuZXdTdGF0ZS5zdGF0ZUNsYXNzTmFtZSwgb2xkU3RhdGUuc3RhdGVDbGFzc05hbWUpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAobmV3U3RhdGUub2tDbGFzc05hbWUgJiYgbmV3U3RhdGUub2tDbGFzc05hbWUgIT0gb2xkU3RhdGUub2tDbGFzc05hbWUpIHtcclxuICAgICAgICAgICAgICAgIEVsZW1lbnRIZWxwZXIuY2hhbmdlQ2xhc3ModGhpcy5fZWxlbWVudCwgbmV3U3RhdGUub2tDbGFzc05hbWUsIG9sZFN0YXRlLm9rQ2xhc3NOYW1lKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLy8gTG9vcCB0aHJvdWdoIG5vbiBhbmltYXRhYmxlIHByb3BlcnRpZXMgb24gc3R5bGUgYW5kIHNldCB0aGVtXHJcbiAgICAgICAgICAgIGZvciAobGV0IG5hbWUgaW4gbmV3U3RhdGUuc3R5bGUpIHtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLl9hbmltYXRvciAmJiAoU3RhdGUuYW5pbWF0ZWQoJ3N0eWxlLicgKyBuYW1lKSAmJiBuZXdTdGF0ZS5zdHlsZVtuYW1lXSAhPT0gbnVsbCkgJiYgIWlzSW5pdGlhbClcclxuICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcclxuXHJcbiAgICAgICAgICAgICAgICBsZXQgbnMgPSBuZXdTdGF0ZS5zdHlsZVtuYW1lXTtcclxuICAgICAgICAgICAgICAgIGxldCBvcyA9IG9sZFN0YXRlLnN0eWxlW25hbWVdO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmIChucyA9PT0gb3MpXHJcbiAgICAgICAgICAgICAgICAgICAgY29udGludWU7XHJcblxyXG4gICAgICAgICAgICAgICAgdGhpcy5fZWxlbWVudC5zdHlsZVtuYW1lXSA9IG5zO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAvLyBJbml0aWFsIHN0YXRlXHJcbiAgICAgICAgICAgIGlmIChpc0luaXRpYWwpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuX2xvZ2dlci5sb2coYFtJbml0aWFsIFN0YXRlXVsjJHt0aGlzLl9lbGVtZW50LmlkfV06ICAke0pTT04uc3RyaW5naWZ5KG5ld1N0YXRlKX0gXWApO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fc3RhdGUgPSBuZXdTdGF0ZTtcclxuICAgICAgICAgICAgICAgIHJlc29sdmUobmV3U3RhdGUpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAvLyBTdGFydCB0aGUgYW5pbWF0b3IgdG8gYW5pbWF0ZSBhbnkgYW5pbWF0YWJsZSBwcm9wZXJ0aWVzXHJcbiAgICAgICAgICAgIGlmICh0aGlzLl9hbmltYXRvcikge1xyXG4gICAgICAgICAgICAgICAgbGV0IG46IG51bWJlciA9IERhdGUubm93KCk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5fYW5pbWF0b3IuYW5pbWF0ZShuLCBuZXdTdGF0ZSwgb2xkU3RhdGUpXHJcbiAgICAgICAgICAgICAgICAgICAgLnRoZW4oKGZpbmlzaGVkKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChmaW5pc2hlZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fbG9nZ2VyLmxvZyhgW1VwZGF0ZWQgU3RhdGVdWyMke3RoaXMuX2VsZW1lbnQuaWR9XTogICR7SlNPTi5zdHJpbmdpZnkobmV3U3RhdGUpfSBdYCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9zdGF0ZSA9IG5ld1N0YXRlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShuZXdTdGF0ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvLyBObyBhbmltYXRvciwgc28ganVzdCByZXNvbHZlXHJcbiAgICAgICAgICAgIHRoaXMuX3N0YXRlID0gbmV3U3RhdGU7XHJcbiAgICAgICAgICAgIHJlc29sdmUobmV3U3RhdGUpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdGVwID0gKGRlbHRhOiBudW1iZXIsIGFyZ3M6IGFueVtdKSA9PiB7XHJcbiAgICAgICAgLy8gTG9vcCB0aHJvdWdoIHZhbHVlcyBhbmQgbWFrZSBsaXZlIGNoYW5nZXMgdG8gZWxlbWVudFxyXG4gICAgICAgIHZhciBuZXdTdGF0ZSA9IGFyZ3NbMF07XHJcbiAgICAgICAgdmFyIG9sZFN0YXRlID0gYXJnc1sxXTtcclxuICAgICAgICBmb3IgKGxldCBuYW1lIGluIG5ld1N0YXRlLnN0eWxlKSB7XHJcbiAgICAgICAgICAgIGlmICghU3RhdGUuYW5pbWF0ZWQoJ3N0eWxlLicgKyBuYW1lKSlcclxuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xyXG5cclxuICAgICAgICAgICAgbGV0IG5zID0gbmV3U3RhdGUuc3R5bGVbbmFtZV07XHJcbiAgICAgICAgICAgIGxldCBvcyA9IG9sZFN0YXRlLnN0eWxlW25hbWVdO1xyXG5cclxuICAgICAgICAgICAgaWYgKG5zID09PSBvcylcclxuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xyXG5cclxuICAgICAgICAgICAgbGV0IG5zdiA9IHBhcnNlRmxvYXQobnMpO1xyXG4gICAgICAgICAgICBsZXQgb3N2ID0gcGFyc2VGbG9hdChvcyk7XHJcblxyXG4gICAgICAgICAgICBpZiAoaXNGaW5pdGUobnN2KSAmJiBpc0Zpbml0ZShvc3YpKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgdmFsdWUgPSAobnN2IC0gb3N2KSAqIGRlbHRhICsgb3N2ICsgJyc7XHJcbiAgICAgICAgICAgICAgICBpZiAoKCFpc0Zpbml0ZShucykgJiYgbnMubWF0Y2goL3B4JC8pKSB8fCAoIWlzRmluaXRlKG9zKSAmJiBvcy5tYXRjaCgvcHgkLykpKVxyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlID0gYCR7dmFsdWV9cHhgO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fZWxlbWVudC5zdHlsZVtuYW1lXSA9IHZhbHVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tcG9uZW50L0NvbXBvbmVudC50cyIsImltcG9ydCB7IENvbXBvbmVudCwgSUNvbXBvbmVudCB9IGZyb20gXCIuL0NvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBJQW5pbWF0b3IgfSBmcm9tICdvdXRraXQtYW5pbWF0b3InO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBJQ29tcG9zaXRlIGV4dGVuZHMgSUNvbXBvbmVudCB7XHJcbiAgICBnZXRDaGlsZHJlbigpOiBBcnJheTxJQ29tcG9uZW50PlxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgQ29tcG9zaXRlIGV4dGVuZHMgQ29tcG9uZW50IGltcGxlbWVudHMgSUNvbXBvc2l0ZSB7XHJcblxyXG4gICAgcHJpdmF0ZSBfbGlzdDogQXJyYXk8SUNvbXBvbmVudD47XHJcblxyXG4gICAgY29uc3RydWN0b3IoZWxlbWVudDogc3RyaW5nKSB7XHJcbiAgICAgICAgc3VwZXIoZWxlbWVudCk7XHJcbiAgICAgICAgdGhpcy5fbGlzdCA9IFtdO1xyXG4gICAgfVxyXG5cclxuICAgIGFkZENoaWxkKGNvbXBvbmVudDogSUNvbXBvbmVudCk6IHRoaXMge1xyXG4gICAgICAgIHRoaXMuX2xpc3QucHVzaChjb21wb25lbnQpO1xyXG4gICAgICAgIGNvbXBvbmVudC5zZXRQYXJlbnQodGhpcyk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgcmVtb3ZlQ2hpbGQoY29tcG9uZW50OiBJQ29tcG9uZW50KTogdGhpcyB7XHJcbiAgICAgICAgbGV0IGluZGV4ID0gdGhpcy5fbGlzdC5pbmRleE9mKGNvbXBvbmVudCk7XHJcbiAgICAgICAgdGhpcy5fbGlzdC5zcGxpY2UoaW5kZXgsIDEpO1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG5cclxuICAgIGdldENoaWxkKCk6IElDb21wb25lbnQge1xyXG4gICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG5cclxuICAgIGdldENoaWxkcmVuKCk6IElDb21wb25lbnRbXSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2xpc3Q7XHJcbiAgICB9XHJcblxyXG4gICAgcmVsYXkobWVzc2FnZTogc3RyaW5nKTogUHJvbWlzZTxhbnk+IHtcclxuICAgICAgICB2YXIgcHJvbWlzZXMgPSBbXTtcclxuICAgICAgICBpZiAodHlwZW9mIHRoaXMuX2V2ZW50c1ttZXNzYWdlXSA9PT0gJ2Z1bmN0aW9uJylcclxuICAgICAgICAgICAgcHJvbWlzZXMucHVzaCh0aGlzLl9ldmVudHNbbWVzc2FnZV0oKSk7XHJcblxyXG4gICAgICAgIGZvciAobGV0IGNoaWxkIG9mIHRoaXMuX2xpc3QpIHtcclxuICAgICAgICAgICAgaWYgKHR5cGVvZiBjaGlsZCA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIGNoaWxkWydyZWxheSddID09PSAnZnVuY3Rpb24nKVxyXG4gICAgICAgICAgICAgICAgcHJvbWlzZXMucHVzaChjaGlsZC5yZWxheShtZXNzYWdlKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBQcm9taXNlLmFsbChwcm9taXNlcyk7XHJcbiAgICB9XHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tcG9uZW50L0NvbXBvc2l0ZS50cyIsImltcG9ydCB7IENvbXBvbmVudCwgSUNvbXBvbmVudCB9IGZyb20gXCIuL0NvbXBvbmVudFwiO1xyXG5pbXBvcnQgTG9nZ2VyIGZyb20gXCIuLi91dGlsL0xvZ2dlclwiO1xyXG5pbXBvcnQgeyBPdXRraXRBbmltYXRvciB9IGZyb20gJ291dGtpdC1hbmltYXRvcic7XHJcbmltcG9ydCBEcmF3ZXIgZnJvbSBcIi4vRHJhd2VyXCI7XHJcbmltcG9ydCBPdmVybGF5IGZyb20gXCIuL092ZXJsYXlcIjtcclxuaW1wb3J0IFdpbmRvdyBmcm9tIFwiLi9XaW5kb3dcIjtcclxuaW1wb3J0IERyYWdnYWJsZSBmcm9tIFwiLi9EcmFnZ2FibGVcIjtcclxuaW1wb3J0IEhvcml6b250YWxMYXlvdXQgZnJvbSBcIi4vSG9yaXpvbnRhbExheW91dFwiO1xyXG5pbXBvcnQgVmVydGljYWxMYXlvdXQgZnJvbSBcIi4vVmVydGljYWxMYXlvdXRcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBDb21wb25lbnRGYWN0b3J5IHtcclxuXHJcbiAgICBjb21wb25lbnQoZWxlbWVudDogc3RyaW5nKTogSUNvbXBvbmVudCB7XHJcbiAgICAgICAgbGV0IGNvbXBvbmVudCA9IG5ldyBDb21wb25lbnQoZWxlbWVudClcclxuICAgICAgICByZXR1cm4gY29tcG9uZW50O1xyXG4gICAgfVxyXG5cclxuICAgIGRyYXdlcihlbGVtZW50OiBzdHJpbmcpOiBJQ29tcG9uZW50IHtcclxuICAgICAgICBsZXQgY29tcG9uZW50ID0gbmV3IERyYXdlcihlbGVtZW50KTtcclxuICAgICAgICBjb21wb25lbnQuaW5pdCgpO1xyXG4gICAgICAgIHJldHVybiBjb21wb25lbnQ7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gQHRvZG8gZmlndXJlIG91dCBob3cgdG8gaW5zZXJ0IG9wdGlvbnMgaW50byB0aGUgZmFjdG9yeSBtZXRob2RzIHZpYSBvcHRpb25zIG9iamVjdFxyXG4gICAgb3ZlcmxheShlbGVtZW50OiBzdHJpbmcpOiBJQ29tcG9uZW50IHtcclxuICAgICAgICBsZXQgY29tcG9uZW50ID0gbmV3IE92ZXJsYXkoZWxlbWVudClcclxuICAgICAgICBjb21wb25lbnQuaW5pdCgpO1xyXG4gICAgICAgIHJldHVybiBjb21wb25lbnQ7XHJcbiAgICB9XHJcblxyXG4gICAgd2luZG93KGVsZW1lbnQ6IHN0cmluZyk6IElDb21wb25lbnQge1xyXG4gICAgICAgIGxldCBjb21wb25lbnQgPSBuZXcgV2luZG93KGVsZW1lbnQpXHJcbiAgICAgICAgY29tcG9uZW50LmluaXQoKTtcclxuICAgICAgICByZXR1cm4gY29tcG9uZW50O1xyXG4gICAgfVxyXG5cclxuICAgIGRyYWdnYWJsZShlbGVtZW50OiBzdHJpbmcpOiBJQ29tcG9uZW50IHtcclxuICAgICAgICBsZXQgY29tcG9uZW50ID0gbmV3IERyYWdnYWJsZShlbGVtZW50KVxyXG4gICAgICAgIGNvbXBvbmVudC5pbml0KCk7XHJcbiAgICAgICAgcmV0dXJuIGNvbXBvbmVudDtcclxuICAgIH1cclxuXHJcbiAgICBobGF5b3V0KGVsZW1lbnQ6IHN0cmluZyk6IElDb21wb25lbnQge1xyXG4gICAgICAgIGxldCBjb21wb25lbnQgPSBuZXcgSG9yaXpvbnRhbExheW91dChlbGVtZW50KVxyXG4gICAgICAgIGNvbXBvbmVudC5zZXRBbmltYXRvcihudWxsKTtcclxuICAgICAgICBjb21wb25lbnQuaW5pdCgpO1xyXG4gICAgICAgIHJldHVybiBjb21wb25lbnQ7XHJcbiAgICB9XHJcblxyXG4gICAgdmxheW91dChlbGVtZW50OiBzdHJpbmcpOiBJQ29tcG9uZW50IHtcclxuICAgICAgICBsZXQgY29tcG9uZW50ID0gbmV3IFZlcnRpY2FsTGF5b3V0KGVsZW1lbnQpXHJcbiAgICAgICAgY29tcG9uZW50LnNldEFuaW1hdG9yKG51bGwpO1xyXG4gICAgICAgIGNvbXBvbmVudC5pbml0KCk7XHJcbiAgICAgICAgcmV0dXJuIGNvbXBvbmVudDtcclxuICAgIH1cclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21wb25lbnQvQ29tcG9uZW50RmFjdG9yeS50cyIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIEVsZW1lbnRIZWxwZXIge1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQ2hhbmdlcyBhbiBlbGVtZW50cyBjbGFzcyBieSBhZGRpbmcgdGhlIFwiYWRkQ2xhc3NcIiBzdHJpbmcgYW5kL29yXHJcbiAgICAgKiByZW1vdmluZyB0aGUgXCJyZW1vdmVDbGFzc1wiIHN0cmluZ1xyXG4gICAgICogXHJcbiAgICAgKiBAc3RhdGljXHJcbiAgICAgKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBlbGVtZW50IFxyXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IG5ld0NsYXNzIFxyXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IG9sZENsYXNzIFxyXG4gICAgICogQG1lbWJlcm9mIEVsZW1lbnRLaXRcclxuICAgICAqL1xyXG4gICAgcHVibGljIHN0YXRpYyBjaGFuZ2VDbGFzcyhlbGVtZW50OiBIVE1MRWxlbWVudCwgYWRkQ2xhc3M/OiBzdHJpbmcsIHJlbW92ZUNsYXNzPzogc3RyaW5nKTogdm9pZCB7XHJcbiAgICAgICAgbGV0IGNsYXNzTGlzdCA9IGVsZW1lbnQuY2xhc3NOYW1lLnNwbGl0KCcgJyk7XHJcbiAgICAgICAgLy8gUmVtb3ZlIG9sZENsYXNzXHJcbiAgICAgICAgaWYocmVtb3ZlQ2xhc3MpIHtcclxuICAgICAgICAgICAgbGV0IG9sZEluZGV4ID0gY2xhc3NMaXN0LmluZGV4T2YocmVtb3ZlQ2xhc3MpO1xyXG4gICAgICAgICAgICBpZihvbGRJbmRleCA+PSAwKSB7XHJcbiAgICAgICAgICAgICAgICBjbGFzc0xpc3Quc3BsaWNlKG9sZEluZGV4LCAxKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBBZGQgbmV3Q2xhc3NcclxuICAgICAgICBpZihhZGRDbGFzcykge1xyXG4gICAgICAgICAgICBsZXQgbmV3SW5kZXggPSBjbGFzc0xpc3QuaW5kZXhPZihhZGRDbGFzcyk7XHJcbiAgICAgICAgICAgIGlmKG5ld0luZGV4IDwgMCkge1xyXG4gICAgICAgICAgICAgICAgY2xhc3NMaXN0LnB1c2goYWRkQ2xhc3MpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsZW1lbnQuY2xhc3NOYW1lID0gY2xhc3NMaXN0LmpvaW4oJyAnKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIHNldEd1aWRJZChlbGVtZW50OiBIVE1MRWxlbWVudCkge1xyXG4gICAgICAgIHZhciB1bmlxdWVJZCA9ICdvay1ndWlkLScgKyBNYXRoLnJhbmRvbSgpLnRvU3RyaW5nKDM2KS5zdWJzdHJpbmcoMikgKyAobmV3IERhdGUoKSkuZ2V0VGltZSgpLnRvU3RyaW5nKDM2KTtcclxuICAgICAgICBlbGVtZW50LmlkID0gdW5pcXVlSWQ7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBSZXR1cm5zIHRoZSBmaXJzdCBIVE1MIEVsZW1lbnQgbWF0Y2hlZCBieSBxdWVyeVxyXG4gICAgICogQHBhcmFtIHF1ZXJ5IHNlbGVjdG9yIHF1ZXJ5XHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgcXVlcnlFbGVtZW50KHF1ZXJ5OiBzdHJpbmcpOiBIVE1MRWxlbWVudCB7XHJcbiAgICAgICAgcmV0dXJuIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwocXVlcnkpWzBdIGFzIEhUTUxFbGVtZW50O1xyXG4gICAgfVxyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3V0aWwvRWxlbWVudEhlbHBlci50cyIsImltcG9ydCB7IENvbXBvc2l0ZSB9IGZyb20gXCIuL0NvbXBvc2l0ZVwiO1xyXG5pbXBvcnQgeyBJQW5pbWF0b3IgfSBmcm9tICdvdXRraXQtYW5pbWF0b3InO1xyXG5pbXBvcnQgeyBTdGF0ZSB9IGZyb20gXCIuLi9zdGF0ZS9TdGF0ZVwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRHJhZ2dhYmxlIGV4dGVuZHMgQ29tcG9zaXRlIHtcclxuXHJcbiAgICBwcml2YXRlIF9kcmFnUm9vdDogYm9vbGVhbjtcclxuICAgIHByaXZhdGUgX3g6IG51bWJlcjtcclxuICAgIHByaXZhdGUgX3k6IG51bWJlcjtcclxuICAgIHByaXZhdGUgX3RvcDogbnVtYmVyO1xyXG4gICAgcHJpdmF0ZSBfbGVmdDogbnVtYmVyO1xyXG4gICAgcHJpdmF0ZSBfcGFyZW50VG9wOiBudW1iZXI7XHJcbiAgICBwcml2YXRlIF9wYXJlbnRMZWZ0OiBudW1iZXI7XHJcbiAgICBwcml2YXRlIF9kaWZmWDogbnVtYmVyO1xyXG4gICAgcHJpdmF0ZSBfZGlmZlk6IG51bWJlcjtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihlbGVtZW50OiBzdHJpbmcpIHtcclxuICAgICAgICBzdXBlcihlbGVtZW50KTtcclxuXHJcbiAgICAgICAgLy8gU2V0dXAgZGVmYXVsdHNcclxuICAgICAgICB0aGlzLl9kcmFnUm9vdCA9IGZhbHNlO1xyXG5cclxuICAgICAgICAvLyBSZWxheSBldmVudHNcclxuICAgICAgICB0aGlzLnJlZ2lzdGVyRXZlbnQoJ2luaXQnLCAoKSA9PiB7IHJldHVybiB0aGlzLmluaXQoKSB9KTtcclxuICAgIH1cclxuXHJcbiAgICBkcmFnUm9vdChmbGFnOiBib29sZWFuKTogdGhpcyB7XHJcbiAgICAgICAgdGhpcy5fZHJhZ1Jvb3QgPSBmbGFnO1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG5cclxuICAgIGluaXQoKTogUHJvbWlzZTxTdGF0ZT4ge1xyXG4gICAgICAgIGxldCBzdGF0ZSA9IG5ldyBTdGF0ZSgpO1xyXG4gICAgICAgIHN0YXRlLm9rQ2xhc3NOYW1lID0gJ29rLWRyYWdnYWJsZSc7XHJcblxyXG4gICAgICAgIHRoaXMuZ2V0RWxlbWVudCgpLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIHRoaXMuc3RhcnREcmFnKTtcclxuICAgICAgICB0aGlzLmdldEVsZW1lbnQoKS5hZGRFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgKCkgPT4ge1xyXG4gICAgICAgICAgICBkb2N1bWVudC5vbm1vdXNlbW92ZSA9ICgpID0+IHt9O1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHJldHVybiB0aGlzLnJlbmRlcihzdGF0ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhcnREcmFnID0gKGV2ZW50OiBNb3VzZUV2ZW50KSA9PiB7XHJcbiAgICAgICAgbGV0IGRlID0gdGhpcy5nZXRFbGVtZW50KCk7XHJcbiAgICAgICAgaWYgKHRoaXMuX2RyYWdSb290KSB7XHJcbiAgICAgICAgICAgIGRlID0gdGhpcy5nZXRSb290KCkuZ2V0RWxlbWVudCgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQgcGFyZW50ID0gZGUucGFyZW50RWxlbWVudDtcclxuXHJcbiAgICAgICAgbGV0IHggPSBldmVudC5jbGllbnRYLFxyXG4gICAgICAgICAgICB5ID0gZXZlbnQuY2xpZW50WSxcclxuICAgICAgICAgICAgdG9wID0gZGUub2Zmc2V0VG9wLFxyXG4gICAgICAgICAgICBsZWZ0ID0gZGUub2Zmc2V0TGVmdCxcclxuICAgICAgICAgICAgZGVXaWR0aCA9IGRlLm9mZnNldFdpZHRoLFxyXG4gICAgICAgICAgICBkZUhlaWdodCA9IGRlLm9mZnNldEhlaWdodCxcclxuICAgICAgICAgICAgcGFyZW50VG9wID0gcGFyZW50Lm9mZnNldFRvcCxcclxuICAgICAgICAgICAgcGFyZW50TGVmdCA9IHBhcmVudC5vZmZzZXRMZWZ0LFxyXG4gICAgICAgICAgICBwYXJlbnRXaWR0aCA9IHBhcmVudC5vZmZzZXRXaWR0aCxcclxuICAgICAgICAgICAgcGFyZW50SGVpZ2h0ID1wYXJlbnQub2Zmc2V0SGVpZ2h0LFxyXG4gICAgICAgICAgICBkaWZmWCA9IHggLSBsZWZ0LFxyXG4gICAgICAgICAgICBkaWZmWSA9IHkgLSB0b3A7XHJcblxyXG4gICAgICAgIGRvY3VtZW50Lm9ubW91c2Vtb3ZlID0gKGV2ZW50OiBNb3VzZUV2ZW50KSA9PiB7XHJcbiAgICAgICAgICAgIGxldCB4ID0gZXZlbnQuY2xpZW50WCxcclxuICAgICAgICAgICAgICAgIHkgPSBldmVudC5jbGllbnRZLFxyXG4gICAgICAgICAgICAgICAgYVggPSB4IC0gZGlmZlgsXHJcbiAgICAgICAgICAgICAgICBhWSA9IHkgLSBkaWZmWTtcclxuICAgICAgICAgICAgaWYgKGFYIDwgMCkgYVggPSAwO1xyXG4gICAgICAgICAgICBpZiAoYVkgPCAwKSBhWSA9IDA7XHJcbiAgICAgICAgICAgIGlmIChhWCArIGRlV2lkdGggPiBwYXJlbnRXaWR0aCkgYVggPSBwYXJlbnRXaWR0aCAtIGRlV2lkdGg7XHJcbiAgICAgICAgICAgIGlmIChhWSArIGRlSGVpZ2h0ID4gcGFyZW50SGVpZ2h0KSBhWSA9IHBhcmVudEhlaWdodCAtIGRlSGVpZ2h0O1xyXG5cclxuICAgICAgICAgICAgdGhpcy5tb3ZlKGRlLCBhWCwgYVkpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBtb3ZlKGVsZW1lbnQ6IEhUTUxFbGVtZW50LCB4OiBudW1iZXIsIHk6IG51bWJlcikgeyBcclxuICAgICAgICBlbGVtZW50LnN0eWxlLmxlZnQgPSBgJHt4fXB4YDtcclxuICAgICAgICBlbGVtZW50LnN0eWxlLnRvcCA9IGAke3l9cHhgO1xyXG4gICAgfVxyXG5cclxuICAgIHN0b3BEcmFnKCkgeyB9XHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tcG9uZW50L0RyYWdnYWJsZS50cyIsImltcG9ydCB7IFN0YXRlIH0gZnJvbSAnLi4vc3RhdGUvU3RhdGUnO1xyXG5pbXBvcnQgeyBJQW5pbWF0b3IgfSBmcm9tICdvdXRraXQtYW5pbWF0b3InO1xyXG5pbXBvcnQgeyBDb21wb3NpdGUgfSBmcm9tIFwiLi9Db21wb3NpdGVcIjtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgRHJhd2VyT3B0aW9ucyB7XHJcbiAgICBkb2NrPzogc3RyaW5nLFxyXG4gICAgbWluU2l6ZT86IG51bWJlcixcclxuICAgIG1heFNpemU/OiBudW1iZXIsXHJcbiAgICBpc09wZW4/OiBib29sZWFuXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERyYXdlciBleHRlbmRzIENvbXBvc2l0ZSB7XHJcblxyXG4gICAgcHJpdmF0ZSBfZG9jazogc3RyaW5nO1xyXG4gICAgcHJpdmF0ZSBfbWF4U2l6ZTogbnVtYmVyO1xyXG4gICAgcHJpdmF0ZSBfbWluU2l6ZTogbnVtYmVyO1xyXG4gICAgcHJpdmF0ZSBfaXNPcGVuOiBib29sZWFuO1xyXG4gICAgcHJpdmF0ZSBfZG9ja1Bvc2l0aW9uczogc3RyaW5nW10gPSBbJ2xlZnQnLCAncmlnaHQnLCAndG9wJywgJ2JvdHRvbSddO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKGVsZW1lbnQ6IHN0cmluZywgb3B0aW9ucz86IERyYXdlck9wdGlvbnMpIHtcclxuICAgICAgICBzdXBlcihlbGVtZW50KTtcclxuXHJcbiAgICAgICAgLy8gU2V0dXAgZGVmYXVsdHNcclxuICAgICAgICB0aGlzLl9kb2NrID0gJ2xlZnQnO1xyXG4gICAgICAgIHRoaXMuX21pblNpemUgPSAwO1xyXG4gICAgICAgIHRoaXMuX21heFNpemUgPSAyODA7XHJcbiAgICAgICAgdGhpcy5faXNPcGVuID0gZmFsc2U7XHJcblxyXG4gICAgICAgIC8vIFJlbGF5IGV2ZW50c1xyXG4gICAgICAgIHRoaXMucmVnaXN0ZXJFdmVudCgnb24nLCAoKSA9PiB7IHJldHVybiB0aGlzLm9uKCkgfSk7XHJcbiAgICAgICAgdGhpcy5yZWdpc3RlckV2ZW50KCdvZmYnLCAoKSA9PiB7IHJldHVybiB0aGlzLm9mZigpIH0pO1xyXG4gICAgICAgIHRoaXMucmVnaXN0ZXJFdmVudCgndG9nZ2xlJywgKCkgPT4geyByZXR1cm4gdGhpcy50b2dnbGUoKSB9KTtcclxuICAgICAgICB0aGlzLnJlZ2lzdGVyRXZlbnQoJ2luaXQnLCAoKSA9PiB7IHJldHVybiB0aGlzLmluaXQoKSB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIENoYW5nZSB0aGUgZG9jayBwb3NpdGlvbiBvZiB0aGUgZHJhd2VyLiAgQ2FsbGluZyB0aGlzIGZ1bmN0aW9uIHJlc2V0cyB0aGVcclxuICAgICAqIHN0YXRlIGFuZCByZXBvc2l0aW9ucyB0aGUgZHJhd2VyIGluc3RhbnRseS5cclxuICAgICAqIFxyXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGRvY2sgXHJcbiAgICAgKiBAcmV0dXJucyB7dGhpc30gXHJcbiAgICAgKiBAbWVtYmVyb2YgRHJhd2VyQ29tcG9uZW50XHJcbiAgICAgKi9cclxuICAgIGRvY2soZG9jazogc3RyaW5nKTogUHJvbWlzZTxTdGF0ZT4ge1xyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLl9kb2NrUG9zaXRpb25zLmluZGV4T2YoZG9jaykgPCAwKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9sb2dnZXIuZXJyb3IoYFwiJHtkb2NrfVwiIGlzIG5vdCBhIHZhbGlkIGRvY2sgcG9zaXRpb24uICBWYWxpZCBwb3NpdGlvbnMgYXJlICR7dGhpcy5fZG9ja1Bvc2l0aW9ucy5qb2luKCcsICcpfWApO1xyXG4gICAgICAgICAgICAgICAgcmVqZWN0KCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMucmVsYXkoJ29mZicpLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fZG9jayA9IGRvY2s7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9zdGF0ZSA9IG51bGw7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5pbml0KCk7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICBtaW5TaXplKG46IG51bWJlcik6IHRoaXMge1xyXG4gICAgICAgIGlmIChuIDwgMCkge1xyXG4gICAgICAgICAgICB0aGlzLl9sb2dnZXIuZXJyb3IoYG1pblNpemUgbnVtYmVyIG11c3QgYmUgZ3JlYXRlciB0aGFuIG9yIGVxdWFsIHRvIHplcm8uYCk7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLl9taW5TaXplID0gbjtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuXHJcbiAgICBtYXhTaXplKG46IG51bWJlcik6IHRoaXMge1xyXG4gICAgICAgIGlmIChuIDwgMCkge1xyXG4gICAgICAgICAgICB0aGlzLl9sb2dnZXIuZXJyb3IoYG1heFNpemUgbnVtYmVyIG11c3QgYmUgZ3JlYXRlciB0aGFuIG9yIGVxdWFsIHRvIHplcm8uYCk7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLl9tYXhTaXplID0gbjtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFNldHMgdGhlIGluaXRpYWwgc3RhdGVcclxuICAgICAqIEByZXR1cm5zIHtQcm9taXNlPFN0YXRlPn0gXHJcbiAgICAgKi9cclxuICAgIGluaXQoKTogUHJvbWlzZTxTdGF0ZT4ge1xyXG4gICAgICAgIGxldCBzdGF0ZSA9IG5ldyBTdGF0ZSgpO1xyXG4gICAgICAgIHN0YXRlLm9rQ2xhc3NOYW1lID0gJ29rLWRyYXdlcic7XHJcbiAgICAgICAgc3RhdGUuc3R5bGUucG9zaXRpb24gPSAnZml4ZWQnO1xyXG4gICAgICAgIHN0YXRlLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xyXG4gICAgICAgIHN0YXRlLnN0eWxlLnpJbmRleCA9ICcxMDAwMCdcclxuXHJcbiAgICAgICAgaWYgKHRoaXMuaXNMZWZ0KCkpIHtcclxuICAgICAgICAgICAgc3RhdGUuc3R5bGUud2lkdGggPSBgJHt0aGlzLl9tYXhTaXplfXB4YDtcclxuICAgICAgICAgICAgc3RhdGUuc3R5bGUuaGVpZ2h0ID0gYCR7dGhpcy5nZXRFbGVtZW50KCkucGFyZW50RWxlbWVudC5vZmZzZXRIZWlnaHR9cHhgO1xyXG4gICAgICAgICAgICBzdGF0ZS5zdHlsZS5sZWZ0ID0gYC0ke3RoaXMuX21heFNpemV9cHhgO1xyXG4gICAgICAgICAgICBzdGF0ZS5zdHlsZS50b3AgPSAnMCc7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLmlzUmlnaHQoKSkge1xyXG4gICAgICAgICAgICBzdGF0ZS5zdHlsZS53aWR0aCA9IGAke3RoaXMuX21heFNpemV9cHhgO1xyXG4gICAgICAgICAgICBzdGF0ZS5zdHlsZS5oZWlnaHQgPSBgJHt0aGlzLmdldEVsZW1lbnQoKS5wYXJlbnRFbGVtZW50Lm9mZnNldEhlaWdodH1weGA7XHJcbiAgICAgICAgICAgIHN0YXRlLnN0eWxlLnJpZ2h0ID0gYC0ke3RoaXMuX21heFNpemV9cHhgO1xyXG4gICAgICAgICAgICBzdGF0ZS5zdHlsZS50b3AgPSAnMCc7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLmlzVG9wKCkpIHtcclxuICAgICAgICAgICAgc3RhdGUuc3R5bGUud2lkdGggPSBgJHt0aGlzLmdldEVsZW1lbnQoKS5wYXJlbnRFbGVtZW50Lm9mZnNldFdpZHRofXB4YDtcclxuICAgICAgICAgICAgc3RhdGUuc3R5bGUuaGVpZ2h0ID0gYCR7dGhpcy5fbWF4U2l6ZX1weGA7XHJcbiAgICAgICAgICAgIHN0YXRlLnN0eWxlLnRvcCA9IGAtJHt0aGlzLl9tYXhTaXplfXB4YDtcclxuICAgICAgICAgICAgc3RhdGUuc3R5bGUubGVmdCA9ICcwJztcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMuaXNCb3R0b20oKSkge1xyXG4gICAgICAgICAgICBzdGF0ZS5zdHlsZS53aWR0aCA9IGAke3RoaXMuZ2V0RWxlbWVudCgpLnBhcmVudEVsZW1lbnQub2Zmc2V0V2lkdGh9cHhgO1xyXG4gICAgICAgICAgICBzdGF0ZS5zdHlsZS5oZWlnaHQgPSBgJHt0aGlzLl9tYXhTaXplfXB4YDtcclxuICAgICAgICAgICAgc3RhdGUuc3R5bGUuYm90dG9tID0gYC0ke3RoaXMuX21heFNpemV9cHhgO1xyXG4gICAgICAgICAgICBzdGF0ZS5zdHlsZS5sZWZ0ID0gJzAnO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdGhpcy5yZW5kZXIoc3RhdGUpO1xyXG4gICAgfVxyXG5cclxuICAgIHRvZ2dsZSgpOiBQcm9taXNlPFN0YXRlPiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2lzT3BlbiA/IHRoaXMub2ZmKCkgOiB0aGlzLm9uKCk7XHJcbiAgICB9XHJcblxyXG4gICAgb24oKTogUHJvbWlzZTxTdGF0ZT4ge1xyXG4gICAgICAgIGlmICh0aGlzLl9pc09wZW4pXHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgICAgICAgICAgICByZXNvbHZlKHRoaXMuX3N0YXRlKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy5faXNPcGVuID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgbGV0IHN0YXRlID0gbmV3IFN0YXRlKCk7XHJcbiAgICAgICAgaWYgKHRoaXMuaXNMZWZ0KCkpIHtcclxuICAgICAgICAgICAgc3RhdGUuc3R5bGUubGVmdCA9ICcwJztcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMuaXNSaWdodCgpKSB7XHJcbiAgICAgICAgICAgIHN0YXRlLnN0eWxlLnJpZ2h0ID0gJzAnO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5pc1RvcCgpKSB7XHJcbiAgICAgICAgICAgIHN0YXRlLnN0eWxlLnRvcCA9ICcwJztcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMuaXNCb3R0b20oKSkge1xyXG4gICAgICAgICAgICBzdGF0ZS5zdHlsZS5ib3R0b20gPSAnMCdcclxuICAgICAgICB9XHJcbiAgICAgICAgc3RhdGUuc3RhdGVDbGFzc05hbWUgPSAnb2stb24nO1xyXG5cclxuICAgICAgICByZXR1cm4gdGhpcy5yZW5kZXIoc3RhdGUpO1xyXG4gICAgfVxyXG5cclxuICAgIG9mZigpOiBQcm9taXNlPFN0YXRlPiB7XHJcbiAgICAgICAgaWYgKCF0aGlzLl9pc09wZW4pXHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgICAgICAgICAgICByZXNvbHZlKHRoaXMuX3N0YXRlKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy5faXNPcGVuID0gZmFsc2U7XHJcblxyXG4gICAgICAgIGxldCBzdGF0ZSA9IG5ldyBTdGF0ZSgpO1xyXG4gICAgICAgIGlmICh0aGlzLmlzTGVmdCgpKSB7XHJcbiAgICAgICAgICAgIHN0YXRlLnN0eWxlLmxlZnQgPSBgLSR7dGhpcy5fbWF4U2l6ZX1weGA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLmlzUmlnaHQoKSkge1xyXG4gICAgICAgICAgICBzdGF0ZS5zdHlsZS5yaWdodCA9IGAtJHt0aGlzLl9tYXhTaXplfXB4YDtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMuaXNUb3AoKSkge1xyXG4gICAgICAgICAgICBzdGF0ZS5zdHlsZS50b3AgPSBgLSR7dGhpcy5fbWF4U2l6ZX1weGA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLmlzQm90dG9tKCkpIHtcclxuICAgICAgICAgICAgc3RhdGUuc3R5bGUuYm90dG9tID0gYC0ke3RoaXMuX21heFNpemV9cHhgO1xyXG4gICAgICAgIH1cclxuICAgICAgICBzdGF0ZS5zdGF0ZUNsYXNzTmFtZSA9ICdvay1vZmYnO1xyXG5cclxuICAgICAgICByZXR1cm4gdGhpcy5yZW5kZXIoc3RhdGUpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgaXNMZWZ0KCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9kb2NrID09PSAnbGVmdCc7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBpc1JpZ2h0KCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9kb2NrID09PSAncmlnaHQnO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgaXNUb3AoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2RvY2sgPT09ICd0b3AnO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgaXNCb3R0b20oKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2RvY2sgPT09ICdib3R0b20nO1xyXG4gICAgfVxyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbXBvbmVudC9EcmF3ZXIudHMiLCJpbXBvcnQgeyBDb21wb3NpdGUgfSBmcm9tIFwiLi9Db21wb3NpdGVcIjtcclxuaW1wb3J0IHsgSUFuaW1hdG9yIH0gZnJvbSAnb3V0a2l0LWFuaW1hdG9yJztcclxuaW1wb3J0IHsgSUNvbXBvbmVudCwgQ29tcG9uZW50IH0gZnJvbSBcIi4vQ29tcG9uZW50XCI7XHJcbmltcG9ydCB7IENvbXBvbmVudEZhY3RvcnkgfSBmcm9tIFwiLi9Db21wb25lbnRGYWN0b3J5XCI7XHJcbmltcG9ydCBFbGVtZW50SGVscGVyIGZyb20gXCIuLi91dGlsL0VsZW1lbnRIZWxwZXJcIjtcclxuaW1wb3J0IHsgU3RhdGUgfSBmcm9tIFwiLi4vc3RhdGUvU3RhdGVcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEhvcml6b250YWxMYXlvdXQgZXh0ZW5kcyBDb21wb3NpdGUge1xyXG5cclxuICAgIHByaXZhdGUgZml4ZWRDaGlsZHJlbjogQXJyYXk8SUNvbXBvbmVudD47XHJcbiAgICBwcml2YXRlIHBlcmN0Q2hpbGRyZW46IEFycmF5PElDb21wb25lbnQ+O1xyXG4gICAgcHJpdmF0ZSBmbHVpZENoaWxkcmVuOiBBcnJheTxJQ29tcG9uZW50PjtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihlbGVtZW50OiBzdHJpbmcpIHtcclxuICAgICAgICBzdXBlcihlbGVtZW50KTtcclxuICAgICAgICB0aGlzLnJlc2V0Q2hpbGRyZW4oKTtcclxuICAgICAgICB0aGlzLnJlZ2lzdGVyRXZlbnQoJ2luaXQnLCAoKSA9PiB7IHJldHVybiB0aGlzLmluaXQoKSB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEZvciBlYWNoIGNoaWxkIGVsZW1lbnQgaW4gZWxlbWVudHMsIHNldCB1cCBhIG5ldyBDb21wb25lbnQgZmlndXJlIFxyXG4gICAgICogb3V0IGlmIGl0IGhhcyBhIHdpZHRoIHNldCBhcyBhIHBpeGVsIHZhbHVlIChmaXhlZCBjaGlsZCksIGEgMTAwJVxyXG4gICAgICogdmFsdWUgKGZsdWlkIGNoaWxkKSwgb3IgYSB2YWx1ZSBzZXQgdG8gYSBzcGVjaWZpYyBwZXJjZW50YWdlIFxyXG4gICAgICogKHBlcmNlbnRhZ2UgY2hpbGQpXHJcbiAgICAgKiBcclxuICAgICAqIEByZXR1cm5zIFxyXG4gICAgICogQG1lbWJlcm9mIEhvcml6b250YWxMYXlvdXRDb21wb25lbnRcclxuICAgICAqL1xyXG4gICAgaW5pdCgpIHtcclxuICAgICAgICBsZXQgZWwgPSB0aGlzLmdldEVsZW1lbnQoKTtcclxuICAgICAgICBsZXQgZmFjdG9yeSA9IG5ldyBDb21wb25lbnRGYWN0b3J5KCk7XHJcbiAgICAgICAgdGhpcy5yZXNldENoaWxkcmVuKCk7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBlbC5jaGlsZHJlbi5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBsZXQgY2hpbGQgPSBlbC5jaGlsZHJlbltpXSBhcyBIVE1MRWxlbWVudDtcclxuICAgICAgICAgICAgaWYgKCFjaGlsZC5pZClcclxuICAgICAgICAgICAgICAgIEVsZW1lbnRIZWxwZXIuc2V0R3VpZElkKGNoaWxkKTtcclxuICAgICAgICAgICAgbGV0IGNoaWxkQ29tcG9uZW50ID0gbmV3IENvbXBvbmVudChcIiNcIiArIGNoaWxkLmlkKTtcclxuICAgICAgICAgICAgbGV0IHNpemUgPSBjaGlsZC5nZXRBdHRyaWJ1dGUoJ2RhdGEtc2l6ZScpIHx8ICcxMDAlJztcclxuICAgICAgICAgICAgaWYgKHNpemUgPT09ICcxMDAlJykge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5mbHVpZENoaWxkcmVuLnB1c2goY2hpbGRDb21wb25lbnQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2UgaWYgKHNpemUubWF0Y2goL15bXFxkXSslJC8pKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnBlcmN0Q2hpbGRyZW4ucHVzaChjaGlsZENvbXBvbmVudCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmZpeGVkQ2hpbGRyZW4ucHVzaChjaGlsZENvbXBvbmVudCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY2hpbGRDb21wb25lbnQucmVuZGVyKHsgc3R5bGU6IHsgaGVpZ2h0OiAnMTAwJScsIHdpZHRoOiBzaXplLCBmbG9hdDogJ2xlZnQnIH0gfSlcclxuICAgICAgICAgICAgdGhpcy5hZGRDaGlsZChjaGlsZENvbXBvbmVudCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigncmVzaXplJywgdGhpcy5yZXNpemUuYmluZCh0aGlzKSk7XHJcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHRoaXMucmVzaXplLmJpbmQodGhpcykpO1xyXG5cclxuICAgICAgICBsZXQgc3RhdGUgPSBuZXcgU3RhdGUoKTtcclxuICAgICAgICBzdGF0ZS5zdHlsZS5oZWlnaHQgPSB0aGlzLmdldEVsZW1lbnQoKS5wYXJlbnRFbGVtZW50Lm9mZnNldEhlaWdodCArICdweCc7XHJcbiAgICAgICAgc3RhdGUuc3R5bGUud2lkdGggPSB0aGlzLmdldEVsZW1lbnQoKS5wYXJlbnRFbGVtZW50Lm9mZnNldFdpZHRoICsgJ3B4JztcclxuICAgICAgICBzdGF0ZS5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xyXG4gICAgICAgIHJldHVybiB0aGlzLnJlbmRlcihzdGF0ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVzaXplKCkge1xyXG4gICAgICAgIGxldCBzdGF0ZSA9IG5ldyBTdGF0ZSgpO1xyXG4gICAgICAgIHN0YXRlLnN0eWxlLmhlaWdodCA9IHRoaXMuZ2V0RWxlbWVudCgpLnBhcmVudEVsZW1lbnQub2Zmc2V0SGVpZ2h0ICsgJ3B4JztcclxuICAgICAgICBzdGF0ZS5zdHlsZS53aWR0aCA9IHRoaXMuZ2V0RWxlbWVudCgpLnBhcmVudEVsZW1lbnQub2Zmc2V0V2lkdGggKyAncHgnO1xyXG4gICAgICAgIHJldHVybiB0aGlzLnJlbmRlcihzdGF0ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKG5ld1N0YXRlOiBTdGF0ZSk6IFByb21pc2U8YW55PiB7XHJcbiAgICAgICAgbGV0IHByb21pc2VzID0gW107XHJcbiAgICAgICAgcHJvbWlzZXMucHVzaChzdXBlci5yZW5kZXIobmV3U3RhdGUpKTtcclxuXHJcbiAgICAgICAgdmFyIHRvdGFsV2lkdGggPSB0aGlzLmdldEVsZW1lbnQoKS5vZmZzZXRXaWR0aDtcclxuICAgICAgICB2YXIgZmx1aWRXaWR0aCA9IHRvdGFsV2lkdGg7XHJcbiAgICAgICAgdmFyIHRvdGFsSGVpZ2h0ID0gdGhpcy5nZXRFbGVtZW50KCkub2Zmc2V0SGVpZ2h0O1xyXG5cclxuICAgICAgICAvLyBEcmF3IHRoZSBmaXhlZCBjaGlsZHJlblxyXG4gICAgICAgIGZvciAobGV0IGVsIG9mIHRoaXMuZml4ZWRDaGlsZHJlbikge1xyXG4gICAgICAgICAgICBmbHVpZFdpZHRoIC09IGVsLmdldEVsZW1lbnQoKS5vZmZzZXRXaWR0aDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gRHJhdyB0aGUgcGVyY2VudGFnZSBjaGlsZHJlblxyXG4gICAgICAgIGZvciAobGV0IGVsIG9mIHRoaXMucGVyY3RDaGlsZHJlbikge1xyXG4gICAgICAgICAgICBsZXQgd2lkdGggPSAocGFyc2VGbG9hdChlbC5nZXRFbGVtZW50KCkuZ2V0QXR0cmlidXRlKCdkYXRhLXNpemUnKSkgLyAxMDAgKiBmbHVpZFdpZHRoKTtcclxuICAgICAgICAgICAgZmx1aWRXaWR0aCAtPSB3aWR0aDtcclxuICAgICAgICAgICAgZWwucmVuZGVyKHsgc3R5bGU6IHsgd2lkdGg6IHdpZHRoICsgJ3B4JyB9IH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBEcmF3IHRoZSBmbHVpZCBjaGlsZHJlblxyXG4gICAgICAgIGZvciAobGV0IGVsIG9mIHRoaXMuZmx1aWRDaGlsZHJlbikge1xyXG4gICAgICAgICAgICB2YXIgd2lkdGggPSBmbHVpZFdpZHRoIC8gdGhpcy5mbHVpZENoaWxkcmVuLmxlbmd0aDtcclxuICAgICAgICAgICAgcHJvbWlzZXMucHVzaChlbC5yZW5kZXIoeyBzdHlsZTogeyB3aWR0aDogd2lkdGggKyAncHgnIH0gfSkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gUHJvbWlzZS5hbGwocHJvbWlzZXMpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogU2V0cyB0aGUgY2hpZHJlbiBhcnJheXMgdG8gbmV3IGFycmF5cy5cclxuICAgICAqIEBwcml2YXRlXHJcbiAgICAgKiBAbWVtYmVyb2YgSG9yaXpvbnRhbExheW91dENvbXBvbmVudFxyXG4gICAgICovXHJcbiAgICBwcml2YXRlIHJlc2V0Q2hpbGRyZW4oKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5maXhlZENoaWxkcmVuID0gbmV3IEFycmF5PElDb21wb25lbnQ+KCk7XHJcbiAgICAgICAgdGhpcy5wZXJjdENoaWxkcmVuID0gbmV3IEFycmF5PElDb21wb25lbnQ+KCk7XHJcbiAgICAgICAgdGhpcy5mbHVpZENoaWxkcmVuID0gbmV3IEFycmF5PElDb21wb25lbnQ+KCk7XHJcbiAgICB9XHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tcG9uZW50L0hvcml6b250YWxMYXlvdXQudHMiLCJpbXBvcnQgeyBTdGF0ZSB9IGZyb20gXCIuLi9zdGF0ZS9TdGF0ZVwiO1xyXG5pbXBvcnQgeyBJQW5pbWF0b3IgfSBmcm9tICdvdXRraXQtYW5pbWF0b3InO1xyXG5pbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tIFwiLi9Db21wb25lbnRcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE92ZXJsYXkgZXh0ZW5kcyBDb21wb25lbnQge1xyXG5cclxuICAgIHByaXZhdGUgX2NvbG9yOiBzdHJpbmc7XHJcbiAgICBwcml2YXRlIF9vcGFjaXR5OiBudW1iZXI7XHJcbiAgICBwcml2YXRlIF9pc09uOiBib29sZWFuO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKGVsZW1lbnQ6IHN0cmluZykge1xyXG4gICAgICAgIHN1cGVyKGVsZW1lbnQpO1xyXG5cclxuICAgICAgICAvLyBTZXR1cCBkZWZhdWx0c1xyXG4gICAgICAgIHRoaXMuX29wYWNpdHkgPSAuODtcclxuICAgICAgICB0aGlzLl9jb2xvciA9ICcjMDAwMDAwJztcclxuICAgICAgICB0aGlzLl9pc09uID0gZmFsc2U7XHJcblxyXG4gICAgICAgIC8vIFJlbGF5IGV2ZW50c1xyXG4gICAgICAgIHRoaXMucmVnaXN0ZXJFdmVudCgnb24nLCAoKSA9PiB7IHJldHVybiB0aGlzLm9uKCkgfSk7XHJcbiAgICAgICAgdGhpcy5yZWdpc3RlckV2ZW50KCdvZmYnLCAoKSA9PiB7IHJldHVybiB0aGlzLm9mZigpIH0pO1xyXG4gICAgICAgIHRoaXMucmVnaXN0ZXJFdmVudCgndG9nZ2xlJywgKCkgPT4geyByZXR1cm4gdGhpcy50b2dnbGUoKSB9KTtcclxuICAgICAgICB0aGlzLnJlZ2lzdGVyRXZlbnQoJ2luaXQnLCAoKSA9PiB7IHJldHVybiB0aGlzLmluaXQoKSB9KTtcclxuICAgIH1cclxuXHJcbiAgICBvcGFjaXR5KG46IG51bWJlcik6IHRoaXMge1xyXG4gICAgICAgIGlmIChuIDwgMCkge1xyXG4gICAgICAgICAgICB0aGlzLl9sb2dnZXIuZXJyb3IoYE9wYWNpdHkgbXVzdCBiZSBncmVhdGVyIHRoYW4gb3IgZXF1YWwgdG8gemVyby5gKTtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChuID4gMSkge1xyXG4gICAgICAgICAgICB0aGlzLl9sb2dnZXIuZXJyb3IoYE9wYWNpdHkgbXVzdCBiZSBsZXNzIHRoYW4gb3IgZXF1YWwgdG8gb25lLmApO1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcztcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5fb3BhY2l0eSA9IG47XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgY29sb3IoYzogc3RyaW5nKTogdGhpcyB7XHJcbiAgICAgICAgdGhpcy5fY29sb3IgPSBjO1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogU2V0cyB0aGUgaW5pdGlhbCBzdGF0ZVxyXG4gICAgICogQHJldHVybnMge1Byb21pc2U8U3RhdGU+fSBcclxuICAgICAqL1xyXG4gICAgaW5pdCgpOiBQcm9taXNlPFN0YXRlPiB7XHJcbiAgICAgICAgbGV0IHN0YXRlID0gbmV3IFN0YXRlKCk7XHJcbiAgICAgICAgc3RhdGUub2tDbGFzc05hbWUgPSAnb2stb3ZlcmxheSc7XHJcbiAgICAgICAgc3RhdGUuc3R5bGUuaGVpZ2h0ID0gXCIxMDAlXCI7XHJcbiAgICAgICAgc3RhdGUuc3R5bGUud2lkdGggPSBcIjEwMCVcIjtcclxuICAgICAgICBzdGF0ZS5zdHlsZS5wb3NpdGlvbiA9IFwiZml4ZWRcIjtcclxuICAgICAgICBzdGF0ZS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSB0aGlzLl9jb2xvcjtcclxuICAgICAgICBzdGF0ZS5zdHlsZS5vcGFjaXR5ID0gJzAnO1xyXG4gICAgICAgIHN0YXRlLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgICAgICAgc3RhdGUuc3R5bGUudG9wID0gJzAnO1xyXG4gICAgICAgIHN0YXRlLnN0eWxlLmxlZnQgPSAnMCc7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLmdldEVsZW1lbnQoKSkge1xyXG4gICAgICAgICAgICB0aGlzLmdldEVsZW1lbnQoKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuY2xpY2tFdmVudCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gdGhpcy5yZW5kZXIoc3RhdGUpO1xyXG4gICAgfVxyXG5cclxuICAgIHRvZ2dsZSgpOiBQcm9taXNlPFN0YXRlPiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2lzT24gPyB0aGlzLm9mZigpIDogdGhpcy5vbigpO1xyXG4gICAgfVxyXG5cclxuICAgIG9uKCk6IFByb21pc2U8U3RhdGU+IHtcclxuICAgICAgICBpZiAodGhpcy5faXNPbilcclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgICAgICAgICAgIHJlc29sdmUodGhpcy5fc3RhdGUpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB0aGlzLl9pc09uID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXMucmVuZGVyKHRoaXMub25TdGF0ZSgpKTtcclxuICAgIH1cclxuXHJcbiAgICBvZmYoKTogUHJvbWlzZTxTdGF0ZT4ge1xyXG4gICAgICAgIGlmICghdGhpcy5faXNPbilcclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgICAgICAgICAgIHJlc29sdmUodGhpcy5fc3RhdGUpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB0aGlzLl9pc09uID0gZmFsc2U7XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzLnJlbmRlcih0aGlzLm9mZlN0YXRlKCkpXHJcbiAgICAgICAgICAgIC50aGVuKChyZXN1bHQpID0+IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnJlbmRlcih0aGlzLmhpZGRlblN0YXRlKCkpO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIG9uU3RhdGUoKTogU3RhdGUge1xyXG4gICAgICAgIGxldCBzdGF0ZSA9IG5ldyBTdGF0ZSgpO1xyXG4gICAgICAgIHN0YXRlLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xyXG4gICAgICAgIHN0YXRlLnN0eWxlLm9wYWNpdHkgPSB0aGlzLl9vcGFjaXR5LnRvU3RyaW5nKCk7XHJcbiAgICAgICAgcmV0dXJuIHN0YXRlO1xyXG4gICAgfVxyXG5cclxuICAgIG9mZlN0YXRlKCk6IFN0YXRlIHtcclxuICAgICAgICBsZXQgc3RhdGUgPSBuZXcgU3RhdGUoKTtcclxuICAgICAgICBzdGF0ZS5zdHlsZS5vcGFjaXR5ID0gJzAnO1xyXG4gICAgICAgIHJldHVybiBzdGF0ZTtcclxuICAgIH1cclxuXHJcbiAgICBoaWRkZW5TdGF0ZSgpOiBTdGF0ZSB7XHJcbiAgICAgICAgbGV0IHN0YXRlID0gbmV3IFN0YXRlKCk7XHJcbiAgICAgICAgc3RhdGUuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgICAgICByZXR1cm4gc3RhdGU7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBjbGlja0V2ZW50ID0gKCkgPT4ge1xyXG4gICAgICAgIHRoaXMuZ2V0Um9vdCgpLnJlbGF5KCdvZmYnKTtcclxuICAgIH1cclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21wb25lbnQvT3ZlcmxheS50cyIsImltcG9ydCB7IENvbXBvc2l0ZSB9IGZyb20gXCIuL0NvbXBvc2l0ZVwiO1xyXG5pbXBvcnQgeyBJQW5pbWF0b3IgfSBmcm9tICdvdXRraXQtYW5pbWF0b3InO1xyXG5pbXBvcnQgeyBJQ29tcG9uZW50LCBDb21wb25lbnQgfSBmcm9tIFwiLi9Db21wb25lbnRcIjtcclxuaW1wb3J0IHsgQ29tcG9uZW50RmFjdG9yeSB9IGZyb20gXCIuL0NvbXBvbmVudEZhY3RvcnlcIjtcclxuaW1wb3J0IEVsZW1lbnRIZWxwZXIgZnJvbSBcIi4uL3V0aWwvRWxlbWVudEhlbHBlclwiO1xyXG5pbXBvcnQgeyBTdGF0ZSB9IGZyb20gXCIuLi9zdGF0ZS9TdGF0ZVwiO1xyXG5cclxuLy8gQHRvZG8gYWRkIGEgcmVhZHkgY2xhc3Mgb3Igc29tZXRoaW5nIHNvIHRoYXQgc2Nyb2xsYmFycyBkb24ndCByZW5kZXIgYmVmb3JlIHRoZSBsYXlvdXQgaXMgZHJhd24gZm9yIHRoZSBmaXJzdCB0aW1lXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBWZXJ0aWNhbExheW91dCBleHRlbmRzIENvbXBvc2l0ZSB7XHJcblxyXG4gICAgcHJpdmF0ZSBmaXhlZENoaWxkcmVuOiBBcnJheTxJQ29tcG9uZW50PjtcclxuICAgIHByaXZhdGUgcGVyY3RDaGlsZHJlbjogQXJyYXk8SUNvbXBvbmVudD47XHJcbiAgICBwcml2YXRlIGZsdWlkQ2hpbGRyZW46IEFycmF5PElDb21wb25lbnQ+O1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKGVsZW1lbnQ6IHN0cmluZykge1xyXG4gICAgICAgIHN1cGVyKGVsZW1lbnQpO1xyXG4gICAgICAgIHRoaXMucmVzZXRDaGlsZHJlbigpO1xyXG4gICAgICAgIHRoaXMucmVnaXN0ZXJFdmVudCgnaW5pdCcsICgpID0+IHsgcmV0dXJuIHRoaXMuaW5pdCgpIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogSW5pdGlhbGl6ZSB0aGUgVmVydGljYWwgTGF5b3V0XHJcbiAgICAgKiBGb3IgZWFjaCBjaGlsZCBlbGVtZW50IGluIGVsZW1lbnRzLCBzZXQgdXAgYSBuZXcgQ29tcG9uZW50IGZpZ3VyZSBcclxuICAgICAqIG91dCBpZiBpdCBoYXMgYSBoZWlnaHQgc2V0IGFzIGEgcGl4ZWwgdmFsdWUgKGZpeGVkIGNoaWxkKSwgYSAxMDAlXHJcbiAgICAgKiB2YWx1ZSAoZmx1aWQgY2hpbGQpLCBvciBhIHZhbHVlIHNldCB0byBhIHNwZWNpZmljIHBlcmNlbnRhZ2UgXHJcbiAgICAgKiAocGVyY2VudGFnZSBjaGlsZClcclxuICAgICAqIFxyXG4gICAgICogQHJldHVybnMgXHJcbiAgICAgKiBAbWVtYmVyb2YgVmVydGljYWxMYXlvdXRDb21wb25lbnRcclxuICAgICAqL1xyXG4gICAgaW5pdCgpIHtcclxuICAgICAgICBsZXQgZWwgPSB0aGlzLmdldEVsZW1lbnQoKTtcclxuICAgICAgICBsZXQgZmFjdG9yeSA9IG5ldyBDb21wb25lbnRGYWN0b3J5KCk7XHJcblxyXG4gICAgICAgIHRoaXMucmVzZXRDaGlsZHJlbigpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZWwuY2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgbGV0IGNoaWxkID0gZWwuY2hpbGRyZW5baV0gYXMgSFRNTEVsZW1lbnQ7XHJcbiAgICAgICAgICAgIGlmICghY2hpbGQuaWQpXHJcbiAgICAgICAgICAgICAgICBFbGVtZW50SGVscGVyLnNldEd1aWRJZChjaGlsZCk7XHJcbiAgICAgICAgICAgIGxldCBjaGlsZENvbXBvbmVudCA9IG5ldyBDb21wb25lbnQoJyMnICsgY2hpbGQuaWQpO1xyXG4gICAgICAgICAgICBsZXQgc2l6ZSA9IGNoaWxkLmdldEF0dHJpYnV0ZSgnZGF0YS1zaXplJykgfHwgJzEwMCUnO1xyXG4gICAgICAgICAgICBpZiAoc2l6ZSA9PT0gJzEwMCUnKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmZsdWlkQ2hpbGRyZW4ucHVzaChjaGlsZENvbXBvbmVudCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSBpZiAoc2l6ZS5tYXRjaCgvXltcXGRdKyUkLykpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMucGVyY3RDaGlsZHJlbi5wdXNoKGNoaWxkQ29tcG9uZW50KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZml4ZWRDaGlsZHJlbi5wdXNoKGNoaWxkQ29tcG9uZW50KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjaGlsZENvbXBvbmVudC5yZW5kZXIoeyBzdHlsZTogeyB3aWR0aDogJzEwMCUnLCBoZWlnaHQ6IHNpemUsIG92ZXJmbG93OiAnaGlkZGVuJywgZmxvYXQ6ICdsZWZ0JyB9IH0pXHJcbiAgICAgICAgICAgIHRoaXMuYWRkQ2hpbGQoY2hpbGRDb21wb25lbnQpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHRoaXMucmVzaXplLmJpbmQodGhpcykpO1xyXG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCB0aGlzLnJlc2l6ZS5iaW5kKHRoaXMpKTtcclxuXHJcbiAgICAgICAgbGV0IHN0YXRlID0gbmV3IFN0YXRlKCk7XHJcbiAgICAgICAgc3RhdGUuc3R5bGUuaGVpZ2h0ID0gdGhpcy5nZXRFbGVtZW50KCkucGFyZW50RWxlbWVudC5vZmZzZXRIZWlnaHQgKyAncHgnO1xyXG4gICAgICAgIHN0YXRlLnN0eWxlLndpZHRoID0gdGhpcy5nZXRFbGVtZW50KCkucGFyZW50RWxlbWVudC5vZmZzZXRXaWR0aCArICdweCc7XHJcbiAgICAgICAgc3RhdGUuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcclxuICAgICAgICBzdGF0ZS5zdHlsZS5vdmVyZmxvdyA9IFwiaGlkZGVuXCI7XHJcbiAgICAgICAgc3RhdGUuc3R5bGUuZmxvYXQgPSBcImxlZnRcIlxyXG4gICAgICAgIHJldHVybiB0aGlzLnJlbmRlcihzdGF0ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVzaXplKCkge1xyXG4gICAgICAgIGxldCBzdGF0ZSA9IG5ldyBTdGF0ZSgpO1xyXG4gICAgICAgIHN0YXRlLnN0eWxlLmhlaWdodCA9IHRoaXMuZ2V0RWxlbWVudCgpLnBhcmVudEVsZW1lbnQub2Zmc2V0SGVpZ2h0ICsgJ3B4JztcclxuICAgICAgICBjb25zb2xlLmxvZyhkb2N1bWVudC5ib2R5Lm9mZnNldEhlaWdodClcclxuICAgICAgICBzdGF0ZS5zdHlsZS53aWR0aCA9IHRoaXMuZ2V0RWxlbWVudCgpLnBhcmVudEVsZW1lbnQub2Zmc2V0V2lkdGggKyAncHgnO1xyXG4gICAgICAgIHJldHVybiB0aGlzLnJlbmRlcihzdGF0ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKG5ld1N0YXRlOiBTdGF0ZSk6IFByb21pc2U8YW55PiB7XHJcbiAgICAgICAgbGV0IHByb21pc2VzID0gW107XHJcbiAgICAgICAgcHJvbWlzZXMucHVzaChzdXBlci5yZW5kZXIobmV3U3RhdGUpKTtcclxuXHJcbiAgICAgICAgdmFyIHRvdGFsSGVpZ2h0ID0gdGhpcy5nZXRFbGVtZW50KCkub2Zmc2V0SGVpZ2h0O1xyXG4gICAgICAgIHZhciBmbHVpZEhlaWdodCA9IHRvdGFsSGVpZ2h0O1xyXG4gICAgICAgIHZhciB0b3RhbFdpZHRoID0gdGhpcy5nZXRFbGVtZW50KCkub2Zmc2V0V2lkdGg7XHJcblxyXG4gICAgICAgIC8vIERyYXcgdGhlIGZpeGVkIGNoaWxkcmVuXHJcbiAgICAgICAgZm9yIChsZXQgZWwgb2YgdGhpcy5maXhlZENoaWxkcmVuKSB7XHJcbiAgICAgICAgICAgIGZsdWlkSGVpZ2h0IC09IGVsLmdldEVsZW1lbnQoKS5vZmZzZXRIZWlnaHQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIERyYXcgdGhlIHBlcmNlbnRhZ2UgY2hpbGRyZW5cclxuICAgICAgICBmb3IgKGxldCBlbCBvZiB0aGlzLnBlcmN0Q2hpbGRyZW4pIHtcclxuICAgICAgICAgICAgbGV0IGhlaWdodCA9IChwYXJzZUZsb2F0KGVsLmdldEVsZW1lbnQoKS5nZXRBdHRyaWJ1dGUoJ2RhdGEtc2l6ZScpKSAvIDEwMCAqIGZsdWlkSGVpZ2h0KTtcclxuICAgICAgICAgICAgZmx1aWRIZWlnaHQgLT0gaGVpZ2h0O1xyXG4gICAgICAgICAgICBlbC5yZW5kZXIoeyBzdHlsZTogeyBoZWlnaHQ6IGhlaWdodCArICdweCcgfSB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gRHJhdyB0aGUgZmx1aWQgY2hpbGRyZW5cclxuICAgICAgICBmb3IgKGxldCBlbCBvZiB0aGlzLmZsdWlkQ2hpbGRyZW4pIHtcclxuICAgICAgICAgICAgdmFyIGhlaWdodCA9IGZsdWlkSGVpZ2h0IC8gdGhpcy5mbHVpZENoaWxkcmVuLmxlbmd0aDtcclxuICAgICAgICAgICAgcHJvbWlzZXMucHVzaChlbC5yZW5kZXIoeyBzdHlsZTogeyBoZWlnaHQ6IGhlaWdodCArICdweCcgfSB9KSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBQcm9taXNlLmFsbChwcm9taXNlcyk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBTZXRzIHRoZSBjaGlkcmVuIGFycmF5cyB0byBuZXcgYXJyYXlzLlxyXG4gICAgICogQHByaXZhdGVcclxuICAgICAqIEBtZW1iZXJvZiBIb3Jpem9udGFsTGF5b3V0Q29tcG9uZW50XHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgcmVzZXRDaGlsZHJlbigpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLmZpeGVkQ2hpbGRyZW4gPSBuZXcgQXJyYXk8SUNvbXBvbmVudD4oKTtcclxuICAgICAgICB0aGlzLnBlcmN0Q2hpbGRyZW4gPSBuZXcgQXJyYXk8SUNvbXBvbmVudD4oKTtcclxuICAgICAgICB0aGlzLmZsdWlkQ2hpbGRyZW4gPSBuZXcgQXJyYXk8SUNvbXBvbmVudD4oKTtcclxuICAgIH1cclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21wb25lbnQvVmVydGljYWxMYXlvdXQudHMiLCJpbXBvcnQgeyBTdGF0ZSB9IGZyb20gJy4uL3N0YXRlL1N0YXRlJztcclxuaW1wb3J0IHsgSUFuaW1hdG9yIH0gZnJvbSAnb3V0a2l0LWFuaW1hdG9yJztcclxuaW1wb3J0IHsgQ29tcG9zaXRlIH0gZnJvbSBcIi4vQ29tcG9zaXRlXCI7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFdpbmRvd09wdGlvbnMge1xyXG4gICAgd2lkdGg/Om51bWJlcixcclxuICAgIGhlaWdodD86IG51bWJlcixcclxuICAgIHRvcD86IG51bWJlcixcclxuICAgIGxlZnQ/Om51bWJlcixcclxuICAgIGJvdHRvbT86bnVtYmVyLFxyXG4gICAgcmlnaHQ/OiBudW1iZXJcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgV2luZG93IGV4dGVuZHMgQ29tcG9zaXRlIHtcclxuXHJcbiAgICBwcml2YXRlIF93aWR0aDogbnVtYmVyO1xyXG4gICAgcHJpdmF0ZSBfaGVpZ2h0OiBudW1iZXI7XHJcbiAgICBwcml2YXRlIF90b3A6IG51bWJlcjtcclxuICAgIHByaXZhdGUgX2xlZnQ6IG51bWJlcjtcclxuICAgIHByaXZhdGUgX2lzT3BlbjogYm9vbGVhbjtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihlbGVtZW50OiBzdHJpbmcsIG9wdGlvbnM/OiBXaW5kb3dPcHRpb25zKSB7XHJcbiAgICAgICAgc3VwZXIoZWxlbWVudCk7XHJcblxyXG4gICAgICAgIC8vIFNldHVwIGRlZmF1bHRzXHJcbiAgICAgICAgdGhpcy5fd2lkdGggPSAwO1xyXG4gICAgICAgIHRoaXMuX2hlaWdodCA9IDA7XHJcbiAgICAgICAgdGhpcy5fdG9wID0gMDtcclxuICAgICAgICB0aGlzLl9sZWZ0ID0gMDtcclxuICAgICAgICB0aGlzLl9pc09wZW4gPSBmYWxzZTtcclxuXHJcbiAgICAgICAgLy8gUmVsYXkgZXZlbnRzXHJcbiAgICAgICAgdGhpcy5yZWdpc3RlckV2ZW50KCdvbicsICgpID0+IHsgcmV0dXJuIHRoaXMub24oKSB9KTtcclxuICAgICAgICB0aGlzLnJlZ2lzdGVyRXZlbnQoJ29mZicsICgpID0+IHsgcmV0dXJuIHRoaXMub2ZmKCkgfSk7XHJcbiAgICAgICAgdGhpcy5yZWdpc3RlckV2ZW50KCd0b2dnbGUnLCAoKSA9PiB7IHJldHVybiB0aGlzLnRvZ2dsZSgpIH0pO1xyXG4gICAgICAgIHRoaXMucmVnaXN0ZXJFdmVudCgnaW5pdCcsICgpID0+IHsgcmV0dXJuIHRoaXMuaW5pdCgpIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHdpZHRoKG46IG51bWJlcik6IHRoaXMge1xyXG4gICAgICAgIGlmIChuIDwgMCkge1xyXG4gICAgICAgICAgICB0aGlzLl9sb2dnZXIuZXJyb3IoYFdpZHRoIG11c3QgYmUgZ3JlYXRlciB0aGFuIG9yIGVxdWFsIHRvIHplcm8uYCk7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLl93aWR0aCA9IG47XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgaGVpZ2h0KG46IG51bWJlcik6IHRoaXMge1xyXG4gICAgICAgIGlmIChuIDwgMCkge1xyXG4gICAgICAgICAgICB0aGlzLl9sb2dnZXIuZXJyb3IoYEhlaWdodCBtdXN0IGJlIGdyZWF0ZXIgdGhhbiBvciBlcXVhbCB0byB6ZXJvLmApO1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcztcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5faGVpZ2h0ID0gbjtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuXHJcbiAgICB0b3AobjogbnVtYmVyKTogdGhpcyB7XHJcbiAgICAgICAgdGhpcy5fdG9wID0gbjtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuXHJcbiAgICBsZWZ0KG46IG51bWJlcik6IHRoaXMge1xyXG4gICAgICAgIHRoaXMuX2xlZnQgPSBuO1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogU2V0cyB0aGUgaW5pdGlhbCBzdGF0ZVxyXG4gICAgICogQHJldHVybnMge1Byb21pc2U8U3RhdGU+fSBcclxuICAgICAqL1xyXG4gICAgaW5pdCgpOiBQcm9taXNlPFN0YXRlPiB7XHJcbiAgICAgICAgbGV0IHN0YXRlID0gbmV3IFN0YXRlKCk7XHJcbiAgICAgICAgc3RhdGUub2tDbGFzc05hbWUgPSAnb2std2luZG93J1xyXG4gICAgICAgIHN0YXRlLnN0eWxlLnBvc2l0aW9uID0gJ2Fic29sdXRlJztcclxuICAgICAgICBzdGF0ZS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgICAgIHN0YXRlLnN0eWxlLnpJbmRleCA9ICc5OTk5J1xyXG4gICAgICAgIHN0YXRlLnN0eWxlLndpZHRoID0gYCR7dGhpcy5nZXRFbGVtZW50KCkucGFyZW50RWxlbWVudC5vZmZzZXRXaWR0aCAvIDJ9cHhgO1xyXG4gICAgICAgIHN0YXRlLnN0eWxlLmhlaWdodCA9IGAke3RoaXMuZ2V0RWxlbWVudCgpLnBhcmVudEVsZW1lbnQub2Zmc2V0SGVpZ2h0IC8gMn1weGA7XHJcbiAgICAgICAgc3RhdGUuc3R5bGUubGVmdCA9IGAke3RoaXMuX2xlZnR9cHhgO1xyXG4gICAgICAgIHN0YXRlLnN0eWxlLnRvcCA9IGAke3RoaXMuX3RvcH1weGA7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMucmVuZGVyKHN0YXRlKTtcclxuICAgIH1cclxuXHJcbiAgICB0b2dnbGUoKTogUHJvbWlzZTxTdGF0ZT4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9pc09wZW4gPyB0aGlzLm9mZigpIDogdGhpcy5vbigpO1xyXG4gICAgfVxyXG5cclxuICAgIG9uKCk6IFByb21pc2U8U3RhdGU+IHtcclxuICAgICAgICBpZiAodGhpcy5faXNPcGVuKVxyXG4gICAgICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmVzb2x2ZSh0aGlzLl9zdGF0ZSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMuX2lzT3BlbiA9IHRydWU7XHJcblxyXG4gICAgICAgIGxldCBzdGF0ZSA9IG5ldyBTdGF0ZSgpO1xyXG4gICAgICAgIHN0YXRlLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xyXG4gICAgICAgIHJldHVybiB0aGlzLnJlbmRlcihzdGF0ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgb2ZmKCk6IFByb21pc2U8U3RhdGU+IHtcclxuICAgICAgICBpZiAoIXRoaXMuX2lzT3BlbilcclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgICAgICAgICAgIHJlc29sdmUodGhpcy5fc3RhdGUpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB0aGlzLl9pc09wZW4gPSBmYWxzZTtcclxuXHJcbiAgICAgICAgbGV0IHN0YXRlID0gbmV3IFN0YXRlKCk7XHJcbiAgICAgICAgc3RhdGUuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgICAgICByZXR1cm4gdGhpcy5yZW5kZXIoc3RhdGUpO1xyXG4gICAgfVxyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbXBvbmVudC9XaW5kb3cudHMiLCJleHBvcnQgKiBmcm9tICcuL3N0YXRlL1N0YXRlJztcclxuZXhwb3J0ICogZnJvbSAnLi9jb21wb25lbnQvQ29tcG9uZW50RmFjdG9yeSc7XHJcbmV4cG9ydCAqIGZyb20gJy4vY29tcG9uZW50L0NvbXBvbmVudCc7XHJcbmV4cG9ydCAqIGZyb20gJy4vY29tcG9uZW50L0NvbXBvc2l0ZSc7XHJcbmV4cG9ydCAqIGZyb20gJy4vY29tcG9uZW50L0RyYXdlcic7XHJcbmV4cG9ydCAqIGZyb20gJy4vY29tcG9uZW50L1ZlcnRpY2FsTGF5b3V0JztcclxuZXhwb3J0ICogZnJvbSAnLi9jb21wb25lbnQvSG9yaXpvbnRhbExheW91dCc7XHJcbmV4cG9ydCAqIGZyb20gJy4vY29tcG9uZW50L1dpbmRvdyc7XHJcbmV4cG9ydCAqIGZyb20gJy4vY29tcG9uZW50L092ZXJsYXknO1xyXG5leHBvcnQgKiBmcm9tICcuL2NvbXBvbmVudC9EcmFnZ2FibGUnO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9vdXRraXQudHMiLCJleHBvcnQgaW50ZXJmYWNlIElMb2dnZXIge1xyXG4gICAgbG9nKG1lc3NhZ2U6c3RyaW5nKTtcclxuICAgIHdhcm4obWVzc2FnZTpzdHJpbmcpO1xyXG4gICAgaW5mbyhtZXNzYWdlOnN0cmluZyk7XHJcbiAgICBlcnJvcihtZXNzYWdlOnN0cmluZyk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIExvZ2dlciBpbXBsZW1lbnRzIElMb2dnZXIge1xyXG4gICAgcHJpdmF0ZSBfZGVidWc6IGJvb2xlYW47XHJcbiAgICBwcml2YXRlIF9jID0ge1xyXG4gICAgICAgIHdhcm46IChtOiBzdHJpbmcpID0+IHt9LFxyXG4gICAgICAgIGVycm9yOiAobTogc3RyaW5nKSA9PiB7fSxcclxuICAgICAgICBpbmZvOiAobTogc3RyaW5nKSA9PiB7fSxcclxuICAgICAgICBsb2c6IChtOiBzdHJpbmcpID0+IHt9XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKGRlYnVnOiBib29sZWFuID0gZmFsc2UpIHtcclxuICAgICAgICBpZiAodHlwZW9mIHdpbmRvd1snY29uc29sZSddID09PSAnb2JqZWN0JyAmJiBkZWJ1ZylcclxuICAgICAgICAgICAgdGhpcy5fYyA9IHdpbmRvdy5jb25zb2xlO1xyXG4gICAgICAgIHRoaXMuX2RlYnVnID0gZGVidWc7XHJcbiAgICB9XHJcblxyXG4gICAgbG9nKG1lc3NhZ2U6IHN0cmluZykge1xyXG4gICAgICAgIGlmICh0aGlzLl9kZWJ1ZyAmJiB0eXBlb2YgdGhpcy5fYy5sb2cgPT09ICdmdW5jdGlvbicpXHJcbiAgICAgICAgICAgIHRoaXMuX2MubG9nKG1lc3NhZ2UpO1xyXG4gICAgfVxyXG5cclxuICAgIHdhcm4obWVzc2FnZTogc3RyaW5nKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuX2RlYnVnICYmIHR5cGVvZiB0aGlzLl9jLndhcm4gPT09ICdmdW5jdGlvbicpXHJcbiAgICAgICAgICAgIHRoaXMuX2Mud2FybihtZXNzYWdlKTtcclxuICAgIH1cclxuXHJcbiAgICBpbmZvKG1lc3NhZ2U6IHN0cmluZykge1xyXG4gICAgICAgIGlmICh0aGlzLl9kZWJ1ZyAmJiB0eXBlb2YgdGhpcy5fYy5pbmZvID09PSAnZnVuY3Rpb24nKVxyXG4gICAgICAgICAgICB0aGlzLl9jLmluZm8obWVzc2FnZSk7XHJcbiAgICB9XHJcblxyXG4gICAgZXJyb3IobWVzc2FnZTogc3RyaW5nKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuX2RlYnVnICYmIHR5cGVvZiB0aGlzLl9jLmVycm9yID09PSAnZnVuY3Rpb24nKVxyXG4gICAgICAgICAgICB0aGlzLl9jLmVycm9yKG1lc3NhZ2UpO1xyXG4gICAgfVxyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3V0aWwvTG9nZ2VyLnRzIiwiLyohIE91dGtpdCBBbmltYXRvciB2MS4wLjMgLSBDb3B5cmlnaHQgMjAxNyBKYW1lcyBFaGx5IC0gTUlUIExpY2Vuc2UgKi9cbihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFtdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcIm9rLWFuaW1hdG9yXCJdID0gZmFjdG9yeSgpO1xuXHRlbHNlXG5cdFx0cm9vdFtcIm9rLWFuaW1hdG9yXCJdID0gZmFjdG9yeSgpO1xufSkodGhpcywgZnVuY3Rpb24oKSB7XG5yZXR1cm4gLyoqKioqKi8gKGZ1bmN0aW9uKG1vZHVsZXMpIHsgLy8gd2VicGFja0Jvb3RzdHJhcFxuLyoqKioqKi8gXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4vKioqKioqLyBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuLyoqKioqKi8gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG4vKioqKioqL1xuLyoqKioqKi8gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuLyoqKioqKi8gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4vKioqKioqLyBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbi8qKioqKiovIFx0XHR9XG4vKioqKioqLyBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbi8qKioqKiovIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4vKioqKioqLyBcdFx0XHRpOiBtb2R1bGVJZCxcbi8qKioqKiovIFx0XHRcdGw6IGZhbHNlLFxuLyoqKioqKi8gXHRcdFx0ZXhwb3J0czoge31cbi8qKioqKiovIFx0XHR9O1xuLyoqKioqKi9cbi8qKioqKiovIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbi8qKioqKiovIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbi8qKioqKiovXG4vKioqKioqLyBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuLyoqKioqKi8gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcbi8qKioqKiovXG4vKioqKioqLyBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbi8qKioqKiovIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4vKioqKioqLyBcdH1cbi8qKioqKiovXG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuLyoqKioqKi8gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbi8qKioqKiovIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcbi8qKioqKiovXG4vKioqKioqLyBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuLyoqKioqKi8gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbi8qKioqKiovIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4vKioqKioqLyBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuLyoqKioqKi8gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuLyoqKioqKi8gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuLyoqKioqKi8gXHRcdFx0XHRnZXQ6IGdldHRlclxuLyoqKioqKi8gXHRcdFx0fSk7XG4vKioqKioqLyBcdFx0fVxuLyoqKioqKi8gXHR9O1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbi8qKioqKiovIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4vKioqKioqLyBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4vKioqKioqLyBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuLyoqKioqKi8gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbi8qKioqKiovIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4vKioqKioqLyBcdFx0cmV0dXJuIGdldHRlcjtcbi8qKioqKiovIFx0fTtcbi8qKioqKiovXG4vKioqKioqLyBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuLyoqKioqKi8gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuLyoqKioqKi8gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vKioqKioqLyBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDEpO1xuLyoqKioqKi8gfSlcbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKioqKioqLyAoW1xuLyogMCAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cInVzZSBzdHJpY3RcIjtcblxuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG52YXIgQW5pbWF0b3JUcmFuc2l0aW9uO1xuKGZ1bmN0aW9uIChBbmltYXRvclRyYW5zaXRpb24pIHtcbiAgICBBbmltYXRvclRyYW5zaXRpb25bQW5pbWF0b3JUcmFuc2l0aW9uW1wiTGluZWFyXCJdID0gMF0gPSBcIkxpbmVhclwiO1xuICAgIEFuaW1hdG9yVHJhbnNpdGlvbltBbmltYXRvclRyYW5zaXRpb25bXCJFYXNlSW5cIl0gPSAxXSA9IFwiRWFzZUluXCI7XG4gICAgQW5pbWF0b3JUcmFuc2l0aW9uW0FuaW1hdG9yVHJhbnNpdGlvbltcIkVhc2VPdXRcIl0gPSAyXSA9IFwiRWFzZU91dFwiO1xuICAgIEFuaW1hdG9yVHJhbnNpdGlvbltBbmltYXRvclRyYW5zaXRpb25bXCJFYXNlSW5PdXRcIl0gPSAzXSA9IFwiRWFzZUluT3V0XCI7XG4gICAgQW5pbWF0b3JUcmFuc2l0aW9uW0FuaW1hdG9yVHJhbnNpdGlvbltcIlB1bGxJblwiXSA9IDRdID0gXCJQdWxsSW5cIjtcbiAgICBBbmltYXRvclRyYW5zaXRpb25bQW5pbWF0b3JUcmFuc2l0aW9uW1wiUHVzaE91dFwiXSA9IDVdID0gXCJQdXNoT3V0XCI7XG4gICAgQW5pbWF0b3JUcmFuc2l0aW9uW0FuaW1hdG9yVHJhbnNpdGlvbltcIlB1c2hQdWxsXCJdID0gNl0gPSBcIlB1c2hQdWxsXCI7XG59KShBbmltYXRvclRyYW5zaXRpb24gPSBleHBvcnRzLkFuaW1hdG9yVHJhbnNpdGlvbiB8fCAoZXhwb3J0cy5BbmltYXRvclRyYW5zaXRpb24gPSB7fSkpO1xuXG4vKioqLyB9KSxcbi8qIDEgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXCJ1c2Ugc3RyaWN0XCI7XG5cblxudmFyIF9jcmVhdGVDbGFzcyA9IGZ1bmN0aW9uICgpIHsgZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTsgfSB9IHJldHVybiBmdW5jdGlvbiAoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyByZXR1cm4gQ29uc3RydWN0b3I7IH07IH0oKTtcblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuZnVuY3Rpb24gX19leHBvcnQobSkge1xuICAgIGZvciAodmFyIHAgaW4gbSkge1xuICAgICAgICBpZiAoIWV4cG9ydHMuaGFzT3duUHJvcGVydHkocCkpIGV4cG9ydHNbcF0gPSBtW3BdO1xuICAgIH1cbn1cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbnZhciBjb21tb25fMSA9IF9fd2VicGFja19yZXF1aXJlX18oMCk7XG5cbnZhciBPdXRraXRBbmltYXRvciA9IGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBPdXRraXRBbmltYXRvcigpIHtcbiAgICAgICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIE91dGtpdEFuaW1hdG9yKTtcblxuICAgICAgICB0aGlzLmVhc2VPdXQgPSB0aGlzLm1ha2VFYXNlT3V0KHRoaXMuZWFzZUluKTtcbiAgICAgICAgdGhpcy5lYXNlSW5PdXQgPSB0aGlzLm1ha2VFYXNlSW5PdXQodGhpcy5lYXNlSW4pO1xuICAgICAgICB0aGlzLnB1c2hPdXQgPSB0aGlzLm1ha2VFYXNlT3V0KHRoaXMucHVsbEluKTtcbiAgICAgICAgdGhpcy5wdXNoUHVsbCA9IHRoaXMubWFrZUVhc2VJbk91dCh0aGlzLnB1bGxJbik7XG4gICAgICAgIHRoaXMuX2R1cmF0aW9uID0gMjAwO1xuICAgICAgICB0aGlzLl9zdGVwID0gZnVuY3Rpb24gKCkge307XG4gICAgICAgIHRoaXMuX3JhdGUgPSAxNjtcbiAgICAgICAgdGhpcy5fdHJhbnNpdGlvbiA9IHRoaXMubGluZWFyO1xuICAgIH1cblxuICAgIF9jcmVhdGVDbGFzcyhPdXRraXRBbmltYXRvciwgW3tcbiAgICAgICAga2V5OiBcInNldFN0ZXBcIixcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIHNldFN0ZXAoc3RlcCkge1xuICAgICAgICAgICAgdGhpcy5fc3RlcCA9IHN0ZXA7XG4gICAgICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgICAgfVxuICAgIH0sIHtcbiAgICAgICAga2V5OiBcInNldER1cmF0aW9uXCIsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBzZXREdXJhdGlvbihkdXJhdGlvbikge1xuICAgICAgICAgICAgdGhpcy5fZHVyYXRpb24gPSBkdXJhdGlvbjtcbiAgICAgICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgICB9XG4gICAgfSwge1xuICAgICAgICBrZXk6IFwic2V0UmF0ZVwiLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gc2V0UmF0ZShyYXRlKSB7XG4gICAgICAgICAgICB0aGlzLl9yYXRlID0gcmF0ZTtcbiAgICAgICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgICB9XG4gICAgfSwge1xuICAgICAgICBrZXk6IFwic2V0VHJhbnNpdGlvblwiLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gc2V0VHJhbnNpdGlvbih0cmFuc2l0aW9uKSB7XG4gICAgICAgICAgICBzd2l0Y2ggKHRyYW5zaXRpb24pIHtcbiAgICAgICAgICAgICAgICBjYXNlIGNvbW1vbl8xLkFuaW1hdG9yVHJhbnNpdGlvbi5FYXNlSW46XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX3RyYW5zaXRpb24gPSB0aGlzLmVhc2VJbjtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSBjb21tb25fMS5BbmltYXRvclRyYW5zaXRpb24uRWFzZU91dDpcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fdHJhbnNpdGlvbiA9IHRoaXMuZWFzZU91dDtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSBjb21tb25fMS5BbmltYXRvclRyYW5zaXRpb24uRWFzZUluT3V0OlxuICAgICAgICAgICAgICAgICAgICB0aGlzLl90cmFuc2l0aW9uID0gdGhpcy5lYXNlSW5PdXQ7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgY29tbW9uXzEuQW5pbWF0b3JUcmFuc2l0aW9uLlB1bGxJbjpcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fdHJhbnNpdGlvbiA9IHRoaXMucHVsbEluO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIGNvbW1vbl8xLkFuaW1hdG9yVHJhbnNpdGlvbi5QdXNoT3V0OlxuICAgICAgICAgICAgICAgICAgICB0aGlzLl90cmFuc2l0aW9uID0gdGhpcy5wdXNoT3V0O1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIGNvbW1vbl8xLkFuaW1hdG9yVHJhbnNpdGlvbi5QdXNoUHVsbDpcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fdHJhbnNpdGlvbiA9IHRoaXMucHVzaFB1bGw7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX3RyYW5zaXRpb24gPSB0aGlzLmxpbmVhcjtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgICAgfVxuICAgIH0sIHtcbiAgICAgICAga2V5OiBcImFuaW1hdGVcIixcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGFuaW1hdGUoc3RhcnQpIHtcbiAgICAgICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG5cbiAgICAgICAgICAgIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gQXJyYXkoX2xlbiA+IDEgPyBfbGVuIC0gMSA6IDApLCBfa2V5ID0gMTsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgICAgICAgICAgICAgIGFyZ3NbX2tleSAtIDFdID0gYXJndW1lbnRzW19rZXldO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUpIHtcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIHdpbmRvd1sncmVxdWVzdEFuaW1hdGlvbkZyYW1lJ10gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIF9zdGFydCA9IHBlcmZvcm1hbmNlLm5vdygpO1xuICAgICAgICAgICAgICAgICAgICB2YXIgcmFmQW5pbWF0ZSA9IGZ1bmN0aW9uIHJhZkFuaW1hdGUodGltZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHByb2dyZXNzID0gKHRpbWUgLSBfc3RhcnQpIC8gX3RoaXMuX2R1cmF0aW9uO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHByb2dyZXNzID4gMSkgcHJvZ3Jlc3MgPSAxO1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGRlbHRhID0gX3RoaXMuX3RyYW5zaXRpb24ocHJvZ3Jlc3MpO1xuICAgICAgICAgICAgICAgICAgICAgICAgX3RoaXMuX3N0ZXAoZGVsdGEsIGFyZ3MpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHByb2dyZXNzIDwgMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZShyYWZBbmltYXRlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZSh0cnVlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHJhZkFuaW1hdGUpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIF90aGlzLl9pbnRlcnZhbCA9IHdpbmRvdy5zZXRJbnRlcnZhbChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgZGVsdGFUaW1lID0gRGF0ZS5ub3coKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciB0aW1lUGFzc2VkID0gZGVsdGFUaW1lIC0gc3RhcnQ7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgcHJvZ3Jlc3MgPSB0aW1lUGFzc2VkIC8gX3RoaXMuX2R1cmF0aW9uO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHByb2dyZXNzID4gMSkgcHJvZ3Jlc3MgPSAxO1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGRlbHRhID0gX3RoaXMuX3RyYW5zaXRpb24ocHJvZ3Jlc3MpO1xuICAgICAgICAgICAgICAgICAgICAgICAgX3RoaXMuX3N0ZXAoZGVsdGEsIGFyZ3MpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHByb2dyZXNzID09IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGVhckludGVydmFsKF90aGlzLl9pbnRlcnZhbCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZSh0cnVlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSwgX3RoaXMuX3JhdGUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfSwge1xuICAgICAgICBrZXk6IFwibGluZWFyXCIsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBsaW5lYXIocHJvZ3Jlc3MpIHtcbiAgICAgICAgICAgIHJldHVybiBwcm9ncmVzcztcbiAgICAgICAgfVxuICAgIH0sIHtcbiAgICAgICAga2V5OiBcImVhc2VJblwiLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gZWFzZUluKHByb2dyZXNzKSB7XG4gICAgICAgICAgICByZXR1cm4gTWF0aC5wb3cocHJvZ3Jlc3MsIDUpO1xuICAgICAgICB9XG4gICAgfSwge1xuICAgICAgICBrZXk6IFwicHVsbEluXCIsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBwdWxsSW4ocHJvZ3Jlc3MpIHtcbiAgICAgICAgICAgIHZhciB4ID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiAyO1xuXG4gICAgICAgICAgICByZXR1cm4gTWF0aC5wb3cocHJvZ3Jlc3MsIDIpICogKCh4ICsgMSkgKiBwcm9ncmVzcyAtIHgpO1xuICAgICAgICB9XG4gICAgfSwge1xuICAgICAgICBrZXk6IFwibWFrZUVhc2VPdXRcIixcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIG1ha2VFYXNlT3V0KHRpbWluZykge1xuICAgICAgICAgICAgcmV0dXJuIGZ1bmN0aW9uIChwcm9ncmVzcykge1xuICAgICAgICAgICAgICAgIHJldHVybiAxIC0gdGltaW5nKDEgLSBwcm9ncmVzcyk7XG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgfSwge1xuICAgICAgICBrZXk6IFwibWFrZUVhc2VJbk91dFwiLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gbWFrZUVhc2VJbk91dCh0aW1pbmcpIHtcbiAgICAgICAgICAgIHJldHVybiBmdW5jdGlvbiAocHJvZ3Jlc3MpIHtcbiAgICAgICAgICAgICAgICBpZiAocHJvZ3Jlc3MgPCAuNSkgcmV0dXJuIHRpbWluZygyICogcHJvZ3Jlc3MpIC8gMjtlbHNlIHJldHVybiAoMiAtIHRpbWluZygyICogKDEgLSBwcm9ncmVzcykpKSAvIDI7XG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgfV0pO1xuXG4gICAgcmV0dXJuIE91dGtpdEFuaW1hdG9yO1xufSgpO1xuXG5leHBvcnRzLk91dGtpdEFuaW1hdG9yID0gT3V0a2l0QW5pbWF0b3I7XG5fX2V4cG9ydChfX3dlYnBhY2tfcmVxdWlyZV9fKDApKTtcblxuLyoqKi8gfSlcbi8qKioqKiovIF0pO1xufSk7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJbmRsWW5CaFkyczZMeTh2ZDJWaWNHRmpheTkxYm1sMlpYSnpZV3hOYjJSMWJHVkVaV1pwYm1sMGFXOXVJaXdpZDJWaWNHRmphem92THk5M1pXSndZV05yTDJKdmIzUnpkSEpoY0NCaVpHWmlZMkV6TUdVelpXTm1NelEwT0RNMFpTSXNJbmRsWW5CaFkyczZMeTh2TGk5emNtTXZZMjl0Ylc5dUxuUnpJaXdpZDJWaWNHRmphem92THk4dUwzTnlZeTlwYm1SbGVDNTBjeUpkTENKdVlXMWxjeUk2VzEwc0ltMWhjSEJwYm1keklqb2lPMEZCUVVFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFc1EwRkJRenRCUVVORUxFODdRVU5XUVR0QlFVTkJPenRCUVVWQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHM3UVVGRlFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN1FVRkRRVHM3TzBGQlIwRTdRVUZEUVRzN1FVRkZRVHRCUVVOQk96dEJRVVZCTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEVzWVVGQlN6dEJRVU5NTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHRCUVVOQk8wRkJRMEVzYlVOQlFUSkNMREJDUVVFd1FpeEZRVUZGTzBGQlEzWkVMSGxEUVVGcFF5eGxRVUZsTzBGQlEyaEVPMEZCUTBFN1FVRkRRVHM3UVVGRlFUdEJRVU5CTERoRVFVRnpSQ3dyUkVGQkswUTdPMEZCUlhKSU8wRkJRMEU3TzBGQlJVRTdRVUZEUVRzN096czdPenM3T3pzN1FVTnlSRUVzU1VGUlF6dEJRVkpFTEZkQlFUaENPMEZCUXpGQ0xESkVRVUZOTzBGQlEwNHNNa1JCUVUwN1FVRkRUaXcwUkVGQlR6dEJRVU5RTERoRVFVRlRPMEZCUTFRc01rUkJRVTA3UVVGRFRpdzBSRUZCVHp0QlFVTlFMRFpFUVVOS08wRkJRVU1zUjBGU05rSXNjVUpCUVd4Q0xGRkJRV3RDTEhWQ1FVRnNRaXhSUVVGclFpeHhRa0ZSTjBJc1N6czdPenM3T3pzN096czdPenM3T3pzN096dEJRMmhDUkN4dFEwRmhRVHM3TzBGQlUwazdPenRCUVc5SlVTeGhRVUZQTEZWQlFVOHNTMEZCV1N4WlFVRkxMRXRCUVZNN1FVRkZlRU1zWVVGQlV5eFpRVUZQTEV0QlFXTXNZMEZCU3l4TFFVRlRPMEZCVFRWRExHRkJRVThzVlVGQlR5eExRVUZaTEZsQlFVc3NTMEZCVXp0QlFVVjRReXhoUVVGUkxGZEJRVThzUzBGQll5eGpRVUZMTEV0QlFWTTdRVUUzU1RORExHRkJRVlVzV1VGQlR6dEJRVU5xUWl4aFFVRk5MRkZCUVVjc1dVRkJVU3hEUVVGRk8wRkJRMjVDTEdGQlFVMHNVVUZCVFR0QlFVTmFMR0ZCUVZrc1kwRkJUeXhMUVVNelFqdEJRVk5QT3pzN08yZERRVUZsTzBGQlEyUXNhVUpCUVUwc1VVRkJVVHRCUVVOYUxHMUNRVU5XTzBGQlUxYzdPenR2UTBGQmFVSTdRVUZEY0VJc2FVSkJRVlVzV1VGQldUdEJRVU53UWl4dFFrRkRWanRCUVZOUE96czdaME5CUVdFN1FVRkRXaXhwUWtGQlRTeFJRVUZSTzBGQlExb3NiVUpCUTFZN1FVRlRZVHM3TzNORFFVRXJRanRCUVVOcVF5eHZRa0ZCWXp0QlFVTnFRaXh4UWtGQlN5eFRRVUZyUWl4dFFrRkJUenRCUVVOMFFpeDVRa0ZCV1N4alFVRlBMRXRCUVZFN1FVRkRla0k3UVVGRFZpeHhRa0ZCU3l4VFFVRnJRaXh0UWtGQlVUdEJRVU4yUWl4NVFrRkJXU3hqUVVGUExFdEJRVk03UVVGRE1VSTdRVUZEVml4eFFrRkJTeXhUUVVGclFpeHRRa0ZCVlR0QlFVTjZRaXg1UWtGQldTeGpRVUZQTEV0QlFWYzdRVUZETlVJN1FVRkRWaXh4UWtGQlN5eFRRVUZyUWl4dFFrRkJUenRCUVVOMFFpeDVRa0ZCV1N4alFVRlBMRXRCUVZFN1FVRkRla0k3UVVGRFZpeHhRa0ZCU3l4VFFVRnJRaXh0UWtGQlVUdEJRVU4yUWl4NVFrRkJXU3hqUVVGUExFdEJRVk03UVVGRE1VSTdRVUZEVml4eFFrRkJTeXhUUVVGclFpeHRRa0ZCVXp0QlFVTjRRaXg1UWtGQldTeGpRVUZQTEV0QlFWVTdRVUZETTBJN1FVRkRWanRCUVVOUkxIbENRVUZaTEdOQlFVOHNTMEZCVVR0QlFVVjBRenM3UVVGRFN5eHRRa0ZEVmp0QlFWRlBPenM3WjBOQlFXbENPenM3TzBGQlFXTTdPenRCUVVNMVFpeDFRa0ZCV1N4UlFVRkRMRlZCUVZFN1FVRkRjRUlzYjBKQlFVTXNUMEZCWVN4UFFVRjVRaXcyUWtGQlowSXNXVUZCUlR0QlFVTjRSQ3gzUWtGQlV5eFRRVUZqTEZsQlFVODdRVUZET1VJc2QwSkJRV2RDTEdGQlFVY3NiMEpCUVVzN1FVRkRjRUlzTkVKQlFWa3NWMEZCUnl4RFFVRkxMRTlCUVZNc1ZVRkJUeXhOUVVGWE8wRkJRelZETERSQ1FVRlRMRmRCUVVzc1IwRkJVeXhYUVVGTE8wRkJSeTlDTERSQ1FVRlRMRkZCUVU4c1RVRkJXU3haUVVGVk8wRkJSV3hETERoQ1FVRk5MRTFCUVUwc1QwRkJVVHRCUVVWeVFpdzBRa0ZCVXl4WFFVRkxMRWRCUVVVN1FVRkRUU3hyUkVGRGVrSTdRVUZCVFN3clFrRkJSVHRCUVVOSExHOURRVU5ZTzBGQlEwbzdRVUZCUXp0QlFVTnZRaXd3UTBGRGVrSTdRVUZCVFN4MVFrRkJSVHRCUVVOQkxEQkNRVUZWTEcxQ1FVRnhRaXhaUVVGRE8wRkJRMmhETERSQ1FVRmhMRmxCUVU4c1MwRkJUenRCUVVNelFpdzBRa0ZCWXl4aFFVRlpMRmxCUVZNN1FVRkRia01zTkVKQlFWa3NWMEZCWVN4aFFVRlBMRTFCUVZjN1FVRkZlRU1zTkVKQlFWTXNWMEZCU3l4SFFVRlRMRmRCUVVrN1FVRkZPVUlzTkVKQlFWTXNVVUZCVHl4TlFVRlpMRmxCUVZjN1FVRkZia01zT0VKQlFVMHNUVUZCVFN4UFFVRlJPMEZCUlhKQ0xEUkNRVUZUTEZsQlFVMHNSMEZCUlR0QlFVTklMREJEUVVGTExFMUJRVms3UVVGRGRrSXNiME5CUTFnN1FVRkRTanRCUVVGRExIRkNRV1p6UWl4RlFXVm9RaXhOUVVOWU8wRkJRMG83UVVGRFNpeGhRWFJEVnp0QlFYZERSenM3T3l0Q1FVRnBRanRCUVVOeVFpeHRRa0ZEVmp0QlFVVmpPenM3SzBKQlFXbENPMEZCUTNKQ0xHMUNRVUZMTEV0QlFVa3NTVUZCVXl4VlFVTTFRanRCUVUxak96czdLMEpCUVdsQ08yZENRVUZGTEhkRlFVRmhPenRCUVVOd1F5eHRRa0ZCU3l4TFFVRkpMRWxCUVZNc1ZVRkJUeXhOUVVGRExFTkJRVVVzU1VGQlN5eExRVUZYTEZkQlEzUkVPMEZCVFcxQ096czdiME5CUVdsQ08wRkJRekZDTEcxQ1FVRkRMRlZCUVRCQ08wRkJRM1pDTEhWQ1FVRkZMRWxCUVZNc1QwRkJSU3hKUVVOMlFqdEJRVU5LTzBGQlJYRkNPenM3YzBOQlFVODdRVUZEYkVJc2JVSkJRVU1zVlVGQmEwSTdRVUZEYkVJc2IwSkJRVk1zVjBGQlRTeEpRVU5TTEU5QlFVOHNUMEZCUlN4SlFVRlpMRmxCUXpOQ0xFOUJRMDBzVDBGQlF5eERRVUZGTEVsQlFWTXNUMEZCU3l4TFFVRkZMRWxCUVdNc1kwRkRMME03UVVGRFNqdEJRVU5JT3pzN096czdRVUYyUzBRc2VVSkJkVXRETzBGQlJVUXNOa0pCUVhsQ0xFa2lMQ0ptYVd4bElqb2laR2x6ZEM5dmRYUnJhWFF0WVc1cGJXRjBiM0l1YW5NaUxDSnpiM1Z5WTJWelEyOXVkR1Z1ZENJNld5SW9ablZ1WTNScGIyNGdkMlZpY0dGamExVnVhWFpsY25OaGJFMXZaSFZzWlVSbFptbHVhWFJwYjI0b2NtOXZkQ3dnWm1GamRHOXllU2tnZTF4dVhIUnBaaWgwZVhCbGIyWWdaWGh3YjNKMGN5QTlQVDBnSjI5aWFtVmpkQ2NnSmlZZ2RIbHdaVzltSUcxdlpIVnNaU0E5UFQwZ0oyOWlhbVZqZENjcFhHNWNkRngwYlc5a2RXeGxMbVY0Y0c5eWRITWdQU0JtWVdOMGIzSjVLQ2s3WEc1Y2RHVnNjMlVnYVdZb2RIbHdaVzltSUdSbFptbHVaU0E5UFQwZ0oyWjFibU4wYVc5dUp5QW1KaUJrWldacGJtVXVZVzFrS1Z4dVhIUmNkR1JsWm1sdVpTaGJYU3dnWm1GamRHOXllU2s3WEc1Y2RHVnNjMlVnYVdZb2RIbHdaVzltSUdWNGNHOXlkSE1nUFQwOUlDZHZZbXBsWTNRbktWeHVYSFJjZEdWNGNHOXlkSE5iWENKdmF5MWhibWx0WVhSdmNsd2lYU0E5SUdaaFkzUnZjbmtvS1R0Y2JseDBaV3h6WlZ4dVhIUmNkSEp2YjNSYlhDSnZheTFoYm1sdFlYUnZjbHdpWFNBOUlHWmhZM1J2Y25rb0tUdGNibjBwS0hSb2FYTXNJR1oxYm1OMGFXOXVLQ2tnZTF4dWNtVjBkWEp1SUZ4dVhHNWNiaTh2SUZkRlFsQkJRMHNnUms5UFZFVlNJQzh2WEc0dkx5QjNaV0p3WVdOckwzVnVhWFpsY25OaGJFMXZaSFZzWlVSbFptbHVhWFJwYjI0aUxDSWdYSFF2THlCVWFHVWdiVzlrZFd4bElHTmhZMmhsWEc0Z1hIUjJZWElnYVc1emRHRnNiR1ZrVFc5a2RXeGxjeUE5SUh0OU8xeHVYRzRnWEhRdkx5QlVhR1VnY21WeGRXbHlaU0JtZFc1amRHbHZibHh1SUZ4MFpuVnVZM1JwYjI0Z1gxOTNaV0p3WVdOclgzSmxjWFZwY21WZlh5aHRiMlIxYkdWSlpDa2dlMXh1WEc0Z1hIUmNkQzh2SUVOb1pXTnJJR2xtSUcxdlpIVnNaU0JwY3lCcGJpQmpZV05vWlZ4dUlGeDBYSFJwWmlocGJuTjBZV3hzWldSTmIyUjFiR1Z6VzIxdlpIVnNaVWxrWFNrZ2UxeHVJRngwWEhSY2RISmxkSFZ5YmlCcGJuTjBZV3hzWldSTmIyUjFiR1Z6VzIxdlpIVnNaVWxrWFM1bGVIQnZjblJ6TzF4dUlGeDBYSFI5WEc0Z1hIUmNkQzh2SUVOeVpXRjBaU0JoSUc1bGR5QnRiMlIxYkdVZ0tHRnVaQ0J3ZFhRZ2FYUWdhVzUwYnlCMGFHVWdZMkZqYUdVcFhHNGdYSFJjZEhaaGNpQnRiMlIxYkdVZ1BTQnBibk4wWVd4c1pXUk5iMlIxYkdWelcyMXZaSFZzWlVsa1hTQTlJSHRjYmlCY2RGeDBYSFJwT2lCdGIyUjFiR1ZKWkN4Y2JpQmNkRngwWEhSc09pQm1ZV3h6WlN4Y2JpQmNkRngwWEhSbGVIQnZjblJ6T2lCN2ZWeHVJRngwWEhSOU8xeHVYRzRnWEhSY2RDOHZJRVY0WldOMWRHVWdkR2hsSUcxdlpIVnNaU0JtZFc1amRHbHZibHh1SUZ4MFhIUnRiMlIxYkdWelcyMXZaSFZzWlVsa1hTNWpZV3hzS0cxdlpIVnNaUzVsZUhCdmNuUnpMQ0J0YjJSMWJHVXNJRzF2WkhWc1pTNWxlSEJ2Y25SekxDQmZYM2RsWW5CaFkydGZjbVZ4ZFdseVpWOWZLVHRjYmx4dUlGeDBYSFF2THlCR2JHRm5JSFJvWlNCdGIyUjFiR1VnWVhNZ2JHOWhaR1ZrWEc0Z1hIUmNkRzF2WkhWc1pTNXNJRDBnZEhKMVpUdGNibHh1SUZ4MFhIUXZMeUJTWlhSMWNtNGdkR2hsSUdWNGNHOXlkSE1nYjJZZ2RHaGxJRzF2WkhWc1pWeHVJRngwWEhSeVpYUjFjbTRnYlc5a2RXeGxMbVY0Y0c5eWRITTdYRzRnWEhSOVhHNWNibHh1SUZ4MEx5OGdaWGh3YjNObElIUm9aU0J0YjJSMWJHVnpJRzlpYW1WamRDQW9YMTkzWldKd1lXTnJYMjF2WkhWc1pYTmZYeWxjYmlCY2RGOWZkMlZpY0dGamExOXlaWEYxYVhKbFgxOHViU0E5SUcxdlpIVnNaWE03WEc1Y2JpQmNkQzh2SUdWNGNHOXpaU0IwYUdVZ2JXOWtkV3hsSUdOaFkyaGxYRzRnWEhSZlgzZGxZbkJoWTJ0ZmNtVnhkV2x5WlY5ZkxtTWdQU0JwYm5OMFlXeHNaV1JOYjJSMWJHVnpPMXh1WEc0Z1hIUXZMeUJrWldacGJtVWdaMlYwZEdWeUlHWjFibU4wYVc5dUlHWnZjaUJvWVhKdGIyNTVJR1Y0Y0c5eWRITmNiaUJjZEY5ZmQyVmljR0ZqYTE5eVpYRjFhWEpsWDE4dVpDQTlJR1oxYm1OMGFXOXVLR1Y0Y0c5eWRITXNJRzVoYldVc0lHZGxkSFJsY2lrZ2UxeHVJRngwWEhScFppZ2hYMTkzWldKd1lXTnJYM0psY1hWcGNtVmZYeTV2S0dWNGNHOXlkSE1zSUc1aGJXVXBLU0I3WEc0Z1hIUmNkRngwVDJKcVpXTjBMbVJsWm1sdVpWQnliM0JsY25SNUtHVjRjRzl5ZEhNc0lHNWhiV1VzSUh0Y2JpQmNkRngwWEhSY2RHTnZibVpwWjNWeVlXSnNaVG9nWm1Gc2MyVXNYRzRnWEhSY2RGeDBYSFJsYm5WdFpYSmhZbXhsT2lCMGNuVmxMRnh1SUZ4MFhIUmNkRngwWjJWME9pQm5aWFIwWlhKY2JpQmNkRngwWEhSOUtUdGNiaUJjZEZ4MGZWeHVJRngwZlR0Y2JseHVJRngwTHk4Z1oyVjBSR1ZtWVhWc2RFVjRjRzl5ZENCbWRXNWpkR2x2YmlCbWIzSWdZMjl0Y0dGMGFXSnBiR2wwZVNCM2FYUm9JRzV2Ymkxb1lYSnRiMjU1SUcxdlpIVnNaWE5jYmlCY2RGOWZkMlZpY0dGamExOXlaWEYxYVhKbFgxOHViaUE5SUdaMWJtTjBhVzl1S0cxdlpIVnNaU2tnZTF4dUlGeDBYSFIyWVhJZ1oyVjBkR1Z5SUQwZ2JXOWtkV3hsSUNZbUlHMXZaSFZzWlM1ZlgyVnpUVzlrZFd4bElEOWNiaUJjZEZ4MFhIUm1kVzVqZEdsdmJpQm5aWFJFWldaaGRXeDBLQ2tnZXlCeVpYUjFjbTRnYlc5a2RXeGxXeWRrWldaaGRXeDBKMTA3SUgwZ09seHVJRngwWEhSY2RHWjFibU4wYVc5dUlHZGxkRTF2WkhWc1pVVjRjRzl5ZEhNb0tTQjdJSEpsZEhWeWJpQnRiMlIxYkdVN0lIMDdYRzRnWEhSY2RGOWZkMlZpY0dGamExOXlaWEYxYVhKbFgxOHVaQ2huWlhSMFpYSXNJQ2RoSnl3Z1oyVjBkR1Z5S1R0Y2JpQmNkRngwY21WMGRYSnVJR2RsZEhSbGNqdGNiaUJjZEgwN1hHNWNiaUJjZEM4dklFOWlhbVZqZEM1d2NtOTBiM1I1Y0dVdWFHRnpUM2R1VUhKdmNHVnlkSGt1WTJGc2JGeHVJRngwWDE5M1pXSndZV05yWDNKbGNYVnBjbVZmWHk1dklEMGdablZ1WTNScGIyNG9iMkpxWldOMExDQndjbTl3WlhKMGVTa2dleUJ5WlhSMWNtNGdUMkpxWldOMExuQnliM1J2ZEhsd1pTNW9ZWE5QZDI1UWNtOXdaWEowZVM1allXeHNLRzlpYW1WamRDd2djSEp2Y0dWeWRIa3BPeUI5TzF4dVhHNGdYSFF2THlCZlgzZGxZbkJoWTJ0ZmNIVmliR2xqWDNCaGRHaGZYMXh1SUZ4MFgxOTNaV0p3WVdOclgzSmxjWFZwY21WZlh5NXdJRDBnWENKY0lqdGNibHh1SUZ4MEx5OGdURzloWkNCbGJuUnllU0J0YjJSMWJHVWdZVzVrSUhKbGRIVnliaUJsZUhCdmNuUnpYRzRnWEhSeVpYUjFjbTRnWDE5M1pXSndZV05yWDNKbGNYVnBjbVZmWHloZlgzZGxZbkJoWTJ0ZmNtVnhkV2x5WlY5ZkxuTWdQU0F4S1R0Y2JseHVYRzVjYmk4dklGZEZRbEJCUTBzZ1JrOVBWRVZTSUM4dlhHNHZMeUIzWldKd1lXTnJMMkp2YjNSemRISmhjQ0JpWkdaaVkyRXpNR1V6WldObU16UTBPRE0wWlNJc0ltVjRjRzl5ZENCcGJuUmxjbVpoWTJVZ1NVRnVhVzFoZEc5eUlIdGNjbHh1SUNBZ0lHRnVhVzFoZEdVb2MzUmhjblEvT2lCdWRXMWlaWElzSUM0dUxtRnlaM01nT2lCaGJubGJYU2s2SUZCeWIyMXBjMlU4WW05dmJHVmhiajQ3WEhKY2JpQWdJQ0J6WlhSVGRHVndLSE4wWlhBNklFWjFibU4wYVc5dUtUb2dkR2hwY3p0Y2NseHVJQ0FnSUhObGRFUjFjbUYwYVc5dUtHUjFjbUYwYVc5dU9pQnVkVzFpWlhJcE9pQjBhR2x6TzF4eVhHNGdJQ0FnYzJWMFVtRjBaU2h5WVhSbE9pQnVkVzFpWlhJcE9pQjBhR2x6TzF4eVhHNGdJQ0FnYzJWMFZISmhibk5wZEdsdmJpaDBjbUZ1YzJsMGFXOXVPaUJCYm1sdFlYUnZjbFJ5WVc1emFYUnBiMjRwTzF4eVhHNTlYSEpjYmx4eVhHNWxlSEJ2Y25RZ1pXNTFiU0JCYm1sdFlYUnZjbFJ5WVc1emFYUnBiMjRnZTF4eVhHNGdJQ0FnVEdsdVpXRnlMRnh5WEc0Z0lDQWdSV0Z6WlVsdUxGeHlYRzRnSUNBZ1JXRnpaVTkxZEN4Y2NseHVJQ0FnSUVWaGMyVkpiazkxZEN4Y2NseHVJQ0FnSUZCMWJHeEpiaXhjY2x4dUlDQWdJRkIxYzJoUGRYUXNYSEpjYmlBZ0lDQlFkWE5vVUhWc2JGeHlYRzU5WEhKY2JseHVYRzVjYmk4dklGZEZRbEJCUTBzZ1JrOVBWRVZTSUM4dlhHNHZMeUF1TDNOeVl5OWpiMjF0YjI0dWRITWlMQ0pwYlhCdmNuUWdleUJKUVc1cGJXRjBiM0lzSUVGdWFXMWhkRzl5VkhKaGJuTnBkR2x2YmlCOUlHWnliMjBnWENJdUwyTnZiVzF2Ymx3aU8xeHlYRzVjY2x4dUx5b3FYSEpjYmlBcUlFOTFkR3RwZENCQmJtbHRZWFJ2Y2x4eVhHNGdLaUJCSUhOcGJYQnNaU0JoYm1sdFlYUnZjaUJqYkdGemN5QjBhR0YwSUdoaGN5QjBhVzFwYm1jZ1puVnVZM1JwYjI1ekxpQWdTR1ZoZG1sc2VTQnBibk53YVhKbFpDQmllU0IwYUdVZ1hISmNiaUFxSUdwaGRtRnpZM0pwY0hRZ1kyeGhjM01nWVhRZ2FIUjBjRG92TDJwaGRtRnpZM0pwY0hRdWFXNW1ieTlxY3kxaGJtbHRZWFJwYjI0dUlDQkpaaUJoZG1GcGJHRmliR1VnYVhRZ2QybHNiRnh5WEc0Z0tpQjFjMlVnY21WeGRXVnpkRUZ1YVcxaGRHbHZia1p5WVcxbElHOXlJR2wwSUhkcGJHd2dabUZzYkNCaVlXTnJJSFJ2SUhObGRFbHVkR1Z5ZG1Gc0xpQkJibWx0WVhSbFhISmNiaUFxSUhKbGRIVnlibk1nWVNCd2NtOXRhWE5sSUhOdklIUm9ZWFFnZVc5MUlHTmhiaUJ6ZEdGamF5QmhibWx0WVhScGIyNXpMbHh5WEc0Z0tpQmNjbHh1SUNvZ1FHVjRjRzl5ZEZ4eVhHNGdLaUJBWTJ4aGMzTWdUM1YwYTJsMFFXNXBiV0YwYjNKY2NseHVJQ29nUUdsdGNHeGxiV1Z1ZEhNZ2UwbEJibWx0WVhSdmNuMWNjbHh1SUNvdlhISmNibVY0Y0c5eWRDQmpiR0Z6Y3lCUGRYUnJhWFJCYm1sdFlYUnZjaUJwYlhCc1pXMWxiblJ6SUVsQmJtbHRZWFJ2Y2lCN1hISmNibHh5WEc0Z0lDQWdjSFZpYkdsaklITjBZWEowT2lCdWRXMWlaWEk3WEhKY2JpQWdJQ0J3Y21sMllYUmxJRjlrZFhKaGRHbHZiam9nYm5WdFltVnlPMXh5WEc0Z0lDQWdjSEpwZG1GMFpTQmZjM1JsY0RvZ1JuVnVZM1JwYjI0N1hISmNiaUFnSUNCd2NtbDJZWFJsSUY5cGJuUmxjblpoYkRvZ2JuVnRZbVZ5TzF4eVhHNGdJQ0FnY0hKcGRtRjBaU0JmY21GMFpUb2diblZ0WW1WeU8xeHlYRzRnSUNBZ2NISnBkbUYwWlNCZmRISmhibk5wZEdsdmJqb2dSblZ1WTNScGIyNDdYSEpjYmx4eVhHNGdJQ0FnY0hWaWJHbGpJR052Ym5OMGNuVmpkRzl5S0NrZ2UxeHlYRzRnSUNBZ0lDQWdJSFJvYVhNdVgyUjFjbUYwYVc5dUlEMGdNakF3TzF4eVhHNGdJQ0FnSUNBZ0lIUm9hWE11WDNOMFpYQWdQU0FvS1NBOVBpQjdJSDA3WEhKY2JpQWdJQ0FnSUNBZ2RHaHBjeTVmY21GMFpTQTlJREUyTzF4eVhHNGdJQ0FnSUNBZ0lIUm9hWE11WDNSeVlXNXphWFJwYjI0Z1BTQjBhR2x6TG14cGJtVmhjanRjY2x4dUlDQWdJSDFjY2x4dVhISmNiaUFnSUNBdktpcGNjbHh1SUNBZ0lDQXFJRk5sZEhNZ2RHaGxJSE4wWlhBZ1puVnVZM1JwYjI0Z1kyRnNiR1ZrSUdKNUlHRnVhVzFoZEdVZ1lYUWdaV0ZqYUNCcGJuUmxjblpoYkZ4eVhHNGdJQ0FnSUNvZ1hISmNiaUFnSUNBZ0tpQkFjR0Z5WVcwZ2MzUmxjQ0JHZFc1amRHbHZiaUIwYUdGMElIUmhhMlZ6SUdFZ1pHVnNkR0VnWVc1a0lHRnlaM05jY2x4dUlDQWdJQ0FxSUVCeVpYUjFjbTV6SUh0MGFHbHpmU0JjY2x4dUlDQWdJQ0FxSUVCdFpXMWlaWEp2WmlCUGRYUnJhWFJCYm1sdFlYUnZjbHh5WEc0Z0lDQWdJQ292WEhKY2JpQWdJQ0J6WlhSVGRHVndLSE4wWlhBNklFWjFibU4wYVc5dUtUb2dkR2hwY3lCN1hISmNiaUFnSUNBZ0lDQWdkR2hwY3k1ZmMzUmxjQ0E5SUhOMFpYQTdYSEpjYmlBZ0lDQWdJQ0FnY21WMGRYSnVJSFJvYVhNN1hISmNiaUFnSUNCOVhISmNibHh5WEc0Z0lDQWdMeW9xWEhKY2JpQWdJQ0FnS2lCVFpYUnpJSFJvWlNCMGIzUmhiQ0JrZFhKaGRHbHZiaUJ2WmlCMGFHVWdZVzVwYldGMGFXOXVYSEpjYmlBZ0lDQWdLaUJjY2x4dUlDQWdJQ0FxSUVCd1lYSmhiU0I3Ym5WdFltVnlmU0JrZFhKaGRHbHZiaUJ0YVd4c2FYTmxZMjl1WkhNZ2IyWWdjM0JzWlc1a2FXUWdZVzVwYldGMGFXOXVJQ2hrWldaaGRXeDBPaUF5TURCdGN5bGNjbHh1SUNBZ0lDQXFJRUJ5WlhSMWNtNXpJSHQwYUdsemZTQmNjbHh1SUNBZ0lDQXFJRUJ0WlcxaVpYSnZaaUJQZFhScmFYUkJibWx0WVhSdmNseHlYRzRnSUNBZ0lDb3ZYSEpjYmlBZ0lDQnpaWFJFZFhKaGRHbHZiaWhrZFhKaGRHbHZiam9nYm5WdFltVnlLVG9nZEdocGN5QjdYSEpjYmlBZ0lDQWdJQ0FnZEdocGN5NWZaSFZ5WVhScGIyNGdQU0JrZFhKaGRHbHZianRjY2x4dUlDQWdJQ0FnSUNCeVpYUjFjbTRnZEdocGN6dGNjbHh1SUNBZ0lIMWNjbHh1WEhKY2JpQWdJQ0F2S2lwY2NseHVJQ0FnSUNBcUlGTmxkQ0IwYUdVZ2FXNTBaWEoyWVd3Z2NtRjBaU0J2WmlCMGFHVWdZVzVwYldGMGFXOXVYSEpjYmlBZ0lDQWdLaUJjY2x4dUlDQWdJQ0FxSUVCd1lYSmhiU0I3Ym5WdFltVnlmU0J5WVhSbElHbHVkR1Z5ZG1Gc0lISmhkR1VnYVc0Z2JXbHNiR2x6WldOdmJtUnpJQ2hrWldaaGRXeDBPaUF4Tm0xektWeHlYRzRnSUNBZ0lDb2dRSEpsZEhWeWJuTWdlM1JvYVhOOUlGeHlYRzRnSUNBZ0lDb2dRRzFsYldKbGNtOW1JRTkxZEd0cGRFRnVhVzFoZEc5eVhISmNiaUFnSUNBZ0tpOWNjbHh1SUNBZ0lITmxkRkpoZEdVb2NtRjBaVG9nYm5WdFltVnlLVG9nZEdocGN5QjdYSEpjYmlBZ0lDQWdJQ0FnZEdocGN5NWZjbUYwWlNBOUlISmhkR1U3WEhKY2JpQWdJQ0FnSUNBZ2NtVjBkWEp1SUhSb2FYTTdYSEpjYmlBZ0lDQjlYSEpjYmx4eVhHNGdJQ0FnTHlvcVhISmNiaUFnSUNBZ0tpQlRaWFJ6SUhSb1pTQjBhVzFwYm1jZ1puVnVZM1JwYjI0Z2RYTmxaQ0JpZVNCMGFHVWdZVzVwYldGMFpTQm1kVzVqZEdsdmJpQW9aR1ZtWVhWc2REb2dUR2x1WldGeUtWeHlYRzRnSUNBZ0lDb2dYSEpjYmlBZ0lDQWdLaUJBY0dGeVlXMGdlMEZ1YVcxaGRHOXlWSEpoYm5OcGRHbHZibjBnZEhKaGJuTnBkR2x2YmlCVWFXMXBibWNnWm5WdVkzUnBiMjVjY2x4dUlDQWdJQ0FxSUVCeVpYUjFjbTV6SUh0MGFHbHpmU0JjY2x4dUlDQWdJQ0FxSUVCdFpXMWlaWEp2WmlCUGRYUnJhWFJCYm1sdFlYUnZjbHh5WEc0Z0lDQWdJQ292WEhKY2JpQWdJQ0J6WlhSVWNtRnVjMmwwYVc5dUtIUnlZVzV6YVhScGIyNDZJRUZ1YVcxaGRHOXlWSEpoYm5OcGRHbHZiaWs2SUhSb2FYTWdlMXh5WEc0Z0lDQWdJQ0FnSUhOM2FYUmphQ0FvZEhKaGJuTnBkR2x2YmlrZ2UxeHlYRzRnSUNBZ0lDQWdJQ0FnSUNCallYTmxJRUZ1YVcxaGRHOXlWSEpoYm5OcGRHbHZiaTVGWVhObFNXNDZYSEpjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0IwYUdsekxsOTBjbUZ1YzJsMGFXOXVJRDBnZEdocGN5NWxZWE5sU1c0N1hISmNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQmljbVZoYXp0Y2NseHVJQ0FnSUNBZ0lDQWdJQ0FnWTJGelpTQkJibWx0WVhSdmNsUnlZVzV6YVhScGIyNHVSV0Z6WlU5MWREcGNjbHh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJSFJvYVhNdVgzUnlZVzV6YVhScGIyNGdQU0IwYUdsekxtVmhjMlZQZFhRN1hISmNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQmljbVZoYXp0Y2NseHVJQ0FnSUNBZ0lDQWdJQ0FnWTJGelpTQkJibWx0WVhSdmNsUnlZVzV6YVhScGIyNHVSV0Z6WlVsdVQzVjBPbHh5WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnZEdocGN5NWZkSEpoYm5OcGRHbHZiaUE5SUhSb2FYTXVaV0Z6WlVsdVQzVjBPMXh5WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnWW5KbFlXczdYSEpjYmlBZ0lDQWdJQ0FnSUNBZ0lHTmhjMlVnUVc1cGJXRjBiM0pVY21GdWMybDBhVzl1TGxCMWJHeEpianBjY2x4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUhSb2FYTXVYM1J5WVc1emFYUnBiMjRnUFNCMGFHbHpMbkIxYkd4SmJqdGNjbHh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJR0p5WldGck8xeHlYRzRnSUNBZ0lDQWdJQ0FnSUNCallYTmxJRUZ1YVcxaGRHOXlWSEpoYm5OcGRHbHZiaTVRZFhOb1QzVjBPbHh5WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnZEdocGN5NWZkSEpoYm5OcGRHbHZiaUE5SUhSb2FYTXVjSFZ6YUU5MWREdGNjbHh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJR0p5WldGck8xeHlYRzRnSUNBZ0lDQWdJQ0FnSUNCallYTmxJRUZ1YVcxaGRHOXlWSEpoYm5OcGRHbHZiaTVRZFhOb1VIVnNiRHBjY2x4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUhSb2FYTXVYM1J5WVc1emFYUnBiMjRnUFNCMGFHbHpMbkIxYzJoUWRXeHNPMXh5WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnWW5KbFlXczdYSEpjYmlBZ0lDQWdJQ0FnSUNBZ0lHUmxabUYxYkhRNlhISmNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQjBhR2x6TGw5MGNtRnVjMmwwYVc5dUlEMGdkR2hwY3k1c2FXNWxZWEk3WEhKY2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCaWNtVmhhenRjY2x4dUlDQWdJQ0FnSUNCOVhISmNiaUFnSUNBZ0lDQWdjbVYwZFhKdUlIUm9hWE03WEhKY2JpQWdJQ0I5WEhKY2JseHlYRzRnSUNBZ0x5b3FYSEpjYmlBZ0lDQWdLaUJCYm1sdFlYUmxjeUIwYUdVZ0ozTjBaWEFuSUdaMWJtTjBhVzl1SUc5MlpYSWdKMlIxY21GMGFXOXVKeUJoZENCcGJuUmxjblpoYkNBbmNtRjBaU2N1SUZ4eVhHNGdJQ0FnSUNvZ1UzUmxjQ0JwY3lCallXeHNaV1FnZDJsMGFDQmtaV3gwWVNCMGFXMWxJR0Z1WkNCaGJua2dZWEpuZFcxbGJuUnpJSFJvWVhRZ2VXOTFJSEJoYzNNZ2RHOGdkR2hsSUZ4eVhHNGdJQ0FnSUNvZ1lXNXBiV0YwWlNCbWRXNWpkR2x2Ymk1Y2NseHVJQ0FnSUNBcUlFQndZWEpoYlNCemRHRnlkQ0JoSUdSaGRHVWdLRzFoYVc1c2VTQjFjMlZrSUdadmNpQjBaWE4wYVc1bktWeHlYRzRnSUNBZ0lDb3ZYSEpjYmlBZ0lDQmhibWx0WVhSbEtITjBZWEowUHpvZ2JuVnRZbVZ5TENBdUxpNWhjbWR6T2lCaGJubGJYU2s2SUZCeWIyMXBjMlU4WW05dmJHVmhiajRnZTF4eVhHNGdJQ0FnSUNBZ0lISmxkSFZ5YmlCdVpYY2dVSEp2YldselpTZ29jbVZ6YjJ4MlpTa2dQVDRnZTF4eVhHNGdJQ0FnSUNBZ0lDQWdJQ0JwWmlBb2RIbHdaVzltSUhkcGJtUnZkMXNuY21WeGRXVnpkRUZ1YVcxaGRHbHZia1p5WVcxbEoxMGdQVDA5SUNkbWRXNWpkR2x2YmljcElIdGNjbHh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJR3hsZENCemRHRnlkQ0E5SUhCbGNtWnZjbTFoYm1ObExtNXZkeWdwTzF4eVhHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ1kyOXVjM1FnY21GbVFXNXBiV0YwWlNBOUlDaDBhVzFsS1NBOVBpQjdYSEpjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2JHVjBJSEJ5YjJkeVpYTnpJRDBnS0hScGJXVWdMU0J6ZEdGeWRDa2dMeUIwYUdsekxsOWtkWEpoZEdsdmJqdGNjbHh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCcFppQW9jSEp2WjNKbGMzTWdQaUF4S1NCd2NtOW5jbVZ6Y3lBOUlERTdYSEpjYmx4eVhHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQzh2SUdOaGJHTjFiR0YwWlNCMGFHVWdZM1Z5Y21WdWRDQmhibWx0WVhScGIyNGdjM1JoZEdWY2NseHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0JzWlhRZ1pHVnNkR0VnUFNCMGFHbHpMbDkwY21GdWMybDBhVzl1S0hCeWIyZHlaWE56S1Z4eVhHNWNjbHh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCMGFHbHpMbDl6ZEdWd0tHUmxiSFJoTENCaGNtZHpLVHRjY2x4dVhISmNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnYVdZZ0tIQnliMmR5WlhOeklEd2dNU2tnZTF4eVhHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCeVpYRjFaWE4wUVc1cGJXRjBhVzl1Um5KaGJXVW9jbUZtUVc1cGJXRjBaU2s3WEhKY2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdmU0JsYkhObElIdGNjbHh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdjbVZ6YjJ4MlpTaDBjblZsS1R0Y2NseHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0I5WEhKY2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCOVhISmNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQnlaWEYxWlhOMFFXNXBiV0YwYVc5dVJuSmhiV1VvY21GbVFXNXBiV0YwWlNrN1hISmNiaUFnSUNBZ0lDQWdJQ0FnSUgwZ1pXeHpaU0I3WEhKY2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCMGFHbHpMbDlwYm5SbGNuWmhiQ0E5SUhkcGJtUnZkeTV6WlhSSmJuUmxjblpoYkNnb0tTQTlQaUI3WEhKY2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdiR1YwSUdSbGJIUmhWR2x0WlNBOUlFUmhkR1V1Ym05M0tDazdYSEpjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2JHVjBJSFJwYldWUVlYTnpaV1FnUFNCa1pXeDBZVlJwYldVZ0xTQnpkR0Z5ZER0Y2NseHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0JzWlhRZ2NISnZaM0psYzNNZ1BTQjBhVzFsVUdGemMyVmtJQzhnZEdocGN5NWZaSFZ5WVhScGIyNDdYSEpjYmx4eVhHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJR2xtSUNod2NtOW5jbVZ6Y3lBK0lERXBJSEJ5YjJkeVpYTnpJRDBnTVZ4eVhHNWNjbHh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCMllYSWdaR1ZzZEdFZ1BTQjBhR2x6TGw5MGNtRnVjMmwwYVc5dUtIQnliMmR5WlhOektUdGNjbHh1WEhKY2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdkR2hwY3k1ZmMzUmxjQ2hrWld4MFlTd2dZWEpuY3lrN1hISmNibHh5WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lHbG1JQ2h3Y205bmNtVnpjeUE5UFNBeEtTQjdYSEpjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJR05zWldGeVNXNTBaWEoyWVd3b2RHaHBjeTVmYVc1MFpYSjJZV3dwTzF4eVhHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCeVpYTnZiSFpsS0hSeWRXVXBPMXh5WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lIMWNjbHh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJSDBzSUhSb2FYTXVYM0poZEdVcFhISmNiaUFnSUNBZ0lDQWdJQ0FnSUgxY2NseHVJQ0FnSUNBZ0lDQjlLVnh5WEc0Z0lDQWdmVnh5WEc1Y2NseHVJQ0FnSUhCeWFYWmhkR1VnYkdsdVpXRnlLSEJ5YjJkeVpYTnpPaUJ1ZFcxaVpYSXBJSHRjY2x4dUlDQWdJQ0FnSUNCeVpYUjFjbTRnY0hKdlozSmxjM003WEhKY2JpQWdJQ0I5WEhKY2JseHlYRzRnSUNBZ2NISnBkbUYwWlNCbFlYTmxTVzRvY0hKdlozSmxjM002SUc1MWJXSmxjaWtnZTF4eVhHNGdJQ0FnSUNBZ0lISmxkSFZ5YmlCTllYUm9MbkJ2ZHlod2NtOW5jbVZ6Y3l3Z05TazdYSEpjYmlBZ0lDQjlYSEpjYmx4eVhHNGdJQ0FnY0hKcGRtRjBaU0JsWVhObFQzVjBJRDBnZEdocGN5NXRZV3RsUldGelpVOTFkQ2gwYUdsekxtVmhjMlZKYmlrN1hISmNibHh5WEc0Z0lDQWdjSEpwZG1GMFpTQmxZWE5sU1c1UGRYUWdQU0IwYUdsekxtMWhhMlZGWVhObFNXNVBkWFFvZEdocGN5NWxZWE5sU1c0cE8xeHlYRzVjY2x4dUlDQWdJSEJ5YVhaaGRHVWdjSFZzYkVsdUtIQnliMmR5WlhOek9pQnVkVzFpWlhJc0lIZzZJRzUxYldKbGNpQTlJRElwSUh0Y2NseHVJQ0FnSUNBZ0lDQnlaWFIxY200Z1RXRjBhQzV3YjNjb2NISnZaM0psYzNNc0lESXBJQ29nS0NoNElDc2dNU2tnS2lCd2NtOW5jbVZ6Y3lBdElIZ3BYSEpjYmlBZ0lDQjlYSEpjYmx4eVhHNGdJQ0FnY0hKcGRtRjBaU0J3ZFhOb1QzVjBJRDBnZEdocGN5NXRZV3RsUldGelpVOTFkQ2gwYUdsekxuQjFiR3hKYmlrN1hISmNibHh5WEc0Z0lDQWdjSEpwZG1GMFpTQndkWE5vVUhWc2JDQTlJSFJvYVhNdWJXRnJaVVZoYzJWSmJrOTFkQ2gwYUdsekxuQjFiR3hKYmlrN1hISmNibHh5WEc0Z0lDQWdjSEpwZG1GMFpTQnRZV3RsUldGelpVOTFkQ2gwYVcxcGJtYzZJRVoxYm1OMGFXOXVLU0I3WEhKY2JpQWdJQ0FnSUNBZ2NtVjBkWEp1SUdaMWJtTjBhVzl1SUNod2NtOW5jbVZ6Y3pvZ2JuVnRZbVZ5S1NCN1hISmNiaUFnSUNBZ0lDQWdJQ0FnSUhKbGRIVnliaUF4SUMwZ2RHbHRhVzVuS0RFZ0xTQndjbTluY21WemN5azdYSEpjYmlBZ0lDQWdJQ0FnZlZ4eVhHNGdJQ0FnZlZ4eVhHNWNjbHh1SUNBZ0lIQnlhWFpoZEdVZ2JXRnJaVVZoYzJWSmJrOTFkQ2gwYVcxcGJtY3BJSHRjY2x4dUlDQWdJQ0FnSUNCeVpYUjFjbTRnWm5WdVkzUnBiMjRnS0hCeWIyZHlaWE56S1NCN1hISmNiaUFnSUNBZ0lDQWdJQ0FnSUdsbUlDaHdjbTluY21WemN5QThJQzQxS1Z4eVhHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2NtVjBkWEp1SUhScGJXbHVaeWd5SUNvZ2NISnZaM0psYzNNcElDOGdNanRjY2x4dUlDQWdJQ0FnSUNBZ0lDQWdaV3h6WlZ4eVhHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ2NtVjBkWEp1SUNneUlDMGdkR2x0YVc1bktESWdLaUFvTVNBdElIQnliMmR5WlhOektTa3BJQzhnTWp0Y2NseHVJQ0FnSUNBZ0lDQjlYSEpjYmlBZ0lDQjlYSEpjYm4xY2NseHVYSEpjYm1WNGNHOXlkQ0FxSUdaeWIyMGdKeTR2WTI5dGJXOXVKenRjYmx4dVhHNHZMeUJYUlVKUVFVTkxJRVpQVDFSRlVpQXZMMXh1THk4Z0xpOXpjbU12YVc1a1pYZ3VkSE1pWFN3aWMyOTFjbU5sVW05dmRDSTZJaUo5XG4vLyMgc291cmNlTWFwcGluZ1VSTD1vdXRraXQtYW5pbWF0b3IuanMubWFwXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L291dGtpdC1hbmltYXRvci9kaXN0L291dGtpdC1hbmltYXRvci5qc1xuLy8gbW9kdWxlIGlkID0gMTNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sInNvdXJjZVJvb3QiOiIifQ==