import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';
import { AngularFireAuth } from '@angular/fire/auth'
import { DatosServicio } from '../servicios/datos.servicio';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  facturado = "-------"
  empleados
  hora
  minutos

  constructor(public router: Router, private menu: MenuController, public afAuth: AngularFireAuth, 
              private dat: DatosServicio, private afs: AngularFirestore) {
                
        this.afAuth.authState.subscribe(user => {
          console.log('Estado del usuario: ', user);
          if(!user) {
            this.router.navigate(['/login'])
          }
        });

        this.afs.collection(`empleados/`)
                .valueChanges().subscribe((data:any) => {
            this.empleados = data
          })
          
        }

  ngOnInit() { 
    // var myVar = setInterval(this.myTimer, 1000);
    // console.log(myVar)
  }

//  myTimer() {
//   var d = new Date();
//   document.getElementById("demo").innerHTML = d.toLocaleTimeString();
// }
  

  openFirst() {
    this.menu.enable(true, 'first');
    this.menu.open('first');
  }

  cerrarSesion() {
      this.afAuth.auth.signOut();
      console.log('Cierre completado');
  }

  trabajador() {
    this.router.navigate(['/trabajador'])
  }

  encargada(nombre) {
    console.log(nombre)
    this.router.navigate(['/citas/' + nombre.split('/')[0]])
  }
  agendarC() {
    this.router.navigate(['/agendarcitahome'])
  }

}
