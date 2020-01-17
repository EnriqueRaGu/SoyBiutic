import * as tslib_1 from "tslib";
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { CitasPage } from './citas.page';
import { ShareModule } from '../share.module';
var routes = [
    {
        path: '',
        component: CitasPage
    }
];
var CitasPageModule = /** @class */ (function () {
    function CitasPageModule() {
    }
    CitasPageModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                RouterModule.forChild(routes),
                ShareModule
            ],
            schemas: [CUSTOM_ELEMENTS_SCHEMA],
            declarations: [CitasPage]
        })
    ], CitasPageModule);
    return CitasPageModule;
}());
export { CitasPageModule };
//# sourceMappingURL=citas.module.js.map