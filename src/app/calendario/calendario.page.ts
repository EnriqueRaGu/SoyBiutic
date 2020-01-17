import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-calendario',
  templateUrl: './calendario.page.html',
  styleUrls: ['./calendario.page.scss'],
})
export class CalendarioPage implements OnInit {

  eventSource = [];

  calendar = {
    mode: 'month',
    currentDate: new Date(),
  }
  mes
  fecha

  constructor(private modalCtrl:ModalController) { }

  ngOnInit() {
  }
  closeModal() {
    this.modalCtrl.dismiss();
  }

  onEventSelected() {
  }

  onViewTitleChanged(event) {
    this.mes = event
    
  }
  onTimeSelected(event) {
    console.log("selecciono el dia: ")
    this.fecha = event.selectedTime.getDate() +"-"+ (event.selectedTime.getMonth()+1) +"-"+ event.selectedTime.getFullYear()
    console.log(this.fecha)
  }

}
