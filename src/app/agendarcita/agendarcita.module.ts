import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { AgendarcitaPage } from './agendarcita.page';

const routes: Routes = [
  {
    path: '',
    component: AgendarcitaPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [AgendarcitaPage]
})
export class AgendarcitaPageModule {}
