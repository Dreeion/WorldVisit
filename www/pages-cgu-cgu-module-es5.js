function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-cgu-cgu-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/cgu/cgu.page.html":
  /*!*******************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/cgu/cgu.page.html ***!
    \*******************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesCguCguPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\r\n  <ion-toolbar>\r\n    \r\n    \r\n    <ion-buttons slot=\"start\">\r\n      <p class=\"tab_back\">\r\n        <ion-icon name=\"arrow-back\" (click)=\"myBackButton()\"></ion-icon>\r\n      </p>\r\n    </ion-buttons>\r\n    <ion-title>{{ 'CGU.title' | translate }}</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n\r\n  <div id=\"cgu\">\r\n    <span class=\"cgu-title\">{{ 'CGU.cgu.title' | translate }}<br></span>\r\n    <br>\r\n    <span class=\"cgu-title\">{{ 'CGU.cgu.1.title' | translate }}<br></span>\r\n    {{ 'CGU.cgu.1.content' | translate }}\r\n    <span class=\"cgu-title\"><br>{{ 'CGU.cgu.2.title' | translate }}<br></span>\r\n    {{ 'CGU.cgu.2.content' | translate }}\r\n    <span class=\"cgu-title\"><br>{{ 'CGU.cgu.3.title' | translate }}<br></span>\r\n    {{ 'CGU.cgu.3.content' | translate }}\r\n    <span class=\"cgu-title\"><br>{{ 'CGU.cgu.4.title' | translate }}<br></span>\r\n    {{ 'CGU.cgu.4.content' | translate }}\r\n    <span class=\"cgu-title\"><br>{{ 'CGU.cgu.5.title' | translate }}<br></span>\r\n    {{ 'CGU.cgu.5.content' | translate }}\r\n    <span class=\"cgu-title\"><br>{{ 'CGU.cgu.6.title' | translate }}<br></span>\r\n    {{ 'CGU.cgu.6.content' | translate }}\r\n    <span class=\"cgu-title\"><br>{{ 'CGU.cgu.7.title' | translate }}<br></span>\r\n    {{ 'CGU.cgu.7.content' | translate }}\r\n    <span class=\"cgu-title\"><br>{{ 'CGU.cgu.8.title' | translate }}<br></span>\r\n    {{ 'CGU.cgu.8.content' | translate }}\r\n    <span class=\"cgu-title\"><br>{{ 'CGU.cgu.9.title' | translate }}<br></span>\r\n    {{ 'CGU.cgu.9.content' | translate }}\r\n    <span class=\"cgu-title\"><br>{{ 'CGU.cgu.10.title' | translate }}<br></span>\r\n    {{ 'CGU.cgu.10.content' | translate }}\r\n    <span class=\"cgu-title\"><br>{{ 'CGU.cgu.11.title' | translate }}<br></span>\r\n    {{ 'CGU.cgu.11.content' | translate }}\r\n    <span class=\"cgu-title\"><br>{{ 'CGU.cgu.12.title' | translate }}<br></span>\r\n    {{ 'CGU.cgu.12.content' | translate }}\r\n  </div>\r\n\r\n</ion-content>\r\n";
    /***/
  },

  /***/
  "./src/app/pages/cgu/cgu-routing.module.ts":
  /*!*************************************************!*\
    !*** ./src/app/pages/cgu/cgu-routing.module.ts ***!
    \*************************************************/

  /*! exports provided: CGUPageRoutingModule */

  /***/
  function srcAppPagesCguCguRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CGUPageRoutingModule", function () {
      return CGUPageRoutingModule;
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


    var _cgu_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./cgu.page */
    "./src/app/pages/cgu/cgu.page.ts");

    var routes = [{
      path: '',
      component: _cgu_page__WEBPACK_IMPORTED_MODULE_3__["CGUPage"]
    }];

    var CGUPageRoutingModule = function CGUPageRoutingModule() {
      _classCallCheck(this, CGUPageRoutingModule);
    };

    CGUPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], CGUPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/cgu/cgu.module.ts":
  /*!*****************************************!*\
    !*** ./src/app/pages/cgu/cgu.module.ts ***!
    \*****************************************/

  /*! exports provided: CGUPageModule */

  /***/
  function srcAppPagesCguCguModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CGUPageModule", function () {
      return CGUPageModule;
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


    var _cgu_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./cgu-routing.module */
    "./src/app/pages/cgu/cgu-routing.module.ts");
    /* harmony import */


    var _cgu_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./cgu.page */
    "./src/app/pages/cgu/cgu.page.ts");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");

    var CGUPageModule = function CGUPageModule() {
      _classCallCheck(this, CGUPageModule);
    };

    CGUPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _cgu_routing_module__WEBPACK_IMPORTED_MODULE_5__["CGUPageRoutingModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateModule"]],
      declarations: [_cgu_page__WEBPACK_IMPORTED_MODULE_6__["CGUPage"]]
    })], CGUPageModule);
    /***/
  },

  /***/
  "./src/app/pages/cgu/cgu.page.scss":
  /*!*****************************************!*\
    !*** ./src/app/pages/cgu/cgu.page.scss ***!
    \*****************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesCguCguPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "#title {\n  text-align: center;\n}\n\nion-toolbar {\n  text-align: center;\n  border-bottom: none;\n}\n\nion-back-button {\n  --color: #000000;\n}\n\n.header-md:after {\n  background-image: none;\n}\n\n#cgu {\n  font-size: 14px;\n  line-height: 21px;\n  margin-top: 8vh;\n  padding: 0px 10px;\n  margin-bottom: 2vh;\n}\n\n.cgu-title {\n  font-weight: 600;\n  font-size: 18px;\n  line-height: 27px;\n}\n\nion-icon {\n  font-size: 24px;\n  padding-left: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvY2d1L0M6XFxVc2Vyc1xcQUdBUkFVTFRcXERlc2t0b3BcXGNvbnRlc3QyXFxXb3JsZFZpc2l0L3NyY1xcYXBwXFxwYWdlc1xcY2d1XFxjZ3UucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9jZ3UvY2d1LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNDLGtCQUFBO0FDQ0Q7O0FERUE7RUFDSSxrQkFBQTtFQUNBLG1CQUFBO0FDQ0o7O0FERUE7RUFDSSxnQkFBQTtBQ0NKOztBREVBO0VBRUUsc0JBQUE7QUNBRjs7QURHQTtFQUNJLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FDQUo7O0FER0E7RUFDSSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtBQ0FKOztBREdBO0VBQ0ksZUFBQTtFQUNBLGtCQUFBO0FDQUoiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9jZ3UvY2d1LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiN0aXRsZSB7XHJcblx0dGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG5pb24tdG9vbGJhciB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBib3JkZXItYm90dG9tOiBub25lO1xyXG59XHJcblxyXG5pb24tYmFjay1idXR0b24ge1xyXG4gICAgLS1jb2xvcjogIzAwMDAwMDtcclxufVxyXG5cclxuLmhlYWRlci1tZDphZnRlclxyXG57XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogbm9uZTtcclxufVxyXG5cclxuI2NndSB7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBsaW5lLWhlaWdodDogMjFweDtcclxuICAgIG1hcmdpbi10b3A6IDh2aDtcclxuICAgIHBhZGRpbmc6IDBweCAxMHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMnZoO1xyXG59XHJcblxyXG4uY2d1LXRpdGxlIHtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICBsaW5lLWhlaWdodDogMjdweDtcclxufVxyXG5cclxuaW9uLWljb257XHJcbiAgICBmb250LXNpemU6IDI0cHg7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XHJcbn0iLCIjdGl0bGUge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbmlvbi10b29sYmFyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBib3JkZXItYm90dG9tOiBub25lO1xufVxuXG5pb24tYmFjay1idXR0b24ge1xuICAtLWNvbG9yOiAjMDAwMDAwO1xufVxuXG4uaGVhZGVyLW1kOmFmdGVyIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogbm9uZTtcbn1cblxuI2NndSB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgbGluZS1oZWlnaHQ6IDIxcHg7XG4gIG1hcmdpbi10b3A6IDh2aDtcbiAgcGFkZGluZzogMHB4IDEwcHg7XG4gIG1hcmdpbi1ib3R0b206IDJ2aDtcbn1cblxuLmNndS10aXRsZSB7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgbGluZS1oZWlnaHQ6IDI3cHg7XG59XG5cbmlvbi1pY29uIHtcbiAgZm9udC1zaXplOiAyNHB4O1xuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/pages/cgu/cgu.page.ts":
  /*!***************************************!*\
    !*** ./src/app/pages/cgu/cgu.page.ts ***!
    \***************************************/

  /*! exports provided: CGUPage */

  /***/
  function srcAppPagesCguCguPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CGUPage", function () {
      return CGUPage;
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

    var CGUPage = /*#__PURE__*/function () {
      function CGUPage(location) {
        _classCallCheck(this, CGUPage);

        this.location = location;
      }

      _createClass(CGUPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "myBackButton",
        value: function myBackButton() {
          this.location.back();
        }
      }]);

      return CGUPage;
    }();

    CGUPage.ctorParameters = function () {
      return [{
        type: _angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"]
      }];
    };

    CGUPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-cgu',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./cgu.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/cgu/cgu.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./cgu.page.scss */
      "./src/app/pages/cgu/cgu.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"]])], CGUPage);
    /***/
  }
}]);
//# sourceMappingURL=pages-cgu-cgu-module-es5.js.map