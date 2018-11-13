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
                    setTimeout(function () {
                        var dataHeaderId = element.getAttribute("data-header-id");
                        var newFocusable;
                        $(".table-header th").each(function (index, elem) {
                            var eachHeader = $(elem);
                            var eachHeaderId = eachHeader.attr("data-header-id");
                            if (eachHeaderId === dataHeaderId) {
                                newFocusable = eachHeader;
                                return false;
                            }
                        });
                        if (newFocusable) {
                            newFocusable.focus();
                        }
                    });
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCAxMTI2OTdiYjJmMzAzMGMwNGRkNSIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwge1wicm9vdFwiOlwiSGFuZGxlYmFyc1wiLFwiYW1kXCI6XCJoYW5kbGViYXJzLnJ1bnRpbWVcIixcImNvbW1vbmpzMlwiOlwiaGFuZGxlYmFycy9ydW50aW1lXCIsXCJjb21tb25qc1wiOlwiaGFuZGxlYmFycy9ydW50aW1lXCJ9Iiwid2VicGFjazovLy8uL3NyYy9oYnMvaGVscGVycy9EaXNhYmxlZC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvaGJzL2hlbHBlcnMvQWRkLnRzIiwid2VicGFjazovLy8uL3NyYy9qcy9wYWdpbmF0aW9uL1BhZ2VyLnRzIiwid2VicGFjazovLy9leHRlcm5hbCBcImpRdWVyeVwiIiwid2VicGFjazovLy8uL3NyYy9qcy91dGlsL0NvbHVtblV0aWwudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL21vZGVscy9HcmlkT3JkZXJEaXJlY3Rpb24udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2hicy9ncmlkLWRldGFpbHMtcm93LmhicyIsIndlYnBhY2s6Ly8vLi9zcmMvaGJzL2dyaWQtZm9vdGVyLmhicyIsIndlYnBhY2s6Ly8vLi9zcmMvaGJzL2hlbHBlcnMvbWF0aC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvaGJzL2dyaWQtbWFpbi1yb3cuaGJzIiwid2VicGFjazovLy8uL3NyYy9oYnMvaGVscGVycy9Cb29sQXR0cmlidXRlLnRzIiwid2VicGFjazovLy8uL3NyYy9qcy9tYWluL0dyaWQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2NvbmZpZy9Db25maWdTdG9yZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvZXZlbnRIYW5kbGVycy9TZWxlY3RFdmVudEhhbmRsZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2V2ZW50SGFuZGxlcnMvRGV0YWlsc1Jvd0hhbmRsZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2V2ZW50SGFuZGxlcnMvRmlsdGVyQ2xpY2tIYW5kbGVyLnRzIiwid2VicGFjazovLy8uL3NyYy9qcy9tb2RlbHMvRmlsdGVyQWN0aW9uVHlwZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvZXZlbnRIYW5kbGVycy9IYW5kbGVyTmFtZXMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2V2ZW50SGFuZGxlcnMvSGVhZGVyQ2xpY2tIYW5kbGVyLnRzIiwid2VicGFjazovLy8uL3NyYy9qcy9ldmVudEhhbmRsZXJzL1BhZ2VTZWFyY2hDbGlja0hhbmRsZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2V2ZW50SGFuZGxlcnMvU2Nyb2xsSGFuZGxlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvc2VydmljZXMvR3JpZFRlbXBsYXRlU2VydmljZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvaGJzL2hlbHBlcnMvU2VsZWN0ZWQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2hicy9ncmlkLW1hbmFnZS1jb2x1bW5zLmhicyIsIndlYnBhY2s6Ly8vLi9zcmMvaGJzL2hlbHBlcnMvQ2hlY2tlZC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvaGJzL2dyaWQuaGJzIiwid2VicGFjazovLy8uL3NyYy9oYnMvaGVscGVycy9Db2x1bW4udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2hicy9oZWxwZXJzL09yZGVyZWQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2hicy9oZWxwZXJzL0FyaWFIaWRkZW4udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87QUNWQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7O0FDN0RBLCtDOzs7Ozs7Ozs7Ozs7OztBQ0FBLElBQU0sUUFBUSxHQUFHLFVBQUMsSUFBYTtJQUMzQixNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztBQUNsQyxDQUFDLENBQUM7QUFFRixrQkFBZSxRQUFRLENBQUM7Ozs7Ozs7Ozs7Ozs7OztBQ0p4QixJQUFNLEdBQUcsR0FBRyxVQUFDLElBQVksRUFBRSxLQUFhO0lBQ3BDLE1BQU0sQ0FBQyxDQUFDLElBQUksR0FBRyxLQUFLLENBQUMsQ0FBQyxRQUFRLEVBQUUsQ0FBQztBQUNyQyxDQUFDLENBQUM7QUFFRixrQkFBZSxHQUFHLENBQUM7Ozs7Ozs7Ozs7Ozs7OztBQ0RuQjtJQUFBO0lBZ0NBLENBQUM7SUFIRyxzQkFBa0IsdUJBQWM7YUFBaEM7WUFDSSxNQUFNLENBQUMsS0FBSyxDQUFDLGNBQWMsQ0FBQztRQUNoQyxDQUFDOzs7T0FBQTtJQTNCYSw2QkFBdUIsR0FBRyxVQUFDLGVBQWlDO1FBQ2xFLElBQU0sY0FBYyxHQUFRLEVBQUUsQ0FBQztRQUMvQixjQUFjLENBQUMsU0FBUyxHQUFHLGVBQWUsQ0FBQyxTQUFTLENBQUM7UUFDckQsY0FBYyxDQUFDLFFBQVEsR0FBRyxlQUFlLENBQUMsUUFBUSxDQUFDO1FBQ25ELGNBQWMsQ0FBQyxTQUFTLEdBQUcsZUFBZSxDQUFDLFNBQVMsQ0FBQztRQUNyRCxjQUFjLENBQUMsVUFBVSxHQUFHLGVBQWUsQ0FBQyxVQUFVLENBQUM7UUFDdkQsY0FBYyxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxVQUFVLEdBQUcsZUFBZSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQzVGLElBQU0sTUFBTSxHQUFHLENBQUMsQ0FBQyxlQUFlLENBQUMsU0FBUyxHQUFHLENBQUMsQ0FBQyxHQUFHLGVBQWUsQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUM1RSxJQUFNLGdCQUFnQixHQUFHLGVBQWUsQ0FBQyxRQUFRLEdBQUcsZUFBZSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1lBQ3ZELGVBQWUsQ0FBQyxVQUFVLENBQUMsQ0FBQztZQUM1QixlQUFlLENBQUMsUUFBUSxDQUFDO1FBQ2xELGNBQWMsQ0FBQyxLQUFLLEdBQUc7WUFDbkIsR0FBRyxFQUFHLE1BQU0sR0FBRyxDQUFDO1lBQ2hCLEdBQUcsRUFBRyxNQUFNLEdBQUcsZ0JBQWdCO1NBQ2xDLENBQUM7UUFDRixjQUFjLENBQUMscUJBQXFCLEdBQUcsY0FBYyxDQUFDLFNBQVMsS0FBSyxDQUFDLElBQUksY0FBYyxDQUFDLFNBQVMsS0FBSyxDQUFDLENBQUM7UUFDeEcsY0FBYyxDQUFDLG9CQUFvQixHQUFJLGNBQWMsQ0FBQyxTQUFTLEtBQUssQ0FBQztlQUMxQixDQUFDLGNBQWMsQ0FBQyxTQUFTLEtBQUssY0FBYyxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQ25HLGNBQWMsQ0FBQyxvQkFBb0IsR0FBSSxjQUFjLENBQUMsU0FBUyxLQUFLLENBQUM7ZUFDMUIsQ0FBQyxjQUFjLENBQUMsU0FBUyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUMvRSxjQUFjLENBQUMsb0JBQW9CLEdBQUksY0FBYyxDQUFDLFNBQVMsS0FBSyxjQUFjLENBQUMsU0FBUztlQUNqRCxDQUFDLGNBQWMsQ0FBQyxTQUFTLEdBQUcsQ0FBQyxDQUFDLElBQUksY0FBYyxDQUFDLFNBQVMsQ0FBQztRQUN0RyxLQUFLLENBQUMsY0FBYyxHQUFHLGNBQWMsQ0FBQztJQUM5QyxDQUFDO0lBS0wsWUFBQztDQUFBO0FBaENZLHNCQUFLOzs7Ozs7Ozs7Ozs7QUNIbEIsK0M7Ozs7Ozs7Ozs7Ozs7O0FDR0E7SUFBQTtJQTZCQSxDQUFDO0lBM0JpQiwwQkFBZSxHQUFHLFVBQUMsUUFBZ0IsRUFBRSxPQUFrQjtRQUNqRSxFQUFFLENBQUMsQ0FBQyxRQUFRLElBQUksSUFBSSxJQUFJLE9BQU8sSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDO1lBQ3RDLE1BQU0sQ0FBQyxJQUFJLENBQUM7UUFDaEIsQ0FBQztRQUNELElBQUksTUFBZSxDQUFDO1FBQ3BCLE9BQU8sQ0FBQyxPQUFPLENBQUMsVUFBQyxHQUFZO1lBQ3pCLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxFQUFFLEtBQUssUUFBUSxDQUFDLENBQUMsQ0FBQztnQkFDdEIsTUFBTSxHQUFHLEdBQUcsQ0FBQztnQkFDYixNQUFNLENBQUM7WUFDWCxDQUFDO1FBQ0wsQ0FBQyxDQUFDLENBQUM7UUFDSCxNQUFNLENBQUMsTUFBTSxDQUFDO0lBQ2xCLENBQUM7SUFDYSxtQkFBUSxHQUFHLFVBQUMsUUFBZ0IsRUFBRSxPQUEyQixFQUFFLE9BQWtCO1FBQ3ZGLEVBQUUsQ0FBQyxDQUFDLFFBQVEsSUFBSSxJQUFJLElBQUksT0FBTyxJQUFJLElBQUksQ0FBQyxDQUFDLENBQUM7WUFDdEMsTUFBTSxDQUFDLElBQUksQ0FBQztRQUNoQixDQUFDO1FBQ0QsSUFBSSxNQUFlLENBQUM7UUFDcEIsT0FBTyxDQUFDLE9BQU8sQ0FBQyxVQUFDLEdBQVk7WUFDekIsRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLEVBQUUsS0FBSyxRQUFRLENBQUMsQ0FBQyxDQUFDO2dCQUN0QixHQUFHLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztnQkFDdEIsTUFBTSxHQUFHLEdBQUcsQ0FBQztnQkFDYixNQUFNLENBQUM7WUFDWCxDQUFDO1FBQ0wsQ0FBQyxDQUFDLENBQUM7UUFDSCxNQUFNLENBQUMsTUFBTSxDQUFDO0lBQ2xCLENBQUM7SUFDTCxpQkFBQztDQUFBO0FBN0JZLGdDQUFVOzs7Ozs7Ozs7Ozs7Ozs7QUNIdkIsSUFBWSxrQkFJWDtBQUpELFdBQVksa0JBQWtCO0lBQzFCLG1DQUFhO0lBQ2IsaUNBQVc7SUFDWCxtQ0FBYTtBQUNqQixDQUFDLEVBSlcsa0JBQWtCLEdBQWxCLDBCQUFrQixLQUFsQiwwQkFBa0IsUUFJN0I7Ozs7Ozs7Ozs7OztBQ0pEO0FBQ0EseUJBQXlCLHVEQUF1RDtBQUNoRixpRUFBaUU7QUFDakUscUZBQXFGOztBQUVyRjtBQUNBLHNLQUFzSyx1QkFBdUIsYUFBYTtBQUMxTTtBQUNBLGtLQUFrSyxxQkFBcUIsYUFBYTtBQUNwTTtBQUNBLG9MQUFvTCw4QkFBOEIsYUFBYTtBQUMvTjtBQUNBLGtMQUFrTCw2QkFBNkIsYUFBYTtBQUM1TjtBQUNBLDBGQUEwRixxQkFBcUIseUVBQXlFO0FBQ3hMO0FBQ0Esd0xBQXdMLDhCQUE4QixhQUFhO0FBQ25PO0FBQ0EsQ0FBQztBQUNEO0FBQ0EsQ0FBQztBQUNELHFGQUFxRjs7QUFFckY7QUFDQSxvSkFBb0osd0JBQXdCLGFBQWE7QUFDekw7QUFDQSwwS0FBMEsseUJBQXlCLGFBQWE7QUFDaE4sK0lBQStJO0FBQy9JLDhGQUE4Rix1QkFBdUIseUVBQXlFO0FBQzlMO0FBQ0EsQ0FBQyxnQkFBZ0IsRTs7Ozs7Ozs7Ozs7QUM5QmpCO0FBQ0EseUJBQXlCLHVEQUF1RDtBQUNoRixpRUFBaUU7QUFDakU7O0FBRUE7QUFDQSxnSkFBMEoscUhBQXFILDJCQUEyQixhQUFhO0FBQ3ZUO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCx5SUFBeUk7O0FBRXpJO0FBQ0E7QUFDQTtBQUNBLGdOQUEyTiwyQkFBMkIsYUFBYTtBQUNuUTtBQUNBO0FBQ0E7QUFDQSwrTUFBME4sMkJBQTJCLGFBQWE7QUFDbFE7QUFDQSxzTUFBaU4sdUJBQXVCLGFBQWE7QUFDclA7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrTUFBME4sMkJBQTJCLGFBQWE7QUFDbFE7QUFDQSxzTUFBaU4sdUJBQXVCLGFBQWE7QUFDclA7QUFDQTtBQUNBO0FBQ0EsK01BQTBOLDJCQUEyQixhQUFhO0FBQ2xRO0FBQ0E7QUFDQTtBQUNBLDhJQUE4SSx1QkFBdUIsOEZBQThGO0FBQ25RO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxpQ0FBaUMsRTs7Ozs7Ozs7Ozs7Ozs7QUN0RGxDLElBQU0sSUFBSSxHQUFHLFVBQUMsTUFBYyxFQUFFLFFBQWdCLEVBQUUsTUFBYyxFQUFFLE9BQU87SUFDbkUsTUFBTSxDQUFDO1FBQ0gsR0FBRyxFQUFFLE1BQU0sR0FBRyxNQUFNO1FBQ3BCLEdBQUcsRUFBRSxNQUFNLEdBQUcsTUFBTTtRQUNwQixHQUFHLEVBQUUsTUFBTSxHQUFHLE1BQU07UUFDcEIsR0FBRyxFQUFFLE1BQU0sR0FBRyxNQUFNO1FBQ3BCLEdBQUcsRUFBRSxNQUFNLEdBQUcsTUFBTTtLQUN2QixDQUFDLFFBQVEsQ0FBQyxDQUFDO0FBQ2hCLENBQUMsQ0FBQztBQUVGLGtCQUFlLElBQUksQ0FBQzs7Ozs7Ozs7Ozs7O0FDVnBCO0FBQ0EseUJBQXlCLHVEQUF1RDtBQUNoRixpRUFBaUU7QUFDakUsNkVBQTZFOztBQUU3RTtBQUNBLDBJQUFxSixzQkFBc0IsYUFBYTtBQUN4TDtBQUNBLGlLQUEySyxnQ0FBZ0MsYUFBYTtBQUN4TjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrS0FBNEssZ0NBQWdDLGFBQWE7QUFDek47QUFDQTtBQUNBO0FBQ0EsOEZBQThGLHVCQUF1Qix5RUFBeUU7QUFDOUw7QUFDQSw4R0FBd0gsOEdBQThHO0FBQ3RPLENBQUM7QUFDRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQSwwSUFBcUosMEJBQTBCLHNCQUFzQixhQUFhO0FBQ2xOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7O0FBRUEsNEZBQTRGLG1EQUFtRCx1QkFBdUIseUVBQXlFO0FBQy9PLENBQUMsa0NBQWtDLEU7Ozs7Ozs7Ozs7Ozs7O0FDekNuQyxJQUFNLGFBQWEsR0FBRyxVQUFDLElBQWEsRUFBRSxHQUFXO0lBQzdDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDO0FBQzNCLENBQUMsQ0FBQztBQUVGLGtCQUFlLGFBQWEsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7O0FDSjdCLGtEQUFpQztBQUNqQyx5RUFBb0Q7QUFFcEQsOEZBQXlFO0FBR3pFLGdFQUE0QztBQUM1Qyw4RkFBeUU7QUFDekUsZ0dBQTJFO0FBQzNFLG9GQUErRDtBQUMvRCxnR0FBMkU7QUFFM0Usd0dBQThFO0FBQzlFLHNGQUFpRTtBQUVqRSw2RkFBd0U7QUFHeEU7SUFRSSxjQUFZLE9BQXdCO1FBQXBDLGlCQUlDO1FBRU0sYUFBUSxHQUFHLFVBQUMsSUFBUyxFQUFFLGVBQWtDO1lBQzVELFVBQVUsQ0FBQztnQkFDUCxhQUFLLENBQUMsdUJBQXVCLENBQUMsZUFBZSxDQUFDLENBQUM7Z0JBQy9DLEtBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDOUIsQ0FBQyxFQUFFLENBQUMsQ0FBRSxDQUFDO1FBQ1gsQ0FBQztRQUNNLGFBQVEsR0FBRztZQUNkLFVBQVUsQ0FBQztnQkFDUCxLQUFJLENBQUMsY0FBYyxDQUFDLEtBQUksQ0FBQyxtQkFBbUIsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUN2RCxDQUFDLEVBQUUsQ0FBQyxDQUFFLENBQUM7UUFDWCxDQUFDO1FBQ00saUJBQVksR0FBRyxVQUFDLFNBQW9CO1lBQ3ZDLEtBQUksQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLE9BQU8sR0FBRyxTQUFTLENBQUM7UUFDakQsQ0FBQztRQUNELHlCQUF5QjtRQUNsQixlQUFVLEdBQUcsVUFBQyxJQUFTO1lBQzFCLEVBQUUsQ0FBQyxDQUFFLElBQUksS0FBSyxTQUFTLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTyxDQUFDLENBQUMsQ0FBQztnQkFDdkMsTUFBTSxDQUFDO1lBQ1gsQ0FBQztZQUNELEtBQUksQ0FBQyxtQkFBbUIsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDMUMsSUFBTSxTQUFTLEdBQUcsQ0FBQyxDQUFDLEtBQUksQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLGdCQUFnQixDQUFDLENBQUM7WUFDL0QsSUFBTSxHQUFHLEdBQUcsS0FBSSxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDO29DQUNwQyxHQUFHO2dCQUNWLElBQU0sT0FBTyxHQUFHLEtBQUksQ0FBQyxtQkFBbUIsQ0FBQyxvQkFBb0IsQ0FBQyxHQUFHLENBQUMsQ0FBQztnQkFDbkUsSUFBTSxLQUFLLEdBQUcsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDO2dCQUN6QixTQUFTLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFDLENBQVMsRUFBRSxFQUFXO29CQUNuRCxJQUFNLElBQUksR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUM7b0JBQ25CLElBQU0sSUFBSSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUM7b0JBQ3ZDLEVBQUUsQ0FBQyxDQUFFLElBQUksS0FBSyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO3dCQUNyQixJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQzt3QkFDOUIsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUM7d0JBQ3JDLE1BQU0sQ0FBQztvQkFDWCxDQUFDO2dCQUNMLENBQUMsQ0FBQyxDQUFDO1lBQ1AsQ0FBQztZQVpELEdBQUcsQ0FBQyxDQUFjLFVBQUksRUFBSixhQUFJLEVBQUosa0JBQUksRUFBSixJQUFJO2dCQUFqQixJQUFNLEdBQUc7d0JBQUgsR0FBRzthQVliO1FBQ0wsQ0FBQztRQUVNLGFBQVEsR0FBRyxVQUFDLFdBQXlCO1lBQ3hDLEdBQUcsQ0FBQyxDQUFjLFVBQWdDLEVBQWhDLFVBQUksQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLE9BQU8sRUFBaEMsY0FBZ0MsRUFBaEMsSUFBZ0M7Z0JBQTdDLElBQU0sR0FBRztnQkFDVixHQUFHLENBQUMsT0FBTyxHQUFHLFNBQVMsQ0FBQzthQUMzQjtZQUNELEVBQUUsQ0FBQyxDQUFDLFdBQVcsS0FBSyxTQUFTLElBQUksV0FBVyxLQUFLLElBQUksSUFBSSxXQUFXLENBQUMsTUFBTSxLQUFLLENBQUUsQ0FBQyxDQUFDLENBQUM7Z0JBQ2pGLE1BQU0sQ0FBQztZQUNYLENBQUM7WUFDRCxHQUFHLENBQUMsQ0FBbUIsVUFBVyxFQUFYLDJCQUFXLEVBQVgseUJBQVcsRUFBWCxJQUFXO2dCQUE3QixJQUFNLFFBQVE7Z0JBQ2YsR0FBRyxDQUFDLENBQWMsVUFBZ0MsRUFBaEMsVUFBSSxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsT0FBTyxFQUFoQyxjQUFnQyxFQUFoQyxJQUFnQztvQkFBN0MsSUFBTSxHQUFHO29CQUNWLEVBQUUsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxLQUFLLEtBQUssR0FBRyxDQUFDLEVBQUcsQ0FBQyxDQUFDLENBQUM7d0JBQzdCLEdBQUcsQ0FBQyxPQUFPLEdBQUcsUUFBUSxDQUFDLE9BQU8sQ0FBQzt3QkFDL0IsS0FBSyxDQUFDO29CQUNWLENBQUM7aUJBQ0o7YUFDSjtRQUNMLENBQUM7UUFFTSxZQUFPLEdBQUc7WUFDYixJQUFNLGFBQWEsR0FBRyxNQUFNLENBQUMsS0FBSSxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztZQUN4RSxFQUFFLENBQUMsQ0FBRSxhQUFhLEtBQUssU0FBVSxDQUFDLENBQUMsQ0FBQztnQkFDaEMsYUFBYSxDQUFDLEdBQUcsRUFBRSxDQUFDO1lBQ3hCLENBQUM7WUFDRCxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsR0FBRyxDQUFDLFFBQVEsRUFBRSxLQUFJLENBQUMscUJBQXFCLENBQUMsQ0FBQztZQUNwRCxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsR0FBRyxDQUFDLE9BQU8sRUFBRSxLQUFJLENBQUMsb0JBQW9CLENBQUMsQ0FBQztZQUNwRCxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsR0FBRyxDQUFDLFFBQVEsRUFBRSxLQUFJLENBQUMsMEJBQTBCLENBQUMsQ0FBQztZQUN6RCxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsR0FBRyxDQUFDLE9BQU8sRUFBRSxLQUFJLENBQUMseUJBQXlCLENBQUMsQ0FBQztRQUM3RCxDQUFDO1FBQ08sbUJBQWMsR0FBRyxVQUFDLElBQVM7WUFDL0IsSUFBTSxVQUFVLEdBQUcsQ0FBQyxDQUFDO1lBQ3JCLElBQUksU0FBUyxHQUFHLEtBQUksQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLFNBQVMsR0FBRyxLQUFJLENBQUMsa0JBQWtCLEVBQUUsQ0FBQztZQUMvRSxTQUFTLEdBQUcsU0FBUyxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUM7WUFDbkUsSUFBTSxXQUFXLEdBQVcsS0FBSSxDQUFDLG1CQUFtQixDQUFDLGdCQUFnQixDQUFDLElBQUksRUFDSixVQUFVLEVBQ1YsU0FBUyxDQUNSLENBQUM7WUFDeEUsS0FBSSxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsZ0JBQWdCLENBQUMsU0FBUyxHQUFHLFdBQVcsQ0FBQztZQUNsRSxFQUFFLENBQUMsQ0FBRSxLQUFJLENBQUMsYUFBYSxLQUFLLFNBQVMsSUFBSSxLQUFJLENBQUMsYUFBYSxLQUFLLElBQUssQ0FBQyxDQUFDLENBQUM7Z0JBQ3BFLEtBQUksQ0FBQyxhQUFhLENBQUMsYUFBYSxFQUFFLENBQUM7Z0JBQ25DLEtBQUksQ0FBQyxhQUFhLENBQUMsZUFBZSxDQUFDLFNBQVMsR0FBRyxDQUFDLENBQUUsQ0FBQztZQUN2RCxDQUFDO1lBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQ0osS0FBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLDZCQUFhLENBQUksS0FBSSxDQUFDLFdBQVcsRUFBRSxLQUFJLENBQUMsbUJBQW1CLEVBQUUsU0FBUyxHQUFHLENBQUMsQ0FBQyxDQUFDO1lBQ3pHLENBQUM7WUFDRCxLQUFJLENBQUMsYUFBYSxDQUFDLGtCQUFrQixFQUFFLENBQUM7WUFDeEMsS0FBSSxDQUFDLHFCQUFxQixFQUFFLENBQUM7UUFDakMsQ0FBQztRQUNPLHVCQUFrQixHQUFHO1lBQ3pCLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLFdBQVcsRUFBRSxHQUFHLElBQUksQ0FBRSxHQUFHLEVBQUUsQ0FBQyxDQUFDO1FBQ25FLENBQUM7UUFFTyxpQkFBWSxHQUFHO1lBQ25CLElBQU0sYUFBYSxHQUFHLE1BQU0sQ0FBQyxLQUFJLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO1lBQ3hFLEtBQUksQ0FBQyxXQUFXLEdBQUcsRUFBRSxDQUFDO1lBQ3RCLEtBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDO2dCQUNsQixPQUFPLEVBQUUsSUFBSSxxQ0FBaUIsQ0FBSSxLQUFJLENBQUMsV0FBVyxFQUFFLGFBQWEsQ0FBQztnQkFDbEUsSUFBSSxFQUFFLDJCQUFZLENBQUMsVUFBVTthQUNoQyxDQUFDLENBQUM7WUFDSCxLQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQztnQkFDbEIsT0FBTyxFQUFHLElBQUksdUNBQWtCLENBQUksS0FBSSxDQUFDLFdBQVcsRUFBRSxhQUFhLENBQUM7Z0JBQ3BFLElBQUksRUFBRSwyQkFBWSxDQUFDLFlBQVk7YUFDbEMsQ0FBQyxDQUFDO1lBQ0gsS0FBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUM7Z0JBQ2xCLE9BQU8sRUFBRSxJQUFJLHVDQUFrQixDQUFJLEtBQUksQ0FBQyxXQUFXLEVBQUUsYUFBYSxDQUFDO2dCQUNuRSxJQUFJLEVBQUUsMkJBQVksQ0FBQyxXQUFXO2FBQ2pDLENBQUMsQ0FBQztZQUNILEtBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDO2dCQUNsQixPQUFPLEVBQUUsSUFBSSwwQ0FBaUIsQ0FBSSxLQUFJLENBQUMsV0FBVyxFQUFFLGFBQWEsQ0FBQztnQkFDbEUsSUFBSSxFQUFFLDJCQUFZLENBQUMsVUFBVTthQUNoQyxDQUFDLENBQUM7WUFDSCxLQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQztnQkFDbEIsT0FBTyxFQUFFLElBQUksdUNBQWtCLENBQUksS0FBSSxDQUFDLFdBQVcsRUFBRSxhQUFhLEVBQUUsS0FBSSxDQUFDLG1CQUFtQixDQUFDO2dCQUM3RixJQUFJLEVBQUUsMkJBQVksQ0FBQyxXQUFXO2FBQ2pDLENBQUMsQ0FBQztZQUNILEtBQUksQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLFVBQUMsS0FBdUI7Z0JBQzdDLEtBQUssQ0FBQyxPQUFPLENBQUMsa0JBQWtCLEVBQUUsQ0FBQztZQUN2QyxDQUFDLENBQUMsQ0FBQztZQUNILE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQyxNQUFNLENBQUMsS0FBSSxDQUFDLHFCQUFxQixDQUFDLENBQUM7WUFDbEQsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEtBQUssQ0FBQyxLQUFJLENBQUMsb0JBQW9CLENBQUMsQ0FBQztRQUN0RCxDQUFDO1FBRU8sK0JBQTBCLEdBQUcsVUFBQyxLQUFLO1lBQ3ZDLEtBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLEVBQUUsQ0FBQztZQUNqQyxLQUFLLENBQUMsZUFBZSxFQUFFLENBQUM7UUFDNUIsQ0FBQztRQUNPLDhCQUF5QixHQUFHLFVBQUMsS0FBSztZQUN0QyxLQUFJLENBQUMsZ0JBQWdCLENBQUMsZUFBZSxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQzdDLEtBQUssQ0FBQyxlQUFlLEVBQUUsQ0FBQztRQUM1QixDQUFDO1FBQ08seUJBQW9CLEdBQUcsVUFBQyxLQUFLO1lBQ2pDLEtBQUksQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLFVBQUMsS0FBdUI7Z0JBQzdDLEtBQUssQ0FBQyxPQUFPLENBQUMsZUFBZSxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQ3pDLENBQUMsQ0FBQyxDQUFDO1lBQ0gsS0FBSyxDQUFDLGVBQWUsRUFBRSxDQUFDO1FBQzVCLENBQUM7UUFDTywwQkFBcUIsR0FBRyxVQUFDLEtBQUs7WUFDbEMsS0FBSSxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsVUFBQyxLQUF1QjtnQkFDN0MsS0FBSyxDQUFDLE9BQU8sQ0FBQyxlQUFlLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDekMsQ0FBQyxDQUFDLENBQUM7WUFDSCxLQUFLLENBQUMsZUFBZSxFQUFFLENBQUM7UUFDNUIsQ0FBQztRQUNPLDBCQUFxQixHQUFHO1lBQzVCLElBQU0sT0FBTyxHQUFHLEtBQUksQ0FBQyxXQUFXLENBQUMsbUJBQW1CLEVBQUUsQ0FBQztZQUN2RCxFQUFFLENBQUMsQ0FBRSxPQUFRLENBQUMsQ0FBQyxDQUFDO2dCQUNaLEVBQUUsQ0FBQyxDQUFFLE9BQU8sQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQztvQkFDM0MsQ0FBQyxDQUFDLDBCQUEwQixDQUFDLENBQUMsS0FBSyxFQUFFLENBQUM7Z0JBQzFDLENBQUM7Z0JBQ0QsRUFBRSxDQUFDLENBQUUsT0FBTyxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDO29CQUMxQyxDQUFDLENBQUMseUJBQXlCLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQztnQkFDekMsQ0FBQztnQkFDRCxFQUFFLENBQUMsQ0FBRSxPQUFPLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUM7b0JBQzFDLENBQUMsQ0FBQyx5QkFBeUIsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDO2dCQUN6QyxDQUFDO2dCQUNELEVBQUUsQ0FBQyxDQUFFLE9BQU8sQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQztvQkFDMUMsQ0FBQyxDQUFDLHlCQUF5QixDQUFDLENBQUMsS0FBSyxFQUFFLENBQUM7Z0JBQ3pDLENBQUM7Z0JBQ0QsRUFBRSxDQUFDLENBQUUsT0FBTyxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsa0JBQWtCLENBQUMsQ0FBQyxDQUFDLENBQUM7b0JBQ2xELENBQUMsQ0FBQyxpQ0FBaUMsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDO2dCQUNqRCxDQUFDO2dCQUNELEVBQUUsQ0FBQyxDQUFFLE9BQU8sQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsQ0FBQztvQkFDN0MsQ0FBQyxDQUFDLDRCQUE0QixDQUFDLENBQUMsS0FBSyxFQUFFLENBQUM7Z0JBQzVDLENBQUM7Z0JBQ0QsRUFBRSxDQUFDLENBQUUsT0FBTyxDQUFDLE9BQU8sQ0FBQyxXQUFXLEVBQUUsS0FBSyxJQUFJLElBQUksT0FBTyxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsV0FBVyxFQUFFLEtBQUssSUFBSSxDQUFDLENBQUMsQ0FBQztvQkFDbEcsS0FBSSxDQUFDLGFBQWEsQ0FBQyxlQUFlLEVBQUUsQ0FBQztvQkFDckMsVUFBVSxDQUFDO3dCQUNQLElBQU0sWUFBWSxHQUFHLE9BQU8sQ0FBQyxZQUFZLENBQUMsZ0JBQWdCLENBQUMsQ0FBQzt3QkFDNUQsSUFBSSxZQUFZLENBQUM7d0JBQ2pCLENBQUMsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFDLEtBQWEsRUFBRSxJQUFpQjs0QkFDeEQsSUFBTSxVQUFVLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDOzRCQUMzQixJQUFNLFlBQVksR0FBRyxVQUFVLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLENBQUM7NEJBQ3ZELEVBQUUsQ0FBQyxDQUFFLFlBQVksS0FBSyxZQUFhLENBQUMsQ0FBQyxDQUFDO2dDQUNsQyxZQUFZLEdBQUcsVUFBVSxDQUFDO2dDQUMxQixNQUFNLENBQUMsS0FBSyxDQUFDOzRCQUNqQixDQUFDO3dCQUNMLENBQUMsQ0FBQyxDQUFDO3dCQUNILEVBQUUsQ0FBQyxDQUFFLFlBQWEsQ0FBQyxDQUFDLENBQUM7NEJBQ2pCLFlBQVksQ0FBQyxLQUFLLEVBQUUsQ0FBQzt3QkFDekIsQ0FBQztvQkFDTCxDQUFDLENBQUMsQ0FBQztnQkFDUCxDQUFDO1lBQ0wsQ0FBQztZQUNELEtBQUksQ0FBQyxXQUFXLENBQUMsbUJBQW1CLENBQUMsU0FBUyxDQUFDLENBQUM7UUFFcEQsQ0FBQztRQXZMRyxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUkseUJBQVcsQ0FBSSxPQUFPLENBQUMsQ0FBQztRQUMvQyxJQUFJLENBQUMsbUJBQW1CLEdBQUcsSUFBSSx5Q0FBbUIsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7UUFDckUsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO0lBQ3hCLENBQUM7SUFzTEwsV0FBQztBQUFELENBQUM7QUFsTVksb0JBQUk7Ozs7Ozs7Ozs7Ozs7OztBQ2JqQjtJQWdDSSxxQkFBWSxPQUF3QjtRQUFwQyxpQkFNQztRQW5DTyx1QkFBa0IsR0FBb0I7WUFDMUMsYUFBYSxFQUFFLEdBQUc7WUFDbEIsU0FBUyxFQUFFLENBQUM7WUFDWixPQUFPLEVBQUUsRUFBRTtZQUNYLGdCQUFnQixFQUFFLElBQUk7WUFDdEIsb0NBQW9DO1lBQ3BDLGNBQWMsRUFBRSxVQUFDLE1BQWUsRUFBRSxHQUFNO2dCQUNwQyxNQUFNLENBQUMsTUFBTSxDQUFDO1lBQ2xCLENBQUM7WUFDRCxTQUFTLEVBQUUsRUFBRTtZQUNiLHlEQUF5RDtZQUN6RCxpQkFBaUI7WUFDakIsS0FBSztZQUNMLGFBQWEsRUFBRSxVQUFDLE1BQWMsRUFBRSxLQUFVLEVBQUUsVUFBNEI7Z0JBQ3BFLFVBQVU7WUFDZCxDQUFDO1lBQ0QsYUFBYSxFQUFFLFVBQUMsTUFBYyxFQUFFLFNBQTZCO2dCQUN6RCxVQUFVO1lBQ2QsQ0FBQztZQUNELFlBQVksRUFBRSxVQUFDLFFBQWdCLEVBQUUsU0FBaUI7Z0JBQzlDLFVBQVU7WUFDZCxDQUFDO1lBQ0QsUUFBUSxFQUFFLFVBQUMsSUFBUztnQkFDaEIsVUFBVTtZQUNkLENBQUM7WUFDRCxXQUFXLEVBQUUsS0FBSztZQUNsQixPQUFPLEVBQUUsRUFBRTtZQUNYLE9BQU8sRUFBRSxFQUFFO1NBQ2QsQ0FBQztRQWNLLHdCQUFtQixHQUFHLFVBQUMsT0FBb0I7WUFDOUMsS0FBSSxDQUFDLGdCQUFnQixHQUFHLE9BQU8sQ0FBQztRQUNwQyxDQUFDO1FBQ00sd0JBQW1CLEdBQUc7WUFDekIsTUFBTSxDQUFDLEtBQUksQ0FBQyxnQkFBZ0IsQ0FBQztRQUNqQyxDQUFDO1FBQ00sc0JBQWlCLEdBQUcsVUFBQyxJQUFhLEVBQUUsUUFBaUI7WUFDeEQsR0FBRyxDQUFDLENBQWMsVUFBb0IsRUFBcEIsVUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLEVBQXBCLGNBQW9CLEVBQXBCLElBQW9CO2dCQUFqQyxJQUFNLEdBQUc7Z0JBQ1YsRUFBRSxDQUFDLENBQUMsUUFBUSxLQUFLLFNBQVMsQ0FBQyxDQUFDLENBQUM7b0JBQ3pCLEdBQUcsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO2dCQUN0QixDQUFDO2dCQUFDLElBQUksQ0FBQyxDQUFDO29CQUNKLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxFQUFFLEtBQUssUUFBUSxDQUFDLENBQUMsQ0FBQzt3QkFDdEIsR0FBRyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7d0JBQ2xCLEtBQUssQ0FBQztvQkFDVixDQUFDO2dCQUNMLENBQUM7YUFDSjtRQUNMLENBQUM7UUFDTyxrQkFBYSxHQUFHLFVBQUMsWUFBNkI7WUFDbEQsTUFBTSxDQUFDLEtBQUksQ0FBQyxPQUFPLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxFQUFFLEVBQUUsS0FBSSxDQUFDLGtCQUFrQixFQUFFLFlBQVksQ0FBQyxDQUFDO1FBQ25GLENBQUM7UUFoQ0csSUFBSSxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUM1QixFQUFFLENBQUMsQ0FBQyxPQUFPLENBQUMsZ0JBQWdCLEtBQUssSUFBSSxDQUFDLENBQUMsQ0FBQztZQUNwQyxNQUFNLElBQUksS0FBSyxDQUFDLGlEQUFpRCxDQUFDLENBQUM7UUFDdkUsQ0FBQztRQUNELElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxVQUFDLElBQUksRUFBRSxJQUFJLElBQUssV0FBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxFQUF2QixDQUF1QixDQUFDLENBQUM7SUFDdkUsQ0FBQztJQUNELHNCQUFXLGdDQUFPO2FBR2xCO1lBQ0ksTUFBTSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUM7UUFDeEIsQ0FBQzthQUxELFVBQW1CLE9BQXdCO1lBQ3ZDLElBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO1FBQzNCLENBQUM7OztPQUFBO0lBeUJMLGtCQUFDO0FBQUQsQ0FBQztBQWxFWSxrQ0FBVzs7Ozs7Ozs7Ozs7Ozs7O0FDRHhCO0lBS0ksNEJBQVksV0FBMkIsRUFBRSxPQUFlLEVBQUUsbUJBQTJDO1FBQ2pHLElBQUksQ0FBQyxXQUFXLEdBQUcsV0FBVyxDQUFDO1FBQy9CLElBQUksQ0FBQyxhQUFhLEdBQUcsT0FBTyxDQUFDO1FBQzdCLElBQUksQ0FBQyxtQkFBbUIsR0FBRyxtQkFBbUIsQ0FBQztJQUNuRCxDQUFDO0lBQ00sK0NBQWtCLEdBQXpCO1FBQUEsaUJBZ0NDO1FBL0JHLElBQUksQ0FBQyxhQUFhLENBQUMsRUFBRSxDQUFDLFFBQVEsRUFBRSxzQkFBc0IsRUFBRyxVQUFDLEtBQUs7WUFDM0QsSUFBTSxPQUFPLEdBQUcsTUFBTSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUNyQyxJQUFNLE9BQU8sR0FBRyxPQUFPLENBQUMsRUFBRSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1lBQ3ZDLElBQU0sS0FBSyxHQUFHLE9BQU8sQ0FBQyxHQUFHLEVBQUUsQ0FBQyxRQUFRLEVBQUUsQ0FBQztZQUN2QyxFQUFFLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO2dCQUNWLEtBQUksQ0FBQyxtQkFBbUIsQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLENBQUM7Z0JBQzNDLE9BQU8sQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBQ25ELENBQUM7WUFBQyxJQUFJLENBQUMsQ0FBQztnQkFDSixLQUFJLENBQUMsbUJBQW1CLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FBQyxDQUFDO2dCQUM3QyxPQUFPLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUN0RCxDQUFDO1lBQ0QsRUFBRSxDQUFDLENBQUMsS0FBSyxDQUFDLGFBQWEsS0FBSyxTQUFTLENBQUMsQ0FBQyxDQUFDO2dCQUNwQyxNQUFNLENBQUM7WUFDWCxDQUFDO1lBQ0QsS0FBSSxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLEtBQUksQ0FBQyxtQkFBbUIsQ0FBQyxRQUFRLEVBQUUsT0FBTyxDQUFDLENBQUM7WUFDOUUsS0FBSyxDQUFDLGVBQWUsRUFBRSxDQUFDO1FBQzVCLENBQUMsQ0FBQyxDQUFDO1FBQ0gsSUFBSSxDQUFDLGFBQWEsQ0FBQyxFQUFFLENBQUMsUUFBUSxFQUFFLHNCQUFzQixFQUFHLFVBQUMsS0FBSztZQUMzRCxJQUFNLE9BQU8sR0FBRyxNQUFNLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQ3JDLElBQU0sT0FBTyxHQUFHLE9BQU8sQ0FBQyxFQUFFLENBQUMsVUFBVSxDQUFDLENBQUM7WUFDdkMsS0FBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsc0JBQXNCLENBQUMsQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLE9BQU8sQ0FBQyxDQUFDO1lBQ3pFLEVBQUUsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7Z0JBQ1YsS0FBSSxDQUFDLG1CQUFtQixDQUFDLFNBQVMsRUFBRSxDQUFDO2dCQUNyQyxLQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUN0RSxDQUFDO1lBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQ0osS0FBSSxDQUFDLG1CQUFtQixDQUFDLFdBQVcsRUFBRSxDQUFDO2dCQUN2QyxLQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUN6RSxDQUFDO1lBQ0QsS0FBSSxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLEtBQUksQ0FBQyxtQkFBbUIsQ0FBQyxRQUFRLEVBQUUsT0FBTyxDQUFDLENBQUM7WUFDOUUsS0FBSyxDQUFDLGVBQWUsRUFBRSxDQUFDO1FBQzVCLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUNNLHFDQUFRLEdBQWY7UUFDSSxTQUFTO0lBQ2IsQ0FBQztJQUNNLDRDQUFlLEdBQXRCLFVBQXVCLEtBQVU7UUFDN0IsU0FBUztJQUNiLENBQUM7SUFDTCx5QkFBQztBQUFELENBQUM7QUFqRFksZ0RBQWtCOzs7Ozs7Ozs7Ozs7Ozs7QUNGL0I7SUFHSSwyQkFBb0IsV0FBMkIsRUFBRSxPQUFlO1FBQWhFLGlCQUVDO1FBRm1CLGdCQUFXLEdBQVgsV0FBVyxDQUFnQjtRQVV4Qyx1QkFBa0IsR0FBRztZQUN4QixLQUFJLENBQUMsYUFBYSxDQUFDLEVBQUUsQ0FBQyxPQUFPLEVBQUUsZ0NBQWdDLEVBQUUsS0FBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1lBQ2pGLEtBQUksQ0FBQyxhQUFhLENBQUMsRUFBRSxDQUFDLE9BQU8sRUFBRSxnQ0FBZ0MsRUFBRSxLQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDckYsQ0FBQztRQUNPLGNBQVMsR0FBRyxVQUFDLEtBQUs7WUFDdEIsSUFBTSxJQUFJLEdBQUcsS0FBSyxDQUFDLE9BQU8sSUFBSSxLQUFLLENBQUMsS0FBSyxDQUFDO1lBQzFDLEVBQUUsQ0FBQyxDQUFFLEtBQUssQ0FBQyxJQUFJLEtBQUssT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksS0FBSyxPQUFPLElBQUksSUFBSSxLQUFLLEVBQUUsSUFBSSxJQUFJLEtBQUssRUFBRSxDQUFFLENBQUMsQ0FBQyxDQUFDO2dCQUNyRixNQUFNLENBQUM7WUFDWCxDQUFDO1lBQ0QsSUFBTSxLQUFLLEdBQUcsTUFBTSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUNuQyxJQUFNLFVBQVUsR0FBRyxLQUFLLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDO1lBQzlDLElBQU0sV0FBVyxHQUFHLEtBQUssQ0FBQyxJQUFJLEVBQUUsQ0FBQyxJQUFJLENBQUMsYUFBYSxFQUFFLE1BQU0sQ0FBQyxDQUFDO1lBQzdELElBQU0sU0FBUyxHQUFHLEtBQUssQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUMsSUFBSSxDQUFDLGFBQWEsRUFBRSxPQUFPLENBQUMsQ0FBQztZQUMxRSxFQUFFLENBQUMsQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLHNCQUFzQixDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUN6QyxTQUFTLENBQUMsSUFBSSxDQUFDLGVBQWUsRUFBRSxNQUFNLENBQUMsQ0FBQztnQkFDeEMsVUFBVSxDQUFDLFNBQVMsQ0FBQyxLQUFJLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsQ0FBQztZQUNqRSxDQUFDO1lBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQ0osV0FBVyxDQUFDLElBQUksQ0FBQyxlQUFlLEVBQUUsTUFBTSxDQUFDLENBQUM7Z0JBQzFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsS0FBSSxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDLENBQUM7WUFDL0QsQ0FBQztZQUNELFNBQVMsQ0FBQyxLQUFLLEVBQUUsQ0FBQztZQUNsQixLQUFLLENBQUMsZUFBZSxFQUFFLENBQUM7UUFDNUIsQ0FBQztRQS9CRyxJQUFJLENBQUMsYUFBYSxHQUFHLE9BQU8sQ0FBQztJQUNqQyxDQUFDO0lBQ00sb0NBQVEsR0FBZjtRQUNJLGlCQUFpQjtJQUNyQixDQUFDO0lBRU0sMkNBQWUsR0FBdEIsVUFBdUIsS0FBSztRQUN4QixpQkFBaUI7SUFDckIsQ0FBQztJQXdCTCx3QkFBQztBQUFELENBQUM7QUFwQ1ksOENBQWlCOzs7Ozs7Ozs7Ozs7Ozs7QUNEOUIsb0VBQWdEO0FBQ2hELHFGQUFnRTtBQUdoRTtJQUlJLDRCQUFZLFdBQTJCLEVBQUUsT0FBZTtRQUF4RCxpQkFHQztRQVFNLHVCQUFrQixHQUFHO1lBQ3hCLEtBQUksQ0FBQyxhQUFhLENBQUMsRUFBRSxDQUFDLE9BQU8sRUFBRSw0Q0FBNEMsRUFBRSxVQUFDLEtBQUs7Z0JBQy9FLElBQU0sT0FBTyxHQUFHLE1BQU0sQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUM7Z0JBQ3JDLElBQU0sUUFBUSxHQUFHLE9BQU8sQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQ3ZDLElBQU0sR0FBRyxHQUFHLFFBQVEsQ0FBQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsQ0FBQztnQkFDN0MsSUFBTSxLQUFLLEdBQUcsUUFBUSxDQUFDLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDO2dCQUNqRCxJQUFNLElBQUksR0FBRyxRQUFRLENBQUMsSUFBSSxDQUFDLGtCQUFrQixDQUFDLENBQUM7Z0JBQy9DLElBQU0sR0FBRyxHQUFHLHVCQUFVLENBQUMsZUFBZSxDQUFDLEdBQUcsRUFBRSxLQUFJLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQztnQkFDOUUsRUFBRSxDQUFDLENBQUMsR0FBRyxLQUFLLFNBQVMsSUFBSSxHQUFHLEtBQUssSUFBSSxJQUFJLENBQUMsR0FBRyxDQUFDLFVBQVcsQ0FBQyxDQUFDLENBQUM7b0JBQ3hELE1BQU0sQ0FBQztnQkFDWCxDQUFDO2dCQUNELElBQUksWUFBWSxHQUFxQixtQ0FBZ0IsQ0FBQyxHQUFHLENBQUM7Z0JBQzFELEVBQUUsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQyxDQUFDO29CQUNuQyxZQUFZLEdBQUcsbUNBQWdCLENBQUMsS0FBSyxDQUFDO2dCQUMxQyxDQUFDO2dCQUNELEtBQUksQ0FBQyxXQUFXLENBQUMsbUJBQW1CLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDO2dCQUNuRCxLQUFJLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsR0FBRyxFQUFFLEtBQUssRUFBRSxZQUFZLEVBQUUsSUFBSSxDQUFDLENBQUM7Z0JBQ3ZFLEtBQUssQ0FBQyxlQUFlLEVBQUUsQ0FBQztZQUM1QixDQUFDLENBQUMsQ0FBQztRQUNQLENBQUM7UUE3QkcsSUFBSSxDQUFDLFdBQVcsR0FBRyxXQUFXLENBQUM7UUFDL0IsSUFBSSxDQUFDLGFBQWEsR0FBRyxPQUFPLENBQUM7SUFDakMsQ0FBQztJQUNNLHFDQUFRLEdBQWY7UUFDSSxpQkFBaUI7SUFDckIsQ0FBQztJQUVNLDRDQUFlLEdBQXRCLFVBQXVCLEtBQUs7UUFDeEIsaUJBQWlCO0lBQ3JCLENBQUM7SUFxQkwseUJBQUM7QUFBRCxDQUFDO0FBbkNZLGdEQUFrQjs7Ozs7Ozs7Ozs7Ozs7O0FDTC9CLElBQVksZ0JBR1g7QUFIRCxXQUFZLGdCQUFnQjtJQUN4QiwrQkFBVztJQUNYLG1DQUFlO0FBQ25CLENBQUMsRUFIVyxnQkFBZ0IsR0FBaEIsd0JBQWdCLEtBQWhCLHdCQUFnQixRQUczQjs7Ozs7Ozs7Ozs7Ozs7O0FDSEQsSUFBWSxZQVFYO0FBUkQsV0FBWSxZQUFZO0lBQ3BCLCtEQUFZO0lBQ1osNkRBQVc7SUFDWCxtREFBTTtJQUNOLDJEQUFVO0lBQ1YsMkRBQVU7SUFDViwrREFBWTtJQUNaLDZEQUFXO0FBQ2YsQ0FBQyxFQVJXLFlBQVksR0FBWixvQkFBWSxLQUFaLG9CQUFZLFFBUXZCOzs7Ozs7Ozs7Ozs7Ozs7QUNQRCxvRUFBZ0Q7QUFDaEQsd0ZBQW9FO0FBR3BFO0lBS0ksNEJBQVksV0FBMkIsRUFBRSxPQUFlO1FBQXhELGlCQUdDO1FBVU0sdUJBQWtCLEdBQUc7WUFDeEIseURBQXlEO1lBQ3pELEtBQUksQ0FBQyxhQUFhLENBQUMsRUFBRSxDQUFDLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxLQUFJLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztZQUMxRSxLQUFJLENBQUMsYUFBYSxDQUFDLEVBQUUsQ0FBQyxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsS0FBSSxDQUFDLGdCQUFnQixDQUFDLENBQUM7WUFDMUUsS0FBSSxDQUFDLGFBQWEsQ0FBQyxFQUFFLENBQUMsV0FBVyxFQUFHLGtCQUFrQixFQUFFLEtBQUksQ0FBQyxlQUFlLENBQUMsQ0FBQztZQUM5RSxLQUFJLENBQUMsYUFBYSxDQUFDLEVBQUUsQ0FBQyxTQUFTLEVBQUUsa0JBQWtCLEVBQUUsS0FBSSxDQUFDLGlCQUFpQixDQUFDLENBQUM7UUFDakYsQ0FBQztRQUNPLG9CQUFlLEdBQUc7WUFDdEIsS0FBSSxDQUFDLGdCQUFnQixHQUFHLElBQUksQ0FBQztRQUNqQyxDQUFDO1FBQ08sc0JBQWlCLEdBQUcsVUFBQyxLQUFLO1lBQzlCLGVBQWU7WUFDZixFQUFFLENBQUMsQ0FBQyxLQUFJLENBQUMsa0JBQWtCLEtBQUssS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7Z0JBQzNDLEVBQUUsQ0FBQyxDQUFDLEtBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLENBQUM7b0JBQ3hCLE1BQU0sQ0FBQztnQkFDWCxDQUFDO2dCQUNELEtBQUksQ0FBQyxrQkFBa0IsR0FBRyxLQUFLLENBQUMsTUFBTSxDQUFDO2dCQUN2QyxLQUFJLENBQUMsZ0JBQWdCLEdBQUcsS0FBSyxDQUFDO1lBQ2xDLENBQUM7WUFDRCxrQ0FBa0M7WUFDbEMsSUFBTSxNQUFNLEdBQUcsTUFBTSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUNwQyxJQUFNLGFBQWEsR0FBRyxNQUFNLENBQUMsUUFBUSxFQUFFLENBQUMsSUFBSSxDQUFDO1lBQzdDLElBQU0sV0FBVyxHQUFHLE1BQU0sQ0FBQyxLQUFLLEVBQUUsQ0FBQztZQUNuQyxJQUFNLFNBQVMsR0FBRyxLQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQztZQUN6RCxJQUFNLGFBQWEsR0FBRyxLQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztZQUM1RCxJQUFNLGlCQUFpQixHQUFHLFNBQVMsQ0FBQyxLQUFLLEVBQUUsQ0FBQztZQUM1QyxJQUFNLFNBQVMsR0FBRyxhQUFhLENBQUMsS0FBSyxFQUFFLEdBQUcsaUJBQWlCLENBQUM7WUFDNUQsSUFBTSxlQUFlLEdBQUcsYUFBYSxHQUFHLFdBQVcsR0FBRyxDQUFDLENBQUM7WUFDeEQsSUFBSSxZQUFZLENBQUM7WUFDakIsRUFBRSxDQUFDLENBQUUsZUFBZSxHQUFHLGlCQUFpQixDQUFDLENBQUMsQ0FBQztnQkFDdkMsWUFBWSxHQUFHLGFBQWEsR0FBRyxTQUFTLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsYUFBYSxDQUFDO1lBQ3pFLENBQUM7WUFBQyxJQUFJLENBQUMsQ0FBQztnQkFDSixZQUFZLEdBQUcsQ0FBQyxDQUFDO1lBQ3JCLENBQUM7WUFDRCxTQUFTLENBQUMsVUFBVSxDQUFDLFlBQVksQ0FBQyxDQUFDO1lBQ25DLEtBQUssQ0FBQyxlQUFlLEVBQUUsQ0FBQztRQUM1QixDQUFDO1FBQ08scUJBQWdCLEdBQUcsVUFBQyxLQUFLO1lBQzdCLElBQU0sSUFBSSxHQUFHLEtBQUssQ0FBQyxPQUFPLElBQUksS0FBSyxDQUFDLEtBQUssQ0FBQztZQUMxQyxFQUFFLENBQUMsQ0FBRSxLQUFLLENBQUMsSUFBSSxLQUFLLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLEtBQUssT0FBTyxJQUFJLElBQUksS0FBSyxFQUFFLElBQUksSUFBSSxLQUFLLEVBQUUsQ0FBRSxDQUFDLENBQUMsQ0FBQztnQkFDckYsTUFBTSxDQUFDO1lBQ1gsQ0FBQztZQUNELElBQU0sT0FBTyxHQUFHLE1BQU0sQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ25ELElBQU0sUUFBUSxHQUFHLE9BQU8sQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztZQUNoRCxJQUFNLEdBQUcsR0FBRyx1QkFBVSxDQUFDLGVBQWUsQ0FBQyxRQUFRLEVBQUUsS0FBSSxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUM7WUFDbkYsRUFBRSxDQUFDLENBQUMsR0FBRyxLQUFLLFNBQVMsSUFBSSxHQUFHLEtBQUssSUFBSSxJQUFJLENBQUMsR0FBRyxDQUFDLFFBQVMsQ0FBQyxDQUFDLENBQUM7Z0JBQ3RELE1BQU0sQ0FBQztZQUNYLENBQUM7WUFDRCxJQUFNLFVBQVUsR0FBRyxPQUFPLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQ3JDLElBQU0sV0FBVyxHQUFHLFVBQVUsQ0FBQyxLQUFLLEVBQUUsQ0FBQztZQUN2QyxJQUFNLGFBQWEsR0FBRyxVQUFVLENBQUMsSUFBSSxFQUFFLENBQUM7WUFDeEMsSUFBSSxTQUE2QixDQUFDO1lBQ2xDLEVBQUUsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxFQUFFLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUM1QixFQUFFLENBQUMsQ0FBQyxXQUFXLENBQUMsRUFBRSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQztvQkFDN0IsU0FBUyxHQUFHLHVDQUFrQixDQUFDLElBQUksQ0FBQztvQkFDcEMsV0FBVyxDQUFDLElBQUksRUFBRSxDQUFDO29CQUNuQixhQUFhLENBQUMsSUFBSSxFQUFFLENBQUM7Z0JBQ3pCLENBQUM7Z0JBQUMsSUFBSSxDQUFDLENBQUM7b0JBQ0osU0FBUyxHQUFHLHVDQUFrQixDQUFDLEdBQUcsQ0FBQztvQkFDbkMsYUFBYSxDQUFDLElBQUksRUFBRSxDQUFDO29CQUNyQixXQUFXLENBQUMsSUFBSSxFQUFFLENBQUM7Z0JBQ3ZCLENBQUM7WUFDTCxDQUFDO1lBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQ0osU0FBUyxHQUFHLHVDQUFrQixDQUFDLEdBQUcsQ0FBQztnQkFDbkMsV0FBVyxDQUFDLElBQUksRUFBRSxDQUFDO1lBQ3ZCLENBQUM7WUFDRCxPQUFPLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxTQUFTLEtBQUssdUNBQWtCLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxDQUFDO1lBQzlGLHVCQUFVLENBQUMsUUFBUSxDQUFDLFFBQVEsRUFBRSxTQUFTLEVBQUUsS0FBSSxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUM7WUFDM0UsS0FBSSxDQUFDLFdBQVcsQ0FBQyxtQkFBbUIsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDbkQsS0FBSSxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDLFFBQVEsRUFBRSxTQUFTLEVBQUUsR0FBRyxDQUFDLFVBQVUsQ0FBQyxDQUFDO1lBQzVFLEtBQUssQ0FBQyxlQUFlLEVBQUUsQ0FBQztRQUM1QixDQUFDO1FBbkZHLElBQUksQ0FBQyxXQUFXLEdBQUcsV0FBVyxDQUFDO1FBQy9CLElBQUksQ0FBQyxhQUFhLEdBQUcsT0FBTyxDQUFDO0lBQ2pDLENBQUM7SUFFTSxxQ0FBUSxHQUFmO1FBQ0ksaUJBQWlCO0lBQ3JCLENBQUM7SUFFTSw0Q0FBZSxHQUF0QixVQUF1QixLQUFLO1FBQ3hCLGlCQUFpQjtJQUNyQixDQUFDO0lBMEVMLHlCQUFDO0FBQUQsQ0FBQztBQTFGWSxnREFBa0I7Ozs7Ozs7Ozs7Ozs7OztBQ0wvQixrREFBaUM7QUFFakMsZ0VBQTRDO0FBRzVDO0lBSUksMkJBQVksV0FBMkIsRUFBRSxPQUFlO1FBQXhELGlCQUdDO1FBUU0sdUJBQWtCLEdBQUc7WUFDeEIsS0FBSSxDQUFDLGFBQWEsQ0FBQyxFQUFFLENBQUMsT0FBTyxFQUFFLDBCQUEwQixFQUFFLFVBQUMsS0FBSztnQkFDN0QsS0FBSSxDQUFDLFdBQVcsQ0FBQyxtQkFBbUIsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUM7Z0JBQ25ELEtBQUksQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLFlBQVksQ0FBQyxhQUFLLENBQUMsY0FBYyxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUMsQ0FBQztnQkFDeEUsS0FBSyxDQUFDLGVBQWUsRUFBRSxDQUFDO1lBQzVCLENBQUMsQ0FBQyxDQUFDO1lBQ0gsS0FBSSxDQUFDLGFBQWEsQ0FBQyxFQUFFLENBQUMsT0FBTyxFQUFFLHlCQUF5QixFQUFFLFVBQUMsS0FBSztnQkFDNUQsS0FBSSxDQUFDLFdBQVcsQ0FBQyxtQkFBbUIsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUM7Z0JBQ25ELEtBQUksQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLFlBQVksQ0FBQyxhQUFLLENBQUMsY0FBYyxDQUFDLFFBQVEsRUFBRSxhQUFLLENBQUMsY0FBYyxDQUFDLFNBQVMsR0FBRyxDQUFDLENBQUMsQ0FBQztnQkFDekcsS0FBSyxDQUFDLGVBQWUsRUFBRSxDQUFDO1lBQzVCLENBQUMsQ0FBQyxDQUFDO1lBQ0gsS0FBSSxDQUFDLGFBQWEsQ0FBQyxFQUFFLENBQUMsT0FBTyxFQUFFLHlCQUF5QixFQUFFLFVBQUMsS0FBSztnQkFDNUQsS0FBSSxDQUFDLFdBQVcsQ0FBQyxtQkFBbUIsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUM7Z0JBQ25ELEtBQUksQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLFlBQVksQ0FBQyxhQUFLLENBQUMsY0FBYyxDQUFDLFFBQVEsRUFBRSxhQUFLLENBQUMsY0FBYyxDQUFDLFNBQVMsR0FBRyxDQUFDLENBQUMsQ0FBQztnQkFDekcsS0FBSyxDQUFDLGVBQWUsRUFBRSxDQUFDO1lBQzVCLENBQUMsQ0FBQyxDQUFDO1lBQ0gsS0FBSSxDQUFDLGFBQWEsQ0FBQyxFQUFFLENBQUMsT0FBTyxFQUFFLHlCQUF5QixFQUFFLFVBQUMsS0FBSztnQkFDNUQsS0FBSSxDQUFDLFdBQVcsQ0FBQyxtQkFBbUIsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUM7Z0JBQ25ELEtBQUksQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLFlBQVksQ0FBQyxhQUFLLENBQUMsY0FBYyxDQUFDLFFBQVEsRUFBRSxhQUFLLENBQUMsY0FBYyxDQUFDLFNBQVMsQ0FBQyxDQUFDO2dCQUNyRyxLQUFLLENBQUMsZUFBZSxFQUFFLENBQUM7WUFDNUIsQ0FBQyxDQUFDLENBQUM7WUFDSCxLQUFJLENBQUMsYUFBYSxDQUFDLEVBQUUsQ0FBQyxRQUFRLEVBQUUsaUNBQWlDLEVBQUUsVUFBQyxLQUFLO2dCQUNyRSxLQUFJLENBQUMsV0FBVyxDQUFDLG1CQUFtQixDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQztnQkFDbkQsSUFBTSxHQUFHLEdBQVcsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLFFBQVEsRUFBRSxDQUFDO2dCQUMzRCxLQUFJLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxZQUFZLENBQUMsR0FBRyxFQUFFLGFBQUssQ0FBQyxjQUFjLENBQUMsU0FBUyxDQUFDLENBQUM7Z0JBQzNFLEtBQUssQ0FBQyxlQUFlLEVBQUUsQ0FBQztZQUM1QixDQUFDLENBQUMsQ0FBQztZQUNILEtBQUksQ0FBQyxhQUFhLENBQUMsRUFBRSxDQUFDLFVBQVUsRUFBRSw0QkFBNEIsRUFBRSxVQUFDLEtBQUs7Z0JBQ2xFLEtBQUksQ0FBQyxXQUFXLENBQUMsbUJBQW1CLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDO2dCQUNuRCxJQUFNLEVBQUUsR0FBRyxNQUFNLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDO2dCQUNoQyxJQUFNLFFBQVEsR0FBRyxhQUFLLENBQUMsY0FBYyxDQUFDO2dCQUN0QyxFQUFFLENBQUMsQ0FBQyxLQUFLLENBQUMsT0FBTyxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUM7b0JBQ3ZCLElBQU0sR0FBRyxHQUFXLENBQUMsRUFBRSxDQUFDLEdBQUcsRUFBRSxDQUFDLFFBQVEsRUFBRSxDQUFDO29CQUN6QyxFQUFFLENBQUMsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLElBQUksR0FBRyxHQUFHLFFBQVEsQ0FBQyxTQUFTLElBQUksR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7d0JBQ3BELEVBQUUsQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxDQUFDO29CQUMvQixDQUFDO29CQUFDLElBQUksQ0FBQyxDQUFDO3dCQUNKLEtBQUksQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLFlBQVksQ0FBQyxRQUFRLENBQUMsUUFBUSxFQUFFLEdBQUcsQ0FBQyxDQUFDO29CQUNsRSxDQUFDO2dCQUNMLENBQUM7Z0JBQ0QsS0FBSyxDQUFDLGVBQWUsRUFBRSxDQUFDO1lBQzVCLENBQUMsQ0FBQyxDQUFDO1FBQ1AsQ0FBQztRQW5ERyxJQUFJLENBQUMsV0FBVyxHQUFHLFdBQVcsQ0FBQztRQUMvQixJQUFJLENBQUMsYUFBYSxHQUFHLE9BQU8sQ0FBQztJQUNqQyxDQUFDO0lBQ00sb0NBQVEsR0FBZjtRQUNJLDhDQUE4QztJQUNsRCxDQUFDO0lBRU0sMkNBQWUsR0FBdEI7UUFDSSw4Q0FBOEM7SUFDbEQsQ0FBQztJQTJDTCx3QkFBQztBQUFELENBQUM7QUF6RFksOENBQWlCOzs7Ozs7Ozs7Ozs7Ozs7QUNEOUI7SUFRSSx1QkFBWSxXQUEyQixFQUFFLG1CQUEyQyxFQUFFLFlBQW9CO1FBQTFHLGlCQUtDO1FBVk8sY0FBUyxHQUFhLEtBQUssQ0FBQztRQWM3QixvQkFBZSxHQUFHLFVBQUMsS0FBYTtZQUNuQyxLQUFJLENBQUMsWUFBWSxHQUFHLEtBQUssQ0FBQztZQUMxQixLQUFJLENBQUMsbUJBQW1CLENBQUMsWUFBWSxHQUFHLEtBQUssQ0FBQztRQUNsRCxDQUFDO1FBQ00sb0JBQWUsR0FBRztZQUNyQixNQUFNLENBQUMsS0FBSSxDQUFDLFlBQVksQ0FBQztRQUM3QixDQUFDO1FBQ00sb0JBQWUsR0FBRztZQUNyQixLQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLEdBQUcsS0FBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQzVFLENBQUM7UUFJTSx1QkFBa0IsR0FBRztZQUN4Qix5REFBeUQ7WUFDekQsS0FBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsRUFBRSxDQUFDLFFBQVEsRUFBRSxLQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7UUFDM0UsQ0FBQztRQUNNLGtCQUFhLEdBQUc7WUFDbkIsS0FBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsR0FBRyxDQUFDLFFBQVEsRUFBRSxLQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7UUFDNUUsQ0FBQztRQUVPLGlCQUFZLEdBQUcsVUFBQyxLQUFLO1lBQ3pCLElBQU0sUUFBUSxHQUFHLEtBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDO1lBQ3hELElBQU0sVUFBVSxHQUFHLENBQUMsQ0FBQyxHQUFHLFFBQVEsQ0FBQyxVQUFVLEVBQUUsQ0FBQztZQUM5QyxLQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsQ0FBQyxHQUFHLENBQ3hDO2dCQUNJLGFBQWEsRUFBRSxVQUFVO2FBQzVCLENBQ0osQ0FBQztZQUNGLEtBQUksQ0FBQyxVQUFVLEdBQUcsVUFBVSxDQUFDO1lBQzdCLElBQU0saUJBQWlCLEdBQUcsUUFBUSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQyxNQUFNLEVBQUUsQ0FBQztZQUMvRCxJQUFNLHFCQUFxQixHQUFHLFFBQVEsQ0FBQyxNQUFNLEVBQUUsQ0FBQztZQUNoRCxLQUFLLENBQUMsY0FBYyxFQUFFLENBQUM7WUFDdkIsRUFBRSxDQUFDLENBQUMsS0FBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUM7Z0JBQ2pCLEtBQUssQ0FBQyxlQUFlLEVBQUUsQ0FBQztnQkFDeEIsTUFBTSxDQUFDO1lBQ1gsQ0FBQztZQUNELElBQU0sU0FBUyxHQUFHLFFBQVEsQ0FBQyxTQUFTLEVBQUUsQ0FBQztZQUN2QyxFQUFFLENBQUMsQ0FBQyxDQUFDLHFCQUFxQixHQUFHLFNBQVMsQ0FBRSxHQUFHLENBQUMsaUJBQWlCLEdBQUcsR0FBRyxDQUFFLEdBQUcsQ0FBRSxDQUFDLENBQUMsQ0FBQztnQkFDekUsRUFBRSxDQUFDLENBQUUsS0FBSSxDQUFDLFlBQVksSUFBSSxLQUFJLENBQUMsbUJBQW1CLENBQUMsVUFBVyxDQUFDLENBQUMsQ0FBQztvQkFDN0QsTUFBTSxDQUFDO2dCQUNYLENBQUM7Z0JBQ0QsS0FBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUM7Z0JBQ3RCLElBQUksU0FBUyxHQUFHLEtBQUksQ0FBQyxZQUFZLEdBQUcsS0FBSSxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDO2dCQUN2RSxFQUFFLENBQUMsQ0FBRSxTQUFTLElBQUksS0FBSSxDQUFDLG1CQUFtQixDQUFDLFVBQVcsQ0FBQyxDQUFDLENBQUM7b0JBQ3JELFNBQVMsR0FBRyxLQUFJLENBQUMsbUJBQW1CLENBQUMsVUFBVSxHQUFHLENBQUMsQ0FBQztnQkFDeEQsQ0FBQztnQkFDRCxJQUFNLElBQUksR0FBSSxNQUFNLENBQUMsS0FBSSxDQUFDLG1CQUFtQixDQUFDLFdBQVcsQ0FBQyxLQUFJLENBQUMsWUFBWSxFQUFFLFNBQVMsQ0FBQyxDQUFDLENBQUM7Z0JBQ3pGLFFBQVEsQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQzdDLEtBQUksQ0FBQyxlQUFlLENBQUUsU0FBUyxHQUFHLENBQUMsQ0FBRSxDQUFDO2dCQUN0QyxLQUFJLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQztZQUMzQixDQUFDO1lBQ0QsS0FBSyxDQUFDLGVBQWUsRUFBRSxDQUFDO1FBQzVCLENBQUM7UUE3REcsSUFBSSxDQUFDLFdBQVcsR0FBRyxXQUFXLENBQUM7UUFDL0IsSUFBSSxDQUFDLGFBQWEsR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztRQUN2RSxJQUFJLENBQUMsbUJBQW1CLEdBQUcsbUJBQW1CLENBQUM7UUFDL0MsSUFBSSxDQUFDLGVBQWUsQ0FBQyxZQUFZLENBQUMsQ0FBQztJQUN2QyxDQUFDO0lBQ00sZ0NBQVEsR0FBZjtRQUNJLEVBQUU7SUFDTixDQUFDO0lBV00sdUNBQWUsR0FBdEIsVUFBdUIsS0FBSztRQUN4QixRQUFRO0lBQ1osQ0FBQztJQTBDTCxvQkFBQztBQUFELENBQUM7QUF2RVksc0NBQWE7Ozs7Ozs7Ozs7Ozs7OztBQ0gxQiwwRkFBeUU7QUFDekUseUVBQXdEO0FBQ3hELHFGQUFtRTtBQUNuRSw0RkFBMEU7QUFDMUUscUVBQW1EO0FBR25ELGdFQUE0QztBQVc1QztJQVdJLDZCQUFZLFdBQTJCO1FBQXZDLGlCQU9DO1FBaEJPLGFBQVEsR0FBUSxFQUFFLENBQUM7UUFpQnBCLGtCQUFhLEdBQUc7WUFDbkIsTUFBTSxDQUFDLEtBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxLQUFLLENBQUMsSUFBSSxLQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sS0FBSyxLQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQztRQUNuRixDQUFDO1FBYUQsdURBQXVEO1FBQ2hELHFCQUFnQixHQUFHLFVBQUMsSUFBUyxFQUNULFVBQWtCLEVBQ2xCLFNBQWlCO1lBQ3hDLEtBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO1lBQ2pCLEtBQUksQ0FBQyxRQUFRLEdBQUcsRUFBRSxDQUFDO1lBQ25CLElBQU0sWUFBWSxHQUFHLEtBQUksQ0FBQyxXQUFXLENBQUMsVUFBVSxFQUFFLFNBQVMsQ0FBQyxDQUFDO1lBQzdELE1BQU0sQ0FBQyxLQUFJLENBQUMsdUJBQXVCLENBQUM7Z0JBQ2hDLFdBQVcsRUFBRSxLQUFJLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxXQUFXO2dCQUNqRCxPQUFPLEVBQUUsS0FBSSxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsT0FBTztnQkFDekMsU0FBUyxFQUFFLEtBQUksQ0FBQyxJQUFJLENBQUMsTUFBTTtnQkFDM0IsT0FBTyxFQUFFLEtBQUksQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLE9BQU87Z0JBQ3pDLFlBQVk7Z0JBQ1osY0FBYyxFQUFFLGFBQUssQ0FBQyxjQUFjO2dCQUNwQyxPQUFPLEVBQUUsS0FBSSxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsT0FBTzthQUM1QyxDQUFDLENBQUM7UUFDUCxDQUFDO1FBQ0Qsa0NBQWtDO1FBQzNCLGdCQUFXLEdBQUcsVUFBQyxVQUFrQixFQUFFLFNBQWlCO1lBQ3ZELElBQU0sWUFBWSxHQUFHLEtBQUksQ0FBQyxXQUFXLENBQUMsVUFBVSxFQUFFLFNBQVMsQ0FBQyxDQUFDO1lBQzdELE1BQU0sQ0FBQyxLQUFJLENBQUMsMEJBQTBCLENBQUM7Z0JBQ25DLE9BQU8sRUFBRSxLQUFJLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxPQUFPO2dCQUN6QyxZQUFZO2dCQUNaLE9BQU8sRUFBRSxLQUFJLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxPQUFPO2FBQzVDLENBQUMsQ0FBQztRQUNQLENBQUM7UUFDRCxzQkFBc0I7UUFDZix5QkFBb0IsR0FBRyxVQUFDLEdBQU07WUFDakMsSUFBTSxRQUFRLEdBQUcsS0FBSSxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDO1lBQ3JELElBQU0sZUFBZSxHQUFHLEtBQUksQ0FBQyxVQUFVLENBQUMsR0FBRyxFQUFFLFFBQVEsQ0FBQyxDQUFDO1lBQ3ZELElBQU0sWUFBWSxHQUFHLENBQUM7b0JBQ2xCLGFBQWEsRUFBRSxLQUFJLENBQUMsYUFBYSxFQUFFO29CQUNuQyxTQUFTLEVBQUUsR0FBRyxDQUFDLEtBQUksQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQztvQkFDbEQsZUFBZTtvQkFDZixNQUFNLEVBQUUsS0FBSSxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLE1BQU07aUJBQ2xELENBQUMsQ0FBQztZQUNILE1BQU0sQ0FBQyxLQUFJLENBQUMsMEJBQTBCLENBQUMsRUFBQyxZQUFZLGdCQUFDLENBQUMsQ0FBQztRQUMzRCxDQUFDO1FBQ00seUJBQW9CLEdBQUc7WUFDMUIsTUFBTSxDQUFDLEtBQUksQ0FBQyw0QkFBNEIsQ0FBQyxFQUFDLE9BQU8sRUFBRSxLQUFJLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxPQUFPLEVBQUMsQ0FBQyxDQUFDO1FBQzFGLENBQUM7UUFFTSxnQkFBVyxHQUFHLFVBQUMsVUFBa0IsRUFBRSxTQUFpQjtZQUN2RCxJQUFNLFlBQVksR0FBVSxFQUFFLENBQUM7WUFDL0IsSUFBTSxRQUFRLEdBQUcsS0FBSSxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDO1lBQ3JELEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLFVBQVUsRUFBRSxDQUFDLElBQUksU0FBUyxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUM7Z0JBQzNDLElBQU0sR0FBRyxHQUFNLEtBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQzVCLElBQU0sZUFBZSxHQUF1QixLQUFJLENBQUMsVUFBVSxDQUFDLEdBQUcsRUFBRSxRQUFRLENBQUMsQ0FBQztnQkFDM0UsWUFBWSxDQUFDLElBQUksQ0FBQztvQkFDZCxRQUFRLEVBQUUsQ0FBQztvQkFDWCxhQUFhLEVBQUUsS0FBSSxDQUFDLGFBQWEsRUFBRTtvQkFDbkMsU0FBUyxFQUFFLEdBQUcsQ0FBQyxLQUFJLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUM7b0JBQ2xELGVBQWU7b0JBQ2YsTUFBTSxFQUFFLEtBQUksQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxNQUFNO2lCQUNsRCxDQUFDLENBQUM7WUFDUCxDQUFDO1lBQ0QsTUFBTSxDQUFDLFlBQVksQ0FBQztRQUN4QixDQUFDO1FBQ00sZUFBVSxHQUFHLFVBQUMsS0FBYTtZQUM5QixJQUFNLEdBQUcsR0FBRyxLQUFJLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUM7WUFDL0MsSUFBTSxXQUFXLEdBQUcsRUFBRSxDQUFDO1lBQ3ZCLElBQUksTUFBTSxHQUFHLEtBQUssQ0FBQztZQUNuQixHQUFHLENBQUMsQ0FBbUIsVUFBYSxFQUFiLFVBQUksQ0FBQyxRQUFRLEVBQWIsY0FBYSxFQUFiLElBQWE7Z0JBQS9CLElBQU0sUUFBUTtnQkFDZixFQUFFLENBQUMsQ0FBRSxLQUFLLEtBQUssUUFBUSxDQUFDLEdBQUcsQ0FBRSxDQUFDLENBQUMsQ0FBQztvQkFDNUIsTUFBTSxHQUFHLElBQUksQ0FBQztvQkFDZCxLQUFLLENBQUM7Z0JBQ1YsQ0FBQzthQUNKO1lBQ0QsRUFBRSxDQUFDLENBQUUsQ0FBQyxNQUFPLENBQUMsQ0FBQyxDQUFDO2dCQUNaLFdBQVcsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDNUIsQ0FBQztZQUNELEdBQUcsQ0FBQyxDQUFvQixVQUFXLEVBQVgsMkJBQVcsRUFBWCx5QkFBVyxFQUFYLElBQVc7Z0JBQTlCLElBQU0sU0FBUztnQkFDaEIsR0FBRyxDQUFDLENBQWlCLFVBQVMsRUFBVCxVQUFJLENBQUMsSUFBSSxFQUFULGNBQVMsRUFBVCxJQUFTO29CQUF6QixJQUFNLE1BQU07b0JBQ2IsRUFBRSxDQUFDLENBQUUsU0FBUyxLQUFLLE1BQU0sQ0FBQyxHQUFHLENBQUUsQ0FBQyxDQUFDLENBQUM7d0JBQzlCLEtBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO3dCQUMzQixLQUFLLENBQUM7b0JBQ1YsQ0FBQztpQkFDSjthQUNKO1FBQ0wsQ0FBQztRQUNNLGlCQUFZLEdBQUcsVUFBQyxLQUFhO1lBQ2hDLElBQU0sV0FBVyxHQUFHLEVBQUUsQ0FBQztZQUN2QixJQUFNLEdBQUcsR0FBRyxLQUFJLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUM7WUFDL0MsR0FBRyxDQUFDLENBQW1CLFVBQWEsRUFBYixVQUFJLENBQUMsUUFBUSxFQUFiLGNBQWEsRUFBYixJQUFhO2dCQUEvQixJQUFNLFFBQVE7Z0JBQ2YsRUFBRSxDQUFDLENBQUUsS0FBSyxLQUFLLFFBQVEsQ0FBQyxHQUFHLENBQUUsQ0FBQyxDQUFDLENBQUM7b0JBQzVCLFdBQVcsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7Z0JBQy9CLENBQUM7YUFDSjtZQUNELEtBQUksQ0FBQyxRQUFRLEdBQUcsV0FBVyxDQUFDO1FBQ2hDLENBQUM7UUFDTSxjQUFTLEdBQUc7WUFDZixLQUFJLENBQUMsUUFBUSxHQUFHLEtBQUksQ0FBQyxJQUFJLENBQUM7UUFDOUIsQ0FBQztRQUNNLGdCQUFXLEdBQUc7WUFDakIsS0FBSSxDQUFDLFFBQVEsR0FBRyxFQUFFLENBQUM7UUFDdkIsQ0FBQztRQUNNLGVBQVUsR0FBRyxVQUFDLElBQVM7WUFDMUIsSUFBTSxHQUFHLEdBQUcsS0FBSSxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDO1lBQy9DLEVBQUUsQ0FBQyxDQUFFLElBQUksS0FBSyxTQUFTLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTyxDQUFDLENBQUMsQ0FBQztnQkFDdkMsTUFBTSxDQUFDO1lBQ1gsQ0FBQztZQUNELEdBQUcsQ0FBQyxDQUFjLFVBQUksRUFBSixhQUFJLEVBQUosa0JBQUksRUFBSixJQUFJO2dCQUFqQixJQUFNLEdBQUc7Z0JBQ1YsR0FBRyxDQUFDLENBQWdCLFVBQVMsRUFBVCxVQUFJLENBQUMsSUFBSSxFQUFULGNBQVMsRUFBVCxJQUFTO29CQUF4QixJQUFJLE9BQU87b0JBQ1osRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxLQUFLLE9BQU8sQ0FBQyxHQUFHLENBQUUsQ0FBQyxDQUFDLENBQUM7d0JBQzdCLE9BQU8sR0FBRyxHQUFHLENBQUM7d0JBQ2QsS0FBSyxDQUFDO29CQUNWLENBQUM7aUJBQ0o7YUFDSjtZQUNELEdBQUcsQ0FBQyxDQUFjLFVBQUksRUFBSixhQUFJLEVBQUosa0JBQUksRUFBSixJQUFJO2dCQUFqQixJQUFNLEdBQUc7Z0JBQ1YsR0FBRyxDQUFDLENBQWdCLFVBQWEsRUFBYixVQUFJLENBQUMsUUFBUSxFQUFiLGNBQWEsRUFBYixJQUFhO29CQUE1QixJQUFJLE9BQU87b0JBQ1osRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxLQUFLLE9BQU8sQ0FBQyxHQUFHLENBQUUsQ0FBQyxDQUFDLENBQUM7d0JBQzdCLE9BQU8sR0FBRyxHQUFHLENBQUM7d0JBQ2QsS0FBSyxDQUFDO29CQUNWLENBQUM7aUJBQ0o7YUFDSjtRQUNMLENBQUM7UUFDTyxlQUFVLEdBQUcsVUFBQyxHQUFNLEVBQUUsUUFBZ0I7WUFDMUMsSUFBTSxlQUFlLEdBQVUsRUFBRSxDQUFDO1lBQ2xDLEdBQUcsQ0FBQyxDQUFjLFVBQWdDLEVBQWhDLFVBQUksQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLE9BQU8sRUFBaEMsY0FBZ0MsRUFBaEMsSUFBZ0M7Z0JBQTdDLElBQU0sR0FBRztnQkFDVixJQUFJLFdBQVcsR0FBRyxHQUFHLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDO2dCQUM5QixFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQztvQkFDbkIsV0FBVyxHQUFHLEtBQUksQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLGNBQWMsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQUM7Z0JBQ3BFLENBQUM7Z0JBQ0QsRUFBRSxDQUFDLENBQUMsUUFBUSxLQUFLLFNBQVMsSUFBSSxXQUFXLEtBQUssUUFBUSxDQUFDLENBQUMsQ0FBQztvQkFDckQsV0FBVyxHQUFHLEVBQUUsQ0FBQztnQkFDckIsQ0FBQztnQkFDRCxlQUFlLENBQUMsSUFBSSxDQUFDO29CQUNqQixXQUFXO29CQUNYLElBQUksRUFBRSxHQUFHLENBQUMsSUFBSTtvQkFDZCxNQUFNLEVBQUUsR0FBRyxDQUFDLE1BQU07b0JBQ2xCLFdBQVcsRUFBRSxHQUFHLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQztvQkFDeEIsVUFBVSxFQUFFLEdBQUcsQ0FBQyxJQUFJO29CQUNwQixFQUFFLEVBQUUsR0FBRyxDQUFDLEVBQUU7b0JBQ1YsVUFBVSxFQUFFLEdBQUcsQ0FBQyxVQUFVO2lCQUM3QixDQUFDLENBQUM7YUFDTjtZQUNELE1BQU0sQ0FBQyxlQUFlLENBQUM7UUFDM0IsQ0FBQztRQWpLRyxJQUFJLENBQUMsV0FBVyxHQUFHLFdBQVcsQ0FBQztRQUMvQixJQUFJLENBQUMsdUJBQXVCLEdBQUcsWUFBWSxDQUFDO1FBQzVDLElBQUksQ0FBQywwQkFBMEIsR0FBRyxtQkFBbUIsQ0FBQztRQUN0RCxJQUFJLENBQUMsNkJBQTZCLEdBQUcsc0JBQXNCLENBQUM7UUFDNUQsSUFBSSxDQUFDLHlCQUF5QixHQUFHLFVBQVUsQ0FBQztRQUM1QyxJQUFJLENBQUMsNEJBQTRCLEdBQUcsb0JBQW9CLENBQUM7SUFDN0QsQ0FBQztJQUlELHNCQUFXLHFDQUFJO2FBQWY7WUFDSSxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQztRQUNyQixDQUFDOzs7T0FBQTtJQUNELHNCQUFXLHlDQUFRO2FBQW5CO1lBQ0ksTUFBTSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUM7UUFDekIsQ0FBQzs7O09BQUE7SUFDRCxzQkFBVyw2Q0FBWTthQUF2QixVQUF3QixLQUFhO1lBQ2pDLElBQUksQ0FBQyxZQUFZLEdBQUcsS0FBSyxDQUFDO1FBQzlCLENBQUM7OztPQUFBO0lBQ0Qsc0JBQVcsMkNBQVU7YUFBckI7WUFDSSxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUM7UUFDNUIsQ0FBQzs7O09BQUE7SUE2SUwsMEJBQUM7QUFBRCxDQUFDO0FBOUtZLGtEQUFtQjs7Ozs7Ozs7Ozs7Ozs7O0FDbkJoQyxJQUFNLFFBQVEsR0FBRyxVQUFDLEtBQWEsRUFBRSxLQUFhO0lBQzFDLE1BQU0sQ0FBQyxLQUFLLEtBQUssS0FBSyxDQUFDLENBQUMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztBQUM3QyxDQUFDLENBQUM7QUFFRixrQkFBZSxRQUFRLENBQUM7Ozs7Ozs7Ozs7OztBQ0p4QjtBQUNBLHlCQUF5Qix1REFBdUQ7QUFDaEYsaUVBQWlFO0FBQ2pFOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrSUFBeUosNkNBQTZDLDBCQUEwQixhQUFhO0FBQzdPO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDs7QUFFQTtBQUNBLHlGQUF5Riw4Q0FBOEMsdUJBQXVCLHlFQUF5RTtBQUN2TztBQUNBLENBQUMsZ0JBQWdCLEU7Ozs7Ozs7Ozs7Ozs7O0FDcEJqQixJQUFNLE9BQU8sR0FBRyxVQUFDLElBQWE7SUFDMUIsTUFBTSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztBQUNsQyxDQUFDLENBQUM7QUFFRixrQkFBZSxPQUFPLENBQUM7Ozs7Ozs7Ozs7OztBQ0p2QjtBQUNBLHlCQUF5Qix1REFBdUQ7QUFDaEYsaUVBQWlFO0FBQ2pFO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDs7QUFFQTtBQUNBLGtKQUE0SixVQUFVLHlCQUF5QixhQUFhO0FBQzVNO0FBQ0EsQ0FBQztBQUNEOztBQUVBLDZGQUE2RiwrQ0FBK0MscUJBQXFCLHdGQUF3RjtBQUN6UCxDQUFDO0FBQ0Q7O0FBRUE7QUFDQSxtSkFBNkosK0JBQStCLDBCQUEwQixhQUFhO0FBQ25PO0FBQ0EsQ0FBQztBQUNELDZFQUE2RTs7QUFFN0U7QUFDQSxtSEFBOEgsc0JBQXNCLGFBQWE7QUFDaks7QUFDQTtBQUNBO0FBQ0Esa0pBQTRKLDZCQUE2QixhQUFhO0FBQ3RNO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELHlJQUF5STs7QUFFekk7QUFDQTtBQUNBO0FBQ0EsdUxBQWtNLHNCQUFzQixhQUFhO0FBQ3JPO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0ZBQXNGO0FBQ3RGLDJGQUEyRixxQkFBcUIseUVBQXlFO0FBQ3pMLGtHQUFrRyxpREFBaUQ7QUFDbkosc0ZBQXNGLHVCQUF1Qix5RUFBeUU7QUFDdEw7QUFDQTtBQUNBO0FBQ0Esc0ZBQXNGLHVCQUF1Qix5RUFBeUU7QUFDdEwsNlVBQTZVLGtEQUFrRDtBQUMvWCxzRkFBc0YsdUJBQXVCLHlFQUF5RTtBQUN0TDtBQUNBLDRHQUFxSCx1SUFBdUk7QUFDNVA7QUFDQSx5R0FBbUgsZ0lBQWdJO0FBQ25QO0FBQ0EsQ0FBQyxrQ0FBa0MsRTs7Ozs7Ozs7Ozs7Ozs7QUNoRW5DLElBQU0sTUFBTSxHQUFHLFVBQUMsR0FBRztJQUNmLElBQU0sU0FBUyxHQUFXLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQztJQUNyRCxJQUFNLFVBQVUsR0FBRyxrQkFBa0IsR0FBRyxHQUFHLENBQUMsRUFBRSxHQUFHLEdBQUcsQ0FBQztJQUNyRCxNQUFNLENBQUMsc0JBQXNCLEdBQUcsU0FBUyxHQUFHLE1BQU0sR0FBRyxVQUFVLEdBQUcsS0FBSyxDQUFDO0FBQzVFLENBQUMsQ0FBQztBQUVGLGtCQUFlLE1BQU0sQ0FBQzs7Ozs7Ozs7Ozs7Ozs7O0FDTnRCLDRGQUF3RTtBQUd4RSxJQUFNLE9BQU8sR0FBRyxVQUFDLE1BQWUsRUFBRSxLQUFhO0lBQzNDLElBQU0sU0FBUyxHQUFHLFFBQVEsQ0FBQyxLQUFLLEVBQUUsRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQzFDLElBQUksV0FBVyxDQUFDO0lBQ2hCLElBQUksWUFBWSxDQUFDO0lBQ2pCLElBQUksWUFBWSxDQUFDO0lBQ2pCLElBQU0sYUFBYSxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLHVCQUF1QixDQUFDLENBQUMsQ0FBQyx3QkFBd0IsQ0FBQztJQUN6RixJQUFNLFFBQVEsR0FBRyxNQUFNLENBQUMsUUFBUSxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUM1RCxFQUFFLENBQUMsQ0FBQyxNQUFNLENBQUMsT0FBTyxLQUFLLHVDQUFrQixDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDNUMsWUFBWSxHQUFHLDJFQUEyRTtZQUMxRSxxRkFBcUYsQ0FBQztRQUN0RyxXQUFXLEdBQUcseUJBQXlCLENBQUM7UUFDeEMsWUFBWSxHQUFHLE1BQU0sQ0FBQyxJQUFJLEdBQUcsbUJBQW1CLENBQUM7SUFDckQsQ0FBQztJQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxNQUFNLENBQUMsT0FBTyxLQUFLLHVDQUFrQixDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7UUFDcEQsWUFBWSxHQUFHLG9GQUFvRjtZQUNuRiwyRUFBMkUsQ0FBQztRQUM1RixXQUFXLEdBQUcsMEJBQTBCLENBQUM7UUFDekMsWUFBWSxHQUFHLE1BQU0sQ0FBQyxJQUFJLEdBQUcsb0JBQW9CLENBQUM7SUFDdEQsQ0FBQztJQUFDLElBQUksQ0FBQyxDQUFDO1FBQ0osWUFBWSxHQUFHLG9GQUFvRjtZQUNuRixxRkFBcUYsQ0FBQztRQUN0RyxXQUFXLEdBQUcsb0JBQW9CLENBQUM7UUFDbkMsWUFBWSxHQUFHLE1BQU0sQ0FBQyxJQUFJLEdBQUcsMERBQTBELENBQUM7SUFDNUYsQ0FBQztJQUNELE1BQU0sQ0FBQyw0Q0FBNEMsR0FBRyxTQUFTO1VBQ3ZELGdCQUFnQixHQUFHLFFBQVEsR0FBRyw4Q0FBOEM7VUFDNUUsTUFBTSxDQUFDLEVBQUUsR0FBSSxJQUFJO1VBQ2pCLG9CQUFvQixHQUFHLE1BQU0sQ0FBQyxFQUFFLEdBQUcsS0FBSztVQUN4QyxXQUFXO1VBQ1gsYUFBYTtVQUNiLGdCQUFnQixHQUFHLFlBQVksR0FBRyxLQUFLO1VBQ3ZDLFdBQVcsR0FBRyxNQUFNLENBQUMsSUFBSSxHQUFHLEtBQUs7VUFDakMsS0FBSztVQUNMLHdDQUF3QyxHQUFHLE1BQU0sQ0FBQyxJQUFJLEdBQUcsU0FBUztVQUNsRSxZQUFZO1VBQ1osUUFBUSxDQUFDO0FBQ3JCLENBQUMsQ0FBQztBQUVGLGtCQUFlLE9BQU8sQ0FBQzs7Ozs7Ozs7Ozs7Ozs7O0FDeEN2QixJQUFNLFVBQVUsR0FBRyxVQUFDLElBQWE7SUFDN0IsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsc0JBQXNCLENBQUMsQ0FBQyxDQUFDLHVCQUF1QixDQUFDO0FBQ25FLENBQUMsQ0FBQztBQUVGLGtCQUFlLFVBQVUsQ0FBQyIsImZpbGUiOiJncmlkb28uanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KHJlcXVpcmUoXCJoYW5kbGViYXJzL3J1bnRpbWVcIiksIHJlcXVpcmUoXCJqUXVlcnlcIikpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoW1wiaGFuZGxlYmFycy5ydW50aW1lXCIsIFwialF1ZXJ5XCJdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcIkdyaWRvb1wiXSA9IGZhY3RvcnkocmVxdWlyZShcImhhbmRsZWJhcnMvcnVudGltZVwiKSwgcmVxdWlyZShcImpRdWVyeVwiKSk7XG5cdGVsc2Vcblx0XHRyb290W1wiR3JpZG9vXCJdID0gZmFjdG9yeShyb290W1wiSGFuZGxlYmFyc1wiXSwgcm9vdFtcImpRdWVyeVwiXSk7XG59KSh0eXBlb2Ygc2VsZiAhPT0gJ3VuZGVmaW5lZCcgPyBzZWxmIDogdGhpcywgZnVuY3Rpb24oX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV8wX18sIF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfNF9fKSB7XG5yZXR1cm4gXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDEyKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCAxMTI2OTdiYjJmMzAzMGMwNGRkNSIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV8wX187XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwge1wicm9vdFwiOlwiSGFuZGxlYmFyc1wiLFwiYW1kXCI6XCJoYW5kbGViYXJzLnJ1bnRpbWVcIixcImNvbW1vbmpzMlwiOlwiaGFuZGxlYmFycy9ydW50aW1lXCIsXCJjb21tb25qc1wiOlwiaGFuZGxlYmFycy9ydW50aW1lXCJ9XG4vLyBtb2R1bGUgaWQgPSAwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIiwiY29uc3QgZGlzYWJsZWQgPSAoYm9vbDogYm9vbGVhbik6IHN0cmluZyA9PiB7XHJcbiAgICByZXR1cm4gYm9vbCA/IFwiZGlzYWJsZWRcIiA6IFwiXCI7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBkaXNhYmxlZDtcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL3RzbGludC1sb2FkZXI/P3JlZi0tMSEuL3NyYy9oYnMvaGVscGVycy9EaXNhYmxlZC50cyIsImNvbnN0IEFkZCA9IChsZWZ0OiBudW1iZXIsIHJpZ2h0OiBudW1iZXIpOiBzdHJpbmcgPT4ge1xyXG4gICAgcmV0dXJuIChsZWZ0ICsgcmlnaHQpLnRvU3RyaW5nKCk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBBZGQ7XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy90c2xpbnQtbG9hZGVyPz9yZWYtLTEhLi9zcmMvaGJzL2hlbHBlcnMvQWRkLnRzIiwiaW1wb3J0IHsgSVBhZ2luYXRpb24gfSBmcm9tIFwiLi4vbW9kZWxzL0lQYWdpbmF0aW9uXCI7XHJcbmltcG9ydCB7IElQYWdpbmF0aW9uSW5wdXQgfSBmcm9tIFwiLi4vbW9kZWxzL0lQYWdpbmF0aW9uSW5wdXRcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBQYWdlciB7XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBwYWdpbmF0aW9uRGF0YTogSVBhZ2luYXRpb247XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBDYWxjdWxhdGVQYWdpbmF0aW9uRGF0YSA9IChwYWdpbmF0aW9uSW5wdXQ6IElQYWdpbmF0aW9uSW5wdXQpOiB2b2lkID0+IHtcclxuICAgICAgICAgICAgY29uc3QgcGFnaW5hdGlvbkRhdGE6IGFueSA9IHt9O1xyXG4gICAgICAgICAgICBwYWdpbmF0aW9uRGF0YS5wYWdlSW5kZXggPSBwYWdpbmF0aW9uSW5wdXQucGFnZUluZGV4O1xyXG4gICAgICAgICAgICBwYWdpbmF0aW9uRGF0YS5wYWdlU2l6ZSA9IHBhZ2luYXRpb25JbnB1dC5wYWdlU2l6ZTtcclxuICAgICAgICAgICAgcGFnaW5hdGlvbkRhdGEucGFnZVNpemVzID0gcGFnaW5hdGlvbklucHV0LnBhZ2VTaXplcztcclxuICAgICAgICAgICAgcGFnaW5hdGlvbkRhdGEudG90YWxDb3VudCA9IHBhZ2luYXRpb25JbnB1dC50b3RhbENvdW50O1xyXG4gICAgICAgICAgICBwYWdpbmF0aW9uRGF0YS5ub09mUGFnZXMgPSBNYXRoLmNlaWwocGFnaW5hdGlvbklucHV0LnRvdGFsQ291bnQgLyBwYWdpbmF0aW9uSW5wdXQucGFnZVNpemUpO1xyXG4gICAgICAgICAgICBjb25zdCBtaW5OdW0gPSAoKHBhZ2luYXRpb25JbnB1dC5wYWdlSW5kZXggLSAxKSAqIHBhZ2luYXRpb25JbnB1dC5wYWdlU2l6ZSk7XHJcbiAgICAgICAgICAgIGNvbnN0IGxvd2VyTGltaXRPZmZzZXQgPSBwYWdpbmF0aW9uSW5wdXQucGFnZVNpemUgPiBwYWdpbmF0aW9uSW5wdXQudG90YWxDb3VudCA/XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWdpbmF0aW9uSW5wdXQudG90YWxDb3VudCA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWdpbmF0aW9uSW5wdXQucGFnZVNpemU7XHJcbiAgICAgICAgICAgIHBhZ2luYXRpb25EYXRhLnJhbmdlID0ge1xyXG4gICAgICAgICAgICAgICAgbWluIDogbWluTnVtICsgMSxcclxuICAgICAgICAgICAgICAgIG1heCA6IG1pbk51bSArIGxvd2VyTGltaXRPZmZzZXQsXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIHBhZ2luYXRpb25EYXRhLmZpcnN0UGFnZUxpbmtEaXNhYmxlZCA9IHBhZ2luYXRpb25EYXRhLm5vT2ZQYWdlcyA9PT0gMSB8fCBwYWdpbmF0aW9uRGF0YS5wYWdlSW5kZXggPT09IDE7XHJcbiAgICAgICAgICAgIHBhZ2luYXRpb25EYXRhLmxhc3RQYWdlTGlua0Rpc2FibGVkICA9IHBhZ2luYXRpb25EYXRhLm5vT2ZQYWdlcyA9PT0gMVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfHwgKHBhZ2luYXRpb25EYXRhLnBhZ2VJbmRleCA9PT0gcGFnaW5hdGlvbkRhdGEubm9PZlBhZ2VzKTtcclxuICAgICAgICAgICAgcGFnaW5hdGlvbkRhdGEucHJldlBhZ2VMaW5rRGlzYWJsZWQgID0gcGFnaW5hdGlvbkRhdGEucGFnZUluZGV4ID09PSAxXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8fCAocGFnaW5hdGlvbkRhdGEucGFnZUluZGV4IC0gMSkgPD0gMDtcclxuICAgICAgICAgICAgcGFnaW5hdGlvbkRhdGEubmV4dFBhZ2VMaW5rRGlzYWJsZWQgID0gcGFnaW5hdGlvbkRhdGEubm9PZlBhZ2VzID09PSBwYWdpbmF0aW9uRGF0YS5wYWdlSW5kZXhcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHx8IChwYWdpbmF0aW9uRGF0YS5wYWdlSW5kZXggKyAxKSA+PSBwYWdpbmF0aW9uRGF0YS5ub09mUGFnZXM7XHJcbiAgICAgICAgICAgIFBhZ2VyLnBhZ2luYXRpb25EYXRhID0gcGFnaW5hdGlvbkRhdGE7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBnZXQgUGFnaW5hdGlvbkRhdGEoKTogSVBhZ2luYXRpb24ge1xyXG4gICAgICAgIHJldHVybiBQYWdlci5wYWdpbmF0aW9uRGF0YTtcclxuICAgIH1cclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvdHNsaW50LWxvYWRlcj8/cmVmLS0xIS4vc3JjL2pzL3BhZ2luYXRpb24vUGFnZXIudHMiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfNF9fO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwialF1ZXJ5XCJcbi8vIG1vZHVsZSBpZCA9IDRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEiLCJpbXBvcnQgeyBHcmlkT3JkZXJEaXJlY3Rpb24gfSBmcm9tIFwiLi4vbW9kZWxzL0dyaWRPcmRlckRpcmVjdGlvblwiO1xyXG5pbXBvcnQgeyBJQ29sdW1uIH0gZnJvbSBcIi4vLi4vbW9kZWxzL0lDb2x1bW5cIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBDb21tb25VdGlsIHtcclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIEdldENvbHVtbk9iamVjdCA9IChjb2x1bW5JZDogc3RyaW5nLCBjb2x1bW5zOiBJQ29sdW1uW10pOiBJQ29sdW1uID0+IHtcclxuICAgICAgICBpZiAoY29sdW1uSWQgPT0gbnVsbCB8fCBjb2x1bW5zID09IG51bGwpIHtcclxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCByZXRDb2w6IElDb2x1bW47XHJcbiAgICAgICAgY29sdW1ucy5mb3JFYWNoKChjb2w6IElDb2x1bW4pID0+IHtcclxuICAgICAgICAgICAgaWYgKGNvbC5pZCA9PT0gY29sdW1uSWQpIHtcclxuICAgICAgICAgICAgICAgIHJldENvbCA9IGNvbDtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHJldHVybiByZXRDb2w7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgc3RhdGljIFNldE9yZGVyID0gKGNvbHVtbklkOiBzdHJpbmcsIG9yZGVyQnk6IEdyaWRPcmRlckRpcmVjdGlvbiwgY29sdW1uczogSUNvbHVtbltdKTogSUNvbHVtbiA9PiB7XHJcbiAgICAgICAgaWYgKGNvbHVtbklkID09IG51bGwgfHwgY29sdW1ucyA9PSBudWxsKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQgcmV0Q29sOiBJQ29sdW1uO1xyXG4gICAgICAgIGNvbHVtbnMuZm9yRWFjaCgoY29sOiBJQ29sdW1uKSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChjb2wuaWQgPT09IGNvbHVtbklkKSB7XHJcbiAgICAgICAgICAgICAgICBjb2wub3JkZXJCeSA9IG9yZGVyQnk7XHJcbiAgICAgICAgICAgICAgICByZXRDb2wgPSBjb2w7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgICByZXR1cm4gcmV0Q29sO1xyXG4gICAgfVxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy90c2xpbnQtbG9hZGVyPz9yZWYtLTEhLi9zcmMvanMvdXRpbC9Db2x1bW5VdGlsLnRzIiwiZXhwb3J0IGVudW0gR3JpZE9yZGVyRGlyZWN0aW9uIHtcclxuICAgIE5vbmUgPSBcIk5vbmVcIixcclxuICAgIEFzYyA9IFwiQXNjXCIsXHJcbiAgICBEZXNjID0gXCJEZXNjXCIsXHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL3RzbGludC1sb2FkZXI/P3JlZi0tMSEuL3NyYy9qcy9tb2RlbHMvR3JpZE9yZGVyRGlyZWN0aW9uLnRzIiwidmFyIEhhbmRsZWJhcnMgPSByZXF1aXJlKFwiaGFuZGxlYmFyc1wiKTtcbmZ1bmN0aW9uIF9fZGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiAob2JqLl9fZXNNb2R1bGUgPyBvYmpbXCJkZWZhdWx0XCJdIDogb2JqKTsgfVxubW9kdWxlLmV4cG9ydHMgPSAoSGFuZGxlYmFyc1tcImRlZmF1bHRcIl0gfHwgSGFuZGxlYmFycykudGVtcGxhdGUoe1wiMVwiOmZ1bmN0aW9uKGNvbnRhaW5lcixkZXB0aDAsaGVscGVycyxwYXJ0aWFscyxkYXRhKSB7XG4gICAgdmFyIHN0YWNrMSwgaGVscGVyLCBhbGlhczE9ZGVwdGgwICE9IG51bGwgPyBkZXB0aDAgOiAoY29udGFpbmVyLm51bGxDb250ZXh0IHx8IHt9KSwgYWxpYXMyPWhlbHBlcnMuaGVscGVyTWlzc2luZywgYWxpYXMzPVwiZnVuY3Rpb25cIiwgYWxpYXM0PWNvbnRhaW5lci5lc2NhcGVFeHByZXNzaW9uO1xuXG4gIHJldHVybiBcIiAgICAgICAgICAgICAgICA8dHI+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3M9XFxcImd1aSBydi1wYXJlbnRcXFwiIFxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbGlnbj1cXFwidG9wXFxcIiBcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhLWZpbHRlci10eXBlPVxcXCJcIlxuICAgICsgYWxpYXM0KCgoaGVscGVyID0gKGhlbHBlciA9IGhlbHBlcnMudHlwZSB8fCAoZGVwdGgwICE9IG51bGwgPyBkZXB0aDAudHlwZSA6IGRlcHRoMCkpICE9IG51bGwgPyBoZWxwZXIgOiBhbGlhczIpLCh0eXBlb2YgaGVscGVyID09PSBhbGlhczMgPyBoZWxwZXIuY2FsbChhbGlhczEse1wibmFtZVwiOlwidHlwZVwiLFwiaGFzaFwiOnt9LFwiZGF0YVwiOmRhdGF9KSA6IGhlbHBlcikpKVxuICAgICsgXCJcXFwiIFxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtZmlsdGVyLWtleT1cXFwiXCJcbiAgICArIGFsaWFzNCgoKGhlbHBlciA9IChoZWxwZXIgPSBoZWxwZXJzLmlkIHx8IChkZXB0aDAgIT0gbnVsbCA/IGRlcHRoMC5pZCA6IGRlcHRoMCkpICE9IG51bGwgPyBoZWxwZXIgOiBhbGlhczIpLCh0eXBlb2YgaGVscGVyID09PSBhbGlhczMgPyBoZWxwZXIuY2FsbChhbGlhczEse1wibmFtZVwiOlwiaWRcIixcImhhc2hcIjp7fSxcImRhdGFcIjpkYXRhfSkgOiBoZWxwZXIpKSlcbiAgICArIFwiXFxcIiBcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhLWZpbHRlci12YWx1ZT1cXFwiXCJcbiAgICArIGFsaWFzNCgoKGhlbHBlciA9IChoZWxwZXIgPSBoZWxwZXJzLmFjdHVhbFZhbHVlIHx8IChkZXB0aDAgIT0gbnVsbCA/IGRlcHRoMC5hY3R1YWxWYWx1ZSA6IGRlcHRoMCkpICE9IG51bGwgPyBoZWxwZXIgOiBhbGlhczIpLCh0eXBlb2YgaGVscGVyID09PSBhbGlhczMgPyBoZWxwZXIuY2FsbChhbGlhczEse1wibmFtZVwiOlwiYWN0dWFsVmFsdWVcIixcImhhc2hcIjp7fSxcImRhdGFcIjpkYXRhfSkgOiBoZWxwZXIpKSlcbiAgICArIFwiXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5cIlxuICAgICsgYWxpYXM0KCgoaGVscGVyID0gKGhlbHBlciA9IGhlbHBlcnMuY29sdW1uTmFtZSB8fCAoZGVwdGgwICE9IG51bGwgPyBkZXB0aDAuY29sdW1uTmFtZSA6IGRlcHRoMCkpICE9IG51bGwgPyBoZWxwZXIgOiBhbGlhczIpLCh0eXBlb2YgaGVscGVyID09PSBhbGlhczMgPyBoZWxwZXIuY2FsbChhbGlhczEse1wibmFtZVwiOlwiY29sdW1uTmFtZVwiLFwiaGFzaFwiOnt9LFwiZGF0YVwiOmRhdGF9KSA6IGhlbHBlcikpKVxuICAgICsgXCI8L3NwYW4+XFxyXFxuXCJcbiAgICArICgoc3RhY2sxID0gaGVscGVyc1tcImlmXCJdLmNhbGwoYWxpYXMxLChkZXB0aDAgIT0gbnVsbCA/IGRlcHRoMC5maWx0ZXJhYmxlIDogZGVwdGgwKSx7XCJuYW1lXCI6XCJpZlwiLFwiaGFzaFwiOnt9LFwiZm5cIjpjb250YWluZXIucHJvZ3JhbSgyLCBkYXRhLCAwKSxcImludmVyc2VcIjpjb250YWluZXIubm9vcCxcImRhdGFcIjpkYXRhfSkpICE9IG51bGwgPyBzdGFjazEgOiBcIlwiKVxuICAgICsgXCIgICAgICAgICAgICAgICAgICAgIDwvdGQ+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8dGQ+XCJcbiAgICArICgoc3RhY2sxID0gKChoZWxwZXIgPSAoaGVscGVyID0gaGVscGVycy5jb2x1bW5WYWx1ZSB8fCAoZGVwdGgwICE9IG51bGwgPyBkZXB0aDAuY29sdW1uVmFsdWUgOiBkZXB0aDApKSAhPSBudWxsID8gaGVscGVyIDogYWxpYXMyKSwodHlwZW9mIGhlbHBlciA9PT0gYWxpYXMzID8gaGVscGVyLmNhbGwoYWxpYXMxLHtcIm5hbWVcIjpcImNvbHVtblZhbHVlXCIsXCJoYXNoXCI6e30sXCJkYXRhXCI6ZGF0YX0pIDogaGVscGVyKSkpICE9IG51bGwgPyBzdGFjazEgOiBcIlwiKVxuICAgICsgXCI8L3RkPlxcclxcbiAgICAgICAgICAgICAgICA8L3RyPlxcclxcblwiO1xufSxcIjJcIjpmdW5jdGlvbihjb250YWluZXIsZGVwdGgwLGhlbHBlcnMscGFydGlhbHMsZGF0YSkge1xuICAgIHJldHVybiBcIiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVxcXCJndWkgbS1sLTUgcnYtY2hpbGQgZ3VpLWNhcHRpb25cXFwiID5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3M9XFxcImd1aSBndWktaWNvbiBndWktaWNvbi1hZGQgaG92ZXIgbS1sLTUgY3Vyc29yLXBvaW50ZXIgYWRkRmlsdGVyXFxcIj48L2k+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVxcXCJndWkgZ3VpLWljb24gZ3VpLWljb24tbWludXMgaG92ZXIgbS1sLTUgY3Vyc29yLXBvaW50ZXIgcmVtb3ZlRmlsdGVyXFxcIj48L2k+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxcclxcblwiO1xufSxcImNvbXBpbGVyXCI6WzcsXCI+PSA0LjAuMFwiXSxcIm1haW5cIjpmdW5jdGlvbihjb250YWluZXIsZGVwdGgwLGhlbHBlcnMscGFydGlhbHMsZGF0YSkge1xuICAgIHZhciBzdGFjazEsIGhlbHBlciwgYWxpYXMxPWRlcHRoMCAhPSBudWxsID8gZGVwdGgwIDogKGNvbnRhaW5lci5udWxsQ29udGV4dCB8fCB7fSksIGFsaWFzMj1oZWxwZXJzLmhlbHBlck1pc3NpbmcsIGFsaWFzMz1cImZ1bmN0aW9uXCIsIGFsaWFzND1jb250YWluZXIuZXNjYXBlRXhwcmVzc2lvbjtcblxuICByZXR1cm4gXCI8dHIgaWQ9XFxcImRldGFpbHMtcm93LVwiXG4gICAgKyBhbGlhczQoKChoZWxwZXIgPSAoaGVscGVyID0gaGVscGVycy5pbmRleCB8fCAoZGF0YSAmJiBkYXRhLmluZGV4KSkgIT0gbnVsbCA/IGhlbHBlciA6IGFsaWFzMiksKHR5cGVvZiBoZWxwZXIgPT09IGFsaWFzMyA/IGhlbHBlci5jYWxsKGFsaWFzMSx7XCJuYW1lXCI6XCJpbmRleFwiLFwiaGFzaFwiOnt9LFwiZGF0YVwiOmRhdGF9KSA6IGhlbHBlcikpKVxuICAgICsgXCJcXFwiIGNsYXNzPVxcXCJndWkgZ3VpLWhpZGRlbiBkZXRhaWxzUm93XFxcIiBhcmlhLWxpdmU9XFxcInBvbGl0ZVxcXCI+XFxyXFxuICAgIDx0ZCBjb2xzcGFuPVxcXCJcIlxuICAgICsgYWxpYXM0KCgoaGVscGVyID0gKGhlbHBlciA9IGhlbHBlcnMubGVuZ3RoIHx8IChkZXB0aDAgIT0gbnVsbCA/IGRlcHRoMC5sZW5ndGggOiBkZXB0aDApKSAhPSBudWxsID8gaGVscGVyIDogYWxpYXMyKSwodHlwZW9mIGhlbHBlciA9PT0gYWxpYXMzID8gaGVscGVyLmNhbGwoYWxpYXMxLHtcIm5hbWVcIjpcImxlbmd0aFwiLFwiaGFzaFwiOnt9LFwiZGF0YVwiOmRhdGF9KSA6IGhlbHBlcikpKVxuICAgICsgXCJcXFwiPlxcclxcbiAgICAgICAgPHRhYmxlIGNsYXNzPVxcXCJndWkgdmVyeSBjb21wYWN0IHNlbGVjdGFibGUgY2VsbGVkIHRhYmxlIGRldGFpbHNUYWJsZSBtLWwtMzcgcC01XFxcIiBcXHJcXG4gICAgICAgICAgICAgICBzdHlsZT1cXFwid2lkdGg6IGF1dG87XFxcIiA+XFxyXFxuICAgICAgICAgICAgPHRib2R5PlxcclxcblwiXG4gICAgKyAoKHN0YWNrMSA9IGhlbHBlcnMuZWFjaC5jYWxsKGFsaWFzMSwoZGVwdGgwICE9IG51bGwgPyBkZXB0aDAubWFpblJvd0NvbEFycmF5IDogZGVwdGgwKSx7XCJuYW1lXCI6XCJlYWNoXCIsXCJoYXNoXCI6e30sXCJmblwiOmNvbnRhaW5lci5wcm9ncmFtKDEsIGRhdGEsIDApLFwiaW52ZXJzZVwiOmNvbnRhaW5lci5ub29wLFwiZGF0YVwiOmRhdGF9KSkgIT0gbnVsbCA/IHN0YWNrMSA6IFwiXCIpXG4gICAgKyBcIiAgICAgICAgICAgIDwvdGJvZHk+XFxyXFxuICAgICAgICA8L3RhYmxlPlxcclxcbiAgICA8L3RkPlxcclxcbjwvdHI+XCI7XG59LFwidXNlRGF0YVwiOnRydWV9KTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9oYnMvZ3JpZC1kZXRhaWxzLXJvdy5oYnNcbi8vIG1vZHVsZSBpZCA9IDdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEiLCJ2YXIgSGFuZGxlYmFycyA9IHJlcXVpcmUoXCJoYW5kbGViYXJzXCIpO1xuZnVuY3Rpb24gX19kZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIChvYmouX19lc01vZHVsZSA/IG9ialtcImRlZmF1bHRcIl0gOiBvYmopOyB9XG5tb2R1bGUuZXhwb3J0cyA9IChIYW5kbGViYXJzW1wiZGVmYXVsdFwiXSB8fCBIYW5kbGViYXJzKS50ZW1wbGF0ZSh7XCIxXCI6ZnVuY3Rpb24oY29udGFpbmVyLGRlcHRoMCxoZWxwZXJzLHBhcnRpYWxzLGRhdGEsYmxvY2tQYXJhbXMsZGVwdGhzKSB7XG4gICAgdmFyIHN0YWNrMSwgYWxpYXMxPWNvbnRhaW5lci5lc2NhcGVFeHByZXNzaW9uO1xuXG4gIHJldHVybiBcIiAgICAgICAgICAgIDxvcHRpb24gXCJcbiAgICArIGFsaWFzMShfX2RlZmF1bHQocmVxdWlyZShcIkM6XFxcXFRlY2huaWNhbFxcXFxSZXBvXFxcXEdyaWRvb1xcXFxzcmNcXFxcaGJzXFxcXGhlbHBlcnNcXFxcU2VsZWN0ZWQudHNcIikpLmNhbGwoZGVwdGgwICE9IG51bGwgPyBkZXB0aDAgOiAoY29udGFpbmVyLm51bGxDb250ZXh0IHx8IHt9KSwoKHN0YWNrMSA9IChkZXB0aHNbMV0gIT0gbnVsbCA/IGRlcHRoc1sxXS5wYWdpbmF0aW9uRGF0YSA6IGRlcHRoc1sxXSkpICE9IG51bGwgPyBzdGFjazEucGFnZVNpemUgOiBzdGFjazEpLGRlcHRoMCx7XCJuYW1lXCI6XCJTZWxlY3RlZFwiLFwiaGFzaFwiOnt9LFwiZGF0YVwiOmRhdGF9KSlcbiAgICArIFwiPlwiXG4gICAgKyBhbGlhczEoY29udGFpbmVyLmxhbWJkYShkZXB0aDAsIGRlcHRoMCkpXG4gICAgKyBcIjwvb3B0aW9uPlxcclxcblwiO1xufSxcImNvbXBpbGVyXCI6WzcsXCI+PSA0LjAuMFwiXSxcIm1haW5cIjpmdW5jdGlvbihjb250YWluZXIsZGVwdGgwLGhlbHBlcnMscGFydGlhbHMsZGF0YSxibG9ja1BhcmFtcyxkZXB0aHMpIHtcbiAgICB2YXIgc3RhY2sxLCBhbGlhczE9Y29udGFpbmVyLmxhbWJkYSwgYWxpYXMyPWNvbnRhaW5lci5lc2NhcGVFeHByZXNzaW9uLCBhbGlhczM9ZGVwdGgwICE9IG51bGwgPyBkZXB0aDAgOiAoY29udGFpbmVyLm51bGxDb250ZXh0IHx8IHt9KTtcblxuICByZXR1cm4gXCI8ZGl2IHJvbGU9XFxcIm5hdmlnYXRpb25cXFwiIGNsYXNzPVxcXCJndWkgZmxleCBqYy1zYiBndWktc3ViaGVhZGluZy0xIHRleHQtbGVmdCBtLTBcXFwiPlxcclxcbiAgICA8ZGl2IGNsYXNzPVxcXCJndWkgbS1yLTEwXFxcIj5cXHJcXG4gICAgICAgIDxidXR0b24gY2xhc3M9XFxcImd1aSBmaXJzdExpbmtcXFwiIFxcclxcbiAgICAgICAgICAgICAgICBhcmlhLWRpc2FibGVkPVxcXCJcIlxuICAgICsgYWxpYXMyKGFsaWFzMSgoKHN0YWNrMSA9IChkZXB0aDAgIT0gbnVsbCA/IGRlcHRoMC5wYWdpbmF0aW9uRGF0YSA6IGRlcHRoMCkpICE9IG51bGwgPyBzdGFjazEuZmlyc3RQYWdlTGlua0Rpc2FibGVkIDogc3RhY2sxKSwgZGVwdGgwKSlcbiAgICArIFwiXFxcIiBcXHJcXG4gICAgICAgICAgICAgICAgXCJcbiAgICArIGFsaWFzMihfX2RlZmF1bHQocmVxdWlyZShcIkM6XFxcXFRlY2huaWNhbFxcXFxSZXBvXFxcXEdyaWRvb1xcXFxzcmNcXFxcaGJzXFxcXGhlbHBlcnNcXFxcRGlzYWJsZWQudHNcIikpLmNhbGwoYWxpYXMzLCgoc3RhY2sxID0gKGRlcHRoMCAhPSBudWxsID8gZGVwdGgwLnBhZ2luYXRpb25EYXRhIDogZGVwdGgwKSkgIT0gbnVsbCA/IHN0YWNrMS5maXJzdFBhZ2VMaW5rRGlzYWJsZWQgOiBzdGFjazEpLHtcIm5hbWVcIjpcIkRpc2FibGVkXCIsXCJoYXNoXCI6e30sXCJkYXRhXCI6ZGF0YX0pKVxuICAgICsgXCJcXHJcXG4gICAgICAgICAgICAgICAgYXJpYS1sYWJlbD1cXFwiR28gdG8gdGhlIGZpcnN0IHBhZ2VcXFwiIFxcclxcbiAgICAgICAgICAgICAgICB0aXRsZT1cXFwiR28gdG8gdGhlIGZpcnN0IHBhZ2VcXFwiIFxcclxcbiAgICAgICAgICAgICAgICBkYXRhLXBhZ2U9XFxcIjFcXFwiPlxcclxcbiAgICAgICAgICAgIDxpIGNsYXNzPVxcXCJndWktaWNvbiBndWktaWNvbi1wcmV2aW91c1xcXCI+PC9pPlxcclxcbiAgICAgICAgPC9idXR0b24+XFxyXFxuICAgICAgICA8YnV0dG9uIGNsYXNzPVxcXCJndWkgcHJldkxpbmtcXFwiIFxcclxcbiAgICAgICAgICAgICAgICBhcmlhLWRpc2FibGVkPVxcXCJcIlxuICAgICsgYWxpYXMyKGFsaWFzMSgoKHN0YWNrMSA9IChkZXB0aDAgIT0gbnVsbCA/IGRlcHRoMC5wYWdpbmF0aW9uRGF0YSA6IGRlcHRoMCkpICE9IG51bGwgPyBzdGFjazEucHJldlBhZ2VMaW5rRGlzYWJsZWQgOiBzdGFjazEpLCBkZXB0aDApKVxuICAgICsgXCJcXFwiIFxcclxcbiAgICAgICAgICAgICAgICBcIlxuICAgICsgYWxpYXMyKF9fZGVmYXVsdChyZXF1aXJlKFwiQzpcXFxcVGVjaG5pY2FsXFxcXFJlcG9cXFxcR3JpZG9vXFxcXHNyY1xcXFxoYnNcXFxcaGVscGVyc1xcXFxEaXNhYmxlZC50c1wiKSkuY2FsbChhbGlhczMsKChzdGFjazEgPSAoZGVwdGgwICE9IG51bGwgPyBkZXB0aDAucGFnaW5hdGlvbkRhdGEgOiBkZXB0aDApKSAhPSBudWxsID8gc3RhY2sxLnByZXZQYWdlTGlua0Rpc2FibGVkIDogc3RhY2sxKSx7XCJuYW1lXCI6XCJEaXNhYmxlZFwiLFwiaGFzaFwiOnt9LFwiZGF0YVwiOmRhdGF9KSlcbiAgICArIFwiXFxyXFxuICAgICAgICAgICAgICAgIGFyaWEtbGFiZWw9XFxcIkdvIHRvIHRoZSBwcmV2aW91cyBwYWdlXFxcIiBcXHJcXG4gICAgICAgICAgICAgICAgdGl0bGU9XFxcIkdvIHRvIHRoZSBwcmV2aW91cyBwYWdlXFxcIiBcXHJcXG4gICAgICAgICAgICAgICAgZGF0YS1wYWdlPVxcXCJcIlxuICAgICsgYWxpYXMyKF9fZGVmYXVsdChyZXF1aXJlKFwiQzpcXFxcVGVjaG5pY2FsXFxcXFJlcG9cXFxcR3JpZG9vXFxcXHNyY1xcXFxoYnNcXFxcaGVscGVyc1xcXFxtYXRoLnRzXCIpKS5jYWxsKGFsaWFzMywoKHN0YWNrMSA9IChkZXB0aDAgIT0gbnVsbCA/IGRlcHRoMC5wYWdpbmF0aW9uRGF0YSA6IGRlcHRoMCkpICE9IG51bGwgPyBzdGFjazEucGFnZUluZGV4IDogc3RhY2sxKSxcIi1cIiwxLHtcIm5hbWVcIjpcIm1hdGhcIixcImhhc2hcIjp7fSxcImRhdGFcIjpkYXRhfSkpXG4gICAgKyBcIlxcXCI+XFxyXFxuICAgICAgICAgICAgPGkgY2xhc3M9XFxcImd1aS1pY29uIGd1aS1pY29uLWNoZXZyb24tbGVmdFxcXCI+PC9pPlxcclxcbiAgICAgICAgICAgIFByZXZcXHJcXG4gICAgICAgIDwvYnV0dG9uPlxcclxcbiAgICA8L2Rpdj5cXHJcXG4gICAgPGRpdiBjbGFzcz1cXFwiZ3VpIHBhZ2VyLWlucHV0LWNvbnRhaW5lciBtZWRpdW0gaC0zMCBpbnB1dCBmbGV4IGpjLXNiIG0tci0xMFxcXCI+XFxyXFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJndWkgbS1yLTVcXFwiPiBQYWdlIDwvZGl2PlxcclxcbiAgICAgICAgPGlucHV0ICBjbGFzcz1cXFwiZ3VpIHBhZ2VyLWlucHV0IGgtMzAgdy01MCBtLXItNVxcXCIgXFxyXFxuICAgICAgICAgICAgICAgIGFyaWEtbGFiZWw9XFxcIkdvIHRvIFBhZ2UgXCJcbiAgICArIGFsaWFzMihhbGlhczEoKChzdGFjazEgPSAoZGVwdGgwICE9IG51bGwgPyBkZXB0aDAucGFnaW5hdGlvbkRhdGEgOiBkZXB0aDApKSAhPSBudWxsID8gc3RhY2sxLnBhZ2VJbmRleCA6IHN0YWNrMSksIGRlcHRoMCkpXG4gICAgKyBcIlxcXCIgXFxyXFxuICAgICAgICAgICAgICAgIHRpdGxlPVxcXCJHbyB0byBQYWdlIFwiXG4gICAgKyBhbGlhczIoYWxpYXMxKCgoc3RhY2sxID0gKGRlcHRoMCAhPSBudWxsID8gZGVwdGgwLnBhZ2luYXRpb25EYXRhIDogZGVwdGgwKSkgIT0gbnVsbCA/IHN0YWNrMS5wYWdlSW5kZXggOiBzdGFjazEpLCBkZXB0aDApKVxuICAgICsgXCJcXFwiIFxcclxcbiAgICAgICAgICAgICAgICB2YWx1ZT1cXFwiXCJcbiAgICArIGFsaWFzMihhbGlhczEoKChzdGFjazEgPSAoZGVwdGgwICE9IG51bGwgPyBkZXB0aDAucGFnaW5hdGlvbkRhdGEgOiBkZXB0aDApKSAhPSBudWxsID8gc3RhY2sxLnBhZ2VJbmRleCA6IHN0YWNrMSksIGRlcHRoMCkpXG4gICAgKyBcIlxcXCIgXFxyXFxuICAgICAgICAgICAgICAgIHR5cGU9XFxcInRleHRcXFwiIFxcclxcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cXFwiUGFnZSBOdW1iZXIgLi4uXFxcIj5cXHJcXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcIm5vLW9mLXBhZ2VzLXNjYW5cXFwiIFxcclxcbiAgICAgICAgICAgICBkYXRhLW51bWJlci1vZi1wYWdlcz1cXFwiXCJcbiAgICArIGFsaWFzMihhbGlhczEoKChzdGFjazEgPSAoZGVwdGgwICE9IG51bGwgPyBkZXB0aDAucGFnaW5hdGlvbkRhdGEgOiBkZXB0aDApKSAhPSBudWxsID8gc3RhY2sxLm5vT2ZQYWdlcyA6IHN0YWNrMSksIGRlcHRoMCkpXG4gICAgKyBcIlxcXCI+XFxyXFxuICAgICAgICAgICAgIG9mIFwiXG4gICAgKyBhbGlhczIoYWxpYXMxKCgoc3RhY2sxID0gKGRlcHRoMCAhPSBudWxsID8gZGVwdGgwLnBhZ2luYXRpb25EYXRhIDogZGVwdGgwKSkgIT0gbnVsbCA/IHN0YWNrMS5ub09mUGFnZXMgOiBzdGFjazEpLCBkZXB0aDApKVxuICAgICsgXCJcXHJcXG4gICAgICAgIDwvZGl2PlxcclxcbiAgICA8L2Rpdj5cXHJcXG4gICAgPGRpdiBjbGFzcz1cXFwiZ3VpIG0tci0xMFxcXCI+XFxyXFxuICAgICAgICA8YnV0dG9uIGNsYXNzPVxcXCJndWkgbmV4dExpbmtcXFwiIFxcclxcbiAgICAgICAgICAgICAgICBhcmlhLWRpc2FibGVkPVxcXCJcIlxuICAgICsgYWxpYXMyKGFsaWFzMSgoKHN0YWNrMSA9IChkZXB0aDAgIT0gbnVsbCA/IGRlcHRoMC5wYWdpbmF0aW9uRGF0YSA6IGRlcHRoMCkpICE9IG51bGwgPyBzdGFjazEubmV4dFBhZ2VMaW5rRGlzYWJsZWQgOiBzdGFjazEpLCBkZXB0aDApKVxuICAgICsgXCJcXFwiIFxcclxcbiAgICAgICAgICAgICAgICBcIlxuICAgICsgYWxpYXMyKF9fZGVmYXVsdChyZXF1aXJlKFwiQzpcXFxcVGVjaG5pY2FsXFxcXFJlcG9cXFxcR3JpZG9vXFxcXHNyY1xcXFxoYnNcXFxcaGVscGVyc1xcXFxEaXNhYmxlZC50c1wiKSkuY2FsbChhbGlhczMsKChzdGFjazEgPSAoZGVwdGgwICE9IG51bGwgPyBkZXB0aDAucGFnaW5hdGlvbkRhdGEgOiBkZXB0aDApKSAhPSBudWxsID8gc3RhY2sxLm5leHRQYWdlTGlua0Rpc2FibGVkIDogc3RhY2sxKSx7XCJuYW1lXCI6XCJEaXNhYmxlZFwiLFwiaGFzaFwiOnt9LFwiZGF0YVwiOmRhdGF9KSlcbiAgICArIFwiXFxyXFxuICAgICAgICAgICAgICAgIGFyaWEtbGFiZWw9XFxcIkdvIHRvIHRoZSBuZXh0IHBhZ2VcXFwiIFxcclxcbiAgICAgICAgICAgICAgICB0aXRsZT1cXFwiR28gdG8gdGhlIG5leHQgcGFnZVxcXCIgXFxyXFxuICAgICAgICAgICAgICAgIGRhdGEtcGFnZT1cXFwiXCJcbiAgICArIGFsaWFzMihfX2RlZmF1bHQocmVxdWlyZShcIkM6XFxcXFRlY2huaWNhbFxcXFxSZXBvXFxcXEdyaWRvb1xcXFxzcmNcXFxcaGJzXFxcXGhlbHBlcnNcXFxcbWF0aC50c1wiKSkuY2FsbChhbGlhczMsKChzdGFjazEgPSAoZGVwdGgwICE9IG51bGwgPyBkZXB0aDAucGFnaW5hdGlvbkRhdGEgOiBkZXB0aDApKSAhPSBudWxsID8gc3RhY2sxLnBhZ2VJbmRleCA6IHN0YWNrMSksXCIrXCIsMSx7XCJuYW1lXCI6XCJtYXRoXCIsXCJoYXNoXCI6e30sXCJkYXRhXCI6ZGF0YX0pKVxuICAgICsgXCJcXFwiID5cXHJcXG4gICAgICAgICAgICBOZXh0XFxyXFxuICAgICAgICAgICAgPGkgY2xhc3M9XFxcImd1aS1pY29uIGd1aS1pY29uLWNoZXZyb24tcmlnaHRcXFwiPjwvaT5cXHJcXG4gICAgICAgIDwvYnV0dG9uPlxcclxcbiAgICAgICAgPGJ1dHRvbiBjbGFzcz1cXFwiZ3VpIGxhc3RMaW5rXFxcIiBcXHJcXG4gICAgICAgICAgICAgICAgYXJpYS1kaXNhYmxlZD1cXFwiXCJcbiAgICArIGFsaWFzMihhbGlhczEoKChzdGFjazEgPSAoZGVwdGgwICE9IG51bGwgPyBkZXB0aDAucGFnaW5hdGlvbkRhdGEgOiBkZXB0aDApKSAhPSBudWxsID8gc3RhY2sxLmxhc3RQYWdlTGlua0Rpc2FibGVkIDogc3RhY2sxKSwgZGVwdGgwKSlcbiAgICArIFwiXFxcIiBcXHJcXG4gICAgICAgICAgICAgICAgXCJcbiAgICArIGFsaWFzMihfX2RlZmF1bHQocmVxdWlyZShcIkM6XFxcXFRlY2huaWNhbFxcXFxSZXBvXFxcXEdyaWRvb1xcXFxzcmNcXFxcaGJzXFxcXGhlbHBlcnNcXFxcRGlzYWJsZWQudHNcIikpLmNhbGwoYWxpYXMzLCgoc3RhY2sxID0gKGRlcHRoMCAhPSBudWxsID8gZGVwdGgwLnBhZ2luYXRpb25EYXRhIDogZGVwdGgwKSkgIT0gbnVsbCA/IHN0YWNrMS5sYXN0UGFnZUxpbmtEaXNhYmxlZCA6IHN0YWNrMSkse1wibmFtZVwiOlwiRGlzYWJsZWRcIixcImhhc2hcIjp7fSxcImRhdGFcIjpkYXRhfSkpXG4gICAgKyBcIlxcclxcbiAgICAgICAgICAgICAgICBhcmlhLWxhYmVsPVxcXCJHbyB0byB0aGUgbGFzdCBwYWdlXFxcIiBcXHJcXG4gICAgICAgICAgICAgICAgdGl0bGU9XFxcIkdvIHRvIHRoZSBsYXN0IHBhZ2VcXFwiIFxcclxcbiAgICAgICAgICAgICAgICBkYXRhLXBhZ2U9XFxcIlwiXG4gICAgKyBhbGlhczIoYWxpYXMxKCgoc3RhY2sxID0gKGRlcHRoMCAhPSBudWxsID8gZGVwdGgwLnBhZ2luYXRpb25EYXRhIDogZGVwdGgwKSkgIT0gbnVsbCA/IHN0YWNrMS5ub09GcGFnZXMgOiBzdGFjazEpLCBkZXB0aDApKVxuICAgICsgXCJcXFwiPlxcclxcbiAgICAgICAgICAgIDxpIGNsYXNzPVxcXCJndWktaWNvbiBndWktaWNvbi1uZXh0XFxcIj48L2k+XFxyXFxuICAgICAgICA8L2J1dHRvbj5cXHJcXG4gICAgPC9kaXY+XFxyXFxuPC9kaXY+XFxyXFxuPGRpdiBjbGFzcz1cXFwiZ3VpIGd1aS1zdWJoZWFkaW5nLTEgZmxleCBqYy1zYiB0ZXh0LXJpZ2h0IG0tMFxcXCI+XFxyXFxuICAgIDxsYWJlbCAgZm9yPVxcXCJwYWdlLXNpemUtc2VsZWN0b3JcXFwiIFxcclxcbiAgICAgICAgICAgIGNsYXNzPVxcXCJndWkgbS1yLTEwXFxcIj5cXHJcXG4gICAgICAgICAgICBSb3dzIFBlciBQYWdlXFxyXFxuICAgIDwvbGFiZWw+XFxyXFxuICAgIDxzZWxlY3QgaWQ9XFxcInBhZ2Utc2l6ZS1zZWxlY3RvclxcXCIgXFxyXFxuICAgICAgICAgICAgY2xhc3M9XFxcImd1aSBwYWdlU2l6ZVNlbGVjdG9yIG0tci0xMCBoLTMwXFxcIj5cXHJcXG5cIlxuICAgICsgKChzdGFjazEgPSBoZWxwZXJzLmVhY2guY2FsbChhbGlhczMsKChzdGFjazEgPSAoZGVwdGgwICE9IG51bGwgPyBkZXB0aDAucGFnaW5hdGlvbkRhdGEgOiBkZXB0aDApKSAhPSBudWxsID8gc3RhY2sxLnBhZ2VTaXplcyA6IHN0YWNrMSkse1wibmFtZVwiOlwiZWFjaFwiLFwiaGFzaFwiOnt9LFwiZm5cIjpjb250YWluZXIucHJvZ3JhbSgxLCBkYXRhLCAwLCBibG9ja1BhcmFtcywgZGVwdGhzKSxcImludmVyc2VcIjpjb250YWluZXIubm9vcCxcImRhdGFcIjpkYXRhfSkpICE9IG51bGwgPyBzdGFjazEgOiBcIlwiKVxuICAgICsgXCIgICAgPC9zZWxlY3Q+XFxyXFxuICAgIDxkaXYgY2xhc3M9XFxcImd1aSBtLXItMTBcXFwiPlxcclxcbiAgICAgICAgXCJcbiAgICArIGFsaWFzMihhbGlhczEoKChzdGFjazEgPSAoKHN0YWNrMSA9IChkZXB0aDAgIT0gbnVsbCA/IGRlcHRoMC5wYWdpbmF0aW9uRGF0YSA6IGRlcHRoMCkpICE9IG51bGwgPyBzdGFjazEucmFuZ2UgOiBzdGFjazEpKSAhPSBudWxsID8gc3RhY2sxLm1pbiA6IHN0YWNrMSksIGRlcHRoMCkpXG4gICAgKyBcIiAtIFwiXG4gICAgKyBhbGlhczIoYWxpYXMxKCgoc3RhY2sxID0gKChzdGFjazEgPSAoZGVwdGgwICE9IG51bGwgPyBkZXB0aDAucGFnaW5hdGlvbkRhdGEgOiBkZXB0aDApKSAhPSBudWxsID8gc3RhY2sxLnJhbmdlIDogc3RhY2sxKSkgIT0gbnVsbCA/IHN0YWNrMS5tYXggOiBzdGFjazEpLCBkZXB0aDApKVxuICAgICsgXCIgb2YgXCJcbiAgICArIGFsaWFzMihhbGlhczEoKChzdGFjazEgPSAoZGVwdGgwICE9IG51bGwgPyBkZXB0aDAucGFnaW5hdGlvbkRhdGEgOiBkZXB0aDApKSAhPSBudWxsID8gc3RhY2sxLnRvdGFsQ291bnQgOiBzdGFjazEpLCBkZXB0aDApKVxuICAgICsgXCIgaXRlbXNcXHJcXG4gICAgPC9kaXY+XFxyXFxuPC9kaXY+XCI7XG59LFwidXNlRGF0YVwiOnRydWUsXCJ1c2VEZXB0aHNcIjp0cnVlfSk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvaGJzL2dyaWQtZm9vdGVyLmhic1xuLy8gbW9kdWxlIGlkID0gOFxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSIsImNvbnN0IG1hdGggPSAobHZhbHVlOiBudW1iZXIsIG9wZXJhdG9yOiBzdHJpbmcsIHJ2YWx1ZTogbnVtYmVyLCBvcHRpb25zKTogbnVtYmVyID0+IHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgXCIrXCI6IGx2YWx1ZSArIHJ2YWx1ZSxcclxuICAgICAgICBcIi1cIjogbHZhbHVlIC0gcnZhbHVlLFxyXG4gICAgICAgIFwiKlwiOiBsdmFsdWUgKiBydmFsdWUsXHJcbiAgICAgICAgXCIvXCI6IGx2YWx1ZSAvIHJ2YWx1ZSxcclxuICAgICAgICBcIiVcIjogbHZhbHVlICUgcnZhbHVlLFxyXG4gICAgfVtvcGVyYXRvcl07XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBtYXRoO1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvdHNsaW50LWxvYWRlcj8/cmVmLS0xIS4vc3JjL2hicy9oZWxwZXJzL21hdGgudHMiLCJ2YXIgSGFuZGxlYmFycyA9IHJlcXVpcmUoXCJoYW5kbGViYXJzXCIpO1xuZnVuY3Rpb24gX19kZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIChvYmouX19lc01vZHVsZSA/IG9ialtcImRlZmF1bHRcIl0gOiBvYmopOyB9XG5tb2R1bGUuZXhwb3J0cyA9IChIYW5kbGViYXJzW1wiZGVmYXVsdFwiXSB8fCBIYW5kbGViYXJzKS50ZW1wbGF0ZSh7XCIxXCI6ZnVuY3Rpb24oY29udGFpbmVyLGRlcHRoMCxoZWxwZXJzLHBhcnRpYWxzLGRhdGEpIHtcbiAgICB2YXIgc3RhY2sxLCBhbGlhczE9ZGVwdGgwICE9IG51bGwgPyBkZXB0aDAgOiAoY29udGFpbmVyLm51bGxDb250ZXh0IHx8IHt9KSwgYWxpYXMyPWNvbnRhaW5lci5lc2NhcGVFeHByZXNzaW9uLCBhbGlhczM9Y29udGFpbmVyLmxhbWJkYTtcblxuICByZXR1cm4gXCI8dHIgYXJpYS1yb3dpbmRleD1cXFwiXCJcbiAgICArIGFsaWFzMihfX2RlZmF1bHQocmVxdWlyZShcIkM6XFxcXFRlY2huaWNhbFxcXFxSZXBvXFxcXEdyaWRvb1xcXFxzcmNcXFxcaGJzXFxcXGhlbHBlcnNcXFxcQWRkLnRzXCIpKS5jYWxsKGFsaWFzMSwoZGVwdGgwICE9IG51bGwgPyBkZXB0aDAucm93SW5kZXggOiBkZXB0aDApLDEse1wibmFtZVwiOlwiQWRkXCIsXCJoYXNoXCI6e30sXCJkYXRhXCI6ZGF0YX0pKVxuICAgICsgXCJcXFwiIGNsYXNzPVxcXCJtYWluUm93IFwiXG4gICAgKyBhbGlhczIoX19kZWZhdWx0KHJlcXVpcmUoXCJDOlxcXFxUZWNobmljYWxcXFxcUmVwb1xcXFxHcmlkb29cXFxcc3JjXFxcXGhic1xcXFxoZWxwZXJzXFxcXEJvb2xBdHRyaWJ1dGUudHNcIikpLmNhbGwoYWxpYXMxLChkZXB0aDAgIT0gbnVsbCA/IGRlcHRoMC5pc0FsbFNlbGVjdGVkIDogZGVwdGgwKSxcImFjdGl2ZVwiLHtcIm5hbWVcIjpcIkJvb2xBdHRyaWJ1dGVcIixcImhhc2hcIjp7fSxcImRhdGFcIjpkYXRhfSkpXG4gICAgKyBcIlxcXCIgZGF0YS1way1hdHRyPVxcXCJcIlxuICAgICsgYWxpYXMyKGFsaWFzMygoZGVwdGgwICE9IG51bGwgPyBkZXB0aDAua2V5Q29sdW1uIDogZGVwdGgwKSwgZGVwdGgwKSlcbiAgICArIFwiXFxcIiByb2xlPVxcXCJyb3dcXFwiID5cXHJcXG4gICAgPHRkIGNsYXNzPVxcXCJleHBhbnNpb25BcnJvd3NcXFwiIFxcclxcbiAgICAgICAgY2xhc3M9XFxcImd1aSBmbGV4IGpjLXNiXFxcIlxcclxcbiAgICAgICAgYXJpYS1jb2xpbmRleD1cXFwiMVxcXCJcXHJcXG4gICAgICAgIHJvbGU9XFxcImdyaWRjZWxsXFxcIj5cXHJcXG4gICAgICAgIDxpIGFyaWEtbGFiZWw9XFxcIlByZXNzIGVudGVyIHRvIGV4cGFuZCB0aGUgZGV0YWlscyBSb3dcXFwiIFxcclxcbiAgICAgICAgICAgdGl0bGU9XFxcIkV4cGFuZCB0aGUgZGV0YWlscyBSb3dcXFwiIFxcclxcbiAgICAgICAgICAgYXJpYS1jb250cm9scz1cXFwiZGV0YWlscy1yb3ctXCJcbiAgICArIGFsaWFzMihhbGlhczMoKGRhdGEgJiYgZGF0YS5pbmRleCksIGRlcHRoMCkpXG4gICAgKyBcIlxcXCIgXFxyXFxuICAgICAgICAgICBjbGFzcz1cXFwiZ3VpIGd1aS1pY29uIGd1aS1pY29uLWNoZXZyb24tZG93biBleHBhbmREZXRhaWxzUm93SWNvbiBjdXJzb3ItcG9pbnRlclxcXCIgXFxyXFxuICAgICAgICAgICB0YWJpbmRleD1cXFwiMFxcXCIgXFxyXFxuICAgICAgICAgICBhcmlhLWhpZGRlbj1cXFwiZmFsc2VcXFwiPjwvaT5cXHJcXG4gICAgICAgIDxpIGFyaWEtbGFiZWw9XFxcIlByZXNzIGVudGVyIHRvIGNvbGxhcHNlIHRoZSBkZXRhaWxzIFJvd1xcXCIgXFxyXFxuICAgICAgICAgICB0aXRsZT1cXFwiQ29sbGFwc2UgdGhlIGRldGFpbHMgUm93XFxcIiBcXHJcXG4gICAgICAgICAgIGFyaWEtY29udHJvbHM9XFxcImRldGFpbHMtcm93LVwiXG4gICAgKyBhbGlhczIoYWxpYXMzKChkYXRhICYmIGRhdGEuaW5kZXgpLCBkZXB0aDApKVxuICAgICsgXCJcXFwiIFxcclxcbiAgICAgICAgICAgY2xhc3M9XFxcImd1aSBndWktaWNvbiBndWktaWNvbi1jaGV2cm9uLXVwIENvbGxhcHNlRGV0YWlsc1Jvd0ljb24gY3Vyc29yLXBvaW50ZXIgZ3VpLWhpZGRlblxcXCIgXFxyXFxuICAgICAgICAgICB0YWJpbmRleD1cXFwiMFxcXCIgXFxyXFxuICAgICAgICAgICBhcmlhLWhpZGRlbj1cXFwidHJ1ZVxcXCI+PC9pPlxcclxcbiAgICA8L3RkPlxcclxcbiAgICA8dGQgcm9sZT1cXFwiZ3JpZGNlbGxcXFwiXFxyXFxuICAgICAgICBhcmlhLWNvbGluZGV4PVxcXCIyXFxcIiA+XFxyXFxuICAgICAgICA8aW5wdXQgYXJpYS1sYWJlbD1cXFwiQ2hlY2tib3ggdG8gc2VsZWN0IHRoZSByb3cgd2l0aCBJZCBcIlxuICAgICsgYWxpYXMyKGFsaWFzMygoZGVwdGgwICE9IG51bGwgPyBkZXB0aDAua2V5Q29sdW1uIDogZGVwdGgwKSwgZGVwdGgwKSlcbiAgICArIFwiXFxcIiBcXHJcXG4gICAgICAgICAgICB0eXBlPVxcXCJjaGVja2JveFxcXCJcXHJcXG4gICAgICAgICAgICBcIlxuICAgICsgYWxpYXMyKF9fZGVmYXVsdChyZXF1aXJlKFwiQzpcXFxcVGVjaG5pY2FsXFxcXFJlcG9cXFxcR3JpZG9vXFxcXHNyY1xcXFxoYnNcXFxcaGVscGVyc1xcXFxCb29sQXR0cmlidXRlLnRzXCIpKS5jYWxsKGFsaWFzMSwoZGVwdGgwICE9IG51bGwgPyBkZXB0aDAuaXNBbGxTZWxlY3RlZCA6IGRlcHRoMCksXCJjaGVja2VkXCIse1wibmFtZVwiOlwiQm9vbEF0dHJpYnV0ZVwiLFwiaGFzaFwiOnt9LFwiZGF0YVwiOmRhdGF9KSlcbiAgICArIFwiXFxyXFxuICAgICAgICAgICAgdmFsdWU9XFxcIlwiXG4gICAgKyBhbGlhczIoYWxpYXMzKChkZXB0aDAgIT0gbnVsbCA/IGRlcHRoMC5rZXlDb2x1bW4gOiBkZXB0aDApLCBkZXB0aDApKVxuICAgICsgXCJcXFwiIFxcclxcbiAgICAgICAgICAgIGNsYXNzPVxcXCJzZWxlY3Qta2V5LWNoZWNrYm94IGN1cnNvci1wb2ludGVyXFxcIj5cXHJcXG4gICAgPC90ZD5cXHJcXG5cIlxuICAgICsgKChzdGFjazEgPSBoZWxwZXJzLmVhY2guY2FsbChhbGlhczEsKGRlcHRoMCAhPSBudWxsID8gZGVwdGgwLm1haW5Sb3dDb2xBcnJheSA6IGRlcHRoMCkse1wibmFtZVwiOlwiZWFjaFwiLFwiaGFzaFwiOnt9LFwiZm5cIjpjb250YWluZXIucHJvZ3JhbSgyLCBkYXRhLCAwKSxcImludmVyc2VcIjpjb250YWluZXIubm9vcCxcImRhdGFcIjpkYXRhfSkpICE9IG51bGwgPyBzdGFjazEgOiBcIlwiKVxuICAgICsgXCI8L3RyPlxcclxcblwiXG4gICAgKyAoKHN0YWNrMSA9IGNvbnRhaW5lci5pbnZva2VQYXJ0aWFsKHJlcXVpcmUoXCJDOlxcXFxUZWNobmljYWxcXFxcUmVwb1xcXFxHcmlkb29cXFxcc3JjXFxcXGhic1xcXFxncmlkLWRldGFpbHMtcm93Lmhic1wiKSxkZXB0aDAse1wibmFtZVwiOlwiZ3JpZC1kZXRhaWxzLXJvd1wiLFwiZGF0YVwiOmRhdGEsXCJoZWxwZXJzXCI6aGVscGVycyxcInBhcnRpYWxzXCI6cGFydGlhbHMsXCJkZWNvcmF0b3JzXCI6Y29udGFpbmVyLmRlY29yYXRvcnN9KSkgIT0gbnVsbCA/IHN0YWNrMSA6IFwiXCIpO1xufSxcIjJcIjpmdW5jdGlvbihjb250YWluZXIsZGVwdGgwLGhlbHBlcnMscGFydGlhbHMsZGF0YSkge1xuICAgIHZhciBzdGFjazEsIGFsaWFzMT1jb250YWluZXIubGFtYmRhLCBhbGlhczI9Y29udGFpbmVyLmVzY2FwZUV4cHJlc3Npb247XG5cbiAgcmV0dXJuIFwiICAgICAgICA8dGQgdGl0bGU9XFxcIlwiXG4gICAgKyBhbGlhczIoYWxpYXMxKChkZXB0aDAgIT0gbnVsbCA/IGRlcHRoMC5hY3R1YWxWYWx1ZSA6IGRlcHRoMCksIGRlcHRoMCkpXG4gICAgKyBcIlxcXCJcXHJcXG4gICAgICAgICAgICBhcmlhLWNvbGluZGV4PVxcXCJcIlxuICAgICsgYWxpYXMyKF9fZGVmYXVsdChyZXF1aXJlKFwiQzpcXFxcVGVjaG5pY2FsXFxcXFJlcG9cXFxcR3JpZG9vXFxcXHNyY1xcXFxoYnNcXFxcaGVscGVyc1xcXFxBZGQudHNcIikpLmNhbGwoZGVwdGgwICE9IG51bGwgPyBkZXB0aDAgOiAoY29udGFpbmVyLm51bGxDb250ZXh0IHx8IHt9KSwoZGF0YSAmJiBkYXRhLmluZGV4KSwzLHtcIm5hbWVcIjpcIkFkZFwiLFwiaGFzaFwiOnt9LFwiZGF0YVwiOmRhdGF9KSlcbiAgICArIFwiXFxcIlxcclxcbiAgICAgICAgICAgIGNsYXNzPVxcXCJib2R5LVwiXG4gICAgKyBhbGlhczIoYWxpYXMxKChkZXB0aDAgIT0gbnVsbCA/IGRlcHRoMC5pZCA6IGRlcHRoMCksIGRlcHRoMCkpXG4gICAgKyBcIlxcXCI+XCJcbiAgICArICgoc3RhY2sxID0gYWxpYXMxKChkZXB0aDAgIT0gbnVsbCA/IGRlcHRoMC5jb2x1bW5WYWx1ZSA6IGRlcHRoMCksIGRlcHRoMCkpICE9IG51bGwgPyBzdGFjazEgOiBcIlwiKVxuICAgICsgXCI8L3RkPlxcclxcblwiO1xufSxcImNvbXBpbGVyXCI6WzcsXCI+PSA0LjAuMFwiXSxcIm1haW5cIjpmdW5jdGlvbihjb250YWluZXIsZGVwdGgwLGhlbHBlcnMscGFydGlhbHMsZGF0YSkge1xuICAgIHZhciBzdGFjazE7XG5cbiAgcmV0dXJuICgoc3RhY2sxID0gaGVscGVycy5lYWNoLmNhbGwoZGVwdGgwICE9IG51bGwgPyBkZXB0aDAgOiAoY29udGFpbmVyLm51bGxDb250ZXh0IHx8IHt9KSwoZGVwdGgwICE9IG51bGwgPyBkZXB0aDAubWFpblJvd0FycmF5IDogZGVwdGgwKSx7XCJuYW1lXCI6XCJlYWNoXCIsXCJoYXNoXCI6e30sXCJmblwiOmNvbnRhaW5lci5wcm9ncmFtKDEsIGRhdGEsIDApLFwiaW52ZXJzZVwiOmNvbnRhaW5lci5ub29wLFwiZGF0YVwiOmRhdGF9KSkgIT0gbnVsbCA/IHN0YWNrMSA6IFwiXCIpO1xufSxcInVzZVBhcnRpYWxcIjp0cnVlLFwidXNlRGF0YVwiOnRydWV9KTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9oYnMvZ3JpZC1tYWluLXJvdy5oYnNcbi8vIG1vZHVsZSBpZCA9IDEwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIiwiY29uc3QgYm9vbEF0dHJpYnV0ZSA9IChib29sOiBib29sZWFuLCBzdHI6IHN0cmluZyk6IHN0cmluZyA9PiB7XHJcbiAgICByZXR1cm4gYm9vbCA/IHN0ciA6IFwiXCI7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBib29sQXR0cmlidXRlO1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvdHNsaW50LWxvYWRlcj8/cmVmLS0xIS4vc3JjL2hicy9oZWxwZXJzL0Jvb2xBdHRyaWJ1dGUudHMiLCJpbXBvcnQgKiBhcyBqUXVlcnkgZnJvbSBcImpxdWVyeVwiO1xyXG5pbXBvcnQgeyBDb25maWdTdG9yZSB9IGZyb20gXCIuLi9jb25maWcvQ29uZmlnU3RvcmVcIjtcclxuaW1wb3J0IHsgQ29sU2V0dGluZ3NIYW5kbGVyIH0gZnJvbSBcIi4uL2V2ZW50SGFuZGxlcnMvQ29sU2V0dGluZ3NIYW5kbGVyXCI7XHJcbmltcG9ydCB7IFNlbGVjdEV2ZW50SGFuZGxlciB9IGZyb20gXCIuLi9ldmVudEhhbmRsZXJzL1NlbGVjdEV2ZW50SGFuZGxlclwiO1xyXG5pbXBvcnQgeyBJR3JpZE9yZGVyIH0gZnJvbSBcIi4uL21vZGVscy9JR3JpZE9yZGVyXCI7XHJcbmltcG9ydCB7IElQYWdpbmF0aW9uSW5wdXQgfSBmcm9tIFwiLi4vbW9kZWxzL0lQYWdpbmF0aW9uSW5wdXRcIjtcclxuaW1wb3J0IHsgUGFnZXIgfSBmcm9tIFwiLi4vcGFnaW5hdGlvbi9QYWdlclwiO1xyXG5pbXBvcnQgeyBEZXRhaWxzUm93SGFuZGxlciB9IGZyb20gXCIuLy4uL2V2ZW50SGFuZGxlcnMvRGV0YWlsc1Jvd0hhbmRsZXJcIjtcclxuaW1wb3J0IHsgRmlsdGVyQ2xpY2tIYW5kbGVyIH0gZnJvbSBcIi4vLi4vZXZlbnRIYW5kbGVycy9GaWx0ZXJDbGlja0hhbmRsZXJcIjtcclxuaW1wb3J0IHsgSGFuZGxlck5hbWVzIH0gZnJvbSBcIi4vLi4vZXZlbnRIYW5kbGVycy9IYW5kbGVyTmFtZXNcIjtcclxuaW1wb3J0IHsgSGVhZGVyQ2xpY2tIYW5kbGVyIH0gZnJvbSBcIi4vLi4vZXZlbnRIYW5kbGVycy9IZWFkZXJDbGlja0hhbmRsZXJcIjtcclxuaW1wb3J0IHsgSUhhbmRsZXJDaGFpbiB9IGZyb20gXCIuLy4uL2V2ZW50SGFuZGxlcnMvSUhhbmRsZXJDaGFpblwiO1xyXG5pbXBvcnQgeyBQYWdlU2VhcmNoSGFuZGxlciB9IGZyb20gXCIuLy4uL2V2ZW50SGFuZGxlcnMvUGFnZVNlYXJjaENsaWNrSGFuZGxlclwiO1xyXG5pbXBvcnQgeyBTY3JvbGxIYW5kbGVyIH0gZnJvbSBcIi4vLi4vZXZlbnRIYW5kbGVycy9TY3JvbGxIYW5kbGVyXCI7XHJcbmltcG9ydCB7IElDb2x1bW4gfSBmcm9tIFwiLi8uLi9tb2RlbHMvSUNvbHVtblwiO1xyXG5pbXBvcnQgeyBHcmlkVGVtcGxhdGVTZXJ2aWNlIH0gZnJvbSBcIi4vLi4vc2VydmljZXMvR3JpZFRlbXBsYXRlU2VydmljZVwiO1xyXG5pbXBvcnQgeyBJR3JpZE9wdGlvbnMgfSBmcm9tIFwiLi9JR3JpZE9wdGlvbnNcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBHcmlkPFQ+IHtcclxuXHJcbiAgICBwcml2YXRlIGhhbmRsZUNoYWluOiBBcnJheTxJSGFuZGxlckNoYWluPFQ+PjtcclxuICAgIHByaXZhdGUgZ3JpZFRlbXBsYXRlU2VydmljZTogR3JpZFRlbXBsYXRlU2VydmljZTxUPjtcclxuICAgIHByaXZhdGUgY29uZmlnU3RvcmU6IENvbmZpZ1N0b3JlPFQ+O1xyXG4gICAgcHJpdmF0ZSBzY3JvbGxIYW5kbGVyOiBTY3JvbGxIYW5kbGVyPFQ+O1xyXG4gICAgcHJpdmF0ZSBtYW5hZ2VDb2xIYW5kbGVyOiBDb2xTZXR0aW5nc0hhbmRsZXI8VD47XHJcblxyXG4gICAgY29uc3RydWN0b3Iob3B0aW9uczogSUdyaWRPcHRpb25zPFQ+KSB7XHJcbiAgICAgICAgdGhpcy5jb25maWdTdG9yZSA9IG5ldyBDb25maWdTdG9yZTxUPihvcHRpb25zKTtcclxuICAgICAgICB0aGlzLmdyaWRUZW1wbGF0ZVNlcnZpY2UgPSBuZXcgR3JpZFRlbXBsYXRlU2VydmljZSh0aGlzLmNvbmZpZ1N0b3JlKTtcclxuICAgICAgICB0aGlzLkluaXRIYW5kbGVycygpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBiaW5kRGF0YSA9IChkYXRhOiBUW10sIHBhZ2luYXRpb25JbnB1dD86IElQYWdpbmF0aW9uSW5wdXQpOiB2b2lkID0+IHtcclxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgUGFnZXIuQ2FsY3VsYXRlUGFnaW5hdGlvbkRhdGEocGFnaW5hdGlvbklucHV0KTtcclxuICAgICAgICAgICAgdGhpcy5pbnRlcm5hbFJlbmRlcihkYXRhKTtcclxuICAgICAgICB9LCAxICk7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgcmVSZW5kZXIgPSAoKTogdm9pZCA9PiB7XHJcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuaW50ZXJuYWxSZW5kZXIodGhpcy5ncmlkVGVtcGxhdGVTZXJ2aWNlLkRhdGEpO1xyXG4gICAgICAgIH0sIDEgKTtcclxuICAgIH1cclxuICAgIHB1YmxpYyBzZXRDb2xDb25maWcgPSAoY29sQ29uZmlnOiBJQ29sdW1uW10pOiB2b2lkID0+IHtcclxuICAgICAgICB0aGlzLmNvbmZpZ1N0b3JlLk9wdGlvbnMuY29sdW1ucyA9IGNvbENvbmZpZztcclxuICAgIH1cclxuICAgIC8vIFRPRE86IFVwZGF0ZSBSb3cgSW5kZXhcclxuICAgIHB1YmxpYyB1cGRhdGVSb3dzID0gKHJvd3M6IFRbXSkgPT4ge1xyXG4gICAgICAgIGlmICggcm93cyA9PT0gdW5kZWZpbmVkIHx8ICFyb3dzLmxlbmd0aCApIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmdyaWRUZW1wbGF0ZVNlcnZpY2UudXBkYXRlUm93cyhyb3dzKTtcclxuICAgICAgICBjb25zdCBjb250YWluZXIgPSAkKHRoaXMuY29uZmlnU3RvcmUuT3B0aW9ucy5jb250YWluZXJFbGVtZW50KTtcclxuICAgICAgICBjb25zdCBrZXkgPSB0aGlzLmNvbmZpZ1N0b3JlLk9wdGlvbnMua2V5Q29sdW1uO1xyXG4gICAgICAgIGZvciAoY29uc3Qgcm93IG9mIHJvd3MpIHtcclxuICAgICAgICAgICAgY29uc3Qgcm93SHRtbCA9IHRoaXMuZ3JpZFRlbXBsYXRlU2VydmljZS5nZXRUZW1wbGF0ZUZvck9uZVJvdyhyb3cpO1xyXG4gICAgICAgICAgICBjb25zdCByb3dKcSA9ICQocm93SHRtbCk7XHJcbiAgICAgICAgICAgIGNvbnRhaW5lci5maW5kKFwiLm1haW5Sb3dcIikuZWFjaCgoaTogbnVtYmVyLCBtUjogRWxlbWVudCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgbXJKcSA9ICQobVIpO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgcGtJZCA9IG1ySnEuYXR0cihcImRhdGEtcGstYXR0clwiKTtcclxuICAgICAgICAgICAgICAgIGlmICggcGtJZCA9PT0gcm93W2tleV0pIHtcclxuICAgICAgICAgICAgICAgICAgICBtckpxLmh0bWwocm93SnFbMF0uaW5uZXJIVE1MKTtcclxuICAgICAgICAgICAgICAgICAgICBtckpxLm5leHQoKS5odG1sKHJvd0pxWzJdLmlubmVySFRNTCk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHNldE9yZGVyID0gKG9yZGVyQnlMaXN0OiBJR3JpZE9yZGVyW10pID0+IHtcclxuICAgICAgICBmb3IgKGNvbnN0IGNvbCBvZiB0aGlzLmNvbmZpZ1N0b3JlLk9wdGlvbnMuY29sdW1ucykge1xyXG4gICAgICAgICAgICBjb2wub3JkZXJCeSA9IHVuZGVmaW5lZDtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKG9yZGVyQnlMaXN0ID09PSB1bmRlZmluZWQgfHwgb3JkZXJCeUxpc3QgPT09IG51bGwgfHwgb3JkZXJCeUxpc3QubGVuZ3RoID09PSAwICkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZvciAoY29uc3Qgb3JkZXJDb2wgb2Ygb3JkZXJCeUxpc3QpIHtcclxuICAgICAgICAgICAgZm9yIChjb25zdCBjb2wgb2YgdGhpcy5jb25maWdTdG9yZS5PcHRpb25zLmNvbHVtbnMpIHtcclxuICAgICAgICAgICAgICAgIGlmIChvcmRlckNvbC5jb2xJZCA9PT0gY29sLmlkICkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbC5vcmRlckJ5ID0gb3JkZXJDb2wub3JkZXJCeTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZGVzdHJveSA9ICgpID0+IHtcclxuICAgICAgICBjb25zdCBwYXJlbnRFbGVtZW50ID0galF1ZXJ5KHRoaXMuY29uZmlnU3RvcmUuT3B0aW9ucy5jb250YWluZXJFbGVtZW50KTtcclxuICAgICAgICBpZiAoIHBhcmVudEVsZW1lbnQgIT09IHVuZGVmaW5lZCApIHtcclxuICAgICAgICAgICAgcGFyZW50RWxlbWVudC5vZmYoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgJCh3aW5kb3cpLm9mZihcInJlc2l6ZVwiLCB0aGlzLmRvY3VtZW50UmVzaXplSGFuZGxlcik7XHJcbiAgICAgICAgJChkb2N1bWVudCkub2ZmKFwiY2xpY2tcIiwgdGhpcy5kb2N1bWVudENsaWNrSGFuZGxlcik7XHJcbiAgICAgICAgJCh3aW5kb3cpLm9mZihcInJlc2l6ZVwiLCB0aGlzLmRvY3VtZW50UmVzaXplSGFuZGxlckZvckNzKTtcclxuICAgICAgICAkKGRvY3VtZW50KS5vZmYoXCJjbGlja1wiLCB0aGlzLmRvY3VtZW50Q2xpY2tIYW5kbGVyRm9yQ3MpO1xyXG4gICAgfVxyXG4gICAgcHJpdmF0ZSBpbnRlcm5hbFJlbmRlciA9IChkYXRhOiBUW10pOiB2b2lkID0+IHtcclxuICAgICAgICBjb25zdCBmaXJzdEluZGV4ID0gMDtcclxuICAgICAgICBsZXQgbGFzdEluZGV4ID0gdGhpcy5jb25maWdTdG9yZS5PcHRpb25zLmNodW5rU2l6ZSArIHRoaXMuZ2V0SW5pdGlhbFJvd0NvdW50KCk7XHJcbiAgICAgICAgbGFzdEluZGV4ID0gbGFzdEluZGV4ID49IGRhdGEubGVuZ3RoID8gZGF0YS5sZW5ndGggLSAxIDogbGFzdEluZGV4O1xyXG4gICAgICAgIGNvbnN0IGdyaWRDb250ZW50OiBzdHJpbmcgPSB0aGlzLmdyaWRUZW1wbGF0ZVNlcnZpY2UuR2V0Rmlyc3RUZW1wbGF0ZShkYXRhLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaXJzdEluZGV4LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYXN0SW5kZXgsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgdGhpcy5jb25maWdTdG9yZS5PcHRpb25zLmNvbnRhaW5lckVsZW1lbnQuaW5uZXJIVE1MID0gZ3JpZENvbnRlbnQ7XHJcbiAgICAgICAgaWYgKCB0aGlzLnNjcm9sbEhhbmRsZXIgIT09IHVuZGVmaW5lZCAmJiB0aGlzLnNjcm9sbEhhbmRsZXIgIT09IG51bGwgKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2Nyb2xsSGFuZGxlci5yZW1vdmVIYW5kbGVyKCk7XHJcbiAgICAgICAgICAgIHRoaXMuc2Nyb2xsSGFuZGxlci5zZXRDdXJyZW50SW5kZXgobGFzdEluZGV4ICsgMSApO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2Nyb2xsSGFuZGxlciA9IG5ldyBTY3JvbGxIYW5kbGVyPFQ+KHRoaXMuY29uZmlnU3RvcmUsIHRoaXMuZ3JpZFRlbXBsYXRlU2VydmljZSwgbGFzdEluZGV4ICsgMSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuc2Nyb2xsSGFuZGxlci5SZWdpc3RlckRvbUhhbmRsZXIoKTtcclxuICAgICAgICB0aGlzLnNldEZvY3VzVG9MYXN0RWxlbWVudCgpO1xyXG4gICAgfVxyXG4gICAgcHJpdmF0ZSBnZXRJbml0aWFsUm93Q291bnQgPSAoKTogbnVtYmVyID0+IHtcclxuICAgICAgICByZXR1cm4gTWF0aC5mbG9vcigoalF1ZXJ5KHdpbmRvdykuaW5uZXJIZWlnaHQoKSAqIDAuNjUgKSAvIDMyKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIEluaXRIYW5kbGVycyA9ICgpOiB2b2lkID0+IHtcclxuICAgICAgICBjb25zdCBwYXJlbnRFbGVtZW50ID0galF1ZXJ5KHRoaXMuY29uZmlnU3RvcmUuT3B0aW9ucy5jb250YWluZXJFbGVtZW50KTtcclxuICAgICAgICB0aGlzLmhhbmRsZUNoYWluID0gW107XHJcbiAgICAgICAgdGhpcy5oYW5kbGVDaGFpbi5wdXNoKHtcclxuICAgICAgICAgICAgaGFuZGxlcjogbmV3IERldGFpbHNSb3dIYW5kbGVyPFQ+KHRoaXMuY29uZmlnU3RvcmUsIHBhcmVudEVsZW1lbnQpLFxyXG4gICAgICAgICAgICBuYW1lOiBIYW5kbGVyTmFtZXMuRGV0YWlsc1JvdyxcclxuICAgICAgICB9KTtcclxuICAgICAgICB0aGlzLmhhbmRsZUNoYWluLnB1c2goe1xyXG4gICAgICAgICAgICBoYW5kbGVyOiAgbmV3IEZpbHRlckNsaWNrSGFuZGxlcjxUPih0aGlzLmNvbmZpZ1N0b3JlLCBwYXJlbnRFbGVtZW50KSxcclxuICAgICAgICAgICAgbmFtZTogSGFuZGxlck5hbWVzLkZpbHRlckFjdGlvbixcclxuICAgICAgICB9KTtcclxuICAgICAgICB0aGlzLmhhbmRsZUNoYWluLnB1c2goe1xyXG4gICAgICAgICAgICBoYW5kbGVyOiBuZXcgSGVhZGVyQ2xpY2tIYW5kbGVyPFQ+KHRoaXMuY29uZmlnU3RvcmUsIHBhcmVudEVsZW1lbnQpLFxyXG4gICAgICAgICAgICBuYW1lOiBIYW5kbGVyTmFtZXMuSGVhZGVyQ2xpY2ssXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy5oYW5kbGVDaGFpbi5wdXNoKHtcclxuICAgICAgICAgICAgaGFuZGxlcjogbmV3IFBhZ2VTZWFyY2hIYW5kbGVyPFQ+KHRoaXMuY29uZmlnU3RvcmUsIHBhcmVudEVsZW1lbnQpLFxyXG4gICAgICAgICAgICBuYW1lOiBIYW5kbGVyTmFtZXMuUGFnZVNlYXJjaCxcclxuICAgICAgICB9KTtcclxuICAgICAgICB0aGlzLmhhbmRsZUNoYWluLnB1c2goe1xyXG4gICAgICAgICAgICBoYW5kbGVyOiBuZXcgU2VsZWN0RXZlbnRIYW5kbGVyPFQ+KHRoaXMuY29uZmlnU3RvcmUsIHBhcmVudEVsZW1lbnQsIHRoaXMuZ3JpZFRlbXBsYXRlU2VydmljZSksXHJcbiAgICAgICAgICAgIG5hbWU6IEhhbmRsZXJOYW1lcy5Db2xTZXR0aW5ncyxcclxuICAgICAgICB9KTtcclxuICAgICAgICB0aGlzLmhhbmRsZUNoYWluLmZvckVhY2goKHZhbHVlOiBJSGFuZGxlckNoYWluPFQ+KTogdm9pZCA9PiB7XHJcbiAgICAgICAgICAgIHZhbHVlLmhhbmRsZXIuUmVnaXN0ZXJEb21IYW5kbGVyKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgalF1ZXJ5KHdpbmRvdykucmVzaXplKHRoaXMuZG9jdW1lbnRSZXNpemVIYW5kbGVyKTtcclxuICAgICAgICBqUXVlcnkoZG9jdW1lbnQpLmNsaWNrKHRoaXMuZG9jdW1lbnRDbGlja0hhbmRsZXIpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgZG9jdW1lbnRSZXNpemVIYW5kbGVyRm9yQ3MgPSAoZXZlbnQpID0+IHtcclxuICAgICAgICB0aGlzLm1hbmFnZUNvbEhhbmRsZXIub25SZXNpemUoKTtcclxuICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgIH1cclxuICAgIHByaXZhdGUgZG9jdW1lbnRDbGlja0hhbmRsZXJGb3JDcyA9IChldmVudCkgPT4ge1xyXG4gICAgICAgIHRoaXMubWFuYWdlQ29sSGFuZGxlci5vbkRvY3VtZW50Q2xpY2soZXZlbnQpO1xyXG4gICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgfVxyXG4gICAgcHJpdmF0ZSBkb2N1bWVudENsaWNrSGFuZGxlciA9IChldmVudCkgPT4ge1xyXG4gICAgICAgIHRoaXMuaGFuZGxlQ2hhaW4uZm9yRWFjaCgodmFsdWU6IElIYW5kbGVyQ2hhaW48VD4pOiB2b2lkID0+IHtcclxuICAgICAgICAgICAgdmFsdWUuaGFuZGxlci5vbkRvY3VtZW50Q2xpY2soZXZlbnQpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgfVxyXG4gICAgcHJpdmF0ZSBkb2N1bWVudFJlc2l6ZUhhbmRsZXIgPSAoZXZlbnQpID0+IHtcclxuICAgICAgICB0aGlzLmhhbmRsZUNoYWluLmZvckVhY2goKHZhbHVlOiBJSGFuZGxlckNoYWluPFQ+KTogdm9pZCA9PiB7XHJcbiAgICAgICAgICAgIHZhbHVlLmhhbmRsZXIub25Eb2N1bWVudENsaWNrKGV2ZW50KTtcclxuICAgICAgICB9KTtcclxuICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgIH1cclxuICAgIHByaXZhdGUgc2V0Rm9jdXNUb0xhc3RFbGVtZW50ID0gKCk6IHZvaWQgPT4ge1xyXG4gICAgICAgIGNvbnN0IGVsZW1lbnQgPSB0aGlzLmNvbmZpZ1N0b3JlLmdldEZvY3VzYWJsZUVsZW1lbnQoKTtcclxuICAgICAgICBpZiAoIGVsZW1lbnQgKSB7XHJcbiAgICAgICAgICAgIGlmICggZWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoXCJmaXJzdExpbmtcIikpIHtcclxuICAgICAgICAgICAgICAgICQoXCIudGFibGUtZm9vdGVyIC5maXJzdExpbmtcIikuZm9jdXMoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoIGVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKFwibmV4dExpbmtcIikpIHtcclxuICAgICAgICAgICAgICAgICQoXCIudGFibGUtZm9vdGVyIC5uZXh0TGlua1wiKS5mb2N1cygpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmICggZWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoXCJwcmV2TGlua1wiKSkge1xyXG4gICAgICAgICAgICAgICAgJChcIi50YWJsZS1mb290ZXIgLnByZXZMaW5rXCIpLmZvY3VzKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKCBlbGVtZW50LmNsYXNzTGlzdC5jb250YWlucyhcImxhc3RMaW5rXCIpKSB7XHJcbiAgICAgICAgICAgICAgICAkKFwiLnRhYmxlLWZvb3RlciAubGFzdExpbmtcIikuZm9jdXMoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoIGVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKFwicGFnZVNpemVTZWxlY3RvclwiKSkge1xyXG4gICAgICAgICAgICAgICAgJChcIi50YWJsZS1mb290ZXIgLnBhZ2VTaXplU2VsZWN0b3JcIikuZm9jdXMoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoIGVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKFwicGFnZXItaW5wdXRcIikpIHtcclxuICAgICAgICAgICAgICAgICQoXCIudGFibGUtZm9vdGVyIC5wYWdlci1pbnB1dFwiKS5mb2N1cygpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmICggZWxlbWVudC50YWdOYW1lLnRvTG93ZXJDYXNlKCkgPT09IFwidGhcIiB8fCBlbGVtZW50LnBhcmVudEVsZW1lbnQudGFnTmFtZS50b0xvd2VyQ2FzZSgpID09PSBcInRoXCIpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2Nyb2xsSGFuZGxlci5zY3JvbGxUYWJsZUJvZHkoKTtcclxuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGRhdGFIZWFkZXJJZCA9IGVsZW1lbnQuZ2V0QXR0cmlidXRlKFwiZGF0YS1oZWFkZXItaWRcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IG5ld0ZvY3VzYWJsZTtcclxuICAgICAgICAgICAgICAgICAgICAkKFwiLnRhYmxlLWhlYWRlciB0aFwiKS5lYWNoKChpbmRleDogbnVtYmVyLCBlbGVtOiBIVE1MRWxlbWVudCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBlYWNoSGVhZGVyID0gJChlbGVtKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgZWFjaEhlYWRlcklkID0gZWFjaEhlYWRlci5hdHRyKFwiZGF0YS1oZWFkZXItaWRcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICggZWFjaEhlYWRlcklkID09PSBkYXRhSGVhZGVySWQgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXdGb2N1c2FibGUgPSBlYWNoSGVhZGVyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCBuZXdGb2N1c2FibGUgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5ld0ZvY3VzYWJsZS5mb2N1cygpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuY29uZmlnU3RvcmUuc2V0Rm9jdXNhYmxlRWxlbWVudCh1bmRlZmluZWQpO1xyXG5cclxuICAgIH1cclxuXHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL3RzbGludC1sb2FkZXI/P3JlZi0tMSEuL3NyYy9qcy9tYWluL0dyaWQudHMiLCJpbXBvcnQgeyBJR3JpZE9wdGlvbnMgfSBmcm9tIFwiLi4vbWFpbi9JR3JpZE9wdGlvbnNcIjtcclxuaW1wb3J0IHsgRmlsdGVyQWN0aW9uVHlwZSB9IGZyb20gXCIuLi9tb2RlbHMvRmlsdGVyQWN0aW9uVHlwZVwiO1xyXG5pbXBvcnQgeyBHcmlkT3JkZXJEaXJlY3Rpb24gfSBmcm9tIFwiLi4vbW9kZWxzL0dyaWRPcmRlckRpcmVjdGlvblwiO1xyXG5pbXBvcnQgeyBJQ29sdW1uIH0gZnJvbSBcIi4uL21vZGVscy9JQ29sdW1uXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgQ29uZmlnU3RvcmU8VD4ge1xyXG4gICAgcHVibGljIG9wdGlvbnM6IElHcmlkT3B0aW9uczxUPjtcclxuICAgIHByaXZhdGUgZm9jdXNhYmxlRWxlbWVudDogSFRNTEVsZW1lbnQ7XHJcbiAgICBwcml2YXRlIGRlZmF1bHRHcmlkT3B0aW9uczogSUdyaWRPcHRpb25zPFQ+ID0ge1xyXG4gICAgICAgIGFuaW1hdGlvblRpbWU6IDIwMCxcclxuICAgICAgICBjaHVua1NpemU6IDUsXHJcbiAgICAgICAgY29sdW1uczogW10sXHJcbiAgICAgICAgY29udGFpbmVyRWxlbWVudDogbnVsbCxcclxuICAgICAgICAvLyBtYW5hZ2VDb2xTZXR0aW5nc0NvbnRhaW5lcjogbnVsbCxcclxuICAgICAgICBoeWJyaWRGdW5jdGlvbjogKGNvbHVtbjogSUNvbHVtbiwgcm93OiBUKTogc3RyaW5nID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIFwidHJ1ZVwiO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAga2V5Q29sdW1uOiBcIlwiLFxyXG4gICAgICAgIC8vIG9uQ29sU2V0dGluZ3NDaGFuZ2U6IChjb2xDb25maWc6IElDb2x1bW5bXSk6IHZvaWQgPT4ge1xyXG4gICAgICAgIC8vICAgICAvLyBObyBDb2RlXHJcbiAgICAgICAgLy8gfSxcclxuICAgICAgICBvbkNsaWNrRmlsdGVyOiAoY29sdW1uOiBzdHJpbmcsIHZhbHVlOiBhbnksIGFjdGlvblR5cGU6IEZpbHRlckFjdGlvblR5cGUpOiB2b2lkID0+IHtcclxuICAgICAgICAgICAgLy8gTm8gY29kZVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgb25DbGlja0hlYWRlcjogKGNvbHVtbjogc3RyaW5nLCBkaXJlY3Rpb246IEdyaWRPcmRlckRpcmVjdGlvbik6IHZvaWQgPT4ge1xyXG4gICAgICAgICAgICAvLyBObyBjb2RlXHJcbiAgICAgICAgfSxcclxuICAgICAgICBvblBhZ2VTZWFyY2g6IChwYWdlU2l6ZTogbnVtYmVyLCBwYWdlSW5kZXg6IG51bWJlcik6IHZvaWQgPT4ge1xyXG4gICAgICAgICAgICAvLyBObyBjb2RlXHJcbiAgICAgICAgfSxcclxuICAgICAgICBvblNlbGVjdDogKHJvd3M6IFRbXSk6IHZvaWQgPT4ge1xyXG4gICAgICAgICAgICAvLyBObyBDb2RlXHJcbiAgICAgICAgfSxcclxuICAgICAgICBzaG93Q2FwdGlvbjogZmFsc2UsXHJcbiAgICAgICAgY2FwdGlvbjogXCJcIixcclxuICAgICAgICBzdW1tYXJ5OiBcIlwiLFxyXG4gICAgfTtcclxuICAgIGNvbnN0cnVjdG9yKG9wdGlvbnM6IElHcmlkT3B0aW9uczxUPikge1xyXG4gICAgICAgIHRoaXMuZXh0ZW5kT3B0aW9ucyhvcHRpb25zKTtcclxuICAgICAgICBpZiAob3B0aW9ucy5jb250YWluZXJFbGVtZW50ID09PSBudWxsKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIlBsZWFzZSBQcm92aWRlIGEgdmFsaWQgY29udGFpbmVyIEVsZW1lbnQgb2JqZWN0XCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLm9wdGlvbnMuY29sdW1ucy5zb3J0KChwcmV2LCBuZXh0KSA9PiBwcmV2Lm9yZGVyIC0gbmV4dC5vcmRlcik7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgc2V0IE9wdGlvbnMob3B0aW9uczogSUdyaWRPcHRpb25zPFQ+KSB7XHJcbiAgICAgICAgdGhpcy5vcHRpb25zID0gb3B0aW9ucztcclxuICAgIH1cclxuICAgIHB1YmxpYyBnZXQgT3B0aW9ucygpOiBJR3JpZE9wdGlvbnM8VD4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLm9wdGlvbnM7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgc2V0Rm9jdXNhYmxlRWxlbWVudCA9IChlbGVtZW50OiBIVE1MRWxlbWVudCk6IHZvaWQgPT4ge1xyXG4gICAgICAgIHRoaXMuZm9jdXNhYmxlRWxlbWVudCA9IGVsZW1lbnQ7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgZ2V0Rm9jdXNhYmxlRWxlbWVudCA9ICgpOiBIVE1MRWxlbWVudCA9PiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZm9jdXNhYmxlRWxlbWVudDtcclxuICAgIH1cclxuICAgIHB1YmxpYyBTZXRIaWRkZW5PbkNvbmZpZyA9IChib29sOiBib29sZWFuLCBjb2x1bW5JZD86IHN0cmluZyk6IHZvaWQgPT4ge1xyXG4gICAgICAgIGZvciAoY29uc3QgY29sIG9mIHRoaXMuT3B0aW9ucy5jb2x1bW5zKSB7XHJcbiAgICAgICAgICAgIGlmIChjb2x1bW5JZCA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICBjb2wuaGlkZGVuID0gYm9vbDtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGlmIChjb2wuaWQgPT09IGNvbHVtbklkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sLmhpZGRlbiA9IGJvb2w7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBwcml2YXRlIGV4dGVuZE9wdGlvbnMgPSAoaW5wdXRPcHRpb25zOiBJR3JpZE9wdGlvbnM8VD4pOiBJR3JpZE9wdGlvbnM8VD4gPT4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLm9wdGlvbnMgPSBqUXVlcnkuZXh0ZW5kKHt9LCB0aGlzLmRlZmF1bHRHcmlkT3B0aW9ucywgaW5wdXRPcHRpb25zKTtcclxuICAgIH1cclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvdHNsaW50LWxvYWRlcj8/cmVmLS0xIS4vc3JjL2pzL2NvbmZpZy9Db25maWdTdG9yZS50cyIsImltcG9ydCB7IENvbmZpZ1N0b3JlIH0gZnJvbSBcIi4uL2NvbmZpZy9Db25maWdTdG9yZVwiO1xyXG5pbXBvcnQgeyBHcmlkVGVtcGxhdGVTZXJ2aWNlIH0gZnJvbSBcIi4uL3NlcnZpY2VzL0dyaWRUZW1wbGF0ZVNlcnZpY2VcIjtcclxuaW1wb3J0IHsgSUV2ZW50SGFuZGxlciB9IGZyb20gXCIuL0lFdmVudEhhbmRsZXJcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBTZWxlY3RFdmVudEhhbmRsZXI8VD4gaW1wbGVtZW50cyBJRXZlbnRIYW5kbGVyPFQ+IHtcclxuICAgIHByaXZhdGUgcGFyZW50RWxlbWVudDogSlF1ZXJ5O1xyXG4gICAgcHJpdmF0ZSBjb25maWdTdG9yZTogQ29uZmlnU3RvcmU8VD47XHJcbiAgICBwcml2YXRlIGdyaWRUZW1wbGF0ZVNlcnZpY2U6IEdyaWRUZW1wbGF0ZVNlcnZpY2U8VD47XHJcblxyXG4gICAgY29uc3RydWN0b3IoY29uZmlnU3RvcmU6IENvbmZpZ1N0b3JlPFQ+LCBlbGVtZW50OiBKUXVlcnksIGdyaWRUZW1wbGF0ZVNlcnZpY2U6IEdyaWRUZW1wbGF0ZVNlcnZpY2U8VD4pIHtcclxuICAgICAgICB0aGlzLmNvbmZpZ1N0b3JlID0gY29uZmlnU3RvcmU7XHJcbiAgICAgICAgdGhpcy5wYXJlbnRFbGVtZW50ID0gZWxlbWVudDtcclxuICAgICAgICB0aGlzLmdyaWRUZW1wbGF0ZVNlcnZpY2UgPSBncmlkVGVtcGxhdGVTZXJ2aWNlO1xyXG4gICAgfVxyXG4gICAgcHVibGljIFJlZ2lzdGVyRG9tSGFuZGxlcigpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLnBhcmVudEVsZW1lbnQub24oXCJjaGFuZ2VcIiwgXCIuc2VsZWN0LWtleS1jaGVja2JveFwiICwgKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IGVsZW1lbnQgPSBqUXVlcnkoZXZlbnQudGFyZ2V0KTtcclxuICAgICAgICAgICAgY29uc3QgY2hlY2tlZCA9IGVsZW1lbnQuaXMoXCI6Y2hlY2tlZFwiKTtcclxuICAgICAgICAgICAgY29uc3QgdmFsdWUgPSBlbGVtZW50LnZhbCgpLnRvU3RyaW5nKCk7XHJcbiAgICAgICAgICAgIGlmIChjaGVja2VkKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmdyaWRUZW1wbGF0ZVNlcnZpY2Uuc2VsZWN0Um93cyh2YWx1ZSk7XHJcbiAgICAgICAgICAgICAgICBlbGVtZW50LnBhcmVudHMoXCIubWFpblJvd1wiKS5hZGRDbGFzcyhcImFjdGl2ZVwiKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZ3JpZFRlbXBsYXRlU2VydmljZS5kZVNlbGVjdFJvd3ModmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgZWxlbWVudC5wYXJlbnRzKFwiLm1haW5Sb3dcIikucmVtb3ZlQ2xhc3MoXCJhY3RpdmVcIik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKGV2ZW50Lm9yaWdpbmFsRXZlbnQgPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMuY29uZmlnU3RvcmUuT3B0aW9ucy5vblNlbGVjdCh0aGlzLmdyaWRUZW1wbGF0ZVNlcnZpY2UuU2VsZWN0ZWQsIGNoZWNrZWQpO1xyXG4gICAgICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICB0aGlzLnBhcmVudEVsZW1lbnQub24oXCJjaGFuZ2VcIiwgXCIuc2VsZWN0LWFsbC1jaGVja2JveFwiICwgKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IGVsZW1lbnQgPSBqUXVlcnkoZXZlbnQudGFyZ2V0KTtcclxuICAgICAgICAgICAgY29uc3QgY2hlY2tlZCA9IGVsZW1lbnQuaXMoXCI6Y2hlY2tlZFwiKTtcclxuICAgICAgICAgICAgdGhpcy5wYXJlbnRFbGVtZW50LmZpbmQoXCIuc2VsZWN0LWtleS1jaGVja2JveFwiKS5wcm9wKFwiY2hlY2tlZFwiLCBjaGVja2VkKTtcclxuICAgICAgICAgICAgaWYgKGNoZWNrZWQpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZ3JpZFRlbXBsYXRlU2VydmljZS5zZWxlY3RBbGwoKTtcclxuICAgICAgICAgICAgICAgIHRoaXMucGFyZW50RWxlbWVudC5maW5kKFwiLm1haW5UYWJsZSAubWFpblJvd1wiKS5hZGRDbGFzcyhcImFjdGl2ZVwiKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZ3JpZFRlbXBsYXRlU2VydmljZS5kZVNlbGVjdEFsbCgpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5wYXJlbnRFbGVtZW50LmZpbmQoXCIubWFpblRhYmxlIC5tYWluUm93XCIpLnJlbW92ZUNsYXNzKFwiYWN0aXZlXCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMuY29uZmlnU3RvcmUuT3B0aW9ucy5vblNlbGVjdCh0aGlzLmdyaWRUZW1wbGF0ZVNlcnZpY2UuU2VsZWN0ZWQsIGNoZWNrZWQpO1xyXG4gICAgICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIHB1YmxpYyBvblJlc2l6ZSgpOiB2b2lkIHtcclxuICAgICAgICAvLyBJZ25vcmVcclxuICAgIH1cclxuICAgIHB1YmxpYyBvbkRvY3VtZW50Q2xpY2soZXZlbnQ6IGFueSk6IHZvaWQge1xyXG4gICAgICAgIC8vIElnbm9yZVxyXG4gICAgfVxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy90c2xpbnQtbG9hZGVyPz9yZWYtLTEhLi9zcmMvanMvZXZlbnRIYW5kbGVycy9TZWxlY3RFdmVudEhhbmRsZXIudHMiLCJpbXBvcnQgeyBDb25maWdTdG9yZSB9IGZyb20gXCIuLi9jb25maWcvQ29uZmlnU3RvcmVcIjtcclxuaW1wb3J0IHsgSUV2ZW50SGFuZGxlciB9IGZyb20gXCIuL0lFdmVudEhhbmRsZXJcIjtcclxuZXhwb3J0IGNsYXNzIERldGFpbHNSb3dIYW5kbGVyPFQ+IGltcGxlbWVudHMgSUV2ZW50SGFuZGxlcjxUPiB7XHJcbiAgICBwcml2YXRlIHBhcmVudEVsZW1lbnQ6IEpRdWVyeTtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGNvbmZpZ1N0b3JlOiBDb25maWdTdG9yZTxUPiwgZWxlbWVudDogSlF1ZXJ5KSB7XHJcbiAgICAgICAgdGhpcy5wYXJlbnRFbGVtZW50ID0gZWxlbWVudDtcclxuICAgIH1cclxuICAgIHB1YmxpYyBvblJlc2l6ZSgpOiB2b2lkIHtcclxuICAgICAgICAvLyBOb3RoaW5nIHRvIERvLlxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBvbkRvY3VtZW50Q2xpY2soZXZlbnQpOiB2b2lkIHtcclxuICAgICAgICAvLyBOb3RoaW5nIHRvIERvLlxyXG4gICAgfVxyXG4gICAgcHVibGljIFJlZ2lzdGVyRG9tSGFuZGxlciA9ICgpOiB2b2lkID0+IHtcclxuICAgICAgICB0aGlzLnBhcmVudEVsZW1lbnQub24oXCJjbGlja1wiLCBcIi50YWJsZS1ib2R5IC5leHBhbnNpb25BcnJvd3MgaVwiLCB0aGlzLmV4cGFuZFJvdyk7XHJcbiAgICAgICAgdGhpcy5wYXJlbnRFbGVtZW50Lm9uKFwia2V5dXBcIiwgXCIudGFibGUtYm9keSAuZXhwYW5zaW9uQXJyb3dzIGlcIiwgdGhpcy5leHBhbmRSb3cpO1xyXG4gICAgfVxyXG4gICAgcHJpdmF0ZSBleHBhbmRSb3cgPSAoZXZlbnQpID0+IHtcclxuICAgICAgICBjb25zdCBjb2RlID0gZXZlbnQua2V5Q29kZSB8fCBldmVudC53aGljaDtcclxuICAgICAgICBpZiAoIGV2ZW50LnR5cGUgIT09IFwiY2xpY2tcIiAmJiAoZXZlbnQudHlwZSA9PT0gXCJrZXl1cFwiICYmIGNvZGUgIT09IDEzICYmIGNvZGUgIT09IDMyKSApIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBhcnJvdyA9IGpRdWVyeShldmVudC50YXJnZXQpO1xyXG4gICAgICAgIGNvbnN0IGRldGFpbHNSb3cgPSBhcnJvdy5jbG9zZXN0KFwidHJcIikubmV4dCgpO1xyXG4gICAgICAgIGNvbnN0IGN1cnJlbnRJY29uID0gYXJyb3cuaGlkZSgpLmF0dHIoXCJhcmlhLWhpZGRlblwiLCBcInRydWVcIik7XHJcbiAgICAgICAgY29uc3Qgb3RoZXJJY29uID0gYXJyb3cuc2libGluZ3MoXCJpXCIpLnNob3coKS5hdHRyKFwiYXJpYS1oaWRkZW5cIiwgXCJmYWxzZVwiKTtcclxuICAgICAgICBpZiAoYXJyb3cuaGFzQ2xhc3MoXCJleHBhbmREZXRhaWxzUm93SWNvblwiKSkge1xyXG4gICAgICAgICAgICBvdGhlckljb24uYXR0cihcImFyaWEtZXhwYW5kZWRcIiwgXCJ0cnVlXCIpO1xyXG4gICAgICAgICAgICBkZXRhaWxzUm93LnNsaWRlRG93bih0aGlzLmNvbmZpZ1N0b3JlLk9wdGlvbnMuYW5pbWF0aW9uVGltZSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgY3VycmVudEljb24uYXR0cihcImFyaWEtZXhwYW5kZWRcIiwgXCJ0cnVlXCIpO1xyXG4gICAgICAgICAgICBkZXRhaWxzUm93LnNsaWRlVXAodGhpcy5jb25maWdTdG9yZS5PcHRpb25zLmFuaW1hdGlvblRpbWUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBvdGhlckljb24uZm9jdXMoKTtcclxuICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgIH1cclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvdHNsaW50LWxvYWRlcj8/cmVmLS0xIS4vc3JjL2pzL2V2ZW50SGFuZGxlcnMvRGV0YWlsc1Jvd0hhbmRsZXIudHMiLCJpbXBvcnQgeyBDb25maWdTdG9yZSB9IGZyb20gXCIuLi9jb25maWcvQ29uZmlnU3RvcmVcIjtcclxuaW1wb3J0IHsgQ29tbW9uVXRpbCB9IGZyb20gXCIuLi91dGlsL0NvbHVtblV0aWxcIjtcclxuaW1wb3J0IHsgRmlsdGVyQWN0aW9uVHlwZSB9IGZyb20gXCIuLy4uL21vZGVscy9GaWx0ZXJBY3Rpb25UeXBlXCI7XHJcbmltcG9ydCB7IElFdmVudEhhbmRsZXIgfSBmcm9tIFwiLi9JRXZlbnRIYW5kbGVyXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgRmlsdGVyQ2xpY2tIYW5kbGVyPFQ+IGltcGxlbWVudHMgSUV2ZW50SGFuZGxlcjxUPiB7XHJcbiAgICBwcml2YXRlIGNvbmZpZ1N0b3JlOiBDb25maWdTdG9yZTxUPjtcclxuICAgIHByaXZhdGUgcGFyZW50RWxlbWVudDogSlF1ZXJ5O1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKGNvbmZpZ1N0b3JlOiBDb25maWdTdG9yZTxUPiwgZWxlbWVudDogSlF1ZXJ5KSB7XHJcbiAgICAgICAgdGhpcy5jb25maWdTdG9yZSA9IGNvbmZpZ1N0b3JlO1xyXG4gICAgICAgIHRoaXMucGFyZW50RWxlbWVudCA9IGVsZW1lbnQ7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgb25SZXNpemUoKTogdm9pZCB7XHJcbiAgICAgICAgLy8gTm90aGluZyB0byBEby5cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgb25Eb2N1bWVudENsaWNrKGV2ZW50KTogdm9pZCB7XHJcbiAgICAgICAgLy8gTm90aGluZyB0byBEby5cclxuICAgIH1cclxuICAgIHB1YmxpYyBSZWdpc3RlckRvbUhhbmRsZXIgPSAoKTogdm9pZCA9PiB7XHJcbiAgICAgICAgdGhpcy5wYXJlbnRFbGVtZW50Lm9uKFwiY2xpY2tcIiwgXCIudGFibGUtYm9keSAuZGV0YWlsc1JvdyAuZGV0YWlsc1RhYmxlIHRkIGlcIiwgKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IGVsZW1lbnQgPSBqUXVlcnkoZXZlbnQudGFyZ2V0KTtcclxuICAgICAgICAgICAgY29uc3QgcGFyZW50VGQgPSBlbGVtZW50LnBhcmVudHMoXCJ0ZFwiKTtcclxuICAgICAgICAgICAgY29uc3Qga2V5ID0gcGFyZW50VGQuYXR0cihcImRhdGEtZmlsdGVyLWtleVwiKTtcclxuICAgICAgICAgICAgY29uc3QgdmFsdWUgPSBwYXJlbnRUZC5hdHRyKFwiZGF0YS1maWx0ZXItdmFsdWVcIik7XHJcbiAgICAgICAgICAgIGNvbnN0IHR5cGUgPSBwYXJlbnRUZC5hdHRyKFwiZGF0YS1maWx0ZXItdHlwZVwiKTtcclxuICAgICAgICAgICAgY29uc3QgY29sID0gQ29tbW9uVXRpbC5HZXRDb2x1bW5PYmplY3Qoa2V5LCB0aGlzLmNvbmZpZ1N0b3JlLk9wdGlvbnMuY29sdW1ucyk7XHJcbiAgICAgICAgICAgIGlmIChjb2wgPT09IHVuZGVmaW5lZCB8fCBjb2wgPT09IG51bGwgfHwgIWNvbC5maWx0ZXJhYmxlICkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGxldCBmaWx0ZXJBY3Rpb246IEZpbHRlckFjdGlvblR5cGUgPSBGaWx0ZXJBY3Rpb25UeXBlLkFkZDtcclxuICAgICAgICAgICAgaWYgKGVsZW1lbnQuaGFzQ2xhc3MoXCJyZW1vdmVGaWx0ZXJcIikpIHtcclxuICAgICAgICAgICAgICAgIGZpbHRlckFjdGlvbiA9IEZpbHRlckFjdGlvblR5cGUuTWludXM7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5jb25maWdTdG9yZS5zZXRGb2N1c2FibGVFbGVtZW50KGV2ZW50LnRhcmdldCk7XHJcbiAgICAgICAgICAgIHRoaXMuY29uZmlnU3RvcmUuT3B0aW9ucy5vbkNsaWNrRmlsdGVyKGtleSwgdmFsdWUsIGZpbHRlckFjdGlvbiwgdHlwZSk7XHJcbiAgICAgICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy90c2xpbnQtbG9hZGVyPz9yZWYtLTEhLi9zcmMvanMvZXZlbnRIYW5kbGVycy9GaWx0ZXJDbGlja0hhbmRsZXIudHMiLCJleHBvcnQgZW51bSBGaWx0ZXJBY3Rpb25UeXBlIHtcclxuICAgIEFkZCA9IFwiQWRkXCIsXHJcbiAgICBNaW51cyA9IFwiTWludXNcIixcclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvdHNsaW50LWxvYWRlcj8/cmVmLS0xIS4vc3JjL2pzL21vZGVscy9GaWx0ZXJBY3Rpb25UeXBlLnRzIiwiZXhwb3J0IGVudW0gSGFuZGxlck5hbWVzIHtcclxuICAgIEZpbHRlckFjdGlvbixcclxuICAgIEhlYWRlckNsaWNrLFxyXG4gICAgU2Nyb2xsLFxyXG4gICAgUGFnZVNlYXJjaCxcclxuICAgIERldGFpbHNSb3csXHJcbiAgICBUb2dnbGVDb2x1bW4sXHJcbiAgICBDb2xTZXR0aW5ncyxcclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvdHNsaW50LWxvYWRlcj8/cmVmLS0xIS4vc3JjL2pzL2V2ZW50SGFuZGxlcnMvSGFuZGxlck5hbWVzLnRzIiwiaW1wb3J0IHsgQ29uZmlnU3RvcmUgfSBmcm9tIFwiLi4vY29uZmlnL0NvbmZpZ1N0b3JlXCI7XHJcbmltcG9ydCB7IENvbW1vblV0aWwgfSBmcm9tIFwiLi4vdXRpbC9Db2x1bW5VdGlsXCI7XHJcbmltcG9ydCB7IEdyaWRPcmRlckRpcmVjdGlvbiB9IGZyb20gXCIuLy4uL21vZGVscy9HcmlkT3JkZXJEaXJlY3Rpb25cIjtcclxuaW1wb3J0IHsgSUV2ZW50SGFuZGxlciB9IGZyb20gXCIuL0lFdmVudEhhbmRsZXJcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBIZWFkZXJDbGlja0hhbmRsZXI8VD4gaW1wbGVtZW50cyBJRXZlbnRIYW5kbGVyPFQ+IHtcclxuICAgIHByaXZhdGUgcGFyZW50RWxlbWVudDogSlF1ZXJ5O1xyXG4gICAgcHJpdmF0ZSBjb25maWdTdG9yZTogQ29uZmlnU3RvcmU8VD47XHJcbiAgICBwcml2YXRlIHdhc0hlYWRlckNsaWNrZWQ6IGJvb2xlYW47XHJcbiAgICBwcml2YXRlIGxhc3RGb2N1c2VkRWxlbWVudDogYW55O1xyXG4gICAgY29uc3RydWN0b3IoY29uZmlnU3RvcmU6IENvbmZpZ1N0b3JlPFQ+LCBlbGVtZW50OiBKUXVlcnkpIHtcclxuICAgICAgICB0aGlzLmNvbmZpZ1N0b3JlID0gY29uZmlnU3RvcmU7XHJcbiAgICAgICAgdGhpcy5wYXJlbnRFbGVtZW50ID0gZWxlbWVudDtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgb25SZXNpemUoKTogdm9pZCB7XHJcbiAgICAgICAgLy8gTm90aGluZyB0byBEby5cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgb25Eb2N1bWVudENsaWNrKGV2ZW50KTogdm9pZCB7XHJcbiAgICAgICAgLy8gTm90aGluZyB0byBEby5cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgUmVnaXN0ZXJEb21IYW5kbGVyID0gKCk6IHZvaWQgPT4ge1xyXG4gICAgICAgIC8vIFJlZ2lzdGVyaW5nIEpRdWVyeSBFdmVudCBIYW5kbGVyIGlmIEhlYWRlciBpcyBDbGlja2VkLlxyXG4gICAgICAgIHRoaXMucGFyZW50RWxlbWVudC5vbihcImNsaWNrXCIsIFwiLnRhYmxlLWhlYWRlciB0aFwiLCB0aGlzLmhhbmRsZUhlYWRlclNvcnQpO1xyXG4gICAgICAgIHRoaXMucGFyZW50RWxlbWVudC5vbihcImtleXVwXCIsIFwiLnRhYmxlLWhlYWRlciB0aFwiLCB0aGlzLmhhbmRsZUhlYWRlclNvcnQpO1xyXG4gICAgICAgIHRoaXMucGFyZW50RWxlbWVudC5vbihcIm1vdXNlZG93blwiICwgXCIudGFibGUtaGVhZGVyIHRoXCIsIHRoaXMuaGFuZGxlTW91c2VEb3duKTtcclxuICAgICAgICB0aGlzLnBhcmVudEVsZW1lbnQub24oXCJmb2N1c2luXCIsIFwiLnRhYmxlLWhlYWRlciB0aFwiLCB0aGlzLmhhbmRsZUhlYWRlckZvY3VzKTtcclxuICAgIH1cclxuICAgIHByaXZhdGUgaGFuZGxlTW91c2VEb3duID0gKCkgPT4ge1xyXG4gICAgICAgIHRoaXMud2FzSGVhZGVyQ2xpY2tlZCA9IHRydWU7XHJcbiAgICB9XHJcbiAgICBwcml2YXRlIGhhbmRsZUhlYWRlckZvY3VzID0gKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgLy8gSGFuZGxlIGZvY3VzXHJcbiAgICAgICAgaWYgKHRoaXMubGFzdEZvY3VzZWRFbGVtZW50ICE9PSBldmVudC50YXJnZXQpIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMud2FzSGVhZGVyQ2xpY2tlZCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMubGFzdEZvY3VzZWRFbGVtZW50ID0gZXZlbnQudGFyZ2V0O1xyXG4gICAgICAgICAgICB0aGlzLndhc0hlYWRlckNsaWNrZWQgPSBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gZXZlbnQuZGF0YS5jbGlja2VkID0gdW5kZWZpbmVkO1xyXG4gICAgICAgIGNvbnN0IGhlYWRlciA9IGpRdWVyeShldmVudC50YXJnZXQpO1xyXG4gICAgICAgIGNvbnN0IGxlZnRQb3N0aXRpb24gPSBoZWFkZXIucG9zaXRpb24oKS5sZWZ0O1xyXG4gICAgICAgIGNvbnN0IGhlYWRlcldpZHRoID0gaGVhZGVyLndpZHRoKCk7XHJcbiAgICAgICAgY29uc3QgdGFibGVCb2R5ID0gdGhpcy5wYXJlbnRFbGVtZW50LmZpbmQoXCIudGFibGUtYm9keVwiKTtcclxuICAgICAgICBjb25zdCBtYWluVGFibGVCb2R5ID0gdGhpcy5wYXJlbnRFbGVtZW50LmZpbmQoXCIubWFpblRhYmxlXCIpO1xyXG4gICAgICAgIGNvbnN0IHZpc2libGVUYm9keVdpZHRoID0gdGFibGVCb2R5LndpZHRoKCk7XHJcbiAgICAgICAgY29uc3QgbWF4U2Nyb2xsID0gbWFpblRhYmxlQm9keS53aWR0aCgpIC0gdmlzaWJsZVRib2R5V2lkdGg7XHJcbiAgICAgICAgY29uc3QgY3VycmVudFBvc2l0aW9uID0gbGVmdFBvc3RpdGlvbiArIGhlYWRlcldpZHRoICogMjtcclxuICAgICAgICBsZXQgc2Nyb2xsTGVmdEJ5O1xyXG4gICAgICAgIGlmICggY3VycmVudFBvc2l0aW9uID4gdmlzaWJsZVRib2R5V2lkdGgpIHtcclxuICAgICAgICAgICAgc2Nyb2xsTGVmdEJ5ID0gbGVmdFBvc3RpdGlvbiA+IG1heFNjcm9sbCA/IG1heFNjcm9sbCA6IGxlZnRQb3N0aXRpb247XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgc2Nyb2xsTGVmdEJ5ID0gMDtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGFibGVCb2R5LnNjcm9sbExlZnQoc2Nyb2xsTGVmdEJ5KTtcclxuICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgIH1cclxuICAgIHByaXZhdGUgaGFuZGxlSGVhZGVyU29ydCA9IChldmVudCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGNvZGUgPSBldmVudC5rZXlDb2RlIHx8IGV2ZW50LndoaWNoO1xyXG4gICAgICAgIGlmICggZXZlbnQudHlwZSAhPT0gXCJjbGlja1wiICYmIChldmVudC50eXBlID09PSBcImtleXVwXCIgJiYgY29kZSAhPT0gMTMgJiYgY29kZSAhPT0gMzIpICkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IGVsZW1lbnQgPSBqUXVlcnkoZXZlbnQudGFyZ2V0KS5jbG9zZXN0KFwidGhcIik7XHJcbiAgICAgICAgY29uc3QgaGVhZGVySWQgPSBlbGVtZW50LmF0dHIoXCJkYXRhLWhlYWRlci1pZFwiKTtcclxuICAgICAgICBjb25zdCBjb2wgPSBDb21tb25VdGlsLkdldENvbHVtbk9iamVjdChoZWFkZXJJZCwgdGhpcy5jb25maWdTdG9yZS5PcHRpb25zLmNvbHVtbnMpO1xyXG4gICAgICAgIGlmIChjb2wgPT09IHVuZGVmaW5lZCB8fCBjb2wgPT09IG51bGwgfHwgIWNvbC5zb3J0YWJsZSApIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBhcnJvd0ljb25zID0gZWxlbWVudC5maW5kKFwiaVwiKTtcclxuICAgICAgICBjb25zdCB1cEFycm93SWNvbiA9IGFycm93SWNvbnMuZmlyc3QoKTtcclxuICAgICAgICBjb25zdCBkb3duQXJyb3dJY29uID0gYXJyb3dJY29ucy5sYXN0KCk7XHJcbiAgICAgICAgbGV0IGRpcmVjdGlvbjogR3JpZE9yZGVyRGlyZWN0aW9uO1xyXG4gICAgICAgIGlmIChhcnJvd0ljb25zLmlzKFwiOnZpc2libGVcIikpIHtcclxuICAgICAgICAgICAgaWYgKHVwQXJyb3dJY29uLmlzKFwiOnZpc2libGVcIikpIHtcclxuICAgICAgICAgICAgICAgIGRpcmVjdGlvbiA9IEdyaWRPcmRlckRpcmVjdGlvbi5EZXNjO1xyXG4gICAgICAgICAgICAgICAgdXBBcnJvd0ljb24uaGlkZSgpO1xyXG4gICAgICAgICAgICAgICAgZG93bkFycm93SWNvbi5zaG93KCk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBkaXJlY3Rpb24gPSBHcmlkT3JkZXJEaXJlY3Rpb24uQXNjO1xyXG4gICAgICAgICAgICAgICAgZG93bkFycm93SWNvbi5oaWRlKCk7XHJcbiAgICAgICAgICAgICAgICB1cEFycm93SWNvbi5zaG93KCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBkaXJlY3Rpb24gPSBHcmlkT3JkZXJEaXJlY3Rpb24uQXNjO1xyXG4gICAgICAgICAgICB1cEFycm93SWNvbi5zaG93KCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsZW1lbnQuYXR0cihcImFyaWEtc29ydFwiLCBkaXJlY3Rpb24gPT09IEdyaWRPcmRlckRpcmVjdGlvbi5EZXNjID8gXCJkZXNjZW5kaW5nXCIgOiBcImFzY2VuZGluZ1wiKTtcclxuICAgICAgICBDb21tb25VdGlsLlNldE9yZGVyKGhlYWRlcklkLCBkaXJlY3Rpb24sIHRoaXMuY29uZmlnU3RvcmUuT3B0aW9ucy5jb2x1bW5zKTtcclxuICAgICAgICB0aGlzLmNvbmZpZ1N0b3JlLnNldEZvY3VzYWJsZUVsZW1lbnQoZXZlbnQudGFyZ2V0KTtcclxuICAgICAgICB0aGlzLmNvbmZpZ1N0b3JlLk9wdGlvbnMub25DbGlja0hlYWRlcihoZWFkZXJJZCwgZGlyZWN0aW9uLCBjb2wub3JkZXJCeUNvbCk7XHJcbiAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICB9XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL3RzbGludC1sb2FkZXI/P3JlZi0tMSEuL3NyYy9qcy9ldmVudEhhbmRsZXJzL0hlYWRlckNsaWNrSGFuZGxlci50cyIsImltcG9ydCAqIGFzIGpRdWVyeSBmcm9tIFwianF1ZXJ5XCI7XHJcbmltcG9ydCB7IENvbmZpZ1N0b3JlIH0gZnJvbSBcIi4uL2NvbmZpZy9Db25maWdTdG9yZVwiO1xyXG5pbXBvcnQgeyBQYWdlciB9IGZyb20gXCIuLi9wYWdpbmF0aW9uL1BhZ2VyXCI7XHJcbmltcG9ydCB7IElFdmVudEhhbmRsZXIgfSBmcm9tIFwiLi9JRXZlbnRIYW5kbGVyXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgUGFnZVNlYXJjaEhhbmRsZXI8VD4gaW1wbGVtZW50cyBJRXZlbnRIYW5kbGVyPFQ+IHtcclxuICAgIHByaXZhdGUgY29uZmlnU3RvcmU6IENvbmZpZ1N0b3JlPFQ+O1xyXG4gICAgcHJpdmF0ZSBwYXJlbnRFbGVtZW50OiBKUXVlcnk7XHJcblxyXG4gICAgY29uc3RydWN0b3IoY29uZmlnU3RvcmU6IENvbmZpZ1N0b3JlPFQ+LCBlbGVtZW50OiBKUXVlcnkpIHtcclxuICAgICAgICB0aGlzLmNvbmZpZ1N0b3JlID0gY29uZmlnU3RvcmU7XHJcbiAgICAgICAgdGhpcy5wYXJlbnRFbGVtZW50ID0gZWxlbWVudDtcclxuICAgIH1cclxuICAgIHB1YmxpYyBvblJlc2l6ZSgpOiB2b2lkIHtcclxuICAgICAgICAvLyB0aHJvdyBuZXcgRXJyb3IoXCJNZXRob2Qgbm90IGltcGxlbWVudGVkLlwiKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgb25Eb2N1bWVudENsaWNrKCk6IHZvaWQge1xyXG4gICAgICAgIC8vIHRocm93IG5ldyBFcnJvcihcIk1ldGhvZCBub3QgaW1wbGVtZW50ZWQuXCIpO1xyXG4gICAgfVxyXG4gICAgcHVibGljIFJlZ2lzdGVyRG9tSGFuZGxlciA9ICgpOiB2b2lkID0+IHtcclxuICAgICAgICB0aGlzLnBhcmVudEVsZW1lbnQub24oXCJjbGlja1wiLCBcIi50YWJsZS1mb290ZXIgLmZpcnN0TGlua1wiLCAoZXZlbnQpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5jb25maWdTdG9yZS5zZXRGb2N1c2FibGVFbGVtZW50KGV2ZW50LnRhcmdldCk7XHJcbiAgICAgICAgICAgIHRoaXMuY29uZmlnU3RvcmUub3B0aW9ucy5vblBhZ2VTZWFyY2goUGFnZXIuUGFnaW5hdGlvbkRhdGEucGFnZVNpemUsIDEpO1xyXG4gICAgICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICB0aGlzLnBhcmVudEVsZW1lbnQub24oXCJjbGlja1wiLCBcIi50YWJsZS1mb290ZXIgLm5leHRMaW5rXCIsIChldmVudCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmNvbmZpZ1N0b3JlLnNldEZvY3VzYWJsZUVsZW1lbnQoZXZlbnQudGFyZ2V0KTtcclxuICAgICAgICAgICAgdGhpcy5jb25maWdTdG9yZS5vcHRpb25zLm9uUGFnZVNlYXJjaChQYWdlci5QYWdpbmF0aW9uRGF0YS5wYWdlU2l6ZSwgUGFnZXIuUGFnaW5hdGlvbkRhdGEucGFnZUluZGV4ICsgMSk7XHJcbiAgICAgICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMucGFyZW50RWxlbWVudC5vbihcImNsaWNrXCIsIFwiLnRhYmxlLWZvb3RlciAucHJldkxpbmtcIiwgKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuY29uZmlnU3RvcmUuc2V0Rm9jdXNhYmxlRWxlbWVudChldmVudC50YXJnZXQpO1xyXG4gICAgICAgICAgICB0aGlzLmNvbmZpZ1N0b3JlLm9wdGlvbnMub25QYWdlU2VhcmNoKFBhZ2VyLlBhZ2luYXRpb25EYXRhLnBhZ2VTaXplLCBQYWdlci5QYWdpbmF0aW9uRGF0YS5wYWdlSW5kZXggLSAxKTtcclxuICAgICAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy5wYXJlbnRFbGVtZW50Lm9uKFwiY2xpY2tcIiwgXCIudGFibGUtZm9vdGVyIC5sYXN0TGlua1wiLCAoZXZlbnQpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5jb25maWdTdG9yZS5zZXRGb2N1c2FibGVFbGVtZW50KGV2ZW50LnRhcmdldCk7XHJcbiAgICAgICAgICAgIHRoaXMuY29uZmlnU3RvcmUub3B0aW9ucy5vblBhZ2VTZWFyY2goUGFnZXIuUGFnaW5hdGlvbkRhdGEucGFnZVNpemUsIFBhZ2VyLlBhZ2luYXRpb25EYXRhLm5vT2ZQYWdlcyk7XHJcbiAgICAgICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMucGFyZW50RWxlbWVudC5vbihcImNoYW5nZVwiLCBcIi50YWJsZS1mb290ZXIgLnBhZ2VTaXplU2VsZWN0b3JcIiwgKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuY29uZmlnU3RvcmUuc2V0Rm9jdXNhYmxlRWxlbWVudChldmVudC50YXJnZXQpO1xyXG4gICAgICAgICAgICBjb25zdCB2YWw6IG51bWJlciA9ICtqUXVlcnkoZXZlbnQudGFyZ2V0KS52YWwoKS50b1N0cmluZygpO1xyXG4gICAgICAgICAgICB0aGlzLmNvbmZpZ1N0b3JlLm9wdGlvbnMub25QYWdlU2VhcmNoKHZhbCwgUGFnZXIuUGFnaW5hdGlvbkRhdGEucGFnZUluZGV4KTtcclxuICAgICAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy5wYXJlbnRFbGVtZW50Lm9uKFwia2V5cHJlc3NcIiwgXCIudGFibGUtZm9vdGVyIC5wYWdlci1pbnB1dFwiLCAoZXZlbnQpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5jb25maWdTdG9yZS5zZXRGb2N1c2FibGVFbGVtZW50KGV2ZW50LnRhcmdldCk7XHJcbiAgICAgICAgICAgIGNvbnN0IGlwID0galF1ZXJ5KGV2ZW50LnRhcmdldCk7XHJcbiAgICAgICAgICAgIGNvbnN0IHBhZ2VEYXRhID0gUGFnZXIuUGFnaW5hdGlvbkRhdGE7XHJcbiAgICAgICAgICAgIGlmIChldmVudC5rZXlDb2RlID09PSAxMykge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgdmFsOiBudW1iZXIgPSAraXAudmFsKCkudG9TdHJpbmcoKTtcclxuICAgICAgICAgICAgICAgIGlmIChpc05hTih2YWwpIHx8IHZhbCA+IHBhZ2VEYXRhLm5vT2ZQYWdlcyB8fCB2YWwgPCAxKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaXAudmFsKHBhZ2VEYXRhLnBhZ2VJbmRleCk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY29uZmlnU3RvcmUub3B0aW9ucy5vblBhZ2VTZWFyY2gocGFnZURhdGEucGFnZVNpemUsIHZhbCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL3RzbGludC1sb2FkZXI/P3JlZi0tMSEuL3NyYy9qcy9ldmVudEhhbmRsZXJzL1BhZ2VTZWFyY2hDbGlja0hhbmRsZXIudHMiLCJpbXBvcnQgeyBDb25maWdTdG9yZSB9IGZyb20gXCIuLi9jb25maWcvQ29uZmlnU3RvcmVcIjtcclxuaW1wb3J0IHsgR3JpZFRlbXBsYXRlU2VydmljZSB9IGZyb20gXCIuLy4uL3NlcnZpY2VzL0dyaWRUZW1wbGF0ZVNlcnZpY2VcIjtcclxuaW1wb3J0IHsgSUV2ZW50SGFuZGxlciB9IGZyb20gXCIuL0lFdmVudEhhbmRsZXJcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBTY3JvbGxIYW5kbGVyPFQ+IGltcGxlbWVudHMgSUV2ZW50SGFuZGxlcjxUPiB7XHJcbiAgICBwcml2YXRlIHBhcmVudEVsZW1lbnQ6IEpRdWVyeTtcclxuICAgIHByaXZhdGUgZ3JpZFRlbXBsYXRlU2VydmljZTogR3JpZFRlbXBsYXRlU2VydmljZTxUPjtcclxuICAgIHByaXZhdGUgcmVuZGVyaW5nOiBib29sZWFuID0gIGZhbHNlO1xyXG4gICAgcHJpdmF0ZSBjb25maWdTdG9yZTogQ29uZmlnU3RvcmU8VD47XHJcbiAgICBwcml2YXRlIGxlZnRNYXJnaW46IG51bWJlcjtcclxuICAgIHByaXZhdGUgY3VycmVudEluZGV4OiBudW1iZXI7XHJcblxyXG4gICAgY29uc3RydWN0b3IoY29uZmlnU3RvcmU6IENvbmZpZ1N0b3JlPFQ+LCBncmlkVGVtcGxhdGVTZXJ2aWNlOiBHcmlkVGVtcGxhdGVTZXJ2aWNlPFQ+LCBjdXJyZW50SW5kZXg6IG51bWJlcikge1xyXG4gICAgICAgIHRoaXMuY29uZmlnU3RvcmUgPSBjb25maWdTdG9yZTtcclxuICAgICAgICB0aGlzLnBhcmVudEVsZW1lbnQgPSBqUXVlcnkodGhpcy5jb25maWdTdG9yZS5PcHRpb25zLmNvbnRhaW5lckVsZW1lbnQpO1xyXG4gICAgICAgIHRoaXMuZ3JpZFRlbXBsYXRlU2VydmljZSA9IGdyaWRUZW1wbGF0ZVNlcnZpY2U7XHJcbiAgICAgICAgdGhpcy5zZXRDdXJyZW50SW5kZXgoY3VycmVudEluZGV4KTtcclxuICAgIH1cclxuICAgIHB1YmxpYyBvblJlc2l6ZSgpOiB2b2lkIHtcclxuICAgICAgICAvL1xyXG4gICAgfVxyXG4gICAgcHVibGljIHNldEN1cnJlbnRJbmRleCA9IChpbmRleDogbnVtYmVyKSA9PiB7XHJcbiAgICAgICAgdGhpcy5jdXJyZW50SW5kZXggPSBpbmRleDtcclxuICAgICAgICB0aGlzLmdyaWRUZW1wbGF0ZVNlcnZpY2UuQ3VycmVudEluZGV4ID0gaW5kZXg7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgZ2V0Q3VycmVudEluZGV4ID0gKCkgPT4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmN1cnJlbnRJbmRleDtcclxuICAgIH1cclxuICAgIHB1YmxpYyBzY3JvbGxUYWJsZUJvZHkgPSAoKSA9PiB7XHJcbiAgICAgICAgdGhpcy5wYXJlbnRFbGVtZW50LmZpbmQoXCIudGFibGUtYm9keVwiKS5zY3JvbGxMZWZ0KC0xICogdGhpcy5sZWZ0TWFyZ2luKTtcclxuICAgIH1cclxuICAgIHB1YmxpYyBvbkRvY3VtZW50Q2xpY2soZXZlbnQpOiB2b2lkIHtcclxuICAgICAgICAvLyBObyBPcFxyXG4gICAgfVxyXG4gICAgcHVibGljIFJlZ2lzdGVyRG9tSGFuZGxlciA9ICgpOiB2b2lkID0+IHtcclxuICAgICAgICAvLyBSZWdpc3RlcmluZyBKUXVlcnkgRXZlbnQgSGFuZGxlciBpZiBIZWFkZXIgaXMgQ2xpY2tlZC5cclxuICAgICAgICB0aGlzLnBhcmVudEVsZW1lbnQuZmluZChcIi50YWJsZS1ib2R5XCIpLm9uKFwic2Nyb2xsXCIsIHRoaXMuaGFuZGxlUmVzaXplKTtcclxuICAgIH1cclxuICAgIHB1YmxpYyByZW1vdmVIYW5kbGVyID0gKCkgPT4ge1xyXG4gICAgICAgIHRoaXMucGFyZW50RWxlbWVudC5maW5kKFwiLnRhYmxlLWJvZHlcIikub2ZmKFwic2Nyb2xsXCIsIHRoaXMuaGFuZGxlUmVzaXplKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGhhbmRsZVJlc2l6ZSA9IChldmVudCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHRCb2R5T2JqID0gdGhpcy5wYXJlbnRFbGVtZW50LmZpbmQoXCIudGFibGUtYm9keVwiKTtcclxuICAgICAgICBjb25zdCBtYXJnaW5MZWZ0ID0gLTEgKiB0Qm9keU9iai5zY3JvbGxMZWZ0KCk7XHJcbiAgICAgICAgdGhpcy5wYXJlbnRFbGVtZW50LmZpbmQoXCIudGFibGUtaGVhZGVyXCIpLmNzcyhcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgXCJtYXJnaW4tbGVmdFwiOiBtYXJnaW5MZWZ0LFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICk7XHJcbiAgICAgICAgdGhpcy5sZWZ0TWFyZ2luID0gbWFyZ2luTGVmdDtcclxuICAgICAgICBjb25zdCBhY3R1YWxUYWJsZUhlaWdodCA9IHRCb2R5T2JqLmZpbmQoXCIubWFpblRhYmxlXCIpLmhlaWdodCgpO1xyXG4gICAgICAgIGNvbnN0IHNjcm9sbENvbnRhaW5lckhlaWdodCA9IHRCb2R5T2JqLmhlaWdodCgpO1xyXG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgaWYgKHRoaXMucmVuZGVyaW5nKSB7XHJcbiAgICAgICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IHNjcm9sbFRvcCA9IHRCb2R5T2JqLnNjcm9sbFRvcCgpO1xyXG4gICAgICAgIGlmICgoc2Nyb2xsQ29udGFpbmVySGVpZ2h0ICsgc2Nyb2xsVG9wICkgLSAoYWN0dWFsVGFibGVIZWlnaHQgKiAwLjggKSA+IDAgKSB7XHJcbiAgICAgICAgICAgIGlmICggdGhpcy5jdXJyZW50SW5kZXggPj0gdGhpcy5ncmlkVGVtcGxhdGVTZXJ2aWNlLkRhdGFMZW5ndGggKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5yZW5kZXJpbmcgPSB0cnVlO1xyXG4gICAgICAgICAgICBsZXQgbGFzdEluZGV4ID0gdGhpcy5jdXJyZW50SW5kZXggKyB0aGlzLmNvbmZpZ1N0b3JlLk9wdGlvbnMuY2h1bmtTaXplO1xyXG4gICAgICAgICAgICBpZiAoIGxhc3RJbmRleCA+PSB0aGlzLmdyaWRUZW1wbGF0ZVNlcnZpY2UuRGF0YUxlbmd0aCApIHtcclxuICAgICAgICAgICAgICAgIGxhc3RJbmRleCA9IHRoaXMuZ3JpZFRlbXBsYXRlU2VydmljZS5EYXRhTGVuZ3RoIC0gMTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjb25zdCBodG1sICA9IGpRdWVyeSh0aGlzLmdyaWRUZW1wbGF0ZVNlcnZpY2UuZ2V0VGVtcGxhdGUodGhpcy5jdXJyZW50SW5kZXgsIGxhc3RJbmRleCkpO1xyXG4gICAgICAgICAgICB0Qm9keU9iai5maW5kKFwiLm1haW5UYWJsZUJvZHlcIikuYXBwZW5kKGh0bWwpO1xyXG4gICAgICAgICAgICB0aGlzLnNldEN1cnJlbnRJbmRleCggbGFzdEluZGV4ICsgMSApO1xyXG4gICAgICAgICAgICB0aGlzLnJlbmRlcmluZyA9IGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgIH1cclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvdHNsaW50LWxvYWRlcj8/cmVmLS0xIS4vc3JjL2pzL2V2ZW50SGFuZGxlcnMvU2Nyb2xsSGFuZGxlci50cyIsImltcG9ydCAqIGFzIEhhbmRsZWJhcnMgZnJvbSBcImhhbmRsZWJhcnNcIjtcclxuaW1wb3J0ICogYXMgR3JpZERldGFpbHNSb3dUZW1wbGF0ZSBmcm9tIFwiLi4vLi4vaGJzL2dyaWQtZGV0YWlscy1yb3cuaGJzXCI7XHJcbmltcG9ydCAqIGFzIEdyaWRGb290ZXIgZnJvbSBcIi4uLy4uL2hicy9ncmlkLWZvb3Rlci5oYnNcIjtcclxuaW1wb3J0ICogYXMgR3JpZE1haW5Sb3dUZW1wbGF0ZSBmcm9tIFwiLi4vLi4vaGJzL2dyaWQtbWFpbi1yb3cuaGJzXCI7XHJcbmltcG9ydCAqIGFzIE1hbmFnZUNvbHVtblRlbXBsYXRlIGZyb20gXCIuLi8uLi9oYnMvZ3JpZC1tYW5hZ2UtY29sdW1ucy5oYnNcIjtcclxuaW1wb3J0ICogYXMgR3JpZFRlbXBsYXRlIGZyb20gXCIuLi8uLi9oYnMvZ3JpZC5oYnNcIjtcclxuaW1wb3J0IHsgQ29uZmlnU3RvcmUgfSBmcm9tIFwiLi4vY29uZmlnL0NvbmZpZ1N0b3JlXCI7XHJcbmltcG9ydCB7IElQYWdpbmF0aW9uIH0gZnJvbSBcIi4uL21vZGVscy9JUGFnaW5hdGlvblwiO1xyXG5pbXBvcnQgeyBQYWdlciB9IGZyb20gXCIuLi9wYWdpbmF0aW9uL1BhZ2VyXCI7XHJcbmltcG9ydCB7IElDb2x1bW4gfSBmcm9tIFwiLi8uLi9tb2RlbHMvSUNvbHVtblwiO1xyXG5pbnRlcmZhY2UgSU1haW5Db2xSb3dBcnJheSB7XHJcbiAgICBjb2x1bW5WYWx1ZTogc3RyaW5nO1xyXG4gICAgdHlwZTogc3RyaW5nO1xyXG4gICAgaGlkZGVuOiBib29sZWFuO1xyXG4gICAgYWN0dWFsVmFsdWU6IHN0cmluZztcclxuICAgIGNvbHVtbk5hbWU6IHN0cmluZztcclxuICAgIGlkOiBzdHJpbmc7XHJcbiAgICBmaWx0ZXJhYmxlOiBib29sZWFuO1xyXG59XHJcbmV4cG9ydCBjbGFzcyBHcmlkVGVtcGxhdGVTZXJ2aWNlIDxUPiB7XHJcbiAgICBwcml2YXRlIGRhdGE6IFRbXTtcclxuICAgIHByaXZhdGUgc2VsZWN0ZWQ6IFRbXSA9IFtdO1xyXG4gICAgcHJpdmF0ZSBjb25maWdTdG9yZTogQ29uZmlnU3RvcmU8VD47XHJcbiAgICBwcml2YXRlIHRlbXBsYXRlRnVuY3Rpb25Gb3JHcmlkOiBhbnk7XHJcbiAgICBwcml2YXRlIHRlbXBsYXRlRnVuY3Rpb25Gb3JNYWluUm93OiBhbnk7XHJcbiAgICBwcml2YXRlIHRlbXBsYXRlRnVuY3Rpb25Gb3JEZXRhaWxzUm93OiBhbnk7XHJcbiAgICBwcml2YXRlIHRlbXBsYXRlRnVuY3Rpb25Gb3JGb290ZXI6IGFueTtcclxuICAgIHByaXZhdGUgdGVtcGxhdGVGdW5jdGlvbkZvck1hbmFnZUNvbDogYW55O1xyXG4gICAgcHJpdmF0ZSBjdXJyZW50SW5kZXg6IG51bWJlcjtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihjb25maWdTdG9yZTogQ29uZmlnU3RvcmU8VD4pIHtcclxuICAgICAgICB0aGlzLmNvbmZpZ1N0b3JlID0gY29uZmlnU3RvcmU7XHJcbiAgICAgICAgdGhpcy50ZW1wbGF0ZUZ1bmN0aW9uRm9yR3JpZCA9IEdyaWRUZW1wbGF0ZTtcclxuICAgICAgICB0aGlzLnRlbXBsYXRlRnVuY3Rpb25Gb3JNYWluUm93ID0gR3JpZE1haW5Sb3dUZW1wbGF0ZTtcclxuICAgICAgICB0aGlzLnRlbXBsYXRlRnVuY3Rpb25Gb3JEZXRhaWxzUm93ID0gR3JpZERldGFpbHNSb3dUZW1wbGF0ZTtcclxuICAgICAgICB0aGlzLnRlbXBsYXRlRnVuY3Rpb25Gb3JGb290ZXIgPSBHcmlkRm9vdGVyO1xyXG4gICAgICAgIHRoaXMudGVtcGxhdGVGdW5jdGlvbkZvck1hbmFnZUNvbCA9IE1hbmFnZUNvbHVtblRlbXBsYXRlO1xyXG4gICAgfVxyXG4gICAgcHVibGljIGlzQWxsU2VsZWN0ZWQgPSAoKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuc2VsZWN0ZWQubGVuZ3RoICE9PSAwICYmIHRoaXMuc2VsZWN0ZWQubGVuZ3RoID09PSB0aGlzLmRhdGEubGVuZ3RoO1xyXG4gICAgfVxyXG4gICAgcHVibGljIGdldCBEYXRhKCk6IFRbXSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZGF0YTtcclxuICAgIH1cclxuICAgIHB1YmxpYyBnZXQgU2VsZWN0ZWQoKTogVFtdIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5zZWxlY3RlZDtcclxuICAgIH1cclxuICAgIHB1YmxpYyBzZXQgQ3VycmVudEluZGV4KGluZGV4OiBudW1iZXIpIHtcclxuICAgICAgICB0aGlzLmN1cnJlbnRJbmRleCA9IGluZGV4O1xyXG4gICAgfVxyXG4gICAgcHVibGljIGdldCBEYXRhTGVuZ3RoKCk6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZGF0YS5sZW5ndGg7XHJcbiAgICB9XHJcbiAgICAvLyBGb3IgRmlyc3QgIFJlbmRlciAtIFVwZGF0ZSBIZWFkZXIgLCBCb2R5LCBQYWdpbmF0aW9uXHJcbiAgICBwdWJsaWMgR2V0Rmlyc3RUZW1wbGF0ZSA9IChkYXRhOiBUW10sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaXJzdEluZGV4OiBudW1iZXIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYXN0SW5kZXg6IG51bWJlcik6IHN0cmluZyA9PiB7XHJcbiAgICAgICAgdGhpcy5kYXRhID0gZGF0YTtcclxuICAgICAgICB0aGlzLnNlbGVjdGVkID0gW107XHJcbiAgICAgICAgY29uc3QgbWFpblJvd0FycmF5ID0gdGhpcy5HZXRSb3dzSHRtbChmaXJzdEluZGV4LCBsYXN0SW5kZXgpO1xyXG4gICAgICAgIHJldHVybiB0aGlzLnRlbXBsYXRlRnVuY3Rpb25Gb3JHcmlkKHtcclxuICAgICAgICAgICAgc2hvd0NhcHRpb246IHRoaXMuY29uZmlnU3RvcmUuT3B0aW9ucy5zaG93Q2FwdGlvbixcclxuICAgICAgICAgICAgc3VtbWFyeTogdGhpcy5jb25maWdTdG9yZS5PcHRpb25zLnN1bW1hcnksXHJcbiAgICAgICAgICAgIHJvd0xlbmd0aDogdGhpcy5kYXRhLmxlbmd0aCxcclxuICAgICAgICAgICAgY29sdW1uczogdGhpcy5jb25maWdTdG9yZS5PcHRpb25zLmNvbHVtbnMsXHJcbiAgICAgICAgICAgIG1haW5Sb3dBcnJheSxcclxuICAgICAgICAgICAgcGFnaW5hdGlvbkRhdGE6IFBhZ2VyLlBhZ2luYXRpb25EYXRhLFxyXG4gICAgICAgICAgICBjYXB0aW9uOiB0aGlzLmNvbmZpZ1N0b3JlLk9wdGlvbnMuY2FwdGlvbixcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIC8vIEZvciBWaXJ0dWFsaXphdG9uIFJlbmRlciAtIEJvZHlcclxuICAgIHB1YmxpYyBnZXRUZW1wbGF0ZSA9IChmaXJzdEluZGV4OiBudW1iZXIsIGxhc3RJbmRleDogbnVtYmVyKTogc3RyaW5nID0+IHtcclxuICAgICAgICBjb25zdCBtYWluUm93QXJyYXkgPSB0aGlzLkdldFJvd3NIdG1sKGZpcnN0SW5kZXgsIGxhc3RJbmRleCk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMudGVtcGxhdGVGdW5jdGlvbkZvck1haW5Sb3coe1xyXG4gICAgICAgICAgICBjb2x1bW5zOiB0aGlzLmNvbmZpZ1N0b3JlLk9wdGlvbnMuY29sdW1ucyxcclxuICAgICAgICAgICAgbWFpblJvd0FycmF5LFxyXG4gICAgICAgICAgICBjYXB0aW9uOiB0aGlzLmNvbmZpZ1N0b3JlLk9wdGlvbnMuY2FwdGlvbixcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIC8vIFVwZGF0ZSBvbmx5IG9uZSBSb3dcclxuICAgIHB1YmxpYyBnZXRUZW1wbGF0ZUZvck9uZVJvdyA9IChyb3c6IFQpOiBzdHJpbmcgPT4ge1xyXG4gICAgICAgIGNvbnN0IGVtcHR5U3RyID0gdGhpcy5jb25maWdTdG9yZS5PcHRpb25zLmVtcHR5VmFsdWU7XHJcbiAgICAgICAgY29uc3QgbWFpblJvd0NvbEFycmF5ID0gdGhpcy5nZXRNYWluUm93KHJvdywgZW1wdHlTdHIpO1xyXG4gICAgICAgIGNvbnN0IG1haW5Sb3dBcnJheSA9IFt7XHJcbiAgICAgICAgICAgIGlzQWxsU2VsZWN0ZWQ6IHRoaXMuaXNBbGxTZWxlY3RlZCgpLFxyXG4gICAgICAgICAgICBrZXlDb2x1bW46IHJvd1t0aGlzLmNvbmZpZ1N0b3JlLk9wdGlvbnMua2V5Q29sdW1uXSxcclxuICAgICAgICAgICAgbWFpblJvd0NvbEFycmF5LFxyXG4gICAgICAgICAgICBsZW5ndGg6IHRoaXMuY29uZmlnU3RvcmUuT3B0aW9ucy5jb2x1bW5zLmxlbmd0aCxcclxuICAgICAgICB9XTtcclxuICAgICAgICByZXR1cm4gdGhpcy50ZW1wbGF0ZUZ1bmN0aW9uRm9yTWFpblJvdyh7bWFpblJvd0FycmF5fSk7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgR2V0TWFuYWdlQ29sdW1uc0h0bWwgPSAoKTogc3RyaW5nID0+IHtcclxuICAgICAgICByZXR1cm4gdGhpcy50ZW1wbGF0ZUZ1bmN0aW9uRm9yTWFuYWdlQ29sKHtjb2x1bW5zOiB0aGlzLmNvbmZpZ1N0b3JlLk9wdGlvbnMuY29sdW1uc30pO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBHZXRSb3dzSHRtbCA9IChmaXJzdEluZGV4OiBudW1iZXIsIGxhc3RJbmRleDogbnVtYmVyKTogYW55W10gPT4ge1xyXG4gICAgICAgIGNvbnN0IG1haW5Sb3dBcnJheTogYW55W10gPSBbXTtcclxuICAgICAgICBjb25zdCBlbXB0eVN0ciA9IHRoaXMuY29uZmlnU3RvcmUuT3B0aW9ucy5lbXB0eVZhbHVlO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSBmaXJzdEluZGV4OyBpIDw9IGxhc3RJbmRleDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHJvdzogVCA9IHRoaXMuZGF0YVtpXTtcclxuICAgICAgICAgICAgY29uc3QgbWFpblJvd0NvbEFycmF5OiBJTWFpbkNvbFJvd0FycmF5W10gPSB0aGlzLmdldE1haW5Sb3cocm93LCBlbXB0eVN0cik7XHJcbiAgICAgICAgICAgIG1haW5Sb3dBcnJheS5wdXNoKHtcclxuICAgICAgICAgICAgICAgIHJvd0luZGV4OiBpLFxyXG4gICAgICAgICAgICAgICAgaXNBbGxTZWxlY3RlZDogdGhpcy5pc0FsbFNlbGVjdGVkKCksXHJcbiAgICAgICAgICAgICAgICBrZXlDb2x1bW46IHJvd1t0aGlzLmNvbmZpZ1N0b3JlLk9wdGlvbnMua2V5Q29sdW1uXSxcclxuICAgICAgICAgICAgICAgIG1haW5Sb3dDb2xBcnJheSxcclxuICAgICAgICAgICAgICAgIGxlbmd0aDogdGhpcy5jb25maWdTdG9yZS5PcHRpb25zLmNvbHVtbnMubGVuZ3RoLFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG1haW5Sb3dBcnJheTtcclxuICAgIH1cclxuICAgIHB1YmxpYyBzZWxlY3RSb3dzID0gKHJvd0lkOiBzdHJpbmcpID0+IHtcclxuICAgICAgICBjb25zdCBrZXkgPSB0aGlzLmNvbmZpZ1N0b3JlLk9wdGlvbnMua2V5Q29sdW1uO1xyXG4gICAgICAgIGNvbnN0IG5ld1NlbGVjdGVkID0gW107XHJcbiAgICAgICAgbGV0IGV4aXN0cyA9IGZhbHNlO1xyXG4gICAgICAgIGZvciAoY29uc3Qgc2VsZWN0ZWQgb2YgdGhpcy5zZWxlY3RlZCkge1xyXG4gICAgICAgICAgICBpZiAoIHJvd0lkID09PSBzZWxlY3RlZFtrZXldICkge1xyXG4gICAgICAgICAgICAgICAgZXhpc3RzID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICggIWV4aXN0cyApIHtcclxuICAgICAgICAgICAgbmV3U2VsZWN0ZWQucHVzaChyb3dJZCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZvciAoY29uc3QgdG9CZUFkZGVkIG9mIG5ld1NlbGVjdGVkKSB7XHJcbiAgICAgICAgICAgIGZvciAoY29uc3Qgb25lUm93IG9mIHRoaXMuZGF0YSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKCB0b0JlQWRkZWQgPT09IG9uZVJvd1trZXldICkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWQucHVzaChvbmVSb3cpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcHVibGljIGRlU2VsZWN0Um93cyA9IChyb3dJZDogc3RyaW5nKSA9PiB7XHJcbiAgICAgICAgY29uc3QgbmV3U2VsZWN0ZWQgPSBbXTtcclxuICAgICAgICBjb25zdCBrZXkgPSB0aGlzLmNvbmZpZ1N0b3JlLk9wdGlvbnMua2V5Q29sdW1uO1xyXG4gICAgICAgIGZvciAoY29uc3Qgc2VsZWN0ZWQgb2YgdGhpcy5zZWxlY3RlZCkge1xyXG4gICAgICAgICAgICBpZiAoIHJvd0lkICE9PSBzZWxlY3RlZFtrZXldICkge1xyXG4gICAgICAgICAgICAgICAgbmV3U2VsZWN0ZWQucHVzaChzZWxlY3RlZCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5zZWxlY3RlZCA9IG5ld1NlbGVjdGVkO1xyXG4gICAgfVxyXG4gICAgcHVibGljIHNlbGVjdEFsbCA9ICgpID0+IHtcclxuICAgICAgICB0aGlzLnNlbGVjdGVkID0gdGhpcy5kYXRhO1xyXG4gICAgfVxyXG4gICAgcHVibGljIGRlU2VsZWN0QWxsID0gKCkgPT4ge1xyXG4gICAgICAgIHRoaXMuc2VsZWN0ZWQgPSBbXTtcclxuICAgIH1cclxuICAgIHB1YmxpYyB1cGRhdGVSb3dzID0gKHJvd3M6IFRbXSkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGtleSA9IHRoaXMuY29uZmlnU3RvcmUuT3B0aW9ucy5rZXlDb2x1bW47XHJcbiAgICAgICAgaWYgKCByb3dzID09PSB1bmRlZmluZWQgfHwgIXJvd3MubGVuZ3RoICkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZvciAoY29uc3Qgcm93IG9mIHJvd3MpIHtcclxuICAgICAgICAgICAgZm9yIChsZXQgZGF0YVJvdyBvZiB0aGlzLmRhdGEpIHtcclxuICAgICAgICAgICAgICAgIGlmIChyb3dba2V5XSA9PT0gZGF0YVJvd1trZXldICkge1xyXG4gICAgICAgICAgICAgICAgICAgIGRhdGFSb3cgPSByb3c7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgZm9yIChjb25zdCByb3cgb2Ygcm93cykge1xyXG4gICAgICAgICAgICBmb3IgKGxldCBkYXRhUm93IG9mIHRoaXMuc2VsZWN0ZWQpIHtcclxuICAgICAgICAgICAgICAgIGlmIChyb3dba2V5XSA9PT0gZGF0YVJvd1trZXldICkge1xyXG4gICAgICAgICAgICAgICAgICAgIGRhdGFSb3cgPSByb3c7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBwcml2YXRlIGdldE1haW5Sb3cgPSAocm93OiBULCBlbXB0eVN0cjogc3RyaW5nKTogSU1haW5Db2xSb3dBcnJheVtdID0+IHtcclxuICAgICAgICBjb25zdCBtYWluUm93Q29sQXJyYXk6IGFueVtdID0gW107XHJcbiAgICAgICAgZm9yIChjb25zdCBjb2wgb2YgdGhpcy5jb25maWdTdG9yZS5PcHRpb25zLmNvbHVtbnMpIHtcclxuICAgICAgICAgICAgbGV0IGNvbHVtblZhbHVlID0gcm93W2NvbC5pZF07XHJcbiAgICAgICAgICAgIGlmIChjb2wucmVuZGVySHlicmlkKSB7XHJcbiAgICAgICAgICAgICAgICBjb2x1bW5WYWx1ZSA9IHRoaXMuY29uZmlnU3RvcmUuT3B0aW9ucy5oeWJyaWRGdW5jdGlvbihjb2wsIHJvdyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKGVtcHR5U3RyICE9PSB1bmRlZmluZWQgJiYgY29sdW1uVmFsdWUgPT09IGVtcHR5U3RyKSB7XHJcbiAgICAgICAgICAgICAgICBjb2x1bW5WYWx1ZSA9IFwiXCI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgbWFpblJvd0NvbEFycmF5LnB1c2goe1xyXG4gICAgICAgICAgICAgICAgY29sdW1uVmFsdWUsXHJcbiAgICAgICAgICAgICAgICB0eXBlOiBjb2wudHlwZSxcclxuICAgICAgICAgICAgICAgIGhpZGRlbjogY29sLmhpZGRlbixcclxuICAgICAgICAgICAgICAgIGFjdHVhbFZhbHVlOiByb3dbY29sLmlkXSxcclxuICAgICAgICAgICAgICAgIGNvbHVtbk5hbWU6IGNvbC5uYW1lLFxyXG4gICAgICAgICAgICAgICAgaWQ6IGNvbC5pZCxcclxuICAgICAgICAgICAgICAgIGZpbHRlcmFibGU6IGNvbC5maWx0ZXJhYmxlLFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG1haW5Sb3dDb2xBcnJheTtcclxuICAgIH1cclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvdHNsaW50LWxvYWRlcj8/cmVmLS0xIS4vc3JjL2pzL3NlcnZpY2VzL0dyaWRUZW1wbGF0ZVNlcnZpY2UudHMiLCJjb25zdCBzZWxlY3RlZCA9IChpbnB1dDogbnVtYmVyLCB2YWx1ZTogbnVtYmVyKTogc3RyaW5nID0+IHtcclxuICAgIHJldHVybiBpbnB1dCA9PT0gdmFsdWUgPyBcInNlbGVjdGVkXCIgOiBcIlwiO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgc2VsZWN0ZWQ7XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy90c2xpbnQtbG9hZGVyPz9yZWYtLTEhLi9zcmMvaGJzL2hlbHBlcnMvU2VsZWN0ZWQudHMiLCJ2YXIgSGFuZGxlYmFycyA9IHJlcXVpcmUoXCJoYW5kbGViYXJzXCIpO1xuZnVuY3Rpb24gX19kZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIChvYmouX19lc01vZHVsZSA/IG9ialtcImRlZmF1bHRcIl0gOiBvYmopOyB9XG5tb2R1bGUuZXhwb3J0cyA9IChIYW5kbGViYXJzW1wiZGVmYXVsdFwiXSB8fCBIYW5kbGViYXJzKS50ZW1wbGF0ZSh7XCIxXCI6ZnVuY3Rpb24oY29udGFpbmVyLGRlcHRoMCxoZWxwZXJzLHBhcnRpYWxzLGRhdGEpIHtcbiAgICB2YXIgYWxpYXMxPWNvbnRhaW5lci5sYW1iZGEsIGFsaWFzMj1jb250YWluZXIuZXNjYXBlRXhwcmVzc2lvbjtcblxuICByZXR1cm4gXCIgICAgICAgICAgICAgICAgPHRyIGRhdGEtaGVhZGVyLWlkPVxcXCJcIlxuICAgICsgYWxpYXMyKGFsaWFzMSgoZGVwdGgwICE9IG51bGwgPyBkZXB0aDAubmFtZSA6IGRlcHRoMCksIGRlcHRoMCkpXG4gICAgKyBcIlxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8dGQ+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cXFwiY2hlY2tib3hcXFwiIGNsYXNzPVxcXCJjb2wtc2V0dGluZ3MtaGlkZGVuLWNoZWNrYm94IGd1aSBtLXItMTBcXFwiIHZhbHVlPVxcXCJcIlxuICAgICsgYWxpYXMyKGFsaWFzMSgoZGVwdGgwICE9IG51bGwgPyBkZXB0aDAuaWQgOiBkZXB0aDApLCBkZXB0aDApKVxuICAgICsgXCJcXFwiIFwiXG4gICAgKyBhbGlhczIoX19kZWZhdWx0KHJlcXVpcmUoXCJDOlxcXFxUZWNobmljYWxcXFxcUmVwb1xcXFxHcmlkb29cXFxcc3JjXFxcXGhic1xcXFxoZWxwZXJzXFxcXENoZWNrZWQudHNcIikpLmNhbGwoZGVwdGgwICE9IG51bGwgPyBkZXB0aDAgOiAoY29udGFpbmVyLm51bGxDb250ZXh0IHx8IHt9KSwoZGVwdGgwICE9IG51bGwgPyBkZXB0aDAuaGlkZGVuIDogZGVwdGgwKSx7XCJuYW1lXCI6XCJDaGVja2VkXCIsXCJoYXNoXCI6e30sXCJkYXRhXCI6ZGF0YX0pKVxuICAgICsgXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXG4gICAgKyBhbGlhczIoYWxpYXMxKChkZXB0aDAgIT0gbnVsbCA/IGRlcHRoMC5uYW1lIDogZGVwdGgwKSwgZGVwdGgwKSlcbiAgICArIFwiXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDwvdGQ+XFxyXFxuICAgICAgICAgICAgICAgIDwvdHI+XFxyXFxuXCI7XG59LFwiY29tcGlsZXJcIjpbNyxcIj49IDQuMC4wXCJdLFwibWFpblwiOmZ1bmN0aW9uKGNvbnRhaW5lcixkZXB0aDAsaGVscGVycyxwYXJ0aWFscyxkYXRhKSB7XG4gICAgdmFyIHN0YWNrMTtcblxuICByZXR1cm4gXCI8ZGl2IGNsYXNzPVxcXCJndWkgb2YtaGlkZGVuIHAtMTAgbWluLXctNTAgdy1hdXRvIGZsdWlkLWggZmxleCBjb2x1bW4gY29udGFpbmVyXFxcIiA+XFxyXFxuICAgIDxkaXYgY2xhc3M9XFxcImNvbC1zZXR0aW5ncy1oZWFkZXJcXFwiIHN0eWxlPVxcXCJ3aWR0aDogMTAwJVxcXCI+XFxyXFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJndWkgbWluaSBmbHVpZCBpY29uIGlucHV0XFxcIj5cXHJcXG4gICAgICAgICAgICA8aW5wdXQgY2xhc3M9XFxcImNvbC1zZXR0aW5ncy1maWx0ZXJcXFwiIHR5cGU9XFxcInRleHRcXFwiIHBsYWNlaG9sZGVyPVxcXCJTZWFyY2ggZmlsdGVyLi4uXFxcIj5cXHJcXG4gICAgICAgICAgICA8aSBjbGFzcz1cXFwic2VhcmNoIGljb25cXFwiPjwvaT5cXHJcXG4gICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwiZ3VpIG0tdC0xMFxcXCI+XFxyXFxuICAgICAgICAgICAgPGEgY2xhc3M9XFxcImd1aSBsZWZ0IHNob3ctYWxsLWNvbHVtblxcXCI+U2hvdyBBbGw8L2E+XFxyXFxuICAgICAgICAgICAgPGEgY2xhc3M9XFxcImd1aSByaWdodCBoaWRlLWFsbC1jb2x1bW5cXFwiPkhpZGUgQWxsPC9hPlxcclxcbiAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJndWkgY2xlYXJcXFwiPjwvZGl2PlxcclxcbiAgICA8L2Rpdj5cXHJcXG4gICAgPGRpdiBjbGFzcz1cXFwiZ3VpIGNsZWFyXFxcIj48L2Rpdj5cXHJcXG4gICAgPGRpdiBjbGFzcz1cXFwiY29sLXNldHRpbmdzLXRhYmxlIGd1aSBmbHVpZCBoLTkwIG9mLWF1dG8gcC01IG0tdC0xMFxcXCIgPlxcclxcbiAgICAgICAgPHRhYmxlIGNsYXNzPVxcXCJndWkgc21hbGwgdmVyeSBib3JkZXItbGVzcyBiYXNpYyBjb21wYWN0IHRhYmxlXFxcIj5cXHJcXG4gICAgICAgICAgICA8dGJvZHk+XFxyXFxuXCJcbiAgICArICgoc3RhY2sxID0gaGVscGVycy5lYWNoLmNhbGwoZGVwdGgwICE9IG51bGwgPyBkZXB0aDAgOiAoY29udGFpbmVyLm51bGxDb250ZXh0IHx8IHt9KSwoZGVwdGgwICE9IG51bGwgPyBkZXB0aDAuY29sdW1ucyA6IGRlcHRoMCkse1wibmFtZVwiOlwiZWFjaFwiLFwiaGFzaFwiOnt9LFwiZm5cIjpjb250YWluZXIucHJvZ3JhbSgxLCBkYXRhLCAwKSxcImludmVyc2VcIjpjb250YWluZXIubm9vcCxcImRhdGFcIjpkYXRhfSkpICE9IG51bGwgPyBzdGFjazEgOiBcIlwiKVxuICAgICsgXCIgICAgICAgICAgICA8L3Rib2R5PlxcclxcbiAgICAgICAgPC90YWJsZT5cXHJcXG4gICAgPC9kaXY+XFxyXFxuPC9kaXY+XCI7XG59LFwidXNlRGF0YVwiOnRydWV9KTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9oYnMvZ3JpZC1tYW5hZ2UtY29sdW1ucy5oYnNcbi8vIG1vZHVsZSBpZCA9IDI0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIiwiY29uc3QgY2hlY2tlZCA9IChib29sOiBib29sZWFuKTogc3RyaW5nID0+IHtcclxuICAgIHJldHVybiAhYm9vbCA/IFwiY2hlY2tlZFwiIDogXCJcIjtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNoZWNrZWQ7XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy90c2xpbnQtbG9hZGVyPz9yZWYtLTEhLi9zcmMvaGJzL2hlbHBlcnMvQ2hlY2tlZC50cyIsInZhciBIYW5kbGViYXJzID0gcmVxdWlyZShcImhhbmRsZWJhcnNcIik7XG5mdW5jdGlvbiBfX2RlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgKG9iai5fX2VzTW9kdWxlID8gb2JqW1wiZGVmYXVsdFwiXSA6IG9iaik7IH1cbm1vZHVsZS5leHBvcnRzID0gKEhhbmRsZWJhcnNbXCJkZWZhdWx0XCJdIHx8IEhhbmRsZWJhcnMpLnRlbXBsYXRlKHtcIjFcIjpmdW5jdGlvbihjb250YWluZXIsZGVwdGgwLGhlbHBlcnMscGFydGlhbHMsZGF0YSkge1xuICAgIHJldHVybiBcIiAgICAgICAgICAgICAgICA8Y2FwdGlvbiBjbGFzcz1cXFwiZ3VpIGd1aS1zdWJoZWFkaW5nLTIgbS0wIHAtMCB0ZXh0LWxlZnRcXFwiPlwiXG4gICAgKyBjb250YWluZXIuZXNjYXBlRXhwcmVzc2lvbihjb250YWluZXIubGFtYmRhKChkZXB0aDAgIT0gbnVsbCA/IGRlcHRoMC5jYXB0aW9uIDogZGVwdGgwKSwgZGVwdGgwKSlcbiAgICArIFwiPC9jYXB0aW9uPlxcclxcblwiO1xufSxcIjNcIjpmdW5jdGlvbihjb250YWluZXIsZGVwdGgwLGhlbHBlcnMscGFydGlhbHMsZGF0YSkge1xuICAgIHZhciBzdGFjazE7XG5cbiAgcmV0dXJuIFwiICAgICAgICAgICAgICAgICAgICBcIlxuICAgICsgKChzdGFjazEgPSBfX2RlZmF1bHQocmVxdWlyZShcIkM6XFxcXFRlY2huaWNhbFxcXFxSZXBvXFxcXEdyaWRvb1xcXFxzcmNcXFxcaGJzXFxcXGhlbHBlcnNcXFxcQ29sdW1uLnRzXCIpKS5jYWxsKGRlcHRoMCAhPSBudWxsID8gZGVwdGgwIDogKGNvbnRhaW5lci5udWxsQ29udGV4dCB8fCB7fSksZGVwdGgwLHtcIm5hbWVcIjpcIkNvbHVtblwiLFwiaGFzaFwiOnt9LFwiZGF0YVwiOmRhdGF9KSkgIT0gbnVsbCA/IHN0YWNrMSA6IFwiXCIpXG4gICAgKyBcIlxcclxcblwiO1xufSxcIjVcIjpmdW5jdGlvbihjb250YWluZXIsZGVwdGgwLGhlbHBlcnMscGFydGlhbHMsZGF0YSkge1xuICAgIHZhciBzdGFjazE7XG5cbiAgcmV0dXJuICgoc3RhY2sxID0gaGVscGVyc1tcImlmXCJdLmNhbGwoZGVwdGgwICE9IG51bGwgPyBkZXB0aDAgOiAoY29udGFpbmVyLm51bGxDb250ZXh0IHx8IHt9KSwoZGVwdGgwICE9IG51bGwgPyBkZXB0aDAuc29ydGFibGUgOiBkZXB0aDApLHtcIm5hbWVcIjpcImlmXCIsXCJoYXNoXCI6e30sXCJmblwiOmNvbnRhaW5lci5wcm9ncmFtKDYsIGRhdGEsIDApLFwiaW52ZXJzZVwiOmNvbnRhaW5lci5wcm9ncmFtKDgsIGRhdGEsIDApLFwiZGF0YVwiOmRhdGF9KSkgIT0gbnVsbCA/IHN0YWNrMSA6IFwiXCIpO1xufSxcIjZcIjpmdW5jdGlvbihjb250YWluZXIsZGVwdGgwLGhlbHBlcnMscGFydGlhbHMsZGF0YSkge1xuICAgIHZhciBzdGFjazE7XG5cbiAgcmV0dXJuIFwiICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXG4gICAgKyAoKHN0YWNrMSA9IF9fZGVmYXVsdChyZXF1aXJlKFwiQzpcXFxcVGVjaG5pY2FsXFxcXFJlcG9cXFxcR3JpZG9vXFxcXHNyY1xcXFxoYnNcXFxcaGVscGVyc1xcXFxPcmRlcmVkLnRzXCIpKS5jYWxsKGRlcHRoMCAhPSBudWxsID8gZGVwdGgwIDogKGNvbnRhaW5lci5udWxsQ29udGV4dCB8fCB7fSksZGVwdGgwLChkYXRhICYmIGRhdGEuaW5kZXgpLHtcIm5hbWVcIjpcIk9yZGVyZWRcIixcImhhc2hcIjp7fSxcImRhdGFcIjpkYXRhfSkpICE9IG51bGwgPyBzdGFjazEgOiBcIlwiKVxuICAgICsgXCJcXHJcXG5cIjtcbn0sXCI4XCI6ZnVuY3Rpb24oY29udGFpbmVyLGRlcHRoMCxoZWxwZXJzLHBhcnRpYWxzLGRhdGEpIHtcbiAgICB2YXIgc3RhY2sxLCBhbGlhczE9ZGVwdGgwICE9IG51bGwgPyBkZXB0aDAgOiAoY29udGFpbmVyLm51bGxDb250ZXh0IHx8IHt9KSwgYWxpYXMyPWNvbnRhaW5lci5lc2NhcGVFeHByZXNzaW9uLCBhbGlhczM9Y29udGFpbmVyLmxhbWJkYTtcblxuICByZXR1cm4gXCIgICAgICAgICAgICAgICAgICAgICAgICA8dGggcm9sZT1cXFwiY29sdW1uaGVhZGVyXFxcIlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcmlhLWNvbGluZGV4PVxcXCJcIlxuICAgICsgYWxpYXMyKF9fZGVmYXVsdChyZXF1aXJlKFwiQzpcXFxcVGVjaG5pY2FsXFxcXFJlcG9cXFxcR3JpZG9vXFxcXHNyY1xcXFxoYnNcXFxcaGVscGVyc1xcXFxBZGQudHNcIikpLmNhbGwoYWxpYXMxLChkYXRhICYmIGRhdGEuaW5kZXgpLDMse1wibmFtZVwiOlwiQWRkXCIsXCJoYXNoXCI6e30sXCJkYXRhXCI6ZGF0YX0pKVxuICAgICsgXCJcXFwiXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFyaWEtc29ydD1cXFwibm9uZVxcXCIgXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPVxcXCJcIlxuICAgICsgYWxpYXMyKGFsaWFzMygoZGVwdGgwICE9IG51bGwgPyBkZXB0aDAubmFtZSA6IGRlcHRoMCksIGRlcHRoMCkpXG4gICAgKyBcIlxcXCJcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFiaW5kZXg9XFxcIi0xXFxcIlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cXFwiZ3VpIGN1cnNvci1kZWZhdWx0IGRpc2FibGVkXFxcIiBcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcbiAgICArICgoc3RhY2sxID0gX19kZWZhdWx0KHJlcXVpcmUoXCJDOlxcXFxUZWNobmljYWxcXFxcUmVwb1xcXFxHcmlkb29cXFxcc3JjXFxcXGhic1xcXFxoZWxwZXJzXFxcXEFyaWFIaWRkZW4udHNcIikpLmNhbGwoYWxpYXMxLChkZXB0aDAgIT0gbnVsbCA/IGRlcHRoMC5oaWRkZW4gOiBkZXB0aDApLHtcIm5hbWVcIjpcIkFyaWFIaWRkZW5cIixcImhhc2hcIjp7fSxcImRhdGFcIjpkYXRhfSkpICE9IG51bGwgPyBzdGFjazEgOiBcIlwiKVxuICAgICsgXCJcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XFxcImhlYWRlci1cIlxuICAgICsgYWxpYXMyKGFsaWFzMygoZGVwdGgwICE9IG51bGwgPyBkZXB0aDAuaWQgOiBkZXB0aDApLCBkZXB0aDApKVxuICAgICsgXCJcXFwiIFxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhLWhlYWRlci1pZD1cXFwiXCJcbiAgICArIGFsaWFzMihhbGlhczMoKGRlcHRoMCAhPSBudWxsID8gZGVwdGgwLmlkIDogZGVwdGgwKSwgZGVwdGgwKSlcbiAgICArIFwiXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XFxcImd1aSBzdWIgaGVhZGVyXFxcIj5cIlxuICAgICsgYWxpYXMyKGFsaWFzMygoZGVwdGgwICE9IG51bGwgPyBkZXB0aDAubmFtZSA6IGRlcHRoMCksIGRlcHRoMCkpXG4gICAgKyBcIjwvc3Bhbj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RoPlxcclxcblwiO1xufSxcImNvbXBpbGVyXCI6WzcsXCI+PSA0LjAuMFwiXSxcIm1haW5cIjpmdW5jdGlvbihjb250YWluZXIsZGVwdGgwLGhlbHBlcnMscGFydGlhbHMsZGF0YSkge1xuICAgIHZhciBzdGFjazEsIGFsaWFzMT1jb250YWluZXIubGFtYmRhLCBhbGlhczI9Y29udGFpbmVyLmVzY2FwZUV4cHJlc3Npb24sIGFsaWFzMz1kZXB0aDAgIT0gbnVsbCA/IGRlcHRoMCA6IChjb250YWluZXIubnVsbENvbnRleHQgfHwge30pO1xuXG4gIHJldHVybiBcIjxkaXYgY2xhc3M9XFxcImlubmVyLWNvbnRhaW5lciBndWkgZmx1aWQgY29udGFpbmVyXFxcIiBcXHJcXG4gICAgYXJpYS1yZWFkb25seT1cXFwidHJ1ZVxcXCIgXFxyXFxuICAgIGFyaWEtcm93Y291bnQ9XFxcIlwiXG4gICAgKyBhbGlhczIoYWxpYXMxKChkZXB0aDAgIT0gbnVsbCA/IGRlcHRoMC5yb3dMZW5ndGggOiBkZXB0aDApLCBkZXB0aDApKVxuICAgICsgXCJcXFwiIFxcclxcbiAgICBhcmlhLWNvbGNvdW50PVxcXCJcIlxuICAgICsgYWxpYXMyKF9fZGVmYXVsdChyZXF1aXJlKFwiQzpcXFxcVGVjaG5pY2FsXFxcXFJlcG9cXFxcR3JpZG9vXFxcXHNyY1xcXFxoYnNcXFxcaGVscGVyc1xcXFxBZGQudHNcIikpLmNhbGwoYWxpYXMzLCgoc3RhY2sxID0gKGRlcHRoMCAhPSBudWxsID8gZGVwdGgwLmNvbHVtbnMgOiBkZXB0aDApKSAhPSBudWxsID8gc3RhY2sxLmxlbmd0aCA6IHN0YWNrMSksMix7XCJuYW1lXCI6XCJBZGRcIixcImhhc2hcIjp7fSxcImRhdGFcIjpkYXRhfSkpXG4gICAgKyBcIlxcXCJcXHJcXG4gICAgYXJpYS1sYWJlbD1cXFwiXCJcbiAgICArIGFsaWFzMihhbGlhczEoKGRlcHRoMCAhPSBudWxsID8gZGVwdGgwLmNhcHRpb24gOiBkZXB0aDApLCBkZXB0aDApKVxuICAgICsgXCJcXFwiXFxyXFxuICAgIHN1bW1hcnk9XFxcIlwiXG4gICAgKyBhbGlhczIoYWxpYXMxKChkZXB0aDAgIT0gbnVsbCA/IGRlcHRoMC5zdW1tYXJ5IDogZGVwdGgwKSwgZGVwdGgwKSlcbiAgICArIFwiXFxcIlxcclxcbiAgICBhcmlhLWxpdmU9XFxcInBvbGl0ZVxcXCJcXHJcXG4gICAgcm9sZT1cXFwiZ3JpZFxcXCIgXFxyXFxuICAgIHN0eWxlPVxcXCJwYWRkaW5nOjAlO1xcXCI+XFxyXFxuICAgIDxkaXYgY2xhc3M9XFxcInRhYmxlLWhlYWRlclxcXCI+XFxyXFxuICAgICAgICA8dGFibGUgaWQ9XFxcImhlYWRlcnRhYmxlXFxcIiByb2xlPVxcXCJwcmVzZW50YXRpb25cXFwiIGNsYXNzPVxcXCJndWkgYmFzaWMgbGFyZ2UgY29tcGFjdCBzb3J0YWJsZSBmaXhlZCBzaW5nbGUgbGluZSB0YWJsZVxcXCI+XFxyXFxuXCJcbiAgICArICgoc3RhY2sxID0gaGVscGVyc1tcImlmXCJdLmNhbGwoYWxpYXMzLChkZXB0aDAgIT0gbnVsbCA/IGRlcHRoMC5zaG93Q2FwdGlvbiA6IGRlcHRoMCkse1wibmFtZVwiOlwiaWZcIixcImhhc2hcIjp7fSxcImZuXCI6Y29udGFpbmVyLnByb2dyYW0oMSwgZGF0YSwgMCksXCJpbnZlcnNlXCI6Y29udGFpbmVyLm5vb3AsXCJkYXRhXCI6ZGF0YX0pKSAhPSBudWxsID8gc3RhY2sxIDogXCJcIilcbiAgICArIFwiICAgICAgICAgICAgPGNvbGdyb3VwIGNsYXNzPVxcXCJoZWFkZXJDb2xHcm91cFxcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDxjb2wgc3R5bGU9XFxcIndpZHRoOjQwcHg7XFxcIiAvPlxcclxcbiAgICAgICAgICAgICAgICA8Y29sIHN0eWxlPVxcXCJ3aWR0aDo0MHB4O1xcXCIgLz5cXHJcXG5cIlxuICAgICsgKChzdGFjazEgPSBoZWxwZXJzLmVhY2guY2FsbChhbGlhczMsKGRlcHRoMCAhPSBudWxsID8gZGVwdGgwLmNvbHVtbnMgOiBkZXB0aDApLHtcIm5hbWVcIjpcImVhY2hcIixcImhhc2hcIjp7fSxcImZuXCI6Y29udGFpbmVyLnByb2dyYW0oMywgZGF0YSwgMCksXCJpbnZlcnNlXCI6Y29udGFpbmVyLm5vb3AsXCJkYXRhXCI6ZGF0YX0pKSAhPSBudWxsID8gc3RhY2sxIDogXCJcIilcbiAgICArIFwiICAgICAgICAgICAgPC9jb2xncm91cD5cXHJcXG4gICAgICAgICAgICA8dGhlYWQgcm9sZT1cXFwicm93Z3JvdXBcXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8dHIgcm9sZT1cXFwicm93XFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDx0aCByb2xlPVxcXCJjb2x1bW5oZWFkZXJcXFwiIGFyaWEtY29saW5kZXg9XFxcIjFcXFwiPjwvdGg+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8dGggcm9sZT1cXFwiY29sdW1uaGVhZGVyXFxcIiBcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICBhcmlhLWxhYmVsPVxcXCJTZWxlY3QgYWxsIHJvd3Mgb2YgXCJcbiAgICArIGFsaWFzMihhbGlhczEoKGRlcHRoMCAhPSBudWxsID8gZGVwdGgwLmNhcHRpb24gOiBkZXB0aDApLCBkZXB0aDApKVxuICAgICsgXCIgQ2hlY2tib3hcXFwiIFxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIGFyaWEtY29saW5kZXg9XFxcIjJcXFwiXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XFxcInNlbGVjdC1hbGwtY2hlY2tib3hcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCAgdHlwZT1cXFwiY2hlY2tib3hcXFwiIFxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJpYS1sYWJlbGxlZGJ5PVxcXCJzZWxlY3QtYWxsLWNoZWNrYm94XFxcIlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XFxcInNlbGVjdC1hbGwtY2hlY2tib3ggY3Vyc29yLXBvaW50ZXJcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPC90aD5cXHJcXG5cIlxuICAgICsgKChzdGFjazEgPSBoZWxwZXJzLmVhY2guY2FsbChhbGlhczMsKGRlcHRoMCAhPSBudWxsID8gZGVwdGgwLmNvbHVtbnMgOiBkZXB0aDApLHtcIm5hbWVcIjpcImVhY2hcIixcImhhc2hcIjp7fSxcImZuXCI6Y29udGFpbmVyLnByb2dyYW0oNSwgZGF0YSwgMCksXCJpbnZlcnNlXCI6Y29udGFpbmVyLm5vb3AsXCJkYXRhXCI6ZGF0YX0pKSAhPSBudWxsID8gc3RhY2sxIDogXCJcIilcbiAgICArIFwiICAgICAgICAgICAgICAgIDwvdHI+XFxyXFxuICAgICAgICAgICAgPC90aGVhZD5cXHJcXG4gICAgICAgIDwvdGFibGU+XFxyXFxuICAgIDwvZGl2PlxcclxcbiAgICA8ZGl2IGNsYXNzPVxcXCJ0YWJsZS1ib2R5XFxcIj5cXHJcXG4gICAgICAgIDx0YWJsZSByb2xlPVxcXCJwcmVzZW50YXRpb25cXFwiIGNsYXNzPVxcXCJndWkgYmFzaWMgbGFyZ2UgY29tcGFjdCBmaXhlZCBzZWxlY3RhYmxlIHNpbmdsZSBsaW5lIHRhYmxlIG1haW5UYWJsZVxcXCI+XFxyXFxuICAgICAgICAgICAgPGNvbGdyb3VwIGNsYXNzPVxcXCJib2R5Q29sR3JvdXBcXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8Y29sIHN0eWxlPVxcXCJ3aWR0aDo0MHB4O1xcXCIgLz4gXFxyXFxuICAgICAgICAgICAgICAgIDxjb2wgc3R5bGU9XFxcIndpZHRoOjQwcHg7XFxcIiAvPlxcclxcblwiXG4gICAgKyAoKHN0YWNrMSA9IGhlbHBlcnMuZWFjaC5jYWxsKGFsaWFzMywoZGVwdGgwICE9IG51bGwgPyBkZXB0aDAuY29sdW1ucyA6IGRlcHRoMCkse1wibmFtZVwiOlwiZWFjaFwiLFwiaGFzaFwiOnt9LFwiZm5cIjpjb250YWluZXIucHJvZ3JhbSgzLCBkYXRhLCAwKSxcImludmVyc2VcIjpjb250YWluZXIubm9vcCxcImRhdGFcIjpkYXRhfSkpICE9IG51bGwgPyBzdGFjazEgOiBcIlwiKVxuICAgICsgXCIgICAgICAgICAgICA8L2NvbGdyb3VwPlxcclxcbiAgICAgICAgICAgIDx0Ym9keSBjbGFzcz1cXFwibWFpblRhYmxlQm9keVxcXCIgcm9sZT1cXFwicm93Z3JvdXBcXFwiPlxcclxcblwiXG4gICAgKyAoKHN0YWNrMSA9IGNvbnRhaW5lci5pbnZva2VQYXJ0aWFsKHJlcXVpcmUoXCJDOlxcXFxUZWNobmljYWxcXFxcUmVwb1xcXFxHcmlkb29cXFxcc3JjXFxcXGhic1xcXFxncmlkLW1haW4tcm93Lmhic1wiKSxkZXB0aDAse1wibmFtZVwiOlwiZ3JpZC1tYWluLXJvd1wiLFwiZGF0YVwiOmRhdGEsXCJpbmRlbnRcIjpcIiAgICAgICAgICAgICAgICBcIixcImhlbHBlcnNcIjpoZWxwZXJzLFwicGFydGlhbHNcIjpwYXJ0aWFscyxcImRlY29yYXRvcnNcIjpjb250YWluZXIuZGVjb3JhdG9yc30pKSAhPSBudWxsID8gc3RhY2sxIDogXCJcIilcbiAgICArIFwiICAgICAgICAgICAgPC90Ym9keT5cXHJcXG4gICAgICAgIDwvdGFibGU+XFxyXFxuICAgIDwvZGl2PlxcclxcbiAgICA8ZGl2IGNsYXNzPVxcXCJ0YWJsZS1mb290ZXIgZ3VpIGgtYXV0byBmbHVpZC13IGZsZXggamMtc2IgcC01IG0tMFxcXCI+XFxyXFxuXCJcbiAgICArICgoc3RhY2sxID0gY29udGFpbmVyLmludm9rZVBhcnRpYWwocmVxdWlyZShcIkM6XFxcXFRlY2huaWNhbFxcXFxSZXBvXFxcXEdyaWRvb1xcXFxzcmNcXFxcaGJzXFxcXGdyaWQtZm9vdGVyLmhic1wiKSxkZXB0aDAse1wibmFtZVwiOlwiZ3JpZC1mb290ZXJcIixcImRhdGFcIjpkYXRhLFwiaW5kZW50XCI6XCIgICAgICAgICAgIFwiLFwiaGVscGVyc1wiOmhlbHBlcnMsXCJwYXJ0aWFsc1wiOnBhcnRpYWxzLFwiZGVjb3JhdG9yc1wiOmNvbnRhaW5lci5kZWNvcmF0b3JzfSkpICE9IG51bGwgPyBzdGFjazEgOiBcIlwiKVxuICAgICsgXCIgICAgPC9kaXY+XFxyXFxuPC9kaXY+XCI7XG59LFwidXNlUGFydGlhbFwiOnRydWUsXCJ1c2VEYXRhXCI6dHJ1ZX0pO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2hicy9ncmlkLmhic1xuLy8gbW9kdWxlIGlkID0gMjZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEiLCJjb25zdCBDb2x1bW4gPSAoY29sKTogc3RyaW5nID0+IHtcclxuICAgIGNvbnN0IGNhbGNXaWR0aDogbnVtYmVyID0gY29sLmhpZGRlbiA/IDAgOiBjb2wud2lkdGg7XHJcbiAgICBjb25zdCBkYXRhQXR0cklkID0gJ2RhdGEtaGVhZGVyLWlkPVwiJyArIGNvbC5pZCArICdcIic7XHJcbiAgICByZXR1cm4gJzxjb2wgc3R5bGU9XCJ3aWR0aCA6ICcgKyBjYWxjV2lkdGggKyAncHg7XCInICsgZGF0YUF0dHJJZCArIFwiIC8+XCI7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDb2x1bW47XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy90c2xpbnQtbG9hZGVyPz9yZWYtLTEhLi9zcmMvaGJzL2hlbHBlcnMvQ29sdW1uLnRzIiwiaW1wb3J0IHsgR3JpZE9yZGVyRGlyZWN0aW9uIH0gZnJvbSBcIi4uLy4uL2pzL21vZGVscy9HcmlkT3JkZXJEaXJlY3Rpb25cIjtcclxuaW1wb3J0IHsgSUNvbHVtbiB9IGZyb20gXCIuLi8uLi9qcy9tb2RlbHMvSUNvbHVtblwiO1xyXG5cclxuY29uc3Qgb3JkZXJlZCA9IChjb2x1bW46IElDb2x1bW4sIGluZGV4OiBzdHJpbmcpOiBzdHJpbmcgPT4ge1xyXG4gICAgY29uc3QgcGFyc2VkSW50ID0gcGFyc2VJbnQoaW5kZXgsIDEwKSArIDM7XHJcbiAgICBsZXQgYXJpYVNvcnRTdHI7XHJcbiAgICBsZXQgYXJpYUxhYmVsU3RyO1xyXG4gICAgbGV0IGhlYWRlckljb25NaztcclxuICAgIGNvbnN0IGFyaWFIaWRkZW5TdHIgPSBjb2x1bW4uaGlkZGVuID8gXCIgYXJpYS1oaWRkZW49XFxcInRydWVcXFwiXCIgOiBcIiBhcmlhLWhpZGRlbj1cXFwiZmFsc2VcXFwiXCI7XHJcbiAgICBjb25zdCB0YWJJbmRleCA9IGNvbHVtbi5zb3J0YWJsZSAmJiAhY29sdW1uLmhpZGRlbiA/IDAgOiAtMTtcclxuICAgIGlmIChjb2x1bW4ub3JkZXJCeSA9PT0gR3JpZE9yZGVyRGlyZWN0aW9uLkFzYykge1xyXG4gICAgICAgIGhlYWRlckljb25NayA9IFwiIDxpIGNsYXNzPVxcXCJndWkgZ3VpLWljb24gZ3VpLWljb24tYXJyb3ctdXBcXFwiIGFyaWEtaGlkZGVuPVxcXCJmYWxzZVxcXCIgPjwvaT4gXCIgK1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBcIjxpIGNsYXNzPVxcXCJndWkgZ3VpLWljb24gZ3VpLWljb24tYXJyb3ctZG93biBndWktaGlkZGVuXFxcIiBhcmlhLWhpZGRlbj1cXFwidHJ1ZVxcXCIgPjwvaT5cIjtcclxuICAgICAgICBhcmlhU29ydFN0ciA9IFwiYXJpYS1zb3J0PVxcXCJhc2NlbmRpbmdcXFwiXCI7XHJcbiAgICAgICAgYXJpYUxhYmVsU3RyID0gY29sdW1uLm5hbWUgKyBcIiBzb3J0ZWQgYXNjZW5kaW5nXCI7XHJcbiAgICB9IGVsc2UgaWYgKGNvbHVtbi5vcmRlckJ5ID09PSBHcmlkT3JkZXJEaXJlY3Rpb24uRGVzYykge1xyXG4gICAgICAgIGhlYWRlckljb25NayA9IFwiPGkgY2xhc3M9XFxcImd1aSBndWktaWNvbiBndWktaWNvbi1hcnJvdy11cCBndWktaGlkZGVuXFxcIiBhcmlhLWhpZGRlbj1cXFwidHJ1ZVxcXCIgPjwvaT4gXCIgK1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBcIjxpIGNsYXNzPVxcXCJndWkgZ3VpLWljb24gZ3VpLWljb24tYXJyb3ctZG93blxcXCIgYXJpYS1oaWRkZW49XFxcImZhbHNlXFxcIiA+PC9pPlwiO1xyXG4gICAgICAgIGFyaWFTb3J0U3RyID0gXCJhcmlhLXNvcnQ9XFxcImRlc2NlbmRpbmdcXFwiXCI7XHJcbiAgICAgICAgYXJpYUxhYmVsU3RyID0gY29sdW1uLm5hbWUgKyBcIiBzb3J0ZWQgZGVzY2VuZGluZ1wiO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICBoZWFkZXJJY29uTWsgPSBcIjxpIGNsYXNzPVxcXCJndWkgZ3VpLWljb24gZ3VpLWljb24tYXJyb3ctdXAgZ3VpLWhpZGRlblxcXCIgYXJpYS1oaWRkZW49XFxcInRydWVcXFwiID48L2k+IFwiICtcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCI8aSBjbGFzcz1cXFwiZ3VpIGd1aS1pY29uIGd1aS1pY29uLWFycm93LWRvd24gZ3VpLWhpZGRlblxcXCIgYXJpYS1oaWRkZW49XFxcInRydWVcXFwiID48L2k+XCI7XHJcbiAgICAgICAgYXJpYVNvcnRTdHIgPSBcImFyaWEtc29ydD1cXFwibm9uZVxcXCJcIjtcclxuICAgICAgICBhcmlhTGFiZWxTdHIgPSBjb2x1bW4ubmFtZSArIFwiIFByZXNzIHNwYWNlIG9yIGVudGVyIHRvIHNvcnQgaW4gYXNjZW5kaW5nIG9yZGVyIGJ1dHRvbi5cIjtcclxuICAgIH1cclxuICAgIHJldHVybiBcIjx0aCByb2xlPVxcXCJjb2x1bW5oZWFkZXJcXFwiIGFyaWEtY29saW5kZXg9XFxcIlwiICsgcGFyc2VkSW50XHJcbiAgICAgICAgICArIFwiXFxcIiB0YWJpbmRleD1cXFwiXCIgKyB0YWJJbmRleCArIFwiXFxcIiBjbGFzcz1cXFwiZ3VpIGN1cnNvci1wb2ludGVyXFxcIiBpZD1cXFwiaGVhZGVyLVwiXHJcbiAgICAgICAgICArIGNvbHVtbi5pZCAgKyBcIlxcXCJcIlxyXG4gICAgICAgICAgKyBcIiBkYXRhLWhlYWRlci1pZD1cXFwiXCIgKyBjb2x1bW4uaWQgKyBcIlxcXCIgXCJcclxuICAgICAgICAgICsgYXJpYVNvcnRTdHJcclxuICAgICAgICAgICsgYXJpYUhpZGRlblN0clxyXG4gICAgICAgICAgKyBcIiBhcmlhLWxhYmVsPVxcXCJcIiArIGFyaWFMYWJlbFN0ciArIFwiXFxcIiBcIlxyXG4gICAgICAgICAgKyBcIiB0aXRsZT1cXFwiXCIgKyBjb2x1bW4ubmFtZSArIFwiXFxcIiBcIlxyXG4gICAgICAgICAgKyBcIiAgPlwiXHJcbiAgICAgICAgICArIFwiIDxzcGFuIGNsYXNzPVxcXCJndWkgc3ViIGhlYWRlciBtLXItNVxcXCI+XCIgKyBjb2x1bW4ubmFtZSArIFwiPC9zcGFuPlwiXHJcbiAgICAgICAgICArIGhlYWRlckljb25Na1xyXG4gICAgICAgICAgKyBcIiA8L3RoPlwiO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgb3JkZXJlZDtcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL3RzbGludC1sb2FkZXI/P3JlZi0tMSEuL3NyYy9oYnMvaGVscGVycy9PcmRlcmVkLnRzIiwiY29uc3QgYXJpYUhpZGRlbiA9IChib29sOiBib29sZWFuKTogc3RyaW5nID0+IHtcclxuICAgIHJldHVybiBib29sID8gXCJhcmlhLWhpZGRlbj1cXFwidHJ1ZVxcXCJcIiA6IFwiYXJpYS1oaWRkZW49XFxcImZhbHNlXFxcIlwiO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgYXJpYUhpZGRlbjtcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL3RzbGludC1sb2FkZXI/P3JlZi0tMSEuL3NyYy9oYnMvaGVscGVycy9BcmlhSGlkZGVuLnRzIl0sInNvdXJjZVJvb3QiOiIifQ==