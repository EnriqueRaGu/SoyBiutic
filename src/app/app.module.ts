import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { LOCALE_ID } from '@angular/core';
import localeEs from '@angular/common/locales/es';
import { registerLocaleData } from '@angular/common';
registerLocaleData(localeEs);

import firebaseConfig from './firebase'
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth'
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { ModalPageModule } from './modal/modal.module';

import { HttpModule } from '@angular/http'
import { CalendarioPageModule } from './calendario/calendario.module';

@NgModule({
  declarations: [
    AppComponent],
    entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(), 
    AppRoutingModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireAuthModule,
    AngularFirestoreModule,
    ModalPageModule,
    CalendarioPageModule,
    HttpModule,
   ],

  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    {provide: LOCALE_ID, useValue:"es" }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
