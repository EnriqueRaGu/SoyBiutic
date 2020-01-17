import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth'


@Component({
  selector: 'app-homeusuario',
  templateUrl: './homeusuario.page.html',
  styleUrls: ['./homeusuario.page.scss'],
})
export class HomeusuarioPage implements OnInit {

  constructor(public afAuth: AngularFireAuth) { }

  ngOnInit() {
  }

  cerrarSesion() {
    this.afAuth.auth.signOut();
}

}
