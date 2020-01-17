import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-editar-cita',
  templateUrl: './editar-cita.page.html',
  styleUrls: ['./editar-cita.page.scss'],
})
export class EditarCitaPage implements OnInit {

  constructor(public router: Router) { }

  ngOnInit() {
  }
  volver() {
    this.router.navigate(['/citas'])
  }

}
