import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { CitasPage } from './citas.page';
import { ShareModule } from '../share.module';

const routes: Routes = [
  {
    path: '',
    component: CitasPage
  }
];

@NgModule({
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
export class CitasPageModule {}
