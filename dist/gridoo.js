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
                var pageData = Pager_1.Pager.paginationData;
                _this.internalRender(data, pageData);
            }, 1);
        };
        this.reRender = function () {
            setTimeout(function () {
                var pageData = Pager_1.Pager.paginationData;
                _this.internalRender(_this.gridTemplateService.Data, pageData);
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
        // public bindManageColums = (manageColContainer?: HTMLElement, force?: boolean): void => {
        //     if (this.manageColHandler !== undefined && !force ) {
        //         return;
        //     }
        //     const html = this.gridTemplateService.GetManageColumnsHtml();
        //     const element = jQuery(manageColContainer
        //                     || this.configStore.Options.manageColSettingsContainer
        //                     || this.configStore.Options.containerElement);
        //     this.toggleHandler = new ToggleColumnHandler(this.configStore,
        //                                                  jQuery(this.configStore.Options.containerElement));
        //     this.configStore.options.manageColSettingsContainer = element[0];
        //     this.manageColHandler = new ColSettingsHandler<T>(jQuery(element), this.configStore, this.toggleHandler);
        //     element.find(".col-settings-container").html(html);
        //     this.manageColHandler.RegisterDomHandler();
        //     jQuery(window).resize(this.documentResizeHandlerForCs);
        //     jQuery(document).click(this.documentClickHandlerForCs);
        // }
        // public applyColumnConfig = (columns: IColumn[]) => {
        //     this.toggleHandler.applyColumnConfig(columns);
        //     const html = this.gridTemplateService.GetManageColumnsHtml();
        //     const element = jQuery(this.configStore.Options.manageColSettingsContainer
        //                           || this.configStore.Options.containerElement);
        //     element.find(".col-settings-container").html(html);
        // }
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
            // const manageContainerElement = jQuery(this.configStore.Options.manageColSettingsContainer);
            // if ( manageContainerElement !== undefined ) {
            //     manageContainerElement.off();
            // }
            $(window).off("resize", _this.documentResizeHandler);
            $(document).off("click", _this.documentClickHandler);
            $(window).off("resize", _this.documentResizeHandlerForCs);
            $(document).off("click", _this.documentClickHandlerForCs);
            if (_this.scrollHandler !== undefined) {
                // this.scrollHandler.unWatchWidth();
            }
        };
        this.internalRender = function (data, paginationInput) {
            var firstIndex = 0;
            var lastIndex = _this.configStore.Options.chunkSize + _this.getInitialRowCount();
            lastIndex = lastIndex >= data.length ? data.length - 1 : lastIndex;
            var gridContent = _this.gridTemplateService.GetFirstTemplate(data, firstIndex, lastIndex);
            _this.configStore.Options.containerElement.innerHTML = gridContent;
            if (_this.scrollHandler !== undefined && _this.scrollHandler !== null) {
                _this.scrollHandler.removeHandler();
                _this.scrollHandler.resetParentOffset();
                _this.scrollHandler.setCurrentIndex(lastIndex + 1);
            }
            else {
                _this.scrollHandler = new ScrollHandler_1.ScrollHandler(_this.configStore, _this.gridTemplateService, lastIndex + 1);
                // this.scrollHandler.watchWidth();
            }
            _this.scrollHandler.RegisterDomHandler();
            _this.setFocusToLastElement();
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
            var container = parentElement;
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
        this.documentResizeHandlerForScroll = function (event) {
            _this.manageColHandler.onResize();
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
                if (element.tagName.toLowerCase() === "th") {
                    var dataHeaderId_1 = element.getAttribute("data-header-id");
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
        this.handleMouseDown = function (event) {
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
            _this.configStore.Options.onClickHeader(headerId, direction);
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
        this.watches = [];
        this.setCurrentIndex = function (index) {
            _this.currentIndex = index;
            _this.gridTemplateService.CurrentIndex = index;
        };
        this.getCurrentIndex = function () {
            return _this.currentIndex;
        };
        this.RegisterDomHandler = function () {
            // Registering JQuery Event Handler if Header is Clicked.
            _this.parentElement.find(".table-body").on("scroll", _this.handleResize);
        };
        this.removeHandler = function () {
            _this.parentElement.find(".table-body").off("scroll", _this.handleResize);
        };
        this.resetParentOffset = function () {
            _this.parentOffSetLeft = _this.parentElement.offset().left;
            _this.leftOffset = _this.parentElement.find(".table-header").offset().left;
        };
        this.watchWidth = function () {
            _this.parentOffSetLeft = _this.parentElement.offset().left;
            _this.watches.push(setInterval(_this.setHeaderOffset, 300));
        };
        this.unWatchWidth = function () {
            if (_this.watches === undefined || _this.watches === null) {
                return;
            }
            for (var _i = 0, _a = _this.watches; _i < _a.length; _i++) {
                var watch = _a[_i];
                clearInterval(watch);
            }
        };
        this.handleResize = function (event) {
            var tBodyObj = _this.parentElement.find(".table-body");
            if (_this.leftOffset === undefined || _this.leftOffset === null) {
                _this.leftOffset = _this.parentElement.find(".table-header").offset().left;
            }
            _this.parentElement.find(".table-header").css({
                "margin-left": -1 * tBodyObj.scrollLeft(),
            });
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
        this.setHeaderOffset = function () {
            var left = _this.parentElement.offset().left;
            if (_this.parentOffSetLeft !== left) {
                var tBodyObj = _this.parentElement.find(".table-body");
                if (_this.leftOffset === undefined || _this.leftOffset === null) {
                    _this.leftOffset = _this.parentElement.find(".table-header").offset().left;
                }
                _this.leftOffset = _this.leftOffset - (_this.parentOffSetLeft - left);
                _this.parentElement
                    .find(".table-header")
                    .offset({ left: _this.leftOffset, top: 0 });
                _this.parentOffSetLeft = left;
                tBodyObj.scrollLeft(tBodyObj.scrollLeft() - 1);
            }
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
        // ariaLabelStr = column.name + " sorted ascending";
    }
    else if (column.orderBy === GridOrderDirection_1.GridOrderDirection.Desc) {
        headerIconMk = "<i class=\"gui gui-icon gui-icon-arrow-up gui-hidden\" aria-hidden=\"true\" ></i> " +
            "<i class=\"gui gui-icon gui-icon-arrow-down\" aria-hidden=\"false\" ></i>";
        ariaSortStr = "aria-sort=\"descending\"";
        // ariaLabelStr = column.name + " sorted descending";
    }
    else {
        headerIconMk = "<i class=\"gui gui-icon gui-icon-arrow-up gui-hidden\" aria-hidden=\"true\" ></i> " +
            "<i class=\"gui gui-icon gui-icon-arrow-down gui-hidden\" aria-hidden=\"true\" ></i>";
        ariaSortStr = "aria-sort=\"none\"";
        ariaLabelStr = " Press space or enter to sort column " + column.name + " button";
    }
    return "<th role=\"columnheader\" aria-colindex=\"" + parsedInt
        + "\" class=\"gui cursor-pointer\" id=\"header-"
        + column.id + "\""
        + " tabindex=\"" + tabIndex + "\" "
        + " data-header-id=\"" + column.id + "\" +  "
        + ariaSortStr
        + ariaHiddenStr
        + " aria-labelledBy=\"columnLabel-" + column.id + "\""
        // + " title=\"" + column.name + "\" "
        + "  >"
        + " <span "
        + " id=\"columnLabel-" + column.id + "\" "
        + " aria-label=\"" + ariaLabelStr + "\" "
        + " role=\"button\" class=\"gui no-css sub header m-r-5\">" + column.name + "</span>"
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCAzZjliODJiNDk0OTg3OGNhMmUyYiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwge1wicm9vdFwiOlwiSGFuZGxlYmFyc1wiLFwiYW1kXCI6XCJoYW5kbGViYXJzLnJ1bnRpbWVcIixcImNvbW1vbmpzMlwiOlwiaGFuZGxlYmFycy9ydW50aW1lXCIsXCJjb21tb25qc1wiOlwiaGFuZGxlYmFycy9ydW50aW1lXCJ9Iiwid2VicGFjazovLy8uL3NyYy9oYnMvaGVscGVycy9EaXNhYmxlZC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvaGJzL2hlbHBlcnMvQWRkLnRzIiwid2VicGFjazovLy8uL3NyYy9qcy9wYWdpbmF0aW9uL1BhZ2VyLnRzIiwid2VicGFjazovLy9leHRlcm5hbCBcImpRdWVyeVwiIiwid2VicGFjazovLy8uL3NyYy9qcy91dGlsL0NvbHVtblV0aWwudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL21vZGVscy9HcmlkT3JkZXJEaXJlY3Rpb24udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2hicy9ncmlkLWRldGFpbHMtcm93LmhicyIsIndlYnBhY2s6Ly8vLi9zcmMvaGJzL2dyaWQtZm9vdGVyLmhicyIsIndlYnBhY2s6Ly8vLi9zcmMvaGJzL2hlbHBlcnMvbWF0aC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvaGJzL2dyaWQtbWFpbi1yb3cuaGJzIiwid2VicGFjazovLy8uL3NyYy9oYnMvaGVscGVycy9Cb29sQXR0cmlidXRlLnRzIiwid2VicGFjazovLy8uL3NyYy9qcy9tYWluL0dyaWQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2NvbmZpZy9Db25maWdTdG9yZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvZXZlbnRIYW5kbGVycy9TZWxlY3RFdmVudEhhbmRsZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2V2ZW50SGFuZGxlcnMvRGV0YWlsc1Jvd0hhbmRsZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2V2ZW50SGFuZGxlcnMvRmlsdGVyQ2xpY2tIYW5kbGVyLnRzIiwid2VicGFjazovLy8uL3NyYy9qcy9tb2RlbHMvRmlsdGVyQWN0aW9uVHlwZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvZXZlbnRIYW5kbGVycy9IYW5kbGVyTmFtZXMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2V2ZW50SGFuZGxlcnMvSGVhZGVyQ2xpY2tIYW5kbGVyLnRzIiwid2VicGFjazovLy8uL3NyYy9qcy9ldmVudEhhbmRsZXJzL1BhZ2VTZWFyY2hDbGlja0hhbmRsZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2V2ZW50SGFuZGxlcnMvU2Nyb2xsSGFuZGxlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvc2VydmljZXMvR3JpZFRlbXBsYXRlU2VydmljZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvaGJzL2hlbHBlcnMvU2VsZWN0ZWQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2hicy9ncmlkLW1hbmFnZS1jb2x1bW5zLmhicyIsIndlYnBhY2s6Ly8vLi9zcmMvaGJzL2hlbHBlcnMvQ2hlY2tlZC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvaGJzL2dyaWQuaGJzIiwid2VicGFjazovLy8uL3NyYy9oYnMvaGVscGVycy9Db2x1bW4udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2hicy9oZWxwZXJzL09yZGVyZWQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2hicy9oZWxwZXJzL0FyaWFIaWRkZW4udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87QUNWQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFD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QUFRLENBQUM7QUFDckIsQ0FBQyxDQUFDO0FBRUYsa0JBQWUsT0FBTyxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7QUM1Q3ZCLElBQU0sVUFBVSxHQUFHLFVBQUMsSUFBYTtJQUM3QixNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDLENBQUMsdUJBQXVCLENBQUM7QUFDbkUsQ0FBQyxDQUFDO0FBRUYsa0JBQWUsVUFBVSxDQUFDIiwiZmlsZSI6ImdyaWRvby5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkocmVxdWlyZShcImhhbmRsZWJhcnMvcnVudGltZVwiKSwgcmVxdWlyZShcImpRdWVyeVwiKSk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShbXCJoYW5kbGViYXJzLnJ1bnRpbWVcIiwgXCJqUXVlcnlcIl0sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wiR3JpZG9vXCJdID0gZmFjdG9yeShyZXF1aXJlKFwiaGFuZGxlYmFycy9ydW50aW1lXCIpLCByZXF1aXJlKFwialF1ZXJ5XCIpKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJHcmlkb29cIl0gPSBmYWN0b3J5KHJvb3RbXCJIYW5kbGViYXJzXCJdLCByb290W1wialF1ZXJ5XCJdKTtcbn0pKHR5cGVvZiBzZWxmICE9PSAndW5kZWZpbmVkJyA/IHNlbGYgOiB0aGlzLCBmdW5jdGlvbihfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzBfXywgX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV80X18pIHtcbnJldHVybiBcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMTIpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIDNmOWI4MmI0OTQ5ODc4Y2EyZTJiIiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzBfXztcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCB7XCJyb290XCI6XCJIYW5kbGViYXJzXCIsXCJhbWRcIjpcImhhbmRsZWJhcnMucnVudGltZVwiLFwiY29tbW9uanMyXCI6XCJoYW5kbGViYXJzL3J1bnRpbWVcIixcImNvbW1vbmpzXCI6XCJoYW5kbGViYXJzL3J1bnRpbWVcIn1cbi8vIG1vZHVsZSBpZCA9IDBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEiLCJjb25zdCBkaXNhYmxlZCA9IChib29sOiBib29sZWFuKTogc3RyaW5nID0+IHtcclxuICAgIHJldHVybiBib29sID8gXCJkaXNhYmxlZFwiIDogXCJcIjtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGRpc2FibGVkO1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvdHNsaW50LWxvYWRlcj8/cmVmLS0xIS4vc3JjL2hicy9oZWxwZXJzL0Rpc2FibGVkLnRzIiwiY29uc3QgQWRkID0gKGxlZnQ6IG51bWJlciwgcmlnaHQ6IG51bWJlcik6IHN0cmluZyA9PiB7XHJcbiAgICByZXR1cm4gKGxlZnQgKyByaWdodCkudG9TdHJpbmcoKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEFkZDtcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL3RzbGludC1sb2FkZXI/P3JlZi0tMSEuL3NyYy9oYnMvaGVscGVycy9BZGQudHMiLCJpbXBvcnQgeyBJUGFnaW5hdGlvbiB9IGZyb20gXCIuLi9tb2RlbHMvSVBhZ2luYXRpb25cIjtcclxuaW1wb3J0IHsgSVBhZ2luYXRpb25JbnB1dCB9IGZyb20gXCIuLi9tb2RlbHMvSVBhZ2luYXRpb25JbnB1dFwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIFBhZ2VyIHtcclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIHBhZ2luYXRpb25EYXRhOiBJUGFnaW5hdGlvbjtcclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIENhbGN1bGF0ZVBhZ2luYXRpb25EYXRhID0gKHBhZ2luYXRpb25JbnB1dDogSVBhZ2luYXRpb25JbnB1dCk6IHZvaWQgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBwYWdpbmF0aW9uRGF0YTogYW55ID0ge307XHJcbiAgICAgICAgICAgIHBhZ2luYXRpb25EYXRhLnBhZ2VJbmRleCA9IHBhZ2luYXRpb25JbnB1dC5wYWdlSW5kZXg7XHJcbiAgICAgICAgICAgIHBhZ2luYXRpb25EYXRhLnBhZ2VTaXplID0gcGFnaW5hdGlvbklucHV0LnBhZ2VTaXplO1xyXG4gICAgICAgICAgICBwYWdpbmF0aW9uRGF0YS5wYWdlU2l6ZXMgPSBwYWdpbmF0aW9uSW5wdXQucGFnZVNpemVzO1xyXG4gICAgICAgICAgICBwYWdpbmF0aW9uRGF0YS50b3RhbENvdW50ID0gcGFnaW5hdGlvbklucHV0LnRvdGFsQ291bnQ7XHJcbiAgICAgICAgICAgIHBhZ2luYXRpb25EYXRhLm5vT2ZQYWdlcyA9IE1hdGguY2VpbChwYWdpbmF0aW9uSW5wdXQudG90YWxDb3VudCAvIHBhZ2luYXRpb25JbnB1dC5wYWdlU2l6ZSk7XHJcbiAgICAgICAgICAgIGNvbnN0IG1pbk51bSA9ICgocGFnaW5hdGlvbklucHV0LnBhZ2VJbmRleCAtIDEpICogcGFnaW5hdGlvbklucHV0LnBhZ2VTaXplKTtcclxuICAgICAgICAgICAgY29uc3QgbG93ZXJMaW1pdE9mZnNldCA9IHBhZ2luYXRpb25JbnB1dC5wYWdlU2l6ZSA+IHBhZ2luYXRpb25JbnB1dC50b3RhbENvdW50ID9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZ2luYXRpb25JbnB1dC50b3RhbENvdW50IDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZ2luYXRpb25JbnB1dC5wYWdlU2l6ZTtcclxuICAgICAgICAgICAgcGFnaW5hdGlvbkRhdGEucmFuZ2UgPSB7XHJcbiAgICAgICAgICAgICAgICBtaW4gOiBtaW5OdW0gKyAxLFxyXG4gICAgICAgICAgICAgICAgbWF4IDogbWluTnVtICsgbG93ZXJMaW1pdE9mZnNldCxcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgcGFnaW5hdGlvbkRhdGEuZmlyc3RQYWdlTGlua0Rpc2FibGVkID0gcGFnaW5hdGlvbkRhdGEubm9PZlBhZ2VzID09PSAxIHx8IHBhZ2luYXRpb25EYXRhLnBhZ2VJbmRleCA9PT0gMTtcclxuICAgICAgICAgICAgcGFnaW5hdGlvbkRhdGEubGFzdFBhZ2VMaW5rRGlzYWJsZWQgID0gcGFnaW5hdGlvbkRhdGEubm9PZlBhZ2VzID09PSAxXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8fCAocGFnaW5hdGlvbkRhdGEucGFnZUluZGV4ID09PSBwYWdpbmF0aW9uRGF0YS5ub09mUGFnZXMpO1xyXG4gICAgICAgICAgICBwYWdpbmF0aW9uRGF0YS5wcmV2UGFnZUxpbmtEaXNhYmxlZCAgPSBwYWdpbmF0aW9uRGF0YS5wYWdlSW5kZXggPT09IDFcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHx8IChwYWdpbmF0aW9uRGF0YS5wYWdlSW5kZXggLSAxKSA8PSAwO1xyXG4gICAgICAgICAgICBwYWdpbmF0aW9uRGF0YS5uZXh0UGFnZUxpbmtEaXNhYmxlZCAgPSBwYWdpbmF0aW9uRGF0YS5ub09mUGFnZXMgPT09IHBhZ2luYXRpb25EYXRhLnBhZ2VJbmRleFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfHwgKHBhZ2luYXRpb25EYXRhLnBhZ2VJbmRleCArIDEpID49IHBhZ2luYXRpb25EYXRhLm5vT2ZQYWdlcztcclxuICAgICAgICAgICAgUGFnZXIucGFnaW5hdGlvbkRhdGEgPSBwYWdpbmF0aW9uRGF0YTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIGdldCBQYWdpbmF0aW9uRGF0YSgpOiBJUGFnaW5hdGlvbiB7XHJcbiAgICAgICAgcmV0dXJuIFBhZ2VyLnBhZ2luYXRpb25EYXRhO1xyXG4gICAgfVxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy90c2xpbnQtbG9hZGVyPz9yZWYtLTEhLi9zcmMvanMvcGFnaW5hdGlvbi9QYWdlci50cyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV80X187XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJqUXVlcnlcIlxuLy8gbW9kdWxlIGlkID0gNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSIsImltcG9ydCB7IEdyaWRPcmRlckRpcmVjdGlvbiB9IGZyb20gXCIuLi9tb2RlbHMvR3JpZE9yZGVyRGlyZWN0aW9uXCI7XHJcbmltcG9ydCB7IElDb2x1bW4gfSBmcm9tIFwiLi8uLi9tb2RlbHMvSUNvbHVtblwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIENvbW1vblV0aWwge1xyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgR2V0Q29sdW1uT2JqZWN0ID0gKGNvbHVtbklkOiBzdHJpbmcsIGNvbHVtbnM6IElDb2x1bW5bXSk6IElDb2x1bW4gPT4ge1xyXG4gICAgICAgIGlmIChjb2x1bW5JZCA9PSBudWxsIHx8IGNvbHVtbnMgPT0gbnVsbCkge1xyXG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IHJldENvbDogSUNvbHVtbjtcclxuICAgICAgICBjb2x1bW5zLmZvckVhY2goKGNvbDogSUNvbHVtbikgPT4ge1xyXG4gICAgICAgICAgICBpZiAoY29sLmlkID09PSBjb2x1bW5JZCkge1xyXG4gICAgICAgICAgICAgICAgcmV0Q29sID0gY29sO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgcmV0dXJuIHJldENvbDtcclxuICAgIH1cclxuICAgIHB1YmxpYyBzdGF0aWMgU2V0T3JkZXIgPSAoY29sdW1uSWQ6IHN0cmluZywgb3JkZXJCeTogR3JpZE9yZGVyRGlyZWN0aW9uLCBjb2x1bW5zOiBJQ29sdW1uW10pOiBJQ29sdW1uID0+IHtcclxuICAgICAgICBpZiAoY29sdW1uSWQgPT0gbnVsbCB8fCBjb2x1bW5zID09IG51bGwpIHtcclxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCByZXRDb2w6IElDb2x1bW47XHJcbiAgICAgICAgY29sdW1ucy5mb3JFYWNoKChjb2w6IElDb2x1bW4pID0+IHtcclxuICAgICAgICAgICAgaWYgKGNvbC5pZCA9PT0gY29sdW1uSWQpIHtcclxuICAgICAgICAgICAgICAgIGNvbC5vcmRlckJ5ID0gb3JkZXJCeTtcclxuICAgICAgICAgICAgICAgIHJldENvbCA9IGNvbDtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHJldHVybiByZXRDb2w7XHJcbiAgICB9XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL3RzbGludC1sb2FkZXI/P3JlZi0tMSEuL3NyYy9qcy91dGlsL0NvbHVtblV0aWwudHMiLCJleHBvcnQgZW51bSBHcmlkT3JkZXJEaXJlY3Rpb24ge1xyXG4gICAgTm9uZSA9IFwiTm9uZVwiLFxyXG4gICAgQXNjID0gXCJBc2NcIixcclxuICAgIERlc2MgPSBcIkRlc2NcIixcclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvdHNsaW50LWxvYWRlcj8/cmVmLS0xIS4vc3JjL2pzL21vZGVscy9HcmlkT3JkZXJEaXJlY3Rpb24udHMiLCJ2YXIgSGFuZGxlYmFycyA9IHJlcXVpcmUoXCJoYW5kbGViYXJzXCIpO1xuZnVuY3Rpb24gX19kZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIChvYmouX19lc01vZHVsZSA/IG9ialtcImRlZmF1bHRcIl0gOiBvYmopOyB9XG5tb2R1bGUuZXhwb3J0cyA9IChIYW5kbGViYXJzW1wiZGVmYXVsdFwiXSB8fCBIYW5kbGViYXJzKS50ZW1wbGF0ZSh7XCIxXCI6ZnVuY3Rpb24oY29udGFpbmVyLGRlcHRoMCxoZWxwZXJzLHBhcnRpYWxzLGRhdGEpIHtcbiAgICB2YXIgc3RhY2sxLCBoZWxwZXIsIGFsaWFzMT1kZXB0aDAgIT0gbnVsbCA/IGRlcHRoMCA6IChjb250YWluZXIubnVsbENvbnRleHQgfHwge30pLCBhbGlhczI9aGVscGVycy5oZWxwZXJNaXNzaW5nLCBhbGlhczM9XCJmdW5jdGlvblwiLCBhbGlhczQ9Y29udGFpbmVyLmVzY2FwZUV4cHJlc3Npb247XG5cbiAgcmV0dXJuIFwiICAgICAgICAgICAgICAgIDx0cj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzcz1cXFwiZ3VpIHJ2LXBhcmVudFxcXCIgXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsaWduPVxcXCJ0b3BcXFwiIFxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtZmlsdGVyLXR5cGU9XFxcIlwiXG4gICAgKyBhbGlhczQoKChoZWxwZXIgPSAoaGVscGVyID0gaGVscGVycy50eXBlIHx8IChkZXB0aDAgIT0gbnVsbCA/IGRlcHRoMC50eXBlIDogZGVwdGgwKSkgIT0gbnVsbCA/IGhlbHBlciA6IGFsaWFzMiksKHR5cGVvZiBoZWxwZXIgPT09IGFsaWFzMyA/IGhlbHBlci5jYWxsKGFsaWFzMSx7XCJuYW1lXCI6XCJ0eXBlXCIsXCJoYXNoXCI6e30sXCJkYXRhXCI6ZGF0YX0pIDogaGVscGVyKSkpXG4gICAgKyBcIlxcXCIgXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS1maWx0ZXIta2V5PVxcXCJcIlxuICAgICsgYWxpYXM0KCgoaGVscGVyID0gKGhlbHBlciA9IGhlbHBlcnMuaWQgfHwgKGRlcHRoMCAhPSBudWxsID8gZGVwdGgwLmlkIDogZGVwdGgwKSkgIT0gbnVsbCA/IGhlbHBlciA6IGFsaWFzMiksKHR5cGVvZiBoZWxwZXIgPT09IGFsaWFzMyA/IGhlbHBlci5jYWxsKGFsaWFzMSx7XCJuYW1lXCI6XCJpZFwiLFwiaGFzaFwiOnt9LFwiZGF0YVwiOmRhdGF9KSA6IGhlbHBlcikpKVxuICAgICsgXCJcXFwiIFxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtZmlsdGVyLXZhbHVlPVxcXCJcIlxuICAgICsgYWxpYXM0KCgoaGVscGVyID0gKGhlbHBlciA9IGhlbHBlcnMuYWN0dWFsVmFsdWUgfHwgKGRlcHRoMCAhPSBudWxsID8gZGVwdGgwLmFjdHVhbFZhbHVlIDogZGVwdGgwKSkgIT0gbnVsbCA/IGhlbHBlciA6IGFsaWFzMiksKHR5cGVvZiBoZWxwZXIgPT09IGFsaWFzMyA/IGhlbHBlci5jYWxsKGFsaWFzMSx7XCJuYW1lXCI6XCJhY3R1YWxWYWx1ZVwiLFwiaGFzaFwiOnt9LFwiZGF0YVwiOmRhdGF9KSA6IGhlbHBlcikpKVxuICAgICsgXCJcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPlwiXG4gICAgKyBhbGlhczQoKChoZWxwZXIgPSAoaGVscGVyID0gaGVscGVycy5jb2x1bW5OYW1lIHx8IChkZXB0aDAgIT0gbnVsbCA/IGRlcHRoMC5jb2x1bW5OYW1lIDogZGVwdGgwKSkgIT0gbnVsbCA/IGhlbHBlciA6IGFsaWFzMiksKHR5cGVvZiBoZWxwZXIgPT09IGFsaWFzMyA/IGhlbHBlci5jYWxsKGFsaWFzMSx7XCJuYW1lXCI6XCJjb2x1bW5OYW1lXCIsXCJoYXNoXCI6e30sXCJkYXRhXCI6ZGF0YX0pIDogaGVscGVyKSkpXG4gICAgKyBcIjwvc3Bhbj5cXHJcXG5cIlxuICAgICsgKChzdGFjazEgPSBoZWxwZXJzW1wiaWZcIl0uY2FsbChhbGlhczEsKGRlcHRoMCAhPSBudWxsID8gZGVwdGgwLmZpbHRlcmFibGUgOiBkZXB0aDApLHtcIm5hbWVcIjpcImlmXCIsXCJoYXNoXCI6e30sXCJmblwiOmNvbnRhaW5lci5wcm9ncmFtKDIsIGRhdGEsIDApLFwiaW52ZXJzZVwiOmNvbnRhaW5lci5ub29wLFwiZGF0YVwiOmRhdGF9KSkgIT0gbnVsbCA/IHN0YWNrMSA6IFwiXCIpXG4gICAgKyBcIiAgICAgICAgICAgICAgICAgICAgPC90ZD5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDx0ZD5cIlxuICAgICsgKChzdGFjazEgPSAoKGhlbHBlciA9IChoZWxwZXIgPSBoZWxwZXJzLmNvbHVtblZhbHVlIHx8IChkZXB0aDAgIT0gbnVsbCA/IGRlcHRoMC5jb2x1bW5WYWx1ZSA6IGRlcHRoMCkpICE9IG51bGwgPyBoZWxwZXIgOiBhbGlhczIpLCh0eXBlb2YgaGVscGVyID09PSBhbGlhczMgPyBoZWxwZXIuY2FsbChhbGlhczEse1wibmFtZVwiOlwiY29sdW1uVmFsdWVcIixcImhhc2hcIjp7fSxcImRhdGFcIjpkYXRhfSkgOiBoZWxwZXIpKSkgIT0gbnVsbCA/IHN0YWNrMSA6IFwiXCIpXG4gICAgKyBcIjwvdGQ+XFxyXFxuICAgICAgICAgICAgICAgIDwvdHI+XFxyXFxuXCI7XG59LFwiMlwiOmZ1bmN0aW9uKGNvbnRhaW5lcixkZXB0aDAsaGVscGVycyxwYXJ0aWFscyxkYXRhKSB7XG4gICAgcmV0dXJuIFwiICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XFxcImd1aSBtLWwtNSBydi1jaGlsZCBndWktY2FwdGlvblxcXCIgPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzcz1cXFwiZ3VpIGd1aS1pY29uIGd1aS1pY29uLWFkZCBob3ZlciBtLWwtNSBjdXJzb3ItcG9pbnRlciBhZGRGaWx0ZXJcXFwiPjwvaT5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3M9XFxcImd1aSBndWktaWNvbiBndWktaWNvbi1taW51cyBob3ZlciBtLWwtNSBjdXJzb3ItcG9pbnRlciByZW1vdmVGaWx0ZXJcXFwiPjwvaT5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XFxyXFxuXCI7XG59LFwiY29tcGlsZXJcIjpbNyxcIj49IDQuMC4wXCJdLFwibWFpblwiOmZ1bmN0aW9uKGNvbnRhaW5lcixkZXB0aDAsaGVscGVycyxwYXJ0aWFscyxkYXRhKSB7XG4gICAgdmFyIHN0YWNrMSwgaGVscGVyLCBhbGlhczE9ZGVwdGgwICE9IG51bGwgPyBkZXB0aDAgOiAoY29udGFpbmVyLm51bGxDb250ZXh0IHx8IHt9KSwgYWxpYXMyPWhlbHBlcnMuaGVscGVyTWlzc2luZywgYWxpYXMzPVwiZnVuY3Rpb25cIiwgYWxpYXM0PWNvbnRhaW5lci5lc2NhcGVFeHByZXNzaW9uO1xuXG4gIHJldHVybiBcIjx0ciBpZD1cXFwiZGV0YWlscy1yb3ctXCJcbiAgICArIGFsaWFzNCgoKGhlbHBlciA9IChoZWxwZXIgPSBoZWxwZXJzLmluZGV4IHx8IChkYXRhICYmIGRhdGEuaW5kZXgpKSAhPSBudWxsID8gaGVscGVyIDogYWxpYXMyKSwodHlwZW9mIGhlbHBlciA9PT0gYWxpYXMzID8gaGVscGVyLmNhbGwoYWxpYXMxLHtcIm5hbWVcIjpcImluZGV4XCIsXCJoYXNoXCI6e30sXCJkYXRhXCI6ZGF0YX0pIDogaGVscGVyKSkpXG4gICAgKyBcIlxcXCIgY2xhc3M9XFxcImd1aSBndWktaGlkZGVuIGRldGFpbHNSb3dcXFwiIGFyaWEtbGl2ZT1cXFwicG9saXRlXFxcIj5cXHJcXG4gICAgPHRkIGNvbHNwYW49XFxcIlwiXG4gICAgKyBhbGlhczQoKChoZWxwZXIgPSAoaGVscGVyID0gaGVscGVycy5sZW5ndGggfHwgKGRlcHRoMCAhPSBudWxsID8gZGVwdGgwLmxlbmd0aCA6IGRlcHRoMCkpICE9IG51bGwgPyBoZWxwZXIgOiBhbGlhczIpLCh0eXBlb2YgaGVscGVyID09PSBhbGlhczMgPyBoZWxwZXIuY2FsbChhbGlhczEse1wibmFtZVwiOlwibGVuZ3RoXCIsXCJoYXNoXCI6e30sXCJkYXRhXCI6ZGF0YX0pIDogaGVscGVyKSkpXG4gICAgKyBcIlxcXCI+XFxyXFxuICAgICAgICA8dGFibGUgY2xhc3M9XFxcImd1aSB2ZXJ5IGNvbXBhY3Qgc2VsZWN0YWJsZSBjZWxsZWQgdGFibGUgZGV0YWlsc1RhYmxlIG0tbC0zNyBwLTVcXFwiIFxcclxcbiAgICAgICAgICAgICAgIHN0eWxlPVxcXCJ3aWR0aDogYXV0bztcXFwiID5cXHJcXG4gICAgICAgICAgICA8dGJvZHk+XFxyXFxuXCJcbiAgICArICgoc3RhY2sxID0gaGVscGVycy5lYWNoLmNhbGwoYWxpYXMxLChkZXB0aDAgIT0gbnVsbCA/IGRlcHRoMC5tYWluUm93Q29sQXJyYXkgOiBkZXB0aDApLHtcIm5hbWVcIjpcImVhY2hcIixcImhhc2hcIjp7fSxcImZuXCI6Y29udGFpbmVyLnByb2dyYW0oMSwgZGF0YSwgMCksXCJpbnZlcnNlXCI6Y29udGFpbmVyLm5vb3AsXCJkYXRhXCI6ZGF0YX0pKSAhPSBudWxsID8gc3RhY2sxIDogXCJcIilcbiAgICArIFwiICAgICAgICAgICAgPC90Ym9keT5cXHJcXG4gICAgICAgIDwvdGFibGU+XFxyXFxuICAgIDwvdGQ+XFxyXFxuPC90cj5cIjtcbn0sXCJ1c2VEYXRhXCI6dHJ1ZX0pO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2hicy9ncmlkLWRldGFpbHMtcm93Lmhic1xuLy8gbW9kdWxlIGlkID0gN1xuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSIsInZhciBIYW5kbGViYXJzID0gcmVxdWlyZShcImhhbmRsZWJhcnNcIik7XG5mdW5jdGlvbiBfX2RlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgKG9iai5fX2VzTW9kdWxlID8gb2JqW1wiZGVmYXVsdFwiXSA6IG9iaik7IH1cbm1vZHVsZS5leHBvcnRzID0gKEhhbmRsZWJhcnNbXCJkZWZhdWx0XCJdIHx8IEhhbmRsZWJhcnMpLnRlbXBsYXRlKHtcIjFcIjpmdW5jdGlvbihjb250YWluZXIsZGVwdGgwLGhlbHBlcnMscGFydGlhbHMsZGF0YSxibG9ja1BhcmFtcyxkZXB0aHMpIHtcbiAgICB2YXIgc3RhY2sxLCBhbGlhczE9Y29udGFpbmVyLmVzY2FwZUV4cHJlc3Npb247XG5cbiAgcmV0dXJuIFwiICAgICAgICAgICAgPG9wdGlvbiBcIlxuICAgICsgYWxpYXMxKF9fZGVmYXVsdChyZXF1aXJlKFwiQzpcXFxcVGVjaG5pY2FsXFxcXFJlcG9cXFxcR3JpZG9vXFxcXHNyY1xcXFxoYnNcXFxcaGVscGVyc1xcXFxTZWxlY3RlZC50c1wiKSkuY2FsbChkZXB0aDAgIT0gbnVsbCA/IGRlcHRoMCA6IChjb250YWluZXIubnVsbENvbnRleHQgfHwge30pLCgoc3RhY2sxID0gKGRlcHRoc1sxXSAhPSBudWxsID8gZGVwdGhzWzFdLnBhZ2luYXRpb25EYXRhIDogZGVwdGhzWzFdKSkgIT0gbnVsbCA/IHN0YWNrMS5wYWdlU2l6ZSA6IHN0YWNrMSksZGVwdGgwLHtcIm5hbWVcIjpcIlNlbGVjdGVkXCIsXCJoYXNoXCI6e30sXCJkYXRhXCI6ZGF0YX0pKVxuICAgICsgXCI+XCJcbiAgICArIGFsaWFzMShjb250YWluZXIubGFtYmRhKGRlcHRoMCwgZGVwdGgwKSlcbiAgICArIFwiPC9vcHRpb24+XFxyXFxuXCI7XG59LFwiY29tcGlsZXJcIjpbNyxcIj49IDQuMC4wXCJdLFwibWFpblwiOmZ1bmN0aW9uKGNvbnRhaW5lcixkZXB0aDAsaGVscGVycyxwYXJ0aWFscyxkYXRhLGJsb2NrUGFyYW1zLGRlcHRocykge1xuICAgIHZhciBzdGFjazEsIGFsaWFzMT1jb250YWluZXIubGFtYmRhLCBhbGlhczI9Y29udGFpbmVyLmVzY2FwZUV4cHJlc3Npb24sIGFsaWFzMz1kZXB0aDAgIT0gbnVsbCA/IGRlcHRoMCA6IChjb250YWluZXIubnVsbENvbnRleHQgfHwge30pO1xuXG4gIHJldHVybiBcIjxkaXYgcm9sZT1cXFwibmF2aWdhdGlvblxcXCIgY2xhc3M9XFxcImd1aSBmbGV4IGpjLXNiIGd1aS1zdWJoZWFkaW5nLTEgdGV4dC1sZWZ0IG0tMFxcXCI+XFxyXFxuICAgIDxkaXYgY2xhc3M9XFxcImd1aSBtLXItMTBcXFwiPlxcclxcbiAgICAgICAgPGJ1dHRvbiBjbGFzcz1cXFwiZ3VpIGZpcnN0TGlua1xcXCIgXFxyXFxuICAgICAgICAgICAgICAgIGFyaWEtZGlzYWJsZWQ9XFxcIlwiXG4gICAgKyBhbGlhczIoYWxpYXMxKCgoc3RhY2sxID0gKGRlcHRoMCAhPSBudWxsID8gZGVwdGgwLnBhZ2luYXRpb25EYXRhIDogZGVwdGgwKSkgIT0gbnVsbCA/IHN0YWNrMS5maXJzdFBhZ2VMaW5rRGlzYWJsZWQgOiBzdGFjazEpLCBkZXB0aDApKVxuICAgICsgXCJcXFwiIFxcclxcbiAgICAgICAgICAgICAgICBcIlxuICAgICsgYWxpYXMyKF9fZGVmYXVsdChyZXF1aXJlKFwiQzpcXFxcVGVjaG5pY2FsXFxcXFJlcG9cXFxcR3JpZG9vXFxcXHNyY1xcXFxoYnNcXFxcaGVscGVyc1xcXFxEaXNhYmxlZC50c1wiKSkuY2FsbChhbGlhczMsKChzdGFjazEgPSAoZGVwdGgwICE9IG51bGwgPyBkZXB0aDAucGFnaW5hdGlvbkRhdGEgOiBkZXB0aDApKSAhPSBudWxsID8gc3RhY2sxLmZpcnN0UGFnZUxpbmtEaXNhYmxlZCA6IHN0YWNrMSkse1wibmFtZVwiOlwiRGlzYWJsZWRcIixcImhhc2hcIjp7fSxcImRhdGFcIjpkYXRhfSkpXG4gICAgKyBcIlxcclxcbiAgICAgICAgICAgICAgICBhcmlhLWxhYmVsPVxcXCJHbyB0byB0aGUgZmlyc3QgcGFnZVxcXCIgXFxyXFxuICAgICAgICAgICAgICAgIHRpdGxlPVxcXCJHbyB0byB0aGUgZmlyc3QgcGFnZVxcXCIgXFxyXFxuICAgICAgICAgICAgICAgIGRhdGEtcGFnZT1cXFwiMVxcXCI+XFxyXFxuICAgICAgICAgICAgPGkgY2xhc3M9XFxcImd1aS1pY29uIGd1aS1pY29uLXByZXZpb3VzXFxcIj48L2k+XFxyXFxuICAgICAgICA8L2J1dHRvbj5cXHJcXG4gICAgICAgIDxidXR0b24gY2xhc3M9XFxcImd1aSBwcmV2TGlua1xcXCIgXFxyXFxuICAgICAgICAgICAgICAgIGFyaWEtZGlzYWJsZWQ9XFxcIlwiXG4gICAgKyBhbGlhczIoYWxpYXMxKCgoc3RhY2sxID0gKGRlcHRoMCAhPSBudWxsID8gZGVwdGgwLnBhZ2luYXRpb25EYXRhIDogZGVwdGgwKSkgIT0gbnVsbCA/IHN0YWNrMS5wcmV2UGFnZUxpbmtEaXNhYmxlZCA6IHN0YWNrMSksIGRlcHRoMCkpXG4gICAgKyBcIlxcXCIgXFxyXFxuICAgICAgICAgICAgICAgIFwiXG4gICAgKyBhbGlhczIoX19kZWZhdWx0KHJlcXVpcmUoXCJDOlxcXFxUZWNobmljYWxcXFxcUmVwb1xcXFxHcmlkb29cXFxcc3JjXFxcXGhic1xcXFxoZWxwZXJzXFxcXERpc2FibGVkLnRzXCIpKS5jYWxsKGFsaWFzMywoKHN0YWNrMSA9IChkZXB0aDAgIT0gbnVsbCA/IGRlcHRoMC5wYWdpbmF0aW9uRGF0YSA6IGRlcHRoMCkpICE9IG51bGwgPyBzdGFjazEucHJldlBhZ2VMaW5rRGlzYWJsZWQgOiBzdGFjazEpLHtcIm5hbWVcIjpcIkRpc2FibGVkXCIsXCJoYXNoXCI6e30sXCJkYXRhXCI6ZGF0YX0pKVxuICAgICsgXCJcXHJcXG4gICAgICAgICAgICAgICAgYXJpYS1sYWJlbD1cXFwiR28gdG8gdGhlIHByZXZpb3VzIHBhZ2VcXFwiIFxcclxcbiAgICAgICAgICAgICAgICB0aXRsZT1cXFwiR28gdG8gdGhlIHByZXZpb3VzIHBhZ2VcXFwiIFxcclxcbiAgICAgICAgICAgICAgICBkYXRhLXBhZ2U9XFxcIlwiXG4gICAgKyBhbGlhczIoX19kZWZhdWx0KHJlcXVpcmUoXCJDOlxcXFxUZWNobmljYWxcXFxcUmVwb1xcXFxHcmlkb29cXFxcc3JjXFxcXGhic1xcXFxoZWxwZXJzXFxcXG1hdGgudHNcIikpLmNhbGwoYWxpYXMzLCgoc3RhY2sxID0gKGRlcHRoMCAhPSBudWxsID8gZGVwdGgwLnBhZ2luYXRpb25EYXRhIDogZGVwdGgwKSkgIT0gbnVsbCA/IHN0YWNrMS5wYWdlSW5kZXggOiBzdGFjazEpLFwiLVwiLDEse1wibmFtZVwiOlwibWF0aFwiLFwiaGFzaFwiOnt9LFwiZGF0YVwiOmRhdGF9KSlcbiAgICArIFwiXFxcIj5cXHJcXG4gICAgICAgICAgICA8aSBjbGFzcz1cXFwiZ3VpLWljb24gZ3VpLWljb24tY2hldnJvbi1sZWZ0XFxcIj48L2k+XFxyXFxuICAgICAgICAgICAgUHJldlxcclxcbiAgICAgICAgPC9idXR0b24+XFxyXFxuICAgIDwvZGl2PlxcclxcbiAgICA8ZGl2IGNsYXNzPVxcXCJndWkgcGFnZXItaW5wdXQtY29udGFpbmVyIG1lZGl1bSBoLTMwIGlucHV0IGZsZXggamMtc2IgbS1yLTEwXFxcIj5cXHJcXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcImd1aSBtLXItNVxcXCI+IFBhZ2UgPC9kaXY+XFxyXFxuICAgICAgICA8aW5wdXQgIGNsYXNzPVxcXCJndWkgcGFnZXItaW5wdXQgaC0zMCB3LTUwIG0tci01XFxcIiBcXHJcXG4gICAgICAgICAgICAgICAgYXJpYS1sYWJlbD1cXFwiR28gdG8gUGFnZSBcIlxuICAgICsgYWxpYXMyKGFsaWFzMSgoKHN0YWNrMSA9IChkZXB0aDAgIT0gbnVsbCA/IGRlcHRoMC5wYWdpbmF0aW9uRGF0YSA6IGRlcHRoMCkpICE9IG51bGwgPyBzdGFjazEucGFnZUluZGV4IDogc3RhY2sxKSwgZGVwdGgwKSlcbiAgICArIFwiXFxcIiBcXHJcXG4gICAgICAgICAgICAgICAgdGl0bGU9XFxcIkdvIHRvIFBhZ2UgXCJcbiAgICArIGFsaWFzMihhbGlhczEoKChzdGFjazEgPSAoZGVwdGgwICE9IG51bGwgPyBkZXB0aDAucGFnaW5hdGlvbkRhdGEgOiBkZXB0aDApKSAhPSBudWxsID8gc3RhY2sxLnBhZ2VJbmRleCA6IHN0YWNrMSksIGRlcHRoMCkpXG4gICAgKyBcIlxcXCIgXFxyXFxuICAgICAgICAgICAgICAgIHZhbHVlPVxcXCJcIlxuICAgICsgYWxpYXMyKGFsaWFzMSgoKHN0YWNrMSA9IChkZXB0aDAgIT0gbnVsbCA/IGRlcHRoMC5wYWdpbmF0aW9uRGF0YSA6IGRlcHRoMCkpICE9IG51bGwgPyBzdGFjazEucGFnZUluZGV4IDogc3RhY2sxKSwgZGVwdGgwKSlcbiAgICArIFwiXFxcIiBcXHJcXG4gICAgICAgICAgICAgICAgdHlwZT1cXFwidGV4dFxcXCIgXFxyXFxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVxcXCJQYWdlIE51bWJlciAuLi5cXFwiPlxcclxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwibm8tb2YtcGFnZXMtc2NhblxcXCIgXFxyXFxuICAgICAgICAgICAgIGRhdGEtbnVtYmVyLW9mLXBhZ2VzPVxcXCJcIlxuICAgICsgYWxpYXMyKGFsaWFzMSgoKHN0YWNrMSA9IChkZXB0aDAgIT0gbnVsbCA/IGRlcHRoMC5wYWdpbmF0aW9uRGF0YSA6IGRlcHRoMCkpICE9IG51bGwgPyBzdGFjazEubm9PZlBhZ2VzIDogc3RhY2sxKSwgZGVwdGgwKSlcbiAgICArIFwiXFxcIj5cXHJcXG4gICAgICAgICAgICAgb2YgXCJcbiAgICArIGFsaWFzMihhbGlhczEoKChzdGFjazEgPSAoZGVwdGgwICE9IG51bGwgPyBkZXB0aDAucGFnaW5hdGlvbkRhdGEgOiBkZXB0aDApKSAhPSBudWxsID8gc3RhY2sxLm5vT2ZQYWdlcyA6IHN0YWNrMSksIGRlcHRoMCkpXG4gICAgKyBcIlxcclxcbiAgICAgICAgPC9kaXY+XFxyXFxuICAgIDwvZGl2PlxcclxcbiAgICA8ZGl2IGNsYXNzPVxcXCJndWkgbS1yLTEwXFxcIj5cXHJcXG4gICAgICAgIDxidXR0b24gY2xhc3M9XFxcImd1aSBuZXh0TGlua1xcXCIgXFxyXFxuICAgICAgICAgICAgICAgIGFyaWEtZGlzYWJsZWQ9XFxcIlwiXG4gICAgKyBhbGlhczIoYWxpYXMxKCgoc3RhY2sxID0gKGRlcHRoMCAhPSBudWxsID8gZGVwdGgwLnBhZ2luYXRpb25EYXRhIDogZGVwdGgwKSkgIT0gbnVsbCA/IHN0YWNrMS5uZXh0UGFnZUxpbmtEaXNhYmxlZCA6IHN0YWNrMSksIGRlcHRoMCkpXG4gICAgKyBcIlxcXCIgXFxyXFxuICAgICAgICAgICAgICAgIFwiXG4gICAgKyBhbGlhczIoX19kZWZhdWx0KHJlcXVpcmUoXCJDOlxcXFxUZWNobmljYWxcXFxcUmVwb1xcXFxHcmlkb29cXFxcc3JjXFxcXGhic1xcXFxoZWxwZXJzXFxcXERpc2FibGVkLnRzXCIpKS5jYWxsKGFsaWFzMywoKHN0YWNrMSA9IChkZXB0aDAgIT0gbnVsbCA/IGRlcHRoMC5wYWdpbmF0aW9uRGF0YSA6IGRlcHRoMCkpICE9IG51bGwgPyBzdGFjazEubmV4dFBhZ2VMaW5rRGlzYWJsZWQgOiBzdGFjazEpLHtcIm5hbWVcIjpcIkRpc2FibGVkXCIsXCJoYXNoXCI6e30sXCJkYXRhXCI6ZGF0YX0pKVxuICAgICsgXCJcXHJcXG4gICAgICAgICAgICAgICAgYXJpYS1sYWJlbD1cXFwiR28gdG8gdGhlIG5leHQgcGFnZVxcXCIgXFxyXFxuICAgICAgICAgICAgICAgIHRpdGxlPVxcXCJHbyB0byB0aGUgbmV4dCBwYWdlXFxcIiBcXHJcXG4gICAgICAgICAgICAgICAgZGF0YS1wYWdlPVxcXCJcIlxuICAgICsgYWxpYXMyKF9fZGVmYXVsdChyZXF1aXJlKFwiQzpcXFxcVGVjaG5pY2FsXFxcXFJlcG9cXFxcR3JpZG9vXFxcXHNyY1xcXFxoYnNcXFxcaGVscGVyc1xcXFxtYXRoLnRzXCIpKS5jYWxsKGFsaWFzMywoKHN0YWNrMSA9IChkZXB0aDAgIT0gbnVsbCA/IGRlcHRoMC5wYWdpbmF0aW9uRGF0YSA6IGRlcHRoMCkpICE9IG51bGwgPyBzdGFjazEucGFnZUluZGV4IDogc3RhY2sxKSxcIitcIiwxLHtcIm5hbWVcIjpcIm1hdGhcIixcImhhc2hcIjp7fSxcImRhdGFcIjpkYXRhfSkpXG4gICAgKyBcIlxcXCIgPlxcclxcbiAgICAgICAgICAgIE5leHRcXHJcXG4gICAgICAgICAgICA8aSBjbGFzcz1cXFwiZ3VpLWljb24gZ3VpLWljb24tY2hldnJvbi1yaWdodFxcXCI+PC9pPlxcclxcbiAgICAgICAgPC9idXR0b24+XFxyXFxuICAgICAgICA8YnV0dG9uIGNsYXNzPVxcXCJndWkgbGFzdExpbmtcXFwiIFxcclxcbiAgICAgICAgICAgICAgICBhcmlhLWRpc2FibGVkPVxcXCJcIlxuICAgICsgYWxpYXMyKGFsaWFzMSgoKHN0YWNrMSA9IChkZXB0aDAgIT0gbnVsbCA/IGRlcHRoMC5wYWdpbmF0aW9uRGF0YSA6IGRlcHRoMCkpICE9IG51bGwgPyBzdGFjazEubGFzdFBhZ2VMaW5rRGlzYWJsZWQgOiBzdGFjazEpLCBkZXB0aDApKVxuICAgICsgXCJcXFwiIFxcclxcbiAgICAgICAgICAgICAgICBcIlxuICAgICsgYWxpYXMyKF9fZGVmYXVsdChyZXF1aXJlKFwiQzpcXFxcVGVjaG5pY2FsXFxcXFJlcG9cXFxcR3JpZG9vXFxcXHNyY1xcXFxoYnNcXFxcaGVscGVyc1xcXFxEaXNhYmxlZC50c1wiKSkuY2FsbChhbGlhczMsKChzdGFjazEgPSAoZGVwdGgwICE9IG51bGwgPyBkZXB0aDAucGFnaW5hdGlvbkRhdGEgOiBkZXB0aDApKSAhPSBudWxsID8gc3RhY2sxLmxhc3RQYWdlTGlua0Rpc2FibGVkIDogc3RhY2sxKSx7XCJuYW1lXCI6XCJEaXNhYmxlZFwiLFwiaGFzaFwiOnt9LFwiZGF0YVwiOmRhdGF9KSlcbiAgICArIFwiXFxyXFxuICAgICAgICAgICAgICAgIGFyaWEtbGFiZWw9XFxcIkdvIHRvIHRoZSBsYXN0IHBhZ2VcXFwiIFxcclxcbiAgICAgICAgICAgICAgICB0aXRsZT1cXFwiR28gdG8gdGhlIGxhc3QgcGFnZVxcXCIgXFxyXFxuICAgICAgICAgICAgICAgIGRhdGEtcGFnZT1cXFwiXCJcbiAgICArIGFsaWFzMihhbGlhczEoKChzdGFjazEgPSAoZGVwdGgwICE9IG51bGwgPyBkZXB0aDAucGFnaW5hdGlvbkRhdGEgOiBkZXB0aDApKSAhPSBudWxsID8gc3RhY2sxLm5vT0ZwYWdlcyA6IHN0YWNrMSksIGRlcHRoMCkpXG4gICAgKyBcIlxcXCI+XFxyXFxuICAgICAgICAgICAgPGkgY2xhc3M9XFxcImd1aS1pY29uIGd1aS1pY29uLW5leHRcXFwiPjwvaT5cXHJcXG4gICAgICAgIDwvYnV0dG9uPlxcclxcbiAgICA8L2Rpdj5cXHJcXG48L2Rpdj5cXHJcXG48ZGl2IGNsYXNzPVxcXCJndWkgZ3VpLXN1YmhlYWRpbmctMSBmbGV4IGpjLXNiIHRleHQtcmlnaHQgbS0wXFxcIj5cXHJcXG4gICAgPGxhYmVsICBmb3I9XFxcInBhZ2Utc2l6ZS1zZWxlY3RvclxcXCIgXFxyXFxuICAgICAgICAgICAgY2xhc3M9XFxcImd1aSBtLXItMTBcXFwiPlxcclxcbiAgICAgICAgICAgIFJvd3MgUGVyIFBhZ2VcXHJcXG4gICAgPC9sYWJlbD5cXHJcXG4gICAgPHNlbGVjdCBpZD1cXFwicGFnZS1zaXplLXNlbGVjdG9yXFxcIiBcXHJcXG4gICAgICAgICAgICBjbGFzcz1cXFwiZ3VpIHBhZ2VTaXplU2VsZWN0b3IgbS1yLTEwIGgtMzBcXFwiPlxcclxcblwiXG4gICAgKyAoKHN0YWNrMSA9IGhlbHBlcnMuZWFjaC5jYWxsKGFsaWFzMywoKHN0YWNrMSA9IChkZXB0aDAgIT0gbnVsbCA/IGRlcHRoMC5wYWdpbmF0aW9uRGF0YSA6IGRlcHRoMCkpICE9IG51bGwgPyBzdGFjazEucGFnZVNpemVzIDogc3RhY2sxKSx7XCJuYW1lXCI6XCJlYWNoXCIsXCJoYXNoXCI6e30sXCJmblwiOmNvbnRhaW5lci5wcm9ncmFtKDEsIGRhdGEsIDAsIGJsb2NrUGFyYW1zLCBkZXB0aHMpLFwiaW52ZXJzZVwiOmNvbnRhaW5lci5ub29wLFwiZGF0YVwiOmRhdGF9KSkgIT0gbnVsbCA/IHN0YWNrMSA6IFwiXCIpXG4gICAgKyBcIiAgICA8L3NlbGVjdD5cXHJcXG4gICAgPGRpdiBjbGFzcz1cXFwiZ3VpIG0tci0xMFxcXCI+XFxyXFxuICAgICAgICBcIlxuICAgICsgYWxpYXMyKGFsaWFzMSgoKHN0YWNrMSA9ICgoc3RhY2sxID0gKGRlcHRoMCAhPSBudWxsID8gZGVwdGgwLnBhZ2luYXRpb25EYXRhIDogZGVwdGgwKSkgIT0gbnVsbCA/IHN0YWNrMS5yYW5nZSA6IHN0YWNrMSkpICE9IG51bGwgPyBzdGFjazEubWluIDogc3RhY2sxKSwgZGVwdGgwKSlcbiAgICArIFwiIC0gXCJcbiAgICArIGFsaWFzMihhbGlhczEoKChzdGFjazEgPSAoKHN0YWNrMSA9IChkZXB0aDAgIT0gbnVsbCA/IGRlcHRoMC5wYWdpbmF0aW9uRGF0YSA6IGRlcHRoMCkpICE9IG51bGwgPyBzdGFjazEucmFuZ2UgOiBzdGFjazEpKSAhPSBudWxsID8gc3RhY2sxLm1heCA6IHN0YWNrMSksIGRlcHRoMCkpXG4gICAgKyBcIiBvZiBcIlxuICAgICsgYWxpYXMyKGFsaWFzMSgoKHN0YWNrMSA9IChkZXB0aDAgIT0gbnVsbCA/IGRlcHRoMC5wYWdpbmF0aW9uRGF0YSA6IGRlcHRoMCkpICE9IG51bGwgPyBzdGFjazEudG90YWxDb3VudCA6IHN0YWNrMSksIGRlcHRoMCkpXG4gICAgKyBcIiBpdGVtc1xcclxcbiAgICA8L2Rpdj5cXHJcXG48L2Rpdj5cIjtcbn0sXCJ1c2VEYXRhXCI6dHJ1ZSxcInVzZURlcHRoc1wiOnRydWV9KTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9oYnMvZ3JpZC1mb290ZXIuaGJzXG4vLyBtb2R1bGUgaWQgPSA4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIiwiY29uc3QgbWF0aCA9IChsdmFsdWU6IG51bWJlciwgb3BlcmF0b3I6IHN0cmluZywgcnZhbHVlOiBudW1iZXIsIG9wdGlvbnMpOiBudW1iZXIgPT4ge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBcIitcIjogbHZhbHVlICsgcnZhbHVlLFxyXG4gICAgICAgIFwiLVwiOiBsdmFsdWUgLSBydmFsdWUsXHJcbiAgICAgICAgXCIqXCI6IGx2YWx1ZSAqIHJ2YWx1ZSxcclxuICAgICAgICBcIi9cIjogbHZhbHVlIC8gcnZhbHVlLFxyXG4gICAgICAgIFwiJVwiOiBsdmFsdWUgJSBydmFsdWUsXHJcbiAgICB9W29wZXJhdG9yXTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IG1hdGg7XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy90c2xpbnQtbG9hZGVyPz9yZWYtLTEhLi9zcmMvaGJzL2hlbHBlcnMvbWF0aC50cyIsInZhciBIYW5kbGViYXJzID0gcmVxdWlyZShcImhhbmRsZWJhcnNcIik7XG5mdW5jdGlvbiBfX2RlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgKG9iai5fX2VzTW9kdWxlID8gb2JqW1wiZGVmYXVsdFwiXSA6IG9iaik7IH1cbm1vZHVsZS5leHBvcnRzID0gKEhhbmRsZWJhcnNbXCJkZWZhdWx0XCJdIHx8IEhhbmRsZWJhcnMpLnRlbXBsYXRlKHtcIjFcIjpmdW5jdGlvbihjb250YWluZXIsZGVwdGgwLGhlbHBlcnMscGFydGlhbHMsZGF0YSkge1xuICAgIHZhciBzdGFjazEsIGFsaWFzMT1kZXB0aDAgIT0gbnVsbCA/IGRlcHRoMCA6IChjb250YWluZXIubnVsbENvbnRleHQgfHwge30pLCBhbGlhczI9Y29udGFpbmVyLmVzY2FwZUV4cHJlc3Npb24sIGFsaWFzMz1jb250YWluZXIubGFtYmRhO1xuXG4gIHJldHVybiBcIjx0ciBhcmlhLXJvd2luZGV4PVxcXCJcIlxuICAgICsgYWxpYXMyKF9fZGVmYXVsdChyZXF1aXJlKFwiQzpcXFxcVGVjaG5pY2FsXFxcXFJlcG9cXFxcR3JpZG9vXFxcXHNyY1xcXFxoYnNcXFxcaGVscGVyc1xcXFxBZGQudHNcIikpLmNhbGwoYWxpYXMxLChkZXB0aDAgIT0gbnVsbCA/IGRlcHRoMC5yb3dJbmRleCA6IGRlcHRoMCksMSx7XCJuYW1lXCI6XCJBZGRcIixcImhhc2hcIjp7fSxcImRhdGFcIjpkYXRhfSkpXG4gICAgKyBcIlxcXCIgY2xhc3M9XFxcIm1haW5Sb3cgXCJcbiAgICArIGFsaWFzMihfX2RlZmF1bHQocmVxdWlyZShcIkM6XFxcXFRlY2huaWNhbFxcXFxSZXBvXFxcXEdyaWRvb1xcXFxzcmNcXFxcaGJzXFxcXGhlbHBlcnNcXFxcQm9vbEF0dHJpYnV0ZS50c1wiKSkuY2FsbChhbGlhczEsKGRlcHRoMCAhPSBudWxsID8gZGVwdGgwLmlzQWxsU2VsZWN0ZWQgOiBkZXB0aDApLFwiYWN0aXZlXCIse1wibmFtZVwiOlwiQm9vbEF0dHJpYnV0ZVwiLFwiaGFzaFwiOnt9LFwiZGF0YVwiOmRhdGF9KSlcbiAgICArIFwiXFxcIiBkYXRhLXBrLWF0dHI9XFxcIlwiXG4gICAgKyBhbGlhczIoYWxpYXMzKChkZXB0aDAgIT0gbnVsbCA/IGRlcHRoMC5rZXlDb2x1bW4gOiBkZXB0aDApLCBkZXB0aDApKVxuICAgICsgXCJcXFwiIHJvbGU9XFxcInJvd1xcXCIgPlxcclxcbiAgICA8dGQgY2xhc3M9XFxcImV4cGFuc2lvbkFycm93c1xcXCIgXFxyXFxuICAgICAgICBjbGFzcz1cXFwiZ3VpIGZsZXggamMtc2JcXFwiXFxyXFxuICAgICAgICBhcmlhLWNvbGluZGV4PVxcXCIxXFxcIlxcclxcbiAgICAgICAgcm9sZT1cXFwiZ3JpZGNlbGxcXFwiPlxcclxcbiAgICAgICAgPGkgYXJpYS1sYWJlbD1cXFwiUHJlc3MgZW50ZXIgdG8gZXhwYW5kIHRoZSBkZXRhaWxzIFJvd1xcXCIgXFxyXFxuICAgICAgICAgICB0aXRsZT1cXFwiRXhwYW5kIHRoZSBkZXRhaWxzIFJvd1xcXCIgXFxyXFxuICAgICAgICAgICBhcmlhLWNvbnRyb2xzPVxcXCJkZXRhaWxzLXJvdy1cIlxuICAgICsgYWxpYXMyKGFsaWFzMygoZGF0YSAmJiBkYXRhLmluZGV4KSwgZGVwdGgwKSlcbiAgICArIFwiXFxcIiBcXHJcXG4gICAgICAgICAgIGNsYXNzPVxcXCJndWkgZ3VpLWljb24gZ3VpLWljb24tY2hldnJvbi1kb3duIGV4cGFuZERldGFpbHNSb3dJY29uIGN1cnNvci1wb2ludGVyXFxcIiBcXHJcXG4gICAgICAgICAgIHRhYmluZGV4PVxcXCIwXFxcIiBcXHJcXG4gICAgICAgICAgIGFyaWEtaGlkZGVuPVxcXCJmYWxzZVxcXCI+PC9pPlxcclxcbiAgICAgICAgPGkgYXJpYS1sYWJlbD1cXFwiUHJlc3MgZW50ZXIgdG8gY29sbGFwc2UgdGhlIGRldGFpbHMgUm93XFxcIiBcXHJcXG4gICAgICAgICAgIHRpdGxlPVxcXCJDb2xsYXBzZSB0aGUgZGV0YWlscyBSb3dcXFwiIFxcclxcbiAgICAgICAgICAgYXJpYS1jb250cm9scz1cXFwiZGV0YWlscy1yb3ctXCJcbiAgICArIGFsaWFzMihhbGlhczMoKGRhdGEgJiYgZGF0YS5pbmRleCksIGRlcHRoMCkpXG4gICAgKyBcIlxcXCIgXFxyXFxuICAgICAgICAgICBjbGFzcz1cXFwiZ3VpIGd1aS1pY29uIGd1aS1pY29uLWNoZXZyb24tdXAgQ29sbGFwc2VEZXRhaWxzUm93SWNvbiBjdXJzb3ItcG9pbnRlciBndWktaGlkZGVuXFxcIiBcXHJcXG4gICAgICAgICAgIHRhYmluZGV4PVxcXCIwXFxcIiBcXHJcXG4gICAgICAgICAgIGFyaWEtaGlkZGVuPVxcXCJ0cnVlXFxcIj48L2k+XFxyXFxuICAgIDwvdGQ+XFxyXFxuICAgIDx0ZCByb2xlPVxcXCJncmlkY2VsbFxcXCJcXHJcXG4gICAgICAgIGFyaWEtY29saW5kZXg9XFxcIjJcXFwiID5cXHJcXG4gICAgICAgIDxpbnB1dCBhcmlhLWxhYmVsPVxcXCJDaGVja2JveCB0byBzZWxlY3QgdGhlIHJvdyB3aXRoIElkIFwiXG4gICAgKyBhbGlhczIoYWxpYXMzKChkZXB0aDAgIT0gbnVsbCA/IGRlcHRoMC5rZXlDb2x1bW4gOiBkZXB0aDApLCBkZXB0aDApKVxuICAgICsgXCJcXFwiIFxcclxcbiAgICAgICAgICAgIHR5cGU9XFxcImNoZWNrYm94XFxcIlxcclxcbiAgICAgICAgICAgIFwiXG4gICAgKyBhbGlhczIoX19kZWZhdWx0KHJlcXVpcmUoXCJDOlxcXFxUZWNobmljYWxcXFxcUmVwb1xcXFxHcmlkb29cXFxcc3JjXFxcXGhic1xcXFxoZWxwZXJzXFxcXEJvb2xBdHRyaWJ1dGUudHNcIikpLmNhbGwoYWxpYXMxLChkZXB0aDAgIT0gbnVsbCA/IGRlcHRoMC5pc0FsbFNlbGVjdGVkIDogZGVwdGgwKSxcImNoZWNrZWRcIix7XCJuYW1lXCI6XCJCb29sQXR0cmlidXRlXCIsXCJoYXNoXCI6e30sXCJkYXRhXCI6ZGF0YX0pKVxuICAgICsgXCJcXHJcXG4gICAgICAgICAgICB2YWx1ZT1cXFwiXCJcbiAgICArIGFsaWFzMihhbGlhczMoKGRlcHRoMCAhPSBudWxsID8gZGVwdGgwLmtleUNvbHVtbiA6IGRlcHRoMCksIGRlcHRoMCkpXG4gICAgKyBcIlxcXCIgXFxyXFxuICAgICAgICAgICAgY2xhc3M9XFxcInNlbGVjdC1rZXktY2hlY2tib3ggY3Vyc29yLXBvaW50ZXJcXFwiPlxcclxcbiAgICA8L3RkPlxcclxcblwiXG4gICAgKyAoKHN0YWNrMSA9IGhlbHBlcnMuZWFjaC5jYWxsKGFsaWFzMSwoZGVwdGgwICE9IG51bGwgPyBkZXB0aDAubWFpblJvd0NvbEFycmF5IDogZGVwdGgwKSx7XCJuYW1lXCI6XCJlYWNoXCIsXCJoYXNoXCI6e30sXCJmblwiOmNvbnRhaW5lci5wcm9ncmFtKDIsIGRhdGEsIDApLFwiaW52ZXJzZVwiOmNvbnRhaW5lci5ub29wLFwiZGF0YVwiOmRhdGF9KSkgIT0gbnVsbCA/IHN0YWNrMSA6IFwiXCIpXG4gICAgKyBcIjwvdHI+XFxyXFxuXCJcbiAgICArICgoc3RhY2sxID0gY29udGFpbmVyLmludm9rZVBhcnRpYWwocmVxdWlyZShcIkM6XFxcXFRlY2huaWNhbFxcXFxSZXBvXFxcXEdyaWRvb1xcXFxzcmNcXFxcaGJzXFxcXGdyaWQtZGV0YWlscy1yb3cuaGJzXCIpLGRlcHRoMCx7XCJuYW1lXCI6XCJncmlkLWRldGFpbHMtcm93XCIsXCJkYXRhXCI6ZGF0YSxcImhlbHBlcnNcIjpoZWxwZXJzLFwicGFydGlhbHNcIjpwYXJ0aWFscyxcImRlY29yYXRvcnNcIjpjb250YWluZXIuZGVjb3JhdG9yc30pKSAhPSBudWxsID8gc3RhY2sxIDogXCJcIik7XG59LFwiMlwiOmZ1bmN0aW9uKGNvbnRhaW5lcixkZXB0aDAsaGVscGVycyxwYXJ0aWFscyxkYXRhKSB7XG4gICAgdmFyIHN0YWNrMSwgYWxpYXMxPWNvbnRhaW5lci5sYW1iZGEsIGFsaWFzMj1jb250YWluZXIuZXNjYXBlRXhwcmVzc2lvbjtcblxuICByZXR1cm4gXCIgICAgICAgIDx0ZCB0aXRsZT1cXFwiXCJcbiAgICArIGFsaWFzMihhbGlhczEoKGRlcHRoMCAhPSBudWxsID8gZGVwdGgwLmFjdHVhbFZhbHVlIDogZGVwdGgwKSwgZGVwdGgwKSlcbiAgICArIFwiXFxcIlxcclxcbiAgICAgICAgICAgIGFyaWEtY29saW5kZXg9XFxcIlwiXG4gICAgKyBhbGlhczIoX19kZWZhdWx0KHJlcXVpcmUoXCJDOlxcXFxUZWNobmljYWxcXFxcUmVwb1xcXFxHcmlkb29cXFxcc3JjXFxcXGhic1xcXFxoZWxwZXJzXFxcXEFkZC50c1wiKSkuY2FsbChkZXB0aDAgIT0gbnVsbCA/IGRlcHRoMCA6IChjb250YWluZXIubnVsbENvbnRleHQgfHwge30pLChkYXRhICYmIGRhdGEuaW5kZXgpLDMse1wibmFtZVwiOlwiQWRkXCIsXCJoYXNoXCI6e30sXCJkYXRhXCI6ZGF0YX0pKVxuICAgICsgXCJcXFwiXFxyXFxuICAgICAgICAgICAgY2xhc3M9XFxcImJvZHktXCJcbiAgICArIGFsaWFzMihhbGlhczEoKGRlcHRoMCAhPSBudWxsID8gZGVwdGgwLmlkIDogZGVwdGgwKSwgZGVwdGgwKSlcbiAgICArIFwiXFxcIj5cIlxuICAgICsgKChzdGFjazEgPSBhbGlhczEoKGRlcHRoMCAhPSBudWxsID8gZGVwdGgwLmNvbHVtblZhbHVlIDogZGVwdGgwKSwgZGVwdGgwKSkgIT0gbnVsbCA/IHN0YWNrMSA6IFwiXCIpXG4gICAgKyBcIjwvdGQ+XFxyXFxuXCI7XG59LFwiY29tcGlsZXJcIjpbNyxcIj49IDQuMC4wXCJdLFwibWFpblwiOmZ1bmN0aW9uKGNvbnRhaW5lcixkZXB0aDAsaGVscGVycyxwYXJ0aWFscyxkYXRhKSB7XG4gICAgdmFyIHN0YWNrMTtcblxuICByZXR1cm4gKChzdGFjazEgPSBoZWxwZXJzLmVhY2guY2FsbChkZXB0aDAgIT0gbnVsbCA/IGRlcHRoMCA6IChjb250YWluZXIubnVsbENvbnRleHQgfHwge30pLChkZXB0aDAgIT0gbnVsbCA/IGRlcHRoMC5tYWluUm93QXJyYXkgOiBkZXB0aDApLHtcIm5hbWVcIjpcImVhY2hcIixcImhhc2hcIjp7fSxcImZuXCI6Y29udGFpbmVyLnByb2dyYW0oMSwgZGF0YSwgMCksXCJpbnZlcnNlXCI6Y29udGFpbmVyLm5vb3AsXCJkYXRhXCI6ZGF0YX0pKSAhPSBudWxsID8gc3RhY2sxIDogXCJcIik7XG59LFwidXNlUGFydGlhbFwiOnRydWUsXCJ1c2VEYXRhXCI6dHJ1ZX0pO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2hicy9ncmlkLW1haW4tcm93Lmhic1xuLy8gbW9kdWxlIGlkID0gMTBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEiLCJjb25zdCBib29sQXR0cmlidXRlID0gKGJvb2w6IGJvb2xlYW4sIHN0cjogc3RyaW5nKTogc3RyaW5nID0+IHtcclxuICAgIHJldHVybiBib29sID8gc3RyIDogXCJcIjtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGJvb2xBdHRyaWJ1dGU7XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy90c2xpbnQtbG9hZGVyPz9yZWYtLTEhLi9zcmMvaGJzL2hlbHBlcnMvQm9vbEF0dHJpYnV0ZS50cyIsImltcG9ydCAqIGFzIGpRdWVyeSBmcm9tIFwianF1ZXJ5XCI7XHJcbmltcG9ydCB7IENvbmZpZ1N0b3JlIH0gZnJvbSBcIi4uL2NvbmZpZy9Db25maWdTdG9yZVwiO1xyXG5pbXBvcnQgeyBDb2xTZXR0aW5nc0hhbmRsZXIgfSBmcm9tIFwiLi4vZXZlbnRIYW5kbGVycy9Db2xTZXR0aW5nc0hhbmRsZXJcIjtcclxuaW1wb3J0IHsgU2VsZWN0RXZlbnRIYW5kbGVyIH0gZnJvbSBcIi4uL2V2ZW50SGFuZGxlcnMvU2VsZWN0RXZlbnRIYW5kbGVyXCI7XHJcbmltcG9ydCB7IElHcmlkT3JkZXIgfSBmcm9tIFwiLi4vbW9kZWxzL0lHcmlkT3JkZXJcIjtcclxuaW1wb3J0IHsgSVBhZ2luYXRpb24gfSBmcm9tIFwiLi4vbW9kZWxzL0lQYWdpbmF0aW9uXCI7XHJcbmltcG9ydCB7IElQYWdpbmF0aW9uSW5wdXQgfSBmcm9tIFwiLi4vbW9kZWxzL0lQYWdpbmF0aW9uSW5wdXRcIjtcclxuaW1wb3J0IHsgUGFnZXIgfSBmcm9tIFwiLi4vcGFnaW5hdGlvbi9QYWdlclwiO1xyXG5pbXBvcnQgeyBEZXRhaWxzUm93SGFuZGxlciB9IGZyb20gXCIuLy4uL2V2ZW50SGFuZGxlcnMvRGV0YWlsc1Jvd0hhbmRsZXJcIjtcclxuaW1wb3J0IHsgRmlsdGVyQ2xpY2tIYW5kbGVyIH0gZnJvbSBcIi4vLi4vZXZlbnRIYW5kbGVycy9GaWx0ZXJDbGlja0hhbmRsZXJcIjtcclxuaW1wb3J0IHsgSGFuZGxlck5hbWVzIH0gZnJvbSBcIi4vLi4vZXZlbnRIYW5kbGVycy9IYW5kbGVyTmFtZXNcIjtcclxuaW1wb3J0IHsgSGVhZGVyQ2xpY2tIYW5kbGVyIH0gZnJvbSBcIi4vLi4vZXZlbnRIYW5kbGVycy9IZWFkZXJDbGlja0hhbmRsZXJcIjtcclxuaW1wb3J0IHsgSUV2ZW50SGFuZGxlciB9IGZyb20gXCIuLy4uL2V2ZW50SGFuZGxlcnMvSUV2ZW50SGFuZGxlclwiO1xyXG5pbXBvcnQgeyBJSGFuZGxlckNoYWluIH0gZnJvbSBcIi4vLi4vZXZlbnRIYW5kbGVycy9JSGFuZGxlckNoYWluXCI7XHJcbmltcG9ydCB7IFBhZ2VTZWFyY2hIYW5kbGVyIH0gZnJvbSBcIi4vLi4vZXZlbnRIYW5kbGVycy9QYWdlU2VhcmNoQ2xpY2tIYW5kbGVyXCI7XHJcbmltcG9ydCB7IFNjcm9sbEhhbmRsZXIgfSBmcm9tIFwiLi8uLi9ldmVudEhhbmRsZXJzL1Njcm9sbEhhbmRsZXJcIjtcclxuaW1wb3J0IHsgVG9nZ2xlQ29sdW1uSGFuZGxlciB9IGZyb20gXCIuLy4uL2V2ZW50SGFuZGxlcnMvVG9nZ2xlQ29sdW1uSGFuZGxlclwiO1xyXG5pbXBvcnQgeyBGaWx0ZXJBY3Rpb25UeXBlIH0gZnJvbSBcIi4vLi4vbW9kZWxzL0ZpbHRlckFjdGlvblR5cGVcIjtcclxuaW1wb3J0IHsgR3JpZE9yZGVyRGlyZWN0aW9uIH0gZnJvbSBcIi4vLi4vbW9kZWxzL0dyaWRPcmRlckRpcmVjdGlvblwiO1xyXG5pbXBvcnQgeyBJQ29sdW1uIH0gZnJvbSBcIi4vLi4vbW9kZWxzL0lDb2x1bW5cIjtcclxuaW1wb3J0IHsgR3JpZFRlbXBsYXRlU2VydmljZSB9IGZyb20gXCIuLy4uL3NlcnZpY2VzL0dyaWRUZW1wbGF0ZVNlcnZpY2VcIjtcclxuaW1wb3J0IHsgQ29tbW9uVXRpbCB9IGZyb20gXCIuLy4uL3V0aWwvQ29sdW1uVXRpbFwiO1xyXG5pbXBvcnQgeyBJR3JpZE9wdGlvbnMgfSBmcm9tIFwiLi9JR3JpZE9wdGlvbnNcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBHcmlkPFQ+IHtcclxuXHJcbiAgICBwcml2YXRlIGhhbmRsZUNoYWluOiBBcnJheTxJSGFuZGxlckNoYWluPFQ+PjtcclxuICAgIHByaXZhdGUgZ3JpZFRlbXBsYXRlU2VydmljZTogR3JpZFRlbXBsYXRlU2VydmljZTxUPjtcclxuICAgIHByaXZhdGUgY29uZmlnU3RvcmU6IENvbmZpZ1N0b3JlPFQ+O1xyXG4gICAgcHJpdmF0ZSB0b2dnbGVIYW5kbGVyOiBUb2dnbGVDb2x1bW5IYW5kbGVyPFQ+O1xyXG4gICAgcHJpdmF0ZSBzY3JvbGxIYW5kbGVyOiBTY3JvbGxIYW5kbGVyPFQ+O1xyXG4gICAgcHJpdmF0ZSBtYW5hZ2VDb2xIYW5kbGVyOiBDb2xTZXR0aW5nc0hhbmRsZXI8VD47XHJcblxyXG4gICAgY29uc3RydWN0b3Iob3B0aW9uczogSUdyaWRPcHRpb25zPFQ+KSB7XHJcbiAgICAgICAgdGhpcy5jb25maWdTdG9yZSA9IG5ldyBDb25maWdTdG9yZTxUPihvcHRpb25zKTtcclxuICAgICAgICB0aGlzLmdyaWRUZW1wbGF0ZVNlcnZpY2UgPSBuZXcgR3JpZFRlbXBsYXRlU2VydmljZSh0aGlzLmNvbmZpZ1N0b3JlKTtcclxuICAgICAgICB0aGlzLkluaXRIYW5kbGVycygpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBiaW5kRGF0YSA9IChkYXRhOiBUW10sIHBhZ2luYXRpb25JbnB1dD86IElQYWdpbmF0aW9uSW5wdXQpOiB2b2lkID0+IHtcclxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgUGFnZXIuQ2FsY3VsYXRlUGFnaW5hdGlvbkRhdGEocGFnaW5hdGlvbklucHV0KTtcclxuICAgICAgICAgICAgY29uc3QgcGFnZURhdGEgPSBQYWdlci5wYWdpbmF0aW9uRGF0YTtcclxuICAgICAgICAgICAgdGhpcy5pbnRlcm5hbFJlbmRlcihkYXRhLCBwYWdlRGF0YSk7XHJcbiAgICAgICAgfSwgMSApO1xyXG4gICAgfVxyXG4gICAgcHVibGljIHJlUmVuZGVyID0gKCk6IHZvaWQgPT4ge1xyXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBwYWdlRGF0YSA9IFBhZ2VyLnBhZ2luYXRpb25EYXRhO1xyXG4gICAgICAgICAgICB0aGlzLmludGVybmFsUmVuZGVyKHRoaXMuZ3JpZFRlbXBsYXRlU2VydmljZS5EYXRhLCBwYWdlRGF0YSk7XHJcbiAgICAgICAgfSwgMSApO1xyXG4gICAgfVxyXG4gICAgcHVibGljIHNldENvbENvbmZpZyA9IChjb2xDb25maWc6IElDb2x1bW5bXSk6IHZvaWQgPT4ge1xyXG4gICAgICAgIHRoaXMuY29uZmlnU3RvcmUuT3B0aW9ucy5jb2x1bW5zID0gY29sQ29uZmlnO1xyXG4gICAgfVxyXG4gICAgLy8gVE9ETzogVXBkYXRlIFJvdyBJbmRleFxyXG4gICAgcHVibGljIHVwZGF0ZVJvd3MgPSAocm93czogVFtdKSA9PiB7XHJcbiAgICAgICAgaWYgKCByb3dzID09PSB1bmRlZmluZWQgfHwgIXJvd3MubGVuZ3RoICkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuZ3JpZFRlbXBsYXRlU2VydmljZS51cGRhdGVSb3dzKHJvd3MpO1xyXG4gICAgICAgIGNvbnN0IGNvbnRhaW5lciA9ICQodGhpcy5jb25maWdTdG9yZS5PcHRpb25zLmNvbnRhaW5lckVsZW1lbnQpO1xyXG4gICAgICAgIGNvbnN0IGtleSA9IHRoaXMuY29uZmlnU3RvcmUuT3B0aW9ucy5rZXlDb2x1bW47XHJcbiAgICAgICAgZm9yIChjb25zdCByb3cgb2Ygcm93cykge1xyXG4gICAgICAgICAgICBjb25zdCByb3dIdG1sID0gdGhpcy5ncmlkVGVtcGxhdGVTZXJ2aWNlLmdldFRlbXBsYXRlRm9yT25lUm93KHJvdyk7XHJcbiAgICAgICAgICAgIGNvbnN0IHJvd0pxID0gJChyb3dIdG1sKTtcclxuICAgICAgICAgICAgY29udGFpbmVyLmZpbmQoXCIubWFpblJvd1wiKS5lYWNoKChpOiBudW1iZXIsIG1SOiBFbGVtZW50KSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBtckpxID0gJChtUik7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBwa0lkID0gbXJKcS5hdHRyKFwiZGF0YS1way1hdHRyXCIpO1xyXG4gICAgICAgICAgICAgICAgaWYgKCBwa0lkID09PSByb3dba2V5XSkge1xyXG4gICAgICAgICAgICAgICAgICAgIG1ySnEuaHRtbChyb3dKcVswXS5pbm5lckhUTUwpO1xyXG4gICAgICAgICAgICAgICAgICAgIG1ySnEubmV4dCgpLmh0bWwocm93SnFbMl0uaW5uZXJIVE1MKTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC8vIHB1YmxpYyBiaW5kTWFuYWdlQ29sdW1zID0gKG1hbmFnZUNvbENvbnRhaW5lcj86IEhUTUxFbGVtZW50LCBmb3JjZT86IGJvb2xlYW4pOiB2b2lkID0+IHtcclxuICAgIC8vICAgICBpZiAodGhpcy5tYW5hZ2VDb2xIYW5kbGVyICE9PSB1bmRlZmluZWQgJiYgIWZvcmNlICkge1xyXG4gICAgLy8gICAgICAgICByZXR1cm47XHJcbiAgICAvLyAgICAgfVxyXG4gICAgLy8gICAgIGNvbnN0IGh0bWwgPSB0aGlzLmdyaWRUZW1wbGF0ZVNlcnZpY2UuR2V0TWFuYWdlQ29sdW1uc0h0bWwoKTtcclxuICAgIC8vICAgICBjb25zdCBlbGVtZW50ID0galF1ZXJ5KG1hbmFnZUNvbENvbnRhaW5lclxyXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICB8fCB0aGlzLmNvbmZpZ1N0b3JlLk9wdGlvbnMubWFuYWdlQ29sU2V0dGluZ3NDb250YWluZXJcclxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgfHwgdGhpcy5jb25maWdTdG9yZS5PcHRpb25zLmNvbnRhaW5lckVsZW1lbnQpO1xyXG4gICAgLy8gICAgIHRoaXMudG9nZ2xlSGFuZGxlciA9IG5ldyBUb2dnbGVDb2x1bW5IYW5kbGVyKHRoaXMuY29uZmlnU3RvcmUsXHJcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgalF1ZXJ5KHRoaXMuY29uZmlnU3RvcmUuT3B0aW9ucy5jb250YWluZXJFbGVtZW50KSk7XHJcbiAgICAvLyAgICAgdGhpcy5jb25maWdTdG9yZS5vcHRpb25zLm1hbmFnZUNvbFNldHRpbmdzQ29udGFpbmVyID0gZWxlbWVudFswXTtcclxuICAgIC8vICAgICB0aGlzLm1hbmFnZUNvbEhhbmRsZXIgPSBuZXcgQ29sU2V0dGluZ3NIYW5kbGVyPFQ+KGpRdWVyeShlbGVtZW50KSwgdGhpcy5jb25maWdTdG9yZSwgdGhpcy50b2dnbGVIYW5kbGVyKTtcclxuICAgIC8vICAgICBlbGVtZW50LmZpbmQoXCIuY29sLXNldHRpbmdzLWNvbnRhaW5lclwiKS5odG1sKGh0bWwpO1xyXG4gICAgLy8gICAgIHRoaXMubWFuYWdlQ29sSGFuZGxlci5SZWdpc3RlckRvbUhhbmRsZXIoKTtcclxuICAgIC8vICAgICBqUXVlcnkod2luZG93KS5yZXNpemUodGhpcy5kb2N1bWVudFJlc2l6ZUhhbmRsZXJGb3JDcyk7XHJcbiAgICAvLyAgICAgalF1ZXJ5KGRvY3VtZW50KS5jbGljayh0aGlzLmRvY3VtZW50Q2xpY2tIYW5kbGVyRm9yQ3MpO1xyXG4gICAgLy8gfVxyXG4gICAgLy8gcHVibGljIGFwcGx5Q29sdW1uQ29uZmlnID0gKGNvbHVtbnM6IElDb2x1bW5bXSkgPT4ge1xyXG4gICAgLy8gICAgIHRoaXMudG9nZ2xlSGFuZGxlci5hcHBseUNvbHVtbkNvbmZpZyhjb2x1bW5zKTtcclxuICAgIC8vICAgICBjb25zdCBodG1sID0gdGhpcy5ncmlkVGVtcGxhdGVTZXJ2aWNlLkdldE1hbmFnZUNvbHVtbnNIdG1sKCk7XHJcbiAgICAvLyAgICAgY29uc3QgZWxlbWVudCA9IGpRdWVyeSh0aGlzLmNvbmZpZ1N0b3JlLk9wdGlvbnMubWFuYWdlQ29sU2V0dGluZ3NDb250YWluZXJcclxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgfHwgdGhpcy5jb25maWdTdG9yZS5PcHRpb25zLmNvbnRhaW5lckVsZW1lbnQpO1xyXG4gICAgLy8gICAgIGVsZW1lbnQuZmluZChcIi5jb2wtc2V0dGluZ3MtY29udGFpbmVyXCIpLmh0bWwoaHRtbCk7XHJcbiAgICAvLyB9XHJcblxyXG4gICAgcHVibGljIHNldE9yZGVyID0gKG9yZGVyQnlMaXN0OiBJR3JpZE9yZGVyW10pID0+IHtcclxuICAgICAgICBmb3IgKGNvbnN0IGNvbCBvZiB0aGlzLmNvbmZpZ1N0b3JlLk9wdGlvbnMuY29sdW1ucykge1xyXG4gICAgICAgICAgICBjb2wub3JkZXJCeSA9IHVuZGVmaW5lZDtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKG9yZGVyQnlMaXN0ID09PSB1bmRlZmluZWQgfHwgb3JkZXJCeUxpc3QgPT09IG51bGwgfHwgb3JkZXJCeUxpc3QubGVuZ3RoID09PSAwICkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZvciAoY29uc3Qgb3JkZXJDb2wgb2Ygb3JkZXJCeUxpc3QpIHtcclxuICAgICAgICAgICAgZm9yIChjb25zdCBjb2wgb2YgdGhpcy5jb25maWdTdG9yZS5PcHRpb25zLmNvbHVtbnMpIHtcclxuICAgICAgICAgICAgICAgIGlmIChvcmRlckNvbC5jb2xJZCA9PT0gY29sLmlkICkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbC5vcmRlckJ5ID0gb3JkZXJDb2wub3JkZXJCeTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZGVzdHJveSA9ICgpID0+IHtcclxuICAgICAgICBjb25zdCBwYXJlbnRFbGVtZW50ID0galF1ZXJ5KHRoaXMuY29uZmlnU3RvcmUuT3B0aW9ucy5jb250YWluZXJFbGVtZW50KTtcclxuICAgICAgICBpZiAoIHBhcmVudEVsZW1lbnQgIT09IHVuZGVmaW5lZCApIHtcclxuICAgICAgICAgICAgcGFyZW50RWxlbWVudC5vZmYoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gY29uc3QgbWFuYWdlQ29udGFpbmVyRWxlbWVudCA9IGpRdWVyeSh0aGlzLmNvbmZpZ1N0b3JlLk9wdGlvbnMubWFuYWdlQ29sU2V0dGluZ3NDb250YWluZXIpO1xyXG4gICAgICAgIC8vIGlmICggbWFuYWdlQ29udGFpbmVyRWxlbWVudCAhPT0gdW5kZWZpbmVkICkge1xyXG4gICAgICAgIC8vICAgICBtYW5hZ2VDb250YWluZXJFbGVtZW50Lm9mZigpO1xyXG4gICAgICAgIC8vIH1cclxuICAgICAgICAkKHdpbmRvdykub2ZmKFwicmVzaXplXCIsIHRoaXMuZG9jdW1lbnRSZXNpemVIYW5kbGVyKTtcclxuICAgICAgICAkKGRvY3VtZW50KS5vZmYoXCJjbGlja1wiLCB0aGlzLmRvY3VtZW50Q2xpY2tIYW5kbGVyKTtcclxuICAgICAgICAkKHdpbmRvdykub2ZmKFwicmVzaXplXCIsIHRoaXMuZG9jdW1lbnRSZXNpemVIYW5kbGVyRm9yQ3MpO1xyXG4gICAgICAgICQoZG9jdW1lbnQpLm9mZihcImNsaWNrXCIsIHRoaXMuZG9jdW1lbnRDbGlja0hhbmRsZXJGb3JDcyk7XHJcbiAgICAgICAgaWYgKCB0aGlzLnNjcm9sbEhhbmRsZXIgIT09IHVuZGVmaW5lZCApIHtcclxuICAgICAgICAgICAgLy8gdGhpcy5zY3JvbGxIYW5kbGVyLnVuV2F0Y2hXaWR0aCgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHByaXZhdGUgaW50ZXJuYWxSZW5kZXIgPSAoZGF0YTogVFtdLCBwYWdpbmF0aW9uSW5wdXQ/OiBJUGFnaW5hdGlvbklucHV0KTogdm9pZCA9PiB7XHJcbiAgICAgICAgY29uc3QgZmlyc3RJbmRleCA9IDA7XHJcbiAgICAgICAgbGV0IGxhc3RJbmRleCA9IHRoaXMuY29uZmlnU3RvcmUuT3B0aW9ucy5jaHVua1NpemUgKyB0aGlzLmdldEluaXRpYWxSb3dDb3VudCgpO1xyXG4gICAgICAgIGxhc3RJbmRleCA9IGxhc3RJbmRleCA+PSBkYXRhLmxlbmd0aCA/IGRhdGEubGVuZ3RoIC0gMSA6IGxhc3RJbmRleDtcclxuICAgICAgICBjb25zdCBncmlkQ29udGVudDogc3RyaW5nID0gdGhpcy5ncmlkVGVtcGxhdGVTZXJ2aWNlLkdldEZpcnN0VGVtcGxhdGUoZGF0YSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlyc3RJbmRleCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFzdEluZGV4LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgIHRoaXMuY29uZmlnU3RvcmUuT3B0aW9ucy5jb250YWluZXJFbGVtZW50LmlubmVySFRNTCA9IGdyaWRDb250ZW50O1xyXG4gICAgICAgIGlmICggdGhpcy5zY3JvbGxIYW5kbGVyICE9PSB1bmRlZmluZWQgJiYgdGhpcy5zY3JvbGxIYW5kbGVyICE9PSBudWxsICkge1xyXG4gICAgICAgICAgICB0aGlzLnNjcm9sbEhhbmRsZXIucmVtb3ZlSGFuZGxlcigpO1xyXG4gICAgICAgICAgICB0aGlzLnNjcm9sbEhhbmRsZXIucmVzZXRQYXJlbnRPZmZzZXQoKTtcclxuICAgICAgICAgICAgdGhpcy5zY3JvbGxIYW5kbGVyLnNldEN1cnJlbnRJbmRleChsYXN0SW5kZXggKyAxICk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5zY3JvbGxIYW5kbGVyID0gbmV3IFNjcm9sbEhhbmRsZXI8VD4odGhpcy5jb25maWdTdG9yZSwgdGhpcy5ncmlkVGVtcGxhdGVTZXJ2aWNlLCBsYXN0SW5kZXggKyAxKTtcclxuICAgICAgICAgICAgLy8gdGhpcy5zY3JvbGxIYW5kbGVyLndhdGNoV2lkdGgoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5zY3JvbGxIYW5kbGVyLlJlZ2lzdGVyRG9tSGFuZGxlcigpO1xyXG4gICAgICAgIHRoaXMuc2V0Rm9jdXNUb0xhc3RFbGVtZW50KCk7XHJcbiAgICB9XHJcbiAgICBwcml2YXRlIGdldEluaXRpYWxSb3dDb3VudCA9ICgpOiBudW1iZXIgPT4ge1xyXG4gICAgICAgIHJldHVybiBNYXRoLmZsb29yKChqUXVlcnkod2luZG93KS5pbm5lckhlaWdodCgpICogMC42NSApIC8gMzIpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgSW5pdEhhbmRsZXJzID0gKCk6IHZvaWQgPT4ge1xyXG4gICAgICAgIGNvbnN0IHBhcmVudEVsZW1lbnQgPSBqUXVlcnkodGhpcy5jb25maWdTdG9yZS5PcHRpb25zLmNvbnRhaW5lckVsZW1lbnQpO1xyXG4gICAgICAgIHRoaXMuaGFuZGxlQ2hhaW4gPSBbXTtcclxuICAgICAgICB0aGlzLmhhbmRsZUNoYWluLnB1c2goe1xyXG4gICAgICAgICAgICBoYW5kbGVyOiBuZXcgRGV0YWlsc1Jvd0hhbmRsZXI8VD4odGhpcy5jb25maWdTdG9yZSwgcGFyZW50RWxlbWVudCksXHJcbiAgICAgICAgICAgIG5hbWU6IEhhbmRsZXJOYW1lcy5EZXRhaWxzUm93LFxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMuaGFuZGxlQ2hhaW4ucHVzaCh7XHJcbiAgICAgICAgICAgIGhhbmRsZXI6ICBuZXcgRmlsdGVyQ2xpY2tIYW5kbGVyPFQ+KHRoaXMuY29uZmlnU3RvcmUsIHBhcmVudEVsZW1lbnQpLFxyXG4gICAgICAgICAgICBuYW1lOiBIYW5kbGVyTmFtZXMuRmlsdGVyQWN0aW9uLFxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMuaGFuZGxlQ2hhaW4ucHVzaCh7XHJcbiAgICAgICAgICAgIGhhbmRsZXI6IG5ldyBIZWFkZXJDbGlja0hhbmRsZXI8VD4odGhpcy5jb25maWdTdG9yZSwgcGFyZW50RWxlbWVudCksXHJcbiAgICAgICAgICAgIG5hbWU6IEhhbmRsZXJOYW1lcy5IZWFkZXJDbGljayxcclxuICAgICAgICB9KTtcclxuICAgICAgICB0aGlzLmhhbmRsZUNoYWluLnB1c2goe1xyXG4gICAgICAgICAgICBoYW5kbGVyOiBuZXcgUGFnZVNlYXJjaEhhbmRsZXI8VD4odGhpcy5jb25maWdTdG9yZSwgcGFyZW50RWxlbWVudCksXHJcbiAgICAgICAgICAgIG5hbWU6IEhhbmRsZXJOYW1lcy5QYWdlU2VhcmNoLFxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGNvbnN0IGNvbnRhaW5lciA9IHBhcmVudEVsZW1lbnQ7XHJcbiAgICAgICAgdGhpcy5oYW5kbGVDaGFpbi5wdXNoKHtcclxuICAgICAgICAgICAgaGFuZGxlcjogbmV3IFNlbGVjdEV2ZW50SGFuZGxlcjxUPih0aGlzLmNvbmZpZ1N0b3JlLCBwYXJlbnRFbGVtZW50LCB0aGlzLmdyaWRUZW1wbGF0ZVNlcnZpY2UpLFxyXG4gICAgICAgICAgICBuYW1lOiBIYW5kbGVyTmFtZXMuQ29sU2V0dGluZ3MsXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy5oYW5kbGVDaGFpbi5mb3JFYWNoKCh2YWx1ZTogSUhhbmRsZXJDaGFpbjxUPik6IHZvaWQgPT4ge1xyXG4gICAgICAgICAgICB2YWx1ZS5oYW5kbGVyLlJlZ2lzdGVyRG9tSGFuZGxlcigpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGpRdWVyeSh3aW5kb3cpLnJlc2l6ZSh0aGlzLmRvY3VtZW50UmVzaXplSGFuZGxlcik7XHJcbiAgICAgICAgalF1ZXJ5KGRvY3VtZW50KS5jbGljayh0aGlzLmRvY3VtZW50Q2xpY2tIYW5kbGVyKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGRvY3VtZW50UmVzaXplSGFuZGxlckZvckNzID0gKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgdGhpcy5tYW5hZ2VDb2xIYW5kbGVyLm9uUmVzaXplKCk7XHJcbiAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICB9XHJcbiAgICBwcml2YXRlIGRvY3VtZW50Q2xpY2tIYW5kbGVyRm9yQ3MgPSAoZXZlbnQpID0+IHtcclxuICAgICAgICB0aGlzLm1hbmFnZUNvbEhhbmRsZXIub25Eb2N1bWVudENsaWNrKGV2ZW50KTtcclxuICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgIH1cclxuICAgIHByaXZhdGUgZG9jdW1lbnRSZXNpemVIYW5kbGVyRm9yU2Nyb2xsID0gKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgdGhpcy5tYW5hZ2VDb2xIYW5kbGVyLm9uUmVzaXplKCk7XHJcbiAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICB9XHJcbiAgICBwcml2YXRlIGRvY3VtZW50Q2xpY2tIYW5kbGVyID0gKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgdGhpcy5oYW5kbGVDaGFpbi5mb3JFYWNoKCh2YWx1ZTogSUhhbmRsZXJDaGFpbjxUPik6IHZvaWQgPT4ge1xyXG4gICAgICAgICAgICB2YWx1ZS5oYW5kbGVyLm9uRG9jdW1lbnRDbGljayhldmVudCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICB9XHJcbiAgICBwcml2YXRlIGRvY3VtZW50UmVzaXplSGFuZGxlciA9IChldmVudCkgPT4ge1xyXG4gICAgICAgIHRoaXMuaGFuZGxlQ2hhaW4uZm9yRWFjaCgodmFsdWU6IElIYW5kbGVyQ2hhaW48VD4pOiB2b2lkID0+IHtcclxuICAgICAgICAgICAgdmFsdWUuaGFuZGxlci5vbkRvY3VtZW50Q2xpY2soZXZlbnQpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgfVxyXG4gICAgcHJpdmF0ZSBzZXRGb2N1c1RvTGFzdEVsZW1lbnQgPSAoKTogdm9pZCA9PiB7XHJcbiAgICAgICAgY29uc3QgZWxlbWVudCA9IHRoaXMuY29uZmlnU3RvcmUuZ2V0Rm9jdXNhYmxlRWxlbWVudCgpO1xyXG4gICAgICAgIGlmICggZWxlbWVudCApIHtcclxuICAgICAgICAgICAgaWYgKCBlbGVtZW50LmNsYXNzTGlzdC5jb250YWlucyhcImZpcnN0TGlua1wiKSkge1xyXG4gICAgICAgICAgICAgICAgJChcIi50YWJsZS1mb290ZXIgLmZpcnN0TGlua1wiKS5mb2N1cygpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmICggZWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoXCJuZXh0TGlua1wiKSkge1xyXG4gICAgICAgICAgICAgICAgJChcIi50YWJsZS1mb290ZXIgLm5leHRMaW5rXCIpLmZvY3VzKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKCBlbGVtZW50LmNsYXNzTGlzdC5jb250YWlucyhcInByZXZMaW5rXCIpKSB7XHJcbiAgICAgICAgICAgICAgICAkKFwiLnRhYmxlLWZvb3RlciAucHJldkxpbmtcIikuZm9jdXMoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoIGVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKFwibGFzdExpbmtcIikpIHtcclxuICAgICAgICAgICAgICAgICQoXCIudGFibGUtZm9vdGVyIC5sYXN0TGlua1wiKS5mb2N1cygpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmICggZWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoXCJwYWdlU2l6ZVNlbGVjdG9yXCIpKSB7XHJcbiAgICAgICAgICAgICAgICAkKFwiLnRhYmxlLWZvb3RlciAucGFnZVNpemVTZWxlY3RvclwiKS5mb2N1cygpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmICggZWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoXCJwYWdlci1pbnB1dFwiKSkge1xyXG4gICAgICAgICAgICAgICAgJChcIi50YWJsZS1mb290ZXIgLnBhZ2VyLWlucHV0XCIpLmZvY3VzKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKCBlbGVtZW50LnRhZ05hbWUudG9Mb3dlckNhc2UoKSA9PT0gXCJ0aFwiKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBkYXRhSGVhZGVySWQgPSBlbGVtZW50LmdldEF0dHJpYnV0ZShcImRhdGEtaGVhZGVyLWlkXCIpO1xyXG4gICAgICAgICAgICAgICAgbGV0IG5ld0ZvY3VzYWJsZTtcclxuICAgICAgICAgICAgICAgICQoXCIudGFibGUtaGVhZGVyIHRoXCIpLmVhY2goKGluZGV4OiBudW1iZXIsIGVsZW06IEhUTUxFbGVtZW50KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZWFjaEhlYWRlciA9ICQoZWxlbSk7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZWFjaEhlYWRlcklkID0gZWFjaEhlYWRlci5hdHRyKFwiZGF0YS1oZWFkZXItaWRcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCBlYWNoSGVhZGVySWQgPT09IGRhdGFIZWFkZXJJZCApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmV3Rm9jdXNhYmxlID0gZWFjaEhlYWRlcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgaWYgKCBuZXdGb2N1c2FibGUgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbmV3Rm9jdXNhYmxlLmZvY3VzKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5jb25maWdTdG9yZS5zZXRGb2N1c2FibGVFbGVtZW50KHVuZGVmaW5lZCk7XHJcblxyXG4gICAgfVxyXG5cclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvdHNsaW50LWxvYWRlcj8/cmVmLS0xIS4vc3JjL2pzL21haW4vR3JpZC50cyIsImltcG9ydCB7IElHcmlkT3B0aW9ucyB9IGZyb20gXCIuLi9tYWluL0lHcmlkT3B0aW9uc1wiO1xyXG5pbXBvcnQgeyBGaWx0ZXJBY3Rpb25UeXBlIH0gZnJvbSBcIi4uL21vZGVscy9GaWx0ZXJBY3Rpb25UeXBlXCI7XHJcbmltcG9ydCB7IEdyaWRPcmRlckRpcmVjdGlvbiB9IGZyb20gXCIuLi9tb2RlbHMvR3JpZE9yZGVyRGlyZWN0aW9uXCI7XHJcbmltcG9ydCB7IElDb2x1bW4gfSBmcm9tIFwiLi4vbW9kZWxzL0lDb2x1bW5cIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBDb25maWdTdG9yZTxUPiB7XHJcbiAgICBwdWJsaWMgb3B0aW9uczogSUdyaWRPcHRpb25zPFQ+O1xyXG4gICAgcHJpdmF0ZSBmb2N1c2FibGVFbGVtZW50OiBIVE1MRWxlbWVudDtcclxuICAgIHByaXZhdGUgZGVmYXVsdEdyaWRPcHRpb25zOiBJR3JpZE9wdGlvbnM8VD4gPSB7XHJcbiAgICAgICAgYW5pbWF0aW9uVGltZTogMjAwLFxyXG4gICAgICAgIGNodW5rU2l6ZTogNSxcclxuICAgICAgICBjb2x1bW5zOiBbXSxcclxuICAgICAgICBjb250YWluZXJFbGVtZW50OiBudWxsLFxyXG4gICAgICAgIC8vIG1hbmFnZUNvbFNldHRpbmdzQ29udGFpbmVyOiBudWxsLFxyXG4gICAgICAgIGh5YnJpZEZ1bmN0aW9uOiAoY29sdW1uOiBJQ29sdW1uLCByb3c6IFQpOiBzdHJpbmcgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gXCJ0cnVlXCI7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBrZXlDb2x1bW46IFwiXCIsXHJcbiAgICAgICAgLy8gb25Db2xTZXR0aW5nc0NoYW5nZTogKGNvbENvbmZpZzogSUNvbHVtbltdKTogdm9pZCA9PiB7XHJcbiAgICAgICAgLy8gICAgIC8vIE5vIENvZGVcclxuICAgICAgICAvLyB9LFxyXG4gICAgICAgIG9uQ2xpY2tGaWx0ZXI6IChjb2x1bW46IHN0cmluZywgdmFsdWU6IGFueSwgYWN0aW9uVHlwZTogRmlsdGVyQWN0aW9uVHlwZSk6IHZvaWQgPT4ge1xyXG4gICAgICAgICAgICAvLyBObyBjb2RlXHJcbiAgICAgICAgfSxcclxuICAgICAgICBvbkNsaWNrSGVhZGVyOiAoY29sdW1uOiBzdHJpbmcsIGRpcmVjdGlvbjogR3JpZE9yZGVyRGlyZWN0aW9uKTogdm9pZCA9PiB7XHJcbiAgICAgICAgICAgIC8vIE5vIGNvZGVcclxuICAgICAgICB9LFxyXG4gICAgICAgIG9uUGFnZVNlYXJjaDogKHBhZ2VTaXplOiBudW1iZXIsIHBhZ2VJbmRleDogbnVtYmVyKTogdm9pZCA9PiB7XHJcbiAgICAgICAgICAgIC8vIE5vIGNvZGVcclxuICAgICAgICB9LFxyXG4gICAgICAgIG9uU2VsZWN0OiAocm93czogVFtdKTogdm9pZCA9PiB7XHJcbiAgICAgICAgICAgIC8vIE5vIENvZGVcclxuICAgICAgICB9LFxyXG4gICAgICAgIHNob3dDYXB0aW9uOiBmYWxzZSxcclxuICAgICAgICBjYXB0aW9uOiBcIlwiLFxyXG4gICAgICAgIHN1bW1hcnk6IFwiXCIsXHJcbiAgICB9O1xyXG4gICAgY29uc3RydWN0b3Iob3B0aW9uczogSUdyaWRPcHRpb25zPFQ+KSB7XHJcbiAgICAgICAgdGhpcy5leHRlbmRPcHRpb25zKG9wdGlvbnMpO1xyXG4gICAgICAgIGlmIChvcHRpb25zLmNvbnRhaW5lckVsZW1lbnQgPT09IG51bGwpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiUGxlYXNlIFByb3ZpZGUgYSB2YWxpZCBjb250YWluZXIgRWxlbWVudCBvYmplY3RcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMub3B0aW9ucy5jb2x1bW5zLnNvcnQoKHByZXYsIG5leHQpID0+IHByZXYub3JkZXIgLSBuZXh0Lm9yZGVyKTtcclxuICAgIH1cclxuICAgIHB1YmxpYyBzZXQgT3B0aW9ucyhvcHRpb25zOiBJR3JpZE9wdGlvbnM8VD4pIHtcclxuICAgICAgICB0aGlzLm9wdGlvbnMgPSBvcHRpb25zO1xyXG4gICAgfVxyXG4gICAgcHVibGljIGdldCBPcHRpb25zKCk6IElHcmlkT3B0aW9uczxUPiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMub3B0aW9ucztcclxuICAgIH1cclxuICAgIHB1YmxpYyBzZXRGb2N1c2FibGVFbGVtZW50ID0gKGVsZW1lbnQ6IEhUTUxFbGVtZW50KTogdm9pZCA9PiB7XHJcbiAgICAgICAgdGhpcy5mb2N1c2FibGVFbGVtZW50ID0gZWxlbWVudDtcclxuICAgIH1cclxuICAgIHB1YmxpYyBnZXRGb2N1c2FibGVFbGVtZW50ID0gKCk6IEhUTUxFbGVtZW50ID0+IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5mb2N1c2FibGVFbGVtZW50O1xyXG4gICAgfVxyXG4gICAgcHVibGljIFNldEhpZGRlbk9uQ29uZmlnID0gKGJvb2w6IGJvb2xlYW4sIGNvbHVtbklkPzogc3RyaW5nKTogdm9pZCA9PiB7XHJcbiAgICAgICAgZm9yIChjb25zdCBjb2wgb2YgdGhpcy5PcHRpb25zLmNvbHVtbnMpIHtcclxuICAgICAgICAgICAgaWYgKGNvbHVtbklkID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgIGNvbC5oaWRkZW4gPSBib29sO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgaWYgKGNvbC5pZCA9PT0gY29sdW1uSWQpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb2wuaGlkZGVuID0gYm9vbDtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHByaXZhdGUgZXh0ZW5kT3B0aW9ucyA9IChpbnB1dE9wdGlvbnM6IElHcmlkT3B0aW9uczxUPik6IElHcmlkT3B0aW9uczxUPiA9PiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMub3B0aW9ucyA9IGpRdWVyeS5leHRlbmQoe30sIHRoaXMuZGVmYXVsdEdyaWRPcHRpb25zLCBpbnB1dE9wdGlvbnMpO1xyXG4gICAgfVxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy90c2xpbnQtbG9hZGVyPz9yZWYtLTEhLi9zcmMvanMvY29uZmlnL0NvbmZpZ1N0b3JlLnRzIiwiaW1wb3J0IHsgQ29uZmlnU3RvcmUgfSBmcm9tIFwiLi4vY29uZmlnL0NvbmZpZ1N0b3JlXCI7XHJcbmltcG9ydCB7IEdyaWRUZW1wbGF0ZVNlcnZpY2UgfSBmcm9tIFwiLi4vc2VydmljZXMvR3JpZFRlbXBsYXRlU2VydmljZVwiO1xyXG5pbXBvcnQgeyBJRXZlbnRIYW5kbGVyIH0gZnJvbSBcIi4vSUV2ZW50SGFuZGxlclwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIFNlbGVjdEV2ZW50SGFuZGxlcjxUPiBpbXBsZW1lbnRzIElFdmVudEhhbmRsZXI8VD4ge1xyXG4gICAgcHJpdmF0ZSBwYXJlbnRFbGVtZW50OiBKUXVlcnk7XHJcbiAgICBwcml2YXRlIGNvbmZpZ1N0b3JlOiBDb25maWdTdG9yZTxUPjtcclxuICAgIHByaXZhdGUgZ3JpZFRlbXBsYXRlU2VydmljZTogR3JpZFRlbXBsYXRlU2VydmljZTxUPjtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihjb25maWdTdG9yZTogQ29uZmlnU3RvcmU8VD4sIGVsZW1lbnQ6IEpRdWVyeSwgZ3JpZFRlbXBsYXRlU2VydmljZTogR3JpZFRlbXBsYXRlU2VydmljZTxUPikge1xyXG4gICAgICAgIHRoaXMuY29uZmlnU3RvcmUgPSBjb25maWdTdG9yZTtcclxuICAgICAgICB0aGlzLnBhcmVudEVsZW1lbnQgPSBlbGVtZW50O1xyXG4gICAgICAgIHRoaXMuZ3JpZFRlbXBsYXRlU2VydmljZSA9IGdyaWRUZW1wbGF0ZVNlcnZpY2U7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgUmVnaXN0ZXJEb21IYW5kbGVyKCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMucGFyZW50RWxlbWVudC5vbihcImNoYW5nZVwiLCBcIi5zZWxlY3Qta2V5LWNoZWNrYm94XCIgLCAoZXZlbnQpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgZWxlbWVudCA9IGpRdWVyeShldmVudC50YXJnZXQpO1xyXG4gICAgICAgICAgICBjb25zdCBjaGVja2VkID0gZWxlbWVudC5pcyhcIjpjaGVja2VkXCIpO1xyXG4gICAgICAgICAgICBjb25zdCB2YWx1ZSA9IGVsZW1lbnQudmFsKCkudG9TdHJpbmcoKTtcclxuICAgICAgICAgICAgaWYgKGNoZWNrZWQpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZ3JpZFRlbXBsYXRlU2VydmljZS5zZWxlY3RSb3dzKHZhbHVlKTtcclxuICAgICAgICAgICAgICAgIGVsZW1lbnQucGFyZW50cyhcIi5tYWluUm93XCIpLmFkZENsYXNzKFwiYWN0aXZlXCIpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5ncmlkVGVtcGxhdGVTZXJ2aWNlLmRlU2VsZWN0Um93cyh2YWx1ZSk7XHJcbiAgICAgICAgICAgICAgICBlbGVtZW50LnBhcmVudHMoXCIubWFpblJvd1wiKS5yZW1vdmVDbGFzcyhcImFjdGl2ZVwiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoZXZlbnQub3JpZ2luYWxFdmVudCA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5jb25maWdTdG9yZS5PcHRpb25zLm9uU2VsZWN0KHRoaXMuZ3JpZFRlbXBsYXRlU2VydmljZS5TZWxlY3RlZCwgY2hlY2tlZCk7XHJcbiAgICAgICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMucGFyZW50RWxlbWVudC5vbihcImNoYW5nZVwiLCBcIi5zZWxlY3QtYWxsLWNoZWNrYm94XCIgLCAoZXZlbnQpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgZWxlbWVudCA9IGpRdWVyeShldmVudC50YXJnZXQpO1xyXG4gICAgICAgICAgICBjb25zdCBjaGVja2VkID0gZWxlbWVudC5pcyhcIjpjaGVja2VkXCIpO1xyXG4gICAgICAgICAgICB0aGlzLnBhcmVudEVsZW1lbnQuZmluZChcIi5zZWxlY3Qta2V5LWNoZWNrYm94XCIpLnByb3AoXCJjaGVja2VkXCIsIGNoZWNrZWQpO1xyXG4gICAgICAgICAgICBpZiAoY2hlY2tlZCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5ncmlkVGVtcGxhdGVTZXJ2aWNlLnNlbGVjdEFsbCgpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5wYXJlbnRFbGVtZW50LmZpbmQoXCIubWFpblRhYmxlIC5tYWluUm93XCIpLmFkZENsYXNzKFwiYWN0aXZlXCIpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5ncmlkVGVtcGxhdGVTZXJ2aWNlLmRlU2VsZWN0QWxsKCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnBhcmVudEVsZW1lbnQuZmluZChcIi5tYWluVGFibGUgLm1haW5Sb3dcIikucmVtb3ZlQ2xhc3MoXCJhY3RpdmVcIik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5jb25maWdTdG9yZS5PcHRpb25zLm9uU2VsZWN0KHRoaXMuZ3JpZFRlbXBsYXRlU2VydmljZS5TZWxlY3RlZCwgY2hlY2tlZCk7XHJcbiAgICAgICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgcHVibGljIG9uUmVzaXplKCk6IHZvaWQge1xyXG4gICAgICAgIC8vIElnbm9yZVxyXG4gICAgfVxyXG4gICAgcHVibGljIG9uRG9jdW1lbnRDbGljayhldmVudDogYW55KTogdm9pZCB7XHJcbiAgICAgICAgLy8gSWdub3JlXHJcbiAgICB9XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL3RzbGludC1sb2FkZXI/P3JlZi0tMSEuL3NyYy9qcy9ldmVudEhhbmRsZXJzL1NlbGVjdEV2ZW50SGFuZGxlci50cyIsImltcG9ydCB7IENvbmZpZ1N0b3JlIH0gZnJvbSBcIi4uL2NvbmZpZy9Db25maWdTdG9yZVwiO1xyXG5pbXBvcnQgeyBJRXZlbnRIYW5kbGVyIH0gZnJvbSBcIi4vSUV2ZW50SGFuZGxlclwiO1xyXG5leHBvcnQgY2xhc3MgRGV0YWlsc1Jvd0hhbmRsZXI8VD4gaW1wbGVtZW50cyBJRXZlbnRIYW5kbGVyPFQ+IHtcclxuICAgIHByaXZhdGUgcGFyZW50RWxlbWVudDogSlF1ZXJ5O1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgY29uZmlnU3RvcmU6IENvbmZpZ1N0b3JlPFQ+LCBlbGVtZW50OiBKUXVlcnkpIHtcclxuICAgICAgICB0aGlzLnBhcmVudEVsZW1lbnQgPSBlbGVtZW50O1xyXG4gICAgfVxyXG4gICAgcHVibGljIG9uUmVzaXplKCk6IHZvaWQge1xyXG4gICAgICAgIC8vIE5vdGhpbmcgdG8gRG8uXHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIG9uRG9jdW1lbnRDbGljayhldmVudCk6IHZvaWQge1xyXG4gICAgICAgIC8vIE5vdGhpbmcgdG8gRG8uXHJcbiAgICB9XHJcbiAgICBwdWJsaWMgUmVnaXN0ZXJEb21IYW5kbGVyID0gKCk6IHZvaWQgPT4ge1xyXG4gICAgICAgIHRoaXMucGFyZW50RWxlbWVudC5vbihcImNsaWNrXCIsIFwiLnRhYmxlLWJvZHkgLmV4cGFuc2lvbkFycm93cyBpXCIsIHRoaXMuZXhwYW5kUm93KTtcclxuICAgICAgICB0aGlzLnBhcmVudEVsZW1lbnQub24oXCJrZXl1cFwiLCBcIi50YWJsZS1ib2R5IC5leHBhbnNpb25BcnJvd3MgaVwiLCB0aGlzLmV4cGFuZFJvdyk7XHJcbiAgICB9XHJcbiAgICBwcml2YXRlIGV4cGFuZFJvdyA9IChldmVudCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGNvZGUgPSBldmVudC5rZXlDb2RlIHx8IGV2ZW50LndoaWNoO1xyXG4gICAgICAgIGlmICggZXZlbnQudHlwZSAhPT0gXCJjbGlja1wiICYmIChldmVudC50eXBlID09PSBcImtleXVwXCIgJiYgY29kZSAhPT0gMTMgJiYgY29kZSAhPT0gMzIpICkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IGFycm93ID0galF1ZXJ5KGV2ZW50LnRhcmdldCk7XHJcbiAgICAgICAgY29uc3QgZGV0YWlsc1JvdyA9IGFycm93LmNsb3Nlc3QoXCJ0clwiKS5uZXh0KCk7XHJcbiAgICAgICAgY29uc3QgY3VycmVudEljb24gPSBhcnJvdy5oaWRlKCkuYXR0cihcImFyaWEtaGlkZGVuXCIsIFwidHJ1ZVwiKTtcclxuICAgICAgICBjb25zdCBvdGhlckljb24gPSBhcnJvdy5zaWJsaW5ncyhcImlcIikuc2hvdygpLmF0dHIoXCJhcmlhLWhpZGRlblwiLCBcImZhbHNlXCIpO1xyXG4gICAgICAgIGlmIChhcnJvdy5oYXNDbGFzcyhcImV4cGFuZERldGFpbHNSb3dJY29uXCIpKSB7XHJcbiAgICAgICAgICAgIG90aGVySWNvbi5hdHRyKFwiYXJpYS1leHBhbmRlZFwiLCBcInRydWVcIik7XHJcbiAgICAgICAgICAgIGRldGFpbHNSb3cuc2xpZGVEb3duKHRoaXMuY29uZmlnU3RvcmUuT3B0aW9ucy5hbmltYXRpb25UaW1lKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBjdXJyZW50SWNvbi5hdHRyKFwiYXJpYS1leHBhbmRlZFwiLCBcInRydWVcIik7XHJcbiAgICAgICAgICAgIGRldGFpbHNSb3cuc2xpZGVVcCh0aGlzLmNvbmZpZ1N0b3JlLk9wdGlvbnMuYW5pbWF0aW9uVGltZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIG90aGVySWNvbi5mb2N1cygpO1xyXG4gICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgfVxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy90c2xpbnQtbG9hZGVyPz9yZWYtLTEhLi9zcmMvanMvZXZlbnRIYW5kbGVycy9EZXRhaWxzUm93SGFuZGxlci50cyIsImltcG9ydCB7IENvbmZpZ1N0b3JlIH0gZnJvbSBcIi4uL2NvbmZpZy9Db25maWdTdG9yZVwiO1xyXG5pbXBvcnQgeyBJR3JpZE9wdGlvbnMgfSBmcm9tIFwiLi4vbWFpbi9JR3JpZE9wdGlvbnNcIjtcclxuaW1wb3J0IHsgQ29tbW9uVXRpbCB9IGZyb20gXCIuLi91dGlsL0NvbHVtblV0aWxcIjtcclxuaW1wb3J0IHsgRmlsdGVyQWN0aW9uVHlwZSB9IGZyb20gXCIuLy4uL21vZGVscy9GaWx0ZXJBY3Rpb25UeXBlXCI7XHJcbmltcG9ydCB7IElGaWx0ZXJDbGlja0RlbGVnYXRlIH0gZnJvbSBcIi4vLi4vbW9kZWxzL0lGaWx0ZXJDbGlja0RlbGVnYXRlXCI7XHJcbmltcG9ydCB7IElFdmVudEhhbmRsZXIgfSBmcm9tIFwiLi9JRXZlbnRIYW5kbGVyXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgRmlsdGVyQ2xpY2tIYW5kbGVyPFQ+IGltcGxlbWVudHMgSUV2ZW50SGFuZGxlcjxUPiB7XHJcbiAgICBwcml2YXRlIGNvbmZpZ1N0b3JlOiBDb25maWdTdG9yZTxUPjtcclxuICAgIHByaXZhdGUgcGFyZW50RWxlbWVudDogSlF1ZXJ5O1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKGNvbmZpZ1N0b3JlOiBDb25maWdTdG9yZTxUPiwgZWxlbWVudDogSlF1ZXJ5KSB7XHJcbiAgICAgICAgdGhpcy5jb25maWdTdG9yZSA9IGNvbmZpZ1N0b3JlO1xyXG4gICAgICAgIHRoaXMucGFyZW50RWxlbWVudCA9IGVsZW1lbnQ7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgb25SZXNpemUoKTogdm9pZCB7XHJcbiAgICAgICAgLy8gTm90aGluZyB0byBEby5cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgb25Eb2N1bWVudENsaWNrKGV2ZW50KTogdm9pZCB7XHJcbiAgICAgICAgLy8gTm90aGluZyB0byBEby5cclxuICAgIH1cclxuICAgIHB1YmxpYyBSZWdpc3RlckRvbUhhbmRsZXIgPSAoKTogdm9pZCA9PiB7XHJcbiAgICAgICAgdGhpcy5wYXJlbnRFbGVtZW50Lm9uKFwiY2xpY2tcIiwgXCIudGFibGUtYm9keSAuZGV0YWlsc1JvdyAuZGV0YWlsc1RhYmxlIHRkIGlcIiwgKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IGVsZW1lbnQgPSBqUXVlcnkoZXZlbnQudGFyZ2V0KTtcclxuICAgICAgICAgICAgY29uc3QgcGFyZW50VGQgPSBlbGVtZW50LnBhcmVudHMoXCJ0ZFwiKTtcclxuICAgICAgICAgICAgY29uc3Qga2V5ID0gcGFyZW50VGQuYXR0cihcImRhdGEtZmlsdGVyLWtleVwiKTtcclxuICAgICAgICAgICAgY29uc3QgdmFsdWUgPSBwYXJlbnRUZC5hdHRyKFwiZGF0YS1maWx0ZXItdmFsdWVcIik7XHJcbiAgICAgICAgICAgIGNvbnN0IHR5cGUgPSBwYXJlbnRUZC5hdHRyKFwiZGF0YS1maWx0ZXItdHlwZVwiKTtcclxuICAgICAgICAgICAgY29uc3QgY29sID0gQ29tbW9uVXRpbC5HZXRDb2x1bW5PYmplY3Qoa2V5LCB0aGlzLmNvbmZpZ1N0b3JlLk9wdGlvbnMuY29sdW1ucyk7XHJcbiAgICAgICAgICAgIGlmIChjb2wgPT09IHVuZGVmaW5lZCB8fCBjb2wgPT09IG51bGwgfHwgIWNvbC5maWx0ZXJhYmxlICkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGxldCBmaWx0ZXJBY3Rpb246IEZpbHRlckFjdGlvblR5cGUgPSBGaWx0ZXJBY3Rpb25UeXBlLkFkZDtcclxuICAgICAgICAgICAgaWYgKGVsZW1lbnQuaGFzQ2xhc3MoXCJyZW1vdmVGaWx0ZXJcIikpIHtcclxuICAgICAgICAgICAgICAgIGZpbHRlckFjdGlvbiA9IEZpbHRlckFjdGlvblR5cGUuTWludXM7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5jb25maWdTdG9yZS5zZXRGb2N1c2FibGVFbGVtZW50KGV2ZW50LnRhcmdldCk7XHJcbiAgICAgICAgICAgIHRoaXMuY29uZmlnU3RvcmUuT3B0aW9ucy5vbkNsaWNrRmlsdGVyKGtleSwgdmFsdWUsIGZpbHRlckFjdGlvbiwgdHlwZSk7XHJcbiAgICAgICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy90c2xpbnQtbG9hZGVyPz9yZWYtLTEhLi9zcmMvanMvZXZlbnRIYW5kbGVycy9GaWx0ZXJDbGlja0hhbmRsZXIudHMiLCJleHBvcnQgZW51bSBGaWx0ZXJBY3Rpb25UeXBlIHtcclxuICAgIEFkZCA9IFwiQWRkXCIsXHJcbiAgICBNaW51cyA9IFwiTWludXNcIixcclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvdHNsaW50LWxvYWRlcj8/cmVmLS0xIS4vc3JjL2pzL21vZGVscy9GaWx0ZXJBY3Rpb25UeXBlLnRzIiwiZXhwb3J0IGVudW0gSGFuZGxlck5hbWVzIHtcclxuICAgIEZpbHRlckFjdGlvbixcclxuICAgIEhlYWRlckNsaWNrLFxyXG4gICAgU2Nyb2xsLFxyXG4gICAgUGFnZVNlYXJjaCxcclxuICAgIERldGFpbHNSb3csXHJcbiAgICBUb2dnbGVDb2x1bW4sXHJcbiAgICBDb2xTZXR0aW5ncyxcclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvdHNsaW50LWxvYWRlcj8/cmVmLS0xIS4vc3JjL2pzL2V2ZW50SGFuZGxlcnMvSGFuZGxlck5hbWVzLnRzIiwiaW1wb3J0IHsgQ29uZmlnU3RvcmUgfSBmcm9tIFwiLi4vY29uZmlnL0NvbmZpZ1N0b3JlXCI7XHJcbmltcG9ydCB7IElHcmlkT3B0aW9ucyB9IGZyb20gXCIuLi9tYWluL0lHcmlkT3B0aW9uc1wiO1xyXG5pbXBvcnQgeyBDb21tb25VdGlsIH0gZnJvbSBcIi4uL3V0aWwvQ29sdW1uVXRpbFwiO1xyXG5pbXBvcnQgeyBHcmlkT3JkZXJEaXJlY3Rpb24gfSBmcm9tIFwiLi8uLi9tb2RlbHMvR3JpZE9yZGVyRGlyZWN0aW9uXCI7XHJcbmltcG9ydCB7SUhlYWRlckNsaWNrRGVsZWdhdGV9IGZyb20gXCIuLy4uL21vZGVscy9JSGVhZGVyQ2xpY2tEZWxlZ2F0ZVwiO1xyXG5pbXBvcnQgeyBJRXZlbnRIYW5kbGVyIH0gZnJvbSBcIi4vSUV2ZW50SGFuZGxlclwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIEhlYWRlckNsaWNrSGFuZGxlcjxUPiBpbXBsZW1lbnRzIElFdmVudEhhbmRsZXI8VD4ge1xyXG4gICAgcHJpdmF0ZSBwYXJlbnRFbGVtZW50OiBKUXVlcnk7XHJcbiAgICBwcml2YXRlIGNvbmZpZ1N0b3JlOiBDb25maWdTdG9yZTxUPjtcclxuICAgIHByaXZhdGUgd2FzSGVhZGVyQ2xpY2tlZDogYm9vbGVhbjtcclxuICAgIHByaXZhdGUgbGFzdEZvY3VzZWRFbGVtZW50OiBhbnk7XHJcbiAgICBjb25zdHJ1Y3Rvcihjb25maWdTdG9yZTogQ29uZmlnU3RvcmU8VD4sIGVsZW1lbnQ6IEpRdWVyeSkge1xyXG4gICAgICAgIHRoaXMuY29uZmlnU3RvcmUgPSBjb25maWdTdG9yZTtcclxuICAgICAgICB0aGlzLnBhcmVudEVsZW1lbnQgPSBlbGVtZW50O1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBvblJlc2l6ZSgpOiB2b2lkIHtcclxuICAgICAgICAvLyBOb3RoaW5nIHRvIERvLlxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBvbkRvY3VtZW50Q2xpY2soZXZlbnQpOiB2b2lkIHtcclxuICAgICAgICAvLyBOb3RoaW5nIHRvIERvLlxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBSZWdpc3RlckRvbUhhbmRsZXIgPSAoKTogdm9pZCA9PiB7XHJcbiAgICAgICAgLy8gUmVnaXN0ZXJpbmcgSlF1ZXJ5IEV2ZW50IEhhbmRsZXIgaWYgSGVhZGVyIGlzIENsaWNrZWQuXHJcbiAgICAgICAgdGhpcy5wYXJlbnRFbGVtZW50Lm9uKFwiY2xpY2tcIiwgXCIudGFibGUtaGVhZGVyIHRoXCIsIHRoaXMuaGFuZGxlSGVhZGVyU29ydCk7XHJcbiAgICAgICAgdGhpcy5wYXJlbnRFbGVtZW50Lm9uKFwia2V5dXBcIiwgXCIudGFibGUtaGVhZGVyIHRoXCIsIHRoaXMuaGFuZGxlSGVhZGVyU29ydCk7XHJcbiAgICAgICAgdGhpcy5wYXJlbnRFbGVtZW50Lm9uKFwibW91c2Vkb3duXCIgLCBcIi50YWJsZS1oZWFkZXIgdGhcIiwgdGhpcy5oYW5kbGVNb3VzZURvd24pO1xyXG4gICAgICAgIHRoaXMucGFyZW50RWxlbWVudC5vbihcImZvY3VzaW5cIiwgXCIudGFibGUtaGVhZGVyIHRoXCIsIHRoaXMuaGFuZGxlSGVhZGVyRm9jdXMpO1xyXG4gICAgfVxyXG4gICAgcHJpdmF0ZSBoYW5kbGVNb3VzZURvd24gPSAoZXZlbnQ6IGFueSkgPT4ge1xyXG4gICAgICAgIHRoaXMud2FzSGVhZGVyQ2xpY2tlZCA9IHRydWU7XHJcbiAgICB9XHJcbiAgICBwcml2YXRlIGhhbmRsZUhlYWRlckZvY3VzID0gKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgLy8gSGFuZGxlIGZvY3VzXHJcbiAgICAgICAgaWYgKHRoaXMubGFzdEZvY3VzZWRFbGVtZW50ICE9PSBldmVudC50YXJnZXQpIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMud2FzSGVhZGVyQ2xpY2tlZCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMubGFzdEZvY3VzZWRFbGVtZW50ID0gZXZlbnQudGFyZ2V0O1xyXG4gICAgICAgICAgICB0aGlzLndhc0hlYWRlckNsaWNrZWQgPSBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gZXZlbnQuZGF0YS5jbGlja2VkID0gdW5kZWZpbmVkO1xyXG4gICAgICAgIGNvbnN0IGhlYWRlciA9IGpRdWVyeShldmVudC50YXJnZXQpO1xyXG4gICAgICAgIGNvbnN0IGxlZnRQb3N0aXRpb24gPSBoZWFkZXIucG9zaXRpb24oKS5sZWZ0O1xyXG4gICAgICAgIGNvbnN0IGhlYWRlcldpZHRoID0gaGVhZGVyLndpZHRoKCk7XHJcbiAgICAgICAgY29uc3QgdGFibGVCb2R5ID0gdGhpcy5wYXJlbnRFbGVtZW50LmZpbmQoXCIudGFibGUtYm9keVwiKTtcclxuICAgICAgICBjb25zdCBtYWluVGFibGVCb2R5ID0gdGhpcy5wYXJlbnRFbGVtZW50LmZpbmQoXCIubWFpblRhYmxlXCIpO1xyXG4gICAgICAgIGNvbnN0IHZpc2libGVUYm9keVdpZHRoID0gdGFibGVCb2R5LndpZHRoKCk7XHJcbiAgICAgICAgY29uc3QgbWF4U2Nyb2xsID0gbWFpblRhYmxlQm9keS53aWR0aCgpIC0gdmlzaWJsZVRib2R5V2lkdGg7XHJcbiAgICAgICAgY29uc3QgY3VycmVudFBvc2l0aW9uID0gbGVmdFBvc3RpdGlvbiArIGhlYWRlcldpZHRoICogMjtcclxuICAgICAgICBsZXQgc2Nyb2xsTGVmdEJ5O1xyXG4gICAgICAgIGlmICggY3VycmVudFBvc2l0aW9uID4gdmlzaWJsZVRib2R5V2lkdGgpIHtcclxuICAgICAgICAgICAgc2Nyb2xsTGVmdEJ5ID0gbGVmdFBvc3RpdGlvbiA+IG1heFNjcm9sbCA/IG1heFNjcm9sbCA6IGxlZnRQb3N0aXRpb247XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgc2Nyb2xsTGVmdEJ5ID0gMDtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGFibGVCb2R5LnNjcm9sbExlZnQoc2Nyb2xsTGVmdEJ5KTtcclxuICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgIH1cclxuICAgIHByaXZhdGUgaGFuZGxlSGVhZGVyU29ydCA9IChldmVudCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGNvZGUgPSBldmVudC5rZXlDb2RlIHx8IGV2ZW50LndoaWNoO1xyXG4gICAgICAgIGlmICggZXZlbnQudHlwZSAhPT0gXCJjbGlja1wiICYmIChldmVudC50eXBlID09PSBcImtleXVwXCIgJiYgY29kZSAhPT0gMTMgJiYgY29kZSAhPT0gMzIpICkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IGVsZW1lbnQgPSBqUXVlcnkoZXZlbnQudGFyZ2V0KS5jbG9zZXN0KFwidGhcIik7XHJcbiAgICAgICAgY29uc3QgaGVhZGVySWQgPSBlbGVtZW50LmF0dHIoXCJkYXRhLWhlYWRlci1pZFwiKTtcclxuICAgICAgICBjb25zdCBjb2wgPSBDb21tb25VdGlsLkdldENvbHVtbk9iamVjdChoZWFkZXJJZCwgdGhpcy5jb25maWdTdG9yZS5PcHRpb25zLmNvbHVtbnMpO1xyXG4gICAgICAgIGlmIChjb2wgPT09IHVuZGVmaW5lZCB8fCBjb2wgPT09IG51bGwgfHwgIWNvbC5zb3J0YWJsZSApIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBhcnJvd0ljb25zID0gZWxlbWVudC5maW5kKFwiaVwiKTtcclxuICAgICAgICBjb25zdCB1cEFycm93SWNvbiA9IGFycm93SWNvbnMuZmlyc3QoKTtcclxuICAgICAgICBjb25zdCBkb3duQXJyb3dJY29uID0gYXJyb3dJY29ucy5sYXN0KCk7XHJcbiAgICAgICAgbGV0IGRpcmVjdGlvbjogR3JpZE9yZGVyRGlyZWN0aW9uO1xyXG4gICAgICAgIGlmIChhcnJvd0ljb25zLmlzKFwiOnZpc2libGVcIikpIHtcclxuICAgICAgICAgICAgaWYgKHVwQXJyb3dJY29uLmlzKFwiOnZpc2libGVcIikpIHtcclxuICAgICAgICAgICAgICAgIGRpcmVjdGlvbiA9IEdyaWRPcmRlckRpcmVjdGlvbi5EZXNjO1xyXG4gICAgICAgICAgICAgICAgdXBBcnJvd0ljb24uaGlkZSgpO1xyXG4gICAgICAgICAgICAgICAgZG93bkFycm93SWNvbi5zaG93KCk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBkaXJlY3Rpb24gPSBHcmlkT3JkZXJEaXJlY3Rpb24uQXNjO1xyXG4gICAgICAgICAgICAgICAgZG93bkFycm93SWNvbi5oaWRlKCk7XHJcbiAgICAgICAgICAgICAgICB1cEFycm93SWNvbi5zaG93KCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBkaXJlY3Rpb24gPSBHcmlkT3JkZXJEaXJlY3Rpb24uQXNjO1xyXG4gICAgICAgICAgICB1cEFycm93SWNvbi5zaG93KCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsZW1lbnQuYXR0cihcImFyaWEtc29ydFwiLCBkaXJlY3Rpb24gPT09IEdyaWRPcmRlckRpcmVjdGlvbi5EZXNjID8gXCJkZXNjZW5kaW5nXCIgOiBcImFzY2VuZGluZ1wiKTtcclxuICAgICAgICBDb21tb25VdGlsLlNldE9yZGVyKGhlYWRlcklkLCBkaXJlY3Rpb24sIHRoaXMuY29uZmlnU3RvcmUuT3B0aW9ucy5jb2x1bW5zKTtcclxuICAgICAgICB0aGlzLmNvbmZpZ1N0b3JlLnNldEZvY3VzYWJsZUVsZW1lbnQoZXZlbnQudGFyZ2V0KTtcclxuICAgICAgICB0aGlzLmNvbmZpZ1N0b3JlLk9wdGlvbnMub25DbGlja0hlYWRlcihoZWFkZXJJZCwgZGlyZWN0aW9uKTtcclxuICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgIH1cclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvdHNsaW50LWxvYWRlcj8/cmVmLS0xIS4vc3JjL2pzL2V2ZW50SGFuZGxlcnMvSGVhZGVyQ2xpY2tIYW5kbGVyLnRzIiwiaW1wb3J0ICogYXMgalF1ZXJ5IGZyb20gXCJqcXVlcnlcIjtcclxuaW1wb3J0IHsgQ29uZmlnU3RvcmUgfSBmcm9tIFwiLi4vY29uZmlnL0NvbmZpZ1N0b3JlXCI7XHJcbmltcG9ydCB7IFBhZ2VyIH0gZnJvbSBcIi4uL3BhZ2luYXRpb24vUGFnZXJcIjtcclxuaW1wb3J0IHsgSVBhZ2VTZWFyY2hDbGlja0RlbGVnYXRlIH0gZnJvbSBcIi4vLi4vbW9kZWxzL0lQYWdlU2VhcmNoQ2xpY2tEZWxlZ2F0ZVwiO1xyXG5pbXBvcnQgeyBJUGFnaW5hdGlvbiB9IGZyb20gXCIuLy4uL21vZGVscy9JUGFnaW5hdGlvblwiO1xyXG5pbXBvcnQgeyBJRXZlbnRIYW5kbGVyIH0gZnJvbSBcIi4vSUV2ZW50SGFuZGxlclwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIFBhZ2VTZWFyY2hIYW5kbGVyPFQ+IGltcGxlbWVudHMgSUV2ZW50SGFuZGxlcjxUPiB7XHJcbiAgICBwcml2YXRlIGNvbmZpZ1N0b3JlOiBDb25maWdTdG9yZTxUPjtcclxuICAgIHByaXZhdGUgcGFyZW50RWxlbWVudDogSlF1ZXJ5O1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKGNvbmZpZ1N0b3JlOiBDb25maWdTdG9yZTxUPiwgZWxlbWVudDogSlF1ZXJ5KSB7XHJcbiAgICAgICAgdGhpcy5jb25maWdTdG9yZSA9IGNvbmZpZ1N0b3JlO1xyXG4gICAgICAgIHRoaXMucGFyZW50RWxlbWVudCA9IGVsZW1lbnQ7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgb25SZXNpemUoKTogdm9pZCB7XHJcbiAgICAgICAgLy8gdGhyb3cgbmV3IEVycm9yKFwiTWV0aG9kIG5vdCBpbXBsZW1lbnRlZC5cIik7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIG9uRG9jdW1lbnRDbGljaygpOiB2b2lkIHtcclxuICAgICAgICAvLyB0aHJvdyBuZXcgRXJyb3IoXCJNZXRob2Qgbm90IGltcGxlbWVudGVkLlwiKTtcclxuICAgIH1cclxuICAgIHB1YmxpYyBSZWdpc3RlckRvbUhhbmRsZXIgPSAoKTogdm9pZCA9PiB7XHJcbiAgICAgICAgdGhpcy5wYXJlbnRFbGVtZW50Lm9uKFwiY2xpY2tcIiwgXCIudGFibGUtZm9vdGVyIC5maXJzdExpbmtcIiwgKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuY29uZmlnU3RvcmUuc2V0Rm9jdXNhYmxlRWxlbWVudChldmVudC50YXJnZXQpO1xyXG4gICAgICAgICAgICB0aGlzLmNvbmZpZ1N0b3JlLm9wdGlvbnMub25QYWdlU2VhcmNoKFBhZ2VyLlBhZ2luYXRpb25EYXRhLnBhZ2VTaXplLCAxKTtcclxuICAgICAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy5wYXJlbnRFbGVtZW50Lm9uKFwiY2xpY2tcIiwgXCIudGFibGUtZm9vdGVyIC5uZXh0TGlua1wiLCAoZXZlbnQpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5jb25maWdTdG9yZS5zZXRGb2N1c2FibGVFbGVtZW50KGV2ZW50LnRhcmdldCk7XHJcbiAgICAgICAgICAgIHRoaXMuY29uZmlnU3RvcmUub3B0aW9ucy5vblBhZ2VTZWFyY2goUGFnZXIuUGFnaW5hdGlvbkRhdGEucGFnZVNpemUsIFBhZ2VyLlBhZ2luYXRpb25EYXRhLnBhZ2VJbmRleCArIDEpO1xyXG4gICAgICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICB0aGlzLnBhcmVudEVsZW1lbnQub24oXCJjbGlja1wiLCBcIi50YWJsZS1mb290ZXIgLnByZXZMaW5rXCIsIChldmVudCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmNvbmZpZ1N0b3JlLnNldEZvY3VzYWJsZUVsZW1lbnQoZXZlbnQudGFyZ2V0KTtcclxuICAgICAgICAgICAgdGhpcy5jb25maWdTdG9yZS5vcHRpb25zLm9uUGFnZVNlYXJjaChQYWdlci5QYWdpbmF0aW9uRGF0YS5wYWdlU2l6ZSwgUGFnZXIuUGFnaW5hdGlvbkRhdGEucGFnZUluZGV4IC0gMSk7XHJcbiAgICAgICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMucGFyZW50RWxlbWVudC5vbihcImNsaWNrXCIsIFwiLnRhYmxlLWZvb3RlciAubGFzdExpbmtcIiwgKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuY29uZmlnU3RvcmUuc2V0Rm9jdXNhYmxlRWxlbWVudChldmVudC50YXJnZXQpO1xyXG4gICAgICAgICAgICB0aGlzLmNvbmZpZ1N0b3JlLm9wdGlvbnMub25QYWdlU2VhcmNoKFBhZ2VyLlBhZ2luYXRpb25EYXRhLnBhZ2VTaXplLCBQYWdlci5QYWdpbmF0aW9uRGF0YS5ub09mUGFnZXMpO1xyXG4gICAgICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICB0aGlzLnBhcmVudEVsZW1lbnQub24oXCJjaGFuZ2VcIiwgXCIudGFibGUtZm9vdGVyIC5wYWdlU2l6ZVNlbGVjdG9yXCIsIChldmVudCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmNvbmZpZ1N0b3JlLnNldEZvY3VzYWJsZUVsZW1lbnQoZXZlbnQudGFyZ2V0KTtcclxuICAgICAgICAgICAgY29uc3QgdmFsOiBudW1iZXIgPSAralF1ZXJ5KGV2ZW50LnRhcmdldCkudmFsKCkudG9TdHJpbmcoKTtcclxuICAgICAgICAgICAgdGhpcy5jb25maWdTdG9yZS5vcHRpb25zLm9uUGFnZVNlYXJjaCh2YWwsIFBhZ2VyLlBhZ2luYXRpb25EYXRhLnBhZ2VJbmRleCk7XHJcbiAgICAgICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMucGFyZW50RWxlbWVudC5vbihcImtleXByZXNzXCIsIFwiLnRhYmxlLWZvb3RlciAucGFnZXItaW5wdXRcIiwgKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuY29uZmlnU3RvcmUuc2V0Rm9jdXNhYmxlRWxlbWVudChldmVudC50YXJnZXQpO1xyXG4gICAgICAgICAgICBjb25zdCBpcCA9IGpRdWVyeShldmVudC50YXJnZXQpO1xyXG4gICAgICAgICAgICBjb25zdCBwYWdlRGF0YSA9IFBhZ2VyLlBhZ2luYXRpb25EYXRhO1xyXG4gICAgICAgICAgICBpZiAoZXZlbnQua2V5Q29kZSA9PT0gMTMpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHZhbDogbnVtYmVyID0gK2lwLnZhbCgpLnRvU3RyaW5nKCk7XHJcbiAgICAgICAgICAgICAgICBpZiAoaXNOYU4odmFsKSB8fCB2YWwgPiBwYWdlRGF0YS5ub09mUGFnZXMgfHwgdmFsIDwgMSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlwLnZhbChwYWdlRGF0YS5wYWdlSW5kZXgpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbmZpZ1N0b3JlLm9wdGlvbnMub25QYWdlU2VhcmNoKHBhZ2VEYXRhLnBhZ2VTaXplLCB2YWwpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy90c2xpbnQtbG9hZGVyPz9yZWYtLTEhLi9zcmMvanMvZXZlbnRIYW5kbGVycy9QYWdlU2VhcmNoQ2xpY2tIYW5kbGVyLnRzIiwiaW1wb3J0IHsgQ29uZmlnU3RvcmUgfSBmcm9tIFwiLi4vY29uZmlnL0NvbmZpZ1N0b3JlXCI7XHJcbmltcG9ydCB7IEdyaWRUZW1wbGF0ZVNlcnZpY2UgfSBmcm9tIFwiLi8uLi9zZXJ2aWNlcy9HcmlkVGVtcGxhdGVTZXJ2aWNlXCI7XHJcbmltcG9ydCB7IElJbmRleENvdW50ZXIgfSBmcm9tIFwiLi8uLi92aXJ0dWFsaXphdGlvbi9JbmRleENvdW50ZXJcIjtcclxuaW1wb3J0IHsgU2Nyb2xsRGlyZWN0aW9uIH0gZnJvbSBcIi4vLi4vdmlydHVhbGl6YXRpb24vU2Nyb2xsRGlyZWN0aW9uXCI7XHJcbmltcG9ydCB7IFZpcnR1YWxpemVyIH0gZnJvbSBcIi4vLi4vdmlydHVhbGl6YXRpb24vVmlydHVhbGl6ZXJcIjtcclxuaW1wb3J0IHsgSUV2ZW50SGFuZGxlciB9IGZyb20gXCIuL0lFdmVudEhhbmRsZXJcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBTY3JvbGxIYW5kbGVyPFQ+IGltcGxlbWVudHMgSUV2ZW50SGFuZGxlcjxUPiB7XHJcbiAgICBwcml2YXRlIHZpcnR1YWxpemVyOiBWaXJ0dWFsaXplcjtcclxuICAgIHByaXZhdGUgcGFyZW50RWxlbWVudDogSlF1ZXJ5O1xyXG4gICAgcHJpdmF0ZSBncmlkVGVtcGxhdGVTZXJ2aWNlOiBHcmlkVGVtcGxhdGVTZXJ2aWNlPFQ+O1xyXG4gICAgcHJpdmF0ZSByZW5kZXJpbmc6IGJvb2xlYW4gPSAgZmFsc2U7XHJcbiAgICBwcml2YXRlIGNvbmZpZ1N0b3JlOiBDb25maWdTdG9yZTxUPjtcclxuICAgIHByaXZhdGUgbGVmdE9mZnNldDogbnVtYmVyO1xyXG4gICAgcHJpdmF0ZSBwYXJlbnRPZmZTZXRMZWZ0OiBudW1iZXI7XHJcbiAgICBwcml2YXRlIGN1cnJlbnRJbmRleDogbnVtYmVyO1xyXG4gICAgcHJpdmF0ZSB3YXRjaGVzOiBhbnlbXSA9IFtdO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKGNvbmZpZ1N0b3JlOiBDb25maWdTdG9yZTxUPiwgZ3JpZFRlbXBsYXRlU2VydmljZTogR3JpZFRlbXBsYXRlU2VydmljZTxUPiwgY3VycmVudEluZGV4OiBudW1iZXIpIHtcclxuICAgICAgICB0aGlzLmNvbmZpZ1N0b3JlID0gY29uZmlnU3RvcmU7XHJcbiAgICAgICAgdGhpcy5wYXJlbnRFbGVtZW50ID0galF1ZXJ5KHRoaXMuY29uZmlnU3RvcmUuT3B0aW9ucy5jb250YWluZXJFbGVtZW50KTtcclxuICAgICAgICB0aGlzLmdyaWRUZW1wbGF0ZVNlcnZpY2UgPSBncmlkVGVtcGxhdGVTZXJ2aWNlO1xyXG4gICAgICAgIHRoaXMuc2V0Q3VycmVudEluZGV4KGN1cnJlbnRJbmRleCk7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgb25SZXNpemUoKTogdm9pZCB7XHJcbiAgICAgICAgLy9cclxuICAgIH1cclxuICAgIHB1YmxpYyBzZXRDdXJyZW50SW5kZXggPSAoaW5kZXg6IG51bWJlcikgPT4ge1xyXG4gICAgICAgIHRoaXMuY3VycmVudEluZGV4ID0gaW5kZXg7XHJcbiAgICAgICAgdGhpcy5ncmlkVGVtcGxhdGVTZXJ2aWNlLkN1cnJlbnRJbmRleCA9IGluZGV4O1xyXG4gICAgfVxyXG4gICAgcHVibGljIGdldEN1cnJlbnRJbmRleCA9ICgpID0+IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5jdXJyZW50SW5kZXg7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgb25Eb2N1bWVudENsaWNrKGV2ZW50KTogdm9pZCB7XHJcbiAgICAgICAgLy8gTm8gT3BcclxuICAgIH1cclxuICAgIHB1YmxpYyBSZWdpc3RlckRvbUhhbmRsZXIgPSAoKTogdm9pZCA9PiB7XHJcbiAgICAgICAgLy8gUmVnaXN0ZXJpbmcgSlF1ZXJ5IEV2ZW50IEhhbmRsZXIgaWYgSGVhZGVyIGlzIENsaWNrZWQuXHJcbiAgICAgICAgdGhpcy5wYXJlbnRFbGVtZW50LmZpbmQoXCIudGFibGUtYm9keVwiKS5vbihcInNjcm9sbFwiLCB0aGlzLmhhbmRsZVJlc2l6ZSk7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgcmVtb3ZlSGFuZGxlciA9ICgpID0+IHtcclxuICAgICAgICB0aGlzLnBhcmVudEVsZW1lbnQuZmluZChcIi50YWJsZS1ib2R5XCIpLm9mZihcInNjcm9sbFwiLCB0aGlzLmhhbmRsZVJlc2l6ZSk7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgcmVzZXRQYXJlbnRPZmZzZXQgPSAoKSA9PiB7XHJcbiAgICAgICAgdGhpcy5wYXJlbnRPZmZTZXRMZWZ0ID0gdGhpcy5wYXJlbnRFbGVtZW50Lm9mZnNldCgpLmxlZnQ7XHJcbiAgICAgICAgdGhpcy5sZWZ0T2Zmc2V0ID0gdGhpcy5wYXJlbnRFbGVtZW50LmZpbmQoXCIudGFibGUtaGVhZGVyXCIpLm9mZnNldCgpLmxlZnQ7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgd2F0Y2hXaWR0aCA9ICgpID0+IHtcclxuICAgICAgICB0aGlzLnBhcmVudE9mZlNldExlZnQgPSB0aGlzLnBhcmVudEVsZW1lbnQub2Zmc2V0KCkubGVmdDtcclxuICAgICAgICB0aGlzLndhdGNoZXMucHVzaChzZXRJbnRlcnZhbCh0aGlzLnNldEhlYWRlck9mZnNldCwgMzAwKSk7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgdW5XYXRjaFdpZHRoID0gKCkgPT4ge1xyXG4gICAgICAgIGlmICh0aGlzLndhdGNoZXMgPT09IHVuZGVmaW5lZCB8fCB0aGlzLndhdGNoZXMgPT09IG51bGwgKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgZm9yIChjb25zdCB3YXRjaCBvZiB0aGlzLndhdGNoZXMpIHtcclxuICAgICAgICAgICAgY2xlYXJJbnRlcnZhbCh3YXRjaCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcHJpdmF0ZSBoYW5kbGVSZXNpemUgPSAoZXZlbnQpID0+IHtcclxuICAgICAgICBjb25zdCB0Qm9keU9iaiA9IHRoaXMucGFyZW50RWxlbWVudC5maW5kKFwiLnRhYmxlLWJvZHlcIik7XHJcbiAgICAgICAgaWYgKHRoaXMubGVmdE9mZnNldCA9PT0gdW5kZWZpbmVkIHx8IHRoaXMubGVmdE9mZnNldCA9PT0gbnVsbCkge1xyXG4gICAgICAgICAgICB0aGlzLmxlZnRPZmZzZXQgPSB0aGlzLnBhcmVudEVsZW1lbnQuZmluZChcIi50YWJsZS1oZWFkZXJcIikub2Zmc2V0KCkubGVmdDtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5wYXJlbnRFbGVtZW50LmZpbmQoXCIudGFibGUtaGVhZGVyXCIpLmNzcyhcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgXCJtYXJnaW4tbGVmdFwiOiAtMSAqIHRCb2R5T2JqLnNjcm9sbExlZnQoKSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICApO1xyXG4gICAgICAgIGNvbnN0IGFjdHVhbFRhYmxlSGVpZ2h0ID0gdEJvZHlPYmouZmluZChcIi5tYWluVGFibGVcIikuaGVpZ2h0KCk7XHJcbiAgICAgICAgY29uc3Qgc2Nyb2xsQ29udGFpbmVySGVpZ2h0ID0gdEJvZHlPYmouaGVpZ2h0KCk7XHJcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBpZiAodGhpcy5yZW5kZXJpbmcpIHtcclxuICAgICAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3Qgc2Nyb2xsVG9wID0gdEJvZHlPYmouc2Nyb2xsVG9wKCk7XHJcbiAgICAgICAgaWYgKChzY3JvbGxDb250YWluZXJIZWlnaHQgKyBzY3JvbGxUb3AgKSAtIChhY3R1YWxUYWJsZUhlaWdodCAqIDAuOCApID4gMCApIHtcclxuICAgICAgICAgICAgaWYgKCB0aGlzLmN1cnJlbnRJbmRleCA+PSB0aGlzLmdyaWRUZW1wbGF0ZVNlcnZpY2UuRGF0YUxlbmd0aCApIHtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLnJlbmRlcmluZyA9IHRydWU7XHJcbiAgICAgICAgICAgIGxldCBsYXN0SW5kZXggPSB0aGlzLmN1cnJlbnRJbmRleCArIHRoaXMuY29uZmlnU3RvcmUuT3B0aW9ucy5jaHVua1NpemU7XHJcbiAgICAgICAgICAgIGlmICggbGFzdEluZGV4ID49IHRoaXMuZ3JpZFRlbXBsYXRlU2VydmljZS5EYXRhTGVuZ3RoICkge1xyXG4gICAgICAgICAgICAgICAgbGFzdEluZGV4ID0gdGhpcy5ncmlkVGVtcGxhdGVTZXJ2aWNlLkRhdGFMZW5ndGggLSAxO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNvbnN0IGh0bWwgID0galF1ZXJ5KHRoaXMuZ3JpZFRlbXBsYXRlU2VydmljZS5nZXRUZW1wbGF0ZSh0aGlzLmN1cnJlbnRJbmRleCwgbGFzdEluZGV4KSk7XHJcbiAgICAgICAgICAgIHRCb2R5T2JqLmZpbmQoXCIubWFpblRhYmxlQm9keVwiKS5hcHBlbmQoaHRtbCk7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0Q3VycmVudEluZGV4KCBsYXN0SW5kZXggKyAxICk7XHJcbiAgICAgICAgICAgIHRoaXMucmVuZGVyaW5nID0gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgc2V0SGVhZGVyT2Zmc2V0ID0gKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGxlZnQgPSB0aGlzLnBhcmVudEVsZW1lbnQub2Zmc2V0KCkubGVmdDtcclxuICAgICAgICBpZiAoIHRoaXMucGFyZW50T2ZmU2V0TGVmdCAhPT0gbGVmdCApIHtcclxuICAgICAgICAgICAgY29uc3QgdEJvZHlPYmogPSB0aGlzLnBhcmVudEVsZW1lbnQuZmluZChcIi50YWJsZS1ib2R5XCIpO1xyXG4gICAgICAgICAgICBpZiAodGhpcy5sZWZ0T2Zmc2V0ID09PSB1bmRlZmluZWQgfHwgdGhpcy5sZWZ0T2Zmc2V0ID09PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmxlZnRPZmZzZXQgPSB0aGlzLnBhcmVudEVsZW1lbnQuZmluZChcIi50YWJsZS1oZWFkZXJcIikub2Zmc2V0KCkubGVmdDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLmxlZnRPZmZzZXQgPSB0aGlzLmxlZnRPZmZzZXQgLSAodGhpcy5wYXJlbnRPZmZTZXRMZWZ0IC0gbGVmdCk7XHJcbiAgICAgICAgICAgIHRoaXMucGFyZW50RWxlbWVudFxyXG4gICAgICAgICAgICAgICAgLmZpbmQoXCIudGFibGUtaGVhZGVyXCIpXHJcbiAgICAgICAgICAgICAgICAub2Zmc2V0KHtsZWZ0OiB0aGlzLmxlZnRPZmZzZXQsIHRvcDogMH0pO1xyXG4gICAgICAgICAgICB0aGlzLnBhcmVudE9mZlNldExlZnQgPSBsZWZ0O1xyXG4gICAgICAgICAgICB0Qm9keU9iai5zY3JvbGxMZWZ0KHRCb2R5T2JqLnNjcm9sbExlZnQoKSAtIDEpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvdHNsaW50LWxvYWRlcj8/cmVmLS0xIS4vc3JjL2pzL2V2ZW50SGFuZGxlcnMvU2Nyb2xsSGFuZGxlci50cyIsImltcG9ydCAqIGFzIEhhbmRsZWJhcnMgZnJvbSBcImhhbmRsZWJhcnNcIjtcclxuaW1wb3J0ICogYXMgR3JpZERldGFpbHNSb3dUZW1wbGF0ZSBmcm9tIFwiLi4vLi4vaGJzL2dyaWQtZGV0YWlscy1yb3cuaGJzXCI7XHJcbmltcG9ydCAqIGFzIEdyaWRGb290ZXIgZnJvbSBcIi4uLy4uL2hicy9ncmlkLWZvb3Rlci5oYnNcIjtcclxuaW1wb3J0ICogYXMgR3JpZE1haW5Sb3dUZW1wbGF0ZSBmcm9tIFwiLi4vLi4vaGJzL2dyaWQtbWFpbi1yb3cuaGJzXCI7XHJcbmltcG9ydCAqIGFzIE1hbmFnZUNvbHVtblRlbXBsYXRlIGZyb20gXCIuLi8uLi9oYnMvZ3JpZC1tYW5hZ2UtY29sdW1ucy5oYnNcIjtcclxuaW1wb3J0ICogYXMgR3JpZFRlbXBsYXRlIGZyb20gXCIuLi8uLi9oYnMvZ3JpZC5oYnNcIjtcclxuaW1wb3J0IHsgQ29uZmlnU3RvcmUgfSBmcm9tIFwiLi4vY29uZmlnL0NvbmZpZ1N0b3JlXCI7XHJcbmltcG9ydCB7IElQYWdpbmF0aW9uIH0gZnJvbSBcIi4uL21vZGVscy9JUGFnaW5hdGlvblwiO1xyXG5pbXBvcnQgeyBQYWdlciB9IGZyb20gXCIuLi9wYWdpbmF0aW9uL1BhZ2VyXCI7XHJcbmltcG9ydCB7IElDb2x1bW4gfSBmcm9tIFwiLi8uLi9tb2RlbHMvSUNvbHVtblwiO1xyXG5pbnRlcmZhY2UgSU1haW5Db2xSb3dBcnJheSB7XHJcbiAgICBjb2x1bW5WYWx1ZTogc3RyaW5nO1xyXG4gICAgdHlwZTogc3RyaW5nO1xyXG4gICAgaGlkZGVuOiBib29sZWFuO1xyXG4gICAgYWN0dWFsVmFsdWU6IHN0cmluZztcclxuICAgIGNvbHVtbk5hbWU6IHN0cmluZztcclxuICAgIGlkOiBzdHJpbmc7XHJcbiAgICBmaWx0ZXJhYmxlOiBib29sZWFuO1xyXG59XHJcbmV4cG9ydCBjbGFzcyBHcmlkVGVtcGxhdGVTZXJ2aWNlIDxUPiB7XHJcbiAgICBwcml2YXRlIGRhdGE6IFRbXTtcclxuICAgIHByaXZhdGUgc2VsZWN0ZWQ6IFRbXSA9IFtdO1xyXG4gICAgcHJpdmF0ZSBjb25maWdTdG9yZTogQ29uZmlnU3RvcmU8VD47XHJcbiAgICBwcml2YXRlIHRlbXBsYXRlRnVuY3Rpb25Gb3JHcmlkOiBhbnk7XHJcbiAgICBwcml2YXRlIHRlbXBsYXRlRnVuY3Rpb25Gb3JNYWluUm93OiBhbnk7XHJcbiAgICBwcml2YXRlIHRlbXBsYXRlRnVuY3Rpb25Gb3JEZXRhaWxzUm93OiBhbnk7XHJcbiAgICBwcml2YXRlIHRlbXBsYXRlRnVuY3Rpb25Gb3JGb290ZXI6IGFueTtcclxuICAgIHByaXZhdGUgdGVtcGxhdGVGdW5jdGlvbkZvck1hbmFnZUNvbDogYW55O1xyXG4gICAgcHJpdmF0ZSBjdXJyZW50SW5kZXg6IG51bWJlcjtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihjb25maWdTdG9yZTogQ29uZmlnU3RvcmU8VD4pIHtcclxuICAgICAgICB0aGlzLmNvbmZpZ1N0b3JlID0gY29uZmlnU3RvcmU7XHJcbiAgICAgICAgdGhpcy50ZW1wbGF0ZUZ1bmN0aW9uRm9yR3JpZCA9IEdyaWRUZW1wbGF0ZTtcclxuICAgICAgICB0aGlzLnRlbXBsYXRlRnVuY3Rpb25Gb3JNYWluUm93ID0gR3JpZE1haW5Sb3dUZW1wbGF0ZTtcclxuICAgICAgICB0aGlzLnRlbXBsYXRlRnVuY3Rpb25Gb3JEZXRhaWxzUm93ID0gR3JpZERldGFpbHNSb3dUZW1wbGF0ZTtcclxuICAgICAgICB0aGlzLnRlbXBsYXRlRnVuY3Rpb25Gb3JGb290ZXIgPSBHcmlkRm9vdGVyO1xyXG4gICAgICAgIHRoaXMudGVtcGxhdGVGdW5jdGlvbkZvck1hbmFnZUNvbCA9IE1hbmFnZUNvbHVtblRlbXBsYXRlO1xyXG4gICAgfVxyXG4gICAgcHVibGljIGlzQWxsU2VsZWN0ZWQgPSAoKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuc2VsZWN0ZWQubGVuZ3RoICE9PSAwICYmIHRoaXMuc2VsZWN0ZWQubGVuZ3RoID09PSB0aGlzLmRhdGEubGVuZ3RoO1xyXG4gICAgfVxyXG4gICAgcHVibGljIGdldCBEYXRhKCk6IFRbXSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZGF0YTtcclxuICAgIH1cclxuICAgIHB1YmxpYyBnZXQgU2VsZWN0ZWQoKTogVFtdIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5zZWxlY3RlZDtcclxuICAgIH1cclxuICAgIHB1YmxpYyBzZXQgQ3VycmVudEluZGV4KGluZGV4OiBudW1iZXIpIHtcclxuICAgICAgICB0aGlzLmN1cnJlbnRJbmRleCA9IGluZGV4O1xyXG4gICAgfVxyXG4gICAgcHVibGljIGdldCBEYXRhTGVuZ3RoKCk6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZGF0YS5sZW5ndGg7XHJcbiAgICB9XHJcbiAgICAvLyBGb3IgRmlyc3QgIFJlbmRlciAtIFVwZGF0ZSBIZWFkZXIgLCBCb2R5LCBQYWdpbmF0aW9uXHJcbiAgICBwdWJsaWMgR2V0Rmlyc3RUZW1wbGF0ZSA9IChkYXRhOiBUW10sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaXJzdEluZGV4OiBudW1iZXIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYXN0SW5kZXg6IG51bWJlcik6IHN0cmluZyA9PiB7XHJcbiAgICAgICAgdGhpcy5kYXRhID0gZGF0YTtcclxuICAgICAgICB0aGlzLnNlbGVjdGVkID0gW107XHJcbiAgICAgICAgY29uc3QgbWFpblJvd0FycmF5ID0gdGhpcy5HZXRSb3dzSHRtbChmaXJzdEluZGV4LCBsYXN0SW5kZXgpO1xyXG4gICAgICAgIHJldHVybiB0aGlzLnRlbXBsYXRlRnVuY3Rpb25Gb3JHcmlkKHtcclxuICAgICAgICAgICAgc2hvd0NhcHRpb246IHRoaXMuY29uZmlnU3RvcmUuT3B0aW9ucy5zaG93Q2FwdGlvbixcclxuICAgICAgICAgICAgc3VtbWFyeTogdGhpcy5jb25maWdTdG9yZS5PcHRpb25zLnN1bW1hcnksXHJcbiAgICAgICAgICAgIHJvd0xlbmd0aDogdGhpcy5kYXRhLmxlbmd0aCxcclxuICAgICAgICAgICAgY29sdW1uczogdGhpcy5jb25maWdTdG9yZS5PcHRpb25zLmNvbHVtbnMsXHJcbiAgICAgICAgICAgIG1haW5Sb3dBcnJheSxcclxuICAgICAgICAgICAgcGFnaW5hdGlvbkRhdGE6IFBhZ2VyLlBhZ2luYXRpb25EYXRhLFxyXG4gICAgICAgICAgICBjYXB0aW9uOiB0aGlzLmNvbmZpZ1N0b3JlLk9wdGlvbnMuY2FwdGlvbixcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIC8vIEZvciBWaXJ0dWFsaXphdG9uIFJlbmRlciAtIEJvZHlcclxuICAgIHB1YmxpYyBnZXRUZW1wbGF0ZSA9IChmaXJzdEluZGV4OiBudW1iZXIsIGxhc3RJbmRleDogbnVtYmVyKTogc3RyaW5nID0+IHtcclxuICAgICAgICBjb25zdCBtYWluUm93QXJyYXkgPSB0aGlzLkdldFJvd3NIdG1sKGZpcnN0SW5kZXgsIGxhc3RJbmRleCk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMudGVtcGxhdGVGdW5jdGlvbkZvck1haW5Sb3coe1xyXG4gICAgICAgICAgICBjb2x1bW5zOiB0aGlzLmNvbmZpZ1N0b3JlLk9wdGlvbnMuY29sdW1ucyxcclxuICAgICAgICAgICAgbWFpblJvd0FycmF5LFxyXG4gICAgICAgICAgICBjYXB0aW9uOiB0aGlzLmNvbmZpZ1N0b3JlLk9wdGlvbnMuY2FwdGlvbixcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIC8vIFVwZGF0ZSBvbmx5IG9uZSBSb3dcclxuICAgIHB1YmxpYyBnZXRUZW1wbGF0ZUZvck9uZVJvdyA9IChyb3c6IFQpOiBzdHJpbmcgPT4ge1xyXG4gICAgICAgIGNvbnN0IGVtcHR5U3RyID0gdGhpcy5jb25maWdTdG9yZS5PcHRpb25zLmVtcHR5VmFsdWU7XHJcbiAgICAgICAgY29uc3QgbWFpblJvd0NvbEFycmF5ID0gdGhpcy5nZXRNYWluUm93KHJvdywgZW1wdHlTdHIpO1xyXG4gICAgICAgIGNvbnN0IG1haW5Sb3dBcnJheSA9IFt7XHJcbiAgICAgICAgICAgIGlzQWxsU2VsZWN0ZWQ6IHRoaXMuaXNBbGxTZWxlY3RlZCgpLFxyXG4gICAgICAgICAgICBrZXlDb2x1bW46IHJvd1t0aGlzLmNvbmZpZ1N0b3JlLk9wdGlvbnMua2V5Q29sdW1uXSxcclxuICAgICAgICAgICAgbWFpblJvd0NvbEFycmF5LFxyXG4gICAgICAgICAgICBsZW5ndGg6IHRoaXMuY29uZmlnU3RvcmUuT3B0aW9ucy5jb2x1bW5zLmxlbmd0aCxcclxuICAgICAgICB9XTtcclxuICAgICAgICByZXR1cm4gdGhpcy50ZW1wbGF0ZUZ1bmN0aW9uRm9yTWFpblJvdyh7bWFpblJvd0FycmF5fSk7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgR2V0TWFuYWdlQ29sdW1uc0h0bWwgPSAoKTogc3RyaW5nID0+IHtcclxuICAgICAgICByZXR1cm4gdGhpcy50ZW1wbGF0ZUZ1bmN0aW9uRm9yTWFuYWdlQ29sKHtjb2x1bW5zOiB0aGlzLmNvbmZpZ1N0b3JlLk9wdGlvbnMuY29sdW1uc30pO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBHZXRSb3dzSHRtbCA9IChmaXJzdEluZGV4OiBudW1iZXIsIGxhc3RJbmRleDogbnVtYmVyKTogYW55W10gPT4ge1xyXG4gICAgICAgIGNvbnN0IG1haW5Sb3dBcnJheTogYW55W10gPSBbXTtcclxuICAgICAgICBjb25zdCBlbXB0eVN0ciA9IHRoaXMuY29uZmlnU3RvcmUuT3B0aW9ucy5lbXB0eVZhbHVlO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSBmaXJzdEluZGV4OyBpIDw9IGxhc3RJbmRleDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHJvdzogVCA9IHRoaXMuZGF0YVtpXTtcclxuICAgICAgICAgICAgY29uc3QgbWFpblJvd0NvbEFycmF5OiBJTWFpbkNvbFJvd0FycmF5W10gPSB0aGlzLmdldE1haW5Sb3cocm93LCBlbXB0eVN0cik7XHJcbiAgICAgICAgICAgIG1haW5Sb3dBcnJheS5wdXNoKHtcclxuICAgICAgICAgICAgICAgIHJvd0luZGV4OiBpLFxyXG4gICAgICAgICAgICAgICAgaXNBbGxTZWxlY3RlZDogdGhpcy5pc0FsbFNlbGVjdGVkKCksXHJcbiAgICAgICAgICAgICAgICBrZXlDb2x1bW46IHJvd1t0aGlzLmNvbmZpZ1N0b3JlLk9wdGlvbnMua2V5Q29sdW1uXSxcclxuICAgICAgICAgICAgICAgIG1haW5Sb3dDb2xBcnJheSxcclxuICAgICAgICAgICAgICAgIGxlbmd0aDogdGhpcy5jb25maWdTdG9yZS5PcHRpb25zLmNvbHVtbnMubGVuZ3RoLFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG1haW5Sb3dBcnJheTtcclxuICAgIH1cclxuICAgIHB1YmxpYyBzZWxlY3RSb3dzID0gKHJvd0lkOiBzdHJpbmcpID0+IHtcclxuICAgICAgICBjb25zdCBrZXkgPSB0aGlzLmNvbmZpZ1N0b3JlLk9wdGlvbnMua2V5Q29sdW1uO1xyXG4gICAgICAgIGNvbnN0IG5ld1NlbGVjdGVkID0gW107XHJcbiAgICAgICAgbGV0IGV4aXN0cyA9IGZhbHNlO1xyXG4gICAgICAgIGZvciAoY29uc3Qgc2VsZWN0ZWQgb2YgdGhpcy5zZWxlY3RlZCkge1xyXG4gICAgICAgICAgICBpZiAoIHJvd0lkID09PSBzZWxlY3RlZFtrZXldICkge1xyXG4gICAgICAgICAgICAgICAgZXhpc3RzID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICggIWV4aXN0cyApIHtcclxuICAgICAgICAgICAgbmV3U2VsZWN0ZWQucHVzaChyb3dJZCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZvciAoY29uc3QgdG9CZUFkZGVkIG9mIG5ld1NlbGVjdGVkKSB7XHJcbiAgICAgICAgICAgIGZvciAoY29uc3Qgb25lUm93IG9mIHRoaXMuZGF0YSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKCB0b0JlQWRkZWQgPT09IG9uZVJvd1trZXldICkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWQucHVzaChvbmVSb3cpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcHVibGljIGRlU2VsZWN0Um93cyA9IChyb3dJZDogc3RyaW5nKSA9PiB7XHJcbiAgICAgICAgY29uc3QgbmV3U2VsZWN0ZWQgPSBbXTtcclxuICAgICAgICBjb25zdCBrZXkgPSB0aGlzLmNvbmZpZ1N0b3JlLk9wdGlvbnMua2V5Q29sdW1uO1xyXG4gICAgICAgIGZvciAoY29uc3Qgc2VsZWN0ZWQgb2YgdGhpcy5zZWxlY3RlZCkge1xyXG4gICAgICAgICAgICBpZiAoIHJvd0lkICE9PSBzZWxlY3RlZFtrZXldICkge1xyXG4gICAgICAgICAgICAgICAgbmV3U2VsZWN0ZWQucHVzaChzZWxlY3RlZCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5zZWxlY3RlZCA9IG5ld1NlbGVjdGVkO1xyXG4gICAgfVxyXG4gICAgcHVibGljIHNlbGVjdEFsbCA9ICgpID0+IHtcclxuICAgICAgICB0aGlzLnNlbGVjdGVkID0gdGhpcy5kYXRhO1xyXG4gICAgfVxyXG4gICAgcHVibGljIGRlU2VsZWN0QWxsID0gKCkgPT4ge1xyXG4gICAgICAgIHRoaXMuc2VsZWN0ZWQgPSBbXTtcclxuICAgIH1cclxuICAgIHB1YmxpYyB1cGRhdGVSb3dzID0gKHJvd3M6IFRbXSkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGtleSA9IHRoaXMuY29uZmlnU3RvcmUuT3B0aW9ucy5rZXlDb2x1bW47XHJcbiAgICAgICAgaWYgKCByb3dzID09PSB1bmRlZmluZWQgfHwgIXJvd3MubGVuZ3RoICkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZvciAoY29uc3Qgcm93IG9mIHJvd3MpIHtcclxuICAgICAgICAgICAgZm9yIChsZXQgZGF0YVJvdyBvZiB0aGlzLmRhdGEpIHtcclxuICAgICAgICAgICAgICAgIGlmIChyb3dba2V5XSA9PT0gZGF0YVJvd1trZXldICkge1xyXG4gICAgICAgICAgICAgICAgICAgIGRhdGFSb3cgPSByb3c7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgZm9yIChjb25zdCByb3cgb2Ygcm93cykge1xyXG4gICAgICAgICAgICBmb3IgKGxldCBkYXRhUm93IG9mIHRoaXMuc2VsZWN0ZWQpIHtcclxuICAgICAgICAgICAgICAgIGlmIChyb3dba2V5XSA9PT0gZGF0YVJvd1trZXldICkge1xyXG4gICAgICAgICAgICAgICAgICAgIGRhdGFSb3cgPSByb3c7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBwcml2YXRlIGdldE1haW5Sb3cgPSAocm93OiBULCBlbXB0eVN0cjogc3RyaW5nKTogSU1haW5Db2xSb3dBcnJheVtdID0+IHtcclxuICAgICAgICBjb25zdCBtYWluUm93Q29sQXJyYXk6IGFueVtdID0gW107XHJcbiAgICAgICAgZm9yIChjb25zdCBjb2wgb2YgdGhpcy5jb25maWdTdG9yZS5PcHRpb25zLmNvbHVtbnMpIHtcclxuICAgICAgICAgICAgbGV0IGNvbHVtblZhbHVlID0gcm93W2NvbC5pZF07XHJcbiAgICAgICAgICAgIGlmIChjb2wucmVuZGVySHlicmlkKSB7XHJcbiAgICAgICAgICAgICAgICBjb2x1bW5WYWx1ZSA9IHRoaXMuY29uZmlnU3RvcmUuT3B0aW9ucy5oeWJyaWRGdW5jdGlvbihjb2wsIHJvdyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKGVtcHR5U3RyICE9PSB1bmRlZmluZWQgJiYgY29sdW1uVmFsdWUgPT09IGVtcHR5U3RyKSB7XHJcbiAgICAgICAgICAgICAgICBjb2x1bW5WYWx1ZSA9IFwiXCI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgbWFpblJvd0NvbEFycmF5LnB1c2goe1xyXG4gICAgICAgICAgICAgICAgY29sdW1uVmFsdWUsXHJcbiAgICAgICAgICAgICAgICB0eXBlOiBjb2wudHlwZSxcclxuICAgICAgICAgICAgICAgIGhpZGRlbjogY29sLmhpZGRlbixcclxuICAgICAgICAgICAgICAgIGFjdHVhbFZhbHVlOiByb3dbY29sLmlkXSxcclxuICAgICAgICAgICAgICAgIGNvbHVtbk5hbWU6IGNvbC5uYW1lLFxyXG4gICAgICAgICAgICAgICAgaWQ6IGNvbC5pZCxcclxuICAgICAgICAgICAgICAgIGZpbHRlcmFibGU6IGNvbC5maWx0ZXJhYmxlLFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG1haW5Sb3dDb2xBcnJheTtcclxuICAgIH1cclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvdHNsaW50LWxvYWRlcj8/cmVmLS0xIS4vc3JjL2pzL3NlcnZpY2VzL0dyaWRUZW1wbGF0ZVNlcnZpY2UudHMiLCJjb25zdCBzZWxlY3RlZCA9IChpbnB1dDogbnVtYmVyLCB2YWx1ZTogbnVtYmVyKTogc3RyaW5nID0+IHtcclxuICAgIHJldHVybiBpbnB1dCA9PT0gdmFsdWUgPyBcInNlbGVjdGVkXCIgOiBcIlwiO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgc2VsZWN0ZWQ7XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy90c2xpbnQtbG9hZGVyPz9yZWYtLTEhLi9zcmMvaGJzL2hlbHBlcnMvU2VsZWN0ZWQudHMiLCJ2YXIgSGFuZGxlYmFycyA9IHJlcXVpcmUoXCJoYW5kbGViYXJzXCIpO1xuZnVuY3Rpb24gX19kZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIChvYmouX19lc01vZHVsZSA/IG9ialtcImRlZmF1bHRcIl0gOiBvYmopOyB9XG5tb2R1bGUuZXhwb3J0cyA9IChIYW5kbGViYXJzW1wiZGVmYXVsdFwiXSB8fCBIYW5kbGViYXJzKS50ZW1wbGF0ZSh7XCIxXCI6ZnVuY3Rpb24oY29udGFpbmVyLGRlcHRoMCxoZWxwZXJzLHBhcnRpYWxzLGRhdGEpIHtcbiAgICB2YXIgYWxpYXMxPWNvbnRhaW5lci5sYW1iZGEsIGFsaWFzMj1jb250YWluZXIuZXNjYXBlRXhwcmVzc2lvbjtcblxuICByZXR1cm4gXCIgICAgICAgICAgICAgICAgPHRyIGRhdGEtaGVhZGVyLWlkPVxcXCJcIlxuICAgICsgYWxpYXMyKGFsaWFzMSgoZGVwdGgwICE9IG51bGwgPyBkZXB0aDAubmFtZSA6IGRlcHRoMCksIGRlcHRoMCkpXG4gICAgKyBcIlxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8dGQ+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cXFwiY2hlY2tib3hcXFwiIGNsYXNzPVxcXCJjb2wtc2V0dGluZ3MtaGlkZGVuLWNoZWNrYm94IGd1aSBtLXItMTBcXFwiIHZhbHVlPVxcXCJcIlxuICAgICsgYWxpYXMyKGFsaWFzMSgoZGVwdGgwICE9IG51bGwgPyBkZXB0aDAuaWQgOiBkZXB0aDApLCBkZXB0aDApKVxuICAgICsgXCJcXFwiIFwiXG4gICAgKyBhbGlhczIoX19kZWZhdWx0KHJlcXVpcmUoXCJDOlxcXFxUZWNobmljYWxcXFxcUmVwb1xcXFxHcmlkb29cXFxcc3JjXFxcXGhic1xcXFxoZWxwZXJzXFxcXENoZWNrZWQudHNcIikpLmNhbGwoZGVwdGgwICE9IG51bGwgPyBkZXB0aDAgOiAoY29udGFpbmVyLm51bGxDb250ZXh0IHx8IHt9KSwoZGVwdGgwICE9IG51bGwgPyBkZXB0aDAuaGlkZGVuIDogZGVwdGgwKSx7XCJuYW1lXCI6XCJDaGVja2VkXCIsXCJoYXNoXCI6e30sXCJkYXRhXCI6ZGF0YX0pKVxuICAgICsgXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXG4gICAgKyBhbGlhczIoYWxpYXMxKChkZXB0aDAgIT0gbnVsbCA/IGRlcHRoMC5uYW1lIDogZGVwdGgwKSwgZGVwdGgwKSlcbiAgICArIFwiXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDwvdGQ+XFxyXFxuICAgICAgICAgICAgICAgIDwvdHI+XFxyXFxuXCI7XG59LFwiY29tcGlsZXJcIjpbNyxcIj49IDQuMC4wXCJdLFwibWFpblwiOmZ1bmN0aW9uKGNvbnRhaW5lcixkZXB0aDAsaGVscGVycyxwYXJ0aWFscyxkYXRhKSB7XG4gICAgdmFyIHN0YWNrMTtcblxuICByZXR1cm4gXCI8ZGl2IGNsYXNzPVxcXCJndWkgb2YtaGlkZGVuIHAtMTAgbWluLXctNTAgdy1hdXRvIGZsdWlkLWggZmxleCBjb2x1bW4gY29udGFpbmVyXFxcIiA+XFxyXFxuICAgIDxkaXYgY2xhc3M9XFxcImNvbC1zZXR0aW5ncy1oZWFkZXJcXFwiIHN0eWxlPVxcXCJ3aWR0aDogMTAwJVxcXCI+XFxyXFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJndWkgbWluaSBmbHVpZCBpY29uIGlucHV0XFxcIj5cXHJcXG4gICAgICAgICAgICA8aW5wdXQgY2xhc3M9XFxcImNvbC1zZXR0aW5ncy1maWx0ZXJcXFwiIHR5cGU9XFxcInRleHRcXFwiIHBsYWNlaG9sZGVyPVxcXCJTZWFyY2ggZmlsdGVyLi4uXFxcIj5cXHJcXG4gICAgICAgICAgICA8aSBjbGFzcz1cXFwic2VhcmNoIGljb25cXFwiPjwvaT5cXHJcXG4gICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwiZ3VpIG0tdC0xMFxcXCI+XFxyXFxuICAgICAgICAgICAgPGEgY2xhc3M9XFxcImd1aSBsZWZ0IHNob3ctYWxsLWNvbHVtblxcXCI+U2hvdyBBbGw8L2E+XFxyXFxuICAgICAgICAgICAgPGEgY2xhc3M9XFxcImd1aSByaWdodCBoaWRlLWFsbC1jb2x1bW5cXFwiPkhpZGUgQWxsPC9hPlxcclxcbiAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJndWkgY2xlYXJcXFwiPjwvZGl2PlxcclxcbiAgICA8L2Rpdj5cXHJcXG4gICAgPGRpdiBjbGFzcz1cXFwiZ3VpIGNsZWFyXFxcIj48L2Rpdj5cXHJcXG4gICAgPGRpdiBjbGFzcz1cXFwiY29sLXNldHRpbmdzLXRhYmxlIGd1aSBmbHVpZCBoLTkwIG9mLWF1dG8gcC01IG0tdC0xMFxcXCIgPlxcclxcbiAgICAgICAgPHRhYmxlIGNsYXNzPVxcXCJndWkgc21hbGwgdmVyeSBib3JkZXItbGVzcyBiYXNpYyBjb21wYWN0IHRhYmxlXFxcIj5cXHJcXG4gICAgICAgICAgICA8dGJvZHk+XFxyXFxuXCJcbiAgICArICgoc3RhY2sxID0gaGVscGVycy5lYWNoLmNhbGwoZGVwdGgwICE9IG51bGwgPyBkZXB0aDAgOiAoY29udGFpbmVyLm51bGxDb250ZXh0IHx8IHt9KSwoZGVwdGgwICE9IG51bGwgPyBkZXB0aDAuY29sdW1ucyA6IGRlcHRoMCkse1wibmFtZVwiOlwiZWFjaFwiLFwiaGFzaFwiOnt9LFwiZm5cIjpjb250YWluZXIucHJvZ3JhbSgxLCBkYXRhLCAwKSxcImludmVyc2VcIjpjb250YWluZXIubm9vcCxcImRhdGFcIjpkYXRhfSkpICE9IG51bGwgPyBzdGFjazEgOiBcIlwiKVxuICAgICsgXCIgICAgICAgICAgICA8L3Rib2R5PlxcclxcbiAgICAgICAgPC90YWJsZT5cXHJcXG4gICAgPC9kaXY+XFxyXFxuPC9kaXY+XCI7XG59LFwidXNlRGF0YVwiOnRydWV9KTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9oYnMvZ3JpZC1tYW5hZ2UtY29sdW1ucy5oYnNcbi8vIG1vZHVsZSBpZCA9IDI0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIiwiY29uc3QgY2hlY2tlZCA9IChib29sOiBib29sZWFuKTogc3RyaW5nID0+IHtcclxuICAgIHJldHVybiAhYm9vbCA/IFwiY2hlY2tlZFwiIDogXCJcIjtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNoZWNrZWQ7XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy90c2xpbnQtbG9hZGVyPz9yZWYtLTEhLi9zcmMvaGJzL2hlbHBlcnMvQ2hlY2tlZC50cyIsInZhciBIYW5kbGViYXJzID0gcmVxdWlyZShcImhhbmRsZWJhcnNcIik7XG5mdW5jdGlvbiBfX2RlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgKG9iai5fX2VzTW9kdWxlID8gb2JqW1wiZGVmYXVsdFwiXSA6IG9iaik7IH1cbm1vZHVsZS5leHBvcnRzID0gKEhhbmRsZWJhcnNbXCJkZWZhdWx0XCJdIHx8IEhhbmRsZWJhcnMpLnRlbXBsYXRlKHtcIjFcIjpmdW5jdGlvbihjb250YWluZXIsZGVwdGgwLGhlbHBlcnMscGFydGlhbHMsZGF0YSkge1xuICAgIHJldHVybiBcIiAgICAgICAgICAgICAgICA8Y2FwdGlvbiBjbGFzcz1cXFwiZ3VpIGd1aS1zdWJoZWFkaW5nLTIgbS0wIHAtMCB0ZXh0LWxlZnRcXFwiPlwiXG4gICAgKyBjb250YWluZXIuZXNjYXBlRXhwcmVzc2lvbihjb250YWluZXIubGFtYmRhKChkZXB0aDAgIT0gbnVsbCA/IGRlcHRoMC5jYXB0aW9uIDogZGVwdGgwKSwgZGVwdGgwKSlcbiAgICArIFwiPC9jYXB0aW9uPlxcclxcblwiO1xufSxcIjNcIjpmdW5jdGlvbihjb250YWluZXIsZGVwdGgwLGhlbHBlcnMscGFydGlhbHMsZGF0YSkge1xuICAgIHZhciBzdGFjazE7XG5cbiAgcmV0dXJuIFwiICAgICAgICAgICAgICAgICAgICBcIlxuICAgICsgKChzdGFjazEgPSBfX2RlZmF1bHQocmVxdWlyZShcIkM6XFxcXFRlY2huaWNhbFxcXFxSZXBvXFxcXEdyaWRvb1xcXFxzcmNcXFxcaGJzXFxcXGhlbHBlcnNcXFxcQ29sdW1uLnRzXCIpKS5jYWxsKGRlcHRoMCAhPSBudWxsID8gZGVwdGgwIDogKGNvbnRhaW5lci5udWxsQ29udGV4dCB8fCB7fSksZGVwdGgwLHtcIm5hbWVcIjpcIkNvbHVtblwiLFwiaGFzaFwiOnt9LFwiZGF0YVwiOmRhdGF9KSkgIT0gbnVsbCA/IHN0YWNrMSA6IFwiXCIpXG4gICAgKyBcIlxcclxcblwiO1xufSxcIjVcIjpmdW5jdGlvbihjb250YWluZXIsZGVwdGgwLGhlbHBlcnMscGFydGlhbHMsZGF0YSkge1xuICAgIHZhciBzdGFjazE7XG5cbiAgcmV0dXJuICgoc3RhY2sxID0gaGVscGVyc1tcImlmXCJdLmNhbGwoZGVwdGgwICE9IG51bGwgPyBkZXB0aDAgOiAoY29udGFpbmVyLm51bGxDb250ZXh0IHx8IHt9KSwoZGVwdGgwICE9IG51bGwgPyBkZXB0aDAuc29ydGFibGUgOiBkZXB0aDApLHtcIm5hbWVcIjpcImlmXCIsXCJoYXNoXCI6e30sXCJmblwiOmNvbnRhaW5lci5wcm9ncmFtKDYsIGRhdGEsIDApLFwiaW52ZXJzZVwiOmNvbnRhaW5lci5wcm9ncmFtKDgsIGRhdGEsIDApLFwiZGF0YVwiOmRhdGF9KSkgIT0gbnVsbCA/IHN0YWNrMSA6IFwiXCIpO1xufSxcIjZcIjpmdW5jdGlvbihjb250YWluZXIsZGVwdGgwLGhlbHBlcnMscGFydGlhbHMsZGF0YSkge1xuICAgIHZhciBzdGFjazE7XG5cbiAgcmV0dXJuIFwiICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXG4gICAgKyAoKHN0YWNrMSA9IF9fZGVmYXVsdChyZXF1aXJlKFwiQzpcXFxcVGVjaG5pY2FsXFxcXFJlcG9cXFxcR3JpZG9vXFxcXHNyY1xcXFxoYnNcXFxcaGVscGVyc1xcXFxPcmRlcmVkLnRzXCIpKS5jYWxsKGRlcHRoMCAhPSBudWxsID8gZGVwdGgwIDogKGNvbnRhaW5lci5udWxsQ29udGV4dCB8fCB7fSksZGVwdGgwLChkYXRhICYmIGRhdGEuaW5kZXgpLHtcIm5hbWVcIjpcIk9yZGVyZWRcIixcImhhc2hcIjp7fSxcImRhdGFcIjpkYXRhfSkpICE9IG51bGwgPyBzdGFjazEgOiBcIlwiKVxuICAgICsgXCJcXHJcXG5cIjtcbn0sXCI4XCI6ZnVuY3Rpb24oY29udGFpbmVyLGRlcHRoMCxoZWxwZXJzLHBhcnRpYWxzLGRhdGEpIHtcbiAgICB2YXIgc3RhY2sxLCBhbGlhczE9ZGVwdGgwICE9IG51bGwgPyBkZXB0aDAgOiAoY29udGFpbmVyLm51bGxDb250ZXh0IHx8IHt9KSwgYWxpYXMyPWNvbnRhaW5lci5lc2NhcGVFeHByZXNzaW9uLCBhbGlhczM9Y29udGFpbmVyLmxhbWJkYTtcblxuICByZXR1cm4gXCIgICAgICAgICAgICAgICAgICAgICAgICA8dGggcm9sZT1cXFwiY29sdW1uaGVhZGVyXFxcIlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcmlhLWNvbGluZGV4PVxcXCJcIlxuICAgICsgYWxpYXMyKF9fZGVmYXVsdChyZXF1aXJlKFwiQzpcXFxcVGVjaG5pY2FsXFxcXFJlcG9cXFxcR3JpZG9vXFxcXHNyY1xcXFxoYnNcXFxcaGVscGVyc1xcXFxBZGQudHNcIikpLmNhbGwoYWxpYXMxLChkYXRhICYmIGRhdGEuaW5kZXgpLDMse1wibmFtZVwiOlwiQWRkXCIsXCJoYXNoXCI6e30sXCJkYXRhXCI6ZGF0YX0pKVxuICAgICsgXCJcXFwiXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFyaWEtc29ydD1cXFwibm9uZVxcXCIgXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPVxcXCJcIlxuICAgICsgYWxpYXMyKGFsaWFzMygoZGVwdGgwICE9IG51bGwgPyBkZXB0aDAubmFtZSA6IGRlcHRoMCksIGRlcHRoMCkpXG4gICAgKyBcIlxcXCJcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFiaW5kZXg9XFxcIi0xXFxcIlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cXFwiZ3VpIGN1cnNvci1kZWZhdWx0IGRpc2FibGVkXFxcIiBcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcbiAgICArICgoc3RhY2sxID0gX19kZWZhdWx0KHJlcXVpcmUoXCJDOlxcXFxUZWNobmljYWxcXFxcUmVwb1xcXFxHcmlkb29cXFxcc3JjXFxcXGhic1xcXFxoZWxwZXJzXFxcXEFyaWFIaWRkZW4udHNcIikpLmNhbGwoYWxpYXMxLChkZXB0aDAgIT0gbnVsbCA/IGRlcHRoMC5oaWRkZW4gOiBkZXB0aDApLHtcIm5hbWVcIjpcIkFyaWFIaWRkZW5cIixcImhhc2hcIjp7fSxcImRhdGFcIjpkYXRhfSkpICE9IG51bGwgPyBzdGFjazEgOiBcIlwiKVxuICAgICsgXCJcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XFxcImhlYWRlci1cIlxuICAgICsgYWxpYXMyKGFsaWFzMygoZGVwdGgwICE9IG51bGwgPyBkZXB0aDAuaWQgOiBkZXB0aDApLCBkZXB0aDApKVxuICAgICsgXCJcXFwiIFxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhLWhlYWRlci1pZD1cXFwiXCJcbiAgICArIGFsaWFzMihhbGlhczMoKGRlcHRoMCAhPSBudWxsID8gZGVwdGgwLmlkIDogZGVwdGgwKSwgZGVwdGgwKSlcbiAgICArIFwiXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XFxcImd1aSBzdWIgaGVhZGVyXFxcIj5cIlxuICAgICsgYWxpYXMyKGFsaWFzMygoZGVwdGgwICE9IG51bGwgPyBkZXB0aDAubmFtZSA6IGRlcHRoMCksIGRlcHRoMCkpXG4gICAgKyBcIjwvc3Bhbj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RoPlxcclxcblwiO1xufSxcImNvbXBpbGVyXCI6WzcsXCI+PSA0LjAuMFwiXSxcIm1haW5cIjpmdW5jdGlvbihjb250YWluZXIsZGVwdGgwLGhlbHBlcnMscGFydGlhbHMsZGF0YSkge1xuICAgIHZhciBzdGFjazEsIGFsaWFzMT1jb250YWluZXIubGFtYmRhLCBhbGlhczI9Y29udGFpbmVyLmVzY2FwZUV4cHJlc3Npb24sIGFsaWFzMz1kZXB0aDAgIT0gbnVsbCA/IGRlcHRoMCA6IChjb250YWluZXIubnVsbENvbnRleHQgfHwge30pO1xuXG4gIHJldHVybiBcIjxkaXYgY2xhc3M9XFxcImlubmVyLWNvbnRhaW5lciBndWkgZmx1aWQgY29udGFpbmVyXFxcIiBcXHJcXG4gICAgYXJpYS1yZWFkb25seT1cXFwidHJ1ZVxcXCIgXFxyXFxuICAgIGFyaWEtcm93Y291bnQ9XFxcIlwiXG4gICAgKyBhbGlhczIoYWxpYXMxKChkZXB0aDAgIT0gbnVsbCA/IGRlcHRoMC5yb3dMZW5ndGggOiBkZXB0aDApLCBkZXB0aDApKVxuICAgICsgXCJcXFwiIFxcclxcbiAgICBhcmlhLWNvbGNvdW50PVxcXCJcIlxuICAgICsgYWxpYXMyKF9fZGVmYXVsdChyZXF1aXJlKFwiQzpcXFxcVGVjaG5pY2FsXFxcXFJlcG9cXFxcR3JpZG9vXFxcXHNyY1xcXFxoYnNcXFxcaGVscGVyc1xcXFxBZGQudHNcIikpLmNhbGwoYWxpYXMzLCgoc3RhY2sxID0gKGRlcHRoMCAhPSBudWxsID8gZGVwdGgwLmNvbHVtbnMgOiBkZXB0aDApKSAhPSBudWxsID8gc3RhY2sxLmxlbmd0aCA6IHN0YWNrMSksMix7XCJuYW1lXCI6XCJBZGRcIixcImhhc2hcIjp7fSxcImRhdGFcIjpkYXRhfSkpXG4gICAgKyBcIlxcXCJcXHJcXG4gICAgYXJpYS1sYWJlbD1cXFwiXCJcbiAgICArIGFsaWFzMihhbGlhczEoKGRlcHRoMCAhPSBudWxsID8gZGVwdGgwLmNhcHRpb24gOiBkZXB0aDApLCBkZXB0aDApKVxuICAgICsgXCJcXFwiXFxyXFxuICAgIHN1bW1hcnk9XFxcIlwiXG4gICAgKyBhbGlhczIoYWxpYXMxKChkZXB0aDAgIT0gbnVsbCA/IGRlcHRoMC5zdW1tYXJ5IDogZGVwdGgwKSwgZGVwdGgwKSlcbiAgICArIFwiXFxcIlxcclxcbiAgICBhcmlhLWxpdmU9XFxcInBvbGl0ZVxcXCJcXHJcXG4gICAgcm9sZT1cXFwiZ3JpZFxcXCIgXFxyXFxuICAgIHN0eWxlPVxcXCJwYWRkaW5nOjAlO1xcXCI+XFxyXFxuICAgIDxkaXYgY2xhc3M9XFxcInRhYmxlLWhlYWRlclxcXCI+XFxyXFxuICAgICAgICA8dGFibGUgaWQ9XFxcImhlYWRlcnRhYmxlXFxcIiByb2xlPVxcXCJwcmVzZW50YXRpb25cXFwiIGNsYXNzPVxcXCJndWkgYmFzaWMgbGFyZ2UgY29tcGFjdCBzb3J0YWJsZSBmaXhlZCBzaW5nbGUgbGluZSB0YWJsZVxcXCI+XFxyXFxuXCJcbiAgICArICgoc3RhY2sxID0gaGVscGVyc1tcImlmXCJdLmNhbGwoYWxpYXMzLChkZXB0aDAgIT0gbnVsbCA/IGRlcHRoMC5zaG93Q2FwdGlvbiA6IGRlcHRoMCkse1wibmFtZVwiOlwiaWZcIixcImhhc2hcIjp7fSxcImZuXCI6Y29udGFpbmVyLnByb2dyYW0oMSwgZGF0YSwgMCksXCJpbnZlcnNlXCI6Y29udGFpbmVyLm5vb3AsXCJkYXRhXCI6ZGF0YX0pKSAhPSBudWxsID8gc3RhY2sxIDogXCJcIilcbiAgICArIFwiICAgICAgICAgICAgPGNvbGdyb3VwIGNsYXNzPVxcXCJoZWFkZXJDb2xHcm91cFxcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDxjb2wgc3R5bGU9XFxcIndpZHRoOjQwcHg7XFxcIiAvPlxcclxcbiAgICAgICAgICAgICAgICA8Y29sIHN0eWxlPVxcXCJ3aWR0aDo0MHB4O1xcXCIgLz5cXHJcXG5cIlxuICAgICsgKChzdGFjazEgPSBoZWxwZXJzLmVhY2guY2FsbChhbGlhczMsKGRlcHRoMCAhPSBudWxsID8gZGVwdGgwLmNvbHVtbnMgOiBkZXB0aDApLHtcIm5hbWVcIjpcImVhY2hcIixcImhhc2hcIjp7fSxcImZuXCI6Y29udGFpbmVyLnByb2dyYW0oMywgZGF0YSwgMCksXCJpbnZlcnNlXCI6Y29udGFpbmVyLm5vb3AsXCJkYXRhXCI6ZGF0YX0pKSAhPSBudWxsID8gc3RhY2sxIDogXCJcIilcbiAgICArIFwiICAgICAgICAgICAgPC9jb2xncm91cD5cXHJcXG4gICAgICAgICAgICA8dGhlYWQgcm9sZT1cXFwicm93Z3JvdXBcXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8dHIgcm9sZT1cXFwicm93XFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDx0aCByb2xlPVxcXCJjb2x1bW5oZWFkZXJcXFwiIGFyaWEtY29saW5kZXg9XFxcIjFcXFwiPjwvdGg+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8dGggcm9sZT1cXFwiY29sdW1uaGVhZGVyXFxcIiBcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICBhcmlhLWxhYmVsPVxcXCJTZWxlY3QgYWxsIHJvd3Mgb2YgXCJcbiAgICArIGFsaWFzMihhbGlhczEoKGRlcHRoMCAhPSBudWxsID8gZGVwdGgwLmNhcHRpb24gOiBkZXB0aDApLCBkZXB0aDApKVxuICAgICsgXCIgQ2hlY2tib3hcXFwiIFxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIGFyaWEtY29saW5kZXg9XFxcIjJcXFwiXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XFxcInNlbGVjdC1hbGwtY2hlY2tib3hcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCAgdHlwZT1cXFwiY2hlY2tib3hcXFwiIFxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJpYS1sYWJlbGxlZGJ5PVxcXCJzZWxlY3QtYWxsLWNoZWNrYm94XFxcIlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XFxcInNlbGVjdC1hbGwtY2hlY2tib3ggY3Vyc29yLXBvaW50ZXJcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPC90aD5cXHJcXG5cIlxuICAgICsgKChzdGFjazEgPSBoZWxwZXJzLmVhY2guY2FsbChhbGlhczMsKGRlcHRoMCAhPSBudWxsID8gZGVwdGgwLmNvbHVtbnMgOiBkZXB0aDApLHtcIm5hbWVcIjpcImVhY2hcIixcImhhc2hcIjp7fSxcImZuXCI6Y29udGFpbmVyLnByb2dyYW0oNSwgZGF0YSwgMCksXCJpbnZlcnNlXCI6Y29udGFpbmVyLm5vb3AsXCJkYXRhXCI6ZGF0YX0pKSAhPSBudWxsID8gc3RhY2sxIDogXCJcIilcbiAgICArIFwiICAgICAgICAgICAgICAgIDwvdHI+XFxyXFxuICAgICAgICAgICAgPC90aGVhZD5cXHJcXG4gICAgICAgIDwvdGFibGU+XFxyXFxuICAgIDwvZGl2PlxcclxcbiAgICA8ZGl2IGNsYXNzPVxcXCJ0YWJsZS1ib2R5XFxcIj5cXHJcXG4gICAgICAgIDx0YWJsZSByb2xlPVxcXCJwcmVzZW50YXRpb25cXFwiIGNsYXNzPVxcXCJndWkgYmFzaWMgbGFyZ2UgY29tcGFjdCBmaXhlZCBzZWxlY3RhYmxlIHNpbmdsZSBsaW5lIHRhYmxlIG1haW5UYWJsZVxcXCI+XFxyXFxuICAgICAgICAgICAgPGNvbGdyb3VwIGNsYXNzPVxcXCJib2R5Q29sR3JvdXBcXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8Y29sIHN0eWxlPVxcXCJ3aWR0aDo0MHB4O1xcXCIgLz4gXFxyXFxuICAgICAgICAgICAgICAgIDxjb2wgc3R5bGU9XFxcIndpZHRoOjQwcHg7XFxcIiAvPlxcclxcblwiXG4gICAgKyAoKHN0YWNrMSA9IGhlbHBlcnMuZWFjaC5jYWxsKGFsaWFzMywoZGVwdGgwICE9IG51bGwgPyBkZXB0aDAuY29sdW1ucyA6IGRlcHRoMCkse1wibmFtZVwiOlwiZWFjaFwiLFwiaGFzaFwiOnt9LFwiZm5cIjpjb250YWluZXIucHJvZ3JhbSgzLCBkYXRhLCAwKSxcImludmVyc2VcIjpjb250YWluZXIubm9vcCxcImRhdGFcIjpkYXRhfSkpICE9IG51bGwgPyBzdGFjazEgOiBcIlwiKVxuICAgICsgXCIgICAgICAgICAgICA8L2NvbGdyb3VwPlxcclxcbiAgICAgICAgICAgIDx0Ym9keSBjbGFzcz1cXFwibWFpblRhYmxlQm9keVxcXCIgcm9sZT1cXFwicm93Z3JvdXBcXFwiPlxcclxcblwiXG4gICAgKyAoKHN0YWNrMSA9IGNvbnRhaW5lci5pbnZva2VQYXJ0aWFsKHJlcXVpcmUoXCJDOlxcXFxUZWNobmljYWxcXFxcUmVwb1xcXFxHcmlkb29cXFxcc3JjXFxcXGhic1xcXFxncmlkLW1haW4tcm93Lmhic1wiKSxkZXB0aDAse1wibmFtZVwiOlwiZ3JpZC1tYWluLXJvd1wiLFwiZGF0YVwiOmRhdGEsXCJpbmRlbnRcIjpcIiAgICAgICAgICAgICAgICBcIixcImhlbHBlcnNcIjpoZWxwZXJzLFwicGFydGlhbHNcIjpwYXJ0aWFscyxcImRlY29yYXRvcnNcIjpjb250YWluZXIuZGVjb3JhdG9yc30pKSAhPSBudWxsID8gc3RhY2sxIDogXCJcIilcbiAgICArIFwiICAgICAgICAgICAgPC90Ym9keT5cXHJcXG4gICAgICAgIDwvdGFibGU+XFxyXFxuICAgIDwvZGl2PlxcclxcbiAgICA8ZGl2IGNsYXNzPVxcXCJ0YWJsZS1mb290ZXIgZ3VpIGgtYXV0byBmbHVpZC13IGZsZXggamMtc2IgcC01IG0tMFxcXCI+XFxyXFxuXCJcbiAgICArICgoc3RhY2sxID0gY29udGFpbmVyLmludm9rZVBhcnRpYWwocmVxdWlyZShcIkM6XFxcXFRlY2huaWNhbFxcXFxSZXBvXFxcXEdyaWRvb1xcXFxzcmNcXFxcaGJzXFxcXGdyaWQtZm9vdGVyLmhic1wiKSxkZXB0aDAse1wibmFtZVwiOlwiZ3JpZC1mb290ZXJcIixcImRhdGFcIjpkYXRhLFwiaW5kZW50XCI6XCIgICAgICAgICAgIFwiLFwiaGVscGVyc1wiOmhlbHBlcnMsXCJwYXJ0aWFsc1wiOnBhcnRpYWxzLFwiZGVjb3JhdG9yc1wiOmNvbnRhaW5lci5kZWNvcmF0b3JzfSkpICE9IG51bGwgPyBzdGFjazEgOiBcIlwiKVxuICAgICsgXCIgICAgPC9kaXY+XFxyXFxuPC9kaXY+XCI7XG59LFwidXNlUGFydGlhbFwiOnRydWUsXCJ1c2VEYXRhXCI6dHJ1ZX0pO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2hicy9ncmlkLmhic1xuLy8gbW9kdWxlIGlkID0gMjZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEiLCJjb25zdCBDb2x1bW4gPSAoY29sKTogc3RyaW5nID0+IHtcclxuICAgIGNvbnN0IGNhbGNXaWR0aDogbnVtYmVyID0gY29sLmhpZGRlbiA/IDAgOiBjb2wud2lkdGg7XHJcbiAgICBjb25zdCBkYXRhQXR0cklkID0gJ2RhdGEtaGVhZGVyLWlkPVwiJyArIGNvbC5pZCArICdcIic7XHJcbiAgICByZXR1cm4gJzxjb2wgc3R5bGU9XCJ3aWR0aCA6ICcgKyBjYWxjV2lkdGggKyAncHg7XCInICsgZGF0YUF0dHJJZCArIFwiIC8+XCI7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDb2x1bW47XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy90c2xpbnQtbG9hZGVyPz9yZWYtLTEhLi9zcmMvaGJzL2hlbHBlcnMvQ29sdW1uLnRzIiwiaW1wb3J0IHsgR3JpZE9yZGVyRGlyZWN0aW9uIH0gZnJvbSBcIi4uLy4uL2pzL21vZGVscy9HcmlkT3JkZXJEaXJlY3Rpb25cIjtcclxuaW1wb3J0IHsgSUNvbHVtbiB9IGZyb20gXCIuLi8uLi9qcy9tb2RlbHMvSUNvbHVtblwiO1xyXG5cclxuY29uc3Qgb3JkZXJlZCA9IChjb2x1bW46IElDb2x1bW4sIGluZGV4OiBzdHJpbmcpOiBzdHJpbmcgPT4ge1xyXG4gICAgY29uc3QgcGFyc2VkSW50ID0gcGFyc2VJbnQoaW5kZXgsIDEwKSArIDM7XHJcbiAgICBsZXQgYXJpYVNvcnRTdHI7XHJcbiAgICBsZXQgYXJpYUxhYmVsU3RyO1xyXG4gICAgbGV0IGhlYWRlckljb25NaztcclxuICAgIGNvbnN0IGFyaWFIaWRkZW5TdHIgPSBjb2x1bW4uaGlkZGVuID8gXCIgYXJpYS1oaWRkZW49XFxcInRydWVcXFwiXCIgOiBcIiBhcmlhLWhpZGRlbj1cXFwiZmFsc2VcXFwiXCI7XHJcbiAgICBjb25zdCB0YWJJbmRleCA9IGNvbHVtbi5zb3J0YWJsZSAmJiAhY29sdW1uLmhpZGRlbiA/IDAgOiAtMTtcclxuICAgIGlmIChjb2x1bW4ub3JkZXJCeSA9PT0gR3JpZE9yZGVyRGlyZWN0aW9uLkFzYykge1xyXG4gICAgICAgIGhlYWRlckljb25NayA9IFwiIDxpIGNsYXNzPVxcXCJndWkgZ3VpLWljb24gZ3VpLWljb24tYXJyb3ctdXBcXFwiIGFyaWEtaGlkZGVuPVxcXCJmYWxzZVxcXCIgPjwvaT4gXCIgK1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBcIjxpIGNsYXNzPVxcXCJndWkgZ3VpLWljb24gZ3VpLWljb24tYXJyb3ctZG93biBndWktaGlkZGVuXFxcIiBhcmlhLWhpZGRlbj1cXFwidHJ1ZVxcXCIgPjwvaT5cIjtcclxuICAgICAgICBhcmlhU29ydFN0ciA9IFwiYXJpYS1zb3J0PVxcXCJhc2NlbmRpbmdcXFwiXCI7XHJcbiAgICAgICAgLy8gYXJpYUxhYmVsU3RyID0gY29sdW1uLm5hbWUgKyBcIiBzb3J0ZWQgYXNjZW5kaW5nXCI7XHJcbiAgICB9IGVsc2UgaWYgKGNvbHVtbi5vcmRlckJ5ID09PSBHcmlkT3JkZXJEaXJlY3Rpb24uRGVzYykge1xyXG4gICAgICAgIGhlYWRlckljb25NayA9IFwiPGkgY2xhc3M9XFxcImd1aSBndWktaWNvbiBndWktaWNvbi1hcnJvdy11cCBndWktaGlkZGVuXFxcIiBhcmlhLWhpZGRlbj1cXFwidHJ1ZVxcXCIgPjwvaT4gXCIgK1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBcIjxpIGNsYXNzPVxcXCJndWkgZ3VpLWljb24gZ3VpLWljb24tYXJyb3ctZG93blxcXCIgYXJpYS1oaWRkZW49XFxcImZhbHNlXFxcIiA+PC9pPlwiO1xyXG4gICAgICAgIGFyaWFTb3J0U3RyID0gXCJhcmlhLXNvcnQ9XFxcImRlc2NlbmRpbmdcXFwiXCI7XHJcbiAgICAgICAgLy8gYXJpYUxhYmVsU3RyID0gY29sdW1uLm5hbWUgKyBcIiBzb3J0ZWQgZGVzY2VuZGluZ1wiO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICBoZWFkZXJJY29uTWsgPSBcIjxpIGNsYXNzPVxcXCJndWkgZ3VpLWljb24gZ3VpLWljb24tYXJyb3ctdXAgZ3VpLWhpZGRlblxcXCIgYXJpYS1oaWRkZW49XFxcInRydWVcXFwiID48L2k+IFwiICtcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCI8aSBjbGFzcz1cXFwiZ3VpIGd1aS1pY29uIGd1aS1pY29uLWFycm93LWRvd24gZ3VpLWhpZGRlblxcXCIgYXJpYS1oaWRkZW49XFxcInRydWVcXFwiID48L2k+XCI7XHJcbiAgICAgICAgYXJpYVNvcnRTdHIgPSBcImFyaWEtc29ydD1cXFwibm9uZVxcXCJcIjtcclxuICAgICAgICBhcmlhTGFiZWxTdHIgPSBcIiBQcmVzcyBzcGFjZSBvciBlbnRlciB0byBzb3J0IGNvbHVtbiBcIiArIGNvbHVtbi5uYW1lICsgXCIgYnV0dG9uXCI7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gXCI8dGggcm9sZT1cXFwiY29sdW1uaGVhZGVyXFxcIiBhcmlhLWNvbGluZGV4PVxcXCJcIiArIHBhcnNlZEludFxyXG4gICAgICAgICAgKyBcIlxcXCIgY2xhc3M9XFxcImd1aSBjdXJzb3ItcG9pbnRlclxcXCIgaWQ9XFxcImhlYWRlci1cIlxyXG4gICAgICAgICAgKyBjb2x1bW4uaWQgICsgXCJcXFwiXCJcclxuICAgICAgICAgICsgXCIgdGFiaW5kZXg9XFxcIlwiICsgdGFiSW5kZXggKyBcIlxcXCIgXCJcclxuICAgICAgICAgICsgXCIgZGF0YS1oZWFkZXItaWQ9XFxcIlwiICsgY29sdW1uLmlkICsgXCJcXFwiICsgIFwiXHJcbiAgICAgICAgICArIGFyaWFTb3J0U3RyXHJcbiAgICAgICAgICArIGFyaWFIaWRkZW5TdHJcclxuICAgICAgICAgICsgXCIgYXJpYS1sYWJlbGxlZEJ5PVxcXCJjb2x1bW5MYWJlbC1cIiArIGNvbHVtbi5pZCArIFwiXFxcIlwiXHJcbiAgICAgICAgICAvLyArIFwiIHRpdGxlPVxcXCJcIiArIGNvbHVtbi5uYW1lICsgXCJcXFwiIFwiXHJcbiAgICAgICAgICArIFwiICA+XCJcclxuICAgICAgICAgICsgXCIgPHNwYW4gXCJcclxuICAgICAgICAgICsgXCIgaWQ9XFxcImNvbHVtbkxhYmVsLVwiICsgY29sdW1uLmlkICsgXCJcXFwiIFwiXHJcbiAgICAgICAgICArIFwiIGFyaWEtbGFiZWw9XFxcIlwiICsgYXJpYUxhYmVsU3RyICsgXCJcXFwiIFwiXHJcbiAgICAgICAgICArIFwiIHJvbGU9XFxcImJ1dHRvblxcXCIgY2xhc3M9XFxcImd1aSBuby1jc3Mgc3ViIGhlYWRlciBtLXItNVxcXCI+XCIgKyBjb2x1bW4ubmFtZSArIFwiPC9zcGFuPlwiXHJcbiAgICAgICAgICArIGhlYWRlckljb25Na1xyXG4gICAgICAgICAgKyBcIiA8L3RoPlwiO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgb3JkZXJlZDtcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL3RzbGludC1sb2FkZXI/P3JlZi0tMSEuL3NyYy9oYnMvaGVscGVycy9PcmRlcmVkLnRzIiwiY29uc3QgYXJpYUhpZGRlbiA9IChib29sOiBib29sZWFuKTogc3RyaW5nID0+IHtcclxuICAgIHJldHVybiBib29sID8gXCJhcmlhLWhpZGRlbj1cXFwidHJ1ZVxcXCJcIiA6IFwiYXJpYS1oaWRkZW49XFxcImZhbHNlXFxcIlwiO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgYXJpYUhpZGRlbjtcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL3RzbGludC1sb2FkZXI/P3JlZi0tMSEuL3NyYy9oYnMvaGVscGVycy9BcmlhSGlkZGVuLnRzIl0sInNvdXJjZVJvb3QiOiIifQ==