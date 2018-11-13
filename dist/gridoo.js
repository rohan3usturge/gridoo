(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("handlebars/runtime"), require("jQuery"));
	else if(typeof define === 'function' && define.amd)
		define(["handlebars.runtime", "jQuery"], factory);
	else if(typeof exports === 'object')
		exports["Gridoo"] = factory(require("handlebars/runtime"), require("jQuery"));
	else
		root["Gridoo"] = factory(root["Handlebars"], root["jQuery"]);
})(typeof self !== 'undefined' ? self : this, function(__WEBPACK_EXTERNAL_MODULE_0__, __WEBPACK_EXTERNAL_MODULE_4__) {
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
/******/ 	return __webpack_require__(__webpack_require__.s = 12);
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
/*!********************************!*\
  !*** ./src/hbs/helpers/Add.ts ***!
  \********************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Add = function (left, right) {
    return (left + right).toString();
};
exports.default = Add;


/***/ }),
/* 3 */
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
/* 4 */
/*!*************************!*\
  !*** external "jQuery" ***!
  \*************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_4__;

/***/ }),
/* 5 */
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
    CommonUtil.SetOrder = function (columnId, orderBy, columns) {
        if (columnId == null || columns == null) {
            return null;
        }
        var retCol;
        columns.forEach(function (col) {
            if (col.id === columnId) {
                col.orderBy = orderBy;
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
/* 6 */
/*!*********************************************!*\
  !*** ./src/js/models/GridOrderDirection.ts ***!
  \*********************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var GridOrderDirection;
(function (GridOrderDirection) {
    GridOrderDirection["None"] = "None";
    GridOrderDirection["Asc"] = "Asc";
    GridOrderDirection["Desc"] = "Desc";
})(GridOrderDirection = exports.GridOrderDirection || (exports.GridOrderDirection = {}));


/***/ }),
/* 7 */
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

  return "                <tr>\r\n                    <td class=\"gui rv-parent\" \r\n                        valign=\"top\" \r\n                        data-filter-type=\""
    + alias4(((helper = (helper = helpers.type || (depth0 != null ? depth0.type : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"type","hash":{},"data":data}) : helper)))
    + "\" \r\n                        data-filter-key=\""
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "\" \r\n                        data-filter-value=\""
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
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<tr id=\"details-row-"
    + alias4(((helper = (helper = helpers.index || (data && data.index)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"index","hash":{},"data":data}) : helper)))
    + "\" class=\"gui gui-hidden detailsRow\" aria-live=\"polite\">\r\n    <td colspan=\""
    + alias4(((helper = (helper = helpers.length || (depth0 != null ? depth0.length : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"length","hash":{},"data":data}) : helper)))
    + "\">\r\n        <table class=\"gui very compact selectable celled table detailsTable m-l-37 p-5\" \r\n               style=\"width: auto;\" >\r\n            <tbody>\r\n"
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.mainRowColArray : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "            </tbody>\r\n        </table>\r\n    </td>\r\n</tr>";
},"useData":true});

/***/ }),
/* 8 */
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

  return "            <option "
    + alias1(__default(__webpack_require__(/*! ./src/hbs/helpers/Selected.ts */ 23)).call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = (depths[1] != null ? depths[1].paginationData : depths[1])) != null ? stack1.pageSize : stack1),depth0,{"name":"Selected","hash":{},"data":data}))
    + ">"
    + alias1(container.lambda(depth0, depth0))
    + "</option>\r\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, alias1=container.lambda, alias2=container.escapeExpression, alias3=depth0 != null ? depth0 : (container.nullContext || {});

  return "<div role=\"navigation\" class=\"gui flex jc-sb gui-subheading-1 text-left m-0\">\r\n    <div class=\"gui m-r-10\">\r\n        <button class=\"gui firstLink\" \r\n                aria-disabled=\""
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.paginationData : depth0)) != null ? stack1.firstPageLinkDisabled : stack1), depth0))
    + "\" \r\n                "
    + alias2(__default(__webpack_require__(/*! ./src/hbs/helpers/Disabled.ts */ 1)).call(alias3,((stack1 = (depth0 != null ? depth0.paginationData : depth0)) != null ? stack1.firstPageLinkDisabled : stack1),{"name":"Disabled","hash":{},"data":data}))
    + "\r\n                aria-label=\"Go to the first page\" \r\n                title=\"Go to the first page\" \r\n                data-page=\"1\">\r\n            <i class=\"gui-icon gui-icon-previous\"></i>\r\n        </button>\r\n        <button class=\"gui prevLink\" \r\n                aria-disabled=\""
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.paginationData : depth0)) != null ? stack1.prevPageLinkDisabled : stack1), depth0))
    + "\" \r\n                "
    + alias2(__default(__webpack_require__(/*! ./src/hbs/helpers/Disabled.ts */ 1)).call(alias3,((stack1 = (depth0 != null ? depth0.paginationData : depth0)) != null ? stack1.prevPageLinkDisabled : stack1),{"name":"Disabled","hash":{},"data":data}))
    + "\r\n                aria-label=\"Go to the previous page\" \r\n                title=\"Go to the previous page\" \r\n                data-page=\""
    + alias2(__default(__webpack_require__(/*! ./src/hbs/helpers/math.ts */ 9)).call(alias3,((stack1 = (depth0 != null ? depth0.paginationData : depth0)) != null ? stack1.pageIndex : stack1),"-",1,{"name":"math","hash":{},"data":data}))
    + "\">\r\n            <i class=\"gui-icon gui-icon-chevron-left\"></i>\r\n            Prev\r\n        </button>\r\n    </div>\r\n    <div class=\"gui pager-input-container medium h-30 input flex jc-sb m-r-10\">\r\n        <div class=\"gui m-r-5\"> Page </div>\r\n        <input  class=\"gui pager-input h-30 w-50 m-r-5\" \r\n                aria-label=\"Go to Page "
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.paginationData : depth0)) != null ? stack1.pageIndex : stack1), depth0))
    + "\" \r\n                title=\"Go to Page "
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.paginationData : depth0)) != null ? stack1.pageIndex : stack1), depth0))
    + "\" \r\n                value=\""
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.paginationData : depth0)) != null ? stack1.pageIndex : stack1), depth0))
    + "\" \r\n                type=\"text\" \r\n                placeholder=\"Page Number ...\">\r\n        <div class=\"no-of-pages-scan\" \r\n             data-number-of-pages=\""
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.paginationData : depth0)) != null ? stack1.noOfPages : stack1), depth0))
    + "\">\r\n             of "
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.paginationData : depth0)) != null ? stack1.noOfPages : stack1), depth0))
    + "\r\n        </div>\r\n    </div>\r\n    <div class=\"gui m-r-10\">\r\n        <button class=\"gui nextLink\" \r\n                aria-disabled=\""
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.paginationData : depth0)) != null ? stack1.nextPageLinkDisabled : stack1), depth0))
    + "\" \r\n                "
    + alias2(__default(__webpack_require__(/*! ./src/hbs/helpers/Disabled.ts */ 1)).call(alias3,((stack1 = (depth0 != null ? depth0.paginationData : depth0)) != null ? stack1.nextPageLinkDisabled : stack1),{"name":"Disabled","hash":{},"data":data}))
    + "\r\n                aria-label=\"Go to the next page\" \r\n                title=\"Go to the next page\" \r\n                data-page=\""
    + alias2(__default(__webpack_require__(/*! ./src/hbs/helpers/math.ts */ 9)).call(alias3,((stack1 = (depth0 != null ? depth0.paginationData : depth0)) != null ? stack1.pageIndex : stack1),"+",1,{"name":"math","hash":{},"data":data}))
    + "\" >\r\n            Next\r\n            <i class=\"gui-icon gui-icon-chevron-right\"></i>\r\n        </button>\r\n        <button class=\"gui lastLink\" \r\n                aria-disabled=\""
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.paginationData : depth0)) != null ? stack1.lastPageLinkDisabled : stack1), depth0))
    + "\" \r\n                "
    + alias2(__default(__webpack_require__(/*! ./src/hbs/helpers/Disabled.ts */ 1)).call(alias3,((stack1 = (depth0 != null ? depth0.paginationData : depth0)) != null ? stack1.lastPageLinkDisabled : stack1),{"name":"Disabled","hash":{},"data":data}))
    + "\r\n                aria-label=\"Go to the last page\" \r\n                title=\"Go to the last page\" \r\n                data-page=\""
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.paginationData : depth0)) != null ? stack1.noOFpages : stack1), depth0))
    + "\">\r\n            <i class=\"gui-icon gui-icon-next\"></i>\r\n        </button>\r\n    </div>\r\n</div>\r\n<div class=\"gui gui-subheading-1 flex jc-sb text-right m-0\">\r\n    <label  for=\"page-size-selector\" \r\n            class=\"gui m-r-10\">\r\n            Rows Per Page\r\n    </label>\r\n    <select id=\"page-size-selector\" \r\n            class=\"gui pageSizeSelector m-r-10 h-30\">\r\n"
    + ((stack1 = helpers.each.call(alias3,((stack1 = (depth0 != null ? depth0.paginationData : depth0)) != null ? stack1.pageSizes : stack1),{"name":"each","hash":{},"fn":container.program(1, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "    </select>\r\n    <div class=\"gui m-r-10\">\r\n        "
    + alias2(alias1(((stack1 = ((stack1 = (depth0 != null ? depth0.paginationData : depth0)) != null ? stack1.range : stack1)) != null ? stack1.min : stack1), depth0))
    + " - "
    + alias2(alias1(((stack1 = ((stack1 = (depth0 != null ? depth0.paginationData : depth0)) != null ? stack1.range : stack1)) != null ? stack1.max : stack1), depth0))
    + " of "
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.paginationData : depth0)) != null ? stack1.totalCount : stack1), depth0))
    + " items\r\n    </div>\r\n</div>";
},"useData":true,"useDepths":true});

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
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.escapeExpression, alias3=container.lambda;

  return "<tr aria-rowindex=\""
    + alias2(__default(__webpack_require__(/*! ./src/hbs/helpers/Add.ts */ 2)).call(alias1,(depth0 != null ? depth0.rowIndex : depth0),1,{"name":"Add","hash":{},"data":data}))
    + "\" class=\"mainRow "
    + alias2(__default(__webpack_require__(/*! ./src/hbs/helpers/BoolAttribute.ts */ 11)).call(alias1,(depth0 != null ? depth0.isAllSelected : depth0),"active",{"name":"BoolAttribute","hash":{},"data":data}))
    + "\" data-pk-attr=\""
    + alias2(alias3((depth0 != null ? depth0.keyColumn : depth0), depth0))
    + "\" role=\"row\" >\r\n    <td class=\"expansionArrows\" \r\n        class=\"gui flex jc-sb\"\r\n        aria-colindex=\"1\"\r\n        role=\"gridcell\">\r\n        <i aria-label=\"Press enter to expand the details Row\" \r\n           title=\"Expand the details Row\" \r\n           aria-controls=\"details-row-"
    + alias2(alias3((data && data.index), depth0))
    + "\" \r\n           class=\"gui gui-icon gui-icon-chevron-down expandDetailsRowIcon cursor-pointer\" \r\n           tabindex=\"0\" \r\n           aria-hidden=\"false\"></i>\r\n        <i aria-label=\"Press enter to collapse the details Row\" \r\n           title=\"Collapse the details Row\" \r\n           aria-controls=\"details-row-"
    + alias2(alias3((data && data.index), depth0))
    + "\" \r\n           class=\"gui gui-icon gui-icon-chevron-up CollapseDetailsRowIcon cursor-pointer gui-hidden\" \r\n           tabindex=\"0\" \r\n           aria-hidden=\"true\"></i>\r\n    </td>\r\n    <td role=\"gridcell\"\r\n        aria-colindex=\"2\" >\r\n        <input aria-label=\"Checkbox to select the row with Id "
    + alias2(alias3((depth0 != null ? depth0.keyColumn : depth0), depth0))
    + "\" \r\n            type=\"checkbox\"\r\n            "
    + alias2(__default(__webpack_require__(/*! ./src/hbs/helpers/BoolAttribute.ts */ 11)).call(alias1,(depth0 != null ? depth0.isAllSelected : depth0),"checked",{"name":"BoolAttribute","hash":{},"data":data}))
    + "\r\n            value=\""
    + alias2(alias3((depth0 != null ? depth0.keyColumn : depth0), depth0))
    + "\" \r\n            class=\"select-key-checkbox cursor-pointer\">\r\n    </td>\r\n"
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.mainRowColArray : depth0),{"name":"each","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</tr>\r\n"
    + ((stack1 = container.invokePartial(__webpack_require__(/*! ./src/hbs/grid-details-row.hbs */ 7),depth0,{"name":"grid-details-row","data":data,"helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "");
},"2":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.lambda, alias2=container.escapeExpression;

  return "        <td title=\""
    + alias2(alias1((depth0 != null ? depth0.actualValue : depth0), depth0))
    + "\"\r\n            aria-colindex=\""
    + alias2(__default(__webpack_require__(/*! ./src/hbs/helpers/Add.ts */ 2)).call(depth0 != null ? depth0 : (container.nullContext || {}),(data && data.index),3,{"name":"Add","hash":{},"data":data}))
    + "\"\r\n            class=\"body-"
    + alias2(alias1((depth0 != null ? depth0.id : depth0), depth0))
    + "\">"
    + ((stack1 = alias1((depth0 != null ? depth0.columnValue : depth0), depth0)) != null ? stack1 : "")
    + "</td>\r\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers.each.call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.mainRowArray : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"usePartial":true,"useData":true});

/***/ }),
/* 11 */
/*!******************************************!*\
  !*** ./src/hbs/helpers/BoolAttribute.ts ***!
  \******************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var boolAttribute = function (bool, str) {
    return bool ? str : "";
};
exports.default = boolAttribute;


/***/ }),
/* 12 */
/*!*****************************!*\
  !*** ./src/js/main/Grid.ts ***!
  \*****************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var jQuery = __webpack_require__(/*! jquery */ 4);
var ConfigStore_1 = __webpack_require__(/*! ../config/ConfigStore */ 13);
var SelectEventHandler_1 = __webpack_require__(/*! ../eventHandlers/SelectEventHandler */ 14);
var Pager_1 = __webpack_require__(/*! ../pagination/Pager */ 3);
var DetailsRowHandler_1 = __webpack_require__(/*! ./../eventHandlers/DetailsRowHandler */ 15);
var FilterClickHandler_1 = __webpack_require__(/*! ./../eventHandlers/FilterClickHandler */ 16);
var HandlerNames_1 = __webpack_require__(/*! ./../eventHandlers/HandlerNames */ 18);
var HeaderClickHandler_1 = __webpack_require__(/*! ./../eventHandlers/HeaderClickHandler */ 19);
var PageSearchClickHandler_1 = __webpack_require__(/*! ./../eventHandlers/PageSearchClickHandler */ 20);
var ScrollHandler_1 = __webpack_require__(/*! ./../eventHandlers/ScrollHandler */ 21);
var GridTemplateService_1 = __webpack_require__(/*! ./../services/GridTemplateService */ 22);
var Grid = /** @class */ (function () {
    function Grid(options) {
        var _this = this;
        this.bindData = function (data, paginationInput) {
            setTimeout(function () {
                Pager_1.Pager.CalculatePaginationData(paginationInput);
                _this.internalRender(data);
            }, 1);
        };
        this.reRender = function () {
            setTimeout(function () {
                _this.internalRender(_this.gridTemplateService.Data);
            }, 1);
        };
        this.setColConfig = function (colConfig) {
            _this.configStore.Options.columns = colConfig;
        };
        // TODO: Update Row Index
        this.updateRows = function (rows) {
            if (rows === undefined || !rows.length) {
                return;
            }
            _this.gridTemplateService.updateRows(rows);
            var container = $(_this.configStore.Options.containerElement);
            var key = _this.configStore.Options.keyColumn;
            var _loop_1 = function (row) {
                var rowHtml = _this.gridTemplateService.getTemplateForOneRow(row);
                var rowJq = $(rowHtml);
                container.find(".mainRow").each(function (i, mR) {
                    var mrJq = $(mR);
                    var pkId = mrJq.attr("data-pk-attr");
                    if (pkId === row[key]) {
                        mrJq.html(rowJq[0].innerHTML);
                        mrJq.next().html(rowJq[2].innerHTML);
                        return;
                    }
                });
            };
            for (var _i = 0, rows_1 = rows; _i < rows_1.length; _i++) {
                var row = rows_1[_i];
                _loop_1(row);
            }
        };
        this.setOrder = function (orderByList) {
            for (var _i = 0, _a = _this.configStore.Options.columns; _i < _a.length; _i++) {
                var col = _a[_i];
                col.orderBy = undefined;
            }
            if (orderByList === undefined || orderByList === null || orderByList.length === 0) {
                return;
            }
            for (var _b = 0, orderByList_1 = orderByList; _b < orderByList_1.length; _b++) {
                var orderCol = orderByList_1[_b];
                for (var _c = 0, _d = _this.configStore.Options.columns; _c < _d.length; _c++) {
                    var col = _d[_c];
                    if (orderCol.colId === col.id) {
                        col.orderBy = orderCol.orderBy;
                        break;
                    }
                }
            }
        };
        this.destroy = function () {
            var parentElement = jQuery(_this.configStore.Options.containerElement);
            if (parentElement !== undefined) {
                parentElement.off();
            }
            $(window).off("resize", _this.documentResizeHandler);
            $(document).off("click", _this.documentClickHandler);
            $(window).off("resize", _this.documentResizeHandlerForCs);
            $(document).off("click", _this.documentClickHandlerForCs);
        };
        this.internalRender = function (data) {
            var firstIndex = 0;
            var lastIndex = _this.configStore.Options.chunkSize + _this.getInitialRowCount();
            lastIndex = lastIndex >= data.length ? data.length - 1 : lastIndex;
            var gridContent = _this.gridTemplateService.GetFirstTemplate(data, firstIndex, lastIndex);
            _this.configStore.Options.containerElement.innerHTML = gridContent;
            if (_this.scrollHandler !== undefined && _this.scrollHandler !== null) {
                _this.scrollHandler.removeHandler();
                _this.scrollHandler.setCurrentIndex(lastIndex + 1);
            }
            else {
                _this.scrollHandler = new ScrollHandler_1.ScrollHandler(_this.configStore, _this.gridTemplateService, lastIndex + 1);
            }
            _this.scrollHandler.RegisterDomHandler();
            setTimeout(function () {
                _this.setFocusToLastElement();
            }, 50);
        };
        this.getInitialRowCount = function () {
            return Math.floor((jQuery(window).innerHeight() * 0.65) / 32);
        };
        this.InitHandlers = function () {
            var parentElement = jQuery(_this.configStore.Options.containerElement);
            _this.handleChain = [];
            _this.handleChain.push({
                handler: new DetailsRowHandler_1.DetailsRowHandler(_this.configStore, parentElement),
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
            _this.handleChain.push({
                handler: new SelectEventHandler_1.SelectEventHandler(_this.configStore, parentElement, _this.gridTemplateService),
                name: HandlerNames_1.HandlerNames.ColSettings,
            });
            _this.handleChain.forEach(function (value) {
                value.handler.RegisterDomHandler();
            });
            jQuery(window).resize(_this.documentResizeHandler);
            jQuery(document).click(_this.documentClickHandler);
        };
        this.documentResizeHandlerForCs = function (event) {
            _this.manageColHandler.onResize();
            event.stopPropagation();
        };
        this.documentClickHandlerForCs = function (event) {
            _this.manageColHandler.onDocumentClick(event);
            event.stopPropagation();
        };
        this.documentClickHandler = function (event) {
            _this.handleChain.forEach(function (value) {
                value.handler.onDocumentClick(event);
            });
            event.stopPropagation();
        };
        this.documentResizeHandler = function (event) {
            _this.handleChain.forEach(function (value) {
                value.handler.onDocumentClick(event);
            });
            event.stopPropagation();
        };
        this.setFocusToLastElement = function () {
            var element = _this.configStore.getFocusableElement();
            if (element) {
                if (element.classList.contains("firstLink")) {
                    $(".table-footer .firstLink").focus();
                }
                if (element.classList.contains("nextLink")) {
                    $(".table-footer .nextLink").focus();
                }
                if (element.classList.contains("prevLink")) {
                    $(".table-footer .prevLink").focus();
                }
                if (element.classList.contains("lastLink")) {
                    $(".table-footer .lastLink").focus();
                }
                if (element.classList.contains("pageSizeSelector")) {
                    $(".table-footer .pageSizeSelector").focus();
                }
                if (element.classList.contains("pager-input")) {
                    $(".table-footer .pager-input").focus();
                }
                if (element.tagName.toLowerCase() === "th" || element.parentElement.tagName.toLowerCase() === "th") {
                    _this.scrollHandler.scrollTableBody();
                    var dataHeaderId_1 = element.getAttribute("data-header-id")
                        || element.parentElement.getAttribute("data-header-id");
                    var newFocusable_1;
                    $(".table-header th").each(function (index, elem) {
                        var eachHeader = $(elem);
                        var eachHeaderId = eachHeader.attr("data-header-id");
                        if (eachHeaderId === dataHeaderId_1) {
                            newFocusable_1 = eachHeader;
                            return false;
                        }
                    });
                    if (newFocusable_1) {
                        newFocusable_1.focus();
                    }
                }
            }
            _this.configStore.setFocusableElement(undefined);
        };
        this.configStore = new ConfigStore_1.ConfigStore(options);
        this.gridTemplateService = new GridTemplateService_1.GridTemplateService(this.configStore);
        this.InitHandlers();
    }
    return Grid;
}());
exports.Grid = Grid;


/***/ }),
/* 13 */
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
            animationTime: 200,
            chunkSize: 5,
            columns: [],
            containerElement: null,
            // manageColSettingsContainer: null,
            hybridFunction: function (column, row) {
                return "true";
            },
            keyColumn: "",
            // onColSettingsChange: (colConfig: IColumn[]): void => {
            //     // No Code
            // },
            onClickFilter: function (column, value, actionType) {
                // No code
            },
            onClickHeader: function (column, direction) {
                // No code
            },
            onPageSearch: function (pageSize, pageIndex) {
                // No code
            },
            onSelect: function (rows) {
                // No Code
            },
            showCaption: false,
            caption: "",
            summary: "",
        };
        this.setFocusableElement = function (element) {
            _this.focusableElement = element;
        };
        this.getFocusableElement = function () {
            return _this.focusableElement;
        };
        this.SetHiddenOnConfig = function (bool, columnId) {
            for (var _i = 0, _a = _this.Options.columns; _i < _a.length; _i++) {
                var col = _a[_i];
                if (columnId === undefined) {
                    col.hidden = bool;
                }
                else {
                    if (col.id === columnId) {
                        col.hidden = bool;
                        break;
                    }
                }
            }
        };
        this.extendOptions = function (inputOptions) {
            return _this.options = jQuery.extend({}, _this.defaultGridOptions, inputOptions);
        };
        this.extendOptions(options);
        if (options.containerElement === null) {
            throw new Error("Please Provide a valid container Element object");
        }
        this.options.columns.sort(function (prev, next) { return prev.order - next.order; });
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
/* 14 */
/*!****************************************************!*\
  !*** ./src/js/eventHandlers/SelectEventHandler.ts ***!
  \****************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var SelectEventHandler = /** @class */ (function () {
    function SelectEventHandler(configStore, element, gridTemplateService) {
        this.configStore = configStore;
        this.parentElement = element;
        this.gridTemplateService = gridTemplateService;
    }
    SelectEventHandler.prototype.RegisterDomHandler = function () {
        var _this = this;
        this.parentElement.on("change", ".select-key-checkbox", function (event) {
            var element = jQuery(event.target);
            var checked = element.is(":checked");
            var value = element.val().toString();
            if (checked) {
                _this.gridTemplateService.selectRows(value);
                element.parents(".mainRow").addClass("active");
            }
            else {
                _this.gridTemplateService.deSelectRows(value);
                element.parents(".mainRow").removeClass("active");
            }
            if (event.originalEvent === undefined) {
                return;
            }
            _this.configStore.Options.onSelect(_this.gridTemplateService.Selected, checked);
            event.stopPropagation();
        });
        this.parentElement.on("change", ".select-all-checkbox", function (event) {
            var element = jQuery(event.target);
            var checked = element.is(":checked");
            _this.parentElement.find(".select-key-checkbox").prop("checked", checked);
            if (checked) {
                _this.gridTemplateService.selectAll();
                _this.parentElement.find(".mainTable .mainRow").addClass("active");
            }
            else {
                _this.gridTemplateService.deSelectAll();
                _this.parentElement.find(".mainTable .mainRow").removeClass("active");
            }
            _this.configStore.Options.onSelect(_this.gridTemplateService.Selected, checked);
            event.stopPropagation();
        });
    };
    SelectEventHandler.prototype.onResize = function () {
        // Ignore
    };
    SelectEventHandler.prototype.onDocumentClick = function (event) {
        // Ignore
    };
    return SelectEventHandler;
}());
exports.SelectEventHandler = SelectEventHandler;


/***/ }),
/* 15 */
/*!***************************************************!*\
  !*** ./src/js/eventHandlers/DetailsRowHandler.ts ***!
  \***************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var DetailsRowHandler = /** @class */ (function () {
    function DetailsRowHandler(configStore, element) {
        var _this = this;
        this.configStore = configStore;
        this.RegisterDomHandler = function () {
            _this.parentElement.on("click", ".table-body .expansionArrows i", _this.expandRow);
            _this.parentElement.on("keyup", ".table-body .expansionArrows i", _this.expandRow);
        };
        this.expandRow = function (event) {
            var code = event.keyCode || event.which;
            if (event.type !== "click" && (event.type === "keyup" && code !== 13 && code !== 32)) {
                return;
            }
            var arrow = jQuery(event.target);
            var detailsRow = arrow.closest("tr").next();
            var currentIcon = arrow.hide().attr("aria-hidden", "true");
            var otherIcon = arrow.siblings("i").show().attr("aria-hidden", "false");
            if (arrow.hasClass("expandDetailsRowIcon")) {
                otherIcon.attr("aria-expanded", "true");
                detailsRow.slideDown(_this.configStore.Options.animationTime);
            }
            else {
                currentIcon.attr("aria-expanded", "true");
                detailsRow.slideUp(_this.configStore.Options.animationTime);
            }
            otherIcon.focus();
            event.stopPropagation();
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
/* 16 */
/*!****************************************************!*\
  !*** ./src/js/eventHandlers/FilterClickHandler.ts ***!
  \****************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var ColumnUtil_1 = __webpack_require__(/*! ../util/ColumnUtil */ 5);
var FilterActionType_1 = __webpack_require__(/*! ./../models/FilterActionType */ 17);
var FilterClickHandler = /** @class */ (function () {
    function FilterClickHandler(configStore, element) {
        var _this = this;
        this.RegisterDomHandler = function () {
            _this.parentElement.on("click", ".table-body .detailsRow .detailsTable td i", function (event) {
                var element = jQuery(event.target);
                var parentTd = element.parents("td");
                var key = parentTd.attr("data-filter-key");
                var value = parentTd.attr("data-filter-value");
                var type = parentTd.attr("data-filter-type");
                var col = ColumnUtil_1.CommonUtil.GetColumnObject(key, _this.configStore.Options.columns);
                if (col === undefined || col === null || !col.filterable) {
                    return;
                }
                var filterAction = FilterActionType_1.FilterActionType.Add;
                if (element.hasClass("removeFilter")) {
                    filterAction = FilterActionType_1.FilterActionType.Minus;
                }
                _this.configStore.setFocusableElement(event.target);
                _this.configStore.Options.onClickFilter(key, value, filterAction, type);
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
/* 17 */
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
/* 18 */
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
/* 19 */
/*!****************************************************!*\
  !*** ./src/js/eventHandlers/HeaderClickHandler.ts ***!
  \****************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var ColumnUtil_1 = __webpack_require__(/*! ../util/ColumnUtil */ 5);
var GridOrderDirection_1 = __webpack_require__(/*! ./../models/GridOrderDirection */ 6);
var HeaderClickHandler = /** @class */ (function () {
    function HeaderClickHandler(configStore, element) {
        var _this = this;
        this.RegisterDomHandler = function () {
            // Registering JQuery Event Handler if Header is Clicked.
            _this.parentElement.on("click", ".table-header th", _this.handleHeaderSort);
            _this.parentElement.on("keyup", ".table-header th", _this.handleHeaderSort);
            _this.parentElement.on("mousedown", ".table-header th", _this.handleMouseDown);
            _this.parentElement.on("focusin", ".table-header th", _this.handleHeaderFocus);
        };
        this.handleMouseDown = function () {
            _this.wasHeaderClicked = true;
        };
        this.handleHeaderFocus = function (event) {
            // Handle focus
            if (_this.lastFocusedElement !== event.target) {
                if (_this.wasHeaderClicked) {
                    return;
                }
                _this.lastFocusedElement = event.target;
                _this.wasHeaderClicked = false;
            }
            // event.data.clicked = undefined;
            var header = jQuery(event.target);
            var leftPostition = header.position().left;
            var headerWidth = header.width();
            var tableBody = _this.parentElement.find(".table-body");
            var mainTableBody = _this.parentElement.find(".mainTable");
            var visibleTbodyWidth = tableBody.width();
            var maxScroll = mainTableBody.width() - visibleTbodyWidth;
            var currentPosition = leftPostition + headerWidth * 2;
            var scrollLeftBy;
            if (currentPosition > visibleTbodyWidth) {
                scrollLeftBy = leftPostition > maxScroll ? maxScroll : leftPostition;
            }
            else {
                scrollLeftBy = 0;
            }
            tableBody.scrollLeft(scrollLeftBy);
            event.stopPropagation();
        };
        this.handleHeaderSort = function (event) {
            var code = event.keyCode || event.which;
            if (event.type !== "click" && (event.type === "keyup" && code !== 13 && code !== 32)) {
                return;
            }
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
                    direction = GridOrderDirection_1.GridOrderDirection.Desc;
                    upArrowIcon.hide();
                    downArrowIcon.show();
                }
                else {
                    direction = GridOrderDirection_1.GridOrderDirection.Asc;
                    downArrowIcon.hide();
                    upArrowIcon.show();
                }
            }
            else {
                direction = GridOrderDirection_1.GridOrderDirection.Asc;
                upArrowIcon.show();
            }
            element.attr("aria-sort", direction === GridOrderDirection_1.GridOrderDirection.Desc ? "descending" : "ascending");
            ColumnUtil_1.CommonUtil.SetOrder(headerId, direction, _this.configStore.Options.columns);
            _this.configStore.setFocusableElement(event.target);
            _this.configStore.Options.onClickHeader(headerId, direction, col.orderByCol);
            event.stopPropagation();
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
/* 20 */
/*!********************************************************!*\
  !*** ./src/js/eventHandlers/PageSearchClickHandler.ts ***!
  \********************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var jQuery = __webpack_require__(/*! jquery */ 4);
var Pager_1 = __webpack_require__(/*! ../pagination/Pager */ 3);
var PageSearchHandler = /** @class */ (function () {
    function PageSearchHandler(configStore, element) {
        var _this = this;
        this.RegisterDomHandler = function () {
            _this.parentElement.on("click", ".table-footer .firstLink", function (event) {
                _this.configStore.setFocusableElement(event.target);
                _this.configStore.options.onPageSearch(Pager_1.Pager.PaginationData.pageSize, 1);
                event.stopPropagation();
            });
            _this.parentElement.on("click", ".table-footer .nextLink", function (event) {
                _this.configStore.setFocusableElement(event.target);
                _this.configStore.options.onPageSearch(Pager_1.Pager.PaginationData.pageSize, Pager_1.Pager.PaginationData.pageIndex + 1);
                event.stopPropagation();
            });
            _this.parentElement.on("click", ".table-footer .prevLink", function (event) {
                _this.configStore.setFocusableElement(event.target);
                _this.configStore.options.onPageSearch(Pager_1.Pager.PaginationData.pageSize, Pager_1.Pager.PaginationData.pageIndex - 1);
                event.stopPropagation();
            });
            _this.parentElement.on("click", ".table-footer .lastLink", function (event) {
                _this.configStore.setFocusableElement(event.target);
                _this.configStore.options.onPageSearch(Pager_1.Pager.PaginationData.pageSize, Pager_1.Pager.PaginationData.noOfPages);
                event.stopPropagation();
            });
            _this.parentElement.on("change", ".table-footer .pageSizeSelector", function (event) {
                _this.configStore.setFocusableElement(event.target);
                var val = +jQuery(event.target).val().toString();
                _this.configStore.options.onPageSearch(val, Pager_1.Pager.PaginationData.pageIndex);
                event.stopPropagation();
            });
            _this.parentElement.on("keypress", ".table-footer .pager-input", function (event) {
                _this.configStore.setFocusableElement(event.target);
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
var ScrollHandler = /** @class */ (function () {
    function ScrollHandler(configStore, gridTemplateService, currentIndex) {
        var _this = this;
        this.rendering = false;
        this.setCurrentIndex = function (index) {
            _this.currentIndex = index;
            _this.gridTemplateService.CurrentIndex = index;
        };
        this.getCurrentIndex = function () {
            return _this.currentIndex;
        };
        this.scrollTableBody = function () {
            if (!_this.leftMargin) {
                return;
            }
            _this.parentElement.find(".table-body").scrollLeft(-1 * _this.leftMargin);
        };
        this.RegisterDomHandler = function () {
            // Registering JQuery Event Handler if Header is Clicked.
            _this.parentElement.find(".table-body").on("scroll", _this.handleResize);
        };
        this.removeHandler = function () {
            _this.parentElement.find(".table-body").off("scroll", _this.handleResize);
        };
        this.handleResize = function (event) {
            var tBodyObj = _this.parentElement.find(".table-body");
            var marginLeft = -1 * tBodyObj.scrollLeft();
            _this.parentElement.find(".table-header").css({
                "margin-left": marginLeft,
            });
            _this.leftMargin = marginLeft;
            var actualTableHeight = tBodyObj.find(".mainTable").height();
            var scrollContainerHeight = tBodyObj.height();
            event.preventDefault();
            if (_this.rendering) {
                event.stopPropagation();
                return;
            }
            var scrollTop = tBodyObj.scrollTop();
            if ((scrollContainerHeight + scrollTop) - (actualTableHeight * 0.8) > 0) {
                if (_this.currentIndex >= _this.gridTemplateService.DataLength) {
                    return;
                }
                _this.rendering = true;
                var lastIndex = _this.currentIndex + _this.configStore.Options.chunkSize;
                if (lastIndex >= _this.gridTemplateService.DataLength) {
                    lastIndex = _this.gridTemplateService.DataLength - 1;
                }
                var html = jQuery(_this.gridTemplateService.getTemplate(_this.currentIndex, lastIndex));
                tBodyObj.find(".mainTableBody").append(html);
                _this.setCurrentIndex(lastIndex + 1);
                _this.rendering = false;
            }
            event.stopPropagation();
        };
        this.configStore = configStore;
        this.parentElement = jQuery(this.configStore.Options.containerElement);
        this.gridTemplateService = gridTemplateService;
        this.setCurrentIndex(currentIndex);
    }
    ScrollHandler.prototype.onResize = function () {
        //
    };
    ScrollHandler.prototype.onDocumentClick = function (event) {
        // No Op
    };
    return ScrollHandler;
}());
exports.ScrollHandler = ScrollHandler;


/***/ }),
/* 22 */
/*!************************************************!*\
  !*** ./src/js/services/GridTemplateService.ts ***!
  \************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var GridDetailsRowTemplate = __webpack_require__(/*! ../../hbs/grid-details-row.hbs */ 7);
var GridFooter = __webpack_require__(/*! ../../hbs/grid-footer.hbs */ 8);
var GridMainRowTemplate = __webpack_require__(/*! ../../hbs/grid-main-row.hbs */ 10);
var ManageColumnTemplate = __webpack_require__(/*! ../../hbs/grid-manage-columns.hbs */ 24);
var GridTemplate = __webpack_require__(/*! ../../hbs/grid.hbs */ 26);
var Pager_1 = __webpack_require__(/*! ../pagination/Pager */ 3);
var GridTemplateService = /** @class */ (function () {
    function GridTemplateService(configStore) {
        var _this = this;
        this.selected = [];
        this.isAllSelected = function () {
            return _this.selected.length !== 0 && _this.selected.length === _this.data.length;
        };
        // For First  Render - Update Header , Body, Pagination
        this.GetFirstTemplate = function (data, firstIndex, lastIndex) {
            _this.data = data;
            _this.selected = [];
            var mainRowArray = _this.GetRowsHtml(firstIndex, lastIndex);
            return _this.templateFunctionForGrid({
                showCaption: _this.configStore.Options.showCaption,
                summary: _this.configStore.Options.summary,
                rowLength: _this.data.length,
                columns: _this.configStore.Options.columns,
                mainRowArray: mainRowArray,
                paginationData: Pager_1.Pager.PaginationData,
                caption: _this.configStore.Options.caption,
            });
        };
        // For Virtualizaton Render - Body
        this.getTemplate = function (firstIndex, lastIndex) {
            var mainRowArray = _this.GetRowsHtml(firstIndex, lastIndex);
            return _this.templateFunctionForMainRow({
                columns: _this.configStore.Options.columns,
                mainRowArray: mainRowArray,
                caption: _this.configStore.Options.caption,
            });
        };
        // Update only one Row
        this.getTemplateForOneRow = function (row) {
            var emptyStr = _this.configStore.Options.emptyValue;
            var mainRowColArray = _this.getMainRow(row, emptyStr);
            var mainRowArray = [{
                    isAllSelected: _this.isAllSelected(),
                    keyColumn: row[_this.configStore.Options.keyColumn],
                    mainRowColArray: mainRowColArray,
                    length: _this.configStore.Options.columns.length,
                }];
            return _this.templateFunctionForMainRow({ mainRowArray: mainRowArray });
        };
        this.GetManageColumnsHtml = function () {
            return _this.templateFunctionForManageCol({ columns: _this.configStore.Options.columns });
        };
        this.GetRowsHtml = function (firstIndex, lastIndex) {
            var mainRowArray = [];
            var emptyStr = _this.configStore.Options.emptyValue;
            for (var i = firstIndex; i <= lastIndex; i++) {
                var row = _this.data[i];
                var mainRowColArray = _this.getMainRow(row, emptyStr);
                mainRowArray.push({
                    rowIndex: i,
                    isAllSelected: _this.isAllSelected(),
                    keyColumn: row[_this.configStore.Options.keyColumn],
                    mainRowColArray: mainRowColArray,
                    length: _this.configStore.Options.columns.length,
                });
            }
            return mainRowArray;
        };
        this.selectRows = function (rowId) {
            var key = _this.configStore.Options.keyColumn;
            var newSelected = [];
            var exists = false;
            for (var _i = 0, _a = _this.selected; _i < _a.length; _i++) {
                var selected = _a[_i];
                if (rowId === selected[key]) {
                    exists = true;
                    break;
                }
            }
            if (!exists) {
                newSelected.push(rowId);
            }
            for (var _b = 0, newSelected_1 = newSelected; _b < newSelected_1.length; _b++) {
                var toBeAdded = newSelected_1[_b];
                for (var _c = 0, _d = _this.data; _c < _d.length; _c++) {
                    var oneRow = _d[_c];
                    if (toBeAdded === oneRow[key]) {
                        _this.selected.push(oneRow);
                        break;
                    }
                }
            }
        };
        this.deSelectRows = function (rowId) {
            var newSelected = [];
            var key = _this.configStore.Options.keyColumn;
            for (var _i = 0, _a = _this.selected; _i < _a.length; _i++) {
                var selected = _a[_i];
                if (rowId !== selected[key]) {
                    newSelected.push(selected);
                }
            }
            _this.selected = newSelected;
        };
        this.selectAll = function () {
            _this.selected = _this.data;
        };
        this.deSelectAll = function () {
            _this.selected = [];
        };
        this.updateRows = function (rows) {
            var key = _this.configStore.Options.keyColumn;
            if (rows === undefined || !rows.length) {
                return;
            }
            for (var _i = 0, rows_1 = rows; _i < rows_1.length; _i++) {
                var row = rows_1[_i];
                for (var _a = 0, _b = _this.data; _a < _b.length; _a++) {
                    var dataRow = _b[_a];
                    if (row[key] === dataRow[key]) {
                        dataRow = row;
                        break;
                    }
                }
            }
            for (var _c = 0, rows_2 = rows; _c < rows_2.length; _c++) {
                var row = rows_2[_c];
                for (var _d = 0, _e = _this.selected; _d < _e.length; _d++) {
                    var dataRow = _e[_d];
                    if (row[key] === dataRow[key]) {
                        dataRow = row;
                        break;
                    }
                }
            }
        };
        this.getMainRow = function (row, emptyStr) {
            var mainRowColArray = [];
            for (var _i = 0, _a = _this.configStore.Options.columns; _i < _a.length; _i++) {
                var col = _a[_i];
                var columnValue = row[col.id];
                if (col.renderHybrid) {
                    columnValue = _this.configStore.Options.hybridFunction(col, row);
                }
                if (emptyStr !== undefined && columnValue === emptyStr) {
                    columnValue = "";
                }
                mainRowColArray.push({
                    columnValue: columnValue,
                    type: col.type,
                    hidden: col.hidden,
                    actualValue: row[col.id],
                    columnName: col.name,
                    id: col.id,
                    filterable: col.filterable,
                });
            }
            return mainRowColArray;
        };
        this.configStore = configStore;
        this.templateFunctionForGrid = GridTemplate;
        this.templateFunctionForMainRow = GridMainRowTemplate;
        this.templateFunctionForDetailsRow = GridDetailsRowTemplate;
        this.templateFunctionForFooter = GridFooter;
        this.templateFunctionForManageCol = ManageColumnTemplate;
    }
    Object.defineProperty(GridTemplateService.prototype, "Data", {
        get: function () {
            return this.data;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GridTemplateService.prototype, "Selected", {
        get: function () {
            return this.selected;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GridTemplateService.prototype, "CurrentIndex", {
        set: function (index) {
            this.currentIndex = index;
        },
        enumerable: true,
        configurable: true
    });
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
/* 23 */
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
/* 24 */
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
    + "\">\r\n                    <td>\r\n                        <label>\r\n                            <input type=\"checkbox\" class=\"col-settings-hidden-checkbox gui m-r-10\" value=\""
    + alias2(alias1((depth0 != null ? depth0.id : depth0), depth0))
    + "\" "
    + alias2(__default(__webpack_require__(/*! ./src/hbs/helpers/Checked.ts */ 25)).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.hidden : depth0),{"name":"Checked","hash":{},"data":data}))
    + ">\r\n                            "
    + alias2(alias1((depth0 != null ? depth0.name : depth0), depth0))
    + "\r\n                        </label>\r\n                    </td>\r\n                </tr>\r\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<div class=\"gui of-hidden p-10 min-w-50 w-auto fluid-h flex column container\" >\r\n    <div class=\"col-settings-header\" style=\"width: 100%\">\r\n        <div class=\"gui mini fluid icon input\">\r\n            <input class=\"col-settings-filter\" type=\"text\" placeholder=\"Search filter...\">\r\n            <i class=\"search icon\"></i>\r\n        </div>\r\n        <div class=\"gui m-t-10\">\r\n            <a class=\"gui left show-all-column\">Show All</a>\r\n            <a class=\"gui right hide-all-column\">Hide All</a>\r\n        </div>\r\n        <div class=\"gui clear\"></div>\r\n    </div>\r\n    <div class=\"gui clear\"></div>\r\n    <div class=\"col-settings-table gui fluid h-90 of-auto p-5 m-t-10\" >\r\n        <table class=\"gui small very border-less basic compact table\">\r\n            <tbody>\r\n"
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.columns : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "            </tbody>\r\n        </table>\r\n    </div>\r\n</div>";
},"useData":true});

/***/ }),
/* 25 */
/*!************************************!*\
  !*** ./src/hbs/helpers/Checked.ts ***!
  \************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var checked = function (bool) {
    return !bool ? "checked" : "";
};
exports.default = checked;


/***/ }),
/* 26 */
/*!**************************!*\
  !*** ./src/hbs/grid.hbs ***!
  \**************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var Handlebars = __webpack_require__(/*! handlebars */ 0);
function __default(obj) { return obj && (obj.__esModule ? obj["default"] : obj); }
module.exports = (Handlebars["default"] || Handlebars).template({"1":function(container,depth0,helpers,partials,data) {
    return "                <caption class=\"gui gui-subheading-2 m-0 p-0 text-left\">"
    + container.escapeExpression(container.lambda((depth0 != null ? depth0.caption : depth0), depth0))
    + "</caption>\r\n";
},"3":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "                    "
    + ((stack1 = __default(__webpack_require__(/*! ./src/hbs/helpers/Column.ts */ 27)).call(depth0 != null ? depth0 : (container.nullContext || {}),depth0,{"name":"Column","hash":{},"data":data})) != null ? stack1 : "")
    + "\r\n";
},"5":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.sortable : depth0),{"name":"if","hash":{},"fn":container.program(6, data, 0),"inverse":container.program(8, data, 0),"data":data})) != null ? stack1 : "");
},"6":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "                            "
    + ((stack1 = __default(__webpack_require__(/*! ./src/hbs/helpers/Ordered.ts */ 28)).call(depth0 != null ? depth0 : (container.nullContext || {}),depth0,(data && data.index),{"name":"Ordered","hash":{},"data":data})) != null ? stack1 : "")
    + "\r\n";
},"8":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.escapeExpression, alias3=container.lambda;

  return "                        <th role=\"columnheader\"\r\n                            aria-colindex=\""
    + alias2(__default(__webpack_require__(/*! ./src/hbs/helpers/Add.ts */ 2)).call(alias1,(data && data.index),3,{"name":"Add","hash":{},"data":data}))
    + "\"\r\n                            aria-sort=\"none\" \r\n                            title=\""
    + alias2(alias3((depth0 != null ? depth0.name : depth0), depth0))
    + "\"\r\n                            tabindex=\"-1\"\r\n                            class=\"gui cursor-default disabled\" \r\n                            "
    + ((stack1 = __default(__webpack_require__(/*! ./src/hbs/helpers/AriaHidden.ts */ 29)).call(alias1,(depth0 != null ? depth0.hidden : depth0),{"name":"AriaHidden","hash":{},"data":data})) != null ? stack1 : "")
    + "\r\n                            id=\"header-"
    + alias2(alias3((depth0 != null ? depth0.id : depth0), depth0))
    + "\" \r\n                            data-header-id=\""
    + alias2(alias3((depth0 != null ? depth0.id : depth0), depth0))
    + "\">\r\n                            <span class=\"gui sub header\">"
    + alias2(alias3((depth0 != null ? depth0.name : depth0), depth0))
    + "</span>\r\n                        </th>\r\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.lambda, alias2=container.escapeExpression, alias3=depth0 != null ? depth0 : (container.nullContext || {});

  return "<div class=\"inner-container gui fluid container\" \r\n    aria-readonly=\"true\" \r\n    aria-rowcount=\""
    + alias2(alias1((depth0 != null ? depth0.rowLength : depth0), depth0))
    + "\" \r\n    aria-colcount=\""
    + alias2(__default(__webpack_require__(/*! ./src/hbs/helpers/Add.ts */ 2)).call(alias3,((stack1 = (depth0 != null ? depth0.columns : depth0)) != null ? stack1.length : stack1),2,{"name":"Add","hash":{},"data":data}))
    + "\"\r\n    aria-label=\""
    + alias2(alias1((depth0 != null ? depth0.caption : depth0), depth0))
    + "\"\r\n    summary=\""
    + alias2(alias1((depth0 != null ? depth0.summary : depth0), depth0))
    + "\"\r\n    aria-live=\"polite\"\r\n    role=\"grid\" \r\n    style=\"padding:0%;\">\r\n    <div class=\"table-header\">\r\n        <table id=\"headertable\" role=\"presentation\" class=\"gui basic large compact sortable fixed single line table\">\r\n"
    + ((stack1 = helpers["if"].call(alias3,(depth0 != null ? depth0.showCaption : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "            <colgroup class=\"headerColGroup\">\r\n                <col style=\"width:40px;\" />\r\n                <col style=\"width:40px;\" />\r\n"
    + ((stack1 = helpers.each.call(alias3,(depth0 != null ? depth0.columns : depth0),{"name":"each","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "            </colgroup>\r\n            <thead role=\"rowgroup\">\r\n                <tr role=\"row\">\r\n                    <th role=\"columnheader\" aria-colindex=\"1\"></th>\r\n                    <th role=\"columnheader\" \r\n                        aria-label=\"Select all rows of "
    + alias2(alias1((depth0 != null ? depth0.caption : depth0), depth0))
    + " Checkbox\" \r\n                        aria-colindex=\"2\"\r\n                        id=\"select-all-checkbox\">\r\n                        <input  type=\"checkbox\" \r\n                                aria-labelledby=\"select-all-checkbox\"\r\n                                class=\"select-all-checkbox cursor-pointer\">\r\n                    </th>\r\n"
    + ((stack1 = helpers.each.call(alias3,(depth0 != null ? depth0.columns : depth0),{"name":"each","hash":{},"fn":container.program(5, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "                </tr>\r\n            </thead>\r\n        </table>\r\n    </div>\r\n    <div class=\"table-body\">\r\n        <table role=\"presentation\" class=\"gui basic large compact fixed selectable single line table mainTable\">\r\n            <colgroup class=\"bodyColGroup\">\r\n                <col style=\"width:40px;\" /> \r\n                <col style=\"width:40px;\" />\r\n"
    + ((stack1 = helpers.each.call(alias3,(depth0 != null ? depth0.columns : depth0),{"name":"each","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "            </colgroup>\r\n            <tbody class=\"mainTableBody\" role=\"rowgroup\">\r\n"
    + ((stack1 = container.invokePartial(__webpack_require__(/*! ./src/hbs/grid-main-row.hbs */ 10),depth0,{"name":"grid-main-row","data":data,"indent":"                ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "            </tbody>\r\n        </table>\r\n    </div>\r\n    <div class=\"table-footer gui h-auto fluid-w flex jc-sb p-5 m-0\">\r\n"
    + ((stack1 = container.invokePartial(__webpack_require__(/*! ./src/hbs/grid-footer.hbs */ 8),depth0,{"name":"grid-footer","data":data,"indent":"           ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "    </div>\r\n</div>";
},"usePartial":true,"useData":true});

/***/ }),
/* 27 */
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


/***/ }),
/* 28 */
/*!************************************!*\
  !*** ./src/hbs/helpers/Ordered.ts ***!
  \************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var GridOrderDirection_1 = __webpack_require__(/*! ../../js/models/GridOrderDirection */ 6);
var ordered = function (column, index) {
    var parsedInt = parseInt(index, 10) + 3;
    var ariaSortStr;
    var ariaLabelStr;
    var headerIconMk;
    var ariaHiddenStr = column.hidden ? " aria-hidden=\"true\"" : " aria-hidden=\"false\"";
    var tabIndex = column.sortable && !column.hidden ? 0 : -1;
    if (column.orderBy === GridOrderDirection_1.GridOrderDirection.Asc) {
        headerIconMk = " <i class=\"gui gui-icon gui-icon-arrow-up\" aria-hidden=\"false\" ></i> " +
            "<i class=\"gui gui-icon gui-icon-arrow-down gui-hidden\" aria-hidden=\"true\" ></i>";
        ariaSortStr = "aria-sort=\"ascending\"";
        ariaLabelStr = column.name + " sorted ascending";
    }
    else if (column.orderBy === GridOrderDirection_1.GridOrderDirection.Desc) {
        headerIconMk = "<i class=\"gui gui-icon gui-icon-arrow-up gui-hidden\" aria-hidden=\"true\" ></i> " +
            "<i class=\"gui gui-icon gui-icon-arrow-down\" aria-hidden=\"false\" ></i>";
        ariaSortStr = "aria-sort=\"descending\"";
        ariaLabelStr = column.name + " sorted descending";
    }
    else {
        headerIconMk = "<i class=\"gui gui-icon gui-icon-arrow-up gui-hidden\" aria-hidden=\"true\" ></i> " +
            "<i class=\"gui gui-icon gui-icon-arrow-down gui-hidden\" aria-hidden=\"true\" ></i>";
        ariaSortStr = "aria-sort=\"none\"";
        ariaLabelStr = column.name + " Press space or enter to sort in ascending order button.";
    }
    return "<th role=\"columnheader\" aria-colindex=\"" + parsedInt
        + "\" tabindex=\"" + tabIndex + "\" class=\"gui cursor-pointer\" id=\"header-"
        + column.id + "\""
        + " data-header-id=\"" + column.id + "\" "
        + ariaSortStr
        + ariaHiddenStr
        + " aria-label=\"" + ariaLabelStr + "\" "
        + " title=\"" + column.name + "\" "
        + "  >"
        + " <span class=\"gui sub header m-r-5\">" + column.name + "</span>"
        + headerIconMk
        + " </th>";
};
exports.default = ordered;


/***/ }),
/* 29 */
/*!***************************************!*\
  !*** ./src/hbs/helpers/AriaHidden.ts ***!
  \***************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var ariaHidden = function (bool) {
    return bool ? "aria-hidden=\"true\"" : "aria-hidden=\"false\"";
};
exports.default = ariaHidden;


/***/ })
/******/ ]);
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCA3YTFjZTM5YTkyNWM0NTQ0MTRhYiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwge1wicm9vdFwiOlwiSGFuZGxlYmFyc1wiLFwiYW1kXCI6XCJoYW5kbGViYXJzLnJ1bnRpbWVcIixcImNvbW1vbmpzMlwiOlwiaGFuZGxlYmFycy9ydW50aW1lXCIsXCJjb21tb25qc1wiOlwiaGFuZGxlYmFycy9ydW50aW1lXCJ9Iiwid2VicGFjazovLy8uL3NyYy9oYnMvaGVscGVycy9EaXNhYmxlZC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvaGJzL2hlbHBlcnMvQWRkLnRzIiwid2VicGFjazovLy8uL3NyYy9qcy9wYWdpbmF0aW9uL1BhZ2VyLnRzIiwid2VicGFjazovLy9leHRlcm5hbCBcImpRdWVyeVwiIiwid2VicGFjazovLy8uL3NyYy9qcy91dGlsL0NvbHVtblV0aWwudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL21vZGVscy9HcmlkT3JkZXJEaXJlY3Rpb24udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2hicy9ncmlkLWRldGFpbHMtcm93LmhicyIsIndlYnBhY2s6Ly8vLi9zcmMvaGJzL2dyaWQtZm9vdGVyLmhicyIsIndlYnBhY2s6Ly8vLi9zcmMvaGJzL2hlbHBlcnMvbWF0aC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvaGJzL2dyaWQtbWFpbi1yb3cuaGJzIiwid2VicGFjazovLy8uL3NyYy9oYnMvaGVscGVycy9Cb29sQXR0cmlidXRlLnRzIiwid2VicGFjazovLy8uL3NyYy9qcy9tYWluL0dyaWQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2NvbmZpZy9Db25maWdTdG9yZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvZXZlbnRIYW5kbGVycy9TZWxlY3RFdmVudEhhbmRsZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2V2ZW50SGFuZGxlcnMvRGV0YWlsc1Jvd0hhbmRsZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2V2ZW50SGFuZGxlcnMvRmlsdGVyQ2xpY2tIYW5kbGVyLnRzIiwid2VicGFjazovLy8uL3NyYy9qcy9tb2RlbHMvRmlsdGVyQWN0aW9uVHlwZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvZXZlbnRIYW5kbGVycy9IYW5kbGVyTmFtZXMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2V2ZW50SGFuZGxlcnMvSGVhZGVyQ2xpY2tIYW5kbGVyLnRzIiwid2VicGFjazovLy8uL3NyYy9qcy9ldmVudEhhbmRsZXJzL1BhZ2VTZWFyY2hDbGlja0hhbmRsZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2V2ZW50SGFuZGxlcnMvU2Nyb2xsSGFuZGxlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvc2VydmljZXMvR3JpZFRlbXBsYXRlU2VydmljZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvaGJzL2hlbHBlcnMvU2VsZWN0ZWQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2hicy9ncmlkLW1hbmFnZS1jb2x1bW5zLmhicyIsIndlYnBhY2s6Ly8vLi9zcmMvaGJzL2hlbHBlcnMvQ2hlY2tlZC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvaGJzL2dyaWQuaGJzIiwid2VicGFjazovLy8uL3NyYy9oYnMvaGVscGVycy9Db2x1bW4udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2hicy9oZWxwZXJzL09yZGVyZWQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2hicy9oZWxwZXJzL0FyaWFIaWRkZW4udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87QUNWQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFD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QUMsQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDLENBQUMsdUJBQXVCLENBQUM7QUFDbkUsQ0FBQyxDQUFDO0FBRUYsa0JBQWUsVUFBVSxDQUFDIiwiZmlsZSI6ImdyaWRvby5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkocmVxdWlyZShcImhhbmRsZWJhcnMvcnVudGltZVwiKSwgcmVxdWlyZShcImpRdWVyeVwiKSk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShbXCJoYW5kbGViYXJzLnJ1bnRpbWVcIiwgXCJqUXVlcnlcIl0sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wiR3JpZG9vXCJdID0gZmFjdG9yeShyZXF1aXJlKFwiaGFuZGxlYmFycy9ydW50aW1lXCIpLCByZXF1aXJlKFwialF1ZXJ5XCIpKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJHcmlkb29cIl0gPSBmYWN0b3J5KHJvb3RbXCJIYW5kbGViYXJzXCJdLCByb290W1wialF1ZXJ5XCJdKTtcbn0pKHR5cGVvZiBzZWxmICE9PSAndW5kZWZpbmVkJyA/IHNlbGYgOiB0aGlzLCBmdW5jdGlvbihfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzBfXywgX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV80X18pIHtcbnJldHVybiBcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMTIpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIDdhMWNlMzlhOTI1YzQ1NDQxNGFiIiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzBfXztcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCB7XCJyb290XCI6XCJIYW5kbGViYXJzXCIsXCJhbWRcIjpcImhhbmRsZWJhcnMucnVudGltZVwiLFwiY29tbW9uanMyXCI6XCJoYW5kbGViYXJzL3J1bnRpbWVcIixcImNvbW1vbmpzXCI6XCJoYW5kbGViYXJzL3J1bnRpbWVcIn1cbi8vIG1vZHVsZSBpZCA9IDBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEiLCJjb25zdCBkaXNhYmxlZCA9IChib29sOiBib29sZWFuKTogc3RyaW5nID0+IHtcclxuICAgIHJldHVybiBib29sID8gXCJkaXNhYmxlZFwiIDogXCJcIjtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGRpc2FibGVkO1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvdHNsaW50LWxvYWRlcj8/cmVmLS0xIS4vc3JjL2hicy9oZWxwZXJzL0Rpc2FibGVkLnRzIiwiY29uc3QgQWRkID0gKGxlZnQ6IG51bWJlciwgcmlnaHQ6IG51bWJlcik6IHN0cmluZyA9PiB7XHJcbiAgICByZXR1cm4gKGxlZnQgKyByaWdodCkudG9TdHJpbmcoKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEFkZDtcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL3RzbGludC1sb2FkZXI/P3JlZi0tMSEuL3NyYy9oYnMvaGVscGVycy9BZGQudHMiLCJpbXBvcnQgeyBJUGFnaW5hdGlvbiB9IGZyb20gXCIuLi9tb2RlbHMvSVBhZ2luYXRpb25cIjtcclxuaW1wb3J0IHsgSVBhZ2luYXRpb25JbnB1dCB9IGZyb20gXCIuLi9tb2RlbHMvSVBhZ2luYXRpb25JbnB1dFwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIFBhZ2VyIHtcclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIHBhZ2luYXRpb25EYXRhOiBJUGFnaW5hdGlvbjtcclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIENhbGN1bGF0ZVBhZ2luYXRpb25EYXRhID0gKHBhZ2luYXRpb25JbnB1dDogSVBhZ2luYXRpb25JbnB1dCk6IHZvaWQgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBwYWdpbmF0aW9uRGF0YTogYW55ID0ge307XHJcbiAgICAgICAgICAgIHBhZ2luYXRpb25EYXRhLnBhZ2VJbmRleCA9IHBhZ2luYXRpb25JbnB1dC5wYWdlSW5kZXg7XHJcbiAgICAgICAgICAgIHBhZ2luYXRpb25EYXRhLnBhZ2VTaXplID0gcGFnaW5hdGlvbklucHV0LnBhZ2VTaXplO1xyXG4gICAgICAgICAgICBwYWdpbmF0aW9uRGF0YS5wYWdlU2l6ZXMgPSBwYWdpbmF0aW9uSW5wdXQucGFnZVNpemVzO1xyXG4gICAgICAgICAgICBwYWdpbmF0aW9uRGF0YS50b3RhbENvdW50ID0gcGFnaW5hdGlvbklucHV0LnRvdGFsQ291bnQ7XHJcbiAgICAgICAgICAgIHBhZ2luYXRpb25EYXRhLm5vT2ZQYWdlcyA9IE1hdGguY2VpbChwYWdpbmF0aW9uSW5wdXQudG90YWxDb3VudCAvIHBhZ2luYXRpb25JbnB1dC5wYWdlU2l6ZSk7XHJcbiAgICAgICAgICAgIGNvbnN0IG1pbk51bSA9ICgocGFnaW5hdGlvbklucHV0LnBhZ2VJbmRleCAtIDEpICogcGFnaW5hdGlvbklucHV0LnBhZ2VTaXplKTtcclxuICAgICAgICAgICAgY29uc3QgbG93ZXJMaW1pdE9mZnNldCA9IHBhZ2luYXRpb25JbnB1dC5wYWdlU2l6ZSA+IHBhZ2luYXRpb25JbnB1dC50b3RhbENvdW50ID9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZ2luYXRpb25JbnB1dC50b3RhbENvdW50IDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZ2luYXRpb25JbnB1dC5wYWdlU2l6ZTtcclxuICAgICAgICAgICAgcGFnaW5hdGlvbkRhdGEucmFuZ2UgPSB7XHJcbiAgICAgICAgICAgICAgICBtaW4gOiBtaW5OdW0gKyAxLFxyXG4gICAgICAgICAgICAgICAgbWF4IDogbWluTnVtICsgbG93ZXJMaW1pdE9mZnNldCxcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgcGFnaW5hdGlvbkRhdGEuZmlyc3RQYWdlTGlua0Rpc2FibGVkID0gcGFnaW5hdGlvbkRhdGEubm9PZlBhZ2VzID09PSAxIHx8IHBhZ2luYXRpb25EYXRhLnBhZ2VJbmRleCA9PT0gMTtcclxuICAgICAgICAgICAgcGFnaW5hdGlvbkRhdGEubGFzdFBhZ2VMaW5rRGlzYWJsZWQgID0gcGFnaW5hdGlvbkRhdGEubm9PZlBhZ2VzID09PSAxXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8fCAocGFnaW5hdGlvbkRhdGEucGFnZUluZGV4ID09PSBwYWdpbmF0aW9uRGF0YS5ub09mUGFnZXMpO1xyXG4gICAgICAgICAgICBwYWdpbmF0aW9uRGF0YS5wcmV2UGFnZUxpbmtEaXNhYmxlZCAgPSBwYWdpbmF0aW9uRGF0YS5wYWdlSW5kZXggPT09IDFcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHx8IChwYWdpbmF0aW9uRGF0YS5wYWdlSW5kZXggLSAxKSA8PSAwO1xyXG4gICAgICAgICAgICBwYWdpbmF0aW9uRGF0YS5uZXh0UGFnZUxpbmtEaXNhYmxlZCAgPSBwYWdpbmF0aW9uRGF0YS5ub09mUGFnZXMgPT09IHBhZ2luYXRpb25EYXRhLnBhZ2VJbmRleFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfHwgKHBhZ2luYXRpb25EYXRhLnBhZ2VJbmRleCArIDEpID49IHBhZ2luYXRpb25EYXRhLm5vT2ZQYWdlcztcclxuICAgICAgICAgICAgUGFnZXIucGFnaW5hdGlvbkRhdGEgPSBwYWdpbmF0aW9uRGF0YTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIGdldCBQYWdpbmF0aW9uRGF0YSgpOiBJUGFnaW5hdGlvbiB7XHJcbiAgICAgICAgcmV0dXJuIFBhZ2VyLnBhZ2luYXRpb25EYXRhO1xyXG4gICAgfVxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy90c2xpbnQtbG9hZGVyPz9yZWYtLTEhLi9zcmMvanMvcGFnaW5hdGlvbi9QYWdlci50cyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV80X187XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJqUXVlcnlcIlxuLy8gbW9kdWxlIGlkID0gNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSIsImltcG9ydCB7IEdyaWRPcmRlckRpcmVjdGlvbiB9IGZyb20gXCIuLi9tb2RlbHMvR3JpZE9yZGVyRGlyZWN0aW9uXCI7XHJcbmltcG9ydCB7IElDb2x1bW4gfSBmcm9tIFwiLi8uLi9tb2RlbHMvSUNvbHVtblwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIENvbW1vblV0aWwge1xyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgR2V0Q29sdW1uT2JqZWN0ID0gKGNvbHVtbklkOiBzdHJpbmcsIGNvbHVtbnM6IElDb2x1bW5bXSk6IElDb2x1bW4gPT4ge1xyXG4gICAgICAgIGlmIChjb2x1bW5JZCA9PSBudWxsIHx8IGNvbHVtbnMgPT0gbnVsbCkge1xyXG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IHJldENvbDogSUNvbHVtbjtcclxuICAgICAgICBjb2x1bW5zLmZvckVhY2goKGNvbDogSUNvbHVtbikgPT4ge1xyXG4gICAgICAgICAgICBpZiAoY29sLmlkID09PSBjb2x1bW5JZCkge1xyXG4gICAgICAgICAgICAgICAgcmV0Q29sID0gY29sO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgcmV0dXJuIHJldENvbDtcclxuICAgIH1cclxuICAgIHB1YmxpYyBzdGF0aWMgU2V0T3JkZXIgPSAoY29sdW1uSWQ6IHN0cmluZywgb3JkZXJCeTogR3JpZE9yZGVyRGlyZWN0aW9uLCBjb2x1bW5zOiBJQ29sdW1uW10pOiBJQ29sdW1uID0+IHtcclxuICAgICAgICBpZiAoY29sdW1uSWQgPT0gbnVsbCB8fCBjb2x1bW5zID09IG51bGwpIHtcclxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCByZXRDb2w6IElDb2x1bW47XHJcbiAgICAgICAgY29sdW1ucy5mb3JFYWNoKChjb2w6IElDb2x1bW4pID0+IHtcclxuICAgICAgICAgICAgaWYgKGNvbC5pZCA9PT0gY29sdW1uSWQpIHtcclxuICAgICAgICAgICAgICAgIGNvbC5vcmRlckJ5ID0gb3JkZXJCeTtcclxuICAgICAgICAgICAgICAgIHJldENvbCA9IGNvbDtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHJldHVybiByZXRDb2w7XHJcbiAgICB9XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL3RzbGludC1sb2FkZXI/P3JlZi0tMSEuL3NyYy9qcy91dGlsL0NvbHVtblV0aWwudHMiLCJleHBvcnQgZW51bSBHcmlkT3JkZXJEaXJlY3Rpb24ge1xyXG4gICAgTm9uZSA9IFwiTm9uZVwiLFxyXG4gICAgQXNjID0gXCJBc2NcIixcclxuICAgIERlc2MgPSBcIkRlc2NcIixcclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvdHNsaW50LWxvYWRlcj8/cmVmLS0xIS4vc3JjL2pzL21vZGVscy9HcmlkT3JkZXJEaXJlY3Rpb24udHMiLCJ2YXIgSGFuZGxlYmFycyA9IHJlcXVpcmUoXCJoYW5kbGViYXJzXCIpO1xuZnVuY3Rpb24gX19kZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIChvYmouX19lc01vZHVsZSA/IG9ialtcImRlZmF1bHRcIl0gOiBvYmopOyB9XG5tb2R1bGUuZXhwb3J0cyA9IChIYW5kbGViYXJzW1wiZGVmYXVsdFwiXSB8fCBIYW5kbGViYXJzKS50ZW1wbGF0ZSh7XCIxXCI6ZnVuY3Rpb24oY29udGFpbmVyLGRlcHRoMCxoZWxwZXJzLHBhcnRpYWxzLGRhdGEpIHtcbiAgICB2YXIgc3RhY2sxLCBoZWxwZXIsIGFsaWFzMT1kZXB0aDAgIT0gbnVsbCA/IGRlcHRoMCA6IChjb250YWluZXIubnVsbENvbnRleHQgfHwge30pLCBhbGlhczI9aGVscGVycy5oZWxwZXJNaXNzaW5nLCBhbGlhczM9XCJmdW5jdGlvblwiLCBhbGlhczQ9Y29udGFpbmVyLmVzY2FwZUV4cHJlc3Npb247XG5cbiAgcmV0dXJuIFwiICAgICAgICAgICAgICAgIDx0cj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzcz1cXFwiZ3VpIHJ2LXBhcmVudFxcXCIgXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsaWduPVxcXCJ0b3BcXFwiIFxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtZmlsdGVyLXR5cGU9XFxcIlwiXG4gICAgKyBhbGlhczQoKChoZWxwZXIgPSAoaGVscGVyID0gaGVscGVycy50eXBlIHx8IChkZXB0aDAgIT0gbnVsbCA/IGRlcHRoMC50eXBlIDogZGVwdGgwKSkgIT0gbnVsbCA/IGhlbHBlciA6IGFsaWFzMiksKHR5cGVvZiBoZWxwZXIgPT09IGFsaWFzMyA/IGhlbHBlci5jYWxsKGFsaWFzMSx7XCJuYW1lXCI6XCJ0eXBlXCIsXCJoYXNoXCI6e30sXCJkYXRhXCI6ZGF0YX0pIDogaGVscGVyKSkpXG4gICAgKyBcIlxcXCIgXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS1maWx0ZXIta2V5PVxcXCJcIlxuICAgICsgYWxpYXM0KCgoaGVscGVyID0gKGhlbHBlciA9IGhlbHBlcnMuaWQgfHwgKGRlcHRoMCAhPSBudWxsID8gZGVwdGgwLmlkIDogZGVwdGgwKSkgIT0gbnVsbCA/IGhlbHBlciA6IGFsaWFzMiksKHR5cGVvZiBoZWxwZXIgPT09IGFsaWFzMyA/IGhlbHBlci5jYWxsKGFsaWFzMSx7XCJuYW1lXCI6XCJpZFwiLFwiaGFzaFwiOnt9LFwiZGF0YVwiOmRhdGF9KSA6IGhlbHBlcikpKVxuICAgICsgXCJcXFwiIFxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtZmlsdGVyLXZhbHVlPVxcXCJcIlxuICAgICsgYWxpYXM0KCgoaGVscGVyID0gKGhlbHBlciA9IGhlbHBlcnMuYWN0dWFsVmFsdWUgfHwgKGRlcHRoMCAhPSBudWxsID8gZGVwdGgwLmFjdHVhbFZhbHVlIDogZGVwdGgwKSkgIT0gbnVsbCA/IGhlbHBlciA6IGFsaWFzMiksKHR5cGVvZiBoZWxwZXIgPT09IGFsaWFzMyA/IGhlbHBlci5jYWxsKGFsaWFzMSx7XCJuYW1lXCI6XCJhY3R1YWxWYWx1ZVwiLFwiaGFzaFwiOnt9LFwiZGF0YVwiOmRhdGF9KSA6IGhlbHBlcikpKVxuICAgICsgXCJcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPlwiXG4gICAgKyBhbGlhczQoKChoZWxwZXIgPSAoaGVscGVyID0gaGVscGVycy5jb2x1bW5OYW1lIHx8IChkZXB0aDAgIT0gbnVsbCA/IGRlcHRoMC5jb2x1bW5OYW1lIDogZGVwdGgwKSkgIT0gbnVsbCA/IGhlbHBlciA6IGFsaWFzMiksKHR5cGVvZiBoZWxwZXIgPT09IGFsaWFzMyA/IGhlbHBlci5jYWxsKGFsaWFzMSx7XCJuYW1lXCI6XCJjb2x1bW5OYW1lXCIsXCJoYXNoXCI6e30sXCJkYXRhXCI6ZGF0YX0pIDogaGVscGVyKSkpXG4gICAgKyBcIjwvc3Bhbj5cXHJcXG5cIlxuICAgICsgKChzdGFjazEgPSBoZWxwZXJzW1wiaWZcIl0uY2FsbChhbGlhczEsKGRlcHRoMCAhPSBudWxsID8gZGVwdGgwLmZpbHRlcmFibGUgOiBkZXB0aDApLHtcIm5hbWVcIjpcImlmXCIsXCJoYXNoXCI6e30sXCJmblwiOmNvbnRhaW5lci5wcm9ncmFtKDIsIGRhdGEsIDApLFwiaW52ZXJzZVwiOmNvbnRhaW5lci5ub29wLFwiZGF0YVwiOmRhdGF9KSkgIT0gbnVsbCA/IHN0YWNrMSA6IFwiXCIpXG4gICAgKyBcIiAgICAgICAgICAgICAgICAgICAgPC90ZD5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDx0ZD5cIlxuICAgICsgKChzdGFjazEgPSAoKGhlbHBlciA9IChoZWxwZXIgPSBoZWxwZXJzLmNvbHVtblZhbHVlIHx8IChkZXB0aDAgIT0gbnVsbCA/IGRlcHRoMC5jb2x1bW5WYWx1ZSA6IGRlcHRoMCkpICE9IG51bGwgPyBoZWxwZXIgOiBhbGlhczIpLCh0eXBlb2YgaGVscGVyID09PSBhbGlhczMgPyBoZWxwZXIuY2FsbChhbGlhczEse1wibmFtZVwiOlwiY29sdW1uVmFsdWVcIixcImhhc2hcIjp7fSxcImRhdGFcIjpkYXRhfSkgOiBoZWxwZXIpKSkgIT0gbnVsbCA/IHN0YWNrMSA6IFwiXCIpXG4gICAgKyBcIjwvdGQ+XFxyXFxuICAgICAgICAgICAgICAgIDwvdHI+XFxyXFxuXCI7XG59LFwiMlwiOmZ1bmN0aW9uKGNvbnRhaW5lcixkZXB0aDAsaGVscGVycyxwYXJ0aWFscyxkYXRhKSB7XG4gICAgcmV0dXJuIFwiICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XFxcImd1aSBtLWwtNSBydi1jaGlsZCBndWktY2FwdGlvblxcXCIgPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzcz1cXFwiZ3VpIGd1aS1pY29uIGd1aS1pY29uLWFkZCBob3ZlciBtLWwtNSBjdXJzb3ItcG9pbnRlciBhZGRGaWx0ZXJcXFwiPjwvaT5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3M9XFxcImd1aSBndWktaWNvbiBndWktaWNvbi1taW51cyBob3ZlciBtLWwtNSBjdXJzb3ItcG9pbnRlciByZW1vdmVGaWx0ZXJcXFwiPjwvaT5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XFxyXFxuXCI7XG59LFwiY29tcGlsZXJcIjpbNyxcIj49IDQuMC4wXCJdLFwibWFpblwiOmZ1bmN0aW9uKGNvbnRhaW5lcixkZXB0aDAsaGVscGVycyxwYXJ0aWFscyxkYXRhKSB7XG4gICAgdmFyIHN0YWNrMSwgaGVscGVyLCBhbGlhczE9ZGVwdGgwICE9IG51bGwgPyBkZXB0aDAgOiAoY29udGFpbmVyLm51bGxDb250ZXh0IHx8IHt9KSwgYWxpYXMyPWhlbHBlcnMuaGVscGVyTWlzc2luZywgYWxpYXMzPVwiZnVuY3Rpb25cIiwgYWxpYXM0PWNvbnRhaW5lci5lc2NhcGVFeHByZXNzaW9uO1xuXG4gIHJldHVybiBcIjx0ciBpZD1cXFwiZGV0YWlscy1yb3ctXCJcbiAgICArIGFsaWFzNCgoKGhlbHBlciA9IChoZWxwZXIgPSBoZWxwZXJzLmluZGV4IHx8IChkYXRhICYmIGRhdGEuaW5kZXgpKSAhPSBudWxsID8gaGVscGVyIDogYWxpYXMyKSwodHlwZW9mIGhlbHBlciA9PT0gYWxpYXMzID8gaGVscGVyLmNhbGwoYWxpYXMxLHtcIm5hbWVcIjpcImluZGV4XCIsXCJoYXNoXCI6e30sXCJkYXRhXCI6ZGF0YX0pIDogaGVscGVyKSkpXG4gICAgKyBcIlxcXCIgY2xhc3M9XFxcImd1aSBndWktaGlkZGVuIGRldGFpbHNSb3dcXFwiIGFyaWEtbGl2ZT1cXFwicG9saXRlXFxcIj5cXHJcXG4gICAgPHRkIGNvbHNwYW49XFxcIlwiXG4gICAgKyBhbGlhczQoKChoZWxwZXIgPSAoaGVscGVyID0gaGVscGVycy5sZW5ndGggfHwgKGRlcHRoMCAhPSBudWxsID8gZGVwdGgwLmxlbmd0aCA6IGRlcHRoMCkpICE9IG51bGwgPyBoZWxwZXIgOiBhbGlhczIpLCh0eXBlb2YgaGVscGVyID09PSBhbGlhczMgPyBoZWxwZXIuY2FsbChhbGlhczEse1wibmFtZVwiOlwibGVuZ3RoXCIsXCJoYXNoXCI6e30sXCJkYXRhXCI6ZGF0YX0pIDogaGVscGVyKSkpXG4gICAgKyBcIlxcXCI+XFxyXFxuICAgICAgICA8dGFibGUgY2xhc3M9XFxcImd1aSB2ZXJ5IGNvbXBhY3Qgc2VsZWN0YWJsZSBjZWxsZWQgdGFibGUgZGV0YWlsc1RhYmxlIG0tbC0zNyBwLTVcXFwiIFxcclxcbiAgICAgICAgICAgICAgIHN0eWxlPVxcXCJ3aWR0aDogYXV0bztcXFwiID5cXHJcXG4gICAgICAgICAgICA8dGJvZHk+XFxyXFxuXCJcbiAgICArICgoc3RhY2sxID0gaGVscGVycy5lYWNoLmNhbGwoYWxpYXMxLChkZXB0aDAgIT0gbnVsbCA/IGRlcHRoMC5tYWluUm93Q29sQXJyYXkgOiBkZXB0aDApLHtcIm5hbWVcIjpcImVhY2hcIixcImhhc2hcIjp7fSxcImZuXCI6Y29udGFpbmVyLnByb2dyYW0oMSwgZGF0YSwgMCksXCJpbnZlcnNlXCI6Y29udGFpbmVyLm5vb3AsXCJkYXRhXCI6ZGF0YX0pKSAhPSBudWxsID8gc3RhY2sxIDogXCJcIilcbiAgICArIFwiICAgICAgICAgICAgPC90Ym9keT5cXHJcXG4gICAgICAgIDwvdGFibGU+XFxyXFxuICAgIDwvdGQ+XFxyXFxuPC90cj5cIjtcbn0sXCJ1c2VEYXRhXCI6dHJ1ZX0pO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2hicy9ncmlkLWRldGFpbHMtcm93Lmhic1xuLy8gbW9kdWxlIGlkID0gN1xuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSIsInZhciBIYW5kbGViYXJzID0gcmVxdWlyZShcImhhbmRsZWJhcnNcIik7XG5mdW5jdGlvbiBfX2RlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgKG9iai5fX2VzTW9kdWxlID8gb2JqW1wiZGVmYXVsdFwiXSA6IG9iaik7IH1cbm1vZHVsZS5leHBvcnRzID0gKEhhbmRsZWJhcnNbXCJkZWZhdWx0XCJdIHx8IEhhbmRsZWJhcnMpLnRlbXBsYXRlKHtcIjFcIjpmdW5jdGlvbihjb250YWluZXIsZGVwdGgwLGhlbHBlcnMscGFydGlhbHMsZGF0YSxibG9ja1BhcmFtcyxkZXB0aHMpIHtcbiAgICB2YXIgc3RhY2sxLCBhbGlhczE9Y29udGFpbmVyLmVzY2FwZUV4cHJlc3Npb247XG5cbiAgcmV0dXJuIFwiICAgICAgICAgICAgPG9wdGlvbiBcIlxuICAgICsgYWxpYXMxKF9fZGVmYXVsdChyZXF1aXJlKFwiQzpcXFxcVGVjaG5pY2FsXFxcXFJlcG9cXFxcR3JpZG9vXFxcXHNyY1xcXFxoYnNcXFxcaGVscGVyc1xcXFxTZWxlY3RlZC50c1wiKSkuY2FsbChkZXB0aDAgIT0gbnVsbCA/IGRlcHRoMCA6IChjb250YWluZXIubnVsbENvbnRleHQgfHwge30pLCgoc3RhY2sxID0gKGRlcHRoc1sxXSAhPSBudWxsID8gZGVwdGhzWzFdLnBhZ2luYXRpb25EYXRhIDogZGVwdGhzWzFdKSkgIT0gbnVsbCA/IHN0YWNrMS5wYWdlU2l6ZSA6IHN0YWNrMSksZGVwdGgwLHtcIm5hbWVcIjpcIlNlbGVjdGVkXCIsXCJoYXNoXCI6e30sXCJkYXRhXCI6ZGF0YX0pKVxuICAgICsgXCI+XCJcbiAgICArIGFsaWFzMShjb250YWluZXIubGFtYmRhKGRlcHRoMCwgZGVwdGgwKSlcbiAgICArIFwiPC9vcHRpb24+XFxyXFxuXCI7XG59LFwiY29tcGlsZXJcIjpbNyxcIj49IDQuMC4wXCJdLFwibWFpblwiOmZ1bmN0aW9uKGNvbnRhaW5lcixkZXB0aDAsaGVscGVycyxwYXJ0aWFscyxkYXRhLGJsb2NrUGFyYW1zLGRlcHRocykge1xuICAgIHZhciBzdGFjazEsIGFsaWFzMT1jb250YWluZXIubGFtYmRhLCBhbGlhczI9Y29udGFpbmVyLmVzY2FwZUV4cHJlc3Npb24sIGFsaWFzMz1kZXB0aDAgIT0gbnVsbCA/IGRlcHRoMCA6IChjb250YWluZXIubnVsbENvbnRleHQgfHwge30pO1xuXG4gIHJldHVybiBcIjxkaXYgcm9sZT1cXFwibmF2aWdhdGlvblxcXCIgY2xhc3M9XFxcImd1aSBmbGV4IGpjLXNiIGd1aS1zdWJoZWFkaW5nLTEgdGV4dC1sZWZ0IG0tMFxcXCI+XFxyXFxuICAgIDxkaXYgY2xhc3M9XFxcImd1aSBtLXItMTBcXFwiPlxcclxcbiAgICAgICAgPGJ1dHRvbiBjbGFzcz1cXFwiZ3VpIGZpcnN0TGlua1xcXCIgXFxyXFxuICAgICAgICAgICAgICAgIGFyaWEtZGlzYWJsZWQ9XFxcIlwiXG4gICAgKyBhbGlhczIoYWxpYXMxKCgoc3RhY2sxID0gKGRlcHRoMCAhPSBudWxsID8gZGVwdGgwLnBhZ2luYXRpb25EYXRhIDogZGVwdGgwKSkgIT0gbnVsbCA/IHN0YWNrMS5maXJzdFBhZ2VMaW5rRGlzYWJsZWQgOiBzdGFjazEpLCBkZXB0aDApKVxuICAgICsgXCJcXFwiIFxcclxcbiAgICAgICAgICAgICAgICBcIlxuICAgICsgYWxpYXMyKF9fZGVmYXVsdChyZXF1aXJlKFwiQzpcXFxcVGVjaG5pY2FsXFxcXFJlcG9cXFxcR3JpZG9vXFxcXHNyY1xcXFxoYnNcXFxcaGVscGVyc1xcXFxEaXNhYmxlZC50c1wiKSkuY2FsbChhbGlhczMsKChzdGFjazEgPSAoZGVwdGgwICE9IG51bGwgPyBkZXB0aDAucGFnaW5hdGlvbkRhdGEgOiBkZXB0aDApKSAhPSBudWxsID8gc3RhY2sxLmZpcnN0UGFnZUxpbmtEaXNhYmxlZCA6IHN0YWNrMSkse1wibmFtZVwiOlwiRGlzYWJsZWRcIixcImhhc2hcIjp7fSxcImRhdGFcIjpkYXRhfSkpXG4gICAgKyBcIlxcclxcbiAgICAgICAgICAgICAgICBhcmlhLWxhYmVsPVxcXCJHbyB0byB0aGUgZmlyc3QgcGFnZVxcXCIgXFxyXFxuICAgICAgICAgICAgICAgIHRpdGxlPVxcXCJHbyB0byB0aGUgZmlyc3QgcGFnZVxcXCIgXFxyXFxuICAgICAgICAgICAgICAgIGRhdGEtcGFnZT1cXFwiMVxcXCI+XFxyXFxuICAgICAgICAgICAgPGkgY2xhc3M9XFxcImd1aS1pY29uIGd1aS1pY29uLXByZXZpb3VzXFxcIj48L2k+XFxyXFxuICAgICAgICA8L2J1dHRvbj5cXHJcXG4gICAgICAgIDxidXR0b24gY2xhc3M9XFxcImd1aSBwcmV2TGlua1xcXCIgXFxyXFxuICAgICAgICAgICAgICAgIGFyaWEtZGlzYWJsZWQ9XFxcIlwiXG4gICAgKyBhbGlhczIoYWxpYXMxKCgoc3RhY2sxID0gKGRlcHRoMCAhPSBudWxsID8gZGVwdGgwLnBhZ2luYXRpb25EYXRhIDogZGVwdGgwKSkgIT0gbnVsbCA/IHN0YWNrMS5wcmV2UGFnZUxpbmtEaXNhYmxlZCA6IHN0YWNrMSksIGRlcHRoMCkpXG4gICAgKyBcIlxcXCIgXFxyXFxuICAgICAgICAgICAgICAgIFwiXG4gICAgKyBhbGlhczIoX19kZWZhdWx0KHJlcXVpcmUoXCJDOlxcXFxUZWNobmljYWxcXFxcUmVwb1xcXFxHcmlkb29cXFxcc3JjXFxcXGhic1xcXFxoZWxwZXJzXFxcXERpc2FibGVkLnRzXCIpKS5jYWxsKGFsaWFzMywoKHN0YWNrMSA9IChkZXB0aDAgIT0gbnVsbCA/IGRlcHRoMC5wYWdpbmF0aW9uRGF0YSA6IGRlcHRoMCkpICE9IG51bGwgPyBzdGFjazEucHJldlBhZ2VMaW5rRGlzYWJsZWQgOiBzdGFjazEpLHtcIm5hbWVcIjpcIkRpc2FibGVkXCIsXCJoYXNoXCI6e30sXCJkYXRhXCI6ZGF0YX0pKVxuICAgICsgXCJcXHJcXG4gICAgICAgICAgICAgICAgYXJpYS1sYWJlbD1cXFwiR28gdG8gdGhlIHByZXZpb3VzIHBhZ2VcXFwiIFxcclxcbiAgICAgICAgICAgICAgICB0aXRsZT1cXFwiR28gdG8gdGhlIHByZXZpb3VzIHBhZ2VcXFwiIFxcclxcbiAgICAgICAgICAgICAgICBkYXRhLXBhZ2U9XFxcIlwiXG4gICAgKyBhbGlhczIoX19kZWZhdWx0KHJlcXVpcmUoXCJDOlxcXFxUZWNobmljYWxcXFxcUmVwb1xcXFxHcmlkb29cXFxcc3JjXFxcXGhic1xcXFxoZWxwZXJzXFxcXG1hdGgudHNcIikpLmNhbGwoYWxpYXMzLCgoc3RhY2sxID0gKGRlcHRoMCAhPSBudWxsID8gZGVwdGgwLnBhZ2luYXRpb25EYXRhIDogZGVwdGgwKSkgIT0gbnVsbCA/IHN0YWNrMS5wYWdlSW5kZXggOiBzdGFjazEpLFwiLVwiLDEse1wibmFtZVwiOlwibWF0aFwiLFwiaGFzaFwiOnt9LFwiZGF0YVwiOmRhdGF9KSlcbiAgICArIFwiXFxcIj5cXHJcXG4gICAgICAgICAgICA8aSBjbGFzcz1cXFwiZ3VpLWljb24gZ3VpLWljb24tY2hldnJvbi1sZWZ0XFxcIj48L2k+XFxyXFxuICAgICAgICAgICAgUHJldlxcclxcbiAgICAgICAgPC9idXR0b24+XFxyXFxuICAgIDwvZGl2PlxcclxcbiAgICA8ZGl2IGNsYXNzPVxcXCJndWkgcGFnZXItaW5wdXQtY29udGFpbmVyIG1lZGl1bSBoLTMwIGlucHV0IGZsZXggamMtc2IgbS1yLTEwXFxcIj5cXHJcXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcImd1aSBtLXItNVxcXCI+IFBhZ2UgPC9kaXY+XFxyXFxuICAgICAgICA8aW5wdXQgIGNsYXNzPVxcXCJndWkgcGFnZXItaW5wdXQgaC0zMCB3LTUwIG0tci01XFxcIiBcXHJcXG4gICAgICAgICAgICAgICAgYXJpYS1sYWJlbD1cXFwiR28gdG8gUGFnZSBcIlxuICAgICsgYWxpYXMyKGFsaWFzMSgoKHN0YWNrMSA9IChkZXB0aDAgIT0gbnVsbCA/IGRlcHRoMC5wYWdpbmF0aW9uRGF0YSA6IGRlcHRoMCkpICE9IG51bGwgPyBzdGFjazEucGFnZUluZGV4IDogc3RhY2sxKSwgZGVwdGgwKSlcbiAgICArIFwiXFxcIiBcXHJcXG4gICAgICAgICAgICAgICAgdGl0bGU9XFxcIkdvIHRvIFBhZ2UgXCJcbiAgICArIGFsaWFzMihhbGlhczEoKChzdGFjazEgPSAoZGVwdGgwICE9IG51bGwgPyBkZXB0aDAucGFnaW5hdGlvbkRhdGEgOiBkZXB0aDApKSAhPSBudWxsID8gc3RhY2sxLnBhZ2VJbmRleCA6IHN0YWNrMSksIGRlcHRoMCkpXG4gICAgKyBcIlxcXCIgXFxyXFxuICAgICAgICAgICAgICAgIHZhbHVlPVxcXCJcIlxuICAgICsgYWxpYXMyKGFsaWFzMSgoKHN0YWNrMSA9IChkZXB0aDAgIT0gbnVsbCA/IGRlcHRoMC5wYWdpbmF0aW9uRGF0YSA6IGRlcHRoMCkpICE9IG51bGwgPyBzdGFjazEucGFnZUluZGV4IDogc3RhY2sxKSwgZGVwdGgwKSlcbiAgICArIFwiXFxcIiBcXHJcXG4gICAgICAgICAgICAgICAgdHlwZT1cXFwidGV4dFxcXCIgXFxyXFxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVxcXCJQYWdlIE51bWJlciAuLi5cXFwiPlxcclxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwibm8tb2YtcGFnZXMtc2NhblxcXCIgXFxyXFxuICAgICAgICAgICAgIGRhdGEtbnVtYmVyLW9mLXBhZ2VzPVxcXCJcIlxuICAgICsgYWxpYXMyKGFsaWFzMSgoKHN0YWNrMSA9IChkZXB0aDAgIT0gbnVsbCA/IGRlcHRoMC5wYWdpbmF0aW9uRGF0YSA6IGRlcHRoMCkpICE9IG51bGwgPyBzdGFjazEubm9PZlBhZ2VzIDogc3RhY2sxKSwgZGVwdGgwKSlcbiAgICArIFwiXFxcIj5cXHJcXG4gICAgICAgICAgICAgb2YgXCJcbiAgICArIGFsaWFzMihhbGlhczEoKChzdGFjazEgPSAoZGVwdGgwICE9IG51bGwgPyBkZXB0aDAucGFnaW5hdGlvbkRhdGEgOiBkZXB0aDApKSAhPSBudWxsID8gc3RhY2sxLm5vT2ZQYWdlcyA6IHN0YWNrMSksIGRlcHRoMCkpXG4gICAgKyBcIlxcclxcbiAgICAgICAgPC9kaXY+XFxyXFxuICAgIDwvZGl2PlxcclxcbiAgICA8ZGl2IGNsYXNzPVxcXCJndWkgbS1yLTEwXFxcIj5cXHJcXG4gICAgICAgIDxidXR0b24gY2xhc3M9XFxcImd1aSBuZXh0TGlua1xcXCIgXFxyXFxuICAgICAgICAgICAgICAgIGFyaWEtZGlzYWJsZWQ9XFxcIlwiXG4gICAgKyBhbGlhczIoYWxpYXMxKCgoc3RhY2sxID0gKGRlcHRoMCAhPSBudWxsID8gZGVwdGgwLnBhZ2luYXRpb25EYXRhIDogZGVwdGgwKSkgIT0gbnVsbCA/IHN0YWNrMS5uZXh0UGFnZUxpbmtEaXNhYmxlZCA6IHN0YWNrMSksIGRlcHRoMCkpXG4gICAgKyBcIlxcXCIgXFxyXFxuICAgICAgICAgICAgICAgIFwiXG4gICAgKyBhbGlhczIoX19kZWZhdWx0KHJlcXVpcmUoXCJDOlxcXFxUZWNobmljYWxcXFxcUmVwb1xcXFxHcmlkb29cXFxcc3JjXFxcXGhic1xcXFxoZWxwZXJzXFxcXERpc2FibGVkLnRzXCIpKS5jYWxsKGFsaWFzMywoKHN0YWNrMSA9IChkZXB0aDAgIT0gbnVsbCA/IGRlcHRoMC5wYWdpbmF0aW9uRGF0YSA6IGRlcHRoMCkpICE9IG51bGwgPyBzdGFjazEubmV4dFBhZ2VMaW5rRGlzYWJsZWQgOiBzdGFjazEpLHtcIm5hbWVcIjpcIkRpc2FibGVkXCIsXCJoYXNoXCI6e30sXCJkYXRhXCI6ZGF0YX0pKVxuICAgICsgXCJcXHJcXG4gICAgICAgICAgICAgICAgYXJpYS1sYWJlbD1cXFwiR28gdG8gdGhlIG5leHQgcGFnZVxcXCIgXFxyXFxuICAgICAgICAgICAgICAgIHRpdGxlPVxcXCJHbyB0byB0aGUgbmV4dCBwYWdlXFxcIiBcXHJcXG4gICAgICAgICAgICAgICAgZGF0YS1wYWdlPVxcXCJcIlxuICAgICsgYWxpYXMyKF9fZGVmYXVsdChyZXF1aXJlKFwiQzpcXFxcVGVjaG5pY2FsXFxcXFJlcG9cXFxcR3JpZG9vXFxcXHNyY1xcXFxoYnNcXFxcaGVscGVyc1xcXFxtYXRoLnRzXCIpKS5jYWxsKGFsaWFzMywoKHN0YWNrMSA9IChkZXB0aDAgIT0gbnVsbCA/IGRlcHRoMC5wYWdpbmF0aW9uRGF0YSA6IGRlcHRoMCkpICE9IG51bGwgPyBzdGFjazEucGFnZUluZGV4IDogc3RhY2sxKSxcIitcIiwxLHtcIm5hbWVcIjpcIm1hdGhcIixcImhhc2hcIjp7fSxcImRhdGFcIjpkYXRhfSkpXG4gICAgKyBcIlxcXCIgPlxcclxcbiAgICAgICAgICAgIE5leHRcXHJcXG4gICAgICAgICAgICA8aSBjbGFzcz1cXFwiZ3VpLWljb24gZ3VpLWljb24tY2hldnJvbi1yaWdodFxcXCI+PC9pPlxcclxcbiAgICAgICAgPC9idXR0b24+XFxyXFxuICAgICAgICA8YnV0dG9uIGNsYXNzPVxcXCJndWkgbGFzdExpbmtcXFwiIFxcclxcbiAgICAgICAgICAgICAgICBhcmlhLWRpc2FibGVkPVxcXCJcIlxuICAgICsgYWxpYXMyKGFsaWFzMSgoKHN0YWNrMSA9IChkZXB0aDAgIT0gbnVsbCA/IGRlcHRoMC5wYWdpbmF0aW9uRGF0YSA6IGRlcHRoMCkpICE9IG51bGwgPyBzdGFjazEubGFzdFBhZ2VMaW5rRGlzYWJsZWQgOiBzdGFjazEpLCBkZXB0aDApKVxuICAgICsgXCJcXFwiIFxcclxcbiAgICAgICAgICAgICAgICBcIlxuICAgICsgYWxpYXMyKF9fZGVmYXVsdChyZXF1aXJlKFwiQzpcXFxcVGVjaG5pY2FsXFxcXFJlcG9cXFxcR3JpZG9vXFxcXHNyY1xcXFxoYnNcXFxcaGVscGVyc1xcXFxEaXNhYmxlZC50c1wiKSkuY2FsbChhbGlhczMsKChzdGFjazEgPSAoZGVwdGgwICE9IG51bGwgPyBkZXB0aDAucGFnaW5hdGlvbkRhdGEgOiBkZXB0aDApKSAhPSBudWxsID8gc3RhY2sxLmxhc3RQYWdlTGlua0Rpc2FibGVkIDogc3RhY2sxKSx7XCJuYW1lXCI6XCJEaXNhYmxlZFwiLFwiaGFzaFwiOnt9LFwiZGF0YVwiOmRhdGF9KSlcbiAgICArIFwiXFxyXFxuICAgICAgICAgICAgICAgIGFyaWEtbGFiZWw9XFxcIkdvIHRvIHRoZSBsYXN0IHBhZ2VcXFwiIFxcclxcbiAgICAgICAgICAgICAgICB0aXRsZT1cXFwiR28gdG8gdGhlIGxhc3QgcGFnZVxcXCIgXFxyXFxuICAgICAgICAgICAgICAgIGRhdGEtcGFnZT1cXFwiXCJcbiAgICArIGFsaWFzMihhbGlhczEoKChzdGFjazEgPSAoZGVwdGgwICE9IG51bGwgPyBkZXB0aDAucGFnaW5hdGlvbkRhdGEgOiBkZXB0aDApKSAhPSBudWxsID8gc3RhY2sxLm5vT0ZwYWdlcyA6IHN0YWNrMSksIGRlcHRoMCkpXG4gICAgKyBcIlxcXCI+XFxyXFxuICAgICAgICAgICAgPGkgY2xhc3M9XFxcImd1aS1pY29uIGd1aS1pY29uLW5leHRcXFwiPjwvaT5cXHJcXG4gICAgICAgIDwvYnV0dG9uPlxcclxcbiAgICA8L2Rpdj5cXHJcXG48L2Rpdj5cXHJcXG48ZGl2IGNsYXNzPVxcXCJndWkgZ3VpLXN1YmhlYWRpbmctMSBmbGV4IGpjLXNiIHRleHQtcmlnaHQgbS0wXFxcIj5cXHJcXG4gICAgPGxhYmVsICBmb3I9XFxcInBhZ2Utc2l6ZS1zZWxlY3RvclxcXCIgXFxyXFxuICAgICAgICAgICAgY2xhc3M9XFxcImd1aSBtLXItMTBcXFwiPlxcclxcbiAgICAgICAgICAgIFJvd3MgUGVyIFBhZ2VcXHJcXG4gICAgPC9sYWJlbD5cXHJcXG4gICAgPHNlbGVjdCBpZD1cXFwicGFnZS1zaXplLXNlbGVjdG9yXFxcIiBcXHJcXG4gICAgICAgICAgICBjbGFzcz1cXFwiZ3VpIHBhZ2VTaXplU2VsZWN0b3IgbS1yLTEwIGgtMzBcXFwiPlxcclxcblwiXG4gICAgKyAoKHN0YWNrMSA9IGhlbHBlcnMuZWFjaC5jYWxsKGFsaWFzMywoKHN0YWNrMSA9IChkZXB0aDAgIT0gbnVsbCA/IGRlcHRoMC5wYWdpbmF0aW9uRGF0YSA6IGRlcHRoMCkpICE9IG51bGwgPyBzdGFjazEucGFnZVNpemVzIDogc3RhY2sxKSx7XCJuYW1lXCI6XCJlYWNoXCIsXCJoYXNoXCI6e30sXCJmblwiOmNvbnRhaW5lci5wcm9ncmFtKDEsIGRhdGEsIDAsIGJsb2NrUGFyYW1zLCBkZXB0aHMpLFwiaW52ZXJzZVwiOmNvbnRhaW5lci5ub29wLFwiZGF0YVwiOmRhdGF9KSkgIT0gbnVsbCA/IHN0YWNrMSA6IFwiXCIpXG4gICAgKyBcIiAgICA8L3NlbGVjdD5cXHJcXG4gICAgPGRpdiBjbGFzcz1cXFwiZ3VpIG0tci0xMFxcXCI+XFxyXFxuICAgICAgICBcIlxuICAgICsgYWxpYXMyKGFsaWFzMSgoKHN0YWNrMSA9ICgoc3RhY2sxID0gKGRlcHRoMCAhPSBudWxsID8gZGVwdGgwLnBhZ2luYXRpb25EYXRhIDogZGVwdGgwKSkgIT0gbnVsbCA/IHN0YWNrMS5yYW5nZSA6IHN0YWNrMSkpICE9IG51bGwgPyBzdGFjazEubWluIDogc3RhY2sxKSwgZGVwdGgwKSlcbiAgICArIFwiIC0gXCJcbiAgICArIGFsaWFzMihhbGlhczEoKChzdGFjazEgPSAoKHN0YWNrMSA9IChkZXB0aDAgIT0gbnVsbCA/IGRlcHRoMC5wYWdpbmF0aW9uRGF0YSA6IGRlcHRoMCkpICE9IG51bGwgPyBzdGFjazEucmFuZ2UgOiBzdGFjazEpKSAhPSBudWxsID8gc3RhY2sxLm1heCA6IHN0YWNrMSksIGRlcHRoMCkpXG4gICAgKyBcIiBvZiBcIlxuICAgICsgYWxpYXMyKGFsaWFzMSgoKHN0YWNrMSA9IChkZXB0aDAgIT0gbnVsbCA/IGRlcHRoMC5wYWdpbmF0aW9uRGF0YSA6IGRlcHRoMCkpICE9IG51bGwgPyBzdGFjazEudG90YWxDb3VudCA6IHN0YWNrMSksIGRlcHRoMCkpXG4gICAgKyBcIiBpdGVtc1xcclxcbiAgICA8L2Rpdj5cXHJcXG48L2Rpdj5cIjtcbn0sXCJ1c2VEYXRhXCI6dHJ1ZSxcInVzZURlcHRoc1wiOnRydWV9KTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9oYnMvZ3JpZC1mb290ZXIuaGJzXG4vLyBtb2R1bGUgaWQgPSA4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIiwiY29uc3QgbWF0aCA9IChsdmFsdWU6IG51bWJlciwgb3BlcmF0b3I6IHN0cmluZywgcnZhbHVlOiBudW1iZXIsIG9wdGlvbnMpOiBudW1iZXIgPT4ge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBcIitcIjogbHZhbHVlICsgcnZhbHVlLFxyXG4gICAgICAgIFwiLVwiOiBsdmFsdWUgLSBydmFsdWUsXHJcbiAgICAgICAgXCIqXCI6IGx2YWx1ZSAqIHJ2YWx1ZSxcclxuICAgICAgICBcIi9cIjogbHZhbHVlIC8gcnZhbHVlLFxyXG4gICAgICAgIFwiJVwiOiBsdmFsdWUgJSBydmFsdWUsXHJcbiAgICB9W29wZXJhdG9yXTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IG1hdGg7XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy90c2xpbnQtbG9hZGVyPz9yZWYtLTEhLi9zcmMvaGJzL2hlbHBlcnMvbWF0aC50cyIsInZhciBIYW5kbGViYXJzID0gcmVxdWlyZShcImhhbmRsZWJhcnNcIik7XG5mdW5jdGlvbiBfX2RlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgKG9iai5fX2VzTW9kdWxlID8gb2JqW1wiZGVmYXVsdFwiXSA6IG9iaik7IH1cbm1vZHVsZS5leHBvcnRzID0gKEhhbmRsZWJhcnNbXCJkZWZhdWx0XCJdIHx8IEhhbmRsZWJhcnMpLnRlbXBsYXRlKHtcIjFcIjpmdW5jdGlvbihjb250YWluZXIsZGVwdGgwLGhlbHBlcnMscGFydGlhbHMsZGF0YSkge1xuICAgIHZhciBzdGFjazEsIGFsaWFzMT1kZXB0aDAgIT0gbnVsbCA/IGRlcHRoMCA6IChjb250YWluZXIubnVsbENvbnRleHQgfHwge30pLCBhbGlhczI9Y29udGFpbmVyLmVzY2FwZUV4cHJlc3Npb24sIGFsaWFzMz1jb250YWluZXIubGFtYmRhO1xuXG4gIHJldHVybiBcIjx0ciBhcmlhLXJvd2luZGV4PVxcXCJcIlxuICAgICsgYWxpYXMyKF9fZGVmYXVsdChyZXF1aXJlKFwiQzpcXFxcVGVjaG5pY2FsXFxcXFJlcG9cXFxcR3JpZG9vXFxcXHNyY1xcXFxoYnNcXFxcaGVscGVyc1xcXFxBZGQudHNcIikpLmNhbGwoYWxpYXMxLChkZXB0aDAgIT0gbnVsbCA/IGRlcHRoMC5yb3dJbmRleCA6IGRlcHRoMCksMSx7XCJuYW1lXCI6XCJBZGRcIixcImhhc2hcIjp7fSxcImRhdGFcIjpkYXRhfSkpXG4gICAgKyBcIlxcXCIgY2xhc3M9XFxcIm1haW5Sb3cgXCJcbiAgICArIGFsaWFzMihfX2RlZmF1bHQocmVxdWlyZShcIkM6XFxcXFRlY2huaWNhbFxcXFxSZXBvXFxcXEdyaWRvb1xcXFxzcmNcXFxcaGJzXFxcXGhlbHBlcnNcXFxcQm9vbEF0dHJpYnV0ZS50c1wiKSkuY2FsbChhbGlhczEsKGRlcHRoMCAhPSBudWxsID8gZGVwdGgwLmlzQWxsU2VsZWN0ZWQgOiBkZXB0aDApLFwiYWN0aXZlXCIse1wibmFtZVwiOlwiQm9vbEF0dHJpYnV0ZVwiLFwiaGFzaFwiOnt9LFwiZGF0YVwiOmRhdGF9KSlcbiAgICArIFwiXFxcIiBkYXRhLXBrLWF0dHI9XFxcIlwiXG4gICAgKyBhbGlhczIoYWxpYXMzKChkZXB0aDAgIT0gbnVsbCA/IGRlcHRoMC5rZXlDb2x1bW4gOiBkZXB0aDApLCBkZXB0aDApKVxuICAgICsgXCJcXFwiIHJvbGU9XFxcInJvd1xcXCIgPlxcclxcbiAgICA8dGQgY2xhc3M9XFxcImV4cGFuc2lvbkFycm93c1xcXCIgXFxyXFxuICAgICAgICBjbGFzcz1cXFwiZ3VpIGZsZXggamMtc2JcXFwiXFxyXFxuICAgICAgICBhcmlhLWNvbGluZGV4PVxcXCIxXFxcIlxcclxcbiAgICAgICAgcm9sZT1cXFwiZ3JpZGNlbGxcXFwiPlxcclxcbiAgICAgICAgPGkgYXJpYS1sYWJlbD1cXFwiUHJlc3MgZW50ZXIgdG8gZXhwYW5kIHRoZSBkZXRhaWxzIFJvd1xcXCIgXFxyXFxuICAgICAgICAgICB0aXRsZT1cXFwiRXhwYW5kIHRoZSBkZXRhaWxzIFJvd1xcXCIgXFxyXFxuICAgICAgICAgICBhcmlhLWNvbnRyb2xzPVxcXCJkZXRhaWxzLXJvdy1cIlxuICAgICsgYWxpYXMyKGFsaWFzMygoZGF0YSAmJiBkYXRhLmluZGV4KSwgZGVwdGgwKSlcbiAgICArIFwiXFxcIiBcXHJcXG4gICAgICAgICAgIGNsYXNzPVxcXCJndWkgZ3VpLWljb24gZ3VpLWljb24tY2hldnJvbi1kb3duIGV4cGFuZERldGFpbHNSb3dJY29uIGN1cnNvci1wb2ludGVyXFxcIiBcXHJcXG4gICAgICAgICAgIHRhYmluZGV4PVxcXCIwXFxcIiBcXHJcXG4gICAgICAgICAgIGFyaWEtaGlkZGVuPVxcXCJmYWxzZVxcXCI+PC9pPlxcclxcbiAgICAgICAgPGkgYXJpYS1sYWJlbD1cXFwiUHJlc3MgZW50ZXIgdG8gY29sbGFwc2UgdGhlIGRldGFpbHMgUm93XFxcIiBcXHJcXG4gICAgICAgICAgIHRpdGxlPVxcXCJDb2xsYXBzZSB0aGUgZGV0YWlscyBSb3dcXFwiIFxcclxcbiAgICAgICAgICAgYXJpYS1jb250cm9scz1cXFwiZGV0YWlscy1yb3ctXCJcbiAgICArIGFsaWFzMihhbGlhczMoKGRhdGEgJiYgZGF0YS5pbmRleCksIGRlcHRoMCkpXG4gICAgKyBcIlxcXCIgXFxyXFxuICAgICAgICAgICBjbGFzcz1cXFwiZ3VpIGd1aS1pY29uIGd1aS1pY29uLWNoZXZyb24tdXAgQ29sbGFwc2VEZXRhaWxzUm93SWNvbiBjdXJzb3ItcG9pbnRlciBndWktaGlkZGVuXFxcIiBcXHJcXG4gICAgICAgICAgIHRhYmluZGV4PVxcXCIwXFxcIiBcXHJcXG4gICAgICAgICAgIGFyaWEtaGlkZGVuPVxcXCJ0cnVlXFxcIj48L2k+XFxyXFxuICAgIDwvdGQ+XFxyXFxuICAgIDx0ZCByb2xlPVxcXCJncmlkY2VsbFxcXCJcXHJcXG4gICAgICAgIGFyaWEtY29saW5kZXg9XFxcIjJcXFwiID5cXHJcXG4gICAgICAgIDxpbnB1dCBhcmlhLWxhYmVsPVxcXCJDaGVja2JveCB0byBzZWxlY3QgdGhlIHJvdyB3aXRoIElkIFwiXG4gICAgKyBhbGlhczIoYWxpYXMzKChkZXB0aDAgIT0gbnVsbCA/IGRlcHRoMC5rZXlDb2x1bW4gOiBkZXB0aDApLCBkZXB0aDApKVxuICAgICsgXCJcXFwiIFxcclxcbiAgICAgICAgICAgIHR5cGU9XFxcImNoZWNrYm94XFxcIlxcclxcbiAgICAgICAgICAgIFwiXG4gICAgKyBhbGlhczIoX19kZWZhdWx0KHJlcXVpcmUoXCJDOlxcXFxUZWNobmljYWxcXFxcUmVwb1xcXFxHcmlkb29cXFxcc3JjXFxcXGhic1xcXFxoZWxwZXJzXFxcXEJvb2xBdHRyaWJ1dGUudHNcIikpLmNhbGwoYWxpYXMxLChkZXB0aDAgIT0gbnVsbCA/IGRlcHRoMC5pc0FsbFNlbGVjdGVkIDogZGVwdGgwKSxcImNoZWNrZWRcIix7XCJuYW1lXCI6XCJCb29sQXR0cmlidXRlXCIsXCJoYXNoXCI6e30sXCJkYXRhXCI6ZGF0YX0pKVxuICAgICsgXCJcXHJcXG4gICAgICAgICAgICB2YWx1ZT1cXFwiXCJcbiAgICArIGFsaWFzMihhbGlhczMoKGRlcHRoMCAhPSBudWxsID8gZGVwdGgwLmtleUNvbHVtbiA6IGRlcHRoMCksIGRlcHRoMCkpXG4gICAgKyBcIlxcXCIgXFxyXFxuICAgICAgICAgICAgY2xhc3M9XFxcInNlbGVjdC1rZXktY2hlY2tib3ggY3Vyc29yLXBvaW50ZXJcXFwiPlxcclxcbiAgICA8L3RkPlxcclxcblwiXG4gICAgKyAoKHN0YWNrMSA9IGhlbHBlcnMuZWFjaC5jYWxsKGFsaWFzMSwoZGVwdGgwICE9IG51bGwgPyBkZXB0aDAubWFpblJvd0NvbEFycmF5IDogZGVwdGgwKSx7XCJuYW1lXCI6XCJlYWNoXCIsXCJoYXNoXCI6e30sXCJmblwiOmNvbnRhaW5lci5wcm9ncmFtKDIsIGRhdGEsIDApLFwiaW52ZXJzZVwiOmNvbnRhaW5lci5ub29wLFwiZGF0YVwiOmRhdGF9KSkgIT0gbnVsbCA/IHN0YWNrMSA6IFwiXCIpXG4gICAgKyBcIjwvdHI+XFxyXFxuXCJcbiAgICArICgoc3RhY2sxID0gY29udGFpbmVyLmludm9rZVBhcnRpYWwocmVxdWlyZShcIkM6XFxcXFRlY2huaWNhbFxcXFxSZXBvXFxcXEdyaWRvb1xcXFxzcmNcXFxcaGJzXFxcXGdyaWQtZGV0YWlscy1yb3cuaGJzXCIpLGRlcHRoMCx7XCJuYW1lXCI6XCJncmlkLWRldGFpbHMtcm93XCIsXCJkYXRhXCI6ZGF0YSxcImhlbHBlcnNcIjpoZWxwZXJzLFwicGFydGlhbHNcIjpwYXJ0aWFscyxcImRlY29yYXRvcnNcIjpjb250YWluZXIuZGVjb3JhdG9yc30pKSAhPSBudWxsID8gc3RhY2sxIDogXCJcIik7XG59LFwiMlwiOmZ1bmN0aW9uKGNvbnRhaW5lcixkZXB0aDAsaGVscGVycyxwYXJ0aWFscyxkYXRhKSB7XG4gICAgdmFyIHN0YWNrMSwgYWxpYXMxPWNvbnRhaW5lci5sYW1iZGEsIGFsaWFzMj1jb250YWluZXIuZXNjYXBlRXhwcmVzc2lvbjtcblxuICByZXR1cm4gXCIgICAgICAgIDx0ZCB0aXRsZT1cXFwiXCJcbiAgICArIGFsaWFzMihhbGlhczEoKGRlcHRoMCAhPSBudWxsID8gZGVwdGgwLmFjdHVhbFZhbHVlIDogZGVwdGgwKSwgZGVwdGgwKSlcbiAgICArIFwiXFxcIlxcclxcbiAgICAgICAgICAgIGFyaWEtY29saW5kZXg9XFxcIlwiXG4gICAgKyBhbGlhczIoX19kZWZhdWx0KHJlcXVpcmUoXCJDOlxcXFxUZWNobmljYWxcXFxcUmVwb1xcXFxHcmlkb29cXFxcc3JjXFxcXGhic1xcXFxoZWxwZXJzXFxcXEFkZC50c1wiKSkuY2FsbChkZXB0aDAgIT0gbnVsbCA/IGRlcHRoMCA6IChjb250YWluZXIubnVsbENvbnRleHQgfHwge30pLChkYXRhICYmIGRhdGEuaW5kZXgpLDMse1wibmFtZVwiOlwiQWRkXCIsXCJoYXNoXCI6e30sXCJkYXRhXCI6ZGF0YX0pKVxuICAgICsgXCJcXFwiXFxyXFxuICAgICAgICAgICAgY2xhc3M9XFxcImJvZHktXCJcbiAgICArIGFsaWFzMihhbGlhczEoKGRlcHRoMCAhPSBudWxsID8gZGVwdGgwLmlkIDogZGVwdGgwKSwgZGVwdGgwKSlcbiAgICArIFwiXFxcIj5cIlxuICAgICsgKChzdGFjazEgPSBhbGlhczEoKGRlcHRoMCAhPSBudWxsID8gZGVwdGgwLmNvbHVtblZhbHVlIDogZGVwdGgwKSwgZGVwdGgwKSkgIT0gbnVsbCA/IHN0YWNrMSA6IFwiXCIpXG4gICAgKyBcIjwvdGQ+XFxyXFxuXCI7XG59LFwiY29tcGlsZXJcIjpbNyxcIj49IDQuMC4wXCJdLFwibWFpblwiOmZ1bmN0aW9uKGNvbnRhaW5lcixkZXB0aDAsaGVscGVycyxwYXJ0aWFscyxkYXRhKSB7XG4gICAgdmFyIHN0YWNrMTtcblxuICByZXR1cm4gKChzdGFjazEgPSBoZWxwZXJzLmVhY2guY2FsbChkZXB0aDAgIT0gbnVsbCA/IGRlcHRoMCA6IChjb250YWluZXIubnVsbENvbnRleHQgfHwge30pLChkZXB0aDAgIT0gbnVsbCA/IGRlcHRoMC5tYWluUm93QXJyYXkgOiBkZXB0aDApLHtcIm5hbWVcIjpcImVhY2hcIixcImhhc2hcIjp7fSxcImZuXCI6Y29udGFpbmVyLnByb2dyYW0oMSwgZGF0YSwgMCksXCJpbnZlcnNlXCI6Y29udGFpbmVyLm5vb3AsXCJkYXRhXCI6ZGF0YX0pKSAhPSBudWxsID8gc3RhY2sxIDogXCJcIik7XG59LFwidXNlUGFydGlhbFwiOnRydWUsXCJ1c2VEYXRhXCI6dHJ1ZX0pO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2hicy9ncmlkLW1haW4tcm93Lmhic1xuLy8gbW9kdWxlIGlkID0gMTBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEiLCJjb25zdCBib29sQXR0cmlidXRlID0gKGJvb2w6IGJvb2xlYW4sIHN0cjogc3RyaW5nKTogc3RyaW5nID0+IHtcclxuICAgIHJldHVybiBib29sID8gc3RyIDogXCJcIjtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGJvb2xBdHRyaWJ1dGU7XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy90c2xpbnQtbG9hZGVyPz9yZWYtLTEhLi9zcmMvaGJzL2hlbHBlcnMvQm9vbEF0dHJpYnV0ZS50cyIsImltcG9ydCAqIGFzIGpRdWVyeSBmcm9tIFwianF1ZXJ5XCI7XHJcbmltcG9ydCB7IENvbmZpZ1N0b3JlIH0gZnJvbSBcIi4uL2NvbmZpZy9Db25maWdTdG9yZVwiO1xyXG5pbXBvcnQgeyBDb2xTZXR0aW5nc0hhbmRsZXIgfSBmcm9tIFwiLi4vZXZlbnRIYW5kbGVycy9Db2xTZXR0aW5nc0hhbmRsZXJcIjtcclxuaW1wb3J0IHsgU2VsZWN0RXZlbnRIYW5kbGVyIH0gZnJvbSBcIi4uL2V2ZW50SGFuZGxlcnMvU2VsZWN0RXZlbnRIYW5kbGVyXCI7XHJcbmltcG9ydCB7IElHcmlkT3JkZXIgfSBmcm9tIFwiLi4vbW9kZWxzL0lHcmlkT3JkZXJcIjtcclxuaW1wb3J0IHsgSVBhZ2luYXRpb25JbnB1dCB9IGZyb20gXCIuLi9tb2RlbHMvSVBhZ2luYXRpb25JbnB1dFwiO1xyXG5pbXBvcnQgeyBQYWdlciB9IGZyb20gXCIuLi9wYWdpbmF0aW9uL1BhZ2VyXCI7XHJcbmltcG9ydCB7IERldGFpbHNSb3dIYW5kbGVyIH0gZnJvbSBcIi4vLi4vZXZlbnRIYW5kbGVycy9EZXRhaWxzUm93SGFuZGxlclwiO1xyXG5pbXBvcnQgeyBGaWx0ZXJDbGlja0hhbmRsZXIgfSBmcm9tIFwiLi8uLi9ldmVudEhhbmRsZXJzL0ZpbHRlckNsaWNrSGFuZGxlclwiO1xyXG5pbXBvcnQgeyBIYW5kbGVyTmFtZXMgfSBmcm9tIFwiLi8uLi9ldmVudEhhbmRsZXJzL0hhbmRsZXJOYW1lc1wiO1xyXG5pbXBvcnQgeyBIZWFkZXJDbGlja0hhbmRsZXIgfSBmcm9tIFwiLi8uLi9ldmVudEhhbmRsZXJzL0hlYWRlckNsaWNrSGFuZGxlclwiO1xyXG5pbXBvcnQgeyBJSGFuZGxlckNoYWluIH0gZnJvbSBcIi4vLi4vZXZlbnRIYW5kbGVycy9JSGFuZGxlckNoYWluXCI7XHJcbmltcG9ydCB7IFBhZ2VTZWFyY2hIYW5kbGVyIH0gZnJvbSBcIi4vLi4vZXZlbnRIYW5kbGVycy9QYWdlU2VhcmNoQ2xpY2tIYW5kbGVyXCI7XHJcbmltcG9ydCB7IFNjcm9sbEhhbmRsZXIgfSBmcm9tIFwiLi8uLi9ldmVudEhhbmRsZXJzL1Njcm9sbEhhbmRsZXJcIjtcclxuaW1wb3J0IHsgSUNvbHVtbiB9IGZyb20gXCIuLy4uL21vZGVscy9JQ29sdW1uXCI7XHJcbmltcG9ydCB7IEdyaWRUZW1wbGF0ZVNlcnZpY2UgfSBmcm9tIFwiLi8uLi9zZXJ2aWNlcy9HcmlkVGVtcGxhdGVTZXJ2aWNlXCI7XHJcbmltcG9ydCB7IElHcmlkT3B0aW9ucyB9IGZyb20gXCIuL0lHcmlkT3B0aW9uc1wiO1xyXG5cclxuZXhwb3J0IGNsYXNzIEdyaWQ8VD4ge1xyXG5cclxuICAgIHByaXZhdGUgaGFuZGxlQ2hhaW46IEFycmF5PElIYW5kbGVyQ2hhaW48VD4+O1xyXG4gICAgcHJpdmF0ZSBncmlkVGVtcGxhdGVTZXJ2aWNlOiBHcmlkVGVtcGxhdGVTZXJ2aWNlPFQ+O1xyXG4gICAgcHJpdmF0ZSBjb25maWdTdG9yZTogQ29uZmlnU3RvcmU8VD47XHJcbiAgICBwcml2YXRlIHNjcm9sbEhhbmRsZXI6IFNjcm9sbEhhbmRsZXI8VD47XHJcbiAgICBwcml2YXRlIG1hbmFnZUNvbEhhbmRsZXI6IENvbFNldHRpbmdzSGFuZGxlcjxUPjtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihvcHRpb25zOiBJR3JpZE9wdGlvbnM8VD4pIHtcclxuICAgICAgICB0aGlzLmNvbmZpZ1N0b3JlID0gbmV3IENvbmZpZ1N0b3JlPFQ+KG9wdGlvbnMpO1xyXG4gICAgICAgIHRoaXMuZ3JpZFRlbXBsYXRlU2VydmljZSA9IG5ldyBHcmlkVGVtcGxhdGVTZXJ2aWNlKHRoaXMuY29uZmlnU3RvcmUpO1xyXG4gICAgICAgIHRoaXMuSW5pdEhhbmRsZXJzKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGJpbmREYXRhID0gKGRhdGE6IFRbXSwgcGFnaW5hdGlvbklucHV0PzogSVBhZ2luYXRpb25JbnB1dCk6IHZvaWQgPT4ge1xyXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICBQYWdlci5DYWxjdWxhdGVQYWdpbmF0aW9uRGF0YShwYWdpbmF0aW9uSW5wdXQpO1xyXG4gICAgICAgICAgICB0aGlzLmludGVybmFsUmVuZGVyKGRhdGEpO1xyXG4gICAgICAgIH0sIDEgKTtcclxuICAgIH1cclxuICAgIHB1YmxpYyByZVJlbmRlciA9ICgpOiB2b2lkID0+IHtcclxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5pbnRlcm5hbFJlbmRlcih0aGlzLmdyaWRUZW1wbGF0ZVNlcnZpY2UuRGF0YSk7XHJcbiAgICAgICAgfSwgMSApO1xyXG4gICAgfVxyXG4gICAgcHVibGljIHNldENvbENvbmZpZyA9IChjb2xDb25maWc6IElDb2x1bW5bXSk6IHZvaWQgPT4ge1xyXG4gICAgICAgIHRoaXMuY29uZmlnU3RvcmUuT3B0aW9ucy5jb2x1bW5zID0gY29sQ29uZmlnO1xyXG4gICAgfVxyXG4gICAgLy8gVE9ETzogVXBkYXRlIFJvdyBJbmRleFxyXG4gICAgcHVibGljIHVwZGF0ZVJvd3MgPSAocm93czogVFtdKSA9PiB7XHJcbiAgICAgICAgaWYgKCByb3dzID09PSB1bmRlZmluZWQgfHwgIXJvd3MubGVuZ3RoICkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuZ3JpZFRlbXBsYXRlU2VydmljZS51cGRhdGVSb3dzKHJvd3MpO1xyXG4gICAgICAgIGNvbnN0IGNvbnRhaW5lciA9ICQodGhpcy5jb25maWdTdG9yZS5PcHRpb25zLmNvbnRhaW5lckVsZW1lbnQpO1xyXG4gICAgICAgIGNvbnN0IGtleSA9IHRoaXMuY29uZmlnU3RvcmUuT3B0aW9ucy5rZXlDb2x1bW47XHJcbiAgICAgICAgZm9yIChjb25zdCByb3cgb2Ygcm93cykge1xyXG4gICAgICAgICAgICBjb25zdCByb3dIdG1sID0gdGhpcy5ncmlkVGVtcGxhdGVTZXJ2aWNlLmdldFRlbXBsYXRlRm9yT25lUm93KHJvdyk7XHJcbiAgICAgICAgICAgIGNvbnN0IHJvd0pxID0gJChyb3dIdG1sKTtcclxuICAgICAgICAgICAgY29udGFpbmVyLmZpbmQoXCIubWFpblJvd1wiKS5lYWNoKChpOiBudW1iZXIsIG1SOiBFbGVtZW50KSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBtckpxID0gJChtUik7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBwa0lkID0gbXJKcS5hdHRyKFwiZGF0YS1way1hdHRyXCIpO1xyXG4gICAgICAgICAgICAgICAgaWYgKCBwa0lkID09PSByb3dba2V5XSkge1xyXG4gICAgICAgICAgICAgICAgICAgIG1ySnEuaHRtbChyb3dKcVswXS5pbm5lckhUTUwpO1xyXG4gICAgICAgICAgICAgICAgICAgIG1ySnEubmV4dCgpLmh0bWwocm93SnFbMl0uaW5uZXJIVE1MKTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc2V0T3JkZXIgPSAob3JkZXJCeUxpc3Q6IElHcmlkT3JkZXJbXSkgPT4ge1xyXG4gICAgICAgIGZvciAoY29uc3QgY29sIG9mIHRoaXMuY29uZmlnU3RvcmUuT3B0aW9ucy5jb2x1bW5zKSB7XHJcbiAgICAgICAgICAgIGNvbC5vcmRlckJ5ID0gdW5kZWZpbmVkO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAob3JkZXJCeUxpc3QgPT09IHVuZGVmaW5lZCB8fCBvcmRlckJ5TGlzdCA9PT0gbnVsbCB8fCBvcmRlckJ5TGlzdC5sZW5ndGggPT09IDAgKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgZm9yIChjb25zdCBvcmRlckNvbCBvZiBvcmRlckJ5TGlzdCkge1xyXG4gICAgICAgICAgICBmb3IgKGNvbnN0IGNvbCBvZiB0aGlzLmNvbmZpZ1N0b3JlLk9wdGlvbnMuY29sdW1ucykge1xyXG4gICAgICAgICAgICAgICAgaWYgKG9yZGVyQ29sLmNvbElkID09PSBjb2wuaWQgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sLm9yZGVyQnkgPSBvcmRlckNvbC5vcmRlckJ5O1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBkZXN0cm95ID0gKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHBhcmVudEVsZW1lbnQgPSBqUXVlcnkodGhpcy5jb25maWdTdG9yZS5PcHRpb25zLmNvbnRhaW5lckVsZW1lbnQpO1xyXG4gICAgICAgIGlmICggcGFyZW50RWxlbWVudCAhPT0gdW5kZWZpbmVkICkge1xyXG4gICAgICAgICAgICBwYXJlbnRFbGVtZW50Lm9mZigpO1xyXG4gICAgICAgIH1cclxuICAgICAgICAkKHdpbmRvdykub2ZmKFwicmVzaXplXCIsIHRoaXMuZG9jdW1lbnRSZXNpemVIYW5kbGVyKTtcclxuICAgICAgICAkKGRvY3VtZW50KS5vZmYoXCJjbGlja1wiLCB0aGlzLmRvY3VtZW50Q2xpY2tIYW5kbGVyKTtcclxuICAgICAgICAkKHdpbmRvdykub2ZmKFwicmVzaXplXCIsIHRoaXMuZG9jdW1lbnRSZXNpemVIYW5kbGVyRm9yQ3MpO1xyXG4gICAgICAgICQoZG9jdW1lbnQpLm9mZihcImNsaWNrXCIsIHRoaXMuZG9jdW1lbnRDbGlja0hhbmRsZXJGb3JDcyk7XHJcbiAgICB9XHJcbiAgICBwcml2YXRlIGludGVybmFsUmVuZGVyID0gKGRhdGE6IFRbXSk6IHZvaWQgPT4ge1xyXG4gICAgICAgIGNvbnN0IGZpcnN0SW5kZXggPSAwO1xyXG4gICAgICAgIGxldCBsYXN0SW5kZXggPSB0aGlzLmNvbmZpZ1N0b3JlLk9wdGlvbnMuY2h1bmtTaXplICsgdGhpcy5nZXRJbml0aWFsUm93Q291bnQoKTtcclxuICAgICAgICBsYXN0SW5kZXggPSBsYXN0SW5kZXggPj0gZGF0YS5sZW5ndGggPyBkYXRhLmxlbmd0aCAtIDEgOiBsYXN0SW5kZXg7XHJcbiAgICAgICAgY29uc3QgZ3JpZENvbnRlbnQ6IHN0cmluZyA9IHRoaXMuZ3JpZFRlbXBsYXRlU2VydmljZS5HZXRGaXJzdFRlbXBsYXRlKGRhdGEsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpcnN0SW5kZXgsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhc3RJbmRleCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICB0aGlzLmNvbmZpZ1N0b3JlLk9wdGlvbnMuY29udGFpbmVyRWxlbWVudC5pbm5lckhUTUwgPSBncmlkQ29udGVudDtcclxuICAgICAgICBpZiAoIHRoaXMuc2Nyb2xsSGFuZGxlciAhPT0gdW5kZWZpbmVkICYmIHRoaXMuc2Nyb2xsSGFuZGxlciAhPT0gbnVsbCApIHtcclxuICAgICAgICAgICAgdGhpcy5zY3JvbGxIYW5kbGVyLnJlbW92ZUhhbmRsZXIoKTtcclxuICAgICAgICAgICAgdGhpcy5zY3JvbGxIYW5kbGVyLnNldEN1cnJlbnRJbmRleChsYXN0SW5kZXggKyAxICk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5zY3JvbGxIYW5kbGVyID0gbmV3IFNjcm9sbEhhbmRsZXI8VD4odGhpcy5jb25maWdTdG9yZSwgdGhpcy5ncmlkVGVtcGxhdGVTZXJ2aWNlLCBsYXN0SW5kZXggKyAxKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5zY3JvbGxIYW5kbGVyLlJlZ2lzdGVyRG9tSGFuZGxlcigpO1xyXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLnNldEZvY3VzVG9MYXN0RWxlbWVudCgpO1xyXG4gICAgICAgIH0sIDUwKTtcclxuICAgIH1cclxuICAgIHByaXZhdGUgZ2V0SW5pdGlhbFJvd0NvdW50ID0gKCk6IG51bWJlciA9PiB7XHJcbiAgICAgICAgcmV0dXJuIE1hdGguZmxvb3IoKGpRdWVyeSh3aW5kb3cpLmlubmVySGVpZ2h0KCkgKiAwLjY1ICkgLyAzMik7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBJbml0SGFuZGxlcnMgPSAoKTogdm9pZCA9PiB7XHJcbiAgICAgICAgY29uc3QgcGFyZW50RWxlbWVudCA9IGpRdWVyeSh0aGlzLmNvbmZpZ1N0b3JlLk9wdGlvbnMuY29udGFpbmVyRWxlbWVudCk7XHJcbiAgICAgICAgdGhpcy5oYW5kbGVDaGFpbiA9IFtdO1xyXG4gICAgICAgIHRoaXMuaGFuZGxlQ2hhaW4ucHVzaCh7XHJcbiAgICAgICAgICAgIGhhbmRsZXI6IG5ldyBEZXRhaWxzUm93SGFuZGxlcjxUPih0aGlzLmNvbmZpZ1N0b3JlLCBwYXJlbnRFbGVtZW50KSxcclxuICAgICAgICAgICAgbmFtZTogSGFuZGxlck5hbWVzLkRldGFpbHNSb3csXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy5oYW5kbGVDaGFpbi5wdXNoKHtcclxuICAgICAgICAgICAgaGFuZGxlcjogIG5ldyBGaWx0ZXJDbGlja0hhbmRsZXI8VD4odGhpcy5jb25maWdTdG9yZSwgcGFyZW50RWxlbWVudCksXHJcbiAgICAgICAgICAgIG5hbWU6IEhhbmRsZXJOYW1lcy5GaWx0ZXJBY3Rpb24sXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy5oYW5kbGVDaGFpbi5wdXNoKHtcclxuICAgICAgICAgICAgaGFuZGxlcjogbmV3IEhlYWRlckNsaWNrSGFuZGxlcjxUPih0aGlzLmNvbmZpZ1N0b3JlLCBwYXJlbnRFbGVtZW50KSxcclxuICAgICAgICAgICAgbmFtZTogSGFuZGxlck5hbWVzLkhlYWRlckNsaWNrLFxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMuaGFuZGxlQ2hhaW4ucHVzaCh7XHJcbiAgICAgICAgICAgIGhhbmRsZXI6IG5ldyBQYWdlU2VhcmNoSGFuZGxlcjxUPih0aGlzLmNvbmZpZ1N0b3JlLCBwYXJlbnRFbGVtZW50KSxcclxuICAgICAgICAgICAgbmFtZTogSGFuZGxlck5hbWVzLlBhZ2VTZWFyY2gsXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy5oYW5kbGVDaGFpbi5wdXNoKHtcclxuICAgICAgICAgICAgaGFuZGxlcjogbmV3IFNlbGVjdEV2ZW50SGFuZGxlcjxUPih0aGlzLmNvbmZpZ1N0b3JlLCBwYXJlbnRFbGVtZW50LCB0aGlzLmdyaWRUZW1wbGF0ZVNlcnZpY2UpLFxyXG4gICAgICAgICAgICBuYW1lOiBIYW5kbGVyTmFtZXMuQ29sU2V0dGluZ3MsXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy5oYW5kbGVDaGFpbi5mb3JFYWNoKCh2YWx1ZTogSUhhbmRsZXJDaGFpbjxUPik6IHZvaWQgPT4ge1xyXG4gICAgICAgICAgICB2YWx1ZS5oYW5kbGVyLlJlZ2lzdGVyRG9tSGFuZGxlcigpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGpRdWVyeSh3aW5kb3cpLnJlc2l6ZSh0aGlzLmRvY3VtZW50UmVzaXplSGFuZGxlcik7XHJcbiAgICAgICAgalF1ZXJ5KGRvY3VtZW50KS5jbGljayh0aGlzLmRvY3VtZW50Q2xpY2tIYW5kbGVyKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGRvY3VtZW50UmVzaXplSGFuZGxlckZvckNzID0gKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgdGhpcy5tYW5hZ2VDb2xIYW5kbGVyLm9uUmVzaXplKCk7XHJcbiAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICB9XHJcbiAgICBwcml2YXRlIGRvY3VtZW50Q2xpY2tIYW5kbGVyRm9yQ3MgPSAoZXZlbnQpID0+IHtcclxuICAgICAgICB0aGlzLm1hbmFnZUNvbEhhbmRsZXIub25Eb2N1bWVudENsaWNrKGV2ZW50KTtcclxuICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgIH1cclxuICAgIHByaXZhdGUgZG9jdW1lbnRDbGlja0hhbmRsZXIgPSAoZXZlbnQpID0+IHtcclxuICAgICAgICB0aGlzLmhhbmRsZUNoYWluLmZvckVhY2goKHZhbHVlOiBJSGFuZGxlckNoYWluPFQ+KTogdm9pZCA9PiB7XHJcbiAgICAgICAgICAgIHZhbHVlLmhhbmRsZXIub25Eb2N1bWVudENsaWNrKGV2ZW50KTtcclxuICAgICAgICB9KTtcclxuICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgIH1cclxuICAgIHByaXZhdGUgZG9jdW1lbnRSZXNpemVIYW5kbGVyID0gKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgdGhpcy5oYW5kbGVDaGFpbi5mb3JFYWNoKCh2YWx1ZTogSUhhbmRsZXJDaGFpbjxUPik6IHZvaWQgPT4ge1xyXG4gICAgICAgICAgICB2YWx1ZS5oYW5kbGVyLm9uRG9jdW1lbnRDbGljayhldmVudCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICB9XHJcbiAgICBwcml2YXRlIHNldEZvY3VzVG9MYXN0RWxlbWVudCA9ICgpOiB2b2lkID0+IHtcclxuICAgICAgICBjb25zdCBlbGVtZW50ID0gdGhpcy5jb25maWdTdG9yZS5nZXRGb2N1c2FibGVFbGVtZW50KCk7XHJcbiAgICAgICAgaWYgKCBlbGVtZW50ICkge1xyXG4gICAgICAgICAgICBpZiAoIGVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKFwiZmlyc3RMaW5rXCIpKSB7XHJcbiAgICAgICAgICAgICAgICAkKFwiLnRhYmxlLWZvb3RlciAuZmlyc3RMaW5rXCIpLmZvY3VzKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKCBlbGVtZW50LmNsYXNzTGlzdC5jb250YWlucyhcIm5leHRMaW5rXCIpKSB7XHJcbiAgICAgICAgICAgICAgICAkKFwiLnRhYmxlLWZvb3RlciAubmV4dExpbmtcIikuZm9jdXMoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoIGVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKFwicHJldkxpbmtcIikpIHtcclxuICAgICAgICAgICAgICAgICQoXCIudGFibGUtZm9vdGVyIC5wcmV2TGlua1wiKS5mb2N1cygpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmICggZWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoXCJsYXN0TGlua1wiKSkge1xyXG4gICAgICAgICAgICAgICAgJChcIi50YWJsZS1mb290ZXIgLmxhc3RMaW5rXCIpLmZvY3VzKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKCBlbGVtZW50LmNsYXNzTGlzdC5jb250YWlucyhcInBhZ2VTaXplU2VsZWN0b3JcIikpIHtcclxuICAgICAgICAgICAgICAgICQoXCIudGFibGUtZm9vdGVyIC5wYWdlU2l6ZVNlbGVjdG9yXCIpLmZvY3VzKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKCBlbGVtZW50LmNsYXNzTGlzdC5jb250YWlucyhcInBhZ2VyLWlucHV0XCIpKSB7XHJcbiAgICAgICAgICAgICAgICAkKFwiLnRhYmxlLWZvb3RlciAucGFnZXItaW5wdXRcIikuZm9jdXMoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoIGVsZW1lbnQudGFnTmFtZS50b0xvd2VyQ2FzZSgpID09PSBcInRoXCIgfHwgZWxlbWVudC5wYXJlbnRFbGVtZW50LnRhZ05hbWUudG9Mb3dlckNhc2UoKSA9PT0gXCJ0aFwiKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNjcm9sbEhhbmRsZXIuc2Nyb2xsVGFibGVCb2R5KCk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBkYXRhSGVhZGVySWQgPSBlbGVtZW50LmdldEF0dHJpYnV0ZShcImRhdGEtaGVhZGVyLWlkXCIpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8fCBlbGVtZW50LnBhcmVudEVsZW1lbnQuZ2V0QXR0cmlidXRlKFwiZGF0YS1oZWFkZXItaWRcIik7XHJcbiAgICAgICAgICAgICAgICBsZXQgbmV3Rm9jdXNhYmxlO1xyXG4gICAgICAgICAgICAgICAgJChcIi50YWJsZS1oZWFkZXIgdGhcIikuZWFjaCgoaW5kZXg6IG51bWJlciwgZWxlbTogSFRNTEVsZW1lbnQpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBlYWNoSGVhZGVyID0gJChlbGVtKTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBlYWNoSGVhZGVySWQgPSBlYWNoSGVhZGVyLmF0dHIoXCJkYXRhLWhlYWRlci1pZFwiKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoIGVhY2hIZWFkZXJJZCA9PT0gZGF0YUhlYWRlcklkICkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBuZXdGb2N1c2FibGUgPSBlYWNoSGVhZGVyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICBpZiAoIG5ld0ZvY3VzYWJsZSApIHtcclxuICAgICAgICAgICAgICAgICAgICBuZXdGb2N1c2FibGUuZm9jdXMoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmNvbmZpZ1N0b3JlLnNldEZvY3VzYWJsZUVsZW1lbnQodW5kZWZpbmVkKTtcclxuXHJcbiAgICB9XHJcblxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy90c2xpbnQtbG9hZGVyPz9yZWYtLTEhLi9zcmMvanMvbWFpbi9HcmlkLnRzIiwiaW1wb3J0IHsgSUdyaWRPcHRpb25zIH0gZnJvbSBcIi4uL21haW4vSUdyaWRPcHRpb25zXCI7XHJcbmltcG9ydCB7IEZpbHRlckFjdGlvblR5cGUgfSBmcm9tIFwiLi4vbW9kZWxzL0ZpbHRlckFjdGlvblR5cGVcIjtcclxuaW1wb3J0IHsgR3JpZE9yZGVyRGlyZWN0aW9uIH0gZnJvbSBcIi4uL21vZGVscy9HcmlkT3JkZXJEaXJlY3Rpb25cIjtcclxuaW1wb3J0IHsgSUNvbHVtbiB9IGZyb20gXCIuLi9tb2RlbHMvSUNvbHVtblwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIENvbmZpZ1N0b3JlPFQ+IHtcclxuICAgIHB1YmxpYyBvcHRpb25zOiBJR3JpZE9wdGlvbnM8VD47XHJcbiAgICBwcml2YXRlIGZvY3VzYWJsZUVsZW1lbnQ6IEhUTUxFbGVtZW50O1xyXG4gICAgcHJpdmF0ZSBkZWZhdWx0R3JpZE9wdGlvbnM6IElHcmlkT3B0aW9uczxUPiA9IHtcclxuICAgICAgICBhbmltYXRpb25UaW1lOiAyMDAsXHJcbiAgICAgICAgY2h1bmtTaXplOiA1LFxyXG4gICAgICAgIGNvbHVtbnM6IFtdLFxyXG4gICAgICAgIGNvbnRhaW5lckVsZW1lbnQ6IG51bGwsXHJcbiAgICAgICAgLy8gbWFuYWdlQ29sU2V0dGluZ3NDb250YWluZXI6IG51bGwsXHJcbiAgICAgICAgaHlicmlkRnVuY3Rpb246IChjb2x1bW46IElDb2x1bW4sIHJvdzogVCk6IHN0cmluZyA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiBcInRydWVcIjtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGtleUNvbHVtbjogXCJcIixcclxuICAgICAgICAvLyBvbkNvbFNldHRpbmdzQ2hhbmdlOiAoY29sQ29uZmlnOiBJQ29sdW1uW10pOiB2b2lkID0+IHtcclxuICAgICAgICAvLyAgICAgLy8gTm8gQ29kZVxyXG4gICAgICAgIC8vIH0sXHJcbiAgICAgICAgb25DbGlja0ZpbHRlcjogKGNvbHVtbjogc3RyaW5nLCB2YWx1ZTogYW55LCBhY3Rpb25UeXBlOiBGaWx0ZXJBY3Rpb25UeXBlKTogdm9pZCA9PiB7XHJcbiAgICAgICAgICAgIC8vIE5vIGNvZGVcclxuICAgICAgICB9LFxyXG4gICAgICAgIG9uQ2xpY2tIZWFkZXI6IChjb2x1bW46IHN0cmluZywgZGlyZWN0aW9uOiBHcmlkT3JkZXJEaXJlY3Rpb24pOiB2b2lkID0+IHtcclxuICAgICAgICAgICAgLy8gTm8gY29kZVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgb25QYWdlU2VhcmNoOiAocGFnZVNpemU6IG51bWJlciwgcGFnZUluZGV4OiBudW1iZXIpOiB2b2lkID0+IHtcclxuICAgICAgICAgICAgLy8gTm8gY29kZVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgb25TZWxlY3Q6IChyb3dzOiBUW10pOiB2b2lkID0+IHtcclxuICAgICAgICAgICAgLy8gTm8gQ29kZVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgc2hvd0NhcHRpb246IGZhbHNlLFxyXG4gICAgICAgIGNhcHRpb246IFwiXCIsXHJcbiAgICAgICAgc3VtbWFyeTogXCJcIixcclxuICAgIH07XHJcbiAgICBjb25zdHJ1Y3RvcihvcHRpb25zOiBJR3JpZE9wdGlvbnM8VD4pIHtcclxuICAgICAgICB0aGlzLmV4dGVuZE9wdGlvbnMob3B0aW9ucyk7XHJcbiAgICAgICAgaWYgKG9wdGlvbnMuY29udGFpbmVyRWxlbWVudCA9PT0gbnVsbCkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJQbGVhc2UgUHJvdmlkZSBhIHZhbGlkIGNvbnRhaW5lciBFbGVtZW50IG9iamVjdFwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5vcHRpb25zLmNvbHVtbnMuc29ydCgocHJldiwgbmV4dCkgPT4gcHJldi5vcmRlciAtIG5leHQub3JkZXIpO1xyXG4gICAgfVxyXG4gICAgcHVibGljIHNldCBPcHRpb25zKG9wdGlvbnM6IElHcmlkT3B0aW9uczxUPikge1xyXG4gICAgICAgIHRoaXMub3B0aW9ucyA9IG9wdGlvbnM7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgZ2V0IE9wdGlvbnMoKTogSUdyaWRPcHRpb25zPFQ+IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5vcHRpb25zO1xyXG4gICAgfVxyXG4gICAgcHVibGljIHNldEZvY3VzYWJsZUVsZW1lbnQgPSAoZWxlbWVudDogSFRNTEVsZW1lbnQpOiB2b2lkID0+IHtcclxuICAgICAgICB0aGlzLmZvY3VzYWJsZUVsZW1lbnQgPSBlbGVtZW50O1xyXG4gICAgfVxyXG4gICAgcHVibGljIGdldEZvY3VzYWJsZUVsZW1lbnQgPSAoKTogSFRNTEVsZW1lbnQgPT4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmZvY3VzYWJsZUVsZW1lbnQ7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgU2V0SGlkZGVuT25Db25maWcgPSAoYm9vbDogYm9vbGVhbiwgY29sdW1uSWQ/OiBzdHJpbmcpOiB2b2lkID0+IHtcclxuICAgICAgICBmb3IgKGNvbnN0IGNvbCBvZiB0aGlzLk9wdGlvbnMuY29sdW1ucykge1xyXG4gICAgICAgICAgICBpZiAoY29sdW1uSWQgPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgY29sLmhpZGRlbiA9IGJvb2w7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoY29sLmlkID09PSBjb2x1bW5JZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbC5oaWRkZW4gPSBib29sO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcHJpdmF0ZSBleHRlbmRPcHRpb25zID0gKGlucHV0T3B0aW9uczogSUdyaWRPcHRpb25zPFQ+KTogSUdyaWRPcHRpb25zPFQ+ID0+IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5vcHRpb25zID0galF1ZXJ5LmV4dGVuZCh7fSwgdGhpcy5kZWZhdWx0R3JpZE9wdGlvbnMsIGlucHV0T3B0aW9ucyk7XHJcbiAgICB9XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL3RzbGludC1sb2FkZXI/P3JlZi0tMSEuL3NyYy9qcy9jb25maWcvQ29uZmlnU3RvcmUudHMiLCJpbXBvcnQgeyBDb25maWdTdG9yZSB9IGZyb20gXCIuLi9jb25maWcvQ29uZmlnU3RvcmVcIjtcclxuaW1wb3J0IHsgR3JpZFRlbXBsYXRlU2VydmljZSB9IGZyb20gXCIuLi9zZXJ2aWNlcy9HcmlkVGVtcGxhdGVTZXJ2aWNlXCI7XHJcbmltcG9ydCB7IElFdmVudEhhbmRsZXIgfSBmcm9tIFwiLi9JRXZlbnRIYW5kbGVyXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgU2VsZWN0RXZlbnRIYW5kbGVyPFQ+IGltcGxlbWVudHMgSUV2ZW50SGFuZGxlcjxUPiB7XHJcbiAgICBwcml2YXRlIHBhcmVudEVsZW1lbnQ6IEpRdWVyeTtcclxuICAgIHByaXZhdGUgY29uZmlnU3RvcmU6IENvbmZpZ1N0b3JlPFQ+O1xyXG4gICAgcHJpdmF0ZSBncmlkVGVtcGxhdGVTZXJ2aWNlOiBHcmlkVGVtcGxhdGVTZXJ2aWNlPFQ+O1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKGNvbmZpZ1N0b3JlOiBDb25maWdTdG9yZTxUPiwgZWxlbWVudDogSlF1ZXJ5LCBncmlkVGVtcGxhdGVTZXJ2aWNlOiBHcmlkVGVtcGxhdGVTZXJ2aWNlPFQ+KSB7XHJcbiAgICAgICAgdGhpcy5jb25maWdTdG9yZSA9IGNvbmZpZ1N0b3JlO1xyXG4gICAgICAgIHRoaXMucGFyZW50RWxlbWVudCA9IGVsZW1lbnQ7XHJcbiAgICAgICAgdGhpcy5ncmlkVGVtcGxhdGVTZXJ2aWNlID0gZ3JpZFRlbXBsYXRlU2VydmljZTtcclxuICAgIH1cclxuICAgIHB1YmxpYyBSZWdpc3RlckRvbUhhbmRsZXIoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5wYXJlbnRFbGVtZW50Lm9uKFwiY2hhbmdlXCIsIFwiLnNlbGVjdC1rZXktY2hlY2tib3hcIiAsIChldmVudCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBlbGVtZW50ID0galF1ZXJ5KGV2ZW50LnRhcmdldCk7XHJcbiAgICAgICAgICAgIGNvbnN0IGNoZWNrZWQgPSBlbGVtZW50LmlzKFwiOmNoZWNrZWRcIik7XHJcbiAgICAgICAgICAgIGNvbnN0IHZhbHVlID0gZWxlbWVudC52YWwoKS50b1N0cmluZygpO1xyXG4gICAgICAgICAgICBpZiAoY2hlY2tlZCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5ncmlkVGVtcGxhdGVTZXJ2aWNlLnNlbGVjdFJvd3ModmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgZWxlbWVudC5wYXJlbnRzKFwiLm1haW5Sb3dcIikuYWRkQ2xhc3MoXCJhY3RpdmVcIik7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmdyaWRUZW1wbGF0ZVNlcnZpY2UuZGVTZWxlY3RSb3dzKHZhbHVlKTtcclxuICAgICAgICAgICAgICAgIGVsZW1lbnQucGFyZW50cyhcIi5tYWluUm93XCIpLnJlbW92ZUNsYXNzKFwiYWN0aXZlXCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChldmVudC5vcmlnaW5hbEV2ZW50ID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLmNvbmZpZ1N0b3JlLk9wdGlvbnMub25TZWxlY3QodGhpcy5ncmlkVGVtcGxhdGVTZXJ2aWNlLlNlbGVjdGVkLCBjaGVja2VkKTtcclxuICAgICAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy5wYXJlbnRFbGVtZW50Lm9uKFwiY2hhbmdlXCIsIFwiLnNlbGVjdC1hbGwtY2hlY2tib3hcIiAsIChldmVudCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBlbGVtZW50ID0galF1ZXJ5KGV2ZW50LnRhcmdldCk7XHJcbiAgICAgICAgICAgIGNvbnN0IGNoZWNrZWQgPSBlbGVtZW50LmlzKFwiOmNoZWNrZWRcIik7XHJcbiAgICAgICAgICAgIHRoaXMucGFyZW50RWxlbWVudC5maW5kKFwiLnNlbGVjdC1rZXktY2hlY2tib3hcIikucHJvcChcImNoZWNrZWRcIiwgY2hlY2tlZCk7XHJcbiAgICAgICAgICAgIGlmIChjaGVja2VkKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmdyaWRUZW1wbGF0ZVNlcnZpY2Uuc2VsZWN0QWxsKCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnBhcmVudEVsZW1lbnQuZmluZChcIi5tYWluVGFibGUgLm1haW5Sb3dcIikuYWRkQ2xhc3MoXCJhY3RpdmVcIik7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmdyaWRUZW1wbGF0ZVNlcnZpY2UuZGVTZWxlY3RBbGwoKTtcclxuICAgICAgICAgICAgICAgIHRoaXMucGFyZW50RWxlbWVudC5maW5kKFwiLm1haW5UYWJsZSAubWFpblJvd1wiKS5yZW1vdmVDbGFzcyhcImFjdGl2ZVwiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLmNvbmZpZ1N0b3JlLk9wdGlvbnMub25TZWxlY3QodGhpcy5ncmlkVGVtcGxhdGVTZXJ2aWNlLlNlbGVjdGVkLCBjaGVja2VkKTtcclxuICAgICAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgb25SZXNpemUoKTogdm9pZCB7XHJcbiAgICAgICAgLy8gSWdub3JlXHJcbiAgICB9XHJcbiAgICBwdWJsaWMgb25Eb2N1bWVudENsaWNrKGV2ZW50OiBhbnkpOiB2b2lkIHtcclxuICAgICAgICAvLyBJZ25vcmVcclxuICAgIH1cclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvdHNsaW50LWxvYWRlcj8/cmVmLS0xIS4vc3JjL2pzL2V2ZW50SGFuZGxlcnMvU2VsZWN0RXZlbnRIYW5kbGVyLnRzIiwiaW1wb3J0IHsgQ29uZmlnU3RvcmUgfSBmcm9tIFwiLi4vY29uZmlnL0NvbmZpZ1N0b3JlXCI7XHJcbmltcG9ydCB7IElFdmVudEhhbmRsZXIgfSBmcm9tIFwiLi9JRXZlbnRIYW5kbGVyXCI7XHJcbmV4cG9ydCBjbGFzcyBEZXRhaWxzUm93SGFuZGxlcjxUPiBpbXBsZW1lbnRzIElFdmVudEhhbmRsZXI8VD4ge1xyXG4gICAgcHJpdmF0ZSBwYXJlbnRFbGVtZW50OiBKUXVlcnk7XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBjb25maWdTdG9yZTogQ29uZmlnU3RvcmU8VD4sIGVsZW1lbnQ6IEpRdWVyeSkge1xyXG4gICAgICAgIHRoaXMucGFyZW50RWxlbWVudCA9IGVsZW1lbnQ7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgb25SZXNpemUoKTogdm9pZCB7XHJcbiAgICAgICAgLy8gTm90aGluZyB0byBEby5cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgb25Eb2N1bWVudENsaWNrKGV2ZW50KTogdm9pZCB7XHJcbiAgICAgICAgLy8gTm90aGluZyB0byBEby5cclxuICAgIH1cclxuICAgIHB1YmxpYyBSZWdpc3RlckRvbUhhbmRsZXIgPSAoKTogdm9pZCA9PiB7XHJcbiAgICAgICAgdGhpcy5wYXJlbnRFbGVtZW50Lm9uKFwiY2xpY2tcIiwgXCIudGFibGUtYm9keSAuZXhwYW5zaW9uQXJyb3dzIGlcIiwgdGhpcy5leHBhbmRSb3cpO1xyXG4gICAgICAgIHRoaXMucGFyZW50RWxlbWVudC5vbihcImtleXVwXCIsIFwiLnRhYmxlLWJvZHkgLmV4cGFuc2lvbkFycm93cyBpXCIsIHRoaXMuZXhwYW5kUm93KTtcclxuICAgIH1cclxuICAgIHByaXZhdGUgZXhwYW5kUm93ID0gKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgY29uc3QgY29kZSA9IGV2ZW50LmtleUNvZGUgfHwgZXZlbnQud2hpY2g7XHJcbiAgICAgICAgaWYgKCBldmVudC50eXBlICE9PSBcImNsaWNrXCIgJiYgKGV2ZW50LnR5cGUgPT09IFwia2V5dXBcIiAmJiBjb2RlICE9PSAxMyAmJiBjb2RlICE9PSAzMikgKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgYXJyb3cgPSBqUXVlcnkoZXZlbnQudGFyZ2V0KTtcclxuICAgICAgICBjb25zdCBkZXRhaWxzUm93ID0gYXJyb3cuY2xvc2VzdChcInRyXCIpLm5leHQoKTtcclxuICAgICAgICBjb25zdCBjdXJyZW50SWNvbiA9IGFycm93LmhpZGUoKS5hdHRyKFwiYXJpYS1oaWRkZW5cIiwgXCJ0cnVlXCIpO1xyXG4gICAgICAgIGNvbnN0IG90aGVySWNvbiA9IGFycm93LnNpYmxpbmdzKFwiaVwiKS5zaG93KCkuYXR0cihcImFyaWEtaGlkZGVuXCIsIFwiZmFsc2VcIik7XHJcbiAgICAgICAgaWYgKGFycm93Lmhhc0NsYXNzKFwiZXhwYW5kRGV0YWlsc1Jvd0ljb25cIikpIHtcclxuICAgICAgICAgICAgb3RoZXJJY29uLmF0dHIoXCJhcmlhLWV4cGFuZGVkXCIsIFwidHJ1ZVwiKTtcclxuICAgICAgICAgICAgZGV0YWlsc1Jvdy5zbGlkZURvd24odGhpcy5jb25maWdTdG9yZS5PcHRpb25zLmFuaW1hdGlvblRpbWUpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGN1cnJlbnRJY29uLmF0dHIoXCJhcmlhLWV4cGFuZGVkXCIsIFwidHJ1ZVwiKTtcclxuICAgICAgICAgICAgZGV0YWlsc1Jvdy5zbGlkZVVwKHRoaXMuY29uZmlnU3RvcmUuT3B0aW9ucy5hbmltYXRpb25UaW1lKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgb3RoZXJJY29uLmZvY3VzKCk7XHJcbiAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICB9XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL3RzbGludC1sb2FkZXI/P3JlZi0tMSEuL3NyYy9qcy9ldmVudEhhbmRsZXJzL0RldGFpbHNSb3dIYW5kbGVyLnRzIiwiaW1wb3J0IHsgQ29uZmlnU3RvcmUgfSBmcm9tIFwiLi4vY29uZmlnL0NvbmZpZ1N0b3JlXCI7XHJcbmltcG9ydCB7IENvbW1vblV0aWwgfSBmcm9tIFwiLi4vdXRpbC9Db2x1bW5VdGlsXCI7XHJcbmltcG9ydCB7IEZpbHRlckFjdGlvblR5cGUgfSBmcm9tIFwiLi8uLi9tb2RlbHMvRmlsdGVyQWN0aW9uVHlwZVwiO1xyXG5pbXBvcnQgeyBJRXZlbnRIYW5kbGVyIH0gZnJvbSBcIi4vSUV2ZW50SGFuZGxlclwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIEZpbHRlckNsaWNrSGFuZGxlcjxUPiBpbXBsZW1lbnRzIElFdmVudEhhbmRsZXI8VD4ge1xyXG4gICAgcHJpdmF0ZSBjb25maWdTdG9yZTogQ29uZmlnU3RvcmU8VD47XHJcbiAgICBwcml2YXRlIHBhcmVudEVsZW1lbnQ6IEpRdWVyeTtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihjb25maWdTdG9yZTogQ29uZmlnU3RvcmU8VD4sIGVsZW1lbnQ6IEpRdWVyeSkge1xyXG4gICAgICAgIHRoaXMuY29uZmlnU3RvcmUgPSBjb25maWdTdG9yZTtcclxuICAgICAgICB0aGlzLnBhcmVudEVsZW1lbnQgPSBlbGVtZW50O1xyXG4gICAgfVxyXG4gICAgcHVibGljIG9uUmVzaXplKCk6IHZvaWQge1xyXG4gICAgICAgIC8vIE5vdGhpbmcgdG8gRG8uXHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIG9uRG9jdW1lbnRDbGljayhldmVudCk6IHZvaWQge1xyXG4gICAgICAgIC8vIE5vdGhpbmcgdG8gRG8uXHJcbiAgICB9XHJcbiAgICBwdWJsaWMgUmVnaXN0ZXJEb21IYW5kbGVyID0gKCk6IHZvaWQgPT4ge1xyXG4gICAgICAgIHRoaXMucGFyZW50RWxlbWVudC5vbihcImNsaWNrXCIsIFwiLnRhYmxlLWJvZHkgLmRldGFpbHNSb3cgLmRldGFpbHNUYWJsZSB0ZCBpXCIsIChldmVudCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBlbGVtZW50ID0galF1ZXJ5KGV2ZW50LnRhcmdldCk7XHJcbiAgICAgICAgICAgIGNvbnN0IHBhcmVudFRkID0gZWxlbWVudC5wYXJlbnRzKFwidGRcIik7XHJcbiAgICAgICAgICAgIGNvbnN0IGtleSA9IHBhcmVudFRkLmF0dHIoXCJkYXRhLWZpbHRlci1rZXlcIik7XHJcbiAgICAgICAgICAgIGNvbnN0IHZhbHVlID0gcGFyZW50VGQuYXR0cihcImRhdGEtZmlsdGVyLXZhbHVlXCIpO1xyXG4gICAgICAgICAgICBjb25zdCB0eXBlID0gcGFyZW50VGQuYXR0cihcImRhdGEtZmlsdGVyLXR5cGVcIik7XHJcbiAgICAgICAgICAgIGNvbnN0IGNvbCA9IENvbW1vblV0aWwuR2V0Q29sdW1uT2JqZWN0KGtleSwgdGhpcy5jb25maWdTdG9yZS5PcHRpb25zLmNvbHVtbnMpO1xyXG4gICAgICAgICAgICBpZiAoY29sID09PSB1bmRlZmluZWQgfHwgY29sID09PSBudWxsIHx8ICFjb2wuZmlsdGVyYWJsZSApIHtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBsZXQgZmlsdGVyQWN0aW9uOiBGaWx0ZXJBY3Rpb25UeXBlID0gRmlsdGVyQWN0aW9uVHlwZS5BZGQ7XHJcbiAgICAgICAgICAgIGlmIChlbGVtZW50Lmhhc0NsYXNzKFwicmVtb3ZlRmlsdGVyXCIpKSB7XHJcbiAgICAgICAgICAgICAgICBmaWx0ZXJBY3Rpb24gPSBGaWx0ZXJBY3Rpb25UeXBlLk1pbnVzO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMuY29uZmlnU3RvcmUuc2V0Rm9jdXNhYmxlRWxlbWVudChldmVudC50YXJnZXQpO1xyXG4gICAgICAgICAgICB0aGlzLmNvbmZpZ1N0b3JlLk9wdGlvbnMub25DbGlja0ZpbHRlcihrZXksIHZhbHVlLCBmaWx0ZXJBY3Rpb24sIHR5cGUpO1xyXG4gICAgICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvdHNsaW50LWxvYWRlcj8/cmVmLS0xIS4vc3JjL2pzL2V2ZW50SGFuZGxlcnMvRmlsdGVyQ2xpY2tIYW5kbGVyLnRzIiwiZXhwb3J0IGVudW0gRmlsdGVyQWN0aW9uVHlwZSB7XHJcbiAgICBBZGQgPSBcIkFkZFwiLFxyXG4gICAgTWludXMgPSBcIk1pbnVzXCIsXHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL3RzbGludC1sb2FkZXI/P3JlZi0tMSEuL3NyYy9qcy9tb2RlbHMvRmlsdGVyQWN0aW9uVHlwZS50cyIsImV4cG9ydCBlbnVtIEhhbmRsZXJOYW1lcyB7XHJcbiAgICBGaWx0ZXJBY3Rpb24sXHJcbiAgICBIZWFkZXJDbGljayxcclxuICAgIFNjcm9sbCxcclxuICAgIFBhZ2VTZWFyY2gsXHJcbiAgICBEZXRhaWxzUm93LFxyXG4gICAgVG9nZ2xlQ29sdW1uLFxyXG4gICAgQ29sU2V0dGluZ3MsXHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL3RzbGludC1sb2FkZXI/P3JlZi0tMSEuL3NyYy9qcy9ldmVudEhhbmRsZXJzL0hhbmRsZXJOYW1lcy50cyIsImltcG9ydCB7IENvbmZpZ1N0b3JlIH0gZnJvbSBcIi4uL2NvbmZpZy9Db25maWdTdG9yZVwiO1xyXG5pbXBvcnQgeyBDb21tb25VdGlsIH0gZnJvbSBcIi4uL3V0aWwvQ29sdW1uVXRpbFwiO1xyXG5pbXBvcnQgeyBHcmlkT3JkZXJEaXJlY3Rpb24gfSBmcm9tIFwiLi8uLi9tb2RlbHMvR3JpZE9yZGVyRGlyZWN0aW9uXCI7XHJcbmltcG9ydCB7IElFdmVudEhhbmRsZXIgfSBmcm9tIFwiLi9JRXZlbnRIYW5kbGVyXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgSGVhZGVyQ2xpY2tIYW5kbGVyPFQ+IGltcGxlbWVudHMgSUV2ZW50SGFuZGxlcjxUPiB7XHJcbiAgICBwcml2YXRlIHBhcmVudEVsZW1lbnQ6IEpRdWVyeTtcclxuICAgIHByaXZhdGUgY29uZmlnU3RvcmU6IENvbmZpZ1N0b3JlPFQ+O1xyXG4gICAgcHJpdmF0ZSB3YXNIZWFkZXJDbGlja2VkOiBib29sZWFuO1xyXG4gICAgcHJpdmF0ZSBsYXN0Rm9jdXNlZEVsZW1lbnQ6IGFueTtcclxuICAgIGNvbnN0cnVjdG9yKGNvbmZpZ1N0b3JlOiBDb25maWdTdG9yZTxUPiwgZWxlbWVudDogSlF1ZXJ5KSB7XHJcbiAgICAgICAgdGhpcy5jb25maWdTdG9yZSA9IGNvbmZpZ1N0b3JlO1xyXG4gICAgICAgIHRoaXMucGFyZW50RWxlbWVudCA9IGVsZW1lbnQ7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIG9uUmVzaXplKCk6IHZvaWQge1xyXG4gICAgICAgIC8vIE5vdGhpbmcgdG8gRG8uXHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIG9uRG9jdW1lbnRDbGljayhldmVudCk6IHZvaWQge1xyXG4gICAgICAgIC8vIE5vdGhpbmcgdG8gRG8uXHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIFJlZ2lzdGVyRG9tSGFuZGxlciA9ICgpOiB2b2lkID0+IHtcclxuICAgICAgICAvLyBSZWdpc3RlcmluZyBKUXVlcnkgRXZlbnQgSGFuZGxlciBpZiBIZWFkZXIgaXMgQ2xpY2tlZC5cclxuICAgICAgICB0aGlzLnBhcmVudEVsZW1lbnQub24oXCJjbGlja1wiLCBcIi50YWJsZS1oZWFkZXIgdGhcIiwgdGhpcy5oYW5kbGVIZWFkZXJTb3J0KTtcclxuICAgICAgICB0aGlzLnBhcmVudEVsZW1lbnQub24oXCJrZXl1cFwiLCBcIi50YWJsZS1oZWFkZXIgdGhcIiwgdGhpcy5oYW5kbGVIZWFkZXJTb3J0KTtcclxuICAgICAgICB0aGlzLnBhcmVudEVsZW1lbnQub24oXCJtb3VzZWRvd25cIiAsIFwiLnRhYmxlLWhlYWRlciB0aFwiLCB0aGlzLmhhbmRsZU1vdXNlRG93bik7XHJcbiAgICAgICAgdGhpcy5wYXJlbnRFbGVtZW50Lm9uKFwiZm9jdXNpblwiLCBcIi50YWJsZS1oZWFkZXIgdGhcIiwgdGhpcy5oYW5kbGVIZWFkZXJGb2N1cyk7XHJcbiAgICB9XHJcbiAgICBwcml2YXRlIGhhbmRsZU1vdXNlRG93biA9ICgpID0+IHtcclxuICAgICAgICB0aGlzLndhc0hlYWRlckNsaWNrZWQgPSB0cnVlO1xyXG4gICAgfVxyXG4gICAgcHJpdmF0ZSBoYW5kbGVIZWFkZXJGb2N1cyA9IChldmVudCkgPT4ge1xyXG4gICAgICAgIC8vIEhhbmRsZSBmb2N1c1xyXG4gICAgICAgIGlmICh0aGlzLmxhc3RGb2N1c2VkRWxlbWVudCAhPT0gZXZlbnQudGFyZ2V0KSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLndhc0hlYWRlckNsaWNrZWQpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLmxhc3RGb2N1c2VkRWxlbWVudCA9IGV2ZW50LnRhcmdldDtcclxuICAgICAgICAgICAgdGhpcy53YXNIZWFkZXJDbGlja2VkID0gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIGV2ZW50LmRhdGEuY2xpY2tlZCA9IHVuZGVmaW5lZDtcclxuICAgICAgICBjb25zdCBoZWFkZXIgPSBqUXVlcnkoZXZlbnQudGFyZ2V0KTtcclxuICAgICAgICBjb25zdCBsZWZ0UG9zdGl0aW9uID0gaGVhZGVyLnBvc2l0aW9uKCkubGVmdDtcclxuICAgICAgICBjb25zdCBoZWFkZXJXaWR0aCA9IGhlYWRlci53aWR0aCgpO1xyXG4gICAgICAgIGNvbnN0IHRhYmxlQm9keSA9IHRoaXMucGFyZW50RWxlbWVudC5maW5kKFwiLnRhYmxlLWJvZHlcIik7XHJcbiAgICAgICAgY29uc3QgbWFpblRhYmxlQm9keSA9IHRoaXMucGFyZW50RWxlbWVudC5maW5kKFwiLm1haW5UYWJsZVwiKTtcclxuICAgICAgICBjb25zdCB2aXNpYmxlVGJvZHlXaWR0aCA9IHRhYmxlQm9keS53aWR0aCgpO1xyXG4gICAgICAgIGNvbnN0IG1heFNjcm9sbCA9IG1haW5UYWJsZUJvZHkud2lkdGgoKSAtIHZpc2libGVUYm9keVdpZHRoO1xyXG4gICAgICAgIGNvbnN0IGN1cnJlbnRQb3NpdGlvbiA9IGxlZnRQb3N0aXRpb24gKyBoZWFkZXJXaWR0aCAqIDI7XHJcbiAgICAgICAgbGV0IHNjcm9sbExlZnRCeTtcclxuICAgICAgICBpZiAoIGN1cnJlbnRQb3NpdGlvbiA+IHZpc2libGVUYm9keVdpZHRoKSB7XHJcbiAgICAgICAgICAgIHNjcm9sbExlZnRCeSA9IGxlZnRQb3N0aXRpb24gPiBtYXhTY3JvbGwgPyBtYXhTY3JvbGwgOiBsZWZ0UG9zdGl0aW9uO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHNjcm9sbExlZnRCeSA9IDA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRhYmxlQm9keS5zY3JvbGxMZWZ0KHNjcm9sbExlZnRCeSk7XHJcbiAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICB9XHJcbiAgICBwcml2YXRlIGhhbmRsZUhlYWRlclNvcnQgPSAoZXZlbnQpID0+IHtcclxuICAgICAgICBjb25zdCBjb2RlID0gZXZlbnQua2V5Q29kZSB8fCBldmVudC53aGljaDtcclxuICAgICAgICBpZiAoIGV2ZW50LnR5cGUgIT09IFwiY2xpY2tcIiAmJiAoZXZlbnQudHlwZSA9PT0gXCJrZXl1cFwiICYmIGNvZGUgIT09IDEzICYmIGNvZGUgIT09IDMyKSApIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBlbGVtZW50ID0galF1ZXJ5KGV2ZW50LnRhcmdldCkuY2xvc2VzdChcInRoXCIpO1xyXG4gICAgICAgIGNvbnN0IGhlYWRlcklkID0gZWxlbWVudC5hdHRyKFwiZGF0YS1oZWFkZXItaWRcIik7XHJcbiAgICAgICAgY29uc3QgY29sID0gQ29tbW9uVXRpbC5HZXRDb2x1bW5PYmplY3QoaGVhZGVySWQsIHRoaXMuY29uZmlnU3RvcmUuT3B0aW9ucy5jb2x1bW5zKTtcclxuICAgICAgICBpZiAoY29sID09PSB1bmRlZmluZWQgfHwgY29sID09PSBudWxsIHx8ICFjb2wuc29ydGFibGUgKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgYXJyb3dJY29ucyA9IGVsZW1lbnQuZmluZChcImlcIik7XHJcbiAgICAgICAgY29uc3QgdXBBcnJvd0ljb24gPSBhcnJvd0ljb25zLmZpcnN0KCk7XHJcbiAgICAgICAgY29uc3QgZG93bkFycm93SWNvbiA9IGFycm93SWNvbnMubGFzdCgpO1xyXG4gICAgICAgIGxldCBkaXJlY3Rpb246IEdyaWRPcmRlckRpcmVjdGlvbjtcclxuICAgICAgICBpZiAoYXJyb3dJY29ucy5pcyhcIjp2aXNpYmxlXCIpKSB7XHJcbiAgICAgICAgICAgIGlmICh1cEFycm93SWNvbi5pcyhcIjp2aXNpYmxlXCIpKSB7XHJcbiAgICAgICAgICAgICAgICBkaXJlY3Rpb24gPSBHcmlkT3JkZXJEaXJlY3Rpb24uRGVzYztcclxuICAgICAgICAgICAgICAgIHVwQXJyb3dJY29uLmhpZGUoKTtcclxuICAgICAgICAgICAgICAgIGRvd25BcnJvd0ljb24uc2hvdygpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgZGlyZWN0aW9uID0gR3JpZE9yZGVyRGlyZWN0aW9uLkFzYztcclxuICAgICAgICAgICAgICAgIGRvd25BcnJvd0ljb24uaGlkZSgpO1xyXG4gICAgICAgICAgICAgICAgdXBBcnJvd0ljb24uc2hvdygpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgZGlyZWN0aW9uID0gR3JpZE9yZGVyRGlyZWN0aW9uLkFzYztcclxuICAgICAgICAgICAgdXBBcnJvd0ljb24uc2hvdygpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbGVtZW50LmF0dHIoXCJhcmlhLXNvcnRcIiwgZGlyZWN0aW9uID09PSBHcmlkT3JkZXJEaXJlY3Rpb24uRGVzYyA/IFwiZGVzY2VuZGluZ1wiIDogXCJhc2NlbmRpbmdcIik7XHJcbiAgICAgICAgQ29tbW9uVXRpbC5TZXRPcmRlcihoZWFkZXJJZCwgZGlyZWN0aW9uLCB0aGlzLmNvbmZpZ1N0b3JlLk9wdGlvbnMuY29sdW1ucyk7XHJcbiAgICAgICAgdGhpcy5jb25maWdTdG9yZS5zZXRGb2N1c2FibGVFbGVtZW50KGV2ZW50LnRhcmdldCk7XHJcbiAgICAgICAgdGhpcy5jb25maWdTdG9yZS5PcHRpb25zLm9uQ2xpY2tIZWFkZXIoaGVhZGVySWQsIGRpcmVjdGlvbiwgY29sLm9yZGVyQnlDb2wpO1xyXG4gICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgfVxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy90c2xpbnQtbG9hZGVyPz9yZWYtLTEhLi9zcmMvanMvZXZlbnRIYW5kbGVycy9IZWFkZXJDbGlja0hhbmRsZXIudHMiLCJpbXBvcnQgKiBhcyBqUXVlcnkgZnJvbSBcImpxdWVyeVwiO1xyXG5pbXBvcnQgeyBDb25maWdTdG9yZSB9IGZyb20gXCIuLi9jb25maWcvQ29uZmlnU3RvcmVcIjtcclxuaW1wb3J0IHsgUGFnZXIgfSBmcm9tIFwiLi4vcGFnaW5hdGlvbi9QYWdlclwiO1xyXG5pbXBvcnQgeyBJRXZlbnRIYW5kbGVyIH0gZnJvbSBcIi4vSUV2ZW50SGFuZGxlclwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIFBhZ2VTZWFyY2hIYW5kbGVyPFQ+IGltcGxlbWVudHMgSUV2ZW50SGFuZGxlcjxUPiB7XHJcbiAgICBwcml2YXRlIGNvbmZpZ1N0b3JlOiBDb25maWdTdG9yZTxUPjtcclxuICAgIHByaXZhdGUgcGFyZW50RWxlbWVudDogSlF1ZXJ5O1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKGNvbmZpZ1N0b3JlOiBDb25maWdTdG9yZTxUPiwgZWxlbWVudDogSlF1ZXJ5KSB7XHJcbiAgICAgICAgdGhpcy5jb25maWdTdG9yZSA9IGNvbmZpZ1N0b3JlO1xyXG4gICAgICAgIHRoaXMucGFyZW50RWxlbWVudCA9IGVsZW1lbnQ7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgb25SZXNpemUoKTogdm9pZCB7XHJcbiAgICAgICAgLy8gdGhyb3cgbmV3IEVycm9yKFwiTWV0aG9kIG5vdCBpbXBsZW1lbnRlZC5cIik7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIG9uRG9jdW1lbnRDbGljaygpOiB2b2lkIHtcclxuICAgICAgICAvLyB0aHJvdyBuZXcgRXJyb3IoXCJNZXRob2Qgbm90IGltcGxlbWVudGVkLlwiKTtcclxuICAgIH1cclxuICAgIHB1YmxpYyBSZWdpc3RlckRvbUhhbmRsZXIgPSAoKTogdm9pZCA9PiB7XHJcbiAgICAgICAgdGhpcy5wYXJlbnRFbGVtZW50Lm9uKFwiY2xpY2tcIiwgXCIudGFibGUtZm9vdGVyIC5maXJzdExpbmtcIiwgKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuY29uZmlnU3RvcmUuc2V0Rm9jdXNhYmxlRWxlbWVudChldmVudC50YXJnZXQpO1xyXG4gICAgICAgICAgICB0aGlzLmNvbmZpZ1N0b3JlLm9wdGlvbnMub25QYWdlU2VhcmNoKFBhZ2VyLlBhZ2luYXRpb25EYXRhLnBhZ2VTaXplLCAxKTtcclxuICAgICAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy5wYXJlbnRFbGVtZW50Lm9uKFwiY2xpY2tcIiwgXCIudGFibGUtZm9vdGVyIC5uZXh0TGlua1wiLCAoZXZlbnQpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5jb25maWdTdG9yZS5zZXRGb2N1c2FibGVFbGVtZW50KGV2ZW50LnRhcmdldCk7XHJcbiAgICAgICAgICAgIHRoaXMuY29uZmlnU3RvcmUub3B0aW9ucy5vblBhZ2VTZWFyY2goUGFnZXIuUGFnaW5hdGlvbkRhdGEucGFnZVNpemUsIFBhZ2VyLlBhZ2luYXRpb25EYXRhLnBhZ2VJbmRleCArIDEpO1xyXG4gICAgICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICB0aGlzLnBhcmVudEVsZW1lbnQub24oXCJjbGlja1wiLCBcIi50YWJsZS1mb290ZXIgLnByZXZMaW5rXCIsIChldmVudCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmNvbmZpZ1N0b3JlLnNldEZvY3VzYWJsZUVsZW1lbnQoZXZlbnQudGFyZ2V0KTtcclxuICAgICAgICAgICAgdGhpcy5jb25maWdTdG9yZS5vcHRpb25zLm9uUGFnZVNlYXJjaChQYWdlci5QYWdpbmF0aW9uRGF0YS5wYWdlU2l6ZSwgUGFnZXIuUGFnaW5hdGlvbkRhdGEucGFnZUluZGV4IC0gMSk7XHJcbiAgICAgICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMucGFyZW50RWxlbWVudC5vbihcImNsaWNrXCIsIFwiLnRhYmxlLWZvb3RlciAubGFzdExpbmtcIiwgKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuY29uZmlnU3RvcmUuc2V0Rm9jdXNhYmxlRWxlbWVudChldmVudC50YXJnZXQpO1xyXG4gICAgICAgICAgICB0aGlzLmNvbmZpZ1N0b3JlLm9wdGlvbnMub25QYWdlU2VhcmNoKFBhZ2VyLlBhZ2luYXRpb25EYXRhLnBhZ2VTaXplLCBQYWdlci5QYWdpbmF0aW9uRGF0YS5ub09mUGFnZXMpO1xyXG4gICAgICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICB0aGlzLnBhcmVudEVsZW1lbnQub24oXCJjaGFuZ2VcIiwgXCIudGFibGUtZm9vdGVyIC5wYWdlU2l6ZVNlbGVjdG9yXCIsIChldmVudCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmNvbmZpZ1N0b3JlLnNldEZvY3VzYWJsZUVsZW1lbnQoZXZlbnQudGFyZ2V0KTtcclxuICAgICAgICAgICAgY29uc3QgdmFsOiBudW1iZXIgPSAralF1ZXJ5KGV2ZW50LnRhcmdldCkudmFsKCkudG9TdHJpbmcoKTtcclxuICAgICAgICAgICAgdGhpcy5jb25maWdTdG9yZS5vcHRpb25zLm9uUGFnZVNlYXJjaCh2YWwsIFBhZ2VyLlBhZ2luYXRpb25EYXRhLnBhZ2VJbmRleCk7XHJcbiAgICAgICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMucGFyZW50RWxlbWVudC5vbihcImtleXByZXNzXCIsIFwiLnRhYmxlLWZvb3RlciAucGFnZXItaW5wdXRcIiwgKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuY29uZmlnU3RvcmUuc2V0Rm9jdXNhYmxlRWxlbWVudChldmVudC50YXJnZXQpO1xyXG4gICAgICAgICAgICBjb25zdCBpcCA9IGpRdWVyeShldmVudC50YXJnZXQpO1xyXG4gICAgICAgICAgICBjb25zdCBwYWdlRGF0YSA9IFBhZ2VyLlBhZ2luYXRpb25EYXRhO1xyXG4gICAgICAgICAgICBpZiAoZXZlbnQua2V5Q29kZSA9PT0gMTMpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHZhbDogbnVtYmVyID0gK2lwLnZhbCgpLnRvU3RyaW5nKCk7XHJcbiAgICAgICAgICAgICAgICBpZiAoaXNOYU4odmFsKSB8fCB2YWwgPiBwYWdlRGF0YS5ub09mUGFnZXMgfHwgdmFsIDwgMSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlwLnZhbChwYWdlRGF0YS5wYWdlSW5kZXgpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbmZpZ1N0b3JlLm9wdGlvbnMub25QYWdlU2VhcmNoKHBhZ2VEYXRhLnBhZ2VTaXplLCB2YWwpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy90c2xpbnQtbG9hZGVyPz9yZWYtLTEhLi9zcmMvanMvZXZlbnRIYW5kbGVycy9QYWdlU2VhcmNoQ2xpY2tIYW5kbGVyLnRzIiwiaW1wb3J0IHsgQ29uZmlnU3RvcmUgfSBmcm9tIFwiLi4vY29uZmlnL0NvbmZpZ1N0b3JlXCI7XHJcbmltcG9ydCB7IEdyaWRUZW1wbGF0ZVNlcnZpY2UgfSBmcm9tIFwiLi8uLi9zZXJ2aWNlcy9HcmlkVGVtcGxhdGVTZXJ2aWNlXCI7XHJcbmltcG9ydCB7IElFdmVudEhhbmRsZXIgfSBmcm9tIFwiLi9JRXZlbnRIYW5kbGVyXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgU2Nyb2xsSGFuZGxlcjxUPiBpbXBsZW1lbnRzIElFdmVudEhhbmRsZXI8VD4ge1xyXG4gICAgcHJpdmF0ZSBwYXJlbnRFbGVtZW50OiBKUXVlcnk7XHJcbiAgICBwcml2YXRlIGdyaWRUZW1wbGF0ZVNlcnZpY2U6IEdyaWRUZW1wbGF0ZVNlcnZpY2U8VD47XHJcbiAgICBwcml2YXRlIHJlbmRlcmluZzogYm9vbGVhbiA9ICBmYWxzZTtcclxuICAgIHByaXZhdGUgY29uZmlnU3RvcmU6IENvbmZpZ1N0b3JlPFQ+O1xyXG4gICAgcHJpdmF0ZSBsZWZ0TWFyZ2luOiBudW1iZXI7XHJcbiAgICBwcml2YXRlIGN1cnJlbnRJbmRleDogbnVtYmVyO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKGNvbmZpZ1N0b3JlOiBDb25maWdTdG9yZTxUPiwgZ3JpZFRlbXBsYXRlU2VydmljZTogR3JpZFRlbXBsYXRlU2VydmljZTxUPiwgY3VycmVudEluZGV4OiBudW1iZXIpIHtcclxuICAgICAgICB0aGlzLmNvbmZpZ1N0b3JlID0gY29uZmlnU3RvcmU7XHJcbiAgICAgICAgdGhpcy5wYXJlbnRFbGVtZW50ID0galF1ZXJ5KHRoaXMuY29uZmlnU3RvcmUuT3B0aW9ucy5jb250YWluZXJFbGVtZW50KTtcclxuICAgICAgICB0aGlzLmdyaWRUZW1wbGF0ZVNlcnZpY2UgPSBncmlkVGVtcGxhdGVTZXJ2aWNlO1xyXG4gICAgICAgIHRoaXMuc2V0Q3VycmVudEluZGV4KGN1cnJlbnRJbmRleCk7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgb25SZXNpemUoKTogdm9pZCB7XHJcbiAgICAgICAgLy9cclxuICAgIH1cclxuICAgIHB1YmxpYyBzZXRDdXJyZW50SW5kZXggPSAoaW5kZXg6IG51bWJlcikgPT4ge1xyXG4gICAgICAgIHRoaXMuY3VycmVudEluZGV4ID0gaW5kZXg7XHJcbiAgICAgICAgdGhpcy5ncmlkVGVtcGxhdGVTZXJ2aWNlLkN1cnJlbnRJbmRleCA9IGluZGV4O1xyXG4gICAgfVxyXG4gICAgcHVibGljIGdldEN1cnJlbnRJbmRleCA9ICgpID0+IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5jdXJyZW50SW5kZXg7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgc2Nyb2xsVGFibGVCb2R5ID0gKCkgPT4ge1xyXG4gICAgICAgIGlmICggIXRoaXMubGVmdE1hcmdpbiApIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnBhcmVudEVsZW1lbnQuZmluZChcIi50YWJsZS1ib2R5XCIpLnNjcm9sbExlZnQoLTEgKiB0aGlzLmxlZnRNYXJnaW4pO1xyXG4gICAgfVxyXG4gICAgcHVibGljIG9uRG9jdW1lbnRDbGljayhldmVudCk6IHZvaWQge1xyXG4gICAgICAgIC8vIE5vIE9wXHJcbiAgICB9XHJcbiAgICBwdWJsaWMgUmVnaXN0ZXJEb21IYW5kbGVyID0gKCk6IHZvaWQgPT4ge1xyXG4gICAgICAgIC8vIFJlZ2lzdGVyaW5nIEpRdWVyeSBFdmVudCBIYW5kbGVyIGlmIEhlYWRlciBpcyBDbGlja2VkLlxyXG4gICAgICAgIHRoaXMucGFyZW50RWxlbWVudC5maW5kKFwiLnRhYmxlLWJvZHlcIikub24oXCJzY3JvbGxcIiwgdGhpcy5oYW5kbGVSZXNpemUpO1xyXG4gICAgfVxyXG4gICAgcHVibGljIHJlbW92ZUhhbmRsZXIgPSAoKSA9PiB7XHJcbiAgICAgICAgdGhpcy5wYXJlbnRFbGVtZW50LmZpbmQoXCIudGFibGUtYm9keVwiKS5vZmYoXCJzY3JvbGxcIiwgdGhpcy5oYW5kbGVSZXNpemUpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgaGFuZGxlUmVzaXplID0gKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgY29uc3QgdEJvZHlPYmogPSB0aGlzLnBhcmVudEVsZW1lbnQuZmluZChcIi50YWJsZS1ib2R5XCIpO1xyXG4gICAgICAgIGNvbnN0IG1hcmdpbkxlZnQgPSAtMSAqIHRCb2R5T2JqLnNjcm9sbExlZnQoKTtcclxuICAgICAgICB0aGlzLnBhcmVudEVsZW1lbnQuZmluZChcIi50YWJsZS1oZWFkZXJcIikuY3NzKFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBcIm1hcmdpbi1sZWZ0XCI6IG1hcmdpbkxlZnQsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgKTtcclxuICAgICAgICB0aGlzLmxlZnRNYXJnaW4gPSBtYXJnaW5MZWZ0O1xyXG4gICAgICAgIGNvbnN0IGFjdHVhbFRhYmxlSGVpZ2h0ID0gdEJvZHlPYmouZmluZChcIi5tYWluVGFibGVcIikuaGVpZ2h0KCk7XHJcbiAgICAgICAgY29uc3Qgc2Nyb2xsQ29udGFpbmVySGVpZ2h0ID0gdEJvZHlPYmouaGVpZ2h0KCk7XHJcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBpZiAodGhpcy5yZW5kZXJpbmcpIHtcclxuICAgICAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3Qgc2Nyb2xsVG9wID0gdEJvZHlPYmouc2Nyb2xsVG9wKCk7XHJcbiAgICAgICAgaWYgKChzY3JvbGxDb250YWluZXJIZWlnaHQgKyBzY3JvbGxUb3AgKSAtIChhY3R1YWxUYWJsZUhlaWdodCAqIDAuOCApID4gMCApIHtcclxuICAgICAgICAgICAgaWYgKCB0aGlzLmN1cnJlbnRJbmRleCA+PSB0aGlzLmdyaWRUZW1wbGF0ZVNlcnZpY2UuRGF0YUxlbmd0aCApIHtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLnJlbmRlcmluZyA9IHRydWU7XHJcbiAgICAgICAgICAgIGxldCBsYXN0SW5kZXggPSB0aGlzLmN1cnJlbnRJbmRleCArIHRoaXMuY29uZmlnU3RvcmUuT3B0aW9ucy5jaHVua1NpemU7XHJcbiAgICAgICAgICAgIGlmICggbGFzdEluZGV4ID49IHRoaXMuZ3JpZFRlbXBsYXRlU2VydmljZS5EYXRhTGVuZ3RoICkge1xyXG4gICAgICAgICAgICAgICAgbGFzdEluZGV4ID0gdGhpcy5ncmlkVGVtcGxhdGVTZXJ2aWNlLkRhdGFMZW5ndGggLSAxO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNvbnN0IGh0bWwgID0galF1ZXJ5KHRoaXMuZ3JpZFRlbXBsYXRlU2VydmljZS5nZXRUZW1wbGF0ZSh0aGlzLmN1cnJlbnRJbmRleCwgbGFzdEluZGV4KSk7XHJcbiAgICAgICAgICAgIHRCb2R5T2JqLmZpbmQoXCIubWFpblRhYmxlQm9keVwiKS5hcHBlbmQoaHRtbCk7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0Q3VycmVudEluZGV4KCBsYXN0SW5kZXggKyAxICk7XHJcbiAgICAgICAgICAgIHRoaXMucmVuZGVyaW5nID0gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgfVxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy90c2xpbnQtbG9hZGVyPz9yZWYtLTEhLi9zcmMvanMvZXZlbnRIYW5kbGVycy9TY3JvbGxIYW5kbGVyLnRzIiwiaW1wb3J0ICogYXMgSGFuZGxlYmFycyBmcm9tIFwiaGFuZGxlYmFyc1wiO1xyXG5pbXBvcnQgKiBhcyBHcmlkRGV0YWlsc1Jvd1RlbXBsYXRlIGZyb20gXCIuLi8uLi9oYnMvZ3JpZC1kZXRhaWxzLXJvdy5oYnNcIjtcclxuaW1wb3J0ICogYXMgR3JpZEZvb3RlciBmcm9tIFwiLi4vLi4vaGJzL2dyaWQtZm9vdGVyLmhic1wiO1xyXG5pbXBvcnQgKiBhcyBHcmlkTWFpblJvd1RlbXBsYXRlIGZyb20gXCIuLi8uLi9oYnMvZ3JpZC1tYWluLXJvdy5oYnNcIjtcclxuaW1wb3J0ICogYXMgTWFuYWdlQ29sdW1uVGVtcGxhdGUgZnJvbSBcIi4uLy4uL2hicy9ncmlkLW1hbmFnZS1jb2x1bW5zLmhic1wiO1xyXG5pbXBvcnQgKiBhcyBHcmlkVGVtcGxhdGUgZnJvbSBcIi4uLy4uL2hicy9ncmlkLmhic1wiO1xyXG5pbXBvcnQgeyBDb25maWdTdG9yZSB9IGZyb20gXCIuLi9jb25maWcvQ29uZmlnU3RvcmVcIjtcclxuaW1wb3J0IHsgSVBhZ2luYXRpb24gfSBmcm9tIFwiLi4vbW9kZWxzL0lQYWdpbmF0aW9uXCI7XHJcbmltcG9ydCB7IFBhZ2VyIH0gZnJvbSBcIi4uL3BhZ2luYXRpb24vUGFnZXJcIjtcclxuaW1wb3J0IHsgSUNvbHVtbiB9IGZyb20gXCIuLy4uL21vZGVscy9JQ29sdW1uXCI7XHJcbmludGVyZmFjZSBJTWFpbkNvbFJvd0FycmF5IHtcclxuICAgIGNvbHVtblZhbHVlOiBzdHJpbmc7XHJcbiAgICB0eXBlOiBzdHJpbmc7XHJcbiAgICBoaWRkZW46IGJvb2xlYW47XHJcbiAgICBhY3R1YWxWYWx1ZTogc3RyaW5nO1xyXG4gICAgY29sdW1uTmFtZTogc3RyaW5nO1xyXG4gICAgaWQ6IHN0cmluZztcclxuICAgIGZpbHRlcmFibGU6IGJvb2xlYW47XHJcbn1cclxuZXhwb3J0IGNsYXNzIEdyaWRUZW1wbGF0ZVNlcnZpY2UgPFQ+IHtcclxuICAgIHByaXZhdGUgZGF0YTogVFtdO1xyXG4gICAgcHJpdmF0ZSBzZWxlY3RlZDogVFtdID0gW107XHJcbiAgICBwcml2YXRlIGNvbmZpZ1N0b3JlOiBDb25maWdTdG9yZTxUPjtcclxuICAgIHByaXZhdGUgdGVtcGxhdGVGdW5jdGlvbkZvckdyaWQ6IGFueTtcclxuICAgIHByaXZhdGUgdGVtcGxhdGVGdW5jdGlvbkZvck1haW5Sb3c6IGFueTtcclxuICAgIHByaXZhdGUgdGVtcGxhdGVGdW5jdGlvbkZvckRldGFpbHNSb3c6IGFueTtcclxuICAgIHByaXZhdGUgdGVtcGxhdGVGdW5jdGlvbkZvckZvb3RlcjogYW55O1xyXG4gICAgcHJpdmF0ZSB0ZW1wbGF0ZUZ1bmN0aW9uRm9yTWFuYWdlQ29sOiBhbnk7XHJcbiAgICBwcml2YXRlIGN1cnJlbnRJbmRleDogbnVtYmVyO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKGNvbmZpZ1N0b3JlOiBDb25maWdTdG9yZTxUPikge1xyXG4gICAgICAgIHRoaXMuY29uZmlnU3RvcmUgPSBjb25maWdTdG9yZTtcclxuICAgICAgICB0aGlzLnRlbXBsYXRlRnVuY3Rpb25Gb3JHcmlkID0gR3JpZFRlbXBsYXRlO1xyXG4gICAgICAgIHRoaXMudGVtcGxhdGVGdW5jdGlvbkZvck1haW5Sb3cgPSBHcmlkTWFpblJvd1RlbXBsYXRlO1xyXG4gICAgICAgIHRoaXMudGVtcGxhdGVGdW5jdGlvbkZvckRldGFpbHNSb3cgPSBHcmlkRGV0YWlsc1Jvd1RlbXBsYXRlO1xyXG4gICAgICAgIHRoaXMudGVtcGxhdGVGdW5jdGlvbkZvckZvb3RlciA9IEdyaWRGb290ZXI7XHJcbiAgICAgICAgdGhpcy50ZW1wbGF0ZUZ1bmN0aW9uRm9yTWFuYWdlQ29sID0gTWFuYWdlQ29sdW1uVGVtcGxhdGU7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgaXNBbGxTZWxlY3RlZCA9ICgpID0+IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5zZWxlY3RlZC5sZW5ndGggIT09IDAgJiYgdGhpcy5zZWxlY3RlZC5sZW5ndGggPT09IHRoaXMuZGF0YS5sZW5ndGg7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgZ2V0IERhdGEoKTogVFtdIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5kYXRhO1xyXG4gICAgfVxyXG4gICAgcHVibGljIGdldCBTZWxlY3RlZCgpOiBUW10ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnNlbGVjdGVkO1xyXG4gICAgfVxyXG4gICAgcHVibGljIHNldCBDdXJyZW50SW5kZXgoaW5kZXg6IG51bWJlcikge1xyXG4gICAgICAgIHRoaXMuY3VycmVudEluZGV4ID0gaW5kZXg7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgZ2V0IERhdGFMZW5ndGgoKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5kYXRhLmxlbmd0aDtcclxuICAgIH1cclxuICAgIC8vIEZvciBGaXJzdCAgUmVuZGVyIC0gVXBkYXRlIEhlYWRlciAsIEJvZHksIFBhZ2luYXRpb25cclxuICAgIHB1YmxpYyBHZXRGaXJzdFRlbXBsYXRlID0gKGRhdGE6IFRbXSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpcnN0SW5kZXg6IG51bWJlcixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhc3RJbmRleDogbnVtYmVyKTogc3RyaW5nID0+IHtcclxuICAgICAgICB0aGlzLmRhdGEgPSBkYXRhO1xyXG4gICAgICAgIHRoaXMuc2VsZWN0ZWQgPSBbXTtcclxuICAgICAgICBjb25zdCBtYWluUm93QXJyYXkgPSB0aGlzLkdldFJvd3NIdG1sKGZpcnN0SW5kZXgsIGxhc3RJbmRleCk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMudGVtcGxhdGVGdW5jdGlvbkZvckdyaWQoe1xyXG4gICAgICAgICAgICBzaG93Q2FwdGlvbjogdGhpcy5jb25maWdTdG9yZS5PcHRpb25zLnNob3dDYXB0aW9uLFxyXG4gICAgICAgICAgICBzdW1tYXJ5OiB0aGlzLmNvbmZpZ1N0b3JlLk9wdGlvbnMuc3VtbWFyeSxcclxuICAgICAgICAgICAgcm93TGVuZ3RoOiB0aGlzLmRhdGEubGVuZ3RoLFxyXG4gICAgICAgICAgICBjb2x1bW5zOiB0aGlzLmNvbmZpZ1N0b3JlLk9wdGlvbnMuY29sdW1ucyxcclxuICAgICAgICAgICAgbWFpblJvd0FycmF5LFxyXG4gICAgICAgICAgICBwYWdpbmF0aW9uRGF0YTogUGFnZXIuUGFnaW5hdGlvbkRhdGEsXHJcbiAgICAgICAgICAgIGNhcHRpb246IHRoaXMuY29uZmlnU3RvcmUuT3B0aW9ucy5jYXB0aW9uLFxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgLy8gRm9yIFZpcnR1YWxpemF0b24gUmVuZGVyIC0gQm9keVxyXG4gICAgcHVibGljIGdldFRlbXBsYXRlID0gKGZpcnN0SW5kZXg6IG51bWJlciwgbGFzdEluZGV4OiBudW1iZXIpOiBzdHJpbmcgPT4ge1xyXG4gICAgICAgIGNvbnN0IG1haW5Sb3dBcnJheSA9IHRoaXMuR2V0Um93c0h0bWwoZmlyc3RJbmRleCwgbGFzdEluZGV4KTtcclxuICAgICAgICByZXR1cm4gdGhpcy50ZW1wbGF0ZUZ1bmN0aW9uRm9yTWFpblJvdyh7XHJcbiAgICAgICAgICAgIGNvbHVtbnM6IHRoaXMuY29uZmlnU3RvcmUuT3B0aW9ucy5jb2x1bW5zLFxyXG4gICAgICAgICAgICBtYWluUm93QXJyYXksXHJcbiAgICAgICAgICAgIGNhcHRpb246IHRoaXMuY29uZmlnU3RvcmUuT3B0aW9ucy5jYXB0aW9uLFxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgLy8gVXBkYXRlIG9ubHkgb25lIFJvd1xyXG4gICAgcHVibGljIGdldFRlbXBsYXRlRm9yT25lUm93ID0gKHJvdzogVCk6IHN0cmluZyA9PiB7XHJcbiAgICAgICAgY29uc3QgZW1wdHlTdHIgPSB0aGlzLmNvbmZpZ1N0b3JlLk9wdGlvbnMuZW1wdHlWYWx1ZTtcclxuICAgICAgICBjb25zdCBtYWluUm93Q29sQXJyYXkgPSB0aGlzLmdldE1haW5Sb3cocm93LCBlbXB0eVN0cik7XHJcbiAgICAgICAgY29uc3QgbWFpblJvd0FycmF5ID0gW3tcclxuICAgICAgICAgICAgaXNBbGxTZWxlY3RlZDogdGhpcy5pc0FsbFNlbGVjdGVkKCksXHJcbiAgICAgICAgICAgIGtleUNvbHVtbjogcm93W3RoaXMuY29uZmlnU3RvcmUuT3B0aW9ucy5rZXlDb2x1bW5dLFxyXG4gICAgICAgICAgICBtYWluUm93Q29sQXJyYXksXHJcbiAgICAgICAgICAgIGxlbmd0aDogdGhpcy5jb25maWdTdG9yZS5PcHRpb25zLmNvbHVtbnMubGVuZ3RoLFxyXG4gICAgICAgIH1dO1xyXG4gICAgICAgIHJldHVybiB0aGlzLnRlbXBsYXRlRnVuY3Rpb25Gb3JNYWluUm93KHttYWluUm93QXJyYXl9KTtcclxuICAgIH1cclxuICAgIHB1YmxpYyBHZXRNYW5hZ2VDb2x1bW5zSHRtbCA9ICgpOiBzdHJpbmcgPT4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnRlbXBsYXRlRnVuY3Rpb25Gb3JNYW5hZ2VDb2woe2NvbHVtbnM6IHRoaXMuY29uZmlnU3RvcmUuT3B0aW9ucy5jb2x1bW5zfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIEdldFJvd3NIdG1sID0gKGZpcnN0SW5kZXg6IG51bWJlciwgbGFzdEluZGV4OiBudW1iZXIpOiBhbnlbXSA9PiB7XHJcbiAgICAgICAgY29uc3QgbWFpblJvd0FycmF5OiBhbnlbXSA9IFtdO1xyXG4gICAgICAgIGNvbnN0IGVtcHR5U3RyID0gdGhpcy5jb25maWdTdG9yZS5PcHRpb25zLmVtcHR5VmFsdWU7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IGZpcnN0SW5kZXg7IGkgPD0gbGFzdEluZGV4OyBpKyspIHtcclxuICAgICAgICAgICAgY29uc3Qgcm93OiBUID0gdGhpcy5kYXRhW2ldO1xyXG4gICAgICAgICAgICBjb25zdCBtYWluUm93Q29sQXJyYXk6IElNYWluQ29sUm93QXJyYXlbXSA9IHRoaXMuZ2V0TWFpblJvdyhyb3csIGVtcHR5U3RyKTtcclxuICAgICAgICAgICAgbWFpblJvd0FycmF5LnB1c2goe1xyXG4gICAgICAgICAgICAgICAgcm93SW5kZXg6IGksXHJcbiAgICAgICAgICAgICAgICBpc0FsbFNlbGVjdGVkOiB0aGlzLmlzQWxsU2VsZWN0ZWQoKSxcclxuICAgICAgICAgICAgICAgIGtleUNvbHVtbjogcm93W3RoaXMuY29uZmlnU3RvcmUuT3B0aW9ucy5rZXlDb2x1bW5dLFxyXG4gICAgICAgICAgICAgICAgbWFpblJvd0NvbEFycmF5LFxyXG4gICAgICAgICAgICAgICAgbGVuZ3RoOiB0aGlzLmNvbmZpZ1N0b3JlLk9wdGlvbnMuY29sdW1ucy5sZW5ndGgsXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gbWFpblJvd0FycmF5O1xyXG4gICAgfVxyXG4gICAgcHVibGljIHNlbGVjdFJvd3MgPSAocm93SWQ6IHN0cmluZykgPT4ge1xyXG4gICAgICAgIGNvbnN0IGtleSA9IHRoaXMuY29uZmlnU3RvcmUuT3B0aW9ucy5rZXlDb2x1bW47XHJcbiAgICAgICAgY29uc3QgbmV3U2VsZWN0ZWQgPSBbXTtcclxuICAgICAgICBsZXQgZXhpc3RzID0gZmFsc2U7XHJcbiAgICAgICAgZm9yIChjb25zdCBzZWxlY3RlZCBvZiB0aGlzLnNlbGVjdGVkKSB7XHJcbiAgICAgICAgICAgIGlmICggcm93SWQgPT09IHNlbGVjdGVkW2tleV0gKSB7XHJcbiAgICAgICAgICAgICAgICBleGlzdHMgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCAhZXhpc3RzICkge1xyXG4gICAgICAgICAgICBuZXdTZWxlY3RlZC5wdXNoKHJvd0lkKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZm9yIChjb25zdCB0b0JlQWRkZWQgb2YgbmV3U2VsZWN0ZWQpIHtcclxuICAgICAgICAgICAgZm9yIChjb25zdCBvbmVSb3cgb2YgdGhpcy5kYXRhKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoIHRvQmVBZGRlZCA9PT0gb25lUm93W2tleV0gKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZWxlY3RlZC5wdXNoKG9uZVJvdyk7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgZGVTZWxlY3RSb3dzID0gKHJvd0lkOiBzdHJpbmcpID0+IHtcclxuICAgICAgICBjb25zdCBuZXdTZWxlY3RlZCA9IFtdO1xyXG4gICAgICAgIGNvbnN0IGtleSA9IHRoaXMuY29uZmlnU3RvcmUuT3B0aW9ucy5rZXlDb2x1bW47XHJcbiAgICAgICAgZm9yIChjb25zdCBzZWxlY3RlZCBvZiB0aGlzLnNlbGVjdGVkKSB7XHJcbiAgICAgICAgICAgIGlmICggcm93SWQgIT09IHNlbGVjdGVkW2tleV0gKSB7XHJcbiAgICAgICAgICAgICAgICBuZXdTZWxlY3RlZC5wdXNoKHNlbGVjdGVkKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnNlbGVjdGVkID0gbmV3U2VsZWN0ZWQ7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgc2VsZWN0QWxsID0gKCkgPT4ge1xyXG4gICAgICAgIHRoaXMuc2VsZWN0ZWQgPSB0aGlzLmRhdGE7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgZGVTZWxlY3RBbGwgPSAoKSA9PiB7XHJcbiAgICAgICAgdGhpcy5zZWxlY3RlZCA9IFtdO1xyXG4gICAgfVxyXG4gICAgcHVibGljIHVwZGF0ZVJvd3MgPSAocm93czogVFtdKSA9PiB7XHJcbiAgICAgICAgY29uc3Qga2V5ID0gdGhpcy5jb25maWdTdG9yZS5PcHRpb25zLmtleUNvbHVtbjtcclxuICAgICAgICBpZiAoIHJvd3MgPT09IHVuZGVmaW5lZCB8fCAhcm93cy5sZW5ndGggKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgZm9yIChjb25zdCByb3cgb2Ygcm93cykge1xyXG4gICAgICAgICAgICBmb3IgKGxldCBkYXRhUm93IG9mIHRoaXMuZGF0YSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKHJvd1trZXldID09PSBkYXRhUm93W2tleV0gKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YVJvdyA9IHJvdztcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBmb3IgKGNvbnN0IHJvdyBvZiByb3dzKSB7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGRhdGFSb3cgb2YgdGhpcy5zZWxlY3RlZCkge1xyXG4gICAgICAgICAgICAgICAgaWYgKHJvd1trZXldID09PSBkYXRhUm93W2tleV0gKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YVJvdyA9IHJvdztcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHByaXZhdGUgZ2V0TWFpblJvdyA9IChyb3c6IFQsIGVtcHR5U3RyOiBzdHJpbmcpOiBJTWFpbkNvbFJvd0FycmF5W10gPT4ge1xyXG4gICAgICAgIGNvbnN0IG1haW5Sb3dDb2xBcnJheTogYW55W10gPSBbXTtcclxuICAgICAgICBmb3IgKGNvbnN0IGNvbCBvZiB0aGlzLmNvbmZpZ1N0b3JlLk9wdGlvbnMuY29sdW1ucykge1xyXG4gICAgICAgICAgICBsZXQgY29sdW1uVmFsdWUgPSByb3dbY29sLmlkXTtcclxuICAgICAgICAgICAgaWYgKGNvbC5yZW5kZXJIeWJyaWQpIHtcclxuICAgICAgICAgICAgICAgIGNvbHVtblZhbHVlID0gdGhpcy5jb25maWdTdG9yZS5PcHRpb25zLmh5YnJpZEZ1bmN0aW9uKGNvbCwgcm93KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoZW1wdHlTdHIgIT09IHVuZGVmaW5lZCAmJiBjb2x1bW5WYWx1ZSA9PT0gZW1wdHlTdHIpIHtcclxuICAgICAgICAgICAgICAgIGNvbHVtblZhbHVlID0gXCJcIjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBtYWluUm93Q29sQXJyYXkucHVzaCh7XHJcbiAgICAgICAgICAgICAgICBjb2x1bW5WYWx1ZSxcclxuICAgICAgICAgICAgICAgIHR5cGU6IGNvbC50eXBlLFxyXG4gICAgICAgICAgICAgICAgaGlkZGVuOiBjb2wuaGlkZGVuLFxyXG4gICAgICAgICAgICAgICAgYWN0dWFsVmFsdWU6IHJvd1tjb2wuaWRdLFxyXG4gICAgICAgICAgICAgICAgY29sdW1uTmFtZTogY29sLm5hbWUsXHJcbiAgICAgICAgICAgICAgICBpZDogY29sLmlkLFxyXG4gICAgICAgICAgICAgICAgZmlsdGVyYWJsZTogY29sLmZpbHRlcmFibGUsXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gbWFpblJvd0NvbEFycmF5O1xyXG4gICAgfVxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy90c2xpbnQtbG9hZGVyPz9yZWYtLTEhLi9zcmMvanMvc2VydmljZXMvR3JpZFRlbXBsYXRlU2VydmljZS50cyIsImNvbnN0IHNlbGVjdGVkID0gKGlucHV0OiBudW1iZXIsIHZhbHVlOiBudW1iZXIpOiBzdHJpbmcgPT4ge1xyXG4gICAgcmV0dXJuIGlucHV0ID09PSB2YWx1ZSA/IFwic2VsZWN0ZWRcIiA6IFwiXCI7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBzZWxlY3RlZDtcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL3RzbGludC1sb2FkZXI/P3JlZi0tMSEuL3NyYy9oYnMvaGVscGVycy9TZWxlY3RlZC50cyIsInZhciBIYW5kbGViYXJzID0gcmVxdWlyZShcImhhbmRsZWJhcnNcIik7XG5mdW5jdGlvbiBfX2RlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgKG9iai5fX2VzTW9kdWxlID8gb2JqW1wiZGVmYXVsdFwiXSA6IG9iaik7IH1cbm1vZHVsZS5leHBvcnRzID0gKEhhbmRsZWJhcnNbXCJkZWZhdWx0XCJdIHx8IEhhbmRsZWJhcnMpLnRlbXBsYXRlKHtcIjFcIjpmdW5jdGlvbihjb250YWluZXIsZGVwdGgwLGhlbHBlcnMscGFydGlhbHMsZGF0YSkge1xuICAgIHZhciBhbGlhczE9Y29udGFpbmVyLmxhbWJkYSwgYWxpYXMyPWNvbnRhaW5lci5lc2NhcGVFeHByZXNzaW9uO1xuXG4gIHJldHVybiBcIiAgICAgICAgICAgICAgICA8dHIgZGF0YS1oZWFkZXItaWQ9XFxcIlwiXG4gICAgKyBhbGlhczIoYWxpYXMxKChkZXB0aDAgIT0gbnVsbCA/IGRlcHRoMC5uYW1lIDogZGVwdGgwKSwgZGVwdGgwKSlcbiAgICArIFwiXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDx0ZD5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWw+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVxcXCJjaGVja2JveFxcXCIgY2xhc3M9XFxcImNvbC1zZXR0aW5ncy1oaWRkZW4tY2hlY2tib3ggZ3VpIG0tci0xMFxcXCIgdmFsdWU9XFxcIlwiXG4gICAgKyBhbGlhczIoYWxpYXMxKChkZXB0aDAgIT0gbnVsbCA/IGRlcHRoMC5pZCA6IGRlcHRoMCksIGRlcHRoMCkpXG4gICAgKyBcIlxcXCIgXCJcbiAgICArIGFsaWFzMihfX2RlZmF1bHQocmVxdWlyZShcIkM6XFxcXFRlY2huaWNhbFxcXFxSZXBvXFxcXEdyaWRvb1xcXFxzcmNcXFxcaGJzXFxcXGhlbHBlcnNcXFxcQ2hlY2tlZC50c1wiKSkuY2FsbChkZXB0aDAgIT0gbnVsbCA/IGRlcHRoMCA6IChjb250YWluZXIubnVsbENvbnRleHQgfHwge30pLChkZXB0aDAgIT0gbnVsbCA/IGRlcHRoMC5oaWRkZW4gOiBkZXB0aDApLHtcIm5hbWVcIjpcIkNoZWNrZWRcIixcImhhc2hcIjp7fSxcImRhdGFcIjpkYXRhfSkpXG4gICAgKyBcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcbiAgICArIGFsaWFzMihhbGlhczEoKGRlcHRoMCAhPSBudWxsID8gZGVwdGgwLm5hbWUgOiBkZXB0aDApLCBkZXB0aDApKVxuICAgICsgXCJcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPC90ZD5cXHJcXG4gICAgICAgICAgICAgICAgPC90cj5cXHJcXG5cIjtcbn0sXCJjb21waWxlclwiOls3LFwiPj0gNC4wLjBcIl0sXCJtYWluXCI6ZnVuY3Rpb24oY29udGFpbmVyLGRlcHRoMCxoZWxwZXJzLHBhcnRpYWxzLGRhdGEpIHtcbiAgICB2YXIgc3RhY2sxO1xuXG4gIHJldHVybiBcIjxkaXYgY2xhc3M9XFxcImd1aSBvZi1oaWRkZW4gcC0xMCBtaW4tdy01MCB3LWF1dG8gZmx1aWQtaCBmbGV4IGNvbHVtbiBjb250YWluZXJcXFwiID5cXHJcXG4gICAgPGRpdiBjbGFzcz1cXFwiY29sLXNldHRpbmdzLWhlYWRlclxcXCIgc3R5bGU9XFxcIndpZHRoOiAxMDAlXFxcIj5cXHJcXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcImd1aSBtaW5pIGZsdWlkIGljb24gaW5wdXRcXFwiPlxcclxcbiAgICAgICAgICAgIDxpbnB1dCBjbGFzcz1cXFwiY29sLXNldHRpbmdzLWZpbHRlclxcXCIgdHlwZT1cXFwidGV4dFxcXCIgcGxhY2Vob2xkZXI9XFxcIlNlYXJjaCBmaWx0ZXIuLi5cXFwiPlxcclxcbiAgICAgICAgICAgIDxpIGNsYXNzPVxcXCJzZWFyY2ggaWNvblxcXCI+PC9pPlxcclxcbiAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJndWkgbS10LTEwXFxcIj5cXHJcXG4gICAgICAgICAgICA8YSBjbGFzcz1cXFwiZ3VpIGxlZnQgc2hvdy1hbGwtY29sdW1uXFxcIj5TaG93IEFsbDwvYT5cXHJcXG4gICAgICAgICAgICA8YSBjbGFzcz1cXFwiZ3VpIHJpZ2h0IGhpZGUtYWxsLWNvbHVtblxcXCI+SGlkZSBBbGw8L2E+XFxyXFxuICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcImd1aSBjbGVhclxcXCI+PC9kaXY+XFxyXFxuICAgIDwvZGl2PlxcclxcbiAgICA8ZGl2IGNsYXNzPVxcXCJndWkgY2xlYXJcXFwiPjwvZGl2PlxcclxcbiAgICA8ZGl2IGNsYXNzPVxcXCJjb2wtc2V0dGluZ3MtdGFibGUgZ3VpIGZsdWlkIGgtOTAgb2YtYXV0byBwLTUgbS10LTEwXFxcIiA+XFxyXFxuICAgICAgICA8dGFibGUgY2xhc3M9XFxcImd1aSBzbWFsbCB2ZXJ5IGJvcmRlci1sZXNzIGJhc2ljIGNvbXBhY3QgdGFibGVcXFwiPlxcclxcbiAgICAgICAgICAgIDx0Ym9keT5cXHJcXG5cIlxuICAgICsgKChzdGFjazEgPSBoZWxwZXJzLmVhY2guY2FsbChkZXB0aDAgIT0gbnVsbCA/IGRlcHRoMCA6IChjb250YWluZXIubnVsbENvbnRleHQgfHwge30pLChkZXB0aDAgIT0gbnVsbCA/IGRlcHRoMC5jb2x1bW5zIDogZGVwdGgwKSx7XCJuYW1lXCI6XCJlYWNoXCIsXCJoYXNoXCI6e30sXCJmblwiOmNvbnRhaW5lci5wcm9ncmFtKDEsIGRhdGEsIDApLFwiaW52ZXJzZVwiOmNvbnRhaW5lci5ub29wLFwiZGF0YVwiOmRhdGF9KSkgIT0gbnVsbCA/IHN0YWNrMSA6IFwiXCIpXG4gICAgKyBcIiAgICAgICAgICAgIDwvdGJvZHk+XFxyXFxuICAgICAgICA8L3RhYmxlPlxcclxcbiAgICA8L2Rpdj5cXHJcXG48L2Rpdj5cIjtcbn0sXCJ1c2VEYXRhXCI6dHJ1ZX0pO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2hicy9ncmlkLW1hbmFnZS1jb2x1bW5zLmhic1xuLy8gbW9kdWxlIGlkID0gMjRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEiLCJjb25zdCBjaGVja2VkID0gKGJvb2w6IGJvb2xlYW4pOiBzdHJpbmcgPT4ge1xyXG4gICAgcmV0dXJuICFib29sID8gXCJjaGVja2VkXCIgOiBcIlwiO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2hlY2tlZDtcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL3RzbGludC1sb2FkZXI/P3JlZi0tMSEuL3NyYy9oYnMvaGVscGVycy9DaGVja2VkLnRzIiwidmFyIEhhbmRsZWJhcnMgPSByZXF1aXJlKFwiaGFuZGxlYmFyc1wiKTtcbmZ1bmN0aW9uIF9fZGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiAob2JqLl9fZXNNb2R1bGUgPyBvYmpbXCJkZWZhdWx0XCJdIDogb2JqKTsgfVxubW9kdWxlLmV4cG9ydHMgPSAoSGFuZGxlYmFyc1tcImRlZmF1bHRcIl0gfHwgSGFuZGxlYmFycykudGVtcGxhdGUoe1wiMVwiOmZ1bmN0aW9uKGNvbnRhaW5lcixkZXB0aDAsaGVscGVycyxwYXJ0aWFscyxkYXRhKSB7XG4gICAgcmV0dXJuIFwiICAgICAgICAgICAgICAgIDxjYXB0aW9uIGNsYXNzPVxcXCJndWkgZ3VpLXN1YmhlYWRpbmctMiBtLTAgcC0wIHRleHQtbGVmdFxcXCI+XCJcbiAgICArIGNvbnRhaW5lci5lc2NhcGVFeHByZXNzaW9uKGNvbnRhaW5lci5sYW1iZGEoKGRlcHRoMCAhPSBudWxsID8gZGVwdGgwLmNhcHRpb24gOiBkZXB0aDApLCBkZXB0aDApKVxuICAgICsgXCI8L2NhcHRpb24+XFxyXFxuXCI7XG59LFwiM1wiOmZ1bmN0aW9uKGNvbnRhaW5lcixkZXB0aDAsaGVscGVycyxwYXJ0aWFscyxkYXRhKSB7XG4gICAgdmFyIHN0YWNrMTtcblxuICByZXR1cm4gXCIgICAgICAgICAgICAgICAgICAgIFwiXG4gICAgKyAoKHN0YWNrMSA9IF9fZGVmYXVsdChyZXF1aXJlKFwiQzpcXFxcVGVjaG5pY2FsXFxcXFJlcG9cXFxcR3JpZG9vXFxcXHNyY1xcXFxoYnNcXFxcaGVscGVyc1xcXFxDb2x1bW4udHNcIikpLmNhbGwoZGVwdGgwICE9IG51bGwgPyBkZXB0aDAgOiAoY29udGFpbmVyLm51bGxDb250ZXh0IHx8IHt9KSxkZXB0aDAse1wibmFtZVwiOlwiQ29sdW1uXCIsXCJoYXNoXCI6e30sXCJkYXRhXCI6ZGF0YX0pKSAhPSBudWxsID8gc3RhY2sxIDogXCJcIilcbiAgICArIFwiXFxyXFxuXCI7XG59LFwiNVwiOmZ1bmN0aW9uKGNvbnRhaW5lcixkZXB0aDAsaGVscGVycyxwYXJ0aWFscyxkYXRhKSB7XG4gICAgdmFyIHN0YWNrMTtcblxuICByZXR1cm4gKChzdGFjazEgPSBoZWxwZXJzW1wiaWZcIl0uY2FsbChkZXB0aDAgIT0gbnVsbCA/IGRlcHRoMCA6IChjb250YWluZXIubnVsbENvbnRleHQgfHwge30pLChkZXB0aDAgIT0gbnVsbCA/IGRlcHRoMC5zb3J0YWJsZSA6IGRlcHRoMCkse1wibmFtZVwiOlwiaWZcIixcImhhc2hcIjp7fSxcImZuXCI6Y29udGFpbmVyLnByb2dyYW0oNiwgZGF0YSwgMCksXCJpbnZlcnNlXCI6Y29udGFpbmVyLnByb2dyYW0oOCwgZGF0YSwgMCksXCJkYXRhXCI6ZGF0YX0pKSAhPSBudWxsID8gc3RhY2sxIDogXCJcIik7XG59LFwiNlwiOmZ1bmN0aW9uKGNvbnRhaW5lcixkZXB0aDAsaGVscGVycyxwYXJ0aWFscyxkYXRhKSB7XG4gICAgdmFyIHN0YWNrMTtcblxuICByZXR1cm4gXCIgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcbiAgICArICgoc3RhY2sxID0gX19kZWZhdWx0KHJlcXVpcmUoXCJDOlxcXFxUZWNobmljYWxcXFxcUmVwb1xcXFxHcmlkb29cXFxcc3JjXFxcXGhic1xcXFxoZWxwZXJzXFxcXE9yZGVyZWQudHNcIikpLmNhbGwoZGVwdGgwICE9IG51bGwgPyBkZXB0aDAgOiAoY29udGFpbmVyLm51bGxDb250ZXh0IHx8IHt9KSxkZXB0aDAsKGRhdGEgJiYgZGF0YS5pbmRleCkse1wibmFtZVwiOlwiT3JkZXJlZFwiLFwiaGFzaFwiOnt9LFwiZGF0YVwiOmRhdGF9KSkgIT0gbnVsbCA/IHN0YWNrMSA6IFwiXCIpXG4gICAgKyBcIlxcclxcblwiO1xufSxcIjhcIjpmdW5jdGlvbihjb250YWluZXIsZGVwdGgwLGhlbHBlcnMscGFydGlhbHMsZGF0YSkge1xuICAgIHZhciBzdGFjazEsIGFsaWFzMT1kZXB0aDAgIT0gbnVsbCA/IGRlcHRoMCA6IChjb250YWluZXIubnVsbENvbnRleHQgfHwge30pLCBhbGlhczI9Y29udGFpbmVyLmVzY2FwZUV4cHJlc3Npb24sIGFsaWFzMz1jb250YWluZXIubGFtYmRhO1xuXG4gIHJldHVybiBcIiAgICAgICAgICAgICAgICAgICAgICAgIDx0aCByb2xlPVxcXCJjb2x1bW5oZWFkZXJcXFwiXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFyaWEtY29saW5kZXg9XFxcIlwiXG4gICAgKyBhbGlhczIoX19kZWZhdWx0KHJlcXVpcmUoXCJDOlxcXFxUZWNobmljYWxcXFxcUmVwb1xcXFxHcmlkb29cXFxcc3JjXFxcXGhic1xcXFxoZWxwZXJzXFxcXEFkZC50c1wiKSkuY2FsbChhbGlhczEsKGRhdGEgJiYgZGF0YS5pbmRleCksMyx7XCJuYW1lXCI6XCJBZGRcIixcImhhc2hcIjp7fSxcImRhdGFcIjpkYXRhfSkpXG4gICAgKyBcIlxcXCJcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJpYS1zb3J0PVxcXCJub25lXFxcIiBcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU9XFxcIlwiXG4gICAgKyBhbGlhczIoYWxpYXMzKChkZXB0aDAgIT0gbnVsbCA/IGRlcHRoMC5uYW1lIDogZGVwdGgwKSwgZGVwdGgwKSlcbiAgICArIFwiXFxcIlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YWJpbmRleD1cXFwiLTFcXFwiXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVxcXCJndWkgY3Vyc29yLWRlZmF1bHQgZGlzYWJsZWRcXFwiIFxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxuICAgICsgKChzdGFjazEgPSBfX2RlZmF1bHQocmVxdWlyZShcIkM6XFxcXFRlY2huaWNhbFxcXFxSZXBvXFxcXEdyaWRvb1xcXFxzcmNcXFxcaGJzXFxcXGhlbHBlcnNcXFxcQXJpYUhpZGRlbi50c1wiKSkuY2FsbChhbGlhczEsKGRlcHRoMCAhPSBudWxsID8gZGVwdGgwLmhpZGRlbiA6IGRlcHRoMCkse1wibmFtZVwiOlwiQXJpYUhpZGRlblwiLFwiaGFzaFwiOnt9LFwiZGF0YVwiOmRhdGF9KSkgIT0gbnVsbCA/IHN0YWNrMSA6IFwiXCIpXG4gICAgKyBcIlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cXFwiaGVhZGVyLVwiXG4gICAgKyBhbGlhczIoYWxpYXMzKChkZXB0aDAgIT0gbnVsbCA/IGRlcHRoMC5pZCA6IGRlcHRoMCksIGRlcHRoMCkpXG4gICAgKyBcIlxcXCIgXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtaGVhZGVyLWlkPVxcXCJcIlxuICAgICsgYWxpYXMyKGFsaWFzMygoZGVwdGgwICE9IG51bGwgPyBkZXB0aDAuaWQgOiBkZXB0aDApLCBkZXB0aDApKVxuICAgICsgXCJcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cXFwiZ3VpIHN1YiBoZWFkZXJcXFwiPlwiXG4gICAgKyBhbGlhczIoYWxpYXMzKChkZXB0aDAgIT0gbnVsbCA/IGRlcHRoMC5uYW1lIDogZGVwdGgwKSwgZGVwdGgwKSlcbiAgICArIFwiPC9zcGFuPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdGg+XFxyXFxuXCI7XG59LFwiY29tcGlsZXJcIjpbNyxcIj49IDQuMC4wXCJdLFwibWFpblwiOmZ1bmN0aW9uKGNvbnRhaW5lcixkZXB0aDAsaGVscGVycyxwYXJ0aWFscyxkYXRhKSB7XG4gICAgdmFyIHN0YWNrMSwgYWxpYXMxPWNvbnRhaW5lci5sYW1iZGEsIGFsaWFzMj1jb250YWluZXIuZXNjYXBlRXhwcmVzc2lvbiwgYWxpYXMzPWRlcHRoMCAhPSBudWxsID8gZGVwdGgwIDogKGNvbnRhaW5lci5udWxsQ29udGV4dCB8fCB7fSk7XG5cbiAgcmV0dXJuIFwiPGRpdiBjbGFzcz1cXFwiaW5uZXItY29udGFpbmVyIGd1aSBmbHVpZCBjb250YWluZXJcXFwiIFxcclxcbiAgICBhcmlhLXJlYWRvbmx5PVxcXCJ0cnVlXFxcIiBcXHJcXG4gICAgYXJpYS1yb3djb3VudD1cXFwiXCJcbiAgICArIGFsaWFzMihhbGlhczEoKGRlcHRoMCAhPSBudWxsID8gZGVwdGgwLnJvd0xlbmd0aCA6IGRlcHRoMCksIGRlcHRoMCkpXG4gICAgKyBcIlxcXCIgXFxyXFxuICAgIGFyaWEtY29sY291bnQ9XFxcIlwiXG4gICAgKyBhbGlhczIoX19kZWZhdWx0KHJlcXVpcmUoXCJDOlxcXFxUZWNobmljYWxcXFxcUmVwb1xcXFxHcmlkb29cXFxcc3JjXFxcXGhic1xcXFxoZWxwZXJzXFxcXEFkZC50c1wiKSkuY2FsbChhbGlhczMsKChzdGFjazEgPSAoZGVwdGgwICE9IG51bGwgPyBkZXB0aDAuY29sdW1ucyA6IGRlcHRoMCkpICE9IG51bGwgPyBzdGFjazEubGVuZ3RoIDogc3RhY2sxKSwyLHtcIm5hbWVcIjpcIkFkZFwiLFwiaGFzaFwiOnt9LFwiZGF0YVwiOmRhdGF9KSlcbiAgICArIFwiXFxcIlxcclxcbiAgICBhcmlhLWxhYmVsPVxcXCJcIlxuICAgICsgYWxpYXMyKGFsaWFzMSgoZGVwdGgwICE9IG51bGwgPyBkZXB0aDAuY2FwdGlvbiA6IGRlcHRoMCksIGRlcHRoMCkpXG4gICAgKyBcIlxcXCJcXHJcXG4gICAgc3VtbWFyeT1cXFwiXCJcbiAgICArIGFsaWFzMihhbGlhczEoKGRlcHRoMCAhPSBudWxsID8gZGVwdGgwLnN1bW1hcnkgOiBkZXB0aDApLCBkZXB0aDApKVxuICAgICsgXCJcXFwiXFxyXFxuICAgIGFyaWEtbGl2ZT1cXFwicG9saXRlXFxcIlxcclxcbiAgICByb2xlPVxcXCJncmlkXFxcIiBcXHJcXG4gICAgc3R5bGU9XFxcInBhZGRpbmc6MCU7XFxcIj5cXHJcXG4gICAgPGRpdiBjbGFzcz1cXFwidGFibGUtaGVhZGVyXFxcIj5cXHJcXG4gICAgICAgIDx0YWJsZSBpZD1cXFwiaGVhZGVydGFibGVcXFwiIHJvbGU9XFxcInByZXNlbnRhdGlvblxcXCIgY2xhc3M9XFxcImd1aSBiYXNpYyBsYXJnZSBjb21wYWN0IHNvcnRhYmxlIGZpeGVkIHNpbmdsZSBsaW5lIHRhYmxlXFxcIj5cXHJcXG5cIlxuICAgICsgKChzdGFjazEgPSBoZWxwZXJzW1wiaWZcIl0uY2FsbChhbGlhczMsKGRlcHRoMCAhPSBudWxsID8gZGVwdGgwLnNob3dDYXB0aW9uIDogZGVwdGgwKSx7XCJuYW1lXCI6XCJpZlwiLFwiaGFzaFwiOnt9LFwiZm5cIjpjb250YWluZXIucHJvZ3JhbSgxLCBkYXRhLCAwKSxcImludmVyc2VcIjpjb250YWluZXIubm9vcCxcImRhdGFcIjpkYXRhfSkpICE9IG51bGwgPyBzdGFjazEgOiBcIlwiKVxuICAgICsgXCIgICAgICAgICAgICA8Y29sZ3JvdXAgY2xhc3M9XFxcImhlYWRlckNvbEdyb3VwXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgPGNvbCBzdHlsZT1cXFwid2lkdGg6NDBweDtcXFwiIC8+XFxyXFxuICAgICAgICAgICAgICAgIDxjb2wgc3R5bGU9XFxcIndpZHRoOjQwcHg7XFxcIiAvPlxcclxcblwiXG4gICAgKyAoKHN0YWNrMSA9IGhlbHBlcnMuZWFjaC5jYWxsKGFsaWFzMywoZGVwdGgwICE9IG51bGwgPyBkZXB0aDAuY29sdW1ucyA6IGRlcHRoMCkse1wibmFtZVwiOlwiZWFjaFwiLFwiaGFzaFwiOnt9LFwiZm5cIjpjb250YWluZXIucHJvZ3JhbSgzLCBkYXRhLCAwKSxcImludmVyc2VcIjpjb250YWluZXIubm9vcCxcImRhdGFcIjpkYXRhfSkpICE9IG51bGwgPyBzdGFjazEgOiBcIlwiKVxuICAgICsgXCIgICAgICAgICAgICA8L2NvbGdyb3VwPlxcclxcbiAgICAgICAgICAgIDx0aGVhZCByb2xlPVxcXCJyb3dncm91cFxcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDx0ciByb2xlPVxcXCJyb3dcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPHRoIHJvbGU9XFxcImNvbHVtbmhlYWRlclxcXCIgYXJpYS1jb2xpbmRleD1cXFwiMVxcXCI+PC90aD5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDx0aCByb2xlPVxcXCJjb2x1bW5oZWFkZXJcXFwiIFxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIGFyaWEtbGFiZWw9XFxcIlNlbGVjdCBhbGwgcm93cyBvZiBcIlxuICAgICsgYWxpYXMyKGFsaWFzMSgoZGVwdGgwICE9IG51bGwgPyBkZXB0aDAuY2FwdGlvbiA6IGRlcHRoMCksIGRlcHRoMCkpXG4gICAgKyBcIiBDaGVja2JveFxcXCIgXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgYXJpYS1jb2xpbmRleD1cXFwiMlxcXCJcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICBpZD1cXFwic2VsZWN0LWFsbC1jaGVja2JveFxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0ICB0eXBlPVxcXCJjaGVja2JveFxcXCIgXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcmlhLWxhYmVsbGVkYnk9XFxcInNlbGVjdC1hbGwtY2hlY2tib3hcXFwiXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cXFwic2VsZWN0LWFsbC1jaGVja2JveCBjdXJzb3ItcG9pbnRlclxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8L3RoPlxcclxcblwiXG4gICAgKyAoKHN0YWNrMSA9IGhlbHBlcnMuZWFjaC5jYWxsKGFsaWFzMywoZGVwdGgwICE9IG51bGwgPyBkZXB0aDAuY29sdW1ucyA6IGRlcHRoMCkse1wibmFtZVwiOlwiZWFjaFwiLFwiaGFzaFwiOnt9LFwiZm5cIjpjb250YWluZXIucHJvZ3JhbSg1LCBkYXRhLCAwKSxcImludmVyc2VcIjpjb250YWluZXIubm9vcCxcImRhdGFcIjpkYXRhfSkpICE9IG51bGwgPyBzdGFjazEgOiBcIlwiKVxuICAgICsgXCIgICAgICAgICAgICAgICAgPC90cj5cXHJcXG4gICAgICAgICAgICA8L3RoZWFkPlxcclxcbiAgICAgICAgPC90YWJsZT5cXHJcXG4gICAgPC9kaXY+XFxyXFxuICAgIDxkaXYgY2xhc3M9XFxcInRhYmxlLWJvZHlcXFwiPlxcclxcbiAgICAgICAgPHRhYmxlIHJvbGU9XFxcInByZXNlbnRhdGlvblxcXCIgY2xhc3M9XFxcImd1aSBiYXNpYyBsYXJnZSBjb21wYWN0IGZpeGVkIHNlbGVjdGFibGUgc2luZ2xlIGxpbmUgdGFibGUgbWFpblRhYmxlXFxcIj5cXHJcXG4gICAgICAgICAgICA8Y29sZ3JvdXAgY2xhc3M9XFxcImJvZHlDb2xHcm91cFxcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDxjb2wgc3R5bGU9XFxcIndpZHRoOjQwcHg7XFxcIiAvPiBcXHJcXG4gICAgICAgICAgICAgICAgPGNvbCBzdHlsZT1cXFwid2lkdGg6NDBweDtcXFwiIC8+XFxyXFxuXCJcbiAgICArICgoc3RhY2sxID0gaGVscGVycy5lYWNoLmNhbGwoYWxpYXMzLChkZXB0aDAgIT0gbnVsbCA/IGRlcHRoMC5jb2x1bW5zIDogZGVwdGgwKSx7XCJuYW1lXCI6XCJlYWNoXCIsXCJoYXNoXCI6e30sXCJmblwiOmNvbnRhaW5lci5wcm9ncmFtKDMsIGRhdGEsIDApLFwiaW52ZXJzZVwiOmNvbnRhaW5lci5ub29wLFwiZGF0YVwiOmRhdGF9KSkgIT0gbnVsbCA/IHN0YWNrMSA6IFwiXCIpXG4gICAgKyBcIiAgICAgICAgICAgIDwvY29sZ3JvdXA+XFxyXFxuICAgICAgICAgICAgPHRib2R5IGNsYXNzPVxcXCJtYWluVGFibGVCb2R5XFxcIiByb2xlPVxcXCJyb3dncm91cFxcXCI+XFxyXFxuXCJcbiAgICArICgoc3RhY2sxID0gY29udGFpbmVyLmludm9rZVBhcnRpYWwocmVxdWlyZShcIkM6XFxcXFRlY2huaWNhbFxcXFxSZXBvXFxcXEdyaWRvb1xcXFxzcmNcXFxcaGJzXFxcXGdyaWQtbWFpbi1yb3cuaGJzXCIpLGRlcHRoMCx7XCJuYW1lXCI6XCJncmlkLW1haW4tcm93XCIsXCJkYXRhXCI6ZGF0YSxcImluZGVudFwiOlwiICAgICAgICAgICAgICAgIFwiLFwiaGVscGVyc1wiOmhlbHBlcnMsXCJwYXJ0aWFsc1wiOnBhcnRpYWxzLFwiZGVjb3JhdG9yc1wiOmNvbnRhaW5lci5kZWNvcmF0b3JzfSkpICE9IG51bGwgPyBzdGFjazEgOiBcIlwiKVxuICAgICsgXCIgICAgICAgICAgICA8L3Rib2R5PlxcclxcbiAgICAgICAgPC90YWJsZT5cXHJcXG4gICAgPC9kaXY+XFxyXFxuICAgIDxkaXYgY2xhc3M9XFxcInRhYmxlLWZvb3RlciBndWkgaC1hdXRvIGZsdWlkLXcgZmxleCBqYy1zYiBwLTUgbS0wXFxcIj5cXHJcXG5cIlxuICAgICsgKChzdGFjazEgPSBjb250YWluZXIuaW52b2tlUGFydGlhbChyZXF1aXJlKFwiQzpcXFxcVGVjaG5pY2FsXFxcXFJlcG9cXFxcR3JpZG9vXFxcXHNyY1xcXFxoYnNcXFxcZ3JpZC1mb290ZXIuaGJzXCIpLGRlcHRoMCx7XCJuYW1lXCI6XCJncmlkLWZvb3RlclwiLFwiZGF0YVwiOmRhdGEsXCJpbmRlbnRcIjpcIiAgICAgICAgICAgXCIsXCJoZWxwZXJzXCI6aGVscGVycyxcInBhcnRpYWxzXCI6cGFydGlhbHMsXCJkZWNvcmF0b3JzXCI6Y29udGFpbmVyLmRlY29yYXRvcnN9KSkgIT0gbnVsbCA/IHN0YWNrMSA6IFwiXCIpXG4gICAgKyBcIiAgICA8L2Rpdj5cXHJcXG48L2Rpdj5cIjtcbn0sXCJ1c2VQYXJ0aWFsXCI6dHJ1ZSxcInVzZURhdGFcIjp0cnVlfSk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvaGJzL2dyaWQuaGJzXG4vLyBtb2R1bGUgaWQgPSAyNlxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSIsImNvbnN0IENvbHVtbiA9IChjb2wpOiBzdHJpbmcgPT4ge1xyXG4gICAgY29uc3QgY2FsY1dpZHRoOiBudW1iZXIgPSBjb2wuaGlkZGVuID8gMCA6IGNvbC53aWR0aDtcclxuICAgIGNvbnN0IGRhdGFBdHRySWQgPSAnZGF0YS1oZWFkZXItaWQ9XCInICsgY29sLmlkICsgJ1wiJztcclxuICAgIHJldHVybiAnPGNvbCBzdHlsZT1cIndpZHRoIDogJyArIGNhbGNXaWR0aCArICdweDtcIicgKyBkYXRhQXR0cklkICsgXCIgLz5cIjtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IENvbHVtbjtcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL3RzbGludC1sb2FkZXI/P3JlZi0tMSEuL3NyYy9oYnMvaGVscGVycy9Db2x1bW4udHMiLCJpbXBvcnQgeyBHcmlkT3JkZXJEaXJlY3Rpb24gfSBmcm9tIFwiLi4vLi4vanMvbW9kZWxzL0dyaWRPcmRlckRpcmVjdGlvblwiO1xyXG5pbXBvcnQgeyBJQ29sdW1uIH0gZnJvbSBcIi4uLy4uL2pzL21vZGVscy9JQ29sdW1uXCI7XHJcblxyXG5jb25zdCBvcmRlcmVkID0gKGNvbHVtbjogSUNvbHVtbiwgaW5kZXg6IHN0cmluZyk6IHN0cmluZyA9PiB7XHJcbiAgICBjb25zdCBwYXJzZWRJbnQgPSBwYXJzZUludChpbmRleCwgMTApICsgMztcclxuICAgIGxldCBhcmlhU29ydFN0cjtcclxuICAgIGxldCBhcmlhTGFiZWxTdHI7XHJcbiAgICBsZXQgaGVhZGVySWNvbk1rO1xyXG4gICAgY29uc3QgYXJpYUhpZGRlblN0ciA9IGNvbHVtbi5oaWRkZW4gPyBcIiBhcmlhLWhpZGRlbj1cXFwidHJ1ZVxcXCJcIiA6IFwiIGFyaWEtaGlkZGVuPVxcXCJmYWxzZVxcXCJcIjtcclxuICAgIGNvbnN0IHRhYkluZGV4ID0gY29sdW1uLnNvcnRhYmxlICYmICFjb2x1bW4uaGlkZGVuID8gMCA6IC0xO1xyXG4gICAgaWYgKGNvbHVtbi5vcmRlckJ5ID09PSBHcmlkT3JkZXJEaXJlY3Rpb24uQXNjKSB7XHJcbiAgICAgICAgaGVhZGVySWNvbk1rID0gXCIgPGkgY2xhc3M9XFxcImd1aSBndWktaWNvbiBndWktaWNvbi1hcnJvdy11cFxcXCIgYXJpYS1oaWRkZW49XFxcImZhbHNlXFxcIiA+PC9pPiBcIiArXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiPGkgY2xhc3M9XFxcImd1aSBndWktaWNvbiBndWktaWNvbi1hcnJvdy1kb3duIGd1aS1oaWRkZW5cXFwiIGFyaWEtaGlkZGVuPVxcXCJ0cnVlXFxcIiA+PC9pPlwiO1xyXG4gICAgICAgIGFyaWFTb3J0U3RyID0gXCJhcmlhLXNvcnQ9XFxcImFzY2VuZGluZ1xcXCJcIjtcclxuICAgICAgICBhcmlhTGFiZWxTdHIgPSBjb2x1bW4ubmFtZSArIFwiIHNvcnRlZCBhc2NlbmRpbmdcIjtcclxuICAgIH0gZWxzZSBpZiAoY29sdW1uLm9yZGVyQnkgPT09IEdyaWRPcmRlckRpcmVjdGlvbi5EZXNjKSB7XHJcbiAgICAgICAgaGVhZGVySWNvbk1rID0gXCI8aSBjbGFzcz1cXFwiZ3VpIGd1aS1pY29uIGd1aS1pY29uLWFycm93LXVwIGd1aS1oaWRkZW5cXFwiIGFyaWEtaGlkZGVuPVxcXCJ0cnVlXFxcIiA+PC9pPiBcIiArXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiPGkgY2xhc3M9XFxcImd1aSBndWktaWNvbiBndWktaWNvbi1hcnJvdy1kb3duXFxcIiBhcmlhLWhpZGRlbj1cXFwiZmFsc2VcXFwiID48L2k+XCI7XHJcbiAgICAgICAgYXJpYVNvcnRTdHIgPSBcImFyaWEtc29ydD1cXFwiZGVzY2VuZGluZ1xcXCJcIjtcclxuICAgICAgICBhcmlhTGFiZWxTdHIgPSBjb2x1bW4ubmFtZSArIFwiIHNvcnRlZCBkZXNjZW5kaW5nXCI7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIGhlYWRlckljb25NayA9IFwiPGkgY2xhc3M9XFxcImd1aSBndWktaWNvbiBndWktaWNvbi1hcnJvdy11cCBndWktaGlkZGVuXFxcIiBhcmlhLWhpZGRlbj1cXFwidHJ1ZVxcXCIgPjwvaT4gXCIgK1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBcIjxpIGNsYXNzPVxcXCJndWkgZ3VpLWljb24gZ3VpLWljb24tYXJyb3ctZG93biBndWktaGlkZGVuXFxcIiBhcmlhLWhpZGRlbj1cXFwidHJ1ZVxcXCIgPjwvaT5cIjtcclxuICAgICAgICBhcmlhU29ydFN0ciA9IFwiYXJpYS1zb3J0PVxcXCJub25lXFxcIlwiO1xyXG4gICAgICAgIGFyaWFMYWJlbFN0ciA9IGNvbHVtbi5uYW1lICsgXCIgUHJlc3Mgc3BhY2Ugb3IgZW50ZXIgdG8gc29ydCBpbiBhc2NlbmRpbmcgb3JkZXIgYnV0dG9uLlwiO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIFwiPHRoIHJvbGU9XFxcImNvbHVtbmhlYWRlclxcXCIgYXJpYS1jb2xpbmRleD1cXFwiXCIgKyBwYXJzZWRJbnRcclxuICAgICAgICAgICsgXCJcXFwiIHRhYmluZGV4PVxcXCJcIiArIHRhYkluZGV4ICsgXCJcXFwiIGNsYXNzPVxcXCJndWkgY3Vyc29yLXBvaW50ZXJcXFwiIGlkPVxcXCJoZWFkZXItXCJcclxuICAgICAgICAgICsgY29sdW1uLmlkICArIFwiXFxcIlwiXHJcbiAgICAgICAgICArIFwiIGRhdGEtaGVhZGVyLWlkPVxcXCJcIiArIGNvbHVtbi5pZCArIFwiXFxcIiBcIlxyXG4gICAgICAgICAgKyBhcmlhU29ydFN0clxyXG4gICAgICAgICAgKyBhcmlhSGlkZGVuU3RyXHJcbiAgICAgICAgICArIFwiIGFyaWEtbGFiZWw9XFxcIlwiICsgYXJpYUxhYmVsU3RyICsgXCJcXFwiIFwiXHJcbiAgICAgICAgICArIFwiIHRpdGxlPVxcXCJcIiArIGNvbHVtbi5uYW1lICsgXCJcXFwiIFwiXHJcbiAgICAgICAgICArIFwiICA+XCJcclxuICAgICAgICAgICsgXCIgPHNwYW4gY2xhc3M9XFxcImd1aSBzdWIgaGVhZGVyIG0tci01XFxcIj5cIiArIGNvbHVtbi5uYW1lICsgXCI8L3NwYW4+XCJcclxuICAgICAgICAgICsgaGVhZGVySWNvbk1rXHJcbiAgICAgICAgICArIFwiIDwvdGg+XCI7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBvcmRlcmVkO1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvdHNsaW50LWxvYWRlcj8/cmVmLS0xIS4vc3JjL2hicy9oZWxwZXJzL09yZGVyZWQudHMiLCJjb25zdCBhcmlhSGlkZGVuID0gKGJvb2w6IGJvb2xlYW4pOiBzdHJpbmcgPT4ge1xyXG4gICAgcmV0dXJuIGJvb2wgPyBcImFyaWEtaGlkZGVuPVxcXCJ0cnVlXFxcIlwiIDogXCJhcmlhLWhpZGRlbj1cXFwiZmFsc2VcXFwiXCI7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBhcmlhSGlkZGVuO1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvdHNsaW50LWxvYWRlcj8/cmVmLS0xIS4vc3JjL2hicy9oZWxwZXJzL0FyaWFIaWRkZW4udHMiXSwic291cmNlUm9vdCI6IiJ9