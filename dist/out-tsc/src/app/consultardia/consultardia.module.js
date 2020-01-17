import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { ConsultardiaPage } from './consultardia.page';
var routes = [
    {
        path: '',
        component: ConsultardiaPage
    }
];
var ConsultardiaPageModule = /** @class */ (function () {
    function ConsultardiaPageModule() {
    }
    ConsultardiaPageModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                RouterModule.forChild(routes)
            ],
            declarations: [ConsultardiaPage]
        })
    ], ConsultardiaPageModule);
    return ConsultardiaPageModule;
}());
export { ConsultardiaPageModule };
//# sourceMappingURL=consultardia.module.js.map