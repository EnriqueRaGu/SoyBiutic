import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
var DatosServicio = /** @class */ (function () {
    function DatosServicio() {
        this.fech = new Date();
    }
    DatosServicio.prototype.getHora = function () {
        var h = this.fech.getHours();
        return h;
    };
    DatosServicio.prototype.getFecha = function () {
        var ffull;
        ffull = this.fech.getDate() + "-" + (this.fech.getMonth() + 1) + "-" + this.fech.getFullYear();
        return ffull;
    };
    DatosServicio.prototype.getFecha2 = function () {
        var ffull;
        ffull = (this.fech.getDate() + 1) + "-" + (this.fech.getMonth() + 1) + "-" + this.fech.getFullYear();
        return ffull;
    };
    DatosServicio.prototype.getFecha3 = function () {
        var ffull;
        ffull = (this.fech.getDate() + 2) + "-" + (this.fech.getMonth() + 1) + "-" + this.fech.getFullYear();
        return ffull;
    };
    DatosServicio.prototype.getFecha4 = function () {
        var ffull;
        ffull = (this.fech.getDate() + 3) + "-" + (this.fech.getMonth() + 1) + "-" + this.fech.getFullYear();
        return ffull;
    };
    DatosServicio.prototype.getFecha5 = function () {
        var ffull;
        ffull = (this.fech.getDate() + 4) + "-" + (this.fech.getMonth() + 1) + "-" + this.fech.getFullYear();
        return ffull;
    };
    DatosServicio = tslib_1.__decorate([
        Injectable({
            providedIn: 'root',
        }),
        tslib_1.__metadata("design:paramtypes", [])
    ], DatosServicio);
    return DatosServicio;
}());
export { DatosServicio };
//# sourceMappingURL=datos.servicio.js.map