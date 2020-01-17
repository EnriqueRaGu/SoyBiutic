import * as tslib_1 from "tslib";
import { Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { Http } from '@angular/http';
import { AngularFirestore } from '@angular/fire/firestore';
var TrabajadorPage = /** @class */ (function () {
    function TrabajadorPage(router, alert, http, afs) {
        this.router = router;
        this.alert = alert;
        this.http = http;
        this.afs = afs;
    }
    TrabajadorPage.prototype.ngOnInit = function () {
    };
    TrabajadorPage.prototype.createPost = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var image, nombre;
            return tslib_1.__generator(this, function (_a) {
                image = this.imageURL;
                nombre = this.nombre;
                this.afs.doc("empleados/" + nombre).set({
                    nombre: nombre,
                    image: image
                });
                this.imageURL = "";
                this.nombre = "";
                this.router.navigate(['/home']);
                this.showAlert("Bien!", "Se agrego el trabajador corectamente!");
                return [2 /*return*/];
            });
        });
    };
    TrabajadorPage.prototype.volver = function () {
        this.router.navigate(['/home']);
    };
    TrabajadorPage.prototype.showAlert = function (header, message) {
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
    TrabajadorPage.prototype.fileChanged = function (event) {
        var _this = this;
        var files = event.target.files;
        var data = new FormData();
        data.append('file', files[0]);
        data.append('UPLOADCARE_STORE', '1');
        data.append('UPLOADCARE_PUB_KEY', 'ddf99e53132b3e7a2b63');
        this.http.post('https://upload.uploadcare.com/base/', data)
            .subscribe(function (event) {
            console.log(event);
            _this.imageURL = event.json().file;
        });
    };
    TrabajadorPage.prototype.uploadFile = function () {
        this.fileButton.nativeElement.click();
    };
    tslib_1.__decorate([
        ViewChild('fileButton'),
        tslib_1.__metadata("design:type", Object)
    ], TrabajadorPage.prototype, "fileButton", void 0);
    TrabajadorPage = tslib_1.__decorate([
        Component({
            selector: 'app-trabajador',
            templateUrl: './trabajador.page.html',
            styleUrls: ['./trabajador.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [Router, AlertController,
            Http, AngularFirestore])
    ], TrabajadorPage);
    return TrabajadorPage;
}());
export { TrabajadorPage };
//# sourceMappingURL=trabajador.page.js.map