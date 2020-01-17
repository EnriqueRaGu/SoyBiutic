import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { AgendarcitaPage } from './agendarcita.page';
var routes = [
    {
        path: '',
        component: AgendarcitaPage
    }
];
var AgendarcitaPageModule = /** @class */ (function () {
    function AgendarcitaPageModule() {
    }
    AgendarcitaPageModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                RouterModule.forChild(routes)
            ],
            declarations: [AgendarcitaPage]
        })
    ], AgendarcitaPageModule);
    return AgendarcitaPageModule;
}());
export { AgendarcitaPageModule };
//# sourceMappingURL=agendarcita.module.js.map