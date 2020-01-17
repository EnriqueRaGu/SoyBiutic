import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth'
import { Router } from '@angular/router'
import { AlertController } from '@ionic/angular'

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  
	usuario: string = ""
  contrasena: string = ""
  
  constructor(public afAuth: AngularFireAuth, public router: Router, public alert: AlertController) {
    // this.afAuth.authState.subscribe(user => {
    //   console.log('Estado del usuario: ', user);
    //   if(!user) {
    //     return ;
    //   }
    //   this.router.navigate(['/home'])
    // })
   }

  ngOnInit() {
  }
  async login() {
  	const { usuario, contrasena } = this

  	try {
  		//hack.
      const res = await this.afAuth.auth.signInWithEmailAndPassword(usuario + '@gmail.com', contrasena)
      var user = this.afAuth.auth.currentUser;
      if (user) {
        if(usuario == "soybiutic") {
          this.router.navigate(['/home'])
          console.log("usuario administrador");
        }else {
          this.router.navigate(['/homeusuario'])
          console.log("usuario normal");
        }
      }

  	}catch(err) {
      this.showAlert("Error!", "Datos no validos")
  		console.dir(err)
  		if(err.code === "auth/user-not-found"){
        console.log("User not Found")
        this.showAlert("Error!", "Datos no validos")
  		}
  	}
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
