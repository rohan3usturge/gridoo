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
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.escapeExpression, alias3=container.lambda;

  return "<div data-role=\"pager\" class=\"gui left gui-subheading-2 col-md-6 text-left m-0\">\r\n    <span class=\"gui mini compact \">\r\n        <button class=\"gui mini compact firstLink\" aria-hidden=\"true\" "
    + alias2(__default(__webpack_require__(/*! ./src/hbs/helpers/Disabled.ts */ 1)).call(alias1,((stack1 = (depth0 != null ? depth0.paginationData : depth0)) != null ? stack1.firstPageLinkDisabled : stack1),{"name":"Disabled","hash":{},"data":data}))
    + "\r\n            aria-label=\"Go to the first page\" title=\"Go to the first page\" data-page=\"1\" tabindex=\"-1\">\r\n            <i class=\"gui-icon gui-icon-previous\"></i>\r\n        </button>\r\n        <button class=\"gui mini compact prevLink\" aria-hidden=\"true\" "
    + alias2(__default(__webpack_require__(/*! ./src/hbs/helpers/Disabled.ts */ 1)).call(alias1,((stack1 = (depth0 != null ? depth0.paginationData : depth0)) != null ? stack1.prevPageLinkDisabled : stack1),{"name":"Disabled","hash":{},"data":data}))
    + "\r\n            aria-label=\"Go to the previous page\" title=\"Go to the previous page\" data-page=\""
    + alias2(__default(__webpack_require__(/*! ./src/hbs/helpers/math.ts */ 8)).call(alias1,((stack1 = (depth0 != null ? depth0.paginationData : depth0)) != null ? stack1.pageIndex : stack1),"-",1,{"name":"math","hash":{},"data":data}))
    + "\"\r\n            tabindex=\"-1\">\r\n            <i class=\"gui-icon gui-icon-chevron-left\"></i>\r\n            Prev\r\n        </button>\r\n    </span>\r\n    <span class=\"gui pager-input-container input\">\r\n        <span class=\"gui m-r-5\"> Page </span>\r\n        <input class=\"gui pager-input w-25 p-0 m-r-5\" aria-label=\"1\" value=\""
    + alias2(alias3(((stack1 = (depth0 != null ? depth0.paginationData : depth0)) != null ? stack1.pageIndex : stack1), depth0))
    + "\" type=\"text\" placeholder=\"Page Number ...\">\r\n        <span class=\"no-of-pages-scan\" data-number-of-pages=\""
    + alias2(alias3(((stack1 = (depth0 != null ? depth0.paginationData : depth0)) != null ? stack1.noOfPages : stack1), depth0))
    + "\"> of "
    + alias2(alias3(((stack1 = (depth0 != null ? depth0.paginationData : depth0)) != null ? stack1.noOfPages : stack1), depth0))
    + "</span>\r\n    </span>\r\n    <span class=\"gui mini compact \">\r\n        <button class=\"gui mini compact nextLink\" aria-hidden=\"true\" "
    + alias2(__default(__webpack_require__(/*! ./src/hbs/helpers/Disabled.ts */ 1)).call(alias1,((stack1 = (depth0 != null ? depth0.paginationData : depth0)) != null ? stack1.nextPageLinkDisabled : stack1),{"name":"Disabled","hash":{},"data":data}))
    + "\r\n            aria-label=\"Go to the next page\" title=\"Go to the next page\" data-page=\""
    + alias2(__default(__webpack_require__(/*! ./src/hbs/helpers/math.ts */ 8)).call(alias1,((stack1 = (depth0 != null ? depth0.paginationData : depth0)) != null ? stack1.pageIndex : stack1),"+",1,{"name":"math","hash":{},"data":data}))
    + "\" tabindex=\"-1\">\r\n            Next\r\n            <i class=\"gui-icon gui-icon-chevron-right\"></i>\r\n        </button>\r\n        <button class=\"gui mini compact lastLink\" aria-hidden=\"true\" "
    + alias2(__default(__webpack_require__(/*! ./src/hbs/helpers/Disabled.ts */ 1)).call(alias1,((stack1 = (depth0 != null ? depth0.paginationData : depth0)) != null ? stack1.lastPageLinkDisabled : stack1),{"name":"Disabled","hash":{},"data":data}))
    + "\r\n            aria-label=\"Go to the last page\" title=\"Go to the last page\" data-page=\""
    + alias2(alias3(((stack1 = (depth0 != null ? depth0.paginationData : depth0)) != null ? stack1.noOFpages : stack1), depth0))
    + "\" tabindex=\"-1\">\r\n            <i class=\"gui-icon gui-icon-next\"></i>\r\n        </button>\r\n    </span>\r\n</div>\r\n<div class=\"col-md-6 gui gui-subheading-2 right text-right m-0\">\r\n    <span>Rows Per Page</span>\r\n    <select class=\"gui pageSizeSelector\">\r\n"
    + ((stack1 = helpers.each.call(alias1,((stack1 = (depth0 != null ? depth0.paginationData : depth0)) != null ? stack1.pageSizes : stack1),{"name":"each","hash":{},"fn":container.program(1, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "    </select>\r\n    <span class=\"gui m-l-10\">"
    + alias2(alias3(((stack1 = ((stack1 = (depth0 != null ? depth0.paginationData : depth0)) != null ? stack1.range : stack1)) != null ? stack1.min : stack1), depth0))
    + " - "
    + alias2(alias3(((stack1 = ((stack1 = (depth0 != null ? depth0.paginationData : depth0)) != null ? stack1.range : stack1)) != null ? stack1.max : stack1), depth0))
    + " of "
    + alias2(alias3(((stack1 = (depth0 != null ? depth0.paginationData : depth0)) != null ? stack1.totalCount : stack1), depth0))
    + " items</span>\r\n</div>\r\n<div class=\"gui clear\"></div>";
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
            var scrollHandler = new ScrollHandler_1.ScrollHandler(_this.configStore, _this.gridTemplateService, lastIndex + 1);
            scrollHandler.RegisterDomHandler();
            _this.handleChain.push({
                handler: scrollHandler,
                name: HandlerNames_1.HandlerNames.Scroll,
            });
        };
        this.bindManageColums = function (manageColContainer) {
            var html = _this.gridTemplateService.GetManageColumnsHtml();
            var element = jQuery(manageColContainer || _this.configStore.Options.manageColSettingsContainer
                || _this.configStore.Options.containerElement);
            _this.toggleHandler = new ToggleColumnHandler_1.ToggleColumnHandler(_this.configStore, jQuery(_this.configStore.Options.containerElement));
            var manageColHandler = new ColSettingsHandler_1.ColSettingsHandler(jQuery(element), _this.configStore, _this.toggleHandler);
            element.find(".col-settings-container").html(html);
            manageColHandler.RegisterDomHandler();
            jQuery(window).resize(function () {
                manageColHandler.onResize();
            });
            jQuery(document).click(function (event) {
                manageColHandler.onDocumentClick(event);
                event.stopPropagation();
            });
        };
        this.applyColumnConfig = function (columns) {
            _this.toggleHandler.applyColumnConfig(columns);
            var html = _this.gridTemplateService.GetManageColumnsHtml();
            var element = jQuery(_this.configStore.Options.manageColSettingsContainer
                || _this.configStore.Options.containerElement);
            element.find(".col-settings-container").html(html);
        };
        this.setOrder = function (orderByList) {
            if (orderByList === undefined || orderByList === null || orderByList.length === 0) {
                return;
            }
            for (var _i = 0, _a = _this.configStore.Options.columns; _i < _a.length; _i++) {
                var col = _a[_i];
                col.order = undefined;
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
        this.RegisterDomHandler = function () {
            // Registering JQuery Event Handler if Header is Clicked.
            _this.parentElement.resize(function (event) {
                _this.leftOffset = _this.parentElement.find(".table-header").offset().left;
            });
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
                    if (lastIndex > _this.gridTemplateService.DataLength) {
                        lastIndex = _this.gridTemplateService.DataLength;
                    }
                    var html = jQuery(_this.gridTemplateService.getTemplate(_this.currentIndex, lastIndex));
                    tBodyObj.find(".mainTableBody").append(html);
                    _this.currentIndex = lastIndex + 1;
                    _this.rendering = false;
                }
                event.stopPropagation();
            });
        };
        this.configStore = configStore;
        this.parentElement = jQuery(this.configStore.Options.containerElement);
        this.gridTemplateService = gridTemplateService;
        this.currentIndex = currentIndex;
    }
    ScrollHandler.prototype.onResize = function () {
        this.leftOffset = this.parentElement.find(".table-header").offset().left;
    };
    ScrollHandler.prototype.onDocumentClick = function (event) {
        var _this = this;
        jQuery(document).resize(function (resizeEvent) {
            _this.leftOffset = _this.parentElement.find(".table-header").offset().left;
        });
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
            });
        };
        this.getTemplate = function (firstIndex, lastIndex) {
            var mainRowArray = _this.GetRowsHtml(firstIndex, lastIndex);
            return _this.templateFunctionForMainRow({
                columns: _this.configStore.Options.columns,
                mainRowArray: mainRowArray,
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
    var stack1;

  return "                    "
    + ((stack1 = __default(__webpack_require__(/*! ./src/hbs/helpers/Column.ts */ 27)).call(depth0 != null ? depth0 : (container.nullContext || {}),depth0,{"name":"Column","hash":{},"data":data})) != null ? stack1 : "")
    + "\n";
},"3":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.lambda, alias2=container.escapeExpression;

  return "                        <th class=\"gui cursor-pointer\" id=\"header-"
    + alias2(alias1((depth0 != null ? depth0.id : depth0), depth0))
    + "\" data-header-id=\""
    + alias2(alias1((depth0 != null ? depth0.id : depth0), depth0))
    + "\">\n                            <span class=\"gui sub header\">"
    + alias2(alias1((depth0 != null ? depth0.name : depth0), depth0))
    + "</span>\n"
    + ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.sortable : depth0),{"name":"if","hash":{},"fn":container.program(4, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "                        </th>\n";
},"4":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "                                "
    + ((stack1 = __default(__webpack_require__(/*! ./src/hbs/helpers/Ordered.ts */ 28)).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.order : depth0),{"name":"Ordered","hash":{},"data":data})) != null ? stack1 : "")
    + "\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {});

  return "<style>\n    .inner-container {\n        height: 100%;\n        overflow: hidden;\n        width: 100%;\n        display: flex;\n        flex-direction: column;\n    }\n\n    .table-header {\n        position: relative;\n        top:0 !important;\n    }\n\n    .table-body {\n        overflow: auto;\n        flex: 5;\n    }\n    .table-footer{\n        height: 35px;\n        padding: 5px;\n    }\n    .table-footer .footer-middle{\n        display: flex;\n    }\n    .table-footer .footer-right{\n        display: flex;\n    }\n    .margin-auto{\n        margin: auto !important;\n    }\n    .remove-label:hover{\n        text-decoration: line-through;\n        cursor: pointer;\n    }\n    .border-less tr td,.border-less { border: 0px !important; }\n    .cursor-pointer{\n        cursor: pointer;\n    }\n    .ui.supercompact.icon.button, .ui.supercompact.icon.buttons .button {\n        padding: .3em .3em .3em .3em !important;\n    }\n</style>\n<div class=\"inner-container gui fluid container\" style=\"padding:0%;\">\n    <div class=\"table-header\">\n        <table id=\"headertable\" class=\"gui basic large compact sortable fixed single line table\">\n            <colgroup class=\"headerColGroup\">\n                <col style=\"width:40px;\" />\n                <col style=\"width:40px;\" />\n"
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.columns : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "            </colgroup>\n            <thead>\n                <tr>\n                    <th></th>\n                    <th><input type=\"checkbox\" class=\"select-all-checkbox cursor-pointer\"></th>\n"
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.columns : depth0),{"name":"each","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "                </tr>\n            </thead>\n        </table>\n    </div>\n    <div class=\"table-body\">\n        <table class=\"gui basic large compact fixed selectable single line table mainTable\">\n            <colgroup class=\"bodyColGroup\">\n                <col style=\"width:40px;\" /> \n                <col style=\"width:40px;\" />\n"
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.columns : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "            </colgroup>\n            <tbody class=\"mainTableBody\">\n"
    + ((stack1 = container.invokePartial(__webpack_require__(/*! ./src/hbs/grid-main-row.hbs */ 9),depth0,{"name":"grid-main-row","data":data,"indent":"                ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "            </tbody>\n        </table>\n    </div>\n    <div class=\"table-footer gui h-auto fluid-w basic curved row p-5 m-0\">\n"
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCAyNDM3OTI1MmE2MzQzZTBlZGRlNSIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwge1wicm9vdFwiOlwiSGFuZGxlYmFyc1wiLFwiYW1kXCI6XCJoYW5kbGViYXJzLnJ1bnRpbWVcIixcImNvbW1vbmpzMlwiOlwiaGFuZGxlYmFycy9ydW50aW1lXCIsXCJjb21tb25qc1wiOlwiaGFuZGxlYmFycy9ydW50aW1lXCJ9Iiwid2VicGFjazovLy8uL3NyYy9oYnMvaGVscGVycy9EaXNhYmxlZC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvcGFnaW5hdGlvbi9QYWdlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvdXRpbC9Db2x1bW5VdGlsLnRzIiwid2VicGFjazovLy9leHRlcm5hbCBcImpRdWVyeVwiIiwid2VicGFjazovLy8uL3NyYy9qcy9tb2RlbHMvR3JpZE9yZGVyRGlyZWN0aW9uLnRzIiwid2VicGFjazovLy8uL3NyYy9oYnMvZ3JpZC1kZXRhaWxzLXJvdy5oYnMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2hicy9ncmlkLWZvb3Rlci5oYnMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2hicy9oZWxwZXJzL21hdGgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2hicy9ncmlkLW1haW4tcm93LmhicyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvbWFpbi9HcmlkLnRzIiwid2VicGFjazovLy8uL3NyYy9qcy9jb25maWcvQ29uZmlnU3RvcmUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2V2ZW50SGFuZGxlcnMvQ29sU2V0dGluZ3NIYW5kbGVyLnRzIiwid2VicGFjazovLy8uL3NyYy9qcy9ldmVudEhhbmRsZXJzL1NlbGVjdEV2ZW50SGFuZGxlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvZXZlbnRIYW5kbGVycy9EZXRhaWxzUm93SGFuZGxlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvZXZlbnRIYW5kbGVycy9GaWx0ZXJDbGlja0hhbmRsZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL21vZGVscy9GaWx0ZXJBY3Rpb25UeXBlLnRzIiwid2VicGFjazovLy8uL3NyYy9qcy9ldmVudEhhbmRsZXJzL0hhbmRsZXJOYW1lcy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvZXZlbnRIYW5kbGVycy9IZWFkZXJDbGlja0hhbmRsZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2V2ZW50SGFuZGxlcnMvUGFnZVNlYXJjaENsaWNrSGFuZGxlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvZXZlbnRIYW5kbGVycy9TY3JvbGxIYW5kbGVyLnRzIiwid2VicGFjazovLy8uL3NyYy9qcy9ldmVudEhhbmRsZXJzL1RvZ2dsZUNvbHVtbkhhbmRsZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL3NlcnZpY2VzL0dyaWRUZW1wbGF0ZVNlcnZpY2UudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2hicy9oZWxwZXJzL1NlbGVjdGVkLnRzIiwid2VicGFjazovLy8uL3NyYy9oYnMvZ3JpZC1tYW5hZ2UtY29sdW1ucy5oYnMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2hicy9oZWxwZXJzL0NoZWNrZWQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2hicy9ncmlkLmhicyIsIndlYnBhY2s6Ly8vLi9zcmMvaGJzL2hlbHBlcnMvQ29sdW1uLnRzIiwid2VicGFjazovLy8uL3NyYy9oYnMvaGVscGVycy9PcmRlcmVkLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxPO0FDVkE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7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LENBQUMsc0JBQXNCLEdBQUcsU0FBUyxHQUFHLE1BQU0sR0FBRyxVQUFVLEdBQUcsS0FBSyxDQUFDO0FBQzVFLENBQUMsQ0FBQztBQUVGLGtCQUFlLE1BQU0sQ0FBQzs7Ozs7Ozs7Ozs7Ozs7O0FDTnRCLDRGQUF3RTtBQUV4RSxJQUFNLE9BQU8sR0FBRyxVQUFDLEtBQXlCO0lBQ3RDLEVBQUUsQ0FBQyxDQUFDLEtBQUssS0FBSyx1Q0FBa0IsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBQ25DLE1BQU0sQ0FBQyxvREFBb0QsQ0FBQztJQUNoRSxDQUFDO0lBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEtBQUssS0FBSyx1Q0FBa0IsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO1FBQzNDLE1BQU0sQ0FBQyxzREFBc0QsQ0FBQztJQUNsRSxDQUFDO0lBQUMsSUFBSSxDQUFDLENBQUM7UUFDSixNQUFNLENBQUMsb0ZBQW9GO1lBQ3BGLHFGQUFxRixDQUFDO0lBQ2pHLENBQUM7QUFDTCxDQUFDLENBQUM7QUFFRixrQkFBZSxPQUFPLENBQUMiLCJmaWxlIjoiZ3JpZG9vLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeShyZXF1aXJlKFwiaGFuZGxlYmFycy9ydW50aW1lXCIpLCByZXF1aXJlKFwialF1ZXJ5XCIpKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFtcImhhbmRsZWJhcnMucnVudGltZVwiLCBcImpRdWVyeVwiXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJHcmlkb29cIl0gPSBmYWN0b3J5KHJlcXVpcmUoXCJoYW5kbGViYXJzL3J1bnRpbWVcIiksIHJlcXVpcmUoXCJqUXVlcnlcIikpO1xuXHRlbHNlXG5cdFx0cm9vdFtcIkdyaWRvb1wiXSA9IGZhY3Rvcnkocm9vdFtcIkhhbmRsZWJhcnNcIl0sIHJvb3RbXCJqUXVlcnlcIl0pO1xufSkodHlwZW9mIHNlbGYgIT09ICd1bmRlZmluZWQnID8gc2VsZiA6IHRoaXMsIGZ1bmN0aW9uKF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfMF9fLCBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzRfXykge1xucmV0dXJuIFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24iLCIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAxMCk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgMjQzNzkyNTJhNjM0M2UwZWRkZTUiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfMF9fO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIHtcInJvb3RcIjpcIkhhbmRsZWJhcnNcIixcImFtZFwiOlwiaGFuZGxlYmFycy5ydW50aW1lXCIsXCJjb21tb25qczJcIjpcImhhbmRsZWJhcnMvcnVudGltZVwiLFwiY29tbW9uanNcIjpcImhhbmRsZWJhcnMvcnVudGltZVwifVxuLy8gbW9kdWxlIGlkID0gMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSIsImNvbnN0IGRpc2FibGVkID0gKGJvb2w6IGJvb2xlYW4pOiBzdHJpbmcgPT4ge1xyXG4gICAgcmV0dXJuIGJvb2wgPyBcImRpc2FibGVkXCIgOiBcIlwiO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZGlzYWJsZWQ7XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy90c2xpbnQtbG9hZGVyPz9yZWYtLTEhLi9zcmMvaGJzL2hlbHBlcnMvRGlzYWJsZWQudHMiLCJpbXBvcnQgeyBJUGFnaW5hdGlvbiB9IGZyb20gXCIuLi9tb2RlbHMvSVBhZ2luYXRpb25cIjtcclxuaW1wb3J0IHsgSVBhZ2luYXRpb25JbnB1dCB9IGZyb20gXCIuLi9tb2RlbHMvSVBhZ2luYXRpb25JbnB1dFwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIFBhZ2VyIHtcclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIHBhZ2luYXRpb25EYXRhOiBJUGFnaW5hdGlvbjtcclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIENhbGN1bGF0ZVBhZ2luYXRpb25EYXRhID0gKHBhZ2luYXRpb25JbnB1dDogSVBhZ2luYXRpb25JbnB1dCk6IHZvaWQgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBwYWdpbmF0aW9uRGF0YTogYW55ID0ge307XHJcbiAgICAgICAgICAgIHBhZ2luYXRpb25EYXRhLnBhZ2VJbmRleCA9IHBhZ2luYXRpb25JbnB1dC5wYWdlSW5kZXg7XHJcbiAgICAgICAgICAgIHBhZ2luYXRpb25EYXRhLnBhZ2VTaXplID0gcGFnaW5hdGlvbklucHV0LnBhZ2VTaXplO1xyXG4gICAgICAgICAgICBwYWdpbmF0aW9uRGF0YS5wYWdlU2l6ZXMgPSBwYWdpbmF0aW9uSW5wdXQucGFnZVNpemVzO1xyXG4gICAgICAgICAgICBwYWdpbmF0aW9uRGF0YS50b3RhbENvdW50ID0gcGFnaW5hdGlvbklucHV0LnRvdGFsQ291bnQ7XHJcbiAgICAgICAgICAgIHBhZ2luYXRpb25EYXRhLm5vT2ZQYWdlcyA9IE1hdGguY2VpbChwYWdpbmF0aW9uSW5wdXQudG90YWxDb3VudCAvIHBhZ2luYXRpb25JbnB1dC5wYWdlU2l6ZSk7XHJcbiAgICAgICAgICAgIGNvbnN0IG1pbk51bSA9ICgocGFnaW5hdGlvbklucHV0LnBhZ2VJbmRleCAtIDEpICogcGFnaW5hdGlvbklucHV0LnBhZ2VTaXplKTtcclxuICAgICAgICAgICAgY29uc3QgbG93ZXJMaW1pdE9mZnNldCA9IHBhZ2luYXRpb25JbnB1dC5wYWdlU2l6ZSA+IHBhZ2luYXRpb25JbnB1dC50b3RhbENvdW50ID9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZ2luYXRpb25JbnB1dC50b3RhbENvdW50IDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZ2luYXRpb25JbnB1dC5wYWdlU2l6ZTtcclxuICAgICAgICAgICAgcGFnaW5hdGlvbkRhdGEucmFuZ2UgPSB7XHJcbiAgICAgICAgICAgICAgICBtaW4gOiBtaW5OdW0gKyAxLFxyXG4gICAgICAgICAgICAgICAgbWF4IDogbWluTnVtICsgbG93ZXJMaW1pdE9mZnNldCxcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgcGFnaW5hdGlvbkRhdGEuZmlyc3RQYWdlTGlua0Rpc2FibGVkID0gcGFnaW5hdGlvbkRhdGEubm9PZlBhZ2VzID09PSAxIHx8IHBhZ2luYXRpb25EYXRhLnBhZ2VJbmRleCA9PT0gMTtcclxuICAgICAgICAgICAgcGFnaW5hdGlvbkRhdGEubGFzdFBhZ2VMaW5rRGlzYWJsZWQgID0gcGFnaW5hdGlvbkRhdGEubm9PZlBhZ2VzID09PSAxXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8fCAocGFnaW5hdGlvbkRhdGEucGFnZUluZGV4ID09PSBwYWdpbmF0aW9uRGF0YS5ub09mUGFnZXMpO1xyXG4gICAgICAgICAgICBwYWdpbmF0aW9uRGF0YS5wcmV2UGFnZUxpbmtEaXNhYmxlZCAgPSBwYWdpbmF0aW9uRGF0YS5wYWdlSW5kZXggPT09IDFcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHx8IChwYWdpbmF0aW9uRGF0YS5wYWdlSW5kZXggLSAxKSA8PSAwO1xyXG4gICAgICAgICAgICBwYWdpbmF0aW9uRGF0YS5uZXh0UGFnZUxpbmtEaXNhYmxlZCAgPSBwYWdpbmF0aW9uRGF0YS5ub09mUGFnZXMgPT09IHBhZ2luYXRpb25EYXRhLnBhZ2VJbmRleFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfHwgKHBhZ2luYXRpb25EYXRhLnBhZ2VJbmRleCArIDEpID49IHBhZ2luYXRpb25EYXRhLm5vT2ZQYWdlcztcclxuICAgICAgICAgICAgUGFnZXIucGFnaW5hdGlvbkRhdGEgPSBwYWdpbmF0aW9uRGF0YTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIGdldCBQYWdpbmF0aW9uRGF0YSgpOiBJUGFnaW5hdGlvbiB7XHJcbiAgICAgICAgcmV0dXJuIFBhZ2VyLnBhZ2luYXRpb25EYXRhO1xyXG4gICAgfVxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy90c2xpbnQtbG9hZGVyPz9yZWYtLTEhLi9zcmMvanMvcGFnaW5hdGlvbi9QYWdlci50cyIsImltcG9ydCB7IEdyaWRPcmRlckRpcmVjdGlvbiB9IGZyb20gXCIuLi9tb2RlbHMvR3JpZE9yZGVyRGlyZWN0aW9uXCI7XHJcbmltcG9ydCB7IElDb2x1bW4gfSBmcm9tIFwiLi8uLi9tb2RlbHMvSUNvbHVtblwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIENvbW1vblV0aWwge1xyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgR2V0Q29sdW1uT2JqZWN0ID0gKGNvbHVtbklkOiBzdHJpbmcsIGNvbHVtbnM6IElDb2x1bW5bXSk6IElDb2x1bW4gPT4ge1xyXG4gICAgICAgIGlmIChjb2x1bW5JZCA9PSBudWxsIHx8IGNvbHVtbnMgPT0gbnVsbCkge1xyXG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IHJldENvbDogSUNvbHVtbjtcclxuICAgICAgICBjb2x1bW5zLmZvckVhY2goKGNvbDogSUNvbHVtbikgPT4ge1xyXG4gICAgICAgICAgICBpZiAoY29sLmlkID09PSBjb2x1bW5JZCkge1xyXG4gICAgICAgICAgICAgICAgcmV0Q29sID0gY29sO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgcmV0dXJuIHJldENvbDtcclxuICAgIH1cclxuICAgIHB1YmxpYyBzdGF0aWMgU2V0T3JkZXIgPSAoY29sdW1uSWQ6IHN0cmluZywgb3JkZXI6IEdyaWRPcmRlckRpcmVjdGlvbiwgY29sdW1uczogSUNvbHVtbltdKTogSUNvbHVtbiA9PiB7XHJcbiAgICAgICAgaWYgKGNvbHVtbklkID09IG51bGwgfHwgY29sdW1ucyA9PSBudWxsKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQgcmV0Q29sOiBJQ29sdW1uO1xyXG4gICAgICAgIGNvbHVtbnMuZm9yRWFjaCgoY29sOiBJQ29sdW1uKSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChjb2wuaWQgPT09IGNvbHVtbklkKSB7XHJcbiAgICAgICAgICAgICAgICBjb2wub3JkZXIgPSBvcmRlcjtcclxuICAgICAgICAgICAgICAgIHJldENvbCA9IGNvbDtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHJldHVybiByZXRDb2w7XHJcbiAgICB9XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL3RzbGludC1sb2FkZXI/P3JlZi0tMSEuL3NyYy9qcy91dGlsL0NvbHVtblV0aWwudHMiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfNF9fO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwialF1ZXJ5XCJcbi8vIG1vZHVsZSBpZCA9IDRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEiLCJleHBvcnQgZW51bSBHcmlkT3JkZXJEaXJlY3Rpb24ge1xyXG4gICAgTm9uZSA9IFwiTm9uZVwiLFxyXG4gICAgQXNjID0gXCJBc2NcIixcclxuICAgIERlc2MgPSBcIkRlc2NcIixcclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvdHNsaW50LWxvYWRlcj8/cmVmLS0xIS4vc3JjL2pzL21vZGVscy9HcmlkT3JkZXJEaXJlY3Rpb24udHMiLCJ2YXIgSGFuZGxlYmFycyA9IHJlcXVpcmUoXCJoYW5kbGViYXJzXCIpO1xuZnVuY3Rpb24gX19kZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIChvYmouX19lc01vZHVsZSA/IG9ialtcImRlZmF1bHRcIl0gOiBvYmopOyB9XG5tb2R1bGUuZXhwb3J0cyA9IChIYW5kbGViYXJzW1wiZGVmYXVsdFwiXSB8fCBIYW5kbGViYXJzKS50ZW1wbGF0ZSh7XCIxXCI6ZnVuY3Rpb24oY29udGFpbmVyLGRlcHRoMCxoZWxwZXJzLHBhcnRpYWxzLGRhdGEpIHtcbiAgICB2YXIgc3RhY2sxLCBoZWxwZXIsIGFsaWFzMT1kZXB0aDAgIT0gbnVsbCA/IGRlcHRoMCA6IChjb250YWluZXIubnVsbENvbnRleHQgfHwge30pLCBhbGlhczI9aGVscGVycy5oZWxwZXJNaXNzaW5nLCBhbGlhczM9XCJmdW5jdGlvblwiLCBhbGlhczQ9Y29udGFpbmVyLmVzY2FwZUV4cHJlc3Npb247XG5cbiAgcmV0dXJuIFwiICAgICAgICAgICAgICAgIDx0cj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzcz1cXFwiZ3VpIHJ2LXBhcmVudFxcXCIgdmFsaWduPVxcXCJ0b3BcXFwiIGRhdGEtZmlsdGVyLXR5cGU9XFxcIlwiXG4gICAgKyBhbGlhczQoKChoZWxwZXIgPSAoaGVscGVyID0gaGVscGVycy50eXBlIHx8IChkZXB0aDAgIT0gbnVsbCA/IGRlcHRoMC50eXBlIDogZGVwdGgwKSkgIT0gbnVsbCA/IGhlbHBlciA6IGFsaWFzMiksKHR5cGVvZiBoZWxwZXIgPT09IGFsaWFzMyA/IGhlbHBlci5jYWxsKGFsaWFzMSx7XCJuYW1lXCI6XCJ0eXBlXCIsXCJoYXNoXCI6e30sXCJkYXRhXCI6ZGF0YX0pIDogaGVscGVyKSkpXG4gICAgKyBcIlxcXCIgZGF0YS1maWx0ZXIta2V5PVxcXCJcIlxuICAgICsgYWxpYXM0KCgoaGVscGVyID0gKGhlbHBlciA9IGhlbHBlcnMuaWQgfHwgKGRlcHRoMCAhPSBudWxsID8gZGVwdGgwLmlkIDogZGVwdGgwKSkgIT0gbnVsbCA/IGhlbHBlciA6IGFsaWFzMiksKHR5cGVvZiBoZWxwZXIgPT09IGFsaWFzMyA/IGhlbHBlci5jYWxsKGFsaWFzMSx7XCJuYW1lXCI6XCJpZFwiLFwiaGFzaFwiOnt9LFwiZGF0YVwiOmRhdGF9KSA6IGhlbHBlcikpKVxuICAgICsgXCJcXFwiIGRhdGEtZmlsdGVyLXZhbHVlPVxcXCJcIlxuICAgICsgYWxpYXM0KCgoaGVscGVyID0gKGhlbHBlciA9IGhlbHBlcnMuYWN0dWFsVmFsdWUgfHwgKGRlcHRoMCAhPSBudWxsID8gZGVwdGgwLmFjdHVhbFZhbHVlIDogZGVwdGgwKSkgIT0gbnVsbCA/IGhlbHBlciA6IGFsaWFzMiksKHR5cGVvZiBoZWxwZXIgPT09IGFsaWFzMyA/IGhlbHBlci5jYWxsKGFsaWFzMSx7XCJuYW1lXCI6XCJhY3R1YWxWYWx1ZVwiLFwiaGFzaFwiOnt9LFwiZGF0YVwiOmRhdGF9KSA6IGhlbHBlcikpKVxuICAgICsgXCJcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPlwiXG4gICAgKyBhbGlhczQoKChoZWxwZXIgPSAoaGVscGVyID0gaGVscGVycy5jb2x1bW5OYW1lIHx8IChkZXB0aDAgIT0gbnVsbCA/IGRlcHRoMC5jb2x1bW5OYW1lIDogZGVwdGgwKSkgIT0gbnVsbCA/IGhlbHBlciA6IGFsaWFzMiksKHR5cGVvZiBoZWxwZXIgPT09IGFsaWFzMyA/IGhlbHBlci5jYWxsKGFsaWFzMSx7XCJuYW1lXCI6XCJjb2x1bW5OYW1lXCIsXCJoYXNoXCI6e30sXCJkYXRhXCI6ZGF0YX0pIDogaGVscGVyKSkpXG4gICAgKyBcIjwvc3Bhbj5cXHJcXG5cIlxuICAgICsgKChzdGFjazEgPSBoZWxwZXJzW1wiaWZcIl0uY2FsbChhbGlhczEsKGRlcHRoMCAhPSBudWxsID8gZGVwdGgwLmZpbHRlcmFibGUgOiBkZXB0aDApLHtcIm5hbWVcIjpcImlmXCIsXCJoYXNoXCI6e30sXCJmblwiOmNvbnRhaW5lci5wcm9ncmFtKDIsIGRhdGEsIDApLFwiaW52ZXJzZVwiOmNvbnRhaW5lci5ub29wLFwiZGF0YVwiOmRhdGF9KSkgIT0gbnVsbCA/IHN0YWNrMSA6IFwiXCIpXG4gICAgKyBcIiAgICAgICAgICAgICAgICAgICAgPC90ZD5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDx0ZD5cIlxuICAgICsgKChzdGFjazEgPSAoKGhlbHBlciA9IChoZWxwZXIgPSBoZWxwZXJzLmNvbHVtblZhbHVlIHx8IChkZXB0aDAgIT0gbnVsbCA/IGRlcHRoMC5jb2x1bW5WYWx1ZSA6IGRlcHRoMCkpICE9IG51bGwgPyBoZWxwZXIgOiBhbGlhczIpLCh0eXBlb2YgaGVscGVyID09PSBhbGlhczMgPyBoZWxwZXIuY2FsbChhbGlhczEse1wibmFtZVwiOlwiY29sdW1uVmFsdWVcIixcImhhc2hcIjp7fSxcImRhdGFcIjpkYXRhfSkgOiBoZWxwZXIpKSkgIT0gbnVsbCA/IHN0YWNrMSA6IFwiXCIpXG4gICAgKyBcIjwvdGQ+XFxyXFxuICAgICAgICAgICAgICAgIDwvdHI+XFxyXFxuXCI7XG59LFwiMlwiOmZ1bmN0aW9uKGNvbnRhaW5lcixkZXB0aDAsaGVscGVycyxwYXJ0aWFscyxkYXRhKSB7XG4gICAgcmV0dXJuIFwiICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XFxcImd1aSBtLWwtNSBydi1jaGlsZCBndWktY2FwdGlvblxcXCIgPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzcz1cXFwiZ3VpIGd1aS1pY29uIGd1aS1pY29uLWFkZCBob3ZlciBtLWwtNSBjdXJzb3ItcG9pbnRlciBhZGRGaWx0ZXJcXFwiPjwvaT5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3M9XFxcImd1aSBndWktaWNvbiBndWktaWNvbi1taW51cyBob3ZlciBtLWwtNSBjdXJzb3ItcG9pbnRlciByZW1vdmVGaWx0ZXJcXFwiPjwvaT5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XFxyXFxuXCI7XG59LFwiY29tcGlsZXJcIjpbNyxcIj49IDQuMC4wXCJdLFwibWFpblwiOmZ1bmN0aW9uKGNvbnRhaW5lcixkZXB0aDAsaGVscGVycyxwYXJ0aWFscyxkYXRhKSB7XG4gICAgdmFyIHN0YWNrMSwgaGVscGVyLCBhbGlhczE9ZGVwdGgwICE9IG51bGwgPyBkZXB0aDAgOiAoY29udGFpbmVyLm51bGxDb250ZXh0IHx8IHt9KTtcblxuICByZXR1cm4gXCI8dHIgY2xhc3M9XFxcImd1aSBndWktaGlkZGVuIGRldGFpbHNSb3dcXFwiPlxcclxcbiAgICA8dGQgY29sc3Bhbj1cXFwiXCJcbiAgICArIGNvbnRhaW5lci5lc2NhcGVFeHByZXNzaW9uKCgoaGVscGVyID0gKGhlbHBlciA9IGhlbHBlcnMubGVuZ3RoIHx8IChkZXB0aDAgIT0gbnVsbCA/IGRlcHRoMC5sZW5ndGggOiBkZXB0aDApKSAhPSBudWxsID8gaGVscGVyIDogaGVscGVycy5oZWxwZXJNaXNzaW5nKSwodHlwZW9mIGhlbHBlciA9PT0gXCJmdW5jdGlvblwiID8gaGVscGVyLmNhbGwoYWxpYXMxLHtcIm5hbWVcIjpcImxlbmd0aFwiLFwiaGFzaFwiOnt9LFwiZGF0YVwiOmRhdGF9KSA6IGhlbHBlcikpKVxuICAgICsgXCJcXFwiPlxcclxcbiAgICAgICAgPHRhYmxlIGNsYXNzPVxcXCJndWkgdmVyeSBjb21wYWN0IHNlbGVjdGFibGUgY2VsbGVkIHRhYmxlIGRldGFpbHNUYWJsZSBtLWwtMzcgcC01XFxcIiBzdHlsZT1cXFwid2lkdGg6IGF1dG87XFxcIiA+XFxyXFxuICAgICAgICAgICAgPHRib2R5PlxcclxcblwiXG4gICAgKyAoKHN0YWNrMSA9IGhlbHBlcnMuZWFjaC5jYWxsKGFsaWFzMSwoZGVwdGgwICE9IG51bGwgPyBkZXB0aDAubWFpblJvd0NvbEFycmF5IDogZGVwdGgwKSx7XCJuYW1lXCI6XCJlYWNoXCIsXCJoYXNoXCI6e30sXCJmblwiOmNvbnRhaW5lci5wcm9ncmFtKDEsIGRhdGEsIDApLFwiaW52ZXJzZVwiOmNvbnRhaW5lci5ub29wLFwiZGF0YVwiOmRhdGF9KSkgIT0gbnVsbCA/IHN0YWNrMSA6IFwiXCIpXG4gICAgKyBcIiAgICAgICAgICAgIDwvdGJvZHk+XFxyXFxuICAgICAgICA8L3RhYmxlPlxcclxcbiAgICA8L3RkPlxcclxcbjwvdHI+XCI7XG59LFwidXNlRGF0YVwiOnRydWV9KTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9oYnMvZ3JpZC1kZXRhaWxzLXJvdy5oYnNcbi8vIG1vZHVsZSBpZCA9IDZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEiLCJ2YXIgSGFuZGxlYmFycyA9IHJlcXVpcmUoXCJoYW5kbGViYXJzXCIpO1xuZnVuY3Rpb24gX19kZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIChvYmouX19lc01vZHVsZSA/IG9ialtcImRlZmF1bHRcIl0gOiBvYmopOyB9XG5tb2R1bGUuZXhwb3J0cyA9IChIYW5kbGViYXJzW1wiZGVmYXVsdFwiXSB8fCBIYW5kbGViYXJzKS50ZW1wbGF0ZSh7XCIxXCI6ZnVuY3Rpb24oY29udGFpbmVyLGRlcHRoMCxoZWxwZXJzLHBhcnRpYWxzLGRhdGEsYmxvY2tQYXJhbXMsZGVwdGhzKSB7XG4gICAgdmFyIHN0YWNrMSwgYWxpYXMxPWNvbnRhaW5lci5lc2NhcGVFeHByZXNzaW9uO1xuXG4gIHJldHVybiBcIiAgICAgICAgPG9wdGlvbiBcIlxuICAgICsgYWxpYXMxKF9fZGVmYXVsdChyZXF1aXJlKFwiQzpcXFxcVXNlcnNcXFxccm91c3R1cmdcXFxcU291cmNlXFxcXFJlcG9zXFxcXFNlYXJjaE1hc3RlclxcXFxHcmlkb29cXFxcc3JjXFxcXGhic1xcXFxoZWxwZXJzXFxcXFNlbGVjdGVkLnRzXCIpKS5jYWxsKGRlcHRoMCAhPSBudWxsID8gZGVwdGgwIDogKGNvbnRhaW5lci5udWxsQ29udGV4dCB8fCB7fSksKChzdGFjazEgPSAoZGVwdGhzWzFdICE9IG51bGwgPyBkZXB0aHNbMV0ucGFnaW5hdGlvbkRhdGEgOiBkZXB0aHNbMV0pKSAhPSBudWxsID8gc3RhY2sxLnBhZ2VTaXplIDogc3RhY2sxKSxkZXB0aDAse1wibmFtZVwiOlwiU2VsZWN0ZWRcIixcImhhc2hcIjp7fSxcImRhdGFcIjpkYXRhfSkpXG4gICAgKyBcIj5cIlxuICAgICsgYWxpYXMxKGNvbnRhaW5lci5sYW1iZGEoZGVwdGgwLCBkZXB0aDApKVxuICAgICsgXCI8L29wdGlvbj5cXHJcXG5cIjtcbn0sXCJjb21waWxlclwiOls3LFwiPj0gNC4wLjBcIl0sXCJtYWluXCI6ZnVuY3Rpb24oY29udGFpbmVyLGRlcHRoMCxoZWxwZXJzLHBhcnRpYWxzLGRhdGEsYmxvY2tQYXJhbXMsZGVwdGhzKSB7XG4gICAgdmFyIHN0YWNrMSwgYWxpYXMxPWRlcHRoMCAhPSBudWxsID8gZGVwdGgwIDogKGNvbnRhaW5lci5udWxsQ29udGV4dCB8fCB7fSksIGFsaWFzMj1jb250YWluZXIuZXNjYXBlRXhwcmVzc2lvbiwgYWxpYXMzPWNvbnRhaW5lci5sYW1iZGE7XG5cbiAgcmV0dXJuIFwiPGRpdiBkYXRhLXJvbGU9XFxcInBhZ2VyXFxcIiBjbGFzcz1cXFwiZ3VpIGxlZnQgZ3VpLXN1YmhlYWRpbmctMiBjb2wtbWQtNiB0ZXh0LWxlZnQgbS0wXFxcIj5cXHJcXG4gICAgPHNwYW4gY2xhc3M9XFxcImd1aSBtaW5pIGNvbXBhY3QgXFxcIj5cXHJcXG4gICAgICAgIDxidXR0b24gY2xhc3M9XFxcImd1aSBtaW5pIGNvbXBhY3QgZmlyc3RMaW5rXFxcIiBhcmlhLWhpZGRlbj1cXFwidHJ1ZVxcXCIgXCJcbiAgICArIGFsaWFzMihfX2RlZmF1bHQocmVxdWlyZShcIkM6XFxcXFVzZXJzXFxcXHJvdXN0dXJnXFxcXFNvdXJjZVxcXFxSZXBvc1xcXFxTZWFyY2hNYXN0ZXJcXFxcR3JpZG9vXFxcXHNyY1xcXFxoYnNcXFxcaGVscGVyc1xcXFxEaXNhYmxlZC50c1wiKSkuY2FsbChhbGlhczEsKChzdGFjazEgPSAoZGVwdGgwICE9IG51bGwgPyBkZXB0aDAucGFnaW5hdGlvbkRhdGEgOiBkZXB0aDApKSAhPSBudWxsID8gc3RhY2sxLmZpcnN0UGFnZUxpbmtEaXNhYmxlZCA6IHN0YWNrMSkse1wibmFtZVwiOlwiRGlzYWJsZWRcIixcImhhc2hcIjp7fSxcImRhdGFcIjpkYXRhfSkpXG4gICAgKyBcIlxcclxcbiAgICAgICAgICAgIGFyaWEtbGFiZWw9XFxcIkdvIHRvIHRoZSBmaXJzdCBwYWdlXFxcIiB0aXRsZT1cXFwiR28gdG8gdGhlIGZpcnN0IHBhZ2VcXFwiIGRhdGEtcGFnZT1cXFwiMVxcXCIgdGFiaW5kZXg9XFxcIi0xXFxcIj5cXHJcXG4gICAgICAgICAgICA8aSBjbGFzcz1cXFwiZ3VpLWljb24gZ3VpLWljb24tcHJldmlvdXNcXFwiPjwvaT5cXHJcXG4gICAgICAgIDwvYnV0dG9uPlxcclxcbiAgICAgICAgPGJ1dHRvbiBjbGFzcz1cXFwiZ3VpIG1pbmkgY29tcGFjdCBwcmV2TGlua1xcXCIgYXJpYS1oaWRkZW49XFxcInRydWVcXFwiIFwiXG4gICAgKyBhbGlhczIoX19kZWZhdWx0KHJlcXVpcmUoXCJDOlxcXFxVc2Vyc1xcXFxyb3VzdHVyZ1xcXFxTb3VyY2VcXFxcUmVwb3NcXFxcU2VhcmNoTWFzdGVyXFxcXEdyaWRvb1xcXFxzcmNcXFxcaGJzXFxcXGhlbHBlcnNcXFxcRGlzYWJsZWQudHNcIikpLmNhbGwoYWxpYXMxLCgoc3RhY2sxID0gKGRlcHRoMCAhPSBudWxsID8gZGVwdGgwLnBhZ2luYXRpb25EYXRhIDogZGVwdGgwKSkgIT0gbnVsbCA/IHN0YWNrMS5wcmV2UGFnZUxpbmtEaXNhYmxlZCA6IHN0YWNrMSkse1wibmFtZVwiOlwiRGlzYWJsZWRcIixcImhhc2hcIjp7fSxcImRhdGFcIjpkYXRhfSkpXG4gICAgKyBcIlxcclxcbiAgICAgICAgICAgIGFyaWEtbGFiZWw9XFxcIkdvIHRvIHRoZSBwcmV2aW91cyBwYWdlXFxcIiB0aXRsZT1cXFwiR28gdG8gdGhlIHByZXZpb3VzIHBhZ2VcXFwiIGRhdGEtcGFnZT1cXFwiXCJcbiAgICArIGFsaWFzMihfX2RlZmF1bHQocmVxdWlyZShcIkM6XFxcXFVzZXJzXFxcXHJvdXN0dXJnXFxcXFNvdXJjZVxcXFxSZXBvc1xcXFxTZWFyY2hNYXN0ZXJcXFxcR3JpZG9vXFxcXHNyY1xcXFxoYnNcXFxcaGVscGVyc1xcXFxtYXRoLnRzXCIpKS5jYWxsKGFsaWFzMSwoKHN0YWNrMSA9IChkZXB0aDAgIT0gbnVsbCA/IGRlcHRoMC5wYWdpbmF0aW9uRGF0YSA6IGRlcHRoMCkpICE9IG51bGwgPyBzdGFjazEucGFnZUluZGV4IDogc3RhY2sxKSxcIi1cIiwxLHtcIm5hbWVcIjpcIm1hdGhcIixcImhhc2hcIjp7fSxcImRhdGFcIjpkYXRhfSkpXG4gICAgKyBcIlxcXCJcXHJcXG4gICAgICAgICAgICB0YWJpbmRleD1cXFwiLTFcXFwiPlxcclxcbiAgICAgICAgICAgIDxpIGNsYXNzPVxcXCJndWktaWNvbiBndWktaWNvbi1jaGV2cm9uLWxlZnRcXFwiPjwvaT5cXHJcXG4gICAgICAgICAgICBQcmV2XFxyXFxuICAgICAgICA8L2J1dHRvbj5cXHJcXG4gICAgPC9zcGFuPlxcclxcbiAgICA8c3BhbiBjbGFzcz1cXFwiZ3VpIHBhZ2VyLWlucHV0LWNvbnRhaW5lciBpbnB1dFxcXCI+XFxyXFxuICAgICAgICA8c3BhbiBjbGFzcz1cXFwiZ3VpIG0tci01XFxcIj4gUGFnZSA8L3NwYW4+XFxyXFxuICAgICAgICA8aW5wdXQgY2xhc3M9XFxcImd1aSBwYWdlci1pbnB1dCB3LTI1IHAtMCBtLXItNVxcXCIgYXJpYS1sYWJlbD1cXFwiMVxcXCIgdmFsdWU9XFxcIlwiXG4gICAgKyBhbGlhczIoYWxpYXMzKCgoc3RhY2sxID0gKGRlcHRoMCAhPSBudWxsID8gZGVwdGgwLnBhZ2luYXRpb25EYXRhIDogZGVwdGgwKSkgIT0gbnVsbCA/IHN0YWNrMS5wYWdlSW5kZXggOiBzdGFjazEpLCBkZXB0aDApKVxuICAgICsgXCJcXFwiIHR5cGU9XFxcInRleHRcXFwiIHBsYWNlaG9sZGVyPVxcXCJQYWdlIE51bWJlciAuLi5cXFwiPlxcclxcbiAgICAgICAgPHNwYW4gY2xhc3M9XFxcIm5vLW9mLXBhZ2VzLXNjYW5cXFwiIGRhdGEtbnVtYmVyLW9mLXBhZ2VzPVxcXCJcIlxuICAgICsgYWxpYXMyKGFsaWFzMygoKHN0YWNrMSA9IChkZXB0aDAgIT0gbnVsbCA/IGRlcHRoMC5wYWdpbmF0aW9uRGF0YSA6IGRlcHRoMCkpICE9IG51bGwgPyBzdGFjazEubm9PZlBhZ2VzIDogc3RhY2sxKSwgZGVwdGgwKSlcbiAgICArIFwiXFxcIj4gb2YgXCJcbiAgICArIGFsaWFzMihhbGlhczMoKChzdGFjazEgPSAoZGVwdGgwICE9IG51bGwgPyBkZXB0aDAucGFnaW5hdGlvbkRhdGEgOiBkZXB0aDApKSAhPSBudWxsID8gc3RhY2sxLm5vT2ZQYWdlcyA6IHN0YWNrMSksIGRlcHRoMCkpXG4gICAgKyBcIjwvc3Bhbj5cXHJcXG4gICAgPC9zcGFuPlxcclxcbiAgICA8c3BhbiBjbGFzcz1cXFwiZ3VpIG1pbmkgY29tcGFjdCBcXFwiPlxcclxcbiAgICAgICAgPGJ1dHRvbiBjbGFzcz1cXFwiZ3VpIG1pbmkgY29tcGFjdCBuZXh0TGlua1xcXCIgYXJpYS1oaWRkZW49XFxcInRydWVcXFwiIFwiXG4gICAgKyBhbGlhczIoX19kZWZhdWx0KHJlcXVpcmUoXCJDOlxcXFxVc2Vyc1xcXFxyb3VzdHVyZ1xcXFxTb3VyY2VcXFxcUmVwb3NcXFxcU2VhcmNoTWFzdGVyXFxcXEdyaWRvb1xcXFxzcmNcXFxcaGJzXFxcXGhlbHBlcnNcXFxcRGlzYWJsZWQudHNcIikpLmNhbGwoYWxpYXMxLCgoc3RhY2sxID0gKGRlcHRoMCAhPSBudWxsID8gZGVwdGgwLnBhZ2luYXRpb25EYXRhIDogZGVwdGgwKSkgIT0gbnVsbCA/IHN0YWNrMS5uZXh0UGFnZUxpbmtEaXNhYmxlZCA6IHN0YWNrMSkse1wibmFtZVwiOlwiRGlzYWJsZWRcIixcImhhc2hcIjp7fSxcImRhdGFcIjpkYXRhfSkpXG4gICAgKyBcIlxcclxcbiAgICAgICAgICAgIGFyaWEtbGFiZWw9XFxcIkdvIHRvIHRoZSBuZXh0IHBhZ2VcXFwiIHRpdGxlPVxcXCJHbyB0byB0aGUgbmV4dCBwYWdlXFxcIiBkYXRhLXBhZ2U9XFxcIlwiXG4gICAgKyBhbGlhczIoX19kZWZhdWx0KHJlcXVpcmUoXCJDOlxcXFxVc2Vyc1xcXFxyb3VzdHVyZ1xcXFxTb3VyY2VcXFxcUmVwb3NcXFxcU2VhcmNoTWFzdGVyXFxcXEdyaWRvb1xcXFxzcmNcXFxcaGJzXFxcXGhlbHBlcnNcXFxcbWF0aC50c1wiKSkuY2FsbChhbGlhczEsKChzdGFjazEgPSAoZGVwdGgwICE9IG51bGwgPyBkZXB0aDAucGFnaW5hdGlvbkRhdGEgOiBkZXB0aDApKSAhPSBudWxsID8gc3RhY2sxLnBhZ2VJbmRleCA6IHN0YWNrMSksXCIrXCIsMSx7XCJuYW1lXCI6XCJtYXRoXCIsXCJoYXNoXCI6e30sXCJkYXRhXCI6ZGF0YX0pKVxuICAgICsgXCJcXFwiIHRhYmluZGV4PVxcXCItMVxcXCI+XFxyXFxuICAgICAgICAgICAgTmV4dFxcclxcbiAgICAgICAgICAgIDxpIGNsYXNzPVxcXCJndWktaWNvbiBndWktaWNvbi1jaGV2cm9uLXJpZ2h0XFxcIj48L2k+XFxyXFxuICAgICAgICA8L2J1dHRvbj5cXHJcXG4gICAgICAgIDxidXR0b24gY2xhc3M9XFxcImd1aSBtaW5pIGNvbXBhY3QgbGFzdExpbmtcXFwiIGFyaWEtaGlkZGVuPVxcXCJ0cnVlXFxcIiBcIlxuICAgICsgYWxpYXMyKF9fZGVmYXVsdChyZXF1aXJlKFwiQzpcXFxcVXNlcnNcXFxccm91c3R1cmdcXFxcU291cmNlXFxcXFJlcG9zXFxcXFNlYXJjaE1hc3RlclxcXFxHcmlkb29cXFxcc3JjXFxcXGhic1xcXFxoZWxwZXJzXFxcXERpc2FibGVkLnRzXCIpKS5jYWxsKGFsaWFzMSwoKHN0YWNrMSA9IChkZXB0aDAgIT0gbnVsbCA/IGRlcHRoMC5wYWdpbmF0aW9uRGF0YSA6IGRlcHRoMCkpICE9IG51bGwgPyBzdGFjazEubGFzdFBhZ2VMaW5rRGlzYWJsZWQgOiBzdGFjazEpLHtcIm5hbWVcIjpcIkRpc2FibGVkXCIsXCJoYXNoXCI6e30sXCJkYXRhXCI6ZGF0YX0pKVxuICAgICsgXCJcXHJcXG4gICAgICAgICAgICBhcmlhLWxhYmVsPVxcXCJHbyB0byB0aGUgbGFzdCBwYWdlXFxcIiB0aXRsZT1cXFwiR28gdG8gdGhlIGxhc3QgcGFnZVxcXCIgZGF0YS1wYWdlPVxcXCJcIlxuICAgICsgYWxpYXMyKGFsaWFzMygoKHN0YWNrMSA9IChkZXB0aDAgIT0gbnVsbCA/IGRlcHRoMC5wYWdpbmF0aW9uRGF0YSA6IGRlcHRoMCkpICE9IG51bGwgPyBzdGFjazEubm9PRnBhZ2VzIDogc3RhY2sxKSwgZGVwdGgwKSlcbiAgICArIFwiXFxcIiB0YWJpbmRleD1cXFwiLTFcXFwiPlxcclxcbiAgICAgICAgICAgIDxpIGNsYXNzPVxcXCJndWktaWNvbiBndWktaWNvbi1uZXh0XFxcIj48L2k+XFxyXFxuICAgICAgICA8L2J1dHRvbj5cXHJcXG4gICAgPC9zcGFuPlxcclxcbjwvZGl2PlxcclxcbjxkaXYgY2xhc3M9XFxcImNvbC1tZC02IGd1aSBndWktc3ViaGVhZGluZy0yIHJpZ2h0IHRleHQtcmlnaHQgbS0wXFxcIj5cXHJcXG4gICAgPHNwYW4+Um93cyBQZXIgUGFnZTwvc3Bhbj5cXHJcXG4gICAgPHNlbGVjdCBjbGFzcz1cXFwiZ3VpIHBhZ2VTaXplU2VsZWN0b3JcXFwiPlxcclxcblwiXG4gICAgKyAoKHN0YWNrMSA9IGhlbHBlcnMuZWFjaC5jYWxsKGFsaWFzMSwoKHN0YWNrMSA9IChkZXB0aDAgIT0gbnVsbCA/IGRlcHRoMC5wYWdpbmF0aW9uRGF0YSA6IGRlcHRoMCkpICE9IG51bGwgPyBzdGFjazEucGFnZVNpemVzIDogc3RhY2sxKSx7XCJuYW1lXCI6XCJlYWNoXCIsXCJoYXNoXCI6e30sXCJmblwiOmNvbnRhaW5lci5wcm9ncmFtKDEsIGRhdGEsIDAsIGJsb2NrUGFyYW1zLCBkZXB0aHMpLFwiaW52ZXJzZVwiOmNvbnRhaW5lci5ub29wLFwiZGF0YVwiOmRhdGF9KSkgIT0gbnVsbCA/IHN0YWNrMSA6IFwiXCIpXG4gICAgKyBcIiAgICA8L3NlbGVjdD5cXHJcXG4gICAgPHNwYW4gY2xhc3M9XFxcImd1aSBtLWwtMTBcXFwiPlwiXG4gICAgKyBhbGlhczIoYWxpYXMzKCgoc3RhY2sxID0gKChzdGFjazEgPSAoZGVwdGgwICE9IG51bGwgPyBkZXB0aDAucGFnaW5hdGlvbkRhdGEgOiBkZXB0aDApKSAhPSBudWxsID8gc3RhY2sxLnJhbmdlIDogc3RhY2sxKSkgIT0gbnVsbCA/IHN0YWNrMS5taW4gOiBzdGFjazEpLCBkZXB0aDApKVxuICAgICsgXCIgLSBcIlxuICAgICsgYWxpYXMyKGFsaWFzMygoKHN0YWNrMSA9ICgoc3RhY2sxID0gKGRlcHRoMCAhPSBudWxsID8gZGVwdGgwLnBhZ2luYXRpb25EYXRhIDogZGVwdGgwKSkgIT0gbnVsbCA/IHN0YWNrMS5yYW5nZSA6IHN0YWNrMSkpICE9IG51bGwgPyBzdGFjazEubWF4IDogc3RhY2sxKSwgZGVwdGgwKSlcbiAgICArIFwiIG9mIFwiXG4gICAgKyBhbGlhczIoYWxpYXMzKCgoc3RhY2sxID0gKGRlcHRoMCAhPSBudWxsID8gZGVwdGgwLnBhZ2luYXRpb25EYXRhIDogZGVwdGgwKSkgIT0gbnVsbCA/IHN0YWNrMS50b3RhbENvdW50IDogc3RhY2sxKSwgZGVwdGgwKSlcbiAgICArIFwiIGl0ZW1zPC9zcGFuPlxcclxcbjwvZGl2PlxcclxcbjxkaXYgY2xhc3M9XFxcImd1aSBjbGVhclxcXCI+PC9kaXY+XCI7XG59LFwidXNlRGF0YVwiOnRydWUsXCJ1c2VEZXB0aHNcIjp0cnVlfSk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvaGJzL2dyaWQtZm9vdGVyLmhic1xuLy8gbW9kdWxlIGlkID0gN1xuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSIsImNvbnN0IG1hdGggPSAobHZhbHVlOiBudW1iZXIsIG9wZXJhdG9yOiBzdHJpbmcsIHJ2YWx1ZTogbnVtYmVyLCBvcHRpb25zKTogbnVtYmVyID0+IHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgXCIrXCI6IGx2YWx1ZSArIHJ2YWx1ZSxcclxuICAgICAgICBcIi1cIjogbHZhbHVlIC0gcnZhbHVlLFxyXG4gICAgICAgIFwiKlwiOiBsdmFsdWUgKiBydmFsdWUsXHJcbiAgICAgICAgXCIvXCI6IGx2YWx1ZSAvIHJ2YWx1ZSxcclxuICAgICAgICBcIiVcIjogbHZhbHVlICUgcnZhbHVlLFxyXG4gICAgfVtvcGVyYXRvcl07XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBtYXRoO1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvdHNsaW50LWxvYWRlcj8/cmVmLS0xIS4vc3JjL2hicy9oZWxwZXJzL21hdGgudHMiLCJ2YXIgSGFuZGxlYmFycyA9IHJlcXVpcmUoXCJoYW5kbGViYXJzXCIpO1xuZnVuY3Rpb24gX19kZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIChvYmouX19lc01vZHVsZSA/IG9ialtcImRlZmF1bHRcIl0gOiBvYmopOyB9XG5tb2R1bGUuZXhwb3J0cyA9IChIYW5kbGViYXJzW1wiZGVmYXVsdFwiXSB8fCBIYW5kbGViYXJzKS50ZW1wbGF0ZSh7XCIxXCI6ZnVuY3Rpb24oY29udGFpbmVyLGRlcHRoMCxoZWxwZXJzLHBhcnRpYWxzLGRhdGEpIHtcbiAgICB2YXIgc3RhY2sxLCBhbGlhczE9Y29udGFpbmVyLmxhbWJkYSwgYWxpYXMyPWNvbnRhaW5lci5lc2NhcGVFeHByZXNzaW9uO1xuXG4gIHJldHVybiBcIjx0ciBjbGFzcz1cXFwibWFpblJvd1xcXCIgZGF0YS1way1hdHRyPVxcXCJcIlxuICAgICsgYWxpYXMyKGFsaWFzMSgoZGVwdGgwICE9IG51bGwgPyBkZXB0aDAua2V5Q29sdW1uIDogZGVwdGgwKSwgZGVwdGgwKSlcbiAgICArIFwiXFxcIiA+XFxyXFxuICAgIDx0ZCBjbGFzcz1cXFwiZXhwYW5zaW9uQXJyb3dzXFxcIiBzdHlsZT1cXFwiZGlzcGxheTpmbGV4O2p1c3RpZnktY29udGVudDpjZW50ZXI7XFxcIj5cXHJcXG4gICAgICAgIDxpIGNsYXNzPVxcXCJndWkgZ3VpLWljb24gZ3VpLWljb24tY2hldnJvbi1kb3duIGV4cGFuZERldGFpbHNSb3dJY29uIGN1cnNvci1wb2ludGVyXFxcIiBhcmlhLWhpZGRlbj1cXFwidHJ1ZVxcXCI+PC9pPlxcclxcbiAgICAgICAgPGkgY2xhc3M9XFxcImd1aSBndWktaWNvbiBndWktaWNvbi1jaGV2cm9uLXVwIENvbGxhcHNlRGV0YWlsc1Jvd0ljb24gY3Vyc29yLXBvaW50ZXIgZ3VpLWhpZGRlblxcXCIgYXJpYS1oaWRkZW49XFxcInRydWVcXFwiPjwvaT5cXHJcXG4gICAgPC90ZD5cXHJcXG4gICAgPHRkPlxcclxcbiAgICAgICAgPGlucHV0IHR5cGU9XFxcImNoZWNrYm94XFxcIiBkYXRhLXZhbHVlPVxcXCJcIlxuICAgICsgYWxpYXMyKGFsaWFzMSgoZGVwdGgwICE9IG51bGwgPyBkZXB0aDAucm93RGF0YSA6IGRlcHRoMCksIGRlcHRoMCkpXG4gICAgKyBcIlxcXCIgdmFsdWU9XFxcIlwiXG4gICAgKyBhbGlhczIoYWxpYXMxKChkZXB0aDAgIT0gbnVsbCA/IGRlcHRoMC5rZXlDb2x1bW4gOiBkZXB0aDApLCBkZXB0aDApKVxuICAgICsgXCJcXFwiIGNsYXNzPVxcXCJzZWxlY3Qta2V5LWNoZWNrYm94IGN1cnNvci1wb2ludGVyXFxcIj5cXHJcXG4gICAgPC90ZD5cXHJcXG5cIlxuICAgICsgKChzdGFjazEgPSBoZWxwZXJzLmVhY2guY2FsbChkZXB0aDAgIT0gbnVsbCA/IGRlcHRoMCA6IChjb250YWluZXIubnVsbENvbnRleHQgfHwge30pLChkZXB0aDAgIT0gbnVsbCA/IGRlcHRoMC5tYWluUm93Q29sQXJyYXkgOiBkZXB0aDApLHtcIm5hbWVcIjpcImVhY2hcIixcImhhc2hcIjp7fSxcImZuXCI6Y29udGFpbmVyLnByb2dyYW0oMiwgZGF0YSwgMCksXCJpbnZlcnNlXCI6Y29udGFpbmVyLm5vb3AsXCJkYXRhXCI6ZGF0YX0pKSAhPSBudWxsID8gc3RhY2sxIDogXCJcIilcbiAgICArIFwiPC90cj5cXHJcXG5cIlxuICAgICsgKChzdGFjazEgPSBjb250YWluZXIuaW52b2tlUGFydGlhbChyZXF1aXJlKFwiQzpcXFxcVXNlcnNcXFxccm91c3R1cmdcXFxcU291cmNlXFxcXFJlcG9zXFxcXFNlYXJjaE1hc3RlclxcXFxHcmlkb29cXFxcc3JjXFxcXGhic1xcXFxncmlkLWRldGFpbHMtcm93Lmhic1wiKSxkZXB0aDAse1wibmFtZVwiOlwiZ3JpZC1kZXRhaWxzLXJvd1wiLFwiZGF0YVwiOmRhdGEsXCJoZWxwZXJzXCI6aGVscGVycyxcInBhcnRpYWxzXCI6cGFydGlhbHMsXCJkZWNvcmF0b3JzXCI6Y29udGFpbmVyLmRlY29yYXRvcnN9KSkgIT0gbnVsbCA/IHN0YWNrMSA6IFwiXCIpXG4gICAgKyBcIiBcIjtcbn0sXCIyXCI6ZnVuY3Rpb24oY29udGFpbmVyLGRlcHRoMCxoZWxwZXJzLHBhcnRpYWxzLGRhdGEpIHtcbiAgICB2YXIgc3RhY2sxLCBhbGlhczE9Y29udGFpbmVyLmxhbWJkYSwgYWxpYXMyPWNvbnRhaW5lci5lc2NhcGVFeHByZXNzaW9uO1xuXG4gIHJldHVybiBcIiAgICAgICAgPHRkIHRpdGxlPVxcXCJcIlxuICAgICsgYWxpYXMyKGFsaWFzMSgoZGVwdGgwICE9IG51bGwgPyBkZXB0aDAuYWN0dWFsVmFsdWUgOiBkZXB0aDApLCBkZXB0aDApKVxuICAgICsgXCJcXFwiIGNsYXNzPVxcXCJib2R5LVwiXG4gICAgKyBhbGlhczIoYWxpYXMxKChkZXB0aDAgIT0gbnVsbCA/IGRlcHRoMC5pZCA6IGRlcHRoMCksIGRlcHRoMCkpXG4gICAgKyBcIlxcXCI+XCJcbiAgICArICgoc3RhY2sxID0gYWxpYXMxKChkZXB0aDAgIT0gbnVsbCA/IGRlcHRoMC5jb2x1bW5WYWx1ZSA6IGRlcHRoMCksIGRlcHRoMCkpICE9IG51bGwgPyBzdGFjazEgOiBcIlwiKVxuICAgICsgXCI8L3RkPlxcclxcblwiO1xufSxcImNvbXBpbGVyXCI6WzcsXCI+PSA0LjAuMFwiXSxcIm1haW5cIjpmdW5jdGlvbihjb250YWluZXIsZGVwdGgwLGhlbHBlcnMscGFydGlhbHMsZGF0YSkge1xuICAgIHZhciBzdGFjazE7XG5cbiAgcmV0dXJuICgoc3RhY2sxID0gaGVscGVycy5lYWNoLmNhbGwoZGVwdGgwICE9IG51bGwgPyBkZXB0aDAgOiAoY29udGFpbmVyLm51bGxDb250ZXh0IHx8IHt9KSwoZGVwdGgwICE9IG51bGwgPyBkZXB0aDAubWFpblJvd0FycmF5IDogZGVwdGgwKSx7XCJuYW1lXCI6XCJlYWNoXCIsXCJoYXNoXCI6e30sXCJmblwiOmNvbnRhaW5lci5wcm9ncmFtKDEsIGRhdGEsIDApLFwiaW52ZXJzZVwiOmNvbnRhaW5lci5ub29wLFwiZGF0YVwiOmRhdGF9KSkgIT0gbnVsbCA/IHN0YWNrMSA6IFwiXCIpO1xufSxcInVzZVBhcnRpYWxcIjp0cnVlLFwidXNlRGF0YVwiOnRydWV9KTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9oYnMvZ3JpZC1tYWluLXJvdy5oYnNcbi8vIG1vZHVsZSBpZCA9IDlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEiLCJpbXBvcnQgKiBhcyBqUXVlcnkgZnJvbSBcImpxdWVyeVwiO1xuaW1wb3J0IHsgQ29uZmlnU3RvcmUgfSBmcm9tIFwiLi4vY29uZmlnL0NvbmZpZ1N0b3JlXCI7XG5pbXBvcnQgeyBDb2xTZXR0aW5nc0hhbmRsZXIgfSBmcm9tIFwiLi4vZXZlbnRIYW5kbGVycy9Db2xTZXR0aW5nc0hhbmRsZXJcIjtcbmltcG9ydCB7IFNlbGVjdEV2ZW50SGFuZGxlciB9IGZyb20gXCIuLi9ldmVudEhhbmRsZXJzL1NlbGVjdEV2ZW50SGFuZGxlclwiO1xuaW1wb3J0IHsgSUdyaWRPcmRlciB9IGZyb20gXCIuLi9tb2RlbHMvSUdyaWRPcmRlclwiO1xuaW1wb3J0IHsgSVBhZ2luYXRpb24gfSBmcm9tIFwiLi4vbW9kZWxzL0lQYWdpbmF0aW9uXCI7XG5pbXBvcnQgeyBJUGFnaW5hdGlvbklucHV0IH0gZnJvbSBcIi4uL21vZGVscy9JUGFnaW5hdGlvbklucHV0XCI7XG5pbXBvcnQgeyBQYWdlciB9IGZyb20gXCIuLi9wYWdpbmF0aW9uL1BhZ2VyXCI7XG5pbXBvcnQgeyBEZXRhaWxzUm93SGFuZGxlciB9IGZyb20gXCIuLy4uL2V2ZW50SGFuZGxlcnMvRGV0YWlsc1Jvd0hhbmRsZXJcIjtcbmltcG9ydCB7IEZpbHRlckNsaWNrSGFuZGxlciB9IGZyb20gXCIuLy4uL2V2ZW50SGFuZGxlcnMvRmlsdGVyQ2xpY2tIYW5kbGVyXCI7XG5pbXBvcnQgeyBIYW5kbGVyTmFtZXMgfSBmcm9tIFwiLi8uLi9ldmVudEhhbmRsZXJzL0hhbmRsZXJOYW1lc1wiO1xuaW1wb3J0IHsgSGVhZGVyQ2xpY2tIYW5kbGVyIH0gZnJvbSBcIi4vLi4vZXZlbnRIYW5kbGVycy9IZWFkZXJDbGlja0hhbmRsZXJcIjtcbmltcG9ydCB7IElFdmVudEhhbmRsZXIgfSBmcm9tIFwiLi8uLi9ldmVudEhhbmRsZXJzL0lFdmVudEhhbmRsZXJcIjtcbmltcG9ydCB7IElIYW5kbGVyQ2hhaW4gfSBmcm9tIFwiLi8uLi9ldmVudEhhbmRsZXJzL0lIYW5kbGVyQ2hhaW5cIjtcbmltcG9ydCB7IFBhZ2VTZWFyY2hIYW5kbGVyIH0gZnJvbSBcIi4vLi4vZXZlbnRIYW5kbGVycy9QYWdlU2VhcmNoQ2xpY2tIYW5kbGVyXCI7XG5pbXBvcnQgeyBTY3JvbGxIYW5kbGVyIH0gZnJvbSBcIi4vLi4vZXZlbnRIYW5kbGVycy9TY3JvbGxIYW5kbGVyXCI7XG5pbXBvcnQgeyBUb2dnbGVDb2x1bW5IYW5kbGVyIH0gZnJvbSBcIi4vLi4vZXZlbnRIYW5kbGVycy9Ub2dnbGVDb2x1bW5IYW5kbGVyXCI7XG5pbXBvcnQgeyBGaWx0ZXJBY3Rpb25UeXBlIH0gZnJvbSBcIi4vLi4vbW9kZWxzL0ZpbHRlckFjdGlvblR5cGVcIjtcbmltcG9ydCB7IEdyaWRPcmRlckRpcmVjdGlvbiB9IGZyb20gXCIuLy4uL21vZGVscy9HcmlkT3JkZXJEaXJlY3Rpb25cIjtcbmltcG9ydCB7IElDb2x1bW4gfSBmcm9tIFwiLi8uLi9tb2RlbHMvSUNvbHVtblwiO1xuaW1wb3J0IHsgR3JpZFRlbXBsYXRlU2VydmljZSB9IGZyb20gXCIuLy4uL3NlcnZpY2VzL0dyaWRUZW1wbGF0ZVNlcnZpY2VcIjtcbmltcG9ydCB7IENvbW1vblV0aWwgfSBmcm9tIFwiLi8uLi91dGlsL0NvbHVtblV0aWxcIjtcbmltcG9ydCB7IElHcmlkT3B0aW9ucyB9IGZyb20gXCIuL0lHcmlkT3B0aW9uc1wiO1xuXG5leHBvcnQgY2xhc3MgR3JpZDxUPiB7XG5cbiAgICBwcml2YXRlIGhhbmRsZUNoYWluOiBBcnJheTxJSGFuZGxlckNoYWluPFQ+PjtcbiAgICBwcml2YXRlIGdyaWRUZW1wbGF0ZVNlcnZpY2U6IEdyaWRUZW1wbGF0ZVNlcnZpY2U8VD47XG4gICAgcHJpdmF0ZSB0b2dnbGVIYW5kbGVyOiBUb2dnbGVDb2x1bW5IYW5kbGVyPFQ+O1xuICAgIHByaXZhdGUgY29uZmlnU3RvcmU6IENvbmZpZ1N0b3JlPFQ+O1xuXG4gICAgY29uc3RydWN0b3Iob3B0aW9uczogSUdyaWRPcHRpb25zPFQ+KSB7XG4gICAgICAgIHRoaXMuY29uZmlnU3RvcmUgPSBuZXcgQ29uZmlnU3RvcmU8VD4ob3B0aW9ucyk7XG4gICAgICAgIHRoaXMuZ3JpZFRlbXBsYXRlU2VydmljZSA9IG5ldyBHcmlkVGVtcGxhdGVTZXJ2aWNlKHRoaXMuY29uZmlnU3RvcmUpO1xuICAgICAgICB0aGlzLkluaXRIYW5kbGVycygpO1xuICAgIH1cblxuICAgIHB1YmxpYyBiaW5kRGF0YSA9IChkYXRhOiBUW10sIHBhZ2luYXRpb25JbnB1dD86IElQYWdpbmF0aW9uSW5wdXQpOiB2b2lkID0+IHtcbiAgICAgICAgY29uc3QgZmlyc3RJbmRleCA9IDA7XG4gICAgICAgIGxldCBsYXN0SW5kZXggPSB0aGlzLmNvbmZpZ1N0b3JlLk9wdGlvbnMuY2h1bmtTaXplICsgdGhpcy5nZXRJbml0aWFsUm93Q291bnQoKTtcbiAgICAgICAgbGFzdEluZGV4ID0gbGFzdEluZGV4ID49IGRhdGEubGVuZ3RoID8gZGF0YS5sZW5ndGggLSAxIDogbGFzdEluZGV4O1xuICAgICAgICBQYWdlci5DYWxjdWxhdGVQYWdpbmF0aW9uRGF0YShwYWdpbmF0aW9uSW5wdXQpO1xuICAgICAgICBjb25zdCBncmlkQ29udGVudDogc3RyaW5nID0gdGhpcy5ncmlkVGVtcGxhdGVTZXJ2aWNlLkdldEZpcnN0VGVtcGxhdGUoZGF0YSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpcnN0SW5kZXgsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYXN0SW5kZXgsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICB0aGlzLmNvbmZpZ1N0b3JlLk9wdGlvbnMuY29udGFpbmVyRWxlbWVudC5pbm5lckhUTUwgPSBncmlkQ29udGVudDtcbiAgICAgICAgaWYgKHRoaXMuY29uZmlnU3RvcmUuT3B0aW9ucy5tYW5hZ2VDb2xTZXR0aW5nc0NvbnRhaW5lciAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICB0aGlzLmJpbmRNYW5hZ2VDb2x1bXModGhpcy5jb25maWdTdG9yZS5PcHRpb25zLm1hbmFnZUNvbFNldHRpbmdzQ29udGFpbmVyKTtcbiAgICAgICAgfVxuICAgICAgICAvLyBIYXZlIHRvIGJpbmQgU2Nyb2xsIEhhbmRsZXIgQWZ0ZXIgRE9NIGhhcyBiZWVuIGNyZWF0ZWRcbiAgICAgICAgY29uc3Qgc2Nyb2xsSGFuZGxlciA9IG5ldyBTY3JvbGxIYW5kbGVyPFQ+KHRoaXMuY29uZmlnU3RvcmUsIHRoaXMuZ3JpZFRlbXBsYXRlU2VydmljZSwgbGFzdEluZGV4ICsgMSk7XG4gICAgICAgIHNjcm9sbEhhbmRsZXIuUmVnaXN0ZXJEb21IYW5kbGVyKCk7XG4gICAgICAgIHRoaXMuaGFuZGxlQ2hhaW4ucHVzaCh7XG4gICAgICAgICAgICBoYW5kbGVyOiBzY3JvbGxIYW5kbGVyLFxuICAgICAgICAgICAgbmFtZTogSGFuZGxlck5hbWVzLlNjcm9sbCxcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcHVibGljIGJpbmRNYW5hZ2VDb2x1bXMgPSAobWFuYWdlQ29sQ29udGFpbmVyPzogSFRNTEVsZW1lbnQpOiB2b2lkID0+IHtcbiAgICAgICAgY29uc3QgaHRtbCA9IHRoaXMuZ3JpZFRlbXBsYXRlU2VydmljZS5HZXRNYW5hZ2VDb2x1bW5zSHRtbCgpO1xuICAgICAgICBjb25zdCBlbGVtZW50ID0galF1ZXJ5KG1hbmFnZUNvbENvbnRhaW5lciB8fCB0aGlzLmNvbmZpZ1N0b3JlLk9wdGlvbnMubWFuYWdlQ29sU2V0dGluZ3NDb250YWluZXJcbiAgICAgICAgICAgIHx8IHRoaXMuY29uZmlnU3RvcmUuT3B0aW9ucy5jb250YWluZXJFbGVtZW50KTtcbiAgICAgICAgdGhpcy50b2dnbGVIYW5kbGVyID0gbmV3IFRvZ2dsZUNvbHVtbkhhbmRsZXIodGhpcy5jb25maWdTdG9yZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgalF1ZXJ5KHRoaXMuY29uZmlnU3RvcmUuT3B0aW9ucy5jb250YWluZXJFbGVtZW50KSk7XG4gICAgICAgIGNvbnN0IG1hbmFnZUNvbEhhbmRsZXIgPSBuZXcgQ29sU2V0dGluZ3NIYW5kbGVyPFQ+KGpRdWVyeShlbGVtZW50KSwgdGhpcy5jb25maWdTdG9yZSwgdGhpcy50b2dnbGVIYW5kbGVyKTtcbiAgICAgICAgZWxlbWVudC5maW5kKFwiLmNvbC1zZXR0aW5ncy1jb250YWluZXJcIikuaHRtbChodG1sKTtcbiAgICAgICAgbWFuYWdlQ29sSGFuZGxlci5SZWdpc3RlckRvbUhhbmRsZXIoKTtcbiAgICAgICAgalF1ZXJ5KHdpbmRvdykucmVzaXplKCgpID0+IHtcbiAgICAgICAgICAgIG1hbmFnZUNvbEhhbmRsZXIub25SZXNpemUoKTtcbiAgICAgICAgfSk7XG4gICAgICAgIGpRdWVyeShkb2N1bWVudCkuY2xpY2soKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICBtYW5hZ2VDb2xIYW5kbGVyLm9uRG9jdW1lbnRDbGljayhldmVudCk7XG4gICAgICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIHB1YmxpYyBhcHBseUNvbHVtbkNvbmZpZyA9IChjb2x1bW5zOiBJQ29sdW1uW10pID0+IHtcbiAgICAgICAgdGhpcy50b2dnbGVIYW5kbGVyLmFwcGx5Q29sdW1uQ29uZmlnKGNvbHVtbnMpO1xuICAgICAgICBjb25zdCBodG1sID0gdGhpcy5ncmlkVGVtcGxhdGVTZXJ2aWNlLkdldE1hbmFnZUNvbHVtbnNIdG1sKCk7XG4gICAgICAgIGNvbnN0IGVsZW1lbnQgPSBqUXVlcnkodGhpcy5jb25maWdTdG9yZS5PcHRpb25zLm1hbmFnZUNvbFNldHRpbmdzQ29udGFpbmVyXG4gICAgICAgICAgICB8fCB0aGlzLmNvbmZpZ1N0b3JlLk9wdGlvbnMuY29udGFpbmVyRWxlbWVudCk7XG4gICAgICAgIGVsZW1lbnQuZmluZChcIi5jb2wtc2V0dGluZ3MtY29udGFpbmVyXCIpLmh0bWwoaHRtbCk7XG4gICAgfVxuXG4gICAgcHVibGljIHNldE9yZGVyID0gKG9yZGVyQnlMaXN0OiBJR3JpZE9yZGVyW10pID0+IHtcbiAgICAgICAgaWYgKG9yZGVyQnlMaXN0ID09PSB1bmRlZmluZWQgfHwgb3JkZXJCeUxpc3QgPT09IG51bGwgfHwgb3JkZXJCeUxpc3QubGVuZ3RoID09PSAwICkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGZvciAoY29uc3QgY29sIG9mIHRoaXMuY29uZmlnU3RvcmUuT3B0aW9ucy5jb2x1bW5zKSB7XG4gICAgICAgICAgICBjb2wub3JkZXIgPSB1bmRlZmluZWQ7XG4gICAgICAgIH1cbiAgICAgICAgZm9yIChjb25zdCBvcmRlckNvbCBvZiBvcmRlckJ5TGlzdCkge1xuICAgICAgICAgICAgZm9yIChjb25zdCBjb2wgb2YgdGhpcy5jb25maWdTdG9yZS5PcHRpb25zLmNvbHVtbnMpIHtcbiAgICAgICAgICAgICAgICBpZiAob3JkZXJDb2wuY29sSWQgPT09IGNvbC5pZCApIHtcbiAgICAgICAgICAgICAgICAgICAgY29sLm9yZGVyID0gb3JkZXJDb2wub3JkZXI7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByaXZhdGUgZ2V0SW5pdGlhbFJvd0NvdW50ID0gKCk6IG51bWJlciA9PiB7XG4gICAgICAgIHJldHVybiBNYXRoLmZsb29yKChqUXVlcnkod2luZG93KS5pbm5lckhlaWdodCgpICogMC42NSApIC8gMzIpO1xuICAgIH1cblxuICAgIHByaXZhdGUgSW5pdEhhbmRsZXJzID0gKCk6IHZvaWQgPT4ge1xuICAgICAgICBjb25zdCBwYXJlbnRFbGVtZW50ID0galF1ZXJ5KHRoaXMuY29uZmlnU3RvcmUuT3B0aW9ucy5jb250YWluZXJFbGVtZW50KTtcbiAgICAgICAgdGhpcy5oYW5kbGVDaGFpbiA9IFtdO1xuICAgICAgICB0aGlzLmhhbmRsZUNoYWluLnB1c2goe1xuICAgICAgICAgICAgaGFuZGxlcjogbmV3IERldGFpbHNSb3dIYW5kbGVyPFQ+KHRoaXMuY29uZmlnU3RvcmUsIHBhcmVudEVsZW1lbnQpLFxuICAgICAgICAgICAgbmFtZTogSGFuZGxlck5hbWVzLkRldGFpbHNSb3csXG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLmhhbmRsZUNoYWluLnB1c2goe1xuICAgICAgICAgICAgaGFuZGxlcjogIG5ldyBGaWx0ZXJDbGlja0hhbmRsZXI8VD4odGhpcy5jb25maWdTdG9yZSwgcGFyZW50RWxlbWVudCksXG4gICAgICAgICAgICBuYW1lOiBIYW5kbGVyTmFtZXMuRmlsdGVyQWN0aW9uLFxuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5oYW5kbGVDaGFpbi5wdXNoKHtcbiAgICAgICAgICAgIGhhbmRsZXI6IG5ldyBIZWFkZXJDbGlja0hhbmRsZXI8VD4odGhpcy5jb25maWdTdG9yZSwgcGFyZW50RWxlbWVudCksXG4gICAgICAgICAgICBuYW1lOiBIYW5kbGVyTmFtZXMuSGVhZGVyQ2xpY2ssXG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLmhhbmRsZUNoYWluLnB1c2goe1xuICAgICAgICAgICAgaGFuZGxlcjogbmV3IFBhZ2VTZWFyY2hIYW5kbGVyPFQ+KHRoaXMuY29uZmlnU3RvcmUsIHBhcmVudEVsZW1lbnQpLFxuICAgICAgICAgICAgbmFtZTogSGFuZGxlck5hbWVzLlBhZ2VTZWFyY2gsXG4gICAgICAgIH0pO1xuICAgICAgICBjb25zdCBjb250YWluZXIgPSBwYXJlbnRFbGVtZW50O1xuICAgICAgICB0aGlzLmhhbmRsZUNoYWluLnB1c2goe1xuICAgICAgICAgICAgaGFuZGxlcjogbmV3IFNlbGVjdEV2ZW50SGFuZGxlcjxUPih0aGlzLmNvbmZpZ1N0b3JlLCBwYXJlbnRFbGVtZW50LCB0aGlzLmdyaWRUZW1wbGF0ZVNlcnZpY2UpLFxuICAgICAgICAgICAgbmFtZTogSGFuZGxlck5hbWVzLkNvbFNldHRpbmdzLFxuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5oYW5kbGVDaGFpbi5mb3JFYWNoKCh2YWx1ZTogSUhhbmRsZXJDaGFpbjxUPik6IHZvaWQgPT4ge1xuICAgICAgICAgICAgdmFsdWUuaGFuZGxlci5SZWdpc3RlckRvbUhhbmRsZXIoKTtcbiAgICAgICAgfSk7XG4gICAgICAgIGpRdWVyeSh3aW5kb3cpLnJlc2l6ZSgoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmhhbmRsZUNoYWluLmZvckVhY2goKHZhbHVlOiBJSGFuZGxlckNoYWluPFQ+KTogdm9pZCA9PiB7XG4gICAgICAgICAgICAgICAgdmFsdWUuaGFuZGxlci5vblJlc2l6ZSgpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgICAgICBqUXVlcnkoZG9jdW1lbnQpLmNsaWNrKChldmVudCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5oYW5kbGVDaGFpbi5mb3JFYWNoKCh2YWx1ZTogSUhhbmRsZXJDaGFpbjxUPik6IHZvaWQgPT4ge1xuICAgICAgICAgICAgICAgIHZhbHVlLmhhbmRsZXIub25Eb2N1bWVudENsaWNrKGV2ZW50KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgIH0pO1xuICAgIH1cblxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL3RzbGludC1sb2FkZXI/P3JlZi0tMSEuL3NyYy9qcy9tYWluL0dyaWQudHMiLCJpbXBvcnQgeyBJR3JpZE9wdGlvbnMgfSBmcm9tIFwiLi4vbWFpbi9JR3JpZE9wdGlvbnNcIjtcclxuaW1wb3J0IHsgRmlsdGVyQWN0aW9uVHlwZSB9IGZyb20gXCIuLi9tb2RlbHMvRmlsdGVyQWN0aW9uVHlwZVwiO1xyXG5pbXBvcnQgeyBHcmlkT3JkZXJEaXJlY3Rpb24gfSBmcm9tIFwiLi4vbW9kZWxzL0dyaWRPcmRlckRpcmVjdGlvblwiO1xyXG5pbXBvcnQgeyBJQ29sdW1uIH0gZnJvbSBcIi4uL21vZGVscy9JQ29sdW1uXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgQ29uZmlnU3RvcmU8VD4ge1xyXG4gICAgcHVibGljIG9wdGlvbnM6IElHcmlkT3B0aW9uczxUPjtcclxuICAgIHByaXZhdGUgZGVmYXVsdEdyaWRPcHRpb25zOiBJR3JpZE9wdGlvbnM8VD4gPSB7XHJcbiAgICAgICAgYW5pbWF0aW9uVGltZTogMjAwLFxyXG4gICAgICAgIGNodW5rU2l6ZTogNSxcclxuICAgICAgICBjb2x1bW5zOiBbXSxcclxuICAgICAgICBjb250YWluZXJFbGVtZW50OiBudWxsLFxyXG4gICAgICAgIG1hbmFnZUNvbFNldHRpbmdzQ29udGFpbmVyOiBudWxsLFxyXG4gICAgICAgIGh5YnJpZEZ1bmN0aW9uOiAoY29sdW1uOiBJQ29sdW1uLCByb3c6IFQpOiBzdHJpbmcgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gXCJ0cnVlXCI7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBrZXlDb2x1bW46IFwiXCIsXHJcbiAgICAgICAgb25Db2xTZXR0aW5nc0NoYW5nZTogKGNvbENvbmZpZzogSUNvbHVtbltdKTogdm9pZCA9PiB7XHJcbiAgICAgICAgICAgIC8vIE5vIENvZGVcclxuICAgICAgICB9LFxyXG4gICAgICAgIG9uQ2xpY2tGaWx0ZXI6IChjb2x1bW46IHN0cmluZywgdmFsdWU6IGFueSwgYWN0aW9uVHlwZTogRmlsdGVyQWN0aW9uVHlwZSk6IHZvaWQgPT4ge1xyXG4gICAgICAgICAgICAvLyBObyBjb2RlXHJcbiAgICAgICAgfSxcclxuICAgICAgICBvbkNsaWNrSGVhZGVyOiAoY29sdW1uOiBzdHJpbmcsIGRpcmVjdGlvbjogR3JpZE9yZGVyRGlyZWN0aW9uKTogdm9pZCA9PiB7XHJcbiAgICAgICAgICAgIC8vIE5vIGNvZGVcclxuICAgICAgICB9LFxyXG4gICAgICAgIG9uUGFnZVNlYXJjaDogKHBhZ2VTaXplOiBudW1iZXIsIHBhZ2VJbmRleDogbnVtYmVyKTogdm9pZCA9PiB7XHJcbiAgICAgICAgICAgIC8vIE5vIGNvZGVcclxuICAgICAgICB9LFxyXG4gICAgICAgIG9uU2VsZWN0OiAocm93czogVFtdKTogdm9pZCA9PiB7XHJcbiAgICAgICAgICAgIC8vIE5vIENvZGVcclxuICAgICAgICB9LFxyXG4gICAgfTtcclxuICAgIGNvbnN0cnVjdG9yKG9wdGlvbnM6IElHcmlkT3B0aW9uczxUPikge1xyXG4gICAgICAgIHRoaXMuZXh0ZW5kT3B0aW9ucyhvcHRpb25zKTtcclxuICAgICAgICBpZiAob3B0aW9ucy5jb250YWluZXJFbGVtZW50ID09PSBudWxsKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIlBsZWFzZSBQcm92aWRlIGEgdmFsaWQgY29udGFpbmVyIEVsZW1lbnQgb2JqZWN0XCIpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHB1YmxpYyBzZXQgT3B0aW9ucyhvcHRpb25zOiBJR3JpZE9wdGlvbnM8VD4pIHtcclxuICAgICAgICB0aGlzLm9wdGlvbnMgPSBvcHRpb25zO1xyXG4gICAgfVxyXG4gICAgcHVibGljIGdldCBPcHRpb25zKCk6IElHcmlkT3B0aW9uczxUPiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMub3B0aW9ucztcclxuICAgIH1cclxuICAgIHB1YmxpYyBTZXRIaWRkZW5PbkNvbmZpZyA9IChib29sOiBib29sZWFuLCBjb2x1bW5JZD86IHN0cmluZyk6IHZvaWQgPT4ge1xyXG4gICAgICAgIGZvciAoY29uc3QgY29sIG9mIHRoaXMuT3B0aW9ucy5jb2x1bW5zKSB7XHJcbiAgICAgICAgICAgIGlmIChjb2x1bW5JZCA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICBjb2wuaGlkZGVuID0gYm9vbDtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGlmIChjb2wuaWQgPT09IGNvbHVtbklkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sLmhpZGRlbiA9IGJvb2w7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBwcml2YXRlIGV4dGVuZE9wdGlvbnMgPSAoaW5wdXRPcHRpb25zOiBJR3JpZE9wdGlvbnM8VD4pOiBJR3JpZE9wdGlvbnM8VD4gPT4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLm9wdGlvbnMgPSBqUXVlcnkuZXh0ZW5kKHt9LCB0aGlzLmRlZmF1bHRHcmlkT3B0aW9ucywgaW5wdXRPcHRpb25zKTtcclxuICAgIH1cclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvdHNsaW50LWxvYWRlcj8/cmVmLS0xIS4vc3JjL2pzL2NvbmZpZy9Db25maWdTdG9yZS50cyIsImltcG9ydCB7IElHcmlkT3B0aW9ucyB9IGZyb20gXCIuLi9tYWluL0lHcmlkT3B0aW9uc1wiO1xyXG5pbXBvcnQgeyBDb25maWdTdG9yZSB9IGZyb20gXCIuLy4uL2NvbmZpZy9Db25maWdTdG9yZVwiO1xyXG5pbXBvcnQgeyBJRXZlbnRIYW5kbGVyIH0gZnJvbSBcIi4vSUV2ZW50SGFuZGxlclwiO1xyXG5pbXBvcnQgeyBUb2dnbGVDb2x1bW5IYW5kbGVyIH0gZnJvbSBcIi4vVG9nZ2xlQ29sdW1uSGFuZGxlclwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIENvbFNldHRpbmdzSGFuZGxlcjxUPiBpbXBsZW1lbnRzIElFdmVudEhhbmRsZXI8VD4ge1xyXG4gICAgcHJpdmF0ZSBwYXJlbnRFbGVtZW50OiBKUXVlcnk7XHJcbiAgICBwcml2YXRlIHRvZ2dsZUNvbHVtbkhhbmRsZXI6IFRvZ2dsZUNvbHVtbkhhbmRsZXI8VD47XHJcbiAgICBwcml2YXRlIGNvbmZpZ1N0b3JlOiBDb25maWdTdG9yZTxUPjtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihlbGVtZW50OiBKUXVlcnksIGNvbmZpZ1N0b3JlOiBDb25maWdTdG9yZTxUPiwgdG9nZ2xlQ29sdW1uSGFuZGxlcjogVG9nZ2xlQ29sdW1uSGFuZGxlcjxUPikge1xyXG4gICAgICAgIHRoaXMucGFyZW50RWxlbWVudCA9IGVsZW1lbnQ7XHJcbiAgICAgICAgdGhpcy5jb25maWdTdG9yZSA9IGNvbmZpZ1N0b3JlO1xyXG4gICAgICAgIHRoaXMudG9nZ2xlQ29sdW1uSGFuZGxlciA9IHRvZ2dsZUNvbHVtbkhhbmRsZXI7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgb25SZXNpemUoKTogdm9pZCB7XHJcbiAgICAgICAgLy8gY29uc3Qgc2V0dG5nc1BvcHVwID0gdGhpcy5wYXJlbnRFbGVtZW50LmZpbmQoXCIuY29sLXNldHRpbmdzLWNvbnRhaW5lclwiKTtcclxuICAgICAgICAvLyBjb25zdCB0Ym9keUhlaWdodCA9IHRoaXMucGFyZW50RWxlbWVudC5maW5kKFwiLnRhYmxlLWJvZHlcIikuaW5uZXJIZWlnaHQoKTtcclxuICAgICAgICAvLyBzZXR0bmdzUG9wdXAuaW5uZXJIZWlnaHQodGJvZHlIZWlnaHQgLSAxMCk7XHJcbiAgICAgICAgLy8gc2V0dG5nc1BvcHVwLmZpbmQoXCIuY29sLXNldHRpbmdzLXRhYmxlXCIpLmlubmVySGVpZ2h0KHNldHRuZ3NQb3B1cC5pbm5lckhlaWdodCgpIC1cclxuICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICBzZXR0bmdzUG9wdXAuZmluZChcIi5jb2wtc2V0dGluZ3MtaGVhZGVyXCIpLmlubmVySGVpZ2h0KCkpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBvbkRvY3VtZW50Q2xpY2soZXZlbnQpOiB2b2lkIHtcclxuICAgICAgICBjb25zdCB0YXJnZXRFbGVtZW50ID0galF1ZXJ5KGV2ZW50LnRhcmdldCk7XHJcbiAgICAgICAgaWYgKHRhcmdldEVsZW1lbnQuaXMoXCIuY29sLXNldHRpbmdzLXRyaWdnZXJcIikpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoIXRhcmdldEVsZW1lbnQucGFyZW50cygpLmlzKFwiLmNvbC1zZXR0aW5ncy1jb250YWluZXJcIikpIHtcclxuICAgICAgICAgICAgalF1ZXJ5KFwiLmNvbC1zZXR0aW5ncy10cmlnZ2VyXCIpLnJlbW92ZUNsYXNzKFwiYWN0aXZlXCIpO1xyXG4gICAgICAgICAgICBqUXVlcnkoXCIuY29sLXNldHRpbmdzLWNvbnRhaW5lclwiKS5zbGlkZVVwKHRoaXMuY29uZmlnU3RvcmUuT3B0aW9ucy5hbmltYXRpb25UaW1lKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgUmVnaXN0ZXJEb21IYW5kbGVyKCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMucGFyZW50RWxlbWVudC5vbihcImNsaWNrXCIsIFwiLmNvbC1zZXR0aW5ncy10cmlnZ2VyXCIsIChldmVudCk6IHZvaWQgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBlbGVtZW50ID0galF1ZXJ5KGV2ZW50LnRhcmdldCk7XHJcbiAgICAgICAgICAgIGNvbnN0IHNldHRuZ3NQb3B1cCA9IHRoaXMucGFyZW50RWxlbWVudC5maW5kKFwiLmNvbC1zZXR0aW5ncy1jb250YWluZXJcIik7XHJcbiAgICAgICAgICAgIHRoaXMub25SZXNpemUoKTtcclxuICAgICAgICAgICAgalF1ZXJ5KFwiLmNvbC1zZXR0aW5ncy10cmlnZ2VyXCIpLmFkZENsYXNzKFwiYWN0aXZlXCIpO1xyXG4gICAgICAgICAgICBzZXR0bmdzUG9wdXAuc2xpZGVUb2dnbGUodGhpcy5jb25maWdTdG9yZS5PcHRpb25zLmFuaW1hdGlvblRpbWUpO1xyXG4gICAgICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICB0aGlzLnBhcmVudEVsZW1lbnQub24oXCJrZXl1cFwiLCBcIi5jb2wtc2V0dGluZ3MtaGVhZGVyIC5jb2wtc2V0dGluZ3MtZmlsdGVyXCIsXHJcbiAgICAgICAgICAgIChldmVudCk6IHZvaWQgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgZWxlbWVudCA9IGpRdWVyeShldmVudC50YXJnZXQpO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgdmFsID0gZWxlbWVudC52YWwoKS50b1N0cmluZygpLnRvTG93ZXJDYXNlKCk7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyh2YWwpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5wYXJlbnRFbGVtZW50LmZpbmQoXCIuY29sLXNldHRpbmdzLXRhYmxlIHRhYmxlIHRib2R5IHRyXCIpLmVhY2goKGk6IG51bWJlciwgZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGpRdWVyeShlKS5zaG93KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGpRdWVyeShlKS5hdHRyKFwiZGF0YS1oZWFkZXItaWRcIikudG9Mb3dlckNhc2UoKS5pbmRleE9mKHZhbCkgPT09IC0xICkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBqUXVlcnkoZSkuaGlkZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy5wYXJlbnRFbGVtZW50Lm9uKFwiY2xpY2tcIiwgXCIuc2hvdy1hbGwtY29sdW1uXCIsIChldmVudCk6IHZvaWQgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLnBhcmVudEVsZW1lbnQuZmluZChcIi5jb2wtc2V0dGluZ3MtaGlkZGVuLWNoZWNrYm94XCIpXHJcbiAgICAgICAgICAgIC5lYWNoKChpbmRleCwgZWxlbWVudCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgalF1ZXJ5KGVsZW1lbnQpLnByb3AoXCJjaGVja2VkXCIsIHRydWUpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgdGhpcy50b2dnbGVDb2x1bW5IYW5kbGVyLnNob3dBbGxDb2x1bW5zKCk7XHJcbiAgICAgICAgICAgIHRoaXMuY29uZmlnU3RvcmUuT3B0aW9ucy5vbkNvbFNldHRpbmdzQ2hhbmdlKHRoaXMuY29uZmlnU3RvcmUuT3B0aW9ucy5jb2x1bW5zKTtcclxuICAgICAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy5wYXJlbnRFbGVtZW50Lm9uKFwiY2xpY2tcIiwgXCIuaGlkZS1hbGwtY29sdW1uXCIsIChldmVudCk6IHZvaWQgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLnBhcmVudEVsZW1lbnQuZmluZChcIi5jb2wtc2V0dGluZ3MtaGlkZGVuLWNoZWNrYm94XCIpXHJcbiAgICAgICAgICAgIC5lYWNoKChpbmRleCwgZWxlbWVudCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgalF1ZXJ5KGVsZW1lbnQpLnByb3AoXCJjaGVja2VkXCIsIGZhbHNlKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIHRoaXMudG9nZ2xlQ29sdW1uSGFuZGxlci5oaWRlQWxsQ29sdW1ucygpO1xyXG4gICAgICAgICAgICB0aGlzLmNvbmZpZ1N0b3JlLk9wdGlvbnMub25Db2xTZXR0aW5nc0NoYW5nZSh0aGlzLmNvbmZpZ1N0b3JlLk9wdGlvbnMuY29sdW1ucyk7XHJcbiAgICAgICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMucGFyZW50RWxlbWVudC5vbihcImNsaWNrXCIsIFwiLmNvbC1zZXR0aW5ncy1oaWRkZW4tY2hlY2tib3hcIiwgKGV2ZW50KTogdm9pZCA9PiB7XHJcbiAgICAgICAgICAgIGlmIChldmVudC5vcmlnaW5hbEV2ZW50ICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGNoZWNrYm94ID0galF1ZXJ5KGV2ZW50LnRhcmdldCk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBpZCA9IGNoZWNrYm94LnZhbCgpLnRvU3RyaW5nKCk7XHJcbiAgICAgICAgICAgICAgICBpZiAoY2hlY2tib3guaXMoXCI6Y2hlY2tlZFwiKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMudG9nZ2xlQ29sdW1uSGFuZGxlci5zaG93Q29sdW1uKGlkKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50b2dnbGVDb2x1bW5IYW5kbGVyLmhpZGVDb2x1bW4oaWQpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMuY29uZmlnU3RvcmUuT3B0aW9ucy5vbkNvbFNldHRpbmdzQ2hhbmdlKHRoaXMuY29uZmlnU3RvcmUuT3B0aW9ucy5jb2x1bW5zKTtcclxuICAgICAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy90c2xpbnQtbG9hZGVyPz9yZWYtLTEhLi9zcmMvanMvZXZlbnRIYW5kbGVycy9Db2xTZXR0aW5nc0hhbmRsZXIudHMiLCJpbXBvcnQgeyBDb25maWdTdG9yZSB9IGZyb20gXCIuLi9jb25maWcvQ29uZmlnU3RvcmVcIjtcclxuaW1wb3J0IHsgR3JpZFRlbXBsYXRlU2VydmljZSB9IGZyb20gXCIuLi9zZXJ2aWNlcy9HcmlkVGVtcGxhdGVTZXJ2aWNlXCI7XHJcbmltcG9ydCB7IElFdmVudEhhbmRsZXIgfSBmcm9tIFwiLi9JRXZlbnRIYW5kbGVyXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgU2VsZWN0RXZlbnRIYW5kbGVyPFQ+IGltcGxlbWVudHMgSUV2ZW50SGFuZGxlcjxUPiB7XHJcbiAgICBwcml2YXRlIHBhcmVudEVsZW1lbnQ6IEpRdWVyeTtcclxuICAgIHByaXZhdGUgY29uZmlnU3RvcmU6IENvbmZpZ1N0b3JlPFQ+O1xyXG4gICAgcHJpdmF0ZSBncmlkVGVtcGxhdGVTZXJ2aWNlOiBHcmlkVGVtcGxhdGVTZXJ2aWNlPFQ+O1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKGNvbmZpZ1N0b3JlOiBDb25maWdTdG9yZTxUPiwgZWxlbWVudDogSlF1ZXJ5LCBncmlkVGVtcGxhdGVTZXJ2aWNlOiBHcmlkVGVtcGxhdGVTZXJ2aWNlPFQ+KSB7XHJcbiAgICAgICAgdGhpcy5jb25maWdTdG9yZSA9IGNvbmZpZ1N0b3JlO1xyXG4gICAgICAgIHRoaXMucGFyZW50RWxlbWVudCA9IGVsZW1lbnQ7XHJcbiAgICAgICAgdGhpcy5ncmlkVGVtcGxhdGVTZXJ2aWNlID0gZ3JpZFRlbXBsYXRlU2VydmljZTtcclxuICAgIH1cclxuICAgIHB1YmxpYyBSZWdpc3RlckRvbUhhbmRsZXIoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5wYXJlbnRFbGVtZW50Lm9uKFwiY2hhbmdlXCIsIFwiLnNlbGVjdC1rZXktY2hlY2tib3hcIiAsIChldmVudCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBlbGVtZW50ID0galF1ZXJ5KGV2ZW50LnRhcmdldCk7XHJcbiAgICAgICAgICAgIGNvbnN0IHJvdyA9IGVsZW1lbnQuZGF0YShcInZhbHVlXCIpO1xyXG4gICAgICAgICAgICBjb25zdCBjaGVja2VkID0gZWxlbWVudC5pcyhcIjpjaGVja2VkXCIpO1xyXG4gICAgICAgICAgICBpZiAoY2hlY2tlZCkge1xyXG4gICAgICAgICAgICAgICAgZWxlbWVudC5wYXJlbnRzKFwiLm1haW5Sb3dcIikuYWRkQ2xhc3MoXCJhY3RpdmVcIik7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBlbGVtZW50LnBhcmVudHMoXCIubWFpblJvd1wiKS5yZW1vdmVDbGFzcyhcImFjdGl2ZVwiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoZXZlbnQub3JpZ2luYWxFdmVudCA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5jb25maWdTdG9yZS5PcHRpb25zLm9uU2VsZWN0KFtyb3ddLCBjaGVja2VkKTtcclxuICAgICAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy5wYXJlbnRFbGVtZW50Lm9uKFwiY2hhbmdlXCIsIFwiLnNlbGVjdC1hbGwtY2hlY2tib3hcIiAsIChldmVudCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBlbGVtZW50ID0galF1ZXJ5KGV2ZW50LnRhcmdldCk7XHJcbiAgICAgICAgICAgIGNvbnN0IGNoZWNrZWQgPSBlbGVtZW50LmlzKFwiOmNoZWNrZWRcIik7XHJcbiAgICAgICAgICAgIHRoaXMuY29uZmlnU3RvcmUuT3B0aW9ucy5vblNlbGVjdCh0aGlzLmdyaWRUZW1wbGF0ZVNlcnZpY2UuRGF0YSwgY2hlY2tlZCk7XHJcbiAgICAgICAgICAgIHRoaXMucGFyZW50RWxlbWVudC5maW5kKFwiLnNlbGVjdC1rZXktY2hlY2tib3hcIikucHJvcChcImNoZWNrZWRcIiwgY2hlY2tlZCk7XHJcbiAgICAgICAgICAgIGlmIChjaGVja2VkKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnBhcmVudEVsZW1lbnQuZmluZChcIi5tYWluVGFibGUgLm1haW5Sb3dcIikuYWRkQ2xhc3MoXCJhY3RpdmVcIik7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnBhcmVudEVsZW1lbnQuZmluZChcIi5tYWluVGFibGUgLm1haW5Sb3dcIikucmVtb3ZlQ2xhc3MoXCJhY3RpdmVcIik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgb25SZXNpemUoKTogdm9pZCB7XHJcbiAgICAgICAgLy8gSWdub3JlXHJcbiAgICB9XHJcbiAgICBwdWJsaWMgb25Eb2N1bWVudENsaWNrKGV2ZW50OiBhbnkpOiB2b2lkIHtcclxuICAgICAgICAvLyBJZ25vcmVcclxuICAgIH1cclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvdHNsaW50LWxvYWRlcj8/cmVmLS0xIS4vc3JjL2pzL2V2ZW50SGFuZGxlcnMvU2VsZWN0RXZlbnRIYW5kbGVyLnRzIiwiaW1wb3J0IHsgQ29uZmlnU3RvcmUgfSBmcm9tIFwiLi4vY29uZmlnL0NvbmZpZ1N0b3JlXCI7XHJcbmltcG9ydCB7IElFdmVudEhhbmRsZXIgfSBmcm9tIFwiLi9JRXZlbnRIYW5kbGVyXCI7XHJcbmV4cG9ydCBjbGFzcyBEZXRhaWxzUm93SGFuZGxlcjxUPiBpbXBsZW1lbnRzIElFdmVudEhhbmRsZXI8VD4ge1xyXG4gICAgcHJpdmF0ZSBwYXJlbnRFbGVtZW50OiBKUXVlcnk7XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBjb25maWdTdG9yZTogQ29uZmlnU3RvcmU8VD4sIGVsZW1lbnQ6IEpRdWVyeSkge1xyXG4gICAgICAgIHRoaXMucGFyZW50RWxlbWVudCA9IGVsZW1lbnQ7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgb25SZXNpemUoKTogdm9pZCB7XHJcbiAgICAgICAgLy8gTm90aGluZyB0byBEby5cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgb25Eb2N1bWVudENsaWNrKGV2ZW50KTogdm9pZCB7XHJcbiAgICAgICAgLy8gTm90aGluZyB0byBEby5cclxuICAgIH1cclxuICAgIHB1YmxpYyBSZWdpc3RlckRvbUhhbmRsZXIgPSAoKTogdm9pZCA9PiB7XHJcbiAgICAgICAgdGhpcy5wYXJlbnRFbGVtZW50Lm9uKFwiY2xpY2tcIiwgXCIudGFibGUtYm9keSAuZXhwYW5zaW9uQXJyb3dzIGlcIiwgKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IGFycm93ID0galF1ZXJ5KGV2ZW50LnRhcmdldCk7XHJcbiAgICAgICAgICAgIGNvbnN0IGRldGFpbHNSb3cgPSBhcnJvdy5jbG9zZXN0KFwidHJcIikubmV4dCgpO1xyXG4gICAgICAgICAgICBjb25zdCBjdXJyZW50SWNvbiA9IGFycm93LmhpZGUoKTtcclxuICAgICAgICAgICAgY29uc3Qgb3RoZXJJY29uID0gYXJyb3cuc2libGluZ3MoXCJpXCIpLnNob3coKTtcclxuICAgICAgICAgICAgaWYgKGFycm93Lmhhc0NsYXNzKFwiZXhwYW5kRGV0YWlsc1Jvd0ljb25cIikpIHtcclxuICAgICAgICAgICAgICAgIGRldGFpbHNSb3cuc2xpZGVEb3duKHRoaXMuY29uZmlnU3RvcmUuT3B0aW9ucy5hbmltYXRpb25UaW1lKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGRldGFpbHNSb3cuc2xpZGVVcCh0aGlzLmNvbmZpZ1N0b3JlLk9wdGlvbnMuYW5pbWF0aW9uVGltZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL3RzbGludC1sb2FkZXI/P3JlZi0tMSEuL3NyYy9qcy9ldmVudEhhbmRsZXJzL0RldGFpbHNSb3dIYW5kbGVyLnRzIiwiaW1wb3J0IHsgQ29uZmlnU3RvcmUgfSBmcm9tIFwiLi4vY29uZmlnL0NvbmZpZ1N0b3JlXCI7XHJcbmltcG9ydCB7IElHcmlkT3B0aW9ucyB9IGZyb20gXCIuLi9tYWluL0lHcmlkT3B0aW9uc1wiO1xyXG5pbXBvcnQgeyBDb21tb25VdGlsIH0gZnJvbSBcIi4uL3V0aWwvQ29sdW1uVXRpbFwiO1xyXG5pbXBvcnQgeyBGaWx0ZXJBY3Rpb25UeXBlIH0gZnJvbSBcIi4vLi4vbW9kZWxzL0ZpbHRlckFjdGlvblR5cGVcIjtcclxuaW1wb3J0IHsgSUZpbHRlckNsaWNrRGVsZWdhdGUgfSBmcm9tIFwiLi8uLi9tb2RlbHMvSUZpbHRlckNsaWNrRGVsZWdhdGVcIjtcclxuaW1wb3J0IHsgSUV2ZW50SGFuZGxlciB9IGZyb20gXCIuL0lFdmVudEhhbmRsZXJcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBGaWx0ZXJDbGlja0hhbmRsZXI8VD4gaW1wbGVtZW50cyBJRXZlbnRIYW5kbGVyPFQ+IHtcclxuICAgIHByaXZhdGUgY29uZmlnU3RvcmU6IENvbmZpZ1N0b3JlPFQ+O1xyXG4gICAgcHJpdmF0ZSBwYXJlbnRFbGVtZW50OiBKUXVlcnk7XHJcblxyXG4gICAgY29uc3RydWN0b3IoY29uZmlnU3RvcmU6IENvbmZpZ1N0b3JlPFQ+LCBlbGVtZW50OiBKUXVlcnkpIHtcclxuICAgICAgICB0aGlzLmNvbmZpZ1N0b3JlID0gY29uZmlnU3RvcmU7XHJcbiAgICAgICAgdGhpcy5wYXJlbnRFbGVtZW50ID0gZWxlbWVudDtcclxuICAgIH1cclxuICAgIHB1YmxpYyBvblJlc2l6ZSgpOiB2b2lkIHtcclxuICAgICAgICAvLyBOb3RoaW5nIHRvIERvLlxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBvbkRvY3VtZW50Q2xpY2soZXZlbnQpOiB2b2lkIHtcclxuICAgICAgICAvLyBOb3RoaW5nIHRvIERvLlxyXG4gICAgfVxyXG4gICAgcHVibGljIFJlZ2lzdGVyRG9tSGFuZGxlciA9ICgpOiB2b2lkID0+IHtcclxuICAgICAgICB0aGlzLnBhcmVudEVsZW1lbnQub24oXCJjbGlja1wiLCBcIi50YWJsZS1ib2R5IC5kZXRhaWxzUm93IC5kZXRhaWxzVGFibGUgdGQgaVwiLCAoZXZlbnQpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgZWxlbWVudCA9IGpRdWVyeShldmVudC50YXJnZXQpO1xyXG4gICAgICAgICAgICBjb25zdCBwYXJlbnRUZCA9IGVsZW1lbnQucGFyZW50cyhcInRkXCIpO1xyXG4gICAgICAgICAgICBjb25zdCBrZXkgPSBwYXJlbnRUZC5hdHRyKFwiZGF0YS1maWx0ZXIta2V5XCIpO1xyXG4gICAgICAgICAgICBjb25zdCB2YWx1ZSA9IHBhcmVudFRkLmF0dHIoXCJkYXRhLWZpbHRlci12YWx1ZVwiKTtcclxuICAgICAgICAgICAgY29uc3QgdHlwZSA9IHBhcmVudFRkLmF0dHIoXCJkYXRhLWZpbHRlci10eXBlXCIpO1xyXG4gICAgICAgICAgICBjb25zdCBjb2wgPSBDb21tb25VdGlsLkdldENvbHVtbk9iamVjdChrZXksIHRoaXMuY29uZmlnU3RvcmUuT3B0aW9ucy5jb2x1bW5zKTtcclxuICAgICAgICAgICAgaWYgKGNvbCA9PT0gdW5kZWZpbmVkIHx8IGNvbCA9PT0gbnVsbCB8fCAhY29sLmZpbHRlcmFibGUgKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgbGV0IGZpbHRlckFjdGlvbjogRmlsdGVyQWN0aW9uVHlwZSA9IEZpbHRlckFjdGlvblR5cGUuQWRkO1xyXG4gICAgICAgICAgICBpZiAoZWxlbWVudC5oYXNDbGFzcyhcInJlbW92ZUZpbHRlclwiKSkge1xyXG4gICAgICAgICAgICAgICAgZmlsdGVyQWN0aW9uID0gRmlsdGVyQWN0aW9uVHlwZS5NaW51cztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLmNvbmZpZ1N0b3JlLk9wdGlvbnMub25DbGlja0ZpbHRlcihrZXksIHZhbHVlLCBmaWx0ZXJBY3Rpb24sIHR5cGUpO1xyXG4gICAgICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvdHNsaW50LWxvYWRlcj8/cmVmLS0xIS4vc3JjL2pzL2V2ZW50SGFuZGxlcnMvRmlsdGVyQ2xpY2tIYW5kbGVyLnRzIiwiZXhwb3J0IGVudW0gRmlsdGVyQWN0aW9uVHlwZSB7XHJcbiAgICBBZGQgPSBcIkFkZFwiLFxyXG4gICAgTWludXMgPSBcIk1pbnVzXCIsXHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL3RzbGludC1sb2FkZXI/P3JlZi0tMSEuL3NyYy9qcy9tb2RlbHMvRmlsdGVyQWN0aW9uVHlwZS50cyIsImV4cG9ydCBlbnVtIEhhbmRsZXJOYW1lcyB7XHJcbiAgICBGaWx0ZXJBY3Rpb24sXHJcbiAgICBIZWFkZXJDbGljayxcclxuICAgIFNjcm9sbCxcclxuICAgIFBhZ2VTZWFyY2gsXHJcbiAgICBEZXRhaWxzUm93LFxyXG4gICAgVG9nZ2xlQ29sdW1uLFxyXG4gICAgQ29sU2V0dGluZ3MsXHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL3RzbGludC1sb2FkZXI/P3JlZi0tMSEuL3NyYy9qcy9ldmVudEhhbmRsZXJzL0hhbmRsZXJOYW1lcy50cyIsImltcG9ydCB7IENvbmZpZ1N0b3JlIH0gZnJvbSBcIi4uL2NvbmZpZy9Db25maWdTdG9yZVwiO1xyXG5pbXBvcnQgeyBJR3JpZE9wdGlvbnMgfSBmcm9tIFwiLi4vbWFpbi9JR3JpZE9wdGlvbnNcIjtcclxuaW1wb3J0IHsgQ29tbW9uVXRpbCB9IGZyb20gXCIuLi91dGlsL0NvbHVtblV0aWxcIjtcclxuaW1wb3J0IHsgR3JpZE9yZGVyRGlyZWN0aW9uIH0gZnJvbSBcIi4vLi4vbW9kZWxzL0dyaWRPcmRlckRpcmVjdGlvblwiO1xyXG5pbXBvcnQge0lIZWFkZXJDbGlja0RlbGVnYXRlfSBmcm9tIFwiLi8uLi9tb2RlbHMvSUhlYWRlckNsaWNrRGVsZWdhdGVcIjtcclxuaW1wb3J0IHsgSUV2ZW50SGFuZGxlciB9IGZyb20gXCIuL0lFdmVudEhhbmRsZXJcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBIZWFkZXJDbGlja0hhbmRsZXI8VD4gaW1wbGVtZW50cyBJRXZlbnRIYW5kbGVyPFQ+IHtcclxuICAgIHByaXZhdGUgcGFyZW50RWxlbWVudDogSlF1ZXJ5O1xyXG4gICAgcHJpdmF0ZSBjb25maWdTdG9yZTogQ29uZmlnU3RvcmU8VD47XHJcblxyXG4gICAgY29uc3RydWN0b3IoY29uZmlnU3RvcmU6IENvbmZpZ1N0b3JlPFQ+LCBlbGVtZW50OiBKUXVlcnkpIHtcclxuICAgICAgICB0aGlzLmNvbmZpZ1N0b3JlID0gY29uZmlnU3RvcmU7XHJcbiAgICAgICAgdGhpcy5wYXJlbnRFbGVtZW50ID0gZWxlbWVudDtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgb25SZXNpemUoKTogdm9pZCB7XHJcbiAgICAgICAgLy8gTm90aGluZyB0byBEby5cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgb25Eb2N1bWVudENsaWNrKGV2ZW50KTogdm9pZCB7XHJcbiAgICAgICAgLy8gTm90aGluZyB0byBEby5cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgUmVnaXN0ZXJEb21IYW5kbGVyID0gKCk6IHZvaWQgPT4ge1xyXG4gICAgICAgIC8vIFJlZ2lzdGVyaW5nIEpRdWVyeSBFdmVudCBIYW5kbGVyIGlmIEhlYWRlciBpcyBDbGlja2VkLlxyXG4gICAgICAgIHRoaXMucGFyZW50RWxlbWVudC5vbihcImNsaWNrXCIsIFwiLnRhYmxlLWhlYWRlciB0aFwiLCAoZXZlbnQpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgZWxlbWVudCA9IGpRdWVyeShldmVudC50YXJnZXQpLmNsb3Nlc3QoXCJ0aFwiKTtcclxuICAgICAgICAgICAgY29uc3QgaGVhZGVySWQgPSBlbGVtZW50LmF0dHIoXCJkYXRhLWhlYWRlci1pZFwiKTtcclxuICAgICAgICAgICAgY29uc3QgY29sID0gQ29tbW9uVXRpbC5HZXRDb2x1bW5PYmplY3QoaGVhZGVySWQsIHRoaXMuY29uZmlnU3RvcmUuT3B0aW9ucy5jb2x1bW5zKTtcclxuICAgICAgICAgICAgaWYgKGNvbCA9PT0gdW5kZWZpbmVkIHx8IGNvbCA9PT0gbnVsbCB8fCAhY29sLnNvcnRhYmxlICkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNvbnN0IGFycm93SWNvbnMgPSBlbGVtZW50LmZpbmQoXCJpXCIpO1xyXG4gICAgICAgICAgICBjb25zdCB1cEFycm93SWNvbiA9IGFycm93SWNvbnMuZmlyc3QoKTtcclxuICAgICAgICAgICAgY29uc3QgZG93bkFycm93SWNvbiA9IGFycm93SWNvbnMubGFzdCgpO1xyXG4gICAgICAgICAgICBsZXQgZGlyZWN0aW9uOiBHcmlkT3JkZXJEaXJlY3Rpb247XHJcbiAgICAgICAgICAgIGlmIChhcnJvd0ljb25zLmlzKFwiOnZpc2libGVcIikpIHtcclxuICAgICAgICAgICAgICAgIGlmICh1cEFycm93SWNvbi5pcyhcIjp2aXNpYmxlXCIpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlyZWN0aW9uID0gR3JpZE9yZGVyRGlyZWN0aW9uLkRlc2M7XHJcbiAgICAgICAgICAgICAgICAgICAgdXBBcnJvd0ljb24uaGlkZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGRvd25BcnJvd0ljb24uc2hvdygpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBkaXJlY3Rpb24gPSBHcmlkT3JkZXJEaXJlY3Rpb24uQXNjO1xyXG4gICAgICAgICAgICAgICAgICAgIGRvd25BcnJvd0ljb24uaGlkZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIHVwQXJyb3dJY29uLnNob3coKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGRpcmVjdGlvbiA9IEdyaWRPcmRlckRpcmVjdGlvbi5Bc2M7XHJcbiAgICAgICAgICAgICAgICB1cEFycm93SWNvbi5zaG93KCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgQ29tbW9uVXRpbC5TZXRPcmRlcihoZWFkZXJJZCwgZGlyZWN0aW9uLCB0aGlzLmNvbmZpZ1N0b3JlLk9wdGlvbnMuY29sdW1ucyk7XHJcbiAgICAgICAgICAgIHRoaXMuY29uZmlnU3RvcmUuT3B0aW9ucy5vbkNsaWNrSGVhZGVyKGhlYWRlcklkLCBkaXJlY3Rpb24pO1xyXG4gICAgICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvdHNsaW50LWxvYWRlcj8/cmVmLS0xIS4vc3JjL2pzL2V2ZW50SGFuZGxlcnMvSGVhZGVyQ2xpY2tIYW5kbGVyLnRzIiwiaW1wb3J0ICogYXMgalF1ZXJ5IGZyb20gXCJqcXVlcnlcIjtcclxuaW1wb3J0IHsgQ29uZmlnU3RvcmUgfSBmcm9tIFwiLi4vY29uZmlnL0NvbmZpZ1N0b3JlXCI7XHJcbmltcG9ydCB7IFBhZ2VyIH0gZnJvbSBcIi4uL3BhZ2luYXRpb24vUGFnZXJcIjtcclxuaW1wb3J0IHsgSVBhZ2VTZWFyY2hDbGlja0RlbGVnYXRlIH0gZnJvbSBcIi4vLi4vbW9kZWxzL0lQYWdlU2VhcmNoQ2xpY2tEZWxlZ2F0ZVwiO1xyXG5pbXBvcnQgeyBJUGFnaW5hdGlvbiB9IGZyb20gXCIuLy4uL21vZGVscy9JUGFnaW5hdGlvblwiO1xyXG5pbXBvcnQgeyBJRXZlbnRIYW5kbGVyIH0gZnJvbSBcIi4vSUV2ZW50SGFuZGxlclwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIFBhZ2VTZWFyY2hIYW5kbGVyPFQ+IGltcGxlbWVudHMgSUV2ZW50SGFuZGxlcjxUPiB7XHJcbiAgICBwcml2YXRlIGNvbmZpZ1N0b3JlOiBDb25maWdTdG9yZTxUPjtcclxuICAgIHByaXZhdGUgcGFyZW50RWxlbWVudDogSlF1ZXJ5O1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKGNvbmZpZ1N0b3JlOiBDb25maWdTdG9yZTxUPiwgZWxlbWVudDogSlF1ZXJ5KSB7XHJcbiAgICAgICAgdGhpcy5jb25maWdTdG9yZSA9IGNvbmZpZ1N0b3JlO1xyXG4gICAgICAgIHRoaXMucGFyZW50RWxlbWVudCA9IGVsZW1lbnQ7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgb25SZXNpemUoKTogdm9pZCB7XHJcbiAgICAgICAgLy8gdGhyb3cgbmV3IEVycm9yKFwiTWV0aG9kIG5vdCBpbXBsZW1lbnRlZC5cIik7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIG9uRG9jdW1lbnRDbGljaygpOiB2b2lkIHtcclxuICAgICAgICAvLyB0aHJvdyBuZXcgRXJyb3IoXCJNZXRob2Qgbm90IGltcGxlbWVudGVkLlwiKTtcclxuICAgIH1cclxuICAgIHB1YmxpYyBSZWdpc3RlckRvbUhhbmRsZXIgPSAoKTogdm9pZCA9PiB7XHJcbiAgICAgICAgdGhpcy5wYXJlbnRFbGVtZW50Lm9uKFwiY2xpY2tcIiwgXCIudGFibGUtZm9vdGVyIC5maXJzdExpbmtcIiwgKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuY29uZmlnU3RvcmUub3B0aW9ucy5vblBhZ2VTZWFyY2goUGFnZXIuUGFnaW5hdGlvbkRhdGEucGFnZVNpemUsIDEpO1xyXG4gICAgICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICB0aGlzLnBhcmVudEVsZW1lbnQub24oXCJjbGlja1wiLCBcIi50YWJsZS1mb290ZXIgLm5leHRMaW5rXCIsIChldmVudCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmNvbmZpZ1N0b3JlLm9wdGlvbnMub25QYWdlU2VhcmNoKFBhZ2VyLlBhZ2luYXRpb25EYXRhLnBhZ2VTaXplLCBQYWdlci5QYWdpbmF0aW9uRGF0YS5wYWdlSW5kZXggKyAxKTtcclxuICAgICAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy5wYXJlbnRFbGVtZW50Lm9uKFwiY2xpY2tcIiwgXCIudGFibGUtZm9vdGVyIC5wcmV2TGlua1wiLCAoZXZlbnQpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5jb25maWdTdG9yZS5vcHRpb25zLm9uUGFnZVNlYXJjaChQYWdlci5QYWdpbmF0aW9uRGF0YS5wYWdlU2l6ZSwgUGFnZXIuUGFnaW5hdGlvbkRhdGEucGFnZUluZGV4IC0gMSk7XHJcbiAgICAgICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMucGFyZW50RWxlbWVudC5vbihcImNsaWNrXCIsIFwiLnRhYmxlLWZvb3RlciAubGFzdExpbmtcIiwgKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuY29uZmlnU3RvcmUub3B0aW9ucy5vblBhZ2VTZWFyY2goUGFnZXIuUGFnaW5hdGlvbkRhdGEucGFnZVNpemUsIFBhZ2VyLlBhZ2luYXRpb25EYXRhLm5vT2ZQYWdlcyk7XHJcbiAgICAgICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMucGFyZW50RWxlbWVudC5vbihcImNoYW5nZVwiLCBcIi50YWJsZS1mb290ZXIgLnBhZ2VTaXplU2VsZWN0b3JcIiwgKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IHZhbDogbnVtYmVyID0gK2pRdWVyeShldmVudC50YXJnZXQpLnZhbCgpLnRvU3RyaW5nKCk7XHJcbiAgICAgICAgICAgIHRoaXMuY29uZmlnU3RvcmUub3B0aW9ucy5vblBhZ2VTZWFyY2godmFsLCBQYWdlci5QYWdpbmF0aW9uRGF0YS5wYWdlSW5kZXgpO1xyXG4gICAgICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICB0aGlzLnBhcmVudEVsZW1lbnQub24oXCJrZXlwcmVzc1wiLCBcIi50YWJsZS1mb290ZXIgLnBhZ2VyLWlucHV0XCIsIChldmVudCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBpcCA9IGpRdWVyeShldmVudC50YXJnZXQpO1xyXG4gICAgICAgICAgICBjb25zdCBwYWdlRGF0YSA9IFBhZ2VyLlBhZ2luYXRpb25EYXRhO1xyXG4gICAgICAgICAgICBpZiAoZXZlbnQua2V5Q29kZSA9PT0gMTMpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHZhbDogbnVtYmVyID0gK2lwLnZhbCgpLnRvU3RyaW5nKCk7XHJcbiAgICAgICAgICAgICAgICBpZiAoaXNOYU4odmFsKSB8fCB2YWwgPiBwYWdlRGF0YS5ub09mUGFnZXMgfHwgdmFsIDwgMSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlwLnZhbChwYWdlRGF0YS5wYWdlSW5kZXgpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbmZpZ1N0b3JlLm9wdGlvbnMub25QYWdlU2VhcmNoKHBhZ2VEYXRhLnBhZ2VTaXplLCB2YWwpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy90c2xpbnQtbG9hZGVyPz9yZWYtLTEhLi9zcmMvanMvZXZlbnRIYW5kbGVycy9QYWdlU2VhcmNoQ2xpY2tIYW5kbGVyLnRzIiwiaW1wb3J0IHsgQ29uZmlnU3RvcmUgfSBmcm9tIFwiLi4vY29uZmlnL0NvbmZpZ1N0b3JlXCI7XHJcbmltcG9ydCB7IEdyaWRUZW1wbGF0ZVNlcnZpY2UgfSBmcm9tIFwiLi8uLi9zZXJ2aWNlcy9HcmlkVGVtcGxhdGVTZXJ2aWNlXCI7XHJcbmltcG9ydCB7IElJbmRleENvdW50ZXIgfSBmcm9tIFwiLi8uLi92aXJ0dWFsaXphdGlvbi9JbmRleENvdW50ZXJcIjtcclxuaW1wb3J0IHsgU2Nyb2xsRGlyZWN0aW9uIH0gZnJvbSBcIi4vLi4vdmlydHVhbGl6YXRpb24vU2Nyb2xsRGlyZWN0aW9uXCI7XHJcbmltcG9ydCB7IFZpcnR1YWxpemVyIH0gZnJvbSBcIi4vLi4vdmlydHVhbGl6YXRpb24vVmlydHVhbGl6ZXJcIjtcclxuaW1wb3J0IHsgSUV2ZW50SGFuZGxlciB9IGZyb20gXCIuL0lFdmVudEhhbmRsZXJcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBTY3JvbGxIYW5kbGVyPFQ+IGltcGxlbWVudHMgSUV2ZW50SGFuZGxlcjxUPiB7XHJcbiAgICBwcml2YXRlIHZpcnR1YWxpemVyOiBWaXJ0dWFsaXplcjtcclxuICAgIHByaXZhdGUgcGFyZW50RWxlbWVudDogSlF1ZXJ5O1xyXG4gICAgcHJpdmF0ZSBncmlkVGVtcGxhdGVTZXJ2aWNlOiBHcmlkVGVtcGxhdGVTZXJ2aWNlPFQ+O1xyXG4gICAgcHJpdmF0ZSByZW5kZXJpbmc6IGJvb2xlYW4gPSAgZmFsc2U7XHJcbiAgICBwcml2YXRlIGNvbmZpZ1N0b3JlOiBDb25maWdTdG9yZTxUPjtcclxuICAgIHByaXZhdGUgbGVmdE9mZnNldDogbnVtYmVyO1xyXG4gICAgcHJpdmF0ZSBjdXJyZW50SW5kZXg6IG51bWJlcjtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihjb25maWdTdG9yZTogQ29uZmlnU3RvcmU8VD4sIGdyaWRUZW1wbGF0ZVNlcnZpY2U6IEdyaWRUZW1wbGF0ZVNlcnZpY2U8VD4sIGN1cnJlbnRJbmRleDogbnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy5jb25maWdTdG9yZSA9IGNvbmZpZ1N0b3JlO1xyXG4gICAgICAgIHRoaXMucGFyZW50RWxlbWVudCA9IGpRdWVyeSh0aGlzLmNvbmZpZ1N0b3JlLk9wdGlvbnMuY29udGFpbmVyRWxlbWVudCk7XHJcbiAgICAgICAgdGhpcy5ncmlkVGVtcGxhdGVTZXJ2aWNlID0gZ3JpZFRlbXBsYXRlU2VydmljZTtcclxuICAgICAgICB0aGlzLmN1cnJlbnRJbmRleCA9IGN1cnJlbnRJbmRleDtcclxuICAgIH1cclxuICAgIHB1YmxpYyBvblJlc2l6ZSgpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLmxlZnRPZmZzZXQgPSB0aGlzLnBhcmVudEVsZW1lbnQuZmluZChcIi50YWJsZS1oZWFkZXJcIikub2Zmc2V0KCkubGVmdDtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgb25Eb2N1bWVudENsaWNrKGV2ZW50KTogdm9pZCB7XHJcbiAgICAgICAgalF1ZXJ5KGRvY3VtZW50KS5yZXNpemUoKHJlc2l6ZUV2ZW50KSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMubGVmdE9mZnNldCA9IHRoaXMucGFyZW50RWxlbWVudC5maW5kKFwiLnRhYmxlLWhlYWRlclwiKS5vZmZzZXQoKS5sZWZ0O1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgcHVibGljIFJlZ2lzdGVyRG9tSGFuZGxlciA9ICgpOiB2b2lkID0+IHtcclxuICAgICAgICAvLyBSZWdpc3RlcmluZyBKUXVlcnkgRXZlbnQgSGFuZGxlciBpZiBIZWFkZXIgaXMgQ2xpY2tlZC5cclxuICAgICAgICB0aGlzLnBhcmVudEVsZW1lbnQucmVzaXplKChldmVudCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmxlZnRPZmZzZXQgPSB0aGlzLnBhcmVudEVsZW1lbnQuZmluZChcIi50YWJsZS1oZWFkZXJcIikub2Zmc2V0KCkubGVmdDtcclxuICAgICAgICB9KTtcclxuICAgICAgICB0aGlzLnBhcmVudEVsZW1lbnQuZmluZChcIi50YWJsZS1ib2R5XCIpLm9uKFwic2Nyb2xsXCIsIChldmVudCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCB0Qm9keU9iaiA9IHRoaXMucGFyZW50RWxlbWVudC5maW5kKFwiLnRhYmxlLWJvZHlcIik7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmxlZnRPZmZzZXQgPT09IHVuZGVmaW5lZCB8fCB0aGlzLmxlZnRPZmZzZXQgPT09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMubGVmdE9mZnNldCA9IHRoaXMucGFyZW50RWxlbWVudC5maW5kKFwiLnRhYmxlLWhlYWRlclwiKS5vZmZzZXQoKS5sZWZ0O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMucGFyZW50RWxlbWVudC5maW5kKFwiLnRhYmxlLWhlYWRlclwiKS5vZmZzZXQoXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGVmdDogdGhpcy5sZWZ0T2Zmc2V0ICsgLTEgKiB0Qm9keU9iai5zY3JvbGxMZWZ0KCksXHJcbiAgICAgICAgICAgICAgICAgICAgdG9wOiAwLFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgY29uc3QgYWN0dWFsVGFibGVIZWlnaHQgPSB0Qm9keU9iai5maW5kKFwiLm1haW5UYWJsZVwiKS5oZWlnaHQoKTtcclxuICAgICAgICAgICAgY29uc3Qgc2Nyb2xsQ29udGFpbmVySGVpZ2h0ID0gdEJvZHlPYmouaGVpZ2h0KCk7XHJcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnJlbmRlcmluZykge1xyXG4gICAgICAgICAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY29uc3Qgc2Nyb2xsVG9wID0gdEJvZHlPYmouc2Nyb2xsVG9wKCk7XHJcbiAgICAgICAgICAgIGlmICgoc2Nyb2xsQ29udGFpbmVySGVpZ2h0ICsgc2Nyb2xsVG9wICkgLSAoYWN0dWFsVGFibGVIZWlnaHQgKiAwLjggKSA+IDAgKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoIHRoaXMuY3VycmVudEluZGV4ID49IHRoaXMuZ3JpZFRlbXBsYXRlU2VydmljZS5EYXRhTGVuZ3RoICkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHRoaXMucmVuZGVyaW5nID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGxldCBsYXN0SW5kZXggPSB0aGlzLmN1cnJlbnRJbmRleCArIHRoaXMuY29uZmlnU3RvcmUuT3B0aW9ucy5jaHVua1NpemU7XHJcbiAgICAgICAgICAgICAgICBpZiAoIGxhc3RJbmRleCA+IHRoaXMuZ3JpZFRlbXBsYXRlU2VydmljZS5EYXRhTGVuZ3RoICkge1xyXG4gICAgICAgICAgICAgICAgICAgIGxhc3RJbmRleCA9IHRoaXMuZ3JpZFRlbXBsYXRlU2VydmljZS5EYXRhTGVuZ3RoO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgY29uc3QgaHRtbCAgPSBqUXVlcnkodGhpcy5ncmlkVGVtcGxhdGVTZXJ2aWNlLmdldFRlbXBsYXRlKHRoaXMuY3VycmVudEluZGV4LCBsYXN0SW5kZXgpKTtcclxuICAgICAgICAgICAgICAgIHRCb2R5T2JqLmZpbmQoXCIubWFpblRhYmxlQm9keVwiKS5hcHBlbmQoaHRtbCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRJbmRleCA9IGxhc3RJbmRleCArIDE7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnJlbmRlcmluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgLy8gcHJpdmF0ZSBnZXQgVmlydHVhbGl6ZXIoKTogVmlydHVhbGl6ZXIge1xyXG4gICAgLy8gICAgIGlmICh0aGlzLnZpcnR1YWxpemVyID09PSBudWxsIHx8IHRoaXMudmlydHVhbGl6ZXIgPT09IHVuZGVmaW5lZCkge1xyXG4gICAgLy8gICAgICAgICByZXR1cm4gdGhpcy52aXJ0dWFsaXplciA9IG5ldyBWaXJ0dWFsaXplcih0aGlzLmNvbmZpZ1N0b3JlLm9wdGlvbnMuY2h1bmtTaXplLFxyXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAyNSwgdGhpcy5ncmlkVGVtcGxhdGVTZXJ2aWNlLkRhdGFMZW5ndGgpO1xyXG4gICAgLy8gICAgIH0gZWxzZSB7XHJcbiAgICAvLyAgICAgICAgIHJldHVybiB0aGlzLnZpcnR1YWxpemVyO1xyXG4gICAgLy8gICAgIH1cclxuICAgIC8vIH1cclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvdHNsaW50LWxvYWRlcj8/cmVmLS0xIS4vc3JjL2pzL2V2ZW50SGFuZGxlcnMvU2Nyb2xsSGFuZGxlci50cyIsImltcG9ydCB7IENvbmZpZ1N0b3JlIH0gZnJvbSBcIi4uL2NvbmZpZy9Db25maWdTdG9yZVwiO1xyXG5pbXBvcnQgeyBJQ29sdW1uIH0gZnJvbSBcIi4vLi4vbW9kZWxzL0lDb2x1bW5cIjtcclxuaW1wb3J0IHsgQ29tbW9uVXRpbCB9IGZyb20gXCIuLy4uL3V0aWwvQ29sdW1uVXRpbFwiO1xyXG5cclxuZW51bSBTaG93SGlkZSB7XHJcbiAgICBTaG93LFxyXG4gICAgSGlkZSxcclxuICAgIFNob3dBbGwsXHJcbiAgICBIaWRlQWxsLFxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgVG9nZ2xlQ29sdW1uSGFuZGxlcjxUPiB7XHJcbiAgICBwcml2YXRlIGNvbmZpZ1N0b3JlOiBDb25maWdTdG9yZTxUPjtcclxuICAgIHByaXZhdGUgcGFyZW50RWxlbWVudDogSlF1ZXJ5O1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKGNvbmZpZ1N0b3JlOiBDb25maWdTdG9yZTxUPiwgZWxlbWVudDogSlF1ZXJ5KSB7XHJcbiAgICAgICAgdGhpcy5jb25maWdTdG9yZSA9IGNvbmZpZ1N0b3JlO1xyXG4gICAgICAgIHRoaXMucGFyZW50RWxlbWVudCA9IGVsZW1lbnQ7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHNob3dBbGxDb2x1bW5zID0gKCk6IHZvaWQgPT4ge1xyXG4gICAgICAgIHRoaXMuU2V0Q29sV2lkdGgoXCIudGFibGUtaGVhZGVyIC5oZWFkZXJDb2xHcm91cCBjb2xcIiwgU2hvd0hpZGUuU2hvd0FsbCk7XHJcbiAgICAgICAgdGhpcy5TZXRDb2xXaWR0aChcIi50YWJsZS1ib2R5IC5ib2R5Q29sR3JvdXAgY29sXCIsIFNob3dIaWRlLlNob3dBbGwpO1xyXG4gICAgICAgIHRoaXMuY29uZmlnU3RvcmUuU2V0SGlkZGVuT25Db25maWcoZmFsc2UpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzaG93Q29sdW1uID0gKGNvbHVtbklkOiBzdHJpbmcpOiB2b2lkID0+IHtcclxuICAgICAgICB0aGlzLlNldENvbFdpZHRoKFwiLnRhYmxlLWhlYWRlciAuaGVhZGVyQ29sR3JvdXAgY29sXCIsIFNob3dIaWRlLlNob3csIGNvbHVtbklkKTtcclxuICAgICAgICB0aGlzLlNldENvbFdpZHRoKFwiLnRhYmxlLWJvZHkgLmJvZHlDb2xHcm91cCBjb2xcIiwgU2hvd0hpZGUuU2hvdywgY29sdW1uSWQpO1xyXG4gICAgICAgIHRoaXMuY29uZmlnU3RvcmUuU2V0SGlkZGVuT25Db25maWcoZmFsc2UsIGNvbHVtbklkKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgaGlkZUNvbHVtbiA9IChjb2x1bW5JZDogc3RyaW5nKTogdm9pZCA9PiB7XHJcbiAgICAgICAgdGhpcy5TZXRDb2xXaWR0aChcIi50YWJsZS1oZWFkZXIgLmhlYWRlckNvbEdyb3VwIGNvbFwiLCBTaG93SGlkZS5IaWRlLCBjb2x1bW5JZCk7XHJcbiAgICAgICAgdGhpcy5TZXRDb2xXaWR0aChcIi50YWJsZS1ib2R5IC5ib2R5Q29sR3JvdXAgY29sXCIsIFNob3dIaWRlLkhpZGUgLCBjb2x1bW5JZCk7XHJcbiAgICAgICAgdGhpcy5jb25maWdTdG9yZS5TZXRIaWRkZW5PbkNvbmZpZyh0cnVlLCBjb2x1bW5JZCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGhpZGVBbGxDb2x1bW5zID0gKCk6IHZvaWQgPT4ge1xyXG4gICAgICAgIHRoaXMuU2V0Q29sV2lkdGgoXCIudGFibGUtaGVhZGVyIC5oZWFkZXJDb2xHcm91cCBjb2xcIiwgU2hvd0hpZGUuSGlkZUFsbCk7XHJcbiAgICAgICAgdGhpcy5TZXRDb2xXaWR0aChcIi50YWJsZS1ib2R5IC5ib2R5Q29sR3JvdXAgY29sXCIsIFNob3dIaWRlLkhpZGVBbGwpO1xyXG4gICAgICAgIHRoaXMuY29uZmlnU3RvcmUuU2V0SGlkZGVuT25Db25maWcodHJ1ZSk7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgYXBwbHlDb2x1bW5Db25maWcgPSAoY29sdW1uczogSUNvbHVtbltdKSA9PiB7XHJcbiAgICAgICAgZm9yIChjb25zdCBjb2x1bW4gb2YgY29sdW1ucykge1xyXG4gICAgICAgICAgICBpZiAoY29sdW1uLmhpZGRlbikge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5oaWRlQ29sdW1uKGNvbHVtbi5pZCk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNob3dDb2x1bW4oY29sdW1uLmlkKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHByaXZhdGUgU2V0Q29sV2lkdGggPSAoc2VsZWN0b3I6IHN0cmluZywgY29udHJvbDogU2hvd0hpZGUsIGNvbHVtbklkPzogc3RyaW5nKTogdm9pZCA9PiB7XHJcbiAgICAgICAgdGhpcy5wYXJlbnRFbGVtZW50LmZpbmQoc2VsZWN0b3IpLmVhY2goKGluZGV4LCBlbGVtZW50KTogdm9pZCB8IGZhbHNlID0+IHtcclxuICAgICAgICAgICAgbGV0IHdpZHRoID0gMDtcclxuICAgICAgICAgICAgY29uc3QgY3VycmVudENvbEVsZW0gPSBqUXVlcnkoZWxlbWVudCk7XHJcbiAgICAgICAgICAgIGNvbnN0IGN1cnJlbnRDb2wgPSBjdXJyZW50Q29sRWxlbS5hdHRyKFwiZGF0YS1oZWFkZXItaWRcIik7XHJcbiAgICAgICAgICAgIGlmIChjdXJyZW50Q29sICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgIGxldCBjb2w6IElDb2x1bW47XHJcbiAgICAgICAgICAgICAgICBpZiAoW1Nob3dIaWRlLlNob3csIFNob3dIaWRlLkhpZGVdLmluZGV4T2YoY29udHJvbCkgPiAtMSApIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoY3VycmVudENvbCA9PT0gY29sdW1uSWQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGNvbnRyb2wgPT09IFNob3dIaWRlLlNob3cpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbCA9IENvbW1vblV0aWwuR2V0Q29sdW1uT2JqZWN0KGN1cnJlbnRDb2wsIHRoaXMuY29uZmlnU3RvcmUub3B0aW9ucy5jb2x1bW5zKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoID0gY29sLndpZHRoO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJlbnRDb2xFbGVtLndpZHRoKCB3aWR0aCArIFwicHhcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAoW1Nob3dIaWRlLlNob3dBbGwsIFNob3dIaWRlLkhpZGVBbGxdLmluZGV4T2YoY29udHJvbCkgPiAtMSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChjb250cm9sID09PSBTaG93SGlkZS5TaG93QWxsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbCA9IENvbW1vblV0aWwuR2V0Q29sdW1uT2JqZWN0KGN1cnJlbnRDb2wsIHRoaXMuY29uZmlnU3RvcmUub3B0aW9ucy5jb2x1bW5zKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGggPSBjb2wud2lkdGg7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGN1cnJlbnRDb2xFbGVtLndpZHRoKCB3aWR0aCArIFwicHhcIik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvdHNsaW50LWxvYWRlcj8/cmVmLS0xIS4vc3JjL2pzL2V2ZW50SGFuZGxlcnMvVG9nZ2xlQ29sdW1uSGFuZGxlci50cyIsImltcG9ydCAqIGFzIEhhbmRsZWJhcnMgZnJvbSBcImhhbmRsZWJhcnNcIjtcclxuaW1wb3J0ICogYXMgR3JpZERldGFpbHNSb3dUZW1wbGF0ZSBmcm9tIFwiLi4vLi4vaGJzL2dyaWQtZGV0YWlscy1yb3cuaGJzXCI7XHJcbmltcG9ydCAqIGFzIEdyaWRGb290ZXIgZnJvbSBcIi4uLy4uL2hicy9ncmlkLWZvb3Rlci5oYnNcIjtcclxuaW1wb3J0ICogYXMgR3JpZE1haW5Sb3dUZW1wbGF0ZSBmcm9tIFwiLi4vLi4vaGJzL2dyaWQtbWFpbi1yb3cuaGJzXCI7XHJcbmltcG9ydCAqIGFzIE1hbmFnZUNvbHVtblRlbXBsYXRlIGZyb20gXCIuLi8uLi9oYnMvZ3JpZC1tYW5hZ2UtY29sdW1ucy5oYnNcIjtcclxuaW1wb3J0ICogYXMgR3JpZFRlbXBsYXRlIGZyb20gXCIuLi8uLi9oYnMvZ3JpZC5oYnNcIjtcclxuaW1wb3J0IHsgQ29uZmlnU3RvcmUgfSBmcm9tIFwiLi4vY29uZmlnL0NvbmZpZ1N0b3JlXCI7XHJcbmltcG9ydCB7IElQYWdpbmF0aW9uIH0gZnJvbSBcIi4uL21vZGVscy9JUGFnaW5hdGlvblwiO1xyXG5pbXBvcnQgeyBQYWdlciB9IGZyb20gXCIuLi9wYWdpbmF0aW9uL1BhZ2VyXCI7XHJcbmltcG9ydCB7IElDb2x1bW4gfSBmcm9tIFwiLi8uLi9tb2RlbHMvSUNvbHVtblwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIEdyaWRUZW1wbGF0ZVNlcnZpY2UgPFQ+IHtcclxuICAgIHByaXZhdGUgZGF0YTogVFtdO1xyXG4gICAgcHJpdmF0ZSBjb25maWdTdG9yZTogQ29uZmlnU3RvcmU8VD47XHJcbiAgICBwcml2YXRlIHRlbXBsYXRlRnVuY3Rpb25Gb3JHcmlkOiBhbnk7XHJcbiAgICBwcml2YXRlIHRlbXBsYXRlRnVuY3Rpb25Gb3JNYWluUm93OiBhbnk7XHJcbiAgICBwcml2YXRlIHRlbXBsYXRlRnVuY3Rpb25Gb3JEZXRhaWxzUm93OiBhbnk7XHJcbiAgICBwcml2YXRlIHRlbXBsYXRlRnVuY3Rpb25Gb3JGb290ZXI6IGFueTtcclxuICAgIHByaXZhdGUgdGVtcGxhdGVGdW5jdGlvbkZvck1hbmFnZUNvbDogYW55O1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKGNvbmZpZ1N0b3JlOiBDb25maWdTdG9yZTxUPikge1xyXG4gICAgICAgIHRoaXMuY29uZmlnU3RvcmUgPSBjb25maWdTdG9yZTtcclxuICAgICAgICB0aGlzLnRlbXBsYXRlRnVuY3Rpb25Gb3JHcmlkID0gR3JpZFRlbXBsYXRlO1xyXG4gICAgICAgIHRoaXMudGVtcGxhdGVGdW5jdGlvbkZvck1haW5Sb3cgPSBHcmlkTWFpblJvd1RlbXBsYXRlO1xyXG4gICAgICAgIHRoaXMudGVtcGxhdGVGdW5jdGlvbkZvckRldGFpbHNSb3cgPSBHcmlkRGV0YWlsc1Jvd1RlbXBsYXRlO1xyXG4gICAgICAgIHRoaXMudGVtcGxhdGVGdW5jdGlvbkZvckZvb3RlciA9IEdyaWRGb290ZXI7XHJcbiAgICAgICAgdGhpcy50ZW1wbGF0ZUZ1bmN0aW9uRm9yTWFuYWdlQ29sID0gTWFuYWdlQ29sdW1uVGVtcGxhdGU7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgZ2V0IERhdGEoKTogVFtdIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5kYXRhO1xyXG4gICAgfVxyXG4gICAgcHVibGljIGdldCBEYXRhTGVuZ3RoKCk6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZGF0YS5sZW5ndGg7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgR2V0Rmlyc3RUZW1wbGF0ZSA9IChkYXRhOiBUW10sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaXJzdEluZGV4OiBudW1iZXIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYXN0SW5kZXg6IG51bWJlcik6IHN0cmluZyA9PiB7XHJcbiAgICAgICAgdGhpcy5kYXRhID0gZGF0YTtcclxuICAgICAgICBjb25zdCBtYWluUm93QXJyYXkgPSB0aGlzLkdldFJvd3NIdG1sKGZpcnN0SW5kZXgsIGxhc3RJbmRleCk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMudGVtcGxhdGVGdW5jdGlvbkZvckdyaWQoe1xyXG4gICAgICAgICAgICBjb2x1bW5zOiB0aGlzLmNvbmZpZ1N0b3JlLk9wdGlvbnMuY29sdW1ucyxcclxuICAgICAgICAgICAgbWFpblJvd0FycmF5LFxyXG4gICAgICAgICAgICBwYWdpbmF0aW9uRGF0YTogUGFnZXIuUGFnaW5hdGlvbkRhdGEsXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgZ2V0VGVtcGxhdGUgPSAoZmlyc3RJbmRleDogbnVtYmVyLCBsYXN0SW5kZXg6IG51bWJlcik6IHN0cmluZyA9PiB7XHJcbiAgICAgICAgY29uc3QgbWFpblJvd0FycmF5ID0gdGhpcy5HZXRSb3dzSHRtbChmaXJzdEluZGV4LCBsYXN0SW5kZXgpO1xyXG4gICAgICAgIHJldHVybiB0aGlzLnRlbXBsYXRlRnVuY3Rpb25Gb3JNYWluUm93KHtcclxuICAgICAgICAgICAgY29sdW1uczogdGhpcy5jb25maWdTdG9yZS5PcHRpb25zLmNvbHVtbnMsXHJcbiAgICAgICAgICAgIG1haW5Sb3dBcnJheSxcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIHB1YmxpYyBHZXRNYW5hZ2VDb2x1bW5zSHRtbCA9ICgpOiBzdHJpbmcgPT4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnRlbXBsYXRlRnVuY3Rpb25Gb3JNYW5hZ2VDb2woe2NvbHVtbnM6IHRoaXMuY29uZmlnU3RvcmUuT3B0aW9ucy5jb2x1bW5zfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIEdldFJvd3NIdG1sID0gKGZpcnN0SW5kZXg6IG51bWJlciwgbGFzdEluZGV4OiBudW1iZXIpOiBhbnlbXSA9PiB7XHJcbiAgICAgICAgY29uc3QgbWFpblJvd0FycmF5OiBhbnlbXSA9IFtdO1xyXG4gICAgICAgIGNvbnN0IGxlbmd0aCA9IHRoaXMuY29uZmlnU3RvcmUuT3B0aW9ucy5jb2x1bW5zLmxlbmd0aCArIDE7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IGZpcnN0SW5kZXg7IGkgPD0gbGFzdEluZGV4OyBpKyspIHtcclxuICAgICAgICAgICAgY29uc3Qgcm93OiBUID0gdGhpcy5kYXRhW2ldO1xyXG4gICAgICAgICAgICBjb25zdCBtYWluUm93Q29sQXJyYXk6IGFueVtdID0gW107XHJcbiAgICAgICAgICAgIGZvciAoY29uc3QgY29sIG9mIHRoaXMuY29uZmlnU3RvcmUuT3B0aW9ucy5jb2x1bW5zKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgY29sdW1uVmFsdWUgPSByb3dbY29sLmlkXTtcclxuICAgICAgICAgICAgICAgIGlmIChjb2wucmVuZGVySHlicmlkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sdW1uVmFsdWUgPSB0aGlzLmNvbmZpZ1N0b3JlLk9wdGlvbnMuaHlicmlkRnVuY3Rpb24oY29sLCByb3cpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgbWFpblJvd0NvbEFycmF5LnB1c2goe1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbHVtblZhbHVlLFxyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6IGNvbC50eXBlLFxyXG4gICAgICAgICAgICAgICAgICAgIGhpZGRlbjogY29sLmhpZGRlbixcclxuICAgICAgICAgICAgICAgICAgICBhY3R1YWxWYWx1ZTogcm93W2NvbC5pZF0sXHJcbiAgICAgICAgICAgICAgICAgICAgY29sdW1uTmFtZTogY29sLm5hbWUsXHJcbiAgICAgICAgICAgICAgICAgICAgaWQ6IGNvbC5pZCxcclxuICAgICAgICAgICAgICAgICAgICBmaWx0ZXJhYmxlOiBjb2wuZmlsdGVyYWJsZSxcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIG1haW5Sb3dBcnJheS5wdXNoKHtcclxuICAgICAgICAgICAgICAgIHJvd0RhdGE6IEpTT04uc3RyaW5naWZ5KHJvdyksXHJcbiAgICAgICAgICAgICAgICBrZXlDb2x1bW46IHJvd1t0aGlzLmNvbmZpZ1N0b3JlLk9wdGlvbnMua2V5Q29sdW1uXSxcclxuICAgICAgICAgICAgICAgIG1haW5Sb3dDb2xBcnJheSxcclxuICAgICAgICAgICAgICAgIGxlbmd0aDogdGhpcy5jb25maWdTdG9yZS5PcHRpb25zLmNvbHVtbnMubGVuZ3RoLFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG1haW5Sb3dBcnJheTtcclxuICAgIH1cclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvdHNsaW50LWxvYWRlcj8/cmVmLS0xIS4vc3JjL2pzL3NlcnZpY2VzL0dyaWRUZW1wbGF0ZVNlcnZpY2UudHMiLCJjb25zdCBzZWxlY3RlZCA9IChpbnB1dDogbnVtYmVyLCB2YWx1ZTogbnVtYmVyKTogc3RyaW5nID0+IHtcclxuICAgIHJldHVybiBpbnB1dCA9PT0gdmFsdWUgPyBcInNlbGVjdGVkXCIgOiBcIlwiO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgc2VsZWN0ZWQ7XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy90c2xpbnQtbG9hZGVyPz9yZWYtLTEhLi9zcmMvaGJzL2hlbHBlcnMvU2VsZWN0ZWQudHMiLCJ2YXIgSGFuZGxlYmFycyA9IHJlcXVpcmUoXCJoYW5kbGViYXJzXCIpO1xuZnVuY3Rpb24gX19kZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIChvYmouX19lc01vZHVsZSA/IG9ialtcImRlZmF1bHRcIl0gOiBvYmopOyB9XG5tb2R1bGUuZXhwb3J0cyA9IChIYW5kbGViYXJzW1wiZGVmYXVsdFwiXSB8fCBIYW5kbGViYXJzKS50ZW1wbGF0ZSh7XCIxXCI6ZnVuY3Rpb24oY29udGFpbmVyLGRlcHRoMCxoZWxwZXJzLHBhcnRpYWxzLGRhdGEpIHtcbiAgICB2YXIgYWxpYXMxPWNvbnRhaW5lci5sYW1iZGEsIGFsaWFzMj1jb250YWluZXIuZXNjYXBlRXhwcmVzc2lvbjtcblxuICByZXR1cm4gXCIgICAgICAgICAgICAgICAgPHRyIGRhdGEtaGVhZGVyLWlkPVxcXCJcIlxuICAgICsgYWxpYXMyKGFsaWFzMSgoZGVwdGgwICE9IG51bGwgPyBkZXB0aDAubmFtZSA6IGRlcHRoMCksIGRlcHRoMCkpXG4gICAgKyBcIlxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8dGQ+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cXFwiY2hlY2tib3hcXFwiIGNsYXNzPVxcXCJjb2wtc2V0dGluZ3MtaGlkZGVuLWNoZWNrYm94IGd1aSBtLXItMTBcXFwiIHZhbHVlPVxcXCJcIlxuICAgICsgYWxpYXMyKGFsaWFzMSgoZGVwdGgwICE9IG51bGwgPyBkZXB0aDAuaWQgOiBkZXB0aDApLCBkZXB0aDApKVxuICAgICsgXCJcXFwiIFwiXG4gICAgKyBhbGlhczIoX19kZWZhdWx0KHJlcXVpcmUoXCJDOlxcXFxVc2Vyc1xcXFxyb3VzdHVyZ1xcXFxTb3VyY2VcXFxcUmVwb3NcXFxcU2VhcmNoTWFzdGVyXFxcXEdyaWRvb1xcXFxzcmNcXFxcaGJzXFxcXGhlbHBlcnNcXFxcQ2hlY2tlZC50c1wiKSkuY2FsbChkZXB0aDAgIT0gbnVsbCA/IGRlcHRoMCA6IChjb250YWluZXIubnVsbENvbnRleHQgfHwge30pLChkZXB0aDAgIT0gbnVsbCA/IGRlcHRoMC5oaWRkZW4gOiBkZXB0aDApLHtcIm5hbWVcIjpcIkNoZWNrZWRcIixcImhhc2hcIjp7fSxcImRhdGFcIjpkYXRhfSkpXG4gICAgKyBcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcbiAgICArIGFsaWFzMihhbGlhczEoKGRlcHRoMCAhPSBudWxsID8gZGVwdGgwLm5hbWUgOiBkZXB0aDApLCBkZXB0aDApKVxuICAgICsgXCJcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPC90ZD5cXHJcXG4gICAgICAgICAgICAgICAgPC90cj5cXHJcXG5cIjtcbn0sXCJjb21waWxlclwiOls3LFwiPj0gNC4wLjBcIl0sXCJtYWluXCI6ZnVuY3Rpb24oY29udGFpbmVyLGRlcHRoMCxoZWxwZXJzLHBhcnRpYWxzLGRhdGEpIHtcbiAgICB2YXIgc3RhY2sxO1xuXG4gIHJldHVybiBcIjxkaXYgY2xhc3M9XFxcImd1aSBvZi1oaWRkZW4gcC0xMCBtaW4tdy01MCB3LWF1dG8gZmx1aWQtaCBmbGV4IGNvbHVtbiBjb250YWluZXJcXFwiID5cXHJcXG4gICAgPGRpdiBjbGFzcz1cXFwiY29sLXNldHRpbmdzLWhlYWRlclxcXCIgc3R5bGU9XFxcIndpZHRoOiAxMDAlXFxcIj5cXHJcXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcImd1aSBtaW5pIGZsdWlkIGljb24gaW5wdXRcXFwiPlxcclxcbiAgICAgICAgICAgIDxpbnB1dCBjbGFzcz1cXFwiY29sLXNldHRpbmdzLWZpbHRlclxcXCIgdHlwZT1cXFwidGV4dFxcXCIgcGxhY2Vob2xkZXI9XFxcIlNlYXJjaCBmaWx0ZXIuLi5cXFwiPlxcclxcbiAgICAgICAgICAgIDxpIGNsYXNzPVxcXCJzZWFyY2ggaWNvblxcXCI+PC9pPlxcclxcbiAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJndWkgbS10LTEwXFxcIj5cXHJcXG4gICAgICAgICAgICA8YSBjbGFzcz1cXFwiZ3VpIGxlZnQgc2hvdy1hbGwtY29sdW1uXFxcIj5TaG93IEFsbDwvYT5cXHJcXG4gICAgICAgICAgICA8YSBjbGFzcz1cXFwiZ3VpIHJpZ2h0IGhpZGUtYWxsLWNvbHVtblxcXCI+SGlkZSBBbGw8L2E+XFxyXFxuICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcImd1aSBjbGVhclxcXCI+PC9kaXY+XFxyXFxuICAgIDwvZGl2PlxcclxcbiAgICA8ZGl2IGNsYXNzPVxcXCJndWkgY2xlYXJcXFwiPjwvZGl2PlxcclxcbiAgICA8ZGl2IGNsYXNzPVxcXCJjb2wtc2V0dGluZ3MtdGFibGUgZ3VpIGZsdWlkIGgtOTAgb2YtYXV0byBwLTUgbS10LTEwXFxcIiA+XFxyXFxuICAgICAgICA8dGFibGUgY2xhc3M9XFxcImd1aSBzbWFsbCB2ZXJ5IGJvcmRlci1sZXNzIGJhc2ljIGNvbXBhY3QgdGFibGVcXFwiPlxcclxcbiAgICAgICAgICAgIDx0Ym9keT5cXHJcXG5cIlxuICAgICsgKChzdGFjazEgPSBoZWxwZXJzLmVhY2guY2FsbChkZXB0aDAgIT0gbnVsbCA/IGRlcHRoMCA6IChjb250YWluZXIubnVsbENvbnRleHQgfHwge30pLChkZXB0aDAgIT0gbnVsbCA/IGRlcHRoMC5jb2x1bW5zIDogZGVwdGgwKSx7XCJuYW1lXCI6XCJlYWNoXCIsXCJoYXNoXCI6e30sXCJmblwiOmNvbnRhaW5lci5wcm9ncmFtKDEsIGRhdGEsIDApLFwiaW52ZXJzZVwiOmNvbnRhaW5lci5ub29wLFwiZGF0YVwiOmRhdGF9KSkgIT0gbnVsbCA/IHN0YWNrMSA6IFwiXCIpXG4gICAgKyBcIiAgICAgICAgICAgIDwvdGJvZHk+XFxyXFxuICAgICAgICA8L3RhYmxlPlxcclxcbiAgICA8L2Rpdj5cXHJcXG48L2Rpdj5cIjtcbn0sXCJ1c2VEYXRhXCI6dHJ1ZX0pO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2hicy9ncmlkLW1hbmFnZS1jb2x1bW5zLmhic1xuLy8gbW9kdWxlIGlkID0gMjRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEiLCJjb25zdCBjaGVja2VkID0gKGJvb2w6IGJvb2xlYW4pOiBzdHJpbmcgPT4ge1xyXG4gICAgcmV0dXJuICFib29sID8gXCJjaGVja2VkXCIgOiBcIlwiO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2hlY2tlZDtcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL3RzbGludC1sb2FkZXI/P3JlZi0tMSEuL3NyYy9oYnMvaGVscGVycy9DaGVja2VkLnRzIiwidmFyIEhhbmRsZWJhcnMgPSByZXF1aXJlKFwiaGFuZGxlYmFyc1wiKTtcbmZ1bmN0aW9uIF9fZGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiAob2JqLl9fZXNNb2R1bGUgPyBvYmpbXCJkZWZhdWx0XCJdIDogb2JqKTsgfVxubW9kdWxlLmV4cG9ydHMgPSAoSGFuZGxlYmFyc1tcImRlZmF1bHRcIl0gfHwgSGFuZGxlYmFycykudGVtcGxhdGUoe1wiMVwiOmZ1bmN0aW9uKGNvbnRhaW5lcixkZXB0aDAsaGVscGVycyxwYXJ0aWFscyxkYXRhKSB7XG4gICAgdmFyIHN0YWNrMTtcblxuICByZXR1cm4gXCIgICAgICAgICAgICAgICAgICAgIFwiXG4gICAgKyAoKHN0YWNrMSA9IF9fZGVmYXVsdChyZXF1aXJlKFwiQzpcXFxcVXNlcnNcXFxccm91c3R1cmdcXFxcU291cmNlXFxcXFJlcG9zXFxcXFNlYXJjaE1hc3RlclxcXFxHcmlkb29cXFxcc3JjXFxcXGhic1xcXFxoZWxwZXJzXFxcXENvbHVtbi50c1wiKSkuY2FsbChkZXB0aDAgIT0gbnVsbCA/IGRlcHRoMCA6IChjb250YWluZXIubnVsbENvbnRleHQgfHwge30pLGRlcHRoMCx7XCJuYW1lXCI6XCJDb2x1bW5cIixcImhhc2hcIjp7fSxcImRhdGFcIjpkYXRhfSkpICE9IG51bGwgPyBzdGFjazEgOiBcIlwiKVxuICAgICsgXCJcXG5cIjtcbn0sXCIzXCI6ZnVuY3Rpb24oY29udGFpbmVyLGRlcHRoMCxoZWxwZXJzLHBhcnRpYWxzLGRhdGEpIHtcbiAgICB2YXIgc3RhY2sxLCBhbGlhczE9Y29udGFpbmVyLmxhbWJkYSwgYWxpYXMyPWNvbnRhaW5lci5lc2NhcGVFeHByZXNzaW9uO1xuXG4gIHJldHVybiBcIiAgICAgICAgICAgICAgICAgICAgICAgIDx0aCBjbGFzcz1cXFwiZ3VpIGN1cnNvci1wb2ludGVyXFxcIiBpZD1cXFwiaGVhZGVyLVwiXG4gICAgKyBhbGlhczIoYWxpYXMxKChkZXB0aDAgIT0gbnVsbCA/IGRlcHRoMC5pZCA6IGRlcHRoMCksIGRlcHRoMCkpXG4gICAgKyBcIlxcXCIgZGF0YS1oZWFkZXItaWQ9XFxcIlwiXG4gICAgKyBhbGlhczIoYWxpYXMxKChkZXB0aDAgIT0gbnVsbCA/IGRlcHRoMC5pZCA6IGRlcHRoMCksIGRlcHRoMCkpXG4gICAgKyBcIlxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVxcXCJndWkgc3ViIGhlYWRlclxcXCI+XCJcbiAgICArIGFsaWFzMihhbGlhczEoKGRlcHRoMCAhPSBudWxsID8gZGVwdGgwLm5hbWUgOiBkZXB0aDApLCBkZXB0aDApKVxuICAgICsgXCI8L3NwYW4+XFxuXCJcbiAgICArICgoc3RhY2sxID0gaGVscGVyc1tcImlmXCJdLmNhbGwoZGVwdGgwICE9IG51bGwgPyBkZXB0aDAgOiAoY29udGFpbmVyLm51bGxDb250ZXh0IHx8IHt9KSwoZGVwdGgwICE9IG51bGwgPyBkZXB0aDAuc29ydGFibGUgOiBkZXB0aDApLHtcIm5hbWVcIjpcImlmXCIsXCJoYXNoXCI6e30sXCJmblwiOmNvbnRhaW5lci5wcm9ncmFtKDQsIGRhdGEsIDApLFwiaW52ZXJzZVwiOmNvbnRhaW5lci5ub29wLFwiZGF0YVwiOmRhdGF9KSkgIT0gbnVsbCA/IHN0YWNrMSA6IFwiXCIpXG4gICAgKyBcIiAgICAgICAgICAgICAgICAgICAgICAgIDwvdGg+XFxuXCI7XG59LFwiNFwiOmZ1bmN0aW9uKGNvbnRhaW5lcixkZXB0aDAsaGVscGVycyxwYXJ0aWFscyxkYXRhKSB7XG4gICAgdmFyIHN0YWNrMTtcblxuICByZXR1cm4gXCIgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXG4gICAgKyAoKHN0YWNrMSA9IF9fZGVmYXVsdChyZXF1aXJlKFwiQzpcXFxcVXNlcnNcXFxccm91c3R1cmdcXFxcU291cmNlXFxcXFJlcG9zXFxcXFNlYXJjaE1hc3RlclxcXFxHcmlkb29cXFxcc3JjXFxcXGhic1xcXFxoZWxwZXJzXFxcXE9yZGVyZWQudHNcIikpLmNhbGwoZGVwdGgwICE9IG51bGwgPyBkZXB0aDAgOiAoY29udGFpbmVyLm51bGxDb250ZXh0IHx8IHt9KSwoZGVwdGgwICE9IG51bGwgPyBkZXB0aDAub3JkZXIgOiBkZXB0aDApLHtcIm5hbWVcIjpcIk9yZGVyZWRcIixcImhhc2hcIjp7fSxcImRhdGFcIjpkYXRhfSkpICE9IG51bGwgPyBzdGFjazEgOiBcIlwiKVxuICAgICsgXCJcXG5cIjtcbn0sXCJjb21waWxlclwiOls3LFwiPj0gNC4wLjBcIl0sXCJtYWluXCI6ZnVuY3Rpb24oY29udGFpbmVyLGRlcHRoMCxoZWxwZXJzLHBhcnRpYWxzLGRhdGEpIHtcbiAgICB2YXIgc3RhY2sxLCBhbGlhczE9ZGVwdGgwICE9IG51bGwgPyBkZXB0aDAgOiAoY29udGFpbmVyLm51bGxDb250ZXh0IHx8IHt9KTtcblxuICByZXR1cm4gXCI8c3R5bGU+XFxuICAgIC5pbm5lci1jb250YWluZXIge1xcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gICAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIH1cXG5cXG4gICAgLnRhYmxlLWhlYWRlciB7XFxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgICAgICB0b3A6MCAhaW1wb3J0YW50O1xcbiAgICB9XFxuXFxuICAgIC50YWJsZS1ib2R5IHtcXG4gICAgICAgIG92ZXJmbG93OiBhdXRvO1xcbiAgICAgICAgZmxleDogNTtcXG4gICAgfVxcbiAgICAudGFibGUtZm9vdGVye1xcbiAgICAgICAgaGVpZ2h0OiAzNXB4O1xcbiAgICAgICAgcGFkZGluZzogNXB4O1xcbiAgICB9XFxuICAgIC50YWJsZS1mb290ZXIgLmZvb3Rlci1taWRkbGV7XFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICB9XFxuICAgIC50YWJsZS1mb290ZXIgLmZvb3Rlci1yaWdodHtcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIH1cXG4gICAgLm1hcmdpbi1hdXRve1xcbiAgICAgICAgbWFyZ2luOiBhdXRvICFpbXBvcnRhbnQ7XFxuICAgIH1cXG4gICAgLnJlbW92ZS1sYWJlbDpob3ZlcntcXG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICB9XFxuICAgIC5ib3JkZXItbGVzcyB0ciB0ZCwuYm9yZGVyLWxlc3MgeyBib3JkZXI6IDBweCAhaW1wb3J0YW50OyB9XFxuICAgIC5jdXJzb3ItcG9pbnRlcntcXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgfVxcbiAgICAudWkuc3VwZXJjb21wYWN0Lmljb24uYnV0dG9uLCAudWkuc3VwZXJjb21wYWN0Lmljb24uYnV0dG9ucyAuYnV0dG9uIHtcXG4gICAgICAgIHBhZGRpbmc6IC4zZW0gLjNlbSAuM2VtIC4zZW0gIWltcG9ydGFudDtcXG4gICAgfVxcbjwvc3R5bGU+XFxuPGRpdiBjbGFzcz1cXFwiaW5uZXItY29udGFpbmVyIGd1aSBmbHVpZCBjb250YWluZXJcXFwiIHN0eWxlPVxcXCJwYWRkaW5nOjAlO1xcXCI+XFxuICAgIDxkaXYgY2xhc3M9XFxcInRhYmxlLWhlYWRlclxcXCI+XFxuICAgICAgICA8dGFibGUgaWQ9XFxcImhlYWRlcnRhYmxlXFxcIiBjbGFzcz1cXFwiZ3VpIGJhc2ljIGxhcmdlIGNvbXBhY3Qgc29ydGFibGUgZml4ZWQgc2luZ2xlIGxpbmUgdGFibGVcXFwiPlxcbiAgICAgICAgICAgIDxjb2xncm91cCBjbGFzcz1cXFwiaGVhZGVyQ29sR3JvdXBcXFwiPlxcbiAgICAgICAgICAgICAgICA8Y29sIHN0eWxlPVxcXCJ3aWR0aDo0MHB4O1xcXCIgLz5cXG4gICAgICAgICAgICAgICAgPGNvbCBzdHlsZT1cXFwid2lkdGg6NDBweDtcXFwiIC8+XFxuXCJcbiAgICArICgoc3RhY2sxID0gaGVscGVycy5lYWNoLmNhbGwoYWxpYXMxLChkZXB0aDAgIT0gbnVsbCA/IGRlcHRoMC5jb2x1bW5zIDogZGVwdGgwKSx7XCJuYW1lXCI6XCJlYWNoXCIsXCJoYXNoXCI6e30sXCJmblwiOmNvbnRhaW5lci5wcm9ncmFtKDEsIGRhdGEsIDApLFwiaW52ZXJzZVwiOmNvbnRhaW5lci5ub29wLFwiZGF0YVwiOmRhdGF9KSkgIT0gbnVsbCA/IHN0YWNrMSA6IFwiXCIpXG4gICAgKyBcIiAgICAgICAgICAgIDwvY29sZ3JvdXA+XFxuICAgICAgICAgICAgPHRoZWFkPlxcbiAgICAgICAgICAgICAgICA8dHI+XFxuICAgICAgICAgICAgICAgICAgICA8dGg+PC90aD5cXG4gICAgICAgICAgICAgICAgICAgIDx0aD48aW5wdXQgdHlwZT1cXFwiY2hlY2tib3hcXFwiIGNsYXNzPVxcXCJzZWxlY3QtYWxsLWNoZWNrYm94IGN1cnNvci1wb2ludGVyXFxcIj48L3RoPlxcblwiXG4gICAgKyAoKHN0YWNrMSA9IGhlbHBlcnMuZWFjaC5jYWxsKGFsaWFzMSwoZGVwdGgwICE9IG51bGwgPyBkZXB0aDAuY29sdW1ucyA6IGRlcHRoMCkse1wibmFtZVwiOlwiZWFjaFwiLFwiaGFzaFwiOnt9LFwiZm5cIjpjb250YWluZXIucHJvZ3JhbSgzLCBkYXRhLCAwKSxcImludmVyc2VcIjpjb250YWluZXIubm9vcCxcImRhdGFcIjpkYXRhfSkpICE9IG51bGwgPyBzdGFjazEgOiBcIlwiKVxuICAgICsgXCIgICAgICAgICAgICAgICAgPC90cj5cXG4gICAgICAgICAgICA8L3RoZWFkPlxcbiAgICAgICAgPC90YWJsZT5cXG4gICAgPC9kaXY+XFxuICAgIDxkaXYgY2xhc3M9XFxcInRhYmxlLWJvZHlcXFwiPlxcbiAgICAgICAgPHRhYmxlIGNsYXNzPVxcXCJndWkgYmFzaWMgbGFyZ2UgY29tcGFjdCBmaXhlZCBzZWxlY3RhYmxlIHNpbmdsZSBsaW5lIHRhYmxlIG1haW5UYWJsZVxcXCI+XFxuICAgICAgICAgICAgPGNvbGdyb3VwIGNsYXNzPVxcXCJib2R5Q29sR3JvdXBcXFwiPlxcbiAgICAgICAgICAgICAgICA8Y29sIHN0eWxlPVxcXCJ3aWR0aDo0MHB4O1xcXCIgLz4gXFxuICAgICAgICAgICAgICAgIDxjb2wgc3R5bGU9XFxcIndpZHRoOjQwcHg7XFxcIiAvPlxcblwiXG4gICAgKyAoKHN0YWNrMSA9IGhlbHBlcnMuZWFjaC5jYWxsKGFsaWFzMSwoZGVwdGgwICE9IG51bGwgPyBkZXB0aDAuY29sdW1ucyA6IGRlcHRoMCkse1wibmFtZVwiOlwiZWFjaFwiLFwiaGFzaFwiOnt9LFwiZm5cIjpjb250YWluZXIucHJvZ3JhbSgxLCBkYXRhLCAwKSxcImludmVyc2VcIjpjb250YWluZXIubm9vcCxcImRhdGFcIjpkYXRhfSkpICE9IG51bGwgPyBzdGFjazEgOiBcIlwiKVxuICAgICsgXCIgICAgICAgICAgICA8L2NvbGdyb3VwPlxcbiAgICAgICAgICAgIDx0Ym9keSBjbGFzcz1cXFwibWFpblRhYmxlQm9keVxcXCI+XFxuXCJcbiAgICArICgoc3RhY2sxID0gY29udGFpbmVyLmludm9rZVBhcnRpYWwocmVxdWlyZShcIkM6XFxcXFVzZXJzXFxcXHJvdXN0dXJnXFxcXFNvdXJjZVxcXFxSZXBvc1xcXFxTZWFyY2hNYXN0ZXJcXFxcR3JpZG9vXFxcXHNyY1xcXFxoYnNcXFxcZ3JpZC1tYWluLXJvdy5oYnNcIiksZGVwdGgwLHtcIm5hbWVcIjpcImdyaWQtbWFpbi1yb3dcIixcImRhdGFcIjpkYXRhLFwiaW5kZW50XCI6XCIgICAgICAgICAgICAgICAgXCIsXCJoZWxwZXJzXCI6aGVscGVycyxcInBhcnRpYWxzXCI6cGFydGlhbHMsXCJkZWNvcmF0b3JzXCI6Y29udGFpbmVyLmRlY29yYXRvcnN9KSkgIT0gbnVsbCA/IHN0YWNrMSA6IFwiXCIpXG4gICAgKyBcIiAgICAgICAgICAgIDwvdGJvZHk+XFxuICAgICAgICA8L3RhYmxlPlxcbiAgICA8L2Rpdj5cXG4gICAgPGRpdiBjbGFzcz1cXFwidGFibGUtZm9vdGVyIGd1aSBoLWF1dG8gZmx1aWQtdyBiYXNpYyBjdXJ2ZWQgcm93IHAtNSBtLTBcXFwiPlxcblwiXG4gICAgKyAoKHN0YWNrMSA9IGNvbnRhaW5lci5pbnZva2VQYXJ0aWFsKHJlcXVpcmUoXCJDOlxcXFxVc2Vyc1xcXFxyb3VzdHVyZ1xcXFxTb3VyY2VcXFxcUmVwb3NcXFxcU2VhcmNoTWFzdGVyXFxcXEdyaWRvb1xcXFxzcmNcXFxcaGJzXFxcXGdyaWQtZm9vdGVyLmhic1wiKSxkZXB0aDAse1wibmFtZVwiOlwiZ3JpZC1mb290ZXJcIixcImRhdGFcIjpkYXRhLFwiaW5kZW50XCI6XCIgICAgICAgICAgIFwiLFwiaGVscGVyc1wiOmhlbHBlcnMsXCJwYXJ0aWFsc1wiOnBhcnRpYWxzLFwiZGVjb3JhdG9yc1wiOmNvbnRhaW5lci5kZWNvcmF0b3JzfSkpICE9IG51bGwgPyBzdGFjazEgOiBcIlwiKVxuICAgICsgXCIgICAgPC9kaXY+XFxuPC9kaXY+XCI7XG59LFwidXNlUGFydGlhbFwiOnRydWUsXCJ1c2VEYXRhXCI6dHJ1ZX0pO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2hicy9ncmlkLmhic1xuLy8gbW9kdWxlIGlkID0gMjZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEiLCJjb25zdCBDb2x1bW4gPSAoY29sKTogc3RyaW5nID0+IHtcclxuICAgIGNvbnN0IGNhbGNXaWR0aDogbnVtYmVyID0gY29sLmhpZGRlbiA/IDAgOiBjb2wud2lkdGg7XHJcbiAgICBjb25zdCBkYXRhQXR0cklkID0gJ2RhdGEtaGVhZGVyLWlkPVwiJyArIGNvbC5pZCArICdcIic7XHJcbiAgICByZXR1cm4gJzxjb2wgc3R5bGU9XCJ3aWR0aCA6ICcgKyBjYWxjV2lkdGggKyAncHg7XCInICsgZGF0YUF0dHJJZCArIFwiIC8+XCI7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDb2x1bW47XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy90c2xpbnQtbG9hZGVyPz9yZWYtLTEhLi9zcmMvaGJzL2hlbHBlcnMvQ29sdW1uLnRzIiwiaW1wb3J0IHsgR3JpZE9yZGVyRGlyZWN0aW9uIH0gZnJvbSBcIi4uLy4uL2pzL21vZGVscy9HcmlkT3JkZXJEaXJlY3Rpb25cIjtcclxuXHJcbmNvbnN0IG9yZGVyZWQgPSAob3JkZXI6IEdyaWRPcmRlckRpcmVjdGlvbik6IHN0cmluZyA9PiB7XHJcbiAgICBpZiAob3JkZXIgPT09IEdyaWRPcmRlckRpcmVjdGlvbi5Bc2MpIHtcclxuICAgICAgICByZXR1cm4gXCI8aSBjbGFzcz1cXFwiZ3VpIGd1aS1pY29uIGd1aS1pY29uLWFycm93LXVwXFxcIiA+PC9pPiBcIjtcclxuICAgIH0gZWxzZSBpZiAob3JkZXIgPT09IEdyaWRPcmRlckRpcmVjdGlvbi5EZXNjKSB7XHJcbiAgICAgICAgcmV0dXJuIFwiPGkgY2xhc3M9XFxcImd1aSBndWktaWNvbiBndWktaWNvbi1hcnJvdy1kb3duXFxcIiA+PC9pPiBcIjtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgcmV0dXJuIFwiPGkgY2xhc3M9XFxcImd1aSBndWktaWNvbiBndWktaWNvbi1hcnJvdy11cCBndWktaGlkZGVuXFxcIiBhcmlhLWhpZGRlbj1cXFwidHJ1ZVxcXCIgPjwvaT4gXCIgK1xyXG4gICAgICAgICAgICAgICBcIjxpIGNsYXNzPVxcXCJndWkgZ3VpLWljb24gZ3VpLWljb24tYXJyb3ctZG93biBndWktaGlkZGVuXFxcIiBhcmlhLWhpZGRlbj1cXFwidHJ1ZVxcXCIgPjwvaT5cIjtcclxuICAgIH1cclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IG9yZGVyZWQ7XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy90c2xpbnQtbG9hZGVyPz9yZWYtLTEhLi9zcmMvaGJzL2hlbHBlcnMvT3JkZXJlZC50cyJdLCJzb3VyY2VSb290IjoiIn0=