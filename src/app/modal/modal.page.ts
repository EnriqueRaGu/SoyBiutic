import { Component, OnInit, Input } from '@angular/core';
import { NavController,ModalController, NavParams, AlertController } from '@ionic/angular';
import { CrudServicio } from '../servicios/crud.servicio';
import { Router } from '@angular/router';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.page.html',
  styleUrls: ['./modal.page.scss'],
})
export class ModalPage implements OnInit {
  @Input() cliente: string;
  @Input() tipo: string;
  @Input() fecha: string;
  @Input() horaI: string;
  @Input() horaF: string;
  @Input() nombre:string;


  constructor(private nav:NavController,private modalCtrl:ModalController, navParams: NavParams, 
              private crudServicio: CrudServicio, public router: Router, public alert: AlertController,
              private afs: AngularFirestore) { 
  }

  ngOnInit() {
  }

  closeModal()
  {
    this.modalCtrl.dismiss();
  }
  editarCita() {
    let f, h;
    let record = {};
      record['Cliente'] = this.cliente;
      record['Fecha'] = this.fecha;
      record['Horainicio'] = this.horaI;
      record['Horafin'] = this.horaF;
      record['Tipo'] = this.tipo;
    f = this.fecha;
    h = this.horaI;
    this.afs.doc(`${this.nombre}/${f}/cita/${h}`).update(record);
    this.router.navigate(['/home'])
    this.showAlert("Bien!", "Se modifico la cita corectamente!")
  }

  async showAlert(header: string, message: string) {
    const alert = await this.alert.create({
      header,
      message,
      buttons: ["OK"]
    })

    await alert.present()
}

}
