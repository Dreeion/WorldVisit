function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-datepicker-datepicker-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/datepicker/datepicker.page.html":
  /*!*********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/datepicker/datepicker.page.html ***!
    \*********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesDatepickerDatepickerPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-title>datepicker</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n{{datePicker.show()}}\n</ion-content>\n";
    /***/
  },

  /***/
  "./src/app/pages/datepicker/datepicker-routing.module.ts":
  /*!***************************************************************!*\
    !*** ./src/app/pages/datepicker/datepicker-routing.module.ts ***!
    \***************************************************************/

  /*! exports provided: DatepickerPageRoutingModule */

  /***/
  function srcAppPagesDatepickerDatepickerRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DatepickerPageRoutingModule", function () {
      return DatepickerPageRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _datepicker_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./datepicker.page */
    "./src/app/pages/datepicker/datepicker.page.ts");

    var routes = [{
      path: '',
      component: _datepicker_page__WEBPACK_IMPORTED_MODULE_3__["DatepickerPage"]
    }];

    var DatepickerPageRoutingModule = function DatepickerPageRoutingModule() {
      _classCallCheck(this, DatepickerPageRoutingModule);
    };

    DatepickerPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], DatepickerPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/datepicker/datepicker.module.ts":
  /*!*******************************************************!*\
    !*** ./src/app/pages/datepicker/datepicker.module.ts ***!
    \*******************************************************/

  /*! exports provided: DatepickerPageModule */

  /***/
  function srcAppPagesDatepickerDatepickerModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DatepickerPageModule", function () {
      return DatepickerPageModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/dist/fesm5.js");
    /* harmony import */


    var _datepicker_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./datepicker-routing.module */
    "./src/app/pages/datepicker/datepicker-routing.module.ts");
    /* harmony import */


    var _datepicker_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./datepicker.page */
    "./src/app/pages/datepicker/datepicker.page.ts");

    var DatepickerPageModule = function DatepickerPageModule() {
      _classCallCheck(this, DatepickerPageModule);
    };

    DatepickerPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _datepicker_routing_module__WEBPACK_IMPORTED_MODULE_5__["DatepickerPageRoutingModule"]],
      declarations: [_datepicker_page__WEBPACK_IMPORTED_MODULE_6__["DatepickerPage"]]
    })], DatepickerPageModule);
    /***/
  },

  /***/
  "./src/app/pages/datepicker/datepicker.page.scss":
  /*!*******************************************************!*\
    !*** ./src/app/pages/datepicker/datepicker.page.scss ***!
    \*******************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesDatepickerDatepickerPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2RhdGVwaWNrZXIvZGF0ZXBpY2tlci5wYWdlLnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/pages/datepicker/datepicker.page.ts":
  /*!*****************************************************!*\
    !*** ./src/app/pages/datepicker/datepicker.page.ts ***!
    \*****************************************************/

  /*! exports provided: DatepickerPage */

  /***/
  function srcAppPagesDatepickerDatepickerPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DatepickerPage", function () {
      return DatepickerPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _ionic_native_date_picker_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ionic-native/date-picker/ngx */
    "./node_modules/@ionic-native/date-picker/ngx/index.js");

    var DatepickerPage = /*#__PURE__*/function () {
      function DatepickerPage(datePicker) {
        _classCallCheck(this, DatepickerPage);

        this.datePicker = datePicker;
        this.datePicker.show({
          date: new Date(),
          mode: 'date',
          androidTheme: this.datePicker.ANDROID_THEMES.THEME_HOLO_DARK
        }).then(function (date) {
          return console.log('Got date: ', date);
        }, function (err) {
          return console.log('Error occurred while getting date: ', err);
        });
      }

      _createClass(DatepickerPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return DatepickerPage;
    }();

    DatepickerPage.ctorParameters = function () {
      return [{
        type: _ionic_native_date_picker_ngx__WEBPACK_IMPORTED_MODULE_2__["DatePicker"]
      }];
    };

    DatepickerPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-datepicker',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./datepicker.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/datepicker/datepicker.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./datepicker.page.scss */
      "./src/app/pages/datepicker/datepicker.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_native_date_picker_ngx__WEBPACK_IMPORTED_MODULE_2__["DatePicker"]])], DatepickerPage);
    /***/
  }
}]);
//# sourceMappingURL=pages-datepicker-datepicker-module-es5.js.map