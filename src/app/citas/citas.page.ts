import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { CrudServicio } from '../servicios/crud.servicio';
import { DatosServicio } from '../servicios/datos.servicio';
import { ModalController, AlertController } from '@ionic/angular';
import { ModalPage } from '../modal/modal.page';
import { CalendarioPage } from '../calendario/calendario.page';
import { MenuController } from '@ionic/angular';


@Component({
  selector: 'app-citas',
  templateUrl: './citas.page.html',
  styleUrls: ['./citas.page.scss'],
})
export class CitasPage implements OnInit {

  citas: any
  arr
  nombre: string
  hoy
 
  constructor(public router: Router, private afs: AngularFirestore, private crudServicio: CrudServicio,
              private dat: DatosServicio, public modalCtrl: ModalController, private route: ActivatedRoute,
              public alert: AlertController, private menu: MenuController) { }

ngOnInit() {
    this.nombre = this.route.snapshot.paramMap.get('nombre')
    this.hoy = this.dat.getFecha();
    this.afs.collection(`${this.nombre}/${this.hoy}/cita`, ref =>
              ref.orderBy("Horainicio", "asc")).valueChanges().subscribe((data:any) => {
      this.citas = data
      this.arr = this.citas.length 
    })
}
  volver() {
    this.router.navigate(['/home'])
  }
  agendarC() {
    this.router.navigate(['/agendarcita/' + this.nombre.split('/')[0]])
  }

  async editarCita(cita) {
    let id = cita.id
    let cliente = cita.Cliente
    let tipo = cita.Tipo
    let fecha = cita.Fecha
    let horaI = cita.Horainicio
    let horaF = cita.Horafin
    let nombre = this.nombre
    const modal = await this.modalCtrl.create({
     component: ModalPage,
     componentProps: {
      id,
      cliente,
      tipo,
      fecha,
      horaI,
      horaF,
      nombre
    }
   });

   return await modal.present();
  }

   async borrarCita(cita) {
    const alert = await this.alert.create({
      header: "Esta seguro que quiere eliminar?",
      buttons: [
        {
          text: 'Confirmar',
          handler: () => {
            this.afs.doc(`${this.nombre}/${cita.Fecha}/cita/${cita.Horainicio}`).delete();
          }
        }, "Cancelar"]
    })

    await alert.present()
  }

  async irCalendario() {
    const modal = await this.modalCtrl.create({
     component: CalendarioPage,
     cssClass: 'my-modal-css'
     
   });
   return await modal.present();
  }

}
