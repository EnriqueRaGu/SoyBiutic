import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AngularFirestore } from '@angular/fire/firestore';
import { CrudServicio } from './../servicios/crud.servicio';
import { AlertController } from '@ionic/angular';
import { DatosServicio } from '../servicios/datos.servicio';
var AgendarcitaPage = /** @class */ (function () {
    function AgendarcitaPage(router, afs, crudServicio, alert, dat, route) {
        this.router = router;
        this.afs = afs;
        this.crudServicio = crudServicio;
        this.alert = alert;
        this.dat = dat;
        this.route = route;
        this.fechaHoy = this.dat.getFecha();
        this.fecha2 = this.dat.getFecha2();
        this.fecha3 = this.dat.getFecha3();
        this.fecha4 = this.dat.getFecha4();
        this.fecha5 = this.dat.getFecha5();
        this.h = [];
        this.veces = 1;
    }
    AgendarcitaPage.prototype.ngOnInit = function () {
        this.nombre = this.route.snapshot.paramMap.get('nombre');
    };
    AgendarcitaPage.prototype.comprobar = function () {
        var _this = this;
        this.horaAct = this.dat.getHora();
        this.hoy = this.dat.getFecha();
        this.afs.collection(this.nombre + "/" + this.hoy + "/cita").valueChanges().subscribe(function (data) {
            _this.datos = data;
            _this.tam = _this.datos.length;
            if (_this.veces == 1) {
                console.log("vez numero", _this.veces);
                console.log("tamaño", _this.tam);
                for (_this.x = 0; _this.x < _this.tam; _this.x++) {
                    _this.h[_this.x] = data[_this.x].Horainicio;
                }
                console.log(_this.h);
                _this.res = _this.h.includes(_this.horainicio);
                console.log(_this.res);
                if (_this.horaAct < _this.horainicio) {
                    console.log("puede agendar");
                    if (_this.res) {
                        console.log("error");
                        _this.router.navigate(['/citas/' + _this.nombre.split('/')[0]]);
                        _this.showAlert("Cuidado!", "Esta hora ya esta apartada!");
                    }
                    else {
                        _this.agendarCita();
                    }
                }
                else {
                    console.log("error");
                    _this.router.navigate(['/citas/' + _this.nombre.split('/')[0]]);
                    _this.showAlert("Cuidado!", "Esta hora ya paso!");
                }
                _this.veces = _this.veces + 1;
            }
        });
    };
    AgendarcitaPage.prototype.agendarCita = function () {
        var _this = this;
        //////////////////
        var f;
        var h;
        var record = {};
        record['Cliente'] = this.cliente;
        record['Fecha'] = this.fecha;
        record['Horainicio'] = this.horainicio;
        record['Horafin'] = this.horafin;
        record['Tipo'] = this.tipo;
        f = this.fecha;
        h = this.horainicio;
        this.afs.doc(this.nombre + "/" + f + "/cita/" + h).set(record).then(function (resp) {
            _this.cliente = "";
            _this.fecha = "";
            _this.horainicio = "";
            _this.horafin = "";
            _this.tipo = "";
            _this.router.navigate(['/citas/' + _this.nombre.split('/')[0]]);
            _this.showAlert("Bien!", "Se agendo la cita corectamente!");
        })
            .catch(function (error) {
            console.log(error);
        });
        //////////////////////     
    };
    AgendarcitaPage.prototype.volver = function () {
        this.router.navigate(['/home']);
    };
    AgendarcitaPage.prototype.showAlert = function (header, message) {
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
    AgendarcitaPage = tslib_1.__decorate([
        Component({
            selector: 'app-agendarcita',
            templateUrl: './agendarcita.page.html',
            styleUrls: ['./agendarcita.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [Router, AngularFirestore, CrudServicio,
            AlertController, DatosServicio, ActivatedRoute])
    ], AgendarcitaPage);
    return AgendarcitaPage;
}());
export { AgendarcitaPage };
//# sourceMappingURL=agendarcita.page.js.map