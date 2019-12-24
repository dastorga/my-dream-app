import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-persona',
  templateUrl: './persona.component.html',
  styleUrls: ['./persona.component.css']
})
export class PersonaComponent {

  nombrePersona:String = "Juan";
  apellidoPersona:String = "Perez";
  edad:number = 90;

}
