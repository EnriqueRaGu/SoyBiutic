import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
var CalendarioPage = /** @class */ (function () {
    function CalendarioPage(modalCtrl) {
        this.modalCtrl = modalCtrl;
        this.eventSource = [];
        this.calendar = {
            mode: 'month',
            currentDate: new Date(),
        };
    }
    CalendarioPage.prototype.ngOnInit = function () {
    };
    CalendarioPage.prototype.closeModal = function () {
        this.modalCtrl.dismiss();
    };
    CalendarioPage.prototype.onEventSelected = function () {
    };
    CalendarioPage.prototype.onViewTitleChanged = function (event) {
        this.mes = event;
    };
    CalendarioPage.prototype.onTimeSelected = function (event) {
        console.log("selecciono el dia: ");
        this.fecha = event.selectedTime.getDate() + "-" + (event.selectedTime.getMonth() + 1) + "-" + event.selectedTime.getFullYear();
        console.log(this.fecha);
    };
    CalendarioPage = tslib_1.__decorate([
        Component({
            selector: 'app-calendario',
            templateUrl: './calendario.page.html',
            styleUrls: ['./calendario.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [ModalController])
    ], CalendarioPage);
    return CalendarioPage;
}());
export { CalendarioPage };
//# sourceMappingURL=calendario.page.js.map