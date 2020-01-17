import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { HomeusuarioPage } from './homeusuario.page';
var routes = [
    {
        path: '',
        component: HomeusuarioPage
    }
];
var HomeusuarioPageModule = /** @class */ (function () {
    function HomeusuarioPageModule() {
    }
    HomeusuarioPageModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                RouterModule.forChild(routes)
            ],
            declarations: [HomeusuarioPage]
        })
    ], HomeusuarioPageModule);
    return HomeusuarioPageModule;
}());
export { HomeusuarioPageModule };
//# sourceMappingURL=homeusuario.module.js.map