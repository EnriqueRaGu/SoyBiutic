import * as tslib_1 from "tslib";
import { Component, Input } from '@angular/core';
import { NavController, ModalController, NavParams, AlertController } from '@ionic/angular';
import { CrudServicio } from '../servicios/crud.servicio';
import { Router } from '@angular/router';
import { AngularFirestore } from '@angular/fire/firestore';
var ModalPage = /** @class */ (function () {
    function ModalPage(nav, modalCtrl, navParams, crudServicio, router, alert, afs) {
        this.nav = nav;
        this.modalCtrl = modalCtrl;
        this.crudServicio = crudServicio;
        this.router = router;
        this.alert = alert;
        this.afs = afs;
    }
    ModalPage.prototype.ngOnInit = function () {
    };
    ModalPage.prototype.closeModal = function () {
        this.modalCtrl.dismiss();
    };
    ModalPage.prototype.editarCita = function () {
        var f, h;
        var record = {};
        record['Cliente'] = this.cliente;
        record['Fecha'] = this.fecha;
        record['Horainicio'] = this.horaI;
        record['Horafin'] = this.horaF;
        record['Tipo'] = this.tipo;
        f = this.fecha;
        h = this.horaI;
        this.afs.doc(this.nombre + "/" + f + "/cita/" + h).update(record);
        this.router.navigate(['/home']);
        this.showAlert("Bien!", "Se modifico la cita corectamente!");
    };
    ModalPage.prototype.showAlert = function (header, message) {
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
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", String)
    ], ModalPage.prototype, "cliente", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", String)
    ], ModalPage.prototype, "tipo", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", String)
    ], ModalPage.prototype, "fecha", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", String)
    ], ModalPage.prototype, "horaI", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", String)
    ], ModalPage.prototype, "horaF", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", String)
    ], ModalPage.prototype, "nombre", void 0);
    ModalPage = tslib_1.__decorate([
        Component({
            selector: 'app-modal',
            templateUrl: './modal.page.html',
            styleUrls: ['./modal.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [NavController, ModalController, NavParams,
            CrudServicio, Router, AlertController,
            AngularFirestore])
    ], ModalPage);
    return ModalPage;
}());
export { ModalPage };
//# sourceMappingURL=modal.page.js.map