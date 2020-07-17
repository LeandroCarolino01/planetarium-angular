(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_content_content_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/content/content.component */ "./src/app/components/content/content.component.ts");
/* harmony import */ var _components_landing_page_landing_page_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/landing-page/landing-page.component */ "./src/app/components/landing-page/landing-page.component.ts");
/* harmony import */ var _components_about_about_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/about/about.component */ "./src/app/components/about/about.component.ts");






var routes = [
    { path: '', component: _components_landing_page_landing_page_component__WEBPACK_IMPORTED_MODULE_4__["LandingPageComponent"] },
    { path: 'content', component: _components_content_content_component__WEBPACK_IMPORTED_MODULE_3__["ContentComponent"] },
    { path: 'about', component: _components_about_about_component__WEBPACK_IMPORTED_MODULE_5__["AboutComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".earth {\n    width: 200px;\n    height:200px;\n    position: fixed;\n    top: 0;\n    bottom: 0;\n    left: 0;\n    right: 0;\n    margin: auto;\n    overflow: hidden;\n    border-radius: 50%;\n    box-shadow: 0 0 20px 20px #000 inset, 0 0 20px 2px #000;\n    \n  }\n  \n  .earth:after {\n    position: absolute;\n    content: \"\";\n    top: 0;\n    bottom: 0;\n    left: 0;\n    right: 0;\n    box-shadow: -20px -20px 50px 2px #000 inset;\n    border-radius: 50%;\n  \n  }\n  \n  .earth > div {\n    width: 200%;\n    height: 100%;\n    -webkit-animation: spin 30s linear alternate infinite;\n            animation: spin 30s linear alternate infinite;\n    /* background: url(https://web.opendrive.com/api/v1/download/file.json/NTlfMTQ1MTkzNDhf?inline=1); */\n    background: url('jupiter.jpg');\n    /*orginal image at https://upload.wikimedia.org/wikipedia/commons/thumb/c/c4/Earthmap1000x500compac.jpg/640px-Earthmap1000x500compac.jpg */\n    background-size: cover;\n   \n  }\n  \n  @-webkit-keyframes spin {\n    to {\n      transform: translateX(-50%);\n    }\n  }\n  \n  @keyframes spin {\n    to {\n      transform: translateX(-50%);\n    }\n  } \n  \n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxZQUFZO0lBQ1osWUFBWTtJQUNaLGVBQWU7SUFDZixNQUFNO0lBQ04sU0FBUztJQUNULE9BQU87SUFDUCxRQUFRO0lBQ1IsWUFBWTtJQUNaLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsdURBQXVEOztFQUV6RDs7RUFFQTtJQUNFLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsTUFBTTtJQUNOLFNBQVM7SUFDVCxPQUFPO0lBQ1AsUUFBUTtJQUNSLDJDQUEyQztJQUMzQyxrQkFBa0I7O0VBRXBCOztFQUVBO0lBQ0UsV0FBVztJQUNYLFlBQVk7SUFDWixxREFBNkM7WUFBN0MsNkNBQTZDO0lBQzdDLG9HQUFvRztJQUNwRyw4QkFBK0M7SUFDL0MsMElBQTBJO0lBQzFJLHNCQUFzQjs7RUFFeEI7O0VBQ0E7SUFDRTtNQUNFLDJCQUEyQjtJQUM3QjtFQUNGOztFQUpBO0lBQ0U7TUFDRSwyQkFBMkI7SUFDN0I7RUFDRiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmVhcnRoIHtcbiAgICB3aWR0aDogMjAwcHg7XG4gICAgaGVpZ2h0OjIwMHB4O1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICB0b3A6IDA7XG4gICAgYm90dG9tOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgcmlnaHQ6IDA7XG4gICAgbWFyZ2luOiBhdXRvO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIGJveC1zaGFkb3c6IDAgMCAyMHB4IDIwcHggIzAwMCBpbnNldCwgMCAwIDIwcHggMnB4ICMwMDA7XG4gICAgXG4gIH1cbiAgXG4gIC5lYXJ0aDphZnRlciB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgdG9wOiAwO1xuICAgIGJvdHRvbTogMDtcbiAgICBsZWZ0OiAwO1xuICAgIHJpZ2h0OiAwO1xuICAgIGJveC1zaGFkb3c6IC0yMHB4IC0yMHB4IDUwcHggMnB4ICMwMDAgaW5zZXQ7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBcbiAgfVxuICBcbiAgLmVhcnRoID4gZGl2IHtcbiAgICB3aWR0aDogMjAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgYW5pbWF0aW9uOiBzcGluIDMwcyBsaW5lYXIgYWx0ZXJuYXRlIGluZmluaXRlO1xuICAgIC8qIGJhY2tncm91bmQ6IHVybChodHRwczovL3dlYi5vcGVuZHJpdmUuY29tL2FwaS92MS9kb3dubG9hZC9maWxlLmpzb24vTlRsZk1UUTFNVGt6TkRoZj9pbmxpbmU9MSk7ICovXG4gICAgYmFja2dyb3VuZDogdXJsKCcuLi9hc3NldHMvaW1hZ2VzL2p1cGl0ZXIuanBnJyk7XG4gICAgLypvcmdpbmFsIGltYWdlIGF0IGh0dHBzOi8vdXBsb2FkLndpa2ltZWRpYS5vcmcvd2lraXBlZGlhL2NvbW1vbnMvdGh1bWIvYy9jNC9FYXJ0aG1hcDEwMDB4NTAwY29tcGFjLmpwZy82NDBweC1FYXJ0aG1hcDEwMDB4NTAwY29tcGFjLmpwZyAqL1xuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICBcbiAgfVxuICBAa2V5ZnJhbWVzIHNwaW4ge1xuICAgIHRvIHtcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcbiAgICB9XG4gIH0gXG4gICJdfQ== */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n<router-outlet></router-outlet>\n<app-footer></app-footer>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent.prototype.ngOnInit = function () {
    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _components_landing_page_landing_page_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/landing-page/landing-page.component */ "./src/app/components/landing-page/landing-page.component.ts");
/* harmony import */ var _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/navbar/navbar.component */ "./src/app/components/navbar/navbar.component.ts");
/* harmony import */ var _components_content_content_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/content/content.component */ "./src/app/components/content/content.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/footer/footer.component */ "./src/app/components/footer/footer.component.ts");
/* harmony import */ var _components_about_about_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/about/about.component */ "./src/app/components/about/about.component.ts");













var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _components_landing_page_landing_page_component__WEBPACK_IMPORTED_MODULE_7__["LandingPageComponent"],
                _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_8__["NavbarComponent"],
                _components_content_content_component__WEBPACK_IMPORTED_MODULE_9__["ContentComponent"],
                _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_11__["FooterComponent"],
                _components_about_about_component__WEBPACK_IMPORTED_MODULE_12__["AboutComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatExpansionModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatCardModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_10__["AppRoutingModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/about/about.component.css":
/*!******************************************************!*\
  !*** ./src/app/components/about/about.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".me{\n    width: 300px;\n    height: 300px;\n    margin: 0 auto;\n    display: block;\n    border-radius: 50%;\n    margin-top: 60px;\n    border-radius: 50%;\n\n}\n.text{\n    text-align:center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9hYm91dC9hYm91dC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksWUFBWTtJQUNaLGFBQWE7SUFDYixjQUFjO0lBQ2QsY0FBYztJQUNkLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsa0JBQWtCOztBQUV0QjtBQUNBO0lBQ0ksaUJBQWlCO0FBQ3JCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9hYm91dC9hYm91dC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1le1xuICAgIHdpZHRoOiAzMDBweDtcbiAgICBoZWlnaHQ6IDMwMHB4O1xuICAgIG1hcmdpbjogMCBhdXRvO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICBtYXJnaW4tdG9wOiA2MHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcblxufVxuLnRleHR7XG4gICAgdGV4dC1hbGlnbjpjZW50ZXI7XG59Il19 */"

/***/ }),

/***/ "./src/app/components/about/about.component.html":
/*!*******************************************************!*\
  !*** ./src/app/components/about/about.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<img class=\"me\"  [src]=\"img\" alt=\"\" (mouseover)=\"onMouseOver()\" (mouseout)=\"onMouseOut()\">\n<p class=\"text\">what's up, fam? I am Leandro and I like to build things with javascript and angular.</p>\n\n"

/***/ }),

/***/ "./src/app/components/about/about.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/about/about.component.ts ***!
  \*****************************************************/
/*! exports provided: AboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutComponent", function() { return AboutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AboutComponent = /** @class */ (function () {
    function AboutComponent() {
        this.img = '../../../../../assets/images/me1.jpg';
    }
    AboutComponent.prototype.ngOnInit = function () {
    };
    AboutComponent.prototype.onMouseOver = function () {
        this.img = '../../../../../assets/images/me2.jpg';
    };
    AboutComponent.prototype.onMouseOut = function () {
        this.img = '../../../../../assets/images/me1.jpg';
    };
    AboutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-about',
            template: __webpack_require__(/*! ./about.component.html */ "./src/app/components/about/about.component.html"),
            styles: [__webpack_require__(/*! ./about.component.css */ "./src/app/components/about/about.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AboutComponent);
    return AboutComponent;
}());



/***/ }),

/***/ "./src/app/components/content/content.component.css":
/*!**********************************************************!*\
  !*** ./src/app/components/content/content.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h5{\n    margin-top: 30px;\n}\n\n.description{\n    font-size: 15px;\n    line-height: 1.6;\n}\n\n.header{\n    margin-bottom: 30px;\n}\n\n.footer{\n    margin-top:30px;\n}\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jb250ZW50L2NvbnRlbnQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGVBQWU7SUFDZixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxlQUFlO0FBQ25CIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9jb250ZW50L2NvbnRlbnQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImg1e1xuICAgIG1hcmdpbi10b3A6IDMwcHg7XG59XG5cbi5kZXNjcmlwdGlvbntcbiAgICBmb250LXNpemU6IDE1cHg7XG4gICAgbGluZS1oZWlnaHQ6IDEuNjtcbn1cblxuLmhlYWRlcntcbiAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xufVxuXG4uZm9vdGVye1xuICAgIG1hcmdpbi10b3A6MzBweDtcbn1cblxuIl19 */"

/***/ }),

/***/ "./src/app/components/content/content.component.html":
/*!***********************************************************!*\
  !*** ./src/app/components/content/content.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n\n  <mat-card class=\"header\">\n      <h5 class=\"header-color\">Here are some things about Jupiter you never knew. Enjoy!</h5>\n  </mat-card>\n  <mat-accordion class=\"accord-container\" *ngFor=\"let curiosity of curiosities;\">\n \n    <mat-expansion-panel (opened)=\"curiosity.isOpen = true\"\n                         (closed)=\"curiosity.isOpen = false\"\n                         >\n      <mat-expansion-panel-header>\n        <mat-panel-title>\n         <h6>{{curiosity.id}}</h6>\n        </mat-panel-title>\n        <mat-panel-description>\n         {{curiosity.isOpen ? 'open' : 'closed'}}\n        </mat-panel-description>\n      </mat-expansion-panel-header>\n      <p>{{ curiosity.name }}</p> \n      <img src={{curiosity.img}} />\n      <p class=\"description\">{{ curiosity.description }}</p>\n     \n    </mat-expansion-panel>\n  </mat-accordion>\n\n  <mat-card class=\"footer\">\n     <p>This is a little info guide about Jupiter made by <a routerLink=\"/about\">Me</a></p>\n  </mat-card>\n\n  \n</div>\n"

/***/ }),

/***/ "./src/app/components/content/content.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/content/content.component.ts ***!
  \*********************************************************/
/*! exports provided: ContentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContentComponent", function() { return ContentComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _data_mock_curiosities__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../data/mock-curiosities */ "./src/app/data/mock-curiosities.ts");



var ContentComponent = /** @class */ (function () {
    function ContentComponent() {
        this.curiosities = _data_mock_curiosities__WEBPACK_IMPORTED_MODULE_2__["CURIOSITIES"];
    }
    ContentComponent.prototype.ngOnInit = function () {
    };
    ContentComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-content',
            template: __webpack_require__(/*! ./content.component.html */ "./src/app/components/content/content.component.html"),
            styles: [__webpack_require__(/*! ./content.component.css */ "./src/app/components/content/content.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ContentComponent);
    return ContentComponent;
}());



/***/ }),

/***/ "./src/app/components/footer/footer.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/footer/footer.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".footer {\n    width: 100%;\n    height:100px;\n    background-color: #d81b60;\n    color: white;\n    text-align: center;\n    margin-top: 30px;\n }\n\n footer{\n    margin: 0 auto;\n    height: 30px;\n    padding-top: 20px;\n    width: 100%;\n    text-align: center;\n}\n\n footer ul{\n    margin: 0px;\n    padding:0;\n}\n\n footer li {\n    list-style-type: none;\n    line-height: 9px;\n    padding: 0px 10px;\n    display:inline;\n}\n\n footer li a{\n    text-decoration: none;\n    color: white;\n    font-size: 18px;\n}\n\n .fab{\n    font-size: 25px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLHlCQUF5QjtJQUN6QixZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLGdCQUFnQjtDQUNuQjs7Q0FFQTtJQUNHLGNBQWM7SUFDZCxZQUFZO0lBQ1osaUJBQWlCO0lBQ2pCLFdBQVc7SUFDWCxrQkFBa0I7QUFDdEI7O0NBQ0E7SUFDSSxXQUFXO0lBQ1gsU0FBUztBQUNiOztDQUNBO0lBQ0kscUJBQXFCO0lBQ3JCLGdCQUFnQjtJQUNoQixpQkFBaUI7SUFDakIsY0FBYztBQUNsQjs7Q0FDQTtJQUNJLHFCQUFxQjtJQUNyQixZQUFZO0lBQ1osZUFBZTtBQUNuQjs7Q0FFQTtJQUNJLGVBQWU7QUFDbkIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mb290ZXIge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDoxMDBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDgxYjYwO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgbWFyZ2luLXRvcDogMzBweDtcbiB9XG5cbiBmb290ZXJ7XG4gICAgbWFyZ2luOiAwIGF1dG87XG4gICAgaGVpZ2h0OiAzMHB4O1xuICAgIHBhZGRpbmctdG9wOiAyMHB4O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbmZvb3RlciB1bHtcbiAgICBtYXJnaW46IDBweDtcbiAgICBwYWRkaW5nOjA7XG59XG5mb290ZXIgbGkge1xuICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcbiAgICBsaW5lLWhlaWdodDogOXB4O1xuICAgIHBhZGRpbmc6IDBweCAxMHB4O1xuICAgIGRpc3BsYXk6aW5saW5lO1xufVxuZm9vdGVyIGxpIGF7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBmb250LXNpemU6IDE4cHg7XG59XG5cbi5mYWJ7XG4gICAgZm9udC1zaXplOiAyNXB4O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/components/footer/footer.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/footer/footer.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"footer\">\n  <footer>\n    <ul>\n        <li> <a href=\"https://www.linkedin.com/in/leandro-dos-santos-7a86839a/\"> <i class=\"fab fa-linkedin-in\"></i>\n        </a></li>\n        <li><a href=\"https://github.com/LeandroCarolino01\"><i class=\"fab fa-github\"></i></a></li>   \n\n             \n    </ul>\n    <p>Copyrights 2019</p>\n </footer>\n</div>"

/***/ }),

/***/ "./src/app/components/footer/footer.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/footer/footer.component.ts ***!
  \*******************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/components/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.css */ "./src/app/components/footer/footer.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/components/landing-page/landing-page.component.css":
/*!********************************************************************!*\
  !*** ./src/app/components/landing-page/landing-page.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container{\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction:column;\n}\n\n.img-background {\n  background: black;\n    border-radius: 10px;\n    width: 450px;\n    height: 350px;\n    display: flex;\n    align-items: center;\n    margin-top:20px;\n}\n\n/* .btn-content{\n  display: flex;\n  justify-content: center;\n  align-items: center;\n} */\n\n.safari-fix{\n  display:block;\n  margin:0 auto;\n  border-radius: 50%;\n  -khtml-border-radius: 50%;\n}\n\n.earth {\n    width: 200px;\n    height:200px;\n    margin:0 auto;\n    /* position: fixed;\n    margin-top:200px; */\n    overflow: hidden;\n    border-radius: 50%;\n    -khtml-border-radius: 50%;\n    overflow: hidden;\n    /* box-shadow: 0 0 20px 20px #000 inset, 0 0 20px 2px #000; */\n    \n  }\n\n/* .earth:after {\n    position: absolute;\n    content: \"\";\n    top: 0;\n    bottom: 0;\n    left: 0;\n    right: 0;\n    box-shadow: -20px -20px 50px 2px #000 inset;\n    border-radius: 50%;\n  \n  } */\n\n.earth > img {\n    width: 200%;\n    height: 100%;\n    -webkit-animation: spin 30s linear alternate infinite;\n            animation: spin 30s linear alternate infinite;\n    /* background: url(https://web.opendrive.com/api/v1/download/file.json/NTlfMTQ1MTkzNDhf?inline=1); */\n    /* background: url(); */\n    /*orginal image at https://upload.wikimedia.org/wikipedia/commons/thumb/c/c4/Earthmap1000x500compac.jpg/640px-Earthmap1000x500compac.jpg */\n    background-size: cover;\n   \n  }\n\n@-webkit-keyframes spin {\n    to {\n      transform: translateX(-50%);\n    }\n  }\n\n@keyframes spin {\n    to {\n      transform: translateX(-50%);\n    }\n  }\n\n.landing-btn{\n    margin-bottom: 40px;\n  }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9sYW5kaW5nLXBhZ2UvbGFuZGluZy1wYWdlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxpQkFBaUI7SUFDZixtQkFBbUI7SUFDbkIsWUFBWTtJQUNaLGFBQWE7SUFDYixhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLGVBQWU7QUFDbkI7O0FBRUE7Ozs7R0FJRzs7QUFFSDtFQUNFLGFBQWE7RUFDYixhQUFhO0VBR2Isa0JBQWtCO0VBQ2xCLHlCQUF5QjtBQUMzQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixZQUFZO0lBQ1osYUFBYTtJQUNiO3VCQUNtQjtJQUNuQixnQkFBZ0I7SUFHaEIsa0JBQWtCO0lBQ2xCLHlCQUF5QjtJQUN6QixnQkFBZ0I7SUFDaEIsNkRBQTZEOztFQUUvRDs7QUFFQTs7Ozs7Ozs7OztLQVVHOztBQUVIO0lBQ0UsV0FBVztJQUNYLFlBQVk7SUFDWixxREFBNkM7WUFBN0MsNkNBQTZDO0lBQzdDLG9HQUFvRztJQUNwRyx1QkFBdUI7SUFDdkIsMElBQTBJO0lBQzFJLHNCQUFzQjs7RUFFeEI7O0FBQ0E7SUFDRTtNQUNFLDJCQUEyQjtJQUM3QjtFQUNGOztBQUpBO0lBQ0U7TUFDRSwyQkFBMkI7SUFDN0I7RUFDRjs7QUFFQTtJQUNFLG1CQUFtQjtFQUNyQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbGFuZGluZy1wYWdlL2xhbmRpbmctcGFnZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lcntcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGZsZXgtZGlyZWN0aW9uOmNvbHVtbjtcbn1cblxuLmltZy1iYWNrZ3JvdW5kIHtcbiAgYmFja2dyb3VuZDogYmxhY2s7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICB3aWR0aDogNDUwcHg7XG4gICAgaGVpZ2h0OiAzNTBweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgbWFyZ2luLXRvcDoyMHB4O1xufVxuXG4vKiAuYnRuLWNvbnRlbnR7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufSAqL1xuXG4uc2FmYXJpLWZpeHtcbiAgZGlzcGxheTpibG9jaztcbiAgbWFyZ2luOjAgYXV0bztcbiAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiA1MCU7XG4gIC1tb3otYm9yZGVyLXJhZGl1czogNTAlO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIC1raHRtbC1ib3JkZXItcmFkaXVzOiA1MCU7XG59XG5cbi5lYXJ0aCB7XG4gICAgd2lkdGg6IDIwMHB4O1xuICAgIGhlaWdodDoyMDBweDtcbiAgICBtYXJnaW46MCBhdXRvO1xuICAgIC8qIHBvc2l0aW9uOiBmaXhlZDtcbiAgICBtYXJnaW4tdG9wOjIwMHB4OyAqL1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgLW1vei1ib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIC1raHRtbC1ib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAvKiBib3gtc2hhZG93OiAwIDAgMjBweCAyMHB4ICMwMDAgaW5zZXQsIDAgMCAyMHB4IDJweCAjMDAwOyAqL1xuICAgIFxuICB9XG4gIFxuICAvKiAuZWFydGg6YWZ0ZXIge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBjb250ZW50OiBcIlwiO1xuICAgIHRvcDogMDtcbiAgICBib3R0b206IDA7XG4gICAgbGVmdDogMDtcbiAgICByaWdodDogMDtcbiAgICBib3gtc2hhZG93OiAtMjBweCAtMjBweCA1MHB4IDJweCAjMDAwIGluc2V0O1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgXG4gIH0gKi9cbiAgXG4gIC5lYXJ0aCA+IGltZyB7XG4gICAgd2lkdGg6IDIwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIGFuaW1hdGlvbjogc3BpbiAzMHMgbGluZWFyIGFsdGVybmF0ZSBpbmZpbml0ZTtcbiAgICAvKiBiYWNrZ3JvdW5kOiB1cmwoaHR0cHM6Ly93ZWIub3BlbmRyaXZlLmNvbS9hcGkvdjEvZG93bmxvYWQvZmlsZS5qc29uL05UbGZNVFExTVRrek5EaGY/aW5saW5lPTEpOyAqL1xuICAgIC8qIGJhY2tncm91bmQ6IHVybCgpOyAqL1xuICAgIC8qb3JnaW5hbCBpbWFnZSBhdCBodHRwczovL3VwbG9hZC53aWtpbWVkaWEub3JnL3dpa2lwZWRpYS9jb21tb25zL3RodW1iL2MvYzQvRWFydGhtYXAxMDAweDUwMGNvbXBhYy5qcGcvNjQwcHgtRWFydGhtYXAxMDAweDUwMGNvbXBhYy5qcGcgKi9cbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgXG4gIH1cbiAgQGtleWZyYW1lcyBzcGluIHtcbiAgICB0byB7XG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XG4gICAgfVxuICB9IFxuXG4gIC5sYW5kaW5nLWJ0bntcbiAgICBtYXJnaW4tYm90dG9tOiA0MHB4O1xuICB9XG4iXX0= */"

/***/ }),

/***/ "./src/app/components/landing-page/landing-page.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/components/landing-page/landing-page.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n   <div class=\"img-background\">\n        <div class=\"safari-fix\">\n                <div class=\"earth\">\n                        <!-- <div></div>     -->\n                        <img src=\"../../../assets/images/jupiter.jpg\" alt=\"\">\n                </div>\n        </div>\n   </div>\n    \n    <div>\n            <h4>You've always felt like you wanted to know more about Jupiter, then this is your lucky break buddy!! </h4>\n        \n    </div>\n\n    <button mat-raised-button color=\"warn\" routerLink=\"content\" class=\"landing-btn\">Get Started</button>\n    \n   \n</div>\n\n<!-- <div class=\"btn-content\">\n        <h3>this is a test</h3><br>\n        <button mat-raised-button color=\"warn\">Warn</button>\n</div> -->\n\n\n"

/***/ }),

/***/ "./src/app/components/landing-page/landing-page.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/landing-page/landing-page.component.ts ***!
  \*******************************************************************/
/*! exports provided: LandingPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LandingPageComponent", function() { return LandingPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var LandingPageComponent = /** @class */ (function () {
    function LandingPageComponent() {
    }
    LandingPageComponent.prototype.ngOnInit = function () {
    };
    LandingPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-landing-page',
            template: __webpack_require__(/*! ./landing-page.component.html */ "./src/app/components/landing-page/landing-page.component.html"),
            styles: [__webpack_require__(/*! ./landing-page.component.css */ "./src/app/components/landing-page/landing-page.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], LandingPageComponent);
    return LandingPageComponent;
}());



/***/ }),

/***/ "./src/app/components/navbar/navbar.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".brand-logo{\n    margin-left: 20px;\n    /* font-family: 'Calligraffitti', cursive; */\n}\n.navbar{\n    margin-bottom:40px;\n} \n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9uYXZiYXIvbmF2YmFyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxpQkFBaUI7SUFDakIsNENBQTRDO0FBQ2hEO0FBQ0E7SUFDSSxrQkFBa0I7QUFDdEIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL25hdmJhci9uYXZiYXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5icmFuZC1sb2dve1xuICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xuICAgIC8qIGZvbnQtZmFtaWx5OiAnQ2FsbGlncmFmZml0dGknLCBjdXJzaXZlOyAqL1xufVxuLm5hdmJhcntcbiAgICBtYXJnaW4tYm90dG9tOjQwcHg7XG59ICJdfQ== */"

/***/ }),

/***/ "./src/app/components/navbar/navbar.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar\">\n  <div class=\"nav-wrapper pink darken-1\">\n    <a routerLink=\"/\" class=\"brand-logo\">Smarto</a>\n    <!-- <ul id=\"nav-mobile\" class=\"right hide-on-med-and-down\">\n      <li><a routerLink=\"/\">Home</a></li>\n      <li><a routerLink=\"content\">Content</a></li>\n      <li><a routerLink=\"about\">About</a></li>\n    </ul> -->\n  </div>\n</nav>"

/***/ }),

/***/ "./src/app/components/navbar/navbar.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.ts ***!
  \*******************************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var NavbarComponent = /** @class */ (function () {
    function NavbarComponent() {
    }
    NavbarComponent.prototype.ngOnInit = function () {
    };
    NavbarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__(/*! ./navbar.component.html */ "./src/app/components/navbar/navbar.component.html"),
            styles: [__webpack_require__(/*! ./navbar.component.css */ "./src/app/components/navbar/navbar.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/data/mock-curiosities.ts":
/*!******************************************!*\
  !*** ./src/app/data/mock-curiosities.ts ***!
  \******************************************/
/*! exports provided: CURIOSITIES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CURIOSITIES", function() { return CURIOSITIES; });
var CURIOSITIES = [
    {
        id: 1,
        isOpen: false,
        name: 'Why is it called Jupiter?',
        img: 'assets/images/img1.jpg',
        description: 'Jupiter was appropriately named after the king of the gods. It’s massive, has a powerful magnetic field, and more moons that any planet in the Solar System. Though it has been known to astronomers since ancient times, the invention of the telescope and the advent of modern astronomy has taught us so much about this gas giant.'
    },
    {
        id: 2,
        isOpen: false,
        name: '2. Jupiter Cannot Become A Star:',
        img: 'assets/images/img2.jpg',
        description: 'Astronomers call Jupiter a failed star, but that’s not really an appropriate description. While it is true that, like a star, Jupiter is rich in hydrogen and helium, Jupiter does not have nearly enough mass to trigger a fusion reaction in its core. This is how stars generate energy, by fusing hydrogen atoms together under extreme heat and pressure to create helium, releasing light and heat in the process. This is made possible by their enormous gravity. For Jupiter to ignite a nuclear fusion process and become a star, it would need more than 70 times its current mass. If you could crash dozens of Jupiters together, you might have a chance to make a new star. But in the meantime, Jupiter shall remain a large gas giant with no hopes of becoming a star. Sorry, Jupiter!'
    },
    {
        id: 3,
        isOpen: false,
        name: '(the red spot) -  The Great Red Spot Has Been Around For A Long Time:',
        img: 'assets/images/img5.jpg',
        description: 'The Great Red Spot on Jupiter is one of its most familiar features. This persistent anticyclonic storm, which is located south of its equator, measures between 24,000 km in diameter and 12–14,000 km in height. As such, it is large enough to contain two or three planets the size of Earth’s diameter. And the spot has been around for at least 350 years, since it was spotted as far back as the 17th century. The Great Red Spot was first identified in 1665 by Italian astronomer Giovanni Cassini. By the 20th century, astronomers began to theorize that it was a storm, one which was created by Jupiter’s turbulent and fast-moving atmosphere. These theories were confirmed by the Voyager 1 mission, which observed the Giant Red Spot up close in March of 1979 during its flyby of the planet. However, it appears to have been shrinking since that time. Based on Cassini’s observations, the size was estimated to be 40,000 km in the 17th century, which was almost twice as large as it is now. Astronomers do not know if or when it will ever disappear entirely, but they are relatively sure that another one will emerge somewhere else on the planet.'
    },
    {
        id: 4,
        isOpen: false,
        name: '( it has 67 moons)  Jupiter Has 67 Moons:',
        img: 'assets/images/img4.jpg',
        description: 'As of the penning of this article, Jupiter has a 67 confirmed and named satellites. However, it is estimated that the planet has over 200 natural satellites orbiting it. Almost all of them are less than 10 kilometers in diameter, and were only discovered after 1975, when the first spacecraft (Pioneer 10) arrived at Jupiter. However, it also has four major moons, which are collectively known as the Galilean Moons (after their discovered Galileo Galilei). These are, in order of distance from Jupiter, Io, Europa, Ganymede, and Callisto. These moons are some of the largest in the Solar System, with Ganymede being the largest, measuring 5262 km in diameter.'
    },
    {
        id: 5,
        isOpen: false,
        name: ' (you can see with your own eyes) 10. You Can See Jupiter With Your Own Eyes:',
        img: 'assets/images/img3.jpg',
        description: 'Jupiter is the third brightest object in the Solar System, after Venus and the Moon. Chances are, you saw Jupiter in the sky, and had no idea that’s what you were seeing. And here at Universe Today, we are in the habit of letting readers know when the best opportunities for spotting Jupiter in the night sky are. Chances are, if you see a really bright star high in the sky, then you’re looking at Jupiter. Get your hands on a pair of binoculars, and if you know someone with a telescope, that’s even better. Using even modest magnification, you might even spot small specks of light orbiting it, which are its Galilean Moons. Just think, you’ll be seeing precisely what Galileo did when he gazed at the planet in 1610.'
    },
    {
        id: 6,
        isOpen: false,
        name: 'Jupiter Is The Fastest Spinning Planet In The Solar System:',
        img: 'assets/images/img6.jpg',
        description: 'For all its size and mass, Jupiter sure moves quickly. In fact, with an rotational velocity of 12.6 km/s (~7.45 m/s) or 45,300 km/h (28,148 mph), the planet only takes about 10 hours to complete a full rotation on its axis. And because it’s spinning so rapidly, the planet has flattened out at the poles a little and is bulging at its equator. In fact, points on Jupiter’s equator are more than 4,600 km further from the center than the poles. Or to put it another way, the planet’s polar radius measures to 66,854 ± 10 km (or 10.517 that of Earth’s), while its diameter at the equator is 71,492 ± 4 km (or 11.209 that of Earth’s). This rapid rotation also helps generate Jupiter’s powerful magnetic fields, and contribute to the dangerous radiation surrounding it.'
    },
    {
        id: 7,
        isOpen: false,
        name: 'The Clouds On Jupiter Are Only 50 km Thick:',
        img: 'assets/images/img7.jpg',
        description: 'That’s right, all those beautiful whirling clouds and storms you see on Jupiter are only about 50 km thick. They’re made of ammonia crystals broken up into two different cloud decks. The darker material is thought to be compounds brought up from deeper inside Jupiter, and then change color when they reacted with sunlight. But below those clouds, it’s just hydrogen and helium, all the way down.'
    },
    {
        id: 8,
        isOpen: false,
        name: 'Jupiter’s Magnetic Field Is 14 Times Stronger Than Earth’s:',
        img: 'assets/images/img8.jpg',
        description: 'Compasses would really work on Jupiter. That’s because it has the strongest magnetic field in the Solar System. Astronomers think the magnetic field is generated by the eddy currents – i.e. swirling movements of conducting materials – within the liquid metallic hydrogen core. This magnetic field traps particles of sulfur dioxide from Io’s volcanic eruptions, which producing sulfur and oxygen ions. Together with hydrogen ions originating from the atmosphere of Jupiter, these form a plasma sheet in Jupiter’s equatorial plane. Farther out, the interaction of the magnetosphere with the solar wind generates a bow shock, a dangerous belt of radiation that can cause damage tos spacecraft. Jupiter’s four largest moons all orbit within the magnetosphere, which protects them from the solar wind, but also make the likelihood of establishing outposts on their surface problematic. The magnetosphere of Jupiter is also responsible for intense episodes of radio emission from the planet’s polar regions.'
    }
];


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/leandrocarolino/Desktop/planetarium-angular/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map