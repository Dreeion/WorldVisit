(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-settings-settings-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/settings/settings.page.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/settings/settings.page.html ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar>\r\n    <ion-title>{{ 'SETTINGS.title' | translate }}</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content class=\"content\">\r\n<div class=\"padding\">\r\n <h2>{{ 'SETTINGS.notification.title' | translate }}</h2>\r\n\r\n <ion-list>\r\n  <ion-item>\r\n    <ion-label>{{ 'SETTINGS.notification.near' | translate }}</ion-label>\r\n    <ion-toggle></ion-toggle>\r\n  </ion-item>\r\n\r\n  <ion-item>\r\n    <ion-label>{{ 'SETTINGS.notification.newsletter' | translate }}</ion-label>\r\n    <ion-toggle></ion-toggle>\r\n  </ion-item>\r\n  \r\n  </ion-list>\r\n  \r\n  <h2>{{ 'SETTINGS.username.title' | translate }}</h2>\r\n  <ion-input type=\"text\" placeholder=\"{{ 'SETTINGS.username.placeholder' | translate }}\" [(ngModel)]=\"dataUser.pseudo\"></ion-input>\r\n  <br>\r\n  <ion-button color=\"success\" expand=\"block\" shape=\"round\" fill=\"outline\" (click)=\"resetPseudo()\">{{ 'SETTINGS.username.validate' | translate }}</ion-button>\r\n\r\n    <h2>{{ 'SETTINGS.password.title' | translate }}</h2>\r\n  <!--<ion-input type=\"password\"  placeholder=\"Mot de passe actuel\" [(ngModel)]=\"dataUser.oldPassword\"></ion-input>-->\r\n  <br>\r\n  <ion-input type=\"password\" placeholder=\"{{ 'SETTINGS.password.placeholder' | translate }}\" [(ngModel)]=\"dataUser.newPassword\"></ion-input>\r\n  <br>\r\n  <ion-button color=\"success\" expand=\"block\" shape=\"round\" fill=\"outline\" (click)=\"resetPassword()\">{{ 'SETTINGS.password.validate' | translate }}</ion-button>\r\n  <h2>{{ 'SETTINGS.profile.title' | translate }}</h2>\r\n  \r\n <ion-list class=\"list-avatar\">\r\n  <ion-avatar>\r\n  <img src=\"https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y\">\r\n  </ion-avatar>\r\n  <ion-avatar>\r\n  <img src=\"https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y\">\r\n  </ion-avatar>\r\n  <ion-avatar>\r\n  <img src=\"https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y\">\r\n  </ion-avatar>\r\n  <ion-avatar>\r\n  <img src=\"../../assets/pdp/pdp4.jpg\">\r\n  </ion-avatar>\r\n    </ion-list>\r\n<ion-list class=\"list-avatar\">\r\n  <ion-avatar>\r\n  <img src=\"../../assets/pdp/pdp5.png\"> \r\n  </ion-avatar>\r\n  <ion-avatar>\r\n  <img src=\"../../assets/pdp/pdp6.png\"> \r\n  </ion-avatar>\r\n  <ion-avatar>\r\n  <img src=\"../../assets/pdp/pdp7.png\"> \r\n  </ion-avatar>\r\n  <ion-avatar>\r\n  <img src=\"../../assets/pdp/pdp8.jpg\"> \r\n  </ion-avatar>\r\n    </ion-list>\r\n\r\n\r\n  <h2>{{ 'SETTINGS.lang.title' | translate }}</h2>\r\n<ion-list class=\"list-drapeau\">\r\n <img  class=\"drapeau\" (click)=\"select('fr')\" src=\"../../assets/icons/drapeau/francais.png\" alt=\"image\">\r\n <img class=\"drapeau\" (click)=\"select('en')\" src=\"../../assets/icons/drapeau/anglais.png\" alt=\"image\">\r\n</ion-list>\r\n<br/>\r\n   <p id=\"suppr\"> <ion-button (click)=\"deleteUser()\" color=\"danger\" >{{ 'SETTINGS.delete' | translate }}</ion-button>\r\n   <ion-button (click)=\"logout()\" color=\"danger\" >{{ 'SETTINGS.logout' | translate }}</ion-button> </p>\r\n   <p> <ion-tab-button color=\"medium\" id=\"cgu\" tab=\"cgu\">{{ 'SETTINGS.cgu' | translate }}</ion-tab-button> </p>\r\n   <br/><br/>\r\n   </div>\r\n</ion-content>\r\n\r\n<app-footer></app-footer>\r\n");

/***/ }),

/***/ "./src/app/pages/settings/settings-routing.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/settings/settings-routing.module.ts ***!
  \***********************************************************/
/*! exports provided: SettingsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsPageRoutingModule", function() { return SettingsPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _settings_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./settings.page */ "./src/app/pages/settings/settings.page.ts");




const routes = [
    {
        path: '',
        component: _settings_page__WEBPACK_IMPORTED_MODULE_3__["SettingsPage"]
    }
];
let SettingsPageRoutingModule = class SettingsPageRoutingModule {
};
SettingsPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], SettingsPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/settings/settings.module.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/settings/settings.module.ts ***!
  \***************************************************/
/*! exports provided: SettingsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsPageModule", function() { return SettingsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _settings_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./settings-routing.module */ "./src/app/pages/settings/settings-routing.module.ts");
/* harmony import */ var _settings_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./settings.page */ "./src/app/pages/settings/settings.page.ts");
/* harmony import */ var _components_footer_footer_component_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/footer/footer.component.module */ "./src/app/components/footer/footer.component.module.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");









let SettingsPageModule = class SettingsPageModule {
};
SettingsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _settings_routing_module__WEBPACK_IMPORTED_MODULE_5__["SettingsPageRoutingModule"],
            _components_footer_footer_component_module__WEBPACK_IMPORTED_MODULE_7__["TestComponentModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslateModule"]
        ],
        declarations: [_settings_page__WEBPACK_IMPORTED_MODULE_6__["SettingsPage"]]
    })
], SettingsPageModule);



/***/ }),

/***/ "./src/app/pages/settings/settings.page.scss":
/*!***************************************************!*\
  !*** ./src/app/pages/settings/settings.page.scss ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-title {\n  z-index: 3;\n  text-align: center;\n}\n\n.padding {\n  padding: 5% !important;\n}\n\nion-input {\n  border: 1px solid;\n  border-radius: 8px;\n}\n\n.list-avatar {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-around;\n}\n\n.list-drapeau {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-around;\n}\n\n.list-profil {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-around;\n}\n\n.profil {\n  width: 40px;\n  height: 40px;\n  border-radius: 20px;\n  border: 1px solid;\n}\n\n.drapeau {\n  width: 75px;\n  height: 50px;\n  background: green;\n  cursor: pointer;\n}\n\n#cgu {\n  text-align: center;\n}\n\n#suppr {\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvc2V0dGluZ3MvQzpcXFVzZXJzXFxBR0FSQVVMVFxcRGVza3RvcFxcY29udGVzdDJcXFdvcmxkVmlzaXQvc3JjXFxhcHBcXHBhZ2VzXFxzZXR0aW5nc1xcc2V0dGluZ3MucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9zZXR0aW5ncy9zZXR0aW5ncy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxVQUFBO0VBQ0Esa0JBQUE7QUNDSjs7QURFQTtFQUNJLHNCQUFBO0FDQ0o7O0FERUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FDQ0E7O0FERUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSw2QkFBQTtBQ0NBOztBREVBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsNkJBQUE7QUNDQTs7QURFQTtFQUVBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDZCQUFBO0FDQUE7O0FER0E7RUFDQyxXQUFBO0VBQ0csWUFBQTtFQUNBLG1CQUFBO0VBQ0gsaUJBQUE7QUNBRDs7QURLQTtFQUNDLFdBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0FDRkQ7O0FETUE7RUFDQyxrQkFBQTtBQ0hEOztBRE1BO0VBQ0Msa0JBQUE7QUNIRCIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3NldHRpbmdzL3NldHRpbmdzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi10aXRsZXtcclxuICAgIHotaW5kZXg6IDM7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5wYWRkaW5nIHtcclxuICAgIHBhZGRpbmc6IDUlIWltcG9ydGFudDtcclxufVxyXG5cclxuaW9uLWlucHV0e1xyXG5ib3JkZXI6IDFweCBzb2xpZDtcclxuYm9yZGVyLXJhZGl1czo4cHg7XHJcbn1cclxuXHJcbi5saXN0LWF2YXRhciB7XHJcbmRpc3BsYXk6ZmxleDtcclxuZmxleC1kaXJlY3Rpb246cm93O1xyXG5qdXN0aWZ5LWNvbnRlbnQ6c3BhY2UtYXJvdW5kO1xyXG59XHJcblxyXG4ubGlzdC1kcmFwZWF1IHtcclxuZGlzcGxheTpmbGV4O1xyXG5mbGV4LWRpcmVjdGlvbjpyb3c7XHJcbmp1c3RpZnktY29udGVudDpzcGFjZS1hcm91bmQ7XHJcbn1cclxuXHJcbi5saXN0LXByb2ZpbCB7XHJcblx0XHJcbmRpc3BsYXk6ZmxleDtcclxuZmxleC1kaXJlY3Rpb246cm93O1xyXG5qdXN0aWZ5LWNvbnRlbnQ6c3BhY2UtYXJvdW5kO1xyXG59XHJcblxyXG4ucHJvZmlse1xyXG5cdHdpZHRoOiA0MHB4O1xyXG4gICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuXHRib3JkZXI6IDFweCBzb2xpZDtcclxufVxyXG5cclxuXHJcblxyXG4uZHJhcGVhdXtcclxuXHR3aWR0aDogNzVweDtcclxuXHRoZWlnaHQ6IDUwcHg7XHJcblx0YmFja2dyb3VuZDogZ3JlZW47XHJcblx0Y3Vyc29yOiBwb2ludGVyO1xyXG5cdH1cclxuXHRcclxuXHRcclxuI2NndXtcclxuXHR0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbiNzdXBwcntcclxuXHR0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuIiwiaW9uLXRpdGxlIHtcbiAgei1pbmRleDogMztcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4ucGFkZGluZyB7XG4gIHBhZGRpbmc6IDUlICFpbXBvcnRhbnQ7XG59XG5cbmlvbi1pbnB1dCB7XG4gIGJvcmRlcjogMXB4IHNvbGlkO1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG59XG5cbi5saXN0LWF2YXRhciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xufVxuXG4ubGlzdC1kcmFwZWF1IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG59XG5cbi5saXN0LXByb2ZpbCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xufVxuXG4ucHJvZmlsIHtcbiAgd2lkdGg6IDQwcHg7XG4gIGhlaWdodDogNDBweDtcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgYm9yZGVyOiAxcHggc29saWQ7XG59XG5cbi5kcmFwZWF1IHtcbiAgd2lkdGg6IDc1cHg7XG4gIGhlaWdodDogNTBweDtcbiAgYmFja2dyb3VuZDogZ3JlZW47XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuI2NndSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuI3N1cHByIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/pages/settings/settings.page.ts":
/*!*************************************************!*\
  !*** ./src/app/pages/settings/settings.page.ts ***!
  \*************************************************/
/*! exports provided: SettingsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsPage", function() { return SettingsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/es2015/index.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! firebase/app */ "./node_modules/firebase/app/dist/index.cjs.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _services_languageService_language_service_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/languageService/language-service.service */ "./src/app/services/languageService/language-service.service.ts");







let SettingsPage = class SettingsPage {
    constructor(afAuth, toastController, navCtrl, languageService) {
        this.afAuth = afAuth;
        this.toastController = toastController;
        this.navCtrl = navCtrl;
        this.languageService = languageService;
        this.languages = [];
        this.selected = '';
        this.dataUser = {
            email: '',
            password: '',
            newPassword: '',
            oldPassword: '',
            pseudo: '',
            uid: ''
        };
    }
    ngOnInit() {
        this.languages = this.languageService.getLanguages();
        this.selected = this.languageService.selected;
    }
    select(lng) {
        this.languageService.setLanguage(lng);
    }
    deleteUser() {
        var user = firebase_app__WEBPACK_IMPORTED_MODULE_3__["auth"]().currentUser;
        user.delete().then(() => {
            this.navCtrl.navigateRoot('pages/login');
        }).catch(function (error) {
            // An error happened.
        });
    }
    logout() {
        localStorage.clear();
        this.navCtrl.navigateRoot('pages/login');
    }
    resetPassword() {
        var user = firebase_app__WEBPACK_IMPORTED_MODULE_3__["auth"]().currentUser;
        var newPassword = this.dataUser.newPassword;
        var oldPassword = this.dataUser.oldPassword;
        /*var password = this.dataUser.password;*/
        //if (oldPassword === password) {*/
        user.updatePassword(newPassword).then(function () {
            // Update successful.
            console.log('passwordReset');
        }).catch(function (error) {
            // An error happened.
        });
        // }
        //   else{console.log('mdp diff�rent');}
    }
    resetPseudo() {
        this.afAuth.authState.subscribe(auth => {
            var postData = {
                pseudo: this.dataUser.pseudo,
            };
            var newPostKey = firebase_app__WEBPACK_IMPORTED_MODULE_3__["database"]().ref().child('Users').push().key;
            var updates = {};
            updates['/Users/' + auth.uid] = postData;
            return firebase_app__WEBPACK_IMPORTED_MODULE_3__["database"]().ref().update(updates);
        });
    }
};
SettingsPage.ctorParameters = () => [
    { type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__["AngularFireAuth"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"] },
    { type: _services_languageService_language_service_service__WEBPACK_IMPORTED_MODULE_5__["LanguageServiceService"] }
];
SettingsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-settings',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./settings.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/settings/settings.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./settings.page.scss */ "./src/app/pages/settings/settings.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__["AngularFireAuth"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"],
        _services_languageService_language_service_service__WEBPACK_IMPORTED_MODULE_5__["LanguageServiceService"]])
], SettingsPage);



/***/ })

}]);
//# sourceMappingURL=pages-settings-settings-module-es2015.js.map