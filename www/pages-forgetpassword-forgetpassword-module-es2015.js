(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-forgetpassword-forgetpassword-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/forgetpassword/forgetpassword.page.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/forgetpassword/forgetpassword.page.html ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content class=\"content\">\r\n  <div class=\"padding\">\r\n      <ion-buttons slot=\"start\">\r\n        <ion-back-button text=\"\" defaultHref=\"pages/login\"></ion-back-button>\r\n      </ion-buttons>\r\n    <br><br><br><br>\r\n    <br><br><br><br>\r\n\r\n    <ion-item >\r\n      <ion-label color=\"black\">{{ 'FORGETPWD.mail.title' | translate }}</ion-label>\r\n      <ion-input color=\"black\" type=\"mail\" placeholder=\"{{ 'FORGETPWD.mail.placeholder' | translate }}\" [(ngModel)]=\"dataUser.email\"></ion-input>\r\n    </ion-item>\r\n\r\n    <br>\r\n    <ion-button color=\"tertiary\" expand=\"block\" shape=\"round\" (click)=\"resetPassword()\">{{ 'FORGETPWD.validate' | translate }}</ion-button>\r\n  </div>\r\n</ion-content>\r\n");

/***/ }),

/***/ "./src/app/pages/forgetpassword/forgetpassword-routing.module.ts":
/*!***********************************************************************!*\
  !*** ./src/app/pages/forgetpassword/forgetpassword-routing.module.ts ***!
  \***********************************************************************/
/*! exports provided: ForgetpasswordPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForgetpasswordPageRoutingModule", function() { return ForgetpasswordPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _forgetpassword_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./forgetpassword.page */ "./src/app/pages/forgetpassword/forgetpassword.page.ts");




const routes = [
    {
        path: '',
        component: _forgetpassword_page__WEBPACK_IMPORTED_MODULE_3__["ForgetpasswordPage"]
    }
];
let ForgetpasswordPageRoutingModule = class ForgetpasswordPageRoutingModule {
};
ForgetpasswordPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ForgetpasswordPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/forgetpassword/forgetpassword.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/pages/forgetpassword/forgetpassword.module.ts ***!
  \***************************************************************/
/*! exports provided: ForgetpasswordPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForgetpasswordPageModule", function() { return ForgetpasswordPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _forgetpassword_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./forgetpassword-routing.module */ "./src/app/pages/forgetpassword/forgetpassword-routing.module.ts");
/* harmony import */ var _forgetpassword_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./forgetpassword.page */ "./src/app/pages/forgetpassword/forgetpassword.page.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");








let ForgetpasswordPageModule = class ForgetpasswordPageModule {
};
ForgetpasswordPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _forgetpassword_routing_module__WEBPACK_IMPORTED_MODULE_5__["ForgetpasswordPageRoutingModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateModule"]
        ],
        declarations: [_forgetpassword_page__WEBPACK_IMPORTED_MODULE_6__["ForgetpasswordPage"]]
    })
], ForgetpasswordPageModule);



/***/ }),

/***/ "./src/app/pages/forgetpassword/forgetpassword.page.scss":
/*!***************************************************************!*\
  !*** ./src/app/pages/forgetpassword/forgetpassword.page.scss ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".padding {\n  padding: 5% !important;\n}\n\n.logo ion-icon {\n  font-size: 9em;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n}\n\n.logo img {\n  height: 100px;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n}\n\n.logo {\n  position: relative;\n  height: 250px;\n}\n\nion-item {\n  --ion-background-color: transparent!important;\n}\n\n.flex {\n  display: flex;\n  justify-content: space-between;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvZm9yZ2V0cGFzc3dvcmQvQzpcXFVzZXJzXFxBR0FSQVVMVFxcRGVza3RvcFxcY29udGVzdDJcXFdvcmxkVmlzaXQvc3JjXFxhcHBcXHBhZ2VzXFxmb3JnZXRwYXNzd29yZFxcZm9yZ2V0cGFzc3dvcmQucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9mb3JnZXRwYXNzd29yZC9mb3JnZXRwYXNzd29yZC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxzQkFBQTtBQ0NKOztBRENBO0VBQ0ksY0FBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxnQ0FBQTtBQ0VKOztBREFBO0VBQ0ksYUFBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxnQ0FBQTtBQ0dKOztBRERBO0VBQ0ksa0JBQUE7RUFDQSxhQUFBO0FDSUo7O0FERkE7RUFDSSw2Q0FBQTtBQ0tKOztBREhBO0VBQ0ksYUFBQTtFQUNBLDhCQUFBO0FDTUoiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9mb3JnZXRwYXNzd29yZC9mb3JnZXRwYXNzd29yZC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucGFkZGluZyB7XHJcbiAgICBwYWRkaW5nOiA1JSFpbXBvcnRhbnQ7XHJcbn1cclxuLmxvZ28gaW9uLWljb257XHJcbiAgICBmb250LXNpemU6IDllbTtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogNTAlO1xyXG4gICAgbGVmdDogNTAlO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XHJcbn1cclxuLmxvZ28gaW1ne1xyXG4gICAgaGVpZ2h0OiAxMDBweDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogNTAlO1xyXG4gICAgbGVmdDogNTAlO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XHJcbn1cclxuLmxvZ28ge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgaGVpZ2h0OiAyNTBweDtcclxufVxyXG5pb24taXRlbSB7XHJcbiAgICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCFpbXBvcnRhbnQ7XHJcbn1cclxuLmZsZXgge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxufSIsIi5wYWRkaW5nIHtcbiAgcGFkZGluZzogNSUgIWltcG9ydGFudDtcbn1cblxuLmxvZ28gaW9uLWljb24ge1xuICBmb250LXNpemU6IDllbTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDUwJTtcbiAgbGVmdDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbn1cblxuLmxvZ28gaW1nIHtcbiAgaGVpZ2h0OiAxMDBweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDUwJTtcbiAgbGVmdDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbn1cblxuLmxvZ28ge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGhlaWdodDogMjUwcHg7XG59XG5cbmlvbi1pdGVtIHtcbiAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQhaW1wb3J0YW50O1xufVxuXG4uZmxleCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/pages/forgetpassword/forgetpassword.page.ts":
/*!*************************************************************!*\
  !*** ./src/app/pages/forgetpassword/forgetpassword.page.ts ***!
  \*************************************************************/
/*! exports provided: ForgetpasswordPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForgetpasswordPage", function() { return ForgetpasswordPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/es2015/index.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");






let ForgetpasswordPage = class ForgetpasswordPage {
    constructor(afAuth, toastController, menuCtrl, translate) {
        this.afAuth = afAuth;
        this.toastController = toastController;
        this.menuCtrl = menuCtrl;
        this.translate = translate;
        this.dataUser = {
            email: '',
        };
    }
    ngOnInit() {
    }
    getAuth() {
        return this.afAuth.auth;
    }
    resetPwdError() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const toast = yield this.toastController.create({
                message: this.translate.instant('TOAST.recover.invalid'),
                position: 'top',
                duration: 2000
            });
            toast.present();
        });
    }
    resetPwdSuccess() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const toast = yield this.toastController.create({
                message: this.translate.instant('TOAST.recover.validate'),
                position: 'top',
                duration: 2000
            });
            toast.present();
        });
    }
    resetPwdNoEmail() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const toast = yield this.toastController.create({
                message: this.translate.instant('TOAST.recover.mail'),
                position: 'top',
                duration: 2000
            });
            toast.present();
        });
    }
    /**
     * Initiate the password reset process for this user
     * @param email email of the user
     */
    resetPasswordInit(email) {
        return this.afAuth.auth.sendPasswordResetEmail(email, { url: 'https://coincoininsolite-1cf37.firebaseapp.com/__/auth/action' });
    }
    resetPassword() {
        if (!this.dataUser.email) {
            this.resetPwdNoEmail();
        }
        else {
            this.resetPasswordInit(this.dataUser.email)
                .then(() => this.resetPwdSuccess(), (rejectionReason) => alert(rejectionReason))
                .catch(e => this.resetPwdError());
        }
    }
    ionViewWillEnter() {
        this.menuCtrl.enable(false);
    }
};
ForgetpasswordPage.ctorParameters = () => [
    { type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__["AngularFireAuth"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["MenuController"] },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"] }
];
ForgetpasswordPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-forgetpassword',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./forgetpassword.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/forgetpassword/forgetpassword.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./forgetpassword.page.scss */ "./src/app/pages/forgetpassword/forgetpassword.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__["AngularFireAuth"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["MenuController"],
        _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"]])
], ForgetpasswordPage);



/***/ })

}]);
//# sourceMappingURL=pages-forgetpassword-forgetpassword-module-es2015.js.map