/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports) {

	'use strict';

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var Item = function Item(options) {
	  _classCallCheck(this, Item);

	  this.options = Object.assign({}, options);
	};

	var LineItem = function (_Item) {
	  _inherits(LineItem, _Item);

	  function LineItem(options) {
	    _classCallCheck(this, LineItem);

	    var _this = _possibleConstructorReturn(this, (LineItem.__proto__ || Object.getPrototypeOf(LineItem)).call(this, options));

	    _this.options = Object.assign({
	      price: 0,
	      quantity: 1
	    }, _this.options);
	    return _this;
	  }

	  return LineItem;
	}(Item);

	var Transaction = function (_Item2) {
	  _inherits(Transaction, _Item2);

	  function Transaction(options) {
	    _classCallCheck(this, Transaction);

	    var _this2 = _possibleConstructorReturn(this, (Transaction.__proto__ || Object.getPrototypeOf(Transaction)).call(this, options));

	    _this2.items = [];

	    // Enable e-commerce tracking functionaliy
	    if (window.ga !== undefined) {
	      window.ga('require', 'ecommerce');
	    }
	    return _this2;
	  }

	  _createClass(Transaction, [{
	    key: 'addItem',
	    value: function addItem(options) {
	      this.items.push(new LineItem(options));
	      return this;
	    }
	  }, {
	    key: 'getTotalRevenue',
	    value: function getTotalRevenue() {
	      return this.items.reduce(function (previousValue, currentValue) {
	        return previousValue + currentValue.options.price * currentValue.options.quantity;
	      }, 0);
	    }
	  }, {
	    key: 'send',
	    value: function send() {
	      if (window.ga !== undefined) {
	        var revenue = this.getTotalRevenue();
	        window.ga('ecommerce:addTransaction', Object.assign({
	          revenue: revenue
	        }, this.options));

	        for (var index = 0; index < this.items.length; index++) {
	          var data = Object.assign({
	            id: this.options.id
	          }, this.items[index].options);
	          window.ga('ecommerce:addItem', data);
	        }
	        window.ga('ecommerce:send');
	      }
	    }
	  }]);

	  return Transaction;
	}(Item);

	module.exports = Transaction;

/***/ }
/******/ ]);