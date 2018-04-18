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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_cigo_cigo_component__ = __webpack_require__("../../../../../src/app/pages/cigo/cigo.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_2__pages_cigo_cigo_component__["a" /* CigoPageComponent */] },
    { path: '**', redirectTo: '' }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forRoot(routes, { useHash: true, preloadingStrategy: __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* PreloadAllModules */] })
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */]
            ],
            providers: []
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<app-top-bar></app-top-bar>\n<router-outlet></router-outlet>\n  <!-- <div class=\"sidebar-container left\">\n    <app-sidebar></app-sidebar>\n  </div>\n  <div class=\"charts-container\">\n    <app-control-chart (change)=\"test($event)\" [fieldOptions]=\"fieldOptions\" [budgetOptions]=\"budgetOptions\"></app-control-chart>\n    <app-scatter-chart></app-scatter-chart>\n  </div>\n  <div class=\"sidebar-container right\">\n    <app-comment-section></app-comment-section>\n  </div> -->\n"

/***/ }),

/***/ "../../../../../src/app/app.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "* {\n  font-family: Helvetica, sans-serif; }\n\n.app-container {\n  height: calc(100vh - 60px);\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex: 1;\n      flex: 1; }\n  .app-container .sidebar-container {\n    -ms-flex: 2;\n        flex: 2;\n    border-radius: 3px;\n    background-color: #f9f9f9;\n    box-shadow: 0px 0px 1px #4981FD;\n    margin: 10px; }\n    .app-container .sidebar-container.right {\n      overflow: auto; }\n  .app-container .charts-container {\n    padding: 10px 0;\n    -ms-flex: 10;\n        flex: 10; }\n", ""]);

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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__swimlane_ngx_datatable__ = __webpack_require__("../../../../@swimlane/ngx-datatable/release/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__swimlane_ngx_datatable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__swimlane_ngx_datatable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_material_list__ = __webpack_require__("../../../material/esm5/list.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_material_progress_bar__ = __webpack_require__("../../../material/esm5/progress-bar.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_material_datepicker__ = __webpack_require__("../../../material/esm5/datepicker.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_material_checkbox__ = __webpack_require__("../../../material/esm5/checkbox.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_material_input__ = __webpack_require__("../../../material/esm5/input.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_material_button__ = __webpack_require__("../../../material/esm5/button.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__angular_material_button_toggle__ = __webpack_require__("../../../material/esm5/button-toggle.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__angular_material_icon__ = __webpack_require__("../../../material/esm5/icon.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__angular_material_select__ = __webpack_require__("../../../material/esm5/select.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__angular_material_dialog__ = __webpack_require__("../../../material/esm5/dialog.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__app_routing_module__ = __webpack_require__("../../../../../src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__services_comments_service__ = __webpack_require__("../../../../../src/app/services/comments.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__services_data_service__ = __webpack_require__("../../../../../src/app/services/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__services_range_service__ = __webpack_require__("../../../../../src/app/services/range.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__services_target_service__ = __webpack_require__("../../../../../src/app/services/target.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__services_view_service__ = __webpack_require__("../../../../../src/app/services/view.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__components_control_chart_control_chart_component__ = __webpack_require__("../../../../../src/app/components/control-chart/control-chart.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__components_control_chart_combo_combo_component__ = __webpack_require__("../../../../../src/app/components/control-chart/combo/combo.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__components_top_bar_top_bar_component__ = __webpack_require__("../../../../../src/app/components/top-bar/top-bar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__components_sidebar_sidebar_component__ = __webpack_require__("../../../../../src/app/components/sidebar/sidebar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__components_card_listing_card_listing_component__ = __webpack_require__("../../../../../src/app/components/card-listing/card-listing.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__components_card_card_component__ = __webpack_require__("../../../../../src/app/components/card/card.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__components_comment_section_comment_section_component__ = __webpack_require__("../../../../../src/app/components/comment-section/comment-section.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__components_comment_section_comment_comment_component__ = __webpack_require__("../../../../../src/app/components/comment-section/comment/comment.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__components_new_range_form_new_range_form_component__ = __webpack_require__("../../../../../src/app/components/new-range-form/new-range-form.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__components_comment_section_input_input_component__ = __webpack_require__("../../../../../src/app/components/comment-section/input/input.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__components_filter_filter_component__ = __webpack_require__("../../../../../src/app/components/filter/filter.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__components_scatter_chart_scatter_chart_component__ = __webpack_require__("../../../../../src/app/components/scatter-chart/scatter-chart.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__components_pareto_chart_pareto_chart_component__ = __webpack_require__("../../../../../src/app/components/pareto-chart/pareto-chart.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38__components_table_table_component__ = __webpack_require__("../../../../../src/app/components/table/table.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39__components_pareto_chart_combo_combo_component__ = __webpack_require__("../../../../../src/app/components/pareto-chart/combo/combo.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_40__components_pareto_chart_vertical_series_vertical_series_component__ = __webpack_require__("../../../../../src/app/components/pareto-chart/vertical-series/vertical-series.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_41__pages_cdi_cdi_component__ = __webpack_require__("../../../../../src/app/pages/cdi/cdi.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_42__pages_home_home_component__ = __webpack_require__("../../../../../src/app/pages/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_43__pages_pareto_pareto_component__ = __webpack_require__("../../../../../src/app/pages/pareto/pareto.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_44__pages_fuel_fuel_component__ = __webpack_require__("../../../../../src/app/pages/fuel/fuel.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_45__components_waterfall_chart_waterfall_chart_component__ = __webpack_require__("../../../../../src/app/components/waterfall-chart/waterfall-chart.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_46__components_histogram_chart_histogram_chart_component__ = __webpack_require__("../../../../../src/app/components/histogram-chart/histogram-chart.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_47__pages_cigo_cigo_component__ = __webpack_require__("../../../../../src/app/pages/cigo/cigo.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_48__services_cigo_data_service__ = __webpack_require__("../../../../../src/app/services/cigo-data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_49__angular_material_core__ = __webpack_require__("../../../material/esm5/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


















































var Components = [
    __WEBPACK_IMPORTED_MODULE_25__components_control_chart_control_chart_component__["a" /* ControlChartComponent */],
    __WEBPACK_IMPORTED_MODULE_26__components_control_chart_combo_combo_component__["a" /* ComboComponent */],
    __WEBPACK_IMPORTED_MODULE_27__components_top_bar_top_bar_component__["a" /* TopBarComponent */],
    __WEBPACK_IMPORTED_MODULE_28__components_sidebar_sidebar_component__["a" /* SidebarComponent */],
    __WEBPACK_IMPORTED_MODULE_29__components_card_listing_card_listing_component__["a" /* CardListingComponent */],
    __WEBPACK_IMPORTED_MODULE_30__components_card_card_component__["a" /* CardComponent */],
    __WEBPACK_IMPORTED_MODULE_31__components_comment_section_comment_section_component__["a" /* CommentSectionComponent */],
    __WEBPACK_IMPORTED_MODULE_32__components_comment_section_comment_comment_component__["a" /* CommentComponent */],
    __WEBPACK_IMPORTED_MODULE_33__components_new_range_form_new_range_form_component__["a" /* NewRangeFormComponent */],
    __WEBPACK_IMPORTED_MODULE_34__components_comment_section_input_input_component__["a" /* InputComponent */],
    __WEBPACK_IMPORTED_MODULE_35__components_filter_filter_component__["a" /* FilterComponent */],
    __WEBPACK_IMPORTED_MODULE_36__components_scatter_chart_scatter_chart_component__["a" /* ScatterChartComponent */],
    __WEBPACK_IMPORTED_MODULE_38__components_table_table_component__["a" /* TableComponent */],
    __WEBPACK_IMPORTED_MODULE_37__components_pareto_chart_pareto_chart_component__["a" /* ParetoChartComponent */],
    __WEBPACK_IMPORTED_MODULE_39__components_pareto_chart_combo_combo_component__["a" /* ParetoComboComponent */],
    __WEBPACK_IMPORTED_MODULE_40__components_pareto_chart_vertical_series_vertical_series_component__["a" /* ParetoVerticalSeriesComponent */]
];
var Pages = [
    __WEBPACK_IMPORTED_MODULE_43__pages_pareto_pareto_component__["a" /* ParetoPageComponent */],
    __WEBPACK_IMPORTED_MODULE_41__pages_cdi_cdi_component__["a" /* CdiPageComponent */],
    __WEBPACK_IMPORTED_MODULE_44__pages_fuel_fuel_component__["a" /* FuelPageComponent */],
    __WEBPACK_IMPORTED_MODULE_42__pages_home_home_component__["a" /* HomePageComponent */],
    __WEBPACK_IMPORTED_MODULE_47__pages_cigo_cigo_component__["a" /* CigoPageComponent */]
];
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_19__app_component__["a" /* AppComponent */]
            ].concat(Components, Pages, [
                __WEBPACK_IMPORTED_MODULE_45__components_waterfall_chart_waterfall_chart_component__["a" /* WaterfallChartComponent */],
                __WEBPACK_IMPORTED_MODULE_46__components_histogram_chart_histogram_chart_component__["a" /* HistogramChartComponent */],
            ]),
            imports: [
                __WEBPACK_IMPORTED_MODULE_18__app_routing_module__["a" /* AppRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["BrowserModule"],
                __WEBPACK_IMPORTED_MODULE_5__angular_material_list__["a" /* MatListModule */],
                __WEBPACK_IMPORTED_MODULE_8__angular_material_checkbox__["a" /* MatCheckboxModule */],
                __WEBPACK_IMPORTED_MODULE_16__angular_forms__["c" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_17__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_3__swimlane_ngx_charts__["NgxChartsModule"],
                __WEBPACK_IMPORTED_MODULE_4__swimlane_ngx_datatable__["NgxDatatableModule"],
                __WEBPACK_IMPORTED_MODULE_10__angular_material_button__["a" /* MatButtonModule */],
                __WEBPACK_IMPORTED_MODULE_13__angular_material_select__["a" /* MatSelectModule */],
                __WEBPACK_IMPORTED_MODULE_11__angular_material_button_toggle__["a" /* MatButtonToggleModule */],
                __WEBPACK_IMPORTED_MODULE_9__angular_material_input__["b" /* MatInputModule */],
                __WEBPACK_IMPORTED_MODULE_12__angular_material_icon__["a" /* MatIconModule */],
                __WEBPACK_IMPORTED_MODULE_13__angular_material_select__["a" /* MatSelectModule */],
                __WEBPACK_IMPORTED_MODULE_14__angular_material_dialog__["b" /* MatDialogModule */],
                __WEBPACK_IMPORTED_MODULE_15__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_material_progress_bar__["a" /* MatProgressBarModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_material_datepicker__["a" /* MatDatepickerModule */],
                __WEBPACK_IMPORTED_MODULE_49__angular_material_core__["j" /* MatNativeDateModule */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_21__services_data_service__["a" /* DataService */],
                __WEBPACK_IMPORTED_MODULE_20__services_comments_service__["a" /* CommentsService */],
                __WEBPACK_IMPORTED_MODULE_22__services_range_service__["a" /* RangeService */],
                __WEBPACK_IMPORTED_MODULE_24__services_view_service__["a" /* ViewService */],
                __WEBPACK_IMPORTED_MODULE_48__services_cigo_data_service__["a" /* CigoDataService */],
                __WEBPACK_IMPORTED_MODULE_23__services_target_service__["a" /* TargetService */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_19__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/components/card-listing/card-listing.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-list role=\"list\" class=\"list-global\" *ngIf=\"isCdi\">\n  <div class=\"list-container\">\n    <div class=\"list-header\">\n      <h3 mat-subheader>Warnings</h3>\n    </div>\n    <div class=\"items-list\">\n      <!-- <mat-checkbox [ngModel]=\"rangeService.activated$ | async\"  (ngModelChange)=\"toggle($event)\">Add new limit</mat-checkbox> -->\n      <!-- <mat-button-toggle [value]=\"rangeService.activated$ | async\" (click)=\"toggle($event)\">Add new Limit</mat-button-toggle> -->\n      <button mat-raised-button [color]=\"isActive ? '' : 'accent'\" (click)=\"toggle($event)\">New Limit</button>\n      <app-new-range-form\n        *ngIf=\"(rangeService.activated$  | async)\"\n        [selectedX]=\"(activeCoords$ | async)?.x\"\n        [selectedY]=\"(activeCoords$ | async)?.y\"\n        (cancel)=\"onCancel()\"\n        (createRange)=\"createRange($event)\">\n      </app-new-range-form>\n      <ng-template [ngIf]=\"(warnings$ | async)?.length\">\n        <app-card *ngFor=\"let warning of warnings$ | async\" [color]=\"'#FF8033'\" [title]=\"'Out of range'\" [content]=\"formatWarningContent(warning)\"></app-card>\n      </ng-template>\n    </div>\n  </div>\n  <mat-divider></mat-divider>\n  <div class=\"list-container\" *ngIf=\"!commentList\" >\n    <h3 mat-subheader>Limits</h3>\n    <div class=\"items-list\">\n      <app-card *ngFor=\"let range of ranges$ | async\" [color]=\"'#4981FD'\" [title]=\"range.name\" [content]=\"formatRangeContent(range)\"></app-card>\n    </div>\n  </div>\n</mat-list>\n"

/***/ }),

/***/ "../../../../../src/app/components/card-listing/card-listing.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".mat-list-item-content:ng-deep {\n  padding: 0px !important; }\n\n.mat-divider {\n  border-top-color: rgba(0, 0, 0, 0.12);\n  margin-right: 10px;\n  margin-left: 10px; }\n\n.mat-subheader {\n  color: rgba(0, 0, 0, 0.54);\n  font-size: small;\n  text-transform: uppercase;\n  -ms-flex-pack: center;\n      justify-content: center; }\n\n.list-global {\n  height: calc(100% - 40px);\n  overflow: scroll;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-direction: column;\n      flex-direction: column; }\n  .list-global .list-container {\n    -ms-flex: 1;\n        flex: 1; }\n    .list-global .list-container .items-list {\n      height: calc(100% - 70px);\n      overflow: auto; }\n\n.mat-checkbox {\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-pack: center;\n      justify-content: center;\n  font-size: 12px;\n  color: #353535; }\n\nbutton {\n  font-size: 12px;\n  height: 30px;\n  width: 90%;\n  margin-left: 5%; }\n", ""]);

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
        this.isActive = false;
        this.commentList = false;
        this.isCdi = true;
    }
    CardListingComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.rangeService.isCdi = this.isCdi;
        this.dataService.clearWarnings();
        this.commentsService.initComments(this.isCdi);
        this.rangeService.initRanges(this.isCdi);
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
        this.isActive = !this.isActive;
        this.viewService.activate(this.isActive ? 'range' : '');
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
        if (this.isActive) {
            this.toggle(null);
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], CardListingComponent.prototype, "commentList", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], CardListingComponent.prototype, "isCdi", void 0);
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

module.exports = "<mat-list role=\"list\" class=\"list-global\">\n  <div class=\"list-container\">\n    <div class=\"list-header\">\n      <h3 mat-subheader>Comments</h3>\n    </div>\n    <div class=\"items-list\">\n      <button mat-raised-button [color]=\"isActive ? '' : 'accent'\" (click)=\"toggleClick()\">New Comment</button>\n      <mat-checkbox [ngModel]=\"this.toggleActive\" (ngModelChange)=\"toggle($event)\">\n          Show on table\n      </mat-checkbox>\n      <app-input *ngIf=\"(commentService.activated$ | async) && ((activeCoords$ | async) || isActive)\" (submit)=\"addComment($event)\" (cancel)=\"onCancel()\" [coordX]=\"(activeCoords$ | async)?.x\" [coordY]=\"(activeCoords$ | async)?.y\"></app-input>\n      <ng-template ngFor let-comment let-i=\"index\" [ngForOf]=\"comments$ | async\">\n        <app-comment [comment]=\"comment\" [active]=\"comment.id === (active$ | async)\" [color]=\"'rgba(255, 64, 129, 0.7)'\" (click)=\"activateComment(comment.id)\"></app-comment>\n      </ng-template>\n    </div>\n  </div>\n</mat-list>\n"

/***/ }),

/***/ "../../../../../src/app/components/comment-section/comment-section.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".mat-list-item-content:ng-deep {\n  padding: 0px !important; }\n\n.mat-divider {\n  border-top-color: rgba(0, 0, 0, 0.12);\n  margin-right: 10px;\n  margin-left: 10px; }\n\n.mat-subheader {\n  color: rgba(0, 0, 0, 0.54);\n  font-size: small;\n  text-transform: uppercase;\n  -ms-flex-pack: center;\n      justify-content: center; }\n\n.mat-checkbox {\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-pack: left;\n      justify-content: left;\n  margin-left: 5%;\n  margin-top: 20px;\n  font-size: 12px;\n  color: #353535; }\n\nbutton {\n  font-size: 12px;\n  height: 30px;\n  width: 90%;\n  margin-left: 5%; }\n", ""]);

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
        this.isActive = false;
        this.toggleActive = false;
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
        this.toggleActive = !this.toggleActive;
        this.viewService.activate(this.toggleActive ? 'comment' : '');
    };
    CommentSectionComponent.prototype.activateComment = function (id) {
        this.commentService.toogleComment(id);
    };
    CommentSectionComponent.prototype.addComment = function (comment) {
        this.commentService.addComment(comment.title, comment.text, comment.coordinates);
        this.onCancel();
    };
    CommentSectionComponent.prototype.toggleClick = function () {
        this.isActive = !this.isActive;
        this.toggleActive = true;
        this.viewService.activate(this.isActive ? 'comment' : '');
    };
    CommentSectionComponent.prototype.onCancel = function () {
        this.commentService.activateCoordinate();
        if (this.isActive) {
            this.toggleClick();
        }
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
exports.push([module.i, ".coords {\n  width: 100%; }\n\n.card {\n  border-top: 2px solid #4981FD;\n  border-bottom: 2px solid #4981FD;\n  background-color: white;\n  font-size: 14px;\n  padding: 10px;\n  margin: 10px; }\n\ndiv.buttons {\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-direction: row;\n      flex-direction: row;\n  -ms-flex-pack: justify;\n      justify-content: space-between; }\n", ""]);

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

module.exports = "<ngx-charts-chart\n  [view]=\"[width, height]\"\n  [showLegend]=\"legend\"\n  [legendOptions]=\"legendOptions\"\n  [activeEntries]=\"activeEntries\"\n  [animations]=\"animations\"\n  (legendLabelClick)=\"onClick($event)\"\n  (legendLabelActivate)=\"onActivate($event)\"\n  (legendLabelDeactivate)=\"onDeactivate($event)\">\n  <svg:defs>\n    <svg:clipPath [attr.id]=\"clipPathId\">\n      <svg:rect\n        [attr.width]=\"dims.width + 10\"\n        [attr.height]=\"dims.height + 10\"\n        [attr.transform]=\"'translate(-5, -5)'\"/>\n    </svg:clipPath>\n  </svg:defs>\n  <svg:g [attr.transform]=\"transform\" class=\"line-chart chart\">\n    \n    <svg:g ngx-charts-x-axis\n      *ngIf=\"xAxis\"\n      [xScale]=\"xScale\"\n      [dims]=\"dims\"\n      [showGridLines]=\"showGridLines\"\n      [showLabel]=\"showXAxisLabel\"\n      [labelText]=\"xAxisLabel\"\n      [tickFormatting]=\"xAxisTickFormatting\"\n      (dimensionsChanged)=\"updateXAxisHeight($event)\">\n    </svg:g>\n    <svg:g ngx-charts-y-axis\n      *ngIf=\"yAxis\"\n      [yScale]=\"yScale\"\n      [dims]=\"dims\"\n      [showGridLines]=\"showGridLines\"\n      [showLabel]=\"showYAxisLabel\"\n      [labelText]=\"yAxisLabel\"\n      [tickFormatting]=\"yAxisTickFormatting\"\n      [referenceLines]=\"referenceLines\"\n      [showRefLines]=\"showRefLines\"\n      [showRefLabels]=\"showRefLabels\"\n      (dimensionsChanged)=\"updateYAxisWidth($event)\">\n    </svg:g>\n    <svg:g [attr.clip-path]=\"clipPath\">\n      <svg:g *ngFor=\"let series of results; trackBy:trackBy\" [@animationState]=\"'active'\">\n        <svg:g ngx-charts-line-series\n          [xScale]=\"xScale\"\n          [yScale]=\"yScale\"\n          [colors]=\"colors\"\n          [data]=\"series\"\n          [activeEntries]=\"activeEntries\"\n          [scaleType]=\"scaleType\"\n          [curve]=\"curve\"\n          [rangeFillOpacity]=\"rangeFillOpacity\"\n          [hasRange]=\"hasRange\"\n          [animations]=\"animations\"\n        />\n      </svg:g>\n\n      <svg:g *ngIf=\"!tooltipDisabled\" (mouseleave)=\"hideCircles()\">\n        <svg:g ngx-charts-tooltip-area\n          [dims]=\"dims\"\n          [xSet]=\"xSet\"\n          [xScale]=\"xScale\"\n          [yScale]=\"yScale\"\n          [results]=\"results\"\n          [colors]=\"colors\"\n          [tooltipDisabled]=\"tooltipDisabled\"\n          [tooltipTemplate]=\"seriesTooltipTemplate\"\n          (hover)=\"updateHoveredVertical($event)\"\n          (clicked)=\"areaClicked($event)\"\n        />\n\n        <svg:g *ngFor=\"let series of results\">\n          <svg:g ngx-charts-circle-series\n            [xScale]=\"xScale\"\n            [yScale]=\"yScale\"\n            [colors]=\"colors\"\n            [data]=\"series\"\n            [scaleType]=\"scaleType\"\n            [visibleValue]=\"hoveredVertical\"\n            [activeEntries]=\"activeEntries\"\n            [tooltipDisabled]=\"tooltipDisabled\"\n            [tooltipTemplate]=\"tooltipTemplate\"\n            (select)=\"onClick($event, series)\"\n            (activate)=\"onActivate($event)\"\n            (deactivate)=\"onDeactivate($event)\"\n          />\n        </svg:g>\n      </svg:g>\n      <ng-container *ngIf=\"commentsActive\">\n        <svg:g *ngFor=\"let series of comments\">\n            <svg:g ngx-charts-bubble-series\n            [xScale]=\"xScale\"\n            [yScale]=\"yScale\"\n            [rScale]=\"rScale\"\n            [xScaleType]=\"xScaleType\"\n            [yScaleType]=\"yScaleType\"\n            [xAxisLabel]=\"xAxisLabel\"\n            [yAxisLabel]=\"yAxisLabel\"\n            [colors]=\"secondaryColors\"\n            [data]=\"series\"\n            [activeEntries]=\"activeComment\"\n            [tooltipDisabled]=\"tooltipDisabled\"\n            [tooltipTemplate]=\"tooltipTemplate\"\n            (select)=\"onClick($event, series)\"\n            (activate)=\"onHover($event, series)\"\n            (deactivate)=\"onHover($event, null)\" />\n        </svg:g>\n      </ng-container>\n    </svg:g>\n  </svg:g>\n  <!-- <svg:g ngx-charts-timeline\n    *ngIf=\"timeline && scaleType != 'ordinal'\"\n    [attr.transform]=\"timelineTransform\"\n    [results]=\"results\"\n    [view]=\"[timelineWidth, height]\"\n    [height]=\"timelineHeight\"\n    [scheme]=\"scheme\"\n    [customColors]=\"customColors\"\n    [scaleType]=\"scaleType\"\n    [legend]=\"legend\"\n    (onDomainChange)=\"updateDomain($event)\">\n    <svg:g *ngFor=\"let series of results; trackBy:trackBy\">\n      <svg:g ngx-charts-line-series\n        [xScale]=\"timelineXScale\"\n        [yScale]=\"timelineYScale\"\n        [colors]=\"colors\"\n        [data]=\"series\"\n        [scaleType]=\"scaleType\"\n        [curve]=\"curve\"\n        [hasRange]=\"hasRange\"\n        [animations]=\"animations\"\n      />\n    </svg:g>\n  </svg:g> -->\n</ngx-charts-chart>"

/***/ }),

/***/ "../../../../../src/app/components/control-chart/combo/combo.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".ngx-charts {\n  float: left;\n  overflow: visible; }\n  .ngx-charts .circle,\n  .ngx-charts .bar,\n  .ngx-charts .arc {\n    cursor: pointer; }\n  .ngx-charts .bar.active, .ngx-charts .bar:hover,\n  .ngx-charts .cell.active,\n  .ngx-charts .cell:hover,\n  .ngx-charts .arc.active,\n  .ngx-charts .arc:hover,\n  .ngx-charts .card.active,\n  .ngx-charts .card:hover {\n    opacity: 0.8;\n    transition: opacity 100ms ease-in-out; }\n  .ngx-charts .bar:focus,\n  .ngx-charts .cell:focus,\n  .ngx-charts .arc:focus,\n  .ngx-charts .card:focus {\n    outline: none; }\n  .ngx-charts g:focus {\n    outline: none; }\n  .ngx-charts .line-series.inactive,\n  .ngx-charts .line-series-range.inactive,\n  .ngx-charts .polar-series-path.inactive,\n  .ngx-charts .polar-series-area.inactive,\n  .ngx-charts .area-series.inactive {\n    transition: opacity 100ms ease-in-out;\n    opacity: .2; }\n  .ngx-charts .line-highlight {\n    display: none; }\n    .ngx-charts .line-highlight.active {\n      display: block; }\n  .ngx-charts .area {\n    opacity: 0.6; }\n  .ngx-charts .circle:hover {\n    cursor: pointer; }\n  .ngx-charts .label {\n    font-size: 12px;\n    font-weight: normal; }\n  .ngx-charts .tooltip-anchor {\n    fill: black; }\n  .ngx-charts .gridline-path {\n    stroke: #ddd;\n    stroke-width: 1;\n    fill: none; }\n  .ngx-charts .refline-path {\n    stroke: #a8b2c7;\n    stroke-width: 1;\n    stroke-dasharray: 5;\n    stroke-dashoffset: 5; }\n  .ngx-charts .refline-label {\n    font-size: 9px; }\n  .ngx-charts .reference-area {\n    fill-opacity: 0.05;\n    fill: #000; }\n  .ngx-charts .gridline-path-dotted {\n    stroke: #ddd;\n    stroke-width: 1;\n    fill: none;\n    stroke-dasharray: 1, 20;\n    stroke-dashoffset: 3; }\n  .ngx-charts .grid-panel rect {\n    fill: none; }\n  .ngx-charts .grid-panel.odd rect {\n    fill: rgba(0, 0, 0, 0.05); }\n\n.ngx-charts-outer {\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-direction: column-reverse;\n      flex-direction: column-reverse;\n  -ms-flex-align: center;\n      align-items: center;\n  width: 100%; }\n  .ngx-charts-outer .chart-legend {\n    min-width: 500px !important; }\n    .ngx-charts-outer .chart-legend > div {\n      width: 100% !important; }\n      .ngx-charts-outer .chart-legend > div .legend-labels {\n        background: transparent;\n        display: -ms-flexbox;\n        display: flex;\n        -ms-flex-direction: row;\n            flex-direction: row;\n        -ms-flex-pack: distribute;\n            justify-content: space-around; }\n        .ngx-charts-outer .chart-legend > div .legend-labels .legend-label {\n          color: rgba(35, 35, 35, 0.6); }\n        .ngx-charts-outer .chart-legend > div .legend-labels span:focus {\n          outline: none; }\n        .ngx-charts-outer .chart-legend > div .legend-labels .legend-label-color {\n          border-radius: 0;\n          height: 7px; }\n      .ngx-charts-outer .chart-legend > div header {\n        display: none; }\n  .ngx-charts-outer .axis text {\n    font-size: 12px;\n    fill: rgba(35, 35, 35, 0.6); }\n  .ngx-charts-outer rect.overlay {\n    stroke-width: 1;\n    stroke: rgba(35, 35, 35, 0.6);\n    shape-rendering: crispedges;\n    cursor: crosshair; }\n", ""]);

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
        _this.margin = [0, 20, 0, 20];
        _this.xAxisHeight = 0;
        _this.yAxisWidth = 0;
        _this.timelineHeight = 30;
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
            this.dims.height += 20;
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
        console.log('AQUI', domain);
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

module.exports = "<div class=\"filters-box\" *ngIf=\"fieldOptions.length > 0\">\n  <app-filter (change)=\"doChange($event)\" [options]=\"fieldOptions\" [targetOptions]=\"budgetOptions\"></app-filter>\n</div>\n<div class=\"chart-container\" #target>\n    <mat-form-field>\n        <input matInput\n          [matDatepicker]=\"picker\"\n          [value]=\"initialDate\"\n          [min]=\"minDate\"\n          [max]=\"maxDate\"\n          (dateChange)=\"onChangeDate($event, 'initial')\">\n        <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\n        <mat-datepicker #picker></mat-datepicker>\n    </mat-form-field>\n    <mat-form-field>\n        <input matInput \n          [matDatepicker]=\"picker2\"\n          [value]=\"finalDate\"\n          [min]=\"minDate\"\n          [max]=\"maxDate\"\n          (dateChange)=\"onChangeDate($event, 'final')\" >\n        <mat-datepicker-toggle matSuffix [for]=\"picker2\"></mat-datepicker-toggle>\n        <mat-datepicker #picker2></mat-datepicker>\n  </mat-form-field>  \n  <app-combo\n    [view]=\"[width, height]\"\n    [scheme]=\"colorScheme\"\n    [results]=\"fullData$ | async\"\n    [comments]=\"fullComments$ | async\"\n    [commentsActive]=\"commentsVisible$ | async\"\n    [activeComment]=\"activeComment$ | async\"\n    [animations]=\"animations\"\n    [gradient]=\"gradient\"\n    [xAxis]=\"showXAxis\"\n    [yAxis]=\"showYAxis\"\n    [legend]=\"showLegend\"\n    [showGridLines]=\"true\"\n    [timeline]=\"true\"\n    [showXAxisLabel]=\"false\"\n    [showYAxisLabel]=\"false\"\n    [showRefLabels]=\"false\"\n    [autoScale]=\"autoScale\"\n    (clicked)=\"onClicked($event)\"\n    (hover)=\"onHover($event)\"\n    (select)=\"onSelect($event)\">\n  </app-combo>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/control-chart/control-chart.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".chart-container {\n  border-radius: 3px;\n  background-color: #ffffff;\n  box-shadow: 0px 0px 1px #4981FD;\n  padding: 10px 15px 15px 15px;\n  height: 85%; }\n", ""]);

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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_rxjs_BehaviorSubject__ = __webpack_require__("../../../../rxjs/_esm5/BehaviorSubject.js");
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
        this.currentFase = 'Total Fases';
        this.currentKpi = 'Distancia';
        this.currentTipo = 'Camion';
        this.currentFlota = 'all';
        this.change = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.changeDate = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
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
        this.viewService.activeView$.do(function (view) { return _this.selectedView = view.length ? true : false; }).subscribe();
        if (this.pageDescriptor === 'cdi') {
            this.setCdiPage();
        }
        else {
            this.setFuelPage();
        }
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
    ControlChartComponent.prototype.setFuelPage = function () {
        this.targetData$ = new __WEBPACK_IMPORTED_MODULE_9_rxjs_BehaviorSubject__["BehaviorSubject"]([]);
        this.rangeData$ = this.rangeService.rangeData$;
        this.data$ = this.dataService.dataControlFuel$;
        this.initialDate = this.dataService.fuelInitDay;
        this.finalDate = this.dataService.fuelEndDay;
        this.minDate = this.dataService.fuelInitDay;
        this.maxDate = this.dataService.fuelEndDay;
        this.fullData$ = __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__["a" /* Observable */].combineLatest(this.data$, this.targetData$, this.rangeData$)
            .map(function (data) {
            return data[0].concat(data[1], data[2]);
        });
    };
    ControlChartComponent.prototype.setCdiPage = function () {
        this.targetData$ = this.targetService.target$;
        this.rangeData$ = this.rangeService.rangeData$;
        this.initialDate = this.dataService.cdiInitDay;
        this.finalDate = this.dataService.cdiEndDay;
        this.minDate = this.dataService.cdiInitDay;
        this.maxDate = this.dataService.cdiEndDay;
        this.data$ = this.dataService.dataControl$;
        this.fullData$ = __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__["a" /* Observable */].combineLatest(this.data$, this.targetData$, this.rangeData$)
            .map(function (data) {
            return data[0].concat(data[1], data[2]);
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
        switch (event.field) {
            case 'Tipo':
                this.currentTipo = event.value;
                break;
            case 'Flota':
                this.currentFlota = event.value;
                break;
            case 'KPI':
                this.currentKpi = event.value;
                break;
            case 'Fase':
                this.currentFase = event.value;
                break;
        }
        this.change.emit(event);
    };
    ControlChartComponent.prototype.onChangeDate = function (event, target) {
        (target === 'final') ? this.finalDate = event.value : this.initialDate = event.value;
        if (this.pageDescriptor === 'cdi') {
            console.log('aqui');
            this.dataService.changeData(this.currentKpi, this.currentFase, this.initialDate, this.finalDate);
            this.targetService.changeTargetData(this.initialDate, this.finalDate);
            this.rangeService.changeRangeData(this.initialDate, this.finalDate);
        }
        else {
            this.dataService.changeFuelData(this.currentTipo, this.currentFlota, this.initialDate, this.finalDate);
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('target', { read: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"] }),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"])
    ], ControlChartComponent.prototype, "target", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], ControlChartComponent.prototype, "pageDescriptor", void 0);
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
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], ControlChartComponent.prototype, "changeDate", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], ControlChartComponent.prototype, "showLegend", void 0);
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
exports.push([module.i, ".container {\n  background-color: #ffffff;\n  padding: 10px;\n  height: 40px;\n  margin: 0 0 5px 0;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-align: center;\n      align-items: center;\n  -ms-flex-pack: justify;\n      justify-content: space-between; }\n  .container .fields {\n    width: calc(100% - 315px);\n    margin-top: -13px; }\n    .container .fields mat-form-field {\n      margin: 4px;\n      height: 30px;\n      font-size: 14px; }\n      .container .fields mat-form-field.first {\n        width: 22%; }\n  .container mat-button-toggle-group, .container mat-option, .container mat-form-field {\n    height: 30px;\n    font-size: 14px;\n    color: #353535; }\n  .container .mat-button-toggle-checked {\n    background-color: #a59cb6;\n    color: #f9f9f9; }\n\n.filter-cont {\n  padding: 0px; }\n", ""]);

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

/***/ "../../../../../src/app/components/histogram-chart/histogram-chart.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"chart-container second\" #target>\n  <div class=\"histogram-container\" *ngIf=\"showChart\">\n    <ngx-charts-bar-vertical\n      [view]=\"[width, height - 50]\"\n      [scheme]=\"colorScheme\"\n      [results]=\"finalData\"\n      [gradient]=\"gradient\"\n      [xAxis]=\"showXAxis\"\n      [yAxis]=\"showYAxis\"\n      [legend]=\"showLegend\"\n      [showXAxisLabel]=\"showXAxisLabel\"\n      [showYAxisLabel]=\"showYAxisLabel\"\n      [xAxisLabel]=\"xAxisLabel\"\n      [yAxisLabel]=\"yAxisLabel\"\n      (select)=\"onSelect($event)\">\n    </ngx-charts-bar-vertical>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/histogram-chart/histogram-chart.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".chart-container {\n  border-radius: 3px;\n  background-color: #ffffff;\n  box-shadow: 0px 0px 1px #4981FD;\n  padding: 10px 15px 15px 15px;\n  height: calc((100vh - 220px) / 2); }\n  .chart-container.second {\n    margin-top: 10px; }\n  .chart-container .filter-box {\n    height: 40px;\n    width: 100%; }\n  .chart-container .histogram-chart {\n    padding-top: 10px;\n    height: calc(100% - 40px); }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/histogram-chart/histogram-chart.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HistogramChartComponent; });
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


var HistogramChartComponent = (function () {
    function HistogramChartComponent(dataService) {
        this.dataService = dataService;
        this.change = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.showChart = false;
        // options
        this.showXAxis = true;
        this.showYAxis = true;
        this.gradient = false;
        this.showLegend = false;
        this.showXAxisLabel = true;
        this.xAxisLabel = 'Extraction Amount';
        this.showYAxisLabel = true;
        this.yAxisLabel = 'Frecuency';
        this.colorScheme = {
            domain: ['#1a76ff']
        };
    }
    HistogramChartComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.width = this.target.element.nativeElement.getBoundingClientRect().width;
        this.height = this.target.element.nativeElement.getBoundingClientRect().height;
        this.dataService.dataHist$.subscribe(function (data) {
            if (data.length > 0) {
                _this.processData(data[0].series);
            }
        });
    };
    HistogramChartComponent.prototype.processData = function (dataArray) {
        var rng = [99, 165, 198, 231, 264, 297, 330, 363, 396];
        var reverseRng = rng.reverse();
        var resultData = [];
        reverseRng.map(function (elem) { return resultData.push({ name: '' + elem, value: 0 }); });
        dataArray.map(function (data) {
            var i = 0;
            for (var _i = 0, reverseRng_1 = reverseRng; _i < reverseRng_1.length; _i++) {
                var range = reverseRng_1[_i];
                if (range <= data.value) {
                    resultData[i].value += 1;
                    break;
                }
                i += 1;
            }
        });
        this.finalData = resultData.reverse();
        this.showChart = true;
    };
    HistogramChartComponent.prototype.doChange = function (event) {
        this.change.emit(event);
    };
    HistogramChartComponent.prototype.onSelect = function (event) {
        console.log('aQUI');
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], HistogramChartComponent.prototype, "fieldOptions", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], HistogramChartComponent.prototype, "change", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('target', { read: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"] }),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"])
    ], HistogramChartComponent.prototype, "target", void 0);
    HistogramChartComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-histogram-chart',
            template: __webpack_require__("../../../../../src/app/components/histogram-chart/histogram-chart.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/histogram-chart/histogram-chart.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_data_service__["a" /* DataService */]])
    ], HistogramChartComponent);
    return HistogramChartComponent;
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
exports.push([module.i, ".form-container {\n  background-color: #ffffff;\n  border: 1px solid #D4E3E8; }\n\n.card {\n  border-top: 2px solid #4981FD;\n  border-bottom: 2px solid #4981FD;\n  background-color: white;\n  font-size: 14px;\n  padding: 10px;\n  margin: 10px; }\n  .card .full-width {\n    width: 100%; }\n\ndiv.buttons {\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-direction: row;\n      flex-direction: row;\n  -ms-flex-pack: justify;\n      justify-content: space-between; }\n", ""]);

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

module.exports = "<ngx-charts-chart\n  [view]=\"[width, height]\"\n  [showLegend]=\"legend\"\n  [legendOptions]=\"legendOptions\"\n  [activeEntries]=\"activeEntries\"\n  [animations]=\"animations\"\n  (legendLabelClick)=\"onClick($event)\"\n  (legendLabelActivate)=\"onActivate($event)\"\n  (legendLabelDeactivate)=\"onDeactivate($event)\">\n  <svg:g [attr.transform]=\"transform\" class=\"bar-chart chart\">\n      <svg:g ngx-charts-x-axis\n      *ngIf=\"xAxis\"\n      [xScale]=\"[]\"\n      [dims]=\"dims\"\n      [showLabel]=\"showXAxisLabel\"\n      [labelText]=\"xAxisLabel\"\n      [tickFormatting]=\"xAxisTickFormatting\"\n      (dimensionsChanged)=\"updateXAxisHeight($event)\">\n    </svg:g>\n    <svg:g ngx-charts-y-axis\n      *ngIf=\"yAxis\"\n      [yScale]=\"yScale\"\n      [dims]=\"dims\"\n      [yOrient]=\"yOrientLeft\"\n      [showGridLines]=\"showGridLines\"\n      [showLabel]=\"showYAxisLabel\"\n      [labelText]=\"yAxisLabel\"\n      [tickFormatting]=\"yAxisTickFormatting\"\n      (dimensionsChanged)=\"updateYAxisWidth($event)\">\n    </svg:g>\n    <svg:g ngx-charts-y-axis\n      *ngIf=\"yAxis\"\n      [yScale]=\"yScaleLine\"\n      [dims]=\"dims\"\n      [yOrient]=\"yOrientRight\"\n      [showGridLines]=\"showGridLines\"\n      [showLabel]=\"showRightYAxisLabel\"\n      [labelText]=\"yAxisLabelRight\"\n      [tickFormatting]=\"yRightAxisTickFormatting\"\n      (dimensionsChanged)=\"updateYAxisWidth($event)\">\n    </svg:g>\n    <svg:g ngx-combo-charts-series-vertical\n      [xScale]=\"xScale\"\n      [yScale]=\"yScale\"\n      [colors]=\"colors\"\n      [series]=\"results\"\n      [seriesLine]=\"lineChart\"\n      [dims]=\"dims\"\n      [gradient]=\"gradient\"\n      tooltipDisabled=\"true\"\n      [activeEntries]=\"activeEntries\"\n      [animations]=\"animations\"\n      (activate)=\"onActivate($event)\"\n      (deactivate)=\"onDeactivate($event)\"\n      (bandwidth)=\"updateLineWidth($event)\"\n      (select)=\"onClick($event)\">\n    </svg:g>\n  </svg:g>\n  <svg:g [attr.transform]=\"transform\" class=\"line-chart chart\">\n    <svg:g [attr.clip-path]=\"clipPath\">\n      <svg:g *ngFor=\"let series of lineChart; trackBy:trackBy\">\n        <svg:g ngx-charts-line-series\n          [xScale]=\"xScaleLine\"\n          [yScale]=\"yScaleLine\"\n          [colors]=\"colorsLine\"\n          [data]=\"series\"\n          [activeEntries]=\"activeEntries\"\n          [scaleType]=\"scaleType\"\n          [curve]=\"curve\"\n          [rangeFillOpacity]=\"rangeFillOpacity\"\n          [animations]=\"animations\"\n        />\n      </svg:g>\n      <svg:g ngx-charts-tooltip-area\n        *ngIf=\"!tooltipDisabled\"\n        [dims]=\"dims\"\n        [xSet]=\"xSet\"\n        [xScale]=\"xScaleLine\"\n        [yScale]=\"yScaleLine\"\n        [results]=\"combinedSeries\"\n        [colors]=\"colorsLine\"\n        [tooltipDisabled]=\"tooltipDisabled\"\n        (hover)=\"updateHoveredVertical($event)\"\n      />\n      <svg:g *ngFor=\"let series of lineChart\">\n        <svg:g ngx-charts-circle-series\n          [xScale]=\"xScaleLine\"\n          [yScale]=\"yScaleLine\"\n          [colors]=\"colorsLine\"\n          [data]=\"series\"\n          [scaleType]=\"scaleType\"\n          [visibleValue]=\"hoveredVertical\"\n          [activeEntries]=\"activeEntries\"\n          [tooltipDisabled]=\"tooltipDisabled\"\n          (select)=\"onClick($event, series)\"\n          (activate)=\"onActivate($event)\"\n          (deactivate)=\"onDeactivate($event)\"\n        />\n      </svg:g>\n    </svg:g>\n  </svg:g>\n</ngx-charts-chart>"

/***/ }),

/***/ "../../../../../src/app/components/pareto-chart/combo/combo.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".ngx-charts {\n  float: left;\n  overflow: visible; }\n  .ngx-charts .circle,\n  .ngx-charts .bar,\n  .ngx-charts .arc {\n    cursor: pointer; }\n  .ngx-charts .bar.active, .ngx-charts .bar:hover,\n  .ngx-charts .cell.active,\n  .ngx-charts .cell:hover,\n  .ngx-charts .arc.active,\n  .ngx-charts .arc:hover,\n  .ngx-charts .card.active,\n  .ngx-charts .card:hover {\n    opacity: 0.8;\n    transition: opacity 100ms ease-in-out; }\n  .ngx-charts .bar:focus,\n  .ngx-charts .cell:focus,\n  .ngx-charts .arc:focus,\n  .ngx-charts .card:focus {\n    outline: none; }\n  .ngx-charts g:focus {\n    outline: none; }\n  .ngx-charts .line-series.inactive,\n  .ngx-charts .line-series-range.inactive,\n  .ngx-charts .polar-series-path.inactive,\n  .ngx-charts .polar-series-area.inactive,\n  .ngx-charts .area-series.inactive {\n    transition: opacity 100ms ease-in-out;\n    opacity: .2; }\n  .ngx-charts .line-highlight {\n    display: none; }\n    .ngx-charts .line-highlight.active {\n      display: block; }\n  .ngx-charts .area {\n    opacity: 0.6; }\n  .ngx-charts .circle:hover {\n    cursor: pointer; }\n  .ngx-charts .label {\n    font-size: 12px;\n    font-weight: normal; }\n  .ngx-charts .tooltip-anchor {\n    fill: black; }\n  .ngx-charts .gridline-path {\n    stroke: #ddd;\n    stroke-width: 1;\n    fill: none; }\n  .ngx-charts .refline-path {\n    stroke: #a8b2c7;\n    stroke-width: 1;\n    stroke-dasharray: 5;\n    stroke-dashoffset: 5; }\n  .ngx-charts .refline-label {\n    font-size: 9px; }\n  .ngx-charts .reference-area {\n    fill-opacity: 0.05;\n    fill: #000; }\n  .ngx-charts .gridline-path-dotted {\n    stroke: #ddd;\n    stroke-width: 1;\n    fill: none;\n    stroke-dasharray: 1, 20;\n    stroke-dashoffset: 3; }\n  .ngx-charts .grid-panel rect {\n    fill: none; }\n  .ngx-charts .grid-panel.odd rect {\n    fill: rgba(0, 0, 0, 0.05); }\n\n.ngx-charts-outer {\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-direction: column-reverse;\n      flex-direction: column-reverse;\n  -ms-flex-align: center;\n      align-items: center;\n  width: 100%; }\n  .ngx-charts-outer .chart-legend {\n    min-width: 500px !important; }\n    .ngx-charts-outer .chart-legend > div {\n      width: 100% !important; }\n      .ngx-charts-outer .chart-legend > div .legend-labels {\n        background: transparent;\n        display: -ms-flexbox;\n        display: flex;\n        -ms-flex-direction: row;\n            flex-direction: row;\n        -ms-flex-pack: distribute;\n            justify-content: space-around; }\n        .ngx-charts-outer .chart-legend > div .legend-labels .legend-label {\n          color: rgba(35, 35, 35, 0.6); }\n        .ngx-charts-outer .chart-legend > div .legend-labels span:focus {\n          outline: none; }\n        .ngx-charts-outer .chart-legend > div .legend-labels .legend-label-color {\n          border-radius: 0;\n          height: 7px; }\n      .ngx-charts-outer .chart-legend > div header {\n        display: none; }\n  .ngx-charts-outer .axis text {\n    font-size: 12px;\n    fill: rgba(35, 35, 35, 0.6); }\n  .ngx-charts-outer rect.overlay {\n    stroke-width: 1;\n    stroke: rgba(35, 35, 35, 0.6);\n    shape-rendering: crispedges;\n    cursor: crosshair; }\n", ""]);

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
        _this.margin = [10, 10, 10, -80];
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

module.exports = "<div class=\"chart-container\" #target>\n  <app-filter (change)=\"doChange($event)\" [options]=\"fieldOptions\" ></app-filter>\n  <div class=\"date-filters\">\n    <mat-form-field>\n        <input matInput\n          [matDatepicker]=\"picker\"\n          [value]=\"initialDate\"\n          [min]=\"minDate\"\n          [max]=\"maxDate\"\n          (dateChange)=\"changeDate($event, 'initial')\">\n        <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\n        <mat-datepicker #picker></mat-datepicker>\n    </mat-form-field>\n    <mat-form-field>\n        <input matInput \n          [matDatepicker]=\"picker2\"\n          [value]=\"finalDate\"\n          [min]=\"minDate\"\n          [max]=\"maxDate\"\n          (dateChange)=\"changeDate($event, 'final')\" >\n        <mat-datepicker-toggle matSuffix [for]=\"picker2\"></mat-datepicker-toggle>\n        <mat-datepicker #picker2></mat-datepicker>\n    </mat-form-field>\n  </div>\n  <pareto-combo\n    [view]=\"[width, height]\"\n    [scheme]=\"colorScheme\"\n    [colorSchemeLine]=\"colorSchemeLine\"\n    [results]=\"data$\"\n    [animations]=\"animations\"\n    [lineChart]=\"cummData$ | async\"\n    [tooltipDisabled]=\"false\"\n    [gradient]=\"gradient\"\n    [xAxis]=\"showXAxis\"\n    [yAxis]=\"showYAxis\"\n    [legend]=\"showLegend\"\n    [legendTitle]=\"'test title'\"\n    [showGridLines]=\"false\"\n    [showXAxisLabel]=\"showXAxisLabel\"\n    [showYAxisLabel]=\"showYAxisLabel\"\n    [showRightYAxisLabel]=\"showYAxisLabel\"\n    [xAxisLabel]=\"xAxisLabel\"\n    [yAxisLabel]=\"yAxisLabel\"\n    [yAxisLabelRight]=\"'Porcentaje Acumulado'\"\n    (select)=\"onSelect($event)\"\n    >\n  </pareto-combo>\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/pareto-chart/pareto-chart.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".chart-container {\n  border-radius: 3px;\n  background-color: #ffffff;\n  box-shadow: 0px 0px 1px #4981FD;\n  padding: 10px 15px 15px 15px;\n  height: calc(100% - 25px); }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/pareto-chart/pareto-chart.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ParetoChartComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_data_service__ = __webpack_require__("../../../../../src/app/services/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_comments_service__ = __webpack_require__("../../../../../src/app/services/comments.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_range_service__ = __webpack_require__("../../../../../src/app/services/range.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_target_service__ = __webpack_require__("../../../../../src/app/services/target.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_view_service__ = __webpack_require__("../../../../../src/app/services/view.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_BehaviorSubject__ = __webpack_require__("../../../../rxjs/_esm5/BehaviorSubject.js");
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
        this.mainFilter = '106';
        this.change = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.colorScheme = {
            domain: ['#1774F0']
        };
        this.colorSchemeLine = {
            domain: ['#1774F0', 'red']
        };
        this.gradient = true;
        this.showXAxis = true;
        this.showYAxis = true;
        this.showLegend = true;
        this.showXAxisLabel = false;
        this.showYAxisLabel = true;
        this.xAxisLabel = 'Horas';
        this.yAxisLabel = 'Horas';
        this.autoScale = true;
        this.animations = false;
        this.selectedX = '';
        this.selectedY = 0;
    }
    ParetoChartComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.width = this.target.element.nativeElement.getBoundingClientRect().width;
        this.height = this.target.element.nativeElement.getBoundingClientRect().height;
        this.height -= 200;
        this.subscription = this.dataService.dataPareto$.subscribe(function (elem) {
            _this.data$ = elem;
            _this.originalData = elem;
            _this.maxDate = _this.dataService.paretoEndDay;
            _this.minDate = _this.dataService.paretoInitDay;
            _this.initialDate = _this.dataService.paretoInitDay;
            _this.finalDate = _this.dataService.paretoEndDay;
            _this.getAcumulative();
        });
        this.targetData$ = this.targetService.target$;
        this.viewService.activeView$.do(function (view) { return _this.selectedView = view.length ? true : false; }).subscribe();
    };
    ParetoChartComponent.prototype.getAcumulative = function () {
        this.cummData$ = new __WEBPACK_IMPORTED_MODULE_6_rxjs_BehaviorSubject__["BehaviorSubject"]([]);
        var totalSum = 0;
        var chartsValue2 = this.data$.map(function (elem) {
            totalSum = Number((totalSum + elem['value']).toFixed(2));
            return {
                name: elem['name'],
                value: totalSum
            };
        });
        this.cummData$.next([{ name: 'Acumulado', series: chartsValue2 }]);
    };
    ParetoChartComponent.prototype.ngOnDestroy = function () {
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
    };
    ParetoChartComponent.prototype.onSelect = function (event) {
        this.activateCoordinate(this.formatDate(event.name), event.value);
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
        this.mainFilter = event.value;
        this.change.emit(event);
    };
    ParetoChartComponent.prototype.changeDate = function (event, target) {
        (target === 'final') ? this.finalDate = event.value : this.initialDate = event.value;
        this.dataService.chageParetoData(this.mainFilter, this.initialDate, this.finalDate);
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
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_data_service__["a" /* DataService */],
            __WEBPACK_IMPORTED_MODULE_2__services_comments_service__["a" /* CommentsService */],
            __WEBPACK_IMPORTED_MODULE_3__services_range_service__["a" /* RangeService */],
            __WEBPACK_IMPORTED_MODULE_4__services_target_service__["a" /* TargetService */],
            __WEBPACK_IMPORTED_MODULE_5__services_view_service__["a" /* ViewService */]])
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
        this.fieldX = 'Consumo';
        this.fieldY = 'Movimiento Total';
        this.fieldZ = 'Distancia Media';
        this.labels = {
            'litros': 'Litros',
            'consumo': 'Consumo',
            'energia': 'Energia',
            'co2_equiv': 'CO2 Equiv',
            'movimiento_total': 'Movimiento Total',
            'l_kt': 'l/kt',
            'tiempo_operativo': 'Tiempo',
            'l_h': 'l/h',
            'dist_media': 'Distancia Media',
            'l_kt_km': 'l/(kt*km)',
            't_h': 't/h',
            'kt_km': 'kt*km'
        };
        this.fieldOptions = [
            {
                name: 'KPI1',
                options: [
                    { value: 'litros', text: 'Litros' },
                    { value: 'consumo', text: 'Consumo' },
                    { value: 'energia', text: 'Energia' },
                    { value: 'co2_equiv', text: 'CO2 Equiv' },
                    { value: 'movimiento_total', text: 'Movimiento Total' },
                    { value: 'l_kt', text: 'l/kt' },
                    { value: 'tiempo_operativo', text: 'Tiempo' },
                    { value: 'l_h', text: 'l/h' },
                    { value: 'dist_media', text: 'Distancia Media' },
                    { value: 'l_kt_km', text: 'l/(kt*km)' },
                    { value: 't_h', text: 't/h' },
                    { value: 'kt_km', text: 'kt*km' },
                ],
                selected: 'consumo'
            },
            {
                name: 'KPI2',
                options: [
                    { value: 'litros', text: 'Litros' },
                    { value: 'consumo', text: 'Consumo' },
                    { value: 'energia', text: 'Energia' },
                    { value: 'co2_equiv', text: 'CO2 Equiv' },
                    { value: 'movimiento_total', text: 'Movimiento Total' },
                    { value: 'l_kt', text: 'l/kt' },
                    { value: 'tiempo_operativo', text: 'Tiempo' },
                    { value: 'l_h', text: 'l/h' },
                    { value: 'dist_media', text: 'Distancia Media' },
                    { value: 'l_kt_km', text: 'l/(kt*km)' },
                    { value: 't_h', text: 't/h' },
                    { value: 'kt_km', text: 'kt*km' },
                ],
                selected: 'movimiento_total'
            },
            {
                name: 'KPI3',
                options: [
                    { value: 'litros', text: 'Litros' },
                    { value: 'consumo', text: 'Consumo' },
                    { value: 'energia', text: 'Energia' },
                    { value: 'co2_equiv', text: 'CO2 Equiv' },
                    { value: 'movimiento_total', text: 'Movimiento Total' },
                    { value: 'l_kt', text: 'l/kt' },
                    { value: 'tiempo_operativo', text: 'Tiempo' },
                    { value: 'l_h', text: 'l/h' },
                    { value: 'dist_media', text: 'Distancia Media' },
                    { value: 'l_kt_km', text: 'l/(kt*km)' },
                    { value: 't_h', text: 't/h' },
                    { value: 'kt_km', text: 'kt*km' },
                ],
                selected: 'dist_media'
            },
        ];
        this.selectedKey = 'x';
        this.selectedField = 'litros';
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
                                color: 'rgba(0, 0, 0, 0.75)',
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
                console.log(event);
                this.selectedKey = 'x';
                this.fieldX = this.labels[event.value];
                this.selectedField = event.value;
                this.data.changeScatterFuelData('x', event.value);
                break;
            case 'KPI2':
                this.selectedKey = 'y';
                this.fieldY = this.labels[event.value];
                this.selectedField = event.value;
                this.data.changeScatterFuelData('y', event.value);
                break;
            case 'KPI3':
                this.selectedKey = 'z';
                this.fieldZ = this.labels[event.value];
                this.selectedField = event.value;
                this.data.changeScatterFuelData('z', event.value);
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

module.exports = "<div class=\"navbar-container\">\n    <nav class=\"navbar navbar-expand-lg navbar-light navbar-be\">\n      <a routerLink=\"/\" >\n        <img src=\"./assets/logoAlt.gif\" class=\"img-login\" alt=\"\" />\n      </a>\n      <div class=\"title-wrapper\">\n        <h3>{{headerTitle}}</h3>\n      </div>\n    </nav>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/top-bar/top-bar.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".navbar-be {\n  background-color: white; }\n\n.navbar {\n  height: 60px;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-align: center;\n      align-items: center; }\n  .navbar a {\n    z-index: 1;\n    margin-left: 20px; }\n    .navbar a img {\n      width: 200px; }\n  .navbar h3 {\n    -ms-flex: 1;\n        flex: 1;\n    text-align: center; }\n\ndiv.title-wrapper {\n  position: absolute;\n  float: left;\n  width: 100vw;\n  text-align: center;\n  margin-bottom: 5px; }\n  div.title-wrapper h3 {\n    font-family: 'Open Sans', sans-serif;\n    text-transform: uppercase;\n    margin: 10px 0 5px;\n    color: #012a77; }\n\n.navbar-container {\n  box-shadow: 0 0 1px #012a77; }\n\n@media only screen and (max-width: 768px) {\n  div.title-wrapper {\n    position: static; } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/top-bar/top-bar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TopBarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
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
    function TopBarComponent(_router, _location) {
        this.headerTitle = '';
        this.router = _router;
        this.location = _location;
    }
    TopBarComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.router.events.subscribe(function () {
            return _this.headerTitle = _this.generateTitle(_this.location.path());
        });
    };
    TopBarComponent.prototype.generateTitle = function (path) {
        switch (path) {
            case '/cdi':
                return 'Control Diario Integrado';
            case '/pareto':
                return 'Eventos Planta';
            case '/fuel':
                return 'Fuel Managment';
            case '/cigo':
                return 'CIGO';
            default:
                return 'CIGO';
        }
    };
    TopBarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-top-bar',
            template: __webpack_require__("../../../../../src/app/components/top-bar/top-bar.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/top-bar/top-bar.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_2__angular_common__["Location"]])
    ], TopBarComponent);
    return TopBarComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/waterfall-chart/waterfall-chart.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"chart-container second\" #target>\n  <div #test class=\"waterfall-container\"></div>\n  <div class=\"numbers-container\">\n    <div class=\"numbers-elem\">\n      <!-- <app-card [title]=\"'Budget'\" [content]=\"waterfallInit.toFixed(2)\"></app-card> -->\n      <div class=\"card budget\">\n        <div class=\"color-box\" [ngStyle]=\"{'background-color': color}\"></div>\n        <p class=\"card-content\">{{waterfallInit.toFixed(2)}}</p>\n        <p class=\"card-title\">Budget</p>\n      </div>\n        \n        <!-- <p>Budget:  <span>{{waterfallInit.toFixed(2)}}</span></p> -->\n    </div>\n    <div class=\"numbers-elem\">\n        <div class=\"card value\">\n            <div class=\"color-box\" [ngStyle]=\"{'background-color': color}\"></div>\n            <p class=\"card-content\">{{waterfallTotal.toFixed(2)}}</p>\n            <p class=\"card-title\">Value</p>\n          </div>\n      <!-- <app-card [title]=\"'Val;ue'\" [content]=\"waterfallTotal.toFixed(2)\"></app-card> -->\n      \n      <!-- <p>Total Value: <span>{{waterfallTotal.toFixed(2)}}</span></p> -->\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/waterfall-chart/waterfall-chart.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".chart-container {\n  border-radius: 3px;\n  background-color: #ffffff;\n  box-shadow: 0px 0px 1px #4981FD;\n  padding: 10px 15px 15px 15px;\n  height: calc((100vh - 220px) / 2);\n  display: -ms-flexbox;\n  display: flex; }\n  .chart-container .waterfall-container {\n    -ms-flex: 5;\n        flex: 5; }\n  .chart-container .numbers-container {\n    -ms-flex: 2;\n        flex: 2;\n    display: -ms-flexbox;\n    display: flex;\n    -ms-flex-direction: column;\n        flex-direction: column; }\n    .chart-container .numbers-container .numbers-elem {\n      -ms-flex: 1;\n          flex: 1; }\n  .chart-container.second {\n    margin-top: 10px; }\n  .chart-container .filter-box {\n    height: 40px;\n    width: 100%; }\n  .chart-container .waterfall-chart {\n    padding-top: 10px;\n    height: calc(100% - 40px); }\n\n.card {\n  color: #353535;\n  font-size: small;\n  height: calc(100% - 15px);\n  width: 100%;\n  border-radius: 3px;\n  background-color: #ffffff;\n  border: 1px solid rgba(0, 0, 0, 0.16); }\n  .card .card-title {\n    margin: 0px;\n    padding: 3px 13px 3px 13px;\n    font-size: 11px;\n    margin-top: 40%; }\n  .card .card-content {\n    transition: all 0.5s;\n    padding: 0 13px 0px 13px;\n    overflow: hidden;\n    margin-top: 40%;\n    font-size: 1.2em; }\n  .card.budget {\n    margin-bottom: 5px;\n    border-bottom: 10px rgba(0, 0, 0, 0.6) solid; }\n  .card.value {\n    margin-top: 5px;\n    border-bottom: 10px #3780bf solid; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/waterfall-chart/waterfall-chart.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WaterfallChartComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_data_service__ = __webpack_require__("../../../../../src/app/services/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_target_service__ = __webpack_require__("../../../../../src/app/services/target.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__ = __webpack_require__("../../../../rxjs/_esm5/Observable.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var WaterfallChartComponent = (function () {
    function WaterfallChartComponent(dataService, targetService) {
        this.dataService = dataService;
        this.targetService = targetService;
        this.waterfallInit = 0;
        this.waterfallTotal = 0;
        this.change = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    WaterfallChartComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.width = this.target.element.nativeElement.getBoundingClientRect().width;
        this.height = this.target.element.nativeElement.getBoundingClientRect().height;
        var data$ = this.dataService.dataControl$;
        var targetData$ = this.targetService.target$;
        __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["a" /* Observable */].combineLatest(data$, targetData$)
            .map(function (data) {
            return data[0].concat(data[1]);
        }).subscribe(function (data) {
            if (data.length > 1) {
                _this.processData(data[0], data[1]);
            }
        });
    };
    WaterfallChartComponent.prototype.processData = function (dataArray, targetArray) {
        var xData = [];
        var yDataProfit = [0];
        var yDataCost = [0];
        var yDataBase = [0];
        var totalTarget = 0;
        var totalValue = 0;
        dataArray.series.map(function (data, index) {
            if (targetArray.series[index]) {
                totalTarget += targetArray.series[index].value;
            }
            totalValue += data.value;
        });
        var yDataBudget = [totalTarget];
        var yDataRevenue = [0];
        var previousY = totalTarget;
        var dateDummy = new Date(dataArray.series[0].name);
        dateDummy.setDate(dateDummy.getDate() - 1);
        xData.push(dateDummy);
        var finalIndex = 0;
        dataArray.series.map(function (data, index) {
            xData.push(new Date(data.name));
            var value = (targetArray.series[index]) ?
                data.value - (targetArray.series[index].value) : data.value;
            yDataBase.push(previousY);
            yDataRevenue.push(0);
            yDataBudget.push(0);
            if (value < 0) {
                yDataCost.push(value);
                yDataProfit.push(0);
            }
            else {
                yDataCost.push(0);
                yDataProfit.push(value);
            }
            previousY = previousY + value;
            finalIndex = index;
        });
        dateDummy = new Date(dataArray.series[finalIndex].name);
        dateDummy.setDate(dateDummy.getDate() + 1);
        xData.push(dateDummy);
        yDataProfit.push(0);
        yDataCost.push(0);
        yDataBase.push(0);
        yDataBudget.push(0);
        yDataRevenue.push(totalValue);
        this.waterfallTotal = totalValue;
        this.waterfallInit = totalTarget;
        this.drawWaterfall(yDataProfit, yDataCost, yDataBase, xData, yDataRevenue, yDataBudget);
    };
    WaterfallChartComponent.prototype.drawWaterfall = function (yDataProfit, yDataCost, yDataBase, xData, yDataRevenue, yDataBudget) {
        // Base
        var trace1 = {
            x: xData,
            y: yDataBase,
            name: 'Acumulative',
            marker: {
                color: 'rgba(1,1,1,0.0)'
            },
            type: 'bar'
        };
        // Profit
        var trace2 = {
            x: xData,
            y: yDataProfit,
            type: 'bar',
            name: 'Positive',
            marker: {
                color: 'rgba(50,171, 96, 0.7)',
                line: {
                    color: 'rgba(50,171,96,1.0)',
                    width: 2
                }
            }
        };
        // Cost
        var trace3 = {
            x: xData,
            y: yDataCost,
            name: 'Negative',
            type: 'bar',
            marker: {
                color: 'rgba(219, 64, 82, 0.7)',
                line: {
                    color: 'rgba(219, 64, 82, 1.0)',
                    width: 2
                }
            }
        };
        var trace4 = {
            x: xData,
            y: yDataRevenue,
            type: 'bar',
            marker: {
                color: 'rgba(55,128,191,0.7)',
                line: {
                    color: 'rgba(55,128,191,1.0)',
                    width: 2
                }
            }
        };
        var budget = {
            x: xData,
            y: yDataBudget,
            type: 'bar',
            marker: {
                color: 'rgba(0, 0, 0, 0.60)',
                line: {
                    color: 'rgba(0, 0, 0, 0.60)',
                    width: 2
                }
            }
        };
        var data = [trace1, trace2, trace3, trace4, budget];
        var layout = {
            barmode: 'stack',
            width: this.width,
            height: this.height - 40,
            showlegend: false,
            annotations: [],
            margin: {
                l: 50,
                r: 50,
                b: 20,
                t: 20,
                pad: 4
            },
        };
        Plotly.newPlot(this.test.element.nativeElement, data, layout, { displayModeBar: false });
    };
    WaterfallChartComponent.prototype.doChange = function (event) {
        this.change.emit(event);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('test', { read: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"] }),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"])
    ], WaterfallChartComponent.prototype, "test", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('target', { read: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"] }),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"])
    ], WaterfallChartComponent.prototype, "target", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], WaterfallChartComponent.prototype, "fieldOptions", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], WaterfallChartComponent.prototype, "change", void 0);
    WaterfallChartComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-waterfall-chart',
            template: __webpack_require__("../../../../../src/app/components/waterfall-chart/waterfall-chart.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/waterfall-chart/waterfall-chart.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_data_service__["a" /* DataService */],
            __WEBPACK_IMPORTED_MODULE_2__services_target_service__["a" /* TargetService */]])
    ], WaterfallChartComponent);
    return WaterfallChartComponent;
}());



/***/ }),

/***/ "../../../../../src/app/pages/cdi/cdi.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"app-container\">\n  <div class=\"sidebar-container left\">\n      <app-card-listing [commentList]=\"false\"></app-card-listing>\n  </div>\n  <div class=\"charts-container\">\n    <div class=\"one-charts-container\">\n      <app-control-chart \n        [pageDescriptor]=\"'cdi'\"\n        (change)=\"test($event)\"\n        [fieldOptions]=\"fieldOptions\"\n        [budgetOptions]=\"budgetOptions\">\n      </app-control-chart>\n    </div>\n    <!-- <app-scatter-chart></app-scatter-chart> -->\n    <div class=\"duo-charts-container\">\n      <div class=\"duo-chart first\">\n        <app-waterfall-chart (change)=\"test($event)\" [fieldOptions]=\"fieldOptions\" ></app-waterfall-chart>\n      </div>\n      <div class=\"duo-chart second\">\n        <app-histogram-chart (change)=\"test($event)\" [fieldOptions]=\"fieldOptions\"></app-histogram-chart>\n      </div>\n    </div>\n  </div>\n  <div class=\"sidebar-container right\">\n    <app-comment-section></app-comment-section>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/pages/cdi/cdi.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".app-container {\n  height: calc(100vh - 60px);\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex: 1;\n      flex: 1; }\n  .app-container .sidebar-container {\n    -ms-flex: 2;\n        flex: 2;\n    border-radius: 3px;\n    background-color: #f9f9f9;\n    box-shadow: 0px 0px 1px #4981FD;\n    margin: 10px; }\n    .app-container .sidebar-container.right {\n      overflow: auto; }\n  .app-container .charts-container {\n    padding: 10px 0;\n    -ms-flex: 10;\n        flex: 10;\n    height: 100%;\n    display: -ms-flexbox;\n    display: flex;\n    -ms-flex-direction: column;\n        flex-direction: column; }\n    .app-container .charts-container .one-charts-container {\n      -ms-flex: 3;\n          flex: 3; }\n    .app-container .charts-container .duo-charts-container {\n      display: -ms-flexbox;\n      display: flex;\n      -ms-flex: 1;\n          flex: 1; }\n      .app-container .charts-container .duo-charts-container .duo-chart.second {\n        -ms-flex: 1;\n            flex: 1;\n        margin-left: 5px; }\n      .app-container .charts-container .duo-charts-container .duo-chart.first {\n        -ms-flex: 2;\n            flex: 2;\n        margin-right: 5px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/cdi/cdi.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CdiPageComponent; });
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


var CdiPageComponent = (function () {
    function CdiPageComponent(view) {
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
    CdiPageComponent.prototype.test = function (event) {
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
    CdiPageComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-cdi',
            template: __webpack_require__("../../../../../src/app/pages/cdi/cdi.component.html"),
            styles: [__webpack_require__("../../../../../src/app/pages/cdi/cdi.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_view_service__["a" /* ViewService */]])
    ], CdiPageComponent);
    return CdiPageComponent;
}());



/***/ }),

/***/ "../../../../../src/app/pages/cigo/cigo.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-progress-bar mode=\"determinate\" [value]=\"progressValue\"></mat-progress-bar>\n<div class=\"cigo-container\">\n  <button mat-raised-button color=\"secondary\" (click)=\"toggleSettingsForm()\">\n    <i class=\"material-icons\">settings</i> Configurar\n  </button>\n  <div class=\"settingForm\" *ngIf=\"showSettingForm\">\n    <mat-form-field class=\"full-width\">\n      <input matInput type=\"number\" placeholder=\"Velocidad de transición\" [(ngModel)]=\"form.timer\" min=\"10\">\n    </mat-form-field>\n    <button mat-raised-button color=\"primary\" (click)=\"saveTimer()\">Actualizar</button>\n    <mat-form-field class=\"full-width\">\n      <input matInput type=\"number\" placeholder=\"No. de horas a consultar\" [(ngModel)]=\"form.rowNumber\" min=\"10\">\n    </mat-form-field>\n    <button mat-raised-button color=\"primary\" (click)=\"saveRowNumber()\">Actualizar</button>\n  </div>\n  <div class=\"header-container\">\n    <div class=\"subtitle-container\">\n      <div class=\"name-tab\">\n        <h3>{{title}}</h3>\n        <div class=\"title-date\" *ngIf=\"title_from && title_to\">\n          <div><small><b>Desde</b> {{title_from}}</small></div>\n          <div><small><b>Hasta</b> {{title_to}}</small></div>\n        </div>\n      </div>\n\n      <div *ngIf=\"selectedFilter==='PRIM' || selectedFilter==='PRIM DOS'\" class=\"total-tab\">\n        <div class=\"tons\">\n          <h3>Total Tons</h3>\n          <h3>{{totalTons}}</h3>\n        </div>\n        <div class=\"viajes\">\n          <h3>Total Viajes</h3>\n          <h3>{{totalViajes}}</h3>\n        </div>\n      </div>\n      <div *ngIf=\"selectedFilter==='CF' || selectedFilter==='LB'\" class=\"total-tab\">\n        <div class=\"tons\">\n          <h3>Total Alimentaci&oacute;n</h3>\n          <h3>{{totalAlimentacion.toFixed(2)}}</h3>\n        </div>\n        <div class=\"viajes\">\n          <h3>Total Tratamiento</h3>\n          <h3>{{totalTratamiento.toFixed(2)}}</h3>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"body-container\" *ngIf=\"showTable\">\n    <div class=\"table-container first\" >\n      <div class=\"table-sub-container\">\n        <div class=\"table-field\">\n            <table style=\"width:100%\">\n                <tr>\n                  <th *ngFor=\"let col of columnSet.columns\">\n                    {{col.name}}\n                  </th>\n                </tr>\n                <tr *ngFor=\"let row of firstData; let i = index\">\n                  <td *ngFor=\"let col of columnSet.columns\">\n                    <strong *ngIf=\"i === firstData.length - 1\">{{row[col.value]}}</strong>\n                    <span *ngIf=\"i < firstData.length - 1\">{{row[col.value]}}</span>\n                  </td>\n                </tr>\n            </table>\n        </div>\n        <div class=\"chart-container\">\n          <div class=\"chart\">\n            <ngx-charts-line-chart\n              [view]=\"view\"\n              [scheme]=\"colorScheme\"\n              [results]=\"firstTableData\"\n              [gradient]=\"false\"\n              [xAxis]=\"false\"\n              [yAxis]=\"false\"\n              [legend]=\"false\"\n              [showXAxisLabel]=\"false\"\n              [showYAxisLabel]=\"false\"\n              [autoScale]=\"true\"\n              (select)=\"onSelect($event)\">\n            </ngx-charts-line-chart>\n          </div>\n          </div>\n      </div>\n    </div>\n    <div class=\"table-container second\">\n      <div class=\"table-sub-container\">\n        <div class=\"table-field\">\n            <table style=\"width:100%\">\n                <tr>\n                  <th *ngFor=\"let col of columnSet.columns2\">\n                    {{col.name}}\n                  </th>\n                </tr>\n                <tr *ngFor=\"let row of firstData; let i = index\">\n                  <td *ngFor=\"let col of columnSet.columns2\">\n                    <strong *ngIf=\"i === firstData.length - 1\">{{row[col.value]}}</strong>\n                    <span *ngIf=\"i < firstData.length - 1\">{{row[col.value]}}</span>\n                  </td>\n                </tr>\n            </table>\n        </div>\n        <div class=\"chart-container\">\n          <div class=\"chart\">\n            <ngx-charts-line-chart\n              [view]=\"view\"\n              [scheme]=\"colorScheme\"\n              [results]=\"secondTableData\"\n              [gradient]=\"false\"\n              [xAxis]=\"false\"\n              [yAxis]=\"false\"\n              [legend]=\"false\"\n              [showXAxisLabel]=\"false\"\n              [showYAxisLabel]=\"false\"\n              [autoScale]=\"true\"\n              (select)=\"onSelect($event)\">\n            </ngx-charts-line-chart>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"table-container last\">\n      <div class=\"table-sub-container\">\n        <table style=\"width:100%\">\n            <tr>\n              <th *ngFor=\"let col of columnSet.columns3\">\n                {{col.name}}\n              </th>\n            </tr>\n            <tr *ngFor=\"let row of firstData; let i = index\">\n              <td *ngFor=\"let col of columnSet.columns3\">\n                <strong *ngIf=\"i === firstData.length - 1\">{{row[col.value]}}</strong>\n                <span *ngIf=\"i < firstData.length - 1\">{{row[col.value]}}</span>\n              </td>\n            </tr>\n        </table>\n      </div>\n    </div>\n  </div>\n  <div class=\"table-message\" *ngIf=\"firstData.length <= 1\">\n    <h3>No hay datos disponibles</h3>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/pages/cigo/cigo.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".cigo-container {\n  margin: 10px;\n  border-radius: 3px;\n  background-color: #ffffff;\n  box-shadow: 0px 0px 1px #4981FD;\n  padding: 30px; }\n  .cigo-container .body-container {\n    display: -ms-flexbox;\n    display: flex;\n    height: 100%; }\n    .cigo-container .body-container .table-container .table-sub-container {\n      display: -ms-flexbox;\n      display: flex; }\n      .cigo-container .body-container .table-container .table-sub-container .table-field {\n        -ms-flex: 1;\n            flex: 1; }\n      .cigo-container .body-container .table-container .table-sub-container .chart-container {\n        -ms-flex: 1;\n            flex: 1;\n        width: 100%;\n        position: relative; }\n        .cigo-container .body-container .table-container .table-sub-container .chart-container .chart {\n          position: absolute;\n          transform: rotate(90deg);\n          transform-origin: top left;\n          top: 65px;\n          left: 100%; }\n    .cigo-container .body-container .table-container.first, .cigo-container .body-container .table-container.second, .cigo-container .body-container .table-container.last {\n      -ms-flex: 1;\n          flex: 1;\n      background-color: #f9f9f9;\n      padding: 10px;\n      border-radius: 0 0 3px 3px; }\n      .cigo-container .body-container .table-container.first table, .cigo-container .body-container .table-container.second table, .cigo-container .body-container .table-container.last table {\n        border-collapse: collapse; }\n      .cigo-container .body-container .table-container.first th, .cigo-container .body-container .table-container.second th, .cigo-container .body-container .table-container.last th {\n        border: 1px solid #e2e2e2;\n        border-top: 0; }\n      .cigo-container .body-container .table-container.first tr:last-child, .cigo-container .body-container .table-container.second tr:last-child, .cigo-container .body-container .table-container.last tr:last-child {\n        border: 1px solid #e2e2e2; }\n      .cigo-container .body-container .table-container.first td:first-child, .cigo-container .body-container .table-container.second td:first-child, .cigo-container .body-container .table-container.last td:first-child {\n        border-left: 1px solid #e2e2e2; }\n      .cigo-container .body-container .table-container.first td:last-child, .cigo-container .body-container .table-container.second td:last-child, .cigo-container .body-container .table-container.last td:last-child {\n        border-right: 1px solid #e2e2e2; }\n    .cigo-container .body-container .table-container.first, .cigo-container .body-container .table-container.second {\n      margin-right: 10px; }\n    .cigo-container .body-container .table-container .datatable-header {\n      font-size: 10px; }\n  .cigo-container .table-message {\n    padding: 10px;\n    background-color: #f9f9f9; }\n\ntr {\n  text-align: center;\n  height: 30px;\n  font-size: 13px; }\n  tr:nth-of-type(odd) {\n    background: #ffffff; }\n\ntd, th {\n  padding: 5px; }\n\nth {\n  height: 50px;\n  font-size: 12px;\n  white-space: pre-line; }\n\n.subtitle-container {\n  display: -ms-flexbox;\n  display: flex;\n  margin-bottom: 10px;\n  background-color: #e2e2e2;\n  border-radius: 3px 3px 0 0; }\n  .subtitle-container .name-tab, .subtitle-container .total-tab {\n    display: -ms-flexbox;\n    display: flex;\n    -ms-flex: 1;\n        flex: 1;\n    padding: 15px 30px;\n    -ms-flex-align: center;\n        align-items: center; }\n    .subtitle-container .name-tab h3, .subtitle-container .name-tab h2, .subtitle-container .total-tab h3, .subtitle-container .total-tab h2 {\n      margin: 0; }\n      .subtitle-container .name-tab h3:last-child, .subtitle-container .name-tab h2:last-child, .subtitle-container .total-tab h3:last-child, .subtitle-container .total-tab h2:last-child {\n        font-weight: 400; }\n  .subtitle-container .name-tab {\n    -ms-flex-direction: column;\n        flex-direction: column;\n    -ms-flex-pack: center;\n        justify-content: center; }\n    .subtitle-container .name-tab .title-date {\n      display: -ms-flexbox;\n      display: flex; }\n      .subtitle-container .name-tab .title-date div {\n        -ms-flex-direction: row;\n            flex-direction: row;\n        padding: 0 5px; }\n  .subtitle-container .total-tab {\n    -ms-flex-pack: distribute;\n        justify-content: space-around; }\n\n@media only screen and (max-width: 768px) {\n  .cigo-container {\n    margin: 10px 0;\n    border-radius: 0;\n    padding: 10px; }\n    .cigo-container .mat-raised-button {\n      top: -5px; }\n    .cigo-container .body-container {\n      -ms-flex-direction: column;\n          flex-direction: column; }\n    .cigo-container .table-message {\n      text-align: center; }\n  .chart {\n    left: 70%; }\n  .header-container {\n    display: -ms-flexbox;\n    display: flex;\n    -ms-flex-direction: column;\n        flex-direction: column; }\n  .subtitle-container {\n    display: -ms-grid;\n    display: grid; }\n    .subtitle-container .name-tab {\n      -ms-flex-direction: column;\n          flex-direction: column;\n      -ms-flex-pack: distribute;\n          justify-content: space-around; }\n      .subtitle-container .name-tab .title-date div {\n        -ms-flex-direction: column;\n            flex-direction: column; }\n    .subtitle-container .name-tab, .subtitle-container .total-tab {\n      padding: 5px 30px; } }\n\n.mat-raised-button {\n  top: -15px; }\n\n.settingForm {\n  position: absolute;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-direction: column;\n      flex-direction: column;\n  background-color: #ffffff;\n  padding: 15px;\n  box-shadow: 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12);\n  margin-right: 10px; }\n  .settingForm .full-width {\n    width: 100%; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/cigo/cigo.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CigoPageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_cigo_data_service__ = __webpack_require__("../../../../../src/app/services/cigo-data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_observable_TimerObservable__ = __webpack_require__("../../../../rxjs/_esm5/observable/TimerObservable.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CigoPageComponent = (function () {
    function CigoPageComponent(dataService) {
        this.dataService = dataService;
        this.showSettingForm = false;
        this.title_from = '';
        this.title_to = '';
        this.view = [50, 160];
        this.form = {
            timer: 20,
            rowNumber: 12
        };
        this.colorScheme = {
            domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
        };
        this.tableColumns = {
            chancador: {
                columns: [
                    { name: 'Hora', value: 'hora' },
                    { name: 'Viajes \n [N]', value: 'viajes' },
                    { name: 'Toneladas \n [Ton]', value: 'tons' },
                ],
                columns2: [
                    { name: 'Prom. Tons \n [Ton]', value: 'tons_promedio' },
                    { name: 'T. Cola \n [min]', value: 'tiempo' },
                ],
                columns3: [
                    { name: 'Distancia \n [Km]', value: 'distancia' },
                    { name: 'Velocidad \n [Km/Hrs]', value: 'velocidad' },
                    { name: 'SPI', value: 'spi' },
                    { name: 'LEY', value: 'ley' },
                ]
            },
            sag: {
                columns: [
                    { name: 'Hora', value: 'hora' },
                    { name: 'Alimentación \n [tms] \n', value: 'alimentacion' },
                    { name: 'Stock Pile \n [tms] \n', value: 'stockpile' },
                ],
                columns2: [
                    { name: 'Tratamiento \n [tms] \n', value: 'tratamiento' },
                    { name: 'Operación \n [hrs] \n', value: 'operacion' },
                ],
                columns3: [
                    { name: 'Alimentación \n LB + CF \n [tms]', value: 'alimentacion_2' },
                    { name: 'Tratamiento \n LB + CF \n [tms]', value: 'tratamiento_2' }
                ]
            }
        };
        this.filters = ['PRIM', 'PRIM DOS', 'CF', 'LB'];
        this.currentFilter = 0;
        this.selectedFilter = '';
        this.firstTableData = [];
        this.secondTableData = [];
        this.firstData = [];
        this.showTable = false;
        this.promViaje = 0;
        this.promTons = 0;
        this.promPromTons = 0;
        this.promTiempo = 0;
        // SAG variables
        this.totalAlimentacion = 0;
        this.totalTratamiento = 0;
        this.promAlimentacion = 0;
        this.promTratamiento = 0;
    }
    CigoPageComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.progressValue = 0;
        this.viewPrim = true;
        var timer = __WEBPACK_IMPORTED_MODULE_2_rxjs_observable_TimerObservable__["a" /* TimerObservable */].create(0, 100);
        var number = 123456789;
        this.updateViewTimer(20);
        this.rowNumber = 12;
        timer.subscribe(function (t) {
            if (t % _this.viewTimer === 0) {
                if (t % 600 === 0) {
                    _this.dataService.getData(_this.rowNumber);
                }
                _this.progressValue = 0;
                _this.selectedFilter = _this.filters[_this.currentFilter % 4];
                _this.changeData(_this.selectedFilter);
                _this.currentFilter++;
            }
            else {
                _this.progressValue = t / _this.barDivisor % 100;
            }
        });
    };
    CigoPageComponent.prototype.changeData = function (chart) {
        var _this = this;
        this.viewPrim = !this.viewPrim;
        var actualHour = (new Date()).getHours();
        var initialHour = (actualHour > 12) ? actualHour - 12 : 0;
        this.title = this.setTableTitle(chart);
        this.totalTons = (new Intl.NumberFormat('de-DE').format(0));
        this.totalViajes = 0;
        this.totalAlimentacion = 0;
        this.totalTratamiento = 0;
        this.title_from = '';
        this.title_to = '';
        this.view = [undefined, undefined];
        this.dataService.dataCigo$.subscribe(function (data) {
            _this.showTable = false;
            _this.firstData = [];
            _this.firstTableData = [];
            _this.secondTableData = [];
            if (chart in data) {
                var firstTableObject = {
                    name: '',
                    series: []
                };
                var secondTableObject = {
                    name: '',
                    series: []
                };
                // Chancador variables
                _this.promViaje = 0;
                _this.promTons = 0;
                _this.promPromTons = 0;
                _this.promTiempo = 0;
                // SAG variables
                _this.totalAlimentacion = 0;
                _this.totalTratamiento = 0;
                _this.promAlimentacion = 0;
                _this.promTratamiento = 0;
                data[chart].series.map(function (elem) {
                    var baseHour = new Date(elem.fecha.getTime() + (3 * 3600000)).getHours();
                    var hour = baseHour - initialHour;
                    (chart.includes('PRIM')) ? _this.setChancadorData(elem, baseHour) : _this.setSagData(elem, baseHour);
                });
                _this.view[0] = 30 * _this.firstData.length;
                _this.view[1] = 150 * _this.firstData.length / (_this.rowNumber + 1);
                _this.title_from = _this.setRequestTitle(_this.rowNumber + 3);
                _this.title_to = _this.setRequestTitle(3);
                var firstPromTableObject = {
                    name: 'Prom',
                    series: []
                };
                var secondPromTableObject = {
                    name: 'Prom',
                    series: []
                };
                if (chart.includes('PRIM')) {
                    _this.columnSet = _this.tableColumns.chancador;
                    for (var _i = 0, _a = _this.firstData; _i < _a.length; _i++) {
                        var elem = _a[_i];
                        if (elem.hora !== 'Prom') {
                            firstTableObject.series.push({
                                name: '' + elem.hora,
                                value: elem.tons
                            });
                            firstPromTableObject.series.push({
                                name: '' + elem.hora,
                                value: _this.promPromTons
                            });
                            secondTableObject.series.push({
                                name: '' + elem.hora,
                                value: elem.tiempo
                            });
                            secondPromTableObject.series.push({
                                name: '' + elem.hora,
                                value: _this.promTiempo
                            });
                        }
                    }
                    _this.totalTons = (new Intl.NumberFormat('de-DE').format(_this.promTons));
                    _this.totalViajes = _this.promViaje;
                    _this.firstTableData.push(firstTableObject);
                    _this.secondTableData.push(secondTableObject);
                    _this.firstTableData.push(firstPromTableObject);
                    _this.secondTableData.push(secondPromTableObject);
                }
                else {
                    _this.columnSet = _this.tableColumns.sag;
                    for (var _b = 0, _c = _this.firstData; _b < _c.length; _b++) {
                        var elem = _c[_b];
                        if (elem.hora !== 'Prom') {
                            firstTableObject.series.push({
                                name: '' + elem.hora,
                                value: elem.alimentacion
                            });
                            firstPromTableObject.series.push({
                                name: '' + elem.hora,
                                value: _this.promAlimentacion
                            });
                            secondTableObject.series.push({
                                name: '' + elem.hora,
                                value: elem.tratamiento
                            });
                            secondPromTableObject.series.push({
                                name: '' + elem.hora,
                                value: _this.promTratamiento
                            });
                        }
                    }
                    _this.firstTableData.push(firstTableObject);
                    _this.secondTableData.push(secondTableObject);
                    _this.firstTableData.push(firstPromTableObject);
                    _this.secondTableData.push(secondPromTableObject);
                }
                _this.showTable = true;
            }
        });
    };
    CigoPageComponent.prototype.setChancadorData = function (row, baseHour) {
        var printHour = (baseHour > 9) ? baseHour + ":00" : "0" + baseHour + ":00";
        if (row.data_type === '1_VAL') {
            this.firstData.push({
                hora: printHour,
                viajes: row.viajes,
                tons: row.tons.toFixed(2),
                tiempo: row.tiempo.toFixed(2),
                tons_promedio: row.tons_promedio.toFixed(2),
                spi: row.spi.toFixed(2),
                distancia: row.distancia.toFixed(2),
                velocidad: row.velocidad.toFixed(2),
                ley: row.ley.toFixed(2)
            });
            this.promViaje += row.viajes;
            this.promTons += row.tons;
        }
        if (row.data_type === '2_AVG') {
            this.promPromTons = row.tons.toFixed(2);
            this.promTiempo = row.tiempo.toFixed(2);
            this.firstData.push({
                hora: 'Prom',
                viajes: row.viajes,
                tons: row.tons.toFixed(2),
                tiempo: row.tiempo.toFixed(2),
                tons_promedio: row.tons_promedio.toFixed(2),
                spi: row.spi.toFixed(2),
                distancia: row.distancia.toFixed(2),
                velocidad: row.velocidad.toFixed(2),
                ley: row.ley.toFixed(2)
            });
        }
    };
    CigoPageComponent.prototype.setSagData = function (row, baseHour) {
        var printHour = (baseHour > 9) ? baseHour + ":00" : "0" + baseHour + ":00";
        if (row.data_type === '1_VAL') {
            this.firstData.push({
                hora: printHour,
                alimentacion: row.alimentacion.toFixed(2),
                stockpile: row.stockpile.toFixed(2),
                tratamiento: row.tratamiento.toFixed(2),
                operacion: row.operacion.toFixed(2),
                alimentacion_2: row.alimentacion_2.toFixed(2),
                tratamiento_2: row.tratamiento_2.toFixed(2)
            });
            this.totalAlimentacion += row.alimentacion;
            this.totalTratamiento += row.tratamiento;
        }
        if (row.data_type === '2_AVG') {
            this.promAlimentacion = row.alimentacion;
            this.promTratamiento = row.tratamiento;
            this.firstData.push({
                hora: 'Prom',
                alimentacion: row.alimentacion.toFixed(2),
                stockpile: row.stockpile.toFixed(2),
                tratamiento: row.tratamiento.toFixed(2),
                operacion: row.operacion.toFixed(2),
                alimentacion_2: row.alimentacion_2.toFixed(2),
                tratamiento_2: row.tratamiento_2.toFixed(2)
            });
        }
    };
    CigoPageComponent.prototype.setTableTitle = function (chart) {
        if (chart.includes('PRIM')) {
            return (chart === 'PRIM') ? 'Chancador Primario (1)' : 'Chancador Primario (2)';
        }
        else {
            return (chart === 'CF') ? 'Planta SAG CF' : 'Planta SAG LB';
        }
    };
    CigoPageComponent.prototype.setRequestTitle = function (hours) {
        var baseDate = new Date(Date.now() - (hours * 3600000));
        baseDate.setMinutes(0);
        baseDate.setSeconds(0);
        return baseDate.toUTCString().split(',')[1].split('GMT')[0];
    };
    CigoPageComponent.prototype.updateViewTimer = function (value) {
        this.viewTimer = value * 10;
        this.barDivisor = this.viewTimer / 100;
    };
    CigoPageComponent.prototype.toggleSettingsForm = function () {
        this.form.timer = this.viewTimer / 10;
        this.form.rowNumber = this.rowNumber;
        this.showSettingForm = !this.showSettingForm;
    };
    CigoPageComponent.prototype.saveTimer = function () {
        this.updateViewTimer(this.form.timer);
        this.toggleSettingsForm();
    };
    CigoPageComponent.prototype.saveRowNumber = function () {
        this.rowNumber = this.form.rowNumber;
        this.toggleSettingsForm();
    };
    CigoPageComponent.prototype.onSelect = function (event) {
        console.log(event);
    };
    CigoPageComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-cigo',
            template: __webpack_require__("../../../../../src/app/pages/cigo/cigo.component.html"),
            styles: [__webpack_require__("../../../../../src/app/pages/cigo/cigo.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_cigo_data_service__["a" /* CigoDataService */]])
    ], CigoPageComponent);
    return CigoPageComponent;
}());



/***/ }),

/***/ "../../../../../src/app/pages/fuel/fuel.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"app-container\">\n  <div class=\"sidebar-container left\">\n      <app-card-listing [commentList]=\"false\" [isCdi]=\"false\"></app-card-listing>\n  </div>\n  <div class=\"charts-container\">\n    <app-filter (change)=\"test($event)\" [options]=\"fieldOptions\"></app-filter>\n\n    <app-control-chart\n    [pageDescriptor]=\"'fuel'\"\n    [showLegend]=\"false\"\n    (change)=\"test($event)\"\n    (changeDate)=\"onChangeDate($event)\"\n    [fieldOptions]=\"[]\" \n    [budgetOptions]=\"budgetOptions\">\n  </app-control-chart>\n    <app-scatter-chart></app-scatter-chart>\n  </div>\n  <div class=\"sidebar-container right\">\n    <app-comment-section></app-comment-section>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/pages/fuel/fuel.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".app-container {\n  height: calc(100vh - 60px);\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex: 1;\n      flex: 1; }\n  .app-container .sidebar-container {\n    -ms-flex: 0;\n        flex: 0;\n    border-radius: 3px;\n    background-color: #f9f9f9;\n    box-shadow: 0px 0px 1px #4981FD;\n    margin: 10px; }\n    .app-container .sidebar-container.right {\n      overflow: auto; }\n  .app-container .charts-container {\n    padding: 10px 0;\n    -ms-flex: 10;\n        flex: 10;\n    margin-right: 40px;\n    margin-left: 20px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/fuel/fuel.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FuelPageComponent; });
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


var FuelPageComponent = (function () {
    function FuelPageComponent(view) {
        this.view = view;
        this.title = 'app';
        this.fieldOptions = [
            {
                name: 'Tipo',
                options: [
                    { value: 'Camion', text: 'Camion' },
                ],
                selected: 'Camion'
            },
            {
                name: 'Flota',
                options: [
                    { value: 'all', text: 'Todas las flotas' },
                    { value: 'CAT 795F', text: 'CAT 795F' },
                    { value: 'KOM 830E', text: 'KOM 830E' },
                    { value: 'KOM 930E', text: 'KOM 930E' },
                    { value: 'KOM 960E', text: 'KOM 960E' },
                ],
                selected: 'all'
            },
            {
                name: 'Field_Target',
                options: [
                    { value: 'litros', text: 'Litros' },
                    { value: 'consumo', text: 'Consumo' },
                    { value: 'energia', text: 'Energia' },
                    { value: 'co2_equiv', text: 'CO2 Equiv' },
                    { value: 'movimiento_total', text: 'Movimiento Total' },
                    { value: 'l_kt', text: 'l/kt' },
                    { value: 'tiempo_operativo', text: 'Tiempo' },
                    { value: 'l_h', text: 'l/h' },
                    { value: 'dist_media', text: 'Distancia Media' },
                    { value: 'l_kt_km', text: 'l/(kt*km)' },
                    { value: 't_h', text: 't/h' },
                    { value: 'kt_km', text: 'kt*km' },
                ],
                selected: 'litros'
            },
        ];
        this.budgetOptions = {
            name: 'Budget',
            options: [],
            selected: 'WK'
        };
    }
    FuelPageComponent.prototype.test = function (event) {
        switch (event.field) {
            case 'Tipo':
                this.view.changeTipo(event.value);
                break;
            case 'Flota':
                this.view.changeFlota(event.value);
                break;
            case 'Equipo':
                this.view.changeEquipo(event.value);
                break;
            case 'Field_Target':
                this.view.changeFuelTarget(event.value);
                break;
        }
    };
    FuelPageComponent.prototype.onChangeDate = function (event) {
        console.log(event);
    };
    FuelPageComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-fuel',
            template: __webpack_require__("../../../../../src/app/pages/fuel/fuel.component.html"),
            styles: [__webpack_require__("../../../../../src/app/pages/fuel/fuel.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_view_service__["a" /* ViewService */]])
    ], FuelPageComponent);
    return FuelPageComponent;
}());



/***/ }),

/***/ "../../../../../src/app/pages/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"app-container\">\n  <div class=\"nav-card\" routerLink=\"/cdi\">\n    <p>Control diario integrado</p>\n  </div>\n  <div class=\"nav-card\" routerLink=\"/fuel\">\n    <p>Fuel management</p>\n  </div>\n  <div class=\"nav-card\" routerLink=\"/pareto\">\n    <p>Eventos planta</p>\n  </div>\n  <div class=\"nav-card\" routerLink=\"/cigo\">\n    <p>CIGO</p>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/pages/home/home.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".app-container {\n  height: calc(100vh - 60px);\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex: 1;\n      flex: 1;\n  -ms-flex-direction: column;\n      flex-direction: column;\n  -ms-flex-pack: center;\n      justify-content: center;\n  -ms-flex-align: center;\n      align-items: center; }\n  .app-container .nav-card {\n    cursor: pointer;\n    text-align: center;\n    background: #FFFFFF;\n    padding: 20px 40px;\n    margin: 1.5em;\n    border-radius: 2px;\n    max-width: 500px;\n    min-width: 320px;\n    text-transform: uppercase;\n    box-shadow: 0px 3px 10px 0px rgba(1, 42, 119, 0.5);\n    transition: box-shadow ease 0.3s; }\n    .app-container .nav-card:hover {\n      box-shadow: 0px 3px 10px -3px rgba(1, 42, 119, 0.5); }\n    .app-container .nav-card:focus {\n      box-shadow: none;\n      outline: none; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var HomePageComponent = (function () {
    function HomePageComponent() {
    }
    HomePageComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-home',
            template: __webpack_require__("../../../../../src/app/pages/home/home.component.html"),
            styles: [__webpack_require__("../../../../../src/app/pages/home/home.component.scss")]
        })
    ], HomePageComponent);
    return HomePageComponent;
}());



/***/ }),

/***/ "../../../../../src/app/pages/pareto/pareto.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"app-container pareto\">\n  <div class=\"charts-container\">\n    <app-pareto-chart (change)=\"test($event)\" [fieldOptions]=\"fieldOptions\" [budgetOptions]=\"[]\"></app-pareto-chart>\n    <!-- <app-scatter-chart></app-scatter-chart> -->\n  </div>\n  <div class=\"sidebar-container right\">\n      <div class=\"table-sub-container\">\n          <div class=\"table-field\">\n              <table style=\"width:100%\">\n                  <tr>\n                    <th *ngFor=\"let col of columns\">\n                      {{col.label}}\n                    </th>\n                  </tr>\n                  <tr *ngFor=\"let row of data$\">\n                    <td *ngFor=\"let col of columns\">\n                      {{row[col.value]}}\n                    </td>\n                  </tr>\n              </table>\n          </div>\n      </div>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/pages/pareto/pareto.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".app-container {\n  height: calc(100vh - 60px);\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex: 1;\n      flex: 1; }\n  .app-container .sidebar-container {\n    -ms-flex: 5;\n        flex: 5;\n    border-radius: 3px;\n    background-color: #f9f9f9;\n    box-shadow: 0px 0px 1px #4981FD;\n    margin: 10px; }\n    .app-container .sidebar-container.right {\n      overflow: auto; }\n  .app-container .charts-container {\n    margin-left: 10px;\n    padding: 10px 0;\n    -ms-flex: 10;\n        flex: 10; }\n\ntr {\n  text-align: center;\n  height: 30px;\n  font-size: 13px; }\n  tr:nth-of-type(odd) {\n    background: #ffffff; }\n  tr td:nth-child(2) {\n    text-align: left; }\n\ntd, th {\n  padding: 5px; }\n\nth {\n  height: 50px;\n  font-size: 13px; }\n\n.table-container .table-sub-container {\n  display: -ms-flexbox;\n  display: flex; }\n  .table-container .table-sub-container .table-field {\n    -ms-flex: 1;\n        flex: 1; }\n  .table-container .table-sub-container .chart-container {\n    -ms-flex: 1;\n        flex: 1;\n    width: 100%; }\n    .table-container .table-sub-container .chart-container .prueba {\n      position: absolute;\n      margin-left: -120px;\n      margin-top: 170px;\n      transform: rotate(90deg); }\n\n.table-container.first, .table-container.second, .table-container.last {\n  -ms-flex: 1;\n      flex: 1;\n  background-color: #f9f9f9;\n  padding: 10px;\n  border-radius: 0 0 3px 3px; }\n  .table-container.first th, .table-container.second th, .table-container.last th {\n    border-bottom: 1px solid #e2e2e2; }\n  .table-container.first tr:last-child, .table-container.second tr:last-child, .table-container.last tr:last-child {\n    border-top: 1px solid #e2e2e2; }\n\n.table-container.first, .table-container.second {\n  margin-right: 10px; }\n\n.table-container.first td:first-child, .table-container.first th:first-child {\n  border-right: 1px solid #e2e2e2; }\n\n.table-container .datatable-header {\n  font-size: 10px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/pareto/pareto.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ParetoPageComponent; });
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


var ParetoPageComponent = (function () {
    function ParetoPageComponent(dataService) {
        this.dataService = dataService;
        this.fieldOptions = [
            {
                name: 'Equipo',
                options: [
                    { value: '106', text: 'LB Chancado Primario Nº1' },
                    { value: '107', text: 'LB Chancado Primario Nº2' },
                    { value: '112', text: 'Circuito SAG 1' },
                    { value: '113', text: 'Circuito SAG 2' },
                    { value: '53', text: 'Molino SAG' },
                ],
                selected: '106'
            }
        ];
        this.columns = [
            { label: 'Index', value: 'name' },
            { label: 'Motivo y Falla', value: 'falla' },
            { label: 'Hrs', value: 'duracion' },
            { label: 'N', value: 'veces' },
            { label: 'MTTR', value: 'promedioD' }
        ];
    }
    ParetoPageComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.dataService.dataPareto$.subscribe(function (data) {
            _this.data$ = data.map(function (elem) {
                var elem2 = elem;
                elem2['promedioD'] = (((elem['duracion'] / elem['veces']) / 60) / 60).toFixed(1);
                elem2['duracion'] = ((elem['duracion'] / 60) / 60).toFixed(1);
                return elem2;
            });
        });
    };
    ParetoPageComponent.prototype.test = function (e) {
        this.dataService.chageParetoData(e.value);
    };
    ParetoPageComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-pareto',
            template: __webpack_require__("../../../../../src/app/pages/pareto/pareto.component.html"),
            styles: [__webpack_require__("../../../../../src/app/pages/pareto/pareto.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_data_service__["a" /* DataService */]])
    ], ParetoPageComponent);
    return ParetoPageComponent;
}());



/***/ }),

/***/ "../../../../../src/app/services/cigo-data.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CigoDataService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject__ = __webpack_require__("../../../../rxjs/_esm5/BehaviorSubject.js");
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




var CigoDataService = (function () {
    function CigoDataService(http) {
        this.http = http;
        this.apiUrl = 'https://latam-cppr-cigo.azurewebsites.net/api';
        this.data = {};
        this.dataCigo$ = new __WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject__["BehaviorSubject"]({});
        this.dataAvailable$ = new __WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject__["BehaviorSubject"](false);
    }
    CigoDataService.prototype.getData = function (rowNumber) {
        var _this = this;
        if (rowNumber === void 0) { rowNumber = 12; }
        this.dataAvailable$.next(false);
        var fases = {};
        this.http.get(this.apiUrl + "/" + rowNumber).subscribe(function (data) {
            _this.originalData = data;
            var crossf = __WEBPACK_IMPORTED_MODULE_3_crossfilter2__(_this.originalData);
            var dataByField = crossf.dimension(function (row) { return row['EQUIPO']; });
            var addReduce = function (p, v) {
                var k = _this.setEquipmentData(v);
                if (v['TIPO_EQUIPO'] === 'CHANCADOR') {
                    if ((!p[v['EQUIPO']])) {
                        p[v['EQUIPO']] = {
                            series: [],
                            total_tons: 0,
                            total_viajes: 0
                        };
                    }
                    p[v['EQUIPO']].series.push(k);
                    p[v['EQUIPO']].total_tons += k.tons;
                    p[v['EQUIPO']].total_viajes += k.viajes;
                }
                else {
                    if ((!p[v['EQUIPO']])) {
                        p[v['EQUIPO']] = {
                            series: [],
                            total_alimentacion: 0,
                            total_tratamiento: 0
                        };
                    }
                    p[v['EQUIPO']].series.push(k);
                    p[v['EQUIPO']].total_alimentacion += k.alimentacion;
                    p[v['EQUIPO']].total_tratamiento += k.tratamiento;
                }
                return p;
            };
            var removeReduce = function (p, v) {
                return p;
            };
            var initReduce = function () {
                return {};
            };
            var prueba = data.reduce(addReduce, {});
            var pruebaArray = [];
            _this.data = prueba;
            _this.dataCigo$.next(_this.data);
            _this.dataAvailable$.next(true);
        });
    };
    CigoDataService.prototype.setEquipmentData = function (row) {
        var date = new Date(row['FECHA_HORA']);
        if (row['TIPO_EQUIPO'] === 'CHANCADOR') {
            return {
                data_type: row['TIPO_REG'],
                fecha: date,
                hora: date.getHours() + ':00',
                viajes: parseFloat(row['VALOR_01']),
                tons: parseFloat(row['VALOR_02']),
                tons_promedio: parseFloat(row['VALOR_03']),
                tiempo: parseFloat(row['VALOR_04']),
                distancia: parseFloat(row['VALOR_05']),
                velocidad: parseFloat(row['VALOR_06']),
                ley: parseFloat(row['VALOR_08']),
                spi: parseFloat(row['VALOR_07'])
            };
        }
        else {
            return {
                data_type: row['TIPO_REG'],
                fecha: date,
                hora: date.getHours() + ':00',
                alimentacion: parseFloat(row['VALOR_01']),
                stockpile: row['VALOR_02'] ? parseFloat(row['VALOR_02']) : parseFloat('0'),
                tratamiento: parseFloat(row['VALOR_03']),
                operacion: parseFloat(row['VALOR_04']),
                alimentacion_2: parseFloat(row['VALOR_05']),
                tratamiento_2: parseFloat(row['VALOR_06'])
            };
        }
    };
    CigoDataService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], CigoDataService);
    return CigoDataService;
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
        this.http = http;
        this.target = target;
        this.view = view;
    }
    CommentsService.prototype.initComments = function (loadData) {
        var _this = this;
        this.comments = [];
        this.target.target$.map(function (d) { return d.length > 0; }).take(2).subscribe(function (val) {
            if (val && _this.comments.length === 0 && loadData) {
                _this.getComments();
            }
        });
        this.activated$ = this.view.activeView$.map(function (val) { return val === 'comment'; });
        this.innerComments$ = new __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__["BehaviorSubject"](this.comments);
        this.comments$ = __WEBPACK_IMPORTED_MODULE_5_rxjs_Observable__["a" /* Observable */].combineLatest(this.innerComments$, this.view.activeFase$, this.view.activeField$, this.view.activeTarget$)
            .map(function (_a) {
            var comments = _a[0], fase = _a[1], field = _a[2], activeTarget = _a[3];
            return comments.filter(function (comment) {
                return comment.fase === fase && comment.kpi === field && comment.target === activeTarget;
            });
        });
        this.activeComment$ = new __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__["BehaviorSubject"](null);
        this.activeCoordinates$ = new __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__["BehaviorSubject"](null);
    };
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
        this.dataHist$ = new __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__["BehaviorSubject"]([]);
        this.dataControl$ = new __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__["BehaviorSubject"]([]);
        this.dataControlFuel$ = new __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__["BehaviorSubject"]([]);
        this.dataPareto$ = new __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__["BehaviorSubject"]([]);
        this.dataParetoCumm$ = new __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__["BehaviorSubject"]([]);
        this.warnings = [];
        this.innerWarnings$ = new __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__["BehaviorSubject"]([]);
        this.getData();
        this.dataScatter = {
            'x': null,
            'y': null,
            'z': null
        };
        this.dataScatter$ = new __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__["BehaviorSubject"](this.dataScatter);
        this.colorSet$ = new __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__["BehaviorSubject"](this.defaultDomain);
    }
    DataService.prototype.getData = function () {
        var _this = this;
        var fases = {};
        this.http.get('/assets/dataSEP.json').subscribe(function (data) {
            var crossf = __WEBPACK_IMPORTED_MODULE_3_crossfilter2__(data);
            var dataByDate = crossf.dimension(function (row) {
                return (row['Motivo_Nivel_1'] + '.' + row['ModoFallaDescripcion'] + '.' + row['EquipoId']);
            });
            var addReduce = function (p, v) {
                var emptyP = (Object.keys(p).length === 0);
                var actualDuracion = Number(v['duracion_segs']);
                var fallaV = v['Motivo_Nivel_1'] + ' - ' + v['ModoFallaDescripcion'];
                var actualTimes;
                if (emptyP) {
                    actualTimes = 1;
                }
                else if ((p.falla === fallaV) && (p.id === v['EquipoId'])) {
                    actualTimes = 1 + p.veces;
                    actualDuracion += p.duracion;
                }
                p = {
                    id: v['EquipoId'],
                    nombre: v['EquipoNombre'],
                    falla: v['Motivo_Nivel_1'] + ' - ' + v['ModoFallaDescripcion'],
                    duracion: actualDuracion,
                    fechaFin: v['FechaFin'],
                    fechaInicio: v['FechaInicio'],
                    veces: actualTimes
                };
                return p;
            };
            var removeReduce = function (p, v) {
                return p;
            };
            var initReduce = function () {
                return {};
            };
            // const chartsValue = dataByDate.group().reduce(addReduce, removeReduce, initReduce ).all()
            // .map(elem => {
            //   const timeInSec = Number(elem.value.duracion);
            //   const fInit = new Date(elem.value.fechaInicio);
            //   const fEnd = new Date(elem.value.fechaFin);
            //   if (!this.paretoInitDay) {
            //     this.paretoInitDay = fInit;
            //     this.paretoEndDay = fEnd;
            //   } else {
            //     if (this.paretoInitDay > fInit) {
            //       this.paretoInitDay = fInit;
            //     }
            //     if (this.paretoEndDay < fEnd) {
            //       this.paretoEndDay = fEnd;
            //     }
            //   }
            //   return {
            //     key: elem.key,
            //     fechaFin: elem.value.fechaFin,
            //     fechaInicio: elem.value.fechaInicio,
            //     falla: elem.value.falla,
            //     value: timeInSec,
            //     veces: elem.value.veces,
            //     duracion: elem.value.duracion,
            //     id: elem.value.id
            //   };
            // });
            // this.originalParetoData = chartsValue;
            _this.chageParetoData('106');
        });
        this.http.get('/assets/daily.json').subscribe(function (data) {
            _this.originalData = data;
            var addReduce = function (p, v) {
                var dateElem = new Date(v['Fecha']);
                if (!_this.cdiInitDay) {
                    _this.cdiInitDay = dateElem;
                    _this.cdiEndDay = dateElem;
                }
                else {
                    if (_this.cdiInitDay > dateElem) {
                        _this.cdiInitDay = dateElem;
                    }
                    if (_this.cdiEndDay < dateElem) {
                        _this.cdiEndDay = dateElem;
                    }
                }
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
            _this.fasesList = Object.keys(fases);
        });
        this.http.get('/assets/dataFuel.json').subscribe(function (data) {
            var testTipo = {};
            var testFlota = {};
            var testEquipo = {};
            _this.originalFuelData = data;
            var addReduce = function (p, v) {
                var realDate = ('' + v['fecha']).substring(0, 4) + '-' +
                    ('' + v['fecha']).substring(4, 6) + '-' +
                    ('' + v['fecha']).substring(6, 8);
                var dateElem = new Date(realDate);
                if (!_this.fuelInitDay) {
                    _this.fuelInitDay = dateElem;
                    _this.fuelEndDay = dateElem;
                }
                else {
                    if (_this.fuelInitDay > dateElem) {
                        _this.fuelInitDay = dateElem;
                    }
                    if (_this.fuelEndDay < dateElem) {
                        _this.fuelEndDay = dateElem;
                    }
                }
                var elem = {
                    name: v['tipo'] + '.' + v['flota'],
                    fecha: realDate,
                    litros: v['litros'],
                    consumo: Number(('' + v['consumo']).replace(',', '.')),
                    energia: Number(('' + v['energia']).replace(',', '.')),
                    co2_equiv: Number(('' + v['co2_equiv']).replace(',', '.')),
                    movimiento_total: Number(('' + v['movimiento_total']).replace(',', '.')),
                    l_kt: Number(('' + v['l_kt']).replace(',', '.')),
                    tiempo_operativo: Number(('' + v['tiempo_operativo']).replace(',', '.')),
                    l_h: Number(('' + v['l_h']).replace(',', '.')),
                    dist_media: Number(('' + v['dist_media']).replace(',', '.')),
                    l_kt_km: Number(('' + v['l_kt_km']).replace(',', '.')),
                    t_h: Number(('' + v['t_h']).replace(',', '.')),
                    kt_km: Number(('' + v['kt_km']).replace(',', '.')),
                };
                p.push(elem);
                return p;
            };
            _this.originalFuelData = _this.originalFuelData.reduce(addReduce, []);
            _this.selectedFuelControl = 'litros';
            _this.dataSelectedScatter = {
                'x': 'consumo',
                'y': 'movimiento_total',
                'z': 'dist_media'
            };
            _this.changeFuelData('Camion', 'all');
        });
    };
    DataService.prototype.chageParetoData = function (target, initDate, endDate) {
        if (initDate === void 0) { initDate = null; }
        if (endDate === void 0) { endDate = null; }
        var totalValue = 0;
        var filteredData = this.originalParetoData.filter(function (elem) {
            if (elem['id'] === target) {
                totalValue += elem['value'];
                return true;
            }
            return false;
        });
        if (initDate !== null) {
            filteredData = filteredData.filter(function (elem) {
                var elemDate = new Date(elem['fechaInicio']);
                return (elemDate >= initDate && elemDate <= endDate);
            });
        }
        var orderedData = filteredData.sort(function (a, b) {
            return b['value'] - a['value'];
        });
        var toPercentaje = orderedData.map(function (elem, index) {
            elem['name'] = index;
            elem['value'] = Number((elem['value'] * 100 / totalValue).toFixed(2));
            return elem;
        });
        var totalSum = 0;
        var chartsValue2 = toPercentaje.map(function (elem) {
            totalSum = Number((totalSum + elem['value']).toFixed(2));
            return {
                name: elem['name'],
                value: totalSum
            };
        });
        this.dataPareto$.next(toPercentaje);
        this.dataParetoCumm$.next([{ name: 'Acumulado', series: chartsValue2 }]);
    };
    DataService.prototype.changeData = function (field, fase, initDate, endDate) {
        if (initDate === void 0) { initDate = null; }
        if (endDate === void 0) { endDate = null; }
        var dataForField = this.data.find(function (d) { return d.name === field; });
        var newSeries = dataForField.series.filter(function (d) { return d.fase === fase; });
        if (initDate !== null) {
            newSeries = newSeries.filter(function (elem) {
                return (elem.name >= initDate && elem.name <= endDate);
            });
        }
        this.currentData = { name: field, series: newSeries };
        this.dataControl$.next([{ name: field, series: newSeries }]);
        this.changeHistogramData('Extraccion', 'Total Fases');
    };
    DataService.prototype.changeFuelData = function (tipo, flota, initDate, endDate) {
        if (initDate === void 0) { initDate = null; }
        if (endDate === void 0) { endDate = null; }
        var newSerie;
        if (flota === 'all') {
            newSerie = this.originalFuelData.filter(function (d) { return d.name.includes(tipo); });
        }
        else {
            var compareString_1 = tipo + '.' + flota;
            newSerie = this.originalFuelData.filter(function (d) { return d.name === compareString_1; });
        }
        if (initDate !== null) {
            newSerie = newSerie.filter(function (elem) {
                var elemDate = new Date(elem['fecha']);
                return (elemDate >= initDate && elemDate <= endDate);
            });
        }
        var crossf = __WEBPACK_IMPORTED_MODULE_3_crossfilter2__(newSerie);
        var dataByDate = crossf.dimension(function (row) { return row['fecha']; });
        this.currentFuelData = dataByDate;
        this.changeFuelControlData(this.selectedFuelControl);
        this.changeScatterFuelData('x', this.dataSelectedScatter['x']);
        this.changeScatterFuelData('y', this.dataSelectedScatter['y']);
        this.changeScatterFuelData('z', this.dataSelectedScatter['z']);
    };
    DataService.prototype.changeFuelControlData = function (target) {
        var addReduce = function (p, v) {
            p = {
                value: v[target]
            };
            return p;
        };
        var removeReduce = function (p, v) {
            return p;
        };
        var initReduce = function () {
            return {};
        };
        console.log(this.currentFuelData);
        var chartsValue = this.currentFuelData.group().reduce(addReduce, removeReduce, initReduce).all()
            .map(function (elem) {
            return {
                name: new Date(elem.key),
                value: elem.value.value
            };
        });
        this.dataControlFuel$.next([{ name: target, series: chartsValue }]);
        this.selectedFuelControl = target;
    };
    DataService.prototype.changeHistogramData = function (field, fase) {
        var dataForField = this.data.find(function (d) { return d.name === field; });
        var newSeries = dataForField.series.filter(function (d) { return d.fase === fase; });
        this.currentHistData = { name: field, series: newSeries };
        this.dataHist$.next([{ name: field, series: newSeries }]);
    };
    DataService.prototype.changeScatterFuelData = function (chartKey, target) {
        this.dataSelectedScatter[chartKey] = target;
        var addReduce = function (p, v) {
            p = {
                value: v[target]
            };
            return p;
        };
        var removeReduce = function (p, v) {
            return p;
        };
        var initReduce = function () {
            return {};
        };
        var chartsValue = this.currentFuelData.group().reduce(addReduce, removeReduce, initReduce).all()
            .map(function (elem) {
            return {
                name: new Date(elem.key),
                value: elem.value.value
            };
        });
        this.dataScatter[chartKey] = { name: target, series: chartsValue };
        this.dataScatter$.next(this.dataScatter);
    };
    // changeScatterData(chartKey: string, field: string, fase: string) {
    //   const dataForField = this.data.find(d => d.name === field);
    //   const newSeries = dataForField.series.filter((d) => d.fase === fase);
    //   this.dataScatter[chartKey] = {name: field, series: newSeries};
    //   this.dataScatter$.next(this.dataScatter);
    // }
    DataService.prototype.getSubData = function (name, data) {
        var crossf = __WEBPACK_IMPORTED_MODULE_3_crossfilter2__(data);
        this.originalDataByDate = crossf.dimension(function (row) { return row['fecha']; });
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
        var chartsValue = this.originalDataByDate.group().reduce(addReduce, removeReduce, initReduce).all()
            .map(function (elem) {
            return {
                name: new Date(elem.key),
                fase: elem.value.fase,
                value: elem.value.valor
            };
        });
        return { name: name, series: chartsValue };
    };
    DataService.prototype.clearWarnings = function () {
        this.warnings = [];
        this.innerWarnings$ = new __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__["BehaviorSubject"]([]);
    };
    DataService.prototype.studyData = function (range, isCdi) {
        if (!range.alerts) {
            return;
        }
        var data = (isCdi) ? this.currentData.series : this.dataControlFuel$.getValue()[0].series;
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
        this.dataservice = dataservice;
        this.view = view;
        this.http = http;
    }
    RangeService.prototype.initRanges = function (loadData) {
        var _this = this;
        this.possibleID = 0;
        this.ranges = [];
        this.ranges$ = new __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__["BehaviorSubject"](this.ranges);
        this.rangeData$ = new __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__["BehaviorSubject"]([]);
        this.activated$ = this.view.activeView$.map(function (val) { return val === 'range'; });
        this.dataservice.dataControl$.map(function (d) { return d.length > 0; }).take(2).subscribe(function (val) {
            if (val && _this.ranges.length === 0 && loadData) {
                _this.getRanges();
            }
        });
        this.subscription = __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__["a" /* Observable */].combineLatest(this.view.activeField$, this.view.activeFase$)
            .subscribe(function (_a) {
            var field = _a[0], fase = _a[1];
            _this.sendRange(field, fase);
        });
    };
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
        this.dataservice.studyData(range, this.isCdi);
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
        this.dataservice.studyData(newRange, this.isCdi);
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
    RangeService.prototype.changeRangeData = function (initDate, endDate) {
        var _this = this;
        if (initDate === void 0) { initDate = null; }
        if (endDate === void 0) { endDate = null; }
        var newRanges = this.ranges.map(function (range) {
            var newRange = Object.assign({}, range);
            var minX = new Date(range.minX);
            var maxX = new Date(range.maxX);
            newRange.minX = (minX < initDate) ? _this.getDateFormat(initDate) : range.minX;
            newRange.maxX = (maxX > endDate) ? _this.getDateFormat(endDate) : range.maxX;
            return newRange;
        });
        console.log(newRanges);
        this.ranges$.next(newRanges);
        this.rangeData$.next(newRanges.map(function (range) {
            return {
                name: range.name,
                series: [
                    { name: new Date(range.minX), value: range.limitPoints[0].value },
                    { name: new Date(range.maxX), value: range.limitPoints[0].value },
                ]
            };
        }));
    };
    RangeService.prototype.getDateFormat = function (foo) {
        var monthvalue = foo.getMonth() + 1;
        var month = (foo.getMonth() < 10) ? '0' + monthvalue : monthvalue;
        var date = (foo.getDate() < 10) ? '0' + foo.getDate() : foo.getDate();
        return (foo.getFullYear() + '-' + month + '-' + date);
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
        this.target$ = new __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__["BehaviorSubject"]([]);
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
        console.log(this.originalData);
        var cf = __WEBPACK_IMPORTED_MODULE_2_crossfilter2__(this.originalData);
        this.dataByDate = cf.dimension(function (row) { return row['fecha']; });
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
        var chartsValue = this.dataByDate.group().reduce(addReduce, removeReduce, initReduce).all()
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
        this.lastTarget = targetString;
        this.originalChartsValue = chartsValue;
        this.dataDict[targetString] = { name: 'Target', series: chartsValue };
        this.target$.next([{ name: 'Target', series: chartsValue }]);
    };
    TargetService.prototype.changeTargetData = function (initDate, endDate) {
        if (initDate === void 0) { initDate = null; }
        if (endDate === void 0) { endDate = null; }
        var newSerie = this.originalChartsValue.filter(function (elem) {
            return (elem.name >= initDate && elem.name <= endDate);
        });
        this.dataDict[this.lastTarget] = { name: 'Target', series: newSerie };
        this.target$.next([{ name: 'Target', series: newSerie }]);
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
        this.fuelTarget = 'litros';
        this.fuelEquipo = 'CAC201';
        this.fuelFlota = 'CAT 795F';
        this.fuelTipo = 'Camion';
        this.activeTarget = 'WK';
        this.field = 'Distancia';
        this.fase = 'Total Fases';
        this.activeView$ = new __WEBPACK_IMPORTED_MODULE_3_rxjs_BehaviorSubject__["BehaviorSubject"]('');
        this.activeTarget$ = new __WEBPACK_IMPORTED_MODULE_3_rxjs_BehaviorSubject__["BehaviorSubject"](this.activeTarget);
        this.activeField$ = new __WEBPACK_IMPORTED_MODULE_3_rxjs_BehaviorSubject__["BehaviorSubject"](this.field);
        this.activeFase$ = new __WEBPACK_IMPORTED_MODULE_3_rxjs_BehaviorSubject__["BehaviorSubject"](this.fase);
        this.activeFuelTipo$ = new __WEBPACK_IMPORTED_MODULE_3_rxjs_BehaviorSubject__["BehaviorSubject"](this.fuelTipo);
        this.activeFuelFlota$ = new __WEBPACK_IMPORTED_MODULE_3_rxjs_BehaviorSubject__["BehaviorSubject"](this.fuelFlota);
        this.activeFuelEquipo$ = new __WEBPACK_IMPORTED_MODULE_3_rxjs_BehaviorSubject__["BehaviorSubject"](this.fuelEquipo);
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
    ViewService.prototype.changeTipo = function (tipo) {
        this.fuelTipo = tipo;
        this.activeFuelTipo$.next(this.fuelTipo);
        // this.target.generateFuelData(this.fuelTipo, this.fuelFlota, this.fuelEquipo);
        this.data.changeFuelData(this.fuelTipo, this.fuelFlota);
    };
    ViewService.prototype.changeFlota = function (flota) {
        this.fuelFlota = flota;
        this.activeFuelFlota$.next(this.fuelFlota);
        // this.target.generateFuelData(this.fuelTipo, this.fuelFlota, this.fuelEquipo);
        this.data.changeFuelData(this.fuelTipo, this.fuelFlota);
    };
    ViewService.prototype.changeEquipo = function (equipo) {
        this.fuelEquipo = equipo;
        this.activeFuelEquipo$.next(this.fuelEquipo);
        // this.target.generateFuelData(this.fuelTipo, this.fuelFlota, this.fuelEquipo);
        this.data.changeFuelData(this.fuelTipo, this.fuelFlota);
    };
    ViewService.prototype.changeFuelTarget = function (target) {
        this.fuelTarget = target;
        this.data.changeFuelControlData(this.fuelTarget);
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