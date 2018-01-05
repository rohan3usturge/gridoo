(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("jQuery"), require("Handlebars"));
	else if(typeof define === 'function' && define.amd)
		define(["jQuery", "Handlebars"], factory);
	else if(typeof exports === 'object')
		exports["Gridoo"] = factory(require("jQuery"), require("Handlebars"));
	else
		root["Gridoo"] = factory(root["jQuery"], root["Handlebars"]);
})(typeof self !== 'undefined' ? self : this, function(__WEBPACK_EXTERNAL_MODULE_3__, __WEBPACK_EXTERNAL_MODULE_19__) {
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
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
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
/* 1 */
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
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var ScrollDirection;
(function (ScrollDirection) {
    ScrollDirection["Up"] = "Up";
    ScrollDirection["Down"] = "Down";
})(ScrollDirection = exports.ScrollDirection || (exports.ScrollDirection = {}));


/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_3__;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var jQuery = __webpack_require__(3);
var ConfigStore_1 = __webpack_require__(5);
var ColSettingsHandler_1 = __webpack_require__(6);
var Pager_1 = __webpack_require__(0);
var DetailsRowHandler_1 = __webpack_require__(7);
var FilterClickHandler_1 = __webpack_require__(8);
var HandlerNames_1 = __webpack_require__(10);
var HeaderClickHandler_1 = __webpack_require__(11);
var PageSearchClickHandler_1 = __webpack_require__(13);
var ScrollHandler_1 = __webpack_require__(14);
var ToggleColumnHandler_1 = __webpack_require__(17);
var GridTemplateService_1 = __webpack_require__(18);
var Grid = /** @class */ (function () {
    function Grid(options) {
        var _this = this;
        this.showLoader = function () {
            jQuery(_this.configStore.Options.containerElement).find(".grid-loader").addClass("active");
        };
        this.hideLoader = function () {
            jQuery(_this.configStore.Options.containerElement).find(".grid-loader").remove("active");
        };
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
/* 5 */
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
/* 6 */
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
/* 7 */
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
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var ColumnUtil_1 = __webpack_require__(1);
var FilterActionType_1 = __webpack_require__(9);
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
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var FilterActionType;
(function (FilterActionType) {
    FilterActionType["Add"] = "Add";
    FilterActionType["Minus"] = "Minus";
})(FilterActionType = exports.FilterActionType || (exports.FilterActionType = {}));


/***/ }),
/* 10 */
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
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var ColumnUtil_1 = __webpack_require__(1);
var OrderDirection_1 = __webpack_require__(12);
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
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var OrderDirection;
(function (OrderDirection) {
    OrderDirection["Asc"] = "Asc";
    OrderDirection["Desc"] = "Desc";
})(OrderDirection = exports.OrderDirection || (exports.OrderDirection = {}));


/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var jQuery = __webpack_require__(3);
var Pager_1 = __webpack_require__(0);
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
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var ScrollDirection_1 = __webpack_require__(2);
var Virtualizer_1 = __webpack_require__(15);
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
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var IndexCounter_1 = __webpack_require__(16);
var ScrollDirection_1 = __webpack_require__(2);
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
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var ScrollDirection_1 = __webpack_require__(2);
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
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var ColumnUtil_1 = __webpack_require__(1);
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
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Handlebars = __webpack_require__(19);
var GridDetailsRowTemplate = __webpack_require__(20);
var GridFooter = __webpack_require__(21);
var GridMainRowTemplate = __webpack_require__(22);
var ManageColumnTemplate = __webpack_require__(23);
var GridTemplate = __webpack_require__(24);
var Pager_1 = __webpack_require__(0);
var GridTemplateService = /** @class */ (function () {
    function GridTemplateService(configStore) {
        var _this = this;
        this.GetFirstTemplate = function (data, firstIndex, lastIndex) {
            _this.data = data;
            var tBodyContent = _this.GetRowsHtml(firstIndex, lastIndex);
            var manageColumnHtml = _this.templateFunctionForManageCol(_this.configStore.Options.columns);
            var tableFooterContent = _this.templateFunctionForFooter({ paginationData: Pager_1.Pager.PaginationData,
                manageColumnHtml: manageColumnHtml });
            return _this.templateFunctionForGrid({
                columns: _this.configStore.Options.columns,
                tBodyContent: tBodyContent, tableFooterContent: tableFooterContent,
            });
        };
        this.GetRowsHtml = function (firstIndex, lastIndex) {
            var tBodyContent = "";
            var length = _this.configStore.Options.columns.length + 1;
            var _loop_1 = function (i) {
                var row = _this.data[i];
                var detailsArray = [];
                var mainArray = [];
                _this.configStore.Options.columns.forEach(function (col) {
                    var columnValue = row[col.id];
                    if (col.renderHybrid) {
                        columnValue = _this.configStore.Options.hybridFunction(col, row);
                    }
                    mainArray.push({ columnValue: columnValue, hidden: col.hidden });
                    detailsArray.push({
                        actualValue: row[col.id],
                        columnName: col.name,
                        columnValue: columnValue,
                        hidden: col.hidden,
                        id: col.id,
                        filterable: col.filterable,
                    });
                });
                var mainRowStr = _this.templateFunctionForMainRow(mainArray);
                tBodyContent += mainRowStr;
                var detailRowStr = _this.templateFunctionForDetailsRow({ length: length, detailsArray: detailsArray });
                tBodyContent += detailRowStr;
            };
            for (var i = firstIndex; i <= lastIndex; i++) {
                _loop_1(i);
            }
            return tBodyContent;
        };
        this.registerHandlerBarHelper = function () {
            Handlebars.registerHelper("col", function (col) {
                var calcWidth = col.hidden ? 0 : col.width;
                var dataAttrId = 'data-header-id="' + col.id + '"';
                return '<col style="width : ' + calcWidth + 'px;"' + dataAttrId + " />";
            });
        };
        this.registerDisabledHelper = function () {
            Handlebars.registerHelper("isDisabled", function (bool) {
                return bool ? "disabled" : "";
            });
        };
        this.registerSelectedHelper = function () {
            Handlebars.registerHelper("isSelected", function (input, value) {
                return input === value ? "selected" : "";
            });
        };
        this.registerMathHelper = function () {
            Handlebars.registerHelper("math", function (lvalue, operator, rvalue, options) {
                return {
                    "+": lvalue + rvalue,
                    "-": lvalue - rvalue,
                    "*": lvalue * rvalue,
                    "/": lvalue / rvalue,
                    "%": lvalue % rvalue,
                }[operator];
            });
        };
        this.registerCheckedHelper = function () {
            Handlebars.registerHelper("isChecked", function (bool) {
                return !bool ? "checked" : "";
            });
        };
        this.registerHandlerBarHelper();
        this.registerSelectedHelper();
        this.registerDisabledHelper();
        this.registerMathHelper();
        this.registerCheckedHelper();
        this.configStore = configStore;
        this.templateFunctionForGrid = Handlebars.compile(GridTemplate);
        this.templateFunctionForMainRow = Handlebars.compile(GridMainRowTemplate);
        this.templateFunctionForDetailsRow = Handlebars.compile(GridDetailsRowTemplate);
        this.templateFunctionForFooter = Handlebars.compile(GridFooter);
        this.templateFunctionForManageCol = Handlebars.compile(ManageColumnTemplate);
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
/* 19 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_19__;

/***/ }),
/* 20 */
/***/ (function(module, exports) {

module.exports = "<tr class=\"detailsRow\" style=\"display:none;\">\r\n    <td colspan=\"{{length}}\">\r\n        <table class=\"ui very compact selectable celled table detailsTable\" style=\"width: auto;\">\r\n            <tbody>\r\n                {{#each detailsArray}}\r\n                <tr>\r\n                    <td valign=\"top\" data-filter-key=\"{{id}}\" data-filter-value=\"{{actualValue}}\">\r\n                        <span>{{columnName}}</span>\r\n                        {{#if filterable}}\r\n                            <span class=\"ui mini basic icon very supercompact buttons top aligned\" style=\"margin-left: 5px;\">\r\n                                <button class=\"ui mini icon button expand-all\">\r\n                                    <i class=\"add icon addFilter\"></i>\r\n                                </button>\r\n                                <button class=\"ui mini icon button collapse-all\">\r\n                                    <i class=\"minus icon removeFilter\"></i>\r\n                                </button>\r\n                            </span>\r\n                        {{/if}}\r\n                    </td>\r\n                    <td>{{{columnValue}}}</td>\r\n                </tr>\r\n                {{/each}}\r\n            </tbody>\r\n        </table>\r\n    </td>\r\n</tr>\r\n";

/***/ }),
/* 21 */
/***/ (function(module, exports) {

module.exports = "<div class=\"footer-left\" style=\"display:absoulte;\">\r\n    <div class=\"ui mini compact icon buttons\">\r\n        <button class=\"ui mini compact icon button col-settings-trigger\" aria-label=\"Manage Grid Column Settings\"\r\n        title=\"Manage Grid Column Settings\" tabindex=\"1\">\r\n            <i class=\"columns icon\"></i>\r\n        </button>\r\n        <button class=\"ui mini compact icon button col-sorting-reset-trigger\" aria-label=\"Clear Sorting\"\r\n        title=\"Clear Sorting\" tabindex=\"2\">\r\n            <i class=\"unordered list icon\"></i>\r\n        </button>\r\n    </div>\r\n    <div class=\"column-settings-container\">{{{manageColumnHtml}}}</div>\r\n</div>\r\n<div data-role=\"pager\" class=\"footer-middle\">\r\n    <div class=\"margin-auto ui mini compact icon buttons\">\r\n        <button class=\"ui mini compact icon button firstLink\" aria-hidden=\"true\" {{isDisabled paginationData.firstPageLinkDisabled}} aria-label=\"Go to the first page\"\r\n            title=\"Go to the first page\" data-page=\"1\" tabindex=\"-1\">\r\n            <i class=\"fast backward icon\"></i>\r\n        </button>\r\n        <button class=\"ui mini compact icon button prevLink\" aria-hidden=\"true\" {{isDisabled paginationData.prevPageLinkDisabled}} aria-label=\"Go to the previous page\"\r\n            title=\"Go to the previous page\" data-page=\"{{math paginationData.pageIndex '-' 1}}\" tabindex=\"-1\">\r\n            <i class=\"backward icon\"></i>\r\n        </button>\r\n    </div>\r\n    <div class=\"margin-side-10 pager-input-container ui input\">\r\n        <span class=\"margin-auto\"> Page </span>\r\n        <input class=\"margin-side-10 pager-input\" aria-label=\"1\" value=\"{{paginationData.pageIndex}}\" type=\"text\" placeholder=\"Page Number ...\">\r\n        <span class=\"margin-auto no-of-pages-scan\" data-number-of-pages=\"{{paginationData.noOfPages}}\"> of {{paginationData.noOfPages}}</span>\r\n    </div>\r\n    <div class=\"margin-auto ui mini compact icon buttons\">\r\n        <button class=\"ui mini compact icon button nextLink\" aria-hidden=\"true\" {{isDisabled paginationData.nextPageLinkDisabled}} aria-label=\"Go to the next page\"\r\n            title=\"Go to the next page\" class=\"ui button\" data-page=\"{{math paginationData.pageIndex '+' 1}}\" tabindex=\"-1\">\r\n            <i class=\"forward icon\"></i>\r\n        </button>\r\n        <button class=\"ui mini compact icon button lastLink\" aria-hidden=\"true\" {{isDisabled paginationData.lastPageLinkDisabled}} aria-label=\"Go to the last page\"\r\n            title=\"Go to the last page\" data-page=\"{{paginationData.noOFpages}}\" tabindex=\"-1\">\r\n            <i class=\"fast forward icon\"></i>\r\n        </button>\r\n    </div>\r\n</div>\r\n<div class=\"footer-right\">\r\n    <select class=\"margin-side-10 pageSizeSelector\">\r\n        {{#each paginationData.pageSizes}}\r\n        <option {{isSelected ../paginationData.pageSize this}}>{{this}}</option>\r\n        {{/each}}\r\n    </select>\r\n    <span class=\"margin-auto\">{{paginationData.range.min}} - {{paginationData.range.max}} of {{paginationData.totalCount}} items</span>\r\n</div>";

/***/ }),
/* 22 */
/***/ (function(module, exports) {

module.exports = "<tr class=\"mainRow\">\r\n    <td class=\"expansionArrows\" style=\"display:flex;justify-content:center;\">\r\n        <button class=\"ui mini compact icon button\">\r\n            <i class=\"right triangle icon expandDetailsRowIcon\" aria-hidden=\"true\" style=\"cursor:pointer\"></i>\r\n            <i class=\"down triangle icon CollapseDetailsRowIcon\" aria-hidden=\"true\" style=\"cursor:pointer;display:none;\"></i>\r\n        </button>\r\n    </td>\r\n    <td>\r\n        <input type=\"checkbox\">\r\n    </td>\r\n    {{#each this}}\r\n    <td>{{{columnValue}}}</td>\r\n    {{/each}}\r\n</tr>";

/***/ }),
/* 23 */
/***/ (function(module, exports) {

module.exports = "<div class=\"ui grey card\" style=\"height: 100%;width: auto;padding: 0.8em;overflow:hidden;\">\r\n    <div class=\"col-settings-header\" style=\"width: 100%\">\r\n        <div class=\"ui mini fluid icon input\">\r\n            <input class=\"col-settings-filter\" type=\"text\" placeholder=\"Search filter...\">\r\n            <i class=\"search icon\"></i>\r\n        </div>\r\n        <div class=\"ui buttons\">\r\n            <button class=\"ui basic button show-all-column\">Show All</button>\r\n            <button class=\"ui basic button hide-all-column\">Hide All</button>\r\n        </div>\r\n    </div>\r\n    <div class=\"col-settings-table\" style=\"overflow:auto;padding:0.5em;\">\r\n        <table class=\"ui small very border-less compact table\">\r\n            <tbody>\r\n                {{#each this}}\r\n                <tr data-header-id=\"{{name}}\">\r\n                    <td>\r\n                        <input type=\"checkbox\" class=\"col-settings-hidden-checkbox\" value=\"{{id}}\" {{isChecked hidden}}>\r\n                    </td>\r\n                    <td>\r\n                        <label>{{name}}</label>\r\n                    </td>\r\n                </tr>\r\n                {{/each}}\r\n            </tbody>\r\n        </table>\r\n    </div>\r\n</div>";

/***/ }),
/* 24 */
/***/ (function(module, exports) {

module.exports = "<style>\n    .inner-container {\n        height: 100%;\n        overflow: hidden;\n        width: 100%;\n        display: flex;\n        flex-direction: column;\n    }\n\n    .table-header {\n        position: relative;\n        top:0 !important;\n    }\n\n    .table-body {\n        overflow: auto;\n        flex: 5;\n        padding-right: 17px;\n    }\n    .table-footer,.table-top{\n        display: flex;\n        height: 35px;\n        padding: 5px;\n        justify-content: space-between;\n        box-shadow: 0 1px 3px 0 #d4d4d5, 0 0 0 1px #d4d4d5;\n    }\n    .table-footer .footer-middle{\n        display: flex;\n    }\n    .table-footer .footer-right{\n        display: flex;\n    }\n    .margin-auto{\n        margin: auto !important;\n    }\n    .margin-side-10{\n        margin: 0px 10px 0px 10px !important;\n    }\n    /* .pager-input-container{\n        display: table-cell !important;\n    } */\n    .pager-input-container .pager-input{\n        width: 50px;\n    }\n    .column-settings-container{\n        position:absolute !important;\n        z-index:1000 !important;\n        bottom:35px !important;\n        left: 5px;\n        display:none;\n        box-shadow: 0 1px 3px 0 #d4d4d5, 0 0 0 1px #d4d4d5;\n    }\n    .remove-label:hover{\n        text-decoration: line-through;\n        cursor: pointer;\n    }\n    .border-less tr td,.border-less { border: 0px !important; }\n    .cursor-pointer{\n        cursor: pointer;\n    }\n    .ui.supercompact.icon.button, .ui.supercompact.icon.buttons .button {\n        padding: .3em .3em .3em .3em !important;\n    }\n</style>\n<div class=\"inner-container ui fluid card\" style=\"padding:0%;\">\n    <div class=\"ui inverted dimmer grid-loader\">\n        <div class=\"ui large text loader\">Seaching Resource Request...</div>\n    </div>\n    <div class=\"table-header\">\n        <table id=\"headertable\" class=\"ui fixed blue basic single line small table mainTable\">\n            <colgroup class=\"headerColGroup\">\n                <col style=\"width:40px;\" />\n                <col style=\"width:40px;\" />\n                {{#each columns}}\n                    {{#col this}}{{/col}} \n                {{/each}}\n            </colgroup>\n            <thead>\n                <tr>\n                    <th></th>\n                    <th></th>\n                    {{#each columns}}\n                        <th id=\"header-{{id}}\" data-header-id=\"{{id}}\">\n                            {{#if sortable}}\n                                <i class=\"long arrow up icon\" aria-hidden=\"true\" style=\"display:none;margin:0px;padding:0px;\"></i>                        \n                                <i class=\"long arrow down icon\" aria-hidden=\"true\" style=\"display:none;margin:0px;padding:0px;\"></i>\n                            {{/if}}\n                            <span class=\"ui sub header\">{{name}}</span>\n                        </th>\n                    {{/each}}\n                </tr>\n            </thead>\n        </table>\n    </div>\n    <div class=\"table-body\">\n        <table class=\"ui basic small compact fixed selectable single line table mainTable\">\n            <colgroup class=\"bodyColGroup\">\n                <col style=\"width:40px;\" /> \n                <col style=\"width:40px;\" />\n                {{#each columns}}\n                    {{#col this}}{{/col}} \n                {{/each}}\n            </colgroup>\n            <tbody class=\"mainTableBody\">\n                {{{tBodyContent}}}\n            </tbody>\n        </table>\n    </div>\n    <div class=\"table-footer ui inverted gray\">\n            {{{tableFooterContent}}}\n    </div>\n</div>";

/***/ })
/******/ ]);
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCBkMmRhYTM4YjdhMzEwNjQ3MmY2OSIsIndlYnBhY2s6Ly8vLi9zcmMvanMvcGFnaW5hdGlvbi9QYWdlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvdXRpbC9Db2x1bW5VdGlsLnRzIiwid2VicGFjazovLy8uL3NyYy9qcy92aXJ0dWFsaXphdGlvbi9TY3JvbGxEaXJlY3Rpb24udHMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwialF1ZXJ5XCIiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL21haW4vR3JpZC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvY29uZmlnL0NvbmZpZ1N0b3JlLnRzIiwid2VicGFjazovLy8uL3NyYy9qcy9ldmVudEhhbmRsZXJzL0NvbFNldHRpbmdzSGFuZGxlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvZXZlbnRIYW5kbGVycy9EZXRhaWxzUm93SGFuZGxlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvZXZlbnRIYW5kbGVycy9GaWx0ZXJDbGlja0hhbmRsZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL21vZGVscy9GaWx0ZXJBY3Rpb25UeXBlLnRzIiwid2VicGFjazovLy8uL3NyYy9qcy9ldmVudEhhbmRsZXJzL0hhbmRsZXJOYW1lcy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvZXZlbnRIYW5kbGVycy9IZWFkZXJDbGlja0hhbmRsZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL21vZGVscy9PcmRlckRpcmVjdGlvbi50cyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvZXZlbnRIYW5kbGVycy9QYWdlU2VhcmNoQ2xpY2tIYW5kbGVyLnRzIiwid2VicGFjazovLy8uL3NyYy9qcy9ldmVudEhhbmRsZXJzL1Njcm9sbEhhbmRsZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL3ZpcnR1YWxpemF0aW9uL1ZpcnR1YWxpemVyLnRzIiwid2VicGFjazovLy8uL3NyYy9qcy92aXJ0dWFsaXphdGlvbi9JbmRleENvdW50ZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2V2ZW50SGFuZGxlcnMvVG9nZ2xlQ29sdW1uSGFuZGxlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvc2VydmljZXMvR3JpZFRlbXBsYXRlU2VydmljZS50cyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJIYW5kbGViYXJzXCIiLCJ3ZWJwYWNrOi8vLy4vc3JjL2h0bWwvZ3JpZC1kZXRhaWxzLXJvdy5odG1sIiwid2VicGFjazovLy8uL3NyYy9odG1sL2dyaWQtZm9vdGVyLmh0bWwiLCJ3ZWJwYWNrOi8vLy4vc3JjL2h0bWwvZ3JpZC1tYWluLXJvdy5odG1sIiwid2VicGFjazovLy8uL3NyYy9odG1sL2dyaWQtbWFuYWdlLWNvbHVtbnMuaHRtbCIsIndlYnBhY2s6Ly8vLi9zcmMvaHRtbC9ncmlkLmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87QUNWQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7OztBQzFEQTtJQUFBO0lBZ0NBLENBQUM7SUFIRyxzQkFBa0IsdUJBQWM7YUFBaEM7WUFDSSxNQUFNLENBQUMsS0FBSyxDQUFDLGNBQWMsQ0FBQztRQUNoQyxDQUFDOzs7T0FBQTtJQTNCYSw2QkFBdUIsR0FBRyxVQUFDLGVBQWlDO1FBQ2xFLElBQU0sY0FBYyxHQUFRLEVBQUUsQ0FBQztRQUMvQixjQUFjLENBQUMsU0FBUyxHQUFHLGVBQWUsQ0FBQyxTQUFTLENBQUM7UUFDckQsY0FBYyxDQUFDLFFBQVEsR0FBRyxlQUFlLENBQUMsUUFBUSxDQUFDO1FBQ25ELGNBQWMsQ0FBQyxTQUFTLEdBQUcsZUFBZSxDQUFDLFNBQVMsQ0FBQztRQUNyRCxjQUFjLENBQUMsVUFBVSxHQUFHLGVBQWUsQ0FBQyxVQUFVLENBQUM7UUFDdkQsY0FBYyxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxVQUFVLEdBQUcsZUFBZSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQzVGLElBQU0sTUFBTSxHQUFHLENBQUMsQ0FBQyxlQUFlLENBQUMsU0FBUyxHQUFHLENBQUMsQ0FBQyxHQUFHLGVBQWUsQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUM1RSxJQUFNLGdCQUFnQixHQUFHLGVBQWUsQ0FBQyxRQUFRLEdBQUcsZUFBZSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1lBQ3ZELGVBQWUsQ0FBQyxVQUFVLENBQUMsQ0FBQztZQUM1QixlQUFlLENBQUMsUUFBUSxDQUFDO1FBQ2xELGNBQWMsQ0FBQyxLQUFLLEdBQUc7WUFDbkIsR0FBRyxFQUFHLE1BQU0sR0FBRyxDQUFDO1lBQ2hCLEdBQUcsRUFBRyxNQUFNLEdBQUcsZ0JBQWdCO1NBQ2xDLENBQUM7UUFDRixjQUFjLENBQUMscUJBQXFCLEdBQUcsY0FBYyxDQUFDLFNBQVMsS0FBSyxDQUFDLElBQUksY0FBYyxDQUFDLFNBQVMsS0FBSyxDQUFDLENBQUM7UUFDeEcsY0FBYyxDQUFDLG9CQUFvQixHQUFJLGNBQWMsQ0FBQyxTQUFTLEtBQUssQ0FBQztlQUMxQixDQUFDLGNBQWMsQ0FBQyxTQUFTLEtBQUssY0FBYyxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQ25HLGNBQWMsQ0FBQyxvQkFBb0IsR0FBSSxjQUFjLENBQUMsU0FBUyxLQUFLLENBQUM7ZUFDMUIsQ0FBQyxjQUFjLENBQUMsU0FBUyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUMvRSxjQUFjLENBQUMsb0JBQW9CLEdBQUksY0FBYyxDQUFDLFNBQVMsS0FBSyxjQUFjLENBQUMsU0FBUztlQUNqRCxDQUFDLGNBQWMsQ0FBQyxTQUFTLEdBQUcsQ0FBQyxDQUFDLElBQUksY0FBYyxDQUFDLFNBQVMsQ0FBQztRQUN0RyxLQUFLLENBQUMsY0FBYyxHQUFHLGNBQWMsQ0FBQztJQUM5QyxDQUFDO0lBS0wsWUFBQztDQUFBO0FBaENZLHNCQUFLOzs7Ozs7Ozs7O0FDRGxCO0lBQUE7SUFlQSxDQUFDO0lBYmlCLDBCQUFlLEdBQUcsVUFBQyxRQUFnQixFQUFFLE9BQWtCO1FBQ2pFLEVBQUUsQ0FBQyxDQUFDLFFBQVEsSUFBSSxJQUFJLElBQUksT0FBTyxJQUFJLElBQUksQ0FBQyxDQUFDLENBQUM7WUFDdEMsTUFBTSxDQUFDLElBQUksQ0FBQztRQUNoQixDQUFDO1FBQ0QsSUFBSSxNQUFlLENBQUM7UUFDcEIsT0FBTyxDQUFDLE9BQU8sQ0FBQyxVQUFDLEdBQVk7WUFDekIsRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLEVBQUUsS0FBSyxRQUFRLENBQUMsQ0FBQyxDQUFDO2dCQUN0QixNQUFNLEdBQUcsR0FBRyxDQUFDO2dCQUNiLE1BQU0sQ0FBQztZQUNYLENBQUM7UUFDTCxDQUFDLENBQUMsQ0FBQztRQUNILE1BQU0sQ0FBQyxNQUFNLENBQUM7SUFDbEIsQ0FBQztJQUNMLGlCQUFDO0NBQUE7QUFmWSxnQ0FBVTs7Ozs7Ozs7OztBQ0Z2QixJQUFZLGVBR1g7QUFIRCxXQUFZLGVBQWU7SUFDdkIsNEJBQVM7SUFDVCxnQ0FBYTtBQUNqQixDQUFDLEVBSFcsZUFBZSxHQUFmLHVCQUFlLEtBQWYsdUJBQWUsUUFHMUI7Ozs7Ozs7QUNIRCwrQzs7Ozs7Ozs7O0FDQUEsb0NBQWlDO0FBQ2pDLDJDQUFvRDtBQUNwRCxrREFBeUU7QUFHekUscUNBQTRDO0FBQzVDLGlEQUF5RTtBQUN6RSxrREFBMkU7QUFDM0UsNkNBQStEO0FBQy9ELG1EQUEyRTtBQUczRSx1REFBOEU7QUFDOUUsOENBQWlFO0FBQ2pFLG9EQUE2RTtBQUk3RSxvREFBd0U7QUFJeEU7SUFNSSxjQUFZLE9BQXdCO1FBQXBDLGlCQUlDO1FBRU0sZUFBVSxHQUFHO1lBQ2hCLE1BQU0sQ0FBQyxLQUFJLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDOUYsQ0FBQztRQUNNLGVBQVUsR0FBRztZQUNoQixNQUFNLENBQUMsS0FBSSxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQzVGLENBQUM7UUFDTSxhQUFRLEdBQUcsVUFBQyxJQUFTLEVBQUUsZUFBa0M7WUFDNUQsSUFBTSxVQUFVLEdBQUcsQ0FBQyxDQUFDO1lBQ3JCLElBQUksU0FBUyxHQUFHLEtBQUksQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLFNBQVMsR0FBRyxLQUFJLENBQUMsa0JBQWtCLEVBQUUsQ0FBQztZQUMvRSxTQUFTLEdBQUcsU0FBUyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUM7WUFDbEUsYUFBSyxDQUFDLHVCQUF1QixDQUFDLGVBQWUsQ0FBQyxDQUFDO1lBQy9DLElBQU0sV0FBVyxHQUFXLEtBQUksQ0FBQyxtQkFBbUIsQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLEVBQ0osVUFBVSxFQUNWLFNBQVMsQ0FBQyxDQUFDO1lBQ2pGLEtBQUksQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLGdCQUFnQixDQUFDLFNBQVMsR0FBRyxXQUFXLENBQUM7WUFDbEUseURBQXlEO1lBQ3pELElBQU0sYUFBYSxHQUFHLElBQUksNkJBQWEsQ0FBSSxLQUFJLENBQUMsV0FBVyxFQUFFLEtBQUksQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDO1lBQ3ZGLGFBQWEsQ0FBQyxrQkFBa0IsRUFBRSxDQUFDO1lBQ25DLEtBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDO2dCQUNsQixPQUFPLEVBQUUsYUFBYTtnQkFDdEIsSUFBSSxFQUFFLDJCQUFZLENBQUMsTUFBTTthQUM1QixDQUFDLENBQUM7UUFDUCxDQUFDO1FBRU8sdUJBQWtCLEdBQUc7WUFDekIsTUFBTSxDQUFDLEVBQUUsQ0FBQztRQUNkLENBQUM7UUFFTyxpQkFBWSxHQUFHO1lBQ25CLElBQU0sYUFBYSxHQUFHLE1BQU0sQ0FBQyxLQUFJLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO1lBQ3hFLEtBQUksQ0FBQyxXQUFXLEdBQUcsRUFBRSxDQUFDO1lBQ3RCLEtBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDO2dCQUNsQixPQUFPLEVBQUUsSUFBSSxxQ0FBaUIsQ0FBSSxhQUFhLENBQUM7Z0JBQ2hELElBQUksRUFBRSwyQkFBWSxDQUFDLFVBQVU7YUFDaEMsQ0FBQyxDQUFDO1lBQ0gsS0FBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUM7Z0JBQ2xCLE9BQU8sRUFBRyxJQUFJLHVDQUFrQixDQUFJLEtBQUksQ0FBQyxXQUFXLEVBQUUsYUFBYSxDQUFDO2dCQUNwRSxJQUFJLEVBQUUsMkJBQVksQ0FBQyxZQUFZO2FBQ2xDLENBQUMsQ0FBQztZQUNILEtBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDO2dCQUNsQixPQUFPLEVBQUUsSUFBSSx1Q0FBa0IsQ0FBSSxLQUFJLENBQUMsV0FBVyxFQUFFLGFBQWEsQ0FBQztnQkFDbkUsSUFBSSxFQUFFLDJCQUFZLENBQUMsV0FBVzthQUNqQyxDQUFDLENBQUM7WUFDSCxLQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQztnQkFDbEIsT0FBTyxFQUFFLElBQUksMENBQWlCLENBQUksS0FBSSxDQUFDLFdBQVcsRUFBRSxhQUFhLENBQUM7Z0JBQ2xFLElBQUksRUFBRSwyQkFBWSxDQUFDLFVBQVU7YUFDaEMsQ0FBQyxDQUFDO1lBQ0gsSUFBTSxhQUFhLEdBQUcsSUFBSSx5Q0FBbUIsQ0FBQyxLQUFJLENBQUMsV0FBVyxFQUFFLGFBQWEsQ0FBQyxDQUFDO1lBQy9FLEtBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDO2dCQUNsQixPQUFPLEVBQUUsSUFBSSx1Q0FBa0IsQ0FBSSxhQUFhLEVBQUUsYUFBYSxDQUFDO2dCQUNoRSxJQUFJLEVBQUUsMkJBQVksQ0FBQyxXQUFXO2FBQ2pDLENBQUMsQ0FBQztZQUNILEtBQUksQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLFVBQUMsS0FBdUI7Z0JBQzdDLEtBQUssQ0FBQyxPQUFPLENBQUMsa0JBQWtCLEVBQUUsQ0FBQztZQUN2QyxDQUFDLENBQUMsQ0FBQztZQUNILE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQyxNQUFNLENBQUM7Z0JBQ2xCLEtBQUksQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLFVBQUMsS0FBdUI7b0JBQzdDLEtBQUssQ0FBQyxPQUFPLENBQUMsUUFBUSxFQUFFLENBQUM7Z0JBQzdCLENBQUMsQ0FBQyxDQUFDO1lBQ1AsQ0FBQyxDQUFDLENBQUM7WUFDSCxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsS0FBSyxDQUFDLFVBQUMsS0FBSztnQkFDekIsS0FBSSxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsVUFBQyxLQUF1QjtvQkFDN0MsS0FBSyxDQUFDLE9BQU8sQ0FBQyxlQUFlLENBQUMsS0FBSyxDQUFDLENBQUM7Z0JBQ3pDLENBQUMsQ0FBQyxDQUFDO2dCQUNILEtBQUssQ0FBQyxlQUFlLEVBQUUsQ0FBQztZQUM1QixDQUFDLENBQUMsQ0FBQztRQUNQLENBQUM7UUF2RUcsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLHlCQUFXLENBQUksT0FBTyxDQUFDLENBQUM7UUFDL0MsSUFBSSxDQUFDLG1CQUFtQixHQUFHLElBQUkseUNBQW1CLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBQ3JFLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQUN4QixDQUFDO0lBcUVMLFdBQUM7QUFBRCxDQUFDO0FBL0VZLG9CQUFJOzs7Ozs7Ozs7O0FDakJqQjtJQW1CSSxxQkFBWSxPQUF3QjtRQUFwQyxpQkFLQztRQXRCTyx1QkFBa0IsR0FBb0I7WUFDMUMsU0FBUyxFQUFFLENBQUM7WUFDWixPQUFPLEVBQUUsRUFBRTtZQUNYLGdCQUFnQixFQUFFLElBQUk7WUFDdEIsY0FBYyxFQUFFLFVBQUMsTUFBZSxFQUFFLEdBQU07Z0JBQ3BDLE1BQU0sQ0FBQyxNQUFNLENBQUM7WUFDbEIsQ0FBQztZQUNELGFBQWEsRUFBRSxVQUFDLE1BQWMsRUFBRSxLQUFVLEVBQUUsVUFBNEI7Z0JBQ3BFLFVBQVU7WUFDZCxDQUFDO1lBQ0QsYUFBYSxFQUFFLFVBQUMsTUFBYyxFQUFFLFNBQXlCO2dCQUNyRCxVQUFVO1lBQ2QsQ0FBQztZQUNELFlBQVksRUFBRSxVQUFDLFFBQWdCLEVBQUUsU0FBaUI7Z0JBQzlDLFVBQVU7WUFDZCxDQUFDO1NBQ0osQ0FBQztRQWFLLHNCQUFpQixHQUFHLFVBQUMsSUFBYSxFQUFFLFFBQWlCO1lBQ3hELEtBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxVQUFDLEdBQVk7Z0JBQ3RDLEVBQUUsQ0FBQyxDQUFDLFFBQVEsS0FBSyxJQUFJLENBQUMsQ0FBQyxDQUFDO29CQUNwQixHQUFHLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztnQkFDdEIsQ0FBQztnQkFBQyxJQUFJLENBQUMsQ0FBQztvQkFDSixFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsRUFBRSxLQUFLLFFBQVEsQ0FBQyxDQUFDLENBQUM7d0JBQ3RCLEdBQUcsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO3dCQUNsQixNQUFNLENBQUMsS0FBSyxDQUFDO29CQUNqQixDQUFDO2dCQUNMLENBQUM7WUFDTCxDQUFDLENBQUMsQ0FBQztRQUNQLENBQUM7UUFDTyxrQkFBYSxHQUFHLFVBQUMsWUFBNkI7WUFDbEQsTUFBTSxDQUFDLEtBQUksQ0FBQyxPQUFPLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxFQUFFLEVBQUUsS0FBSSxDQUFDLGtCQUFrQixFQUFFLFlBQVksQ0FBQyxDQUFDO1FBQ25GLENBQUM7UUF6QkcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUM1QixFQUFFLENBQUMsQ0FBQyxPQUFPLENBQUMsZ0JBQWdCLEtBQUssSUFBSSxDQUFDLENBQUMsQ0FBQztZQUNwQyxNQUFNLElBQUksS0FBSyxDQUFDLGlEQUFpRCxDQUFDLENBQUM7UUFDdkUsQ0FBQztJQUNMLENBQUM7SUFDRCxzQkFBVyxnQ0FBTzthQUdsQjtZQUNJLE1BQU0sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDO1FBQ3hCLENBQUM7YUFMRCxVQUFtQixPQUF3QjtZQUN2QyxJQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztRQUMzQixDQUFDOzs7T0FBQTtJQW1CTCxrQkFBQztBQUFELENBQUM7QUE5Q1ksa0NBQVc7Ozs7Ozs7Ozs7QUNEeEI7SUFJSSw0QkFBWSxPQUFlLEVBQUUsbUJBQTJDO1FBQ3BFLElBQUksQ0FBQyxhQUFhLEdBQUcsT0FBTyxDQUFDO1FBQzdCLElBQUksQ0FBQyxtQkFBbUIsR0FBRyxtQkFBbUIsQ0FBQztJQUNuRCxDQUFDO0lBQ00scUNBQVEsR0FBZjtRQUNJLElBQU0sWUFBWSxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLDRCQUE0QixDQUFDLENBQUM7UUFDM0UsSUFBTSxXQUFXLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDekUsWUFBWSxDQUFDLFdBQVcsQ0FBQyxXQUFXLEdBQUcsRUFBRSxDQUFDLENBQUM7UUFDM0MsWUFBWSxDQUFDLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxZQUFZLENBQUMsV0FBVyxFQUFFO1lBQ3ZELFlBQVksQ0FBQyxJQUFJLENBQUMsc0JBQXNCLENBQUMsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxDQUFDO0lBQ3JGLENBQUM7SUFFTSw0Q0FBZSxHQUF0QixVQUF1QixLQUFLO1FBQ3hCLElBQU0sYUFBYSxHQUFHLE1BQU0sQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDM0MsRUFBRSxDQUFDLENBQUMsYUFBYSxDQUFDLEVBQUUsQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUM1QyxNQUFNLENBQUM7UUFDWCxDQUFDO1FBQ0QsRUFBRSxDQUFDLENBQUMsQ0FBQyxhQUFhLENBQUMsT0FBTyxFQUFFLENBQUMsRUFBRSxDQUFDLDRCQUE0QixDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQzVELE1BQU0sQ0FBQyw0QkFBNEIsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDO1FBQ2hELENBQUM7SUFDTCxDQUFDO0lBQ00sK0NBQWtCLEdBQXpCO1FBQUEsaUJBaURDO1FBaERHLElBQUksQ0FBQyxhQUFhLENBQUMsRUFBRSxDQUFDLE9BQU8sRUFBRSxrREFBa0QsRUFBRSxVQUFDLEtBQUs7WUFDckYsSUFBTSxPQUFPLEdBQUcsTUFBTSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUNyQyxJQUFNLFlBQVksR0FBRyxPQUFPLENBQUMsT0FBTyxDQUFDLGNBQWMsQ0FBQyxDQUFDLFFBQVEsRUFBRSxDQUFDLElBQUksRUFBRSxDQUFDO1lBQ3ZFLEtBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztZQUNoQixZQUFZLENBQUMsTUFBTSxFQUFFLENBQUM7WUFDdEIsS0FBSyxDQUFDLGVBQWUsRUFBRSxDQUFDO1FBQzVCLENBQUMsQ0FBQyxDQUFDO1FBQ0gsSUFBSSxDQUFDLGFBQWEsQ0FBQyxFQUFFLENBQUMsT0FBTyxFQUFFLHNFQUFzRSxFQUNqRyxVQUFDLEtBQUs7WUFDRixJQUFNLE9BQU8sR0FBRyxNQUFNLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQ3JDLElBQU0sR0FBRyxHQUFHLE9BQU8sQ0FBQyxHQUFHLEVBQUUsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxXQUFXLEVBQUUsQ0FBQztZQUNuRCxPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQ2pCLEtBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLG9DQUFvQyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQUMsQ0FBUyxFQUFFLENBQUM7Z0JBQzVFLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQztnQkFDakIsRUFBRSxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLFdBQVcsRUFBRSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUUsQ0FBQyxDQUFDLENBQUM7b0JBQ3RFLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQztnQkFDckIsQ0FBQztZQUNMLENBQUMsQ0FBQyxDQUFDO1lBQ0gsS0FBSyxDQUFDLGVBQWUsRUFBRSxDQUFDO1FBQ2hDLENBQUMsQ0FBQyxDQUFDO1FBQ0gsSUFBSSxDQUFDLGFBQWEsQ0FBQyxFQUFFLENBQUMsT0FBTyxFQUFFLDZDQUE2QyxFQUFFLFVBQUMsS0FBSztZQUNoRixLQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQywwREFBMEQsQ0FBQztpQkFDbEYsSUFBSSxDQUFDLFVBQUMsS0FBSyxFQUFFLE9BQU87Z0JBQ2pCLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxDQUFDO1lBQzFDLENBQUMsQ0FBQyxDQUFDO1lBQ0gsS0FBSSxDQUFDLG1CQUFtQixDQUFDLGNBQWMsRUFBRSxDQUFDO1lBQzFDLEtBQUssQ0FBQyxlQUFlLEVBQUUsQ0FBQztRQUM1QixDQUFDLENBQUMsQ0FBQztRQUNILElBQUksQ0FBQyxhQUFhLENBQUMsRUFBRSxDQUFDLE9BQU8sRUFBRSw2Q0FBNkMsRUFBRSxVQUFDLEtBQUs7WUFDaEYsS0FBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsMERBQTBELENBQUM7aUJBQ2xGLElBQUksQ0FBQyxVQUFDLEtBQUssRUFBRSxPQUFPO2dCQUNqQixNQUFNLENBQUMsT0FBTyxDQUFDLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxLQUFLLENBQUMsQ0FBQztZQUMzQyxDQUFDLENBQUMsQ0FBQztZQUNILEtBQUksQ0FBQyxtQkFBbUIsQ0FBQyxjQUFjLEVBQUUsQ0FBQztZQUMxQyxLQUFLLENBQUMsZUFBZSxFQUFFLENBQUM7UUFDNUIsQ0FBQyxDQUFDLENBQUM7UUFDSCxJQUFJLENBQUMsYUFBYSxDQUFDLEVBQUUsQ0FBQyxPQUFPLEVBQUUsMERBQTBELEVBQUUsVUFBQyxLQUFLO1lBQzdGLEVBQUUsQ0FBQyxDQUFDLEtBQUssQ0FBQyxhQUFhLEtBQUssU0FBUyxDQUFDLENBQUMsQ0FBQztnQkFDcEMsSUFBTSxRQUFRLEdBQUcsTUFBTSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQztnQkFDdEMsSUFBTSxFQUFFLEdBQUcsUUFBUSxDQUFDLEdBQUcsRUFBRSxDQUFDLFFBQVEsRUFBRSxDQUFDO2dCQUNyQyxFQUFFLENBQUMsQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQztvQkFDMUIsS0FBSSxDQUFDLG1CQUFtQixDQUFDLFVBQVUsQ0FBQyxFQUFFLENBQUMsQ0FBQztnQkFDNUMsQ0FBQztnQkFBQyxJQUFJLENBQUMsQ0FBQztvQkFDSixLQUFJLENBQUMsbUJBQW1CLENBQUMsVUFBVSxDQUFDLEVBQUUsQ0FBQyxDQUFDO2dCQUM1QyxDQUFDO1lBQ0wsQ0FBQztZQUNELEtBQUssQ0FBQyxlQUFlLEVBQUUsQ0FBQztRQUM1QixDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFFTCx5QkFBQztBQUFELENBQUM7QUE1RVksZ0RBQWtCOzs7Ozs7Ozs7O0FDSC9CO0lBR0ksMkJBQVksT0FBZTtRQUEzQixpQkFFQztRQVFNLHVCQUFrQixHQUFHO1lBQ3hCLEtBQUksQ0FBQyxhQUFhLENBQUMsRUFBRSxDQUFDLE9BQU8sRUFBRSxnQ0FBZ0MsRUFBRSxVQUFDLEtBQUs7Z0JBQ25FLElBQU0sS0FBSyxHQUFHLE1BQU0sQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUM7Z0JBQ25DLElBQU0sVUFBVSxHQUFHLEtBQUssQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUM7Z0JBQzlDLElBQU0sV0FBVyxHQUFHLEtBQUssQ0FBQyxJQUFJLEVBQUUsQ0FBQztnQkFDakMsSUFBTSxTQUFTLEdBQUcsS0FBSyxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQztnQkFDN0MsRUFBRSxDQUFDLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDLENBQUMsQ0FBQztvQkFDekMsVUFBVSxDQUFDLElBQUksRUFBRSxDQUFDO2dCQUN0QixDQUFDO2dCQUFDLElBQUksQ0FBQyxDQUFDO29CQUNKLFVBQVUsQ0FBQyxJQUFJLEVBQUUsQ0FBQztnQkFDdEIsQ0FBQztnQkFDRCxLQUFLLENBQUMsZUFBZSxFQUFFLENBQUM7WUFDNUIsQ0FBQyxDQUFDLENBQUM7UUFDUCxDQUFDO1FBdEJHLElBQUksQ0FBQyxhQUFhLEdBQUcsT0FBTyxDQUFDO0lBQ2pDLENBQUM7SUFDTSxvQ0FBUSxHQUFmO1FBQ0ksaUJBQWlCO0lBQ3JCLENBQUM7SUFFTSwyQ0FBZSxHQUF0QixVQUF1QixLQUFLO1FBQ3hCLGlCQUFpQjtJQUNyQixDQUFDO0lBZUwsd0JBQUM7QUFBRCxDQUFDO0FBM0JZLDhDQUFpQjs7Ozs7Ozs7OztBQ0M5QiwwQ0FBZ0Q7QUFDaEQsZ0RBQWdFO0FBSWhFO0lBSUksNEJBQVksV0FBMkIsRUFBRSxPQUFlO1FBQXhELGlCQUdDO1FBUU0sdUJBQWtCLEdBQUc7WUFDeEIsS0FBSSxDQUFDLGFBQWEsQ0FBQyxFQUFFLENBQUMsT0FBTyxFQUFFLDRDQUE0QyxFQUFFLFVBQUMsS0FBSztnQkFDL0UsSUFBTSxPQUFPLEdBQUcsTUFBTSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQztnQkFDckMsSUFBTSxRQUFRLEdBQUcsT0FBTyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztnQkFDdkMsSUFBTSxHQUFHLEdBQUcsUUFBUSxDQUFDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO2dCQUM3QyxJQUFNLEtBQUssR0FBRyxRQUFRLENBQUMsSUFBSSxDQUFDLG1CQUFtQixDQUFDLENBQUM7Z0JBQ2pELElBQU0sR0FBRyxHQUFHLHVCQUFVLENBQUMsZUFBZSxDQUFDLEdBQUcsRUFBRSxLQUFJLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQztnQkFDOUUsRUFBRSxDQUFDLENBQUMsR0FBRyxLQUFLLFNBQVMsSUFBSSxHQUFHLEtBQUssSUFBSSxJQUFJLENBQUMsR0FBRyxDQUFDLFVBQVcsQ0FBQyxDQUFDLENBQUM7b0JBQ3hELE1BQU0sQ0FBQztnQkFDWCxDQUFDO2dCQUNELElBQUksWUFBWSxHQUFxQixtQ0FBZ0IsQ0FBQyxHQUFHLENBQUM7Z0JBQzFELEVBQUUsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQyxDQUFDO29CQUNuQyxZQUFZLEdBQUcsbUNBQWdCLENBQUMsS0FBSyxDQUFDO2dCQUMxQyxDQUFDO2dCQUNELEtBQUksQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxHQUFHLEVBQUUsS0FBSyxFQUFFLFlBQVksQ0FBQyxDQUFDO2dCQUNqRSxLQUFLLENBQUMsZUFBZSxFQUFFLENBQUM7WUFDNUIsQ0FBQyxDQUFDLENBQUM7UUFDUCxDQUFDO1FBM0JHLElBQUksQ0FBQyxXQUFXLEdBQUcsV0FBVyxDQUFDO1FBQy9CLElBQUksQ0FBQyxhQUFhLEdBQUcsT0FBTyxDQUFDO0lBQ2pDLENBQUM7SUFDTSxxQ0FBUSxHQUFmO1FBQ0ksaUJBQWlCO0lBQ3JCLENBQUM7SUFFTSw0Q0FBZSxHQUF0QixVQUF1QixLQUFLO1FBQ3hCLGlCQUFpQjtJQUNyQixDQUFDO0lBbUJMLHlCQUFDO0FBQUQsQ0FBQztBQWpDWSxnREFBa0I7Ozs7Ozs7Ozs7QUNQL0IsSUFBWSxnQkFHWDtBQUhELFdBQVksZ0JBQWdCO0lBQ3hCLCtCQUFXO0lBQ1gsbUNBQWU7QUFDbkIsQ0FBQyxFQUhXLGdCQUFnQixHQUFoQix3QkFBZ0IsS0FBaEIsd0JBQWdCLFFBRzNCOzs7Ozs7Ozs7O0FDSEQsSUFBWSxZQVFYO0FBUkQsV0FBWSxZQUFZO0lBQ3BCLCtEQUFZO0lBQ1osNkRBQVc7SUFDWCxtREFBTTtJQUNOLDJEQUFVO0lBQ1YsMkRBQVU7SUFDViwrREFBWTtJQUNaLDZEQUFXO0FBQ2YsQ0FBQyxFQVJXLFlBQVksR0FBWixvQkFBWSxLQUFaLG9CQUFZLFFBUXZCOzs7Ozs7Ozs7O0FDTkQsMENBQWdEO0FBRWhELCtDQUE0RDtBQUc1RDtJQUlJLDRCQUFZLFdBQTJCLEVBQUUsT0FBZTtRQUF4RCxpQkFHQztRQVVNLHVCQUFrQixHQUFHO1lBQ3hCLHlEQUF5RDtZQUN6RCxLQUFJLENBQUMsYUFBYSxDQUFDLEVBQUUsQ0FBQyxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsVUFBQyxLQUFLO2dCQUNyRCxJQUFNLE9BQU8sR0FBRyxNQUFNLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztnQkFDbkQsSUFBTSxRQUFRLEdBQUcsT0FBTyxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO2dCQUNoRCxJQUFNLEdBQUcsR0FBRyx1QkFBVSxDQUFDLGVBQWUsQ0FBQyxRQUFRLEVBQUUsS0FBSSxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUM7Z0JBQ25GLEVBQUUsQ0FBQyxDQUFDLEdBQUcsS0FBSyxTQUFTLElBQUksR0FBRyxLQUFLLElBQUksSUFBSSxDQUFDLEdBQUcsQ0FBQyxRQUFTLENBQUMsQ0FBQyxDQUFDO29CQUN0RCxNQUFNLENBQUM7Z0JBQ1gsQ0FBQztnQkFDRCxJQUFNLFVBQVUsR0FBRyxPQUFPLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO2dCQUNyQyxJQUFNLFdBQVcsR0FBRyxVQUFVLENBQUMsS0FBSyxFQUFFLENBQUM7Z0JBQ3ZDLElBQU0sYUFBYSxHQUFHLFVBQVUsQ0FBQyxJQUFJLEVBQUUsQ0FBQztnQkFDeEMsSUFBSSxTQUF5QixDQUFDO2dCQUM5QixFQUFFLENBQUMsQ0FBQyxVQUFVLENBQUMsRUFBRSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQztvQkFDNUIsRUFBRSxDQUFDLENBQUMsV0FBVyxDQUFDLEVBQUUsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUM7d0JBQzdCLFNBQVMsR0FBRywrQkFBYyxDQUFDLElBQUksQ0FBQzt3QkFDaEMsV0FBVyxDQUFDLElBQUksRUFBRSxDQUFDO3dCQUNuQixhQUFhLENBQUMsSUFBSSxFQUFFLENBQUM7b0JBQ3pCLENBQUM7b0JBQUMsSUFBSSxDQUFDLENBQUM7d0JBQ0osU0FBUyxHQUFHLCtCQUFjLENBQUMsR0FBRyxDQUFDO3dCQUMvQixhQUFhLENBQUMsSUFBSSxFQUFFLENBQUM7d0JBQ3JCLFdBQVcsQ0FBQyxJQUFJLEVBQUUsQ0FBQztvQkFDdkIsQ0FBQztnQkFDTCxDQUFDO2dCQUFDLElBQUksQ0FBQyxDQUFDO29CQUNKLFNBQVMsR0FBRywrQkFBYyxDQUFDLEdBQUcsQ0FBQztvQkFDL0IsV0FBVyxDQUFDLElBQUksRUFBRSxDQUFDO2dCQUN2QixDQUFDO2dCQUNELEtBQUksQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxRQUFRLEVBQUUsU0FBUyxDQUFDLENBQUM7Z0JBQzVELEtBQUssQ0FBQyxlQUFlLEVBQUUsQ0FBQztZQUM1QixDQUFDLENBQUMsQ0FBQztRQUNQLENBQUM7UUExQ0csSUFBSSxDQUFDLFdBQVcsR0FBRyxXQUFXLENBQUM7UUFDL0IsSUFBSSxDQUFDLGFBQWEsR0FBRyxPQUFPLENBQUM7SUFDakMsQ0FBQztJQUVNLHFDQUFRLEdBQWY7UUFDSSxpQkFBaUI7SUFDckIsQ0FBQztJQUVNLDRDQUFlLEdBQXRCLFVBQXVCLEtBQUs7UUFDeEIsaUJBQWlCO0lBQ3JCLENBQUM7SUFpQ0wseUJBQUM7QUFBRCxDQUFDO0FBaERZLGdEQUFrQjs7Ozs7Ozs7OztBQ1AvQixJQUFZLGNBR1g7QUFIRCxXQUFZLGNBQWM7SUFDdEIsNkJBQVc7SUFDWCwrQkFBYTtBQUNqQixDQUFDLEVBSFcsY0FBYyxHQUFkLHNCQUFjLEtBQWQsc0JBQWMsUUFHekI7Ozs7Ozs7Ozs7QUNIRCxvQ0FBaUM7QUFFakMscUNBQTRDO0FBSzVDO0lBSUksMkJBQVksV0FBMkIsRUFBRSxPQUFlO1FBQXhELGlCQUdDO1FBUU0sdUJBQWtCLEdBQUc7WUFDeEIsS0FBSSxDQUFDLGFBQWEsQ0FBQyxFQUFFLENBQUMsT0FBTyxFQUFFLDBCQUEwQixFQUFFLFVBQUMsS0FBSztnQkFDN0QsS0FBSSxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsWUFBWSxDQUFDLGFBQUssQ0FBQyxjQUFjLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQyxDQUFDO2dCQUN4RSxLQUFLLENBQUMsZUFBZSxFQUFFLENBQUM7WUFDNUIsQ0FBQyxDQUFDLENBQUM7WUFDSCxLQUFJLENBQUMsYUFBYSxDQUFDLEVBQUUsQ0FBQyxPQUFPLEVBQUUseUJBQXlCLEVBQUUsVUFBQyxLQUFLO2dCQUM1RCxLQUFJLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxZQUFZLENBQUMsYUFBSyxDQUFDLGNBQWMsQ0FBQyxRQUFRLEVBQUUsYUFBSyxDQUFDLGNBQWMsQ0FBQyxTQUFTLEdBQUcsQ0FBQyxDQUFDLENBQUM7Z0JBQ3pHLEtBQUssQ0FBQyxlQUFlLEVBQUUsQ0FBQztZQUM1QixDQUFDLENBQUMsQ0FBQztZQUNILEtBQUksQ0FBQyxhQUFhLENBQUMsRUFBRSxDQUFDLE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxVQUFDLEtBQUs7Z0JBQzVELEtBQUksQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLFlBQVksQ0FBQyxhQUFLLENBQUMsY0FBYyxDQUFDLFFBQVEsRUFBRSxhQUFLLENBQUMsY0FBYyxDQUFDLFNBQVMsR0FBRyxDQUFDLENBQUMsQ0FBQztnQkFDekcsS0FBSyxDQUFDLGVBQWUsRUFBRSxDQUFDO1lBQzVCLENBQUMsQ0FBQyxDQUFDO1lBQ0gsS0FBSSxDQUFDLGFBQWEsQ0FBQyxFQUFFLENBQUMsT0FBTyxFQUFFLHlCQUF5QixFQUFFLFVBQUMsS0FBSztnQkFDNUQsS0FBSSxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsWUFBWSxDQUFDLGFBQUssQ0FBQyxjQUFjLENBQUMsUUFBUSxFQUFFLGFBQUssQ0FBQyxjQUFjLENBQUMsU0FBUyxDQUFDLENBQUM7Z0JBQ3JHLEtBQUssQ0FBQyxlQUFlLEVBQUUsQ0FBQztZQUM1QixDQUFDLENBQUMsQ0FBQztZQUNILEtBQUksQ0FBQyxhQUFhLENBQUMsRUFBRSxDQUFDLFFBQVEsRUFBRSxpQ0FBaUMsRUFBRSxVQUFDLEtBQUs7Z0JBQ3JFLElBQU0sR0FBRyxHQUFXLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxRQUFRLEVBQUUsQ0FBQztnQkFDM0QsS0FBSSxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsWUFBWSxDQUFDLEdBQUcsRUFBRSxhQUFLLENBQUMsY0FBYyxDQUFDLFNBQVMsQ0FBQyxDQUFDO2dCQUMzRSxLQUFLLENBQUMsZUFBZSxFQUFFLENBQUM7WUFDNUIsQ0FBQyxDQUFDLENBQUM7WUFDSCxLQUFJLENBQUMsYUFBYSxDQUFDLEVBQUUsQ0FBQyxVQUFVLEVBQUUsNEJBQTRCLEVBQUUsVUFBQyxLQUFLO2dCQUNsRSxJQUFNLEVBQUUsR0FBRyxNQUFNLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDO2dCQUNoQyxJQUFNLFFBQVEsR0FBRyxhQUFLLENBQUMsY0FBYyxDQUFDO2dCQUN0QyxFQUFFLENBQUMsQ0FBQyxLQUFLLENBQUMsT0FBTyxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUM7b0JBQ3ZCLElBQU0sR0FBRyxHQUFXLENBQUMsRUFBRSxDQUFDLEdBQUcsRUFBRSxDQUFDLFFBQVEsRUFBRSxDQUFDO29CQUN6QyxFQUFFLENBQUMsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLElBQUksR0FBRyxHQUFHLFFBQVEsQ0FBQyxTQUFTLElBQUksR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7d0JBQ3BELEVBQUUsQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxDQUFDO29CQUMvQixDQUFDO29CQUFDLElBQUksQ0FBQyxDQUFDO3dCQUNKLEtBQUksQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLFlBQVksQ0FBQyxRQUFRLENBQUMsUUFBUSxFQUFFLEdBQUcsQ0FBQyxDQUFDO29CQUNsRSxDQUFDO2dCQUNMLENBQUM7Z0JBQ0QsS0FBSyxDQUFDLGVBQWUsRUFBRSxDQUFDO1lBQzVCLENBQUMsQ0FBQyxDQUFDO1FBQ1AsQ0FBQztRQTdDRyxJQUFJLENBQUMsV0FBVyxHQUFHLFdBQVcsQ0FBQztRQUMvQixJQUFJLENBQUMsYUFBYSxHQUFHLE9BQU8sQ0FBQztJQUNqQyxDQUFDO0lBQ00sb0NBQVEsR0FBZjtRQUNJLDhDQUE4QztJQUNsRCxDQUFDO0lBRU0sMkNBQWUsR0FBdEI7UUFDSSw4Q0FBOEM7SUFDbEQsQ0FBQztJQXFDTCx3QkFBQztBQUFELENBQUM7QUFuRFksOENBQWlCOzs7Ozs7Ozs7O0FDSDlCLCtDQUFzRTtBQUN0RSw0Q0FBOEQ7QUFHOUQ7SUFRSSx1QkFBWSxXQUEyQixFQUFFLG1CQUEyQztRQUFwRixpQkFJQztRQVJPLGNBQVMsR0FBYSxLQUFLLENBQUM7UUFnQjdCLHVCQUFrQixHQUFHO1lBQ3hCLHlEQUF5RDtZQUN6RCxLQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxFQUFFLENBQUMsUUFBUSxFQUFFLFVBQUMsS0FBSztnQkFDdEQsSUFBTSxRQUFRLEdBQUcsS0FBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUM7Z0JBQ3hELEVBQUUsQ0FBQyxDQUFDLEtBQUksQ0FBQyxVQUFVLEtBQUssU0FBUyxJQUFJLEtBQUksQ0FBQyxVQUFVLEtBQUssSUFBSSxDQUFDLENBQUMsQ0FBQztvQkFDNUQsS0FBSSxDQUFDLFVBQVUsR0FBRyxLQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxJQUFJLENBQUM7Z0JBQzdFLENBQUM7Z0JBQ0QsS0FBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLENBQUMsTUFBTSxDQUMzQztvQkFDSSxJQUFJLEVBQUUsS0FBSSxDQUFDLFVBQVUsR0FBRyxDQUFDLENBQUMsR0FBRyxRQUFRLENBQUMsVUFBVSxFQUFFO29CQUNsRCxHQUFHLEVBQUUsQ0FBQztpQkFDVCxDQUNKLENBQUM7Z0JBQ0YsSUFBTSxpQkFBaUIsR0FBRyxRQUFRLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDLE1BQU0sRUFBRSxDQUFDO2dCQUMvRCxLQUFJLENBQUMsV0FBVyxDQUFDLFdBQVcsR0FBRyxpQkFBaUIsQ0FBQztnQkFDakQsS0FBSSxDQUFDLFdBQVcsQ0FBQyxxQkFBcUIsR0FBRyxRQUFRLENBQUMsTUFBTSxFQUFFLENBQUM7Z0JBQzNELEtBQUssQ0FBQyxjQUFjLEVBQUUsQ0FBQztnQkFDdkIsRUFBRSxDQUFDLENBQUMsS0FBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUM7b0JBQ2pCLEtBQUssQ0FBQyxlQUFlLEVBQUUsQ0FBQztvQkFDeEIsTUFBTSxDQUFDO2dCQUNYLENBQUM7Z0JBQ0QsSUFBTSxTQUFTLEdBQUcsUUFBUSxDQUFDLFNBQVMsRUFBRSxDQUFDO2dCQUN2QyxJQUFNLFlBQVksR0FBa0IsS0FBSSxDQUFDLFdBQVcsQ0FBQyx3QkFBd0IsQ0FBQyxTQUFTLENBQUMsQ0FBQztnQkFDekYsTUFBTSxDQUFDLENBQUMsWUFBWSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUM7b0JBQzdCLEtBQUssaUNBQWUsQ0FBQyxJQUFJO3dCQUNyQixFQUFFLENBQUMsQ0FBQyxZQUFZLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxDQUFDOzRCQUNqQyxLQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQzs0QkFDdEIsUUFBUSxDQUFDLElBQUksQ0FBQywyQkFBMkIsQ0FBQyxDQUFDLE1BQU0sQ0FDN0MsS0FBSSxDQUFDLG1CQUFtQixDQUFDLFdBQVcsQ0FBQyxZQUFZLENBQUMsVUFBVSxFQUFFLFlBQVksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDOzRCQUMxRixRQUFRLENBQUMsSUFBSSxDQUFDLGdDQUFnQyxDQUFDO2lDQUMxQyxLQUFLLENBQUMsQ0FBQyxFQUFFLEtBQUksQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLFNBQVMsR0FBRyxDQUFDLENBQUMsQ0FBQyxNQUFNLEVBQUUsQ0FBQzs0QkFDL0QsS0FBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUM7d0JBQzNCLENBQUM7d0JBQ0QsS0FBSyxDQUFDO29CQUNWLEtBQUssaUNBQWUsQ0FBQyxFQUFFO3dCQUNuQixFQUFFLENBQUMsQ0FBQyxZQUFZLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxDQUFDOzRCQUNqQyxLQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQzs0QkFDdEIsUUFBUSxDQUFDLElBQUksQ0FBQywyQkFBMkIsQ0FBQyxDQUFDLE9BQU8sQ0FDakQsS0FBSSxDQUFDLG1CQUFtQixDQUFDLFdBQVcsQ0FBQyxZQUFZLENBQUMsVUFBVSxFQUFFLFlBQVksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDOzRCQUN2RixRQUFRLENBQUMsSUFBSSxDQUFDLGdDQUFnQyxDQUFDO2lDQUMxQyxLQUFLLENBQUMsQ0FBQyxLQUFJLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxTQUFTLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sRUFBRSxDQUFDOzRCQUMvRCxLQUFJLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQzt3QkFDM0IsQ0FBQzt3QkFDRCxLQUFLLENBQUM7Z0JBQ2QsQ0FBQztnQkFDRCxLQUFLLENBQUMsZUFBZSxFQUFFLENBQUM7WUFDNUIsQ0FBQyxDQUFDLENBQUM7UUFDUCxDQUFDO1FBMURHLElBQUksQ0FBQyxXQUFXLEdBQUcsV0FBVyxDQUFDO1FBQy9CLElBQUksQ0FBQyxhQUFhLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLGdCQUFnQixDQUFDLENBQUM7UUFDdkUsSUFBSSxDQUFDLG1CQUFtQixHQUFHLG1CQUFtQixDQUFDO0lBQ25ELENBQUM7SUFDTSxnQ0FBUSxHQUFmO1FBQ0ksSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxJQUFJLENBQUM7SUFDN0UsQ0FBQztJQUVNLHVDQUFlLEdBQXRCLFVBQXVCLEtBQUs7UUFDeEIsOENBQThDO0lBQ2xELENBQUM7SUFpREQsc0JBQVksc0NBQVc7YUFBdkI7WUFDSSxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsV0FBVyxLQUFLLElBQUksSUFBSSxJQUFJLENBQUMsV0FBVyxLQUFLLFNBQVMsQ0FBQyxDQUFDLENBQUM7Z0JBQzlELE1BQU0sQ0FBQyxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUkseUJBQVcsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxTQUFTLEVBQ3hDLEVBQUUsRUFBRSxJQUFJLENBQUMsbUJBQW1CLENBQUMsVUFBVSxDQUFDLENBQUM7WUFDakYsQ0FBQztZQUFDLElBQUksQ0FBQyxDQUFDO2dCQUNKLE1BQU0sQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDO1lBQzVCLENBQUM7UUFDTCxDQUFDOzs7T0FBQTtJQUNMLG9CQUFDO0FBQUQsQ0FBQztBQTVFWSxzQ0FBYTs7Ozs7Ozs7OztBQ1IxQiw2Q0FBdUU7QUFDdkUsK0NBQW9EO0FBRXBEO0lBU0kscUJBQVksU0FBaUIsRUFBRSxlQUF1QixFQUFFLE1BQWM7UUFBdEUsaUJBTUM7UUFFTSw2QkFBd0IsR0FBRyxVQUFDLFNBQWlCO1lBQ2hELElBQUksVUFBVSxHQUFrQixxQ0FBc0IsQ0FBQyxLQUFJLENBQUMsU0FBUyxFQUFFLEtBQUksQ0FBQyxlQUFlLENBQUMsQ0FBQztZQUM3RixVQUFVLENBQUMsU0FBUyxHQUFHLEtBQUksQ0FBQyxrQkFBa0IsQ0FBQyxTQUFTLENBQUMsQ0FBQztZQUMxRCxNQUFNLENBQUMsQ0FBQyxVQUFVLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQztnQkFDM0IsNkNBQTZDO2dCQUM3QyxLQUFLLGlDQUFlLENBQUMsSUFBSTtvQkFDckIsRUFBRSxDQUFDLENBQUMsS0FBSSxDQUFDLG1CQUFtQixDQUFDLFNBQVMsSUFBSSxLQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7d0JBQ3hELFVBQVUsQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDO29CQUNqQyxDQUFDO29CQUFDLElBQUksQ0FBQyxDQUFDO3dCQUNKLFVBQVUsQ0FBQyxVQUFVLEdBQUcsS0FBSyxDQUFDO3dCQUM5QixJQUFNLElBQUksR0FBRyxDQUFDLFNBQVMsR0FBRyxLQUFJLENBQUMscUJBQXFCLENBQUMsR0FBRyxDQUFDLEtBQUksQ0FBQyxXQUFXLEdBQUcsR0FBRyxDQUFFLENBQUM7d0JBQ2xGLEVBQUUsQ0FBQyxDQUFDLElBQUksR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDOzRCQUNYLFVBQVUsQ0FBQyxpQkFBaUIsR0FBRyxJQUFJLENBQUM7NEJBQ3BDLFVBQVUsR0FBRyxLQUFJLENBQUMsMkJBQTJCLENBQUMsVUFBVSxDQUFDLENBQUM7d0JBQzlELENBQUM7b0JBQ0wsQ0FBQztvQkFDRCxLQUFLLENBQUM7Z0JBQ1YsS0FBSyxpQ0FBZSxDQUFDLEVBQUU7b0JBQ25CLDJDQUEyQztvQkFDM0MsRUFBRSxDQUFDLENBQUMsS0FBSSxDQUFDLG1CQUFtQixDQUFDLFVBQVUsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO3dCQUMzQyxVQUFVLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQztvQkFDakMsQ0FBQztvQkFBQyxJQUFJLENBQUMsQ0FBQzt3QkFDSixVQUFVLENBQUMsVUFBVSxHQUFHLEtBQUssQ0FBQzt3QkFDOUIsSUFBTSxJQUFJLEdBQUcsU0FBUyxHQUFHLENBQUMsS0FBSSxDQUFDLFdBQVcsR0FBRyxLQUFJLENBQUMscUJBQXFCLENBQUMsR0FBRyxHQUFHLENBQUM7d0JBQy9FLEVBQUUsQ0FBQyxDQUFDLElBQUksR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDOzRCQUNYLFVBQVUsQ0FBQyxpQkFBaUIsR0FBRyxJQUFJLENBQUM7NEJBQ3BDLFVBQVUsR0FBRyxLQUFJLENBQUMseUJBQXlCLENBQUMsVUFBVSxDQUFDLENBQUM7d0JBQzVELENBQUM7b0JBQ0wsQ0FBQztvQkFDRCxLQUFLLENBQUM7WUFDZCxDQUFDO1lBQ0QsRUFBRSxDQUFDLENBQUMsVUFBVSxDQUFDLGlCQUFpQixDQUFDLENBQUMsQ0FBQztnQkFDL0IsS0FBSSxDQUFDLG1CQUFtQixHQUFHLFVBQVUsQ0FBQztZQUMxQyxDQUFDO1lBQ0QsS0FBSSxDQUFDLGtCQUFrQixHQUFHLFNBQVMsQ0FBQztZQUNwQyxvREFBb0Q7WUFDcEQsTUFBTSxDQUFDLFVBQVUsQ0FBQztRQUN0QixDQUFDO1FBRU8sVUFBSyxHQUFHLFVBQUMsVUFBeUIsRUFBRSxtQkFBa0M7WUFDMUUsT0FBTyxDQUFDLEdBQUcsQ0FBQyx1RUFBdUUsQ0FBQyxDQUFDO1lBQ3JGLE9BQU8sQ0FBQyxHQUFHLENBQUMscUJBQXFCLEdBQUcsS0FBSSxDQUFDLGtCQUFrQixDQUFDLENBQUM7WUFDN0QsT0FBTyxDQUFDLEdBQUcsQ0FBQyxhQUFhLEdBQUcsS0FBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQ3pDLE9BQU8sQ0FBQyxHQUFHLENBQUMsb0NBQW9DLENBQUMsQ0FBQztZQUNsRCxNQUFNLENBQUMsSUFBSSxDQUFDLG1CQUFtQixDQUFDLENBQUMsT0FBTyxDQUFDLFVBQUMsR0FBRyxFQUFFLEtBQUs7Z0JBQ2hELE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLEtBQUssR0FBRyxtQkFBbUIsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1lBQ3hELENBQUMsQ0FBQyxDQUFDO1lBQ0gsT0FBTyxDQUFDLEdBQUcsQ0FBQyxnQ0FBZ0MsQ0FBQyxDQUFDO1lBQzlDLE1BQU0sQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsT0FBTyxDQUFDLFVBQUMsR0FBRyxFQUFFLEtBQUs7Z0JBQ3ZDLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLEtBQUssR0FBRyxVQUFVLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztZQUMvQyxDQUFDLENBQUMsQ0FBQztZQUNILE9BQU8sQ0FBQyxHQUFHLENBQUMsdUVBQXVFLENBQUMsQ0FBQztRQUN6RixDQUFDO1FBRU8sZ0NBQTJCLEdBQUcsVUFBQyxPQUFzQjtZQUN6RCxPQUFPLENBQUMsVUFBVSxHQUFHLEtBQUksQ0FBQyxtQkFBbUIsQ0FBQyxTQUFTLEdBQUcsQ0FBQyxDQUFDO1lBQzVELE9BQU8sQ0FBQyxRQUFRLEdBQUssS0FBSSxDQUFDLG1CQUFtQixDQUFDLFNBQVMsR0FBRyxLQUFJLENBQUMsU0FBUyxHQUFHLEtBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUM7Z0JBQ3BFLEtBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUM7Z0JBQ2pCLEtBQUksQ0FBQyxtQkFBbUIsQ0FBQyxTQUFTLEdBQUcsS0FBSSxDQUFDLFNBQVMsQ0FBQztZQUM1RSxPQUFPLENBQUMsVUFBVSxHQUFHLEtBQUksQ0FBQyxtQkFBbUIsQ0FBQyxVQUFVLEdBQUcsS0FBSSxDQUFDLFNBQVMsQ0FBQztZQUMxRSxPQUFPLENBQUMsU0FBUyxHQUFJLE9BQU8sQ0FBQyxRQUFRLENBQUM7WUFDdEMsTUFBTSxDQUFDLE9BQU8sQ0FBQztRQUNuQixDQUFDO1FBRU8sOEJBQXlCLEdBQUcsVUFBQyxPQUFzQjtZQUN2RCxPQUFPLENBQUMsVUFBVSxHQUFHLEtBQUksQ0FBQyxtQkFBbUIsQ0FBQyxVQUFVLEdBQUcsS0FBSSxDQUFDLFNBQVMsR0FBRyxDQUFDLENBQUMsQ0FBQztnQkFDMUQsQ0FBQyxDQUFDLENBQUM7Z0JBQ0gsS0FBSSxDQUFDLG1CQUFtQixDQUFDLFVBQVUsR0FBRyxLQUFJLENBQUMsU0FBUyxDQUFDO1lBQzFFLE9BQU8sQ0FBQyxRQUFRLEdBQUcsS0FBSSxDQUFDLG1CQUFtQixDQUFDLFVBQVUsR0FBRyxDQUFDLENBQUM7WUFDM0QsT0FBTyxDQUFDLFVBQVUsR0FBRyxPQUFPLENBQUMsVUFBVSxDQUFDO1lBQ3hDLE9BQU8sQ0FBQyxTQUFTLEdBQUcsS0FBSSxDQUFDLG1CQUFtQixDQUFDLFNBQVMsR0FBRyxLQUFJLENBQUMsU0FBUyxDQUFDO1lBQ3hFLE1BQU0sQ0FBQyxPQUFPLENBQUM7UUFDbkIsQ0FBQztRQUVPLHVCQUFrQixHQUFHLFVBQUMsU0FBaUI7WUFDM0MsRUFBRSxDQUFDLENBQUMsS0FBSSxDQUFDLGtCQUFrQixHQUFHLFNBQVMsQ0FBQyxDQUFDLENBQUM7Z0JBQ3RDLE1BQU0sQ0FBQyxpQ0FBZSxDQUFDLElBQUksQ0FBQztZQUNoQyxDQUFDO1lBQ0QsTUFBTSxDQUFDLGlDQUFlLENBQUMsRUFBRSxDQUFDO1FBQzlCLENBQUM7UUF0RkcsSUFBSSxDQUFDLGtCQUFrQixHQUFHLENBQUMsQ0FBQztRQUM1QixJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztRQUNyQixJQUFJLENBQUMsU0FBUyxHQUFHLFNBQVMsQ0FBQztRQUMzQixJQUFJLENBQUMsZUFBZSxHQUFHLGVBQWUsQ0FBQztRQUN2QyxJQUFJLENBQUMsbUJBQW1CLEdBQUcscUNBQXNCLENBQUMsZUFBZSxFQUFFLFNBQVMsQ0FBQyxDQUFDO0lBQ2xGLENBQUM7SUFrRkQsc0JBQVcsOENBQXFCO2FBSWhDO1lBQ0ksTUFBTSxDQUFDLElBQUksQ0FBQyxxQkFBcUIsQ0FBQztRQUN0QyxDQUFDO2FBTkQsVUFBaUMsTUFBYztZQUMzQyxJQUFJLENBQUMscUJBQXFCLEdBQUcsTUFBTSxDQUFDO1FBQ3hDLENBQUM7OztPQUFBO0lBS0Qsc0JBQVcsb0NBQVc7YUFJdEI7WUFDSSxNQUFNLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQztRQUM1QixDQUFDO2FBTkQsVUFBdUIsTUFBYztZQUNqQyxJQUFJLENBQUMsV0FBVyxHQUFHLE1BQU0sQ0FBQztRQUM5QixDQUFDOzs7T0FBQTtJQUtELHNCQUFXLHdDQUFlO2FBSTFCO1lBQ0ksTUFBTSxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUM7UUFDaEMsQ0FBQzthQU5ELFVBQTJCLFFBQWdCO1lBQ3ZDLElBQUksQ0FBQyxlQUFlLEdBQUcsUUFBUSxDQUFDO1FBQ3BDLENBQUM7OztPQUFBO0lBS0wsa0JBQUM7QUFBRCxDQUFDO0FBdEhZLGtDQUFXOzs7Ozs7Ozs7O0FDRnhCLCtDQUFrRDtBQVdyQyw4QkFBc0IsR0FBRyxVQUFDLFFBQWdCLEVBQUUsU0FBaUI7SUFDdEUsTUFBTSxDQUFDO1FBQ0gsVUFBVSxFQUFFLFFBQVEsR0FBRyxDQUFDO1FBQ3hCLFFBQVEsRUFBRSxRQUFRLEdBQUcsU0FBUyxHQUFHLENBQUM7UUFDbEMsVUFBVSxFQUFFLENBQUM7UUFDYixTQUFTLEVBQUUsUUFBUSxHQUFHLENBQUM7UUFDdkIsU0FBUyxFQUFFLGlDQUFlLENBQUMsSUFBSTtRQUMvQixVQUFVLEVBQUUsS0FBSztRQUNqQixpQkFBaUIsRUFBRSxLQUFLO0tBQzNCLENBQUM7QUFDTixDQUFDLENBQUM7Ozs7Ozs7Ozs7QUNwQkYsMENBQWtEO0FBRWxELElBQUssUUFLSjtBQUxELFdBQUssUUFBUTtJQUNULHVDQUFJO0lBQ0osdUNBQUk7SUFDSiw2Q0FBTztJQUNQLDZDQUFPO0FBQ1gsQ0FBQyxFQUxJLFFBQVEsS0FBUixRQUFRLFFBS1o7QUFFRDtJQUlJLDZCQUFZLFdBQTJCLEVBQUUsT0FBZTtRQUF4RCxpQkFHQztRQUVNLG1CQUFjLEdBQUc7WUFDcEIsS0FBSSxDQUFDLFdBQVcsQ0FBQyxtQ0FBbUMsRUFBRSxRQUFRLENBQUMsT0FBTyxDQUFDLENBQUM7WUFDeEUsS0FBSSxDQUFDLFdBQVcsQ0FBQywrQkFBK0IsRUFBRSxRQUFRLENBQUMsT0FBTyxDQUFDLENBQUM7WUFDcEUsS0FBSSxDQUFDLFdBQVcsQ0FBQyxpQkFBaUIsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUM5QyxDQUFDO1FBRU0sZUFBVSxHQUFHLFVBQUMsUUFBZ0I7WUFDakMsS0FBSSxDQUFDLFdBQVcsQ0FBQyxtQ0FBbUMsRUFBRSxRQUFRLENBQUMsSUFBSSxFQUFFLFFBQVEsQ0FBQyxDQUFDO1lBQy9FLEtBQUksQ0FBQyxXQUFXLENBQUMsK0JBQStCLEVBQUUsUUFBUSxDQUFDLElBQUksRUFBRSxRQUFRLENBQUMsQ0FBQztZQUMzRSxLQUFJLENBQUMsV0FBVyxDQUFDLGlCQUFpQixDQUFDLEtBQUssRUFBRSxRQUFRLENBQUMsQ0FBQztRQUN4RCxDQUFDO1FBRU0sZUFBVSxHQUFHLFVBQUMsUUFBZ0I7WUFDakMsS0FBSSxDQUFDLFdBQVcsQ0FBQyxtQ0FBbUMsRUFBRSxRQUFRLENBQUMsSUFBSSxFQUFFLFFBQVEsQ0FBQyxDQUFDO1lBQy9FLEtBQUksQ0FBQyxXQUFXLENBQUMsK0JBQStCLEVBQUUsUUFBUSxDQUFDLElBQUksRUFBRyxRQUFRLENBQUMsQ0FBQztZQUM1RSxLQUFJLENBQUMsV0FBVyxDQUFDLGlCQUFpQixDQUFDLElBQUksRUFBRSxRQUFRLENBQUMsQ0FBQztRQUN2RCxDQUFDO1FBRU0sbUJBQWMsR0FBRztZQUNwQixLQUFJLENBQUMsV0FBVyxDQUFDLG1DQUFtQyxFQUFFLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQztZQUN4RSxLQUFJLENBQUMsV0FBVyxDQUFDLCtCQUErQixFQUFFLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQztZQUNwRSxLQUFJLENBQUMsV0FBVyxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxDQUFDO1FBQzdDLENBQUM7UUFFTyxnQkFBVyxHQUFHLFVBQUMsUUFBZ0IsRUFBRSxPQUFpQixFQUFFLFFBQWlCO1lBQ3pFLEtBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFDLEtBQUssRUFBRSxPQUFPO2dCQUNsRCxJQUFJLEtBQUssR0FBRyxDQUFDLENBQUM7Z0JBQ2QsSUFBTSxjQUFjLEdBQUcsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDO2dCQUN2QyxJQUFNLFVBQVUsR0FBRyxjQUFjLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLENBQUM7Z0JBQ3pELEVBQUUsQ0FBQyxDQUFDLFVBQVUsS0FBSyxTQUFTLENBQUMsQ0FBQyxDQUFDO29CQUMzQixJQUFJLEdBQUcsU0FBUyxDQUFDO29CQUNqQixFQUFFLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUUsQ0FBQyxDQUFDLENBQUM7d0JBQ3hELEVBQUUsQ0FBQyxDQUFDLFVBQVUsS0FBSyxRQUFRLENBQUMsQ0FBQyxDQUFDOzRCQUMxQixFQUFFLENBQUMsQ0FBQyxPQUFPLEtBQUssUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7Z0NBQzVCLEdBQUcsR0FBRyx1QkFBVSxDQUFDLGVBQWUsQ0FBQyxVQUFVLEVBQUUsS0FBSSxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUM7Z0NBQy9FLEtBQUssR0FBRyxHQUFHLENBQUMsS0FBSyxDQUFDOzRCQUN0QixDQUFDOzRCQUNELGNBQWMsQ0FBQyxLQUFLLENBQUUsS0FBSyxHQUFHLElBQUksQ0FBQyxDQUFDOzRCQUNwQyxNQUFNLENBQUM7d0JBQ1gsQ0FBQztvQkFDTCxDQUFDO29CQUNELEVBQUUsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLE9BQU8sRUFBRSxRQUFRLENBQUMsT0FBTyxDQUFDLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQzt3QkFDN0QsRUFBRSxDQUFDLENBQUMsT0FBTyxLQUFLLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDOzRCQUMvQixHQUFHLEdBQUcsdUJBQVUsQ0FBQyxlQUFlLENBQUMsVUFBVSxFQUFFLEtBQUksQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDOzRCQUMvRSxLQUFLLEdBQUcsR0FBRyxDQUFDLEtBQUssQ0FBQzt3QkFDdEIsQ0FBQzt3QkFDRCxjQUFjLENBQUMsS0FBSyxDQUFFLEtBQUssR0FBRyxJQUFJLENBQUMsQ0FBQztvQkFDeEMsQ0FBQztnQkFDTCxDQUFDO1lBQ0wsQ0FBQyxDQUFDLENBQUM7UUFDUCxDQUFDO1FBdERHLElBQUksQ0FBQyxXQUFXLEdBQUcsV0FBVyxDQUFDO1FBQy9CLElBQUksQ0FBQyxhQUFhLEdBQUcsT0FBTyxDQUFDO0lBQ2pDLENBQUM7SUFxREwsMEJBQUM7QUFBRCxDQUFDO0FBNURZLGtEQUFtQjs7Ozs7Ozs7OztBQ1hoQyx5Q0FBeUM7QUFDekMscURBQTJFO0FBQzNFLHlDQUEwRDtBQUMxRCxrREFBcUU7QUFDckUsbURBQTRFO0FBQzVFLDJDQUFxRDtBQUdyRCxxQ0FBNEM7QUFHNUM7SUFTSSw2QkFBWSxXQUEyQjtRQUF2QyxpQkFZQztRQUtNLHFCQUFnQixHQUFHLFVBQUMsSUFBUyxFQUFFLFVBQWtCLEVBQUUsU0FBaUI7WUFDdkUsS0FBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7WUFDakIsSUFBTSxZQUFZLEdBQUcsS0FBSSxDQUFDLFdBQVcsQ0FBQyxVQUFVLEVBQUUsU0FBUyxDQUFDLENBQUM7WUFDN0QsSUFBTSxnQkFBZ0IsR0FBRyxLQUFJLENBQUMsNEJBQTRCLENBQUMsS0FBSSxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUM7WUFDN0YsSUFBTSxrQkFBa0IsR0FBRyxLQUFJLENBQUMseUJBQXlCLENBQUMsRUFBQyxjQUFjLEVBQUcsYUFBSyxDQUFDLGNBQWM7Z0JBQ25DLGdCQUFnQixvQkFBQyxDQUFDLENBQUM7WUFDaEYsTUFBTSxDQUFDLEtBQUksQ0FBQyx1QkFBdUIsQ0FBQztnQkFDaEMsT0FBTyxFQUFFLEtBQUksQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLE9BQU87Z0JBQ3pDLFlBQVksZ0JBQUUsa0JBQWtCO2FBQ25DLENBQUMsQ0FBQztRQUNQLENBQUM7UUFFTSxnQkFBVyxHQUFHLFVBQUMsVUFBa0IsRUFBRSxTQUFpQjtZQUN2RCxJQUFJLFlBQVksR0FBVyxFQUFFLENBQUM7WUFDOUIsSUFBTSxNQUFNLEdBQUcsS0FBSSxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7b0NBQ2xELENBQUM7Z0JBQ04sSUFBTSxHQUFHLEdBQU0sS0FBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDNUIsSUFBTSxZQUFZLEdBQVUsRUFBRSxDQUFDO2dCQUMvQixJQUFNLFNBQVMsR0FBVSxFQUFFLENBQUM7Z0JBQzVCLEtBQUksQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsVUFBQyxHQUFZO29CQUNsRCxJQUFJLFdBQVcsR0FBRyxHQUFHLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDO29CQUM5QixFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQzt3QkFDbkIsV0FBVyxHQUFHLEtBQUksQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLGNBQWMsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQUM7b0JBQ3BFLENBQUM7b0JBQ0QsU0FBUyxDQUFDLElBQUksQ0FBQyxFQUFDLFdBQVcsZUFBRSxNQUFNLEVBQUUsR0FBRyxDQUFDLE1BQU0sRUFBQyxDQUFDLENBQUM7b0JBQ2xELFlBQVksQ0FBQyxJQUFJLENBQUM7d0JBQ2QsV0FBVyxFQUFFLEdBQUcsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDO3dCQUN4QixVQUFVLEVBQUUsR0FBRyxDQUFDLElBQUk7d0JBQ3BCLFdBQVc7d0JBQ1gsTUFBTSxFQUFFLEdBQUcsQ0FBQyxNQUFNO3dCQUNsQixFQUFFLEVBQUUsR0FBRyxDQUFDLEVBQUU7d0JBQ1YsVUFBVSxFQUFFLEdBQUcsQ0FBQyxVQUFVO3FCQUM3QixDQUFDLENBQUM7Z0JBQ1AsQ0FBQyxDQUFDLENBQUM7Z0JBQ0gsSUFBTSxVQUFVLEdBQUcsS0FBSSxDQUFDLDBCQUEwQixDQUFDLFNBQVMsQ0FBQyxDQUFDO2dCQUM5RCxZQUFZLElBQUksVUFBVSxDQUFDO2dCQUMzQixJQUFNLFlBQVksR0FBRyxLQUFJLENBQUMsNkJBQTZCLENBQUMsRUFBQyxNQUFNLFVBQUUsWUFBWSxnQkFBQyxDQUFDLENBQUM7Z0JBQ2hGLFlBQVksSUFBSSxZQUFZLENBQUM7WUFDakMsQ0FBQztZQXZCRCxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxVQUFVLEVBQUUsQ0FBQyxJQUFJLFNBQVMsRUFBRSxDQUFDLEVBQUU7d0JBQW5DLENBQUM7YUF1QlQ7WUFDRCxNQUFNLENBQUMsWUFBWSxDQUFDO1FBQ3hCLENBQUM7UUFFTyw2QkFBd0IsR0FBRztZQUMvQixVQUFVLENBQUMsY0FBYyxDQUFDLEtBQUssRUFBRSxVQUFDLEdBQUc7Z0JBQ2pDLElBQU0sU0FBUyxHQUFXLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQztnQkFDckQsSUFBTSxVQUFVLEdBQUcsa0JBQWtCLEdBQUcsR0FBRyxDQUFDLEVBQUUsR0FBRyxHQUFHLENBQUM7Z0JBQ3JELE1BQU0sQ0FBQyxzQkFBc0IsR0FBRyxTQUFTLEdBQUcsTUFBTSxHQUFHLFVBQVUsR0FBRyxLQUFLLENBQUM7WUFDNUUsQ0FBQyxDQUFDLENBQUM7UUFDUCxDQUFDO1FBRU8sMkJBQXNCLEdBQUc7WUFDN0IsVUFBVSxDQUFDLGNBQWMsQ0FBQyxZQUFZLEVBQUUsVUFBQyxJQUFhO2dCQUNsRCxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztZQUNsQyxDQUFDLENBQUMsQ0FBQztRQUNQLENBQUM7UUFFTywyQkFBc0IsR0FBRztZQUM3QixVQUFVLENBQUMsY0FBYyxDQUFDLFlBQVksRUFBRSxVQUFDLEtBQWEsRUFBRSxLQUFhO2dCQUNqRSxNQUFNLENBQUMsS0FBSyxLQUFLLEtBQUssQ0FBQyxDQUFDLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7WUFDN0MsQ0FBQyxDQUFDLENBQUM7UUFDUCxDQUFDO1FBRU8sdUJBQWtCLEdBQUc7WUFDekIsVUFBVSxDQUFDLGNBQWMsQ0FBQyxNQUFNLEVBQUUsVUFBQyxNQUFjLEVBQUUsUUFBZ0IsRUFBRSxNQUFjLEVBQUUsT0FBTztnQkFDeEYsTUFBTSxDQUFDO29CQUNILEdBQUcsRUFBRSxNQUFNLEdBQUcsTUFBTTtvQkFDcEIsR0FBRyxFQUFFLE1BQU0sR0FBRyxNQUFNO29CQUNwQixHQUFHLEVBQUUsTUFBTSxHQUFHLE1BQU07b0JBQ3BCLEdBQUcsRUFBRSxNQUFNLEdBQUcsTUFBTTtvQkFDcEIsR0FBRyxFQUFFLE1BQU0sR0FBRyxNQUFNO2lCQUN2QixDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBQ2hCLENBQUMsQ0FBQyxDQUFDO1FBQ1AsQ0FBQztRQUVPLDBCQUFxQixHQUFHO1lBQzVCLFVBQVUsQ0FBQyxjQUFjLENBQUMsV0FBVyxFQUFFLFVBQUMsSUFBYTtnQkFDakQsTUFBTSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztZQUNsQyxDQUFDLENBQUMsQ0FBQztRQUNQLENBQUM7UUE5RkcsSUFBSSxDQUFDLHdCQUF3QixFQUFFLENBQUM7UUFDaEMsSUFBSSxDQUFDLHNCQUFzQixFQUFFLENBQUM7UUFDOUIsSUFBSSxDQUFDLHNCQUFzQixFQUFFLENBQUM7UUFDOUIsSUFBSSxDQUFDLGtCQUFrQixFQUFFLENBQUM7UUFDMUIsSUFBSSxDQUFDLHFCQUFxQixFQUFFLENBQUM7UUFDN0IsSUFBSSxDQUFDLFdBQVcsR0FBRyxXQUFXLENBQUM7UUFDL0IsSUFBSSxDQUFDLHVCQUF1QixHQUFHLFVBQVUsQ0FBQyxPQUFPLENBQUMsWUFBWSxDQUFDLENBQUM7UUFDaEUsSUFBSSxDQUFDLDBCQUEwQixHQUFHLFVBQVUsQ0FBQyxPQUFPLENBQUMsbUJBQW1CLENBQUMsQ0FBQztRQUMxRSxJQUFJLENBQUMsNkJBQTZCLEdBQUcsVUFBVSxDQUFDLE9BQU8sQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDO1FBQ2hGLElBQUksQ0FBQyx5QkFBeUIsR0FBRyxVQUFVLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQ2hFLElBQUksQ0FBQyw0QkFBNEIsR0FBRyxVQUFVLENBQUMsT0FBTyxDQUFDLG9CQUFvQixDQUFDLENBQUM7SUFDakYsQ0FBQztJQUVELHNCQUFXLDJDQUFVO2FBQXJCO1lBQ0ksTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDO1FBQzVCLENBQUM7OztPQUFBO0lBZ0ZMLDBCQUFDO0FBQUQsQ0FBQztBQXpHWSxrREFBbUI7Ozs7Ozs7QUNYaEMsZ0Q7Ozs7OztBQ0FBLGdFQUFnRSwyQkFBMkIsUUFBUSx5R0FBeUcsZ0RBQWdELG9CQUFvQix1RkFBdUYsSUFBSSx5QkFBeUIsYUFBYSx1Q0FBdUMsWUFBWSxxQ0FBcUMsZ0JBQWdCLGtJQUFrSSwyZUFBMmUsS0FBSyw0REFBNEQsY0FBYyxvREFBb0QsT0FBTyx3RTs7Ozs7O0FDQWh2QyxzRUFBc0UsbW1CQUFtbUIsbUJBQW1CLGdPQUFnTyxpREFBaUQsc1JBQXNSLGdEQUFnRCx1R0FBdUcscUNBQXFDLGtUQUFrVCwwQkFBMEIsbUlBQW1JLDBCQUEwQixTQUFTLDBCQUEwQiwrS0FBK0ssZ0RBQWdELG1IQUFtSCxxQ0FBcUMsZ0xBQWdMLGdEQUFnRCwrRkFBK0YsMEJBQTBCLDJOQUEyTixnQ0FBZ0Msc0JBQXNCLDRDQUE0QyxHQUFHLE1BQU0sdUJBQXVCLE9BQU8sdURBQXVELDBCQUEwQixLQUFLLDBCQUEwQixNQUFNLDJCQUEyQix5Qjs7Ozs7O0FDQWhuRyxtR0FBbUcsdUJBQXVCLHdTQUF3UyxhQUFhLGlIQUFpSCxZQUFZLGVBQWUsY0FBYyxlQUFlLE9BQU8sVzs7Ozs7O0FDQS9sQixtRUFBbUUsWUFBWSxlQUFlLGdCQUFnQix1a0JBQXVrQixjQUFjLHFIQUFxSCxZQUFZLDJDQUEyQyxNQUFNLHFJQUFxSSxJQUFJLEtBQUssa0JBQWtCLCtGQUErRixNQUFNLG9GQUFvRixPQUFPLHNFOzs7Ozs7QUNBcnRDLGlEQUFpRCx1QkFBdUIsMkJBQTJCLHNCQUFzQix3QkFBd0IsaUNBQWlDLE9BQU8sdUJBQXVCLDZCQUE2QiwyQkFBMkIsT0FBTyxxQkFBcUIseUJBQXlCLGtCQUFrQiw4QkFBOEIsT0FBTywrQkFBK0Isd0JBQXdCLHVCQUF1Qix1QkFBdUIseUNBQXlDLDZEQUE2RCxPQUFPLG1DQUFtQyx3QkFBd0IsT0FBTyxrQ0FBa0Msd0JBQXdCLE9BQU8sbUJBQW1CLGtDQUFrQyxPQUFPLHNCQUFzQiwrQ0FBK0MsT0FBTyxnQ0FBZ0MseUNBQXlDLE9BQU8sNkNBQTZDLHNCQUFzQixPQUFPLGlDQUFpQyx1Q0FBdUMsa0NBQWtDLGlDQUFpQyxvQkFBb0IsdUJBQXVCLDZEQUE2RCxPQUFPLDBCQUEwQix3Q0FBd0MsMEJBQTBCLE9BQU8sdUNBQXVDLHdCQUF3QixFQUFFLHNCQUFzQiwwQkFBMEIsT0FBTywyRUFBMkUsa0RBQWtELE9BQU8sNEVBQTRFLG9YQUFvWCwrQ0FBK0MseUJBQXlCLGVBQWUsd0JBQXdCLGFBQWEsTUFBTSxxQkFBcUIsT0FBTywwSkFBMEosZUFBZSw0Q0FBNEMsSUFBSSxzQkFBc0IsSUFBSSxtQ0FBbUMsY0FBYyw0R0FBNEcsV0FBVyxZQUFZLDZJQUE2SSxXQUFXLFlBQVksdUNBQXVDLEtBQUssOERBQThELE1BQU0sOERBQThELE9BQU8sbVNBQW1TLGdEQUFnRCx5QkFBeUIsZUFBZSx3QkFBd0IsYUFBYSxNQUFNLHFCQUFxQixPQUFPLDJGQUEyRixlQUFlLHdIQUF3SCxxQkFBcUIsc0IiLCJmaWxlIjoiZ3JpZG9vLWJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkocmVxdWlyZShcImpRdWVyeVwiKSwgcmVxdWlyZShcIkhhbmRsZWJhcnNcIikpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoW1wialF1ZXJ5XCIsIFwiSGFuZGxlYmFyc1wiXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJHcmlkb29cIl0gPSBmYWN0b3J5KHJlcXVpcmUoXCJqUXVlcnlcIiksIHJlcXVpcmUoXCJIYW5kbGViYXJzXCIpKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJHcmlkb29cIl0gPSBmYWN0b3J5KHJvb3RbXCJqUXVlcnlcIl0sIHJvb3RbXCJIYW5kbGViYXJzXCJdKTtcbn0pKHR5cGVvZiBzZWxmICE9PSAndW5kZWZpbmVkJyA/IHNlbGYgOiB0aGlzLCBmdW5jdGlvbihfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzNfXywgX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV8xOV9fKSB7XG5yZXR1cm4gXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDQpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIGQyZGFhMzhiN2EzMTA2NDcyZjY5IiwiaW1wb3J0IHsgSVBhZ2luYXRpb24gfSBmcm9tIFwiLi4vbW9kZWxzL0lQYWdpbmF0aW9uXCI7XHJcbmltcG9ydCB7IElQYWdpbmF0aW9uSW5wdXQgfSBmcm9tIFwiLi4vbW9kZWxzL0lQYWdpbmF0aW9uSW5wdXRcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBQYWdlciB7XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBwYWdpbmF0aW9uRGF0YTogSVBhZ2luYXRpb247XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBDYWxjdWxhdGVQYWdpbmF0aW9uRGF0YSA9IChwYWdpbmF0aW9uSW5wdXQ6IElQYWdpbmF0aW9uSW5wdXQpOiB2b2lkID0+IHtcclxuICAgICAgICAgICAgY29uc3QgcGFnaW5hdGlvbkRhdGE6IGFueSA9IHt9O1xyXG4gICAgICAgICAgICBwYWdpbmF0aW9uRGF0YS5wYWdlSW5kZXggPSBwYWdpbmF0aW9uSW5wdXQucGFnZUluZGV4O1xyXG4gICAgICAgICAgICBwYWdpbmF0aW9uRGF0YS5wYWdlU2l6ZSA9IHBhZ2luYXRpb25JbnB1dC5wYWdlU2l6ZTtcclxuICAgICAgICAgICAgcGFnaW5hdGlvbkRhdGEucGFnZVNpemVzID0gcGFnaW5hdGlvbklucHV0LnBhZ2VTaXplcztcclxuICAgICAgICAgICAgcGFnaW5hdGlvbkRhdGEudG90YWxDb3VudCA9IHBhZ2luYXRpb25JbnB1dC50b3RhbENvdW50O1xyXG4gICAgICAgICAgICBwYWdpbmF0aW9uRGF0YS5ub09mUGFnZXMgPSBNYXRoLmNlaWwocGFnaW5hdGlvbklucHV0LnRvdGFsQ291bnQgLyBwYWdpbmF0aW9uSW5wdXQucGFnZVNpemUpO1xyXG4gICAgICAgICAgICBjb25zdCBtaW5OdW0gPSAoKHBhZ2luYXRpb25JbnB1dC5wYWdlSW5kZXggLSAxKSAqIHBhZ2luYXRpb25JbnB1dC5wYWdlU2l6ZSk7XHJcbiAgICAgICAgICAgIGNvbnN0IGxvd2VyTGltaXRPZmZzZXQgPSBwYWdpbmF0aW9uSW5wdXQucGFnZVNpemUgPiBwYWdpbmF0aW9uSW5wdXQudG90YWxDb3VudCA/XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWdpbmF0aW9uSW5wdXQudG90YWxDb3VudCA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWdpbmF0aW9uSW5wdXQucGFnZVNpemU7XHJcbiAgICAgICAgICAgIHBhZ2luYXRpb25EYXRhLnJhbmdlID0ge1xyXG4gICAgICAgICAgICAgICAgbWluIDogbWluTnVtICsgMSxcclxuICAgICAgICAgICAgICAgIG1heCA6IG1pbk51bSArIGxvd2VyTGltaXRPZmZzZXQsXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIHBhZ2luYXRpb25EYXRhLmZpcnN0UGFnZUxpbmtEaXNhYmxlZCA9IHBhZ2luYXRpb25EYXRhLm5vT2ZQYWdlcyA9PT0gMSB8fCBwYWdpbmF0aW9uRGF0YS5wYWdlSW5kZXggPT09IDE7XHJcbiAgICAgICAgICAgIHBhZ2luYXRpb25EYXRhLmxhc3RQYWdlTGlua0Rpc2FibGVkICA9IHBhZ2luYXRpb25EYXRhLm5vT2ZQYWdlcyA9PT0gMVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfHwgKHBhZ2luYXRpb25EYXRhLnBhZ2VJbmRleCA9PT0gcGFnaW5hdGlvbkRhdGEubm9PZlBhZ2VzKTtcclxuICAgICAgICAgICAgcGFnaW5hdGlvbkRhdGEucHJldlBhZ2VMaW5rRGlzYWJsZWQgID0gcGFnaW5hdGlvbkRhdGEucGFnZUluZGV4ID09PSAxXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8fCAocGFnaW5hdGlvbkRhdGEucGFnZUluZGV4IC0gMSkgPD0gMDtcclxuICAgICAgICAgICAgcGFnaW5hdGlvbkRhdGEubmV4dFBhZ2VMaW5rRGlzYWJsZWQgID0gcGFnaW5hdGlvbkRhdGEubm9PZlBhZ2VzID09PSBwYWdpbmF0aW9uRGF0YS5wYWdlSW5kZXhcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHx8IChwYWdpbmF0aW9uRGF0YS5wYWdlSW5kZXggKyAxKSA+PSBwYWdpbmF0aW9uRGF0YS5ub09mUGFnZXM7XHJcbiAgICAgICAgICAgIFBhZ2VyLnBhZ2luYXRpb25EYXRhID0gcGFnaW5hdGlvbkRhdGE7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBnZXQgUGFnaW5hdGlvbkRhdGEoKTogSVBhZ2luYXRpb24ge1xyXG4gICAgICAgIHJldHVybiBQYWdlci5wYWdpbmF0aW9uRGF0YTtcclxuICAgIH1cclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvdHNsaW50LWxvYWRlcj8/cmVmLS0wIS4vc3JjL2pzL3BhZ2luYXRpb24vUGFnZXIudHMiLCJpbXBvcnQgeyBJQ29sdW1uIH0gZnJvbSBcIi4vLi4vbW9kZWxzL0lDb2x1bW5cIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBDb21tb25VdGlsIHtcclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIEdldENvbHVtbk9iamVjdCA9IChjb2x1bW5JZDogc3RyaW5nLCBjb2x1bW5zOiBJQ29sdW1uW10pOiBJQ29sdW1uID0+IHtcclxuICAgICAgICBpZiAoY29sdW1uSWQgPT0gbnVsbCB8fCBjb2x1bW5zID09IG51bGwpIHtcclxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCByZXRDb2w6IElDb2x1bW47XHJcbiAgICAgICAgY29sdW1ucy5mb3JFYWNoKChjb2w6IElDb2x1bW4pID0+IHtcclxuICAgICAgICAgICAgaWYgKGNvbC5pZCA9PT0gY29sdW1uSWQpIHtcclxuICAgICAgICAgICAgICAgIHJldENvbCA9IGNvbDtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHJldHVybiByZXRDb2w7XHJcbiAgICB9XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL3RzbGludC1sb2FkZXI/P3JlZi0tMCEuL3NyYy9qcy91dGlsL0NvbHVtblV0aWwudHMiLCJleHBvcnQgZW51bSBTY3JvbGxEaXJlY3Rpb24ge1xyXG4gICAgVXAgPSBcIlVwXCIsXHJcbiAgICBEb3duID0gXCJEb3duXCIsXHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL3RzbGludC1sb2FkZXI/P3JlZi0tMCEuL3NyYy9qcy92aXJ0dWFsaXphdGlvbi9TY3JvbGxEaXJlY3Rpb24udHMiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfM19fO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwialF1ZXJ5XCJcbi8vIG1vZHVsZSBpZCA9IDNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0ICogYXMgalF1ZXJ5IGZyb20gXCJqcXVlcnlcIjtcbmltcG9ydCB7IENvbmZpZ1N0b3JlIH0gZnJvbSBcIi4uL2NvbmZpZy9Db25maWdTdG9yZVwiO1xuaW1wb3J0IHsgQ29sU2V0dGluZ3NIYW5kbGVyIH0gZnJvbSBcIi4uL2V2ZW50SGFuZGxlcnMvQ29sU2V0dGluZ3NIYW5kbGVyXCI7XG5pbXBvcnQgeyBJUGFnaW5hdGlvbiB9IGZyb20gXCIuLi9tb2RlbHMvSVBhZ2luYXRpb25cIjtcbmltcG9ydCB7IElQYWdpbmF0aW9uSW5wdXQgfSBmcm9tIFwiLi4vbW9kZWxzL0lQYWdpbmF0aW9uSW5wdXRcIjtcbmltcG9ydCB7IFBhZ2VyIH0gZnJvbSBcIi4uL3BhZ2luYXRpb24vUGFnZXJcIjtcbmltcG9ydCB7IERldGFpbHNSb3dIYW5kbGVyIH0gZnJvbSBcIi4vLi4vZXZlbnRIYW5kbGVycy9EZXRhaWxzUm93SGFuZGxlclwiO1xuaW1wb3J0IHsgRmlsdGVyQ2xpY2tIYW5kbGVyIH0gZnJvbSBcIi4vLi4vZXZlbnRIYW5kbGVycy9GaWx0ZXJDbGlja0hhbmRsZXJcIjtcbmltcG9ydCB7IEhhbmRsZXJOYW1lcyB9IGZyb20gXCIuLy4uL2V2ZW50SGFuZGxlcnMvSGFuZGxlck5hbWVzXCI7XG5pbXBvcnQgeyBIZWFkZXJDbGlja0hhbmRsZXIgfSBmcm9tIFwiLi8uLi9ldmVudEhhbmRsZXJzL0hlYWRlckNsaWNrSGFuZGxlclwiO1xuaW1wb3J0IHsgSUV2ZW50SGFuZGxlciB9IGZyb20gXCIuLy4uL2V2ZW50SGFuZGxlcnMvSUV2ZW50SGFuZGxlclwiO1xuaW1wb3J0IHsgSUhhbmRsZXJDaGFpbiB9IGZyb20gXCIuLy4uL2V2ZW50SGFuZGxlcnMvSUhhbmRsZXJDaGFpblwiO1xuaW1wb3J0IHsgUGFnZVNlYXJjaEhhbmRsZXIgfSBmcm9tIFwiLi8uLi9ldmVudEhhbmRsZXJzL1BhZ2VTZWFyY2hDbGlja0hhbmRsZXJcIjtcbmltcG9ydCB7IFNjcm9sbEhhbmRsZXIgfSBmcm9tIFwiLi8uLi9ldmVudEhhbmRsZXJzL1Njcm9sbEhhbmRsZXJcIjtcbmltcG9ydCB7IFRvZ2dsZUNvbHVtbkhhbmRsZXIgfSBmcm9tIFwiLi8uLi9ldmVudEhhbmRsZXJzL1RvZ2dsZUNvbHVtbkhhbmRsZXJcIjtcbmltcG9ydCB7IEZpbHRlckFjdGlvblR5cGUgfSBmcm9tIFwiLi8uLi9tb2RlbHMvRmlsdGVyQWN0aW9uVHlwZVwiO1xuaW1wb3J0IHsgSUNvbHVtbiB9IGZyb20gXCIuLy4uL21vZGVscy9JQ29sdW1uXCI7XG5pbXBvcnQgeyBPcmRlckRpcmVjdGlvbiB9IGZyb20gXCIuLy4uL21vZGVscy9PcmRlckRpcmVjdGlvblwiO1xuaW1wb3J0IHsgR3JpZFRlbXBsYXRlU2VydmljZSB9IGZyb20gXCIuLy4uL3NlcnZpY2VzL0dyaWRUZW1wbGF0ZVNlcnZpY2VcIjtcbmltcG9ydCB7IENvbW1vblV0aWwgfSBmcm9tIFwiLi8uLi91dGlsL0NvbHVtblV0aWxcIjtcbmltcG9ydCB7IElHcmlkT3B0aW9ucyB9IGZyb20gXCIuL0lHcmlkT3B0aW9uc1wiO1xuXG5leHBvcnQgY2xhc3MgR3JpZDxUPiB7XG5cbiAgICBwcml2YXRlIGhhbmRsZUNoYWluOiBBcnJheTxJSGFuZGxlckNoYWluPFQ+PjtcbiAgICBwcml2YXRlIGdyaWRUZW1wbGF0ZVNlcnZpY2U6IEdyaWRUZW1wbGF0ZVNlcnZpY2U8VD47XG4gICAgcHJpdmF0ZSBjb25maWdTdG9yZTogQ29uZmlnU3RvcmU8VD47XG5cbiAgICBjb25zdHJ1Y3RvcihvcHRpb25zOiBJR3JpZE9wdGlvbnM8VD4pIHtcbiAgICAgICAgdGhpcy5jb25maWdTdG9yZSA9IG5ldyBDb25maWdTdG9yZTxUPihvcHRpb25zKTtcbiAgICAgICAgdGhpcy5ncmlkVGVtcGxhdGVTZXJ2aWNlID0gbmV3IEdyaWRUZW1wbGF0ZVNlcnZpY2UodGhpcy5jb25maWdTdG9yZSk7XG4gICAgICAgIHRoaXMuSW5pdEhhbmRsZXJzKCk7XG4gICAgfVxuXG4gICAgcHVibGljIHNob3dMb2FkZXIgPSAoKTogdm9pZCA9PiB7XG4gICAgICAgIGpRdWVyeSh0aGlzLmNvbmZpZ1N0b3JlLk9wdGlvbnMuY29udGFpbmVyRWxlbWVudCkuZmluZChcIi5ncmlkLWxvYWRlclwiKS5hZGRDbGFzcyhcImFjdGl2ZVwiKTtcbiAgICB9XG4gICAgcHVibGljIGhpZGVMb2FkZXIgPSAoKTogdm9pZCA9PiB7XG4gICAgICAgIGpRdWVyeSh0aGlzLmNvbmZpZ1N0b3JlLk9wdGlvbnMuY29udGFpbmVyRWxlbWVudCkuZmluZChcIi5ncmlkLWxvYWRlclwiKS5yZW1vdmUoXCJhY3RpdmVcIik7XG4gICAgfVxuICAgIHB1YmxpYyBiaW5kRGF0YSA9IChkYXRhOiBUW10sIHBhZ2luYXRpb25JbnB1dD86IElQYWdpbmF0aW9uSW5wdXQpOiB2b2lkID0+IHtcbiAgICAgICAgY29uc3QgZmlyc3RJbmRleCA9IDA7XG4gICAgICAgIGxldCBsYXN0SW5kZXggPSB0aGlzLmNvbmZpZ1N0b3JlLk9wdGlvbnMuY2h1bmtTaXplICsgdGhpcy5nZXRJbml0aWFsUm93Q291bnQoKTtcbiAgICAgICAgbGFzdEluZGV4ID0gbGFzdEluZGV4ID4gZGF0YS5sZW5ndGggPyBkYXRhLmxlbmd0aCAtIDEgOiBsYXN0SW5kZXg7XG4gICAgICAgIFBhZ2VyLkNhbGN1bGF0ZVBhZ2luYXRpb25EYXRhKHBhZ2luYXRpb25JbnB1dCk7XG4gICAgICAgIGNvbnN0IGdyaWRDb250ZW50OiBzdHJpbmcgPSB0aGlzLmdyaWRUZW1wbGF0ZVNlcnZpY2UuR2V0Rmlyc3RUZW1wbGF0ZShkYXRhLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlyc3RJbmRleCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhc3RJbmRleCk7XG4gICAgICAgIHRoaXMuY29uZmlnU3RvcmUuT3B0aW9ucy5jb250YWluZXJFbGVtZW50LmlubmVySFRNTCA9IGdyaWRDb250ZW50O1xuICAgICAgICAvLyBIYXZlIHRvIGJpbmQgU2Nyb2xsIEhhbmRsZXIgQWZ0ZXIgRE9NIGhhcyBiZWVuIGNyZWF0ZWRcbiAgICAgICAgY29uc3Qgc2Nyb2xsSGFuZGxlciA9IG5ldyBTY3JvbGxIYW5kbGVyPFQ+KHRoaXMuY29uZmlnU3RvcmUsIHRoaXMuZ3JpZFRlbXBsYXRlU2VydmljZSk7XG4gICAgICAgIHNjcm9sbEhhbmRsZXIuUmVnaXN0ZXJEb21IYW5kbGVyKCk7XG4gICAgICAgIHRoaXMuaGFuZGxlQ2hhaW4ucHVzaCh7XG4gICAgICAgICAgICBoYW5kbGVyOiBzY3JvbGxIYW5kbGVyLFxuICAgICAgICAgICAgbmFtZTogSGFuZGxlck5hbWVzLlNjcm9sbCxcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBnZXRJbml0aWFsUm93Q291bnQgPSAoKTogbnVtYmVyID0+IHtcbiAgICAgICAgcmV0dXJuIDI1O1xuICAgIH1cblxuICAgIHByaXZhdGUgSW5pdEhhbmRsZXJzID0gKCk6IHZvaWQgPT4ge1xuICAgICAgICBjb25zdCBwYXJlbnRFbGVtZW50ID0galF1ZXJ5KHRoaXMuY29uZmlnU3RvcmUuT3B0aW9ucy5jb250YWluZXJFbGVtZW50KTtcbiAgICAgICAgdGhpcy5oYW5kbGVDaGFpbiA9IFtdO1xuICAgICAgICB0aGlzLmhhbmRsZUNoYWluLnB1c2goe1xuICAgICAgICAgICAgaGFuZGxlcjogbmV3IERldGFpbHNSb3dIYW5kbGVyPFQ+KHBhcmVudEVsZW1lbnQpLFxuICAgICAgICAgICAgbmFtZTogSGFuZGxlck5hbWVzLkRldGFpbHNSb3csXG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLmhhbmRsZUNoYWluLnB1c2goe1xuICAgICAgICAgICAgaGFuZGxlcjogIG5ldyBGaWx0ZXJDbGlja0hhbmRsZXI8VD4odGhpcy5jb25maWdTdG9yZSwgcGFyZW50RWxlbWVudCksXG4gICAgICAgICAgICBuYW1lOiBIYW5kbGVyTmFtZXMuRmlsdGVyQWN0aW9uLFxuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5oYW5kbGVDaGFpbi5wdXNoKHtcbiAgICAgICAgICAgIGhhbmRsZXI6IG5ldyBIZWFkZXJDbGlja0hhbmRsZXI8VD4odGhpcy5jb25maWdTdG9yZSwgcGFyZW50RWxlbWVudCksXG4gICAgICAgICAgICBuYW1lOiBIYW5kbGVyTmFtZXMuSGVhZGVyQ2xpY2ssXG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLmhhbmRsZUNoYWluLnB1c2goe1xuICAgICAgICAgICAgaGFuZGxlcjogbmV3IFBhZ2VTZWFyY2hIYW5kbGVyPFQ+KHRoaXMuY29uZmlnU3RvcmUsIHBhcmVudEVsZW1lbnQpLFxuICAgICAgICAgICAgbmFtZTogSGFuZGxlck5hbWVzLlBhZ2VTZWFyY2gsXG4gICAgICAgIH0pO1xuICAgICAgICBjb25zdCB0b2dnbGVIYW5kbGVyID0gbmV3IFRvZ2dsZUNvbHVtbkhhbmRsZXIodGhpcy5jb25maWdTdG9yZSwgcGFyZW50RWxlbWVudCk7XG4gICAgICAgIHRoaXMuaGFuZGxlQ2hhaW4ucHVzaCh7XG4gICAgICAgICAgICBoYW5kbGVyOiBuZXcgQ29sU2V0dGluZ3NIYW5kbGVyPFQ+KHBhcmVudEVsZW1lbnQsIHRvZ2dsZUhhbmRsZXIpLFxuICAgICAgICAgICAgbmFtZTogSGFuZGxlck5hbWVzLkNvbFNldHRpbmdzLFxuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5oYW5kbGVDaGFpbi5mb3JFYWNoKCh2YWx1ZTogSUhhbmRsZXJDaGFpbjxUPik6IHZvaWQgPT4ge1xuICAgICAgICAgICAgdmFsdWUuaGFuZGxlci5SZWdpc3RlckRvbUhhbmRsZXIoKTtcbiAgICAgICAgfSk7XG4gICAgICAgIGpRdWVyeSh3aW5kb3cpLnJlc2l6ZSgoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmhhbmRsZUNoYWluLmZvckVhY2goKHZhbHVlOiBJSGFuZGxlckNoYWluPFQ+KTogdm9pZCA9PiB7XG4gICAgICAgICAgICAgICAgdmFsdWUuaGFuZGxlci5vblJlc2l6ZSgpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgICAgICBqUXVlcnkoZG9jdW1lbnQpLmNsaWNrKChldmVudCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5oYW5kbGVDaGFpbi5mb3JFYWNoKCh2YWx1ZTogSUhhbmRsZXJDaGFpbjxUPik6IHZvaWQgPT4ge1xuICAgICAgICAgICAgICAgIHZhbHVlLmhhbmRsZXIub25Eb2N1bWVudENsaWNrKGV2ZW50KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgIH0pO1xuICAgIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy90c2xpbnQtbG9hZGVyPz9yZWYtLTAhLi9zcmMvanMvbWFpbi9HcmlkLnRzIiwiaW1wb3J0IHsgSUdyaWRPcHRpb25zIH0gZnJvbSBcIi4uL21haW4vSUdyaWRPcHRpb25zXCI7XHJcbmltcG9ydCB7IEZpbHRlckFjdGlvblR5cGUgfSBmcm9tIFwiLi4vbW9kZWxzL0ZpbHRlckFjdGlvblR5cGVcIjtcclxuaW1wb3J0IHsgSUNvbHVtbiB9IGZyb20gXCIuLi9tb2RlbHMvSUNvbHVtblwiO1xyXG5pbXBvcnQgeyBPcmRlckRpcmVjdGlvbiB9IGZyb20gXCIuLi9tb2RlbHMvT3JkZXJEaXJlY3Rpb25cIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBDb25maWdTdG9yZTxUPiB7XHJcbiAgICBwdWJsaWMgb3B0aW9uczogSUdyaWRPcHRpb25zPFQ+O1xyXG4gICAgcHJpdmF0ZSBkZWZhdWx0R3JpZE9wdGlvbnM6IElHcmlkT3B0aW9uczxUPiA9IHtcclxuICAgICAgICBjaHVua1NpemU6IDUsXHJcbiAgICAgICAgY29sdW1uczogW10sXHJcbiAgICAgICAgY29udGFpbmVyRWxlbWVudDogbnVsbCxcclxuICAgICAgICBoeWJyaWRGdW5jdGlvbjogKGNvbHVtbjogSUNvbHVtbiwgcm93OiBUKTogc3RyaW5nID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIFwidHJ1ZVwiO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgb25DbGlja0ZpbHRlcjogKGNvbHVtbjogc3RyaW5nLCB2YWx1ZTogYW55LCBhY3Rpb25UeXBlOiBGaWx0ZXJBY3Rpb25UeXBlKTogdm9pZCA9PiB7XHJcbiAgICAgICAgICAgIC8vIE5vIGNvZGVcclxuICAgICAgICB9LFxyXG4gICAgICAgIG9uQ2xpY2tIZWFkZXI6IChjb2x1bW46IHN0cmluZywgZGlyZWN0aW9uOiBPcmRlckRpcmVjdGlvbik6IHZvaWQgPT4ge1xyXG4gICAgICAgICAgICAvLyBObyBjb2RlXHJcbiAgICAgICAgfSxcclxuICAgICAgICBvblBhZ2VTZWFyY2g6IChwYWdlU2l6ZTogbnVtYmVyLCBwYWdlSW5kZXg6IG51bWJlcik6IHZvaWQgPT4ge1xyXG4gICAgICAgICAgICAvLyBObyBjb2RlXHJcbiAgICAgICAgfSxcclxuICAgIH07XHJcbiAgICBjb25zdHJ1Y3RvcihvcHRpb25zOiBJR3JpZE9wdGlvbnM8VD4pIHtcclxuICAgICAgICB0aGlzLmV4dGVuZE9wdGlvbnMob3B0aW9ucyk7XHJcbiAgICAgICAgaWYgKG9wdGlvbnMuY29udGFpbmVyRWxlbWVudCA9PT0gbnVsbCkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJQbGVhc2UgUHJvdmlkZSBhIHZhbGlkIGNvbnRhaW5lciBFbGVtZW50IG9iamVjdFwiKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgc2V0IE9wdGlvbnMob3B0aW9uczogSUdyaWRPcHRpb25zPFQ+KSB7XHJcbiAgICAgICAgdGhpcy5vcHRpb25zID0gb3B0aW9ucztcclxuICAgIH1cclxuICAgIHB1YmxpYyBnZXQgT3B0aW9ucygpOiBJR3JpZE9wdGlvbnM8VD4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLm9wdGlvbnM7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgU2V0SGlkZGVuT25Db25maWcgPSAoYm9vbDogYm9vbGVhbiwgY29sdW1uSWQ/OiBzdHJpbmcpOiB2b2lkID0+IHtcclxuICAgICAgICB0aGlzLk9wdGlvbnMuY29sdW1ucy5mb3JFYWNoKChjb2w6IElDb2x1bW4pID0+IHtcclxuICAgICAgICAgICAgaWYgKGNvbHVtbklkID09PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICBjb2wuaGlkZGVuID0gYm9vbDtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGlmIChjb2wuaWQgPT09IGNvbHVtbklkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sLmhpZGRlbiA9IGJvb2w7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBwcml2YXRlIGV4dGVuZE9wdGlvbnMgPSAoaW5wdXRPcHRpb25zOiBJR3JpZE9wdGlvbnM8VD4pOiBJR3JpZE9wdGlvbnM8VD4gPT4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLm9wdGlvbnMgPSBqUXVlcnkuZXh0ZW5kKHt9LCB0aGlzLmRlZmF1bHRHcmlkT3B0aW9ucywgaW5wdXRPcHRpb25zKTtcclxuICAgIH1cclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvdHNsaW50LWxvYWRlcj8/cmVmLS0wIS4vc3JjL2pzL2NvbmZpZy9Db25maWdTdG9yZS50cyIsImltcG9ydCB7IElHcmlkT3B0aW9ucyB9IGZyb20gXCIuLi9tYWluL0lHcmlkT3B0aW9uc1wiO1xyXG5pbXBvcnQgeyBJRXZlbnRIYW5kbGVyIH0gZnJvbSBcIi4vSUV2ZW50SGFuZGxlclwiO1xyXG5pbXBvcnQgeyBUb2dnbGVDb2x1bW5IYW5kbGVyIH0gZnJvbSBcIi4vVG9nZ2xlQ29sdW1uSGFuZGxlclwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIENvbFNldHRpbmdzSGFuZGxlcjxUPiBpbXBsZW1lbnRzIElFdmVudEhhbmRsZXI8VD4ge1xyXG4gICAgcHJpdmF0ZSBwYXJlbnRFbGVtZW50OiBKUXVlcnk7XHJcbiAgICBwcml2YXRlIHRvZ2dsZUNvbHVtbkhhbmRsZXI6IFRvZ2dsZUNvbHVtbkhhbmRsZXI8VD47XHJcblxyXG4gICAgY29uc3RydWN0b3IoZWxlbWVudDogSlF1ZXJ5LCB0b2dnbGVDb2x1bW5IYW5kbGVyOiBUb2dnbGVDb2x1bW5IYW5kbGVyPFQ+KSB7XHJcbiAgICAgICAgdGhpcy5wYXJlbnRFbGVtZW50ID0gZWxlbWVudDtcclxuICAgICAgICB0aGlzLnRvZ2dsZUNvbHVtbkhhbmRsZXIgPSB0b2dnbGVDb2x1bW5IYW5kbGVyO1xyXG4gICAgfVxyXG4gICAgcHVibGljIG9uUmVzaXplKCk6IHZvaWQge1xyXG4gICAgICAgIGNvbnN0IHNldHRuZ3NQb3B1cCA9IHRoaXMucGFyZW50RWxlbWVudC5maW5kKFwiLmNvbHVtbi1zZXR0aW5ncy1jb250YWluZXJcIik7XHJcbiAgICAgICAgY29uc3QgdGJvZHlIZWlnaHQgPSB0aGlzLnBhcmVudEVsZW1lbnQuZmluZChcIi50YWJsZS1ib2R5XCIpLmlubmVySGVpZ2h0KCk7XHJcbiAgICAgICAgc2V0dG5nc1BvcHVwLmlubmVySGVpZ2h0KHRib2R5SGVpZ2h0IC0gMTApO1xyXG4gICAgICAgIHNldHRuZ3NQb3B1cC5maW5kKFwiLmNvbC1zZXR0aW5ncy10YWJsZVwiKS5pbm5lckhlaWdodChzZXR0bmdzUG9wdXAuaW5uZXJIZWlnaHQoKSAtXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0dG5nc1BvcHVwLmZpbmQoXCIuY29sLXNldHRpbmdzLWhlYWRlclwiKS5pbm5lckhlaWdodCgpKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgb25Eb2N1bWVudENsaWNrKGV2ZW50KTogdm9pZCB7XHJcbiAgICAgICAgY29uc3QgdGFyZ2V0RWxlbWVudCA9IGpRdWVyeShldmVudC50YXJnZXQpO1xyXG4gICAgICAgIGlmICh0YXJnZXRFbGVtZW50LmlzKFwiLmNvbC1zZXR0aW5ncy10cmlnZ2VyXCIpKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCF0YXJnZXRFbGVtZW50LnBhcmVudHMoKS5pcyhcIi5jb2x1bW4tc2V0dGluZ3MtY29udGFpbmVyXCIpKSB7XHJcbiAgICAgICAgICAgIGpRdWVyeShcIi5jb2x1bW4tc2V0dGluZ3MtY29udGFpbmVyXCIpLmhpZGUoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgUmVnaXN0ZXJEb21IYW5kbGVyKCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMucGFyZW50RWxlbWVudC5vbihcImNsaWNrXCIsIFwiLnRhYmxlLWZvb3RlciAuZm9vdGVyLWxlZnQgLmNvbC1zZXR0aW5ncy10cmlnZ2VyXCIsIChldmVudCk6IHZvaWQgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBlbGVtZW50ID0galF1ZXJ5KGV2ZW50LnRhcmdldCk7XHJcbiAgICAgICAgICAgIGNvbnN0IHNldHRuZ3NQb3B1cCA9IGVsZW1lbnQucGFyZW50cyhcIi5mb290ZXItbGVmdFwiKS5jaGlsZHJlbigpLmxhc3QoKTtcclxuICAgICAgICAgICAgdGhpcy5vblJlc2l6ZSgpO1xyXG4gICAgICAgICAgICBzZXR0bmdzUG9wdXAudG9nZ2xlKCk7XHJcbiAgICAgICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMucGFyZW50RWxlbWVudC5vbihcImtleXVwXCIsIFwiLmNvbHVtbi1zZXR0aW5ncy1jb250YWluZXIgLmNvbC1zZXR0aW5ncy1oZWFkZXIgLmNvbC1zZXR0aW5ncy1maWx0ZXJcIixcclxuICAgICAgICAgICAgKGV2ZW50KTogdm9pZCA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBlbGVtZW50ID0galF1ZXJ5KGV2ZW50LnRhcmdldCk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCB2YWwgPSBlbGVtZW50LnZhbCgpLnRvU3RyaW5nKCkudG9Mb3dlckNhc2UoKTtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHZhbCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnBhcmVudEVsZW1lbnQuZmluZChcIi5jb2wtc2V0dGluZ3MtdGFibGUgdGFibGUgdGJvZHkgdHJcIikuZWFjaCgoaTogbnVtYmVyLCBlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgalF1ZXJ5KGUpLnNob3coKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoalF1ZXJ5KGUpLmF0dHIoXCJkYXRhLWhlYWRlci1pZFwiKS50b0xvd2VyQ2FzZSgpLmluZGV4T2YodmFsKSA9PT0gLTEgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGpRdWVyeShlKS5oaWRlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICB0aGlzLnBhcmVudEVsZW1lbnQub24oXCJjbGlja1wiLCBcIi5jb2x1bW4tc2V0dGluZ3MtY29udGFpbmVyIC5zaG93LWFsbC1jb2x1bW5cIiwgKGV2ZW50KTogdm9pZCA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMucGFyZW50RWxlbWVudC5maW5kKFwiLmNvbHVtbi1zZXR0aW5ncy1jb250YWluZXIgLmNvbC1zZXR0aW5ncy1oaWRkZW4tY2hlY2tib3hcIilcclxuICAgICAgICAgICAgLmVhY2goKGluZGV4LCBlbGVtZW50KSA9PiB7XHJcbiAgICAgICAgICAgICAgICBqUXVlcnkoZWxlbWVudCkucHJvcChcImNoZWNrZWRcIiwgdHJ1ZSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB0aGlzLnRvZ2dsZUNvbHVtbkhhbmRsZXIuc2hvd0FsbENvbHVtbnMoKTtcclxuICAgICAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy5wYXJlbnRFbGVtZW50Lm9uKFwiY2xpY2tcIiwgXCIuY29sdW1uLXNldHRpbmdzLWNvbnRhaW5lciAuaGlkZS1hbGwtY29sdW1uXCIsIChldmVudCk6IHZvaWQgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLnBhcmVudEVsZW1lbnQuZmluZChcIi5jb2x1bW4tc2V0dGluZ3MtY29udGFpbmVyIC5jb2wtc2V0dGluZ3MtaGlkZGVuLWNoZWNrYm94XCIpXHJcbiAgICAgICAgICAgIC5lYWNoKChpbmRleCwgZWxlbWVudCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgalF1ZXJ5KGVsZW1lbnQpLnByb3AoXCJjaGVja2VkXCIsIGZhbHNlKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIHRoaXMudG9nZ2xlQ29sdW1uSGFuZGxlci5oaWRlQWxsQ29sdW1ucygpO1xyXG4gICAgICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICB0aGlzLnBhcmVudEVsZW1lbnQub24oXCJjbGlja1wiLCBcIi5jb2x1bW4tc2V0dGluZ3MtY29udGFpbmVyIC5jb2wtc2V0dGluZ3MtaGlkZGVuLWNoZWNrYm94XCIsIChldmVudCk6IHZvaWQgPT4ge1xyXG4gICAgICAgICAgICBpZiAoZXZlbnQub3JpZ2luYWxFdmVudCAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBjaGVja2JveCA9IGpRdWVyeShldmVudC50YXJnZXQpO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgaWQgPSBjaGVja2JveC52YWwoKS50b1N0cmluZygpO1xyXG4gICAgICAgICAgICAgICAgaWYgKGNoZWNrYm94LmlzKFwiOmNoZWNrZWRcIikpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnRvZ2dsZUNvbHVtbkhhbmRsZXIuc2hvd0NvbHVtbihpZCk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMudG9nZ2xlQ29sdW1uSGFuZGxlci5oaWRlQ29sdW1uKGlkKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL3RzbGludC1sb2FkZXI/P3JlZi0tMCEuL3NyYy9qcy9ldmVudEhhbmRsZXJzL0NvbFNldHRpbmdzSGFuZGxlci50cyIsImltcG9ydCB7IElFdmVudEhhbmRsZXIgfSBmcm9tIFwiLi9JRXZlbnRIYW5kbGVyXCI7XHJcbmV4cG9ydCBjbGFzcyBEZXRhaWxzUm93SGFuZGxlcjxUPiBpbXBsZW1lbnRzIElFdmVudEhhbmRsZXI8VD4ge1xyXG4gICAgcHJpdmF0ZSBwYXJlbnRFbGVtZW50OiBKUXVlcnk7XHJcblxyXG4gICAgY29uc3RydWN0b3IoZWxlbWVudDogSlF1ZXJ5KSB7XHJcbiAgICAgICAgdGhpcy5wYXJlbnRFbGVtZW50ID0gZWxlbWVudDtcclxuICAgIH1cclxuICAgIHB1YmxpYyBvblJlc2l6ZSgpOiB2b2lkIHtcclxuICAgICAgICAvLyBOb3RoaW5nIHRvIERvLlxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBvbkRvY3VtZW50Q2xpY2soZXZlbnQpOiB2b2lkIHtcclxuICAgICAgICAvLyBOb3RoaW5nIHRvIERvLlxyXG4gICAgfVxyXG4gICAgcHVibGljIFJlZ2lzdGVyRG9tSGFuZGxlciA9ICgpOiB2b2lkID0+IHtcclxuICAgICAgICB0aGlzLnBhcmVudEVsZW1lbnQub24oXCJjbGlja1wiLCBcIi50YWJsZS1ib2R5IC5leHBhbnNpb25BcnJvd3MgaVwiLCAoZXZlbnQpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgYXJyb3cgPSBqUXVlcnkoZXZlbnQudGFyZ2V0KTtcclxuICAgICAgICAgICAgY29uc3QgZGV0YWlsc1JvdyA9IGFycm93LmNsb3Nlc3QoXCJ0clwiKS5uZXh0KCk7XHJcbiAgICAgICAgICAgIGNvbnN0IGN1cnJlbnRJY29uID0gYXJyb3cuaGlkZSgpO1xyXG4gICAgICAgICAgICBjb25zdCBvdGhlckljb24gPSBhcnJvdy5zaWJsaW5ncyhcImlcIikuc2hvdygpO1xyXG4gICAgICAgICAgICBpZiAoYXJyb3cuaGFzQ2xhc3MoXCJleHBhbmREZXRhaWxzUm93SWNvblwiKSkge1xyXG4gICAgICAgICAgICAgICAgZGV0YWlsc1Jvdy5zaG93KCk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBkZXRhaWxzUm93LmhpZGUoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvdHNsaW50LWxvYWRlcj8/cmVmLS0wIS4vc3JjL2pzL2V2ZW50SGFuZGxlcnMvRGV0YWlsc1Jvd0hhbmRsZXIudHMiLCJpbXBvcnQgeyBDb25maWdTdG9yZSB9IGZyb20gXCIuLi9jb25maWcvQ29uZmlnU3RvcmVcIjtcclxuaW1wb3J0IHsgSUdyaWRPcHRpb25zIH0gZnJvbSBcIi4uL21haW4vSUdyaWRPcHRpb25zXCI7XHJcbmltcG9ydCB7IENvbW1vblV0aWwgfSBmcm9tIFwiLi4vdXRpbC9Db2x1bW5VdGlsXCI7XHJcbmltcG9ydCB7IEZpbHRlckFjdGlvblR5cGUgfSBmcm9tIFwiLi8uLi9tb2RlbHMvRmlsdGVyQWN0aW9uVHlwZVwiO1xyXG5pbXBvcnQgeyBJRmlsdGVyQ2xpY2tEZWxlZ2F0ZSB9IGZyb20gXCIuLy4uL21vZGVscy9JRmlsdGVyQ2xpY2tEZWxlZ2F0ZVwiO1xyXG5pbXBvcnQgeyBJRXZlbnRIYW5kbGVyIH0gZnJvbSBcIi4vSUV2ZW50SGFuZGxlclwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIEZpbHRlckNsaWNrSGFuZGxlcjxUPiBpbXBsZW1lbnRzIElFdmVudEhhbmRsZXI8VD4ge1xyXG4gICAgcHJpdmF0ZSBjb25maWdTdG9yZTogQ29uZmlnU3RvcmU8VD47XHJcbiAgICBwcml2YXRlIHBhcmVudEVsZW1lbnQ6IEpRdWVyeTtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihjb25maWdTdG9yZTogQ29uZmlnU3RvcmU8VD4sIGVsZW1lbnQ6IEpRdWVyeSkge1xyXG4gICAgICAgIHRoaXMuY29uZmlnU3RvcmUgPSBjb25maWdTdG9yZTtcclxuICAgICAgICB0aGlzLnBhcmVudEVsZW1lbnQgPSBlbGVtZW50O1xyXG4gICAgfVxyXG4gICAgcHVibGljIG9uUmVzaXplKCk6IHZvaWQge1xyXG4gICAgICAgIC8vIE5vdGhpbmcgdG8gRG8uXHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIG9uRG9jdW1lbnRDbGljayhldmVudCk6IHZvaWQge1xyXG4gICAgICAgIC8vIE5vdGhpbmcgdG8gRG8uXHJcbiAgICB9XHJcbiAgICBwdWJsaWMgUmVnaXN0ZXJEb21IYW5kbGVyID0gKCk6IHZvaWQgPT4ge1xyXG4gICAgICAgIHRoaXMucGFyZW50RWxlbWVudC5vbihcImNsaWNrXCIsIFwiLnRhYmxlLWJvZHkgLmRldGFpbHNSb3cgLmRldGFpbHNUYWJsZSB0ZCBpXCIsIChldmVudCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBlbGVtZW50ID0galF1ZXJ5KGV2ZW50LnRhcmdldCk7XHJcbiAgICAgICAgICAgIGNvbnN0IHBhcmVudFRkID0gZWxlbWVudC5wYXJlbnRzKFwidGRcIik7XHJcbiAgICAgICAgICAgIGNvbnN0IGtleSA9IHBhcmVudFRkLmF0dHIoXCJkYXRhLWZpbHRlci1rZXlcIik7XHJcbiAgICAgICAgICAgIGNvbnN0IHZhbHVlID0gcGFyZW50VGQuYXR0cihcImRhdGEtZmlsdGVyLXZhbHVlXCIpO1xyXG4gICAgICAgICAgICBjb25zdCBjb2wgPSBDb21tb25VdGlsLkdldENvbHVtbk9iamVjdChrZXksIHRoaXMuY29uZmlnU3RvcmUuT3B0aW9ucy5jb2x1bW5zKTtcclxuICAgICAgICAgICAgaWYgKGNvbCA9PT0gdW5kZWZpbmVkIHx8IGNvbCA9PT0gbnVsbCB8fCAhY29sLmZpbHRlcmFibGUgKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgbGV0IGZpbHRlckFjdGlvbjogRmlsdGVyQWN0aW9uVHlwZSA9IEZpbHRlckFjdGlvblR5cGUuQWRkO1xyXG4gICAgICAgICAgICBpZiAoZWxlbWVudC5oYXNDbGFzcyhcInJlbW92ZUZpbHRlclwiKSkge1xyXG4gICAgICAgICAgICAgICAgZmlsdGVyQWN0aW9uID0gRmlsdGVyQWN0aW9uVHlwZS5NaW51cztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLmNvbmZpZ1N0b3JlLk9wdGlvbnMub25DbGlja0ZpbHRlcihrZXksIHZhbHVlLCBmaWx0ZXJBY3Rpb24pO1xyXG4gICAgICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvdHNsaW50LWxvYWRlcj8/cmVmLS0wIS4vc3JjL2pzL2V2ZW50SGFuZGxlcnMvRmlsdGVyQ2xpY2tIYW5kbGVyLnRzIiwiZXhwb3J0IGVudW0gRmlsdGVyQWN0aW9uVHlwZSB7XHJcbiAgICBBZGQgPSBcIkFkZFwiLFxyXG4gICAgTWludXMgPSBcIk1pbnVzXCIsXHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL3RzbGludC1sb2FkZXI/P3JlZi0tMCEuL3NyYy9qcy9tb2RlbHMvRmlsdGVyQWN0aW9uVHlwZS50cyIsImV4cG9ydCBlbnVtIEhhbmRsZXJOYW1lcyB7XHJcbiAgICBGaWx0ZXJBY3Rpb24sXHJcbiAgICBIZWFkZXJDbGljayxcclxuICAgIFNjcm9sbCxcclxuICAgIFBhZ2VTZWFyY2gsXHJcbiAgICBEZXRhaWxzUm93LFxyXG4gICAgVG9nZ2xlQ29sdW1uLFxyXG4gICAgQ29sU2V0dGluZ3MsXHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL3RzbGludC1sb2FkZXI/P3JlZi0tMCEuL3NyYy9qcy9ldmVudEhhbmRsZXJzL0hhbmRsZXJOYW1lcy50cyIsImltcG9ydCB7IENvbmZpZ1N0b3JlIH0gZnJvbSBcIi4uL2NvbmZpZy9Db25maWdTdG9yZVwiO1xyXG5pbXBvcnQgeyBJR3JpZE9wdGlvbnMgfSBmcm9tIFwiLi4vbWFpbi9JR3JpZE9wdGlvbnNcIjtcclxuaW1wb3J0IHsgQ29tbW9uVXRpbCB9IGZyb20gXCIuLi91dGlsL0NvbHVtblV0aWxcIjtcclxuaW1wb3J0IHtJSGVhZGVyQ2xpY2tEZWxlZ2F0ZX0gZnJvbSBcIi4vLi4vbW9kZWxzL0lIZWFkZXJDbGlja0RlbGVnYXRlXCI7XHJcbmltcG9ydCB7IE9yZGVyRGlyZWN0aW9uIH0gZnJvbSBcIi4vLi4vbW9kZWxzL09yZGVyRGlyZWN0aW9uXCI7XHJcbmltcG9ydCB7IElFdmVudEhhbmRsZXIgfSBmcm9tIFwiLi9JRXZlbnRIYW5kbGVyXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgSGVhZGVyQ2xpY2tIYW5kbGVyPFQ+IGltcGxlbWVudHMgSUV2ZW50SGFuZGxlcjxUPiB7XHJcbiAgICBwcml2YXRlIHBhcmVudEVsZW1lbnQ6IEpRdWVyeTtcclxuICAgIHByaXZhdGUgY29uZmlnU3RvcmU6IENvbmZpZ1N0b3JlPFQ+O1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKGNvbmZpZ1N0b3JlOiBDb25maWdTdG9yZTxUPiwgZWxlbWVudDogSlF1ZXJ5KSB7XHJcbiAgICAgICAgdGhpcy5jb25maWdTdG9yZSA9IGNvbmZpZ1N0b3JlO1xyXG4gICAgICAgIHRoaXMucGFyZW50RWxlbWVudCA9IGVsZW1lbnQ7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIG9uUmVzaXplKCk6IHZvaWQge1xyXG4gICAgICAgIC8vIE5vdGhpbmcgdG8gRG8uXHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIG9uRG9jdW1lbnRDbGljayhldmVudCk6IHZvaWQge1xyXG4gICAgICAgIC8vIE5vdGhpbmcgdG8gRG8uXHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIFJlZ2lzdGVyRG9tSGFuZGxlciA9ICgpOiB2b2lkID0+IHtcclxuICAgICAgICAvLyBSZWdpc3RlcmluZyBKUXVlcnkgRXZlbnQgSGFuZGxlciBpZiBIZWFkZXIgaXMgQ2xpY2tlZC5cclxuICAgICAgICB0aGlzLnBhcmVudEVsZW1lbnQub24oXCJjbGlja1wiLCBcIi50YWJsZS1oZWFkZXIgdGhcIiwgKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IGVsZW1lbnQgPSBqUXVlcnkoZXZlbnQudGFyZ2V0KS5jbG9zZXN0KFwidGhcIik7XHJcbiAgICAgICAgICAgIGNvbnN0IGhlYWRlcklkID0gZWxlbWVudC5hdHRyKFwiZGF0YS1oZWFkZXItaWRcIik7XHJcbiAgICAgICAgICAgIGNvbnN0IGNvbCA9IENvbW1vblV0aWwuR2V0Q29sdW1uT2JqZWN0KGhlYWRlcklkLCB0aGlzLmNvbmZpZ1N0b3JlLk9wdGlvbnMuY29sdW1ucyk7XHJcbiAgICAgICAgICAgIGlmIChjb2wgPT09IHVuZGVmaW5lZCB8fCBjb2wgPT09IG51bGwgfHwgIWNvbC5zb3J0YWJsZSApIHtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjb25zdCBhcnJvd0ljb25zID0gZWxlbWVudC5maW5kKFwiaVwiKTtcclxuICAgICAgICAgICAgY29uc3QgdXBBcnJvd0ljb24gPSBhcnJvd0ljb25zLmZpcnN0KCk7XHJcbiAgICAgICAgICAgIGNvbnN0IGRvd25BcnJvd0ljb24gPSBhcnJvd0ljb25zLmxhc3QoKTtcclxuICAgICAgICAgICAgbGV0IGRpcmVjdGlvbjogT3JkZXJEaXJlY3Rpb247XHJcbiAgICAgICAgICAgIGlmIChhcnJvd0ljb25zLmlzKFwiOnZpc2libGVcIikpIHtcclxuICAgICAgICAgICAgICAgIGlmICh1cEFycm93SWNvbi5pcyhcIjp2aXNpYmxlXCIpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlyZWN0aW9uID0gT3JkZXJEaXJlY3Rpb24uRGVzYztcclxuICAgICAgICAgICAgICAgICAgICB1cEFycm93SWNvbi5oaWRlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgZG93bkFycm93SWNvbi5zaG93KCk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGRpcmVjdGlvbiA9IE9yZGVyRGlyZWN0aW9uLkFzYztcclxuICAgICAgICAgICAgICAgICAgICBkb3duQXJyb3dJY29uLmhpZGUoKTtcclxuICAgICAgICAgICAgICAgICAgICB1cEFycm93SWNvbi5zaG93KCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBkaXJlY3Rpb24gPSBPcmRlckRpcmVjdGlvbi5Bc2M7XHJcbiAgICAgICAgICAgICAgICB1cEFycm93SWNvbi5zaG93KCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5jb25maWdTdG9yZS5PcHRpb25zLm9uQ2xpY2tIZWFkZXIoaGVhZGVySWQsIGRpcmVjdGlvbik7XHJcbiAgICAgICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy90c2xpbnQtbG9hZGVyPz9yZWYtLTAhLi9zcmMvanMvZXZlbnRIYW5kbGVycy9IZWFkZXJDbGlja0hhbmRsZXIudHMiLCJleHBvcnQgZW51bSBPcmRlckRpcmVjdGlvbiB7XHJcbiAgICBBc2MgPSBcIkFzY1wiLFxyXG4gICAgRGVzYyA9IFwiRGVzY1wiLFxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy90c2xpbnQtbG9hZGVyPz9yZWYtLTAhLi9zcmMvanMvbW9kZWxzL09yZGVyRGlyZWN0aW9uLnRzIiwiaW1wb3J0ICogYXMgalF1ZXJ5IGZyb20gXCJqcXVlcnlcIjtcclxuaW1wb3J0IHsgQ29uZmlnU3RvcmUgfSBmcm9tIFwiLi4vY29uZmlnL0NvbmZpZ1N0b3JlXCI7XHJcbmltcG9ydCB7IFBhZ2VyIH0gZnJvbSBcIi4uL3BhZ2luYXRpb24vUGFnZXJcIjtcclxuaW1wb3J0IHsgSVBhZ2VTZWFyY2hDbGlja0RlbGVnYXRlIH0gZnJvbSBcIi4vLi4vbW9kZWxzL0lQYWdlU2VhcmNoQ2xpY2tEZWxlZ2F0ZVwiO1xyXG5pbXBvcnQgeyBJUGFnaW5hdGlvbiB9IGZyb20gXCIuLy4uL21vZGVscy9JUGFnaW5hdGlvblwiO1xyXG5pbXBvcnQgeyBJRXZlbnRIYW5kbGVyIH0gZnJvbSBcIi4vSUV2ZW50SGFuZGxlclwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIFBhZ2VTZWFyY2hIYW5kbGVyPFQ+IGltcGxlbWVudHMgSUV2ZW50SGFuZGxlcjxUPiB7XHJcbiAgICBwcml2YXRlIGNvbmZpZ1N0b3JlOiBDb25maWdTdG9yZTxUPjtcclxuICAgIHByaXZhdGUgcGFyZW50RWxlbWVudDogSlF1ZXJ5O1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKGNvbmZpZ1N0b3JlOiBDb25maWdTdG9yZTxUPiwgZWxlbWVudDogSlF1ZXJ5KSB7XHJcbiAgICAgICAgdGhpcy5jb25maWdTdG9yZSA9IGNvbmZpZ1N0b3JlO1xyXG4gICAgICAgIHRoaXMucGFyZW50RWxlbWVudCA9IGVsZW1lbnQ7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgb25SZXNpemUoKTogdm9pZCB7XHJcbiAgICAgICAgLy8gdGhyb3cgbmV3IEVycm9yKFwiTWV0aG9kIG5vdCBpbXBsZW1lbnRlZC5cIik7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIG9uRG9jdW1lbnRDbGljaygpOiB2b2lkIHtcclxuICAgICAgICAvLyB0aHJvdyBuZXcgRXJyb3IoXCJNZXRob2Qgbm90IGltcGxlbWVudGVkLlwiKTtcclxuICAgIH1cclxuICAgIHB1YmxpYyBSZWdpc3RlckRvbUhhbmRsZXIgPSAoKTogdm9pZCA9PiB7XHJcbiAgICAgICAgdGhpcy5wYXJlbnRFbGVtZW50Lm9uKFwiY2xpY2tcIiwgXCIudGFibGUtZm9vdGVyIC5maXJzdExpbmtcIiwgKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuY29uZmlnU3RvcmUub3B0aW9ucy5vblBhZ2VTZWFyY2goUGFnZXIuUGFnaW5hdGlvbkRhdGEucGFnZVNpemUsIDEpO1xyXG4gICAgICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICB0aGlzLnBhcmVudEVsZW1lbnQub24oXCJjbGlja1wiLCBcIi50YWJsZS1mb290ZXIgLm5leHRMaW5rXCIsIChldmVudCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmNvbmZpZ1N0b3JlLm9wdGlvbnMub25QYWdlU2VhcmNoKFBhZ2VyLlBhZ2luYXRpb25EYXRhLnBhZ2VTaXplLCBQYWdlci5QYWdpbmF0aW9uRGF0YS5wYWdlSW5kZXggKyAxKTtcclxuICAgICAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy5wYXJlbnRFbGVtZW50Lm9uKFwiY2xpY2tcIiwgXCIudGFibGUtZm9vdGVyIC5wcmV2TGlua1wiLCAoZXZlbnQpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5jb25maWdTdG9yZS5vcHRpb25zLm9uUGFnZVNlYXJjaChQYWdlci5QYWdpbmF0aW9uRGF0YS5wYWdlU2l6ZSwgUGFnZXIuUGFnaW5hdGlvbkRhdGEucGFnZUluZGV4IC0gMSk7XHJcbiAgICAgICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMucGFyZW50RWxlbWVudC5vbihcImNsaWNrXCIsIFwiLnRhYmxlLWZvb3RlciAubGFzdExpbmtcIiwgKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuY29uZmlnU3RvcmUub3B0aW9ucy5vblBhZ2VTZWFyY2goUGFnZXIuUGFnaW5hdGlvbkRhdGEucGFnZVNpemUsIFBhZ2VyLlBhZ2luYXRpb25EYXRhLm5vT2ZQYWdlcyk7XHJcbiAgICAgICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMucGFyZW50RWxlbWVudC5vbihcImNoYW5nZVwiLCBcIi50YWJsZS1mb290ZXIgLnBhZ2VTaXplU2VsZWN0b3JcIiwgKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IHZhbDogbnVtYmVyID0gK2pRdWVyeShldmVudC50YXJnZXQpLnZhbCgpLnRvU3RyaW5nKCk7XHJcbiAgICAgICAgICAgIHRoaXMuY29uZmlnU3RvcmUub3B0aW9ucy5vblBhZ2VTZWFyY2godmFsLCBQYWdlci5QYWdpbmF0aW9uRGF0YS5wYWdlSW5kZXgpO1xyXG4gICAgICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICB0aGlzLnBhcmVudEVsZW1lbnQub24oXCJrZXlwcmVzc1wiLCBcIi50YWJsZS1mb290ZXIgLnBhZ2VyLWlucHV0XCIsIChldmVudCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBpcCA9IGpRdWVyeShldmVudC50YXJnZXQpO1xyXG4gICAgICAgICAgICBjb25zdCBwYWdlRGF0YSA9IFBhZ2VyLlBhZ2luYXRpb25EYXRhO1xyXG4gICAgICAgICAgICBpZiAoZXZlbnQua2V5Q29kZSA9PT0gMTMpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHZhbDogbnVtYmVyID0gK2lwLnZhbCgpLnRvU3RyaW5nKCk7XHJcbiAgICAgICAgICAgICAgICBpZiAoaXNOYU4odmFsKSB8fCB2YWwgPiBwYWdlRGF0YS5ub09mUGFnZXMgfHwgdmFsIDwgMSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlwLnZhbChwYWdlRGF0YS5wYWdlSW5kZXgpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbmZpZ1N0b3JlLm9wdGlvbnMub25QYWdlU2VhcmNoKHBhZ2VEYXRhLnBhZ2VTaXplLCB2YWwpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy90c2xpbnQtbG9hZGVyPz9yZWYtLTAhLi9zcmMvanMvZXZlbnRIYW5kbGVycy9QYWdlU2VhcmNoQ2xpY2tIYW5kbGVyLnRzIiwiaW1wb3J0IHsgQ29uZmlnU3RvcmUgfSBmcm9tIFwiLi4vY29uZmlnL0NvbmZpZ1N0b3JlXCI7XHJcbmltcG9ydCB7IE9yZGVyRGlyZWN0aW9uIH0gZnJvbSBcIi4vLi4vbW9kZWxzL09yZGVyRGlyZWN0aW9uXCI7XHJcbmltcG9ydCB7IEdyaWRUZW1wbGF0ZVNlcnZpY2UgfSBmcm9tIFwiLi8uLi9zZXJ2aWNlcy9HcmlkVGVtcGxhdGVTZXJ2aWNlXCI7XHJcbmltcG9ydCB7IElJbmRleENvdW50ZXIgfSBmcm9tIFwiLi8uLi92aXJ0dWFsaXphdGlvbi9JbmRleENvdW50ZXJcIjtcclxuaW1wb3J0IHsgU2Nyb2xsRGlyZWN0aW9uIH0gZnJvbSBcIi4vLi4vdmlydHVhbGl6YXRpb24vU2Nyb2xsRGlyZWN0aW9uXCI7XHJcbmltcG9ydCB7IFZpcnR1YWxpemVyIH0gZnJvbSBcIi4vLi4vdmlydHVhbGl6YXRpb24vVmlydHVhbGl6ZXJcIjtcclxuaW1wb3J0IHsgSUV2ZW50SGFuZGxlciB9IGZyb20gXCIuL0lFdmVudEhhbmRsZXJcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBTY3JvbGxIYW5kbGVyPFQ+IGltcGxlbWVudHMgSUV2ZW50SGFuZGxlcjxUPiB7XHJcbiAgICBwcml2YXRlIHZpcnR1YWxpemVyOiBWaXJ0dWFsaXplcjtcclxuICAgIHByaXZhdGUgcGFyZW50RWxlbWVudDogSlF1ZXJ5O1xyXG4gICAgcHJpdmF0ZSBncmlkVGVtcGxhdGVTZXJ2aWNlOiBHcmlkVGVtcGxhdGVTZXJ2aWNlPFQ+O1xyXG4gICAgcHJpdmF0ZSByZW5kZXJpbmc6IGJvb2xlYW4gPSAgZmFsc2U7XHJcbiAgICBwcml2YXRlIGNvbmZpZ1N0b3JlOiBDb25maWdTdG9yZTxUPjtcclxuICAgIHByaXZhdGUgbGVmdE9mZnNldDogbnVtYmVyO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKGNvbmZpZ1N0b3JlOiBDb25maWdTdG9yZTxUPiwgZ3JpZFRlbXBsYXRlU2VydmljZTogR3JpZFRlbXBsYXRlU2VydmljZTxUPikge1xyXG4gICAgICAgIHRoaXMuY29uZmlnU3RvcmUgPSBjb25maWdTdG9yZTtcclxuICAgICAgICB0aGlzLnBhcmVudEVsZW1lbnQgPSBqUXVlcnkodGhpcy5jb25maWdTdG9yZS5PcHRpb25zLmNvbnRhaW5lckVsZW1lbnQpO1xyXG4gICAgICAgIHRoaXMuZ3JpZFRlbXBsYXRlU2VydmljZSA9IGdyaWRUZW1wbGF0ZVNlcnZpY2U7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgb25SZXNpemUoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5sZWZ0T2Zmc2V0ID0gdGhpcy5wYXJlbnRFbGVtZW50LmZpbmQoXCIudGFibGUtaGVhZGVyXCIpLm9mZnNldCgpLmxlZnQ7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIG9uRG9jdW1lbnRDbGljayhldmVudCk6IHZvaWQge1xyXG4gICAgICAgIC8vIHRocm93IG5ldyBFcnJvcihcIk1ldGhvZCBub3QgaW1wbGVtZW50ZWQuXCIpO1xyXG4gICAgfVxyXG4gICAgcHVibGljIFJlZ2lzdGVyRG9tSGFuZGxlciA9ICgpOiB2b2lkID0+IHtcclxuICAgICAgICAvLyBSZWdpc3RlcmluZyBKUXVlcnkgRXZlbnQgSGFuZGxlciBpZiBIZWFkZXIgaXMgQ2xpY2tlZC5cclxuICAgICAgICB0aGlzLnBhcmVudEVsZW1lbnQuZmluZChcIi50YWJsZS1ib2R5XCIpLm9uKFwic2Nyb2xsXCIsIChldmVudCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCB0Qm9keU9iaiA9IHRoaXMucGFyZW50RWxlbWVudC5maW5kKFwiLnRhYmxlLWJvZHlcIik7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmxlZnRPZmZzZXQgPT09IHVuZGVmaW5lZCB8fCB0aGlzLmxlZnRPZmZzZXQgPT09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMubGVmdE9mZnNldCA9IHRoaXMucGFyZW50RWxlbWVudC5maW5kKFwiLnRhYmxlLWhlYWRlclwiKS5vZmZzZXQoKS5sZWZ0O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMucGFyZW50RWxlbWVudC5maW5kKFwiLnRhYmxlLWhlYWRlclwiKS5vZmZzZXQoXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGVmdDogdGhpcy5sZWZ0T2Zmc2V0ICsgLTEgKiB0Qm9keU9iai5zY3JvbGxMZWZ0KCksXHJcbiAgICAgICAgICAgICAgICAgICAgdG9wOiAwLFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgY29uc3QgYWN0dWFsVGFibGVIZWlnaHQgPSB0Qm9keU9iai5maW5kKFwiLm1haW5UYWJsZVwiKS5oZWlnaHQoKTtcclxuICAgICAgICAgICAgdGhpcy5WaXJ0dWFsaXplci5UYWJsZUhlaWdodCA9IGFjdHVhbFRhYmxlSGVpZ2h0O1xyXG4gICAgICAgICAgICB0aGlzLlZpcnR1YWxpemVyLlNjcm9sbENvbnRhaW5lckhlaWdodCA9IHRCb2R5T2JqLmhlaWdodCgpO1xyXG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICBpZiAodGhpcy5yZW5kZXJpbmcpIHtcclxuICAgICAgICAgICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNvbnN0IHNjcm9sbFRvcCA9IHRCb2R5T2JqLnNjcm9sbFRvcCgpO1xyXG4gICAgICAgICAgICBjb25zdCBpbmRleENvdW50ZXI6IElJbmRleENvdW50ZXIgPSB0aGlzLlZpcnR1YWxpemVyLkdldEluZGV4Q291bnRlckZvclNjcm9sbChzY3JvbGxUb3ApO1xyXG4gICAgICAgICAgICBzd2l0Y2ggKGluZGV4Q291bnRlci5kaXJlY3Rpb24pIHtcclxuICAgICAgICAgICAgICAgIGNhc2UgU2Nyb2xsRGlyZWN0aW9uLkRvd246XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGluZGV4Q291bnRlci5yZW5kZXJpbmdSZXF1aXJlZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnJlbmRlcmluZyA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRCb2R5T2JqLmZpbmQoXCIubWFpblRhYmxlIC5tYWluVGFibGVCb2R5XCIpLmFwcGVuZChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZ3JpZFRlbXBsYXRlU2VydmljZS5HZXRSb3dzSHRtbChpbmRleENvdW50ZXIuc3RhcnRJbmRleCwgaW5kZXhDb3VudGVyLmVuZEluZGV4KSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRCb2R5T2JqLmZpbmQoXCIubWFpblRhYmxlIC5tYWluVGFibGVCb2R5ID4gdHJcIilcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5zbGljZSgwLCB0aGlzLmNvbmZpZ1N0b3JlLm9wdGlvbnMuY2h1bmtTaXplICogMikucmVtb3ZlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucmVuZGVyaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSBTY3JvbGxEaXJlY3Rpb24uVXA6XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGluZGV4Q291bnRlci5yZW5kZXJpbmdSZXF1aXJlZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnJlbmRlcmluZyA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRCb2R5T2JqLmZpbmQoXCIubWFpblRhYmxlIC5tYWluVGFibGVCb2R5XCIpLnByZXBlbmRcclxuICAgICAgICAgICAgICAgICAgICAgICAgKHRoaXMuZ3JpZFRlbXBsYXRlU2VydmljZS5HZXRSb3dzSHRtbChpbmRleENvdW50ZXIuc3RhcnRJbmRleCwgaW5kZXhDb3VudGVyLmVuZEluZGV4KSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRCb2R5T2JqLmZpbmQoXCIubWFpblRhYmxlIC5tYWluVGFibGVCb2R5ID4gdHJcIilcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5zbGljZSgodGhpcy5jb25maWdTdG9yZS5vcHRpb25zLmNodW5rU2l6ZSAqIC0yKSkucmVtb3ZlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucmVuZGVyaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgcHJpdmF0ZSBnZXQgVmlydHVhbGl6ZXIoKTogVmlydHVhbGl6ZXIge1xyXG4gICAgICAgIGlmICh0aGlzLnZpcnR1YWxpemVyID09PSBudWxsIHx8IHRoaXMudmlydHVhbGl6ZXIgPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy52aXJ0dWFsaXplciA9IG5ldyBWaXJ0dWFsaXplcih0aGlzLmNvbmZpZ1N0b3JlLm9wdGlvbnMuY2h1bmtTaXplLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAyNSwgdGhpcy5ncmlkVGVtcGxhdGVTZXJ2aWNlLkRhdGFMZW5ndGgpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnZpcnR1YWxpemVyO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvdHNsaW50LWxvYWRlcj8/cmVmLS0wIS4vc3JjL2pzL2V2ZW50SGFuZGxlcnMvU2Nyb2xsSGFuZGxlci50cyIsImltcG9ydCB7IEdldERlZmF1bHRJbmRleENvdW50ZXIsIElJbmRleENvdW50ZXIgfSBmcm9tIFwiLi9JbmRleENvdW50ZXJcIjtcclxuaW1wb3J0IHsgU2Nyb2xsRGlyZWN0aW9uIH0gZnJvbSBcIi4vU2Nyb2xsRGlyZWN0aW9uXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgVmlydHVhbGl6ZXIge1xyXG4gICAgcHJpdmF0ZSBjdXJyZW50SW5kZXhDb3VudGVyOiBJSW5kZXhDb3VudGVyO1xyXG4gICAgcHJpdmF0ZSBsYXN0U2Nyb2xsUG9zaXRpb246IG51bWJlcjtcclxuICAgIHByaXZhdGUgbGVuZ3RoOiBudW1iZXI7XHJcbiAgICBwcml2YXRlIGNodW5rU2l6ZTogbnVtYmVyO1xyXG4gICAgcHJpdmF0ZSBzY3JvbGxDb250YWluZXJIZWlnaHQ6IG51bWJlcjtcclxuICAgIHByaXZhdGUgdGFibGVIZWlnaHQ6IG51bWJlcjtcclxuICAgIHByaXZhdGUgaW5pdGlhbFJvd0NvdW50OiBudW1iZXI7XHJcblxyXG4gICAgY29uc3RydWN0b3IoY2h1bmtTaXplOiBudW1iZXIsIGluaXRpYWxSb3dDb3VudDogbnVtYmVyLCBsZW5ndGg6IG51bWJlcikge1xyXG4gICAgICAgIHRoaXMubGFzdFNjcm9sbFBvc2l0aW9uID0gMDtcclxuICAgICAgICB0aGlzLmxlbmd0aCA9IGxlbmd0aDtcclxuICAgICAgICB0aGlzLmNodW5rU2l6ZSA9IGNodW5rU2l6ZTtcclxuICAgICAgICB0aGlzLmluaXRpYWxSb3dDb3VudCA9IGluaXRpYWxSb3dDb3VudDtcclxuICAgICAgICB0aGlzLmN1cnJlbnRJbmRleENvdW50ZXIgPSBHZXREZWZhdWx0SW5kZXhDb3VudGVyKGluaXRpYWxSb3dDb3VudCwgY2h1bmtTaXplKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgR2V0SW5kZXhDb3VudGVyRm9yU2Nyb2xsID0gKHNjcm9sbFRvcDogbnVtYmVyKTogSUluZGV4Q291bnRlciA9PiB7XHJcbiAgICAgICAgbGV0IG5ld0NvdW50ZXI6IElJbmRleENvdW50ZXIgPSBHZXREZWZhdWx0SW5kZXhDb3VudGVyKHRoaXMuY2h1bmtTaXplLCB0aGlzLmluaXRpYWxSb3dDb3VudCk7XHJcbiAgICAgICAgbmV3Q291bnRlci5kaXJlY3Rpb24gPSB0aGlzLkdldFNjcm9sbERpcmVjdGlvbihzY3JvbGxUb3ApO1xyXG4gICAgICAgIHN3aXRjaCAobmV3Q291bnRlci5kaXJlY3Rpb24pIHtcclxuICAgICAgICAgICAgLy8gQ2FsY3VsYXRlIEluZGV4IENvdW50ZXJzIGZvciBEb3duIE1vdmVtZW50XHJcbiAgICAgICAgICAgIGNhc2UgU2Nyb2xsRGlyZWN0aW9uLkRvd246XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5jdXJyZW50SW5kZXhDb3VudGVyLmxhc3RJbmRleCA+PSB0aGlzLmxlbmd0aCAtIDEpIHtcclxuICAgICAgICAgICAgICAgICAgICBuZXdDb3VudGVyLmVuZFJlYWNoZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBuZXdDb3VudGVyLmVuZFJlYWNoZWQgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBkaWZmID0gKHNjcm9sbFRvcCArIHRoaXMuU2Nyb2xsQ29udGFpbmVySGVpZ2h0KSAtICh0aGlzLlRhYmxlSGVpZ2h0ICogMC44ICk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGRpZmYgPiAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5ld0NvdW50ZXIucmVuZGVyaW5nUmVxdWlyZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBuZXdDb3VudGVyID0gdGhpcy5Qb3B1bGF0ZUluZGV4Q291bnRlckZvckRvd24obmV3Q291bnRlcik7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgU2Nyb2xsRGlyZWN0aW9uLlVwOlxyXG4gICAgICAgICAgICAgICAgLy8gQ2FsY3VsYXRlIEluZGV4IENvdW50ZXJzIGZvciBVcCBNb3ZlbWVudFxyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuY3VycmVudEluZGV4Q291bnRlci5maXJzdEluZGV4IDw9IDApIHtcclxuICAgICAgICAgICAgICAgICAgICBuZXdDb3VudGVyLmVuZFJlYWNoZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBuZXdDb3VudGVyLmVuZFJlYWNoZWQgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBkaWZmID0gc2Nyb2xsVG9wIC0gKHRoaXMuVGFibGVIZWlnaHQgLSB0aGlzLlNjcm9sbENvbnRhaW5lckhlaWdodCkgKiAwLjE7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGRpZmYgPCAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5ld0NvdW50ZXIucmVuZGVyaW5nUmVxdWlyZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBuZXdDb3VudGVyID0gdGhpcy5Qb3B1bGF0ZUluZGV4Q291bnRlckZvclVwKG5ld0NvdW50ZXIpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAobmV3Q291bnRlci5yZW5kZXJpbmdSZXF1aXJlZCkge1xyXG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRJbmRleENvdW50ZXIgPSBuZXdDb3VudGVyO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmxhc3RTY3JvbGxQb3NpdGlvbiA9IHNjcm9sbFRvcDtcclxuICAgICAgICAvLyB0aGlzLlByaW50KG5ld0NvdW50ZXIsIHRoaXMuY3VycmVudEluZGV4Q291bnRlcik7XHJcbiAgICAgICAgcmV0dXJuIG5ld0NvdW50ZXI7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBQcmludCA9IChuZXdDb3VudGVyOiBJSW5kZXhDb3VudGVyLCBjdXJyZW50SW5kZXhDb3VudGVyOiBJSW5kZXhDb3VudGVyKTogdm9pZCA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCIgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiBcIik7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCIgU2Nyb2xsIFBvc2l0aW9uIC0gXCIgKyB0aGlzLmxhc3RTY3JvbGxQb3NpdGlvbik7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCIgTGVuZ3RoICAtIFwiICsgdGhpcy5sZW5ndGgpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiIC0tLS0tLS0tLS0tLSAgQ1VSUkVOVCAtLS0tLS0tLS0tIFwiKTtcclxuICAgICAgICBPYmplY3Qua2V5cyhjdXJyZW50SW5kZXhDb3VudGVyKS5mb3JFYWNoKCh2YWwsIGluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHZhbCArIFwiIC0gXCIgKyBjdXJyZW50SW5kZXhDb3VudGVyW3ZhbF0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiIC0tLS0tLS0tLS0tLSAgTkVXIC0tLS0tLS0tLS0gXCIpO1xyXG4gICAgICAgIE9iamVjdC5rZXlzKG5ld0NvdW50ZXIpLmZvckVhY2goKHZhbCwgaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2codmFsICsgXCIgLSBcIiArIG5ld0NvdW50ZXJbdmFsXSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCIgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiBcIik7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBQb3B1bGF0ZUluZGV4Q291bnRlckZvckRvd24gPSAoY291bnRlcjogSUluZGV4Q291bnRlcik6IElJbmRleENvdW50ZXIgPT4ge1xyXG4gICAgICAgIGNvdW50ZXIuc3RhcnRJbmRleCA9IHRoaXMuY3VycmVudEluZGV4Q291bnRlci5sYXN0SW5kZXggKyAxO1xyXG4gICAgICAgIGNvdW50ZXIuZW5kSW5kZXggICA9IHRoaXMuY3VycmVudEluZGV4Q291bnRlci5sYXN0SW5kZXggKyB0aGlzLmNodW5rU2l6ZSA+IHRoaXMubGVuZ3RoIC0gMSA/XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5sZW5ndGggLSAxIDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRJbmRleENvdW50ZXIubGFzdEluZGV4ICsgdGhpcy5jaHVua1NpemU7XHJcbiAgICAgICAgY291bnRlci5maXJzdEluZGV4ID0gdGhpcy5jdXJyZW50SW5kZXhDb3VudGVyLmZpcnN0SW5kZXggKyB0aGlzLmNodW5rU2l6ZTtcclxuICAgICAgICBjb3VudGVyLmxhc3RJbmRleCAgPSBjb3VudGVyLmVuZEluZGV4O1xyXG4gICAgICAgIHJldHVybiBjb3VudGVyO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgUG9wdWxhdGVJbmRleENvdW50ZXJGb3JVcCA9IChjb3VudGVyOiBJSW5kZXhDb3VudGVyKTogSUluZGV4Q291bnRlciA9PiB7XHJcbiAgICAgICAgY291bnRlci5zdGFydEluZGV4ID0gdGhpcy5jdXJyZW50SW5kZXhDb3VudGVyLmZpcnN0SW5kZXggLSB0aGlzLmNodW5rU2l6ZSA8IDAgP1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIDAgOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudEluZGV4Q291bnRlci5maXJzdEluZGV4IC0gdGhpcy5jaHVua1NpemU7XHJcbiAgICAgICAgY291bnRlci5lbmRJbmRleCA9IHRoaXMuY3VycmVudEluZGV4Q291bnRlci5maXJzdEluZGV4IC0gMTtcclxuICAgICAgICBjb3VudGVyLmZpcnN0SW5kZXggPSBjb3VudGVyLnN0YXJ0SW5kZXg7XHJcbiAgICAgICAgY291bnRlci5sYXN0SW5kZXggPSB0aGlzLmN1cnJlbnRJbmRleENvdW50ZXIubGFzdEluZGV4IC0gdGhpcy5jaHVua1NpemU7XHJcbiAgICAgICAgcmV0dXJuIGNvdW50ZXI7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBHZXRTY3JvbGxEaXJlY3Rpb24gPSAoc2Nyb2xsVG9wOiBudW1iZXIpOiBTY3JvbGxEaXJlY3Rpb24gPT4ge1xyXG4gICAgICAgIGlmICh0aGlzLmxhc3RTY3JvbGxQb3NpdGlvbiA8IHNjcm9sbFRvcCkge1xyXG4gICAgICAgICAgICByZXR1cm4gU2Nyb2xsRGlyZWN0aW9uLkRvd247XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBTY3JvbGxEaXJlY3Rpb24uVXA7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgc2V0IFNjcm9sbENvbnRhaW5lckhlaWdodChoZWlnaHQ6IG51bWJlcikge1xyXG4gICAgICAgIHRoaXMuc2Nyb2xsQ29udGFpbmVySGVpZ2h0ID0gaGVpZ2h0O1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXQgU2Nyb2xsQ29udGFpbmVySGVpZ2h0KCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnNjcm9sbENvbnRhaW5lckhlaWdodDtcclxuICAgIH1cclxuICAgIHB1YmxpYyBzZXQgVGFibGVIZWlnaHQoaGVpZ2h0OiBudW1iZXIpIHtcclxuICAgICAgICB0aGlzLnRhYmxlSGVpZ2h0ID0gaGVpZ2h0O1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXQgVGFibGVIZWlnaHQoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMudGFibGVIZWlnaHQ7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgc2V0IEluaXRpYWxSb3dDb3VudChyb3dDb3VudDogbnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy5pbml0aWFsUm93Q291bnQgPSByb3dDb3VudDtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0IEluaXRpYWxSb3dDb3VudCgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5pbml0aWFsUm93Q291bnQ7XHJcbiAgICB9XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL3RzbGludC1sb2FkZXI/P3JlZi0tMCEuL3NyYy9qcy92aXJ0dWFsaXphdGlvbi9WaXJ0dWFsaXplci50cyIsImltcG9ydCB7SUluZGV4Q291bnRlcn0gZnJvbSBcIi4vSW5kZXhDb3VudGVyXCI7XHJcbmltcG9ydCB7U2Nyb2xsRGlyZWN0aW9ufSBmcm9tIFwiLi9TY3JvbGxEaXJlY3Rpb25cIjtcclxuZXhwb3J0IGludGVyZmFjZSBJSW5kZXhDb3VudGVyIHtcclxuICAgIHN0YXJ0SW5kZXg6IG51bWJlcjtcclxuICAgIGVuZEluZGV4OiBudW1iZXI7XHJcbiAgICBmaXJzdEluZGV4OiBudW1iZXI7XHJcbiAgICBsYXN0SW5kZXg6IG51bWJlcjtcclxuICAgIGRpcmVjdGlvbjogU2Nyb2xsRGlyZWN0aW9uO1xyXG4gICAgZW5kUmVhY2hlZDogYm9vbGVhbjtcclxuICAgIHJlbmRlcmluZ1JlcXVpcmVkOiBib29sZWFuO1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgR2V0RGVmYXVsdEluZGV4Q291bnRlciA9IChyb3dDb3VudDogbnVtYmVyLCBjaHVua1NpemU6IG51bWJlcik6IElJbmRleENvdW50ZXIgPT4ge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBzdGFydEluZGV4OiByb3dDb3VudCAtIDEsXHJcbiAgICAgICAgZW5kSW5kZXg6IHJvd0NvdW50ICsgY2h1bmtTaXplIC0gMSxcclxuICAgICAgICBmaXJzdEluZGV4OiAwLFxyXG4gICAgICAgIGxhc3RJbmRleDogcm93Q291bnQgLSAxLFxyXG4gICAgICAgIGRpcmVjdGlvbjogU2Nyb2xsRGlyZWN0aW9uLkRvd24sXHJcbiAgICAgICAgZW5kUmVhY2hlZDogZmFsc2UsXHJcbiAgICAgICAgcmVuZGVyaW5nUmVxdWlyZWQ6IGZhbHNlLFxyXG4gICAgfTtcclxufTtcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL3RzbGludC1sb2FkZXI/P3JlZi0tMCEuL3NyYy9qcy92aXJ0dWFsaXphdGlvbi9JbmRleENvdW50ZXIudHMiLCJpbXBvcnQgeyBDb25maWdTdG9yZSB9IGZyb20gXCIuLi9jb25maWcvQ29uZmlnU3RvcmVcIjtcclxuaW1wb3J0IHsgSUNvbHVtbiB9IGZyb20gXCIuLy4uL21vZGVscy9JQ29sdW1uXCI7XHJcbmltcG9ydCB7IENvbW1vblV0aWwgfSBmcm9tIFwiLi8uLi91dGlsL0NvbHVtblV0aWxcIjtcclxuXHJcbmVudW0gU2hvd0hpZGUge1xyXG4gICAgU2hvdyxcclxuICAgIEhpZGUsXHJcbiAgICBTaG93QWxsLFxyXG4gICAgSGlkZUFsbCxcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIFRvZ2dsZUNvbHVtbkhhbmRsZXI8VD4ge1xyXG4gICAgcHJpdmF0ZSBjb25maWdTdG9yZTogQ29uZmlnU3RvcmU8VD47XHJcbiAgICBwcml2YXRlIHBhcmVudEVsZW1lbnQ6IEpRdWVyeTtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihjb25maWdTdG9yZTogQ29uZmlnU3RvcmU8VD4sIGVsZW1lbnQ6IEpRdWVyeSkge1xyXG4gICAgICAgIHRoaXMuY29uZmlnU3RvcmUgPSBjb25maWdTdG9yZTtcclxuICAgICAgICB0aGlzLnBhcmVudEVsZW1lbnQgPSBlbGVtZW50O1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzaG93QWxsQ29sdW1ucyA9ICgpOiB2b2lkID0+IHtcclxuICAgICAgICB0aGlzLlNldENvbFdpZHRoKFwiLnRhYmxlLWhlYWRlciAuaGVhZGVyQ29sR3JvdXAgY29sXCIsIFNob3dIaWRlLlNob3dBbGwpO1xyXG4gICAgICAgIHRoaXMuU2V0Q29sV2lkdGgoXCIudGFibGUtYm9keSAuYm9keUNvbEdyb3VwIGNvbFwiLCBTaG93SGlkZS5TaG93QWxsKTtcclxuICAgICAgICB0aGlzLmNvbmZpZ1N0b3JlLlNldEhpZGRlbk9uQ29uZmlnKGZhbHNlKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc2hvd0NvbHVtbiA9IChjb2x1bW5JZDogc3RyaW5nKTogdm9pZCA9PiB7XHJcbiAgICAgICAgdGhpcy5TZXRDb2xXaWR0aChcIi50YWJsZS1oZWFkZXIgLmhlYWRlckNvbEdyb3VwIGNvbFwiLCBTaG93SGlkZS5TaG93LCBjb2x1bW5JZCk7XHJcbiAgICAgICAgdGhpcy5TZXRDb2xXaWR0aChcIi50YWJsZS1ib2R5IC5ib2R5Q29sR3JvdXAgY29sXCIsIFNob3dIaWRlLlNob3csIGNvbHVtbklkKTtcclxuICAgICAgICB0aGlzLmNvbmZpZ1N0b3JlLlNldEhpZGRlbk9uQ29uZmlnKGZhbHNlLCBjb2x1bW5JZCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGhpZGVDb2x1bW4gPSAoY29sdW1uSWQ6IHN0cmluZyk6IHZvaWQgPT4ge1xyXG4gICAgICAgIHRoaXMuU2V0Q29sV2lkdGgoXCIudGFibGUtaGVhZGVyIC5oZWFkZXJDb2xHcm91cCBjb2xcIiwgU2hvd0hpZGUuSGlkZSwgY29sdW1uSWQpO1xyXG4gICAgICAgIHRoaXMuU2V0Q29sV2lkdGgoXCIudGFibGUtYm9keSAuYm9keUNvbEdyb3VwIGNvbFwiLCBTaG93SGlkZS5IaWRlICwgY29sdW1uSWQpO1xyXG4gICAgICAgIHRoaXMuY29uZmlnU3RvcmUuU2V0SGlkZGVuT25Db25maWcodHJ1ZSwgY29sdW1uSWQpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBoaWRlQWxsQ29sdW1ucyA9ICgpOiB2b2lkID0+IHtcclxuICAgICAgICB0aGlzLlNldENvbFdpZHRoKFwiLnRhYmxlLWhlYWRlciAuaGVhZGVyQ29sR3JvdXAgY29sXCIsIFNob3dIaWRlLkhpZGVBbGwpO1xyXG4gICAgICAgIHRoaXMuU2V0Q29sV2lkdGgoXCIudGFibGUtYm9keSAuYm9keUNvbEdyb3VwIGNvbFwiLCBTaG93SGlkZS5IaWRlQWxsKTtcclxuICAgICAgICB0aGlzLmNvbmZpZ1N0b3JlLlNldEhpZGRlbk9uQ29uZmlnKHRydWUpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgU2V0Q29sV2lkdGggPSAoc2VsZWN0b3I6IHN0cmluZywgY29udHJvbDogU2hvd0hpZGUsIGNvbHVtbklkPzogc3RyaW5nKTogdm9pZCA9PiB7XHJcbiAgICAgICAgdGhpcy5wYXJlbnRFbGVtZW50LmZpbmQoc2VsZWN0b3IpLmVhY2goKGluZGV4LCBlbGVtZW50KTogdm9pZCB8IGZhbHNlID0+IHtcclxuICAgICAgICAgICAgbGV0IHdpZHRoID0gMDtcclxuICAgICAgICAgICAgY29uc3QgY3VycmVudENvbEVsZW0gPSBqUXVlcnkoZWxlbWVudCk7XHJcbiAgICAgICAgICAgIGNvbnN0IGN1cnJlbnRDb2wgPSBjdXJyZW50Q29sRWxlbS5hdHRyKFwiZGF0YS1oZWFkZXItaWRcIik7XHJcbiAgICAgICAgICAgIGlmIChjdXJyZW50Q29sICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgIGxldCBjb2w6IElDb2x1bW47XHJcbiAgICAgICAgICAgICAgICBpZiAoW1Nob3dIaWRlLlNob3csIFNob3dIaWRlLkhpZGVdLmluZGV4T2YoY29udHJvbCkgPiAtMSApIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoY3VycmVudENvbCA9PT0gY29sdW1uSWQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGNvbnRyb2wgPT09IFNob3dIaWRlLlNob3cpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbCA9IENvbW1vblV0aWwuR2V0Q29sdW1uT2JqZWN0KGN1cnJlbnRDb2wsIHRoaXMuY29uZmlnU3RvcmUub3B0aW9ucy5jb2x1bW5zKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoID0gY29sLndpZHRoO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJlbnRDb2xFbGVtLndpZHRoKCB3aWR0aCArIFwicHhcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAoW1Nob3dIaWRlLlNob3dBbGwsIFNob3dIaWRlLkhpZGVBbGxdLmluZGV4T2YoY29udHJvbCkgPiAtMSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChjb250cm9sID09PSBTaG93SGlkZS5TaG93QWxsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbCA9IENvbW1vblV0aWwuR2V0Q29sdW1uT2JqZWN0KGN1cnJlbnRDb2wsIHRoaXMuY29uZmlnU3RvcmUub3B0aW9ucy5jb2x1bW5zKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGggPSBjb2wud2lkdGg7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGN1cnJlbnRDb2xFbGVtLndpZHRoKCB3aWR0aCArIFwicHhcIik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvdHNsaW50LWxvYWRlcj8/cmVmLS0wIS4vc3JjL2pzL2V2ZW50SGFuZGxlcnMvVG9nZ2xlQ29sdW1uSGFuZGxlci50cyIsImltcG9ydCAqIGFzIEhhbmRsZWJhcnMgZnJvbSBcImhhbmRsZWJhcnNcIjtcclxuaW1wb3J0ICogYXMgR3JpZERldGFpbHNSb3dUZW1wbGF0ZSBmcm9tIFwiLi4vLi4vaHRtbC9ncmlkLWRldGFpbHMtcm93Lmh0bWxcIjtcclxuaW1wb3J0ICogYXMgR3JpZEZvb3RlciBmcm9tIFwiLi4vLi4vaHRtbC9ncmlkLWZvb3Rlci5odG1sXCI7XHJcbmltcG9ydCAqIGFzIEdyaWRNYWluUm93VGVtcGxhdGUgZnJvbSBcIi4uLy4uL2h0bWwvZ3JpZC1tYWluLXJvdy5odG1sXCI7XHJcbmltcG9ydCAqIGFzIE1hbmFnZUNvbHVtblRlbXBsYXRlIGZyb20gXCIuLi8uLi9odG1sL2dyaWQtbWFuYWdlLWNvbHVtbnMuaHRtbFwiO1xyXG5pbXBvcnQgKiBhcyBHcmlkVGVtcGxhdGUgZnJvbSBcIi4uLy4uL2h0bWwvZ3JpZC5odG1sXCI7XHJcbmltcG9ydCB7IENvbmZpZ1N0b3JlIH0gZnJvbSBcIi4uL2NvbmZpZy9Db25maWdTdG9yZVwiO1xyXG5pbXBvcnQgeyBJUGFnaW5hdGlvbiB9IGZyb20gXCIuLi9tb2RlbHMvSVBhZ2luYXRpb25cIjtcclxuaW1wb3J0IHsgUGFnZXIgfSBmcm9tIFwiLi4vcGFnaW5hdGlvbi9QYWdlclwiO1xyXG5pbXBvcnQgeyBJQ29sdW1uIH0gZnJvbSBcIi4vLi4vbW9kZWxzL0lDb2x1bW5cIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBHcmlkVGVtcGxhdGVTZXJ2aWNlIDxUPiB7XHJcbiAgICBwcml2YXRlIGRhdGE6IFRbXTtcclxuICAgIHByaXZhdGUgY29uZmlnU3RvcmU6IENvbmZpZ1N0b3JlPFQ+O1xyXG4gICAgcHJpdmF0ZSB0ZW1wbGF0ZUZ1bmN0aW9uRm9yR3JpZDogYW55O1xyXG4gICAgcHJpdmF0ZSB0ZW1wbGF0ZUZ1bmN0aW9uRm9yTWFpblJvdzogYW55O1xyXG4gICAgcHJpdmF0ZSB0ZW1wbGF0ZUZ1bmN0aW9uRm9yRGV0YWlsc1JvdzogYW55O1xyXG4gICAgcHJpdmF0ZSB0ZW1wbGF0ZUZ1bmN0aW9uRm9yRm9vdGVyOiBhbnk7XHJcbiAgICBwcml2YXRlIHRlbXBsYXRlRnVuY3Rpb25Gb3JNYW5hZ2VDb2w6IGFueTtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihjb25maWdTdG9yZTogQ29uZmlnU3RvcmU8VD4pIHtcclxuICAgICAgICB0aGlzLnJlZ2lzdGVySGFuZGxlckJhckhlbHBlcigpO1xyXG4gICAgICAgIHRoaXMucmVnaXN0ZXJTZWxlY3RlZEhlbHBlcigpO1xyXG4gICAgICAgIHRoaXMucmVnaXN0ZXJEaXNhYmxlZEhlbHBlcigpO1xyXG4gICAgICAgIHRoaXMucmVnaXN0ZXJNYXRoSGVscGVyKCk7XHJcbiAgICAgICAgdGhpcy5yZWdpc3RlckNoZWNrZWRIZWxwZXIoKTtcclxuICAgICAgICB0aGlzLmNvbmZpZ1N0b3JlID0gY29uZmlnU3RvcmU7XHJcbiAgICAgICAgdGhpcy50ZW1wbGF0ZUZ1bmN0aW9uRm9yR3JpZCA9IEhhbmRsZWJhcnMuY29tcGlsZShHcmlkVGVtcGxhdGUpO1xyXG4gICAgICAgIHRoaXMudGVtcGxhdGVGdW5jdGlvbkZvck1haW5Sb3cgPSBIYW5kbGViYXJzLmNvbXBpbGUoR3JpZE1haW5Sb3dUZW1wbGF0ZSk7XHJcbiAgICAgICAgdGhpcy50ZW1wbGF0ZUZ1bmN0aW9uRm9yRGV0YWlsc1JvdyA9IEhhbmRsZWJhcnMuY29tcGlsZShHcmlkRGV0YWlsc1Jvd1RlbXBsYXRlKTtcclxuICAgICAgICB0aGlzLnRlbXBsYXRlRnVuY3Rpb25Gb3JGb290ZXIgPSBIYW5kbGViYXJzLmNvbXBpbGUoR3JpZEZvb3Rlcik7XHJcbiAgICAgICAgdGhpcy50ZW1wbGF0ZUZ1bmN0aW9uRm9yTWFuYWdlQ29sID0gSGFuZGxlYmFycy5jb21waWxlKE1hbmFnZUNvbHVtblRlbXBsYXRlKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0IERhdGFMZW5ndGgoKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5kYXRhLmxlbmd0aDtcclxuICAgIH1cclxuICAgIHB1YmxpYyBHZXRGaXJzdFRlbXBsYXRlID0gKGRhdGE6IFRbXSwgZmlyc3RJbmRleDogbnVtYmVyLCBsYXN0SW5kZXg6IG51bWJlcik6IHN0cmluZyA9PiB7XHJcbiAgICAgICAgdGhpcy5kYXRhID0gZGF0YTtcclxuICAgICAgICBjb25zdCB0Qm9keUNvbnRlbnQgPSB0aGlzLkdldFJvd3NIdG1sKGZpcnN0SW5kZXgsIGxhc3RJbmRleCk7XHJcbiAgICAgICAgY29uc3QgbWFuYWdlQ29sdW1uSHRtbCA9IHRoaXMudGVtcGxhdGVGdW5jdGlvbkZvck1hbmFnZUNvbCh0aGlzLmNvbmZpZ1N0b3JlLk9wdGlvbnMuY29sdW1ucyk7XHJcbiAgICAgICAgY29uc3QgdGFibGVGb290ZXJDb250ZW50ID0gdGhpcy50ZW1wbGF0ZUZ1bmN0aW9uRm9yRm9vdGVyKHtwYWdpbmF0aW9uRGF0YSA6IFBhZ2VyLlBhZ2luYXRpb25EYXRhLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYW5hZ2VDb2x1bW5IdG1sfSk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMudGVtcGxhdGVGdW5jdGlvbkZvckdyaWQoe1xyXG4gICAgICAgICAgICBjb2x1bW5zOiB0aGlzLmNvbmZpZ1N0b3JlLk9wdGlvbnMuY29sdW1ucyxcclxuICAgICAgICAgICAgdEJvZHlDb250ZW50LCB0YWJsZUZvb3RlckNvbnRlbnQsXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIEdldFJvd3NIdG1sID0gKGZpcnN0SW5kZXg6IG51bWJlciwgbGFzdEluZGV4OiBudW1iZXIpOiBzdHJpbmcgPT4ge1xyXG4gICAgICAgIGxldCB0Qm9keUNvbnRlbnQ6IHN0cmluZyA9IFwiXCI7XHJcbiAgICAgICAgY29uc3QgbGVuZ3RoID0gdGhpcy5jb25maWdTdG9yZS5PcHRpb25zLmNvbHVtbnMubGVuZ3RoICsgMTtcclxuICAgICAgICBmb3IgKGxldCBpID0gZmlyc3RJbmRleDsgaSA8PSBsYXN0SW5kZXg7IGkrKykge1xyXG4gICAgICAgICAgICBjb25zdCByb3c6IFQgPSB0aGlzLmRhdGFbaV07XHJcbiAgICAgICAgICAgIGNvbnN0IGRldGFpbHNBcnJheTogYW55W10gPSBbXTtcclxuICAgICAgICAgICAgY29uc3QgbWFpbkFycmF5OiBhbnlbXSA9IFtdO1xyXG4gICAgICAgICAgICB0aGlzLmNvbmZpZ1N0b3JlLk9wdGlvbnMuY29sdW1ucy5mb3JFYWNoKChjb2w6IElDb2x1bW4pID0+IHtcclxuICAgICAgICAgICAgICAgIGxldCBjb2x1bW5WYWx1ZSA9IHJvd1tjb2wuaWRdO1xyXG4gICAgICAgICAgICAgICAgaWYgKGNvbC5yZW5kZXJIeWJyaWQpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb2x1bW5WYWx1ZSA9IHRoaXMuY29uZmlnU3RvcmUuT3B0aW9ucy5oeWJyaWRGdW5jdGlvbihjb2wsIHJvdyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBtYWluQXJyYXkucHVzaCh7Y29sdW1uVmFsdWUsIGhpZGRlbjogY29sLmhpZGRlbn0pO1xyXG4gICAgICAgICAgICAgICAgZGV0YWlsc0FycmF5LnB1c2goe1xyXG4gICAgICAgICAgICAgICAgICAgIGFjdHVhbFZhbHVlOiByb3dbY29sLmlkXSxcclxuICAgICAgICAgICAgICAgICAgICBjb2x1bW5OYW1lOiBjb2wubmFtZSxcclxuICAgICAgICAgICAgICAgICAgICBjb2x1bW5WYWx1ZSxcclxuICAgICAgICAgICAgICAgICAgICBoaWRkZW46IGNvbC5oaWRkZW4sXHJcbiAgICAgICAgICAgICAgICAgICAgaWQ6IGNvbC5pZCxcclxuICAgICAgICAgICAgICAgICAgICBmaWx0ZXJhYmxlOiBjb2wuZmlsdGVyYWJsZSxcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgY29uc3QgbWFpblJvd1N0ciA9IHRoaXMudGVtcGxhdGVGdW5jdGlvbkZvck1haW5Sb3cobWFpbkFycmF5KTtcclxuICAgICAgICAgICAgdEJvZHlDb250ZW50ICs9IG1haW5Sb3dTdHI7XHJcbiAgICAgICAgICAgIGNvbnN0IGRldGFpbFJvd1N0ciA9IHRoaXMudGVtcGxhdGVGdW5jdGlvbkZvckRldGFpbHNSb3coe2xlbmd0aCwgZGV0YWlsc0FycmF5fSk7XHJcbiAgICAgICAgICAgIHRCb2R5Q29udGVudCArPSBkZXRhaWxSb3dTdHI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0Qm9keUNvbnRlbnQ7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSByZWdpc3RlckhhbmRsZXJCYXJIZWxwZXIgPSAoKTogdm9pZCA9PiB7XHJcbiAgICAgICAgSGFuZGxlYmFycy5yZWdpc3RlckhlbHBlcihcImNvbFwiLCAoY29sKTogc3RyaW5nID0+IHtcclxuICAgICAgICAgICAgY29uc3QgY2FsY1dpZHRoOiBudW1iZXIgPSBjb2wuaGlkZGVuID8gMCA6IGNvbC53aWR0aDtcclxuICAgICAgICAgICAgY29uc3QgZGF0YUF0dHJJZCA9ICdkYXRhLWhlYWRlci1pZD1cIicgKyBjb2wuaWQgKyAnXCInO1xyXG4gICAgICAgICAgICByZXR1cm4gJzxjb2wgc3R5bGU9XCJ3aWR0aCA6ICcgKyBjYWxjV2lkdGggKyAncHg7XCInICsgZGF0YUF0dHJJZCArIFwiIC8+XCI7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSByZWdpc3RlckRpc2FibGVkSGVscGVyID0gKCk6IHZvaWQgPT4ge1xyXG4gICAgICAgIEhhbmRsZWJhcnMucmVnaXN0ZXJIZWxwZXIoXCJpc0Rpc2FibGVkXCIsIChib29sOiBib29sZWFuKTogc3RyaW5nID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIGJvb2wgPyBcImRpc2FibGVkXCIgOiBcIlwiO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgcmVnaXN0ZXJTZWxlY3RlZEhlbHBlciA9ICgpOiB2b2lkID0+IHtcclxuICAgICAgICBIYW5kbGViYXJzLnJlZ2lzdGVySGVscGVyKFwiaXNTZWxlY3RlZFwiLCAoaW5wdXQ6IG51bWJlciwgdmFsdWU6IG51bWJlcik6IHN0cmluZyA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiBpbnB1dCA9PT0gdmFsdWUgPyBcInNlbGVjdGVkXCIgOiBcIlwiO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgcmVnaXN0ZXJNYXRoSGVscGVyID0gKCk6IHZvaWQgPT4ge1xyXG4gICAgICAgIEhhbmRsZWJhcnMucmVnaXN0ZXJIZWxwZXIoXCJtYXRoXCIsIChsdmFsdWU6IG51bWJlciwgb3BlcmF0b3I6IHN0cmluZywgcnZhbHVlOiBudW1iZXIsIG9wdGlvbnMpOiBudW1iZXIgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgXCIrXCI6IGx2YWx1ZSArIHJ2YWx1ZSxcclxuICAgICAgICAgICAgICAgIFwiLVwiOiBsdmFsdWUgLSBydmFsdWUsXHJcbiAgICAgICAgICAgICAgICBcIipcIjogbHZhbHVlICogcnZhbHVlLFxyXG4gICAgICAgICAgICAgICAgXCIvXCI6IGx2YWx1ZSAvIHJ2YWx1ZSxcclxuICAgICAgICAgICAgICAgIFwiJVwiOiBsdmFsdWUgJSBydmFsdWUsXHJcbiAgICAgICAgICAgIH1bb3BlcmF0b3JdO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgcmVnaXN0ZXJDaGVja2VkSGVscGVyID0gKCk6IHZvaWQgPT4ge1xyXG4gICAgICAgIEhhbmRsZWJhcnMucmVnaXN0ZXJIZWxwZXIoXCJpc0NoZWNrZWRcIiwgKGJvb2w6IGJvb2xlYW4pOiBzdHJpbmcgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gIWJvb2wgPyBcImNoZWNrZWRcIiA6IFwiXCI7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL3RzbGludC1sb2FkZXI/P3JlZi0tMCEuL3NyYy9qcy9zZXJ2aWNlcy9HcmlkVGVtcGxhdGVTZXJ2aWNlLnRzIiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzE5X187XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJIYW5kbGViYXJzXCJcbi8vIG1vZHVsZSBpZCA9IDE5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gXCI8dHIgY2xhc3M9XFxcImRldGFpbHNSb3dcXFwiIHN0eWxlPVxcXCJkaXNwbGF5Om5vbmU7XFxcIj5cXHJcXG4gICAgPHRkIGNvbHNwYW49XFxcInt7bGVuZ3RofX1cXFwiPlxcclxcbiAgICAgICAgPHRhYmxlIGNsYXNzPVxcXCJ1aSB2ZXJ5IGNvbXBhY3Qgc2VsZWN0YWJsZSBjZWxsZWQgdGFibGUgZGV0YWlsc1RhYmxlXFxcIiBzdHlsZT1cXFwid2lkdGg6IGF1dG87XFxcIj5cXHJcXG4gICAgICAgICAgICA8dGJvZHk+XFxyXFxuICAgICAgICAgICAgICAgIHt7I2VhY2ggZGV0YWlsc0FycmF5fX1cXHJcXG4gICAgICAgICAgICAgICAgPHRyPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPHRkIHZhbGlnbj1cXFwidG9wXFxcIiBkYXRhLWZpbHRlci1rZXk9XFxcInt7aWR9fVxcXCIgZGF0YS1maWx0ZXItdmFsdWU9XFxcInt7YWN0dWFsVmFsdWV9fVxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+e3tjb2x1bW5OYW1lfX08L3NwYW4+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAge3sjaWYgZmlsdGVyYWJsZX19XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVxcXCJ1aSBtaW5pIGJhc2ljIGljb24gdmVyeSBzdXBlcmNvbXBhY3QgYnV0dG9ucyB0b3AgYWxpZ25lZFxcXCIgc3R5bGU9XFxcIm1hcmdpbi1sZWZ0OiA1cHg7XFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XFxcInVpIG1pbmkgaWNvbiBidXR0b24gZXhwYW5kLWFsbFxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3M9XFxcImFkZCBpY29uIGFkZEZpbHRlclxcXCI+PC9pPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVxcXCJ1aSBtaW5pIGljb24gYnV0dG9uIGNvbGxhcHNlLWFsbFxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3M9XFxcIm1pbnVzIGljb24gcmVtb3ZlRmlsdGVyXFxcIj48L2k+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIHt7L2lmfX1cXHJcXG4gICAgICAgICAgICAgICAgICAgIDwvdGQ+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8dGQ+e3t7Y29sdW1uVmFsdWV9fX08L3RkPlxcclxcbiAgICAgICAgICAgICAgICA8L3RyPlxcclxcbiAgICAgICAgICAgICAgICB7ey9lYWNofX1cXHJcXG4gICAgICAgICAgICA8L3Rib2R5PlxcclxcbiAgICAgICAgPC90YWJsZT5cXHJcXG4gICAgPC90ZD5cXHJcXG48L3RyPlxcclxcblwiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2h0bWwvZ3JpZC1kZXRhaWxzLXJvdy5odG1sXG4vLyBtb2R1bGUgaWQgPSAyMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPGRpdiBjbGFzcz1cXFwiZm9vdGVyLWxlZnRcXFwiIHN0eWxlPVxcXCJkaXNwbGF5OmFic291bHRlO1xcXCI+XFxyXFxuICAgIDxkaXYgY2xhc3M9XFxcInVpIG1pbmkgY29tcGFjdCBpY29uIGJ1dHRvbnNcXFwiPlxcclxcbiAgICAgICAgPGJ1dHRvbiBjbGFzcz1cXFwidWkgbWluaSBjb21wYWN0IGljb24gYnV0dG9uIGNvbC1zZXR0aW5ncy10cmlnZ2VyXFxcIiBhcmlhLWxhYmVsPVxcXCJNYW5hZ2UgR3JpZCBDb2x1bW4gU2V0dGluZ3NcXFwiXFxyXFxuICAgICAgICB0aXRsZT1cXFwiTWFuYWdlIEdyaWQgQ29sdW1uIFNldHRpbmdzXFxcIiB0YWJpbmRleD1cXFwiMVxcXCI+XFxyXFxuICAgICAgICAgICAgPGkgY2xhc3M9XFxcImNvbHVtbnMgaWNvblxcXCI+PC9pPlxcclxcbiAgICAgICAgPC9idXR0b24+XFxyXFxuICAgICAgICA8YnV0dG9uIGNsYXNzPVxcXCJ1aSBtaW5pIGNvbXBhY3QgaWNvbiBidXR0b24gY29sLXNvcnRpbmctcmVzZXQtdHJpZ2dlclxcXCIgYXJpYS1sYWJlbD1cXFwiQ2xlYXIgU29ydGluZ1xcXCJcXHJcXG4gICAgICAgIHRpdGxlPVxcXCJDbGVhciBTb3J0aW5nXFxcIiB0YWJpbmRleD1cXFwiMlxcXCI+XFxyXFxuICAgICAgICAgICAgPGkgY2xhc3M9XFxcInVub3JkZXJlZCBsaXN0IGljb25cXFwiPjwvaT5cXHJcXG4gICAgICAgIDwvYnV0dG9uPlxcclxcbiAgICA8L2Rpdj5cXHJcXG4gICAgPGRpdiBjbGFzcz1cXFwiY29sdW1uLXNldHRpbmdzLWNvbnRhaW5lclxcXCI+e3t7bWFuYWdlQ29sdW1uSHRtbH19fTwvZGl2PlxcclxcbjwvZGl2PlxcclxcbjxkaXYgZGF0YS1yb2xlPVxcXCJwYWdlclxcXCIgY2xhc3M9XFxcImZvb3Rlci1taWRkbGVcXFwiPlxcclxcbiAgICA8ZGl2IGNsYXNzPVxcXCJtYXJnaW4tYXV0byB1aSBtaW5pIGNvbXBhY3QgaWNvbiBidXR0b25zXFxcIj5cXHJcXG4gICAgICAgIDxidXR0b24gY2xhc3M9XFxcInVpIG1pbmkgY29tcGFjdCBpY29uIGJ1dHRvbiBmaXJzdExpbmtcXFwiIGFyaWEtaGlkZGVuPVxcXCJ0cnVlXFxcIiB7e2lzRGlzYWJsZWQgcGFnaW5hdGlvbkRhdGEuZmlyc3RQYWdlTGlua0Rpc2FibGVkfX0gYXJpYS1sYWJlbD1cXFwiR28gdG8gdGhlIGZpcnN0IHBhZ2VcXFwiXFxyXFxuICAgICAgICAgICAgdGl0bGU9XFxcIkdvIHRvIHRoZSBmaXJzdCBwYWdlXFxcIiBkYXRhLXBhZ2U9XFxcIjFcXFwiIHRhYmluZGV4PVxcXCItMVxcXCI+XFxyXFxuICAgICAgICAgICAgPGkgY2xhc3M9XFxcImZhc3QgYmFja3dhcmQgaWNvblxcXCI+PC9pPlxcclxcbiAgICAgICAgPC9idXR0b24+XFxyXFxuICAgICAgICA8YnV0dG9uIGNsYXNzPVxcXCJ1aSBtaW5pIGNvbXBhY3QgaWNvbiBidXR0b24gcHJldkxpbmtcXFwiIGFyaWEtaGlkZGVuPVxcXCJ0cnVlXFxcIiB7e2lzRGlzYWJsZWQgcGFnaW5hdGlvbkRhdGEucHJldlBhZ2VMaW5rRGlzYWJsZWR9fSBhcmlhLWxhYmVsPVxcXCJHbyB0byB0aGUgcHJldmlvdXMgcGFnZVxcXCJcXHJcXG4gICAgICAgICAgICB0aXRsZT1cXFwiR28gdG8gdGhlIHByZXZpb3VzIHBhZ2VcXFwiIGRhdGEtcGFnZT1cXFwie3ttYXRoIHBhZ2luYXRpb25EYXRhLnBhZ2VJbmRleCAnLScgMX19XFxcIiB0YWJpbmRleD1cXFwiLTFcXFwiPlxcclxcbiAgICAgICAgICAgIDxpIGNsYXNzPVxcXCJiYWNrd2FyZCBpY29uXFxcIj48L2k+XFxyXFxuICAgICAgICA8L2J1dHRvbj5cXHJcXG4gICAgPC9kaXY+XFxyXFxuICAgIDxkaXYgY2xhc3M9XFxcIm1hcmdpbi1zaWRlLTEwIHBhZ2VyLWlucHV0LWNvbnRhaW5lciB1aSBpbnB1dFxcXCI+XFxyXFxuICAgICAgICA8c3BhbiBjbGFzcz1cXFwibWFyZ2luLWF1dG9cXFwiPiBQYWdlIDwvc3Bhbj5cXHJcXG4gICAgICAgIDxpbnB1dCBjbGFzcz1cXFwibWFyZ2luLXNpZGUtMTAgcGFnZXItaW5wdXRcXFwiIGFyaWEtbGFiZWw9XFxcIjFcXFwiIHZhbHVlPVxcXCJ7e3BhZ2luYXRpb25EYXRhLnBhZ2VJbmRleH19XFxcIiB0eXBlPVxcXCJ0ZXh0XFxcIiBwbGFjZWhvbGRlcj1cXFwiUGFnZSBOdW1iZXIgLi4uXFxcIj5cXHJcXG4gICAgICAgIDxzcGFuIGNsYXNzPVxcXCJtYXJnaW4tYXV0byBuby1vZi1wYWdlcy1zY2FuXFxcIiBkYXRhLW51bWJlci1vZi1wYWdlcz1cXFwie3twYWdpbmF0aW9uRGF0YS5ub09mUGFnZXN9fVxcXCI+IG9mIHt7cGFnaW5hdGlvbkRhdGEubm9PZlBhZ2VzfX08L3NwYW4+XFxyXFxuICAgIDwvZGl2PlxcclxcbiAgICA8ZGl2IGNsYXNzPVxcXCJtYXJnaW4tYXV0byB1aSBtaW5pIGNvbXBhY3QgaWNvbiBidXR0b25zXFxcIj5cXHJcXG4gICAgICAgIDxidXR0b24gY2xhc3M9XFxcInVpIG1pbmkgY29tcGFjdCBpY29uIGJ1dHRvbiBuZXh0TGlua1xcXCIgYXJpYS1oaWRkZW49XFxcInRydWVcXFwiIHt7aXNEaXNhYmxlZCBwYWdpbmF0aW9uRGF0YS5uZXh0UGFnZUxpbmtEaXNhYmxlZH19IGFyaWEtbGFiZWw9XFxcIkdvIHRvIHRoZSBuZXh0IHBhZ2VcXFwiXFxyXFxuICAgICAgICAgICAgdGl0bGU9XFxcIkdvIHRvIHRoZSBuZXh0IHBhZ2VcXFwiIGNsYXNzPVxcXCJ1aSBidXR0b25cXFwiIGRhdGEtcGFnZT1cXFwie3ttYXRoIHBhZ2luYXRpb25EYXRhLnBhZ2VJbmRleCAnKycgMX19XFxcIiB0YWJpbmRleD1cXFwiLTFcXFwiPlxcclxcbiAgICAgICAgICAgIDxpIGNsYXNzPVxcXCJmb3J3YXJkIGljb25cXFwiPjwvaT5cXHJcXG4gICAgICAgIDwvYnV0dG9uPlxcclxcbiAgICAgICAgPGJ1dHRvbiBjbGFzcz1cXFwidWkgbWluaSBjb21wYWN0IGljb24gYnV0dG9uIGxhc3RMaW5rXFxcIiBhcmlhLWhpZGRlbj1cXFwidHJ1ZVxcXCIge3tpc0Rpc2FibGVkIHBhZ2luYXRpb25EYXRhLmxhc3RQYWdlTGlua0Rpc2FibGVkfX0gYXJpYS1sYWJlbD1cXFwiR28gdG8gdGhlIGxhc3QgcGFnZVxcXCJcXHJcXG4gICAgICAgICAgICB0aXRsZT1cXFwiR28gdG8gdGhlIGxhc3QgcGFnZVxcXCIgZGF0YS1wYWdlPVxcXCJ7e3BhZ2luYXRpb25EYXRhLm5vT0ZwYWdlc319XFxcIiB0YWJpbmRleD1cXFwiLTFcXFwiPlxcclxcbiAgICAgICAgICAgIDxpIGNsYXNzPVxcXCJmYXN0IGZvcndhcmQgaWNvblxcXCI+PC9pPlxcclxcbiAgICAgICAgPC9idXR0b24+XFxyXFxuICAgIDwvZGl2PlxcclxcbjwvZGl2PlxcclxcbjxkaXYgY2xhc3M9XFxcImZvb3Rlci1yaWdodFxcXCI+XFxyXFxuICAgIDxzZWxlY3QgY2xhc3M9XFxcIm1hcmdpbi1zaWRlLTEwIHBhZ2VTaXplU2VsZWN0b3JcXFwiPlxcclxcbiAgICAgICAge3sjZWFjaCBwYWdpbmF0aW9uRGF0YS5wYWdlU2l6ZXN9fVxcclxcbiAgICAgICAgPG9wdGlvbiB7e2lzU2VsZWN0ZWQgLi4vcGFnaW5hdGlvbkRhdGEucGFnZVNpemUgdGhpc319Pnt7dGhpc319PC9vcHRpb24+XFxyXFxuICAgICAgICB7ey9lYWNofX1cXHJcXG4gICAgPC9zZWxlY3Q+XFxyXFxuICAgIDxzcGFuIGNsYXNzPVxcXCJtYXJnaW4tYXV0b1xcXCI+e3twYWdpbmF0aW9uRGF0YS5yYW5nZS5taW59fSAtIHt7cGFnaW5hdGlvbkRhdGEucmFuZ2UubWF4fX0gb2Yge3twYWdpbmF0aW9uRGF0YS50b3RhbENvdW50fX0gaXRlbXM8L3NwYW4+XFxyXFxuPC9kaXY+XCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvaHRtbC9ncmlkLWZvb3Rlci5odG1sXG4vLyBtb2R1bGUgaWQgPSAyMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPHRyIGNsYXNzPVxcXCJtYWluUm93XFxcIj5cXHJcXG4gICAgPHRkIGNsYXNzPVxcXCJleHBhbnNpb25BcnJvd3NcXFwiIHN0eWxlPVxcXCJkaXNwbGF5OmZsZXg7anVzdGlmeS1jb250ZW50OmNlbnRlcjtcXFwiPlxcclxcbiAgICAgICAgPGJ1dHRvbiBjbGFzcz1cXFwidWkgbWluaSBjb21wYWN0IGljb24gYnV0dG9uXFxcIj5cXHJcXG4gICAgICAgICAgICA8aSBjbGFzcz1cXFwicmlnaHQgdHJpYW5nbGUgaWNvbiBleHBhbmREZXRhaWxzUm93SWNvblxcXCIgYXJpYS1oaWRkZW49XFxcInRydWVcXFwiIHN0eWxlPVxcXCJjdXJzb3I6cG9pbnRlclxcXCI+PC9pPlxcclxcbiAgICAgICAgICAgIDxpIGNsYXNzPVxcXCJkb3duIHRyaWFuZ2xlIGljb24gQ29sbGFwc2VEZXRhaWxzUm93SWNvblxcXCIgYXJpYS1oaWRkZW49XFxcInRydWVcXFwiIHN0eWxlPVxcXCJjdXJzb3I6cG9pbnRlcjtkaXNwbGF5Om5vbmU7XFxcIj48L2k+XFxyXFxuICAgICAgICA8L2J1dHRvbj5cXHJcXG4gICAgPC90ZD5cXHJcXG4gICAgPHRkPlxcclxcbiAgICAgICAgPGlucHV0IHR5cGU9XFxcImNoZWNrYm94XFxcIj5cXHJcXG4gICAgPC90ZD5cXHJcXG4gICAge3sjZWFjaCB0aGlzfX1cXHJcXG4gICAgPHRkPnt7e2NvbHVtblZhbHVlfX19PC90ZD5cXHJcXG4gICAge3svZWFjaH19XFxyXFxuPC90cj5cIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9odG1sL2dyaWQtbWFpbi1yb3cuaHRtbFxuLy8gbW9kdWxlIGlkID0gMjJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxkaXYgY2xhc3M9XFxcInVpIGdyZXkgY2FyZFxcXCIgc3R5bGU9XFxcImhlaWdodDogMTAwJTt3aWR0aDogYXV0bztwYWRkaW5nOiAwLjhlbTtvdmVyZmxvdzpoaWRkZW47XFxcIj5cXHJcXG4gICAgPGRpdiBjbGFzcz1cXFwiY29sLXNldHRpbmdzLWhlYWRlclxcXCIgc3R5bGU9XFxcIndpZHRoOiAxMDAlXFxcIj5cXHJcXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcInVpIG1pbmkgZmx1aWQgaWNvbiBpbnB1dFxcXCI+XFxyXFxuICAgICAgICAgICAgPGlucHV0IGNsYXNzPVxcXCJjb2wtc2V0dGluZ3MtZmlsdGVyXFxcIiB0eXBlPVxcXCJ0ZXh0XFxcIiBwbGFjZWhvbGRlcj1cXFwiU2VhcmNoIGZpbHRlci4uLlxcXCI+XFxyXFxuICAgICAgICAgICAgPGkgY2xhc3M9XFxcInNlYXJjaCBpY29uXFxcIj48L2k+XFxyXFxuICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcInVpIGJ1dHRvbnNcXFwiPlxcclxcbiAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XFxcInVpIGJhc2ljIGJ1dHRvbiBzaG93LWFsbC1jb2x1bW5cXFwiPlNob3cgQWxsPC9idXR0b24+XFxyXFxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cXFwidWkgYmFzaWMgYnV0dG9uIGhpZGUtYWxsLWNvbHVtblxcXCI+SGlkZSBBbGw8L2J1dHRvbj5cXHJcXG4gICAgICAgIDwvZGl2PlxcclxcbiAgICA8L2Rpdj5cXHJcXG4gICAgPGRpdiBjbGFzcz1cXFwiY29sLXNldHRpbmdzLXRhYmxlXFxcIiBzdHlsZT1cXFwib3ZlcmZsb3c6YXV0bztwYWRkaW5nOjAuNWVtO1xcXCI+XFxyXFxuICAgICAgICA8dGFibGUgY2xhc3M9XFxcInVpIHNtYWxsIHZlcnkgYm9yZGVyLWxlc3MgY29tcGFjdCB0YWJsZVxcXCI+XFxyXFxuICAgICAgICAgICAgPHRib2R5PlxcclxcbiAgICAgICAgICAgICAgICB7eyNlYWNoIHRoaXN9fVxcclxcbiAgICAgICAgICAgICAgICA8dHIgZGF0YS1oZWFkZXItaWQ9XFxcInt7bmFtZX19XFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDx0ZD5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cXFwiY2hlY2tib3hcXFwiIGNsYXNzPVxcXCJjb2wtc2V0dGluZ3MtaGlkZGVuLWNoZWNrYm94XFxcIiB2YWx1ZT1cXFwie3tpZH19XFxcIiB7e2lzQ2hlY2tlZCBoaWRkZW59fT5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDwvdGQ+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8dGQ+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsPnt7bmFtZX19PC9sYWJlbD5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDwvdGQ+XFxyXFxuICAgICAgICAgICAgICAgIDwvdHI+XFxyXFxuICAgICAgICAgICAgICAgIHt7L2VhY2h9fVxcclxcbiAgICAgICAgICAgIDwvdGJvZHk+XFxyXFxuICAgICAgICA8L3RhYmxlPlxcclxcbiAgICA8L2Rpdj5cXHJcXG48L2Rpdj5cIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9odG1sL2dyaWQtbWFuYWdlLWNvbHVtbnMuaHRtbFxuLy8gbW9kdWxlIGlkID0gMjNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxzdHlsZT5cXG4gICAgLmlubmVyLWNvbnRhaW5lciB7XFxuICAgICAgICBoZWlnaHQ6IDEwMCU7XFxuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgICAgICAgd2lkdGg6IDEwMCU7XFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgfVxcblxcbiAgICAudGFibGUtaGVhZGVyIHtcXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgICAgIHRvcDowICFpbXBvcnRhbnQ7XFxuICAgIH1cXG5cXG4gICAgLnRhYmxlLWJvZHkge1xcbiAgICAgICAgb3ZlcmZsb3c6IGF1dG87XFxuICAgICAgICBmbGV4OiA1O1xcbiAgICAgICAgcGFkZGluZy1yaWdodDogMTdweDtcXG4gICAgfVxcbiAgICAudGFibGUtZm9vdGVyLC50YWJsZS10b3B7XFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgaGVpZ2h0OiAzNXB4O1xcbiAgICAgICAgcGFkZGluZzogNXB4O1xcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICAgICAgYm94LXNoYWRvdzogMCAxcHggM3B4IDAgI2Q0ZDRkNSwgMCAwIDAgMXB4ICNkNGQ0ZDU7XFxuICAgIH1cXG4gICAgLnRhYmxlLWZvb3RlciAuZm9vdGVyLW1pZGRsZXtcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIH1cXG4gICAgLnRhYmxlLWZvb3RlciAuZm9vdGVyLXJpZ2h0e1xcbiAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgfVxcbiAgICAubWFyZ2luLWF1dG97XFxuICAgICAgICBtYXJnaW46IGF1dG8gIWltcG9ydGFudDtcXG4gICAgfVxcbiAgICAubWFyZ2luLXNpZGUtMTB7XFxuICAgICAgICBtYXJnaW46IDBweCAxMHB4IDBweCAxMHB4ICFpbXBvcnRhbnQ7XFxuICAgIH1cXG4gICAgLyogLnBhZ2VyLWlucHV0LWNvbnRhaW5lcntcXG4gICAgICAgIGRpc3BsYXk6IHRhYmxlLWNlbGwgIWltcG9ydGFudDtcXG4gICAgfSAqL1xcbiAgICAucGFnZXItaW5wdXQtY29udGFpbmVyIC5wYWdlci1pbnB1dHtcXG4gICAgICAgIHdpZHRoOiA1MHB4O1xcbiAgICB9XFxuICAgIC5jb2x1bW4tc2V0dGluZ3MtY29udGFpbmVye1xcbiAgICAgICAgcG9zaXRpb246YWJzb2x1dGUgIWltcG9ydGFudDtcXG4gICAgICAgIHotaW5kZXg6MTAwMCAhaW1wb3J0YW50O1xcbiAgICAgICAgYm90dG9tOjM1cHggIWltcG9ydGFudDtcXG4gICAgICAgIGxlZnQ6IDVweDtcXG4gICAgICAgIGRpc3BsYXk6bm9uZTtcXG4gICAgICAgIGJveC1zaGFkb3c6IDAgMXB4IDNweCAwICNkNGQ0ZDUsIDAgMCAwIDFweCAjZDRkNGQ1O1xcbiAgICB9XFxuICAgIC5yZW1vdmUtbGFiZWw6aG92ZXJ7XFxuICAgICAgICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgfVxcbiAgICAuYm9yZGVyLWxlc3MgdHIgdGQsLmJvcmRlci1sZXNzIHsgYm9yZGVyOiAwcHggIWltcG9ydGFudDsgfVxcbiAgICAuY3Vyc29yLXBvaW50ZXJ7XFxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIH1cXG4gICAgLnVpLnN1cGVyY29tcGFjdC5pY29uLmJ1dHRvbiwgLnVpLnN1cGVyY29tcGFjdC5pY29uLmJ1dHRvbnMgLmJ1dHRvbiB7XFxuICAgICAgICBwYWRkaW5nOiAuM2VtIC4zZW0gLjNlbSAuM2VtICFpbXBvcnRhbnQ7XFxuICAgIH1cXG48L3N0eWxlPlxcbjxkaXYgY2xhc3M9XFxcImlubmVyLWNvbnRhaW5lciB1aSBmbHVpZCBjYXJkXFxcIiBzdHlsZT1cXFwicGFkZGluZzowJTtcXFwiPlxcbiAgICA8ZGl2IGNsYXNzPVxcXCJ1aSBpbnZlcnRlZCBkaW1tZXIgZ3JpZC1sb2FkZXJcXFwiPlxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwidWkgbGFyZ2UgdGV4dCBsb2FkZXJcXFwiPlNlYWNoaW5nIFJlc291cmNlIFJlcXVlc3QuLi48L2Rpdj5cXG4gICAgPC9kaXY+XFxuICAgIDxkaXYgY2xhc3M9XFxcInRhYmxlLWhlYWRlclxcXCI+XFxuICAgICAgICA8dGFibGUgaWQ9XFxcImhlYWRlcnRhYmxlXFxcIiBjbGFzcz1cXFwidWkgZml4ZWQgYmx1ZSBiYXNpYyBzaW5nbGUgbGluZSBzbWFsbCB0YWJsZSBtYWluVGFibGVcXFwiPlxcbiAgICAgICAgICAgIDxjb2xncm91cCBjbGFzcz1cXFwiaGVhZGVyQ29sR3JvdXBcXFwiPlxcbiAgICAgICAgICAgICAgICA8Y29sIHN0eWxlPVxcXCJ3aWR0aDo0MHB4O1xcXCIgLz5cXG4gICAgICAgICAgICAgICAgPGNvbCBzdHlsZT1cXFwid2lkdGg6NDBweDtcXFwiIC8+XFxuICAgICAgICAgICAgICAgIHt7I2VhY2ggY29sdW1uc319XFxuICAgICAgICAgICAgICAgICAgICB7eyNjb2wgdGhpc319e3svY29sfX0gXFxuICAgICAgICAgICAgICAgIHt7L2VhY2h9fVxcbiAgICAgICAgICAgIDwvY29sZ3JvdXA+XFxuICAgICAgICAgICAgPHRoZWFkPlxcbiAgICAgICAgICAgICAgICA8dHI+XFxuICAgICAgICAgICAgICAgICAgICA8dGg+PC90aD5cXG4gICAgICAgICAgICAgICAgICAgIDx0aD48L3RoPlxcbiAgICAgICAgICAgICAgICAgICAge3sjZWFjaCBjb2x1bW5zfX1cXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGggaWQ9XFxcImhlYWRlci17e2lkfX1cXFwiIGRhdGEtaGVhZGVyLWlkPVxcXCJ7e2lkfX1cXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7eyNpZiBzb3J0YWJsZX19XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzcz1cXFwibG9uZyBhcnJvdyB1cCBpY29uXFxcIiBhcmlhLWhpZGRlbj1cXFwidHJ1ZVxcXCIgc3R5bGU9XFxcImRpc3BsYXk6bm9uZTttYXJnaW46MHB4O3BhZGRpbmc6MHB4O1xcXCI+PC9pPiAgICAgICAgICAgICAgICAgICAgICAgIFxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3M9XFxcImxvbmcgYXJyb3cgZG93biBpY29uXFxcIiBhcmlhLWhpZGRlbj1cXFwidHJ1ZVxcXCIgc3R5bGU9XFxcImRpc3BsYXk6bm9uZTttYXJnaW46MHB4O3BhZGRpbmc6MHB4O1xcXCI+PC9pPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7ey9pZn19XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVxcXCJ1aSBzdWIgaGVhZGVyXFxcIj57e25hbWV9fTwvc3Bhbj5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RoPlxcbiAgICAgICAgICAgICAgICAgICAge3svZWFjaH19XFxuICAgICAgICAgICAgICAgIDwvdHI+XFxuICAgICAgICAgICAgPC90aGVhZD5cXG4gICAgICAgIDwvdGFibGU+XFxuICAgIDwvZGl2PlxcbiAgICA8ZGl2IGNsYXNzPVxcXCJ0YWJsZS1ib2R5XFxcIj5cXG4gICAgICAgIDx0YWJsZSBjbGFzcz1cXFwidWkgYmFzaWMgc21hbGwgY29tcGFjdCBmaXhlZCBzZWxlY3RhYmxlIHNpbmdsZSBsaW5lIHRhYmxlIG1haW5UYWJsZVxcXCI+XFxuICAgICAgICAgICAgPGNvbGdyb3VwIGNsYXNzPVxcXCJib2R5Q29sR3JvdXBcXFwiPlxcbiAgICAgICAgICAgICAgICA8Y29sIHN0eWxlPVxcXCJ3aWR0aDo0MHB4O1xcXCIgLz4gXFxuICAgICAgICAgICAgICAgIDxjb2wgc3R5bGU9XFxcIndpZHRoOjQwcHg7XFxcIiAvPlxcbiAgICAgICAgICAgICAgICB7eyNlYWNoIGNvbHVtbnN9fVxcbiAgICAgICAgICAgICAgICAgICAge3sjY29sIHRoaXN9fXt7L2NvbH19IFxcbiAgICAgICAgICAgICAgICB7ey9lYWNofX1cXG4gICAgICAgICAgICA8L2NvbGdyb3VwPlxcbiAgICAgICAgICAgIDx0Ym9keSBjbGFzcz1cXFwibWFpblRhYmxlQm9keVxcXCI+XFxuICAgICAgICAgICAgICAgIHt7e3RCb2R5Q29udGVudH19fVxcbiAgICAgICAgICAgIDwvdGJvZHk+XFxuICAgICAgICA8L3RhYmxlPlxcbiAgICA8L2Rpdj5cXG4gICAgPGRpdiBjbGFzcz1cXFwidGFibGUtZm9vdGVyIHVpIGludmVydGVkIGdyYXlcXFwiPlxcbiAgICAgICAgICAgIHt7e3RhYmxlRm9vdGVyQ29udGVudH19fVxcbiAgICA8L2Rpdj5cXG48L2Rpdj5cIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9odG1sL2dyaWQuaHRtbFxuLy8gbW9kdWxlIGlkID0gMjRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sInNvdXJjZVJvb3QiOiIifQ==