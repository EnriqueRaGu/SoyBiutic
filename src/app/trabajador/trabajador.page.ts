import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { Http } from '@angular/http';
import { AngularFirestore } from '@angular/fire/firestore';
import { DatosServicio } from '../servicios/datos.servicio';

@Component({
  selector: 'app-trabajador',
  templateUrl: './trabajador.page.html',
  styleUrls: ['./trabajador.page.scss'],
})
export class TrabajadorPage implements OnInit {
  nombre: string
  profilePic: string
  imageURL: string

  @ViewChild('fileButton') fileButton

  constructor(private router: Router, public alert: AlertController,
              private http: Http, private afs: AngularFirestore) { }

  ngOnInit() {
  }

  async createPost() {
    const image = this.imageURL
    const nombre = this.nombre
    this.afs.doc(`empleados/${nombre}`).set({
			nombre,
      image
		})
    this.imageURL = ""
    this.nombre = ""
    this.router.navigate(['/home'])
    this.showAlert("Bien!", "Se agrego el trabajador corectamente!")
  
  }

  volver() {
    this.router.navigate(['/home'])
  }

  async showAlert(header: string, message: string) {
    const alert = await this.alert.create({
      header,
      message,
      buttons: ["OK"]
    })

    await alert.present()
}

fileChanged(event) {
  const files = event.target.files
  const data = new FormData()
  data.append('file', files[0])
  data.append('UPLOADCARE_STORE', '1')
  data.append('UPLOADCARE_PUB_KEY', 'ddf99e53132b3e7a2b63')
  
  this.http.post('https://upload.uploadcare.com/base/', data)
  .subscribe(event => {
    console.log(event)
    this.imageURL = event.json().file
  })
}

uploadFile() {
  this.fileButton.nativeElement.click()
}

}
