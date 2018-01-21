(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("handlebars/runtime"), require("jQuery"));
	else if(typeof define === 'function' && define.amd)
		define(["handlebars.runtime", "jQuery"], factory);
	else if(typeof exports === 'object')
		exports["Gridoo"] = factory(require("handlebars/runtime"), require("jQuery"));
	else
		root["Gridoo"] = factory(root["Handlebars"], root["jQuery"]);
})(typeof self !== 'undefined' ? self : this, function(__WEBPACK_EXTERNAL_MODULE_0__, __WEBPACK_EXTERNAL_MODULE_5__) {
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
/******/ 	return __webpack_require__(__webpack_require__.s = 11);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/*!**********************************************************************************************************************************!*\
  !*** external {"root":"Handlebars","amd":"handlebars.runtime","commonjs2":"handlebars/runtime","commonjs":"handlebars/runtime"} ***!
  \**********************************************************************************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_0__;

/***/ }),
/* 1 */
/*!*************************************!*\
  !*** ./src/hbs/helpers/Disabled.ts ***!
  \*************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var disabled = function (bool) {
    return bool ? "disabled" : "";
};
exports.default = disabled;


/***/ }),
/* 2 */
/*!************************************!*\
  !*** ./src/js/pagination/Pager.ts ***!
  \************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Pager = /** @class */ (function () {
    function Pager() {
    }
    Object.defineProperty(Pager, "PaginationData", {
        get: function () {
            return Pager.paginationData;
        },
        enumerable: true,
        configurable: true
    });
    Pager.CalculatePaginationData = function (paginationInput) {
        var paginationData = {};
        paginationData.pageIndex = paginationInput.pageIndex;
        paginationData.pageSize = paginationInput.pageSize;
        paginationData.pageSizes = paginationInput.pageSizes;
        paginationData.totalCount = paginationInput.totalCount;
        paginationData.noOfPages = Math.ceil(paginationInput.totalCount / paginationInput.pageSize);
        var minNum = ((paginationInput.pageIndex - 1) * paginationInput.pageSize);
        var lowerLimitOffset = paginationInput.pageSize > paginationInput.totalCount ?
            paginationInput.totalCount :
            paginationInput.pageSize;
        paginationData.range = {
            min: minNum + 1,
            max: minNum + lowerLimitOffset,
        };
        paginationData.firstPageLinkDisabled = paginationData.noOfPages === 1 || paginationData.pageIndex === 1;
        paginationData.lastPageLinkDisabled = paginationData.noOfPages === 1
            || (paginationData.pageIndex === paginationData.noOfPages);
        paginationData.prevPageLinkDisabled = paginationData.pageIndex === 1
            || (paginationData.pageIndex - 1) <= 0;
        paginationData.nextPageLinkDisabled = paginationData.noOfPages === paginationData.pageIndex
            || (paginationData.pageIndex + 1) >= paginationData.noOfPages;
        Pager.paginationData = paginationData;
    };
    return Pager;
}());
exports.Pager = Pager;


/***/ }),
/* 3 */
/*!***********************************!*\
  !*** ./src/js/util/ColumnUtil.ts ***!
  \***********************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var CommonUtil = /** @class */ (function () {
    function CommonUtil() {
    }
    CommonUtil.GetColumnObject = function (columnId, columns) {
        if (columnId == null || columns == null) {
            return null;
        }
        var retCol;
        columns.forEach(function (col) {
            if (col.id === columnId) {
                retCol = col;
                return;
            }
        });
        return retCol;
    };
    return CommonUtil;
}());
exports.CommonUtil = CommonUtil;


/***/ }),
/* 4 */
/*!**************************************************!*\
  !*** ./src/js/virtualization/ScrollDirection.ts ***!
  \**************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var ScrollDirection;
(function (ScrollDirection) {
    ScrollDirection["Up"] = "Up";
    ScrollDirection["Down"] = "Down";
})(ScrollDirection = exports.ScrollDirection || (exports.ScrollDirection = {}));


/***/ }),
/* 5 */
/*!*************************!*\
  !*** external "jQuery" ***!
  \*************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_5__;

/***/ }),
/* 6 */
/*!**************************************!*\
  !*** ./src/hbs/grid-details-row.hbs ***!
  \**************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var Handlebars = __webpack_require__(/*! handlebars */ 0);
function __default(obj) { return obj && (obj.__esModule ? obj["default"] : obj); }
module.exports = (Handlebars["default"] || Handlebars).template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "                <tr>\r\n                    <td class=\"gui rv-parent\" valign=\"top\" data-filter-key=\""
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "\" data-filter-value=\""
    + alias4(((helper = (helper = helpers.actualValue || (depth0 != null ? depth0.actualValue : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"actualValue","hash":{},"data":data}) : helper)))
    + "\">\r\n                        <span>"
    + alias4(((helper = (helper = helpers.columnName || (depth0 != null ? depth0.columnName : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"columnName","hash":{},"data":data}) : helper)))
    + "</span>\r\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.filterable : depth0),{"name":"if","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "                    </td>\r\n                    <td>"
    + ((stack1 = ((helper = (helper = helpers.columnValue || (depth0 != null ? depth0.columnValue : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"columnValue","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "</td>\r\n                </tr>\r\n";
},"2":function(container,depth0,helpers,partials,data) {
    return "                        <span class=\"gui m-l-5 rv-child gui-caption\" >\r\n                            <i class=\"gui gui-icon gui-icon-add hover m-l-5 cursor-pointer addFilter\"></i>\r\n                            <i class=\"gui gui-icon gui-icon-minus hover m-l-5 cursor-pointer removeFilter\"></i>\r\n                        </span>\r\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {});

  return "<tr class=\"gui hidden detailsRow\">\r\n    <td colspan=\""
    + container.escapeExpression(((helper = (helper = helpers.length || (depth0 != null ? depth0.length : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(alias1,{"name":"length","hash":{},"data":data}) : helper)))
    + "\">\r\n        <table class=\"gui very compact selectable celled table detailsTable m-l-10 p-5\" style=\"width: auto;\" >\r\n            <tbody>\r\n"
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.mainRowColArray : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "            </tbody>\r\n        </table>\r\n    </td>\r\n</tr>";
},"useData":true});

/***/ }),
/* 7 */
/*!*********************************!*\
  !*** ./src/hbs/grid-footer.hbs ***!
  \*********************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var Handlebars = __webpack_require__(/*! handlebars */ 0);
function __default(obj) { return obj && (obj.__esModule ? obj["default"] : obj); }
module.exports = (Handlebars["default"] || Handlebars).template({"1":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, alias1=container.escapeExpression;

  return "        <option "
    + alias1(__default(__webpack_require__(/*! ./src/hbs/helpers/Selected.ts */ 26)).call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = (depths[1] != null ? depths[1].paginationData : depths[1])) != null ? stack1.pageSize : stack1),depth0,{"name":"Selected","hash":{},"data":data}))
    + ">"
    + alias1(container.lambda(depth0, depth0))
    + "</option>\r\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.escapeExpression, alias3=container.lambda;

  return "<div class=\"footer-left\" style=\"display:absoulte;\">\r\n    <div class=\"gui mini compact icon buttons\">\r\n        <button class=\"gui mini compact icon button gui-caption col-settings-trigger\" aria-label=\"Manage Grid Column Settings\" title=\"Manage Grid Column Settings\"\r\n            tabindex=\"1\">\r\n            <i class=\"gui-icon gui-icon-repair\"></i>\r\n            Manage Columns\r\n        </button>\r\n        <button class=\"gui mini compact icon button gui-caption col-sorting-reset-trigger\" aria-label=\"Clear Sorting\" title=\"Clear Sorting\"\r\n            tabindex=\"2\">\r\n            <i class=\"gui-icon gui-icon-sort\"></i>\r\n            Clear Sorting\r\n        </button>\r\n    </div>\r\n    <div class=\"column-settings-container\">"
    + ((stack1 = container.invokePartial(__webpack_require__(/*! ./src/hbs/grid-manage-columns.hbs */ 8),depth0,{"name":"grid-manage-columns","data":data,"helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "</div>\r\n</div>\r\n<div data-role=\"pager\" class=\"footer-middle\">\r\n    <div class=\"margin-auto gui mini compact icon buttons\">\r\n        <button class=\"gui mini compact icon button firstLink\" aria-hidden=\"true\" "
    + alias2(__default(__webpack_require__(/*! ./src/hbs/helpers/Disabled.ts */ 1)).call(alias1,((stack1 = (depth0 != null ? depth0.paginationData : depth0)) != null ? stack1.firstPageLinkDisabled : stack1),{"name":"Disabled","hash":{},"data":data}))
    + "\r\n            aria-label=\"Go to the first page\" title=\"Go to the first page\" data-page=\"1\" tabindex=\"-1\">\r\n            <i class=\"gui-icon gui-icon-fast-backward\"></i>\r\n        </button>\r\n        <button class=\"gui mini compact icon button prevLink\" aria-hidden=\"true\" "
    + alias2(__default(__webpack_require__(/*! ./src/hbs/helpers/Disabled.ts */ 1)).call(alias1,((stack1 = (depth0 != null ? depth0.paginationData : depth0)) != null ? stack1.prevPageLinkDisabled : stack1),{"name":"Disabled","hash":{},"data":data}))
    + "\r\n            aria-label=\"Go to the previous page\" title=\"Go to the previous page\" data-page=\""
    + alias2(__default(__webpack_require__(/*! ./src/hbs/helpers/math.ts */ 9)).call(alias1,((stack1 = (depth0 != null ? depth0.paginationData : depth0)) != null ? stack1.pageIndex : stack1),"-",1,{"name":"math","hash":{},"data":data}))
    + "\"\r\n            tabindex=\"-1\">\r\n            <i class=\"gui-icon gui-icon-previous\"></i>\r\n        </button>\r\n    </div>\r\n    <div class=\"gui m-r-10 m-l-10 pager-input-container gui input\">\r\n        <span class=\"margin-auto\"> Page </span>\r\n        <input class=\"gui m-r-10 m-l-10 pager-input\" aria-label=\"1\" value=\""
    + alias2(alias3(((stack1 = (depth0 != null ? depth0.paginationData : depth0)) != null ? stack1.pageIndex : stack1), depth0))
    + "\" type=\"text\" placeholder=\"Page Number ...\">\r\n        <span class=\"margin-auto no-of-pages-scan\" data-number-of-pages=\""
    + alias2(alias3(((stack1 = (depth0 != null ? depth0.paginationData : depth0)) != null ? stack1.noOfPages : stack1), depth0))
    + "\"> of "
    + alias2(alias3(((stack1 = (depth0 != null ? depth0.paginationData : depth0)) != null ? stack1.noOfPages : stack1), depth0))
    + "</span>\r\n    </div>\r\n    <div class=\"margin-auto gui mini compact icon buttons\">\r\n        <button class=\"gui mini compact icon button nextLink\" aria-hidden=\"true\" "
    + alias2(__default(__webpack_require__(/*! ./src/hbs/helpers/Disabled.ts */ 1)).call(alias1,((stack1 = (depth0 != null ? depth0.paginationData : depth0)) != null ? stack1.nextPageLinkDisabled : stack1),{"name":"Disabled","hash":{},"data":data}))
    + "\r\n            aria-label=\"Go to the next page\" title=\"Go to the next page\" class=\"gui button\" data-page=\""
    + alias2(__default(__webpack_require__(/*! ./src/hbs/helpers/math.ts */ 9)).call(alias1,((stack1 = (depth0 != null ? depth0.paginationData : depth0)) != null ? stack1.pageIndex : stack1),"+",1,{"name":"math","hash":{},"data":data}))
    + "\"\r\n            tabindex=\"-1\">\r\n            <i class=\"gui-icon gui-icon-next\"></i>\r\n        </button>\r\n        <button class=\"gui mini compact icon button lastLink\" aria-hidden=\"true\" "
    + alias2(__default(__webpack_require__(/*! ./src/hbs/helpers/Disabled.ts */ 1)).call(alias1,((stack1 = (depth0 != null ? depth0.paginationData : depth0)) != null ? stack1.lastPageLinkDisabled : stack1),{"name":"Disabled","hash":{},"data":data}))
    + "\r\n            aria-label=\"Go to the last page\" title=\"Go to the last page\" data-page=\""
    + alias2(alias3(((stack1 = (depth0 != null ? depth0.paginationData : depth0)) != null ? stack1.noOFpages : stack1), depth0))
    + "\" tabindex=\"-1\">\r\n            <i class=\"gui-icon gui-icon-fast-forward\"></i>\r\n        </button>\r\n    </div>\r\n</div>\r\n<div class=\"footer-right\">\r\n    <select class=\"gui m-r-10 m-l-10 pageSizeSelector\">\r\n"
    + ((stack1 = helpers.each.call(alias1,((stack1 = (depth0 != null ? depth0.paginationData : depth0)) != null ? stack1.pageSizes : stack1),{"name":"each","hash":{},"fn":container.program(1, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "    </select>\r\n    <span class=\"margin-auto\">"
    + alias2(alias3(((stack1 = ((stack1 = (depth0 != null ? depth0.paginationData : depth0)) != null ? stack1.range : stack1)) != null ? stack1.min : stack1), depth0))
    + " - "
    + alias2(alias3(((stack1 = ((stack1 = (depth0 != null ? depth0.paginationData : depth0)) != null ? stack1.range : stack1)) != null ? stack1.max : stack1), depth0))
    + " of "
    + alias2(alias3(((stack1 = (depth0 != null ? depth0.paginationData : depth0)) != null ? stack1.totalCount : stack1), depth0))
    + " items</span>\r\n</div>";
},"usePartial":true,"useData":true,"useDepths":true});

/***/ }),
/* 8 */
/*!*****************************************!*\
  !*** ./src/hbs/grid-manage-columns.hbs ***!
  \*****************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var Handlebars = __webpack_require__(/*! handlebars */ 0);
function __default(obj) { return obj && (obj.__esModule ? obj["default"] : obj); }
module.exports = (Handlebars["default"] || Handlebars).template({"1":function(container,depth0,helpers,partials,data) {
    var alias1=container.lambda, alias2=container.escapeExpression;

  return "                <tr data-header-id=\""
    + alias2(alias1((depth0 != null ? depth0.name : depth0), depth0))
    + "\">\r\n                    <td>\r\n                        <input type=\"checkbox\" class=\"col-settings-hidden-checkbox\" value=\""
    + alias2(alias1((depth0 != null ? depth0.id : depth0), depth0))
    + "\" "
    + alias2(__default(__webpack_require__(/*! ./src/hbs/helpers/Checked.ts */ 27)).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.hidden : depth0),{"name":"Checked","hash":{},"data":data}))
    + ">\r\n                    </td>\r\n                    <td>\r\n                        <label>"
    + alias2(alias1((depth0 != null ? depth0.name : depth0), depth0))
    + "</label>\r\n                    </td>\r\n                </tr>\r\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<div class=\"gui grey card\" style=\"height: 100%;width: auto;padding: 0.8em;overflow:hidden;\">\r\n    <div class=\"col-settings-header\" style=\"width: 100%\">\r\n        <div class=\"gui mini fluid icon input\">\r\n            <input class=\"col-settings-filter\" type=\"text\" placeholder=\"Search filter...\">\r\n            <i class=\"search icon\"></i>\r\n        </div>\r\n        <div class=\"gui buttons\">\r\n            <button class=\"gui basic button show-all-column\">Show All</button>\r\n            <button class=\"gui basic button hide-all-column\">Hide All</button>\r\n        </div>\r\n    </div>\r\n    <div class=\"col-settings-table\" style=\"overflow:auto;padding:0.5em;\">\r\n        <table class=\"gui small very border-less compact table\">\r\n            <tbody>\r\n"
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.columns : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "            </tbody>\r\n        </table>\r\n    </div>\r\n</div>";
},"useData":true});

/***/ }),
/* 9 */
/*!*********************************!*\
  !*** ./src/hbs/helpers/math.ts ***!
  \*********************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var math = function (lvalue, operator, rvalue, options) {
    return {
        "+": lvalue + rvalue,
        "-": lvalue - rvalue,
        "*": lvalue * rvalue,
        "/": lvalue / rvalue,
        "%": lvalue % rvalue,
    }[operator];
};
exports.default = math;


/***/ }),
/* 10 */
/*!***********************************!*\
  !*** ./src/hbs/grid-main-row.hbs ***!
  \***********************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var Handlebars = __webpack_require__(/*! handlebars */ 0);
function __default(obj) { return obj && (obj.__esModule ? obj["default"] : obj); }
module.exports = (Handlebars["default"] || Handlebars).template({"1":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<tr class=\"mainRow\">\r\n    <td class=\"expansionArrows\" style=\"display:flex;justify-content:center;\">\r\n        <i class=\"gui gui-icon gui-icon-chevron-down expandDetailsRowIcon cursor-pointer\" aria-hidden=\"true\"></i>\r\n        <i class=\"gui gui-icon gui-icon-chevron-up CollapseDetailsRowIcon cursor-pointer hidden\" aria-hidden=\"true\"></i>\r\n    </td>\r\n    <td>\r\n        <input type=\"checkbox\">\r\n    </td>\r\n"
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.mainRowColArray : depth0),{"name":"each","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</tr>\r\n"
    + ((stack1 = container.invokePartial(__webpack_require__(/*! ./src/hbs/grid-details-row.hbs */ 6),depth0,{"name":"grid-details-row","data":data,"helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + " ";
},"2":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "    <td>"
    + ((stack1 = container.lambda((depth0 != null ? depth0.columnValue : depth0), depth0)) != null ? stack1 : "")
    + "</td>\r\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers.each.call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.mainRowArray : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"usePartial":true,"useData":true});

/***/ }),
/* 11 */
/*!*****************************!*\
  !*** ./src/js/main/Grid.ts ***!
  \*****************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var jQuery = __webpack_require__(/*! jquery */ 5);
var ConfigStore_1 = __webpack_require__(/*! ../config/ConfigStore */ 12);
var ColSettingsHandler_1 = __webpack_require__(/*! ../eventHandlers/ColSettingsHandler */ 13);
var Pager_1 = __webpack_require__(/*! ../pagination/Pager */ 2);
var DetailsRowHandler_1 = __webpack_require__(/*! ./../eventHandlers/DetailsRowHandler */ 14);
var FilterClickHandler_1 = __webpack_require__(/*! ./../eventHandlers/FilterClickHandler */ 15);
var HandlerNames_1 = __webpack_require__(/*! ./../eventHandlers/HandlerNames */ 17);
var HeaderClickHandler_1 = __webpack_require__(/*! ./../eventHandlers/HeaderClickHandler */ 18);
var PageSearchClickHandler_1 = __webpack_require__(/*! ./../eventHandlers/PageSearchClickHandler */ 20);
var ScrollHandler_1 = __webpack_require__(/*! ./../eventHandlers/ScrollHandler */ 21);
var ToggleColumnHandler_1 = __webpack_require__(/*! ./../eventHandlers/ToggleColumnHandler */ 24);
var GridTemplateService_1 = __webpack_require__(/*! ./../services/GridTemplateService */ 25);
var Grid = /** @class */ (function () {
    function Grid(options) {
        var _this = this;
        this.bindData = function (data, paginationInput) {
            var firstIndex = 0;
            var lastIndex = _this.configStore.Options.chunkSize + _this.getInitialRowCount();
            lastIndex = lastIndex > data.length ? data.length - 1 : lastIndex;
            Pager_1.Pager.CalculatePaginationData(paginationInput);
            var gridContent = _this.gridTemplateService.GetFirstTemplate(data, firstIndex, lastIndex);
            _this.configStore.Options.containerElement.innerHTML = gridContent;
            // Have to bind Scroll Handler After DOM has been created
            var scrollHandler = new ScrollHandler_1.ScrollHandler(_this.configStore, _this.gridTemplateService);
            scrollHandler.RegisterDomHandler();
            _this.handleChain.push({
                handler: scrollHandler,
                name: HandlerNames_1.HandlerNames.Scroll,
            });
        };
        this.getInitialRowCount = function () {
            return 25;
        };
        this.InitHandlers = function () {
            var parentElement = jQuery(_this.configStore.Options.containerElement);
            _this.handleChain = [];
            _this.handleChain.push({
                handler: new DetailsRowHandler_1.DetailsRowHandler(parentElement),
                name: HandlerNames_1.HandlerNames.DetailsRow,
            });
            _this.handleChain.push({
                handler: new FilterClickHandler_1.FilterClickHandler(_this.configStore, parentElement),
                name: HandlerNames_1.HandlerNames.FilterAction,
            });
            _this.handleChain.push({
                handler: new HeaderClickHandler_1.HeaderClickHandler(_this.configStore, parentElement),
                name: HandlerNames_1.HandlerNames.HeaderClick,
            });
            _this.handleChain.push({
                handler: new PageSearchClickHandler_1.PageSearchHandler(_this.configStore, parentElement),
                name: HandlerNames_1.HandlerNames.PageSearch,
            });
            var toggleHandler = new ToggleColumnHandler_1.ToggleColumnHandler(_this.configStore, parentElement);
            _this.handleChain.push({
                handler: new ColSettingsHandler_1.ColSettingsHandler(parentElement, toggleHandler),
                name: HandlerNames_1.HandlerNames.ColSettings,
            });
            _this.handleChain.forEach(function (value) {
                value.handler.RegisterDomHandler();
            });
            jQuery(window).resize(function () {
                _this.handleChain.forEach(function (value) {
                    value.handler.onResize();
                });
            });
            jQuery(document).click(function (event) {
                _this.handleChain.forEach(function (value) {
                    value.handler.onDocumentClick(event);
                });
                event.stopPropagation();
            });
        };
        this.configStore = new ConfigStore_1.ConfigStore(options);
        this.gridTemplateService = new GridTemplateService_1.GridTemplateService(this.configStore);
        this.InitHandlers();
    }
    return Grid;
}());
exports.Grid = Grid;


/***/ }),
/* 12 */
/*!**************************************!*\
  !*** ./src/js/config/ConfigStore.ts ***!
  \**************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var ConfigStore = /** @class */ (function () {
    function ConfigStore(options) {
        var _this = this;
        this.defaultGridOptions = {
            chunkSize: 5,
            columns: [],
            containerElement: null,
            hybridFunction: function (column, row) {
                return "true";
            },
            onClickFilter: function (column, value, actionType) {
                // No code
            },
            onClickHeader: function (column, direction) {
                // No code
            },
            onPageSearch: function (pageSize, pageIndex) {
                // No code
            },
        };
        this.SetHiddenOnConfig = function (bool, columnId) {
            _this.Options.columns.forEach(function (col) {
                if (columnId === null) {
                    col.hidden = bool;
                }
                else {
                    if (col.id === columnId) {
                        col.hidden = bool;
                        return false;
                    }
                }
            });
        };
        this.extendOptions = function (inputOptions) {
            return _this.options = jQuery.extend({}, _this.defaultGridOptions, inputOptions);
        };
        this.extendOptions(options);
        if (options.containerElement === null) {
            throw new Error("Please Provide a valid container Element object");
        }
    }
    Object.defineProperty(ConfigStore.prototype, "Options", {
        get: function () {
            return this.options;
        },
        set: function (options) {
            this.options = options;
        },
        enumerable: true,
        configurable: true
    });
    return ConfigStore;
}());
exports.ConfigStore = ConfigStore;


/***/ }),
/* 13 */
/*!****************************************************!*\
  !*** ./src/js/eventHandlers/ColSettingsHandler.ts ***!
  \****************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var ColSettingsHandler = /** @class */ (function () {
    function ColSettingsHandler(element, toggleColumnHandler) {
        this.parentElement = element;
        this.toggleColumnHandler = toggleColumnHandler;
    }
    ColSettingsHandler.prototype.onResize = function () {
        var settngsPopup = this.parentElement.find(".column-settings-container");
        var tbodyHeight = this.parentElement.find(".table-body").innerHeight();
        settngsPopup.innerHeight(tbodyHeight - 10);
        settngsPopup.find(".col-settings-table").innerHeight(settngsPopup.innerHeight() -
            settngsPopup.find(".col-settings-header").innerHeight());
    };
    ColSettingsHandler.prototype.onDocumentClick = function (event) {
        var targetElement = jQuery(event.target);
        if (targetElement.is(".col-settings-trigger")) {
            return;
        }
        if (!targetElement.parents().is(".column-settings-container")) {
            jQuery(".column-settings-container").hide();
        }
    };
    ColSettingsHandler.prototype.RegisterDomHandler = function () {
        var _this = this;
        this.parentElement.on("click", ".table-footer .footer-left .col-settings-trigger", function (event) {
            var element = jQuery(event.target);
            var settngsPopup = element.parents(".footer-left").children().last();
            _this.onResize();
            settngsPopup.toggle();
            event.stopPropagation();
        });
        this.parentElement.on("keyup", ".column-settings-container .col-settings-header .col-settings-filter", function (event) {
            var element = jQuery(event.target);
            var val = element.val().toString().toLowerCase();
            console.log(val);
            _this.parentElement.find(".col-settings-table table tbody tr").each(function (i, e) {
                jQuery(e).show();
                if (jQuery(e).attr("data-header-id").toLowerCase().indexOf(val) === -1) {
                    jQuery(e).hide();
                }
            });
            event.stopPropagation();
        });
        this.parentElement.on("click", ".column-settings-container .show-all-column", function (event) {
            _this.parentElement.find(".column-settings-container .col-settings-hidden-checkbox")
                .each(function (index, element) {
                jQuery(element).prop("checked", true);
            });
            _this.toggleColumnHandler.showAllColumns();
            event.stopPropagation();
        });
        this.parentElement.on("click", ".column-settings-container .hide-all-column", function (event) {
            _this.parentElement.find(".column-settings-container .col-settings-hidden-checkbox")
                .each(function (index, element) {
                jQuery(element).prop("checked", false);
            });
            _this.toggleColumnHandler.hideAllColumns();
            event.stopPropagation();
        });
        this.parentElement.on("click", ".column-settings-container .col-settings-hidden-checkbox", function (event) {
            if (event.originalEvent !== undefined) {
                var checkbox = jQuery(event.target);
                var id = checkbox.val().toString();
                if (checkbox.is(":checked")) {
                    _this.toggleColumnHandler.showColumn(id);
                }
                else {
                    _this.toggleColumnHandler.hideColumn(id);
                }
            }
            event.stopPropagation();
        });
    };
    return ColSettingsHandler;
}());
exports.ColSettingsHandler = ColSettingsHandler;


/***/ }),
/* 14 */
/*!***************************************************!*\
  !*** ./src/js/eventHandlers/DetailsRowHandler.ts ***!
  \***************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var DetailsRowHandler = /** @class */ (function () {
    function DetailsRowHandler(element) {
        var _this = this;
        this.RegisterDomHandler = function () {
            _this.parentElement.on("click", ".table-body .expansionArrows i", function (event) {
                var arrow = jQuery(event.target);
                var detailsRow = arrow.closest("tr").next();
                var currentIcon = arrow.hide();
                var otherIcon = arrow.siblings("i").show();
                if (arrow.hasClass("expandDetailsRowIcon")) {
                    detailsRow.show();
                }
                else {
                    detailsRow.hide();
                }
                event.stopPropagation();
            });
        };
        this.parentElement = element;
    }
    DetailsRowHandler.prototype.onResize = function () {
        // Nothing to Do.
    };
    DetailsRowHandler.prototype.onDocumentClick = function (event) {
        // Nothing to Do.
    };
    return DetailsRowHandler;
}());
exports.DetailsRowHandler = DetailsRowHandler;


/***/ }),
/* 15 */
/*!****************************************************!*\
  !*** ./src/js/eventHandlers/FilterClickHandler.ts ***!
  \****************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var ColumnUtil_1 = __webpack_require__(/*! ../util/ColumnUtil */ 3);
var FilterActionType_1 = __webpack_require__(/*! ./../models/FilterActionType */ 16);
var FilterClickHandler = /** @class */ (function () {
    function FilterClickHandler(configStore, element) {
        var _this = this;
        this.RegisterDomHandler = function () {
            _this.parentElement.on("click", ".table-body .detailsRow .detailsTable td i", function (event) {
                var element = jQuery(event.target);
                var parentTd = element.parents("td");
                var key = parentTd.attr("data-filter-key");
                var value = parentTd.attr("data-filter-value");
                var col = ColumnUtil_1.CommonUtil.GetColumnObject(key, _this.configStore.Options.columns);
                if (col === undefined || col === null || !col.filterable) {
                    return;
                }
                var filterAction = FilterActionType_1.FilterActionType.Add;
                if (element.hasClass("removeFilter")) {
                    filterAction = FilterActionType_1.FilterActionType.Minus;
                }
                _this.configStore.Options.onClickFilter(key, value, filterAction);
                event.stopPropagation();
            });
        };
        this.configStore = configStore;
        this.parentElement = element;
    }
    FilterClickHandler.prototype.onResize = function () {
        // Nothing to Do.
    };
    FilterClickHandler.prototype.onDocumentClick = function (event) {
        // Nothing to Do.
    };
    return FilterClickHandler;
}());
exports.FilterClickHandler = FilterClickHandler;


/***/ }),
/* 16 */
/*!*******************************************!*\
  !*** ./src/js/models/FilterActionType.ts ***!
  \*******************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var FilterActionType;
(function (FilterActionType) {
    FilterActionType["Add"] = "Add";
    FilterActionType["Minus"] = "Minus";
})(FilterActionType = exports.FilterActionType || (exports.FilterActionType = {}));


/***/ }),
/* 17 */
/*!**********************************************!*\
  !*** ./src/js/eventHandlers/HandlerNames.ts ***!
  \**********************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var HandlerNames;
(function (HandlerNames) {
    HandlerNames[HandlerNames["FilterAction"] = 0] = "FilterAction";
    HandlerNames[HandlerNames["HeaderClick"] = 1] = "HeaderClick";
    HandlerNames[HandlerNames["Scroll"] = 2] = "Scroll";
    HandlerNames[HandlerNames["PageSearch"] = 3] = "PageSearch";
    HandlerNames[HandlerNames["DetailsRow"] = 4] = "DetailsRow";
    HandlerNames[HandlerNames["ToggleColumn"] = 5] = "ToggleColumn";
    HandlerNames[HandlerNames["ColSettings"] = 6] = "ColSettings";
})(HandlerNames = exports.HandlerNames || (exports.HandlerNames = {}));


/***/ }),
/* 18 */
/*!****************************************************!*\
  !*** ./src/js/eventHandlers/HeaderClickHandler.ts ***!
  \****************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var ColumnUtil_1 = __webpack_require__(/*! ../util/ColumnUtil */ 3);
var OrderDirection_1 = __webpack_require__(/*! ./../models/OrderDirection */ 19);
var HeaderClickHandler = /** @class */ (function () {
    function HeaderClickHandler(configStore, element) {
        var _this = this;
        this.RegisterDomHandler = function () {
            // Registering JQuery Event Handler if Header is Clicked.
            _this.parentElement.on("click", ".table-header th", function (event) {
                var element = jQuery(event.target).closest("th");
                var headerId = element.attr("data-header-id");
                var col = ColumnUtil_1.CommonUtil.GetColumnObject(headerId, _this.configStore.Options.columns);
                if (col === undefined || col === null || !col.sortable) {
                    return;
                }
                var arrowIcons = element.find("i");
                var upArrowIcon = arrowIcons.first();
                var downArrowIcon = arrowIcons.last();
                var direction;
                if (arrowIcons.is(":visible")) {
                    if (upArrowIcon.is(":visible")) {
                        direction = OrderDirection_1.OrderDirection.Desc;
                        upArrowIcon.hide();
                        downArrowIcon.show();
                    }
                    else {
                        direction = OrderDirection_1.OrderDirection.Asc;
                        downArrowIcon.hide();
                        upArrowIcon.show();
                    }
                }
                else {
                    direction = OrderDirection_1.OrderDirection.Asc;
                    upArrowIcon.show();
                }
                _this.configStore.Options.onClickHeader(headerId, direction);
                event.stopPropagation();
            });
        };
        this.configStore = configStore;
        this.parentElement = element;
    }
    HeaderClickHandler.prototype.onResize = function () {
        // Nothing to Do.
    };
    HeaderClickHandler.prototype.onDocumentClick = function (event) {
        // Nothing to Do.
    };
    return HeaderClickHandler;
}());
exports.HeaderClickHandler = HeaderClickHandler;


/***/ }),
/* 19 */
/*!*****************************************!*\
  !*** ./src/js/models/OrderDirection.ts ***!
  \*****************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var OrderDirection;
(function (OrderDirection) {
    OrderDirection["Asc"] = "Asc";
    OrderDirection["Desc"] = "Desc";
})(OrderDirection = exports.OrderDirection || (exports.OrderDirection = {}));


/***/ }),
/* 20 */
/*!********************************************************!*\
  !*** ./src/js/eventHandlers/PageSearchClickHandler.ts ***!
  \********************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var jQuery = __webpack_require__(/*! jquery */ 5);
var Pager_1 = __webpack_require__(/*! ../pagination/Pager */ 2);
var PageSearchHandler = /** @class */ (function () {
    function PageSearchHandler(configStore, element) {
        var _this = this;
        this.RegisterDomHandler = function () {
            _this.parentElement.on("click", ".table-footer .firstLink", function (event) {
                _this.configStore.options.onPageSearch(Pager_1.Pager.PaginationData.pageSize, 1);
                event.stopPropagation();
            });
            _this.parentElement.on("click", ".table-footer .nextLink", function (event) {
                _this.configStore.options.onPageSearch(Pager_1.Pager.PaginationData.pageSize, Pager_1.Pager.PaginationData.pageIndex + 1);
                event.stopPropagation();
            });
            _this.parentElement.on("click", ".table-footer .prevLink", function (event) {
                _this.configStore.options.onPageSearch(Pager_1.Pager.PaginationData.pageSize, Pager_1.Pager.PaginationData.pageIndex - 1);
                event.stopPropagation();
            });
            _this.parentElement.on("click", ".table-footer .lastLink", function (event) {
                _this.configStore.options.onPageSearch(Pager_1.Pager.PaginationData.pageSize, Pager_1.Pager.PaginationData.noOfPages);
                event.stopPropagation();
            });
            _this.parentElement.on("change", ".table-footer .pageSizeSelector", function (event) {
                var val = +jQuery(event.target).val().toString();
                _this.configStore.options.onPageSearch(val, Pager_1.Pager.PaginationData.pageIndex);
                event.stopPropagation();
            });
            _this.parentElement.on("keypress", ".table-footer .pager-input", function (event) {
                var ip = jQuery(event.target);
                var pageData = Pager_1.Pager.PaginationData;
                if (event.keyCode === 13) {
                    var val = +ip.val().toString();
                    if (isNaN(val) || val > pageData.noOfPages || val < 1) {
                        ip.val(pageData.pageIndex);
                    }
                    else {
                        _this.configStore.options.onPageSearch(pageData.pageSize, val);
                    }
                }
                event.stopPropagation();
            });
        };
        this.configStore = configStore;
        this.parentElement = element;
    }
    PageSearchHandler.prototype.onResize = function () {
        // throw new Error("Method not implemented.");
    };
    PageSearchHandler.prototype.onDocumentClick = function () {
        // throw new Error("Method not implemented.");
    };
    return PageSearchHandler;
}());
exports.PageSearchHandler = PageSearchHandler;


/***/ }),
/* 21 */
/*!***********************************************!*\
  !*** ./src/js/eventHandlers/ScrollHandler.ts ***!
  \***********************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var ScrollDirection_1 = __webpack_require__(/*! ./../virtualization/ScrollDirection */ 4);
var Virtualizer_1 = __webpack_require__(/*! ./../virtualization/Virtualizer */ 22);
var ScrollHandler = /** @class */ (function () {
    function ScrollHandler(configStore, gridTemplateService) {
        var _this = this;
        this.rendering = false;
        this.RegisterDomHandler = function () {
            // Registering JQuery Event Handler if Header is Clicked.
            _this.parentElement.find(".table-body").on("scroll", function (event) {
                var tBodyObj = _this.parentElement.find(".table-body");
                if (_this.leftOffset === undefined || _this.leftOffset === null) {
                    _this.leftOffset = _this.parentElement.find(".table-header").offset().left;
                }
                _this.parentElement.find(".table-header").offset({
                    left: _this.leftOffset + -1 * tBodyObj.scrollLeft(),
                    top: 0,
                });
                var actualTableHeight = tBodyObj.find(".mainTable").height();
                _this.Virtualizer.TableHeight = actualTableHeight;
                _this.Virtualizer.ScrollContainerHeight = tBodyObj.height();
                event.preventDefault();
                if (_this.rendering) {
                    event.stopPropagation();
                    return;
                }
                var scrollTop = tBodyObj.scrollTop();
                var indexCounter = _this.Virtualizer.GetIndexCounterForScroll(scrollTop);
                switch (indexCounter.direction) {
                    case ScrollDirection_1.ScrollDirection.Down:
                        if (indexCounter.renderingRequired) {
                            _this.rendering = true;
                            tBodyObj.find(".mainTable .mainTableBody").append(_this.gridTemplateService.GetRowsHtml(indexCounter.startIndex, indexCounter.endIndex));
                            tBodyObj.find(".mainTable .mainTableBody > tr")
                                .slice(0, _this.configStore.options.chunkSize * 2).remove();
                            _this.rendering = false;
                        }
                        break;
                    case ScrollDirection_1.ScrollDirection.Up:
                        if (indexCounter.renderingRequired) {
                            _this.rendering = true;
                            tBodyObj.find(".mainTable .mainTableBody").prepend(_this.gridTemplateService.GetRowsHtml(indexCounter.startIndex, indexCounter.endIndex));
                            tBodyObj.find(".mainTable .mainTableBody > tr")
                                .slice((_this.configStore.options.chunkSize * -2)).remove();
                            _this.rendering = false;
                        }
                        break;
                }
                event.stopPropagation();
            });
        };
        this.configStore = configStore;
        this.parentElement = jQuery(this.configStore.Options.containerElement);
        this.gridTemplateService = gridTemplateService;
    }
    ScrollHandler.prototype.onResize = function () {
        this.leftOffset = this.parentElement.find(".table-header").offset().left;
    };
    ScrollHandler.prototype.onDocumentClick = function (event) {
        // throw new Error("Method not implemented.");
    };
    Object.defineProperty(ScrollHandler.prototype, "Virtualizer", {
        get: function () {
            if (this.virtualizer === null || this.virtualizer === undefined) {
                return this.virtualizer = new Virtualizer_1.Virtualizer(this.configStore.options.chunkSize, 25, this.gridTemplateService.DataLength);
            }
            else {
                return this.virtualizer;
            }
        },
        enumerable: true,
        configurable: true
    });
    return ScrollHandler;
}());
exports.ScrollHandler = ScrollHandler;


/***/ }),
/* 22 */
/*!**********************************************!*\
  !*** ./src/js/virtualization/Virtualizer.ts ***!
  \**********************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var IndexCounter_1 = __webpack_require__(/*! ./IndexCounter */ 23);
var ScrollDirection_1 = __webpack_require__(/*! ./ScrollDirection */ 4);
var Virtualizer = /** @class */ (function () {
    function Virtualizer(chunkSize, initialRowCount, length) {
        var _this = this;
        this.GetIndexCounterForScroll = function (scrollTop) {
            var newCounter = IndexCounter_1.GetDefaultIndexCounter(_this.chunkSize, _this.initialRowCount);
            newCounter.direction = _this.GetScrollDirection(scrollTop);
            switch (newCounter.direction) {
                // Calculate Index Counters for Down Movement
                case ScrollDirection_1.ScrollDirection.Down:
                    if (_this.currentIndexCounter.lastIndex >= _this.length - 1) {
                        newCounter.endReached = true;
                    }
                    else {
                        newCounter.endReached = false;
                        var diff = (scrollTop + _this.ScrollContainerHeight) - (_this.TableHeight * 0.8);
                        if (diff > 0) {
                            newCounter.renderingRequired = true;
                            newCounter = _this.PopulateIndexCounterForDown(newCounter);
                        }
                    }
                    break;
                case ScrollDirection_1.ScrollDirection.Up:
                    // Calculate Index Counters for Up Movement
                    if (_this.currentIndexCounter.firstIndex <= 0) {
                        newCounter.endReached = true;
                    }
                    else {
                        newCounter.endReached = false;
                        var diff = scrollTop - (_this.TableHeight - _this.ScrollContainerHeight) * 0.1;
                        if (diff < 0) {
                            newCounter.renderingRequired = true;
                            newCounter = _this.PopulateIndexCounterForUp(newCounter);
                        }
                    }
                    break;
            }
            if (newCounter.renderingRequired) {
                _this.currentIndexCounter = newCounter;
            }
            _this.lastScrollPosition = scrollTop;
            // this.Print(newCounter, this.currentIndexCounter);
            return newCounter;
        };
        this.Print = function (newCounter, currentIndexCounter) {
            console.log(" ******************************************************************* ");
            console.log(" Scroll Position - " + _this.lastScrollPosition);
            console.log(" Length  - " + _this.length);
            console.log(" ------------  CURRENT ---------- ");
            Object.keys(currentIndexCounter).forEach(function (val, index) {
                console.log(val + " - " + currentIndexCounter[val]);
            });
            console.log(" ------------  NEW ---------- ");
            Object.keys(newCounter).forEach(function (val, index) {
                console.log(val + " - " + newCounter[val]);
            });
            console.log(" ******************************************************************* ");
        };
        this.PopulateIndexCounterForDown = function (counter) {
            counter.startIndex = _this.currentIndexCounter.lastIndex + 1;
            counter.endIndex = _this.currentIndexCounter.lastIndex + _this.chunkSize > _this.length - 1 ?
                _this.length - 1 :
                _this.currentIndexCounter.lastIndex + _this.chunkSize;
            counter.firstIndex = _this.currentIndexCounter.firstIndex + _this.chunkSize;
            counter.lastIndex = counter.endIndex;
            return counter;
        };
        this.PopulateIndexCounterForUp = function (counter) {
            counter.startIndex = _this.currentIndexCounter.firstIndex - _this.chunkSize < 0 ?
                0 :
                _this.currentIndexCounter.firstIndex - _this.chunkSize;
            counter.endIndex = _this.currentIndexCounter.firstIndex - 1;
            counter.firstIndex = counter.startIndex;
            counter.lastIndex = _this.currentIndexCounter.lastIndex - _this.chunkSize;
            return counter;
        };
        this.GetScrollDirection = function (scrollTop) {
            if (_this.lastScrollPosition < scrollTop) {
                return ScrollDirection_1.ScrollDirection.Down;
            }
            return ScrollDirection_1.ScrollDirection.Up;
        };
        this.lastScrollPosition = 0;
        this.length = length;
        this.chunkSize = chunkSize;
        this.initialRowCount = initialRowCount;
        this.currentIndexCounter = IndexCounter_1.GetDefaultIndexCounter(initialRowCount, chunkSize);
    }
    Object.defineProperty(Virtualizer.prototype, "ScrollContainerHeight", {
        get: function () {
            return this.scrollContainerHeight;
        },
        set: function (height) {
            this.scrollContainerHeight = height;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Virtualizer.prototype, "TableHeight", {
        get: function () {
            return this.tableHeight;
        },
        set: function (height) {
            this.tableHeight = height;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Virtualizer.prototype, "InitialRowCount", {
        get: function () {
            return this.initialRowCount;
        },
        set: function (rowCount) {
            this.initialRowCount = rowCount;
        },
        enumerable: true,
        configurable: true
    });
    return Virtualizer;
}());
exports.Virtualizer = Virtualizer;


/***/ }),
/* 23 */
/*!***********************************************!*\
  !*** ./src/js/virtualization/IndexCounter.ts ***!
  \***********************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var ScrollDirection_1 = __webpack_require__(/*! ./ScrollDirection */ 4);
exports.GetDefaultIndexCounter = function (rowCount, chunkSize) {
    return {
        startIndex: rowCount - 1,
        endIndex: rowCount + chunkSize - 1,
        firstIndex: 0,
        lastIndex: rowCount - 1,
        direction: ScrollDirection_1.ScrollDirection.Down,
        endReached: false,
        renderingRequired: false,
    };
};


/***/ }),
/* 24 */
/*!*****************************************************!*\
  !*** ./src/js/eventHandlers/ToggleColumnHandler.ts ***!
  \*****************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var ColumnUtil_1 = __webpack_require__(/*! ./../util/ColumnUtil */ 3);
var ShowHide;
(function (ShowHide) {
    ShowHide[ShowHide["Show"] = 0] = "Show";
    ShowHide[ShowHide["Hide"] = 1] = "Hide";
    ShowHide[ShowHide["ShowAll"] = 2] = "ShowAll";
    ShowHide[ShowHide["HideAll"] = 3] = "HideAll";
})(ShowHide || (ShowHide = {}));
var ToggleColumnHandler = /** @class */ (function () {
    function ToggleColumnHandler(configStore, element) {
        var _this = this;
        this.showAllColumns = function () {
            _this.SetColWidth(".table-header .headerColGroup col", ShowHide.ShowAll);
            _this.SetColWidth(".table-body .bodyColGroup col", ShowHide.ShowAll);
            _this.configStore.SetHiddenOnConfig(false);
        };
        this.showColumn = function (columnId) {
            _this.SetColWidth(".table-header .headerColGroup col", ShowHide.Show, columnId);
            _this.SetColWidth(".table-body .bodyColGroup col", ShowHide.Show, columnId);
            _this.configStore.SetHiddenOnConfig(false, columnId);
        };
        this.hideColumn = function (columnId) {
            _this.SetColWidth(".table-header .headerColGroup col", ShowHide.Hide, columnId);
            _this.SetColWidth(".table-body .bodyColGroup col", ShowHide.Hide, columnId);
            _this.configStore.SetHiddenOnConfig(true, columnId);
        };
        this.hideAllColumns = function () {
            _this.SetColWidth(".table-header .headerColGroup col", ShowHide.HideAll);
            _this.SetColWidth(".table-body .bodyColGroup col", ShowHide.HideAll);
            _this.configStore.SetHiddenOnConfig(true);
        };
        this.SetColWidth = function (selector, control, columnId) {
            _this.parentElement.find(selector).each(function (index, element) {
                var width = 0;
                var currentColElem = jQuery(element);
                var currentCol = currentColElem.attr("data-header-id");
                if (currentCol !== undefined) {
                    var col = void 0;
                    if ([ShowHide.Show, ShowHide.Hide].indexOf(control) > -1) {
                        if (currentCol === columnId) {
                            if (control === ShowHide.Show) {
                                col = ColumnUtil_1.CommonUtil.GetColumnObject(currentCol, _this.configStore.options.columns);
                                width = col.width;
                            }
                            currentColElem.width(width + "px");
                            return;
                        }
                    }
                    if ([ShowHide.ShowAll, ShowHide.HideAll].indexOf(control) > -1) {
                        if (control === ShowHide.ShowAll) {
                            col = ColumnUtil_1.CommonUtil.GetColumnObject(currentCol, _this.configStore.options.columns);
                            width = col.width;
                        }
                        currentColElem.width(width + "px");
                    }
                }
            });
        };
        this.configStore = configStore;
        this.parentElement = element;
    }
    return ToggleColumnHandler;
}());
exports.ToggleColumnHandler = ToggleColumnHandler;


/***/ }),
/* 25 */
/*!************************************************!*\
  !*** ./src/js/services/GridTemplateService.ts ***!
  \************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var GridDetailsRowTemplate = __webpack_require__(/*! ../../hbs/grid-details-row.hbs */ 6);
var GridFooter = __webpack_require__(/*! ../../hbs/grid-footer.hbs */ 7);
var GridMainRowTemplate = __webpack_require__(/*! ../../hbs/grid-main-row.hbs */ 10);
var ManageColumnTemplate = __webpack_require__(/*! ../../hbs/grid-manage-columns.hbs */ 8);
var GridTemplate = __webpack_require__(/*! ../../hbs/grid.hbs */ 28);
var Pager_1 = __webpack_require__(/*! ../pagination/Pager */ 2);
var GridTemplateService = /** @class */ (function () {
    function GridTemplateService(configStore) {
        var _this = this;
        this.GetFirstTemplate = function (data, firstIndex, lastIndex) {
            _this.data = data;
            var mainRowArray = _this.GetRowsHtml(firstIndex, lastIndex);
            return _this.templateFunctionForGrid({
                columns: _this.configStore.Options.columns,
                mainRowArray: mainRowArray,
                paginationData: Pager_1.Pager.PaginationData,
            });
        };
        this.GetRowsHtml = function (firstIndex, lastIndex) {
            var mainRowArray = [];
            var length = _this.configStore.Options.columns.length + 1;
            for (var i = firstIndex; i <= lastIndex; i++) {
                var row = _this.data[i];
                var mainRowColArray = [];
                for (var _i = 0, _a = _this.configStore.Options.columns; _i < _a.length; _i++) {
                    var col = _a[_i];
                    var columnValue = row[col.id];
                    if (col.renderHybrid) {
                        columnValue = _this.configStore.Options.hybridFunction(col, row);
                    }
                    mainRowColArray.push({
                        columnValue: columnValue,
                        hidden: col.hidden,
                        actualValue: row[col.id],
                        columnName: col.name,
                        id: col.id,
                        filterable: col.filterable,
                    });
                }
                mainRowArray.push({
                    mainRowColArray: mainRowColArray,
                    length: _this.configStore.Options.columns.length,
                });
            }
            return mainRowArray;
        };
        this.configStore = configStore;
        this.templateFunctionForGrid = GridTemplate;
        this.templateFunctionForMainRow = GridMainRowTemplate;
        this.templateFunctionForDetailsRow = GridDetailsRowTemplate;
        this.templateFunctionForFooter = GridFooter;
        this.templateFunctionForManageCol = ManageColumnTemplate;
    }
    Object.defineProperty(GridTemplateService.prototype, "DataLength", {
        get: function () {
            return this.data.length;
        },
        enumerable: true,
        configurable: true
    });
    return GridTemplateService;
}());
exports.GridTemplateService = GridTemplateService;


/***/ }),
/* 26 */
/*!*************************************!*\
  !*** ./src/hbs/helpers/Selected.ts ***!
  \*************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var selected = function (input, value) {
    return input === value ? "selected" : "";
};
exports.default = selected;


/***/ }),
/* 27 */
/*!************************************!*\
  !*** ./src/hbs/helpers/Checked.ts ***!
  \************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var checked = function (bool) {
    return bool ? "checked" : "";
};
exports.default = checked;


/***/ }),
/* 28 */
/*!**************************!*\
  !*** ./src/hbs/grid.hbs ***!
  \**************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var Handlebars = __webpack_require__(/*! handlebars */ 0);
function __default(obj) { return obj && (obj.__esModule ? obj["default"] : obj); }
module.exports = (Handlebars["default"] || Handlebars).template({"1":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "                    "
    + ((stack1 = __default(__webpack_require__(/*! ./src/hbs/helpers/Column.ts */ 29)).call(depth0 != null ? depth0 : (container.nullContext || {}),depth0,{"name":"Column","hash":{},"data":data})) != null ? stack1 : "")
    + "\n";
},"3":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.lambda, alias2=container.escapeExpression;

  return "                        <th id=\"header-"
    + alias2(alias1((depth0 != null ? depth0.id : depth0), depth0))
    + "\" data-header-id=\""
    + alias2(alias1((depth0 != null ? depth0.id : depth0), depth0))
    + "\">\n"
    + ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.sortable : depth0),{"name":"if","hash":{},"fn":container.program(4, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "                            <span class=\"gui sub header\">"
    + alias2(alias1((depth0 != null ? depth0.name : depth0), depth0))
    + "</span>\n                        </th>\n";
},"4":function(container,depth0,helpers,partials,data) {
    return "                                <i class=\"gui gui-icon gui-icon-arrow-up hidden\" aria-hidden=\"true\" ></i>                        \n                                <i class=\"gui gui-icon gui-icon-arrow-down hidden\" aria-hidden=\"true\" ></i>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {});

  return "<style>\n    .inner-container {\n        height: 100%;\n        overflow: hidden;\n        width: 100%;\n        display: flex;\n        flex-direction: column;\n    }\n\n    .table-header {\n        position: relative;\n        top:0 !important;\n    }\n\n    .table-body {\n        overflow: auto;\n        flex: 5;\n        padding-right: 17px;\n    }\n    .table-footer,.table-top{\n        display: flex;\n        height: 35px;\n        padding: 5px;\n        justify-content: space-between;\n    }\n    .table-footer .footer-middle{\n        display: flex;\n    }\n    .table-footer .footer-right{\n        display: flex;\n    }\n    .margin-auto{\n        margin: auto !important;\n    }\n    .pager-input-container .pager-input{\n        width: 50px;\n    }\n    .column-settings-container{\n        position:absolute !important;\n        z-index:1000 !important;\n        bottom:35px !important;\n        left: 5px;\n        display:none;\n        box-shadow: 0 1px 3px 0 #d4d4d5, 0 0 0 1px #d4d4d5;\n    }\n    .remove-label:hover{\n        text-decoration: line-through;\n        cursor: pointer;\n    }\n    .border-less tr td,.border-less { border: 0px !important; }\n    .cursor-pointer{\n        cursor: pointer;\n    }\n    .ui.supercompact.icon.button, .ui.supercompact.icon.buttons .button {\n        padding: .3em .3em .3em .3em !important;\n    }\n</style>\n<div class=\"inner-container gui fluid container\" style=\"padding:0%;\">\n    <div class=\"table-header\">\n        <table id=\"headertable\" class=\"gui small inverted primary compact fixed selectable single line table mainTable\">\n            <colgroup class=\"headerColGroup\">\n                <col style=\"width:40px;\" />\n                <col style=\"width:40px;\" />\n"
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.columns : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "            </colgroup>\n            <thead>\n                <tr>\n                    <th></th>\n                    <th></th>\n"
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.columns : depth0),{"name":"each","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "                </tr>\n            </thead>\n        </table>\n    </div>\n    <div class=\"table-body\">\n        <table class=\"gui very basic mini compact fixed selectable single line table mainTable\">\n            <colgroup class=\"bodyColGroup\">\n                <col style=\"width:40px;\" /> \n                <col style=\"width:40px;\" />\n"
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.columns : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "            </colgroup>\n            <tbody class=\"mainTableBody\">\n"
    + ((stack1 = container.invokePartial(__webpack_require__(/*! ./src/hbs/grid-main-row.hbs */ 10),depth0,{"name":"grid-main-row","data":data,"indent":"                ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "            </tbody>\n        </table>\n    </div>\n    <div class=\"table-footer gui very basic curved container p-5\">\n"
    + ((stack1 = container.invokePartial(__webpack_require__(/*! ./src/hbs/grid-footer.hbs */ 7),depth0,{"name":"grid-footer","data":data,"indent":"           ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "    </div>\n</div>";
},"usePartial":true,"useData":true});

/***/ }),
/* 29 */
/*!***********************************!*\
  !*** ./src/hbs/helpers/Column.ts ***!
  \***********************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Column = function (col) {
    var calcWidth = col.hidden ? 0 : col.width;
    var dataAttrId = 'data-header-id="' + col.id + '"';
    return '<col style="width : ' + calcWidth + 'px;"' + dataAttrId + " />";
};
exports.default = Column;


/***/ })
/******/ ]);
});