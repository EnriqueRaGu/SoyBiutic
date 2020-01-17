import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
var HomeusuarioPage = /** @class */ (function () {
    function HomeusuarioPage(afAuth) {
        this.afAuth = afAuth;
    }
    HomeusuarioPage.prototype.ngOnInit = function () {
    };
    HomeusuarioPage.prototype.cerrarSesion = function () {
        this.afAuth.auth.signOut();
        console.log('Cierre completado');
    };
    var _a;
    HomeusuarioPage = tslib_1.__decorate([
        Component({
            selector: 'app-homeusuario',
            templateUrl: './homeusuario.page.html',
            styleUrls: ['./homeusuario.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof AngularFireAuth !== "undefined" && AngularFireAuth) === "function" ? _a : Object])
    ], HomeusuarioPage);
    return HomeusuarioPage;
}());
export { HomeusuarioPage };
//# sourceMappingURL=homeusuario.page.js.map