import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { Router } from '@angular/router';
var EditarCitaPage = /** @class */ (function () {
    function EditarCitaPage(router) {
        this.router = router;
    }
    EditarCitaPage.prototype.ngOnInit = function () {
    };
    EditarCitaPage.prototype.volver = function () {
        this.router.navigate(['/citas']);
    };
    EditarCitaPage = tslib_1.__decorate([
        Component({
            selector: 'app-editar-cita',
            templateUrl: './editar-cita.page.html',
            styleUrls: ['./editar-cita.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [Router])
    ], EditarCitaPage);
    return EditarCitaPage;
}());
export { EditarCitaPage };
//# sourceMappingURL=editar-cita.page.js.map