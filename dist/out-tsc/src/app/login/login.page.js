import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
var LoginPage = /** @class */ (function () {
    function LoginPage(afAuth, router, alert) {
        this.afAuth = afAuth;
        this.router = router;
        this.alert = alert;
        this.usuario = "";
        this.contrasena = "";
        // this.afAuth.authState.subscribe(user => {
        //   console.log('Estado del usuario: ', user);
        //   if(!user) {
        //     return ;
        //   }
        //   this.router.navigate(['/home'])
        // })
    }
    LoginPage.prototype.ngOnInit = function () {
    };
    LoginPage.prototype.login = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var _a, usuario, contrasena, res, user, err_1;
            return tslib_1.__generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this, usuario = _a.usuario, contrasena = _a.contrasena;
                        _b.label = 1;
                    case 1:
                        _b.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, this.afAuth.auth.signInWithEmailAndPassword(usuario + '@gmail.com', contrasena)];
                    case 2:
                        res = _b.sent();
                        user = this.afAuth.auth.currentUser;
                        if (user) {
                            if (usuario == "soybiutic") {
                                this.router.navigate(['/home']);
                                console.log("usuario administrador");
                            }
                            else {
                                this.router.navigate(['/homeusuario']);
                                console.log("usuario normal");
                            }
                        }
                        return [3 /*break*/, 4];
                    case 3:
                        err_1 = _b.sent();
                        this.showAlert("Error!", "Datos no validos");
                        console.dir(err_1);
                        if (err_1.code === "auth/user-not-found") {
                            console.log("User not Found");
                            this.showAlert("Error!", "Datos no validos");
                        }
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    LoginPage.prototype.showAlert = function (header, message) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var alert;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alert.create({
                            header: header,
                            message: message,
                            buttons: ["OK"]
                        })];
                    case 1:
                        alert = _a.sent();
                        return [4 /*yield*/, alert.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    LoginPage = tslib_1.__decorate([
        Component({
            selector: 'app-login',
            templateUrl: './login.page.html',
            styleUrls: ['./login.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [AngularFireAuth, Router, AlertController])
    ], LoginPage);
    return LoginPage;
}());
export { LoginPage };
//# sourceMappingURL=login.page.js.map