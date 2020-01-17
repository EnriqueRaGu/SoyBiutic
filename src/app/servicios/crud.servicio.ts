import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class CrudServicio {
  
  constructor(private afs: AngularFirestore) { }
  
  crearTrabajador(datos, n) {
    return this.afs.doc(`Trabajadores/${n}`).set(datos);
  }
}