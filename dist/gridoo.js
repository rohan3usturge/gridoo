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

  return "<tr class=\"gui gui-hidden detailsRow\">\r\n    <td colspan=\""
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

  return "<div class=\"col-md-3 gui left text-left gui-body-2\" style=\"display:absoulte;\">\r\n    <div class=\"gui fluid-w\">\r\n        <a class=\"gui col-settings-trigger\" aria-label=\"Manage Grid Column Settings\" title=\"Manage Grid Column Settings\" tabindex=\"1\">\r\n            <i class=\"gui-icon gui-icon-repair\"></i>\r\n            Manage Columns\r\n        </a>\r\n        <a class=\"gui col-sorting-reset-trigger m-l-10\" aria-label=\"Clear Sorting\" title=\"Clear Sorting\"\r\n            tabindex=\"2\">\r\n            <i class=\"gui-icon gui-icon-sort\"></i>\r\n            Clear Sorting\r\n        </a>\r\n    </div>\r\n    <div class=\"column-settings-container\">"
    + ((stack1 = container.invokePartial(__webpack_require__(/*! ./src/hbs/grid-manage-columns.hbs */ 8),depth0,{"name":"grid-manage-columns","data":data,"helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "</div>\r\n</div>\r\n<div data-role=\"pager\" class=\"gui gui-body-2 col-md-6 text-center\">\r\n    <div class=\"gui mini compact icon buttons\">\r\n        <button class=\"gui mini compact icon button firstLink\" aria-hidden=\"true\" "
    + alias2(__default(__webpack_require__(/*! ./src/hbs/helpers/Disabled.ts */ 1)).call(alias1,((stack1 = (depth0 != null ? depth0.paginationData : depth0)) != null ? stack1.firstPageLinkDisabled : stack1),{"name":"Disabled","hash":{},"data":data}))
    + "\r\n            aria-label=\"Go to the first page\" title=\"Go to the first page\" data-page=\"1\" tabindex=\"-1\">\r\n            <i class=\"gui-icon gui-icon-fast-backward\"></i>\r\n        </button>\r\n        <button class=\"gui mini compact icon button prevLink\" aria-hidden=\"true\" "
    + alias2(__default(__webpack_require__(/*! ./src/hbs/helpers/Disabled.ts */ 1)).call(alias1,((stack1 = (depth0 != null ? depth0.paginationData : depth0)) != null ? stack1.prevPageLinkDisabled : stack1),{"name":"Disabled","hash":{},"data":data}))
    + "\r\n            aria-label=\"Go to the previous page\" title=\"Go to the previous page\" data-page=\""
    + alias2(__default(__webpack_require__(/*! ./src/hbs/helpers/math.ts */ 9)).call(alias1,((stack1 = (depth0 != null ? depth0.paginationData : depth0)) != null ? stack1.pageIndex : stack1),"-",1,{"name":"math","hash":{},"data":data}))
    + "\"\r\n            tabindex=\"-1\">\r\n            <i class=\"gui-icon gui-icon-previous\"></i>\r\n        </button>\r\n    </div>\r\n    <div class=\"gui pager-input-container input\">\r\n        <span class=\"gui m-r-5\"> Page </span>\r\n        <input class=\"gui pager-input w-25 p-0 m-r-5\" aria-label=\"1\" value=\""
    + alias2(alias3(((stack1 = (depth0 != null ? depth0.paginationData : depth0)) != null ? stack1.pageIndex : stack1), depth0))
    + "\" type=\"text\" placeholder=\"Page Number ...\">\r\n        <span class=\"no-of-pages-scan\" data-number-of-pages=\""
    + alias2(alias3(((stack1 = (depth0 != null ? depth0.paginationData : depth0)) != null ? stack1.noOfPages : stack1), depth0))
    + "\"> of "
    + alias2(alias3(((stack1 = (depth0 != null ? depth0.paginationData : depth0)) != null ? stack1.noOfPages : stack1), depth0))
    + "</span>\r\n    </div>\r\n    <div class=\"gui mini compact icon buttons\">\r\n        <button class=\"gui mini compact icon button nextLink\" aria-hidden=\"true\" "
    + alias2(__default(__webpack_require__(/*! ./src/hbs/helpers/Disabled.ts */ 1)).call(alias1,((stack1 = (depth0 != null ? depth0.paginationData : depth0)) != null ? stack1.nextPageLinkDisabled : stack1),{"name":"Disabled","hash":{},"data":data}))
    + "\r\n            aria-label=\"Go to the next page\" title=\"Go to the next page\" class=\"gui button\" data-page=\""
    + alias2(__default(__webpack_require__(/*! ./src/hbs/helpers/math.ts */ 9)).call(alias1,((stack1 = (depth0 != null ? depth0.paginationData : depth0)) != null ? stack1.pageIndex : stack1),"+",1,{"name":"math","hash":{},"data":data}))
    + "\"\r\n            tabindex=\"-1\">\r\n            <i class=\"gui-icon gui-icon-next\"></i>\r\n        </button>\r\n        <button class=\"gui mini compact icon button lastLink\" aria-hidden=\"true\" "
    + alias2(__default(__webpack_require__(/*! ./src/hbs/helpers/Disabled.ts */ 1)).call(alias1,((stack1 = (depth0 != null ? depth0.paginationData : depth0)) != null ? stack1.lastPageLinkDisabled : stack1),{"name":"Disabled","hash":{},"data":data}))
    + "\r\n            aria-label=\"Go to the last page\" title=\"Go to the last page\" data-page=\""
    + alias2(alias3(((stack1 = (depth0 != null ? depth0.paginationData : depth0)) != null ? stack1.noOFpages : stack1), depth0))
    + "\" tabindex=\"-1\">\r\n            <i class=\"gui-icon gui-icon-fast-forward\"></i>\r\n        </button>\r\n    </div>\r\n</div>\r\n<div class=\"col-md-3 gui gui-body-2 right text-right\">\r\n    <select class=\"gui pageSizeSelector\">\r\n"
    + ((stack1 = helpers.each.call(alias1,((stack1 = (depth0 != null ? depth0.paginationData : depth0)) != null ? stack1.pageSizes : stack1),{"name":"each","hash":{},"fn":container.program(1, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "    </select>\r\n    <span class=\"gui m-l-10\">"
    + alias2(alias3(((stack1 = ((stack1 = (depth0 != null ? depth0.paginationData : depth0)) != null ? stack1.range : stack1)) != null ? stack1.min : stack1), depth0))
    + " - "
    + alias2(alias3(((stack1 = ((stack1 = (depth0 != null ? depth0.paginationData : depth0)) != null ? stack1.range : stack1)) != null ? stack1.max : stack1), depth0))
    + " of "
    + alias2(alias3(((stack1 = (depth0 != null ? depth0.paginationData : depth0)) != null ? stack1.totalCount : stack1), depth0))
    + " items</span>\r\n</div>\r\n<div class=\"gui clear\"></div>";
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

  return "<tr class=\"mainRow\">\r\n    <td class=\"expansionArrows\" style=\"display:flex;justify-content:center;\">\r\n        <i class=\"gui gui-icon gui-icon-chevron-down expandDetailsRowIcon cursor-pointer\" aria-hidden=\"true\"></i>\r\n        <i class=\"gui gui-icon gui-icon-chevron-up CollapseDetailsRowIcon cursor-pointer gui-hidden\" aria-hidden=\"true\"></i>\r\n    </td>\r\n    <td>\r\n        <input type=\"checkbox\">\r\n    </td>\r\n"
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
        this.parentElement.on("click", ".table-footer .col-settings-trigger", function (event) {
            var element = jQuery(event.target);
            var settngsPopup = jQuery(".column-settings-container");
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
                    detailsRow.show(200);
                }
                else {
                    detailsRow.hide(200);
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
    return "                                <i class=\"gui gui-icon gui-icon-arrow-up gui-hidden\" aria-hidden=\"true\" ></i>                        \n                                <i class=\"gui gui-icon gui-icon-arrow-down gui-hidden\" aria-hidden=\"true\" ></i>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {});

  return "<style>\n    .inner-container {\n        height: 100%;\n        overflow: hidden;\n        width: 100%;\n        display: flex;\n        flex-direction: column;\n    }\n\n    .table-header {\n        position: relative;\n        top:0 !important;\n    }\n\n    .table-body {\n        overflow: auto;\n        flex: 5;\n        padding-right: 17px;\n    }\n    .table-footer{\n        height: 35px;\n        padding: 5px;\n    }\n    .table-footer .footer-middle{\n        display: flex;\n    }\n    .table-footer .footer-right{\n        display: flex;\n    }\n    .margin-auto{\n        margin: auto !important;\n    }\n    .column-settings-container{\n        position:absolute !important;\n        z-index:1000 !important;\n        bottom:35px !important;\n        left: 5px;\n        display:none;\n        box-shadow: 0 1px 3px 0 #d4d4d5, 0 0 0 1px #d4d4d5;\n    }\n    .remove-label:hover{\n        text-decoration: line-through;\n        cursor: pointer;\n    }\n    .border-less tr td,.border-less { border: 0px !important; }\n    .cursor-pointer{\n        cursor: pointer;\n    }\n    .ui.supercompact.icon.button, .ui.supercompact.icon.buttons .button {\n        padding: .3em .3em .3em .3em !important;\n    }\n</style>\n<div class=\"inner-container gui fluid container\" style=\"padding:0%;\">\n    <div class=\"table-header\">\n        <table id=\"headertable\" class=\"gui large compact fixed selectable single line table mainTable\">\n            <colgroup class=\"headerColGroup\">\n                <col style=\"width:40px;\" />\n                <col style=\"width:40px;\" />\n"
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.columns : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "            </colgroup>\n            <thead>\n                <tr>\n                    <th></th>\n                    <th></th>\n"
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.columns : depth0),{"name":"each","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "                </tr>\n            </thead>\n        </table>\n    </div>\n    <div class=\"table-body\">\n        <table class=\"gui basic large compact fixed selectable single line table mainTable\">\n            <colgroup class=\"bodyColGroup\">\n                <col style=\"width:40px;\" /> \n                <col style=\"width:40px;\" />\n"
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.columns : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "            </colgroup>\n            <tbody class=\"mainTableBody\">\n"
    + ((stack1 = container.invokePartial(__webpack_require__(/*! ./src/hbs/grid-main-row.hbs */ 10),depth0,{"name":"grid-main-row","data":data,"indent":"                ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "            </tbody>\n        </table>\n    </div>\n    <div class=\"table-footer gui h-auto fluid-w basic curved row p-5 m-0\">\n"
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCA3ZjlhZWU5YzY3Zjc1NGM5MDVjMCIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwge1wicm9vdFwiOlwiSGFuZGxlYmFyc1wiLFwiYW1kXCI6XCJoYW5kbGViYXJzLnJ1bnRpbWVcIixcImNvbW1vbmpzMlwiOlwiaGFuZGxlYmFycy9ydW50aW1lXCIsXCJjb21tb25qc1wiOlwiaGFuZGxlYmFycy9ydW50aW1lXCJ9Iiwid2VicGFjazovLy8uL3NyYy9oYnMvaGVscGVycy9EaXNhYmxlZC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvcGFnaW5hdGlvbi9QYWdlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvdXRpbC9Db2x1bW5VdGlsLnRzIiwid2VicGFjazovLy8uL3NyYy9qcy92aXJ0dWFsaXphdGlvbi9TY3JvbGxEaXJlY3Rpb24udHMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwialF1ZXJ5XCIiLCJ3ZWJwYWNrOi8vLy4vc3JjL2hicy9ncmlkLWRldGFpbHMtcm93LmhicyIsIndlYnBhY2s6Ly8vLi9zcmMvaGJzL2dyaWQtZm9vdGVyLmhicyIsIndlYnBhY2s6Ly8vLi9zcmMvaGJzL2dyaWQtbWFuYWdlLWNvbHVtbnMuaGJzIiwid2VicGFjazovLy8uL3NyYy9oYnMvaGVscGVycy9tYXRoLnRzIiwid2VicGFjazovLy8uL3NyYy9oYnMvZ3JpZC1tYWluLXJvdy5oYnMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL21haW4vR3JpZC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvY29uZmlnL0NvbmZpZ1N0b3JlLnRzIiwid2VicGFjazovLy8uL3NyYy9qcy9ldmVudEhhbmRsZXJzL0NvbFNldHRpbmdzSGFuZGxlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvZXZlbnRIYW5kbGVycy9EZXRhaWxzUm93SGFuZGxlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvZXZlbnRIYW5kbGVycy9GaWx0ZXJDbGlja0hhbmRsZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL21vZGVscy9GaWx0ZXJBY3Rpb25UeXBlLnRzIiwid2VicGFjazovLy8uL3NyYy9qcy9ldmVudEhhbmRsZXJzL0hhbmRsZXJOYW1lcy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvZXZlbnRIYW5kbGVycy9IZWFkZXJDbGlja0hhbmRsZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL21vZGVscy9PcmRlckRpcmVjdGlvbi50cyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvZXZlbnRIYW5kbGVycy9QYWdlU2VhcmNoQ2xpY2tIYW5kbGVyLnRzIiwid2VicGFjazovLy8uL3NyYy9qcy9ldmVudEhhbmRsZXJzL1Njcm9sbEhhbmRsZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL3ZpcnR1YWxpemF0aW9uL1ZpcnR1YWxpemVyLnRzIiwid2VicGFjazovLy8uL3NyYy9qcy92aXJ0dWFsaXphdGlvbi9JbmRleENvdW50ZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2V2ZW50SGFuZGxlcnMvVG9nZ2xlQ29sdW1uSGFuZGxlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvc2VydmljZXMvR3JpZFRlbXBsYXRlU2VydmljZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvaGJzL2hlbHBlcnMvU2VsZWN0ZWQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2hicy9oZWxwZXJzL0NoZWNrZWQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2hicy9ncmlkLmhicyIsIndlYnBhY2s6Ly8vLi9zcmMvaGJzL2hlbHBlcnMvQ29sdW1uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxPO0FDVkE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFD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QUFDO0FBRUYsa0JBQWUsTUFBTSxDQUFDIiwiZmlsZSI6ImdyaWRvby5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkocmVxdWlyZShcImhhbmRsZWJhcnMvcnVudGltZVwiKSwgcmVxdWlyZShcImpRdWVyeVwiKSk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShbXCJoYW5kbGViYXJzLnJ1bnRpbWVcIiwgXCJqUXVlcnlcIl0sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wiR3JpZG9vXCJdID0gZmFjdG9yeShyZXF1aXJlKFwiaGFuZGxlYmFycy9ydW50aW1lXCIpLCByZXF1aXJlKFwialF1ZXJ5XCIpKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJHcmlkb29cIl0gPSBmYWN0b3J5KHJvb3RbXCJIYW5kbGViYXJzXCJdLCByb290W1wialF1ZXJ5XCJdKTtcbn0pKHR5cGVvZiBzZWxmICE9PSAndW5kZWZpbmVkJyA/IHNlbGYgOiB0aGlzLCBmdW5jdGlvbihfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzBfXywgX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV81X18pIHtcbnJldHVybiBcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMTEpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIDdmOWFlZTljNjdmNzU0YzkwNWMwIiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzBfXztcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCB7XCJyb290XCI6XCJIYW5kbGViYXJzXCIsXCJhbWRcIjpcImhhbmRsZWJhcnMucnVudGltZVwiLFwiY29tbW9uanMyXCI6XCJoYW5kbGViYXJzL3J1bnRpbWVcIixcImNvbW1vbmpzXCI6XCJoYW5kbGViYXJzL3J1bnRpbWVcIn1cbi8vIG1vZHVsZSBpZCA9IDBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEiLCJjb25zdCBkaXNhYmxlZCA9IChib29sOiBib29sZWFuKTogc3RyaW5nID0+IHtcclxuICAgIHJldHVybiBib29sID8gXCJkaXNhYmxlZFwiIDogXCJcIjtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGRpc2FibGVkO1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvdHNsaW50LWxvYWRlcj8/cmVmLS0xIS4vc3JjL2hicy9oZWxwZXJzL0Rpc2FibGVkLnRzIiwiaW1wb3J0IHsgSVBhZ2luYXRpb24gfSBmcm9tIFwiLi4vbW9kZWxzL0lQYWdpbmF0aW9uXCI7XHJcbmltcG9ydCB7IElQYWdpbmF0aW9uSW5wdXQgfSBmcm9tIFwiLi4vbW9kZWxzL0lQYWdpbmF0aW9uSW5wdXRcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBQYWdlciB7XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBwYWdpbmF0aW9uRGF0YTogSVBhZ2luYXRpb247XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBDYWxjdWxhdGVQYWdpbmF0aW9uRGF0YSA9IChwYWdpbmF0aW9uSW5wdXQ6IElQYWdpbmF0aW9uSW5wdXQpOiB2b2lkID0+IHtcclxuICAgICAgICAgICAgY29uc3QgcGFnaW5hdGlvbkRhdGE6IGFueSA9IHt9O1xyXG4gICAgICAgICAgICBwYWdpbmF0aW9uRGF0YS5wYWdlSW5kZXggPSBwYWdpbmF0aW9uSW5wdXQucGFnZUluZGV4O1xyXG4gICAgICAgICAgICBwYWdpbmF0aW9uRGF0YS5wYWdlU2l6ZSA9IHBhZ2luYXRpb25JbnB1dC5wYWdlU2l6ZTtcclxuICAgICAgICAgICAgcGFnaW5hdGlvbkRhdGEucGFnZVNpemVzID0gcGFnaW5hdGlvbklucHV0LnBhZ2VTaXplcztcclxuICAgICAgICAgICAgcGFnaW5hdGlvbkRhdGEudG90YWxDb3VudCA9IHBhZ2luYXRpb25JbnB1dC50b3RhbENvdW50O1xyXG4gICAgICAgICAgICBwYWdpbmF0aW9uRGF0YS5ub09mUGFnZXMgPSBNYXRoLmNlaWwocGFnaW5hdGlvbklucHV0LnRvdGFsQ291bnQgLyBwYWdpbmF0aW9uSW5wdXQucGFnZVNpemUpO1xyXG4gICAgICAgICAgICBjb25zdCBtaW5OdW0gPSAoKHBhZ2luYXRpb25JbnB1dC5wYWdlSW5kZXggLSAxKSAqIHBhZ2luYXRpb25JbnB1dC5wYWdlU2l6ZSk7XHJcbiAgICAgICAgICAgIGNvbnN0IGxvd2VyTGltaXRPZmZzZXQgPSBwYWdpbmF0aW9uSW5wdXQucGFnZVNpemUgPiBwYWdpbmF0aW9uSW5wdXQudG90YWxDb3VudCA/XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWdpbmF0aW9uSW5wdXQudG90YWxDb3VudCA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWdpbmF0aW9uSW5wdXQucGFnZVNpemU7XHJcbiAgICAgICAgICAgIHBhZ2luYXRpb25EYXRhLnJhbmdlID0ge1xyXG4gICAgICAgICAgICAgICAgbWluIDogbWluTnVtICsgMSxcclxuICAgICAgICAgICAgICAgIG1heCA6IG1pbk51bSArIGxvd2VyTGltaXRPZmZzZXQsXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIHBhZ2luYXRpb25EYXRhLmZpcnN0UGFnZUxpbmtEaXNhYmxlZCA9IHBhZ2luYXRpb25EYXRhLm5vT2ZQYWdlcyA9PT0gMSB8fCBwYWdpbmF0aW9uRGF0YS5wYWdlSW5kZXggPT09IDE7XHJcbiAgICAgICAgICAgIHBhZ2luYXRpb25EYXRhLmxhc3RQYWdlTGlua0Rpc2FibGVkICA9IHBhZ2luYXRpb25EYXRhLm5vT2ZQYWdlcyA9PT0gMVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfHwgKHBhZ2luYXRpb25EYXRhLnBhZ2VJbmRleCA9PT0gcGFnaW5hdGlvbkRhdGEubm9PZlBhZ2VzKTtcclxuICAgICAgICAgICAgcGFnaW5hdGlvbkRhdGEucHJldlBhZ2VMaW5rRGlzYWJsZWQgID0gcGFnaW5hdGlvbkRhdGEucGFnZUluZGV4ID09PSAxXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8fCAocGFnaW5hdGlvbkRhdGEucGFnZUluZGV4IC0gMSkgPD0gMDtcclxuICAgICAgICAgICAgcGFnaW5hdGlvbkRhdGEubmV4dFBhZ2VMaW5rRGlzYWJsZWQgID0gcGFnaW5hdGlvbkRhdGEubm9PZlBhZ2VzID09PSBwYWdpbmF0aW9uRGF0YS5wYWdlSW5kZXhcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHx8IChwYWdpbmF0aW9uRGF0YS5wYWdlSW5kZXggKyAxKSA+PSBwYWdpbmF0aW9uRGF0YS5ub09mUGFnZXM7XHJcbiAgICAgICAgICAgIFBhZ2VyLnBhZ2luYXRpb25EYXRhID0gcGFnaW5hdGlvbkRhdGE7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBnZXQgUGFnaW5hdGlvbkRhdGEoKTogSVBhZ2luYXRpb24ge1xyXG4gICAgICAgIHJldHVybiBQYWdlci5wYWdpbmF0aW9uRGF0YTtcclxuICAgIH1cclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvdHNsaW50LWxvYWRlcj8/cmVmLS0xIS4vc3JjL2pzL3BhZ2luYXRpb24vUGFnZXIudHMiLCJpbXBvcnQgeyBJQ29sdW1uIH0gZnJvbSBcIi4vLi4vbW9kZWxzL0lDb2x1bW5cIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBDb21tb25VdGlsIHtcclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIEdldENvbHVtbk9iamVjdCA9IChjb2x1bW5JZDogc3RyaW5nLCBjb2x1bW5zOiBJQ29sdW1uW10pOiBJQ29sdW1uID0+IHtcclxuICAgICAgICBpZiAoY29sdW1uSWQgPT0gbnVsbCB8fCBjb2x1bW5zID09IG51bGwpIHtcclxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCByZXRDb2w6IElDb2x1bW47XHJcbiAgICAgICAgY29sdW1ucy5mb3JFYWNoKChjb2w6IElDb2x1bW4pID0+IHtcclxuICAgICAgICAgICAgaWYgKGNvbC5pZCA9PT0gY29sdW1uSWQpIHtcclxuICAgICAgICAgICAgICAgIHJldENvbCA9IGNvbDtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHJldHVybiByZXRDb2w7XHJcbiAgICB9XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL3RzbGludC1sb2FkZXI/P3JlZi0tMSEuL3NyYy9qcy91dGlsL0NvbHVtblV0aWwudHMiLCJleHBvcnQgZW51bSBTY3JvbGxEaXJlY3Rpb24ge1xyXG4gICAgVXAgPSBcIlVwXCIsXHJcbiAgICBEb3duID0gXCJEb3duXCIsXHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL3RzbGludC1sb2FkZXI/P3JlZi0tMSEuL3NyYy9qcy92aXJ0dWFsaXphdGlvbi9TY3JvbGxEaXJlY3Rpb24udHMiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfNV9fO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwialF1ZXJ5XCJcbi8vIG1vZHVsZSBpZCA9IDVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEiLCJ2YXIgSGFuZGxlYmFycyA9IHJlcXVpcmUoXCJoYW5kbGViYXJzXCIpO1xuZnVuY3Rpb24gX19kZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIChvYmouX19lc01vZHVsZSA/IG9ialtcImRlZmF1bHRcIl0gOiBvYmopOyB9XG5tb2R1bGUuZXhwb3J0cyA9IChIYW5kbGViYXJzW1wiZGVmYXVsdFwiXSB8fCBIYW5kbGViYXJzKS50ZW1wbGF0ZSh7XCIxXCI6ZnVuY3Rpb24oY29udGFpbmVyLGRlcHRoMCxoZWxwZXJzLHBhcnRpYWxzLGRhdGEpIHtcbiAgICB2YXIgc3RhY2sxLCBoZWxwZXIsIGFsaWFzMT1kZXB0aDAgIT0gbnVsbCA/IGRlcHRoMCA6IChjb250YWluZXIubnVsbENvbnRleHQgfHwge30pLCBhbGlhczI9aGVscGVycy5oZWxwZXJNaXNzaW5nLCBhbGlhczM9XCJmdW5jdGlvblwiLCBhbGlhczQ9Y29udGFpbmVyLmVzY2FwZUV4cHJlc3Npb247XG5cbiAgcmV0dXJuIFwiICAgICAgICAgICAgICAgIDx0cj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzcz1cXFwiZ3VpIHJ2LXBhcmVudFxcXCIgdmFsaWduPVxcXCJ0b3BcXFwiIGRhdGEtZmlsdGVyLWtleT1cXFwiXCJcbiAgICArIGFsaWFzNCgoKGhlbHBlciA9IChoZWxwZXIgPSBoZWxwZXJzLmlkIHx8IChkZXB0aDAgIT0gbnVsbCA/IGRlcHRoMC5pZCA6IGRlcHRoMCkpICE9IG51bGwgPyBoZWxwZXIgOiBhbGlhczIpLCh0eXBlb2YgaGVscGVyID09PSBhbGlhczMgPyBoZWxwZXIuY2FsbChhbGlhczEse1wibmFtZVwiOlwiaWRcIixcImhhc2hcIjp7fSxcImRhdGFcIjpkYXRhfSkgOiBoZWxwZXIpKSlcbiAgICArIFwiXFxcIiBkYXRhLWZpbHRlci12YWx1ZT1cXFwiXCJcbiAgICArIGFsaWFzNCgoKGhlbHBlciA9IChoZWxwZXIgPSBoZWxwZXJzLmFjdHVhbFZhbHVlIHx8IChkZXB0aDAgIT0gbnVsbCA/IGRlcHRoMC5hY3R1YWxWYWx1ZSA6IGRlcHRoMCkpICE9IG51bGwgPyBoZWxwZXIgOiBhbGlhczIpLCh0eXBlb2YgaGVscGVyID09PSBhbGlhczMgPyBoZWxwZXIuY2FsbChhbGlhczEse1wibmFtZVwiOlwiYWN0dWFsVmFsdWVcIixcImhhc2hcIjp7fSxcImRhdGFcIjpkYXRhfSkgOiBoZWxwZXIpKSlcbiAgICArIFwiXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5cIlxuICAgICsgYWxpYXM0KCgoaGVscGVyID0gKGhlbHBlciA9IGhlbHBlcnMuY29sdW1uTmFtZSB8fCAoZGVwdGgwICE9IG51bGwgPyBkZXB0aDAuY29sdW1uTmFtZSA6IGRlcHRoMCkpICE9IG51bGwgPyBoZWxwZXIgOiBhbGlhczIpLCh0eXBlb2YgaGVscGVyID09PSBhbGlhczMgPyBoZWxwZXIuY2FsbChhbGlhczEse1wibmFtZVwiOlwiY29sdW1uTmFtZVwiLFwiaGFzaFwiOnt9LFwiZGF0YVwiOmRhdGF9KSA6IGhlbHBlcikpKVxuICAgICsgXCI8L3NwYW4+XFxyXFxuXCJcbiAgICArICgoc3RhY2sxID0gaGVscGVyc1tcImlmXCJdLmNhbGwoYWxpYXMxLChkZXB0aDAgIT0gbnVsbCA/IGRlcHRoMC5maWx0ZXJhYmxlIDogZGVwdGgwKSx7XCJuYW1lXCI6XCJpZlwiLFwiaGFzaFwiOnt9LFwiZm5cIjpjb250YWluZXIucHJvZ3JhbSgyLCBkYXRhLCAwKSxcImludmVyc2VcIjpjb250YWluZXIubm9vcCxcImRhdGFcIjpkYXRhfSkpICE9IG51bGwgPyBzdGFjazEgOiBcIlwiKVxuICAgICsgXCIgICAgICAgICAgICAgICAgICAgIDwvdGQ+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8dGQ+XCJcbiAgICArICgoc3RhY2sxID0gKChoZWxwZXIgPSAoaGVscGVyID0gaGVscGVycy5jb2x1bW5WYWx1ZSB8fCAoZGVwdGgwICE9IG51bGwgPyBkZXB0aDAuY29sdW1uVmFsdWUgOiBkZXB0aDApKSAhPSBudWxsID8gaGVscGVyIDogYWxpYXMyKSwodHlwZW9mIGhlbHBlciA9PT0gYWxpYXMzID8gaGVscGVyLmNhbGwoYWxpYXMxLHtcIm5hbWVcIjpcImNvbHVtblZhbHVlXCIsXCJoYXNoXCI6e30sXCJkYXRhXCI6ZGF0YX0pIDogaGVscGVyKSkpICE9IG51bGwgPyBzdGFjazEgOiBcIlwiKVxuICAgICsgXCI8L3RkPlxcclxcbiAgICAgICAgICAgICAgICA8L3RyPlxcclxcblwiO1xufSxcIjJcIjpmdW5jdGlvbihjb250YWluZXIsZGVwdGgwLGhlbHBlcnMscGFydGlhbHMsZGF0YSkge1xuICAgIHJldHVybiBcIiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVxcXCJndWkgbS1sLTUgcnYtY2hpbGQgZ3VpLWNhcHRpb25cXFwiID5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3M9XFxcImd1aSBndWktaWNvbiBndWktaWNvbi1hZGQgaG92ZXIgbS1sLTUgY3Vyc29yLXBvaW50ZXIgYWRkRmlsdGVyXFxcIj48L2k+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVxcXCJndWkgZ3VpLWljb24gZ3VpLWljb24tbWludXMgaG92ZXIgbS1sLTUgY3Vyc29yLXBvaW50ZXIgcmVtb3ZlRmlsdGVyXFxcIj48L2k+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxcclxcblwiO1xufSxcImNvbXBpbGVyXCI6WzcsXCI+PSA0LjAuMFwiXSxcIm1haW5cIjpmdW5jdGlvbihjb250YWluZXIsZGVwdGgwLGhlbHBlcnMscGFydGlhbHMsZGF0YSkge1xuICAgIHZhciBzdGFjazEsIGhlbHBlciwgYWxpYXMxPWRlcHRoMCAhPSBudWxsID8gZGVwdGgwIDogKGNvbnRhaW5lci5udWxsQ29udGV4dCB8fCB7fSk7XG5cbiAgcmV0dXJuIFwiPHRyIGNsYXNzPVxcXCJndWkgZ3VpLWhpZGRlbiBkZXRhaWxzUm93XFxcIj5cXHJcXG4gICAgPHRkIGNvbHNwYW49XFxcIlwiXG4gICAgKyBjb250YWluZXIuZXNjYXBlRXhwcmVzc2lvbigoKGhlbHBlciA9IChoZWxwZXIgPSBoZWxwZXJzLmxlbmd0aCB8fCAoZGVwdGgwICE9IG51bGwgPyBkZXB0aDAubGVuZ3RoIDogZGVwdGgwKSkgIT0gbnVsbCA/IGhlbHBlciA6IGhlbHBlcnMuaGVscGVyTWlzc2luZyksKHR5cGVvZiBoZWxwZXIgPT09IFwiZnVuY3Rpb25cIiA/IGhlbHBlci5jYWxsKGFsaWFzMSx7XCJuYW1lXCI6XCJsZW5ndGhcIixcImhhc2hcIjp7fSxcImRhdGFcIjpkYXRhfSkgOiBoZWxwZXIpKSlcbiAgICArIFwiXFxcIj5cXHJcXG4gICAgICAgIDx0YWJsZSBjbGFzcz1cXFwiZ3VpIHZlcnkgY29tcGFjdCBzZWxlY3RhYmxlIGNlbGxlZCB0YWJsZSBkZXRhaWxzVGFibGUgbS1sLTEwIHAtNVxcXCIgc3R5bGU9XFxcIndpZHRoOiBhdXRvO1xcXCIgPlxcclxcbiAgICAgICAgICAgIDx0Ym9keT5cXHJcXG5cIlxuICAgICsgKChzdGFjazEgPSBoZWxwZXJzLmVhY2guY2FsbChhbGlhczEsKGRlcHRoMCAhPSBudWxsID8gZGVwdGgwLm1haW5Sb3dDb2xBcnJheSA6IGRlcHRoMCkse1wibmFtZVwiOlwiZWFjaFwiLFwiaGFzaFwiOnt9LFwiZm5cIjpjb250YWluZXIucHJvZ3JhbSgxLCBkYXRhLCAwKSxcImludmVyc2VcIjpjb250YWluZXIubm9vcCxcImRhdGFcIjpkYXRhfSkpICE9IG51bGwgPyBzdGFjazEgOiBcIlwiKVxuICAgICsgXCIgICAgICAgICAgICA8L3Rib2R5PlxcclxcbiAgICAgICAgPC90YWJsZT5cXHJcXG4gICAgPC90ZD5cXHJcXG48L3RyPlwiO1xufSxcInVzZURhdGFcIjp0cnVlfSk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvaGJzL2dyaWQtZGV0YWlscy1yb3cuaGJzXG4vLyBtb2R1bGUgaWQgPSA2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIiwidmFyIEhhbmRsZWJhcnMgPSByZXF1aXJlKFwiaGFuZGxlYmFyc1wiKTtcbmZ1bmN0aW9uIF9fZGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiAob2JqLl9fZXNNb2R1bGUgPyBvYmpbXCJkZWZhdWx0XCJdIDogb2JqKTsgfVxubW9kdWxlLmV4cG9ydHMgPSAoSGFuZGxlYmFyc1tcImRlZmF1bHRcIl0gfHwgSGFuZGxlYmFycykudGVtcGxhdGUoe1wiMVwiOmZ1bmN0aW9uKGNvbnRhaW5lcixkZXB0aDAsaGVscGVycyxwYXJ0aWFscyxkYXRhLGJsb2NrUGFyYW1zLGRlcHRocykge1xuICAgIHZhciBzdGFjazEsIGFsaWFzMT1jb250YWluZXIuZXNjYXBlRXhwcmVzc2lvbjtcblxuICByZXR1cm4gXCIgICAgICAgIDxvcHRpb24gXCJcbiAgICArIGFsaWFzMShfX2RlZmF1bHQocmVxdWlyZShcIkM6XFxcXFVzZXJzXFxcXHJvdXN0dXJnXFxcXFNvdXJjZVxcXFxSZXBvc1xcXFxTZWFyY2hNYXN0ZXJcXFxcR3JpZG9vXFxcXHNyY1xcXFxoYnNcXFxcaGVscGVyc1xcXFxTZWxlY3RlZC50c1wiKSkuY2FsbChkZXB0aDAgIT0gbnVsbCA/IGRlcHRoMCA6IChjb250YWluZXIubnVsbENvbnRleHQgfHwge30pLCgoc3RhY2sxID0gKGRlcHRoc1sxXSAhPSBudWxsID8gZGVwdGhzWzFdLnBhZ2luYXRpb25EYXRhIDogZGVwdGhzWzFdKSkgIT0gbnVsbCA/IHN0YWNrMS5wYWdlU2l6ZSA6IHN0YWNrMSksZGVwdGgwLHtcIm5hbWVcIjpcIlNlbGVjdGVkXCIsXCJoYXNoXCI6e30sXCJkYXRhXCI6ZGF0YX0pKVxuICAgICsgXCI+XCJcbiAgICArIGFsaWFzMShjb250YWluZXIubGFtYmRhKGRlcHRoMCwgZGVwdGgwKSlcbiAgICArIFwiPC9vcHRpb24+XFxyXFxuXCI7XG59LFwiY29tcGlsZXJcIjpbNyxcIj49IDQuMC4wXCJdLFwibWFpblwiOmZ1bmN0aW9uKGNvbnRhaW5lcixkZXB0aDAsaGVscGVycyxwYXJ0aWFscyxkYXRhLGJsb2NrUGFyYW1zLGRlcHRocykge1xuICAgIHZhciBzdGFjazEsIGFsaWFzMT1kZXB0aDAgIT0gbnVsbCA/IGRlcHRoMCA6IChjb250YWluZXIubnVsbENvbnRleHQgfHwge30pLCBhbGlhczI9Y29udGFpbmVyLmVzY2FwZUV4cHJlc3Npb24sIGFsaWFzMz1jb250YWluZXIubGFtYmRhO1xuXG4gIHJldHVybiBcIjxkaXYgY2xhc3M9XFxcImNvbC1tZC0zIGd1aSBsZWZ0IHRleHQtbGVmdCBndWktYm9keS0yXFxcIiBzdHlsZT1cXFwiZGlzcGxheTphYnNvdWx0ZTtcXFwiPlxcclxcbiAgICA8ZGl2IGNsYXNzPVxcXCJndWkgZmx1aWQtd1xcXCI+XFxyXFxuICAgICAgICA8YSBjbGFzcz1cXFwiZ3VpIGNvbC1zZXR0aW5ncy10cmlnZ2VyXFxcIiBhcmlhLWxhYmVsPVxcXCJNYW5hZ2UgR3JpZCBDb2x1bW4gU2V0dGluZ3NcXFwiIHRpdGxlPVxcXCJNYW5hZ2UgR3JpZCBDb2x1bW4gU2V0dGluZ3NcXFwiIHRhYmluZGV4PVxcXCIxXFxcIj5cXHJcXG4gICAgICAgICAgICA8aSBjbGFzcz1cXFwiZ3VpLWljb24gZ3VpLWljb24tcmVwYWlyXFxcIj48L2k+XFxyXFxuICAgICAgICAgICAgTWFuYWdlIENvbHVtbnNcXHJcXG4gICAgICAgIDwvYT5cXHJcXG4gICAgICAgIDxhIGNsYXNzPVxcXCJndWkgY29sLXNvcnRpbmctcmVzZXQtdHJpZ2dlciBtLWwtMTBcXFwiIGFyaWEtbGFiZWw9XFxcIkNsZWFyIFNvcnRpbmdcXFwiIHRpdGxlPVxcXCJDbGVhciBTb3J0aW5nXFxcIlxcclxcbiAgICAgICAgICAgIHRhYmluZGV4PVxcXCIyXFxcIj5cXHJcXG4gICAgICAgICAgICA8aSBjbGFzcz1cXFwiZ3VpLWljb24gZ3VpLWljb24tc29ydFxcXCI+PC9pPlxcclxcbiAgICAgICAgICAgIENsZWFyIFNvcnRpbmdcXHJcXG4gICAgICAgIDwvYT5cXHJcXG4gICAgPC9kaXY+XFxyXFxuICAgIDxkaXYgY2xhc3M9XFxcImNvbHVtbi1zZXR0aW5ncy1jb250YWluZXJcXFwiPlwiXG4gICAgKyAoKHN0YWNrMSA9IGNvbnRhaW5lci5pbnZva2VQYXJ0aWFsKHJlcXVpcmUoXCJDOlxcXFxVc2Vyc1xcXFxyb3VzdHVyZ1xcXFxTb3VyY2VcXFxcUmVwb3NcXFxcU2VhcmNoTWFzdGVyXFxcXEdyaWRvb1xcXFxzcmNcXFxcaGJzXFxcXGdyaWQtbWFuYWdlLWNvbHVtbnMuaGJzXCIpLGRlcHRoMCx7XCJuYW1lXCI6XCJncmlkLW1hbmFnZS1jb2x1bW5zXCIsXCJkYXRhXCI6ZGF0YSxcImhlbHBlcnNcIjpoZWxwZXJzLFwicGFydGlhbHNcIjpwYXJ0aWFscyxcImRlY29yYXRvcnNcIjpjb250YWluZXIuZGVjb3JhdG9yc30pKSAhPSBudWxsID8gc3RhY2sxIDogXCJcIilcbiAgICArIFwiPC9kaXY+XFxyXFxuPC9kaXY+XFxyXFxuPGRpdiBkYXRhLXJvbGU9XFxcInBhZ2VyXFxcIiBjbGFzcz1cXFwiZ3VpIGd1aS1ib2R5LTIgY29sLW1kLTYgdGV4dC1jZW50ZXJcXFwiPlxcclxcbiAgICA8ZGl2IGNsYXNzPVxcXCJndWkgbWluaSBjb21wYWN0IGljb24gYnV0dG9uc1xcXCI+XFxyXFxuICAgICAgICA8YnV0dG9uIGNsYXNzPVxcXCJndWkgbWluaSBjb21wYWN0IGljb24gYnV0dG9uIGZpcnN0TGlua1xcXCIgYXJpYS1oaWRkZW49XFxcInRydWVcXFwiIFwiXG4gICAgKyBhbGlhczIoX19kZWZhdWx0KHJlcXVpcmUoXCJDOlxcXFxVc2Vyc1xcXFxyb3VzdHVyZ1xcXFxTb3VyY2VcXFxcUmVwb3NcXFxcU2VhcmNoTWFzdGVyXFxcXEdyaWRvb1xcXFxzcmNcXFxcaGJzXFxcXGhlbHBlcnNcXFxcRGlzYWJsZWQudHNcIikpLmNhbGwoYWxpYXMxLCgoc3RhY2sxID0gKGRlcHRoMCAhPSBudWxsID8gZGVwdGgwLnBhZ2luYXRpb25EYXRhIDogZGVwdGgwKSkgIT0gbnVsbCA/IHN0YWNrMS5maXJzdFBhZ2VMaW5rRGlzYWJsZWQgOiBzdGFjazEpLHtcIm5hbWVcIjpcIkRpc2FibGVkXCIsXCJoYXNoXCI6e30sXCJkYXRhXCI6ZGF0YX0pKVxuICAgICsgXCJcXHJcXG4gICAgICAgICAgICBhcmlhLWxhYmVsPVxcXCJHbyB0byB0aGUgZmlyc3QgcGFnZVxcXCIgdGl0bGU9XFxcIkdvIHRvIHRoZSBmaXJzdCBwYWdlXFxcIiBkYXRhLXBhZ2U9XFxcIjFcXFwiIHRhYmluZGV4PVxcXCItMVxcXCI+XFxyXFxuICAgICAgICAgICAgPGkgY2xhc3M9XFxcImd1aS1pY29uIGd1aS1pY29uLWZhc3QtYmFja3dhcmRcXFwiPjwvaT5cXHJcXG4gICAgICAgIDwvYnV0dG9uPlxcclxcbiAgICAgICAgPGJ1dHRvbiBjbGFzcz1cXFwiZ3VpIG1pbmkgY29tcGFjdCBpY29uIGJ1dHRvbiBwcmV2TGlua1xcXCIgYXJpYS1oaWRkZW49XFxcInRydWVcXFwiIFwiXG4gICAgKyBhbGlhczIoX19kZWZhdWx0KHJlcXVpcmUoXCJDOlxcXFxVc2Vyc1xcXFxyb3VzdHVyZ1xcXFxTb3VyY2VcXFxcUmVwb3NcXFxcU2VhcmNoTWFzdGVyXFxcXEdyaWRvb1xcXFxzcmNcXFxcaGJzXFxcXGhlbHBlcnNcXFxcRGlzYWJsZWQudHNcIikpLmNhbGwoYWxpYXMxLCgoc3RhY2sxID0gKGRlcHRoMCAhPSBudWxsID8gZGVwdGgwLnBhZ2luYXRpb25EYXRhIDogZGVwdGgwKSkgIT0gbnVsbCA/IHN0YWNrMS5wcmV2UGFnZUxpbmtEaXNhYmxlZCA6IHN0YWNrMSkse1wibmFtZVwiOlwiRGlzYWJsZWRcIixcImhhc2hcIjp7fSxcImRhdGFcIjpkYXRhfSkpXG4gICAgKyBcIlxcclxcbiAgICAgICAgICAgIGFyaWEtbGFiZWw9XFxcIkdvIHRvIHRoZSBwcmV2aW91cyBwYWdlXFxcIiB0aXRsZT1cXFwiR28gdG8gdGhlIHByZXZpb3VzIHBhZ2VcXFwiIGRhdGEtcGFnZT1cXFwiXCJcbiAgICArIGFsaWFzMihfX2RlZmF1bHQocmVxdWlyZShcIkM6XFxcXFVzZXJzXFxcXHJvdXN0dXJnXFxcXFNvdXJjZVxcXFxSZXBvc1xcXFxTZWFyY2hNYXN0ZXJcXFxcR3JpZG9vXFxcXHNyY1xcXFxoYnNcXFxcaGVscGVyc1xcXFxtYXRoLnRzXCIpKS5jYWxsKGFsaWFzMSwoKHN0YWNrMSA9IChkZXB0aDAgIT0gbnVsbCA/IGRlcHRoMC5wYWdpbmF0aW9uRGF0YSA6IGRlcHRoMCkpICE9IG51bGwgPyBzdGFjazEucGFnZUluZGV4IDogc3RhY2sxKSxcIi1cIiwxLHtcIm5hbWVcIjpcIm1hdGhcIixcImhhc2hcIjp7fSxcImRhdGFcIjpkYXRhfSkpXG4gICAgKyBcIlxcXCJcXHJcXG4gICAgICAgICAgICB0YWJpbmRleD1cXFwiLTFcXFwiPlxcclxcbiAgICAgICAgICAgIDxpIGNsYXNzPVxcXCJndWktaWNvbiBndWktaWNvbi1wcmV2aW91c1xcXCI+PC9pPlxcclxcbiAgICAgICAgPC9idXR0b24+XFxyXFxuICAgIDwvZGl2PlxcclxcbiAgICA8ZGl2IGNsYXNzPVxcXCJndWkgcGFnZXItaW5wdXQtY29udGFpbmVyIGlucHV0XFxcIj5cXHJcXG4gICAgICAgIDxzcGFuIGNsYXNzPVxcXCJndWkgbS1yLTVcXFwiPiBQYWdlIDwvc3Bhbj5cXHJcXG4gICAgICAgIDxpbnB1dCBjbGFzcz1cXFwiZ3VpIHBhZ2VyLWlucHV0IHctMjUgcC0wIG0tci01XFxcIiBhcmlhLWxhYmVsPVxcXCIxXFxcIiB2YWx1ZT1cXFwiXCJcbiAgICArIGFsaWFzMihhbGlhczMoKChzdGFjazEgPSAoZGVwdGgwICE9IG51bGwgPyBkZXB0aDAucGFnaW5hdGlvbkRhdGEgOiBkZXB0aDApKSAhPSBudWxsID8gc3RhY2sxLnBhZ2VJbmRleCA6IHN0YWNrMSksIGRlcHRoMCkpXG4gICAgKyBcIlxcXCIgdHlwZT1cXFwidGV4dFxcXCIgcGxhY2Vob2xkZXI9XFxcIlBhZ2UgTnVtYmVyIC4uLlxcXCI+XFxyXFxuICAgICAgICA8c3BhbiBjbGFzcz1cXFwibm8tb2YtcGFnZXMtc2NhblxcXCIgZGF0YS1udW1iZXItb2YtcGFnZXM9XFxcIlwiXG4gICAgKyBhbGlhczIoYWxpYXMzKCgoc3RhY2sxID0gKGRlcHRoMCAhPSBudWxsID8gZGVwdGgwLnBhZ2luYXRpb25EYXRhIDogZGVwdGgwKSkgIT0gbnVsbCA/IHN0YWNrMS5ub09mUGFnZXMgOiBzdGFjazEpLCBkZXB0aDApKVxuICAgICsgXCJcXFwiPiBvZiBcIlxuICAgICsgYWxpYXMyKGFsaWFzMygoKHN0YWNrMSA9IChkZXB0aDAgIT0gbnVsbCA/IGRlcHRoMC5wYWdpbmF0aW9uRGF0YSA6IGRlcHRoMCkpICE9IG51bGwgPyBzdGFjazEubm9PZlBhZ2VzIDogc3RhY2sxKSwgZGVwdGgwKSlcbiAgICArIFwiPC9zcGFuPlxcclxcbiAgICA8L2Rpdj5cXHJcXG4gICAgPGRpdiBjbGFzcz1cXFwiZ3VpIG1pbmkgY29tcGFjdCBpY29uIGJ1dHRvbnNcXFwiPlxcclxcbiAgICAgICAgPGJ1dHRvbiBjbGFzcz1cXFwiZ3VpIG1pbmkgY29tcGFjdCBpY29uIGJ1dHRvbiBuZXh0TGlua1xcXCIgYXJpYS1oaWRkZW49XFxcInRydWVcXFwiIFwiXG4gICAgKyBhbGlhczIoX19kZWZhdWx0KHJlcXVpcmUoXCJDOlxcXFxVc2Vyc1xcXFxyb3VzdHVyZ1xcXFxTb3VyY2VcXFxcUmVwb3NcXFxcU2VhcmNoTWFzdGVyXFxcXEdyaWRvb1xcXFxzcmNcXFxcaGJzXFxcXGhlbHBlcnNcXFxcRGlzYWJsZWQudHNcIikpLmNhbGwoYWxpYXMxLCgoc3RhY2sxID0gKGRlcHRoMCAhPSBudWxsID8gZGVwdGgwLnBhZ2luYXRpb25EYXRhIDogZGVwdGgwKSkgIT0gbnVsbCA/IHN0YWNrMS5uZXh0UGFnZUxpbmtEaXNhYmxlZCA6IHN0YWNrMSkse1wibmFtZVwiOlwiRGlzYWJsZWRcIixcImhhc2hcIjp7fSxcImRhdGFcIjpkYXRhfSkpXG4gICAgKyBcIlxcclxcbiAgICAgICAgICAgIGFyaWEtbGFiZWw9XFxcIkdvIHRvIHRoZSBuZXh0IHBhZ2VcXFwiIHRpdGxlPVxcXCJHbyB0byB0aGUgbmV4dCBwYWdlXFxcIiBjbGFzcz1cXFwiZ3VpIGJ1dHRvblxcXCIgZGF0YS1wYWdlPVxcXCJcIlxuICAgICsgYWxpYXMyKF9fZGVmYXVsdChyZXF1aXJlKFwiQzpcXFxcVXNlcnNcXFxccm91c3R1cmdcXFxcU291cmNlXFxcXFJlcG9zXFxcXFNlYXJjaE1hc3RlclxcXFxHcmlkb29cXFxcc3JjXFxcXGhic1xcXFxoZWxwZXJzXFxcXG1hdGgudHNcIikpLmNhbGwoYWxpYXMxLCgoc3RhY2sxID0gKGRlcHRoMCAhPSBudWxsID8gZGVwdGgwLnBhZ2luYXRpb25EYXRhIDogZGVwdGgwKSkgIT0gbnVsbCA/IHN0YWNrMS5wYWdlSW5kZXggOiBzdGFjazEpLFwiK1wiLDEse1wibmFtZVwiOlwibWF0aFwiLFwiaGFzaFwiOnt9LFwiZGF0YVwiOmRhdGF9KSlcbiAgICArIFwiXFxcIlxcclxcbiAgICAgICAgICAgIHRhYmluZGV4PVxcXCItMVxcXCI+XFxyXFxuICAgICAgICAgICAgPGkgY2xhc3M9XFxcImd1aS1pY29uIGd1aS1pY29uLW5leHRcXFwiPjwvaT5cXHJcXG4gICAgICAgIDwvYnV0dG9uPlxcclxcbiAgICAgICAgPGJ1dHRvbiBjbGFzcz1cXFwiZ3VpIG1pbmkgY29tcGFjdCBpY29uIGJ1dHRvbiBsYXN0TGlua1xcXCIgYXJpYS1oaWRkZW49XFxcInRydWVcXFwiIFwiXG4gICAgKyBhbGlhczIoX19kZWZhdWx0KHJlcXVpcmUoXCJDOlxcXFxVc2Vyc1xcXFxyb3VzdHVyZ1xcXFxTb3VyY2VcXFxcUmVwb3NcXFxcU2VhcmNoTWFzdGVyXFxcXEdyaWRvb1xcXFxzcmNcXFxcaGJzXFxcXGhlbHBlcnNcXFxcRGlzYWJsZWQudHNcIikpLmNhbGwoYWxpYXMxLCgoc3RhY2sxID0gKGRlcHRoMCAhPSBudWxsID8gZGVwdGgwLnBhZ2luYXRpb25EYXRhIDogZGVwdGgwKSkgIT0gbnVsbCA/IHN0YWNrMS5sYXN0UGFnZUxpbmtEaXNhYmxlZCA6IHN0YWNrMSkse1wibmFtZVwiOlwiRGlzYWJsZWRcIixcImhhc2hcIjp7fSxcImRhdGFcIjpkYXRhfSkpXG4gICAgKyBcIlxcclxcbiAgICAgICAgICAgIGFyaWEtbGFiZWw9XFxcIkdvIHRvIHRoZSBsYXN0IHBhZ2VcXFwiIHRpdGxlPVxcXCJHbyB0byB0aGUgbGFzdCBwYWdlXFxcIiBkYXRhLXBhZ2U9XFxcIlwiXG4gICAgKyBhbGlhczIoYWxpYXMzKCgoc3RhY2sxID0gKGRlcHRoMCAhPSBudWxsID8gZGVwdGgwLnBhZ2luYXRpb25EYXRhIDogZGVwdGgwKSkgIT0gbnVsbCA/IHN0YWNrMS5ub09GcGFnZXMgOiBzdGFjazEpLCBkZXB0aDApKVxuICAgICsgXCJcXFwiIHRhYmluZGV4PVxcXCItMVxcXCI+XFxyXFxuICAgICAgICAgICAgPGkgY2xhc3M9XFxcImd1aS1pY29uIGd1aS1pY29uLWZhc3QtZm9yd2FyZFxcXCI+PC9pPlxcclxcbiAgICAgICAgPC9idXR0b24+XFxyXFxuICAgIDwvZGl2PlxcclxcbjwvZGl2PlxcclxcbjxkaXYgY2xhc3M9XFxcImNvbC1tZC0zIGd1aSBndWktYm9keS0yIHJpZ2h0IHRleHQtcmlnaHRcXFwiPlxcclxcbiAgICA8c2VsZWN0IGNsYXNzPVxcXCJndWkgcGFnZVNpemVTZWxlY3RvclxcXCI+XFxyXFxuXCJcbiAgICArICgoc3RhY2sxID0gaGVscGVycy5lYWNoLmNhbGwoYWxpYXMxLCgoc3RhY2sxID0gKGRlcHRoMCAhPSBudWxsID8gZGVwdGgwLnBhZ2luYXRpb25EYXRhIDogZGVwdGgwKSkgIT0gbnVsbCA/IHN0YWNrMS5wYWdlU2l6ZXMgOiBzdGFjazEpLHtcIm5hbWVcIjpcImVhY2hcIixcImhhc2hcIjp7fSxcImZuXCI6Y29udGFpbmVyLnByb2dyYW0oMSwgZGF0YSwgMCwgYmxvY2tQYXJhbXMsIGRlcHRocyksXCJpbnZlcnNlXCI6Y29udGFpbmVyLm5vb3AsXCJkYXRhXCI6ZGF0YX0pKSAhPSBudWxsID8gc3RhY2sxIDogXCJcIilcbiAgICArIFwiICAgIDwvc2VsZWN0PlxcclxcbiAgICA8c3BhbiBjbGFzcz1cXFwiZ3VpIG0tbC0xMFxcXCI+XCJcbiAgICArIGFsaWFzMihhbGlhczMoKChzdGFjazEgPSAoKHN0YWNrMSA9IChkZXB0aDAgIT0gbnVsbCA/IGRlcHRoMC5wYWdpbmF0aW9uRGF0YSA6IGRlcHRoMCkpICE9IG51bGwgPyBzdGFjazEucmFuZ2UgOiBzdGFjazEpKSAhPSBudWxsID8gc3RhY2sxLm1pbiA6IHN0YWNrMSksIGRlcHRoMCkpXG4gICAgKyBcIiAtIFwiXG4gICAgKyBhbGlhczIoYWxpYXMzKCgoc3RhY2sxID0gKChzdGFjazEgPSAoZGVwdGgwICE9IG51bGwgPyBkZXB0aDAucGFnaW5hdGlvbkRhdGEgOiBkZXB0aDApKSAhPSBudWxsID8gc3RhY2sxLnJhbmdlIDogc3RhY2sxKSkgIT0gbnVsbCA/IHN0YWNrMS5tYXggOiBzdGFjazEpLCBkZXB0aDApKVxuICAgICsgXCIgb2YgXCJcbiAgICArIGFsaWFzMihhbGlhczMoKChzdGFjazEgPSAoZGVwdGgwICE9IG51bGwgPyBkZXB0aDAucGFnaW5hdGlvbkRhdGEgOiBkZXB0aDApKSAhPSBudWxsID8gc3RhY2sxLnRvdGFsQ291bnQgOiBzdGFjazEpLCBkZXB0aDApKVxuICAgICsgXCIgaXRlbXM8L3NwYW4+XFxyXFxuPC9kaXY+XFxyXFxuPGRpdiBjbGFzcz1cXFwiZ3VpIGNsZWFyXFxcIj48L2Rpdj5cIjtcbn0sXCJ1c2VQYXJ0aWFsXCI6dHJ1ZSxcInVzZURhdGFcIjp0cnVlLFwidXNlRGVwdGhzXCI6dHJ1ZX0pO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2hicy9ncmlkLWZvb3Rlci5oYnNcbi8vIG1vZHVsZSBpZCA9IDdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEiLCJ2YXIgSGFuZGxlYmFycyA9IHJlcXVpcmUoXCJoYW5kbGViYXJzXCIpO1xuZnVuY3Rpb24gX19kZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIChvYmouX19lc01vZHVsZSA/IG9ialtcImRlZmF1bHRcIl0gOiBvYmopOyB9XG5tb2R1bGUuZXhwb3J0cyA9IChIYW5kbGViYXJzW1wiZGVmYXVsdFwiXSB8fCBIYW5kbGViYXJzKS50ZW1wbGF0ZSh7XCIxXCI6ZnVuY3Rpb24oY29udGFpbmVyLGRlcHRoMCxoZWxwZXJzLHBhcnRpYWxzLGRhdGEpIHtcbiAgICB2YXIgYWxpYXMxPWNvbnRhaW5lci5sYW1iZGEsIGFsaWFzMj1jb250YWluZXIuZXNjYXBlRXhwcmVzc2lvbjtcblxuICByZXR1cm4gXCIgICAgICAgICAgICAgICAgPHRyIGRhdGEtaGVhZGVyLWlkPVxcXCJcIlxuICAgICsgYWxpYXMyKGFsaWFzMSgoZGVwdGgwICE9IG51bGwgPyBkZXB0aDAubmFtZSA6IGRlcHRoMCksIGRlcHRoMCkpXG4gICAgKyBcIlxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8dGQ+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XFxcImNoZWNrYm94XFxcIiBjbGFzcz1cXFwiY29sLXNldHRpbmdzLWhpZGRlbi1jaGVja2JveFxcXCIgdmFsdWU9XFxcIlwiXG4gICAgKyBhbGlhczIoYWxpYXMxKChkZXB0aDAgIT0gbnVsbCA/IGRlcHRoMC5pZCA6IGRlcHRoMCksIGRlcHRoMCkpXG4gICAgKyBcIlxcXCIgXCJcbiAgICArIGFsaWFzMihfX2RlZmF1bHQocmVxdWlyZShcIkM6XFxcXFVzZXJzXFxcXHJvdXN0dXJnXFxcXFNvdXJjZVxcXFxSZXBvc1xcXFxTZWFyY2hNYXN0ZXJcXFxcR3JpZG9vXFxcXHNyY1xcXFxoYnNcXFxcaGVscGVyc1xcXFxDaGVja2VkLnRzXCIpKS5jYWxsKGRlcHRoMCAhPSBudWxsID8gZGVwdGgwIDogKGNvbnRhaW5lci5udWxsQ29udGV4dCB8fCB7fSksKGRlcHRoMCAhPSBudWxsID8gZGVwdGgwLmhpZGRlbiA6IGRlcHRoMCkse1wibmFtZVwiOlwiQ2hlY2tlZFwiLFwiaGFzaFwiOnt9LFwiZGF0YVwiOmRhdGF9KSlcbiAgICArIFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPC90ZD5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDx0ZD5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWw+XCJcbiAgICArIGFsaWFzMihhbGlhczEoKGRlcHRoMCAhPSBudWxsID8gZGVwdGgwLm5hbWUgOiBkZXB0aDApLCBkZXB0aDApKVxuICAgICsgXCI8L2xhYmVsPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPC90ZD5cXHJcXG4gICAgICAgICAgICAgICAgPC90cj5cXHJcXG5cIjtcbn0sXCJjb21waWxlclwiOls3LFwiPj0gNC4wLjBcIl0sXCJtYWluXCI6ZnVuY3Rpb24oY29udGFpbmVyLGRlcHRoMCxoZWxwZXJzLHBhcnRpYWxzLGRhdGEpIHtcbiAgICB2YXIgc3RhY2sxO1xuXG4gIHJldHVybiBcIjxkaXYgY2xhc3M9XFxcImd1aSBncmV5IGNhcmRcXFwiIHN0eWxlPVxcXCJoZWlnaHQ6IDEwMCU7d2lkdGg6IGF1dG87cGFkZGluZzogMC44ZW07b3ZlcmZsb3c6aGlkZGVuO1xcXCI+XFxyXFxuICAgIDxkaXYgY2xhc3M9XFxcImNvbC1zZXR0aW5ncy1oZWFkZXJcXFwiIHN0eWxlPVxcXCJ3aWR0aDogMTAwJVxcXCI+XFxyXFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJndWkgbWluaSBmbHVpZCBpY29uIGlucHV0XFxcIj5cXHJcXG4gICAgICAgICAgICA8aW5wdXQgY2xhc3M9XFxcImNvbC1zZXR0aW5ncy1maWx0ZXJcXFwiIHR5cGU9XFxcInRleHRcXFwiIHBsYWNlaG9sZGVyPVxcXCJTZWFyY2ggZmlsdGVyLi4uXFxcIj5cXHJcXG4gICAgICAgICAgICA8aSBjbGFzcz1cXFwic2VhcmNoIGljb25cXFwiPjwvaT5cXHJcXG4gICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwiZ3VpIGJ1dHRvbnNcXFwiPlxcclxcbiAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XFxcImd1aSBiYXNpYyBidXR0b24gc2hvdy1hbGwtY29sdW1uXFxcIj5TaG93IEFsbDwvYnV0dG9uPlxcclxcbiAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XFxcImd1aSBiYXNpYyBidXR0b24gaGlkZS1hbGwtY29sdW1uXFxcIj5IaWRlIEFsbDwvYnV0dG9uPlxcclxcbiAgICAgICAgPC9kaXY+XFxyXFxuICAgIDwvZGl2PlxcclxcbiAgICA8ZGl2IGNsYXNzPVxcXCJjb2wtc2V0dGluZ3MtdGFibGVcXFwiIHN0eWxlPVxcXCJvdmVyZmxvdzphdXRvO3BhZGRpbmc6MC41ZW07XFxcIj5cXHJcXG4gICAgICAgIDx0YWJsZSBjbGFzcz1cXFwiZ3VpIHNtYWxsIHZlcnkgYm9yZGVyLWxlc3MgY29tcGFjdCB0YWJsZVxcXCI+XFxyXFxuICAgICAgICAgICAgPHRib2R5PlxcclxcblwiXG4gICAgKyAoKHN0YWNrMSA9IGhlbHBlcnMuZWFjaC5jYWxsKGRlcHRoMCAhPSBudWxsID8gZGVwdGgwIDogKGNvbnRhaW5lci5udWxsQ29udGV4dCB8fCB7fSksKGRlcHRoMCAhPSBudWxsID8gZGVwdGgwLmNvbHVtbnMgOiBkZXB0aDApLHtcIm5hbWVcIjpcImVhY2hcIixcImhhc2hcIjp7fSxcImZuXCI6Y29udGFpbmVyLnByb2dyYW0oMSwgZGF0YSwgMCksXCJpbnZlcnNlXCI6Y29udGFpbmVyLm5vb3AsXCJkYXRhXCI6ZGF0YX0pKSAhPSBudWxsID8gc3RhY2sxIDogXCJcIilcbiAgICArIFwiICAgICAgICAgICAgPC90Ym9keT5cXHJcXG4gICAgICAgIDwvdGFibGU+XFxyXFxuICAgIDwvZGl2PlxcclxcbjwvZGl2PlwiO1xufSxcInVzZURhdGFcIjp0cnVlfSk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvaGJzL2dyaWQtbWFuYWdlLWNvbHVtbnMuaGJzXG4vLyBtb2R1bGUgaWQgPSA4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIiwiY29uc3QgbWF0aCA9IChsdmFsdWU6IG51bWJlciwgb3BlcmF0b3I6IHN0cmluZywgcnZhbHVlOiBudW1iZXIsIG9wdGlvbnMpOiBudW1iZXIgPT4ge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBcIitcIjogbHZhbHVlICsgcnZhbHVlLFxyXG4gICAgICAgIFwiLVwiOiBsdmFsdWUgLSBydmFsdWUsXHJcbiAgICAgICAgXCIqXCI6IGx2YWx1ZSAqIHJ2YWx1ZSxcclxuICAgICAgICBcIi9cIjogbHZhbHVlIC8gcnZhbHVlLFxyXG4gICAgICAgIFwiJVwiOiBsdmFsdWUgJSBydmFsdWUsXHJcbiAgICB9W29wZXJhdG9yXTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IG1hdGg7XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy90c2xpbnQtbG9hZGVyPz9yZWYtLTEhLi9zcmMvaGJzL2hlbHBlcnMvbWF0aC50cyIsInZhciBIYW5kbGViYXJzID0gcmVxdWlyZShcImhhbmRsZWJhcnNcIik7XG5mdW5jdGlvbiBfX2RlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgKG9iai5fX2VzTW9kdWxlID8gb2JqW1wiZGVmYXVsdFwiXSA6IG9iaik7IH1cbm1vZHVsZS5leHBvcnRzID0gKEhhbmRsZWJhcnNbXCJkZWZhdWx0XCJdIHx8IEhhbmRsZWJhcnMpLnRlbXBsYXRlKHtcIjFcIjpmdW5jdGlvbihjb250YWluZXIsZGVwdGgwLGhlbHBlcnMscGFydGlhbHMsZGF0YSkge1xuICAgIHZhciBzdGFjazE7XG5cbiAgcmV0dXJuIFwiPHRyIGNsYXNzPVxcXCJtYWluUm93XFxcIj5cXHJcXG4gICAgPHRkIGNsYXNzPVxcXCJleHBhbnNpb25BcnJvd3NcXFwiIHN0eWxlPVxcXCJkaXNwbGF5OmZsZXg7anVzdGlmeS1jb250ZW50OmNlbnRlcjtcXFwiPlxcclxcbiAgICAgICAgPGkgY2xhc3M9XFxcImd1aSBndWktaWNvbiBndWktaWNvbi1jaGV2cm9uLWRvd24gZXhwYW5kRGV0YWlsc1Jvd0ljb24gY3Vyc29yLXBvaW50ZXJcXFwiIGFyaWEtaGlkZGVuPVxcXCJ0cnVlXFxcIj48L2k+XFxyXFxuICAgICAgICA8aSBjbGFzcz1cXFwiZ3VpIGd1aS1pY29uIGd1aS1pY29uLWNoZXZyb24tdXAgQ29sbGFwc2VEZXRhaWxzUm93SWNvbiBjdXJzb3ItcG9pbnRlciBndWktaGlkZGVuXFxcIiBhcmlhLWhpZGRlbj1cXFwidHJ1ZVxcXCI+PC9pPlxcclxcbiAgICA8L3RkPlxcclxcbiAgICA8dGQ+XFxyXFxuICAgICAgICA8aW5wdXQgdHlwZT1cXFwiY2hlY2tib3hcXFwiPlxcclxcbiAgICA8L3RkPlxcclxcblwiXG4gICAgKyAoKHN0YWNrMSA9IGhlbHBlcnMuZWFjaC5jYWxsKGRlcHRoMCAhPSBudWxsID8gZGVwdGgwIDogKGNvbnRhaW5lci5udWxsQ29udGV4dCB8fCB7fSksKGRlcHRoMCAhPSBudWxsID8gZGVwdGgwLm1haW5Sb3dDb2xBcnJheSA6IGRlcHRoMCkse1wibmFtZVwiOlwiZWFjaFwiLFwiaGFzaFwiOnt9LFwiZm5cIjpjb250YWluZXIucHJvZ3JhbSgyLCBkYXRhLCAwKSxcImludmVyc2VcIjpjb250YWluZXIubm9vcCxcImRhdGFcIjpkYXRhfSkpICE9IG51bGwgPyBzdGFjazEgOiBcIlwiKVxuICAgICsgXCI8L3RyPlxcclxcblwiXG4gICAgKyAoKHN0YWNrMSA9IGNvbnRhaW5lci5pbnZva2VQYXJ0aWFsKHJlcXVpcmUoXCJDOlxcXFxVc2Vyc1xcXFxyb3VzdHVyZ1xcXFxTb3VyY2VcXFxcUmVwb3NcXFxcU2VhcmNoTWFzdGVyXFxcXEdyaWRvb1xcXFxzcmNcXFxcaGJzXFxcXGdyaWQtZGV0YWlscy1yb3cuaGJzXCIpLGRlcHRoMCx7XCJuYW1lXCI6XCJncmlkLWRldGFpbHMtcm93XCIsXCJkYXRhXCI6ZGF0YSxcImhlbHBlcnNcIjpoZWxwZXJzLFwicGFydGlhbHNcIjpwYXJ0aWFscyxcImRlY29yYXRvcnNcIjpjb250YWluZXIuZGVjb3JhdG9yc30pKSAhPSBudWxsID8gc3RhY2sxIDogXCJcIilcbiAgICArIFwiIFwiO1xufSxcIjJcIjpmdW5jdGlvbihjb250YWluZXIsZGVwdGgwLGhlbHBlcnMscGFydGlhbHMsZGF0YSkge1xuICAgIHZhciBzdGFjazE7XG5cbiAgcmV0dXJuIFwiICAgIDx0ZD5cIlxuICAgICsgKChzdGFjazEgPSBjb250YWluZXIubGFtYmRhKChkZXB0aDAgIT0gbnVsbCA/IGRlcHRoMC5jb2x1bW5WYWx1ZSA6IGRlcHRoMCksIGRlcHRoMCkpICE9IG51bGwgPyBzdGFjazEgOiBcIlwiKVxuICAgICsgXCI8L3RkPlxcclxcblwiO1xufSxcImNvbXBpbGVyXCI6WzcsXCI+PSA0LjAuMFwiXSxcIm1haW5cIjpmdW5jdGlvbihjb250YWluZXIsZGVwdGgwLGhlbHBlcnMscGFydGlhbHMsZGF0YSkge1xuICAgIHZhciBzdGFjazE7XG5cbiAgcmV0dXJuICgoc3RhY2sxID0gaGVscGVycy5lYWNoLmNhbGwoZGVwdGgwICE9IG51bGwgPyBkZXB0aDAgOiAoY29udGFpbmVyLm51bGxDb250ZXh0IHx8IHt9KSwoZGVwdGgwICE9IG51bGwgPyBkZXB0aDAubWFpblJvd0FycmF5IDogZGVwdGgwKSx7XCJuYW1lXCI6XCJlYWNoXCIsXCJoYXNoXCI6e30sXCJmblwiOmNvbnRhaW5lci5wcm9ncmFtKDEsIGRhdGEsIDApLFwiaW52ZXJzZVwiOmNvbnRhaW5lci5ub29wLFwiZGF0YVwiOmRhdGF9KSkgIT0gbnVsbCA/IHN0YWNrMSA6IFwiXCIpO1xufSxcInVzZVBhcnRpYWxcIjp0cnVlLFwidXNlRGF0YVwiOnRydWV9KTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9oYnMvZ3JpZC1tYWluLXJvdy5oYnNcbi8vIG1vZHVsZSBpZCA9IDEwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIiwiaW1wb3J0ICogYXMgalF1ZXJ5IGZyb20gXCJqcXVlcnlcIjtcbmltcG9ydCB7IENvbmZpZ1N0b3JlIH0gZnJvbSBcIi4uL2NvbmZpZy9Db25maWdTdG9yZVwiO1xuaW1wb3J0IHsgQ29sU2V0dGluZ3NIYW5kbGVyIH0gZnJvbSBcIi4uL2V2ZW50SGFuZGxlcnMvQ29sU2V0dGluZ3NIYW5kbGVyXCI7XG5pbXBvcnQgeyBJUGFnaW5hdGlvbiB9IGZyb20gXCIuLi9tb2RlbHMvSVBhZ2luYXRpb25cIjtcbmltcG9ydCB7IElQYWdpbmF0aW9uSW5wdXQgfSBmcm9tIFwiLi4vbW9kZWxzL0lQYWdpbmF0aW9uSW5wdXRcIjtcbmltcG9ydCB7IFBhZ2VyIH0gZnJvbSBcIi4uL3BhZ2luYXRpb24vUGFnZXJcIjtcbmltcG9ydCB7IERldGFpbHNSb3dIYW5kbGVyIH0gZnJvbSBcIi4vLi4vZXZlbnRIYW5kbGVycy9EZXRhaWxzUm93SGFuZGxlclwiO1xuaW1wb3J0IHsgRmlsdGVyQ2xpY2tIYW5kbGVyIH0gZnJvbSBcIi4vLi4vZXZlbnRIYW5kbGVycy9GaWx0ZXJDbGlja0hhbmRsZXJcIjtcbmltcG9ydCB7IEhhbmRsZXJOYW1lcyB9IGZyb20gXCIuLy4uL2V2ZW50SGFuZGxlcnMvSGFuZGxlck5hbWVzXCI7XG5pbXBvcnQgeyBIZWFkZXJDbGlja0hhbmRsZXIgfSBmcm9tIFwiLi8uLi9ldmVudEhhbmRsZXJzL0hlYWRlckNsaWNrSGFuZGxlclwiO1xuaW1wb3J0IHsgSUV2ZW50SGFuZGxlciB9IGZyb20gXCIuLy4uL2V2ZW50SGFuZGxlcnMvSUV2ZW50SGFuZGxlclwiO1xuaW1wb3J0IHsgSUhhbmRsZXJDaGFpbiB9IGZyb20gXCIuLy4uL2V2ZW50SGFuZGxlcnMvSUhhbmRsZXJDaGFpblwiO1xuaW1wb3J0IHsgUGFnZVNlYXJjaEhhbmRsZXIgfSBmcm9tIFwiLi8uLi9ldmVudEhhbmRsZXJzL1BhZ2VTZWFyY2hDbGlja0hhbmRsZXJcIjtcbmltcG9ydCB7IFNjcm9sbEhhbmRsZXIgfSBmcm9tIFwiLi8uLi9ldmVudEhhbmRsZXJzL1Njcm9sbEhhbmRsZXJcIjtcbmltcG9ydCB7IFRvZ2dsZUNvbHVtbkhhbmRsZXIgfSBmcm9tIFwiLi8uLi9ldmVudEhhbmRsZXJzL1RvZ2dsZUNvbHVtbkhhbmRsZXJcIjtcbmltcG9ydCB7IEZpbHRlckFjdGlvblR5cGUgfSBmcm9tIFwiLi8uLi9tb2RlbHMvRmlsdGVyQWN0aW9uVHlwZVwiO1xuaW1wb3J0IHsgSUNvbHVtbiB9IGZyb20gXCIuLy4uL21vZGVscy9JQ29sdW1uXCI7XG5pbXBvcnQgeyBPcmRlckRpcmVjdGlvbiB9IGZyb20gXCIuLy4uL21vZGVscy9PcmRlckRpcmVjdGlvblwiO1xuaW1wb3J0IHsgR3JpZFRlbXBsYXRlU2VydmljZSB9IGZyb20gXCIuLy4uL3NlcnZpY2VzL0dyaWRUZW1wbGF0ZVNlcnZpY2VcIjtcbmltcG9ydCB7IENvbW1vblV0aWwgfSBmcm9tIFwiLi8uLi91dGlsL0NvbHVtblV0aWxcIjtcbmltcG9ydCB7IElHcmlkT3B0aW9ucyB9IGZyb20gXCIuL0lHcmlkT3B0aW9uc1wiO1xuXG5leHBvcnQgY2xhc3MgR3JpZDxUPiB7XG5cbiAgICBwcml2YXRlIGhhbmRsZUNoYWluOiBBcnJheTxJSGFuZGxlckNoYWluPFQ+PjtcbiAgICBwcml2YXRlIGdyaWRUZW1wbGF0ZVNlcnZpY2U6IEdyaWRUZW1wbGF0ZVNlcnZpY2U8VD47XG4gICAgcHJpdmF0ZSBjb25maWdTdG9yZTogQ29uZmlnU3RvcmU8VD47XG5cbiAgICBjb25zdHJ1Y3RvcihvcHRpb25zOiBJR3JpZE9wdGlvbnM8VD4pIHtcbiAgICAgICAgdGhpcy5jb25maWdTdG9yZSA9IG5ldyBDb25maWdTdG9yZTxUPihvcHRpb25zKTtcbiAgICAgICAgdGhpcy5ncmlkVGVtcGxhdGVTZXJ2aWNlID0gbmV3IEdyaWRUZW1wbGF0ZVNlcnZpY2UodGhpcy5jb25maWdTdG9yZSk7XG4gICAgICAgIHRoaXMuSW5pdEhhbmRsZXJzKCk7XG4gICAgfVxuXG4gICAgcHVibGljIGJpbmREYXRhID0gKGRhdGE6IFRbXSwgcGFnaW5hdGlvbklucHV0PzogSVBhZ2luYXRpb25JbnB1dCk6IHZvaWQgPT4ge1xuICAgICAgICBjb25zdCBmaXJzdEluZGV4ID0gMDtcbiAgICAgICAgbGV0IGxhc3RJbmRleCA9IHRoaXMuY29uZmlnU3RvcmUuT3B0aW9ucy5jaHVua1NpemUgKyB0aGlzLmdldEluaXRpYWxSb3dDb3VudCgpO1xuICAgICAgICBsYXN0SW5kZXggPSBsYXN0SW5kZXggPiBkYXRhLmxlbmd0aCA/IGRhdGEubGVuZ3RoIC0gMSA6IGxhc3RJbmRleDtcbiAgICAgICAgUGFnZXIuQ2FsY3VsYXRlUGFnaW5hdGlvbkRhdGEocGFnaW5hdGlvbklucHV0KTtcbiAgICAgICAgY29uc3QgZ3JpZENvbnRlbnQ6IHN0cmluZyA9IHRoaXMuZ3JpZFRlbXBsYXRlU2VydmljZS5HZXRGaXJzdFRlbXBsYXRlKGRhdGEsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaXJzdEluZGV4LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFzdEluZGV4KTtcbiAgICAgICAgdGhpcy5jb25maWdTdG9yZS5PcHRpb25zLmNvbnRhaW5lckVsZW1lbnQuaW5uZXJIVE1MID0gZ3JpZENvbnRlbnQ7XG4gICAgICAgIC8vIEhhdmUgdG8gYmluZCBTY3JvbGwgSGFuZGxlciBBZnRlciBET00gaGFzIGJlZW4gY3JlYXRlZFxuICAgICAgICBjb25zdCBzY3JvbGxIYW5kbGVyID0gbmV3IFNjcm9sbEhhbmRsZXI8VD4odGhpcy5jb25maWdTdG9yZSwgdGhpcy5ncmlkVGVtcGxhdGVTZXJ2aWNlKTtcbiAgICAgICAgc2Nyb2xsSGFuZGxlci5SZWdpc3RlckRvbUhhbmRsZXIoKTtcbiAgICAgICAgdGhpcy5oYW5kbGVDaGFpbi5wdXNoKHtcbiAgICAgICAgICAgIGhhbmRsZXI6IHNjcm9sbEhhbmRsZXIsXG4gICAgICAgICAgICBuYW1lOiBIYW5kbGVyTmFtZXMuU2Nyb2xsLFxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGdldEluaXRpYWxSb3dDb3VudCA9ICgpOiBudW1iZXIgPT4ge1xuICAgICAgICByZXR1cm4gMjU7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBJbml0SGFuZGxlcnMgPSAoKTogdm9pZCA9PiB7XG4gICAgICAgIGNvbnN0IHBhcmVudEVsZW1lbnQgPSBqUXVlcnkodGhpcy5jb25maWdTdG9yZS5PcHRpb25zLmNvbnRhaW5lckVsZW1lbnQpO1xuICAgICAgICB0aGlzLmhhbmRsZUNoYWluID0gW107XG4gICAgICAgIHRoaXMuaGFuZGxlQ2hhaW4ucHVzaCh7XG4gICAgICAgICAgICBoYW5kbGVyOiBuZXcgRGV0YWlsc1Jvd0hhbmRsZXI8VD4ocGFyZW50RWxlbWVudCksXG4gICAgICAgICAgICBuYW1lOiBIYW5kbGVyTmFtZXMuRGV0YWlsc1JvdyxcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuaGFuZGxlQ2hhaW4ucHVzaCh7XG4gICAgICAgICAgICBoYW5kbGVyOiAgbmV3IEZpbHRlckNsaWNrSGFuZGxlcjxUPih0aGlzLmNvbmZpZ1N0b3JlLCBwYXJlbnRFbGVtZW50KSxcbiAgICAgICAgICAgIG5hbWU6IEhhbmRsZXJOYW1lcy5GaWx0ZXJBY3Rpb24sXG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLmhhbmRsZUNoYWluLnB1c2goe1xuICAgICAgICAgICAgaGFuZGxlcjogbmV3IEhlYWRlckNsaWNrSGFuZGxlcjxUPih0aGlzLmNvbmZpZ1N0b3JlLCBwYXJlbnRFbGVtZW50KSxcbiAgICAgICAgICAgIG5hbWU6IEhhbmRsZXJOYW1lcy5IZWFkZXJDbGljayxcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuaGFuZGxlQ2hhaW4ucHVzaCh7XG4gICAgICAgICAgICBoYW5kbGVyOiBuZXcgUGFnZVNlYXJjaEhhbmRsZXI8VD4odGhpcy5jb25maWdTdG9yZSwgcGFyZW50RWxlbWVudCksXG4gICAgICAgICAgICBuYW1lOiBIYW5kbGVyTmFtZXMuUGFnZVNlYXJjaCxcbiAgICAgICAgfSk7XG4gICAgICAgIGNvbnN0IHRvZ2dsZUhhbmRsZXIgPSBuZXcgVG9nZ2xlQ29sdW1uSGFuZGxlcih0aGlzLmNvbmZpZ1N0b3JlLCBwYXJlbnRFbGVtZW50KTtcbiAgICAgICAgdGhpcy5oYW5kbGVDaGFpbi5wdXNoKHtcbiAgICAgICAgICAgIGhhbmRsZXI6IG5ldyBDb2xTZXR0aW5nc0hhbmRsZXI8VD4ocGFyZW50RWxlbWVudCwgdG9nZ2xlSGFuZGxlciksXG4gICAgICAgICAgICBuYW1lOiBIYW5kbGVyTmFtZXMuQ29sU2V0dGluZ3MsXG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLmhhbmRsZUNoYWluLmZvckVhY2goKHZhbHVlOiBJSGFuZGxlckNoYWluPFQ+KTogdm9pZCA9PiB7XG4gICAgICAgICAgICB2YWx1ZS5oYW5kbGVyLlJlZ2lzdGVyRG9tSGFuZGxlcigpO1xuICAgICAgICB9KTtcbiAgICAgICAgalF1ZXJ5KHdpbmRvdykucmVzaXplKCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuaGFuZGxlQ2hhaW4uZm9yRWFjaCgodmFsdWU6IElIYW5kbGVyQ2hhaW48VD4pOiB2b2lkID0+IHtcbiAgICAgICAgICAgICAgICB2YWx1ZS5oYW5kbGVyLm9uUmVzaXplKCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgICAgIGpRdWVyeShkb2N1bWVudCkuY2xpY2soKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICB0aGlzLmhhbmRsZUNoYWluLmZvckVhY2goKHZhbHVlOiBJSGFuZGxlckNoYWluPFQ+KTogdm9pZCA9PiB7XG4gICAgICAgICAgICAgICAgdmFsdWUuaGFuZGxlci5vbkRvY3VtZW50Q2xpY2soZXZlbnQpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgfSk7XG4gICAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL3RzbGludC1sb2FkZXI/P3JlZi0tMSEuL3NyYy9qcy9tYWluL0dyaWQudHMiLCJpbXBvcnQgeyBJR3JpZE9wdGlvbnMgfSBmcm9tIFwiLi4vbWFpbi9JR3JpZE9wdGlvbnNcIjtcclxuaW1wb3J0IHsgRmlsdGVyQWN0aW9uVHlwZSB9IGZyb20gXCIuLi9tb2RlbHMvRmlsdGVyQWN0aW9uVHlwZVwiO1xyXG5pbXBvcnQgeyBJQ29sdW1uIH0gZnJvbSBcIi4uL21vZGVscy9JQ29sdW1uXCI7XHJcbmltcG9ydCB7IE9yZGVyRGlyZWN0aW9uIH0gZnJvbSBcIi4uL21vZGVscy9PcmRlckRpcmVjdGlvblwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIENvbmZpZ1N0b3JlPFQ+IHtcclxuICAgIHB1YmxpYyBvcHRpb25zOiBJR3JpZE9wdGlvbnM8VD47XHJcbiAgICBwcml2YXRlIGRlZmF1bHRHcmlkT3B0aW9uczogSUdyaWRPcHRpb25zPFQ+ID0ge1xyXG4gICAgICAgIGNodW5rU2l6ZTogNSxcclxuICAgICAgICBjb2x1bW5zOiBbXSxcclxuICAgICAgICBjb250YWluZXJFbGVtZW50OiBudWxsLFxyXG4gICAgICAgIGh5YnJpZEZ1bmN0aW9uOiAoY29sdW1uOiBJQ29sdW1uLCByb3c6IFQpOiBzdHJpbmcgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gXCJ0cnVlXCI7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBvbkNsaWNrRmlsdGVyOiAoY29sdW1uOiBzdHJpbmcsIHZhbHVlOiBhbnksIGFjdGlvblR5cGU6IEZpbHRlckFjdGlvblR5cGUpOiB2b2lkID0+IHtcclxuICAgICAgICAgICAgLy8gTm8gY29kZVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgb25DbGlja0hlYWRlcjogKGNvbHVtbjogc3RyaW5nLCBkaXJlY3Rpb246IE9yZGVyRGlyZWN0aW9uKTogdm9pZCA9PiB7XHJcbiAgICAgICAgICAgIC8vIE5vIGNvZGVcclxuICAgICAgICB9LFxyXG4gICAgICAgIG9uUGFnZVNlYXJjaDogKHBhZ2VTaXplOiBudW1iZXIsIHBhZ2VJbmRleDogbnVtYmVyKTogdm9pZCA9PiB7XHJcbiAgICAgICAgICAgIC8vIE5vIGNvZGVcclxuICAgICAgICB9LFxyXG4gICAgfTtcclxuICAgIGNvbnN0cnVjdG9yKG9wdGlvbnM6IElHcmlkT3B0aW9uczxUPikge1xyXG4gICAgICAgIHRoaXMuZXh0ZW5kT3B0aW9ucyhvcHRpb25zKTtcclxuICAgICAgICBpZiAob3B0aW9ucy5jb250YWluZXJFbGVtZW50ID09PSBudWxsKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIlBsZWFzZSBQcm92aWRlIGEgdmFsaWQgY29udGFpbmVyIEVsZW1lbnQgb2JqZWN0XCIpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHB1YmxpYyBzZXQgT3B0aW9ucyhvcHRpb25zOiBJR3JpZE9wdGlvbnM8VD4pIHtcclxuICAgICAgICB0aGlzLm9wdGlvbnMgPSBvcHRpb25zO1xyXG4gICAgfVxyXG4gICAgcHVibGljIGdldCBPcHRpb25zKCk6IElHcmlkT3B0aW9uczxUPiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMub3B0aW9ucztcclxuICAgIH1cclxuICAgIHB1YmxpYyBTZXRIaWRkZW5PbkNvbmZpZyA9IChib29sOiBib29sZWFuLCBjb2x1bW5JZD86IHN0cmluZyk6IHZvaWQgPT4ge1xyXG4gICAgICAgIHRoaXMuT3B0aW9ucy5jb2x1bW5zLmZvckVhY2goKGNvbDogSUNvbHVtbikgPT4ge1xyXG4gICAgICAgICAgICBpZiAoY29sdW1uSWQgPT09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgIGNvbC5oaWRkZW4gPSBib29sO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgaWYgKGNvbC5pZCA9PT0gY29sdW1uSWQpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb2wuaGlkZGVuID0gYm9vbDtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIHByaXZhdGUgZXh0ZW5kT3B0aW9ucyA9IChpbnB1dE9wdGlvbnM6IElHcmlkT3B0aW9uczxUPik6IElHcmlkT3B0aW9uczxUPiA9PiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMub3B0aW9ucyA9IGpRdWVyeS5leHRlbmQoe30sIHRoaXMuZGVmYXVsdEdyaWRPcHRpb25zLCBpbnB1dE9wdGlvbnMpO1xyXG4gICAgfVxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy90c2xpbnQtbG9hZGVyPz9yZWYtLTEhLi9zcmMvanMvY29uZmlnL0NvbmZpZ1N0b3JlLnRzIiwiaW1wb3J0IHsgSUdyaWRPcHRpb25zIH0gZnJvbSBcIi4uL21haW4vSUdyaWRPcHRpb25zXCI7XHJcbmltcG9ydCB7IElFdmVudEhhbmRsZXIgfSBmcm9tIFwiLi9JRXZlbnRIYW5kbGVyXCI7XHJcbmltcG9ydCB7IFRvZ2dsZUNvbHVtbkhhbmRsZXIgfSBmcm9tIFwiLi9Ub2dnbGVDb2x1bW5IYW5kbGVyXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgQ29sU2V0dGluZ3NIYW5kbGVyPFQ+IGltcGxlbWVudHMgSUV2ZW50SGFuZGxlcjxUPiB7XHJcbiAgICBwcml2YXRlIHBhcmVudEVsZW1lbnQ6IEpRdWVyeTtcclxuICAgIHByaXZhdGUgdG9nZ2xlQ29sdW1uSGFuZGxlcjogVG9nZ2xlQ29sdW1uSGFuZGxlcjxUPjtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihlbGVtZW50OiBKUXVlcnksIHRvZ2dsZUNvbHVtbkhhbmRsZXI6IFRvZ2dsZUNvbHVtbkhhbmRsZXI8VD4pIHtcclxuICAgICAgICB0aGlzLnBhcmVudEVsZW1lbnQgPSBlbGVtZW50O1xyXG4gICAgICAgIHRoaXMudG9nZ2xlQ29sdW1uSGFuZGxlciA9IHRvZ2dsZUNvbHVtbkhhbmRsZXI7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgb25SZXNpemUoKTogdm9pZCB7XHJcbiAgICAgICAgY29uc3Qgc2V0dG5nc1BvcHVwID0gdGhpcy5wYXJlbnRFbGVtZW50LmZpbmQoXCIuY29sdW1uLXNldHRpbmdzLWNvbnRhaW5lclwiKTtcclxuICAgICAgICBjb25zdCB0Ym9keUhlaWdodCA9IHRoaXMucGFyZW50RWxlbWVudC5maW5kKFwiLnRhYmxlLWJvZHlcIikuaW5uZXJIZWlnaHQoKTtcclxuICAgICAgICBzZXR0bmdzUG9wdXAuaW5uZXJIZWlnaHQodGJvZHlIZWlnaHQgLSAxMCk7XHJcbiAgICAgICAgc2V0dG5nc1BvcHVwLmZpbmQoXCIuY29sLXNldHRpbmdzLXRhYmxlXCIpLmlubmVySGVpZ2h0KHNldHRuZ3NQb3B1cC5pbm5lckhlaWdodCgpIC1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXR0bmdzUG9wdXAuZmluZChcIi5jb2wtc2V0dGluZ3MtaGVhZGVyXCIpLmlubmVySGVpZ2h0KCkpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBvbkRvY3VtZW50Q2xpY2soZXZlbnQpOiB2b2lkIHtcclxuICAgICAgICBjb25zdCB0YXJnZXRFbGVtZW50ID0galF1ZXJ5KGV2ZW50LnRhcmdldCk7XHJcbiAgICAgICAgaWYgKHRhcmdldEVsZW1lbnQuaXMoXCIuY29sLXNldHRpbmdzLXRyaWdnZXJcIikpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoIXRhcmdldEVsZW1lbnQucGFyZW50cygpLmlzKFwiLmNvbHVtbi1zZXR0aW5ncy1jb250YWluZXJcIikpIHtcclxuICAgICAgICAgICAgalF1ZXJ5KFwiLmNvbHVtbi1zZXR0aW5ncy1jb250YWluZXJcIikuaGlkZSgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHB1YmxpYyBSZWdpc3RlckRvbUhhbmRsZXIoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5wYXJlbnRFbGVtZW50Lm9uKFwiY2xpY2tcIiwgXCIudGFibGUtZm9vdGVyIC5jb2wtc2V0dGluZ3MtdHJpZ2dlclwiLCAoZXZlbnQpOiB2b2lkID0+IHtcclxuICAgICAgICAgICAgY29uc3QgZWxlbWVudCA9IGpRdWVyeShldmVudC50YXJnZXQpO1xyXG4gICAgICAgICAgICBjb25zdCBzZXR0bmdzUG9wdXAgPSBqUXVlcnkoXCIuY29sdW1uLXNldHRpbmdzLWNvbnRhaW5lclwiKTtcclxuICAgICAgICAgICAgdGhpcy5vblJlc2l6ZSgpO1xyXG4gICAgICAgICAgICBzZXR0bmdzUG9wdXAudG9nZ2xlKCk7XHJcbiAgICAgICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMucGFyZW50RWxlbWVudC5vbihcImtleXVwXCIsIFwiLmNvbHVtbi1zZXR0aW5ncy1jb250YWluZXIgLmNvbC1zZXR0aW5ncy1oZWFkZXIgLmNvbC1zZXR0aW5ncy1maWx0ZXJcIixcclxuICAgICAgICAgICAgKGV2ZW50KTogdm9pZCA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBlbGVtZW50ID0galF1ZXJ5KGV2ZW50LnRhcmdldCk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCB2YWwgPSBlbGVtZW50LnZhbCgpLnRvU3RyaW5nKCkudG9Mb3dlckNhc2UoKTtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHZhbCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnBhcmVudEVsZW1lbnQuZmluZChcIi5jb2wtc2V0dGluZ3MtdGFibGUgdGFibGUgdGJvZHkgdHJcIikuZWFjaCgoaTogbnVtYmVyLCBlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgalF1ZXJ5KGUpLnNob3coKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoalF1ZXJ5KGUpLmF0dHIoXCJkYXRhLWhlYWRlci1pZFwiKS50b0xvd2VyQ2FzZSgpLmluZGV4T2YodmFsKSA9PT0gLTEgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGpRdWVyeShlKS5oaWRlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICB0aGlzLnBhcmVudEVsZW1lbnQub24oXCJjbGlja1wiLCBcIi5jb2x1bW4tc2V0dGluZ3MtY29udGFpbmVyIC5zaG93LWFsbC1jb2x1bW5cIiwgKGV2ZW50KTogdm9pZCA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMucGFyZW50RWxlbWVudC5maW5kKFwiLmNvbHVtbi1zZXR0aW5ncy1jb250YWluZXIgLmNvbC1zZXR0aW5ncy1oaWRkZW4tY2hlY2tib3hcIilcclxuICAgICAgICAgICAgLmVhY2goKGluZGV4LCBlbGVtZW50KSA9PiB7XHJcbiAgICAgICAgICAgICAgICBqUXVlcnkoZWxlbWVudCkucHJvcChcImNoZWNrZWRcIiwgdHJ1ZSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB0aGlzLnRvZ2dsZUNvbHVtbkhhbmRsZXIuc2hvd0FsbENvbHVtbnMoKTtcclxuICAgICAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy5wYXJlbnRFbGVtZW50Lm9uKFwiY2xpY2tcIiwgXCIuY29sdW1uLXNldHRpbmdzLWNvbnRhaW5lciAuaGlkZS1hbGwtY29sdW1uXCIsIChldmVudCk6IHZvaWQgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLnBhcmVudEVsZW1lbnQuZmluZChcIi5jb2x1bW4tc2V0dGluZ3MtY29udGFpbmVyIC5jb2wtc2V0dGluZ3MtaGlkZGVuLWNoZWNrYm94XCIpXHJcbiAgICAgICAgICAgIC5lYWNoKChpbmRleCwgZWxlbWVudCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgalF1ZXJ5KGVsZW1lbnQpLnByb3AoXCJjaGVja2VkXCIsIGZhbHNlKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIHRoaXMudG9nZ2xlQ29sdW1uSGFuZGxlci5oaWRlQWxsQ29sdW1ucygpO1xyXG4gICAgICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICB0aGlzLnBhcmVudEVsZW1lbnQub24oXCJjbGlja1wiLCBcIi5jb2x1bW4tc2V0dGluZ3MtY29udGFpbmVyIC5jb2wtc2V0dGluZ3MtaGlkZGVuLWNoZWNrYm94XCIsIChldmVudCk6IHZvaWQgPT4ge1xyXG4gICAgICAgICAgICBpZiAoZXZlbnQub3JpZ2luYWxFdmVudCAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBjaGVja2JveCA9IGpRdWVyeShldmVudC50YXJnZXQpO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgaWQgPSBjaGVja2JveC52YWwoKS50b1N0cmluZygpO1xyXG4gICAgICAgICAgICAgICAgaWYgKGNoZWNrYm94LmlzKFwiOmNoZWNrZWRcIikpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnRvZ2dsZUNvbHVtbkhhbmRsZXIuc2hvd0NvbHVtbihpZCk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMudG9nZ2xlQ29sdW1uSGFuZGxlci5oaWRlQ29sdW1uKGlkKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL3RzbGludC1sb2FkZXI/P3JlZi0tMSEuL3NyYy9qcy9ldmVudEhhbmRsZXJzL0NvbFNldHRpbmdzSGFuZGxlci50cyIsImltcG9ydCB7IElFdmVudEhhbmRsZXIgfSBmcm9tIFwiLi9JRXZlbnRIYW5kbGVyXCI7XHJcbmV4cG9ydCBjbGFzcyBEZXRhaWxzUm93SGFuZGxlcjxUPiBpbXBsZW1lbnRzIElFdmVudEhhbmRsZXI8VD4ge1xyXG4gICAgcHJpdmF0ZSBwYXJlbnRFbGVtZW50OiBKUXVlcnk7XHJcblxyXG4gICAgY29uc3RydWN0b3IoZWxlbWVudDogSlF1ZXJ5KSB7XHJcbiAgICAgICAgdGhpcy5wYXJlbnRFbGVtZW50ID0gZWxlbWVudDtcclxuICAgIH1cclxuICAgIHB1YmxpYyBvblJlc2l6ZSgpOiB2b2lkIHtcclxuICAgICAgICAvLyBOb3RoaW5nIHRvIERvLlxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBvbkRvY3VtZW50Q2xpY2soZXZlbnQpOiB2b2lkIHtcclxuICAgICAgICAvLyBOb3RoaW5nIHRvIERvLlxyXG4gICAgfVxyXG4gICAgcHVibGljIFJlZ2lzdGVyRG9tSGFuZGxlciA9ICgpOiB2b2lkID0+IHtcclxuICAgICAgICB0aGlzLnBhcmVudEVsZW1lbnQub24oXCJjbGlja1wiLCBcIi50YWJsZS1ib2R5IC5leHBhbnNpb25BcnJvd3MgaVwiLCAoZXZlbnQpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgYXJyb3cgPSBqUXVlcnkoZXZlbnQudGFyZ2V0KTtcclxuICAgICAgICAgICAgY29uc3QgZGV0YWlsc1JvdyA9IGFycm93LmNsb3Nlc3QoXCJ0clwiKS5uZXh0KCk7XHJcbiAgICAgICAgICAgIGNvbnN0IGN1cnJlbnRJY29uID0gYXJyb3cuaGlkZSgpO1xyXG4gICAgICAgICAgICBjb25zdCBvdGhlckljb24gPSBhcnJvdy5zaWJsaW5ncyhcImlcIikuc2hvdygpO1xyXG4gICAgICAgICAgICBpZiAoYXJyb3cuaGFzQ2xhc3MoXCJleHBhbmREZXRhaWxzUm93SWNvblwiKSkge1xyXG4gICAgICAgICAgICAgICAgZGV0YWlsc1Jvdy5zaG93KDIwMCk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBkZXRhaWxzUm93LmhpZGUoMjAwKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvdHNsaW50LWxvYWRlcj8/cmVmLS0xIS4vc3JjL2pzL2V2ZW50SGFuZGxlcnMvRGV0YWlsc1Jvd0hhbmRsZXIudHMiLCJpbXBvcnQgeyBDb25maWdTdG9yZSB9IGZyb20gXCIuLi9jb25maWcvQ29uZmlnU3RvcmVcIjtcclxuaW1wb3J0IHsgSUdyaWRPcHRpb25zIH0gZnJvbSBcIi4uL21haW4vSUdyaWRPcHRpb25zXCI7XHJcbmltcG9ydCB7IENvbW1vblV0aWwgfSBmcm9tIFwiLi4vdXRpbC9Db2x1bW5VdGlsXCI7XHJcbmltcG9ydCB7IEZpbHRlckFjdGlvblR5cGUgfSBmcm9tIFwiLi8uLi9tb2RlbHMvRmlsdGVyQWN0aW9uVHlwZVwiO1xyXG5pbXBvcnQgeyBJRmlsdGVyQ2xpY2tEZWxlZ2F0ZSB9IGZyb20gXCIuLy4uL21vZGVscy9JRmlsdGVyQ2xpY2tEZWxlZ2F0ZVwiO1xyXG5pbXBvcnQgeyBJRXZlbnRIYW5kbGVyIH0gZnJvbSBcIi4vSUV2ZW50SGFuZGxlclwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIEZpbHRlckNsaWNrSGFuZGxlcjxUPiBpbXBsZW1lbnRzIElFdmVudEhhbmRsZXI8VD4ge1xyXG4gICAgcHJpdmF0ZSBjb25maWdTdG9yZTogQ29uZmlnU3RvcmU8VD47XHJcbiAgICBwcml2YXRlIHBhcmVudEVsZW1lbnQ6IEpRdWVyeTtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihjb25maWdTdG9yZTogQ29uZmlnU3RvcmU8VD4sIGVsZW1lbnQ6IEpRdWVyeSkge1xyXG4gICAgICAgIHRoaXMuY29uZmlnU3RvcmUgPSBjb25maWdTdG9yZTtcclxuICAgICAgICB0aGlzLnBhcmVudEVsZW1lbnQgPSBlbGVtZW50O1xyXG4gICAgfVxyXG4gICAgcHVibGljIG9uUmVzaXplKCk6IHZvaWQge1xyXG4gICAgICAgIC8vIE5vdGhpbmcgdG8gRG8uXHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIG9uRG9jdW1lbnRDbGljayhldmVudCk6IHZvaWQge1xyXG4gICAgICAgIC8vIE5vdGhpbmcgdG8gRG8uXHJcbiAgICB9XHJcbiAgICBwdWJsaWMgUmVnaXN0ZXJEb21IYW5kbGVyID0gKCk6IHZvaWQgPT4ge1xyXG4gICAgICAgIHRoaXMucGFyZW50RWxlbWVudC5vbihcImNsaWNrXCIsIFwiLnRhYmxlLWJvZHkgLmRldGFpbHNSb3cgLmRldGFpbHNUYWJsZSB0ZCBpXCIsIChldmVudCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBlbGVtZW50ID0galF1ZXJ5KGV2ZW50LnRhcmdldCk7XHJcbiAgICAgICAgICAgIGNvbnN0IHBhcmVudFRkID0gZWxlbWVudC5wYXJlbnRzKFwidGRcIik7XHJcbiAgICAgICAgICAgIGNvbnN0IGtleSA9IHBhcmVudFRkLmF0dHIoXCJkYXRhLWZpbHRlci1rZXlcIik7XHJcbiAgICAgICAgICAgIGNvbnN0IHZhbHVlID0gcGFyZW50VGQuYXR0cihcImRhdGEtZmlsdGVyLXZhbHVlXCIpO1xyXG4gICAgICAgICAgICBjb25zdCBjb2wgPSBDb21tb25VdGlsLkdldENvbHVtbk9iamVjdChrZXksIHRoaXMuY29uZmlnU3RvcmUuT3B0aW9ucy5jb2x1bW5zKTtcclxuICAgICAgICAgICAgaWYgKGNvbCA9PT0gdW5kZWZpbmVkIHx8IGNvbCA9PT0gbnVsbCB8fCAhY29sLmZpbHRlcmFibGUgKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgbGV0IGZpbHRlckFjdGlvbjogRmlsdGVyQWN0aW9uVHlwZSA9IEZpbHRlckFjdGlvblR5cGUuQWRkO1xyXG4gICAgICAgICAgICBpZiAoZWxlbWVudC5oYXNDbGFzcyhcInJlbW92ZUZpbHRlclwiKSkge1xyXG4gICAgICAgICAgICAgICAgZmlsdGVyQWN0aW9uID0gRmlsdGVyQWN0aW9uVHlwZS5NaW51cztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLmNvbmZpZ1N0b3JlLk9wdGlvbnMub25DbGlja0ZpbHRlcihrZXksIHZhbHVlLCBmaWx0ZXJBY3Rpb24pO1xyXG4gICAgICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvdHNsaW50LWxvYWRlcj8/cmVmLS0xIS4vc3JjL2pzL2V2ZW50SGFuZGxlcnMvRmlsdGVyQ2xpY2tIYW5kbGVyLnRzIiwiZXhwb3J0IGVudW0gRmlsdGVyQWN0aW9uVHlwZSB7XHJcbiAgICBBZGQgPSBcIkFkZFwiLFxyXG4gICAgTWludXMgPSBcIk1pbnVzXCIsXHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL3RzbGludC1sb2FkZXI/P3JlZi0tMSEuL3NyYy9qcy9tb2RlbHMvRmlsdGVyQWN0aW9uVHlwZS50cyIsImV4cG9ydCBlbnVtIEhhbmRsZXJOYW1lcyB7XHJcbiAgICBGaWx0ZXJBY3Rpb24sXHJcbiAgICBIZWFkZXJDbGljayxcclxuICAgIFNjcm9sbCxcclxuICAgIFBhZ2VTZWFyY2gsXHJcbiAgICBEZXRhaWxzUm93LFxyXG4gICAgVG9nZ2xlQ29sdW1uLFxyXG4gICAgQ29sU2V0dGluZ3MsXHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL3RzbGludC1sb2FkZXI/P3JlZi0tMSEuL3NyYy9qcy9ldmVudEhhbmRsZXJzL0hhbmRsZXJOYW1lcy50cyIsImltcG9ydCB7IENvbmZpZ1N0b3JlIH0gZnJvbSBcIi4uL2NvbmZpZy9Db25maWdTdG9yZVwiO1xyXG5pbXBvcnQgeyBJR3JpZE9wdGlvbnMgfSBmcm9tIFwiLi4vbWFpbi9JR3JpZE9wdGlvbnNcIjtcclxuaW1wb3J0IHsgQ29tbW9uVXRpbCB9IGZyb20gXCIuLi91dGlsL0NvbHVtblV0aWxcIjtcclxuaW1wb3J0IHtJSGVhZGVyQ2xpY2tEZWxlZ2F0ZX0gZnJvbSBcIi4vLi4vbW9kZWxzL0lIZWFkZXJDbGlja0RlbGVnYXRlXCI7XHJcbmltcG9ydCB7IE9yZGVyRGlyZWN0aW9uIH0gZnJvbSBcIi4vLi4vbW9kZWxzL09yZGVyRGlyZWN0aW9uXCI7XHJcbmltcG9ydCB7IElFdmVudEhhbmRsZXIgfSBmcm9tIFwiLi9JRXZlbnRIYW5kbGVyXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgSGVhZGVyQ2xpY2tIYW5kbGVyPFQ+IGltcGxlbWVudHMgSUV2ZW50SGFuZGxlcjxUPiB7XHJcbiAgICBwcml2YXRlIHBhcmVudEVsZW1lbnQ6IEpRdWVyeTtcclxuICAgIHByaXZhdGUgY29uZmlnU3RvcmU6IENvbmZpZ1N0b3JlPFQ+O1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKGNvbmZpZ1N0b3JlOiBDb25maWdTdG9yZTxUPiwgZWxlbWVudDogSlF1ZXJ5KSB7XHJcbiAgICAgICAgdGhpcy5jb25maWdTdG9yZSA9IGNvbmZpZ1N0b3JlO1xyXG4gICAgICAgIHRoaXMucGFyZW50RWxlbWVudCA9IGVsZW1lbnQ7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIG9uUmVzaXplKCk6IHZvaWQge1xyXG4gICAgICAgIC8vIE5vdGhpbmcgdG8gRG8uXHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIG9uRG9jdW1lbnRDbGljayhldmVudCk6IHZvaWQge1xyXG4gICAgICAgIC8vIE5vdGhpbmcgdG8gRG8uXHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIFJlZ2lzdGVyRG9tSGFuZGxlciA9ICgpOiB2b2lkID0+IHtcclxuICAgICAgICAvLyBSZWdpc3RlcmluZyBKUXVlcnkgRXZlbnQgSGFuZGxlciBpZiBIZWFkZXIgaXMgQ2xpY2tlZC5cclxuICAgICAgICB0aGlzLnBhcmVudEVsZW1lbnQub24oXCJjbGlja1wiLCBcIi50YWJsZS1oZWFkZXIgdGhcIiwgKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IGVsZW1lbnQgPSBqUXVlcnkoZXZlbnQudGFyZ2V0KS5jbG9zZXN0KFwidGhcIik7XHJcbiAgICAgICAgICAgIGNvbnN0IGhlYWRlcklkID0gZWxlbWVudC5hdHRyKFwiZGF0YS1oZWFkZXItaWRcIik7XHJcbiAgICAgICAgICAgIGNvbnN0IGNvbCA9IENvbW1vblV0aWwuR2V0Q29sdW1uT2JqZWN0KGhlYWRlcklkLCB0aGlzLmNvbmZpZ1N0b3JlLk9wdGlvbnMuY29sdW1ucyk7XHJcbiAgICAgICAgICAgIGlmIChjb2wgPT09IHVuZGVmaW5lZCB8fCBjb2wgPT09IG51bGwgfHwgIWNvbC5zb3J0YWJsZSApIHtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjb25zdCBhcnJvd0ljb25zID0gZWxlbWVudC5maW5kKFwiaVwiKTtcclxuICAgICAgICAgICAgY29uc3QgdXBBcnJvd0ljb24gPSBhcnJvd0ljb25zLmZpcnN0KCk7XHJcbiAgICAgICAgICAgIGNvbnN0IGRvd25BcnJvd0ljb24gPSBhcnJvd0ljb25zLmxhc3QoKTtcclxuICAgICAgICAgICAgbGV0IGRpcmVjdGlvbjogT3JkZXJEaXJlY3Rpb247XHJcbiAgICAgICAgICAgIGlmIChhcnJvd0ljb25zLmlzKFwiOnZpc2libGVcIikpIHtcclxuICAgICAgICAgICAgICAgIGlmICh1cEFycm93SWNvbi5pcyhcIjp2aXNpYmxlXCIpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlyZWN0aW9uID0gT3JkZXJEaXJlY3Rpb24uRGVzYztcclxuICAgICAgICAgICAgICAgICAgICB1cEFycm93SWNvbi5oaWRlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgZG93bkFycm93SWNvbi5zaG93KCk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGRpcmVjdGlvbiA9IE9yZGVyRGlyZWN0aW9uLkFzYztcclxuICAgICAgICAgICAgICAgICAgICBkb3duQXJyb3dJY29uLmhpZGUoKTtcclxuICAgICAgICAgICAgICAgICAgICB1cEFycm93SWNvbi5zaG93KCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBkaXJlY3Rpb24gPSBPcmRlckRpcmVjdGlvbi5Bc2M7XHJcbiAgICAgICAgICAgICAgICB1cEFycm93SWNvbi5zaG93KCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5jb25maWdTdG9yZS5PcHRpb25zLm9uQ2xpY2tIZWFkZXIoaGVhZGVySWQsIGRpcmVjdGlvbik7XHJcbiAgICAgICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy90c2xpbnQtbG9hZGVyPz9yZWYtLTEhLi9zcmMvanMvZXZlbnRIYW5kbGVycy9IZWFkZXJDbGlja0hhbmRsZXIudHMiLCJleHBvcnQgZW51bSBPcmRlckRpcmVjdGlvbiB7XHJcbiAgICBBc2MgPSBcIkFzY1wiLFxyXG4gICAgRGVzYyA9IFwiRGVzY1wiLFxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy90c2xpbnQtbG9hZGVyPz9yZWYtLTEhLi9zcmMvanMvbW9kZWxzL09yZGVyRGlyZWN0aW9uLnRzIiwiaW1wb3J0ICogYXMgalF1ZXJ5IGZyb20gXCJqcXVlcnlcIjtcclxuaW1wb3J0IHsgQ29uZmlnU3RvcmUgfSBmcm9tIFwiLi4vY29uZmlnL0NvbmZpZ1N0b3JlXCI7XHJcbmltcG9ydCB7IFBhZ2VyIH0gZnJvbSBcIi4uL3BhZ2luYXRpb24vUGFnZXJcIjtcclxuaW1wb3J0IHsgSVBhZ2VTZWFyY2hDbGlja0RlbGVnYXRlIH0gZnJvbSBcIi4vLi4vbW9kZWxzL0lQYWdlU2VhcmNoQ2xpY2tEZWxlZ2F0ZVwiO1xyXG5pbXBvcnQgeyBJUGFnaW5hdGlvbiB9IGZyb20gXCIuLy4uL21vZGVscy9JUGFnaW5hdGlvblwiO1xyXG5pbXBvcnQgeyBJRXZlbnRIYW5kbGVyIH0gZnJvbSBcIi4vSUV2ZW50SGFuZGxlclwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIFBhZ2VTZWFyY2hIYW5kbGVyPFQ+IGltcGxlbWVudHMgSUV2ZW50SGFuZGxlcjxUPiB7XHJcbiAgICBwcml2YXRlIGNvbmZpZ1N0b3JlOiBDb25maWdTdG9yZTxUPjtcclxuICAgIHByaXZhdGUgcGFyZW50RWxlbWVudDogSlF1ZXJ5O1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKGNvbmZpZ1N0b3JlOiBDb25maWdTdG9yZTxUPiwgZWxlbWVudDogSlF1ZXJ5KSB7XHJcbiAgICAgICAgdGhpcy5jb25maWdTdG9yZSA9IGNvbmZpZ1N0b3JlO1xyXG4gICAgICAgIHRoaXMucGFyZW50RWxlbWVudCA9IGVsZW1lbnQ7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgb25SZXNpemUoKTogdm9pZCB7XHJcbiAgICAgICAgLy8gdGhyb3cgbmV3IEVycm9yKFwiTWV0aG9kIG5vdCBpbXBsZW1lbnRlZC5cIik7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIG9uRG9jdW1lbnRDbGljaygpOiB2b2lkIHtcclxuICAgICAgICAvLyB0aHJvdyBuZXcgRXJyb3IoXCJNZXRob2Qgbm90IGltcGxlbWVudGVkLlwiKTtcclxuICAgIH1cclxuICAgIHB1YmxpYyBSZWdpc3RlckRvbUhhbmRsZXIgPSAoKTogdm9pZCA9PiB7XHJcbiAgICAgICAgdGhpcy5wYXJlbnRFbGVtZW50Lm9uKFwiY2xpY2tcIiwgXCIudGFibGUtZm9vdGVyIC5maXJzdExpbmtcIiwgKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuY29uZmlnU3RvcmUub3B0aW9ucy5vblBhZ2VTZWFyY2goUGFnZXIuUGFnaW5hdGlvbkRhdGEucGFnZVNpemUsIDEpO1xyXG4gICAgICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICB0aGlzLnBhcmVudEVsZW1lbnQub24oXCJjbGlja1wiLCBcIi50YWJsZS1mb290ZXIgLm5leHRMaW5rXCIsIChldmVudCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmNvbmZpZ1N0b3JlLm9wdGlvbnMub25QYWdlU2VhcmNoKFBhZ2VyLlBhZ2luYXRpb25EYXRhLnBhZ2VTaXplLCBQYWdlci5QYWdpbmF0aW9uRGF0YS5wYWdlSW5kZXggKyAxKTtcclxuICAgICAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy5wYXJlbnRFbGVtZW50Lm9uKFwiY2xpY2tcIiwgXCIudGFibGUtZm9vdGVyIC5wcmV2TGlua1wiLCAoZXZlbnQpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5jb25maWdTdG9yZS5vcHRpb25zLm9uUGFnZVNlYXJjaChQYWdlci5QYWdpbmF0aW9uRGF0YS5wYWdlU2l6ZSwgUGFnZXIuUGFnaW5hdGlvbkRhdGEucGFnZUluZGV4IC0gMSk7XHJcbiAgICAgICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMucGFyZW50RWxlbWVudC5vbihcImNsaWNrXCIsIFwiLnRhYmxlLWZvb3RlciAubGFzdExpbmtcIiwgKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuY29uZmlnU3RvcmUub3B0aW9ucy5vblBhZ2VTZWFyY2goUGFnZXIuUGFnaW5hdGlvbkRhdGEucGFnZVNpemUsIFBhZ2VyLlBhZ2luYXRpb25EYXRhLm5vT2ZQYWdlcyk7XHJcbiAgICAgICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMucGFyZW50RWxlbWVudC5vbihcImNoYW5nZVwiLCBcIi50YWJsZS1mb290ZXIgLnBhZ2VTaXplU2VsZWN0b3JcIiwgKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IHZhbDogbnVtYmVyID0gK2pRdWVyeShldmVudC50YXJnZXQpLnZhbCgpLnRvU3RyaW5nKCk7XHJcbiAgICAgICAgICAgIHRoaXMuY29uZmlnU3RvcmUub3B0aW9ucy5vblBhZ2VTZWFyY2godmFsLCBQYWdlci5QYWdpbmF0aW9uRGF0YS5wYWdlSW5kZXgpO1xyXG4gICAgICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICB0aGlzLnBhcmVudEVsZW1lbnQub24oXCJrZXlwcmVzc1wiLCBcIi50YWJsZS1mb290ZXIgLnBhZ2VyLWlucHV0XCIsIChldmVudCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBpcCA9IGpRdWVyeShldmVudC50YXJnZXQpO1xyXG4gICAgICAgICAgICBjb25zdCBwYWdlRGF0YSA9IFBhZ2VyLlBhZ2luYXRpb25EYXRhO1xyXG4gICAgICAgICAgICBpZiAoZXZlbnQua2V5Q29kZSA9PT0gMTMpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHZhbDogbnVtYmVyID0gK2lwLnZhbCgpLnRvU3RyaW5nKCk7XHJcbiAgICAgICAgICAgICAgICBpZiAoaXNOYU4odmFsKSB8fCB2YWwgPiBwYWdlRGF0YS5ub09mUGFnZXMgfHwgdmFsIDwgMSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlwLnZhbChwYWdlRGF0YS5wYWdlSW5kZXgpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbmZpZ1N0b3JlLm9wdGlvbnMub25QYWdlU2VhcmNoKHBhZ2VEYXRhLnBhZ2VTaXplLCB2YWwpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy90c2xpbnQtbG9hZGVyPz9yZWYtLTEhLi9zcmMvanMvZXZlbnRIYW5kbGVycy9QYWdlU2VhcmNoQ2xpY2tIYW5kbGVyLnRzIiwiaW1wb3J0IHsgQ29uZmlnU3RvcmUgfSBmcm9tIFwiLi4vY29uZmlnL0NvbmZpZ1N0b3JlXCI7XHJcbmltcG9ydCB7IE9yZGVyRGlyZWN0aW9uIH0gZnJvbSBcIi4vLi4vbW9kZWxzL09yZGVyRGlyZWN0aW9uXCI7XHJcbmltcG9ydCB7IEdyaWRUZW1wbGF0ZVNlcnZpY2UgfSBmcm9tIFwiLi8uLi9zZXJ2aWNlcy9HcmlkVGVtcGxhdGVTZXJ2aWNlXCI7XHJcbmltcG9ydCB7IElJbmRleENvdW50ZXIgfSBmcm9tIFwiLi8uLi92aXJ0dWFsaXphdGlvbi9JbmRleENvdW50ZXJcIjtcclxuaW1wb3J0IHsgU2Nyb2xsRGlyZWN0aW9uIH0gZnJvbSBcIi4vLi4vdmlydHVhbGl6YXRpb24vU2Nyb2xsRGlyZWN0aW9uXCI7XHJcbmltcG9ydCB7IFZpcnR1YWxpemVyIH0gZnJvbSBcIi4vLi4vdmlydHVhbGl6YXRpb24vVmlydHVhbGl6ZXJcIjtcclxuaW1wb3J0IHsgSUV2ZW50SGFuZGxlciB9IGZyb20gXCIuL0lFdmVudEhhbmRsZXJcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBTY3JvbGxIYW5kbGVyPFQ+IGltcGxlbWVudHMgSUV2ZW50SGFuZGxlcjxUPiB7XHJcbiAgICBwcml2YXRlIHZpcnR1YWxpemVyOiBWaXJ0dWFsaXplcjtcclxuICAgIHByaXZhdGUgcGFyZW50RWxlbWVudDogSlF1ZXJ5O1xyXG4gICAgcHJpdmF0ZSBncmlkVGVtcGxhdGVTZXJ2aWNlOiBHcmlkVGVtcGxhdGVTZXJ2aWNlPFQ+O1xyXG4gICAgcHJpdmF0ZSByZW5kZXJpbmc6IGJvb2xlYW4gPSAgZmFsc2U7XHJcbiAgICBwcml2YXRlIGNvbmZpZ1N0b3JlOiBDb25maWdTdG9yZTxUPjtcclxuICAgIHByaXZhdGUgbGVmdE9mZnNldDogbnVtYmVyO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKGNvbmZpZ1N0b3JlOiBDb25maWdTdG9yZTxUPiwgZ3JpZFRlbXBsYXRlU2VydmljZTogR3JpZFRlbXBsYXRlU2VydmljZTxUPikge1xyXG4gICAgICAgIHRoaXMuY29uZmlnU3RvcmUgPSBjb25maWdTdG9yZTtcclxuICAgICAgICB0aGlzLnBhcmVudEVsZW1lbnQgPSBqUXVlcnkodGhpcy5jb25maWdTdG9yZS5PcHRpb25zLmNvbnRhaW5lckVsZW1lbnQpO1xyXG4gICAgICAgIHRoaXMuZ3JpZFRlbXBsYXRlU2VydmljZSA9IGdyaWRUZW1wbGF0ZVNlcnZpY2U7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgb25SZXNpemUoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5sZWZ0T2Zmc2V0ID0gdGhpcy5wYXJlbnRFbGVtZW50LmZpbmQoXCIudGFibGUtaGVhZGVyXCIpLm9mZnNldCgpLmxlZnQ7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIG9uRG9jdW1lbnRDbGljayhldmVudCk6IHZvaWQge1xyXG4gICAgICAgIC8vIHRocm93IG5ldyBFcnJvcihcIk1ldGhvZCBub3QgaW1wbGVtZW50ZWQuXCIpO1xyXG4gICAgfVxyXG4gICAgcHVibGljIFJlZ2lzdGVyRG9tSGFuZGxlciA9ICgpOiB2b2lkID0+IHtcclxuICAgICAgICAvLyBSZWdpc3RlcmluZyBKUXVlcnkgRXZlbnQgSGFuZGxlciBpZiBIZWFkZXIgaXMgQ2xpY2tlZC5cclxuICAgICAgICB0aGlzLnBhcmVudEVsZW1lbnQuZmluZChcIi50YWJsZS1ib2R5XCIpLm9uKFwic2Nyb2xsXCIsIChldmVudCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCB0Qm9keU9iaiA9IHRoaXMucGFyZW50RWxlbWVudC5maW5kKFwiLnRhYmxlLWJvZHlcIik7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmxlZnRPZmZzZXQgPT09IHVuZGVmaW5lZCB8fCB0aGlzLmxlZnRPZmZzZXQgPT09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMubGVmdE9mZnNldCA9IHRoaXMucGFyZW50RWxlbWVudC5maW5kKFwiLnRhYmxlLWhlYWRlclwiKS5vZmZzZXQoKS5sZWZ0O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMucGFyZW50RWxlbWVudC5maW5kKFwiLnRhYmxlLWhlYWRlclwiKS5vZmZzZXQoXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGVmdDogdGhpcy5sZWZ0T2Zmc2V0ICsgLTEgKiB0Qm9keU9iai5zY3JvbGxMZWZ0KCksXHJcbiAgICAgICAgICAgICAgICAgICAgdG9wOiAwLFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgY29uc3QgYWN0dWFsVGFibGVIZWlnaHQgPSB0Qm9keU9iai5maW5kKFwiLm1haW5UYWJsZVwiKS5oZWlnaHQoKTtcclxuICAgICAgICAgICAgdGhpcy5WaXJ0dWFsaXplci5UYWJsZUhlaWdodCA9IGFjdHVhbFRhYmxlSGVpZ2h0O1xyXG4gICAgICAgICAgICB0aGlzLlZpcnR1YWxpemVyLlNjcm9sbENvbnRhaW5lckhlaWdodCA9IHRCb2R5T2JqLmhlaWdodCgpO1xyXG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICBpZiAodGhpcy5yZW5kZXJpbmcpIHtcclxuICAgICAgICAgICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNvbnN0IHNjcm9sbFRvcCA9IHRCb2R5T2JqLnNjcm9sbFRvcCgpO1xyXG4gICAgICAgICAgICBjb25zdCBpbmRleENvdW50ZXI6IElJbmRleENvdW50ZXIgPSB0aGlzLlZpcnR1YWxpemVyLkdldEluZGV4Q291bnRlckZvclNjcm9sbChzY3JvbGxUb3ApO1xyXG4gICAgICAgICAgICBzd2l0Y2ggKGluZGV4Q291bnRlci5kaXJlY3Rpb24pIHtcclxuICAgICAgICAgICAgICAgIGNhc2UgU2Nyb2xsRGlyZWN0aW9uLkRvd246XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGluZGV4Q291bnRlci5yZW5kZXJpbmdSZXF1aXJlZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnJlbmRlcmluZyA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRCb2R5T2JqLmZpbmQoXCIubWFpblRhYmxlIC5tYWluVGFibGVCb2R5XCIpLmFwcGVuZChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZ3JpZFRlbXBsYXRlU2VydmljZS5HZXRSb3dzSHRtbChpbmRleENvdW50ZXIuc3RhcnRJbmRleCwgaW5kZXhDb3VudGVyLmVuZEluZGV4KSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRCb2R5T2JqLmZpbmQoXCIubWFpblRhYmxlIC5tYWluVGFibGVCb2R5ID4gdHJcIilcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5zbGljZSgwLCB0aGlzLmNvbmZpZ1N0b3JlLm9wdGlvbnMuY2h1bmtTaXplICogMikucmVtb3ZlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucmVuZGVyaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSBTY3JvbGxEaXJlY3Rpb24uVXA6XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGluZGV4Q291bnRlci5yZW5kZXJpbmdSZXF1aXJlZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnJlbmRlcmluZyA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRCb2R5T2JqLmZpbmQoXCIubWFpblRhYmxlIC5tYWluVGFibGVCb2R5XCIpLnByZXBlbmRcclxuICAgICAgICAgICAgICAgICAgICAgICAgKHRoaXMuZ3JpZFRlbXBsYXRlU2VydmljZS5HZXRSb3dzSHRtbChpbmRleENvdW50ZXIuc3RhcnRJbmRleCwgaW5kZXhDb3VudGVyLmVuZEluZGV4KSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRCb2R5T2JqLmZpbmQoXCIubWFpblRhYmxlIC5tYWluVGFibGVCb2R5ID4gdHJcIilcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5zbGljZSgodGhpcy5jb25maWdTdG9yZS5vcHRpb25zLmNodW5rU2l6ZSAqIC0yKSkucmVtb3ZlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucmVuZGVyaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgcHJpdmF0ZSBnZXQgVmlydHVhbGl6ZXIoKTogVmlydHVhbGl6ZXIge1xyXG4gICAgICAgIGlmICh0aGlzLnZpcnR1YWxpemVyID09PSBudWxsIHx8IHRoaXMudmlydHVhbGl6ZXIgPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy52aXJ0dWFsaXplciA9IG5ldyBWaXJ0dWFsaXplcih0aGlzLmNvbmZpZ1N0b3JlLm9wdGlvbnMuY2h1bmtTaXplLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAyNSwgdGhpcy5ncmlkVGVtcGxhdGVTZXJ2aWNlLkRhdGFMZW5ndGgpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnZpcnR1YWxpemVyO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvdHNsaW50LWxvYWRlcj8/cmVmLS0xIS4vc3JjL2pzL2V2ZW50SGFuZGxlcnMvU2Nyb2xsSGFuZGxlci50cyIsImltcG9ydCB7IEdldERlZmF1bHRJbmRleENvdW50ZXIsIElJbmRleENvdW50ZXIgfSBmcm9tIFwiLi9JbmRleENvdW50ZXJcIjtcclxuaW1wb3J0IHsgU2Nyb2xsRGlyZWN0aW9uIH0gZnJvbSBcIi4vU2Nyb2xsRGlyZWN0aW9uXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgVmlydHVhbGl6ZXIge1xyXG4gICAgcHJpdmF0ZSBjdXJyZW50SW5kZXhDb3VudGVyOiBJSW5kZXhDb3VudGVyO1xyXG4gICAgcHJpdmF0ZSBsYXN0U2Nyb2xsUG9zaXRpb246IG51bWJlcjtcclxuICAgIHByaXZhdGUgbGVuZ3RoOiBudW1iZXI7XHJcbiAgICBwcml2YXRlIGNodW5rU2l6ZTogbnVtYmVyO1xyXG4gICAgcHJpdmF0ZSBzY3JvbGxDb250YWluZXJIZWlnaHQ6IG51bWJlcjtcclxuICAgIHByaXZhdGUgdGFibGVIZWlnaHQ6IG51bWJlcjtcclxuICAgIHByaXZhdGUgaW5pdGlhbFJvd0NvdW50OiBudW1iZXI7XHJcblxyXG4gICAgY29uc3RydWN0b3IoY2h1bmtTaXplOiBudW1iZXIsIGluaXRpYWxSb3dDb3VudDogbnVtYmVyLCBsZW5ndGg6IG51bWJlcikge1xyXG4gICAgICAgIHRoaXMubGFzdFNjcm9sbFBvc2l0aW9uID0gMDtcclxuICAgICAgICB0aGlzLmxlbmd0aCA9IGxlbmd0aDtcclxuICAgICAgICB0aGlzLmNodW5rU2l6ZSA9IGNodW5rU2l6ZTtcclxuICAgICAgICB0aGlzLmluaXRpYWxSb3dDb3VudCA9IGluaXRpYWxSb3dDb3VudDtcclxuICAgICAgICB0aGlzLmN1cnJlbnRJbmRleENvdW50ZXIgPSBHZXREZWZhdWx0SW5kZXhDb3VudGVyKGluaXRpYWxSb3dDb3VudCwgY2h1bmtTaXplKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgR2V0SW5kZXhDb3VudGVyRm9yU2Nyb2xsID0gKHNjcm9sbFRvcDogbnVtYmVyKTogSUluZGV4Q291bnRlciA9PiB7XHJcbiAgICAgICAgbGV0IG5ld0NvdW50ZXI6IElJbmRleENvdW50ZXIgPSBHZXREZWZhdWx0SW5kZXhDb3VudGVyKHRoaXMuY2h1bmtTaXplLCB0aGlzLmluaXRpYWxSb3dDb3VudCk7XHJcbiAgICAgICAgbmV3Q291bnRlci5kaXJlY3Rpb24gPSB0aGlzLkdldFNjcm9sbERpcmVjdGlvbihzY3JvbGxUb3ApO1xyXG4gICAgICAgIHN3aXRjaCAobmV3Q291bnRlci5kaXJlY3Rpb24pIHtcclxuICAgICAgICAgICAgLy8gQ2FsY3VsYXRlIEluZGV4IENvdW50ZXJzIGZvciBEb3duIE1vdmVtZW50XHJcbiAgICAgICAgICAgIGNhc2UgU2Nyb2xsRGlyZWN0aW9uLkRvd246XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5jdXJyZW50SW5kZXhDb3VudGVyLmxhc3RJbmRleCA+PSB0aGlzLmxlbmd0aCAtIDEpIHtcclxuICAgICAgICAgICAgICAgICAgICBuZXdDb3VudGVyLmVuZFJlYWNoZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBuZXdDb3VudGVyLmVuZFJlYWNoZWQgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBkaWZmID0gKHNjcm9sbFRvcCArIHRoaXMuU2Nyb2xsQ29udGFpbmVySGVpZ2h0KSAtICh0aGlzLlRhYmxlSGVpZ2h0ICogMC44ICk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGRpZmYgPiAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5ld0NvdW50ZXIucmVuZGVyaW5nUmVxdWlyZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBuZXdDb3VudGVyID0gdGhpcy5Qb3B1bGF0ZUluZGV4Q291bnRlckZvckRvd24obmV3Q291bnRlcik7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgU2Nyb2xsRGlyZWN0aW9uLlVwOlxyXG4gICAgICAgICAgICAgICAgLy8gQ2FsY3VsYXRlIEluZGV4IENvdW50ZXJzIGZvciBVcCBNb3ZlbWVudFxyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuY3VycmVudEluZGV4Q291bnRlci5maXJzdEluZGV4IDw9IDApIHtcclxuICAgICAgICAgICAgICAgICAgICBuZXdDb3VudGVyLmVuZFJlYWNoZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBuZXdDb3VudGVyLmVuZFJlYWNoZWQgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBkaWZmID0gc2Nyb2xsVG9wIC0gKHRoaXMuVGFibGVIZWlnaHQgLSB0aGlzLlNjcm9sbENvbnRhaW5lckhlaWdodCkgKiAwLjE7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGRpZmYgPCAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5ld0NvdW50ZXIucmVuZGVyaW5nUmVxdWlyZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBuZXdDb3VudGVyID0gdGhpcy5Qb3B1bGF0ZUluZGV4Q291bnRlckZvclVwKG5ld0NvdW50ZXIpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAobmV3Q291bnRlci5yZW5kZXJpbmdSZXF1aXJlZCkge1xyXG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRJbmRleENvdW50ZXIgPSBuZXdDb3VudGVyO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmxhc3RTY3JvbGxQb3NpdGlvbiA9IHNjcm9sbFRvcDtcclxuICAgICAgICAvLyB0aGlzLlByaW50KG5ld0NvdW50ZXIsIHRoaXMuY3VycmVudEluZGV4Q291bnRlcik7XHJcbiAgICAgICAgcmV0dXJuIG5ld0NvdW50ZXI7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBQcmludCA9IChuZXdDb3VudGVyOiBJSW5kZXhDb3VudGVyLCBjdXJyZW50SW5kZXhDb3VudGVyOiBJSW5kZXhDb3VudGVyKTogdm9pZCA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCIgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiBcIik7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCIgU2Nyb2xsIFBvc2l0aW9uIC0gXCIgKyB0aGlzLmxhc3RTY3JvbGxQb3NpdGlvbik7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCIgTGVuZ3RoICAtIFwiICsgdGhpcy5sZW5ndGgpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiIC0tLS0tLS0tLS0tLSAgQ1VSUkVOVCAtLS0tLS0tLS0tIFwiKTtcclxuICAgICAgICBPYmplY3Qua2V5cyhjdXJyZW50SW5kZXhDb3VudGVyKS5mb3JFYWNoKCh2YWwsIGluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHZhbCArIFwiIC0gXCIgKyBjdXJyZW50SW5kZXhDb3VudGVyW3ZhbF0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiIC0tLS0tLS0tLS0tLSAgTkVXIC0tLS0tLS0tLS0gXCIpO1xyXG4gICAgICAgIE9iamVjdC5rZXlzKG5ld0NvdW50ZXIpLmZvckVhY2goKHZhbCwgaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2codmFsICsgXCIgLSBcIiArIG5ld0NvdW50ZXJbdmFsXSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCIgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiBcIik7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBQb3B1bGF0ZUluZGV4Q291bnRlckZvckRvd24gPSAoY291bnRlcjogSUluZGV4Q291bnRlcik6IElJbmRleENvdW50ZXIgPT4ge1xyXG4gICAgICAgIGNvdW50ZXIuc3RhcnRJbmRleCA9IHRoaXMuY3VycmVudEluZGV4Q291bnRlci5sYXN0SW5kZXggKyAxO1xyXG4gICAgICAgIGNvdW50ZXIuZW5kSW5kZXggICA9IHRoaXMuY3VycmVudEluZGV4Q291bnRlci5sYXN0SW5kZXggKyB0aGlzLmNodW5rU2l6ZSA+IHRoaXMubGVuZ3RoIC0gMSA/XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5sZW5ndGggLSAxIDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRJbmRleENvdW50ZXIubGFzdEluZGV4ICsgdGhpcy5jaHVua1NpemU7XHJcbiAgICAgICAgY291bnRlci5maXJzdEluZGV4ID0gdGhpcy5jdXJyZW50SW5kZXhDb3VudGVyLmZpcnN0SW5kZXggKyB0aGlzLmNodW5rU2l6ZTtcclxuICAgICAgICBjb3VudGVyLmxhc3RJbmRleCAgPSBjb3VudGVyLmVuZEluZGV4O1xyXG4gICAgICAgIHJldHVybiBjb3VudGVyO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgUG9wdWxhdGVJbmRleENvdW50ZXJGb3JVcCA9IChjb3VudGVyOiBJSW5kZXhDb3VudGVyKTogSUluZGV4Q291bnRlciA9PiB7XHJcbiAgICAgICAgY291bnRlci5zdGFydEluZGV4ID0gdGhpcy5jdXJyZW50SW5kZXhDb3VudGVyLmZpcnN0SW5kZXggLSB0aGlzLmNodW5rU2l6ZSA8IDAgP1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIDAgOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudEluZGV4Q291bnRlci5maXJzdEluZGV4IC0gdGhpcy5jaHVua1NpemU7XHJcbiAgICAgICAgY291bnRlci5lbmRJbmRleCA9IHRoaXMuY3VycmVudEluZGV4Q291bnRlci5maXJzdEluZGV4IC0gMTtcclxuICAgICAgICBjb3VudGVyLmZpcnN0SW5kZXggPSBjb3VudGVyLnN0YXJ0SW5kZXg7XHJcbiAgICAgICAgY291bnRlci5sYXN0SW5kZXggPSB0aGlzLmN1cnJlbnRJbmRleENvdW50ZXIubGFzdEluZGV4IC0gdGhpcy5jaHVua1NpemU7XHJcbiAgICAgICAgcmV0dXJuIGNvdW50ZXI7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBHZXRTY3JvbGxEaXJlY3Rpb24gPSAoc2Nyb2xsVG9wOiBudW1iZXIpOiBTY3JvbGxEaXJlY3Rpb24gPT4ge1xyXG4gICAgICAgIGlmICh0aGlzLmxhc3RTY3JvbGxQb3NpdGlvbiA8IHNjcm9sbFRvcCkge1xyXG4gICAgICAgICAgICByZXR1cm4gU2Nyb2xsRGlyZWN0aW9uLkRvd247XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBTY3JvbGxEaXJlY3Rpb24uVXA7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgc2V0IFNjcm9sbENvbnRhaW5lckhlaWdodChoZWlnaHQ6IG51bWJlcikge1xyXG4gICAgICAgIHRoaXMuc2Nyb2xsQ29udGFpbmVySGVpZ2h0ID0gaGVpZ2h0O1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXQgU2Nyb2xsQ29udGFpbmVySGVpZ2h0KCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnNjcm9sbENvbnRhaW5lckhlaWdodDtcclxuICAgIH1cclxuICAgIHB1YmxpYyBzZXQgVGFibGVIZWlnaHQoaGVpZ2h0OiBudW1iZXIpIHtcclxuICAgICAgICB0aGlzLnRhYmxlSGVpZ2h0ID0gaGVpZ2h0O1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXQgVGFibGVIZWlnaHQoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMudGFibGVIZWlnaHQ7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgc2V0IEluaXRpYWxSb3dDb3VudChyb3dDb3VudDogbnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy5pbml0aWFsUm93Q291bnQgPSByb3dDb3VudDtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0IEluaXRpYWxSb3dDb3VudCgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5pbml0aWFsUm93Q291bnQ7XHJcbiAgICB9XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL3RzbGludC1sb2FkZXI/P3JlZi0tMSEuL3NyYy9qcy92aXJ0dWFsaXphdGlvbi9WaXJ0dWFsaXplci50cyIsImltcG9ydCB7SUluZGV4Q291bnRlcn0gZnJvbSBcIi4vSW5kZXhDb3VudGVyXCI7XHJcbmltcG9ydCB7U2Nyb2xsRGlyZWN0aW9ufSBmcm9tIFwiLi9TY3JvbGxEaXJlY3Rpb25cIjtcclxuZXhwb3J0IGludGVyZmFjZSBJSW5kZXhDb3VudGVyIHtcclxuICAgIHN0YXJ0SW5kZXg6IG51bWJlcjtcclxuICAgIGVuZEluZGV4OiBudW1iZXI7XHJcbiAgICBmaXJzdEluZGV4OiBudW1iZXI7XHJcbiAgICBsYXN0SW5kZXg6IG51bWJlcjtcclxuICAgIGRpcmVjdGlvbjogU2Nyb2xsRGlyZWN0aW9uO1xyXG4gICAgZW5kUmVhY2hlZDogYm9vbGVhbjtcclxuICAgIHJlbmRlcmluZ1JlcXVpcmVkOiBib29sZWFuO1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgR2V0RGVmYXVsdEluZGV4Q291bnRlciA9IChyb3dDb3VudDogbnVtYmVyLCBjaHVua1NpemU6IG51bWJlcik6IElJbmRleENvdW50ZXIgPT4ge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBzdGFydEluZGV4OiByb3dDb3VudCAtIDEsXHJcbiAgICAgICAgZW5kSW5kZXg6IHJvd0NvdW50ICsgY2h1bmtTaXplIC0gMSxcclxuICAgICAgICBmaXJzdEluZGV4OiAwLFxyXG4gICAgICAgIGxhc3RJbmRleDogcm93Q291bnQgLSAxLFxyXG4gICAgICAgIGRpcmVjdGlvbjogU2Nyb2xsRGlyZWN0aW9uLkRvd24sXHJcbiAgICAgICAgZW5kUmVhY2hlZDogZmFsc2UsXHJcbiAgICAgICAgcmVuZGVyaW5nUmVxdWlyZWQ6IGZhbHNlLFxyXG4gICAgfTtcclxufTtcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL3RzbGludC1sb2FkZXI/P3JlZi0tMSEuL3NyYy9qcy92aXJ0dWFsaXphdGlvbi9JbmRleENvdW50ZXIudHMiLCJpbXBvcnQgeyBDb25maWdTdG9yZSB9IGZyb20gXCIuLi9jb25maWcvQ29uZmlnU3RvcmVcIjtcclxuaW1wb3J0IHsgSUNvbHVtbiB9IGZyb20gXCIuLy4uL21vZGVscy9JQ29sdW1uXCI7XHJcbmltcG9ydCB7IENvbW1vblV0aWwgfSBmcm9tIFwiLi8uLi91dGlsL0NvbHVtblV0aWxcIjtcclxuXHJcbmVudW0gU2hvd0hpZGUge1xyXG4gICAgU2hvdyxcclxuICAgIEhpZGUsXHJcbiAgICBTaG93QWxsLFxyXG4gICAgSGlkZUFsbCxcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIFRvZ2dsZUNvbHVtbkhhbmRsZXI8VD4ge1xyXG4gICAgcHJpdmF0ZSBjb25maWdTdG9yZTogQ29uZmlnU3RvcmU8VD47XHJcbiAgICBwcml2YXRlIHBhcmVudEVsZW1lbnQ6IEpRdWVyeTtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihjb25maWdTdG9yZTogQ29uZmlnU3RvcmU8VD4sIGVsZW1lbnQ6IEpRdWVyeSkge1xyXG4gICAgICAgIHRoaXMuY29uZmlnU3RvcmUgPSBjb25maWdTdG9yZTtcclxuICAgICAgICB0aGlzLnBhcmVudEVsZW1lbnQgPSBlbGVtZW50O1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzaG93QWxsQ29sdW1ucyA9ICgpOiB2b2lkID0+IHtcclxuICAgICAgICB0aGlzLlNldENvbFdpZHRoKFwiLnRhYmxlLWhlYWRlciAuaGVhZGVyQ29sR3JvdXAgY29sXCIsIFNob3dIaWRlLlNob3dBbGwpO1xyXG4gICAgICAgIHRoaXMuU2V0Q29sV2lkdGgoXCIudGFibGUtYm9keSAuYm9keUNvbEdyb3VwIGNvbFwiLCBTaG93SGlkZS5TaG93QWxsKTtcclxuICAgICAgICB0aGlzLmNvbmZpZ1N0b3JlLlNldEhpZGRlbk9uQ29uZmlnKGZhbHNlKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc2hvd0NvbHVtbiA9IChjb2x1bW5JZDogc3RyaW5nKTogdm9pZCA9PiB7XHJcbiAgICAgICAgdGhpcy5TZXRDb2xXaWR0aChcIi50YWJsZS1oZWFkZXIgLmhlYWRlckNvbEdyb3VwIGNvbFwiLCBTaG93SGlkZS5TaG93LCBjb2x1bW5JZCk7XHJcbiAgICAgICAgdGhpcy5TZXRDb2xXaWR0aChcIi50YWJsZS1ib2R5IC5ib2R5Q29sR3JvdXAgY29sXCIsIFNob3dIaWRlLlNob3csIGNvbHVtbklkKTtcclxuICAgICAgICB0aGlzLmNvbmZpZ1N0b3JlLlNldEhpZGRlbk9uQ29uZmlnKGZhbHNlLCBjb2x1bW5JZCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGhpZGVDb2x1bW4gPSAoY29sdW1uSWQ6IHN0cmluZyk6IHZvaWQgPT4ge1xyXG4gICAgICAgIHRoaXMuU2V0Q29sV2lkdGgoXCIudGFibGUtaGVhZGVyIC5oZWFkZXJDb2xHcm91cCBjb2xcIiwgU2hvd0hpZGUuSGlkZSwgY29sdW1uSWQpO1xyXG4gICAgICAgIHRoaXMuU2V0Q29sV2lkdGgoXCIudGFibGUtYm9keSAuYm9keUNvbEdyb3VwIGNvbFwiLCBTaG93SGlkZS5IaWRlICwgY29sdW1uSWQpO1xyXG4gICAgICAgIHRoaXMuY29uZmlnU3RvcmUuU2V0SGlkZGVuT25Db25maWcodHJ1ZSwgY29sdW1uSWQpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBoaWRlQWxsQ29sdW1ucyA9ICgpOiB2b2lkID0+IHtcclxuICAgICAgICB0aGlzLlNldENvbFdpZHRoKFwiLnRhYmxlLWhlYWRlciAuaGVhZGVyQ29sR3JvdXAgY29sXCIsIFNob3dIaWRlLkhpZGVBbGwpO1xyXG4gICAgICAgIHRoaXMuU2V0Q29sV2lkdGgoXCIudGFibGUtYm9keSAuYm9keUNvbEdyb3VwIGNvbFwiLCBTaG93SGlkZS5IaWRlQWxsKTtcclxuICAgICAgICB0aGlzLmNvbmZpZ1N0b3JlLlNldEhpZGRlbk9uQ29uZmlnKHRydWUpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgU2V0Q29sV2lkdGggPSAoc2VsZWN0b3I6IHN0cmluZywgY29udHJvbDogU2hvd0hpZGUsIGNvbHVtbklkPzogc3RyaW5nKTogdm9pZCA9PiB7XHJcbiAgICAgICAgdGhpcy5wYXJlbnRFbGVtZW50LmZpbmQoc2VsZWN0b3IpLmVhY2goKGluZGV4LCBlbGVtZW50KTogdm9pZCB8IGZhbHNlID0+IHtcclxuICAgICAgICAgICAgbGV0IHdpZHRoID0gMDtcclxuICAgICAgICAgICAgY29uc3QgY3VycmVudENvbEVsZW0gPSBqUXVlcnkoZWxlbWVudCk7XHJcbiAgICAgICAgICAgIGNvbnN0IGN1cnJlbnRDb2wgPSBjdXJyZW50Q29sRWxlbS5hdHRyKFwiZGF0YS1oZWFkZXItaWRcIik7XHJcbiAgICAgICAgICAgIGlmIChjdXJyZW50Q29sICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgIGxldCBjb2w6IElDb2x1bW47XHJcbiAgICAgICAgICAgICAgICBpZiAoW1Nob3dIaWRlLlNob3csIFNob3dIaWRlLkhpZGVdLmluZGV4T2YoY29udHJvbCkgPiAtMSApIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoY3VycmVudENvbCA9PT0gY29sdW1uSWQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGNvbnRyb2wgPT09IFNob3dIaWRlLlNob3cpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbCA9IENvbW1vblV0aWwuR2V0Q29sdW1uT2JqZWN0KGN1cnJlbnRDb2wsIHRoaXMuY29uZmlnU3RvcmUub3B0aW9ucy5jb2x1bW5zKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoID0gY29sLndpZHRoO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJlbnRDb2xFbGVtLndpZHRoKCB3aWR0aCArIFwicHhcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAoW1Nob3dIaWRlLlNob3dBbGwsIFNob3dIaWRlLkhpZGVBbGxdLmluZGV4T2YoY29udHJvbCkgPiAtMSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChjb250cm9sID09PSBTaG93SGlkZS5TaG93QWxsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbCA9IENvbW1vblV0aWwuR2V0Q29sdW1uT2JqZWN0KGN1cnJlbnRDb2wsIHRoaXMuY29uZmlnU3RvcmUub3B0aW9ucy5jb2x1bW5zKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGggPSBjb2wud2lkdGg7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGN1cnJlbnRDb2xFbGVtLndpZHRoKCB3aWR0aCArIFwicHhcIik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvdHNsaW50LWxvYWRlcj8/cmVmLS0xIS4vc3JjL2pzL2V2ZW50SGFuZGxlcnMvVG9nZ2xlQ29sdW1uSGFuZGxlci50cyIsImltcG9ydCAqIGFzIEhhbmRsZWJhcnMgZnJvbSBcImhhbmRsZWJhcnNcIjtcclxuaW1wb3J0ICogYXMgR3JpZERldGFpbHNSb3dUZW1wbGF0ZSBmcm9tIFwiLi4vLi4vaGJzL2dyaWQtZGV0YWlscy1yb3cuaGJzXCI7XHJcbmltcG9ydCAqIGFzIEdyaWRGb290ZXIgZnJvbSBcIi4uLy4uL2hicy9ncmlkLWZvb3Rlci5oYnNcIjtcclxuaW1wb3J0ICogYXMgR3JpZE1haW5Sb3dUZW1wbGF0ZSBmcm9tIFwiLi4vLi4vaGJzL2dyaWQtbWFpbi1yb3cuaGJzXCI7XHJcbmltcG9ydCAqIGFzIE1hbmFnZUNvbHVtblRlbXBsYXRlIGZyb20gXCIuLi8uLi9oYnMvZ3JpZC1tYW5hZ2UtY29sdW1ucy5oYnNcIjtcclxuaW1wb3J0ICogYXMgR3JpZFRlbXBsYXRlIGZyb20gXCIuLi8uLi9oYnMvZ3JpZC5oYnNcIjtcclxuaW1wb3J0IHsgQ29uZmlnU3RvcmUgfSBmcm9tIFwiLi4vY29uZmlnL0NvbmZpZ1N0b3JlXCI7XHJcbmltcG9ydCB7IElQYWdpbmF0aW9uIH0gZnJvbSBcIi4uL21vZGVscy9JUGFnaW5hdGlvblwiO1xyXG5pbXBvcnQgeyBQYWdlciB9IGZyb20gXCIuLi9wYWdpbmF0aW9uL1BhZ2VyXCI7XHJcbmltcG9ydCB7IElDb2x1bW4gfSBmcm9tIFwiLi8uLi9tb2RlbHMvSUNvbHVtblwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIEdyaWRUZW1wbGF0ZVNlcnZpY2UgPFQ+IHtcclxuICAgIHByaXZhdGUgZGF0YTogVFtdO1xyXG4gICAgcHJpdmF0ZSBjb25maWdTdG9yZTogQ29uZmlnU3RvcmU8VD47XHJcbiAgICBwcml2YXRlIHRlbXBsYXRlRnVuY3Rpb25Gb3JHcmlkOiBhbnk7XHJcbiAgICBwcml2YXRlIHRlbXBsYXRlRnVuY3Rpb25Gb3JNYWluUm93OiBhbnk7XHJcbiAgICBwcml2YXRlIHRlbXBsYXRlRnVuY3Rpb25Gb3JEZXRhaWxzUm93OiBhbnk7XHJcbiAgICBwcml2YXRlIHRlbXBsYXRlRnVuY3Rpb25Gb3JGb290ZXI6IGFueTtcclxuICAgIHByaXZhdGUgdGVtcGxhdGVGdW5jdGlvbkZvck1hbmFnZUNvbDogYW55O1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKGNvbmZpZ1N0b3JlOiBDb25maWdTdG9yZTxUPikge1xyXG4gICAgICAgIHRoaXMuY29uZmlnU3RvcmUgPSBjb25maWdTdG9yZTtcclxuICAgICAgICB0aGlzLnRlbXBsYXRlRnVuY3Rpb25Gb3JHcmlkID0gR3JpZFRlbXBsYXRlO1xyXG4gICAgICAgIHRoaXMudGVtcGxhdGVGdW5jdGlvbkZvck1haW5Sb3cgPSBHcmlkTWFpblJvd1RlbXBsYXRlO1xyXG4gICAgICAgIHRoaXMudGVtcGxhdGVGdW5jdGlvbkZvckRldGFpbHNSb3cgPSBHcmlkRGV0YWlsc1Jvd1RlbXBsYXRlO1xyXG4gICAgICAgIHRoaXMudGVtcGxhdGVGdW5jdGlvbkZvckZvb3RlciA9IEdyaWRGb290ZXI7XHJcbiAgICAgICAgdGhpcy50ZW1wbGF0ZUZ1bmN0aW9uRm9yTWFuYWdlQ29sID0gTWFuYWdlQ29sdW1uVGVtcGxhdGU7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldCBEYXRhTGVuZ3RoKCk6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZGF0YS5sZW5ndGg7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgR2V0Rmlyc3RUZW1wbGF0ZSA9IChkYXRhOiBUW10sIGZpcnN0SW5kZXg6IG51bWJlciwgbGFzdEluZGV4OiBudW1iZXIpOiBzdHJpbmcgPT4ge1xyXG4gICAgICAgIHRoaXMuZGF0YSA9IGRhdGE7XHJcbiAgICAgICAgY29uc3QgbWFpblJvd0FycmF5ID0gdGhpcy5HZXRSb3dzSHRtbChmaXJzdEluZGV4LCBsYXN0SW5kZXgpO1xyXG4gICAgICAgIHJldHVybiB0aGlzLnRlbXBsYXRlRnVuY3Rpb25Gb3JHcmlkKHtcclxuICAgICAgICAgICAgY29sdW1uczogdGhpcy5jb25maWdTdG9yZS5PcHRpb25zLmNvbHVtbnMsXHJcbiAgICAgICAgICAgIG1haW5Sb3dBcnJheSxcclxuICAgICAgICAgICAgcGFnaW5hdGlvbkRhdGE6IFBhZ2VyLlBhZ2luYXRpb25EYXRhLFxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBHZXRSb3dzSHRtbCA9IChmaXJzdEluZGV4OiBudW1iZXIsIGxhc3RJbmRleDogbnVtYmVyKTogYW55W10gPT4ge1xyXG4gICAgICAgIGNvbnN0IG1haW5Sb3dBcnJheTogYW55W10gPSBbXTtcclxuICAgICAgICBjb25zdCBsZW5ndGggPSB0aGlzLmNvbmZpZ1N0b3JlLk9wdGlvbnMuY29sdW1ucy5sZW5ndGggKyAxO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSBmaXJzdEluZGV4OyBpIDw9IGxhc3RJbmRleDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHJvdzogVCA9IHRoaXMuZGF0YVtpXTtcclxuICAgICAgICAgICAgY29uc3QgbWFpblJvd0NvbEFycmF5OiBhbnlbXSA9IFtdO1xyXG4gICAgICAgICAgICBmb3IgKGNvbnN0IGNvbCBvZiB0aGlzLmNvbmZpZ1N0b3JlLk9wdGlvbnMuY29sdW1ucykge1xyXG4gICAgICAgICAgICAgICAgbGV0IGNvbHVtblZhbHVlID0gcm93W2NvbC5pZF07XHJcbiAgICAgICAgICAgICAgICBpZiAoY29sLnJlbmRlckh5YnJpZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbHVtblZhbHVlID0gdGhpcy5jb25maWdTdG9yZS5PcHRpb25zLmh5YnJpZEZ1bmN0aW9uKGNvbCwgcm93KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIG1haW5Sb3dDb2xBcnJheS5wdXNoKHtcclxuICAgICAgICAgICAgICAgICAgICBjb2x1bW5WYWx1ZSxcclxuICAgICAgICAgICAgICAgICAgICBoaWRkZW46IGNvbC5oaWRkZW4sXHJcbiAgICAgICAgICAgICAgICAgICAgYWN0dWFsVmFsdWU6IHJvd1tjb2wuaWRdLFxyXG4gICAgICAgICAgICAgICAgICAgIGNvbHVtbk5hbWU6IGNvbC5uYW1lLFxyXG4gICAgICAgICAgICAgICAgICAgIGlkOiBjb2wuaWQsXHJcbiAgICAgICAgICAgICAgICAgICAgZmlsdGVyYWJsZTogY29sLmZpbHRlcmFibGUsXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBtYWluUm93QXJyYXkucHVzaCh7XHJcbiAgICAgICAgICAgICAgICBtYWluUm93Q29sQXJyYXksXHJcbiAgICAgICAgICAgICAgICBsZW5ndGg6IHRoaXMuY29uZmlnU3RvcmUuT3B0aW9ucy5jb2x1bW5zLmxlbmd0aCxcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBtYWluUm93QXJyYXk7XHJcbiAgICB9XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL3RzbGludC1sb2FkZXI/P3JlZi0tMSEuL3NyYy9qcy9zZXJ2aWNlcy9HcmlkVGVtcGxhdGVTZXJ2aWNlLnRzIiwiY29uc3Qgc2VsZWN0ZWQgPSAoaW5wdXQ6IG51bWJlciwgdmFsdWU6IG51bWJlcik6IHN0cmluZyA9PiB7XHJcbiAgICByZXR1cm4gaW5wdXQgPT09IHZhbHVlID8gXCJzZWxlY3RlZFwiIDogXCJcIjtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHNlbGVjdGVkO1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvdHNsaW50LWxvYWRlcj8/cmVmLS0xIS4vc3JjL2hicy9oZWxwZXJzL1NlbGVjdGVkLnRzIiwiY29uc3QgY2hlY2tlZCA9IChib29sOiBib29sZWFuKTogc3RyaW5nID0+IHtcclxuICAgIHJldHVybiBib29sID8gXCJjaGVja2VkXCIgOiBcIlwiO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2hlY2tlZDtcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL3RzbGludC1sb2FkZXI/P3JlZi0tMSEuL3NyYy9oYnMvaGVscGVycy9DaGVja2VkLnRzIiwidmFyIEhhbmRsZWJhcnMgPSByZXF1aXJlKFwiaGFuZGxlYmFyc1wiKTtcbmZ1bmN0aW9uIF9fZGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiAob2JqLl9fZXNNb2R1bGUgPyBvYmpbXCJkZWZhdWx0XCJdIDogb2JqKTsgfVxubW9kdWxlLmV4cG9ydHMgPSAoSGFuZGxlYmFyc1tcImRlZmF1bHRcIl0gfHwgSGFuZGxlYmFycykudGVtcGxhdGUoe1wiMVwiOmZ1bmN0aW9uKGNvbnRhaW5lcixkZXB0aDAsaGVscGVycyxwYXJ0aWFscyxkYXRhKSB7XG4gICAgdmFyIHN0YWNrMTtcblxuICByZXR1cm4gXCIgICAgICAgICAgICAgICAgICAgIFwiXG4gICAgKyAoKHN0YWNrMSA9IF9fZGVmYXVsdChyZXF1aXJlKFwiQzpcXFxcVXNlcnNcXFxccm91c3R1cmdcXFxcU291cmNlXFxcXFJlcG9zXFxcXFNlYXJjaE1hc3RlclxcXFxHcmlkb29cXFxcc3JjXFxcXGhic1xcXFxoZWxwZXJzXFxcXENvbHVtbi50c1wiKSkuY2FsbChkZXB0aDAgIT0gbnVsbCA/IGRlcHRoMCA6IChjb250YWluZXIubnVsbENvbnRleHQgfHwge30pLGRlcHRoMCx7XCJuYW1lXCI6XCJDb2x1bW5cIixcImhhc2hcIjp7fSxcImRhdGFcIjpkYXRhfSkpICE9IG51bGwgPyBzdGFjazEgOiBcIlwiKVxuICAgICsgXCJcXG5cIjtcbn0sXCIzXCI6ZnVuY3Rpb24oY29udGFpbmVyLGRlcHRoMCxoZWxwZXJzLHBhcnRpYWxzLGRhdGEpIHtcbiAgICB2YXIgc3RhY2sxLCBhbGlhczE9Y29udGFpbmVyLmxhbWJkYSwgYWxpYXMyPWNvbnRhaW5lci5lc2NhcGVFeHByZXNzaW9uO1xuXG4gIHJldHVybiBcIiAgICAgICAgICAgICAgICAgICAgICAgIDx0aCBpZD1cXFwiaGVhZGVyLVwiXG4gICAgKyBhbGlhczIoYWxpYXMxKChkZXB0aDAgIT0gbnVsbCA/IGRlcHRoMC5pZCA6IGRlcHRoMCksIGRlcHRoMCkpXG4gICAgKyBcIlxcXCIgZGF0YS1oZWFkZXItaWQ9XFxcIlwiXG4gICAgKyBhbGlhczIoYWxpYXMxKChkZXB0aDAgIT0gbnVsbCA/IGRlcHRoMC5pZCA6IGRlcHRoMCksIGRlcHRoMCkpXG4gICAgKyBcIlxcXCI+XFxuXCJcbiAgICArICgoc3RhY2sxID0gaGVscGVyc1tcImlmXCJdLmNhbGwoZGVwdGgwICE9IG51bGwgPyBkZXB0aDAgOiAoY29udGFpbmVyLm51bGxDb250ZXh0IHx8IHt9KSwoZGVwdGgwICE9IG51bGwgPyBkZXB0aDAuc29ydGFibGUgOiBkZXB0aDApLHtcIm5hbWVcIjpcImlmXCIsXCJoYXNoXCI6e30sXCJmblwiOmNvbnRhaW5lci5wcm9ncmFtKDQsIGRhdGEsIDApLFwiaW52ZXJzZVwiOmNvbnRhaW5lci5ub29wLFwiZGF0YVwiOmRhdGF9KSkgIT0gbnVsbCA/IHN0YWNrMSA6IFwiXCIpXG4gICAgKyBcIiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cXFwiZ3VpIHN1YiBoZWFkZXJcXFwiPlwiXG4gICAgKyBhbGlhczIoYWxpYXMxKChkZXB0aDAgIT0gbnVsbCA/IGRlcHRoMC5uYW1lIDogZGVwdGgwKSwgZGVwdGgwKSlcbiAgICArIFwiPC9zcGFuPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdGg+XFxuXCI7XG59LFwiNFwiOmZ1bmN0aW9uKGNvbnRhaW5lcixkZXB0aDAsaGVscGVycyxwYXJ0aWFscyxkYXRhKSB7XG4gICAgcmV0dXJuIFwiICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzcz1cXFwiZ3VpIGd1aS1pY29uIGd1aS1pY29uLWFycm93LXVwIGd1aS1oaWRkZW5cXFwiIGFyaWEtaGlkZGVuPVxcXCJ0cnVlXFxcIiA+PC9pPiAgICAgICAgICAgICAgICAgICAgICAgIFxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3M9XFxcImd1aSBndWktaWNvbiBndWktaWNvbi1hcnJvdy1kb3duIGd1aS1oaWRkZW5cXFwiIGFyaWEtaGlkZGVuPVxcXCJ0cnVlXFxcIiA+PC9pPlxcblwiO1xufSxcImNvbXBpbGVyXCI6WzcsXCI+PSA0LjAuMFwiXSxcIm1haW5cIjpmdW5jdGlvbihjb250YWluZXIsZGVwdGgwLGhlbHBlcnMscGFydGlhbHMsZGF0YSkge1xuICAgIHZhciBzdGFjazEsIGFsaWFzMT1kZXB0aDAgIT0gbnVsbCA/IGRlcHRoMCA6IChjb250YWluZXIubnVsbENvbnRleHQgfHwge30pO1xuXG4gIHJldHVybiBcIjxzdHlsZT5cXG4gICAgLmlubmVyLWNvbnRhaW5lciB7XFxuICAgICAgICBoZWlnaHQ6IDEwMCU7XFxuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgICAgICAgd2lkdGg6IDEwMCU7XFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgfVxcblxcbiAgICAudGFibGUtaGVhZGVyIHtcXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgICAgIHRvcDowICFpbXBvcnRhbnQ7XFxuICAgIH1cXG5cXG4gICAgLnRhYmxlLWJvZHkge1xcbiAgICAgICAgb3ZlcmZsb3c6IGF1dG87XFxuICAgICAgICBmbGV4OiA1O1xcbiAgICAgICAgcGFkZGluZy1yaWdodDogMTdweDtcXG4gICAgfVxcbiAgICAudGFibGUtZm9vdGVye1xcbiAgICAgICAgaGVpZ2h0OiAzNXB4O1xcbiAgICAgICAgcGFkZGluZzogNXB4O1xcbiAgICB9XFxuICAgIC50YWJsZS1mb290ZXIgLmZvb3Rlci1taWRkbGV7XFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICB9XFxuICAgIC50YWJsZS1mb290ZXIgLmZvb3Rlci1yaWdodHtcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIH1cXG4gICAgLm1hcmdpbi1hdXRve1xcbiAgICAgICAgbWFyZ2luOiBhdXRvICFpbXBvcnRhbnQ7XFxuICAgIH1cXG4gICAgLmNvbHVtbi1zZXR0aW5ncy1jb250YWluZXJ7XFxuICAgICAgICBwb3NpdGlvbjphYnNvbHV0ZSAhaW1wb3J0YW50O1xcbiAgICAgICAgei1pbmRleDoxMDAwICFpbXBvcnRhbnQ7XFxuICAgICAgICBib3R0b206MzVweCAhaW1wb3J0YW50O1xcbiAgICAgICAgbGVmdDogNXB4O1xcbiAgICAgICAgZGlzcGxheTpub25lO1xcbiAgICAgICAgYm94LXNoYWRvdzogMCAxcHggM3B4IDAgI2Q0ZDRkNSwgMCAwIDAgMXB4ICNkNGQ0ZDU7XFxuICAgIH1cXG4gICAgLnJlbW92ZS1sYWJlbDpob3ZlcntcXG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICB9XFxuICAgIC5ib3JkZXItbGVzcyB0ciB0ZCwuYm9yZGVyLWxlc3MgeyBib3JkZXI6IDBweCAhaW1wb3J0YW50OyB9XFxuICAgIC5jdXJzb3ItcG9pbnRlcntcXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgfVxcbiAgICAudWkuc3VwZXJjb21wYWN0Lmljb24uYnV0dG9uLCAudWkuc3VwZXJjb21wYWN0Lmljb24uYnV0dG9ucyAuYnV0dG9uIHtcXG4gICAgICAgIHBhZGRpbmc6IC4zZW0gLjNlbSAuM2VtIC4zZW0gIWltcG9ydGFudDtcXG4gICAgfVxcbjwvc3R5bGU+XFxuPGRpdiBjbGFzcz1cXFwiaW5uZXItY29udGFpbmVyIGd1aSBmbHVpZCBjb250YWluZXJcXFwiIHN0eWxlPVxcXCJwYWRkaW5nOjAlO1xcXCI+XFxuICAgIDxkaXYgY2xhc3M9XFxcInRhYmxlLWhlYWRlclxcXCI+XFxuICAgICAgICA8dGFibGUgaWQ9XFxcImhlYWRlcnRhYmxlXFxcIiBjbGFzcz1cXFwiZ3VpIGxhcmdlIGNvbXBhY3QgZml4ZWQgc2VsZWN0YWJsZSBzaW5nbGUgbGluZSB0YWJsZSBtYWluVGFibGVcXFwiPlxcbiAgICAgICAgICAgIDxjb2xncm91cCBjbGFzcz1cXFwiaGVhZGVyQ29sR3JvdXBcXFwiPlxcbiAgICAgICAgICAgICAgICA8Y29sIHN0eWxlPVxcXCJ3aWR0aDo0MHB4O1xcXCIgLz5cXG4gICAgICAgICAgICAgICAgPGNvbCBzdHlsZT1cXFwid2lkdGg6NDBweDtcXFwiIC8+XFxuXCJcbiAgICArICgoc3RhY2sxID0gaGVscGVycy5lYWNoLmNhbGwoYWxpYXMxLChkZXB0aDAgIT0gbnVsbCA/IGRlcHRoMC5jb2x1bW5zIDogZGVwdGgwKSx7XCJuYW1lXCI6XCJlYWNoXCIsXCJoYXNoXCI6e30sXCJmblwiOmNvbnRhaW5lci5wcm9ncmFtKDEsIGRhdGEsIDApLFwiaW52ZXJzZVwiOmNvbnRhaW5lci5ub29wLFwiZGF0YVwiOmRhdGF9KSkgIT0gbnVsbCA/IHN0YWNrMSA6IFwiXCIpXG4gICAgKyBcIiAgICAgICAgICAgIDwvY29sZ3JvdXA+XFxuICAgICAgICAgICAgPHRoZWFkPlxcbiAgICAgICAgICAgICAgICA8dHI+XFxuICAgICAgICAgICAgICAgICAgICA8dGg+PC90aD5cXG4gICAgICAgICAgICAgICAgICAgIDx0aD48L3RoPlxcblwiXG4gICAgKyAoKHN0YWNrMSA9IGhlbHBlcnMuZWFjaC5jYWxsKGFsaWFzMSwoZGVwdGgwICE9IG51bGwgPyBkZXB0aDAuY29sdW1ucyA6IGRlcHRoMCkse1wibmFtZVwiOlwiZWFjaFwiLFwiaGFzaFwiOnt9LFwiZm5cIjpjb250YWluZXIucHJvZ3JhbSgzLCBkYXRhLCAwKSxcImludmVyc2VcIjpjb250YWluZXIubm9vcCxcImRhdGFcIjpkYXRhfSkpICE9IG51bGwgPyBzdGFjazEgOiBcIlwiKVxuICAgICsgXCIgICAgICAgICAgICAgICAgPC90cj5cXG4gICAgICAgICAgICA8L3RoZWFkPlxcbiAgICAgICAgPC90YWJsZT5cXG4gICAgPC9kaXY+XFxuICAgIDxkaXYgY2xhc3M9XFxcInRhYmxlLWJvZHlcXFwiPlxcbiAgICAgICAgPHRhYmxlIGNsYXNzPVxcXCJndWkgYmFzaWMgbGFyZ2UgY29tcGFjdCBmaXhlZCBzZWxlY3RhYmxlIHNpbmdsZSBsaW5lIHRhYmxlIG1haW5UYWJsZVxcXCI+XFxuICAgICAgICAgICAgPGNvbGdyb3VwIGNsYXNzPVxcXCJib2R5Q29sR3JvdXBcXFwiPlxcbiAgICAgICAgICAgICAgICA8Y29sIHN0eWxlPVxcXCJ3aWR0aDo0MHB4O1xcXCIgLz4gXFxuICAgICAgICAgICAgICAgIDxjb2wgc3R5bGU9XFxcIndpZHRoOjQwcHg7XFxcIiAvPlxcblwiXG4gICAgKyAoKHN0YWNrMSA9IGhlbHBlcnMuZWFjaC5jYWxsKGFsaWFzMSwoZGVwdGgwICE9IG51bGwgPyBkZXB0aDAuY29sdW1ucyA6IGRlcHRoMCkse1wibmFtZVwiOlwiZWFjaFwiLFwiaGFzaFwiOnt9LFwiZm5cIjpjb250YWluZXIucHJvZ3JhbSgxLCBkYXRhLCAwKSxcImludmVyc2VcIjpjb250YWluZXIubm9vcCxcImRhdGFcIjpkYXRhfSkpICE9IG51bGwgPyBzdGFjazEgOiBcIlwiKVxuICAgICsgXCIgICAgICAgICAgICA8L2NvbGdyb3VwPlxcbiAgICAgICAgICAgIDx0Ym9keSBjbGFzcz1cXFwibWFpblRhYmxlQm9keVxcXCI+XFxuXCJcbiAgICArICgoc3RhY2sxID0gY29udGFpbmVyLmludm9rZVBhcnRpYWwocmVxdWlyZShcIkM6XFxcXFVzZXJzXFxcXHJvdXN0dXJnXFxcXFNvdXJjZVxcXFxSZXBvc1xcXFxTZWFyY2hNYXN0ZXJcXFxcR3JpZG9vXFxcXHNyY1xcXFxoYnNcXFxcZ3JpZC1tYWluLXJvdy5oYnNcIiksZGVwdGgwLHtcIm5hbWVcIjpcImdyaWQtbWFpbi1yb3dcIixcImRhdGFcIjpkYXRhLFwiaW5kZW50XCI6XCIgICAgICAgICAgICAgICAgXCIsXCJoZWxwZXJzXCI6aGVscGVycyxcInBhcnRpYWxzXCI6cGFydGlhbHMsXCJkZWNvcmF0b3JzXCI6Y29udGFpbmVyLmRlY29yYXRvcnN9KSkgIT0gbnVsbCA/IHN0YWNrMSA6IFwiXCIpXG4gICAgKyBcIiAgICAgICAgICAgIDwvdGJvZHk+XFxuICAgICAgICA8L3RhYmxlPlxcbiAgICA8L2Rpdj5cXG4gICAgPGRpdiBjbGFzcz1cXFwidGFibGUtZm9vdGVyIGd1aSBoLWF1dG8gZmx1aWQtdyBiYXNpYyBjdXJ2ZWQgcm93IHAtNSBtLTBcXFwiPlxcblwiXG4gICAgKyAoKHN0YWNrMSA9IGNvbnRhaW5lci5pbnZva2VQYXJ0aWFsKHJlcXVpcmUoXCJDOlxcXFxVc2Vyc1xcXFxyb3VzdHVyZ1xcXFxTb3VyY2VcXFxcUmVwb3NcXFxcU2VhcmNoTWFzdGVyXFxcXEdyaWRvb1xcXFxzcmNcXFxcaGJzXFxcXGdyaWQtZm9vdGVyLmhic1wiKSxkZXB0aDAse1wibmFtZVwiOlwiZ3JpZC1mb290ZXJcIixcImRhdGFcIjpkYXRhLFwiaW5kZW50XCI6XCIgICAgICAgICAgIFwiLFwiaGVscGVyc1wiOmhlbHBlcnMsXCJwYXJ0aWFsc1wiOnBhcnRpYWxzLFwiZGVjb3JhdG9yc1wiOmNvbnRhaW5lci5kZWNvcmF0b3JzfSkpICE9IG51bGwgPyBzdGFjazEgOiBcIlwiKVxuICAgICsgXCIgICAgPC9kaXY+XFxuPC9kaXY+XCI7XG59LFwidXNlUGFydGlhbFwiOnRydWUsXCJ1c2VEYXRhXCI6dHJ1ZX0pO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2hicy9ncmlkLmhic1xuLy8gbW9kdWxlIGlkID0gMjhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEiLCJjb25zdCBDb2x1bW4gPSAoY29sKTogc3RyaW5nID0+IHtcclxuICAgIGNvbnN0IGNhbGNXaWR0aDogbnVtYmVyID0gY29sLmhpZGRlbiA/IDAgOiBjb2wud2lkdGg7XHJcbiAgICBjb25zdCBkYXRhQXR0cklkID0gJ2RhdGEtaGVhZGVyLWlkPVwiJyArIGNvbC5pZCArICdcIic7XHJcbiAgICByZXR1cm4gJzxjb2wgc3R5bGU9XCJ3aWR0aCA6ICcgKyBjYWxjV2lkdGggKyAncHg7XCInICsgZGF0YUF0dHJJZCArIFwiIC8+XCI7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDb2x1bW47XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy90c2xpbnQtbG9hZGVyPz9yZWYtLTEhLi9zcmMvaGJzL2hlbHBlcnMvQ29sdW1uLnRzIl0sInNvdXJjZVJvb3QiOiIifQ==