webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_cgi_cgi_component__ = __webpack_require__("../../../../../src/app/pages/cgi/cgi.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_pareto_pareto_component__ = __webpack_require__("../../../../../src/app/pages/pareto/pareto.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var routes = [
    { path: '', redirectTo: 'control', pathMatch: 'full' },
    { path: 'control', component: __WEBPACK_IMPORTED_MODULE_2__pages_cgi_cgi_component__["a" /* CgiPageComponent */] },
    { path: 'pareto', component: __WEBPACK_IMPORTED_MODULE_3__pages_pareto_pareto_component__["a" /* ParetoPageComponent */] },
    { path: '**', redirectTo: '' }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */].forRoot(routes, { useHash: true, preloadingStrategy: __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* PreloadAllModules */] })
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */]
            ],
            providers: []
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<app-top-bar></app-top-bar>\n<router-outlet></router-outlet>\n  <!-- <div class=\"sidebar-container left\">\n    <app-sidebar></app-sidebar>\n  </div>\n  <div class=\"charts-container\">\n    <app-control-chart (change)=\"test($event)\" [fieldOptions]=\"fieldOptions\" [budgetOptions]=\"budgetOptions\"></app-control-chart>\n    <app-scatter-chart></app-scatter-chart>\n  </div>\n  <div class=\"sidebar-container right\">\n    <app-comment-section></app-comment-section>\n  </div> -->\n\n"

/***/ }),

/***/ "../../../../../src/app/app.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "* {\n  font-family: Helvetica, sans-serif; }\n\n.app-container {\n  height: calc(100vh - 60px);\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-flex: 1;\n      -ms-flex: 1;\n          flex: 1; }\n  .app-container .sidebar-container {\n    -webkit-box-flex: 2;\n        -ms-flex: 2;\n            flex: 2;\n    border-radius: 3px;\n    background-color: #f9f9f9;\n    box-shadow: 0px 0px 1px #4981FD;\n    margin: 10px; }\n    .app-container .sidebar-container.right {\n      overflow: auto; }\n  .app-container .charts-container {\n    padding: 10px 0;\n    -webkit-box-flex: 10;\n        -ms-flex: 10;\n            flex: 10; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_view_service__ = __webpack_require__("../../../../../src/app/services/view.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = (function () {
    function AppComponent(view) {
        this.view = view;
        this.title = 'app';
        this.fieldOptions = [
            {
                name: 'KPI',
                options: [
                    { value: 'Distancia', text: 'Distancia' },
                    { value: 'Extraccion', text: 'Extraccion' },
                    { value: 'Oper. Truck', text: 'Oper. Truck' },
                    { value: 'Remanejo', text: 'Remanejo' },
                    { value: 'Velocidad', text: 'Velocidad' },
                ],
                selected: 'Distancia'
            },
            {
                name: 'Fase',
                options: [
                    { value: 'Casino 2', text: 'Casino 2' },
                    { value: 'Donoso 1', text: 'Donoso 1' },
                    { value: 'Donoso 2', text: 'Donoso 2' },
                    { value: 'Infiernillo 5', text: 'Infiernillo 5' },
                    { value: 'Infiernillo 7A', text: 'Infiernillo 7A' },
                    { value: 'Total Fases', text: 'Total Fases' },
                ],
                selected: 'Total Fases'
            },
        ];
        this.budgetOptions = {
            name: 'Budget',
            options: [
                { value: 'WK', text: 'Weekly' },
                { value: 'ST', text: 'Monthly' },
                { value: 'OL', text: 'Outlook' },
                { value: 'BUDGET', text: 'Budget' },
            ],
            selected: 'WK'
        };
    }
    AppComponent.prototype.test = function (event) {
        switch (event.field) {
            case 'target':
                this.view.changeTarget(event.value);
                break;
            case 'KPI':
                this.view.changeKPI(event.value);
                break;
            case 'Fase':
                this.view.changeFase(event.value);
                break;
        }
    };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_view_service__["a" /* ViewService */]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__swimlane_ngx_charts__ = __webpack_require__("../../../../@swimlane/ngx-charts/release/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__swimlane_ngx_charts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__swimlane_ngx_charts__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_material_list__ = __webpack_require__("../../../material/esm5/list.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_material_checkbox__ = __webpack_require__("../../../material/esm5/checkbox.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_material_input__ = __webpack_require__("../../../material/esm5/input.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_material_button__ = __webpack_require__("../../../material/esm5/button.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_material_button_toggle__ = __webpack_require__("../../../material/esm5/button-toggle.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_material_icon__ = __webpack_require__("../../../material/esm5/icon.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_material_select__ = __webpack_require__("../../../material/esm5/select.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__app_routing_module__ = __webpack_require__("../../../../../src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__services_comments_service__ = __webpack_require__("../../../../../src/app/services/comments.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__services_data_service__ = __webpack_require__("../../../../../src/app/services/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__services_range_service__ = __webpack_require__("../../../../../src/app/services/range.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__services_target_service__ = __webpack_require__("../../../../../src/app/services/target.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__services_view_service__ = __webpack_require__("../../../../../src/app/services/view.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__components_control_chart_control_chart_component__ = __webpack_require__("../../../../../src/app/components/control-chart/control-chart.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__components_control_chart_combo_combo_component__ = __webpack_require__("../../../../../src/app/components/control-chart/combo/combo.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__components_top_bar_top_bar_component__ = __webpack_require__("../../../../../src/app/components/top-bar/top-bar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__components_sidebar_sidebar_component__ = __webpack_require__("../../../../../src/app/components/sidebar/sidebar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__components_card_listing_card_listing_component__ = __webpack_require__("../../../../../src/app/components/card-listing/card-listing.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__components_card_card_component__ = __webpack_require__("../../../../../src/app/components/card/card.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__components_comment_section_comment_section_component__ = __webpack_require__("../../../../../src/app/components/comment-section/comment-section.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__components_comment_section_comment_comment_component__ = __webpack_require__("../../../../../src/app/components/comment-section/comment/comment.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__components_new_range_form_new_range_form_component__ = __webpack_require__("../../../../../src/app/components/new-range-form/new-range-form.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__components_comment_section_input_input_component__ = __webpack_require__("../../../../../src/app/components/comment-section/input/input.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__components_filter_filter_component__ = __webpack_require__("../../../../../src/app/components/filter/filter.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__components_scatter_chart_scatter_chart_component__ = __webpack_require__("../../../../../src/app/components/scatter-chart/scatter-chart.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__components_pareto_chart_pareto_chart_component__ = __webpack_require__("../../../../../src/app/components/pareto-chart/pareto-chart.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__components_table_table_component__ = __webpack_require__("../../../../../src/app/components/table/table.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__components_pareto_chart_combo_combo_component__ = __webpack_require__("../../../../../src/app/components/pareto-chart/combo/combo.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__components_pareto_chart_vertical_series_vertical_series_component__ = __webpack_require__("../../../../../src/app/components/pareto-chart/vertical-series/vertical-series.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__pages_cgi_cgi_component__ = __webpack_require__("../../../../../src/app/pages/cgi/cgi.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38__pages_pareto_pareto_component__ = __webpack_require__("../../../../../src/app/pages/pareto/pareto.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







































var Components = [
    __WEBPACK_IMPORTED_MODULE_21__components_control_chart_control_chart_component__["a" /* ControlChartComponent */],
    __WEBPACK_IMPORTED_MODULE_22__components_control_chart_combo_combo_component__["a" /* ComboComponent */],
    __WEBPACK_IMPORTED_MODULE_23__components_top_bar_top_bar_component__["a" /* TopBarComponent */],
    __WEBPACK_IMPORTED_MODULE_24__components_sidebar_sidebar_component__["a" /* SidebarComponent */],
    __WEBPACK_IMPORTED_MODULE_25__components_card_listing_card_listing_component__["a" /* CardListingComponent */],
    __WEBPACK_IMPORTED_MODULE_26__components_card_card_component__["a" /* CardComponent */],
    __WEBPACK_IMPORTED_MODULE_27__components_comment_section_comment_section_component__["a" /* CommentSectionComponent */],
    __WEBPACK_IMPORTED_MODULE_28__components_comment_section_comment_comment_component__["a" /* CommentComponent */],
    __WEBPACK_IMPORTED_MODULE_29__components_new_range_form_new_range_form_component__["a" /* NewRangeFormComponent */],
    __WEBPACK_IMPORTED_MODULE_30__components_comment_section_input_input_component__["a" /* InputComponent */],
    __WEBPACK_IMPORTED_MODULE_31__components_filter_filter_component__["a" /* FilterComponent */],
    __WEBPACK_IMPORTED_MODULE_32__components_scatter_chart_scatter_chart_component__["a" /* ScatterChartComponent */],
    __WEBPACK_IMPORTED_MODULE_34__components_table_table_component__["a" /* TableComponent */],
    __WEBPACK_IMPORTED_MODULE_33__components_pareto_chart_pareto_chart_component__["a" /* ParetoChartComponent */],
    __WEBPACK_IMPORTED_MODULE_35__components_pareto_chart_combo_combo_component__["a" /* ParetoComboComponent */],
    __WEBPACK_IMPORTED_MODULE_36__components_pareto_chart_vertical_series_vertical_series_component__["a" /* ParetoVerticalSeriesComponent */]
];
var Pages = [
    __WEBPACK_IMPORTED_MODULE_38__pages_pareto_pareto_component__["a" /* ParetoPageComponent */],
    __WEBPACK_IMPORTED_MODULE_37__pages_cgi_cgi_component__["a" /* CgiPageComponent */],
];
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_15__app_component__["a" /* AppComponent */]
            ].concat(Components, Pages),
            imports: [
                __WEBPACK_IMPORTED_MODULE_14__app_routing_module__["a" /* AppRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["BrowserModule"],
                __WEBPACK_IMPORTED_MODULE_4__angular_material_list__["a" /* MatListModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material_checkbox__["a" /* MatCheckboxModule */],
                __WEBPACK_IMPORTED_MODULE_12__angular_forms__["c" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_13__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_3__swimlane_ngx_charts__["NgxChartsModule"],
                __WEBPACK_IMPORTED_MODULE_7__angular_material_button__["a" /* MatButtonModule */],
                __WEBPACK_IMPORTED_MODULE_10__angular_material_select__["a" /* MatSelectModule */],
                __WEBPACK_IMPORTED_MODULE_8__angular_material_button_toggle__["a" /* MatButtonToggleModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_material_input__["a" /* MatInputModule */],
                __WEBPACK_IMPORTED_MODULE_9__angular_material_icon__["a" /* MatIconModule */],
                __WEBPACK_IMPORTED_MODULE_10__angular_material_select__["a" /* MatSelectModule */],
                __WEBPACK_IMPORTED_MODULE_11__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_12__angular_forms__["c" /* FormsModule */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_17__services_data_service__["a" /* DataService */],
                __WEBPACK_IMPORTED_MODULE_16__services_comments_service__["a" /* CommentsService */],
                __WEBPACK_IMPORTED_MODULE_18__services_range_service__["a" /* RangeService */],
                __WEBPACK_IMPORTED_MODULE_20__services_view_service__["a" /* ViewService */],
                __WEBPACK_IMPORTED_MODULE_19__services_target_service__["a" /* TargetService */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_15__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/components/card-listing/card-listing.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-list role=\"list\" class=\"list-global\">\n  <div class=\"list-container\">\n    <div class=\"list-header\">\n      <h3 mat-subheader>Warnings</h3>\n    </div>\n    <div class=\"items-list\">\n      <mat-divider></mat-divider>\n      <mat-checkbox [ngModel]=\"rangeService.activated$ | async\"  (ngModelChange)=\"toggle($event)\">Add new limit</mat-checkbox>\n      <app-new-range-form\n        *ngIf=\"(rangeService.activated$  | async) && (activeCoords$ | async)\"\n        [selectedX]=\"(activeCoords$ | async)?.x\"\n        [selectedY]=\"(activeCoords$ | async)?.y\"\n        (cancel)=\"onCancel()\"\n        (createRange)=\"createRange($event)\">\n      </app-new-range-form>\n      <ng-template [ngIf]=\"(warnings$ | async)?.length\">\n        <app-card *ngFor=\"let warning of warnings$ | async\" [color]=\"'#FF8033'\" [title]=\"'Out of range'\" [content]=\"formatWarningContent(warning)\"></app-card>\n      </ng-template>\n    </div>\n  </div>\n  <mat-divider></mat-divider>\n  <div class=\"list-container\" *ngIf=\"!commentList\" >\n    <h3 mat-subheader>Limits</h3>\n    <div class=\"items-list\">\n      <app-card *ngFor=\"let range of ranges$ | async\" [color]=\"'#4981FD'\" [title]=\"range.name\" [content]=\"formatRangeContent(range)\"></app-card>\n    </div>\n  </div>\n</mat-list>\n"

/***/ }),

/***/ "../../../../../src/app/components/card-listing/card-listing.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".mat-list-item-content:ng-deep {\n  padding: 0px !important; }\n\n.mat-divider {\n  border-top-color: rgba(0, 0, 0, 0.12);\n  margin-right: 10px;\n  margin-left: 10px; }\n\n.mat-subheader {\n  color: rgba(0, 0, 0, 0.54);\n  font-size: small;\n  text-transform: uppercase;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center; }\n\n.list-global {\n  height: calc(100% - 40px);\n  overflow: scroll;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column; }\n  .list-global .list-container {\n    -webkit-box-flex: 1;\n        -ms-flex: 1;\n            flex: 1; }\n    .list-global .list-container .items-list {\n      height: calc(100% - 70px);\n      overflow: auto; }\n\n.mat-checkbox {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  font-size: 12px;\n  color: #353535; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/card-listing/card-listing.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CardListingComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_view_service__ = __webpack_require__("../../../../../src/app/services/view.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_range_service__ = __webpack_require__("../../../../../src/app/services/range.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_comments_service__ = __webpack_require__("../../../../../src/app/services/comments.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_data_service__ = __webpack_require__("../../../../../src/app/services/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_Observable__ = __webpack_require__("../../../../rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_do__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/do.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var CardListingComponent = (function () {
    function CardListingComponent(dataService, rangeService, viewService, commentsService) {
        this.dataService = dataService;
        this.rangeService = rangeService;
        this.viewService = viewService;
        this.commentsService = commentsService;
        this.showForm = false;
        this.commentList = false;
    }
    CardListingComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.rangeService.activated$.do(function (val) {
            if (!val) {
                _this.onCancel();
            }
        }).subscribe();
        this.activeCoords$ = this.commentsService.activeCoordinates$;
        this.warnings$ = __WEBPACK_IMPORTED_MODULE_5_rxjs_Observable__["a" /* Observable */].combineLatest(this.dataService.innerWarnings$, this.viewService.activeField$)
            .map(function (_a) {
            var warnings = _a[0], field = _a[1];
            var newW = warnings.filter(function (warning) { return warning.hasOwnProperty(field); });
            return newW.map(function (warning) { return warning[field]['0']; });
        });
        this.ranges$ = this.rangeService.ranges$;
    };
    CardListingComponent.prototype.toggle = function (event) {
        this.viewService.activate(event ? 'range' : '');
    };
    CardListingComponent.prototype.formatWarningContent = function (data) {
        var _this = this;
        var content = '';
        var limits = data.map(function (elem) {
            if (elem.condition) {
                content = content + "\n        - From " + _this.formatDate(elem.first) + " to " + _this.formatDate(elem.last) + ".";
            }
        });
        return content;
    };
    CardListingComponent.prototype.formatRangeContent = function (data) {
        var limitValue = Math.round(data.limitPoints[0].value * 100) / 100;
        if (data.minX && data.maxX) {
            return "From " + data.minX + " to " + data.maxX + " the limit value is " + limitValue;
        }
        if (data.minX) {
            return "From " + data.minX + " the limit value is " + limitValue;
        }
        if (data.maxX) {
            return "Until " + data.minX + " the limit value is " + limitValue;
        }
    };
    CardListingComponent.prototype.formatDate = function (selectedDate) {
        var date = selectedDate.toLocaleDateString().split('/');
        return date[2] + "-" + date[0] + "-" + date[1];
    };
    CardListingComponent.prototype.createRange = function (range) {
        var limitPoint = [{
                value: range.value,
                condition: range.condition
            }];
        this.dataService.colorSet$.next(this.dataService.colorSet$.getValue().concat('black'));
        this.rangeService.addRange(range.name, range.minX, range.maxX, limitPoint);
        // this.dataService.setRange(range.name, range.minX, range.maxX, range.value);
        this.onCancel();
    };
    CardListingComponent.prototype.onCancel = function () {
        this.commentsService.activateCoordinate();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], CardListingComponent.prototype, "commentList", void 0);
    CardListingComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-card-listing',
            template: __webpack_require__("../../../../../src/app/components/card-listing/card-listing.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/card-listing/card-listing.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__services_data_service__["a" /* DataService */],
            __WEBPACK_IMPORTED_MODULE_2__services_range_service__["a" /* RangeService */],
            __WEBPACK_IMPORTED_MODULE_1__services_view_service__["a" /* ViewService */],
            __WEBPACK_IMPORTED_MODULE_3__services_comments_service__["a" /* CommentsService */]])
    ], CardListingComponent);
    return CardListingComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/card/card.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"card\">\n  <div class=\"color-box\" [ngStyle]=\"{'background-color': color}\"></div>\n  <p class=\"card-title\">{{title}}</p>\n  <p class=\"card-content\">{{content}}</p>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/card/card.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".card {\n  color: #353535;\n  font-size: small;\n  background-color: #ffffff;\n  border: 1px solid rgba(0, 0, 0, 0.16);\n  border-radius: 3px;\n  margin: 5px;\n  box-shadow: 0px 1px 5px -3px #4981FD;\n  transition: all 0.5s; }\n  .card .card-title {\n    margin: 0px;\n    padding: 3px 13px 3px 13px; }\n  .card .card-content {\n    transition: all 0.5s;\n    padding: 0 13px 0px 13px;\n    max-height: 0;\n    overflow: hidden;\n    transition: all 0.5; }\n  .card:hover .card-content {\n    max-height: 1000000px; }\n\ndiv.color-box {\n  float: left;\n  border-radius: 50%;\n  width: 10px;\n  height: 10px;\n  margin: 5px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/card/card.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CardComponent = (function () {
    function CardComponent() {
        this.title = 'Limit title';
        this.content = 'Limit values';
    }
    CardComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], CardComponent.prototype, "color", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], CardComponent.prototype, "title", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], CardComponent.prototype, "content", void 0);
    CardComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-card',
            template: __webpack_require__("../../../../../src/app/components/card/card.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/card/card.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], CardComponent);
    return CardComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/comment-section/comment-section.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-list role=\"list\" class=\"list-global\">\n  <div class=\"list-container\">\n    <div class=\"list-header\">\n      <h3 mat-subheader>Comments</h3>\n    </div>\n    <div class=\"items-list\">\n      <mat-divider></mat-divider>\n      <mat-checkbox [ngModel]=\"commentService.activated$ | async\" (ngModelChange)=\"toggle($event)\">\n        Show on table\n      </mat-checkbox>\n      <app-input *ngIf=\"(commentService.activated$ | async) && (activeCoords$ | async)\" (submit)=\"addComment($event)\" (cancel)=\"onCancel()\" [coordX]=\"(activeCoords$ | async)?.x\" [coordY]=\"(activeCoords$ | async)?.y\"></app-input>\n      <ng-template ngFor let-comment let-i=\"index\" [ngForOf]=\"comments$ | async\">\n        <app-comment [comment]=\"comment\" [active]=\"comment.id === (active$ | async)\" [color]=\"'rgba(255, 64, 129, 0.7)'\" (click)=\"activateComment(comment.id)\"></app-comment>\n      </ng-template>\n    </div>\n  </div>\n</mat-list>\n"

/***/ }),

/***/ "../../../../../src/app/components/comment-section/comment-section.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".mat-list-item-content:ng-deep {\n  padding: 0px !important; }\n\n.mat-divider {\n  border-top-color: rgba(0, 0, 0, 0.12);\n  margin-right: 10px;\n  margin-left: 10px; }\n\n.mat-subheader {\n  color: rgba(0, 0, 0, 0.54);\n  font-size: small;\n  text-transform: uppercase;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center; }\n\n.mat-checkbox {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  font-size: 12px;\n  color: #353535; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/comment-section/comment-section.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CommentSectionComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_comments_service__ = __webpack_require__("../../../../../src/app/services/comments.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_do__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/do.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_view_service__ = __webpack_require__("../../../../../src/app/services/view.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CommentSectionComponent = (function () {
    function CommentSectionComponent(commentService, viewService) {
        this.commentService = commentService;
        this.viewService = viewService;
    }
    CommentSectionComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.comments$ = this.commentService.comments$;
        this.active$ = this.commentService.activeComment$.map(function (elem) { return elem ? elem.id : null; });
        this.commentService.activated$.do(function (val) {
            if (!val) {
                _this.onCancel();
            }
        }).subscribe();
        this.activeCoords$ = this.commentService.activeCoordinates$;
    };
    CommentSectionComponent.prototype.toggle = function (event) {
        this.viewService.activate(event ? 'comment' : '');
    };
    CommentSectionComponent.prototype.activateComment = function (id) {
        this.commentService.toogleComment(id);
    };
    CommentSectionComponent.prototype.addComment = function (comment) {
        this.commentService.addComment(comment.title, comment.text, comment.coordinates);
        this.onCancel();
    };
    CommentSectionComponent.prototype.onCancel = function () {
        this.commentService.activateCoordinate();
    };
    CommentSectionComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-comment-section',
            template: __webpack_require__("../../../../../src/app/components/comment-section/comment-section.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/comment-section/comment-section.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_comments_service__["a" /* CommentsService */], __WEBPACK_IMPORTED_MODULE_3__services_view_service__["a" /* ViewService */]])
    ], CommentSectionComponent);
    return CommentSectionComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/comment-section/comment/comment.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"card\" [ngClass]=\"{'active': active}\">\n  <div class=\"color-box\" [ngStyle]=\"{'background-color': color}\"></div>\n  <p class=\"card-title\">{{comment.coordinates.x | date}}</p>\n  <div class=\"card-content\">\n    <p>{{comment.text}}</p>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/comment-section/comment/comment.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".card {\n  color: #353535;\n  font-size: small;\n  background-color: #ffffff;\n  border: 1px solid rgba(0, 0, 0, 0.16);\n  border-radius: 3px;\n  margin: 5px;\n  box-shadow: 0px 1px 5px -3px #4981FD;\n  transition: all 0.5s; }\n  .card .card-title {\n    margin: 0px;\n    padding: 3px 13px 3px 13px; }\n  .card .card-content {\n    transition: all 0.5s;\n    padding: 0 13px 0px 13px;\n    max-height: 0;\n    overflow: hidden; }\n  .card.active {\n    background-color: rgba(255, 63, 129, 0.2); }\n    .card.active .card-content {\n      max-height: 1000px; }\n\ndiv.color-box {\n  float: left;\n  border-radius: 50%;\n  width: 10px;\n  height: 10px;\n  margin: 5px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/comment-section/comment/comment.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CommentComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CommentComponent = (function () {
    function CommentComponent() {
    }
    CommentComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], CommentComponent.prototype, "comment", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], CommentComponent.prototype, "color", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostBinding"])('class.active'),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Boolean)
    ], CommentComponent.prototype, "active", void 0);
    CommentComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-comment',
            template: __webpack_require__("../../../../../src/app/components/comment-section/comment/comment.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/comment-section/comment/comment.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], CommentComponent);
    return CommentComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/comment-section/input/input.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"card\">\n  <mat-form-field class=\"example-full-width\">\n    <input matInput placeholder=\"Comment description\" value=\"Example Text\" [(ngModel)]=\"text\">\n  </mat-form-field>\n  <div class=\"coords\">\n    <mat-form-field>\n      <input matInput placeholder=\"X value\" [(ngModel)]=\"coordX\">\n    </mat-form-field>\n    <mat-form-field class=\"example-full-width\">\n      <input matInput placeholder=\"Y value\" [(ngModel)]=\"coordY\">\n    </mat-form-field>\n  </div>\n  <div class=\"buttons\">\n    <button mat-icon-button color=\"warn\" (click)=\"onCancel()\">Cancelar</button>\n    <button mat-raised-button color=\"primary\" (click)=\"onSubmit()\">Add Comment</button>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/comment-section/input/input.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".coords {\n  width: 100%; }\n\n.card {\n  border-top: 2px solid #4981FD;\n  border-bottom: 2px solid #4981FD;\n  background-color: white;\n  font-size: 14px;\n  padding: 10px;\n  margin: 10px; }\n\ndiv.buttons {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/comment-section/input/input.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InputComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var InputComponent = (function () {
    function InputComponent() {
        this.submit = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.cancel = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    InputComponent.prototype.ngOnInit = function () {
    };
    InputComponent.prototype.ngAfterViewInit = function () {
    };
    InputComponent.prototype.onSubmit = function () {
        this.submit.emit({
            text: this.text,
            coordinates: {
                x: this.coordX,
                y: this.coordY
            }
        });
    };
    InputComponent.prototype.onCancel = function () {
        this.cancel.emit();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], InputComponent.prototype, "coordX", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Number)
    ], InputComponent.prototype, "coordY", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], InputComponent.prototype, "submit", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], InputComponent.prototype, "cancel", void 0);
    InputComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-input',
            template: __webpack_require__("../../../../../src/app/components/comment-section/input/input.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/comment-section/input/input.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], InputComponent);
    return InputComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/control-chart/combo/combo.component.html":
/***/ (function(module, exports) {

module.exports = "<ngx-charts-chart\n  [view]=\"[width, height]\"\n  [showLegend]=\"legend\"\n  [legendOptions]=\"legendOptions\"\n  [activeEntries]=\"activeEntries\"\n  [animations]=\"animations\"\n  (legendLabelClick)=\"onClick($event)\"\n  (legendLabelActivate)=\"onActivate($event)\"\n  (legendLabelDeactivate)=\"onDeactivate($event)\">\n  <svg:defs>\n    <svg:clipPath [attr.id]=\"clipPathId\">\n      <svg:rect\n        [attr.width]=\"dims.width + 10\"\n        [attr.height]=\"dims.height + 10\"\n        [attr.transform]=\"'translate(-5, -5)'\"/>\n    </svg:clipPath>\n  </svg:defs>\n  <svg:g [attr.transform]=\"transform\" class=\"line-chart chart\">\n    \n    <svg:g ngx-charts-x-axis\n      *ngIf=\"xAxis\"\n      [xScale]=\"xScale\"\n      [dims]=\"dims\"\n      [showGridLines]=\"showGridLines\"\n      [showLabel]=\"showXAxisLabel\"\n      [labelText]=\"xAxisLabel\"\n      [tickFormatting]=\"xAxisTickFormatting\"\n      (dimensionsChanged)=\"updateXAxisHeight($event)\">\n    </svg:g>\n    <svg:g ngx-charts-y-axis\n      *ngIf=\"yAxis\"\n      [yScale]=\"yScale\"\n      [dims]=\"dims\"\n      [showGridLines]=\"showGridLines\"\n      [showLabel]=\"showYAxisLabel\"\n      [labelText]=\"yAxisLabel\"\n      [tickFormatting]=\"yAxisTickFormatting\"\n      [referenceLines]=\"referenceLines\"\n      [showRefLines]=\"showRefLines\"\n      [showRefLabels]=\"showRefLabels\"\n      (dimensionsChanged)=\"updateYAxisWidth($event)\">\n    </svg:g>\n    <svg:g [attr.clip-path]=\"clipPath\">\n      <svg:g *ngFor=\"let series of results; trackBy:trackBy\" [@animationState]=\"'active'\">\n        <svg:g ngx-charts-line-series\n          [xScale]=\"xScale\"\n          [yScale]=\"yScale\"\n          [colors]=\"colors\"\n          [data]=\"series\"\n          [activeEntries]=\"activeEntries\"\n          [scaleType]=\"scaleType\"\n          [curve]=\"curve\"\n          [rangeFillOpacity]=\"rangeFillOpacity\"\n          [hasRange]=\"hasRange\"\n          [animations]=\"animations\"\n        />\n      </svg:g>\n\n      <svg:g *ngIf=\"!tooltipDisabled\" (mouseleave)=\"hideCircles()\">\n        <svg:g ngx-charts-tooltip-area\n          [dims]=\"dims\"\n          [xSet]=\"xSet\"\n          [xScale]=\"xScale\"\n          [yScale]=\"yScale\"\n          [results]=\"results\"\n          [colors]=\"colors\"\n          [tooltipDisabled]=\"tooltipDisabled\"\n          [tooltipTemplate]=\"seriesTooltipTemplate\"\n          (hover)=\"updateHoveredVertical($event)\"\n          (clicked)=\"areaClicked($event)\"\n        />\n\n        <svg:g *ngFor=\"let series of results\">\n          <svg:g ngx-charts-circle-series\n            [xScale]=\"xScale\"\n            [yScale]=\"yScale\"\n            [colors]=\"colors\"\n            [data]=\"series\"\n            [scaleType]=\"scaleType\"\n            [visibleValue]=\"hoveredVertical\"\n            [activeEntries]=\"activeEntries\"\n            [tooltipDisabled]=\"tooltipDisabled\"\n            [tooltipTemplate]=\"tooltipTemplate\"\n            (select)=\"onClick($event, series)\"\n            (activate)=\"onActivate($event)\"\n            (deactivate)=\"onDeactivate($event)\"\n          />\n        </svg:g>\n      </svg:g>\n      <ng-container *ngIf=\"commentsActive\">\n        <svg:g *ngFor=\"let series of comments\">\n            <svg:g ngx-charts-bubble-series\n            [xScale]=\"xScale\"\n            [yScale]=\"yScale\"\n            [rScale]=\"rScale\"\n            [xScaleType]=\"xScaleType\"\n            [yScaleType]=\"yScaleType\"\n            [xAxisLabel]=\"xAxisLabel\"\n            [yAxisLabel]=\"yAxisLabel\"\n            [colors]=\"secondaryColors\"\n            [data]=\"series\"\n            [activeEntries]=\"activeComment\"\n            [tooltipDisabled]=\"tooltipDisabled\"\n            [tooltipTemplate]=\"tooltipTemplate\"\n            (select)=\"onClick($event, series)\"\n            (activate)=\"onHover($event, series)\"\n            (deactivate)=\"onHover($event, null)\" />\n        </svg:g>\n      </ng-container>\n    </svg:g>\n  </svg:g>\n  <svg:g ngx-charts-timeline\n    *ngIf=\"timeline && scaleType != 'ordinal'\"\n    [attr.transform]=\"timelineTransform\"\n    [results]=\"results\"\n    [view]=\"[timelineWidth, height]\"\n    [height]=\"timelineHeight\"\n    [scheme]=\"scheme\"\n    [customColors]=\"customColors\"\n    [scaleType]=\"scaleType\"\n    [legend]=\"legend\"\n    (onDomainChange)=\"updateDomain($event)\">\n    <svg:g *ngFor=\"let series of results; trackBy:trackBy\">\n      <svg:g ngx-charts-line-series\n        [xScale]=\"timelineXScale\"\n        [yScale]=\"timelineYScale\"\n        [colors]=\"colors\"\n        [data]=\"series\"\n        [scaleType]=\"scaleType\"\n        [curve]=\"curve\"\n        [hasRange]=\"hasRange\"\n        [animations]=\"animations\"\n      />\n    </svg:g>\n  </svg:g>\n</ngx-charts-chart>"

/***/ }),

/***/ "../../../../../src/app/components/control-chart/combo/combo.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".ngx-charts {\n  float: left;\n  overflow: visible; }\n  .ngx-charts .circle,\n  .ngx-charts .bar,\n  .ngx-charts .arc {\n    cursor: pointer; }\n  .ngx-charts .bar.active, .ngx-charts .bar:hover,\n  .ngx-charts .cell.active,\n  .ngx-charts .cell:hover,\n  .ngx-charts .arc.active,\n  .ngx-charts .arc:hover,\n  .ngx-charts .card.active,\n  .ngx-charts .card:hover {\n    opacity: 0.8;\n    transition: opacity 100ms ease-in-out; }\n  .ngx-charts .bar:focus,\n  .ngx-charts .cell:focus,\n  .ngx-charts .arc:focus,\n  .ngx-charts .card:focus {\n    outline: none; }\n  .ngx-charts g:focus {\n    outline: none; }\n  .ngx-charts .line-series.inactive,\n  .ngx-charts .line-series-range.inactive,\n  .ngx-charts .polar-series-path.inactive,\n  .ngx-charts .polar-series-area.inactive,\n  .ngx-charts .area-series.inactive {\n    transition: opacity 100ms ease-in-out;\n    opacity: .2; }\n  .ngx-charts .line-highlight {\n    display: none; }\n    .ngx-charts .line-highlight.active {\n      display: block; }\n  .ngx-charts .area {\n    opacity: 0.6; }\n  .ngx-charts .circle:hover {\n    cursor: pointer; }\n  .ngx-charts .label {\n    font-size: 12px;\n    font-weight: normal; }\n  .ngx-charts .tooltip-anchor {\n    fill: black; }\n  .ngx-charts .gridline-path {\n    stroke: #ddd;\n    stroke-width: 1;\n    fill: none; }\n  .ngx-charts .refline-path {\n    stroke: #a8b2c7;\n    stroke-width: 1;\n    stroke-dasharray: 5;\n    stroke-dashoffset: 5; }\n  .ngx-charts .refline-label {\n    font-size: 9px; }\n  .ngx-charts .reference-area {\n    fill-opacity: 0.05;\n    fill: #000; }\n  .ngx-charts .gridline-path-dotted {\n    stroke: #ddd;\n    stroke-width: 1;\n    fill: none;\n    stroke-dasharray: 1, 20;\n    stroke-dashoffset: 3; }\n  .ngx-charts .grid-panel rect {\n    fill: none; }\n  .ngx-charts .grid-panel.odd rect {\n    fill: rgba(0, 0, 0, 0.05); }\n\n.ngx-charts-outer {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: reverse;\n      -ms-flex-direction: column-reverse;\n          flex-direction: column-reverse;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  width: 100%; }\n  .ngx-charts-outer .chart-legend {\n    min-width: 500px !important; }\n    .ngx-charts-outer .chart-legend > div {\n      width: 100% !important; }\n      .ngx-charts-outer .chart-legend > div .legend-labels {\n        background: transparent;\n        display: -webkit-box;\n        display: -ms-flexbox;\n        display: flex;\n        -webkit-box-orient: horizontal;\n        -webkit-box-direction: normal;\n            -ms-flex-direction: row;\n                flex-direction: row;\n        -ms-flex-pack: distribute;\n            justify-content: space-around; }\n        .ngx-charts-outer .chart-legend > div .legend-labels .legend-label {\n          color: rgba(35, 35, 35, 0.6); }\n        .ngx-charts-outer .chart-legend > div .legend-labels span:focus {\n          outline: none; }\n        .ngx-charts-outer .chart-legend > div .legend-labels .legend-label-color {\n          border-radius: 0;\n          height: 7px; }\n      .ngx-charts-outer .chart-legend > div header {\n        display: none; }\n  .ngx-charts-outer .axis text {\n    font-size: 12px;\n    fill: rgba(35, 35, 35, 0.6); }\n  .ngx-charts-outer rect.overlay {\n    stroke-width: 1;\n    stroke: rgba(35, 35, 35, 0.6);\n    shape-rendering: crispedges;\n    cursor: crosshair; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/control-chart/combo/combo.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ComboComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__swimlane_ngx_charts__ = __webpack_require__("../../../../@swimlane/ngx-charts/release/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__swimlane_ngx_charts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__swimlane_ngx_charts__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_d3_shape__ = __webpack_require__("../../../../d3-shape/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_d3_scale__ = __webpack_require__("../../../../d3-scale/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__swimlane_ngx_charts_release_utils__ = __webpack_require__("../../../../@swimlane/ngx-charts/release/utils/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_animations__ = __webpack_require__("../../../animations/esm5/animations.js");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ComboComponent = (function (_super) {
    __extends(ComboComponent, _super);
    function ComboComponent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.legendTitle = 'Legend';
        _this.showGridLines = true;
        _this.curve = __WEBPACK_IMPORTED_MODULE_2_d3_shape__["curveLinear"];
        _this.activeEntries = [];
        _this.roundDomains = false;
        _this.tooltipDisabled = false;
        _this.showRefLines = false;
        _this.showRefLabels = true;
        _this.activeComment = [];
        _this.commentColor = { domain: ['rgba(255, 64, 129, 0.7)', 'rgba(63, 81, 181, 0.7)'] };
        _this.activate = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        _this.deactivate = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        _this.clicked = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        _this.hover = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        _this.yScaleType = 'linear';
        _this.margin = [10, 20, 10, 20];
        _this.xAxisHeight = 0;
        _this.yAxisWidth = 0;
        _this.timelineHeight = 50;
        _this.timelinePadding = 10;
        return _this;
    }
    ComboComponent.prototype.update = function () {
        _super.prototype.update.call(this);
        this.dims = Object(__WEBPACK_IMPORTED_MODULE_1__swimlane_ngx_charts__["calculateViewDimensions"])({
            width: this.width,
            height: this.height,
            margins: this.margin,
            showXAxis: this.xAxis,
            showYAxis: this.yAxis,
            xAxisHeight: this.xAxisHeight,
            yAxisWidth: this.yAxisWidth,
            showXLabel: this.showXAxisLabel,
            showYLabel: this.showYAxisLabel,
            showLegend: this.legend,
            legendType: this.schemeType,
        });
        this.rScale = Object(__WEBPACK_IMPORTED_MODULE_3_d3_scale__["scaleLinear"])().range([5, 10]).domain([1, 10]);
        if (this.timeline) {
            this.dims.height -= (this.timelineHeight + this.margin[2] + this.timelinePadding);
        }
        this.xDomain = this.getXDomain();
        if (this.filteredDomain) {
            this.xDomain = this.filteredDomain;
        }
        this.yDomain = this.getYDomain();
        this.seriesDomain = this.getSeriesDomain();
        this.xScale = this.getXScale(this.xDomain, this.dims.width);
        this.yScale = this.getYScale(this.yDomain, this.dims.height);
        this.updateTimeline();
        this.setColors();
        this.legendOptions = this.getLegendOptions();
        this.transform = "translate(" + this.dims.xOffset + " , " + this.margin[0] + ")";
        this.clipPathId = 'clip' + Object(__WEBPACK_IMPORTED_MODULE_4__swimlane_ngx_charts_release_utils__["a" /* id */])().toString();
        this.clipPath = "url(#" + this.clipPathId + ")";
    };
    ComboComponent.prototype.updateTimeline = function () {
        if (this.timeline) {
            this.timelineWidth = this.dims.width;
            this.timelineXDomain = this.getXDomain();
            this.timelineXScale = this.getXScale(this.timelineXDomain, this.timelineWidth);
            this.timelineYScale = this.getYScale(this.yDomain, this.timelineHeight);
            this.timelineTransform = "translate(" + this.dims.xOffset + ", " + -this.margin[2] + ")";
        }
    };
    ComboComponent.prototype.getXDomain = function () {
        var values = [];
        for (var _i = 0, _a = this.results; _i < _a.length; _i++) {
            var results = _a[_i];
            for (var _b = 0, _c = results.series; _b < _c.length; _b++) {
                var d = _c[_b];
                if (!values.includes(d.name)) {
                    values.push(d.name);
                }
            }
        }
        this.scaleType = this.getScaleType(values);
        this.xScaleType = this.scaleType;
        var domain = [];
        if (this.scaleType === 'linear') {
            values = values.map(function (v) { return Number(v); });
        }
        var min;
        var max;
        if (this.scaleType === 'time' || this.scaleType === 'linear') {
            min = this.xScaleMin
                ? this.xScaleMin
                : Math.min.apply(Math, values);
            max = this.xScaleMax
                ? this.xScaleMax
                : Math.max.apply(Math, values);
        }
        if (this.scaleType === 'time') {
            domain = [new Date(min), new Date(max)];
            this.xSet = values.slice().sort(function (a, b) {
                var aDate = a.getTime();
                var bDate = b.getTime();
                if (aDate > bDate) {
                    return 1;
                }
                if (bDate > aDate) {
                    return -1;
                }
                return 0;
            });
        }
        else if (this.scaleType === 'linear') {
            domain = [min, max];
            // Use compare function to sort numbers numerically
            this.xSet = values.slice().sort(function (a, b) { return (a - b); });
        }
        else {
            domain = values;
            this.xSet = values;
        }
        return domain;
    };
    ComboComponent.prototype.getYDomain = function () {
        var domain = [];
        for (var _i = 0, _a = this.results; _i < _a.length; _i++) {
            var results = _a[_i];
            for (var _b = 0, _c = results.series; _b < _c.length; _b++) {
                var d = _c[_b];
                if (domain.indexOf(d.value) < 0) {
                    domain.push(d.value);
                }
                if (d.min !== undefined) {
                    this.hasRange = true;
                    if (domain.indexOf(d.min) < 0) {
                        domain.push(d.min);
                    }
                }
                if (d.max !== undefined) {
                    this.hasRange = true;
                    if (domain.indexOf(d.max) < 0) {
                        domain.push(d.max);
                    }
                }
            }
        }
        var values = domain.slice();
        if (!this.autoScale) {
            values.push(0);
        }
        var min = this.yScaleMin
            ? this.yScaleMin
            : Math.min.apply(Math, values);
        var max = this.yScaleMax
            ? this.yScaleMax
            : Math.max.apply(Math, values);
        return [min, max];
    };
    ComboComponent.prototype.getSeriesDomain = function () {
        return this.results.map(function (d) { return d.name; });
    };
    ComboComponent.prototype.getXScale = function (domain, width) {
        var scale;
        if (this.scaleType === 'time') {
            scale = Object(__WEBPACK_IMPORTED_MODULE_3_d3_scale__["scaleTime"])()
                .range([0, width])
                .domain(domain);
        }
        else if (this.scaleType === 'linear') {
            scale = Object(__WEBPACK_IMPORTED_MODULE_3_d3_scale__["scaleLinear"])()
                .range([0, width])
                .domain(domain);
            if (this.roundDomains) {
                scale = scale.nice();
            }
        }
        else if (this.scaleType === 'ordinal') {
            scale = Object(__WEBPACK_IMPORTED_MODULE_3_d3_scale__["scalePoint"])()
                .range([0, width])
                .padding(0.1)
                .domain(domain);
        }
        return scale;
    };
    ComboComponent.prototype.getYScale = function (domain, height) {
        var scale = Object(__WEBPACK_IMPORTED_MODULE_3_d3_scale__["scaleLinear"])()
            .range([height, 0])
            .domain(domain);
        return this.roundDomains ? scale.nice() : scale;
    };
    ComboComponent.prototype.getScaleType = function (values) {
        var date = true;
        var num = true;
        for (var _i = 0, values_1 = values; _i < values_1.length; _i++) {
            var value = values_1[_i];
            if (!this.isDate(value)) {
                date = false;
            }
            if (typeof value !== 'number') {
                num = false;
            }
        }
        if (date) {
            return 'time';
        }
        if (num) {
            return 'linear';
        }
        return 'ordinal';
    };
    ComboComponent.prototype.isDate = function (value) {
        if (value instanceof Date) {
            return true;
        }
        return false;
    };
    ComboComponent.prototype.updateDomain = function (domain) {
        this.filteredDomain = domain;
        this.xDomain = this.filteredDomain;
        this.xScale = this.getXScale(this.xDomain, this.dims.width);
    };
    ComboComponent.prototype.updateHoveredVertical = function (item) {
        this.hoveredVertical = item.value;
        this.deactivateAll();
    };
    ComboComponent.prototype.areaClicked = function (item) {
        this.clicked.emit(item);
    };
    ComboComponent.prototype.hideCircles = function () {
        this.hoveredVertical = null;
        this.deactivateAll();
    };
    ComboComponent.prototype.onClick = function (data, series) {
        if (series) {
            data.series = series.name;
        }
        this.select.emit(data);
    };
    ComboComponent.prototype.onHover = function (data, series) {
        data.activate = series ? true : false;
        this.hover.emit({ data: data, series: series ? series.series : null });
    };
    ComboComponent.prototype.trackBy = function (index, item) {
        return item.name;
    };
    ComboComponent.prototype.setColors = function () {
        var domain;
        if (this.schemeType === 'ordinal') {
            domain = this.seriesDomain;
        }
        else {
            domain = this.yDomain;
        }
        this.colors = new __WEBPACK_IMPORTED_MODULE_1__swimlane_ngx_charts__["ColorHelper"](this.scheme, this.schemeType, domain, this.customColors);
        this.secondaryColors = new __WEBPACK_IMPORTED_MODULE_1__swimlane_ngx_charts__["ColorHelper"](this.commentColor, this.schemeType, domain);
    };
    ComboComponent.prototype.getLegendOptions = function () {
        var opts = {
            scaleType: this.schemeType,
            colors: undefined,
            domain: [],
            title: undefined
        };
        if (opts.scaleType === 'ordinal') {
            opts.domain = this.seriesDomain;
            opts.colors = this.colors;
            opts.title = this.legendTitle;
        }
        else {
            opts.domain = this.yDomain;
            opts.colors = this.colors.scale;
        }
        return opts;
    };
    ComboComponent.prototype.updateYAxisWidth = function (_a) {
        var width = _a.width;
        this.yAxisWidth = width;
        this.update();
    };
    ComboComponent.prototype.updateXAxisHeight = function (_a) {
        var height = _a.height;
        this.xAxisHeight = height;
        this.update();
    };
    ComboComponent.prototype.onActivate = function (item) {
        this.deactivateAll();
        var idx = this.activeEntries.findIndex(function (d) {
            return d.name === item.name && d.value === item.value;
        });
        if (idx > -1) {
            return;
        }
        this.activeEntries = [item];
        this.activate.emit({ value: item, entries: this.activeEntries });
    };
    ComboComponent.prototype.onDeactivate = function (item) {
        var idx = this.activeEntries.findIndex(function (d) {
            return d.name === item.name && d.value === item.value;
        });
        this.activeEntries.splice(idx, 1);
        this.activeEntries = this.activeEntries.slice();
        this.deactivate.emit({ value: item, entries: this.activeEntries });
    };
    ComboComponent.prototype.deactivateAll = function () {
        this.activeEntries = this.activeEntries.slice();
        for (var _i = 0, _a = this.activeEntries; _i < _a.length; _i++) {
            var entry = _a[_i];
            this.deactivate.emit({ value: entry, entries: [] });
        }
        this.activeEntries = [];
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], ComboComponent.prototype, "legend", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], ComboComponent.prototype, "legendTitle", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], ComboComponent.prototype, "xAxis", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], ComboComponent.prototype, "yAxis", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], ComboComponent.prototype, "showXAxisLabel", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], ComboComponent.prototype, "showYAxisLabel", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], ComboComponent.prototype, "xAxisLabel", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], ComboComponent.prototype, "yAxisLabel", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], ComboComponent.prototype, "autoScale", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], ComboComponent.prototype, "timeline", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Boolean)
    ], ComboComponent.prototype, "gradient", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Boolean)
    ], ComboComponent.prototype, "showGridLines", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], ComboComponent.prototype, "curve", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Array)
    ], ComboComponent.prototype, "activeEntries", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], ComboComponent.prototype, "schemeType", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Number)
    ], ComboComponent.prototype, "rangeFillOpacity", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], ComboComponent.prototype, "xAxisTickFormatting", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], ComboComponent.prototype, "yAxisTickFormatting", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Boolean)
    ], ComboComponent.prototype, "roundDomains", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Boolean)
    ], ComboComponent.prototype, "tooltipDisabled", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Boolean)
    ], ComboComponent.prototype, "showRefLines", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], ComboComponent.prototype, "referenceLines", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Boolean)
    ], ComboComponent.prototype, "showRefLabels", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], ComboComponent.prototype, "xScaleMin", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], ComboComponent.prototype, "xScaleMax", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Number)
    ], ComboComponent.prototype, "yScaleMin", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Number)
    ], ComboComponent.prototype, "yScaleMax", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], ComboComponent.prototype, "comments", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Array)
    ], ComboComponent.prototype, "activeComment", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], ComboComponent.prototype, "commentColor", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Boolean)
    ], ComboComponent.prototype, "commentsActive", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"])
    ], ComboComponent.prototype, "activate", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"])
    ], ComboComponent.prototype, "deactivate", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"])
    ], ComboComponent.prototype, "clicked", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"])
    ], ComboComponent.prototype, "hover", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ContentChild"])('tooltipTemplate'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["TemplateRef"])
    ], ComboComponent.prototype, "tooltipTemplate", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ContentChild"])('seriesTooltipTemplate'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["TemplateRef"])
    ], ComboComponent.prototype, "seriesTooltipTemplate", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"])('mouseleave'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], ComboComponent.prototype, "hideCircles", null);
    ComboComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-combo',
            template: __webpack_require__("../../../../../src/app/components/control-chart/combo/combo.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/control-chart/combo/combo.component.scss")],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None,
            changeDetection: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectionStrategy"].OnPush,
            animations: [
                Object(__WEBPACK_IMPORTED_MODULE_5__angular_animations__["trigger"])('animationState', [
                    Object(__WEBPACK_IMPORTED_MODULE_5__angular_animations__["transition"])(':leave', [
                        Object(__WEBPACK_IMPORTED_MODULE_5__angular_animations__["style"])({
                            opacity: 1,
                        }),
                        Object(__WEBPACK_IMPORTED_MODULE_5__angular_animations__["animate"])(500, Object(__WEBPACK_IMPORTED_MODULE_5__angular_animations__["style"])({
                            opacity: 0
                        }))
                    ])
                ])
            ]
        })
    ], ComboComponent);
    return ComboComponent;
}(__WEBPACK_IMPORTED_MODULE_1__swimlane_ngx_charts__["BaseChartComponent"]));



/***/ }),

/***/ "../../../../../src/app/components/control-chart/control-chart.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"chart-container\" #target>\n<app-filter (change)=\"doChange($event)\" [options]=\"fieldOptions\" [targetOptions]=\"budgetOptions\"></app-filter>\n  \n  <app-combo\n    [view]=\"[width, height]\"\n    [scheme]=\"colorScheme\"\n    [results]=\"fullData$ | async\"\n    [comments]=\"fullComments$ | async\"\n    [commentsActive]=\"commentsVisible$ | async\"\n    [activeComment]=\"activeComment$ | async\"\n    [animations]=\"animations\"\n    [gradient]=\"gradient\"\n    [xAxis]=\"showXAxis\"\n    [yAxis]=\"showYAxis\"\n    [legend]=\"showLegend\"\n    [showGridLines]=\"true\"\n    [timeline]=\"true\"\n    [showXAxisLabel]=\"showXAxisLabel\"\n    [showYAxisLabel]=\"showYAxisLabel\"\n    [showRefLabels]=\"false\"\n    [xAxisLabel]=\"xAxisLabel\"\n    [yAxisLabel]=\"yAxisLabel\"\n    [autoScale]=\"autoScale\"\n    (clicked)=\"onClicked($event)\"\n    (hover)=\"onHover($event)\"\n    (select)=\"onSelect($event)\">\n  </app-combo>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/control-chart/control-chart.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".chart-container {\n  border-radius: 3px;\n  background-color: #ffffff;\n  box-shadow: 0px 0px 1px #4981FD;\n  padding: 10px 15px 15px 15px;\n  height: calc(50% + 10px); }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/control-chart/control-chart.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ControlChartComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_data_service__ = __webpack_require__("../../../../../src/app/services/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_range_service__ = __webpack_require__("../../../../../src/app/services/range.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_view_service__ = __webpack_require__("../../../../../src/app/services/view.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__ = __webpack_require__("../../../../rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_comments_service__ = __webpack_require__("../../../../../src/app/services/comments.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_observable_combineLatest__ = __webpack_require__("../../../../rxjs/_esm5/add/observable/combineLatest.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_target_service__ = __webpack_require__("../../../../../src/app/services/target.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var ControlChartComponent = (function () {
    function ControlChartComponent(dataService, commentService, rangeService, targetService, viewService) {
        this.dataService = dataService;
        this.commentService = commentService;
        this.rangeService = rangeService;
        this.targetService = targetService;
        this.viewService = viewService;
        this.change = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.colorScheme = {
            domain: []
        };
        this.gradient = true;
        this.showXAxis = true;
        this.showYAxis = true;
        this.showLegend = true;
        this.showXAxisLabel = true;
        this.showYAxisLabel = true;
        this.xAxisLabel = 'Date';
        this.yAxisLabel = 'Total Fases Extraction';
        this.autoScale = true;
        this.animations = false;
        this.selectedX = '';
        this.selectedY = 0;
    }
    ControlChartComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.width = this.target.element.nativeElement.getBoundingClientRect().width;
        this.height = this.target.element.nativeElement.getBoundingClientRect().height;
        this.height -= 110;
        this.dataService.colorSet$.do(function (set) { return _this.colorScheme = { domain: set }; }).subscribe();
        this.data$ = this.dataService.dataControl$;
        this.targetData$ = this.targetService.target$;
        this.rangeData$ = this.rangeService.rangeData$;
        this.viewService.activeView$.do(function (view) { return _this.selectedView = view.length ? true : false; }).subscribe();
        this.fullData$ = __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__["a" /* Observable */].combineLatest(this.data$, this.targetData$, this.rangeData$)
            .map(function (data) {
            return data[0].concat(data[1], data[2]);
        });
        this.commentsVisible$ = this.commentService.activated$.do(function (data) { return _this.commentsVisible = data; });
        this.activeComment$ = this.commentService.activeComment$.map(function (comment) {
            if (!comment) {
                return [];
            }
            return [{
                    name: 'Comment',
                    series: [
                        {
                            name: comment.target,
                            id: comment.id,
                            y: comment.coordinates.y,
                            x: new Date(comment.coordinates.x),
                            radius: 5,
                        }
                    ]
                }];
        });
        this.comments$ = this.commentService.comments$.map(function (comments) {
            return comments.map(function (comment) {
                return {
                    name: 'Comment',
                    series: [
                        {
                            name: comment.target,
                            id: comment.id,
                            y: comment.coordinates.y,
                            x: new Date(comment.coordinates.x),
                            radius: 5,
                        }
                    ]
                };
            });
        });
        this.fullComments$ = __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__["a" /* Observable */].combineLatest(this.comments$, this.commentService.activeCoordinates$)
            .map(function (data) {
            if (data[1]) {
                return data[0].concat([
                    {
                        name: 'Placeholder',
                        series: [
                            {
                                name: ": Placeholder",
                                y: data[1].y,
                                x: new Date(data[1].x),
                                radius: 5,
                            }
                        ]
                    }
                ]);
            }
            else {
                return data[0];
            }
        });
    };
    ControlChartComponent.prototype.onSelect = function (event) {
        this.activateCoordinate(this.formatDate(event.name), event.value);
    };
    ControlChartComponent.prototype.onClicked = function (event) {
        this.selectedX = this.formatDate(event.xScale);
        this.selectedY = event.yScale;
        this.activateCoordinate(this.selectedX, event.yScale);
    };
    ControlChartComponent.prototype.activateCoordinate = function (x, y) {
        if (this.selectedView) {
            this.commentService.activateCoordinate(x, y);
        }
    };
    ControlChartComponent.prototype.onHover = function (event) {
        this.commentService.toogleComment(event ? event.series ? event.series[0].id : null : null);
    };
    ControlChartComponent.prototype.formatDate = function (selectedDate) {
        var date = selectedDate.toLocaleDateString().split('/');
        return date[2] + "-" + date[0] + "-" + date[1];
    };
    ControlChartComponent.prototype.doChange = function (event) {
        this.change.emit(event);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('target', { read: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"] }),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"])
    ], ControlChartComponent.prototype, "target", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], ControlChartComponent.prototype, "fieldOptions", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], ControlChartComponent.prototype, "budgetOptions", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], ControlChartComponent.prototype, "change", void 0);
    ControlChartComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-control-chart',
            template: __webpack_require__("../../../../../src/app/components/control-chart/control-chart.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/control-chart/control-chart.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_data_service__["a" /* DataService */],
            __WEBPACK_IMPORTED_MODULE_5__services_comments_service__["a" /* CommentsService */],
            __WEBPACK_IMPORTED_MODULE_2__services_range_service__["a" /* RangeService */],
            __WEBPACK_IMPORTED_MODULE_8__services_target_service__["a" /* TargetService */],
            __WEBPACK_IMPORTED_MODULE_3__services_view_service__["a" /* ViewService */]])
    ], ControlChartComponent);
    return ControlChartComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/filter/filter.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container filter-cont\">\n  <div class=\"fields\">\n    <mat-form-field  *ngFor=\"let field of options\" [ngClass]=\"{'first': scatter}\">\n      <mat-select [(value)]=\"field.selected\" (change)=\"emit(field.name, $event.value)\">\n        <ng-template ngFor let-option [ngForOf]=\"field.options\">\n          <mat-option [value]=\"option.value\">{{option.text}}</mat-option>\n        </ng-template>\n      </mat-select>\n    </mat-form-field>\n  </div>  \n  <mat-button-toggle-group *ngIf=\"targetOptions\" [(value)]=\"targetOptions.selected\" (change)=\"emit('target', $event.value)\">\n    <ng-template ngFor let-option [ngForOf]=\"targetOptions.options\">\n      <mat-button-toggle [value]=\"option.value\">{{option.text}}</mat-button-toggle>\n    </ng-template>\n  </mat-button-toggle-group>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/filter/filter.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".container {\n  background-color: #ffffff;\n  padding: 10px;\n  height: 40px;\n  margin: 0 0 5px 0;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between; }\n  .container .fields {\n    width: calc(100% - 315px);\n    margin-top: -13px; }\n    .container .fields mat-form-field {\n      margin: 4px;\n      height: 30px;\n      font-size: 14px; }\n      .container .fields mat-form-field.first {\n        width: 22%; }\n  .container mat-button-toggle-group, .container mat-option, .container mat-form-field {\n    height: 30px;\n    font-size: 14px;\n    color: #353535; }\n  .container .mat-button-toggle-checked {\n    background-color: #a59cb6;\n    color: #f9f9f9; }\n\n.filter-cont {\n  padding: 0px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/filter/filter.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FilterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FilterComponent = (function () {
    function FilterComponent() {
        this.options = [];
        this.scatter = false;
        this.change = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    FilterComponent.prototype.ngOnInit = function () {
    };
    FilterComponent.prototype.emit = function (field, value) {
        this.change.emit({ field: field, value: value });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Array)
    ], FilterComponent.prototype, "options", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], FilterComponent.prototype, "targetOptions", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Boolean)
    ], FilterComponent.prototype, "scatter", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], FilterComponent.prototype, "change", void 0);
    FilterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-filter',
            template: __webpack_require__("../../../../../src/app/components/filter/filter.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/filter/filter.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], FilterComponent);
    return FilterComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/new-range-form/new-range-form.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"card\">\n  <mat-form-field class=\"full-width\">\n    <input matInput placeholder=\"Range name\" [(ngModel)]=\"range.name\">\n  </mat-form-field>\n\n  <mat-form-field class=\"full-width\">\n    <input matInput placeholder=\"Min X\" [(ngModel)]=\"range.minX\">\n  </mat-form-field>\n\n  <mat-form-field class=\"full-width\">\n    <input matInput placeholder=\"Max X\" [(ngModel)]=\"range.maxX\">\n  </mat-form-field>\n\n  <mat-form-field class=\"full-width\">\n    <input matInput placeholder=\"Value\" [(ngModel)]=\"range.value\">\n  </mat-form-field>\n\n  <mat-form-field class=\"full-width\">\n    <mat-select [(ngModel)]=\"range.condition\">\n      <mat-option value=\"gt\">></mat-option>\n      <mat-option value=\"gte\">>=</mat-option>\n      <mat-option value=\"equal\">=</mat-option>\n      <mat-option value=\"lt\"><</mat-option>\n      <mat-option value=\"lte\"><=</mat-option>\n    </mat-select>\n  </mat-form-field>\n\n  <div class=\"buttons\">\n    <button mat-icon-button color=\"warn\" (click)=\"onCancel()\">Cancel</button>\n    <button mat-raised-button color=\"primary\" (click)=\"saveRange()\">Add Range</button>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/new-range-form/new-range-form.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".form-container {\n  background-color: #ffffff;\n  border: 1px solid #D4E3E8; }\n\n.card {\n  border-top: 2px solid #4981FD;\n  border-bottom: 2px solid #4981FD;\n  background-color: white;\n  font-size: 14px;\n  padding: 10px;\n  margin: 10px; }\n  .card .full-width {\n    width: 100%; }\n\ndiv.buttons {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/new-range-form/new-range-form.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewRangeFormComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NewRangeFormComponent = (function () {
    function NewRangeFormComponent() {
        this.range = {
            name: '',
            minX: '',
            maxX: '',
            value: 0,
            condition: 'gt'
        };
        this.openFormContainer = false;
        this.cancel = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.createRange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    NewRangeFormComponent.prototype.ngOnChanges = function (changes) {
        if (changes.selectedX || changes.selectedY) {
            this.range.minX = this.selectedX;
            this.range.value = this.selectedY;
        }
    };
    NewRangeFormComponent.prototype.ngOnInit = function () {
    };
    NewRangeFormComponent.prototype.onCancel = function () {
        this.cancel.emit();
    };
    NewRangeFormComponent.prototype.saveRange = function () {
        this.createRange.emit(this.range);
        this.onCancel();
        this.resetForm();
    };
    NewRangeFormComponent.prototype.resetForm = function () {
        this.range = {
            name: '',
            minX: '',
            maxX: '',
            value: 0,
            condition: 'gt'
        };
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], NewRangeFormComponent.prototype, "selectedX", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Number)
    ], NewRangeFormComponent.prototype, "selectedY", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], NewRangeFormComponent.prototype, "openFormContainer", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], NewRangeFormComponent.prototype, "cancel", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], NewRangeFormComponent.prototype, "createRange", void 0);
    NewRangeFormComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-new-range-form',
            template: __webpack_require__("../../../../../src/app/components/new-range-form/new-range-form.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/new-range-form/new-range-form.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], NewRangeFormComponent);
    return NewRangeFormComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/pareto-chart/combo/combo.component.html":
/***/ (function(module, exports) {

module.exports = "<ngx-charts-chart\n  [view]=\"[width + legendSpacing, height]\"\n  [showLegend]=\"legend\"\n  [legendOptions]=\"legendOptions\"\n  [activeEntries]=\"activeEntries\"\n  [animations]=\"animations\"\n  (legendLabelClick)=\"onClick($event)\"\n  (legendLabelActivate)=\"onActivate($event)\"\n  (legendLabelDeactivate)=\"onDeactivate($event)\">\n  <svg:g [attr.transform]=\"transform\" class=\"bar-chart chart\">\n      <svg:g ngx-charts-x-axis\n      *ngIf=\"xAxis\"\n      [xScale]=\"xScale\"\n      [dims]=\"dims\"\n      [showLabel]=\"showXAxisLabel\"\n      [labelText]=\"xAxisLabel\"\n      [tickFormatting]=\"xAxisTickFormatting\"\n      (dimensionsChanged)=\"updateXAxisHeight($event)\">\n    </svg:g>\n    <svg:g ngx-charts-y-axis\n      *ngIf=\"yAxis\"\n      [yScale]=\"yScale\"\n      [dims]=\"dims\"\n      [yOrient]=\"yOrientLeft\"\n      [showGridLines]=\"showGridLines\"\n      [showLabel]=\"showYAxisLabel\"\n      [labelText]=\"yAxisLabel\"\n      [tickFormatting]=\"yAxisTickFormatting\"\n      (dimensionsChanged)=\"updateYAxisWidth($event)\">\n    </svg:g>\n    <svg:g ngx-charts-y-axis\n      *ngIf=\"yAxis\"\n      [yScale]=\"yScaleLine\"\n      [dims]=\"dims\"\n      [yOrient]=\"yOrientRight\"\n      [showGridLines]=\"showGridLines\"\n      [showLabel]=\"showRightYAxisLabel\"\n      [labelText]=\"yAxisLabelRight\"\n      [tickFormatting]=\"yRightAxisTickFormatting\"\n      (dimensionsChanged)=\"updateYAxisWidth($event)\">\n    </svg:g>\n    <svg:g ngx-combo-charts-series-vertical\n      [xScale]=\"xScale\"\n      [yScale]=\"yScale\"\n      [colors]=\"colors\"\n      [series]=\"results\"\n      [seriesLine]=\"lineChart\"\n      [dims]=\"dims\"\n      [gradient]=\"gradient\"\n      tooltipDisabled=\"true\"\n      [activeEntries]=\"activeEntries\"\n      [animations]=\"animations\"\n      (activate)=\"onActivate($event)\"\n      (deactivate)=\"onDeactivate($event)\"\n      (bandwidth)=\"updateLineWidth($event)\"\n      (select)=\"onClick($event)\">\n    </svg:g>\n  </svg:g>\n  <svg:g [attr.transform]=\"transform\" class=\"line-chart chart\">\n    <svg:g [attr.clip-path]=\"clipPath\">\n      <svg:g *ngFor=\"let series of lineChart; trackBy:trackBy\">\n        <svg:g ngx-charts-line-series\n          [xScale]=\"xScaleLine\"\n          [yScale]=\"yScaleLine\"\n          [colors]=\"colorsLine\"\n          [data]=\"series\"\n          [activeEntries]=\"activeEntries\"\n          [scaleType]=\"scaleType\"\n          [curve]=\"curve\"\n          [rangeFillOpacity]=\"rangeFillOpacity\"\n          [animations]=\"animations\"\n        />\n      </svg:g>\n      <svg:g ngx-charts-tooltip-area\n        *ngIf=\"!tooltipDisabled\"\n        [dims]=\"dims\"\n        [xSet]=\"xSet\"\n        [xScale]=\"xScaleLine\"\n        [yScale]=\"yScaleLine\"\n        [results]=\"combinedSeries\"\n        [colors]=\"colorsLine\"\n        [tooltipDisabled]=\"tooltipDisabled\"\n        (hover)=\"updateHoveredVertical($event)\"\n      />\n      <svg:g *ngFor=\"let series of lineChart\">\n        <svg:g ngx-charts-circle-series\n          [xScale]=\"xScaleLine\"\n          [yScale]=\"yScaleLine\"\n          [colors]=\"colorsLine\"\n          [data]=\"series\"\n          [scaleType]=\"scaleType\"\n          [visibleValue]=\"hoveredVertical\"\n          [activeEntries]=\"activeEntries\"\n          [tooltipDisabled]=\"tooltipDisabled\"\n          (select)=\"onClick($event, series)\"\n          (activate)=\"onActivate($event)\"\n          (deactivate)=\"onDeactivate($event)\"\n        />\n      </svg:g>\n    </svg:g>\n  </svg:g>\n</ngx-charts-chart>"

/***/ }),

/***/ "../../../../../src/app/components/pareto-chart/combo/combo.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".ngx-charts {\n  float: left;\n  overflow: visible; }\n  .ngx-charts .circle,\n  .ngx-charts .bar,\n  .ngx-charts .arc {\n    cursor: pointer; }\n  .ngx-charts .bar.active, .ngx-charts .bar:hover,\n  .ngx-charts .cell.active,\n  .ngx-charts .cell:hover,\n  .ngx-charts .arc.active,\n  .ngx-charts .arc:hover,\n  .ngx-charts .card.active,\n  .ngx-charts .card:hover {\n    opacity: 0.8;\n    transition: opacity 100ms ease-in-out; }\n  .ngx-charts .bar:focus,\n  .ngx-charts .cell:focus,\n  .ngx-charts .arc:focus,\n  .ngx-charts .card:focus {\n    outline: none; }\n  .ngx-charts g:focus {\n    outline: none; }\n  .ngx-charts .line-series.inactive,\n  .ngx-charts .line-series-range.inactive,\n  .ngx-charts .polar-series-path.inactive,\n  .ngx-charts .polar-series-area.inactive,\n  .ngx-charts .area-series.inactive {\n    transition: opacity 100ms ease-in-out;\n    opacity: .2; }\n  .ngx-charts .line-highlight {\n    display: none; }\n    .ngx-charts .line-highlight.active {\n      display: block; }\n  .ngx-charts .area {\n    opacity: 0.6; }\n  .ngx-charts .circle:hover {\n    cursor: pointer; }\n  .ngx-charts .label {\n    font-size: 12px;\n    font-weight: normal; }\n  .ngx-charts .tooltip-anchor {\n    fill: black; }\n  .ngx-charts .gridline-path {\n    stroke: #ddd;\n    stroke-width: 1;\n    fill: none; }\n  .ngx-charts .refline-path {\n    stroke: #a8b2c7;\n    stroke-width: 1;\n    stroke-dasharray: 5;\n    stroke-dashoffset: 5; }\n  .ngx-charts .refline-label {\n    font-size: 9px; }\n  .ngx-charts .reference-area {\n    fill-opacity: 0.05;\n    fill: #000; }\n  .ngx-charts .gridline-path-dotted {\n    stroke: #ddd;\n    stroke-width: 1;\n    fill: none;\n    stroke-dasharray: 1, 20;\n    stroke-dashoffset: 3; }\n  .ngx-charts .grid-panel rect {\n    fill: none; }\n  .ngx-charts .grid-panel.odd rect {\n    fill: rgba(0, 0, 0, 0.05); }\n\n.ngx-charts-outer {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: reverse;\n      -ms-flex-direction: column-reverse;\n          flex-direction: column-reverse;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  width: 100%; }\n  .ngx-charts-outer .chart-legend {\n    min-width: 500px !important; }\n    .ngx-charts-outer .chart-legend > div {\n      width: 100% !important; }\n      .ngx-charts-outer .chart-legend > div .legend-labels {\n        background: transparent;\n        display: -webkit-box;\n        display: -ms-flexbox;\n        display: flex;\n        -webkit-box-orient: horizontal;\n        -webkit-box-direction: normal;\n            -ms-flex-direction: row;\n                flex-direction: row;\n        -ms-flex-pack: distribute;\n            justify-content: space-around; }\n        .ngx-charts-outer .chart-legend > div .legend-labels .legend-label {\n          color: rgba(35, 35, 35, 0.6); }\n        .ngx-charts-outer .chart-legend > div .legend-labels span:focus {\n          outline: none; }\n        .ngx-charts-outer .chart-legend > div .legend-labels .legend-label-color {\n          border-radius: 0;\n          height: 7px; }\n      .ngx-charts-outer .chart-legend > div header {\n        display: none; }\n  .ngx-charts-outer .axis text {\n    font-size: 12px;\n    fill: rgba(35, 35, 35, 0.6); }\n  .ngx-charts-outer rect.overlay {\n    stroke-width: 1;\n    stroke: rgba(35, 35, 35, 0.6);\n    shape-rendering: crispedges;\n    cursor: crosshair; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/pareto-chart/combo/combo.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ParetoComboComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__swimlane_ngx_charts__ = __webpack_require__("../../../../@swimlane/ngx-charts/release/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__swimlane_ngx_charts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__swimlane_ngx_charts__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_d3_shape__ = __webpack_require__("../../../../d3-shape/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_d3_scale__ = __webpack_require__("../../../../d3-scale/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_animations__ = __webpack_require__("../../../animations/esm5/animations.js");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ParetoComboComponent = (function (_super) {
    __extends(ParetoComboComponent, _super);
    function ParetoComboComponent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.curve = __WEBPACK_IMPORTED_MODULE_2_d3_shape__["curveLinear"];
        _this.legend = false;
        _this.legendTitle = 'Legend';
        _this.tooltipDisabled = false;
        _this.showGridLines = true;
        _this.activeEntries = [];
        _this.roundDomains = false;
        _this.animations = true;
        _this.activate = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        _this.deactivate = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        _this.margin = [10, 20, 10, 20];
        _this.xAxisHeight = 0;
        _this.yAxisWidth = 0;
        _this.scaleType = 'linear';
        _this.yOrientLeft = 'left';
        _this.yOrientRight = 'right';
        _this.legendSpacing = 0;
        _this.barPadding = 8;
        return _this;
    }
    ParetoComboComponent.prototype.trackBy = function (index, item) {
        return item.name;
    };
    ParetoComboComponent.prototype.update = function () {
        _super.prototype.update.call(this);
        this.dims = Object(__WEBPACK_IMPORTED_MODULE_1__swimlane_ngx_charts__["calculateViewDimensions"])({
            width: this.width,
            height: this.height,
            margins: this.margin,
            showXAxis: this.xAxis,
            showYAxis: this.yAxis,
            xAxisHeight: this.xAxisHeight,
            yAxisWidth: this.yAxisWidth,
            showXLabel: this.showXAxisLabel,
            showYLabel: this.showYAxisLabel,
            showLegend: this.legend,
            legendType: this.schemeType
        });
        if (!this.yAxis) {
            this.legendSpacing = 0;
        }
        else if (this.showYAxisLabel && this.yAxis) {
            this.legendSpacing = 100;
        }
        else {
            this.legendSpacing = 40;
        }
        this.xScale = this.getXScale();
        this.yScale = this.getYScale();
        // line chart
        this.xDomainLine = this.getXDomainLine();
        if (this.filteredDomain) {
            this.xDomainLine = this.filteredDomain;
        }
        this.yDomainLine = this.getYDomainLine();
        this.seriesDomain = this.getSeriesDomain();
        this.xScaleLine = this.getXScaleLine(this.xDomainLine, this.dims.width);
        this.yScaleLine = this.getYScaleLine(this.yDomainLine, this.dims.height);
        this.setColors();
        this.legendOptions = this.getLegendOptions();
        this.transform = "translate(" + this.dims.xOffset + " , " + this.margin[0] + ")";
    };
    ParetoComboComponent.prototype.deactivateAll = function () {
        this.activeEntries = this.activeEntries.slice();
        for (var _i = 0, _a = this.activeEntries; _i < _a.length; _i++) {
            var entry = _a[_i];
            this.deactivate.emit({ value: entry, entries: [] });
        }
        this.activeEntries = [];
    };
    ParetoComboComponent.prototype.hideCircles = function () {
        this.hoveredVertical = null;
        this.deactivateAll();
    };
    ParetoComboComponent.prototype.updateHoveredVertical = function (item) {
        this.hoveredVertical = item.value;
        this.deactivateAll();
    };
    ParetoComboComponent.prototype.updateDomain = function (domain) {
        this.filteredDomain = domain;
        this.xDomainLine = this.filteredDomain;
        this.xScaleLine = this.getXScaleLine(this.xDomainLine, this.dims.width);
    };
    ParetoComboComponent.prototype.getSeriesDomain = function () {
        this.combinedSeries = this.lineChart.slice(0);
        this.combinedSeries.push({
            name: this.yAxisLabel,
            series: this.results
        });
        return this.combinedSeries.map(function (d) { return d.name; });
    };
    ParetoComboComponent.prototype.isDate = function (value) {
        if (value instanceof Date) {
            return true;
        }
        return false;
    };
    ParetoComboComponent.prototype.getScaleType = function (values) {
        var date = true;
        var num = true;
        for (var _i = 0, values_1 = values; _i < values_1.length; _i++) {
            var value = values_1[_i];
            if (!this.isDate(value)) {
                date = false;
            }
            if (typeof value !== 'number') {
                num = false;
            }
        }
        if (date)
            return 'time';
        if (num)
            return 'linear';
        return 'ordinal';
    };
    ParetoComboComponent.prototype.getXDomainLine = function () {
        var values = [];
        for (var _i = 0, _a = this.lineChart; _i < _a.length; _i++) {
            var results = _a[_i];
            for (var _b = 0, _c = results.series; _b < _c.length; _b++) {
                var d = _c[_b];
                if (!values.includes(d.name)) {
                    values.push(d.name);
                }
            }
        }
        this.scaleType = this.getScaleType(values);
        var domain = [];
        if (this.scaleType === 'time') {
            var min = Math.min.apply(Math, values);
            var max = Math.max.apply(Math, values);
            domain = [min, max];
        }
        else if (this.scaleType === 'linear') {
            values = values.map(function (v) { return Number(v); });
            var min = Math.min.apply(Math, values);
            var max = Math.max.apply(Math, values);
            domain = [min, max];
        }
        else {
            domain = values;
        }
        this.xSet = values;
        return domain;
    };
    ParetoComboComponent.prototype.getYDomainLine = function () {
        var domain = [];
        for (var _i = 0, _a = this.lineChart; _i < _a.length; _i++) {
            var results = _a[_i];
            for (var _b = 0, _c = results.series; _b < _c.length; _b++) {
                var d = _c[_b];
                if (domain.indexOf(d.value) < 0) {
                    domain.push(d.value);
                }
                if (d.min !== undefined) {
                    if (domain.indexOf(d.min) < 0) {
                        domain.push(d.min);
                    }
                }
                if (d.max !== undefined) {
                    if (domain.indexOf(d.max) < 0) {
                        domain.push(d.max);
                    }
                }
            }
        }
        var min = Math.min.apply(Math, domain);
        var max = Math.max.apply(Math, domain);
        if (this.yRightAxisScaleFactor) {
            var minMax = this.yRightAxisScaleFactor(min, max);
            return [Math.min(0, minMax.min), minMax.max];
        }
        else {
            min = Math.min(0, min);
            return [min, max];
        }
    };
    ParetoComboComponent.prototype.getXScaleLine = function (domain, width) {
        var scale;
        if (this.bandwidth === undefined) {
            this.bandwidth = (this.dims.width - this.barPadding);
            this.bandwidth = 25;
            console.log('band', this.bandwidth, this.barPadding);
        }
        if (this.scaleType === 'time') {
            scale = Object(__WEBPACK_IMPORTED_MODULE_3_d3_scale__["scaleTime"])()
                .range([(this.bandwidth + this.barPadding) / 2, width - (this.bandwidth + this.barPadding) / 2])
                .domain(domain);
        }
        else if (this.scaleType === 'linear') {
            scale = Object(__WEBPACK_IMPORTED_MODULE_3_d3_scale__["scaleLinear"])()
                .range([0, width])
                .domain(domain);
            if (this.roundDomains) {
                scale = scale.nice();
            }
        }
        else if (this.scaleType === 'ordinal') {
            scale = Object(__WEBPACK_IMPORTED_MODULE_3_d3_scale__["scalePoint"])()
                .range([(this.bandwidth + this.barPadding) / 2, width - (this.bandwidth + this.barPadding) / 2])
                .domain(domain);
        }
        return scale;
    };
    ParetoComboComponent.prototype.getYScaleLine = function (domain, height) {
        var scale = Object(__WEBPACK_IMPORTED_MODULE_3_d3_scale__["scaleLinear"])()
            .range([height, 0])
            .domain(domain);
        return this.roundDomains ? scale.nice() : scale;
    };
    ParetoComboComponent.prototype.getXScale = function () {
        this.xDomain = this.getXDomain();
        var spacing = this.xDomain.length / (this.dims.width / this.barPadding + 1);
        return Object(__WEBPACK_IMPORTED_MODULE_3_d3_scale__["scaleBand"])()
            .rangeRound([0, this.dims.width])
            .paddingInner(spacing)
            .domain(this.xDomain);
    };
    ParetoComboComponent.prototype.getYScale = function () {
        this.yDomain = this.getYDomain();
        var scale = Object(__WEBPACK_IMPORTED_MODULE_3_d3_scale__["scaleLinear"])()
            .range([this.dims.height, 0])
            .domain(this.yDomain);
        return this.roundDomains ? scale.nice() : scale;
    };
    ParetoComboComponent.prototype.getXDomain = function () {
        return this.results.map(function (d) { return d.name; });
    };
    ParetoComboComponent.prototype.getYDomain = function () {
        var values = this.results.map(function (d) { return d.value; });
        var min = Math.min.apply(Math, [0].concat(values));
        var max = Math.max.apply(Math, values);
        if (this.yLeftAxisScaleFactor) {
            var minMax = this.yLeftAxisScaleFactor(min, max);
            return [Math.min(0, minMax.min), minMax.max];
        }
        else {
            return [min, max];
        }
    };
    ParetoComboComponent.prototype.onClick = function (data) {
        this.select.emit(data);
    };
    ParetoComboComponent.prototype.setColors = function () {
        var domain;
        if (this.schemeType === 'ordinal') {
            domain = this.xDomain;
        }
        else {
            domain = this.yDomain;
        }
        this.colors = new __WEBPACK_IMPORTED_MODULE_1__swimlane_ngx_charts__["ColorHelper"](this.scheme, this.schemeType, domain, this.customColors);
        this.colorsLine = new __WEBPACK_IMPORTED_MODULE_1__swimlane_ngx_charts__["ColorHelper"](this.colorSchemeLine, this.schemeType, domain, this.customColors);
    };
    ParetoComboComponent.prototype.getLegendOptions = function () {
        var opts = {
            scaleType: this.schemeType,
            colors: undefined,
            domain: [],
            title: undefined
        };
        if (opts.scaleType === 'ordinal') {
            opts.domain = this.seriesDomain;
            opts.colors = this.colorsLine;
            opts.title = this.legendTitle;
        }
        else {
            opts.domain = this.seriesDomain;
            opts.colors = this.colors.scale;
        }
        return opts;
    };
    ParetoComboComponent.prototype.updateLineWidth = function (width) {
        this.bandwidth = width;
        this.update();
        console.log('new bw', this.bandwidth);
    };
    ParetoComboComponent.prototype.updateYAxisWidth = function (_a) {
        var width = _a.width;
        this.yAxisWidth = width + 20;
        this.update();
    };
    ParetoComboComponent.prototype.updateXAxisHeight = function (_a) {
        var height = _a.height;
        this.xAxisHeight = height;
        this.update();
    };
    ParetoComboComponent.prototype.onActivate = function (item) {
        var idx = this.activeEntries.findIndex(function (d) {
            return d.name === item.name && d.value === item.value && d.series === item.series;
        });
        if (idx > -1) {
            return;
        }
        this.activeEntries = [item].concat(this.activeEntries);
        this.activate.emit({ value: item, entries: this.activeEntries });
    };
    ParetoComboComponent.prototype.onDeactivate = function (item) {
        var idx = this.activeEntries.findIndex(function (d) {
            return d.name === item.name && d.value === item.value && d.series === item.series;
        });
        this.activeEntries.splice(idx, 1);
        this.activeEntries = this.activeEntries.slice();
        this.deactivate.emit({ value: item, entries: this.activeEntries });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1__swimlane_ngx_charts__["LineSeriesComponent"]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__swimlane_ngx_charts__["LineSeriesComponent"])
    ], ParetoComboComponent.prototype, "lineSeriesComponent", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], ParetoComboComponent.prototype, "curve", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], ParetoComboComponent.prototype, "legend", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], ParetoComboComponent.prototype, "legendTitle", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], ParetoComboComponent.prototype, "xAxis", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], ParetoComboComponent.prototype, "yAxis", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], ParetoComboComponent.prototype, "showXAxisLabel", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], ParetoComboComponent.prototype, "showYAxisLabel", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], ParetoComboComponent.prototype, "showRightYAxisLabel", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], ParetoComboComponent.prototype, "xAxisLabel", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], ParetoComboComponent.prototype, "yAxisLabel", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], ParetoComboComponent.prototype, "yAxisLabelRight", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Boolean)
    ], ParetoComboComponent.prototype, "tooltipDisabled", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Boolean)
    ], ParetoComboComponent.prototype, "gradient", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Boolean)
    ], ParetoComboComponent.prototype, "showGridLines", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Array)
    ], ParetoComboComponent.prototype, "activeEntries", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], ParetoComboComponent.prototype, "schemeType", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], ParetoComboComponent.prototype, "xAxisTickFormatting", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], ParetoComboComponent.prototype, "yAxisTickFormatting", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], ParetoComboComponent.prototype, "yRightAxisTickFormatting", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Boolean)
    ], ParetoComboComponent.prototype, "roundDomains", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Array)
    ], ParetoComboComponent.prototype, "colorSchemeLine", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], ParetoComboComponent.prototype, "autoScale", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], ParetoComboComponent.prototype, "lineChart", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], ParetoComboComponent.prototype, "yLeftAxisScaleFactor", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], ParetoComboComponent.prototype, "yRightAxisScaleFactor", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Number)
    ], ParetoComboComponent.prototype, "rangeFillOpacity", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Boolean)
    ], ParetoComboComponent.prototype, "animations", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"])
    ], ParetoComboComponent.prototype, "activate", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"])
    ], ParetoComboComponent.prototype, "deactivate", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ContentChild"])('tooltipTemplate'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["TemplateRef"])
    ], ParetoComboComponent.prototype, "tooltipTemplate", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ContentChild"])('seriesTooltipTemplate'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["TemplateRef"])
    ], ParetoComboComponent.prototype, "seriesTooltipTemplate", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"])('mouseleave'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], ParetoComboComponent.prototype, "hideCircles", null);
    ParetoComboComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'pareto-combo',
            template: __webpack_require__("../../../../../src/app/components/pareto-chart/combo/combo.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/pareto-chart/combo/combo.component.scss")],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None,
            changeDetection: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectionStrategy"].OnPush,
            animations: [
                Object(__WEBPACK_IMPORTED_MODULE_4__angular_animations__["trigger"])('animationState', [
                    Object(__WEBPACK_IMPORTED_MODULE_4__angular_animations__["transition"])(':leave', [
                        Object(__WEBPACK_IMPORTED_MODULE_4__angular_animations__["style"])({
                            opacity: 1,
                        }),
                        Object(__WEBPACK_IMPORTED_MODULE_4__angular_animations__["animate"])(500, Object(__WEBPACK_IMPORTED_MODULE_4__angular_animations__["style"])({
                            opacity: 0
                        }))
                    ])
                ])
            ]
        })
    ], ParetoComboComponent);
    return ParetoComboComponent;
}(__WEBPACK_IMPORTED_MODULE_1__swimlane_ngx_charts__["BaseChartComponent"]));



/***/ }),

/***/ "../../../../../src/app/components/pareto-chart/pareto-chart.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"chart-container\" #target>\n  <app-filter (change)=\"doChange($event)\" [options]=\"fieldOptions\" [targetOptions]=\"budgetOptions\"></app-filter>\n      \n  <pareto-combo\n    [view]=\"[width, height]\"\n    [scheme]=\"colorScheme\"\n    [colorSchemeLine]=\"colorSchemeLine\"\n    [results]=\"data$ | async\"\n    [animations]=\"animations\"\n    [lineChart]=\"cummData$ | async\"\n    [tooltipDisabled]=\"false\"\n    [gradient]=\"gradient\"\n    [xAxis]=\"showXAxis\"\n    [yAxis]=\"showYAxis\"\n    [legend]=\"showLegend\"\n    [legendTitle]=\"'test title'\"\n    [showGridLines]=\"false\"\n    [showXAxisLabel]=\"showXAxisLabel\"\n    [showYAxisLabel]=\"showYAxisLabel\"\n    [showRightYAxisLabel]=\"showYAxisLabel\"\n    [xAxisLabel]=\"xAxisLabel\"\n    [yAxisLabel]=\"yAxisLabel\"\n    [yAxisLabelRight]=\"'Cummulative Percentage'\"\n    (select)=\"onSelect($event)\"\n    >\n  </pareto-combo>\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/pareto-chart/pareto-chart.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".chart-container {\n  border-radius: 3px;\n  background-color: #ffffff;\n  box-shadow: 0px 0px 1px #4981FD;\n  padding: 10px 15px 15px 15px;\n  height: calc(50% + 10px); }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/pareto-chart/pareto-chart.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ParetoChartComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__ = __webpack_require__("../../../../rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_data_service__ = __webpack_require__("../../../../../src/app/services/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_comments_service__ = __webpack_require__("../../../../../src/app/services/comments.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_range_service__ = __webpack_require__("../../../../../src/app/services/range.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_target_service__ = __webpack_require__("../../../../../src/app/services/target.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_view_service__ = __webpack_require__("../../../../../src/app/services/view.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var ParetoChartComponent = (function () {
    function ParetoChartComponent(dataService, commentService, rangeService, targetService, viewService) {
        this.dataService = dataService;
        this.commentService = commentService;
        this.rangeService = rangeService;
        this.targetService = targetService;
        this.viewService = viewService;
        this.change = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.colorScheme = {
            domain: ['#1774F0']
        };
        this.colorSchemeLine = {
            domain: ['red', '#1774F0']
        };
        this.gradient = true;
        this.showXAxis = true;
        this.showYAxis = true;
        this.showLegend = true;
        this.showXAxisLabel = true;
        this.showYAxisLabel = true;
        this.xAxisLabel = 'Date';
        this.yAxisLabel = 'ATM';
        this.autoScale = true;
        this.animations = false;
        this.selectedX = '';
        this.selectedY = 0;
    }
    ParetoChartComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.width = this.target.element.nativeElement.getBoundingClientRect().width;
        this.height = this.target.element.nativeElement.getBoundingClientRect().height;
        this.height -= 110;
        this.data$ = this.dataService.dataPareto$;
        this.cummData$ = this.dataService.dataParetoCumm$.do(function (d) { return console.log(d); });
        this.targetData$ = this.targetService.target$;
        this.rangeData$ = this.rangeService.rangeData$;
        this.viewService.activeView$.do(function (view) { return _this.selectedView = view.length ? true : false; }).subscribe();
        this.commentsVisible$ = this.commentService.activated$.do(function (data) { return _this.commentsVisible = data; });
        this.activeComment$ = this.commentService.activeComment$.map(function (comment) {
            if (!comment) {
                return [];
            }
            return [{
                    name: 'Comment',
                    series: [
                        {
                            name: comment.target,
                            id: comment.id,
                            y: comment.coordinates.y,
                            x: new Date(comment.coordinates.x),
                            radius: 5,
                        }
                    ]
                }];
        });
        this.comments$ = this.commentService.comments$.map(function (comments) {
            return comments.map(function (comment) {
                return {
                    name: 'Comment',
                    series: [
                        {
                            name: comment.target,
                            id: comment.id,
                            y: comment.coordinates.y,
                            x: new Date(comment.coordinates.x),
                            radius: 5,
                        }
                    ]
                };
            });
        });
        this.fullComments$ = __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["a" /* Observable */].combineLatest(this.comments$, this.commentService.activeCoordinates$)
            .map(function (data) {
            if (data[1]) {
                return data[0].concat([
                    {
                        name: 'Placeholder',
                        series: [
                            {
                                name: ": Placeholder",
                                y: data[1].y,
                                x: new Date(data[1].x),
                                radius: 5,
                            }
                        ]
                    }
                ]);
            }
            else {
                return data[0];
            }
        });
    };
    ParetoChartComponent.prototype.onSelect = function (event) {
        this.activateCoordinate(this.formatDate(event.name), event.value);
    };
    ParetoChartComponent.prototype.onClicked = function (event) {
        this.selectedX = this.formatDate(event.xScale);
        this.selectedY = event.yScale;
        this.activateCoordinate(this.selectedX, event.yScale);
    };
    ParetoChartComponent.prototype.activateCoordinate = function (x, y) {
        if (this.selectedView) {
            this.commentService.activateCoordinate(x, y);
        }
    };
    ParetoChartComponent.prototype.onHover = function (event) {
        this.commentService.toogleComment(event ? event.series ? event.series[0].id : null : null);
    };
    ParetoChartComponent.prototype.formatDate = function (selectedDate) {
        var date = selectedDate.toLocaleDateString().split('/');
        return date[2] + "-" + date[0] + "-" + date[1];
    };
    ParetoChartComponent.prototype.doChange = function (event) {
        this.change.emit(event);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('target', { read: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"] }),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"])
    ], ParetoChartComponent.prototype, "target", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], ParetoChartComponent.prototype, "fieldOptions", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], ParetoChartComponent.prototype, "budgetOptions", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], ParetoChartComponent.prototype, "change", void 0);
    ParetoChartComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-pareto-chart',
            template: __webpack_require__("../../../../../src/app/components/pareto-chart/pareto-chart.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/pareto-chart/pareto-chart.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_data_service__["a" /* DataService */],
            __WEBPACK_IMPORTED_MODULE_3__services_comments_service__["a" /* CommentsService */],
            __WEBPACK_IMPORTED_MODULE_4__services_range_service__["a" /* RangeService */],
            __WEBPACK_IMPORTED_MODULE_5__services_target_service__["a" /* TargetService */],
            __WEBPACK_IMPORTED_MODULE_6__services_view_service__["a" /* ViewService */]])
    ], ParetoChartComponent);
    return ParetoChartComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/pareto-chart/vertical-series/vertical-series.component.html":
/***/ (function(module, exports) {

module.exports = "<svg:g ngx-charts-bar *ngFor=\"let bar of bars; trackBy: trackBy\"\n  [@animationState]=\"'active'\"\n  [width]=\"bar.width\"\n  [height]=\"bar.height\"\n  [x]=\"bar.x\"\n  [y]=\"bar.y\"\n  [fill]=\"bar.color\"\n  [stops]=\"bar.gradientStops\"\n  [data]=\"bar.data\"\n  [orientation]=\"'vertical'\"\n  [roundEdges]=\"bar.roundEdges\"\n  [gradient]=\"gradient\"\n  [isActive]=\"isActive(bar.data)\"\n  [animations]=\"animations\"\n  (select)=\"onClick($event)\"\n  (activate)=\"activate.emit($event)\"\n  (deactivate)=\"deactivate.emit($event)\"\n  ngx-tooltip\n  [tooltipDisabled]=\"tooltipDisabled\"\n  [tooltipPlacement]=\"'top'\"\n  [tooltipType]=\"'tooltip'\"\n  [tooltipTitle]=\"bar.tooltipText\">\n</svg:g>"

/***/ }),

/***/ "../../../../../src/app/components/pareto-chart/vertical-series/vertical-series.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/pareto-chart/vertical-series/vertical-series.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ParetoVerticalSeriesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_animations__ = __webpack_require__("../../../animations/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__swimlane_ngx_charts__ = __webpack_require__("../../../../@swimlane/ngx-charts/release/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__swimlane_ngx_charts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__swimlane_ngx_charts__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ParetoVerticalSeriesComponent = (function () {
    function ParetoVerticalSeriesComponent() {
        this.type = 'standard';
        this.tooltipDisabled = false;
        this.animations = true;
        this.select = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.activate = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.deactivate = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.bandwidth = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    ParetoVerticalSeriesComponent.prototype.ngOnChanges = function (changes) {
        this.update();
    };
    ParetoVerticalSeriesComponent.prototype.update = function () {
        var _this = this;
        var width;
        if (this.series.length) {
            width = this.xScale.bandwidth();
            this.bandwidth.emit(width);
        }
        var d0 = 0;
        var total;
        if (this.type === 'normalized') {
            total = this.series.map(function (d) { return d.value; }).reduce(function (sum, d) { return sum + d; }, 0);
        }
        this.bars = this.series.map(function (d, index) {
            var value = d.value;
            var label = d.name;
            var formattedLabel = Object(__WEBPACK_IMPORTED_MODULE_2__swimlane_ngx_charts__["formatLabel"])(label);
            var roundEdges = _this.type === 'standard';
            var bar = {
                value: value,
                label: label,
                roundEdges: roundEdges,
                data: d,
                width: width,
                formattedLabel: formattedLabel,
                height: 0,
                x: 0,
                y: 0
            };
            if (_this.type === 'standard') {
                bar.height = Math.abs(_this.yScale(value) - _this.yScale(0));
                bar.x = _this.xScale(label);
                if (value < 0) {
                    bar.y = _this.yScale(0);
                }
                else {
                    bar.y = _this.yScale(value);
                }
            }
            else if (_this.type === 'stacked') {
                var offset0 = d0;
                var offset1 = offset0 + value;
                d0 += value;
                bar.height = _this.yScale(offset0) - _this.yScale(offset1);
                bar.x = 0;
                bar.y = _this.yScale(offset1);
                bar.offset0 = offset0;
                bar.offset1 = offset1;
            }
            else if (_this.type === 'normalized') {
                var offset0 = d0;
                var offset1 = offset0 + value;
                d0 += value;
                if (total > 0) {
                    offset0 = (offset0 * 100) / total;
                    offset1 = (offset1 * 100) / total;
                }
                else {
                    offset0 = 0;
                    offset1 = 0;
                }
                bar.height = _this.yScale(offset0) - _this.yScale(offset1);
                bar.x = 0;
                bar.y = _this.yScale(offset1);
                bar.offset0 = offset0;
                bar.offset1 = offset1;
                value = (offset1 - offset0).toFixed(2) + '%';
            }
            if (_this.colors.scaleType === 'ordinal') {
                bar.color = _this.colors.getColor(label);
            }
            else {
                if (_this.type === 'standard') {
                    bar.color = _this.colors.getColor(value);
                    bar.gradientStops = _this.colors.getLinearGradientStops(value);
                }
                else {
                    bar.color = _this.colors.getColor(bar.offset1);
                    bar.gradientStops = _this.colors.getLinearGradientStops(bar.offset1, bar.offset0);
                }
            }
            var tooltipLabel = formattedLabel;
            if (_this.seriesName) {
                tooltipLabel = _this.seriesName + " \u2022 " + formattedLabel;
            }
            _this.getSeriesTooltips(_this.seriesLine, index);
            var lineValue = _this.seriesLine[0].series[index].value;
            var lineName = _this.seriesLine[0].series[index].name;
            bar.tooltipText = "\n        <span class=\"tooltip-label\">" + tooltipLabel + "</span>\n        <span class=\"tooltip-val\"> Y1 - " + value.toLocaleString() + " \u2022 Y2 - " + lineValue.toLocaleString() + "%</span>\n      ";
            return bar;
        });
    };
    ParetoVerticalSeriesComponent.prototype.getSeriesTooltips = function (seriesLine, index) {
        return seriesLine.map(function (d) {
            return d.series[index];
        });
    };
    ParetoVerticalSeriesComponent.prototype.isActive = function (entry) {
        if (!this.activeEntries)
            return false;
        var item = this.activeEntries.find(function (d) {
            return entry.name === d.name && entry.series === d.series;
        });
        return item !== undefined;
    };
    ParetoVerticalSeriesComponent.prototype.onClick = function (data) {
        this.select.emit(data);
    };
    ParetoVerticalSeriesComponent.prototype.trackBy = function (index, bar) {
        return bar.label;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], ParetoVerticalSeriesComponent.prototype, "dims", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], ParetoVerticalSeriesComponent.prototype, "type", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], ParetoVerticalSeriesComponent.prototype, "series", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], ParetoVerticalSeriesComponent.prototype, "seriesLine", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], ParetoVerticalSeriesComponent.prototype, "xScale", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], ParetoVerticalSeriesComponent.prototype, "yScale", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], ParetoVerticalSeriesComponent.prototype, "colors", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Boolean)
    ], ParetoVerticalSeriesComponent.prototype, "tooltipDisabled", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Boolean)
    ], ParetoVerticalSeriesComponent.prototype, "gradient", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Array)
    ], ParetoVerticalSeriesComponent.prototype, "activeEntries", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], ParetoVerticalSeriesComponent.prototype, "seriesName", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Boolean)
    ], ParetoVerticalSeriesComponent.prototype, "animations", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], ParetoVerticalSeriesComponent.prototype, "select", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], ParetoVerticalSeriesComponent.prototype, "activate", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], ParetoVerticalSeriesComponent.prototype, "deactivate", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], ParetoVerticalSeriesComponent.prototype, "bandwidth", void 0);
    ParetoVerticalSeriesComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'g[ngx-combo-charts-series-vertical]',
            template: __webpack_require__("../../../../../src/app/components/pareto-chart/vertical-series/vertical-series.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/pareto-chart/vertical-series/vertical-series.component.scss")],
            changeDetection: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectionStrategy"].OnPush,
            animations: [
                Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["trigger"])('animationState', [
                    Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["transition"])('* => void', [
                        Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["style"])({
                            opacity: 1,
                            transform: '*',
                        }),
                        Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["animate"])(500, Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["style"])({ opacity: 0, transform: 'scale(0)' }))
                    ])
                ])
            ]
        })
    ], ParetoVerticalSeriesComponent);
    return ParetoVerticalSeriesComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/scatter-chart/scatter-chart.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"chart-container second\">\n  <div class=\"filter-box\">\n      <app-filter (change)=\"doChange($event)\" [options]=\"fieldOptions\" [scatter]=\"true\"></app-filter>\n  </div>\n  <div #test class=\"scatter-chart\"></div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/scatter-chart/scatter-chart.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".chart-container {\n  border-radius: 3px;\n  background-color: #ffffff;\n  box-shadow: 0px 0px 1px #4981FD;\n  padding: 10px 15px 15px 15px;\n  height: calc((100vh - 220px) / 2); }\n  .chart-container.second {\n    margin-top: 10px; }\n  .chart-container .filter-box {\n    height: 40px;\n    width: 100%; }\n  .chart-container .scatter-chart {\n    padding-top: 10px;\n    height: calc(100% - 40px); }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/scatter-chart/scatter-chart.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ScatterChartComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_data_service__ = __webpack_require__("../../../../../src/app/services/data.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ScatterChartComponent = (function () {
    function ScatterChartComponent(data) {
        this.data = data;
        this.fieldX = 'Distancia';
        this.fieldY = 'Extraccion';
        this.fieldZ = 'Oper. Truck';
        this.fieldOptions = [
            {
                name: 'KPI1',
                options: [
                    { value: 'Distancia', text: 'Distancia' },
                    { value: 'Extraccion', text: 'Extraccion' },
                    { value: 'Oper. Truck', text: 'Oper. Truck' },
                    { value: 'Remanejo', text: 'Remanejo' },
                    { value: 'Velocidad', text: 'Velocidad' },
                ],
                selected: 'Distancia'
            },
            {
                name: 'KPI2',
                options: [
                    { value: 'Distancia', text: 'Distancia' },
                    { value: 'Extraccion', text: 'Extraccion' },
                    { value: 'Oper. Truck', text: 'Oper. Truck' },
                    { value: 'Remanejo', text: 'Remanejo' },
                    { value: 'Velocidad', text: 'Velocidad' },
                ],
                selected: 'Extraccion'
            },
            {
                name: 'KPI3',
                options: [
                    { value: 'Distancia', text: 'Distancia' },
                    { value: 'Extraccion', text: 'Extraccion' },
                    { value: 'Oper. Truck', text: 'Oper. Truck' },
                    { value: 'Remanejo', text: 'Remanejo' },
                    { value: 'Velocidad', text: 'Velocidad' },
                ],
                selected: 'Oper. Truck'
            },
            {
                name: 'Fase',
                options: [
                    { value: 'Casino 2', text: 'Casino 2' },
                    { value: 'Donoso 1', text: 'Donoso 1' },
                    { value: 'Donoso 2', text: 'Donoso 2' },
                    { value: 'Infiernillo 5', text: 'Infiernillo 5' },
                    { value: 'Infirenillo 7A', text: 'Infirenillo 7A' },
                    { value: 'Total Fases', text: 'Total Fases' },
                ],
                selected: 'Total Fases'
            },
        ];
        this.selectedFase = 'Total Fases';
        this.selectedKey = 'x';
        this.selectedField = 'Distancia';
    }
    ScatterChartComponent.prototype.ngOnInit = function () {
        this.drawScatter();
    };
    ScatterChartComponent.prototype.unpack = function (data, key) {
        return data[key].series.map(function (elem) {
            return elem.value;
        });
    };
    ScatterChartComponent.prototype.drawScatter = function () {
        var _this = this;
        this.data.dataScatter$.subscribe(function (elem) {
            if (elem['x'] !== null && elem['y'] !== null && elem['z'] !== null) {
                var data = [{
                        x: _this.unpack(elem, 'x'), y: _this.unpack(elem, 'y'), z: _this.unpack(elem, 'z'),
                        mode: 'markers',
                        marker: {
                            size: 5,
                            line: {
                                color: 'rgba(217, 217, 217, 0.14)',
                                width: 0.5
                            },
                            opacity: 1
                        },
                        type: 'scatter3d'
                    }];
                var layout = {
                    margin: {
                        l: 0,
                        r: 0,
                        b: 0,
                        t: 0,
                    },
                    scene: {
                        xaxis: {
                            title: _this.fieldX,
                            titlefont: {
                                family: 'Courier New, monospace',
                                size: 18,
                                color: '#7f7f7f'
                            }
                        },
                        yaxis: {
                            title: _this.fieldY,
                            titlefont: {
                                family: 'Courier New, monospace',
                                size: 18,
                                color: '#7f7f7f'
                            }
                        },
                        zaxis: {
                            title: _this.fieldZ,
                            titlefont: {
                                family: 'Courier New, monospace',
                                size: 18,
                                color: '#7f7f7f'
                            }
                        }
                    }
                };
                Plotly.newPlot(_this.test.element.nativeElement, data, layout);
            }
        });
    };
    ScatterChartComponent.prototype.doChange = function (event) {
        switch (event.field) {
            case 'KPI1':
                this.selectedKey = 'x';
                this.fieldX = event.value;
                this.selectedField = event.value;
                this.data.changeScatterData('x', event.value, this.selectedFase);
                break;
            case 'KPI2':
                this.selectedKey = 'y';
                this.fieldY = event.value;
                this.selectedField = event.value;
                this.data.changeScatterData('y', event.value, this.selectedFase);
                break;
            case 'KPI3':
                this.selectedKey = 'z';
                this.fieldZ = event.value;
                this.selectedField = event.value;
                this.data.changeScatterData('z', event.value, this.selectedFase);
                break;
            case 'Fase':
                this.selectedFase = event.value;
                this.data.changeScatterData(this.selectedKey, this.selectedField, event.value);
                break;
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('test', { read: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"] }),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"])
    ], ScatterChartComponent.prototype, "test", void 0);
    ScatterChartComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-scatter-chart',
            template: __webpack_require__("../../../../../src/app/components/scatter-chart/scatter-chart.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/scatter-chart/scatter-chart.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_data_service__["a" /* DataService */]])
    ], ScatterChartComponent);
    return ScatterChartComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/sidebar/sidebar.component.html":
/***/ (function(module, exports) {

module.exports = "<app-card-listing [commentList]=\"commentList\"></app-card-listing>\n"

/***/ }),

/***/ "../../../../../src/app/components/sidebar/sidebar.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/sidebar/sidebar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SidebarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SidebarComponent = (function () {
    function SidebarComponent() {
        this.commentList = false;
    }
    SidebarComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], SidebarComponent.prototype, "commentList", void 0);
    SidebarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-sidebar',
            template: __webpack_require__("../../../../../src/app/components/sidebar/sidebar.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/sidebar/sidebar.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], SidebarComponent);
    return SidebarComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/table/table.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  table works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/components/table/table.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/table/table.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TableComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TableComponent = (function () {
    function TableComponent() {
    }
    TableComponent.prototype.ngOnInit = function () {
    };
    TableComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-table',
            template: __webpack_require__("../../../../../src/app/components/table/table.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/table/table.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], TableComponent);
    return TableComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/top-bar/top-bar.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"navbar-container\">\n    <nav class=\"navbar navbar-expand-lg navbar-light navbar-be\">\n      <a href=\"\">\n        <img src=\"./assets/anglo.png\" class=\"img-login\" alt=\"\">\n      </a>\n\n      <div class=\"title-wrapper\">\n        <h3>\n          Control Diario Integrado\n        </h3>\n      </div>\n    </nav>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/top-bar/top-bar.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".navbar-be {\n  background-color: white; }\n\n.navbar {\n  height: 60px;\n  margin-bottom: 0px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center; }\n  .navbar a {\n    margin-left: 20px; }\n    .navbar a img {\n      width: 200px; }\n  .navbar h3 {\n    -webkit-box-flex: 1;\n        -ms-flex: 1;\n            flex: 1;\n    text-align: center; }\n\ndiv.title-wrapper {\n  position: absolute;\n  left: 25vw;\n  width: 50vw;\n  text-align: center;\n  margin-bottom: 5px; }\n  div.title-wrapper h3 {\n    font-weight: normal;\n    text-transform: uppercase;\n    margin: 10px 0 5px;\n    color: rgba(0, 0, 0, 0.54); }\n\nul li a {\n  margin: 0px; }\n\n.navbar-container {\n  border-bottom: 1px solid #D4E3E8; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/top-bar/top-bar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TopBarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TopBarComponent = (function () {
    function TopBarComponent() {
    }
    TopBarComponent.prototype.ngOnInit = function () {
    };
    TopBarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-top-bar',
            template: __webpack_require__("../../../../../src/app/components/top-bar/top-bar.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/top-bar/top-bar.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], TopBarComponent);
    return TopBarComponent;
}());



/***/ }),

/***/ "../../../../../src/app/pages/cgi/cgi.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"app-container\">\n  <div class=\"sidebar-container left\">\n    <app-sidebar></app-sidebar>\n  </div>\n  <div class=\"charts-container\">\n    <app-control-chart (change)=\"test($event)\" [fieldOptions]=\"fieldOptions\" [budgetOptions]=\"budgetOptions\"></app-control-chart>\n    <app-scatter-chart></app-scatter-chart>\n  </div>\n  <div class=\"sidebar-container right\">\n    <app-comment-section></app-comment-section>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/pages/cgi/cgi.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".app-container {\n  height: calc(100vh - 60px);\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-flex: 1;\n      -ms-flex: 1;\n          flex: 1; }\n  .app-container .sidebar-container {\n    -webkit-box-flex: 2;\n        -ms-flex: 2;\n            flex: 2;\n    border-radius: 3px;\n    background-color: #f9f9f9;\n    box-shadow: 0px 0px 1px #4981FD;\n    margin: 10px; }\n    .app-container .sidebar-container.right {\n      overflow: auto; }\n  .app-container .charts-container {\n    padding: 10px 0;\n    -webkit-box-flex: 10;\n        -ms-flex: 10;\n            flex: 10; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/cgi/cgi.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CgiPageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_view_service__ = __webpack_require__("../../../../../src/app/services/view.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CgiPageComponent = (function () {
    function CgiPageComponent(view) {
        this.view = view;
        this.title = 'app';
        this.fieldOptions = [
            {
                name: 'KPI',
                options: [
                    { value: 'Distancia', text: 'Distancia' },
                    { value: 'Extraccion', text: 'Extraccion' },
                    { value: 'Oper. Truck', text: 'Oper. Truck' },
                    { value: 'Remanejo', text: 'Remanejo' },
                    { value: 'Velocidad', text: 'Velocidad' },
                ],
                selected: 'Distancia'
            },
            {
                name: 'Fase',
                options: [
                    { value: 'Casino 2', text: 'Casino 2' },
                    { value: 'Donoso 1', text: 'Donoso 1' },
                    { value: 'Donoso 2', text: 'Donoso 2' },
                    { value: 'Infiernillo 5', text: 'Infiernillo 5' },
                    { value: 'Infiernillo 7A', text: 'Infiernillo 7A' },
                    { value: 'Total Fases', text: 'Total Fases' },
                ],
                selected: 'Total Fases'
            },
        ];
        this.budgetOptions = {
            name: 'Budget',
            options: [
                { value: 'WK', text: 'Weekly' },
                { value: 'ST', text: 'Monthly' },
                { value: 'OL', text: 'Outlook' },
                { value: 'BUDGET', text: 'Budget' },
            ],
            selected: 'WK'
        };
    }
    CgiPageComponent.prototype.test = function (event) {
        switch (event.field) {
            case 'target':
                this.view.changeTarget(event.value);
                break;
            case 'KPI':
                this.view.changeKPI(event.value);
                break;
            case 'Fase':
                this.view.changeFase(event.value);
                break;
        }
    };
    CgiPageComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-cgi',
            template: __webpack_require__("../../../../../src/app/pages/cgi/cgi.component.html"),
            styles: [__webpack_require__("../../../../../src/app/pages/cgi/cgi.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_view_service__["a" /* ViewService */]])
    ], CgiPageComponent);
    return CgiPageComponent;
}());



/***/ }),

/***/ "../../../../../src/app/pages/pareto/pareto.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"app-container\">\n  <div class=\"charts-container\">\n    <app-pareto-chart (change)=\"test($event)\" [fieldOptions]=\"fieldOptions\" [budgetOptions]=\"budgetOptions\"></app-pareto-chart>\n    <app-scatter-chart></app-scatter-chart>\n  </div>\n  <div class=\"sidebar-container right\">\n    <app-comment-section></app-comment-section>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/pages/pareto/pareto.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".app-container {\n  height: calc(100vh - 60px);\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-flex: 1;\n      -ms-flex: 1;\n          flex: 1; }\n  .app-container .sidebar-container {\n    -webkit-box-flex: 4;\n        -ms-flex: 4;\n            flex: 4;\n    border-radius: 3px;\n    background-color: #f9f9f9;\n    box-shadow: 0px 0px 1px #4981FD;\n    margin: 10px; }\n    .app-container .sidebar-container.right {\n      overflow: auto; }\n  .app-container .charts-container {\n    margin-left: 10px;\n    padding: 10px 0;\n    -webkit-box-flex: 10;\n        -ms-flex: 10;\n            flex: 10; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/pareto/pareto.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ParetoPageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ParetoPageComponent = (function () {
    function ParetoPageComponent() {
        this.fieldOptions = [
            {
                name: 'Equipo',
                options: [
                    { value: 'LB1', text: 'LB Chancado Primario Nº1' },
                    { value: 'LB2', text: 'LB Chancado Primario Nº2' },
                ],
                selected: 'LB1'
            },
            {
                name: 'Analisis',
                options: [
                    { value: 'dateRange', text: 'Rango de Fechas' },
                ],
                selected: 'dateRange'
            },
        ];
    }
    ParetoPageComponent.prototype.ngOnInit = function () {
    };
    ParetoPageComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-pareto',
            template: __webpack_require__("../../../../../src/app/pages/pareto/pareto.component.html"),
            styles: [__webpack_require__("../../../../../src/app/pages/pareto/pareto.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ParetoPageComponent);
    return ParetoPageComponent;
}());



/***/ }),

/***/ "../../../../../src/app/services/comments.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CommentsService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__ = __webpack_require__("../../../../rxjs/_esm5/BehaviorSubject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__view_service__ = __webpack_require__("../../../../../src/app/services/view.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__target_service__ = __webpack_require__("../../../../../src/app/services/target.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_Observable__ = __webpack_require__("../../../../rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_take__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/take.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var CommentsService = (function () {
    function CommentsService(http, target, view) {
        var _this = this;
        this.http = http;
        this.target = target;
        this.view = view;
        this.comments = [];
        this.target.target$.map(function (d) { return d.length > 0; }).take(2).subscribe(function (val) {
            if (val && _this.comments.length === 0) {
                _this.getComments();
            }
        });
        this.activated$ = this.view.activeView$.map(function (val) { return val === 'comment'; });
        this.innerComments$ = new __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__["a" /* BehaviorSubject */](this.comments);
        this.comments$ = __WEBPACK_IMPORTED_MODULE_5_rxjs_Observable__["a" /* Observable */].combineLatest(this.innerComments$, this.view.activeFase$, this.view.activeField$, this.view.activeTarget$)
            .map(function (_a) {
            var comments = _a[0], fase = _a[1], field = _a[2], activeTarget = _a[3];
            return comments.filter(function (comment) {
                return comment.fase === fase && comment.kpi === field && comment.target === activeTarget;
            });
        });
        this.activeComment$ = new __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__["a" /* BehaviorSubject */](null);
        this.activeCoordinates$ = new __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__["a" /* BehaviorSubject */](null);
    }
    CommentsService.prototype.getComments = function () {
        var _this = this;
        this.http.get('/assets/comments.json').subscribe(function (data) {
            data.map(function (d, idx) {
                _this.comments.push({
                    id: idx,
                    text: d.comentario,
                    kpi: d.KPI_nombre,
                    target: d.tipo_target,
                    fase: d.Fase,
                    coordinates: {
                        x: new Date(d.Fecha),
                        y: _this.target.getValue(d.tipo_target, d.KPI_nombre, d.Fase, d.Fecha)
                    }
                });
            });
        });
    };
    CommentsService.prototype.addComment = function (title, text, coordinates) {
        var newComment = {
            id: this.comments.length + 1,
            text: text,
            kpi: this.view.field,
            target: this.view.activeTarget,
            fase: this.view.fase,
            coordinates: {
                x: new Date(coordinates.x),
                y: this.target.getValue(this.view.activeTarget, this.view.field, this.view.fase, coordinates.x)
            }
        };
        this.comments.push(newComment);
        this.innerComments$.next(this.comments);
    };
    CommentsService.prototype.toogleComment = function (id) {
        if (id === null) {
            this.activeComment = null;
            this.activeComment$.next(null);
            return;
        }
        if (typeof id === 'number') {
            if (this.activeComment && this.activeComment.id === id) {
                this.activeComment = null;
            }
            else {
                this.activeComment = id !== null ? this.comments.find(function (elem) { return elem.id === id; }) : null;
            }
        }
        else {
            if (this.activeComment && this.activeComment.coordinates.x === id) {
                this.activeComment = null;
            }
            else {
                this.activeComment = id !== null ? this.comments.find(function (elem) {
                    return elem.coordinates.x === id;
                }) : null;
            }
        }
        this.activeComment$.next(this.activeComment);
    };
    CommentsService.prototype.deleteComment = function (id) {
        var index = this.comments.findIndex(function (comment) { return comment.id === id; });
        this.comments.splice(index, 1);
        this.innerComments$.next(this.comments);
    };
    CommentsService.prototype.activateCoordinate = function (x, y) {
        if (x && y) {
            this.activeCoordinates = { x: x, y: y };
        }
        else {
            this.activeCoordinates = null;
        }
        this.activeCoordinates$.next(this.activeCoordinates);
    };
    CommentsService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_4__target_service__["a" /* TargetService */], __WEBPACK_IMPORTED_MODULE_3__view_service__["a" /* ViewService */]])
    ], CommentsService);
    return CommentsService;
}());



/***/ }),

/***/ "../../../../../src/app/services/data.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__ = __webpack_require__("../../../../rxjs/_esm5/BehaviorSubject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_crossfilter2__ = __webpack_require__("../../../../crossfilter2/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_crossfilter2___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_crossfilter2__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DataService = (function () {
    function DataService(http) {
        this.http = http;
        this.defaultDomain = ['#1774F0', 'red', 'black', 'black', 'green'];
        this.kpiList = [];
        this.data = [];
        this.dataControl$ = new __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__["a" /* BehaviorSubject */]([]);
        this.dataPareto$ = new __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__["a" /* BehaviorSubject */]([]);
        this.dataParetoCumm$ = new __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__["a" /* BehaviorSubject */]([]);
        this.warnings = [];
        this.innerWarnings$ = new __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__["a" /* BehaviorSubject */]([]);
        this.getData();
        this.dataScatter = {
            'x': null,
            'y': null,
            'z': null
        };
        this.dataScatter$ = new __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__["a" /* BehaviorSubject */](this.dataScatter);
        this.colorSet$ = new __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__["a" /* BehaviorSubject */](this.defaultDomain);
    }
    DataService.prototype.getData = function () {
        var _this = this;
        var fases = {};
        this.http.get('/assets/daily.json').subscribe(function (data) {
            _this.originalData = data;
            var addReduce = function (p, v) {
                var k = {
                    fase: v['Fase'],
                    valor: v['valor'],
                    fecha: v['Fecha']
                };
                if (v['Fase'] !== 'Otras Fases' && v['Fase'] !== 'Total Fases') {
                    fases[v['Fase']] = '';
                }
                if ((!p[v['KPI_nombre']])) {
                    p[v['KPI_nombre']] = [];
                    _this.kpiList.push(v['KPI_nombre']);
                }
                if ((!isNaN(k.valor))) {
                    p[v['KPI_nombre']].push(k);
                }
                return p;
            };
            var prueba = data.reduce(addReduce, {});
            var finalData = [];
            Object.keys(prueba).map(function (p) {
                if (p !== 'kpi_nombre' && p !== 'undefined') {
                    var subDataObject = _this.getSubData(p, prueba[p]);
                    finalData.push(subDataObject);
                }
            });
            _this.data = finalData;
            _this.changeData('Distancia', 'Total Fases');
            _this.changeScatterData('x', 'Distancia', 'Total Fases');
            _this.changeScatterData('y', 'Extraccion', 'Total Fases');
            _this.changeScatterData('z', 'Oper. Truck', 'Total Fases');
            // this.data$.next(finalData);
            _this.fasesList = Object.keys(fases);
        });
        this.http.get('/assets/paretoData.json').subscribe(function (data) {
            _this.originalParetoData = data;
            var crossf = __WEBPACK_IMPORTED_MODULE_3_crossfilter2__(_this.originalParetoData);
            var dataByDate = crossf.dimension(function (row) { return row['date']; });
            var addReduce = function (p, v) {
                p = {
                    team: v['team'],
                    value: v['hours']
                };
                return p;
            };
            var removeReduce = function (p, v) {
                return p;
            };
            var initReduce = function () {
                return {};
            };
            var chartsValue = dataByDate.group().reduce(addReduce, removeReduce, initReduce).all()
                .map(function (elem) {
                return {
                    name: new Date(elem.key),
                    team: elem.value.team,
                    value: elem.value.value
                };
            });
            var totalValue = chartsValue.reduce(function (cumm, next) { return cumm + next.value; }, 0);
            var chartsValue2 = chartsValue.map(function (elem, idx) {
                return {
                    name: elem.name,
                    team: elem.team,
                    value: chartsValue.slice(0, idx + 1).reduce(function (cumm, next) {
                        return cumm + next.value;
                    }, 0) / totalValue
                };
            });
            _this.dataPareto$.next(chartsValue);
            _this.dataParetoCumm$.next([{ name: 'Cummulative', series: chartsValue2 }]);
        });
    };
    DataService.prototype.changeData = function (field, fase) {
        var dataForField = this.data.find(function (d) { return d.name === field; });
        var newSeries = dataForField.series.filter(function (d) { return d.fase === fase; });
        this.currentData = { name: field, series: newSeries };
        this.dataControl$.next([{ name: field, series: newSeries }]);
    };
    DataService.prototype.changeScatterData = function (chartKey, field, fase) {
        var dataForField = this.data.find(function (d) { return d.name === field; });
        var newSeries = dataForField.series.filter(function (d) { return d.fase === fase; });
        this.dataScatter[chartKey] = { name: field, series: newSeries };
        this.dataScatter$.next(this.dataScatter);
    };
    DataService.prototype.getSubData = function (name, data) {
        var crossf = __WEBPACK_IMPORTED_MODULE_3_crossfilter2__(data);
        var dataByDate = crossf.dimension(function (row) { return row['fecha']; });
        var field = 'fase';
        var field2 = 'valor';
        var addReduce = function (p, v) {
            p = {
                fase: v[field],
                valor: v[field2]
            };
            return p;
        };
        var removeReduce = function (p, v) {
            return p;
        };
        var initReduce = function () {
            return {};
        };
        var chartsValue = dataByDate.group().reduce(addReduce, removeReduce, initReduce).all()
            .map(function (elem) {
            return {
                name: new Date(elem.key),
                fase: elem.value.fase,
                value: elem.value.valor
            };
        });
        return { name: name, series: chartsValue };
    };
    DataService.prototype.studyData = function (range) {
        if (!range.alerts) {
            return;
        }
        var data = this.currentData.series;
        var warningsByKey = {};
        var _loop_1 = function (elem) {
            var currentElem = new Date(elem.name);
            var minDate = new Date(range.minX);
            var maxDate = new Date(range.maxX);
            if (currentElem.getTime() > maxDate.getTime()) {
                return "break";
            }
            else if (currentElem.getTime() >= minDate.getTime()) {
                var key_1 = this_1.currentData.name;
                if (!warningsByKey[key_1]) {
                    warningsByKey[key_1] = {};
                }
                range.limitPoints.map(function (limit, limitIndex) {
                    var actualWarning;
                    if (!warningsByKey[key_1][limitIndex]) {
                        warningsByKey[key_1][limitIndex] = [];
                        actualWarning = {
                            'condition': null,
                            'first': null,
                            'last': null,
                            'complete': false
                        };
                    }
                    else {
                        actualWarning = warningsByKey[key_1][limitIndex].splice(-1, 1)[0];
                    }
                    var equals = (limit.condition === 'equal' || limit.condition === 'gte' || limit.condition === 'lte');
                    var greater = (limit.condition === 'gt' || limit.condition === 'gte');
                    var lower = (limit.condition === 'lt' || limit.condition === 'lte');
                    var passed = false;
                    if (((limit.value < elem.value) && greater) ||
                        ((limit.value > elem.value) && lower) ||
                        ((limit.value === elem.value) && equals)) {
                        actualWarning.condition = limit.condition;
                        if (!actualWarning.first) {
                            actualWarning.first = currentElem;
                            actualWarning.last = currentElem;
                        }
                        else {
                            actualWarning.last = currentElem;
                        }
                        passed = true;
                    }
                    if (!passed && !actualWarning.complete && actualWarning.last !== null) {
                        actualWarning.complete = true;
                        warningsByKey[key_1][limitIndex].push(actualWarning);
                        actualWarning = {
                            'condition': null,
                            'first': null,
                            'last': null,
                            'complete': false
                        };
                    }
                    if (currentElem.getTime() === maxDate.getTime()) {
                        if (actualWarning.first !== null) {
                            actualWarning.complete = true;
                            warningsByKey[key_1][limitIndex].push(actualWarning);
                        }
                    }
                    else {
                        warningsByKey[key_1][limitIndex].push(actualWarning);
                    }
                });
            }
        };
        var this_1 = this;
        for (var _i = 0, data_1 = data; _i < data_1.length; _i++) {
            var elem = data_1[_i];
            var state_1 = _loop_1(elem);
            if (state_1 === "break")
                break;
        }
        this.warnings.push(warningsByKey);
        this.innerWarnings$.next(this.warnings);
    };
    DataService.prototype.setRange = function (name, initialPoint, finalPoint, functionValue) {
        var _this = this;
        var rangeData;
        var minX = initialPoint ? new Date(initialPoint).getTime() : null;
        var maxX = finalPoint ? new Date(finalPoint).getTime() : null;
        this.http.get('/assets/daily.json').subscribe(function (data) {
            _this.originalData = data;
            _this.cf = __WEBPACK_IMPORTED_MODULE_3_crossfilter2__(data);
            _this.dataByDate = _this.cf.dimension(function (row) { return row['fecha']; });
            var addReduce = function (p, v) {
                return p;
            };
            var removeReduce = function (p, v) {
                return p;
            };
            var initReduce = function () {
                return {};
            };
            rangeData = _this.dataByDate.group().reduce(addReduce, removeReduce, initReduce).all().filter(function (elem) {
                var currentDate = new Date(elem.key).getTime();
                if (_this.validateRange(currentDate, minX, maxX)) {
                    return elem;
                }
            }).map(function (elem) {
                return {
                    name: new Date(elem.key),
                    value: functionValue
                };
            });
            _this.dataControl$.next(_this.dataControl$.getValue().concat({ name: name, series: rangeData }));
        });
    };
    DataService.prototype.validateRange = function (value, min, max) {
        if (min && max) {
            return (min <= value && value <= max);
        }
        if (min) {
            return (min <= value);
        }
        if (max) {
            return (value <= max);
        }
    };
    DataService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */]])
    ], DataService);
    return DataService;
}());



/***/ }),

/***/ "../../../../../src/app/services/range.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RangeService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__ = __webpack_require__("../../../../rxjs/_esm5/BehaviorSubject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__data_service__ = __webpack_require__("../../../../../src/app/services/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__view_service__ = __webpack_require__("../../../../../src/app/services/view.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__ = __webpack_require__("../../../../rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var RangeService = (function () {
    function RangeService(dataservice, view, http) {
        var _this = this;
        this.dataservice = dataservice;
        this.view = view;
        this.http = http;
        this.possibleID = 0;
        this.ranges = [];
        this.ranges$ = new __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__["a" /* BehaviorSubject */](this.ranges);
        this.rangeData$ = new __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__["a" /* BehaviorSubject */]([]);
        this.activated$ = this.view.activeView$.map(function (val) { return val === 'range'; });
        this.dataservice.dataControl$.map(function (d) { return d.length > 0; }).take(2).subscribe(function (val) {
            if (val && _this.ranges.length === 0) {
                _this.getRanges();
            }
        });
        this.subscription = __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__["a" /* Observable */].combineLatest(this.view.activeField$, this.view.activeFase$)
            .subscribe(function (_a) {
            var field = _a[0], fase = _a[1];
            _this.sendRange(field, fase);
        });
    }
    RangeService.prototype.getRanges = function () {
        var _this = this;
        this.http.get('/assets/limits.json').subscribe(function (data) {
            data.map(function (d, idx) {
                _this.addRangeByData(d);
            });
        });
    };
    RangeService.prototype.sendRange = function (field, fase) {
        if (fase !== 'Total Fases') {
            this.rangeData$.next([]);
            this.ranges$.next([]);
        }
        else {
            var sendableRanges = this.ranges
                .filter(function (range) { return range.field === field; });
            var sendableData = sendableRanges
                .map(function (range) {
                return {
                    name: range.name,
                    series: [
                        { name: new Date(range.minX), value: range.limitPoints[0].value },
                        { name: new Date(range.maxX), value: range.limitPoints[0].value },
                    ]
                };
            });
            this.ranges$.next(sendableRanges);
            this.rangeData$.next(sendableData);
        }
    };
    RangeService.prototype.addRangeByData = function (range) {
        this.ranges.push(range);
        this.ranges$.next(this.ranges);
        this.rangeData$.next(this.ranges.map(function (r) {
            return {
                name: r.name,
                series: [
                    { name: new Date(r.minX), value: r.limitPoints[0].value },
                    { name: new Date(r.maxX), value: r.limitPoints[0].value },
                ]
            };
        }));
        this.dataservice.studyData(range);
    };
    RangeService.prototype.addRange = function (name, minX, maxX, limitPoints) {
        var newRange = {
            'id': this.possibleID,
            'name': name,
            'minX': minX,
            'maxX': maxX,
            'limitPoints': limitPoints,
            'field': this.view.field,
            'alerts': true
        };
        this.possibleID += 1;
        this.ranges.push(newRange);
        this.ranges$.next(this.ranges);
        this.rangeData$.next(this.ranges.map(function (range) {
            return {
                name: range.name,
                series: [
                    { name: new Date(range.minX), value: range.limitPoints[0].value },
                    { name: new Date(range.maxX), value: range.limitPoints[0].value },
                ]
            };
        }));
        this.dataservice.studyData(newRange);
    };
    RangeService.prototype.editRange = function (id, name, minX, maxX, limitPoints) {
        var index = this.ranges.findIndex(function (comment) { return comment.id === id; });
        var newRange = {
            'id': id,
            'name': name,
            'minX': minX,
            'maxX': maxX,
            'limitPoints': limitPoints,
            'alerts': true
        };
        var newRanges = this.ranges.slice(0, index).concat([
            newRange
        ], this.ranges.slice(index + 1));
        this.ranges = newRanges;
        this.ranges$.next(newRanges);
    };
    RangeService.prototype.deleteRange = function (id) {
        var index = this.ranges.findIndex(function (range) { return range.id === id; });
        this.ranges.splice(index, 1);
        this.ranges$.next(this.ranges);
    };
    RangeService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__data_service__["a" /* DataService */],
            __WEBPACK_IMPORTED_MODULE_3__view_service__["a" /* ViewService */],
            __WEBPACK_IMPORTED_MODULE_5__angular_common_http__["a" /* HttpClient */]])
    ], RangeService);
    return RangeService;
}());



/***/ }),

/***/ "../../../../../src/app/services/target.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TargetService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__ = __webpack_require__("../../../../rxjs/_esm5/BehaviorSubject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_crossfilter2__ = __webpack_require__("../../../../crossfilter2/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_crossfilter2___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_crossfilter2__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TargetService = (function () {
    function TargetService(http) {
        this.http = http;
        this.dataDict = {};
        this.target$ = new __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__["a" /* BehaviorSubject */]([]);
        this.getData();
    }
    TargetService.prototype.getData = function () {
        var _this = this;
        this.http.get('/assets/targets.json').subscribe(function (data) {
            _this.originalData = data;
            _this.generateData('WK', 'Distancia', 'Total Fases');
        });
    };
    TargetService.prototype.getValue = function (target, field, fase, date) {
        var elem = this.originalData.find(function (row) {
            return row.fase === fase && row.fecha === date && row.kpi_nombre === field && row.tipo_target === target;
        });
        return elem ? elem.valor_target : null;
    };
    TargetService.prototype.generateData = function (target, field, fase) {
        var targetString = target + "." + field + "." + fase;
        if (this.dataDict[targetString]) {
            this.target$.next([this.dataDict[targetString]]);
            return;
        }
        var cf = __WEBPACK_IMPORTED_MODULE_2_crossfilter2__(this.originalData);
        var dataByDate = cf.dimension(function (row) { return row['fecha']; });
        var addReduce = function (p, v) {
            p.push({
                key: v['tipo_target'] + "." + v['kpi_nombre'] + "." + v['fase'],
                valor: v['valor_target']
            });
            return p;
        };
        var removeReduce = function (p, v) {
            return p;
        };
        var initReduce = function () {
            return [];
        };
        var chartsValue = dataByDate.group().reduce(addReduce, removeReduce, initReduce).all()
            .filter(function (elem) {
            var datum = elem.value.find(function (e) { return e.key === targetString; });
            return datum && datum.valor;
        })
            .map(function (elem) {
            var datum = elem.value.find(function (e) { return e.key === targetString; });
            return {
                name: new Date(elem.key),
                value: datum ? datum.valor : null
            };
        });
        this.dataDict[targetString] = { name: 'Target', series: chartsValue };
        this.target$.next([{ name: 'Target', series: chartsValue }]);
    };
    TargetService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__angular_common_http__["a" /* HttpClient */]])
    ], TargetService);
    return TargetService;
}());



/***/ }),

/***/ "../../../../../src/app/services/view.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ViewService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__target_service__ = __webpack_require__("../../../../../src/app/services/target.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__data_service__ = __webpack_require__("../../../../../src/app/services/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_BehaviorSubject__ = __webpack_require__("../../../../rxjs/_esm5/BehaviorSubject.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ViewService = (function () {
    function ViewService(target, data) {
        this.target = target;
        this.data = data;
        this.activeTarget = 'WK';
        this.field = 'Distancia';
        this.fase = 'Total Fases';
        this.activeView$ = new __WEBPACK_IMPORTED_MODULE_3_rxjs_BehaviorSubject__["a" /* BehaviorSubject */]('');
        this.activeTarget$ = new __WEBPACK_IMPORTED_MODULE_3_rxjs_BehaviorSubject__["a" /* BehaviorSubject */](this.activeTarget);
        this.activeField$ = new __WEBPACK_IMPORTED_MODULE_3_rxjs_BehaviorSubject__["a" /* BehaviorSubject */](this.field);
        this.activeFase$ = new __WEBPACK_IMPORTED_MODULE_3_rxjs_BehaviorSubject__["a" /* BehaviorSubject */](this.fase);
    }
    ViewService.prototype.activate = function (section) {
        this.active = section;
        this.activeView$.next(section);
    };
    ViewService.prototype.changeTarget = function (target) {
        this.activeTarget = target;
        this.activeTarget$.next(this.activeTarget);
        this.target.generateData(this.activeTarget, this.field, this.fase);
    };
    ViewService.prototype.changeKPI = function (kpi) {
        this.field = kpi;
        this.activeField$.next(this.field);
        this.target.generateData(this.activeTarget, this.field, this.fase);
        this.data.changeData(this.field, this.fase);
    };
    ViewService.prototype.changeFase = function (fase) {
        this.fase = fase;
        this.activeFase$.next(this.fase);
        this.target.generateData(this.activeTarget, this.field, this.fase);
        this.data.changeData(this.field, this.fase);
    };
    ViewService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__target_service__["a" /* TargetService */],
            __WEBPACK_IMPORTED_MODULE_2__data_service__["a" /* DataService */]])
    ], ViewService);
    return ViewService;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map