import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { TrabajadorPage } from './trabajador.page';
var routes = [
    {
        path: '',
        component: TrabajadorPage
    }
];
var TrabajadorPageModule = /** @class */ (function () {
    function TrabajadorPageModule() {
    }
    TrabajadorPageModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                RouterModule.forChild(routes)
            ],
            declarations: [TrabajadorPage]
        })
    ], TrabajadorPageModule);
    return TrabajadorPageModule;
}());
export { TrabajadorPageModule };
//# sourceMappingURL=trabajador.module.js.map