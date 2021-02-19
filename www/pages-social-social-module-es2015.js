(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-social-social-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/social/social.page.html":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/social/social.page.html ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content class=\"content\">\r\n    <ion-title class=\"title\">{{ 'SOCIAL.highlight' | translate }}</ion-title>\r\n    <div class=\"scroll\">\r\n        <ion-card-content class=\"content_img\">\r\n            \r\n            <table>\r\n                <tr *ngFor=\"let item of pays; index as i\">\r\n                    <td *ngFor=\"let item of pays[i] | keyvalue\">\r\n                        {{item.value}}\r\n                    </td>\r\n                    <td >\r\n                        <button (click)=\"deletePays(item['nom']);\">SUPPRIMER</button>\r\n                    </td>\r\n                </tr>\r\n\r\n        </table>\r\n        </ion-card-content>\r\n    </div>\r\n\r\n    <ion-content class=\"footer\"></ion-content>\r\n</ion-content>\r\n\r\n<ion-button  [routerLink]=\"['../map']\"  color=\"secondary\" expand=\"block\" style=\"z-index: 8000;position: absolute;left: 0px;bottom:0px;width:100%\">\r\n    AJOUTER UN PAYS\r\n</ion-button>\r\n\r\n");

/***/ }),

/***/ "./src/app/pages/social/social-routing.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/pages/social/social-routing.module.ts ***!
  \*******************************************************/
/*! exports provided: SocialPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SocialPageRoutingModule", function() { return SocialPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _social_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./social.page */ "./src/app/pages/social/social.page.ts");




const routes = [
    {
        path: '',
        component: _social_page__WEBPACK_IMPORTED_MODULE_3__["SocialPage"]
    }
];
let SocialPageRoutingModule = class SocialPageRoutingModule {
};
SocialPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], SocialPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/social/social.module.ts":
/*!***********************************************!*\
  !*** ./src/app/pages/social/social.module.ts ***!
  \***********************************************/
/*! exports provided: SocialPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SocialPageModule", function() { return SocialPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _social_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./social-routing.module */ "./src/app/pages/social/social-routing.module.ts");
/* harmony import */ var _social_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./social.page */ "./src/app/pages/social/social.page.ts");
/* harmony import */ var _components_footer_footer_component_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/footer/footer.component.module */ "./src/app/components/footer/footer.component.module.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");








let SocialPageModule = class SocialPageModule {
};
SocialPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
            _social_routing_module__WEBPACK_IMPORTED_MODULE_4__["SocialPageRoutingModule"],
            _components_footer_footer_component_module__WEBPACK_IMPORTED_MODULE_6__["TestComponentModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateModule"]
        ],
        declarations: [_social_page__WEBPACK_IMPORTED_MODULE_5__["SocialPage"]]
    })
], SocialPageModule);



/***/ }),

/***/ "./src/app/pages/social/social.page.scss":
/*!***********************************************!*\
  !*** ./src/app/pages/social/social.page.scss ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".content {\n  background-position: center;\n  display: flex;\n  flex-direction: row;\n  justify-content: space-around;\n  overflow-y: hidden;\n  position: absolute;\n}\n\n.title {\n  font-weight: bold;\n  margin-top: 5%;\n  text-align: left;\n}\n\n.content_img {\n  margin: 0;\n  padding: 0;\n  display: table-cell;\n}\n\n.scroll {\n  overflow-y: auto;\n}\n\n.content_img img {\n  display: inline-block;\n  text-align: center;\n  padding: 14px;\n  text-decoration: none;\n  margin: 0;\n  max-height: 200px;\n  max-width: 150px;\n  min-height: 200px;\n  min-width: 150px;\n}\n\n.img_popular {\n  clip: rect(50px, auto, auto, 37.5px);\n}\n\n.card_mybook {\n  height: auto;\n  --ion-background-color: #000000;\n  position: relative;\n}\n\n.content_mybook {\n  position: relative;\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n}\n\n.left {\n  position: relative;\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-start;\n  padding: 0;\n  margin: 0;\n}\n\n.avatar {\n  height: 50px;\n  width: 50px;\n  vertical-align: top;\n}\n\n.name {\n  color: #000000;\n  line-height: 50px;\n}\n\n.date {\n  line-height: 50px;\n  justify-self: flex-end;\n}\n\n.img {\n  height: auto;\n  max-width: 350px;\n  width: auto;\n  margin-left: auto;\n  margin-right: auto;\n  margin-bottom: 10%;\n}\n\n.footer {\n  height: 10%;\n}\n\n::-webkit-scrollbar {\n  display: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvc29jaWFsL0M6XFxVc2Vyc1xcQUdBUkFVTFRcXERlc2t0b3BcXGNvbnRlc3QyXFxXb3JsZFZpc2l0L3NyY1xcYXBwXFxwYWdlc1xcc29jaWFsXFxzb2NpYWwucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9zb2NpYWwvc29jaWFsLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLDJCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsNkJBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0FDQ0Y7O0FERUE7RUFDRSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtBQ0NGOztBREVBO0VBQ0UsU0FBQTtFQUNBLFVBQUE7RUFDQSxtQkFBQTtBQ0NGOztBREVBO0VBQ0UsZ0JBQUE7QUNDRjs7QURFQTtFQUNFLHFCQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EscUJBQUE7RUFDQSxTQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7QUNDRjs7QURFQTtFQUNFLG9DQUFBO0FDQ0Y7O0FERUE7RUFDRSxZQUFBO0VBQ0EsK0JBQUE7RUFDQSxrQkFBQTtBQ0NGOztBREVBO0VBQ0Usa0JBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtBQ0NGOztBREVBO0VBQ0Usa0JBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSwyQkFBQTtFQUNBLFVBQUE7RUFDQSxTQUFBO0FDQ0Y7O0FERUE7RUFDRSxZQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0FDQ0Y7O0FERUE7RUFDRSxjQUFBO0VBQ0EsaUJBQUE7QUNDRjs7QURFQTtFQUNFLGlCQUFBO0VBQ0Esc0JBQUE7QUNDRjs7QURFQTtFQUNFLFlBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7QUNDRjs7QURFQTtFQUNFLFdBQUE7QUNDRjs7QURFQTtFQUNFLGFBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3NvY2lhbC9zb2NpYWwucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRlbnR7XHJcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxuICBvdmVyZmxvdy15OiBoaWRkZW47XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG59XHJcblxyXG4udGl0bGV7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgbWFyZ2luLXRvcDogNSU7XHJcbiAgdGV4dC1hbGlnbjogbGVmdDtcclxufVxyXG5cclxuLmNvbnRlbnRfaW1ne1xyXG4gIG1hcmdpbjogMDtcclxuICBwYWRkaW5nOiAwO1xyXG4gIGRpc3BsYXk6IHRhYmxlLWNlbGw7XHJcbn1cclxuXHJcbi5zY3JvbGwge1xyXG4gIG92ZXJmbG93LXk6IGF1dG87XHJcbn1cclxuXHJcbi5jb250ZW50X2ltZyBpbWd7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBwYWRkaW5nOiAxNHB4O1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICBtYXJnaW46IDA7XHJcbiAgbWF4LWhlaWdodDogMjAwcHg7XHJcbiAgbWF4LXdpZHRoOiAxNTBweDtcclxuICBtaW4taGVpZ2h0OiAyMDBweDtcclxuICBtaW4td2lkdGg6IDE1MHB4O1xyXG59XHJcblxyXG4uaW1nX3BvcHVsYXJ7XHJcbiAgY2xpcDogcmVjdCg1MHB4LCBhdXRvLCBhdXRvLCAzNy41cHgpO1xyXG59XHJcblxyXG4uY2FyZF9teWJvb2t7XHJcbiAgaGVpZ2h0OiBhdXRvO1xyXG4gIC0taW9uLWJhY2tncm91bmQtY29sb3I6ICMwMDAwMDA7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcblxyXG4uY29udGVudF9teWJvb2t7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbn1cclxuXHJcbi5sZWZ0e1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xyXG4gIHBhZGRpbmc6IDA7XHJcbiAgbWFyZ2luOiAwO1xyXG59XHJcblxyXG4uYXZhdGFye1xyXG4gIGhlaWdodDogNTBweDtcclxuICB3aWR0aDogNTBweDtcclxuICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xyXG59XHJcblxyXG4ubmFtZXtcclxuICBjb2xvcjogIzAwMDAwMDtcclxuICBsaW5lLWhlaWdodDogNTBweDtcclxufVxyXG5cclxuLmRhdGV7XHJcbiAgbGluZS1oZWlnaHQ6IDUwcHg7XHJcbiAganVzdGlmeS1zZWxmOiBmbGV4LWVuZDtcclxufVxyXG5cclxuLmltZ3tcclxuICBoZWlnaHQ6IGF1dG87XHJcbiAgbWF4LXdpZHRoOiAzNTBweDtcclxuICB3aWR0aDogYXV0bztcclxuICBtYXJnaW4tbGVmdDogYXV0bztcclxuICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbiAgbWFyZ2luLWJvdHRvbTogMTAlO1xyXG59XHJcblxyXG4uZm9vdGVye1xyXG4gIGhlaWdodDogMTAlO1xyXG59XHJcblxyXG46Oi13ZWJraXQtc2Nyb2xsYmFyIHtcclxuICBkaXNwbGF5OiBub25lO1xyXG59XHJcbiIsIi5jb250ZW50IHtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgb3ZlcmZsb3cteTogaGlkZGVuO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG59XG5cbi50aXRsZSB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBtYXJnaW4tdG9wOiA1JTtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbn1cblxuLmNvbnRlbnRfaW1nIHtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xuICBkaXNwbGF5OiB0YWJsZS1jZWxsO1xufVxuXG4uc2Nyb2xsIHtcbiAgb3ZlcmZsb3cteTogYXV0bztcbn1cblxuLmNvbnRlbnRfaW1nIGltZyB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwYWRkaW5nOiAxNHB4O1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIG1hcmdpbjogMDtcbiAgbWF4LWhlaWdodDogMjAwcHg7XG4gIG1heC13aWR0aDogMTUwcHg7XG4gIG1pbi1oZWlnaHQ6IDIwMHB4O1xuICBtaW4td2lkdGg6IDE1MHB4O1xufVxuXG4uaW1nX3BvcHVsYXIge1xuICBjbGlwOiByZWN0KDUwcHgsIGF1dG8sIGF1dG8sIDM3LjVweCk7XG59XG5cbi5jYXJkX215Ym9vayB7XG4gIGhlaWdodDogYXV0bztcbiAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjogIzAwMDAwMDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4uY29udGVudF9teWJvb2sge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cblxuLmxlZnQge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgcGFkZGluZzogMDtcbiAgbWFyZ2luOiAwO1xufVxuXG4uYXZhdGFyIHtcbiAgaGVpZ2h0OiA1MHB4O1xuICB3aWR0aDogNTBweDtcbiAgdmVydGljYWwtYWxpZ246IHRvcDtcbn1cblxuLm5hbWUge1xuICBjb2xvcjogIzAwMDAwMDtcbiAgbGluZS1oZWlnaHQ6IDUwcHg7XG59XG5cbi5kYXRlIHtcbiAgbGluZS1oZWlnaHQ6IDUwcHg7XG4gIGp1c3RpZnktc2VsZjogZmxleC1lbmQ7XG59XG5cbi5pbWcge1xuICBoZWlnaHQ6IGF1dG87XG4gIG1heC13aWR0aDogMzUwcHg7XG4gIHdpZHRoOiBhdXRvO1xuICBtYXJnaW4tbGVmdDogYXV0bztcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICBtYXJnaW4tYm90dG9tOiAxMCU7XG59XG5cbi5mb290ZXIge1xuICBoZWlnaHQ6IDEwJTtcbn1cblxuOjotd2Via2l0LXNjcm9sbGJhciB7XG4gIGRpc3BsYXk6IG5vbmU7XG59Il19 */");

/***/ }),

/***/ "./src/app/pages/social/social.page.ts":
/*!*********************************************!*\
  !*** ./src/app/pages/social/social.page.ts ***!
  \*********************************************/
/*! exports provided: SocialPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SocialPage", function() { return SocialPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_firebaseService_firebase_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/firebaseService/firebase-service.service */ "./src/app/services/firebaseService/firebase-service.service.ts");
/* harmony import */ var _services_userService_user_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/userService/user-service.service */ "./src/app/services/userService/user-service.service.ts");




let SocialPage = class SocialPage {
    constructor(firebase, user) {
        this.firebase = firebase;
        this.user = user;
        this.pays = [];
        this.getPays();
    }
    getPays() {
        this.firebase.getDataFromFirebase("Pays").then(res => this.pays = res);
    }
    deletePays(pays) {
        this.firebase.deleteAtPath("Pays/" + pays + '/');
    }
    takePicture() {
        console.log('clickButton');
    }
};
SocialPage.ctorParameters = () => [
    { type: _services_firebaseService_firebase_service_service__WEBPACK_IMPORTED_MODULE_2__["FirebaseService"] },
    { type: _services_userService_user_service_service__WEBPACK_IMPORTED_MODULE_3__["UserService"] }
];
SocialPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-social',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./social.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/social/social.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./social.page.scss */ "./src/app/pages/social/social.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_firebaseService_firebase_service_service__WEBPACK_IMPORTED_MODULE_2__["FirebaseService"],
        _services_userService_user_service_service__WEBPACK_IMPORTED_MODULE_3__["UserService"]])
], SocialPage);



/***/ }),

/***/ "./src/app/services/userService/user-service.service.ts":
/*!**************************************************************!*\
  !*** ./src/app/services/userService/user-service.service.ts ***!
  \**************************************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase/app */ "./node_modules/firebase/app/dist/index.cjs.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_2__);



let UserService = class UserService {
    constructor() {
    }
    getCurrentUserId() {
        return firebase_app__WEBPACK_IMPORTED_MODULE_2__["auth"]().currentUser.uid;
    }
};
UserService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], UserService);



/***/ })

}]);
//# sourceMappingURL=pages-social-social-module-es2015.js.map