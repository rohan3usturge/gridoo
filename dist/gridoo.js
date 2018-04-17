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
/******/ 	return __webpack_require__(__webpack_require__.s = 10);
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
    CommonUtil.SetOrder = function (columnId, order, columns) {
        if (columnId == null || columns == null) {
            return null;
        }
        var retCol;
        columns.forEach(function (col) {
            if (col.id === columnId) {
                col.order = order;
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
/*!*************************!*\
  !*** external "jQuery" ***!
  \*************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_4__;

/***/ }),
/* 5 */
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

  return "                <tr>\r\n                    <td class=\"gui rv-parent\" valign=\"top\" data-filter-type=\""
    + alias4(((helper = (helper = helpers.type || (depth0 != null ? depth0.type : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"type","hash":{},"data":data}) : helper)))
    + "\" data-filter-key=\""
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
    + "\">\r\n        <table class=\"gui very compact selectable celled table detailsTable m-l-37 p-5\" style=\"width: auto;\" >\r\n            <tbody>\r\n"
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
    + alias1(__default(__webpack_require__(/*! ./src/hbs/helpers/Selected.ts */ 23)).call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = (depths[1] != null ? depths[1].paginationData : depths[1])) != null ? stack1.pageSize : stack1),depth0,{"name":"Selected","hash":{},"data":data}))
    + ">"
    + alias1(container.lambda(depth0, depth0))
    + "</option>\r\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, alias1=container.lambda, alias2=container.escapeExpression, alias3=depth0 != null ? depth0 : (container.nullContext || {});

  return "<div data-role=\"pager\" class=\"gui gui-subheading-1 text-left m-0\">\r\n    <span class=\"gui mini compact \">\r\n        <button class=\"gui mini compact firstLink\" aria-disabled=\""
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.paginationData : depth0)) != null ? stack1.firstPageLinkDisabled : stack1), depth0))
    + "\" "
    + alias2(__default(__webpack_require__(/*! ./src/hbs/helpers/Disabled.ts */ 1)).call(alias3,((stack1 = (depth0 != null ? depth0.paginationData : depth0)) != null ? stack1.firstPageLinkDisabled : stack1),{"name":"Disabled","hash":{},"data":data}))
    + "\r\n            aria-label=\"Go to the first page\" title=\"Go to the first page\" data-page=\"1\" tabindex=\"0\">\r\n            <i class=\"gui-icon gui-icon-previous\"></i>\r\n        </button>\r\n        <button class=\"gui mini compact prevLink\" aria-disabled=\""
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.paginationData : depth0)) != null ? stack1.prevPageLinkDisabled : stack1), depth0))
    + "\" "
    + alias2(__default(__webpack_require__(/*! ./src/hbs/helpers/Disabled.ts */ 1)).call(alias3,((stack1 = (depth0 != null ? depth0.paginationData : depth0)) != null ? stack1.prevPageLinkDisabled : stack1),{"name":"Disabled","hash":{},"data":data}))
    + "\r\n            aria-label=\"Go to the previous page\" title=\"Go to the previous page\" data-page=\""
    + alias2(__default(__webpack_require__(/*! ./src/hbs/helpers/math.ts */ 8)).call(alias3,((stack1 = (depth0 != null ? depth0.paginationData : depth0)) != null ? stack1.pageIndex : stack1),"-",1,{"name":"math","hash":{},"data":data}))
    + "\"\r\n            tabindex=\"0\">\r\n            <i class=\"gui-icon gui-icon-chevron-left\"></i>\r\n            Prev\r\n        </button>\r\n    </span>\r\n    <span class=\"gui pager-input-container input\">\r\n        <span class=\"gui m-r-5\"> Page </span>\r\n        <input class=\"gui pager-input w-25 p-0 m-r-5\" aria-label=\""
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.paginationData : depth0)) != null ? stack1.pageIndex : stack1), depth0))
    + "\" value=\""
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.paginationData : depth0)) != null ? stack1.pageIndex : stack1), depth0))
    + "\" type=\"text\" placeholder=\"Page Number ...\">\r\n        <span class=\"no-of-pages-scan\" data-number-of-pages=\""
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.paginationData : depth0)) != null ? stack1.noOfPages : stack1), depth0))
    + "\"> of "
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.paginationData : depth0)) != null ? stack1.noOfPages : stack1), depth0))
    + "</span>\r\n    </span>\r\n    <span class=\"gui mini compact \">\r\n        <button class=\"gui mini compact nextLink\" aria-disabled=\""
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.paginationData : depth0)) != null ? stack1.nextPageLinkDisabled : stack1), depth0))
    + "\" "
    + alias2(__default(__webpack_require__(/*! ./src/hbs/helpers/Disabled.ts */ 1)).call(alias3,((stack1 = (depth0 != null ? depth0.paginationData : depth0)) != null ? stack1.nextPageLinkDisabled : stack1),{"name":"Disabled","hash":{},"data":data}))
    + "\r\n            aria-label=\"Go to the next page\" title=\"Go to the next page\" data-page=\""
    + alias2(__default(__webpack_require__(/*! ./src/hbs/helpers/math.ts */ 8)).call(alias3,((stack1 = (depth0 != null ? depth0.paginationData : depth0)) != null ? stack1.pageIndex : stack1),"+",1,{"name":"math","hash":{},"data":data}))
    + "\" tabindex=\"0\">\r\n            Next\r\n            <i class=\"gui-icon gui-icon-chevron-right\"></i>\r\n        </button>\r\n        <button class=\"gui mini compact lastLink\" aria-disabled=\""
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.paginationData : depth0)) != null ? stack1.lastPageLinkDisabled : stack1), depth0))
    + "\" "
    + alias2(__default(__webpack_require__(/*! ./src/hbs/helpers/Disabled.ts */ 1)).call(alias3,((stack1 = (depth0 != null ? depth0.paginationData : depth0)) != null ? stack1.lastPageLinkDisabled : stack1),{"name":"Disabled","hash":{},"data":data}))
    + "\r\n                aria-label=\"Go to the last page\" title=\"Go to the last page\" data-page=\""
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.paginationData : depth0)) != null ? stack1.noOFpages : stack1), depth0))
    + "\" tabindex=\"0\">\r\n            <i class=\"gui-icon gui-icon-next\"></i>\r\n        </button>\r\n    </span>\r\n</div>\r\n<div class=\"gui gui-subheading-1 text-right m-0\">\r\n    <span>Rows Per Page</span>\r\n    <select class=\"gui pageSizeSelector\">\r\n"
    + ((stack1 = helpers.each.call(alias3,((stack1 = (depth0 != null ? depth0.paginationData : depth0)) != null ? stack1.pageSizes : stack1),{"name":"each","hash":{},"fn":container.program(1, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "    </select>\r\n    <span class=\"gui m-l-10\">"
    + alias2(alias1(((stack1 = ((stack1 = (depth0 != null ? depth0.paginationData : depth0)) != null ? stack1.range : stack1)) != null ? stack1.min : stack1), depth0))
    + " - "
    + alias2(alias1(((stack1 = ((stack1 = (depth0 != null ? depth0.paginationData : depth0)) != null ? stack1.range : stack1)) != null ? stack1.max : stack1), depth0))
    + " of "
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.paginationData : depth0)) != null ? stack1.totalCount : stack1), depth0))
    + " items</span>\r\n</div>";
},"useData":true,"useDepths":true});

/***/ }),
/* 8 */
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
/* 9 */
/*!***********************************!*\
  !*** ./src/hbs/grid-main-row.hbs ***!
  \***********************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var Handlebars = __webpack_require__(/*! handlebars */ 0);
function __default(obj) { return obj && (obj.__esModule ? obj["default"] : obj); }
module.exports = (Handlebars["default"] || Handlebars).template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.lambda, alias2=container.escapeExpression;

  return "<tr class=\"mainRow\" data-pk-attr=\""
    + alias2(alias1((depth0 != null ? depth0.keyColumn : depth0), depth0))
    + "\" >\r\n    <td class=\"expansionArrows\" style=\"display:flex;justify-content:center;\">\r\n        <i class=\"gui gui-icon gui-icon-chevron-down expandDetailsRowIcon cursor-pointer\" aria-hidden=\"true\"></i>\r\n        <i class=\"gui gui-icon gui-icon-chevron-up CollapseDetailsRowIcon cursor-pointer gui-hidden\" aria-hidden=\"true\"></i>\r\n    </td>\r\n    <td>\r\n        <input type=\"checkbox\" data-value=\""
    + alias2(alias1((depth0 != null ? depth0.rowData : depth0), depth0))
    + "\" value=\""
    + alias2(alias1((depth0 != null ? depth0.keyColumn : depth0), depth0))
    + "\" class=\"select-key-checkbox cursor-pointer\">\r\n    </td>\r\n"
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.mainRowColArray : depth0),{"name":"each","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</tr>\r\n"
    + ((stack1 = container.invokePartial(__webpack_require__(/*! ./src/hbs/grid-details-row.hbs */ 6),depth0,{"name":"grid-details-row","data":data,"helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + " ";
},"2":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.lambda, alias2=container.escapeExpression;

  return "        <td title=\""
    + alias2(alias1((depth0 != null ? depth0.actualValue : depth0), depth0))
    + "\" class=\"body-"
    + alias2(alias1((depth0 != null ? depth0.id : depth0), depth0))
    + "\">"
    + ((stack1 = alias1((depth0 != null ? depth0.columnValue : depth0), depth0)) != null ? stack1 : "")
    + "</td>\r\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers.each.call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.mainRowArray : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"usePartial":true,"useData":true});

/***/ }),
/* 10 */
/*!*****************************!*\
  !*** ./src/js/main/Grid.ts ***!
  \*****************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var jQuery = __webpack_require__(/*! jquery */ 4);
var ConfigStore_1 = __webpack_require__(/*! ../config/ConfigStore */ 11);
var ColSettingsHandler_1 = __webpack_require__(/*! ../eventHandlers/ColSettingsHandler */ 12);
var SelectEventHandler_1 = __webpack_require__(/*! ../eventHandlers/SelectEventHandler */ 13);
var Pager_1 = __webpack_require__(/*! ../pagination/Pager */ 2);
var DetailsRowHandler_1 = __webpack_require__(/*! ./../eventHandlers/DetailsRowHandler */ 14);
var FilterClickHandler_1 = __webpack_require__(/*! ./../eventHandlers/FilterClickHandler */ 15);
var HandlerNames_1 = __webpack_require__(/*! ./../eventHandlers/HandlerNames */ 17);
var HeaderClickHandler_1 = __webpack_require__(/*! ./../eventHandlers/HeaderClickHandler */ 18);
var PageSearchClickHandler_1 = __webpack_require__(/*! ./../eventHandlers/PageSearchClickHandler */ 19);
var ScrollHandler_1 = __webpack_require__(/*! ./../eventHandlers/ScrollHandler */ 20);
var ToggleColumnHandler_1 = __webpack_require__(/*! ./../eventHandlers/ToggleColumnHandler */ 21);
var GridTemplateService_1 = __webpack_require__(/*! ./../services/GridTemplateService */ 22);
var Grid = /** @class */ (function () {
    function Grid(options) {
        var _this = this;
        this.bindData = function (data, paginationInput) {
            var firstIndex = 0;
            var lastIndex = _this.configStore.Options.chunkSize + _this.getInitialRowCount();
            lastIndex = lastIndex >= data.length ? data.length - 1 : lastIndex;
            Pager_1.Pager.CalculatePaginationData(paginationInput);
            var gridContent = _this.gridTemplateService.GetFirstTemplate(data, firstIndex, lastIndex);
            _this.configStore.Options.containerElement.innerHTML = gridContent;
            if (_this.configStore.Options.manageColSettingsContainer !== undefined) {
                _this.bindManageColums(_this.configStore.Options.manageColSettingsContainer);
            }
            // Have to bind Scroll Handler After DOM has been created
            if (_this.scrollHandler !== undefined && _this.scrollHandler !== null) {
                _this.scrollHandler.removeHandler();
                _this.scrollHandler.resetParentOffset();
            }
            else {
                _this.scrollHandler = new ScrollHandler_1.ScrollHandler(_this.configStore, _this.gridTemplateService, lastIndex + 1);
                _this.scrollHandler.watchWidth();
            }
            _this.scrollHandler.RegisterDomHandler();
        };
        this.bindManageColums = function (manageColContainer, force) {
            if (_this.manageColHandler !== undefined && !force) {
                return;
            }
            var html = _this.gridTemplateService.GetManageColumnsHtml();
            var element = jQuery(manageColContainer
                || _this.configStore.Options.manageColSettingsContainer
                || _this.configStore.Options.containerElement);
            _this.toggleHandler = new ToggleColumnHandler_1.ToggleColumnHandler(_this.configStore, jQuery(_this.configStore.Options.containerElement));
            _this.configStore.options.manageColSettingsContainer = element[0];
            _this.manageColHandler = new ColSettingsHandler_1.ColSettingsHandler(jQuery(element), _this.configStore, _this.toggleHandler);
            element.find(".col-settings-container").html(html);
            _this.manageColHandler.RegisterDomHandler();
            jQuery(window).resize(_this.documentResizeHandlerForCs);
            jQuery(document).click(_this.documentClickHandlerForCs);
        };
        this.applyColumnConfig = function (columns) {
            _this.toggleHandler.applyColumnConfig(columns);
            var html = _this.gridTemplateService.GetManageColumnsHtml();
            var element = jQuery(_this.configStore.Options.manageColSettingsContainer
                || _this.configStore.Options.containerElement);
            element.find(".col-settings-container").html(html);
        };
        this.setOrder = function (orderByList) {
            for (var _i = 0, _a = _this.configStore.Options.columns; _i < _a.length; _i++) {
                var col = _a[_i];
                col.order = undefined;
            }
            if (orderByList === undefined || orderByList === null || orderByList.length === 0) {
                return;
            }
            for (var _b = 0, orderByList_1 = orderByList; _b < orderByList_1.length; _b++) {
                var orderCol = orderByList_1[_b];
                for (var _c = 0, _d = _this.configStore.Options.columns; _c < _d.length; _c++) {
                    var col = _d[_c];
                    if (orderCol.colId === col.id) {
                        col.order = orderCol.order;
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
            var manageContainerElement = jQuery(_this.configStore.Options.manageColSettingsContainer);
            if (manageContainerElement !== undefined) {
                manageContainerElement.off();
            }
            $(window).off("resize", _this.documentResizeHandler);
            $(document).off("click", _this.documentClickHandler);
            $(window).off("resize", _this.documentResizeHandlerForCs);
            $(document).off("click", _this.documentClickHandlerForCs);
            if (_this.scrollHandler !== undefined) {
                _this.scrollHandler.unWatchWidth();
            }
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
        this.configStore = new ConfigStore_1.ConfigStore(options);
        this.gridTemplateService = new GridTemplateService_1.GridTemplateService(this.configStore);
        this.InitHandlers();
    }
    return Grid;
}());
exports.Grid = Grid;


/***/ }),
/* 11 */
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
            manageColSettingsContainer: null,
            hybridFunction: function (column, row) {
                return "true";
            },
            keyColumn: "",
            onColSettingsChange: function (colConfig) {
                // No Code
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
            onSelect: function (rows) {
                // No Code
            },
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
/* 12 */
/*!****************************************************!*\
  !*** ./src/js/eventHandlers/ColSettingsHandler.ts ***!
  \****************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var ColSettingsHandler = /** @class */ (function () {
    function ColSettingsHandler(element, configStore, toggleColumnHandler) {
        this.parentElement = element;
        this.configStore = configStore;
        this.toggleColumnHandler = toggleColumnHandler;
    }
    ColSettingsHandler.prototype.onResize = function () {
        // const settngsPopup = this.parentElement.find(".col-settings-container");
        // const tbodyHeight = this.parentElement.find(".table-body").innerHeight();
        // settngsPopup.innerHeight(tbodyHeight - 10);
        // settngsPopup.find(".col-settings-table").innerHeight(settngsPopup.innerHeight() -
        //                         settngsPopup.find(".col-settings-header").innerHeight());
    };
    ColSettingsHandler.prototype.onDocumentClick = function (event) {
        var targetElement = jQuery(event.target);
        if (targetElement.is(".col-settings-trigger")) {
            return;
        }
        if (!targetElement.parents().is(".col-settings-container")) {
            jQuery(".col-settings-trigger").removeClass("active");
            jQuery(".col-settings-container").slideUp(this.configStore.Options.animationTime);
        }
    };
    ColSettingsHandler.prototype.RegisterDomHandler = function () {
        var _this = this;
        this.parentElement.on("click", ".col-settings-trigger", function (event) {
            var element = jQuery(event.target);
            var settngsPopup = _this.parentElement.find(".col-settings-container");
            _this.onResize();
            jQuery(".col-settings-trigger").addClass("active");
            settngsPopup.slideToggle(_this.configStore.Options.animationTime);
            event.stopPropagation();
        });
        this.parentElement.on("keyup", ".col-settings-header .col-settings-filter", function (event) {
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
        this.parentElement.on("click", ".show-all-column", function (event) {
            _this.parentElement.find(".col-settings-hidden-checkbox")
                .each(function (index, element) {
                jQuery(element).prop("checked", true);
            });
            _this.toggleColumnHandler.showAllColumns();
            _this.configStore.Options.onColSettingsChange(_this.configStore.Options.columns);
            event.stopPropagation();
        });
        this.parentElement.on("click", ".hide-all-column", function (event) {
            _this.parentElement.find(".col-settings-hidden-checkbox")
                .each(function (index, element) {
                jQuery(element).prop("checked", false);
            });
            _this.toggleColumnHandler.hideAllColumns();
            _this.configStore.Options.onColSettingsChange(_this.configStore.Options.columns);
            event.stopPropagation();
        });
        this.parentElement.on("click", ".col-settings-hidden-checkbox", function (event) {
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
            _this.configStore.Options.onColSettingsChange(_this.configStore.Options.columns);
            event.stopPropagation();
        });
    };
    return ColSettingsHandler;
}());
exports.ColSettingsHandler = ColSettingsHandler;


/***/ }),
/* 13 */
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
            var row = element.data("value");
            var checked = element.is(":checked");
            if (checked) {
                element.parents(".mainRow").addClass("active");
            }
            else {
                element.parents(".mainRow").removeClass("active");
            }
            if (event.originalEvent === undefined) {
                return;
            }
            _this.configStore.Options.onSelect([row], checked);
            event.stopPropagation();
        });
        this.parentElement.on("change", ".select-all-checkbox", function (event) {
            var element = jQuery(event.target);
            var checked = element.is(":checked");
            _this.configStore.Options.onSelect(_this.gridTemplateService.Data, checked);
            _this.parentElement.find(".select-key-checkbox").prop("checked", checked);
            if (checked) {
                _this.parentElement.find(".mainTable .mainRow").addClass("active");
            }
            else {
                _this.parentElement.find(".mainTable .mainRow").removeClass("active");
            }
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
    function DetailsRowHandler(configStore, element) {
        var _this = this;
        this.configStore = configStore;
        this.RegisterDomHandler = function () {
            _this.parentElement.on("click", ".table-body .expansionArrows i", function (event) {
                var arrow = jQuery(event.target);
                var detailsRow = arrow.closest("tr").next();
                var currentIcon = arrow.hide();
                var otherIcon = arrow.siblings("i").show();
                if (arrow.hasClass("expandDetailsRowIcon")) {
                    detailsRow.slideDown(_this.configStore.Options.animationTime);
                }
                else {
                    detailsRow.slideUp(_this.configStore.Options.animationTime);
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
                var type = parentTd.attr("data-filter-type");
                var col = ColumnUtil_1.CommonUtil.GetColumnObject(key, _this.configStore.Options.columns);
                if (col === undefined || col === null || !col.filterable) {
                    return;
                }
                var filterAction = FilterActionType_1.FilterActionType.Add;
                if (element.hasClass("removeFilter")) {
                    filterAction = FilterActionType_1.FilterActionType.Minus;
                }
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
var GridOrderDirection_1 = __webpack_require__(/*! ./../models/GridOrderDirection */ 5);
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
                ColumnUtil_1.CommonUtil.SetOrder(headerId, direction, _this.configStore.Options.columns);
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
/*!********************************************************!*\
  !*** ./src/js/eventHandlers/PageSearchClickHandler.ts ***!
  \********************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var jQuery = __webpack_require__(/*! jquery */ 4);
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
/* 20 */
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
            _this.parentElement.find(".table-header").offset({
                left: _this.leftOffset + -1 * tBodyObj.scrollLeft(),
                top: 0,
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
                _this.currentIndex = lastIndex + 1;
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
        this.currentIndex = currentIndex;
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
/* 21 */
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
        this.applyColumnConfig = function (columns) {
            for (var _i = 0, columns_1 = columns; _i < columns_1.length; _i++) {
                var column = columns_1[_i];
                if (column.hidden) {
                    _this.hideColumn(column.id);
                }
                else {
                    _this.showColumn(column.id);
                }
            }
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
/* 22 */
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
var GridMainRowTemplate = __webpack_require__(/*! ../../hbs/grid-main-row.hbs */ 9);
var ManageColumnTemplate = __webpack_require__(/*! ../../hbs/grid-manage-columns.hbs */ 24);
var GridTemplate = __webpack_require__(/*! ../../hbs/grid.hbs */ 26);
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
                caption: _this.configStore.Options.caption,
            });
        };
        this.getTemplate = function (firstIndex, lastIndex) {
            var mainRowArray = _this.GetRowsHtml(firstIndex, lastIndex);
            return _this.templateFunctionForMainRow({
                columns: _this.configStore.Options.columns,
                mainRowArray: mainRowArray,
                caption: _this.configStore.Options.caption,
            });
        };
        this.GetManageColumnsHtml = function () {
            return _this.templateFunctionForManageCol({ columns: _this.configStore.Options.columns });
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
                        type: col.type,
                        hidden: col.hidden,
                        actualValue: row[col.id],
                        columnName: col.name,
                        id: col.id,
                        filterable: col.filterable,
                    });
                }
                mainRowArray.push({
                    rowData: JSON.stringify(row),
                    keyColumn: row[_this.configStore.Options.keyColumn],
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
    Object.defineProperty(GridTemplateService.prototype, "Data", {
        get: function () {
            return this.data;
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
    + "</caption>\n";
},"3":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "                    "
    + ((stack1 = __default(__webpack_require__(/*! ./src/hbs/helpers/Column.ts */ 27)).call(depth0 != null ? depth0 : (container.nullContext || {}),depth0,{"name":"Column","hash":{},"data":data})) != null ? stack1 : "")
    + "\n";
},"5":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.lambda, alias2=container.escapeExpression;

  return "                        <th class=\"gui cursor-pointer\" id=\"header-"
    + alias2(alias1((depth0 != null ? depth0.id : depth0), depth0))
    + "\" data-header-id=\""
    + alias2(alias1((depth0 != null ? depth0.id : depth0), depth0))
    + "\">\n                            <span class=\"gui sub header\">"
    + alias2(alias1((depth0 != null ? depth0.name : depth0), depth0))
    + "</span>\n"
    + ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.sortable : depth0),{"name":"if","hash":{},"fn":container.program(6, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "                        </th>\n";
},"6":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "                                "
    + ((stack1 = __default(__webpack_require__(/*! ./src/hbs/helpers/Ordered.ts */ 28)).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.order : depth0),{"name":"Ordered","hash":{},"data":data})) != null ? stack1 : "")
    + "\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {});

  return "<style>\n    .inner-container {\n        height: 100%;\n        overflow: hidden;\n        width: 100%;\n        display: flex;\n        flex-direction: column;\n    }\n    .table-header {\n        position: relative;\n        top:0 !important;\n    }\n    .table-body {\n        overflow: auto;\n        flex: 5;\n    }\n    .margin-auto{\n        margin: auto !important;\n    }\n    .border-less tr td,.border-less { border: 0px !important; }\n    .ui.supercompact.icon.button, .ui.supercompact.icon.buttons .button {\n        padding: .3em .3em .3em .3em !important;\n    }\n</style>\n<div class=\"inner-container gui fluid container\" style=\"padding:0%;\">\n    <div class=\"table-header\">\n        <table id=\"headertable\" class=\"gui basic large compact sortable fixed single line table\">\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.caption : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "            <colgroup class=\"headerColGroup\">\n                <col style=\"width:40px;\" />\n                <col style=\"width:40px;\" />\n"
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.columns : depth0),{"name":"each","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "            </colgroup>\n            <thead>\n                <tr>\n                    <th></th>\n                    <th><input type=\"checkbox\" class=\"select-all-checkbox cursor-pointer\"></th>\n"
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.columns : depth0),{"name":"each","hash":{},"fn":container.program(5, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "                </tr>\n            </thead>\n        </table>\n    </div>\n    <div class=\"table-body\">\n        <table class=\"gui basic large compact fixed selectable single line table mainTable\">\n            <colgroup class=\"bodyColGroup\">\n                <col style=\"width:40px;\" /> \n                <col style=\"width:40px;\" />\n"
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.columns : depth0),{"name":"each","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "            </colgroup>\n            <tbody class=\"mainTableBody\">\n"
    + ((stack1 = container.invokePartial(__webpack_require__(/*! ./src/hbs/grid-main-row.hbs */ 9),depth0,{"name":"grid-main-row","data":data,"indent":"                ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "            </tbody>\n        </table>\n    </div>\n    <div class=\"table-footer gui h-auto fluid-w flex jc-sb p-5 m-0\">\n"
    + ((stack1 = container.invokePartial(__webpack_require__(/*! ./src/hbs/grid-footer.hbs */ 7),depth0,{"name":"grid-footer","data":data,"indent":"           ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "    </div>\n</div>";
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
var GridOrderDirection_1 = __webpack_require__(/*! ../../js/models/GridOrderDirection */ 5);
var ordered = function (order) {
    if (order === GridOrderDirection_1.GridOrderDirection.Asc) {
        return "<i class=\"gui gui-icon gui-icon-arrow-up\" ></i> ";
    }
    else if (order === GridOrderDirection_1.GridOrderDirection.Desc) {
        return "<i class=\"gui gui-icon gui-icon-arrow-down\" ></i> ";
    }
    else {
        return "<i class=\"gui gui-icon gui-icon-arrow-up gui-hidden\" aria-hidden=\"true\" ></i> " +
            "<i class=\"gui gui-icon gui-icon-arrow-down gui-hidden\" aria-hidden=\"true\" ></i>";
    }
};
exports.default = ordered;


/***/ })
/******/ ]);
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCA0NDE3NTNkZTRmNGU0NWVlNTY5NCIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwge1wicm9vdFwiOlwiSGFuZGxlYmFyc1wiLFwiYW1kXCI6XCJoYW5kbGViYXJzLnJ1bnRpbWVcIixcImNvbW1vbmpzMlwiOlwiaGFuZGxlYmFycy9ydW50aW1lXCIsXCJjb21tb25qc1wiOlwiaGFuZGxlYmFycy9ydW50aW1lXCJ9Iiwid2VicGFjazovLy8uL3NyYy9oYnMvaGVscGVycy9EaXNhYmxlZC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvcGFnaW5hdGlvbi9QYWdlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvdXRpbC9Db2x1bW5VdGlsLnRzIiwid2VicGFjazovLy9leHRlcm5hbCBcImpRdWVyeVwiIiwid2VicGFjazovLy8uL3NyYy9qcy9tb2RlbHMvR3JpZE9yZGVyRGlyZWN0aW9uLnRzIiwid2VicGFjazovLy8uL3NyYy9oYnMvZ3JpZC1kZXRhaWxzLXJvdy5oYnMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2hicy9ncmlkLWZvb3Rlci5oYnMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2hicy9oZWxwZXJzL21hdGgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2hicy9ncmlkLW1haW4tcm93LmhicyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvbWFpbi9HcmlkLnRzIiwid2VicGFjazovLy8uL3NyYy9qcy9jb25maWcvQ29uZmlnU3RvcmUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2V2ZW50SGFuZGxlcnMvQ29sU2V0dGluZ3NIYW5kbGVyLnRzIiwid2VicGFjazovLy8uL3NyYy9qcy9ldmVudEhhbmRsZXJzL1NlbGVjdEV2ZW50SGFuZGxlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvZXZlbnRIYW5kbGVycy9EZXRhaWxzUm93SGFuZGxlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvZXZlbnRIYW5kbGVycy9GaWx0ZXJDbGlja0hhbmRsZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL21vZGVscy9GaWx0ZXJBY3Rpb25UeXBlLnRzIiwid2VicGFjazovLy8uL3NyYy9qcy9ldmVudEhhbmRsZXJzL0hhbmRsZXJOYW1lcy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvZXZlbnRIYW5kbGVycy9IZWFkZXJDbGlja0hhbmRsZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2V2ZW50SGFuZGxlcnMvUGFnZVNlYXJjaENsaWNrSGFuZGxlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvZXZlbnRIYW5kbGVycy9TY3JvbGxIYW5kbGVyLnRzIiwid2VicGFjazovLy8uL3NyYy9qcy9ldmVudEhhbmRsZXJzL1RvZ2dsZUNvbHVtbkhhbmRsZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL3NlcnZpY2VzL0dyaWRUZW1wbGF0ZVNlcnZpY2UudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2hicy9oZWxwZXJzL1NlbGVjdGVkLnRzIiwid2VicGFjazovLy8uL3NyYy9oYnMvZ3JpZC1tYW5hZ2UtY29sdW1ucy5oYnMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2hicy9oZWxwZXJzL0NoZWNrZWQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2hicy9ncmlkLmhicyIsIndlYnBhY2s6Ly8vLi9zcmMvaGJzL2hlbHBlcnMvQ29sdW1uLnRzIiwid2VicGFjazovLy8uL3NyYy9oYnMvaGVscGVycy9PcmRlcmVkLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxPO0FDVkE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7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R0FBRyxDQUFDLEtBQUssQ0FBQztJQUNyRCxJQUFNLFVBQVUsR0FBRyxrQkFBa0IsR0FBRyxHQUFHLENBQUMsRUFBRSxHQUFHLEdBQUcsQ0FBQztJQUNyRCxNQUFNLENBQUMsc0JBQXNCLEdBQUcsU0FBUyxHQUFHLE1BQU0sR0FBRyxVQUFVLEdBQUcsS0FBSyxDQUFDO0FBQzVFLENBQUMsQ0FBQztBQUVGLGtCQUFlLE1BQU0sQ0FBQzs7Ozs7Ozs7Ozs7Ozs7O0FDTnRCLDRGQUF3RTtBQUV4RSxJQUFNLE9BQU8sR0FBRyxVQUFDLEtBQXlCO0lBQ3RDLEVBQUUsQ0FBQyxDQUFDLEtBQUssS0FBSyx1Q0FBa0IsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBQ25DLE1BQU0sQ0FBQyxvREFBb0QsQ0FBQztJQUNoRSxDQUFDO0lBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEtBQUssS0FBSyx1Q0FBa0IsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO1FBQzNDLE1BQU0sQ0FBQyxzREFBc0QsQ0FBQztJQUNsRSxDQUFDO0lBQUMsSUFBSSxDQUFDLENBQUM7UUFDSixNQUFNLENBQUMsb0ZBQW9GO1lBQ3BGLHFGQUFxRixDQUFDO0lBQ2pHLENBQUM7QUFDTCxDQUFDLENBQUM7QUFFRixrQkFBZSxPQUFPLENBQUMiLCJmaWxlIjoiZ3JpZG9vLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeShyZXF1aXJlKFwiaGFuZGxlYmFycy9ydW50aW1lXCIpLCByZXF1aXJlKFwialF1ZXJ5XCIpKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFtcImhhbmRsZWJhcnMucnVudGltZVwiLCBcImpRdWVyeVwiXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJHcmlkb29cIl0gPSBmYWN0b3J5KHJlcXVpcmUoXCJoYW5kbGViYXJzL3J1bnRpbWVcIiksIHJlcXVpcmUoXCJqUXVlcnlcIikpO1xuXHRlbHNlXG5cdFx0cm9vdFtcIkdyaWRvb1wiXSA9IGZhY3Rvcnkocm9vdFtcIkhhbmRsZWJhcnNcIl0sIHJvb3RbXCJqUXVlcnlcIl0pO1xufSkodHlwZW9mIHNlbGYgIT09ICd1bmRlZmluZWQnID8gc2VsZiA6IHRoaXMsIGZ1bmN0aW9uKF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfMF9fLCBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzRfXykge1xucmV0dXJuIFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24iLCIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAxMCk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgNDQxNzUzZGU0ZjRlNDVlZTU2OTQiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfMF9fO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIHtcInJvb3RcIjpcIkhhbmRsZWJhcnNcIixcImFtZFwiOlwiaGFuZGxlYmFycy5ydW50aW1lXCIsXCJjb21tb25qczJcIjpcImhhbmRsZWJhcnMvcnVudGltZVwiLFwiY29tbW9uanNcIjpcImhhbmRsZWJhcnMvcnVudGltZVwifVxuLy8gbW9kdWxlIGlkID0gMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSIsImNvbnN0IGRpc2FibGVkID0gKGJvb2w6IGJvb2xlYW4pOiBzdHJpbmcgPT4ge1xyXG4gICAgcmV0dXJuIGJvb2wgPyBcImRpc2FibGVkXCIgOiBcIlwiO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZGlzYWJsZWQ7XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy90c2xpbnQtbG9hZGVyPz9yZWYtLTEhLi9zcmMvaGJzL2hlbHBlcnMvRGlzYWJsZWQudHMiLCJpbXBvcnQgeyBJUGFnaW5hdGlvbiB9IGZyb20gXCIuLi9tb2RlbHMvSVBhZ2luYXRpb25cIjtcclxuaW1wb3J0IHsgSVBhZ2luYXRpb25JbnB1dCB9IGZyb20gXCIuLi9tb2RlbHMvSVBhZ2luYXRpb25JbnB1dFwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIFBhZ2VyIHtcclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIHBhZ2luYXRpb25EYXRhOiBJUGFnaW5hdGlvbjtcclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIENhbGN1bGF0ZVBhZ2luYXRpb25EYXRhID0gKHBhZ2luYXRpb25JbnB1dDogSVBhZ2luYXRpb25JbnB1dCk6IHZvaWQgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBwYWdpbmF0aW9uRGF0YTogYW55ID0ge307XHJcbiAgICAgICAgICAgIHBhZ2luYXRpb25EYXRhLnBhZ2VJbmRleCA9IHBhZ2luYXRpb25JbnB1dC5wYWdlSW5kZXg7XHJcbiAgICAgICAgICAgIHBhZ2luYXRpb25EYXRhLnBhZ2VTaXplID0gcGFnaW5hdGlvbklucHV0LnBhZ2VTaXplO1xyXG4gICAgICAgICAgICBwYWdpbmF0aW9uRGF0YS5wYWdlU2l6ZXMgPSBwYWdpbmF0aW9uSW5wdXQucGFnZVNpemVzO1xyXG4gICAgICAgICAgICBwYWdpbmF0aW9uRGF0YS50b3RhbENvdW50ID0gcGFnaW5hdGlvbklucHV0LnRvdGFsQ291bnQ7XHJcbiAgICAgICAgICAgIHBhZ2luYXRpb25EYXRhLm5vT2ZQYWdlcyA9IE1hdGguY2VpbChwYWdpbmF0aW9uSW5wdXQudG90YWxDb3VudCAvIHBhZ2luYXRpb25JbnB1dC5wYWdlU2l6ZSk7XHJcbiAgICAgICAgICAgIGNvbnN0IG1pbk51bSA9ICgocGFnaW5hdGlvbklucHV0LnBhZ2VJbmRleCAtIDEpICogcGFnaW5hdGlvbklucHV0LnBhZ2VTaXplKTtcclxuICAgICAgICAgICAgY29uc3QgbG93ZXJMaW1pdE9mZnNldCA9IHBhZ2luYXRpb25JbnB1dC5wYWdlU2l6ZSA+IHBhZ2luYXRpb25JbnB1dC50b3RhbENvdW50ID9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZ2luYXRpb25JbnB1dC50b3RhbENvdW50IDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZ2luYXRpb25JbnB1dC5wYWdlU2l6ZTtcclxuICAgICAgICAgICAgcGFnaW5hdGlvbkRhdGEucmFuZ2UgPSB7XHJcbiAgICAgICAgICAgICAgICBtaW4gOiBtaW5OdW0gKyAxLFxyXG4gICAgICAgICAgICAgICAgbWF4IDogbWluTnVtICsgbG93ZXJMaW1pdE9mZnNldCxcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgcGFnaW5hdGlvbkRhdGEuZmlyc3RQYWdlTGlua0Rpc2FibGVkID0gcGFnaW5hdGlvbkRhdGEubm9PZlBhZ2VzID09PSAxIHx8IHBhZ2luYXRpb25EYXRhLnBhZ2VJbmRleCA9PT0gMTtcclxuICAgICAgICAgICAgcGFnaW5hdGlvbkRhdGEubGFzdFBhZ2VMaW5rRGlzYWJsZWQgID0gcGFnaW5hdGlvbkRhdGEubm9PZlBhZ2VzID09PSAxXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8fCAocGFnaW5hdGlvbkRhdGEucGFnZUluZGV4ID09PSBwYWdpbmF0aW9uRGF0YS5ub09mUGFnZXMpO1xyXG4gICAgICAgICAgICBwYWdpbmF0aW9uRGF0YS5wcmV2UGFnZUxpbmtEaXNhYmxlZCAgPSBwYWdpbmF0aW9uRGF0YS5wYWdlSW5kZXggPT09IDFcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHx8IChwYWdpbmF0aW9uRGF0YS5wYWdlSW5kZXggLSAxKSA8PSAwO1xyXG4gICAgICAgICAgICBwYWdpbmF0aW9uRGF0YS5uZXh0UGFnZUxpbmtEaXNhYmxlZCAgPSBwYWdpbmF0aW9uRGF0YS5ub09mUGFnZXMgPT09IHBhZ2luYXRpb25EYXRhLnBhZ2VJbmRleFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfHwgKHBhZ2luYXRpb25EYXRhLnBhZ2VJbmRleCArIDEpID49IHBhZ2luYXRpb25EYXRhLm5vT2ZQYWdlcztcclxuICAgICAgICAgICAgUGFnZXIucGFnaW5hdGlvbkRhdGEgPSBwYWdpbmF0aW9uRGF0YTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIGdldCBQYWdpbmF0aW9uRGF0YSgpOiBJUGFnaW5hdGlvbiB7XHJcbiAgICAgICAgcmV0dXJuIFBhZ2VyLnBhZ2luYXRpb25EYXRhO1xyXG4gICAgfVxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy90c2xpbnQtbG9hZGVyPz9yZWYtLTEhLi9zcmMvanMvcGFnaW5hdGlvbi9QYWdlci50cyIsImltcG9ydCB7IEdyaWRPcmRlckRpcmVjdGlvbiB9IGZyb20gXCIuLi9tb2RlbHMvR3JpZE9yZGVyRGlyZWN0aW9uXCI7XHJcbmltcG9ydCB7IElDb2x1bW4gfSBmcm9tIFwiLi8uLi9tb2RlbHMvSUNvbHVtblwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIENvbW1vblV0aWwge1xyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgR2V0Q29sdW1uT2JqZWN0ID0gKGNvbHVtbklkOiBzdHJpbmcsIGNvbHVtbnM6IElDb2x1bW5bXSk6IElDb2x1bW4gPT4ge1xyXG4gICAgICAgIGlmIChjb2x1bW5JZCA9PSBudWxsIHx8IGNvbHVtbnMgPT0gbnVsbCkge1xyXG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IHJldENvbDogSUNvbHVtbjtcclxuICAgICAgICBjb2x1bW5zLmZvckVhY2goKGNvbDogSUNvbHVtbikgPT4ge1xyXG4gICAgICAgICAgICBpZiAoY29sLmlkID09PSBjb2x1bW5JZCkge1xyXG4gICAgICAgICAgICAgICAgcmV0Q29sID0gY29sO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgcmV0dXJuIHJldENvbDtcclxuICAgIH1cclxuICAgIHB1YmxpYyBzdGF0aWMgU2V0T3JkZXIgPSAoY29sdW1uSWQ6IHN0cmluZywgb3JkZXI6IEdyaWRPcmRlckRpcmVjdGlvbiwgY29sdW1uczogSUNvbHVtbltdKTogSUNvbHVtbiA9PiB7XHJcbiAgICAgICAgaWYgKGNvbHVtbklkID09IG51bGwgfHwgY29sdW1ucyA9PSBudWxsKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQgcmV0Q29sOiBJQ29sdW1uO1xyXG4gICAgICAgIGNvbHVtbnMuZm9yRWFjaCgoY29sOiBJQ29sdW1uKSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChjb2wuaWQgPT09IGNvbHVtbklkKSB7XHJcbiAgICAgICAgICAgICAgICBjb2wub3JkZXIgPSBvcmRlcjtcclxuICAgICAgICAgICAgICAgIHJldENvbCA9IGNvbDtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHJldHVybiByZXRDb2w7XHJcbiAgICB9XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL3RzbGludC1sb2FkZXI/P3JlZi0tMSEuL3NyYy9qcy91dGlsL0NvbHVtblV0aWwudHMiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfNF9fO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwialF1ZXJ5XCJcbi8vIG1vZHVsZSBpZCA9IDRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEiLCJleHBvcnQgZW51bSBHcmlkT3JkZXJEaXJlY3Rpb24ge1xyXG4gICAgTm9uZSA9IFwiTm9uZVwiLFxyXG4gICAgQXNjID0gXCJBc2NcIixcclxuICAgIERlc2MgPSBcIkRlc2NcIixcclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvdHNsaW50LWxvYWRlcj8/cmVmLS0xIS4vc3JjL2pzL21vZGVscy9HcmlkT3JkZXJEaXJlY3Rpb24udHMiLCJ2YXIgSGFuZGxlYmFycyA9IHJlcXVpcmUoXCJoYW5kbGViYXJzXCIpO1xuZnVuY3Rpb24gX19kZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIChvYmouX19lc01vZHVsZSA/IG9ialtcImRlZmF1bHRcIl0gOiBvYmopOyB9XG5tb2R1bGUuZXhwb3J0cyA9IChIYW5kbGViYXJzW1wiZGVmYXVsdFwiXSB8fCBIYW5kbGViYXJzKS50ZW1wbGF0ZSh7XCIxXCI6ZnVuY3Rpb24oY29udGFpbmVyLGRlcHRoMCxoZWxwZXJzLHBhcnRpYWxzLGRhdGEpIHtcbiAgICB2YXIgc3RhY2sxLCBoZWxwZXIsIGFsaWFzMT1kZXB0aDAgIT0gbnVsbCA/IGRlcHRoMCA6IChjb250YWluZXIubnVsbENvbnRleHQgfHwge30pLCBhbGlhczI9aGVscGVycy5oZWxwZXJNaXNzaW5nLCBhbGlhczM9XCJmdW5jdGlvblwiLCBhbGlhczQ9Y29udGFpbmVyLmVzY2FwZUV4cHJlc3Npb247XG5cbiAgcmV0dXJuIFwiICAgICAgICAgICAgICAgIDx0cj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzcz1cXFwiZ3VpIHJ2LXBhcmVudFxcXCIgdmFsaWduPVxcXCJ0b3BcXFwiIGRhdGEtZmlsdGVyLXR5cGU9XFxcIlwiXG4gICAgKyBhbGlhczQoKChoZWxwZXIgPSAoaGVscGVyID0gaGVscGVycy50eXBlIHx8IChkZXB0aDAgIT0gbnVsbCA/IGRlcHRoMC50eXBlIDogZGVwdGgwKSkgIT0gbnVsbCA/IGhlbHBlciA6IGFsaWFzMiksKHR5cGVvZiBoZWxwZXIgPT09IGFsaWFzMyA/IGhlbHBlci5jYWxsKGFsaWFzMSx7XCJuYW1lXCI6XCJ0eXBlXCIsXCJoYXNoXCI6e30sXCJkYXRhXCI6ZGF0YX0pIDogaGVscGVyKSkpXG4gICAgKyBcIlxcXCIgZGF0YS1maWx0ZXIta2V5PVxcXCJcIlxuICAgICsgYWxpYXM0KCgoaGVscGVyID0gKGhlbHBlciA9IGhlbHBlcnMuaWQgfHwgKGRlcHRoMCAhPSBudWxsID8gZGVwdGgwLmlkIDogZGVwdGgwKSkgIT0gbnVsbCA/IGhlbHBlciA6IGFsaWFzMiksKHR5cGVvZiBoZWxwZXIgPT09IGFsaWFzMyA/IGhlbHBlci5jYWxsKGFsaWFzMSx7XCJuYW1lXCI6XCJpZFwiLFwiaGFzaFwiOnt9LFwiZGF0YVwiOmRhdGF9KSA6IGhlbHBlcikpKVxuICAgICsgXCJcXFwiIGRhdGEtZmlsdGVyLXZhbHVlPVxcXCJcIlxuICAgICsgYWxpYXM0KCgoaGVscGVyID0gKGhlbHBlciA9IGhlbHBlcnMuYWN0dWFsVmFsdWUgfHwgKGRlcHRoMCAhPSBudWxsID8gZGVwdGgwLmFjdHVhbFZhbHVlIDogZGVwdGgwKSkgIT0gbnVsbCA/IGhlbHBlciA6IGFsaWFzMiksKHR5cGVvZiBoZWxwZXIgPT09IGFsaWFzMyA/IGhlbHBlci5jYWxsKGFsaWFzMSx7XCJuYW1lXCI6XCJhY3R1YWxWYWx1ZVwiLFwiaGFzaFwiOnt9LFwiZGF0YVwiOmRhdGF9KSA6IGhlbHBlcikpKVxuICAgICsgXCJcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPlwiXG4gICAgKyBhbGlhczQoKChoZWxwZXIgPSAoaGVscGVyID0gaGVscGVycy5jb2x1bW5OYW1lIHx8IChkZXB0aDAgIT0gbnVsbCA/IGRlcHRoMC5jb2x1bW5OYW1lIDogZGVwdGgwKSkgIT0gbnVsbCA/IGhlbHBlciA6IGFsaWFzMiksKHR5cGVvZiBoZWxwZXIgPT09IGFsaWFzMyA/IGhlbHBlci5jYWxsKGFsaWFzMSx7XCJuYW1lXCI6XCJjb2x1bW5OYW1lXCIsXCJoYXNoXCI6e30sXCJkYXRhXCI6ZGF0YX0pIDogaGVscGVyKSkpXG4gICAgKyBcIjwvc3Bhbj5cXHJcXG5cIlxuICAgICsgKChzdGFjazEgPSBoZWxwZXJzW1wiaWZcIl0uY2FsbChhbGlhczEsKGRlcHRoMCAhPSBudWxsID8gZGVwdGgwLmZpbHRlcmFibGUgOiBkZXB0aDApLHtcIm5hbWVcIjpcImlmXCIsXCJoYXNoXCI6e30sXCJmblwiOmNvbnRhaW5lci5wcm9ncmFtKDIsIGRhdGEsIDApLFwiaW52ZXJzZVwiOmNvbnRhaW5lci5ub29wLFwiZGF0YVwiOmRhdGF9KSkgIT0gbnVsbCA/IHN0YWNrMSA6IFwiXCIpXG4gICAgKyBcIiAgICAgICAgICAgICAgICAgICAgPC90ZD5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDx0ZD5cIlxuICAgICsgKChzdGFjazEgPSAoKGhlbHBlciA9IChoZWxwZXIgPSBoZWxwZXJzLmNvbHVtblZhbHVlIHx8IChkZXB0aDAgIT0gbnVsbCA/IGRlcHRoMC5jb2x1bW5WYWx1ZSA6IGRlcHRoMCkpICE9IG51bGwgPyBoZWxwZXIgOiBhbGlhczIpLCh0eXBlb2YgaGVscGVyID09PSBhbGlhczMgPyBoZWxwZXIuY2FsbChhbGlhczEse1wibmFtZVwiOlwiY29sdW1uVmFsdWVcIixcImhhc2hcIjp7fSxcImRhdGFcIjpkYXRhfSkgOiBoZWxwZXIpKSkgIT0gbnVsbCA/IHN0YWNrMSA6IFwiXCIpXG4gICAgKyBcIjwvdGQ+XFxyXFxuICAgICAgICAgICAgICAgIDwvdHI+XFxyXFxuXCI7XG59LFwiMlwiOmZ1bmN0aW9uKGNvbnRhaW5lcixkZXB0aDAsaGVscGVycyxwYXJ0aWFscyxkYXRhKSB7XG4gICAgcmV0dXJuIFwiICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XFxcImd1aSBtLWwtNSBydi1jaGlsZCBndWktY2FwdGlvblxcXCIgPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzcz1cXFwiZ3VpIGd1aS1pY29uIGd1aS1pY29uLWFkZCBob3ZlciBtLWwtNSBjdXJzb3ItcG9pbnRlciBhZGRGaWx0ZXJcXFwiPjwvaT5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3M9XFxcImd1aSBndWktaWNvbiBndWktaWNvbi1taW51cyBob3ZlciBtLWwtNSBjdXJzb3ItcG9pbnRlciByZW1vdmVGaWx0ZXJcXFwiPjwvaT5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XFxyXFxuXCI7XG59LFwiY29tcGlsZXJcIjpbNyxcIj49IDQuMC4wXCJdLFwibWFpblwiOmZ1bmN0aW9uKGNvbnRhaW5lcixkZXB0aDAsaGVscGVycyxwYXJ0aWFscyxkYXRhKSB7XG4gICAgdmFyIHN0YWNrMSwgaGVscGVyLCBhbGlhczE9ZGVwdGgwICE9IG51bGwgPyBkZXB0aDAgOiAoY29udGFpbmVyLm51bGxDb250ZXh0IHx8IHt9KTtcblxuICByZXR1cm4gXCI8dHIgY2xhc3M9XFxcImd1aSBndWktaGlkZGVuIGRldGFpbHNSb3dcXFwiPlxcclxcbiAgICA8dGQgY29sc3Bhbj1cXFwiXCJcbiAgICArIGNvbnRhaW5lci5lc2NhcGVFeHByZXNzaW9uKCgoaGVscGVyID0gKGhlbHBlciA9IGhlbHBlcnMubGVuZ3RoIHx8IChkZXB0aDAgIT0gbnVsbCA/IGRlcHRoMC5sZW5ndGggOiBkZXB0aDApKSAhPSBudWxsID8gaGVscGVyIDogaGVscGVycy5oZWxwZXJNaXNzaW5nKSwodHlwZW9mIGhlbHBlciA9PT0gXCJmdW5jdGlvblwiID8gaGVscGVyLmNhbGwoYWxpYXMxLHtcIm5hbWVcIjpcImxlbmd0aFwiLFwiaGFzaFwiOnt9LFwiZGF0YVwiOmRhdGF9KSA6IGhlbHBlcikpKVxuICAgICsgXCJcXFwiPlxcclxcbiAgICAgICAgPHRhYmxlIGNsYXNzPVxcXCJndWkgdmVyeSBjb21wYWN0IHNlbGVjdGFibGUgY2VsbGVkIHRhYmxlIGRldGFpbHNUYWJsZSBtLWwtMzcgcC01XFxcIiBzdHlsZT1cXFwid2lkdGg6IGF1dG87XFxcIiA+XFxyXFxuICAgICAgICAgICAgPHRib2R5PlxcclxcblwiXG4gICAgKyAoKHN0YWNrMSA9IGhlbHBlcnMuZWFjaC5jYWxsKGFsaWFzMSwoZGVwdGgwICE9IG51bGwgPyBkZXB0aDAubWFpblJvd0NvbEFycmF5IDogZGVwdGgwKSx7XCJuYW1lXCI6XCJlYWNoXCIsXCJoYXNoXCI6e30sXCJmblwiOmNvbnRhaW5lci5wcm9ncmFtKDEsIGRhdGEsIDApLFwiaW52ZXJzZVwiOmNvbnRhaW5lci5ub29wLFwiZGF0YVwiOmRhdGF9KSkgIT0gbnVsbCA/IHN0YWNrMSA6IFwiXCIpXG4gICAgKyBcIiAgICAgICAgICAgIDwvdGJvZHk+XFxyXFxuICAgICAgICA8L3RhYmxlPlxcclxcbiAgICA8L3RkPlxcclxcbjwvdHI+XCI7XG59LFwidXNlRGF0YVwiOnRydWV9KTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9oYnMvZ3JpZC1kZXRhaWxzLXJvdy5oYnNcbi8vIG1vZHVsZSBpZCA9IDZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEiLCJ2YXIgSGFuZGxlYmFycyA9IHJlcXVpcmUoXCJoYW5kbGViYXJzXCIpO1xuZnVuY3Rpb24gX19kZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIChvYmouX19lc01vZHVsZSA/IG9ialtcImRlZmF1bHRcIl0gOiBvYmopOyB9XG5tb2R1bGUuZXhwb3J0cyA9IChIYW5kbGViYXJzW1wiZGVmYXVsdFwiXSB8fCBIYW5kbGViYXJzKS50ZW1wbGF0ZSh7XCIxXCI6ZnVuY3Rpb24oY29udGFpbmVyLGRlcHRoMCxoZWxwZXJzLHBhcnRpYWxzLGRhdGEsYmxvY2tQYXJhbXMsZGVwdGhzKSB7XG4gICAgdmFyIHN0YWNrMSwgYWxpYXMxPWNvbnRhaW5lci5lc2NhcGVFeHByZXNzaW9uO1xuXG4gIHJldHVybiBcIiAgICAgICAgPG9wdGlvbiBcIlxuICAgICsgYWxpYXMxKF9fZGVmYXVsdChyZXF1aXJlKFwiQzpcXFxcVXNlcnNcXFxccm91c3R1cmdcXFxcU291cmNlXFxcXFJlcG9zXFxcXFNlYXJjaE1hc3RlclxcXFxHcmlkb29cXFxcc3JjXFxcXGhic1xcXFxoZWxwZXJzXFxcXFNlbGVjdGVkLnRzXCIpKS5jYWxsKGRlcHRoMCAhPSBudWxsID8gZGVwdGgwIDogKGNvbnRhaW5lci5udWxsQ29udGV4dCB8fCB7fSksKChzdGFjazEgPSAoZGVwdGhzWzFdICE9IG51bGwgPyBkZXB0aHNbMV0ucGFnaW5hdGlvbkRhdGEgOiBkZXB0aHNbMV0pKSAhPSBudWxsID8gc3RhY2sxLnBhZ2VTaXplIDogc3RhY2sxKSxkZXB0aDAse1wibmFtZVwiOlwiU2VsZWN0ZWRcIixcImhhc2hcIjp7fSxcImRhdGFcIjpkYXRhfSkpXG4gICAgKyBcIj5cIlxuICAgICsgYWxpYXMxKGNvbnRhaW5lci5sYW1iZGEoZGVwdGgwLCBkZXB0aDApKVxuICAgICsgXCI8L29wdGlvbj5cXHJcXG5cIjtcbn0sXCJjb21waWxlclwiOls3LFwiPj0gNC4wLjBcIl0sXCJtYWluXCI6ZnVuY3Rpb24oY29udGFpbmVyLGRlcHRoMCxoZWxwZXJzLHBhcnRpYWxzLGRhdGEsYmxvY2tQYXJhbXMsZGVwdGhzKSB7XG4gICAgdmFyIHN0YWNrMSwgYWxpYXMxPWNvbnRhaW5lci5sYW1iZGEsIGFsaWFzMj1jb250YWluZXIuZXNjYXBlRXhwcmVzc2lvbiwgYWxpYXMzPWRlcHRoMCAhPSBudWxsID8gZGVwdGgwIDogKGNvbnRhaW5lci5udWxsQ29udGV4dCB8fCB7fSk7XG5cbiAgcmV0dXJuIFwiPGRpdiBkYXRhLXJvbGU9XFxcInBhZ2VyXFxcIiBjbGFzcz1cXFwiZ3VpIGd1aS1zdWJoZWFkaW5nLTEgdGV4dC1sZWZ0IG0tMFxcXCI+XFxyXFxuICAgIDxzcGFuIGNsYXNzPVxcXCJndWkgbWluaSBjb21wYWN0IFxcXCI+XFxyXFxuICAgICAgICA8YnV0dG9uIGNsYXNzPVxcXCJndWkgbWluaSBjb21wYWN0IGZpcnN0TGlua1xcXCIgYXJpYS1kaXNhYmxlZD1cXFwiXCJcbiAgICArIGFsaWFzMihhbGlhczEoKChzdGFjazEgPSAoZGVwdGgwICE9IG51bGwgPyBkZXB0aDAucGFnaW5hdGlvbkRhdGEgOiBkZXB0aDApKSAhPSBudWxsID8gc3RhY2sxLmZpcnN0UGFnZUxpbmtEaXNhYmxlZCA6IHN0YWNrMSksIGRlcHRoMCkpXG4gICAgKyBcIlxcXCIgXCJcbiAgICArIGFsaWFzMihfX2RlZmF1bHQocmVxdWlyZShcIkM6XFxcXFVzZXJzXFxcXHJvdXN0dXJnXFxcXFNvdXJjZVxcXFxSZXBvc1xcXFxTZWFyY2hNYXN0ZXJcXFxcR3JpZG9vXFxcXHNyY1xcXFxoYnNcXFxcaGVscGVyc1xcXFxEaXNhYmxlZC50c1wiKSkuY2FsbChhbGlhczMsKChzdGFjazEgPSAoZGVwdGgwICE9IG51bGwgPyBkZXB0aDAucGFnaW5hdGlvbkRhdGEgOiBkZXB0aDApKSAhPSBudWxsID8gc3RhY2sxLmZpcnN0UGFnZUxpbmtEaXNhYmxlZCA6IHN0YWNrMSkse1wibmFtZVwiOlwiRGlzYWJsZWRcIixcImhhc2hcIjp7fSxcImRhdGFcIjpkYXRhfSkpXG4gICAgKyBcIlxcclxcbiAgICAgICAgICAgIGFyaWEtbGFiZWw9XFxcIkdvIHRvIHRoZSBmaXJzdCBwYWdlXFxcIiB0aXRsZT1cXFwiR28gdG8gdGhlIGZpcnN0IHBhZ2VcXFwiIGRhdGEtcGFnZT1cXFwiMVxcXCIgdGFiaW5kZXg9XFxcIjBcXFwiPlxcclxcbiAgICAgICAgICAgIDxpIGNsYXNzPVxcXCJndWktaWNvbiBndWktaWNvbi1wcmV2aW91c1xcXCI+PC9pPlxcclxcbiAgICAgICAgPC9idXR0b24+XFxyXFxuICAgICAgICA8YnV0dG9uIGNsYXNzPVxcXCJndWkgbWluaSBjb21wYWN0IHByZXZMaW5rXFxcIiBhcmlhLWRpc2FibGVkPVxcXCJcIlxuICAgICsgYWxpYXMyKGFsaWFzMSgoKHN0YWNrMSA9IChkZXB0aDAgIT0gbnVsbCA/IGRlcHRoMC5wYWdpbmF0aW9uRGF0YSA6IGRlcHRoMCkpICE9IG51bGwgPyBzdGFjazEucHJldlBhZ2VMaW5rRGlzYWJsZWQgOiBzdGFjazEpLCBkZXB0aDApKVxuICAgICsgXCJcXFwiIFwiXG4gICAgKyBhbGlhczIoX19kZWZhdWx0KHJlcXVpcmUoXCJDOlxcXFxVc2Vyc1xcXFxyb3VzdHVyZ1xcXFxTb3VyY2VcXFxcUmVwb3NcXFxcU2VhcmNoTWFzdGVyXFxcXEdyaWRvb1xcXFxzcmNcXFxcaGJzXFxcXGhlbHBlcnNcXFxcRGlzYWJsZWQudHNcIikpLmNhbGwoYWxpYXMzLCgoc3RhY2sxID0gKGRlcHRoMCAhPSBudWxsID8gZGVwdGgwLnBhZ2luYXRpb25EYXRhIDogZGVwdGgwKSkgIT0gbnVsbCA/IHN0YWNrMS5wcmV2UGFnZUxpbmtEaXNhYmxlZCA6IHN0YWNrMSkse1wibmFtZVwiOlwiRGlzYWJsZWRcIixcImhhc2hcIjp7fSxcImRhdGFcIjpkYXRhfSkpXG4gICAgKyBcIlxcclxcbiAgICAgICAgICAgIGFyaWEtbGFiZWw9XFxcIkdvIHRvIHRoZSBwcmV2aW91cyBwYWdlXFxcIiB0aXRsZT1cXFwiR28gdG8gdGhlIHByZXZpb3VzIHBhZ2VcXFwiIGRhdGEtcGFnZT1cXFwiXCJcbiAgICArIGFsaWFzMihfX2RlZmF1bHQocmVxdWlyZShcIkM6XFxcXFVzZXJzXFxcXHJvdXN0dXJnXFxcXFNvdXJjZVxcXFxSZXBvc1xcXFxTZWFyY2hNYXN0ZXJcXFxcR3JpZG9vXFxcXHNyY1xcXFxoYnNcXFxcaGVscGVyc1xcXFxtYXRoLnRzXCIpKS5jYWxsKGFsaWFzMywoKHN0YWNrMSA9IChkZXB0aDAgIT0gbnVsbCA/IGRlcHRoMC5wYWdpbmF0aW9uRGF0YSA6IGRlcHRoMCkpICE9IG51bGwgPyBzdGFjazEucGFnZUluZGV4IDogc3RhY2sxKSxcIi1cIiwxLHtcIm5hbWVcIjpcIm1hdGhcIixcImhhc2hcIjp7fSxcImRhdGFcIjpkYXRhfSkpXG4gICAgKyBcIlxcXCJcXHJcXG4gICAgICAgICAgICB0YWJpbmRleD1cXFwiMFxcXCI+XFxyXFxuICAgICAgICAgICAgPGkgY2xhc3M9XFxcImd1aS1pY29uIGd1aS1pY29uLWNoZXZyb24tbGVmdFxcXCI+PC9pPlxcclxcbiAgICAgICAgICAgIFByZXZcXHJcXG4gICAgICAgIDwvYnV0dG9uPlxcclxcbiAgICA8L3NwYW4+XFxyXFxuICAgIDxzcGFuIGNsYXNzPVxcXCJndWkgcGFnZXItaW5wdXQtY29udGFpbmVyIGlucHV0XFxcIj5cXHJcXG4gICAgICAgIDxzcGFuIGNsYXNzPVxcXCJndWkgbS1yLTVcXFwiPiBQYWdlIDwvc3Bhbj5cXHJcXG4gICAgICAgIDxpbnB1dCBjbGFzcz1cXFwiZ3VpIHBhZ2VyLWlucHV0IHctMjUgcC0wIG0tci01XFxcIiBhcmlhLWxhYmVsPVxcXCJcIlxuICAgICsgYWxpYXMyKGFsaWFzMSgoKHN0YWNrMSA9IChkZXB0aDAgIT0gbnVsbCA/IGRlcHRoMC5wYWdpbmF0aW9uRGF0YSA6IGRlcHRoMCkpICE9IG51bGwgPyBzdGFjazEucGFnZUluZGV4IDogc3RhY2sxKSwgZGVwdGgwKSlcbiAgICArIFwiXFxcIiB2YWx1ZT1cXFwiXCJcbiAgICArIGFsaWFzMihhbGlhczEoKChzdGFjazEgPSAoZGVwdGgwICE9IG51bGwgPyBkZXB0aDAucGFnaW5hdGlvbkRhdGEgOiBkZXB0aDApKSAhPSBudWxsID8gc3RhY2sxLnBhZ2VJbmRleCA6IHN0YWNrMSksIGRlcHRoMCkpXG4gICAgKyBcIlxcXCIgdHlwZT1cXFwidGV4dFxcXCIgcGxhY2Vob2xkZXI9XFxcIlBhZ2UgTnVtYmVyIC4uLlxcXCI+XFxyXFxuICAgICAgICA8c3BhbiBjbGFzcz1cXFwibm8tb2YtcGFnZXMtc2NhblxcXCIgZGF0YS1udW1iZXItb2YtcGFnZXM9XFxcIlwiXG4gICAgKyBhbGlhczIoYWxpYXMxKCgoc3RhY2sxID0gKGRlcHRoMCAhPSBudWxsID8gZGVwdGgwLnBhZ2luYXRpb25EYXRhIDogZGVwdGgwKSkgIT0gbnVsbCA/IHN0YWNrMS5ub09mUGFnZXMgOiBzdGFjazEpLCBkZXB0aDApKVxuICAgICsgXCJcXFwiPiBvZiBcIlxuICAgICsgYWxpYXMyKGFsaWFzMSgoKHN0YWNrMSA9IChkZXB0aDAgIT0gbnVsbCA/IGRlcHRoMC5wYWdpbmF0aW9uRGF0YSA6IGRlcHRoMCkpICE9IG51bGwgPyBzdGFjazEubm9PZlBhZ2VzIDogc3RhY2sxKSwgZGVwdGgwKSlcbiAgICArIFwiPC9zcGFuPlxcclxcbiAgICA8L3NwYW4+XFxyXFxuICAgIDxzcGFuIGNsYXNzPVxcXCJndWkgbWluaSBjb21wYWN0IFxcXCI+XFxyXFxuICAgICAgICA8YnV0dG9uIGNsYXNzPVxcXCJndWkgbWluaSBjb21wYWN0IG5leHRMaW5rXFxcIiBhcmlhLWRpc2FibGVkPVxcXCJcIlxuICAgICsgYWxpYXMyKGFsaWFzMSgoKHN0YWNrMSA9IChkZXB0aDAgIT0gbnVsbCA/IGRlcHRoMC5wYWdpbmF0aW9uRGF0YSA6IGRlcHRoMCkpICE9IG51bGwgPyBzdGFjazEubmV4dFBhZ2VMaW5rRGlzYWJsZWQgOiBzdGFjazEpLCBkZXB0aDApKVxuICAgICsgXCJcXFwiIFwiXG4gICAgKyBhbGlhczIoX19kZWZhdWx0KHJlcXVpcmUoXCJDOlxcXFxVc2Vyc1xcXFxyb3VzdHVyZ1xcXFxTb3VyY2VcXFxcUmVwb3NcXFxcU2VhcmNoTWFzdGVyXFxcXEdyaWRvb1xcXFxzcmNcXFxcaGJzXFxcXGhlbHBlcnNcXFxcRGlzYWJsZWQudHNcIikpLmNhbGwoYWxpYXMzLCgoc3RhY2sxID0gKGRlcHRoMCAhPSBudWxsID8gZGVwdGgwLnBhZ2luYXRpb25EYXRhIDogZGVwdGgwKSkgIT0gbnVsbCA/IHN0YWNrMS5uZXh0UGFnZUxpbmtEaXNhYmxlZCA6IHN0YWNrMSkse1wibmFtZVwiOlwiRGlzYWJsZWRcIixcImhhc2hcIjp7fSxcImRhdGFcIjpkYXRhfSkpXG4gICAgKyBcIlxcclxcbiAgICAgICAgICAgIGFyaWEtbGFiZWw9XFxcIkdvIHRvIHRoZSBuZXh0IHBhZ2VcXFwiIHRpdGxlPVxcXCJHbyB0byB0aGUgbmV4dCBwYWdlXFxcIiBkYXRhLXBhZ2U9XFxcIlwiXG4gICAgKyBhbGlhczIoX19kZWZhdWx0KHJlcXVpcmUoXCJDOlxcXFxVc2Vyc1xcXFxyb3VzdHVyZ1xcXFxTb3VyY2VcXFxcUmVwb3NcXFxcU2VhcmNoTWFzdGVyXFxcXEdyaWRvb1xcXFxzcmNcXFxcaGJzXFxcXGhlbHBlcnNcXFxcbWF0aC50c1wiKSkuY2FsbChhbGlhczMsKChzdGFjazEgPSAoZGVwdGgwICE9IG51bGwgPyBkZXB0aDAucGFnaW5hdGlvbkRhdGEgOiBkZXB0aDApKSAhPSBudWxsID8gc3RhY2sxLnBhZ2VJbmRleCA6IHN0YWNrMSksXCIrXCIsMSx7XCJuYW1lXCI6XCJtYXRoXCIsXCJoYXNoXCI6e30sXCJkYXRhXCI6ZGF0YX0pKVxuICAgICsgXCJcXFwiIHRhYmluZGV4PVxcXCIwXFxcIj5cXHJcXG4gICAgICAgICAgICBOZXh0XFxyXFxuICAgICAgICAgICAgPGkgY2xhc3M9XFxcImd1aS1pY29uIGd1aS1pY29uLWNoZXZyb24tcmlnaHRcXFwiPjwvaT5cXHJcXG4gICAgICAgIDwvYnV0dG9uPlxcclxcbiAgICAgICAgPGJ1dHRvbiBjbGFzcz1cXFwiZ3VpIG1pbmkgY29tcGFjdCBsYXN0TGlua1xcXCIgYXJpYS1kaXNhYmxlZD1cXFwiXCJcbiAgICArIGFsaWFzMihhbGlhczEoKChzdGFjazEgPSAoZGVwdGgwICE9IG51bGwgPyBkZXB0aDAucGFnaW5hdGlvbkRhdGEgOiBkZXB0aDApKSAhPSBudWxsID8gc3RhY2sxLmxhc3RQYWdlTGlua0Rpc2FibGVkIDogc3RhY2sxKSwgZGVwdGgwKSlcbiAgICArIFwiXFxcIiBcIlxuICAgICsgYWxpYXMyKF9fZGVmYXVsdChyZXF1aXJlKFwiQzpcXFxcVXNlcnNcXFxccm91c3R1cmdcXFxcU291cmNlXFxcXFJlcG9zXFxcXFNlYXJjaE1hc3RlclxcXFxHcmlkb29cXFxcc3JjXFxcXGhic1xcXFxoZWxwZXJzXFxcXERpc2FibGVkLnRzXCIpKS5jYWxsKGFsaWFzMywoKHN0YWNrMSA9IChkZXB0aDAgIT0gbnVsbCA/IGRlcHRoMC5wYWdpbmF0aW9uRGF0YSA6IGRlcHRoMCkpICE9IG51bGwgPyBzdGFjazEubGFzdFBhZ2VMaW5rRGlzYWJsZWQgOiBzdGFjazEpLHtcIm5hbWVcIjpcIkRpc2FibGVkXCIsXCJoYXNoXCI6e30sXCJkYXRhXCI6ZGF0YX0pKVxuICAgICsgXCJcXHJcXG4gICAgICAgICAgICAgICAgYXJpYS1sYWJlbD1cXFwiR28gdG8gdGhlIGxhc3QgcGFnZVxcXCIgdGl0bGU9XFxcIkdvIHRvIHRoZSBsYXN0IHBhZ2VcXFwiIGRhdGEtcGFnZT1cXFwiXCJcbiAgICArIGFsaWFzMihhbGlhczEoKChzdGFjazEgPSAoZGVwdGgwICE9IG51bGwgPyBkZXB0aDAucGFnaW5hdGlvbkRhdGEgOiBkZXB0aDApKSAhPSBudWxsID8gc3RhY2sxLm5vT0ZwYWdlcyA6IHN0YWNrMSksIGRlcHRoMCkpXG4gICAgKyBcIlxcXCIgdGFiaW5kZXg9XFxcIjBcXFwiPlxcclxcbiAgICAgICAgICAgIDxpIGNsYXNzPVxcXCJndWktaWNvbiBndWktaWNvbi1uZXh0XFxcIj48L2k+XFxyXFxuICAgICAgICA8L2J1dHRvbj5cXHJcXG4gICAgPC9zcGFuPlxcclxcbjwvZGl2PlxcclxcbjxkaXYgY2xhc3M9XFxcImd1aSBndWktc3ViaGVhZGluZy0xIHRleHQtcmlnaHQgbS0wXFxcIj5cXHJcXG4gICAgPHNwYW4+Um93cyBQZXIgUGFnZTwvc3Bhbj5cXHJcXG4gICAgPHNlbGVjdCBjbGFzcz1cXFwiZ3VpIHBhZ2VTaXplU2VsZWN0b3JcXFwiPlxcclxcblwiXG4gICAgKyAoKHN0YWNrMSA9IGhlbHBlcnMuZWFjaC5jYWxsKGFsaWFzMywoKHN0YWNrMSA9IChkZXB0aDAgIT0gbnVsbCA/IGRlcHRoMC5wYWdpbmF0aW9uRGF0YSA6IGRlcHRoMCkpICE9IG51bGwgPyBzdGFjazEucGFnZVNpemVzIDogc3RhY2sxKSx7XCJuYW1lXCI6XCJlYWNoXCIsXCJoYXNoXCI6e30sXCJmblwiOmNvbnRhaW5lci5wcm9ncmFtKDEsIGRhdGEsIDAsIGJsb2NrUGFyYW1zLCBkZXB0aHMpLFwiaW52ZXJzZVwiOmNvbnRhaW5lci5ub29wLFwiZGF0YVwiOmRhdGF9KSkgIT0gbnVsbCA/IHN0YWNrMSA6IFwiXCIpXG4gICAgKyBcIiAgICA8L3NlbGVjdD5cXHJcXG4gICAgPHNwYW4gY2xhc3M9XFxcImd1aSBtLWwtMTBcXFwiPlwiXG4gICAgKyBhbGlhczIoYWxpYXMxKCgoc3RhY2sxID0gKChzdGFjazEgPSAoZGVwdGgwICE9IG51bGwgPyBkZXB0aDAucGFnaW5hdGlvbkRhdGEgOiBkZXB0aDApKSAhPSBudWxsID8gc3RhY2sxLnJhbmdlIDogc3RhY2sxKSkgIT0gbnVsbCA/IHN0YWNrMS5taW4gOiBzdGFjazEpLCBkZXB0aDApKVxuICAgICsgXCIgLSBcIlxuICAgICsgYWxpYXMyKGFsaWFzMSgoKHN0YWNrMSA9ICgoc3RhY2sxID0gKGRlcHRoMCAhPSBudWxsID8gZGVwdGgwLnBhZ2luYXRpb25EYXRhIDogZGVwdGgwKSkgIT0gbnVsbCA/IHN0YWNrMS5yYW5nZSA6IHN0YWNrMSkpICE9IG51bGwgPyBzdGFjazEubWF4IDogc3RhY2sxKSwgZGVwdGgwKSlcbiAgICArIFwiIG9mIFwiXG4gICAgKyBhbGlhczIoYWxpYXMxKCgoc3RhY2sxID0gKGRlcHRoMCAhPSBudWxsID8gZGVwdGgwLnBhZ2luYXRpb25EYXRhIDogZGVwdGgwKSkgIT0gbnVsbCA/IHN0YWNrMS50b3RhbENvdW50IDogc3RhY2sxKSwgZGVwdGgwKSlcbiAgICArIFwiIGl0ZW1zPC9zcGFuPlxcclxcbjwvZGl2PlwiO1xufSxcInVzZURhdGFcIjp0cnVlLFwidXNlRGVwdGhzXCI6dHJ1ZX0pO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2hicy9ncmlkLWZvb3Rlci5oYnNcbi8vIG1vZHVsZSBpZCA9IDdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEiLCJjb25zdCBtYXRoID0gKGx2YWx1ZTogbnVtYmVyLCBvcGVyYXRvcjogc3RyaW5nLCBydmFsdWU6IG51bWJlciwgb3B0aW9ucyk6IG51bWJlciA9PiB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIFwiK1wiOiBsdmFsdWUgKyBydmFsdWUsXHJcbiAgICAgICAgXCItXCI6IGx2YWx1ZSAtIHJ2YWx1ZSxcclxuICAgICAgICBcIipcIjogbHZhbHVlICogcnZhbHVlLFxyXG4gICAgICAgIFwiL1wiOiBsdmFsdWUgLyBydmFsdWUsXHJcbiAgICAgICAgXCIlXCI6IGx2YWx1ZSAlIHJ2YWx1ZSxcclxuICAgIH1bb3BlcmF0b3JdO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgbWF0aDtcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL3RzbGludC1sb2FkZXI/P3JlZi0tMSEuL3NyYy9oYnMvaGVscGVycy9tYXRoLnRzIiwidmFyIEhhbmRsZWJhcnMgPSByZXF1aXJlKFwiaGFuZGxlYmFyc1wiKTtcbmZ1bmN0aW9uIF9fZGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiAob2JqLl9fZXNNb2R1bGUgPyBvYmpbXCJkZWZhdWx0XCJdIDogb2JqKTsgfVxubW9kdWxlLmV4cG9ydHMgPSAoSGFuZGxlYmFyc1tcImRlZmF1bHRcIl0gfHwgSGFuZGxlYmFycykudGVtcGxhdGUoe1wiMVwiOmZ1bmN0aW9uKGNvbnRhaW5lcixkZXB0aDAsaGVscGVycyxwYXJ0aWFscyxkYXRhKSB7XG4gICAgdmFyIHN0YWNrMSwgYWxpYXMxPWNvbnRhaW5lci5sYW1iZGEsIGFsaWFzMj1jb250YWluZXIuZXNjYXBlRXhwcmVzc2lvbjtcblxuICByZXR1cm4gXCI8dHIgY2xhc3M9XFxcIm1haW5Sb3dcXFwiIGRhdGEtcGstYXR0cj1cXFwiXCJcbiAgICArIGFsaWFzMihhbGlhczEoKGRlcHRoMCAhPSBudWxsID8gZGVwdGgwLmtleUNvbHVtbiA6IGRlcHRoMCksIGRlcHRoMCkpXG4gICAgKyBcIlxcXCIgPlxcclxcbiAgICA8dGQgY2xhc3M9XFxcImV4cGFuc2lvbkFycm93c1xcXCIgc3R5bGU9XFxcImRpc3BsYXk6ZmxleDtqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyO1xcXCI+XFxyXFxuICAgICAgICA8aSBjbGFzcz1cXFwiZ3VpIGd1aS1pY29uIGd1aS1pY29uLWNoZXZyb24tZG93biBleHBhbmREZXRhaWxzUm93SWNvbiBjdXJzb3ItcG9pbnRlclxcXCIgYXJpYS1oaWRkZW49XFxcInRydWVcXFwiPjwvaT5cXHJcXG4gICAgICAgIDxpIGNsYXNzPVxcXCJndWkgZ3VpLWljb24gZ3VpLWljb24tY2hldnJvbi11cCBDb2xsYXBzZURldGFpbHNSb3dJY29uIGN1cnNvci1wb2ludGVyIGd1aS1oaWRkZW5cXFwiIGFyaWEtaGlkZGVuPVxcXCJ0cnVlXFxcIj48L2k+XFxyXFxuICAgIDwvdGQ+XFxyXFxuICAgIDx0ZD5cXHJcXG4gICAgICAgIDxpbnB1dCB0eXBlPVxcXCJjaGVja2JveFxcXCIgZGF0YS12YWx1ZT1cXFwiXCJcbiAgICArIGFsaWFzMihhbGlhczEoKGRlcHRoMCAhPSBudWxsID8gZGVwdGgwLnJvd0RhdGEgOiBkZXB0aDApLCBkZXB0aDApKVxuICAgICsgXCJcXFwiIHZhbHVlPVxcXCJcIlxuICAgICsgYWxpYXMyKGFsaWFzMSgoZGVwdGgwICE9IG51bGwgPyBkZXB0aDAua2V5Q29sdW1uIDogZGVwdGgwKSwgZGVwdGgwKSlcbiAgICArIFwiXFxcIiBjbGFzcz1cXFwic2VsZWN0LWtleS1jaGVja2JveCBjdXJzb3ItcG9pbnRlclxcXCI+XFxyXFxuICAgIDwvdGQ+XFxyXFxuXCJcbiAgICArICgoc3RhY2sxID0gaGVscGVycy5lYWNoLmNhbGwoZGVwdGgwICE9IG51bGwgPyBkZXB0aDAgOiAoY29udGFpbmVyLm51bGxDb250ZXh0IHx8IHt9KSwoZGVwdGgwICE9IG51bGwgPyBkZXB0aDAubWFpblJvd0NvbEFycmF5IDogZGVwdGgwKSx7XCJuYW1lXCI6XCJlYWNoXCIsXCJoYXNoXCI6e30sXCJmblwiOmNvbnRhaW5lci5wcm9ncmFtKDIsIGRhdGEsIDApLFwiaW52ZXJzZVwiOmNvbnRhaW5lci5ub29wLFwiZGF0YVwiOmRhdGF9KSkgIT0gbnVsbCA/IHN0YWNrMSA6IFwiXCIpXG4gICAgKyBcIjwvdHI+XFxyXFxuXCJcbiAgICArICgoc3RhY2sxID0gY29udGFpbmVyLmludm9rZVBhcnRpYWwocmVxdWlyZShcIkM6XFxcXFVzZXJzXFxcXHJvdXN0dXJnXFxcXFNvdXJjZVxcXFxSZXBvc1xcXFxTZWFyY2hNYXN0ZXJcXFxcR3JpZG9vXFxcXHNyY1xcXFxoYnNcXFxcZ3JpZC1kZXRhaWxzLXJvdy5oYnNcIiksZGVwdGgwLHtcIm5hbWVcIjpcImdyaWQtZGV0YWlscy1yb3dcIixcImRhdGFcIjpkYXRhLFwiaGVscGVyc1wiOmhlbHBlcnMsXCJwYXJ0aWFsc1wiOnBhcnRpYWxzLFwiZGVjb3JhdG9yc1wiOmNvbnRhaW5lci5kZWNvcmF0b3JzfSkpICE9IG51bGwgPyBzdGFjazEgOiBcIlwiKVxuICAgICsgXCIgXCI7XG59LFwiMlwiOmZ1bmN0aW9uKGNvbnRhaW5lcixkZXB0aDAsaGVscGVycyxwYXJ0aWFscyxkYXRhKSB7XG4gICAgdmFyIHN0YWNrMSwgYWxpYXMxPWNvbnRhaW5lci5sYW1iZGEsIGFsaWFzMj1jb250YWluZXIuZXNjYXBlRXhwcmVzc2lvbjtcblxuICByZXR1cm4gXCIgICAgICAgIDx0ZCB0aXRsZT1cXFwiXCJcbiAgICArIGFsaWFzMihhbGlhczEoKGRlcHRoMCAhPSBudWxsID8gZGVwdGgwLmFjdHVhbFZhbHVlIDogZGVwdGgwKSwgZGVwdGgwKSlcbiAgICArIFwiXFxcIiBjbGFzcz1cXFwiYm9keS1cIlxuICAgICsgYWxpYXMyKGFsaWFzMSgoZGVwdGgwICE9IG51bGwgPyBkZXB0aDAuaWQgOiBkZXB0aDApLCBkZXB0aDApKVxuICAgICsgXCJcXFwiPlwiXG4gICAgKyAoKHN0YWNrMSA9IGFsaWFzMSgoZGVwdGgwICE9IG51bGwgPyBkZXB0aDAuY29sdW1uVmFsdWUgOiBkZXB0aDApLCBkZXB0aDApKSAhPSBudWxsID8gc3RhY2sxIDogXCJcIilcbiAgICArIFwiPC90ZD5cXHJcXG5cIjtcbn0sXCJjb21waWxlclwiOls3LFwiPj0gNC4wLjBcIl0sXCJtYWluXCI6ZnVuY3Rpb24oY29udGFpbmVyLGRlcHRoMCxoZWxwZXJzLHBhcnRpYWxzLGRhdGEpIHtcbiAgICB2YXIgc3RhY2sxO1xuXG4gIHJldHVybiAoKHN0YWNrMSA9IGhlbHBlcnMuZWFjaC5jYWxsKGRlcHRoMCAhPSBudWxsID8gZGVwdGgwIDogKGNvbnRhaW5lci5udWxsQ29udGV4dCB8fCB7fSksKGRlcHRoMCAhPSBudWxsID8gZGVwdGgwLm1haW5Sb3dBcnJheSA6IGRlcHRoMCkse1wibmFtZVwiOlwiZWFjaFwiLFwiaGFzaFwiOnt9LFwiZm5cIjpjb250YWluZXIucHJvZ3JhbSgxLCBkYXRhLCAwKSxcImludmVyc2VcIjpjb250YWluZXIubm9vcCxcImRhdGFcIjpkYXRhfSkpICE9IG51bGwgPyBzdGFjazEgOiBcIlwiKTtcbn0sXCJ1c2VQYXJ0aWFsXCI6dHJ1ZSxcInVzZURhdGFcIjp0cnVlfSk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvaGJzL2dyaWQtbWFpbi1yb3cuaGJzXG4vLyBtb2R1bGUgaWQgPSA5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIiwiaW1wb3J0ICogYXMgalF1ZXJ5IGZyb20gXCJqcXVlcnlcIjtcbmltcG9ydCB7IENvbmZpZ1N0b3JlIH0gZnJvbSBcIi4uL2NvbmZpZy9Db25maWdTdG9yZVwiO1xuaW1wb3J0IHsgQ29sU2V0dGluZ3NIYW5kbGVyIH0gZnJvbSBcIi4uL2V2ZW50SGFuZGxlcnMvQ29sU2V0dGluZ3NIYW5kbGVyXCI7XG5pbXBvcnQgeyBTZWxlY3RFdmVudEhhbmRsZXIgfSBmcm9tIFwiLi4vZXZlbnRIYW5kbGVycy9TZWxlY3RFdmVudEhhbmRsZXJcIjtcbmltcG9ydCB7IElHcmlkT3JkZXIgfSBmcm9tIFwiLi4vbW9kZWxzL0lHcmlkT3JkZXJcIjtcbmltcG9ydCB7IElQYWdpbmF0aW9uIH0gZnJvbSBcIi4uL21vZGVscy9JUGFnaW5hdGlvblwiO1xuaW1wb3J0IHsgSVBhZ2luYXRpb25JbnB1dCB9IGZyb20gXCIuLi9tb2RlbHMvSVBhZ2luYXRpb25JbnB1dFwiO1xuaW1wb3J0IHsgUGFnZXIgfSBmcm9tIFwiLi4vcGFnaW5hdGlvbi9QYWdlclwiO1xuaW1wb3J0IHsgRGV0YWlsc1Jvd0hhbmRsZXIgfSBmcm9tIFwiLi8uLi9ldmVudEhhbmRsZXJzL0RldGFpbHNSb3dIYW5kbGVyXCI7XG5pbXBvcnQgeyBGaWx0ZXJDbGlja0hhbmRsZXIgfSBmcm9tIFwiLi8uLi9ldmVudEhhbmRsZXJzL0ZpbHRlckNsaWNrSGFuZGxlclwiO1xuaW1wb3J0IHsgSGFuZGxlck5hbWVzIH0gZnJvbSBcIi4vLi4vZXZlbnRIYW5kbGVycy9IYW5kbGVyTmFtZXNcIjtcbmltcG9ydCB7IEhlYWRlckNsaWNrSGFuZGxlciB9IGZyb20gXCIuLy4uL2V2ZW50SGFuZGxlcnMvSGVhZGVyQ2xpY2tIYW5kbGVyXCI7XG5pbXBvcnQgeyBJRXZlbnRIYW5kbGVyIH0gZnJvbSBcIi4vLi4vZXZlbnRIYW5kbGVycy9JRXZlbnRIYW5kbGVyXCI7XG5pbXBvcnQgeyBJSGFuZGxlckNoYWluIH0gZnJvbSBcIi4vLi4vZXZlbnRIYW5kbGVycy9JSGFuZGxlckNoYWluXCI7XG5pbXBvcnQgeyBQYWdlU2VhcmNoSGFuZGxlciB9IGZyb20gXCIuLy4uL2V2ZW50SGFuZGxlcnMvUGFnZVNlYXJjaENsaWNrSGFuZGxlclwiO1xuaW1wb3J0IHsgU2Nyb2xsSGFuZGxlciB9IGZyb20gXCIuLy4uL2V2ZW50SGFuZGxlcnMvU2Nyb2xsSGFuZGxlclwiO1xuaW1wb3J0IHsgVG9nZ2xlQ29sdW1uSGFuZGxlciB9IGZyb20gXCIuLy4uL2V2ZW50SGFuZGxlcnMvVG9nZ2xlQ29sdW1uSGFuZGxlclwiO1xuaW1wb3J0IHsgRmlsdGVyQWN0aW9uVHlwZSB9IGZyb20gXCIuLy4uL21vZGVscy9GaWx0ZXJBY3Rpb25UeXBlXCI7XG5pbXBvcnQgeyBHcmlkT3JkZXJEaXJlY3Rpb24gfSBmcm9tIFwiLi8uLi9tb2RlbHMvR3JpZE9yZGVyRGlyZWN0aW9uXCI7XG5pbXBvcnQgeyBJQ29sdW1uIH0gZnJvbSBcIi4vLi4vbW9kZWxzL0lDb2x1bW5cIjtcbmltcG9ydCB7IEdyaWRUZW1wbGF0ZVNlcnZpY2UgfSBmcm9tIFwiLi8uLi9zZXJ2aWNlcy9HcmlkVGVtcGxhdGVTZXJ2aWNlXCI7XG5pbXBvcnQgeyBDb21tb25VdGlsIH0gZnJvbSBcIi4vLi4vdXRpbC9Db2x1bW5VdGlsXCI7XG5pbXBvcnQgeyBJR3JpZE9wdGlvbnMgfSBmcm9tIFwiLi9JR3JpZE9wdGlvbnNcIjtcblxuZXhwb3J0IGNsYXNzIEdyaWQ8VD4ge1xuXG4gICAgcHJpdmF0ZSBoYW5kbGVDaGFpbjogQXJyYXk8SUhhbmRsZXJDaGFpbjxUPj47XG4gICAgcHJpdmF0ZSBncmlkVGVtcGxhdGVTZXJ2aWNlOiBHcmlkVGVtcGxhdGVTZXJ2aWNlPFQ+O1xuICAgIHByaXZhdGUgY29uZmlnU3RvcmU6IENvbmZpZ1N0b3JlPFQ+O1xuICAgIHByaXZhdGUgdG9nZ2xlSGFuZGxlcjogVG9nZ2xlQ29sdW1uSGFuZGxlcjxUPjtcbiAgICBwcml2YXRlIHNjcm9sbEhhbmRsZXI6IFNjcm9sbEhhbmRsZXI8VD47XG4gICAgcHJpdmF0ZSBtYW5hZ2VDb2xIYW5kbGVyOiBDb2xTZXR0aW5nc0hhbmRsZXI8VD47XG5cbiAgICBjb25zdHJ1Y3RvcihvcHRpb25zOiBJR3JpZE9wdGlvbnM8VD4pIHtcbiAgICAgICAgdGhpcy5jb25maWdTdG9yZSA9IG5ldyBDb25maWdTdG9yZTxUPihvcHRpb25zKTtcbiAgICAgICAgdGhpcy5ncmlkVGVtcGxhdGVTZXJ2aWNlID0gbmV3IEdyaWRUZW1wbGF0ZVNlcnZpY2UodGhpcy5jb25maWdTdG9yZSk7XG4gICAgICAgIHRoaXMuSW5pdEhhbmRsZXJzKCk7XG4gICAgfVxuXG4gICAgcHVibGljIGJpbmREYXRhID0gKGRhdGE6IFRbXSwgcGFnaW5hdGlvbklucHV0PzogSVBhZ2luYXRpb25JbnB1dCk6IHZvaWQgPT4ge1xuICAgICAgICBjb25zdCBmaXJzdEluZGV4ID0gMDtcbiAgICAgICAgbGV0IGxhc3RJbmRleCA9IHRoaXMuY29uZmlnU3RvcmUuT3B0aW9ucy5jaHVua1NpemUgKyB0aGlzLmdldEluaXRpYWxSb3dDb3VudCgpO1xuICAgICAgICBsYXN0SW5kZXggPSBsYXN0SW5kZXggPj0gZGF0YS5sZW5ndGggPyBkYXRhLmxlbmd0aCAtIDEgOiBsYXN0SW5kZXg7XG4gICAgICAgIFBhZ2VyLkNhbGN1bGF0ZVBhZ2luYXRpb25EYXRhKHBhZ2luYXRpb25JbnB1dCk7XG4gICAgICAgIGNvbnN0IGdyaWRDb250ZW50OiBzdHJpbmcgPSB0aGlzLmdyaWRUZW1wbGF0ZVNlcnZpY2UuR2V0Rmlyc3RUZW1wbGF0ZShkYXRhLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlyc3RJbmRleCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhc3RJbmRleCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgIHRoaXMuY29uZmlnU3RvcmUuT3B0aW9ucy5jb250YWluZXJFbGVtZW50LmlubmVySFRNTCA9IGdyaWRDb250ZW50O1xuICAgICAgICBpZiAodGhpcy5jb25maWdTdG9yZS5PcHRpb25zLm1hbmFnZUNvbFNldHRpbmdzQ29udGFpbmVyICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHRoaXMuYmluZE1hbmFnZUNvbHVtcyh0aGlzLmNvbmZpZ1N0b3JlLk9wdGlvbnMubWFuYWdlQ29sU2V0dGluZ3NDb250YWluZXIpO1xuICAgICAgICB9XG4gICAgICAgIC8vIEhhdmUgdG8gYmluZCBTY3JvbGwgSGFuZGxlciBBZnRlciBET00gaGFzIGJlZW4gY3JlYXRlZFxuICAgICAgICBpZiAoIHRoaXMuc2Nyb2xsSGFuZGxlciAhPT0gdW5kZWZpbmVkICYmIHRoaXMuc2Nyb2xsSGFuZGxlciAhPT0gbnVsbCApIHtcbiAgICAgICAgICAgIHRoaXMuc2Nyb2xsSGFuZGxlci5yZW1vdmVIYW5kbGVyKCk7XG4gICAgICAgICAgICB0aGlzLnNjcm9sbEhhbmRsZXIucmVzZXRQYXJlbnRPZmZzZXQoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuc2Nyb2xsSGFuZGxlciA9IG5ldyBTY3JvbGxIYW5kbGVyPFQ+KHRoaXMuY29uZmlnU3RvcmUsIHRoaXMuZ3JpZFRlbXBsYXRlU2VydmljZSwgbGFzdEluZGV4ICsgMSk7XG4gICAgICAgICAgICB0aGlzLnNjcm9sbEhhbmRsZXIud2F0Y2hXaWR0aCgpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuc2Nyb2xsSGFuZGxlci5SZWdpc3RlckRvbUhhbmRsZXIoKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgYmluZE1hbmFnZUNvbHVtcyA9IChtYW5hZ2VDb2xDb250YWluZXI/OiBIVE1MRWxlbWVudCwgZm9yY2U/OiBib29sZWFuKTogdm9pZCA9PiB7XG4gICAgICAgIGlmICh0aGlzLm1hbmFnZUNvbEhhbmRsZXIgIT09IHVuZGVmaW5lZCAmJiAhZm9yY2UgKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgaHRtbCA9IHRoaXMuZ3JpZFRlbXBsYXRlU2VydmljZS5HZXRNYW5hZ2VDb2x1bW5zSHRtbCgpO1xuICAgICAgICBjb25zdCBlbGVtZW50ID0galF1ZXJ5KG1hbmFnZUNvbENvbnRhaW5lclxuICAgICAgICAgICAgICAgICAgICAgICAgfHwgdGhpcy5jb25maWdTdG9yZS5PcHRpb25zLm1hbmFnZUNvbFNldHRpbmdzQ29udGFpbmVyXG4gICAgICAgICAgICAgICAgICAgICAgICB8fCB0aGlzLmNvbmZpZ1N0b3JlLk9wdGlvbnMuY29udGFpbmVyRWxlbWVudCk7XG4gICAgICAgIHRoaXMudG9nZ2xlSGFuZGxlciA9IG5ldyBUb2dnbGVDb2x1bW5IYW5kbGVyKHRoaXMuY29uZmlnU3RvcmUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGpRdWVyeSh0aGlzLmNvbmZpZ1N0b3JlLk9wdGlvbnMuY29udGFpbmVyRWxlbWVudCkpO1xuICAgICAgICB0aGlzLmNvbmZpZ1N0b3JlLm9wdGlvbnMubWFuYWdlQ29sU2V0dGluZ3NDb250YWluZXIgPSBlbGVtZW50WzBdO1xuICAgICAgICB0aGlzLm1hbmFnZUNvbEhhbmRsZXIgPSBuZXcgQ29sU2V0dGluZ3NIYW5kbGVyPFQ+KGpRdWVyeShlbGVtZW50KSwgdGhpcy5jb25maWdTdG9yZSwgdGhpcy50b2dnbGVIYW5kbGVyKTtcbiAgICAgICAgZWxlbWVudC5maW5kKFwiLmNvbC1zZXR0aW5ncy1jb250YWluZXJcIikuaHRtbChodG1sKTtcbiAgICAgICAgdGhpcy5tYW5hZ2VDb2xIYW5kbGVyLlJlZ2lzdGVyRG9tSGFuZGxlcigpO1xuICAgICAgICBqUXVlcnkod2luZG93KS5yZXNpemUodGhpcy5kb2N1bWVudFJlc2l6ZUhhbmRsZXJGb3JDcyk7XG4gICAgICAgIGpRdWVyeShkb2N1bWVudCkuY2xpY2sodGhpcy5kb2N1bWVudENsaWNrSGFuZGxlckZvckNzKTtcbiAgICB9XG4gICAgcHVibGljIGFwcGx5Q29sdW1uQ29uZmlnID0gKGNvbHVtbnM6IElDb2x1bW5bXSkgPT4ge1xuICAgICAgICB0aGlzLnRvZ2dsZUhhbmRsZXIuYXBwbHlDb2x1bW5Db25maWcoY29sdW1ucyk7XG4gICAgICAgIGNvbnN0IGh0bWwgPSB0aGlzLmdyaWRUZW1wbGF0ZVNlcnZpY2UuR2V0TWFuYWdlQ29sdW1uc0h0bWwoKTtcbiAgICAgICAgY29uc3QgZWxlbWVudCA9IGpRdWVyeSh0aGlzLmNvbmZpZ1N0b3JlLk9wdGlvbnMubWFuYWdlQ29sU2V0dGluZ3NDb250YWluZXJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHx8IHRoaXMuY29uZmlnU3RvcmUuT3B0aW9ucy5jb250YWluZXJFbGVtZW50KTtcbiAgICAgICAgZWxlbWVudC5maW5kKFwiLmNvbC1zZXR0aW5ncy1jb250YWluZXJcIikuaHRtbChodG1sKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgc2V0T3JkZXIgPSAob3JkZXJCeUxpc3Q6IElHcmlkT3JkZXJbXSkgPT4ge1xuICAgICAgICBmb3IgKGNvbnN0IGNvbCBvZiB0aGlzLmNvbmZpZ1N0b3JlLk9wdGlvbnMuY29sdW1ucykge1xuICAgICAgICAgICAgY29sLm9yZGVyID0gdW5kZWZpbmVkO1xuICAgICAgICB9XG4gICAgICAgIGlmIChvcmRlckJ5TGlzdCA9PT0gdW5kZWZpbmVkIHx8IG9yZGVyQnlMaXN0ID09PSBudWxsIHx8IG9yZGVyQnlMaXN0Lmxlbmd0aCA9PT0gMCApIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBmb3IgKGNvbnN0IG9yZGVyQ29sIG9mIG9yZGVyQnlMaXN0KSB7XG4gICAgICAgICAgICBmb3IgKGNvbnN0IGNvbCBvZiB0aGlzLmNvbmZpZ1N0b3JlLk9wdGlvbnMuY29sdW1ucykge1xuICAgICAgICAgICAgICAgIGlmIChvcmRlckNvbC5jb2xJZCA9PT0gY29sLmlkICkge1xuICAgICAgICAgICAgICAgICAgICBjb2wub3JkZXIgPSBvcmRlckNvbC5vcmRlcjtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHVibGljIGRlc3Ryb3kgPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IHBhcmVudEVsZW1lbnQgPSBqUXVlcnkodGhpcy5jb25maWdTdG9yZS5PcHRpb25zLmNvbnRhaW5lckVsZW1lbnQpO1xuICAgICAgICBpZiAoIHBhcmVudEVsZW1lbnQgIT09IHVuZGVmaW5lZCApIHtcbiAgICAgICAgICAgIHBhcmVudEVsZW1lbnQub2ZmKCk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgbWFuYWdlQ29udGFpbmVyRWxlbWVudCA9IGpRdWVyeSh0aGlzLmNvbmZpZ1N0b3JlLk9wdGlvbnMubWFuYWdlQ29sU2V0dGluZ3NDb250YWluZXIpO1xuICAgICAgICBpZiAoIG1hbmFnZUNvbnRhaW5lckVsZW1lbnQgIT09IHVuZGVmaW5lZCApIHtcbiAgICAgICAgICAgIG1hbmFnZUNvbnRhaW5lckVsZW1lbnQub2ZmKCk7XG4gICAgICAgIH1cbiAgICAgICAgJCh3aW5kb3cpLm9mZihcInJlc2l6ZVwiLCB0aGlzLmRvY3VtZW50UmVzaXplSGFuZGxlcik7XG4gICAgICAgICQoZG9jdW1lbnQpLm9mZihcImNsaWNrXCIsIHRoaXMuZG9jdW1lbnRDbGlja0hhbmRsZXIpO1xuICAgICAgICAkKHdpbmRvdykub2ZmKFwicmVzaXplXCIsIHRoaXMuZG9jdW1lbnRSZXNpemVIYW5kbGVyRm9yQ3MpO1xuICAgICAgICAkKGRvY3VtZW50KS5vZmYoXCJjbGlja1wiLCB0aGlzLmRvY3VtZW50Q2xpY2tIYW5kbGVyRm9yQ3MpO1xuICAgICAgICBpZiAoIHRoaXMuc2Nyb2xsSGFuZGxlciAhPT0gdW5kZWZpbmVkICkge1xuICAgICAgICAgICAgdGhpcy5zY3JvbGxIYW5kbGVyLnVuV2F0Y2hXaWR0aCgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBnZXRJbml0aWFsUm93Q291bnQgPSAoKTogbnVtYmVyID0+IHtcbiAgICAgICAgcmV0dXJuIE1hdGguZmxvb3IoKGpRdWVyeSh3aW5kb3cpLmlubmVySGVpZ2h0KCkgKiAwLjY1ICkgLyAzMik7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBJbml0SGFuZGxlcnMgPSAoKTogdm9pZCA9PiB7XG4gICAgICAgIGNvbnN0IHBhcmVudEVsZW1lbnQgPSBqUXVlcnkodGhpcy5jb25maWdTdG9yZS5PcHRpb25zLmNvbnRhaW5lckVsZW1lbnQpO1xuICAgICAgICB0aGlzLmhhbmRsZUNoYWluID0gW107XG4gICAgICAgIHRoaXMuaGFuZGxlQ2hhaW4ucHVzaCh7XG4gICAgICAgICAgICBoYW5kbGVyOiBuZXcgRGV0YWlsc1Jvd0hhbmRsZXI8VD4odGhpcy5jb25maWdTdG9yZSwgcGFyZW50RWxlbWVudCksXG4gICAgICAgICAgICBuYW1lOiBIYW5kbGVyTmFtZXMuRGV0YWlsc1JvdyxcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuaGFuZGxlQ2hhaW4ucHVzaCh7XG4gICAgICAgICAgICBoYW5kbGVyOiAgbmV3IEZpbHRlckNsaWNrSGFuZGxlcjxUPih0aGlzLmNvbmZpZ1N0b3JlLCBwYXJlbnRFbGVtZW50KSxcbiAgICAgICAgICAgIG5hbWU6IEhhbmRsZXJOYW1lcy5GaWx0ZXJBY3Rpb24sXG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLmhhbmRsZUNoYWluLnB1c2goe1xuICAgICAgICAgICAgaGFuZGxlcjogbmV3IEhlYWRlckNsaWNrSGFuZGxlcjxUPih0aGlzLmNvbmZpZ1N0b3JlLCBwYXJlbnRFbGVtZW50KSxcbiAgICAgICAgICAgIG5hbWU6IEhhbmRsZXJOYW1lcy5IZWFkZXJDbGljayxcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuaGFuZGxlQ2hhaW4ucHVzaCh7XG4gICAgICAgICAgICBoYW5kbGVyOiBuZXcgUGFnZVNlYXJjaEhhbmRsZXI8VD4odGhpcy5jb25maWdTdG9yZSwgcGFyZW50RWxlbWVudCksXG4gICAgICAgICAgICBuYW1lOiBIYW5kbGVyTmFtZXMuUGFnZVNlYXJjaCxcbiAgICAgICAgfSk7XG4gICAgICAgIGNvbnN0IGNvbnRhaW5lciA9IHBhcmVudEVsZW1lbnQ7XG4gICAgICAgIHRoaXMuaGFuZGxlQ2hhaW4ucHVzaCh7XG4gICAgICAgICAgICBoYW5kbGVyOiBuZXcgU2VsZWN0RXZlbnRIYW5kbGVyPFQ+KHRoaXMuY29uZmlnU3RvcmUsIHBhcmVudEVsZW1lbnQsIHRoaXMuZ3JpZFRlbXBsYXRlU2VydmljZSksXG4gICAgICAgICAgICBuYW1lOiBIYW5kbGVyTmFtZXMuQ29sU2V0dGluZ3MsXG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLmhhbmRsZUNoYWluLmZvckVhY2goKHZhbHVlOiBJSGFuZGxlckNoYWluPFQ+KTogdm9pZCA9PiB7XG4gICAgICAgICAgICB2YWx1ZS5oYW5kbGVyLlJlZ2lzdGVyRG9tSGFuZGxlcigpO1xuICAgICAgICB9KTtcbiAgICAgICAgalF1ZXJ5KHdpbmRvdykucmVzaXplKHRoaXMuZG9jdW1lbnRSZXNpemVIYW5kbGVyKTtcbiAgICAgICAgalF1ZXJ5KGRvY3VtZW50KS5jbGljayh0aGlzLmRvY3VtZW50Q2xpY2tIYW5kbGVyKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGRvY3VtZW50UmVzaXplSGFuZGxlckZvckNzID0gKGV2ZW50KSA9PiB7XG4gICAgICAgIHRoaXMubWFuYWdlQ29sSGFuZGxlci5vblJlc2l6ZSgpO1xuICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICB9XG4gICAgcHJpdmF0ZSBkb2N1bWVudENsaWNrSGFuZGxlckZvckNzID0gKGV2ZW50KSA9PiB7XG4gICAgICAgIHRoaXMubWFuYWdlQ29sSGFuZGxlci5vbkRvY3VtZW50Q2xpY2soZXZlbnQpO1xuICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICB9XG4gICAgcHJpdmF0ZSBkb2N1bWVudFJlc2l6ZUhhbmRsZXJGb3JTY3JvbGwgPSAoZXZlbnQpID0+IHtcbiAgICAgICAgdGhpcy5tYW5hZ2VDb2xIYW5kbGVyLm9uUmVzaXplKCk7XG4gICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIH1cbiAgICBwcml2YXRlIGRvY3VtZW50Q2xpY2tIYW5kbGVyID0gKGV2ZW50KSA9PiB7XG4gICAgICAgIHRoaXMuaGFuZGxlQ2hhaW4uZm9yRWFjaCgodmFsdWU6IElIYW5kbGVyQ2hhaW48VD4pOiB2b2lkID0+IHtcbiAgICAgICAgICAgIHZhbHVlLmhhbmRsZXIub25Eb2N1bWVudENsaWNrKGV2ZW50KTtcbiAgICAgICAgfSk7XG4gICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIH1cbiAgICBwcml2YXRlIGRvY3VtZW50UmVzaXplSGFuZGxlciA9IChldmVudCkgPT4ge1xuICAgICAgICB0aGlzLmhhbmRsZUNoYWluLmZvckVhY2goKHZhbHVlOiBJSGFuZGxlckNoYWluPFQ+KTogdm9pZCA9PiB7XG4gICAgICAgICAgICB2YWx1ZS5oYW5kbGVyLm9uRG9jdW1lbnRDbGljayhldmVudCk7XG4gICAgICAgIH0pO1xuICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICB9XG5cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy90c2xpbnQtbG9hZGVyPz9yZWYtLTEhLi9zcmMvanMvbWFpbi9HcmlkLnRzIiwiaW1wb3J0IHsgSUdyaWRPcHRpb25zIH0gZnJvbSBcIi4uL21haW4vSUdyaWRPcHRpb25zXCI7XHJcbmltcG9ydCB7IEZpbHRlckFjdGlvblR5cGUgfSBmcm9tIFwiLi4vbW9kZWxzL0ZpbHRlckFjdGlvblR5cGVcIjtcclxuaW1wb3J0IHsgR3JpZE9yZGVyRGlyZWN0aW9uIH0gZnJvbSBcIi4uL21vZGVscy9HcmlkT3JkZXJEaXJlY3Rpb25cIjtcclxuaW1wb3J0IHsgSUNvbHVtbiB9IGZyb20gXCIuLi9tb2RlbHMvSUNvbHVtblwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIENvbmZpZ1N0b3JlPFQ+IHtcclxuICAgIHB1YmxpYyBvcHRpb25zOiBJR3JpZE9wdGlvbnM8VD47XHJcbiAgICBwcml2YXRlIGRlZmF1bHRHcmlkT3B0aW9uczogSUdyaWRPcHRpb25zPFQ+ID0ge1xyXG4gICAgICAgIGFuaW1hdGlvblRpbWU6IDIwMCxcclxuICAgICAgICBjaHVua1NpemU6IDUsXHJcbiAgICAgICAgY29sdW1uczogW10sXHJcbiAgICAgICAgY29udGFpbmVyRWxlbWVudDogbnVsbCxcclxuICAgICAgICBtYW5hZ2VDb2xTZXR0aW5nc0NvbnRhaW5lcjogbnVsbCxcclxuICAgICAgICBoeWJyaWRGdW5jdGlvbjogKGNvbHVtbjogSUNvbHVtbiwgcm93OiBUKTogc3RyaW5nID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIFwidHJ1ZVwiO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAga2V5Q29sdW1uOiBcIlwiLFxyXG4gICAgICAgIG9uQ29sU2V0dGluZ3NDaGFuZ2U6IChjb2xDb25maWc6IElDb2x1bW5bXSk6IHZvaWQgPT4ge1xyXG4gICAgICAgICAgICAvLyBObyBDb2RlXHJcbiAgICAgICAgfSxcclxuICAgICAgICBvbkNsaWNrRmlsdGVyOiAoY29sdW1uOiBzdHJpbmcsIHZhbHVlOiBhbnksIGFjdGlvblR5cGU6IEZpbHRlckFjdGlvblR5cGUpOiB2b2lkID0+IHtcclxuICAgICAgICAgICAgLy8gTm8gY29kZVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgb25DbGlja0hlYWRlcjogKGNvbHVtbjogc3RyaW5nLCBkaXJlY3Rpb246IEdyaWRPcmRlckRpcmVjdGlvbik6IHZvaWQgPT4ge1xyXG4gICAgICAgICAgICAvLyBObyBjb2RlXHJcbiAgICAgICAgfSxcclxuICAgICAgICBvblBhZ2VTZWFyY2g6IChwYWdlU2l6ZTogbnVtYmVyLCBwYWdlSW5kZXg6IG51bWJlcik6IHZvaWQgPT4ge1xyXG4gICAgICAgICAgICAvLyBObyBjb2RlXHJcbiAgICAgICAgfSxcclxuICAgICAgICBvblNlbGVjdDogKHJvd3M6IFRbXSk6IHZvaWQgPT4ge1xyXG4gICAgICAgICAgICAvLyBObyBDb2RlXHJcbiAgICAgICAgfSxcclxuICAgIH07XHJcbiAgICBjb25zdHJ1Y3RvcihvcHRpb25zOiBJR3JpZE9wdGlvbnM8VD4pIHtcclxuICAgICAgICB0aGlzLmV4dGVuZE9wdGlvbnMob3B0aW9ucyk7XHJcbiAgICAgICAgaWYgKG9wdGlvbnMuY29udGFpbmVyRWxlbWVudCA9PT0gbnVsbCkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJQbGVhc2UgUHJvdmlkZSBhIHZhbGlkIGNvbnRhaW5lciBFbGVtZW50IG9iamVjdFwiKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgc2V0IE9wdGlvbnMob3B0aW9uczogSUdyaWRPcHRpb25zPFQ+KSB7XHJcbiAgICAgICAgdGhpcy5vcHRpb25zID0gb3B0aW9ucztcclxuICAgIH1cclxuICAgIHB1YmxpYyBnZXQgT3B0aW9ucygpOiBJR3JpZE9wdGlvbnM8VD4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLm9wdGlvbnM7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgU2V0SGlkZGVuT25Db25maWcgPSAoYm9vbDogYm9vbGVhbiwgY29sdW1uSWQ/OiBzdHJpbmcpOiB2b2lkID0+IHtcclxuICAgICAgICBmb3IgKGNvbnN0IGNvbCBvZiB0aGlzLk9wdGlvbnMuY29sdW1ucykge1xyXG4gICAgICAgICAgICBpZiAoY29sdW1uSWQgPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgY29sLmhpZGRlbiA9IGJvb2w7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoY29sLmlkID09PSBjb2x1bW5JZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbC5oaWRkZW4gPSBib29sO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcHJpdmF0ZSBleHRlbmRPcHRpb25zID0gKGlucHV0T3B0aW9uczogSUdyaWRPcHRpb25zPFQ+KTogSUdyaWRPcHRpb25zPFQ+ID0+IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5vcHRpb25zID0galF1ZXJ5LmV4dGVuZCh7fSwgdGhpcy5kZWZhdWx0R3JpZE9wdGlvbnMsIGlucHV0T3B0aW9ucyk7XHJcbiAgICB9XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL3RzbGludC1sb2FkZXI/P3JlZi0tMSEuL3NyYy9qcy9jb25maWcvQ29uZmlnU3RvcmUudHMiLCJpbXBvcnQgeyBJR3JpZE9wdGlvbnMgfSBmcm9tIFwiLi4vbWFpbi9JR3JpZE9wdGlvbnNcIjtcclxuaW1wb3J0IHsgQ29uZmlnU3RvcmUgfSBmcm9tIFwiLi8uLi9jb25maWcvQ29uZmlnU3RvcmVcIjtcclxuaW1wb3J0IHsgSUV2ZW50SGFuZGxlciB9IGZyb20gXCIuL0lFdmVudEhhbmRsZXJcIjtcclxuaW1wb3J0IHsgVG9nZ2xlQ29sdW1uSGFuZGxlciB9IGZyb20gXCIuL1RvZ2dsZUNvbHVtbkhhbmRsZXJcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBDb2xTZXR0aW5nc0hhbmRsZXI8VD4gaW1wbGVtZW50cyBJRXZlbnRIYW5kbGVyPFQ+IHtcclxuICAgIHByaXZhdGUgcGFyZW50RWxlbWVudDogSlF1ZXJ5O1xyXG4gICAgcHJpdmF0ZSB0b2dnbGVDb2x1bW5IYW5kbGVyOiBUb2dnbGVDb2x1bW5IYW5kbGVyPFQ+O1xyXG4gICAgcHJpdmF0ZSBjb25maWdTdG9yZTogQ29uZmlnU3RvcmU8VD47XHJcblxyXG4gICAgY29uc3RydWN0b3IoZWxlbWVudDogSlF1ZXJ5LCBjb25maWdTdG9yZTogQ29uZmlnU3RvcmU8VD4sIHRvZ2dsZUNvbHVtbkhhbmRsZXI6IFRvZ2dsZUNvbHVtbkhhbmRsZXI8VD4pIHtcclxuICAgICAgICB0aGlzLnBhcmVudEVsZW1lbnQgPSBlbGVtZW50O1xyXG4gICAgICAgIHRoaXMuY29uZmlnU3RvcmUgPSBjb25maWdTdG9yZTtcclxuICAgICAgICB0aGlzLnRvZ2dsZUNvbHVtbkhhbmRsZXIgPSB0b2dnbGVDb2x1bW5IYW5kbGVyO1xyXG4gICAgfVxyXG4gICAgcHVibGljIG9uUmVzaXplKCk6IHZvaWQge1xyXG4gICAgICAgIC8vIGNvbnN0IHNldHRuZ3NQb3B1cCA9IHRoaXMucGFyZW50RWxlbWVudC5maW5kKFwiLmNvbC1zZXR0aW5ncy1jb250YWluZXJcIik7XHJcbiAgICAgICAgLy8gY29uc3QgdGJvZHlIZWlnaHQgPSB0aGlzLnBhcmVudEVsZW1lbnQuZmluZChcIi50YWJsZS1ib2R5XCIpLmlubmVySGVpZ2h0KCk7XHJcbiAgICAgICAgLy8gc2V0dG5nc1BvcHVwLmlubmVySGVpZ2h0KHRib2R5SGVpZ2h0IC0gMTApO1xyXG4gICAgICAgIC8vIHNldHRuZ3NQb3B1cC5maW5kKFwiLmNvbC1zZXR0aW5ncy10YWJsZVwiKS5pbm5lckhlaWdodChzZXR0bmdzUG9wdXAuaW5uZXJIZWlnaHQoKSAtXHJcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgc2V0dG5nc1BvcHVwLmZpbmQoXCIuY29sLXNldHRpbmdzLWhlYWRlclwiKS5pbm5lckhlaWdodCgpKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgb25Eb2N1bWVudENsaWNrKGV2ZW50KTogdm9pZCB7XHJcbiAgICAgICAgY29uc3QgdGFyZ2V0RWxlbWVudCA9IGpRdWVyeShldmVudC50YXJnZXQpO1xyXG4gICAgICAgIGlmICh0YXJnZXRFbGVtZW50LmlzKFwiLmNvbC1zZXR0aW5ncy10cmlnZ2VyXCIpKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCF0YXJnZXRFbGVtZW50LnBhcmVudHMoKS5pcyhcIi5jb2wtc2V0dGluZ3MtY29udGFpbmVyXCIpKSB7XHJcbiAgICAgICAgICAgIGpRdWVyeShcIi5jb2wtc2V0dGluZ3MtdHJpZ2dlclwiKS5yZW1vdmVDbGFzcyhcImFjdGl2ZVwiKTtcclxuICAgICAgICAgICAgalF1ZXJ5KFwiLmNvbC1zZXR0aW5ncy1jb250YWluZXJcIikuc2xpZGVVcCh0aGlzLmNvbmZpZ1N0b3JlLk9wdGlvbnMuYW5pbWF0aW9uVGltZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcHVibGljIFJlZ2lzdGVyRG9tSGFuZGxlcigpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLnBhcmVudEVsZW1lbnQub24oXCJjbGlja1wiLCBcIi5jb2wtc2V0dGluZ3MtdHJpZ2dlclwiLCAoZXZlbnQpOiB2b2lkID0+IHtcclxuICAgICAgICAgICAgY29uc3QgZWxlbWVudCA9IGpRdWVyeShldmVudC50YXJnZXQpO1xyXG4gICAgICAgICAgICBjb25zdCBzZXR0bmdzUG9wdXAgPSB0aGlzLnBhcmVudEVsZW1lbnQuZmluZChcIi5jb2wtc2V0dGluZ3MtY29udGFpbmVyXCIpO1xyXG4gICAgICAgICAgICB0aGlzLm9uUmVzaXplKCk7XHJcbiAgICAgICAgICAgIGpRdWVyeShcIi5jb2wtc2V0dGluZ3MtdHJpZ2dlclwiKS5hZGRDbGFzcyhcImFjdGl2ZVwiKTtcclxuICAgICAgICAgICAgc2V0dG5nc1BvcHVwLnNsaWRlVG9nZ2xlKHRoaXMuY29uZmlnU3RvcmUuT3B0aW9ucy5hbmltYXRpb25UaW1lKTtcclxuICAgICAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy5wYXJlbnRFbGVtZW50Lm9uKFwia2V5dXBcIiwgXCIuY29sLXNldHRpbmdzLWhlYWRlciAuY29sLXNldHRpbmdzLWZpbHRlclwiLFxyXG4gICAgICAgICAgICAoZXZlbnQpOiB2b2lkID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGVsZW1lbnQgPSBqUXVlcnkoZXZlbnQudGFyZ2V0KTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHZhbCA9IGVsZW1lbnQudmFsKCkudG9TdHJpbmcoKS50b0xvd2VyQ2FzZSgpO1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2codmFsKTtcclxuICAgICAgICAgICAgICAgIHRoaXMucGFyZW50RWxlbWVudC5maW5kKFwiLmNvbC1zZXR0aW5ncy10YWJsZSB0YWJsZSB0Ym9keSB0clwiKS5lYWNoKChpOiBudW1iZXIsIGUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBqUXVlcnkoZSkuc2hvdygpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChqUXVlcnkoZSkuYXR0cihcImRhdGEtaGVhZGVyLWlkXCIpLnRvTG93ZXJDYXNlKCkuaW5kZXhPZih2YWwpID09PSAtMSApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgalF1ZXJ5KGUpLmhpZGUoKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMucGFyZW50RWxlbWVudC5vbihcImNsaWNrXCIsIFwiLnNob3ctYWxsLWNvbHVtblwiLCAoZXZlbnQpOiB2b2lkID0+IHtcclxuICAgICAgICAgICAgdGhpcy5wYXJlbnRFbGVtZW50LmZpbmQoXCIuY29sLXNldHRpbmdzLWhpZGRlbi1jaGVja2JveFwiKVxyXG4gICAgICAgICAgICAuZWFjaCgoaW5kZXgsIGVsZW1lbnQpID0+IHtcclxuICAgICAgICAgICAgICAgIGpRdWVyeShlbGVtZW50KS5wcm9wKFwiY2hlY2tlZFwiLCB0cnVlKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIHRoaXMudG9nZ2xlQ29sdW1uSGFuZGxlci5zaG93QWxsQ29sdW1ucygpO1xyXG4gICAgICAgICAgICB0aGlzLmNvbmZpZ1N0b3JlLk9wdGlvbnMub25Db2xTZXR0aW5nc0NoYW5nZSh0aGlzLmNvbmZpZ1N0b3JlLk9wdGlvbnMuY29sdW1ucyk7XHJcbiAgICAgICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMucGFyZW50RWxlbWVudC5vbihcImNsaWNrXCIsIFwiLmhpZGUtYWxsLWNvbHVtblwiLCAoZXZlbnQpOiB2b2lkID0+IHtcclxuICAgICAgICAgICAgdGhpcy5wYXJlbnRFbGVtZW50LmZpbmQoXCIuY29sLXNldHRpbmdzLWhpZGRlbi1jaGVja2JveFwiKVxyXG4gICAgICAgICAgICAuZWFjaCgoaW5kZXgsIGVsZW1lbnQpID0+IHtcclxuICAgICAgICAgICAgICAgIGpRdWVyeShlbGVtZW50KS5wcm9wKFwiY2hlY2tlZFwiLCBmYWxzZSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB0aGlzLnRvZ2dsZUNvbHVtbkhhbmRsZXIuaGlkZUFsbENvbHVtbnMoKTtcclxuICAgICAgICAgICAgdGhpcy5jb25maWdTdG9yZS5PcHRpb25zLm9uQ29sU2V0dGluZ3NDaGFuZ2UodGhpcy5jb25maWdTdG9yZS5PcHRpb25zLmNvbHVtbnMpO1xyXG4gICAgICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICB0aGlzLnBhcmVudEVsZW1lbnQub24oXCJjbGlja1wiLCBcIi5jb2wtc2V0dGluZ3MtaGlkZGVuLWNoZWNrYm94XCIsIChldmVudCk6IHZvaWQgPT4ge1xyXG4gICAgICAgICAgICBpZiAoZXZlbnQub3JpZ2luYWxFdmVudCAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBjaGVja2JveCA9IGpRdWVyeShldmVudC50YXJnZXQpO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgaWQgPSBjaGVja2JveC52YWwoKS50b1N0cmluZygpO1xyXG4gICAgICAgICAgICAgICAgaWYgKGNoZWNrYm94LmlzKFwiOmNoZWNrZWRcIikpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnRvZ2dsZUNvbHVtbkhhbmRsZXIuc2hvd0NvbHVtbihpZCk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMudG9nZ2xlQ29sdW1uSGFuZGxlci5oaWRlQ29sdW1uKGlkKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLmNvbmZpZ1N0b3JlLk9wdGlvbnMub25Db2xTZXR0aW5nc0NoYW5nZSh0aGlzLmNvbmZpZ1N0b3JlLk9wdGlvbnMuY29sdW1ucyk7XHJcbiAgICAgICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvdHNsaW50LWxvYWRlcj8/cmVmLS0xIS4vc3JjL2pzL2V2ZW50SGFuZGxlcnMvQ29sU2V0dGluZ3NIYW5kbGVyLnRzIiwiaW1wb3J0IHsgQ29uZmlnU3RvcmUgfSBmcm9tIFwiLi4vY29uZmlnL0NvbmZpZ1N0b3JlXCI7XHJcbmltcG9ydCB7IEdyaWRUZW1wbGF0ZVNlcnZpY2UgfSBmcm9tIFwiLi4vc2VydmljZXMvR3JpZFRlbXBsYXRlU2VydmljZVwiO1xyXG5pbXBvcnQgeyBJRXZlbnRIYW5kbGVyIH0gZnJvbSBcIi4vSUV2ZW50SGFuZGxlclwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIFNlbGVjdEV2ZW50SGFuZGxlcjxUPiBpbXBsZW1lbnRzIElFdmVudEhhbmRsZXI8VD4ge1xyXG4gICAgcHJpdmF0ZSBwYXJlbnRFbGVtZW50OiBKUXVlcnk7XHJcbiAgICBwcml2YXRlIGNvbmZpZ1N0b3JlOiBDb25maWdTdG9yZTxUPjtcclxuICAgIHByaXZhdGUgZ3JpZFRlbXBsYXRlU2VydmljZTogR3JpZFRlbXBsYXRlU2VydmljZTxUPjtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihjb25maWdTdG9yZTogQ29uZmlnU3RvcmU8VD4sIGVsZW1lbnQ6IEpRdWVyeSwgZ3JpZFRlbXBsYXRlU2VydmljZTogR3JpZFRlbXBsYXRlU2VydmljZTxUPikge1xyXG4gICAgICAgIHRoaXMuY29uZmlnU3RvcmUgPSBjb25maWdTdG9yZTtcclxuICAgICAgICB0aGlzLnBhcmVudEVsZW1lbnQgPSBlbGVtZW50O1xyXG4gICAgICAgIHRoaXMuZ3JpZFRlbXBsYXRlU2VydmljZSA9IGdyaWRUZW1wbGF0ZVNlcnZpY2U7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgUmVnaXN0ZXJEb21IYW5kbGVyKCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMucGFyZW50RWxlbWVudC5vbihcImNoYW5nZVwiLCBcIi5zZWxlY3Qta2V5LWNoZWNrYm94XCIgLCAoZXZlbnQpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgZWxlbWVudCA9IGpRdWVyeShldmVudC50YXJnZXQpO1xyXG4gICAgICAgICAgICBjb25zdCByb3cgPSBlbGVtZW50LmRhdGEoXCJ2YWx1ZVwiKTtcclxuICAgICAgICAgICAgY29uc3QgY2hlY2tlZCA9IGVsZW1lbnQuaXMoXCI6Y2hlY2tlZFwiKTtcclxuICAgICAgICAgICAgaWYgKGNoZWNrZWQpIHtcclxuICAgICAgICAgICAgICAgIGVsZW1lbnQucGFyZW50cyhcIi5tYWluUm93XCIpLmFkZENsYXNzKFwiYWN0aXZlXCIpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgZWxlbWVudC5wYXJlbnRzKFwiLm1haW5Sb3dcIikucmVtb3ZlQ2xhc3MoXCJhY3RpdmVcIik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKGV2ZW50Lm9yaWdpbmFsRXZlbnQgPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMuY29uZmlnU3RvcmUuT3B0aW9ucy5vblNlbGVjdChbcm93XSwgY2hlY2tlZCk7XHJcbiAgICAgICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMucGFyZW50RWxlbWVudC5vbihcImNoYW5nZVwiLCBcIi5zZWxlY3QtYWxsLWNoZWNrYm94XCIgLCAoZXZlbnQpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgZWxlbWVudCA9IGpRdWVyeShldmVudC50YXJnZXQpO1xyXG4gICAgICAgICAgICBjb25zdCBjaGVja2VkID0gZWxlbWVudC5pcyhcIjpjaGVja2VkXCIpO1xyXG4gICAgICAgICAgICB0aGlzLmNvbmZpZ1N0b3JlLk9wdGlvbnMub25TZWxlY3QodGhpcy5ncmlkVGVtcGxhdGVTZXJ2aWNlLkRhdGEsIGNoZWNrZWQpO1xyXG4gICAgICAgICAgICB0aGlzLnBhcmVudEVsZW1lbnQuZmluZChcIi5zZWxlY3Qta2V5LWNoZWNrYm94XCIpLnByb3AoXCJjaGVja2VkXCIsIGNoZWNrZWQpO1xyXG4gICAgICAgICAgICBpZiAoY2hlY2tlZCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5wYXJlbnRFbGVtZW50LmZpbmQoXCIubWFpblRhYmxlIC5tYWluUm93XCIpLmFkZENsYXNzKFwiYWN0aXZlXCIpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5wYXJlbnRFbGVtZW50LmZpbmQoXCIubWFpblRhYmxlIC5tYWluUm93XCIpLnJlbW92ZUNsYXNzKFwiYWN0aXZlXCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgcHVibGljIG9uUmVzaXplKCk6IHZvaWQge1xyXG4gICAgICAgIC8vIElnbm9yZVxyXG4gICAgfVxyXG4gICAgcHVibGljIG9uRG9jdW1lbnRDbGljayhldmVudDogYW55KTogdm9pZCB7XHJcbiAgICAgICAgLy8gSWdub3JlXHJcbiAgICB9XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL3RzbGludC1sb2FkZXI/P3JlZi0tMSEuL3NyYy9qcy9ldmVudEhhbmRsZXJzL1NlbGVjdEV2ZW50SGFuZGxlci50cyIsImltcG9ydCB7IENvbmZpZ1N0b3JlIH0gZnJvbSBcIi4uL2NvbmZpZy9Db25maWdTdG9yZVwiO1xyXG5pbXBvcnQgeyBJRXZlbnRIYW5kbGVyIH0gZnJvbSBcIi4vSUV2ZW50SGFuZGxlclwiO1xyXG5leHBvcnQgY2xhc3MgRGV0YWlsc1Jvd0hhbmRsZXI8VD4gaW1wbGVtZW50cyBJRXZlbnRIYW5kbGVyPFQ+IHtcclxuICAgIHByaXZhdGUgcGFyZW50RWxlbWVudDogSlF1ZXJ5O1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgY29uZmlnU3RvcmU6IENvbmZpZ1N0b3JlPFQ+LCBlbGVtZW50OiBKUXVlcnkpIHtcclxuICAgICAgICB0aGlzLnBhcmVudEVsZW1lbnQgPSBlbGVtZW50O1xyXG4gICAgfVxyXG4gICAgcHVibGljIG9uUmVzaXplKCk6IHZvaWQge1xyXG4gICAgICAgIC8vIE5vdGhpbmcgdG8gRG8uXHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIG9uRG9jdW1lbnRDbGljayhldmVudCk6IHZvaWQge1xyXG4gICAgICAgIC8vIE5vdGhpbmcgdG8gRG8uXHJcbiAgICB9XHJcbiAgICBwdWJsaWMgUmVnaXN0ZXJEb21IYW5kbGVyID0gKCk6IHZvaWQgPT4ge1xyXG4gICAgICAgIHRoaXMucGFyZW50RWxlbWVudC5vbihcImNsaWNrXCIsIFwiLnRhYmxlLWJvZHkgLmV4cGFuc2lvbkFycm93cyBpXCIsIChldmVudCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBhcnJvdyA9IGpRdWVyeShldmVudC50YXJnZXQpO1xyXG4gICAgICAgICAgICBjb25zdCBkZXRhaWxzUm93ID0gYXJyb3cuY2xvc2VzdChcInRyXCIpLm5leHQoKTtcclxuICAgICAgICAgICAgY29uc3QgY3VycmVudEljb24gPSBhcnJvdy5oaWRlKCk7XHJcbiAgICAgICAgICAgIGNvbnN0IG90aGVySWNvbiA9IGFycm93LnNpYmxpbmdzKFwiaVwiKS5zaG93KCk7XHJcbiAgICAgICAgICAgIGlmIChhcnJvdy5oYXNDbGFzcyhcImV4cGFuZERldGFpbHNSb3dJY29uXCIpKSB7XHJcbiAgICAgICAgICAgICAgICBkZXRhaWxzUm93LnNsaWRlRG93bih0aGlzLmNvbmZpZ1N0b3JlLk9wdGlvbnMuYW5pbWF0aW9uVGltZSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBkZXRhaWxzUm93LnNsaWRlVXAodGhpcy5jb25maWdTdG9yZS5PcHRpb25zLmFuaW1hdGlvblRpbWUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy90c2xpbnQtbG9hZGVyPz9yZWYtLTEhLi9zcmMvanMvZXZlbnRIYW5kbGVycy9EZXRhaWxzUm93SGFuZGxlci50cyIsImltcG9ydCB7IENvbmZpZ1N0b3JlIH0gZnJvbSBcIi4uL2NvbmZpZy9Db25maWdTdG9yZVwiO1xyXG5pbXBvcnQgeyBJR3JpZE9wdGlvbnMgfSBmcm9tIFwiLi4vbWFpbi9JR3JpZE9wdGlvbnNcIjtcclxuaW1wb3J0IHsgQ29tbW9uVXRpbCB9IGZyb20gXCIuLi91dGlsL0NvbHVtblV0aWxcIjtcclxuaW1wb3J0IHsgRmlsdGVyQWN0aW9uVHlwZSB9IGZyb20gXCIuLy4uL21vZGVscy9GaWx0ZXJBY3Rpb25UeXBlXCI7XHJcbmltcG9ydCB7IElGaWx0ZXJDbGlja0RlbGVnYXRlIH0gZnJvbSBcIi4vLi4vbW9kZWxzL0lGaWx0ZXJDbGlja0RlbGVnYXRlXCI7XHJcbmltcG9ydCB7IElFdmVudEhhbmRsZXIgfSBmcm9tIFwiLi9JRXZlbnRIYW5kbGVyXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgRmlsdGVyQ2xpY2tIYW5kbGVyPFQ+IGltcGxlbWVudHMgSUV2ZW50SGFuZGxlcjxUPiB7XHJcbiAgICBwcml2YXRlIGNvbmZpZ1N0b3JlOiBDb25maWdTdG9yZTxUPjtcclxuICAgIHByaXZhdGUgcGFyZW50RWxlbWVudDogSlF1ZXJ5O1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKGNvbmZpZ1N0b3JlOiBDb25maWdTdG9yZTxUPiwgZWxlbWVudDogSlF1ZXJ5KSB7XHJcbiAgICAgICAgdGhpcy5jb25maWdTdG9yZSA9IGNvbmZpZ1N0b3JlO1xyXG4gICAgICAgIHRoaXMucGFyZW50RWxlbWVudCA9IGVsZW1lbnQ7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgb25SZXNpemUoKTogdm9pZCB7XHJcbiAgICAgICAgLy8gTm90aGluZyB0byBEby5cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgb25Eb2N1bWVudENsaWNrKGV2ZW50KTogdm9pZCB7XHJcbiAgICAgICAgLy8gTm90aGluZyB0byBEby5cclxuICAgIH1cclxuICAgIHB1YmxpYyBSZWdpc3RlckRvbUhhbmRsZXIgPSAoKTogdm9pZCA9PiB7XHJcbiAgICAgICAgdGhpcy5wYXJlbnRFbGVtZW50Lm9uKFwiY2xpY2tcIiwgXCIudGFibGUtYm9keSAuZGV0YWlsc1JvdyAuZGV0YWlsc1RhYmxlIHRkIGlcIiwgKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IGVsZW1lbnQgPSBqUXVlcnkoZXZlbnQudGFyZ2V0KTtcclxuICAgICAgICAgICAgY29uc3QgcGFyZW50VGQgPSBlbGVtZW50LnBhcmVudHMoXCJ0ZFwiKTtcclxuICAgICAgICAgICAgY29uc3Qga2V5ID0gcGFyZW50VGQuYXR0cihcImRhdGEtZmlsdGVyLWtleVwiKTtcclxuICAgICAgICAgICAgY29uc3QgdmFsdWUgPSBwYXJlbnRUZC5hdHRyKFwiZGF0YS1maWx0ZXItdmFsdWVcIik7XHJcbiAgICAgICAgICAgIGNvbnN0IHR5cGUgPSBwYXJlbnRUZC5hdHRyKFwiZGF0YS1maWx0ZXItdHlwZVwiKTtcclxuICAgICAgICAgICAgY29uc3QgY29sID0gQ29tbW9uVXRpbC5HZXRDb2x1bW5PYmplY3Qoa2V5LCB0aGlzLmNvbmZpZ1N0b3JlLk9wdGlvbnMuY29sdW1ucyk7XHJcbiAgICAgICAgICAgIGlmIChjb2wgPT09IHVuZGVmaW5lZCB8fCBjb2wgPT09IG51bGwgfHwgIWNvbC5maWx0ZXJhYmxlICkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGxldCBmaWx0ZXJBY3Rpb246IEZpbHRlckFjdGlvblR5cGUgPSBGaWx0ZXJBY3Rpb25UeXBlLkFkZDtcclxuICAgICAgICAgICAgaWYgKGVsZW1lbnQuaGFzQ2xhc3MoXCJyZW1vdmVGaWx0ZXJcIikpIHtcclxuICAgICAgICAgICAgICAgIGZpbHRlckFjdGlvbiA9IEZpbHRlckFjdGlvblR5cGUuTWludXM7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5jb25maWdTdG9yZS5PcHRpb25zLm9uQ2xpY2tGaWx0ZXIoa2V5LCB2YWx1ZSwgZmlsdGVyQWN0aW9uLCB0eXBlKTtcclxuICAgICAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL3RzbGludC1sb2FkZXI/P3JlZi0tMSEuL3NyYy9qcy9ldmVudEhhbmRsZXJzL0ZpbHRlckNsaWNrSGFuZGxlci50cyIsImV4cG9ydCBlbnVtIEZpbHRlckFjdGlvblR5cGUge1xyXG4gICAgQWRkID0gXCJBZGRcIixcclxuICAgIE1pbnVzID0gXCJNaW51c1wiLFxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy90c2xpbnQtbG9hZGVyPz9yZWYtLTEhLi9zcmMvanMvbW9kZWxzL0ZpbHRlckFjdGlvblR5cGUudHMiLCJleHBvcnQgZW51bSBIYW5kbGVyTmFtZXMge1xyXG4gICAgRmlsdGVyQWN0aW9uLFxyXG4gICAgSGVhZGVyQ2xpY2ssXHJcbiAgICBTY3JvbGwsXHJcbiAgICBQYWdlU2VhcmNoLFxyXG4gICAgRGV0YWlsc1JvdyxcclxuICAgIFRvZ2dsZUNvbHVtbixcclxuICAgIENvbFNldHRpbmdzLFxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy90c2xpbnQtbG9hZGVyPz9yZWYtLTEhLi9zcmMvanMvZXZlbnRIYW5kbGVycy9IYW5kbGVyTmFtZXMudHMiLCJpbXBvcnQgeyBDb25maWdTdG9yZSB9IGZyb20gXCIuLi9jb25maWcvQ29uZmlnU3RvcmVcIjtcclxuaW1wb3J0IHsgSUdyaWRPcHRpb25zIH0gZnJvbSBcIi4uL21haW4vSUdyaWRPcHRpb25zXCI7XHJcbmltcG9ydCB7IENvbW1vblV0aWwgfSBmcm9tIFwiLi4vdXRpbC9Db2x1bW5VdGlsXCI7XHJcbmltcG9ydCB7IEdyaWRPcmRlckRpcmVjdGlvbiB9IGZyb20gXCIuLy4uL21vZGVscy9HcmlkT3JkZXJEaXJlY3Rpb25cIjtcclxuaW1wb3J0IHtJSGVhZGVyQ2xpY2tEZWxlZ2F0ZX0gZnJvbSBcIi4vLi4vbW9kZWxzL0lIZWFkZXJDbGlja0RlbGVnYXRlXCI7XHJcbmltcG9ydCB7IElFdmVudEhhbmRsZXIgfSBmcm9tIFwiLi9JRXZlbnRIYW5kbGVyXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgSGVhZGVyQ2xpY2tIYW5kbGVyPFQ+IGltcGxlbWVudHMgSUV2ZW50SGFuZGxlcjxUPiB7XHJcbiAgICBwcml2YXRlIHBhcmVudEVsZW1lbnQ6IEpRdWVyeTtcclxuICAgIHByaXZhdGUgY29uZmlnU3RvcmU6IENvbmZpZ1N0b3JlPFQ+O1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKGNvbmZpZ1N0b3JlOiBDb25maWdTdG9yZTxUPiwgZWxlbWVudDogSlF1ZXJ5KSB7XHJcbiAgICAgICAgdGhpcy5jb25maWdTdG9yZSA9IGNvbmZpZ1N0b3JlO1xyXG4gICAgICAgIHRoaXMucGFyZW50RWxlbWVudCA9IGVsZW1lbnQ7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIG9uUmVzaXplKCk6IHZvaWQge1xyXG4gICAgICAgIC8vIE5vdGhpbmcgdG8gRG8uXHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIG9uRG9jdW1lbnRDbGljayhldmVudCk6IHZvaWQge1xyXG4gICAgICAgIC8vIE5vdGhpbmcgdG8gRG8uXHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIFJlZ2lzdGVyRG9tSGFuZGxlciA9ICgpOiB2b2lkID0+IHtcclxuICAgICAgICAvLyBSZWdpc3RlcmluZyBKUXVlcnkgRXZlbnQgSGFuZGxlciBpZiBIZWFkZXIgaXMgQ2xpY2tlZC5cclxuICAgICAgICB0aGlzLnBhcmVudEVsZW1lbnQub24oXCJjbGlja1wiLCBcIi50YWJsZS1oZWFkZXIgdGhcIiwgKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IGVsZW1lbnQgPSBqUXVlcnkoZXZlbnQudGFyZ2V0KS5jbG9zZXN0KFwidGhcIik7XHJcbiAgICAgICAgICAgIGNvbnN0IGhlYWRlcklkID0gZWxlbWVudC5hdHRyKFwiZGF0YS1oZWFkZXItaWRcIik7XHJcbiAgICAgICAgICAgIGNvbnN0IGNvbCA9IENvbW1vblV0aWwuR2V0Q29sdW1uT2JqZWN0KGhlYWRlcklkLCB0aGlzLmNvbmZpZ1N0b3JlLk9wdGlvbnMuY29sdW1ucyk7XHJcbiAgICAgICAgICAgIGlmIChjb2wgPT09IHVuZGVmaW5lZCB8fCBjb2wgPT09IG51bGwgfHwgIWNvbC5zb3J0YWJsZSApIHtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjb25zdCBhcnJvd0ljb25zID0gZWxlbWVudC5maW5kKFwiaVwiKTtcclxuICAgICAgICAgICAgY29uc3QgdXBBcnJvd0ljb24gPSBhcnJvd0ljb25zLmZpcnN0KCk7XHJcbiAgICAgICAgICAgIGNvbnN0IGRvd25BcnJvd0ljb24gPSBhcnJvd0ljb25zLmxhc3QoKTtcclxuICAgICAgICAgICAgbGV0IGRpcmVjdGlvbjogR3JpZE9yZGVyRGlyZWN0aW9uO1xyXG4gICAgICAgICAgICBpZiAoYXJyb3dJY29ucy5pcyhcIjp2aXNpYmxlXCIpKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAodXBBcnJvd0ljb24uaXMoXCI6dmlzaWJsZVwiKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGRpcmVjdGlvbiA9IEdyaWRPcmRlckRpcmVjdGlvbi5EZXNjO1xyXG4gICAgICAgICAgICAgICAgICAgIHVwQXJyb3dJY29uLmhpZGUoKTtcclxuICAgICAgICAgICAgICAgICAgICBkb3duQXJyb3dJY29uLnNob3coKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlyZWN0aW9uID0gR3JpZE9yZGVyRGlyZWN0aW9uLkFzYztcclxuICAgICAgICAgICAgICAgICAgICBkb3duQXJyb3dJY29uLmhpZGUoKTtcclxuICAgICAgICAgICAgICAgICAgICB1cEFycm93SWNvbi5zaG93KCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBkaXJlY3Rpb24gPSBHcmlkT3JkZXJEaXJlY3Rpb24uQXNjO1xyXG4gICAgICAgICAgICAgICAgdXBBcnJvd0ljb24uc2hvdygpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIENvbW1vblV0aWwuU2V0T3JkZXIoaGVhZGVySWQsIGRpcmVjdGlvbiwgdGhpcy5jb25maWdTdG9yZS5PcHRpb25zLmNvbHVtbnMpO1xyXG4gICAgICAgICAgICB0aGlzLmNvbmZpZ1N0b3JlLk9wdGlvbnMub25DbGlja0hlYWRlcihoZWFkZXJJZCwgZGlyZWN0aW9uKTtcclxuICAgICAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL3RzbGludC1sb2FkZXI/P3JlZi0tMSEuL3NyYy9qcy9ldmVudEhhbmRsZXJzL0hlYWRlckNsaWNrSGFuZGxlci50cyIsImltcG9ydCAqIGFzIGpRdWVyeSBmcm9tIFwianF1ZXJ5XCI7XHJcbmltcG9ydCB7IENvbmZpZ1N0b3JlIH0gZnJvbSBcIi4uL2NvbmZpZy9Db25maWdTdG9yZVwiO1xyXG5pbXBvcnQgeyBQYWdlciB9IGZyb20gXCIuLi9wYWdpbmF0aW9uL1BhZ2VyXCI7XHJcbmltcG9ydCB7IElQYWdlU2VhcmNoQ2xpY2tEZWxlZ2F0ZSB9IGZyb20gXCIuLy4uL21vZGVscy9JUGFnZVNlYXJjaENsaWNrRGVsZWdhdGVcIjtcclxuaW1wb3J0IHsgSVBhZ2luYXRpb24gfSBmcm9tIFwiLi8uLi9tb2RlbHMvSVBhZ2luYXRpb25cIjtcclxuaW1wb3J0IHsgSUV2ZW50SGFuZGxlciB9IGZyb20gXCIuL0lFdmVudEhhbmRsZXJcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBQYWdlU2VhcmNoSGFuZGxlcjxUPiBpbXBsZW1lbnRzIElFdmVudEhhbmRsZXI8VD4ge1xyXG4gICAgcHJpdmF0ZSBjb25maWdTdG9yZTogQ29uZmlnU3RvcmU8VD47XHJcbiAgICBwcml2YXRlIHBhcmVudEVsZW1lbnQ6IEpRdWVyeTtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihjb25maWdTdG9yZTogQ29uZmlnU3RvcmU8VD4sIGVsZW1lbnQ6IEpRdWVyeSkge1xyXG4gICAgICAgIHRoaXMuY29uZmlnU3RvcmUgPSBjb25maWdTdG9yZTtcclxuICAgICAgICB0aGlzLnBhcmVudEVsZW1lbnQgPSBlbGVtZW50O1xyXG4gICAgfVxyXG4gICAgcHVibGljIG9uUmVzaXplKCk6IHZvaWQge1xyXG4gICAgICAgIC8vIHRocm93IG5ldyBFcnJvcihcIk1ldGhvZCBub3QgaW1wbGVtZW50ZWQuXCIpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBvbkRvY3VtZW50Q2xpY2soKTogdm9pZCB7XHJcbiAgICAgICAgLy8gdGhyb3cgbmV3IEVycm9yKFwiTWV0aG9kIG5vdCBpbXBsZW1lbnRlZC5cIik7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgUmVnaXN0ZXJEb21IYW5kbGVyID0gKCk6IHZvaWQgPT4ge1xyXG4gICAgICAgIHRoaXMucGFyZW50RWxlbWVudC5vbihcImNsaWNrXCIsIFwiLnRhYmxlLWZvb3RlciAuZmlyc3RMaW5rXCIsIChldmVudCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmNvbmZpZ1N0b3JlLm9wdGlvbnMub25QYWdlU2VhcmNoKFBhZ2VyLlBhZ2luYXRpb25EYXRhLnBhZ2VTaXplLCAxKTtcclxuICAgICAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy5wYXJlbnRFbGVtZW50Lm9uKFwiY2xpY2tcIiwgXCIudGFibGUtZm9vdGVyIC5uZXh0TGlua1wiLCAoZXZlbnQpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5jb25maWdTdG9yZS5vcHRpb25zLm9uUGFnZVNlYXJjaChQYWdlci5QYWdpbmF0aW9uRGF0YS5wYWdlU2l6ZSwgUGFnZXIuUGFnaW5hdGlvbkRhdGEucGFnZUluZGV4ICsgMSk7XHJcbiAgICAgICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMucGFyZW50RWxlbWVudC5vbihcImNsaWNrXCIsIFwiLnRhYmxlLWZvb3RlciAucHJldkxpbmtcIiwgKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuY29uZmlnU3RvcmUub3B0aW9ucy5vblBhZ2VTZWFyY2goUGFnZXIuUGFnaW5hdGlvbkRhdGEucGFnZVNpemUsIFBhZ2VyLlBhZ2luYXRpb25EYXRhLnBhZ2VJbmRleCAtIDEpO1xyXG4gICAgICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICB0aGlzLnBhcmVudEVsZW1lbnQub24oXCJjbGlja1wiLCBcIi50YWJsZS1mb290ZXIgLmxhc3RMaW5rXCIsIChldmVudCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmNvbmZpZ1N0b3JlLm9wdGlvbnMub25QYWdlU2VhcmNoKFBhZ2VyLlBhZ2luYXRpb25EYXRhLnBhZ2VTaXplLCBQYWdlci5QYWdpbmF0aW9uRGF0YS5ub09mUGFnZXMpO1xyXG4gICAgICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICB0aGlzLnBhcmVudEVsZW1lbnQub24oXCJjaGFuZ2VcIiwgXCIudGFibGUtZm9vdGVyIC5wYWdlU2l6ZVNlbGVjdG9yXCIsIChldmVudCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCB2YWw6IG51bWJlciA9ICtqUXVlcnkoZXZlbnQudGFyZ2V0KS52YWwoKS50b1N0cmluZygpO1xyXG4gICAgICAgICAgICB0aGlzLmNvbmZpZ1N0b3JlLm9wdGlvbnMub25QYWdlU2VhcmNoKHZhbCwgUGFnZXIuUGFnaW5hdGlvbkRhdGEucGFnZUluZGV4KTtcclxuICAgICAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy5wYXJlbnRFbGVtZW50Lm9uKFwia2V5cHJlc3NcIiwgXCIudGFibGUtZm9vdGVyIC5wYWdlci1pbnB1dFwiLCAoZXZlbnQpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgaXAgPSBqUXVlcnkoZXZlbnQudGFyZ2V0KTtcclxuICAgICAgICAgICAgY29uc3QgcGFnZURhdGEgPSBQYWdlci5QYWdpbmF0aW9uRGF0YTtcclxuICAgICAgICAgICAgaWYgKGV2ZW50LmtleUNvZGUgPT09IDEzKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCB2YWw6IG51bWJlciA9ICtpcC52YWwoKS50b1N0cmluZygpO1xyXG4gICAgICAgICAgICAgICAgaWYgKGlzTmFOKHZhbCkgfHwgdmFsID4gcGFnZURhdGEubm9PZlBhZ2VzIHx8IHZhbCA8IDEpIHtcclxuICAgICAgICAgICAgICAgICAgICBpcC52YWwocGFnZURhdGEucGFnZUluZGV4KTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jb25maWdTdG9yZS5vcHRpb25zLm9uUGFnZVNlYXJjaChwYWdlRGF0YS5wYWdlU2l6ZSwgdmFsKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvdHNsaW50LWxvYWRlcj8/cmVmLS0xIS4vc3JjL2pzL2V2ZW50SGFuZGxlcnMvUGFnZVNlYXJjaENsaWNrSGFuZGxlci50cyIsImltcG9ydCB7IENvbmZpZ1N0b3JlIH0gZnJvbSBcIi4uL2NvbmZpZy9Db25maWdTdG9yZVwiO1xyXG5pbXBvcnQgeyBHcmlkVGVtcGxhdGVTZXJ2aWNlIH0gZnJvbSBcIi4vLi4vc2VydmljZXMvR3JpZFRlbXBsYXRlU2VydmljZVwiO1xyXG5pbXBvcnQgeyBJSW5kZXhDb3VudGVyIH0gZnJvbSBcIi4vLi4vdmlydHVhbGl6YXRpb24vSW5kZXhDb3VudGVyXCI7XHJcbmltcG9ydCB7IFNjcm9sbERpcmVjdGlvbiB9IGZyb20gXCIuLy4uL3ZpcnR1YWxpemF0aW9uL1Njcm9sbERpcmVjdGlvblwiO1xyXG5pbXBvcnQgeyBWaXJ0dWFsaXplciB9IGZyb20gXCIuLy4uL3ZpcnR1YWxpemF0aW9uL1ZpcnR1YWxpemVyXCI7XHJcbmltcG9ydCB7IElFdmVudEhhbmRsZXIgfSBmcm9tIFwiLi9JRXZlbnRIYW5kbGVyXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgU2Nyb2xsSGFuZGxlcjxUPiBpbXBsZW1lbnRzIElFdmVudEhhbmRsZXI8VD4ge1xyXG4gICAgcHJpdmF0ZSB2aXJ0dWFsaXplcjogVmlydHVhbGl6ZXI7XHJcbiAgICBwcml2YXRlIHBhcmVudEVsZW1lbnQ6IEpRdWVyeTtcclxuICAgIHByaXZhdGUgZ3JpZFRlbXBsYXRlU2VydmljZTogR3JpZFRlbXBsYXRlU2VydmljZTxUPjtcclxuICAgIHByaXZhdGUgcmVuZGVyaW5nOiBib29sZWFuID0gIGZhbHNlO1xyXG4gICAgcHJpdmF0ZSBjb25maWdTdG9yZTogQ29uZmlnU3RvcmU8VD47XHJcbiAgICBwcml2YXRlIGxlZnRPZmZzZXQ6IG51bWJlcjtcclxuICAgIHByaXZhdGUgcGFyZW50T2ZmU2V0TGVmdDogbnVtYmVyO1xyXG4gICAgcHJpdmF0ZSBjdXJyZW50SW5kZXg6IG51bWJlcjtcclxuICAgIHByaXZhdGUgd2F0Y2hlczogYW55W10gPSBbXTtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihjb25maWdTdG9yZTogQ29uZmlnU3RvcmU8VD4sIGdyaWRUZW1wbGF0ZVNlcnZpY2U6IEdyaWRUZW1wbGF0ZVNlcnZpY2U8VD4sIGN1cnJlbnRJbmRleDogbnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy5jb25maWdTdG9yZSA9IGNvbmZpZ1N0b3JlO1xyXG4gICAgICAgIHRoaXMucGFyZW50RWxlbWVudCA9IGpRdWVyeSh0aGlzLmNvbmZpZ1N0b3JlLk9wdGlvbnMuY29udGFpbmVyRWxlbWVudCk7XHJcbiAgICAgICAgdGhpcy5ncmlkVGVtcGxhdGVTZXJ2aWNlID0gZ3JpZFRlbXBsYXRlU2VydmljZTtcclxuICAgICAgICB0aGlzLmN1cnJlbnRJbmRleCA9IGN1cnJlbnRJbmRleDtcclxuICAgIH1cclxuICAgIHB1YmxpYyBvblJlc2l6ZSgpOiB2b2lkIHtcclxuICAgICAgICAvL1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBvbkRvY3VtZW50Q2xpY2soZXZlbnQpOiB2b2lkIHtcclxuICAgICAgICAvLyBObyBPcFxyXG4gICAgfVxyXG4gICAgcHVibGljIFJlZ2lzdGVyRG9tSGFuZGxlciA9ICgpOiB2b2lkID0+IHtcclxuICAgICAgICAvLyBSZWdpc3RlcmluZyBKUXVlcnkgRXZlbnQgSGFuZGxlciBpZiBIZWFkZXIgaXMgQ2xpY2tlZC5cclxuICAgICAgICB0aGlzLnBhcmVudEVsZW1lbnQuZmluZChcIi50YWJsZS1ib2R5XCIpLm9uKFwic2Nyb2xsXCIsIHRoaXMuaGFuZGxlUmVzaXplKTtcclxuICAgIH1cclxuICAgIHB1YmxpYyByZW1vdmVIYW5kbGVyID0gKCkgPT4ge1xyXG4gICAgICAgIHRoaXMucGFyZW50RWxlbWVudC5maW5kKFwiLnRhYmxlLWJvZHlcIikub2ZmKFwic2Nyb2xsXCIsIHRoaXMuaGFuZGxlUmVzaXplKTtcclxuICAgIH1cclxuICAgIHB1YmxpYyByZXNldFBhcmVudE9mZnNldCA9ICgpID0+IHtcclxuICAgICAgICB0aGlzLnBhcmVudE9mZlNldExlZnQgPSB0aGlzLnBhcmVudEVsZW1lbnQub2Zmc2V0KCkubGVmdDtcclxuICAgICAgICB0aGlzLmxlZnRPZmZzZXQgPSB0aGlzLnBhcmVudEVsZW1lbnQuZmluZChcIi50YWJsZS1oZWFkZXJcIikub2Zmc2V0KCkubGVmdDtcclxuICAgIH1cclxuICAgIHB1YmxpYyB3YXRjaFdpZHRoID0gKCkgPT4ge1xyXG4gICAgICAgIHRoaXMucGFyZW50T2ZmU2V0TGVmdCA9IHRoaXMucGFyZW50RWxlbWVudC5vZmZzZXQoKS5sZWZ0O1xyXG4gICAgICAgIHRoaXMud2F0Y2hlcy5wdXNoKHNldEludGVydmFsKHRoaXMuc2V0SGVhZGVyT2Zmc2V0LCAzMDApKTtcclxuICAgIH1cclxuICAgIHB1YmxpYyB1bldhdGNoV2lkdGggPSAoKSA9PiB7XHJcbiAgICAgICAgaWYgKHRoaXMud2F0Y2hlcyA9PT0gdW5kZWZpbmVkIHx8IHRoaXMud2F0Y2hlcyA9PT0gbnVsbCApIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBmb3IgKGNvbnN0IHdhdGNoIG9mIHRoaXMud2F0Y2hlcykge1xyXG4gICAgICAgICAgICBjbGVhckludGVydmFsKHdhdGNoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBwcml2YXRlIGhhbmRsZVJlc2l6ZSA9IChldmVudCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHRCb2R5T2JqID0gdGhpcy5wYXJlbnRFbGVtZW50LmZpbmQoXCIudGFibGUtYm9keVwiKTtcclxuICAgICAgICBpZiAodGhpcy5sZWZ0T2Zmc2V0ID09PSB1bmRlZmluZWQgfHwgdGhpcy5sZWZ0T2Zmc2V0ID09PSBudWxsKSB7XHJcbiAgICAgICAgICAgIHRoaXMubGVmdE9mZnNldCA9IHRoaXMucGFyZW50RWxlbWVudC5maW5kKFwiLnRhYmxlLWhlYWRlclwiKS5vZmZzZXQoKS5sZWZ0O1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnBhcmVudEVsZW1lbnQuZmluZChcIi50YWJsZS1oZWFkZXJcIikub2Zmc2V0KFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBsZWZ0OiB0aGlzLmxlZnRPZmZzZXQgKyAtMSAqIHRCb2R5T2JqLnNjcm9sbExlZnQoKSxcclxuICAgICAgICAgICAgICAgIHRvcDogMCxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICApO1xyXG4gICAgICAgIGNvbnN0IGFjdHVhbFRhYmxlSGVpZ2h0ID0gdEJvZHlPYmouZmluZChcIi5tYWluVGFibGVcIikuaGVpZ2h0KCk7XHJcbiAgICAgICAgY29uc3Qgc2Nyb2xsQ29udGFpbmVySGVpZ2h0ID0gdEJvZHlPYmouaGVpZ2h0KCk7XHJcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBpZiAodGhpcy5yZW5kZXJpbmcpIHtcclxuICAgICAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3Qgc2Nyb2xsVG9wID0gdEJvZHlPYmouc2Nyb2xsVG9wKCk7XHJcbiAgICAgICAgaWYgKChzY3JvbGxDb250YWluZXJIZWlnaHQgKyBzY3JvbGxUb3AgKSAtIChhY3R1YWxUYWJsZUhlaWdodCAqIDAuOCApID4gMCApIHtcclxuICAgICAgICAgICAgaWYgKCB0aGlzLmN1cnJlbnRJbmRleCA+PSB0aGlzLmdyaWRUZW1wbGF0ZVNlcnZpY2UuRGF0YUxlbmd0aCApIHtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLnJlbmRlcmluZyA9IHRydWU7XHJcbiAgICAgICAgICAgIGxldCBsYXN0SW5kZXggPSB0aGlzLmN1cnJlbnRJbmRleCArIHRoaXMuY29uZmlnU3RvcmUuT3B0aW9ucy5jaHVua1NpemU7XHJcbiAgICAgICAgICAgIGlmICggbGFzdEluZGV4ID49IHRoaXMuZ3JpZFRlbXBsYXRlU2VydmljZS5EYXRhTGVuZ3RoICkge1xyXG4gICAgICAgICAgICAgICAgbGFzdEluZGV4ID0gdGhpcy5ncmlkVGVtcGxhdGVTZXJ2aWNlLkRhdGFMZW5ndGggLSAxO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNvbnN0IGh0bWwgID0galF1ZXJ5KHRoaXMuZ3JpZFRlbXBsYXRlU2VydmljZS5nZXRUZW1wbGF0ZSh0aGlzLmN1cnJlbnRJbmRleCwgbGFzdEluZGV4KSk7XHJcbiAgICAgICAgICAgIHRCb2R5T2JqLmZpbmQoXCIubWFpblRhYmxlQm9keVwiKS5hcHBlbmQoaHRtbCk7XHJcbiAgICAgICAgICAgIHRoaXMuY3VycmVudEluZGV4ID0gbGFzdEluZGV4ICsgMTtcclxuICAgICAgICAgICAgdGhpcy5yZW5kZXJpbmcgPSBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBzZXRIZWFkZXJPZmZzZXQgPSAoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgbGVmdCA9IHRoaXMucGFyZW50RWxlbWVudC5vZmZzZXQoKS5sZWZ0O1xyXG4gICAgICAgIGlmICggdGhpcy5wYXJlbnRPZmZTZXRMZWZ0ICE9PSBsZWZ0ICkge1xyXG4gICAgICAgICAgICBjb25zdCB0Qm9keU9iaiA9IHRoaXMucGFyZW50RWxlbWVudC5maW5kKFwiLnRhYmxlLWJvZHlcIik7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmxlZnRPZmZzZXQgPT09IHVuZGVmaW5lZCB8fCB0aGlzLmxlZnRPZmZzZXQgPT09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMubGVmdE9mZnNldCA9IHRoaXMucGFyZW50RWxlbWVudC5maW5kKFwiLnRhYmxlLWhlYWRlclwiKS5vZmZzZXQoKS5sZWZ0O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMubGVmdE9mZnNldCA9IHRoaXMubGVmdE9mZnNldCAtICh0aGlzLnBhcmVudE9mZlNldExlZnQgLSBsZWZ0KTtcclxuICAgICAgICAgICAgdGhpcy5wYXJlbnRFbGVtZW50XHJcbiAgICAgICAgICAgICAgICAuZmluZChcIi50YWJsZS1oZWFkZXJcIilcclxuICAgICAgICAgICAgICAgIC5vZmZzZXQoe2xlZnQ6IHRoaXMubGVmdE9mZnNldCwgdG9wOiAwfSk7XHJcbiAgICAgICAgICAgIHRoaXMucGFyZW50T2ZmU2V0TGVmdCA9IGxlZnQ7XHJcbiAgICAgICAgICAgIHRCb2R5T2JqLnNjcm9sbExlZnQodEJvZHlPYmouc2Nyb2xsTGVmdCgpIC0gMSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy90c2xpbnQtbG9hZGVyPz9yZWYtLTEhLi9zcmMvanMvZXZlbnRIYW5kbGVycy9TY3JvbGxIYW5kbGVyLnRzIiwiaW1wb3J0IHsgQ29uZmlnU3RvcmUgfSBmcm9tIFwiLi4vY29uZmlnL0NvbmZpZ1N0b3JlXCI7XHJcbmltcG9ydCB7IElDb2x1bW4gfSBmcm9tIFwiLi8uLi9tb2RlbHMvSUNvbHVtblwiO1xyXG5pbXBvcnQgeyBDb21tb25VdGlsIH0gZnJvbSBcIi4vLi4vdXRpbC9Db2x1bW5VdGlsXCI7XHJcblxyXG5lbnVtIFNob3dIaWRlIHtcclxuICAgIFNob3csXHJcbiAgICBIaWRlLFxyXG4gICAgU2hvd0FsbCxcclxuICAgIEhpZGVBbGwsXHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBUb2dnbGVDb2x1bW5IYW5kbGVyPFQ+IHtcclxuICAgIHByaXZhdGUgY29uZmlnU3RvcmU6IENvbmZpZ1N0b3JlPFQ+O1xyXG4gICAgcHJpdmF0ZSBwYXJlbnRFbGVtZW50OiBKUXVlcnk7XHJcblxyXG4gICAgY29uc3RydWN0b3IoY29uZmlnU3RvcmU6IENvbmZpZ1N0b3JlPFQ+LCBlbGVtZW50OiBKUXVlcnkpIHtcclxuICAgICAgICB0aGlzLmNvbmZpZ1N0b3JlID0gY29uZmlnU3RvcmU7XHJcbiAgICAgICAgdGhpcy5wYXJlbnRFbGVtZW50ID0gZWxlbWVudDtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc2hvd0FsbENvbHVtbnMgPSAoKTogdm9pZCA9PiB7XHJcbiAgICAgICAgdGhpcy5TZXRDb2xXaWR0aChcIi50YWJsZS1oZWFkZXIgLmhlYWRlckNvbEdyb3VwIGNvbFwiLCBTaG93SGlkZS5TaG93QWxsKTtcclxuICAgICAgICB0aGlzLlNldENvbFdpZHRoKFwiLnRhYmxlLWJvZHkgLmJvZHlDb2xHcm91cCBjb2xcIiwgU2hvd0hpZGUuU2hvd0FsbCk7XHJcbiAgICAgICAgdGhpcy5jb25maWdTdG9yZS5TZXRIaWRkZW5PbkNvbmZpZyhmYWxzZSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHNob3dDb2x1bW4gPSAoY29sdW1uSWQ6IHN0cmluZyk6IHZvaWQgPT4ge1xyXG4gICAgICAgIHRoaXMuU2V0Q29sV2lkdGgoXCIudGFibGUtaGVhZGVyIC5oZWFkZXJDb2xHcm91cCBjb2xcIiwgU2hvd0hpZGUuU2hvdywgY29sdW1uSWQpO1xyXG4gICAgICAgIHRoaXMuU2V0Q29sV2lkdGgoXCIudGFibGUtYm9keSAuYm9keUNvbEdyb3VwIGNvbFwiLCBTaG93SGlkZS5TaG93LCBjb2x1bW5JZCk7XHJcbiAgICAgICAgdGhpcy5jb25maWdTdG9yZS5TZXRIaWRkZW5PbkNvbmZpZyhmYWxzZSwgY29sdW1uSWQpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBoaWRlQ29sdW1uID0gKGNvbHVtbklkOiBzdHJpbmcpOiB2b2lkID0+IHtcclxuICAgICAgICB0aGlzLlNldENvbFdpZHRoKFwiLnRhYmxlLWhlYWRlciAuaGVhZGVyQ29sR3JvdXAgY29sXCIsIFNob3dIaWRlLkhpZGUsIGNvbHVtbklkKTtcclxuICAgICAgICB0aGlzLlNldENvbFdpZHRoKFwiLnRhYmxlLWJvZHkgLmJvZHlDb2xHcm91cCBjb2xcIiwgU2hvd0hpZGUuSGlkZSAsIGNvbHVtbklkKTtcclxuICAgICAgICB0aGlzLmNvbmZpZ1N0b3JlLlNldEhpZGRlbk9uQ29uZmlnKHRydWUsIGNvbHVtbklkKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgaGlkZUFsbENvbHVtbnMgPSAoKTogdm9pZCA9PiB7XHJcbiAgICAgICAgdGhpcy5TZXRDb2xXaWR0aChcIi50YWJsZS1oZWFkZXIgLmhlYWRlckNvbEdyb3VwIGNvbFwiLCBTaG93SGlkZS5IaWRlQWxsKTtcclxuICAgICAgICB0aGlzLlNldENvbFdpZHRoKFwiLnRhYmxlLWJvZHkgLmJvZHlDb2xHcm91cCBjb2xcIiwgU2hvd0hpZGUuSGlkZUFsbCk7XHJcbiAgICAgICAgdGhpcy5jb25maWdTdG9yZS5TZXRIaWRkZW5PbkNvbmZpZyh0cnVlKTtcclxuICAgIH1cclxuICAgIHB1YmxpYyBhcHBseUNvbHVtbkNvbmZpZyA9IChjb2x1bW5zOiBJQ29sdW1uW10pID0+IHtcclxuICAgICAgICBmb3IgKGNvbnN0IGNvbHVtbiBvZiBjb2x1bW5zKSB7XHJcbiAgICAgICAgICAgIGlmIChjb2x1bW4uaGlkZGVuKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmhpZGVDb2x1bW4oY29sdW1uLmlkKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2hvd0NvbHVtbihjb2x1bW4uaWQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcHJpdmF0ZSBTZXRDb2xXaWR0aCA9IChzZWxlY3Rvcjogc3RyaW5nLCBjb250cm9sOiBTaG93SGlkZSwgY29sdW1uSWQ/OiBzdHJpbmcpOiB2b2lkID0+IHtcclxuICAgICAgICB0aGlzLnBhcmVudEVsZW1lbnQuZmluZChzZWxlY3RvcikuZWFjaCgoaW5kZXgsIGVsZW1lbnQpOiB2b2lkIHwgZmFsc2UgPT4ge1xyXG4gICAgICAgICAgICBsZXQgd2lkdGggPSAwO1xyXG4gICAgICAgICAgICBjb25zdCBjdXJyZW50Q29sRWxlbSA9IGpRdWVyeShlbGVtZW50KTtcclxuICAgICAgICAgICAgY29uc3QgY3VycmVudENvbCA9IGN1cnJlbnRDb2xFbGVtLmF0dHIoXCJkYXRhLWhlYWRlci1pZFwiKTtcclxuICAgICAgICAgICAgaWYgKGN1cnJlbnRDb2wgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgbGV0IGNvbDogSUNvbHVtbjtcclxuICAgICAgICAgICAgICAgIGlmIChbU2hvd0hpZGUuU2hvdywgU2hvd0hpZGUuSGlkZV0uaW5kZXhPZihjb250cm9sKSA+IC0xICkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChjdXJyZW50Q29sID09PSBjb2x1bW5JZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoY29udHJvbCA9PT0gU2hvd0hpZGUuU2hvdykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sID0gQ29tbW9uVXRpbC5HZXRDb2x1bW5PYmplY3QoY3VycmVudENvbCwgdGhpcy5jb25maWdTdG9yZS5vcHRpb25zLmNvbHVtbnMpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGggPSBjb2wud2lkdGg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgY3VycmVudENvbEVsZW0ud2lkdGgoIHdpZHRoICsgXCJweFwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmIChbU2hvd0hpZGUuU2hvd0FsbCwgU2hvd0hpZGUuSGlkZUFsbF0uaW5kZXhPZihjb250cm9sKSA+IC0xKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNvbnRyb2wgPT09IFNob3dIaWRlLlNob3dBbGwpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29sID0gQ29tbW9uVXRpbC5HZXRDb2x1bW5PYmplY3QoY3VycmVudENvbCwgdGhpcy5jb25maWdTdG9yZS5vcHRpb25zLmNvbHVtbnMpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aCA9IGNvbC53aWR0aDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgY3VycmVudENvbEVsZW0ud2lkdGgoIHdpZHRoICsgXCJweFwiKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy90c2xpbnQtbG9hZGVyPz9yZWYtLTEhLi9zcmMvanMvZXZlbnRIYW5kbGVycy9Ub2dnbGVDb2x1bW5IYW5kbGVyLnRzIiwiaW1wb3J0ICogYXMgSGFuZGxlYmFycyBmcm9tIFwiaGFuZGxlYmFyc1wiO1xyXG5pbXBvcnQgKiBhcyBHcmlkRGV0YWlsc1Jvd1RlbXBsYXRlIGZyb20gXCIuLi8uLi9oYnMvZ3JpZC1kZXRhaWxzLXJvdy5oYnNcIjtcclxuaW1wb3J0ICogYXMgR3JpZEZvb3RlciBmcm9tIFwiLi4vLi4vaGJzL2dyaWQtZm9vdGVyLmhic1wiO1xyXG5pbXBvcnQgKiBhcyBHcmlkTWFpblJvd1RlbXBsYXRlIGZyb20gXCIuLi8uLi9oYnMvZ3JpZC1tYWluLXJvdy5oYnNcIjtcclxuaW1wb3J0ICogYXMgTWFuYWdlQ29sdW1uVGVtcGxhdGUgZnJvbSBcIi4uLy4uL2hicy9ncmlkLW1hbmFnZS1jb2x1bW5zLmhic1wiO1xyXG5pbXBvcnQgKiBhcyBHcmlkVGVtcGxhdGUgZnJvbSBcIi4uLy4uL2hicy9ncmlkLmhic1wiO1xyXG5pbXBvcnQgeyBDb25maWdTdG9yZSB9IGZyb20gXCIuLi9jb25maWcvQ29uZmlnU3RvcmVcIjtcclxuaW1wb3J0IHsgSVBhZ2luYXRpb24gfSBmcm9tIFwiLi4vbW9kZWxzL0lQYWdpbmF0aW9uXCI7XHJcbmltcG9ydCB7IFBhZ2VyIH0gZnJvbSBcIi4uL3BhZ2luYXRpb24vUGFnZXJcIjtcclxuaW1wb3J0IHsgSUNvbHVtbiB9IGZyb20gXCIuLy4uL21vZGVscy9JQ29sdW1uXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgR3JpZFRlbXBsYXRlU2VydmljZSA8VD4ge1xyXG4gICAgcHJpdmF0ZSBkYXRhOiBUW107XHJcbiAgICBwcml2YXRlIGNvbmZpZ1N0b3JlOiBDb25maWdTdG9yZTxUPjtcclxuICAgIHByaXZhdGUgdGVtcGxhdGVGdW5jdGlvbkZvckdyaWQ6IGFueTtcclxuICAgIHByaXZhdGUgdGVtcGxhdGVGdW5jdGlvbkZvck1haW5Sb3c6IGFueTtcclxuICAgIHByaXZhdGUgdGVtcGxhdGVGdW5jdGlvbkZvckRldGFpbHNSb3c6IGFueTtcclxuICAgIHByaXZhdGUgdGVtcGxhdGVGdW5jdGlvbkZvckZvb3RlcjogYW55O1xyXG4gICAgcHJpdmF0ZSB0ZW1wbGF0ZUZ1bmN0aW9uRm9yTWFuYWdlQ29sOiBhbnk7XHJcblxyXG4gICAgY29uc3RydWN0b3IoY29uZmlnU3RvcmU6IENvbmZpZ1N0b3JlPFQ+KSB7XHJcbiAgICAgICAgdGhpcy5jb25maWdTdG9yZSA9IGNvbmZpZ1N0b3JlO1xyXG4gICAgICAgIHRoaXMudGVtcGxhdGVGdW5jdGlvbkZvckdyaWQgPSBHcmlkVGVtcGxhdGU7XHJcbiAgICAgICAgdGhpcy50ZW1wbGF0ZUZ1bmN0aW9uRm9yTWFpblJvdyA9IEdyaWRNYWluUm93VGVtcGxhdGU7XHJcbiAgICAgICAgdGhpcy50ZW1wbGF0ZUZ1bmN0aW9uRm9yRGV0YWlsc1JvdyA9IEdyaWREZXRhaWxzUm93VGVtcGxhdGU7XHJcbiAgICAgICAgdGhpcy50ZW1wbGF0ZUZ1bmN0aW9uRm9yRm9vdGVyID0gR3JpZEZvb3RlcjtcclxuICAgICAgICB0aGlzLnRlbXBsYXRlRnVuY3Rpb25Gb3JNYW5hZ2VDb2wgPSBNYW5hZ2VDb2x1bW5UZW1wbGF0ZTtcclxuICAgIH1cclxuICAgIHB1YmxpYyBnZXQgRGF0YSgpOiBUW10ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmRhdGE7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgZ2V0IERhdGFMZW5ndGgoKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5kYXRhLmxlbmd0aDtcclxuICAgIH1cclxuICAgIHB1YmxpYyBHZXRGaXJzdFRlbXBsYXRlID0gKGRhdGE6IFRbXSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpcnN0SW5kZXg6IG51bWJlcixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhc3RJbmRleDogbnVtYmVyKTogc3RyaW5nID0+IHtcclxuICAgICAgICB0aGlzLmRhdGEgPSBkYXRhO1xyXG4gICAgICAgIGNvbnN0IG1haW5Sb3dBcnJheSA9IHRoaXMuR2V0Um93c0h0bWwoZmlyc3RJbmRleCwgbGFzdEluZGV4KTtcclxuICAgICAgICByZXR1cm4gdGhpcy50ZW1wbGF0ZUZ1bmN0aW9uRm9yR3JpZCh7XHJcbiAgICAgICAgICAgIGNvbHVtbnM6IHRoaXMuY29uZmlnU3RvcmUuT3B0aW9ucy5jb2x1bW5zLFxyXG4gICAgICAgICAgICBtYWluUm93QXJyYXksXHJcbiAgICAgICAgICAgIHBhZ2luYXRpb25EYXRhOiBQYWdlci5QYWdpbmF0aW9uRGF0YSxcclxuICAgICAgICAgICAgY2FwdGlvbjogdGhpcy5jb25maWdTdG9yZS5PcHRpb25zLmNhcHRpb24sXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgZ2V0VGVtcGxhdGUgPSAoZmlyc3RJbmRleDogbnVtYmVyLCBsYXN0SW5kZXg6IG51bWJlcik6IHN0cmluZyA9PiB7XHJcbiAgICAgICAgY29uc3QgbWFpblJvd0FycmF5ID0gdGhpcy5HZXRSb3dzSHRtbChmaXJzdEluZGV4LCBsYXN0SW5kZXgpO1xyXG4gICAgICAgIHJldHVybiB0aGlzLnRlbXBsYXRlRnVuY3Rpb25Gb3JNYWluUm93KHtcclxuICAgICAgICAgICAgY29sdW1uczogdGhpcy5jb25maWdTdG9yZS5PcHRpb25zLmNvbHVtbnMsXHJcbiAgICAgICAgICAgIG1haW5Sb3dBcnJheSxcclxuICAgICAgICAgICAgY2FwdGlvbjogdGhpcy5jb25maWdTdG9yZS5PcHRpb25zLmNhcHRpb24sXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgR2V0TWFuYWdlQ29sdW1uc0h0bWwgPSAoKTogc3RyaW5nID0+IHtcclxuICAgICAgICByZXR1cm4gdGhpcy50ZW1wbGF0ZUZ1bmN0aW9uRm9yTWFuYWdlQ29sKHtjb2x1bW5zOiB0aGlzLmNvbmZpZ1N0b3JlLk9wdGlvbnMuY29sdW1uc30pO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBHZXRSb3dzSHRtbCA9IChmaXJzdEluZGV4OiBudW1iZXIsIGxhc3RJbmRleDogbnVtYmVyKTogYW55W10gPT4ge1xyXG4gICAgICAgIGNvbnN0IG1haW5Sb3dBcnJheTogYW55W10gPSBbXTtcclxuICAgICAgICBjb25zdCBsZW5ndGggPSB0aGlzLmNvbmZpZ1N0b3JlLk9wdGlvbnMuY29sdW1ucy5sZW5ndGggKyAxO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSBmaXJzdEluZGV4OyBpIDw9IGxhc3RJbmRleDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHJvdzogVCA9IHRoaXMuZGF0YVtpXTtcclxuICAgICAgICAgICAgY29uc3QgbWFpblJvd0NvbEFycmF5OiBhbnlbXSA9IFtdO1xyXG4gICAgICAgICAgICBmb3IgKGNvbnN0IGNvbCBvZiB0aGlzLmNvbmZpZ1N0b3JlLk9wdGlvbnMuY29sdW1ucykge1xyXG4gICAgICAgICAgICAgICAgbGV0IGNvbHVtblZhbHVlID0gcm93W2NvbC5pZF07XHJcbiAgICAgICAgICAgICAgICBpZiAoY29sLnJlbmRlckh5YnJpZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbHVtblZhbHVlID0gdGhpcy5jb25maWdTdG9yZS5PcHRpb25zLmh5YnJpZEZ1bmN0aW9uKGNvbCwgcm93KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIG1haW5Sb3dDb2xBcnJheS5wdXNoKHtcclxuICAgICAgICAgICAgICAgICAgICBjb2x1bW5WYWx1ZSxcclxuICAgICAgICAgICAgICAgICAgICB0eXBlOiBjb2wudHlwZSxcclxuICAgICAgICAgICAgICAgICAgICBoaWRkZW46IGNvbC5oaWRkZW4sXHJcbiAgICAgICAgICAgICAgICAgICAgYWN0dWFsVmFsdWU6IHJvd1tjb2wuaWRdLFxyXG4gICAgICAgICAgICAgICAgICAgIGNvbHVtbk5hbWU6IGNvbC5uYW1lLFxyXG4gICAgICAgICAgICAgICAgICAgIGlkOiBjb2wuaWQsXHJcbiAgICAgICAgICAgICAgICAgICAgZmlsdGVyYWJsZTogY29sLmZpbHRlcmFibGUsXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBtYWluUm93QXJyYXkucHVzaCh7XHJcbiAgICAgICAgICAgICAgICByb3dEYXRhOiBKU09OLnN0cmluZ2lmeShyb3cpLFxyXG4gICAgICAgICAgICAgICAga2V5Q29sdW1uOiByb3dbdGhpcy5jb25maWdTdG9yZS5PcHRpb25zLmtleUNvbHVtbl0sXHJcbiAgICAgICAgICAgICAgICBtYWluUm93Q29sQXJyYXksXHJcbiAgICAgICAgICAgICAgICBsZW5ndGg6IHRoaXMuY29uZmlnU3RvcmUuT3B0aW9ucy5jb2x1bW5zLmxlbmd0aCxcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBtYWluUm93QXJyYXk7XHJcbiAgICB9XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL3RzbGludC1sb2FkZXI/P3JlZi0tMSEuL3NyYy9qcy9zZXJ2aWNlcy9HcmlkVGVtcGxhdGVTZXJ2aWNlLnRzIiwiY29uc3Qgc2VsZWN0ZWQgPSAoaW5wdXQ6IG51bWJlciwgdmFsdWU6IG51bWJlcik6IHN0cmluZyA9PiB7XHJcbiAgICByZXR1cm4gaW5wdXQgPT09IHZhbHVlID8gXCJzZWxlY3RlZFwiIDogXCJcIjtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHNlbGVjdGVkO1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvdHNsaW50LWxvYWRlcj8/cmVmLS0xIS4vc3JjL2hicy9oZWxwZXJzL1NlbGVjdGVkLnRzIiwidmFyIEhhbmRsZWJhcnMgPSByZXF1aXJlKFwiaGFuZGxlYmFyc1wiKTtcbmZ1bmN0aW9uIF9fZGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiAob2JqLl9fZXNNb2R1bGUgPyBvYmpbXCJkZWZhdWx0XCJdIDogb2JqKTsgfVxubW9kdWxlLmV4cG9ydHMgPSAoSGFuZGxlYmFyc1tcImRlZmF1bHRcIl0gfHwgSGFuZGxlYmFycykudGVtcGxhdGUoe1wiMVwiOmZ1bmN0aW9uKGNvbnRhaW5lcixkZXB0aDAsaGVscGVycyxwYXJ0aWFscyxkYXRhKSB7XG4gICAgdmFyIGFsaWFzMT1jb250YWluZXIubGFtYmRhLCBhbGlhczI9Y29udGFpbmVyLmVzY2FwZUV4cHJlc3Npb247XG5cbiAgcmV0dXJuIFwiICAgICAgICAgICAgICAgIDx0ciBkYXRhLWhlYWRlci1pZD1cXFwiXCJcbiAgICArIGFsaWFzMihhbGlhczEoKGRlcHRoMCAhPSBudWxsID8gZGVwdGgwLm5hbWUgOiBkZXB0aDApLCBkZXB0aDApKVxuICAgICsgXCJcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPHRkPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbD5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XFxcImNoZWNrYm94XFxcIiBjbGFzcz1cXFwiY29sLXNldHRpbmdzLWhpZGRlbi1jaGVja2JveCBndWkgbS1yLTEwXFxcIiB2YWx1ZT1cXFwiXCJcbiAgICArIGFsaWFzMihhbGlhczEoKGRlcHRoMCAhPSBudWxsID8gZGVwdGgwLmlkIDogZGVwdGgwKSwgZGVwdGgwKSlcbiAgICArIFwiXFxcIiBcIlxuICAgICsgYWxpYXMyKF9fZGVmYXVsdChyZXF1aXJlKFwiQzpcXFxcVXNlcnNcXFxccm91c3R1cmdcXFxcU291cmNlXFxcXFJlcG9zXFxcXFNlYXJjaE1hc3RlclxcXFxHcmlkb29cXFxcc3JjXFxcXGhic1xcXFxoZWxwZXJzXFxcXENoZWNrZWQudHNcIikpLmNhbGwoZGVwdGgwICE9IG51bGwgPyBkZXB0aDAgOiAoY29udGFpbmVyLm51bGxDb250ZXh0IHx8IHt9KSwoZGVwdGgwICE9IG51bGwgPyBkZXB0aDAuaGlkZGVuIDogZGVwdGgwKSx7XCJuYW1lXCI6XCJDaGVja2VkXCIsXCJoYXNoXCI6e30sXCJkYXRhXCI6ZGF0YX0pKVxuICAgICsgXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXG4gICAgKyBhbGlhczIoYWxpYXMxKChkZXB0aDAgIT0gbnVsbCA/IGRlcHRoMC5uYW1lIDogZGVwdGgwKSwgZGVwdGgwKSlcbiAgICArIFwiXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDwvdGQ+XFxyXFxuICAgICAgICAgICAgICAgIDwvdHI+XFxyXFxuXCI7XG59LFwiY29tcGlsZXJcIjpbNyxcIj49IDQuMC4wXCJdLFwibWFpblwiOmZ1bmN0aW9uKGNvbnRhaW5lcixkZXB0aDAsaGVscGVycyxwYXJ0aWFscyxkYXRhKSB7XG4gICAgdmFyIHN0YWNrMTtcblxuICByZXR1cm4gXCI8ZGl2IGNsYXNzPVxcXCJndWkgb2YtaGlkZGVuIHAtMTAgbWluLXctNTAgdy1hdXRvIGZsdWlkLWggZmxleCBjb2x1bW4gY29udGFpbmVyXFxcIiA+XFxyXFxuICAgIDxkaXYgY2xhc3M9XFxcImNvbC1zZXR0aW5ncy1oZWFkZXJcXFwiIHN0eWxlPVxcXCJ3aWR0aDogMTAwJVxcXCI+XFxyXFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJndWkgbWluaSBmbHVpZCBpY29uIGlucHV0XFxcIj5cXHJcXG4gICAgICAgICAgICA8aW5wdXQgY2xhc3M9XFxcImNvbC1zZXR0aW5ncy1maWx0ZXJcXFwiIHR5cGU9XFxcInRleHRcXFwiIHBsYWNlaG9sZGVyPVxcXCJTZWFyY2ggZmlsdGVyLi4uXFxcIj5cXHJcXG4gICAgICAgICAgICA8aSBjbGFzcz1cXFwic2VhcmNoIGljb25cXFwiPjwvaT5cXHJcXG4gICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwiZ3VpIG0tdC0xMFxcXCI+XFxyXFxuICAgICAgICAgICAgPGEgY2xhc3M9XFxcImd1aSBsZWZ0IHNob3ctYWxsLWNvbHVtblxcXCI+U2hvdyBBbGw8L2E+XFxyXFxuICAgICAgICAgICAgPGEgY2xhc3M9XFxcImd1aSByaWdodCBoaWRlLWFsbC1jb2x1bW5cXFwiPkhpZGUgQWxsPC9hPlxcclxcbiAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJndWkgY2xlYXJcXFwiPjwvZGl2PlxcclxcbiAgICA8L2Rpdj5cXHJcXG4gICAgPGRpdiBjbGFzcz1cXFwiZ3VpIGNsZWFyXFxcIj48L2Rpdj5cXHJcXG4gICAgPGRpdiBjbGFzcz1cXFwiY29sLXNldHRpbmdzLXRhYmxlIGd1aSBmbHVpZCBoLTkwIG9mLWF1dG8gcC01IG0tdC0xMFxcXCIgPlxcclxcbiAgICAgICAgPHRhYmxlIGNsYXNzPVxcXCJndWkgc21hbGwgdmVyeSBib3JkZXItbGVzcyBiYXNpYyBjb21wYWN0IHRhYmxlXFxcIj5cXHJcXG4gICAgICAgICAgICA8dGJvZHk+XFxyXFxuXCJcbiAgICArICgoc3RhY2sxID0gaGVscGVycy5lYWNoLmNhbGwoZGVwdGgwICE9IG51bGwgPyBkZXB0aDAgOiAoY29udGFpbmVyLm51bGxDb250ZXh0IHx8IHt9KSwoZGVwdGgwICE9IG51bGwgPyBkZXB0aDAuY29sdW1ucyA6IGRlcHRoMCkse1wibmFtZVwiOlwiZWFjaFwiLFwiaGFzaFwiOnt9LFwiZm5cIjpjb250YWluZXIucHJvZ3JhbSgxLCBkYXRhLCAwKSxcImludmVyc2VcIjpjb250YWluZXIubm9vcCxcImRhdGFcIjpkYXRhfSkpICE9IG51bGwgPyBzdGFjazEgOiBcIlwiKVxuICAgICsgXCIgICAgICAgICAgICA8L3Rib2R5PlxcclxcbiAgICAgICAgPC90YWJsZT5cXHJcXG4gICAgPC9kaXY+XFxyXFxuPC9kaXY+XCI7XG59LFwidXNlRGF0YVwiOnRydWV9KTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9oYnMvZ3JpZC1tYW5hZ2UtY29sdW1ucy5oYnNcbi8vIG1vZHVsZSBpZCA9IDI0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIiwiY29uc3QgY2hlY2tlZCA9IChib29sOiBib29sZWFuKTogc3RyaW5nID0+IHtcclxuICAgIHJldHVybiAhYm9vbCA/IFwiY2hlY2tlZFwiIDogXCJcIjtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNoZWNrZWQ7XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy90c2xpbnQtbG9hZGVyPz9yZWYtLTEhLi9zcmMvaGJzL2hlbHBlcnMvQ2hlY2tlZC50cyIsInZhciBIYW5kbGViYXJzID0gcmVxdWlyZShcImhhbmRsZWJhcnNcIik7XG5mdW5jdGlvbiBfX2RlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgKG9iai5fX2VzTW9kdWxlID8gb2JqW1wiZGVmYXVsdFwiXSA6IG9iaik7IH1cbm1vZHVsZS5leHBvcnRzID0gKEhhbmRsZWJhcnNbXCJkZWZhdWx0XCJdIHx8IEhhbmRsZWJhcnMpLnRlbXBsYXRlKHtcIjFcIjpmdW5jdGlvbihjb250YWluZXIsZGVwdGgwLGhlbHBlcnMscGFydGlhbHMsZGF0YSkge1xuICAgIHJldHVybiBcIiAgICAgICAgICAgICAgICA8Y2FwdGlvbiBjbGFzcz1cXFwiZ3VpIGd1aS1zdWJoZWFkaW5nLTIgbS0wIHAtMCB0ZXh0LWxlZnRcXFwiPlwiXG4gICAgKyBjb250YWluZXIuZXNjYXBlRXhwcmVzc2lvbihjb250YWluZXIubGFtYmRhKChkZXB0aDAgIT0gbnVsbCA/IGRlcHRoMC5jYXB0aW9uIDogZGVwdGgwKSwgZGVwdGgwKSlcbiAgICArIFwiPC9jYXB0aW9uPlxcblwiO1xufSxcIjNcIjpmdW5jdGlvbihjb250YWluZXIsZGVwdGgwLGhlbHBlcnMscGFydGlhbHMsZGF0YSkge1xuICAgIHZhciBzdGFjazE7XG5cbiAgcmV0dXJuIFwiICAgICAgICAgICAgICAgICAgICBcIlxuICAgICsgKChzdGFjazEgPSBfX2RlZmF1bHQocmVxdWlyZShcIkM6XFxcXFVzZXJzXFxcXHJvdXN0dXJnXFxcXFNvdXJjZVxcXFxSZXBvc1xcXFxTZWFyY2hNYXN0ZXJcXFxcR3JpZG9vXFxcXHNyY1xcXFxoYnNcXFxcaGVscGVyc1xcXFxDb2x1bW4udHNcIikpLmNhbGwoZGVwdGgwICE9IG51bGwgPyBkZXB0aDAgOiAoY29udGFpbmVyLm51bGxDb250ZXh0IHx8IHt9KSxkZXB0aDAse1wibmFtZVwiOlwiQ29sdW1uXCIsXCJoYXNoXCI6e30sXCJkYXRhXCI6ZGF0YX0pKSAhPSBudWxsID8gc3RhY2sxIDogXCJcIilcbiAgICArIFwiXFxuXCI7XG59LFwiNVwiOmZ1bmN0aW9uKGNvbnRhaW5lcixkZXB0aDAsaGVscGVycyxwYXJ0aWFscyxkYXRhKSB7XG4gICAgdmFyIHN0YWNrMSwgYWxpYXMxPWNvbnRhaW5lci5sYW1iZGEsIGFsaWFzMj1jb250YWluZXIuZXNjYXBlRXhwcmVzc2lvbjtcblxuICByZXR1cm4gXCIgICAgICAgICAgICAgICAgICAgICAgICA8dGggY2xhc3M9XFxcImd1aSBjdXJzb3ItcG9pbnRlclxcXCIgaWQ9XFxcImhlYWRlci1cIlxuICAgICsgYWxpYXMyKGFsaWFzMSgoZGVwdGgwICE9IG51bGwgPyBkZXB0aDAuaWQgOiBkZXB0aDApLCBkZXB0aDApKVxuICAgICsgXCJcXFwiIGRhdGEtaGVhZGVyLWlkPVxcXCJcIlxuICAgICsgYWxpYXMyKGFsaWFzMSgoZGVwdGgwICE9IG51bGwgPyBkZXB0aDAuaWQgOiBkZXB0aDApLCBkZXB0aDApKVxuICAgICsgXCJcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cXFwiZ3VpIHN1YiBoZWFkZXJcXFwiPlwiXG4gICAgKyBhbGlhczIoYWxpYXMxKChkZXB0aDAgIT0gbnVsbCA/IGRlcHRoMC5uYW1lIDogZGVwdGgwKSwgZGVwdGgwKSlcbiAgICArIFwiPC9zcGFuPlxcblwiXG4gICAgKyAoKHN0YWNrMSA9IGhlbHBlcnNbXCJpZlwiXS5jYWxsKGRlcHRoMCAhPSBudWxsID8gZGVwdGgwIDogKGNvbnRhaW5lci5udWxsQ29udGV4dCB8fCB7fSksKGRlcHRoMCAhPSBudWxsID8gZGVwdGgwLnNvcnRhYmxlIDogZGVwdGgwKSx7XCJuYW1lXCI6XCJpZlwiLFwiaGFzaFwiOnt9LFwiZm5cIjpjb250YWluZXIucHJvZ3JhbSg2LCBkYXRhLCAwKSxcImludmVyc2VcIjpjb250YWluZXIubm9vcCxcImRhdGFcIjpkYXRhfSkpICE9IG51bGwgPyBzdGFjazEgOiBcIlwiKVxuICAgICsgXCIgICAgICAgICAgICAgICAgICAgICAgICA8L3RoPlxcblwiO1xufSxcIjZcIjpmdW5jdGlvbihjb250YWluZXIsZGVwdGgwLGhlbHBlcnMscGFydGlhbHMsZGF0YSkge1xuICAgIHZhciBzdGFjazE7XG5cbiAgcmV0dXJuIFwiICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxuICAgICsgKChzdGFjazEgPSBfX2RlZmF1bHQocmVxdWlyZShcIkM6XFxcXFVzZXJzXFxcXHJvdXN0dXJnXFxcXFNvdXJjZVxcXFxSZXBvc1xcXFxTZWFyY2hNYXN0ZXJcXFxcR3JpZG9vXFxcXHNyY1xcXFxoYnNcXFxcaGVscGVyc1xcXFxPcmRlcmVkLnRzXCIpKS5jYWxsKGRlcHRoMCAhPSBudWxsID8gZGVwdGgwIDogKGNvbnRhaW5lci5udWxsQ29udGV4dCB8fCB7fSksKGRlcHRoMCAhPSBudWxsID8gZGVwdGgwLm9yZGVyIDogZGVwdGgwKSx7XCJuYW1lXCI6XCJPcmRlcmVkXCIsXCJoYXNoXCI6e30sXCJkYXRhXCI6ZGF0YX0pKSAhPSBudWxsID8gc3RhY2sxIDogXCJcIilcbiAgICArIFwiXFxuXCI7XG59LFwiY29tcGlsZXJcIjpbNyxcIj49IDQuMC4wXCJdLFwibWFpblwiOmZ1bmN0aW9uKGNvbnRhaW5lcixkZXB0aDAsaGVscGVycyxwYXJ0aWFscyxkYXRhKSB7XG4gICAgdmFyIHN0YWNrMSwgYWxpYXMxPWRlcHRoMCAhPSBudWxsID8gZGVwdGgwIDogKGNvbnRhaW5lci5udWxsQ29udGV4dCB8fCB7fSk7XG5cbiAgcmV0dXJuIFwiPHN0eWxlPlxcbiAgICAuaW5uZXItY29udGFpbmVyIHtcXG4gICAgICAgIGhlaWdodDogMTAwJTtcXG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XFxuICAgICAgICB3aWR0aDogMTAwJTtcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICB9XFxuICAgIC50YWJsZS1oZWFkZXIge1xcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICAgICAgdG9wOjAgIWltcG9ydGFudDtcXG4gICAgfVxcbiAgICAudGFibGUtYm9keSB7XFxuICAgICAgICBvdmVyZmxvdzogYXV0bztcXG4gICAgICAgIGZsZXg6IDU7XFxuICAgIH1cXG4gICAgLm1hcmdpbi1hdXRve1xcbiAgICAgICAgbWFyZ2luOiBhdXRvICFpbXBvcnRhbnQ7XFxuICAgIH1cXG4gICAgLmJvcmRlci1sZXNzIHRyIHRkLC5ib3JkZXItbGVzcyB7IGJvcmRlcjogMHB4ICFpbXBvcnRhbnQ7IH1cXG4gICAgLnVpLnN1cGVyY29tcGFjdC5pY29uLmJ1dHRvbiwgLnVpLnN1cGVyY29tcGFjdC5pY29uLmJ1dHRvbnMgLmJ1dHRvbiB7XFxuICAgICAgICBwYWRkaW5nOiAuM2VtIC4zZW0gLjNlbSAuM2VtICFpbXBvcnRhbnQ7XFxuICAgIH1cXG48L3N0eWxlPlxcbjxkaXYgY2xhc3M9XFxcImlubmVyLWNvbnRhaW5lciBndWkgZmx1aWQgY29udGFpbmVyXFxcIiBzdHlsZT1cXFwicGFkZGluZzowJTtcXFwiPlxcbiAgICA8ZGl2IGNsYXNzPVxcXCJ0YWJsZS1oZWFkZXJcXFwiPlxcbiAgICAgICAgPHRhYmxlIGlkPVxcXCJoZWFkZXJ0YWJsZVxcXCIgY2xhc3M9XFxcImd1aSBiYXNpYyBsYXJnZSBjb21wYWN0IHNvcnRhYmxlIGZpeGVkIHNpbmdsZSBsaW5lIHRhYmxlXFxcIj5cXG5cIlxuICAgICsgKChzdGFjazEgPSBoZWxwZXJzW1wiaWZcIl0uY2FsbChhbGlhczEsKGRlcHRoMCAhPSBudWxsID8gZGVwdGgwLmNhcHRpb24gOiBkZXB0aDApLHtcIm5hbWVcIjpcImlmXCIsXCJoYXNoXCI6e30sXCJmblwiOmNvbnRhaW5lci5wcm9ncmFtKDEsIGRhdGEsIDApLFwiaW52ZXJzZVwiOmNvbnRhaW5lci5ub29wLFwiZGF0YVwiOmRhdGF9KSkgIT0gbnVsbCA/IHN0YWNrMSA6IFwiXCIpXG4gICAgKyBcIiAgICAgICAgICAgIDxjb2xncm91cCBjbGFzcz1cXFwiaGVhZGVyQ29sR3JvdXBcXFwiPlxcbiAgICAgICAgICAgICAgICA8Y29sIHN0eWxlPVxcXCJ3aWR0aDo0MHB4O1xcXCIgLz5cXG4gICAgICAgICAgICAgICAgPGNvbCBzdHlsZT1cXFwid2lkdGg6NDBweDtcXFwiIC8+XFxuXCJcbiAgICArICgoc3RhY2sxID0gaGVscGVycy5lYWNoLmNhbGwoYWxpYXMxLChkZXB0aDAgIT0gbnVsbCA/IGRlcHRoMC5jb2x1bW5zIDogZGVwdGgwKSx7XCJuYW1lXCI6XCJlYWNoXCIsXCJoYXNoXCI6e30sXCJmblwiOmNvbnRhaW5lci5wcm9ncmFtKDMsIGRhdGEsIDApLFwiaW52ZXJzZVwiOmNvbnRhaW5lci5ub29wLFwiZGF0YVwiOmRhdGF9KSkgIT0gbnVsbCA/IHN0YWNrMSA6IFwiXCIpXG4gICAgKyBcIiAgICAgICAgICAgIDwvY29sZ3JvdXA+XFxuICAgICAgICAgICAgPHRoZWFkPlxcbiAgICAgICAgICAgICAgICA8dHI+XFxuICAgICAgICAgICAgICAgICAgICA8dGg+PC90aD5cXG4gICAgICAgICAgICAgICAgICAgIDx0aD48aW5wdXQgdHlwZT1cXFwiY2hlY2tib3hcXFwiIGNsYXNzPVxcXCJzZWxlY3QtYWxsLWNoZWNrYm94IGN1cnNvci1wb2ludGVyXFxcIj48L3RoPlxcblwiXG4gICAgKyAoKHN0YWNrMSA9IGhlbHBlcnMuZWFjaC5jYWxsKGFsaWFzMSwoZGVwdGgwICE9IG51bGwgPyBkZXB0aDAuY29sdW1ucyA6IGRlcHRoMCkse1wibmFtZVwiOlwiZWFjaFwiLFwiaGFzaFwiOnt9LFwiZm5cIjpjb250YWluZXIucHJvZ3JhbSg1LCBkYXRhLCAwKSxcImludmVyc2VcIjpjb250YWluZXIubm9vcCxcImRhdGFcIjpkYXRhfSkpICE9IG51bGwgPyBzdGFjazEgOiBcIlwiKVxuICAgICsgXCIgICAgICAgICAgICAgICAgPC90cj5cXG4gICAgICAgICAgICA8L3RoZWFkPlxcbiAgICAgICAgPC90YWJsZT5cXG4gICAgPC9kaXY+XFxuICAgIDxkaXYgY2xhc3M9XFxcInRhYmxlLWJvZHlcXFwiPlxcbiAgICAgICAgPHRhYmxlIGNsYXNzPVxcXCJndWkgYmFzaWMgbGFyZ2UgY29tcGFjdCBmaXhlZCBzZWxlY3RhYmxlIHNpbmdsZSBsaW5lIHRhYmxlIG1haW5UYWJsZVxcXCI+XFxuICAgICAgICAgICAgPGNvbGdyb3VwIGNsYXNzPVxcXCJib2R5Q29sR3JvdXBcXFwiPlxcbiAgICAgICAgICAgICAgICA8Y29sIHN0eWxlPVxcXCJ3aWR0aDo0MHB4O1xcXCIgLz4gXFxuICAgICAgICAgICAgICAgIDxjb2wgc3R5bGU9XFxcIndpZHRoOjQwcHg7XFxcIiAvPlxcblwiXG4gICAgKyAoKHN0YWNrMSA9IGhlbHBlcnMuZWFjaC5jYWxsKGFsaWFzMSwoZGVwdGgwICE9IG51bGwgPyBkZXB0aDAuY29sdW1ucyA6IGRlcHRoMCkse1wibmFtZVwiOlwiZWFjaFwiLFwiaGFzaFwiOnt9LFwiZm5cIjpjb250YWluZXIucHJvZ3JhbSgzLCBkYXRhLCAwKSxcImludmVyc2VcIjpjb250YWluZXIubm9vcCxcImRhdGFcIjpkYXRhfSkpICE9IG51bGwgPyBzdGFjazEgOiBcIlwiKVxuICAgICsgXCIgICAgICAgICAgICA8L2NvbGdyb3VwPlxcbiAgICAgICAgICAgIDx0Ym9keSBjbGFzcz1cXFwibWFpblRhYmxlQm9keVxcXCI+XFxuXCJcbiAgICArICgoc3RhY2sxID0gY29udGFpbmVyLmludm9rZVBhcnRpYWwocmVxdWlyZShcIkM6XFxcXFVzZXJzXFxcXHJvdXN0dXJnXFxcXFNvdXJjZVxcXFxSZXBvc1xcXFxTZWFyY2hNYXN0ZXJcXFxcR3JpZG9vXFxcXHNyY1xcXFxoYnNcXFxcZ3JpZC1tYWluLXJvdy5oYnNcIiksZGVwdGgwLHtcIm5hbWVcIjpcImdyaWQtbWFpbi1yb3dcIixcImRhdGFcIjpkYXRhLFwiaW5kZW50XCI6XCIgICAgICAgICAgICAgICAgXCIsXCJoZWxwZXJzXCI6aGVscGVycyxcInBhcnRpYWxzXCI6cGFydGlhbHMsXCJkZWNvcmF0b3JzXCI6Y29udGFpbmVyLmRlY29yYXRvcnN9KSkgIT0gbnVsbCA/IHN0YWNrMSA6IFwiXCIpXG4gICAgKyBcIiAgICAgICAgICAgIDwvdGJvZHk+XFxuICAgICAgICA8L3RhYmxlPlxcbiAgICA8L2Rpdj5cXG4gICAgPGRpdiBjbGFzcz1cXFwidGFibGUtZm9vdGVyIGd1aSBoLWF1dG8gZmx1aWQtdyBmbGV4IGpjLXNiIHAtNSBtLTBcXFwiPlxcblwiXG4gICAgKyAoKHN0YWNrMSA9IGNvbnRhaW5lci5pbnZva2VQYXJ0aWFsKHJlcXVpcmUoXCJDOlxcXFxVc2Vyc1xcXFxyb3VzdHVyZ1xcXFxTb3VyY2VcXFxcUmVwb3NcXFxcU2VhcmNoTWFzdGVyXFxcXEdyaWRvb1xcXFxzcmNcXFxcaGJzXFxcXGdyaWQtZm9vdGVyLmhic1wiKSxkZXB0aDAse1wibmFtZVwiOlwiZ3JpZC1mb290ZXJcIixcImRhdGFcIjpkYXRhLFwiaW5kZW50XCI6XCIgICAgICAgICAgIFwiLFwiaGVscGVyc1wiOmhlbHBlcnMsXCJwYXJ0aWFsc1wiOnBhcnRpYWxzLFwiZGVjb3JhdG9yc1wiOmNvbnRhaW5lci5kZWNvcmF0b3JzfSkpICE9IG51bGwgPyBzdGFjazEgOiBcIlwiKVxuICAgICsgXCIgICAgPC9kaXY+XFxuPC9kaXY+XCI7XG59LFwidXNlUGFydGlhbFwiOnRydWUsXCJ1c2VEYXRhXCI6dHJ1ZX0pO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2hicy9ncmlkLmhic1xuLy8gbW9kdWxlIGlkID0gMjZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEiLCJjb25zdCBDb2x1bW4gPSAoY29sKTogc3RyaW5nID0+IHtcclxuICAgIGNvbnN0IGNhbGNXaWR0aDogbnVtYmVyID0gY29sLmhpZGRlbiA/IDAgOiBjb2wud2lkdGg7XHJcbiAgICBjb25zdCBkYXRhQXR0cklkID0gJ2RhdGEtaGVhZGVyLWlkPVwiJyArIGNvbC5pZCArICdcIic7XHJcbiAgICByZXR1cm4gJzxjb2wgc3R5bGU9XCJ3aWR0aCA6ICcgKyBjYWxjV2lkdGggKyAncHg7XCInICsgZGF0YUF0dHJJZCArIFwiIC8+XCI7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDb2x1bW47XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy90c2xpbnQtbG9hZGVyPz9yZWYtLTEhLi9zcmMvaGJzL2hlbHBlcnMvQ29sdW1uLnRzIiwiaW1wb3J0IHsgR3JpZE9yZGVyRGlyZWN0aW9uIH0gZnJvbSBcIi4uLy4uL2pzL21vZGVscy9HcmlkT3JkZXJEaXJlY3Rpb25cIjtcclxuXHJcbmNvbnN0IG9yZGVyZWQgPSAob3JkZXI6IEdyaWRPcmRlckRpcmVjdGlvbik6IHN0cmluZyA9PiB7XHJcbiAgICBpZiAob3JkZXIgPT09IEdyaWRPcmRlckRpcmVjdGlvbi5Bc2MpIHtcclxuICAgICAgICByZXR1cm4gXCI8aSBjbGFzcz1cXFwiZ3VpIGd1aS1pY29uIGd1aS1pY29uLWFycm93LXVwXFxcIiA+PC9pPiBcIjtcclxuICAgIH0gZWxzZSBpZiAob3JkZXIgPT09IEdyaWRPcmRlckRpcmVjdGlvbi5EZXNjKSB7XHJcbiAgICAgICAgcmV0dXJuIFwiPGkgY2xhc3M9XFxcImd1aSBndWktaWNvbiBndWktaWNvbi1hcnJvdy1kb3duXFxcIiA+PC9pPiBcIjtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgcmV0dXJuIFwiPGkgY2xhc3M9XFxcImd1aSBndWktaWNvbiBndWktaWNvbi1hcnJvdy11cCBndWktaGlkZGVuXFxcIiBhcmlhLWhpZGRlbj1cXFwidHJ1ZVxcXCIgPjwvaT4gXCIgK1xyXG4gICAgICAgICAgICAgICBcIjxpIGNsYXNzPVxcXCJndWkgZ3VpLWljb24gZ3VpLWljb24tYXJyb3ctZG93biBndWktaGlkZGVuXFxcIiBhcmlhLWhpZGRlbj1cXFwidHJ1ZVxcXCIgPjwvaT5cIjtcclxuICAgIH1cclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IG9yZGVyZWQ7XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy90c2xpbnQtbG9hZGVyPz9yZWYtLTEhLi9zcmMvaGJzL2hlbHBlcnMvT3JkZXJlZC50cyJdLCJzb3VyY2VSb290IjoiIn0=