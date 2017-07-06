/******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

/*! Outkit v0.1.0 - Copyright 2017 James Ehly - MIT License */
(function webpackUniversalModuleDefinition(root, factory) {
	if(true)
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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

Object.defineProperty(exports, "__esModule", { value: true });

var State = function State() {
    _classCallCheck(this, State);
};

exports.State = State;

var Style = function Style() {
    _classCallCheck(this, Style);
};

exports.Style = Style;

var VState = function () {
    function VState() {
        _classCallCheck(this, VState);

        this._state = new Array();
        this._index = 0;
    }

    _createClass(VState, [{
        key: "updateIndex",
        value: function updateIndex() {
            this._index = this._state.length - 1;
        }
    }, {
        key: "setStyle",
        value: function setStyle(name, value) {
            var state = this.latestState();
            state[name] = value;
            this.setState(state);
        }
    }, {
        key: "getState",
        value: function getState(index) {
            return this._state[index];
        }
    }, {
        key: "setState",
        value: function setState(state) {
            this._state.push(state);
        }
    }, {
        key: "latestState",
        value: function latestState() {
            return Object.assign({}, this._state[this._state.length - 1]);
        }
    }, {
        key: "currentState",
        value: function currentState() {
            return Object.assign({}, this._state[this._index]);
        }
    }, {
        key: "index",
        set: function set(index) {
            this._index = index;
        },
        get: function get() {
            return this._index;
        }
    }]);

    return VState;
}();

exports.VState = VState;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

Object.defineProperty(exports, "__esModule", { value: true });

var Component = function () {
    function Component(builder) {
        _classCallCheck(this, Component);

        this._element = builder.element;
        this._vstate = builder.state;
        this._animator = builder.animator;
    }

    _createClass(Component, [{
        key: "setElement",
        value: function setElement(el) {
            this._element = el;
            return this;
        }
    }, {
        key: "update",
        value: function update() {
            var newState = this._vstate.latestState();
            var oldState = this._vstate.currentState();
            if (this._vstate.index === 0) oldState = { style: {} };
            for (var name in newState.style) {
                if (newState.style[name] === oldState.style[name]) continue;
                var value = newState.style[name];
                this._element.style[name] = value;
            }
            this._vstate.updateIndex();
        }
    }, {
        key: "state",
        get: function get() {
            return this._vstate;
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
var vstate_1 = __webpack_require__(0);

var Drawer = function () {
    function Drawer(component) {
        var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : { dock: 'left', maxSize: 280, minSize: 0 };

        _classCallCheck(this, Drawer);

        this._dockedTo = options.dock || 'left';
        this._minSize = options.minSize || 0;
        this._maxSize = options.maxSize || 280;
        this._component = component;
        var state = this.init();
        this._component.state.setState(state);
        this.update();
    }

    _createClass(Drawer, [{
        key: "init",
        value: function init() {
            var state = new vstate_1.State();
            state.style = {};
            state.style.position = 'fixed';
            state.style.display = 'block';
            if (this.isLeft()) {
                state.style.width = this._maxSize + "px";
                state.style.height = '100%';
                state.style.left = "-" + this._maxSize + "px";
                state.style.top = '0';
            }
            if (this.isRight()) {
                state.style.width = this._maxSize + "px";
                state.style.height = '100%';
                state.style.right = "-" + this._maxSize + "px";
                state.style.top = '0';
            }
            if (this.isTop()) {
                state.style.width = '100%';
                state.style.height = this._maxSize + "px";
                state.style.top = "-" + this._maxSize + "px";
                state.style.left = '0';
            }
            if (this.isBottom()) {
                state.style.width = '100%';
                state.style.height = this._maxSize + "px";
                state.style.bottom = "-" + this._maxSize + "px";
                state.style.left = '0';
            }
            return state;
        }
    }, {
        key: "isLeft",
        value: function isLeft() {
            return this._dockedTo === 'left';
        }
    }, {
        key: "isRight",
        value: function isRight() {
            return this._dockedTo === 'right';
        }
    }, {
        key: "isTop",
        value: function isTop() {
            return this._dockedTo === 'top';
        }
    }, {
        key: "isBottom",
        value: function isBottom() {
            return this._dockedTo === 'bottom';
        }
    }, {
        key: "open",
        value: function open() {
            var state = this._component.state.currentState();
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
            this._component.state.setState(state);
            this.update();
        }
    }, {
        key: "close",
        value: function close() {
            var state = this._component.state.currentState();
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
            this._component.state.setState(state);
            this.update();
        }
    }, {
        key: "update",
        value: function update() {
            console.log('[Updating...]');
            this._component.update();
        }
    }]);

    return Drawer;
}();

exports.Drawer = Drawer;
exports.default = Drawer;

/***/ }),
/* 3 */
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
__export(__webpack_require__(2));

/***/ })
/******/ ]);
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCBlZDBjMGRhMDQwNjAzYTJlZDkwMCIsIndlYnBhY2s6Ly8vLi9zcmMvdnN0YXRlLnRzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2NvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9kcmF3ZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL291dGtpdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87QUNWQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsbURBQTJDLGNBQWM7O0FBRXpEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7c0RDaEVBOztJQUVDOzs7O0FBRkQsZ0JBSUE7O0lBWUM7Ozs7QUFaRCxnQkFvQkE7OztBQUtJOzs7QUFDUSxhQUFPLFNBQUcsSUFBbUI7QUFDN0IsYUFBTyxTQUNmO0FBRVM7Ozs7O0FBWUQsaUJBQU8sU0FBTyxLQUFPLE9BQU8sU0FDcEM7QUFPUTs7O2lDQUFhLE1BQWU7QUFDaEMsZ0JBQVMsUUFBTyxLQUFlO0FBQzFCLGtCQUFNLFFBQVM7QUFDaEIsaUJB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QUFDRSxnQkFBSyxLQUFTLFNBQUU7QUFDVixzQkFBTSxNQUFJLE1BQ25CO0FBQUM7QUFDRSxnQkFBSyxLQUFZLFlBQUU7QUFDYixzQkFBTSxNQUFPLFNBQ3RCO0FBQUM7QUFDRyxpQkFBVyxXQUFNLE1BQVMsU0FBUTtBQUNsQyxpQkFDUjtBQUVLOzs7O0FBQ0QsZ0JBQVMsUUFBTyxLQUFXLFdBQU0sTUFBZ0I7QUFDOUMsZ0JBQUssS0FBVSxVQUFFO0FBQ1gsc0JBQU0sTUFBUSxhQUFRLEtBQy9CO0FBQUM7QUFDRSxnQkFBSyxLQUFXLFdBQUU7QUFDWixzQkFBTSxNQUFTLGNBQVEsS0FDaEM7QUFBQztBQUNFLGdCQUFLLEtBQVMsU0FBRTtBQUNWLHNCQUFNLE1BQU8sWUFBUSxLQUM5QjtBQUFDO0FBQ0UsZ0JBQUssS0FBWSxZQUFFO0FBQ2Isc0JBQU0sTUFBVSxlQUFRLEtBQ2pDO0FBQUM7QUFDRyxpQkFBVyxXQUFNLE1BQVMsU0FBUTtBQUNsQyxpQkFDUjtBQUVNOzs7O0FBQ0ssb0JBQUksSUFBa0I7QUFDekIsaUJBQVcsV0FDbkI7QUFDSDs7Ozs7O0FBMUdELGlCQTBHQztBQUVELGtCQUFzQixPOzs7Ozs7Ozs7Ozs7Ozs7QUN0SHRCLDZCQUF5QjtBQUN6Qiw2QkFBdUM7QUFDdkMsNkJBQW9DLEkiLCJmaWxlIjoiZGlzdC9vdXRraXQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShbXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJvdXRraXRcIl0gPSBmYWN0b3J5KCk7XG5cdGVsc2Vcblx0XHRyb290W1wib3V0a2l0XCJdID0gZmFjdG9yeSgpO1xufSkodGhpcywgZnVuY3Rpb24oKSB7XG5yZXR1cm4gXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGlkZW50aXR5IGZ1bmN0aW9uIGZvciBjYWxsaW5nIGhhcm1vbnkgaW1wb3J0cyB3aXRoIHRoZSBjb3JyZWN0IGNvbnRleHRcbiBcdF9fd2VicGFja19yZXF1aXJlX18uaSA9IGZ1bmN0aW9uKHZhbHVlKSB7IHJldHVybiB2YWx1ZTsgfTtcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMyk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgZWQwYzBkYTA0MDYwM2EyZWQ5MDAiLCJleHBvcnQgY2xhc3MgU3RhdGUge1xyXG4gICAgc3R5bGU/OiBTdHlsZVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgU3R5bGUge1xyXG4gICAgaGVpZ2h0Pzogc3RyaW5nO1xyXG4gICAgd2lkdGg/OiBzdHJpbmc7XHJcbiAgICBvdmVyZmxvdz86IHN0cmluZztcclxuICAgIGZsb2F0Pzogc3RyaW5nO1xyXG4gICAgcG9zaXRpb24/OiBzdHJpbmc7XHJcbiAgICB6SW5kZXg/OiBzdHJpbmc7XHJcbiAgICB0b3A/OiBzdHJpbmc7XHJcbiAgICBib3R0b20/OiBzdHJpbmc7XHJcbiAgICBsZWZ0Pzogc3RyaW5nO1xyXG4gICAgcmlnaHQ/OiBzdHJpbmc7XHJcbiAgICBkaXNwbGF5Pzogc3RyaW5nO1xyXG59XHJcblxyXG4vKipcclxuICogVmlydHVhbCBzdGF0ZSBtYW5hZ2VyXHJcbiAqIFByb3ZpZGVzIGEgd2F5IHRvIG1hbmFnZSBzdGF0ZSBieSBrZWVwaW5nIHRyYWNrIG9mIG9iamVjdHMgaW4gYXJyYXlzXHJcbiAqIEBleHBvcnRcclxuICogQGNsYXNzIFZTdGF0ZVxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIFZTdGF0ZSB7XHJcblxyXG4gICAgcHJpdmF0ZSBfc3RhdGU6IEFycmF5PFN0YXRlPjtcclxuICAgIHByaXZhdGUgX2luZGV4OiBudW1iZXI7XHJcblxyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgdGhpcy5fc3RhdGUgPSBuZXcgQXJyYXk8U3RhdGU+KCk7XHJcbiAgICAgICAgdGhpcy5faW5kZXggPSAwO1xyXG4gICAgfVxyXG5cclxuICAgIHNldCBpbmRleChpbmRleDogbnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy5faW5kZXggPSBpbmRleDtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgaW5kZXgoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2luZGV4O1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogU2V0IHRoZSBzdGF0ZSBpbmRleCB0byB0aGUgbGFzdCBpbmRleFxyXG4gICAgICovXHJcbiAgICB1cGRhdGVJbmRleCgpIHtcclxuICAgICAgICB0aGlzLl9pbmRleCA9IHRoaXMuX3N0YXRlLmxlbmd0aCAtIDE7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBTZXQgYSBzaW5nbGUgc3R5bGUgcHJvcGVydHkgb24gdGhlIHN0YXRlIGFuZCBjaGFuZ2UgdGhlIHN0YXRlXHJcbiAgICAgKiBAcGFyYW0gbmFtZSBcclxuICAgICAqIEBwYXJhbSB2YWx1ZSBcclxuICAgICAqL1xyXG4gICAgc2V0U3R5bGUobmFtZTogc3RyaW5nLCB2YWx1ZTogc3RyaW5nKSB7XHJcbiAgICAgICAgbGV0IHN0YXRlID0gdGhpcy5sYXRlc3RTdGF0ZSgpO1xyXG4gICAgICAgIHN0YXRlW25hbWVdID0gdmFsdWU7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZShzdGF0ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiByZXR1cm4gdGhlIHN0YXRlIGF0IGluZGV4XHJcbiAgICAgKiBAcGFyYW0gaW5kZXggXHJcbiAgICAgKi9cclxuICAgIGdldFN0YXRlKGluZGV4OiBudW1iZXIpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fc3RhdGVbaW5kZXhdO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogcHVzaCBhIG5ldyBzdHlsZSBzdGF0ZSBpbnRvIHRoZSBzdGF0ZVxyXG4gICAgICogQHBhcmFtIHN0YXRlIFxyXG4gICAgICovXHJcbiAgICBzZXRTdGF0ZShzdGF0ZTogU3RhdGUpIHtcclxuICAgICAgICB0aGlzLl9zdGF0ZS5wdXNoKHN0YXRlKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFJldHVybnMgYSBjb3B5IG9mIHRoZSBsYXRlc3Qgc3RhdGVcclxuICAgICAqL1xyXG4gICAgbGF0ZXN0U3RhdGUoKTogU3RhdGUge1xyXG4gICAgICAgIHJldHVybiB7IC4uLnRoaXMuX3N0YXRlW3RoaXMuX3N0YXRlLmxlbmd0aCAtIDFdfTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFJldHVybnMgYSBjb3B5IG9mIHRoZSBhY3R1YWwgc3RhdGUgdGhhdCB0aGUgZWxlbWVudCBzaG91bGQgYmUgaW5cclxuICAgICAqL1xyXG4gICAgY3VycmVudFN0YXRlKCkge1xyXG4gICAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCB0aGlzLl9zdGF0ZVt0aGlzLl9pbmRleF0pOyAgIFxyXG4gICAgfVxyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3ZzdGF0ZS50cyIsImltcG9ydCB7IFZTdGF0ZSB9IGZyb20gJy4uL3ZzdGF0ZSc7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIElDb21wb25lbnQge1xyXG4gICAgaW5pdCgpOiB2b2lkO1xyXG4gICAgdXBkYXRlKCk6IHZvaWQ7XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBDb21wb25lbnQge1xyXG5cclxuICAgIHByb3RlY3RlZCBfZWxlbWVudDogSFRNTEVsZW1lbnQ7XHJcbiAgICBwcm90ZWN0ZWQgX3ZzdGF0ZTogVlN0YXRlO1xyXG4gICAgcHJvdGVjdGVkIF9hbmltYXRvcjtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihidWlsZGVyKSB7XHJcbiAgICAgICAgdGhpcy5fZWxlbWVudCA9IGJ1aWxkZXIuZWxlbWVudDtcclxuICAgICAgICB0aGlzLl92c3RhdGUgPSBidWlsZGVyLnN0YXRlO1xyXG4gICAgICAgIHRoaXMuX2FuaW1hdG9yID0gYnVpbGRlci5hbmltYXRvcjtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgc3RhdGUoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3ZzdGF0ZTtcclxuICAgIH1cclxuXHJcbiAgICBzZXRFbGVtZW50KGVsOiBIVE1MRWxlbWVudCkge1xyXG4gICAgICAgIHRoaXMuX2VsZW1lbnQgPSBlbDtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGUoKSB7XHJcbiAgICAgICAgbGV0IG5ld1N0YXRlID0gdGhpcy5fdnN0YXRlLmxhdGVzdFN0YXRlKCk7XHJcbiAgICAgICAgbGV0IG9sZFN0YXRlID0gdGhpcy5fdnN0YXRlLmN1cnJlbnRTdGF0ZSgpO1xyXG4gICAgICAgIGlmKHRoaXMuX3ZzdGF0ZS5pbmRleCA9PT0gMClcclxuICAgICAgICAgICAgb2xkU3RhdGUgPSB7c3R5bGU6IHt9fTtcclxuICAgICAgICBmb3IgKGxldCBuYW1lIGluIG5ld1N0YXRlLnN0eWxlKSB7XHJcbiAgICAgICAgICAgIGlmIChuZXdTdGF0ZS5zdHlsZVtuYW1lXSA9PT0gb2xkU3RhdGUuc3R5bGVbbmFtZV0pXHJcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcclxuXHJcbiAgICAgICAgICAgIGxldCB2YWx1ZSA9IG5ld1N0YXRlLnN0eWxlW25hbWVdO1xyXG4gICAgICAgICAgICB0aGlzLl9lbGVtZW50LnN0eWxlW25hbWVdID0gdmFsdWU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAgdGhpcy5fdnN0YXRlLnVwZGF0ZUluZGV4KCk7XHJcbiAgICB9XHJcbiAgIFxyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbXBvbmVudHMvY29tcG9uZW50LnRzIiwiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBTdGF0ZSB9IGZyb20gJy4uL3ZzdGF0ZSc7XHJcblxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBEcmF3ZXJPcHRpb25zIHtcclxuICAgIGRvY2s6IHN0cmluZztcclxuICAgIG1heFNpemU6IG51bWJlcjtcclxuICAgIG1pblNpemU6IG51bWJlcjtcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIERyYXdlciB7XHJcblxyXG4gICAgcHJpdmF0ZSBfZG9ja2VkVG86IHN0cmluZztcclxuICAgIHByaXZhdGUgX21heFNpemU6IG51bWJlcjtcclxuICAgIHByaXZhdGUgX21pblNpemU6IG51bWJlcjtcclxuICAgIHByaXZhdGUgX2NvbXBvbmVudDogQ29tcG9uZW50XHJcblxyXG4gICAgY29uc3RydWN0b3IoY29tcG9uZW50OiBDb21wb25lbnQsIG9wdGlvbnM6IERyYXdlck9wdGlvbnMgPSB7ZG9jayA6ICdsZWZ0JywgbWF4U2l6ZTogMjgwLCBtaW5TaXplOiAwfSkge1xyXG4gICAgICAgIHRoaXMuX2RvY2tlZFRvID0gb3B0aW9ucy5kb2NrIHx8ICdsZWZ0JztcclxuICAgICAgICB0aGlzLl9taW5TaXplID0gb3B0aW9ucy5taW5TaXplIHx8IDA7XHJcbiAgICAgICAgdGhpcy5fbWF4U2l6ZSA9IG9wdGlvbnMubWF4U2l6ZSB8fCAyODA7XHJcbiAgICAgICAgdGhpcy5fY29tcG9uZW50ID0gY29tcG9uZW50O1xyXG4gICAgICAgIGxldCBzdGF0ZSA9IHRoaXMuaW5pdCgpO1xyXG4gICAgICAgIHRoaXMuX2NvbXBvbmVudC5zdGF0ZS5zZXRTdGF0ZShzdGF0ZSk7XHJcbiAgICAgICAgdGhpcy51cGRhdGUoKTtcclxuICAgIH1cclxuXHJcbiAgICBpbml0KCk6IFN0YXRlICB7XHJcbiAgICAgICAgbGV0IHN0YXRlID0gbmV3IFN0YXRlKCk7XHJcbiAgICAgICAgc3RhdGUuc3R5bGUgPSB7fTtcclxuICAgICAgICBzdGF0ZS5zdHlsZS5wb3NpdGlvbiA9ICdmaXhlZCc7XHJcbiAgICAgICAgc3RhdGUuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLmlzTGVmdCgpKSB7XHJcbiAgICAgICAgICAgIHN0YXRlLnN0eWxlLndpZHRoID0gYCR7dGhpcy5fbWF4U2l6ZX1weGA7XHJcbiAgICAgICAgICAgIHN0YXRlLnN0eWxlLmhlaWdodCA9ICcxMDAlJztcclxuICAgICAgICAgICAgc3RhdGUuc3R5bGUubGVmdCA9IGAtJHt0aGlzLl9tYXhTaXplfXB4YDtcclxuICAgICAgICAgICAgc3RhdGUuc3R5bGUudG9wID0gJzAnO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5pc1JpZ2h0KCkpIHtcclxuICAgICAgICAgICAgc3RhdGUuc3R5bGUud2lkdGggPSBgJHt0aGlzLl9tYXhTaXplfXB4YDtcclxuICAgICAgICAgICAgc3RhdGUuc3R5bGUuaGVpZ2h0ID0gJzEwMCUnO1xyXG4gICAgICAgICAgICBzdGF0ZS5zdHlsZS5yaWdodCA9IGAtJHt0aGlzLl9tYXhTaXplfXB4YDtcclxuICAgICAgICAgICAgc3RhdGUuc3R5bGUudG9wID0gJzAnO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5pc1RvcCgpKSB7XHJcbiAgICAgICAgICAgIHN0YXRlLnN0eWxlLndpZHRoID0gJzEwMCUnO1xyXG4gICAgICAgICAgICBzdGF0ZS5zdHlsZS5oZWlnaHQgPSBgJHt0aGlzLl9tYXhTaXplfXB4YDtcclxuICAgICAgICAgICAgc3RhdGUuc3R5bGUudG9wID0gYC0ke3RoaXMuX21heFNpemV9cHhgO1xyXG4gICAgICAgICAgICBzdGF0ZS5zdHlsZS5sZWZ0ID0gJzAnO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5pc0JvdHRvbSgpKSB7XHJcbiAgICAgICAgICAgIHN0YXRlLnN0eWxlLndpZHRoID0gJzEwMCUnO1xyXG4gICAgICAgICAgICBzdGF0ZS5zdHlsZS5oZWlnaHQgPSBgJHt0aGlzLl9tYXhTaXplfXB4YDtcclxuICAgICAgICAgICAgc3RhdGUuc3R5bGUuYm90dG9tID0gYC0ke3RoaXMuX21heFNpemV9cHhgO1xyXG4gICAgICAgICAgICBzdGF0ZS5zdHlsZS5sZWZ0ID0gJzAnO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gc3RhdGU7XHJcbiAgICB9XHJcblxyXG4gICAgaXNMZWZ0KCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9kb2NrZWRUbyA9PT0gJ2xlZnQnO1xyXG4gICAgfVxyXG5cclxuICAgIGlzUmlnaHQoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2RvY2tlZFRvID09PSAncmlnaHQnO1xyXG4gICAgfVxyXG5cclxuICAgIGlzVG9wKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9kb2NrZWRUbyA9PT0gJ3RvcCc7XHJcbiAgICB9XHJcblxyXG4gICAgaXNCb3R0b20oKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2RvY2tlZFRvID09PSAnYm90dG9tJztcclxuICAgIH1cclxuXHJcbiAgICBvcGVuKCkge1xyXG4gICAgICAgIGxldCBzdGF0ZSA9IHRoaXMuX2NvbXBvbmVudC5zdGF0ZS5jdXJyZW50U3RhdGUoKTtcclxuICAgICAgICBpZiAodGhpcy5pc0xlZnQoKSkge1xyXG4gICAgICAgICAgICBzdGF0ZS5zdHlsZS5sZWZ0ID0gJzAnO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5pc1JpZ2h0KCkpIHtcclxuICAgICAgICAgICAgc3RhdGUuc3R5bGUucmlnaHQgPSAnMCc7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLmlzVG9wKCkpIHtcclxuICAgICAgICAgICAgc3RhdGUuc3R5bGUudG9wID0gJzAnO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5pc0JvdHRvbSgpKSB7XHJcbiAgICAgICAgICAgIHN0YXRlLnN0eWxlLmJvdHRvbSA9ICcwJ1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLl9jb21wb25lbnQuc3RhdGUuc2V0U3RhdGUoc3RhdGUpO1xyXG4gICAgICAgIHRoaXMudXBkYXRlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgY2xvc2UoKSB7XHJcbiAgICAgICAgbGV0IHN0YXRlID0gdGhpcy5fY29tcG9uZW50LnN0YXRlLmN1cnJlbnRTdGF0ZSgpO1xyXG4gICAgICAgIGlmICh0aGlzLmlzTGVmdCgpKSB7XHJcbiAgICAgICAgICAgIHN0YXRlLnN0eWxlLmxlZnQgPSBgLSR7dGhpcy5fbWF4U2l6ZX1weGA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLmlzUmlnaHQoKSkge1xyXG4gICAgICAgICAgICBzdGF0ZS5zdHlsZS5yaWdodCA9IGAtJHt0aGlzLl9tYXhTaXplfXB4YDtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMuaXNUb3AoKSkge1xyXG4gICAgICAgICAgICBzdGF0ZS5zdHlsZS50b3AgPSBgLSR7dGhpcy5fbWF4U2l6ZX1weGA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLmlzQm90dG9tKCkpIHtcclxuICAgICAgICAgICAgc3RhdGUuc3R5bGUuYm90dG9tID0gYC0ke3RoaXMuX21heFNpemV9cHhgO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLl9jb21wb25lbnQuc3RhdGUuc2V0U3RhdGUoc3RhdGUpO1xyXG4gICAgICAgIHRoaXMudXBkYXRlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlKCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdbVXBkYXRpbmcuLi5dJyk7XHJcbiAgICAgICAgdGhpcy5fY29tcG9uZW50LnVwZGF0ZSgpO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBEcmF3ZXI7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbXBvbmVudHMvZHJhd2VyLnRzIiwiZXhwb3J0ICogZnJvbSAnLi92c3RhdGUnO1xyXG5leHBvcnQgKiBmcm9tICcuL2NvbXBvbmVudHMvY29tcG9uZW50JztcclxuZXhwb3J0ICogZnJvbSAnLi9jb21wb25lbnRzL2RyYXdlcic7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL291dGtpdC50cyJdLCJzb3VyY2VSb290IjoiIn0=
//# sourceMappingURL=outkit.js.map

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__dist_outkit__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__dist_outkit___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__dist_outkit__);


var ok = new __WEBPACK_IMPORTED_MODULE_0__dist_outkit__["ComponentFactory"]();

var el = {};
el.drawer = document.createElement('div');
el.drawer.id = 'drawer';
el.drawer.style.backgroundColor = '#ddd';

el.overlay = document.createElement('div');
el.overlay.id = 'overlay';

document.appendChild(el.drawer);
document.appendChild(el.overlay);

var comp = {};
comp.overlay = ok.overlay('#overlay');
comp.drawer = ok.drawer('#drawer', {overlay: comp.overlay});

/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map