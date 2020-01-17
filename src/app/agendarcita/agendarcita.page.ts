import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AngularFirestore } from '@angular/fire/firestore';
import { CrudServicio } from './../servicios/crud.servicio';
import { AlertController } from '@ionic/angular';
import { DatosServicio } from '../servicios/datos.servicio';

@Component({
  selector: 'app-agendarcita',
  templateUrl: './agendarcita.page.html',
  styleUrls: ['./agendarcita.page.scss'],
})
export class AgendarcitaPage implements OnInit {


  cliente: string;
  tipo: string;
  horainicio
  horafin
  fecha

  fechaHoy = this.dat.getFecha();
  fecha2 = this.dat.getFecha2();
  fecha3 = this.dat.getFecha3();
  fecha4 = this.dat.getFecha4();
  fecha5 = this.dat.getFecha5();

 hoy 
 tam
 datos
 x
 h = []
 res: boolean
 veces = 1
 nombre
 horaAct

  constructor(public router: Router, public afs: AngularFirestore, private crudServicio: CrudServicio, 
              public alert: AlertController, private dat: DatosServicio, private route: ActivatedRoute) {  
     }

  ngOnInit() {
    this.nombre = this.route.snapshot.paramMap.get('nombre')
  }

  comprobar() {
    this.horaAct = this.dat.getHora()
    this.hoy = this.dat.getFecha();
    this.afs.collection(`${this.nombre}/${this.hoy}/cita`).valueChanges().subscribe((data:any) => {
        this.datos = data
        this.tam = this.datos.length 
        
        if(this.veces == 1) {
                  console.log("vez numero", this.veces)

                  console.log("tamaño",this.tam);
                  for(this.x=0; this.x < this.tam; this.x++) {
                    this.h[this.x] = data[this.x].Horainicio 
                }
                console.log(this.h)

                this.res = this.h.includes(this.horainicio);
                console.log(this.res)

                if(this.horaAct < this.horainicio) {
                  console.log("puede agendar")
                    if(this.res) {
                      console.log("error")
                      this.router.navigate(['/citas/' + this.nombre.split('/')[0]])
                        this.showAlert("Cuidado!", "Esta hora ya esta apartada!")
                      
                  } else {
                    this.agendarCita()
                  }
                }else {
                  console.log("error")
                      this.router.navigate(['/citas/' + this.nombre.split('/')[0]])
                        this.showAlert("Cuidado!", "Esta hora ya paso!")
                }

               
                this.veces = this.veces+1
        }
   })        
   
  }
 
  agendarCita() {
      //////////////////
      let f
      let h: number
      let record = {};
        record['Cliente'] = this.cliente;
        record['Fecha'] = this.fecha;
        record['Horainicio'] = this.horainicio;
        record['Horafin'] = this.horafin;
        record['Tipo'] = this.tipo;
      f = this.fecha;
      h = this.horainicio;
      this.afs.doc(`${this.nombre}/${f}/cita/${h}`).set(record).then(resp => {
        this.cliente = "";
        this.fecha = "";
        this.horainicio = "";
        this.horafin = "";
        this.tipo = "";
        this.router.navigate(['/citas/' + this.nombre.split('/')[0]])
        this.showAlert("Bien!", "Se agendo la cita corectamente!")
      })
        .catch(error => {
          console.log(error);
        });
      //////////////////////     
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
  
}
