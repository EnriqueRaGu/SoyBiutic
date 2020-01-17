import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { EditarCitaPage } from './editar-cita.page';
var routes = [
    {
        path: '',
        component: EditarCitaPage
    }
];
var EditarCitaPageModule = /** @class */ (function () {
    function EditarCitaPageModule() {
    }
    EditarCitaPageModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                RouterModule.forChild(routes)
            ],
            declarations: [EditarCitaPage]
        })
    ], EditarCitaPageModule);
    return EditarCitaPageModule;
}());
export { EditarCitaPageModule };
//# sourceMappingURL=editar-cita.module.js.map