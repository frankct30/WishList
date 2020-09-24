import { Component, OnInit } from '@angular/core';
import { DestinoViaje } from '/../../../models/destino-viaje.models';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'app-lista-destinos',
  templateUrl: './lista-destinos.component.html',
  styleUrls: ['./lista-destinos.component.css']
})
export class ListaDestinosComponent implements OnInit {
  
  destinos:DestinoViaje[];
 
  constructor() { this.destinos=[]; }

  ngOnInit() {
  }

  guardar(form){    
    console.log(new DestinoViaje(form.controls.nombre.value,form.controls.imagenUrl.value));
    this.destinos.push(new DestinoViaje(form.controls.nombre.value,form.controls.imagenUrl.value));    
    form.reset()
  }
}
