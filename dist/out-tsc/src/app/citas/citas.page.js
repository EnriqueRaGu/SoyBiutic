import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AngularFirestore } from '@angular/fire/firestore';
import { CrudServicio } from '../servicios/crud.servicio';
import { DatosServicio } from '../servicios/datos.servicio';
import { ModalController, AlertController } from '@ionic/angular';
import { ModalPage } from '../modal/modal.page';
import { CalendarioPage } from '../calendario/calendario.page';
import { MenuController } from '@ionic/angular';
var CitasPage = /** @class */ (function () {
    function CitasPage(router, afs, crudServicio, dat, modalCtrl, route, alert, menu) {
        this.router = router;
        this.afs = afs;
        this.crudServicio = crudServicio;
        this.dat = dat;
        this.modalCtrl = modalCtrl;
        this.route = route;
        this.alert = alert;
        this.menu = menu;
    }
    CitasPage.prototype.ngOnInit = function () {
        var _this = this;
        this.nombre = this.route.snapshot.paramMap.get('nombre');
        this.hoy = this.dat.getFecha();
        this.afs.collection(this.nombre + "/" + this.hoy + "/cita", function (ref) {
            return ref.orderBy("Horainicio", "asc");
        }).valueChanges().subscribe(function (data) {
            _this.citas = data;
            _this.arr = _this.citas.length;
        });
    };
    CitasPage.prototype.volver = function () {
        this.router.navigate(['/home']);
    };
    CitasPage.prototype.agendarC = function () {
        this.router.navigate(['/agendarcita/' + this.nombre.split('/')[0]]);
    };
    CitasPage.prototype.editarCita = function (cita) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var id, cliente, tipo, fecha, horaI, horaF, nombre, modal;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        id = cita.id;
                        cliente = cita.Cliente;
                        tipo = cita.Tipo;
                        fecha = cita.Fecha;
                        horaI = cita.Horainicio;
                        horaF = cita.Horafin;
                        nombre = this.nombre;
                        return [4 /*yield*/, this.modalCtrl.create({
                                component: ModalPage,
                                componentProps: {
                                    id: id,
                                    cliente: cliente,
                                    tipo: tipo,
                                    fecha: fecha,
                                    horaI: horaI,
                                    horaF: horaF,
                                    nombre: nombre
                                }
                            })];
                    case 1:
                        modal = _a.sent();
                        return [4 /*yield*/, modal.present()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    CitasPage.prototype.borrarCita = function (cita) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var alert;
            var _this = this;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alert.create({
                            header: "Esta seguro que quiere eliminar?",
                            buttons: [
                                {
                                    text: 'Confirmar',
                                    handler: function () {
                                        _this.afs.doc(_this.nombre + "/" + cita.Fecha + "/cita/" + cita.Horainicio).delete();
                                    }
                                }, "Cancelar"
                            ]
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
    CitasPage.prototype.irCalendario = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var modal;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.modalCtrl.create({
                            component: CalendarioPage,
                            cssClass: 'my-modal-css'
                        })];
                    case 1:
                        modal = _a.sent();
                        return [4 /*yield*/, modal.present()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    CitasPage = tslib_1.__decorate([
        Component({
            selector: 'app-citas',
            templateUrl: './citas.page.html',
            styleUrls: ['./citas.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [Router, AngularFirestore, CrudServicio,
            DatosServicio, ModalController, ActivatedRoute,
            AlertController, MenuController])
    ], CitasPage);
    return CitasPage;
}());
export { CitasPage };
//# sourceMappingURL=citas.page.js.map