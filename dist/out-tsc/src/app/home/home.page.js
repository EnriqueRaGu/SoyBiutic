import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';
import { AngularFireAuth } from '@angular/fire/auth';
import { DatosServicio } from '../servicios/datos.servicio';
import { AngularFirestore } from '@angular/fire/firestore';
var HomePage = /** @class */ (function () {
    function HomePage(router, menu, afAuth, dat, afs) {
        var _this = this;
        this.router = router;
        this.menu = menu;
        this.afAuth = afAuth;
        this.dat = dat;
        this.afs = afs;
        this.facturado = "-------";
        this.afAuth.authState.subscribe(function (user) {
            console.log('Estado del usuario: ', user);
            if (!user) {
                _this.router.navigate(['/login']);
            }
        });
        this.afs.collection("empleados/")
            .valueChanges().subscribe(function (data) {
            _this.empleados = data;
        });
    }
    HomePage.prototype.ngOnInit = function () {
        // var myVar = setInterval(this.myTimer, 1000);
        // console.log(myVar)
    };
    //  myTimer() {
    //   var d = new Date();
    //   document.getElementById("demo").innerHTML = d.toLocaleTimeString();
    // }
    HomePage.prototype.openFirst = function () {
        this.menu.enable(true, 'first');
        this.menu.open('first');
    };
    HomePage.prototype.cerrarSesion = function () {
        this.afAuth.auth.signOut();
        console.log('Cierre completado');
    };
    HomePage.prototype.trabajador = function () {
        this.router.navigate(['/trabajador']);
    };
    HomePage.prototype.encargada = function (nombre) {
        console.log(nombre);
        this.router.navigate(['/citas/' + nombre.split('/')[0]]);
    };
    HomePage.prototype.agendarC = function () {
        this.router.navigate(['/agendarcitahome']);
    };
    HomePage = tslib_1.__decorate([
        Component({
            selector: 'app-home',
            templateUrl: 'home.page.html',
            styleUrls: ['home.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [Router, MenuController, AngularFireAuth,
            DatosServicio, AngularFirestore])
    ], HomePage);
    return HomePage;
}());
export { HomePage };
//# sourceMappingURL=home.page.js.map