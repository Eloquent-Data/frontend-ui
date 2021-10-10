(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/dataanalyst/Desktop/workspace/web_and_mobile/frontend-ui/src/main.ts */"zUnb");


/***/ }),

/***/ "2DHQ":
/*!**********************************************************!*\
  !*** ./src/app/components/sidebar/sidebar.component.css ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/* .simple-text img{\n    width: 90%;\n    height: 30px;;\n} */\n.navbar-brand{\n    color: #000000;\n    font-weight: 400;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9zaWRlYmFyL3NpZGViYXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7O0dBR0c7QUFDSDtJQUNJLGNBQWM7SUFDZCxnQkFBZ0I7QUFDcEIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3NpZGViYXIvc2lkZWJhci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogLnNpbXBsZS10ZXh0IGltZ3tcbiAgICB3aWR0aDogOTAlO1xuICAgIGhlaWdodDogMzBweDs7XG59ICovXG4ubmF2YmFyLWJyYW5ke1xuICAgIGNvbG9yOiAjMDAwMDAwO1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG59Il19 */");

/***/ }),

/***/ "A3xY":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "AK6u":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/layouts/admin-layout/admin-layout.component.html ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"wrapper\">\n    <div class=\"sidebar\" data-color=\"danger\" data-background-color=\"white\" data-image=\"./assets/img/sidebar-1.jpg\">\n        <app-sidebar></app-sidebar>\n        <div class=\"sidebar-background\" style=\"background-image: url(./assets/img/sidebar-4.jpg)\"></div>\n    </div>\n    <div class=\"main-panel\">\n        <app-navbar></app-navbar>\n        <router-outlet></router-outlet>\n        <div *ngIf=\"isMaps('maps')\">\n            <app-footer></app-footer>\n        </div>\n    </div>\n</div>\n");

/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false,
    restApiUrl: 'https://eloquentdata-api.herokuapp.com',
};


/***/ }),

/***/ "BgzB":
/*!******************************************************************!*\
  !*** ./src/app/pages/page-not-found/page-not-found.component.ts ***!
  \******************************************************************/
/*! exports provided: PageNotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageNotFoundComponent", function() { return PageNotFoundComponent; });
/* harmony import */ var _raw_loader_page_not_found_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./page-not-found.component.html */ "aPpU");
/* harmony import */ var _page_not_found_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./page-not-found.component.css */ "nUU2");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PageNotFoundComponent = /** @class */ (function () {
    function PageNotFoundComponent() {
    }
    PageNotFoundComponent.prototype.ngOnInit = function () {
    };
    PageNotFoundComponent.ctorParameters = function () { return []; };
    PageNotFoundComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-page-not-found',
            template: _raw_loader_page_not_found_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_page_not_found_component_css__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [])
    ], PageNotFoundComponent);
    return PageNotFoundComponent;
}());



/***/ }),

/***/ "D8EZ":
/*!************************************************!*\
  !*** ./src/app/pages/login/login.component.ts ***!
  \************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _raw_loader_login_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./login.component.html */ "ywSW");
/* harmony import */ var _login_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login.component.css */ "pG9d");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var app_shared_services_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/shared/services/auth.service */ "IYfF");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-spinner */ "JqCM");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var LoginComponent = /** @class */ (function () {
    function LoginComponent(fb, authService, router, spinner) {
        this.fb = fb;
        this.authService = authService;
        this.router = router;
        this.spinner = spinner;
        this.loginForm = this.fb.group({
            username: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].email]],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(7)],
        });
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.showNotification = function (from, align, color, message) {
        var type = color;
        $.notify({
            icon: "notifications",
            message: message
        }, {
            type: type,
            timer: 5000,
            placement: {
                from: from,
                align: align
            },
            template: '<div data-notify="container" class="col-xl-4 col-lg-4 col-11 col-sm-4 col-md-4 alert alert-{0} alert-with-icon" role="alert">' +
                '<button mat-button  type="button" aria-hidden="true" class="close mat-button" data-notify="dismiss">  <i class="material-icons">close</i></button>' +
                '<i class="material-icons" data-notify="icon">notifications</i> ' +
                '<span data-notify="title">{1}</span> ' +
                '<span data-notify="message">{2}</span>' +
                '<div class="progress" data-notify="progressbar">' +
                '<div class="progress-bar progress-bar-{0}" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width: 0%;"></div>' +
                '</div>' +
                '<a href="{3}" target="{4}" data-notify="url"></a>' +
                '</div>'
        });
    };
    LoginComponent.prototype.onSubmit = function () {
        var _this = this;
        this.spinner.show();
        this.authService.login(this.loginForm.value).subscribe(function (res) {
            if (res.token) {
                _this.spinner.hide();
                var color = 'danger';
                var message = 'Welcome';
                _this.showNotification('bottom', 'right', color, message);
                _this.authService.setToken(res.token);
                _this.router.navigateByUrl('/');
            }
        }, function (err) {
            _this.spinner.hide();
            var color = 'danger';
            var message = '<b>Email or Password is</b> INCORRECT <br> <br> <b>If you are new </b>REGISTER.';
            _this.showNotification('bottom', 'right', color, message);
        });
    };
    LoginComponent.ctorParameters = function () { return [
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
        { type: app_shared_services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
        { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_6__["NgxSpinnerService"] }
    ]; };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-login',
            template: _raw_loader_login_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_login_component_css__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
            app_shared_services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_6__["NgxSpinnerService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "DIg/":
/*!********************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.css ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbmF2YmFyL25hdmJhci5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "EEd4":
/*!******************************************!*\
  !*** ./src/app/shared/data/countries.ts ***!
  \******************************************/
/*! exports provided: continent, countries */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "continent", function() { return continent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "countries", function() { return countries; });
var continent = { "AF": "Africa", "AN": "Antarctica", "AS": "Asia", "EU": "Europe", "NA": "North America", "OC": "Oceania", "SA": "South America" };
var countries = {
    "AD": {
        "name": "Andorra",
        "native": "Andorra",
        "phone": "376",
        "continent": "EU",
        "capital": "Andorra la Vella",
        "currency": "EUR",
        "languages": [
            "ca"
        ],
        "emoji": "🇦🇩",
        "emojiU": "U+1F1E6 U+1F1E9"
    },
    "AE": {
        "name": "United Arab Emirates",
        "native": "دولة الإمارات العربية المتحدة",
        "phone": "971",
        "continent": "AS",
        "capital": "Abu Dhabi",
        "currency": "AED",
        "languages": [
            "ar"
        ],
        "emoji": "🇦🇪",
        "emojiU": "U+1F1E6 U+1F1EA"
    },
    "AF": {
        "name": "Afghanistan",
        "native": "افغانستان",
        "phone": "93",
        "continent": "AS",
        "capital": "Kabul",
        "currency": "AFN",
        "languages": [
            "ps",
            "uz",
            "tk"
        ],
        "emoji": "🇦🇫",
        "emojiU": "U+1F1E6 U+1F1EB"
    },
    "AG": {
        "name": "Antigua and Barbuda",
        "native": "Antigua and Barbuda",
        "phone": "1268",
        "continent": "NA",
        "capital": "Saint John's",
        "currency": "XCD",
        "languages": [
            "en"
        ],
        "emoji": "🇦🇬",
        "emojiU": "U+1F1E6 U+1F1EC"
    },
    "AI": {
        "name": "Anguilla",
        "native": "Anguilla",
        "phone": "1264",
        "continent": "NA",
        "capital": "The Valley",
        "currency": "XCD",
        "languages": [
            "en"
        ],
        "emoji": "🇦🇮",
        "emojiU": "U+1F1E6 U+1F1EE"
    },
    "AL": {
        "name": "Albania",
        "native": "Shqipëria",
        "phone": "355",
        "continent": "EU",
        "capital": "Tirana",
        "currency": "ALL",
        "languages": [
            "sq"
        ],
        "emoji": "🇦🇱",
        "emojiU": "U+1F1E6 U+1F1F1"
    },
    "AM": {
        "name": "Armenia",
        "native": "Հայաստան",
        "phone": "374",
        "continent": "AS",
        "capital": "Yerevan",
        "currency": "AMD",
        "languages": [
            "hy",
            "ru"
        ],
        "emoji": "🇦🇲",
        "emojiU": "U+1F1E6 U+1F1F2"
    },
    "AO": {
        "name": "Angola",
        "native": "Angola",
        "phone": "244",
        "continent": "AF",
        "capital": "Luanda",
        "currency": "AOA",
        "languages": [
            "pt"
        ],
        "emoji": "🇦🇴",
        "emojiU": "U+1F1E6 U+1F1F4"
    },
    "AQ": {
        "name": "Antarctica",
        "native": "Antarctica",
        "phone": "672",
        "continent": "AN",
        "capital": "",
        "currency": "",
        "languages": [],
        "emoji": "🇦🇶",
        "emojiU": "U+1F1E6 U+1F1F6"
    },
    "AR": {
        "name": "Argentina",
        "native": "Argentina",
        "phone": "54",
        "continent": "SA",
        "capital": "Buenos Aires",
        "currency": "ARS",
        "languages": [
            "es",
            "gn"
        ],
        "emoji": "🇦🇷",
        "emojiU": "U+1F1E6 U+1F1F7"
    },
    "AS": {
        "name": "American Samoa",
        "native": "American Samoa",
        "phone": "1684",
        "continent": "OC",
        "capital": "Pago Pago",
        "currency": "USD",
        "languages": [
            "en",
            "sm"
        ],
        "emoji": "🇦🇸",
        "emojiU": "U+1F1E6 U+1F1F8"
    },
    "AT": {
        "name": "Austria",
        "native": "Österreich",
        "phone": "43",
        "continent": "EU",
        "capital": "Vienna",
        "currency": "EUR",
        "languages": [
            "de"
        ],
        "emoji": "🇦🇹",
        "emojiU": "U+1F1E6 U+1F1F9"
    },
    "AU": {
        "name": "Australia",
        "native": "Australia",
        "phone": "61",
        "continent": "OC",
        "capital": "Canberra",
        "currency": "AUD",
        "languages": [
            "en"
        ],
        "emoji": "🇦🇺",
        "emojiU": "U+1F1E6 U+1F1FA"
    },
    "AW": {
        "name": "Aruba",
        "native": "Aruba",
        "phone": "297",
        "continent": "NA",
        "capital": "Oranjestad",
        "currency": "AWG",
        "languages": [
            "nl",
            "pa"
        ],
        "emoji": "🇦🇼",
        "emojiU": "U+1F1E6 U+1F1FC"
    },
    "AX": {
        "name": "Åland",
        "native": "Åland",
        "phone": "358",
        "continent": "EU",
        "capital": "Mariehamn",
        "currency": "EUR",
        "languages": [
            "sv"
        ],
        "emoji": "🇦🇽",
        "emojiU": "U+1F1E6 U+1F1FD"
    },
    "AZ": {
        "name": "Azerbaijan",
        "native": "Azərbaycan",
        "phone": "994",
        "continent": "AS",
        "capital": "Baku",
        "currency": "AZN",
        "languages": [
            "az"
        ],
        "emoji": "🇦🇿",
        "emojiU": "U+1F1E6 U+1F1FF"
    },
    "BA": {
        "name": "Bosnia and Herzegovina",
        "native": "Bosna i Hercegovina",
        "phone": "387",
        "continent": "EU",
        "capital": "Sarajevo",
        "currency": "BAM",
        "languages": [
            "bs",
            "hr",
            "sr"
        ],
        "emoji": "🇧🇦",
        "emojiU": "U+1F1E7 U+1F1E6"
    },
    "BB": {
        "name": "Barbados",
        "native": "Barbados",
        "phone": "1246",
        "continent": "NA",
        "capital": "Bridgetown",
        "currency": "BBD",
        "languages": [
            "en"
        ],
        "emoji": "🇧🇧",
        "emojiU": "U+1F1E7 U+1F1E7"
    },
    "BD": {
        "name": "Bangladesh",
        "native": "Bangladesh",
        "phone": "880",
        "continent": "AS",
        "capital": "Dhaka",
        "currency": "BDT",
        "languages": [
            "bn"
        ],
        "emoji": "🇧🇩",
        "emojiU": "U+1F1E7 U+1F1E9"
    },
    "BE": {
        "name": "Belgium",
        "native": "België",
        "phone": "32",
        "continent": "EU",
        "capital": "Brussels",
        "currency": "EUR",
        "languages": [
            "nl",
            "fr",
            "de"
        ],
        "emoji": "🇧🇪",
        "emojiU": "U+1F1E7 U+1F1EA"
    },
    "BF": {
        "name": "Burkina Faso",
        "native": "Burkina Faso",
        "phone": "226",
        "continent": "AF",
        "capital": "Ouagadougou",
        "currency": "XOF",
        "languages": [
            "fr",
            "ff"
        ],
        "emoji": "🇧🇫",
        "emojiU": "U+1F1E7 U+1F1EB"
    },
    "BG": {
        "name": "Bulgaria",
        "native": "България",
        "phone": "359",
        "continent": "EU",
        "capital": "Sofia",
        "currency": "BGN",
        "languages": [
            "bg"
        ],
        "emoji": "🇧🇬",
        "emojiU": "U+1F1E7 U+1F1EC"
    },
    "BH": {
        "name": "Bahrain",
        "native": "‏البحرين",
        "phone": "973",
        "continent": "AS",
        "capital": "Manama",
        "currency": "BHD",
        "languages": [
            "ar"
        ],
        "emoji": "🇧🇭",
        "emojiU": "U+1F1E7 U+1F1ED"
    },
    "BI": {
        "name": "Burundi",
        "native": "Burundi",
        "phone": "257",
        "continent": "AF",
        "capital": "Bujumbura",
        "currency": "BIF",
        "languages": [
            "fr",
            "rn"
        ],
        "emoji": "🇧🇮",
        "emojiU": "U+1F1E7 U+1F1EE"
    },
    "BJ": {
        "name": "Benin",
        "native": "Bénin",
        "phone": "229",
        "continent": "AF",
        "capital": "Porto-Novo",
        "currency": "XOF",
        "languages": [
            "fr"
        ],
        "emoji": "🇧🇯",
        "emojiU": "U+1F1E7 U+1F1EF"
    },
    "BL": {
        "name": "Saint Barthélemy",
        "native": "Saint-Barthélemy",
        "phone": "590",
        "continent": "NA",
        "capital": "Gustavia",
        "currency": "EUR",
        "languages": [
            "fr"
        ],
        "emoji": "🇧🇱",
        "emojiU": "U+1F1E7 U+1F1F1"
    },
    "BM": {
        "name": "Bermuda",
        "native": "Bermuda",
        "phone": "1441",
        "continent": "NA",
        "capital": "Hamilton",
        "currency": "BMD",
        "languages": [
            "en"
        ],
        "emoji": "🇧🇲",
        "emojiU": "U+1F1E7 U+1F1F2"
    },
    "BN": {
        "name": "Brunei",
        "native": "Negara Brunei Darussalam",
        "phone": "673",
        "continent": "AS",
        "capital": "Bandar Seri Begawan",
        "currency": "BND",
        "languages": [
            "ms"
        ],
        "emoji": "🇧🇳",
        "emojiU": "U+1F1E7 U+1F1F3"
    },
    "BO": {
        "name": "Bolivia",
        "native": "Bolivia",
        "phone": "591",
        "continent": "SA",
        "capital": "Sucre",
        "currency": "BOB,BOV",
        "languages": [
            "es",
            "ay",
            "qu"
        ],
        "emoji": "🇧🇴",
        "emojiU": "U+1F1E7 U+1F1F4"
    },
    "BQ": {
        "name": "Bonaire",
        "native": "Bonaire",
        "phone": "5997",
        "continent": "NA",
        "capital": "Kralendijk",
        "currency": "USD",
        "languages": [
            "nl"
        ],
        "emoji": "🇧🇶",
        "emojiU": "U+1F1E7 U+1F1F6"
    },
    "BR": {
        "name": "Brazil",
        "native": "Brasil",
        "phone": "55",
        "continent": "SA",
        "capital": "Brasília",
        "currency": "BRL",
        "languages": [
            "pt"
        ],
        "emoji": "🇧🇷",
        "emojiU": "U+1F1E7 U+1F1F7"
    },
    "BS": {
        "name": "Bahamas",
        "native": "Bahamas",
        "phone": "1242",
        "continent": "NA",
        "capital": "Nassau",
        "currency": "BSD",
        "languages": [
            "en"
        ],
        "emoji": "🇧🇸",
        "emojiU": "U+1F1E7 U+1F1F8"
    },
    "BT": {
        "name": "Bhutan",
        "native": "ʼbrug-yul",
        "phone": "975",
        "continent": "AS",
        "capital": "Thimphu",
        "currency": "BTN,INR",
        "languages": [
            "dz"
        ],
        "emoji": "🇧🇹",
        "emojiU": "U+1F1E7 U+1F1F9"
    },
    "BV": {
        "name": "Bouvet Island",
        "native": "Bouvetøya",
        "phone": "47",
        "continent": "AN",
        "capital": "",
        "currency": "NOK",
        "languages": [
            "no",
            "nb",
            "nn"
        ],
        "emoji": "🇧🇻",
        "emojiU": "U+1F1E7 U+1F1FB"
    },
    "BW": {
        "name": "Botswana",
        "native": "Botswana",
        "phone": "267",
        "continent": "AF",
        "capital": "Gaborone",
        "currency": "BWP",
        "languages": [
            "en",
            "tn"
        ],
        "emoji": "🇧🇼",
        "emojiU": "U+1F1E7 U+1F1FC"
    },
    "BY": {
        "name": "Belarus",
        "native": "Белару́сь",
        "phone": "375",
        "continent": "EU",
        "capital": "Minsk",
        "currency": "BYN",
        "languages": [
            "be",
            "ru"
        ],
        "emoji": "🇧🇾",
        "emojiU": "U+1F1E7 U+1F1FE"
    },
    "BZ": {
        "name": "Belize",
        "native": "Belize",
        "phone": "501",
        "continent": "NA",
        "capital": "Belmopan",
        "currency": "BZD",
        "languages": [
            "en",
            "es"
        ],
        "emoji": "🇧🇿",
        "emojiU": "U+1F1E7 U+1F1FF"
    },
    "CA": {
        "name": "Canada",
        "native": "Canada",
        "phone": "1",
        "continent": "NA",
        "capital": "Ottawa",
        "currency": "CAD",
        "languages": [
            "en",
            "fr"
        ],
        "emoji": "🇨🇦",
        "emojiU": "U+1F1E8 U+1F1E6"
    },
    "CC": {
        "name": "Cocos [Keeling] Islands",
        "native": "Cocos (Keeling) Islands",
        "phone": "61",
        "continent": "AS",
        "capital": "West Island",
        "currency": "AUD",
        "languages": [
            "en"
        ],
        "emoji": "🇨🇨",
        "emojiU": "U+1F1E8 U+1F1E8"
    },
    "CD": {
        "name": "Democratic Republic of the Congo",
        "native": "République démocratique du Congo",
        "phone": "243",
        "continent": "AF",
        "capital": "Kinshasa",
        "currency": "CDF",
        "languages": [
            "fr",
            "ln",
            "kg",
            "sw",
            "lu"
        ],
        "emoji": "🇨🇩",
        "emojiU": "U+1F1E8 U+1F1E9"
    },
    "CF": {
        "name": "Central African Republic",
        "native": "Ködörösêse tî Bêafrîka",
        "phone": "236",
        "continent": "AF",
        "capital": "Bangui",
        "currency": "XAF",
        "languages": [
            "fr",
            "sg"
        ],
        "emoji": "🇨🇫",
        "emojiU": "U+1F1E8 U+1F1EB"
    },
    "CG": {
        "name": "Republic of the Congo",
        "native": "République du Congo",
        "phone": "242",
        "continent": "AF",
        "capital": "Brazzaville",
        "currency": "XAF",
        "languages": [
            "fr",
            "ln"
        ],
        "emoji": "🇨🇬",
        "emojiU": "U+1F1E8 U+1F1EC"
    },
    "CH": {
        "name": "Switzerland",
        "native": "Schweiz",
        "phone": "41",
        "continent": "EU",
        "capital": "Bern",
        "currency": "CHE,CHF,CHW",
        "languages": [
            "de",
            "fr",
            "it"
        ],
        "emoji": "🇨🇭",
        "emojiU": "U+1F1E8 U+1F1ED"
    },
    "CI": {
        "name": "Ivory Coast",
        "native": "Côte d'Ivoire",
        "phone": "225",
        "continent": "AF",
        "capital": "Yamoussoukro",
        "currency": "XOF",
        "languages": [
            "fr"
        ],
        "emoji": "🇨🇮",
        "emojiU": "U+1F1E8 U+1F1EE"
    },
    "CK": {
        "name": "Cook Islands",
        "native": "Cook Islands",
        "phone": "682",
        "continent": "OC",
        "capital": "Avarua",
        "currency": "NZD",
        "languages": [
            "en"
        ],
        "emoji": "🇨🇰",
        "emojiU": "U+1F1E8 U+1F1F0"
    },
    "CL": {
        "name": "Chile",
        "native": "Chile",
        "phone": "56",
        "continent": "SA",
        "capital": "Santiago",
        "currency": "CLF,CLP",
        "languages": [
            "es"
        ],
        "emoji": "🇨🇱",
        "emojiU": "U+1F1E8 U+1F1F1"
    },
    "CM": {
        "name": "Cameroon",
        "native": "Cameroon",
        "phone": "237",
        "continent": "AF",
        "capital": "Yaoundé",
        "currency": "XAF",
        "languages": [
            "en",
            "fr"
        ],
        "emoji": "🇨🇲",
        "emojiU": "U+1F1E8 U+1F1F2"
    },
    "CN": {
        "name": "China",
        "native": "中国",
        "phone": "86",
        "continent": "AS",
        "capital": "Beijing",
        "currency": "CNY",
        "languages": [
            "zh"
        ],
        "emoji": "🇨🇳",
        "emojiU": "U+1F1E8 U+1F1F3"
    },
    "CO": {
        "name": "Colombia",
        "native": "Colombia",
        "phone": "57",
        "continent": "SA",
        "capital": "Bogotá",
        "currency": "COP",
        "languages": [
            "es"
        ],
        "emoji": "🇨🇴",
        "emojiU": "U+1F1E8 U+1F1F4"
    },
    "CR": {
        "name": "Costa Rica",
        "native": "Costa Rica",
        "phone": "506",
        "continent": "NA",
        "capital": "San José",
        "currency": "CRC",
        "languages": [
            "es"
        ],
        "emoji": "🇨🇷",
        "emojiU": "U+1F1E8 U+1F1F7"
    },
    "CU": {
        "name": "Cuba",
        "native": "Cuba",
        "phone": "53",
        "continent": "NA",
        "capital": "Havana",
        "currency": "CUC,CUP",
        "languages": [
            "es"
        ],
        "emoji": "🇨🇺",
        "emojiU": "U+1F1E8 U+1F1FA"
    },
    "CV": {
        "name": "Cape Verde",
        "native": "Cabo Verde",
        "phone": "238",
        "continent": "AF",
        "capital": "Praia",
        "currency": "CVE",
        "languages": [
            "pt"
        ],
        "emoji": "🇨🇻",
        "emojiU": "U+1F1E8 U+1F1FB"
    },
    "CW": {
        "name": "Curacao",
        "native": "Curaçao",
        "phone": "5999",
        "continent": "NA",
        "capital": "Willemstad",
        "currency": "ANG",
        "languages": [
            "nl",
            "pa",
            "en"
        ],
        "emoji": "🇨🇼",
        "emojiU": "U+1F1E8 U+1F1FC"
    },
    "CX": {
        "name": "Christmas Island",
        "native": "Christmas Island",
        "phone": "61",
        "continent": "AS",
        "capital": "Flying Fish Cove",
        "currency": "AUD",
        "languages": [
            "en"
        ],
        "emoji": "🇨🇽",
        "emojiU": "U+1F1E8 U+1F1FD"
    },
    "CY": {
        "name": "Cyprus",
        "native": "Κύπρος",
        "phone": "357",
        "continent": "EU",
        "capital": "Nicosia",
        "currency": "EUR",
        "languages": [
            "el",
            "tr",
            "hy"
        ],
        "emoji": "🇨🇾",
        "emojiU": "U+1F1E8 U+1F1FE"
    },
    "CZ": {
        "name": "Czech Republic",
        "native": "Česká republika",
        "phone": "420",
        "continent": "EU",
        "capital": "Prague",
        "currency": "CZK",
        "languages": [
            "cs",
            "sk"
        ],
        "emoji": "🇨🇿",
        "emojiU": "U+1F1E8 U+1F1FF"
    },
    "DE": {
        "name": "Germany",
        "native": "Deutschland",
        "phone": "49",
        "continent": "EU",
        "capital": "Berlin",
        "currency": "EUR",
        "languages": [
            "de"
        ],
        "emoji": "🇩🇪",
        "emojiU": "U+1F1E9 U+1F1EA"
    },
    "DJ": {
        "name": "Djibouti",
        "native": "Djibouti",
        "phone": "253",
        "continent": "AF",
        "capital": "Djibouti",
        "currency": "DJF",
        "languages": [
            "fr",
            "ar"
        ],
        "emoji": "🇩🇯",
        "emojiU": "U+1F1E9 U+1F1EF"
    },
    "DK": {
        "name": "Denmark",
        "native": "Danmark",
        "phone": "45",
        "continent": "EU",
        "capital": "Copenhagen",
        "currency": "DKK",
        "languages": [
            "da"
        ],
        "emoji": "🇩🇰",
        "emojiU": "U+1F1E9 U+1F1F0"
    },
    "DM": {
        "name": "Dominica",
        "native": "Dominica",
        "phone": "1767",
        "continent": "NA",
        "capital": "Roseau",
        "currency": "XCD",
        "languages": [
            "en"
        ],
        "emoji": "🇩🇲",
        "emojiU": "U+1F1E9 U+1F1F2"
    },
    "DO": {
        "name": "Dominican Republic",
        "native": "República Dominicana",
        "phone": "1809,1829,1849",
        "continent": "NA",
        "capital": "Santo Domingo",
        "currency": "DOP",
        "languages": [
            "es"
        ],
        "emoji": "🇩🇴",
        "emojiU": "U+1F1E9 U+1F1F4"
    },
    "DZ": {
        "name": "Algeria",
        "native": "الجزائر",
        "phone": "213",
        "continent": "AF",
        "capital": "Algiers",
        "currency": "DZD",
        "languages": [
            "ar"
        ],
        "emoji": "🇩🇿",
        "emojiU": "U+1F1E9 U+1F1FF"
    },
    "EC": {
        "name": "Ecuador",
        "native": "Ecuador",
        "phone": "593",
        "continent": "SA",
        "capital": "Quito",
        "currency": "USD",
        "languages": [
            "es"
        ],
        "emoji": "🇪🇨",
        "emojiU": "U+1F1EA U+1F1E8"
    },
    "EE": {
        "name": "Estonia",
        "native": "Eesti",
        "phone": "372",
        "continent": "EU",
        "capital": "Tallinn",
        "currency": "EUR",
        "languages": [
            "et"
        ],
        "emoji": "🇪🇪",
        "emojiU": "U+1F1EA U+1F1EA"
    },
    "EG": {
        "name": "Egypt",
        "native": "مصر‎",
        "phone": "20",
        "continent": "AF",
        "capital": "Cairo",
        "currency": "EGP",
        "languages": [
            "ar"
        ],
        "emoji": "🇪🇬",
        "emojiU": "U+1F1EA U+1F1EC"
    },
    "EH": {
        "name": "Western Sahara",
        "native": "الصحراء الغربية",
        "phone": "212",
        "continent": "AF",
        "capital": "El Aaiún",
        "currency": "MAD,DZD,MRU",
        "languages": [
            "es"
        ],
        "emoji": "🇪🇭",
        "emojiU": "U+1F1EA U+1F1ED"
    },
    "ER": {
        "name": "Eritrea",
        "native": "ኤርትራ",
        "phone": "291",
        "continent": "AF",
        "capital": "Asmara",
        "currency": "ERN",
        "languages": [
            "ti",
            "ar",
            "en"
        ],
        "emoji": "🇪🇷",
        "emojiU": "U+1F1EA U+1F1F7"
    },
    "ES": {
        "name": "Spain",
        "native": "España",
        "phone": "34",
        "continent": "EU",
        "capital": "Madrid",
        "currency": "EUR",
        "languages": [
            "es",
            "eu",
            "ca",
            "gl",
            "oc"
        ],
        "emoji": "🇪🇸",
        "emojiU": "U+1F1EA U+1F1F8"
    },
    "ET": {
        "name": "Ethiopia",
        "native": "ኢትዮጵያ",
        "phone": "251",
        "continent": "AF",
        "capital": "Addis Ababa",
        "currency": "ETB",
        "languages": [
            "am"
        ],
        "emoji": "🇪🇹",
        "emojiU": "U+1F1EA U+1F1F9"
    },
    "FI": {
        "name": "Finland",
        "native": "Suomi",
        "phone": "358",
        "continent": "EU",
        "capital": "Helsinki",
        "currency": "EUR",
        "languages": [
            "fi",
            "sv"
        ],
        "emoji": "🇫🇮",
        "emojiU": "U+1F1EB U+1F1EE"
    },
    "FJ": {
        "name": "Fiji",
        "native": "Fiji",
        "phone": "679",
        "continent": "OC",
        "capital": "Suva",
        "currency": "FJD",
        "languages": [
            "en",
            "fj",
            "hi",
            "ur"
        ],
        "emoji": "🇫🇯",
        "emojiU": "U+1F1EB U+1F1EF"
    },
    "FK": {
        "name": "Falkland Islands",
        "native": "Falkland Islands",
        "phone": "500",
        "continent": "SA",
        "capital": "Stanley",
        "currency": "FKP",
        "languages": [
            "en"
        ],
        "emoji": "🇫🇰",
        "emojiU": "U+1F1EB U+1F1F0"
    },
    "FM": {
        "name": "Micronesia",
        "native": "Micronesia",
        "phone": "691",
        "continent": "OC",
        "capital": "Palikir",
        "currency": "USD",
        "languages": [
            "en"
        ],
        "emoji": "🇫🇲",
        "emojiU": "U+1F1EB U+1F1F2"
    },
    "FO": {
        "name": "Faroe Islands",
        "native": "Føroyar",
        "phone": "298",
        "continent": "EU",
        "capital": "Tórshavn",
        "currency": "DKK",
        "languages": [
            "fo"
        ],
        "emoji": "🇫🇴",
        "emojiU": "U+1F1EB U+1F1F4"
    },
    "FR": {
        "name": "France",
        "native": "France",
        "phone": "33",
        "continent": "EU",
        "capital": "Paris",
        "currency": "EUR",
        "languages": [
            "fr"
        ],
        "emoji": "🇫🇷",
        "emojiU": "U+1F1EB U+1F1F7"
    },
    "GA": {
        "name": "Gabon",
        "native": "Gabon",
        "phone": "241",
        "continent": "AF",
        "capital": "Libreville",
        "currency": "XAF",
        "languages": [
            "fr"
        ],
        "emoji": "🇬🇦",
        "emojiU": "U+1F1EC U+1F1E6"
    },
    "GB": {
        "name": "United Kingdom",
        "native": "United Kingdom",
        "phone": "44",
        "continent": "EU",
        "capital": "London",
        "currency": "GBP",
        "languages": [
            "en"
        ],
        "emoji": "🇬🇧",
        "emojiU": "U+1F1EC U+1F1E7"
    },
    "GD": {
        "name": "Grenada",
        "native": "Grenada",
        "phone": "1473",
        "continent": "NA",
        "capital": "St. George's",
        "currency": "XCD",
        "languages": [
            "en"
        ],
        "emoji": "🇬🇩",
        "emojiU": "U+1F1EC U+1F1E9"
    },
    "GE": {
        "name": "Georgia",
        "native": "საქართველო",
        "phone": "995",
        "continent": "AS",
        "capital": "Tbilisi",
        "currency": "GEL",
        "languages": [
            "ka"
        ],
        "emoji": "🇬🇪",
        "emojiU": "U+1F1EC U+1F1EA"
    },
    "GF": {
        "name": "French Guiana",
        "native": "Guyane française",
        "phone": "594",
        "continent": "SA",
        "capital": "Cayenne",
        "currency": "EUR",
        "languages": [
            "fr"
        ],
        "emoji": "🇬🇫",
        "emojiU": "U+1F1EC U+1F1EB"
    },
    "GG": {
        "name": "Guernsey",
        "native": "Guernsey",
        "phone": "44",
        "continent": "EU",
        "capital": "St. Peter Port",
        "currency": "GBP",
        "languages": [
            "en",
            "fr"
        ],
        "emoji": "🇬🇬",
        "emojiU": "U+1F1EC U+1F1EC"
    },
    "GH": {
        "name": "Ghana",
        "native": "Ghana",
        "phone": "233",
        "continent": "AF",
        "capital": "Accra",
        "currency": "GHS",
        "languages": [
            "en"
        ],
        "emoji": "🇬🇭",
        "emojiU": "U+1F1EC U+1F1ED"
    },
    "GI": {
        "name": "Gibraltar",
        "native": "Gibraltar",
        "phone": "350",
        "continent": "EU",
        "capital": "Gibraltar",
        "currency": "GIP",
        "languages": [
            "en"
        ],
        "emoji": "🇬🇮",
        "emojiU": "U+1F1EC U+1F1EE"
    },
    "GL": {
        "name": "Greenland",
        "native": "Kalaallit Nunaat",
        "phone": "299",
        "continent": "NA",
        "capital": "Nuuk",
        "currency": "DKK",
        "languages": [
            "kl"
        ],
        "emoji": "🇬🇱",
        "emojiU": "U+1F1EC U+1F1F1"
    },
    "GM": {
        "name": "Gambia",
        "native": "Gambia",
        "phone": "220",
        "continent": "AF",
        "capital": "Banjul",
        "currency": "GMD",
        "languages": [
            "en"
        ],
        "emoji": "🇬🇲",
        "emojiU": "U+1F1EC U+1F1F2"
    },
    "GN": {
        "name": "Guinea",
        "native": "Guinée",
        "phone": "224",
        "continent": "AF",
        "capital": "Conakry",
        "currency": "GNF",
        "languages": [
            "fr",
            "ff"
        ],
        "emoji": "🇬🇳",
        "emojiU": "U+1F1EC U+1F1F3"
    },
    "GP": {
        "name": "Guadeloupe",
        "native": "Guadeloupe",
        "phone": "590",
        "continent": "NA",
        "capital": "Basse-Terre",
        "currency": "EUR",
        "languages": [
            "fr"
        ],
        "emoji": "🇬🇵",
        "emojiU": "U+1F1EC U+1F1F5"
    },
    "GQ": {
        "name": "Equatorial Guinea",
        "native": "Guinea Ecuatorial",
        "phone": "240",
        "continent": "AF",
        "capital": "Malabo",
        "currency": "XAF",
        "languages": [
            "es",
            "fr"
        ],
        "emoji": "🇬🇶",
        "emojiU": "U+1F1EC U+1F1F6"
    },
    "GR": {
        "name": "Greece",
        "native": "Ελλάδα",
        "phone": "30",
        "continent": "EU",
        "capital": "Athens",
        "currency": "EUR",
        "languages": [
            "el"
        ],
        "emoji": "🇬🇷",
        "emojiU": "U+1F1EC U+1F1F7"
    },
    "GS": {
        "name": "South Georgia and the South Sandwich Islands",
        "native": "South Georgia",
        "phone": "500",
        "continent": "AN",
        "capital": "King Edward Point",
        "currency": "GBP",
        "languages": [
            "en"
        ],
        "emoji": "🇬🇸",
        "emojiU": "U+1F1EC U+1F1F8"
    },
    "GT": {
        "name": "Guatemala",
        "native": "Guatemala",
        "phone": "502",
        "continent": "NA",
        "capital": "Guatemala City",
        "currency": "GTQ",
        "languages": [
            "es"
        ],
        "emoji": "🇬🇹",
        "emojiU": "U+1F1EC U+1F1F9"
    },
    "GU": {
        "name": "Guam",
        "native": "Guam",
        "phone": "1671",
        "continent": "OC",
        "capital": "Hagåtña",
        "currency": "USD",
        "languages": [
            "en",
            "ch",
            "es"
        ],
        "emoji": "🇬🇺",
        "emojiU": "U+1F1EC U+1F1FA"
    },
    "GW": {
        "name": "Guinea-Bissau",
        "native": "Guiné-Bissau",
        "phone": "245",
        "continent": "AF",
        "capital": "Bissau",
        "currency": "XOF",
        "languages": [
            "pt"
        ],
        "emoji": "🇬🇼",
        "emojiU": "U+1F1EC U+1F1FC"
    },
    "GY": {
        "name": "Guyana",
        "native": "Guyana",
        "phone": "592",
        "continent": "SA",
        "capital": "Georgetown",
        "currency": "GYD",
        "languages": [
            "en"
        ],
        "emoji": "🇬🇾",
        "emojiU": "U+1F1EC U+1F1FE"
    },
    "HK": {
        "name": "Hong Kong",
        "native": "香港",
        "phone": "852",
        "continent": "AS",
        "capital": "City of Victoria",
        "currency": "HKD",
        "languages": [
            "zh",
            "en"
        ],
        "emoji": "🇭🇰",
        "emojiU": "U+1F1ED U+1F1F0"
    },
    "HM": {
        "name": "Heard Island and McDonald Islands",
        "native": "Heard Island and McDonald Islands",
        "phone": "61",
        "continent": "AN",
        "capital": "",
        "currency": "AUD",
        "languages": [
            "en"
        ],
        "emoji": "🇭🇲",
        "emojiU": "U+1F1ED U+1F1F2"
    },
    "HN": {
        "name": "Honduras",
        "native": "Honduras",
        "phone": "504",
        "continent": "NA",
        "capital": "Tegucigalpa",
        "currency": "HNL",
        "languages": [
            "es"
        ],
        "emoji": "🇭🇳",
        "emojiU": "U+1F1ED U+1F1F3"
    },
    "HR": {
        "name": "Croatia",
        "native": "Hrvatska",
        "phone": "385",
        "continent": "EU",
        "capital": "Zagreb",
        "currency": "HRK",
        "languages": [
            "hr"
        ],
        "emoji": "🇭🇷",
        "emojiU": "U+1F1ED U+1F1F7"
    },
    "HT": {
        "name": "Haiti",
        "native": "Haïti",
        "phone": "509",
        "continent": "NA",
        "capital": "Port-au-Prince",
        "currency": "HTG,USD",
        "languages": [
            "fr",
            "ht"
        ],
        "emoji": "🇭🇹",
        "emojiU": "U+1F1ED U+1F1F9"
    },
    "HU": {
        "name": "Hungary",
        "native": "Magyarország",
        "phone": "36",
        "continent": "EU",
        "capital": "Budapest",
        "currency": "HUF",
        "languages": [
            "hu"
        ],
        "emoji": "🇭🇺",
        "emojiU": "U+1F1ED U+1F1FA"
    },
    "ID": {
        "name": "Indonesia",
        "native": "Indonesia",
        "phone": "62",
        "continent": "AS",
        "capital": "Jakarta",
        "currency": "IDR",
        "languages": [
            "id"
        ],
        "emoji": "🇮🇩",
        "emojiU": "U+1F1EE U+1F1E9"
    },
    "IE": {
        "name": "Ireland",
        "native": "Éire",
        "phone": "353",
        "continent": "EU",
        "capital": "Dublin",
        "currency": "EUR",
        "languages": [
            "ga",
            "en"
        ],
        "emoji": "🇮🇪",
        "emojiU": "U+1F1EE U+1F1EA"
    },
    "IL": {
        "name": "Israel",
        "native": "יִשְׂרָאֵל",
        "phone": "972",
        "continent": "AS",
        "capital": "Jerusalem",
        "currency": "ILS",
        "languages": [
            "he",
            "ar"
        ],
        "emoji": "🇮🇱",
        "emojiU": "U+1F1EE U+1F1F1"
    },
    "IM": {
        "name": "Isle of Man",
        "native": "Isle of Man",
        "phone": "44",
        "continent": "EU",
        "capital": "Douglas",
        "currency": "GBP",
        "languages": [
            "en",
            "gv"
        ],
        "emoji": "🇮🇲",
        "emojiU": "U+1F1EE U+1F1F2"
    },
    "IN": {
        "name": "India",
        "native": "भारत",
        "phone": "91",
        "continent": "AS",
        "capital": "New Delhi",
        "currency": "INR",
        "languages": [
            "hi",
            "en"
        ],
        "emoji": "🇮🇳",
        "emojiU": "U+1F1EE U+1F1F3"
    },
    "IO": {
        "name": "British Indian Ocean Territory",
        "native": "British Indian Ocean Territory",
        "phone": "246",
        "continent": "AS",
        "capital": "Diego Garcia",
        "currency": "USD",
        "languages": [
            "en"
        ],
        "emoji": "🇮🇴",
        "emojiU": "U+1F1EE U+1F1F4"
    },
    "IQ": {
        "name": "Iraq",
        "native": "العراق",
        "phone": "964",
        "continent": "AS",
        "capital": "Baghdad",
        "currency": "IQD",
        "languages": [
            "ar",
            "ku"
        ],
        "emoji": "🇮🇶",
        "emojiU": "U+1F1EE U+1F1F6"
    },
    "IR": {
        "name": "Iran",
        "native": "ایران",
        "phone": "98",
        "continent": "AS",
        "capital": "Tehran",
        "currency": "IRR",
        "languages": [
            "fa"
        ],
        "emoji": "🇮🇷",
        "emojiU": "U+1F1EE U+1F1F7"
    },
    "IS": {
        "name": "Iceland",
        "native": "Ísland",
        "phone": "354",
        "continent": "EU",
        "capital": "Reykjavik",
        "currency": "ISK",
        "languages": [
            "is"
        ],
        "emoji": "🇮🇸",
        "emojiU": "U+1F1EE U+1F1F8"
    },
    "IT": {
        "name": "Italy",
        "native": "Italia",
        "phone": "39",
        "continent": "EU",
        "capital": "Rome",
        "currency": "EUR",
        "languages": [
            "it"
        ],
        "emoji": "🇮🇹",
        "emojiU": "U+1F1EE U+1F1F9"
    },
    "JE": {
        "name": "Jersey",
        "native": "Jersey",
        "phone": "44",
        "continent": "EU",
        "capital": "Saint Helier",
        "currency": "GBP",
        "languages": [
            "en",
            "fr"
        ],
        "emoji": "🇯🇪",
        "emojiU": "U+1F1EF U+1F1EA"
    },
    "JM": {
        "name": "Jamaica",
        "native": "Jamaica",
        "phone": "1876",
        "continent": "NA",
        "capital": "Kingston",
        "currency": "JMD",
        "languages": [
            "en"
        ],
        "emoji": "🇯🇲",
        "emojiU": "U+1F1EF U+1F1F2"
    },
    "JO": {
        "name": "Jordan",
        "native": "الأردن",
        "phone": "962",
        "continent": "AS",
        "capital": "Amman",
        "currency": "JOD",
        "languages": [
            "ar"
        ],
        "emoji": "🇯🇴",
        "emojiU": "U+1F1EF U+1F1F4"
    },
    "JP": {
        "name": "Japan",
        "native": "日本",
        "phone": "81",
        "continent": "AS",
        "capital": "Tokyo",
        "currency": "JPY",
        "languages": [
            "ja"
        ],
        "emoji": "🇯🇵",
        "emojiU": "U+1F1EF U+1F1F5"
    },
    "KE": {
        "name": "Kenya",
        "native": "Kenya",
        "phone": "254",
        "continent": "AF",
        "capital": "Nairobi",
        "currency": "KES",
        "languages": [
            "en",
            "sw"
        ],
        "emoji": "🇰🇪",
        "emojiU": "U+1F1F0 U+1F1EA"
    },
    "KG": {
        "name": "Kyrgyzstan",
        "native": "Кыргызстан",
        "phone": "996",
        "continent": "AS",
        "capital": "Bishkek",
        "currency": "KGS",
        "languages": [
            "ky",
            "ru"
        ],
        "emoji": "🇰🇬",
        "emojiU": "U+1F1F0 U+1F1EC"
    },
    "KH": {
        "name": "Cambodia",
        "native": "Kâmpŭchéa",
        "phone": "855",
        "continent": "AS",
        "capital": "Phnom Penh",
        "currency": "KHR",
        "languages": [
            "km"
        ],
        "emoji": "🇰🇭",
        "emojiU": "U+1F1F0 U+1F1ED"
    },
    "KI": {
        "name": "Kiribati",
        "native": "Kiribati",
        "phone": "686",
        "continent": "OC",
        "capital": "South Tarawa",
        "currency": "AUD",
        "languages": [
            "en"
        ],
        "emoji": "🇰🇮",
        "emojiU": "U+1F1F0 U+1F1EE"
    },
    "KM": {
        "name": "Comoros",
        "native": "Komori",
        "phone": "269",
        "continent": "AF",
        "capital": "Moroni",
        "currency": "KMF",
        "languages": [
            "ar",
            "fr"
        ],
        "emoji": "🇰🇲",
        "emojiU": "U+1F1F0 U+1F1F2"
    },
    "KN": {
        "name": "Saint Kitts and Nevis",
        "native": "Saint Kitts and Nevis",
        "phone": "1869",
        "continent": "NA",
        "capital": "Basseterre",
        "currency": "XCD",
        "languages": [
            "en"
        ],
        "emoji": "🇰🇳",
        "emojiU": "U+1F1F0 U+1F1F3"
    },
    "KP": {
        "name": "North Korea",
        "native": "북한",
        "phone": "850",
        "continent": "AS",
        "capital": "Pyongyang",
        "currency": "KPW",
        "languages": [
            "ko"
        ],
        "emoji": "🇰🇵",
        "emojiU": "U+1F1F0 U+1F1F5"
    },
    "KR": {
        "name": "South Korea",
        "native": "대한민국",
        "phone": "82",
        "continent": "AS",
        "capital": "Seoul",
        "currency": "KRW",
        "languages": [
            "ko"
        ],
        "emoji": "🇰🇷",
        "emojiU": "U+1F1F0 U+1F1F7"
    },
    "KW": {
        "name": "Kuwait",
        "native": "الكويت",
        "phone": "965",
        "continent": "AS",
        "capital": "Kuwait City",
        "currency": "KWD",
        "languages": [
            "ar"
        ],
        "emoji": "🇰🇼",
        "emojiU": "U+1F1F0 U+1F1FC"
    },
    "KY": {
        "name": "Cayman Islands",
        "native": "Cayman Islands",
        "phone": "1345",
        "continent": "NA",
        "capital": "George Town",
        "currency": "KYD",
        "languages": [
            "en"
        ],
        "emoji": "🇰🇾",
        "emojiU": "U+1F1F0 U+1F1FE"
    },
    "KZ": {
        "name": "Kazakhstan",
        "native": "Қазақстан",
        "phone": "76,77",
        "continent": "AS",
        "capital": "Astana",
        "currency": "KZT",
        "languages": [
            "kk",
            "ru"
        ],
        "emoji": "🇰🇿",
        "emojiU": "U+1F1F0 U+1F1FF"
    },
    "LA": {
        "name": "Laos",
        "native": "ສປປລາວ",
        "phone": "856",
        "continent": "AS",
        "capital": "Vientiane",
        "currency": "LAK",
        "languages": [
            "lo"
        ],
        "emoji": "🇱🇦",
        "emojiU": "U+1F1F1 U+1F1E6"
    },
    "LB": {
        "name": "Lebanon",
        "native": "لبنان",
        "phone": "961",
        "continent": "AS",
        "capital": "Beirut",
        "currency": "LBP",
        "languages": [
            "ar",
            "fr"
        ],
        "emoji": "🇱🇧",
        "emojiU": "U+1F1F1 U+1F1E7"
    },
    "LC": {
        "name": "Saint Lucia",
        "native": "Saint Lucia",
        "phone": "1758",
        "continent": "NA",
        "capital": "Castries",
        "currency": "XCD",
        "languages": [
            "en"
        ],
        "emoji": "🇱🇨",
        "emojiU": "U+1F1F1 U+1F1E8"
    },
    "LI": {
        "name": "Liechtenstein",
        "native": "Liechtenstein",
        "phone": "423",
        "continent": "EU",
        "capital": "Vaduz",
        "currency": "CHF",
        "languages": [
            "de"
        ],
        "emoji": "🇱🇮",
        "emojiU": "U+1F1F1 U+1F1EE"
    },
    "LK": {
        "name": "Sri Lanka",
        "native": "śrī laṃkāva",
        "phone": "94",
        "continent": "AS",
        "capital": "Colombo",
        "currency": "LKR",
        "languages": [
            "si",
            "ta"
        ],
        "emoji": "🇱🇰",
        "emojiU": "U+1F1F1 U+1F1F0"
    },
    "LR": {
        "name": "Liberia",
        "native": "Liberia",
        "phone": "231",
        "continent": "AF",
        "capital": "Monrovia",
        "currency": "LRD",
        "languages": [
            "en"
        ],
        "emoji": "🇱🇷",
        "emojiU": "U+1F1F1 U+1F1F7"
    },
    "LS": {
        "name": "Lesotho",
        "native": "Lesotho",
        "phone": "266",
        "continent": "AF",
        "capital": "Maseru",
        "currency": "LSL,ZAR",
        "languages": [
            "en",
            "st"
        ],
        "emoji": "🇱🇸",
        "emojiU": "U+1F1F1 U+1F1F8"
    },
    "LT": {
        "name": "Lithuania",
        "native": "Lietuva",
        "phone": "370",
        "continent": "EU",
        "capital": "Vilnius",
        "currency": "EUR",
        "languages": [
            "lt"
        ],
        "emoji": "🇱🇹",
        "emojiU": "U+1F1F1 U+1F1F9"
    },
    "LU": {
        "name": "Luxembourg",
        "native": "Luxembourg",
        "phone": "352",
        "continent": "EU",
        "capital": "Luxembourg",
        "currency": "EUR",
        "languages": [
            "fr",
            "de",
            "lb"
        ],
        "emoji": "🇱🇺",
        "emojiU": "U+1F1F1 U+1F1FA"
    },
    "LV": {
        "name": "Latvia",
        "native": "Latvija",
        "phone": "371",
        "continent": "EU",
        "capital": "Riga",
        "currency": "EUR",
        "languages": [
            "lv"
        ],
        "emoji": "🇱🇻",
        "emojiU": "U+1F1F1 U+1F1FB"
    },
    "LY": {
        "name": "Libya",
        "native": "‏ليبيا",
        "phone": "218",
        "continent": "AF",
        "capital": "Tripoli",
        "currency": "LYD",
        "languages": [
            "ar"
        ],
        "emoji": "🇱🇾",
        "emojiU": "U+1F1F1 U+1F1FE"
    },
    "MA": {
        "name": "Morocco",
        "native": "المغرب",
        "phone": "212",
        "continent": "AF",
        "capital": "Rabat",
        "currency": "MAD",
        "languages": [
            "ar"
        ],
        "emoji": "🇲🇦",
        "emojiU": "U+1F1F2 U+1F1E6"
    },
    "MC": {
        "name": "Monaco",
        "native": "Monaco",
        "phone": "377",
        "continent": "EU",
        "capital": "Monaco",
        "currency": "EUR",
        "languages": [
            "fr"
        ],
        "emoji": "🇲🇨",
        "emojiU": "U+1F1F2 U+1F1E8"
    },
    "MD": {
        "name": "Moldova",
        "native": "Moldova",
        "phone": "373",
        "continent": "EU",
        "capital": "Chișinău",
        "currency": "MDL",
        "languages": [
            "ro"
        ],
        "emoji": "🇲🇩",
        "emojiU": "U+1F1F2 U+1F1E9"
    },
    "ME": {
        "name": "Montenegro",
        "native": "Црна Гора",
        "phone": "382",
        "continent": "EU",
        "capital": "Podgorica",
        "currency": "EUR",
        "languages": [
            "sr",
            "bs",
            "sq",
            "hr"
        ],
        "emoji": "🇲🇪",
        "emojiU": "U+1F1F2 U+1F1EA"
    },
    "MF": {
        "name": "Saint Martin",
        "native": "Saint-Martin",
        "phone": "590",
        "continent": "NA",
        "capital": "Marigot",
        "currency": "EUR",
        "languages": [
            "en",
            "fr",
            "nl"
        ],
        "emoji": "🇲🇫",
        "emojiU": "U+1F1F2 U+1F1EB"
    },
    "MG": {
        "name": "Madagascar",
        "native": "Madagasikara",
        "phone": "261",
        "continent": "AF",
        "capital": "Antananarivo",
        "currency": "MGA",
        "languages": [
            "fr",
            "mg"
        ],
        "emoji": "🇲🇬",
        "emojiU": "U+1F1F2 U+1F1EC"
    },
    "MH": {
        "name": "Marshall Islands",
        "native": "M̧ajeļ",
        "phone": "692",
        "continent": "OC",
        "capital": "Majuro",
        "currency": "USD",
        "languages": [
            "en",
            "mh"
        ],
        "emoji": "🇲🇭",
        "emojiU": "U+1F1F2 U+1F1ED"
    },
    "MK": {
        "name": "North Macedonia",
        "native": "Северна Македонија",
        "phone": "389",
        "continent": "EU",
        "capital": "Skopje",
        "currency": "MKD",
        "languages": [
            "mk"
        ],
        "emoji": "🇲🇰",
        "emojiU": "U+1F1F2 U+1F1F0"
    },
    "ML": {
        "name": "Mali",
        "native": "Mali",
        "phone": "223",
        "continent": "AF",
        "capital": "Bamako",
        "currency": "XOF",
        "languages": [
            "fr"
        ],
        "emoji": "🇲🇱",
        "emojiU": "U+1F1F2 U+1F1F1"
    },
    "MM": {
        "name": "Myanmar [Burma]",
        "native": "မြန်မာ",
        "phone": "95",
        "continent": "AS",
        "capital": "Naypyidaw",
        "currency": "MMK",
        "languages": [
            "my"
        ],
        "emoji": "🇲🇲",
        "emojiU": "U+1F1F2 U+1F1F2"
    },
    "MN": {
        "name": "Mongolia",
        "native": "Монгол улс",
        "phone": "976",
        "continent": "AS",
        "capital": "Ulan Bator",
        "currency": "MNT",
        "languages": [
            "mn"
        ],
        "emoji": "🇲🇳",
        "emojiU": "U+1F1F2 U+1F1F3"
    },
    "MO": {
        "name": "Macao",
        "native": "澳門",
        "phone": "853",
        "continent": "AS",
        "capital": "",
        "currency": "MOP",
        "languages": [
            "zh",
            "pt"
        ],
        "emoji": "🇲🇴",
        "emojiU": "U+1F1F2 U+1F1F4"
    },
    "MP": {
        "name": "Northern Mariana Islands",
        "native": "Northern Mariana Islands",
        "phone": "1670",
        "continent": "OC",
        "capital": "Saipan",
        "currency": "USD",
        "languages": [
            "en",
            "ch"
        ],
        "emoji": "🇲🇵",
        "emojiU": "U+1F1F2 U+1F1F5"
    },
    "MQ": {
        "name": "Martinique",
        "native": "Martinique",
        "phone": "596",
        "continent": "NA",
        "capital": "Fort-de-France",
        "currency": "EUR",
        "languages": [
            "fr"
        ],
        "emoji": "🇲🇶",
        "emojiU": "U+1F1F2 U+1F1F6"
    },
    "MR": {
        "name": "Mauritania",
        "native": "موريتانيا",
        "phone": "222",
        "continent": "AF",
        "capital": "Nouakchott",
        "currency": "MRU",
        "languages": [
            "ar"
        ],
        "emoji": "🇲🇷",
        "emojiU": "U+1F1F2 U+1F1F7"
    },
    "MS": {
        "name": "Montserrat",
        "native": "Montserrat",
        "phone": "1664",
        "continent": "NA",
        "capital": "Plymouth",
        "currency": "XCD",
        "languages": [
            "en"
        ],
        "emoji": "🇲🇸",
        "emojiU": "U+1F1F2 U+1F1F8"
    },
    "MT": {
        "name": "Malta",
        "native": "Malta",
        "phone": "356",
        "continent": "EU",
        "capital": "Valletta",
        "currency": "EUR",
        "languages": [
            "mt",
            "en"
        ],
        "emoji": "🇲🇹",
        "emojiU": "U+1F1F2 U+1F1F9"
    },
    "MU": {
        "name": "Mauritius",
        "native": "Maurice",
        "phone": "230",
        "continent": "AF",
        "capital": "Port Louis",
        "currency": "MUR",
        "languages": [
            "en"
        ],
        "emoji": "🇲🇺",
        "emojiU": "U+1F1F2 U+1F1FA"
    },
    "MV": {
        "name": "Maldives",
        "native": "Maldives",
        "phone": "960",
        "continent": "AS",
        "capital": "Malé",
        "currency": "MVR",
        "languages": [
            "dv"
        ],
        "emoji": "🇲🇻",
        "emojiU": "U+1F1F2 U+1F1FB"
    },
    "MW": {
        "name": "Malawi",
        "native": "Malawi",
        "phone": "265",
        "continent": "AF",
        "capital": "Lilongwe",
        "currency": "MWK",
        "languages": [
            "en",
            "ny"
        ],
        "emoji": "🇲🇼",
        "emojiU": "U+1F1F2 U+1F1FC"
    },
    "MX": {
        "name": "Mexico",
        "native": "México",
        "phone": "52",
        "continent": "NA",
        "capital": "Mexico City",
        "currency": "MXN",
        "languages": [
            "es"
        ],
        "emoji": "🇲🇽",
        "emojiU": "U+1F1F2 U+1F1FD"
    },
    "MY": {
        "name": "Malaysia",
        "native": "Malaysia",
        "phone": "60",
        "continent": "AS",
        "capital": "Kuala Lumpur",
        "currency": "MYR",
        "languages": [
            "ms"
        ],
        "emoji": "🇲🇾",
        "emojiU": "U+1F1F2 U+1F1FE"
    },
    "MZ": {
        "name": "Mozambique",
        "native": "Moçambique",
        "phone": "258",
        "continent": "AF",
        "capital": "Maputo",
        "currency": "MZN",
        "languages": [
            "pt"
        ],
        "emoji": "🇲🇿",
        "emojiU": "U+1F1F2 U+1F1FF"
    },
    "NA": {
        "name": "Namibia",
        "native": "Namibia",
        "phone": "264",
        "continent": "AF",
        "capital": "Windhoek",
        "currency": "NAD,ZAR",
        "languages": [
            "en",
            "af"
        ],
        "emoji": "🇳🇦",
        "emojiU": "U+1F1F3 U+1F1E6"
    },
    "NC": {
        "name": "New Caledonia",
        "native": "Nouvelle-Calédonie",
        "phone": "687",
        "continent": "OC",
        "capital": "Nouméa",
        "currency": "XPF",
        "languages": [
            "fr"
        ],
        "emoji": "🇳🇨",
        "emojiU": "U+1F1F3 U+1F1E8"
    },
    "NE": {
        "name": "Niger",
        "native": "Niger",
        "phone": "227",
        "continent": "AF",
        "capital": "Niamey",
        "currency": "XOF",
        "languages": [
            "fr"
        ],
        "emoji": "🇳🇪",
        "emojiU": "U+1F1F3 U+1F1EA"
    },
    "NF": {
        "name": "Norfolk Island",
        "native": "Norfolk Island",
        "phone": "672",
        "continent": "OC",
        "capital": "Kingston",
        "currency": "AUD",
        "languages": [
            "en"
        ],
        "emoji": "🇳🇫",
        "emojiU": "U+1F1F3 U+1F1EB"
    },
    "NG": {
        "name": "Nigeria",
        "native": "Nigeria",
        "phone": "234",
        "continent": "AF",
        "capital": "Abuja",
        "currency": "NGN",
        "languages": [
            "en"
        ],
        "emoji": "🇳🇬",
        "emojiU": "U+1F1F3 U+1F1EC"
    },
    "NI": {
        "name": "Nicaragua",
        "native": "Nicaragua",
        "phone": "505",
        "continent": "NA",
        "capital": "Managua",
        "currency": "NIO",
        "languages": [
            "es"
        ],
        "emoji": "🇳🇮",
        "emojiU": "U+1F1F3 U+1F1EE"
    },
    "NL": {
        "name": "Netherlands",
        "native": "Nederland",
        "phone": "31",
        "continent": "EU",
        "capital": "Amsterdam",
        "currency": "EUR",
        "languages": [
            "nl"
        ],
        "emoji": "🇳🇱",
        "emojiU": "U+1F1F3 U+1F1F1"
    },
    "NO": {
        "name": "Norway",
        "native": "Norge",
        "phone": "47",
        "continent": "EU",
        "capital": "Oslo",
        "currency": "NOK",
        "languages": [
            "no",
            "nb",
            "nn"
        ],
        "emoji": "🇳🇴",
        "emojiU": "U+1F1F3 U+1F1F4"
    },
    "NP": {
        "name": "Nepal",
        "native": "नपल",
        "phone": "977",
        "continent": "AS",
        "capital": "Kathmandu",
        "currency": "NPR",
        "languages": [
            "ne"
        ],
        "emoji": "🇳🇵",
        "emojiU": "U+1F1F3 U+1F1F5"
    },
    "NR": {
        "name": "Nauru",
        "native": "Nauru",
        "phone": "674",
        "continent": "OC",
        "capital": "Yaren",
        "currency": "AUD",
        "languages": [
            "en",
            "na"
        ],
        "emoji": "🇳🇷",
        "emojiU": "U+1F1F3 U+1F1F7"
    },
    "NU": {
        "name": "Niue",
        "native": "Niuē",
        "phone": "683",
        "continent": "OC",
        "capital": "Alofi",
        "currency": "NZD",
        "languages": [
            "en"
        ],
        "emoji": "🇳🇺",
        "emojiU": "U+1F1F3 U+1F1FA"
    },
    "NZ": {
        "name": "New Zealand",
        "native": "New Zealand",
        "phone": "64",
        "continent": "OC",
        "capital": "Wellington",
        "currency": "NZD",
        "languages": [
            "en",
            "mi"
        ],
        "emoji": "🇳🇿",
        "emojiU": "U+1F1F3 U+1F1FF"
    },
    "OM": {
        "name": "Oman",
        "native": "عمان",
        "phone": "968",
        "continent": "AS",
        "capital": "Muscat",
        "currency": "OMR",
        "languages": [
            "ar"
        ],
        "emoji": "🇴🇲",
        "emojiU": "U+1F1F4 U+1F1F2"
    },
    "PA": {
        "name": "Panama",
        "native": "Panamá",
        "phone": "507",
        "continent": "NA",
        "capital": "Panama City",
        "currency": "PAB,USD",
        "languages": [
            "es"
        ],
        "emoji": "🇵🇦",
        "emojiU": "U+1F1F5 U+1F1E6"
    },
    "PE": {
        "name": "Peru",
        "native": "Perú",
        "phone": "51",
        "continent": "SA",
        "capital": "Lima",
        "currency": "PEN",
        "languages": [
            "es"
        ],
        "emoji": "🇵🇪",
        "emojiU": "U+1F1F5 U+1F1EA"
    },
    "PF": {
        "name": "French Polynesia",
        "native": "Polynésie française",
        "phone": "689",
        "continent": "OC",
        "capital": "Papeetē",
        "currency": "XPF",
        "languages": [
            "fr"
        ],
        "emoji": "🇵🇫",
        "emojiU": "U+1F1F5 U+1F1EB"
    },
    "PG": {
        "name": "Papua New Guinea",
        "native": "Papua Niugini",
        "phone": "675",
        "continent": "OC",
        "capital": "Port Moresby",
        "currency": "PGK",
        "languages": [
            "en"
        ],
        "emoji": "🇵🇬",
        "emojiU": "U+1F1F5 U+1F1EC"
    },
    "PH": {
        "name": "Philippines",
        "native": "Pilipinas",
        "phone": "63",
        "continent": "AS",
        "capital": "Manila",
        "currency": "PHP",
        "languages": [
            "en"
        ],
        "emoji": "🇵🇭",
        "emojiU": "U+1F1F5 U+1F1ED"
    },
    "PK": {
        "name": "Pakistan",
        "native": "Pakistan",
        "phone": "92",
        "continent": "AS",
        "capital": "Islamabad",
        "currency": "PKR",
        "languages": [
            "en",
            "ur"
        ],
        "emoji": "🇵🇰",
        "emojiU": "U+1F1F5 U+1F1F0"
    },
    "PL": {
        "name": "Poland",
        "native": "Polska",
        "phone": "48",
        "continent": "EU",
        "capital": "Warsaw",
        "currency": "PLN",
        "languages": [
            "pl"
        ],
        "emoji": "🇵🇱",
        "emojiU": "U+1F1F5 U+1F1F1"
    },
    "PM": {
        "name": "Saint Pierre and Miquelon",
        "native": "Saint-Pierre-et-Miquelon",
        "phone": "508",
        "continent": "NA",
        "capital": "Saint-Pierre",
        "currency": "EUR",
        "languages": [
            "fr"
        ],
        "emoji": "🇵🇲",
        "emojiU": "U+1F1F5 U+1F1F2"
    },
    "PN": {
        "name": "Pitcairn Islands",
        "native": "Pitcairn Islands",
        "phone": "64",
        "continent": "OC",
        "capital": "Adamstown",
        "currency": "NZD",
        "languages": [
            "en"
        ],
        "emoji": "🇵🇳",
        "emojiU": "U+1F1F5 U+1F1F3"
    },
    "PR": {
        "name": "Puerto Rico",
        "native": "Puerto Rico",
        "phone": "1787,1939",
        "continent": "NA",
        "capital": "San Juan",
        "currency": "USD",
        "languages": [
            "es",
            "en"
        ],
        "emoji": "🇵🇷",
        "emojiU": "U+1F1F5 U+1F1F7"
    },
    "PS": {
        "name": "Palestine",
        "native": "فلسطين",
        "phone": "970",
        "continent": "AS",
        "capital": "Ramallah",
        "currency": "ILS",
        "languages": [
            "ar"
        ],
        "emoji": "🇵🇸",
        "emojiU": "U+1F1F5 U+1F1F8"
    },
    "PT": {
        "name": "Portugal",
        "native": "Portugal",
        "phone": "351",
        "continent": "EU",
        "capital": "Lisbon",
        "currency": "EUR",
        "languages": [
            "pt"
        ],
        "emoji": "🇵🇹",
        "emojiU": "U+1F1F5 U+1F1F9"
    },
    "PW": {
        "name": "Palau",
        "native": "Palau",
        "phone": "680",
        "continent": "OC",
        "capital": "Ngerulmud",
        "currency": "USD",
        "languages": [
            "en"
        ],
        "emoji": "🇵🇼",
        "emojiU": "U+1F1F5 U+1F1FC"
    },
    "PY": {
        "name": "Paraguay",
        "native": "Paraguay",
        "phone": "595",
        "continent": "SA",
        "capital": "Asunción",
        "currency": "PYG",
        "languages": [
            "es",
            "gn"
        ],
        "emoji": "🇵🇾",
        "emojiU": "U+1F1F5 U+1F1FE"
    },
    "QA": {
        "name": "Qatar",
        "native": "قطر",
        "phone": "974",
        "continent": "AS",
        "capital": "Doha",
        "currency": "QAR",
        "languages": [
            "ar"
        ],
        "emoji": "🇶🇦",
        "emojiU": "U+1F1F6 U+1F1E6"
    },
    "RE": {
        "name": "Réunion",
        "native": "La Réunion",
        "phone": "262",
        "continent": "AF",
        "capital": "Saint-Denis",
        "currency": "EUR",
        "languages": [
            "fr"
        ],
        "emoji": "🇷🇪",
        "emojiU": "U+1F1F7 U+1F1EA"
    },
    "RO": {
        "name": "Romania",
        "native": "România",
        "phone": "40",
        "continent": "EU",
        "capital": "Bucharest",
        "currency": "RON",
        "languages": [
            "ro"
        ],
        "emoji": "🇷🇴",
        "emojiU": "U+1F1F7 U+1F1F4"
    },
    "RS": {
        "name": "Serbia",
        "native": "Србија",
        "phone": "381",
        "continent": "EU",
        "capital": "Belgrade",
        "currency": "RSD",
        "languages": [
            "sr"
        ],
        "emoji": "🇷🇸",
        "emojiU": "U+1F1F7 U+1F1F8"
    },
    "RU": {
        "name": "Russia",
        "native": "Россия",
        "phone": "7",
        "continent": "EU",
        "capital": "Moscow",
        "currency": "RUB",
        "languages": [
            "ru"
        ],
        "emoji": "🇷🇺",
        "emojiU": "U+1F1F7 U+1F1FA"
    },
    "RW": {
        "name": "Rwanda",
        "native": "Rwanda",
        "phone": "250",
        "continent": "AF",
        "capital": "Kigali",
        "currency": "RWF",
        "languages": [
            "rw",
            "en",
            "fr"
        ],
        "emoji": "🇷🇼",
        "emojiU": "U+1F1F7 U+1F1FC"
    },
    "SA": {
        "name": "Saudi Arabia",
        "native": "العربية السعودية",
        "phone": "966",
        "continent": "AS",
        "capital": "Riyadh",
        "currency": "SAR",
        "languages": [
            "ar"
        ],
        "emoji": "🇸🇦",
        "emojiU": "U+1F1F8 U+1F1E6"
    },
    "SB": {
        "name": "Solomon Islands",
        "native": "Solomon Islands",
        "phone": "677",
        "continent": "OC",
        "capital": "Honiara",
        "currency": "SBD",
        "languages": [
            "en"
        ],
        "emoji": "🇸🇧",
        "emojiU": "U+1F1F8 U+1F1E7"
    },
    "SC": {
        "name": "Seychelles",
        "native": "Seychelles",
        "phone": "248",
        "continent": "AF",
        "capital": "Victoria",
        "currency": "SCR",
        "languages": [
            "fr",
            "en"
        ],
        "emoji": "🇸🇨",
        "emojiU": "U+1F1F8 U+1F1E8"
    },
    "SD": {
        "name": "Sudan",
        "native": "السودان",
        "phone": "249",
        "continent": "AF",
        "capital": "Khartoum",
        "currency": "SDG",
        "languages": [
            "ar",
            "en"
        ],
        "emoji": "🇸🇩",
        "emojiU": "U+1F1F8 U+1F1E9"
    },
    "SE": {
        "name": "Sweden",
        "native": "Sverige",
        "phone": "46",
        "continent": "EU",
        "capital": "Stockholm",
        "currency": "SEK",
        "languages": [
            "sv"
        ],
        "emoji": "🇸🇪",
        "emojiU": "U+1F1F8 U+1F1EA"
    },
    "SG": {
        "name": "Singapore",
        "native": "Singapore",
        "phone": "65",
        "continent": "AS",
        "capital": "Singapore",
        "currency": "SGD",
        "languages": [
            "en",
            "ms",
            "ta",
            "zh"
        ],
        "emoji": "🇸🇬",
        "emojiU": "U+1F1F8 U+1F1EC"
    },
    "SH": {
        "name": "Saint Helena",
        "native": "Saint Helena",
        "phone": "290",
        "continent": "AF",
        "capital": "Jamestown",
        "currency": "SHP",
        "languages": [
            "en"
        ],
        "emoji": "🇸🇭",
        "emojiU": "U+1F1F8 U+1F1ED"
    },
    "SI": {
        "name": "Slovenia",
        "native": "Slovenija",
        "phone": "386",
        "continent": "EU",
        "capital": "Ljubljana",
        "currency": "EUR",
        "languages": [
            "sl"
        ],
        "emoji": "🇸🇮",
        "emojiU": "U+1F1F8 U+1F1EE"
    },
    "SJ": {
        "name": "Svalbard and Jan Mayen",
        "native": "Svalbard og Jan Mayen",
        "phone": "4779",
        "continent": "EU",
        "capital": "Longyearbyen",
        "currency": "NOK",
        "languages": [
            "no"
        ],
        "emoji": "🇸🇯",
        "emojiU": "U+1F1F8 U+1F1EF"
    },
    "SK": {
        "name": "Slovakia",
        "native": "Slovensko",
        "phone": "421",
        "continent": "EU",
        "capital": "Bratislava",
        "currency": "EUR",
        "languages": [
            "sk"
        ],
        "emoji": "🇸🇰",
        "emojiU": "U+1F1F8 U+1F1F0"
    },
    "SL": {
        "name": "Sierra Leone",
        "native": "Sierra Leone",
        "phone": "232",
        "continent": "AF",
        "capital": "Freetown",
        "currency": "SLL",
        "languages": [
            "en"
        ],
        "emoji": "🇸🇱",
        "emojiU": "U+1F1F8 U+1F1F1"
    },
    "SM": {
        "name": "San Marino",
        "native": "San Marino",
        "phone": "378",
        "continent": "EU",
        "capital": "City of San Marino",
        "currency": "EUR",
        "languages": [
            "it"
        ],
        "emoji": "🇸🇲",
        "emojiU": "U+1F1F8 U+1F1F2"
    },
    "SN": {
        "name": "Senegal",
        "native": "Sénégal",
        "phone": "221",
        "continent": "AF",
        "capital": "Dakar",
        "currency": "XOF",
        "languages": [
            "fr"
        ],
        "emoji": "🇸🇳",
        "emojiU": "U+1F1F8 U+1F1F3"
    },
    "SO": {
        "name": "Somalia",
        "native": "Soomaaliya",
        "phone": "252",
        "continent": "AF",
        "capital": "Mogadishu",
        "currency": "SOS",
        "languages": [
            "so",
            "ar"
        ],
        "emoji": "🇸🇴",
        "emojiU": "U+1F1F8 U+1F1F4"
    },
    "SR": {
        "name": "Suriname",
        "native": "Suriname",
        "phone": "597",
        "continent": "SA",
        "capital": "Paramaribo",
        "currency": "SRD",
        "languages": [
            "nl"
        ],
        "emoji": "🇸🇷",
        "emojiU": "U+1F1F8 U+1F1F7"
    },
    "SS": {
        "name": "South Sudan",
        "native": "South Sudan",
        "phone": "211",
        "continent": "AF",
        "capital": "Juba",
        "currency": "SSP",
        "languages": [
            "en"
        ],
        "emoji": "🇸🇸",
        "emojiU": "U+1F1F8 U+1F1F8"
    },
    "ST": {
        "name": "São Tomé and Príncipe",
        "native": "São Tomé e Príncipe",
        "phone": "239",
        "continent": "AF",
        "capital": "São Tomé",
        "currency": "STN",
        "languages": [
            "pt"
        ],
        "emoji": "🇸🇹",
        "emojiU": "U+1F1F8 U+1F1F9"
    },
    "SV": {
        "name": "El Salvador",
        "native": "El Salvador",
        "phone": "503",
        "continent": "NA",
        "capital": "San Salvador",
        "currency": "SVC,USD",
        "languages": [
            "es"
        ],
        "emoji": "🇸🇻",
        "emojiU": "U+1F1F8 U+1F1FB"
    },
    "SX": {
        "name": "Sint Maarten",
        "native": "Sint Maarten",
        "phone": "1721",
        "continent": "NA",
        "capital": "Philipsburg",
        "currency": "ANG",
        "languages": [
            "nl",
            "en"
        ],
        "emoji": "🇸🇽",
        "emojiU": "U+1F1F8 U+1F1FD"
    },
    "SY": {
        "name": "Syria",
        "native": "سوريا",
        "phone": "963",
        "continent": "AS",
        "capital": "Damascus",
        "currency": "SYP",
        "languages": [
            "ar"
        ],
        "emoji": "🇸🇾",
        "emojiU": "U+1F1F8 U+1F1FE"
    },
    "SZ": {
        "name": "Swaziland",
        "native": "Swaziland",
        "phone": "268",
        "continent": "AF",
        "capital": "Lobamba",
        "currency": "SZL",
        "languages": [
            "en",
            "ss"
        ],
        "emoji": "🇸🇿",
        "emojiU": "U+1F1F8 U+1F1FF"
    },
    "TC": {
        "name": "Turks and Caicos Islands",
        "native": "Turks and Caicos Islands",
        "phone": "1649",
        "continent": "NA",
        "capital": "Cockburn Town",
        "currency": "USD",
        "languages": [
            "en"
        ],
        "emoji": "🇹🇨",
        "emojiU": "U+1F1F9 U+1F1E8"
    },
    "TD": {
        "name": "Chad",
        "native": "Tchad",
        "phone": "235",
        "continent": "AF",
        "capital": "N'Djamena",
        "currency": "XAF",
        "languages": [
            "fr",
            "ar"
        ],
        "emoji": "🇹🇩",
        "emojiU": "U+1F1F9 U+1F1E9"
    },
    "TF": {
        "name": "French Southern Territories",
        "native": "Territoire des Terres australes et antarctiques fr",
        "phone": "262",
        "continent": "AN",
        "capital": "Port-aux-Français",
        "currency": "EUR",
        "languages": [
            "fr"
        ],
        "emoji": "🇹🇫",
        "emojiU": "U+1F1F9 U+1F1EB"
    },
    "TG": {
        "name": "Togo",
        "native": "Togo",
        "phone": "228",
        "continent": "AF",
        "capital": "Lomé",
        "currency": "XOF",
        "languages": [
            "fr"
        ],
        "emoji": "🇹🇬",
        "emojiU": "U+1F1F9 U+1F1EC"
    },
    "TH": {
        "name": "Thailand",
        "native": "ประเทศไทย",
        "phone": "66",
        "continent": "AS",
        "capital": "Bangkok",
        "currency": "THB",
        "languages": [
            "th"
        ],
        "emoji": "🇹🇭",
        "emojiU": "U+1F1F9 U+1F1ED"
    },
    "TJ": {
        "name": "Tajikistan",
        "native": "Тоҷикистон",
        "phone": "992",
        "continent": "AS",
        "capital": "Dushanbe",
        "currency": "TJS",
        "languages": [
            "tg",
            "ru"
        ],
        "emoji": "🇹🇯",
        "emojiU": "U+1F1F9 U+1F1EF"
    },
    "TK": {
        "name": "Tokelau",
        "native": "Tokelau",
        "phone": "690",
        "continent": "OC",
        "capital": "Fakaofo",
        "currency": "NZD",
        "languages": [
            "en"
        ],
        "emoji": "🇹🇰",
        "emojiU": "U+1F1F9 U+1F1F0"
    },
    "TL": {
        "name": "East Timor",
        "native": "Timor-Leste",
        "phone": "670",
        "continent": "OC",
        "capital": "Dili",
        "currency": "USD",
        "languages": [
            "pt"
        ],
        "emoji": "🇹🇱",
        "emojiU": "U+1F1F9 U+1F1F1"
    },
    "TM": {
        "name": "Turkmenistan",
        "native": "Türkmenistan",
        "phone": "993",
        "continent": "AS",
        "capital": "Ashgabat",
        "currency": "TMT",
        "languages": [
            "tk",
            "ru"
        ],
        "emoji": "🇹🇲",
        "emojiU": "U+1F1F9 U+1F1F2"
    },
    "TN": {
        "name": "Tunisia",
        "native": "تونس",
        "phone": "216",
        "continent": "AF",
        "capital": "Tunis",
        "currency": "TND",
        "languages": [
            "ar"
        ],
        "emoji": "🇹🇳",
        "emojiU": "U+1F1F9 U+1F1F3"
    },
    "TO": {
        "name": "Tonga",
        "native": "Tonga",
        "phone": "676",
        "continent": "OC",
        "capital": "Nuku'alofa",
        "currency": "TOP",
        "languages": [
            "en",
            "to"
        ],
        "emoji": "🇹🇴",
        "emojiU": "U+1F1F9 U+1F1F4"
    },
    "TR": {
        "name": "Turkey",
        "native": "Türkiye",
        "phone": "90",
        "continent": "AS",
        "capital": "Ankara",
        "currency": "TRY",
        "languages": [
            "tr"
        ],
        "emoji": "🇹🇷",
        "emojiU": "U+1F1F9 U+1F1F7"
    },
    "TT": {
        "name": "Trinidad and Tobago",
        "native": "Trinidad and Tobago",
        "phone": "1868",
        "continent": "NA",
        "capital": "Port of Spain",
        "currency": "TTD",
        "languages": [
            "en"
        ],
        "emoji": "🇹🇹",
        "emojiU": "U+1F1F9 U+1F1F9"
    },
    "TV": {
        "name": "Tuvalu",
        "native": "Tuvalu",
        "phone": "688",
        "continent": "OC",
        "capital": "Funafuti",
        "currency": "AUD",
        "languages": [
            "en"
        ],
        "emoji": "🇹🇻",
        "emojiU": "U+1F1F9 U+1F1FB"
    },
    "TW": {
        "name": "Taiwan",
        "native": "臺灣",
        "phone": "886",
        "continent": "AS",
        "capital": "Taipei",
        "currency": "TWD",
        "languages": [
            "zh"
        ],
        "emoji": "🇹🇼",
        "emojiU": "U+1F1F9 U+1F1FC"
    },
    "TZ": {
        "name": "Tanzania",
        "native": "Tanzania",
        "phone": "255",
        "continent": "AF",
        "capital": "Dodoma",
        "currency": "TZS",
        "languages": [
            "sw",
            "en"
        ],
        "emoji": "🇹🇿",
        "emojiU": "U+1F1F9 U+1F1FF"
    },
    "UA": {
        "name": "Ukraine",
        "native": "Україна",
        "phone": "380",
        "continent": "EU",
        "capital": "Kyiv",
        "currency": "UAH",
        "languages": [
            "uk"
        ],
        "emoji": "🇺🇦",
        "emojiU": "U+1F1FA U+1F1E6"
    },
    "UG": {
        "name": "Uganda",
        "native": "Uganda",
        "phone": "256",
        "continent": "AF",
        "capital": "Kampala",
        "currency": "UGX",
        "languages": [
            "en",
            "sw"
        ],
        "emoji": "🇺🇬",
        "emojiU": "U+1F1FA U+1F1EC"
    },
    "UM": {
        "name": "U.S. Minor Outlying Islands",
        "native": "United States Minor Outlying Islands",
        "phone": "1",
        "continent": "OC",
        "capital": "",
        "currency": "USD",
        "languages": [
            "en"
        ],
        "emoji": "🇺🇲",
        "emojiU": "U+1F1FA U+1F1F2"
    },
    "US": {
        "name": "United States",
        "native": "United States",
        "phone": "1",
        "continent": "NA",
        "capital": "Washington D.C.",
        "currency": "USD,USN,USS",
        "languages": [
            "en"
        ],
        "emoji": "🇺🇸",
        "emojiU": "U+1F1FA U+1F1F8"
    },
    "UY": {
        "name": "Uruguay",
        "native": "Uruguay",
        "phone": "598",
        "continent": "SA",
        "capital": "Montevideo",
        "currency": "UYI,UYU",
        "languages": [
            "es"
        ],
        "emoji": "🇺🇾",
        "emojiU": "U+1F1FA U+1F1FE"
    },
    "UZ": {
        "name": "Uzbekistan",
        "native": "O‘zbekiston",
        "phone": "998",
        "continent": "AS",
        "capital": "Tashkent",
        "currency": "UZS",
        "languages": [
            "uz",
            "ru"
        ],
        "emoji": "🇺🇿",
        "emojiU": "U+1F1FA U+1F1FF"
    },
    "VA": {
        "name": "Vatican City",
        "native": "Vaticano",
        "phone": "379",
        "continent": "EU",
        "capital": "Vatican City",
        "currency": "EUR",
        "languages": [
            "it",
            "la"
        ],
        "emoji": "🇻🇦",
        "emojiU": "U+1F1FB U+1F1E6"
    },
    "VC": {
        "name": "Saint Vincent and the Grenadines",
        "native": "Saint Vincent and the Grenadines",
        "phone": "1784",
        "continent": "NA",
        "capital": "Kingstown",
        "currency": "XCD",
        "languages": [
            "en"
        ],
        "emoji": "🇻🇨",
        "emojiU": "U+1F1FB U+1F1E8"
    },
    "VE": {
        "name": "Venezuela",
        "native": "Venezuela",
        "phone": "58",
        "continent": "SA",
        "capital": "Caracas",
        "currency": "VES",
        "languages": [
            "es"
        ],
        "emoji": "🇻🇪",
        "emojiU": "U+1F1FB U+1F1EA"
    },
    "VG": {
        "name": "British Virgin Islands",
        "native": "British Virgin Islands",
        "phone": "1284",
        "continent": "NA",
        "capital": "Road Town",
        "currency": "USD",
        "languages": [
            "en"
        ],
        "emoji": "🇻🇬",
        "emojiU": "U+1F1FB U+1F1EC"
    },
    "VI": {
        "name": "U.S. Virgin Islands",
        "native": "United States Virgin Islands",
        "phone": "1340",
        "continent": "NA",
        "capital": "Charlotte Amalie",
        "currency": "USD",
        "languages": [
            "en"
        ],
        "emoji": "🇻🇮",
        "emojiU": "U+1F1FB U+1F1EE"
    },
    "VN": {
        "name": "Vietnam",
        "native": "Việt Nam",
        "phone": "84",
        "continent": "AS",
        "capital": "Hanoi",
        "currency": "VND",
        "languages": [
            "vi"
        ],
        "emoji": "🇻🇳",
        "emojiU": "U+1F1FB U+1F1F3"
    },
    "VU": {
        "name": "Vanuatu",
        "native": "Vanuatu",
        "phone": "678",
        "continent": "OC",
        "capital": "Port Vila",
        "currency": "VUV",
        "languages": [
            "bi",
            "en",
            "fr"
        ],
        "emoji": "🇻🇺",
        "emojiU": "U+1F1FB U+1F1FA"
    },
    "WF": {
        "name": "Wallis and Futuna",
        "native": "Wallis et Futuna",
        "phone": "681",
        "continent": "OC",
        "capital": "Mata-Utu",
        "currency": "XPF",
        "languages": [
            "fr"
        ],
        "emoji": "🇼🇫",
        "emojiU": "U+1F1FC U+1F1EB"
    },
    "WS": {
        "name": "Samoa",
        "native": "Samoa",
        "phone": "685",
        "continent": "OC",
        "capital": "Apia",
        "currency": "WST",
        "languages": [
            "sm",
            "en"
        ],
        "emoji": "🇼🇸",
        "emojiU": "U+1F1FC U+1F1F8"
    },
    "XK": {
        "name": "Kosovo",
        "native": "Republika e Kosovës",
        "phone": "377,381,383,386",
        "continent": "EU",
        "capital": "Pristina",
        "currency": "EUR",
        "languages": [
            "sq",
            "sr"
        ],
        "emoji": "🇽🇰",
        "emojiU": "U+1F1FD U+1F1F0"
    },
    "YE": {
        "name": "Yemen",
        "native": "اليَمَن",
        "phone": "967",
        "continent": "AS",
        "capital": "Sana'a",
        "currency": "YER",
        "languages": [
            "ar"
        ],
        "emoji": "🇾🇪",
        "emojiU": "U+1F1FE U+1F1EA"
    },
    "YT": {
        "name": "Mayotte",
        "native": "Mayotte",
        "phone": "262",
        "continent": "AF",
        "capital": "Mamoudzou",
        "currency": "EUR",
        "languages": [
            "fr"
        ],
        "emoji": "🇾🇹",
        "emojiU": "U+1F1FE U+1F1F9"
    },
    "ZA": {
        "name": "South Africa",
        "native": "South Africa",
        "phone": "27",
        "continent": "AF",
        "capital": "Pretoria",
        "currency": "ZAR",
        "languages": [
            "af",
            "en",
            "nr",
            "st",
            "ss",
            "tn",
            "ts",
            "ve",
            "xh",
            "zu"
        ],
        "emoji": "🇿🇦",
        "emojiU": "U+1F1FF U+1F1E6"
    },
    "ZM": {
        "name": "Zambia",
        "native": "Zambia",
        "phone": "260",
        "continent": "AF",
        "capital": "Lusaka",
        "currency": "ZMW",
        "languages": [
            "en"
        ],
        "emoji": "🇿🇲",
        "emojiU": "U+1F1FF U+1F1F2"
    },
    "ZW": {
        "name": "Zimbabwe",
        "native": "Zimbabwe",
        "phone": "263",
        "continent": "AF",
        "capital": "Harare",
        "currency": "USD,ZAR,BWP,GBP,AUD,CNY,INR,JPY",
        "languages": [
            "en",
            "sn",
            "nd"
        ],
        "emoji": "🇿🇼",
        "emojiU": "U+1F1FF U+1F1FC"
    }
};


/***/ }),

/***/ "GpEA":
/*!********************************************************!*\
  !*** ./src/app/components/footer/footer.component.css ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "IYfF":
/*!*************************************************!*\
  !*** ./src/app/shared/services/auth.service.ts ***!
  \*************************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../environments/environment */ "AytR");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};





var AuthService = /** @class */ (function () {
    function AuthService(http, router) {
        this.http = http;
        this.router = router;
        this.accessToken = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](null);
        this.isLoggedIn = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](false);
    }
    AuthService.prototype.checkAuthenticationState = function () {
        return __awaiter(this, void 0, void 0, function () {
            var token, parsedToken;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, localStorage.getItem('eldaLmsToken')];
                    case 1:
                        token = _a.sent();
                        parsedToken = JSON.parse(token);
                        if (parsedToken) {
                            console.log('parsedToken.access_token', parsedToken.access_token);
                            this.isLoggedIn.next(true);
                            this.accessToken.next(parsedToken.access_token);
                            this.router.navigateByUrl('/');
                        }
                        else {
                            this.router.navigateByUrl('/login');
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    AuthService.prototype.setToken = function (token) {
        this.isLoggedIn.next(true);
        this.accessToken.next(token);
        this.storeToken(token);
    };
    AuthService.prototype.storeToken = function (token) {
        return __awaiter(this, void 0, void 0, function () {
            var accessToken;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log('token', token);
                        accessToken = JSON.stringify({ access_token: token });
                        console.log('accessToken', accessToken);
                        return [4 /*yield*/, localStorage.setItem('eldaLmsToken', accessToken)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Authenticate
     */
    AuthService.prototype.login = function (payload) {
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].restApiUrl + "/api/auth/login", payload);
    };
    AuthService.prototype.register = function (payload) {
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].restApiUrl + "/api/auth/register", payload);
    };
    AuthService.prototype.logout = function () {
        // set variable to null
        this.isLoggedIn.next(false);
        this.accessToken.next(null);
        localStorage.removeItem('eldaLmsToken');
        this.router.navigateByUrl('/login');
    };
    AuthService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
    ]; };
    AuthService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "KKA+":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/sidebar/sidebar.component.html ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"logo\">\n    <a class=\"navbar-brand mt-4 ml-4\" [routerLink]=\"['/']\">Eloquent Data</a>\n</div>\n<div class=\"sidebar-wrapper\">\n  <div *ngIf=\"isMobileMenu()\">\n    <ul class=\"nav navbar-nav nav-mobile-menu\">\n        <li class=\"nav-item dropdown\">\n            <a class=\"nav-link\"  id=\"userProfile\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n                <i class=\"material-icons\">person</i>\n                <p>\n                    <span class=\"d-lg-none d-md-block\">Profile</span>\n                </p>\n            </a>\n            <div class=\"dropdown-menu dropdown-menu-right\" aria-labelledby=\"userProfile\">\n                <a class=\"dropdown-item\" [routerLink]=\"['/me']\">My Profile</a>\n                <a class=\"dropdown-item\" (click)=\"onLogout()\">Log Out</a>\n            </div>\n        </li>\n    </ul>\n  </div>\n    <ul class=\"nav\">\n        <li routerLinkActive=\"active\" *ngFor=\"let menuItem of menuItems\" class=\"{{menuItem.class}} nav-item\">\n            <a class=\"nav-link\" [routerLink]=\"[menuItem.path]\">\n                <i class=\"material-icons\">{{menuItem.icon}}</i>\n                <p>{{menuItem.title}}</p>\n            </a>\n        </li>\n    </ul>\n</div>\n");

/***/ }),

/***/ "LmEr":
/*!*******************************************************!*\
  !*** ./src/app/components/footer/footer.component.ts ***!
  \*******************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _raw_loader_footer_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./footer.component.html */ "WwN9");
/* harmony import */ var _footer_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./footer.component.css */ "GpEA");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
        this.test = new Date();
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent.ctorParameters = function () { return []; };
    FooterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-footer',
            template: _raw_loader_footer_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_footer_component_css__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "P6kD":
/*!****************************************************************!*\
  !*** ./src/app/layouts/admin-layout/admin-layout.component.ts ***!
  \****************************************************************/
/*! exports provided: AdminLayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminLayoutComponent", function() { return AdminLayoutComponent; });
/* harmony import */ var _raw_loader_admin_layout_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./admin-layout.component.html */ "AK6u");
/* harmony import */ var _admin_layout_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./admin-layout.component.scss */ "vtrx");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var rxjs_add_operator_filter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/add/operator/filter */ "fjAU");
/* harmony import */ var rxjs_add_operator_filter__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(rxjs_add_operator_filter__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var perfect_scrollbar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! perfect-scrollbar */ "t/UT");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! jquery */ "EVdn");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var app_shared_services_auth_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! app/shared/services/auth.service */ "IYfF");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var AdminLayoutComponent = /** @class */ (function () {
    function AdminLayoutComponent(location, router, authService) {
        this.location = location;
        this.router = router;
        this.authService = authService;
        this.yScrollStack = [];
        this.authService.checkAuthenticationState();
        // this.authService.logout()
    }
    AdminLayoutComponent.prototype.ngOnInit = function () {
        var _this = this;
        var isWindows = navigator.platform.indexOf('Win') > -1 ? true : false;
        if (isWindows && !document.getElementsByTagName('body')[0].classList.contains('sidebar-mini')) {
            // if we are on windows OS we activate the perfectScrollbar function
            document.getElementsByTagName('body')[0].classList.add('perfect-scrollbar-on');
        }
        else {
            document.getElementsByTagName('body')[0].classList.remove('perfect-scrollbar-off');
        }
        var elemMainPanel = document.querySelector('.main-panel');
        var elemSidebar = document.querySelector('.sidebar .sidebar-wrapper');
        this.location.subscribe(function (ev) {
            _this.lastPoppedUrl = ev.url;
        });
        this.router.events.subscribe(function (event) {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_5__["NavigationStart"]) {
                if (event.url != _this.lastPoppedUrl)
                    _this.yScrollStack.push(window.scrollY);
            }
            else if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_5__["NavigationEnd"]) {
                if (event.url == _this.lastPoppedUrl) {
                    _this.lastPoppedUrl = undefined;
                    window.scrollTo(0, _this.yScrollStack.pop());
                }
                else
                    window.scrollTo(0, 0);
            }
        });
        this._router = this.router.events.filter(function (event) { return event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_5__["NavigationEnd"]; }).subscribe(function (event) {
            elemMainPanel.scrollTop = 0;
            elemSidebar.scrollTop = 0;
        });
        if (window.matchMedia("(min-width: 960px)").matches && !this.isMac()) {
            var ps = new perfect_scrollbar__WEBPACK_IMPORTED_MODULE_6__["default"](elemMainPanel);
            ps = new perfect_scrollbar__WEBPACK_IMPORTED_MODULE_6__["default"](elemSidebar);
        }
        var window_width = jquery__WEBPACK_IMPORTED_MODULE_7__(window).width();
        var $sidebar = jquery__WEBPACK_IMPORTED_MODULE_7__('.sidebar');
        var $sidebar_responsive = jquery__WEBPACK_IMPORTED_MODULE_7__('body > .navbar-collapse');
        var $sidebar_img_container = $sidebar.find('.sidebar-background');
        if ($sidebar.length !== 0) {
            $sidebar.attr('data-color', 'azure');
        }
    };
    AdminLayoutComponent.prototype.ngAfterViewInit = function () {
        this.runOnRouteChange();
    };
    AdminLayoutComponent.prototype.isMaps = function (path) {
        var titlee = this.location.prepareExternalUrl(this.location.path());
        titlee = titlee.slice(1);
        if (path == titlee) {
            return false;
        }
        else {
            return true;
        }
    };
    AdminLayoutComponent.prototype.runOnRouteChange = function () {
        if (window.matchMedia("(min-width: 960px)").matches && !this.isMac()) {
            var elemMainPanel = document.querySelector('.main-panel');
            var ps = new perfect_scrollbar__WEBPACK_IMPORTED_MODULE_6__["default"](elemMainPanel);
            ps.update();
        }
    };
    AdminLayoutComponent.prototype.isMac = function () {
        var bool = false;
        if (navigator.platform.toUpperCase().indexOf('MAC') >= 0 || navigator.platform.toUpperCase().indexOf('IPAD') >= 0) {
            bool = true;
        }
        return bool;
    };
    AdminLayoutComponent.ctorParameters = function () { return [
        { type: _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
        { type: app_shared_services_auth_service__WEBPACK_IMPORTED_MODULE_8__["AuthService"] }
    ]; };
    AdminLayoutComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-admin-layout',
            template: _raw_loader_admin_layout_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_admin_layout_component_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [_angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
            app_shared_services_auth_service__WEBPACK_IMPORTED_MODULE_8__["AuthService"]])
    ], AdminLayoutComponent);
    return AdminLayoutComponent;
}());



/***/ }),

/***/ "S6iF":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/navbar/navbar.component.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<nav class=\"navbar navbar-expand-lg navbar-transparent  navbar-absolute fixed-top\">\n    <div class=\"container-fluid\">\n        <div class=\"navbar-wrapper\">\n          <a class=\"navbar-brand\" [routerLink]=\"['/']\">{{getTitle()}}</a>\n        </div>\n        <button mat-raised-button class=\"navbar-toggler\" type=\"button\" (click)=\"sidebarToggle()\">\n            <span class=\"sr-only\">Toggle navigation</span>\n            <span class=\"navbar-toggler-icon icon-bar\"></span>\n            <span class=\"navbar-toggler-icon icon-bar\"></span>\n            <span class=\"navbar-toggler-icon icon-bar\"></span>\n        </button>\n        <div class=\"collapse navbar-collapse justify-content-end\" id=\"navigation\">\n            <ul class=\"navbar-nav\">\n                <li class=\"nav-item dropdown\">\n                    <a class=\"nav-link\" href=\"javascript:void(0)\" id=\"userProfile\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n                        <i class=\"material-icons\">person</i>\n                        <p>\n                            <span class=\"d-lg-none d-md-block\">Account</span>\n                        </p>\n                    </a>\n                    <div class=\"dropdown-menu dropdown-menu-right\" aria-labelledby=\"userProfile\">\n                        <a class=\"dropdown-item\" [routerLink]=\"['/me']\">My Profile</a>\n                        <a class=\"dropdown-item\" (click)=\"onLogout()\">Log Out</a>\n                    </div>\n                </li>\n            </ul>\n        </div>\n    </div>\n</nav>\n");

/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./app.component.html */ "VzVu");
/* harmony import */ var _app_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component.css */ "A3xY");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _shared_services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./shared/services/auth.service */ "IYfF");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AppComponent = /** @class */ (function () {
    function AppComponent(authService) {
        this.authService = authService;
    }
    AppComponent.prototype.ngOnInit = function () {
        this.authService.checkAuthenticationState();
    };
    AppComponent.ctorParameters = function () { return [
        { type: _shared_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] }
    ]; };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-root',
            template: _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_app_component_css__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [_shared_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "VzVu":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<router-outlet></router-outlet>\n");

/***/ }),

/***/ "WwN9":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/footer/footer.component.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<footer class=\"footer \">\n    <div class=\"container-fluid\">\n        <nav class=\"pull-left\">\n            <ul>\n                <li>\n                    <a href=\"https://www.creative-tim.com\">\n                        Creative Tim\n                    </a>\n                </li>\n                <li>\n                    <a href=\"https://creative-tim.com/about-us\">\n                        About Us\n                    </a>\n                </li>\n                <li>\n                    <a href=\"http://blog.creative-tim.com\">\n                        Blog\n                    </a>\n                </li>\n                <li>\n                    <a href=\"https://www.creative-tim.com/license\">\n                        Licenses\n                    </a>\n                </li>\n            </ul>\n        </nav>\n        <div class=\"copyright pull-right\">\n            &copy;\n            {{test | date: 'yyyy'}}, made with love by\n            <a href=\"https://www.creative-tim.com\" target=\"_blank\">Creative Tim</a> for a better web.\n        </div>\n    </div>\n</footer>\n");

/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _app_routing__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.routing */ "beVS");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/components.module */ "j1ZV");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _layouts_admin_layout_admin_layout_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./layouts/admin-layout/admin-layout.component */ "P6kD");
/* harmony import */ var _pages_signup_signup_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pages/signup/signup.component */ "o97b");
/* harmony import */ var _pages_login_login_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./pages/login/login.component */ "D8EZ");
/* harmony import */ var _pages_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./pages/page-not-found/page-not-found.component */ "BgzB");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ngx-spinner */ "JqCM");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_0__["BrowserAnimationsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                _components_components_module__WEBPACK_IMPORTED_MODULE_6__["ComponentsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"],
                _app_routing__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
                ngx_spinner__WEBPACK_IMPORTED_MODULE_12__["NgxSpinnerModule"],
            ],
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"],
                _layouts_admin_layout_admin_layout_component__WEBPACK_IMPORTED_MODULE_8__["AdminLayoutComponent"],
                _pages_login_login_component__WEBPACK_IMPORTED_MODULE_10__["LoginComponent"],
                _pages_signup_signup_component__WEBPACK_IMPORTED_MODULE_9__["SignupComponent"],
                _pages_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_11__["PageNotFoundComponent"],
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "aPpU":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/page-not-found/page-not-found.component.html ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>page-not-found works!</p>\n");

/***/ }),

/***/ "aTJU":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/signup/signup.component.html ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"login-page\">\n  <div class=\"row\">\n    <div class=\"col-lg-6 col-md-6 col-sm-12 full-image back-img\">\n      <a class=\"navbar-brand mt-4 ml-4\" [routerLink]=\"['/']\"><img src=\"./assets/img/logo2.png\" alt=\"logo\" height=\"60px\"></a>\n    </div>\n    <div class=\"col-lg-6 col-md-6 col-sm-12 full-colour\">\n      <div class=\"mobile-logo\">\n        <a class=\"navbar-brand mt-4 ml-4\" [routerLink]=\"['/']\"><img src=\"./assets/img/logo.png\" alt=\"logo\" height=\"60px\"></a>\n      </div>\n      <div class=\"signup-container\">\n        <div class=\"signup-form\">\n          <form id=\"SignUpValidation\" [formGroup]=\"registerForm\" (ngSubmit)=\"onSubmit()\">\n            <h2 class=\"card-title mt-4\">Create an account</h2>\n            <div class=\"row\">\n              <div class=\"col-lg-6 col-md-6 col-sm-12\">\n                <div class=\"form-group\">\n                  <label for=\"firstname\" class=\"bmd-label-floating\"> First Name *</label>\n                  <input type=\"text\" class=\"form-control\" id=\"firstname\" required=\"true\" name=\"firstname\" formControlName=\"firstName\">\n                </div>\n              </div>\n              <div class=\"col-lg-6 col-md-6 col-sm-12\">\n                <div class=\"form-group\">\n                  <label for=\"lastname\" class=\"bmd-label-floating\"> Last Name *</label>\n                  <input type=\"text\" class=\"form-control\" id=\"lastname\" required=\"true\" name=\"lastname\" formControlName=\"lastName\">\n                </div>\n              </div>\n              <div class=\"col-6\">\n                <div class=\"form-group\">\n                  <label>Select Gender</label>\n                  <select class=\"selectpicker form-control\" title=\"Single Select\" formControlName=\"gender\">\n                    <option selected disabled> Gender </option>\n                    <option value=\"MALE\"> Male </option>\n                    <option value=\"FEMALE\"> Female </option>\n                    <option value=\"OTHER\"> Others </option>\n                  </select>\n                </div>\n              </div>\n              <div class=\"col-6\">\n                <div class=\"form-group\">\n                  <label>Choose country</label>\n                  <select class=\"form-control\" formControlName=\"country\">\n                    <!-- <option selected disabled> Country </option> -->\n                    \n                    <option *ngFor=\"let country of africanCountries\" value={{country.name}}> {{country.name}} </option>\n                  </select>\n                </div>\n              </div>\n\n              <div class=\"col-12\">\n                <div class=\"form-group\">\n                  <label for=\"email\" class=\"bmd-label-floating\"> Email *</label>\n                  <input type=\"email\" class=\"form-control\" id=\"email\" required=\"true\" name=\"email\" formControlName=\"userEmail\">\n                </div>\n              </div>\n\n              <div class=\"col-lg-6 col-md-6 col-sm-12 \">\n                <div class=\"form-group\">\n                  <label for=\"examplePassword\" class=\"bmd-label-floating\"> Password *</label>\n                  <input type=\"password\" class=\"form-control\" id=\"examplePassword\" required=\"true\" name=\"password\" formControlName=\"password\">\n                </div>\n              </div>\n              <div class=\"col-lg-6 col-md-6 col-sm-12 \">\n                <div class=\"form-group\">\n                  <label for=\"examplePassword2\" class=\"bmd-label-floating\">Confirm Password *</label>\n                  <input type=\"password\" class=\"form-control\" id=\"examplePassword2\" required=\"true\" name=\"password2\" formControlName=\"password2\">\n                </div>\n              </div>\n            </div>\n\n            <div class=\"form-check mt-4\">\n              <label class=\"form-check-label\">\n                <input class=\"form-check-input\" type=\"checkbox\" value=\"\" id=\"terms\" formControlName=\"agreement\"> I agree to the&nbsp;\n                <span class=\"form-check-sign\">\n                  <span class=\"check\"></span>\n                </span>\n              </label> <a [routerLink]=\"['/login']\" routerLinkActive=\"router-link-active\" ><u>Term of Service</u></a>\n            </div>\n            <small *ngIf=\"!registerForm.value.agreement\">Agree to the terms of service to continue</small>\n\n            <ngx-spinner></ngx-spinner>\n\n            <button type=\"submit\" class=\"btn btn-primary btn-block mt-4\" [disabled]=\"!registerForm.valid\">Create an account</button>\n\n            <div class=\"mt-4\">Have an existing account? <a class=\"sign-link\" [routerLink]=\"['/login']\">Log in</a></div>\n          </form>\n          <ul *ngIf=\"registerForm.invalid && (registerForm.dirty || registerForm.touched)\">\n            <li *ngIf=\"registerForm.controls.firstName.errors?.required\">First name is required</li>\n            <li *ngIf=\"registerForm.controls.lastName.errors?.required\">Last name is required</li>\n            <li *ngIf=\"registerForm.controls.gender.errors?.required\">Specify your gender</li>\n            <li *ngIf=\"registerForm.controls.country.errors?.required\">Specify your country</li>\n            <li *ngIf=\"registerForm.controls.userEmail.errors?.required\">Email is required</li>\n            <li *ngIf=\"registerForm.controls.password.errors?.required\">Password is required</li>\n            <li *ngIf=\"registerForm.controls.password2.errors?.required\">Confirm your password</li>\n            <li *ngIf=\"registerForm.controls.userEmail.errors?.email\">Enter valid email.</li>\n            <li *ngIf=\"registerForm.controls.password.errors?.minlength\">Password must be at least 8 characters.</li>\n            <li *ngIf=\"registerForm.controls.password2.errors?.minlength\">Confirm password must be at least 8 characters.</li>\n          </ul>\n          <ul>\n            <li *ngIf=\"registerForm.value.password!=registerForm.value.password2\">Password does not match</li>\n          </ul>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>");

/***/ }),

/***/ "beVS":
/*!********************************!*\
  !*** ./src/app/app.routing.ts ***!
  \********************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _layouts_admin_layout_admin_layout_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./layouts/admin-layout/admin-layout.component */ "P6kD");
/* harmony import */ var _pages_signup_signup_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/signup/signup.component */ "o97b");
/* harmony import */ var _pages_login_login_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/login/login.component */ "D8EZ");
/* harmony import */ var _pages_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pages/page-not-found/page-not-found.component */ "BgzB");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var routes = [
    {
        path: 'login',
        component: _pages_login_login_component__WEBPACK_IMPORTED_MODULE_6__["LoginComponent"],
    },
    {
        path: 'register',
        component: _pages_signup_signup_component__WEBPACK_IMPORTED_MODULE_5__["SignupComponent"],
    },
    {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full',
    },
    {
        path: '',
        component: _layouts_admin_layout_admin_layout_component__WEBPACK_IMPORTED_MODULE_4__["AdminLayoutComponent"],
        children: [{
                path: '',
                loadChildren: './layouts/admin-layout/admin-layout.module#AdminLayoutModule'
            }]
    },
    {
        path: '**',
        component: _pages_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_7__["PageNotFoundComponent"]
    },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forRoot(routes)
            ],
            exports: [],
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "crnd":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./layouts/admin-layout/admin-layout.module": [
		"IqXj",
		"layouts-admin-layout-admin-layout-module"
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "crnd";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "hrlM":
/*!*******************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.ts ***!
  \*******************************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var _raw_loader_navbar_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./navbar.component.html */ "S6iF");
/* harmony import */ var _navbar_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./navbar.component.css */ "DIg/");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../sidebar/sidebar.component */ "zBoC");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var app_shared_services_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! app/shared/services/auth.service */ "IYfF");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var NavbarComponent = /** @class */ (function () {
    function NavbarComponent(location, element, router, authService) {
        this.element = element;
        this.router = router;
        this.authService = authService;
        this.mobile_menu_visible = 0;
        this.location = location;
        this.sidebarVisible = false;
    }
    NavbarComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.listTitles = _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_3__["ROUTES"].filter(function (listTitle) { return listTitle; });
        var navbar = this.element.nativeElement;
        this.toggleButton = navbar.getElementsByClassName('navbar-toggler')[0];
        this.router.events.subscribe(function (event) {
            _this.sidebarClose();
            var $layer = document.getElementsByClassName('close-layer')[0];
            if ($layer) {
                $layer.remove();
                _this.mobile_menu_visible = 0;
            }
        });
    };
    NavbarComponent.prototype.sidebarOpen = function () {
        var toggleButton = this.toggleButton;
        var body = document.getElementsByTagName('body')[0];
        setTimeout(function () {
            toggleButton.classList.add('toggled');
        }, 500);
        body.classList.add('nav-open');
        this.sidebarVisible = true;
    };
    ;
    NavbarComponent.prototype.sidebarClose = function () {
        var body = document.getElementsByTagName('body')[0];
        this.toggleButton.classList.remove('toggled');
        this.sidebarVisible = false;
        body.classList.remove('nav-open');
    };
    ;
    NavbarComponent.prototype.sidebarToggle = function () {
        // const toggleButton = this.toggleButton;
        // const body = document.getElementsByTagName('body')[0];
        var $toggle = document.getElementsByClassName('navbar-toggler')[0];
        if (this.sidebarVisible === false) {
            this.sidebarOpen();
        }
        else {
            this.sidebarClose();
        }
        var body = document.getElementsByTagName('body')[0];
        if (this.mobile_menu_visible == 1) {
            // $('html').removeClass('nav-open');
            body.classList.remove('nav-open');
            if ($layer) {
                $layer.remove();
            }
            setTimeout(function () {
                $toggle.classList.remove('toggled');
            }, 400);
            this.mobile_menu_visible = 0;
        }
        else {
            setTimeout(function () {
                $toggle.classList.add('toggled');
            }, 430);
            var $layer = document.createElement('div');
            $layer.setAttribute('class', 'close-layer');
            if (body.querySelectorAll('.main-panel')) {
                document.getElementsByClassName('main-panel')[0].appendChild($layer);
            }
            else if (body.classList.contains('off-canvas-sidebar')) {
                document.getElementsByClassName('wrapper-full-page')[0].appendChild($layer);
            }
            setTimeout(function () {
                $layer.classList.add('visible');
            }, 100);
            $layer.onclick = function () {
                body.classList.remove('nav-open');
                this.mobile_menu_visible = 0;
                $layer.classList.remove('visible');
                setTimeout(function () {
                    $layer.remove();
                    $toggle.classList.remove('toggled');
                }, 400);
            }.bind(this);
            body.classList.add('nav-open');
            this.mobile_menu_visible = 1;
        }
    };
    ;
    NavbarComponent.prototype.getTitle = function () {
        var titlee = this.location.prepareExternalUrl(this.location.path());
        if (titlee.charAt(0) === '#') {
            titlee = titlee.slice(1);
        }
        for (var item = 0; item < this.listTitles.length; item++) {
            if (this.listTitles[item].path === titlee) {
                return this.listTitles[item].title;
            }
        }
        return 'Dashboard';
    };
    NavbarComponent.prototype.onLogout = function () {
        this.authService.logout();
    };
    NavbarComponent.ctorParameters = function () { return [
        { type: _angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
        { type: app_shared_services_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"] }
    ]; };
    NavbarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-navbar',
            template: _raw_loader_navbar_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_navbar_component_css__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [_angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"],
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
            app_shared_services_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"]])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "j1ZV":
/*!*************************************************!*\
  !*** ./src/app/components/components.module.ts ***!
  \*************************************************/
/*! exports provided: ComponentsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComponentsModule", function() { return ComponentsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./footer/footer.component */ "LmEr");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./navbar/navbar.component */ "hrlM");
/* harmony import */ var _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./sidebar/sidebar.component */ "zBoC");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var ComponentsModule = /** @class */ (function () {
    function ComponentsModule() {
    }
    ComponentsModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"],
            ],
            declarations: [
                _footer_footer_component__WEBPACK_IMPORTED_MODULE_3__["FooterComponent"],
                _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_4__["NavbarComponent"],
                _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_5__["SidebarComponent"]
            ],
            exports: [
                _footer_footer_component__WEBPACK_IMPORTED_MODULE_3__["FooterComponent"],
                _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_4__["NavbarComponent"],
                _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_5__["SidebarComponent"]
            ]
        })
    ], ComponentsModule);
    return ComponentsModule;
}());



/***/ }),

/***/ "nUU2":
/*!*******************************************************************!*\
  !*** ./src/app/pages/page-not-found/page-not-found.component.css ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3BhZ2Utbm90LWZvdW5kL3BhZ2Utbm90LWZvdW5kLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "o97b":
/*!**************************************************!*\
  !*** ./src/app/pages/signup/signup.component.ts ***!
  \**************************************************/
/*! exports provided: SignupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupComponent", function() { return SignupComponent; });
/* harmony import */ var _raw_loader_signup_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./signup.component.html */ "aTJU");
/* harmony import */ var _signup_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./signup.component.css */ "uJ30");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var app_shared_data_countries__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/shared/data/countries */ "EEd4");
/* harmony import */ var app_shared_services_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! app/shared/services/auth.service */ "IYfF");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-spinner */ "JqCM");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var SignupComponent = /** @class */ (function () {
    function SignupComponent(fb, authService, router, spinner) {
        this.fb = fb;
        this.authService = authService;
        this.router = router;
        this.spinner = spinner;
        this.registerForm = this.fb.group({
            firstName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            lastName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            gender: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            country: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            userEmail: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].email]],
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(7)]],
            password2: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(7)]],
            userCategory: ['MEMBER', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            agreement: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
        });
    }
    SignupComponent.prototype.ngOnInit = function () {
        this.getAfricanCountries();
    };
    SignupComponent.prototype.showNotification = function (from, align, color, message) {
        var type = color;
        $.notify({
            icon: "notifications",
            message: message
        }, {
            type: type,
            timer: 5000,
            placement: {
                from: from,
                align: align
            },
            template: '<div data-notify="container" class="col-xl-4 col-lg-4 col-11 col-sm-4 col-md-4 alert alert-{0} alert-with-icon" role="alert">' +
                '<button mat-button  type="button" aria-hidden="true" class="close mat-button" data-notify="dismiss">  <i class="material-icons">close</i></button>' +
                '<i class="material-icons" data-notify="icon">notifications</i> ' +
                '<span data-notify="title">{1}</span> ' +
                '<span data-notify="message">{2}</span>' +
                '<div class="progress" data-notify="progressbar">' +
                '<div class="progress-bar progress-bar-{0}" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width: 0%;"></div>' +
                '</div>' +
                '<a href="{3}" target="{4}" data-notify="url"></a>' +
                '</div>'
        });
    };
    SignupComponent.prototype.getAfricanCountries = function () {
        var country_list = app_shared_data_countries__WEBPACK_IMPORTED_MODULE_5__["countries"];
        var africa = [];
        for (var _i = 0, _a = Object.entries(country_list); _i < _a.length; _i++) {
            var _b = _a[_i], key = _b[0], value = _b[1];
            if (value.continent == 'AF')
                africa.push(value);
        }
        this.africanCountries = africa;
    };
    SignupComponent.prototype.onSubmit = function () {
        var _this = this;
        this.spinner.show();
        var formValue = this.registerForm.value;
        var payload = {
            country: formValue.country,
            firstName: formValue.firstName,
            gender: formValue.gender,
            lastName: formValue.lastName,
            password: formValue.password,
            userCategory: formValue.userCategory,
            userEmail: formValue.userEmail
        };
        if (!this.registerForm.value.agreement) {
            this.spinner.hide();
            var color = 'danger';
            var message = 'Please agree to our terms of service';
            this.showNotification('bottom', 'right', color, message);
        }
        else if (formValue.password != formValue.password2) {
            this.spinner.hide();
            var color = 'danger';
            var message = 'Password does not match';
            this.showNotification('bottom', 'right', color, message);
        }
        else {
            this.authService.register(payload).subscribe(function (res) {
                if (res.success) {
                    _this.spinner.hide();
                    var color = 'danger';
                    var message = res.message + '<br> Kindly check your email';
                    _this.showNotification('bottom', 'right', color, message);
                    _this.router.navigateByUrl('/login');
                }
                else {
                    _this.spinner.hide();
                    var color = 'danger';
                    var message = res.message;
                    _this.showNotification('bottom', 'right', color, message);
                }
            }, function (err) {
                _this.spinner.hide();
                var color = 'danger';
                var message = err.message;
                _this.showNotification('bottom', 'right', color, message);
            });
        }
    };
    SignupComponent.ctorParameters = function () { return [
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
        { type: app_shared_services_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
        { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_7__["NgxSpinnerService"] }
    ]; };
    SignupComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-signup',
            template: _raw_loader_signup_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_signup_component_css__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
            app_shared_services_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_7__["NgxSpinnerService"]])
    ], SignupComponent);
    return SignupComponent;
}());



/***/ }),

/***/ "pG9d":
/*!*************************************************!*\
  !*** ./src/app/pages/login/login.component.css ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".navbar-brand{\n    color: #ffffff;\n    font-weight: 400;\n}\n.full-image{\n    background: #f5a21f;\n    background-image: url(\"/assets/img/intro-image.png\");\n    background-size:contain;\n    background-repeat: no-repeat;\n    background-position-x: center;\n    background-position-y: center;\n    background-origin: content-box;\n}\n.full-color{\n    background-color: #f5a21f;\n}\n.login-container{\n    height: 100vh;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    align-self: center;\n}\n.login-form{\n    width: 60%;\n}\n.card-title{\n    /* font-weight: bold; */\n    margin: auto;\n    text-align: center;\n    margin-bottom: 50px;\n}\n.sign-link{\n    font-weight:400;\n}\n/* For mobile screens */\n@media screen and (max-width: 399px) {\n    .navbar-brand{\n        color: #000000;\n        font-weight: 400;\n    }\n\n    .back-img{\n        display: none\n    }\n\n    .login-form{\n        width: 80%;\n    }\n\n    .login-container{\n        height: calc(100vh - 60px);\n        display: flex;\n        justify-content: center;\n        align-items: center;\n        align-self: center;\n    }\n\n    .card-title{\n        font-size: 30px;\n    }\n}\n/* Non mobile screen */\n@media screen and (min-width: 400px) {\n    .mobile-logo{\n        display: none\n    }\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGNBQWM7SUFDZCxnQkFBZ0I7QUFDcEI7QUFDQTtJQUNJLG1CQUFtQjtJQUNuQixvREFBb0Q7SUFDcEQsdUJBQXVCO0lBQ3ZCLDRCQUE0QjtJQUM1Qiw2QkFBNkI7SUFDN0IsNkJBQTZCO0lBQzdCLDhCQUE4QjtBQUNsQztBQUNBO0lBQ0kseUJBQXlCO0FBQzdCO0FBQ0E7SUFDSSxhQUFhO0lBQ2IsYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsa0JBQWtCO0FBQ3RCO0FBRUE7SUFDSSxVQUFVO0FBQ2Q7QUFFQTtJQUNJLHVCQUF1QjtJQUN2QixZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLG1CQUFtQjtBQUN2QjtBQUVBO0lBQ0ksZUFBZTtBQUNuQjtBQUVBLHVCQUF1QjtBQUN2QjtJQUNJO1FBQ0ksY0FBYztRQUNkLGdCQUFnQjtJQUNwQjs7SUFFQTtRQUNJO0lBQ0o7O0lBRUE7UUFDSSxVQUFVO0lBQ2Q7O0lBRUE7UUFDSSwwQkFBMEI7UUFDMUIsYUFBYTtRQUNiLHVCQUF1QjtRQUN2QixtQkFBbUI7UUFDbkIsa0JBQWtCO0lBQ3RCOztJQUVBO1FBQ0ksZUFBZTtJQUNuQjtBQUNKO0FBRUEsc0JBQXNCO0FBQ3RCO0lBQ0k7UUFDSTtJQUNKO0FBQ0oiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9sb2dpbi9sb2dpbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm5hdmJhci1icmFuZHtcbiAgICBjb2xvcjogI2ZmZmZmZjtcbiAgICBmb250LXdlaWdodDogNDAwO1xufVxuLmZ1bGwtaW1hZ2V7XG4gICAgYmFja2dyb3VuZDogI2Y1YTIxZjtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIvYXNzZXRzL2ltZy9pbnRyby1pbWFnZS5wbmdcIik7XG4gICAgYmFja2dyb3VuZC1zaXplOmNvbnRhaW47XG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uLXg6IGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uLXk6IGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kLW9yaWdpbjogY29udGVudC1ib3g7XG59XG4uZnVsbC1jb2xvcntcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjVhMjFmO1xufVxuLmxvZ2luLWNvbnRhaW5lcntcbiAgICBoZWlnaHQ6IDEwMHZoO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XG59XG5cbi5sb2dpbi1mb3Jte1xuICAgIHdpZHRoOiA2MCU7XG59XG5cbi5jYXJkLXRpdGxle1xuICAgIC8qIGZvbnQtd2VpZ2h0OiBib2xkOyAqL1xuICAgIG1hcmdpbjogYXV0bztcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgbWFyZ2luLWJvdHRvbTogNTBweDtcbn1cblxuLnNpZ24tbGlua3tcbiAgICBmb250LXdlaWdodDo0MDA7XG59XG5cbi8qIEZvciBtb2JpbGUgc2NyZWVucyAqL1xuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMzk5cHgpIHtcbiAgICAubmF2YmFyLWJyYW5ke1xuICAgICAgICBjb2xvcjogIzAwMDAwMDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICB9XG5cbiAgICAuYmFjay1pbWd7XG4gICAgICAgIGRpc3BsYXk6IG5vbmVcbiAgICB9XG5cbiAgICAubG9naW4tZm9ybXtcbiAgICAgICAgd2lkdGg6IDgwJTtcbiAgICB9XG5cbiAgICAubG9naW4tY29udGFpbmVye1xuICAgICAgICBoZWlnaHQ6IGNhbGMoMTAwdmggLSA2MHB4KTtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcbiAgICB9XG5cbiAgICAuY2FyZC10aXRsZXtcbiAgICAgICAgZm9udC1zaXplOiAzMHB4O1xuICAgIH1cbn1cblxuLyogTm9uIG1vYmlsZSBzY3JlZW4gKi9cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDQwMHB4KSB7XG4gICAgLm1vYmlsZS1sb2dve1xuICAgICAgICBkaXNwbGF5OiBub25lXG4gICAgfVxufVxuIl19 */");

/***/ }),

/***/ "uJ30":
/*!***************************************************!*\
  !*** ./src/app/pages/signup/signup.component.css ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".navbar-brand{\n    color: #ffffff;\n    font-weight: 400;\n}\n.full-image{\n    background: #f5a21f;\n    background-image: url(\"/assets/img/intro-image.png\");\n    background-size:contain;\n    background-repeat: no-repeat;\n    background-position-x: center;\n    background-position-y: center;\n    background-origin: content-box;\n}\n.full-color{\n    background-color: #ffffff;\n}\n.signup-container{\n    height: 100vh;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n.signup-form{\n    width: 60%;\n}\n.card-title{\n    /* font-weight: bold; */\n    margin: auto;\n    text-align: center;\n    margin-bottom: 50px;\n}\n.sign-link{\n    font-weight:400;\n}\n/* For mobile screens */\n@media screen and (max-width: 399px) {\n    .navbar-brand{\n        color: #000000;\n        font-weight: 400;\n        margin-bottom: 70px;\n    }\n\n    .back-img{\n        display: none\n    }\n\n    .signup-form{\n        width: 80%;\n    }\n\n    .signup-container{\n        height: calc(100vh - 60px);\n        display: flex;\n        justify-content: center;\n        align-items: center;\n        align-self: center;\n    }\n\n    .card-title{\n        font-size: 30px;\n    }\n}\n/* Non mobile screen */\n@media screen and (min-width: 400px) {\n    .mobile-logo{\n        display: none\n    }\n}\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvc2lnbnVwL3NpZ251cC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksY0FBYztJQUNkLGdCQUFnQjtBQUNwQjtBQUNBO0lBQ0ksbUJBQW1CO0lBQ25CLG9EQUFvRDtJQUNwRCx1QkFBdUI7SUFDdkIsNEJBQTRCO0lBQzVCLDZCQUE2QjtJQUM3Qiw2QkFBNkI7SUFDN0IsOEJBQThCO0FBQ2xDO0FBQ0E7SUFDSSx5QkFBeUI7QUFDN0I7QUFDQTtJQUNJLGFBQWE7SUFDYixhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtBQUN2QjtBQUVBO0lBQ0ksVUFBVTtBQUNkO0FBRUE7SUFDSSx1QkFBdUI7SUFDdkIsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixtQkFBbUI7QUFDdkI7QUFFQTtJQUNJLGVBQWU7QUFDbkI7QUFHQSx1QkFBdUI7QUFDdkI7SUFDSTtRQUNJLGNBQWM7UUFDZCxnQkFBZ0I7UUFDaEIsbUJBQW1CO0lBQ3ZCOztJQUVBO1FBQ0k7SUFDSjs7SUFFQTtRQUNJLFVBQVU7SUFDZDs7SUFFQTtRQUNJLDBCQUEwQjtRQUMxQixhQUFhO1FBQ2IsdUJBQXVCO1FBQ3ZCLG1CQUFtQjtRQUNuQixrQkFBa0I7SUFDdEI7O0lBRUE7UUFDSSxlQUFlO0lBQ25CO0FBQ0o7QUFFQSxzQkFBc0I7QUFDdEI7SUFDSTtRQUNJO0lBQ0o7QUFDSiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3NpZ251cC9zaWdudXAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5uYXZiYXItYnJhbmR7XG4gICAgY29sb3I6ICNmZmZmZmY7XG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcbn1cbi5mdWxsLWltYWdle1xuICAgIGJhY2tncm91bmQ6ICNmNWEyMWY7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiL2Fzc2V0cy9pbWcvaW50cm8taW1hZ2UucG5nXCIpO1xuICAgIGJhY2tncm91bmQtc2l6ZTpjb250YWluO1xuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbi14OiBjZW50ZXI7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbi15OiBjZW50ZXI7XG4gICAgYmFja2dyb3VuZC1vcmlnaW46IGNvbnRlbnQtYm94O1xufVxuLmZ1bGwtY29sb3J7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcbn1cbi5zaWdudXAtY29udGFpbmVye1xuICAgIGhlaWdodDogMTAwdmg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uc2lnbnVwLWZvcm17XG4gICAgd2lkdGg6IDYwJTtcbn1cblxuLmNhcmQtdGl0bGV7XG4gICAgLyogZm9udC13ZWlnaHQ6IGJvbGQ7ICovXG4gICAgbWFyZ2luOiBhdXRvO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBtYXJnaW4tYm90dG9tOiA1MHB4O1xufVxuXG4uc2lnbi1saW5re1xuICAgIGZvbnQtd2VpZ2h0OjQwMDtcbn1cblxuXG4vKiBGb3IgbW9iaWxlIHNjcmVlbnMgKi9cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDM5OXB4KSB7XG4gICAgLm5hdmJhci1icmFuZHtcbiAgICAgICAgY29sb3I6ICMwMDAwMDA7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDcwcHg7XG4gICAgfVxuXG4gICAgLmJhY2staW1ne1xuICAgICAgICBkaXNwbGF5OiBub25lXG4gICAgfVxuXG4gICAgLnNpZ251cC1mb3Jte1xuICAgICAgICB3aWR0aDogODAlO1xuICAgIH1cblxuICAgIC5zaWdudXAtY29udGFpbmVye1xuICAgICAgICBoZWlnaHQ6IGNhbGMoMTAwdmggLSA2MHB4KTtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcbiAgICB9XG5cbiAgICAuY2FyZC10aXRsZXtcbiAgICAgICAgZm9udC1zaXplOiAzMHB4O1xuICAgIH1cbn1cblxuLyogTm9uIG1vYmlsZSBzY3JlZW4gKi9cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDQwMHB4KSB7XG4gICAgLm1vYmlsZS1sb2dve1xuICAgICAgICBkaXNwbGF5OiBub25lXG4gICAgfVxufVxuXG4iXX0= */");

/***/ }),

/***/ "vtrx":
/*!******************************************************************!*\
  !*** ./src/app/layouts/admin-layout/admin-layout.component.scss ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xheW91dHMvYWRtaW4tbGF5b3V0L2FkbWluLWxheW91dC5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "ywSW":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/login/login.component.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"login-page\">\n  <div class=\"row\">\n    <div class=\"col-lg-6 col-md-6 col-sm-12 full-image back-img\">\n      <a class=\"navbar-brand mt-4 ml-4\" [routerLink]=\"['/']\"><img src=\"./assets/img/logo2.png\" alt=\"logo\" height=\"60px\"></a>\n    </div>\n    <div class=\"col-lg-6 col-md-6 col-sm-12 full-colour\">\n      <div class=\"mobile-logo\">\n        <a class=\"navbar-brand mt-4 ml-4\" [routerLink]=\"['/']\"><img src=\"./assets/img/logo.png\" alt=\"logo\" height=\"60px\"></a>\n      </div>\n      <div class=\"login-container\">\n        <div class=\"login-form\">\n          <form [formGroup]=\"loginForm\" (ngSubmit)=\"onSubmit()\">\n            <h2 class=\"card-title mt-4\">Login</h2>\n            <div class=\"form-group\">\n              <label for=\"exampleEmails\" class=\"bmd-label-floating\"> Email Address *</label>\n              <input type=\"email\" class=\"form-control\" id=\"exampleEmails\" required=\"true\" name=\"email\" formControlName=\"username\">\n            </div>\n\n            <div class=\"form-group\">\n              <label for=\"examplePasswords\" class=\"bmd-label-floating\"> Password *</label>\n              <input type=\"password\" class=\"form-control\" id=\"examplePasswords\" required=\"true\" name=\"password\" formControlName=\"password\">\n            </div>\n            <div class=\"small\"><a [routerLink]=\"['/recovery']\">Forgot password?</a></div>\n\n            <ngx-spinner></ngx-spinner>\n\n            <button type=\"submit\" class=\"btn btn-primary btn-block mt-4\" [disabled]=\"!loginForm.valid\">Login</button>\n\n            <div class=\"mt-4\">New to Eloquent Data? <a class=\"sign-link\" [routerLink]=\"['/register']\">Register</a></div>\n          </form>\n\n          <ul *ngIf=\"loginForm.invalid && (loginForm.dirty || loginForm.touched)\">\n            <li *ngIf=\"loginForm.controls.username.errors?.required\">Email is required</li>\n            <li *ngIf=\"loginForm.controls.password.errors?.required\">Password is required</li>\n            <li *ngIf=\"loginForm.controls.username.errors?.email\">Enter valid email</li>\n            <li *ngIf=\"loginForm.controls.password.errors?.minlength\">Password must be at least 8 characters.</li>\n          </ul>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n");

/***/ }),

/***/ "zBoC":
/*!*********************************************************!*\
  !*** ./src/app/components/sidebar/sidebar.component.ts ***!
  \*********************************************************/
/*! exports provided: ROUTES, SidebarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ROUTES", function() { return ROUTES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarComponent", function() { return SidebarComponent; });
/* harmony import */ var _raw_loader_sidebar_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./sidebar.component.html */ "KKA+");
/* harmony import */ var _sidebar_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sidebar.component.css */ "2DHQ");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var app_shared_services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/shared/services/auth.service */ "IYfF");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ROUTES = [
    { path: '/dashboard', title: 'Dashboard', icon: 'dashboard', class: '' },
    { path: '/resources', title: 'Resources', icon: 'library_books', class: '' },
    { path: '/challenges', title: 'Challenges', icon: 'assignment_turned_in', class: '' },
    { path: '/projects', title: 'Projects', icon: 'bubble_chart', class: '' },
    { path: '/blog', title: 'Blogs', icon: 'library_add', class: '' },
    { path: '/discussion', title: 'Discussion', icon: 'forum', class: '' }
];
var SidebarComponent = /** @class */ (function () {
    function SidebarComponent(authService) {
        this.authService = authService;
    }
    SidebarComponent.prototype.ngOnInit = function () {
        this.menuItems = ROUTES.filter(function (menuItem) { return menuItem; });
    };
    SidebarComponent.prototype.isMobileMenu = function () {
        if ($(window).width() > 991) {
            return false;
        }
        return true;
    };
    ;
    SidebarComponent.prototype.onLogout = function () {
        this.authService.logout();
    };
    SidebarComponent.ctorParameters = function () { return [
        { type: app_shared_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] }
    ]; };
    SidebarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-sidebar',
            template: _raw_loader_sidebar_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_sidebar_component_css__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [app_shared_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]])
    ], SidebarComponent);
    return SidebarComponent;
}());



/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "a3Wg");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! hammerjs */ "yLV6");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_4__);
/*!

=========================================================
* Material Dashboard Angular - v2.4.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-angular2
* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/material-dashboard-angular2/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/





if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"]);


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map