(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-login-login-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/login/login.page.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/login/login.page.html ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content class=\"content\">\r\n  Version beta 0.2.0\r\n  <div class=\"padding\">\r\n    \r\n    <div class=\"logo\">\r\n      <!-- <ion-icon color=\"light\" name=\"sunny\"></ion-icon> -->\r\n       <img src=\"../../assets/logo_coincoins.png\"> \r\n    </div>\r\n\r\n    <!--<div *ngIf=\"!connected\">-->\r\n    <ion-item >\r\n      <ion-label color=\"light\">{{ 'LOGIN.mail.title' | translate }}</ion-label>\r\n      <ion-input color=\"light\" type=\"mail\" placeholder=\"{{ 'LOGIN.mail.placeholder' | translate }}\" [(ngModel)]=\"dataUser.email\"></ion-input>\r\n    </ion-item>\r\n\r\n    <ion-item>\r\n      <ion-label color=\"light\">{{ 'LOGIN.password.title' | translate }}</ion-label>\r\n      <ion-input color=\"light\" type=\"password\" placeholder=\"{{ 'LOGIN.password.placeholder' | translate }}\" [(ngModel)]=\"dataUser.password\"></ion-input>\r\n    </ion-item>\r\n\r\n    <ion-item lines=\"none\">\r\n      <ion-button color=\"light\" slot=\"end\" fill=\"clear\" [routerLink]=\"['../../forgetpassword']\">{{ 'LOGIN.forgetpwd' | translate }}</ion-button>\r\n    </ion-item>\r\n\r\n    <ion-button color=\"light\" expand=\"block\" shape=\"round\" fill=\"outline\" (click)=\"login()\">{{ 'LOGIN.button.login' | translate }}</ion-button>\r\n    <br>\r\n    <ion-button color=\"tertiary\" expand=\"block\" shape=\"round\" [routerLink]=\"['../../register']\" >{{ 'LOGIN.button.register' | translate }}</ion-button>\r\n\r\n    <ion-item lines=\"none\">\r\n      <ion-label color=\"light\" class=\"ion-text-center\">{{ 'LOGIN.orconnect' | translate }}</ion-label>\r\n    </ion-item>\r\n    \r\n    <div class=\"flex\">\r\n      <ion-button color=\"facebook\" shape=\"round\" (click)=\"facebookLogin()\">\r\n        <ion-icon slot=\"start\" name=\"logo-facebook\"></ion-icon>\r\n        {{ 'LOGIN.facebook' | translate }}\r\n      </ion-button>\r\n     <!-- <ion-button color=\"google\" shape=\"round\">\r\n        <ion-icon slot=\"start\" name=\"logo-google\"></ion-icon>\r\n        {{ 'LOGIN.google' | translate }} \r\n      </ion-button>-->\r\n      <ion-button color=\"anonyme\" shape=\"round\" (click)=\"anonymeLogin()\">\r\n        <ion-icon slot=\"start\" name=\"person\"></ion-icon>\r\n        {{ 'LOGIN.anon' | translate }}\r\n      </ion-button>\r\n    </div>\r\n  </div>\r\n</ion-content>\r\n");

/***/ }),

/***/ "./src/app/pages/login/login.module.ts":
/*!*********************************************!*\
  !*** ./src/app/pages/login/login.module.ts ***!
  \*********************************************/
/*! exports provided: LoginPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageModule", function() { return LoginPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./login.page */ "./src/app/pages/login/login.page.ts");
/* harmony import */ var _components_footer_footer_component_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/footer/footer.component.module */ "./src/app/components/footer/footer.component.module.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");









let LoginPageModule = class LoginPageModule {
};
LoginPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild([
                {
                    path: '',
                    component: _login_page__WEBPACK_IMPORTED_MODULE_6__["LoginPage"]
                }
            ]),
            _components_footer_footer_component_module__WEBPACK_IMPORTED_MODULE_7__["TestComponentModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslateModule"]
        ],
        declarations: [_login_page__WEBPACK_IMPORTED_MODULE_6__["LoginPage"]]
    })
], LoginPageModule);



/***/ }),

/***/ "./src/app/pages/login/login.page.scss":
/*!*********************************************!*\
  !*** ./src/app/pages/login/login.page.scss ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".padding {\n  padding: 5% !important;\n  padding-top: 0% !important;\n}\n\n.logo ion-icon {\n  font-size: 9em;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n}\n\n.logo img {\n  height: 100px;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n}\n\n.logo {\n  position: relative;\n  height: 250px;\n}\n\nion-content {\n  --ion-background-color: linear-gradient(#6DD5FA, #2980B9);\n}\n\nion-item {\n  --ion-background-color: transparent!important;\n}\n\nion-button {\n  height: 40px;\n}\n\n.flex {\n  display: flex;\n  justify-content: space-between;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbG9naW4vQzpcXFVzZXJzXFxBR0FSQVVMVFxcRGVza3RvcFxcY29udGVzdDJcXFdvcmxkVmlzaXQvc3JjXFxhcHBcXHBhZ2VzXFxsb2dpblxcbG9naW4ucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9sb2dpbi9sb2dpbi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxzQkFBQTtFQUNBLDBCQUFBO0FDQ0o7O0FEQ0E7RUFDSSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLGdDQUFBO0FDRUo7O0FEQUE7RUFDSSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLGdDQUFBO0FDR0o7O0FEREE7RUFDSSxrQkFBQTtFQUNBLGFBQUE7QUNJSjs7QURGQTtFQUNLLHlEQUFBO0FDS0w7O0FEREE7RUFDSSw2Q0FBQTtBQ0lKOztBRERBO0VBQ0EsWUFBQTtBQ0lBOztBRERBO0VBQ0ksYUFBQTtFQUNBLDhCQUFBO0FDSUoiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9sb2dpbi9sb2dpbi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucGFkZGluZyB7XHJcbiAgICBwYWRkaW5nOiA1JSFpbXBvcnRhbnQ7XHJcbiAgICBwYWRkaW5nLXRvcDogMCUhaW1wb3J0YW50O1xyXG59XHJcbi5sb2dvIGlvbi1pY29ue1xyXG4gICAgZm9udC1zaXplOiA5ZW07XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDUwJTtcclxuICAgIGxlZnQ6IDUwJTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xyXG59XHJcbi5sb2dvIGltZ3tcclxuICAgIGhlaWdodDogMTAwcHg7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDUwJTtcclxuICAgIGxlZnQ6IDUwJTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xyXG59XHJcbi5sb2dvIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGhlaWdodDogMjUwcHg7XHJcbn1cclxuaW9uLWNvbnRlbnQge1xyXG4gICAgIC0taW9uLWJhY2tncm91bmQtY29sb3I6IGxpbmVhci1ncmFkaWVudCgjNkRENUZBLCAjMjk4MEI5KTtcclxuICAgIC8vIC0taW9uLWJhY2tncm91bmQtY29sb3I6IGxpbmVhci1ncmFkaWVudCgjZjVhZjE5LCAjZjEyNzExKTtcclxuICAgIC8vIC0taW9uLWJhY2tncm91bmQtY29sb3I6IGxpbmVhci1ncmFkaWVudCgjNDg1NTYzLCAjMjkzMjNjKTtcclxufVxyXG5pb24taXRlbSB7XHJcbiAgICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbmlvbi1idXR0b24ge1xyXG5oZWlnaHQ6IDQwcHg7XHJcbn1cclxuXHJcbi5mbGV4IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbn0iLCIucGFkZGluZyB7XG4gIHBhZGRpbmc6IDUlICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmctdG9wOiAwJSAhaW1wb3J0YW50O1xufVxuXG4ubG9nbyBpb24taWNvbiB7XG4gIGZvbnQtc2l6ZTogOWVtO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNTAlO1xuICBsZWZ0OiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xufVxuXG4ubG9nbyBpbWcge1xuICBoZWlnaHQ6IDEwMHB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNTAlO1xuICBsZWZ0OiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xufVxuXG4ubG9nbyB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgaGVpZ2h0OiAyNTBweDtcbn1cblxuaW9uLWNvbnRlbnQge1xuICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiBsaW5lYXItZ3JhZGllbnQoIzZERDVGQSwgIzI5ODBCOSk7XG59XG5cbmlvbi1pdGVtIHtcbiAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQhaW1wb3J0YW50O1xufVxuXG5pb24tYnV0dG9uIHtcbiAgaGVpZ2h0OiA0MHB4O1xufVxuXG4uZmxleCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/pages/login/login.page.ts":
/*!*******************************************!*\
  !*** ./src/app/pages/login/login.page.ts ***!
  \*******************************************/
/*! exports provided: LoginPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPage", function() { return LoginPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/es2015/index.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! firebase/app */ "./node_modules/firebase/app/dist/index.cjs.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _ionic_native_facebook_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/facebook/ngx */ "./node_modules/@ionic-native/facebook/ngx/index.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");









let LoginPage = class LoginPage {
    constructor(navCtrl, toastController, afAuth, fb, platform, translate) {
        this.navCtrl = navCtrl;
        this.toastController = toastController;
        this.afAuth = afAuth;
        this.fb = fb;
        this.platform = platform;
        this.translate = translate;
        this.dataUser = {
            email: '',
            password: ''
        };
        this.providerFb = new firebase_app__WEBPACK_IMPORTED_MODULE_4__["auth"].FacebookAuthProvider();
        this.afAuth.authState.subscribe(auth => {
            if (!auth) {
                this.connected = false;
            }
            else {
                this.connected = true;
                this.userId = auth.uid;
                this.mail = auth.email;
                /*this.method = auth.providerData[0].providerId;*/
            }
        });
    }
    /* --- --- CHARGEMENT DE LA PAGE --- --- */
    ngOnInit() {
        this.logout();
    }
    /* --- --- CONNECTION EMAIL --- --- */
    login() {
        this.afAuth.auth.signInWithEmailAndPassword(this.dataUser.email, this.dataUser.password)
            .then(() => {
            console.log('Connexion r�ussie');
            this.loginSuccess();
            this.dataUser = {
                email: '',
                password: ''
            };
            this.navCtrl.navigateRoot('map');
        }).catch(err => {
            this.loginError();
            console.log('Erreur: ' + err);
        });
    }
    loginError() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const toast = yield this.toastController.create({
                message: this.translate.instant('TOAST.login.invalid'),
                //',
                position: 'top',
                duration: 2000,
            });
            toast.present();
        });
    }
    loginSuccess() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const toast = yield this.toastController.create({
                message: this.translate.instant('TOAST.login.connected'),
                position: 'top',
                duration: 2000
            });
            toast.present();
        });
    }
    /* --- --- CONNECTION FACEBOOK --- --- */
    facebookLogin() {
        if (this.platform.is('cordova')) {
            console.log('PLateforme cordova');
            this.facebookCordova();
        }
        else {
            console.log('PLateforme Web');
            this.facebookWeb();
        }
    }
    facebookCordova() {
        this.fb.login(['email']).then((response) => {
            const facebookCredential = firebase_app__WEBPACK_IMPORTED_MODULE_4__["auth"].FacebookAuthProvider
                .credential(response.authResponse.accessToken);
            firebase_app__WEBPACK_IMPORTED_MODULE_4__["auth"]().signInWithCredential(facebookCredential)
                .then((success) => {
                console.log('Info Facebook: ' + JSON.stringify(success));
                this.navCtrl.navigateRoot('map');
            }).catch((error) => {
                console.log('Erreur: ' + JSON.stringify(error));
            });
        }).catch((error) => { console.log(error); });
    }
    facebookWeb() {
        this.afAuth.auth
            .signInWithPopup(new firebase_app__WEBPACK_IMPORTED_MODULE_4__["auth"].FacebookAuthProvider())
            .then((success) => {
            console.log('Info Facebook: ' + JSON.stringify(success));
            this.navCtrl.navigateRoot('map');
        }).catch((error) => {
            console.log('Erreur: ' + JSON.stringify(error));
        });
    }
    /* --- --- CONNECTION ANONYME --- --- */
    anonymeLogin() {
        this.afAuth.auth.signInAnonymously().then(() => {
            console.log('Connexion r&eacute;ussie');
            this.loginSuccess();
            this.navCtrl.navigateRoot('social');
        }).catch(err => {
            this.loginError();
            console.log('Erreur: ' + err);
        });
    }
    /* --- --- DECONNECTION --- --- */
    logout() {
        this.afAuth.auth.signOut();
    }
};
LoginPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"] },
    { type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__["AngularFireAuth"] },
    { type: _ionic_native_facebook_ngx__WEBPACK_IMPORTED_MODULE_5__["Facebook"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"] },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateService"] }
];
LoginPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-login',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./login.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/login/login.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./login.page.scss */ "./src/app/pages/login/login.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"],
        _angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__["AngularFireAuth"],
        _ionic_native_facebook_ngx__WEBPACK_IMPORTED_MODULE_5__["Facebook"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"],
        _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateService"]])
], LoginPage);



/***/ })

}]);
//# sourceMappingURL=pages-login-login-module-es2015.js.map