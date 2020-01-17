import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DatosServicio {

    fech = new Date();
    
  constructor() { }

  getHora() {
    let h = this.fech.getHours()
    return h;
  }

  getFecha() {
    let ffull;
      ffull = this.fech.getDate() +"-"+ (this.fech.getMonth()+1) +"-"+ this.fech.getFullYear()
      return ffull;
  }
  getFecha2() {
    let ffull;
      ffull = (this.fech.getDate()+1) +"-"+ (this.fech.getMonth()+1) +"-"+ this.fech.getFullYear()
      return ffull;
  }
  getFecha3() {
    let ffull;
      ffull = (this.fech.getDate()+2) +"-"+ (this.fech.getMonth()+1) +"-"+ this.fech.getFullYear()
      return ffull;
  }
  getFecha4() {
    let ffull;
      ffull = (this.fech.getDate()+3) +"-"+ (this.fech.getMonth()+1) +"-"+ this.fech.getFullYear()
      return ffull;
  }
  getFecha5() {
    let ffull;
      ffull = (this.fech.getDate()+4) +"-"+ (this.fech.getMonth()+1) +"-"+ this.fech.getFullYear()
      return ffull;
  }
}