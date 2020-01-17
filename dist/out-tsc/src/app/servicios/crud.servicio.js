import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
var CrudServicio = /** @class */ (function () {
    function CrudServicio(afs) {
        this.afs = afs;
    }
    CrudServicio.prototype.crearTrabajador = function (datos, n) {
        return this.afs.doc("Trabajadores/" + n).set(datos);
    };
    CrudServicio = tslib_1.__decorate([
        Injectable({
            providedIn: 'root'
        }),
        tslib_1.__metadata("design:paramtypes", [AngularFirestore])
    ], CrudServicio);
    return CrudServicio;
}());
export { CrudServicio };
//# sourceMappingURL=crud.servicio.js.map